import express, { json } from 'express';
import { createLogger, format as _format, transports as _transports } from 'winston';
import yandex_ocr from './services/yandex_ocr.js';
import config_service from './services/config_service.js';


let config = config_service.get_config();

// Инициализация логгера с уровнем из конфига
const logLevel = config.logging || 'info';

const logger = createLogger({
    level: logLevel,
    format: _format.combine(
        _format.timestamp(),
        _format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}] ${message}`;
        })
    ),
    transports: [
        new _transports.File({ filename: 'logs/app.log' }),
        new _transports.Console()
    ]
});

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
        logger.info(`Сервис ipc-engine запущен на порту ${port}`);
    });
}

async function ini(){
    await yandex_ocr.get_queued_files().then(async (files) => {
        console.log(`Приложение запущено. В очереди на OCR ${files.length} файлов.`);
        let file = files[0];
        await yandex_ocr.sendFileToOCR(file);
    });

    await ini_express();
}

console.log(`Запускаем приложение...`);
ini();




