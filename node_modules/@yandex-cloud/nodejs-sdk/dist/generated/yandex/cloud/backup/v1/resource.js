"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.Progress = exports.Resource = exports.task_StatusToJSON = exports.task_StatusFromJSON = exports.Task_Status = exports.task_TypeToJSON = exports.task_TypeFromJSON = exports.Task_Type = exports.resource_StatusToJSON = exports.resource_StatusFromJSON = exports.Resource_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.backup.v1";
var Resource_Status;
(function (Resource_Status) {
    Resource_Status[Resource_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** IDLE - Compute Cloud instance is doing nothing right now. */
    Resource_Status[Resource_Status["IDLE"] = 1] = "IDLE";
    /** BACKUPING - Compute Cloud instance is currently backing up itself. */
    Resource_Status[Resource_Status["BACKUPING"] = 2] = "BACKUPING";
    /** RECOVERING - Compute Cloud instance is currently recovering itself. */
    Resource_Status[Resource_Status["RECOVERING"] = 3] = "RECOVERING";
    /**
     * FAILED - Compute Cloud instance is in failure state, check content of
     * `status_details` field for more information.
     */
    Resource_Status[Resource_Status["FAILED"] = 4] = "FAILED";
    /**
     * OTHER - Unspecified state, check `status_details` field
     * for more information.
     */
    Resource_Status[Resource_Status["OTHER"] = 5] = "OTHER";
    Resource_Status[Resource_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Resource_Status = exports.Resource_Status || (exports.Resource_Status = {}));
function resource_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Resource_Status.STATUS_UNSPECIFIED;
        case 1:
        case "IDLE":
            return Resource_Status.IDLE;
        case 2:
        case "BACKUPING":
            return Resource_Status.BACKUPING;
        case 3:
        case "RECOVERING":
            return Resource_Status.RECOVERING;
        case 4:
        case "FAILED":
            return Resource_Status.FAILED;
        case 5:
        case "OTHER":
            return Resource_Status.OTHER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Resource_Status.UNRECOGNIZED;
    }
}
exports.resource_StatusFromJSON = resource_StatusFromJSON;
function resource_StatusToJSON(object) {
    switch (object) {
        case Resource_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Resource_Status.IDLE:
            return "IDLE";
        case Resource_Status.BACKUPING:
            return "BACKUPING";
        case Resource_Status.RECOVERING:
            return "RECOVERING";
        case Resource_Status.FAILED:
            return "FAILED";
        case Resource_Status.OTHER:
            return "OTHER";
        default:
            return "UNKNOWN";
    }
}
exports.resource_StatusToJSON = resource_StatusToJSON;
var Task_Type;
(function (Task_Type) {
    Task_Type[Task_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    Task_Type[Task_Type["BACKUP"] = 1] = "BACKUP";
    Task_Type[Task_Type["RETENTION"] = 2] = "RETENTION";
    Task_Type[Task_Type["RECOVERY"] = 3] = "RECOVERY";
    Task_Type[Task_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Task_Type = exports.Task_Type || (exports.Task_Type = {}));
function task_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Task_Type.TYPE_UNSPECIFIED;
        case 1:
        case "BACKUP":
            return Task_Type.BACKUP;
        case 2:
        case "RETENTION":
            return Task_Type.RETENTION;
        case 3:
        case "RECOVERY":
            return Task_Type.RECOVERY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Task_Type.UNRECOGNIZED;
    }
}
exports.task_TypeFromJSON = task_TypeFromJSON;
function task_TypeToJSON(object) {
    switch (object) {
        case Task_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Task_Type.BACKUP:
            return "BACKUP";
        case Task_Type.RETENTION:
            return "RETENTION";
        case Task_Type.RECOVERY:
            return "RECOVERY";
        default:
            return "UNKNOWN";
    }
}
exports.task_TypeToJSON = task_TypeToJSON;
/** Status of task. */
var Task_Status;
(function (Task_Status) {
    Task_Status[Task_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Task_Status[Task_Status["ENQUEUED"] = 1] = "ENQUEUED";
    Task_Status[Task_Status["ASSIGNED"] = 2] = "ASSIGNED";
    Task_Status[Task_Status["STARTED"] = 3] = "STARTED";
    Task_Status[Task_Status["PAUSED"] = 4] = "PAUSED";
    Task_Status[Task_Status["COMPLETED"] = 5] = "COMPLETED";
    Task_Status[Task_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Task_Status = exports.Task_Status || (exports.Task_Status = {}));
function task_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Task_Status.STATUS_UNSPECIFIED;
        case 1:
        case "ENQUEUED":
            return Task_Status.ENQUEUED;
        case 2:
        case "ASSIGNED":
            return Task_Status.ASSIGNED;
        case 3:
        case "STARTED":
            return Task_Status.STARTED;
        case 4:
        case "PAUSED":
            return Task_Status.PAUSED;
        case 5:
        case "COMPLETED":
            return Task_Status.COMPLETED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Task_Status.UNRECOGNIZED;
    }
}
exports.task_StatusFromJSON = task_StatusFromJSON;
function task_StatusToJSON(object) {
    switch (object) {
        case Task_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Task_Status.ENQUEUED:
            return "ENQUEUED";
        case Task_Status.ASSIGNED:
            return "ASSIGNED";
        case Task_Status.STARTED:
            return "STARTED";
        case Task_Status.PAUSED:
            return "PAUSED";
        case Task_Status.COMPLETED:
            return "COMPLETED";
        default:
            return "UNKNOWN";
    }
}
exports.task_StatusToJSON = task_StatusToJSON;
const baseResource = {
    $type: "yandex.cloud.backup.v1.Resource",
    computeInstanceId: "",
    online: false,
    enabled: false,
    status: 0,
    statusDetails: "",
    statusProgress: 0,
    resourceId: "",
    isActive: false,
};
exports.Resource = {
    $type: "yandex.cloud.backup.v1.Resource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.online === true) {
            writer.uint32(32).bool(message.online);
        }
        if (message.enabled === true) {
            writer.uint32(40).bool(message.enabled);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.statusDetails !== "") {
            writer.uint32(58).string(message.statusDetails);
        }
        if (message.statusProgress !== 0) {
            writer.uint32(64).int64(message.statusProgress);
        }
        if (message.lastBackupTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastBackupTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.nextBackupTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.nextBackupTime), writer.uint32(82).fork()).ldelim();
        }
        if (message.resourceId !== "") {
            writer.uint32(90).string(message.resourceId);
        }
        if (message.isActive === true) {
            writer.uint32(96).bool(message.isActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResource);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.online = reader.bool();
                    break;
                case 5:
                    message.enabled = reader.bool();
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                case 7:
                    message.statusDetails = reader.string();
                    break;
                case 8:
                    message.statusProgress = longToNumber(reader.int64());
                    break;
                case 9:
                    message.lastBackupTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.nextBackupTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.resourceId = reader.string();
                    break;
                case 12:
                    message.isActive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResource);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.online =
            object.online !== undefined && object.online !== null
                ? Boolean(object.online)
                : false;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.status =
            object.status !== undefined && object.status !== null
                ? resource_StatusFromJSON(object.status)
                : 0;
        message.statusDetails =
            object.statusDetails !== undefined && object.statusDetails !== null
                ? String(object.statusDetails)
                : "";
        message.statusProgress =
            object.statusProgress !== undefined && object.statusProgress !== null
                ? Number(object.statusProgress)
                : 0;
        message.lastBackupTime =
            object.lastBackupTime !== undefined && object.lastBackupTime !== null
                ? fromJsonTimestamp(object.lastBackupTime)
                : undefined;
        message.nextBackupTime =
            object.nextBackupTime !== undefined && object.nextBackupTime !== null
                ? fromJsonTimestamp(object.nextBackupTime)
                : undefined;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        message.isActive =
            object.isActive !== undefined && object.isActive !== null
                ? Boolean(object.isActive)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.online !== undefined && (obj.online = message.online);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.status !== undefined &&
            (obj.status = resource_StatusToJSON(message.status));
        message.statusDetails !== undefined &&
            (obj.statusDetails = message.statusDetails);
        message.statusProgress !== undefined &&
            (obj.statusProgress = Math.round(message.statusProgress));
        message.lastBackupTime !== undefined &&
            (obj.lastBackupTime = message.lastBackupTime.toISOString());
        message.nextBackupTime !== undefined &&
            (obj.nextBackupTime = message.nextBackupTime.toISOString());
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = Object.assign({}, baseResource);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : undefined;
        message.updatedAt = (_c = object.updatedAt) !== null && _c !== void 0 ? _c : undefined;
        message.online = (_d = object.online) !== null && _d !== void 0 ? _d : false;
        message.enabled = (_e = object.enabled) !== null && _e !== void 0 ? _e : false;
        message.status = (_f = object.status) !== null && _f !== void 0 ? _f : 0;
        message.statusDetails = (_g = object.statusDetails) !== null && _g !== void 0 ? _g : "";
        message.statusProgress = (_h = object.statusProgress) !== null && _h !== void 0 ? _h : 0;
        message.lastBackupTime = (_j = object.lastBackupTime) !== null && _j !== void 0 ? _j : undefined;
        message.nextBackupTime = (_k = object.nextBackupTime) !== null && _k !== void 0 ? _k : undefined;
        message.resourceId = (_l = object.resourceId) !== null && _l !== void 0 ? _l : "";
        message.isActive = (_m = object.isActive) !== null && _m !== void 0 ? _m : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Resource.$type, exports.Resource);
