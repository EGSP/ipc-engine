"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayServiceClient = exports.ApiGatewayServiceService = exports.GetOpenapiSpecResponse = exports.GetOpenapiSpecRequest = exports.ListOperationsResponse = exports.ListOperationsRequest = exports.RemoveDomainMetadata = exports.AddDomainMetadata = exports.DeleteApiGatewayMetadata = exports.UpdateApiGatewayMetadata = exports.CreateApiGatewayMetadata = exports.RemoveDomainRequest = exports.AddDomainRequest = exports.DeleteApiGatewayRequest = exports.UpdateApiGatewayRequest_VariablesEntry = exports.UpdateApiGatewayRequest_LabelsEntry = exports.UpdateApiGatewayRequest = exports.CreateApiGatewayRequest_VariablesEntry = exports.CreateApiGatewayRequest_LabelsEntry = exports.CreateApiGatewayRequest = exports.ListApiGatewayResponse = exports.ListApiGatewayRequest = exports.GetApiGatewayRequest = exports.getOpenapiSpecRequest_FormatToJSON = exports.getOpenapiSpecRequest_FormatFromJSON = exports.GetOpenapiSpecRequest_Format = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const apigateway_1 = require("../../../../../yandex/cloud/serverless/apigateway/v1/apigateway");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.serverless.apigateway.v1";
var GetOpenapiSpecRequest_Format;
(function (GetOpenapiSpecRequest_Format) {
    GetOpenapiSpecRequest_Format[GetOpenapiSpecRequest_Format["FORMAT_UNSPECIFIED"] = 0] = "FORMAT_UNSPECIFIED";
    GetOpenapiSpecRequest_Format[GetOpenapiSpecRequest_Format["JSON"] = 1] = "JSON";
    GetOpenapiSpecRequest_Format[GetOpenapiSpecRequest_Format["YAML"] = 2] = "YAML";
    GetOpenapiSpecRequest_Format[GetOpenapiSpecRequest_Format["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GetOpenapiSpecRequest_Format = exports.GetOpenapiSpecRequest_Format || (exports.GetOpenapiSpecRequest_Format = {}));
function getOpenapiSpecRequest_FormatFromJSON(object) {
    switch (object) {
        case 0:
        case "FORMAT_UNSPECIFIED":
            return GetOpenapiSpecRequest_Format.FORMAT_UNSPECIFIED;
        case 1:
        case "JSON":
            return GetOpenapiSpecRequest_Format.JSON;
        case 2:
        case "YAML":
            return GetOpenapiSpecRequest_Format.YAML;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GetOpenapiSpecRequest_Format.UNRECOGNIZED;
    }
}
exports.getOpenapiSpecRequest_FormatFromJSON = getOpenapiSpecRequest_FormatFromJSON;
function getOpenapiSpecRequest_FormatToJSON(object) {
    switch (object) {
        case GetOpenapiSpecRequest_Format.FORMAT_UNSPECIFIED:
            return "FORMAT_UNSPECIFIED";
        case GetOpenapiSpecRequest_Format.JSON:
            return "JSON";
        case GetOpenapiSpecRequest_Format.YAML:
            return "YAML";
        default:
            return "UNKNOWN";
    }
}
exports.getOpenapiSpecRequest_FormatToJSON = getOpenapiSpecRequest_FormatToJSON;
const baseGetApiGatewayRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest",
    apiGatewayId: "",
};
exports.GetApiGatewayRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetApiGatewayRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetApiGatewayRequest);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetApiGatewayRequest);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetApiGatewayRequest.$type, exports.GetApiGatewayRequest);
const baseListApiGatewayRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListApiGatewayRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListApiGatewayRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListApiGatewayRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListApiGatewayRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListApiGatewayRequest.$type, exports.ListApiGatewayRequest);
const baseListApiGatewayResponse = {
    $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse",
    nextPageToken: "",
};
exports.ListApiGatewayResponse = {
    $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.apiGateways) {
            apigateway_1.ApiGateway.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListApiGatewayResponse);
        message.apiGateways = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGateways.push(apigateway_1.ApiGateway.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListApiGatewayResponse);
        message.apiGateways = ((_a = object.apiGateways) !== null && _a !== void 0 ? _a : []).map((e) => apigateway_1.ApiGateway.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.apiGateways) {
            obj.apiGateways = message.apiGateways.map((e) => e ? apigateway_1.ApiGateway.toJSON(e) : undefined);
        }
        else {
            obj.apiGateways = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListApiGatewayResponse);
        message.apiGateways =
            ((_a = object.apiGateways) === null || _a === void 0 ? void 0 : _a.map((e) => apigateway_1.ApiGateway.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListApiGatewayResponse.$type, exports.ListApiGatewayResponse);
const baseCreateApiGatewayRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest",
    folderId: "",
    name: "",
    description: "",
};
exports.CreateApiGatewayRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateApiGatewayRequest_LabelsEntry.encode({
                $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.openapiSpec !== undefined) {
            writer.uint32(42).string(message.openapiSpec);
        }
        if (message.connectivity !== undefined) {
            apigateway_1.Connectivity.encode(message.connectivity, writer.uint32(50).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            apigateway_1.LogOptions.encode(message.logOptions, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.variables).forEach(([key, value]) => {
            exports.CreateApiGatewayRequest_VariablesEntry.encode({
                $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry",
                key: key,
                value,
            }, writer.uint32(66).fork()).ldelim();
        });
        if (message.canary !== undefined) {
            apigateway_1.Canary.encode(message.canary, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateApiGatewayRequest);
        message.labels = {};
        message.variables = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateApiGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.openapiSpec = reader.string();
                    break;
                case 6:
                    message.connectivity = apigateway_1.Connectivity.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.logOptions = apigateway_1.LogOptions.decode(reader, reader.uint32());
                    break;
                case 8:
                    const entry8 = exports.CreateApiGatewayRequest_VariablesEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.variables[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    message.canary = apigateway_1.Canary.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateApiGatewayRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
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
        message.openapiSpec =
            object.openapiSpec !== undefined && object.openapiSpec !== null
                ? String(object.openapiSpec)
                : undefined;
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? apigateway_1.Connectivity.fromJSON(object.connectivity)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? apigateway_1.LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.variables = Object.entries((_b = object.variables) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = apigateway_1.VariableInput.fromJSON(value);
            return acc;
        }, {});
        message.canary =
            object.canary !== undefined && object.canary !== null
                ? apigateway_1.Canary.fromJSON(object.canary)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.openapiSpec !== undefined &&
            (obj.openapiSpec = message.openapiSpec);
        message.connectivity !== undefined &&
            (obj.connectivity = message.connectivity
                ? apigateway_1.Connectivity.toJSON(message.connectivity)
                : undefined);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? apigateway_1.LogOptions.toJSON(message.logOptions)
                : undefined);
        obj.variables = {};
        if (message.variables) {
            Object.entries(message.variables).forEach(([k, v]) => {
                obj.variables[k] = apigateway_1.VariableInput.toJSON(v);
            });
        }
        message.canary !== undefined &&
            (obj.canary = message.canary ? apigateway_1.Canary.toJSON(message.canary) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateApiGatewayRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.openapiSpec = (_e = object.openapiSpec) !== null && _e !== void 0 ? _e : undefined;
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? apigateway_1.Connectivity.fromPartial(object.connectivity)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? apigateway_1.LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.variables = Object.entries((_f = object.variables) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = apigateway_1.VariableInput.fromPartial(value);
            }
            return acc;
        }, {});
        message.canary =
            object.canary !== undefined && object.canary !== null
                ? apigateway_1.Canary.fromPartial(object.canary)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateApiGatewayRequest.$type, exports.CreateApiGatewayRequest);
const baseCreateApiGatewayRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateApiGatewayRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateApiGatewayRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateApiGatewayRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateApiGatewayRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateApiGatewayRequest_LabelsEntry.$type, exports.CreateApiGatewayRequest_LabelsEntry);
const baseCreateApiGatewayRequest_VariablesEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry",
    key: "",
};
exports.CreateApiGatewayRequest_VariablesEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            apigateway_1.VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateApiGatewayRequest_VariablesEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = apigateway_1.VariableInput.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateApiGatewayRequest_VariablesEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? apigateway_1.VariableInput.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? apigateway_1.VariableInput.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateApiGatewayRequest_VariablesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? apigateway_1.VariableInput.fromPartial(object.value)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateApiGatewayRequest_VariablesEntry.$type, exports.CreateApiGatewayRequest_VariablesEntry);
const baseUpdateApiGatewayRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest",
    apiGatewayId: "",
    name: "",
    description: "",
};
exports.UpdateApiGatewayRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateApiGatewayRequest_LabelsEntry.encode({
                $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.openapiSpec !== undefined) {
            writer.uint32(50).string(message.openapiSpec);
        }
        if (message.connectivity !== undefined) {
            apigateway_1.Connectivity.encode(message.connectivity, writer.uint32(58).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            apigateway_1.LogOptions.encode(message.logOptions, writer.uint32(66).fork()).ldelim();
        }
        Object.entries(message.variables).forEach(([key, value]) => {
            exports.UpdateApiGatewayRequest_VariablesEntry.encode({
                $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry",
                key: key,
                value,
            }, writer.uint32(74).fork()).ldelim();
        });
        if (message.canary !== undefined) {
            apigateway_1.Canary.encode(message.canary, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateApiGatewayRequest);
        message.labels = {};
        message.variables = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateApiGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.openapiSpec = reader.string();
                    break;
                case 7:
                    message.connectivity = apigateway_1.Connectivity.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.logOptions = apigateway_1.LogOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    const entry9 = exports.UpdateApiGatewayRequest_VariablesEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.variables[entry9.key] = entry9.value;
                    }
                    break;
                case 10:
                    message.canary = apigateway_1.Canary.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateApiGatewayRequest);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
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
        message.openapiSpec =
            object.openapiSpec !== undefined && object.openapiSpec !== null
                ? String(object.openapiSpec)
                : undefined;
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? apigateway_1.Connectivity.fromJSON(object.connectivity)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? apigateway_1.LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.variables = Object.entries((_b = object.variables) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = apigateway_1.VariableInput.fromJSON(value);
            return acc;
        }, {});
        message.canary =
            object.canary !== undefined && object.canary !== null
                ? apigateway_1.Canary.fromJSON(object.canary)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.openapiSpec !== undefined &&
            (obj.openapiSpec = message.openapiSpec);
        message.connectivity !== undefined &&
            (obj.connectivity = message.connectivity
                ? apigateway_1.Connectivity.toJSON(message.connectivity)
                : undefined);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? apigateway_1.LogOptions.toJSON(message.logOptions)
                : undefined);
        obj.variables = {};
        if (message.variables) {
            Object.entries(message.variables).forEach(([k, v]) => {
                obj.variables[k] = apigateway_1.VariableInput.toJSON(v);
            });
        }
        message.canary !== undefined &&
            (obj.canary = message.canary ? apigateway_1.Canary.toJSON(message.canary) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseUpdateApiGatewayRequest);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.openapiSpec = (_e = object.openapiSpec) !== null && _e !== void 0 ? _e : undefined;
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? apigateway_1.Connectivity.fromPartial(object.connectivity)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? apigateway_1.LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.variables = Object.entries((_f = object.variables) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = apigateway_1.VariableInput.fromPartial(value);
            }
            return acc;
        }, {});
        message.canary =
            object.canary !== undefined && object.canary !== null
                ? apigateway_1.Canary.fromPartial(object.canary)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateApiGatewayRequest.$type, exports.UpdateApiGatewayRequest);
const baseUpdateApiGatewayRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateApiGatewayRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateApiGatewayRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateApiGatewayRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateApiGatewayRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateApiGatewayRequest_LabelsEntry.$type, exports.UpdateApiGatewayRequest_LabelsEntry);
const baseUpdateApiGatewayRequest_VariablesEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry",
    key: "",
};
exports.UpdateApiGatewayRequest_VariablesEntry = {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            apigateway_1.VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateApiGatewayRequest_VariablesEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = apigateway_1.VariableInput.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateApiGatewayRequest_VariablesEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? apigateway_1.VariableInput.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? apigateway_1.VariableInput.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateApiGatewayRequest_VariablesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? apigateway_1.VariableInput.fromPartial(object.value)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateApiGatewayRequest_VariablesEntry.$type, exports.UpdateApiGatewayRequest_VariablesEntry);
const baseDeleteApiGatewayRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest",
    apiGatewayId: "",
};
exports.DeleteApiGatewayRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteApiGatewayRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteApiGatewayRequest);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteApiGatewayRequest);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteApiGatewayRequest.$type, exports.DeleteApiGatewayRequest);
const baseAddDomainRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.AddDomainRequest",
    apiGatewayId: "",
    domainName: "",
    certificateId: "",
};
exports.AddDomainRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.AddDomainRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainName !== "") {
            writer.uint32(26).string(message.domainName);
        }
        if (message.certificateId !== "") {
            writer.uint32(34).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddDomainRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 3:
                    message.domainName = reader.string();
                    break;
                case 4:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddDomainRequest);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        message.domainName =
            object.domainName !== undefined && object.domainName !== null
                ? String(object.domainName)
                : "";
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainName !== undefined && (obj.domainName = message.domainName);
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAddDomainRequest);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        message.domainName = (_b = object.domainName) !== null && _b !== void 0 ? _b : "";
        message.certificateId = (_c = object.certificateId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddDomainRequest.$type, exports.AddDomainRequest);
const baseRemoveDomainRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest",
    apiGatewayId: "",
    domainId: "",
};
exports.RemoveDomainRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainId !== "") {
            writer.uint32(18).string(message.domainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveDomainRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.domainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveDomainRequest);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        message.domainId =
            object.domainId !== undefined && object.domainId !== null
                ? String(object.domainId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainId !== undefined && (obj.domainId = message.domainId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRemoveDomainRequest);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        message.domainId = (_b = object.domainId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveDomainRequest.$type, exports.RemoveDomainRequest);
const baseCreateApiGatewayMetadata = {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata",
    apiGatewayId: "",
};
exports.CreateApiGatewayMetadata = {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateApiGatewayMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateApiGatewayMetadata);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateApiGatewayMetadata);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateApiGatewayMetadata.$type, exports.CreateApiGatewayMetadata);
const baseUpdateApiGatewayMetadata = {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata",
    apiGatewayId: "",
};
exports.UpdateApiGatewayMetadata = {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateApiGatewayMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateApiGatewayMetadata);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateApiGatewayMetadata);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateApiGatewayMetadata.$type, exports.UpdateApiGatewayMetadata);
const baseDeleteApiGatewayMetadata = {
    $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata",
    apiGatewayId: "",
};
exports.DeleteApiGatewayMetadata = {
    $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteApiGatewayMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteApiGatewayMetadata);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteApiGatewayMetadata);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteApiGatewayMetadata.$type, exports.DeleteApiGatewayMetadata);
