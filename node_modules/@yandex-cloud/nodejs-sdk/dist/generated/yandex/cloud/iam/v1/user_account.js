"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamlUserAccount_AttributesEntry = exports.SamlUserAccount_Attribute = exports.SamlUserAccount = exports.YandexPassportUserAccount = exports.UserAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.iam.v1";
const baseUserAccount = {
    $type: "yandex.cloud.iam.v1.UserAccount",
    id: "",
};
exports.UserAccount = {
    $type: "yandex.cloud.iam.v1.UserAccount",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.yandexPassportUserAccount !== undefined) {
            exports.YandexPassportUserAccount.encode(message.yandexPassportUserAccount, writer.uint32(18).fork()).ldelim();
        }
        if (message.samlUserAccount !== undefined) {
            exports.SamlUserAccount.encode(message.samlUserAccount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserAccount);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.yandexPassportUserAccount = exports.YandexPassportUserAccount.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.samlUserAccount = exports.SamlUserAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUserAccount);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.yandexPassportUserAccount =
            object.yandexPassportUserAccount !== undefined &&
                object.yandexPassportUserAccount !== null
                ? exports.YandexPassportUserAccount.fromJSON(object.yandexPassportUserAccount)
                : undefined;
        message.samlUserAccount =
            object.samlUserAccount !== undefined && object.samlUserAccount !== null
                ? exports.SamlUserAccount.fromJSON(object.samlUserAccount)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.yandexPassportUserAccount !== undefined &&
            (obj.yandexPassportUserAccount = message.yandexPassportUserAccount
                ? exports.YandexPassportUserAccount.toJSON(message.yandexPassportUserAccount)
                : undefined);
        message.samlUserAccount !== undefined &&
            (obj.samlUserAccount = message.samlUserAccount
                ? exports.SamlUserAccount.toJSON(message.samlUserAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUserAccount);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.yandexPassportUserAccount =
            object.yandexPassportUserAccount !== undefined &&
                object.yandexPassportUserAccount !== null
                ? exports.YandexPassportUserAccount.fromPartial(object.yandexPassportUserAccount)
                : undefined;
        message.samlUserAccount =
            object.samlUserAccount !== undefined && object.samlUserAccount !== null
                ? exports.SamlUserAccount.fromPartial(object.samlUserAccount)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserAccount.$type, exports.UserAccount);
const baseYandexPassportUserAccount = {
    $type: "yandex.cloud.iam.v1.YandexPassportUserAccount",
    login: "",
    defaultEmail: "",
};
exports.YandexPassportUserAccount = {
    $type: "yandex.cloud.iam.v1.YandexPassportUserAccount",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.login !== "") {
            writer.uint32(10).string(message.login);
        }
        if (message.defaultEmail !== "") {
            writer.uint32(18).string(message.defaultEmail);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseYandexPassportUserAccount);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    message.defaultEmail = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseYandexPassportUserAccount);
        message.login =
            object.login !== undefined && object.login !== null
                ? String(object.login)
                : "";
        message.defaultEmail =
            object.defaultEmail !== undefined && object.defaultEmail !== null
                ? String(object.defaultEmail)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.login !== undefined && (obj.login = message.login);
        message.defaultEmail !== undefined &&
            (obj.defaultEmail = message.defaultEmail);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseYandexPassportUserAccount);
        message.login = (_a = object.login) !== null && _a !== void 0 ? _a : "";
        message.defaultEmail = (_b = object.defaultEmail) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.YandexPassportUserAccount.$type, exports.YandexPassportUserAccount);
const baseSamlUserAccount = {
    $type: "yandex.cloud.iam.v1.SamlUserAccount",
    federationId: "",
    nameId: "",
};
exports.SamlUserAccount = {
    $type: "yandex.cloud.iam.v1.SamlUserAccount",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
        }
        if (message.nameId !== "") {
            writer.uint32(18).string(message.nameId);
        }
        Object.entries(message.attributes).forEach(([key, value]) => {
            exports.SamlUserAccount_AttributesEntry.encode({
                $type: "yandex.cloud.iam.v1.SamlUserAccount.AttributesEntry",
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSamlUserAccount);
        message.attributes = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.nameId = reader.string();
                    break;
                case 3:
                    const entry3 = exports.SamlUserAccount_AttributesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.attributes[entry3.key] = entry3.value;
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
        const message = Object.assign({}, baseSamlUserAccount);
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : "";
        message.nameId =
            object.nameId !== undefined && object.nameId !== null
                ? String(object.nameId)
                : "";
        message.attributes = Object.entries((_a = object.attributes) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = exports.SamlUserAccount_Attribute.fromJSON(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.nameId !== undefined && (obj.nameId = message.nameId);
        obj.attributes = {};
        if (message.attributes) {
            Object.entries(message.attributes).forEach(([k, v]) => {
                obj.attributes[k] = exports.SamlUserAccount_Attribute.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseSamlUserAccount);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        message.nameId = (_b = object.nameId) !== null && _b !== void 0 ? _b : "";
        message.attributes = Object.entries((_c = object.attributes) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.SamlUserAccount_Attribute.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SamlUserAccount.$type, exports.SamlUserAccount);
const baseSamlUserAccount_Attribute = {
    $type: "yandex.cloud.iam.v1.SamlUserAccount.Attribute",
    value: "",
};
exports.SamlUserAccount_Attribute = {
    $type: "yandex.cloud.iam.v1.SamlUserAccount.Attribute",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.value) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSamlUserAccount_Attribute);
        message.value = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value.push(reader.string());
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
        const message = Object.assign({}, baseSamlUserAccount_Attribute);
        message.value = ((_a = object.value) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.value) {
            obj.value = message.value.map((e) => e);
        }
        else {
            obj.value = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSamlUserAccount_Attribute);
        message.value = ((_a = object.value) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SamlUserAccount_Attribute.$type, exports.SamlUserAccount_Attribute);
const baseSamlUserAccount_AttributesEntry = {
    $type: "yandex.cloud.iam.v1.SamlUserAccount.AttributesEntry",
    key: "",
};
exports.SamlUserAccount_AttributesEntry = {
    $type: "yandex.cloud.iam.v1.SamlUserAccount.AttributesEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SamlUserAccount_Attribute.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSamlUserAccount_AttributesEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.SamlUserAccount_Attribute.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSamlUserAccount_AttributesEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.SamlUserAccount_Attribute.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.SamlUserAccount_Attribute.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSamlUserAccount_AttributesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.SamlUserAccount_Attribute.fromPartial(object.value)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SamlUserAccount_AttributesEntry.$type, exports.SamlUserAccount_AttributesEntry);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
