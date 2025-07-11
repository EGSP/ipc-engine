"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyApplication = exports.PolicySettings_Scheduling_BackupSet_SinceLastExecTime = exports.PolicySettings_Scheduling_BackupSet_Time = exports.PolicySettings_Scheduling_BackupSet = exports.PolicySettings_Scheduling = exports.PolicySettings_Retention_RetentionRule = exports.PolicySettings_Retention = exports.PolicySettings_TimeOfDay = exports.PolicySettings_PerformanceWindow = exports.PolicySettings_ArchiveProperties = exports.PolicySettings_VolumeShadowCopyServiceSettings = exports.PolicySettings_Splitting = exports.PolicySettings_RetriesConfiguration = exports.PolicySettings_Interval = exports.PolicySettings = exports.Policy = exports.policyApplication_StatusToJSON = exports.policyApplication_StatusFromJSON = exports.PolicyApplication_Status = exports.policySettings_Scheduling_SchemeToJSON = exports.policySettings_Scheduling_SchemeFromJSON = exports.PolicySettings_Scheduling_Scheme = exports.policySettings_VolumeShadowCopyServiceSettings_VSSProviderToJSON = exports.policySettings_VolumeShadowCopyServiceSettings_VSSProviderFromJSON = exports.PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider = exports.policySettings_Interval_TypeToJSON = exports.policySettings_Interval_TypeFromJSON = exports.PolicySettings_Interval_Type = exports.policySettings_ChangedBlockTrackingToJSON = exports.policySettings_ChangedBlockTrackingFromJSON = exports.PolicySettings_ChangedBlockTracking = exports.policySettings_DayToJSON = exports.policySettings_DayFromJSON = exports.PolicySettings_Day = exports.policySettings_RepeatePeriodToJSON = exports.policySettings_RepeatePeriodFromJSON = exports.PolicySettings_RepeatePeriod = exports.policySettings_CompressionToJSON = exports.policySettings_CompressionFromJSON = exports.PolicySettings_Compression = exports.formatToJSON = exports.formatFromJSON = exports.Format = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.backup.v1";
/**
 * Format of the backup in policy. For backup locations that can be browsed
 * with a file manager, the backup format determines the number of files and
 * their extension.
 */
