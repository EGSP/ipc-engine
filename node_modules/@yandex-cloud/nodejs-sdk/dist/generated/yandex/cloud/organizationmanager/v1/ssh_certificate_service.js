"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SshCertificateServiceClient = exports.SshCertificateServiceService = exports.GenerateSshCertificateResponse = exports.GenerateSshCertificateRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.organizationmanager.v1";
const baseGenerateSshCertificateRequest = {
    $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateRequest",
    publicKey: "",
};
exports.GenerateSshCertificateRequest = {
    $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cloudId !== undefined) {
            writer.uint32(10).string(message.cloudId);
        }
        if (message.organizationId !== undefined) {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.subjectId !== undefined) {
            writer.uint32(26).string(message.subjectId);
        }
        if (message.osLogin !== undefined) {
            writer.uint32(34).string(message.osLogin);
        }
        if (message.publicKey !== "") {
            writer.uint32(42).string(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenerateSshCertificateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.subjectId = reader.string();
                    break;
                case 4:
                    message.osLogin = reader.string();
                    break;
                case 5:
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
        const message = Object.assign({}, baseGenerateSshCertificateRequest);
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
                : undefined;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : undefined;
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : undefined;
        message.osLogin =
            object.osLogin !== undefined && object.osLogin !== null
                ? String(object.osLogin)
                : undefined;
        message.publicKey =
            object.publicKey !== undefined && object.publicKey !== null
                ? String(object.publicKey)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.osLogin !== undefined && (obj.osLogin = message.osLogin);
        message.publicKey !== undefined && (obj.publicKey = message.publicKey);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseGenerateSshCertificateRequest);
        message.cloudId = (_a = object.cloudId) !== null && _a !== void 0 ? _a : undefined;
        message.organizationId = (_b = object.organizationId) !== null && _b !== void 0 ? _b : undefined;
        message.subjectId = (_c = object.subjectId) !== null && _c !== void 0 ? _c : undefined;
        message.osLogin = (_d = object.osLogin) !== null && _d !== void 0 ? _d : undefined;
        message.publicKey = (_e = object.publicKey) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenerateSshCertificateRequest.$type, exports.GenerateSshCertificateRequest);
const baseGenerateSshCertificateResponse = {
    $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateResponse",
    signedCertificate: "",
};
exports.GenerateSshCertificateResponse = {
    $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signedCertificate !== "") {
            writer.uint32(10).string(message.signedCertificate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenerateSshCertificateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedCertificate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenerateSshCertificateResponse);
        message.signedCertificate =
            object.signedCertificate !== undefined &&
                object.signedCertificate !== null
                ? String(object.signedCertificate)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.signedCertificate !== undefined &&
            (obj.signedCertificate = message.signedCertificate);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGenerateSshCertificateResponse);
        message.signedCertificate = (_a = object.signedCertificate) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenerateSshCertificateResponse.$type, exports.GenerateSshCertificateResponse);
exports.SshCertificateServiceService = {
    /**
     * Members of an organization can generate certificates for themselves
     * Signing certificates for other users requires a special permission
     */
    generate: {
        path: "/yandex.cloud.organizationmanager.v1.SshCertificateService/Generate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GenerateSshCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GenerateSshCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GenerateSshCertificateResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GenerateSshCertificateResponse.decode(value),
    },
};
exports.SshCertificateServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SshCertificateServiceService, "yandex.cloud.organizationmanager.v1.SshCertificateService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
