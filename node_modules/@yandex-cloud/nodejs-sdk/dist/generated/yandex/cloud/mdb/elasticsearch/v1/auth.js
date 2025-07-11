"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamlSettings = exports.AuthProvider = exports.AuthProviders = exports.authProvider_TypeToJSON = exports.authProvider_TypeFromJSON = exports.AuthProvider_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
var AuthProvider_Type;
(function (AuthProvider_Type) {
    AuthProvider_Type[AuthProvider_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    AuthProvider_Type[AuthProvider_Type["NATIVE"] = 1] = "NATIVE";
    /**
     * SAML - OPENID = 3;
     * ANONYMOUS = 4;
     */
    AuthProvider_Type[AuthProvider_Type["SAML"] = 2] = "SAML";
    AuthProvider_Type[AuthProvider_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthProvider_Type = exports.AuthProvider_Type || (exports.AuthProvider_Type = {}));
function authProvider_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return AuthProvider_Type.TYPE_UNSPECIFIED;
        case 1:
        case "NATIVE":
            return AuthProvider_Type.NATIVE;
        case 2:
        case "SAML":
            return AuthProvider_Type.SAML;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthProvider_Type.UNRECOGNIZED;
    }
}
exports.authProvider_TypeFromJSON = authProvider_TypeFromJSON;
function authProvider_TypeToJSON(object) {
    switch (object) {
        case AuthProvider_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case AuthProvider_Type.NATIVE:
            return "NATIVE";
        case AuthProvider_Type.SAML:
            return "SAML";
        default:
            return "UNKNOWN";
    }
}
exports.authProvider_TypeToJSON = authProvider_TypeToJSON;
const baseAuthProviders = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProviders",
};
exports.AuthProviders = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProviders",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.providers) {
            exports.AuthProvider.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAuthProviders);
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(exports.AuthProvider.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseAuthProviders);
        message.providers = ((_a = object.providers) !== null && _a !== void 0 ? _a : []).map((e) => exports.AuthProvider.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map((e) => e ? exports.AuthProvider.toJSON(e) : undefined);
        }
        else {
            obj.providers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAuthProviders);
        message.providers =
            ((_a = object.providers) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AuthProvider.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AuthProviders.$type, exports.AuthProviders);
const baseAuthProvider = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProvider",
    type: 0,
    name: "",
    order: 0,
    enabled: false,
    hidden: false,
    description: "",
    hint: "",
    icon: "",
};
exports.AuthProvider = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProvider",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.order !== 0) {
            writer.uint32(24).int64(message.order);
        }
        if (message.enabled === true) {
            writer.uint32(32).bool(message.enabled);
        }
        if (message.hidden === true) {
            writer.uint32(40).bool(message.hidden);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.hint !== "") {
            writer.uint32(58).string(message.hint);
        }
        if (message.icon !== "") {
            writer.uint32(66).string(message.icon);
        }
        if (message.saml !== undefined) {
            exports.SamlSettings.encode(message.saml, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAuthProvider);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.order = longToNumber(reader.int64());
                    break;
                case 4:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.hidden = reader.bool();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.hint = reader.string();
                    break;
                case 8:
                    message.icon = reader.string();
                    break;
                case 9:
                    message.saml = exports.SamlSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAuthProvider);
        message.type =
            object.type !== undefined && object.type !== null
                ? authProvider_TypeFromJSON(object.type)
                : 0;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.order =
            object.order !== undefined && object.order !== null
                ? Number(object.order)
                : 0;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.hidden =
            object.hidden !== undefined && object.hidden !== null
                ? Boolean(object.hidden)
                : false;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.hint =
            object.hint !== undefined && object.hint !== null
                ? String(object.hint)
                : "";
        message.icon =
            object.icon !== undefined && object.icon !== null
                ? String(object.icon)
                : "";
        message.saml =
            object.saml !== undefined && object.saml !== null
                ? exports.SamlSettings.fromJSON(object.saml)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = authProvider_TypeToJSON(message.type));
        message.name !== undefined && (obj.name = message.name);
        message.order !== undefined && (obj.order = Math.round(message.order));
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        message.description !== undefined &&
            (obj.description = message.description);
        message.hint !== undefined && (obj.hint = message.hint);
        message.icon !== undefined && (obj.icon = message.icon);
        message.saml !== undefined &&
            (obj.saml = message.saml ? exports.SamlSettings.toJSON(message.saml) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseAuthProvider);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.order = (_c = object.order) !== null && _c !== void 0 ? _c : 0;
        message.enabled = (_d = object.enabled) !== null && _d !== void 0 ? _d : false;
        message.hidden = (_e = object.hidden) !== null && _e !== void 0 ? _e : false;
        message.description = (_f = object.description) !== null && _f !== void 0 ? _f : "";
        message.hint = (_g = object.hint) !== null && _g !== void 0 ? _g : "";
        message.icon = (_h = object.icon) !== null && _h !== void 0 ? _h : "";
        message.saml =
            object.saml !== undefined && object.saml !== null
                ? exports.SamlSettings.fromPartial(object.saml)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AuthProvider.$type, exports.AuthProvider);
