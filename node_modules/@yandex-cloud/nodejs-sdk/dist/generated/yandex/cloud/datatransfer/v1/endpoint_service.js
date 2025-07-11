"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointServiceClient = exports.EndpointServiceService = exports.DeleteEndpointMetadata = exports.DeleteEndpointRequest = exports.UpdateEndpointMetadata = exports.UpdateEndpointRequest_LabelsEntry = exports.UpdateEndpointRequest = exports.CreateEndpointMetadata = exports.CreateEndpointRequest_LabelsEntry = exports.CreateEndpointRequest = exports.ListEndpointsResponse = exports.ListEndpointsRequest = exports.GetEndpointRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const endpoint_1 = require("../../../../yandex/cloud/datatransfer/v1/endpoint");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.datatransfer.v1";
const baseGetEndpointRequest = {
    $type: "yandex.cloud.datatransfer.v1.GetEndpointRequest",
    endpointId: "",
};
exports.GetEndpointRequest = {
    $type: "yandex.cloud.datatransfer.v1.GetEndpointRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.endpointId !== "") {
            writer.uint32(10).string(message.endpointId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetEndpointRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpointId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetEndpointRequest);
        message.endpointId =
            object.endpointId !== undefined && object.endpointId !== null
                ? String(object.endpointId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.endpointId !== undefined && (obj.endpointId = message.endpointId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetEndpointRequest);
        message.endpointId = (_a = object.endpointId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetEndpointRequest.$type, exports.GetEndpointRequest);
const baseListEndpointsRequest = {
    $type: "yandex.cloud.datatransfer.v1.ListEndpointsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListEndpointsRequest = {
    $type: "yandex.cloud.datatransfer.v1.ListEndpointsRequest",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListEndpointsRequest);
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListEndpointsRequest);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListEndpointsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListEndpointsRequest.$type, exports.ListEndpointsRequest);
const baseListEndpointsResponse = {
    $type: "yandex.cloud.datatransfer.v1.ListEndpointsResponse",
    nextPageToken: "",
};
exports.ListEndpointsResponse = {
    $type: "yandex.cloud.datatransfer.v1.ListEndpointsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.endpoints) {
            endpoint_1.Endpoint.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListEndpointsResponse);
        message.endpoints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpoints.push(endpoint_1.Endpoint.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListEndpointsResponse);
        message.endpoints = ((_a = object.endpoints) !== null && _a !== void 0 ? _a : []).map((e) => endpoint_1.Endpoint.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map((e) => e ? endpoint_1.Endpoint.toJSON(e) : undefined);
        }
        else {
            obj.endpoints = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListEndpointsResponse);
        message.endpoints =
            ((_a = object.endpoints) === null || _a === void 0 ? void 0 : _a.map((e) => endpoint_1.Endpoint.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListEndpointsResponse.$type, exports.ListEndpointsResponse);
const baseCreateEndpointRequest = {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest",
    folderId: "",
    name: "",
    description: "",
};
exports.CreateEndpointRequest = {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest",
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
            exports.CreateEndpointRequest_LabelsEntry.encode({
                $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.settings !== undefined) {
            endpoint_1.EndpointSettings.encode(message.settings, writer.uint32(418).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateEndpointRequest);
        message.labels = {};
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
                    const entry4 = exports.CreateEndpointRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 52:
                    message.settings = endpoint_1.EndpointSettings.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateEndpointRequest);
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
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? endpoint_1.EndpointSettings.fromJSON(object.settings)
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
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? endpoint_1.EndpointSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateEndpointRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? endpoint_1.EndpointSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateEndpointRequest.$type, exports.CreateEndpointRequest);
const baseCreateEndpointRequest_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateEndpointRequest_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateEndpointRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateEndpointRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateEndpointRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateEndpointRequest_LabelsEntry.$type, exports.CreateEndpointRequest_LabelsEntry);
const baseCreateEndpointMetadata = {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointMetadata",
    endpointId: "",
};
exports.CreateEndpointMetadata = {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.endpointId !== "") {
            writer.uint32(10).string(message.endpointId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateEndpointMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpointId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateEndpointMetadata);
        message.endpointId =
            object.endpointId !== undefined && object.endpointId !== null
                ? String(object.endpointId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.endpointId !== undefined && (obj.endpointId = message.endpointId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateEndpointMetadata);
        message.endpointId = (_a = object.endpointId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateEndpointMetadata.$type, exports.CreateEndpointMetadata);
const baseUpdateEndpointRequest = {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest",
    endpointId: "",
    name: "",
    description: "",
};
exports.UpdateEndpointRequest = {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.endpointId !== "") {
            writer.uint32(82).string(message.endpointId);
        }
        if (message.name !== "") {
            writer.uint32(90).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(98).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateEndpointRequest_LabelsEntry.encode({
                $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(106).fork()).ldelim();
        });
        if (message.settings !== undefined) {
            endpoint_1.EndpointSettings.encode(message.settings, writer.uint32(418).fork()).ldelim();
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(482).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateEndpointRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 10:
                    message.endpointId = reader.string();
                    break;
                case 11:
                    message.name = reader.string();
                    break;
                case 12:
                    message.description = reader.string();
                    break;
                case 13:
                    const entry13 = exports.UpdateEndpointRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry13.value !== undefined) {
                        message.labels[entry13.key] = entry13.value;
                    }
                    break;
                case 52:
                    message.settings = endpoint_1.EndpointSettings.decode(reader, reader.uint32());
                    break;
                case 60:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateEndpointRequest);
        message.endpointId =
            object.endpointId !== undefined && object.endpointId !== null
                ? String(object.endpointId)
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
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? endpoint_1.EndpointSettings.fromJSON(object.settings)
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.endpointId !== undefined && (obj.endpointId = message.endpointId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? endpoint_1.EndpointSettings.toJSON(message.settings)
                : undefined);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateEndpointRequest);
        message.endpointId = (_a = object.endpointId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? endpoint_1.EndpointSettings.fromPartial(object.settings)
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateEndpointRequest.$type, exports.UpdateEndpointRequest);
const baseUpdateEndpointRequest_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateEndpointRequest_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateEndpointRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateEndpointRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateEndpointRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateEndpointRequest_LabelsEntry.$type, exports.UpdateEndpointRequest_LabelsEntry);
const baseUpdateEndpointMetadata = {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointMetadata",
    endpointId: "",
};
exports.UpdateEndpointMetadata = {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.endpointId !== "") {
            writer.uint32(10).string(message.endpointId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateEndpointMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpointId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateEndpointMetadata);
        message.endpointId =
            object.endpointId !== undefined && object.endpointId !== null
                ? String(object.endpointId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.endpointId !== undefined && (obj.endpointId = message.endpointId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateEndpointMetadata);
        message.endpointId = (_a = object.endpointId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateEndpointMetadata.$type, exports.UpdateEndpointMetadata);
const baseDeleteEndpointRequest = {
    $type: "yandex.cloud.datatransfer.v1.DeleteEndpointRequest",
    endpointId: "",
};
exports.DeleteEndpointRequest = {
    $type: "yandex.cloud.datatransfer.v1.DeleteEndpointRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.endpointId !== "") {
            writer.uint32(10).string(message.endpointId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteEndpointRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpointId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteEndpointRequest);
        message.endpointId =
            object.endpointId !== undefined && object.endpointId !== null
                ? String(object.endpointId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.endpointId !== undefined && (obj.endpointId = message.endpointId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteEndpointRequest);
        message.endpointId = (_a = object.endpointId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteEndpointRequest.$type, exports.DeleteEndpointRequest);
const baseDeleteEndpointMetadata = {
    $type: "yandex.cloud.datatransfer.v1.DeleteEndpointMetadata",
    endpointId: "",
};
exports.DeleteEndpointMetadata = {
    $type: "yandex.cloud.datatransfer.v1.DeleteEndpointMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.endpointId !== "") {
            writer.uint32(10).string(message.endpointId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteEndpointMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpointId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteEndpointMetadata);
        message.endpointId =
            object.endpointId !== undefined && object.endpointId !== null
                ? String(object.endpointId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.endpointId !== undefined && (obj.endpointId = message.endpointId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteEndpointMetadata);
        message.endpointId = (_a = object.endpointId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteEndpointMetadata.$type, exports.DeleteEndpointMetadata);
exports.EndpointServiceService = {
    get: {
        path: "/yandex.cloud.datatransfer.v1.EndpointService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetEndpointRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetEndpointRequest.decode(value),
        responseSerialize: (value) => Buffer.from(endpoint_1.Endpoint.encode(value).finish()),
        responseDeserialize: (value) => endpoint_1.Endpoint.decode(value),
    },
    list: {
        path: "/yandex.cloud.datatransfer.v1.EndpointService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListEndpointsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListEndpointsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListEndpointsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListEndpointsResponse.decode(value),
    },
    create: {
        path: "/yandex.cloud.datatransfer.v1.EndpointService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateEndpointRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateEndpointRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    update: {
        path: "/yandex.cloud.datatransfer.v1.EndpointService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateEndpointRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateEndpointRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    delete: {
        path: "/yandex.cloud.datatransfer.v1.EndpointService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteEndpointRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteEndpointRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.EndpointServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.EndpointServiceService, "yandex.cloud.datatransfer.v1.EndpointService");
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