var Format;
(function (Format) {
    Format[Format["FORMAT_UNSPECIFIED"] = 0] = "FORMAT_UNSPECIFIED";
    /** VERSION_11 - A legacy backup format used in older versions. It's not recommended to use. */
    Format[Format["VERSION_11"] = 1] = "VERSION_11";
    /** VERSION_12 - A new format recommended in most cases for fast backup and recovery. */
    Format[Format["VERSION_12"] = 2] = "VERSION_12";
    /**
     * AUTO - Automatic version selection. Will be used version 12 unless the protection
     * plan (policy) appends backups to the ones created by earlier product
     * versions.
     */
    Format[Format["AUTO"] = 3] = "AUTO";
    Format[Format["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Format = exports.Format || (exports.Format = {}));
function formatFromJSON(object) {
    switch (object) {
        case 0:
        case "FORMAT_UNSPECIFIED":
            return Format.FORMAT_UNSPECIFIED;
        case 1:
        case "VERSION_11":
            return Format.VERSION_11;
        case 2:
        case "VERSION_12":
            return Format.VERSION_12;
        case 3:
        case "AUTO":
            return Format.AUTO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Format.UNRECOGNIZED;
    }
}
exports.formatFromJSON = formatFromJSON;
function formatToJSON(object) {
    switch (object) {
        case Format.FORMAT_UNSPECIFIED:
            return "FORMAT_UNSPECIFIED";
        case Format.VERSION_11:
            return "VERSION_11";
        case Format.VERSION_12:
            return "VERSION_12";
        case Format.AUTO:
            return "AUTO";
        default:
            return "UNKNOWN";
    }
}
exports.formatToJSON = formatToJSON;
/** Compression rate of the backups. */
var PolicySettings_Compression;
(function (PolicySettings_Compression) {
    PolicySettings_Compression[PolicySettings_Compression["COMPRESSION_UNSPECIFIED"] = 0] = "COMPRESSION_UNSPECIFIED";
    PolicySettings_Compression[PolicySettings_Compression["NORMAL"] = 1] = "NORMAL";
    PolicySettings_Compression[PolicySettings_Compression["HIGH"] = 2] = "HIGH";
    PolicySettings_Compression[PolicySettings_Compression["MAX"] = 3] = "MAX";
    PolicySettings_Compression[PolicySettings_Compression["OFF"] = 4] = "OFF";
    PolicySettings_Compression[PolicySettings_Compression["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PolicySettings_Compression = exports.PolicySettings_Compression || (exports.PolicySettings_Compression = {}));
function policySettings_CompressionFromJSON(object) {
    switch (object) {
        case 0:
        case "COMPRESSION_UNSPECIFIED":
            return PolicySettings_Compression.COMPRESSION_UNSPECIFIED;
        case 1:
        case "NORMAL":
            return PolicySettings_Compression.NORMAL;
        case 2:
        case "HIGH":
            return PolicySettings_Compression.HIGH;
        case 3:
        case "MAX":
            return PolicySettings_Compression.MAX;
        case 4:
        case "OFF":
            return PolicySettings_Compression.OFF;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PolicySettings_Compression.UNRECOGNIZED;
    }
}
exports.policySettings_CompressionFromJSON = policySettings_CompressionFromJSON;
function policySettings_CompressionToJSON(object) {
    switch (object) {
        case PolicySettings_Compression.COMPRESSION_UNSPECIFIED:
            return "COMPRESSION_UNSPECIFIED";
        case PolicySettings_Compression.NORMAL:
            return "NORMAL";
        case PolicySettings_Compression.HIGH:
            return "HIGH";
        case PolicySettings_Compression.MAX:
            return "MAX";
        case PolicySettings_Compression.OFF:
            return "OFF";
        default:
            return "UNKNOWN";
    }
}
exports.policySettings_CompressionToJSON = policySettings_CompressionToJSON;
var PolicySettings_RepeatePeriod;
(function (PolicySettings_RepeatePeriod) {
    PolicySettings_RepeatePeriod[PolicySettings_RepeatePeriod["REPEATE_PERIOD_UNSPECIFIED"] = 0] = "REPEATE_PERIOD_UNSPECIFIED";
    PolicySettings_RepeatePeriod[PolicySettings_RepeatePeriod["HOURLY"] = 1] = "HOURLY";
    PolicySettings_RepeatePeriod[PolicySettings_RepeatePeriod["DAILY"] = 2] = "DAILY";
    PolicySettings_RepeatePeriod[PolicySettings_RepeatePeriod["WEEKLY"] = 3] = "WEEKLY";
    PolicySettings_RepeatePeriod[PolicySettings_RepeatePeriod["MONTHLY"] = 4] = "MONTHLY";
    PolicySettings_RepeatePeriod[PolicySettings_RepeatePeriod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PolicySettings_RepeatePeriod = exports.PolicySettings_RepeatePeriod || (exports.PolicySettings_RepeatePeriod = {}));
function policySettings_RepeatePeriodFromJSON(object) {
    switch (object) {
        case 0:
        case "REPEATE_PERIOD_UNSPECIFIED":
            return PolicySettings_RepeatePeriod.REPEATE_PERIOD_UNSPECIFIED;
        case 1:
        case "HOURLY":
            return PolicySettings_RepeatePeriod.HOURLY;
        case 2:
        case "DAILY":
            return PolicySettings_RepeatePeriod.DAILY;
        case 3:
        case "WEEKLY":
            return PolicySettings_RepeatePeriod.WEEKLY;
        case 4:
        case "MONTHLY":
            return PolicySettings_RepeatePeriod.MONTHLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PolicySettings_RepeatePeriod.UNRECOGNIZED;
    }
}
exports.policySettings_RepeatePeriodFromJSON = policySettings_RepeatePeriodFromJSON;
function policySettings_RepeatePeriodToJSON(object) {
    switch (object) {
        case PolicySettings_RepeatePeriod.REPEATE_PERIOD_UNSPECIFIED:
            return "REPEATE_PERIOD_UNSPECIFIED";
        case PolicySettings_RepeatePeriod.HOURLY:
            return "HOURLY";
        case PolicySettings_RepeatePeriod.DAILY:
            return "DAILY";
        case PolicySettings_RepeatePeriod.WEEKLY:
            return "WEEKLY";
        case PolicySettings_RepeatePeriod.MONTHLY:
            return "MONTHLY";
        default:
            return "UNKNOWN";
    }
}
exports.policySettings_RepeatePeriodToJSON = policySettings_RepeatePeriodToJSON;
var PolicySettings_Day;
(function (PolicySettings_Day) {
    PolicySettings_Day[PolicySettings_Day["DAY_UNSPECIFIED"] = 0] = "DAY_UNSPECIFIED";
    PolicySettings_Day[PolicySettings_Day["MONDAY"] = 1] = "MONDAY";
    PolicySettings_Day[PolicySettings_Day["TUESDAY"] = 2] = "TUESDAY";
    PolicySettings_Day[PolicySettings_Day["WEDNESDAY"] = 3] = "WEDNESDAY";
    PolicySettings_Day[PolicySettings_Day["THURSDAY"] = 4] = "THURSDAY";
    PolicySettings_Day[PolicySettings_Day["FRIDAY"] = 5] = "FRIDAY";
    PolicySettings_Day[PolicySettings_Day["SATURDAY"] = 6] = "SATURDAY";
    PolicySettings_Day[PolicySettings_Day["SUNDAY"] = 7] = "SUNDAY";
    PolicySettings_Day[PolicySettings_Day["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PolicySettings_Day = exports.PolicySettings_Day || (exports.PolicySettings_Day = {}));
function policySettings_DayFromJSON(object) {
    switch (object) {
        case 0:
        case "DAY_UNSPECIFIED":
            return PolicySettings_Day.DAY_UNSPECIFIED;
        case 1:
        case "MONDAY":
            return PolicySettings_Day.MONDAY;
        case 2:
        case "TUESDAY":
            return PolicySettings_Day.TUESDAY;
        case 3:
        case "WEDNESDAY":
            return PolicySettings_Day.WEDNESDAY;
        case 4:
        case "THURSDAY":
            return PolicySettings_Day.THURSDAY;
        case 5:
        case "FRIDAY":
            return PolicySettings_Day.FRIDAY;
        case 6:
        case "SATURDAY":
            return PolicySettings_Day.SATURDAY;
        case 7:
        case "SUNDAY":
            return PolicySettings_Day.SUNDAY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PolicySettings_Day.UNRECOGNIZED;
    }
}
exports.policySettings_DayFromJSON = policySettings_DayFromJSON;
function policySettings_DayToJSON(object) {
    switch (object) {
        case PolicySettings_Day.DAY_UNSPECIFIED:
            return "DAY_UNSPECIFIED";
        case PolicySettings_Day.MONDAY:
            return "MONDAY";
        case PolicySettings_Day.TUESDAY:
            return "TUESDAY";
        case PolicySettings_Day.WEDNESDAY:
            return "WEDNESDAY";
        case PolicySettings_Day.THURSDAY:
            return "THURSDAY";
        case PolicySettings_Day.FRIDAY:
            return "FRIDAY";
        case PolicySettings_Day.SATURDAY:
            return "SATURDAY";
        case PolicySettings_Day.SUNDAY:
            return "SUNDAY";
        default:
            return "UNKNOWN";
    }
}
exports.policySettings_DayToJSON = policySettings_DayToJSON;
var PolicySettings_ChangedBlockTracking;
(function (PolicySettings_ChangedBlockTracking) {
    PolicySettings_ChangedBlockTracking[PolicySettings_ChangedBlockTracking["CHANGED_BLOCK_TRACKING_UNSPECIFIED"] = 0] = "CHANGED_BLOCK_TRACKING_UNSPECIFIED";
    PolicySettings_ChangedBlockTracking[PolicySettings_ChangedBlockTracking["USE_IF_ENABLED"] = 1] = "USE_IF_ENABLED";
    PolicySettings_ChangedBlockTracking[PolicySettings_ChangedBlockTracking["ENABLE_AND_USE"] = 2] = "ENABLE_AND_USE";
    PolicySettings_ChangedBlockTracking[PolicySettings_ChangedBlockTracking["DO_NOT_USE"] = 3] = "DO_NOT_USE";
    PolicySettings_ChangedBlockTracking[PolicySettings_ChangedBlockTracking["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PolicySettings_ChangedBlockTracking = exports.PolicySettings_ChangedBlockTracking || (exports.PolicySettings_ChangedBlockTracking = {}));
function policySettings_ChangedBlockTrackingFromJSON(object) {
    switch (object) {
        case 0:
        case "CHANGED_BLOCK_TRACKING_UNSPECIFIED":
            return PolicySettings_ChangedBlockTracking.CHANGED_BLOCK_TRACKING_UNSPECIFIED;
        case 1:
        case "USE_IF_ENABLED":
            return PolicySettings_ChangedBlockTracking.USE_IF_ENABLED;
        case 2:
        case "ENABLE_AND_USE":
            return PolicySettings_ChangedBlockTracking.ENABLE_AND_USE;
        case 3:
        case "DO_NOT_USE":
            return PolicySettings_ChangedBlockTracking.DO_NOT_USE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PolicySettings_ChangedBlockTracking.UNRECOGNIZED;
    }
}
exports.policySettings_ChangedBlockTrackingFromJSON = policySettings_ChangedBlockTrackingFromJSON;
function policySettings_ChangedBlockTrackingToJSON(object) {
    switch (object) {
        case PolicySettings_ChangedBlockTracking.CHANGED_BLOCK_TRACKING_UNSPECIFIED:
            return "CHANGED_BLOCK_TRACKING_UNSPECIFIED";
        case PolicySettings_ChangedBlockTracking.USE_IF_ENABLED:
            return "USE_IF_ENABLED";
        case PolicySettings_ChangedBlockTracking.ENABLE_AND_USE:
            return "ENABLE_AND_USE";
        case PolicySettings_ChangedBlockTracking.DO_NOT_USE:
            return "DO_NOT_USE";
        default:
            return "UNKNOWN";
    }
}
exports.policySettings_ChangedBlockTrackingToJSON = policySettings_ChangedBlockTrackingToJSON;
var PolicySettings_Interval_Type;
(function (PolicySettings_Interval_Type) {
    PolicySettings_Interval_Type[PolicySettings_Interval_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    PolicySettings_Interval_Type[PolicySettings_Interval_Type["SECONDS"] = 1] = "SECONDS";
    PolicySettings_Interval_Type[PolicySettings_Interval_Type["MINUTES"] = 2] = "MINUTES";
    PolicySettings_Interval_Type[PolicySettings_Interval_Type["HOURS"] = 3] = "HOURS";
    PolicySettings_Interval_Type[PolicySettings_Interval_Type["DAYS"] = 4] = "DAYS";
    PolicySettings_Interval_Type[PolicySettings_Interval_Type["WEEKS"] = 5] = "WEEKS";
    PolicySettings_Interval_Type[PolicySettings_Interval_Type["MONTHS"] = 6] = "MONTHS";
    PolicySettings_Interval_Type[PolicySettings_Interval_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PolicySettings_Interval_Type = exports.PolicySettings_Interval_Type || (exports.PolicySettings_Interval_Type = {}));
function policySettings_Interval_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return PolicySettings_Interval_Type.TYPE_UNSPECIFIED;
        case 1:
        case "SECONDS":
            return PolicySettings_Interval_Type.SECONDS;
        case 2:
        case "MINUTES":
            return PolicySettings_Interval_Type.MINUTES;
        case 3:
        case "HOURS":
            return PolicySettings_Interval_Type.HOURS;
        case 4:
        case "DAYS":
            return PolicySettings_Interval_Type.DAYS;
        case 5:
        case "WEEKS":
            return PolicySettings_Interval_Type.WEEKS;
        case 6:
        case "MONTHS":
            return PolicySettings_Interval_Type.MONTHS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PolicySettings_Interval_Type.UNRECOGNIZED;
    }
}
exports.policySettings_Interval_TypeFromJSON = policySettings_Interval_TypeFromJSON;
function policySettings_Interval_TypeToJSON(object) {
    switch (object) {
        case PolicySettings_Interval_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case PolicySettings_Interval_Type.SECONDS:
            return "SECONDS";
        case PolicySettings_Interval_Type.MINUTES:
            return "MINUTES";
        case PolicySettings_Interval_Type.HOURS:
            return "HOURS";
        case PolicySettings_Interval_Type.DAYS:
            return "DAYS";
        case PolicySettings_Interval_Type.WEEKS:
            return "WEEKS";
        case PolicySettings_Interval_Type.MONTHS:
            return "MONTHS";
        default:
            return "UNKNOWN";
    }
}
exports.policySettings_Interval_TypeToJSON = policySettings_Interval_TypeToJSON;
var PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider;
(function (PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider) {
    PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider[PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider["VSS_PROVIDER_UNSPECIFIED"] = 0] = "VSS_PROVIDER_UNSPECIFIED";
    PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider[PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider["NATIVE"] = 1] = "NATIVE";
    PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider[PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider["TARGET_SYSTEM_DEFINED"] = 2] = "TARGET_SYSTEM_DEFINED";
    PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider[PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider = exports.PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider || (exports.PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider = {}));
function policySettings_VolumeShadowCopyServiceSettings_VSSProviderFromJSON(object) {
    switch (object) {
        case 0:
        case "VSS_PROVIDER_UNSPECIFIED":
            return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.VSS_PROVIDER_UNSPECIFIED;
        case 1:
        case "NATIVE":
            return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.NATIVE;
        case 2:
        case "TARGET_SYSTEM_DEFINED":
            return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.TARGET_SYSTEM_DEFINED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.UNRECOGNIZED;
    }
}
exports.policySettings_VolumeShadowCopyServiceSettings_VSSProviderFromJSON = policySettings_VolumeShadowCopyServiceSettings_VSSProviderFromJSON;
function policySettings_VolumeShadowCopyServiceSettings_VSSProviderToJSON(object) {
    switch (object) {
        case PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.VSS_PROVIDER_UNSPECIFIED:
            return "VSS_PROVIDER_UNSPECIFIED";
        case PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.NATIVE:
            return "NATIVE";
        case PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider.TARGET_SYSTEM_DEFINED:
            return "TARGET_SYSTEM_DEFINED";
        default:
            return "UNKNOWN";
    }
}
exports.policySettings_VolumeShadowCopyServiceSettings_VSSProviderToJSON = policySettings_VolumeShadowCopyServiceSettings_VSSProviderToJSON;
/** Scheme of backups. */
var PolicySettings_Scheduling_Scheme;
(function (PolicySettings_Scheduling_Scheme) {
    PolicySettings_Scheduling_Scheme[PolicySettings_Scheduling_Scheme["SCHEME_UNSPECIFIED"] = 0] = "SCHEME_UNSPECIFIED";
    PolicySettings_Scheduling_Scheme[PolicySettings_Scheduling_Scheme["SIMPLE"] = 1] = "SIMPLE";
    PolicySettings_Scheduling_Scheme[PolicySettings_Scheduling_Scheme["ALWAYS_FULL"] = 2] = "ALWAYS_FULL";
    PolicySettings_Scheduling_Scheme[PolicySettings_Scheduling_Scheme["ALWAYS_INCREMENTAL"] = 3] = "ALWAYS_INCREMENTAL";
    PolicySettings_Scheduling_Scheme[PolicySettings_Scheduling_Scheme["WEEKLY_INCREMENTAL"] = 4] = "WEEKLY_INCREMENTAL";
    PolicySettings_Scheduling_Scheme[PolicySettings_Scheduling_Scheme["WEEKLY_FULL_DAILY_INCREMENTAL"] = 5] = "WEEKLY_FULL_DAILY_INCREMENTAL";
    /**
     * CUSTOM - Custom will require to specify schedules for full, differential
     * and incremental backups additionally.
     */
    PolicySettings_Scheduling_Scheme[PolicySettings_Scheduling_Scheme["CUSTOM"] = 6] = "CUSTOM";
    PolicySettings_Scheduling_Scheme[PolicySettings_Scheduling_Scheme["CDP"] = 7] = "CDP";
    PolicySettings_Scheduling_Scheme[PolicySettings_Scheduling_Scheme["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PolicySettings_Scheduling_Scheme = exports.PolicySettings_Scheduling_Scheme || (exports.PolicySettings_Scheduling_Scheme = {}));
function policySettings_Scheduling_SchemeFromJSON(object) {
    switch (object) {
        case 0:
        case "SCHEME_UNSPECIFIED":
            return PolicySettings_Scheduling_Scheme.SCHEME_UNSPECIFIED;
        case 1:
        case "SIMPLE":
            return PolicySettings_Scheduling_Scheme.SIMPLE;
        case 2:
        case "ALWAYS_FULL":
            return PolicySettings_Scheduling_Scheme.ALWAYS_FULL;
        case 3:
        case "ALWAYS_INCREMENTAL":
            return PolicySettings_Scheduling_Scheme.ALWAYS_INCREMENTAL;
        case 4:
        case "WEEKLY_INCREMENTAL":
            return PolicySettings_Scheduling_Scheme.WEEKLY_INCREMENTAL;
        case 5:
        case "WEEKLY_FULL_DAILY_INCREMENTAL":
            return PolicySettings_Scheduling_Scheme.WEEKLY_FULL_DAILY_INCREMENTAL;
        case 6:
        case "CUSTOM":
            return PolicySettings_Scheduling_Scheme.CUSTOM;
        case 7:
        case "CDP":
            return PolicySettings_Scheduling_Scheme.CDP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PolicySettings_Scheduling_Scheme.UNRECOGNIZED;
    }
}
exports.policySettings_Scheduling_SchemeFromJSON = policySettings_Scheduling_SchemeFromJSON;
function policySettings_Scheduling_SchemeToJSON(object) {
    switch (object) {
        case PolicySettings_Scheduling_Scheme.SCHEME_UNSPECIFIED:
            return "SCHEME_UNSPECIFIED";
        case PolicySettings_Scheduling_Scheme.SIMPLE:
            return "SIMPLE";
        case PolicySettings_Scheduling_Scheme.ALWAYS_FULL:
            return "ALWAYS_FULL";
        case PolicySettings_Scheduling_Scheme.ALWAYS_INCREMENTAL:
            return "ALWAYS_INCREMENTAL";
        case PolicySettings_Scheduling_Scheme.WEEKLY_INCREMENTAL:
            return "WEEKLY_INCREMENTAL";
        case PolicySettings_Scheduling_Scheme.WEEKLY_FULL_DAILY_INCREMENTAL:
            return "WEEKLY_FULL_DAILY_INCREMENTAL";
        case PolicySettings_Scheduling_Scheme.CUSTOM:
            return "CUSTOM";
        case PolicySettings_Scheduling_Scheme.CDP:
            return "CDP";
        default:
            return "UNKNOWN";
    }
}
exports.policySettings_Scheduling_SchemeToJSON = policySettings_Scheduling_SchemeToJSON;
var PolicyApplication_Status;
(function (PolicyApplication_Status) {
    PolicyApplication_Status[PolicyApplication_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** OK - Application is applied and everything is OK. */
    PolicyApplication_Status[PolicyApplication_Status["OK"] = 1] = "OK";
    /** RUNNING - Application is currently running. */
    PolicyApplication_Status[PolicyApplication_Status["RUNNING"] = 2] = "RUNNING";
    /** DISABLED - Application is disabled. */
    PolicyApplication_Status[PolicyApplication_Status["DISABLED"] = 3] = "DISABLED";
    PolicyApplication_Status[PolicyApplication_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PolicyApplication_Status = exports.PolicyApplication_Status || (exports.PolicyApplication_Status = {}));
function policyApplication_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return PolicyApplication_Status.STATUS_UNSPECIFIED;
        case 1:
        case "OK":
            return PolicyApplication_Status.OK;
        case 2:
        case "RUNNING":
            return PolicyApplication_Status.RUNNING;
        case 3:
        case "DISABLED":
            return PolicyApplication_Status.DISABLED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PolicyApplication_Status.UNRECOGNIZED;
    }
}
exports.policyApplication_StatusFromJSON = policyApplication_StatusFromJSON;
function policyApplication_StatusToJSON(object) {
    switch (object) {
        case PolicyApplication_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case PolicyApplication_Status.OK:
            return "OK";
        case PolicyApplication_Status.RUNNING:
            return "RUNNING";
        case PolicyApplication_Status.DISABLED:
            return "DISABLED";
        default:
            return "UNKNOWN";
    }
}
exports.policyApplication_StatusToJSON = policyApplication_StatusToJSON;
const basePolicy = {
    $type: "yandex.cloud.backup.v1.Policy",
    id: "",
    name: "",
    enabled: false,
    folderId: "",
};
exports.Policy = {
    $type: "yandex.cloud.backup.v1.Policy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.enabled === true) {
            writer.uint32(40).bool(message.enabled);
        }
        if (message.settings !== undefined) {
            exports.PolicySettings.encode(message.settings, writer.uint32(50).fork()).ldelim();
        }
        if (message.folderId !== "") {
            writer.uint32(58).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicy);
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enabled = reader.bool();
                    break;
                case 6:
                    message.settings = exports.PolicySettings.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePolicy);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.PolicySettings.fromJSON(object.settings)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.PolicySettings.toJSON(message.settings)
                : undefined);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, basePolicy);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.updatedAt = (_d = object.updatedAt) !== null && _d !== void 0 ? _d : undefined;
        message.enabled = (_e = object.enabled) !== null && _e !== void 0 ? _e : false;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.PolicySettings.fromPartial(object.settings)
                : undefined;
        message.folderId = (_f = object.folderId) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Policy.$type, exports.Policy);
const basePolicySettings = {
    $type: "yandex.cloud.backup.v1.PolicySettings",
    compression: 0,
    format: 0,
    multiVolumeSnapshottingEnabled: false,
    preserveFileSecuritySettings: false,
    silentModeEnabled: false,
    cbt: 0,
    fastBackupEnabled: false,
    quiesceSnapshottingEnabled: false,
};
exports.PolicySettings = {
    $type: "yandex.cloud.backup.v1.PolicySettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.compression !== 0) {
            writer.uint32(8).int32(message.compression);
        }
        if (message.format !== 0) {
            writer.uint32(16).int32(message.format);
        }
        if (message.multiVolumeSnapshottingEnabled === true) {
            writer.uint32(24).bool(message.multiVolumeSnapshottingEnabled);
        }
        if (message.preserveFileSecuritySettings === true) {
            writer.uint32(32).bool(message.preserveFileSecuritySettings);
        }
        if (message.reattempts !== undefined) {
            exports.PolicySettings_RetriesConfiguration.encode(message.reattempts, writer.uint32(42).fork()).ldelim();
        }
        if (message.silentModeEnabled === true) {
            writer.uint32(48).bool(message.silentModeEnabled);
        }
        if (message.splitting !== undefined) {
            exports.PolicySettings_Splitting.encode(message.splitting, writer.uint32(58).fork()).ldelim();
        }
        if (message.vmSnapshotReattempts !== undefined) {
            exports.PolicySettings_RetriesConfiguration.encode(message.vmSnapshotReattempts, writer.uint32(66).fork()).ldelim();
        }
        if (message.vss !== undefined) {
            exports.PolicySettings_VolumeShadowCopyServiceSettings.encode(message.vss, writer.uint32(74).fork()).ldelim();
        }
        if (message.archive !== undefined) {
            exports.PolicySettings_ArchiveProperties.encode(message.archive, writer.uint32(82).fork()).ldelim();
        }
        if (message.performanceWindow !== undefined) {
            exports.PolicySettings_PerformanceWindow.encode(message.performanceWindow, writer.uint32(90).fork()).ldelim();
        }
        if (message.retention !== undefined) {
            exports.PolicySettings_Retention.encode(message.retention, writer.uint32(98).fork()).ldelim();
        }
        if (message.scheduling !== undefined) {
            exports.PolicySettings_Scheduling.encode(message.scheduling, writer.uint32(122).fork()).ldelim();
        }
        if (message.cbt !== 0) {
            writer.uint32(128).int32(message.cbt);
        }
        if (message.fastBackupEnabled === true) {
            writer.uint32(136).bool(message.fastBackupEnabled);
        }
        if (message.quiesceSnapshottingEnabled === true) {
            writer.uint32(144).bool(message.quiesceSnapshottingEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.compression = reader.int32();
                    break;
                case 2:
                    message.format = reader.int32();
                    break;
                case 3:
                    message.multiVolumeSnapshottingEnabled = reader.bool();
                    break;
                case 4:
                    message.preserveFileSecuritySettings = reader.bool();
                    break;
                case 5:
                    message.reattempts = exports.PolicySettings_RetriesConfiguration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.silentModeEnabled = reader.bool();
                    break;
                case 7:
                    message.splitting = exports.PolicySettings_Splitting.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.vmSnapshotReattempts =
                        exports.PolicySettings_RetriesConfiguration.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.vss = exports.PolicySettings_VolumeShadowCopyServiceSettings.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.archive = exports.PolicySettings_ArchiveProperties.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.performanceWindow = exports.PolicySettings_PerformanceWindow.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.retention = exports.PolicySettings_Retention.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.scheduling = exports.PolicySettings_Scheduling.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.cbt = reader.int32();
                    break;
                case 17:
                    message.fastBackupEnabled = reader.bool();
                    break;
                case 18:
                    message.quiesceSnapshottingEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePolicySettings);
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? policySettings_CompressionFromJSON(object.compression)
                : 0;
        message.format =
            object.format !== undefined && object.format !== null
                ? formatFromJSON(object.format)
                : 0;
        message.multiVolumeSnapshottingEnabled =
            object.multiVolumeSnapshottingEnabled !== undefined &&
                object.multiVolumeSnapshottingEnabled !== null
                ? Boolean(object.multiVolumeSnapshottingEnabled)
                : false;
        message.preserveFileSecuritySettings =
            object.preserveFileSecuritySettings !== undefined &&
                object.preserveFileSecuritySettings !== null
                ? Boolean(object.preserveFileSecuritySettings)
                : false;
        message.reattempts =
            object.reattempts !== undefined && object.reattempts !== null
                ? exports.PolicySettings_RetriesConfiguration.fromJSON(object.reattempts)
                : undefined;
        message.silentModeEnabled =
            object.silentModeEnabled !== undefined &&
                object.silentModeEnabled !== null
                ? Boolean(object.silentModeEnabled)
                : false;
        message.splitting =
            object.splitting !== undefined && object.splitting !== null
                ? exports.PolicySettings_Splitting.fromJSON(object.splitting)
                : undefined;
        message.vmSnapshotReattempts =
            object.vmSnapshotReattempts !== undefined &&
                object.vmSnapshotReattempts !== null
                ? exports.PolicySettings_RetriesConfiguration.fromJSON(object.vmSnapshotReattempts)
                : undefined;
        message.vss =
            object.vss !== undefined && object.vss !== null
                ? exports.PolicySettings_VolumeShadowCopyServiceSettings.fromJSON(object.vss)
                : undefined;
        message.archive =
            object.archive !== undefined && object.archive !== null
                ? exports.PolicySettings_ArchiveProperties.fromJSON(object.archive)
                : undefined;
        message.performanceWindow =
            object.performanceWindow !== undefined &&
                object.performanceWindow !== null
                ? exports.PolicySettings_PerformanceWindow.fromJSON(object.performanceWindow)
                : undefined;
        message.retention =
            object.retention !== undefined && object.retention !== null
                ? exports.PolicySettings_Retention.fromJSON(object.retention)
                : undefined;
        message.scheduling =
            object.scheduling !== undefined && object.scheduling !== null
                ? exports.PolicySettings_Scheduling.fromJSON(object.scheduling)
                : undefined;
        message.cbt =
            object.cbt !== undefined && object.cbt !== null
                ? policySettings_ChangedBlockTrackingFromJSON(object.cbt)
                : 0;
        message.fastBackupEnabled =
            object.fastBackupEnabled !== undefined &&
                object.fastBackupEnabled !== null
                ? Boolean(object.fastBackupEnabled)
                : false;
        message.quiesceSnapshottingEnabled =
            object.quiesceSnapshottingEnabled !== undefined &&
                object.quiesceSnapshottingEnabled !== null
                ? Boolean(object.quiesceSnapshottingEnabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.compression !== undefined &&
            (obj.compression = policySettings_CompressionToJSON(message.compression));
        message.format !== undefined && (obj.format = formatToJSON(message.format));
        message.multiVolumeSnapshottingEnabled !== undefined &&
            (obj.multiVolumeSnapshottingEnabled =
                message.multiVolumeSnapshottingEnabled);
        message.preserveFileSecuritySettings !== undefined &&
            (obj.preserveFileSecuritySettings = message.preserveFileSecuritySettings);
        message.reattempts !== undefined &&
            (obj.reattempts = message.reattempts
                ? exports.PolicySettings_RetriesConfiguration.toJSON(message.reattempts)
                : undefined);
        message.silentModeEnabled !== undefined &&
            (obj.silentModeEnabled = message.silentModeEnabled);
        message.splitting !== undefined &&
            (obj.splitting = message.splitting
                ? exports.PolicySettings_Splitting.toJSON(message.splitting)
                : undefined);
        message.vmSnapshotReattempts !== undefined &&
            (obj.vmSnapshotReattempts = message.vmSnapshotReattempts
                ? exports.PolicySettings_RetriesConfiguration.toJSON(message.vmSnapshotReattempts)
                : undefined);
        message.vss !== undefined &&
            (obj.vss = message.vss
                ? exports.PolicySettings_VolumeShadowCopyServiceSettings.toJSON(message.vss)
                : undefined);
        message.archive !== undefined &&
            (obj.archive = message.archive
                ? exports.PolicySettings_ArchiveProperties.toJSON(message.archive)
                : undefined);
        message.performanceWindow !== undefined &&
            (obj.performanceWindow = message.performanceWindow
                ? exports.PolicySettings_PerformanceWindow.toJSON(message.performanceWindow)
                : undefined);
        message.retention !== undefined &&
            (obj.retention = message.retention
                ? exports.PolicySettings_Retention.toJSON(message.retention)
                : undefined);
        message.scheduling !== undefined &&
            (obj.scheduling = message.scheduling
                ? exports.PolicySettings_Scheduling.toJSON(message.scheduling)
                : undefined);
        message.cbt !== undefined &&
            (obj.cbt = policySettings_ChangedBlockTrackingToJSON(message.cbt));
        message.fastBackupEnabled !== undefined &&
            (obj.fastBackupEnabled = message.fastBackupEnabled);
        message.quiesceSnapshottingEnabled !== undefined &&
            (obj.quiesceSnapshottingEnabled = message.quiesceSnapshottingEnabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, basePolicySettings);
        message.compression = (_a = object.compression) !== null && _a !== void 0 ? _a : 0;
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.multiVolumeSnapshottingEnabled =
            (_c = object.multiVolumeSnapshottingEnabled) !== null && _c !== void 0 ? _c : false;
        message.preserveFileSecuritySettings =
            (_d = object.preserveFileSecuritySettings) !== null && _d !== void 0 ? _d : false;
        message.reattempts =
            object.reattempts !== undefined && object.reattempts !== null
                ? exports.PolicySettings_RetriesConfiguration.fromPartial(object.reattempts)
                : undefined;
        message.silentModeEnabled = (_e = object.silentModeEnabled) !== null && _e !== void 0 ? _e : false;
        message.splitting =
            object.splitting !== undefined && object.splitting !== null
                ? exports.PolicySettings_Splitting.fromPartial(object.splitting)
                : undefined;
        message.vmSnapshotReattempts =
            object.vmSnapshotReattempts !== undefined &&
                object.vmSnapshotReattempts !== null
                ? exports.PolicySettings_RetriesConfiguration.fromPartial(object.vmSnapshotReattempts)
                : undefined;
        message.vss =
            object.vss !== undefined && object.vss !== null
                ? exports.PolicySettings_VolumeShadowCopyServiceSettings.fromPartial(object.vss)
                : undefined;
        message.archive =
            object.archive !== undefined && object.archive !== null
                ? exports.PolicySettings_ArchiveProperties.fromPartial(object.archive)
                : undefined;
        message.performanceWindow =
            object.performanceWindow !== undefined &&
                object.performanceWindow !== null
                ? exports.PolicySettings_PerformanceWindow.fromPartial(object.performanceWindow)
                : undefined;
        message.retention =
            object.retention !== undefined && object.retention !== null
                ? exports.PolicySettings_Retention.fromPartial(object.retention)
                : undefined;
        message.scheduling =
            object.scheduling !== undefined && object.scheduling !== null
                ? exports.PolicySettings_Scheduling.fromPartial(object.scheduling)
                : undefined;
        message.cbt = (_f = object.cbt) !== null && _f !== void 0 ? _f : 0;
        message.fastBackupEnabled = (_g = object.fastBackupEnabled) !== null && _g !== void 0 ? _g : false;
        message.quiesceSnapshottingEnabled =
            (_h = object.quiesceSnapshottingEnabled) !== null && _h !== void 0 ? _h : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings.$type, exports.PolicySettings);
const basePolicySettings_Interval = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Interval",
    type: 0,
    count: 0,
};
exports.PolicySettings_Interval = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Interval",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.count !== 0) {
            writer.uint32(16).int64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_Interval);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.count = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePolicySettings_Interval);
        message.type =
            object.type !== undefined && object.type !== null
                ? policySettings_Interval_TypeFromJSON(object.type)
                : 0;
        message.count =
            object.count !== undefined && object.count !== null
                ? Number(object.count)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = policySettings_Interval_TypeToJSON(message.type));
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePolicySettings_Interval);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.count = (_b = object.count) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_Interval.$type, exports.PolicySettings_Interval);
const basePolicySettings_RetriesConfiguration = {
    $type: "yandex.cloud.backup.v1.PolicySettings.RetriesConfiguration",
    enabled: false,
    maxAttempts: 0,
};
exports.PolicySettings_RetriesConfiguration = {
    $type: "yandex.cloud.backup.v1.PolicySettings.RetriesConfiguration",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.interval !== undefined) {
            exports.PolicySettings_Interval.encode(message.interval, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxAttempts !== 0) {
            writer.uint32(24).int64(message.maxAttempts);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_RetriesConfiguration);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.interval = exports.PolicySettings_Interval.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxAttempts = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePolicySettings_RetriesConfiguration);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? exports.PolicySettings_Interval.fromJSON(object.interval)
                : undefined;
        message.maxAttempts =
            object.maxAttempts !== undefined && object.maxAttempts !== null
                ? Number(object.maxAttempts)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? exports.PolicySettings_Interval.toJSON(message.interval)
                : undefined);
        message.maxAttempts !== undefined &&
            (obj.maxAttempts = Math.round(message.maxAttempts));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePolicySettings_RetriesConfiguration);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? exports.PolicySettings_Interval.fromPartial(object.interval)
                : undefined;
        message.maxAttempts = (_b = object.maxAttempts) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_RetriesConfiguration.$type, exports.PolicySettings_RetriesConfiguration);
const basePolicySettings_Splitting = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Splitting",
    size: 0,
};
exports.PolicySettings_Splitting = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Splitting",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_Splitting);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, basePolicySettings_Splitting);
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePolicySettings_Splitting);
        message.size = (_a = object.size) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_Splitting.$type, exports.PolicySettings_Splitting);
const basePolicySettings_VolumeShadowCopyServiceSettings = {
    $type: "yandex.cloud.backup.v1.PolicySettings.VolumeShadowCopyServiceSettings",
    enabled: false,
    provider: 0,
};
exports.PolicySettings_VolumeShadowCopyServiceSettings = {
    $type: "yandex.cloud.backup.v1.PolicySettings.VolumeShadowCopyServiceSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.provider !== 0) {
            writer.uint32(16).int32(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_VolumeShadowCopyServiceSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.provider = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePolicySettings_VolumeShadowCopyServiceSettings);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.provider =
            object.provider !== undefined && object.provider !== null
                ? policySettings_VolumeShadowCopyServiceSettings_VSSProviderFromJSON(object.provider)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.provider !== undefined &&
            (obj.provider =
                policySettings_VolumeShadowCopyServiceSettings_VSSProviderToJSON(message.provider));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePolicySettings_VolumeShadowCopyServiceSettings);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.provider = (_b = object.provider) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_VolumeShadowCopyServiceSettings.$type, exports.PolicySettings_VolumeShadowCopyServiceSettings);
const basePolicySettings_ArchiveProperties = {
    $type: "yandex.cloud.backup.v1.PolicySettings.ArchiveProperties",
    name: "",
};
exports.PolicySettings_ArchiveProperties = {
    $type: "yandex.cloud.backup.v1.PolicySettings.ArchiveProperties",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_ArchiveProperties);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePolicySettings_ArchiveProperties);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePolicySettings_ArchiveProperties);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_ArchiveProperties.$type, exports.PolicySettings_ArchiveProperties);
const basePolicySettings_PerformanceWindow = {
    $type: "yandex.cloud.backup.v1.PolicySettings.PerformanceWindow",
    enabled: false,
};
exports.PolicySettings_PerformanceWindow = {
    $type: "yandex.cloud.backup.v1.PolicySettings.PerformanceWindow",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_PerformanceWindow);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePolicySettings_PerformanceWindow);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePolicySettings_PerformanceWindow);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_PerformanceWindow.$type, exports.PolicySettings_PerformanceWindow);
const basePolicySettings_TimeOfDay = {
    $type: "yandex.cloud.backup.v1.PolicySettings.TimeOfDay",
    hour: 0,
    minute: 0,
};
exports.PolicySettings_TimeOfDay = {
    $type: "yandex.cloud.backup.v1.PolicySettings.TimeOfDay",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hour !== 0) {
            writer.uint32(8).int64(message.hour);
        }
        if (message.minute !== 0) {
            writer.uint32(16).int64(message.minute);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_TimeOfDay);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hour = longToNumber(reader.int64());
                    break;
                case 2:
                    message.minute = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePolicySettings_TimeOfDay);
        message.hour =
            object.hour !== undefined && object.hour !== null
                ? Number(object.hour)
                : 0;
        message.minute =
            object.minute !== undefined && object.minute !== null
                ? Number(object.minute)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hour !== undefined && (obj.hour = Math.round(message.hour));
        message.minute !== undefined && (obj.minute = Math.round(message.minute));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePolicySettings_TimeOfDay);
        message.hour = (_a = object.hour) !== null && _a !== void 0 ? _a : 0;
        message.minute = (_b = object.minute) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_TimeOfDay.$type, exports.PolicySettings_TimeOfDay);
const basePolicySettings_Retention = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Retention",
    afterBackup: false,
};
exports.PolicySettings_Retention = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Retention",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.rules) {
            exports.PolicySettings_Retention_RetentionRule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.afterBackup === true) {
            writer.uint32(16).bool(message.afterBackup);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_Retention);
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rules.push(exports.PolicySettings_Retention_RetentionRule.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.afterBackup = reader.bool();
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
        const message = Object.assign({}, basePolicySettings_Retention);
        message.rules = ((_a = object.rules) !== null && _a !== void 0 ? _a : []).map((e) => exports.PolicySettings_Retention_RetentionRule.fromJSON(e));
        message.afterBackup =
            object.afterBackup !== undefined && object.afterBackup !== null
                ? Boolean(object.afterBackup)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.rules) {
            obj.rules = message.rules.map((e) => e ? exports.PolicySettings_Retention_RetentionRule.toJSON(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        message.afterBackup !== undefined &&
            (obj.afterBackup = message.afterBackup);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePolicySettings_Retention);
        message.rules =
            ((_a = object.rules) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PolicySettings_Retention_RetentionRule.fromPartial(e))) || [];
        message.afterBackup = (_b = object.afterBackup) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_Retention.$type, exports.PolicySettings_Retention);
