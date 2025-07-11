"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageTypeServiceClient = exports.StorageTypeServiceService = exports.ListStorageTypesResponse = exports.ListStorageTypesRequest = exports.GetStorageTypeRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const storage_type_1 = require("../../../../yandex/cloud/ydb/v1/storage_type");
exports.protobufPackage = "yandex.cloud.ydb.v1";
const baseGetStorageTypeRequest = {
    $type: "yandex.cloud.ydb.v1.GetStorageTypeRequest",
    storageTypeId: "",
};
exports.GetStorageTypeRequest = {
    $type: "yandex.cloud.ydb.v1.GetStorageTypeRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storageTypeId !== "") {
            writer.uint32(10).string(message.storageTypeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetStorageTypeRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetStorageTypeRequest);
        message.storageTypeId =
            object.storageTypeId !== undefined && object.storageTypeId !== null
                ? String(object.storageTypeId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storageTypeId !== undefined &&
            (obj.storageTypeId = message.storageTypeId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetStorageTypeRequest);
        message.storageTypeId = (_a = object.storageTypeId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetStorageTypeRequest.$type, exports.GetStorageTypeRequest);
const baseListStorageTypesRequest = {
    $type: "yandex.cloud.ydb.v1.ListStorageTypesRequest",
    pageSize: 0,
    pageToken: "",
};
exports.ListStorageTypesRequest = {
    $type: "yandex.cloud.ydb.v1.ListStorageTypesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListStorageTypesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 2:
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
        const message = Object.assign({}, baseListStorageTypesRequest);
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
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListStorageTypesRequest);
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.pageToken = (_b = object.pageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListStorageTypesRequest.$type, exports.ListStorageTypesRequest);
const baseListStorageTypesResponse = {
    $type: "yandex.cloud.ydb.v1.ListStorageTypesResponse",
    nextPageToken: "",
};
exports.ListStorageTypesResponse = {
    $type: "yandex.cloud.ydb.v1.ListStorageTypesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.storageTypes) {
            storage_type_1.StorageType.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListStorageTypesResponse);
        message.storageTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageTypes.push(storage_type_1.StorageType.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListStorageTypesResponse);
        message.storageTypes = ((_a = object.storageTypes) !== null && _a !== void 0 ? _a : []).map((e) => storage_type_1.StorageType.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.storageTypes) {
            obj.storageTypes = message.storageTypes.map((e) => e ? storage_type_1.StorageType.toJSON(e) : undefined);
        }
        else {
            obj.storageTypes = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListStorageTypesResponse);
        message.storageTypes =
            ((_a = object.storageTypes) === null || _a === void 0 ? void 0 : _a.map((e) => storage_type_1.StorageType.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListStorageTypesResponse.$type, exports.ListStorageTypesResponse);
exports.StorageTypeServiceService = {
    /** Returns the specified storage types. */
    get: {
        path: "/yandex.cloud.ydb.v1.StorageTypeService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetStorageTypeRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetStorageTypeRequest.decode(value),
        responseSerialize: (value) => Buffer.from(storage_type_1.StorageType.encode(value).finish()),
        responseDeserialize: (value) => storage_type_1.StorageType.decode(value),
    },
    /** Returns the list of available storage types. */
    list: {
        path: "/yandex.cloud.ydb.v1.StorageTypeService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListStorageTypesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListStorageTypesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListStorageTypesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListStorageTypesResponse.decode(value),
    },
};
exports.StorageTypeServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.StorageTypeServiceService, "yandex.cloud.ydb.v1.StorageTypeService");
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
