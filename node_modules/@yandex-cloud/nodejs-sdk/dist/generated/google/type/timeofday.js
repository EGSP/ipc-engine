"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOfDay = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.type";
const baseTimeOfDay = {
    $type: "google.type.TimeOfDay",
    hours: 0,
    minutes: 0,
    seconds: 0,
    nanos: 0,
};
exports.TimeOfDay = {
    $type: "google.type.TimeOfDay",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hours !== 0) {
            writer.uint32(8).int32(message.hours);
        }
        if (message.minutes !== 0) {
            writer.uint32(16).int32(message.minutes);
        }
        if (message.seconds !== 0) {
            writer.uint32(24).int32(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(32).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTimeOfDay);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hours = reader.int32();
                    break;
                case 2:
                    message.minutes = reader.int32();
                    break;
                case 3:
                    message.seconds = reader.int32();
                    break;
                case 4:
                    message.nanos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTimeOfDay);
        message.hours =
            object.hours !== undefined && object.hours !== null
                ? Number(object.hours)
                : 0;
        message.minutes =
            object.minutes !== undefined && object.minutes !== null
                ? Number(object.minutes)
                : 0;
        message.seconds =
            object.seconds !== undefined && object.seconds !== null
                ? Number(object.seconds)
                : 0;
        message.nanos =
            object.nanos !== undefined && object.nanos !== null
                ? Number(object.nanos)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hours !== undefined && (obj.hours = Math.round(message.hours));
        message.minutes !== undefined &&
            (obj.minutes = Math.round(message.minutes));
        message.seconds !== undefined &&
            (obj.seconds = Math.round(message.seconds));
        message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseTimeOfDay);
        message.hours = (_a = object.hours) !== null && _a !== void 0 ? _a : 0;
        message.minutes = (_b = object.minutes) !== null && _b !== void 0 ? _b : 0;
        message.seconds = (_c = object.seconds) !== null && _c !== void 0 ? _c : 0;
        message.nanos = (_d = object.nanos) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TimeOfDay.$type, exports.TimeOfDay);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
