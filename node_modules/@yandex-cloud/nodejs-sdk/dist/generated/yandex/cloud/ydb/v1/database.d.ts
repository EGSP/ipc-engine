import _m0 from "protobufjs/minimal";
import { BackupConfig } from "../../../../yandex/cloud/ydb/v1/backup";
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export declare enum AlertEvaluationStatus {
    ALERT_EVALUATION_STATUS_UNSPECIFIED = 0,
    ALERT_EVALUATION_STATUS_OK = 1,
    ALERT_EVALUATION_STATUS_NO_DATA = 2,
    ALERT_EVALUATION_STATUS_ERROR = 3,
    ALERT_EVALUATION_STATUS_ALARM = 4,
    ALERT_EVALUATION_STATUS_WARN = 5,
    UNRECOGNIZED = -1
}
export declare function alertEvaluationStatusFromJSON(object: any): AlertEvaluationStatus;
export declare function alertEvaluationStatusToJSON(object: AlertEvaluationStatus): string;
/** YDB database. */
export interface Database {
    $type: "yandex.cloud.ydb.v1.Database";
    id: string;
    folderId: string;
    createdAt?: Date;
    name: string;
    description: string;
    status: Database_Status;
    endpoint: string;
    resourcePresetId: string;
    storageConfig?: StorageConfig;
    scalePolicy?: ScalePolicy;
    networkId: string;
    subnetIds: string[];
    /** deprecated field */
    zonalDatabase?: ZonalDatabase | undefined;
    /** deprecated field */
    regionalDatabase?: RegionalDatabase | undefined;
    dedicatedDatabase?: DedicatedDatabase | undefined;
    serverlessDatabase?: ServerlessDatabase | undefined;
    assignPublicIps: boolean;
    locationId: string;
    labels: {
        [key: string]: string;
    };
    backupConfig?: BackupConfig;
    documentApiEndpoint: string;
    kinesisApiEndpoint: string;
    kafkaApiEndpoint: string;
    monitoringConfig?: MonitoringConfig;
    deletionProtection: boolean;
}
export declare enum Database_Status {
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    RUNNING = 2,
    UPDATING = 4,
    ERROR = 5,
    DELETING = 6,
    STARTING = 7,
    STOPPED = 8,
    UNRECOGNIZED = -1
}
export declare function database_StatusFromJSON(object: any): Database_Status;
export declare function database_StatusToJSON(object: Database_Status): string;
export interface Database_LabelsEntry {
    $type: "yandex.cloud.ydb.v1.Database.LabelsEntry";
    key: string;
    value: string;
}
export interface AlertParameter {
    $type: "yandex.cloud.ydb.v1.AlertParameter";
    doubleParameterValue?: AlertParameter_DoubleParameterValue | undefined;
    integerParameterValue?: AlertParameter_IntegerParameterValue | undefined;
    textParameterValue?: AlertParameter_TextParameterValue | undefined;
    textListParameterValue?: AlertParameter_TextListParameterValue | undefined;
    labelListParameterValue?: AlertParameter_LabelListParameterValue | undefined;
}
export interface AlertParameter_DoubleParameterValue {
    $type: "yandex.cloud.ydb.v1.AlertParameter.DoubleParameterValue";
    /** Required. Parameter name */
    name: string;
    /** Required. Parameter value */
    value: number;
}
export interface AlertParameter_IntegerParameterValue {
    $type: "yandex.cloud.ydb.v1.AlertParameter.IntegerParameterValue";
    /** Required. Parameter name */
    name: string;
    /** Required. Parameter value */
    value: number;
}
export interface AlertParameter_TextParameterValue {
    $type: "yandex.cloud.ydb.v1.AlertParameter.TextParameterValue";
    /** Required. Parameter name */
    name: string;
    /** Required. Parameter value */
    value: string;
}
export interface AlertParameter_TextListParameterValue {
    $type: "yandex.cloud.ydb.v1.AlertParameter.TextListParameterValue";
    /** Required. Parameter name */
    name: string;
    /** Required. Parameter value */
    values: string[];
}
export interface AlertParameter_LabelListParameterValue {
    $type: "yandex.cloud.ydb.v1.AlertParameter.LabelListParameterValue";
    /** Required. Parameter name */
    name: string;
    /** Required. Parameter value */
    values: string[];
}
export interface NotificationChannel {
    $type: "yandex.cloud.ydb.v1.NotificationChannel";
    notificationChannelId: string;
    notifyAboutStatuses: AlertEvaluationStatus[];
    repeateNotifyDelayMs: number;
}
export interface Alert {
    $type: "yandex.cloud.ydb.v1.Alert";
    /** output only field. */
    alertId: string;
    /** template of the alert. */
    alertTemplateId: string;
    /** name of the alert. */
    name: string;
    /** human readable description of the alert. */
    description: string;
    /** the notification channels of the alert. */
    notificationChannels: NotificationChannel[];
    /** alert parameters to override. */
    alertParameters: AlertParameter[];
    /** alert paratemers to override. */
    alertThresholds: AlertParameter[];
}
export interface MonitoringConfig {
    $type: "yandex.cloud.ydb.v1.MonitoringConfig";
    alerts: Alert[];
}
export interface DedicatedDatabase {
    $type: "yandex.cloud.ydb.v1.DedicatedDatabase";
    resourcePresetId: string;
    storageConfig?: StorageConfig;
    scalePolicy?: ScalePolicy;
    networkId: string;
    subnetIds: string[];
    assignPublicIps: boolean;
}
export interface ServerlessDatabase {
    $type: "yandex.cloud.ydb.v1.ServerlessDatabase";
    /**
     * Let's define 1 RU  - 1 request unit
     * Let's define 1 RCU - 1 request capacity unit, which is 1 RU per second.
     * If `enable_throttling_rcu_limit` flag is true, the database will be throttled using `throttling_rcu_limit` value.
     * Otherwise, the database is throttled using the cloud quotas.
     * If zero, all requests will be blocked until non zero value is set.
     */
    throttlingRcuLimit: number;
    /** Specify serverless database storage size limit. If zero, default value is applied. */
    storageSizeLimit: number;
    /** If false, the database is throttled by cloud value. */
    enableThrottlingRcuLimit: boolean;
    /**
     * Specify the number of provisioned RCUs to pay less if the database has predictable load.
     * You will be charged for the provisioned capacity regularly even if this capacity is not fully consumed.
     * You will be charged for the on-demand consumption only if provisioned capacity is consumed.
     */
    provisionedRcuLimit: number;
    /** write quota for topic service, defined in bytes per second. */
    topicWriteQuota: number;
}
export interface ZonalDatabase {
    $type: "yandex.cloud.ydb.v1.ZonalDatabase";
    zoneId: string;
}
export interface RegionalDatabase {
    $type: "yandex.cloud.ydb.v1.RegionalDatabase";
    regionId: string;
}
export interface ScalePolicy {
    $type: "yandex.cloud.ydb.v1.ScalePolicy";
    fixedScale?: ScalePolicy_FixedScale | undefined;
}
export interface ScalePolicy_FixedScale {
    $type: "yandex.cloud.ydb.v1.ScalePolicy.FixedScale";
    size: number;
}
export interface StorageConfig {
    $type: "yandex.cloud.ydb.v1.StorageConfig";
    storageOptions: StorageOption[];
    /** output only field: storage size limit of dedicated database. */
    storageSizeLimit: number;
}
export interface StorageOption {
    $type: "yandex.cloud.ydb.v1.StorageOption";
    storageTypeId: string;
    groupCount: number;
}
export declare const Database: {
    $type: "yandex.cloud.ydb.v1.Database";
    encode(message: Database, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Database;
    fromJSON(object: any): Database;
    toJSON(message: Database): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Database_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        networkId?: string | undefined;
        deletionProtection?: boolean | undefined;
        scalePolicy?: {
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
        } | undefined;
        subnetIds?: string[] | undefined;
        resourcePresetId?: string | undefined;
        endpoint?: string | undefined;
        assignPublicIps?: boolean | undefined;
        locationId?: string | undefined;
        documentApiEndpoint?: string | undefined;
        kinesisApiEndpoint?: string | undefined;
        kafkaApiEndpoint?: string | undefined;
        storageConfig?: {
            storageOptions?: {
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            }[] | undefined;
            storageSizeLimit?: number | undefined;
        } | undefined;
        zonalDatabase?: {
            zoneId?: string | undefined;
        } | undefined;
        regionalDatabase?: {
            regionId?: string | undefined;
        } | undefined;
        dedicatedDatabase?: {
            networkId?: string | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
            } | undefined;
            subnetIds?: string[] | undefined;
            resourcePresetId?: string | undefined;
            assignPublicIps?: boolean | undefined;
            storageConfig?: {
                storageOptions?: {
                    storageTypeId?: string | undefined;
                    groupCount?: number | undefined;
                }[] | undefined;
                storageSizeLimit?: number | undefined;
            } | undefined;
        } | undefined;
        serverlessDatabase?: {
            storageSizeLimit?: number | undefined;
            throttlingRcuLimit?: number | undefined;
            enableThrottlingRcuLimit?: boolean | undefined;
            provisionedRcuLimit?: number | undefined;
            topicWriteQuota?: number | undefined;
        } | undefined;
        backupConfig?: {
            backupSettings?: {
                description?: string | undefined;
                type?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_Type | undefined;
                name?: string | undefined;
                storageClass?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_StorageClass | undefined;
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
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
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
        } | undefined;
        monitoringConfig?: {
            alerts?: {
                description?: string | undefined;
                name?: string | undefined;
                alertId?: string | undefined;
                alertTemplateId?: string | undefined;
                notificationChannels?: {
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                }[] | undefined;
                alertParameters?: {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] | undefined;
                alertThresholds?: {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Database_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        networkId?: string | undefined;
        deletionProtection?: boolean | undefined;
        scalePolicy?: ({
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
        } & {
            fixedScale?: ({
                size?: number | undefined;
            } & {
                size?: number | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
        } & Record<Exclude<keyof I["scalePolicy"], "$type" | "fixedScale">, never>) | undefined;
        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
        resourcePresetId?: string | undefined;
        endpoint?: string | undefined;
        assignPublicIps?: boolean | undefined;
        locationId?: string | undefined;
        documentApiEndpoint?: string | undefined;
        kinesisApiEndpoint?: string | undefined;
        kafkaApiEndpoint?: string | undefined;
        storageConfig?: ({
            storageOptions?: {
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            }[] | undefined;
            storageSizeLimit?: number | undefined;
        } & {
            storageOptions?: ({
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            }[] & ({
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            } & {
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            } & Record<Exclude<keyof I["storageConfig"]["storageOptions"][number], "$type" | "storageTypeId" | "groupCount">, never>)[] & Record<Exclude<keyof I["storageConfig"]["storageOptions"], "$type" | keyof {
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            }[]>, never>) | undefined;
            storageSizeLimit?: number | undefined;
        } & Record<Exclude<keyof I["storageConfig"], "$type" | "storageOptions" | "storageSizeLimit">, never>) | undefined;
        zonalDatabase?: ({
            zoneId?: string | undefined;
        } & {
            zoneId?: string | undefined;
        } & Record<Exclude<keyof I["zonalDatabase"], "$type" | "zoneId">, never>) | undefined;
        regionalDatabase?: ({
            regionId?: string | undefined;
        } & {
            regionId?: string | undefined;
        } & Record<Exclude<keyof I["regionalDatabase"], "$type" | "regionId">, never>) | undefined;
        dedicatedDatabase?: ({
            networkId?: string | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
            } | undefined;
            subnetIds?: string[] | undefined;
            resourcePresetId?: string | undefined;
            assignPublicIps?: boolean | undefined;
            storageConfig?: {
                storageOptions?: {
                    storageTypeId?: string | undefined;
                    groupCount?: number | undefined;
                }[] | undefined;
                storageSizeLimit?: number | undefined;
            } | undefined;
        } & {
            networkId?: string | undefined;
            scalePolicy?: ({
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
            } & {
                fixedScale?: ({
                    size?: number | undefined;
                } & {
                    size?: number | undefined;
                } & Record<Exclude<keyof I["dedicatedDatabase"]["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
            } & Record<Exclude<keyof I["dedicatedDatabase"]["scalePolicy"], "$type" | "fixedScale">, never>) | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["dedicatedDatabase"]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            resourcePresetId?: string | undefined;
            assignPublicIps?: boolean | undefined;
            storageConfig?: ({
                storageOptions?: {
                    storageTypeId?: string | undefined;
                    groupCount?: number | undefined;
                }[] | undefined;
                storageSizeLimit?: number | undefined;
            } & {
                storageOptions?: ({
                    storageTypeId?: string | undefined;
                    groupCount?: number | undefined;
                }[] & ({
                    storageTypeId?: string | undefined;
                    groupCount?: number | undefined;
                } & {
                    storageTypeId?: string | undefined;
                    groupCount?: number | undefined;
                } & Record<Exclude<keyof I["dedicatedDatabase"]["storageConfig"]["storageOptions"][number], "$type" | "storageTypeId" | "groupCount">, never>)[] & Record<Exclude<keyof I["dedicatedDatabase"]["storageConfig"]["storageOptions"], "$type" | keyof {
                    storageTypeId?: string | undefined;
                    groupCount?: number | undefined;
                }[]>, never>) | undefined;
                storageSizeLimit?: number | undefined;
            } & Record<Exclude<keyof I["dedicatedDatabase"]["storageConfig"], "$type" | "storageOptions" | "storageSizeLimit">, never>) | undefined;
        } & Record<Exclude<keyof I["dedicatedDatabase"], "$type" | "networkId" | "scalePolicy" | "subnetIds" | "resourcePresetId" | "assignPublicIps" | "storageConfig">, never>) | undefined;
        serverlessDatabase?: ({
            storageSizeLimit?: number | undefined;
            throttlingRcuLimit?: number | undefined;
            enableThrottlingRcuLimit?: boolean | undefined;
            provisionedRcuLimit?: number | undefined;
            topicWriteQuota?: number | undefined;
        } & {
            storageSizeLimit?: number | undefined;
            throttlingRcuLimit?: number | undefined;
            enableThrottlingRcuLimit?: boolean | undefined;
            provisionedRcuLimit?: number | undefined;
            topicWriteQuota?: number | undefined;
        } & Record<Exclude<keyof I["serverlessDatabase"], "$type" | "storageSizeLimit" | "throttlingRcuLimit" | "enableThrottlingRcuLimit" | "provisionedRcuLimit" | "topicWriteQuota">, never>) | undefined;
        backupConfig?: ({
            backupSettings?: {
                description?: string | undefined;
                type?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_Type | undefined;
                name?: string | undefined;
                storageClass?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_StorageClass | undefined;
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
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
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
                type?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_Type | undefined;
                name?: string | undefined;
                storageClass?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_StorageClass | undefined;
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
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
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
                type?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_Type | undefined;
                name?: string | undefined;
                storageClass?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_StorageClass | undefined;
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
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
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
                type?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_Type | undefined;
                name?: string | undefined;
                storageClass?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_StorageClass | undefined;
                sourcePaths?: (string[] & string[] & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["sourcePaths"], "$type" | keyof string[]>, never>) | undefined;
                sourcePathsToExclude?: (string[] & string[] & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["sourcePathsToExclude"], "$type" | keyof string[]>, never>) | undefined;
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
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
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
                        } & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["backupSchedule"]["dailyBackupSchedule"]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                    } & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["backupSchedule"]["dailyBackupSchedule"], "$type" | "executeTime">, never>) | undefined;
                    weeklyBackupSchedule?: ({
                        daysOfWeek?: {
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            executeTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                    } & {
                        daysOfWeek?: ({
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            executeTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                        }[] & ({
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            executeTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                        } & {
                            days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                        } & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number], "$type" | "days" | "executeTime">, never>)[] & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"], "$type" | keyof {
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            executeTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"], "$type" | "daysOfWeek">, never>) | undefined;
                    recurringBackupSchedule?: ({
                        startTime?: Date | undefined;
                        recurrence?: string | undefined;
                    } & {
                        startTime?: Date | undefined;
                        recurrence?: string | undefined;
                    } & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["backupSchedule"]["recurringBackupSchedule"], "$type" | "startTime" | "recurrence">, never>) | undefined;
                    nextExecuteTime?: Date | undefined;
                } & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["backupSchedule"], "$type" | "dailyBackupSchedule" | "weeklyBackupSchedule" | "recurringBackupSchedule" | "nextExecuteTime">, never>) | undefined;
                backupTimeToLive?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number]["backupTimeToLive"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["backupConfig"]["backupSettings"][number], "$type" | "description" | "type" | "name" | "storageClass" | "sourcePaths" | "sourcePathsToExclude" | "backupSchedule" | "backupTimeToLive">, never>)[] & Record<Exclude<keyof I["backupConfig"]["backupSettings"], "$type" | keyof {
                description?: string | undefined;
                type?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_Type | undefined;
                name?: string | undefined;
                storageClass?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_StorageClass | undefined;
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
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
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
        } & Record<Exclude<keyof I["backupConfig"], "$type" | "backupSettings">, never>) | undefined;
        monitoringConfig?: ({
            alerts?: {
                description?: string | undefined;
                name?: string | undefined;
                alertId?: string | undefined;
                alertTemplateId?: string | undefined;
                notificationChannels?: {
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                }[] | undefined;
                alertParameters?: {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] | undefined;
                alertThresholds?: {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            alerts?: ({
                description?: string | undefined;
                name?: string | undefined;
                alertId?: string | undefined;
                alertTemplateId?: string | undefined;
                notificationChannels?: {
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                }[] | undefined;
                alertParameters?: {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] | undefined;
                alertThresholds?: {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                description?: string | undefined;
                name?: string | undefined;
                alertId?: string | undefined;
                alertTemplateId?: string | undefined;
                notificationChannels?: {
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                }[] | undefined;
                alertParameters?: {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] | undefined;
                alertThresholds?: {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                description?: string | undefined;
                name?: string | undefined;
                alertId?: string | undefined;
                alertTemplateId?: string | undefined;
                notificationChannels?: ({
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                }[] & ({
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                } & {
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: (AlertEvaluationStatus[] & AlertEvaluationStatus[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["notificationChannels"][number]["notifyAboutStatuses"], "$type" | keyof AlertEvaluationStatus[]>, never>) | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["notificationChannels"][number], "$type" | "notificationChannelId" | "notifyAboutStatuses" | "repeateNotifyDelayMs">, never>)[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["notificationChannels"], "$type" | keyof {
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                }[]>, never>) | undefined;
                alertParameters?: ({
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] & ({
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                } & {
                    doubleParameterValue?: ({
                        name?: string | undefined;
                        value?: number | undefined;
                    } & {
                        name?: string | undefined;
                        value?: number | undefined;
                    } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertParameters"][number]["doubleParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                    integerParameterValue?: ({
                        name?: string | undefined;
                        value?: number | undefined;
                    } & {
                        name?: string | undefined;
                        value?: number | undefined;
                    } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertParameters"][number]["integerParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                    textParameterValue?: ({
                        name?: string | undefined;
                        value?: string | undefined;
                    } & {
                        name?: string | undefined;
                        value?: string | undefined;
                    } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertParameters"][number]["textParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                    textListParameterValue?: ({
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } & {
                        values?: (string[] & string[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertParameters"][number]["textListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                        name?: string | undefined;
                    } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertParameters"][number]["textListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
                    labelListParameterValue?: ({
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } & {
                        values?: (string[] & string[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertParameters"][number]["labelListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                        name?: string | undefined;
                    } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertParameters"][number]["labelListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
                } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertParameters"][number], "$type" | "doubleParameterValue" | "integerParameterValue" | "textParameterValue" | "textListParameterValue" | "labelListParameterValue">, never>)[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertParameters"], "$type" | keyof {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                alertThresholds?: ({
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] & ({
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                } & {
                    doubleParameterValue?: ({
                        name?: string | undefined;
                        value?: number | undefined;
                    } & {
                        name?: string | undefined;
                        value?: number | undefined;
                    } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["doubleParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                    integerParameterValue?: ({
                        name?: string | undefined;
                        value?: number | undefined;
                    } & {
                        name?: string | undefined;
                        value?: number | undefined;
                    } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["integerParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                    textParameterValue?: ({
                        name?: string | undefined;
                        value?: string | undefined;
                    } & {
                        name?: string | undefined;
                        value?: string | undefined;
                    } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["textParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                    textListParameterValue?: ({
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } & {
                        values?: (string[] & string[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["textListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                        name?: string | undefined;
                    } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["textListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
                    labelListParameterValue?: ({
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } & {
                        values?: (string[] & string[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["labelListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                        name?: string | undefined;
                    } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["labelListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
                } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertThresholds"][number], "$type" | "doubleParameterValue" | "integerParameterValue" | "textParameterValue" | "textListParameterValue" | "labelListParameterValue">, never>)[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["alertThresholds"], "$type" | keyof {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number], "$type" | "description" | "name" | "alertId" | "alertTemplateId" | "notificationChannels" | "alertParameters" | "alertThresholds">, never>)[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"], "$type" | keyof {
                description?: string | undefined;
                name?: string | undefined;
                alertId?: string | undefined;
                alertTemplateId?: string | undefined;
                notificationChannels?: {
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                }[] | undefined;
                alertParameters?: {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] | undefined;
                alertThresholds?: {
                    doubleParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    integerParameterValue?: {
                        name?: string | undefined;
                        value?: number | undefined;
                    } | undefined;
                    textParameterValue?: {
                        name?: string | undefined;
                        value?: string | undefined;
                    } | undefined;
                    textListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                    labelListParameterValue?: {
                        values?: string[] | undefined;
                        name?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["monitoringConfig"], "$type" | "alerts">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "networkId" | "deletionProtection" | "scalePolicy" | "subnetIds" | "resourcePresetId" | "endpoint" | "assignPublicIps" | "locationId" | "documentApiEndpoint" | "kinesisApiEndpoint" | "kafkaApiEndpoint" | "storageConfig" | "zonalDatabase" | "regionalDatabase" | "dedicatedDatabase" | "serverlessDatabase" | "backupConfig" | "monitoringConfig">, never>>(object: I): Database;
};
export declare const Database_LabelsEntry: {
    $type: "yandex.cloud.ydb.v1.Database.LabelsEntry";
    encode(message: Database_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Database_LabelsEntry;
    fromJSON(object: any): Database_LabelsEntry;
    toJSON(message: Database_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Database_LabelsEntry;
};
export declare const AlertParameter: {
    $type: "yandex.cloud.ydb.v1.AlertParameter";
    encode(message: AlertParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter;
    fromJSON(object: any): AlertParameter;
    toJSON(message: AlertParameter): unknown;
    fromPartial<I extends {
        doubleParameterValue?: {
            name?: string | undefined;
            value?: number | undefined;
        } | undefined;
        integerParameterValue?: {
            name?: string | undefined;
            value?: number | undefined;
        } | undefined;
        textParameterValue?: {
            name?: string | undefined;
            value?: string | undefined;
        } | undefined;
        textListParameterValue?: {
            values?: string[] | undefined;
            name?: string | undefined;
        } | undefined;
        labelListParameterValue?: {
            values?: string[] | undefined;
            name?: string | undefined;
        } | undefined;
    } & {
        doubleParameterValue?: ({
            name?: string | undefined;
            value?: number | undefined;
        } & {
            name?: string | undefined;
            value?: number | undefined;
        } & Record<Exclude<keyof I["doubleParameterValue"], "$type" | "name" | "value">, never>) | undefined;
        integerParameterValue?: ({
            name?: string | undefined;
            value?: number | undefined;
        } & {
            name?: string | undefined;
            value?: number | undefined;
        } & Record<Exclude<keyof I["integerParameterValue"], "$type" | "name" | "value">, never>) | undefined;
        textParameterValue?: ({
            name?: string | undefined;
            value?: string | undefined;
        } & {
            name?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["textParameterValue"], "$type" | "name" | "value">, never>) | undefined;
        textListParameterValue?: ({
            values?: string[] | undefined;
            name?: string | undefined;
        } & {
            values?: (string[] & string[] & Record<Exclude<keyof I["textListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
            name?: string | undefined;
        } & Record<Exclude<keyof I["textListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
        labelListParameterValue?: ({
            values?: string[] | undefined;
            name?: string | undefined;
        } & {
            values?: (string[] & string[] & Record<Exclude<keyof I["labelListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
            name?: string | undefined;
        } & Record<Exclude<keyof I["labelListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "doubleParameterValue" | "integerParameterValue" | "textParameterValue" | "textListParameterValue" | "labelListParameterValue">, never>>(object: I): AlertParameter;
};
export declare const AlertParameter_DoubleParameterValue: {
    $type: "yandex.cloud.ydb.v1.AlertParameter.DoubleParameterValue";
    encode(message: AlertParameter_DoubleParameterValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter_DoubleParameterValue;
    fromJSON(object: any): AlertParameter_DoubleParameterValue;
    toJSON(message: AlertParameter_DoubleParameterValue): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        value?: number | undefined;
    } & {
        name?: string | undefined;
        value?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "value">, never>>(object: I): AlertParameter_DoubleParameterValue;
};
export declare const AlertParameter_IntegerParameterValue: {
    $type: "yandex.cloud.ydb.v1.AlertParameter.IntegerParameterValue";
    encode(message: AlertParameter_IntegerParameterValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter_IntegerParameterValue;
    fromJSON(object: any): AlertParameter_IntegerParameterValue;
    toJSON(message: AlertParameter_IntegerParameterValue): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        value?: number | undefined;
    } & {
        name?: string | undefined;
        value?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "value">, never>>(object: I): AlertParameter_IntegerParameterValue;
};
export declare const AlertParameter_TextParameterValue: {
    $type: "yandex.cloud.ydb.v1.AlertParameter.TextParameterValue";
    encode(message: AlertParameter_TextParameterValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter_TextParameterValue;
    fromJSON(object: any): AlertParameter_TextParameterValue;
    toJSON(message: AlertParameter_TextParameterValue): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        value?: string | undefined;
    } & {
        name?: string | undefined;
        value?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "value">, never>>(object: I): AlertParameter_TextParameterValue;
};
export declare const AlertParameter_TextListParameterValue: {
    $type: "yandex.cloud.ydb.v1.AlertParameter.TextListParameterValue";
    encode(message: AlertParameter_TextListParameterValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter_TextListParameterValue;
    fromJSON(object: any): AlertParameter_TextListParameterValue;
    toJSON(message: AlertParameter_TextListParameterValue): unknown;
    fromPartial<I extends {
        values?: string[] | undefined;
        name?: string | undefined;
    } & {
        values?: (string[] & string[] & Record<Exclude<keyof I["values"], "$type" | keyof string[]>, never>) | undefined;
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "values" | "name">, never>>(object: I): AlertParameter_TextListParameterValue;
};
export declare const AlertParameter_LabelListParameterValue: {
    $type: "yandex.cloud.ydb.v1.AlertParameter.LabelListParameterValue";
    encode(message: AlertParameter_LabelListParameterValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlertParameter_LabelListParameterValue;
    fromJSON(object: any): AlertParameter_LabelListParameterValue;
    toJSON(message: AlertParameter_LabelListParameterValue): unknown;
    fromPartial<I extends {
        values?: string[] | undefined;
        name?: string | undefined;
    } & {
        values?: (string[] & string[] & Record<Exclude<keyof I["values"], "$type" | keyof string[]>, never>) | undefined;
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "values" | "name">, never>>(object: I): AlertParameter_LabelListParameterValue;
};
export declare const NotificationChannel: {
    $type: "yandex.cloud.ydb.v1.NotificationChannel";
    encode(message: NotificationChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NotificationChannel;
    fromJSON(object: any): NotificationChannel;
    toJSON(message: NotificationChannel): unknown;
    fromPartial<I extends {
        notificationChannelId?: string | undefined;
        notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
        repeateNotifyDelayMs?: number | undefined;
    } & {
        notificationChannelId?: string | undefined;
        notifyAboutStatuses?: (AlertEvaluationStatus[] & AlertEvaluationStatus[] & Record<Exclude<keyof I["notifyAboutStatuses"], "$type" | keyof AlertEvaluationStatus[]>, never>) | undefined;
        repeateNotifyDelayMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "notificationChannelId" | "notifyAboutStatuses" | "repeateNotifyDelayMs">, never>>(object: I): NotificationChannel;
};
export declare const Alert: {
    $type: "yandex.cloud.ydb.v1.Alert";
    encode(message: Alert, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Alert;
    fromJSON(object: any): Alert;
    toJSON(message: Alert): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        alertId?: string | undefined;
        alertTemplateId?: string | undefined;
        notificationChannels?: {
            notificationChannelId?: string | undefined;
            notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
            repeateNotifyDelayMs?: number | undefined;
        }[] | undefined;
        alertParameters?: {
            doubleParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            integerParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            textParameterValue?: {
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            textListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
            labelListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
        }[] | undefined;
        alertThresholds?: {
            doubleParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            integerParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            textParameterValue?: {
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            textListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
            labelListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        alertId?: string | undefined;
        alertTemplateId?: string | undefined;
        notificationChannels?: ({
            notificationChannelId?: string | undefined;
            notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
            repeateNotifyDelayMs?: number | undefined;
        }[] & ({
            notificationChannelId?: string | undefined;
            notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
            repeateNotifyDelayMs?: number | undefined;
        } & {
            notificationChannelId?: string | undefined;
            notifyAboutStatuses?: (AlertEvaluationStatus[] & AlertEvaluationStatus[] & Record<Exclude<keyof I["notificationChannels"][number]["notifyAboutStatuses"], "$type" | keyof AlertEvaluationStatus[]>, never>) | undefined;
            repeateNotifyDelayMs?: number | undefined;
        } & Record<Exclude<keyof I["notificationChannels"][number], "$type" | "notificationChannelId" | "notifyAboutStatuses" | "repeateNotifyDelayMs">, never>)[] & Record<Exclude<keyof I["notificationChannels"], "$type" | keyof {
            notificationChannelId?: string | undefined;
            notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
            repeateNotifyDelayMs?: number | undefined;
        }[]>, never>) | undefined;
        alertParameters?: ({
            doubleParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            integerParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            textParameterValue?: {
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            textListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
            labelListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
        }[] & ({
            doubleParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            integerParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            textParameterValue?: {
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            textListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
            labelListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            doubleParameterValue?: ({
                name?: string | undefined;
                value?: number | undefined;
            } & {
                name?: string | undefined;
                value?: number | undefined;
            } & Record<Exclude<keyof I["alertParameters"][number]["doubleParameterValue"], "$type" | "name" | "value">, never>) | undefined;
            integerParameterValue?: ({
                name?: string | undefined;
                value?: number | undefined;
            } & {
                name?: string | undefined;
                value?: number | undefined;
            } & Record<Exclude<keyof I["alertParameters"][number]["integerParameterValue"], "$type" | "name" | "value">, never>) | undefined;
            textParameterValue?: ({
                name?: string | undefined;
                value?: string | undefined;
            } & {
                name?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["alertParameters"][number]["textParameterValue"], "$type" | "name" | "value">, never>) | undefined;
            textListParameterValue?: ({
                values?: string[] | undefined;
                name?: string | undefined;
            } & {
                values?: (string[] & string[] & Record<Exclude<keyof I["alertParameters"][number]["textListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                name?: string | undefined;
            } & Record<Exclude<keyof I["alertParameters"][number]["textListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
            labelListParameterValue?: ({
                values?: string[] | undefined;
                name?: string | undefined;
            } & {
                values?: (string[] & string[] & Record<Exclude<keyof I["alertParameters"][number]["labelListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                name?: string | undefined;
            } & Record<Exclude<keyof I["alertParameters"][number]["labelListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
        } & Record<Exclude<keyof I["alertParameters"][number], "$type" | "doubleParameterValue" | "integerParameterValue" | "textParameterValue" | "textListParameterValue" | "labelListParameterValue">, never>)[] & Record<Exclude<keyof I["alertParameters"], "$type" | keyof {
            doubleParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            integerParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            textParameterValue?: {
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            textListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
            labelListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        alertThresholds?: ({
            doubleParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            integerParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            textParameterValue?: {
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            textListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
            labelListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
        }[] & ({
            doubleParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            integerParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            textParameterValue?: {
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            textListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
            labelListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            doubleParameterValue?: ({
                name?: string | undefined;
                value?: number | undefined;
            } & {
                name?: string | undefined;
                value?: number | undefined;
            } & Record<Exclude<keyof I["alertThresholds"][number]["doubleParameterValue"], "$type" | "name" | "value">, never>) | undefined;
            integerParameterValue?: ({
                name?: string | undefined;
                value?: number | undefined;
            } & {
                name?: string | undefined;
                value?: number | undefined;
            } & Record<Exclude<keyof I["alertThresholds"][number]["integerParameterValue"], "$type" | "name" | "value">, never>) | undefined;
            textParameterValue?: ({
                name?: string | undefined;
                value?: string | undefined;
            } & {
                name?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["alertThresholds"][number]["textParameterValue"], "$type" | "name" | "value">, never>) | undefined;
            textListParameterValue?: ({
                values?: string[] | undefined;
                name?: string | undefined;
            } & {
                values?: (string[] & string[] & Record<Exclude<keyof I["alertThresholds"][number]["textListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                name?: string | undefined;
            } & Record<Exclude<keyof I["alertThresholds"][number]["textListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
            labelListParameterValue?: ({
                values?: string[] | undefined;
                name?: string | undefined;
            } & {
                values?: (string[] & string[] & Record<Exclude<keyof I["alertThresholds"][number]["labelListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                name?: string | undefined;
            } & Record<Exclude<keyof I["alertThresholds"][number]["labelListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
        } & Record<Exclude<keyof I["alertThresholds"][number], "$type" | "doubleParameterValue" | "integerParameterValue" | "textParameterValue" | "textListParameterValue" | "labelListParameterValue">, never>)[] & Record<Exclude<keyof I["alertThresholds"], "$type" | keyof {
            doubleParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            integerParameterValue?: {
                name?: string | undefined;
                value?: number | undefined;
            } | undefined;
            textParameterValue?: {
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            textListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
            labelListParameterValue?: {
                values?: string[] | undefined;
                name?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "alertId" | "alertTemplateId" | "notificationChannels" | "alertParameters" | "alertThresholds">, never>>(object: I): Alert;
};
export declare const MonitoringConfig: {
    $type: "yandex.cloud.ydb.v1.MonitoringConfig";
    encode(message: MonitoringConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MonitoringConfig;
    fromJSON(object: any): MonitoringConfig;
    toJSON(message: MonitoringConfig): unknown;
    fromPartial<I extends {
        alerts?: {
            description?: string | undefined;
            name?: string | undefined;
            alertId?: string | undefined;
            alertTemplateId?: string | undefined;
            notificationChannels?: {
                notificationChannelId?: string | undefined;
                notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                repeateNotifyDelayMs?: number | undefined;
            }[] | undefined;
            alertParameters?: {
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[] | undefined;
            alertThresholds?: {
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        alerts?: ({
            description?: string | undefined;
            name?: string | undefined;
            alertId?: string | undefined;
            alertTemplateId?: string | undefined;
            notificationChannels?: {
                notificationChannelId?: string | undefined;
                notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                repeateNotifyDelayMs?: number | undefined;
            }[] | undefined;
            alertParameters?: {
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[] | undefined;
            alertThresholds?: {
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            description?: string | undefined;
            name?: string | undefined;
            alertId?: string | undefined;
            alertTemplateId?: string | undefined;
            notificationChannels?: {
                notificationChannelId?: string | undefined;
                notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                repeateNotifyDelayMs?: number | undefined;
            }[] | undefined;
            alertParameters?: {
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[] | undefined;
            alertThresholds?: {
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            name?: string | undefined;
            alertId?: string | undefined;
            alertTemplateId?: string | undefined;
            notificationChannels?: ({
                notificationChannelId?: string | undefined;
                notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                repeateNotifyDelayMs?: number | undefined;
            }[] & ({
                notificationChannelId?: string | undefined;
                notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                repeateNotifyDelayMs?: number | undefined;
            } & {
                notificationChannelId?: string | undefined;
                notifyAboutStatuses?: (AlertEvaluationStatus[] & AlertEvaluationStatus[] & Record<Exclude<keyof I["alerts"][number]["notificationChannels"][number]["notifyAboutStatuses"], "$type" | keyof AlertEvaluationStatus[]>, never>) | undefined;
                repeateNotifyDelayMs?: number | undefined;
            } & Record<Exclude<keyof I["alerts"][number]["notificationChannels"][number], "$type" | "notificationChannelId" | "notifyAboutStatuses" | "repeateNotifyDelayMs">, never>)[] & Record<Exclude<keyof I["alerts"][number]["notificationChannels"], "$type" | keyof {
                notificationChannelId?: string | undefined;
                notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                repeateNotifyDelayMs?: number | undefined;
            }[]>, never>) | undefined;
            alertParameters?: ({
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[] & ({
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            } & {
                doubleParameterValue?: ({
                    name?: string | undefined;
                    value?: number | undefined;
                } & {
                    name?: string | undefined;
                    value?: number | undefined;
                } & Record<Exclude<keyof I["alerts"][number]["alertParameters"][number]["doubleParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                integerParameterValue?: ({
                    name?: string | undefined;
                    value?: number | undefined;
                } & {
                    name?: string | undefined;
                    value?: number | undefined;
                } & Record<Exclude<keyof I["alerts"][number]["alertParameters"][number]["integerParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                textParameterValue?: ({
                    name?: string | undefined;
                    value?: string | undefined;
                } & {
                    name?: string | undefined;
                    value?: string | undefined;
                } & Record<Exclude<keyof I["alerts"][number]["alertParameters"][number]["textParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                textListParameterValue?: ({
                    values?: string[] | undefined;
                    name?: string | undefined;
                } & {
                    values?: (string[] & string[] & Record<Exclude<keyof I["alerts"][number]["alertParameters"][number]["textListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                    name?: string | undefined;
                } & Record<Exclude<keyof I["alerts"][number]["alertParameters"][number]["textListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
                labelListParameterValue?: ({
                    values?: string[] | undefined;
                    name?: string | undefined;
                } & {
                    values?: (string[] & string[] & Record<Exclude<keyof I["alerts"][number]["alertParameters"][number]["labelListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                    name?: string | undefined;
                } & Record<Exclude<keyof I["alerts"][number]["alertParameters"][number]["labelListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
            } & Record<Exclude<keyof I["alerts"][number]["alertParameters"][number], "$type" | "doubleParameterValue" | "integerParameterValue" | "textParameterValue" | "textListParameterValue" | "labelListParameterValue">, never>)[] & Record<Exclude<keyof I["alerts"][number]["alertParameters"], "$type" | keyof {
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            alertThresholds?: ({
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[] & ({
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            } & {
                doubleParameterValue?: ({
                    name?: string | undefined;
                    value?: number | undefined;
                } & {
                    name?: string | undefined;
                    value?: number | undefined;
                } & Record<Exclude<keyof I["alerts"][number]["alertThresholds"][number]["doubleParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                integerParameterValue?: ({
                    name?: string | undefined;
                    value?: number | undefined;
                } & {
                    name?: string | undefined;
                    value?: number | undefined;
                } & Record<Exclude<keyof I["alerts"][number]["alertThresholds"][number]["integerParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                textParameterValue?: ({
                    name?: string | undefined;
                    value?: string | undefined;
                } & {
                    name?: string | undefined;
                    value?: string | undefined;
                } & Record<Exclude<keyof I["alerts"][number]["alertThresholds"][number]["textParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                textListParameterValue?: ({
                    values?: string[] | undefined;
                    name?: string | undefined;
                } & {
                    values?: (string[] & string[] & Record<Exclude<keyof I["alerts"][number]["alertThresholds"][number]["textListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                    name?: string | undefined;
                } & Record<Exclude<keyof I["alerts"][number]["alertThresholds"][number]["textListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
                labelListParameterValue?: ({
                    values?: string[] | undefined;
                    name?: string | undefined;
                } & {
                    values?: (string[] & string[] & Record<Exclude<keyof I["alerts"][number]["alertThresholds"][number]["labelListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                    name?: string | undefined;
                } & Record<Exclude<keyof I["alerts"][number]["alertThresholds"][number]["labelListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
            } & Record<Exclude<keyof I["alerts"][number]["alertThresholds"][number], "$type" | "doubleParameterValue" | "integerParameterValue" | "textParameterValue" | "textListParameterValue" | "labelListParameterValue">, never>)[] & Record<Exclude<keyof I["alerts"][number]["alertThresholds"], "$type" | keyof {
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["alerts"][number], "$type" | "description" | "name" | "alertId" | "alertTemplateId" | "notificationChannels" | "alertParameters" | "alertThresholds">, never>)[] & Record<Exclude<keyof I["alerts"], "$type" | keyof {
            description?: string | undefined;
            name?: string | undefined;
            alertId?: string | undefined;
            alertTemplateId?: string | undefined;
            notificationChannels?: {
                notificationChannelId?: string | undefined;
                notifyAboutStatuses?: AlertEvaluationStatus[] | undefined;
                repeateNotifyDelayMs?: number | undefined;
            }[] | undefined;
            alertParameters?: {
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[] | undefined;
            alertThresholds?: {
                doubleParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                integerParameterValue?: {
                    name?: string | undefined;
                    value?: number | undefined;
                } | undefined;
                textParameterValue?: {
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                textListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
                labelListParameterValue?: {
                    values?: string[] | undefined;
                    name?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "alerts">, never>>(object: I): MonitoringConfig;
};
export declare const DedicatedDatabase: {
    $type: "yandex.cloud.ydb.v1.DedicatedDatabase";
    encode(message: DedicatedDatabase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DedicatedDatabase;
    fromJSON(object: any): DedicatedDatabase;
    toJSON(message: DedicatedDatabase): unknown;
    fromPartial<I extends {
        networkId?: string | undefined;
        scalePolicy?: {
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
        } | undefined;
        subnetIds?: string[] | undefined;
        resourcePresetId?: string | undefined;
        assignPublicIps?: boolean | undefined;
        storageConfig?: {
            storageOptions?: {
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            }[] | undefined;
            storageSizeLimit?: number | undefined;
        } | undefined;
    } & {
        networkId?: string | undefined;
        scalePolicy?: ({
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
        } & {
            fixedScale?: ({
                size?: number | undefined;
            } & {
                size?: number | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
        } & Record<Exclude<keyof I["scalePolicy"], "$type" | "fixedScale">, never>) | undefined;
        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
        resourcePresetId?: string | undefined;
        assignPublicIps?: boolean | undefined;
        storageConfig?: ({
            storageOptions?: {
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            }[] | undefined;
            storageSizeLimit?: number | undefined;
        } & {
            storageOptions?: ({
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            }[] & ({
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            } & {
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            } & Record<Exclude<keyof I["storageConfig"]["storageOptions"][number], "$type" | "storageTypeId" | "groupCount">, never>)[] & Record<Exclude<keyof I["storageConfig"]["storageOptions"], "$type" | keyof {
                storageTypeId?: string | undefined;
                groupCount?: number | undefined;
            }[]>, never>) | undefined;
            storageSizeLimit?: number | undefined;
        } & Record<Exclude<keyof I["storageConfig"], "$type" | "storageOptions" | "storageSizeLimit">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "networkId" | "scalePolicy" | "subnetIds" | "resourcePresetId" | "assignPublicIps" | "storageConfig">, never>>(object: I): DedicatedDatabase;
};
export declare const ServerlessDatabase: {
    $type: "yandex.cloud.ydb.v1.ServerlessDatabase";
    encode(message: ServerlessDatabase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServerlessDatabase;
    fromJSON(object: any): ServerlessDatabase;
    toJSON(message: ServerlessDatabase): unknown;
    fromPartial<I extends {
        storageSizeLimit?: number | undefined;
        throttlingRcuLimit?: number | undefined;
        enableThrottlingRcuLimit?: boolean | undefined;
        provisionedRcuLimit?: number | undefined;
        topicWriteQuota?: number | undefined;
    } & {
        storageSizeLimit?: number | undefined;
        throttlingRcuLimit?: number | undefined;
        enableThrottlingRcuLimit?: boolean | undefined;
        provisionedRcuLimit?: number | undefined;
        topicWriteQuota?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "storageSizeLimit" | "throttlingRcuLimit" | "enableThrottlingRcuLimit" | "provisionedRcuLimit" | "topicWriteQuota">, never>>(object: I): ServerlessDatabase;
};
export declare const ZonalDatabase: {
    $type: "yandex.cloud.ydb.v1.ZonalDatabase";
    encode(message: ZonalDatabase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ZonalDatabase;
    fromJSON(object: any): ZonalDatabase;
    toJSON(message: ZonalDatabase): unknown;
    fromPartial<I extends {
        zoneId?: string | undefined;
    } & {
        zoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "zoneId">, never>>(object: I): ZonalDatabase;
};
export declare const RegionalDatabase: {
    $type: "yandex.cloud.ydb.v1.RegionalDatabase";
    encode(message: RegionalDatabase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegionalDatabase;
    fromJSON(object: any): RegionalDatabase;
    toJSON(message: RegionalDatabase): unknown;
    fromPartial<I extends {
        regionId?: string | undefined;
    } & {
        regionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "regionId">, never>>(object: I): RegionalDatabase;
};
export declare const ScalePolicy: {
    $type: "yandex.cloud.ydb.v1.ScalePolicy";
    encode(message: ScalePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy;
    fromJSON(object: any): ScalePolicy;
    toJSON(message: ScalePolicy): unknown;
    fromPartial<I extends {
        fixedScale?: {
            size?: number | undefined;
        } | undefined;
    } & {
        fixedScale?: ({
            size?: number | undefined;
        } & {
            size?: number | undefined;
        } & Record<Exclude<keyof I["fixedScale"], "$type" | "size">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "fixedScale">, never>>(object: I): ScalePolicy;
};
export declare const ScalePolicy_FixedScale: {
    $type: "yandex.cloud.ydb.v1.ScalePolicy.FixedScale";
    encode(message: ScalePolicy_FixedScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_FixedScale;
    fromJSON(object: any): ScalePolicy_FixedScale;
    toJSON(message: ScalePolicy_FixedScale): unknown;
    fromPartial<I extends {
        size?: number | undefined;
    } & {
        size?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "size">, never>>(object: I): ScalePolicy_FixedScale;
};
export declare const StorageConfig: {
    $type: "yandex.cloud.ydb.v1.StorageConfig";
    encode(message: StorageConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StorageConfig;
    fromJSON(object: any): StorageConfig;
    toJSON(message: StorageConfig): unknown;
    fromPartial<I extends {
        storageOptions?: {
            storageTypeId?: string | undefined;
            groupCount?: number | undefined;
        }[] | undefined;
        storageSizeLimit?: number | undefined;
    } & {
        storageOptions?: ({
            storageTypeId?: string | undefined;
            groupCount?: number | undefined;
        }[] & ({
            storageTypeId?: string | undefined;
            groupCount?: number | undefined;
        } & {
            storageTypeId?: string | undefined;
            groupCount?: number | undefined;
        } & Record<Exclude<keyof I["storageOptions"][number], "$type" | "storageTypeId" | "groupCount">, never>)[] & Record<Exclude<keyof I["storageOptions"], "$type" | keyof {
            storageTypeId?: string | undefined;
            groupCount?: number | undefined;
        }[]>, never>) | undefined;
        storageSizeLimit?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "storageOptions" | "storageSizeLimit">, never>>(object: I): StorageConfig;
};
export declare const StorageOption: {
    $type: "yandex.cloud.ydb.v1.StorageOption";
    encode(message: StorageOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StorageOption;
    fromJSON(object: any): StorageOption;
    toJSON(message: StorageOption): unknown;
    fromPartial<I extends {
        storageTypeId?: string | undefined;
        groupCount?: number | undefined;
    } & {
        storageTypeId?: string | undefined;
        groupCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "storageTypeId" | "groupCount">, never>>(object: I): StorageOption;
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
