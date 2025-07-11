"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backup = exports.backup_BackupTypeToJSON = exports.backup_BackupTypeFromJSON = exports.Backup_BackupType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.mdb.mongodb.v1";
var Backup_BackupType;
(function (Backup_BackupType) {
    Backup_BackupType[Backup_BackupType["BACKUP_TYPE_UNSPECIFIED"] = 0] = "BACKUP_TYPE_UNSPECIFIED";
    /** AUTOMATED - Backup created by automated daily schedule */
    Backup_BackupType[Backup_BackupType["AUTOMATED"] = 1] = "AUTOMATED";
    /** MANUAL - Backup created by user request */
    Backup_BackupType[Backup_BackupType["MANUAL"] = 2] = "MANUAL";
    Backup_BackupType[Backup_BackupType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_BackupType = exports.Backup_BackupType || (exports.Backup_BackupType = {}));
function backup_BackupTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "BACKUP_TYPE_UNSPECIFIED":
            return Backup_BackupType.BACKUP_TYPE_UNSPECIFIED;
        case 1:
        case "AUTOMATED":
            return Backup_BackupType.AUTOMATED;
        case 2:
        case "MANUAL":
            return Backup_BackupType.MANUAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Backup_BackupType.UNRECOGNIZED;
    }
}
exports.backup_BackupTypeFromJSON = backup_BackupTypeFromJSON;
function backup_BackupTypeToJSON(object) {
    switch (object) {
        case Backup_BackupType.BACKUP_TYPE_UNSPECIFIED:
            return "BACKUP_TYPE_UNSPECIFIED";
        case Backup_BackupType.AUTOMATED:
            return "AUTOMATED";
        case Backup_BackupType.MANUAL:
            return "MANUAL";
        default:
            return "UNKNOWN";
    }
}
exports.backup_BackupTypeToJSON = backup_BackupTypeToJSON;
const baseBackup = {
    $type: "yandex.cloud.mdb.mongodb.v1.Backup",
    id: "",
    folderId: "",
    sourceClusterId: "",
    sourceShardNames: "",
    size: 0,
    type: 0,
};
exports.Backup = {
    $type: "yandex.cloud.mdb.mongodb.v1.Backup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.sourceClusterId !== "") {
            writer.uint32(34).string(message.sourceClusterId);
        }
        if (message.startedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.sourceShardNames) {
            writer.uint32(50).string(v);
        }
        if (message.size !== 0) {
            writer.uint32(56).int64(message.size);
        }
        if (message.type !== 0) {
            writer.uint32(64).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackup);
        message.sourceShardNames = [];
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sourceClusterId = reader.string();
                    break;
                case 5:
                    message.startedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.sourceShardNames.push(reader.string());
                    break;
                case 7:
                    message.size = longToNumber(reader.int64());
                    break;
                case 8:
                    message.type = reader.int32();
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
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.sourceClusterId =
            object.sourceClusterId !== undefined && object.sourceClusterId !== null
                ? String(object.sourceClusterId)
                : "";
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.sourceShardNames = ((_a = object.sourceShardNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? backup_BackupTypeFromJSON(object.type)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.sourceClusterId !== undefined &&
            (obj.sourceClusterId = message.sourceClusterId);
        message.startedAt !== undefined &&
            (obj.startedAt = message.startedAt.toISOString());
        if (message.sourceShardNames) {
            obj.sourceShardNames = message.sourceShardNames.map((e) => e);
        }
        else {
            obj.sourceShardNames = [];
        }
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.type !== undefined &&
            (obj.type = backup_BackupTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseBackup);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.sourceClusterId = (_d = object.sourceClusterId) !== null && _d !== void 0 ? _d : "";
        message.startedAt = (_e = object.startedAt) !== null && _e !== void 0 ? _e : undefined;
        message.sourceShardNames = ((_f = object.sourceShardNames) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.size = (_g = object.size) !== null && _g !== void 0 ? _g : 0;
        message.type = (_h = object.type) !== null && _h !== void 0 ? _h : 0;
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
