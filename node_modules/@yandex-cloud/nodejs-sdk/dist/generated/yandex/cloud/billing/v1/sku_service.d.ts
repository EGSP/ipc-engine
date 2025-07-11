/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Sku } from "../../../../yandex/cloud/billing/v1/sku";
export declare const protobufPackage = "yandex.cloud.billing.v1";
export interface GetSkuRequest {
    $type: "yandex.cloud.billing.v1.GetSkuRequest";
    /**
     * ID of the SKU to return.
     * To get the SKU ID, use [SkuService.List] request.
     */
    id: string;
    /**
     * Currency of the SKU.
     * Can be one of the following:
     * * `RUB`
     * * `USD`
     * * `KZT`
     */
    currency: string;
    /**
     * Optional ID of the billing account.
     * If specified, contract prices for a particular billing account are included in the response.
     * To get the billing account ID, use [BillingAccountService.List] request.
     */
    billingAccountId: string;
}
export interface ListSkusRequest {
    $type: "yandex.cloud.billing.v1.ListSkusRequest";
    /**
     * Currency of the prices.
     * Can be one of the following:
     * * `RUB`
     * * `USD`
     * * `KZT`
     */
    currency: string;
    /**
     * Optional ID of the billing account.
     * If specified, contract prices for a particular billing account are included in the response.
     * To get the billing account ID, use [BillingAccountService.List] request.
     */
    billingAccountId: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [yandex.cloud.billing.v1.Sku.id] and [yandex.cloud.billing.v1.Sku.service_id] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListSkusResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListSkusResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSkusResponse {
    $type: "yandex.cloud.billing.v1.ListSkusResponse";
    /** List of skus. */
    skus: Sku[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSkusRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListSkusRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetSkuRequest: {
    $type: "yandex.cloud.billing.v1.GetSkuRequest";
    encode(message: GetSkuRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSkuRequest;
    fromJSON(object: any): GetSkuRequest;
    toJSON(message: GetSkuRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        currency?: string | undefined;
        billingAccountId?: string | undefined;
    } & {
        id?: string | undefined;
        currency?: string | undefined;
        billingAccountId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "currency" | "billingAccountId">, never>>(object: I): GetSkuRequest;
};
export declare const ListSkusRequest: {
    $type: "yandex.cloud.billing.v1.ListSkusRequest";
    encode(message: ListSkusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSkusRequest;
    fromJSON(object: any): ListSkusRequest;
    toJSON(message: ListSkusRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        currency?: string | undefined;
        billingAccountId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        currency?: string | undefined;
        billingAccountId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "currency" | "billingAccountId">, never>>(object: I): ListSkusRequest;
};
export declare const ListSkusResponse: {
    $type: "yandex.cloud.billing.v1.ListSkusResponse";
    encode(message: ListSkusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSkusResponse;
    fromJSON(object: any): ListSkusResponse;
    toJSON(message: ListSkusResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        skus?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            serviceId?: string | undefined;
            pricingUnit?: string | undefined;
            pricingVersions?: {
                type?: import("../../../../yandex/cloud/billing/v1/sku").PricingVersionType | undefined;
                effectiveTime?: Date | undefined;
                pricingExpressions?: {
                    rates?: {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        skus?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            serviceId?: string | undefined;
            pricingUnit?: string | undefined;
            pricingVersions?: {
                type?: import("../../../../yandex/cloud/billing/v1/sku").PricingVersionType | undefined;
                effectiveTime?: Date | undefined;
                pricingExpressions?: {
                    rates?: {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            serviceId?: string | undefined;
            pricingUnit?: string | undefined;
            pricingVersions?: {
                type?: import("../../../../yandex/cloud/billing/v1/sku").PricingVersionType | undefined;
                effectiveTime?: Date | undefined;
                pricingExpressions?: {
                    rates?: {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            serviceId?: string | undefined;
            pricingUnit?: string | undefined;
            pricingVersions?: ({
                type?: import("../../../../yandex/cloud/billing/v1/sku").PricingVersionType | undefined;
                effectiveTime?: Date | undefined;
                pricingExpressions?: {
                    rates?: {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                type?: import("../../../../yandex/cloud/billing/v1/sku").PricingVersionType | undefined;
                effectiveTime?: Date | undefined;
                pricingExpressions?: {
                    rates?: {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                type?: import("../../../../yandex/cloud/billing/v1/sku").PricingVersionType | undefined;
                effectiveTime?: Date | undefined;
                pricingExpressions?: ({
                    rates?: {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    rates?: {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[] | undefined;
                } & {
                    rates?: ({
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[] & ({
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    } & {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    } & Record<Exclude<keyof I["skus"][number]["pricingVersions"][number]["pricingExpressions"][number]["rates"][number], "$type" | "currency" | "startPricingQuantity" | "unitPrice">, never>)[] & Record<Exclude<keyof I["skus"][number]["pricingVersions"][number]["pricingExpressions"][number]["rates"], "$type" | keyof {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["skus"][number]["pricingVersions"][number]["pricingExpressions"][number], "$type" | "rates">, never>)[] & Record<Exclude<keyof I["skus"][number]["pricingVersions"][number]["pricingExpressions"], "$type" | keyof {
                    rates?: {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["skus"][number]["pricingVersions"][number], "$type" | "type" | "effectiveTime" | "pricingExpressions">, never>)[] & Record<Exclude<keyof I["skus"][number]["pricingVersions"], "$type" | keyof {
                type?: import("../../../../yandex/cloud/billing/v1/sku").PricingVersionType | undefined;
                effectiveTime?: Date | undefined;
                pricingExpressions?: {
                    rates?: {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["skus"][number], "$type" | "description" | "id" | "name" | "serviceId" | "pricingUnit" | "pricingVersions">, never>)[] & Record<Exclude<keyof I["skus"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            serviceId?: string | undefined;
            pricingUnit?: string | undefined;
            pricingVersions?: {
                type?: import("../../../../yandex/cloud/billing/v1/sku").PricingVersionType | undefined;
                effectiveTime?: Date | undefined;
                pricingExpressions?: {
                    rates?: {
                        currency?: string | undefined;
                        startPricingQuantity?: string | undefined;
                        unitPrice?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "skus">, never>>(object: I): ListSkusResponse;
};
/** A set of methods for managing Sku resources. */
export declare const SkuServiceService: {
    /** Returns the specified SKU. */
    readonly get: {
        readonly path: "/yandex.cloud.billing.v1.SkuService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSkuRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSkuRequest;
        readonly responseSerialize: (value: Sku) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Sku;
    };
    /** Retrieves the list of SKUs. */
    readonly list: {
        readonly path: "/yandex.cloud.billing.v1.SkuService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSkusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSkusRequest;
        readonly responseSerialize: (value: ListSkusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSkusResponse;
    };
};
export interface SkuServiceServer extends UntypedServiceImplementation {
    /** Returns the specified SKU. */
    get: handleUnaryCall<GetSkuRequest, Sku>;
    /** Retrieves the list of SKUs. */
    list: handleUnaryCall<ListSkusRequest, ListSkusResponse>;
}
export interface SkuServiceClient extends Client {
    /** Returns the specified SKU. */
    get(request: GetSkuRequest, callback: (error: ServiceError | null, response: Sku) => void): ClientUnaryCall;
    get(request: GetSkuRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Sku) => void): ClientUnaryCall;
    get(request: GetSkuRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Sku) => void): ClientUnaryCall;
    /** Retrieves the list of SKUs. */
    list(request: ListSkusRequest, callback: (error: ServiceError | null, response: ListSkusResponse) => void): ClientUnaryCall;
    list(request: ListSkusRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSkusResponse) => void): ClientUnaryCall;
    list(request: ListSkusRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSkusResponse) => void): ClientUnaryCall;
}
export declare const SkuServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): SkuServiceClient;
    service: typeof SkuServiceService;
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
