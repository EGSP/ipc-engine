import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters which detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/11/runtime-config.html).
 */
export interface Postgresqlhostconfig121c {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12_1C";
    /** in milliseconds. */
    recoveryMinApplyDelay?: number;
    /** in bytes. */
    sharedBuffers?: number;
    /** in bytes. */
    tempBuffers?: number;
    /** in bytes. */
    workMem?: number;
    /** in bytes. */
    tempFileLimit?: number;
    backendFlushAfter?: number;
    oldSnapshotThreshold?: number;
    /** in milliseconds. */
    maxStandbyStreamingDelay?: number;
    constraintExclusion: Postgresqlhostconfig121c_ConstraintExclusion;
    cursorTupleFraction?: number;
    fromCollapseLimit?: number;
    joinCollapseLimit?: number;
    forceParallelMode: Postgresqlhostconfig121c_ForceParallelMode;
    clientMinMessages: Postgresqlhostconfig121c_LogLevel;
    logMinMessages: Postgresqlhostconfig121c_LogLevel;
    logMinErrorStatement: Postgresqlhostconfig121c_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement?: number;
    logCheckpoints?: boolean;
    logConnections?: boolean;
    logDisconnections?: boolean;
    logDuration?: boolean;
    logErrorVerbosity: Postgresqlhostconfig121c_LogErrorVerbosity;
    logLockWaits?: boolean;
    logStatement: Postgresqlhostconfig121c_LogStatement;
    logTempFiles?: number;
    searchPath: string;
    rowSecurity?: boolean;
    defaultTransactionIsolation: Postgresqlhostconfig121c_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout?: number;
    /** in milliseconds. */
    lockTimeout?: number;
    /** in milliseconds. */
    idleInTransactionSessionTimeout?: number;
    byteaOutput: Postgresqlhostconfig121c_ByteaOutput;
    xmlbinary: Postgresqlhostconfig121c_XmlBinary;
    xmloption: Postgresqlhostconfig121c_XmlOption;
    /** in bytes. */
    ginPendingListLimit?: number;
    /** in milliseconds. */
    deadlockTimeout?: number;
    maxLocksPerTransaction?: number;
    maxPredLocksPerTransaction?: number;
    arrayNulls?: boolean;
    backslashQuote: Postgresqlhostconfig121c_BackslashQuote;
    defaultWithOids?: boolean;
    escapeStringWarning?: boolean;
    loCompatPrivileges?: boolean;
    operatorPrecedenceWarning?: boolean;
    quoteAllIdentifiers?: boolean;
    standardConformingStrings?: boolean;
    synchronizeSeqscans?: boolean;
    transformNullEquals?: boolean;
    exitOnError?: boolean;
    seqPageCost?: number;
    randomPageCost?: number;
    enableBitmapscan?: boolean;
    enableHashagg?: boolean;
    enableHashjoin?: boolean;
    enableIndexscan?: boolean;
    enableIndexonlyscan?: boolean;
    enableMaterial?: boolean;
    enableMergejoin?: boolean;
    enableNestloop?: boolean;
    enableSeqscan?: boolean;
    enableSort?: boolean;
    enableTidscan?: boolean;
    maxParallelWorkers?: number;
    maxParallelWorkersPerGather?: number;
    timezone: string;
    effectiveIoConcurrency?: number;
    effectiveCacheSize?: number;
}
export declare enum Postgresqlhostconfig121c_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig121c_BackslashQuoteFromJSON(object: any): Postgresqlhostconfig121c_BackslashQuote;
export declare function postgresqlhostconfig121c_BackslashQuoteToJSON(object: Postgresqlhostconfig121c_BackslashQuote): string;
export declare enum Postgresqlhostconfig121c_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig121c_ByteaOutputFromJSON(object: any): Postgresqlhostconfig121c_ByteaOutput;
export declare function postgresqlhostconfig121c_ByteaOutputToJSON(object: Postgresqlhostconfig121c_ByteaOutput): string;
export declare enum Postgresqlhostconfig121c_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig121c_ConstraintExclusionFromJSON(object: any): Postgresqlhostconfig121c_ConstraintExclusion;
export declare function postgresqlhostconfig121c_ConstraintExclusionToJSON(object: Postgresqlhostconfig121c_ConstraintExclusion): string;
export declare enum Postgresqlhostconfig121c_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig121c_ForceParallelModeFromJSON(object: any): Postgresqlhostconfig121c_ForceParallelMode;
export declare function postgresqlhostconfig121c_ForceParallelModeToJSON(object: Postgresqlhostconfig121c_ForceParallelMode): string;
export declare enum Postgresqlhostconfig121c_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig121c_LogErrorVerbosityFromJSON(object: any): Postgresqlhostconfig121c_LogErrorVerbosity;
export declare function postgresqlhostconfig121c_LogErrorVerbosityToJSON(object: Postgresqlhostconfig121c_LogErrorVerbosity): string;
export declare enum Postgresqlhostconfig121c_LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    LOG_LEVEL_DEBUG5 = 1,
    LOG_LEVEL_DEBUG4 = 2,
    LOG_LEVEL_DEBUG3 = 3,
    LOG_LEVEL_DEBUG2 = 4,
    LOG_LEVEL_DEBUG1 = 5,
    LOG_LEVEL_LOG = 6,
    LOG_LEVEL_NOTICE = 7,
    LOG_LEVEL_WARNING = 8,
    LOG_LEVEL_ERROR = 9,
    LOG_LEVEL_FATAL = 10,
    LOG_LEVEL_PANIC = 11,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig121c_LogLevelFromJSON(object: any): Postgresqlhostconfig121c_LogLevel;
