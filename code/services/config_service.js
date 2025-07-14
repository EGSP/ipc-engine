const fs = require('fs');
const path = require('path');

let CONFIG = null;
let YANDEX_CONFIG = null;

function load_config() {
    if (CONFIG) return CONFIG;

    const configPath = path.join(get_execution_directory(), 'config', 'config.json');

    if (!fs.existsSync(configPath)) {
        throw new Error(`Файл конфигурации не найден: ${configPath}`);
    }

    const raw = fs.readFileSync(configPath, 'utf-8');
    CONFIG = JSON.parse(raw);
    return CONFIG;
}

function load_yandex_config() {
    if (YANDEX_CONFIG) return YANDEX_CONFIG;
    const configPath = path.join(get_execution_directory(), 'config', 'yandex_config.json');
    if (!fs.existsSync(configPath)) {
        throw new Error(`Файл конфигурации Yandex не найден: ${configPath}`);
    }
    const raw = fs.readFileSync(configPath, 'utf-8');
    YANDEX_CONFIG = JSON.parse(raw);
    return YANDEX_CONFIG;
}

function get_execution_directory(){
    return process.env.NODE_ENV === 'development'
        ? path.resolve(__dirname, '..', '..') // для разработки: корень проекта
        : path.dirname(process.execPath);     // для exe
}

function get_config() {
    if (!CONFIG) {
        load_config();
    }
    return CONFIG;
}

function get_yandex_config() {
    if (!YANDEX_CONFIG) {
        load_yandex_config();
    }
    return YANDEX_CONFIG;
}

module.exports = {
    get_config,
    get_yandex_config
};
