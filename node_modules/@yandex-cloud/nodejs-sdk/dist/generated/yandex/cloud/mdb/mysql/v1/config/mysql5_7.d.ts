import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1.config";
/** Options and structure of `MysqlConfig5_7` reflects MySQL 5.7 configuration file. */
export interface Mysqlconfig57 {
    $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig5_7";
    /**
     * Size of the InnoDB buffer pool used for caching table and index data.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_buffer_pool_size) for details.
     */
    innodbBufferPoolSize?: number;
    /**
     * The maximum permitted number of simultaneous client connections.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_connections) for details.
     */
    maxConnections?: number;
    /**
     * Time that it takes to process a query before it is considered slow.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_long_query_time) for details.
     */
    longQueryTime?: number;
    /**
     * Enable writing of general query log of MySQL.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_general_log) for details.
     */
    generalLog?: boolean;
    /**
     * Enable writing of audit log of MySQL.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/mysql-security-excerpt/5.7/en/audit-log-reference.html#audit-log-options-variables) for details.
     */
    auditLog?: boolean;
    /**
     * Server SQL mode of MySQL.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/sql-mode.html#sql-mode-setting) for details.
     */
    sqlMode: Mysqlconfig57_SQLMode[];
    /**
     * The maximum size in bytes of one packet.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_allowed_packet) for details.
     */
    maxAllowedPacket?: number;
    /**
     * Authentication plugin used in the managed MySQL cluster.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_default_authentication_plugin) for details.
     */
    defaultAuthenticationPlugin: Mysqlconfig57_AuthPlugin;
    /**
     * Transaction log flush behaviour.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_flush_log_at_trx_commit) for details.
     */
    innodbFlushLogAtTrxCommit?: number;
    /**
     * Max time in seconds for a transaction to wait for a row lock.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_lock_wait_timeout) for details.
     */
    innodbLockWaitTimeout?: number;
    /**
     * Default transaction isolation level.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_transaction_isolation) for details.
     */
    transactionIsolation: Mysqlconfig57_TransactionIsolation;
    /**
     * Print information about deadlocks in error log.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_print_all_deadlocks) for details.
     */
    innodbPrintAllDeadlocks?: boolean;
    /**
     * The number of seconds to wait for more data from a connection before aborting the read.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_net_read_timeout) for details.
     */
    netReadTimeout?: number;
    /**
     * The number of seconds to wait for a block to be written to a connection before aborting the write.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_net_write_timeout) for details.
     */
    netWriteTimeout?: number;
    /**
     * The maximum permitted result length in bytes for the GROUP_CONCAT() function.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_group_concat_max_len) for details.
     */
    groupConcatMaxLen?: number;
    /**
     * The maximum size of internal in-memory temporary tables.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_tmp_table_size) for details.
     */
    tmpTableSize?: number;
    /**
     * This variable sets the maximum size to which user-created MEMORY tables are permitted to grow.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_heap_table_size) for details.
     */
    maxHeapTableSize?: number;
    /**
     * The servers default time zone.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-options.html#option_mysqld_default-time-zone) for details.
     */
    defaultTimeZone: string;
    /**
     * The servers default character set.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_character_set_server) for details.
     */
    characterSetServer: string;
    /**
     * The server default collation.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_collation_server) for details.
     */
    collationServer: string;
    /**
     * Enables InnoDB adaptive hash index.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_adaptive_hash_index) for details.
     */
    innodbAdaptiveHashIndex?: boolean;
    /**
     * Enables the NUMA interleave memory policy for allocation of the InnoDB buffer pool.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_numa_interleave) for details.
     */
    innodbNumaInterleave?: boolean;
    /**
     * The size in bytes of the buffer that InnoDB uses to write to the log files on disk.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_log_buffer_size) for details.
     */
    innodbLogBufferSize?: number;
    /**
     * The size in bytes of the single InnoDB Redo log file.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_log_file_size) for details.
     */
    innodbLogFileSize?: number;
    /**
     * Limits IO available for InnoDB background tasks.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_io_capacity) for details.
     */
    innodbIoCapacity?: number;
    /**
     * Limits IO available for InnoDB background tasks.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_io_capacity_max) for details.
     */
    innodbIoCapacityMax?: number;
    /**
     * The number of I/O threads for read operations in InnoDB.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_read_io_threads) for details.
     */
    innodbReadIoThreads?: number;
    /**
     * The number of I/O threads for write operations in InnoDB.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_write_io_threads) for details.
     */
    innodbWriteIoThreads?: number;
    /**
     * The number of background threads devoted to the InnoDB purge operation.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_purge_threads) for details.
     */
    innodbPurgeThreads?: number;
    /**
     * Defines the maximum number of threads permitted inside of InnoDB.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_thread_concurrency) for details.
     */
    innodbThreadConcurrency?: number;
    /**
     * Limits the max size of InnoDB temp tablespace.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_temp_data_file_path) for details.
     */
    innodbTempDataFileMaxSize?: number;
    /**
     * A number of threads the server should cache for reuse.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_thread_cache_size) for details.
     */
    threadCacheSize?: number;
    /**
     * The stack size for each thread. The default is large enough for normal operation.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_thread_stack) for details.
     */
    threadStack?: number;
    /**
     * The minimum size of the buffer that is used for plain index scans, range index scans, and joins that do not use indexes and thus perform full table scans.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_join_buffer_size) for details.
     */
    joinBufferSize?: number;
    /**
     * Each session that must perform a sort allocates a buffer of this size.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_sort_buffer_size) for details.
     */
    sortBufferSize?: number;
    /**
     * The number of table definitions that can be stored in the definition cache.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_table_definition_cache) for details.
     */
    tableDefinitionCache?: number;
    /**
     * The number of open tables for all threads.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_table_open_cache) for details.
     */
    tableOpenCache?: number;
    /**
     * The number of open tables cache instances.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_table_open_cache_instances) for details.
     */
    tableOpenCacheInstances?: number;
    /**
     * Determines whether the server enables certain nonstandard behaviors for default values and NULL-value handling in TIMESTAMP columns.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_explicit_defaults_for_timestamp) for details.
     */
    explicitDefaultsForTimestamp?: boolean;
    /**
     * Can be used to control the operation of AUTO_INCREMENT columns.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-source.html#sysvar_auto_increment_increment) for details.
     */
    autoIncrementIncrement?: number;
    /**
     * Can be used to control the operation of AUTO_INCREMENT columns.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-source.html#sysvar_auto_increment_offset) for details.
     */
    autoIncrementOffset?: number;
    /**
     * Controls how often the MySQL server synchronizes the binary log to disk.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_sync_binlog) for details.
     */
    syncBinlog?: number;
    /**
     * The size of the cache to hold changes to the binary log during a transaction.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_cache_size) for details.
     */
    binlogCacheSize?: number;
    /**
     * Controls how many microseconds the binary log commit waits before synchronizing the binary log file to disk.
     *
     * See [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_group_commit_sync_delay) for details.
     */
    binlogGroupCommitSyncDelay?: number;
    /**
     * For MySQL row-based replication, this variable determines how row images are written to the binary log.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_row_image) for details.
     */
    binlogRowImage: Mysqlconfig57_BinlogRowImage;
    /**
     * When enabled, it causes the server to write informational log events such as row query log events into its binary log.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_rows_query_log_events) for details.
     */
    binlogRowsQueryLogEvents?: boolean;
    /**
     * The number of replica acknowledgments the source must receive per transaction before proceeding.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-source.html#sysvar_rpl_semi_sync_master_wait_for_slave_count) for details.
     */
    rplSemiSyncMasterWaitForSlaveCount?: number;
    /**
     * When using a multi-threaded replica, this variable specifies the policy used to decide which transactions are allowed to execute in parallel on the replica.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-replica.html#sysvar_slave_parallel_type) for details.
     */
    slaveParallelType: Mysqlconfig57_SlaveParallelType;
    /**
     * Sets the number of applier threads for executing replication transactions in parallel.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-replica.html#sysvar_slave_parallel_workers) for details.
     */
    slaveParallelWorkers?: number;
    /** The size of the binary log to hold. */
    mdbPreserveBinlogBytes?: number;
    /**
     * The number of seconds the server waits for activity on an interactive connection before closing it.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_interactive_timeout) for details.
     */
    interactiveTimeout?: number;
    /**
     * The number of seconds the server waits for activity on a noninteractive connection before closing it.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_wait_timeout) for details.
     */
    waitTimeout?: number;
    /** Replication lag threshold (seconds) which will switch MySQL to 'offline_mode = ON' to prevent users from reading stale data. */
    mdbOfflineModeEnableLag?: number;
    /**
     * Replication lag threshold (seconds) which will switch MySQL to 'offline_mode = OFF'.
     * Should be less than mdb_offline_mode_enable_lag value.
     */
    mdbOfflineModeDisableLag?: number;
    /**
     * The limit on memory consumption for the range optimizer.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_range_optimizer_max_mem_size) for details.
     */
    rangeOptimizerMaxMemSize?: number;
    /**
     * Manages slow query log.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_slow_query_log) for details.
     */
    slowQueryLog?: boolean;
    /**
     * Query execution time, after which query to be logged unconditionally, that is, `log_slow_rate_limit`` will not apply to it.
     *
     * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#slow_query_log_always_write_time) for details.
     */
    slowQueryLogAlwaysWriteTime?: number;
    /**
     * Specifies slow log granularity for `log_slow_rate_limit` values QUERY or SESSION.
     *
     * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_rate_type) for details.
     */
    logSlowRateType: Mysqlconfig57_LogSlowRateType;
    /**
     * Specifies what fraction of session/query should be logged. Logging is enabled for every nth session/query.
     *
     * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_rate_limit) for details.
     */
    logSlowRateLimit?: number;
    /**
     * When TRUE, statements executed by stored procedures are logged to the slow log.
     *
     * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_sp_statements) for details.
     */
    logSlowSpStatements?: boolean;
    /**
     * Filters the slow log by the query's execution plan.
     *
     * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_filter) for details.
     */
    logSlowFilter: Mysqlconfig57_LogSlowFilterType[];
    /**
     * Replication lag threshold (seconds) which allows replica to be promoted to master while executing "switchover from".
     * Should be less than mdb_offline_mode_disable_lag.
     */
    mdbPriorityChoiceMaxLag?: number;
    /**
     * Specifies the page size for InnoDB tablespaces.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_page_size).
     */
    innodbPageSize?: number;
    /**
     * The limit in bytes on the size of the temporary log files used during online DDL operations
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_online_alter_log_max_size).
     */
    innodbOnlineAlterLogMaxSize?: number;
    /**
     * Minimum length of words that are stored in an InnoDB FULLTEXT index
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_ft_min_token_size).
     */
    innodbFtMinTokenSize?: number;
    /**
     * Maximum length of words that are stored in an InnoDB FULLTEXT index
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_ft_max_token_size).
     */
    innodbFtMaxTokenSize?: number;
    /**
     * Table names storage and comparison strategy
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_lower_case_table_names).
     */
    lowerCaseTableNames?: number;
    /**
     * Manages MySQL 5.6 compatibility
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_show_compatibility_56).
     */
    showCompatibility56?: boolean;
    /**
     * The number of times that any given stored procedure may be called recursively.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_sp_recursion_depth).
     */
    maxSpRecursionDepth?: number;
    /**
     * The level of zlib compression to use for InnoDB compressed tables and indexes.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_compression_level).
     */
    innodbCompressionLevel?: number;
    /**
     * Specifies how the source mysqld generates the dependency information that it writes in the binary log to help replicas determine which transactions can be executed in parallel.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_transaction_dependency_tracking).
     */
    binlogTransactionDependencyTracking: Mysqlconfig57_BinlogTransactionDependencyTracking;
    /**
     * Config specific will be all changes to a table take effect immediately or you must use COMMIT to accept a transaction or ROLLBACK to cancel it.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_autocommit).
     */
    autocommit?: boolean;
    /**
     * Enables or disables periodic output for the standard InnoDB Monitor.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_status_output).
     */
    innodbStatusOutput?: boolean;
    /**
     * When innodb_strict_mode is enabled, InnoDB returns errors rather than warnings when checking for invalid or incompatible table options.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_strict_mode).
     */
    innodbStrictMode?: boolean;
    /**
     * Makes InnoDB to write information about all lock wait timeout errors into the log file.
     *
     * For details, see [Percona documentation for the variable](https://docs.percona.com/percona-server/5.7/diagnostics/innodb_show_status.html?highlight=innodb_print_lock_wait_timeout_info).
     */
    innodbPrintLockWaitTimeoutInfo?: boolean;
    /**
     * System variable specifies the verbosity for handling events intended for the error log
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_log_error_verbosity).
     */
    logErrorVerbosity?: number;
    /**
     * The maximum number of bytes of memory reserved per session for computation of normalized statement digests.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_digest_length).
     */
    maxDigestLength?: number;
    /**
     * Do not cache results that are larger than this number of bytes.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_query_cache_limit).
     */
    queryCacheLimit?: number;
    /**
     * The amount of memory allocated for caching query results.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_query_cache_size).
     */
    queryCacheSize?: number;
    /**
     * Set the query cache type.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_query_cache_type).
     */
    queryCacheType?: number;
    /**
     * // This variable specifies the timeout in seconds for attempts to acquire metadata locks
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_lock_wait_timeout).
     */
    lockWaitTimeout?: number;
    /**
     * This variable limits the total number of prepared statements in the server.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_prepared_stmt_count).
     */
    maxPreparedStmtCount?: number;
    /**
     * The system variable enables control over optimizer behavior.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_optimizer_switch)
     * https://dev.mysql.com/doc/refman/5.7/en/switchable-optimizations.html
     */
    optimizerSwitch: string;
    /**
     * The maximum depth of search performed by the query optimizer
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html)
     */
    optimizerSearchDepth?: number;
    /**
     * Enables and disables collection of query times
     *
     * For details, see [Percona documentation for the variable](https://docs.percona.com/percona-server/5.7/diagnostics/response_time_distribution.html#query_response_time_stats).
     */
    queryResponseTimeStats?: boolean;
}
export declare enum Mysqlconfig57_SQLMode {
    SQLMODE_UNSPECIFIED = 0,
    ALLOW_INVALID_DATES = 1,
    ANSI_QUOTES = 2,
    ERROR_FOR_DIVISION_BY_ZERO = 3,
    HIGH_NOT_PRECEDENCE = 4,
    IGNORE_SPACE = 5,
    NO_AUTO_VALUE_ON_ZERO = 6,
    NO_BACKSLASH_ESCAPES = 7,
    NO_ENGINE_SUBSTITUTION = 8,
    NO_UNSIGNED_SUBTRACTION = 9,
    NO_ZERO_DATE = 10,
    NO_ZERO_IN_DATE = 11,
    NO_FIELD_OPTIONS = 12,
    NO_KEY_OPTIONS = 13,
    NO_TABLE_OPTIONS = 14,
    ONLY_FULL_GROUP_BY = 15,
    PAD_CHAR_TO_FULL_LENGTH = 16,
    PIPES_AS_CONCAT = 17,
    REAL_AS_FLOAT = 18,
    STRICT_ALL_TABLES = 19,
    STRICT_TRANS_TABLES = 20,
    ANSI = 21,
    TRADITIONAL = 22,
    DB2 = 23,
    MAXDB = 24,
    MSSQL = 25,
    MYSQL323 = 26,
    MYSQL40 = 27,
    ORACLE = 28,
    POSTGRESQL = 29,
    NO_AUTO_CREATE_USER = 30,
    NO_DIR_IN_CREATE = 31,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig57_SQLModeFromJSON(object: any): Mysqlconfig57_SQLMode;
export declare function mysqlconfig57_SQLModeToJSON(object: Mysqlconfig57_SQLMode): string;
export declare enum Mysqlconfig57_AuthPlugin {
    AUTH_PLUGIN_UNSPECIFIED = 0,
    /** MYSQL_NATIVE_PASSWORD - Using [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/5.7/en/native-pluggable-authentication.html). */
    MYSQL_NATIVE_PASSWORD = 1,
    /** @deprecated */
    CACHING_SHA2_PASSWORD = 2,
    /** SHA256_PASSWORD - Using [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/5.7/en/sha256-pluggable-authentication.html). */
    SHA256_PASSWORD = 3,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig57_AuthPluginFromJSON(object: any): Mysqlconfig57_AuthPlugin;
export declare function mysqlconfig57_AuthPluginToJSON(object: Mysqlconfig57_AuthPlugin): string;
export declare enum Mysqlconfig57_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    READ_COMMITTED = 1,
    REPEATABLE_READ = 2,
    SERIALIZABLE = 3,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig57_TransactionIsolationFromJSON(object: any): Mysqlconfig57_TransactionIsolation;
export declare function mysqlconfig57_TransactionIsolationToJSON(object: Mysqlconfig57_TransactionIsolation): string;
export declare enum Mysqlconfig57_BinlogRowImage {
    BINLOG_ROW_IMAGE_UNSPECIFIED = 0,
    FULL = 1,
    MINIMAL = 2,
    NOBLOB = 3,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig57_BinlogRowImageFromJSON(object: any): Mysqlconfig57_BinlogRowImage;
export declare function mysqlconfig57_BinlogRowImageToJSON(object: Mysqlconfig57_BinlogRowImage): string;
export declare enum Mysqlconfig57_SlaveParallelType {
    SLAVE_PARALLEL_TYPE_UNSPECIFIED = 0,
    DATABASE = 1,
    LOGICAL_CLOCK = 2,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig57_SlaveParallelTypeFromJSON(object: any): Mysqlconfig57_SlaveParallelType;
export declare function mysqlconfig57_SlaveParallelTypeToJSON(object: Mysqlconfig57_SlaveParallelType): string;
export declare enum Mysqlconfig57_LogSlowRateType {
    LOG_SLOW_RATE_TYPE_UNSPECIFIED = 0,
    SESSION = 1,
    QUERY = 2,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig57_LogSlowRateTypeFromJSON(object: any): Mysqlconfig57_LogSlowRateType;
export declare function mysqlconfig57_LogSlowRateTypeToJSON(object: Mysqlconfig57_LogSlowRateType): string;
export declare enum Mysqlconfig57_LogSlowFilterType {
    LOG_SLOW_FILTER_TYPE_UNSPECIFIED = 0,
    FULL_SCAN = 1,
    FULL_JOIN = 2,
    TMP_TABLE = 3,
    TMP_TABLE_ON_DISK = 4,
    FILESORT = 5,
    FILESORT_ON_DISK = 6,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig57_LogSlowFilterTypeFromJSON(object: any): Mysqlconfig57_LogSlowFilterType;
export declare function mysqlconfig57_LogSlowFilterTypeToJSON(object: Mysqlconfig57_LogSlowFilterType): string;
export declare enum Mysqlconfig57_BinlogTransactionDependencyTracking {
    BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED = 0,
    COMMIT_ORDER = 1,
    WRITESET = 2,
    WRITESET_SESSION = 3,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig57_BinlogTransactionDependencyTrackingFromJSON(object: any): Mysqlconfig57_BinlogTransactionDependencyTracking;
export declare function mysqlconfig57_BinlogTransactionDependencyTrackingToJSON(object: Mysqlconfig57_BinlogTransactionDependencyTracking): string;
export interface Mysqlconfigset57 {
    $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet5_7";
    /**
     * Effective settings for a MySQL 5.7 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mysqlconfig57;
    /** User-defined settings for a MySQL 5.7 cluster. */
    userConfig?: Mysqlconfig57;
    /** Default configuration for a MySQL 5.7 cluster. */
    defaultConfig?: Mysqlconfig57;
}
export declare const Mysqlconfig57: {
    $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig5_7";
    encode(message: Mysqlconfig57, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mysqlconfig57;
    fromJSON(object: any): Mysqlconfig57;
    toJSON(message: Mysqlconfig57): unknown;
    fromPartial<I extends {
        sqlMode?: Mysqlconfig57_SQLMode[] | undefined;
        maxConnections?: number | undefined;
        auditLog?: boolean | undefined;
        defaultAuthenticationPlugin?: Mysqlconfig57_AuthPlugin | undefined;
        transactionIsolation?: Mysqlconfig57_TransactionIsolation | undefined;
        defaultTimeZone?: string | undefined;
        characterSetServer?: string | undefined;
        collationServer?: string | undefined;
        binlogRowImage?: Mysqlconfig57_BinlogRowImage | undefined;
        slaveParallelType?: Mysqlconfig57_SlaveParallelType | undefined;
        logSlowRateType?: Mysqlconfig57_LogSlowRateType | undefined;
        logSlowFilter?: Mysqlconfig57_LogSlowFilterType[] | undefined;
        binlogTransactionDependencyTracking?: Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
        optimizerSwitch?: string | undefined;
        innodbBufferPoolSize?: number | undefined;
        longQueryTime?: number | undefined;
        generalLog?: boolean | undefined;
        maxAllowedPacket?: number | undefined;
        innodbFlushLogAtTrxCommit?: number | undefined;
        innodbLockWaitTimeout?: number | undefined;
        innodbPrintAllDeadlocks?: boolean | undefined;
        netReadTimeout?: number | undefined;
        netWriteTimeout?: number | undefined;
        groupConcatMaxLen?: number | undefined;
        tmpTableSize?: number | undefined;
        maxHeapTableSize?: number | undefined;
        innodbAdaptiveHashIndex?: boolean | undefined;
        innodbNumaInterleave?: boolean | undefined;
        innodbLogBufferSize?: number | undefined;
        innodbLogFileSize?: number | undefined;
        innodbIoCapacity?: number | undefined;
        innodbIoCapacityMax?: number | undefined;
        innodbReadIoThreads?: number | undefined;
        innodbWriteIoThreads?: number | undefined;
        innodbPurgeThreads?: number | undefined;
        innodbThreadConcurrency?: number | undefined;
        innodbTempDataFileMaxSize?: number | undefined;
        threadCacheSize?: number | undefined;
        threadStack?: number | undefined;
        joinBufferSize?: number | undefined;
        sortBufferSize?: number | undefined;
        tableDefinitionCache?: number | undefined;
        tableOpenCache?: number | undefined;
        tableOpenCacheInstances?: number | undefined;
        explicitDefaultsForTimestamp?: boolean | undefined;
        autoIncrementIncrement?: number | undefined;
        autoIncrementOffset?: number | undefined;
        syncBinlog?: number | undefined;
        binlogCacheSize?: number | undefined;
        binlogGroupCommitSyncDelay?: number | undefined;
        binlogRowsQueryLogEvents?: boolean | undefined;
        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
        slaveParallelWorkers?: number | undefined;
        mdbPreserveBinlogBytes?: number | undefined;
        interactiveTimeout?: number | undefined;
        waitTimeout?: number | undefined;
        mdbOfflineModeEnableLag?: number | undefined;
        mdbOfflineModeDisableLag?: number | undefined;
        rangeOptimizerMaxMemSize?: number | undefined;
        slowQueryLog?: boolean | undefined;
        slowQueryLogAlwaysWriteTime?: number | undefined;
        logSlowRateLimit?: number | undefined;
        logSlowSpStatements?: boolean | undefined;
        mdbPriorityChoiceMaxLag?: number | undefined;
        innodbPageSize?: number | undefined;
        innodbOnlineAlterLogMaxSize?: number | undefined;
        innodbFtMinTokenSize?: number | undefined;
        innodbFtMaxTokenSize?: number | undefined;
        lowerCaseTableNames?: number | undefined;
        showCompatibility56?: boolean | undefined;
        maxSpRecursionDepth?: number | undefined;
        innodbCompressionLevel?: number | undefined;
        autocommit?: boolean | undefined;
        innodbStatusOutput?: boolean | undefined;
        innodbStrictMode?: boolean | undefined;
        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
        logErrorVerbosity?: number | undefined;
        maxDigestLength?: number | undefined;
        queryCacheLimit?: number | undefined;
        queryCacheSize?: number | undefined;
        queryCacheType?: number | undefined;
        lockWaitTimeout?: number | undefined;
        maxPreparedStmtCount?: number | undefined;
        optimizerSearchDepth?: number | undefined;
        queryResponseTimeStats?: boolean | undefined;
    } & {
        sqlMode?: (Mysqlconfig57_SQLMode[] & Mysqlconfig57_SQLMode[] & Record<Exclude<keyof I["sqlMode"], "$type" | keyof Mysqlconfig57_SQLMode[]>, never>) | undefined;
        maxConnections?: number | undefined;
        auditLog?: boolean | undefined;
        defaultAuthenticationPlugin?: Mysqlconfig57_AuthPlugin | undefined;
        transactionIsolation?: Mysqlconfig57_TransactionIsolation | undefined;
        defaultTimeZone?: string | undefined;
        characterSetServer?: string | undefined;
        collationServer?: string | undefined;
        binlogRowImage?: Mysqlconfig57_BinlogRowImage | undefined;
        slaveParallelType?: Mysqlconfig57_SlaveParallelType | undefined;
        logSlowRateType?: Mysqlconfig57_LogSlowRateType | undefined;
        logSlowFilter?: (Mysqlconfig57_LogSlowFilterType[] & Mysqlconfig57_LogSlowFilterType[] & Record<Exclude<keyof I["logSlowFilter"], "$type" | keyof Mysqlconfig57_LogSlowFilterType[]>, never>) | undefined;
        binlogTransactionDependencyTracking?: Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
        optimizerSwitch?: string | undefined;
        innodbBufferPoolSize?: number | undefined;
        longQueryTime?: number | undefined;
        generalLog?: boolean | undefined;
        maxAllowedPacket?: number | undefined;
        innodbFlushLogAtTrxCommit?: number | undefined;
        innodbLockWaitTimeout?: number | undefined;
        innodbPrintAllDeadlocks?: boolean | undefined;
        netReadTimeout?: number | undefined;
        netWriteTimeout?: number | undefined;
        groupConcatMaxLen?: number | undefined;
        tmpTableSize?: number | undefined;
        maxHeapTableSize?: number | undefined;
        innodbAdaptiveHashIndex?: boolean | undefined;
        innodbNumaInterleave?: boolean | undefined;
        innodbLogBufferSize?: number | undefined;
        innodbLogFileSize?: number | undefined;
        innodbIoCapacity?: number | undefined;
        innodbIoCapacityMax?: number | undefined;
        innodbReadIoThreads?: number | undefined;
        innodbWriteIoThreads?: number | undefined;
        innodbPurgeThreads?: number | undefined;
        innodbThreadConcurrency?: number | undefined;
        innodbTempDataFileMaxSize?: number | undefined;
        threadCacheSize?: number | undefined;
        threadStack?: number | undefined;
        joinBufferSize?: number | undefined;
        sortBufferSize?: number | undefined;
        tableDefinitionCache?: number | undefined;
        tableOpenCache?: number | undefined;
        tableOpenCacheInstances?: number | undefined;
        explicitDefaultsForTimestamp?: boolean | undefined;
        autoIncrementIncrement?: number | undefined;
        autoIncrementOffset?: number | undefined;
        syncBinlog?: number | undefined;
        binlogCacheSize?: number | undefined;
        binlogGroupCommitSyncDelay?: number | undefined;
        binlogRowsQueryLogEvents?: boolean | undefined;
        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
        slaveParallelWorkers?: number | undefined;
        mdbPreserveBinlogBytes?: number | undefined;
        interactiveTimeout?: number | undefined;
        waitTimeout?: number | undefined;
        mdbOfflineModeEnableLag?: number | undefined;
        mdbOfflineModeDisableLag?: number | undefined;
        rangeOptimizerMaxMemSize?: number | undefined;
        slowQueryLog?: boolean | undefined;
        slowQueryLogAlwaysWriteTime?: number | undefined;
        logSlowRateLimit?: number | undefined;
        logSlowSpStatements?: boolean | undefined;
        mdbPriorityChoiceMaxLag?: number | undefined;
        innodbPageSize?: number | undefined;
        innodbOnlineAlterLogMaxSize?: number | undefined;
        innodbFtMinTokenSize?: number | undefined;
        innodbFtMaxTokenSize?: number | undefined;
        lowerCaseTableNames?: number | undefined;
        showCompatibility56?: boolean | undefined;
        maxSpRecursionDepth?: number | undefined;
        innodbCompressionLevel?: number | undefined;
        autocommit?: boolean | undefined;
        innodbStatusOutput?: boolean | undefined;
        innodbStrictMode?: boolean | undefined;
        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
        logErrorVerbosity?: number | undefined;
        maxDigestLength?: number | undefined;
        queryCacheLimit?: number | undefined;
        queryCacheSize?: number | undefined;
        queryCacheType?: number | undefined;
        lockWaitTimeout?: number | undefined;
        maxPreparedStmtCount?: number | undefined;
        optimizerSearchDepth?: number | undefined;
        queryResponseTimeStats?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "showCompatibility56" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "queryCacheLimit" | "queryCacheSize" | "queryCacheType" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "queryResponseTimeStats">, never>>(object: I): Mysqlconfig57;
};
export declare const Mysqlconfigset57: {
    $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet5_7";
    encode(message: Mysqlconfigset57, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mysqlconfigset57;
    fromJSON(object: any): Mysqlconfigset57;
    toJSON(message: Mysqlconfigset57): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            sqlMode?: Mysqlconfig57_SQLMode[] | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: Mysqlconfig57_LogSlowFilterType[] | undefined;
            binlogTransactionDependencyTracking?: Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } | undefined;
        userConfig?: {
            sqlMode?: Mysqlconfig57_SQLMode[] | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: Mysqlconfig57_LogSlowFilterType[] | undefined;
            binlogTransactionDependencyTracking?: Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } | undefined;
        defaultConfig?: {
            sqlMode?: Mysqlconfig57_SQLMode[] | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: Mysqlconfig57_LogSlowFilterType[] | undefined;
            binlogTransactionDependencyTracking?: Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            sqlMode?: Mysqlconfig57_SQLMode[] | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: Mysqlconfig57_LogSlowFilterType[] | undefined;
            binlogTransactionDependencyTracking?: Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } & {
            sqlMode?: (Mysqlconfig57_SQLMode[] & Mysqlconfig57_SQLMode[] & Record<Exclude<keyof I["effectiveConfig"]["sqlMode"], "$type" | keyof Mysqlconfig57_SQLMode[]>, never>) | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: (Mysqlconfig57_LogSlowFilterType[] & Mysqlconfig57_LogSlowFilterType[] & Record<Exclude<keyof I["effectiveConfig"]["logSlowFilter"], "$type" | keyof Mysqlconfig57_LogSlowFilterType[]>, never>) | undefined;
            binlogTransactionDependencyTracking?: Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "showCompatibility56" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "queryCacheLimit" | "queryCacheSize" | "queryCacheType" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "queryResponseTimeStats">, never>) | undefined;
        userConfig?: ({
            sqlMode?: Mysqlconfig57_SQLMode[] | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: Mysqlconfig57_LogSlowFilterType[] | undefined;
            binlogTransactionDependencyTracking?: Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } & {
            sqlMode?: (Mysqlconfig57_SQLMode[] & Mysqlconfig57_SQLMode[] & Record<Exclude<keyof I["userConfig"]["sqlMode"], "$type" | keyof Mysqlconfig57_SQLMode[]>, never>) | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: (Mysqlconfig57_LogSlowFilterType[] & Mysqlconfig57_LogSlowFilterType[] & Record<Exclude<keyof I["userConfig"]["logSlowFilter"], "$type" | keyof Mysqlconfig57_LogSlowFilterType[]>, never>) | undefined;
            binlogTransactionDependencyTracking?: Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "showCompatibility56" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "queryCacheLimit" | "queryCacheSize" | "queryCacheType" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "queryResponseTimeStats">, never>) | undefined;
        defaultConfig?: ({
            sqlMode?: Mysqlconfig57_SQLMode[] | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: Mysqlconfig57_LogSlowFilterType[] | undefined;
            binlogTransactionDependencyTracking?: Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } & {
            sqlMode?: (Mysqlconfig57_SQLMode[] & Mysqlconfig57_SQLMode[] & Record<Exclude<keyof I["defaultConfig"]["sqlMode"], "$type" | keyof Mysqlconfig57_SQLMode[]>, never>) | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: (Mysqlconfig57_LogSlowFilterType[] & Mysqlconfig57_LogSlowFilterType[] & Record<Exclude<keyof I["defaultConfig"]["logSlowFilter"], "$type" | keyof Mysqlconfig57_LogSlowFilterType[]>, never>) | undefined;
            binlogTransactionDependencyTracking?: Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "showCompatibility56" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "queryCacheLimit" | "queryCacheSize" | "queryCacheType" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "queryResponseTimeStats">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Mysqlconfigset57;
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
