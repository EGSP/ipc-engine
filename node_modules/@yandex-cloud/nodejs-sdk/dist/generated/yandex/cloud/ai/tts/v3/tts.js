"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtteranceSynthesisRequest = exports.Hints = exports.TextTemplate = exports.AudioChunk = exports.AudioTemplate = exports.UtteranceSynthesisResponse = exports.AudioVariable = exports.TextVariable = exports.ContainerAudio = exports.RawAudio = exports.AudioFormatOptions = exports.AudioContent = exports.utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON = exports.utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON = exports.UtteranceSynthesisRequest_LoudnessNormalizationType = exports.containerAudio_ContainerAudioTypeToJSON = exports.containerAudio_ContainerAudioTypeFromJSON = exports.ContainerAudio_ContainerAudioType = exports.rawAudio_AudioEncodingToJSON = exports.rawAudio_AudioEncodingFromJSON = exports.RawAudio_AudioEncoding = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "speechkit.tts.v3";
var RawAudio_AudioEncoding;
(function (RawAudio_AudioEncoding) {
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["AUDIO_ENCODING_UNSPECIFIED"] = 0] = "AUDIO_ENCODING_UNSPECIFIED";
    /** LINEAR16_PCM - Audio bit depth 16-bit signed little-endian (Linear PCM). */
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["LINEAR16_PCM"] = 1] = "LINEAR16_PCM";
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RawAudio_AudioEncoding = exports.RawAudio_AudioEncoding || (exports.RawAudio_AudioEncoding = {}));
function rawAudio_AudioEncodingFromJSON(object) {
    switch (object) {
        case 0:
        case "AUDIO_ENCODING_UNSPECIFIED":
            return RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
        case 1:
        case "LINEAR16_PCM":
            return RawAudio_AudioEncoding.LINEAR16_PCM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RawAudio_AudioEncoding.UNRECOGNIZED;
    }
}
exports.rawAudio_AudioEncodingFromJSON = rawAudio_AudioEncodingFromJSON;
function rawAudio_AudioEncodingToJSON(object) {
    switch (object) {
        case RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
            return "AUDIO_ENCODING_UNSPECIFIED";
        case RawAudio_AudioEncoding.LINEAR16_PCM:
            return "LINEAR16_PCM";
        default:
            return "UNKNOWN";
    }
}
exports.rawAudio_AudioEncodingToJSON = rawAudio_AudioEncodingToJSON;
var ContainerAudio_ContainerAudioType;
(function (ContainerAudio_ContainerAudioType) {
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["CONTAINER_AUDIO_TYPE_UNSPECIFIED"] = 0] = "CONTAINER_AUDIO_TYPE_UNSPECIFIED";
    /** WAV - Audio bit depth 16-bit signed little-endian (Linear PCM). */
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["WAV"] = 1] = "WAV";
    /** OGG_OPUS - Data is encoded using the OPUS audio codec and compressed using the OGG container format. */
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["OGG_OPUS"] = 2] = "OGG_OPUS";
    /** MP3 - Data is encoded using MPEG-1/2 Layer III and compressed using the MP3 container format. */
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["MP3"] = 3] = "MP3";
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContainerAudio_ContainerAudioType = exports.ContainerAudio_ContainerAudioType || (exports.ContainerAudio_ContainerAudioType = {}));
function containerAudio_ContainerAudioTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONTAINER_AUDIO_TYPE_UNSPECIFIED":
            return ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED;
        case 1:
        case "WAV":
            return ContainerAudio_ContainerAudioType.WAV;
        case 2:
        case "OGG_OPUS":
            return ContainerAudio_ContainerAudioType.OGG_OPUS;
        case 3:
        case "MP3":
            return ContainerAudio_ContainerAudioType.MP3;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ContainerAudio_ContainerAudioType.UNRECOGNIZED;
    }
}
exports.containerAudio_ContainerAudioTypeFromJSON = containerAudio_ContainerAudioTypeFromJSON;
function containerAudio_ContainerAudioTypeToJSON(object) {
    switch (object) {
        case ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED:
            return "CONTAINER_AUDIO_TYPE_UNSPECIFIED";
        case ContainerAudio_ContainerAudioType.WAV:
            return "WAV";
        case ContainerAudio_ContainerAudioType.OGG_OPUS:
            return "OGG_OPUS";
        case ContainerAudio_ContainerAudioType.MP3:
            return "MP3";
        default:
            return "UNKNOWN";
    }
}
exports.containerAudio_ContainerAudioTypeToJSON = containerAudio_ContainerAudioTypeToJSON;
var UtteranceSynthesisRequest_LoudnessNormalizationType;
(function (UtteranceSynthesisRequest_LoudnessNormalizationType) {
    UtteranceSynthesisRequest_LoudnessNormalizationType[UtteranceSynthesisRequest_LoudnessNormalizationType["LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED"] = 0] = "LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED";
    /** MAX_PEAK - The type of normalization, wherein the gain is changed to bring the highest PCM sample value or analog signal peak to a given level. */
    UtteranceSynthesisRequest_LoudnessNormalizationType[UtteranceSynthesisRequest_LoudnessNormalizationType["MAX_PEAK"] = 1] = "MAX_PEAK";
    /** LUFS - The type of normalization based on EBU R 128 recommendation. */
    UtteranceSynthesisRequest_LoudnessNormalizationType[UtteranceSynthesisRequest_LoudnessNormalizationType["LUFS"] = 2] = "LUFS";
    UtteranceSynthesisRequest_LoudnessNormalizationType[UtteranceSynthesisRequest_LoudnessNormalizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UtteranceSynthesisRequest_LoudnessNormalizationType = exports.UtteranceSynthesisRequest_LoudnessNormalizationType || (exports.UtteranceSynthesisRequest_LoudnessNormalizationType = {}));
function utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED":
            return UtteranceSynthesisRequest_LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED;
        case 1:
        case "MAX_PEAK":
            return UtteranceSynthesisRequest_LoudnessNormalizationType.MAX_PEAK;
        case 2:
        case "LUFS":
            return UtteranceSynthesisRequest_LoudnessNormalizationType.LUFS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UtteranceSynthesisRequest_LoudnessNormalizationType.UNRECOGNIZED;
    }
}
exports.utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON = utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON;
function utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON(object) {
    switch (object) {
        case UtteranceSynthesisRequest_LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED:
            return "LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED";
        case UtteranceSynthesisRequest_LoudnessNormalizationType.MAX_PEAK:
            return "MAX_PEAK";
        case UtteranceSynthesisRequest_LoudnessNormalizationType.LUFS:
            return "LUFS";
        default:
            return "UNKNOWN";
    }
}
exports.utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON = utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON;
const baseAudioContent = { $type: "speechkit.tts.v3.AudioContent" };
exports.AudioContent = {
    $type: "speechkit.tts.v3.AudioContent",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.audioSpec !== undefined) {
            exports.AudioFormatOptions.encode(message.audioSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAudioContent);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.bytes();
                    break;
                case 2:
                    message.audioSpec = exports.AudioFormatOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAudioContent);
        message.content =
            object.content !== undefined && object.content !== null
                ? Buffer.from(bytesFromBase64(object.content))
                : undefined;
        message.audioSpec =
            object.audioSpec !== undefined && object.audioSpec !== null
                ? exports.AudioFormatOptions.fromJSON(object.audioSpec)
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
        message.audioSpec !== undefined &&
            (obj.audioSpec = message.audioSpec
                ? exports.AudioFormatOptions.toJSON(message.audioSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAudioContent);
        message.content = (_a = object.content) !== null && _a !== void 0 ? _a : undefined;
        message.audioSpec =
            object.audioSpec !== undefined && object.audioSpec !== null
                ? exports.AudioFormatOptions.fromPartial(object.audioSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AudioContent.$type, exports.AudioContent);
const baseAudioFormatOptions = {
    $type: "speechkit.tts.v3.AudioFormatOptions",
};
exports.AudioFormatOptions = {
    $type: "speechkit.tts.v3.AudioFormatOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rawAudio !== undefined) {
            exports.RawAudio.encode(message.rawAudio, writer.uint32(10).fork()).ldelim();
        }
        if (message.containerAudio !== undefined) {
            exports.ContainerAudio.encode(message.containerAudio, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAudioFormatOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rawAudio = exports.RawAudio.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.containerAudio = exports.ContainerAudio.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAudioFormatOptions);
        message.rawAudio =
            object.rawAudio !== undefined && object.rawAudio !== null
                ? exports.RawAudio.fromJSON(object.rawAudio)
                : undefined;
        message.containerAudio =
            object.containerAudio !== undefined && object.containerAudio !== null
                ? exports.ContainerAudio.fromJSON(object.containerAudio)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.rawAudio !== undefined &&
            (obj.rawAudio = message.rawAudio
                ? exports.RawAudio.toJSON(message.rawAudio)
                : undefined);
        message.containerAudio !== undefined &&
            (obj.containerAudio = message.containerAudio
                ? exports.ContainerAudio.toJSON(message.containerAudio)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAudioFormatOptions);
        message.rawAudio =
            object.rawAudio !== undefined && object.rawAudio !== null
                ? exports.RawAudio.fromPartial(object.rawAudio)
                : undefined;
        message.containerAudio =
            object.containerAudio !== undefined && object.containerAudio !== null
                ? exports.ContainerAudio.fromPartial(object.containerAudio)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AudioFormatOptions.$type, exports.AudioFormatOptions);
const baseRawAudio = {
    $type: "speechkit.tts.v3.RawAudio",
    audioEncoding: 0,
    sampleRateHertz: 0,
};
exports.RawAudio = {
    $type: "speechkit.tts.v3.RawAudio",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.audioEncoding !== 0) {
            writer.uint32(8).int32(message.audioEncoding);
        }
        if (message.sampleRateHertz !== 0) {
            writer.uint32(16).int64(message.sampleRateHertz);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRawAudio);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioEncoding = reader.int32();
                    break;
                case 2:
                    message.sampleRateHertz = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRawAudio);
        message.audioEncoding =
            object.audioEncoding !== undefined && object.audioEncoding !== null
                ? rawAudio_AudioEncodingFromJSON(object.audioEncoding)
                : 0;
        message.sampleRateHertz =
            object.sampleRateHertz !== undefined && object.sampleRateHertz !== null
                ? Number(object.sampleRateHertz)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.audioEncoding !== undefined &&
            (obj.audioEncoding = rawAudio_AudioEncodingToJSON(message.audioEncoding));
        message.sampleRateHertz !== undefined &&
            (obj.sampleRateHertz = Math.round(message.sampleRateHertz));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRawAudio);
        message.audioEncoding = (_a = object.audioEncoding) !== null && _a !== void 0 ? _a : 0;
        message.sampleRateHertz = (_b = object.sampleRateHertz) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RawAudio.$type, exports.RawAudio);
