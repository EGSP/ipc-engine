import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v3.6/reference/configuration-options/).
 */
export interface Mongodconfig36 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6";
    /** `storage` section of mongod configuration. */
    storage?: Mongodconfig36_Storage;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling?: Mongodconfig36_OperationProfiling;
    /** `net` section of mongod configuration. */
    net?: Mongodconfig36_Network;
}
export interface Mongodconfig36_Storage {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage";
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongodconfig36_Storage_WiredTiger;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v3.6/reference/glossary/#term-journal). */
    journal?: Mongodconfig36_Storage_Journal;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig36_Storage_WiredTiger {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger";
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongodconfig36_Storage_WiredTiger_EngineConfig;
    /** Collection configuration for WiredTiger. */
    collectionConfig?: Mongodconfig36_Storage_WiredTiger_CollectionConfig;
}
export interface Mongodconfig36_Storage_WiredTiger_EngineConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.EngineConfig";
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}
export interface Mongodconfig36_Storage_WiredTiger_CollectionConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.CollectionConfig";
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor;
}
export declare enum Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v3.6/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v3.6/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig36_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object: any): Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor;
export declare function mongodconfig36_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor): string;
export interface Mongodconfig36_Storage_Journal {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.Journal";
    /**
     * Whether the journal is enabled or disabled.
     * Possible values:
     * * true (default) - the journal is enabled.
     * * false - the journal is disabled.
     */
    enabled?: boolean;
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval?: number;
}
export interface Mongodconfig36_OperationProfiling {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.OperationProfiling";
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig36_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold?: number;
}
export declare enum Mongodconfig36_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig36_OperationProfiling_ModeFromJSON(object: any): Mongodconfig36_OperationProfiling_Mode;
export declare function mongodconfig36_OperationProfiling_ModeToJSON(object: Mongodconfig36_OperationProfiling_Mode): string;
export interface Mongodconfig36_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Network";
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections?: number;
}
export interface Mongocfgconfig36 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6";
    /** `storage` section of mongocfg configuration. */
    storage?: Mongocfgconfig36_Storage;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling?: Mongocfgconfig36_OperationProfiling;
    /** `net` section of mongocfg configuration. */
    net?: Mongocfgconfig36_Network;
}
export interface Mongocfgconfig36_Storage {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage";
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongocfgconfig36_Storage_WiredTiger;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig36_Storage_WiredTiger {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger";
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongocfgconfig36_Storage_WiredTiger_EngineConfig;
}
export interface Mongocfgconfig36_Storage_WiredTiger_EngineConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig";
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}
export interface Mongocfgconfig36_OperationProfiling {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.OperationProfiling";
    /** Operation profiling level. For details, see [MongoDB documentation](https://docs.mongodb.com/v3.6/tutorial/manage-the-database-profiler/). */
    mode: Mongocfgconfig36_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v3.6/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold?: number;
}
export declare enum Mongocfgconfig36_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /**
     * OFF - The profiler is off and does not collect any data. This is the default
     * profiler level.
     */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongocfgconfig36_OperationProfiling_ModeFromJSON(object: any): Mongocfgconfig36_OperationProfiling_Mode;
