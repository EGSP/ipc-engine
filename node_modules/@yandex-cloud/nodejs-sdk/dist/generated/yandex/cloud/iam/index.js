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
Object.defineProperty(exports, "__esModule", { value: true });
exports.access_key_service = exports.access_key = exports.yandex_passport_user_account_service = exports.user_account_service = exports.user_account = exports.service_account_service = exports.service_account = exports.role_service = exports.role = exports.key_service = exports.key = exports.iam_token_service = exports.api_key_service = exports.api_key = void 0;
exports.api_key = __importStar(require("./v1/api_key"));
exports.api_key_service = __importStar(require("./v1/api_key_service"));
exports.iam_token_service = __importStar(require("./v1/iam_token_service"));
exports.key = __importStar(require("./v1/key"));
exports.key_service = __importStar(require("./v1/key_service"));
exports.role = __importStar(require("./v1/role"));
exports.role_service = __importStar(require("./v1/role_service"));
exports.service_account = __importStar(require("./v1/service_account"));
exports.service_account_service = __importStar(require("./v1/service_account_service"));
exports.user_account = __importStar(require("./v1/user_account"));
exports.user_account_service = __importStar(require("./v1/user_account_service"));
exports.yandex_passport_user_account_service = __importStar(require("./v1/yandex_passport_user_account_service"));
exports.access_key = __importStar(require("./v1/awscompatibility/access_key"));
exports.access_key_service = __importStar(require("./v1/awscompatibility/access_key_service"));
