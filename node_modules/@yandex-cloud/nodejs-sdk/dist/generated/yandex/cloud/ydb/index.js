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
exports.storage_type_service = exports.storage_type = exports.resource_preset_service = exports.resource_preset = exports.location_service = exports.location = exports.database_service = exports.database = exports.backup_service = exports.backup = void 0;
exports.backup = __importStar(require("./v1/backup"));
exports.backup_service = __importStar(require("./v1/backup_service"));
exports.database = __importStar(require("./v1/database"));
exports.database_service = __importStar(require("./v1/database_service"));
exports.location = __importStar(require("./v1/location"));
exports.location_service = __importStar(require("./v1/location_service"));
exports.resource_preset = __importStar(require("./v1/resource_preset"));
exports.resource_preset_service = __importStar(require("./v1/resource_preset_service"));
exports.storage_type = __importStar(require("./v1/storage_type"));
exports.storage_type_service = __importStar(require("./v1/storage_type_service"));
