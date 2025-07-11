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
exports.ydb = exports.vpc = exports.storage = exports.serverless = exports.resourcemanager = exports.reference = exports.quota = exports.organizationmanager = exports.operation = exports.oauth = exports.monitoring = exports.mdb = exports.marketplace = exports.logging = exports.lockbox = exports.loadtesting = exports.loadbalancer = exports.kms = exports.k8s = exports.iot = exports.iam = exports.endpoint = exports.dns = exports.datatransfer = exports.datasphere = exports.dataproc = exports.containerregistry = exports.compute = exports.certificatemanager = exports.cdn = exports.billing = exports.backup = exports.apploadbalancer = exports.api = exports.ai = exports.access = void 0;
exports.access = __importStar(require("./access/"));
exports.ai = __importStar(require("./ai/"));
exports.api = __importStar(require("./api/"));
exports.apploadbalancer = __importStar(require("./apploadbalancer/"));
exports.backup = __importStar(require("./backup/"));
exports.billing = __importStar(require("./billing/"));
exports.cdn = __importStar(require("./cdn/"));
exports.certificatemanager = __importStar(require("./certificatemanager/"));
exports.compute = __importStar(require("./compute/"));
exports.containerregistry = __importStar(require("./containerregistry/"));
exports.dataproc = __importStar(require("./dataproc/"));
exports.datasphere = __importStar(require("./datasphere/"));
exports.datatransfer = __importStar(require("./datatransfer/"));
exports.dns = __importStar(require("./dns/"));
exports.endpoint = __importStar(require("./endpoint/"));
exports.iam = __importStar(require("./iam/"));
exports.iot = __importStar(require("./iot/"));
exports.k8s = __importStar(require("./k8s/"));
exports.kms = __importStar(require("./kms/"));
exports.loadbalancer = __importStar(require("./loadbalancer/"));
exports.loadtesting = __importStar(require("./loadtesting/"));
exports.lockbox = __importStar(require("./lockbox/"));
exports.logging = __importStar(require("./logging/"));
exports.marketplace = __importStar(require("./marketplace/"));
exports.mdb = __importStar(require("./mdb/"));
exports.monitoring = __importStar(require("./monitoring/"));
exports.oauth = __importStar(require("./oauth/"));
exports.operation = __importStar(require("./operation/"));
exports.organizationmanager = __importStar(require("./organizationmanager/"));
exports.quota = __importStar(require("./quota/"));
exports.reference = __importStar(require("./reference/"));
exports.resourcemanager = __importStar(require("./resourcemanager/"));
exports.serverless = __importStar(require("./serverless/"));
exports.storage = __importStar(require("./storage/"));
exports.vpc = __importStar(require("./vpc/"));
exports.ydb = __importStar(require("./ydb/"));