export declare function mongocfgconfig36_OperationProfiling_ModeToJSON(object: Mongocfgconfig36_OperationProfiling_Mode): string;
export interface Mongocfgconfig36_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Network";
    /** The maximum number of incoming connections. */
    maxIncomingConnections?: number;
}
export interface Mongosconfig36 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6";
    /** Network settings for mongos. */
    net?: Mongosconfig36_Network;
}
export interface Mongosconfig36_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6.Network";
    /** The maximum number of incoming connections. */
    maxIncomingConnections?: number;
}
export interface Mongodconfigset36 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6";
    /**
     * Effective mongod settings for a MongoDB 3.6 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongodconfig36;
    /** User-defined mongod settings for a MongoDB 3.6 cluster. */
    userConfig?: Mongodconfig36;
    /** Default mongod configuration for a MongoDB 3.6 cluster. */
    defaultConfig?: Mongodconfig36;
}
export interface Mongocfgconfigset36 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6";
    /**
     * Effective mongocfg settings for a MongoDB 3.6 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongocfgconfig36;
    /** User-defined mongocfg settings for a MongoDB 3.6 cluster. */
    userConfig?: Mongocfgconfig36;
    /** Default mongocfg configuration for a MongoDB 3.6 cluster. */
    defaultConfig?: Mongocfgconfig36;
}
export interface Mongosconfigset36 {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6";
    /**
     * Effective settings for a MongoDB 3.6 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongosconfig36;
    /** User-defined settings for a MongoDB 3.6 cluster. */
    userConfig?: Mongosconfig36;
    /** Default configuration for a MongoDB 3.6 cluster. */
    defaultConfig?: Mongosconfig36;
}
export declare const Mongodconfig36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6";
    encode(message: Mongodconfig36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36;
    fromJSON(object: any): Mongodconfig36;
    toJSON(message: Mongodconfig36): unknown;
    fromPartial<I extends {
        storage?: {
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
                collectionConfig?: {
                    blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } | undefined;
            journal?: {
                enabled?: boolean | undefined;
                commitInterval?: number | undefined;
            } | undefined;
        } | undefined;
        operationProfiling?: {
            mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
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
                    blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } | undefined;
            journal?: {
                enabled?: boolean | undefined;
                commitInterval?: number | undefined;
            } | undefined;
        } & {
            wiredTiger?: ({
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
                collectionConfig?: {
                    blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } & {
                engineConfig?: ({
                    cacheSizeGb?: number | undefined;
                } & {
                    cacheSizeGb?: number | undefined;
                } & Record<Exclude<keyof I["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                collectionConfig?: ({
                    blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } & {
                    blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } & Record<Exclude<keyof I["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
            } & Record<Exclude<keyof I["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
            journal?: ({
                enabled?: boolean | undefined;
                commitInterval?: number | undefined;
            } & {
                enabled?: boolean | undefined;
                commitInterval?: number | undefined;
            } & Record<Exclude<keyof I["storage"]["journal"], "$type" | "enabled" | "commitInterval">, never>) | undefined;
        } & Record<Exclude<keyof I["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
        operationProfiling?: ({
            mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & {
            mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & Record<Exclude<keyof I["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
        net?: ({
            maxIncomingConnections?: number | undefined;
        } & {
            maxIncomingConnections?: number | undefined;
        } & Record<Exclude<keyof I["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "storage" | "operationProfiling" | "net">, never>>(object: I): Mongodconfig36;
};
export declare const Mongodconfig36_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage";
    encode(message: Mongodconfig36_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Storage;
    fromJSON(object: any): Mongodconfig36_Storage;
    toJSON(message: Mongodconfig36_Storage): unknown;
    fromPartial<I extends {
        wiredTiger?: {
            engineConfig?: {
                cacheSizeGb?: number | undefined;
            } | undefined;
            collectionConfig?: {
                blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } | undefined;
        } | undefined;
        journal?: {
            enabled?: boolean | undefined;
            commitInterval?: number | undefined;
        } | undefined;
    } & {
        wiredTiger?: ({
            engineConfig?: {
                cacheSizeGb?: number | undefined;
            } | undefined;
            collectionConfig?: {
                blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } | undefined;
        } & {
            engineConfig?: ({
                cacheSizeGb?: number | undefined;
            } & {
                cacheSizeGb?: number | undefined;
            } & Record<Exclude<keyof I["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
            collectionConfig?: ({
                blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } & {
                blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } & Record<Exclude<keyof I["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
        } & Record<Exclude<keyof I["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
        journal?: ({
            enabled?: boolean | undefined;
            commitInterval?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            commitInterval?: number | undefined;
        } & Record<Exclude<keyof I["journal"], "$type" | "enabled" | "commitInterval">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "wiredTiger" | "journal">, never>>(object: I): Mongodconfig36_Storage;
};
export declare const Mongodconfig36_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger";
    encode(message: Mongodconfig36_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Storage_WiredTiger;
    fromJSON(object: any): Mongodconfig36_Storage_WiredTiger;
    toJSON(message: Mongodconfig36_Storage_WiredTiger): unknown;
    fromPartial<I extends {
        engineConfig?: {
            cacheSizeGb?: number | undefined;
        } | undefined;
        collectionConfig?: {
            blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } | undefined;
    } & {
        engineConfig?: ({
            cacheSizeGb?: number | undefined;
        } & {
            cacheSizeGb?: number | undefined;
        } & Record<Exclude<keyof I["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
        collectionConfig?: ({
            blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } & {
            blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } & Record<Exclude<keyof I["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "engineConfig" | "collectionConfig">, never>>(object: I): Mongodconfig36_Storage_WiredTiger;
};
export declare const Mongodconfig36_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.EngineConfig";
    encode(message: Mongodconfig36_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongodconfig36_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongodconfig36_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial<I extends {
        cacheSizeGb?: number | undefined;
    } & {
        cacheSizeGb?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "cacheSizeGb">, never>>(object: I): Mongodconfig36_Storage_WiredTiger_EngineConfig;
};
export declare const Mongodconfig36_Storage_WiredTiger_CollectionConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.CollectionConfig";
    encode(message: Mongodconfig36_Storage_WiredTiger_CollectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Storage_WiredTiger_CollectionConfig;
    fromJSON(object: any): Mongodconfig36_Storage_WiredTiger_CollectionConfig;
    toJSON(message: Mongodconfig36_Storage_WiredTiger_CollectionConfig): unknown;
    fromPartial<I extends {
        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
    } & {
        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
    } & Record<Exclude<keyof I, "$type" | "blockCompressor">, never>>(object: I): Mongodconfig36_Storage_WiredTiger_CollectionConfig;
};
export declare const Mongodconfig36_Storage_Journal: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.Journal";
    encode(message: Mongodconfig36_Storage_Journal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Storage_Journal;
    fromJSON(object: any): Mongodconfig36_Storage_Journal;
    toJSON(message: Mongodconfig36_Storage_Journal): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
        commitInterval?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        commitInterval?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled" | "commitInterval">, never>>(object: I): Mongodconfig36_Storage_Journal;
};
export declare const Mongodconfig36_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.OperationProfiling";
    encode(message: Mongodconfig36_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_OperationProfiling;
    fromJSON(object: any): Mongodconfig36_OperationProfiling;
    toJSON(message: Mongodconfig36_OperationProfiling): unknown;
    fromPartial<I extends {
        mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & {
        mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "slowOpThreshold">, never>>(object: I): Mongodconfig36_OperationProfiling;
};
export declare const Mongodconfig36_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Network";
    encode(message: Mongodconfig36_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Network;
    fromJSON(object: any): Mongodconfig36_Network;
    toJSON(message: Mongodconfig36_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongodconfig36_Network;
};
export declare const Mongocfgconfig36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6";
    encode(message: Mongocfgconfig36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36;
    fromJSON(object: any): Mongocfgconfig36;
    toJSON(message: Mongocfgconfig36): unknown;
    fromPartial<I extends {
        storage?: {
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        operationProfiling?: {
            mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
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
            mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & {
            mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & Record<Exclude<keyof I["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
        net?: ({
            maxIncomingConnections?: number | undefined;
        } & {
            maxIncomingConnections?: number | undefined;
        } & Record<Exclude<keyof I["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "storage" | "operationProfiling" | "net">, never>>(object: I): Mongocfgconfig36;
};
export declare const Mongocfgconfig36_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage";
    encode(message: Mongocfgconfig36_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36_Storage;
    fromJSON(object: any): Mongocfgconfig36_Storage;
    toJSON(message: Mongocfgconfig36_Storage): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "wiredTiger">, never>>(object: I): Mongocfgconfig36_Storage;
};
export declare const Mongocfgconfig36_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger";
    encode(message: Mongocfgconfig36_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36_Storage_WiredTiger;
    fromJSON(object: any): Mongocfgconfig36_Storage_WiredTiger;
    toJSON(message: Mongocfgconfig36_Storage_WiredTiger): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "engineConfig">, never>>(object: I): Mongocfgconfig36_Storage_WiredTiger;
};
export declare const Mongocfgconfig36_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig";
    encode(message: Mongocfgconfig36_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongocfgconfig36_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongocfgconfig36_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial<I extends {
        cacheSizeGb?: number | undefined;
    } & {
        cacheSizeGb?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "cacheSizeGb">, never>>(object: I): Mongocfgconfig36_Storage_WiredTiger_EngineConfig;
};
export declare const Mongocfgconfig36_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.OperationProfiling";
    encode(message: Mongocfgconfig36_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36_OperationProfiling;
    fromJSON(object: any): Mongocfgconfig36_OperationProfiling;
    toJSON(message: Mongocfgconfig36_OperationProfiling): unknown;
    fromPartial<I extends {
        mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & {
        mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "slowOpThreshold">, never>>(object: I): Mongocfgconfig36_OperationProfiling;
};
export declare const Mongocfgconfig36_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Network";
    encode(message: Mongocfgconfig36_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36_Network;
    fromJSON(object: any): Mongocfgconfig36_Network;
    toJSON(message: Mongocfgconfig36_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongocfgconfig36_Network;
};
export declare const Mongosconfig36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6";
    encode(message: Mongosconfig36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig36;
    fromJSON(object: any): Mongosconfig36;
    toJSON(message: Mongosconfig36): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "net">, never>>(object: I): Mongosconfig36;
};
export declare const Mongosconfig36_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6.Network";
    encode(message: Mongosconfig36_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig36_Network;
    fromJSON(object: any): Mongosconfig36_Network;
    toJSON(message: Mongosconfig36_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongosconfig36_Network;
};
export declare const Mongodconfigset36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6";
    encode(message: Mongodconfigset36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfigset36;
    fromJSON(object: any): Mongodconfigset36;
    toJSON(message: Mongodconfigset36): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } | undefined;
            } & {
                wiredTiger?: ({
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } & {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["journal"], "$type" | "enabled" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } | undefined;
            } & {
                wiredTiger?: ({
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } & {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["userConfig"]["storage"]["journal"], "$type" | "enabled" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["userConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
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
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } | undefined;
            } & {
                wiredTiger?: ({
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } & {
                    enabled?: boolean | undefined;
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["storage"]["journal"], "$type" | "enabled" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig36_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongodconfigset36;
};
export declare const Mongocfgconfigset36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6";
    encode(message: Mongocfgconfigset36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfigset36;
    fromJSON(object: any): Mongocfgconfigset36;
    toJSON(message: Mongocfgconfigset36): unknown;
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
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig36_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongocfgconfigset36;
};
export declare const Mongosconfigset36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6";
    encode(message: Mongosconfigset36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfigset36;
    fromJSON(object: any): Mongosconfigset36;
    toJSON(message: Mongosconfigset36): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongosconfigset36;
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
