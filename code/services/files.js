import { resolve, dirname, join, extname } from 'path';
import { promises as fs } from 'fs';
import fsSync from 'fs';
import config_service from './config_service.js';

/**
 * Creates a full path by joining given paths with the execution directory
 * (a directory from which the script was started).
 *
 * @param {boolean} [ini_paths=true] If true, creates the directory if it does not exist.
 * @param {...string} paths - The path parts to join.
 * @returns {object} An object containing the full path and its directory.
 * @property {string} full_path - The full path.
 * @property {string} directory - The directory of the full path (without a filename).
 */
function get_full_path(ini_paths = true, ...paths) {
    // @ts-ignore
    const full_path = resolve(config_service.get_execution_directory(), paths);

    // extract only directory without filename
    const full_path_directory = dirname(full_path);

    if (ini_paths) {
        fsSync.mkdirSync(full_path_directory, { recursive: true });
    }

    return { full_path, directory: full_path_directory };
}

/**
 * Writes the given data to a file in the given subdirectory with the given filename and extension.
 * The data can be either an object (in which case it will be JSON-stringified) or a string.
 * If the file already exists, it will be overwritten.
 * @param {string} sub_directory_name - The subdirectory in which to store the file.
 * @param {string} filename_with_extension - The filename (with extension) of the file to write.
 * @param {object|string} data - The data to write to the file.
 * @param {boolean} [stringify=true] - Whether to stringify the data as JSON before writing.
 */
async function backup_data(sub_directory_name, filename_with_extension, data, stringify = true) {

    try {
        let paths = get_full_path(true, 'backup', sub_directory_name, filename_with_extension);
        let path = paths.full_path;

        if (stringify) {
            await fs.writeFile(path, JSON.stringify(data), { flag: 'w+' });
        } else {
            await fs.writeFile(path, data, { flag: 'w+' });
        }
    } catch (err) {
        console.log(err);
    }
}

export default {
    get_full_path,
    backup_data
}




// function get_queue_directory() {
//     // Получаем путь из конфига, например: "data/queue"
//     const relativeQueuePath = QUEUE_SUB_DIRECTORY;
//     if (!relativeQueuePath) {
//         throw new Error('Путь к папке очереди не задан в конфиге (ключ paths.queueFolder)');
//     }
//     const queue_path = resolve(config_service.get_execution_directory(), relativeQueuePath);

//     // check and create
//     if (!fsSync.existsSync(queue_path)) {
//         console.log(`Создаем папку очереди: ${queue_path}`);
//         fsSync.mkdirSync(queue_path, { recursive: true });
//     }

//     return queue_path;
// }