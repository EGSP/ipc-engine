"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backup = exports.BackupConfig = exports.BackupSettings = exports.DailyBackupSchedule = exports.WeeklyBackupSchedule = exports.DaysOfWeekBackupSchedule = exports.RecurringBackupSchedule = exports.BackupSchedule = exports.backup_TypeToJSON = exports.backup_TypeFromJSON = exports.Backup_Type = exports.backup_StatusToJSON = exports.backup_StatusFromJSON = exports.Backup_Status = exports.backupSettings_StorageClassToJSON = exports.backupSettings_StorageClassFromJSON = exports.BackupSettings_StorageClass = exports.backupSettings_TypeToJSON = exports.backupSettings_TypeFromJSON = exports.BackupSettings_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timeofday_1 = require("../../../../google/type/timeofday");
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const dayofweek_1 = require("../../../../google/type/dayofweek");
exports.protobufPackage = "yandex.cloud.ydb.v1";
var BackupSettings_Type;
(function (BackupSettings_Type) {
    BackupSettings_Type[BackupSettings_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    BackupSettings_Type[BackupSettings_Type["SYSTEM"] = 1] = "SYSTEM";
    BackupSettings_Type[BackupSettings_Type["USER"] = 2] = "USER";
    BackupSettings_Type[BackupSettings_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BackupSettings_Type = exports.BackupSettings_Type || (exports.BackupSettings_Type = {}));
function backupSettings_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return BackupSettings_Type.TYPE_UNSPECIFIED;
        case 1:
        case "SYSTEM":
            return BackupSettings_Type.SYSTEM;
        case 2:
        case "USER":
            return BackupSettings_Type.USER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BackupSettings_Type.UNRECOGNIZED;
    }
}
exports.backupSettings_TypeFromJSON = backupSettings_TypeFromJSON;
function backupSettings_TypeToJSON(object) {
    switch (object) {
        case BackupSettings_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case BackupSettings_Type.SYSTEM:
            return "SYSTEM";
        case BackupSettings_Type.USER:
            return "USER";
        default:
            return "UNKNOWN";
    }
}
exports.backupSettings_TypeToJSON = backupSettings_TypeToJSON;
var BackupSettings_StorageClass;
(function (BackupSettings_StorageClass) {
    BackupSettings_StorageClass[BackupSettings_StorageClass["STORAGE_CLASS_UNSPECIFIED"] = 0] = "STORAGE_CLASS_UNSPECIFIED";
    BackupSettings_StorageClass[BackupSettings_StorageClass["STANDARD"] = 1] = "STANDARD";
    BackupSettings_StorageClass[BackupSettings_StorageClass["REDUCED_REDUNDANCY"] = 2] = "REDUCED_REDUNDANCY";
    BackupSettings_StorageClass[BackupSettings_StorageClass["STANDARD_IA"] = 3] = "STANDARD_IA";
    BackupSettings_StorageClass[BackupSettings_StorageClass["ONEZONE_IA"] = 4] = "ONEZONE_IA";
    BackupSettings_StorageClass[BackupSettings_StorageClass["INTELLIGENT_TIERING"] = 5] = "INTELLIGENT_TIERING";
    BackupSettings_StorageClass[BackupSettings_StorageClass["GLACIER"] = 6] = "GLACIER";
    BackupSettings_StorageClass[BackupSettings_StorageClass["DEEP_ARCHIVE"] = 7] = "DEEP_ARCHIVE";
    BackupSettings_StorageClass[BackupSettings_StorageClass["OUTPOSTS"] = 8] = "OUTPOSTS";
    BackupSettings_StorageClass[BackupSettings_StorageClass["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BackupSettings_StorageClass = exports.BackupSettings_StorageClass || (exports.BackupSettings_StorageClass = {}));
function backupSettings_StorageClassFromJSON(object) {
    switch (object) {
        case 0:
        case "STORAGE_CLASS_UNSPECIFIED":
            return BackupSettings_StorageClass.STORAGE_CLASS_UNSPECIFIED;
        case 1:
        case "STANDARD":
            return BackupSettings_StorageClass.STANDARD;
        case 2:
        case "REDUCED_REDUNDANCY":
            return BackupSettings_StorageClass.REDUCED_REDUNDANCY;
        case 3:
        case "STANDARD_IA":
            return BackupSettings_StorageClass.STANDARD_IA;
        case 4:
        case "ONEZONE_IA":
            return BackupSettings_StorageClass.ONEZONE_IA;
        case 5:
        case "INTELLIGENT_TIERING":
            return BackupSettings_StorageClass.INTELLIGENT_TIERING;
        case 6:
        case "GLACIER":
            return BackupSettings_StorageClass.GLACIER;
        case 7:
        case "DEEP_ARCHIVE":
            return BackupSettings_StorageClass.DEEP_ARCHIVE;
        case 8:
        case "OUTPOSTS":
            return BackupSettings_StorageClass.OUTPOSTS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BackupSettings_StorageClass.UNRECOGNIZED;
    }
}
exports.backupSettings_StorageClassFromJSON = backupSettings_StorageClassFromJSON;
function backupSettings_StorageClassToJSON(object) {
    switch (object) {
        case BackupSettings_StorageClass.STORAGE_CLASS_UNSPECIFIED:
            return "STORAGE_CLASS_UNSPECIFIED";
        case BackupSettings_StorageClass.STANDARD:
            return "STANDARD";
        case BackupSettings_StorageClass.REDUCED_REDUNDANCY:
            return "REDUCED_REDUNDANCY";
        case BackupSettings_StorageClass.STANDARD_IA:
            return "STANDARD_IA";
        case BackupSettings_StorageClass.ONEZONE_IA:
            return "ONEZONE_IA";
        case BackupSettings_StorageClass.INTELLIGENT_TIERING:
            return "INTELLIGENT_TIERING";
        case BackupSettings_StorageClass.GLACIER:
            return "GLACIER";
        case BackupSettings_StorageClass.DEEP_ARCHIVE:
            return "DEEP_ARCHIVE";
        case BackupSettings_StorageClass.OUTPOSTS:
            return "OUTPOSTS";
        default:
            return "UNKNOWN";
    }
}
exports.backupSettings_StorageClassToJSON = backupSettings_StorageClassToJSON;
/** id of backup */
var Backup_Status;
(function (Backup_Status) {
    Backup_Status[Backup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Backup_Status[Backup_Status["CREATING"] = 1] = "CREATING";
    Backup_Status[Backup_Status["READY"] = 2] = "READY";
    Backup_Status[Backup_Status["ERROR"] = 3] = "ERROR";
    Backup_Status[Backup_Status["CANCELLED"] = 4] = "CANCELLED";
    Backup_Status[Backup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_Status = exports.Backup_Status || (exports.Backup_Status = {}));
function backup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Backup_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return Backup_Status.CREATING;
        case 2:
        case "READY":
            return Backup_Status.READY;
        case 3:
        case "ERROR":
            return Backup_Status.ERROR;
        case 4:
        case "CANCELLED":
            return Backup_Status.CANCELLED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Backup_Status.UNRECOGNIZED;
    }
}
exports.backup_StatusFromJSON = backup_StatusFromJSON;
function backup_StatusToJSON(object) {
    switch (object) {
        case Backup_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Backup_Status.CREATING:
            return "CREATING";
        case Backup_Status.READY:
            return "READY";
        case Backup_Status.ERROR:
            return "ERROR";
        case Backup_Status.CANCELLED:
            return "CANCELLED";
        default:
            return "UNKNOWN";
    }
}
exports.backup_StatusToJSON = backup_StatusToJSON;
var Backup_Type;
(function (Backup_Type) {
    Backup_Type[Backup_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** SYSTEM - indicates that backup started by the system. */
    Backup_Type[Backup_Type["SYSTEM"] = 1] = "SYSTEM";
    Backup_Type[Backup_Type["USER"] = 2] = "USER";
    Backup_Type[Backup_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_Type = exports.Backup_Type || (exports.Backup_Type = {}));
function backup_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Backup_Type.TYPE_UNSPECIFIED;
        case 1:
        case "SYSTEM":
            return Backup_Type.SYSTEM;
        case 2:
        case "USER":
            return Backup_Type.USER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Backup_Type.UNRECOGNIZED;
    }
}
exports.backup_TypeFromJSON = backup_TypeFromJSON;
function backup_TypeToJSON(object) {
    switch (object) {
        case Backup_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Backup_Type.SYSTEM:
            return "SYSTEM";
        case Backup_Type.USER:
            return "USER";
        default:
            return "UNKNOWN";
    }
}
exports.backup_TypeToJSON = backup_TypeToJSON;
const baseBackupSchedule = {
    $type: "yandex.cloud.ydb.v1.BackupSchedule",
};
exports.BackupSchedule = {
    $type: "yandex.cloud.ydb.v1.BackupSchedule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dailyBackupSchedule !== undefined) {
            exports.DailyBackupSchedule.encode(message.dailyBackupSchedule, writer.uint32(10).fork()).ldelim();
        }
        if (message.weeklyBackupSchedule !== undefined) {
            exports.WeeklyBackupSchedule.encode(message.weeklyBackupSchedule, writer.uint32(18).fork()).ldelim();
        }
        if (message.recurringBackupSchedule !== undefined) {
            exports.RecurringBackupSchedule.encode(message.recurringBackupSchedule, writer.uint32(34).fork()).ldelim();
        }
        if (message.nextExecuteTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.nextExecuteTime), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackupSchedule);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dailyBackupSchedule = exports.DailyBackupSchedule.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.weeklyBackupSchedule = exports.WeeklyBackupSchedule.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.recurringBackupSchedule = exports.RecurringBackupSchedule.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextExecuteTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackupSchedule);
        message.dailyBackupSchedule =
            object.dailyBackupSchedule !== undefined &&
                object.dailyBackupSchedule !== null
                ? exports.DailyBackupSchedule.fromJSON(object.dailyBackupSchedule)
                : undefined;
        message.weeklyBackupSchedule =
            object.weeklyBackupSchedule !== undefined &&
                object.weeklyBackupSchedule !== null
                ? exports.WeeklyBackupSchedule.fromJSON(object.weeklyBackupSchedule)
                : undefined;
        message.recurringBackupSchedule =
            object.recurringBackupSchedule !== undefined &&
                object.recurringBackupSchedule !== null
                ? exports.RecurringBackupSchedule.fromJSON(object.recurringBackupSchedule)
                : undefined;
        message.nextExecuteTime =
            object.nextExecuteTime !== undefined && object.nextExecuteTime !== null
                ? fromJsonTimestamp(object.nextExecuteTime)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dailyBackupSchedule !== undefined &&
            (obj.dailyBackupSchedule = message.dailyBackupSchedule
                ? exports.DailyBackupSchedule.toJSON(message.dailyBackupSchedule)
                : undefined);
        message.weeklyBackupSchedule !== undefined &&
            (obj.weeklyBackupSchedule = message.weeklyBackupSchedule
                ? exports.WeeklyBackupSchedule.toJSON(message.weeklyBackupSchedule)
                : undefined);
        message.recurringBackupSchedule !== undefined &&
            (obj.recurringBackupSchedule = message.recurringBackupSchedule
                ? exports.RecurringBackupSchedule.toJSON(message.recurringBackupSchedule)
                : undefined);
        message.nextExecuteTime !== undefined &&
            (obj.nextExecuteTime = message.nextExecuteTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseBackupSchedule);
        message.dailyBackupSchedule =
            object.dailyBackupSchedule !== undefined &&
                object.dailyBackupSchedule !== null
                ? exports.DailyBackupSchedule.fromPartial(object.dailyBackupSchedule)
                : undefined;
        message.weeklyBackupSchedule =
            object.weeklyBackupSchedule !== undefined &&
                object.weeklyBackupSchedule !== null
                ? exports.WeeklyBackupSchedule.fromPartial(object.weeklyBackupSchedule)
                : undefined;
        message.recurringBackupSchedule =
            object.recurringBackupSchedule !== undefined &&
                object.recurringBackupSchedule !== null
                ? exports.RecurringBackupSchedule.fromPartial(object.recurringBackupSchedule)
                : undefined;
        message.nextExecuteTime = (_a = object.nextExecuteTime) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupSchedule.$type, exports.BackupSchedule);
const baseRecurringBackupSchedule = {
    $type: "yandex.cloud.ydb.v1.RecurringBackupSchedule",
    recurrence: "",
};
exports.RecurringBackupSchedule = {
    $type: "yandex.cloud.ydb.v1.RecurringBackupSchedule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.recurrence !== "") {
            writer.uint32(18).string(message.recurrence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRecurringBackupSchedule);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.recurrence = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRecurringBackupSchedule);
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? fromJsonTimestamp(object.startTime)
                : undefined;
        message.recurrence =
            object.recurrence !== undefined && object.recurrence !== null
                ? String(object.recurrence)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined &&
            (obj.startTime = message.startTime.toISOString());
        message.recurrence !== undefined && (obj.recurrence = message.recurrence);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRecurringBackupSchedule);
        message.startTime = (_a = object.startTime) !== null && _a !== void 0 ? _a : undefined;
        message.recurrence = (_b = object.recurrence) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RecurringBackupSchedule.$type, exports.RecurringBackupSchedule);
const baseDaysOfWeekBackupSchedule = {
    $type: "yandex.cloud.ydb.v1.DaysOfWeekBackupSchedule",
    days: 0,
};
exports.DaysOfWeekBackupSchedule = {
    $type: "yandex.cloud.ydb.v1.DaysOfWeekBackupSchedule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.days) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.executeTime !== undefined) {
            timeofday_1.TimeOfDay.encode(message.executeTime, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDaysOfWeekBackupSchedule);
        message.days = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.days.push(reader.int32());
                        }
                    }
                    else {
                        message.days.push(reader.int32());
                    }
                    break;
                case 2:
                    message.executeTime = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseDaysOfWeekBackupSchedule);
        message.days = ((_a = object.days) !== null && _a !== void 0 ? _a : []).map((e) => (0, dayofweek_1.dayOfWeekFromJSON)(e));
        message.executeTime =
            object.executeTime !== undefined && object.executeTime !== null
                ? timeofday_1.TimeOfDay.fromJSON(object.executeTime)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.days) {
            obj.days = message.days.map((e) => (0, dayofweek_1.dayOfWeekToJSON)(e));
        }
        else {
            obj.days = [];
        }
        message.executeTime !== undefined &&
            (obj.executeTime = message.executeTime
                ? timeofday_1.TimeOfDay.toJSON(message.executeTime)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDaysOfWeekBackupSchedule);
        message.days = ((_a = object.days) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.executeTime =
            object.executeTime !== undefined && object.executeTime !== null
                ? timeofday_1.TimeOfDay.fromPartial(object.executeTime)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DaysOfWeekBackupSchedule.$type, exports.DaysOfWeekBackupSchedule);
