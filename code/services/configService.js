const fs = require('fs');
const path = require('path');

let configCache = null;

function loadConfig() {
    if (configCache) return configCache;

    // Определяем папку исполнения (exe или node)
    const execDir = process.env.NODE_ENV === 'development'
        ? path.resolve(__dirname, '..', '..') // для разработки: корень проекта
        : path.dirname(process.execPath);     // для exe

    const configPath = path.join(execDir, 'config', 'config.json');

    if (!fs.existsSync(configPath)) {
        throw new Error(`Файл конфигурации не найден: ${configPath}`);
    }

    const raw = fs.readFileSync(configPath, 'utf-8');
    configCache = JSON.parse(raw);
    return configCache;
}

/**
 * Получить значение из конфига по ключу с точечной нотацией
 * @param {string} keyPath Например: "httpServer.port"
 * @returns {*} Значение настройки или undefined
 */
function getConfigValue(keyPath) {
    const config = loadConfig();

    const keys = keyPath.split('.');
    let result = config;

    for (const key of keys) {
        if (result && Object.prototype.hasOwnProperty.call(result, key)) {
            result = result[key];
        } else {
            return undefined;
        }
    }

    return result;
}

module.exports = {
    getConfigValue
};
