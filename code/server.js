const express = require('express');
const fs = require('fs');
const path = require('path');
const winston = require('winston');
const yandexClient = require('./services/yandexClient');
const configService = require('./services/configService');


// Инициализация логгера с уровнем из конфига
const logLevel = configService.getConfigValue('logging.logLevel') || 'info';

const logger = winston.createLogger({
    level: logLevel,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}] ${message}`;
        })
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/app.log' }),
        new winston.transports.Console()
    ]
});

// Инициализация Yandex SDK
try {
    const iamToken = configService.getConfigValue('yandexCloud.iamToken');
    yandexClient.initialize(iamToken);
    logger.info('Yandex SDK инициализирован успешно');
} catch (error) {
    logger.error(`Ошибка инициализации Yandex SDK: ${error.message}`);
    process.exit(1);
}

// Запуск Express
const app = express();
const port = configService.getConfigValue('httpServer.port') || 3000;

app.use(express.json());

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