const baseProgress = {
    $type: "yandex.cloud.backup.v1.Progress",
    current: 0,
    total: 0,
};
exports.Progress = {
    $type: "yandex.cloud.backup.v1.Progress",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.current !== 0) {
            writer.uint32(8).int64(message.current);
        }
        if (message.total !== 0) {
            writer.uint32(16).int64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProgress);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.current = longToNumber(reader.int64());
                    break;
                case 2:
                    message.total = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProgress);
        message.current =
            object.current !== undefined && object.current !== null
                ? Number(object.current)
                : 0;
        message.total =
            object.total !== undefined && object.total !== null
                ? Number(object.total)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.current !== undefined &&
            (obj.current = Math.round(message.current));
        message.total !== undefined && (obj.total = Math.round(message.total));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseProgress);
        message.current = (_a = object.current) !== null && _a !== void 0 ? _a : 0;
        message.total = (_b = object.total) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Progress.$type, exports.Progress);
const baseTask = {
    $type: "yandex.cloud.backup.v1.Task",
    id: 0,
    cancellable: false,
    policyId: "",
    type: 0,
    status: 0,
    computeInstanceId: "",
};
exports.Task = {
    $type: "yandex.cloud.backup.v1.Task",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.cancellable === true) {
            writer.uint32(16).bool(message.cancellable);
        }
        if (message.policyId !== "") {
            writer.uint32(26).string(message.policyId);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.progress !== undefined) {
            exports.Progress.encode(message.progress, writer.uint32(42).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.enqueuedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.enqueuedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.startedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.completedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completedAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(90).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTask);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.int64());
                    break;
                case 2:
                    message.cancellable = reader.bool();
                    break;
                case 3:
                    message.policyId = reader.string();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.progress = exports.Progress.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                case 7:
                    message.enqueuedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.startedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.completedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTask);
        message.id =
            object.id !== undefined && object.id !== null ? Number(object.id) : 0;
        message.cancellable =
            object.cancellable !== undefined && object.cancellable !== null
                ? Boolean(object.cancellable)
                : false;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? task_TypeFromJSON(object.type)
                : 0;
        message.progress =
            object.progress !== undefined && object.progress !== null
                ? exports.Progress.fromJSON(object.progress)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? task_StatusFromJSON(object.status)
                : 0;
        message.enqueuedAt =
            object.enqueuedAt !== undefined && object.enqueuedAt !== null
                ? fromJsonTimestamp(object.enqueuedAt)
                : undefined;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.completedAt =
            object.completedAt !== undefined && object.completedAt !== null
                ? fromJsonTimestamp(object.completedAt)
                : undefined;
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.cancellable !== undefined &&
            (obj.cancellable = message.cancellable);
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.type !== undefined && (obj.type = task_TypeToJSON(message.type));
        message.progress !== undefined &&
            (obj.progress = message.progress
                ? exports.Progress.toJSON(message.progress)
                : undefined);
        message.status !== undefined &&
            (obj.status = task_StatusToJSON(message.status));
        message.enqueuedAt !== undefined &&
            (obj.enqueuedAt = message.enqueuedAt.toISOString());
        message.startedAt !== undefined &&
            (obj.startedAt = message.startedAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.completedAt !== undefined &&
            (obj.completedAt = message.completedAt.toISOString());
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseTask);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.cancellable = (_b = object.cancellable) !== null && _b !== void 0 ? _b : false;
        message.policyId = (_c = object.policyId) !== null && _c !== void 0 ? _c : "";
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 0;
        message.progress =
            object.progress !== undefined && object.progress !== null
                ? exports.Progress.fromPartial(object.progress)
                : undefined;
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.enqueuedAt = (_f = object.enqueuedAt) !== null && _f !== void 0 ? _f : undefined;
        message.startedAt = (_g = object.startedAt) !== null && _g !== void 0 ? _g : undefined;
        message.updatedAt = (_h = object.updatedAt) !== null && _h !== void 0 ? _h : undefined;
        message.completedAt = (_j = object.completedAt) !== null && _j !== void 0 ? _j : undefined;
        message.computeInstanceId = (_k = object.computeInstanceId) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Task.$type, exports.Task);
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
