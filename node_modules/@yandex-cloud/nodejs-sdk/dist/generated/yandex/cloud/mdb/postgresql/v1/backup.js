"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backup = exports.backup_BackupCreationTypeToJSON = exports.backup_BackupCreationTypeFromJSON = exports.Backup_BackupCreationType = exports.backup_BackupMethodToJSON = exports.backup_BackupMethodFromJSON = exports.Backup_BackupMethod = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.mdb.postgresql.v1";
var Backup_BackupMethod;
(function (Backup_BackupMethod) {
    Backup_BackupMethod[Backup_BackupMethod["BACKUP_METHOD_UNSPECIFIED"] = 0] = "BACKUP_METHOD_UNSPECIFIED";
    /** BASE - Base backup */
    Backup_BackupMethod[Backup_BackupMethod["BASE"] = 1] = "BASE";
    /** INCREMENTAL - Delta (incremental) PostgreSQL backup */
    Backup_BackupMethod[Backup_BackupMethod["INCREMENTAL"] = 2] = "INCREMENTAL";
    Backup_BackupMethod[Backup_BackupMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_BackupMethod = exports.Backup_BackupMethod || (exports.Backup_BackupMethod = {}));
function backup_BackupMethodFromJSON(object) {
    switch (object) {
        case 0:
        case "BACKUP_METHOD_UNSPECIFIED":
            return Backup_BackupMethod.BACKUP_METHOD_UNSPECIFIED;
        case 1:
        case "BASE":
            return Backup_BackupMethod.BASE;
        case 2:
        case "INCREMENTAL":
            return Backup_BackupMethod.INCREMENTAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Backup_BackupMethod.UNRECOGNIZED;
    }
}
exports.backup_BackupMethodFromJSON = backup_BackupMethodFromJSON;
function backup_BackupMethodToJSON(object) {
    switch (object) {
        case Backup_BackupMethod.BACKUP_METHOD_UNSPECIFIED:
            return "BACKUP_METHOD_UNSPECIFIED";
        case Backup_BackupMethod.BASE:
            return "BASE";
        case Backup_BackupMethod.INCREMENTAL:
            return "INCREMENTAL";
        default:
            return "UNKNOWN";
    }
}
exports.backup_BackupMethodToJSON = backup_BackupMethodToJSON;
var Backup_BackupCreationType;
(function (Backup_BackupCreationType) {
    Backup_BackupCreationType[Backup_BackupCreationType["BACKUP_CREATION_TYPE_UNSPECIFIED"] = 0] = "BACKUP_CREATION_TYPE_UNSPECIFIED";
    /** AUTOMATED - Backup created by automated daily schedule */
    Backup_BackupCreationType[Backup_BackupCreationType["AUTOMATED"] = 1] = "AUTOMATED";
    /** MANUAL - Backup created by user request */
    Backup_BackupCreationType[Backup_BackupCreationType["MANUAL"] = 2] = "MANUAL";
    Backup_BackupCreationType[Backup_BackupCreationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_BackupCreationType = exports.Backup_BackupCreationType || (exports.Backup_BackupCreationType = {}));
function backup_BackupCreationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "BACKUP_CREATION_TYPE_UNSPECIFIED":
            return Backup_BackupCreationType.BACKUP_CREATION_TYPE_UNSPECIFIED;
        case 1:
        case "AUTOMATED":
            return Backup_BackupCreationType.AUTOMATED;
        case 2:
        case "MANUAL":
            return Backup_BackupCreationType.MANUAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Backup_BackupCreationType.UNRECOGNIZED;
    }
}
exports.backup_BackupCreationTypeFromJSON = backup_BackupCreationTypeFromJSON;
function backup_BackupCreationTypeToJSON(object) {
    switch (object) {
        case Backup_BackupCreationType.BACKUP_CREATION_TYPE_UNSPECIFIED:
            return "BACKUP_CREATION_TYPE_UNSPECIFIED";
        case Backup_BackupCreationType.AUTOMATED:
            return "AUTOMATED";
        case Backup_BackupCreationType.MANUAL:
            return "MANUAL";
        default:
            return "UNKNOWN";
    }
}
exports.backup_BackupCreationTypeToJSON = backup_BackupCreationTypeToJSON;
const baseBackup = {
    $type: "yandex.cloud.mdb.postgresql.v1.Backup",
    id: "",
    folderId: "",
    sourceClusterId: "",
    size: 0,
    type: 0,
    method: 0,
    journalSize: 0,
};
exports.Backup = {
    $type: "yandex.cloud.mdb.postgresql.v1.Backup",
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
        if (message.size !== 0) {
            writer.uint32(48).int64(message.size);
        }
        if (message.type !== 0) {
            writer.uint32(56).int32(message.type);
        }
        if (message.method !== 0) {
            writer.uint32(64).int32(message.method);
        }
        if (message.journalSize !== 0) {
            writer.uint32(72).int64(message.journalSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackup);
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
                    message.size = longToNumber(reader.int64());
                    break;
                case 7:
                    message.type = reader.int32();
                    break;
                case 8:
                    message.method = reader.int32();
                    break;
                case 9:
                    message.journalSize = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
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
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? backup_BackupCreationTypeFromJSON(object.type)
                : 0;
        message.method =
            object.method !== undefined && object.method !== null
                ? backup_BackupMethodFromJSON(object.method)
                : 0;
        message.journalSize =
            object.journalSize !== undefined && object.journalSize !== null
                ? Number(object.journalSize)
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
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.type !== undefined &&
            (obj.type = backup_BackupCreationTypeToJSON(message.type));
        message.method !== undefined &&
            (obj.method = backup_BackupMethodToJSON(message.method));
        message.journalSize !== undefined &&
            (obj.journalSize = Math.round(message.journalSize));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseBackup);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.sourceClusterId = (_d = object.sourceClusterId) !== null && _d !== void 0 ? _d : "";
        message.startedAt = (_e = object.startedAt) !== null && _e !== void 0 ? _e : undefined;
        message.size = (_f = object.size) !== null && _f !== void 0 ? _f : 0;
        message.type = (_g = object.type) !== null && _g !== void 0 ? _g : 0;
        message.method = (_h = object.method) !== null && _h !== void 0 ? _h : 0;
        message.journalSize = (_j = object.journalSize) !== null && _j !== void 0 ? _j : 0;
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
