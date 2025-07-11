"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoAuth = exports.DataSchema = exports.FieldList = exports.DataTransformationOptions = exports.ColumnValue = exports.TLSConfig = exports.TLSMode = exports.ColSchema = exports.Secret = exports.AltName = exports.columnTypeToJSON = exports.columnTypeFromJSON = exports.ColumnType = exports.cleanupPolicyToJSON = exports.cleanupPolicyFromJSON = exports.CleanupPolicy = exports.objectTransferStageToJSON = exports.objectTransferStageFromJSON = exports.ObjectTransferStage = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../../../../google/protobuf/empty");
exports.protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
var ObjectTransferStage;
(function (ObjectTransferStage) {
    ObjectTransferStage[ObjectTransferStage["OBJECT_TRANSFER_STAGE_UNSPECIFIED"] = 0] = "OBJECT_TRANSFER_STAGE_UNSPECIFIED";
    /** BEFORE_DATA - Before data transfer */
    ObjectTransferStage[ObjectTransferStage["BEFORE_DATA"] = 1] = "BEFORE_DATA";
    /** AFTER_DATA - After data transfer */
    ObjectTransferStage[ObjectTransferStage["AFTER_DATA"] = 2] = "AFTER_DATA";
    /** NEVER - Don't copy */
    ObjectTransferStage[ObjectTransferStage["NEVER"] = 3] = "NEVER";
    ObjectTransferStage[ObjectTransferStage["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ObjectTransferStage = exports.ObjectTransferStage || (exports.ObjectTransferStage = {}));
function objectTransferStageFromJSON(object) {
    switch (object) {
        case 0:
        case "OBJECT_TRANSFER_STAGE_UNSPECIFIED":
            return ObjectTransferStage.OBJECT_TRANSFER_STAGE_UNSPECIFIED;
        case 1:
        case "BEFORE_DATA":
            return ObjectTransferStage.BEFORE_DATA;
        case 2:
        case "AFTER_DATA":
            return ObjectTransferStage.AFTER_DATA;
        case 3:
        case "NEVER":
            return ObjectTransferStage.NEVER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ObjectTransferStage.UNRECOGNIZED;
    }
}
exports.objectTransferStageFromJSON = objectTransferStageFromJSON;
function objectTransferStageToJSON(object) {
    switch (object) {
        case ObjectTransferStage.OBJECT_TRANSFER_STAGE_UNSPECIFIED:
            return "OBJECT_TRANSFER_STAGE_UNSPECIFIED";
        case ObjectTransferStage.BEFORE_DATA:
            return "BEFORE_DATA";
        case ObjectTransferStage.AFTER_DATA:
            return "AFTER_DATA";
        case ObjectTransferStage.NEVER:
            return "NEVER";
        default:
            return "UNKNOWN";
    }
}
exports.objectTransferStageToJSON = objectTransferStageToJSON;
var CleanupPolicy;
(function (CleanupPolicy) {
    CleanupPolicy[CleanupPolicy["CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLEANUP_POLICY_UNSPECIFIED";
    /** DISABLED - Don't cleanup */
    CleanupPolicy[CleanupPolicy["DISABLED"] = 1] = "DISABLED";
    /** DROP - Drop */
    CleanupPolicy[CleanupPolicy["DROP"] = 2] = "DROP";
    /** TRUNCATE - Truncate */
    CleanupPolicy[CleanupPolicy["TRUNCATE"] = 3] = "TRUNCATE";
    CleanupPolicy[CleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CleanupPolicy = exports.CleanupPolicy || (exports.CleanupPolicy = {}));
function cleanupPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "CLEANUP_POLICY_UNSPECIFIED":
            return CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case "DISABLED":
            return CleanupPolicy.DISABLED;
        case 2:
        case "DROP":
            return CleanupPolicy.DROP;
        case 3:
        case "TRUNCATE":
            return CleanupPolicy.TRUNCATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CleanupPolicy.UNRECOGNIZED;
    }
}
exports.cleanupPolicyFromJSON = cleanupPolicyFromJSON;
function cleanupPolicyToJSON(object) {
    switch (object) {
        case CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
            return "CLEANUP_POLICY_UNSPECIFIED";
        case CleanupPolicy.DISABLED:
            return "DISABLED";
        case CleanupPolicy.DROP:
            return "DROP";
        case CleanupPolicy.TRUNCATE:
            return "TRUNCATE";
        default:
            return "UNKNOWN";
    }
}
exports.cleanupPolicyToJSON = cleanupPolicyToJSON;
var ColumnType;
(function (ColumnType) {
    ColumnType[ColumnType["COLUMN_TYPE_UNSPECIFIED"] = 0] = "COLUMN_TYPE_UNSPECIFIED";
    ColumnType[ColumnType["INT64"] = 14] = "INT64";
    ColumnType[ColumnType["INT32"] = 1] = "INT32";
    ColumnType[ColumnType["INT16"] = 2] = "INT16";
    ColumnType[ColumnType["INT8"] = 3] = "INT8";
    ColumnType[ColumnType["UINT64"] = 4] = "UINT64";
    ColumnType[ColumnType["UINT32"] = 5] = "UINT32";
    ColumnType[ColumnType["UINT16"] = 6] = "UINT16";
    ColumnType[ColumnType["UINT8"] = 7] = "UINT8";
    ColumnType[ColumnType["DOUBLE"] = 8] = "DOUBLE";
    ColumnType[ColumnType["BOOLEAN"] = 9] = "BOOLEAN";
    ColumnType[ColumnType["STRING"] = 10] = "STRING";
    ColumnType[ColumnType["UTF8"] = 11] = "UTF8";
    ColumnType[ColumnType["ANY"] = 12] = "ANY";
    ColumnType[ColumnType["DATETIME"] = 13] = "DATETIME";
    ColumnType[ColumnType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
function columnTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "COLUMN_TYPE_UNSPECIFIED":
            return ColumnType.COLUMN_TYPE_UNSPECIFIED;
        case 14:
        case "INT64":
            return ColumnType.INT64;
        case 1:
        case "INT32":
            return ColumnType.INT32;
        case 2:
        case "INT16":
            return ColumnType.INT16;
        case 3:
        case "INT8":
            return ColumnType.INT8;
        case 4:
        case "UINT64":
            return ColumnType.UINT64;
        case 5:
        case "UINT32":
            return ColumnType.UINT32;
        case 6:
        case "UINT16":
            return ColumnType.UINT16;
        case 7:
        case "UINT8":
            return ColumnType.UINT8;
        case 8:
        case "DOUBLE":
            return ColumnType.DOUBLE;
        case 9:
        case "BOOLEAN":
            return ColumnType.BOOLEAN;
        case 10:
        case "STRING":
            return ColumnType.STRING;
        case 11:
        case "UTF8":
            return ColumnType.UTF8;
        case 12:
        case "ANY":
            return ColumnType.ANY;
        case 13:
        case "DATETIME":
            return ColumnType.DATETIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ColumnType.UNRECOGNIZED;
    }
}
exports.columnTypeFromJSON = columnTypeFromJSON;
function columnTypeToJSON(object) {
    switch (object) {
        case ColumnType.COLUMN_TYPE_UNSPECIFIED:
            return "COLUMN_TYPE_UNSPECIFIED";
        case ColumnType.INT64:
            return "INT64";
        case ColumnType.INT32:
            return "INT32";
        case ColumnType.INT16:
            return "INT16";
        case ColumnType.INT8:
            return "INT8";
        case ColumnType.UINT64:
            return "UINT64";
        case ColumnType.UINT32:
            return "UINT32";
        case ColumnType.UINT16:
            return "UINT16";
        case ColumnType.UINT8:
            return "UINT8";
        case ColumnType.DOUBLE:
            return "DOUBLE";
        case ColumnType.BOOLEAN:
            return "BOOLEAN";
        case ColumnType.STRING:
            return "STRING";
        case ColumnType.UTF8:
            return "UTF8";
        case ColumnType.ANY:
            return "ANY";
        case ColumnType.DATETIME:
            return "DATETIME";
        default:
            return "UNKNOWN";
    }
}
exports.columnTypeToJSON = columnTypeToJSON;
const baseAltName = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AltName",
    fromName: "",
    toName: "",
};
exports.AltName = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AltName",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fromName !== "") {
            writer.uint32(10).string(message.fromName);
        }
        if (message.toName !== "") {
            writer.uint32(18).string(message.toName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAltName);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromName = reader.string();
                    break;
                case 2:
                    message.toName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAltName);
        message.fromName =
            object.fromName !== undefined && object.fromName !== null
                ? String(object.fromName)
                : "";
        message.toName =
            object.toName !== undefined && object.toName !== null
                ? String(object.toName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fromName !== undefined && (obj.fromName = message.fromName);
        message.toName !== undefined && (obj.toName = message.toName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAltName);
        message.fromName = (_a = object.fromName) !== null && _a !== void 0 ? _a : "";
        message.toName = (_b = object.toName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AltName.$type, exports.AltName);
const baseSecret = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Secret",
};
exports.Secret = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Secret",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.raw !== undefined) {
            writer.uint32(10).string(message.raw);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSecret);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.raw = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSecret);
        message.raw =
            object.raw !== undefined && object.raw !== null
                ? String(object.raw)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.raw !== undefined && (obj.raw = message.raw);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSecret);
        message.raw = (_a = object.raw) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Secret.$type, exports.Secret);
const baseColSchema = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColSchema",
    name: "",
    type: 0,
    key: false,
    required: false,
    path: "",
};
exports.ColSchema = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColSchema",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.key === true) {
            writer.uint32(24).bool(message.key);
        }
        if (message.required === true) {
            writer.uint32(32).bool(message.required);
        }
        if (message.path !== "") {
            writer.uint32(42).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseColSchema);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.key = reader.bool();
                    break;
                case 4:
                    message.required = reader.bool();
                    break;
                case 5:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseColSchema);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? columnTypeFromJSON(object.type)
                : 0;
        message.key =
            object.key !== undefined && object.key !== null
                ? Boolean(object.key)
                : false;
        message.required =
            object.required !== undefined && object.required !== null
                ? Boolean(object.required)
                : false;
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined && (obj.type = columnTypeToJSON(message.type));
        message.key !== undefined && (obj.key = message.key);
        message.required !== undefined && (obj.required = message.required);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseColSchema);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.key = (_c = object.key) !== null && _c !== void 0 ? _c : false;
        message.required = (_d = object.required) !== null && _d !== void 0 ? _d : false;
        message.path = (_e = object.path) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ColSchema.$type, exports.ColSchema);
