"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blob = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.containerregistry.v1";
const baseBlob = {
    $type: "yandex.cloud.containerregistry.v1.Blob",
    id: "",
    digest: "",
    size: 0,
    urls: "",
};
exports.Blob = {
    $type: "yandex.cloud.containerregistry.v1.Blob",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.digest !== "") {
            writer.uint32(18).string(message.digest);
        }
        if (message.size !== 0) {
            writer.uint32(24).int64(message.size);
        }
        for (const v of message.urls) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBlob);
        message.urls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.digest = reader.string();
                    break;
                case 3:
                    message.size = longToNumber(reader.int64());
                    break;
                case 4:
                    message.urls.push(reader.string());
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
        const message = Object.assign({}, baseBlob);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.digest =
            object.digest !== undefined && object.digest !== null
                ? String(object.digest)
                : "";
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.urls = ((_a = object.urls) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.digest !== undefined && (obj.digest = message.digest);
        message.size !== undefined && (obj.size = Math.round(message.size));
        if (message.urls) {
            obj.urls = message.urls.map((e) => e);
        }
        else {
            obj.urls = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseBlob);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.digest = (_b = object.digest) !== null && _b !== void 0 ? _b : "";
        message.size = (_c = object.size) !== null && _c !== void 0 ? _c : 0;
        message.urls = ((_d = object.urls) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Blob.$type, exports.Blob);
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
