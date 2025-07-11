"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = exports.ClassAnnotation = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.ai.vision.v1";
const baseClassAnnotation = {
    $type: "yandex.cloud.ai.vision.v1.ClassAnnotation",
};
exports.ClassAnnotation = {
    $type: "yandex.cloud.ai.vision.v1.ClassAnnotation",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.properties) {
            exports.Property.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClassAnnotation);
        message.properties = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.properties.push(exports.Property.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseClassAnnotation);
        message.properties = ((_a = object.properties) !== null && _a !== void 0 ? _a : []).map((e) => exports.Property.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.properties) {
            obj.properties = message.properties.map((e) => e ? exports.Property.toJSON(e) : undefined);
        }
        else {
            obj.properties = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClassAnnotation);
        message.properties =
            ((_a = object.properties) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Property.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClassAnnotation.$type, exports.ClassAnnotation);
const baseProperty = {
    $type: "yandex.cloud.ai.vision.v1.Property",
    name: "",
    probability: 0,
};
exports.Property = {
    $type: "yandex.cloud.ai.vision.v1.Property",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.probability !== 0) {
            writer.uint32(17).double(message.probability);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProperty);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.probability = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProperty);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.probability =
            object.probability !== undefined && object.probability !== null
                ? Number(object.probability)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.probability !== undefined &&
            (obj.probability = message.probability);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseProperty);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.probability = (_b = object.probability) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Property.$type, exports.Property);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
