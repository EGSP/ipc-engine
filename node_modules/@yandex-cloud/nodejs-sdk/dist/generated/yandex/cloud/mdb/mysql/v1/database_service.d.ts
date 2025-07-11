/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { DatabaseSpec, Database } from "../../../../../yandex/cloud/mdb/mysql/v1/database";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1";
export interface GetDatabaseRequest {
    $type: "yandex.cloud.mdb.mysql.v1.GetDatabaseRequest";
    /**
     * ID of the cluster that the database belongs to.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the database to return information about.
     *
     * To get this name, make a [DatabaseService.List] request.
     */
    databaseName: string;
}
export interface ListDatabasesRequest {
    $type: "yandex.cloud.mdb.mysql.v1.ListDatabasesRequest";
    /**
     * ID of the cluster to list databases in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListDatabasesResponse.next_page_token] that can be used to get the next page of results in the subsequent [DatabaseService.List] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListDatabasesResponse.next_page_token] returned by the previous [DatabaseService.List] request.
     */
    pageToken: string;
}
export interface ListDatabasesResponse {
    $type: "yandex.cloud.mdb.mysql.v1.ListDatabasesResponse";
    /** List of databases. */
    databases: Database[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListDatabasesRequest.page_size], use the [next_page_token] as the value for the [ListDatabasesRequest.page_token] in the subsequent [DatabaseService.List] request to iterate through multiple pages of results.
     *
     * Each of the subsequent [DatabaseService.List] requests should use the [next_page_token] value returned by the previous request to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateDatabaseRequest {
    $type: "yandex.cloud.mdb.mysql.v1.CreateDatabaseRequest";
    /**
     * ID of the cluster to create the database in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the database. */
    databaseSpec?: DatabaseSpec;
}
export interface CreateDatabaseMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.CreateDatabaseMetadata";
    /** ID of the cluster the database is being created in. */
    clusterId: string;
    /** Name of the database that is being created. */
    databaseName: string;
}
export interface DeleteDatabaseRequest {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteDatabaseRequest";
    /**
     * ID of the cluster to delete the database from.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the database to delete.
     *
     * To get this name, make a [DatabaseService.List] request.
     */
    databaseName: string;
}
export interface DeleteDatabaseMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteDatabaseMetadata";
    /** ID of the cluster the database is being deleted from. */
    clusterId: string;
    /** Name of the database that is being deleted. */
    databaseName: string;
}
export declare const GetDatabaseRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.GetDatabaseRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListDatabasesRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListDatabasesResponse";
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
    $type: "yandex.cloud.mdb.mysql.v1.CreateDatabaseRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.CreateDatabaseMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1.DeleteDatabaseRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.DeleteDatabaseMetadata";
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
/**
 * A set of methods for managing MySQL databases in a cluster.
 *
 * See [the documentation](/docs/managed-mysql/operations/databases) for details.
 */
export declare const DatabaseServiceService: {
    /** Retrieves information about the specified database. */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDatabaseRequest;
        readonly responseSerialize: (value: Database) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Database;
    };
    /** Retrieves the list of databases in a cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDatabasesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDatabasesRequest;
        readonly responseSerialize: (value: ListDatabasesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDatabasesResponse;
    };
    /** Creates a new database in a cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes a database from a cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface DatabaseServiceServer extends UntypedServiceImplementation {
    /** Retrieves information about the specified database. */
    get: handleUnaryCall<GetDatabaseRequest, Database>;
    /** Retrieves the list of databases in a cluster. */
    list: handleUnaryCall<ListDatabasesRequest, ListDatabasesResponse>;
    /** Creates a new database in a cluster. */
    create: handleUnaryCall<CreateDatabaseRequest, Operation>;
    /** Deletes a database from a cluster. */
    delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
}
export interface DatabaseServiceClient extends Client {
    /** Retrieves information about the specified database. */
    get(request: GetDatabaseRequest, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    /** Retrieves the list of databases in a cluster. */
    list(request: ListDatabasesRequest, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    /** Creates a new database in a cluster. */
    create(request: CreateDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes a database from a cluster. */
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
