import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1.config";
/**
 * ClickHouse configuration options. Detailed description for each set of options
 * is available in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server_settings/settings/).
 *
 * Any options not listed here are not supported.
 */
export interface ClickhouseConfig {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig";
    /** Logging level for the ClickHouse cluster. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
    logLevel: ClickhouseConfig_LogLevel;
    /**
     * Settings for the MergeTree engine.
     * See description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server_settings/settings/#merge_tree).
     */
    mergeTree?: ClickhouseConfig_MergeTree;
    /**
     * Compression settings for the ClickHouse cluster.
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server_settings/settings/#compression).
     */
    compression: ClickhouseConfig_Compression[];
    /**
     * Configuration of external dictionaries to be used by the ClickHouse cluster.
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts/).
     */
    dictionaries: ClickhouseConfig_ExternalDictionary[];
    /**
     * Settings for thinning Graphite data.
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server_settings/settings/#server_settings-graphite_rollup).
     */
    graphiteRollup: ClickhouseConfig_GraphiteRollup[];
    kafka?: ClickhouseConfig_Kafka;
    kafkaTopics: ClickhouseConfig_KafkaTopic[];
    rabbitmq?: ClickhouseConfig_Rabbitmq;
    /** Maximum number of inbound connections. */
    maxConnections?: number;
    /** Maximum number of simultaneously processed requests. */
    maxConcurrentQueries?: number;
    /** Number of milliseconds that ClickHouse waits for incoming requests before closing the connection. */
    keepAliveTimeout?: number;
    /** Cache size (in bytes) for uncompressed data used by MergeTree tables. */
    uncompressedCacheSize?: number;
    /** Approximate size (in bytes) of the cache of "marks" used by MergeTree tables. */
    markCacheSize?: number;
    /** Maximum size of the table that can be deleted using a DROP query. */
    maxTableSizeToDrop?: number;
    /** Maximum size of the partition that can be deleted using a DROP query. */
    maxPartitionSizeToDrop?: number;
    /**
     * The setting is deprecated and has no effect.
     *
     * @deprecated
     */
    builtinDictionariesReloadInterval?: number;
    /** The server's time zone to be used in DateTime fields conversions. Specified as an IANA identifier. */
    timezone: string;
    /** Address of the archive with the user geobase in Object Storage. */
    geobaseUri: string;
    /**
     * The maximum size that query_log can grow to before old data will be removed. If set to 0, automatic removal of
     * query_log data based on size is disabled.
     */
    queryLogRetentionSize?: number;
    /**
     * The maximum time that query_log records will be retained before removal. If set to 0, automatic removal of
     * query_log data based on time is disabled.
     */
    queryLogRetentionTime?: number;
    /** Whether query_thread_log system table is enabled. */
    queryThreadLogEnabled?: boolean;
    /**
     * The maximum size that query_thread_log can grow to before old data will be removed. If set to 0, automatic removal of
     * query_thread_log data based on size is disabled.
     */
    queryThreadLogRetentionSize?: number;
    /**
     * The maximum time that query_thread_log records will be retained before removal. If set to 0, automatic removal of
     * query_thread_log data based on time is disabled.
     */
    queryThreadLogRetentionTime?: number;
    /**
     * The maximum size that part_log can grow to before old data will be removed. If set to 0, automatic removal of
     * part_log data based on size is disabled.
     */
    partLogRetentionSize?: number;
    /**
     * The maximum time that part_log records will be retained before removal. If set to 0, automatic removal of
     * part_log data based on time is disabled.
     */
    partLogRetentionTime?: number;
    /** Whether metric_log system table is enabled. */
    metricLogEnabled?: boolean;
    /**
     * The maximum size that metric_log can grow to before old data will be removed. If set to 0, automatic removal of
     * metric_log data based on size is disabled.
     */
    metricLogRetentionSize?: number;
    /**
     * The maximum time that metric_log records will be retained before removal. If set to 0, automatic removal of
     * metric_log data based on time is disabled.
     */
    metricLogRetentionTime?: number;
    /** Whether trace_log system table is enabled. */
    traceLogEnabled?: boolean;
    /**
     * The maximum size that trace_log can grow to before old data will be removed. If set to 0, automatic removal of
     * trace_log data based on size is disabled.
     */
    traceLogRetentionSize?: number;
    /**
     * The maximum time that trace_log records will be retained before removal. If set to 0, automatic removal of
     * trace_log data based on time is disabled.
     */
    traceLogRetentionTime?: number;
    /** Whether text_log system table is enabled. */
    textLogEnabled?: boolean;
    /**
     * The maximum size that text_log can grow to before old data will be removed. If set to 0, automatic removal of
     * text_log data based on size is disabled.
     */
    textLogRetentionSize?: number;
    /**
     * The maximum time that text_log records will be retained before removal. If set to 0, automatic removal of
     * text_log data based on time is disabled.
     */
    textLogRetentionTime?: number;
    /** Logging level for text_log system table. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
    textLogLevel: ClickhouseConfig_LogLevel;
    opentelemetrySpanLogEnabled?: boolean;
    backgroundPoolSize?: number;
    backgroundSchedulePoolSize?: number;
    /**
     * Sets the number of threads performing background fetches for tables with **ReplicatedMergeTree** engines. Default value: 8.
     *
     * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server-configuration-parameters/settings/#background_fetches_pool_size).
     */
    backgroundFetchesPoolSize?: number;
    backgroundMovePoolSize?: number;
    backgroundDistributedSchedulePoolSize?: number;
    backgroundBufferFlushSchedulePoolSize?: number;
    backgroundMessageBrokerSchedulePoolSize?: number;
    /**
     * The default database.
     *
     * To get a list of cluster databases, see [Yandex Managed ClickHouse documentation](https://cloud.yandex.com/en/docs/managed-clickhouse/operations/databases#list-db).
     */
    defaultDatabase?: string;
    /**
     * Sets the memory size (in bytes) for a stack trace at every peak allocation step. Default value: **4194304**.
     *
     * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server-configuration-parameters/settings/#total-memory-profiler-step).
     */
    totalMemoryProfilerStep?: number;
    totalMemoryTrackerSampleProbability?: number;
    /**
     * The maximum number of threads that will be used for performing a variety of operations (mostly garbage collection) for *MergeTree-engine tables in a background.
     * Default: 8
     * Min version: 21.11
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server-configuration-parameters/settings#background_common_pool_size)
     */
    backgroundCommonPoolSize?: number;
    /**
     * Sets a ratio between the number of threads and the number of background merges and mutations that can be executed concurrently. For example, if the ratio equals to 2 and background_pool_size is set to 16 then ClickHouse can execute 32 background merges concurrently. This is possible, because background operations could be suspended and postponed. This is needed to give small merges more execution priority. You can only increase this ratio at runtime. To lower it you have to restart the server. The same as for background_pool_size setting background_merges_mutations_concurrency_ratio could be applied from the default profile for backward compatibility.
     * Default: 2
     * Min_version: 21.11
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/server-configuration-parameters/settings#background_merges_mutations_concurrency_ratio)
     */
    backgroundMergesMutationsConcurrencyRatio?: number;
    /**
     * Default: false
     * Min version: 21.9
     */
    queryViewsLogEnabled?: boolean;
    /** Default: 0 */
    queryViewsLogRetentionSize?: number;
    queryViewsLogRetentionTime?: number;
    /**
     * Default: false
     * Min version: 20.11
     */
    asynchronousMetricLogEnabled?: boolean;
    /** Default: 0 */
    asynchronousMetricLogRetentionSize?: number;
    asynchronousMetricLogRetentionTime?: number;
    /**
     * Default: 0
     * Min version: 20.11
     */
    opentelemetrySpanLogRetentionSize?: number;
    opentelemetrySpanLogRetentionTime?: number;
    /**
     * Default: false
     * Min version: 21.11
     */
    sessionLogEnabled?: boolean;
    /** Default: 0 */
    sessionLogRetentionSize?: number;
    sessionLogRetentionTime?: number;
    /**
     * Default: false
     * Min version: 21.9
     */
    zookeeperLogEnabled?: boolean;
    /** Default: 0 */
    zookeeperLogRetentionSize?: number;
    zookeeperLogRetentionTime?: number;
    /**
     * Default: false
     * Min version: 22.10
     */
    asynchronousInsertLogEnabled?: boolean;
    /** Default: 0 */
    asynchronousInsertLogRetentionSize?: number;
    asynchronousInsertLogRetentionTime?: number;
    geobaseEnabled?: boolean;
}
export declare enum ClickhouseConfig_LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFORMATION = 3,
    WARNING = 4,
    ERROR = 5,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_LogLevelFromJSON(object: any): ClickhouseConfig_LogLevel;
