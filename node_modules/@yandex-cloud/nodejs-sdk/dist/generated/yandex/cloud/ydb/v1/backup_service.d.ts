/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Backup } from "../../../../yandex/cloud/ydb/v1/backup";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface ListPathsRequest {
    $type: "yandex.cloud.ydb.v1.ListPathsRequest";
    /** Required. ID of the YDB backup. */
    backupId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListPaths requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListPaths
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListPathsResponse {
    $type: "yandex.cloud.ydb.v1.ListPathsResponse";
    paths: string[];
    nextPageToken: string;
}
export interface GetBackupRequest {
    $type: "yandex.cloud.ydb.v1.GetBackupRequest";
    /** Required. ID of the YDB backup. */
    backupId: string;
}
export interface ListBackupsRequest {
    $type: "yandex.cloud.ydb.v1.ListBackupsRequest";
    folderId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListBackups requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListBackups
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListBackupsResponse {
    $type: "yandex.cloud.ydb.v1.ListBackupsResponse";
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for ListBackups requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListBackups request. Subsequent ListBackups
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteBackupRequest {
    $type: "yandex.cloud.ydb.v1.DeleteBackupRequest";
    backupId: string;
}
export interface DeleteBackupMetadata {
    $type: "yandex.cloud.ydb.v1.DeleteBackupMetadata";
    backupId: string;
    databaseId: string;
}
export declare const ListPathsRequest: {
    $type: "yandex.cloud.ydb.v1.ListPathsRequest";
    encode(message: ListPathsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPathsRequest;
    fromJSON(object: any): ListPathsRequest;
    toJSON(message: ListPathsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        backupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        backupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "backupId">, never>>(object: I): ListPathsRequest;
};
export declare const ListPathsResponse: {
    $type: "yandex.cloud.ydb.v1.ListPathsResponse";
    encode(message: ListPathsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPathsResponse;
    fromJSON(object: any): ListPathsResponse;
    toJSON(message: ListPathsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        paths?: string[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        paths?: (string[] & string[] & Record<Exclude<keyof I["paths"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "paths">, never>>(object: I): ListPathsResponse;
};
export declare const GetBackupRequest: {
    $type: "yandex.cloud.ydb.v1.GetBackupRequest";
    encode(message: GetBackupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBackupRequest;
    fromJSON(object: any): GetBackupRequest;
    toJSON(message: GetBackupRequest): unknown;
    fromPartial<I extends {
        backupId?: string | undefined;
    } & {
        backupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupId">, never>>(object: I): GetBackupRequest;
};
export declare const ListBackupsRequest: {
    $type: "yandex.cloud.ydb.v1.ListBackupsRequest";
    encode(message: ListBackupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsRequest;
    fromJSON(object: any): ListBackupsRequest;
    toJSON(message: ListBackupsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListBackupsRequest;
};
export declare const ListBackupsResponse: {
    $type: "yandex.cloud.ydb.v1.ListBackupsResponse";
    encode(message: ListBackupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsResponse;
    fromJSON(object: any): ListBackupsResponse;
    toJSON(message: ListBackupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        backups?: {
            description?: string | undefined;
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/ydb/v1/backup").Backup_Type | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/ydb/v1/backup").Backup_Status | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            completedAt?: Date | undefined;
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
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        backups?: ({
            description?: string | undefined;
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/ydb/v1/backup").Backup_Type | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/ydb/v1/backup").Backup_Status | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            completedAt?: Date | undefined;
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
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/ydb/v1/backup").Backup_Type | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/ydb/v1/backup").Backup_Status | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            completedAt?: Date | undefined;
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
            description?: string | undefined;
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/ydb/v1/backup").Backup_Type | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/ydb/v1/backup").Backup_Status | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            completedAt?: Date | undefined;
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
                sourcePaths?: (string[] & string[] & Record<Exclude<keyof I["backups"][number]["backupSettings"]["sourcePaths"], "$type" | keyof string[]>, never>) | undefined;
                sourcePathsToExclude?: (string[] & string[] & Record<Exclude<keyof I["backups"][number]["backupSettings"]["sourcePathsToExclude"], "$type" | keyof string[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["backups"][number]["backupSettings"]["backupSchedule"]["dailyBackupSchedule"]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                    } & Record<Exclude<keyof I["backups"][number]["backupSettings"]["backupSchedule"]["dailyBackupSchedule"], "$type" | "executeTime">, never>) | undefined;
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
                            days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["backups"][number]["backupSettings"]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["backups"][number]["backupSettings"]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number]["executeTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                        } & Record<Exclude<keyof I["backups"][number]["backupSettings"]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"][number], "$type" | "days" | "executeTime">, never>)[] & Record<Exclude<keyof I["backups"][number]["backupSettings"]["backupSchedule"]["weeklyBackupSchedule"]["daysOfWeek"], "$type" | keyof {
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            executeTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["backups"][number]["backupSettings"]["backupSchedule"]["weeklyBackupSchedule"], "$type" | "daysOfWeek">, never>) | undefined;
                    recurringBackupSchedule?: ({
                        startTime?: Date | undefined;
                        recurrence?: string | undefined;
                    } & {
                        startTime?: Date | undefined;
                        recurrence?: string | undefined;
                    } & Record<Exclude<keyof I["backups"][number]["backupSettings"]["backupSchedule"]["recurringBackupSchedule"], "$type" | "startTime" | "recurrence">, never>) | undefined;
                    nextExecuteTime?: Date | undefined;
                } & Record<Exclude<keyof I["backups"][number]["backupSettings"]["backupSchedule"], "$type" | "dailyBackupSchedule" | "weeklyBackupSchedule" | "recurringBackupSchedule" | "nextExecuteTime">, never>) | undefined;
                backupTimeToLive?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["backups"][number]["backupSettings"]["backupTimeToLive"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["backups"][number]["backupSettings"], "$type" | "description" | "type" | "name" | "storageClass" | "sourcePaths" | "sourcePathsToExclude" | "backupSchedule" | "backupTimeToLive">, never>) | undefined;
            databaseId?: string | undefined;
        } & Record<Exclude<keyof I["backups"][number], "$type" | "description" | "id" | "type" | "name" | "createdAt" | "status" | "folderId" | "size" | "startedAt" | "completedAt" | "backupSettings" | "databaseId">, never>)[] & Record<Exclude<keyof I["backups"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/ydb/v1/backup").Backup_Type | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/ydb/v1/backup").Backup_Status | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            completedAt?: Date | undefined;
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "backups">, never>>(object: I): ListBackupsResponse;
};
export declare const DeleteBackupRequest: {
    $type: "yandex.cloud.ydb.v1.DeleteBackupRequest";
    encode(message: DeleteBackupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackupRequest;
    fromJSON(object: any): DeleteBackupRequest;
    toJSON(message: DeleteBackupRequest): unknown;
    fromPartial<I extends {
        backupId?: string | undefined;
    } & {
        backupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupId">, never>>(object: I): DeleteBackupRequest;
};
export declare const DeleteBackupMetadata: {
    $type: "yandex.cloud.ydb.v1.DeleteBackupMetadata";
    encode(message: DeleteBackupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackupMetadata;
    fromJSON(object: any): DeleteBackupMetadata;
    toJSON(message: DeleteBackupMetadata): unknown;
    fromPartial<I extends {
        backupId?: string | undefined;
        databaseId?: string | undefined;
    } & {
        backupId?: string | undefined;
        databaseId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupId" | "databaseId">, never>>(object: I): DeleteBackupMetadata;
};
/** A set of methods for managing backups. */
export declare const BackupServiceService: {
    /** Returns the specified backup. */
    readonly get: {
        readonly path: "/yandex.cloud.ydb.v1.BackupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBackupRequest;
        readonly responseSerialize: (value: Backup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Backup;
    };
    readonly listPaths: {
        readonly path: "/yandex.cloud.ydb.v1.BackupService/ListPaths";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListPathsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPathsRequest;
        readonly responseSerialize: (value: ListPathsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListPathsResponse;
    };
    /** Retrieves a list of backups. */
    readonly list: {
        readonly path: "/yandex.cloud.ydb.v1.BackupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBackupsRequest;
        readonly responseSerialize: (value: ListBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBackupsResponse;
    };
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.ydb.v1.BackupService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.ydb.v1.BackupService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.ydb.v1.BackupService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified backup. */
    readonly delete: {
        readonly path: "/yandex.cloud.ydb.v1.BackupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBackupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface BackupServiceServer extends UntypedServiceImplementation {
    /** Returns the specified backup. */
    get: handleUnaryCall<GetBackupRequest, Backup>;
    listPaths: handleUnaryCall<ListPathsRequest, ListPathsResponse>;
    /** Retrieves a list of backups. */
    list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Deletes the specified backup. */
    delete: handleUnaryCall<DeleteBackupRequest, Operation>;
}
export interface BackupServiceClient extends Client {
    /** Returns the specified backup. */
    get(request: GetBackupRequest, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    listPaths(request: ListPathsRequest, callback: (error: ServiceError | null, response: ListPathsResponse) => void): ClientUnaryCall;
    listPaths(request: ListPathsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListPathsResponse) => void): ClientUnaryCall;
    listPaths(request: ListPathsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListPathsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of backups. */
    list(request: ListBackupsRequest, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified backup. */
    delete(request: DeleteBackupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const BackupServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): BackupServiceClient;
    service: typeof BackupServiceService;
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
