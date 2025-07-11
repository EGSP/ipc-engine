import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.billing.v1";
/** Type of the pricing version. */
export declare enum PricingVersionType {
    PRICING_VERSION_TYPE_UNSPECIFIED = 0,
    /** STREET_PRICE - Regular price. */
    STREET_PRICE = 1,
    /** CONTRACT_PRICE - Price is overridden by a contract. Defined in the scope of a billing account. */
    CONTRACT_PRICE = 2,
    UNRECOGNIZED = -1
}
export declare function pricingVersionTypeFromJSON(object: any): PricingVersionType;
export declare function pricingVersionTypeToJSON(object: PricingVersionType): string;
/** A Stock keeping unit resource. */
export interface Sku {
    $type: "yandex.cloud.billing.v1.Sku";
    /** ID of the SKU. */
    id: string;
    /** Name of the SKU. */
    name: string;
    /** Description of the sku. */
    description: string;
    /** ID of the service that sku belongs to. */
    serviceId: string;
    /** Pricing unit of the SKU, e.g. `core*hour`, `gbyte*hour`. */
    pricingUnit: string;
    /** List of pricing versions. */
    pricingVersions: PricingVersion[];
}
/**
 * Pricing version of the SKU.
 * Defines current and past prices for the sku.
 */
export interface PricingVersion {
    $type: "yandex.cloud.billing.v1.PricingVersion";
    /** Type of the pricing version. */
    type: PricingVersionType;
    /**
     * Timestamp pricing version is active since inclusive.
     * The pricing version is active until next pricing version effective time exclusive.
     */
    effectiveTime?: Date;
    /** List of pricing expressions. */
    pricingExpressions: PricingExpression[];
}
/**
 * Pricing expression of the pricing version.
 * Defines price for the sku.
 */
export interface PricingExpression {
    $type: "yandex.cloud.billing.v1.PricingExpression";
    /** List of rates. */
    rates: Rate[];
}
/**
 * Rate of the pricing expression.
 * Define unit price for pricing quantity interval.
 */
export interface Rate {
    $type: "yandex.cloud.billing.v1.Rate";
    /** Start of the pricing quantity interval. The end of the interval is the start pricing quantity of the next rate. */
    startPricingQuantity: string;
    /** Unit price for the pricing quantity interval. */
    unitPrice: string;
    /**
     * Currency of the unit price.
     * Can be one of the following:
     * * `RUB`
     * * `USD`
     * * `KZT`
     */
    currency: string;
}
export declare const Sku: {
    $type: "yandex.cloud.billing.v1.Sku";
    encode(message: Sku, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Sku;
    fromJSON(object: any): Sku;
    toJSON(message: Sku): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        serviceId?: string | undefined;
        pricingUnit?: string | undefined;
        pricingVersions?: {
            type?: PricingVersionType | undefined;
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
            type?: PricingVersionType | undefined;
            effectiveTime?: Date | undefined;
            pricingExpressions?: {
                rates?: {
                    currency?: string | undefined;
                    startPricingQuantity?: string | undefined;
                    unitPrice?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            type?: PricingVersionType | undefined;
            effectiveTime?: Date | undefined;
            pricingExpressions?: {
                rates?: {
                    currency?: string | undefined;
                    startPricingQuantity?: string | undefined;
                    unitPrice?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            type?: PricingVersionType | undefined;
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
                } & Record<Exclude<keyof I["pricingVersions"][number]["pricingExpressions"][number]["rates"][number], "$type" | "currency" | "startPricingQuantity" | "unitPrice">, never>)[] & Record<Exclude<keyof I["pricingVersions"][number]["pricingExpressions"][number]["rates"], "$type" | keyof {
                    currency?: string | undefined;
                    startPricingQuantity?: string | undefined;
                    unitPrice?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["pricingVersions"][number]["pricingExpressions"][number], "$type" | "rates">, never>)[] & Record<Exclude<keyof I["pricingVersions"][number]["pricingExpressions"], "$type" | keyof {
                rates?: {
                    currency?: string | undefined;
                    startPricingQuantity?: string | undefined;
                    unitPrice?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["pricingVersions"][number], "$type" | "type" | "effectiveTime" | "pricingExpressions">, never>)[] & Record<Exclude<keyof I["pricingVersions"], "$type" | keyof {
            type?: PricingVersionType | undefined;
            effectiveTime?: Date | undefined;
            pricingExpressions?: {
                rates?: {
                    currency?: string | undefined;
                    startPricingQuantity?: string | undefined;
                    unitPrice?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "serviceId" | "pricingUnit" | "pricingVersions">, never>>(object: I): Sku;
};
export declare const PricingVersion: {
    $type: "yandex.cloud.billing.v1.PricingVersion";
    encode(message: PricingVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PricingVersion;
    fromJSON(object: any): PricingVersion;
    toJSON(message: PricingVersion): unknown;
    fromPartial<I extends {
        type?: PricingVersionType | undefined;
        effectiveTime?: Date | undefined;
        pricingExpressions?: {
            rates?: {
                currency?: string | undefined;
                startPricingQuantity?: string | undefined;
                unitPrice?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        type?: PricingVersionType | undefined;
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
            } & Record<Exclude<keyof I["pricingExpressions"][number]["rates"][number], "$type" | "currency" | "startPricingQuantity" | "unitPrice">, never>)[] & Record<Exclude<keyof I["pricingExpressions"][number]["rates"], "$type" | keyof {
                currency?: string | undefined;
                startPricingQuantity?: string | undefined;
                unitPrice?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["pricingExpressions"][number], "$type" | "rates">, never>)[] & Record<Exclude<keyof I["pricingExpressions"], "$type" | keyof {
            rates?: {
                currency?: string | undefined;
                startPricingQuantity?: string | undefined;
                unitPrice?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "effectiveTime" | "pricingExpressions">, never>>(object: I): PricingVersion;
};
export declare const PricingExpression: {
    $type: "yandex.cloud.billing.v1.PricingExpression";
    encode(message: PricingExpression, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PricingExpression;
    fromJSON(object: any): PricingExpression;
    toJSON(message: PricingExpression): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["rates"][number], "$type" | "currency" | "startPricingQuantity" | "unitPrice">, never>)[] & Record<Exclude<keyof I["rates"], "$type" | keyof {
            currency?: string | undefined;
            startPricingQuantity?: string | undefined;
            unitPrice?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "rates">, never>>(object: I): PricingExpression;
};
export declare const Rate: {
    $type: "yandex.cloud.billing.v1.Rate";
    encode(message: Rate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Rate;
    fromJSON(object: any): Rate;
    toJSON(message: Rate): unknown;
    fromPartial<I extends {
        currency?: string | undefined;
        startPricingQuantity?: string | undefined;
        unitPrice?: string | undefined;
    } & {
        currency?: string | undefined;
        startPricingQuantity?: string | undefined;
        unitPrice?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "currency" | "startPricingQuantity" | "unitPrice">, never>>(object: I): Rate;
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