const baseContainerAudio = {
    $type: "speechkit.tts.v3.ContainerAudio",
    containerAudioType: 0,
};
exports.ContainerAudio = {
    $type: "speechkit.tts.v3.ContainerAudio",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerAudioType !== 0) {
            writer.uint32(8).int32(message.containerAudioType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseContainerAudio);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerAudioType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseContainerAudio);
        message.containerAudioType =
            object.containerAudioType !== undefined &&
                object.containerAudioType !== null
                ? containerAudio_ContainerAudioTypeFromJSON(object.containerAudioType)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerAudioType !== undefined &&
            (obj.containerAudioType = containerAudio_ContainerAudioTypeToJSON(message.containerAudioType));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseContainerAudio);
        message.containerAudioType = (_a = object.containerAudioType) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ContainerAudio.$type, exports.ContainerAudio);
const baseTextVariable = {
    $type: "speechkit.tts.v3.TextVariable",
    variableName: "",
    variableValue: "",
};
exports.TextVariable = {
    $type: "speechkit.tts.v3.TextVariable",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.variableName !== "") {
            writer.uint32(10).string(message.variableName);
        }
        if (message.variableValue !== "") {
            writer.uint32(18).string(message.variableValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTextVariable);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.variableName = reader.string();
                    break;
                case 2:
                    message.variableValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTextVariable);
        message.variableName =
            object.variableName !== undefined && object.variableName !== null
                ? String(object.variableName)
                : "";
        message.variableValue =
            object.variableValue !== undefined && object.variableValue !== null
                ? String(object.variableValue)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.variableName !== undefined &&
            (obj.variableName = message.variableName);
        message.variableValue !== undefined &&
            (obj.variableValue = message.variableValue);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTextVariable);
        message.variableName = (_a = object.variableName) !== null && _a !== void 0 ? _a : "";
        message.variableValue = (_b = object.variableValue) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TextVariable.$type, exports.TextVariable);
