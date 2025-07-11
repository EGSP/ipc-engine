"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateContentServiceClient = exports.CertificateContentServiceService = exports.GetCertificateContentRequest = exports.GetCertificateContentResponse = exports.privateKeyFormatToJSON = exports.privateKeyFormatFromJSON = exports.PrivateKeyFormat = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.certificatemanager.v1";
var PrivateKeyFormat;
(function (PrivateKeyFormat) {
    PrivateKeyFormat[PrivateKeyFormat["PRIVATE_KEY_FORMAT_UNSPECIFIED"] = 0] = "PRIVATE_KEY_FORMAT_UNSPECIFIED";
    PrivateKeyFormat[PrivateKeyFormat["PKCS1"] = 1] = "PKCS1";
    PrivateKeyFormat[PrivateKeyFormat["PKCS8"] = 2] = "PKCS8";
    PrivateKeyFormat[PrivateKeyFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PrivateKeyFormat = exports.PrivateKeyFormat || (exports.PrivateKeyFormat = {}));
function privateKeyFormatFromJSON(object) {
    switch (object) {
        case 0:
        case "PRIVATE_KEY_FORMAT_UNSPECIFIED":
            return PrivateKeyFormat.PRIVATE_KEY_FORMAT_UNSPECIFIED;
        case 1:
        case "PKCS1":
            return PrivateKeyFormat.PKCS1;
        case 2:
        case "PKCS8":
            return PrivateKeyFormat.PKCS8;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PrivateKeyFormat.UNRECOGNIZED;
    }
}
exports.privateKeyFormatFromJSON = privateKeyFormatFromJSON;
function privateKeyFormatToJSON(object) {
    switch (object) {
        case PrivateKeyFormat.PRIVATE_KEY_FORMAT_UNSPECIFIED:
            return "PRIVATE_KEY_FORMAT_UNSPECIFIED";
        case PrivateKeyFormat.PKCS1:
            return "PKCS1";
        case PrivateKeyFormat.PKCS8:
            return "PKCS8";
        default:
            return "UNKNOWN";
    }
}
exports.privateKeyFormatToJSON = privateKeyFormatToJSON;
const baseGetCertificateContentResponse = {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentResponse",
    certificateId: "",
    certificateChain: "",
    privateKey: "",
};
exports.GetCertificateContentResponse = {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        for (const v of message.certificateChain) {
            writer.uint32(26).string(v);
        }
        if (message.privateKey !== "") {
            writer.uint32(34).string(message.privateKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetCertificateContentResponse);
        message.certificateChain = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 3:
                    message.certificateChain.push(reader.string());
                    break;
                case 4:
                    message.privateKey = reader.string();
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
        const message = Object.assign({}, baseGetCertificateContentResponse);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        message.certificateChain = ((_a = object.certificateChain) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.privateKey =
            object.privateKey !== undefined && object.privateKey !== null
                ? String(object.privateKey)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        if (message.certificateChain) {
            obj.certificateChain = message.certificateChain.map((e) => e);
        }
        else {
            obj.certificateChain = [];
        }
        message.privateKey !== undefined && (obj.privateKey = message.privateKey);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGetCertificateContentResponse);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        message.certificateChain = ((_b = object.certificateChain) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.privateKey = (_c = object.privateKey) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetCertificateContentResponse.$type, exports.GetCertificateContentResponse);
const baseGetCertificateContentRequest = {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentRequest",
    certificateId: "",
    versionId: "",
    privateKeyFormat: 0,
};
exports.GetCertificateContentRequest = {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.privateKeyFormat !== 0) {
            writer.uint32(24).int32(message.privateKeyFormat);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetCertificateContentRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.privateKeyFormat = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetCertificateContentRequest);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.privateKeyFormat =
            object.privateKeyFormat !== undefined && object.privateKeyFormat !== null
                ? privateKeyFormatFromJSON(object.privateKeyFormat)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.privateKeyFormat !== undefined &&
            (obj.privateKeyFormat = privateKeyFormatToJSON(message.privateKeyFormat));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGetCertificateContentRequest);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.privateKeyFormat = (_c = object.privateKeyFormat) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetCertificateContentRequest.$type, exports.GetCertificateContentRequest);
/** A set of methods for managing certificate content. */
exports.CertificateContentServiceService = {
    /** Returns chain and private key of the specified certificate. */
    get: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateContentService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetCertificateContentRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetCertificateContentRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetCertificateContentResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetCertificateContentResponse.decode(value),
    },
};
exports.CertificateContentServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.CertificateContentServiceService, "yandex.cloud.certificatemanager.v1.CertificateContentService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
