"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SttServiceClient = exports.SttServiceService = exports.WordInfo = exports.SpeechRecognitionAlternative = exports.SpeechRecognitionResult = exports.SpeechRecognitionChunk = exports.RecognitionSpec = exports.RecognitionConfig = exports.RecognitionAudio = exports.StreamingRecognitionResponse = exports.StreamingRecognitionRequest = exports.LongRunningRecognitionResponse = exports.LongRunningRecognitionRequest = exports.recognitionSpec_AudioEncodingToJSON = exports.recognitionSpec_AudioEncodingFromJSON = exports.RecognitionSpec_AudioEncoding = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../../google/protobuf/duration");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.ai.stt.v2";
var RecognitionSpec_AudioEncoding;
(function (RecognitionSpec_AudioEncoding) {
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["AUDIO_ENCODING_UNSPECIFIED"] = 0] = "AUDIO_ENCODING_UNSPECIFIED";
    /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM) */
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["LINEAR16_PCM"] = 1] = "LINEAR16_PCM";
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["OGG_OPUS"] = 2] = "OGG_OPUS";
    /** MP3 - transcription only */
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["MP3"] = 3] = "MP3";
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RecognitionSpec_AudioEncoding = exports.RecognitionSpec_AudioEncoding || (exports.RecognitionSpec_AudioEncoding = {}));
function recognitionSpec_AudioEncodingFromJSON(object) {
    switch (object) {
        case 0:
        case "AUDIO_ENCODING_UNSPECIFIED":
            return RecognitionSpec_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
        case 1:
        case "LINEAR16_PCM":
            return RecognitionSpec_AudioEncoding.LINEAR16_PCM;
        case 2:
        case "OGG_OPUS":
            return RecognitionSpec_AudioEncoding.OGG_OPUS;
        case 3:
        case "MP3":
            return RecognitionSpec_AudioEncoding.MP3;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RecognitionSpec_AudioEncoding.UNRECOGNIZED;
    }
}
exports.recognitionSpec_AudioEncodingFromJSON = recognitionSpec_AudioEncodingFromJSON;
function recognitionSpec_AudioEncodingToJSON(object) {
    switch (object) {
        case RecognitionSpec_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
            return "AUDIO_ENCODING_UNSPECIFIED";
        case RecognitionSpec_AudioEncoding.LINEAR16_PCM:
            return "LINEAR16_PCM";
        case RecognitionSpec_AudioEncoding.OGG_OPUS:
            return "OGG_OPUS";
        case RecognitionSpec_AudioEncoding.MP3:
            return "MP3";
        default:
            return "UNKNOWN";
    }
}
exports.recognitionSpec_AudioEncodingToJSON = recognitionSpec_AudioEncodingToJSON;
const baseLongRunningRecognitionRequest = {
    $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest",
};
exports.LongRunningRecognitionRequest = {
    $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            exports.RecognitionConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.audio !== undefined) {
            exports.RecognitionAudio.encode(message.audio, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLongRunningRecognitionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = exports.RecognitionConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.audio = exports.RecognitionAudio.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLongRunningRecognitionRequest);
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.RecognitionConfig.fromJSON(object.config)
                : undefined;
        message.audio =
            object.audio !== undefined && object.audio !== null
                ? exports.RecognitionAudio.fromJSON(object.audio)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? exports.RecognitionConfig.toJSON(message.config)
                : undefined);
        message.audio !== undefined &&
            (obj.audio = message.audio
                ? exports.RecognitionAudio.toJSON(message.audio)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseLongRunningRecognitionRequest);
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.RecognitionConfig.fromPartial(object.config)
                : undefined;
        message.audio =
            object.audio !== undefined && object.audio !== null
                ? exports.RecognitionAudio.fromPartial(object.audio)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LongRunningRecognitionRequest.$type, exports.LongRunningRecognitionRequest);
const baseLongRunningRecognitionResponse = {
    $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse",
};
exports.LongRunningRecognitionResponse = {
    $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.chunks) {
            exports.SpeechRecognitionResult.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLongRunningRecognitionResponse);
        message.chunks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunks.push(exports.SpeechRecognitionResult.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseLongRunningRecognitionResponse);
        message.chunks = ((_a = object.chunks) !== null && _a !== void 0 ? _a : []).map((e) => exports.SpeechRecognitionResult.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.chunks) {
            obj.chunks = message.chunks.map((e) => e ? exports.SpeechRecognitionResult.toJSON(e) : undefined);
        }
        else {
            obj.chunks = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseLongRunningRecognitionResponse);
        message.chunks =
            ((_a = object.chunks) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SpeechRecognitionResult.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LongRunningRecognitionResponse.$type, exports.LongRunningRecognitionResponse);
