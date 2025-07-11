"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAMLSettings = exports.AuthSettings = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.mdb.opensearch.v1";
const baseAuthSettings = {
    $type: "yandex.cloud.mdb.opensearch.v1.AuthSettings",
};
exports.AuthSettings = {
    $type: "yandex.cloud.mdb.opensearch.v1.AuthSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.saml !== undefined) {
            exports.SAMLSettings.encode(message.saml, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAuthSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.saml = exports.SAMLSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAuthSettings);
        message.saml =
            object.saml !== undefined && object.saml !== null
                ? exports.SAMLSettings.fromJSON(object.saml)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.saml !== undefined &&
            (obj.saml = message.saml ? exports.SAMLSettings.toJSON(message.saml) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAuthSettings);
        message.saml =
            object.saml !== undefined && object.saml !== null
                ? exports.SAMLSettings.fromPartial(object.saml)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AuthSettings.$type, exports.AuthSettings);
const baseSAMLSettings = {
    $type: "yandex.cloud.mdb.opensearch.v1.SAMLSettings",
    enabled: false,
    idpEntityId: "",
    spEntityId: "",
    dashboardsUrl: "",
    rolesKey: "",
    subjectKey: "",
};
exports.SAMLSettings = {
    $type: "yandex.cloud.mdb.opensearch.v1.SAMLSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.idpEntityId !== "") {
            writer.uint32(18).string(message.idpEntityId);
        }
        if (message.idpMetadataFile.length !== 0) {
            writer.uint32(26).bytes(message.idpMetadataFile);
        }
        if (message.spEntityId !== "") {
            writer.uint32(34).string(message.spEntityId);
        }
        if (message.dashboardsUrl !== "") {
            writer.uint32(42).string(message.dashboardsUrl);
        }
        if (message.rolesKey !== "") {
            writer.uint32(50).string(message.rolesKey);
        }
        if (message.subjectKey !== "") {
            writer.uint32(58).string(message.subjectKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSAMLSettings);
        message.idpMetadataFile = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.idpEntityId = reader.string();
                    break;
                case 3:
                    message.idpMetadataFile = reader.bytes();
                    break;
                case 4:
                    message.spEntityId = reader.string();
                    break;
                case 5:
                    message.dashboardsUrl = reader.string();
                    break;
                case 6:
                    message.rolesKey = reader.string();
                    break;
                case 7:
                    message.subjectKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSAMLSettings);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.idpEntityId =
            object.idpEntityId !== undefined && object.idpEntityId !== null
                ? String(object.idpEntityId)
                : "";
        message.idpMetadataFile =
            object.idpMetadataFile !== undefined && object.idpMetadataFile !== null
                ? Buffer.from(bytesFromBase64(object.idpMetadataFile))
                : Buffer.alloc(0);
        message.spEntityId =
            object.spEntityId !== undefined && object.spEntityId !== null
                ? String(object.spEntityId)
                : "";
        message.dashboardsUrl =
            object.dashboardsUrl !== undefined && object.dashboardsUrl !== null
                ? String(object.dashboardsUrl)
                : "";
        message.rolesKey =
            object.rolesKey !== undefined && object.rolesKey !== null
                ? String(object.rolesKey)
                : "";
        message.subjectKey =
            object.subjectKey !== undefined && object.subjectKey !== null
                ? String(object.subjectKey)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.idpEntityId !== undefined &&
            (obj.idpEntityId = message.idpEntityId);
        message.idpMetadataFile !== undefined &&
            (obj.idpMetadataFile = base64FromBytes(message.idpMetadataFile !== undefined
                ? message.idpMetadataFile
                : Buffer.alloc(0)));
        message.spEntityId !== undefined && (obj.spEntityId = message.spEntityId);
        message.dashboardsUrl !== undefined &&
            (obj.dashboardsUrl = message.dashboardsUrl);
        message.rolesKey !== undefined && (obj.rolesKey = message.rolesKey);
        message.subjectKey !== undefined && (obj.subjectKey = message.subjectKey);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseSAMLSettings);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.idpEntityId = (_b = object.idpEntityId) !== null && _b !== void 0 ? _b : "";
        message.idpMetadataFile = (_c = object.idpMetadataFile) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        message.spEntityId = (_d = object.spEntityId) !== null && _d !== void 0 ? _d : "";
        message.dashboardsUrl = (_e = object.dashboardsUrl) !== null && _e !== void 0 ? _e : "";
        message.rolesKey = (_f = object.rolesKey) !== null && _f !== void 0 ? _f : "";
        message.subjectKey = (_g = object.subjectKey) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SAMLSettings.$type, exports.SAMLSettings);
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
