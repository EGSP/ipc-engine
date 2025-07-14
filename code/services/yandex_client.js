import { JWK, JWS } from 'node-jose';
import {
    serviceClients,
    Session,
    cloudApi,
    waitForOperation,
    decodeMessage
} from '@yandex-cloud/nodejs-sdk';
import config_service from './configService';

let sessionInstance = null;

async function initialize(iamToken) {
    let config = config_service.get_config();
    let yandex_config = config_service.get_yandex_config();

    async function create_iam() {
        const {
            iam: {
                iam_token_service: { CreateIamTokenRequest }
            }
        } = cloudApi;

        createIamToken();

        async function createIamToken() {

            let auth_key = get_auth_key();
            let {
                id: access_key_id,
                service_account_id: service_account_id,
                private_key: private_key
            } = auth_key;

            const session = new Session({
                serviceAccountJson: {
                    accessKeyId: access_key_id,
                    service_account_id,
                    privateKey: private_key,
                }
            })
            const tokenClient = session.client(serviceClients.IamTokenServiceClient)
            const jwt = await createJWT()
            const tokenRequest = CreateIamTokenRequest.fromPartial({ jwt })
            const { iamToken } = await tokenClient.create(tokenRequest)

            console.log("Your iam token:")
            console.log(iamToken)

            return iamToken

            function createJWT() {
                const now = Math.floor(new Date().getTime() / 1000);
                const payload = {
                    iss: service_account_id,
                    iat: now,
                    exp: now + 3600,
                    aud: 'https://iam.api.cloud.yandex.net/iam/v1/tokens'
                };

                return JWK.asKey(private_key, 'pem', { kid: access_key_id, alg: 'PS256' }).then(
                    function (result) {
                        return JWS.createSign({ format: 'compact' }, result)
                            .update(JSON.stringify(payload))
                            .final();
                    }
                );
            }
        }
    }
}

function get_auth_key() {
    let yandex_config = config_service.get_yandex_config();
    return yandex_config.auth_key;
}

function getSession() {
    if (!sessionInstance) {
        throw new Error('Yandex SDK не инициализирован. Вызовите initialize()');
    }
    return sessionInstance;
}

export default {
    initialize,
    getSession
};
