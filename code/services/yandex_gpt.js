import axios from "axios";
import config_service from "./config_service.js";
import yandex_client from "./yandex_client.js";



async function send_text_asyncresponse(text) {
    const GPT_API_URL = "https://llm.api.cloud.yandex.net/foundationModels/v1/completionAsync";

    console.log(`GPT: Отправляем текст "${text.slice(0, 50)}".."${text.slice(-50)}" на Yandex GPT`);

    const header = await yandex_client.create_rest_header();
    const folderid = config_service.get_yandex_config().cloud.catalog_id;

    const data = {
        modelUri: 'gpt://"${folderid}"/yandexgpt-lite',

    }

}

async function send_text_syncresponse(text) {
    const GPT_API_URL = "https://llm.api.cloud.yandex.net/foundationModels/v1/completion";

    console.log(`GPT: Отправляем текст "${text.slice(0, 50)}".."${text.slice(-50)}" на Yandex GPT`);

    const header = await yandex_client.create_rest_header();
    const folderid = config_service.get_yandex_config().cloud.catalog_id;

    let fields_to_extract = [
        "org_name",
        "inn",
        "kpp",
        "ogrn",
        "okpo",
        "legal_address",
        "mail_address",
        "phones",
        "email",
        "website",
        "bank_name",
        "bank_address",
        "bank_bic",
        "bank_correspondent_account",
        "bank_account",
    ].join(' ');

    let data = {
        modelUri: `gpt://${folderid}/yandexgpt-lite`,
        completionOptions: {
            stream: false,
        },
        messages: [
            {
                role: "system",
                text: `Extract flat JSON from trash data (put only fields that exist):${fields_to_extract}. Answer only in JSON`
            },
            {
                role: "user",
                text: text
            }
        ],
        json_object: true
    }

    console.log('Model URI: ', data.modelUri);

    try {
        let response = await axios.post(GPT_API_URL, data,
            { headers: header, timeout: 120000 }).catch((error) => {
                console.error(error?.response?.data?.error);
                console.error(`Ошибка отправки текста "${text}" на Yandex GPT: ${error.message}`);
            });

        if (!response) {
            return;
        }
        if (response.status !== 200) {
            console.error(`GPT API вернул ошибку: ${response.status}`);
            return
        }
        if (!response.data?.result) {
            console.error(`GPT API вернул пустой результат`);
            return
        }

        console.log(`GPT API вернул результат: ${JSON.stringify(response.data.result)}`);
        let used_tokens = response.data.result.usage.totalTokens;
        let req_tokens = response.data.result.usage.inputTextTokens;
        let ans_tokens = response.data.result.usage.completionTokens;
        let answer_text = response.data.result.alternatives[0].message.text;

        console.log(`GPT API использовал ${used_tokens} токенов (${req_tokens} запроса + ${ans_tokens} ответа)`);
        console.log(`GPT API вернул ответ: ${answer_text}`);
        
        return { used_tokens, answer_text };
    } catch (error) {
        console.error(`Ошибка GPT: ${error.message}`);
        return null;
    }
}

export default { send_text_asyncresponse, send_text_syncresponse };