const baseWeeklyBackupSchedule = {
    $type: "yandex.cloud.ydb.v1.WeeklyBackupSchedule",
};
exports.WeeklyBackupSchedule = {
    $type: "yandex.cloud.ydb.v1.WeeklyBackupSchedule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.daysOfWeek) {
            exports.DaysOfWeekBackupSchedule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWeeklyBackupSchedule);
        message.daysOfWeek = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.daysOfWeek.push(exports.DaysOfWeekBackupSchedule.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseWeeklyBackupSchedule);
        message.daysOfWeek = ((_a = object.daysOfWeek) !== null && _a !== void 0 ? _a : []).map((e) => exports.DaysOfWeekBackupSchedule.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.daysOfWeek) {
            obj.daysOfWeek = message.daysOfWeek.map((e) => e ? exports.DaysOfWeekBackupSchedule.toJSON(e) : undefined);
        }
        else {
            obj.daysOfWeek = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseWeeklyBackupSchedule);
        message.daysOfWeek =
            ((_a = object.daysOfWeek) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DaysOfWeekBackupSchedule.fromPartial(e))) ||
                [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WeeklyBackupSchedule.$type, exports.WeeklyBackupSchedule);
const baseDailyBackupSchedule = {
    $type: "yandex.cloud.ydb.v1.DailyBackupSchedule",
};
exports.DailyBackupSchedule = {
    $type: "yandex.cloud.ydb.v1.DailyBackupSchedule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.executeTime !== undefined) {
            timeofday_1.TimeOfDay.encode(message.executeTime, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDailyBackupSchedule);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.executeTime = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDailyBackupSchedule);
        message.executeTime =
            object.executeTime !== undefined && object.executeTime !== null
                ? timeofday_1.TimeOfDay.fromJSON(object.executeTime)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.executeTime !== undefined &&
            (obj.executeTime = message.executeTime
                ? timeofday_1.TimeOfDay.toJSON(message.executeTime)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDailyBackupSchedule);
        message.executeTime =
            object.executeTime !== undefined && object.executeTime !== null
                ? timeofday_1.TimeOfDay.fromPartial(object.executeTime)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DailyBackupSchedule.$type, exports.DailyBackupSchedule);
