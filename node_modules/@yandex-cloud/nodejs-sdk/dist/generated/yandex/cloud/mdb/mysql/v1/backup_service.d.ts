/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Backup } from "../../../../../yandex/cloud/mdb/mysql/v1/backup";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1";
export interface GetBackupRequest {
    $type: "yandex.cloud.mdb.mysql.v1.GetBackupRequest";
    /**
     * ID of the backup to return information about.
     *
     * To get this ID, make a [BackupService.List] request (lists all backups in a folder) or a [ClusterService.ListBackups] request (lists all backups for an existing cluster).
     */
    backupId: string;
}
export interface ListBackupsRequest {
    $type: "yandex.cloud.mdb.mysql.v1.ListBackupsRequest";
    /**
     * ID of the folder to list backups in.
     *
     * To get this ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListBackupsResponse.next_page_token] that can be used to get the next page of results in the subsequent [BackupService.List] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListBackupsResponse.next_page_token] returned by the previous [BackupService.List] request.
     */
    pageToken: string;
}
export interface ListBackupsResponse {
    $type: "yandex.cloud.mdb.mysql.v1.ListBackupsResponse";
    /** List of backups. */
    backups: Backup[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListBackupsRequest.page_size], use the [next_page_token] as the value for the [ListBackupsRequest.page_token] in the subsequent [BackupService.List] request to iterate through multiple pages of results.
     *
     * Each of the subsequent [BackupService.List] requests should use the [next_page_token] value returned by the previous request to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteBackupRequest {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteBackupRequest";
    /** Required. ID of the backup to delete. */
    backupId: string;
}
export interface DeleteBackupMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteBackupMetadata";
    /** Required. ID of the MySQL backup that is currently being deleted. */
    backupId: string;
    /** ID of the MySQL backup that is being deleted. */
    clusterId: string;
}
export declare const GetBackupRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.GetBackupRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListBackupsRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListBackupsResponse";
    encode(message: ListBackupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsResponse;
    fromJSON(object: any): ListBackupsResponse;
    toJSON(message: ListBackupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        backups?: {
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mysql/v1/backup").Backup_BackupCreationType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        backups?: ({
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mysql/v1/backup").Backup_BackupCreationType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mysql/v1/backup").Backup_BackupCreationType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        } & {
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mysql/v1/backup").Backup_BackupCreationType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        } & Record<Exclude<keyof I["backups"][number], "$type" | "id" | "type" | "createdAt" | "folderId" | "size" | "startedAt" | "sourceClusterId">, never>)[] & Record<Exclude<keyof I["backups"], "$type" | keyof {
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mysql/v1/backup").Backup_BackupCreationType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "backups">, never>>(object: I): ListBackupsResponse;
};
export declare const DeleteBackupRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteBackupRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.DeleteBackupMetadata";
    encode(message: DeleteBackupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackupMetadata;
    fromJSON(object: any): DeleteBackupMetadata;
    toJSON(message: DeleteBackupMetadata): unknown;
    fromPartial<I extends {
        backupId?: string | undefined;
        clusterId?: string | undefined;
    } & {
        backupId?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupId" | "clusterId">, never>>(object: I): DeleteBackupMetadata;
};
/**
 * A set of methods for managing MySQL backups.
 *
 * See [the documentation](/docs/managed-mysql/operations/cluster-backups) for details.
 */
export declare const BackupServiceService: {
    /** Retrieves information about the specified backup. */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.BackupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBackupRequest;
        readonly responseSerialize: (value: Backup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Backup;
    };
    /**
     * Retrieves the list of backups in a folder.
     *
     * To list backups for an existing cluster, make a [ClusterService.ListBackups] request.
     */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.BackupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBackupsRequest;
        readonly responseSerialize: (value: ListBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBackupsResponse;
    };
};
export interface BackupServiceServer extends UntypedServiceImplementation {
    /** Retrieves information about the specified backup. */
    get: handleUnaryCall<GetBackupRequest, Backup>;
    /**
     * Retrieves the list of backups in a folder.
     *
     * To list backups for an existing cluster, make a [ClusterService.ListBackups] request.
     */
    list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
}
export interface BackupServiceClient extends Client {
    /** Retrieves information about the specified backup. */
    get(request: GetBackupRequest, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    /**
     * Retrieves the list of backups in a folder.
     *
     * To list backups for an existing cluster, make a [ClusterService.ListBackups] request.
     */
    list(request: ListBackupsRequest, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
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
