import _m0 from "protobufjs/minimal";
import { TimeOfDay } from "../../../../google/type/timeofday";
import { Duration } from "../../../../google/protobuf/duration";
import { DayOfWeek } from "../../../../google/type/dayofweek";
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface BackupSchedule {
    $type: "yandex.cloud.ydb.v1.BackupSchedule";
    dailyBackupSchedule?: DailyBackupSchedule | undefined;
    weeklyBackupSchedule?: WeeklyBackupSchedule | undefined;
    recurringBackupSchedule?: RecurringBackupSchedule | undefined;
    /**
     * output only field: when next backup will be executed
     * using provided schedule.
     */
    nextExecuteTime?: Date;
}
export interface RecurringBackupSchedule {
    $type: "yandex.cloud.ydb.v1.RecurringBackupSchedule";
    /** Timestamp of the first recurrence. */
    startTime?: Date;
    /**
     * An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how
     * this backup reccurs.
     * The FREQ values of MINUTELY, and SECONDLY are not supported.
     */
    recurrence: string;
}
export interface DaysOfWeekBackupSchedule {
    $type: "yandex.cloud.ydb.v1.DaysOfWeekBackupSchedule";
    days: DayOfWeek[];
    executeTime?: TimeOfDay;
}
export interface WeeklyBackupSchedule {
    $type: "yandex.cloud.ydb.v1.WeeklyBackupSchedule";
    daysOfWeek: DaysOfWeekBackupSchedule[];
}
export interface DailyBackupSchedule {
    $type: "yandex.cloud.ydb.v1.DailyBackupSchedule";
    executeTime?: TimeOfDay;
}
export interface BackupSettings {
    $type: "yandex.cloud.ydb.v1.BackupSettings";
    /** name of backup settings */
    name: string;
    /** human readable description. */
    description: string;
    /** provide schedule. if empty, backup will be disabled. */
    backupSchedule?: BackupSchedule;
    /** provide time to live of backup. */
    backupTimeToLive?: Duration;
    /**
     * provide a list of source paths. Each path can be directory, table or even database itself.
     * Each directory (or database) will be traversed recursively and all childs of directory will be included to backup.
     * By default, backup will be created for full database.
     */
    sourcePaths: string[];
    /**
     * provide a list of paths to exclude from backup.
     * Each path is a directory, table, or database.
     * Each directory (or database) will be traversed recursively and all childs of directory will be excluded.
     */
    sourcePathsToExclude: string[];
    type: BackupSettings_Type;
    storageClass: BackupSettings_StorageClass;
}
export declare enum BackupSettings_Type {
    TYPE_UNSPECIFIED = 0,
    SYSTEM = 1,
    USER = 2,
    UNRECOGNIZED = -1
}
export declare function backupSettings_TypeFromJSON(object: any): BackupSettings_Type;
export declare function backupSettings_TypeToJSON(object: BackupSettings_Type): string;
export declare enum BackupSettings_StorageClass {
    STORAGE_CLASS_UNSPECIFIED = 0,
    STANDARD = 1,
    REDUCED_REDUNDANCY = 2,
    STANDARD_IA = 3,
    ONEZONE_IA = 4,
    INTELLIGENT_TIERING = 5,
    GLACIER = 6,
    DEEP_ARCHIVE = 7,
    OUTPOSTS = 8,
    UNRECOGNIZED = -1
}
export declare function backupSettings_StorageClassFromJSON(object: any): BackupSettings_StorageClass;
export declare function backupSettings_StorageClassToJSON(object: BackupSettings_StorageClass): string;
export interface BackupConfig {
    $type: "yandex.cloud.ydb.v1.BackupConfig";
    backupSettings: BackupSettings[];
}
export interface Backup {
    $type: "yandex.cloud.ydb.v1.Backup";
    id: string;
    /** human readable backup name. */
    name: string;
    folderId: string;
    databaseId: string;
    /** description of backup. */
    description: string;
    createdAt?: Date;
    /** indicates when backup started. */
    startedAt?: Date;
    /** indicates when backup completed. */
    completedAt?: Date;
    status: Backup_Status;
    /** settings used to make backup. */
    backupSettings?: BackupSettings;
    type: Backup_Type;
    /** size of backup in bytes. */
    size: number;
}
/** id of backup */
export declare enum Backup_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    ERROR = 3,
    CANCELLED = 4,
    UNRECOGNIZED = -1
}
export declare function backup_StatusFromJSON(object: any): Backup_Status;
export declare function backup_StatusToJSON(object: Backup_Status): string;
export declare enum Backup_Type {
    TYPE_UNSPECIFIED = 0,
    /** SYSTEM - indicates that backup started by the system. */
    SYSTEM = 1,
    USER = 2,
    UNRECOGNIZED = -1
}
export declare function backup_TypeFromJSON(object: any): Backup_Type;
export declare function backup_TypeToJSON(object: Backup_Type): string;
export declare const BackupSchedule: {
    $type: "yandex.cloud.ydb.v1.BackupSchedule";
    encode(message: BackupSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupSchedule;
    fromJSON(object: any): BackupSchedule;
    toJSON(message: BackupSchedule): unknown;
    fromPartial<I extends {
        dailyBackupSchedule?: {
            executeTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
        } | undefined;
        weeklyBackupSchedule?: {
            daysOfWeek?: {
                days?: DayOfWeek[] | undefined;
                executeTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        recurringBackupSchedule?: {
            startTime?: Date | undefined;
            recurrence?: string | undefined;
        } | undefined;
        nextExecuteTime?: Date | undefined;
    } & {
        dailyBackupSchedule?: ({
            executeTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
        } & {
            executeTime?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & Record<Exclude<keyof I["dailyBackupSchedule"]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
        } & Record<Exclude<keyof I["dailyBackupSchedule"], "$type" | "executeTime">, never>) | undefined;
        weeklyBackupSchedule?: ({
            daysOfWeek?: {
                days?: DayOfWeek[] | undefined;
                executeTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            daysOfWeek?: ({
                days?: DayOfWeek[] | undefined;
                executeTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
            }[] & ({
                days?: DayOfWeek[] | undefined;
                executeTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
            } & {
                days?: (DayOfWeek[] & DayOfWeek[] & Record<Exclude<keyof I["weeklyBackupSchedule"]["daysOfWeek"][number]["days"], "$type" | keyof DayOfWeek[]>, never>) | undefined;
                executeTime?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & Record<Exclude<keyof I["weeklyBackupSchedule"]["daysOfWeek"][number]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
            } & Record<Exclude<keyof I["weeklyBackupSchedule"]["daysOfWeek"][number], "$type" | "days" | "executeTime">, never>)[] & Record<Exclude<keyof I["weeklyBackupSchedule"]["daysOfWeek"], "$type" | keyof {
                days?: DayOfWeek[] | undefined;
                executeTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["weeklyBackupSchedule"], "$type" | "daysOfWeek">, never>) | undefined;
        recurringBackupSchedule?: ({
            startTime?: Date | undefined;
            recurrence?: string | undefined;
        } & {
            startTime?: Date | undefined;
            recurrence?: string | undefined;
        } & Record<Exclude<keyof I["recurringBackupSchedule"], "$type" | "startTime" | "recurrence">, never>) | undefined;
        nextExecuteTime?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "dailyBackupSchedule" | "weeklyBackupSchedule" | "recurringBackupSchedule" | "nextExecuteTime">, never>>(object: I): BackupSchedule;
};
export declare const RecurringBackupSchedule: {
    $type: "yandex.cloud.ydb.v1.RecurringBackupSchedule";
    encode(message: RecurringBackupSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecurringBackupSchedule;
    fromJSON(object: any): RecurringBackupSchedule;
    toJSON(message: RecurringBackupSchedule): unknown;
    fromPartial<I extends {
        startTime?: Date | undefined;
        recurrence?: string | undefined;
    } & {
        startTime?: Date | undefined;
        recurrence?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "startTime" | "recurrence">, never>>(object: I): RecurringBackupSchedule;
};
export declare const DaysOfWeekBackupSchedule: {
    $type: "yandex.cloud.ydb.v1.DaysOfWeekBackupSchedule";
    encode(message: DaysOfWeekBackupSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DaysOfWeekBackupSchedule;
    fromJSON(object: any): DaysOfWeekBackupSchedule;
    toJSON(message: DaysOfWeekBackupSchedule): unknown;
    fromPartial<I extends {
        days?: DayOfWeek[] | undefined;
        executeTime?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } | undefined;
    } & {
        days?: (DayOfWeek[] & DayOfWeek[] & Record<Exclude<keyof I["days"], "$type" | keyof DayOfWeek[]>, never>) | undefined;
        executeTime?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & Record<Exclude<keyof I["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "days" | "executeTime">, never>>(object: I): DaysOfWeekBackupSchedule;
};
export declare const WeeklyBackupSchedule: {
    $type: "yandex.cloud.ydb.v1.WeeklyBackupSchedule";
    encode(message: WeeklyBackupSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WeeklyBackupSchedule;
    fromJSON(object: any): WeeklyBackupSchedule;
    toJSON(message: WeeklyBackupSchedule): unknown;
    fromPartial<I extends {
        daysOfWeek?: {
            days?: DayOfWeek[] | undefined;
            executeTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        daysOfWeek?: ({
            days?: DayOfWeek[] | undefined;
            executeTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
        }[] & ({
            days?: DayOfWeek[] | undefined;
            executeTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
        } & {
            days?: (DayOfWeek[] & DayOfWeek[] & Record<Exclude<keyof I["daysOfWeek"][number]["days"], "$type" | keyof DayOfWeek[]>, never>) | undefined;
            executeTime?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & Record<Exclude<keyof I["daysOfWeek"][number]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
        } & Record<Exclude<keyof I["daysOfWeek"][number], "$type" | "days" | "executeTime">, never>)[] & Record<Exclude<keyof I["daysOfWeek"], "$type" | keyof {
            days?: DayOfWeek[] | undefined;
            executeTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "daysOfWeek">, never>>(object: I): WeeklyBackupSchedule;
};
export declare const DailyBackupSchedule: {
    $type: "yandex.cloud.ydb.v1.DailyBackupSchedule";
    encode(message: DailyBackupSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DailyBackupSchedule;
    fromJSON(object: any): DailyBackupSchedule;
    toJSON(message: DailyBackupSchedule): unknown;
    fromPartial<I extends {
        executeTime?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } | undefined;
    } & {
        executeTime?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & Record<Exclude<keyof I["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "executeTime">, never>>(object: I): DailyBackupSchedule;
};
export declare const BackupSettings: {
    $type: "yandex.cloud.ydb.v1.BackupSettings";
    encode(message: BackupSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupSettings;
    fromJSON(object: any): BackupSettings;
    toJSON(message: BackupSettings): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        type?: BackupSettings_Type | undefined;
        name?: string | undefined;
        storageClass?: BackupSettings_StorageClass | undefined;
        sourcePaths?: string[] | undefined;
        sourcePathsToExclude?: string[] | undefined;
        backupSchedule?: {
            dailyBackupSchedule?: {
                executeTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
            } | undefined;
            weeklyBackupSchedule?: {
                daysOfWeek?: {
                    days?: DayOfWeek[] | undefined;
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            recurringBackupSchedule?: {
                startTime?: Date | undefined;
                recurrence?: string | undefined;
            } | undefined;
            nextExecuteTime?: Date | undefined;
        } | undefined;
        backupTimeToLive?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        type?: BackupSettings_Type | undefined;
        name?: string | undefined;
        storageClass?: BackupSettings_StorageClass | undefined;
        sourcePaths?: (string[] & string[] & Record<Exclude<keyof I["sourcePaths"], "$type" | keyof string[]>, never>) | undefined;
        sourcePathsToExclude?: (string[] & string[] & Record<Exclude<keyof I["sourcePathsToExclude"], "$type" | keyof string[]>, never>) | undefined;
        backupSchedule?: ({
            dailyBackupSchedule?: {
                executeTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
            } | undefined;
            weeklyBackupSchedule?: {
                daysOfWeek?: {
                    days?: DayOfWeek[] | undefined;
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            recurringBackupSchedule?: {
                startTime?: Date | undefined;
                recurrence?: string | undefined;
            } | undefined;
            nextExecuteTime?: Date | undefined;
        } & {
            dailyBackupSchedule?: ({
                executeTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
            } & {
                executeTime?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & Record<Exclude<keyof I["backupSchedule"]["dailyBackupSchedule"]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
            } & Record<Exclude<keyof I["backupSchedule"]["dailyBackupSchedule"], "$type" | "executeTime">, never>) | undefined;
            weeklyBackupSchedule?: ({
                daysOfWeek?: {
                    days?: DayOfWeek[] | undefined;
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                daysOfWeek?: ({
                    days?: DayOfWeek[] | undefined;
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                }[] & ({
                    days?: DayOfWeek[] | undefined;
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                } & {
                    days?: (DayOfWeek[] & DayOfWeek[] & Record<Exclude<keyof I["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["days"], "$type" | keyof DayOfWeek[]>, never>) | undefined;
                    executeTime?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & Record<Exclude<keyof I["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                } & Record<Exclude<keyof I["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number], "$type" | "days" | "executeTime">, never>)[] & Record<Exclude<keyof I["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"], "$type" | keyof {
                    days?: DayOfWeek[] | undefined;
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["backupSchedule"]["weeklyBackupSchedule"], "$type" | "daysOfWeek">, never>) | undefined;
            recurringBackupSchedule?: ({
                startTime?: Date | undefined;
                recurrence?: string | undefined;
            } & {
                startTime?: Date | undefined;
                recurrence?: string | undefined;
            } & Record<Exclude<keyof I["backupSchedule"]["recurringBackupSchedule"], "$type" | "startTime" | "recurrence">, never>) | undefined;
            nextExecuteTime?: Date | undefined;
        } & Record<Exclude<keyof I["backupSchedule"], "$type" | "dailyBackupSchedule" | "weeklyBackupSchedule" | "recurringBackupSchedule" | "nextExecuteTime">, never>) | undefined;
        backupTimeToLive?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["backupTimeToLive"], "$type" | "seconds" | "nanos">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "type" | "name" | "storageClass" | "sourcePaths" | "sourcePathsToExclude" | "backupSchedule" | "backupTimeToLive">, never>>(object: I): BackupSettings;
};
export declare const BackupConfig: {
    $type: "yandex.cloud.ydb.v1.BackupConfig";
    encode(message: BackupConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupConfig;
    fromJSON(object: any): BackupConfig;
    toJSON(message: BackupConfig): unknown;
    fromPartial<I extends {
        backupSettings?: {
            description?: string | undefined;
            type?: BackupSettings_Type | undefined;
            name?: string | undefined;
            storageClass?: BackupSettings_StorageClass | undefined;
            sourcePaths?: string[] | undefined;
            sourcePathsToExclude?: string[] | undefined;
            backupSchedule?: {
                dailyBackupSchedule?: {
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyBackupSchedule?: {
                    daysOfWeek?: {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                recurringBackupSchedule?: {
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } | undefined;
                nextExecuteTime?: Date | undefined;
            } | undefined;
            backupTimeToLive?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        backupSettings?: ({
            description?: string | undefined;
            type?: BackupSettings_Type | undefined;
            name?: string | undefined;
            storageClass?: BackupSettings_StorageClass | undefined;
            sourcePaths?: string[] | undefined;
            sourcePathsToExclude?: string[] | undefined;
            backupSchedule?: {
                dailyBackupSchedule?: {
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyBackupSchedule?: {
                    daysOfWeek?: {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                recurringBackupSchedule?: {
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } | undefined;
                nextExecuteTime?: Date | undefined;
            } | undefined;
            backupTimeToLive?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            type?: BackupSettings_Type | undefined;
            name?: string | undefined;
            storageClass?: BackupSettings_StorageClass | undefined;
            sourcePaths?: string[] | undefined;
            sourcePathsToExclude?: string[] | undefined;
            backupSchedule?: {
                dailyBackupSchedule?: {
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyBackupSchedule?: {
                    daysOfWeek?: {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                recurringBackupSchedule?: {
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } | undefined;
                nextExecuteTime?: Date | undefined;
            } | undefined;
            backupTimeToLive?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            type?: BackupSettings_Type | undefined;
            name?: string | undefined;
            storageClass?: BackupSettings_StorageClass | undefined;
            sourcePaths?: (string[] & string[] & Record<Exclude<keyof I["backupSettings"][number]["sourcePaths"], "$type" | keyof string[]>, never>) | undefined;
            sourcePathsToExclude?: (string[] & string[] & Record<Exclude<keyof I["backupSettings"][number]["sourcePathsToExclude"], "$type" | keyof string[]>, never>) | undefined;
            backupSchedule?: ({
                dailyBackupSchedule?: {
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyBackupSchedule?: {
                    daysOfWeek?: {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                recurringBackupSchedule?: {
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } | undefined;
                nextExecuteTime?: Date | undefined;
            } & {
                dailyBackupSchedule?: ({
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                } & {
                    executeTime?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & Record<Exclude<keyof I["backupSettings"][number]["backupSchedule"]["dailyBackupSchedule"]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                } & Record<Exclude<keyof I["backupSettings"][number]["backupSchedule"]["dailyBackupSchedule"], "$type" | "executeTime">, never>) | undefined;
                weeklyBackupSchedule?: ({
                    daysOfWeek?: {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                } & {
                    daysOfWeek?: ({
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] & ({
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    } & {
                        days?: (DayOfWeek[] & DayOfWeek[] & Record<Exclude<keyof I["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["days"], "$type" | keyof DayOfWeek[]>, never>) | undefined;
                        executeTime?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & Record<Exclude<keyof I["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                    } & Record<Exclude<keyof I["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number], "$type" | "days" | "executeTime">, never>)[] & Record<Exclude<keyof I["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"], "$type" | keyof {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"], "$type" | "daysOfWeek">, never>) | undefined;
                recurringBackupSchedule?: ({
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } & {
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } & Record<Exclude<keyof I["backupSettings"][number]["backupSchedule"]["recurringBackupSchedule"], "$type" | "startTime" | "recurrence">, never>) | undefined;
                nextExecuteTime?: Date | undefined;
            } & Record<Exclude<keyof I["backupSettings"][number]["backupSchedule"], "$type" | "dailyBackupSchedule" | "weeklyBackupSchedule" | "recurringBackupSchedule" | "nextExecuteTime">, never>) | undefined;
            backupTimeToLive?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["backupSettings"][number]["backupTimeToLive"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["backupSettings"][number], "$type" | "description" | "type" | "name" | "storageClass" | "sourcePaths" | "sourcePathsToExclude" | "backupSchedule" | "backupTimeToLive">, never>)[] & Record<Exclude<keyof I["backupSettings"], "$type" | keyof {
            description?: string | undefined;
            type?: BackupSettings_Type | undefined;
            name?: string | undefined;
            storageClass?: BackupSettings_StorageClass | undefined;
            sourcePaths?: string[] | undefined;
            sourcePathsToExclude?: string[] | undefined;
            backupSchedule?: {
                dailyBackupSchedule?: {
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyBackupSchedule?: {
                    daysOfWeek?: {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                recurringBackupSchedule?: {
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } | undefined;
                nextExecuteTime?: Date | undefined;
            } | undefined;
            backupTimeToLive?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupSettings">, never>>(object: I): BackupConfig;
};
export declare const Backup: {
    $type: "yandex.cloud.ydb.v1.Backup";
    encode(message: Backup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Backup;
    fromJSON(object: any): Backup;
    toJSON(message: Backup): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        type?: Backup_Type | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Backup_Status | undefined;
        folderId?: string | undefined;
        size?: number | undefined;
        startedAt?: Date | undefined;
        completedAt?: Date | undefined;
        backupSettings?: {
            description?: string | undefined;
            type?: BackupSettings_Type | undefined;
            name?: string | undefined;
            storageClass?: BackupSettings_StorageClass | undefined;
            sourcePaths?: string[] | undefined;
            sourcePathsToExclude?: string[] | undefined;
            backupSchedule?: {
                dailyBackupSchedule?: {
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyBackupSchedule?: {
                    daysOfWeek?: {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                recurringBackupSchedule?: {
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } | undefined;
                nextExecuteTime?: Date | undefined;
            } | undefined;
            backupTimeToLive?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        databaseId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        type?: Backup_Type | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Backup_Status | undefined;
        folderId?: string | undefined;
        size?: number | undefined;
        startedAt?: Date | undefined;
        completedAt?: Date | undefined;
        backupSettings?: ({
            description?: string | undefined;
            type?: BackupSettings_Type | undefined;
            name?: string | undefined;
            storageClass?: BackupSettings_StorageClass | undefined;
            sourcePaths?: string[] | undefined;
            sourcePathsToExclude?: string[] | undefined;
            backupSchedule?: {
                dailyBackupSchedule?: {
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyBackupSchedule?: {
                    daysOfWeek?: {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                recurringBackupSchedule?: {
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } | undefined;
                nextExecuteTime?: Date | undefined;
            } | undefined;
            backupTimeToLive?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            type?: BackupSettings_Type | undefined;
            name?: string | undefined;
            storageClass?: BackupSettings_StorageClass | undefined;
            sourcePaths?: (string[] & string[] & Record<Exclude<keyof I["backupSettings"]["sourcePaths"], "$type" | keyof string[]>, never>) | undefined;
            sourcePathsToExclude?: (string[] & string[] & Record<Exclude<keyof I["backupSettings"]["sourcePathsToExclude"], "$type" | keyof string[]>, never>) | undefined;
            backupSchedule?: ({
                dailyBackupSchedule?: {
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyBackupSchedule?: {
                    daysOfWeek?: {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                recurringBackupSchedule?: {
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } | undefined;
                nextExecuteTime?: Date | undefined;
            } & {
                dailyBackupSchedule?: ({
                    executeTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                } & {
                    executeTime?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & Record<Exclude<keyof I["backupSettings"]["backupSchedule"]["dailyBackupSchedule"]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                } & Record<Exclude<keyof I["backupSettings"]["backupSchedule"]["dailyBackupSchedule"], "$type" | "executeTime">, never>) | undefined;
                weeklyBackupSchedule?: ({
                    daysOfWeek?: {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                } & {
                    daysOfWeek?: ({
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[] & ({
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    } & {
                        days?: (DayOfWeek[] & DayOfWeek[] & Record<Exclude<keyof I["backupSettings"]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["days"], "$type" | keyof DayOfWeek[]>, never>) | undefined;
                        executeTime?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & Record<Exclude<keyof I["backupSettings"]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                    } & Record<Exclude<keyof I["backupSettings"]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number], "$type" | "days" | "executeTime">, never>)[] & Record<Exclude<keyof I["backupSettings"]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"], "$type" | keyof {
                        days?: DayOfWeek[] | undefined;
                        executeTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["backupSettings"]["backupSchedule"]["weeklyBackupSchedule"], "$type" | "daysOfWeek">, never>) | undefined;
                recurringBackupSchedule?: ({
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } & {
                    startTime?: Date | undefined;
                    recurrence?: string | undefined;
                } & Record<Exclude<keyof I["backupSettings"]["backupSchedule"]["recurringBackupSchedule"], "$type" | "startTime" | "recurrence">, never>) | undefined;
                nextExecuteTime?: Date | undefined;
            } & Record<Exclude<keyof I["backupSettings"]["backupSchedule"], "$type" | "dailyBackupSchedule" | "weeklyBackupSchedule" | "recurringBackupSchedule" | "nextExecuteTime">, never>) | undefined;
            backupTimeToLive?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["backupSettings"]["backupTimeToLive"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["backupSettings"], "$type" | "description" | "type" | "name" | "storageClass" | "sourcePaths" | "sourcePathsToExclude" | "backupSchedule" | "backupTimeToLive">, never>) | undefined;
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "type" | "name" | "createdAt" | "status" | "folderId" | "size" | "startedAt" | "completedAt" | "backupSettings" | "databaseId">, never>>(object: I): Backup;
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
