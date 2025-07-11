"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotSpec_LabelsEntry = exports.SnapshotSpec = exports.SchedulePolicy = exports.SnapshotSchedule_LabelsEntry = exports.SnapshotSchedule = exports.snapshotSchedule_StatusToJSON = exports.snapshotSchedule_StatusFromJSON = exports.SnapshotSchedule_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const duration_1 = require("../../../../google/protobuf/duration");
exports.protobufPackage = "yandex.cloud.compute.v1";
var SnapshotSchedule_Status;
(function (SnapshotSchedule_Status) {
    SnapshotSchedule_Status[SnapshotSchedule_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - The snapshot schedule is being created. */
    SnapshotSchedule_Status[SnapshotSchedule_Status["CREATING"] = 1] = "CREATING";
    /**
     * ACTIVE - The snapshot schedule is on: new disk snapshots will be created, old ones deleted
     * (if [SnapshotSchedule.retention_policy] is specified).
     */
    SnapshotSchedule_Status[SnapshotSchedule_Status["ACTIVE"] = 2] = "ACTIVE";
    /** INACTIVE - The schedule is interrupted, snapshots won't be created or deleted. */
    SnapshotSchedule_Status[SnapshotSchedule_Status["INACTIVE"] = 3] = "INACTIVE";
    /** DELETING - The schedule is being deleted. */
    SnapshotSchedule_Status[SnapshotSchedule_Status["DELETING"] = 4] = "DELETING";
    /** UPDATING - Changes are being made to snapshot schedule settings or a list of attached disks. */
    SnapshotSchedule_Status[SnapshotSchedule_Status["UPDATING"] = 5] = "UPDATING";
    SnapshotSchedule_Status[SnapshotSchedule_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SnapshotSchedule_Status = exports.SnapshotSchedule_Status || (exports.SnapshotSchedule_Status = {}));
function snapshotSchedule_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return SnapshotSchedule_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return SnapshotSchedule_Status.CREATING;
        case 2:
        case "ACTIVE":
            return SnapshotSchedule_Status.ACTIVE;
        case 3:
        case "INACTIVE":
            return SnapshotSchedule_Status.INACTIVE;
        case 4:
        case "DELETING":
            return SnapshotSchedule_Status.DELETING;
        case 5:
        case "UPDATING":
            return SnapshotSchedule_Status.UPDATING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SnapshotSchedule_Status.UNRECOGNIZED;
    }
}
exports.snapshotSchedule_StatusFromJSON = snapshotSchedule_StatusFromJSON;
function snapshotSchedule_StatusToJSON(object) {
    switch (object) {
        case SnapshotSchedule_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case SnapshotSchedule_Status.CREATING:
            return "CREATING";
        case SnapshotSchedule_Status.ACTIVE:
            return "ACTIVE";
        case SnapshotSchedule_Status.INACTIVE:
            return "INACTIVE";
        case SnapshotSchedule_Status.DELETING:
            return "DELETING";
        case SnapshotSchedule_Status.UPDATING:
            return "UPDATING";
        default:
            return "UNKNOWN";
    }
}
exports.snapshotSchedule_StatusToJSON = snapshotSchedule_StatusToJSON;
const baseSnapshotSchedule = {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
};
exports.SnapshotSchedule = {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule",
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
            exports.SnapshotSchedule_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.schedulePolicy !== undefined) {
            exports.SchedulePolicy.encode(message.schedulePolicy, writer.uint32(66).fork()).ldelim();
        }
        if (message.retentionPeriod !== undefined) {
            duration_1.Duration.encode(message.retentionPeriod, writer.uint32(74).fork()).ldelim();
        }
        if (message.snapshotCount !== undefined) {
            writer.uint32(80).int64(message.snapshotCount);
        }
        if (message.snapshotSpec !== undefined) {
            exports.SnapshotSpec.encode(message.snapshotSpec, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSnapshotSchedule);
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
                    const entry6 = exports.SnapshotSchedule_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.schedulePolicy = exports.SchedulePolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.retentionPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.snapshotCount = longToNumber(reader.int64());
                    break;
                case 11:
                    message.snapshotSpec = exports.SnapshotSpec.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseSnapshotSchedule);
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
        message.status =
            object.status !== undefined && object.status !== null
                ? snapshotSchedule_StatusFromJSON(object.status)
                : 0;
        message.schedulePolicy =
            object.schedulePolicy !== undefined && object.schedulePolicy !== null
                ? exports.SchedulePolicy.fromJSON(object.schedulePolicy)
                : undefined;
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromJSON(object.retentionPeriod)
                : undefined;
        message.snapshotCount =
            object.snapshotCount !== undefined && object.snapshotCount !== null
                ? Number(object.snapshotCount)
                : undefined;
        message.snapshotSpec =
            object.snapshotSpec !== undefined && object.snapshotSpec !== null
                ? exports.SnapshotSpec.fromJSON(object.snapshotSpec)
                : undefined;
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
        message.status !== undefined &&
            (obj.status = snapshotSchedule_StatusToJSON(message.status));
        message.schedulePolicy !== undefined &&
            (obj.schedulePolicy = message.schedulePolicy
                ? exports.SchedulePolicy.toJSON(message.schedulePolicy)
                : undefined);
        message.retentionPeriod !== undefined &&
            (obj.retentionPeriod = message.retentionPeriod
                ? duration_1.Duration.toJSON(message.retentionPeriod)
                : undefined);
        message.snapshotCount !== undefined &&
            (obj.snapshotCount = Math.round(message.snapshotCount));
        message.snapshotSpec !== undefined &&
            (obj.snapshotSpec = message.snapshotSpec
                ? exports.SnapshotSpec.toJSON(message.snapshotSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseSnapshotSchedule);
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
        message.status = (_g = object.status) !== null && _g !== void 0 ? _g : 0;
        message.schedulePolicy =
            object.schedulePolicy !== undefined && object.schedulePolicy !== null
                ? exports.SchedulePolicy.fromPartial(object.schedulePolicy)
                : undefined;
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromPartial(object.retentionPeriod)
                : undefined;
        message.snapshotCount = (_h = object.snapshotCount) !== null && _h !== void 0 ? _h : undefined;
        message.snapshotSpec =
            object.snapshotSpec !== undefined && object.snapshotSpec !== null
                ? exports.SnapshotSpec.fromPartial(object.snapshotSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SnapshotSchedule.$type, exports.SnapshotSchedule);
const baseSnapshotSchedule_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry",
    key: "",
    value: "",
};
exports.SnapshotSchedule_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry",
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
        const message = Object.assign({}, baseSnapshotSchedule_LabelsEntry);
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
        const message = Object.assign({}, baseSnapshotSchedule_LabelsEntry);
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
        const message = Object.assign({}, baseSnapshotSchedule_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SnapshotSchedule_LabelsEntry.$type, exports.SnapshotSchedule_LabelsEntry);
const baseSchedulePolicy = {
    $type: "yandex.cloud.compute.v1.SchedulePolicy",
    expression: "",
};
exports.SchedulePolicy = {
    $type: "yandex.cloud.compute.v1.SchedulePolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.startAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startAt), writer.uint32(10).fork()).ldelim();
        }
        if (message.expression !== "") {
            writer.uint32(18).string(message.expression);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSchedulePolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expression = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSchedulePolicy);
        message.startAt =
            object.startAt !== undefined && object.startAt !== null
                ? fromJsonTimestamp(object.startAt)
                : undefined;
        message.expression =
            object.expression !== undefined && object.expression !== null
                ? String(object.expression)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.startAt !== undefined &&
            (obj.startAt = message.startAt.toISOString());
        message.expression !== undefined && (obj.expression = message.expression);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSchedulePolicy);
        message.startAt = (_a = object.startAt) !== null && _a !== void 0 ? _a : undefined;
        message.expression = (_b = object.expression) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SchedulePolicy.$type, exports.SchedulePolicy);
const baseSnapshotSpec = {
    $type: "yandex.cloud.compute.v1.SnapshotSpec",
    description: "",
};
exports.SnapshotSpec = {
    $type: "yandex.cloud.compute.v1.SnapshotSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.SnapshotSpec_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSnapshotSpec);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    const entry2 = exports.SnapshotSpec_LabelsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.labels[entry2.key] = entry2.value;
                    }
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
        const message = Object.assign({}, baseSnapshotSpec);
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSnapshotSpec);
        message.description = (_a = object.description) !== null && _a !== void 0 ? _a : "";
        message.labels = Object.entries((_b = object.labels) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SnapshotSpec.$type, exports.SnapshotSpec);
const baseSnapshotSpec_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry",
    key: "",
    value: "",
};
exports.SnapshotSpec_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry",
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
        const message = Object.assign({}, baseSnapshotSpec_LabelsEntry);
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
        const message = Object.assign({}, baseSnapshotSpec_LabelsEntry);
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
        const message = Object.assign({}, baseSnapshotSpec_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SnapshotSpec_LabelsEntry.$type, exports.SnapshotSpec_LabelsEntry);
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