const baseStreamingRecognitionRequest = {
    $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionRequest",
};
exports.StreamingRecognitionRequest = {
    $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            exports.RecognitionConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.audioContent !== undefined) {
            writer.uint32(18).bytes(message.audioContent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamingRecognitionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = exports.RecognitionConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.audioContent = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStreamingRecognitionRequest);
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.RecognitionConfig.fromJSON(object.config)
                : undefined;
        message.audioContent =
            object.audioContent !== undefined && object.audioContent !== null
                ? Buffer.from(bytesFromBase64(object.audioContent))
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? exports.RecognitionConfig.toJSON(message.config)
                : undefined);
        message.audioContent !== undefined &&
            (obj.audioContent =
                message.audioContent !== undefined
                    ? base64FromBytes(message.audioContent)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStreamingRecognitionRequest);
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.RecognitionConfig.fromPartial(object.config)
                : undefined;
        message.audioContent = (_a = object.audioContent) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamingRecognitionRequest.$type, exports.StreamingRecognitionRequest);
const baseStreamingRecognitionResponse = {
    $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionResponse",
};
exports.StreamingRecognitionResponse = {
    $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.chunks) {
            exports.SpeechRecognitionChunk.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamingRecognitionResponse);
        message.chunks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunks.push(exports.SpeechRecognitionChunk.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseStreamingRecognitionResponse);
        message.chunks = ((_a = object.chunks) !== null && _a !== void 0 ? _a : []).map((e) => exports.SpeechRecognitionChunk.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.chunks) {
            obj.chunks = message.chunks.map((e) => e ? exports.SpeechRecognitionChunk.toJSON(e) : undefined);
        }
        else {
            obj.chunks = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStreamingRecognitionResponse);
        message.chunks =
            ((_a = object.chunks) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SpeechRecognitionChunk.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamingRecognitionResponse.$type, exports.StreamingRecognitionResponse);
const baseRecognitionAudio = {
    $type: "yandex.cloud.ai.stt.v2.RecognitionAudio",
};
exports.RecognitionAudio = {
    $type: "yandex.cloud.ai.stt.v2.RecognitionAudio",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.uri !== undefined) {
            writer.uint32(18).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRecognitionAudio);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.bytes();
                    break;
                case 2:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRecognitionAudio);
        message.content =
            object.content !== undefined && object.content !== null
                ? Buffer.from(bytesFromBase64(object.content))
                : undefined;
        message.uri =
            object.uri !== undefined && object.uri !== null
                ? String(object.uri)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined &&
            (obj.content =
                message.content !== undefined
                    ? base64FromBytes(message.content)
                    : undefined);
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRecognitionAudio);
        message.content = (_a = object.content) !== null && _a !== void 0 ? _a : undefined;
        message.uri = (_b = object.uri) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RecognitionAudio.$type, exports.RecognitionAudio);
