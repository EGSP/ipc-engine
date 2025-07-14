const { Session } = require('@yandex-cloud/nodejs-sdk');
const configService = require('./config_service');
const jose = require('node-jose');

let sessionInstance = null;
let serviceAccountId = null;


function initialize(iamToken) {
    let config = configService.get_config();
    serviceAccountId = config.yandexCloud.serviceAccountId;
    
    // if (!iamToken || typeof iamToken !== 'string' || iamToken.trim() === '') {
    //     throw new Error('IAM-токен Yandex Cloud не указан или пустой');
    // }

    // sessionInstance = new Session({ iamToken });
    function create_jwt(){

    }
}

function get_auth_key(){

}

function getSession() {
    if (!sessionInstance) {
        throw new Error('Yandex SDK не инициализирован. Вызовите initialize()');
    }
    return sessionInstance;
}

module.exports = {
    initialize,
    getSession
};
