import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.marketplace.metering.v1";
export interface UsageRecord {
    $type: "yandex.cloud.marketplace.metering.v1.UsageRecord";
    /** Unique identifier of the usage record (UUID format). */
    uuid: string;
    /** Consumed Marketplace SKU ID, linked to `UsageRecord.product_id`. */
    skuId: string;
    /** Quantity of SKU consumed, measured in `sku.usage_unit` units (e.g. bytes). */
    quantity: number;
    /** Timestamp in UTC for which the usage is being reported. */
    timestamp?: Date;
}
export interface AcceptedUsageRecord {
    $type: "yandex.cloud.marketplace.metering.v1.AcceptedUsageRecord";
    /** Unique identifier of the usage record (UUID format). */
    uuid: string;
}
export interface RejectedUsageRecord {
    $type: "yandex.cloud.marketplace.metering.v1.RejectedUsageRecord";
    /** Unique identifier of the usage record (UUID format). */
    uuid: string;
    /** The reason of rejection. */
    reason: RejectedUsageRecord_Reason;
}
export declare enum RejectedUsageRecord_Reason {
    REASON_UNSPECIFIED = 0,
    DUPLICATE = 1,
    EXPIRED = 2,
    INVALID_TIMESTAMP = 3,
    INVALID_SKU_ID = 4,
    INVALID_PRODUCT_ID = 5,
    INVALID_QUANTITY = 6,
    INVALID_ID = 7,
    UNRECOGNIZED = -1
}
export declare function rejectedUsageRecord_ReasonFromJSON(object: any): RejectedUsageRecord_Reason;
export declare function rejectedUsageRecord_ReasonToJSON(object: RejectedUsageRecord_Reason): string;
export declare const UsageRecord: {
    $type: "yandex.cloud.marketplace.metering.v1.UsageRecord";
    encode(message: UsageRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UsageRecord;
    fromJSON(object: any): UsageRecord;
    toJSON(message: UsageRecord): unknown;
    fromPartial<I extends {
        timestamp?: Date | undefined;
        uuid?: string | undefined;
        skuId?: string | undefined;
        quantity?: number | undefined;
    } & {
        timestamp?: Date | undefined;
        uuid?: string | undefined;
        skuId?: string | undefined;
        quantity?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "timestamp" | "uuid" | "skuId" | "quantity">, never>>(object: I): UsageRecord;
};
export declare const AcceptedUsageRecord: {
    $type: "yandex.cloud.marketplace.metering.v1.AcceptedUsageRecord";
    encode(message: AcceptedUsageRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AcceptedUsageRecord;
    fromJSON(object: any): AcceptedUsageRecord;
    toJSON(message: AcceptedUsageRecord): unknown;
    fromPartial<I extends {
        uuid?: string | undefined;
    } & {
        uuid?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "uuid">, never>>(object: I): AcceptedUsageRecord;
};
export declare const RejectedUsageRecord: {
    $type: "yandex.cloud.marketplace.metering.v1.RejectedUsageRecord";
    encode(message: RejectedUsageRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RejectedUsageRecord;
    fromJSON(object: any): RejectedUsageRecord;
    toJSON(message: RejectedUsageRecord): unknown;
    fromPartial<I extends {
        uuid?: string | undefined;
        reason?: RejectedUsageRecord_Reason | undefined;
    } & {
        uuid?: string | undefined;
        reason?: RejectedUsageRecord_Reason | undefined;
    } & Record<Exclude<keyof I, "$type" | "uuid" | "reason">, never>>(object: I): RejectedUsageRecord;
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
