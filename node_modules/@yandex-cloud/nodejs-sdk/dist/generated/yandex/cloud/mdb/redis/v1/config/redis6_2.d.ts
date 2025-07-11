import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.redis.v1.config";
/**
 * Fields and structure of `RedisConfig` reflects Redis configuration file
 * parameters.
 */
export interface Redisconfig62 {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig6_2";
    /**
     * Redis key eviction policy for a dataset that reaches maximum memory,
     * available to the host. Redis maxmemory setting depends on Managed
     * Service for Redis [host class](/docs/managed-redis/concepts/instance-types).
     *
     * All policies are described in detail in [Redis documentation](https://redis.io/topics/lru-cache).
     */
    maxmemoryPolicy: Redisconfig62_MaxmemoryPolicy;
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
    clientOutputBufferLimitPubsub?: Redisconfig62_ClientOutputBufferLimit;
    /** Redis connection output buffers limits for clients. */
    clientOutputBufferLimitNormal?: Redisconfig62_ClientOutputBufferLimit;
    /** Redis maxmemory percent */
    maxmemoryPercent?: number;
}
export declare enum Redisconfig62_MaxmemoryPolicy {
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
export declare function redisconfig62_MaxmemoryPolicyFromJSON(object: any): Redisconfig62_MaxmemoryPolicy;
export declare function redisconfig62_MaxmemoryPolicyToJSON(object: Redisconfig62_MaxmemoryPolicy): string;
export interface Redisconfig62_ClientOutputBufferLimit {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig6_2.ClientOutputBufferLimit";
    /** Total limit in bytes. */
    hardLimit?: number;
    /** Limit in bytes during certain time period. */
    softLimit?: number;
    /** Seconds for soft limit. */
    softSeconds?: number;
}
export interface Redisconfigset62 {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet6_2";
    /**
     * Effective settings for a Redis 6.2 cluster (a combination of settings
     * defined in [user_config] and [default_config]).
     */
    effectiveConfig?: Redisconfig62;
    /** User-defined settings for a Redis 6.2 cluster. */
    userConfig?: Redisconfig62;
    /** Default configuration for a Redis 6.2 cluster. */
    defaultConfig?: Redisconfig62;
}
export declare const Redisconfig62: {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig6_2";
    encode(message: Redisconfig62, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Redisconfig62;
    fromJSON(object: any): Redisconfig62;
    toJSON(message: Redisconfig62): unknown;
    fromPartial<I extends {
        timeout?: number | undefined;
        password?: string | undefined;
        databases?: number | undefined;
        maxmemoryPolicy?: Redisconfig62_MaxmemoryPolicy | undefined;
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
        maxmemoryPolicy?: Redisconfig62_MaxmemoryPolicy | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>>(object: I): Redisconfig62;
};
export declare const Redisconfig62_ClientOutputBufferLimit: {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig6_2.ClientOutputBufferLimit";
    encode(message: Redisconfig62_ClientOutputBufferLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Redisconfig62_ClientOutputBufferLimit;
    fromJSON(object: any): Redisconfig62_ClientOutputBufferLimit;
    toJSON(message: Redisconfig62_ClientOutputBufferLimit): unknown;
    fromPartial<I extends {
        hardLimit?: number | undefined;
        softLimit?: number | undefined;
        softSeconds?: number | undefined;
    } & {
        hardLimit?: number | undefined;
        softLimit?: number | undefined;
        softSeconds?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>>(object: I): Redisconfig62_ClientOutputBufferLimit;
};
export declare const Redisconfigset62: {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet6_2";
    encode(message: Redisconfigset62, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Redisconfigset62;
    fromJSON(object: any): Redisconfigset62;
    toJSON(message: Redisconfigset62): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: Redisconfig62_MaxmemoryPolicy | undefined;
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
            maxmemoryPolicy?: Redisconfig62_MaxmemoryPolicy | undefined;
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
            maxmemoryPolicy?: Redisconfig62_MaxmemoryPolicy | undefined;
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
            maxmemoryPolicy?: Redisconfig62_MaxmemoryPolicy | undefined;
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
            maxmemoryPolicy?: Redisconfig62_MaxmemoryPolicy | undefined;
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
            maxmemoryPolicy?: Redisconfig62_MaxmemoryPolicy | undefined;
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
            maxmemoryPolicy?: Redisconfig62_MaxmemoryPolicy | undefined;
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
            maxmemoryPolicy?: Redisconfig62_MaxmemoryPolicy | undefined;
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
            maxmemoryPolicy?: Redisconfig62_MaxmemoryPolicy | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Redisconfigset62;
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
