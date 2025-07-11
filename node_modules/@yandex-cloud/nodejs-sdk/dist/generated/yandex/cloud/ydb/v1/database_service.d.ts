/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { BackupSettings, BackupConfig } from "../../../../yandex/cloud/ydb/v1/backup";
import { StorageConfig, ScalePolicy, MonitoringConfig, Database, ZonalDatabase, RegionalDatabase, DedicatedDatabase, ServerlessDatabase } from "../../../../yandex/cloud/ydb/v1/database";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface MoveDatabaseRequest {
    $type: "yandex.cloud.ydb.v1.MoveDatabaseRequest";
    /** ID of the YDB instance to move. */
    databaseId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveDatabaseMetadata {
    $type: "yandex.cloud.ydb.v1.MoveDatabaseMetadata";
    databaseId: string;
    databaseName: string;
}
export interface RestoreBackupRequest {
    $type: "yandex.cloud.ydb.v1.RestoreBackupRequest";
    /** Required. ID of the YDB backup. */
    backupId: string;
    /** Required. ID of the YDB database. */
    databaseId: string;
    /**
     * Specify paths to restore.
     * If empty, all paths will restored by default.
     */
    pathsToRestore: string[];
    /** Specify target path. */
    targetPath: string;
}
export interface RestoreBackupMetadata {
    $type: "yandex.cloud.ydb.v1.RestoreBackupMetadata";
    backupId: string;
    databaseId: string;
}
export interface BackupDatabaseRequest {
    $type: "yandex.cloud.ydb.v1.BackupDatabaseRequest";
    databaseId: string;
    /** custom backup options, if required. */
    backupSettings?: BackupSettings;
}
export interface BackupDatabaseMetadata {
    $type: "yandex.cloud.ydb.v1.BackupDatabaseMetadata";
    backupId: string;
    databaseId: string;
}
export interface StartDatabaseRequest {
    $type: "yandex.cloud.ydb.v1.StartDatabaseRequest";
    databaseId: string;
}
export interface StartDatabaseMetadata {
    $type: "yandex.cloud.ydb.v1.StartDatabaseMetadata";
    databaseId: string;
    databaseName: string;
}
export interface StopDatabaseRequest {
    $type: "yandex.cloud.ydb.v1.StopDatabaseRequest";
    databaseId: string;
}
export interface StopDatabaseMetadata {
    $type: "yandex.cloud.ydb.v1.StopDatabaseMetadata";
    databaseId: string;
    databaseName: string;
}
export interface GetDatabaseRequest {
    $type: "yandex.cloud.ydb.v1.GetDatabaseRequest";
    /** Required. ID of the YDB cluster. */
    databaseId: string;
}
export interface ListDatabasesRequest {
    $type: "yandex.cloud.ydb.v1.ListDatabasesRequest";
    folderId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListDatabases requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListDatabases
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListDatabasesResponse {
    $type: "yandex.cloud.ydb.v1.ListDatabasesResponse";
    databases: Database[];
    /**
     * This token allows you to get the next page of results for ListDatabases requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListDatabases request. Subsequent ListDatabases
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateDatabaseRequest {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest";
    folderId: string;
    name: string;
    description: string;
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
    monitoringConfig?: MonitoringConfig;
    deletionProtection: boolean;
}
export interface CreateDatabaseRequest_LabelsEntry {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateDatabaseMetadata {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseMetadata";
    /** Required. ID of the YDB cluster. */
    databaseId: string;
    /** Required. Name of the creating database. */
    databaseName: string;
}
export interface UpdateDatabaseRequest {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest";
    folderId: string;
    updateMask?: FieldMask;
    databaseId: string;
    name: string;
    description: string;
    resourcePresetId: string;
    storageConfig?: StorageConfig;
    scalePolicy?: ScalePolicy;
    networkId: string;
    subnetIds: string[];
    zonalDatabase?: ZonalDatabase | undefined;
    regionalDatabase?: RegionalDatabase | undefined;
    dedicatedDatabase?: DedicatedDatabase | undefined;
    serverlessDatabase?: ServerlessDatabase | undefined;
    assignPublicIps: boolean;
    locationId: string;
    labels: {
        [key: string]: string;
    };
    backupConfig?: BackupConfig;
    monitoringConfig?: MonitoringConfig;
    deletionProtection: boolean;
}
export interface UpdateDatabaseRequest_LabelsEntry {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateDatabaseMetadata {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseMetadata";
    databaseId: string;
    databaseName: string;
}
export interface DeleteDatabaseRequest {
    $type: "yandex.cloud.ydb.v1.DeleteDatabaseRequest";
    databaseId: string;
}
export interface DeleteDatabaseMetadata {
    $type: "yandex.cloud.ydb.v1.DeleteDatabaseMetadata";
    databaseId: string;
    databaseName: string;
}
export declare const MoveDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.MoveDatabaseRequest";
    encode(message: MoveDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveDatabaseRequest;
    fromJSON(object: any): MoveDatabaseRequest;
    toJSON(message: MoveDatabaseRequest): unknown;
    fromPartial<I extends {
        destinationFolderId?: string | undefined;
        databaseId?: string | undefined;
    } & {
        destinationFolderId?: string | undefined;
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "destinationFolderId" | "databaseId">, never>>(object: I): MoveDatabaseRequest;
};
export declare const MoveDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.MoveDatabaseMetadata";
    encode(message: MoveDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveDatabaseMetadata;
    fromJSON(object: any): MoveDatabaseMetadata;
    toJSON(message: MoveDatabaseMetadata): unknown;
    fromPartial<I extends {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseName" | "databaseId">, never>>(object: I): MoveDatabaseMetadata;
};
export declare const RestoreBackupRequest: {
    $type: "yandex.cloud.ydb.v1.RestoreBackupRequest";
    encode(message: RestoreBackupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreBackupRequest;
    fromJSON(object: any): RestoreBackupRequest;
    toJSON(message: RestoreBackupRequest): unknown;
    fromPartial<I extends {
        backupId?: string | undefined;
        databaseId?: string | undefined;
        pathsToRestore?: string[] | undefined;
        targetPath?: string | undefined;
    } & {
        backupId?: string | undefined;
        databaseId?: string | undefined;
        pathsToRestore?: (string[] & string[] & Record<Exclude<keyof I["pathsToRestore"], "$type" | keyof string[]>, never>) | undefined;
        targetPath?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupId" | "databaseId" | "pathsToRestore" | "targetPath">, never>>(object: I): RestoreBackupRequest;
};
export declare const RestoreBackupMetadata: {
    $type: "yandex.cloud.ydb.v1.RestoreBackupMetadata";
    encode(message: RestoreBackupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreBackupMetadata;
    fromJSON(object: any): RestoreBackupMetadata;
    toJSON(message: RestoreBackupMetadata): unknown;
    fromPartial<I extends {
        backupId?: string | undefined;
        databaseId?: string | undefined;
    } & {
        backupId?: string | undefined;
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupId" | "databaseId">, never>>(object: I): RestoreBackupMetadata;
};
export declare const BackupDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.BackupDatabaseRequest";
    encode(message: BackupDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupDatabaseRequest;
    fromJSON(object: any): BackupDatabaseRequest;
    toJSON(message: BackupDatabaseRequest): unknown;
    fromPartial<I extends {
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
        } | undefined;
        databaseId?: string | undefined;
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
        } & {
            description?: string | undefined;
            type?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_Type | undefined;
            name?: string | undefined;
            storageClass?: import("../../../../yandex/cloud/ydb/v1/backup").BackupSettings_StorageClass | undefined;
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
                    } & Record<Exclude<keyof I["backupSettings"]["backupSchedule"]["dailyBackupSchedule"]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                } & Record<Exclude<keyof I["backupSettings"]["backupSchedule"]["dailyBackupSchedule"], "$type" | "executeTime">, never>) | undefined;
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
                        days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["backupSettings"]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
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
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "backupSettings" | "databaseId">, never>>(object: I): BackupDatabaseRequest;
};
export declare const BackupDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.BackupDatabaseMetadata";
    encode(message: BackupDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupDatabaseMetadata;
    fromJSON(object: any): BackupDatabaseMetadata;
    toJSON(message: BackupDatabaseMetadata): unknown;
    fromPartial<I extends {
        backupId?: string | undefined;
        databaseId?: string | undefined;
    } & {
        backupId?: string | undefined;
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupId" | "databaseId">, never>>(object: I): BackupDatabaseMetadata;
};
export declare const StartDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.StartDatabaseRequest";
    encode(message: StartDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartDatabaseRequest;
    fromJSON(object: any): StartDatabaseRequest;
    toJSON(message: StartDatabaseRequest): unknown;
    fromPartial<I extends {
        databaseId?: string | undefined;
    } & {
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseId">, never>>(object: I): StartDatabaseRequest;
};
export declare const StartDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.StartDatabaseMetadata";
    encode(message: StartDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartDatabaseMetadata;
    fromJSON(object: any): StartDatabaseMetadata;
    toJSON(message: StartDatabaseMetadata): unknown;
    fromPartial<I extends {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseName" | "databaseId">, never>>(object: I): StartDatabaseMetadata;
};
export declare const StopDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.StopDatabaseRequest";
    encode(message: StopDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopDatabaseRequest;
    fromJSON(object: any): StopDatabaseRequest;
    toJSON(message: StopDatabaseRequest): unknown;
    fromPartial<I extends {
        databaseId?: string | undefined;
    } & {
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseId">, never>>(object: I): StopDatabaseRequest;
};
export declare const StopDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.StopDatabaseMetadata";
    encode(message: StopDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopDatabaseMetadata;
    fromJSON(object: any): StopDatabaseMetadata;
    toJSON(message: StopDatabaseMetadata): unknown;
    fromPartial<I extends {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseName" | "databaseId">, never>>(object: I): StopDatabaseMetadata;
};
export declare const GetDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.GetDatabaseRequest";
    encode(message: GetDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDatabaseRequest;
    fromJSON(object: any): GetDatabaseRequest;
    toJSON(message: GetDatabaseRequest): unknown;
    fromPartial<I extends {
        databaseId?: string | undefined;
    } & {
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseId">, never>>(object: I): GetDatabaseRequest;
};
export declare const ListDatabasesRequest: {
    $type: "yandex.cloud.ydb.v1.ListDatabasesRequest";
    encode(message: ListDatabasesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDatabasesRequest;
    fromJSON(object: any): ListDatabasesRequest;
    toJSON(message: ListDatabasesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListDatabasesRequest;
};
export declare const ListDatabasesResponse: {
    $type: "yandex.cloud.ydb.v1.ListDatabasesResponse";
    encode(message: ListDatabasesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDatabasesResponse;
    fromJSON(object: any): ListDatabasesResponse;
    toJSON(message: ListDatabasesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        databases?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/ydb/v1/database").Database_Status | undefined;
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
                        notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        databases?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/ydb/v1/database").Database_Status | undefined;
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
                        notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/ydb/v1/database").Database_Status | undefined;
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
                        notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
            status?: import("../../../../yandex/cloud/ydb/v1/database").Database_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["databases"][number]["labels"], string | number>, never>) | undefined;
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
                } & Record<Exclude<keyof I["databases"][number]["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
            } & Record<Exclude<keyof I["databases"][number]["scalePolicy"], "$type" | "fixedScale">, never>) | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["databases"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
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
                } & Record<Exclude<keyof I["databases"][number]["storageConfig"]["storageOptions"][number], "$type" | "storageTypeId" | "groupCount">, never>)[] & Record<Exclude<keyof I["databases"][number]["storageConfig"]["storageOptions"], "$type" | keyof {
                    storageTypeId?: string | undefined;
                    groupCount?: number | undefined;
                }[]>, never>) | undefined;
                storageSizeLimit?: number | undefined;
            } & Record<Exclude<keyof I["databases"][number]["storageConfig"], "$type" | "storageOptions" | "storageSizeLimit">, never>) | undefined;
            zonalDatabase?: ({
                zoneId?: string | undefined;
            } & {
                zoneId?: string | undefined;
            } & Record<Exclude<keyof I["databases"][number]["zonalDatabase"], "$type" | "zoneId">, never>) | undefined;
            regionalDatabase?: ({
                regionId?: string | undefined;
            } & {
                regionId?: string | undefined;
            } & Record<Exclude<keyof I["databases"][number]["regionalDatabase"], "$type" | "regionId">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["databases"][number]["dedicatedDatabase"]["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
                } & Record<Exclude<keyof I["databases"][number]["dedicatedDatabase"]["scalePolicy"], "$type" | "fixedScale">, never>) | undefined;
                subnetIds?: (string[] & string[] & Record<Exclude<keyof I["databases"][number]["dedicatedDatabase"]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["databases"][number]["dedicatedDatabase"]["storageConfig"]["storageOptions"][number], "$type" | "storageTypeId" | "groupCount">, never>)[] & Record<Exclude<keyof I["databases"][number]["dedicatedDatabase"]["storageConfig"]["storageOptions"], "$type" | keyof {
                        storageTypeId?: string | undefined;
                        groupCount?: number | undefined;
                    }[]>, never>) | undefined;
                    storageSizeLimit?: number | undefined;
                } & Record<Exclude<keyof I["databases"][number]["dedicatedDatabase"]["storageConfig"], "$type" | "storageOptions" | "storageSizeLimit">, never>) | undefined;
            } & Record<Exclude<keyof I["databases"][number]["dedicatedDatabase"], "$type" | "networkId" | "scalePolicy" | "subnetIds" | "resourcePresetId" | "assignPublicIps" | "storageConfig">, never>) | undefined;
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
            } & Record<Exclude<keyof I["databases"][number]["serverlessDatabase"], "$type" | "storageSizeLimit" | "throttlingRcuLimit" | "enableThrottlingRcuLimit" | "provisionedRcuLimit" | "topicWriteQuota">, never>) | undefined;
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
                    sourcePaths?: (string[] & string[] & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["sourcePaths"], "$type" | keyof string[]>, never>) | undefined;
                    sourcePathsToExclude?: (string[] & string[] & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["sourcePathsToExclude"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["backupSchedule"]["dailyBackupSchedule"]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                        } & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["backupSchedule"]["dailyBackupSchedule"], "$type" | "executeTime">, never>) | undefined;
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
                                days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                            } & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number], "$type" | "days" | "executeTime">, never>)[] & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"], "$type" | keyof {
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                                executeTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["backupSchedule"]["weeklyBackupSchedule"], "$type" | "daysOfWeek">, never>) | undefined;
                        recurringBackupSchedule?: ({
                            startTime?: Date | undefined;
                            recurrence?: string | undefined;
                        } & {
                            startTime?: Date | undefined;
                            recurrence?: string | undefined;
                        } & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["backupSchedule"]["recurringBackupSchedule"], "$type" | "startTime" | "recurrence">, never>) | undefined;
                        nextExecuteTime?: Date | undefined;
                    } & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["backupSchedule"], "$type" | "dailyBackupSchedule" | "weeklyBackupSchedule" | "recurringBackupSchedule" | "nextExecuteTime">, never>) | undefined;
                    backupTimeToLive?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number]["backupTimeToLive"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"][number], "$type" | "description" | "type" | "name" | "storageClass" | "sourcePaths" | "sourcePathsToExclude" | "backupSchedule" | "backupTimeToLive">, never>)[] & Record<Exclude<keyof I["databases"][number]["backupConfig"]["backupSettings"], "$type" | keyof {
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
            } & Record<Exclude<keyof I["databases"][number]["backupConfig"], "$type" | "backupSettings">, never>) | undefined;
            monitoringConfig?: ({
                alerts?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    alertId?: string | undefined;
                    alertTemplateId?: string | undefined;
                    notificationChannels?: {
                        notificationChannelId?: string | undefined;
                        notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                        notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                        notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                        notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
                        repeateNotifyDelayMs?: number | undefined;
                    }[] & ({
                        notificationChannelId?: string | undefined;
                        notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
                        repeateNotifyDelayMs?: number | undefined;
                    } & {
                        notificationChannelId?: string | undefined;
                        notifyAboutStatuses?: (import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] & import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["notificationChannels"][number]["notifyAboutStatuses"], "$type" | keyof import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[]>, never>) | undefined;
                        repeateNotifyDelayMs?: number | undefined;
                    } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["notificationChannels"][number], "$type" | "notificationChannelId" | "notifyAboutStatuses" | "repeateNotifyDelayMs">, never>)[] & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["notificationChannels"], "$type" | keyof {
                        notificationChannelId?: string | undefined;
                        notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                        } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertParameters"][number]["doubleParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                        integerParameterValue?: ({
                            name?: string | undefined;
                            value?: number | undefined;
                        } & {
                            name?: string | undefined;
                            value?: number | undefined;
                        } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertParameters"][number]["integerParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                        textParameterValue?: ({
                            name?: string | undefined;
                            value?: string | undefined;
                        } & {
                            name?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertParameters"][number]["textParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                        textListParameterValue?: ({
                            values?: string[] | undefined;
                            name?: string | undefined;
                        } & {
                            values?: (string[] & string[] & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertParameters"][number]["textListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                            name?: string | undefined;
                        } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertParameters"][number]["textListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
                        labelListParameterValue?: ({
                            values?: string[] | undefined;
                            name?: string | undefined;
                        } & {
                            values?: (string[] & string[] & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertParameters"][number]["labelListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                            name?: string | undefined;
                        } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertParameters"][number]["labelListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
                    } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertParameters"][number], "$type" | "doubleParameterValue" | "integerParameterValue" | "textParameterValue" | "textListParameterValue" | "labelListParameterValue">, never>)[] & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertParameters"], "$type" | keyof {
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
                        } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["doubleParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                        integerParameterValue?: ({
                            name?: string | undefined;
                            value?: number | undefined;
                        } & {
                            name?: string | undefined;
                            value?: number | undefined;
                        } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["integerParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                        textParameterValue?: ({
                            name?: string | undefined;
                            value?: string | undefined;
                        } & {
                            name?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["textParameterValue"], "$type" | "name" | "value">, never>) | undefined;
                        textListParameterValue?: ({
                            values?: string[] | undefined;
                            name?: string | undefined;
                        } & {
                            values?: (string[] & string[] & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["textListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                            name?: string | undefined;
                        } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["textListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
                        labelListParameterValue?: ({
                            values?: string[] | undefined;
                            name?: string | undefined;
                        } & {
                            values?: (string[] & string[] & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["labelListParameterValue"]["values"], "$type" | keyof string[]>, never>) | undefined;
                            name?: string | undefined;
                        } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertThresholds"][number]["labelListParameterValue"], "$type" | "values" | "name">, never>) | undefined;
                    } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertThresholds"][number], "$type" | "doubleParameterValue" | "integerParameterValue" | "textParameterValue" | "textListParameterValue" | "labelListParameterValue">, never>)[] & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number]["alertThresholds"], "$type" | keyof {
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
                } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"][number], "$type" | "description" | "name" | "alertId" | "alertTemplateId" | "notificationChannels" | "alertParameters" | "alertThresholds">, never>)[] & Record<Exclude<keyof I["databases"][number]["monitoringConfig"]["alerts"], "$type" | keyof {
                    description?: string | undefined;
                    name?: string | undefined;
                    alertId?: string | undefined;
                    alertTemplateId?: string | undefined;
                    notificationChannels?: {
                        notificationChannelId?: string | undefined;
                        notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
            } & Record<Exclude<keyof I["databases"][number]["monitoringConfig"], "$type" | "alerts">, never>) | undefined;
        } & Record<Exclude<keyof I["databases"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "networkId" | "deletionProtection" | "scalePolicy" | "subnetIds" | "resourcePresetId" | "endpoint" | "assignPublicIps" | "locationId" | "documentApiEndpoint" | "kinesisApiEndpoint" | "kafkaApiEndpoint" | "storageConfig" | "zonalDatabase" | "regionalDatabase" | "dedicatedDatabase" | "serverlessDatabase" | "backupConfig" | "monitoringConfig">, never>)[] & Record<Exclude<keyof I["databases"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/ydb/v1/database").Database_Status | undefined;
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
                        notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "databases">, never>>(object: I): ListDatabasesResponse;
};
export declare const CreateDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest";
    encode(message: CreateDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDatabaseRequest;
    fromJSON(object: any): CreateDatabaseRequest;
    toJSON(message: CreateDatabaseRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
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
        assignPublicIps?: boolean | undefined;
        locationId?: string | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
        name?: string | undefined;
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
        assignPublicIps?: boolean | undefined;
        locationId?: string | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                }[] & ({
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                } & {
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: (import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] & import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["notificationChannels"][number]["notifyAboutStatuses"], "$type" | keyof import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[]>, never>) | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["notificationChannels"][number], "$type" | "notificationChannelId" | "notifyAboutStatuses" | "repeateNotifyDelayMs">, never>)[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["notificationChannels"], "$type" | keyof {
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "deletionProtection" | "scalePolicy" | "subnetIds" | "resourcePresetId" | "assignPublicIps" | "locationId" | "storageConfig" | "zonalDatabase" | "regionalDatabase" | "dedicatedDatabase" | "serverlessDatabase" | "backupConfig" | "monitoringConfig">, never>>(object: I): CreateDatabaseRequest;
};
export declare const CreateDatabaseRequest_LabelsEntry: {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest.LabelsEntry";
    encode(message: CreateDatabaseRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDatabaseRequest_LabelsEntry;
    fromJSON(object: any): CreateDatabaseRequest_LabelsEntry;
    toJSON(message: CreateDatabaseRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateDatabaseRequest_LabelsEntry;
};
export declare const CreateDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseMetadata";
    encode(message: CreateDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDatabaseMetadata;
    fromJSON(object: any): CreateDatabaseMetadata;
    toJSON(message: CreateDatabaseMetadata): unknown;
    fromPartial<I extends {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseName" | "databaseId">, never>>(object: I): CreateDatabaseMetadata;
};
export declare const UpdateDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest";
    encode(message: UpdateDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDatabaseRequest;
    fromJSON(object: any): UpdateDatabaseRequest;
    toJSON(message: UpdateDatabaseRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
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
        databaseId?: string | undefined;
        assignPublicIps?: boolean | undefined;
        locationId?: string | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
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
        databaseId?: string | undefined;
        assignPublicIps?: boolean | undefined;
        locationId?: string | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                }[] & ({
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                } & {
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: (import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] & import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["notificationChannels"][number]["notifyAboutStatuses"], "$type" | keyof import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[]>, never>) | undefined;
                    repeateNotifyDelayMs?: number | undefined;
                } & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["notificationChannels"][number], "$type" | "notificationChannelId" | "notifyAboutStatuses" | "repeateNotifyDelayMs">, never>)[] & Record<Exclude<keyof I["monitoringConfig"]["alerts"][number]["notificationChannels"], "$type" | keyof {
                    notificationChannelId?: string | undefined;
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
                    notifyAboutStatuses?: import("../../../../yandex/cloud/ydb/v1/database").AlertEvaluationStatus[] | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "updateMask" | "networkId" | "deletionProtection" | "scalePolicy" | "subnetIds" | "resourcePresetId" | "databaseId" | "assignPublicIps" | "locationId" | "storageConfig" | "zonalDatabase" | "regionalDatabase" | "dedicatedDatabase" | "serverlessDatabase" | "backupConfig" | "monitoringConfig">, never>>(object: I): UpdateDatabaseRequest;
};
export declare const UpdateDatabaseRequest_LabelsEntry: {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest.LabelsEntry";
    encode(message: UpdateDatabaseRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDatabaseRequest_LabelsEntry;
    fromJSON(object: any): UpdateDatabaseRequest_LabelsEntry;
    toJSON(message: UpdateDatabaseRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateDatabaseRequest_LabelsEntry;
};
export declare const UpdateDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseMetadata";
    encode(message: UpdateDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDatabaseMetadata;
    fromJSON(object: any): UpdateDatabaseMetadata;
    toJSON(message: UpdateDatabaseMetadata): unknown;
    fromPartial<I extends {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseName" | "databaseId">, never>>(object: I): UpdateDatabaseMetadata;
};
export declare const DeleteDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.DeleteDatabaseRequest";
    encode(message: DeleteDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDatabaseRequest;
    fromJSON(object: any): DeleteDatabaseRequest;
    toJSON(message: DeleteDatabaseRequest): unknown;
    fromPartial<I extends {
        databaseId?: string | undefined;
    } & {
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseId">, never>>(object: I): DeleteDatabaseRequest;
};
export declare const DeleteDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.DeleteDatabaseMetadata";
    encode(message: DeleteDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDatabaseMetadata;
    fromJSON(object: any): DeleteDatabaseMetadata;
    toJSON(message: DeleteDatabaseMetadata): unknown;
    fromPartial<I extends {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & {
        databaseName?: string | undefined;
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseName" | "databaseId">, never>>(object: I): DeleteDatabaseMetadata;
};
/** A set of methods for managing databases. */
export declare const DatabaseServiceService: {
    /** Returns the specified database. */
    readonly get: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDatabaseRequest;
        readonly responseSerialize: (value: Database) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Database;
    };
    /** Retrieves a list of databases. */
    readonly list: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDatabasesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDatabasesRequest;
        readonly responseSerialize: (value: ListDatabasesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDatabasesResponse;
    };
    /** Creates a new database. */
    readonly create: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Modifies the specified database. */
    readonly update: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified database. */
    readonly start: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified database. */
    readonly stop: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly move: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified database. */
    readonly delete: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Restores the specified backup */
    readonly restore: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreBackupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly backup: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Backup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BackupDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BackupDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface DatabaseServiceServer extends UntypedServiceImplementation {
    /** Returns the specified database. */
    get: handleUnaryCall<GetDatabaseRequest, Database>;
    /** Retrieves a list of databases. */
    list: handleUnaryCall<ListDatabasesRequest, ListDatabasesResponse>;
    /** Creates a new database. */
    create: handleUnaryCall<CreateDatabaseRequest, Operation>;
    /** Modifies the specified database. */
    update: handleUnaryCall<UpdateDatabaseRequest, Operation>;
    /** Starts the specified database. */
    start: handleUnaryCall<StartDatabaseRequest, Operation>;
    /** Stops the specified database. */
    stop: handleUnaryCall<StopDatabaseRequest, Operation>;
    move: handleUnaryCall<MoveDatabaseRequest, Operation>;
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Deletes the specified database. */
    delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
    /** Restores the specified backup */
    restore: handleUnaryCall<RestoreBackupRequest, Operation>;
    backup: handleUnaryCall<BackupDatabaseRequest, Operation>;
}
export interface DatabaseServiceClient extends Client {
    /** Returns the specified database. */
    get(request: GetDatabaseRequest, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    /** Retrieves a list of databases. */
    list(request: ListDatabasesRequest, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    /** Creates a new database. */
    create(request: CreateDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Modifies the specified database. */
    update(request: UpdateDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified database. */
    start(request: StartDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified database. */
    stop(request: StopDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified database. */
    delete(request: DeleteDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Restores the specified backup */
    restore(request: RestoreBackupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const DatabaseServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): DatabaseServiceClient;
    service: typeof DatabaseServiceService;
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
