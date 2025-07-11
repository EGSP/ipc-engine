/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { ResourcePreset } from "../../../../../yandex/cloud/mdb/mysql/v1/resource_preset";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1";
export interface GetResourcePresetRequest {
    $type: "yandex.cloud.mdb.mysql.v1.GetResourcePresetRequest";
    /**
     * ID of the resource preset to return information about.
     *
     * To get this ID, make a [ResourcePresetService.List] request.
     */
    resourcePresetId: string;
}
export interface ListResourcePresetsRequest {
    $type: "yandex.cloud.mdb.mysql.v1.ListResourcePresetsRequest";
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListResourcePresetsResponse.next_page_token] that can be used to get the next page of results in the subsequent [ResourcePresetService.List] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListResourcePresetsResponse.next_page_token] returned by the previous [ResourcePresetService.List] request.
     */
    pageToken: string;
}
export interface ListResourcePresetsResponse {
    $type: "yandex.cloud.mdb.mysql.v1.ListResourcePresetsResponse";
    /** List of resource presets. */
    resourcePresets: ResourcePreset[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListResourcePresetsRequest.page_size], use the [next_page_token] as the value for the [ListResourcePresetsRequest.page_token] in the subsequent [ResourcePresetService.List] request to iterate through multiple pages of results.
     *
     * Each of the subsequent [ResourcePresetService.List] requests should use the [next_page_token] value returned by the previous request to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetResourcePresetRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.GetResourcePresetRequest";
    encode(message: GetResourcePresetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetResourcePresetRequest;
    fromJSON(object: any): GetResourcePresetRequest;
    toJSON(message: GetResourcePresetRequest): unknown;
    fromPartial<I extends {
        resourcePresetId?: string | undefined;
    } & {
        resourcePresetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourcePresetId">, never>>(object: I): GetResourcePresetRequest;
};
export declare const ListResourcePresetsRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.ListResourcePresetsRequest";
    encode(message: ListResourcePresetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcePresetsRequest;
    fromJSON(object: any): ListResourcePresetsRequest;
    toJSON(message: ListResourcePresetsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken">, never>>(object: I): ListResourcePresetsRequest;
};
export declare const ListResourcePresetsResponse: {
    $type: "yandex.cloud.mdb.mysql.v1.ListResourcePresetsResponse";
    encode(message: ListResourcePresetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcePresetsResponse;
    fromJSON(object: any): ListResourcePresetsResponse;
    toJSON(message: ListResourcePresetsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        resourcePresets?: {
            id?: string | undefined;
            zoneIds?: string[] | undefined;
            memory?: number | undefined;
            cores?: number | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        resourcePresets?: ({
            id?: string | undefined;
            zoneIds?: string[] | undefined;
            memory?: number | undefined;
            cores?: number | undefined;
        }[] & ({
            id?: string | undefined;
            zoneIds?: string[] | undefined;
            memory?: number | undefined;
            cores?: number | undefined;
        } & {
            id?: string | undefined;
            zoneIds?: (string[] & string[] & Record<Exclude<keyof I["resourcePresets"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
            memory?: number | undefined;
            cores?: number | undefined;
        } & Record<Exclude<keyof I["resourcePresets"][number], "$type" | "id" | "zoneIds" | "memory" | "cores">, never>)[] & Record<Exclude<keyof I["resourcePresets"], "$type" | keyof {
            id?: string | undefined;
            zoneIds?: string[] | undefined;
            memory?: number | undefined;
            cores?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "resourcePresets">, never>>(object: I): ListResourcePresetsResponse;
};
/**
 * A set of methods for managing MySQL resource presets.
 *
 * See [the documentation](/docs/managed-mysql/concepts/instance-types) for details.
 */
export declare const ResourcePresetServiceService: {
    /** Retrieves information about a resource preset. */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ResourcePresetService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetResourcePresetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetResourcePresetRequest;
        readonly responseSerialize: (value: ResourcePreset) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ResourcePreset;
    };
    /** Retrieves the list of available resource presets. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ResourcePresetService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListResourcePresetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListResourcePresetsRequest;
        readonly responseSerialize: (value: ListResourcePresetsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListResourcePresetsResponse;
    };
};
export interface ResourcePresetServiceServer extends UntypedServiceImplementation {
    /** Retrieves information about a resource preset. */
    get: handleUnaryCall<GetResourcePresetRequest, ResourcePreset>;
    /** Retrieves the list of available resource presets. */
    list: handleUnaryCall<ListResourcePresetsRequest, ListResourcePresetsResponse>;
}
export interface ResourcePresetServiceClient extends Client {
    /** Retrieves information about a resource preset. */
    get(request: GetResourcePresetRequest, callback: (error: ServiceError | null, response: ResourcePreset) => void): ClientUnaryCall;
    get(request: GetResourcePresetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ResourcePreset) => void): ClientUnaryCall;
    get(request: GetResourcePresetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ResourcePreset) => void): ClientUnaryCall;
    /** Retrieves the list of available resource presets. */
    list(request: ListResourcePresetsRequest, callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void): ClientUnaryCall;
    list(request: ListResourcePresetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void): ClientUnaryCall;
    list(request: ListResourcePresetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void): ClientUnaryCall;
}
export declare const ResourcePresetServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ResourcePresetServiceClient;
    service: typeof ResourcePresetServiceService;
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
