import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v6.0/reference/configuration-options/).
 */
export interface Mongodconfig60Enterprise {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise";
    /** `storage` section of mongod configuration. */
    storage?: Mongodconfig60Enterprise_Storage;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling?: Mongodconfig60Enterprise_OperationProfiling;
    /** `net` section of mongod configuration. */
    net?: Mongodconfig60Enterprise_Network;
    /** `security` section of mongod configuration. */
    security?: Mongodconfig60Enterprise_Security;
    /** `AuditLog` section of mongod configuration. */
    auditLog?: Mongodconfig60Enterprise_AuditLog;
    /** `SetParameter` section of mongod configuration. */
    setParameter?: Mongodconfig60Enterprise_SetParameter;
}
export interface Mongodconfig60Enterprise_Storage {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage";
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongodconfig60Enterprise_Storage_WiredTiger;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v6.0/reference/glossary/#term-journal). */
    journal?: Mongodconfig60Enterprise_Storage_Journal;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig60Enterprise_Storage_WiredTiger {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger";
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongodconfig60Enterprise_Storage_WiredTiger_EngineConfig;
    /** Collection configuration for WiredTiger. */
    collectionConfig?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig;
}
export interface Mongodconfig60Enterprise_Storage_WiredTiger_EngineConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger.EngineConfig";
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}
export interface Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger.CollectionConfig";
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor;
}
export declare enum Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor {
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
export declare function mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object: any): Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor;
export declare function mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor): string;
export interface Mongodconfig60Enterprise_Storage_Journal {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.Journal";
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval?: number;
}
export interface Mongodconfig60Enterprise_OperationProfiling {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.OperationProfiling";
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig60Enterprise_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold?: number;
}
export declare enum Mongodconfig60Enterprise_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig60Enterprise_OperationProfiling_ModeFromJSON(object: any): Mongodconfig60Enterprise_OperationProfiling_Mode;
export declare function mongodconfig60Enterprise_OperationProfiling_ModeToJSON(object: Mongodconfig60Enterprise_OperationProfiling_Mode): string;
export interface Mongodconfig60Enterprise_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Network";
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections?: number;
}
export interface Mongodconfig60Enterprise_Security {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Security";
    /** If encryption at rest should be enabled or not */
    enableEncryption?: boolean;
    /** `kmip` section of mongod security config */
    kmip?: Mongodconfig60Enterprise_Security_KMIP;
}
export interface Mongodconfig60Enterprise_Security_KMIP {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Security.KMIP";
    /** KMIP server name */
    serverName: string;
    /** KMIP server port */
    port?: number;
    /** KMIP Server CA */
    serverCa: string;
    /** KMIP client certificate + private key (unencrypted) */
    clientCertificate: string;
    /** KMIP Key identifier (if any) */
    keyIdentifier: string;
}
export interface Mongodconfig60Enterprise_AuditLog {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.AuditLog";
    /** Audit filter */
    filter: string;
    /** Allows runtime configuration of audit filter and auditAuthorizationSuccess */
    runtimeConfiguration?: boolean;
}
export interface Mongodconfig60Enterprise_SetParameter {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.SetParameter";
    /** Enables the auditing of authorization successes */
    auditAuthorizationSuccess?: boolean;
}
export interface Mongocfgconfig60Enterprise {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise";
    /** `storage` section of mongocfg configuration. */
    storage?: Mongocfgconfig60Enterprise_Storage;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling?: Mongocfgconfig60Enterprise_OperationProfiling;
    /** `net` section of mongocfg configuration. */
    net?: Mongocfgconfig60Enterprise_Network;
}
export interface Mongocfgconfig60Enterprise_Storage {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage";
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongocfgconfig60Enterprise_Storage_WiredTiger;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig60Enterprise_Storage_WiredTiger {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage.WiredTiger";
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongocfgconfig60Enterprise_Storage_WiredTiger_EngineConfig;
}
export interface Mongocfgconfig60Enterprise_Storage_WiredTiger_EngineConfig {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage.WiredTiger.EngineConfig";
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}
export interface Mongocfgconfig60Enterprise_OperationProfiling {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.OperationProfiling";
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig60Enterprise_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v6.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold?: number;
}
export declare enum Mongocfgconfig60Enterprise_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongocfgconfig60Enterprise_OperationProfiling_ModeFromJSON(object: any): Mongocfgconfig60Enterprise_OperationProfiling_Mode;
export declare function mongocfgconfig60Enterprise_OperationProfiling_ModeToJSON(object: Mongocfgconfig60Enterprise_OperationProfiling_Mode): string;
export interface Mongocfgconfig60Enterprise_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Network";
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections?: number;
}
export interface Mongosconfig60Enterprise {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0_enterprise";
    /** Network settings for mongos. */
    net?: Mongosconfig60Enterprise_Network;
}
export interface Mongosconfig60Enterprise_Network {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0_enterprise.Network";
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections?: number;
}
export interface Mongodconfigset60Enterprise {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0_enterprise";
    /**
     * Effective mongod settings for a MongoDB 6.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongodconfig60Enterprise;
    /** User-defined mongod settings for a MongoDB 6.0 cluster. */
    userConfig?: Mongodconfig60Enterprise;
    /** Default mongod configuration for a MongoDB 6.0 cluster. */
    defaultConfig?: Mongodconfig60Enterprise;
}
export interface Mongocfgconfigset60Enterprise {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0_enterprise";
    /**
     * Effective mongocfg settings for a MongoDB 6.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongocfgconfig60Enterprise;
    /** User-defined mongocfg settings for a MongoDB 6.0 cluster. */
    userConfig?: Mongocfgconfig60Enterprise;
    /** Default mongocfg configuration for a MongoDB 6.0 cluster. */
    defaultConfig?: Mongocfgconfig60Enterprise;
}
export interface Mongosconfigset60Enterprise {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0_enterprise";
    /**
     * Effective mongos settings for a MongoDB 6.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongosconfig60Enterprise;
    /** User-defined mongos settings for a MongoDB 5.0 cluster. */
    userConfig?: Mongosconfig60Enterprise;
    /** Default mongos configuration for a MongoDB 5.0 cluster. */
    defaultConfig?: Mongosconfig60Enterprise;
}
export declare const Mongodconfig60Enterprise: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise";
    encode(message: Mongodconfig60Enterprise, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise;
    fromJSON(object: any): Mongodconfig60Enterprise;
    toJSON(message: Mongodconfig60Enterprise): unknown;
    fromPartial<I extends {
        storage?: {
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
                collectionConfig?: {
                    blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } | undefined;
            journal?: {
                commitInterval?: number | undefined;
            } | undefined;
        } | undefined;
        operationProfiling?: {
            mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } | undefined;
        net?: {
            maxIncomingConnections?: number | undefined;
        } | undefined;
        security?: {
            enableEncryption?: boolean | undefined;
            kmip?: {
                port?: number | undefined;
                serverName?: string | undefined;
                serverCa?: string | undefined;
                clientCertificate?: string | undefined;
                keyIdentifier?: string | undefined;
            } | undefined;
        } | undefined;
        auditLog?: {
            filter?: string | undefined;
            runtimeConfiguration?: boolean | undefined;
        } | undefined;
        setParameter?: {
            auditAuthorizationSuccess?: boolean | undefined;
        } | undefined;
    } & {
        storage?: ({
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
                collectionConfig?: {
                    blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                    blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } | undefined;
            } & {
                engineConfig?: ({
                    cacheSizeGb?: number | undefined;
                } & {
                    cacheSizeGb?: number | undefined;
                } & Record<Exclude<keyof I["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                collectionConfig?: ({
                    blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } & {
                    blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                } & Record<Exclude<keyof I["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
            } & Record<Exclude<keyof I["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
            journal?: ({
                commitInterval?: number | undefined;
            } & {
                commitInterval?: number | undefined;
            } & Record<Exclude<keyof I["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
        } & Record<Exclude<keyof I["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
        operationProfiling?: ({
            mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & {
            mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & Record<Exclude<keyof I["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
        net?: ({
            maxIncomingConnections?: number | undefined;
        } & {
            maxIncomingConnections?: number | undefined;
        } & Record<Exclude<keyof I["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        security?: ({
            enableEncryption?: boolean | undefined;
            kmip?: {
                port?: number | undefined;
                serverName?: string | undefined;
                serverCa?: string | undefined;
                clientCertificate?: string | undefined;
                keyIdentifier?: string | undefined;
            } | undefined;
        } & {
            enableEncryption?: boolean | undefined;
            kmip?: ({
                port?: number | undefined;
                serverName?: string | undefined;
                serverCa?: string | undefined;
                clientCertificate?: string | undefined;
                keyIdentifier?: string | undefined;
            } & {
                port?: number | undefined;
                serverName?: string | undefined;
                serverCa?: string | undefined;
                clientCertificate?: string | undefined;
                keyIdentifier?: string | undefined;
            } & Record<Exclude<keyof I["security"]["kmip"], "$type" | "port" | "serverName" | "serverCa" | "clientCertificate" | "keyIdentifier">, never>) | undefined;
        } & Record<Exclude<keyof I["security"], "$type" | "enableEncryption" | "kmip">, never>) | undefined;
        auditLog?: ({
            filter?: string | undefined;
            runtimeConfiguration?: boolean | undefined;
        } & {
            filter?: string | undefined;
            runtimeConfiguration?: boolean | undefined;
        } & Record<Exclude<keyof I["auditLog"], "$type" | "filter" | "runtimeConfiguration">, never>) | undefined;
        setParameter?: ({
            auditAuthorizationSuccess?: boolean | undefined;
        } & {
            auditAuthorizationSuccess?: boolean | undefined;
        } & Record<Exclude<keyof I["setParameter"], "$type" | "auditAuthorizationSuccess">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "storage" | "operationProfiling" | "net" | "security" | "auditLog" | "setParameter">, never>>(object: I): Mongodconfig60Enterprise;
};
export declare const Mongodconfig60Enterprise_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage";
    encode(message: Mongodconfig60Enterprise_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise_Storage;
    fromJSON(object: any): Mongodconfig60Enterprise_Storage;
    toJSON(message: Mongodconfig60Enterprise_Storage): unknown;
    fromPartial<I extends {
        wiredTiger?: {
            engineConfig?: {
                cacheSizeGb?: number | undefined;
            } | undefined;
            collectionConfig?: {
                blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } | undefined;
        } & {
            engineConfig?: ({
                cacheSizeGb?: number | undefined;
            } & {
                cacheSizeGb?: number | undefined;
            } & Record<Exclude<keyof I["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
            collectionConfig?: ({
                blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } & {
                blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
            } & Record<Exclude<keyof I["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
        } & Record<Exclude<keyof I["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
        journal?: ({
            commitInterval?: number | undefined;
        } & {
            commitInterval?: number | undefined;
        } & Record<Exclude<keyof I["journal"], "$type" | "commitInterval">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "wiredTiger" | "journal">, never>>(object: I): Mongodconfig60Enterprise_Storage;
};
export declare const Mongodconfig60Enterprise_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger";
    encode(message: Mongodconfig60Enterprise_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise_Storage_WiredTiger;
    fromJSON(object: any): Mongodconfig60Enterprise_Storage_WiredTiger;
    toJSON(message: Mongodconfig60Enterprise_Storage_WiredTiger): unknown;
    fromPartial<I extends {
        engineConfig?: {
            cacheSizeGb?: number | undefined;
        } | undefined;
        collectionConfig?: {
            blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } | undefined;
    } & {
        engineConfig?: ({
            cacheSizeGb?: number | undefined;
        } & {
            cacheSizeGb?: number | undefined;
        } & Record<Exclude<keyof I["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
        collectionConfig?: ({
            blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } & {
            blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
        } & Record<Exclude<keyof I["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "engineConfig" | "collectionConfig">, never>>(object: I): Mongodconfig60Enterprise_Storage_WiredTiger;
};
export declare const Mongodconfig60Enterprise_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger.EngineConfig";
    encode(message: Mongodconfig60Enterprise_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongodconfig60Enterprise_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongodconfig60Enterprise_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial<I extends {
        cacheSizeGb?: number | undefined;
    } & {
        cacheSizeGb?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "cacheSizeGb">, never>>(object: I): Mongodconfig60Enterprise_Storage_WiredTiger_EngineConfig;
};
export declare const Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.WiredTiger.CollectionConfig";
    encode(message: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig;
    fromJSON(object: any): Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig;
    toJSON(message: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig): unknown;
    fromPartial<I extends {
        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
    } & {
        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
    } & Record<Exclude<keyof I, "$type" | "blockCompressor">, never>>(object: I): Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig;
};
export declare const Mongodconfig60Enterprise_Storage_Journal: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Storage.Journal";
    encode(message: Mongodconfig60Enterprise_Storage_Journal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise_Storage_Journal;
    fromJSON(object: any): Mongodconfig60Enterprise_Storage_Journal;
    toJSON(message: Mongodconfig60Enterprise_Storage_Journal): unknown;
    fromPartial<I extends {
        commitInterval?: number | undefined;
    } & {
        commitInterval?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "commitInterval">, never>>(object: I): Mongodconfig60Enterprise_Storage_Journal;
};
export declare const Mongodconfig60Enterprise_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.OperationProfiling";
    encode(message: Mongodconfig60Enterprise_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise_OperationProfiling;
    fromJSON(object: any): Mongodconfig60Enterprise_OperationProfiling;
    toJSON(message: Mongodconfig60Enterprise_OperationProfiling): unknown;
    fromPartial<I extends {
        mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & {
        mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "slowOpThreshold">, never>>(object: I): Mongodconfig60Enterprise_OperationProfiling;
};
export declare const Mongodconfig60Enterprise_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Network";
    encode(message: Mongodconfig60Enterprise_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise_Network;
    fromJSON(object: any): Mongodconfig60Enterprise_Network;
    toJSON(message: Mongodconfig60Enterprise_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongodconfig60Enterprise_Network;
};
export declare const Mongodconfig60Enterprise_Security: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Security";
    encode(message: Mongodconfig60Enterprise_Security, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise_Security;
    fromJSON(object: any): Mongodconfig60Enterprise_Security;
    toJSON(message: Mongodconfig60Enterprise_Security): unknown;
    fromPartial<I extends {
        enableEncryption?: boolean | undefined;
        kmip?: {
            port?: number | undefined;
            serverName?: string | undefined;
            serverCa?: string | undefined;
            clientCertificate?: string | undefined;
            keyIdentifier?: string | undefined;
        } | undefined;
    } & {
        enableEncryption?: boolean | undefined;
        kmip?: ({
            port?: number | undefined;
            serverName?: string | undefined;
            serverCa?: string | undefined;
            clientCertificate?: string | undefined;
            keyIdentifier?: string | undefined;
        } & {
            port?: number | undefined;
            serverName?: string | undefined;
            serverCa?: string | undefined;
            clientCertificate?: string | undefined;
            keyIdentifier?: string | undefined;
        } & Record<Exclude<keyof I["kmip"], "$type" | "port" | "serverName" | "serverCa" | "clientCertificate" | "keyIdentifier">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "enableEncryption" | "kmip">, never>>(object: I): Mongodconfig60Enterprise_Security;
};
export declare const Mongodconfig60Enterprise_Security_KMIP: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.Security.KMIP";
    encode(message: Mongodconfig60Enterprise_Security_KMIP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise_Security_KMIP;
    fromJSON(object: any): Mongodconfig60Enterprise_Security_KMIP;
    toJSON(message: Mongodconfig60Enterprise_Security_KMIP): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        serverName?: string | undefined;
        serverCa?: string | undefined;
        clientCertificate?: string | undefined;
        keyIdentifier?: string | undefined;
    } & {
        port?: number | undefined;
        serverName?: string | undefined;
        serverCa?: string | undefined;
        clientCertificate?: string | undefined;
        keyIdentifier?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "port" | "serverName" | "serverCa" | "clientCertificate" | "keyIdentifier">, never>>(object: I): Mongodconfig60Enterprise_Security_KMIP;
};
export declare const Mongodconfig60Enterprise_AuditLog: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.AuditLog";
    encode(message: Mongodconfig60Enterprise_AuditLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise_AuditLog;
    fromJSON(object: any): Mongodconfig60Enterprise_AuditLog;
    toJSON(message: Mongodconfig60Enterprise_AuditLog): unknown;
    fromPartial<I extends {
        filter?: string | undefined;
        runtimeConfiguration?: boolean | undefined;
    } & {
        filter?: string | undefined;
        runtimeConfiguration?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "filter" | "runtimeConfiguration">, never>>(object: I): Mongodconfig60Enterprise_AuditLog;
};
export declare const Mongodconfig60Enterprise_SetParameter: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0_enterprise.SetParameter";
    encode(message: Mongodconfig60Enterprise_SetParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig60Enterprise_SetParameter;
    fromJSON(object: any): Mongodconfig60Enterprise_SetParameter;
    toJSON(message: Mongodconfig60Enterprise_SetParameter): unknown;
    fromPartial<I extends {
        auditAuthorizationSuccess?: boolean | undefined;
    } & {
        auditAuthorizationSuccess?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "auditAuthorizationSuccess">, never>>(object: I): Mongodconfig60Enterprise_SetParameter;
};
export declare const Mongocfgconfig60Enterprise: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise";
    encode(message: Mongocfgconfig60Enterprise, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60Enterprise;
    fromJSON(object: any): Mongocfgconfig60Enterprise;
    toJSON(message: Mongocfgconfig60Enterprise): unknown;
    fromPartial<I extends {
        storage?: {
            wiredTiger?: {
                engineConfig?: {
                    cacheSizeGb?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        operationProfiling?: {
            mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
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
            mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & {
            mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
            slowOpThreshold?: number | undefined;
        } & Record<Exclude<keyof I["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
        net?: ({
            maxIncomingConnections?: number | undefined;
        } & {
            maxIncomingConnections?: number | undefined;
        } & Record<Exclude<keyof I["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "storage" | "operationProfiling" | "net">, never>>(object: I): Mongocfgconfig60Enterprise;
};
export declare const Mongocfgconfig60Enterprise_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage";
    encode(message: Mongocfgconfig60Enterprise_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60Enterprise_Storage;
    fromJSON(object: any): Mongocfgconfig60Enterprise_Storage;
    toJSON(message: Mongocfgconfig60Enterprise_Storage): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "wiredTiger">, never>>(object: I): Mongocfgconfig60Enterprise_Storage;
};
export declare const Mongocfgconfig60Enterprise_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage.WiredTiger";
    encode(message: Mongocfgconfig60Enterprise_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60Enterprise_Storage_WiredTiger;
    fromJSON(object: any): Mongocfgconfig60Enterprise_Storage_WiredTiger;
    toJSON(message: Mongocfgconfig60Enterprise_Storage_WiredTiger): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "engineConfig">, never>>(object: I): Mongocfgconfig60Enterprise_Storage_WiredTiger;
};
export declare const Mongocfgconfig60Enterprise_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Storage.WiredTiger.EngineConfig";
    encode(message: Mongocfgconfig60Enterprise_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60Enterprise_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongocfgconfig60Enterprise_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongocfgconfig60Enterprise_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial<I extends {
        cacheSizeGb?: number | undefined;
    } & {
        cacheSizeGb?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "cacheSizeGb">, never>>(object: I): Mongocfgconfig60Enterprise_Storage_WiredTiger_EngineConfig;
};
export declare const Mongocfgconfig60Enterprise_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.OperationProfiling";
    encode(message: Mongocfgconfig60Enterprise_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60Enterprise_OperationProfiling;
    fromJSON(object: any): Mongocfgconfig60Enterprise_OperationProfiling;
    toJSON(message: Mongocfgconfig60Enterprise_OperationProfiling): unknown;
    fromPartial<I extends {
        mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & {
        mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
        slowOpThreshold?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "slowOpThreshold">, never>>(object: I): Mongocfgconfig60Enterprise_OperationProfiling;
};
export declare const Mongocfgconfig60Enterprise_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0_enterprise.Network";
    encode(message: Mongocfgconfig60Enterprise_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig60Enterprise_Network;
    fromJSON(object: any): Mongocfgconfig60Enterprise_Network;
    toJSON(message: Mongocfgconfig60Enterprise_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongocfgconfig60Enterprise_Network;
};
export declare const Mongosconfig60Enterprise: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0_enterprise";
    encode(message: Mongosconfig60Enterprise, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig60Enterprise;
    fromJSON(object: any): Mongosconfig60Enterprise;
    toJSON(message: Mongosconfig60Enterprise): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "net">, never>>(object: I): Mongosconfig60Enterprise;
};
export declare const Mongosconfig60Enterprise_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0_enterprise.Network";
    encode(message: Mongosconfig60Enterprise_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig60Enterprise_Network;
    fromJSON(object: any): Mongosconfig60Enterprise_Network;
    toJSON(message: Mongosconfig60Enterprise_Network): unknown;
    fromPartial<I extends {
        maxIncomingConnections?: number | undefined;
    } & {
        maxIncomingConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxIncomingConnections">, never>>(object: I): Mongosconfig60Enterprise_Network;
};
export declare const Mongodconfigset60Enterprise: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0_enterprise";
    encode(message: Mongodconfigset60Enterprise, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfigset60Enterprise;
    fromJSON(object: any): Mongodconfigset60Enterprise;
    toJSON(message: Mongodconfigset60Enterprise): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
            security?: {
                enableEncryption?: boolean | undefined;
                kmip?: {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } | undefined;
            } | undefined;
            auditLog?: {
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } | undefined;
            setParameter?: {
                auditAuthorizationSuccess?: boolean | undefined;
            } | undefined;
        } | undefined;
        userConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
            security?: {
                enableEncryption?: boolean | undefined;
                kmip?: {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } | undefined;
            } | undefined;
            auditLog?: {
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } | undefined;
            setParameter?: {
                auditAuthorizationSuccess?: boolean | undefined;
            } | undefined;
        } | undefined;
        defaultConfig?: {
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
            security?: {
                enableEncryption?: boolean | undefined;
                kmip?: {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } | undefined;
            } | undefined;
            auditLog?: {
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } | undefined;
            setParameter?: {
                auditAuthorizationSuccess?: boolean | undefined;
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
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
            security?: {
                enableEncryption?: boolean | undefined;
                kmip?: {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } | undefined;
            } | undefined;
            auditLog?: {
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } | undefined;
            setParameter?: {
                auditAuthorizationSuccess?: boolean | undefined;
            } | undefined;
        } & {
            storage?: ({
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
            security?: ({
                enableEncryption?: boolean | undefined;
                kmip?: {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } | undefined;
            } & {
                enableEncryption?: boolean | undefined;
                kmip?: ({
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } & {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["security"]["kmip"], "$type" | "port" | "serverName" | "serverCa" | "clientCertificate" | "keyIdentifier">, never>) | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["security"], "$type" | "enableEncryption" | "kmip">, never>) | undefined;
            auditLog?: ({
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } & {
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["auditLog"], "$type" | "filter" | "runtimeConfiguration">, never>) | undefined;
            setParameter?: ({
                auditAuthorizationSuccess?: boolean | undefined;
            } & {
                auditAuthorizationSuccess?: boolean | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["setParameter"], "$type" | "auditAuthorizationSuccess">, never>) | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "storage" | "operationProfiling" | "net" | "security" | "auditLog" | "setParameter">, never>) | undefined;
        userConfig?: ({
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
            security?: {
                enableEncryption?: boolean | undefined;
                kmip?: {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } | undefined;
            } | undefined;
            auditLog?: {
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } | undefined;
            setParameter?: {
                auditAuthorizationSuccess?: boolean | undefined;
            } | undefined;
        } & {
            storage?: ({
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["userConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["userConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["userConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
            security?: ({
                enableEncryption?: boolean | undefined;
                kmip?: {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } | undefined;
            } & {
                enableEncryption?: boolean | undefined;
                kmip?: ({
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } & {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } & Record<Exclude<keyof I["userConfig"]["security"]["kmip"], "$type" | "port" | "serverName" | "serverCa" | "clientCertificate" | "keyIdentifier">, never>) | undefined;
            } & Record<Exclude<keyof I["userConfig"]["security"], "$type" | "enableEncryption" | "kmip">, never>) | undefined;
            auditLog?: ({
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } & {
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } & Record<Exclude<keyof I["userConfig"]["auditLog"], "$type" | "filter" | "runtimeConfiguration">, never>) | undefined;
            setParameter?: ({
                auditAuthorizationSuccess?: boolean | undefined;
            } & {
                auditAuthorizationSuccess?: boolean | undefined;
            } & Record<Exclude<keyof I["userConfig"]["setParameter"], "$type" | "auditAuthorizationSuccess">, never>) | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "storage" | "operationProfiling" | "net" | "security" | "auditLog" | "setParameter">, never>) | undefined;
        defaultConfig?: ({
            storage?: {
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } | undefined;
                journal?: {
                    commitInterval?: number | undefined;
                } | undefined;
            } | undefined;
            operationProfiling?: {
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } | undefined;
            net?: {
                maxIncomingConnections?: number | undefined;
            } | undefined;
            security?: {
                enableEncryption?: boolean | undefined;
                kmip?: {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } | undefined;
            } | undefined;
            auditLog?: {
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } | undefined;
            setParameter?: {
                auditAuthorizationSuccess?: boolean | undefined;
            } | undefined;
        } & {
            storage?: ({
                wiredTiger?: {
                    engineConfig?: {
                        cacheSizeGb?: number | undefined;
                    } | undefined;
                    collectionConfig?: {
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
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
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } | undefined;
                } & {
                    engineConfig?: ({
                        cacheSizeGb?: number | undefined;
                    } & {
                        cacheSizeGb?: number | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"]["engineConfig"], "$type" | "cacheSizeGb">, never>) | undefined;
                    collectionConfig?: ({
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & {
                        blockCompressor?: Mongodconfig60Enterprise_Storage_WiredTiger_CollectionConfig_Compressor | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"]["collectionConfig"], "$type" | "blockCompressor">, never>) | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["storage"]["wiredTiger"], "$type" | "engineConfig" | "collectionConfig">, never>) | undefined;
                journal?: ({
                    commitInterval?: number | undefined;
                } & {
                    commitInterval?: number | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["storage"]["journal"], "$type" | "commitInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["storage"], "$type" | "wiredTiger" | "journal">, never>) | undefined;
            operationProfiling?: ({
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongodconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
            security?: ({
                enableEncryption?: boolean | undefined;
                kmip?: {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } | undefined;
            } & {
                enableEncryption?: boolean | undefined;
                kmip?: ({
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } & {
                    port?: number | undefined;
                    serverName?: string | undefined;
                    serverCa?: string | undefined;
                    clientCertificate?: string | undefined;
                    keyIdentifier?: string | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["security"]["kmip"], "$type" | "port" | "serverName" | "serverCa" | "clientCertificate" | "keyIdentifier">, never>) | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["security"], "$type" | "enableEncryption" | "kmip">, never>) | undefined;
            auditLog?: ({
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } & {
                filter?: string | undefined;
                runtimeConfiguration?: boolean | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["auditLog"], "$type" | "filter" | "runtimeConfiguration">, never>) | undefined;
            setParameter?: ({
                auditAuthorizationSuccess?: boolean | undefined;
            } & {
                auditAuthorizationSuccess?: boolean | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["setParameter"], "$type" | "auditAuthorizationSuccess">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "storage" | "operationProfiling" | "net" | "security" | "auditLog" | "setParameter">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongodconfigset60Enterprise;
};
export declare const Mongocfgconfigset60Enterprise: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0_enterprise";
    encode(message: Mongocfgconfigset60Enterprise, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfigset60Enterprise;
    fromJSON(object: any): Mongocfgconfigset60Enterprise;
    toJSON(message: Mongocfgconfigset60Enterprise): unknown;
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
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
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
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & {
                mode?: Mongocfgconfig60Enterprise_OperationProfiling_Mode | undefined;
                slowOpThreshold?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["operationProfiling"], "$type" | "mode" | "slowOpThreshold">, never>) | undefined;
            net?: ({
                maxIncomingConnections?: number | undefined;
            } & {
                maxIncomingConnections?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["net"], "$type" | "maxIncomingConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "storage" | "operationProfiling" | "net">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongocfgconfigset60Enterprise;
};
export declare const Mongosconfigset60Enterprise: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0_enterprise";
    encode(message: Mongosconfigset60Enterprise, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfigset60Enterprise;
    fromJSON(object: any): Mongosconfigset60Enterprise;
    toJSON(message: Mongosconfigset60Enterprise): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mongosconfigset60Enterprise;
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
