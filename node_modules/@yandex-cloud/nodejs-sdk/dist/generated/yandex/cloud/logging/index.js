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
exports.sink_service = exports.sink = exports.log_resource = exports.log_reading_service = exports.log_ingestion_service = exports.log_group_service = exports.log_group = exports.log_entry = exports.export_service = exports.export = void 0;
exports.export = __importStar(require("./v1/export"));
exports.export_service = __importStar(require("./v1/export_service"));
exports.log_entry = __importStar(require("./v1/log_entry"));
exports.log_group = __importStar(require("./v1/log_group"));
exports.log_group_service = __importStar(require("./v1/log_group_service"));
exports.log_ingestion_service = __importStar(require("./v1/log_ingestion_service"));
exports.log_reading_service = __importStar(require("./v1/log_reading_service"));
exports.log_resource = __importStar(require("./v1/log_resource"));
exports.sink = __importStar(require("./v1/sink"));
exports.sink_service = __importStar(require("./v1/sink_service"));
