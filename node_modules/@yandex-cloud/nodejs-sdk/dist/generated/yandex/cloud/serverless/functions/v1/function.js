"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyTarget = exports.YMQTarget = exports.AsyncInvocationConfig_ResponseTarget = exports.AsyncInvocationConfig = exports.StorageMount = exports.LogOptions = exports.Secret = exports.ScalingPolicy = exports.Connectivity = exports.Package = exports.Resources = exports.Version_NamedServiceAccountsEntry = exports.Version_EnvironmentEntry = exports.Version = exports.Function_LabelsEntry = exports.Function = exports.version_StatusToJSON = exports.version_StatusFromJSON = exports.Version_Status = exports.function_StatusToJSON = exports.function_StatusFromJSON = exports.Function_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../../google/protobuf/duration");
const log_entry_1 = require("../../../../../yandex/cloud/logging/v1/log_entry");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.serverless.functions.v1";
var Function_Status;
(function (Function_Status) {
    Function_Status[Function_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Function is being created. */
    Function_Status[Function_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Function is ready to be invoked. */
    Function_Status[Function_Status["ACTIVE"] = 2] = "ACTIVE";
    /** DELETING - Function is being deleted. */
    Function_Status[Function_Status["DELETING"] = 3] = "DELETING";
    /** ERROR - Function failed. */
    Function_Status[Function_Status["ERROR"] = 4] = "ERROR";
    Function_Status[Function_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Function_Status = exports.Function_Status || (exports.Function_Status = {}));
function function_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Function_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return Function_Status.CREATING;
        case 2:
        case "ACTIVE":
            return Function_Status.ACTIVE;
        case 3:
        case "DELETING":
            return Function_Status.DELETING;
        case 4:
        case "ERROR":
            return Function_Status.ERROR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Function_Status.UNRECOGNIZED;
    }
}
exports.function_StatusFromJSON = function_StatusFromJSON;
function function_StatusToJSON(object) {
    switch (object) {
        case Function_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Function_Status.CREATING:
            return "CREATING";
        case Function_Status.ACTIVE:
            return "ACTIVE";
        case Function_Status.DELETING:
            return "DELETING";
        case Function_Status.ERROR:
            return "ERROR";
        default:
            return "UNKNOWN";
    }
}
exports.function_StatusToJSON = function_StatusToJSON;
var Version_Status;
(function (Version_Status) {
    Version_Status[Version_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Version is being created. */
    Version_Status[Version_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Version is ready to use. */
    Version_Status[Version_Status["ACTIVE"] = 2] = "ACTIVE";
    Version_Status[Version_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Version_Status = exports.Version_Status || (exports.Version_Status = {}));
function version_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Version_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return Version_Status.CREATING;
        case 2:
        case "ACTIVE":
            return Version_Status.ACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Version_Status.UNRECOGNIZED;
    }
}
exports.version_StatusFromJSON = version_StatusFromJSON;
function version_StatusToJSON(object) {
    switch (object) {
        case Version_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Version_Status.CREATING:
            return "CREATING";
        case Version_Status.ACTIVE:
            return "ACTIVE";
        default:
            return "UNKNOWN";
    }
}
exports.version_StatusToJSON = version_StatusToJSON;
const baseFunction = {
    $type: "yandex.cloud.serverless.functions.v1.Function",
    id: "",
    folderId: "",
    name: "",
    description: "",
    logGroupId: "",
    httpInvokeUrl: "",
    status: 0,
};
exports.Function = {
    $type: "yandex.cloud.serverless.functions.v1.Function",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Function_LabelsEntry.encode({
                $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.logGroupId !== "") {
            writer.uint32(58).string(message.logGroupId);
        }
        if (message.httpInvokeUrl !== "") {
            writer.uint32(66).string(message.httpInvokeUrl);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFunction);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Function_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.logGroupId = reader.string();
                    break;
                case 8:
                    message.httpInvokeUrl = reader.string();
                    break;
                case 9:
                    message.status = reader.int32();
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
        const message = Object.assign({}, baseFunction);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        message.httpInvokeUrl =
            object.httpInvokeUrl !== undefined && object.httpInvokeUrl !== null
                ? String(object.httpInvokeUrl)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? function_StatusFromJSON(object.status)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.httpInvokeUrl !== undefined &&
            (obj.httpInvokeUrl = message.httpInvokeUrl);
        message.status !== undefined &&
            (obj.status = function_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseFunction);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.logGroupId = (_g = object.logGroupId) !== null && _g !== void 0 ? _g : "";
        message.httpInvokeUrl = (_h = object.httpInvokeUrl) !== null && _h !== void 0 ? _h : "";
        message.status = (_j = object.status) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Function.$type, exports.Function);
const baseFunction_LabelsEntry = {
    $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry",
    key: "",
    value: "",
};
exports.Function_LabelsEntry = {
    $type: "yandex.cloud.serverless.functions.v1.Function.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFunction_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFunction_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseFunction_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Function_LabelsEntry.$type, exports.Function_LabelsEntry);
const baseVersion = {
    $type: "yandex.cloud.serverless.functions.v1.Version",
    id: "",
    functionId: "",
    description: "",
    runtime: "",
    entrypoint: "",
    serviceAccountId: "",
    imageSize: 0,
    status: 0,
    tags: "",
    logGroupId: "",
};
exports.Version = {
    $type: "yandex.cloud.serverless.functions.v1.Version",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.functionId !== "") {
            writer.uint32(18).string(message.functionId);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.runtime !== "") {
            writer.uint32(50).string(message.runtime);
        }
        if (message.entrypoint !== "") {
            writer.uint32(58).string(message.entrypoint);
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(66).fork()).ldelim();
        }
        if (message.executionTimeout !== undefined) {
            duration_1.Duration.encode(message.executionTimeout, writer.uint32(74).fork()).ldelim();
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(82).string(message.serviceAccountId);
        }
        if (message.imageSize !== 0) {
            writer.uint32(96).int64(message.imageSize);
        }
        if (message.status !== 0) {
            writer.uint32(104).int32(message.status);
        }
        for (const v of message.tags) {
            writer.uint32(114).string(v);
        }
        if (message.logGroupId !== "") {
            writer.uint32(122).string(message.logGroupId);
        }
        Object.entries(message.environment).forEach(([key, value]) => {
            exports.Version_EnvironmentEntry.encode({
                $type: "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry",
                key: key,
                value,
            }, writer.uint32(130).fork()).ldelim();
        });
        if (message.connectivity !== undefined) {
            exports.Connectivity.encode(message.connectivity, writer.uint32(138).fork()).ldelim();
        }
        Object.entries(message.namedServiceAccounts).forEach(([key, value]) => {
            exports.Version_NamedServiceAccountsEntry.encode({
                $type: "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry",
                key: key,
                value,
            }, writer.uint32(146).fork()).ldelim();
        });
        for (const v of message.secrets) {
            exports.Secret.encode(v, writer.uint32(154).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            exports.LogOptions.encode(message.logOptions, writer.uint32(162).fork()).ldelim();
        }
        for (const v of message.storageMounts) {
            exports.StorageMount.encode(v, writer.uint32(170).fork()).ldelim();
        }
        if (message.asyncInvocationConfig !== undefined) {
            exports.AsyncInvocationConfig.encode(message.asyncInvocationConfig, writer.uint32(178).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVersion);
        message.tags = [];
        message.environment = {};
        message.namedServiceAccounts = {};
        message.secrets = [];
        message.storageMounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.functionId = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.runtime = reader.string();
                    break;
                case 7:
                    message.entrypoint = reader.string();
                    break;
                case 8:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.executionTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.serviceAccountId = reader.string();
                    break;
                case 12:
                    message.imageSize = longToNumber(reader.int64());
                    break;
                case 13:
                    message.status = reader.int32();
                    break;
                case 14:
                    message.tags.push(reader.string());
                    break;
                case 15:
                    message.logGroupId = reader.string();
                    break;
                case 16:
                    const entry16 = exports.Version_EnvironmentEntry.decode(reader, reader.uint32());
                    if (entry16.value !== undefined) {
                        message.environment[entry16.key] = entry16.value;
                    }
                    break;
                case 17:
                    message.connectivity = exports.Connectivity.decode(reader, reader.uint32());
                    break;
                case 18:
                    const entry18 = exports.Version_NamedServiceAccountsEntry.decode(reader, reader.uint32());
                    if (entry18.value !== undefined) {
                        message.namedServiceAccounts[entry18.key] = entry18.value;
                    }
                    break;
                case 19:
                    message.secrets.push(exports.Secret.decode(reader, reader.uint32()));
                    break;
                case 20:
                    message.logOptions = exports.LogOptions.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.storageMounts.push(exports.StorageMount.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.asyncInvocationConfig = exports.AsyncInvocationConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseVersion);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.runtime =
            object.runtime !== undefined && object.runtime !== null
                ? String(object.runtime)
                : "";
        message.entrypoint =
            object.entrypoint !== undefined && object.entrypoint !== null
                ? String(object.entrypoint)
                : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        message.executionTimeout =
            object.executionTimeout !== undefined && object.executionTimeout !== null
                ? duration_1.Duration.fromJSON(object.executionTimeout)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.imageSize =
            object.imageSize !== undefined && object.imageSize !== null
                ? Number(object.imageSize)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? version_StatusFromJSON(object.status)
                : 0;
        message.tags = ((_a = object.tags) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        message.environment = Object.entries((_b = object.environment) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? exports.Connectivity.fromJSON(object.connectivity)
                : undefined;
        message.namedServiceAccounts = Object.entries((_c = object.namedServiceAccounts) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.secrets = ((_d = object.secrets) !== null && _d !== void 0 ? _d : []).map((e) => exports.Secret.fromJSON(e));
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? exports.LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.storageMounts = ((_e = object.storageMounts) !== null && _e !== void 0 ? _e : []).map((e) => exports.StorageMount.fromJSON(e));
        message.asyncInvocationConfig =
            object.asyncInvocationConfig !== undefined &&
                object.asyncInvocationConfig !== null
                ? exports.AsyncInvocationConfig.fromJSON(object.asyncInvocationConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.entrypoint !== undefined && (obj.entrypoint = message.entrypoint);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.executionTimeout !== undefined &&
            (obj.executionTimeout = message.executionTimeout
                ? duration_1.Duration.toJSON(message.executionTimeout)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.imageSize !== undefined &&
            (obj.imageSize = Math.round(message.imageSize));
        message.status !== undefined &&
            (obj.status = version_StatusToJSON(message.status));
        if (message.tags) {
            obj.tags = message.tags.map((e) => e);
        }
        else {
            obj.tags = [];
        }
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        obj.environment = {};
        if (message.environment) {
            Object.entries(message.environment).forEach(([k, v]) => {
                obj.environment[k] = v;
            });
        }
        message.connectivity !== undefined &&
            (obj.connectivity = message.connectivity
                ? exports.Connectivity.toJSON(message.connectivity)
                : undefined);
        obj.namedServiceAccounts = {};
        if (message.namedServiceAccounts) {
            Object.entries(message.namedServiceAccounts).forEach(([k, v]) => {
                obj.namedServiceAccounts[k] = v;
            });
        }
        if (message.secrets) {
            obj.secrets = message.secrets.map((e) => e ? exports.Secret.toJSON(e) : undefined);
        }
        else {
            obj.secrets = [];
        }
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? exports.LogOptions.toJSON(message.logOptions)
                : undefined);
        if (message.storageMounts) {
            obj.storageMounts = message.storageMounts.map((e) => e ? exports.StorageMount.toJSON(e) : undefined);
        }
        else {
            obj.storageMounts = [];
        }
        message.asyncInvocationConfig !== undefined &&
            (obj.asyncInvocationConfig = message.asyncInvocationConfig
                ? exports.AsyncInvocationConfig.toJSON(message.asyncInvocationConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = Object.assign({}, baseVersion);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.functionId = (_b = object.functionId) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        message.runtime = (_e = object.runtime) !== null && _e !== void 0 ? _e : "";
        message.entrypoint = (_f = object.entrypoint) !== null && _f !== void 0 ? _f : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.executionTimeout =
            object.executionTimeout !== undefined && object.executionTimeout !== null
                ? duration_1.Duration.fromPartial(object.executionTimeout)
                : undefined;
        message.serviceAccountId = (_g = object.serviceAccountId) !== null && _g !== void 0 ? _g : "";
        message.imageSize = (_h = object.imageSize) !== null && _h !== void 0 ? _h : 0;
        message.status = (_j = object.status) !== null && _j !== void 0 ? _j : 0;
        message.tags = ((_k = object.tags) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.logGroupId = (_l = object.logGroupId) !== null && _l !== void 0 ? _l : "";
        message.environment = Object.entries((_m = object.environment) !== null && _m !== void 0 ? _m : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? exports.Connectivity.fromPartial(object.connectivity)
                : undefined;
        message.namedServiceAccounts = Object.entries((_o = object.namedServiceAccounts) !== null && _o !== void 0 ? _o : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.secrets = ((_p = object.secrets) === null || _p === void 0 ? void 0 : _p.map((e) => exports.Secret.fromPartial(e))) || [];
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? exports.LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.storageMounts =
            ((_q = object.storageMounts) === null || _q === void 0 ? void 0 : _q.map((e) => exports.StorageMount.fromPartial(e))) || [];
        message.asyncInvocationConfig =
            object.asyncInvocationConfig !== undefined &&
                object.asyncInvocationConfig !== null
                ? exports.AsyncInvocationConfig.fromPartial(object.asyncInvocationConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Version.$type, exports.Version);
const baseVersion_EnvironmentEntry = {
    $type: "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry",
    key: "",
    value: "",
};
exports.Version_EnvironmentEntry = {
    $type: "yandex.cloud.serverless.functions.v1.Version.EnvironmentEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVersion_EnvironmentEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVersion_EnvironmentEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseVersion_EnvironmentEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Version_EnvironmentEntry.$type, exports.Version_EnvironmentEntry);
const baseVersion_NamedServiceAccountsEntry = {
    $type: "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry",
    key: "",
    value: "",
};
exports.Version_NamedServiceAccountsEntry = {
    $type: "yandex.cloud.serverless.functions.v1.Version.NamedServiceAccountsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVersion_NamedServiceAccountsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVersion_NamedServiceAccountsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseVersion_NamedServiceAccountsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Version_NamedServiceAccountsEntry.$type, exports.Version_NamedServiceAccountsEntry);
const baseResources = {
    $type: "yandex.cloud.serverless.functions.v1.Resources",
    memory: 0,
};
exports.Resources = {
    $type: "yandex.cloud.serverless.functions.v1.Resources",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.memory !== 0) {
            writer.uint32(8).int64(message.memory);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResources);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memory = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResources);
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? Number(object.memory)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.memory !== undefined && (obj.memory = Math.round(message.memory));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseResources);
        message.memory = (_a = object.memory) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Resources.$type, exports.Resources);
const basePackage = {
    $type: "yandex.cloud.serverless.functions.v1.Package",
    bucketName: "",
    objectName: "",
    sha256: "",
};
exports.Package = {
    $type: "yandex.cloud.serverless.functions.v1.Package",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bucketName !== "") {
            writer.uint32(10).string(message.bucketName);
        }
        if (message.objectName !== "") {
            writer.uint32(18).string(message.objectName);
        }
        if (message.sha256 !== "") {
            writer.uint32(26).string(message.sha256);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePackage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketName = reader.string();
                    break;
                case 2:
                    message.objectName = reader.string();
                    break;
                case 3:
                    message.sha256 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePackage);
        message.bucketName =
            object.bucketName !== undefined && object.bucketName !== null
                ? String(object.bucketName)
                : "";
        message.objectName =
            object.objectName !== undefined && object.objectName !== null
                ? String(object.objectName)
                : "";
        message.sha256 =
            object.sha256 !== undefined && object.sha256 !== null
                ? String(object.sha256)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bucketName !== undefined && (obj.bucketName = message.bucketName);
        message.objectName !== undefined && (obj.objectName = message.objectName);
        message.sha256 !== undefined && (obj.sha256 = message.sha256);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, basePackage);
        message.bucketName = (_a = object.bucketName) !== null && _a !== void 0 ? _a : "";
        message.objectName = (_b = object.objectName) !== null && _b !== void 0 ? _b : "";
        message.sha256 = (_c = object.sha256) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Package.$type, exports.Package);
const baseConnectivity = {
    $type: "yandex.cloud.serverless.functions.v1.Connectivity",
    networkId: "",
    subnetId: "",
};
exports.Connectivity = {
    $type: "yandex.cloud.serverless.functions.v1.Connectivity",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkId !== "") {
            writer.uint32(10).string(message.networkId);
        }
        for (const v of message.subnetId) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectivity);
        message.subnetId = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                case 2:
                    message.subnetId.push(reader.string());
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
        const message = Object.assign({}, baseConnectivity);
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.subnetId = ((_a = object.subnetId) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetId) {
            obj.subnetId = message.subnetId.map((e) => e);
        }
        else {
            obj.subnetId = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseConnectivity);
        message.networkId = (_a = object.networkId) !== null && _a !== void 0 ? _a : "";
        message.subnetId = ((_b = object.subnetId) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Connectivity.$type, exports.Connectivity);
const baseScalingPolicy = {
    $type: "yandex.cloud.serverless.functions.v1.ScalingPolicy",
    functionId: "",
    tag: "",
    provisionedInstancesCount: 0,
    zoneInstancesLimit: 0,
    zoneRequestsLimit: 0,
};
exports.ScalingPolicy = {
    $type: "yandex.cloud.serverless.functions.v1.ScalingPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== "") {
            writer.uint32(18).string(message.tag);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.modifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.provisionedInstancesCount !== 0) {
            writer.uint32(48).int64(message.provisionedInstancesCount);
        }
        if (message.zoneInstancesLimit !== 0) {
            writer.uint32(56).int64(message.zoneInstancesLimit);
        }
        if (message.zoneRequestsLimit !== 0) {
            writer.uint32(64).int64(message.zoneRequestsLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalingPolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.modifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.provisionedInstancesCount = longToNumber(reader.int64());
                    break;
                case 7:
                    message.zoneInstancesLimit = longToNumber(reader.int64());
                    break;
                case 8:
                    message.zoneRequestsLimit = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScalingPolicy);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        message.tag =
            object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        message.provisionedInstancesCount =
            object.provisionedInstancesCount !== undefined &&
                object.provisionedInstancesCount !== null
                ? Number(object.provisionedInstancesCount)
                : 0;
        message.zoneInstancesLimit =
            object.zoneInstancesLimit !== undefined &&
                object.zoneInstancesLimit !== null
                ? Number(object.zoneInstancesLimit)
                : 0;
        message.zoneRequestsLimit =
            object.zoneRequestsLimit !== undefined &&
                object.zoneRequestsLimit !== null
                ? Number(object.zoneRequestsLimit)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.modifiedAt !== undefined &&
            (obj.modifiedAt = message.modifiedAt.toISOString());
        message.provisionedInstancesCount !== undefined &&
            (obj.provisionedInstancesCount = Math.round(message.provisionedInstancesCount));
        message.zoneInstancesLimit !== undefined &&
            (obj.zoneInstancesLimit = Math.round(message.zoneInstancesLimit));
        message.zoneRequestsLimit !== undefined &&
            (obj.zoneRequestsLimit = Math.round(message.zoneRequestsLimit));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseScalingPolicy);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        message.tag = (_b = object.tag) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.modifiedAt = (_d = object.modifiedAt) !== null && _d !== void 0 ? _d : undefined;
        message.provisionedInstancesCount = (_e = object.provisionedInstancesCount) !== null && _e !== void 0 ? _e : 0;
        message.zoneInstancesLimit = (_f = object.zoneInstancesLimit) !== null && _f !== void 0 ? _f : 0;
        message.zoneRequestsLimit = (_g = object.zoneRequestsLimit) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalingPolicy.$type, exports.ScalingPolicy);
const baseSecret = {
    $type: "yandex.cloud.serverless.functions.v1.Secret",
    id: "",
    versionId: "",
    key: "",
};
exports.Secret = {
    $type: "yandex.cloud.serverless.functions.v1.Secret",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.key !== "") {
            writer.uint32(26).string(message.key);
        }
        if (message.environmentVariable !== undefined) {
            writer.uint32(34).string(message.environmentVariable);
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
                    message.id = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                case 4:
                    message.environmentVariable = reader.string();
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
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.environmentVariable =
            object.environmentVariable !== undefined &&
                object.environmentVariable !== null
                ? String(object.environmentVariable)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.key !== undefined && (obj.key = message.key);
        message.environmentVariable !== undefined &&
            (obj.environmentVariable = message.environmentVariable);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseSecret);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.key = (_c = object.key) !== null && _c !== void 0 ? _c : "";
        message.environmentVariable = (_d = object.environmentVariable) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Secret.$type, exports.Secret);
const baseLogOptions = {
    $type: "yandex.cloud.serverless.functions.v1.LogOptions",
    disabled: false,
    minLevel: 0,
};
exports.LogOptions = {
    $type: "yandex.cloud.serverless.functions.v1.LogOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.disabled === true) {
            writer.uint32(8).bool(message.disabled);
        }
        if (message.logGroupId !== undefined) {
            writer.uint32(18).string(message.logGroupId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(26).string(message.folderId);
        }
        if (message.minLevel !== 0) {
            writer.uint32(32).int32(message.minLevel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLogOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disabled = reader.bool();
                    break;
                case 2:
                    message.logGroupId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.minLevel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLogOptions);
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.minLevel =
            object.minLevel !== undefined && object.minLevel !== null
                ? (0, log_entry_1.logLevel_LevelFromJSON)(object.minLevel)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.disabled !== undefined && (obj.disabled = message.disabled);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.minLevel !== undefined &&
            (obj.minLevel = (0, log_entry_1.logLevel_LevelToJSON)(message.minLevel));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseLogOptions);
        message.disabled = (_a = object.disabled) !== null && _a !== void 0 ? _a : false;
        message.logGroupId = (_b = object.logGroupId) !== null && _b !== void 0 ? _b : undefined;
        message.folderId = (_c = object.folderId) !== null && _c !== void 0 ? _c : undefined;
        message.minLevel = (_d = object.minLevel) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogOptions.$type, exports.LogOptions);
const baseStorageMount = {
    $type: "yandex.cloud.serverless.functions.v1.StorageMount",
    bucketId: "",
    prefix: "",
    mountPointName: "",
    readOnly: false,
};
exports.StorageMount = {
    $type: "yandex.cloud.serverless.functions.v1.StorageMount",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bucketId !== "") {
            writer.uint32(10).string(message.bucketId);
        }
        if (message.prefix !== "") {
            writer.uint32(18).string(message.prefix);
        }
        if (message.mountPointName !== "") {
            writer.uint32(26).string(message.mountPointName);
        }
        if (message.readOnly === true) {
            writer.uint32(32).bool(message.readOnly);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStorageMount);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketId = reader.string();
                    break;
                case 2:
                    message.prefix = reader.string();
                    break;
                case 3:
                    message.mountPointName = reader.string();
                    break;
                case 4:
                    message.readOnly = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStorageMount);
        message.bucketId =
            object.bucketId !== undefined && object.bucketId !== null
                ? String(object.bucketId)
                : "";
        message.prefix =
            object.prefix !== undefined && object.prefix !== null
                ? String(object.prefix)
                : "";
        message.mountPointName =
            object.mountPointName !== undefined && object.mountPointName !== null
                ? String(object.mountPointName)
                : "";
        message.readOnly =
            object.readOnly !== undefined && object.readOnly !== null
                ? Boolean(object.readOnly)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bucketId !== undefined && (obj.bucketId = message.bucketId);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.mountPointName !== undefined &&
            (obj.mountPointName = message.mountPointName);
        message.readOnly !== undefined && (obj.readOnly = message.readOnly);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseStorageMount);
        message.bucketId = (_a = object.bucketId) !== null && _a !== void 0 ? _a : "";
        message.prefix = (_b = object.prefix) !== null && _b !== void 0 ? _b : "";
        message.mountPointName = (_c = object.mountPointName) !== null && _c !== void 0 ? _c : "";
        message.readOnly = (_d = object.readOnly) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StorageMount.$type, exports.StorageMount);
const baseAsyncInvocationConfig = {
    $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig",
    retriesCount: 0,
    serviceAccountId: "",
};
exports.AsyncInvocationConfig = {
    $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.retriesCount !== 0) {
            writer.uint32(8).int64(message.retriesCount);
        }
        if (message.successTarget !== undefined) {
            exports.AsyncInvocationConfig_ResponseTarget.encode(message.successTarget, writer.uint32(18).fork()).ldelim();
        }
        if (message.failureTarget !== undefined) {
            exports.AsyncInvocationConfig_ResponseTarget.encode(message.failureTarget, writer.uint32(26).fork()).ldelim();
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(34).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsyncInvocationConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.retriesCount = longToNumber(reader.int64());
                    break;
                case 2:
                    message.successTarget = exports.AsyncInvocationConfig_ResponseTarget.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.failureTarget = exports.AsyncInvocationConfig_ResponseTarget.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAsyncInvocationConfig);
        message.retriesCount =
            object.retriesCount !== undefined && object.retriesCount !== null
                ? Number(object.retriesCount)
                : 0;
        message.successTarget =
            object.successTarget !== undefined && object.successTarget !== null
                ? exports.AsyncInvocationConfig_ResponseTarget.fromJSON(object.successTarget)
                : undefined;
        message.failureTarget =
            object.failureTarget !== undefined && object.failureTarget !== null
                ? exports.AsyncInvocationConfig_ResponseTarget.fromJSON(object.failureTarget)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.retriesCount !== undefined &&
            (obj.retriesCount = Math.round(message.retriesCount));
        message.successTarget !== undefined &&
            (obj.successTarget = message.successTarget
                ? exports.AsyncInvocationConfig_ResponseTarget.toJSON(message.successTarget)
                : undefined);
        message.failureTarget !== undefined &&
            (obj.failureTarget = message.failureTarget
                ? exports.AsyncInvocationConfig_ResponseTarget.toJSON(message.failureTarget)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAsyncInvocationConfig);
        message.retriesCount = (_a = object.retriesCount) !== null && _a !== void 0 ? _a : 0;
        message.successTarget =
            object.successTarget !== undefined && object.successTarget !== null
                ? exports.AsyncInvocationConfig_ResponseTarget.fromPartial(object.successTarget)
                : undefined;
        message.failureTarget =
            object.failureTarget !== undefined && object.failureTarget !== null
                ? exports.AsyncInvocationConfig_ResponseTarget.fromPartial(object.failureTarget)
                : undefined;
        message.serviceAccountId = (_b = object.serviceAccountId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsyncInvocationConfig.$type, exports.AsyncInvocationConfig);
const baseAsyncInvocationConfig_ResponseTarget = {
    $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig.ResponseTarget",
};
exports.AsyncInvocationConfig_ResponseTarget = {
    $type: "yandex.cloud.serverless.functions.v1.AsyncInvocationConfig.ResponseTarget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.emptyTarget !== undefined) {
            exports.EmptyTarget.encode(message.emptyTarget, writer.uint32(10).fork()).ldelim();
        }
        if (message.ymqTarget !== undefined) {
            exports.YMQTarget.encode(message.ymqTarget, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsyncInvocationConfig_ResponseTarget);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.emptyTarget = exports.EmptyTarget.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ymqTarget = exports.YMQTarget.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAsyncInvocationConfig_ResponseTarget);
        message.emptyTarget =
            object.emptyTarget !== undefined && object.emptyTarget !== null
                ? exports.EmptyTarget.fromJSON(object.emptyTarget)
                : undefined;
        message.ymqTarget =
            object.ymqTarget !== undefined && object.ymqTarget !== null
                ? exports.YMQTarget.fromJSON(object.ymqTarget)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.emptyTarget !== undefined &&
            (obj.emptyTarget = message.emptyTarget
                ? exports.EmptyTarget.toJSON(message.emptyTarget)
                : undefined);
        message.ymqTarget !== undefined &&
            (obj.ymqTarget = message.ymqTarget
                ? exports.YMQTarget.toJSON(message.ymqTarget)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAsyncInvocationConfig_ResponseTarget);
        message.emptyTarget =
            object.emptyTarget !== undefined && object.emptyTarget !== null
                ? exports.EmptyTarget.fromPartial(object.emptyTarget)
                : undefined;
        message.ymqTarget =
            object.ymqTarget !== undefined && object.ymqTarget !== null
                ? exports.YMQTarget.fromPartial(object.ymqTarget)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsyncInvocationConfig_ResponseTarget.$type, exports.AsyncInvocationConfig_ResponseTarget);
const baseYMQTarget = {
    $type: "yandex.cloud.serverless.functions.v1.YMQTarget",
    queueArn: "",
    serviceAccountId: "",
};
exports.YMQTarget = {
    $type: "yandex.cloud.serverless.functions.v1.YMQTarget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.queueArn !== "") {
            writer.uint32(10).string(message.queueArn);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(18).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseYMQTarget);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queueArn = reader.string();
                    break;
                case 2:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseYMQTarget);
        message.queueArn =
            object.queueArn !== undefined && object.queueArn !== null
                ? String(object.queueArn)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.queueArn !== undefined && (obj.queueArn = message.queueArn);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseYMQTarget);
        message.queueArn = (_a = object.queueArn) !== null && _a !== void 0 ? _a : "";
        message.serviceAccountId = (_b = object.serviceAccountId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.YMQTarget.$type, exports.YMQTarget);
const baseEmptyTarget = {
    $type: "yandex.cloud.serverless.functions.v1.EmptyTarget",
};
exports.EmptyTarget = {
    $type: "yandex.cloud.serverless.functions.v1.EmptyTarget",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEmptyTarget);
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
        const message = Object.assign({}, baseEmptyTarget);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseEmptyTarget);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EmptyTarget.$type, exports.EmptyTarget);
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