const basePolicySettings_Retention_RetentionRule = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Retention.RetentionRule",
    backupSet: 0,
};
exports.PolicySettings_Retention_RetentionRule = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Retention.RetentionRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.backupSet) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.maxAge !== undefined) {
            exports.PolicySettings_Interval.encode(message.maxAge, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxCount !== undefined) {
            writer.uint32(24).int64(message.maxCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_Retention_RetentionRule);
        message.backupSet = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.backupSet.push(reader.int32());
                        }
                    }
                    else {
                        message.backupSet.push(reader.int32());
                    }
                    break;
                case 2:
                    message.maxAge = exports.PolicySettings_Interval.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxCount = longToNumber(reader.int64());
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
        const message = Object.assign({}, basePolicySettings_Retention_RetentionRule);
        message.backupSet = ((_a = object.backupSet) !== null && _a !== void 0 ? _a : []).map((e) => policySettings_RepeatePeriodFromJSON(e));
        message.maxAge =
            object.maxAge !== undefined && object.maxAge !== null
                ? exports.PolicySettings_Interval.fromJSON(object.maxAge)
                : undefined;
        message.maxCount =
            object.maxCount !== undefined && object.maxCount !== null
                ? Number(object.maxCount)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backupSet) {
            obj.backupSet = message.backupSet.map((e) => policySettings_RepeatePeriodToJSON(e));
        }
        else {
            obj.backupSet = [];
        }
        message.maxAge !== undefined &&
            (obj.maxAge = message.maxAge
                ? exports.PolicySettings_Interval.toJSON(message.maxAge)
                : undefined);
        message.maxCount !== undefined &&
            (obj.maxCount = Math.round(message.maxCount));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePolicySettings_Retention_RetentionRule);
        message.backupSet = ((_a = object.backupSet) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.maxAge =
            object.maxAge !== undefined && object.maxAge !== null
                ? exports.PolicySettings_Interval.fromPartial(object.maxAge)
                : undefined;
        message.maxCount = (_b = object.maxCount) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_Retention_RetentionRule.$type, exports.PolicySettings_Retention_RetentionRule);