const baseAudioVariable = {
    $type: "speechkit.tts.v3.AudioVariable",
    variableName: "",
    variableStartMs: 0,
    variableLengthMs: 0,
};
exports.AudioVariable = {
    $type: "speechkit.tts.v3.AudioVariable",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.variableName !== "") {
            writer.uint32(10).string(message.variableName);
        }
        if (message.variableStartMs !== 0) {
            writer.uint32(16).int64(message.variableStartMs);
        }
        if (message.variableLengthMs !== 0) {
            writer.uint32(24).int64(message.variableLengthMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAudioVariable);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.variableName = reader.string();
                    break;
                case 2:
                    message.variableStartMs = longToNumber(reader.int64());
                    break;
                case 3:
                    message.variableLengthMs = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAudioVariable);
        message.variableName =
            object.variableName !== undefined && object.variableName !== null
                ? String(object.variableName)
                : "";
        message.variableStartMs =
            object.variableStartMs !== undefined && object.variableStartMs !== null
                ? Number(object.variableStartMs)
                : 0;
        message.variableLengthMs =
            object.variableLengthMs !== undefined && object.variableLengthMs !== null
                ? Number(object.variableLengthMs)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.variableName !== undefined &&
            (obj.variableName = message.variableName);
        message.variableStartMs !== undefined &&
            (obj.variableStartMs = Math.round(message.variableStartMs));
        message.variableLengthMs !== undefined &&
            (obj.variableLengthMs = Math.round(message.variableLengthMs));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAudioVariable);
        message.variableName = (_a = object.variableName) !== null && _a !== void 0 ? _a : "";
        message.variableStartMs = (_b = object.variableStartMs) !== null && _b !== void 0 ? _b : 0;
        message.variableLengthMs = (_c = object.variableLengthMs) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AudioVariable.$type, exports.AudioVariable);
