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
exports.resource_service = exports.resource = exports.provider_service = exports.policy_service = exports.policy = exports.backup_service = exports.backup = void 0;
exports.backup = __importStar(require("./v1/backup"));
exports.backup_service = __importStar(require("./v1/backup_service"));
exports.policy = __importStar(require("./v1/policy"));
exports.policy_service = __importStar(require("./v1/policy_service"));
exports.provider_service = __importStar(require("./v1/provider_service"));
exports.resource = __importStar(require("./v1/resource"));
exports.resource_service = __importStar(require("./v1/resource_service"));
