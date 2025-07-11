import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.backup.v1";
/**
 * Format of the backup in policy. For backup locations that can be browsed
 * with a file manager, the backup format determines the number of files and
 * their extension.
 */
export declare enum Format {
    FORMAT_UNSPECIFIED = 0,
    /** VERSION_11 - A legacy backup format used in older versions. It's not recommended to use. */
    VERSION_11 = 1,
    /** VERSION_12 - A new format recommended in most cases for fast backup and recovery. */
    VERSION_12 = 2,
    /**
     * AUTO - Automatic version selection. Will be used version 12 unless the protection
     * plan (policy) appends backups to the ones created by earlier product
     * versions.
     */
    AUTO = 3,
    UNRECOGNIZED = -1
}
export declare function formatFromJSON(object: any): Format;
export declare function formatToJSON(object: Format): string;
export interface Policy {
    $type: "yandex.cloud.backup.v1.Policy";
    /** Policy ID. */
    id: string;
    /** Policy name. */
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    /** If this field is true, it means that the policy is enabled. */
    enabled: boolean;
    /** Set of policy settings */
    settings?: PolicySettings;
    /** ID of the folder that the policy belongs to. */
    folderId: string;
}
/** Set of policy settings */
export interface PolicySettings {
    $type: "yandex.cloud.backup.v1.PolicySettings";
    /** Archive compression level. */
    compression: PolicySettings_Compression;
    /** Format of the Acronis backup archive. */
    format: Format;
    /** If true, snapshots of multiple volumes will be taken simultaneously. */
    multiVolumeSnapshottingEnabled: boolean;
    /** If true, the file security settings will be preserved. */
    preserveFileSecuritySettings: boolean;
    /** Configuration of retries on recoverable errors during the backup operations like reconnection to destination. No attempts to fix recoverable errors will be made if retry configuration is not set. */
    reattempts?: PolicySettings_RetriesConfiguration;
    /** If true, a user interaction will be avoided when possible. Equals to false if value is not specified. */
    silentModeEnabled: boolean;
    /** Determines the size to split backups on. Splitting is not performed if value is not specified. */
    splitting?: PolicySettings_Splitting;
    /** Configuration of retries on errors during the creation of the virtual machine snapshot. No attempts to fix recoverable errors will be made if retry configuration is not set. */
    vmSnapshotReattempts?: PolicySettings_RetriesConfiguration;
    /** Settings for the Volume Shadow Copy Service (VSS) provider. If not set, no VSS provider is used. */
    vss?: PolicySettings_VolumeShadowCopyServiceSettings;
    /** The archive properties. */
    archive?: PolicySettings_ArchiveProperties;
    /** Time windows for performance limitations of backup and storage maintenance operations. */
    performanceWindow?: PolicySettings_PerformanceWindow;
    /** Configuration of backup retention rules. */
    retention?: PolicySettings_Retention;
    /** Configuration of the backup schedule. */
    scheduling?: PolicySettings_Scheduling;
    /** A configuration of Changed Block Tracking (CBT). */
    cbt: PolicySettings_ChangedBlockTracking;
    /** If true, determines whether a file has changed by the file size and timestamp. Otherwise, the entire file contents are compared to those stored in the backup. */
    fastBackupEnabled: boolean;
    /** If true, a quiesced snapshot of the virtual machine will be taken. */
    quiesceSnapshottingEnabled: boolean;
}
/** Compression rate of the backups. */
export declare enum PolicySettings_Compression {
    COMPRESSION_UNSPECIFIED = 0,
    NORMAL = 1,
    HIGH = 2,
    MAX = 3,
    OFF = 4,
    UNRECOGNIZED = -1
}
export declare function policySettings_CompressionFromJSON(object: any): PolicySettings_Compression;
export declare function policySettings_CompressionToJSON(object: PolicySettings_Compression): string;
export declare enum PolicySettings_RepeatePeriod {
    REPEATE_PERIOD_UNSPECIFIED = 0,
    HOURLY = 1,
    DAILY = 2,
    WEEKLY = 3,
    MONTHLY = 4,
    UNRECOGNIZED = -1
}
export declare function policySettings_RepeatePeriodFromJSON(object: any): PolicySettings_RepeatePeriod;
export declare function policySettings_RepeatePeriodToJSON(object: PolicySettings_RepeatePeriod): string;
export declare enum PolicySettings_Day {
    DAY_UNSPECIFIED = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7,
    UNRECOGNIZED = -1
}
export declare function policySettings_DayFromJSON(object: any): PolicySettings_Day;
export declare function policySettings_DayToJSON(object: PolicySettings_Day): string;
export declare enum PolicySettings_ChangedBlockTracking {
    CHANGED_BLOCK_TRACKING_UNSPECIFIED = 0,
    USE_IF_ENABLED = 1,
    ENABLE_AND_USE = 2,
    DO_NOT_USE = 3,
    UNRECOGNIZED = -1
}
export declare function policySettings_ChangedBlockTrackingFromJSON(object: any): PolicySettings_ChangedBlockTracking;
export declare function policySettings_ChangedBlockTrackingToJSON(object: PolicySettings_ChangedBlockTracking): string;
export interface PolicySettings_Interval {
    $type: "yandex.cloud.backup.v1.PolicySettings.Interval";
    /** A type of the interval. */
    type: PolicySettings_Interval_Type;
    /** The amount of value specified in `Interval.Type`. */
    count: number;
}
export declare enum PolicySettings_Interval_Type {
    TYPE_UNSPECIFIED = 0,
    SECONDS = 1,
    MINUTES = 2,
    HOURS = 3,
    DAYS = 4,
    WEEKS = 5,
    MONTHS = 6,
    UNRECOGNIZED = -1
}
export declare function policySettings_Interval_TypeFromJSON(object: any): PolicySettings_Interval_Type;
export declare function policySettings_Interval_TypeToJSON(object: PolicySettings_Interval_Type): string;
export interface PolicySettings_RetriesConfiguration {
    $type: "yandex.cloud.backup.v1.PolicySettings.RetriesConfiguration";
    /** If true, enables retry on errors. */
    enabled: boolean;
    /** An interval between retry attempts. */
    interval?: PolicySettings_Interval;
    /**
     * Max number of retry attempts. Operation will be considered as failed
     * when max number of retry attempts is reached.
     */
    maxAttempts: number;
}
export interface PolicySettings_Splitting {
    $type: "yandex.cloud.backup.v1.PolicySettings.Splitting";
    /** The size of split backup file in bytes. */
    size: number;
}
/**
 * Settings for Volume Shadow Copy Services which allows to notify
 * VSS-aware applications that backup is about to start. This will
 * ensure the consistent state of all data used by the applications.
 */
