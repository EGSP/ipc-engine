import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.redis.v1.config";
/**
 * Fields and structure of `RedisConfig` reflects Redis configuration file
 * parameters.
 */
export interface RedisConfig {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig";
    /**
     * Redis key eviction policy for a dataset that reaches maximum memory,
     * available to the host. Redis maxmemory setting depends on Managed
     * Service for Redis [host class](/docs/managed-redis/concepts/instance-types).
     *
     * All policies are described in detail in [Redis documentation](https://redis.io/topics/lru-cache).
     */
    maxmemoryPolicy: RedisConfig_MaxmemoryPolicy;
    /**
     * Time that Redis keeps the connection open while the client is idle.
     * If no new command is sent during that time, the connection is closed.
     */
    timeout?: number;
    /** Authentication password. */
    password: string;
    /** Number of database buckets on a single redis-server process. */
    databases?: number;
    /** Threshold for logging slow requests to server in microseconds (log only slower than it). */
    slowlogLogSlowerThan?: number;
    /** Max slow requests number to log. */
    slowlogMaxLen?: number;
    /** String setting for pub\sub functionality; subset of KEg$lshzxeAtm. */
    notifyKeyspaceEvents: string;
    /** Redis connection output buffers limits for pubsub operations. */
    clientOutputBufferLimitPubsub?: RedisConfig_ClientOutputBufferLimit;
    /** Redis connection output buffers limits for clients. */
    clientOutputBufferLimitNormal?: RedisConfig_ClientOutputBufferLimit;
    /** Redis maxmemory percent */
    maxmemoryPercent?: number;
}
export declare enum RedisConfig_MaxmemoryPolicy {
    MAXMEMORY_POLICY_UNSPECIFIED = 0,
    /** VOLATILE_LRU - Try to remove less recently used (LRU) keys with `expire set`. */
    VOLATILE_LRU = 1,
    /** ALLKEYS_LRU - Remove less recently used (LRU) keys. */
    ALLKEYS_LRU = 2,
    /** VOLATILE_LFU - Try to remove least frequently used (LFU) keys with `expire set`. */
    VOLATILE_LFU = 3,
    /** ALLKEYS_LFU - Remove least frequently used (LFU) keys. */
    ALLKEYS_LFU = 4,
    /** VOLATILE_RANDOM - Try to remove keys with `expire set` randomly. */
    VOLATILE_RANDOM = 5,
    /** ALLKEYS_RANDOM - Remove keys randomly. */
    ALLKEYS_RANDOM = 6,
    /**
     * VOLATILE_TTL - Try to remove less recently used (LRU) keys with `expire set`
     * and shorter TTL first.
     */
    VOLATILE_TTL = 7,
    /**
     * NOEVICTION - Return errors when memory limit was reached and commands could require
     * more memory to be used.
     */
    NOEVICTION = 8,
    UNRECOGNIZED = -1
}
export declare function redisConfig_MaxmemoryPolicyFromJSON(object: any): RedisConfig_MaxmemoryPolicy;
export declare function redisConfig_MaxmemoryPolicyToJSON(object: RedisConfig_MaxmemoryPolicy): string;
export interface RedisConfig_ClientOutputBufferLimit {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig.ClientOutputBufferLimit";
    /** Total limit in bytes. */
    hardLimit?: number;
    /** Limit in bytes during certain time period. */
    softLimit?: number;
    /** Seconds for soft limit. */
    softSeconds?: number;
}
export interface RedisConfigSet {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet";
    /**
     * Effective settings for a Redis cluster (a combination of settings
     * defined in [user_config] and [default_config]).
     */
    effectiveConfig?: RedisConfig;
    /** User-defined settings for a Redis cluster. */
    userConfig?: RedisConfig;
    /** Default configuration for a Redis cluster. */
    defaultConfig?: RedisConfig;
}
export declare const RedisConfig: {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig";
    encode(message: RedisConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RedisConfig;
    fromJSON(object: any): RedisConfig;
    toJSON(message: RedisConfig): unknown;
    fromPartial<I extends {
        timeout?: number | undefined;
        password?: string | undefined;
        databases?: number | undefined;
        maxmemoryPolicy?: RedisConfig_MaxmemoryPolicy | undefined;
        notifyKeyspaceEvents?: string | undefined;
        slowlogLogSlowerThan?: number | undefined;
        slowlogMaxLen?: number | undefined;
        clientOutputBufferLimitPubsub?: {
            hardLimit?: number | undefined;
            softLimit?: number | undefined;
            softSeconds?: number | undefined;
        } | undefined;
        clientOutputBufferLimitNormal?: {
            hardLimit?: number | undefined;
            softLimit?: number | undefined;
            softSeconds?: number | undefined;
        } | undefined;
        maxmemoryPercent?: number | undefined;
    } & {
        timeout?: number | undefined;
        password?: string | undefined;
        databases?: number | undefined;
        maxmemoryPolicy?: RedisConfig_MaxmemoryPolicy | undefined;
        notifyKeyspaceEvents?: string | undefined;
        slowlogLogSlowerThan?: number | undefined;
        slowlogMaxLen?: number | undefined;
        clientOutputBufferLimitPubsub?: ({
            hardLimit?: number | undefined;
            softLimit?: number | undefined;
            softSeconds?: number | undefined;
        } & {
            hardLimit?: number | undefined;
            softLimit?: number | undefined;
            softSeconds?: number | undefined;
        } & Record<Exclude<keyof I["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
        clientOutputBufferLimitNormal?: ({
            hardLimit?: number | undefined;
            softLimit?: number | undefined;
            softSeconds?: number | undefined;
        } & {
            hardLimit?: number | undefined;
            softLimit?: number | undefined;
            softSeconds?: number | undefined;
        } & Record<Exclude<keyof I["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
        maxmemoryPercent?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>>(object: I): RedisConfig;
};
export declare const RedisConfig_ClientOutputBufferLimit: {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig.ClientOutputBufferLimit";
    encode(message: RedisConfig_ClientOutputBufferLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RedisConfig_ClientOutputBufferLimit;
    fromJSON(object: any): RedisConfig_ClientOutputBufferLimit;
    toJSON(message: RedisConfig_ClientOutputBufferLimit): unknown;
    fromPartial<I extends {
        hardLimit?: number | undefined;
        softLimit?: number | undefined;
        softSeconds?: number | undefined;
    } & {
        hardLimit?: number | undefined;
        softLimit?: number | undefined;
        softSeconds?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>>(object: I): RedisConfig_ClientOutputBufferLimit;
};
export declare const RedisConfigSet: {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet";
    encode(message: RedisConfigSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RedisConfigSet;
    fromJSON(object: any): RedisConfigSet;
    toJSON(message: RedisConfigSet): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
        } | undefined;
        userConfig?: {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
        } | undefined;
        defaultConfig?: {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
        } & {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            clientOutputBufferLimitNormal?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            maxmemoryPercent?: number | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
        userConfig?: ({
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
        } & {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            clientOutputBufferLimitNormal?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            maxmemoryPercent?: number | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
        defaultConfig?: ({
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
        } & {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            clientOutputBufferLimitNormal?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            maxmemoryPercent?: number | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): RedisConfigSet;
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
