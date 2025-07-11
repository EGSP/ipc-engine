"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../google/protobuf/any");
exports.protobufPackage = "google.rpc";
const baseStatus = { $type: "google.rpc.Status", code: 0, message: "" };
exports.Status = {
    $type: "google.rpc.Status",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        for (const v of message.details) {
            any_1.Any.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStatus);
        message.details = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.details.push(any_1.Any.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseStatus);
        message.code =
            object.code !== undefined && object.code !== null
                ? Number(object.code)
                : 0;
        message.message =
            object.message !== undefined && object.message !== null
                ? String(object.message)
                : "";
        message.details = ((_a = object.details) !== null && _a !== void 0 ? _a : []).map((e) => any_1.Any.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.message !== undefined && (obj.message = message.message);
        if (message.details) {
            obj.details = message.details.map((e) => (e ? any_1.Any.toJSON(e) : undefined));
        }
        else {
            obj.details = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseStatus);
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.details = ((_c = object.details) === null || _c === void 0 ? void 0 : _c.map((e) => any_1.Any.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Status.$type, exports.Status);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
