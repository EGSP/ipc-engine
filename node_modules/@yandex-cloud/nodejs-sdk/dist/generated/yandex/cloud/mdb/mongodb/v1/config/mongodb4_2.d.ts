import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.2/reference/configuration-options/).
 */
export interface Mongodconfig42 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2";
    /** `storage` section of mongod configuration. */
    storage?: Mongodconfig42_Storage;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling?: Mongodconfig42_OperationProfiling;
    /** `net` section of mongod configuration. */
    net?: Mongodconfig42_Network;
}
export interface Mongodconfig42_Storage {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage";
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongodconfig42_Storage_WiredTiger;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.2/reference/glossary/#term-journal). */
    journal?: Mongodconfig42_Storage_Journal;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig42_Storage_WiredTiger {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger";
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongodconfig42_Storage_WiredTiger_EngineConfig;
    /** Collection configuration for WiredTiger. */
    collectionConfig?: Mongodconfig42_Storage_WiredTiger_CollectionConfig;
}
export interface Mongodconfig42_Storage_WiredTiger_EngineConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.EngineConfig";
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}
export interface Mongodconfig42_Storage_WiredTiger_CollectionConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.CollectionConfig";
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor;
}
export declare enum Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
    ZSTD = 4,
    UNRECOGNIZED = -1
}
export declare function mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object: any): Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor;
export declare function mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor): string;
export interface Mongodconfig42_Storage_Journal {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.Journal";
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval?: number;
}
export interface Mongodconfig42_OperationProfiling {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.OperationProfiling";
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig42_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold?: number;
}
export declare enum Mongodconfig42_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig42_OperationProfiling_ModeFromJSON(object: any): Mongodconfig42_OperationProfiling_Mode;
export declare function mongodconfig42_OperationProfiling_ModeToJSON(object: Mongodconfig42_OperationProfiling_Mode): string;
export interface Mongodconfig42_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network";
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections?: number;
}
export interface Mongocfgconfig42 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2";
    /** `storage` section of mongocfg configuration. */
    storage?: Mongocfgconfig42_Storage;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling?: Mongocfgconfig42_OperationProfiling;
    /** `net` section of mongocfg configuration. */
    net?: Mongocfgconfig42_Network;
}
export interface Mongocfgconfig42_Storage {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage";
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongocfgconfig42_Storage_WiredTiger;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig42_Storage_WiredTiger {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger";
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
}
export interface Mongocfgconfig42_Storage_WiredTiger_EngineConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger.EngineConfig";
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}
export interface Mongocfgconfig42_OperationProfiling {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.OperationProfiling";
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig42_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.2/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold?: number;
}
export declare enum Mongocfgconfig42_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongocfgconfig42_OperationProfiling_ModeFromJSON(object: any): Mongocfgconfig42_OperationProfiling_Mode;
export declare function mongocfgconfig42_OperationProfiling_ModeToJSON(object: Mongocfgconfig42_OperationProfiling_Mode): string;
export interface Mongocfgconfig42_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Network";
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections?: number;
}
export interface Mongosconfig42 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2";
    /** Network settings for mongos. */
    net?: Mongosconfig42_Network;
}
export interface Mongosconfig42_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network";
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections?: number;
}
export interface Mongodconfigset42 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2";
    /**
     * Effective mongod settings for a MongoDB 4.2 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongodconfig42;
    /** User-defined mongod settings for a MongoDB 4.2 cluster. */
    userConfig?: Mongodconfig42;
    /** Default mongod configuration for a MongoDB 4.2 cluster. */
    defaultConfig?: Mongodconfig42;
}
export interface Mongocfgconfigset42 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2";
    /**
     * Effective mongocfg settings for a MongoDB 4.2 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongocfgconfig42;
    /** User-defined mongocfg settings for a MongoDB 4.2 cluster. */
    userConfig?: Mongocfgconfig42;
    /** Default mongocfg configuration for a MongoDB 4.2 cluster. */
    defaultConfig?: Mongocfgconfig42;
}
export interface Mongosconfigset42 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2";
    /**
     * Effective mongos settings for a MongoDB 4.2 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongosconfig42;
    /** User-defined mongos settings for a MongoDB 4.2 cluster. */
    userConfig?: Mongosconfig42;
    /** Default mongos configuration for a MongoDB 4.2 cluster. */
    defaultConfig?: Mongosconfig42;
}
export declare const Mongodconfig42: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2";
    encode(message: Mongodconfig42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42;
    fromJSON(object: any): Mongodconfig42;
    toJSON(message: Mongodconfig42): unknown;
    fromPartial<I extends {
        storage?: {
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
                collectionConfig?: {
                    blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } | undefined;
            journal?: {
                commitInterval?: number | undefined;
            } | undefined;
        } | undefined;
        operationProfiling?: {
            mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
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
                    blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                    blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } & {
                engineConfig?: ({
                    cacheSizeGb?: number | undefined;
                } & {
                    cacheSizeGb?: number | undefined;
                } & Record<Exclude<keyof I["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                collectionConfig?: ({
                    blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } & {
                    blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } & Record<Exclude<keyof I["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
            } & Record<Exclude<keyof I["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
            journal?: ({
                commitInterval?: number | undefined;
            } & {
                commitInterval?: number | undefined;
            } & Record<Exclude<keyof I["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
        } & Record<Exclude<keyof I["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
        operationProfiling?: ({
            mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & {
            mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & Record<Exclude<keyof I["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
        net?: ({
            maxIncomingConnections?: number | undefined;
        } & {
            maxIncomingConnections?: number | undefined;
        } & Record<Exclude<keyof I["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "storage" | "operationProfiling" | "net">, never>>(object: I): Mongodconfig42;
};
export declare const Mongodconfig42_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage";
    encode(message: Mongodconfig42_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Storage;
    fromJSON(object: any): Mongodconfig42_Storage;
    toJSON(message: Mongodconfig42_Storage): unknown;
    fromPartial<I extends {
        wiredTiger?: {
            engineConfig?: {
                cacheSizeGb?: number | undefined;
            } | undefined;
            collectionConfig?: {
                blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } | undefined;
        } & {
            engineConfig?: ({
                cacheSizeGb?: number | undefined;
            } & {
                cacheSizeGb?: number | undefined;
            } & Record<Exclude<keyof I["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
            collectionConfig?: ({
                blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } & {
                blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } & Record<Exclude<keyof I["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
        } & Record<Exclude<keyof I["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
        journal?: ({
            commitInterval?: number | undefined;
        } & {
            commitInterval?: number | undefined;
        } & Record<Exclude<keyof I["journal"], "$type" | "commitInterval">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "wiredTiger" | "journal">, never>>(object: I): Mongodconfig42_Storage;
};
export declare const Mongodconfig42_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger";
    encode(message: Mongodconfig42_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Storage_WiredTiger;
    fromJSON(object: any): Mongodconfig42_Storage_WiredTiger;
    toJSON(message: Mongodconfig42_Storage_WiredTiger): unknown;
    fromPartial<I extends {
        engineConfig?: {
            cacheSizeGb?: number | undefined;
        } | undefined;
        collectionConfig?: {
            blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } | undefined;
    } & {
        engineConfig?: ({
            cacheSizeGb?: number | undefined;
        } & {
            cacheSizeGb?: number | undefined;
        } & Record<Exclude<keyof I["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
        collectionConfig?: ({
            blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } & {
            blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } & Record<Exclude<keyof I["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "engineConfig" | "collectionConfig">, never>>(object: I): Mongodconfig42_Storage_WiredTiger;
};
export declare const Mongodconfig42_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.EngineConfig";
    encode(message: Mongodconfig42_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongodconfig42_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongodconfig42_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial<I extends {
        cacheSizeGb?: number | undefined;
    } & {
        cacheSizeGb?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "cacheSizeGb">, never>>(object: I): Mongodconfig42_Storage_WiredTiger_EngineConfig;
};
export declare const Mongodconfig42_Storage_WiredTiger_CollectionConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.CollectionConfig";
    encode(message: Mongodconfig42_Storage_WiredTiger_CollectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Storage_WiredTiger_CollectionConfig;
    fromJSON(object: any): Mongodconfig42_Storage_WiredTiger_CollectionConfig;
    toJSON(message: Mongodconfig42_Storage_WiredTiger_CollectionConfig): unknown;
    fromPartial<I extends {
        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
    } & {
        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
    } & Record<Exclude<keyof I, "$type" | "blockCompressor">, never>>(object: I): Mongodconfig42_Storage_WiredTiger_CollectionConfig;
};
export declare const Mongodconfig42_Storage_Journal: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.Journal";
    encode(message: Mongodconfig42_Storage_Journal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Storage_Journal;
    fromJSON(object: any): Mongodconfig42_Storage_Journal;
    toJSON(message: Mongodconfig42_Storage_Journal): unknown;
    fromPartial<I extends {
        commitInterval?: number | undefined;
    } & {
        commitInterval?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "commitInterval">, never>>(object: I): Mongodconfig42_Storage_Journal;
};
export declare const Mongodconfig42_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.OperationProfiling";
    encode(message: Mongodconfig42_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_OperationProfiling;
    fromJSON(object: any): Mongodconfig42_OperationProfiling;
    toJSON(message: Mongodconfig42_OperationProfiling): unknown;
    fromPartial<I extends {
        mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & {
        mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "slowOpThreshold">, never>>(object: I): Mongodconfig42_OperationProfiling;
};
export declare const Mongodconfig42_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network";
    encode(message: Mongodconfig42_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Network;
    fromJSON(object: any): Mongodconfig42_Network;
    toJSON(message: Mongodconfig42_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongodconfig42_Network;
};
export declare const Mongocfgconfig42: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2";
    encode(message: Mongocfgconfig42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42;
    fromJSON(object: any): Mongocfgconfig42;
    toJSON(message: Mongocfgconfig42): unknown;
    fromPartial<I extends {
        storage?: {
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        operationProfiling?: {
            mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
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
            mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & {
            mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & Record<Exclude<keyof I["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
        net?: ({
            maxIncomingConnections?: number | undefined;
        } & {
            maxIncomingConnections?: number | undefined;
        } & Record<Exclude<keyof I["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "storage" | "operationProfiling" | "net">, never>>(object: I): Mongocfgconfig42;
};
export declare const Mongocfgconfig42_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage";
    encode(message: Mongocfgconfig42_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42_Storage;
    fromJSON(object: any): Mongocfgconfig42_Storage;
    toJSON(message: Mongocfgconfig42_Storage): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "wiredTiger">, never>>(object: I): Mongocfgconfig42_Storage;
};
export declare const Mongocfgconfig42_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger";
    encode(message: Mongocfgconfig42_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42_Storage_WiredTiger;
    fromJSON(object: any): Mongocfgconfig42_Storage_WiredTiger;
    toJSON(message: Mongocfgconfig42_Storage_WiredTiger): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "engineConfig">, never>>(object: I): Mongocfgconfig42_Storage_WiredTiger;
};
export declare const Mongocfgconfig42_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger.EngineConfig";
    encode(message: Mongocfgconfig42_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongocfgconfig42_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial<I extends {
        cacheSizeGb?: number | undefined;
    } & {
        cacheSizeGb?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "cacheSizeGb">, never>>(object: I): Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
};
export declare const Mongocfgconfig42_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.OperationProfiling";
    encode(message: Mongocfgconfig42_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42_OperationProfiling;
    fromJSON(object: any): Mongocfgconfig42_OperationProfiling;
    toJSON(message: Mongocfgconfig42_OperationProfiling): unknown;
    fromPartial<I extends {
        mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & {
        mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "slowOpThreshold">, never>>(object: I): Mongocfgconfig42_OperationProfiling;
};
export declare const Mongocfgconfig42_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Network";
    encode(message: Mongocfgconfig42_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42_Network;
    fromJSON(object: any): Mongocfgconfig42_Network;
    toJSON(message: Mongocfgconfig42_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongocfgconfig42_Network;
};
export declare const Mongosconfig42: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2";
    encode(message: Mongosconfig42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig42;
    fromJSON(object: any): Mongosconfig42;
    toJSON(message: Mongosconfig42): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "net">, never>>(object: I): Mongosconfig42;
};
export declare const Mongosconfig42_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network";
    encode(message: Mongosconfig42_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig42_Network;
    fromJSON(object: any): Mongosconfig42_Network;
    toJSON(message: Mongosconfig42_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongosconfig42_Network;
};
export declare const Mongodconfigset42: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2";
    encode(message: Mongodconfigset42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfigset42;
    fromJSON(object: any): Mongodconfigset42;
    toJSON(message: Mongodconfigset42): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["userConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["userConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig42_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongodconfigset42;
};
export declare const Mongocfgconfigset42: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2";
    encode(message: Mongocfgconfigset42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfigset42;
    fromJSON(object: any): Mongocfgconfigset42;
    toJSON(message: Mongocfgconfigset42): unknown;
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
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig42_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongocfgconfigset42;
};
export declare const Mongosconfigset42: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2";
    encode(message: Mongosconfigset42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfigset42;
    fromJSON(object: any): Mongosconfigset42;
    toJSON(message: Mongosconfigset42): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongosconfigset42;
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
