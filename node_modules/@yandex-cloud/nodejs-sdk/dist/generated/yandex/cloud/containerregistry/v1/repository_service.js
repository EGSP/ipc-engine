"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryServiceClient = exports.RepositoryServiceService = exports.DeleteRepositoryMetadata = exports.DeleteRepositoryRequest = exports.UpsertRepositoryMetadata = exports.UpsertRepositoryRequest = exports.ListRepositoriesResponse = exports.ListRepositoriesRequest = exports.GetRepositoryByNameRequest = exports.GetRepositoryRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const repository_1 = require("../../../../yandex/cloud/containerregistry/v1/repository");
const access_1 = require("../../../../yandex/cloud/access/access");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.containerregistry.v1";
const baseGetRepositoryRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetRepositoryRequest",
    repositoryId: "",
};
exports.GetRepositoryRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetRepositoryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.repositoryId !== "") {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetRepositoryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetRepositoryRequest);
        message.repositoryId =
            object.repositoryId !== undefined && object.repositoryId !== null
                ? String(object.repositoryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetRepositoryRequest);
        message.repositoryId = (_a = object.repositoryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetRepositoryRequest.$type, exports.GetRepositoryRequest);
const baseGetRepositoryByNameRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetRepositoryByNameRequest",
    repositoryName: "",
};
exports.GetRepositoryByNameRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetRepositoryByNameRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.repositoryName !== "") {
            writer.uint32(10).string(message.repositoryName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetRepositoryByNameRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetRepositoryByNameRequest);
        message.repositoryName =
            object.repositoryName !== undefined && object.repositoryName !== null
                ? String(object.repositoryName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.repositoryName !== undefined &&
            (obj.repositoryName = message.repositoryName);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetRepositoryByNameRequest);
        message.repositoryName = (_a = object.repositoryName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetRepositoryByNameRequest.$type, exports.GetRepositoryByNameRequest);
const baseListRepositoriesRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListRepositoriesRequest",
    registryId: "",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListRepositoriesRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListRepositoriesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        if (message.folderId !== "") {
            writer.uint32(50).string(message.folderId);
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
        if (message.orderBy !== "") {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRepositoriesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 6:
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
                case 5:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListRepositoriesRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
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
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null
                ? String(object.orderBy)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseListRepositoriesRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.pageSize = (_c = object.pageSize) !== null && _c !== void 0 ? _c : 0;
        message.pageToken = (_d = object.pageToken) !== null && _d !== void 0 ? _d : "";
        message.filter = (_e = object.filter) !== null && _e !== void 0 ? _e : "";
        message.orderBy = (_f = object.orderBy) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRepositoriesRequest.$type, exports.ListRepositoriesRequest);
const baseListRepositoriesResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListRepositoriesResponse",
    nextPageToken: "",
};
exports.ListRepositoriesResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListRepositoriesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.repositories) {
            repository_1.Repository.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRepositoriesResponse);
        message.repositories = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositories.push(repository_1.Repository.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListRepositoriesResponse);
        message.repositories = ((_a = object.repositories) !== null && _a !== void 0 ? _a : []).map((e) => repository_1.Repository.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.repositories) {
            obj.repositories = message.repositories.map((e) => e ? repository_1.Repository.toJSON(e) : undefined);
        }
        else {
            obj.repositories = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListRepositoriesResponse);
        message.repositories =
            ((_a = object.repositories) === null || _a === void 0 ? void 0 : _a.map((e) => repository_1.Repository.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRepositoriesResponse.$type, exports.ListRepositoriesResponse);
const baseUpsertRepositoryRequest = {
    $type: "yandex.cloud.containerregistry.v1.UpsertRepositoryRequest",
    name: "",
};
exports.UpsertRepositoryRequest = {
    $type: "yandex.cloud.containerregistry.v1.UpsertRepositoryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpsertRepositoryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpsertRepositoryRequest);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpsertRepositoryRequest);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpsertRepositoryRequest.$type, exports.UpsertRepositoryRequest);
const baseUpsertRepositoryMetadata = {
    $type: "yandex.cloud.containerregistry.v1.UpsertRepositoryMetadata",
    repositoryId: "",
};
exports.UpsertRepositoryMetadata = {
    $type: "yandex.cloud.containerregistry.v1.UpsertRepositoryMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.repositoryId !== "") {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpsertRepositoryMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpsertRepositoryMetadata);
        message.repositoryId =
            object.repositoryId !== undefined && object.repositoryId !== null
                ? String(object.repositoryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpsertRepositoryMetadata);
        message.repositoryId = (_a = object.repositoryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpsertRepositoryMetadata.$type, exports.UpsertRepositoryMetadata);
const baseDeleteRepositoryRequest = {
    $type: "yandex.cloud.containerregistry.v1.DeleteRepositoryRequest",
    repositoryId: "",
};
exports.DeleteRepositoryRequest = {
    $type: "yandex.cloud.containerregistry.v1.DeleteRepositoryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.repositoryId !== "") {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteRepositoryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteRepositoryRequest);
        message.repositoryId =
            object.repositoryId !== undefined && object.repositoryId !== null
                ? String(object.repositoryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteRepositoryRequest);
        message.repositoryId = (_a = object.repositoryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRepositoryRequest.$type, exports.DeleteRepositoryRequest);
const baseDeleteRepositoryMetadata = {
    $type: "yandex.cloud.containerregistry.v1.DeleteRepositoryMetadata",
    repositoryId: "",
};
exports.DeleteRepositoryMetadata = {
    $type: "yandex.cloud.containerregistry.v1.DeleteRepositoryMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.repositoryId !== "") {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteRepositoryMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteRepositoryMetadata);
        message.repositoryId =
            object.repositoryId !== undefined && object.repositoryId !== null
                ? String(object.repositoryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteRepositoryMetadata);
        message.repositoryId = (_a = object.repositoryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRepositoryMetadata.$type, exports.DeleteRepositoryMetadata);
/** A set of methods for managing Repository resources. */
exports.RepositoryServiceService = {
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.containerregistry.v1.RepositoryService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetRepositoryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRepositoryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(repository_1.Repository.encode(value).finish()),
        responseDeserialize: (value) => repository_1.Repository.decode(value),
    },
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    getByName: {
        path: "/yandex.cloud.containerregistry.v1.RepositoryService/GetByName",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetRepositoryByNameRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRepositoryByNameRequest.decode(value),
        responseSerialize: (value) => Buffer.from(repository_1.Repository.encode(value).finish()),
        responseDeserialize: (value) => repository_1.Repository.decode(value),
    },
    /** Retrieves the list of Repository resources in the specified registry. */
    list: {
        path: "/yandex.cloud.containerregistry.v1.RepositoryService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRepositoriesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRepositoriesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRepositoriesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRepositoriesResponse.decode(value),
    },
    /** Lists access bindings for the specified repository. */
    listAccessBindings: {
        path: "/yandex.cloud.containerregistry.v1.RepositoryService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Upserts a repository in the specified registry. */
    upsert: {
        path: "/yandex.cloud.containerregistry.v1.RepositoryService/Upsert",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpsertRepositoryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpsertRepositoryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified repository. */
    delete: {
        path: "/yandex.cloud.containerregistry.v1.RepositoryService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteRepositoryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteRepositoryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Sets access bindings for the specified repository. */
    setAccessBindings: {
        path: "/yandex.cloud.containerregistry.v1.RepositoryService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified repository. */
    updateAccessBindings: {
        path: "/yandex.cloud.containerregistry.v1.RepositoryService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.RepositoryServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RepositoryServiceService, "yandex.cloud.containerregistry.v1.RepositoryService");
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