const basePolicySettings_Scheduling = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling",
    enabled: false,
    maxParallelBackups: 0,
    scheme: 0,
    weeklyBackupDay: 0,
};
exports.PolicySettings_Scheduling = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backupSets) {
            exports.PolicySettings_Scheduling_BackupSet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        if (message.maxParallelBackups !== 0) {
            writer.uint32(24).int64(message.maxParallelBackups);
        }
        if (message.randMaxDelay !== undefined) {
            exports.PolicySettings_Interval.encode(message.randMaxDelay, writer.uint32(34).fork()).ldelim();
        }
        if (message.scheme !== 0) {
            writer.uint32(40).int32(message.scheme);
        }
        if (message.weeklyBackupDay !== 0) {
            writer.uint32(48).int32(message.weeklyBackupDay);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_Scheduling);
        message.backupSets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupSets.push(exports.PolicySettings_Scheduling_BackupSet.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.enabled = reader.bool();
                    break;
                case 3:
                    message.maxParallelBackups = longToNumber(reader.int64());
                    break;
                case 4:
                    message.randMaxDelay = exports.PolicySettings_Interval.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.scheme = reader.int32();
                    break;
                case 6:
                    message.weeklyBackupDay = reader.int32();
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
        const message = Object.assign({}, basePolicySettings_Scheduling);
        message.backupSets = ((_a = object.backupSets) !== null && _a !== void 0 ? _a : []).map((e) => exports.PolicySettings_Scheduling_BackupSet.fromJSON(e));
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.maxParallelBackups =
            object.maxParallelBackups !== undefined &&
                object.maxParallelBackups !== null
                ? Number(object.maxParallelBackups)
                : 0;
        message.randMaxDelay =
            object.randMaxDelay !== undefined && object.randMaxDelay !== null
                ? exports.PolicySettings_Interval.fromJSON(object.randMaxDelay)
                : undefined;
        message.scheme =
            object.scheme !== undefined && object.scheme !== null
                ? policySettings_Scheduling_SchemeFromJSON(object.scheme)
                : 0;
        message.weeklyBackupDay =
            object.weeklyBackupDay !== undefined && object.weeklyBackupDay !== null
                ? policySettings_DayFromJSON(object.weeklyBackupDay)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backupSets) {
            obj.backupSets = message.backupSets.map((e) => e ? exports.PolicySettings_Scheduling_BackupSet.toJSON(e) : undefined);
        }
        else {
            obj.backupSets = [];
        }
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.maxParallelBackups !== undefined &&
            (obj.maxParallelBackups = Math.round(message.maxParallelBackups));
        message.randMaxDelay !== undefined &&
            (obj.randMaxDelay = message.randMaxDelay
                ? exports.PolicySettings_Interval.toJSON(message.randMaxDelay)
                : undefined);
        message.scheme !== undefined &&
            (obj.scheme = policySettings_Scheduling_SchemeToJSON(message.scheme));
        message.weeklyBackupDay !== undefined &&
            (obj.weeklyBackupDay = policySettings_DayToJSON(message.weeklyBackupDay));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, basePolicySettings_Scheduling);
        message.backupSets =
            ((_a = object.backupSets) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PolicySettings_Scheduling_BackupSet.fromPartial(e))) || [];
        message.enabled = (_b = object.enabled) !== null && _b !== void 0 ? _b : false;
        message.maxParallelBackups = (_c = object.maxParallelBackups) !== null && _c !== void 0 ? _c : 0;
        message.randMaxDelay =
            object.randMaxDelay !== undefined && object.randMaxDelay !== null
                ? exports.PolicySettings_Interval.fromPartial(object.randMaxDelay)
                : undefined;
        message.scheme = (_d = object.scheme) !== null && _d !== void 0 ? _d : 0;
        message.weeklyBackupDay = (_e = object.weeklyBackupDay) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_Scheduling.$type, exports.PolicySettings_Scheduling);
