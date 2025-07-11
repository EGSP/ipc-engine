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
exports.api_status = exports.api_create_compute_instance = exports.api_agent = exports.api_agent_service = exports.agent_trail_service = exports.agent_test_service = exports.agent_test = exports.agent_monitoring_service = exports.agent_job_service = exports.agent_service = exports.agent_agent_registration_service = exports.agent = void 0;
exports.agent = __importStar(require("./agent/v1/agent"));
exports.agent_agent_registration_service = __importStar(require("./agent/v1/agent_registration_service"));
exports.agent_service = __importStar(require("./agent/v1/agent_service"));
exports.agent_job_service = __importStar(require("./agent/v1/job_service"));
exports.agent_monitoring_service = __importStar(require("./agent/v1/monitoring_service"));
exports.agent_test = __importStar(require("./agent/v1/test"));
exports.agent_test_service = __importStar(require("./agent/v1/test_service"));
exports.agent_trail_service = __importStar(require("./agent/v1/trail_service"));
exports.api_agent_service = __importStar(require("./api/v1/agent_service"));
exports.api_agent = __importStar(require("./api/v1/agent/agent"));
exports.api_create_compute_instance = __importStar(require("./api/v1/agent/create_compute_instance"));
exports.api_status = __importStar(require("./api/v1/agent/status"));
