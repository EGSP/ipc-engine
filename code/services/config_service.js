import { existsSync, readFileSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

let CONFIG = null;
let YANDEX_CONFIG = null;

function get_execution_directory() {
    // Получаем путь к текущему файлу
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    return process.env.NODE_ENV === 'development'
        ? resolve(__dirname, '..', '..') // для разработки: корень проекта
        : dirname(process.execPath);     // для exe
}

function load_config() {
    if (CONFIG) return CONFIG;

    const configPath = join(get_execution_directory(), 'config', 'config.json');

    if (!existsSync(configPath)) {
        throw new Error(`Файл конфигурации не найден: ${configPath}`);
    }

    const raw = readFileSync(configPath, 'utf-8');
    CONFIG = JSON.parse(raw);
    return CONFIG;
}

function load_yandex_config() {
    if (YANDEX_CONFIG) return YANDEX_CONFIG;
    const configPath = join(get_execution_directory(), 'config', 'yandex_config.json');
    if (!existsSync(configPath)) {
        throw new Error(`Файл конфигурации Yandex не найден: ${configPath}`);
    }
    const raw = readFileSync(configPath, 'utf-8');
    YANDEX_CONFIG = JSON.parse(raw);
    return YANDEX_CONFIG;
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

export default { get_config, get_yandex_config, get_execution_directory };