const baseRecognitionConfig = {
    $type: "yandex.cloud.ai.stt.v2.RecognitionConfig",
    folderId: "",
};
exports.RecognitionConfig = {
    $type: "yandex.cloud.ai.stt.v2.RecognitionConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.specification !== undefined) {
            exports.RecognitionSpec.encode(message.specification, writer.uint32(10).fork()).ldelim();
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRecognitionConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.specification = exports.RecognitionSpec.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = Object.assign({}, baseRecognitionConfig);
        message.specification =
            object.specification !== undefined && object.specification !== null
                ? exports.RecognitionSpec.fromJSON(object.specification)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.specification !== undefined &&
            (obj.specification = message.specification
                ? exports.RecognitionSpec.toJSON(message.specification)
                : undefined);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRecognitionConfig);
        message.specification =
            object.specification !== undefined && object.specification !== null
                ? exports.RecognitionSpec.fromPartial(object.specification)
                : undefined;
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RecognitionConfig.$type, exports.RecognitionConfig);
const baseRecognitionSpec = {
    $type: "yandex.cloud.ai.stt.v2.RecognitionSpec",
    audioEncoding: 0,
    sampleRateHertz: 0,
    languageCode: "",
    profanityFilter: false,
    model: "",
    partialResults: false,
    singleUtterance: false,
    audioChannelCount: 0,
    rawResults: false,
    literatureText: false,
};
exports.RecognitionSpec = {
    $type: "yandex.cloud.ai.stt.v2.RecognitionSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.audioEncoding !== 0) {
            writer.uint32(8).int32(message.audioEncoding);
        }
        if (message.sampleRateHertz !== 0) {
            writer.uint32(16).int64(message.sampleRateHertz);
        }
        if (message.languageCode !== "") {
            writer.uint32(26).string(message.languageCode);
        }
        if (message.profanityFilter === true) {
            writer.uint32(32).bool(message.profanityFilter);
        }
        if (message.model !== "") {
            writer.uint32(42).string(message.model);
        }
        if (message.partialResults === true) {
            writer.uint32(56).bool(message.partialResults);
        }
        if (message.singleUtterance === true) {
            writer.uint32(64).bool(message.singleUtterance);
        }
        if (message.audioChannelCount !== 0) {
            writer.uint32(72).int64(message.audioChannelCount);
        }
        if (message.rawResults === true) {
            writer.uint32(80).bool(message.rawResults);
        }
        if (message.literatureText === true) {
            writer.uint32(88).bool(message.literatureText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRecognitionSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioEncoding = reader.int32();
                    break;
                case 2:
                    message.sampleRateHertz = longToNumber(reader.int64());
                    break;
                case 3:
                    message.languageCode = reader.string();
                    break;
                case 4:
                    message.profanityFilter = reader.bool();
                    break;
                case 5:
                    message.model = reader.string();
                    break;
                case 7:
                    message.partialResults = reader.bool();
                    break;
                case 8:
                    message.singleUtterance = reader.bool();
                    break;
                case 9:
                    message.audioChannelCount = longToNumber(reader.int64());
                    break;
                case 10:
                    message.rawResults = reader.bool();
                    break;
                case 11:
                    message.literatureText = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRecognitionSpec);
        message.audioEncoding =
            object.audioEncoding !== undefined && object.audioEncoding !== null
                ? recognitionSpec_AudioEncodingFromJSON(object.audioEncoding)
                : 0;
        message.sampleRateHertz =
            object.sampleRateHertz !== undefined && object.sampleRateHertz !== null
                ? Number(object.sampleRateHertz)
                : 0;
        message.languageCode =
            object.languageCode !== undefined && object.languageCode !== null
                ? String(object.languageCode)
                : "";
        message.profanityFilter =
            object.profanityFilter !== undefined && object.profanityFilter !== null
                ? Boolean(object.profanityFilter)
                : false;
        message.model =
            object.model !== undefined && object.model !== null
                ? String(object.model)
                : "";
        message.partialResults =
            object.partialResults !== undefined && object.partialResults !== null
                ? Boolean(object.partialResults)
                : false;
        message.singleUtterance =
            object.singleUtterance !== undefined && object.singleUtterance !== null
                ? Boolean(object.singleUtterance)
                : false;
        message.audioChannelCount =
            object.audioChannelCount !== undefined &&
                object.audioChannelCount !== null
                ? Number(object.audioChannelCount)
                : 0;
        message.rawResults =
            object.rawResults !== undefined && object.rawResults !== null
                ? Boolean(object.rawResults)
                : false;
        message.literatureText =
            object.literatureText !== undefined && object.literatureText !== null
                ? Boolean(object.literatureText)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.audioEncoding !== undefined &&
            (obj.audioEncoding = recognitionSpec_AudioEncodingToJSON(message.audioEncoding));
        message.sampleRateHertz !== undefined &&
            (obj.sampleRateHertz = Math.round(message.sampleRateHertz));
        message.languageCode !== undefined &&
            (obj.languageCode = message.languageCode);
        message.profanityFilter !== undefined &&
            (obj.profanityFilter = message.profanityFilter);
        message.model !== undefined && (obj.model = message.model);
        message.partialResults !== undefined &&
            (obj.partialResults = message.partialResults);
        message.singleUtterance !== undefined &&
            (obj.singleUtterance = message.singleUtterance);
        message.audioChannelCount !== undefined &&
            (obj.audioChannelCount = Math.round(message.audioChannelCount));
        message.rawResults !== undefined && (obj.rawResults = message.rawResults);
        message.literatureText !== undefined &&
            (obj.literatureText = message.literatureText);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseRecognitionSpec);
        message.audioEncoding = (_a = object.audioEncoding) !== null && _a !== void 0 ? _a : 0;
        message.sampleRateHertz = (_b = object.sampleRateHertz) !== null && _b !== void 0 ? _b : 0;
        message.languageCode = (_c = object.languageCode) !== null && _c !== void 0 ? _c : "";
        message.profanityFilter = (_d = object.profanityFilter) !== null && _d !== void 0 ? _d : false;
        message.model = (_e = object.model) !== null && _e !== void 0 ? _e : "";
        message.partialResults = (_f = object.partialResults) !== null && _f !== void 0 ? _f : false;
        message.singleUtterance = (_g = object.singleUtterance) !== null && _g !== void 0 ? _g : false;
        message.audioChannelCount = (_h = object.audioChannelCount) !== null && _h !== void 0 ? _h : 0;
        message.rawResults = (_j = object.rawResults) !== null && _j !== void 0 ? _j : false;
        message.literatureText = (_k = object.literatureText) !== null && _k !== void 0 ? _k : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RecognitionSpec.$type, exports.RecognitionSpec);
