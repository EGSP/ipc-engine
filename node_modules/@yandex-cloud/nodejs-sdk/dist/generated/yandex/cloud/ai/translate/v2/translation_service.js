"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationServiceClient = exports.TranslationServiceService = exports.ListLanguagesResponse = exports.ListLanguagesRequest = exports.DetectLanguageResponse = exports.DetectLanguageRequest = exports.TranslateResponse = exports.GlossaryPair = exports.GlossaryData = exports.TranslateGlossaryConfig = exports.TranslateRequest = exports.translateRequest_FormatToJSON = exports.translateRequest_FormatFromJSON = exports.TranslateRequest_Format = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const translation_1 = require("../../../../../yandex/cloud/ai/translate/v2/translation");
exports.protobufPackage = "yandex.cloud.ai.translate.v2";
var TranslateRequest_Format;
(function (TranslateRequest_Format) {
    TranslateRequest_Format[TranslateRequest_Format["FORMAT_UNSPECIFIED"] = 0] = "FORMAT_UNSPECIFIED";
    /** PLAIN_TEXT - Text without markup. Default value. */
    TranslateRequest_Format[TranslateRequest_Format["PLAIN_TEXT"] = 1] = "PLAIN_TEXT";
    /** HTML - Text in the HTML format. */
    TranslateRequest_Format[TranslateRequest_Format["HTML"] = 2] = "HTML";
    TranslateRequest_Format[TranslateRequest_Format["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TranslateRequest_Format = exports.TranslateRequest_Format || (exports.TranslateRequest_Format = {}));
function translateRequest_FormatFromJSON(object) {
    switch (object) {
        case 0:
        case "FORMAT_UNSPECIFIED":
            return TranslateRequest_Format.FORMAT_UNSPECIFIED;
        case 1:
        case "PLAIN_TEXT":
            return TranslateRequest_Format.PLAIN_TEXT;
        case 2:
        case "HTML":
            return TranslateRequest_Format.HTML;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TranslateRequest_Format.UNRECOGNIZED;
    }
}
exports.translateRequest_FormatFromJSON = translateRequest_FormatFromJSON;
function translateRequest_FormatToJSON(object) {
    switch (object) {
        case TranslateRequest_Format.FORMAT_UNSPECIFIED:
            return "FORMAT_UNSPECIFIED";
        case TranslateRequest_Format.PLAIN_TEXT:
            return "PLAIN_TEXT";
        case TranslateRequest_Format.HTML:
            return "HTML";
        default:
            return "UNKNOWN";
    }
}
exports.translateRequest_FormatToJSON = translateRequest_FormatToJSON;
const baseTranslateRequest = {
    $type: "yandex.cloud.ai.translate.v2.TranslateRequest",
    sourceLanguageCode: "",
    targetLanguageCode: "",
    format: 0,
    texts: "",
    folderId: "",
    model: "",
    speller: false,
};
exports.TranslateRequest = {
    $type: "yandex.cloud.ai.translate.v2.TranslateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sourceLanguageCode !== "") {
            writer.uint32(10).string(message.sourceLanguageCode);
        }
        if (message.targetLanguageCode !== "") {
            writer.uint32(18).string(message.targetLanguageCode);
        }
        if (message.format !== 0) {
            writer.uint32(24).int32(message.format);
        }
        for (const v of message.texts) {
            writer.uint32(34).string(v);
        }
        if (message.folderId !== "") {
            writer.uint32(42).string(message.folderId);
        }
        if (message.model !== "") {
            writer.uint32(50).string(message.model);
        }
        if (message.glossaryConfig !== undefined) {
            exports.TranslateGlossaryConfig.encode(message.glossaryConfig, writer.uint32(58).fork()).ldelim();
        }
        if (message.speller === true) {
            writer.uint32(64).bool(message.speller);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTranslateRequest);
        message.texts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceLanguageCode = reader.string();
                    break;
                case 2:
                    message.targetLanguageCode = reader.string();
                    break;
                case 3:
                    message.format = reader.int32();
                    break;
                case 4:
                    message.texts.push(reader.string());
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                case 6:
                    message.model = reader.string();
                    break;
                case 7:
                    message.glossaryConfig = exports.TranslateGlossaryConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.speller = reader.bool();
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
        const message = Object.assign({}, baseTranslateRequest);
        message.sourceLanguageCode =
            object.sourceLanguageCode !== undefined &&
                object.sourceLanguageCode !== null
                ? String(object.sourceLanguageCode)
                : "";
        message.targetLanguageCode =
            object.targetLanguageCode !== undefined &&
                object.targetLanguageCode !== null
                ? String(object.targetLanguageCode)
                : "";
        message.format =
            object.format !== undefined && object.format !== null
                ? translateRequest_FormatFromJSON(object.format)
                : 0;
        message.texts = ((_a = object.texts) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.model =
            object.model !== undefined && object.model !== null
                ? String(object.model)
                : "";
        message.glossaryConfig =
            object.glossaryConfig !== undefined && object.glossaryConfig !== null
                ? exports.TranslateGlossaryConfig.fromJSON(object.glossaryConfig)
                : undefined;
        message.speller =
            object.speller !== undefined && object.speller !== null
                ? Boolean(object.speller)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceLanguageCode !== undefined &&
            (obj.sourceLanguageCode = message.sourceLanguageCode);
        message.targetLanguageCode !== undefined &&
            (obj.targetLanguageCode = message.targetLanguageCode);
        message.format !== undefined &&
            (obj.format = translateRequest_FormatToJSON(message.format));
        if (message.texts) {
            obj.texts = message.texts.map((e) => e);
        }
        else {
            obj.texts = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.model !== undefined && (obj.model = message.model);
        message.glossaryConfig !== undefined &&
            (obj.glossaryConfig = message.glossaryConfig
                ? exports.TranslateGlossaryConfig.toJSON(message.glossaryConfig)
                : undefined);
        message.speller !== undefined && (obj.speller = message.speller);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseTranslateRequest);
        message.sourceLanguageCode = (_a = object.sourceLanguageCode) !== null && _a !== void 0 ? _a : "";
        message.targetLanguageCode = (_b = object.targetLanguageCode) !== null && _b !== void 0 ? _b : "";
        message.format = (_c = object.format) !== null && _c !== void 0 ? _c : 0;
        message.texts = ((_d = object.texts) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.folderId = (_e = object.folderId) !== null && _e !== void 0 ? _e : "";
        message.model = (_f = object.model) !== null && _f !== void 0 ? _f : "";
        message.glossaryConfig =
            object.glossaryConfig !== undefined && object.glossaryConfig !== null
                ? exports.TranslateGlossaryConfig.fromPartial(object.glossaryConfig)
                : undefined;
        message.speller = (_g = object.speller) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TranslateRequest.$type, exports.TranslateRequest);
const baseTranslateGlossaryConfig = {
    $type: "yandex.cloud.ai.translate.v2.TranslateGlossaryConfig",
};
exports.TranslateGlossaryConfig = {
    $type: "yandex.cloud.ai.translate.v2.TranslateGlossaryConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.glossaryData !== undefined) {
            exports.GlossaryData.encode(message.glossaryData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTranslateGlossaryConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.glossaryData = exports.GlossaryData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTranslateGlossaryConfig);
        message.glossaryData =
            object.glossaryData !== undefined && object.glossaryData !== null
                ? exports.GlossaryData.fromJSON(object.glossaryData)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.glossaryData !== undefined &&
            (obj.glossaryData = message.glossaryData
                ? exports.GlossaryData.toJSON(message.glossaryData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTranslateGlossaryConfig);
        message.glossaryData =
            object.glossaryData !== undefined && object.glossaryData !== null
                ? exports.GlossaryData.fromPartial(object.glossaryData)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TranslateGlossaryConfig.$type, exports.TranslateGlossaryConfig);
const baseGlossaryData = {
    $type: "yandex.cloud.ai.translate.v2.GlossaryData",
};
exports.GlossaryData = {
    $type: "yandex.cloud.ai.translate.v2.GlossaryData",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.glossaryPairs) {
            exports.GlossaryPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGlossaryData);
        message.glossaryPairs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.glossaryPairs.push(exports.GlossaryPair.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseGlossaryData);
        message.glossaryPairs = ((_a = object.glossaryPairs) !== null && _a !== void 0 ? _a : []).map((e) => exports.GlossaryPair.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.glossaryPairs) {
            obj.glossaryPairs = message.glossaryPairs.map((e) => e ? exports.GlossaryPair.toJSON(e) : undefined);
        }
        else {
            obj.glossaryPairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGlossaryData);
        message.glossaryPairs =
            ((_a = object.glossaryPairs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GlossaryPair.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GlossaryData.$type, exports.GlossaryData);
const baseGlossaryPair = {
    $type: "yandex.cloud.ai.translate.v2.GlossaryPair",
    sourceText: "",
    translatedText: "",
    exact: false,
};
exports.GlossaryPair = {
    $type: "yandex.cloud.ai.translate.v2.GlossaryPair",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sourceText !== "") {
            writer.uint32(10).string(message.sourceText);
        }
        if (message.translatedText !== "") {
            writer.uint32(18).string(message.translatedText);
        }
        if (message.exact === true) {
            writer.uint32(24).bool(message.exact);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGlossaryPair);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceText = reader.string();
                    break;
                case 2:
                    message.translatedText = reader.string();
                    break;
                case 3:
                    message.exact = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGlossaryPair);
        message.sourceText =
            object.sourceText !== undefined && object.sourceText !== null
                ? String(object.sourceText)
                : "";
        message.translatedText =
            object.translatedText !== undefined && object.translatedText !== null
                ? String(object.translatedText)
                : "";
        message.exact =
            object.exact !== undefined && object.exact !== null
                ? Boolean(object.exact)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceText !== undefined && (obj.sourceText = message.sourceText);
        message.translatedText !== undefined &&
            (obj.translatedText = message.translatedText);
        message.exact !== undefined && (obj.exact = message.exact);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGlossaryPair);
        message.sourceText = (_a = object.sourceText) !== null && _a !== void 0 ? _a : "";
        message.translatedText = (_b = object.translatedText) !== null && _b !== void 0 ? _b : "";
        message.exact = (_c = object.exact) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GlossaryPair.$type, exports.GlossaryPair);
const baseTranslateResponse = {
    $type: "yandex.cloud.ai.translate.v2.TranslateResponse",
};
exports.TranslateResponse = {
    $type: "yandex.cloud.ai.translate.v2.TranslateResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.translations) {
            translation_1.TranslatedText.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTranslateResponse);
        message.translations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.translations.push(translation_1.TranslatedText.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseTranslateResponse);
        message.translations = ((_a = object.translations) !== null && _a !== void 0 ? _a : []).map((e) => translation_1.TranslatedText.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.translations) {
            obj.translations = message.translations.map((e) => e ? translation_1.TranslatedText.toJSON(e) : undefined);
        }
        else {
            obj.translations = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTranslateResponse);
        message.translations =
            ((_a = object.translations) === null || _a === void 0 ? void 0 : _a.map((e) => translation_1.TranslatedText.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TranslateResponse.$type, exports.TranslateResponse);
const baseDetectLanguageRequest = {
    $type: "yandex.cloud.ai.translate.v2.DetectLanguageRequest",
    text: "",
    languageCodeHints: "",
    folderId: "",
};
exports.DetectLanguageRequest = {
    $type: "yandex.cloud.ai.translate.v2.DetectLanguageRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        for (const v of message.languageCodeHints) {
            writer.uint32(18).string(v);
        }
        if (message.folderId !== "") {
            writer.uint32(26).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDetectLanguageRequest);
        message.languageCodeHints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.languageCodeHints.push(reader.string());
                    break;
                case 3:
                    message.folderId = reader.string();
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
        const message = Object.assign({}, baseDetectLanguageRequest);
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        message.languageCodeHints = ((_a = object.languageCodeHints) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.text !== undefined && (obj.text = message.text);
        if (message.languageCodeHints) {
            obj.languageCodeHints = message.languageCodeHints.map((e) => e);
        }
        else {
            obj.languageCodeHints = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseDetectLanguageRequest);
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        message.languageCodeHints = ((_b = object.languageCodeHints) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.folderId = (_c = object.folderId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DetectLanguageRequest.$type, exports.DetectLanguageRequest);
const baseDetectLanguageResponse = {
    $type: "yandex.cloud.ai.translate.v2.DetectLanguageResponse",
    languageCode: "",
};
exports.DetectLanguageResponse = {
    $type: "yandex.cloud.ai.translate.v2.DetectLanguageResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.languageCode !== "") {
            writer.uint32(10).string(message.languageCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDetectLanguageResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.languageCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDetectLanguageResponse);
        message.languageCode =
            object.languageCode !== undefined && object.languageCode !== null
                ? String(object.languageCode)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.languageCode !== undefined &&
            (obj.languageCode = message.languageCode);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDetectLanguageResponse);
        message.languageCode = (_a = object.languageCode) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DetectLanguageResponse.$type, exports.DetectLanguageResponse);
const baseListLanguagesRequest = {
    $type: "yandex.cloud.ai.translate.v2.ListLanguagesRequest",
    folderId: "",
};
exports.ListLanguagesRequest = {
    $type: "yandex.cloud.ai.translate.v2.ListLanguagesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListLanguagesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListLanguagesRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListLanguagesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListLanguagesRequest.$type, exports.ListLanguagesRequest);
const baseListLanguagesResponse = {
    $type: "yandex.cloud.ai.translate.v2.ListLanguagesResponse",
};
exports.ListLanguagesResponse = {
    $type: "yandex.cloud.ai.translate.v2.ListLanguagesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.languages) {
            translation_1.Language.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListLanguagesResponse);
        message.languages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.languages.push(translation_1.Language.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListLanguagesResponse);
        message.languages = ((_a = object.languages) !== null && _a !== void 0 ? _a : []).map((e) => translation_1.Language.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.languages) {
            obj.languages = message.languages.map((e) => e ? translation_1.Language.toJSON(e) : undefined);
        }
        else {
            obj.languages = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListLanguagesResponse);
        message.languages =
            ((_a = object.languages) === null || _a === void 0 ? void 0 : _a.map((e) => translation_1.Language.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListLanguagesResponse.$type, exports.ListLanguagesResponse);
/** A set of methods for the Translate service. */
exports.TranslationServiceService = {
    /** Translates the text to the specified language. */
    translate: {
        path: "/yandex.cloud.ai.translate.v2.TranslationService/Translate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.TranslateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.TranslateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.TranslateResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.TranslateResponse.decode(value),
    },
    /** Detects the language of the text. */
    detectLanguage: {
        path: "/yandex.cloud.ai.translate.v2.TranslationService/DetectLanguage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DetectLanguageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DetectLanguageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.DetectLanguageResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.DetectLanguageResponse.decode(value),
    },
    /** Retrieves the list of supported languages. */
    listLanguages: {
        path: "/yandex.cloud.ai.translate.v2.TranslationService/ListLanguages",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListLanguagesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListLanguagesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListLanguagesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListLanguagesResponse.decode(value),
    },
};
exports.TranslationServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TranslationServiceService, "yandex.cloud.ai.translate.v2.TranslationService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