const baseAddDomainMetadata = {
    $type: "yandex.cloud.serverless.apigateway.v1.AddDomainMetadata",
    apiGatewayId: "",
    domainId: "",
    domainName: "",
    certificateId: "",
};
exports.AddDomainMetadata = {
    $type: "yandex.cloud.serverless.apigateway.v1.AddDomainMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainId !== "") {
            writer.uint32(18).string(message.domainId);
        }
        if (message.domainName !== "") {
            writer.uint32(26).string(message.domainName);
        }
        if (message.certificateId !== "") {
            writer.uint32(34).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddDomainMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.domainId = reader.string();
                    break;
                case 3:
                    message.domainName = reader.string();
                    break;
                case 4:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddDomainMetadata);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        message.domainId =
            object.domainId !== undefined && object.domainId !== null
                ? String(object.domainId)
                : "";
        message.domainName =
            object.domainName !== undefined && object.domainName !== null
                ? String(object.domainName)
                : "";
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainId !== undefined && (obj.domainId = message.domainId);
        message.domainName !== undefined && (obj.domainName = message.domainName);
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseAddDomainMetadata);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        message.domainId = (_b = object.domainId) !== null && _b !== void 0 ? _b : "";
        message.domainName = (_c = object.domainName) !== null && _c !== void 0 ? _c : "";
        message.certificateId = (_d = object.certificateId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddDomainMetadata.$type, exports.AddDomainMetadata);
