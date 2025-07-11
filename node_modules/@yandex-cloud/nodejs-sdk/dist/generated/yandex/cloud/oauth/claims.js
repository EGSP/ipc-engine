"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Federation = exports.SubjectClaims = exports.subjectTypeToJSON = exports.subjectTypeFromJSON = exports.SubjectType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.oauth";
var SubjectType;
(function (SubjectType) {
    SubjectType[SubjectType["SUBJECT_TYPE_UNSPECIFIED"] = 0] = "SUBJECT_TYPE_UNSPECIFIED";
    SubjectType[SubjectType["USER_ACCOUNT"] = 1] = "USER_ACCOUNT";
    SubjectType[SubjectType["SERVICE_ACCOUNT"] = 2] = "SERVICE_ACCOUNT";
    SubjectType[SubjectType["GROUP"] = 3] = "GROUP";
    SubjectType[SubjectType["INVITEE"] = 4] = "INVITEE";
    SubjectType[SubjectType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SubjectType = exports.SubjectType || (exports.SubjectType = {}));
function subjectTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SUBJECT_TYPE_UNSPECIFIED":
            return SubjectType.SUBJECT_TYPE_UNSPECIFIED;
        case 1:
        case "USER_ACCOUNT":
            return SubjectType.USER_ACCOUNT;
        case 2:
        case "SERVICE_ACCOUNT":
            return SubjectType.SERVICE_ACCOUNT;
        case 3:
        case "GROUP":
            return SubjectType.GROUP;
        case 4:
        case "INVITEE":
            return SubjectType.INVITEE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SubjectType.UNRECOGNIZED;
    }
}
exports.subjectTypeFromJSON = subjectTypeFromJSON;
function subjectTypeToJSON(object) {
    switch (object) {
        case SubjectType.SUBJECT_TYPE_UNSPECIFIED:
            return "SUBJECT_TYPE_UNSPECIFIED";
        case SubjectType.USER_ACCOUNT:
            return "USER_ACCOUNT";
        case SubjectType.SERVICE_ACCOUNT:
            return "SERVICE_ACCOUNT";
        case SubjectType.GROUP:
            return "GROUP";
        case SubjectType.INVITEE:
            return "INVITEE";
        default:
            return "UNKNOWN";
    }
}
exports.subjectTypeToJSON = subjectTypeToJSON;
const baseSubjectClaims = {
    $type: "yandex.cloud.oauth.SubjectClaims",
    sub: "",
    name: "",
    givenName: "",
    familyName: "",
    preferredUsername: "",
    picture: "",
    email: "",
    zoneinfo: "",
    locale: "",
    phoneNumber: "",
    subType: 0,
};
exports.SubjectClaims = {
    $type: "yandex.cloud.oauth.SubjectClaims",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sub !== "") {
            writer.uint32(10).string(message.sub);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.givenName !== "") {
            writer.uint32(26).string(message.givenName);
        }
        if (message.familyName !== "") {
            writer.uint32(34).string(message.familyName);
        }
        if (message.preferredUsername !== "") {
            writer.uint32(58).string(message.preferredUsername);
        }
        if (message.picture !== "") {
            writer.uint32(74).string(message.picture);
        }
        if (message.email !== "") {
            writer.uint32(90).string(message.email);
        }
        if (message.zoneinfo !== "") {
            writer.uint32(122).string(message.zoneinfo);
        }
        if (message.locale !== "") {
            writer.uint32(130).string(message.locale);
        }
        if (message.phoneNumber !== "") {
            writer.uint32(138).string(message.phoneNumber);
        }
        if (message.subType !== 0) {
            writer.uint32(792).int32(message.subType);
        }
        if (message.federation !== undefined) {
            exports.Federation.encode(message.federation, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSubjectClaims);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sub = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.givenName = reader.string();
                    break;
                case 4:
                    message.familyName = reader.string();
                    break;
                case 7:
                    message.preferredUsername = reader.string();
                    break;
                case 9:
                    message.picture = reader.string();
                    break;
                case 11:
                    message.email = reader.string();
                    break;
                case 15:
                    message.zoneinfo = reader.string();
                    break;
                case 16:
                    message.locale = reader.string();
                    break;
                case 17:
                    message.phoneNumber = reader.string();
                    break;
                case 99:
                    message.subType = reader.int32();
                    break;
                case 100:
                    message.federation = exports.Federation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSubjectClaims);
        message.sub =
            object.sub !== undefined && object.sub !== null ? String(object.sub) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.givenName =
            object.givenName !== undefined && object.givenName !== null
                ? String(object.givenName)
                : "";
        message.familyName =
            object.familyName !== undefined && object.familyName !== null
                ? String(object.familyName)
                : "";
        message.preferredUsername =
            object.preferredUsername !== undefined &&
                object.preferredUsername !== null
                ? String(object.preferredUsername)
                : "";
        message.picture =
            object.picture !== undefined && object.picture !== null
                ? String(object.picture)
                : "";
        message.email =
            object.email !== undefined && object.email !== null
                ? String(object.email)
                : "";
        message.zoneinfo =
            object.zoneinfo !== undefined && object.zoneinfo !== null
                ? String(object.zoneinfo)
                : "";
        message.locale =
            object.locale !== undefined && object.locale !== null
                ? String(object.locale)
                : "";
        message.phoneNumber =
            object.phoneNumber !== undefined && object.phoneNumber !== null
                ? String(object.phoneNumber)
                : "";
        message.subType =
            object.subType !== undefined && object.subType !== null
                ? subjectTypeFromJSON(object.subType)
                : 0;
        message.federation =
            object.federation !== undefined && object.federation !== null
                ? exports.Federation.fromJSON(object.federation)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sub !== undefined && (obj.sub = message.sub);
        message.name !== undefined && (obj.name = message.name);
        message.givenName !== undefined && (obj.givenName = message.givenName);
        message.familyName !== undefined && (obj.familyName = message.familyName);
        message.preferredUsername !== undefined &&
            (obj.preferredUsername = message.preferredUsername);
        message.picture !== undefined && (obj.picture = message.picture);
        message.email !== undefined && (obj.email = message.email);
        message.zoneinfo !== undefined && (obj.zoneinfo = message.zoneinfo);
        message.locale !== undefined && (obj.locale = message.locale);
        message.phoneNumber !== undefined &&
            (obj.phoneNumber = message.phoneNumber);
        message.subType !== undefined &&
            (obj.subType = subjectTypeToJSON(message.subType));
        message.federation !== undefined &&
            (obj.federation = message.federation
                ? exports.Federation.toJSON(message.federation)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseSubjectClaims);
        message.sub = (_a = object.sub) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.givenName = (_c = object.givenName) !== null && _c !== void 0 ? _c : "";
        message.familyName = (_d = object.familyName) !== null && _d !== void 0 ? _d : "";
        message.preferredUsername = (_e = object.preferredUsername) !== null && _e !== void 0 ? _e : "";
        message.picture = (_f = object.picture) !== null && _f !== void 0 ? _f : "";
        message.email = (_g = object.email) !== null && _g !== void 0 ? _g : "";
        message.zoneinfo = (_h = object.zoneinfo) !== null && _h !== void 0 ? _h : "";
        message.locale = (_j = object.locale) !== null && _j !== void 0 ? _j : "";
        message.phoneNumber = (_k = object.phoneNumber) !== null && _k !== void 0 ? _k : "";
        message.subType = (_l = object.subType) !== null && _l !== void 0 ? _l : 0;
        message.federation =
            object.federation !== undefined && object.federation !== null
                ? exports.Federation.fromPartial(object.federation)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SubjectClaims.$type, exports.SubjectClaims);
const baseFederation = {
    $type: "yandex.cloud.oauth.Federation",
    id: "",
    name: "",
};
exports.Federation = {
    $type: "yandex.cloud.oauth.Federation",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFederation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFederation);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseFederation);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Federation.$type, exports.Federation);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
