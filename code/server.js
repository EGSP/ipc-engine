import express, { json } from 'express';
import { createLogger, format as _format, transports as _transports } from 'winston';
import { initialize } from './services/yandexClient';
import { config_service } from './services/config_service';

let config = config_service.get_config();

// Инициализация логгера с уровнем из конфига
const logLevel = getConfigValue('logging.logLevel') || 'info';

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

// Инициализация Yandex SDK
try {
    const iamToken = getConfigValue('yandexCloud.iamToken');
    initialize(iamToken);
    logger.info('Yandex SDK инициализирован успешно');
} catch (error) {
    logger.error(`Ошибка инициализации Yandex SDK: ${error.message}`);
    process.exit(1);
}

// Запуск Express
const app = express();
const port = getConfigValue('httpServer.port') || 3000;

app.use(json());

// Заглушка маршрута для теста
app.get('/ping', (req, res) => {
    res.send('ipc-engine работает');
});

app.get('/ocr/queue', yandexOCR.expressListQueueHandler);
app.post('/ocr/process', yandexOCR.expressProcessQueueHandler);

// Запуск сервера
app.listen(port, () => {
    logger.info(`Сервис ipc-engine запущен на порту ${port}`);
});