const baseSamlSettings = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.SamlSettings",
    idpEntityId: "",
    spEntityId: "",
    kibanaUrl: "",
    attributePrincipal: "",
    attributeGroups: "",
    attributeName: "",
    attributeEmail: "",
    attributeDn: "",
};
exports.SamlSettings = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.SamlSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idpEntityId !== "") {
            writer.uint32(10).string(message.idpEntityId);
        }
        if (message.idpMetadataFile.length !== 0) {
            writer.uint32(18).bytes(message.idpMetadataFile);
        }
        if (message.spEntityId !== "") {
            writer.uint32(26).string(message.spEntityId);
        }
        if (message.kibanaUrl !== "") {
            writer.uint32(34).string(message.kibanaUrl);
        }
        if (message.attributePrincipal !== "") {
            writer.uint32(42).string(message.attributePrincipal);
        }
        if (message.attributeGroups !== "") {
            writer.uint32(50).string(message.attributeGroups);
        }
        if (message.attributeName !== "") {
            writer.uint32(58).string(message.attributeName);
        }
        if (message.attributeEmail !== "") {
            writer.uint32(66).string(message.attributeEmail);
        }
        if (message.attributeDn !== "") {
            writer.uint32(74).string(message.attributeDn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSamlSettings);
        message.idpMetadataFile = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idpEntityId = reader.string();
                    break;
                case 2:
                    message.idpMetadataFile = reader.bytes();
                    break;
                case 3:
                    message.spEntityId = reader.string();
                    break;
                case 4:
                    message.kibanaUrl = reader.string();
                    break;
                case 5:
                    message.attributePrincipal = reader.string();
                    break;
                case 6:
                    message.attributeGroups = reader.string();
                    break;
                case 7:
                    message.attributeName = reader.string();
                    break;
                case 8:
                    message.attributeEmail = reader.string();
                    break;
                case 9:
                    message.attributeDn = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSamlSettings);
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
        message.kibanaUrl =
            object.kibanaUrl !== undefined && object.kibanaUrl !== null
                ? String(object.kibanaUrl)
                : "";
        message.attributePrincipal =
            object.attributePrincipal !== undefined &&
                object.attributePrincipal !== null
                ? String(object.attributePrincipal)
                : "";
        message.attributeGroups =
            object.attributeGroups !== undefined && object.attributeGroups !== null
                ? String(object.attributeGroups)
                : "";
        message.attributeName =
            object.attributeName !== undefined && object.attributeName !== null
                ? String(object.attributeName)
                : "";
        message.attributeEmail =
            object.attributeEmail !== undefined && object.attributeEmail !== null
                ? String(object.attributeEmail)
                : "";
        message.attributeDn =
            object.attributeDn !== undefined && object.attributeDn !== null
                ? String(object.attributeDn)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.idpEntityId !== undefined &&
            (obj.idpEntityId = message.idpEntityId);
        message.idpMetadataFile !== undefined &&
            (obj.idpMetadataFile = base64FromBytes(message.idpMetadataFile !== undefined
                ? message.idpMetadataFile
                : Buffer.alloc(0)));
        message.spEntityId !== undefined && (obj.spEntityId = message.spEntityId);
        message.kibanaUrl !== undefined && (obj.kibanaUrl = message.kibanaUrl);
        message.attributePrincipal !== undefined &&
            (obj.attributePrincipal = message.attributePrincipal);
        message.attributeGroups !== undefined &&
            (obj.attributeGroups = message.attributeGroups);
        message.attributeName !== undefined &&
            (obj.attributeName = message.attributeName);
        message.attributeEmail !== undefined &&
            (obj.attributeEmail = message.attributeEmail);
        message.attributeDn !== undefined &&
            (obj.attributeDn = message.attributeDn);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseSamlSettings);
        message.idpEntityId = (_a = object.idpEntityId) !== null && _a !== void 0 ? _a : "";
        message.idpMetadataFile = (_b = object.idpMetadataFile) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        message.spEntityId = (_c = object.spEntityId) !== null && _c !== void 0 ? _c : "";
        message.kibanaUrl = (_d = object.kibanaUrl) !== null && _d !== void 0 ? _d : "";
        message.attributePrincipal = (_e = object.attributePrincipal) !== null && _e !== void 0 ? _e : "";
        message.attributeGroups = (_f = object.attributeGroups) !== null && _f !== void 0 ? _f : "";
        message.attributeName = (_g = object.attributeName) !== null && _g !== void 0 ? _g : "";
        message.attributeEmail = (_h = object.attributeEmail) !== null && _h !== void 0 ? _h : "";
        message.attributeDn = (_j = object.attributeDn) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SamlSettings.$type, exports.SamlSettings);
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
