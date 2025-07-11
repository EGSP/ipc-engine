import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlHostConfig` reflects PostgreSQL configuration file
 * parameters whose detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/10/runtime-config.html).
 */
export interface PostgresqlHostConfig10 {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10";
    /** in milliseconds. */
    recoveryMinApplyDelay?: number;
    /** in bytes. */
    sharedBuffers?: number;
    /** in bytes. */
    tempBuffers?: number;
    /** in bytes. */
    workMem?: number;
    /** in bytes. */
    replacementSortTuples?: number;
    /** in bytes. */
    tempFileLimit?: number;
    backendFlushAfter?: number;
    oldSnapshotThreshold?: number;
    /** in milliseconds. */
    maxStandbyStreamingDelay?: number;
    constraintExclusion: PostgresqlHostConfig10_ConstraintExclusion;
    cursorTupleFraction?: number;
    fromCollapseLimit?: number;
    joinCollapseLimit?: number;
    forceParallelMode: PostgresqlHostConfig10_ForceParallelMode;
    clientMinMessages: PostgresqlHostConfig10_LogLevel;
    logMinMessages: PostgresqlHostConfig10_LogLevel;
    logMinErrorStatement: PostgresqlHostConfig10_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement?: number;
    logCheckpoints?: boolean;
    logConnections?: boolean;
    logDisconnections?: boolean;
    logDuration?: boolean;
    logErrorVerbosity: PostgresqlHostConfig10_LogErrorVerbosity;
    logLockWaits?: boolean;
    logStatement: PostgresqlHostConfig10_LogStatement;
    logTempFiles?: number;
    searchPath: string;
    rowSecurity?: boolean;
    defaultTransactionIsolation: PostgresqlHostConfig10_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout?: number;
    /** in milliseconds. */
    lockTimeout?: number;
    /** in milliseconds. */
    idleInTransactionSessionTimeout?: number;
    byteaOutput: PostgresqlHostConfig10_ByteaOutput;
    xmlbinary: PostgresqlHostConfig10_XmlBinary;
    xmloption: PostgresqlHostConfig10_XmlOption;
    /** in bytes. */
    ginPendingListLimit?: number;
    /** in milliseconds. */
    deadlockTimeout?: number;
    maxLocksPerTransaction?: number;
    maxPredLocksPerTransaction?: number;
    arrayNulls?: boolean;
    backslashQuote: PostgresqlHostConfig10_BackslashQuote;
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
export declare enum PostgresqlHostConfig10_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig10_ConstraintExclusionFromJSON(object: any): PostgresqlHostConfig10_ConstraintExclusion;
export declare function postgresqlHostConfig10_ConstraintExclusionToJSON(object: PostgresqlHostConfig10_ConstraintExclusion): string;
export declare enum PostgresqlHostConfig10_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig10_ForceParallelModeFromJSON(object: any): PostgresqlHostConfig10_ForceParallelMode;
export declare function postgresqlHostConfig10_ForceParallelModeToJSON(object: PostgresqlHostConfig10_ForceParallelMode): string;
export declare enum PostgresqlHostConfig10_LogLevel {
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
export declare function postgresqlHostConfig10_LogLevelFromJSON(object: any): PostgresqlHostConfig10_LogLevel;
export declare function postgresqlHostConfig10_LogLevelToJSON(object: PostgresqlHostConfig10_LogLevel): string;
export declare enum PostgresqlHostConfig10_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig10_LogErrorVerbosityFromJSON(object: any): PostgresqlHostConfig10_LogErrorVerbosity;
export declare function postgresqlHostConfig10_LogErrorVerbosityToJSON(object: PostgresqlHostConfig10_LogErrorVerbosity): string;
export declare enum PostgresqlHostConfig10_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig10_LogStatementFromJSON(object: any): PostgresqlHostConfig10_LogStatement;
export declare function postgresqlHostConfig10_LogStatementToJSON(object: PostgresqlHostConfig10_LogStatement): string;
export declare enum PostgresqlHostConfig10_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig10_TransactionIsolationFromJSON(object: any): PostgresqlHostConfig10_TransactionIsolation;
export declare function postgresqlHostConfig10_TransactionIsolationToJSON(object: PostgresqlHostConfig10_TransactionIsolation): string;
export declare enum PostgresqlHostConfig10_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig10_ByteaOutputFromJSON(object: any): PostgresqlHostConfig10_ByteaOutput;
export declare function postgresqlHostConfig10_ByteaOutputToJSON(object: PostgresqlHostConfig10_ByteaOutput): string;
export declare enum PostgresqlHostConfig10_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig10_XmlBinaryFromJSON(object: any): PostgresqlHostConfig10_XmlBinary;
export declare function postgresqlHostConfig10_XmlBinaryToJSON(object: PostgresqlHostConfig10_XmlBinary): string;
export declare enum PostgresqlHostConfig10_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig10_XmlOptionFromJSON(object: any): PostgresqlHostConfig10_XmlOption;
export declare function postgresqlHostConfig10_XmlOptionToJSON(object: PostgresqlHostConfig10_XmlOption): string;
export declare enum PostgresqlHostConfig10_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig10_BackslashQuoteFromJSON(object: any): PostgresqlHostConfig10_BackslashQuote;
export declare function postgresqlHostConfig10_BackslashQuoteToJSON(object: PostgresqlHostConfig10_BackslashQuote): string;
export declare const PostgresqlHostConfig10: {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10";
    encode(message: PostgresqlHostConfig10, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresqlHostConfig10;
    fromJSON(object: any): PostgresqlHostConfig10;
    toJSON(message: PostgresqlHostConfig10): unknown;
    fromPartial<I extends {
        timezone?: string | undefined;
        logStatement?: PostgresqlHostConfig10_LogStatement | undefined;
        logErrorVerbosity?: PostgresqlHostConfig10_LogErrorVerbosity | undefined;
        constraintExclusion?: PostgresqlHostConfig10_ConstraintExclusion | undefined;
        forceParallelMode?: PostgresqlHostConfig10_ForceParallelMode | undefined;
        clientMinMessages?: PostgresqlHostConfig10_LogLevel | undefined;
        logMinMessages?: PostgresqlHostConfig10_LogLevel | undefined;
        logMinErrorStatement?: PostgresqlHostConfig10_LogLevel | undefined;
        searchPath?: string | undefined;
        defaultTransactionIsolation?: PostgresqlHostConfig10_TransactionIsolation | undefined;
        byteaOutput?: PostgresqlHostConfig10_ByteaOutput | undefined;
        xmlbinary?: PostgresqlHostConfig10_XmlBinary | undefined;
        xmloption?: PostgresqlHostConfig10_XmlOption | undefined;
        backslashQuote?: PostgresqlHostConfig10_BackslashQuote | undefined;
        sharedBuffers?: number | undefined;
        tempBuffers?: number | undefined;
        workMem?: number | undefined;
        replacementSortTuples?: number | undefined;
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
        logStatement?: PostgresqlHostConfig10_LogStatement | undefined;
        logErrorVerbosity?: PostgresqlHostConfig10_LogErrorVerbosity | undefined;
        constraintExclusion?: PostgresqlHostConfig10_ConstraintExclusion | undefined;
        forceParallelMode?: PostgresqlHostConfig10_ForceParallelMode | undefined;
        clientMinMessages?: PostgresqlHostConfig10_LogLevel | undefined;
        logMinMessages?: PostgresqlHostConfig10_LogLevel | undefined;
        logMinErrorStatement?: PostgresqlHostConfig10_LogLevel | undefined;
        searchPath?: string | undefined;
        defaultTransactionIsolation?: PostgresqlHostConfig10_TransactionIsolation | undefined;
        byteaOutput?: PostgresqlHostConfig10_ByteaOutput | undefined;
        xmlbinary?: PostgresqlHostConfig10_XmlBinary | undefined;
        xmloption?: PostgresqlHostConfig10_XmlOption | undefined;
        backslashQuote?: PostgresqlHostConfig10_BackslashQuote | undefined;
        sharedBuffers?: number | undefined;
        tempBuffers?: number | undefined;
        workMem?: number | undefined;
        replacementSortTuples?: number | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "timezone" | "logStatement" | "logErrorVerbosity" | "constraintExclusion" | "forceParallelMode" | "clientMinMessages" | "logMinMessages" | "logMinErrorStatement" | "searchPath" | "defaultTransactionIsolation" | "byteaOutput" | "xmlbinary" | "xmloption" | "backslashQuote" | "sharedBuffers" | "tempBuffers" | "workMem" | "replacementSortTuples" | "tempFileLimit" | "backendFlushAfter" | "oldSnapshotThreshold" | "maxStandbyStreamingDelay" | "cursorTupleFraction" | "fromCollapseLimit" | "joinCollapseLimit" | "logMinDurationStatement" | "logCheckpoints" | "logConnections" | "logDisconnections" | "logDuration" | "logLockWaits" | "logTempFiles" | "rowSecurity" | "statementTimeout" | "lockTimeout" | "idleInTransactionSessionTimeout" | "ginPendingListLimit" | "deadlockTimeout" | "maxLocksPerTransaction" | "maxPredLocksPerTransaction" | "arrayNulls" | "defaultWithOids" | "escapeStringWarning" | "loCompatPrivileges" | "operatorPrecedenceWarning" | "quoteAllIdentifiers" | "standardConformingStrings" | "synchronizeSeqscans" | "transformNullEquals" | "exitOnError" | "seqPageCost" | "randomPageCost" | "effectiveIoConcurrency" | "effectiveCacheSize" | "enableBitmapscan" | "enableHashagg" | "enableHashjoin" | "enableIndexscan" | "enableIndexonlyscan" | "enableMaterial" | "enableMergejoin" | "enableNestloop" | "enableSeqscan" | "enableSort" | "enableTidscan" | "maxParallelWorkers" | "maxParallelWorkersPerGather" | "recoveryMinApplyDelay">, never>>(object: I): PostgresqlHostConfig10;
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
