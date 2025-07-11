"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogGroup_LabelsEntry = exports.LogGroup = exports.logGroup_StatusToJSON = exports.logGroup_StatusFromJSON = exports.LogGroup_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.logging.v1";
/** Possible log group statuses. */
var LogGroup_Status;
(function (LogGroup_Status) {
    /**
     * STATUS_UNSPECIFIED - Unknown status.
     *
     * Should never occur.
     */
    LogGroup_Status[LogGroup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Log group is creating. */
    LogGroup_Status[LogGroup_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Log group is ready to accept messages, */
    LogGroup_Status[LogGroup_Status["ACTIVE"] = 2] = "ACTIVE";
    /**
     * DELETING - Log group is being deleted.
     *
     * No messages will be accepted.
     */
    LogGroup_Status[LogGroup_Status["DELETING"] = 3] = "DELETING";
    /** ERROR - Log group is in failed state. */
    LogGroup_Status[LogGroup_Status["ERROR"] = 4] = "ERROR";
    LogGroup_Status[LogGroup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LogGroup_Status = exports.LogGroup_Status || (exports.LogGroup_Status = {}));
function logGroup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return LogGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return LogGroup_Status.CREATING;
        case 2:
        case "ACTIVE":
            return LogGroup_Status.ACTIVE;
        case 3:
        case "DELETING":
            return LogGroup_Status.DELETING;
        case 4:
        case "ERROR":
            return LogGroup_Status.ERROR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LogGroup_Status.UNRECOGNIZED;
    }
}
exports.logGroup_StatusFromJSON = logGroup_StatusFromJSON;
function logGroup_StatusToJSON(object) {
    switch (object) {
        case LogGroup_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case LogGroup_Status.CREATING:
            return "CREATING";
        case LogGroup_Status.ACTIVE:
            return "ACTIVE";
        case LogGroup_Status.DELETING:
            return "DELETING";
        case LogGroup_Status.ERROR:
            return "ERROR";
        default:
            return "UNKNOWN";
    }
}
exports.logGroup_StatusToJSON = logGroup_StatusToJSON;
const baseLogGroup = {
    $type: "yandex.cloud.logging.v1.LogGroup",
    id: "",
    folderId: "",
    cloudId: "",
    name: "",
    description: "",
    status: 0,
    dataStream: "",
};
exports.LogGroup = {
    $type: "yandex.cloud.logging.v1.LogGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.cloudId !== "") {
            writer.uint32(26).string(message.cloudId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.LogGroup_LabelsEntry.encode({
                $type: "yandex.cloud.logging.v1.LogGroup.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(58).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.retentionPeriod !== undefined) {
            duration_1.Duration.encode(message.retentionPeriod, writer.uint32(74).fork()).ldelim();
        }
        if (message.dataStream !== "") {
            writer.uint32(82).string(message.dataStream);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLogGroup);
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
                    message.cloudId = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = exports.LogGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.retentionPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.dataStream = reader.string();
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
        const message = Object.assign({}, baseLogGroup);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
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
        message.status =
            object.status !== undefined && object.status !== null
                ? logGroup_StatusFromJSON(object.status)
                : 0;
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromJSON(object.retentionPeriod)
                : undefined;
        message.dataStream =
            object.dataStream !== undefined && object.dataStream !== null
                ? String(object.dataStream)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
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
        message.status !== undefined &&
            (obj.status = logGroup_StatusToJSON(message.status));
        message.retentionPeriod !== undefined &&
            (obj.retentionPeriod = message.retentionPeriod
                ? duration_1.Duration.toJSON(message.retentionPeriod)
                : undefined);
        message.dataStream !== undefined && (obj.dataStream = message.dataStream);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseLogGroup);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.cloudId = (_c = object.cloudId) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        message.name = (_e = object.name) !== null && _e !== void 0 ? _e : "";
        message.description = (_f = object.description) !== null && _f !== void 0 ? _f : "";
        message.labels = Object.entries((_g = object.labels) !== null && _g !== void 0 ? _g : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.status = (_h = object.status) !== null && _h !== void 0 ? _h : 0;
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromPartial(object.retentionPeriod)
                : undefined;
        message.dataStream = (_j = object.dataStream) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogGroup.$type, exports.LogGroup);
const baseLogGroup_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.LogGroup.LabelsEntry",
    key: "",
    value: "",
};
exports.LogGroup_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.LogGroup.LabelsEntry",
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
        const message = Object.assign({}, baseLogGroup_LabelsEntry);
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
        const message = Object.assign({}, baseLogGroup_LabelsEntry);
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
        const message = Object.assign({}, baseLogGroup_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogGroup_LabelsEntry.$type, exports.LogGroup_LabelsEntry);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
