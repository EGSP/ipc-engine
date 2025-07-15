import {
    cloudApi,
    serviceClients,
    Session
} from '@yandex-cloud/nodejs-sdk';
import { JWK, JWS } from 'node-jose';
import config_service from './config_service.js';

let IAM_TOKEN = null;

async function get_iam_token() {
    // TODO: Добавить проверку на уже существующий токен и его время жизни
    let iam_token = await create_iam();
    IAM_TOKEN = iam_token;
    return iam_token;
}

/**
 * Asynchronously creates an IAM token for Yandex Cloud using the provided service account credentials.
 * 
 * This function retrieves authentication keys, constructs a session with the Yandex Cloud SDK, 
 * and uses the IAM Token Service to generate an IAM token. It internally uses a JWT for authentication.
 * 
 * @returns {Promise<string>} The generated IAM token.
 * 
 * @throws {Error} If there is an issue with creating the JWT or the IAM token.
 */
async function create_iam() {
    const {
        iam: {
            iam_token_service: { CreateIamTokenRequest }
        }
    } = cloudApi;

    return createIamToken();

    async function createIamToken() {
        function get_auth_key() {
            let yandex_config = config_service.get_yandex_config();
            return yandex_config.auth_key;
        }


        let auth_key = get_auth_key();
        let {
            id: access_key_id,
            service_account_id,
            private_key
        } = auth_key;

        const session = new Session({
            serviceAccountJson: {
                accessKeyId: access_key_id,
                serviceAccountId: service_account_id,
                privateKey: private_key,
            }
        })
        const tokenClient = session.client(serviceClients.IamTokenServiceClient)
        const jwt = await createJWT()
        // @ts-ignore
        const tokenRequest = CreateIamTokenRequest.fromPartial({ jwt })
        const { iamToken } = await tokenClient.create(tokenRequest)

        console.log("Получен IAM токен:" + iamToken)

        return iamToken

        async function createJWT() {
            const now = Math.floor(new Date().getTime() / 1000);
            const payload = {
                iss: service_account_id,
                iat: now,
                exp: now + 3600,
                aud: 'https://iam.api.cloud.yandex.net/iam/v1/tokens'
            };

            const result_2 = await JWK.asKey(private_key, 'pem', { kid: access_key_id, alg: 'PS256' });
            return await JWS.createSign({ format: 'compact' }, result_2)
                .update(JSON.stringify(payload))
                .final();
        }
    }
}

export default {
    get_iam_token
};
