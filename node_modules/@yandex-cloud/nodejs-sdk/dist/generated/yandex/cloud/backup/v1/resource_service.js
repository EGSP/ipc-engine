"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceServiceClient = exports.ResourceServiceService = exports.CreateDirectoryMetadata = exports.CreateDirectoryRequest = exports.ListDirectoryResponse_FilesystemItem = exports.ListDirectoryResponse = exports.ListDirectoryRequest = exports.ListTasksResponse = exports.ListTasksRequest = exports.DeleteResourceMetadata = exports.DeleteResourceRequest = exports.GetResourceResponse = exports.GetResourceRequest = exports.ListResourcesResponse = exports.ListResourcesRequest = exports.listDirectoryResponse_FilesystemItem_TypeToJSON = exports.listDirectoryResponse_FilesystemItem_TypeFromJSON = exports.ListDirectoryResponse_FilesystemItem_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const resource_1 = require("../../../../yandex/cloud/backup/v1/resource");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.backup.v1";
var ListDirectoryResponse_FilesystemItem_Type;
(function (ListDirectoryResponse_FilesystemItem_Type) {
    ListDirectoryResponse_FilesystemItem_Type[ListDirectoryResponse_FilesystemItem_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    ListDirectoryResponse_FilesystemItem_Type[ListDirectoryResponse_FilesystemItem_Type["VOLUME"] = 1] = "VOLUME";
    ListDirectoryResponse_FilesystemItem_Type[ListDirectoryResponse_FilesystemItem_Type["DIRECTORY"] = 2] = "DIRECTORY";
    ListDirectoryResponse_FilesystemItem_Type[ListDirectoryResponse_FilesystemItem_Type["FILE"] = 3] = "FILE";
    ListDirectoryResponse_FilesystemItem_Type[ListDirectoryResponse_FilesystemItem_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ListDirectoryResponse_FilesystemItem_Type = exports.ListDirectoryResponse_FilesystemItem_Type || (exports.ListDirectoryResponse_FilesystemItem_Type = {}));
function listDirectoryResponse_FilesystemItem_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return ListDirectoryResponse_FilesystemItem_Type.TYPE_UNSPECIFIED;
        case 1:
        case "VOLUME":
            return ListDirectoryResponse_FilesystemItem_Type.VOLUME;
        case 2:
        case "DIRECTORY":
            return ListDirectoryResponse_FilesystemItem_Type.DIRECTORY;
        case 3:
        case "FILE":
            return ListDirectoryResponse_FilesystemItem_Type.FILE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ListDirectoryResponse_FilesystemItem_Type.UNRECOGNIZED;
    }
}
exports.listDirectoryResponse_FilesystemItem_TypeFromJSON = listDirectoryResponse_FilesystemItem_TypeFromJSON;
function listDirectoryResponse_FilesystemItem_TypeToJSON(object) {
    switch (object) {
        case ListDirectoryResponse_FilesystemItem_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case ListDirectoryResponse_FilesystemItem_Type.VOLUME:
            return "VOLUME";
        case ListDirectoryResponse_FilesystemItem_Type.DIRECTORY:
            return "DIRECTORY";
        case ListDirectoryResponse_FilesystemItem_Type.FILE:
            return "FILE";
        default:
            return "UNKNOWN";
    }
}
exports.listDirectoryResponse_FilesystemItem_TypeToJSON = listDirectoryResponse_FilesystemItem_TypeToJSON;
const baseListResourcesRequest = {
    $type: "yandex.cloud.backup.v1.ListResourcesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListResourcesRequest = {
    $type: "yandex.cloud.backup.v1.ListResourcesRequest",
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
        const message = Object.assign({}, baseListResourcesRequest);
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
        const message = Object.assign({}, baseListResourcesRequest);
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
        const message = Object.assign({}, baseListResourcesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListResourcesRequest.$type, exports.ListResourcesRequest);
const baseListResourcesResponse = {
    $type: "yandex.cloud.backup.v1.ListResourcesResponse",
    nextPageToken: "",
};
exports.ListResourcesResponse = {
    $type: "yandex.cloud.backup.v1.ListResourcesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_1.Resource.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListResourcesResponse);
        message.resources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(resource_1.Resource.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListResourcesResponse);
        message.resources = ((_a = object.resources) !== null && _a !== void 0 ? _a : []).map((e) => resource_1.Resource.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? resource_1.Resource.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListResourcesResponse);
        message.resources =
            ((_a = object.resources) === null || _a === void 0 ? void 0 : _a.map((e) => resource_1.Resource.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListResourcesResponse.$type, exports.ListResourcesResponse);
const baseGetResourceRequest = {
    $type: "yandex.cloud.backup.v1.GetResourceRequest",
    computeInstanceId: "",
};
exports.GetResourceRequest = {
    $type: "yandex.cloud.backup.v1.GetResourceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetResourceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetResourceRequest);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetResourceRequest);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetResourceRequest.$type, exports.GetResourceRequest);
const baseGetResourceResponse = {
    $type: "yandex.cloud.backup.v1.GetResourceResponse",
};
exports.GetResourceResponse = {
    $type: "yandex.cloud.backup.v1.GetResourceResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resource !== undefined) {
            resource_1.Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetResourceResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = resource_1.Resource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetResourceResponse);
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? resource_1.Resource.fromJSON(object.resource)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined &&
            (obj.resource = message.resource
                ? resource_1.Resource.toJSON(message.resource)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetResourceResponse);
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? resource_1.Resource.fromPartial(object.resource)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetResourceResponse.$type, exports.GetResourceResponse);
const baseDeleteResourceRequest = {
    $type: "yandex.cloud.backup.v1.DeleteResourceRequest",
    computeInstanceId: "",
    resourceId: "",
};
exports.DeleteResourceRequest = {
    $type: "yandex.cloud.backup.v1.DeleteResourceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.resourceId !== "") {
            writer.uint32(18).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteResourceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteResourceRequest);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteResourceRequest);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.resourceId = (_b = object.resourceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteResourceRequest.$type, exports.DeleteResourceRequest);
const baseDeleteResourceMetadata = {
    $type: "yandex.cloud.backup.v1.DeleteResourceMetadata",
    computeInstanceId: "",
};
exports.DeleteResourceMetadata = {
    $type: "yandex.cloud.backup.v1.DeleteResourceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteResourceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteResourceMetadata);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteResourceMetadata);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteResourceMetadata.$type, exports.DeleteResourceMetadata);
const baseListTasksRequest = {
    $type: "yandex.cloud.backup.v1.ListTasksRequest",
    computeInstanceId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListTasksRequest = {
    $type: "yandex.cloud.backup.v1.ListTasksRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
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
        const message = Object.assign({}, baseListTasksRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
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
        const message = Object.assign({}, baseListTasksRequest);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
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
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListTasksRequest);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTasksRequest.$type, exports.ListTasksRequest);
const baseListTasksResponse = {
    $type: "yandex.cloud.backup.v1.ListTasksResponse",
    nextPageToken: "",
};
exports.ListTasksResponse = {
    $type: "yandex.cloud.backup.v1.ListTasksResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.tasks) {
            resource_1.Task.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListTasksResponse);
        message.tasks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tasks.push(resource_1.Task.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListTasksResponse);
        message.tasks = ((_a = object.tasks) !== null && _a !== void 0 ? _a : []).map((e) => resource_1.Task.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.tasks) {
            obj.tasks = message.tasks.map((e) => (e ? resource_1.Task.toJSON(e) : undefined));
        }
        else {
            obj.tasks = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListTasksResponse);
        message.tasks = ((_a = object.tasks) === null || _a === void 0 ? void 0 : _a.map((e) => resource_1.Task.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTasksResponse.$type, exports.ListTasksResponse);
const baseListDirectoryRequest = {
    $type: "yandex.cloud.backup.v1.ListDirectoryRequest",
    folderId: "",
    computeInstanceId: "",
    path: "",
};
exports.ListDirectoryRequest = {
    $type: "yandex.cloud.backup.v1.ListDirectoryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        if (message.path !== "") {
            writer.uint32(26).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDirectoryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseListDirectoryRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListDirectoryRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        message.path = (_c = object.path) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDirectoryRequest.$type, exports.ListDirectoryRequest);
const baseListDirectoryResponse = {
    $type: "yandex.cloud.backup.v1.ListDirectoryResponse",
};
exports.ListDirectoryResponse = {
    $type: "yandex.cloud.backup.v1.ListDirectoryResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.items) {
            exports.ListDirectoryResponse_FilesystemItem.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDirectoryResponse);
        message.items = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.items.push(exports.ListDirectoryResponse_FilesystemItem.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListDirectoryResponse);
        message.items = ((_a = object.items) !== null && _a !== void 0 ? _a : []).map((e) => exports.ListDirectoryResponse_FilesystemItem.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.items) {
            obj.items = message.items.map((e) => e ? exports.ListDirectoryResponse_FilesystemItem.toJSON(e) : undefined);
        }
        else {
            obj.items = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListDirectoryResponse);
        message.items =
            ((_a = object.items) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ListDirectoryResponse_FilesystemItem.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDirectoryResponse.$type, exports.ListDirectoryResponse);
const baseListDirectoryResponse_FilesystemItem = {
    $type: "yandex.cloud.backup.v1.ListDirectoryResponse.FilesystemItem",
    name: "",
    type: 0,
    fileType: 0,
    size: 0,
};
exports.ListDirectoryResponse_FilesystemItem = {
    $type: "yandex.cloud.backup.v1.ListDirectoryResponse.FilesystemItem",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.fileType !== 0) {
            writer.uint32(24).int32(message.fileType);
        }
        if (message.size !== 0) {
            writer.uint32(32).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDirectoryResponse_FilesystemItem);
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
                    message.fileType = reader.int32();
                    break;
                case 4:
                    message.size = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListDirectoryResponse_FilesystemItem);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? listDirectoryResponse_FilesystemItem_TypeFromJSON(object.type)
                : 0;
        message.fileType =
            object.fileType !== undefined && object.fileType !== null
                ? listDirectoryResponse_FilesystemItem_TypeFromJSON(object.fileType)
                : 0;
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined &&
            (obj.type = listDirectoryResponse_FilesystemItem_TypeToJSON(message.type));
        message.fileType !== undefined &&
            (obj.fileType = listDirectoryResponse_FilesystemItem_TypeToJSON(message.fileType));
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListDirectoryResponse_FilesystemItem);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.fileType = (_c = object.fileType) !== null && _c !== void 0 ? _c : 0;
        message.size = (_d = object.size) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDirectoryResponse_FilesystemItem.$type, exports.ListDirectoryResponse_FilesystemItem);
const baseCreateDirectoryRequest = {
    $type: "yandex.cloud.backup.v1.CreateDirectoryRequest",
    folderId: "",
    computeInstanceId: "",
    path: "",
};
exports.CreateDirectoryRequest = {
    $type: "yandex.cloud.backup.v1.CreateDirectoryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        if (message.path !== "") {
            writer.uint32(26).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDirectoryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseCreateDirectoryRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseCreateDirectoryRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        message.path = (_c = object.path) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDirectoryRequest.$type, exports.CreateDirectoryRequest);
const baseCreateDirectoryMetadata = {
    $type: "yandex.cloud.backup.v1.CreateDirectoryMetadata",
    computeInstanceId: "",
    path: "",
};
exports.CreateDirectoryMetadata = {
    $type: "yandex.cloud.backup.v1.CreateDirectoryMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDirectoryMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseCreateDirectoryMetadata);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateDirectoryMetadata);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDirectoryMetadata.$type, exports.CreateDirectoryMetadata);
/** A set of methods for managing backup resources: [Compute Cloud instances](/docs/backup/concepts/vm-connection#os). */
exports.ResourceServiceService = {
    /** List resources: Compute Cloud instances. */
    list: {
        path: "/yandex.cloud.backup.v1.ResourceService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListResourcesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListResourcesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListResourcesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListResourcesResponse.decode(value),
    },
    /** Get specific Compute Cloud instance. */
    get: {
        path: "/yandex.cloud.backup.v1.ResourceService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetResourceResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetResourceResponse.decode(value),
    },
    /**
     * Delete specific Compute Cloud instance from Cloud Backup. It does not delete
     * instance from Cloud Compute service.
     */
    delete: {
        path: "/yandex.cloud.backup.v1.ResourceService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List tasks of resources. */
    listTasks: {
        path: "/yandex.cloud.backup.v1.ResourceService/ListTasks",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTasksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTasksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTasksResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTasksResponse.decode(value),
    },
    /**
     * ListDirectory returns all subdirectories found in requested directory identified
     * by the id.
     */
    listDirectory: {
        path: "/yandex.cloud.backup.v1.ResourceService/ListDirectory",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDirectoryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDirectoryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDirectoryResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDirectoryResponse.decode(value),
    },
    /** CreateDirectory creates new directory by requested path. */
    createDirectory: {
        path: "/yandex.cloud.backup.v1.ResourceService/CreateDirectory",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDirectoryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDirectoryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ResourceServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ResourceServiceService, "yandex.cloud.backup.v1.ResourceService");
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
