import express, { json } from 'express';
import { createLogger, format as _format, transports as _transports } from 'winston';
import yandex_ocr from './services/yandex_ocr.js';
import config_service from './services/config_service.js';
import json_service from './services/json_service.js';
import files_service from './services/files.js';
import { promises as fs } from 'fs';
import yandex_gpt from './services/yandex_gpt.js';
import time from './services/time.js';


let config = config_service.get_config();

// Инициализация логгера с уровнем из конфига
const logLevel = config.logging || 'info';

const USE_BACKUP_DATA = true;

async function ini_express() {
    // Запуск Express
    const app = express();
    const port = config.server.port || 5020;

    app.use(json());

    // Заглушка маршрута для теста
    app.get('/ping', (req, res) => {
        res.send('ipc-engine работает');
    });

    // Запуск сервера
    app.listen(port, () => {
        console.log(`Сервис ipc-engine запущен на порту ${port}`);
    });
}

async function ini() {
    await yandex_ocr.get_queued_files().then(async (files) => {
        let timed_directory = `${time.get_current_timestamp()}`

        console.log(`Приложение запущено. В очереди на OCR ${files.length} файлов.`);


        let file = files[0];
        let result = null;
        console.log('USE_BACKUP_DATA ', USE_BACKUP_DATA);
        if (!USE_BACKUP_DATA) {
            result = (await yandex_ocr.sendFileToOCR(file)).result;
        } else {
            let filepath = files_service.get_filepaths_in_sub_directory('data/queue/ocr/backup', { sorting: 'created', order: 'descend' })[0];
            console.log('filepath ', filepath);
            result = JSON.parse(await fs.readFile(filepath, 'utf8'));

            console.log('result ', result);
        }

        /**
        * - "hierarchy": JSON с сохранённой вложенностью, но без лишних ветвей
        * - "newline": плоский список значений, каждое на новой строке
        * - "tabulation": визуально структурированный текст с отступами
        * - "singleline": компактная строка со всеми значениями через пробел
        */
        let hierarchy = json_service.extract_properties_from_ocr(result, { keys: ['text'], style: 'hierarchy', deduplicate: false });
        let newline = json_service.extract_properties_from_ocr(result, { keys: ['text'], style: 'newline', deduplicate: false });
        let tabulation = json_service.extract_properties_from_ocr(result, { keys: ['text'], style: 'tabulation', deduplicate: false });
        let singleline = json_service.extract_properties_from_ocr(result, { keys: ['text'], style: 'singleline', deduplicate: false });

        await files_service.backup_data('data/queue/ocr/simplified/' + timed_directory, `hierarchy.json`, hierarchy, { stringify: 'json' });
        await files_service.backup_data('data/queue/ocr/simplified/' + timed_directory, `newline.txt`, newline);
        await files_service.backup_data('data/queue/ocr/simplified/' + timed_directory, `tabulation.txt`, tabulation);
        await files_service.backup_data('data/queue/ocr/simplified/' + timed_directory, `singleline.txt`, singleline);

        let hierarchy_d = json_service.extract_properties_from_ocr(result, { keys: ['text'], style: 'hierarchy', deduplicate: true });
        let newline_d = json_service.extract_properties_from_ocr(result, { keys: ['text'], style: 'newline', deduplicate: true });
        let tabulation_d = json_service.extract_properties_from_ocr(result, { keys: ['text'], style: 'tabulation', deduplicate: true });
        let singleline_d = json_service.extract_properties_from_ocr(result, { keys: ['text'], style: 'singleline', deduplicate: true });

        await files_service.backup_data('data/queue/ocr/simplified/' + timed_directory, `hierarchy_d.json`, hierarchy_d, { stringify: 'json' });
        await files_service.backup_data('data/queue/ocr/simplified/' + timed_directory, `newline_d.txt`, newline_d);
        await files_service.backup_data('data/queue/ocr/simplified/' + timed_directory, `tabulation_d.txt`, tabulation_d);
        await files_service.backup_data('data/queue/ocr/simplified/' + timed_directory, `singleline_d.txt`, singleline_d);

        let simplified_ocr_result = JSON.stringify(hierarchy);


        let gpt_result = await yandex_gpt.send_text_syncresponse(simplified_ocr_result);
        if (!gpt_result) {
            console.error('GPT API вернул пустой результат');
        } else {
            await files_service.backup_data('data/queue/gpt/' + timed_directory, `gpt_result.json`, gpt_result, { stringify: 'json' });
        }
    });

    await ini_express();
}

console.log(`Запускаем приложение...`);
try {
    ini();
} catch (error) {
    console.error(`Ошибка запуска приложения: ${error.message}`);
    process.exit(1);
}



function formatDateForFilename(date) {
    const timeZone = 'UTC+3';
    const dateWithTimezone = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 3, date.getMinutes(), date.getSeconds()));
    return dateWithTimezone.toISOString().replace(/[:.]/g, '-').replace('Z', `+${timeZone}`); // ISO формат без запрещённых символов
}