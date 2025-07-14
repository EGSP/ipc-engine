const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');
const configService = require('./configService');
const { getSession } = require('./yandexClient');

/**
 * Получение абсолютного пути до папки очереди из конфига.
 * Если папка не существует — ошибка.
 */
function getQueueDirectory() {
    // Получаем путь из конфига, например: "data/queue"
    const relativeQueuePath = configService.getConfigValue('paths.queueFolder');
    if (!relativeQueuePath) {
        throw new Error('Путь к папке очереди не задан в конфиге (ключ paths.queueFolder)');
    }

    // Для dev и prod вычисляем по-разному
    const execDir = process.env.NODE_ENV === 'development'
        ? path.resolve(__dirname, '..', '..') // корень проекта в dev
        : path.dirname(process.execPath);      // папка exe в prod

    const fullQueuePath = path.resolve(execDir, relativeQueuePath);

    return fullQueuePath;
}

/**
 * Асинхронно получить список файлов в папке очереди.
 * Возвращает массив имён файлов (без директорий).
 */
async function listFilesInQueue() {
    const queueDir = getQueueDirectory();

    try {
        const files = await fs.readdir(queueDir);
        const fileChecks = await Promise.all(files.map(async (file) => {
            const fullPath = path.join(queueDir, file);
            const stat = await fs.stat(fullPath);
            return stat.isFile() ? file : null;
        }));

        // Фильтруем null и возвращаем только файлы
        return fileChecks.filter(Boolean);
    } catch (err) {
        throw new Error(`Ошибка чтения файлов из очереди OCR: ${err.message}`);
    }
}

/**
 * Получить mime-type по расширению файла.
 * @param {string} filename 
 * @returns {string} mime-type
 */
function getMimeTypeByFilename(filename) {
    const ext = path.extname(filename).toLowerCase();
    switch (ext) {
        case '.pdf': return 'application/pdf';
        case '.png': return 'image/png';
        case '.jpg':
        case '.jpeg': return 'image/jpeg';
        case '.tiff':
        case '.tif': return 'image/tiff';
        case '.bmp': return 'image/bmp';
        default: return 'application/octet-stream';
    }
}

/**
 * Отправить файл из очереди на Yandex OCR.
 * Возвращает объект с успехом или ошибкой.
 * @param {string} fileName Имя файла в очереди
 * @returns {Promise<Object>} { success, fileName, ocrResult?, errorMessage? }
 */
async function sendFileToOCR(fileName) {
    const queueDir = getQueueDirectory();
    const filePath = path.join(queueDir, fileName);

    try {
        // Проверяем доступность файла
        await fs.access(filePath);

        // Загружаем параметры для Yandex OCR из конфига
        const iamToken = configService.getConfigValue('yandexCloud.iamToken');
        const folderId = configService.getConfigValue('yandexCloud.catalogId');
        const ocrApiUrl = configService.getConfigValue('yandexCloud.ocrApiUrl');

        if (!iamToken || !folderId || !ocrApiUrl) {
            throw new Error('Недостаточно данных для вызова Yandex OCR API: проверьте конфигурацию');
        }

        // Читаем файл и конвертируем в base64
        const fileBuffer = await fs.readFile(filePath);
        const fileBase64 = fileBuffer.toString('base64');

        // Формируем тело запроса API
        const requestBody = {
            analyzeSpecs: [
                {
                    content: fileBase64,
                    features: [{ type: 'TEXT_DETECTION' }],
                    mimeType: getMimeTypeByFilename(fileName)
                }
            ],
            folderId: folderId
        };

        // Выполняем POST-запрос к Yandex OCR API
        const response = await axios.post(ocrApiUrl, requestBody, {
            headers: {
                'Authorization': `Bearer ${iamToken}`,
                'Content-Type': 'application/json'
            },
            timeout: 30000
        });

        if (response.status !== 200) {
            throw new Error(`OCR API вернул статус ${response.status}`);
        }

        if (!response.data || !response.data.results || response.data.results.length === 0) {
            throw new Error('OCR API вернул пустой результат');
        }

        // Возвращаем успешный результат
        return {
            success: true,
            fileName,
            ocrResult: response.data.results[0]
        };

    } catch (error) {
        return {
            success: false,
            fileName,
            errorMessage: `Ошибка OCR для файла "${fileName}": ${error.message}`
        };
    }
}

/**
 * Обрабатывает файлы из очереди по одному.
 * Принимает максимальное количество файлов для обработки (если не указано — обрабатывает все).
 * Возвращает массив результатов обработки каждого файла.
 * @param {number} [maxFiles] Максимум файлов для обработки
 * @returns {Promise<Array>} Массив объектов результатов {success, fileName, ...}
 */
async function processFilesFromQueue(maxFiles) {
    try {
        const files = await listFilesInQueue();
        const filesToProcess = typeof maxFiles === 'number' ? files.slice(0, maxFiles) : files;

        if (filesToProcess.length === 0) {
            return [];
        }

        const results = [];
        for (const fileName of filesToProcess) {
            const result = await sendFileToOCR(fileName);
            results.push(result);
        }

        return results;

    } catch (error) {
        throw new Error(`Ошибка обработки файлов из очереди: ${error.message}`);
    }
}

/**
 * Express middleware: возвращает список файлов в очереди OCR
 */
async function expressListQueueHandler(req, res) {
    try {
        const files = await listFilesInQueue();
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

/**
 * Express middleware: запускает обработку файлов из очереди.
 * Принимает в query параметре ?max=<число> — ограничение по количеству файлов.
 * Возвращает массив результатов обработки.
 */
async function expressProcessQueueHandler(req, res) {
    try {
        const maxFilesParam = req.query.max;
        let maxFiles = undefined;

        if (maxFilesParam !== undefined) {
            const parsed = parseInt(maxFilesParam, 10);
            if (!isNaN(parsed) && parsed > 0) {
                maxFiles = parsed;
            } else {
                return res.status(400).json({
                    success: false,
                    errorMessage: 'Параметр max должен быть положительным числом'
                });
            }
        }

        const results = await processFilesFromQueue(maxFiles);
        res.json({
            success: true,
            processedCount: results.length,
            results
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            errorMessage: `Ошибка при обработке очереди OCR: ${error.message}`
        });
    }
}

module.exports = {
    listFilesInQueue,
    sendFileToOCR,
    processFilesFromQueue,
    expressListQueueHandler,
    expressProcessQueueHandler
};