const baseUtteranceSynthesisResponse = {
    $type: "speechkit.tts.v3.UtteranceSynthesisResponse",
};
exports.UtteranceSynthesisResponse = {
    $type: "speechkit.tts.v3.UtteranceSynthesisResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.audioChunk !== undefined) {
            exports.AudioChunk.encode(message.audioChunk, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUtteranceSynthesisResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioChunk = exports.AudioChunk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUtteranceSynthesisResponse);
        message.audioChunk =
            object.audioChunk !== undefined && object.audioChunk !== null
                ? exports.AudioChunk.fromJSON(object.audioChunk)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.audioChunk !== undefined &&
            (obj.audioChunk = message.audioChunk
                ? exports.AudioChunk.toJSON(message.audioChunk)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseUtteranceSynthesisResponse);
        message.audioChunk =
            object.audioChunk !== undefined && object.audioChunk !== null
                ? exports.AudioChunk.fromPartial(object.audioChunk)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UtteranceSynthesisResponse.$type, exports.UtteranceSynthesisResponse);
const baseAudioTemplate = { $type: "speechkit.tts.v3.AudioTemplate" };
exports.AudioTemplate = {
    $type: "speechkit.tts.v3.AudioTemplate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.audio !== undefined) {
            exports.AudioContent.encode(message.audio, writer.uint32(10).fork()).ldelim();
        }
        if (message.textTemplate !== undefined) {
            exports.TextTemplate.encode(message.textTemplate, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.variables) {
            exports.AudioVariable.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAudioTemplate);
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audio = exports.AudioContent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.textTemplate = exports.TextTemplate.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.variables.push(exports.AudioVariable.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseAudioTemplate);
        message.audio =
            object.audio !== undefined && object.audio !== null
                ? exports.AudioContent.fromJSON(object.audio)
                : undefined;
        message.textTemplate =
            object.textTemplate !== undefined && object.textTemplate !== null
                ? exports.TextTemplate.fromJSON(object.textTemplate)
                : undefined;
        message.variables = ((_a = object.variables) !== null && _a !== void 0 ? _a : []).map((e) => exports.AudioVariable.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.audio !== undefined &&
            (obj.audio = message.audio
                ? exports.AudioContent.toJSON(message.audio)
                : undefined);
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate
                ? exports.TextTemplate.toJSON(message.textTemplate)
                : undefined);
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? exports.AudioVariable.toJSON(e) : undefined);
        }
        else {
            obj.variables = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAudioTemplate);
        message.audio =
            object.audio !== undefined && object.audio !== null
                ? exports.AudioContent.fromPartial(object.audio)
                : undefined;
        message.textTemplate =
            object.textTemplate !== undefined && object.textTemplate !== null
                ? exports.TextTemplate.fromPartial(object.textTemplate)
                : undefined;
        message.variables =
            ((_a = object.variables) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AudioVariable.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AudioTemplate.$type, exports.AudioTemplate);