const baseTLSMode = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode",
};
exports.TLSMode = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.disabled !== undefined) {
            empty_1.Empty.encode(message.disabled, writer.uint32(10).fork()).ldelim();
        }
        if (message.enabled !== undefined) {
            exports.TLSConfig.encode(message.enabled, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTLSMode);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disabled = empty_1.Empty.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.enabled = exports.TLSConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTLSMode);
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? empty_1.Empty.fromJSON(object.disabled)
                : undefined;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? exports.TLSConfig.fromJSON(object.enabled)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.disabled !== undefined &&
            (obj.disabled = message.disabled
                ? empty_1.Empty.toJSON(message.disabled)
                : undefined);
        message.enabled !== undefined &&
            (obj.enabled = message.enabled
                ? exports.TLSConfig.toJSON(message.enabled)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTLSMode);
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? empty_1.Empty.fromPartial(object.disabled)
                : undefined;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? exports.TLSConfig.fromPartial(object.enabled)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TLSMode.$type, exports.TLSMode);
const baseTLSConfig = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig",
    caCertificate: "",
};
exports.TLSConfig = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.caCertificate !== "") {
            writer.uint32(10).string(message.caCertificate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTLSConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.caCertificate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTLSConfig);
        message.caCertificate =
            object.caCertificate !== undefined && object.caCertificate !== null
                ? String(object.caCertificate)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.caCertificate !== undefined &&
            (obj.caCertificate = message.caCertificate);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTLSConfig);
        message.caCertificate = (_a = object.caCertificate) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TLSConfig.$type, exports.TLSConfig);
