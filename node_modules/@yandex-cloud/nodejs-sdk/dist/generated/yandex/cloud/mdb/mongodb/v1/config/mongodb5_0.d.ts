import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/).
 */
export interface Mongodconfig50 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0";
    /** `storage` section of mongod configuration. */
    storage?: Mongodconfig50_Storage;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling?: Mongodconfig50_OperationProfiling;
    /** `net` section of mongod configuration. */
    net?: Mongodconfig50_Network;
}
export interface Mongodconfig50_Storage {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage";
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongodconfig50_Storage_WiredTiger;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v5.0/reference/glossary/#term-journal). */
    journal?: Mongodconfig50_Storage_Journal;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig50_Storage_WiredTiger {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger";
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongodconfig50_Storage_WiredTiger_EngineConfig;
    /** Collection configuration for WiredTiger. */
    collectionConfig?: Mongodconfig50_Storage_WiredTiger_CollectionConfig;
}
export interface Mongodconfig50_Storage_WiredTiger_EngineConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.EngineConfig";
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}
export interface Mongodconfig50_Storage_WiredTiger_CollectionConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.CollectionConfig";
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor;
}
export declare enum Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v5.0/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v5.0/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    /** ZSTD - The [zstd](https://docs.mongodb.com/v5.0/reference/glossary/#term-zstd) compression. */
    ZSTD = 4,
    UNRECOGNIZED = -1
}
export declare function mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object: any): Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor;
export declare function mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor): string;
export interface Mongodconfig50_Storage_Journal {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.Journal";
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval?: number;
}
export interface Mongodconfig50_OperationProfiling {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.OperationProfiling";
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig50_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold?: number;
}
export declare enum Mongodconfig50_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig50_OperationProfiling_ModeFromJSON(object: any): Mongodconfig50_OperationProfiling_Mode;
export declare function mongodconfig50_OperationProfiling_ModeToJSON(object: Mongodconfig50_OperationProfiling_Mode): string;
export interface Mongodconfig50_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network";
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections?: number;
}
export interface Mongocfgconfig50 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0";
    /** `storage` section of mongocfg configuration. */
    storage?: Mongocfgconfig50_Storage;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling?: Mongocfgconfig50_OperationProfiling;
    /** `net` section of mongocfg configuration. */
    net?: Mongocfgconfig50_Network;
}
export interface Mongocfgconfig50_Storage {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage";
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongocfgconfig50_Storage_WiredTiger;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig50_Storage_WiredTiger {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger";
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
}
export interface Mongocfgconfig50_Storage_WiredTiger_EngineConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger.EngineConfig";
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}
export interface Mongocfgconfig50_OperationProfiling {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.OperationProfiling";
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig50_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold?: number;
}
export declare enum Mongocfgconfig50_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongocfgconfig50_OperationProfiling_ModeFromJSON(object: any): Mongocfgconfig50_OperationProfiling_Mode;
export declare function mongocfgconfig50_OperationProfiling_ModeToJSON(object: Mongocfgconfig50_OperationProfiling_Mode): string;
export interface Mongocfgconfig50_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Network";
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections?: number;
}
export interface Mongosconfig50 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0";
    /** Network settings for mongos. */
    net?: Mongosconfig50_Network;
}
export interface Mongosconfig50_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network";
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections?: number;
}
export interface Mongodconfigset50 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0";
    /**
     * Effective mongod settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongodconfig50;
    /** User-defined mongod settings for a MongoDB 5.0 cluster. */
    userConfig?: Mongodconfig50;
    /** Default mongod configuration for a MongoDB 5.0 cluster. */
    defaultConfig?: Mongodconfig50;
}
export interface Mongocfgconfigset50 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0";
    /**
     * Effective mongocfg settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongocfgconfig50;
    /** User-defined mongocfg settings for a MongoDB 5.0 cluster. */
    userConfig?: Mongocfgconfig50;
    /** Default mongocfg configuration for a MongoDB 5.0 cluster. */
    defaultConfig?: Mongocfgconfig50;
}
export interface Mongosconfigset50 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0";
    /**
     * Effective mongos settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongosconfig50;
    /** User-defined mongos settings for a MongoDB 5.0 cluster. */
    userConfig?: Mongosconfig50;
    /** Default mongos configuration for a MongoDB 5.0 cluster. */
    defaultConfig?: Mongosconfig50;
}
export declare const Mongodconfig50: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0";
    encode(message: Mongodconfig50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50;
    fromJSON(object: any): Mongodconfig50;
    toJSON(message: Mongodconfig50): unknown;
    fromPartial<I extends {
        storage?: {
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
                collectionConfig?: {
                    blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } | undefined;
            journal?: {
                commitInterval?: number | undefined;
            } | undefined;
        } | undefined;
        operationProfiling?: {
            mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
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
                    blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                    blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } & {
                engineConfig?: ({
                    cacheSizeGb?: number | undefined;
                } & {
                    cacheSizeGb?: number | undefined;
                } & Record<Exclude<keyof I["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                collectionConfig?: ({
                    blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } & {
                    blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } & Record<Exclude<keyof I["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
            } & Record<Exclude<keyof I["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
            journal?: ({
                commitInterval?: number | undefined;
            } & {
                commitInterval?: number | undefined;
            } & Record<Exclude<keyof I["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
        } & Record<Exclude<keyof I["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
        operationProfiling?: ({
            mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & {
            mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & Record<Exclude<keyof I["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
        net?: ({
            maxIncomingConnections?: number | undefined;
        } & {
            maxIncomingConnections?: number | undefined;
        } & Record<Exclude<keyof I["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "storage" | "operationProfiling" | "net">, never>>(object: I): Mongodconfig50;
};
export declare const Mongodconfig50_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage";
    encode(message: Mongodconfig50_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Storage;
    fromJSON(object: any): Mongodconfig50_Storage;
    toJSON(message: Mongodconfig50_Storage): unknown;
    fromPartial<I extends {
        wiredTiger?: {
            engineConfig?: {
                cacheSizeGb?: number | undefined;
            } | undefined;
            collectionConfig?: {
                blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } | undefined;
        } & {
            engineConfig?: ({
                cacheSizeGb?: number | undefined;
            } & {
                cacheSizeGb?: number | undefined;
            } & Record<Exclude<keyof I["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
            collectionConfig?: ({
                blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } & {
                blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } & Record<Exclude<keyof I["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
        } & Record<Exclude<keyof I["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
        journal?: ({
            commitInterval?: number | undefined;
        } & {
            commitInterval?: number | undefined;
        } & Record<Exclude<keyof I["journal"], "$type" | "commitInterval">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "wiredTiger" | "journal">, never>>(object: I): Mongodconfig50_Storage;
};
export declare const Mongodconfig50_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger";
    encode(message: Mongodconfig50_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Storage_WiredTiger;
    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger;
    toJSON(message: Mongodconfig50_Storage_WiredTiger): unknown;
    fromPartial<I extends {
        engineConfig?: {
            cacheSizeGb?: number | undefined;
        } | undefined;
        collectionConfig?: {
            blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } | undefined;
    } & {
        engineConfig?: ({
            cacheSizeGb?: number | undefined;
        } & {
            cacheSizeGb?: number | undefined;
        } & Record<Exclude<keyof I["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
        collectionConfig?: ({
            blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } & {
            blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } & Record<Exclude<keyof I["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "engineConfig" | "collectionConfig">, never>>(object: I): Mongodconfig50_Storage_WiredTiger;
};
export declare const Mongodconfig50_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.EngineConfig";
    encode(message: Mongodconfig50_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongodconfig50_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial<I extends {
        cacheSizeGb?: number | undefined;
    } & {
        cacheSizeGb?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "cacheSizeGb">, never>>(object: I): Mongodconfig50_Storage_WiredTiger_EngineConfig;
};
export declare const Mongodconfig50_Storage_WiredTiger_CollectionConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.CollectionConfig";
    encode(message: Mongodconfig50_Storage_WiredTiger_CollectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Storage_WiredTiger_CollectionConfig;
    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger_CollectionConfig;
    toJSON(message: Mongodconfig50_Storage_WiredTiger_CollectionConfig): unknown;
    fromPartial<I extends {
        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
    } & {
        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
    } & Record<Exclude<keyof I, "$type" | "blockCompressor">, never>>(object: I): Mongodconfig50_Storage_WiredTiger_CollectionConfig;
};
export declare const Mongodconfig50_Storage_Journal: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.Journal";
    encode(message: Mongodconfig50_Storage_Journal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Storage_Journal;
    fromJSON(object: any): Mongodconfig50_Storage_Journal;
    toJSON(message: Mongodconfig50_Storage_Journal): unknown;
    fromPartial<I extends {
        commitInterval?: number | undefined;
    } & {
        commitInterval?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "commitInterval">, never>>(object: I): Mongodconfig50_Storage_Journal;
};
export declare const Mongodconfig50_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.OperationProfiling";
    encode(message: Mongodconfig50_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_OperationProfiling;
    fromJSON(object: any): Mongodconfig50_OperationProfiling;
    toJSON(message: Mongodconfig50_OperationProfiling): unknown;
    fromPartial<I extends {
        mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & {
        mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "slowOpThreshold">, never>>(object: I): Mongodconfig50_OperationProfiling;
};
export declare const Mongodconfig50_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network";
    encode(message: Mongodconfig50_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Network;
    fromJSON(object: any): Mongodconfig50_Network;
    toJSON(message: Mongodconfig50_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongodconfig50_Network;
};
export declare const Mongocfgconfig50: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0";
    encode(message: Mongocfgconfig50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50;
    fromJSON(object: any): Mongocfgconfig50;
    toJSON(message: Mongocfgconfig50): unknown;
    fromPartial<I extends {
        storage?: {
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        operationProfiling?: {
            mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
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
            mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & {
            mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & Record<Exclude<keyof I["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
        net?: ({
            maxIncomingConnections?: number | undefined;
        } & {
            maxIncomingConnections?: number | undefined;
        } & Record<Exclude<keyof I["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "storage" | "operationProfiling" | "net">, never>>(object: I): Mongocfgconfig50;
};
export declare const Mongocfgconfig50_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage";
    encode(message: Mongocfgconfig50_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50_Storage;
    fromJSON(object: any): Mongocfgconfig50_Storage;
    toJSON(message: Mongocfgconfig50_Storage): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "wiredTiger">, never>>(object: I): Mongocfgconfig50_Storage;
};
export declare const Mongocfgconfig50_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger";
    encode(message: Mongocfgconfig50_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50_Storage_WiredTiger;
    fromJSON(object: any): Mongocfgconfig50_Storage_WiredTiger;
    toJSON(message: Mongocfgconfig50_Storage_WiredTiger): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "engineConfig">, never>>(object: I): Mongocfgconfig50_Storage_WiredTiger;
};
export declare const Mongocfgconfig50_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger.EngineConfig";
    encode(message: Mongocfgconfig50_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongocfgconfig50_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial<I extends {
        cacheSizeGb?: number | undefined;
    } & {
        cacheSizeGb?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "cacheSizeGb">, never>>(object: I): Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
};
export declare const Mongocfgconfig50_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.OperationProfiling";
    encode(message: Mongocfgconfig50_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50_OperationProfiling;
    fromJSON(object: any): Mongocfgconfig50_OperationProfiling;
    toJSON(message: Mongocfgconfig50_OperationProfiling): unknown;
    fromPartial<I extends {
        mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & {
        mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "slowOpThreshold">, never>>(object: I): Mongocfgconfig50_OperationProfiling;
};
export declare const Mongocfgconfig50_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Network";
    encode(message: Mongocfgconfig50_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50_Network;
    fromJSON(object: any): Mongocfgconfig50_Network;
    toJSON(message: Mongocfgconfig50_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongocfgconfig50_Network;
};
export declare const Mongosconfig50: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0";
    encode(message: Mongosconfig50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig50;
    fromJSON(object: any): Mongosconfig50;
    toJSON(message: Mongosconfig50): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "net">, never>>(object: I): Mongosconfig50;
};
export declare const Mongosconfig50_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network";
    encode(message: Mongosconfig50_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig50_Network;
    fromJSON(object: any): Mongosconfig50_Network;
    toJSON(message: Mongosconfig50_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongosconfig50_Network;
};
export declare const Mongodconfigset50: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0";
    encode(message: Mongodconfigset50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfigset50;
    fromJSON(object: any): Mongodconfigset50;
    toJSON(message: Mongodconfigset50): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["userConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["userConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig50_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongodconfigset50;
};
export declare const Mongocfgconfigset50: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0";
    encode(message: Mongocfgconfigset50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfigset50;
    fromJSON(object: any): Mongocfgconfigset50;
    toJSON(message: Mongocfgconfigset50): unknown;
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
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig50_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongocfgconfigset50;
};
export declare const Mongosconfigset50: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0";
    encode(message: Mongosconfigset50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfigset50;
    fromJSON(object: any): Mongosconfigset50;
    toJSON(message: Mongosconfigset50): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongosconfigset50;
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
