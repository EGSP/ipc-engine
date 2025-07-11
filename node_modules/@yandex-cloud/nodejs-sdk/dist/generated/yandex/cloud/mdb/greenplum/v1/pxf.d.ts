import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.greenplum.v1";
export interface PXFConfig {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig";
    /** Connection */
    connectionTimeout?: number;
    uploadTimeout?: number;
    /** Thread pool */
    maxThreads?: number;
    poolAllowCoreThreadTimeout?: boolean;
    poolCoreSize?: number;
    poolQueueCapacity?: number;
    poolMaxSize?: number;
    /** JVM */
    xmx?: number;
    xms?: number;
}
export interface PXFConfigSet {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet";
    effectiveConfig?: PXFConfig;
    /** User-defined settings */
    userConfig?: PXFConfig;
    /** Default configuration */
    defaultConfig?: PXFConfig;
}
export declare const PXFConfig: {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig";
    encode(message: PXFConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PXFConfig;
    fromJSON(object: any): PXFConfig;
    toJSON(message: PXFConfig): unknown;
    fromPartial<I extends {
        maxThreads?: number | undefined;
        connectionTimeout?: number | undefined;
        uploadTimeout?: number | undefined;
        poolAllowCoreThreadTimeout?: boolean | undefined;
        poolCoreSize?: number | undefined;
        poolQueueCapacity?: number | undefined;
        poolMaxSize?: number | undefined;
        xmx?: number | undefined;
        xms?: number | undefined;
    } & {
        maxThreads?: number | undefined;
        connectionTimeout?: number | undefined;
        uploadTimeout?: number | undefined;
        poolAllowCoreThreadTimeout?: boolean | undefined;
        poolCoreSize?: number | undefined;
        poolQueueCapacity?: number | undefined;
        poolMaxSize?: number | undefined;
        xmx?: number | undefined;
        xms?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>>(object: I): PXFConfig;
};
export declare const PXFConfigSet: {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet";
    encode(message: PXFConfigSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PXFConfigSet;
    fromJSON(object: any): PXFConfigSet;
    toJSON(message: PXFConfigSet): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } | undefined;
        userConfig?: {
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } | undefined;
        defaultConfig?: {
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } & {
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
        userConfig?: ({
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } & {
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
        defaultConfig?: ({
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } & {
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): PXFConfigSet;
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