const baseAudioChunk = { $type: "speechkit.tts.v3.AudioChunk" };
exports.AudioChunk = {
    $type: "speechkit.tts.v3.AudioChunk",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAudioChunk);
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAudioChunk);
        message.data =
            object.data !== undefined && object.data !== null
                ? Buffer.from(bytesFromBase64(object.data))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAudioChunk);
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AudioChunk.$type, exports.AudioChunk);
const baseTextTemplate = {
    $type: "speechkit.tts.v3.TextTemplate",
    textTemplate: "",
};
exports.TextTemplate = {
    $type: "speechkit.tts.v3.TextTemplate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.textTemplate !== "") {
            writer.uint32(10).string(message.textTemplate);
        }
        for (const v of message.variables) {
            exports.TextVariable.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTextTemplate);
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.textTemplate = reader.string();
                    break;
                case 2:
                    message.variables.push(exports.TextVariable.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseTextTemplate);
        message.textTemplate =
            object.textTemplate !== undefined && object.textTemplate !== null
                ? String(object.textTemplate)
                : "";
        message.variables = ((_a = object.variables) !== null && _a !== void 0 ? _a : []).map((e) => exports.TextVariable.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate);
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? exports.TextVariable.toJSON(e) : undefined);
        }
        else {
            obj.variables = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTextTemplate);
        message.textTemplate = (_a = object.textTemplate) !== null && _a !== void 0 ? _a : "";
        message.variables =
            ((_b = object.variables) === null || _b === void 0 ? void 0 : _b.map((e) => exports.TextVariable.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TextTemplate.$type, exports.TextTemplate);
const baseHints = { $type: "speechkit.tts.v3.Hints" };
exports.Hints = {
    $type: "speechkit.tts.v3.Hints",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.voice !== undefined) {
            writer.uint32(10).string(message.voice);
        }
        if (message.audioTemplate !== undefined) {
            exports.AudioTemplate.encode(message.audioTemplate, writer.uint32(18).fork()).ldelim();
        }
        if (message.speed !== undefined) {
            writer.uint32(25).double(message.speed);
        }
        if (message.volume !== undefined) {
            writer.uint32(33).double(message.volume);
        }
        if (message.role !== undefined) {
            writer.uint32(42).string(message.role);
        }
        if (message.pitchShift !== undefined) {
            writer.uint32(49).double(message.pitchShift);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHints);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voice = reader.string();
                    break;
                case 2:
                    message.audioTemplate = exports.AudioTemplate.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.speed = reader.double();
                    break;
                case 4:
                    message.volume = reader.double();
                    break;
                case 5:
                    message.role = reader.string();
                    break;
                case 6:
                    message.pitchShift = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHints);
        message.voice =
            object.voice !== undefined && object.voice !== null
                ? String(object.voice)
                : undefined;
        message.audioTemplate =
            object.audioTemplate !== undefined && object.audioTemplate !== null
                ? exports.AudioTemplate.fromJSON(object.audioTemplate)
                : undefined;
        message.speed =
            object.speed !== undefined && object.speed !== null
                ? Number(object.speed)
                : undefined;
        message.volume =
            object.volume !== undefined && object.volume !== null
                ? Number(object.volume)
                : undefined;
        message.role =
            object.role !== undefined && object.role !== null
                ? String(object.role)
                : undefined;
        message.pitchShift =
            object.pitchShift !== undefined && object.pitchShift !== null
                ? Number(object.pitchShift)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.voice !== undefined && (obj.voice = message.voice);
        message.audioTemplate !== undefined &&
            (obj.audioTemplate = message.audioTemplate
                ? exports.AudioTemplate.toJSON(message.audioTemplate)
                : undefined);
        message.speed !== undefined && (obj.speed = message.speed);
        message.volume !== undefined && (obj.volume = message.volume);
        message.role !== undefined && (obj.role = message.role);
        message.pitchShift !== undefined && (obj.pitchShift = message.pitchShift);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseHints);
        message.voice = (_a = object.voice) !== null && _a !== void 0 ? _a : undefined;
        message.audioTemplate =
            object.audioTemplate !== undefined && object.audioTemplate !== null
                ? exports.AudioTemplate.fromPartial(object.audioTemplate)
                : undefined;
        message.speed = (_b = object.speed) !== null && _b !== void 0 ? _b : undefined;
        message.volume = (_c = object.volume) !== null && _c !== void 0 ? _c : undefined;
        message.role = (_d = object.role) !== null && _d !== void 0 ? _d : undefined;
        message.pitchShift = (_e = object.pitchShift) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Hints.$type, exports.Hints);
