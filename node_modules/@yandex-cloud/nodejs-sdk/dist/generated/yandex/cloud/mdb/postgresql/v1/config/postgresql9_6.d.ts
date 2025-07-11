import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters whose detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/9.6/static/runtime-config).
 */
export interface Postgresqlconfig96 {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig9_6";
    maxConnections?: number;
    /** in bytes. */
    sharedBuffers?: number;
    /** in bytes. */
    tempBuffers?: number;
    maxPreparedTransactions?: number;
    /** in bytes. */
    workMem?: number;
    /** in bytes. */
    maintenanceWorkMem?: number;
    replacementSortTuples?: number;
    /** in bytes. */
    autovacuumWorkMem?: number;
    /** in bytes. */
    tempFileLimit?: number;
    /** in milliseconds. */
    vacuumCostDelay?: number;
    vacuumCostPageHit?: number;
    vacuumCostPageMiss?: number;
    vacuumCostPageDirty?: number;
    vacuumCostLimit?: number;
    /** in milliseconds. */
    bgwriterDelay?: number;
    bgwriterLruMaxpages?: number;
    bgwriterLruMultiplier?: number;
    bgwriterFlushAfter?: number;
    backendFlushAfter?: number;
    oldSnapshotThreshold?: number;
    walLevel: Postgresqlconfig96_WalLevel;
    synchronousCommit: Postgresqlconfig96_SynchronousCommit;
    /** in milliseconds. */
    checkpointTimeout?: number;
    /** Acceptable values are 0.0 to 1.0, inclusive. */
    checkpointCompletionTarget?: number;
    checkpointFlushAfter?: number;
    /** in bytes. */
    maxWalSize?: number;
    /** in bytes. */
    minWalSize?: number;
    /** in milliseconds. */
    maxStandbyStreamingDelay?: number;
    defaultStatisticsTarget?: number;
    constraintExclusion: Postgresqlconfig96_ConstraintExclusion;
    cursorTupleFraction?: number;
    fromCollapseLimit?: number;
    joinCollapseLimit?: number;
    forceParallelMode: Postgresqlconfig96_ForceParallelMode;
    clientMinMessages: Postgresqlconfig96_LogLevel;
    logMinMessages: Postgresqlconfig96_LogLevel;
    logMinErrorStatement: Postgresqlconfig96_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement?: number;
    logCheckpoints?: boolean;
    logConnections?: boolean;
    logDisconnections?: boolean;
    logDuration?: boolean;
    logErrorVerbosity: Postgresqlconfig96_LogErrorVerbosity;
    logLockWaits?: boolean;
    logStatement: Postgresqlconfig96_LogStatement;
    logTempFiles?: number;
    searchPath: string;
    rowSecurity?: boolean;
    defaultTransactionIsolation: Postgresqlconfig96_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout?: number;
    /** in milliseconds. */
    lockTimeout?: number;
    /** in milliseconds. */
    idleInTransactionSessionTimeout?: number;
    byteaOutput: Postgresqlconfig96_ByteaOutput;
    xmlbinary: Postgresqlconfig96_XmlBinary;
    xmloption: Postgresqlconfig96_XmlOption;
    /** in bytes. */
    ginPendingListLimit?: number;
    /** in milliseconds. */
    deadlockTimeout?: number;
    maxLocksPerTransaction?: number;
    maxPredLocksPerTransaction?: number;
    arrayNulls?: boolean;
    backslashQuote: Postgresqlconfig96_BackslashQuote;
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
    /** This option has been removed in PostgreSQL 10. */
    sqlInheritance?: boolean;
    autovacuumMaxWorkers?: number;
    autovacuumVacuumCostDelay?: number;
    autovacuumVacuumCostLimit?: number;
    /** in milliseconds. */
    autovacuumNaptime?: number;
    /** in milliseconds. */
    archiveTimeout?: number;
    trackActivityQuerySize?: number;
    effectiveIoConcurrency?: number;
    effectiveCacheSize?: number;
}
export declare enum Postgresqlconfig96_WalLevel {
    WAL_LEVEL_UNSPECIFIED = 0,
    WAL_LEVEL_REPLICA = 1,
    WAL_LEVEL_LOGICAL = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_WalLevelFromJSON(object: any): Postgresqlconfig96_WalLevel;
export declare function postgresqlconfig96_WalLevelToJSON(object: Postgresqlconfig96_WalLevel): string;
export declare enum Postgresqlconfig96_SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    SYNCHRONOUS_COMMIT_ON = 1,
    SYNCHRONOUS_COMMIT_OFF = 2,
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_SynchronousCommitFromJSON(object: any): Postgresqlconfig96_SynchronousCommit;
export declare function postgresqlconfig96_SynchronousCommitToJSON(object: Postgresqlconfig96_SynchronousCommit): string;
export declare enum Postgresqlconfig96_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_ConstraintExclusionFromJSON(object: any): Postgresqlconfig96_ConstraintExclusion;
export declare function postgresqlconfig96_ConstraintExclusionToJSON(object: Postgresqlconfig96_ConstraintExclusion): string;
export declare enum Postgresqlconfig96_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_ForceParallelModeFromJSON(object: any): Postgresqlconfig96_ForceParallelMode;
export declare function postgresqlconfig96_ForceParallelModeToJSON(object: Postgresqlconfig96_ForceParallelMode): string;
export declare enum Postgresqlconfig96_LogLevel {
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
export declare function postgresqlconfig96_LogLevelFromJSON(object: any): Postgresqlconfig96_LogLevel;
export declare function postgresqlconfig96_LogLevelToJSON(object: Postgresqlconfig96_LogLevel): string;
export declare enum Postgresqlconfig96_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_LogErrorVerbosityFromJSON(object: any): Postgresqlconfig96_LogErrorVerbosity;
export declare function postgresqlconfig96_LogErrorVerbosityToJSON(object: Postgresqlconfig96_LogErrorVerbosity): string;
export declare enum Postgresqlconfig96_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_LogStatementFromJSON(object: any): Postgresqlconfig96_LogStatement;
export declare function postgresqlconfig96_LogStatementToJSON(object: Postgresqlconfig96_LogStatement): string;
export declare enum Postgresqlconfig96_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_TransactionIsolationFromJSON(object: any): Postgresqlconfig96_TransactionIsolation;
export declare function postgresqlconfig96_TransactionIsolationToJSON(object: Postgresqlconfig96_TransactionIsolation): string;
export declare enum Postgresqlconfig96_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_ByteaOutputFromJSON(object: any): Postgresqlconfig96_ByteaOutput;
export declare function postgresqlconfig96_ByteaOutputToJSON(object: Postgresqlconfig96_ByteaOutput): string;
export declare enum Postgresqlconfig96_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_XmlBinaryFromJSON(object: any): Postgresqlconfig96_XmlBinary;
export declare function postgresqlconfig96_XmlBinaryToJSON(object: Postgresqlconfig96_XmlBinary): string;
export declare enum Postgresqlconfig96_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_XmlOptionFromJSON(object: any): Postgresqlconfig96_XmlOption;
export declare function postgresqlconfig96_XmlOptionToJSON(object: Postgresqlconfig96_XmlOption): string;
export declare enum Postgresqlconfig96_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_BackslashQuoteFromJSON(object: any): Postgresqlconfig96_BackslashQuote;
export declare function postgresqlconfig96_BackslashQuoteToJSON(object: Postgresqlconfig96_BackslashQuote): string;
export interface Postgresqlconfigset96 {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet9_6";
    /**
     * Effective settings for a PostgreSQL 9.6 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Postgresqlconfig96;
    /** User-defined settings for a PostgreSQL 9.6 cluster. */
    userConfig?: Postgresqlconfig96;
    /** Default configuration for a PostgreSQL 9.6 cluster. */
    defaultConfig?: Postgresqlconfig96;
}
export declare const Postgresqlconfig96: {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig9_6";
    encode(message: Postgresqlconfig96, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Postgresqlconfig96;
    fromJSON(object: any): Postgresqlconfig96;
    toJSON(message: Postgresqlconfig96): unknown;
    fromPartial<I extends {
        maxConnections?: number | undefined;
        logStatement?: Postgresqlconfig96_LogStatement | undefined;
        maxPreparedTransactions?: number | undefined;
        logErrorVerbosity?: Postgresqlconfig96_LogErrorVerbosity | undefined;
        walLevel?: Postgresqlconfig96_WalLevel | undefined;
        synchronousCommit?: Postgresqlconfig96_SynchronousCommit | undefined;
        constraintExclusion?: Postgresqlconfig96_ConstraintExclusion | undefined;
        forceParallelMode?: Postgresqlconfig96_ForceParallelMode | undefined;
        clientMinMessages?: Postgresqlconfig96_LogLevel | undefined;
        logMinMessages?: Postgresqlconfig96_LogLevel | undefined;
        logMinErrorStatement?: Postgresqlconfig96_LogLevel | undefined;
        searchPath?: string | undefined;
        defaultTransactionIsolation?: Postgresqlconfig96_TransactionIsolation | undefined;
        byteaOutput?: Postgresqlconfig96_ByteaOutput | undefined;
        xmlbinary?: Postgresqlconfig96_XmlBinary | undefined;
        xmloption?: Postgresqlconfig96_XmlOption | undefined;
        backslashQuote?: Postgresqlconfig96_BackslashQuote | undefined;
        sharedBuffers?: number | undefined;
        tempBuffers?: number | undefined;
        workMem?: number | undefined;
        maintenanceWorkMem?: number | undefined;
        replacementSortTuples?: number | undefined;
        autovacuumWorkMem?: number | undefined;
        tempFileLimit?: number | undefined;
        vacuumCostDelay?: number | undefined;
        vacuumCostPageHit?: number | undefined;
        vacuumCostPageMiss?: number | undefined;
        vacuumCostPageDirty?: number | undefined;
        vacuumCostLimit?: number | undefined;
        bgwriterDelay?: number | undefined;
        bgwriterLruMaxpages?: number | undefined;
        bgwriterLruMultiplier?: number | undefined;
        bgwriterFlushAfter?: number | undefined;
        backendFlushAfter?: number | undefined;
        oldSnapshotThreshold?: number | undefined;
        checkpointTimeout?: number | undefined;
        checkpointCompletionTarget?: number | undefined;
        checkpointFlushAfter?: number | undefined;
        maxWalSize?: number | undefined;
        minWalSize?: number | undefined;
        maxStandbyStreamingDelay?: number | undefined;
        defaultStatisticsTarget?: number | undefined;
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
        sqlInheritance?: boolean | undefined;
        autovacuumMaxWorkers?: number | undefined;
        autovacuumVacuumCostDelay?: number | undefined;
        autovacuumVacuumCostLimit?: number | undefined;
        autovacuumNaptime?: number | undefined;
        archiveTimeout?: number | undefined;
        trackActivityQuerySize?: number | undefined;
        effectiveIoConcurrency?: number | undefined;
        effectiveCacheSize?: number | undefined;
    } & {
        maxConnections?: number | undefined;
        logStatement?: Postgresqlconfig96_LogStatement | undefined;
        maxPreparedTransactions?: number | undefined;
        logErrorVerbosity?: Postgresqlconfig96_LogErrorVerbosity | undefined;
        walLevel?: Postgresqlconfig96_WalLevel | undefined;
        synchronousCommit?: Postgresqlconfig96_SynchronousCommit | undefined;
        constraintExclusion?: Postgresqlconfig96_ConstraintExclusion | undefined;
        forceParallelMode?: Postgresqlconfig96_ForceParallelMode | undefined;
        clientMinMessages?: Postgresqlconfig96_LogLevel | undefined;
        logMinMessages?: Postgresqlconfig96_LogLevel | undefined;
        logMinErrorStatement?: Postgresqlconfig96_LogLevel | undefined;
        searchPath?: string | undefined;
        defaultTransactionIsolation?: Postgresqlconfig96_TransactionIsolation | undefined;
        byteaOutput?: Postgresqlconfig96_ByteaOutput | undefined;
        xmlbinary?: Postgresqlconfig96_XmlBinary | undefined;
        xmloption?: Postgresqlconfig96_XmlOption | undefined;
        backslashQuote?: Postgresqlconfig96_BackslashQuote | undefined;
        sharedBuffers?: number | undefined;
        tempBuffers?: number | undefined;
        workMem?: number | undefined;
        maintenanceWorkMem?: number | undefined;
        replacementSortTuples?: number | undefined;
        autovacuumWorkMem?: number | undefined;
        tempFileLimit?: number | undefined;
        vacuumCostDelay?: number | undefined;
        vacuumCostPageHit?: number | undefined;
        vacuumCostPageMiss?: number | undefined;
        vacuumCostPageDirty?: number | undefined;
        vacuumCostLimit?: number | undefined;
        bgwriterDelay?: number | undefined;
        bgwriterLruMaxpages?: number | undefined;
        bgwriterLruMultiplier?: number | undefined;
        bgwriterFlushAfter?: number | undefined;
        backendFlushAfter?: number | undefined;
        oldSnapshotThreshold?: number | undefined;
        checkpointTimeout?: number | undefined;
        checkpointCompletionTarget?: number | undefined;
        checkpointFlushAfter?: number | undefined;
        maxWalSize?: number | undefined;
        minWalSize?: number | undefined;
        maxStandbyStreamingDelay?: number | undefined;
        defaultStatisticsTarget?: number | undefined;
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
        sqlInheritance?: boolean | undefined;
        autovacuumMaxWorkers?: number | undefined;
        autovacuumVacuumCostDelay?: number | undefined;
        autovacuumVacuumCostLimit?: number | undefined;
        autovacuumNaptime?: number | undefined;
        archiveTimeout?: number | undefined;
        trackActivityQuerySize?: number | undefined;
        effectiveIoConcurrency?: number | undefined;
        effectiveCacheSize?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxConnections" | "logStatement" | "maxPreparedTransactions" | "logErrorVerbosity" | "walLevel" | "synchronousCommit" | "constraintExclusion" | "forceParallelMode" | "clientMinMessages" | "logMinMessages" | "logMinErrorStatement" | "searchPath" | "defaultTransactionIsolation" | "byteaOutput" | "xmlbinary" | "xmloption" | "backslashQuote" | "sharedBuffers" | "tempBuffers" | "workMem" | "maintenanceWorkMem" | "replacementSortTuples" | "autovacuumWorkMem" | "tempFileLimit" | "vacuumCostDelay" | "vacuumCostPageHit" | "vacuumCostPageMiss" | "vacuumCostPageDirty" | "vacuumCostLimit" | "bgwriterDelay" | "bgwriterLruMaxpages" | "bgwriterLruMultiplier" | "bgwriterFlushAfter" | "backendFlushAfter" | "oldSnapshotThreshold" | "checkpointTimeout" | "checkpointCompletionTarget" | "checkpointFlushAfter" | "maxWalSize" | "minWalSize" | "maxStandbyStreamingDelay" | "defaultStatisticsTarget" | "cursorTupleFraction" | "fromCollapseLimit" | "joinCollapseLimit" | "logMinDurationStatement" | "logCheckpoints" | "logConnections" | "logDisconnections" | "logDuration" | "logLockWaits" | "logTempFiles" | "rowSecurity" | "statementTimeout" | "lockTimeout" | "idleInTransactionSessionTimeout" | "ginPendingListLimit" | "deadlockTimeout" | "maxLocksPerTransaction" | "maxPredLocksPerTransaction" | "arrayNulls" | "defaultWithOids" | "escapeStringWarning" | "loCompatPrivileges" | "operatorPrecedenceWarning" | "quoteAllIdentifiers" | "standardConformingStrings" | "synchronizeSeqscans" | "transformNullEquals" | "exitOnError" | "seqPageCost" | "randomPageCost" | "sqlInheritance" | "autovacuumMaxWorkers" | "autovacuumVacuumCostDelay" | "autovacuumVacuumCostLimit" | "autovacuumNaptime" | "archiveTimeout" | "trackActivityQuerySize" | "effectiveIoConcurrency" | "effectiveCacheSize">, never>>(object: I): Postgresqlconfig96;
};
export declare const Postgresqlconfigset96: {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet9_6";
    encode(message: Postgresqlconfigset96, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Postgresqlconfigset96;
    fromJSON(object: any): Postgresqlconfigset96;
    toJSON(message: Postgresqlconfigset96): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            maxConnections?: number | undefined;
            logStatement?: Postgresqlconfig96_LogStatement | undefined;
            maxPreparedTransactions?: number | undefined;
            logErrorVerbosity?: Postgresqlconfig96_LogErrorVerbosity | undefined;
            walLevel?: Postgresqlconfig96_WalLevel | undefined;
            synchronousCommit?: Postgresqlconfig96_SynchronousCommit | undefined;
            constraintExclusion?: Postgresqlconfig96_ConstraintExclusion | undefined;
            forceParallelMode?: Postgresqlconfig96_ForceParallelMode | undefined;
            clientMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinErrorStatement?: Postgresqlconfig96_LogLevel | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: Postgresqlconfig96_TransactionIsolation | undefined;
            byteaOutput?: Postgresqlconfig96_ByteaOutput | undefined;
            xmlbinary?: Postgresqlconfig96_XmlBinary | undefined;
            xmloption?: Postgresqlconfig96_XmlOption | undefined;
            backslashQuote?: Postgresqlconfig96_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            sqlInheritance?: boolean | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
        } | undefined;
        userConfig?: {
            maxConnections?: number | undefined;
            logStatement?: Postgresqlconfig96_LogStatement | undefined;
            maxPreparedTransactions?: number | undefined;
            logErrorVerbosity?: Postgresqlconfig96_LogErrorVerbosity | undefined;
            walLevel?: Postgresqlconfig96_WalLevel | undefined;
            synchronousCommit?: Postgresqlconfig96_SynchronousCommit | undefined;
            constraintExclusion?: Postgresqlconfig96_ConstraintExclusion | undefined;
            forceParallelMode?: Postgresqlconfig96_ForceParallelMode | undefined;
            clientMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinErrorStatement?: Postgresqlconfig96_LogLevel | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: Postgresqlconfig96_TransactionIsolation | undefined;
            byteaOutput?: Postgresqlconfig96_ByteaOutput | undefined;
            xmlbinary?: Postgresqlconfig96_XmlBinary | undefined;
            xmloption?: Postgresqlconfig96_XmlOption | undefined;
            backslashQuote?: Postgresqlconfig96_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            sqlInheritance?: boolean | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
        } | undefined;
        defaultConfig?: {
            maxConnections?: number | undefined;
            logStatement?: Postgresqlconfig96_LogStatement | undefined;
            maxPreparedTransactions?: number | undefined;
            logErrorVerbosity?: Postgresqlconfig96_LogErrorVerbosity | undefined;
            walLevel?: Postgresqlconfig96_WalLevel | undefined;
            synchronousCommit?: Postgresqlconfig96_SynchronousCommit | undefined;
            constraintExclusion?: Postgresqlconfig96_ConstraintExclusion | undefined;
            forceParallelMode?: Postgresqlconfig96_ForceParallelMode | undefined;
            clientMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinErrorStatement?: Postgresqlconfig96_LogLevel | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: Postgresqlconfig96_TransactionIsolation | undefined;
            byteaOutput?: Postgresqlconfig96_ByteaOutput | undefined;
            xmlbinary?: Postgresqlconfig96_XmlBinary | undefined;
            xmloption?: Postgresqlconfig96_XmlOption | undefined;
            backslashQuote?: Postgresqlconfig96_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            sqlInheritance?: boolean | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: Postgresqlconfig96_LogStatement | undefined;
            maxPreparedTransactions?: number | undefined;
            logErrorVerbosity?: Postgresqlconfig96_LogErrorVerbosity | undefined;
            walLevel?: Postgresqlconfig96_WalLevel | undefined;
            synchronousCommit?: Postgresqlconfig96_SynchronousCommit | undefined;
            constraintExclusion?: Postgresqlconfig96_ConstraintExclusion | undefined;
            forceParallelMode?: Postgresqlconfig96_ForceParallelMode | undefined;
            clientMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinErrorStatement?: Postgresqlconfig96_LogLevel | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: Postgresqlconfig96_TransactionIsolation | undefined;
            byteaOutput?: Postgresqlconfig96_ByteaOutput | undefined;
            xmlbinary?: Postgresqlconfig96_XmlBinary | undefined;
            xmloption?: Postgresqlconfig96_XmlOption | undefined;
            backslashQuote?: Postgresqlconfig96_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            sqlInheritance?: boolean | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: Postgresqlconfig96_LogStatement | undefined;
            maxPreparedTransactions?: number | undefined;
            logErrorVerbosity?: Postgresqlconfig96_LogErrorVerbosity | undefined;
            walLevel?: Postgresqlconfig96_WalLevel | undefined;
            synchronousCommit?: Postgresqlconfig96_SynchronousCommit | undefined;
            constraintExclusion?: Postgresqlconfig96_ConstraintExclusion | undefined;
            forceParallelMode?: Postgresqlconfig96_ForceParallelMode | undefined;
            clientMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinErrorStatement?: Postgresqlconfig96_LogLevel | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: Postgresqlconfig96_TransactionIsolation | undefined;
            byteaOutput?: Postgresqlconfig96_ByteaOutput | undefined;
            xmlbinary?: Postgresqlconfig96_XmlBinary | undefined;
            xmloption?: Postgresqlconfig96_XmlOption | undefined;
            backslashQuote?: Postgresqlconfig96_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            sqlInheritance?: boolean | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxPreparedTransactions" | "logErrorVerbosity" | "walLevel" | "synchronousCommit" | "constraintExclusion" | "forceParallelMode" | "clientMinMessages" | "logMinMessages" | "logMinErrorStatement" | "searchPath" | "defaultTransactionIsolation" | "byteaOutput" | "xmlbinary" | "xmloption" | "backslashQuote" | "sharedBuffers" | "tempBuffers" | "workMem" | "maintenanceWorkMem" | "replacementSortTuples" | "autovacuumWorkMem" | "tempFileLimit" | "vacuumCostDelay" | "vacuumCostPageHit" | "vacuumCostPageMiss" | "vacuumCostPageDirty" | "vacuumCostLimit" | "bgwriterDelay" | "bgwriterLruMaxpages" | "bgwriterLruMultiplier" | "bgwriterFlushAfter" | "backendFlushAfter" | "oldSnapshotThreshold" | "checkpointTimeout" | "checkpointCompletionTarget" | "checkpointFlushAfter" | "maxWalSize" | "minWalSize" | "maxStandbyStreamingDelay" | "defaultStatisticsTarget" | "cursorTupleFraction" | "fromCollapseLimit" | "joinCollapseLimit" | "logMinDurationStatement" | "logCheckpoints" | "logConnections" | "logDisconnections" | "logDuration" | "logLockWaits" | "logTempFiles" | "rowSecurity" | "statementTimeout" | "lockTimeout" | "idleInTransactionSessionTimeout" | "ginPendingListLimit" | "deadlockTimeout" | "maxLocksPerTransaction" | "maxPredLocksPerTransaction" | "arrayNulls" | "defaultWithOids" | "escapeStringWarning" | "loCompatPrivileges" | "operatorPrecedenceWarning" | "quoteAllIdentifiers" | "standardConformingStrings" | "synchronizeSeqscans" | "transformNullEquals" | "exitOnError" | "seqPageCost" | "randomPageCost" | "sqlInheritance" | "autovacuumMaxWorkers" | "autovacuumVacuumCostDelay" | "autovacuumVacuumCostLimit" | "autovacuumNaptime" | "archiveTimeout" | "trackActivityQuerySize" | "effectiveIoConcurrency" | "effectiveCacheSize">, never>) | undefined;
        userConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: Postgresqlconfig96_LogStatement | undefined;
            maxPreparedTransactions?: number | undefined;
            logErrorVerbosity?: Postgresqlconfig96_LogErrorVerbosity | undefined;
            walLevel?: Postgresqlconfig96_WalLevel | undefined;
            synchronousCommit?: Postgresqlconfig96_SynchronousCommit | undefined;
            constraintExclusion?: Postgresqlconfig96_ConstraintExclusion | undefined;
            forceParallelMode?: Postgresqlconfig96_ForceParallelMode | undefined;
            clientMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinErrorStatement?: Postgresqlconfig96_LogLevel | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: Postgresqlconfig96_TransactionIsolation | undefined;
            byteaOutput?: Postgresqlconfig96_ByteaOutput | undefined;
            xmlbinary?: Postgresqlconfig96_XmlBinary | undefined;
            xmloption?: Postgresqlconfig96_XmlOption | undefined;
            backslashQuote?: Postgresqlconfig96_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            sqlInheritance?: boolean | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: Postgresqlconfig96_LogStatement | undefined;
            maxPreparedTransactions?: number | undefined;
            logErrorVerbosity?: Postgresqlconfig96_LogErrorVerbosity | undefined;
            walLevel?: Postgresqlconfig96_WalLevel | undefined;
            synchronousCommit?: Postgresqlconfig96_SynchronousCommit | undefined;
            constraintExclusion?: Postgresqlconfig96_ConstraintExclusion | undefined;
            forceParallelMode?: Postgresqlconfig96_ForceParallelMode | undefined;
            clientMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinErrorStatement?: Postgresqlconfig96_LogLevel | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: Postgresqlconfig96_TransactionIsolation | undefined;
            byteaOutput?: Postgresqlconfig96_ByteaOutput | undefined;
            xmlbinary?: Postgresqlconfig96_XmlBinary | undefined;
            xmloption?: Postgresqlconfig96_XmlOption | undefined;
            backslashQuote?: Postgresqlconfig96_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            sqlInheritance?: boolean | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxPreparedTransactions" | "logErrorVerbosity" | "walLevel" | "synchronousCommit" | "constraintExclusion" | "forceParallelMode" | "clientMinMessages" | "logMinMessages" | "logMinErrorStatement" | "searchPath" | "defaultTransactionIsolation" | "byteaOutput" | "xmlbinary" | "xmloption" | "backslashQuote" | "sharedBuffers" | "tempBuffers" | "workMem" | "maintenanceWorkMem" | "replacementSortTuples" | "autovacuumWorkMem" | "tempFileLimit" | "vacuumCostDelay" | "vacuumCostPageHit" | "vacuumCostPageMiss" | "vacuumCostPageDirty" | "vacuumCostLimit" | "bgwriterDelay" | "bgwriterLruMaxpages" | "bgwriterLruMultiplier" | "bgwriterFlushAfter" | "backendFlushAfter" | "oldSnapshotThreshold" | "checkpointTimeout" | "checkpointCompletionTarget" | "checkpointFlushAfter" | "maxWalSize" | "minWalSize" | "maxStandbyStreamingDelay" | "defaultStatisticsTarget" | "cursorTupleFraction" | "fromCollapseLimit" | "joinCollapseLimit" | "logMinDurationStatement" | "logCheckpoints" | "logConnections" | "logDisconnections" | "logDuration" | "logLockWaits" | "logTempFiles" | "rowSecurity" | "statementTimeout" | "lockTimeout" | "idleInTransactionSessionTimeout" | "ginPendingListLimit" | "deadlockTimeout" | "maxLocksPerTransaction" | "maxPredLocksPerTransaction" | "arrayNulls" | "defaultWithOids" | "escapeStringWarning" | "loCompatPrivileges" | "operatorPrecedenceWarning" | "quoteAllIdentifiers" | "standardConformingStrings" | "synchronizeSeqscans" | "transformNullEquals" | "exitOnError" | "seqPageCost" | "randomPageCost" | "sqlInheritance" | "autovacuumMaxWorkers" | "autovacuumVacuumCostDelay" | "autovacuumVacuumCostLimit" | "autovacuumNaptime" | "archiveTimeout" | "trackActivityQuerySize" | "effectiveIoConcurrency" | "effectiveCacheSize">, never>) | undefined;
        defaultConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: Postgresqlconfig96_LogStatement | undefined;
            maxPreparedTransactions?: number | undefined;
            logErrorVerbosity?: Postgresqlconfig96_LogErrorVerbosity | undefined;
            walLevel?: Postgresqlconfig96_WalLevel | undefined;
            synchronousCommit?: Postgresqlconfig96_SynchronousCommit | undefined;
            constraintExclusion?: Postgresqlconfig96_ConstraintExclusion | undefined;
            forceParallelMode?: Postgresqlconfig96_ForceParallelMode | undefined;
            clientMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinErrorStatement?: Postgresqlconfig96_LogLevel | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: Postgresqlconfig96_TransactionIsolation | undefined;
            byteaOutput?: Postgresqlconfig96_ByteaOutput | undefined;
            xmlbinary?: Postgresqlconfig96_XmlBinary | undefined;
            xmloption?: Postgresqlconfig96_XmlOption | undefined;
            backslashQuote?: Postgresqlconfig96_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            sqlInheritance?: boolean | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: Postgresqlconfig96_LogStatement | undefined;
            maxPreparedTransactions?: number | undefined;
            logErrorVerbosity?: Postgresqlconfig96_LogErrorVerbosity | undefined;
            walLevel?: Postgresqlconfig96_WalLevel | undefined;
            synchronousCommit?: Postgresqlconfig96_SynchronousCommit | undefined;
            constraintExclusion?: Postgresqlconfig96_ConstraintExclusion | undefined;
            forceParallelMode?: Postgresqlconfig96_ForceParallelMode | undefined;
            clientMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinMessages?: Postgresqlconfig96_LogLevel | undefined;
            logMinErrorStatement?: Postgresqlconfig96_LogLevel | undefined;
            searchPath?: string | undefined;
            defaultTransactionIsolation?: Postgresqlconfig96_TransactionIsolation | undefined;
            byteaOutput?: Postgresqlconfig96_ByteaOutput | undefined;
            xmlbinary?: Postgresqlconfig96_XmlBinary | undefined;
            xmloption?: Postgresqlconfig96_XmlOption | undefined;
            backslashQuote?: Postgresqlconfig96_BackslashQuote | undefined;
            sharedBuffers?: number | undefined;
            tempBuffers?: number | undefined;
            workMem?: number | undefined;
            maintenanceWorkMem?: number | undefined;
            replacementSortTuples?: number | undefined;
            autovacuumWorkMem?: number | undefined;
            tempFileLimit?: number | undefined;
            vacuumCostDelay?: number | undefined;
            vacuumCostPageHit?: number | undefined;
            vacuumCostPageMiss?: number | undefined;
            vacuumCostPageDirty?: number | undefined;
            vacuumCostLimit?: number | undefined;
            bgwriterDelay?: number | undefined;
            bgwriterLruMaxpages?: number | undefined;
            bgwriterLruMultiplier?: number | undefined;
            bgwriterFlushAfter?: number | undefined;
            backendFlushAfter?: number | undefined;
            oldSnapshotThreshold?: number | undefined;
            checkpointTimeout?: number | undefined;
            checkpointCompletionTarget?: number | undefined;
            checkpointFlushAfter?: number | undefined;
            maxWalSize?: number | undefined;
            minWalSize?: number | undefined;
            maxStandbyStreamingDelay?: number | undefined;
            defaultStatisticsTarget?: number | undefined;
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
            sqlInheritance?: boolean | undefined;
            autovacuumMaxWorkers?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumNaptime?: number | undefined;
            archiveTimeout?: number | undefined;
            trackActivityQuerySize?: number | undefined;
            effectiveIoConcurrency?: number | undefined;
            effectiveCacheSize?: number | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxPreparedTransactions" | "logErrorVerbosity" | "walLevel" | "synchronousCommit" | "constraintExclusion" | "forceParallelMode" | "clientMinMessages" | "logMinMessages" | "logMinErrorStatement" | "searchPath" | "defaultTransactionIsolation" | "byteaOutput" | "xmlbinary" | "xmloption" | "backslashQuote" | "sharedBuffers" | "tempBuffers" | "workMem" | "maintenanceWorkMem" | "replacementSortTuples" | "autovacuumWorkMem" | "tempFileLimit" | "vacuumCostDelay" | "vacuumCostPageHit" | "vacuumCostPageMiss" | "vacuumCostPageDirty" | "vacuumCostLimit" | "bgwriterDelay" | "bgwriterLruMaxpages" | "bgwriterLruMultiplier" | "bgwriterFlushAfter" | "backendFlushAfter" | "oldSnapshotThreshold" | "checkpointTimeout" | "checkpointCompletionTarget" | "checkpointFlushAfter" | "maxWalSize" | "minWalSize" | "maxStandbyStreamingDelay" | "defaultStatisticsTarget" | "cursorTupleFraction" | "fromCollapseLimit" | "joinCollapseLimit" | "logMinDurationStatement" | "logCheckpoints" | "logConnections" | "logDisconnections" | "logDuration" | "logLockWaits" | "logTempFiles" | "rowSecurity" | "statementTimeout" | "lockTimeout" | "idleInTransactionSessionTimeout" | "ginPendingListLimit" | "deadlockTimeout" | "maxLocksPerTransaction" | "maxPredLocksPerTransaction" | "arrayNulls" | "defaultWithOids" | "escapeStringWarning" | "loCompatPrivileges" | "operatorPrecedenceWarning" | "quoteAllIdentifiers" | "standardConformingStrings" | "synchronizeSeqscans" | "transformNullEquals" | "exitOnError" | "seqPageCost" | "randomPageCost" | "sqlInheritance" | "autovacuumMaxWorkers" | "autovacuumVacuumCostDelay" | "autovacuumVacuumCostLimit" | "autovacuumNaptime" | "archiveTimeout" | "trackActivityQuerySize" | "effectiveIoConcurrency" | "effectiveCacheSize">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Postgresqlconfigset96;
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