const baseColumnValue = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue",
};
exports.ColumnValue = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.stringValue !== undefined) {
            writer.uint32(10).string(message.stringValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseColumnValue);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stringValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseColumnValue);
        message.stringValue =
            object.stringValue !== undefined && object.stringValue !== null
                ? String(object.stringValue)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.stringValue !== undefined &&
            (obj.stringValue = message.stringValue);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseColumnValue);
        message.stringValue = (_a = object.stringValue) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ColumnValue.$type, exports.ColumnValue);
const baseDataTransformationOptions = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DataTransformationOptions",
    cloudFunction: "",
    serviceAccountId: "",
    numberOfRetries: 0,
    bufferSize: "",
    bufferFlushInterval: "",
    invocationTimeout: "",
};
exports.DataTransformationOptions = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DataTransformationOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cloudFunction !== "") {
            writer.uint32(10).string(message.cloudFunction);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(66).string(message.serviceAccountId);
        }
        if (message.numberOfRetries !== 0) {
            writer.uint32(16).int64(message.numberOfRetries);
        }
        if (message.bufferSize !== "") {
            writer.uint32(26).string(message.bufferSize);
        }
        if (message.bufferFlushInterval !== "") {
            writer.uint32(34).string(message.bufferFlushInterval);
        }
        if (message.invocationTimeout !== "") {
            writer.uint32(42).string(message.invocationTimeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDataTransformationOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudFunction = reader.string();
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
                    message.numberOfRetries = longToNumber(reader.int64());
                    break;
                case 3:
                    message.bufferSize = reader.string();
                    break;
                case 4:
                    message.bufferFlushInterval = reader.string();
                    break;
                case 5:
                    message.invocationTimeout = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDataTransformationOptions);
        message.cloudFunction =
            object.cloudFunction !== undefined && object.cloudFunction !== null
                ? String(object.cloudFunction)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.numberOfRetries =
            object.numberOfRetries !== undefined && object.numberOfRetries !== null
                ? Number(object.numberOfRetries)
                : 0;
        message.bufferSize =
            object.bufferSize !== undefined && object.bufferSize !== null
                ? String(object.bufferSize)
                : "";
        message.bufferFlushInterval =
            object.bufferFlushInterval !== undefined &&
                object.bufferFlushInterval !== null
                ? String(object.bufferFlushInterval)
                : "";
        message.invocationTimeout =
            object.invocationTimeout !== undefined &&
                object.invocationTimeout !== null
                ? String(object.invocationTimeout)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudFunction !== undefined &&
            (obj.cloudFunction = message.cloudFunction);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.numberOfRetries !== undefined &&
            (obj.numberOfRetries = Math.round(message.numberOfRetries));
        message.bufferSize !== undefined && (obj.bufferSize = message.bufferSize);
        message.bufferFlushInterval !== undefined &&
            (obj.bufferFlushInterval = message.bufferFlushInterval);
        message.invocationTimeout !== undefined &&
            (obj.invocationTimeout = message.invocationTimeout);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseDataTransformationOptions);
        message.cloudFunction = (_a = object.cloudFunction) !== null && _a !== void 0 ? _a : "";
        message.serviceAccountId = (_b = object.serviceAccountId) !== null && _b !== void 0 ? _b : "";
        message.numberOfRetries = (_c = object.numberOfRetries) !== null && _c !== void 0 ? _c : 0;
        message.bufferSize = (_d = object.bufferSize) !== null && _d !== void 0 ? _d : "";
        message.bufferFlushInterval = (_e = object.bufferFlushInterval) !== null && _e !== void 0 ? _e : "";
        message.invocationTimeout = (_f = object.invocationTimeout) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DataTransformationOptions.$type, exports.DataTransformationOptions);
