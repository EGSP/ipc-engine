import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.billing.v1";
/** A BillingAccount resource. For more information, see [BillingAccount](/docs/billing/concepts/billing-account). */
export interface BillingAccount {
    $type: "yandex.cloud.billing.v1.BillingAccount";
    /** ID of the billing account. */
    id: string;
    /** Name of the billing account. */
    name: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** ISO 3166-1 alpha-2 country code of the billing account. */
    countryCode: string;
    /**
     * Currency of the billing account.
     * Can be one of the following:
     * * `RUB`
     * * `USD`
     * * `KZT`
     */
    currency: string;
    /** Represents whether corresponding billable objects can be used or not. */
    active: boolean;
    /** Current balance of the billing account. */
    balance: string;
}
export declare const BillingAccount: {
    $type: "yandex.cloud.billing.v1.BillingAccount";
    encode(message: BillingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BillingAccount;
    fromJSON(object: any): BillingAccount;
    toJSON(message: BillingAccount): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        countryCode?: string | undefined;
        currency?: string | undefined;
        active?: boolean | undefined;
        balance?: string | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        countryCode?: string | undefined;
        currency?: string | undefined;
        active?: boolean | undefined;
        balance?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "createdAt" | "countryCode" | "currency" | "active" | "balance">, never>>(object: I): BillingAccount;
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
