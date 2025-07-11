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
exports.widget = exports.unit_format = exports.title_widget = exports.text_widget = exports.parametrization = exports.downsampling = exports.dashboard_service = exports.dashboard = exports.chart_widget = void 0;
exports.chart_widget = __importStar(require("./v3/chart_widget"));
exports.dashboard = __importStar(require("./v3/dashboard"));
exports.dashboard_service = __importStar(require("./v3/dashboard_service"));
exports.downsampling = __importStar(require("./v3/downsampling"));
exports.parametrization = __importStar(require("./v3/parametrization"));
exports.text_widget = __importStar(require("./v3/text_widget"));
exports.title_widget = __importStar(require("./v3/title_widget"));
exports.unit_format = __importStar(require("./v3/unit_format"));
exports.widget = __importStar(require("./v3/widget"));
