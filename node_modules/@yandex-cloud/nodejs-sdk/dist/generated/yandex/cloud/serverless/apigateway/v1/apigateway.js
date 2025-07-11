"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableInput = exports.Canary_VariablesEntry = exports.Canary = exports.LogOptions = exports.Connectivity = exports.AttachedDomain = exports.ApiGateway_VariablesEntry = exports.ApiGateway_LabelsEntry = exports.ApiGateway = exports.apiGateway_StatusToJSON = exports.apiGateway_StatusFromJSON = exports.ApiGateway_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const log_entry_1 = require("../../../../../yandex/cloud/logging/v1/log_entry");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.serverless.apigateway.v1";
var ApiGateway_Status;
(function (ApiGateway_Status) {
    ApiGateway_Status[ApiGateway_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - API gateway is being created. */
    ApiGateway_Status[ApiGateway_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - API gateway is ready for use. */
    ApiGateway_Status[ApiGateway_Status["ACTIVE"] = 2] = "ACTIVE";
    /** DELETING - API gateway is being deleted. */
    ApiGateway_Status[ApiGateway_Status["DELETING"] = 3] = "DELETING";
    /** ERROR - API gateway failed. The only allowed action is delete. */
    ApiGateway_Status[ApiGateway_Status["ERROR"] = 4] = "ERROR";
    /** UPDATING - API gateway is being updated. */
    ApiGateway_Status[ApiGateway_Status["UPDATING"] = 5] = "UPDATING";
    ApiGateway_Status[ApiGateway_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ApiGateway_Status = exports.ApiGateway_Status || (exports.ApiGateway_Status = {}));
function apiGateway_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return ApiGateway_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return ApiGateway_Status.CREATING;
        case 2:
        case "ACTIVE":
            return ApiGateway_Status.ACTIVE;
        case 3:
        case "DELETING":
            return ApiGateway_Status.DELETING;
        case 4:
        case "ERROR":
            return ApiGateway_Status.ERROR;
        case 5:
        case "UPDATING":
            return ApiGateway_Status.UPDATING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ApiGateway_Status.UNRECOGNIZED;
    }
}
exports.apiGateway_StatusFromJSON = apiGateway_StatusFromJSON;
function apiGateway_StatusToJSON(object) {
    switch (object) {
        case ApiGateway_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case ApiGateway_Status.CREATING:
            return "CREATING";
        case ApiGateway_Status.ACTIVE:
            return "ACTIVE";
        case ApiGateway_Status.DELETING:
            return "DELETING";
        case ApiGateway_Status.ERROR:
            return "ERROR";
        case ApiGateway_Status.UPDATING:
            return "UPDATING";
        default:
            return "UNKNOWN";
    }
}
exports.apiGateway_StatusToJSON = apiGateway_StatusToJSON;
const baseApiGateway = {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
    domain: "",
    logGroupId: "",
};
exports.ApiGateway = {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway",
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
            exports.ApiGateway_LabelsEntry.encode({
                $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(58).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.domain !== "") {
            writer.uint32(74).string(message.domain);
        }
        if (message.logGroupId !== "") {
            writer.uint32(82).string(message.logGroupId);
        }
        for (const v of message.attachedDomains) {
            exports.AttachedDomain.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.connectivity !== undefined) {
            exports.Connectivity.encode(message.connectivity, writer.uint32(98).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            exports.LogOptions.encode(message.logOptions, writer.uint32(106).fork()).ldelim();
        }
        Object.entries(message.variables).forEach(([key, value]) => {
            exports.ApiGateway_VariablesEntry.encode({
                $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.VariablesEntry",
                key: key,
                value,
            }, writer.uint32(114).fork()).ldelim();
        });
        if (message.canary !== undefined) {
            exports.Canary.encode(message.canary, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseApiGateway);
        message.labels = {};
        message.attachedDomains = [];
        message.variables = {};
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
                case 7:
                    const entry7 = exports.ApiGateway_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.domain = reader.string();
                    break;
                case 10:
                    message.logGroupId = reader.string();
                    break;
                case 11:
                    message.attachedDomains.push(exports.AttachedDomain.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.connectivity = exports.Connectivity.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.logOptions = exports.LogOptions.decode(reader, reader.uint32());
                    break;
                case 14:
                    const entry14 = exports.ApiGateway_VariablesEntry.decode(reader, reader.uint32());
                    if (entry14.value !== undefined) {
                        message.variables[entry14.key] = entry14.value;
                    }
                    break;
                case 15:
                    message.canary = exports.Canary.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseApiGateway);
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
        message.status =
            object.status !== undefined && object.status !== null
                ? apiGateway_StatusFromJSON(object.status)
                : 0;
        message.domain =
            object.domain !== undefined && object.domain !== null
                ? String(object.domain)
                : "";
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        message.attachedDomains = ((_b = object.attachedDomains) !== null && _b !== void 0 ? _b : []).map((e) => exports.AttachedDomain.fromJSON(e));
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? exports.Connectivity.fromJSON(object.connectivity)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? exports.LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.variables = Object.entries((_c = object.variables) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            acc[key] = exports.VariableInput.fromJSON(value);
            return acc;
        }, {});
        message.canary =
            object.canary !== undefined && object.canary !== null
                ? exports.Canary.fromJSON(object.canary)
                : undefined;
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
        message.status !== undefined &&
            (obj.status = apiGateway_StatusToJSON(message.status));
        message.domain !== undefined && (obj.domain = message.domain);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        if (message.attachedDomains) {
            obj.attachedDomains = message.attachedDomains.map((e) => e ? exports.AttachedDomain.toJSON(e) : undefined);
        }
        else {
            obj.attachedDomains = [];
        }
        message.connectivity !== undefined &&
            (obj.connectivity = message.connectivity
                ? exports.Connectivity.toJSON(message.connectivity)
                : undefined);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? exports.LogOptions.toJSON(message.logOptions)
                : undefined);
        obj.variables = {};
        if (message.variables) {
            Object.entries(message.variables).forEach(([k, v]) => {
                obj.variables[k] = exports.VariableInput.toJSON(v);
            });
        }
        message.canary !== undefined &&
            (obj.canary = message.canary ? exports.Canary.toJSON(message.canary) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseApiGateway);
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
        message.status = (_g = object.status) !== null && _g !== void 0 ? _g : 0;
        message.domain = (_h = object.domain) !== null && _h !== void 0 ? _h : "";
        message.logGroupId = (_j = object.logGroupId) !== null && _j !== void 0 ? _j : "";
        message.attachedDomains =
            ((_k = object.attachedDomains) === null || _k === void 0 ? void 0 : _k.map((e) => exports.AttachedDomain.fromPartial(e))) || [];
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? exports.Connectivity.fromPartial(object.connectivity)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? exports.LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.variables = Object.entries((_l = object.variables) !== null && _l !== void 0 ? _l : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.VariableInput.fromPartial(value);
            }
            return acc;
        }, {});
        message.canary =
            object.canary !== undefined && object.canary !== null
                ? exports.Canary.fromPartial(object.canary)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApiGateway.$type, exports.ApiGateway);
const baseApiGateway_LabelsEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry",
    key: "",
    value: "",
};
exports.ApiGateway_LabelsEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry",
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
        const message = Object.assign({}, baseApiGateway_LabelsEntry);
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
        const message = Object.assign({}, baseApiGateway_LabelsEntry);
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
        const message = Object.assign({}, baseApiGateway_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApiGateway_LabelsEntry.$type, exports.ApiGateway_LabelsEntry);