const baseBackupSettings = {
    $type: "yandex.cloud.ydb.v1.BackupSettings",
    name: "",
    description: "",
    sourcePaths: "",
    sourcePathsToExclude: "",
    type: 0,
    storageClass: 0,
};
exports.BackupSettings = {
    $type: "yandex.cloud.ydb.v1.BackupSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.backupSchedule !== undefined) {
            exports.BackupSchedule.encode(message.backupSchedule, writer.uint32(26).fork()).ldelim();
        }
        if (message.backupTimeToLive !== undefined) {
            duration_1.Duration.encode(message.backupTimeToLive, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sourcePaths) {
            writer.uint32(42).string(v);
        }
        for (const v of message.sourcePathsToExclude) {
            writer.uint32(50).string(v);
        }
        if (message.type !== 0) {
            writer.uint32(56).int32(message.type);
        }
        if (message.storageClass !== 0) {
            writer.uint32(64).int32(message.storageClass);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackupSettings);
        message.sourcePaths = [];
        message.sourcePathsToExclude = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.backupSchedule = exports.BackupSchedule.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.backupTimeToLive = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sourcePaths.push(reader.string());
                    break;
                case 6:
                    message.sourcePathsToExclude.push(reader.string());
                    break;
                case 7:
                    message.type = reader.int32();
                    break;
                case 8:
                    message.storageClass = reader.int32();
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
        const message = Object.assign({}, baseBackupSettings);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.backupSchedule =
            object.backupSchedule !== undefined && object.backupSchedule !== null
                ? exports.BackupSchedule.fromJSON(object.backupSchedule)
                : undefined;
        message.backupTimeToLive =
            object.backupTimeToLive !== undefined && object.backupTimeToLive !== null
                ? duration_1.Duration.fromJSON(object.backupTimeToLive)
                : undefined;
        message.sourcePaths = ((_a = object.sourcePaths) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.sourcePathsToExclude = ((_b = object.sourcePathsToExclude) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.type =
            object.type !== undefined && object.type !== null
                ? backupSettings_TypeFromJSON(object.type)
                : 0;
        message.storageClass =
            object.storageClass !== undefined && object.storageClass !== null
                ? backupSettings_StorageClassFromJSON(object.storageClass)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.backupSchedule !== undefined &&
            (obj.backupSchedule = message.backupSchedule
                ? exports.BackupSchedule.toJSON(message.backupSchedule)
                : undefined);
        message.backupTimeToLive !== undefined &&
            (obj.backupTimeToLive = message.backupTimeToLive
                ? duration_1.Duration.toJSON(message.backupTimeToLive)
                : undefined);
        if (message.sourcePaths) {
            obj.sourcePaths = message.sourcePaths.map((e) => e);
        }
        else {
            obj.sourcePaths = [];
        }
        if (message.sourcePathsToExclude) {
            obj.sourcePathsToExclude = message.sourcePathsToExclude.map((e) => e);
        }
        else {
            obj.sourcePathsToExclude = [];
        }
        message.type !== undefined &&
            (obj.type = backupSettings_TypeToJSON(message.type));
        message.storageClass !== undefined &&
            (obj.storageClass = backupSettings_StorageClassToJSON(message.storageClass));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseBackupSettings);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.backupSchedule =
            object.backupSchedule !== undefined && object.backupSchedule !== null
                ? exports.BackupSchedule.fromPartial(object.backupSchedule)
                : undefined;
        message.backupTimeToLive =
            object.backupTimeToLive !== undefined && object.backupTimeToLive !== null
                ? duration_1.Duration.fromPartial(object.backupTimeToLive)
                : undefined;
        message.sourcePaths = ((_c = object.sourcePaths) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.sourcePathsToExclude =
            ((_d = object.sourcePathsToExclude) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.type = (_e = object.type) !== null && _e !== void 0 ? _e : 0;
        message.storageClass = (_f = object.storageClass) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupSettings.$type, exports.BackupSettings);
const baseBackupConfig = { $type: "yandex.cloud.ydb.v1.BackupConfig" };
exports.BackupConfig = {
    $type: "yandex.cloud.ydb.v1.BackupConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backupSettings) {
            exports.BackupSettings.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackupConfig);
        message.backupSettings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupSettings.push(exports.BackupSettings.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseBackupConfig);
        message.backupSettings = ((_a = object.backupSettings) !== null && _a !== void 0 ? _a : []).map((e) => exports.BackupSettings.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backupSettings) {
            obj.backupSettings = message.backupSettings.map((e) => e ? exports.BackupSettings.toJSON(e) : undefined);
        }
        else {
            obj.backupSettings = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseBackupConfig);
        message.backupSettings =
            ((_a = object.backupSettings) === null || _a === void 0 ? void 0 : _a.map((e) => exports.BackupSettings.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupConfig.$type, exports.BackupConfig);
const baseBackup = {
    $type: "yandex.cloud.ydb.v1.Backup",
    id: "",
    name: "",
    folderId: "",
    databaseId: "",
    description: "",
    status: 0,
    type: 0,
    size: 0,
};
exports.Backup = {
    $type: "yandex.cloud.ydb.v1.Backup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.folderId !== "") {
            writer.uint32(26).string(message.folderId);
        }
        if (message.databaseId !== "") {
            writer.uint32(34).string(message.databaseId);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.startedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.completedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completedAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.backupSettings !== undefined) {
            exports.BackupSettings.encode(message.backupSettings, writer.uint32(82).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(88).int32(message.type);
        }
        if (message.size !== 0) {
            writer.uint32(96).int64(message.size);
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
                    message.name = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.databaseId = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.startedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.completedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.status = reader.int32();
                    break;
                case 10:
                    message.backupSettings = exports.BackupSettings.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.type = reader.int32();
                    break;
                case 12:
                    message.size = longToNumber(reader.int64());
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
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.completedAt =
            object.completedAt !== undefined && object.completedAt !== null
                ? fromJsonTimestamp(object.completedAt)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? backup_StatusFromJSON(object.status)
                : 0;
        message.backupSettings =
            object.backupSettings !== undefined && object.backupSettings !== null
                ? exports.BackupSettings.fromJSON(object.backupSettings)
                : undefined;
        message.type =
            object.type !== undefined && object.type !== null
                ? backup_TypeFromJSON(object.type)
                : 0;
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.startedAt !== undefined &&
            (obj.startedAt = message.startedAt.toISOString());
        message.completedAt !== undefined &&
            (obj.completedAt = message.completedAt.toISOString());
        message.status !== undefined &&
            (obj.status = backup_StatusToJSON(message.status));
        message.backupSettings !== undefined &&
            (obj.backupSettings = message.backupSettings
                ? exports.BackupSettings.toJSON(message.backupSettings)
                : undefined);
        message.type !== undefined && (obj.type = backup_TypeToJSON(message.type));
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseBackup);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.folderId = (_c = object.folderId) !== null && _c !== void 0 ? _c : "";
        message.databaseId = (_d = object.databaseId) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.createdAt = (_f = object.createdAt) !== null && _f !== void 0 ? _f : undefined;
        message.startedAt = (_g = object.startedAt) !== null && _g !== void 0 ? _g : undefined;
        message.completedAt = (_h = object.completedAt) !== null && _h !== void 0 ? _h : undefined;
        message.status = (_j = object.status) !== null && _j !== void 0 ? _j : 0;
        message.backupSettings =
            object.backupSettings !== undefined && object.backupSettings !== null
                ? exports.BackupSettings.fromPartial(object.backupSettings)
                : undefined;
        message.type = (_k = object.type) !== null && _k !== void 0 ? _k : 0;
        message.size = (_l = object.size) !== null && _l !== void 0 ? _l : 0;
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