export declare function postgresqlhostconfig121c_LogLevelToJSON(object: Postgresqlhostconfig121c_LogLevel): string;
export declare enum Postgresqlhostconfig121c_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig121c_LogStatementFromJSON(object: any): Postgresqlhostconfig121c_LogStatement;
export declare function postgresqlhostconfig121c_LogStatementToJSON(object: Postgresqlhostconfig121c_LogStatement): string;
export declare enum Postgresqlhostconfig121c_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig121c_TransactionIsolationFromJSON(object: any): Postgresqlhostconfig121c_TransactionIsolation;
export declare function postgresqlhostconfig121c_TransactionIsolationToJSON(object: Postgresqlhostconfig121c_TransactionIsolation): string;
export declare enum Postgresqlhostconfig121c_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig121c_XmlBinaryFromJSON(object: any): Postgresqlhostconfig121c_XmlBinary;
export declare function postgresqlhostconfig121c_XmlBinaryToJSON(object: Postgresqlhostconfig121c_XmlBinary): string;
export declare enum Postgresqlhostconfig121c_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig121c_XmlOptionFromJSON(object: any): Postgresqlhostconfig121c_XmlOption;
export declare function postgresqlhostconfig121c_XmlOptionToJSON(object: Postgresqlhostconfig121c_XmlOption): string;
export declare const Postgresqlhostconfig121c: {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12_1C";
    encode(message: Postgresqlhostconfig121c, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Postgresqlhostconfig121c;
    fromJSON(object: any): Postgresqlhostconfig121c;
    toJSON(message: Postgresqlhostconfig121c): unknown;
    fromPartial<I extends {
        timezone?: string | undefined;
        logStatement?: Postgresqlhostconfig121c_LogStatement | undefined;
        logErrorVerbosity?: Postgresqlhostconfig121c_LogErrorVerbosity | undefined;
        constraintExclusion?: Postgresqlhostconfig121c_ConstraintExclusion | undefined;
        forceParallelMode?: Postgresqlhostconfig121c_ForceParallelMode | undefined;
        clientMinMessages?: Postgresqlhostconfig121c_LogLevel | undefined;
        logMinMessages?: Postgresqlhostconfig121c_LogLevel | undefined;
        logMinErrorStatement?: Postgresqlhostconfig121c_LogLevel | undefined;
        searchPath?: string | undefined;
        defaultTransactionIsolation?: Postgresqlhostconfig121c_TransactionIsolation | undefined;
        byteaOutput?: Postgresqlhostconfig121c_ByteaOutput | undefined;
        xmlbinary?: Postgresqlhostconfig121c_XmlBinary | undefined;
        xmloption?: Postgresqlhostconfig121c_XmlOption | undefined;
        backslashQuote?: Postgresqlhostconfig121c_BackslashQuote | undefined;
        sharedBuffers?: number | undefined;
        tempBuffers?: number | undefined;
        workMem?: number | undefined;
        tempFileLimit?: number | undefined;
        backendFlushAfter?: number | undefined;
        oldSnapshotThreshold?: number | undefined;
        maxStandbyStreamingDelay?: number | undefined;
        cursorTupleFraction?: number | undefined;
        fromCollapseLimit?: number | undefined;
        joinCollapseLimit?: number | undefined;
        logMinDurationStatement?: number | undefined;
        logCheckpoints?: boolean | undefined;
        logConnections?: boolean | undefined;
        logDisconnections?: boolean | undefined;
        logDuration?: boolean | undefined;
        logLockWaits?: boolean | undefined;
        logTempFiles?: number | undefined;
        rowSecurity?: boolean | undefined;
        statementTimeout?: number | undefined;
        lockTimeout?: number | undefined;
        idleInTransactionSessionTimeout?: number | undefined;
        ginPendingListLimit?: number | undefined;
        deadlockTimeout?: number | undefined;
        maxLocksPerTransaction?: number | undefined;
        maxPredLocksPerTransaction?: number | undefined;
        arrayNulls?: boolean | undefined;
        defaultWithOids?: boolean | undefined;
        escapeStringWarning?: boolean | undefined;
        loCompatPrivileges?: boolean | undefined;
        operatorPrecedenceWarning?: boolean | undefined;
        quoteAllIdentifiers?: boolean | undefined;
        standardConformingStrings?: boolean | undefined;
        synchronizeSeqscans?: boolean | undefined;
        transformNullEquals?: boolean | undefined;
        exitOnError?: boolean | undefined;
        seqPageCost?: number | undefined;
        randomPageCost?: number | undefined;
        effectiveIoConcurrency?: number | undefined;
        effectiveCacheSize?: number | undefined;
        enableBitmapscan?: boolean | undefined;
        enableHashagg?: boolean | undefined;
        enableHashjoin?: boolean | undefined;
        enableIndexscan?: boolean | undefined;
        enableIndexonlyscan?: boolean | undefined;
        enableMaterial?: boolean | undefined;
        enableMergejoin?: boolean | undefined;
        enableNestloop?: boolean | undefined;
        enableSeqscan?: boolean | undefined;
        enableSort?: boolean | undefined;
        enableTidscan?: boolean | undefined;
        maxParallelWorkers?: number | undefined;
        maxParallelWorkersPerGather?: number | undefined;
        recoveryMinApplyDelay?: number | undefined;
    } & {
        timezone?: string | undefined;
        logStatement?: Postgresqlhostconfig121c_LogStatement | undefined;
        logErrorVerbosity?: Postgresqlhostconfig121c_LogErrorVerbosity | undefined;
        constraintExclusion?: Postgresqlhostconfig121c_ConstraintExclusion | undefined;
        forceParallelMode?: Postgresqlhostconfig121c_ForceParallelMode | undefined;
        clientMinMessages?: Postgresqlhostconfig121c_LogLevel | undefined;
        logMinMessages?: Postgresqlhostconfig121c_LogLevel | undefined;
        logMinErrorStatement?: Postgresqlhostconfig121c_LogLevel | undefined;
        searchPath?: string | undefined;
        defaultTransactionIsolation?: Postgresqlhostconfig121c_TransactionIsolation | undefined;
        byteaOutput?: Postgresqlhostconfig121c_ByteaOutput | undefined;
        xmlbinary?: Postgresqlhostconfig121c_XmlBinary | undefined;
        xmloption?: Postgresqlhostconfig121c_XmlOption | undefined;
        backslashQuote?: Postgresqlhostconfig121c_BackslashQuote | undefined;
        sharedBuffers?: number | undefined;
        tempBuffers?: number | undefined;
        workMem?: number | undefined;
        tempFileLimit?: number | undefined;
        backendFlushAfter?: number | undefined;
        oldSnapshotThreshold?: number | undefined;
        maxStandbyStreamingDelay?: number | undefined;
        cursorTupleFraction?: number | undefined;
        fromCollapseLimit?: number | undefined;
        joinCollapseLimit?: number | undefined;
        logMinDurationStatement?: number | undefined;
        logCheckpoints?: boolean | undefined;
        logConnections?: boolean | undefined;
        logDisconnections?: boolean | undefined;
        logDuration?: boolean | undefined;
        logLockWaits?: boolean | undefined;
        logTempFiles?: number | undefined;
        rowSecurity?: boolean | undefined;
        statementTimeout?: number | undefined;
        lockTimeout?: number | undefined;
        idleInTransactionSessionTimeout?: number | undefined;
        ginPendingListLimit?: number | undefined;
        deadlockTimeout?: number | undefined;
        maxLocksPerTransaction?: number | undefined;
        maxPredLocksPerTransaction?: number | undefined;
        arrayNulls?: boolean | undefined;
        defaultWithOids?: boolean | undefined;
        escapeStringWarning?: boolean | undefined;
        loCompatPrivileges?: boolean | undefined;
        operatorPrecedenceWarning?: boolean | undefined;
        quoteAllIdentifiers?: boolean | undefined;
        standardConformingStrings?: boolean | undefined;
        synchronizeSeqscans?: boolean | undefined;
        transformNullEquals?: boolean | undefined;
        exitOnError?: boolean | undefined;
        seqPageCost?: number | undefined;
        randomPageCost?: number | undefined;
        effectiveIoConcurrency?: number | undefined;
        effectiveCacheSize?: number | undefined;
        enableBitmapscan?: boolean | undefined;
        enableHashagg?: boolean | undefined;
        enableHashjoin?: boolean | undefined;
        enableIndexscan?: boolean | undefined;
        enableIndexonlyscan?: boolean | undefined;
        enableMaterial?: boolean | undefined;
        enableMergejoin?: boolean | undefined;
        enableNestloop?: boolean | undefined;
        enableSeqscan?: boolean | undefined;
        enableSort?: boolean | undefined;
        enableTidscan?: boolean | undefined;
        maxParallelWorkers?: number | undefined;
        maxParallelWorkersPerGather?: number | undefined;
        recoveryMinApplyDelay?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "timezone" | "logStatement" | "logErrorVerbosity" | "constraintExclusion" | "forceParallelMode" | "clientMinMessages" | "logMinMessages" | "logMinErrorStatement" | "searchPath" | "defaultTransactionIsolation" | "byteaOutput" | "xmlbinary" | "xmloption" | "backslashQuote" | "sharedBuffers" | "tempBuffers" | "workMem" | "tempFileLimit" | "backendFlushAfter" | "oldSnapshotThreshold" | "maxStandbyStreamingDelay" | "cursorTupleFraction" | "fromCollapseLimit" | "joinCollapseLimit" | "logMinDurationStatement" | "logCheckpoints" | "logConnections" | "logDisconnections" | "logDuration" | "logLockWaits" | "logTempFiles" | "rowSecurity" | "statementTimeout" | "lockTimeout" | "idleInTransactionSessionTimeout" | "ginPendingListLimit" | "deadlockTimeout" | "maxLocksPerTransaction" | "maxPredLocksPerTransaction" | "arrayNulls" | "defaultWithOids" | "escapeStringWarning" | "loCompatPrivileges" | "operatorPrecedenceWarning" | "quoteAllIdentifiers" | "standardConformingStrings" | "synchronizeSeqscans" | "transformNullEquals" | "exitOnError" | "seqPageCost" | "randomPageCost" | "effectiveIoConcurrency" | "effectiveCacheSize" | "enableBitmapscan" | "enableHashagg" | "enableHashjoin" | "enableIndexscan" | "enableIndexonlyscan" | "enableMaterial" | "enableMergejoin" | "enableNestloop" | "enableSeqscan" | "enableSort" | "enableTidscan" | "maxParallelWorkers" | "maxParallelWorkersPerGather" | "recoveryMinApplyDelay">, never>>(object: I): Postgresqlhostconfig121c;
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
