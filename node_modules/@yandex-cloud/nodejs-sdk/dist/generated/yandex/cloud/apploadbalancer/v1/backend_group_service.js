"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendGroupServiceClient = exports.BackendGroupServiceService = exports.ListBackendGroupOperationsResponse = exports.ListBackendGroupOperationsRequest = exports.RemoveBackendMetadata = exports.RemoveBackendRequest = exports.UpdateBackendMetadata = exports.UpdateBackendRequest = exports.AddBackendMetadata = exports.AddBackendRequest = exports.CreateBackendGroupMetadata = exports.CreateBackendGroupRequest_LabelsEntry = exports.CreateBackendGroupRequest = exports.UpdateBackendGroupMetadata = exports.UpdateBackendGroupRequest_LabelsEntry = exports.UpdateBackendGroupRequest = exports.DeleteBackendGroupMetadata = exports.DeleteBackendGroupRequest = exports.ListBackendGroupsResponse = exports.ListBackendGroupsRequest = exports.GetBackendGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const backend_group_1 = require("../../../../yandex/cloud/apploadbalancer/v1/backend_group");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.apploadbalancer.v1";
const baseGetBackendGroupRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest",
    backendGroupId: "",
};
exports.GetBackendGroupRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBackendGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetBackendGroupRequest);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetBackendGroupRequest);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetBackendGroupRequest.$type, exports.GetBackendGroupRequest);
const baseListBackendGroupsRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListBackendGroupsRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest",
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
        const message = Object.assign({}, baseListBackendGroupsRequest);
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
        const message = Object.assign({}, baseListBackendGroupsRequest);
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
        const message = Object.assign({}, baseListBackendGroupsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBackendGroupsRequest.$type, exports.ListBackendGroupsRequest);
const baseListBackendGroupsResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse",
    nextPageToken: "",
};
exports.ListBackendGroupsResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backendGroups) {
            backend_group_1.BackendGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBackendGroupsResponse);
        message.backendGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroups.push(backend_group_1.BackendGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListBackendGroupsResponse);
        message.backendGroups = ((_a = object.backendGroups) !== null && _a !== void 0 ? _a : []).map((e) => backend_group_1.BackendGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backendGroups) {
            obj.backendGroups = message.backendGroups.map((e) => e ? backend_group_1.BackendGroup.toJSON(e) : undefined);
        }
        else {
            obj.backendGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListBackendGroupsResponse);
        message.backendGroups =
            ((_a = object.backendGroups) === null || _a === void 0 ? void 0 : _a.map((e) => backend_group_1.BackendGroup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBackendGroupsResponse.$type, exports.ListBackendGroupsResponse);
const baseDeleteBackendGroupRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest",
    backendGroupId: "",
};
exports.DeleteBackendGroupRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBackendGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteBackendGroupRequest);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteBackendGroupRequest);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBackendGroupRequest.$type, exports.DeleteBackendGroupRequest);
const baseDeleteBackendGroupMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata",
    backendGroupId: "",
};
exports.DeleteBackendGroupMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBackendGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteBackendGroupMetadata);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteBackendGroupMetadata);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBackendGroupMetadata.$type, exports.DeleteBackendGroupMetadata);
const baseUpdateBackendGroupRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest",
    backendGroupId: "",
    name: "",
    description: "",
};
exports.UpdateBackendGroupRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
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
            exports.UpdateBackendGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.http !== undefined) {
            backend_group_1.HttpBackendGroup.encode(message.http, writer.uint32(50).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            backend_group_1.GrpcBackendGroup.encode(message.grpc, writer.uint32(58).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            backend_group_1.StreamBackendGroup.encode(message.stream, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateBackendGroupRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
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
                    const entry5 = exports.UpdateBackendGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.http = backend_group_1.HttpBackendGroup.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.grpc = backend_group_1.GrpcBackendGroup.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.stream = backend_group_1.StreamBackendGroup.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateBackendGroupRequest);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
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
        message.http =
            object.http !== undefined && object.http !== null
                ? backend_group_1.HttpBackendGroup.fromJSON(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? backend_group_1.GrpcBackendGroup.fromJSON(object.grpc)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? backend_group_1.StreamBackendGroup.fromJSON(object.stream)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
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
        message.http !== undefined &&
            (obj.http = message.http
                ? backend_group_1.HttpBackendGroup.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? backend_group_1.GrpcBackendGroup.toJSON(message.grpc)
                : undefined);
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? backend_group_1.StreamBackendGroup.toJSON(message.stream)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateBackendGroupRequest);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
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
        message.http =
            object.http !== undefined && object.http !== null
                ? backend_group_1.HttpBackendGroup.fromPartial(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? backend_group_1.GrpcBackendGroup.fromPartial(object.grpc)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? backend_group_1.StreamBackendGroup.fromPartial(object.stream)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBackendGroupRequest.$type, exports.UpdateBackendGroupRequest);
const baseUpdateBackendGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateBackendGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateBackendGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateBackendGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateBackendGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBackendGroupRequest_LabelsEntry.$type, exports.UpdateBackendGroupRequest_LabelsEntry);
const baseUpdateBackendGroupMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata",
    backendGroupId: "",
};
exports.UpdateBackendGroupMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateBackendGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateBackendGroupMetadata);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateBackendGroupMetadata);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBackendGroupMetadata.$type, exports.UpdateBackendGroupMetadata);
const baseCreateBackendGroupRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest",
    folderId: "",
    name: "",
    description: "",
};
exports.CreateBackendGroupRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest",
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
            exports.CreateBackendGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.http !== undefined) {
            backend_group_1.HttpBackendGroup.encode(message.http, writer.uint32(42).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            backend_group_1.GrpcBackendGroup.encode(message.grpc, writer.uint32(50).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            backend_group_1.StreamBackendGroup.encode(message.stream, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateBackendGroupRequest);
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
                    const entry4 = exports.CreateBackendGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.http = backend_group_1.HttpBackendGroup.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.grpc = backend_group_1.GrpcBackendGroup.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.stream = backend_group_1.StreamBackendGroup.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateBackendGroupRequest);
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
        message.http =
            object.http !== undefined && object.http !== null
                ? backend_group_1.HttpBackendGroup.fromJSON(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? backend_group_1.GrpcBackendGroup.fromJSON(object.grpc)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? backend_group_1.StreamBackendGroup.fromJSON(object.stream)
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
        message.http !== undefined &&
            (obj.http = message.http
                ? backend_group_1.HttpBackendGroup.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? backend_group_1.GrpcBackendGroup.toJSON(message.grpc)
                : undefined);
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? backend_group_1.StreamBackendGroup.toJSON(message.stream)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateBackendGroupRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.http =
            object.http !== undefined && object.http !== null
                ? backend_group_1.HttpBackendGroup.fromPartial(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? backend_group_1.GrpcBackendGroup.fromPartial(object.grpc)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? backend_group_1.StreamBackendGroup.fromPartial(object.stream)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBackendGroupRequest.$type, exports.CreateBackendGroupRequest);
const baseCreateBackendGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateBackendGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateBackendGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateBackendGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateBackendGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBackendGroupRequest_LabelsEntry.$type, exports.CreateBackendGroupRequest_LabelsEntry);
const baseCreateBackendGroupMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata",
    backendGroupId: "",
};
exports.CreateBackendGroupMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateBackendGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateBackendGroupMetadata);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateBackendGroupMetadata);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBackendGroupMetadata.$type, exports.CreateBackendGroupMetadata);
const baseAddBackendRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.AddBackendRequest",
    backendGroupId: "",
};
exports.AddBackendRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.AddBackendRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.http !== undefined) {
            backend_group_1.HttpBackend.encode(message.http, writer.uint32(18).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            backend_group_1.GrpcBackend.encode(message.grpc, writer.uint32(26).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            backend_group_1.StreamBackend.encode(message.stream, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddBackendRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.http = backend_group_1.HttpBackend.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.grpc = backend_group_1.GrpcBackend.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stream = backend_group_1.StreamBackend.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddBackendRequest);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        message.http =
            object.http !== undefined && object.http !== null
                ? backend_group_1.HttpBackend.fromJSON(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? backend_group_1.GrpcBackend.fromJSON(object.grpc)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? backend_group_1.StreamBackend.fromJSON(object.stream)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.http !== undefined &&
            (obj.http = message.http ? backend_group_1.HttpBackend.toJSON(message.http) : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc ? backend_group_1.GrpcBackend.toJSON(message.grpc) : undefined);
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? backend_group_1.StreamBackend.toJSON(message.stream)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAddBackendRequest);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        message.http =
            object.http !== undefined && object.http !== null
                ? backend_group_1.HttpBackend.fromPartial(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? backend_group_1.GrpcBackend.fromPartial(object.grpc)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? backend_group_1.StreamBackend.fromPartial(object.stream)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddBackendRequest.$type, exports.AddBackendRequest);
const baseAddBackendMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.AddBackendMetadata",
    backendGroupId: "",
    backendName: "",
};
exports.AddBackendMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.AddBackendMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== "") {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddBackendMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddBackendMetadata);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        message.backendName =
            object.backendName !== undefined && object.backendName !== null
                ? String(object.backendName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddBackendMetadata);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        message.backendName = (_b = object.backendName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddBackendMetadata.$type, exports.AddBackendMetadata);
const baseUpdateBackendRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendRequest",
    backendGroupId: "",
};
exports.UpdateBackendRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.http !== undefined) {
            backend_group_1.HttpBackend.encode(message.http, writer.uint32(26).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            backend_group_1.GrpcBackend.encode(message.grpc, writer.uint32(34).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            backend_group_1.StreamBackend.encode(message.stream, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateBackendRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.http = backend_group_1.HttpBackend.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.grpc = backend_group_1.GrpcBackend.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stream = backend_group_1.StreamBackend.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateBackendRequest);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.http =
            object.http !== undefined && object.http !== null
                ? backend_group_1.HttpBackend.fromJSON(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? backend_group_1.GrpcBackend.fromJSON(object.grpc)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? backend_group_1.StreamBackend.fromJSON(object.stream)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.http !== undefined &&
            (obj.http = message.http ? backend_group_1.HttpBackend.toJSON(message.http) : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc ? backend_group_1.GrpcBackend.toJSON(message.grpc) : undefined);
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? backend_group_1.StreamBackend.toJSON(message.stream)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateBackendRequest);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.http =
            object.http !== undefined && object.http !== null
                ? backend_group_1.HttpBackend.fromPartial(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? backend_group_1.GrpcBackend.fromPartial(object.grpc)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? backend_group_1.StreamBackend.fromPartial(object.stream)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBackendRequest.$type, exports.UpdateBackendRequest);
const baseUpdateBackendMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata",
    backendGroupId: "",
    backendName: "",
};
exports.UpdateBackendMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== "") {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateBackendMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateBackendMetadata);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        message.backendName =
            object.backendName !== undefined && object.backendName !== null
                ? String(object.backendName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateBackendMetadata);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        message.backendName = (_b = object.backendName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBackendMetadata.$type, exports.UpdateBackendMetadata);
const baseRemoveBackendRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendRequest",
    backendGroupId: "",
    backendName: "",
};
exports.RemoveBackendRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== "") {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveBackendRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveBackendRequest);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        message.backendName =
            object.backendName !== undefined && object.backendName !== null
                ? String(object.backendName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRemoveBackendRequest);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        message.backendName = (_b = object.backendName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveBackendRequest.$type, exports.RemoveBackendRequest);
const baseRemoveBackendMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata",
    backendGroupId: "",
    backendName: "",
};
exports.RemoveBackendMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== "") {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveBackendMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveBackendMetadata);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        message.backendName =
            object.backendName !== undefined && object.backendName !== null
                ? String(object.backendName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRemoveBackendMetadata);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        message.backendName = (_b = object.backendName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveBackendMetadata.$type, exports.RemoveBackendMetadata);
const baseListBackendGroupOperationsRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest",
    backendGroupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListBackendGroupOperationsRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
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
        const message = Object.assign({}, baseListBackendGroupOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
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
        const message = Object.assign({}, baseListBackendGroupOperationsRequest);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
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
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListBackendGroupOperationsRequest);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBackendGroupOperationsRequest.$type, exports.ListBackendGroupOperationsRequest);
const baseListBackendGroupOperationsResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse",
    nextPageToken: "",
};
exports.ListBackendGroupOperationsResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse",
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
        const message = Object.assign({}, baseListBackendGroupOperationsResponse);
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
        const message = Object.assign({}, baseListBackendGroupOperationsResponse);
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
        const message = Object.assign({}, baseListBackendGroupOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBackendGroupOperationsResponse.$type, exports.ListBackendGroupOperationsResponse);
/** A set of methods for managing backend groups. */
exports.BackendGroupServiceService = {
    /**
     * Returns the specified backend group.
     *
     * To get the list of all available backend groups, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBackendGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(backend_group_1.BackendGroup.encode(value).finish()),
        responseDeserialize: (value) => backend_group_1.BackendGroup.decode(value),
    },
    /** Lists backend groups in the specified folder. */
    list: {
        path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBackendGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBackendGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBackendGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBackendGroupsResponse.decode(value),
    },
    /** Creates a backend group in the specified folder. */
    create: {
        path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateBackendGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified backend group. */
    update: {
        path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateBackendGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified backend group. */
    delete: {
        path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteBackendGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Adds backends to the specified backend group. */
    addBackend: {
        path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/AddBackend",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddBackendRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddBackendRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Removes backends from the specified backend group. */
    removeBackend: {
        path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/RemoveBackend",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveBackendRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveBackendRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified backend. */
    updateBackend: {
        path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/UpdateBackend",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateBackendRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateBackendRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified backend group. */
    listOperations: {
        path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBackendGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBackendGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBackendGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBackendGroupOperationsResponse.decode(value),
    },
};
exports.BackendGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BackendGroupServiceService, "yandex.cloud.apploadbalancer.v1.BackendGroupService");
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
