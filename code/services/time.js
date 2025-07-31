import dayjs from 'dayjs';

/**
 * Returns the current timestamp as a string in the format 'YYYYMMDD_HHmm'.
 * @return {string} The current timestamp.
 */
function get_current_timestamp() {
    return dayjs().format('YYYYMMDD_HHmm');
}

export default { get_current_timestamp };