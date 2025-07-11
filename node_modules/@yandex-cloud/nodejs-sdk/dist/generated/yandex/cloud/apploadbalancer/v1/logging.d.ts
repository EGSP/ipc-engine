import _m0 from "protobufjs/minimal";
import { Code } from "../../../../google/rpc/code";
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export declare enum HttpCodeInterval {
    HTTP_CODE_INTERVAL_UNSPECIFIED = 0,
    HTTP_1XX = 1,
    HTTP_2XX = 2,
    HTTP_3XX = 3,
    HTTP_4XX = 4,
    HTTP_5XX = 5,
    HTTP_ALL = 6,
    UNRECOGNIZED = -1
}
export declare function httpCodeIntervalFromJSON(object: any): HttpCodeInterval;
export declare function httpCodeIntervalToJSON(object: HttpCodeInterval): string;
/**
 * LogDiscardRule discards a fraction of logs with certain codes.
 * If neither codes or intervals are provided, rule applies to all logs.
 */
export interface LogDiscardRule {
    $type: "yandex.cloud.apploadbalancer.v1.LogDiscardRule";
    /** HTTP codes that should be discarded. */
    httpCodes: number[];
    /** Groups of HTTP codes like 4xx that should be discarded. */
    httpCodeIntervals: HttpCodeInterval[];
    /** GRPC codes that should be discarded */
    grpcCodes: Code[];
    /** Percent of logs to be discarded: 0 - keep all, 100 or unset - discard all */
    discardPercent?: number;
}
export interface LogOptions {
    $type: "yandex.cloud.apploadbalancer.v1.LogOptions";
    /**
     * Cloud Logging log group ID to store access logs.
     * If not set then logs will be stored in default log group for the folder
     * where load balancer located.
     */
    logGroupId: string;
    /** ordered list of rules, first matching rule applies */
    discardRules: LogDiscardRule[];
    /** Do not send logs to Cloud Logging log group. */
    disable: boolean;
}
export declare const LogDiscardRule: {
    $type: "yandex.cloud.apploadbalancer.v1.LogDiscardRule";
    encode(message: LogDiscardRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogDiscardRule;
    fromJSON(object: any): LogDiscardRule;
    toJSON(message: LogDiscardRule): unknown;
    fromPartial<I extends {
        httpCodes?: number[] | undefined;
        httpCodeIntervals?: HttpCodeInterval[] | undefined;
        grpcCodes?: Code[] | undefined;
        discardPercent?: number | undefined;
    } & {
        httpCodes?: (number[] & number[] & Record<Exclude<keyof I["httpCodes"], "$type" | keyof number[]>, never>) | undefined;
        httpCodeIntervals?: (HttpCodeInterval[] & HttpCodeInterval[] & Record<Exclude<keyof I["httpCodeIntervals"], "$type" | keyof HttpCodeInterval[]>, never>) | undefined;
        grpcCodes?: (Code[] & Code[] & Record<Exclude<keyof I["grpcCodes"], "$type" | keyof Code[]>, never>) | undefined;
        discardPercent?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpCodes" | "httpCodeIntervals" | "grpcCodes" | "discardPercent">, never>>(object: I): LogDiscardRule;
};
export declare const LogOptions: {
    $type: "yandex.cloud.apploadbalancer.v1.LogOptions";
    encode(message: LogOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogOptions;
    fromJSON(object: any): LogOptions;
    toJSON(message: LogOptions): unknown;
    fromPartial<I extends {
        logGroupId?: string | undefined;
        disable?: boolean | undefined;
        discardRules?: {
            httpCodes?: number[] | undefined;
            httpCodeIntervals?: HttpCodeInterval[] | undefined;
            grpcCodes?: Code[] | undefined;
            discardPercent?: number | undefined;
        }[] | undefined;
    } & {
        logGroupId?: string | undefined;
        disable?: boolean | undefined;
        discardRules?: ({
            httpCodes?: number[] | undefined;
            httpCodeIntervals?: HttpCodeInterval[] | undefined;
            grpcCodes?: Code[] | undefined;
            discardPercent?: number | undefined;
        }[] & ({
            httpCodes?: number[] | undefined;
            httpCodeIntervals?: HttpCodeInterval[] | undefined;
            grpcCodes?: Code[] | undefined;
            discardPercent?: number | undefined;
        } & {
            httpCodes?: (number[] & number[] & Record<Exclude<keyof I["discardRules"][number]["httpCodes"], "$type" | keyof number[]>, never>) | undefined;
            httpCodeIntervals?: (HttpCodeInterval[] & HttpCodeInterval[] & Record<Exclude<keyof I["discardRules"][number]["httpCodeIntervals"], "$type" | keyof HttpCodeInterval[]>, never>) | undefined;
            grpcCodes?: (Code[] & Code[] & Record<Exclude<keyof I["discardRules"][number]["grpcCodes"], "$type" | keyof Code[]>, never>) | undefined;
            discardPercent?: number | undefined;
        } & Record<Exclude<keyof I["discardRules"][number], "$type" | "httpCodes" | "httpCodeIntervals" | "grpcCodes" | "discardPercent">, never>)[] & Record<Exclude<keyof I["discardRules"], "$type" | keyof {
            httpCodes?: number[] | undefined;
            httpCodeIntervals?: HttpCodeInterval[] | undefined;
            grpcCodes?: Code[] | undefined;
            discardPercent?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "logGroupId" | "disable" | "discardRules">, never>>(object: I): LogOptions;
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
