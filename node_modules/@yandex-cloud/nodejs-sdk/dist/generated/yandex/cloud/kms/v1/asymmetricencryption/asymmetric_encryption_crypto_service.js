"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsymmetricEncryptionCryptoServiceClient = exports.AsymmetricEncryptionCryptoServiceService = exports.AsymmetricGetPublicKeyResponse = exports.AsymmetricGetPublicKeyRequest = exports.AsymmetricDecryptResponse = exports.AsymmetricDecryptRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.kms.v1.asymmetricencryption";
const baseAsymmetricDecryptRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptRequest",
    keyId: "",
};
exports.AsymmetricDecryptRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(18).bytes(message.ciphertext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsymmetricDecryptRequest);
        message.ciphertext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.ciphertext = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAsymmetricDecryptRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.ciphertext =
            object.ciphertext !== undefined && object.ciphertext !== null
                ? Buffer.from(bytesFromBase64(object.ciphertext))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(message.ciphertext !== undefined ? message.ciphertext : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAsymmetricDecryptRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.ciphertext = (_b = object.ciphertext) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricDecryptRequest.$type, exports.AsymmetricDecryptRequest);
const baseAsymmetricDecryptResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptResponse",
    keyId: "",
};
exports.AsymmetricDecryptResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.plaintext.length !== 0) {
            writer.uint32(18).bytes(message.plaintext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsymmetricDecryptResponse);
        message.plaintext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.plaintext = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAsymmetricDecryptResponse);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.plaintext =
            object.plaintext !== undefined && object.plaintext !== null
                ? Buffer.from(bytesFromBase64(object.plaintext))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.plaintext !== undefined &&
            (obj.plaintext = base64FromBytes(message.plaintext !== undefined ? message.plaintext : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAsymmetricDecryptResponse);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.plaintext = (_b = object.plaintext) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricDecryptResponse.$type, exports.AsymmetricDecryptResponse);
const baseAsymmetricGetPublicKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyRequest",
    keyId: "",
};
exports.AsymmetricGetPublicKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyRequest",
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
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyResponse",
    keyId: "",
    publicKey: "",
};
exports.AsymmetricGetPublicKeyResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyResponse",
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
/** Set of methods that perform asymmetric decryption. */
exports.AsymmetricEncryptionCryptoServiceService = {
    /** Decrypts the given ciphertext with the specified key. */
    decrypt: {
        path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService/Decrypt",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AsymmetricDecryptRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AsymmetricDecryptRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.AsymmetricDecryptResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.AsymmetricDecryptResponse.decode(value),
    },
    /** Gets value of public key. */
    getPublicKey: {
        path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService/GetPublicKey",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AsymmetricGetPublicKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AsymmetricGetPublicKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.AsymmetricGetPublicKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.AsymmetricGetPublicKeyResponse.decode(value),
    },
};
exports.AsymmetricEncryptionCryptoServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AsymmetricEncryptionCryptoServiceService, "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService");
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
