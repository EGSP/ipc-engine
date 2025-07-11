import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
export declare const protobufPackage = "yandex.cloud.loadbalancer.v1";
/** A HealthCheck resource. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
export interface HealthCheck {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck";
    /** Name of the health check. The name must be unique for each target group that attached to a single load balancer. 3-63 characters long. */
    name: string;
    /** The interval between health checks. The default is 2 seconds. */
    interval?: Duration;
    /** Timeout for a target to return a response for the health check. The default is 1 second. */
    timeout?: Duration;
    /** Number of failed health checks before changing the status to `` UNHEALTHY ``. The default is 2. */
    unhealthyThreshold: number;
    /** Number of successful health checks required in order to set the `` HEALTHY `` status for the target. The default is 2. */
    healthyThreshold: number;
    /** Options for TCP health check. */
    tcpOptions?: HealthCheck_TcpOptions | undefined;
    /** Options for HTTP health check. */
    httpOptions?: HealthCheck_HttpOptions | undefined;
}
/** Configuration option for a TCP health check. */
export interface HealthCheck_TcpOptions {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck.TcpOptions";
    /** Port to use for TCP health checks. */
    port: number;
}
/** Configuration option for an HTTP health check. */
export interface HealthCheck_HttpOptions {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck.HttpOptions";
    /** Port to use for HTTP health checks. */
    port: number;
    /**
     * URL path to set for health checking requests for every target in the target group.
     * For example `` /ping ``. The default path is `` / ``.
     */
    path: string;
}
export declare const HealthCheck: {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck";
    encode(message: HealthCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck;
    fromJSON(object: any): HealthCheck;
    toJSON(message: HealthCheck): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        timeout?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        interval?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        healthyThreshold?: number | undefined;
        unhealthyThreshold?: number | undefined;
        tcpOptions?: {
            port?: number | undefined;
        } | undefined;
        httpOptions?: {
            port?: number | undefined;
            path?: string | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        timeout?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
        interval?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
        healthyThreshold?: number | undefined;
        unhealthyThreshold?: number | undefined;
        tcpOptions?: ({
            port?: number | undefined;
        } & {
            port?: number | undefined;
        } & Record<Exclude<keyof I["tcpOptions"], "$type" | "port">, never>) | undefined;
        httpOptions?: ({
            port?: number | undefined;
            path?: string | undefined;
        } & {
            port?: number | undefined;
            path?: string | undefined;
        } & Record<Exclude<keyof I["httpOptions"], "$type" | "port" | "path">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "timeout" | "interval" | "healthyThreshold" | "unhealthyThreshold" | "tcpOptions" | "httpOptions">, never>>(object: I): HealthCheck;
};
export declare const HealthCheck_TcpOptions: {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck.TcpOptions";
    encode(message: HealthCheck_TcpOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck_TcpOptions;
    fromJSON(object: any): HealthCheck_TcpOptions;
    toJSON(message: HealthCheck_TcpOptions): unknown;
    fromPartial<I extends {
        port?: number | undefined;
    } & {
        port?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "port">, never>>(object: I): HealthCheck_TcpOptions;
};
export declare const HealthCheck_HttpOptions: {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck.HttpOptions";
    encode(message: HealthCheck_HttpOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck_HttpOptions;
    fromJSON(object: any): HealthCheck_HttpOptions;
    toJSON(message: HealthCheck_HttpOptions): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        path?: string | undefined;
    } & {
        port?: number | undefined;
        path?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "port" | "path">, never>>(object: I): HealthCheck_HttpOptions;
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
