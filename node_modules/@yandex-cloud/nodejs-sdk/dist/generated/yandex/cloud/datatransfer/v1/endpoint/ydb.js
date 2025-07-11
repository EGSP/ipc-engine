"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YdbTarget = exports.YdbSource = exports.ydbCleanupPolicyToJSON = exports.ydbCleanupPolicyFromJSON = exports.YdbCleanupPolicy = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
var YdbCleanupPolicy;
(function (YdbCleanupPolicy) {
    YdbCleanupPolicy[YdbCleanupPolicy["YDB_CLEANUP_POLICY_UNSPECIFIED"] = 0] = "YDB_CLEANUP_POLICY_UNSPECIFIED";
    YdbCleanupPolicy[YdbCleanupPolicy["YDB_CLEANUP_POLICY_DISABLED"] = 1] = "YDB_CLEANUP_POLICY_DISABLED";
    YdbCleanupPolicy[YdbCleanupPolicy["YDB_CLEANUP_POLICY_DROP"] = 2] = "YDB_CLEANUP_POLICY_DROP";
    YdbCleanupPolicy[YdbCleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(YdbCleanupPolicy = exports.YdbCleanupPolicy || (exports.YdbCleanupPolicy = {}));
function ydbCleanupPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "YDB_CLEANUP_POLICY_UNSPECIFIED":
            return YdbCleanupPolicy.YDB_CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case "YDB_CLEANUP_POLICY_DISABLED":
            return YdbCleanupPolicy.YDB_CLEANUP_POLICY_DISABLED;
        case 2:
        case "YDB_CLEANUP_POLICY_DROP":
            return YdbCleanupPolicy.YDB_CLEANUP_POLICY_DROP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return YdbCleanupPolicy.UNRECOGNIZED;
    }
}
exports.ydbCleanupPolicyFromJSON = ydbCleanupPolicyFromJSON;
function ydbCleanupPolicyToJSON(object) {
    switch (object) {
        case YdbCleanupPolicy.YDB_CLEANUP_POLICY_UNSPECIFIED:
            return "YDB_CLEANUP_POLICY_UNSPECIFIED";
        case YdbCleanupPolicy.YDB_CLEANUP_POLICY_DISABLED:
            return "YDB_CLEANUP_POLICY_DISABLED";
        case YdbCleanupPolicy.YDB_CLEANUP_POLICY_DROP:
            return "YDB_CLEANUP_POLICY_DROP";
        default:
            return "UNKNOWN";
    }
}
exports.ydbCleanupPolicyToJSON = ydbCleanupPolicyToJSON;
const baseYdbSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.YdbSource",
    database: "",
    instance: "",
    serviceAccountId: "",
    paths: "",
    subnetId: "",
    securityGroups: "",
    saKeyContent: "",
};
exports.YdbSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.YdbSource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.database !== "") {
            writer.uint32(10).string(message.database);
        }
        if (message.instance !== "") {
            writer.uint32(18).string(message.instance);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(50).string(message.serviceAccountId);
        }
        for (const v of message.paths) {
            writer.uint32(42).string(v);
        }
        if (message.subnetId !== "") {
            writer.uint32(242).string(message.subnetId);
        }
        for (const v of message.securityGroups) {
            writer.uint32(274).string(v);
        }
        if (message.saKeyContent !== "") {
            writer.uint32(266).string(message.saKeyContent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseYdbSource);
        message.paths = [];
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.database = reader.string();
                    break;
                case 2:
                    message.instance = reader.string();
                    break;
                case 6:
                    message.serviceAccountId = reader.string();
                    break;
                case 5:
                    message.paths.push(reader.string());
                    break;
                case 30:
                    message.subnetId = reader.string();
                    break;
                case 34:
                    message.securityGroups.push(reader.string());
                    break;
                case 33:
                    message.saKeyContent = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseYdbSource);
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : "";
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? String(object.instance)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.paths = ((_a = object.paths) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.securityGroups = ((_b = object.securityGroups) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.saKeyContent =
            object.saKeyContent !== undefined && object.saKeyContent !== null
                ? String(object.saKeyContent)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.database !== undefined && (obj.database = message.database);
        message.instance !== undefined && (obj.instance = message.instance);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        }
        else {
            obj.paths = [];
        }
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        }
        else {
            obj.securityGroups = [];
        }
        message.saKeyContent !== undefined &&
            (obj.saKeyContent = message.saKeyContent);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseYdbSource);
        message.database = (_a = object.database) !== null && _a !== void 0 ? _a : "";
        message.instance = (_b = object.instance) !== null && _b !== void 0 ? _b : "";
        message.serviceAccountId = (_c = object.serviceAccountId) !== null && _c !== void 0 ? _c : "";
        message.paths = ((_d = object.paths) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.subnetId = (_e = object.subnetId) !== null && _e !== void 0 ? _e : "";
        message.securityGroups = ((_f = object.securityGroups) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.saKeyContent = (_g = object.saKeyContent) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.YdbSource.$type, exports.YdbSource);
const baseYdbTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.YdbTarget",
    database: "",
    instance: "",
    serviceAccountId: "",
    path: "",
    subnetId: "",
    securityGroups: "",
    saKeyContent: "",
    cleanupPolicy: 0,
};
exports.YdbTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.YdbTarget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.database !== "") {
            writer.uint32(10).string(message.database);
        }
        if (message.instance !== "") {
            writer.uint32(18).string(message.instance);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(90).string(message.serviceAccountId);
        }
        if (message.path !== "") {
            writer.uint32(82).string(message.path);
        }
        if (message.subnetId !== "") {
            writer.uint32(242).string(message.subnetId);
        }
        for (const v of message.securityGroups) {
            writer.uint32(266).string(v);
        }
        if (message.saKeyContent !== "") {
            writer.uint32(258).string(message.saKeyContent);
        }
        if (message.cleanupPolicy !== 0) {
            writer.uint32(168).int32(message.cleanupPolicy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseYdbTarget);
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.database = reader.string();
                    break;
                case 2:
                    message.instance = reader.string();
                    break;
                case 11:
                    message.serviceAccountId = reader.string();
                    break;
                case 10:
                    message.path = reader.string();
                    break;
                case 30:
                    message.subnetId = reader.string();
                    break;
                case 33:
                    message.securityGroups.push(reader.string());
                    break;
                case 32:
                    message.saKeyContent = reader.string();
                    break;
                case 21:
                    message.cleanupPolicy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseYdbTarget);
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : "";
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? String(object.instance)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.securityGroups = ((_a = object.securityGroups) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.saKeyContent =
            object.saKeyContent !== undefined && object.saKeyContent !== null
                ? String(object.saKeyContent)
                : "";
        message.cleanupPolicy =
            object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
                ? ydbCleanupPolicyFromJSON(object.cleanupPolicy)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.database !== undefined && (obj.database = message.database);
        message.instance !== undefined && (obj.instance = message.instance);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.path !== undefined && (obj.path = message.path);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        }
        else {
            obj.securityGroups = [];
        }
        message.saKeyContent !== undefined &&
            (obj.saKeyContent = message.saKeyContent);
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = ydbCleanupPolicyToJSON(message.cleanupPolicy));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseYdbTarget);
        message.database = (_a = object.database) !== null && _a !== void 0 ? _a : "";
        message.instance = (_b = object.instance) !== null && _b !== void 0 ? _b : "";
        message.serviceAccountId = (_c = object.serviceAccountId) !== null && _c !== void 0 ? _c : "";
        message.path = (_d = object.path) !== null && _d !== void 0 ? _d : "";
        message.subnetId = (_e = object.subnetId) !== null && _e !== void 0 ? _e : "";
        message.securityGroups = ((_f = object.securityGroups) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.saKeyContent = (_g = object.saKeyContent) !== null && _g !== void 0 ? _g : "";
        message.cleanupPolicy = (_h = object.cleanupPolicy) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.YdbTarget.$type, exports.YdbTarget);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
