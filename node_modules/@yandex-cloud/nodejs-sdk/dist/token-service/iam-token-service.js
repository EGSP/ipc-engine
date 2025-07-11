"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamTokenService = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const jwt = __importStar(require("jsonwebtoken"));
const luxon_1 = require("luxon");
const nice_grpc_1 = require("nice-grpc");
const __1 = require("..");
const service_endpoints_1 = require("../service-endpoints");
const client_factory_1 = require("../utils/client-factory");
const { IamTokenServiceClient } = __1.serviceClients;
class IamTokenService {
    constructor(iamCredentials, sslCredentials) {
        this.jwtExpirationTimeout = 3600 * 1000;
        this.tokenExpirationTimeout = 120 * 1000;
        this.tokenRequestTimeout = 10 * 1000;
        this.token = '';
        this.iamCredentials = iamCredentials;
        this.tokenTimestamp = null;
        this.sslCredentials = sslCredentials;
    }
    get expired() {
        return (!this.tokenTimestamp
            || luxon_1.DateTime.utc().diff(this.tokenTimestamp).valueOf() > this.tokenExpirationTimeout);
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.expired) {
                yield this.initialize();
            }
            return this.token;
        });
    }
    client() {
        const endpoint = (0, service_endpoints_1.getServiceClientEndpoint)(IamTokenServiceClient);
        const channel = (0, nice_grpc_1.createChannel)(endpoint, grpc_js_1.credentials.createSsl());
        return client_factory_1.clientFactory.create(IamTokenServiceClient.service, channel);
    }
    getJwtRequest() {
        const now = luxon_1.DateTime.utc();
        const expires = now.plus({ milliseconds: this.jwtExpirationTimeout });
        const payload = {
            iss: this.iamCredentials.serviceAccountId,
            aud: 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
            iat: Math.round(now.toSeconds()),
            exp: Math.round(expires.toSeconds()),
        };
        const options = {
            algorithm: 'PS256',
            keyid: this.iamCredentials.accessKeyId,
        };
        return jwt.sign(payload, this.iamCredentials.privateKey, options);
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.requestToken();
            if (resp) {
                this.token = resp.iamToken;
                this.tokenTimestamp = luxon_1.DateTime.utc();
            }
            else {
                throw new Error('Received empty token from IAM!');
            }
        });
    }
    requestToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const deadline = luxon_1.DateTime.now().plus({ millisecond: this.tokenRequestTimeout }).toJSDate();
            return this.client().create(__1.cloudApi.iam.iam_token_service.CreateIamTokenRequest.fromPartial({
                jwt: this.getJwtRequest(),
            }), { deadline });
        });
    }
}
exports.IamTokenService = IamTokenService;
