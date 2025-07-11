"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageServiceClient = exports.ImageServiceService = exports.DeleteImageMetadata = exports.DeleteImageRequest = exports.GetImageRequest = exports.ListImagesResponse = exports.ListImagesRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const image_1 = require("../../../../yandex/cloud/containerregistry/v1/image");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.containerregistry.v1";
const baseListImagesRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListImagesRequest",
    registryId: "",
    repositoryName: "",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListImagesRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListImagesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        if (message.repositoryName !== "") {
            writer.uint32(18).string(message.repositoryName);
        }
        if (message.folderId !== "") {
            writer.uint32(58).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(42).string(message.filter);
        }
        if (message.orderBy !== "") {
            writer.uint32(50).string(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListImagesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.repositoryName = reader.string();
                    break;
                case 7:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                case 6:
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
        const message = Object.assign({}, baseListImagesRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.repositoryName =
            object.repositoryName !== undefined && object.repositoryName !== null
                ? String(object.repositoryName)
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
        message.repositoryName !== undefined &&
            (obj.repositoryName = message.repositoryName);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseListImagesRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        message.repositoryName = (_b = object.repositoryName) !== null && _b !== void 0 ? _b : "";
        message.folderId = (_c = object.folderId) !== null && _c !== void 0 ? _c : "";
        message.pageSize = (_d = object.pageSize) !== null && _d !== void 0 ? _d : 0;
        message.pageToken = (_e = object.pageToken) !== null && _e !== void 0 ? _e : "";
        message.filter = (_f = object.filter) !== null && _f !== void 0 ? _f : "";
        message.orderBy = (_g = object.orderBy) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListImagesRequest.$type, exports.ListImagesRequest);
const baseListImagesResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListImagesResponse",
    nextPageToken: "",
};
exports.ListImagesResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListImagesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.images) {
            image_1.Image.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListImagesResponse);
        message.images = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.images.push(image_1.Image.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListImagesResponse);
        message.images = ((_a = object.images) !== null && _a !== void 0 ? _a : []).map((e) => image_1.Image.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.images) {
            obj.images = message.images.map((e) => (e ? image_1.Image.toJSON(e) : undefined));
        }
        else {
            obj.images = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListImagesResponse);
        message.images = ((_a = object.images) === null || _a === void 0 ? void 0 : _a.map((e) => image_1.Image.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListImagesResponse.$type, exports.ListImagesResponse);
const baseGetImageRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetImageRequest",
    imageId: "",
};
exports.GetImageRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetImageRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetImageRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetImageRequest);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetImageRequest);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetImageRequest.$type, exports.GetImageRequest);
const baseDeleteImageRequest = {
    $type: "yandex.cloud.containerregistry.v1.DeleteImageRequest",
    imageId: "",
};
exports.DeleteImageRequest = {
    $type: "yandex.cloud.containerregistry.v1.DeleteImageRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteImageRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteImageRequest);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteImageRequest);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteImageRequest.$type, exports.DeleteImageRequest);
const baseDeleteImageMetadata = {
    $type: "yandex.cloud.containerregistry.v1.DeleteImageMetadata",
    imageId: "",
};
exports.DeleteImageMetadata = {
    $type: "yandex.cloud.containerregistry.v1.DeleteImageMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteImageMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteImageMetadata);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteImageMetadata);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteImageMetadata.$type, exports.DeleteImageMetadata);
/** A set of methods for managing Image resources. */
exports.ImageServiceService = {
    /** Retrieves the list of Image resources in the specified registry or repository. */
    list: {
        path: "/yandex.cloud.containerregistry.v1.ImageService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListImagesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListImagesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListImagesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListImagesResponse.decode(value),
    },
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.containerregistry.v1.ImageService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(image_1.Image.encode(value).finish()),
        responseDeserialize: (value) => image_1.Image.decode(value),
    },
    /** Deletes the specified Docker image. */
    delete: {
        path: "/yandex.cloud.containerregistry.v1.ImageService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ImageServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ImageServiceService, "yandex.cloud.containerregistry.v1.ImageService");
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
