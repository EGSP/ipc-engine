"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filesystem_LabelsEntry = exports.Filesystem = exports.filesystem_StatusToJSON = exports.filesystem_StatusFromJSON = exports.Filesystem_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.compute.v1";
var Filesystem_Status;
(function (Filesystem_Status) {
    Filesystem_Status[Filesystem_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - The filesystem is being created. */
    Filesystem_Status[Filesystem_Status["CREATING"] = 1] = "CREATING";
    /** READY - The filesystem is ready to use. */
    Filesystem_Status[Filesystem_Status["READY"] = 2] = "READY";
    /** ERROR - The filesystem encountered a problem and cannot operate. */
    Filesystem_Status[Filesystem_Status["ERROR"] = 3] = "ERROR";
    /** DELETING - The filesystem is being deleted. */
    Filesystem_Status[Filesystem_Status["DELETING"] = 4] = "DELETING";
    Filesystem_Status[Filesystem_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Filesystem_Status = exports.Filesystem_Status || (exports.Filesystem_Status = {}));
function filesystem_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Filesystem_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return Filesystem_Status.CREATING;
        case 2:
        case "READY":
            return Filesystem_Status.READY;
        case 3:
        case "ERROR":
            return Filesystem_Status.ERROR;
        case 4:
        case "DELETING":
            return Filesystem_Status.DELETING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Filesystem_Status.UNRECOGNIZED;
    }
}
exports.filesystem_StatusFromJSON = filesystem_StatusFromJSON;
function filesystem_StatusToJSON(object) {
    switch (object) {
        case Filesystem_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Filesystem_Status.CREATING:
            return "CREATING";
        case Filesystem_Status.READY:
            return "READY";
        case Filesystem_Status.ERROR:
            return "ERROR";
        case Filesystem_Status.DELETING:
            return "DELETING";
        default:
            return "UNKNOWN";
    }
}
exports.filesystem_StatusToJSON = filesystem_StatusToJSON;
const baseFilesystem = {
    $type: "yandex.cloud.compute.v1.Filesystem",
    id: "",
    folderId: "",
    name: "",
    description: "",
    typeId: "",
    zoneId: "",
    size: 0,
    blockSize: 0,
    status: 0,
};
exports.Filesystem = {
    $type: "yandex.cloud.compute.v1.Filesystem",
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
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Filesystem_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.Filesystem.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.typeId !== "") {
            writer.uint32(58).string(message.typeId);
        }
        if (message.zoneId !== "") {
            writer.uint32(66).string(message.zoneId);
        }
        if (message.size !== 0) {
            writer.uint32(72).int64(message.size);
        }
        if (message.blockSize !== 0) {
            writer.uint32(80).int64(message.blockSize);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFilesystem);
        message.labels = {};
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
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Filesystem_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.typeId = reader.string();
                    break;
                case 8:
                    message.zoneId = reader.string();
                    break;
                case 9:
                    message.size = longToNumber(reader.int64());
                    break;
                case 10:
                    message.blockSize = longToNumber(reader.int64());
                    break;
                case 11:
                    message.status = reader.int32();
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
        const message = Object.assign({}, baseFilesystem);
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
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.typeId =
            object.typeId !== undefined && object.typeId !== null
                ? String(object.typeId)
                : "";
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.blockSize =
            object.blockSize !== undefined && object.blockSize !== null
                ? Number(object.blockSize)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? filesystem_StatusFromJSON(object.status)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.blockSize !== undefined &&
            (obj.blockSize = Math.round(message.blockSize));
        message.status !== undefined &&
            (obj.status = filesystem_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseFilesystem);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.typeId = (_g = object.typeId) !== null && _g !== void 0 ? _g : "";
        message.zoneId = (_h = object.zoneId) !== null && _h !== void 0 ? _h : "";
        message.size = (_j = object.size) !== null && _j !== void 0 ? _j : 0;
        message.blockSize = (_k = object.blockSize) !== null && _k !== void 0 ? _k : 0;
        message.status = (_l = object.status) !== null && _l !== void 0 ? _l : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Filesystem.$type, exports.Filesystem);
const baseFilesystem_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.Filesystem.LabelsEntry",
    key: "",
    value: "",
};
exports.Filesystem_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.Filesystem.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFilesystem_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFilesystem_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseFilesystem_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Filesystem_LabelsEntry.$type, exports.Filesystem_LabelsEntry);
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
