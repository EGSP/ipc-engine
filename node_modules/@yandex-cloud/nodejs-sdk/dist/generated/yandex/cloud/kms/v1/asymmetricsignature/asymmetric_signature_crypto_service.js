"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsymmetricSignatureCryptoServiceClient = exports.AsymmetricSignatureCryptoServiceService = exports.AsymmetricGetPublicKeyResponse = exports.AsymmetricGetPublicKeyRequest = exports.AsymmetricSignHashResponse = exports.AsymmetricSignHashRequest = exports.AsymmetricSignResponse = exports.AsymmetricSignRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.kms.v1.asymmetricsignature";
const baseAsymmetricSignRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignRequest",
    keyId: "",
};
exports.AsymmetricSignRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.message.length !== 0) {
            writer.uint32(18).bytes(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsymmetricSignRequest);
        message.message = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.message = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAsymmetricSignRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.message =
            object.message !== undefined && object.message !== null
                ? Buffer.from(bytesFromBase64(object.message))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.message !== undefined &&
            (obj.message = base64FromBytes(message.message !== undefined ? message.message : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAsymmetricSignRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricSignRequest.$type, exports.AsymmetricSignRequest);
const baseAsymmetricSignResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignResponse",
    keyId: "",
};
exports.AsymmetricSignResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsymmetricSignResponse);
        message.signature = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAsymmetricSignResponse);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.signature =
            object.signature !== undefined && object.signature !== null
                ? Buffer.from(bytesFromBase64(object.signature))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAsymmetricSignResponse);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.signature = (_b = object.signature) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricSignResponse.$type, exports.AsymmetricSignResponse);
const baseAsymmetricSignHashRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashRequest",
    keyId: "",
};
exports.AsymmetricSignHashRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsymmetricSignHashRequest);
        message.hash = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAsymmetricSignHashRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.hash =
            object.hash !== undefined && object.hash !== null
                ? Buffer.from(bytesFromBase64(object.hash))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAsymmetricSignHashRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.hash = (_b = object.hash) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricSignHashRequest.$type, exports.AsymmetricSignHashRequest);
const baseAsymmetricSignHashResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashResponse",
    keyId: "",
};
exports.AsymmetricSignHashResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsymmetricSignHashResponse);
        message.signature = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAsymmetricSignHashResponse);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.signature =
            object.signature !== undefined && object.signature !== null
                ? Buffer.from(bytesFromBase64(object.signature))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAsymmetricSignHashResponse);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.signature = (_b = object.signature) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricSignHashResponse.$type, exports.AsymmetricSignHashResponse);
const baseAsymmetricGetPublicKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyRequest",
    keyId: "",
};
exports.AsymmetricGetPublicKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsymmetricGetPublicKeyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAsymmetricGetPublicKeyRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAsymmetricGetPublicKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricGetPublicKeyRequest.$type, exports.AsymmetricGetPublicKeyRequest);
const baseAsymmetricGetPublicKeyResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyResponse",
    keyId: "",
    publicKey: "",
};
exports.AsymmetricGetPublicKeyResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.publicKey !== "") {
            writer.uint32(18).string(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsymmetricGetPublicKeyResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.publicKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAsymmetricGetPublicKeyResponse);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.publicKey =
            object.publicKey !== undefined && object.publicKey !== null
                ? String(object.publicKey)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.publicKey !== undefined && (obj.publicKey = message.publicKey);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAsymmetricGetPublicKeyResponse);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.publicKey = (_b = object.publicKey) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricGetPublicKeyResponse.$type, exports.AsymmetricGetPublicKeyResponse);
/** Set of methods that perform asymmetric signature. */
exports.AsymmetricSignatureCryptoServiceService = {
    /** Signs data specified KMS key. */
    sign: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/Sign",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AsymmetricSignRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AsymmetricSignRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.AsymmetricSignResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.AsymmetricSignResponse.decode(value),
    },
    /** Signs hash value specified KMS key. */
    signHash: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/SignHash",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AsymmetricSignHashRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AsymmetricSignHashRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.AsymmetricSignHashResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.AsymmetricSignHashResponse.decode(value),
    },
    /** Gets value of public key. */
    getPublicKey: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/GetPublicKey",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AsymmetricGetPublicKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AsymmetricGetPublicKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.AsymmetricGetPublicKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.AsymmetricGetPublicKeyResponse.decode(value),
    },
};
exports.AsymmetricSignatureCryptoServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AsymmetricSignatureCryptoServiceService, "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService");
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
