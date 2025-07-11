import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.quota";
export interface QuotaMetric {
    $type: "yandex.cloud.quota.QuotaMetric";
    /** formatted as <domain>.<metric>.<unit>, e.g. mdb.hdd.size */
    name: string;
    limit: number;
    usage: number;
}
export interface MetricLimit {
    $type: "yandex.cloud.quota.MetricLimit";
    name: string;
    limit: number;
}
export interface QuotaFailure {
    $type: "yandex.cloud.quota.QuotaFailure";
    violations: QuotaFailure_Violation[];
}
export interface QuotaFailure_Violation {
    $type: "yandex.cloud.quota.QuotaFailure.Violation";
    metric?: QuotaMetric;
    /** new value for the MetricLimit.limit, so it is: old limit + delta */
    required: number;
}
export declare const QuotaMetric: {
    $type: "yandex.cloud.quota.QuotaMetric";
    encode(message: QuotaMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuotaMetric;
    fromJSON(object: any): QuotaMetric;
    toJSON(message: QuotaMetric): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        limit?: number | undefined;
        usage?: number | undefined;
    } & {
        name?: string | undefined;
        limit?: number | undefined;
        usage?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "limit" | "usage">, never>>(object: I): QuotaMetric;
};
export declare const MetricLimit: {
    $type: "yandex.cloud.quota.MetricLimit";
    encode(message: MetricLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MetricLimit;
    fromJSON(object: any): MetricLimit;
    toJSON(message: MetricLimit): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        limit?: number | undefined;
    } & {
        name?: string | undefined;
        limit?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "limit">, never>>(object: I): MetricLimit;
};
export declare const QuotaFailure: {
    $type: "yandex.cloud.quota.QuotaFailure";
    encode(message: QuotaFailure, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuotaFailure;
    fromJSON(object: any): QuotaFailure;
    toJSON(message: QuotaFailure): unknown;
    fromPartial<I extends {
        violations?: {
            required?: number | undefined;
            metric?: {
                name?: string | undefined;
                limit?: number | undefined;
                usage?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        violations?: ({
            required?: number | undefined;
            metric?: {
                name?: string | undefined;
                limit?: number | undefined;
                usage?: number | undefined;
            } | undefined;
        }[] & ({
            required?: number | undefined;
            metric?: {
                name?: string | undefined;
                limit?: number | undefined;
                usage?: number | undefined;
            } | undefined;
        } & {
            required?: number | undefined;
            metric?: ({
                name?: string | undefined;
                limit?: number | undefined;
                usage?: number | undefined;
            } & {
                name?: string | undefined;
                limit?: number | undefined;
                usage?: number | undefined;
            } & Record<Exclude<keyof I["violations"][number]["metric"], "$type" | "name" | "limit" | "usage">, never>) | undefined;
        } & Record<Exclude<keyof I["violations"][number], "$type" | "required" | "metric">, never>)[] & Record<Exclude<keyof I["violations"], "$type" | keyof {
            required?: number | undefined;
            metric?: {
                name?: string | undefined;
                limit?: number | undefined;
                usage?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "violations">, never>>(object: I): QuotaFailure;
};
export declare const QuotaFailure_Violation: {
    $type: "yandex.cloud.quota.QuotaFailure.Violation";
    encode(message: QuotaFailure_Violation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuotaFailure_Violation;
    fromJSON(object: any): QuotaFailure_Violation;
    toJSON(message: QuotaFailure_Violation): unknown;
    fromPartial<I extends {
        required?: number | undefined;
        metric?: {
            name?: string | undefined;
            limit?: number | undefined;
            usage?: number | undefined;
        } | undefined;
    } & {
        required?: number | undefined;
        metric?: ({
            name?: string | undefined;
            limit?: number | undefined;
            usage?: number | undefined;
        } & {
            name?: string | undefined;
            limit?: number | undefined;
            usage?: number | undefined;
        } & Record<Exclude<keyof I["metric"], "$type" | "name" | "limit" | "usage">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "required" | "metric">, never>>(object: I): QuotaFailure_Violation;
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
