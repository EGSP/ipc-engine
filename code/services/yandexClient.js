const { Session } = require('@yandex-cloud/nodejs-sdk');

let sessionInstance = null;

function initialize(iamToken) {
    if (!iamToken || typeof iamToken !== 'string' || iamToken.trim() === '') {
        throw new Error('IAM-токен Yandex Cloud не указан или пустой');
    }

    sessionInstance = new Session({ iamToken });
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
