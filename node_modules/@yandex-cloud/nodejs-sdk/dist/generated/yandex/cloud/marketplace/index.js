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
exports.usage_record = exports.image_product_usage_service = exports.metering_usage_record = exports.metering_image_product_usage_service = exports.licensemanager_template = exports.licensemanager_lock_service = exports.licensemanager_lock = exports.licensemanager_instance_service = exports.licensemanager_instance = void 0;
exports.licensemanager_instance = __importStar(require("./licensemanager/v1/instance"));
exports.licensemanager_instance_service = __importStar(require("./licensemanager/v1/instance_service"));
exports.licensemanager_lock = __importStar(require("./licensemanager/v1/lock"));
exports.licensemanager_lock_service = __importStar(require("./licensemanager/v1/lock_service"));
exports.licensemanager_template = __importStar(require("./licensemanager/v1/template"));
exports.metering_image_product_usage_service = __importStar(require("./metering/v1/image_product_usage_service"));
exports.metering_usage_record = __importStar(require("./metering/v1/usage_record"));
exports.image_product_usage_service = __importStar(require("./v1/metering/image_product_usage_service"));
exports.usage_record = __importStar(require("./v1/metering/usage_record"));
