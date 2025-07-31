import { promises as fs } from 'fs';
import fsSync from 'fs';
import { resolve, dirname, join, extname } from 'path';
import config_service from './config_service.js';
import yandex_client from './yandex_client.js';
import axios from 'axios';
import files from './files.js';
import time from './time.js';

const OCR_API_URL = 'https://ocr.api.cloud.yandex.net/ocr/v1/recognizeText';

const QUEUE_SUB_DIRECTORY = 'data/queue';

/**
 * Асинхронная функция, возвращающая список файлов в очереди на OCR.
 * @returns {Promise<string[]>} Список файлов
 */
async function get_queued_files() {
    console.log(`Получаем список файлов в очереди...`);
    const queueDir = files.get_full_path(true, QUEUE_SUB_DIRECTORY).full_path;

    try {
        const files = await fs.readdir(queueDir);
        const fileChecks = await Promise.all(
            files.map(async (file) => {
                const fullPath = join(queueDir, file);
                const stat = await fs.stat(fullPath);
                return stat.isFile() ? file : null;
            })
        );

        console.log(`Найдено ${fileChecks.length} файлов в очереди`);

        // Фильтруем null и возвращаем только файлы
        return fileChecks.filter(Boolean);
    } catch (err) {
        throw new Error(`Ошибка чтения файлов из очереди: ${err.message}`);
    }
}

/**
 * Получить mime-type по расширению файла.
 * @param {string} filename 
 * @returns {string} mime-type
 */
function get_mime_type(filename) {
    const ext = extname(filename).toLowerCase();
    switch (ext) {
        case '.pdf': return 'application/pdf';
        case '.png': return 'PNG';
        case '.jpg':
        case '.jpeg': return 'JPEG';
        default: return null;
    }
}

/**
 * Отправить файл из очереди на Yandex OCR.
 * Возвращает объект с успехом или ошибкой.
 * @param {string} fileName Имя файла в очереди
 * @returns {Promise<Object>} { success, fileName, ocrResult?, errorMessage? }
 */
async function sendFileToOCR(fileName) {
    const queueDir = files.get_full_path(true, QUEUE_SUB_DIRECTORY).full_path;
    if (!fileName) {
        console.log('sendFileToOCR: файл не указан');
        return;
    }

    const filePath = join(queueDir, fileName);

    try {
        // Проверяем доступность файла
        await fs.access(filePath);

        let yandex_config = config_service.get_yandex_config();
        // Загружаем параметры для Yandex OCR из конфига
        const iamToken = await yandex_client.get_iam_token();
        const folderId = yandex_config.cloud.catalog_id;

        if (!iamToken) {
            throw new Error('IAM токен отсутствует: проверьте конфигурацию');
        }
        if (!folderId) {
            throw new Error('ID каталога отсутствует: проверьте конфигурацию');
        }

        // Читаем файл и конвертируем в base64
        const fileBuffer = await fs.readFile(filePath);
        const fileBase64 = fileBuffer.toString('base64');

        let data = {
            content: fileBase64,
            mimeType: get_mime_type(fileName),
            languageCodes: ['*'],
            model: "page"
        };

        let headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${iamToken}`,
            'x-folder-id': folderId,
            'x-data-logging-enabled': true
        }

        console.log(`Отправляем файл "${fileName}" на Yandex OCR...`);
        // Выполняем POST-запрос к Yandex OCR API
        let response = await axios.post(OCR_API_URL, data,
            { headers: headers, timeout: 120000 }).catch((error) => {
                //console.error(error);
                console.error(error?.response?.data?.error)
                console.error(`Ошибка отправки файла "${fileName}" на Yandex OCR: ${error.message}`);
            });

        if (!response) {
            return;
        }
        if (response.status !== 200) {
            console.error(`OCR API вернул ошибку: ${response.status}`);
            return
        }

        if (!response.data?.result) {
            console.error(`OCR API вернул пустой результат`);
            return
        }

        let result_filename = `ocr_result_${time.get_current_timestamp()}.json`;

        console.log(`OCR API вернул результат: ${JSON.stringify(response.data.result)}`);
        files.backup_data(QUEUE_SUB_DIRECTORY+'/ocr', result_filename, response.data.result, { stringify: 'json' });

        // Возвращаем успешный результат
        return {
            success: true,
            fileName,
            result: response.data.result
        };

    } catch (error) {
        console.error(`Ошибка OCR для файла "${fileName}": ${error.message}`);
        return {
            success: false,
            fileName,
            errorMessage: `Ошибка OCR для файла "${fileName}": ${error.message}`
        };
    }
}

/**
 * Express middleware: возвращает список файлов в очереди OCR
 */
async function expressListQueueHandler(req, res) {
    try {
        const files = await get_queued_files();
        res.json({
            success: true,
            count: files.length,
            files
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            errorMessage: `Ошибка получения списка файлов в очереди OCR: ${error.message}`
        });
    }
}


export default {
    get_queued_files,
    sendFileToOCR,
    expressListQueueHandler
};
