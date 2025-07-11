"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseHostType = {
    $type: "yandex.cloud.compute.v1.HostType",
    id: "",
    cores: 0,
    memory: 0,
    disks: 0,
    diskSize: 0,
};
exports.HostType = {
    $type: "yandex.cloud.compute.v1.HostType",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.cores !== 0) {
            writer.uint32(16).int64(message.cores);
        }
        if (message.memory !== 0) {
            writer.uint32(24).int64(message.memory);
        }
        if (message.disks !== 0) {
            writer.uint32(32).int64(message.disks);
        }
        if (message.diskSize !== 0) {
            writer.uint32(40).int64(message.diskSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHostType);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.cores = longToNumber(reader.int64());
                    break;
                case 3:
                    message.memory = longToNumber(reader.int64());
                    break;
                case 4:
                    message.disks = longToNumber(reader.int64());
                    break;
                case 5:
                    message.diskSize = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHostType);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.cores =
            object.cores !== undefined && object.cores !== null
                ? Number(object.cores)
                : 0;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? Number(object.memory)
                : 0;
        message.disks =
            object.disks !== undefined && object.disks !== null
                ? Number(object.disks)
                : 0;
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null
                ? Number(object.diskSize)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.cores !== undefined && (obj.cores = Math.round(message.cores));
        message.memory !== undefined && (obj.memory = Math.round(message.memory));
        message.disks !== undefined && (obj.disks = Math.round(message.disks));
        message.diskSize !== undefined &&
            (obj.diskSize = Math.round(message.diskSize));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseHostType);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.cores = (_b = object.cores) !== null && _b !== void 0 ? _b : 0;
        message.memory = (_c = object.memory) !== null && _c !== void 0 ? _c : 0;
        message.disks = (_d = object.disks) !== null && _d !== void 0 ? _d : 0;
        message.diskSize = (_e = object.diskSize) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HostType.$type, exports.HostType);
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
