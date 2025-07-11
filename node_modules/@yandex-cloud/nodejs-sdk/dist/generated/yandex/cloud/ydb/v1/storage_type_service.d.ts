/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { StorageType } from "../../../../yandex/cloud/ydb/v1/storage_type";
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface GetStorageTypeRequest {
    $type: "yandex.cloud.ydb.v1.GetStorageTypeRequest";
    /** Required. ID of the storage type to return. */
    storageTypeId: string;
}
export interface ListStorageTypesRequest {
    $type: "yandex.cloud.ydb.v1.ListStorageTypesRequest";
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListStorageTypes requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListStorageTypes
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListStorageTypesResponse {
    $type: "yandex.cloud.ydb.v1.ListStorageTypesResponse";
    /** Requested list of storage types. */
    storageTypes: StorageType[];
    /**
     * This token allows you to get the next page of results for ListStorageTypes requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListStorageTypes request. Subsequent ListStorageTypes
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetStorageTypeRequest: {
    $type: "yandex.cloud.ydb.v1.GetStorageTypeRequest";
    encode(message: GetStorageTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetStorageTypeRequest;
    fromJSON(object: any): GetStorageTypeRequest;
    toJSON(message: GetStorageTypeRequest): unknown;
    fromPartial<I extends {
        storageTypeId?: string | undefined;
    } & {
        storageTypeId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "storageTypeId">, never>>(object: I): GetStorageTypeRequest;
};
export declare const ListStorageTypesRequest: {
    $type: "yandex.cloud.ydb.v1.ListStorageTypesRequest";
    encode(message: ListStorageTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListStorageTypesRequest;
    fromJSON(object: any): ListStorageTypesRequest;
    toJSON(message: ListStorageTypesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken">, never>>(object: I): ListStorageTypesRequest;
};
export declare const ListStorageTypesResponse: {
    $type: "yandex.cloud.ydb.v1.ListStorageTypesResponse";
    encode(message: ListStorageTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListStorageTypesResponse;
    fromJSON(object: any): ListStorageTypesResponse;
    toJSON(message: ListStorageTypesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        storageTypes?: {
            id?: string | undefined;
            deviceType?: string | undefined;
            redundancyType?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        storageTypes?: ({
            id?: string | undefined;
            deviceType?: string | undefined;
            redundancyType?: string | undefined;
        }[] & ({
            id?: string | undefined;
            deviceType?: string | undefined;
            redundancyType?: string | undefined;
        } & {
            id?: string | undefined;
            deviceType?: string | undefined;
            redundancyType?: string | undefined;
        } & Record<Exclude<keyof I["storageTypes"][number], "$type" | "id" | "deviceType" | "redundancyType">, never>)[] & Record<Exclude<keyof I["storageTypes"], "$type" | keyof {
            id?: string | undefined;
            deviceType?: string | undefined;
            redundancyType?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "storageTypes">, never>>(object: I): ListStorageTypesResponse;
};
export declare const StorageTypeServiceService: {
    /** Returns the specified storage types. */
    readonly get: {
        readonly path: "/yandex.cloud.ydb.v1.StorageTypeService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetStorageTypeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetStorageTypeRequest;
        readonly responseSerialize: (value: StorageType) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StorageType;
    };
    /** Returns the list of available storage types. */
    readonly list: {
        readonly path: "/yandex.cloud.ydb.v1.StorageTypeService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListStorageTypesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListStorageTypesRequest;
        readonly responseSerialize: (value: ListStorageTypesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListStorageTypesResponse;
    };
};
export interface StorageTypeServiceServer extends UntypedServiceImplementation {
    /** Returns the specified storage types. */
    get: handleUnaryCall<GetStorageTypeRequest, StorageType>;
    /** Returns the list of available storage types. */
    list: handleUnaryCall<ListStorageTypesRequest, ListStorageTypesResponse>;
}
export interface StorageTypeServiceClient extends Client {
    /** Returns the specified storage types. */
    get(request: GetStorageTypeRequest, callback: (error: ServiceError | null, response: StorageType) => void): ClientUnaryCall;
    get(request: GetStorageTypeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StorageType) => void): ClientUnaryCall;
    get(request: GetStorageTypeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StorageType) => void): ClientUnaryCall;
    /** Returns the list of available storage types. */
    list(request: ListStorageTypesRequest, callback: (error: ServiceError | null, response: ListStorageTypesResponse) => void): ClientUnaryCall;
    list(request: ListStorageTypesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListStorageTypesResponse) => void): ClientUnaryCall;
    list(request: ListStorageTypesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListStorageTypesResponse) => void): ClientUnaryCall;
}
export declare const StorageTypeServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): StorageTypeServiceClient;
    service: typeof StorageTypeServiceService;
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
