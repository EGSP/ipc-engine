"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word = exports.Line = exports.Block_DetectedLanguage = exports.Block = exports.Entity = exports.TextAnnotation = exports.Vertex = exports.Polygon = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.ai.ocr.v1";
const basePolygon = { $type: "yandex.cloud.ai.ocr.v1.Polygon" };
exports.Polygon = {
    $type: "yandex.cloud.ai.ocr.v1.Polygon",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.vertices) {
            exports.Vertex.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolygon);
        message.vertices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vertices.push(exports.Vertex.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, basePolygon);
        message.vertices = ((_a = object.vertices) !== null && _a !== void 0 ? _a : []).map((e) => exports.Vertex.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.vertices) {
            obj.vertices = message.vertices.map((e) => e ? exports.Vertex.toJSON(e) : undefined);
        }
        else {
            obj.vertices = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePolygon);
        message.vertices = ((_a = object.vertices) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Vertex.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Polygon.$type, exports.Polygon);
const baseVertex = {
    $type: "yandex.cloud.ai.ocr.v1.Vertex",
    x: 0,
    y: 0,
};
exports.Vertex = {
    $type: "yandex.cloud.ai.ocr.v1.Vertex",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.x !== 0) {
            writer.uint32(8).int64(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(16).int64(message.y);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVertex);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.x = longToNumber(reader.int64());
                    break;
                case 2:
                    message.y = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVertex);
        message.x =
            object.x !== undefined && object.x !== null ? Number(object.x) : 0;
        message.y =
            object.y !== undefined && object.y !== null ? Number(object.y) : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.x !== undefined && (obj.x = Math.round(message.x));
        message.y !== undefined && (obj.y = Math.round(message.y));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseVertex);
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : 0;
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Vertex.$type, exports.Vertex);
const baseTextAnnotation = {
    $type: "yandex.cloud.ai.ocr.v1.TextAnnotation",
    width: 0,
    height: 0,
};
exports.TextAnnotation = {
    $type: "yandex.cloud.ai.ocr.v1.TextAnnotation",
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
        const message = Object.assign({}, baseTextAnnotation);
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
        const message = Object.assign({}, baseTextAnnotation);
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
        const message = Object.assign({}, baseTextAnnotation);
        message.width = (_a = object.width) !== null && _a !== void 0 ? _a : 0;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : 0;
        message.blocks = ((_c = object.blocks) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Block.fromPartial(e))) || [];
        message.entities = ((_d = object.entities) === null || _d === void 0 ? void 0 : _d.map((e) => exports.Entity.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TextAnnotation.$type, exports.TextAnnotation);
const baseEntity = {
    $type: "yandex.cloud.ai.ocr.v1.Entity",
    name: "",
    text: "",
};
exports.Entity = {
    $type: "yandex.cloud.ai.ocr.v1.Entity",
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
const baseBlock = { $type: "yandex.cloud.ai.ocr.v1.Block" };
exports.Block = {
    $type: "yandex.cloud.ai.ocr.v1.Block",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.boundingBox !== undefined) {
            exports.Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lines) {
            exports.Line.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.languages) {
            exports.Block_DetectedLanguage.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBlock);
        message.lines = [];
        message.languages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = exports.Polygon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lines.push(exports.Line.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.languages.push(exports.Block_DetectedLanguage.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseBlock);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? exports.Polygon.fromJSON(object.boundingBox)
                : undefined;
        message.lines = ((_a = object.lines) !== null && _a !== void 0 ? _a : []).map((e) => exports.Line.fromJSON(e));
        message.languages = ((_b = object.languages) !== null && _b !== void 0 ? _b : []).map((e) => exports.Block_DetectedLanguage.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? exports.Polygon.toJSON(message.boundingBox)
                : undefined);
        if (message.lines) {
            obj.lines = message.lines.map((e) => (e ? exports.Line.toJSON(e) : undefined));
        }
        else {
            obj.lines = [];
        }
        if (message.languages) {
            obj.languages = message.languages.map((e) => e ? exports.Block_DetectedLanguage.toJSON(e) : undefined);
        }
        else {
            obj.languages = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseBlock);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? exports.Polygon.fromPartial(object.boundingBox)
                : undefined;
        message.lines = ((_a = object.lines) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Line.fromPartial(e))) || [];
        message.languages =
            ((_b = object.languages) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Block_DetectedLanguage.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Block.$type, exports.Block);
const baseBlock_DetectedLanguage = {
    $type: "yandex.cloud.ai.ocr.v1.Block.DetectedLanguage",
    languageCode: "",
};
exports.Block_DetectedLanguage = {
    $type: "yandex.cloud.ai.ocr.v1.Block.DetectedLanguage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.languageCode !== "") {
            writer.uint32(10).string(message.languageCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBlock_DetectedLanguage);
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
        const message = Object.assign({}, baseBlock_DetectedLanguage);
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
        const message = Object.assign({}, baseBlock_DetectedLanguage);
        message.languageCode = (_a = object.languageCode) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Block_DetectedLanguage.$type, exports.Block_DetectedLanguage);
const baseLine = { $type: "yandex.cloud.ai.ocr.v1.Line", text: "" };
exports.Line = {
    $type: "yandex.cloud.ai.ocr.v1.Line",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.boundingBox !== undefined) {
            exports.Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        for (const v of message.words) {
            exports.Word.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.boundingBox = exports.Polygon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
                    message.words.push(exports.Word.decode(reader, reader.uint32()));
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
                ? exports.Polygon.fromJSON(object.boundingBox)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        message.words = ((_a = object.words) !== null && _a !== void 0 ? _a : []).map((e) => exports.Word.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? exports.Polygon.toJSON(message.boundingBox)
                : undefined);
        message.text !== undefined && (obj.text = message.text);
        if (message.words) {
            obj.words = message.words.map((e) => (e ? exports.Word.toJSON(e) : undefined));
        }
        else {
            obj.words = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLine);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? exports.Polygon.fromPartial(object.boundingBox)
                : undefined;
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        message.words = ((_b = object.words) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Word.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Line.$type, exports.Line);
const baseWord = {
    $type: "yandex.cloud.ai.ocr.v1.Word",
    text: "",
    entityIndex: 0,
};
exports.Word = {
    $type: "yandex.cloud.ai.ocr.v1.Word",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.boundingBox !== undefined) {
            exports.Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        if (message.entityIndex !== 0) {
            writer.uint32(24).int64(message.entityIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = exports.Polygon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseWord);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? exports.Polygon.fromJSON(object.boundingBox)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
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
                ? exports.Polygon.toJSON(message.boundingBox)
                : undefined);
        message.text !== undefined && (obj.text = message.text);
        message.entityIndex !== undefined &&
            (obj.entityIndex = Math.round(message.entityIndex));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseWord);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? exports.Polygon.fromPartial(object.boundingBox)
                : undefined;
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        message.entityIndex = (_b = object.entityIndex) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Word.$type, exports.Word);
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