const baseUtteranceSynthesisRequest = {
    $type: "speechkit.tts.v3.UtteranceSynthesisRequest",
    model: "",
    loudnessNormalizationType: 0,
    unsafeMode: false,
};
exports.UtteranceSynthesisRequest = {
    $type: "speechkit.tts.v3.UtteranceSynthesisRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.model !== "") {
            writer.uint32(10).string(message.model);
        }
        if (message.text !== undefined) {
            writer.uint32(18).string(message.text);
        }
        if (message.textTemplate !== undefined) {
            exports.TextTemplate.encode(message.textTemplate, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.hints) {
            exports.Hints.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.outputAudioSpec !== undefined) {
            exports.AudioFormatOptions.encode(message.outputAudioSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.loudnessNormalizationType !== 0) {
            writer.uint32(48).int32(message.loudnessNormalizationType);
        }
        if (message.unsafeMode === true) {
            writer.uint32(56).bool(message.unsafeMode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUtteranceSynthesisRequest);
        message.hints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.model = reader.string();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
                    message.textTemplate = exports.TextTemplate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hints.push(exports.Hints.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.outputAudioSpec = exports.AudioFormatOptions.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.loudnessNormalizationType = reader.int32();
                    break;
                case 7:
                    message.unsafeMode = reader.bool();
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
        const message = Object.assign({}, baseUtteranceSynthesisRequest);
        message.model =
            object.model !== undefined && object.model !== null
                ? String(object.model)
                : "";
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : undefined;
        message.textTemplate =
            object.textTemplate !== undefined && object.textTemplate !== null
                ? exports.TextTemplate.fromJSON(object.textTemplate)
                : undefined;
        message.hints = ((_a = object.hints) !== null && _a !== void 0 ? _a : []).map((e) => exports.Hints.fromJSON(e));
        message.outputAudioSpec =
            object.outputAudioSpec !== undefined && object.outputAudioSpec !== null
                ? exports.AudioFormatOptions.fromJSON(object.outputAudioSpec)
                : undefined;
        message.loudnessNormalizationType =
            object.loudnessNormalizationType !== undefined &&
                object.loudnessNormalizationType !== null
                ? utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON(object.loudnessNormalizationType)
                : 0;
        message.unsafeMode =
            object.unsafeMode !== undefined && object.unsafeMode !== null
                ? Boolean(object.unsafeMode)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.model !== undefined && (obj.model = message.model);
        message.text !== undefined && (obj.text = message.text);
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate
                ? exports.TextTemplate.toJSON(message.textTemplate)
                : undefined);
        if (message.hints) {
            obj.hints = message.hints.map((e) => (e ? exports.Hints.toJSON(e) : undefined));
        }
        else {
            obj.hints = [];
        }
        message.outputAudioSpec !== undefined &&
            (obj.outputAudioSpec = message.outputAudioSpec
                ? exports.AudioFormatOptions.toJSON(message.outputAudioSpec)
                : undefined);
        message.loudnessNormalizationType !== undefined &&
            (obj.loudnessNormalizationType =
                utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON(message.loudnessNormalizationType));
        message.unsafeMode !== undefined && (obj.unsafeMode = message.unsafeMode);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUtteranceSynthesisRequest);
        message.model = (_a = object.model) !== null && _a !== void 0 ? _a : "";
        message.text = (_b = object.text) !== null && _b !== void 0 ? _b : undefined;
        message.textTemplate =
            object.textTemplate !== undefined && object.textTemplate !== null
                ? exports.TextTemplate.fromPartial(object.textTemplate)
                : undefined;
        message.hints = ((_c = object.hints) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Hints.fromPartial(e))) || [];
        message.outputAudioSpec =
            object.outputAudioSpec !== undefined && object.outputAudioSpec !== null
                ? exports.AudioFormatOptions.fromPartial(object.outputAudioSpec)
                : undefined;
        message.loudnessNormalizationType = (_d = object.loudnessNormalizationType) !== null && _d !== void 0 ? _d : 0;
        message.unsafeMode = (_e = object.unsafeMode) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UtteranceSynthesisRequest.$type, exports.UtteranceSynthesisRequest);
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
