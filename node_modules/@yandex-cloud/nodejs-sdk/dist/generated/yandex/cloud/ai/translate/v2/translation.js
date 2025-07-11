"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = exports.TranslatedText = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.ai.translate.v2";
const baseTranslatedText = {
    $type: "yandex.cloud.ai.translate.v2.TranslatedText",
    text: "",
    detectedLanguageCode: "",
};
exports.TranslatedText = {
    $type: "yandex.cloud.ai.translate.v2.TranslatedText",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        if (message.detectedLanguageCode !== "") {
            writer.uint32(18).string(message.detectedLanguageCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTranslatedText);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.detectedLanguageCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTranslatedText);
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        message.detectedLanguageCode =
            object.detectedLanguageCode !== undefined &&
                object.detectedLanguageCode !== null
                ? String(object.detectedLanguageCode)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.text !== undefined && (obj.text = message.text);
        message.detectedLanguageCode !== undefined &&
            (obj.detectedLanguageCode = message.detectedLanguageCode);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTranslatedText);
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        message.detectedLanguageCode = (_b = object.detectedLanguageCode) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TranslatedText.$type, exports.TranslatedText);
const baseLanguage = {
    $type: "yandex.cloud.ai.translate.v2.Language",
    code: "",
    name: "",
};
exports.Language = {
    $type: "yandex.cloud.ai.translate.v2.Language",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLanguage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseLanguage);
        message.code =
            object.code !== undefined && object.code !== null
                ? String(object.code)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLanguage);
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Language.$type, exports.Language);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
