/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Zone } from "../../../../yandex/cloud/compute/v1/zone";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface ListZonesRequest {
    $type: "yandex.cloud.compute.v1.ListZonesRequest";
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListZonesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListZonesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListZonesResponse {
    $type: "yandex.cloud.compute.v1.ListZonesResponse";
    /** List of availability zones. */
    zones: Zone[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListZonesRequest.page_size], use
     * the [ListZonesRequest.page_token] as the value
     * for the [ListZonesRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [ListZonesRequest.page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface GetZoneRequest {
    $type: "yandex.cloud.compute.v1.GetZoneRequest";
    /** ID of the availability zone to return information about. */
    zoneId: string;
}
export declare const ListZonesRequest: {
    $type: "yandex.cloud.compute.v1.ListZonesRequest";
    encode(message: ListZonesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListZonesRequest;
    fromJSON(object: any): ListZonesRequest;
    toJSON(message: ListZonesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken">, never>>(object: I): ListZonesRequest;
};
export declare const ListZonesResponse: {
    $type: "yandex.cloud.compute.v1.ListZonesResponse";
    encode(message: ListZonesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListZonesResponse;
    fromJSON(object: any): ListZonesResponse;
    toJSON(message: ListZonesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        zones?: {
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/zone").Zone_Status | undefined;
            regionId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        zones?: ({
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/zone").Zone_Status | undefined;
            regionId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/zone").Zone_Status | undefined;
            regionId?: string | undefined;
        } & {
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/zone").Zone_Status | undefined;
            regionId?: string | undefined;
        } & Record<Exclude<keyof I["zones"][number], "$type" | "id" | "status" | "regionId">, never>)[] & Record<Exclude<keyof I["zones"], "$type" | keyof {
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/zone").Zone_Status | undefined;
            regionId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "zones">, never>>(object: I): ListZonesResponse;
};
export declare const GetZoneRequest: {
    $type: "yandex.cloud.compute.v1.GetZoneRequest";
    encode(message: GetZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetZoneRequest;
    fromJSON(object: any): GetZoneRequest;
    toJSON(message: GetZoneRequest): unknown;
    fromPartial<I extends {
        zoneId?: string | undefined;
    } & {
        zoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "zoneId">, never>>(object: I): GetZoneRequest;
};
/** A set of methods to retrieve information about availability zones. */
export declare const ZoneServiceService: {
    /**
     * Returns the information about the specified availability zone.
     *
     * To get the list of availability zones, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.ZoneService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetZoneRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetZoneRequest;
        readonly responseSerialize: (value: Zone) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Zone;
    };
    /** Retrieves the list of availability zones. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.ZoneService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListZonesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListZonesRequest;
        readonly responseSerialize: (value: ListZonesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListZonesResponse;
    };
};
export interface ZoneServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the information about the specified availability zone.
     *
     * To get the list of availability zones, make a [List] request.
     */
    get: handleUnaryCall<GetZoneRequest, Zone>;
    /** Retrieves the list of availability zones. */
    list: handleUnaryCall<ListZonesRequest, ListZonesResponse>;
}
export interface ZoneServiceClient extends Client {
    /**
     * Returns the information about the specified availability zone.
     *
     * To get the list of availability zones, make a [List] request.
     */
    get(request: GetZoneRequest, callback: (error: ServiceError | null, response: Zone) => void): ClientUnaryCall;
    get(request: GetZoneRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Zone) => void): ClientUnaryCall;
    get(request: GetZoneRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Zone) => void): ClientUnaryCall;
    /** Retrieves the list of availability zones. */
    list(request: ListZonesRequest, callback: (error: ServiceError | null, response: ListZonesResponse) => void): ClientUnaryCall;
    list(request: ListZonesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListZonesResponse) => void): ClientUnaryCall;
    list(request: ListZonesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListZonesResponse) => void): ClientUnaryCall;
}
export declare const ZoneServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ZoneServiceClient;
    service: typeof ZoneServiceService;
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
