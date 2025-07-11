/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { ApiEndpoint } from "../../../yandex/cloud/endpoint/api_endpoint";
export declare const protobufPackage = "yandex.cloud.endpoint";
export interface GetApiEndpointRequest {
    $type: "yandex.cloud.endpoint.GetApiEndpointRequest";
    apiEndpointId: string;
}
export interface ListApiEndpointsRequest {
    $type: "yandex.cloud.endpoint.ListApiEndpointsRequest";
    pageSize: number;
    pageToken: string;
}
export interface ListApiEndpointsResponse {
    $type: "yandex.cloud.endpoint.ListApiEndpointsResponse";
    endpoints: ApiEndpoint[];
    nextPageToken: string;
}
export declare const GetApiEndpointRequest: {
    $type: "yandex.cloud.endpoint.GetApiEndpointRequest";
    encode(message: GetApiEndpointRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetApiEndpointRequest;
    fromJSON(object: any): GetApiEndpointRequest;
    toJSON(message: GetApiEndpointRequest): unknown;
    fromPartial<I extends {
        apiEndpointId?: string | undefined;
    } & {
        apiEndpointId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "apiEndpointId">, never>>(object: I): GetApiEndpointRequest;
};
export declare const ListApiEndpointsRequest: {
    $type: "yandex.cloud.endpoint.ListApiEndpointsRequest";
    encode(message: ListApiEndpointsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListApiEndpointsRequest;
    fromJSON(object: any): ListApiEndpointsRequest;
    toJSON(message: ListApiEndpointsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken">, never>>(object: I): ListApiEndpointsRequest;
};
export declare const ListApiEndpointsResponse: {
    $type: "yandex.cloud.endpoint.ListApiEndpointsResponse";
    encode(message: ListApiEndpointsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListApiEndpointsResponse;
    fromJSON(object: any): ListApiEndpointsResponse;
    toJSON(message: ListApiEndpointsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        endpoints?: {
            id?: string | undefined;
            address?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        endpoints?: ({
            id?: string | undefined;
            address?: string | undefined;
        }[] & ({
            id?: string | undefined;
            address?: string | undefined;
        } & {
            id?: string | undefined;
            address?: string | undefined;
        } & Record<Exclude<keyof I["endpoints"][number], "$type" | "id" | "address">, never>)[] & Record<Exclude<keyof I["endpoints"], "$type" | keyof {
            id?: string | undefined;
            address?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "endpoints">, never>>(object: I): ListApiEndpointsResponse;
};
export declare const ApiEndpointServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.endpoint.ApiEndpointService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetApiEndpointRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetApiEndpointRequest;
        readonly responseSerialize: (value: ApiEndpoint) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ApiEndpoint;
    };
    readonly list: {
        readonly path: "/yandex.cloud.endpoint.ApiEndpointService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListApiEndpointsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListApiEndpointsRequest;
        readonly responseSerialize: (value: ListApiEndpointsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListApiEndpointsResponse;
    };
};
export interface ApiEndpointServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetApiEndpointRequest, ApiEndpoint>;
    list: handleUnaryCall<ListApiEndpointsRequest, ListApiEndpointsResponse>;
}
export interface ApiEndpointServiceClient extends Client {
    get(request: GetApiEndpointRequest, callback: (error: ServiceError | null, response: ApiEndpoint) => void): ClientUnaryCall;
    get(request: GetApiEndpointRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ApiEndpoint) => void): ClientUnaryCall;
    get(request: GetApiEndpointRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ApiEndpoint) => void): ClientUnaryCall;
    list(request: ListApiEndpointsRequest, callback: (error: ServiceError | null, response: ListApiEndpointsResponse) => void): ClientUnaryCall;
    list(request: ListApiEndpointsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListApiEndpointsResponse) => void): ClientUnaryCall;
    list(request: ListApiEndpointsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListApiEndpointsResponse) => void): ClientUnaryCall;
}
export declare const ApiEndpointServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ApiEndpointServiceClient;
    service: typeof ApiEndpointServiceService;
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
