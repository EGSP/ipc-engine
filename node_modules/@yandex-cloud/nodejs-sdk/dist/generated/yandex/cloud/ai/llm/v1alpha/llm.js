"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.Message = exports.Alternative = exports.GenerationOptions = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.ai.llm.v1alpha";
const baseGenerationOptions = {
    $type: "yandex.cloud.ai.llm.v1alpha.GenerationOptions",
    partialResults: false,
};
exports.GenerationOptions = {
    $type: "yandex.cloud.ai.llm.v1alpha.GenerationOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.partialResults === true) {
            writer.uint32(8).bool(message.partialResults);
        }
        if (message.temperature !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.temperature }, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxTokens !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxTokens }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenerationOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partialResults = reader.bool();
                    break;
                case 2:
                    message.temperature = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.maxTokens = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenerationOptions);
        message.partialResults =
            object.partialResults !== undefined && object.partialResults !== null
                ? Boolean(object.partialResults)
                : false;
        message.temperature =
            object.temperature !== undefined && object.temperature !== null
                ? Number(object.temperature)
                : undefined;
        message.maxTokens =
            object.maxTokens !== undefined && object.maxTokens !== null
                ? Number(object.maxTokens)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.partialResults !== undefined &&
            (obj.partialResults = message.partialResults);
        message.temperature !== undefined &&
            (obj.temperature = message.temperature);
        message.maxTokens !== undefined && (obj.maxTokens = message.maxTokens);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGenerationOptions);
        message.partialResults = (_a = object.partialResults) !== null && _a !== void 0 ? _a : false;
        message.temperature = (_b = object.temperature) !== null && _b !== void 0 ? _b : undefined;
        message.maxTokens = (_c = object.maxTokens) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenerationOptions.$type, exports.GenerationOptions);
const baseAlternative = {
    $type: "yandex.cloud.ai.llm.v1alpha.Alternative",
    text: "",
    score: 0,
    numTokens: 0,
};
exports.Alternative = {
    $type: "yandex.cloud.ai.llm.v1alpha.Alternative",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        if (message.score !== 0) {
            writer.uint32(17).double(message.score);
        }
        if (message.numTokens !== 0) {
            writer.uint32(24).int64(message.numTokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAlternative);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.score = reader.double();
                    break;
                case 3:
                    message.numTokens = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAlternative);
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        message.score =
            object.score !== undefined && object.score !== null
                ? Number(object.score)
                : 0;
        message.numTokens =
            object.numTokens !== undefined && object.numTokens !== null
                ? Number(object.numTokens)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.text !== undefined && (obj.text = message.text);
        message.score !== undefined && (obj.score = message.score);
        message.numTokens !== undefined &&
            (obj.numTokens = Math.round(message.numTokens));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAlternative);
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        message.score = (_b = object.score) !== null && _b !== void 0 ? _b : 0;
        message.numTokens = (_c = object.numTokens) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Alternative.$type, exports.Alternative);
const baseMessage = {
    $type: "yandex.cloud.ai.llm.v1alpha.Message",
    role: "",
    text: "",
};
exports.Message = {
    $type: "yandex.cloud.ai.llm.v1alpha.Message",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.role !== "") {
            writer.uint32(10).string(message.role);
        }
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMessage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.role = reader.string();
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
        const message = Object.assign({}, baseMessage);
        message.role =
            object.role !== undefined && object.role !== null
                ? String(object.role)
                : "";
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.role !== undefined && (obj.role = message.role);
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMessage);
        message.role = (_a = object.role) !== null && _a !== void 0 ? _a : "";
        message.text = (_b = object.text) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Message.$type, exports.Message);
const baseToken = {
    $type: "yandex.cloud.ai.llm.v1alpha.Token",
    id: 0,
    text: "",
    special: false,
};
exports.Token = {
    $type: "yandex.cloud.ai.llm.v1alpha.Token",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        if (message.special === true) {
            writer.uint32(24).bool(message.special);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseToken);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.int64());
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
                    message.special = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseToken);
        message.id =
            object.id !== undefined && object.id !== null ? Number(object.id) : 0;
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        message.special =
            object.special !== undefined && object.special !== null
                ? Boolean(object.special)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.text !== undefined && (obj.text = message.text);
        message.special !== undefined && (obj.special = message.special);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseToken);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.text = (_b = object.text) !== null && _b !== void 0 ? _b : "";
        message.special = (_c = object.special) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Token.$type, exports.Token);
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