const basePolicySettings_Scheduling_BackupSet = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet",
};
exports.PolicySettings_Scheduling_BackupSet = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.time !== undefined) {
            exports.PolicySettings_Scheduling_BackupSet_Time.encode(message.time, writer.uint32(10).fork()).ldelim();
        }
        if (message.sinceLastExecTime !== undefined) {
            exports.PolicySettings_Scheduling_BackupSet_SinceLastExecTime.encode(message.sinceLastExecTime, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_Scheduling_BackupSet);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = exports.PolicySettings_Scheduling_BackupSet_Time.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sinceLastExecTime =
                        exports.PolicySettings_Scheduling_BackupSet_SinceLastExecTime.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePolicySettings_Scheduling_BackupSet);
        message.time =
            object.time !== undefined && object.time !== null
                ? exports.PolicySettings_Scheduling_BackupSet_Time.fromJSON(object.time)
                : undefined;
        message.sinceLastExecTime =
            object.sinceLastExecTime !== undefined &&
                object.sinceLastExecTime !== null
                ? exports.PolicySettings_Scheduling_BackupSet_SinceLastExecTime.fromJSON(object.sinceLastExecTime)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined &&
            (obj.time = message.time
                ? exports.PolicySettings_Scheduling_BackupSet_Time.toJSON(message.time)
                : undefined);
        message.sinceLastExecTime !== undefined &&
            (obj.sinceLastExecTime = message.sinceLastExecTime
                ? exports.PolicySettings_Scheduling_BackupSet_SinceLastExecTime.toJSON(message.sinceLastExecTime)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePolicySettings_Scheduling_BackupSet);
        message.time =
            object.time !== undefined && object.time !== null
                ? exports.PolicySettings_Scheduling_BackupSet_Time.fromPartial(object.time)
                : undefined;
        message.sinceLastExecTime =
            object.sinceLastExecTime !== undefined &&
                object.sinceLastExecTime !== null
                ? exports.PolicySettings_Scheduling_BackupSet_SinceLastExecTime.fromPartial(object.sinceLastExecTime)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_Scheduling_BackupSet.$type, exports.PolicySettings_Scheduling_BackupSet);
