"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word_DetectedLanguage = exports.Word = exports.Line = exports.Block = exports.Entity = exports.Page = exports.TextAnnotation = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const primitives_1 = require("../../../../../yandex/cloud/ai/vision/v1/primitives");
exports.protobufPackage = "yandex.cloud.ai.vision.v1";
const baseTextAnnotation = {
    $type: "yandex.cloud.ai.vision.v1.TextAnnotation",
};
exports.TextAnnotation = {
    $type: "yandex.cloud.ai.vision.v1.TextAnnotation",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.pages) {
            exports.Page.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTextAnnotation);
        message.pages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pages.push(exports.Page.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseTextAnnotation);
        message.pages = ((_a = object.pages) !== null && _a !== void 0 ? _a : []).map((e) => exports.Page.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.pages) {
            obj.pages = message.pages.map((e) => (e ? exports.Page.toJSON(e) : undefined));
        }
        else {
            obj.pages = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTextAnnotation);
        message.pages = ((_a = object.pages) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Page.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TextAnnotation.$type, exports.TextAnnotation);
const basePage = {
    $type: "yandex.cloud.ai.vision.v1.Page",
    width: 0,
    height: 0,
};
exports.Page = {
    $type: "yandex.cloud.ai.vision.v1.Page",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.width !== 0) {
            writer.uint32(8).int64(message.width);
        }
        if (message.height !== 0) {
            writer.uint32(16).int64(message.height);
        }
        for (const v of message.blocks) {
            exports.Block.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.entities) {
            exports.Entity.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePage);
        message.blocks = [];
        message.entities = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.width = longToNumber(reader.int64());
                    break;
                case 2:
                    message.height = longToNumber(reader.int64());
                    break;
                case 3:
                    message.blocks.push(exports.Block.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.entities.push(exports.Entity.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, basePage);
        message.width =
            object.width !== undefined && object.width !== null
                ? Number(object.width)
                : 0;
        message.height =
            object.height !== undefined && object.height !== null
                ? Number(object.height)
                : 0;
        message.blocks = ((_a = object.blocks) !== null && _a !== void 0 ? _a : []).map((e) => exports.Block.fromJSON(e));
        message.entities = ((_b = object.entities) !== null && _b !== void 0 ? _b : []).map((e) => exports.Entity.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.width !== undefined && (obj.width = Math.round(message.width));
        message.height !== undefined && (obj.height = Math.round(message.height));
        if (message.blocks) {
            obj.blocks = message.blocks.map((e) => (e ? exports.Block.toJSON(e) : undefined));
        }
        else {
            obj.blocks = [];
        }
        if (message.entities) {
            obj.entities = message.entities.map((e) => e ? exports.Entity.toJSON(e) : undefined);
        }
        else {
            obj.entities = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, basePage);
        message.width = (_a = object.width) !== null && _a !== void 0 ? _a : 0;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : 0;
        message.blocks = ((_c = object.blocks) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Block.fromPartial(e))) || [];
        message.entities = ((_d = object.entities) === null || _d === void 0 ? void 0 : _d.map((e) => exports.Entity.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Page.$type, exports.Page);
const baseEntity = {
    $type: "yandex.cloud.ai.vision.v1.Entity",
    name: "",
    text: "",
};
exports.Entity = {
    $type: "yandex.cloud.ai.vision.v1.Entity",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEntity);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEntity);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseEntity);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.text = (_b = object.text) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Entity.$type, exports.Entity);
const baseBlock = { $type: "yandex.cloud.ai.vision.v1.Block" };
exports.Block = {
    $type: "yandex.cloud.ai.vision.v1.Block",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.boundingBox !== undefined) {
            primitives_1.Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lines) {
            exports.Line.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBlock);
        message.lines = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = primitives_1.Polygon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lines.push(exports.Line.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseBlock);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? primitives_1.Polygon.fromJSON(object.boundingBox)
                : undefined;
        message.lines = ((_a = object.lines) !== null && _a !== void 0 ? _a : []).map((e) => exports.Line.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? primitives_1.Polygon.toJSON(message.boundingBox)
                : undefined);
        if (message.lines) {
            obj.lines = message.lines.map((e) => (e ? exports.Line.toJSON(e) : undefined));
        }
        else {
            obj.lines = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseBlock);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? primitives_1.Polygon.fromPartial(object.boundingBox)
                : undefined;
        message.lines = ((_a = object.lines) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Line.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Block.$type, exports.Block);
