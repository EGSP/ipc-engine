"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectDataServiceClient = exports.ProjectDataServiceService = exports.DownloadFileResponse = exports.DownloadFileRequest = exports.UploadFileResponse = exports.UploadFileRequest = exports.FileMetadata = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.datasphere.v1";
const baseFileMetadata = {
    $type: "yandex.cloud.datasphere.v1.FileMetadata",
    projectId: "",
    path: "",
    sizeBytes: 0,
};
exports.FileMetadata = {
    $type: "yandex.cloud.datasphere.v1.FileMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.sizeBytes !== 0) {
            writer.uint32(24).int64(message.sizeBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFileMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.sizeBytes = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFileMetadata);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        message.sizeBytes =
            object.sizeBytes !== undefined && object.sizeBytes !== null
                ? Number(object.sizeBytes)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.path !== undefined && (obj.path = message.path);
        message.sizeBytes !== undefined &&
            (obj.sizeBytes = Math.round(message.sizeBytes));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseFileMetadata);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        message.sizeBytes = (_c = object.sizeBytes) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.FileMetadata.$type, exports.FileMetadata);
const baseUploadFileRequest = {
    $type: "yandex.cloud.datasphere.v1.UploadFileRequest",
};
exports.UploadFileRequest = {
    $type: "yandex.cloud.datasphere.v1.UploadFileRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metadata !== undefined) {
            exports.FileMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.chunk !== undefined) {
            writer.uint32(18).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUploadFileRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = exports.FileMetadata.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUploadFileRequest);
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? exports.FileMetadata.fromJSON(object.metadata)
                : undefined;
        message.chunk =
            object.chunk !== undefined && object.chunk !== null
                ? Buffer.from(bytesFromBase64(object.chunk))
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? exports.FileMetadata.toJSON(message.metadata)
                : undefined);
        message.chunk !== undefined &&
            (obj.chunk =
                message.chunk !== undefined
                    ? base64FromBytes(message.chunk)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUploadFileRequest);
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? exports.FileMetadata.fromPartial(object.metadata)
                : undefined;
        message.chunk = (_a = object.chunk) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UploadFileRequest.$type, exports.UploadFileRequest);
const baseUploadFileResponse = {
    $type: "yandex.cloud.datasphere.v1.UploadFileResponse",
};
exports.UploadFileResponse = {
    $type: "yandex.cloud.datasphere.v1.UploadFileResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metadata !== undefined) {
            exports.FileMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUploadFileResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = exports.FileMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUploadFileResponse);
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? exports.FileMetadata.fromJSON(object.metadata)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? exports.FileMetadata.toJSON(message.metadata)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseUploadFileResponse);
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? exports.FileMetadata.fromPartial(object.metadata)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UploadFileResponse.$type, exports.UploadFileResponse);
const baseDownloadFileRequest = {
    $type: "yandex.cloud.datasphere.v1.DownloadFileRequest",
    projectId: "",
    filePath: "",
};
exports.DownloadFileRequest = {
    $type: "yandex.cloud.datasphere.v1.DownloadFileRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.filePath !== "") {
            writer.uint32(18).string(message.filePath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDownloadFileRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.filePath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDownloadFileRequest);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        message.filePath =
            object.filePath !== undefined && object.filePath !== null
                ? String(object.filePath)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.filePath !== undefined && (obj.filePath = message.filePath);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDownloadFileRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.filePath = (_b = object.filePath) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DownloadFileRequest.$type, exports.DownloadFileRequest);
const baseDownloadFileResponse = {
    $type: "yandex.cloud.datasphere.v1.DownloadFileResponse",
};
exports.DownloadFileResponse = {
    $type: "yandex.cloud.datasphere.v1.DownloadFileResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metadata !== undefined) {
            exports.FileMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.chunk !== undefined) {
            writer.uint32(18).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDownloadFileResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = exports.FileMetadata.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDownloadFileResponse);
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? exports.FileMetadata.fromJSON(object.metadata)
                : undefined;
        message.chunk =
            object.chunk !== undefined && object.chunk !== null
                ? Buffer.from(bytesFromBase64(object.chunk))
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? exports.FileMetadata.toJSON(message.metadata)
                : undefined);
        message.chunk !== undefined &&
            (obj.chunk =
                message.chunk !== undefined
                    ? base64FromBytes(message.chunk)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDownloadFileResponse);
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? exports.FileMetadata.fromPartial(object.metadata)
                : undefined;
        message.chunk = (_a = object.chunk) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DownloadFileResponse.$type, exports.DownloadFileResponse);
/** A set of methods for managing data of the Project resource. */
exports.ProjectDataServiceService = {
    /** Uploads a file to the specified project. */
    uploadFile: {
        path: "/yandex.cloud.datasphere.v1.ProjectDataService/UploadFile",
        requestStream: true,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UploadFileRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UploadFileRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.UploadFileResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.UploadFileResponse.decode(value),
    },
    /** Downloads the specified file from the specified project. */
    downloadFile: {
        path: "/yandex.cloud.datasphere.v1.ProjectDataService/DownloadFile",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.DownloadFileRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DownloadFileRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.DownloadFileResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.DownloadFileResponse.decode(value),
    },
};
exports.ProjectDataServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ProjectDataServiceService, "yandex.cloud.datasphere.v1.ProjectDataService");
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
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