const baseFieldList = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.FieldList",
};
exports.FieldList = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.FieldList",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.fields) {
            exports.ColSchema.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFieldList);
        message.fields = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.fields.push(exports.ColSchema.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseFieldList);
        message.fields = ((_a = object.fields) !== null && _a !== void 0 ? _a : []).map((e) => exports.ColSchema.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.fields) {
            obj.fields = message.fields.map((e) => e ? exports.ColSchema.toJSON(e) : undefined);
        }
        else {
            obj.fields = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseFieldList);
        message.fields = ((_a = object.fields) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ColSchema.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.FieldList.$type, exports.FieldList);
const baseDataSchema = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DataSchema",
};
exports.DataSchema = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DataSchema",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fields !== undefined) {
            exports.FieldList.encode(message.fields, writer.uint32(18).fork()).ldelim();
        }
        if (message.jsonFields !== undefined) {
            writer.uint32(10).string(message.jsonFields);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDataSchema);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.fields = exports.FieldList.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.jsonFields = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDataSchema);
        message.fields =
            object.fields !== undefined && object.fields !== null
                ? exports.FieldList.fromJSON(object.fields)
                : undefined;
        message.jsonFields =
            object.jsonFields !== undefined && object.jsonFields !== null
                ? String(object.jsonFields)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fields !== undefined &&
            (obj.fields = message.fields
                ? exports.FieldList.toJSON(message.fields)
                : undefined);
        message.jsonFields !== undefined && (obj.jsonFields = message.jsonFields);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDataSchema);
        message.fields =
            object.fields !== undefined && object.fields !== null
                ? exports.FieldList.fromPartial(object.fields)
                : undefined;
        message.jsonFields = (_a = object.jsonFields) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DataSchema.$type, exports.DataSchema);
const baseNoAuth = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.NoAuth",
};
exports.NoAuth = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.NoAuth",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNoAuth);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseNoAuth);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseNoAuth);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NoAuth.$type, exports.NoAuth);
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
