/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { DatabaseSpec, Database } from "../../../../../yandex/cloud/mdb/sqlserver/v1/database";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
export interface GetDatabaseRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.GetDatabaseRequest";
    /**
     * ID of the SQL Server cluster the database belongs to.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the SQL Server database to return.
     *
     * To get the name of the database use a [DatabaseService.List] request.
     */
    databaseName: string;
}
export interface ListDatabasesRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesRequest";
    /**
     * ID of the SQL Server cluster to list databases in.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListDatabasesResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /** Page token. To get the next page of results, set [page_token] to the [ListDatabasesResponse.next_page_token] returned by the previous list request. */
    pageToken: string;
}
export interface ListDatabasesResponse {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesResponse";
    /** List of SQL Server databases. */
    databases: Database[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListDatabasesRequest.page_size], use the [next_page_token] as the value for the [ListDatabasesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateDatabaseRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseRequest";
    /**
     * ID of the SQL Server cluster to create a database in.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the database to create. */
    databaseSpec?: DatabaseSpec;
}
export interface CreateDatabaseMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseMetadata";
    /** ID of the SQL Server cluster where the database is being created. */
    clusterId: string;
    /** Name of the SQL Server database being created. */
    databaseName: string;
}
export interface DeleteDatabaseRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseRequest";
    /**
     * ID of the SQL Server cluster to delete a database in.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the database to delete.
     *
     * To get the name of the database, use a [DatabaseService.List] request.
     */
    databaseName: string;
}
export interface DeleteDatabaseMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseMetadata";
    /** ID of the SQL Server cluster where the database is being deleted. */
    clusterId: string;
    /** Name of the SQL Server database being deleted. */
    databaseName: string;
}
export interface RestoreDatabaseRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseRequest";
    /**
     * ID of the SQL Server cluster to restore a database in.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the SQL Server database that is being restored. */
    databaseName: string;
    /** Name of the database which backup is used to restore the database. */
    fromDatabase: string;
    /** ID of a backup to be used. */
    backupId: string;
    /** Timestamp which is used for Point-in-Time recovery. */
    time?: Date;
}
export interface RestoreDatabaseMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseMetadata";
    /** ID of the SQL Server cluster where a database is being created. */
    clusterId: string;
    /** Name of an SQL Server database that is being created. */
    databaseName: string;
    /** Name of the database which backup is used to restore the database. */
    fromDatabase: string;
    /** ID of a backup to be used. */
    backupId: string;
}
export interface ImportDatabaseBackupRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupRequest";
    /**
     * ID of the SQL Server cluster to import a database in.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the SQL Server database that is being imported. */
    databaseName: string;
    /** Name of object storage bucket to import backups from. */
    s3Bucket: string;
    /** Path in object storage bucket to import backups from. */
    s3Path: string;
    /** List of .bak files in bucket containing database backup. */
    files: string[];
}
export interface ImportDatabaseBackupMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupMetadata";
    /** ID of the SQL Server cluster where a database is being imported. */
    clusterId: string;
    /** Name of the SQL Server database that is being imported. */
    databaseName: string;
    /** Name of object storage bucket to import backups from. */
    s3Bucket: string;
    /** Path in object storage bucket to import backups from. */
    s3Path: string;
}
export interface ExportDatabaseBackupRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupRequest";
    /**
     * ID of the SQL Server cluster to export a database from.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the SQL Server database that is being exported. */
    databaseName: string;
    /** Name of object storage bucket to export backups to. */
    s3Bucket: string;
    /** Path in object storage bucket to export backups to. */
    s3Path: string;
    /** Prefix for .bak files to export. */
    prefix: string;
}
export interface ExportDatabaseBackupMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupMetadata";
    /** ID of the SQL Server cluster where a database is being exported. */
    clusterId: string;
    /** Name of the SQL Server database that is being exported. */
    databaseName: string;
    /** Name of object storage bucket to export backups to. */
    s3Bucket: string;
    /** Path in object storage bucket to export backups to. */
    s3Path: string;
}
export declare const GetDatabaseRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.GetDatabaseRequest";
    encode(message: GetDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDatabaseRequest;
    fromJSON(object: any): GetDatabaseRequest;
    toJSON(message: GetDatabaseRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "databaseName">, never>>(object: I): GetDatabaseRequest;
};
export declare const ListDatabasesRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesRequest";
    encode(message: ListDatabasesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDatabasesRequest;
    fromJSON(object: any): ListDatabasesRequest;
    toJSON(message: ListDatabasesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListDatabasesRequest;
};
export declare const ListDatabasesResponse: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesResponse";
    encode(message: ListDatabasesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDatabasesResponse;
    fromJSON(object: any): ListDatabasesResponse;
    toJSON(message: ListDatabasesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        databases?: {
            name?: string | undefined;
            clusterId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        databases?: ({
            name?: string | undefined;
            clusterId?: string | undefined;
        }[] & ({
            name?: string | undefined;
            clusterId?: string | undefined;
        } & {
            name?: string | undefined;
            clusterId?: string | undefined;
        } & Record<Exclude<keyof I["databases"][number], "$type" | "name" | "clusterId">, never>)[] & Record<Exclude<keyof I["databases"], "$type" | keyof {
            name?: string | undefined;
            clusterId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "databases">, never>>(object: I): ListDatabasesResponse;
};
export declare const CreateDatabaseRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseRequest";
    encode(message: CreateDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDatabaseRequest;
    fromJSON(object: any): CreateDatabaseRequest;
    toJSON(message: CreateDatabaseRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        databaseSpec?: {
            name?: string | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        databaseSpec?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & Record<Exclude<keyof I["databaseSpec"], "$type" | "name">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "databaseSpec">, never>>(object: I): CreateDatabaseRequest;
};
export declare const CreateDatabaseMetadata: {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseMetadata";
    encode(message: CreateDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDatabaseMetadata;
    fromJSON(object: any): CreateDatabaseMetadata;
    toJSON(message: CreateDatabaseMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "databaseName">, never>>(object: I): CreateDatabaseMetadata;
};
export declare const DeleteDatabaseRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseRequest";
    encode(message: DeleteDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDatabaseRequest;
    fromJSON(object: any): DeleteDatabaseRequest;
    toJSON(message: DeleteDatabaseRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "databaseName">, never>>(object: I): DeleteDatabaseRequest;
};
export declare const DeleteDatabaseMetadata: {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseMetadata";
    encode(message: DeleteDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDatabaseMetadata;
    fromJSON(object: any): DeleteDatabaseMetadata;
    toJSON(message: DeleteDatabaseMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "databaseName">, never>>(object: I): DeleteDatabaseMetadata;
};
export declare const RestoreDatabaseRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseRequest";
    encode(message: RestoreDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreDatabaseRequest;
    fromJSON(object: any): RestoreDatabaseRequest;
    toJSON(message: RestoreDatabaseRequest): unknown;
    fromPartial<I extends {
        time?: Date | undefined;
        backupId?: string | undefined;
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        fromDatabase?: string | undefined;
    } & {
        time?: Date | undefined;
        backupId?: string | undefined;
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        fromDatabase?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "time" | "backupId" | "clusterId" | "databaseName" | "fromDatabase">, never>>(object: I): RestoreDatabaseRequest;
};
export declare const RestoreDatabaseMetadata: {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseMetadata";
    encode(message: RestoreDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreDatabaseMetadata;
    fromJSON(object: any): RestoreDatabaseMetadata;
    toJSON(message: RestoreDatabaseMetadata): unknown;
    fromPartial<I extends {
        backupId?: string | undefined;
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        fromDatabase?: string | undefined;
    } & {
        backupId?: string | undefined;
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        fromDatabase?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupId" | "clusterId" | "databaseName" | "fromDatabase">, never>>(object: I): RestoreDatabaseMetadata;
};
export declare const ImportDatabaseBackupRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupRequest";
    encode(message: ImportDatabaseBackupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ImportDatabaseBackupRequest;
    fromJSON(object: any): ImportDatabaseBackupRequest;
    toJSON(message: ImportDatabaseBackupRequest): unknown;
    fromPartial<I extends {
        files?: string[] | undefined;
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        s3Bucket?: string | undefined;
        s3Path?: string | undefined;
    } & {
        files?: (string[] & string[] & Record<Exclude<keyof I["files"], "$type" | keyof string[]>, never>) | undefined;
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        s3Bucket?: string | undefined;
        s3Path?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "files" | "clusterId" | "databaseName" | "s3Bucket" | "s3Path">, never>>(object: I): ImportDatabaseBackupRequest;
};
export declare const ImportDatabaseBackupMetadata: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupMetadata";
    encode(message: ImportDatabaseBackupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ImportDatabaseBackupMetadata;
    fromJSON(object: any): ImportDatabaseBackupMetadata;
    toJSON(message: ImportDatabaseBackupMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        s3Bucket?: string | undefined;
        s3Path?: string | undefined;
    } & {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        s3Bucket?: string | undefined;
        s3Path?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "databaseName" | "s3Bucket" | "s3Path">, never>>(object: I): ImportDatabaseBackupMetadata;
};
export declare const ExportDatabaseBackupRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupRequest";
    encode(message: ExportDatabaseBackupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExportDatabaseBackupRequest;
    fromJSON(object: any): ExportDatabaseBackupRequest;
    toJSON(message: ExportDatabaseBackupRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        prefix?: string | undefined;
        s3Bucket?: string | undefined;
        s3Path?: string | undefined;
    } & {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        prefix?: string | undefined;
        s3Bucket?: string | undefined;
        s3Path?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "databaseName" | "prefix" | "s3Bucket" | "s3Path">, never>>(object: I): ExportDatabaseBackupRequest;
};
export declare const ExportDatabaseBackupMetadata: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupMetadata";
    encode(message: ExportDatabaseBackupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExportDatabaseBackupMetadata;
    fromJSON(object: any): ExportDatabaseBackupMetadata;
    toJSON(message: ExportDatabaseBackupMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        s3Bucket?: string | undefined;
        s3Path?: string | undefined;
    } & {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        s3Bucket?: string | undefined;
        s3Path?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "databaseName" | "s3Bucket" | "s3Path">, never>>(object: I): ExportDatabaseBackupMetadata;
};
/** A set of methods for managing SQL Server databases. */
export declare const DatabaseServiceService: {
    /**
     * Returns the specified SQL Server database.
     *
     * To get the list of available SQL Server databases, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDatabaseRequest;
        readonly responseSerialize: (value: Database) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Database;
    };
    /** Retrieves the list of SQL Server databases in the specified cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDatabasesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDatabasesRequest;
        readonly responseSerialize: (value: ListDatabasesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDatabasesResponse;
    };
    /** Creates a new SQL Server database in the specified cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a new SQL Server database in the specified cluster from a backup. */
    readonly restore: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Imports a new SQL Server database from an external backup. */
    readonly importBackup: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/ImportBackup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ImportDatabaseBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ImportDatabaseBackupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Exports the last database backup to an external backup. */
    readonly exportBackup: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/ExportBackup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ExportDatabaseBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ExportDatabaseBackupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified SQL Server database. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface DatabaseServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified SQL Server database.
     *
     * To get the list of available SQL Server databases, make a [List] request.
     */
    get: handleUnaryCall<GetDatabaseRequest, Database>;
    /** Retrieves the list of SQL Server databases in the specified cluster. */
    list: handleUnaryCall<ListDatabasesRequest, ListDatabasesResponse>;
    /** Creates a new SQL Server database in the specified cluster. */
    create: handleUnaryCall<CreateDatabaseRequest, Operation>;
    /** Creates a new SQL Server database in the specified cluster from a backup. */
    restore: handleUnaryCall<RestoreDatabaseRequest, Operation>;
    /** Imports a new SQL Server database from an external backup. */
    importBackup: handleUnaryCall<ImportDatabaseBackupRequest, Operation>;
    /** Exports the last database backup to an external backup. */
    exportBackup: handleUnaryCall<ExportDatabaseBackupRequest, Operation>;
    /** Deletes the specified SQL Server database. */
    delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
}
export interface DatabaseServiceClient extends Client {
    /**
     * Returns the specified SQL Server database.
     *
     * To get the list of available SQL Server databases, make a [List] request.
     */
    get(request: GetDatabaseRequest, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    /** Retrieves the list of SQL Server databases in the specified cluster. */
    list(request: ListDatabasesRequest, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    /** Creates a new SQL Server database in the specified cluster. */
    create(request: CreateDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a new SQL Server database in the specified cluster from a backup. */
    restore(request: RestoreDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Imports a new SQL Server database from an external backup. */
    importBackup(request: ImportDatabaseBackupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    importBackup(request: ImportDatabaseBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    importBackup(request: ImportDatabaseBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Exports the last database backup to an external backup. */
    exportBackup(request: ExportDatabaseBackupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    exportBackup(request: ExportDatabaseBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    exportBackup(request: ExportDatabaseBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified SQL Server database. */
    delete(request: DeleteDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
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
