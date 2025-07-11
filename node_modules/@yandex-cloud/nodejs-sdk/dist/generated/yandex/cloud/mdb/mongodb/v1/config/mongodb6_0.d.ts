import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v6.0/reference/configuration-options/).
 */
export interface Mongodconfig60 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0";
    /** `storage` section of mongod configuration. */
    storage?: Mongodconfig60_Storage;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling?: Mongodconfig60_OperationProfiling;
    /** `net` section of mongod configuration. */
    net?: Mongodconfig60_Network;
}
export interface Mongodconfig60_Storage {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage";
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongodconfig60_Storage_WiredTiger;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v6.0/reference/glossary/#term-journal). */
    journal?: Mongodconfig60_Storage_Journal;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig60_Storage_WiredTiger {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger";
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongodconfig60_Storage_WiredTiger_EngineConfig;
    /** Collection configuration for WiredTiger. */
    collectionConfig?: Mongodconfig60_Storage_WiredTiger_CollectionConfig;
}
export interface Mongodconfig60_Storage_WiredTiger_EngineConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.EngineConfig";
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}
export interface Mongodconfig60_Storage_WiredTiger_CollectionConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.CollectionConfig";
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor;
}
export declare enum Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v6.0/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v6.0/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    /** ZSTD - The [zstd](https://docs.mongodb.com/v6.0/reference/glossary/#term-zstd) compression. */
    ZSTD = 4,
    UNRECOGNIZED = -1
}
export declare function mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object: any): Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor;
export declare function mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor): string;
export interface Mongodconfig60_Storage_Journal {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.Journal";
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval?: number;
}
export interface Mongodconfig60_OperationProfiling {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.OperationProfiling";
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig60_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold?: number;
}
export declare enum Mongodconfig60_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig60_OperationProfiling_ModeFromJSON(object: any): Mongodconfig60_OperationProfiling_Mode;
export declare function mongodconfig60_OperationProfiling_ModeToJSON(object: Mongodconfig60_OperationProfiling_Mode): string;
export interface Mongodconfig60_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network";
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections?: number;
}
export interface Mongocfgconfig60 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0";
    /** `storage` section of mongocfg configuration. */
    storage?: Mongocfgconfig60_Storage;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling?: Mongocfgconfig60_OperationProfiling;
    /** `net` section of mongocfg configuration. */
    net?: Mongocfgconfig60_Network;
}
export interface Mongocfgconfig60_Storage {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage";
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongocfgconfig60_Storage_WiredTiger;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig60_Storage_WiredTiger {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger";
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongocfgconfig60_Storage_WiredTiger_EngineConfig;
}
export interface Mongocfgconfig60_Storage_WiredTiger_EngineConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger.EngineConfig";
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}
export interface Mongocfgconfig60_OperationProfiling {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.OperationProfiling";
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig60_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v6.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold?: number;
}
export declare enum Mongocfgconfig60_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongocfgconfig60_OperationProfiling_ModeFromJSON(object: any): Mongocfgconfig60_OperationProfiling_Mode;
export declare function mongocfgconfig60_OperationProfiling_ModeToJSON(object: Mongocfgconfig60_OperationProfiling_Mode): string;
export interface Mongocfgconfig60_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Network";
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections?: number;
}
export interface Mongosconfig60 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0";
    /** Network settings for mongos. */
    net?: Mongosconfig60_Network;
}
export interface Mongosconfig60_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network";
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections?: number;
}
export interface Mongodconfigset60 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0";
    /**
     * Effective mongod settings for a MongoDB 6.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongodconfig60;
    /** User-defined mongod settings for a MongoDB 6.0 cluster. */
    userConfig?: Mongodconfig60;
    /** Default mongod configuration for a MongoDB 6.0 cluster. */
    defaultConfig?: Mongodconfig60;
}
export interface Mongocfgconfigset60 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0";
    /**
     * Effective mongocfg settings for a MongoDB 6.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongocfgconfig60;
    /** User-defined mongocfg settings for a MongoDB 6.0 cluster. */
    userConfig?: Mongocfgconfig60;
    /** Default mongocfg configuration for a MongoDB 6.0 cluster. */
    defaultConfig?: Mongocfgconfig60;
}
export interface Mongosconfigset60 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0";
    /**
     * Effective mongos settings for a MongoDB 6.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongosconfig60;
    /** User-defined mongos settings for a MongoDB 6.0 cluster. */
    userConfig?: Mongosconfig60;
    /** Default mongos configuration for a MongoDB 6.0 cluster. */
    defaultConfig?: Mongosconfig60;
}
export declare const Mongodconfig60: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0";
    encode(message: Mongodconfig60, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60;
    fromJSON(object: any): Mongodconfig60;
    toJSON(message: Mongodconfig60): unknown;
    fromPartial<I extends {
        storage?: {
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
                collectionConfig?: {
                    blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } | undefined;
            journal?: {
                commitInterval?: number | undefined;
            } | undefined;
        } | undefined;
        operationProfiling?: {
            mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } | undefined;
        net?: {
            maxIncomingConnections?: number | undefined;
        } | undefined;
    } & {
        storage?: ({
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
                collectionConfig?: {
                    blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } | undefined;
            journal?: {
                commitInterval?: number | undefined;
            } | undefined;
        } & {
            wiredTiger?: ({
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
                collectionConfig?: {
                    blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } & {
                engineConfig?: ({
                    cacheSizeGb?: number | undefined;
                } & {
                    cacheSizeGb?: number | undefined;
                } & Record<Exclude<keyof I["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                collectionConfig?: ({
                    blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } & {
                    blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } & Record<Exclude<keyof I["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
            } & Record<Exclude<keyof I["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
            journal?: ({
                commitInterval?: number | undefined;
            } & {
                commitInterval?: number | undefined;
            } & Record<Exclude<keyof I["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
        } & Record<Exclude<keyof I["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
        operationProfiling?: ({
            mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & {
            mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & Record<Exclude<keyof I["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
        net?: ({
            maxIncomingConnections?: number | undefined;
        } & {
            maxIncomingConnections?: number | undefined;
        } & Record<Exclude<keyof I["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "storage" | "operationProfiling" | "net">, never>>(object: I): Mongodconfig60;
};
export declare const Mongodconfig60_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage";
    encode(message: Mongodconfig60_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60_Storage;
    fromJSON(object: any): Mongodconfig60_Storage;
    toJSON(message: Mongodconfig60_Storage): unknown;
    fromPartial<I extends {
        wiredTiger?: {
            engineConfig?: {
                cacheSizeGb?: number | undefined;
            } | undefined;
            collectionConfig?: {
                blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } | undefined;
        } | undefined;
        journal?: {
            commitInterval?: number | undefined;
        } | undefined;
    } & {
        wiredTiger?: ({
            engineConfig?: {
                cacheSizeGb?: number | undefined;
            } | undefined;
            collectionConfig?: {
                blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } | undefined;
        } & {
            engineConfig?: ({
                cacheSizeGb?: number | undefined;
            } & {
                cacheSizeGb?: number | undefined;
            } & Record<Exclude<keyof I["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
            collectionConfig?: ({
                blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } & {
                blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } & Record<Exclude<keyof I["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
        } & Record<Exclude<keyof I["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
        journal?: ({
            commitInterval?: number | undefined;
        } & {
            commitInterval?: number | undefined;
        } & Record<Exclude<keyof I["journal"], "$type" | "commitInterval">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "wiredTiger" | "journal">, never>>(object: I): Mongodconfig60_Storage;
};
export declare const Mongodconfig60_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger";
    encode(message: Mongodconfig60_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60_Storage_WiredTiger;
    fromJSON(object: any): Mongodconfig60_Storage_WiredTiger;
    toJSON(message: Mongodconfig60_Storage_WiredTiger): unknown;
    fromPartial<I extends {
        engineConfig?: {
            cacheSizeGb?: number | undefined;
        } | undefined;
        collectionConfig?: {
            blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } | undefined;
    } & {
        engineConfig?: ({
            cacheSizeGb?: number | undefined;
        } & {
            cacheSizeGb?: number | undefined;
        } & Record<Exclude<keyof I["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
        collectionConfig?: ({
            blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } & {
            blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } & Record<Exclude<keyof I["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "engineConfig" | "collectionConfig">, never>>(object: I): Mongodconfig60_Storage_WiredTiger;
};
export declare const Mongodconfig60_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.EngineConfig";
    encode(message: Mongodconfig60_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongodconfig60_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongodconfig60_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial<I extends {
        cacheSizeGb?: number | undefined;
    } & {
        cacheSizeGb?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "cacheSizeGb">, never>>(object: I): Mongodconfig60_Storage_WiredTiger_EngineConfig;
};
export declare const Mongodconfig60_Storage_WiredTiger_CollectionConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.CollectionConfig";
    encode(message: Mongodconfig60_Storage_WiredTiger_CollectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60_Storage_WiredTiger_CollectionConfig;
    fromJSON(object: any): Mongodconfig60_Storage_WiredTiger_CollectionConfig;
    toJSON(message: Mongodconfig60_Storage_WiredTiger_CollectionConfig): unknown;
    fromPartial<I extends {
        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
    } & {
        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
    } & Record<Exclude<keyof I, "$type" | "blockCompressor">, never>>(object: I): Mongodconfig60_Storage_WiredTiger_CollectionConfig;
};
export declare const Mongodconfig60_Storage_Journal: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.Journal";
    encode(message: Mongodconfig60_Storage_Journal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60_Storage_Journal;
    fromJSON(object: any): Mongodconfig60_Storage_Journal;
    toJSON(message: Mongodconfig60_Storage_Journal): unknown;
    fromPartial<I extends {
        commitInterval?: number | undefined;
    } & {
        commitInterval?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "commitInterval">, never>>(object: I): Mongodconfig60_Storage_Journal;
};
export declare const Mongodconfig60_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.OperationProfiling";
    encode(message: Mongodconfig60_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60_OperationProfiling;
    fromJSON(object: any): Mongodconfig60_OperationProfiling;
    toJSON(message: Mongodconfig60_OperationProfiling): unknown;
    fromPartial<I extends {
        mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & {
        mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "slowOpThreshold">, never>>(object: I): Mongodconfig60_OperationProfiling;
};
export declare const Mongodconfig60_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network";
    encode(message: Mongodconfig60_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60_Network;
    fromJSON(object: any): Mongodconfig60_Network;
    toJSON(message: Mongodconfig60_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongodconfig60_Network;
};
export declare const Mongocfgconfig60: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0";
    encode(message: Mongocfgconfig60, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60;
    fromJSON(object: any): Mongocfgconfig60;
    toJSON(message: Mongocfgconfig60): unknown;
    fromPartial<I extends {
        storage?: {
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        operationProfiling?: {
            mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } | undefined;
        net?: {
            maxIncomingConnections?: number | undefined;
        } | undefined;
    } & {
        storage?: ({
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            wiredTiger?: ({
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
            } & {
                engineConfig?: ({
                    cacheSizeGb?: number | undefined;
                } & {
                    cacheSizeGb?: number | undefined;
                } & Record<Exclude<keyof I["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
            } & Record<Exclude<keyof I["storage"]["wiredTiger"], "$type" | "engineConfig">, never>) | undefined;
        } & Record<Exclude<keyof I["storage"], "$type" | "wiredTiger">, never>) | undefined;
        operationProfiling?: ({
            mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & {
            mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & Record<Exclude<keyof I["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
        net?: ({
            maxIncomingConnections?: number | undefined;
        } & {
            maxIncomingConnections?: number | undefined;
        } & Record<Exclude<keyof I["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "storage" | "operationProfiling" | "net">, never>>(object: I): Mongocfgconfig60;
};
export declare const Mongocfgconfig60_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage";
    encode(message: Mongocfgconfig60_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60_Storage;
    fromJSON(object: any): Mongocfgconfig60_Storage;
    toJSON(message: Mongocfgconfig60_Storage): unknown;
    fromPartial<I extends {
        wiredTiger?: {
            engineConfig?: {
                cacheSizeGb?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        wiredTiger?: ({
            engineConfig?: {
                cacheSizeGb?: number | undefined;
            } | undefined;
        } & {
            engineConfig?: ({
                cacheSizeGb?: number | undefined;
            } & {
                cacheSizeGb?: number | undefined;
            } & Record<Exclude<keyof I["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
        } & Record<Exclude<keyof I["wiredTiger"], "$type" | "engineConfig">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "wiredTiger">, never>>(object: I): Mongocfgconfig60_Storage;
};
export declare const Mongocfgconfig60_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger";
    encode(message: Mongocfgconfig60_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60_Storage_WiredTiger;
    fromJSON(object: any): Mongocfgconfig60_Storage_WiredTiger;
    toJSON(message: Mongocfgconfig60_Storage_WiredTiger): unknown;
    fromPartial<I extends {
        engineConfig?: {
            cacheSizeGb?: number | undefined;
        } | undefined;
    } & {
        engineConfig?: ({
            cacheSizeGb?: number | undefined;
        } & {
            cacheSizeGb?: number | undefined;
        } & Record<Exclude<keyof I["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "engineConfig">, never>>(object: I): Mongocfgconfig60_Storage_WiredTiger;
};
export declare const Mongocfgconfig60_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger.EngineConfig";
    encode(message: Mongocfgconfig60_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongocfgconfig60_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongocfgconfig60_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial<I extends {
        cacheSizeGb?: number | undefined;
    } & {
        cacheSizeGb?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "cacheSizeGb">, never>>(object: I): Mongocfgconfig60_Storage_WiredTiger_EngineConfig;
};
export declare const Mongocfgconfig60_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.OperationProfiling";
    encode(message: Mongocfgconfig60_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60_OperationProfiling;
    fromJSON(object: any): Mongocfgconfig60_OperationProfiling;
    toJSON(message: Mongocfgconfig60_OperationProfiling): unknown;
    fromPartial<I extends {
        mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & {
        mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "slowOpThreshold">, never>>(object: I): Mongocfgconfig60_OperationProfiling;
};
export declare const Mongocfgconfig60_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Network";
    encode(message: Mongocfgconfig60_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60_Network;
    fromJSON(object: any): Mongocfgconfig60_Network;
    toJSON(message: Mongocfgconfig60_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongocfgconfig60_Network;
};
export declare const Mongosconfig60: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0";
    encode(message: Mongosconfig60, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig60;
    fromJSON(object: any): Mongosconfig60;
    toJSON(message: Mongosconfig60): unknown;
    fromPartial<I extends {
        net?: {
            maxIncomingConnections?: number | undefined;
        } | undefined;
    } & {
        net?: ({
            maxIncomingConnections?: number | undefined;
        } & {
            maxIncomingConnections?: number | undefined;
        } & Record<Exclude<keyof I["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "net">, never>>(object: I): Mongosconfig60;
};
export declare const Mongosconfig60_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network";
    encode(message: Mongosconfig60_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig60_Network;
    fromJSON(object: any): Mongosconfig60_Network;
    toJSON(message: Mongosconfig60_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongosconfig60_Network;
};
export declare const Mongodconfigset60: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0";
    encode(message: Mongodconfigset60, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfigset60;
    fromJSON(object: any): Mongodconfigset60;
    toJSON(message: Mongodconfigset60): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } | undefined;
        userConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } | undefined;
        defaultConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } & {
            storage?: ({
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } & {
                wiredTiger?: ({
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
        userConfig?: ({
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } & {
            storage?: ({
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } & {
                wiredTiger?: ({
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["userConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["userConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
        defaultConfig?: ({
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } & {
            storage?: ({
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } & {
                wiredTiger?: ({
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongodconfigset60;
};
export declare const Mongocfgconfigset60: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0";
    encode(message: Mongocfgconfigset60, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfigset60;
    fromJSON(object: any): Mongocfgconfigset60;
    toJSON(message: Mongocfgconfigset60): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } | undefined;
        userConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } | undefined;
        defaultConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } & {
            storage?: ({
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                wiredTiger?: ({
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig">, never>) | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["storage"], "$type" | "wiredTiger">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
        userConfig?: ({
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } & {
            storage?: ({
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                wiredTiger?: ({
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig">, never>) | undefined;
            } & Record<Exclude<keyof I["userConfig"]["storage"], "$type" | "wiredTiger">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
        defaultConfig?: ({
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } & {
            storage?: ({
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                wiredTiger?: ({
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig">, never>) | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["storage"], "$type" | "wiredTiger">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig60_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongocfgconfigset60;
};
export declare const Mongosconfigset60: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0";
    encode(message: Mongosconfigset60, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfigset60;
    fromJSON(object: any): Mongosconfigset60;
    toJSON(message: Mongosconfigset60): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } | undefined;
        userConfig?: {
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } | undefined;
        defaultConfig?: {
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } & {
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "net">, never>) | undefined;
        userConfig?: ({
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } & {
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "net">, never>) | undefined;
        defaultConfig?: ({
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
        } & {
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "net">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongosconfigset60;
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