const baseApiGateway_VariablesEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.VariablesEntry",
    key: "",
};
exports.ApiGateway_VariablesEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.VariablesEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseApiGateway_VariablesEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.VariableInput.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseApiGateway_VariablesEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.VariableInput.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.VariableInput.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseApiGateway_VariablesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.VariableInput.fromPartial(object.value)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApiGateway_VariablesEntry.$type, exports.ApiGateway_VariablesEntry);
const baseAttachedDomain = {
    $type: "yandex.cloud.serverless.apigateway.v1.AttachedDomain",
    domainId: "",
    certificateId: "",
    enabled: false,
    domain: "",
};
exports.AttachedDomain = {
    $type: "yandex.cloud.serverless.apigateway.v1.AttachedDomain",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.domainId !== "") {
            writer.uint32(10).string(message.domainId);
        }
        if (message.certificateId !== "") {
            writer.uint32(18).string(message.certificateId);
        }
        if (message.enabled === true) {
            writer.uint32(24).bool(message.enabled);
        }
        if (message.domain !== "") {
            writer.uint32(42).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachedDomain);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domainId = reader.string();
                    break;
                case 2:
                    message.certificateId = reader.string();
                    break;
                case 3:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachedDomain);
        message.domainId =
            object.domainId !== undefined && object.domainId !== null
                ? String(object.domainId)
                : "";
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.domain =
            object.domain !== undefined && object.domain !== null
                ? String(object.domain)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.domainId !== undefined && (obj.domainId = message.domainId);
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseAttachedDomain);
        message.domainId = (_a = object.domainId) !== null && _a !== void 0 ? _a : "";
        message.certificateId = (_b = object.certificateId) !== null && _b !== void 0 ? _b : "";
        message.enabled = (_c = object.enabled) !== null && _c !== void 0 ? _c : false;
        message.domain = (_d = object.domain) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedDomain.$type, exports.AttachedDomain);
