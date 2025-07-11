"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backup = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.mdb.opensearch.v1";
const baseBackup = {
    $type: "yandex.cloud.mdb.opensearch.v1.Backup",
    id: "",
    folderId: "",
    sourceClusterId: "",
    indices: "",
    opensearchVersion: "",
    sizeBytes: 0,
    indicesTotal: 0,
};
exports.Backup = {
    $type: "yandex.cloud.mdb.opensearch.v1.Backup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.sourceClusterId !== "") {
            writer.uint32(26).string(message.sourceClusterId);
        }
        if (message.startedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.indices) {
            writer.uint32(50).string(v);
        }
        if (message.opensearchVersion !== "") {
            writer.uint32(58).string(message.opensearchVersion);
        }
        if (message.sizeBytes !== 0) {
            writer.uint32(64).int64(message.sizeBytes);
        }
        if (message.indicesTotal !== 0) {
            writer.uint32(72).int64(message.indicesTotal);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackup);
        message.indices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.sourceClusterId = reader.string();
                    break;
                case 4:
                    message.startedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.indices.push(reader.string());
                    break;
                case 7:
                    message.opensearchVersion = reader.string();
                    break;
                case 8:
                    message.sizeBytes = longToNumber(reader.int64());
                    break;
                case 9:
                    message.indicesTotal = longToNumber(reader.int64());
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
        const message = Object.assign({}, baseBackup);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.sourceClusterId =
            object.sourceClusterId !== undefined && object.sourceClusterId !== null
                ? String(object.sourceClusterId)
                : "";
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.indices = ((_a = object.indices) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.opensearchVersion =
            object.opensearchVersion !== undefined &&
                object.opensearchVersion !== null
                ? String(object.opensearchVersion)
                : "";
        message.sizeBytes =
            object.sizeBytes !== undefined && object.sizeBytes !== null
                ? Number(object.sizeBytes)
                : 0;
        message.indicesTotal =
            object.indicesTotal !== undefined && object.indicesTotal !== null
                ? Number(object.indicesTotal)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.sourceClusterId !== undefined &&
            (obj.sourceClusterId = message.sourceClusterId);
        message.startedAt !== undefined &&
            (obj.startedAt = message.startedAt.toISOString());
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        if (message.indices) {
            obj.indices = message.indices.map((e) => e);
        }
        else {
            obj.indices = [];
        }
        message.opensearchVersion !== undefined &&
            (obj.opensearchVersion = message.opensearchVersion);
        message.sizeBytes !== undefined &&
            (obj.sizeBytes = Math.round(message.sizeBytes));
        message.indicesTotal !== undefined &&
            (obj.indicesTotal = Math.round(message.indicesTotal));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseBackup);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.sourceClusterId = (_c = object.sourceClusterId) !== null && _c !== void 0 ? _c : "";
        message.startedAt = (_d = object.startedAt) !== null && _d !== void 0 ? _d : undefined;
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : undefined;
        message.indices = ((_f = object.indices) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.opensearchVersion = (_g = object.opensearchVersion) !== null && _g !== void 0 ? _g : "";
        message.sizeBytes = (_h = object.sizeBytes) !== null && _h !== void 0 ? _h : 0;
        message.indicesTotal = (_j = object.indicesTotal) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Backup.$type, exports.Backup);
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