export interface PolicySettings_VolumeShadowCopyServiceSettings {
    $type: "yandex.cloud.backup.v1.PolicySettings.VolumeShadowCopyServiceSettings";
    /** If true, the VSS will be enabled. */
    enabled: boolean;
    /** A type of VSS provider to use in backup. */
    provider: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider;
}
export declare enum PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider {
    VSS_PROVIDER_UNSPECIFIED = 0,
    NATIVE = 1,
    TARGET_SYSTEM_DEFINED = 2,
    UNRECOGNIZED = -1
}
export declare function policySettings_VolumeShadowCopyServiceSettings_VSSProviderFromJSON(object: any): PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider;
export declare function policySettings_VolumeShadowCopyServiceSettings_VSSProviderToJSON(object: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider): string;
export interface PolicySettings_ArchiveProperties {
    $type: "yandex.cloud.backup.v1.PolicySettings.ArchiveProperties";
    /**
     * The name of the generated archive. The name may use the following variables: `[Machine Name]`, `[Plan ID]`, `[Plan Name]`, `[Unique ID]`, `[Virtualization Server Type]`.
     * Default value: `[Machine Name]-[Plan ID]-[Unique ID]A`.
     */
    name: string;
}
export interface PolicySettings_PerformanceWindow {
    $type: "yandex.cloud.backup.v1.PolicySettings.PerformanceWindow";
    /** If true, the time windows will be enabled. */
    enabled: boolean;
}
export interface PolicySettings_TimeOfDay {
    $type: "yandex.cloud.backup.v1.PolicySettings.TimeOfDay";
    /** Hours. */
    hour: number;
    /** Minutes. */
    minute: number;
}
export interface PolicySettings_Retention {
    $type: "yandex.cloud.backup.v1.PolicySettings.Retention";
    /** A list of retention rules. */
    rules: PolicySettings_Retention_RetentionRule[];
    /** If true, retention rules will be applied after backup is finished. */
    afterBackup: boolean;
}
export interface PolicySettings_Retention_RetentionRule {
    $type: "yandex.cloud.backup.v1.PolicySettings.Retention.RetentionRule";
    /** A list of backup sets where rules are effective. */
    backupSet: PolicySettings_RepeatePeriod[];
    maxAge?: PolicySettings_Interval | undefined;
    maxCount: number | undefined;
}
export interface PolicySettings_Scheduling {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling";
    /** A list of schedules with backup sets that compose the whole scheme. */
    backupSets: PolicySettings_Scheduling_BackupSet[];
    /** If true, the backup schedule will be enabled. */
    enabled: boolean;
    /** Max number of backup processes allowed to run in parallel. Unlimited if not set. */
    maxParallelBackups: number;
    /** Configuration of the random delay between the execution of parallel tasks. */
    randMaxDelay?: PolicySettings_Interval;
    /** A backup scheme. Available values: `simple`, `always_full`, `always_incremental`, `weekly_incremental`, `weekly_full_daily_incremental`, `custom`, `cdp`. */
    scheme: PolicySettings_Scheduling_Scheme;
    /** A day of week to start weekly backups. */
    weeklyBackupDay: PolicySettings_Day;
}
/** Scheme of backups. */
export declare enum PolicySettings_Scheduling_Scheme {
    SCHEME_UNSPECIFIED = 0,
    SIMPLE = 1,
    ALWAYS_FULL = 2,
    ALWAYS_INCREMENTAL = 3,
    WEEKLY_INCREMENTAL = 4,
    WEEKLY_FULL_DAILY_INCREMENTAL = 5,
    /**
     * CUSTOM - Custom will require to specify schedules for full, differential
     * and incremental backups additionally.
     */
    CUSTOM = 6,
    CDP = 7,
    UNRECOGNIZED = -1
}
export declare function policySettings_Scheduling_SchemeFromJSON(object: any): PolicySettings_Scheduling_Scheme;
export declare function policySettings_Scheduling_SchemeToJSON(object: PolicySettings_Scheduling_Scheme): string;
export interface PolicySettings_Scheduling_BackupSet {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet";
    time?: PolicySettings_Scheduling_BackupSet_Time | undefined;
    sinceLastExecTime?: PolicySettings_Scheduling_BackupSet_SinceLastExecTime | undefined;
}
export interface PolicySettings_Scheduling_BackupSet_Time {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.Time";
    /** Days in a week to perform a backup. */
    weekdays: PolicySettings_Day[];
    /** Time to repeat the backup. */
    repeatAt: PolicySettings_TimeOfDay[];
    /** Frequency of backup repetition. */
    repeatEvery?: PolicySettings_Interval;
    /** The start time of the backup time interval. */
    timeFrom?: PolicySettings_TimeOfDay;
    /** The end time of the backup time interval. */
    timeTo?: PolicySettings_TimeOfDay;
    /**
     * Days in a month to perform a backup.
     * Allowed values are from 1 to 31.
     */
    monthdays: number[];
    /**
     * If set to true, last day of month will activate
     * the policy.
     */
    includeLastDayOfMonth: boolean;
    /** Set of values. Allowed values form 1 to 12. */
    months: number[];
    /** Possible types: `REPEATE_PERIOD_UNSPECIFIED`, `HOURLY`, `DAILY`, `WEEKLY`, `MONTHLY`. */
    type: PolicySettings_RepeatePeriod;
}
export interface PolicySettings_Scheduling_BackupSet_SinceLastExecTime {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.SinceLastExecTime";
    /** The interval between backups. */
    delay?: PolicySettings_Interval;
}
export interface PolicyApplication {
    $type: "yandex.cloud.backup.v1.PolicyApplication";
    /** Policy ID. */
    policyId: string;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
    enabled: boolean;
    status: PolicyApplication_Status;
    createdAt?: Date;
}
export declare enum PolicyApplication_Status {
    STATUS_UNSPECIFIED = 0,
    /** OK - Application is applied and everything is OK. */
    OK = 1,
    /** RUNNING - Application is currently running. */
    RUNNING = 2,
    /** DISABLED - Application is disabled. */
    DISABLED = 3,
    UNRECOGNIZED = -1
}
export declare function policyApplication_StatusFromJSON(object: any): PolicyApplication_Status;
export declare function policyApplication_StatusToJSON(object: PolicyApplication_Status): string;
export declare const Policy: {
    $type: "yandex.cloud.backup.v1.Policy";
    encode(message: Policy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Policy;
    fromJSON(object: any): Policy;
    toJSON(message: Policy): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        enabled?: boolean | undefined;
        updatedAt?: Date | undefined;
        settings?: {
            format?: Format | undefined;
            compression?: PolicySettings_Compression | undefined;
            multiVolumeSnapshottingEnabled?: boolean | undefined;
            preserveFileSecuritySettings?: boolean | undefined;
            reattempts?: {
                interval?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            silentModeEnabled?: boolean | undefined;
            splitting?: {
                size?: number | undefined;
            } | undefined;
            vmSnapshotReattempts?: {
                interval?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            vss?: {
                enabled?: boolean | undefined;
                provider?: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } | undefined;
            archive?: {
                name?: string | undefined;
            } | undefined;
            performanceWindow?: {
                enabled?: boolean | undefined;
            } | undefined;
            retention?: {
                rules?: {
                    backupSet?: PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] | undefined;
                afterBackup?: boolean | undefined;
            } | undefined;
            scheduling?: {
                enabled?: boolean | undefined;
                backupSets?: {
                    time?: {
                        type?: PolicySettings_RepeatePeriod | undefined;
                        weekdays?: PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                scheme?: PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: PolicySettings_Day | undefined;
            } | undefined;
            cbt?: PolicySettings_ChangedBlockTracking | undefined;
            fastBackupEnabled?: boolean | undefined;
            quiesceSnapshottingEnabled?: boolean | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        enabled?: boolean | undefined;
        updatedAt?: Date | undefined;
        settings?: ({
            format?: Format | undefined;
            compression?: PolicySettings_Compression | undefined;
            multiVolumeSnapshottingEnabled?: boolean | undefined;
            preserveFileSecuritySettings?: boolean | undefined;
            reattempts?: {
                interval?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            silentModeEnabled?: boolean | undefined;
            splitting?: {
                size?: number | undefined;
            } | undefined;
            vmSnapshotReattempts?: {
                interval?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            vss?: {
                enabled?: boolean | undefined;
                provider?: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } | undefined;
            archive?: {
                name?: string | undefined;
            } | undefined;
            performanceWindow?: {
                enabled?: boolean | undefined;
            } | undefined;
            retention?: {
                rules?: {
                    backupSet?: PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] | undefined;
                afterBackup?: boolean | undefined;
            } | undefined;
            scheduling?: {
                enabled?: boolean | undefined;
                backupSets?: {
                    time?: {
                        type?: PolicySettings_RepeatePeriod | undefined;
                        weekdays?: PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                scheme?: PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: PolicySettings_Day | undefined;
            } | undefined;
            cbt?: PolicySettings_ChangedBlockTracking | undefined;
            fastBackupEnabled?: boolean | undefined;
            quiesceSnapshottingEnabled?: boolean | undefined;
        } & {
            format?: Format | undefined;
            compression?: PolicySettings_Compression | undefined;
            multiVolumeSnapshottingEnabled?: boolean | undefined;
            preserveFileSecuritySettings?: boolean | undefined;
            reattempts?: ({
                interval?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & {
                interval?: ({
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["reattempts"]["interval"], "$type" | "type" | "count">, never>) | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & Record<Exclude<keyof I["settings"]["reattempts"], "$type" | "interval" | "enabled" | "maxAttempts">, never>) | undefined;
            silentModeEnabled?: boolean | undefined;
            splitting?: ({
                size?: number | undefined;
            } & {
                size?: number | undefined;
            } & Record<Exclude<keyof I["settings"]["splitting"], "$type" | "size">, never>) | undefined;
            vmSnapshotReattempts?: ({
                interval?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & {
                interval?: ({
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["vmSnapshotReattempts"]["interval"], "$type" | "type" | "count">, never>) | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & Record<Exclude<keyof I["settings"]["vmSnapshotReattempts"], "$type" | "interval" | "enabled" | "maxAttempts">, never>) | undefined;
            vss?: ({
                enabled?: boolean | undefined;
                provider?: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } & {
                enabled?: boolean | undefined;
                provider?: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } & Record<Exclude<keyof I["settings"]["vss"], "$type" | "enabled" | "provider">, never>) | undefined;
            archive?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["settings"]["archive"], "$type" | "name">, never>) | undefined;
            performanceWindow?: ({
                enabled?: boolean | undefined;
            } & {
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["settings"]["performanceWindow"], "$type" | "enabled">, never>) | undefined;
            retention?: ({
                rules?: {
                    backupSet?: PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] | undefined;
                afterBackup?: boolean | undefined;
            } & {
                rules?: ({
                    backupSet?: PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] & ({
                    backupSet?: PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                } & {
                    backupSet?: (PolicySettings_RepeatePeriod[] & PolicySettings_RepeatePeriod[] & Record<Exclude<keyof I["settings"]["retention"]["rules"][number]["backupSet"], "$type" | keyof PolicySettings_RepeatePeriod[]>, never>) | undefined;
                    maxAge?: ({
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & Record<Exclude<keyof I["settings"]["retention"]["rules"][number]["maxAge"], "$type" | "type" | "count">, never>) | undefined;
                    maxCount?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["retention"]["rules"][number], "$type" | "backupSet" | "maxAge" | "maxCount">, never>)[] & Record<Exclude<keyof I["settings"]["retention"]["rules"], "$type" | keyof {
                    backupSet?: PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[]>, never>) | undefined;
                afterBackup?: boolean | undefined;
            } & Record<Exclude<keyof I["settings"]["retention"], "$type" | "rules" | "afterBackup">, never>) | undefined;
            scheduling?: ({
                enabled?: boolean | undefined;
                backupSets?: {
                    time?: {
                        type?: PolicySettings_RepeatePeriod | undefined;
                        weekdays?: PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                scheme?: PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: PolicySettings_Day | undefined;
            } & {
                enabled?: boolean | undefined;
                backupSets?: ({
                    time?: {
                        type?: PolicySettings_RepeatePeriod | undefined;
                        weekdays?: PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    time?: {
                        type?: PolicySettings_RepeatePeriod | undefined;
                        weekdays?: PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    time?: ({
                        type?: PolicySettings_RepeatePeriod | undefined;
                        weekdays?: PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } & {
                        type?: PolicySettings_RepeatePeriod | undefined;
                        weekdays?: (PolicySettings_Day[] & PolicySettings_Day[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["weekdays"], "$type" | keyof PolicySettings_Day[]>, never>) | undefined;
                        repeatAt?: ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] & ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["repeatAt"][number], "$type" | "hour" | "minute">, never>)[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["repeatAt"], "$type" | keyof {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[]>, never>) | undefined;
                        repeatEvery?: ({
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["repeatEvery"], "$type" | "type" | "count">, never>) | undefined;
                        timeFrom?: ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["timeFrom"], "$type" | "hour" | "minute">, never>) | undefined;
                        timeTo?: ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["timeTo"], "$type" | "hour" | "minute">, never>) | undefined;
                        monthdays?: (number[] & number[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["monthdays"], "$type" | keyof number[]>, never>) | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: (number[] & number[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["months"], "$type" | keyof number[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"], "$type" | "type" | "weekdays" | "repeatAt" | "repeatEvery" | "timeFrom" | "timeTo" | "monthdays" | "includeLastDayOfMonth" | "months">, never>) | undefined;
                    sinceLastExecTime?: ({
                        delay?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } & {
                        delay?: ({
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["sinceLastExecTime"]["delay"], "$type" | "type" | "count">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["sinceLastExecTime"], "$type" | "delay">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number], "$type" | "time" | "sinceLastExecTime">, never>)[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"], "$type" | keyof {
                    time?: {
                        type?: PolicySettings_RepeatePeriod | undefined;
                        weekdays?: PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: ({
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["scheduling"]["randMaxDelay"], "$type" | "type" | "count">, never>) | undefined;
                scheme?: PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: PolicySettings_Day | undefined;
            } & Record<Exclude<keyof I["settings"]["scheduling"], "$type" | "enabled" | "backupSets" | "maxParallelBackups" | "randMaxDelay" | "scheme" | "weeklyBackupDay">, never>) | undefined;
            cbt?: PolicySettings_ChangedBlockTracking | undefined;
            fastBackupEnabled?: boolean | undefined;
            quiesceSnapshottingEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "format" | "compression" | "multiVolumeSnapshottingEnabled" | "preserveFileSecuritySettings" | "reattempts" | "silentModeEnabled" | "splitting" | "vmSnapshotReattempts" | "vss" | "archive" | "performanceWindow" | "retention" | "scheduling" | "cbt" | "fastBackupEnabled" | "quiesceSnapshottingEnabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "createdAt" | "folderId" | "enabled" | "updatedAt" | "settings">, never>>(object: I): Policy;
};
export declare const PolicySettings: {
    $type: "yandex.cloud.backup.v1.PolicySettings";
    encode(message: PolicySettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings;
    fromJSON(object: any): PolicySettings;
    toJSON(message: PolicySettings): unknown;
    fromPartial<I extends {
        format?: Format | undefined;
        compression?: PolicySettings_Compression | undefined;
        multiVolumeSnapshottingEnabled?: boolean | undefined;
        preserveFileSecuritySettings?: boolean | undefined;
        reattempts?: {
            interval?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            enabled?: boolean | undefined;
            maxAttempts?: number | undefined;
        } | undefined;
        silentModeEnabled?: boolean | undefined;
        splitting?: {
            size?: number | undefined;
        } | undefined;
        vmSnapshotReattempts?: {
            interval?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            enabled?: boolean | undefined;
            maxAttempts?: number | undefined;
        } | undefined;
        vss?: {
            enabled?: boolean | undefined;
            provider?: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
        } | undefined;
        archive?: {
            name?: string | undefined;
        } | undefined;
        performanceWindow?: {
            enabled?: boolean | undefined;
        } | undefined;
        retention?: {
            rules?: {
                backupSet?: PolicySettings_RepeatePeriod[] | undefined;
                maxAge?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                maxCount?: number | undefined;
            }[] | undefined;
            afterBackup?: boolean | undefined;
        } | undefined;
        scheduling?: {
            enabled?: boolean | undefined;
            backupSets?: {
                time?: {
                    type?: PolicySettings_RepeatePeriod | undefined;
                    weekdays?: PolicySettings_Day[] | undefined;
                    repeatAt?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    }[] | undefined;
                    repeatEvery?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    timeFrom?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    timeTo?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    monthdays?: number[] | undefined;
                    includeLastDayOfMonth?: boolean | undefined;
                    months?: number[] | undefined;
                } | undefined;
                sinceLastExecTime?: {
                    delay?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            maxParallelBackups?: number | undefined;
            randMaxDelay?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            scheme?: PolicySettings_Scheduling_Scheme | undefined;
            weeklyBackupDay?: PolicySettings_Day | undefined;
        } | undefined;
        cbt?: PolicySettings_ChangedBlockTracking | undefined;
        fastBackupEnabled?: boolean | undefined;
        quiesceSnapshottingEnabled?: boolean | undefined;
    } & {
        format?: Format | undefined;
        compression?: PolicySettings_Compression | undefined;
        multiVolumeSnapshottingEnabled?: boolean | undefined;
        preserveFileSecuritySettings?: boolean | undefined;
        reattempts?: ({
            interval?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            enabled?: boolean | undefined;
            maxAttempts?: number | undefined;
        } & {
            interval?: ({
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & Record<Exclude<keyof I["reattempts"]["interval"], "$type" | "type" | "count">, never>) | undefined;
            enabled?: boolean | undefined;
            maxAttempts?: number | undefined;
        } & Record<Exclude<keyof I["reattempts"], "$type" | "interval" | "enabled" | "maxAttempts">, never>) | undefined;
        silentModeEnabled?: boolean | undefined;
        splitting?: ({
            size?: number | undefined;
        } & {
            size?: number | undefined;
        } & Record<Exclude<keyof I["splitting"], "$type" | "size">, never>) | undefined;
        vmSnapshotReattempts?: ({
            interval?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            enabled?: boolean | undefined;
            maxAttempts?: number | undefined;
        } & {
            interval?: ({
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & Record<Exclude<keyof I["vmSnapshotReattempts"]["interval"], "$type" | "type" | "count">, never>) | undefined;
            enabled?: boolean | undefined;
            maxAttempts?: number | undefined;
        } & Record<Exclude<keyof I["vmSnapshotReattempts"], "$type" | "interval" | "enabled" | "maxAttempts">, never>) | undefined;
        vss?: ({
            enabled?: boolean | undefined;
            provider?: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
        } & {
            enabled?: boolean | undefined;
            provider?: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
        } & Record<Exclude<keyof I["vss"], "$type" | "enabled" | "provider">, never>) | undefined;
        archive?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & Record<Exclude<keyof I["archive"], "$type" | "name">, never>) | undefined;
        performanceWindow?: ({
            enabled?: boolean | undefined;
        } & {
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["performanceWindow"], "$type" | "enabled">, never>) | undefined;
        retention?: ({
            rules?: {
                backupSet?: PolicySettings_RepeatePeriod[] | undefined;
                maxAge?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                maxCount?: number | undefined;
            }[] | undefined;
            afterBackup?: boolean | undefined;
        } & {
            rules?: ({
                backupSet?: PolicySettings_RepeatePeriod[] | undefined;
                maxAge?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                maxCount?: number | undefined;
            }[] & ({
                backupSet?: PolicySettings_RepeatePeriod[] | undefined;
                maxAge?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                maxCount?: number | undefined;
            } & {
                backupSet?: (PolicySettings_RepeatePeriod[] & PolicySettings_RepeatePeriod[] & Record<Exclude<keyof I["retention"]["rules"][number]["backupSet"], "$type" | keyof PolicySettings_RepeatePeriod[]>, never>) | undefined;
                maxAge?: ({
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["retention"]["rules"][number]["maxAge"], "$type" | "type" | "count">, never>) | undefined;
                maxCount?: number | undefined;
            } & Record<Exclude<keyof I["retention"]["rules"][number], "$type" | "backupSet" | "maxAge" | "maxCount">, never>)[] & Record<Exclude<keyof I["retention"]["rules"], "$type" | keyof {
                backupSet?: PolicySettings_RepeatePeriod[] | undefined;
                maxAge?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                maxCount?: number | undefined;
            }[]>, never>) | undefined;
            afterBackup?: boolean | undefined;
        } & Record<Exclude<keyof I["retention"], "$type" | "rules" | "afterBackup">, never>) | undefined;
        scheduling?: ({
            enabled?: boolean | undefined;
            backupSets?: {
                time?: {
                    type?: PolicySettings_RepeatePeriod | undefined;
                    weekdays?: PolicySettings_Day[] | undefined;
                    repeatAt?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    }[] | undefined;
                    repeatEvery?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    timeFrom?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    timeTo?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    monthdays?: number[] | undefined;
                    includeLastDayOfMonth?: boolean | undefined;
                    months?: number[] | undefined;
                } | undefined;
                sinceLastExecTime?: {
                    delay?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            maxParallelBackups?: number | undefined;
            randMaxDelay?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            scheme?: PolicySettings_Scheduling_Scheme | undefined;
            weeklyBackupDay?: PolicySettings_Day | undefined;
        } & {
            enabled?: boolean | undefined;
            backupSets?: ({
                time?: {
                    type?: PolicySettings_RepeatePeriod | undefined;
                    weekdays?: PolicySettings_Day[] | undefined;
                    repeatAt?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    }[] | undefined;
                    repeatEvery?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    timeFrom?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    timeTo?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    monthdays?: number[] | undefined;
                    includeLastDayOfMonth?: boolean | undefined;
                    months?: number[] | undefined;
                } | undefined;
                sinceLastExecTime?: {
                    delay?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] & ({
                time?: {
                    type?: PolicySettings_RepeatePeriod | undefined;
                    weekdays?: PolicySettings_Day[] | undefined;
                    repeatAt?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    }[] | undefined;
                    repeatEvery?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    timeFrom?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    timeTo?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    monthdays?: number[] | undefined;
                    includeLastDayOfMonth?: boolean | undefined;
                    months?: number[] | undefined;
                } | undefined;
                sinceLastExecTime?: {
                    delay?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                time?: ({
                    type?: PolicySettings_RepeatePeriod | undefined;
                    weekdays?: PolicySettings_Day[] | undefined;
                    repeatAt?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    }[] | undefined;
                    repeatEvery?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    timeFrom?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    timeTo?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    monthdays?: number[] | undefined;
                    includeLastDayOfMonth?: boolean | undefined;
                    months?: number[] | undefined;
                } & {
                    type?: PolicySettings_RepeatePeriod | undefined;
                    weekdays?: (PolicySettings_Day[] & PolicySettings_Day[] & Record<Exclude<keyof I["scheduling"]["backupSets"][number]["time"]["weekdays"], "$type" | keyof PolicySettings_Day[]>, never>) | undefined;
                    repeatAt?: ({
                        hour?: number | undefined;
                        minute?: number | undefined;
                    }[] & ({
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } & {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } & Record<Exclude<keyof I["scheduling"]["backupSets"][number]["time"]["repeatAt"][number], "$type" | "hour" | "minute">, never>)[] & Record<Exclude<keyof I["scheduling"]["backupSets"][number]["time"]["repeatAt"], "$type" | keyof {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    }[]>, never>) | undefined;
                    repeatEvery?: ({
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & Record<Exclude<keyof I["scheduling"]["backupSets"][number]["time"]["repeatEvery"], "$type" | "type" | "count">, never>) | undefined;
                    timeFrom?: ({
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } & {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } & Record<Exclude<keyof I["scheduling"]["backupSets"][number]["time"]["timeFrom"], "$type" | "hour" | "minute">, never>) | undefined;
                    timeTo?: ({
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } & {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } & Record<Exclude<keyof I["scheduling"]["backupSets"][number]["time"]["timeTo"], "$type" | "hour" | "minute">, never>) | undefined;
                    monthdays?: (number[] & number[] & Record<Exclude<keyof I["scheduling"]["backupSets"][number]["time"]["monthdays"], "$type" | keyof number[]>, never>) | undefined;
                    includeLastDayOfMonth?: boolean | undefined;
                    months?: (number[] & number[] & Record<Exclude<keyof I["scheduling"]["backupSets"][number]["time"]["months"], "$type" | keyof number[]>, never>) | undefined;
                } & Record<Exclude<keyof I["scheduling"]["backupSets"][number]["time"], "$type" | "type" | "weekdays" | "repeatAt" | "repeatEvery" | "timeFrom" | "timeTo" | "monthdays" | "includeLastDayOfMonth" | "months">, never>) | undefined;
                sinceLastExecTime?: ({
                    delay?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                } & {
                    delay?: ({
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & Record<Exclude<keyof I["scheduling"]["backupSets"][number]["sinceLastExecTime"]["delay"], "$type" | "type" | "count">, never>) | undefined;
                } & Record<Exclude<keyof I["scheduling"]["backupSets"][number]["sinceLastExecTime"], "$type" | "delay">, never>) | undefined;
            } & Record<Exclude<keyof I["scheduling"]["backupSets"][number], "$type" | "time" | "sinceLastExecTime">, never>)[] & Record<Exclude<keyof I["scheduling"]["backupSets"], "$type" | keyof {
                time?: {
                    type?: PolicySettings_RepeatePeriod | undefined;
                    weekdays?: PolicySettings_Day[] | undefined;
                    repeatAt?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    }[] | undefined;
                    repeatEvery?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    timeFrom?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    timeTo?: {
                        hour?: number | undefined;
                        minute?: number | undefined;
                    } | undefined;
                    monthdays?: number[] | undefined;
                    includeLastDayOfMonth?: boolean | undefined;
                    months?: number[] | undefined;
                } | undefined;
                sinceLastExecTime?: {
                    delay?: {
                        type?: PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            maxParallelBackups?: number | undefined;
            randMaxDelay?: ({
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & Record<Exclude<keyof I["scheduling"]["randMaxDelay"], "$type" | "type" | "count">, never>) | undefined;
            scheme?: PolicySettings_Scheduling_Scheme | undefined;
            weeklyBackupDay?: PolicySettings_Day | undefined;
        } & Record<Exclude<keyof I["scheduling"], "$type" | "enabled" | "backupSets" | "maxParallelBackups" | "randMaxDelay" | "scheme" | "weeklyBackupDay">, never>) | undefined;
        cbt?: PolicySettings_ChangedBlockTracking | undefined;
        fastBackupEnabled?: boolean | undefined;
        quiesceSnapshottingEnabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "format" | "compression" | "multiVolumeSnapshottingEnabled" | "preserveFileSecuritySettings" | "reattempts" | "silentModeEnabled" | "splitting" | "vmSnapshotReattempts" | "vss" | "archive" | "performanceWindow" | "retention" | "scheduling" | "cbt" | "fastBackupEnabled" | "quiesceSnapshottingEnabled">, never>>(object: I): PolicySettings;
};
export declare const PolicySettings_Interval: {
    $type: "yandex.cloud.backup.v1.PolicySettings.Interval";
    encode(message: PolicySettings_Interval, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_Interval;
    fromJSON(object: any): PolicySettings_Interval;
    toJSON(message: PolicySettings_Interval): unknown;
    fromPartial<I extends {
        type?: PolicySettings_Interval_Type | undefined;
        count?: number | undefined;
    } & {
        type?: PolicySettings_Interval_Type | undefined;
        count?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "count">, never>>(object: I): PolicySettings_Interval;
};
export declare const PolicySettings_RetriesConfiguration: {
    $type: "yandex.cloud.backup.v1.PolicySettings.RetriesConfiguration";
    encode(message: PolicySettings_RetriesConfiguration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_RetriesConfiguration;
    fromJSON(object: any): PolicySettings_RetriesConfiguration;
    toJSON(message: PolicySettings_RetriesConfiguration): unknown;
    fromPartial<I extends {
        interval?: {
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } | undefined;
        enabled?: boolean | undefined;
        maxAttempts?: number | undefined;
    } & {
        interval?: ({
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } & {
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } & Record<Exclude<keyof I["interval"], "$type" | "type" | "count">, never>) | undefined;
        enabled?: boolean | undefined;
        maxAttempts?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "interval" | "enabled" | "maxAttempts">, never>>(object: I): PolicySettings_RetriesConfiguration;
};
export declare const PolicySettings_Splitting: {
    $type: "yandex.cloud.backup.v1.PolicySettings.Splitting";
    encode(message: PolicySettings_Splitting, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_Splitting;
    fromJSON(object: any): PolicySettings_Splitting;
    toJSON(message: PolicySettings_Splitting): unknown;
    fromPartial<I extends {
        size?: number | undefined;
    } & {
        size?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "size">, never>>(object: I): PolicySettings_Splitting;
};
export declare const PolicySettings_VolumeShadowCopyServiceSettings: {
    $type: "yandex.cloud.backup.v1.PolicySettings.VolumeShadowCopyServiceSettings";
    encode(message: PolicySettings_VolumeShadowCopyServiceSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_VolumeShadowCopyServiceSettings;
    fromJSON(object: any): PolicySettings_VolumeShadowCopyServiceSettings;
    toJSON(message: PolicySettings_VolumeShadowCopyServiceSettings): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
        provider?: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
    } & {
        enabled?: boolean | undefined;
        provider?: PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled" | "provider">, never>>(object: I): PolicySettings_VolumeShadowCopyServiceSettings;
};
export declare const PolicySettings_ArchiveProperties: {
    $type: "yandex.cloud.backup.v1.PolicySettings.ArchiveProperties";
    encode(message: PolicySettings_ArchiveProperties, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_ArchiveProperties;
    fromJSON(object: any): PolicySettings_ArchiveProperties;
    toJSON(message: PolicySettings_ArchiveProperties): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): PolicySettings_ArchiveProperties;
};
export declare const PolicySettings_PerformanceWindow: {
    $type: "yandex.cloud.backup.v1.PolicySettings.PerformanceWindow";
    encode(message: PolicySettings_PerformanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_PerformanceWindow;
    fromJSON(object: any): PolicySettings_PerformanceWindow;
    toJSON(message: PolicySettings_PerformanceWindow): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
    } & {
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled">, never>>(object: I): PolicySettings_PerformanceWindow;
};
export declare const PolicySettings_TimeOfDay: {
    $type: "yandex.cloud.backup.v1.PolicySettings.TimeOfDay";
    encode(message: PolicySettings_TimeOfDay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_TimeOfDay;
    fromJSON(object: any): PolicySettings_TimeOfDay;
    toJSON(message: PolicySettings_TimeOfDay): unknown;
    fromPartial<I extends {
        hour?: number | undefined;
        minute?: number | undefined;
    } & {
        hour?: number | undefined;
        minute?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "hour" | "minute">, never>>(object: I): PolicySettings_TimeOfDay;
};
export declare const PolicySettings_Retention: {
    $type: "yandex.cloud.backup.v1.PolicySettings.Retention";
    encode(message: PolicySettings_Retention, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_Retention;
    fromJSON(object: any): PolicySettings_Retention;
    toJSON(message: PolicySettings_Retention): unknown;
    fromPartial<I extends {
        rules?: {
            backupSet?: PolicySettings_RepeatePeriod[] | undefined;
            maxAge?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            maxCount?: number | undefined;
        }[] | undefined;
        afterBackup?: boolean | undefined;
    } & {
        rules?: ({
            backupSet?: PolicySettings_RepeatePeriod[] | undefined;
            maxAge?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            maxCount?: number | undefined;
        }[] & ({
            backupSet?: PolicySettings_RepeatePeriod[] | undefined;
            maxAge?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            maxCount?: number | undefined;
        } & {
            backupSet?: (PolicySettings_RepeatePeriod[] & PolicySettings_RepeatePeriod[] & Record<Exclude<keyof I["rules"][number]["backupSet"], "$type" | keyof PolicySettings_RepeatePeriod[]>, never>) | undefined;
            maxAge?: ({
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & Record<Exclude<keyof I["rules"][number]["maxAge"], "$type" | "type" | "count">, never>) | undefined;
            maxCount?: number | undefined;
        } & Record<Exclude<keyof I["rules"][number], "$type" | "backupSet" | "maxAge" | "maxCount">, never>)[] & Record<Exclude<keyof I["rules"], "$type" | keyof {
            backupSet?: PolicySettings_RepeatePeriod[] | undefined;
            maxAge?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            maxCount?: number | undefined;
        }[]>, never>) | undefined;
        afterBackup?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "rules" | "afterBackup">, never>>(object: I): PolicySettings_Retention;
};
export declare const PolicySettings_Retention_RetentionRule: {
    $type: "yandex.cloud.backup.v1.PolicySettings.Retention.RetentionRule";
    encode(message: PolicySettings_Retention_RetentionRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_Retention_RetentionRule;
    fromJSON(object: any): PolicySettings_Retention_RetentionRule;
    toJSON(message: PolicySettings_Retention_RetentionRule): unknown;
    fromPartial<I extends {
        backupSet?: PolicySettings_RepeatePeriod[] | undefined;
        maxAge?: {
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } | undefined;
        maxCount?: number | undefined;
    } & {
        backupSet?: (PolicySettings_RepeatePeriod[] & PolicySettings_RepeatePeriod[] & Record<Exclude<keyof I["backupSet"], "$type" | keyof PolicySettings_RepeatePeriod[]>, never>) | undefined;
        maxAge?: ({
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } & {
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } & Record<Exclude<keyof I["maxAge"], "$type" | "type" | "count">, never>) | undefined;
        maxCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupSet" | "maxAge" | "maxCount">, never>>(object: I): PolicySettings_Retention_RetentionRule;
};
export declare const PolicySettings_Scheduling: {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling";
    encode(message: PolicySettings_Scheduling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_Scheduling;
    fromJSON(object: any): PolicySettings_Scheduling;
    toJSON(message: PolicySettings_Scheduling): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
        backupSets?: {
            time?: {
                type?: PolicySettings_RepeatePeriod | undefined;
                weekdays?: PolicySettings_Day[] | undefined;
                repeatAt?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                }[] | undefined;
                repeatEvery?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                timeFrom?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } | undefined;
                timeTo?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } | undefined;
                monthdays?: number[] | undefined;
                includeLastDayOfMonth?: boolean | undefined;
                months?: number[] | undefined;
            } | undefined;
            sinceLastExecTime?: {
                delay?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        maxParallelBackups?: number | undefined;
        randMaxDelay?: {
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } | undefined;
        scheme?: PolicySettings_Scheduling_Scheme | undefined;
        weeklyBackupDay?: PolicySettings_Day | undefined;
    } & {
        enabled?: boolean | undefined;
        backupSets?: ({
            time?: {
                type?: PolicySettings_RepeatePeriod | undefined;
                weekdays?: PolicySettings_Day[] | undefined;
                repeatAt?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                }[] | undefined;
                repeatEvery?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                timeFrom?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } | undefined;
                timeTo?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } | undefined;
                monthdays?: number[] | undefined;
                includeLastDayOfMonth?: boolean | undefined;
                months?: number[] | undefined;
            } | undefined;
            sinceLastExecTime?: {
                delay?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            time?: {
                type?: PolicySettings_RepeatePeriod | undefined;
                weekdays?: PolicySettings_Day[] | undefined;
                repeatAt?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                }[] | undefined;
                repeatEvery?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                timeFrom?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } | undefined;
                timeTo?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } | undefined;
                monthdays?: number[] | undefined;
                includeLastDayOfMonth?: boolean | undefined;
                months?: number[] | undefined;
            } | undefined;
            sinceLastExecTime?: {
                delay?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            time?: ({
                type?: PolicySettings_RepeatePeriod | undefined;
                weekdays?: PolicySettings_Day[] | undefined;
                repeatAt?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                }[] | undefined;
                repeatEvery?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                timeFrom?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } | undefined;
                timeTo?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } | undefined;
                monthdays?: number[] | undefined;
                includeLastDayOfMonth?: boolean | undefined;
                months?: number[] | undefined;
            } & {
                type?: PolicySettings_RepeatePeriod | undefined;
                weekdays?: (PolicySettings_Day[] & PolicySettings_Day[] & Record<Exclude<keyof I["backupSets"][number]["time"]["weekdays"], "$type" | keyof PolicySettings_Day[]>, never>) | undefined;
                repeatAt?: ({
                    hour?: number | undefined;
                    minute?: number | undefined;
                }[] & ({
                    hour?: number | undefined;
                    minute?: number | undefined;
                } & {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } & Record<Exclude<keyof I["backupSets"][number]["time"]["repeatAt"][number], "$type" | "hour" | "minute">, never>)[] & Record<Exclude<keyof I["backupSets"][number]["time"]["repeatAt"], "$type" | keyof {
                    hour?: number | undefined;
                    minute?: number | undefined;
                }[]>, never>) | undefined;
                repeatEvery?: ({
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["backupSets"][number]["time"]["repeatEvery"], "$type" | "type" | "count">, never>) | undefined;
                timeFrom?: ({
                    hour?: number | undefined;
                    minute?: number | undefined;
                } & {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } & Record<Exclude<keyof I["backupSets"][number]["time"]["timeFrom"], "$type" | "hour" | "minute">, never>) | undefined;
                timeTo?: ({
                    hour?: number | undefined;
                    minute?: number | undefined;
                } & {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } & Record<Exclude<keyof I["backupSets"][number]["time"]["timeTo"], "$type" | "hour" | "minute">, never>) | undefined;
                monthdays?: (number[] & number[] & Record<Exclude<keyof I["backupSets"][number]["time"]["monthdays"], "$type" | keyof number[]>, never>) | undefined;
                includeLastDayOfMonth?: boolean | undefined;
                months?: (number[] & number[] & Record<Exclude<keyof I["backupSets"][number]["time"]["months"], "$type" | keyof number[]>, never>) | undefined;
            } & Record<Exclude<keyof I["backupSets"][number]["time"], "$type" | "type" | "weekdays" | "repeatAt" | "repeatEvery" | "timeFrom" | "timeTo" | "monthdays" | "includeLastDayOfMonth" | "months">, never>) | undefined;
            sinceLastExecTime?: ({
                delay?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
            } & {
                delay?: ({
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["backupSets"][number]["sinceLastExecTime"]["delay"], "$type" | "type" | "count">, never>) | undefined;
            } & Record<Exclude<keyof I["backupSets"][number]["sinceLastExecTime"], "$type" | "delay">, never>) | undefined;
        } & Record<Exclude<keyof I["backupSets"][number], "$type" | "time" | "sinceLastExecTime">, never>)[] & Record<Exclude<keyof I["backupSets"], "$type" | keyof {
            time?: {
                type?: PolicySettings_RepeatePeriod | undefined;
                weekdays?: PolicySettings_Day[] | undefined;
                repeatAt?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                }[] | undefined;
                repeatEvery?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                timeFrom?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } | undefined;
                timeTo?: {
                    hour?: number | undefined;
                    minute?: number | undefined;
                } | undefined;
                monthdays?: number[] | undefined;
                includeLastDayOfMonth?: boolean | undefined;
                months?: number[] | undefined;
            } | undefined;
            sinceLastExecTime?: {
                delay?: {
                    type?: PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        maxParallelBackups?: number | undefined;
        randMaxDelay?: ({
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } & {
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } & Record<Exclude<keyof I["randMaxDelay"], "$type" | "type" | "count">, never>) | undefined;
        scheme?: PolicySettings_Scheduling_Scheme | undefined;
        weeklyBackupDay?: PolicySettings_Day | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled" | "backupSets" | "maxParallelBackups" | "randMaxDelay" | "scheme" | "weeklyBackupDay">, never>>(object: I): PolicySettings_Scheduling;
};
export declare const PolicySettings_Scheduling_BackupSet: {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet";
    encode(message: PolicySettings_Scheduling_BackupSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_Scheduling_BackupSet;
    fromJSON(object: any): PolicySettings_Scheduling_BackupSet;
    toJSON(message: PolicySettings_Scheduling_BackupSet): unknown;
    fromPartial<I extends {
        time?: {
            type?: PolicySettings_RepeatePeriod | undefined;
            weekdays?: PolicySettings_Day[] | undefined;
            repeatAt?: {
                hour?: number | undefined;
                minute?: number | undefined;
            }[] | undefined;
            repeatEvery?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            timeFrom?: {
                hour?: number | undefined;
                minute?: number | undefined;
            } | undefined;
            timeTo?: {
                hour?: number | undefined;
                minute?: number | undefined;
            } | undefined;
            monthdays?: number[] | undefined;
            includeLastDayOfMonth?: boolean | undefined;
            months?: number[] | undefined;
        } | undefined;
        sinceLastExecTime?: {
            delay?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        time?: ({
            type?: PolicySettings_RepeatePeriod | undefined;
            weekdays?: PolicySettings_Day[] | undefined;
            repeatAt?: {
                hour?: number | undefined;
                minute?: number | undefined;
            }[] | undefined;
            repeatEvery?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
            timeFrom?: {
                hour?: number | undefined;
                minute?: number | undefined;
            } | undefined;
            timeTo?: {
                hour?: number | undefined;
                minute?: number | undefined;
            } | undefined;
            monthdays?: number[] | undefined;
            includeLastDayOfMonth?: boolean | undefined;
            months?: number[] | undefined;
        } & {
            type?: PolicySettings_RepeatePeriod | undefined;
            weekdays?: (PolicySettings_Day[] & PolicySettings_Day[] & Record<Exclude<keyof I["time"]["weekdays"], "$type" | keyof PolicySettings_Day[]>, never>) | undefined;
            repeatAt?: ({
                hour?: number | undefined;
                minute?: number | undefined;
            }[] & ({
                hour?: number | undefined;
                minute?: number | undefined;
            } & {
                hour?: number | undefined;
                minute?: number | undefined;
            } & Record<Exclude<keyof I["time"]["repeatAt"][number], "$type" | "hour" | "minute">, never>)[] & Record<Exclude<keyof I["time"]["repeatAt"], "$type" | keyof {
                hour?: number | undefined;
                minute?: number | undefined;
            }[]>, never>) | undefined;
            repeatEvery?: ({
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & Record<Exclude<keyof I["time"]["repeatEvery"], "$type" | "type" | "count">, never>) | undefined;
            timeFrom?: ({
                hour?: number | undefined;
                minute?: number | undefined;
            } & {
                hour?: number | undefined;
                minute?: number | undefined;
            } & Record<Exclude<keyof I["time"]["timeFrom"], "$type" | "hour" | "minute">, never>) | undefined;
            timeTo?: ({
                hour?: number | undefined;
                minute?: number | undefined;
            } & {
                hour?: number | undefined;
                minute?: number | undefined;
            } & Record<Exclude<keyof I["time"]["timeTo"], "$type" | "hour" | "minute">, never>) | undefined;
            monthdays?: (number[] & number[] & Record<Exclude<keyof I["time"]["monthdays"], "$type" | keyof number[]>, never>) | undefined;
            includeLastDayOfMonth?: boolean | undefined;
            months?: (number[] & number[] & Record<Exclude<keyof I["time"]["months"], "$type" | keyof number[]>, never>) | undefined;
        } & Record<Exclude<keyof I["time"], "$type" | "type" | "weekdays" | "repeatAt" | "repeatEvery" | "timeFrom" | "timeTo" | "monthdays" | "includeLastDayOfMonth" | "months">, never>) | undefined;
        sinceLastExecTime?: ({
            delay?: {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } | undefined;
        } & {
            delay?: ({
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & {
                type?: PolicySettings_Interval_Type | undefined;
                count?: number | undefined;
            } & Record<Exclude<keyof I["sinceLastExecTime"]["delay"], "$type" | "type" | "count">, never>) | undefined;
        } & Record<Exclude<keyof I["sinceLastExecTime"], "$type" | "delay">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "time" | "sinceLastExecTime">, never>>(object: I): PolicySettings_Scheduling_BackupSet;
};
export declare const PolicySettings_Scheduling_BackupSet_Time: {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.Time";
    encode(message: PolicySettings_Scheduling_BackupSet_Time, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_Scheduling_BackupSet_Time;
    fromJSON(object: any): PolicySettings_Scheduling_BackupSet_Time;
    toJSON(message: PolicySettings_Scheduling_BackupSet_Time): unknown;
    fromPartial<I extends {
        type?: PolicySettings_RepeatePeriod | undefined;
        weekdays?: PolicySettings_Day[] | undefined;
        repeatAt?: {
            hour?: number | undefined;
            minute?: number | undefined;
        }[] | undefined;
        repeatEvery?: {
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } | undefined;
        timeFrom?: {
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
        timeTo?: {
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
        monthdays?: number[] | undefined;
        includeLastDayOfMonth?: boolean | undefined;
        months?: number[] | undefined;
    } & {
        type?: PolicySettings_RepeatePeriod | undefined;
        weekdays?: (PolicySettings_Day[] & PolicySettings_Day[] & Record<Exclude<keyof I["weekdays"], "$type" | keyof PolicySettings_Day[]>, never>) | undefined;
        repeatAt?: ({
            hour?: number | undefined;
            minute?: number | undefined;
        }[] & ({
            hour?: number | undefined;
            minute?: number | undefined;
        } & {
            hour?: number | undefined;
            minute?: number | undefined;
        } & Record<Exclude<keyof I["repeatAt"][number], "$type" | "hour" | "minute">, never>)[] & Record<Exclude<keyof I["repeatAt"], "$type" | keyof {
            hour?: number | undefined;
            minute?: number | undefined;
        }[]>, never>) | undefined;
        repeatEvery?: ({
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } & {
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } & Record<Exclude<keyof I["repeatEvery"], "$type" | "type" | "count">, never>) | undefined;
        timeFrom?: ({
            hour?: number | undefined;
            minute?: number | undefined;
        } & {
            hour?: number | undefined;
            minute?: number | undefined;
        } & Record<Exclude<keyof I["timeFrom"], "$type" | "hour" | "minute">, never>) | undefined;
        timeTo?: ({
            hour?: number | undefined;
            minute?: number | undefined;
        } & {
            hour?: number | undefined;
            minute?: number | undefined;
        } & Record<Exclude<keyof I["timeTo"], "$type" | "hour" | "minute">, never>) | undefined;
        monthdays?: (number[] & number[] & Record<Exclude<keyof I["monthdays"], "$type" | keyof number[]>, never>) | undefined;
        includeLastDayOfMonth?: boolean | undefined;
        months?: (number[] & number[] & Record<Exclude<keyof I["months"], "$type" | keyof number[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "weekdays" | "repeatAt" | "repeatEvery" | "timeFrom" | "timeTo" | "monthdays" | "includeLastDayOfMonth" | "months">, never>>(object: I): PolicySettings_Scheduling_BackupSet_Time;
};
export declare const PolicySettings_Scheduling_BackupSet_SinceLastExecTime: {
    $type: "yandex.cloud.backup.v1.PolicySettings.Scheduling.BackupSet.SinceLastExecTime";
    encode(message: PolicySettings_Scheduling_BackupSet_SinceLastExecTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicySettings_Scheduling_BackupSet_SinceLastExecTime;
    fromJSON(object: any): PolicySettings_Scheduling_BackupSet_SinceLastExecTime;
    toJSON(message: PolicySettings_Scheduling_BackupSet_SinceLastExecTime): unknown;
    fromPartial<I extends {
        delay?: {
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } | undefined;
    } & {
        delay?: ({
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } & {
            type?: PolicySettings_Interval_Type | undefined;
            count?: number | undefined;
        } & Record<Exclude<keyof I["delay"], "$type" | "type" | "count">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "delay">, never>>(object: I): PolicySettings_Scheduling_BackupSet_SinceLastExecTime;
};
export declare const PolicyApplication: {
    $type: "yandex.cloud.backup.v1.PolicyApplication";
    encode(message: PolicyApplication, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PolicyApplication;
    fromJSON(object: any): PolicyApplication;
    toJSON(message: PolicyApplication): unknown;
    fromPartial<I extends {
        createdAt?: Date | undefined;
        status?: PolicyApplication_Status | undefined;
        enabled?: boolean | undefined;
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        createdAt?: Date | undefined;
        status?: PolicyApplication_Status | undefined;
        enabled?: boolean | undefined;
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "createdAt" | "status" | "enabled" | "policyId" | "computeInstanceId">, never>>(object: I): PolicyApplication;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;
export {};