export declare function clickhouseConfig_LogLevelToJSON(object: ClickhouseConfig_LogLevel): string;
/** Options specific to the MergeTree table engine. */
export interface ClickhouseConfig_MergeTree {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree";
    /** Number of blocks of hashes to keep in ZooKeeper. */
    replicatedDeduplicationWindow?: number;
    /** Period of time to keep blocks of hashes for. */
    replicatedDeduplicationWindowSeconds?: number;
    /** If table contains at least that many active parts in single partition, artificially slow down insert into table. */
    partsToDelayInsert?: number;
    /** If more than this number active parts in single partition, throw 'Too many parts ...' exception. */
    partsToThrowInsert?: number;
    inactivePartsToDelayInsert?: number;
    inactivePartsToThrowInsert?: number;
    /** How many tasks of merging and mutating parts are allowed simultaneously in ReplicatedMergeTree queue. */
    maxReplicatedMergesInQueue?: number;
    /**
     * If there is less than specified number of free entries in background pool (or replicated queue), start to lower
     * maximum size of merge to process.
     */
    numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number;
    /**
     * Maximum in total size of parts to merge, when there are minimum free threads in background pool (or entries
     * in replication queue).
     */
    maxBytesToMergeAtMinSpaceInPool?: number;
    maxBytesToMergeAtMaxSpaceInPool?: number;
    /**
     * Minimum number of bytes in a data part that can be stored in **Wide** format.
     *
     * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/#min_bytes_for_wide_part).
     */
    minBytesForWidePart?: number;
    /**
     * Minimum number of rows in a data part that can be stored in **Wide** format.
     *
     * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/#min_bytes_for_wide_part).
     */
    minRowsForWidePart?: number;
    /**
     * Enables or disables complete dropping of data parts where all rows are expired in MergeTree tables.
     *
     * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#ttl_only_drop_parts).
     */
    ttlOnlyDropParts?: boolean;
    allowRemoteFsZeroCopyReplication?: boolean;
    mergeWithTtlTimeout?: number;
    mergeWithRecompressionTtlTimeout?: number;
    maxPartsInTotal?: number;
    maxNumberOfMergesWithTtlInPool?: number;
    cleanupDelayPeriod?: number;
    numberOfFreeEntriesInPoolToExecuteMutation?: number;
    /**
     * The 'too many parts' check according to 'parts_to_delay_insert' and 'parts_to_throw_insert' will be active only if the average part size (in the relevant partition) is not larger than the specified threshold. If it is larger than the specified threshold, the INSERTs will be neither delayed or rejected. This allows to have hundreds of terabytes in a single table on a single server if the parts are successfully merged to larger parts. This does not affect the thresholds on inactive parts or total parts.
     * Default: 1 GiB
     * Min version: 22.10
     * See in-depth description in [ClickHouse GitHub](https://github.com/ClickHouse/ClickHouse/blob/f9558345e886876b9132d9c018e357f7fa9b22a3/src/Storages/MergeTree/MergeTreeSettings.h#L80)
     */
    maxAvgPartSizeForTooManyParts?: number;
    /**
     * Merge parts if every part in the range is older than the value of min_age_to_force_merge_seconds.
     * Default: 0 - disabled
     * Min_version: 22.10
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/merge-tree-settings#min_age_to_force_merge_seconds)
     */
    minAgeToForceMergeSeconds?: number;
    /**
     * Whether min_age_to_force_merge_seconds should be applied only on the entire partition and not on subset.
     * Default: false
     * Min_version: 22.11
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/merge-tree-settings#min_age_to_force_merge_seconds)
     */
    minAgeToForceMergeOnPartitionOnly?: boolean;
    /**
     * Sleep time for merge selecting when no part is selected. A lower setting triggers selecting tasks in background_schedule_pool frequently, which results in a large number of requests to ClickHouse Keeper in large-scale clusters.
     * Default: 5000
     * Min_version: 21.10
     * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#merge_selecting_sleep_ms)
     */
    mergeSelectingSleepMs?: number;
}
export interface ClickhouseConfig_Kafka {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka";
    securityProtocol: ClickhouseConfig_Kafka_SecurityProtocol;
    saslMechanism: ClickhouseConfig_Kafka_SaslMechanism;
    saslUsername: string;
    saslPassword: string;
    enableSslCertificateVerification?: boolean;
    maxPollIntervalMs?: number;
    sessionTimeoutMs?: number;
}
export declare enum ClickhouseConfig_Kafka_SecurityProtocol {
    SECURITY_PROTOCOL_UNSPECIFIED = 0,
    SECURITY_PROTOCOL_PLAINTEXT = 1,
    SECURITY_PROTOCOL_SSL = 2,
    SECURITY_PROTOCOL_SASL_PLAINTEXT = 3,
    SECURITY_PROTOCOL_SASL_SSL = 4,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_Kafka_SecurityProtocolFromJSON(object: any): ClickhouseConfig_Kafka_SecurityProtocol;
export declare function clickhouseConfig_Kafka_SecurityProtocolToJSON(object: ClickhouseConfig_Kafka_SecurityProtocol): string;
export declare enum ClickhouseConfig_Kafka_SaslMechanism {
    SASL_MECHANISM_UNSPECIFIED = 0,
    SASL_MECHANISM_GSSAPI = 1,
    SASL_MECHANISM_PLAIN = 2,
    SASL_MECHANISM_SCRAM_SHA_256 = 3,
    SASL_MECHANISM_SCRAM_SHA_512 = 4,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_Kafka_SaslMechanismFromJSON(object: any): ClickhouseConfig_Kafka_SaslMechanism;
export declare function clickhouseConfig_Kafka_SaslMechanismToJSON(object: ClickhouseConfig_Kafka_SaslMechanism): string;
export interface ClickhouseConfig_KafkaTopic {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic";
    name: string;
    settings?: ClickhouseConfig_Kafka;
}
export interface ClickhouseConfig_Rabbitmq {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq";
    /** [RabbitMQ](https://clickhouse.com/docs/en/engines/table-engines/integrations/rabbitmq/) username */
    username: string;
    /** [RabbitMQ](https://clickhouse.com/docs/en/engines/table-engines/integrations/rabbitmq/) password */
    password: string;
    /** [RabbitMQ](https://clickhouse.com/docs/en/engines/table-engines/integrations/rabbitmq/) virtual host */
    vhost: string;
}
export interface ClickhouseConfig_Compression {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression";
    /** Compression method to use for the specified combination of [min_part_size] and [min_part_size_ratio]. */
    method: ClickhouseConfig_Compression_Method;
    /** Minimum size of a part of a table. */
    minPartSize: number;
    /** Minimum ratio of a part relative to the size of all the data in the table. */
    minPartSizeRatio: number;
    level?: number;
}
export declare enum ClickhouseConfig_Compression_Method {
    METHOD_UNSPECIFIED = 0,
    /** LZ4 - [LZ4 compression algorithm](https://lz4.github.io/lz4/). */
    LZ4 = 1,
    /** ZSTD - [Zstandard compression algorithm](https://facebook.github.io/zstd/). */
    ZSTD = 2,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_Compression_MethodFromJSON(object: any): ClickhouseConfig_Compression_Method;
export declare function clickhouseConfig_Compression_MethodToJSON(object: ClickhouseConfig_Compression_Method): string;
export interface ClickhouseConfig_ExternalDictionary {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary";
    /** Name of the external dictionary. */
    name: string;
    /**
     * Set of attributes for the external dictionary.
     * For in-depth description, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_structure/).
     */
    structure?: ClickhouseConfig_ExternalDictionary_Structure;
    /**
     * Layout for storing the dictionary in memory.
     * For in-depth description, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_layout/).
     */
    layout?: ClickhouseConfig_ExternalDictionary_Layout;
    /** Fixed interval between dictionary updates. */
    fixedLifetime: number | undefined;
    /** Range of intervals between dictionary updates for ClickHouse to choose from. */
    lifetimeRange?: ClickhouseConfig_ExternalDictionary_Range | undefined;
    /** HTTP source for the dictionary. */
    httpSource?: ClickhouseConfig_ExternalDictionary_HttpSource | undefined;
    /** MySQL source for the dictionary. */
    mysqlSource?: ClickhouseConfig_ExternalDictionary_MysqlSource | undefined;
    /** ClickHouse source for the dictionary. */
    clickhouseSource?: ClickhouseConfig_ExternalDictionary_ClickhouseSource | undefined;
    /** MongoDB source for the dictionary. */
    mongodbSource?: ClickhouseConfig_ExternalDictionary_MongodbSource | undefined;
    /** PostgreSQL source for the dictionary. */
    postgresqlSource?: ClickhouseConfig_ExternalDictionary_PostgresqlSource | undefined;
}
export interface ClickhouseConfig_ExternalDictionary_HttpSource {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource";
    /** URL of the source dictionary available over HTTP. */
    url: string;
    /** The data format. Valid values are all formats supported by ClickHouse SQL dialect. */
    format: string;
}
export interface ClickhouseConfig_ExternalDictionary_MysqlSource {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource";
    /** Name of the MySQL database to connect to. */
    db: string;
    /** Name of the database table to use as a ClickHouse dictionary. */
    table: string;
    /** Default port to use when connecting to a replica of the dictionary source. */
    port: number;
    /** Name of the default user for replicas of the dictionary source. */
    user: string;
    /** Password of the default user for replicas of the dictionary source. */
    password: string;
    /** List of MySQL replicas of the database used as dictionary source. */
    replicas: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica[];
    /** Selection criteria for the data in the specified MySQL table. */
    where: string;
    /**
     * Query for checking the dictionary status, to pull only updated data.
     * For more details, see [ClickHouse documentation on dictionaries](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_lifetime/).
     */
    invalidateQuery: string;
}
export interface ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica";
    /** MySQL host of the replica. */
    host: string;
    /**
     * The priority of the replica that ClickHouse takes into account when connecting.
     * Replica with the highest priority should have this field set to the lowest number.
     */
    priority: number;
    /**
     * Port to use when connecting to the replica.
     * If a port is not specified for a replica, ClickHouse uses the port specified for the source.
     */
    port: number;
    /** Name of the MySQL database user. */
    user: string;
    /** Password of the MySQL database user. */
    password: string;
}
export interface ClickhouseConfig_ExternalDictionary_ClickhouseSource {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource";
    /** Name of the ClickHouse database. */
    db: string;
    /** Name of the table in the specified database to be used as the dictionary source. */
    table: string;
    /** ClickHouse host of the specified database. */
    host: string;
    /** Port to use when connecting to the host. */
    port: number;
    /** Name of the ClickHouse database user. */
    user: string;
    /** Password of the ClickHouse database user. */
    password: string;
    /** Selection criteria for the data in the specified ClickHouse table. */
    where: string;
}
export interface ClickhouseConfig_ExternalDictionary_MongodbSource {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource";
    /** Name of the MongoDB database. */
    db: string;
    /** Name of the collection in the specified database to be used as the dictionary source. */
    collection: string;
    /** MongoDB host of the specified database. */
    host: string;
    /** Port to use when connecting to the host. */
    port: number;
    /** Name of the MongoDB database user. */
    user: string;
    /** Password of the MongoDB database user. */
    password: string;
    options: string;
}
export interface ClickhouseConfig_ExternalDictionary_PostgresqlSource {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource";
    /** Name of the PostrgreSQL database. */
    db: string;
    /** Name of the table in the specified database to be used as the dictionary source. */
    table: string;
    /** Name of the PostrgreSQL host */
    hosts: string[];
    /** Port to use when connecting to the host. */
    port: number;
    /** Name of the PostrgreSQL database user. */
    user: string;
    /** Password of the PostrgreSQL database user. */
    password: string;
    /**
     * Query for checking the dictionary status, to pull only updated data.
     * For more details, see [ClickHouse documentation on dictionaries](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_lifetime/).
     */
    invalidateQuery: string;
    /**
     * Mode of SSL TCP/IP connection to the PostgreSQL host.
     * For more details, see [PostgreSQL documentation](https://www.postgresql.org/docs/current/libpq-ssl.html).
     */
    sslMode: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode;
}
export declare enum ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode {
    SSL_MODE_UNSPECIFIED = 0,
    /** DISABLE - Only try a non-SSL connection. */
    DISABLE = 1,
    /** ALLOW - First try a non-SSL connection; if that fails, try an SSL connection. */
    ALLOW = 2,
    /** PREFER - First try an SSL connection; if that fails, try a non-SSL connection. */
    PREFER = 3,
    /** VERIFY_CA - Only try an SSL connection, and verify that the server certificate is issued by a trusted certificate authority (CA). */
    VERIFY_CA = 4,
    /** VERIFY_FULL - Only try an SSL connection, verify that the server certificate is issued by a trusted CA and that the requested server host name matches that in the certificate. */
    VERIFY_FULL = 5,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON(object: any): ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode;
export declare function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON(object: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode): string;
export interface ClickhouseConfig_ExternalDictionary_Structure {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure";
    /** Single numeric key column for the dictionary. */
    id?: ClickhouseConfig_ExternalDictionary_Structure_Id;
    /**
     * Composite key for the dictionary, containing of one or more key columns.
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_structure/#composite-key).
     */
    key?: ClickhouseConfig_ExternalDictionary_Structure_Key;
    /**
     * Field holding the beginning of the range for dictionaries with `RANGE_HASHED` layout.
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_layout/#range-hashed).
     */
    rangeMin?: ClickhouseConfig_ExternalDictionary_Structure_Attribute;
    /**
     * Field holding the end of the range for dictionaries with `RANGE_HASHED` layout.
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_layout/#range-hashed).
     */
    rangeMax?: ClickhouseConfig_ExternalDictionary_Structure_Attribute;
    /**
     * Description of the fields available for database queries.
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_structure/#attributes).
     */
    attributes: ClickhouseConfig_ExternalDictionary_Structure_Attribute[];
}
export interface ClickhouseConfig_ExternalDictionary_Structure_Attribute {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute";
    /** Name of the column. */
    name: string;
    /** Type of the column. */
    type: string;
    /** Default value for an element without data (for example, an empty string). */
    nullValue: string;
    /** Expression, describing the attribute, if applicable. */
    expression: string;
    /**
     * Indication of hierarchy support.
     * Default value: `false`.
     */
    hierarchical: boolean;
    /**
     * Indication of injective mapping "id -> attribute".
     * Default value: `false`.
     */
    injective: boolean;
}
/** Numeric key. */
export interface ClickhouseConfig_ExternalDictionary_Structure_Id {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id";
    /** Name of the numeric key. */
    name: string;
}
/** Complex key. */
export interface ClickhouseConfig_ExternalDictionary_Structure_Key {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key";
    /** Attributes of a complex key. */
    attributes: ClickhouseConfig_ExternalDictionary_Structure_Attribute[];
}
/** Layout determining how to store the dictionary in memory. */
export interface ClickhouseConfig_ExternalDictionary_Layout {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout";
    /** Layout type for an external dictionary. */
    type: ClickhouseConfig_ExternalDictionary_Layout_Type;
    /**
     * Number of cells in the cache. Rounded up to a power of two.
     * Applicable only for CACHE and COMPLEX_KEY_CACHE layout types.
     */
    sizeInCells: number;
}
export declare enum ClickhouseConfig_ExternalDictionary_Layout_Type {
    TYPE_UNSPECIFIED = 0,
    /**
     * FLAT - The entire dictionary is stored in memory in the form of flat arrays.
     * Available for all dictionary sources.
     */
    FLAT = 1,
    /**
     * HASHED - The entire dictionary is stored in memory in the form of a hash table.
     * Available for all dictionary sources.
     */
    HASHED = 2,
    /**
     * COMPLEX_KEY_HASHED - Similar to HASHED, to be used with composite keys.
     * Available for all dictionary sources.
     */
    COMPLEX_KEY_HASHED = 3,
    /**
     * RANGE_HASHED - The entire dictionary is stored in memory in the form of a hash table,
     * with an ordered array of ranges and their corresponding values.
     * Available for all dictionary sources.
     */
    RANGE_HASHED = 4,
    /**
     * CACHE - The dictionary is stored in a cache with a set number of cells.
     * Available for MySQL, ClickHouse and HTTP dictionary sources.
     */
    CACHE = 5,
    /**
     * COMPLEX_KEY_CACHE - Similar to CACHE, to be used with composite keys.
     * Available for MySQL, ClickHouse and HTTP dictionary sources.
     */
    COMPLEX_KEY_CACHE = 6,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON(object: any): ClickhouseConfig_ExternalDictionary_Layout_Type;
export declare function clickhouseConfig_ExternalDictionary_Layout_TypeToJSON(object: ClickhouseConfig_ExternalDictionary_Layout_Type): string;
export interface ClickhouseConfig_ExternalDictionary_Range {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range";
    /** Minimum dictionary lifetime. */
    min: number;
    /** Maximum dictionary lifetime. */
    max: number;
}
/** Rollup settings for the GraphiteMergeTree table engine. */
export interface ClickhouseConfig_GraphiteRollup {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup";
    /** Name for the specified combination of settings for Graphite rollup. */
    name: string;
    /** Pattern to use for the rollup. */
    patterns: ClickhouseConfig_GraphiteRollup_Pattern[];
}
export interface ClickhouseConfig_GraphiteRollup_Pattern {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern";
    /** Pattern for metric names. */
    regexp: string;
    /** Name of the aggregating function to apply to data of the age specified in [retention]. */
    function: string;
    /** Age of data to use for thinning. */
    retention: ClickhouseConfig_GraphiteRollup_Pattern_Retention[];
}
export interface ClickhouseConfig_GraphiteRollup_Pattern_Retention {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention";
    /** Minimum age of the data in seconds. */
    age: number;
    /** Precision of determining the age of the data, in seconds. */
    precision: number;
}
export interface ClickhouseConfigSet {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet";
    /**
     * Effective settings for a ClickHouse cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: ClickhouseConfig;
    /** User-defined settings for a ClickHouse cluster. */
    userConfig?: ClickhouseConfig;
    /** Default configuration for a ClickHouse cluster. */
    defaultConfig?: ClickhouseConfig;
}
export declare const ClickhouseConfig: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig";
    encode(message: ClickhouseConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig;
    fromJSON(object: any): ClickhouseConfig;
    toJSON(message: ClickhouseConfig): unknown;
    fromPartial<I extends {
        compression?: {
            level?: number | undefined;
            method?: ClickhouseConfig_Compression_Method | undefined;
            minPartSize?: number | undefined;
            minPartSizeRatio?: number | undefined;
        }[] | undefined;
        timezone?: string | undefined;
        logLevel?: ClickhouseConfig_LogLevel | undefined;
        geobaseUri?: string | undefined;
        textLogLevel?: ClickhouseConfig_LogLevel | undefined;
        mergeTree?: {
            replicatedDeduplicationWindow?: number | undefined;
            replicatedDeduplicationWindowSeconds?: number | undefined;
            partsToDelayInsert?: number | undefined;
            partsToThrowInsert?: number | undefined;
            inactivePartsToDelayInsert?: number | undefined;
            inactivePartsToThrowInsert?: number | undefined;
            maxReplicatedMergesInQueue?: number | undefined;
            numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
            maxBytesToMergeAtMinSpaceInPool?: number | undefined;
            maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
            minBytesForWidePart?: number | undefined;
            minRowsForWidePart?: number | undefined;
            ttlOnlyDropParts?: boolean | undefined;
            allowRemoteFsZeroCopyReplication?: boolean | undefined;
            mergeWithTtlTimeout?: number | undefined;
            mergeWithRecompressionTtlTimeout?: number | undefined;
            maxPartsInTotal?: number | undefined;
            maxNumberOfMergesWithTtlInPool?: number | undefined;
            cleanupDelayPeriod?: number | undefined;
            numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
            maxAvgPartSizeForTooManyParts?: number | undefined;
            minAgeToForceMergeSeconds?: number | undefined;
            minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
            mergeSelectingSleepMs?: number | undefined;
        } | undefined;
        dictionaries?: {
            name?: string | undefined;
            mysqlSource?: {
                port?: number | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                replicas?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    priority?: number | undefined;
                }[] | undefined;
                where?: string | undefined;
                invalidateQuery?: string | undefined;
            } | undefined;
            clickhouseSource?: {
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                where?: string | undefined;
            } | undefined;
            structure?: {
                id?: {
                    name?: string | undefined;
                } | undefined;
                key?: {
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                attributes?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[] | undefined;
                rangeMin?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } | undefined;
                rangeMax?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } | undefined;
            } | undefined;
            layout?: {
                type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                sizeInCells?: number | undefined;
            } | undefined;
            fixedLifetime?: number | undefined;
            lifetimeRange?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            httpSource?: {
                format?: string | undefined;
                url?: string | undefined;
            } | undefined;
            mongodbSource?: {
                port?: number | undefined;
                host?: string | undefined;
                options?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                collection?: string | undefined;
            } | undefined;
            postgresqlSource?: {
                port?: number | undefined;
                hosts?: string[] | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                invalidateQuery?: string | undefined;
                sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
            } | undefined;
        }[] | undefined;
        graphiteRollup?: {
            name?: string | undefined;
            patterns?: {
                function?: string | undefined;
                retention?: {
                    age?: number | undefined;
                    precision?: number | undefined;
                }[] | undefined;
                regexp?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        kafka?: {
            securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
            saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
            saslUsername?: string | undefined;
            saslPassword?: string | undefined;
            enableSslCertificateVerification?: boolean | undefined;
            maxPollIntervalMs?: number | undefined;
            sessionTimeoutMs?: number | undefined;
        } | undefined;
        kafkaTopics?: {
            name?: string | undefined;
            settings?: {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } | undefined;
        }[] | undefined;
        rabbitmq?: {
            password?: string | undefined;
            username?: string | undefined;
            vhost?: string | undefined;
        } | undefined;
        maxConnections?: number | undefined;
        maxConcurrentQueries?: number | undefined;
        keepAliveTimeout?: number | undefined;
        uncompressedCacheSize?: number | undefined;
        markCacheSize?: number | undefined;
        maxTableSizeToDrop?: number | undefined;
        maxPartitionSizeToDrop?: number | undefined;
        builtinDictionariesReloadInterval?: number | undefined;
        queryLogRetentionSize?: number | undefined;
        queryLogRetentionTime?: number | undefined;
        queryThreadLogEnabled?: boolean | undefined;
        queryThreadLogRetentionSize?: number | undefined;
        queryThreadLogRetentionTime?: number | undefined;
        partLogRetentionSize?: number | undefined;
        partLogRetentionTime?: number | undefined;
        metricLogEnabled?: boolean | undefined;
        metricLogRetentionSize?: number | undefined;
        metricLogRetentionTime?: number | undefined;
        traceLogEnabled?: boolean | undefined;
        traceLogRetentionSize?: number | undefined;
        traceLogRetentionTime?: number | undefined;
        textLogEnabled?: boolean | undefined;
        textLogRetentionSize?: number | undefined;
        textLogRetentionTime?: number | undefined;
        opentelemetrySpanLogEnabled?: boolean | undefined;
        backgroundPoolSize?: number | undefined;
        backgroundSchedulePoolSize?: number | undefined;
        backgroundFetchesPoolSize?: number | undefined;
        backgroundMovePoolSize?: number | undefined;
        backgroundDistributedSchedulePoolSize?: number | undefined;
        backgroundBufferFlushSchedulePoolSize?: number | undefined;
        backgroundMessageBrokerSchedulePoolSize?: number | undefined;
        defaultDatabase?: string | undefined;
        totalMemoryProfilerStep?: number | undefined;
        totalMemoryTrackerSampleProbability?: number | undefined;
        backgroundCommonPoolSize?: number | undefined;
        backgroundMergesMutationsConcurrencyRatio?: number | undefined;
        queryViewsLogEnabled?: boolean | undefined;
        queryViewsLogRetentionSize?: number | undefined;
        queryViewsLogRetentionTime?: number | undefined;
        asynchronousMetricLogEnabled?: boolean | undefined;
        asynchronousMetricLogRetentionSize?: number | undefined;
        asynchronousMetricLogRetentionTime?: number | undefined;
        opentelemetrySpanLogRetentionSize?: number | undefined;
        opentelemetrySpanLogRetentionTime?: number | undefined;
        sessionLogEnabled?: boolean | undefined;
        sessionLogRetentionSize?: number | undefined;
        sessionLogRetentionTime?: number | undefined;
        zookeeperLogEnabled?: boolean | undefined;
        zookeeperLogRetentionSize?: number | undefined;
        zookeeperLogRetentionTime?: number | undefined;
        asynchronousInsertLogEnabled?: boolean | undefined;
        asynchronousInsertLogRetentionSize?: number | undefined;
        asynchronousInsertLogRetentionTime?: number | undefined;
        geobaseEnabled?: boolean | undefined;
    } & {
        compression?: ({
            level?: number | undefined;
            method?: ClickhouseConfig_Compression_Method | undefined;
            minPartSize?: number | undefined;
            minPartSizeRatio?: number | undefined;
        }[] & ({
            level?: number | undefined;
            method?: ClickhouseConfig_Compression_Method | undefined;
            minPartSize?: number | undefined;
            minPartSizeRatio?: number | undefined;
        } & {
            level?: number | undefined;
            method?: ClickhouseConfig_Compression_Method | undefined;
            minPartSize?: number | undefined;
            minPartSizeRatio?: number | undefined;
        } & Record<Exclude<keyof I["compression"][number], "$type" | "level" | "method" | "minPartSize" | "minPartSizeRatio">, never>)[] & Record<Exclude<keyof I["compression"], "$type" | keyof {
            level?: number | undefined;
            method?: ClickhouseConfig_Compression_Method | undefined;
            minPartSize?: number | undefined;
            minPartSizeRatio?: number | undefined;
        }[]>, never>) | undefined;
        timezone?: string | undefined;
        logLevel?: ClickhouseConfig_LogLevel | undefined;
        geobaseUri?: string | undefined;
        textLogLevel?: ClickhouseConfig_LogLevel | undefined;
        mergeTree?: ({
            replicatedDeduplicationWindow?: number | undefined;
            replicatedDeduplicationWindowSeconds?: number | undefined;
            partsToDelayInsert?: number | undefined;
            partsToThrowInsert?: number | undefined;
            inactivePartsToDelayInsert?: number | undefined;
            inactivePartsToThrowInsert?: number | undefined;
            maxReplicatedMergesInQueue?: number | undefined;
            numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
            maxBytesToMergeAtMinSpaceInPool?: number | undefined;
            maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
            minBytesForWidePart?: number | undefined;
            minRowsForWidePart?: number | undefined;
            ttlOnlyDropParts?: boolean | undefined;
            allowRemoteFsZeroCopyReplication?: boolean | undefined;
            mergeWithTtlTimeout?: number | undefined;
            mergeWithRecompressionTtlTimeout?: number | undefined;
            maxPartsInTotal?: number | undefined;
            maxNumberOfMergesWithTtlInPool?: number | undefined;
            cleanupDelayPeriod?: number | undefined;
            numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
            maxAvgPartSizeForTooManyParts?: number | undefined;
            minAgeToForceMergeSeconds?: number | undefined;
            minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
            mergeSelectingSleepMs?: number | undefined;
        } & {
            replicatedDeduplicationWindow?: number | undefined;
            replicatedDeduplicationWindowSeconds?: number | undefined;
            partsToDelayInsert?: number | undefined;
            partsToThrowInsert?: number | undefined;
            inactivePartsToDelayInsert?: number | undefined;
            inactivePartsToThrowInsert?: number | undefined;
            maxReplicatedMergesInQueue?: number | undefined;
            numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
            maxBytesToMergeAtMinSpaceInPool?: number | undefined;
            maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
            minBytesForWidePart?: number | undefined;
            minRowsForWidePart?: number | undefined;
            ttlOnlyDropParts?: boolean | undefined;
            allowRemoteFsZeroCopyReplication?: boolean | undefined;
            mergeWithTtlTimeout?: number | undefined;
            mergeWithRecompressionTtlTimeout?: number | undefined;
            maxPartsInTotal?: number | undefined;
            maxNumberOfMergesWithTtlInPool?: number | undefined;
            cleanupDelayPeriod?: number | undefined;
            numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
            maxAvgPartSizeForTooManyParts?: number | undefined;
            minAgeToForceMergeSeconds?: number | undefined;
            minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
            mergeSelectingSleepMs?: number | undefined;
        } & Record<Exclude<keyof I["mergeTree"], "$type" | "replicatedDeduplicationWindow" | "replicatedDeduplicationWindowSeconds" | "partsToDelayInsert" | "partsToThrowInsert" | "inactivePartsToDelayInsert" | "inactivePartsToThrowInsert" | "maxReplicatedMergesInQueue" | "numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge" | "maxBytesToMergeAtMinSpaceInPool" | "maxBytesToMergeAtMaxSpaceInPool" | "minBytesForWidePart" | "minRowsForWidePart" | "ttlOnlyDropParts" | "allowRemoteFsZeroCopyReplication" | "mergeWithTtlTimeout" | "mergeWithRecompressionTtlTimeout" | "maxPartsInTotal" | "maxNumberOfMergesWithTtlInPool" | "cleanupDelayPeriod" | "numberOfFreeEntriesInPoolToExecuteMutation" | "maxAvgPartSizeForTooManyParts" | "minAgeToForceMergeSeconds" | "minAgeToForceMergeOnPartitionOnly" | "mergeSelectingSleepMs">, never>) | undefined;
        dictionaries?: ({
            name?: string | undefined;
            mysqlSource?: {
                port?: number | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                replicas?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    priority?: number | undefined;
                }[] | undefined;
                where?: string | undefined;
                invalidateQuery?: string | undefined;
            } | undefined;
            clickhouseSource?: {
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                where?: string | undefined;
            } | undefined;
            structure?: {
                id?: {
                    name?: string | undefined;
                } | undefined;
                key?: {
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                attributes?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[] | undefined;
                rangeMin?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } | undefined;
                rangeMax?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } | undefined;
            } | undefined;
            layout?: {
                type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                sizeInCells?: number | undefined;
            } | undefined;
            fixedLifetime?: number | undefined;
            lifetimeRange?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            httpSource?: {
                format?: string | undefined;
                url?: string | undefined;
            } | undefined;
            mongodbSource?: {
                port?: number | undefined;
                host?: string | undefined;
                options?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                collection?: string | undefined;
            } | undefined;
            postgresqlSource?: {
                port?: number | undefined;
                hosts?: string[] | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                invalidateQuery?: string | undefined;
                sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            mysqlSource?: {
                port?: number | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                replicas?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    priority?: number | undefined;
                }[] | undefined;
                where?: string | undefined;
                invalidateQuery?: string | undefined;
            } | undefined;
            clickhouseSource?: {
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                where?: string | undefined;
            } | undefined;
            structure?: {
                id?: {
                    name?: string | undefined;
                } | undefined;
                key?: {
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                attributes?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[] | undefined;
                rangeMin?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } | undefined;
                rangeMax?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } | undefined;
            } | undefined;
            layout?: {
                type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                sizeInCells?: number | undefined;
            } | undefined;
            fixedLifetime?: number | undefined;
            lifetimeRange?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            httpSource?: {
                format?: string | undefined;
                url?: string | undefined;
            } | undefined;
            mongodbSource?: {
                port?: number | undefined;
                host?: string | undefined;
                options?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                collection?: string | undefined;
            } | undefined;
            postgresqlSource?: {
                port?: number | undefined;
                hosts?: string[] | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                invalidateQuery?: string | undefined;
                sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            mysqlSource?: ({
                port?: number | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                replicas?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    priority?: number | undefined;
                }[] | undefined;
                where?: string | undefined;
                invalidateQuery?: string | undefined;
            } & {
                port?: number | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                replicas?: ({
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    priority?: number | undefined;
                }[] & ({
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    priority?: number | undefined;
                } & {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    priority?: number | undefined;
                } & Record<Exclude<keyof I["dictionaries"][number]["mysqlSource"]["replicas"][number], "$type" | "port" | "host" | "user" | "password" | "priority">, never>)[] & Record<Exclude<keyof I["dictionaries"][number]["mysqlSource"]["replicas"], "$type" | keyof {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    priority?: number | undefined;
                }[]>, never>) | undefined;
                where?: string | undefined;
                invalidateQuery?: string | undefined;
            } & Record<Exclude<keyof I["dictionaries"][number]["mysqlSource"], "$type" | "port" | "user" | "password" | "table" | "db" | "replicas" | "where" | "invalidateQuery">, never>) | undefined;
            clickhouseSource?: ({
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                where?: string | undefined;
            } & {
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                where?: string | undefined;
            } & Record<Exclude<keyof I["dictionaries"][number]["clickhouseSource"], "$type" | "port" | "host" | "user" | "password" | "table" | "db" | "where">, never>) | undefined;
            structure?: ({
                id?: {
                    name?: string | undefined;
                } | undefined;
                key?: {
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                attributes?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[] | undefined;
                rangeMin?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } | undefined;
                rangeMax?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } | undefined;
            } & {
                id?: ({
                    name?: string | undefined;
                } & {
                    name?: string | undefined;
                } & Record<Exclude<keyof I["dictionaries"][number]["structure"]["id"], "$type" | "name">, never>) | undefined;
                key?: ({
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                } & {
                    attributes?: ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] & ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & Record<Exclude<keyof I["dictionaries"][number]["structure"]["key"]["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["dictionaries"][number]["structure"]["key"]["attributes"], "$type" | keyof {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["dictionaries"][number]["structure"]["key"], "$type" | "attributes">, never>) | undefined;
                attributes?: ({
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[] & ({
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } & {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } & Record<Exclude<keyof I["dictionaries"][number]["structure"]["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["dictionaries"][number]["structure"]["attributes"], "$type" | keyof {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[]>, never>) | undefined;
                rangeMin?: ({
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } & {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } & Record<Exclude<keyof I["dictionaries"][number]["structure"]["rangeMin"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
                rangeMax?: ({
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } & {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } & Record<Exclude<keyof I["dictionaries"][number]["structure"]["rangeMax"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
            } & Record<Exclude<keyof I["dictionaries"][number]["structure"], "$type" | "id" | "key" | "attributes" | "rangeMin" | "rangeMax">, never>) | undefined;
            layout?: ({
                type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                sizeInCells?: number | undefined;
            } & {
                type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                sizeInCells?: number | undefined;
            } & Record<Exclude<keyof I["dictionaries"][number]["layout"], "$type" | "type" | "sizeInCells">, never>) | undefined;
            fixedLifetime?: number | undefined;
            lifetimeRange?: ({
                min?: number | undefined;
                max?: number | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
            } & Record<Exclude<keyof I["dictionaries"][number]["lifetimeRange"], "$type" | "min" | "max">, never>) | undefined;
            httpSource?: ({
                format?: string | undefined;
                url?: string | undefined;
            } & {
                format?: string | undefined;
                url?: string | undefined;
            } & Record<Exclude<keyof I["dictionaries"][number]["httpSource"], "$type" | "format" | "url">, never>) | undefined;
            mongodbSource?: ({
                port?: number | undefined;
                host?: string | undefined;
                options?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                collection?: string | undefined;
            } & {
                port?: number | undefined;
                host?: string | undefined;
                options?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                collection?: string | undefined;
            } & Record<Exclude<keyof I["dictionaries"][number]["mongodbSource"], "$type" | "port" | "host" | "options" | "user" | "password" | "db" | "collection">, never>) | undefined;
            postgresqlSource?: ({
                port?: number | undefined;
                hosts?: string[] | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                invalidateQuery?: string | undefined;
                sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
            } & {
                port?: number | undefined;
                hosts?: (string[] & string[] & Record<Exclude<keyof I["dictionaries"][number]["postgresqlSource"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                invalidateQuery?: string | undefined;
                sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
            } & Record<Exclude<keyof I["dictionaries"][number]["postgresqlSource"], "$type" | "port" | "hosts" | "user" | "password" | "table" | "db" | "invalidateQuery" | "sslMode">, never>) | undefined;
        } & Record<Exclude<keyof I["dictionaries"][number], "$type" | "name" | "mysqlSource" | "clickhouseSource" | "structure" | "layout" | "fixedLifetime" | "lifetimeRange" | "httpSource" | "mongodbSource" | "postgresqlSource">, never>)[] & Record<Exclude<keyof I["dictionaries"], "$type" | keyof {
            name?: string | undefined;
            mysqlSource?: {
                port?: number | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                replicas?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    priority?: number | undefined;
                }[] | undefined;
                where?: string | undefined;
                invalidateQuery?: string | undefined;
            } | undefined;
            clickhouseSource?: {
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                where?: string | undefined;
            } | undefined;
            structure?: {
                id?: {
                    name?: string | undefined;
                } | undefined;
                key?: {
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                attributes?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[] | undefined;
                rangeMin?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } | undefined;
                rangeMax?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } | undefined;
            } | undefined;
            layout?: {
                type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                sizeInCells?: number | undefined;
            } | undefined;
            fixedLifetime?: number | undefined;
            lifetimeRange?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            httpSource?: {
                format?: string | undefined;
                url?: string | undefined;
            } | undefined;
            mongodbSource?: {
                port?: number | undefined;
                host?: string | undefined;
                options?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                collection?: string | undefined;
            } | undefined;
            postgresqlSource?: {
                port?: number | undefined;
                hosts?: string[] | undefined;
                user?: string | undefined;
                password?: string | undefined;
                table?: string | undefined;
                db?: string | undefined;
                invalidateQuery?: string | undefined;
                sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        graphiteRollup?: ({
            name?: string | undefined;
            patterns?: {
                function?: string | undefined;
                retention?: {
                    age?: number | undefined;
                    precision?: number | undefined;
                }[] | undefined;
                regexp?: string | undefined;
            }[] | undefined;
        }[] & ({
            name?: string | undefined;
            patterns?: {
                function?: string | undefined;
                retention?: {
                    age?: number | undefined;
                    precision?: number | undefined;
                }[] | undefined;
                regexp?: string | undefined;
            }[] | undefined;
        } & {
            name?: string | undefined;
            patterns?: ({
                function?: string | undefined;
                retention?: {
                    age?: number | undefined;
                    precision?: number | undefined;
                }[] | undefined;
                regexp?: string | undefined;
            }[] & ({
                function?: string | undefined;
                retention?: {
                    age?: number | undefined;
                    precision?: number | undefined;
                }[] | undefined;
                regexp?: string | undefined;
            } & {
                function?: string | undefined;
                retention?: ({
                    age?: number | undefined;
                    precision?: number | undefined;
                }[] & ({
                    age?: number | undefined;
                    precision?: number | undefined;
                } & {
                    age?: number | undefined;
                    precision?: number | undefined;
                } & Record<Exclude<keyof I["graphiteRollup"][number]["patterns"][number]["retention"][number], "$type" | "age" | "precision">, never>)[] & Record<Exclude<keyof I["graphiteRollup"][number]["patterns"][number]["retention"], "$type" | keyof {
                    age?: number | undefined;
                    precision?: number | undefined;
                }[]>, never>) | undefined;
                regexp?: string | undefined;
            } & Record<Exclude<keyof I["graphiteRollup"][number]["patterns"][number], "function" | "$type" | "retention" | "regexp">, never>)[] & Record<Exclude<keyof I["graphiteRollup"][number]["patterns"], "$type" | keyof {
                function?: string | undefined;
                retention?: {
                    age?: number | undefined;
                    precision?: number | undefined;
                }[] | undefined;
                regexp?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["graphiteRollup"][number], "$type" | "name" | "patterns">, never>)[] & Record<Exclude<keyof I["graphiteRollup"], "$type" | keyof {
            name?: string | undefined;
            patterns?: {
                function?: string | undefined;
                retention?: {
                    age?: number | undefined;
                    precision?: number | undefined;
                }[] | undefined;
                regexp?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        kafka?: ({
            securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
            saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
            saslUsername?: string | undefined;
            saslPassword?: string | undefined;
            enableSslCertificateVerification?: boolean | undefined;
            maxPollIntervalMs?: number | undefined;
            sessionTimeoutMs?: number | undefined;
        } & {
            securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
            saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
            saslUsername?: string | undefined;
            saslPassword?: string | undefined;
            enableSslCertificateVerification?: boolean | undefined;
            maxPollIntervalMs?: number | undefined;
            sessionTimeoutMs?: number | undefined;
        } & Record<Exclude<keyof I["kafka"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "enableSslCertificateVerification" | "maxPollIntervalMs" | "sessionTimeoutMs">, never>) | undefined;
        kafkaTopics?: ({
            name?: string | undefined;
            settings?: {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            settings?: {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            settings?: ({
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } & {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } & Record<Exclude<keyof I["kafkaTopics"][number]["settings"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "enableSslCertificateVerification" | "maxPollIntervalMs" | "sessionTimeoutMs">, never>) | undefined;
        } & Record<Exclude<keyof I["kafkaTopics"][number], "$type" | "name" | "settings">, never>)[] & Record<Exclude<keyof I["kafkaTopics"], "$type" | keyof {
            name?: string | undefined;
            settings?: {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        rabbitmq?: ({
            password?: string | undefined;
            username?: string | undefined;
            vhost?: string | undefined;
        } & {
            password?: string | undefined;
            username?: string | undefined;
            vhost?: string | undefined;
        } & Record<Exclude<keyof I["rabbitmq"], "$type" | "password" | "username" | "vhost">, never>) | undefined;
        maxConnections?: number | undefined;
        maxConcurrentQueries?: number | undefined;
        keepAliveTimeout?: number | undefined;
        uncompressedCacheSize?: number | undefined;
        markCacheSize?: number | undefined;
        maxTableSizeToDrop?: number | undefined;
        maxPartitionSizeToDrop?: number | undefined;
        builtinDictionariesReloadInterval?: number | undefined;
        queryLogRetentionSize?: number | undefined;
        queryLogRetentionTime?: number | undefined;
        queryThreadLogEnabled?: boolean | undefined;
        queryThreadLogRetentionSize?: number | undefined;
        queryThreadLogRetentionTime?: number | undefined;
        partLogRetentionSize?: number | undefined;
        partLogRetentionTime?: number | undefined;
        metricLogEnabled?: boolean | undefined;
        metricLogRetentionSize?: number | undefined;
        metricLogRetentionTime?: number | undefined;
        traceLogEnabled?: boolean | undefined;
        traceLogRetentionSize?: number | undefined;
        traceLogRetentionTime?: number | undefined;
        textLogEnabled?: boolean | undefined;
        textLogRetentionSize?: number | undefined;
        textLogRetentionTime?: number | undefined;
        opentelemetrySpanLogEnabled?: boolean | undefined;
        backgroundPoolSize?: number | undefined;
        backgroundSchedulePoolSize?: number | undefined;
        backgroundFetchesPoolSize?: number | undefined;
        backgroundMovePoolSize?: number | undefined;
        backgroundDistributedSchedulePoolSize?: number | undefined;
        backgroundBufferFlushSchedulePoolSize?: number | undefined;
        backgroundMessageBrokerSchedulePoolSize?: number | undefined;
        defaultDatabase?: string | undefined;
        totalMemoryProfilerStep?: number | undefined;
        totalMemoryTrackerSampleProbability?: number | undefined;
        backgroundCommonPoolSize?: number | undefined;
        backgroundMergesMutationsConcurrencyRatio?: number | undefined;
        queryViewsLogEnabled?: boolean | undefined;
        queryViewsLogRetentionSize?: number | undefined;
        queryViewsLogRetentionTime?: number | undefined;
        asynchronousMetricLogEnabled?: boolean | undefined;
        asynchronousMetricLogRetentionSize?: number | undefined;
        asynchronousMetricLogRetentionTime?: number | undefined;
        opentelemetrySpanLogRetentionSize?: number | undefined;
        opentelemetrySpanLogRetentionTime?: number | undefined;
        sessionLogEnabled?: boolean | undefined;
        sessionLogRetentionSize?: number | undefined;
        sessionLogRetentionTime?: number | undefined;
        zookeeperLogEnabled?: boolean | undefined;
        zookeeperLogRetentionSize?: number | undefined;
        zookeeperLogRetentionTime?: number | undefined;
        asynchronousInsertLogEnabled?: boolean | undefined;
        asynchronousInsertLogRetentionSize?: number | undefined;
        asynchronousInsertLogRetentionTime?: number | undefined;
        geobaseEnabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "compression" | "timezone" | "logLevel" | "geobaseUri" | "textLogLevel" | "mergeTree" | "dictionaries" | "graphiteRollup" | "kafka" | "kafkaTopics" | "rabbitmq" | "maxConnections" | "maxConcurrentQueries" | "keepAliveTimeout" | "uncompressedCacheSize" | "markCacheSize" | "maxTableSizeToDrop" | "maxPartitionSizeToDrop" | "builtinDictionariesReloadInterval" | "queryLogRetentionSize" | "queryLogRetentionTime" | "queryThreadLogEnabled" | "queryThreadLogRetentionSize" | "queryThreadLogRetentionTime" | "partLogRetentionSize" | "partLogRetentionTime" | "metricLogEnabled" | "metricLogRetentionSize" | "metricLogRetentionTime" | "traceLogEnabled" | "traceLogRetentionSize" | "traceLogRetentionTime" | "textLogEnabled" | "textLogRetentionSize" | "textLogRetentionTime" | "opentelemetrySpanLogEnabled" | "backgroundPoolSize" | "backgroundSchedulePoolSize" | "backgroundFetchesPoolSize" | "backgroundMovePoolSize" | "backgroundDistributedSchedulePoolSize" | "backgroundBufferFlushSchedulePoolSize" | "backgroundMessageBrokerSchedulePoolSize" | "defaultDatabase" | "totalMemoryProfilerStep" | "totalMemoryTrackerSampleProbability" | "backgroundCommonPoolSize" | "backgroundMergesMutationsConcurrencyRatio" | "queryViewsLogEnabled" | "queryViewsLogRetentionSize" | "queryViewsLogRetentionTime" | "asynchronousMetricLogEnabled" | "asynchronousMetricLogRetentionSize" | "asynchronousMetricLogRetentionTime" | "opentelemetrySpanLogRetentionSize" | "opentelemetrySpanLogRetentionTime" | "sessionLogEnabled" | "sessionLogRetentionSize" | "sessionLogRetentionTime" | "zookeeperLogEnabled" | "zookeeperLogRetentionSize" | "zookeeperLogRetentionTime" | "asynchronousInsertLogEnabled" | "asynchronousInsertLogRetentionSize" | "asynchronousInsertLogRetentionTime" | "geobaseEnabled">, never>>(object: I): ClickhouseConfig;
};
export declare const ClickhouseConfig_MergeTree: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree";
    encode(message: ClickhouseConfig_MergeTree, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_MergeTree;
    fromJSON(object: any): ClickhouseConfig_MergeTree;
    toJSON(message: ClickhouseConfig_MergeTree): unknown;
    fromPartial<I extends {
        replicatedDeduplicationWindow?: number | undefined;
        replicatedDeduplicationWindowSeconds?: number | undefined;
        partsToDelayInsert?: number | undefined;
        partsToThrowInsert?: number | undefined;
        inactivePartsToDelayInsert?: number | undefined;
        inactivePartsToThrowInsert?: number | undefined;
        maxReplicatedMergesInQueue?: number | undefined;
        numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
        maxBytesToMergeAtMinSpaceInPool?: number | undefined;
        maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
        minBytesForWidePart?: number | undefined;
        minRowsForWidePart?: number | undefined;
        ttlOnlyDropParts?: boolean | undefined;
        allowRemoteFsZeroCopyReplication?: boolean | undefined;
        mergeWithTtlTimeout?: number | undefined;
        mergeWithRecompressionTtlTimeout?: number | undefined;
        maxPartsInTotal?: number | undefined;
        maxNumberOfMergesWithTtlInPool?: number | undefined;
        cleanupDelayPeriod?: number | undefined;
        numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
        maxAvgPartSizeForTooManyParts?: number | undefined;
        minAgeToForceMergeSeconds?: number | undefined;
        minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
        mergeSelectingSleepMs?: number | undefined;
    } & {
        replicatedDeduplicationWindow?: number | undefined;
        replicatedDeduplicationWindowSeconds?: number | undefined;
        partsToDelayInsert?: number | undefined;
        partsToThrowInsert?: number | undefined;
        inactivePartsToDelayInsert?: number | undefined;
        inactivePartsToThrowInsert?: number | undefined;
        maxReplicatedMergesInQueue?: number | undefined;
        numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
        maxBytesToMergeAtMinSpaceInPool?: number | undefined;
        maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
        minBytesForWidePart?: number | undefined;
        minRowsForWidePart?: number | undefined;
        ttlOnlyDropParts?: boolean | undefined;
        allowRemoteFsZeroCopyReplication?: boolean | undefined;
        mergeWithTtlTimeout?: number | undefined;
        mergeWithRecompressionTtlTimeout?: number | undefined;
        maxPartsInTotal?: number | undefined;
        maxNumberOfMergesWithTtlInPool?: number | undefined;
        cleanupDelayPeriod?: number | undefined;
        numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
        maxAvgPartSizeForTooManyParts?: number | undefined;
        minAgeToForceMergeSeconds?: number | undefined;
        minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
        mergeSelectingSleepMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "replicatedDeduplicationWindow" | "replicatedDeduplicationWindowSeconds" | "partsToDelayInsert" | "partsToThrowInsert" | "inactivePartsToDelayInsert" | "inactivePartsToThrowInsert" | "maxReplicatedMergesInQueue" | "numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge" | "maxBytesToMergeAtMinSpaceInPool" | "maxBytesToMergeAtMaxSpaceInPool" | "minBytesForWidePart" | "minRowsForWidePart" | "ttlOnlyDropParts" | "allowRemoteFsZeroCopyReplication" | "mergeWithTtlTimeout" | "mergeWithRecompressionTtlTimeout" | "maxPartsInTotal" | "maxNumberOfMergesWithTtlInPool" | "cleanupDelayPeriod" | "numberOfFreeEntriesInPoolToExecuteMutation" | "maxAvgPartSizeForTooManyParts" | "minAgeToForceMergeSeconds" | "minAgeToForceMergeOnPartitionOnly" | "mergeSelectingSleepMs">, never>>(object: I): ClickhouseConfig_MergeTree;
};
export declare const ClickhouseConfig_Kafka: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka";
    encode(message: ClickhouseConfig_Kafka, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_Kafka;
    fromJSON(object: any): ClickhouseConfig_Kafka;
    toJSON(message: ClickhouseConfig_Kafka): unknown;
    fromPartial<I extends {
        securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
        saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
        saslUsername?: string | undefined;
        saslPassword?: string | undefined;
        enableSslCertificateVerification?: boolean | undefined;
        maxPollIntervalMs?: number | undefined;
        sessionTimeoutMs?: number | undefined;
    } & {
        securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
        saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
        saslUsername?: string | undefined;
        saslPassword?: string | undefined;
        enableSslCertificateVerification?: boolean | undefined;
        maxPollIntervalMs?: number | undefined;
        sessionTimeoutMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "enableSslCertificateVerification" | "maxPollIntervalMs" | "sessionTimeoutMs">, never>>(object: I): ClickhouseConfig_Kafka;
};
export declare const ClickhouseConfig_KafkaTopic: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic";
    encode(message: ClickhouseConfig_KafkaTopic, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_KafkaTopic;
    fromJSON(object: any): ClickhouseConfig_KafkaTopic;
    toJSON(message: ClickhouseConfig_KafkaTopic): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        settings?: {
            securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
            saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
            saslUsername?: string | undefined;
            saslPassword?: string | undefined;
            enableSslCertificateVerification?: boolean | undefined;
            maxPollIntervalMs?: number | undefined;
            sessionTimeoutMs?: number | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        settings?: ({
            securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
            saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
            saslUsername?: string | undefined;
            saslPassword?: string | undefined;
            enableSslCertificateVerification?: boolean | undefined;
            maxPollIntervalMs?: number | undefined;
            sessionTimeoutMs?: number | undefined;
        } & {
            securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
            saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
            saslUsername?: string | undefined;
            saslPassword?: string | undefined;
            enableSslCertificateVerification?: boolean | undefined;
            maxPollIntervalMs?: number | undefined;
            sessionTimeoutMs?: number | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "enableSslCertificateVerification" | "maxPollIntervalMs" | "sessionTimeoutMs">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "settings">, never>>(object: I): ClickhouseConfig_KafkaTopic;
};
export declare const ClickhouseConfig_Rabbitmq: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq";
    encode(message: ClickhouseConfig_Rabbitmq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_Rabbitmq;
    fromJSON(object: any): ClickhouseConfig_Rabbitmq;
    toJSON(message: ClickhouseConfig_Rabbitmq): unknown;
    fromPartial<I extends {
        password?: string | undefined;
        username?: string | undefined;
        vhost?: string | undefined;
    } & {
        password?: string | undefined;
        username?: string | undefined;
        vhost?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "password" | "username" | "vhost">, never>>(object: I): ClickhouseConfig_Rabbitmq;
};
export declare const ClickhouseConfig_Compression: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression";
    encode(message: ClickhouseConfig_Compression, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_Compression;
    fromJSON(object: any): ClickhouseConfig_Compression;
    toJSON(message: ClickhouseConfig_Compression): unknown;
    fromPartial<I extends {
        level?: number | undefined;
        method?: ClickhouseConfig_Compression_Method | undefined;
        minPartSize?: number | undefined;
        minPartSizeRatio?: number | undefined;
    } & {
        level?: number | undefined;
        method?: ClickhouseConfig_Compression_Method | undefined;
        minPartSize?: number | undefined;
        minPartSizeRatio?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "level" | "method" | "minPartSize" | "minPartSizeRatio">, never>>(object: I): ClickhouseConfig_Compression;
};
export declare const ClickhouseConfig_ExternalDictionary: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary";
    encode(message: ClickhouseConfig_ExternalDictionary, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary;
    toJSON(message: ClickhouseConfig_ExternalDictionary): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        mysqlSource?: {
            port?: number | undefined;
            user?: string | undefined;
            password?: string | undefined;
            table?: string | undefined;
            db?: string | undefined;
            replicas?: {
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                priority?: number | undefined;
            }[] | undefined;
            where?: string | undefined;
            invalidateQuery?: string | undefined;
        } | undefined;
        clickhouseSource?: {
            port?: number | undefined;
            host?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            table?: string | undefined;
            db?: string | undefined;
            where?: string | undefined;
        } | undefined;
        structure?: {
            id?: {
                name?: string | undefined;
            } | undefined;
            key?: {
                attributes?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            attributes?: {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            }[] | undefined;
            rangeMin?: {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } | undefined;
            rangeMax?: {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } | undefined;
        } | undefined;
        layout?: {
            type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
            sizeInCells?: number | undefined;
        } | undefined;
        fixedLifetime?: number | undefined;
        lifetimeRange?: {
            min?: number | undefined;
            max?: number | undefined;
        } | undefined;
        httpSource?: {
            format?: string | undefined;
            url?: string | undefined;
        } | undefined;
        mongodbSource?: {
            port?: number | undefined;
            host?: string | undefined;
            options?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            db?: string | undefined;
            collection?: string | undefined;
        } | undefined;
        postgresqlSource?: {
            port?: number | undefined;
            hosts?: string[] | undefined;
            user?: string | undefined;
            password?: string | undefined;
            table?: string | undefined;
            db?: string | undefined;
            invalidateQuery?: string | undefined;
            sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        mysqlSource?: ({
            port?: number | undefined;
            user?: string | undefined;
            password?: string | undefined;
            table?: string | undefined;
            db?: string | undefined;
            replicas?: {
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                priority?: number | undefined;
            }[] | undefined;
            where?: string | undefined;
            invalidateQuery?: string | undefined;
        } & {
            port?: number | undefined;
            user?: string | undefined;
            password?: string | undefined;
            table?: string | undefined;
            db?: string | undefined;
            replicas?: ({
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                priority?: number | undefined;
            }[] & ({
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                priority?: number | undefined;
            } & {
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                priority?: number | undefined;
            } & Record<Exclude<keyof I["mysqlSource"]["replicas"][number], "$type" | "port" | "host" | "user" | "password" | "priority">, never>)[] & Record<Exclude<keyof I["mysqlSource"]["replicas"], "$type" | keyof {
                port?: number | undefined;
                host?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                priority?: number | undefined;
            }[]>, never>) | undefined;
            where?: string | undefined;
            invalidateQuery?: string | undefined;
        } & Record<Exclude<keyof I["mysqlSource"], "$type" | "port" | "user" | "password" | "table" | "db" | "replicas" | "where" | "invalidateQuery">, never>) | undefined;
        clickhouseSource?: ({
            port?: number | undefined;
            host?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            table?: string | undefined;
            db?: string | undefined;
            where?: string | undefined;
        } & {
            port?: number | undefined;
            host?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            table?: string | undefined;
            db?: string | undefined;
            where?: string | undefined;
        } & Record<Exclude<keyof I["clickhouseSource"], "$type" | "port" | "host" | "user" | "password" | "table" | "db" | "where">, never>) | undefined;
        structure?: ({
            id?: {
                name?: string | undefined;
            } | undefined;
            key?: {
                attributes?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            attributes?: {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            }[] | undefined;
            rangeMin?: {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } | undefined;
            rangeMax?: {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } | undefined;
        } & {
            id?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["structure"]["id"], "$type" | "name">, never>) | undefined;
            key?: ({
                attributes?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[] | undefined;
            } & {
                attributes?: ({
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[] & ({
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } & {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                } & Record<Exclude<keyof I["structure"]["key"]["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["structure"]["key"]["attributes"], "$type" | keyof {
                    type?: string | undefined;
                    name?: string | undefined;
                    expression?: string | undefined;
                    nullValue?: string | undefined;
                    hierarchical?: boolean | undefined;
                    injective?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["structure"]["key"], "$type" | "attributes">, never>) | undefined;
            attributes?: ({
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            }[] & ({
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } & {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } & Record<Exclude<keyof I["structure"]["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["structure"]["attributes"], "$type" | keyof {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            }[]>, never>) | undefined;
            rangeMin?: ({
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } & {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } & Record<Exclude<keyof I["structure"]["rangeMin"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
            rangeMax?: ({
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } & {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } & Record<Exclude<keyof I["structure"]["rangeMax"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
        } & Record<Exclude<keyof I["structure"], "$type" | "id" | "key" | "attributes" | "rangeMin" | "rangeMax">, never>) | undefined;
        layout?: ({
            type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
            sizeInCells?: number | undefined;
        } & {
            type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
            sizeInCells?: number | undefined;
        } & Record<Exclude<keyof I["layout"], "$type" | "type" | "sizeInCells">, never>) | undefined;
        fixedLifetime?: number | undefined;
        lifetimeRange?: ({
            min?: number | undefined;
            max?: number | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
        } & Record<Exclude<keyof I["lifetimeRange"], "$type" | "min" | "max">, never>) | undefined;
        httpSource?: ({
            format?: string | undefined;
            url?: string | undefined;
        } & {
            format?: string | undefined;
            url?: string | undefined;
        } & Record<Exclude<keyof I["httpSource"], "$type" | "format" | "url">, never>) | undefined;
        mongodbSource?: ({
            port?: number | undefined;
            host?: string | undefined;
            options?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            db?: string | undefined;
            collection?: string | undefined;
        } & {
            port?: number | undefined;
            host?: string | undefined;
            options?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            db?: string | undefined;
            collection?: string | undefined;
        } & Record<Exclude<keyof I["mongodbSource"], "$type" | "port" | "host" | "options" | "user" | "password" | "db" | "collection">, never>) | undefined;
        postgresqlSource?: ({
            port?: number | undefined;
            hosts?: string[] | undefined;
            user?: string | undefined;
            password?: string | undefined;
            table?: string | undefined;
            db?: string | undefined;
            invalidateQuery?: string | undefined;
            sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
        } & {
            port?: number | undefined;
            hosts?: (string[] & string[] & Record<Exclude<keyof I["postgresqlSource"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
            user?: string | undefined;
            password?: string | undefined;
            table?: string | undefined;
            db?: string | undefined;
            invalidateQuery?: string | undefined;
            sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
        } & Record<Exclude<keyof I["postgresqlSource"], "$type" | "port" | "hosts" | "user" | "password" | "table" | "db" | "invalidateQuery" | "sslMode">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "mysqlSource" | "clickhouseSource" | "structure" | "layout" | "fixedLifetime" | "lifetimeRange" | "httpSource" | "mongodbSource" | "postgresqlSource">, never>>(object: I): ClickhouseConfig_ExternalDictionary;
};
export declare const ClickhouseConfig_ExternalDictionary_HttpSource: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource";
    encode(message: ClickhouseConfig_ExternalDictionary_HttpSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_HttpSource;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_HttpSource;
    toJSON(message: ClickhouseConfig_ExternalDictionary_HttpSource): unknown;
    fromPartial<I extends {
        format?: string | undefined;
        url?: string | undefined;
    } & {
        format?: string | undefined;
        url?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "format" | "url">, never>>(object: I): ClickhouseConfig_ExternalDictionary_HttpSource;
};
export declare const ClickhouseConfig_ExternalDictionary_MysqlSource: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource";
    encode(message: ClickhouseConfig_ExternalDictionary_MysqlSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_MysqlSource;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MysqlSource;
    toJSON(message: ClickhouseConfig_ExternalDictionary_MysqlSource): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        user?: string | undefined;
        password?: string | undefined;
        table?: string | undefined;
        db?: string | undefined;
        replicas?: {
            port?: number | undefined;
            host?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            priority?: number | undefined;
        }[] | undefined;
        where?: string | undefined;
        invalidateQuery?: string | undefined;
    } & {
        port?: number | undefined;
        user?: string | undefined;
        password?: string | undefined;
        table?: string | undefined;
        db?: string | undefined;
        replicas?: ({
            port?: number | undefined;
            host?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            priority?: number | undefined;
        }[] & ({
            port?: number | undefined;
            host?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            priority?: number | undefined;
        } & {
            port?: number | undefined;
            host?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            priority?: number | undefined;
        } & Record<Exclude<keyof I["replicas"][number], "$type" | "port" | "host" | "user" | "password" | "priority">, never>)[] & Record<Exclude<keyof I["replicas"], "$type" | keyof {
            port?: number | undefined;
            host?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            priority?: number | undefined;
        }[]>, never>) | undefined;
        where?: string | undefined;
        invalidateQuery?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "port" | "user" | "password" | "table" | "db" | "replicas" | "where" | "invalidateQuery">, never>>(object: I): ClickhouseConfig_ExternalDictionary_MysqlSource;
};
export declare const ClickhouseConfig_ExternalDictionary_MysqlSource_Replica: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica";
    encode(message: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
    toJSON(message: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        host?: string | undefined;
        user?: string | undefined;
        password?: string | undefined;
        priority?: number | undefined;
    } & {
        port?: number | undefined;
        host?: string | undefined;
        user?: string | undefined;
        password?: string | undefined;
        priority?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "port" | "host" | "user" | "password" | "priority">, never>>(object: I): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
};
export declare const ClickhouseConfig_ExternalDictionary_ClickhouseSource: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource";
    encode(message: ClickhouseConfig_ExternalDictionary_ClickhouseSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_ClickhouseSource;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_ClickhouseSource;
    toJSON(message: ClickhouseConfig_ExternalDictionary_ClickhouseSource): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        host?: string | undefined;
        user?: string | undefined;
        password?: string | undefined;
        table?: string | undefined;
        db?: string | undefined;
        where?: string | undefined;
    } & {
        port?: number | undefined;
        host?: string | undefined;
        user?: string | undefined;
        password?: string | undefined;
        table?: string | undefined;
        db?: string | undefined;
        where?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "port" | "host" | "user" | "password" | "table" | "db" | "where">, never>>(object: I): ClickhouseConfig_ExternalDictionary_ClickhouseSource;
};
export declare const ClickhouseConfig_ExternalDictionary_MongodbSource: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource";
    encode(message: ClickhouseConfig_ExternalDictionary_MongodbSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_MongodbSource;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MongodbSource;
    toJSON(message: ClickhouseConfig_ExternalDictionary_MongodbSource): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        host?: string | undefined;
        options?: string | undefined;
        user?: string | undefined;
        password?: string | undefined;
        db?: string | undefined;
        collection?: string | undefined;
    } & {
        port?: number | undefined;
        host?: string | undefined;
        options?: string | undefined;
        user?: string | undefined;
        password?: string | undefined;
        db?: string | undefined;
        collection?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "port" | "host" | "options" | "user" | "password" | "db" | "collection">, never>>(object: I): ClickhouseConfig_ExternalDictionary_MongodbSource;
};
export declare const ClickhouseConfig_ExternalDictionary_PostgresqlSource: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource";
    encode(message: ClickhouseConfig_ExternalDictionary_PostgresqlSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_PostgresqlSource;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_PostgresqlSource;
    toJSON(message: ClickhouseConfig_ExternalDictionary_PostgresqlSource): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        hosts?: string[] | undefined;
        user?: string | undefined;
        password?: string | undefined;
        table?: string | undefined;
        db?: string | undefined;
        invalidateQuery?: string | undefined;
        sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
    } & {
        port?: number | undefined;
        hosts?: (string[] & string[] & Record<Exclude<keyof I["hosts"], "$type" | keyof string[]>, never>) | undefined;
        user?: string | undefined;
        password?: string | undefined;
        table?: string | undefined;
        db?: string | undefined;
        invalidateQuery?: string | undefined;
        sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
    } & Record<Exclude<keyof I, "$type" | "port" | "hosts" | "user" | "password" | "table" | "db" | "invalidateQuery" | "sslMode">, never>>(object: I): ClickhouseConfig_ExternalDictionary_PostgresqlSource;
};
export declare const ClickhouseConfig_ExternalDictionary_Structure: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure";
    encode(message: ClickhouseConfig_ExternalDictionary_Structure, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Structure;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Structure): unknown;
    fromPartial<I extends {
        id?: {
            name?: string | undefined;
        } | undefined;
        key?: {
            attributes?: {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        attributes?: {
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        }[] | undefined;
        rangeMin?: {
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        } | undefined;
        rangeMax?: {
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        } | undefined;
    } & {
        id?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & Record<Exclude<keyof I["id"], "$type" | "name">, never>) | undefined;
        key?: ({
            attributes?: {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            }[] | undefined;
        } & {
            attributes?: ({
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            }[] & ({
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } & {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            } & Record<Exclude<keyof I["key"]["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["key"]["attributes"], "$type" | keyof {
                type?: string | undefined;
                name?: string | undefined;
                expression?: string | undefined;
                nullValue?: string | undefined;
                hierarchical?: boolean | undefined;
                injective?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["key"], "$type" | "attributes">, never>) | undefined;
        attributes?: ({
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        }[] & ({
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        } & Record<Exclude<keyof I["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["attributes"], "$type" | keyof {
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        }[]>, never>) | undefined;
        rangeMin?: ({
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        } & Record<Exclude<keyof I["rangeMin"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
        rangeMax?: ({
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        } & Record<Exclude<keyof I["rangeMax"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "key" | "attributes" | "rangeMin" | "rangeMax">, never>>(object: I): ClickhouseConfig_ExternalDictionary_Structure;
};
export declare const ClickhouseConfig_ExternalDictionary_Structure_Attribute: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute";
    encode(message: ClickhouseConfig_ExternalDictionary_Structure_Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Structure_Attribute;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Attribute;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Attribute): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        name?: string | undefined;
        expression?: string | undefined;
        nullValue?: string | undefined;
        hierarchical?: boolean | undefined;
        injective?: boolean | undefined;
    } & {
        type?: string | undefined;
        name?: string | undefined;
        expression?: string | undefined;
        nullValue?: string | undefined;
        hierarchical?: boolean | undefined;
        injective?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>>(object: I): ClickhouseConfig_ExternalDictionary_Structure_Attribute;
};
export declare const ClickhouseConfig_ExternalDictionary_Structure_Id: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id";
    encode(message: ClickhouseConfig_ExternalDictionary_Structure_Id, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Structure_Id;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Id;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Id): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): ClickhouseConfig_ExternalDictionary_Structure_Id;
};
export declare const ClickhouseConfig_ExternalDictionary_Structure_Key: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key";
    encode(message: ClickhouseConfig_ExternalDictionary_Structure_Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Structure_Key;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Key;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Key): unknown;
    fromPartial<I extends {
        attributes?: {
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        }[] | undefined;
    } & {
        attributes?: ({
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        }[] & ({
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        } & Record<Exclude<keyof I["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["attributes"], "$type" | keyof {
            type?: string | undefined;
            name?: string | undefined;
            expression?: string | undefined;
            nullValue?: string | undefined;
            hierarchical?: boolean | undefined;
            injective?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "attributes">, never>>(object: I): ClickhouseConfig_ExternalDictionary_Structure_Key;
};
export declare const ClickhouseConfig_ExternalDictionary_Layout: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout";
    encode(message: ClickhouseConfig_ExternalDictionary_Layout, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Layout;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Layout;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Layout): unknown;
    fromPartial<I extends {
        type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
        sizeInCells?: number | undefined;
    } & {
        type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
        sizeInCells?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "sizeInCells">, never>>(object: I): ClickhouseConfig_ExternalDictionary_Layout;
};
export declare const ClickhouseConfig_ExternalDictionary_Range: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range";
    encode(message: ClickhouseConfig_ExternalDictionary_Range, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Range;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Range;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Range): unknown;
    fromPartial<I extends {
        min?: number | undefined;
        max?: number | undefined;
    } & {
        min?: number | undefined;
        max?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "min" | "max">, never>>(object: I): ClickhouseConfig_ExternalDictionary_Range;
};
export declare const ClickhouseConfig_GraphiteRollup: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup";
    encode(message: ClickhouseConfig_GraphiteRollup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_GraphiteRollup;
    fromJSON(object: any): ClickhouseConfig_GraphiteRollup;
    toJSON(message: ClickhouseConfig_GraphiteRollup): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        patterns?: {
            function?: string | undefined;
            retention?: {
                age?: number | undefined;
                precision?: number | undefined;
            }[] | undefined;
            regexp?: string | undefined;
        }[] | undefined;
    } & {
        name?: string | undefined;
        patterns?: ({
            function?: string | undefined;
            retention?: {
                age?: number | undefined;
                precision?: number | undefined;
            }[] | undefined;
            regexp?: string | undefined;
        }[] & ({
            function?: string | undefined;
            retention?: {
                age?: number | undefined;
                precision?: number | undefined;
            }[] | undefined;
            regexp?: string | undefined;
        } & {
            function?: string | undefined;
            retention?: ({
                age?: number | undefined;
                precision?: number | undefined;
            }[] & ({
                age?: number | undefined;
                precision?: number | undefined;
            } & {
                age?: number | undefined;
                precision?: number | undefined;
            } & Record<Exclude<keyof I["patterns"][number]["retention"][number], "$type" | "age" | "precision">, never>)[] & Record<Exclude<keyof I["patterns"][number]["retention"], "$type" | keyof {
                age?: number | undefined;
                precision?: number | undefined;
            }[]>, never>) | undefined;
            regexp?: string | undefined;
        } & Record<Exclude<keyof I["patterns"][number], "function" | "$type" | "retention" | "regexp">, never>)[] & Record<Exclude<keyof I["patterns"], "$type" | keyof {
            function?: string | undefined;
            retention?: {
                age?: number | undefined;
                precision?: number | undefined;
            }[] | undefined;
            regexp?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "patterns">, never>>(object: I): ClickhouseConfig_GraphiteRollup;
};
export declare const ClickhouseConfig_GraphiteRollup_Pattern: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern";
    encode(message: ClickhouseConfig_GraphiteRollup_Pattern, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_GraphiteRollup_Pattern;
    fromJSON(object: any): ClickhouseConfig_GraphiteRollup_Pattern;
    toJSON(message: ClickhouseConfig_GraphiteRollup_Pattern): unknown;
    fromPartial<I extends {
        function?: string | undefined;
        retention?: {
            age?: number | undefined;
            precision?: number | undefined;
        }[] | undefined;
        regexp?: string | undefined;
    } & {
        function?: string | undefined;
        retention?: ({
            age?: number | undefined;
            precision?: number | undefined;
        }[] & ({
            age?: number | undefined;
            precision?: number | undefined;
        } & {
            age?: number | undefined;
            precision?: number | undefined;
        } & Record<Exclude<keyof I["retention"][number], "$type" | "age" | "precision">, never>)[] & Record<Exclude<keyof I["retention"], "$type" | keyof {
            age?: number | undefined;
            precision?: number | undefined;
        }[]>, never>) | undefined;
        regexp?: string | undefined;
    } & Record<Exclude<keyof I, "function" | "$type" | "retention" | "regexp">, never>>(object: I): ClickhouseConfig_GraphiteRollup_Pattern;
};
export declare const ClickhouseConfig_GraphiteRollup_Pattern_Retention: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention";
    encode(message: ClickhouseConfig_GraphiteRollup_Pattern_Retention, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_GraphiteRollup_Pattern_Retention;
    fromJSON(object: any): ClickhouseConfig_GraphiteRollup_Pattern_Retention;
    toJSON(message: ClickhouseConfig_GraphiteRollup_Pattern_Retention): unknown;
    fromPartial<I extends {
        age?: number | undefined;
        precision?: number | undefined;
    } & {
        age?: number | undefined;
        precision?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "age" | "precision">, never>>(object: I): ClickhouseConfig_GraphiteRollup_Pattern_Retention;
};
export declare const ClickhouseConfigSet: {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet";
    encode(message: ClickhouseConfigSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfigSet;
    fromJSON(object: any): ClickhouseConfigSet;
    toJSON(message: ClickhouseConfigSet): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            compression?: {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[] | undefined;
            timezone?: string | undefined;
            logLevel?: ClickhouseConfig_LogLevel | undefined;
            geobaseUri?: string | undefined;
            textLogLevel?: ClickhouseConfig_LogLevel | undefined;
            mergeTree?: {
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } | undefined;
            dictionaries?: {
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[] | undefined;
            graphiteRollup?: {
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            kafka?: {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } | undefined;
            kafkaTopics?: {
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[] | undefined;
            rabbitmq?: {
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } | undefined;
            maxConnections?: number | undefined;
            maxConcurrentQueries?: number | undefined;
            keepAliveTimeout?: number | undefined;
            uncompressedCacheSize?: number | undefined;
            markCacheSize?: number | undefined;
            maxTableSizeToDrop?: number | undefined;
            maxPartitionSizeToDrop?: number | undefined;
            builtinDictionariesReloadInterval?: number | undefined;
            queryLogRetentionSize?: number | undefined;
            queryLogRetentionTime?: number | undefined;
            queryThreadLogEnabled?: boolean | undefined;
            queryThreadLogRetentionSize?: number | undefined;
            queryThreadLogRetentionTime?: number | undefined;
            partLogRetentionSize?: number | undefined;
            partLogRetentionTime?: number | undefined;
            metricLogEnabled?: boolean | undefined;
            metricLogRetentionSize?: number | undefined;
            metricLogRetentionTime?: number | undefined;
            traceLogEnabled?: boolean | undefined;
            traceLogRetentionSize?: number | undefined;
            traceLogRetentionTime?: number | undefined;
            textLogEnabled?: boolean | undefined;
            textLogRetentionSize?: number | undefined;
            textLogRetentionTime?: number | undefined;
            opentelemetrySpanLogEnabled?: boolean | undefined;
            backgroundPoolSize?: number | undefined;
            backgroundSchedulePoolSize?: number | undefined;
            backgroundFetchesPoolSize?: number | undefined;
            backgroundMovePoolSize?: number | undefined;
            backgroundDistributedSchedulePoolSize?: number | undefined;
            backgroundBufferFlushSchedulePoolSize?: number | undefined;
            backgroundMessageBrokerSchedulePoolSize?: number | undefined;
            defaultDatabase?: string | undefined;
            totalMemoryProfilerStep?: number | undefined;
            totalMemoryTrackerSampleProbability?: number | undefined;
            backgroundCommonPoolSize?: number | undefined;
            backgroundMergesMutationsConcurrencyRatio?: number | undefined;
            queryViewsLogEnabled?: boolean | undefined;
            queryViewsLogRetentionSize?: number | undefined;
            queryViewsLogRetentionTime?: number | undefined;
            asynchronousMetricLogEnabled?: boolean | undefined;
            asynchronousMetricLogRetentionSize?: number | undefined;
            asynchronousMetricLogRetentionTime?: number | undefined;
            opentelemetrySpanLogRetentionSize?: number | undefined;
            opentelemetrySpanLogRetentionTime?: number | undefined;
            sessionLogEnabled?: boolean | undefined;
            sessionLogRetentionSize?: number | undefined;
            sessionLogRetentionTime?: number | undefined;
            zookeeperLogEnabled?: boolean | undefined;
            zookeeperLogRetentionSize?: number | undefined;
            zookeeperLogRetentionTime?: number | undefined;
            asynchronousInsertLogEnabled?: boolean | undefined;
            asynchronousInsertLogRetentionSize?: number | undefined;
            asynchronousInsertLogRetentionTime?: number | undefined;
            geobaseEnabled?: boolean | undefined;
        } | undefined;
        userConfig?: {
            compression?: {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[] | undefined;
            timezone?: string | undefined;
            logLevel?: ClickhouseConfig_LogLevel | undefined;
            geobaseUri?: string | undefined;
            textLogLevel?: ClickhouseConfig_LogLevel | undefined;
            mergeTree?: {
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } | undefined;
            dictionaries?: {
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[] | undefined;
            graphiteRollup?: {
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            kafka?: {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } | undefined;
            kafkaTopics?: {
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[] | undefined;
            rabbitmq?: {
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } | undefined;
            maxConnections?: number | undefined;
            maxConcurrentQueries?: number | undefined;
            keepAliveTimeout?: number | undefined;
            uncompressedCacheSize?: number | undefined;
            markCacheSize?: number | undefined;
            maxTableSizeToDrop?: number | undefined;
            maxPartitionSizeToDrop?: number | undefined;
            builtinDictionariesReloadInterval?: number | undefined;
            queryLogRetentionSize?: number | undefined;
            queryLogRetentionTime?: number | undefined;
            queryThreadLogEnabled?: boolean | undefined;
            queryThreadLogRetentionSize?: number | undefined;
            queryThreadLogRetentionTime?: number | undefined;
            partLogRetentionSize?: number | undefined;
            partLogRetentionTime?: number | undefined;
            metricLogEnabled?: boolean | undefined;
            metricLogRetentionSize?: number | undefined;
            metricLogRetentionTime?: number | undefined;
            traceLogEnabled?: boolean | undefined;
            traceLogRetentionSize?: number | undefined;
            traceLogRetentionTime?: number | undefined;
            textLogEnabled?: boolean | undefined;
            textLogRetentionSize?: number | undefined;
            textLogRetentionTime?: number | undefined;
            opentelemetrySpanLogEnabled?: boolean | undefined;
            backgroundPoolSize?: number | undefined;
            backgroundSchedulePoolSize?: number | undefined;
            backgroundFetchesPoolSize?: number | undefined;
            backgroundMovePoolSize?: number | undefined;
            backgroundDistributedSchedulePoolSize?: number | undefined;
            backgroundBufferFlushSchedulePoolSize?: number | undefined;
            backgroundMessageBrokerSchedulePoolSize?: number | undefined;
            defaultDatabase?: string | undefined;
            totalMemoryProfilerStep?: number | undefined;
            totalMemoryTrackerSampleProbability?: number | undefined;
            backgroundCommonPoolSize?: number | undefined;
            backgroundMergesMutationsConcurrencyRatio?: number | undefined;
            queryViewsLogEnabled?: boolean | undefined;
            queryViewsLogRetentionSize?: number | undefined;
            queryViewsLogRetentionTime?: number | undefined;
            asynchronousMetricLogEnabled?: boolean | undefined;
            asynchronousMetricLogRetentionSize?: number | undefined;
            asynchronousMetricLogRetentionTime?: number | undefined;
            opentelemetrySpanLogRetentionSize?: number | undefined;
            opentelemetrySpanLogRetentionTime?: number | undefined;
            sessionLogEnabled?: boolean | undefined;
            sessionLogRetentionSize?: number | undefined;
            sessionLogRetentionTime?: number | undefined;
            zookeeperLogEnabled?: boolean | undefined;
            zookeeperLogRetentionSize?: number | undefined;
            zookeeperLogRetentionTime?: number | undefined;
            asynchronousInsertLogEnabled?: boolean | undefined;
            asynchronousInsertLogRetentionSize?: number | undefined;
            asynchronousInsertLogRetentionTime?: number | undefined;
            geobaseEnabled?: boolean | undefined;
        } | undefined;
        defaultConfig?: {
            compression?: {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[] | undefined;
            timezone?: string | undefined;
            logLevel?: ClickhouseConfig_LogLevel | undefined;
            geobaseUri?: string | undefined;
            textLogLevel?: ClickhouseConfig_LogLevel | undefined;
            mergeTree?: {
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } | undefined;
            dictionaries?: {
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[] | undefined;
            graphiteRollup?: {
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            kafka?: {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } | undefined;
            kafkaTopics?: {
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[] | undefined;
            rabbitmq?: {
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } | undefined;
            maxConnections?: number | undefined;
            maxConcurrentQueries?: number | undefined;
            keepAliveTimeout?: number | undefined;
            uncompressedCacheSize?: number | undefined;
            markCacheSize?: number | undefined;
            maxTableSizeToDrop?: number | undefined;
            maxPartitionSizeToDrop?: number | undefined;
            builtinDictionariesReloadInterval?: number | undefined;
            queryLogRetentionSize?: number | undefined;
            queryLogRetentionTime?: number | undefined;
            queryThreadLogEnabled?: boolean | undefined;
            queryThreadLogRetentionSize?: number | undefined;
            queryThreadLogRetentionTime?: number | undefined;
            partLogRetentionSize?: number | undefined;
            partLogRetentionTime?: number | undefined;
            metricLogEnabled?: boolean | undefined;
            metricLogRetentionSize?: number | undefined;
            metricLogRetentionTime?: number | undefined;
            traceLogEnabled?: boolean | undefined;
            traceLogRetentionSize?: number | undefined;
            traceLogRetentionTime?: number | undefined;
            textLogEnabled?: boolean | undefined;
            textLogRetentionSize?: number | undefined;
            textLogRetentionTime?: number | undefined;
            opentelemetrySpanLogEnabled?: boolean | undefined;
            backgroundPoolSize?: number | undefined;
            backgroundSchedulePoolSize?: number | undefined;
            backgroundFetchesPoolSize?: number | undefined;
            backgroundMovePoolSize?: number | undefined;
            backgroundDistributedSchedulePoolSize?: number | undefined;
            backgroundBufferFlushSchedulePoolSize?: number | undefined;
            backgroundMessageBrokerSchedulePoolSize?: number | undefined;
            defaultDatabase?: string | undefined;
            totalMemoryProfilerStep?: number | undefined;
            totalMemoryTrackerSampleProbability?: number | undefined;
            backgroundCommonPoolSize?: number | undefined;
            backgroundMergesMutationsConcurrencyRatio?: number | undefined;
            queryViewsLogEnabled?: boolean | undefined;
            queryViewsLogRetentionSize?: number | undefined;
            queryViewsLogRetentionTime?: number | undefined;
            asynchronousMetricLogEnabled?: boolean | undefined;
            asynchronousMetricLogRetentionSize?: number | undefined;
            asynchronousMetricLogRetentionTime?: number | undefined;
            opentelemetrySpanLogRetentionSize?: number | undefined;
            opentelemetrySpanLogRetentionTime?: number | undefined;
            sessionLogEnabled?: boolean | undefined;
            sessionLogRetentionSize?: number | undefined;
            sessionLogRetentionTime?: number | undefined;
            zookeeperLogEnabled?: boolean | undefined;
            zookeeperLogRetentionSize?: number | undefined;
            zookeeperLogRetentionTime?: number | undefined;
            asynchronousInsertLogEnabled?: boolean | undefined;
            asynchronousInsertLogRetentionSize?: number | undefined;
            asynchronousInsertLogRetentionTime?: number | undefined;
            geobaseEnabled?: boolean | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            compression?: {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[] | undefined;
            timezone?: string | undefined;
            logLevel?: ClickhouseConfig_LogLevel | undefined;
            geobaseUri?: string | undefined;
            textLogLevel?: ClickhouseConfig_LogLevel | undefined;
            mergeTree?: {
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } | undefined;
            dictionaries?: {
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[] | undefined;
            graphiteRollup?: {
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            kafka?: {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } | undefined;
            kafkaTopics?: {
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[] | undefined;
            rabbitmq?: {
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } | undefined;
            maxConnections?: number | undefined;
            maxConcurrentQueries?: number | undefined;
            keepAliveTimeout?: number | undefined;
            uncompressedCacheSize?: number | undefined;
            markCacheSize?: number | undefined;
            maxTableSizeToDrop?: number | undefined;
            maxPartitionSizeToDrop?: number | undefined;
            builtinDictionariesReloadInterval?: number | undefined;
            queryLogRetentionSize?: number | undefined;
            queryLogRetentionTime?: number | undefined;
            queryThreadLogEnabled?: boolean | undefined;
            queryThreadLogRetentionSize?: number | undefined;
            queryThreadLogRetentionTime?: number | undefined;
            partLogRetentionSize?: number | undefined;
            partLogRetentionTime?: number | undefined;
            metricLogEnabled?: boolean | undefined;
            metricLogRetentionSize?: number | undefined;
            metricLogRetentionTime?: number | undefined;
            traceLogEnabled?: boolean | undefined;
            traceLogRetentionSize?: number | undefined;
            traceLogRetentionTime?: number | undefined;
            textLogEnabled?: boolean | undefined;
            textLogRetentionSize?: number | undefined;
            textLogRetentionTime?: number | undefined;
            opentelemetrySpanLogEnabled?: boolean | undefined;
            backgroundPoolSize?: number | undefined;
            backgroundSchedulePoolSize?: number | undefined;
            backgroundFetchesPoolSize?: number | undefined;
            backgroundMovePoolSize?: number | undefined;
            backgroundDistributedSchedulePoolSize?: number | undefined;
            backgroundBufferFlushSchedulePoolSize?: number | undefined;
            backgroundMessageBrokerSchedulePoolSize?: number | undefined;
            defaultDatabase?: string | undefined;
            totalMemoryProfilerStep?: number | undefined;
            totalMemoryTrackerSampleProbability?: number | undefined;
            backgroundCommonPoolSize?: number | undefined;
            backgroundMergesMutationsConcurrencyRatio?: number | undefined;
            queryViewsLogEnabled?: boolean | undefined;
            queryViewsLogRetentionSize?: number | undefined;
            queryViewsLogRetentionTime?: number | undefined;
            asynchronousMetricLogEnabled?: boolean | undefined;
            asynchronousMetricLogRetentionSize?: number | undefined;
            asynchronousMetricLogRetentionTime?: number | undefined;
            opentelemetrySpanLogRetentionSize?: number | undefined;
            opentelemetrySpanLogRetentionTime?: number | undefined;
            sessionLogEnabled?: boolean | undefined;
            sessionLogRetentionSize?: number | undefined;
            sessionLogRetentionTime?: number | undefined;
            zookeeperLogEnabled?: boolean | undefined;
            zookeeperLogRetentionSize?: number | undefined;
            zookeeperLogRetentionTime?: number | undefined;
            asynchronousInsertLogEnabled?: boolean | undefined;
            asynchronousInsertLogRetentionSize?: number | undefined;
            asynchronousInsertLogRetentionTime?: number | undefined;
            geobaseEnabled?: boolean | undefined;
        } & {
            compression?: ({
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[] & ({
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            } & {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["compression"][number], "$type" | "level" | "method" | "minPartSize" | "minPartSizeRatio">, never>)[] & Record<Exclude<keyof I["effectiveConfig"]["compression"], "$type" | keyof {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[]>, never>) | undefined;
            timezone?: string | undefined;
            logLevel?: ClickhouseConfig_LogLevel | undefined;
            geobaseUri?: string | undefined;
            textLogLevel?: ClickhouseConfig_LogLevel | undefined;
            mergeTree?: ({
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } & {
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["mergeTree"], "$type" | "replicatedDeduplicationWindow" | "replicatedDeduplicationWindowSeconds" | "partsToDelayInsert" | "partsToThrowInsert" | "inactivePartsToDelayInsert" | "inactivePartsToThrowInsert" | "maxReplicatedMergesInQueue" | "numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge" | "maxBytesToMergeAtMinSpaceInPool" | "maxBytesToMergeAtMaxSpaceInPool" | "minBytesForWidePart" | "minRowsForWidePart" | "ttlOnlyDropParts" | "allowRemoteFsZeroCopyReplication" | "mergeWithTtlTimeout" | "mergeWithRecompressionTtlTimeout" | "maxPartsInTotal" | "maxNumberOfMergesWithTtlInPool" | "cleanupDelayPeriod" | "numberOfFreeEntriesInPoolToExecuteMutation" | "maxAvgPartSizeForTooManyParts" | "minAgeToForceMergeSeconds" | "minAgeToForceMergeOnPartitionOnly" | "mergeSelectingSleepMs">, never>) | undefined;
            dictionaries?: ({
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                mysqlSource?: ({
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } & {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: ({
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] & ({
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    } & {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["mysqlSource"]["replicas"][number], "$type" | "port" | "host" | "user" | "password" | "priority">, never>)[] & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["mysqlSource"]["replicas"], "$type" | keyof {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[]>, never>) | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["mysqlSource"], "$type" | "port" | "user" | "password" | "table" | "db" | "replicas" | "where" | "invalidateQuery">, never>) | undefined;
                clickhouseSource?: ({
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } & {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["clickhouseSource"], "$type" | "port" | "host" | "user" | "password" | "table" | "db" | "where">, never>) | undefined;
                structure?: ({
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } & {
                    id?: ({
                        name?: string | undefined;
                    } & {
                        name?: string | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["structure"]["id"], "$type" | "name">, never>) | undefined;
                    key?: ({
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        attributes?: ({
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] & ({
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        } & {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["structure"]["key"]["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["structure"]["key"]["attributes"], "$type" | keyof {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["structure"]["key"], "$type" | "attributes">, never>) | undefined;
                    attributes?: ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] & ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["structure"]["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["structure"]["attributes"], "$type" | keyof {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[]>, never>) | undefined;
                    rangeMin?: ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["structure"]["rangeMin"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
                    rangeMax?: ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["structure"]["rangeMax"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["structure"], "$type" | "id" | "key" | "attributes" | "rangeMin" | "rangeMax">, never>) | undefined;
                layout?: ({
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } & {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["layout"], "$type" | "type" | "sizeInCells">, never>) | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: ({
                    min?: number | undefined;
                    max?: number | undefined;
                } & {
                    min?: number | undefined;
                    max?: number | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["lifetimeRange"], "$type" | "min" | "max">, never>) | undefined;
                httpSource?: ({
                    format?: string | undefined;
                    url?: string | undefined;
                } & {
                    format?: string | undefined;
                    url?: string | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["httpSource"], "$type" | "format" | "url">, never>) | undefined;
                mongodbSource?: ({
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } & {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["mongodbSource"], "$type" | "port" | "host" | "options" | "user" | "password" | "db" | "collection">, never>) | undefined;
                postgresqlSource?: ({
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } & {
                    port?: number | undefined;
                    hosts?: (string[] & string[] & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["postgresqlSource"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number]["postgresqlSource"], "$type" | "port" | "hosts" | "user" | "password" | "table" | "db" | "invalidateQuery" | "sslMode">, never>) | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"][number], "$type" | "name" | "mysqlSource" | "clickhouseSource" | "structure" | "layout" | "fixedLifetime" | "lifetimeRange" | "httpSource" | "mongodbSource" | "postgresqlSource">, never>)[] & Record<Exclude<keyof I["effectiveConfig"]["dictionaries"], "$type" | keyof {
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            graphiteRollup?: ({
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[] & ({
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            } & {
                name?: string | undefined;
                patterns?: ({
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] & ({
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                } & {
                    function?: string | undefined;
                    retention?: ({
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] & ({
                        age?: number | undefined;
                        precision?: number | undefined;
                    } & {
                        age?: number | undefined;
                        precision?: number | undefined;
                    } & Record<Exclude<keyof I["effectiveConfig"]["graphiteRollup"][number]["patterns"][number]["retention"][number], "$type" | "age" | "precision">, never>)[] & Record<Exclude<keyof I["effectiveConfig"]["graphiteRollup"][number]["patterns"][number]["retention"], "$type" | keyof {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[]>, never>) | undefined;
                    regexp?: string | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["graphiteRollup"][number]["patterns"][number], "function" | "$type" | "retention" | "regexp">, never>)[] & Record<Exclude<keyof I["effectiveConfig"]["graphiteRollup"][number]["patterns"], "$type" | keyof {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["graphiteRollup"][number], "$type" | "name" | "patterns">, never>)[] & Record<Exclude<keyof I["effectiveConfig"]["graphiteRollup"], "$type" | keyof {
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            kafka?: ({
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } & {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["kafka"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "enableSslCertificateVerification" | "maxPollIntervalMs" | "sessionTimeoutMs">, never>) | undefined;
            kafkaTopics?: ({
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                settings?: ({
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } & {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } & Record<Exclude<keyof I["effectiveConfig"]["kafkaTopics"][number]["settings"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "enableSslCertificateVerification" | "maxPollIntervalMs" | "sessionTimeoutMs">, never>) | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["kafkaTopics"][number], "$type" | "name" | "settings">, never>)[] & Record<Exclude<keyof I["effectiveConfig"]["kafkaTopics"], "$type" | keyof {
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            rabbitmq?: ({
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } & {
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } & Record<Exclude<keyof I["effectiveConfig"]["rabbitmq"], "$type" | "password" | "username" | "vhost">, never>) | undefined;
            maxConnections?: number | undefined;
            maxConcurrentQueries?: number | undefined;
            keepAliveTimeout?: number | undefined;
            uncompressedCacheSize?: number | undefined;
            markCacheSize?: number | undefined;
            maxTableSizeToDrop?: number | undefined;
            maxPartitionSizeToDrop?: number | undefined;
            builtinDictionariesReloadInterval?: number | undefined;
            queryLogRetentionSize?: number | undefined;
            queryLogRetentionTime?: number | undefined;
            queryThreadLogEnabled?: boolean | undefined;
            queryThreadLogRetentionSize?: number | undefined;
            queryThreadLogRetentionTime?: number | undefined;
            partLogRetentionSize?: number | undefined;
            partLogRetentionTime?: number | undefined;
            metricLogEnabled?: boolean | undefined;
            metricLogRetentionSize?: number | undefined;
            metricLogRetentionTime?: number | undefined;
            traceLogEnabled?: boolean | undefined;
            traceLogRetentionSize?: number | undefined;
            traceLogRetentionTime?: number | undefined;
            textLogEnabled?: boolean | undefined;
            textLogRetentionSize?: number | undefined;
            textLogRetentionTime?: number | undefined;
            opentelemetrySpanLogEnabled?: boolean | undefined;
            backgroundPoolSize?: number | undefined;
            backgroundSchedulePoolSize?: number | undefined;
            backgroundFetchesPoolSize?: number | undefined;
            backgroundMovePoolSize?: number | undefined;
            backgroundDistributedSchedulePoolSize?: number | undefined;
            backgroundBufferFlushSchedulePoolSize?: number | undefined;
            backgroundMessageBrokerSchedulePoolSize?: number | undefined;
            defaultDatabase?: string | undefined;
            totalMemoryProfilerStep?: number | undefined;
            totalMemoryTrackerSampleProbability?: number | undefined;
            backgroundCommonPoolSize?: number | undefined;
            backgroundMergesMutationsConcurrencyRatio?: number | undefined;
            queryViewsLogEnabled?: boolean | undefined;
            queryViewsLogRetentionSize?: number | undefined;
            queryViewsLogRetentionTime?: number | undefined;
            asynchronousMetricLogEnabled?: boolean | undefined;
            asynchronousMetricLogRetentionSize?: number | undefined;
            asynchronousMetricLogRetentionTime?: number | undefined;
            opentelemetrySpanLogRetentionSize?: number | undefined;
            opentelemetrySpanLogRetentionTime?: number | undefined;
            sessionLogEnabled?: boolean | undefined;
            sessionLogRetentionSize?: number | undefined;
            sessionLogRetentionTime?: number | undefined;
            zookeeperLogEnabled?: boolean | undefined;
            zookeeperLogRetentionSize?: number | undefined;
            zookeeperLogRetentionTime?: number | undefined;
            asynchronousInsertLogEnabled?: boolean | undefined;
            asynchronousInsertLogRetentionSize?: number | undefined;
            asynchronousInsertLogRetentionTime?: number | undefined;
            geobaseEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "compression" | "timezone" | "logLevel" | "geobaseUri" | "textLogLevel" | "mergeTree" | "dictionaries" | "graphiteRollup" | "kafka" | "kafkaTopics" | "rabbitmq" | "maxConnections" | "maxConcurrentQueries" | "keepAliveTimeout" | "uncompressedCacheSize" | "markCacheSize" | "maxTableSizeToDrop" | "maxPartitionSizeToDrop" | "builtinDictionariesReloadInterval" | "queryLogRetentionSize" | "queryLogRetentionTime" | "queryThreadLogEnabled" | "queryThreadLogRetentionSize" | "queryThreadLogRetentionTime" | "partLogRetentionSize" | "partLogRetentionTime" | "metricLogEnabled" | "metricLogRetentionSize" | "metricLogRetentionTime" | "traceLogEnabled" | "traceLogRetentionSize" | "traceLogRetentionTime" | "textLogEnabled" | "textLogRetentionSize" | "textLogRetentionTime" | "opentelemetrySpanLogEnabled" | "backgroundPoolSize" | "backgroundSchedulePoolSize" | "backgroundFetchesPoolSize" | "backgroundMovePoolSize" | "backgroundDistributedSchedulePoolSize" | "backgroundBufferFlushSchedulePoolSize" | "backgroundMessageBrokerSchedulePoolSize" | "defaultDatabase" | "totalMemoryProfilerStep" | "totalMemoryTrackerSampleProbability" | "backgroundCommonPoolSize" | "backgroundMergesMutationsConcurrencyRatio" | "queryViewsLogEnabled" | "queryViewsLogRetentionSize" | "queryViewsLogRetentionTime" | "asynchronousMetricLogEnabled" | "asynchronousMetricLogRetentionSize" | "asynchronousMetricLogRetentionTime" | "opentelemetrySpanLogRetentionSize" | "opentelemetrySpanLogRetentionTime" | "sessionLogEnabled" | "sessionLogRetentionSize" | "sessionLogRetentionTime" | "zookeeperLogEnabled" | "zookeeperLogRetentionSize" | "zookeeperLogRetentionTime" | "asynchronousInsertLogEnabled" | "asynchronousInsertLogRetentionSize" | "asynchronousInsertLogRetentionTime" | "geobaseEnabled">, never>) | undefined;
        userConfig?: ({
            compression?: {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[] | undefined;
            timezone?: string | undefined;
            logLevel?: ClickhouseConfig_LogLevel | undefined;
            geobaseUri?: string | undefined;
            textLogLevel?: ClickhouseConfig_LogLevel | undefined;
            mergeTree?: {
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } | undefined;
            dictionaries?: {
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[] | undefined;
            graphiteRollup?: {
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            kafka?: {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } | undefined;
            kafkaTopics?: {
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[] | undefined;
            rabbitmq?: {
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } | undefined;
            maxConnections?: number | undefined;
            maxConcurrentQueries?: number | undefined;
            keepAliveTimeout?: number | undefined;
            uncompressedCacheSize?: number | undefined;
            markCacheSize?: number | undefined;
            maxTableSizeToDrop?: number | undefined;
            maxPartitionSizeToDrop?: number | undefined;
            builtinDictionariesReloadInterval?: number | undefined;
            queryLogRetentionSize?: number | undefined;
            queryLogRetentionTime?: number | undefined;
            queryThreadLogEnabled?: boolean | undefined;
            queryThreadLogRetentionSize?: number | undefined;
            queryThreadLogRetentionTime?: number | undefined;
            partLogRetentionSize?: number | undefined;
            partLogRetentionTime?: number | undefined;
            metricLogEnabled?: boolean | undefined;
            metricLogRetentionSize?: number | undefined;
            metricLogRetentionTime?: number | undefined;
            traceLogEnabled?: boolean | undefined;
            traceLogRetentionSize?: number | undefined;
            traceLogRetentionTime?: number | undefined;
            textLogEnabled?: boolean | undefined;
            textLogRetentionSize?: number | undefined;
            textLogRetentionTime?: number | undefined;
            opentelemetrySpanLogEnabled?: boolean | undefined;
            backgroundPoolSize?: number | undefined;
            backgroundSchedulePoolSize?: number | undefined;
            backgroundFetchesPoolSize?: number | undefined;
            backgroundMovePoolSize?: number | undefined;
            backgroundDistributedSchedulePoolSize?: number | undefined;
            backgroundBufferFlushSchedulePoolSize?: number | undefined;
            backgroundMessageBrokerSchedulePoolSize?: number | undefined;
            defaultDatabase?: string | undefined;
            totalMemoryProfilerStep?: number | undefined;
            totalMemoryTrackerSampleProbability?: number | undefined;
            backgroundCommonPoolSize?: number | undefined;
            backgroundMergesMutationsConcurrencyRatio?: number | undefined;
            queryViewsLogEnabled?: boolean | undefined;
            queryViewsLogRetentionSize?: number | undefined;
            queryViewsLogRetentionTime?: number | undefined;
            asynchronousMetricLogEnabled?: boolean | undefined;
            asynchronousMetricLogRetentionSize?: number | undefined;
            asynchronousMetricLogRetentionTime?: number | undefined;
            opentelemetrySpanLogRetentionSize?: number | undefined;
            opentelemetrySpanLogRetentionTime?: number | undefined;
            sessionLogEnabled?: boolean | undefined;
            sessionLogRetentionSize?: number | undefined;
            sessionLogRetentionTime?: number | undefined;
            zookeeperLogEnabled?: boolean | undefined;
            zookeeperLogRetentionSize?: number | undefined;
            zookeeperLogRetentionTime?: number | undefined;
            asynchronousInsertLogEnabled?: boolean | undefined;
            asynchronousInsertLogRetentionSize?: number | undefined;
            asynchronousInsertLogRetentionTime?: number | undefined;
            geobaseEnabled?: boolean | undefined;
        } & {
            compression?: ({
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[] & ({
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            } & {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["compression"][number], "$type" | "level" | "method" | "minPartSize" | "minPartSizeRatio">, never>)[] & Record<Exclude<keyof I["userConfig"]["compression"], "$type" | keyof {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[]>, never>) | undefined;
            timezone?: string | undefined;
            logLevel?: ClickhouseConfig_LogLevel | undefined;
            geobaseUri?: string | undefined;
            textLogLevel?: ClickhouseConfig_LogLevel | undefined;
            mergeTree?: ({
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } & {
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["mergeTree"], "$type" | "replicatedDeduplicationWindow" | "replicatedDeduplicationWindowSeconds" | "partsToDelayInsert" | "partsToThrowInsert" | "inactivePartsToDelayInsert" | "inactivePartsToThrowInsert" | "maxReplicatedMergesInQueue" | "numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge" | "maxBytesToMergeAtMinSpaceInPool" | "maxBytesToMergeAtMaxSpaceInPool" | "minBytesForWidePart" | "minRowsForWidePart" | "ttlOnlyDropParts" | "allowRemoteFsZeroCopyReplication" | "mergeWithTtlTimeout" | "mergeWithRecompressionTtlTimeout" | "maxPartsInTotal" | "maxNumberOfMergesWithTtlInPool" | "cleanupDelayPeriod" | "numberOfFreeEntriesInPoolToExecuteMutation" | "maxAvgPartSizeForTooManyParts" | "minAgeToForceMergeSeconds" | "minAgeToForceMergeOnPartitionOnly" | "mergeSelectingSleepMs">, never>) | undefined;
            dictionaries?: ({
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                mysqlSource?: ({
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } & {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: ({
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] & ({
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    } & {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["mysqlSource"]["replicas"][number], "$type" | "port" | "host" | "user" | "password" | "priority">, never>)[] & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["mysqlSource"]["replicas"], "$type" | keyof {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[]>, never>) | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["mysqlSource"], "$type" | "port" | "user" | "password" | "table" | "db" | "replicas" | "where" | "invalidateQuery">, never>) | undefined;
                clickhouseSource?: ({
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } & {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["clickhouseSource"], "$type" | "port" | "host" | "user" | "password" | "table" | "db" | "where">, never>) | undefined;
                structure?: ({
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } & {
                    id?: ({
                        name?: string | undefined;
                    } & {
                        name?: string | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["structure"]["id"], "$type" | "name">, never>) | undefined;
                    key?: ({
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        attributes?: ({
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] & ({
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        } & {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["structure"]["key"]["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["structure"]["key"]["attributes"], "$type" | keyof {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["structure"]["key"], "$type" | "attributes">, never>) | undefined;
                    attributes?: ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] & ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["structure"]["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["structure"]["attributes"], "$type" | keyof {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[]>, never>) | undefined;
                    rangeMin?: ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["structure"]["rangeMin"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
                    rangeMax?: ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["structure"]["rangeMax"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
                } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["structure"], "$type" | "id" | "key" | "attributes" | "rangeMin" | "rangeMax">, never>) | undefined;
                layout?: ({
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } & {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["layout"], "$type" | "type" | "sizeInCells">, never>) | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: ({
                    min?: number | undefined;
                    max?: number | undefined;
                } & {
                    min?: number | undefined;
                    max?: number | undefined;
                } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["lifetimeRange"], "$type" | "min" | "max">, never>) | undefined;
                httpSource?: ({
                    format?: string | undefined;
                    url?: string | undefined;
                } & {
                    format?: string | undefined;
                    url?: string | undefined;
                } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["httpSource"], "$type" | "format" | "url">, never>) | undefined;
                mongodbSource?: ({
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } & {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["mongodbSource"], "$type" | "port" | "host" | "options" | "user" | "password" | "db" | "collection">, never>) | undefined;
                postgresqlSource?: ({
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } & {
                    port?: number | undefined;
                    hosts?: (string[] & string[] & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["postgresqlSource"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number]["postgresqlSource"], "$type" | "port" | "hosts" | "user" | "password" | "table" | "db" | "invalidateQuery" | "sslMode">, never>) | undefined;
            } & Record<Exclude<keyof I["userConfig"]["dictionaries"][number], "$type" | "name" | "mysqlSource" | "clickhouseSource" | "structure" | "layout" | "fixedLifetime" | "lifetimeRange" | "httpSource" | "mongodbSource" | "postgresqlSource">, never>)[] & Record<Exclude<keyof I["userConfig"]["dictionaries"], "$type" | keyof {
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            graphiteRollup?: ({
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[] & ({
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            } & {
                name?: string | undefined;
                patterns?: ({
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] & ({
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                } & {
                    function?: string | undefined;
                    retention?: ({
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] & ({
                        age?: number | undefined;
                        precision?: number | undefined;
                    } & {
                        age?: number | undefined;
                        precision?: number | undefined;
                    } & Record<Exclude<keyof I["userConfig"]["graphiteRollup"][number]["patterns"][number]["retention"][number], "$type" | "age" | "precision">, never>)[] & Record<Exclude<keyof I["userConfig"]["graphiteRollup"][number]["patterns"][number]["retention"], "$type" | keyof {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[]>, never>) | undefined;
                    regexp?: string | undefined;
                } & Record<Exclude<keyof I["userConfig"]["graphiteRollup"][number]["patterns"][number], "function" | "$type" | "retention" | "regexp">, never>)[] & Record<Exclude<keyof I["userConfig"]["graphiteRollup"][number]["patterns"], "$type" | keyof {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["userConfig"]["graphiteRollup"][number], "$type" | "name" | "patterns">, never>)[] & Record<Exclude<keyof I["userConfig"]["graphiteRollup"], "$type" | keyof {
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            kafka?: ({
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } & {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } & Record<Exclude<keyof I["userConfig"]["kafka"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "enableSslCertificateVerification" | "maxPollIntervalMs" | "sessionTimeoutMs">, never>) | undefined;
            kafkaTopics?: ({
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                settings?: ({
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } & {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } & Record<Exclude<keyof I["userConfig"]["kafkaTopics"][number]["settings"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "enableSslCertificateVerification" | "maxPollIntervalMs" | "sessionTimeoutMs">, never>) | undefined;
            } & Record<Exclude<keyof I["userConfig"]["kafkaTopics"][number], "$type" | "name" | "settings">, never>)[] & Record<Exclude<keyof I["userConfig"]["kafkaTopics"], "$type" | keyof {
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            rabbitmq?: ({
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } & {
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } & Record<Exclude<keyof I["userConfig"]["rabbitmq"], "$type" | "password" | "username" | "vhost">, never>) | undefined;
            maxConnections?: number | undefined;
            maxConcurrentQueries?: number | undefined;
            keepAliveTimeout?: number | undefined;
            uncompressedCacheSize?: number | undefined;
            markCacheSize?: number | undefined;
            maxTableSizeToDrop?: number | undefined;
            maxPartitionSizeToDrop?: number | undefined;
            builtinDictionariesReloadInterval?: number | undefined;
            queryLogRetentionSize?: number | undefined;
            queryLogRetentionTime?: number | undefined;
            queryThreadLogEnabled?: boolean | undefined;
            queryThreadLogRetentionSize?: number | undefined;
            queryThreadLogRetentionTime?: number | undefined;
            partLogRetentionSize?: number | undefined;
            partLogRetentionTime?: number | undefined;
            metricLogEnabled?: boolean | undefined;
            metricLogRetentionSize?: number | undefined;
            metricLogRetentionTime?: number | undefined;
            traceLogEnabled?: boolean | undefined;
            traceLogRetentionSize?: number | undefined;
            traceLogRetentionTime?: number | undefined;
            textLogEnabled?: boolean | undefined;
            textLogRetentionSize?: number | undefined;
            textLogRetentionTime?: number | undefined;
            opentelemetrySpanLogEnabled?: boolean | undefined;
            backgroundPoolSize?: number | undefined;
            backgroundSchedulePoolSize?: number | undefined;
            backgroundFetchesPoolSize?: number | undefined;
            backgroundMovePoolSize?: number | undefined;
            backgroundDistributedSchedulePoolSize?: number | undefined;
            backgroundBufferFlushSchedulePoolSize?: number | undefined;
            backgroundMessageBrokerSchedulePoolSize?: number | undefined;
            defaultDatabase?: string | undefined;
            totalMemoryProfilerStep?: number | undefined;
            totalMemoryTrackerSampleProbability?: number | undefined;
            backgroundCommonPoolSize?: number | undefined;
            backgroundMergesMutationsConcurrencyRatio?: number | undefined;
            queryViewsLogEnabled?: boolean | undefined;
            queryViewsLogRetentionSize?: number | undefined;
            queryViewsLogRetentionTime?: number | undefined;
            asynchronousMetricLogEnabled?: boolean | undefined;
            asynchronousMetricLogRetentionSize?: number | undefined;
            asynchronousMetricLogRetentionTime?: number | undefined;
            opentelemetrySpanLogRetentionSize?: number | undefined;
            opentelemetrySpanLogRetentionTime?: number | undefined;
            sessionLogEnabled?: boolean | undefined;
            sessionLogRetentionSize?: number | undefined;
            sessionLogRetentionTime?: number | undefined;
            zookeeperLogEnabled?: boolean | undefined;
            zookeeperLogRetentionSize?: number | undefined;
            zookeeperLogRetentionTime?: number | undefined;
            asynchronousInsertLogEnabled?: boolean | undefined;
            asynchronousInsertLogRetentionSize?: number | undefined;
            asynchronousInsertLogRetentionTime?: number | undefined;
            geobaseEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "compression" | "timezone" | "logLevel" | "geobaseUri" | "textLogLevel" | "mergeTree" | "dictionaries" | "graphiteRollup" | "kafka" | "kafkaTopics" | "rabbitmq" | "maxConnections" | "maxConcurrentQueries" | "keepAliveTimeout" | "uncompressedCacheSize" | "markCacheSize" | "maxTableSizeToDrop" | "maxPartitionSizeToDrop" | "builtinDictionariesReloadInterval" | "queryLogRetentionSize" | "queryLogRetentionTime" | "queryThreadLogEnabled" | "queryThreadLogRetentionSize" | "queryThreadLogRetentionTime" | "partLogRetentionSize" | "partLogRetentionTime" | "metricLogEnabled" | "metricLogRetentionSize" | "metricLogRetentionTime" | "traceLogEnabled" | "traceLogRetentionSize" | "traceLogRetentionTime" | "textLogEnabled" | "textLogRetentionSize" | "textLogRetentionTime" | "opentelemetrySpanLogEnabled" | "backgroundPoolSize" | "backgroundSchedulePoolSize" | "backgroundFetchesPoolSize" | "backgroundMovePoolSize" | "backgroundDistributedSchedulePoolSize" | "backgroundBufferFlushSchedulePoolSize" | "backgroundMessageBrokerSchedulePoolSize" | "defaultDatabase" | "totalMemoryProfilerStep" | "totalMemoryTrackerSampleProbability" | "backgroundCommonPoolSize" | "backgroundMergesMutationsConcurrencyRatio" | "queryViewsLogEnabled" | "queryViewsLogRetentionSize" | "queryViewsLogRetentionTime" | "asynchronousMetricLogEnabled" | "asynchronousMetricLogRetentionSize" | "asynchronousMetricLogRetentionTime" | "opentelemetrySpanLogRetentionSize" | "opentelemetrySpanLogRetentionTime" | "sessionLogEnabled" | "sessionLogRetentionSize" | "sessionLogRetentionTime" | "zookeeperLogEnabled" | "zookeeperLogRetentionSize" | "zookeeperLogRetentionTime" | "asynchronousInsertLogEnabled" | "asynchronousInsertLogRetentionSize" | "asynchronousInsertLogRetentionTime" | "geobaseEnabled">, never>) | undefined;
        defaultConfig?: ({
            compression?: {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[] | undefined;
            timezone?: string | undefined;
            logLevel?: ClickhouseConfig_LogLevel | undefined;
            geobaseUri?: string | undefined;
            textLogLevel?: ClickhouseConfig_LogLevel | undefined;
            mergeTree?: {
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } | undefined;
            dictionaries?: {
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[] | undefined;
            graphiteRollup?: {
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            kafka?: {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } | undefined;
            kafkaTopics?: {
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[] | undefined;
            rabbitmq?: {
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } | undefined;
            maxConnections?: number | undefined;
            maxConcurrentQueries?: number | undefined;
            keepAliveTimeout?: number | undefined;
            uncompressedCacheSize?: number | undefined;
            markCacheSize?: number | undefined;
            maxTableSizeToDrop?: number | undefined;
            maxPartitionSizeToDrop?: number | undefined;
            builtinDictionariesReloadInterval?: number | undefined;
            queryLogRetentionSize?: number | undefined;
            queryLogRetentionTime?: number | undefined;
            queryThreadLogEnabled?: boolean | undefined;
            queryThreadLogRetentionSize?: number | undefined;
            queryThreadLogRetentionTime?: number | undefined;
            partLogRetentionSize?: number | undefined;
            partLogRetentionTime?: number | undefined;
            metricLogEnabled?: boolean | undefined;
            metricLogRetentionSize?: number | undefined;
            metricLogRetentionTime?: number | undefined;
            traceLogEnabled?: boolean | undefined;
            traceLogRetentionSize?: number | undefined;
            traceLogRetentionTime?: number | undefined;
            textLogEnabled?: boolean | undefined;
            textLogRetentionSize?: number | undefined;
            textLogRetentionTime?: number | undefined;
            opentelemetrySpanLogEnabled?: boolean | undefined;
            backgroundPoolSize?: number | undefined;
            backgroundSchedulePoolSize?: number | undefined;
            backgroundFetchesPoolSize?: number | undefined;
            backgroundMovePoolSize?: number | undefined;
            backgroundDistributedSchedulePoolSize?: number | undefined;
            backgroundBufferFlushSchedulePoolSize?: number | undefined;
            backgroundMessageBrokerSchedulePoolSize?: number | undefined;
            defaultDatabase?: string | undefined;
            totalMemoryProfilerStep?: number | undefined;
            totalMemoryTrackerSampleProbability?: number | undefined;
            backgroundCommonPoolSize?: number | undefined;
            backgroundMergesMutationsConcurrencyRatio?: number | undefined;
            queryViewsLogEnabled?: boolean | undefined;
            queryViewsLogRetentionSize?: number | undefined;
            queryViewsLogRetentionTime?: number | undefined;
            asynchronousMetricLogEnabled?: boolean | undefined;
            asynchronousMetricLogRetentionSize?: number | undefined;
            asynchronousMetricLogRetentionTime?: number | undefined;
            opentelemetrySpanLogRetentionSize?: number | undefined;
            opentelemetrySpanLogRetentionTime?: number | undefined;
            sessionLogEnabled?: boolean | undefined;
            sessionLogRetentionSize?: number | undefined;
            sessionLogRetentionTime?: number | undefined;
            zookeeperLogEnabled?: boolean | undefined;
            zookeeperLogRetentionSize?: number | undefined;
            zookeeperLogRetentionTime?: number | undefined;
            asynchronousInsertLogEnabled?: boolean | undefined;
            asynchronousInsertLogRetentionSize?: number | undefined;
            asynchronousInsertLogRetentionTime?: number | undefined;
            geobaseEnabled?: boolean | undefined;
        } & {
            compression?: ({
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[] & ({
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            } & {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["compression"][number], "$type" | "level" | "method" | "minPartSize" | "minPartSizeRatio">, never>)[] & Record<Exclude<keyof I["defaultConfig"]["compression"], "$type" | keyof {
                level?: number | undefined;
                method?: ClickhouseConfig_Compression_Method | undefined;
                minPartSize?: number | undefined;
                minPartSizeRatio?: number | undefined;
            }[]>, never>) | undefined;
            timezone?: string | undefined;
            logLevel?: ClickhouseConfig_LogLevel | undefined;
            geobaseUri?: string | undefined;
            textLogLevel?: ClickhouseConfig_LogLevel | undefined;
            mergeTree?: ({
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } & {
                replicatedDeduplicationWindow?: number | undefined;
                replicatedDeduplicationWindowSeconds?: number | undefined;
                partsToDelayInsert?: number | undefined;
                partsToThrowInsert?: number | undefined;
                inactivePartsToDelayInsert?: number | undefined;
                inactivePartsToThrowInsert?: number | undefined;
                maxReplicatedMergesInQueue?: number | undefined;
                numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number | undefined;
                maxBytesToMergeAtMinSpaceInPool?: number | undefined;
                maxBytesToMergeAtMaxSpaceInPool?: number | undefined;
                minBytesForWidePart?: number | undefined;
                minRowsForWidePart?: number | undefined;
                ttlOnlyDropParts?: boolean | undefined;
                allowRemoteFsZeroCopyReplication?: boolean | undefined;
                mergeWithTtlTimeout?: number | undefined;
                mergeWithRecompressionTtlTimeout?: number | undefined;
                maxPartsInTotal?: number | undefined;
                maxNumberOfMergesWithTtlInPool?: number | undefined;
                cleanupDelayPeriod?: number | undefined;
                numberOfFreeEntriesInPoolToExecuteMutation?: number | undefined;
                maxAvgPartSizeForTooManyParts?: number | undefined;
                minAgeToForceMergeSeconds?: number | undefined;
                minAgeToForceMergeOnPartitionOnly?: boolean | undefined;
                mergeSelectingSleepMs?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["mergeTree"], "$type" | "replicatedDeduplicationWindow" | "replicatedDeduplicationWindowSeconds" | "partsToDelayInsert" | "partsToThrowInsert" | "inactivePartsToDelayInsert" | "inactivePartsToThrowInsert" | "maxReplicatedMergesInQueue" | "numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge" | "maxBytesToMergeAtMinSpaceInPool" | "maxBytesToMergeAtMaxSpaceInPool" | "minBytesForWidePart" | "minRowsForWidePart" | "ttlOnlyDropParts" | "allowRemoteFsZeroCopyReplication" | "mergeWithTtlTimeout" | "mergeWithRecompressionTtlTimeout" | "maxPartsInTotal" | "maxNumberOfMergesWithTtlInPool" | "cleanupDelayPeriod" | "numberOfFreeEntriesInPoolToExecuteMutation" | "maxAvgPartSizeForTooManyParts" | "minAgeToForceMergeSeconds" | "minAgeToForceMergeOnPartitionOnly" | "mergeSelectingSleepMs">, never>) | undefined;
            dictionaries?: ({
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                mysqlSource?: ({
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } & {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: ({
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] & ({
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    } & {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["mysqlSource"]["replicas"][number], "$type" | "port" | "host" | "user" | "password" | "priority">, never>)[] & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["mysqlSource"]["replicas"], "$type" | keyof {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[]>, never>) | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["mysqlSource"], "$type" | "port" | "user" | "password" | "table" | "db" | "replicas" | "where" | "invalidateQuery">, never>) | undefined;
                clickhouseSource?: ({
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } & {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["clickhouseSource"], "$type" | "port" | "host" | "user" | "password" | "table" | "db" | "where">, never>) | undefined;
                structure?: ({
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } & {
                    id?: ({
                        name?: string | undefined;
                    } & {
                        name?: string | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["structure"]["id"], "$type" | "name">, never>) | undefined;
                    key?: ({
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        attributes?: ({
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] & ({
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        } & {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["structure"]["key"]["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["structure"]["key"]["attributes"], "$type" | keyof {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["structure"]["key"], "$type" | "attributes">, never>) | undefined;
                    attributes?: ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] & ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["structure"]["attributes"][number], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>)[] & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["structure"]["attributes"], "$type" | keyof {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[]>, never>) | undefined;
                    rangeMin?: ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["structure"]["rangeMin"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
                    rangeMax?: ({
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["structure"]["rangeMax"], "$type" | "type" | "name" | "expression" | "nullValue" | "hierarchical" | "injective">, never>) | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["structure"], "$type" | "id" | "key" | "attributes" | "rangeMin" | "rangeMax">, never>) | undefined;
                layout?: ({
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } & {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["layout"], "$type" | "type" | "sizeInCells">, never>) | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: ({
                    min?: number | undefined;
                    max?: number | undefined;
                } & {
                    min?: number | undefined;
                    max?: number | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["lifetimeRange"], "$type" | "min" | "max">, never>) | undefined;
                httpSource?: ({
                    format?: string | undefined;
                    url?: string | undefined;
                } & {
                    format?: string | undefined;
                    url?: string | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["httpSource"], "$type" | "format" | "url">, never>) | undefined;
                mongodbSource?: ({
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } & {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["mongodbSource"], "$type" | "port" | "host" | "options" | "user" | "password" | "db" | "collection">, never>) | undefined;
                postgresqlSource?: ({
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } & {
                    port?: number | undefined;
                    hosts?: (string[] & string[] & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["postgresqlSource"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number]["postgresqlSource"], "$type" | "port" | "hosts" | "user" | "password" | "table" | "db" | "invalidateQuery" | "sslMode">, never>) | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["dictionaries"][number], "$type" | "name" | "mysqlSource" | "clickhouseSource" | "structure" | "layout" | "fixedLifetime" | "lifetimeRange" | "httpSource" | "mongodbSource" | "postgresqlSource">, never>)[] & Record<Exclude<keyof I["defaultConfig"]["dictionaries"], "$type" | keyof {
                name?: string | undefined;
                mysqlSource?: {
                    port?: number | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    replicas?: {
                        port?: number | undefined;
                        host?: string | undefined;
                        user?: string | undefined;
                        password?: string | undefined;
                        priority?: number | undefined;
                    }[] | undefined;
                    where?: string | undefined;
                    invalidateQuery?: string | undefined;
                } | undefined;
                clickhouseSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    where?: string | undefined;
                } | undefined;
                structure?: {
                    id?: {
                        name?: string | undefined;
                    } | undefined;
                    key?: {
                        attributes?: {
                            type?: string | undefined;
                            name?: string | undefined;
                            expression?: string | undefined;
                            nullValue?: string | undefined;
                            hierarchical?: boolean | undefined;
                            injective?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    attributes?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    }[] | undefined;
                    rangeMin?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                    rangeMax?: {
                        type?: string | undefined;
                        name?: string | undefined;
                        expression?: string | undefined;
                        nullValue?: string | undefined;
                        hierarchical?: boolean | undefined;
                        injective?: boolean | undefined;
                    } | undefined;
                } | undefined;
                layout?: {
                    type?: ClickhouseConfig_ExternalDictionary_Layout_Type | undefined;
                    sizeInCells?: number | undefined;
                } | undefined;
                fixedLifetime?: number | undefined;
                lifetimeRange?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                httpSource?: {
                    format?: string | undefined;
                    url?: string | undefined;
                } | undefined;
                mongodbSource?: {
                    port?: number | undefined;
                    host?: string | undefined;
                    options?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    collection?: string | undefined;
                } | undefined;
                postgresqlSource?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    table?: string | undefined;
                    db?: string | undefined;
                    invalidateQuery?: string | undefined;
                    sslMode?: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            graphiteRollup?: ({
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[] & ({
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            } & {
                name?: string | undefined;
                patterns?: ({
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] & ({
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                } & {
                    function?: string | undefined;
                    retention?: ({
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] & ({
                        age?: number | undefined;
                        precision?: number | undefined;
                    } & {
                        age?: number | undefined;
                        precision?: number | undefined;
                    } & Record<Exclude<keyof I["defaultConfig"]["graphiteRollup"][number]["patterns"][number]["retention"][number], "$type" | "age" | "precision">, never>)[] & Record<Exclude<keyof I["defaultConfig"]["graphiteRollup"][number]["patterns"][number]["retention"], "$type" | keyof {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[]>, never>) | undefined;
                    regexp?: string | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["graphiteRollup"][number]["patterns"][number], "function" | "$type" | "retention" | "regexp">, never>)[] & Record<Exclude<keyof I["defaultConfig"]["graphiteRollup"][number]["patterns"], "$type" | keyof {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["graphiteRollup"][number], "$type" | "name" | "patterns">, never>)[] & Record<Exclude<keyof I["defaultConfig"]["graphiteRollup"], "$type" | keyof {
                name?: string | undefined;
                patterns?: {
                    function?: string | undefined;
                    retention?: {
                        age?: number | undefined;
                        precision?: number | undefined;
                    }[] | undefined;
                    regexp?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            kafka?: ({
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } & {
                securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                enableSslCertificateVerification?: boolean | undefined;
                maxPollIntervalMs?: number | undefined;
                sessionTimeoutMs?: number | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["kafka"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "enableSslCertificateVerification" | "maxPollIntervalMs" | "sessionTimeoutMs">, never>) | undefined;
            kafkaTopics?: ({
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                settings?: ({
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } & {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } & Record<Exclude<keyof I["defaultConfig"]["kafkaTopics"][number]["settings"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "enableSslCertificateVerification" | "maxPollIntervalMs" | "sessionTimeoutMs">, never>) | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["kafkaTopics"][number], "$type" | "name" | "settings">, never>)[] & Record<Exclude<keyof I["defaultConfig"]["kafkaTopics"], "$type" | keyof {
                name?: string | undefined;
                settings?: {
                    securityProtocol?: ClickhouseConfig_Kafka_SecurityProtocol | undefined;
                    saslMechanism?: ClickhouseConfig_Kafka_SaslMechanism | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    enableSslCertificateVerification?: boolean | undefined;
                    maxPollIntervalMs?: number | undefined;
                    sessionTimeoutMs?: number | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            rabbitmq?: ({
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } & {
                password?: string | undefined;
                username?: string | undefined;
                vhost?: string | undefined;
            } & Record<Exclude<keyof I["defaultConfig"]["rabbitmq"], "$type" | "password" | "username" | "vhost">, never>) | undefined;
            maxConnections?: number | undefined;
            maxConcurrentQueries?: number | undefined;
            keepAliveTimeout?: number | undefined;
            uncompressedCacheSize?: number | undefined;
            markCacheSize?: number | undefined;
            maxTableSizeToDrop?: number | undefined;
            maxPartitionSizeToDrop?: number | undefined;
            builtinDictionariesReloadInterval?: number | undefined;
            queryLogRetentionSize?: number | undefined;
            queryLogRetentionTime?: number | undefined;
            queryThreadLogEnabled?: boolean | undefined;
            queryThreadLogRetentionSize?: number | undefined;
            queryThreadLogRetentionTime?: number | undefined;
            partLogRetentionSize?: number | undefined;
            partLogRetentionTime?: number | undefined;
            metricLogEnabled?: boolean | undefined;
            metricLogRetentionSize?: number | undefined;
            metricLogRetentionTime?: number | undefined;
            traceLogEnabled?: boolean | undefined;
            traceLogRetentionSize?: number | undefined;
            traceLogRetentionTime?: number | undefined;
            textLogEnabled?: boolean | undefined;
            textLogRetentionSize?: number | undefined;
            textLogRetentionTime?: number | undefined;
            opentelemetrySpanLogEnabled?: boolean | undefined;
            backgroundPoolSize?: number | undefined;
            backgroundSchedulePoolSize?: number | undefined;
            backgroundFetchesPoolSize?: number | undefined;
            backgroundMovePoolSize?: number | undefined;
            backgroundDistributedSchedulePoolSize?: number | undefined;
            backgroundBufferFlushSchedulePoolSize?: number | undefined;
            backgroundMessageBrokerSchedulePoolSize?: number | undefined;
            defaultDatabase?: string | undefined;
            totalMemoryProfilerStep?: number | undefined;
            totalMemoryTrackerSampleProbability?: number | undefined;
            backgroundCommonPoolSize?: number | undefined;
            backgroundMergesMutationsConcurrencyRatio?: number | undefined;
            queryViewsLogEnabled?: boolean | undefined;
            queryViewsLogRetentionSize?: number | undefined;
            queryViewsLogRetentionTime?: number | undefined;
            asynchronousMetricLogEnabled?: boolean | undefined;
            asynchronousMetricLogRetentionSize?: number | undefined;
            asynchronousMetricLogRetentionTime?: number | undefined;
            opentelemetrySpanLogRetentionSize?: number | undefined;
            opentelemetrySpanLogRetentionTime?: number | undefined;
            sessionLogEnabled?: boolean | undefined;
            sessionLogRetentionSize?: number | undefined;
            sessionLogRetentionTime?: number | undefined;
            zookeeperLogEnabled?: boolean | undefined;
            zookeeperLogRetentionSize?: number | undefined;
            zookeeperLogRetentionTime?: number | undefined;
            asynchronousInsertLogEnabled?: boolean | undefined;
            asynchronousInsertLogRetentionSize?: number | undefined;
            asynchronousInsertLogRetentionTime?: number | undefined;
            geobaseEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "compression" | "timezone" | "logLevel" | "geobaseUri" | "textLogLevel" | "mergeTree" | "dictionaries" | "graphiteRollup" | "kafka" | "kafkaTopics" | "rabbitmq" | "maxConnections" | "maxConcurrentQueries" | "keepAliveTimeout" | "uncompressedCacheSize" | "markCacheSize" | "maxTableSizeToDrop" | "maxPartitionSizeToDrop" | "builtinDictionariesReloadInterval" | "queryLogRetentionSize" | "queryLogRetentionTime" | "queryThreadLogEnabled" | "queryThreadLogRetentionSize" | "queryThreadLogRetentionTime" | "partLogRetentionSize" | "partLogRetentionTime" | "metricLogEnabled" | "metricLogRetentionSize" | "metricLogRetentionTime" | "traceLogEnabled" | "traceLogRetentionSize" | "traceLogRetentionTime" | "textLogEnabled" | "textLogRetentionSize" | "textLogRetentionTime" | "opentelemetrySpanLogEnabled" | "backgroundPoolSize" | "backgroundSchedulePoolSize" | "backgroundFetchesPoolSize" | "backgroundMovePoolSize" | "backgroundDistributedSchedulePoolSize" | "backgroundBufferFlushSchedulePoolSize" | "backgroundMessageBrokerSchedulePoolSize" | "defaultDatabase" | "totalMemoryProfilerStep" | "totalMemoryTrackerSampleProbability" | "backgroundCommonPoolSize" | "backgroundMergesMutationsConcurrencyRatio" | "queryViewsLogEnabled" | "queryViewsLogRetentionSize" | "queryViewsLogRetentionTime" | "asynchronousMetricLogEnabled" | "asynchronousMetricLogRetentionSize" | "asynchronousMetricLogRetentionTime" | "opentelemetrySpanLogRetentionSize" | "opentelemetrySpanLogRetentionTime" | "sessionLogEnabled" | "sessionLogRetentionSize" | "sessionLogRetentionTime" | "zookeeperLogEnabled" | "zookeeperLogRetentionSize" | "zookeeperLogRetentionTime" | "asynchronousInsertLogEnabled" | "asynchronousInsertLogRetentionSize" | "asynchronousInsertLogRetentionTime" | "geobaseEnabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): ClickhouseConfigSet;
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
