"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginGroup = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const origin_1 = require("../../../../yandex/cloud/cdn/v1/origin");
exports.protobufPackage = "yandex.cloud.cdn.v1";
const baseOriginGroup = {
    $type: "yandex.cloud.cdn.v1.OriginGroup",
    id: 0,
    folderId: "",
    name: "",
    useNext: false,
};
exports.OriginGroup = {
    $type: "yandex.cloud.cdn.v1.OriginGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.useNext === true) {
            writer.uint32(32).bool(message.useNext);
        }
        for (const v of message.origins) {
            origin_1.Origin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOriginGroup);
        message.origins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.int64());
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.useNext = reader.bool();
                    break;
                case 5:
                    message.origins.push(origin_1.Origin.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseOriginGroup);
        message.id =
            object.id !== undefined && object.id !== null ? Number(object.id) : 0;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.useNext =
            object.useNext !== undefined && object.useNext !== null
                ? Boolean(object.useNext)
                : false;
        message.origins = ((_a = object.origins) !== null && _a !== void 0 ? _a : []).map((e) => origin_1.Origin.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.useNext !== undefined && (obj.useNext = message.useNext);
        if (message.origins) {
            obj.origins = message.origins.map((e) => e ? origin_1.Origin.toJSON(e) : undefined);
        }
        else {
            obj.origins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseOriginGroup);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.useNext = (_d = object.useNext) !== null && _d !== void 0 ? _d : false;
        message.origins = ((_e = object.origins) === null || _e === void 0 ? void 0 : _e.map((e) => origin_1.Origin.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OriginGroup.$type, exports.OriginGroup);
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