const baseConnectivity = {
    $type: "yandex.cloud.serverless.apigateway.v1.Connectivity",
    networkId: "",
    subnetId: "",
};
exports.Connectivity = {
    $type: "yandex.cloud.serverless.apigateway.v1.Connectivity",
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
const baseLogOptions = {
    $type: "yandex.cloud.serverless.apigateway.v1.LogOptions",
    disabled: false,
    minLevel: 0,
};
exports.LogOptions = {
    $type: "yandex.cloud.serverless.apigateway.v1.LogOptions",
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
const baseCanary = {
    $type: "yandex.cloud.serverless.apigateway.v1.Canary",
    weight: 0,
};
exports.Canary = {
    $type: "yandex.cloud.serverless.apigateway.v1.Canary",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.weight !== 0) {
            writer.uint32(8).int64(message.weight);
        }
        Object.entries(message.variables).forEach(([key, value]) => {
            exports.Canary_VariablesEntry.encode({
                $type: "yandex.cloud.serverless.apigateway.v1.Canary.VariablesEntry",
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCanary);
        message.variables = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weight = longToNumber(reader.int64());
                    break;
                case 2:
                    const entry2 = exports.Canary_VariablesEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.variables[entry2.key] = entry2.value;
                    }
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
        const message = Object.assign({}, baseCanary);
        message.weight =
            object.weight !== undefined && object.weight !== null
                ? Number(object.weight)
                : 0;
        message.variables = Object.entries((_a = object.variables) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = exports.VariableInput.fromJSON(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.weight !== undefined && (obj.weight = Math.round(message.weight));
        obj.variables = {};
        if (message.variables) {
            Object.entries(message.variables).forEach(([k, v]) => {
                obj.variables[k] = exports.VariableInput.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCanary);
        message.weight = (_a = object.weight) !== null && _a !== void 0 ? _a : 0;
        message.variables = Object.entries((_b = object.variables) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.VariableInput.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Canary.$type, exports.Canary);
const baseCanary_VariablesEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.Canary.VariablesEntry",
    key: "",
};
exports.Canary_VariablesEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.Canary.VariablesEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCanary_VariablesEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.VariableInput.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCanary_VariablesEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.VariableInput.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.VariableInput.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCanary_VariablesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.VariableInput.fromPartial(object.value)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Canary_VariablesEntry.$type, exports.Canary_VariablesEntry);
const baseVariableInput = {
    $type: "yandex.cloud.serverless.apigateway.v1.VariableInput",
};
exports.VariableInput = {
    $type: "yandex.cloud.serverless.apigateway.v1.VariableInput",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.stringValue !== undefined) {
            writer.uint32(10).string(message.stringValue);
        }
        if (message.intValue !== undefined) {
            writer.uint32(16).int64(message.intValue);
        }
        if (message.doubleValue !== undefined) {
            writer.uint32(25).double(message.doubleValue);
        }
        if (message.boolValue !== undefined) {
            writer.uint32(32).bool(message.boolValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVariableInput);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stringValue = reader.string();
                    break;
                case 2:
                    message.intValue = longToNumber(reader.int64());
                    break;
                case 3:
                    message.doubleValue = reader.double();
                    break;
                case 4:
                    message.boolValue = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVariableInput);
        message.stringValue =
            object.stringValue !== undefined && object.stringValue !== null
                ? String(object.stringValue)
                : undefined;
        message.intValue =
            object.intValue !== undefined && object.intValue !== null
                ? Number(object.intValue)
                : undefined;
        message.doubleValue =
            object.doubleValue !== undefined && object.doubleValue !== null
                ? Number(object.doubleValue)
                : undefined;
        message.boolValue =
            object.boolValue !== undefined && object.boolValue !== null
                ? Boolean(object.boolValue)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.stringValue !== undefined &&
            (obj.stringValue = message.stringValue);
        message.intValue !== undefined &&
            (obj.intValue = Math.round(message.intValue));
        message.doubleValue !== undefined &&
            (obj.doubleValue = message.doubleValue);
        message.boolValue !== undefined && (obj.boolValue = message.boolValue);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseVariableInput);
        message.stringValue = (_a = object.stringValue) !== null && _a !== void 0 ? _a : undefined;
        message.intValue = (_b = object.intValue) !== null && _b !== void 0 ? _b : undefined;
        message.doubleValue = (_c = object.doubleValue) !== null && _c !== void 0 ? _c : undefined;
        message.boolValue = (_d = object.boolValue) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.VariableInput.$type, exports.VariableInput);
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
