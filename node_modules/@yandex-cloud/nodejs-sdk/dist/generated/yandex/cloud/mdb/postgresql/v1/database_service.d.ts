/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { DatabaseSpec, Database, Extension } from "../../../../../yandex/cloud/mdb/postgresql/v1/database";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1";
export interface GetDatabaseRequest {
    $type: "yandex.cloud.mdb.postgresql.v1.GetDatabaseRequest";
    /**
     * ID of the PostgreSQL cluster that the database belongs to.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the PostgreSQL Database resource to return.
     * To get the name of the database use a [DatabaseService.List] request.
     */
    databaseName: string;
}
export interface ListDatabasesRequest {
    $type: "yandex.cloud.mdb.postgresql.v1.ListDatabasesRequest";
    /**
     * ID of the PostgreSQL cluster to list databases in.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListDatabasesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, Set [page_token] to the [ListDatabasesResponse.next_page_token]
     * returned by the previous list request.
     */
    pageToken: string;
}
export interface ListDatabasesResponse {
    $type: "yandex.cloud.mdb.postgresql.v1.ListDatabasesResponse";
    /** List of PostgreSQL Database resources. */
    databases: Database[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDatabasesRequest.page_size], use the [next_page_token] as the value
     * for the [ListDatabasesRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateDatabaseRequest {
    $type: "yandex.cloud.mdb.postgresql.v1.CreateDatabaseRequest";
    /**
     * ID of the PostgreSQL cluster to create a database in.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the database to create. */
    databaseSpec?: DatabaseSpec;
}
export interface CreateDatabaseMetadata {
    $type: "yandex.cloud.mdb.postgresql.v1.CreateDatabaseMetadata";
    /** ID of the PostgreSQL cluster where a database is being created. */
    clusterId: string;
    /** Name of the PostgreSQL database that is being created. */
    databaseName: string;
}
export interface UpdateDatabaseRequest {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateDatabaseRequest";
    /**
     * ID of the PostgreSQL cluster to update a database in.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the database to update.
     * To get the name of the database use a [DatabaseService.List] request.
     */
    databaseName: string;
    /** Optional. New name of the database. */
    newDatabaseName: string;
    /** Field mask that specifies which fields of the Database resource should be updated. */
    updateMask?: FieldMask;
    /**
     * PostgreSQL extensions that should be enabled for the database.
     *
     * If the field is sent, the list of enabled extensions is rewritten entirely.
     * Therefore, to disable an active extension you should simply send the list omitting this extension.
     */
    extensions: Extension[];
    /**
     * Deletion Protection inhibits deletion of the database
     *
     * Default value: `unspecified` (inherits cluster's deletion_protection)
     */
    deletionProtection?: boolean;
}
export interface UpdateDatabaseMetadata {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateDatabaseMetadata";
    /** ID of the PostgreSQL cluster where a database is being updated. */
    clusterId: string;
    /** Name of the PostgreSQL database that is being updated. */
    databaseName: string;
}
export interface DeleteDatabaseRequest {
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteDatabaseRequest";
    /**
     * ID of the PostgreSQL cluster to delete a database in.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the database to delete.
     * To get the name of the database, use a [DatabaseService.List] request.
     */
    databaseName: string;
}
export interface DeleteDatabaseMetadata {
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteDatabaseMetadata";
    /** ID of the PostgreSQL cluster where a database is being deleted. */
    clusterId: string;
    /** Name of the PostgreSQL database that is being deleted. */
    databaseName: string;
}
export declare const GetDatabaseRequest: {
    $type: "yandex.cloud.mdb.postgresql.v1.GetDatabaseRequest";
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
    $type: "yandex.cloud.mdb.postgresql.v1.ListDatabasesRequest";
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
    $type: "yandex.cloud.mdb.postgresql.v1.ListDatabasesResponse";
    encode(message: ListDatabasesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDatabasesResponse;
    fromJSON(object: any): ListDatabasesResponse;
    toJSON(message: ListDatabasesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        databases?: {
            name?: string | undefined;
            deletionProtection?: boolean | undefined;
            clusterId?: string | undefined;
            extensions?: {
                name?: string | undefined;
                version?: string | undefined;
            }[] | undefined;
            owner?: string | undefined;
            lcCollate?: string | undefined;
            lcCtype?: string | undefined;
            templateDb?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        databases?: ({
            name?: string | undefined;
            deletionProtection?: boolean | undefined;
            clusterId?: string | undefined;
            extensions?: {
                name?: string | undefined;
                version?: string | undefined;
            }[] | undefined;
            owner?: string | undefined;
            lcCollate?: string | undefined;
            lcCtype?: string | undefined;
            templateDb?: string | undefined;
        }[] & ({
            name?: string | undefined;
            deletionProtection?: boolean | undefined;
            clusterId?: string | undefined;
            extensions?: {
                name?: string | undefined;
                version?: string | undefined;
            }[] | undefined;
            owner?: string | undefined;
            lcCollate?: string | undefined;
            lcCtype?: string | undefined;
            templateDb?: string | undefined;
        } & {
            name?: string | undefined;
            deletionProtection?: boolean | undefined;
            clusterId?: string | undefined;
            extensions?: ({
                name?: string | undefined;
                version?: string | undefined;
            }[] & ({
                name?: string | undefined;
                version?: string | undefined;
            } & {
                name?: string | undefined;
                version?: string | undefined;
            } & Record<Exclude<keyof I["databases"][number]["extensions"][number], "$type" | "name" | "version">, never>)[] & Record<Exclude<keyof I["databases"][number]["extensions"], "$type" | keyof {
                name?: string | undefined;
                version?: string | undefined;
            }[]>, never>) | undefined;
            owner?: string | undefined;
            lcCollate?: string | undefined;
            lcCtype?: string | undefined;
            templateDb?: string | undefined;
        } & Record<Exclude<keyof I["databases"][number], "$type" | "name" | "deletionProtection" | "clusterId" | "extensions" | "owner" | "lcCollate" | "lcCtype" | "templateDb">, never>)[] & Record<Exclude<keyof I["databases"], "$type" | keyof {
            name?: string | undefined;
            deletionProtection?: boolean | undefined;
            clusterId?: string | undefined;
            extensions?: {
                name?: string | undefined;
                version?: string | undefined;
            }[] | undefined;
            owner?: string | undefined;
            lcCollate?: string | undefined;
            lcCtype?: string | undefined;
            templateDb?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "databases">, never>>(object: I): ListDatabasesResponse;
};
export declare const CreateDatabaseRequest: {
    $type: "yandex.cloud.mdb.postgresql.v1.CreateDatabaseRequest";
    encode(message: CreateDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDatabaseRequest;
    fromJSON(object: any): CreateDatabaseRequest;
    toJSON(message: CreateDatabaseRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        databaseSpec?: {
            name?: string | undefined;
            deletionProtection?: boolean | undefined;
            extensions?: {
                name?: string | undefined;
                version?: string | undefined;
            }[] | undefined;
            owner?: string | undefined;
            lcCollate?: string | undefined;
            lcCtype?: string | undefined;
            templateDb?: string | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        databaseSpec?: ({
            name?: string | undefined;
            deletionProtection?: boolean | undefined;
            extensions?: {
                name?: string | undefined;
                version?: string | undefined;
            }[] | undefined;
            owner?: string | undefined;
            lcCollate?: string | undefined;
            lcCtype?: string | undefined;
            templateDb?: string | undefined;
        } & {
            name?: string | undefined;
            deletionProtection?: boolean | undefined;
            extensions?: ({
                name?: string | undefined;
                version?: string | undefined;
            }[] & ({
                name?: string | undefined;
                version?: string | undefined;
            } & {
                name?: string | undefined;
                version?: string | undefined;
            } & Record<Exclude<keyof I["databaseSpec"]["extensions"][number], "$type" | "name" | "version">, never>)[] & Record<Exclude<keyof I["databaseSpec"]["extensions"], "$type" | keyof {
                name?: string | undefined;
                version?: string | undefined;
            }[]>, never>) | undefined;
            owner?: string | undefined;
            lcCollate?: string | undefined;
            lcCtype?: string | undefined;
            templateDb?: string | undefined;
        } & Record<Exclude<keyof I["databaseSpec"], "$type" | "name" | "deletionProtection" | "extensions" | "owner" | "lcCollate" | "lcCtype" | "templateDb">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "databaseSpec">, never>>(object: I): CreateDatabaseRequest;
};
export declare const CreateDatabaseMetadata: {
    $type: "yandex.cloud.mdb.postgresql.v1.CreateDatabaseMetadata";
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
export declare const UpdateDatabaseRequest: {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateDatabaseRequest";
    encode(message: UpdateDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDatabaseRequest;
    fromJSON(object: any): UpdateDatabaseRequest;
    toJSON(message: UpdateDatabaseRequest): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        extensions?: {
            name?: string | undefined;
            version?: string | undefined;
        }[] | undefined;
        newDatabaseName?: string | undefined;
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        deletionProtection?: boolean | undefined;
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        extensions?: ({
            name?: string | undefined;
            version?: string | undefined;
        }[] & ({
            name?: string | undefined;
            version?: string | undefined;
        } & {
            name?: string | undefined;
            version?: string | undefined;
        } & Record<Exclude<keyof I["extensions"][number], "$type" | "name" | "version">, never>)[] & Record<Exclude<keyof I["extensions"], "$type" | keyof {
            name?: string | undefined;
            version?: string | undefined;
        }[]>, never>) | undefined;
        newDatabaseName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "deletionProtection" | "clusterId" | "databaseName" | "extensions" | "newDatabaseName">, never>>(object: I): UpdateDatabaseRequest;
};
export declare const UpdateDatabaseMetadata: {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateDatabaseMetadata";
    encode(message: UpdateDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDatabaseMetadata;
    fromJSON(object: any): UpdateDatabaseMetadata;
    toJSON(message: UpdateDatabaseMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "databaseName">, never>>(object: I): UpdateDatabaseMetadata;
};
export declare const DeleteDatabaseRequest: {
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteDatabaseRequest";
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
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteDatabaseMetadata";
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
/** A set of methods for managing PostgreSQL Database resources. */
export declare const DatabaseServiceService: {
    /**
     * Returns the specified PostgreSQL Database resource.
     *
     * To get the list of available PostgreSQL Database resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.postgresql.v1.DatabaseService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDatabaseRequest;
        readonly responseSerialize: (value: Database) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Database;
    };
    /** Retrieves the list of PostgreSQL Database resources in the specified cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.postgresql.v1.DatabaseService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDatabasesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDatabasesRequest;
        readonly responseSerialize: (value: ListDatabasesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDatabasesResponse;
    };
    /** Creates a new PostgreSQL database in the specified cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.postgresql.v1.DatabaseService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified PostgreSQL database. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.postgresql.v1.DatabaseService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified PostgreSQL database. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.postgresql.v1.DatabaseService/Delete";
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
     * Returns the specified PostgreSQL Database resource.
     *
     * To get the list of available PostgreSQL Database resources, make a [List] request.
     */
    get: handleUnaryCall<GetDatabaseRequest, Database>;
    /** Retrieves the list of PostgreSQL Database resources in the specified cluster. */
    list: handleUnaryCall<ListDatabasesRequest, ListDatabasesResponse>;
    /** Creates a new PostgreSQL database in the specified cluster. */
    create: handleUnaryCall<CreateDatabaseRequest, Operation>;
    /** Updates the specified PostgreSQL database. */
    update: handleUnaryCall<UpdateDatabaseRequest, Operation>;
    /** Deletes the specified PostgreSQL database. */
    delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
}
export interface DatabaseServiceClient extends Client {
    /**
     * Returns the specified PostgreSQL Database resource.
     *
     * To get the list of available PostgreSQL Database resources, make a [List] request.
     */
    get(request: GetDatabaseRequest, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    /** Retrieves the list of PostgreSQL Database resources in the specified cluster. */
    list(request: ListDatabasesRequest, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    /** Creates a new PostgreSQL database in the specified cluster. */
    create(request: CreateDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified PostgreSQL database. */
    update(request: UpdateDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified PostgreSQL database. */
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
