/**
 * OCR JSON Simplifier
 * Автор: ChatGPT (OpenAI), по запросу пользователя tatapstar
 * 
 * Упрощает структуру OCR JSON, извлекая только указанные свойства
 * и возвращая результат в одном из четырёх текстовых/структурных стилей.
 *
 * Параметры:
 * - keys: какие свойства извлекать (например, ['text'])
 * - style:
 *     - "hierarchy": JSON с сохранённой вложенностью, но без лишних ветвей
 *     - "newline": плоский список значений, каждое на новой строке
 *     - "tabulation": визуально структурированный текст с отступами
 *     - "singleline": компактная строка со всеми значениями через пробел
 * - deduplicate: если true, то повторы будут удалены
 *
 * Внутри используется два параллельных результата:
 * - result_flat: массив всех извлечённых значений (для текстовых режимов)
 * - result_hierarchy: JSON-дерево с сохранённой структурой (для структурных режимов)
 * 
 * Это сделано для производительности: дерево обходится один раз,
 * и обе формы результата (структурная и плоская) собираются параллельно.
 */

function extract_properties_from_ocr(input, {
    keys = [],
    style = "hierarchy",
    deduplicate = false
} = {}) {
    if (!Array.isArray(keys) || keys.length === 0) {
        throw new Error("Parameter 'keys' must be a non-empty array.");
    }

    const result_flat = [];
    const result_hierarchy = prune_and_collect(input);

    /**
     * Рекурсивно обходит JSON-структуру, вырезая всё, кроме нужных узлов,
     * и параллельно собирает значения интересующих свойств.
     */
    function prune_and_collect(node) {
        if (Array.isArray(node)) {
            const processed = node
                .map(child => prune_and_collect(child))
                .filter(item => item !== undefined);
            return processed.length > 0 ? processed : undefined;
        }

        if (typeof node === "object" && node !== null) {
            const kept = {};
            let has_match = false;

            for (const [key, value] of Object.entries(node)) {
                if (keys.includes(key) && typeof value === "string") {
                    kept[key] = value;
                    result_flat.push(value);
                    has_match = true;
                }

                const child = prune_and_collect(value);
                if (child !== undefined) {
                    kept[key] = child;
                    has_match = true;
                }
            }

            return has_match ? kept : undefined;
        }

        return undefined;
    }

    const flat = deduplicate ? [...new Set(result_flat)] : result_flat;

    switch (style) {
        case "hierarchy":
            return result_hierarchy ?? {};

        case "newline":
            return flat.join("\n");

        case "tabulation":
            return render_tabulated(result_hierarchy ?? {});

        case "singleline":
            return flat.join(" ");

        default:
            throw new Error(`Unknown style: ${style}`);
    }
}

/**
 * Преобразует JSON в отформатированный текст с табуляцией,
 * удаляя ключи, кавычки и скобки.
 */
function render_tabulated(node, depth = 0) {
    const indent = "  ".repeat(depth);
    let output = "";

    if (Array.isArray(node)) {
        for (const item of node) {
            output += render_tabulated(item, depth);
        }
    } else if (typeof node === "object" && node !== null) {
        for (const value of Object.values(node)) {
            output += render_tabulated(value, depth + 1);
        }
    } else if (typeof node === "string") {
        output += indent + node + "\n";
    }

    return output;
}

// ===== Пример использования =====
// import fs from 'fs';
// const json = JSON.parse(fs.readFileSync('ocr-result.json', 'utf8'));

// const simplified = extract_properties_from_ocr(json, {
//   keys: ['text'],
//   style: 'tabulation',
//   deduplicate: true
// });

// console.log(simplified);

export default {
    extract_properties_from_ocr
};