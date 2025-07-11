"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymmetricCryptoServiceClient = exports.SymmetricCryptoServiceService = exports.SymmetricReEncryptResponse = exports.SymmetricReEncryptRequest = exports.GenerateDataKeyResponse = exports.GenerateDataKeyRequest = exports.SymmetricDecryptResponse = exports.SymmetricDecryptRequest = exports.SymmetricEncryptResponse = exports.SymmetricEncryptRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const symmetric_key_1 = require("../../../../yandex/cloud/kms/v1/symmetric_key");
exports.protobufPackage = "yandex.cloud.kms.v1";
const baseSymmetricEncryptRequest = {
    $type: "yandex.cloud.kms.v1.SymmetricEncryptRequest",
    keyId: "",
    versionId: "",
};
exports.SymmetricEncryptRequest = {
    $type: "yandex.cloud.kms.v1.SymmetricEncryptRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(26).bytes(message.aadContext);
        }
        if (message.plaintext.length !== 0) {
            writer.uint32(34).bytes(message.plaintext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSymmetricEncryptRequest);
        message.aadContext = Buffer.alloc(0);
        message.plaintext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.aadContext = reader.bytes();
                    break;
                case 4:
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
        const message = Object.assign({}, baseSymmetricEncryptRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.aadContext =
            object.aadContext !== undefined && object.aadContext !== null
                ? Buffer.from(bytesFromBase64(object.aadContext))
                : Buffer.alloc(0);
        message.plaintext =
            object.plaintext !== undefined && object.plaintext !== null
                ? Buffer.from(bytesFromBase64(object.plaintext))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(message.aadContext !== undefined ? message.aadContext : Buffer.alloc(0)));
        message.plaintext !== undefined &&
            (obj.plaintext = base64FromBytes(message.plaintext !== undefined ? message.plaintext : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseSymmetricEncryptRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.aadContext = (_c = object.aadContext) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        message.plaintext = (_d = object.plaintext) !== null && _d !== void 0 ? _d : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricEncryptRequest.$type, exports.SymmetricEncryptRequest);
const baseSymmetricEncryptResponse = {
    $type: "yandex.cloud.kms.v1.SymmetricEncryptResponse",
    keyId: "",
    versionId: "",
};
exports.SymmetricEncryptResponse = {
    $type: "yandex.cloud.kms.v1.SymmetricEncryptResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(26).bytes(message.ciphertext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSymmetricEncryptResponse);
        message.ciphertext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseSymmetricEncryptResponse);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
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
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(message.ciphertext !== undefined ? message.ciphertext : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseSymmetricEncryptResponse);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.ciphertext = (_c = object.ciphertext) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricEncryptResponse.$type, exports.SymmetricEncryptResponse);
const baseSymmetricDecryptRequest = {
    $type: "yandex.cloud.kms.v1.SymmetricDecryptRequest",
    keyId: "",
};
exports.SymmetricDecryptRequest = {
    $type: "yandex.cloud.kms.v1.SymmetricDecryptRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(18).bytes(message.aadContext);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(26).bytes(message.ciphertext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSymmetricDecryptRequest);
        message.aadContext = Buffer.alloc(0);
        message.ciphertext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.aadContext = reader.bytes();
                    break;
                case 3:
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
        const message = Object.assign({}, baseSymmetricDecryptRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.aadContext =
            object.aadContext !== undefined && object.aadContext !== null
                ? Buffer.from(bytesFromBase64(object.aadContext))
                : Buffer.alloc(0);
        message.ciphertext =
            object.ciphertext !== undefined && object.ciphertext !== null
                ? Buffer.from(bytesFromBase64(object.ciphertext))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(message.aadContext !== undefined ? message.aadContext : Buffer.alloc(0)));
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(message.ciphertext !== undefined ? message.ciphertext : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseSymmetricDecryptRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.aadContext = (_b = object.aadContext) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        message.ciphertext = (_c = object.ciphertext) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricDecryptRequest.$type, exports.SymmetricDecryptRequest);
const baseSymmetricDecryptResponse = {
    $type: "yandex.cloud.kms.v1.SymmetricDecryptResponse",
    keyId: "",
    versionId: "",
};
exports.SymmetricDecryptResponse = {
    $type: "yandex.cloud.kms.v1.SymmetricDecryptResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.plaintext.length !== 0) {
            writer.uint32(26).bytes(message.plaintext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSymmetricDecryptResponse);
        message.plaintext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseSymmetricDecryptResponse);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
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
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.plaintext !== undefined &&
            (obj.plaintext = base64FromBytes(message.plaintext !== undefined ? message.plaintext : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseSymmetricDecryptResponse);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.plaintext = (_c = object.plaintext) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricDecryptResponse.$type, exports.SymmetricDecryptResponse);
const baseGenerateDataKeyRequest = {
    $type: "yandex.cloud.kms.v1.GenerateDataKeyRequest",
    keyId: "",
    versionId: "",
    dataKeySpec: 0,
    skipPlaintext: false,
};
exports.GenerateDataKeyRequest = {
    $type: "yandex.cloud.kms.v1.GenerateDataKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(26).bytes(message.aadContext);
        }
        if (message.dataKeySpec !== 0) {
            writer.uint32(32).int32(message.dataKeySpec);
        }
        if (message.skipPlaintext === true) {
            writer.uint32(40).bool(message.skipPlaintext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenerateDataKeyRequest);
        message.aadContext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.aadContext = reader.bytes();
                    break;
                case 4:
                    message.dataKeySpec = reader.int32();
                    break;
                case 5:
                    message.skipPlaintext = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenerateDataKeyRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.aadContext =
            object.aadContext !== undefined && object.aadContext !== null
                ? Buffer.from(bytesFromBase64(object.aadContext))
                : Buffer.alloc(0);
        message.dataKeySpec =
            object.dataKeySpec !== undefined && object.dataKeySpec !== null
                ? (0, symmetric_key_1.symmetricAlgorithmFromJSON)(object.dataKeySpec)
                : 0;
        message.skipPlaintext =
            object.skipPlaintext !== undefined && object.skipPlaintext !== null
                ? Boolean(object.skipPlaintext)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(message.aadContext !== undefined ? message.aadContext : Buffer.alloc(0)));
        message.dataKeySpec !== undefined &&
            (obj.dataKeySpec = (0, symmetric_key_1.symmetricAlgorithmToJSON)(message.dataKeySpec));
        message.skipPlaintext !== undefined &&
            (obj.skipPlaintext = message.skipPlaintext);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseGenerateDataKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.aadContext = (_c = object.aadContext) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        message.dataKeySpec = (_d = object.dataKeySpec) !== null && _d !== void 0 ? _d : 0;
        message.skipPlaintext = (_e = object.skipPlaintext) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenerateDataKeyRequest.$type, exports.GenerateDataKeyRequest);
const baseGenerateDataKeyResponse = {
    $type: "yandex.cloud.kms.v1.GenerateDataKeyResponse",
    keyId: "",
    versionId: "",
};
exports.GenerateDataKeyResponse = {
    $type: "yandex.cloud.kms.v1.GenerateDataKeyResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.dataKeyPlaintext.length !== 0) {
            writer.uint32(26).bytes(message.dataKeyPlaintext);
        }
        if (message.dataKeyCiphertext.length !== 0) {
            writer.uint32(34).bytes(message.dataKeyCiphertext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenerateDataKeyResponse);
        message.dataKeyPlaintext = Buffer.alloc(0);
        message.dataKeyCiphertext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.dataKeyPlaintext = reader.bytes();
                    break;
                case 4:
                    message.dataKeyCiphertext = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenerateDataKeyResponse);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.dataKeyPlaintext =
            object.dataKeyPlaintext !== undefined && object.dataKeyPlaintext !== null
                ? Buffer.from(bytesFromBase64(object.dataKeyPlaintext))
                : Buffer.alloc(0);
        message.dataKeyCiphertext =
            object.dataKeyCiphertext !== undefined &&
                object.dataKeyCiphertext !== null
                ? Buffer.from(bytesFromBase64(object.dataKeyCiphertext))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.dataKeyPlaintext !== undefined &&
            (obj.dataKeyPlaintext = base64FromBytes(message.dataKeyPlaintext !== undefined
                ? message.dataKeyPlaintext
                : Buffer.alloc(0)));
        message.dataKeyCiphertext !== undefined &&
            (obj.dataKeyCiphertext = base64FromBytes(message.dataKeyCiphertext !== undefined
                ? message.dataKeyCiphertext
                : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseGenerateDataKeyResponse);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.dataKeyPlaintext = (_c = object.dataKeyPlaintext) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        message.dataKeyCiphertext = (_d = object.dataKeyCiphertext) !== null && _d !== void 0 ? _d : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenerateDataKeyResponse.$type, exports.GenerateDataKeyResponse);
const baseSymmetricReEncryptRequest = {
    $type: "yandex.cloud.kms.v1.SymmetricReEncryptRequest",
    keyId: "",
    versionId: "",
    sourceKeyId: "",
};
exports.SymmetricReEncryptRequest = {
    $type: "yandex.cloud.kms.v1.SymmetricReEncryptRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(26).bytes(message.aadContext);
        }
        if (message.sourceKeyId !== "") {
            writer.uint32(34).string(message.sourceKeyId);
        }
        if (message.sourceAadContext.length !== 0) {
            writer.uint32(42).bytes(message.sourceAadContext);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(50).bytes(message.ciphertext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSymmetricReEncryptRequest);
        message.aadContext = Buffer.alloc(0);
        message.sourceAadContext = Buffer.alloc(0);
        message.ciphertext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.aadContext = reader.bytes();
                    break;
                case 4:
                    message.sourceKeyId = reader.string();
                    break;
                case 5:
                    message.sourceAadContext = reader.bytes();
                    break;
                case 6:
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
        const message = Object.assign({}, baseSymmetricReEncryptRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.aadContext =
            object.aadContext !== undefined && object.aadContext !== null
                ? Buffer.from(bytesFromBase64(object.aadContext))
                : Buffer.alloc(0);
        message.sourceKeyId =
            object.sourceKeyId !== undefined && object.sourceKeyId !== null
                ? String(object.sourceKeyId)
                : "";
        message.sourceAadContext =
            object.sourceAadContext !== undefined && object.sourceAadContext !== null
                ? Buffer.from(bytesFromBase64(object.sourceAadContext))
                : Buffer.alloc(0);
        message.ciphertext =
            object.ciphertext !== undefined && object.ciphertext !== null
                ? Buffer.from(bytesFromBase64(object.ciphertext))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(message.aadContext !== undefined ? message.aadContext : Buffer.alloc(0)));
        message.sourceKeyId !== undefined &&
            (obj.sourceKeyId = message.sourceKeyId);
        message.sourceAadContext !== undefined &&
            (obj.sourceAadContext = base64FromBytes(message.sourceAadContext !== undefined
                ? message.sourceAadContext
                : Buffer.alloc(0)));
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(message.ciphertext !== undefined ? message.ciphertext : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseSymmetricReEncryptRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.aadContext = (_c = object.aadContext) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        message.sourceKeyId = (_d = object.sourceKeyId) !== null && _d !== void 0 ? _d : "";
        message.sourceAadContext = (_e = object.sourceAadContext) !== null && _e !== void 0 ? _e : Buffer.alloc(0);
        message.ciphertext = (_f = object.ciphertext) !== null && _f !== void 0 ? _f : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricReEncryptRequest.$type, exports.SymmetricReEncryptRequest);
const baseSymmetricReEncryptResponse = {
    $type: "yandex.cloud.kms.v1.SymmetricReEncryptResponse",
    keyId: "",
    versionId: "",
    sourceKeyId: "",
    sourceVersionId: "",
};
exports.SymmetricReEncryptResponse = {
    $type: "yandex.cloud.kms.v1.SymmetricReEncryptResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.sourceKeyId !== "") {
            writer.uint32(26).string(message.sourceKeyId);
        }
        if (message.sourceVersionId !== "") {
            writer.uint32(34).string(message.sourceVersionId);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(42).bytes(message.ciphertext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSymmetricReEncryptResponse);
        message.ciphertext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.sourceKeyId = reader.string();
                    break;
                case 4:
                    message.sourceVersionId = reader.string();
                    break;
                case 5:
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
        const message = Object.assign({}, baseSymmetricReEncryptResponse);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.sourceKeyId =
            object.sourceKeyId !== undefined && object.sourceKeyId !== null
                ? String(object.sourceKeyId)
                : "";
        message.sourceVersionId =
            object.sourceVersionId !== undefined && object.sourceVersionId !== null
                ? String(object.sourceVersionId)
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
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.sourceKeyId !== undefined &&
            (obj.sourceKeyId = message.sourceKeyId);
        message.sourceVersionId !== undefined &&
            (obj.sourceVersionId = message.sourceVersionId);
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(message.ciphertext !== undefined ? message.ciphertext : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseSymmetricReEncryptResponse);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.sourceKeyId = (_c = object.sourceKeyId) !== null && _c !== void 0 ? _c : "";
        message.sourceVersionId = (_d = object.sourceVersionId) !== null && _d !== void 0 ? _d : "";
        message.ciphertext = (_e = object.ciphertext) !== null && _e !== void 0 ? _e : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricReEncryptResponse.$type, exports.SymmetricReEncryptResponse);
/** Set of methods that perform symmetric encryption and decryption. */
exports.SymmetricCryptoServiceService = {
    /** Encrypts given plaintext with the specified key. */
    encrypt: {
        path: "/yandex.cloud.kms.v1.SymmetricCryptoService/Encrypt",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SymmetricEncryptRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SymmetricEncryptRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.SymmetricEncryptResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.SymmetricEncryptResponse.decode(value),
    },
    /** Decrypts the given ciphertext with the specified key. */
    decrypt: {
        path: "/yandex.cloud.kms.v1.SymmetricCryptoService/Decrypt",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SymmetricDecryptRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SymmetricDecryptRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.SymmetricDecryptResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.SymmetricDecryptResponse.decode(value),
    },
    /** Re-encrypts a ciphertext with the specified KMS key. */
    reEncrypt: {
        path: "/yandex.cloud.kms.v1.SymmetricCryptoService/ReEncrypt",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SymmetricReEncryptRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SymmetricReEncryptRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.SymmetricReEncryptResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.SymmetricReEncryptResponse.decode(value),
    },
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    generateDataKey: {
        path: "/yandex.cloud.kms.v1.SymmetricCryptoService/GenerateDataKey",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GenerateDataKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GenerateDataKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GenerateDataKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GenerateDataKeyResponse.decode(value),
    },
};
exports.SymmetricCryptoServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SymmetricCryptoServiceService, "yandex.cloud.kms.v1.SymmetricCryptoService");
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
