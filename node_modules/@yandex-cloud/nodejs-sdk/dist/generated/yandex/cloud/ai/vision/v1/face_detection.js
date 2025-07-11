"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Face = exports.FaceAnnotation = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const primitives_1 = require("../../../../../yandex/cloud/ai/vision/v1/primitives");
exports.protobufPackage = "yandex.cloud.ai.vision.v1";
const baseFaceAnnotation = {
    $type: "yandex.cloud.ai.vision.v1.FaceAnnotation",
};
exports.FaceAnnotation = {
    $type: "yandex.cloud.ai.vision.v1.FaceAnnotation",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.faces) {
            exports.Face.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFaceAnnotation);
        message.faces = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.faces.push(exports.Face.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseFaceAnnotation);
        message.faces = ((_a = object.faces) !== null && _a !== void 0 ? _a : []).map((e) => exports.Face.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.faces) {
            obj.faces = message.faces.map((e) => (e ? exports.Face.toJSON(e) : undefined));
        }
        else {
            obj.faces = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseFaceAnnotation);
        message.faces = ((_a = object.faces) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Face.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.FaceAnnotation.$type, exports.FaceAnnotation);
const baseFace = { $type: "yandex.cloud.ai.vision.v1.Face" };
exports.Face = {
    $type: "yandex.cloud.ai.vision.v1.Face",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.boundingBox !== undefined) {
            primitives_1.Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFace);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = primitives_1.Polygon.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFace);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? primitives_1.Polygon.fromJSON(object.boundingBox)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? primitives_1.Polygon.toJSON(message.boundingBox)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseFace);
        message.boundingBox =
            object.boundingBox !== undefined && object.boundingBox !== null
                ? primitives_1.Polygon.fromPartial(object.boundingBox)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Face.$type, exports.Face);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
