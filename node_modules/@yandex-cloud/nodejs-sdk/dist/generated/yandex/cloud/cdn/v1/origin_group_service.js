"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginGroupServiceClient = exports.OriginGroupServiceService = exports.DeleteOriginGroupMetadata = exports.DeleteOriginGroupRequest = exports.UpdateOriginGroupMetadata = exports.UpdateOriginGroupRequest = exports.CreateOriginGroupMetadata = exports.CreateOriginGroupRequest = exports.ListOriginGroupsResponse = exports.ListOriginGroupsRequest = exports.GetOriginGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const origin_group_1 = require("../../../../yandex/cloud/cdn/v1/origin_group");
const origin_1 = require("../../../../yandex/cloud/cdn/v1/origin");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.cdn.v1";
const baseGetOriginGroupRequest = {
    $type: "yandex.cloud.cdn.v1.GetOriginGroupRequest",
    folderId: "",
    originGroupId: 0,
};
exports.GetOriginGroupRequest = {
    $type: "yandex.cloud.cdn.v1.GetOriginGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetOriginGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetOriginGroupRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetOriginGroupRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.originGroupId = (_b = object.originGroupId) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetOriginGroupRequest.$type, exports.GetOriginGroupRequest);
const baseListOriginGroupsRequest = {
    $type: "yandex.cloud.cdn.v1.ListOriginGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListOriginGroupsRequest = {
    $type: "yandex.cloud.cdn.v1.ListOriginGroupsRequest",
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
        const message = Object.assign({}, baseListOriginGroupsRequest);
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
        const message = Object.assign({}, baseListOriginGroupsRequest);
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
        const message = Object.assign({}, baseListOriginGroupsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOriginGroupsRequest.$type, exports.ListOriginGroupsRequest);
const baseListOriginGroupsResponse = {
    $type: "yandex.cloud.cdn.v1.ListOriginGroupsResponse",
    nextPageToken: "",
};
exports.ListOriginGroupsResponse = {
    $type: "yandex.cloud.cdn.v1.ListOriginGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.originGroups) {
            origin_group_1.OriginGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListOriginGroupsResponse);
        message.originGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroups.push(origin_group_1.OriginGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListOriginGroupsResponse);
        message.originGroups = ((_a = object.originGroups) !== null && _a !== void 0 ? _a : []).map((e) => origin_group_1.OriginGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.originGroups) {
            obj.originGroups = message.originGroups.map((e) => e ? origin_group_1.OriginGroup.toJSON(e) : undefined);
        }
        else {
            obj.originGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListOriginGroupsResponse);
        message.originGroups =
            ((_a = object.originGroups) === null || _a === void 0 ? void 0 : _a.map((e) => origin_group_1.OriginGroup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOriginGroupsResponse.$type, exports.ListOriginGroupsResponse);
const baseCreateOriginGroupRequest = {
    $type: "yandex.cloud.cdn.v1.CreateOriginGroupRequest",
    folderId: "",
    name: "",
};
exports.CreateOriginGroupRequest = {
    $type: "yandex.cloud.cdn.v1.CreateOriginGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.useNext !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.useNext }, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.origins) {
            origin_1.OriginParams.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateOriginGroupRequest);
        message.origins = [];
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
                    message.useNext = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.origins.push(origin_1.OriginParams.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseCreateOriginGroupRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.useNext =
            object.useNext !== undefined && object.useNext !== null
                ? Boolean(object.useNext)
                : undefined;
        message.origins = ((_a = object.origins) !== null && _a !== void 0 ? _a : []).map((e) => origin_1.OriginParams.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.useNext !== undefined && (obj.useNext = message.useNext);
        if (message.origins) {
            obj.origins = message.origins.map((e) => e ? origin_1.OriginParams.toJSON(e) : undefined);
        }
        else {
            obj.origins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateOriginGroupRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.useNext = (_c = object.useNext) !== null && _c !== void 0 ? _c : undefined;
        message.origins =
            ((_d = object.origins) === null || _d === void 0 ? void 0 : _d.map((e) => origin_1.OriginParams.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateOriginGroupRequest.$type, exports.CreateOriginGroupRequest);
const baseCreateOriginGroupMetadata = {
    $type: "yandex.cloud.cdn.v1.CreateOriginGroupMetadata",
    originGroupId: 0,
};
exports.CreateOriginGroupMetadata = {
    $type: "yandex.cloud.cdn.v1.CreateOriginGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originGroupId !== 0) {
            writer.uint32(8).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateOriginGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateOriginGroupMetadata);
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateOriginGroupMetadata);
        message.originGroupId = (_a = object.originGroupId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateOriginGroupMetadata.$type, exports.CreateOriginGroupMetadata);
const baseUpdateOriginGroupRequest = {
    $type: "yandex.cloud.cdn.v1.UpdateOriginGroupRequest",
    folderId: "",
    originGroupId: 0,
};
exports.UpdateOriginGroupRequest = {
    $type: "yandex.cloud.cdn.v1.UpdateOriginGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        if (message.groupName !== undefined) {
            wrappers_1.StringValue.encode({ $type: "google.protobuf.StringValue", value: message.groupName }, writer.uint32(26).fork()).ldelim();
        }
        if (message.useNext !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.useNext }, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.origins) {
            origin_1.OriginParams.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateOriginGroupRequest);
        message.origins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                case 3:
                    message.groupName = wrappers_1.StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.useNext = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.origins.push(origin_1.OriginParams.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateOriginGroupRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        message.groupName =
            object.groupName !== undefined && object.groupName !== null
                ? String(object.groupName)
                : undefined;
        message.useNext =
            object.useNext !== undefined && object.useNext !== null
                ? Boolean(object.useNext)
                : undefined;
        message.origins = ((_a = object.origins) !== null && _a !== void 0 ? _a : []).map((e) => origin_1.OriginParams.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        message.groupName !== undefined && (obj.groupName = message.groupName);
        message.useNext !== undefined && (obj.useNext = message.useNext);
        if (message.origins) {
            obj.origins = message.origins.map((e) => e ? origin_1.OriginParams.toJSON(e) : undefined);
        }
        else {
            obj.origins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateOriginGroupRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.originGroupId = (_b = object.originGroupId) !== null && _b !== void 0 ? _b : 0;
        message.groupName = (_c = object.groupName) !== null && _c !== void 0 ? _c : undefined;
        message.useNext = (_d = object.useNext) !== null && _d !== void 0 ? _d : undefined;
        message.origins =
            ((_e = object.origins) === null || _e === void 0 ? void 0 : _e.map((e) => origin_1.OriginParams.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOriginGroupRequest.$type, exports.UpdateOriginGroupRequest);
const baseUpdateOriginGroupMetadata = {
    $type: "yandex.cloud.cdn.v1.UpdateOriginGroupMetadata",
    originGroupId: 0,
};
exports.UpdateOriginGroupMetadata = {
    $type: "yandex.cloud.cdn.v1.UpdateOriginGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originGroupId !== 0) {
            writer.uint32(8).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateOriginGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateOriginGroupMetadata);
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateOriginGroupMetadata);
        message.originGroupId = (_a = object.originGroupId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOriginGroupMetadata.$type, exports.UpdateOriginGroupMetadata);
const baseDeleteOriginGroupRequest = {
    $type: "yandex.cloud.cdn.v1.DeleteOriginGroupRequest",
    folderId: "",
    originGroupId: 0,
};
exports.DeleteOriginGroupRequest = {
    $type: "yandex.cloud.cdn.v1.DeleteOriginGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteOriginGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteOriginGroupRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteOriginGroupRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.originGroupId = (_b = object.originGroupId) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteOriginGroupRequest.$type, exports.DeleteOriginGroupRequest);
const baseDeleteOriginGroupMetadata = {
    $type: "yandex.cloud.cdn.v1.DeleteOriginGroupMetadata",
    originGroupId: 0,
};
exports.DeleteOriginGroupMetadata = {
    $type: "yandex.cloud.cdn.v1.DeleteOriginGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originGroupId !== 0) {
            writer.uint32(8).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteOriginGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteOriginGroupMetadata);
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteOriginGroupMetadata);
        message.originGroupId = (_a = object.originGroupId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteOriginGroupMetadata.$type, exports.DeleteOriginGroupMetadata);
/** Origin Groups management service. */
exports.OriginGroupServiceService = {
    /** Gets origin group with specified origin group id. */
    get: {
        path: "/yandex.cloud.cdn.v1.OriginGroupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(origin_group_1.OriginGroup.encode(value).finish()),
        responseDeserialize: (value) => origin_group_1.OriginGroup.decode(value),
    },
    /** Lists origins of origin group. */
    list: {
        path: "/yandex.cloud.cdn.v1.OriginGroupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListOriginGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListOriginGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListOriginGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListOriginGroupsResponse.decode(value),
    },
    /** Creates origin group. */
    create: {
        path: "/yandex.cloud.cdn.v1.OriginGroupService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified origin group.
     *
     * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
     * use the origin group via a [CacheService.Purge] request.
     */
    update: {
        path: "/yandex.cloud.cdn.v1.OriginGroupService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes origin group with specified origin group id. */
    delete: {
        path: "/yandex.cloud.cdn.v1.OriginGroupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.OriginGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.OriginGroupServiceService, "yandex.cloud.cdn.v1.OriginGroupService");
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
