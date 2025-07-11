"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeExecutionErrorDetails = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.datasphere.v1";
const baseNodeExecutionErrorDetails = {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionErrorDetails",
    errorName: "",
    errorMessage: "",
    traceback: "",
};
exports.NodeExecutionErrorDetails = {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionErrorDetails",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.errorName !== "") {
            writer.uint32(10).string(message.errorName);
        }
        if (message.errorMessage !== "") {
            writer.uint32(18).string(message.errorMessage);
        }
        for (const v of message.traceback) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNodeExecutionErrorDetails);
        message.traceback = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.errorName = reader.string();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                case 3:
                    message.traceback.push(reader.string());
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
        const message = Object.assign({}, baseNodeExecutionErrorDetails);
        message.errorName =
            object.errorName !== undefined && object.errorName !== null
                ? String(object.errorName)
                : "";
        message.errorMessage =
            object.errorMessage !== undefined && object.errorMessage !== null
                ? String(object.errorMessage)
                : "";
        message.traceback = ((_a = object.traceback) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.errorName !== undefined && (obj.errorName = message.errorName);
        message.errorMessage !== undefined &&
            (obj.errorMessage = message.errorMessage);
        if (message.traceback) {
            obj.traceback = message.traceback.map((e) => e);
        }
        else {
            obj.traceback = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseNodeExecutionErrorDetails);
        message.errorName = (_a = object.errorName) !== null && _a !== void 0 ? _a : "";
        message.errorMessage = (_b = object.errorMessage) !== null && _b !== void 0 ? _b : "";
        message.traceback = ((_c = object.traceback) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeExecutionErrorDetails.$type, exports.NodeExecutionErrorDetails);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