const baseLine = {
    $type: "yandex.cloud.ai.vision.v1.Line",
    confidence: 0,
};
exports.Line = {
    $type: "yandex.cloud.ai.vision.v1.Line",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.boundingBox !== undefined) {
            primitives_1.Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.words) {
            exports.Word.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.confidence !== 0) {
            writer.uint32(25).double(message.confidence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLine);
        message.words = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = primitives_1.Polygon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.words.push(exports.Word.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.confidence = reader.double();
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
        const message = Object.assign({}, baseLine);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? primitives_1.Polygon.fromJSON(object.boundingBox)
                : undefined;
        message.words = ((_a = object.words) !== null && _a !== void 0 ? _a : []).map((e) => exports.Word.fromJSON(e));
        message.confidence =
            object.confidence !== undefined && object.confidence !== null
                ? Number(object.confidence)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? primitives_1.Polygon.toJSON(message.boundingBox)
                : undefined);
        if (message.words) {
            obj.words = message.words.map((e) => (e ? exports.Word.toJSON(e) : undefined));
        }
        else {
            obj.words = [];
        }
        message.confidence !== undefined && (obj.confidence = message.confidence);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLine);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? primitives_1.Polygon.fromPartial(object.boundingBox)
                : undefined;
        message.words = ((_a = object.words) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Word.fromPartial(e))) || [];
        message.confidence = (_b = object.confidence) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Line.$type, exports.Line);
const baseWord = {
    $type: "yandex.cloud.ai.vision.v1.Word",
    text: "",
    confidence: 0,
    entityIndex: 0,
};
exports.Word = {
    $type: "yandex.cloud.ai.vision.v1.Word",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.boundingBox !== undefined) {
            primitives_1.Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        if (message.confidence !== 0) {
            writer.uint32(25).double(message.confidence);
        }
        for (const v of message.languages) {
            exports.Word_DetectedLanguage.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.entityIndex !== 0) {
            writer.uint32(40).int64(message.entityIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWord);
        message.languages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = primitives_1.Polygon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
                    message.confidence = reader.double();
                    break;
                case 4:
                    message.languages.push(exports.Word_DetectedLanguage.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.entityIndex = longToNumber(reader.int64());
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
        const message = Object.assign({}, baseWord);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? primitives_1.Polygon.fromJSON(object.boundingBox)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        message.confidence =
            object.confidence !== undefined && object.confidence !== null
                ? Number(object.confidence)
                : 0;
        message.languages = ((_a = object.languages) !== null && _a !== void 0 ? _a : []).map((e) => exports.Word_DetectedLanguage.fromJSON(e));
        message.entityIndex =
            object.entityIndex !== undefined && object.entityIndex !== null
                ? Number(object.entityIndex)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? primitives_1.Polygon.toJSON(message.boundingBox)
                : undefined);
        message.text !== undefined && (obj.text = message.text);
        message.confidence !== undefined && (obj.confidence = message.confidence);
        if (message.languages) {
            obj.languages = message.languages.map((e) => e ? exports.Word_DetectedLanguage.toJSON(e) : undefined);
        }
        else {
            obj.languages = [];
        }
        message.entityIndex !== undefined &&
            (obj.entityIndex = Math.round(message.entityIndex));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseWord);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? primitives_1.Polygon.fromPartial(object.boundingBox)
                : undefined;
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        message.confidence = (_b = object.confidence) !== null && _b !== void 0 ? _b : 0;
        message.languages =
            ((_c = object.languages) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Word_DetectedLanguage.fromPartial(e))) || [];
        message.entityIndex = (_d = object.entityIndex) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Word.$type, exports.Word);
const baseWord_DetectedLanguage = {
    $type: "yandex.cloud.ai.vision.v1.Word.DetectedLanguage",
    languageCode: "",
    confidence: 0,
};
exports.Word_DetectedLanguage = {
    $type: "yandex.cloud.ai.vision.v1.Word.DetectedLanguage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.languageCode !== "") {
            writer.uint32(10).string(message.languageCode);
        }
        if (message.confidence !== 0) {
            writer.uint32(17).double(message.confidence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWord_DetectedLanguage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.languageCode = reader.string();
                    break;
                case 2:
                    message.confidence = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWord_DetectedLanguage);
        message.languageCode =
            object.languageCode !== undefined && object.languageCode !== null
                ? String(object.languageCode)
                : "";
        message.confidence =
            object.confidence !== undefined && object.confidence !== null
                ? Number(object.confidence)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.languageCode !== undefined &&
            (obj.languageCode = message.languageCode);
        message.confidence !== undefined && (obj.confidence = message.confidence);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseWord_DetectedLanguage);
        message.languageCode = (_a = object.languageCode) !== null && _a !== void 0 ? _a : "";
        message.confidence = (_b = object.confidence) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Word_DetectedLanguage.$type, exports.Word_DetectedLanguage);
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
