"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataTokenService = void 0;
const axios_1 = __importDefault(require("axios"));
const DEFAULT_URL = 'http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token';
const DEFAULT_OPTIONS = {
    headers: {
        'Metadata-Flavor': 'Google',
    },
};
class MetadataTokenService {
    constructor(url = DEFAULT_URL, options = DEFAULT_OPTIONS) {
        this.url = url;
        this.opts = options;
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.token) {
                yield this.initialize();
                if (!this.token) {
                    throw new Error('Token is empty after MetadataTokenService.initialize');
                }
                return this.token;
            }
            return this.token;
        });
    }
    fetchToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(this.url, this.opts);
            if (res.status !== 200) {
                throw new Error(`failed to fetch token from metadata service: ${res.status} ${res.statusText}`);
            }
            return res.data.access_token;
        });
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.token) {
                return;
            }
            let lastError = null;
            for (let i = 0; i < 5; i++) {
                try {
                    // eslint-disable-next-line no-await-in-loop
                    this.token = yield this.fetchToken();
                    break;
                }
                catch (error) {
                    lastError = error;
                }
            }
            if (!this.token) {
                throw new Error(
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                `failed to fetch token from metadata service: ${lastError}`);
            }
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                try {
                    this.token = yield this.fetchToken();
                }
                catch (_a) {
                    // TBD
                }
            }), 30000);
        });
    }
}
exports.MetadataTokenService = MetadataTokenService;
