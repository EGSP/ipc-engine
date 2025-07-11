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
exports.subnet_service = exports.subnet = exports.security_group_service = exports.security_group = exports.route_table_service = exports.route_table = exports.network_service = exports.network = exports.gateway_service = exports.gateway = exports.address_service = exports.address = void 0;
exports.address = __importStar(require("./v1/address"));
exports.address_service = __importStar(require("./v1/address_service"));
exports.gateway = __importStar(require("./v1/gateway"));
exports.gateway_service = __importStar(require("./v1/gateway_service"));
exports.network = __importStar(require("./v1/network"));
exports.network_service = __importStar(require("./v1/network_service"));
exports.route_table = __importStar(require("./v1/route_table"));
exports.route_table_service = __importStar(require("./v1/route_table_service"));
exports.security_group = __importStar(require("./v1/security_group"));
exports.security_group_service = __importStar(require("./v1/security_group_service"));
exports.subnet = __importStar(require("./v1/subnet"));
exports.subnet_service = __importStar(require("./v1/subnet_service"));