const basePolicySettings_Scheduling_BackupSet_Time = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.Time",
    weekdays: 0,
    monthdays: 0,
    includeLastDayOfMonth: false,
    months: 0,
    type: 0,
};
exports.PolicySettings_Scheduling_BackupSet_Time = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.Time",
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.weekdays) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.repeatAt) {
            exports.PolicySettings_TimeOfDay.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.repeatEvery !== undefined) {
            exports.PolicySettings_Interval.encode(message.repeatEvery, writer.uint32(26).fork()).ldelim();
        }
        if (message.timeFrom !== undefined) {
            exports.PolicySettings_TimeOfDay.encode(message.timeFrom, writer.uint32(34).fork()).ldelim();
        }
        if (message.timeTo !== undefined) {
            exports.PolicySettings_TimeOfDay.encode(message.timeTo, writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(50).fork();
        for (const v of message.monthdays) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.includeLastDayOfMonth === true) {
            writer.uint32(56).bool(message.includeLastDayOfMonth);
        }
        writer.uint32(66).fork();
        for (const v of message.months) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.type !== 0) {
            writer.uint32(72).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_Scheduling_BackupSet_Time);
        message.weekdays = [];
        message.repeatAt = [];
        message.monthdays = [];
        message.months = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weekdays.push(reader.int32());
                        }
                    }
                    else {
                        message.weekdays.push(reader.int32());
                    }
                    break;
                case 2:
                    message.repeatAt.push(exports.PolicySettings_TimeOfDay.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.repeatEvery = exports.PolicySettings_Interval.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.timeFrom = exports.PolicySettings_TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timeTo = exports.PolicySettings_TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.monthdays.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.monthdays.push(longToNumber(reader.int64()));
                    }
                    break;
                case 7:
                    message.includeLastDayOfMonth = reader.bool();
                    break;
                case 8:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.months.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.months.push(longToNumber(reader.int64()));
                    }
                    break;
                case 9:
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
        var _a, _b, _c, _d;
        const message = Object.assign({}, basePolicySettings_Scheduling_BackupSet_Time);
        message.weekdays = ((_a = object.weekdays) !== null && _a !== void 0 ? _a : []).map((e) => policySettings_DayFromJSON(e));
        message.repeatAt = ((_b = object.repeatAt) !== null && _b !== void 0 ? _b : []).map((e) => exports.PolicySettings_TimeOfDay.fromJSON(e));
        message.repeatEvery =
            object.repeatEvery !== undefined && object.repeatEvery !== null
                ? exports.PolicySettings_Interval.fromJSON(object.repeatEvery)
                : undefined;
        message.timeFrom =
            object.timeFrom !== undefined && object.timeFrom !== null
                ? exports.PolicySettings_TimeOfDay.fromJSON(object.timeFrom)
                : undefined;
        message.timeTo =
            object.timeTo !== undefined && object.timeTo !== null
                ? exports.PolicySettings_TimeOfDay.fromJSON(object.timeTo)
                : undefined;
        message.monthdays = ((_c = object.monthdays) !== null && _c !== void 0 ? _c : []).map((e) => Number(e));
        message.includeLastDayOfMonth =
            object.includeLastDayOfMonth !== undefined &&
                object.includeLastDayOfMonth !== null
                ? Boolean(object.includeLastDayOfMonth)
                : false;
        message.months = ((_d = object.months) !== null && _d !== void 0 ? _d : []).map((e) => Number(e));
        message.type =
            object.type !== undefined && object.type !== null
                ? policySettings_RepeatePeriodFromJSON(object.type)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.weekdays) {
            obj.weekdays = message.weekdays.map((e) => policySettings_DayToJSON(e));
        }
        else {
            obj.weekdays = [];
        }
        if (message.repeatAt) {
            obj.repeatAt = message.repeatAt.map((e) => e ? exports.PolicySettings_TimeOfDay.toJSON(e) : undefined);
        }
        else {
            obj.repeatAt = [];
        }
        message.repeatEvery !== undefined &&
            (obj.repeatEvery = message.repeatEvery
                ? exports.PolicySettings_Interval.toJSON(message.repeatEvery)
                : undefined);
        message.timeFrom !== undefined &&
            (obj.timeFrom = message.timeFrom
                ? exports.PolicySettings_TimeOfDay.toJSON(message.timeFrom)
                : undefined);
        message.timeTo !== undefined &&
            (obj.timeTo = message.timeTo
                ? exports.PolicySettings_TimeOfDay.toJSON(message.timeTo)
                : undefined);
        if (message.monthdays) {
            obj.monthdays = message.monthdays.map((e) => Math.round(e));
        }
        else {
            obj.monthdays = [];
        }
        message.includeLastDayOfMonth !== undefined &&
            (obj.includeLastDayOfMonth = message.includeLastDayOfMonth);
        if (message.months) {
            obj.months = message.months.map((e) => Math.round(e));
        }
        else {
            obj.months = [];
        }
        message.type !== undefined &&
            (obj.type = policySettings_RepeatePeriodToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, basePolicySettings_Scheduling_BackupSet_Time);
        message.weekdays = ((_a = object.weekdays) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.repeatAt =
            ((_b = object.repeatAt) === null || _b === void 0 ? void 0 : _b.map((e) => exports.PolicySettings_TimeOfDay.fromPartial(e))) ||
                [];
        message.repeatEvery =
            object.repeatEvery !== undefined && object.repeatEvery !== null
                ? exports.PolicySettings_Interval.fromPartial(object.repeatEvery)
                : undefined;
        message.timeFrom =
            object.timeFrom !== undefined && object.timeFrom !== null
                ? exports.PolicySettings_TimeOfDay.fromPartial(object.timeFrom)
                : undefined;
        message.timeTo =
            object.timeTo !== undefined && object.timeTo !== null
                ? exports.PolicySettings_TimeOfDay.fromPartial(object.timeTo)
                : undefined;
        message.monthdays = ((_c = object.monthdays) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.includeLastDayOfMonth = (_d = object.includeLastDayOfMonth) !== null && _d !== void 0 ? _d : false;
        message.months = ((_e = object.months) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.type = (_f = object.type) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_Scheduling_BackupSet_Time.$type, exports.PolicySettings_Scheduling_BackupSet_Time);
const basePolicySettings_Scheduling_BackupSet_SinceLastExecTime = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.SinceLastExecTime",
};
exports.PolicySettings_Scheduling_BackupSet_SinceLastExecTime = {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.SinceLastExecTime",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delay !== undefined) {
            exports.PolicySettings_Interval.encode(message.delay, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicySettings_Scheduling_BackupSet_SinceLastExecTime);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delay = exports.PolicySettings_Interval.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePolicySettings_Scheduling_BackupSet_SinceLastExecTime);
        message.delay =
            object.delay !== undefined && object.delay !== null
                ? exports.PolicySettings_Interval.fromJSON(object.delay)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delay !== undefined &&
            (obj.delay = message.delay
                ? exports.PolicySettings_Interval.toJSON(message.delay)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePolicySettings_Scheduling_BackupSet_SinceLastExecTime);
        message.delay =
            object.delay !== undefined && object.delay !== null
                ? exports.PolicySettings_Interval.fromPartial(object.delay)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicySettings_Scheduling_BackupSet_SinceLastExecTime.$type, exports.PolicySettings_Scheduling_BackupSet_SinceLastExecTime);
const basePolicyApplication = {
    $type: "yandex.cloud.backup.v1.PolicyApplication",
    policyId: "",
    computeInstanceId: "",
    enabled: false,
    status: 0,
};
exports.PolicyApplication = {
    $type: "yandex.cloud.backup.v1.PolicyApplication",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        if (message.enabled === true) {
            writer.uint32(24).bool(message.enabled);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePolicyApplication);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                case 3:
                    message.enabled = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
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
        const message = Object.assign({}, basePolicyApplication);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.status =
            object.status !== undefined && object.status !== null
                ? policyApplication_StatusFromJSON(object.status)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.status !== undefined &&
            (obj.status = policyApplication_StatusToJSON(message.status));
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, basePolicyApplication);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        message.enabled = (_c = object.enabled) !== null && _c !== void 0 ? _c : false;
        message.status = (_d = object.status) !== null && _d !== void 0 ? _d : 0;
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PolicyApplication.$type, exports.PolicyApplication);
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