const baseSpeechRecognitionChunk = {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionChunk",
    final: false,
    endOfUtterance: false,
};
exports.SpeechRecognitionChunk = {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionChunk",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.alternatives) {
            exports.SpeechRecognitionAlternative.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.final === true) {
            writer.uint32(16).bool(message.final);
        }
        if (message.endOfUtterance === true) {
            writer.uint32(24).bool(message.endOfUtterance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSpeechRecognitionChunk);
        message.alternatives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alternatives.push(exports.SpeechRecognitionAlternative.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.final = reader.bool();
                    break;
                case 3:
                    message.endOfUtterance = reader.bool();
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
        const message = Object.assign({}, baseSpeechRecognitionChunk);
        message.alternatives = ((_a = object.alternatives) !== null && _a !== void 0 ? _a : []).map((e) => exports.SpeechRecognitionAlternative.fromJSON(e));
        message.final =
            object.final !== undefined && object.final !== null
                ? Boolean(object.final)
                : false;
        message.endOfUtterance =
            object.endOfUtterance !== undefined && object.endOfUtterance !== null
                ? Boolean(object.endOfUtterance)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.alternatives) {
            obj.alternatives = message.alternatives.map((e) => e ? exports.SpeechRecognitionAlternative.toJSON(e) : undefined);
        }
        else {
            obj.alternatives = [];
        }
        message.final !== undefined && (obj.final = message.final);
        message.endOfUtterance !== undefined &&
            (obj.endOfUtterance = message.endOfUtterance);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseSpeechRecognitionChunk);
        message.alternatives =
            ((_a = object.alternatives) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SpeechRecognitionAlternative.fromPartial(e))) || [];
        message.final = (_b = object.final) !== null && _b !== void 0 ? _b : false;
        message.endOfUtterance = (_c = object.endOfUtterance) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SpeechRecognitionChunk.$type, exports.SpeechRecognitionChunk);
const baseSpeechRecognitionResult = {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionResult",
    channelTag: 0,
};
exports.SpeechRecognitionResult = {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionResult",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.alternatives) {
            exports.SpeechRecognitionAlternative.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.channelTag !== 0) {
            writer.uint32(16).int64(message.channelTag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSpeechRecognitionResult);
        message.alternatives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alternatives.push(exports.SpeechRecognitionAlternative.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.channelTag = longToNumber(reader.int64());
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
        const message = Object.assign({}, baseSpeechRecognitionResult);
        message.alternatives = ((_a = object.alternatives) !== null && _a !== void 0 ? _a : []).map((e) => exports.SpeechRecognitionAlternative.fromJSON(e));
        message.channelTag =
            object.channelTag !== undefined && object.channelTag !== null
                ? Number(object.channelTag)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.alternatives) {
            obj.alternatives = message.alternatives.map((e) => e ? exports.SpeechRecognitionAlternative.toJSON(e) : undefined);
        }
        else {
            obj.alternatives = [];
        }
        message.channelTag !== undefined &&
            (obj.channelTag = Math.round(message.channelTag));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSpeechRecognitionResult);
        message.alternatives =
            ((_a = object.alternatives) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SpeechRecognitionAlternative.fromPartial(e))) || [];
        message.channelTag = (_b = object.channelTag) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SpeechRecognitionResult.$type, exports.SpeechRecognitionResult);
