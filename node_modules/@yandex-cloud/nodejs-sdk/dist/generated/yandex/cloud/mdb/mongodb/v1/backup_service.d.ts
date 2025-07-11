/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Backup } from "../../../../../yandex/cloud/mdb/mongodb/v1/backup";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1";
export interface GetBackupRequest {
    $type: "yandex.cloud.mdb.mongodb.v1.GetBackupRequest";
    /**
     * ID of the backup to return information about.
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
}
export interface ListBackupsRequest {
    $type: "yandex.cloud.mdb.mongodb.v1.ListBackupsRequest";
    /**
     * ID of the folder to list backups in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListBackupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListBackupsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}
export interface ListBackupsResponse {
    $type: "yandex.cloud.mdb.mongodb.v1.ListBackupsResponse";
    /** List of Backup resources. */
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListBackupsRequest.page_size], use the [next_page_token] as the value
     * for the [ListBackupsRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteBackupRequest {
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteBackupRequest";
    /** Required. ID of the backup to delete. */
    backupId: string;
}
export interface DeleteBackupMetadata {
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteBackupMetadata";
    /** Required. ID of the deleting MongoDB backup. */
    backupId: string;
}
export declare const GetBackupRequest: {
    $type: "yandex.cloud.mdb.mongodb.v1.GetBackupRequest";
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListBackupsRequest";
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListBackupsResponse";
    encode(message: ListBackupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsResponse;
    fromJSON(object: any): ListBackupsResponse;
    toJSON(message: ListBackupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        backups?: {
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mongodb/v1/backup").Backup_BackupType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            sourceShardNames?: string[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        backups?: ({
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mongodb/v1/backup").Backup_BackupType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            sourceShardNames?: string[] | undefined;
        }[] & ({
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mongodb/v1/backup").Backup_BackupType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            sourceShardNames?: string[] | undefined;
        } & {
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mongodb/v1/backup").Backup_BackupType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            sourceShardNames?: (string[] & string[] & Record<Exclude<keyof I["backups"][number]["sourceShardNames"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["backups"][number], "$type" | "id" | "type" | "createdAt" | "folderId" | "size" | "startedAt" | "sourceClusterId" | "sourceShardNames">, never>)[] & Record<Exclude<keyof I["backups"], "$type" | keyof {
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mongodb/v1/backup").Backup_BackupType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            sourceShardNames?: string[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "backups">, never>>(object: I): ListBackupsResponse;
};
export declare const DeleteBackupRequest: {
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteBackupRequest";
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
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteBackupMetadata";
    encode(message: DeleteBackupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackupMetadata;
    fromJSON(object: any): DeleteBackupMetadata;
    toJSON(message: DeleteBackupMetadata): unknown;
    fromPartial<I extends {
        backupId?: string | undefined;
    } & {
        backupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupId">, never>>(object: I): DeleteBackupMetadata;
};
/** A set of methods for managing MongoDB Backup resources. */
export declare const BackupServiceService: {
    /**
     * Returns the specified MongoDB backup.
     *
     * To get the list of available MongoDB backups, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.BackupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBackupRequest;
        readonly responseSerialize: (value: Backup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Backup;
    };
    /** Retrieves the list of backups available for the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.BackupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBackupsRequest;
        readonly responseSerialize: (value: ListBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBackupsResponse;
    };
    /** Returns the list of available backups for the specified MongoDB cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.BackupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBackupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface BackupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified MongoDB backup.
     *
     * To get the list of available MongoDB backups, make a [List] request.
     */
    get: handleUnaryCall<GetBackupRequest, Backup>;
    /** Retrieves the list of backups available for the specified folder. */
    list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
    /** Returns the list of available backups for the specified MongoDB cluster. */
    delete: handleUnaryCall<DeleteBackupRequest, Operation>;
}
export interface BackupServiceClient extends Client {
    /**
     * Returns the specified MongoDB backup.
     *
     * To get the list of available MongoDB backups, make a [List] request.
     */
    get(request: GetBackupRequest, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    /** Retrieves the list of backups available for the specified folder. */
    list(request: ListBackupsRequest, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    /** Returns the list of available backups for the specified MongoDB cluster. */
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
