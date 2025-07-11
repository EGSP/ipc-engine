"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationContext = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.apploadbalancer.v1";
const baseValidationContext = {
    $type: "yandex.cloud.apploadbalancer.v1.ValidationContext",
};
exports.ValidationContext = {
    $type: "yandex.cloud.apploadbalancer.v1.ValidationContext",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.trustedCaId !== undefined) {
            writer.uint32(10).string(message.trustedCaId);
        }
        if (message.trustedCaBytes !== undefined) {
            writer.uint32(18).string(message.trustedCaBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidationContext);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trustedCaId = reader.string();
                    break;
                case 2:
                    message.trustedCaBytes = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidationContext);
        message.trustedCaId =
            object.trustedCaId !== undefined && object.trustedCaId !== null
                ? String(object.trustedCaId)
                : undefined;
        message.trustedCaBytes =
            object.trustedCaBytes !== undefined && object.trustedCaBytes !== null
                ? String(object.trustedCaBytes)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.trustedCaId !== undefined &&
            (obj.trustedCaId = message.trustedCaId);
        message.trustedCaBytes !== undefined &&
            (obj.trustedCaBytes = message.trustedCaBytes);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseValidationContext);
        message.trustedCaId = (_a = object.trustedCaId) !== null && _a !== void 0 ? _a : undefined;
        message.trustedCaBytes = (_b = object.trustedCaBytes) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ValidationContext.$type, exports.ValidationContext);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
