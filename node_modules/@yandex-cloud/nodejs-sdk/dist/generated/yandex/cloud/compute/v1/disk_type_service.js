"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskTypeServiceClient = exports.DiskTypeServiceService = exports.ListDiskTypesResponse = exports.ListDiskTypesRequest = exports.GetDiskTypeRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const disk_type_1 = require("../../../../yandex/cloud/compute/v1/disk_type");
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseGetDiskTypeRequest = {
    $type: "yandex.cloud.compute.v1.GetDiskTypeRequest",
    diskTypeId: "",
};
exports.GetDiskTypeRequest = {
    $type: "yandex.cloud.compute.v1.GetDiskTypeRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskTypeId !== "") {
            writer.uint32(10).string(message.diskTypeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetDiskTypeRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetDiskTypeRequest);
        message.diskTypeId =
            object.diskTypeId !== undefined && object.diskTypeId !== null
                ? String(object.diskTypeId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskTypeId !== undefined && (obj.diskTypeId = message.diskTypeId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetDiskTypeRequest);
        message.diskTypeId = (_a = object.diskTypeId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetDiskTypeRequest.$type, exports.GetDiskTypeRequest);
const baseListDiskTypesRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskTypesRequest",
    pageSize: 0,
    pageToken: "",
};
exports.ListDiskTypesRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskTypesRequest",
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
        const message = Object.assign({}, baseListDiskTypesRequest);
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
        const message = Object.assign({}, baseListDiskTypesRequest);
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
        const message = Object.assign({}, baseListDiskTypesRequest);
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.pageToken = (_b = object.pageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskTypesRequest.$type, exports.ListDiskTypesRequest);
const baseListDiskTypesResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskTypesResponse",
    nextPageToken: "",
};
exports.ListDiskTypesResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskTypesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.diskTypes) {
            disk_type_1.DiskType.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDiskTypesResponse);
        message.diskTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskTypes.push(disk_type_1.DiskType.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListDiskTypesResponse);
        message.diskTypes = ((_a = object.diskTypes) !== null && _a !== void 0 ? _a : []).map((e) => disk_type_1.DiskType.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.diskTypes) {
            obj.diskTypes = message.diskTypes.map((e) => e ? disk_type_1.DiskType.toJSON(e) : undefined);
        }
        else {
            obj.diskTypes = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListDiskTypesResponse);
        message.diskTypes =
            ((_a = object.diskTypes) === null || _a === void 0 ? void 0 : _a.map((e) => disk_type_1.DiskType.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskTypesResponse.$type, exports.ListDiskTypesResponse);
/** A set of methods to retrieve information about disk types. */
exports.DiskTypeServiceService = {
    /**
     * Returns the information about specified disk type.
     *
     * To get the list of available disk types, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.compute.v1.DiskTypeService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDiskTypeRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDiskTypeRequest.decode(value),
        responseSerialize: (value) => Buffer.from(disk_type_1.DiskType.encode(value).finish()),
        responseDeserialize: (value) => disk_type_1.DiskType.decode(value),
    },
    /** Retrieves the list of disk types for the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.DiskTypeService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDiskTypesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDiskTypesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDiskTypesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDiskTypesResponse.decode(value),
    },
};
exports.DiskTypeServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DiskTypeServiceService, "yandex.cloud.compute.v1.DiskTypeService");
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