const baseSpeechRecognitionAlternative = {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative",
    text: "",
    confidence: 0,
};
exports.SpeechRecognitionAlternative = {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        if (message.confidence !== 0) {
            writer.uint32(21).float(message.confidence);
        }
        for (const v of message.words) {
            exports.WordInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSpeechRecognitionAlternative);
        message.words = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.confidence = reader.float();
                    break;
                case 3:
                    message.words.push(exports.WordInfo.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseSpeechRecognitionAlternative);
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        message.confidence =
            object.confidence !== undefined && object.confidence !== null
                ? Number(object.confidence)
                : 0;
        message.words = ((_a = object.words) !== null && _a !== void 0 ? _a : []).map((e) => exports.WordInfo.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.text !== undefined && (obj.text = message.text);
        message.confidence !== undefined && (obj.confidence = message.confidence);
        if (message.words) {
            obj.words = message.words.map((e) => e ? exports.WordInfo.toJSON(e) : undefined);
        }
        else {
            obj.words = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseSpeechRecognitionAlternative);
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        message.confidence = (_b = object.confidence) !== null && _b !== void 0 ? _b : 0;
        message.words = ((_c = object.words) === null || _c === void 0 ? void 0 : _c.map((e) => exports.WordInfo.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SpeechRecognitionAlternative.$type, exports.SpeechRecognitionAlternative);
const baseWordInfo = {
    $type: "yandex.cloud.ai.stt.v2.WordInfo",
    word: "",
    confidence: 0,
};
exports.WordInfo = {
    $type: "yandex.cloud.ai.stt.v2.WordInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.startTime !== undefined) {
            duration_1.Duration.encode(message.startTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            duration_1.Duration.encode(message.endTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.word !== "") {
            writer.uint32(26).string(message.word);
        }
        if (message.confidence !== 0) {
            writer.uint32(37).float(message.confidence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWordInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.endTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.word = reader.string();
                    break;
                case 4:
                    message.confidence = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWordInfo);
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? duration_1.Duration.fromJSON(object.startTime)
                : undefined;
        message.endTime =
            object.endTime !== undefined && object.endTime !== null
                ? duration_1.Duration.fromJSON(object.endTime)
                : undefined;
        message.word =
            object.word !== undefined && object.word !== null
                ? String(object.word)
                : "";
        message.confidence =
            object.confidence !== undefined && object.confidence !== null
                ? Number(object.confidence)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined &&
            (obj.startTime = message.startTime
                ? duration_1.Duration.toJSON(message.startTime)
                : undefined);
        message.endTime !== undefined &&
            (obj.endTime = message.endTime
                ? duration_1.Duration.toJSON(message.endTime)
                : undefined);
        message.word !== undefined && (obj.word = message.word);
        message.confidence !== undefined && (obj.confidence = message.confidence);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseWordInfo);
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? duration_1.Duration.fromPartial(object.startTime)
                : undefined;
        message.endTime =
            object.endTime !== undefined && object.endTime !== null
                ? duration_1.Duration.fromPartial(object.endTime)
                : undefined;
        message.word = (_a = object.word) !== null && _a !== void 0 ? _a : "";
        message.confidence = (_b = object.confidence) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WordInfo.$type, exports.WordInfo);
exports.SttServiceService = {
    longRunningRecognize: {
        path: "/yandex.cloud.ai.stt.v2.SttService/LongRunningRecognize",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.LongRunningRecognitionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.LongRunningRecognitionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    streamingRecognize: {
        path: "/yandex.cloud.ai.stt.v2.SttService/StreamingRecognize",
        requestStream: true,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.StreamingRecognitionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StreamingRecognitionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.StreamingRecognitionResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.StreamingRecognitionResponse.decode(value),
    },
};
exports.SttServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SttServiceService, "yandex.cloud.ai.stt.v2.SttService");
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
