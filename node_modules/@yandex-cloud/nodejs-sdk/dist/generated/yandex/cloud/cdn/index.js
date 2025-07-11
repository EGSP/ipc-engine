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
exports.resource_service = exports.resource = exports.raw_logs_service = exports.raw_logs = exports.provider_service = exports.origin_service = exports.origin_group_service = exports.origin_group = exports.origin = exports.cache_service = void 0;
exports.cache_service = __importStar(require("./v1/cache_service"));
exports.origin = __importStar(require("./v1/origin"));
exports.origin_group = __importStar(require("./v1/origin_group"));
exports.origin_group_service = __importStar(require("./v1/origin_group_service"));
exports.origin_service = __importStar(require("./v1/origin_service"));
exports.provider_service = __importStar(require("./v1/provider_service"));
exports.raw_logs = __importStar(require("./v1/raw_logs"));
exports.raw_logs_service = __importStar(require("./v1/raw_logs_service"));
exports.resource = __importStar(require("./v1/resource"));
exports.resource_service = __importStar(require("./v1/resource_service"));
