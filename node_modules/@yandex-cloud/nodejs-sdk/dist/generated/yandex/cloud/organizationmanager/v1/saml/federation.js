"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FederationSecuritySettings = exports.Federation_LabelsEntry = exports.Federation = exports.bindingTypeToJSON = exports.bindingTypeFromJSON = exports.BindingType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.organizationmanager.v1.saml";
var BindingType;
(function (BindingType) {
    BindingType[BindingType["BINDING_TYPE_UNSPECIFIED"] = 0] = "BINDING_TYPE_UNSPECIFIED";
    /** POST - HTTP POST binding. */
    BindingType[BindingType["POST"] = 1] = "POST";
    /** REDIRECT - HTTP redirect binding. */
    BindingType[BindingType["REDIRECT"] = 2] = "REDIRECT";
    /** ARTIFACT - HTTP artifact binding. */
    BindingType[BindingType["ARTIFACT"] = 3] = "ARTIFACT";
    BindingType[BindingType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BindingType = exports.BindingType || (exports.BindingType = {}));
function bindingTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "BINDING_TYPE_UNSPECIFIED":
            return BindingType.BINDING_TYPE_UNSPECIFIED;
        case 1:
        case "POST":
            return BindingType.POST;
        case 2:
        case "REDIRECT":
            return BindingType.REDIRECT;
        case 3:
        case "ARTIFACT":
            return BindingType.ARTIFACT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BindingType.UNRECOGNIZED;
    }
}
exports.bindingTypeFromJSON = bindingTypeFromJSON;
function bindingTypeToJSON(object) {
    switch (object) {
        case BindingType.BINDING_TYPE_UNSPECIFIED:
            return "BINDING_TYPE_UNSPECIFIED";
        case BindingType.POST:
            return "POST";
        case BindingType.REDIRECT:
            return "REDIRECT";
        case BindingType.ARTIFACT:
            return "ARTIFACT";
        default:
            return "UNKNOWN";
    }
}
exports.bindingTypeToJSON = bindingTypeToJSON;
const baseFederation = {
    $type: "yandex.cloud.organizationmanager.v1.saml.Federation",
    id: "",
    organizationId: "",
    name: "",
    description: "",
    autoCreateAccountOnLogin: false,
    issuer: "",
    ssoBinding: 0,
    ssoUrl: "",
    caseInsensitiveNameIds: false,
};
exports.Federation = {
    $type: "yandex.cloud.organizationmanager.v1.saml.Federation",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== "") {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.cookieMaxAge !== undefined) {
            duration_1.Duration.encode(message.cookieMaxAge, writer.uint32(50).fork()).ldelim();
        }
        if (message.autoCreateAccountOnLogin === true) {
            writer.uint32(56).bool(message.autoCreateAccountOnLogin);
        }
        if (message.issuer !== "") {
            writer.uint32(66).string(message.issuer);
        }
        if (message.ssoBinding !== 0) {
            writer.uint32(72).int32(message.ssoBinding);
        }
        if (message.ssoUrl !== "") {
            writer.uint32(82).string(message.ssoUrl);
        }
        if (message.securitySettings !== undefined) {
            exports.FederationSecuritySettings.encode(message.securitySettings, writer.uint32(90).fork()).ldelim();
        }
        if (message.caseInsensitiveNameIds === true) {
            writer.uint32(96).bool(message.caseInsensitiveNameIds);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Federation_LabelsEntry.encode({
                $type: "yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(106).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFederation);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.cookieMaxAge = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.autoCreateAccountOnLogin = reader.bool();
                    break;
                case 8:
                    message.issuer = reader.string();
                    break;
                case 9:
                    message.ssoBinding = reader.int32();
                    break;
                case 10:
                    message.ssoUrl = reader.string();
                    break;
                case 11:
                    message.securitySettings = exports.FederationSecuritySettings.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.caseInsensitiveNameIds = reader.bool();
                    break;
                case 13:
                    const entry13 = exports.Federation_LabelsEntry.decode(reader, reader.uint32());
                    if (entry13.value !== undefined) {
                        message.labels[entry13.key] = entry13.value;
                    }
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
        const message = Object.assign({}, baseFederation);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.cookieMaxAge =
            object.cookieMaxAge !== undefined && object.cookieMaxAge !== null
                ? duration_1.Duration.fromJSON(object.cookieMaxAge)
                : undefined;
        message.autoCreateAccountOnLogin =
            object.autoCreateAccountOnLogin !== undefined &&
                object.autoCreateAccountOnLogin !== null
                ? Boolean(object.autoCreateAccountOnLogin)
                : false;
        message.issuer =
            object.issuer !== undefined && object.issuer !== null
                ? String(object.issuer)
                : "";
        message.ssoBinding =
            object.ssoBinding !== undefined && object.ssoBinding !== null
                ? bindingTypeFromJSON(object.ssoBinding)
                : 0;
        message.ssoUrl =
            object.ssoUrl !== undefined && object.ssoUrl !== null
                ? String(object.ssoUrl)
                : "";
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? exports.FederationSecuritySettings.fromJSON(object.securitySettings)
                : undefined;
        message.caseInsensitiveNameIds =
            object.caseInsensitiveNameIds !== undefined &&
                object.caseInsensitiveNameIds !== null
                ? Boolean(object.caseInsensitiveNameIds)
                : false;
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.cookieMaxAge !== undefined &&
            (obj.cookieMaxAge = message.cookieMaxAge
                ? duration_1.Duration.toJSON(message.cookieMaxAge)
                : undefined);
        message.autoCreateAccountOnLogin !== undefined &&
            (obj.autoCreateAccountOnLogin = message.autoCreateAccountOnLogin);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.ssoBinding !== undefined &&
            (obj.ssoBinding = bindingTypeToJSON(message.ssoBinding));
        message.ssoUrl !== undefined && (obj.ssoUrl = message.ssoUrl);
        message.securitySettings !== undefined &&
            (obj.securitySettings = message.securitySettings
                ? exports.FederationSecuritySettings.toJSON(message.securitySettings)
                : undefined);
        message.caseInsensitiveNameIds !== undefined &&
            (obj.caseInsensitiveNameIds = message.caseInsensitiveNameIds);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseFederation);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.organizationId = (_b = object.organizationId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : undefined;
        message.cookieMaxAge =
            object.cookieMaxAge !== undefined && object.cookieMaxAge !== null
                ? duration_1.Duration.fromPartial(object.cookieMaxAge)
                : undefined;
        message.autoCreateAccountOnLogin = (_f = object.autoCreateAccountOnLogin) !== null && _f !== void 0 ? _f : false;
        message.issuer = (_g = object.issuer) !== null && _g !== void 0 ? _g : "";
        message.ssoBinding = (_h = object.ssoBinding) !== null && _h !== void 0 ? _h : 0;
        message.ssoUrl = (_j = object.ssoUrl) !== null && _j !== void 0 ? _j : "";
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? exports.FederationSecuritySettings.fromPartial(object.securitySettings)
                : undefined;
        message.caseInsensitiveNameIds = (_k = object.caseInsensitiveNameIds) !== null && _k !== void 0 ? _k : false;
        message.labels = Object.entries((_l = object.labels) !== null && _l !== void 0 ? _l : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Federation.$type, exports.Federation);
const baseFederation_LabelsEntry = {
    $type: "yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry",
    key: "",
    value: "",
};
exports.Federation_LabelsEntry = {
    $type: "yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFederation_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFederation_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseFederation_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Federation_LabelsEntry.$type, exports.Federation_LabelsEntry);
const baseFederationSecuritySettings = {
    $type: "yandex.cloud.organizationmanager.v1.saml.FederationSecuritySettings",
    encryptedAssertions: false,
    forceAuthn: false,
};
exports.FederationSecuritySettings = {
    $type: "yandex.cloud.organizationmanager.v1.saml.FederationSecuritySettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.encryptedAssertions === true) {
            writer.uint32(8).bool(message.encryptedAssertions);
        }
        if (message.forceAuthn === true) {
            writer.uint32(16).bool(message.forceAuthn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFederationSecuritySettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encryptedAssertions = reader.bool();
                    break;
                case 2:
                    message.forceAuthn = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFederationSecuritySettings);
        message.encryptedAssertions =
            object.encryptedAssertions !== undefined &&
                object.encryptedAssertions !== null
                ? Boolean(object.encryptedAssertions)
                : false;
        message.forceAuthn =
            object.forceAuthn !== undefined && object.forceAuthn !== null
                ? Boolean(object.forceAuthn)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.encryptedAssertions !== undefined &&
            (obj.encryptedAssertions = message.encryptedAssertions);
        message.forceAuthn !== undefined && (obj.forceAuthn = message.forceAuthn);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseFederationSecuritySettings);
        message.encryptedAssertions = (_a = object.encryptedAssertions) !== null && _a !== void 0 ? _a : false;
        message.forceAuthn = (_b = object.forceAuthn) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.FederationSecuritySettings.$type, exports.FederationSecuritySettings);
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
