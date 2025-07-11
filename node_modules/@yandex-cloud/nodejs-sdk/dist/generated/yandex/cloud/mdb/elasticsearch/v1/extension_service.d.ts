/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Extension } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/extension";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
export interface GetExtensionRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetExtensionRequest";
    /** ID of the cluster. */
    clusterId: string;
    /** ID of the extension to return. */
    extensionId: string;
}
export interface ListExtensionsRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsRequest";
    /** ID of the cluster to list extensions in. */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListExtensionsResponse.next_page_token] that can be used to get the next page of results in subsequent [ExtensionService.List] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListExtensionsResponse.next_page_token] returned by the previous [ExtensionService.List] request.
     */
    pageToken: string;
}
export interface ListExtensionsResponse {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsResponse";
    /** Requested list of extensions. */
    extensions: Extension[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListExtensionsRequest.page_size], use the [next_page_token] as the value for the [ListExtensionsRequest.page_token] in the subsequent [ExtensionService.List] request to iterate through multiple pages of results.
     *
     * Each of the subsequent [ExtensionService.List] requests should use the [next_page_token] value returned in the previous request to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteExtensionRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionRequest";
    /** ID of the cluster. */
    clusterId: string;
    /** ID of the extension to delete. */
    extensionId: string;
}
export interface DeleteExtensionMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionMetadata";
    /** ID of the cluster. */
    clusterId: string;
    /** ID of the extension to delete. */
    extensionId: string;
}
export interface UpdateExtensionRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionRequest";
    /** ID of the cluster. */
    clusterId: string;
    /** ID of the extension to update. */
    extensionId: string;
    /** The flag shows whether to make the extension active. */
    active: boolean;
}
export interface UpdateExtensionMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionMetadata";
    /** ID of the cluster. */
    clusterId: string;
    /** ID of the extension. */
    extensionId: string;
}
export interface CreateExtensionRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionRequest";
    /** ID of the cluster. */
    clusterId: string;
    /** Name of the extension. */
    name: string;
    /** URI of the zip archive to create the new extension from. Currently only supports links that are stored in Object Storage. */
    uri: string;
    /** The flag that disables the extension. */
    disabled: boolean;
}
export interface CreateExtensionMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionMetadata";
    /** ID of the cluster. */
    clusterId: string;
    /** ID of the extension. */
    extensionId: string;
}
export declare const GetExtensionRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetExtensionRequest";
    encode(message: GetExtensionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetExtensionRequest;
    fromJSON(object: any): GetExtensionRequest;
    toJSON(message: GetExtensionRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "extensionId">, never>>(object: I): GetExtensionRequest;
};
export declare const ListExtensionsRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsRequest";
    encode(message: ListExtensionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListExtensionsRequest;
    fromJSON(object: any): ListExtensionsRequest;
    toJSON(message: ListExtensionsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListExtensionsRequest;
};
export declare const ListExtensionsResponse: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsResponse";
    encode(message: ListExtensionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListExtensionsResponse;
    fromJSON(object: any): ListExtensionsResponse;
    toJSON(message: ListExtensionsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        extensions?: {
            id?: string | undefined;
            name?: string | undefined;
            active?: boolean | undefined;
            version?: number | undefined;
            clusterId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        extensions?: ({
            id?: string | undefined;
            name?: string | undefined;
            active?: boolean | undefined;
            version?: number | undefined;
            clusterId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            active?: boolean | undefined;
            version?: number | undefined;
            clusterId?: string | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            active?: boolean | undefined;
            version?: number | undefined;
            clusterId?: string | undefined;
        } & Record<Exclude<keyof I["extensions"][number], "$type" | "id" | "name" | "active" | "version" | "clusterId">, never>)[] & Record<Exclude<keyof I["extensions"], "$type" | keyof {
            id?: string | undefined;
            name?: string | undefined;
            active?: boolean | undefined;
            version?: number | undefined;
            clusterId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "extensions">, never>>(object: I): ListExtensionsResponse;
};
export declare const DeleteExtensionRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionRequest";
    encode(message: DeleteExtensionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteExtensionRequest;
    fromJSON(object: any): DeleteExtensionRequest;
    toJSON(message: DeleteExtensionRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "extensionId">, never>>(object: I): DeleteExtensionRequest;
};
export declare const DeleteExtensionMetadata: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionMetadata";
    encode(message: DeleteExtensionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteExtensionMetadata;
    fromJSON(object: any): DeleteExtensionMetadata;
    toJSON(message: DeleteExtensionMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "extensionId">, never>>(object: I): DeleteExtensionMetadata;
};
export declare const UpdateExtensionRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionRequest";
    encode(message: UpdateExtensionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateExtensionRequest;
    fromJSON(object: any): UpdateExtensionRequest;
    toJSON(message: UpdateExtensionRequest): unknown;
    fromPartial<I extends {
        active?: boolean | undefined;
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & {
        active?: boolean | undefined;
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "active" | "clusterId" | "extensionId">, never>>(object: I): UpdateExtensionRequest;
};
export declare const UpdateExtensionMetadata: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionMetadata";
    encode(message: UpdateExtensionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateExtensionMetadata;
    fromJSON(object: any): UpdateExtensionMetadata;
    toJSON(message: UpdateExtensionMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "extensionId">, never>>(object: I): UpdateExtensionMetadata;
};
export declare const CreateExtensionRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionRequest";
    encode(message: CreateExtensionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateExtensionRequest;
    fromJSON(object: any): CreateExtensionRequest;
    toJSON(message: CreateExtensionRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        uri?: string | undefined;
        disabled?: boolean | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        uri?: string | undefined;
        disabled?: boolean | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "uri" | "disabled" | "clusterId">, never>>(object: I): CreateExtensionRequest;
};
export declare const CreateExtensionMetadata: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionMetadata";
    encode(message: CreateExtensionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateExtensionMetadata;
    fromJSON(object: any): CreateExtensionMetadata;
    toJSON(message: CreateExtensionMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        extensionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "extensionId">, never>>(object: I): CreateExtensionMetadata;
};
export declare const ExtensionServiceService: {
    /** Returns the specified extension of Elasticsearch cluster. */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetExtensionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetExtensionRequest;
        readonly responseSerialize: (value: Extension) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Extension;
    };
    /** Returns the list of available extensions for the specified Elasticsearch cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListExtensionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListExtensionsRequest;
        readonly responseSerialize: (value: ListExtensionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListExtensionsResponse;
    };
    /** Creates new extension version. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateExtensionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateExtensionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified extension. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateExtensionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateExtensionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified extension. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteExtensionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteExtensionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ExtensionServiceServer extends UntypedServiceImplementation {
    /** Returns the specified extension of Elasticsearch cluster. */
    get: handleUnaryCall<GetExtensionRequest, Extension>;
    /** Returns the list of available extensions for the specified Elasticsearch cluster. */
    list: handleUnaryCall<ListExtensionsRequest, ListExtensionsResponse>;
    /** Creates new extension version. */
    create: handleUnaryCall<CreateExtensionRequest, Operation>;
    /** Updates the specified extension. */
    update: handleUnaryCall<UpdateExtensionRequest, Operation>;
    /** Deletes the specified extension. */
    delete: handleUnaryCall<DeleteExtensionRequest, Operation>;
}
export interface ExtensionServiceClient extends Client {
    /** Returns the specified extension of Elasticsearch cluster. */
    get(request: GetExtensionRequest, callback: (error: ServiceError | null, response: Extension) => void): ClientUnaryCall;
    get(request: GetExtensionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Extension) => void): ClientUnaryCall;
    get(request: GetExtensionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Extension) => void): ClientUnaryCall;
    /** Returns the list of available extensions for the specified Elasticsearch cluster. */
    list(request: ListExtensionsRequest, callback: (error: ServiceError | null, response: ListExtensionsResponse) => void): ClientUnaryCall;
    list(request: ListExtensionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListExtensionsResponse) => void): ClientUnaryCall;
    list(request: ListExtensionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListExtensionsResponse) => void): ClientUnaryCall;
    /** Creates new extension version. */
    create(request: CreateExtensionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateExtensionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateExtensionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified extension. */
    update(request: UpdateExtensionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateExtensionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateExtensionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified extension. */
    delete(request: DeleteExtensionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteExtensionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteExtensionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ExtensionServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ExtensionServiceClient;
    service: typeof ExtensionServiceService;
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