const baseRemoveDomainMetadata = {
    $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata",
    apiGatewayId: "",
    domainId: "",
};
exports.RemoveDomainMetadata = {
    $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainId !== "") {
            writer.uint32(18).string(message.domainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveDomainMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.domainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveDomainMetadata);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        message.domainId =
            object.domainId !== undefined && object.domainId !== null
                ? String(object.domainId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainId !== undefined && (obj.domainId = message.domainId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRemoveDomainMetadata);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        message.domainId = (_b = object.domainId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveDomainMetadata.$type, exports.RemoveDomainMetadata);
const baseListOperationsRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsRequest",
    apiGatewayId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListOperationsRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListOperationsRequest);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListOperationsRequest);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOperationsRequest.$type, exports.ListOperationsRequest);
const baseListOperationsResponse = {
    $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsResponse",
    nextPageToken: "",
};
exports.ListOperationsResponse = {
    $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListOperationsResponse);
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListOperationsResponse);
        message.operations = ((_a = object.operations) !== null && _a !== void 0 ? _a : []).map((e) => operation_1.Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOperationsResponse.$type, exports.ListOperationsResponse);
const baseGetOpenapiSpecRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest",
    apiGatewayId: "",
    format: 0,
};
exports.GetOpenapiSpecRequest = {
    $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.format !== 0) {
            writer.uint32(16).int32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetOpenapiSpecRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.format = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetOpenapiSpecRequest);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        message.format =
            object.format !== undefined && object.format !== null
                ? getOpenapiSpecRequest_FormatFromJSON(object.format)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.format !== undefined &&
            (obj.format = getOpenapiSpecRequest_FormatToJSON(message.format));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetOpenapiSpecRequest);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetOpenapiSpecRequest.$type, exports.GetOpenapiSpecRequest);
const baseGetOpenapiSpecResponse = {
    $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse",
    apiGatewayId: "",
    openapiSpec: "",
};
exports.GetOpenapiSpecResponse = {
    $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== "") {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.openapiSpec !== "") {
            writer.uint32(18).string(message.openapiSpec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetOpenapiSpecResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.openapiSpec = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetOpenapiSpecResponse);
        message.apiGatewayId =
            object.apiGatewayId !== undefined && object.apiGatewayId !== null
                ? String(object.apiGatewayId)
                : "";
        message.openapiSpec =
            object.openapiSpec !== undefined && object.openapiSpec !== null
                ? String(object.openapiSpec)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.openapiSpec !== undefined &&
            (obj.openapiSpec = message.openapiSpec);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetOpenapiSpecResponse);
        message.apiGatewayId = (_a = object.apiGatewayId) !== null && _a !== void 0 ? _a : "";
        message.openapiSpec = (_b = object.openapiSpec) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetOpenapiSpecResponse.$type, exports.GetOpenapiSpecResponse);
/** A set of methods for managing API gateways. */
exports.ApiGatewayServiceService = {
    /**
     * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
     * To get associated openapi specification, make a [GetOpenapiSpec](#GetOpenapiSpec) request.
     *
     * To get the list of all available API gateways, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetApiGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(apigateway_1.ApiGateway.encode(value).finish()),
        responseDeserialize: (value) => apigateway_1.ApiGateway.decode(value),
    },
    /** Retrieves the list of API gateways in the specified folder. */
    list: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListApiGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListApiGatewayResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListApiGatewayResponse.decode(value),
    },
    /** Creates an API gateway in the specified folder. */
    create: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateApiGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified API gateway. */
    update: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateApiGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified API gateway. */
    delete: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteApiGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Attaches domain to the specified API gateway. */
    addDomain: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/AddDomain",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddDomainRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddDomainRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Detaches domain from the specified API gateway. */
    removeDomain: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/RemoveDomain",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveDomainRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveDomainRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the OpenAPI specification of specified API gateway. */
    getOpenapiSpec: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/GetOpenapiSpec",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetOpenapiSpecRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetOpenapiSpecRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetOpenapiSpecResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetOpenapiSpecResponse.decode(value),
    },
    /** Lists operations for the specified API gateway. */
    listOperations: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified API gateway. */
    listAccessBindings: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified API gateway. */
    setAccessBindings: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified API gateway. */
    updateAccessBindings: {
        path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ApiGatewayServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ApiGatewayServiceService, "yandex.cloud.serverless.apigateway.v1.ApiGatewayService");
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
