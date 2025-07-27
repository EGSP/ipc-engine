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
    const full_path = join(config_service.get_execution_directory(), ...paths);

    // extract only directory without filename
    const full_path_directory = dirname(full_path);

    if (ini_paths) {
        fsSync.mkdirSync(full_path_directory, { recursive: true });
    }

    return { full_path, directory: full_path_directory };
}


/**
 * Asynchronously backs up data to a specified subdirectory and filename.
 * 
 * The function creates a full path using the provided subdirectory name
 * and filename, then writes the data to a file at that path. The data can be
 * written as a string or JSON, depending on the stringify option.
 * 
 * @param {string} sub_directory_name - The name of the subdirectory to store the backup.
 * @param {string} filename_with_extension - The name of the file including extension.
 * @param {*} data - The data to back up.
 * @param {Object} [options] - Options for backup.
 * @param {string} [options.stringify='string'] - Specifies data format: 'string' or 'json'.
 * 
 * @throws {Error} If the stringify option is invalid.
 */

async function backup_data(sub_directory_name, filename_with_extension, data, { stringify = 'string' } = {}) {
    try {
        let paths = get_full_path(true, sub_directory_name, 'backup', filename_with_extension);
        let path = paths.full_path;

        if (stringify === 'string') {
            await fs.writeFile(path, String(data), { flag: 'w+' });
        } else if (stringify === 'json') {
            await fs.writeFile(path, JSON.stringify(data), { flag: 'w+' });
        } else {
            throw new Error('Invalid stringify option. Must be either "string" or "json".');
        }
    } catch (err) {
        console.log(err);
    }
}

function get_filepaths_in_sub_directory(sub_directory_name, {
    sorting = 'created',
    order = 'ascend'
} = {}) {
    let paths = get_full_path(false, sub_directory_name);

    if (fsSync.existsSync(paths.full_path)) {
        let files = fsSync.readdirSync(paths.full_path).map(file => {
            let fullPath = join(paths.full_path, file);
            let stat = fsSync.statSync(fullPath);
            return { fullPath, created: stat.birthtime, name: file.toLowerCase() };
        });

        switch (sorting) {
            case 'created':
                files.sort((a, b) => {
                    let diff = a.created.getTime() - b.created.getTime();
                    return order === 'descend' ? -diff : diff;
                });
                break;
            case 'name':
                files.sort((a, b) => {
                    let diff = a.name.localeCompare(b.name);
                    return order === 'descend' ? -diff : diff;
                });
                break;
        }

        return files.map(({ fullPath }) => fullPath);
    } else {
        return [];
    }
}

export default {
    get_full_path,
    backup_data,
    get_filepaths_in_sub_directory
}