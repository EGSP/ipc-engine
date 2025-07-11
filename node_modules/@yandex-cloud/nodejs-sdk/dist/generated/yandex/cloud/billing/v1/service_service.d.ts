/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Service } from "../../../../yandex/cloud/billing/v1/service";
export declare const protobufPackage = "yandex.cloud.billing.v1";
export interface GetServiceRequest {
    $type: "yandex.cloud.billing.v1.GetServiceRequest";
    /**
     * ID of the service to return.
     * To get the service ID, use [ServiceService.List] request.
     */
    id: string;
}
export interface ListServicesRequest {
    $type: "yandex.cloud.billing.v1.ListServicesRequest";
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [yandex.cloud.billing.v1.Service.id] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListServicesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListServicesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListServicesResponse {
    $type: "yandex.cloud.billing.v1.ListServicesResponse";
    /** List of services. */
    services: Service[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListServicesRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListServicesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetServiceRequest: {
    $type: "yandex.cloud.billing.v1.GetServiceRequest";
    encode(message: GetServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetServiceRequest;
    fromJSON(object: any): GetServiceRequest;
    toJSON(message: GetServiceRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id">, never>>(object: I): GetServiceRequest;
};
export declare const ListServicesRequest: {
    $type: "yandex.cloud.billing.v1.ListServicesRequest";
    encode(message: ListServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListServicesRequest;
    fromJSON(object: any): ListServicesRequest;
    toJSON(message: ListServicesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter">, never>>(object: I): ListServicesRequest;
};
export declare const ListServicesResponse: {
    $type: "yandex.cloud.billing.v1.ListServicesResponse";
    encode(message: ListServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListServicesResponse;
    fromJSON(object: any): ListServicesResponse;
    toJSON(message: ListServicesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        services?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        services?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
        } & Record<Exclude<keyof I["services"][number], "$type" | "description" | "id" | "name">, never>)[] & Record<Exclude<keyof I["services"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "services">, never>>(object: I): ListServicesResponse;
};
/** A set of methods for managing Service resources. */
export declare const ServiceServiceService: {
    /** Returns the specified service. */
    readonly get: {
        readonly path: "/yandex.cloud.billing.v1.ServiceService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetServiceRequest;
        readonly responseSerialize: (value: Service) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Service;
    };
    /** Retrieves the list of services. */
    readonly list: {
        readonly path: "/yandex.cloud.billing.v1.ServiceService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListServicesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListServicesRequest;
        readonly responseSerialize: (value: ListServicesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListServicesResponse;
    };
};
export interface ServiceServiceServer extends UntypedServiceImplementation {
    /** Returns the specified service. */
    get: handleUnaryCall<GetServiceRequest, Service>;
    /** Retrieves the list of services. */
    list: handleUnaryCall<ListServicesRequest, ListServicesResponse>;
}
export interface ServiceServiceClient extends Client {
    /** Returns the specified service. */
    get(request: GetServiceRequest, callback: (error: ServiceError | null, response: Service) => void): ClientUnaryCall;
    get(request: GetServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Service) => void): ClientUnaryCall;
    get(request: GetServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Service) => void): ClientUnaryCall;
    /** Retrieves the list of services. */
    list(request: ListServicesRequest, callback: (error: ServiceError | null, response: ListServicesResponse) => void): ClientUnaryCall;
    list(request: ListServicesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListServicesResponse) => void): ClientUnaryCall;
    list(request: ListServicesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListServicesResponse) => void): ClientUnaryCall;
}
export declare const ServiceServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ServiceServiceClient;
    service: typeof ServiceServiceService;
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
