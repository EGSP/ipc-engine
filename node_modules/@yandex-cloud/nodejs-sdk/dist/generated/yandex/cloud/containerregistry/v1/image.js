"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const blob_1 = require("../../../../yandex/cloud/containerregistry/v1/blob");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.containerregistry.v1";
const baseImage = {
    $type: "yandex.cloud.containerregistry.v1.Image",
    id: "",
    name: "",
    digest: "",
    compressedSize: 0,
    tags: "",
};
exports.Image = {
    $type: "yandex.cloud.containerregistry.v1.Image",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.digest !== "") {
            writer.uint32(26).string(message.digest);
        }
        if (message.compressedSize !== 0) {
            writer.uint32(32).int64(message.compressedSize);
        }
        if (message.config !== undefined) {
            blob_1.Blob.encode(message.config, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.layers) {
            blob_1.Blob.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.tags) {
            writer.uint32(58).string(v);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseImage);
        message.layers = [];
        message.tags = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.digest = reader.string();
                    break;
                case 4:
                    message.compressedSize = longToNumber(reader.int64());
                    break;
                case 5:
                    message.config = blob_1.Blob.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.layers.push(blob_1.Blob.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.tags.push(reader.string());
                    break;
                case 8:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseImage);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.digest =
            object.digest !== undefined && object.digest !== null
                ? String(object.digest)
                : "";
        message.compressedSize =
            object.compressedSize !== undefined && object.compressedSize !== null
                ? Number(object.compressedSize)
                : 0;
        message.config =
            object.config !== undefined && object.config !== null
                ? blob_1.Blob.fromJSON(object.config)
                : undefined;
        message.layers = ((_a = object.layers) !== null && _a !== void 0 ? _a : []).map((e) => blob_1.Blob.fromJSON(e));
        message.tags = ((_b = object.tags) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.digest !== undefined && (obj.digest = message.digest);
        message.compressedSize !== undefined &&
            (obj.compressedSize = Math.round(message.compressedSize));
        message.config !== undefined &&
            (obj.config = message.config ? blob_1.Blob.toJSON(message.config) : undefined);
        if (message.layers) {
            obj.layers = message.layers.map((e) => (e ? blob_1.Blob.toJSON(e) : undefined));
        }
        else {
            obj.layers = [];
        }
        if (message.tags) {
            obj.tags = message.tags.map((e) => e);
        }
        else {
            obj.tags = [];
        }
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseImage);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.digest = (_c = object.digest) !== null && _c !== void 0 ? _c : "";
        message.compressedSize = (_d = object.compressedSize) !== null && _d !== void 0 ? _d : 0;
        message.config =
            object.config !== undefined && object.config !== null
                ? blob_1.Blob.fromPartial(object.config)
                : undefined;
        message.layers = ((_e = object.layers) === null || _e === void 0 ? void 0 : _e.map((e) => blob_1.Blob.fromPartial(e))) || [];
        message.tags = ((_f = object.tags) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Image.$type, exports.Image);
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
