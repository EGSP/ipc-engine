import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.greenplum.v1";
export declare enum LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    /** NONE - None statements are logged. */
    NONE = 1,
    /** DDL - Logs all data definition commands like `CREATE`, `ALTER`, and `DROP`. Default value. */
    DDL = 2,
    /** MOD - Logs all `DDL` statements, plus `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`, and `COPY FROM`. */
    MOD = 3,
    /** ALL - Logs all statements. */
    ALL = 4,
    UNRECOGNIZED = -1
}
export declare function logStatementFromJSON(object: any): LogStatement;
export declare function logStatementToJSON(object: LogStatement): string;
export interface Resources {
    $type: "yandex.cloud.mdb.greenplum.v1.Resources";
    /**
     * ID of the preset for computational resources allocated to a host.
     *
     * Available presets are listed in the [documentation](/docs/managed-greenplum/concepts/instance-types).
     */
    resourcePresetId: string;
    /** Volume of the storage used by the host, in bytes. */
    diskSize: number;
    /** Type of the storage used by the host: `network-hdd`, `network-ssd` or `local-ssd`. */
    diskTypeId: string;
}
export interface ConnectionPoolerConfig {
    $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig";
    /** Route server pool mode. */
    mode: ConnectionPoolerConfig_PoolMode;
    /**
     * The number of servers in the server pool. Clients are placed in a wait queue when all servers are busy.
     *
     * Set to zero to disable the limit.
     */
    size?: number;
    /**
     * Server pool idle timeout, in seconds.
     *
     * A server connection closes after being idle for the specified time.
     *
     * Set to zero to disable the limit.
     */
    clientIdleTimeout?: number;
}
export declare enum ConnectionPoolerConfig_PoolMode {
    POOL_MODE_UNSPECIFIED = 0,
    /** SESSION - Assign server connection to a client until it disconnects. Default value. */
    SESSION = 1,
    /** TRANSACTION - Assign server connection to a client for a transaction processing. */
    TRANSACTION = 2,
    UNRECOGNIZED = -1
}
export declare function connectionPoolerConfig_PoolModeFromJSON(object: any): ConnectionPoolerConfig_PoolMode;
export declare function connectionPoolerConfig_PoolModeToJSON(object: ConnectionPoolerConfig_PoolMode): string;
export interface BackgroundActivityStartAt {
    $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivityStartAt";
    hours: number;
    minutes: number;
}
export interface TableSizes {
    $type: "yandex.cloud.mdb.greenplum.v1.TableSizes";
    starts: BackgroundActivityStartAt[];
}
export interface AnalyzeAndVacuum {
    $type: "yandex.cloud.mdb.greenplum.v1.AnalyzeAndVacuum";
    start?: BackgroundActivityStartAt;
    /** in seconds 24*60*60-1 = 86399 */
    analyzeTimeout?: number;
    /** in seconds 24*60*60-1 = 86399 */
    vacuumTimeout?: number;
}
export interface BackgroundActivitiesConfig {
    $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivitiesConfig";
    tableSizes?: TableSizes;
    analyzeAndVacuum?: AnalyzeAndVacuum;
}
export interface MasterSubclusterConfig {
    $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig";
    /** Computational resources allocated to Greenplum® master subcluster hosts. */
    resources?: Resources;
}
export interface SegmentSubclusterConfig {
    $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig";
    /** Computational resources allocated to Greenplum® segment subcluster hosts. */
    resources?: Resources;
}
export interface GreenplumConfig6 {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6";
    /** Maximum number of inbound connections on master segment */
    maxConnections?: number;
    /**
     * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
     * https://www.postgresql.org/docs/current/runtime-config-replication.html
     */
    maxSlotWalKeepSize?: number;
    /**
     * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
     * The default value is 0, which means a limit is not enforced.
     * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_segment
     */
    gpWorkfileLimitPerSegment?: number;
    /**
     * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
     * The default value is 0, which means a limit is not enforced.
     * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_query
     */
    gpWorkfileLimitPerQuery?: number;
    /**
     * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
     * Spill files are created when executing a query that requires more memory than it is allocated.
     * The current query is terminated when the limit is exceeded.
     * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
     * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_files_per_query
     * Default value is 10000
     */
    gpWorkfileLimitFilesPerQuery?: number;
    /**
     * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
     * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
     */
    maxPreparedTransactions?: number;
    /**
     * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
     * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_compression
     */
    gpWorkfileCompression?: boolean;
    /**
     * Sets the maximum memory limit for a query. Helps avoid out-of-memory errors on a segment host during query processing as a result of setting statement_mem too high.
     * Taking into account the configuration of a single segment host, calculate max_statement_mem as follows:
     * (seghost_physical_memory) / (average_number_concurrent_queries)
     * When changing both max_statement_mem and statement_mem, max_statement_mem must be changed first, or listed first in the postgresql.conf file.
     * https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem
     * Default value is 2097152000 (2000MB)
     */
    maxStatementMem?: number;
    /**
     * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
     * MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
     * PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
     * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#log_statement
     * Default value is ddl
     */
    logStatement: LogStatement;
    /** https://docs.vmware.com/en/VMware-Tanzu-Greenplum/6/greenplum-database/GUID-ref_guide-config_params-guc-list.html#gp_add_column_inherits_table_setting */
    gpAddColumnInheritsTableSetting?: boolean;
}
export interface Greenplumconfig617 {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17";
    /** Maximum number of inbound connections on master segment. */
    maxConnections?: number;
    /**
     * The maximum size of WAL files that replication slots are allowed to retain in the `pg_wal` directory at checkpoint time.
     *
     * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/current/runtime-config-replication.html).
     */
    maxSlotWalKeepSize?: number;
    /**
     * The maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
     *
     * The default value is 0 (no limit).
     *
     * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment).
     */
    gpWorkfileLimitPerSegment?: number;
    /**
     * The maximum disk size that an individual query is allowed to use for creating temporary spill files at each segment.
     *
     * The default value is 0 (no limit).
     *
     * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query).
     */
    gpWorkfileLimitPerQuery?: number;
    /**
     * The maximum number of temporary spill files allowed per query at each segment.
     *
     * Spill files, also known as workfiles, are created when a query requires more memory than there is allocated.
     *
     * The current query is terminated if the limit is exceeded.
     *
     * Set to zero to disable the limit.
     *
     * Master session reloads if the parameter changes.
     *
     * Default value is 10000.
     *
     * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query).
     */
    gpWorkfileLimitFilesPerQuery?: number;
    /**
     * The maximum number of transactions that can be in the `prepared` state simultaneously.
     *
     * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/9.6/runtime-config-resource.html).
     */
    maxPreparedTransactions?: number;
    /**
     * Whether the spill files are compressed or not.
     *
     * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression).
     */
    gpWorkfileCompression?: boolean;
}
export interface Greenplumconfig619 {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19";
    /** Maximum number of inbound connections on master segment. */
    maxConnections?: number;
    /**
     * The maximum size of WAL files that replication slots are allowed to retain in the `pg_wal` directory at checkpoint time.
     *
     * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/current/runtime-config-replication.html).
     */
    maxSlotWalKeepSize?: number;
    /**
     * The maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
     *
     * The default value is 0 (no limit).
     *
     * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment).
     */
    gpWorkfileLimitPerSegment?: number;
    /**
     * The maximum disk size that an individual query is allowed to use for creating temporary spill files at each segment.
     *
     * The default value is 0 (no limit).
     *
     * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query).
     */
    gpWorkfileLimitPerQuery?: number;
    /**
     * The maximum number of temporary spill files allowed per query at each segment.
     *
     * Spill files, also known as workfiles, are created when a query requires more memory than there is allocated.
     *
     * The current query is terminated if the limit is exceeded.
     *
     * Set to zero to disable the limit.
     *
     * Master session reloads if the parameter changes.
     *
     * Default value is 10000.
     *
     * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query).
     */
    gpWorkfileLimitFilesPerQuery?: number;
    /**
     * The maximum number of transactions that can be in the `prepared` state simultaneously.
     *
     * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/9.6/runtime-config-resource.html).
     */
    maxPreparedTransactions?: number;
    /**
     * Whether the spill files are compressed or not.
     *
     * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression).
     */
    gpWorkfileCompression?: boolean;
    /**
     * The maximum memory limit for a query, in bytes.
     *
     * Helps to avoid out-of-memory errors on a segment host during query processing as a result of setting `statement_mem` too high.
     *
     * Taking into account the configuration of a single segment host, calculate [max_statement_mem] as follows: `seghost_physical_memory` / `average_number_concurrent_queries`.
     *
     * When changing both [max_statement_mem] and `statement_mem`, [max_statement_mem] must be changed first, or listed first in the `postgresql.conf` file.
     *
     * Default value is 2097152000 (2000 MB).
     *
     * More info in [Greenplum® documentation](https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem).
     */
    maxStatementMem?: number;
    /**
     * Logged SQL statements.
     *
     * `PREPARE` and `EXPLAIN ANALYZE` statements are also logged if their contained command belongs to an appropriate type.
     *
     * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_statement).
     */
    logStatement: LogStatement;
}
export interface Greenplumconfig621 {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_21";
    /** Maximum number of inbound connections on master segment */
    maxConnections?: number;
    /**
     * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
     * https://www.postgresql.org/docs/current/runtime-config-replication.html
     */
    maxSlotWalKeepSize?: number;
    /**
     * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
     * The default value is 0, which means a limit is not enforced.
     * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment
     */
    gpWorkfileLimitPerSegment?: number;
    /**
     * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
     * The default value is 0, which means a limit is not enforced.
     * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query
     */
    gpWorkfileLimitPerQuery?: number;
    /**
     * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
     * Spill files are created when executing a query that requires more memory than it is allocated.
     * The current query is terminated when the limit is exceeded.
     * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
     * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query
     * Default value is 10000
     */
    gpWorkfileLimitFilesPerQuery?: number;
    /**
     * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
     * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
     */
    maxPreparedTransactions?: number;
    /**
     * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
     * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression
     */
    gpWorkfileCompression?: boolean;
    /**
     * Sets the maximum memory limit for a query. Helps avoid out-of-memory errors on a segment host during query processing as a result of setting statement_mem too high.
     * Taking into account the configuration of a single segment host, calculate max_statement_mem as follows:
     * (seghost_physical_memory) / (average_number_concurrent_queries)
     * When changing both max_statement_mem and statement_mem, max_statement_mem must be changed first, or listed first in the postgresql.conf file.
     * https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem
     * Default value is 2097152000 (2000MB)
     */
    maxStatementMem?: number;
    /**
     * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
     * MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
     * PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
     * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_statement
     * Default value is ddl
     */
    logStatement: LogStatement;
    /** https://docs.vmware.com/en/VMware-Tanzu-Greenplum/6/greenplum-database/GUID-ref_guide-config_params-guc-list.html#gp_add_column_inherits_table_setting */
    gpAddColumnInheritsTableSetting?: boolean;
}
export interface Greenplumconfig622 {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_22";
    /** Maximum number of inbound connections on master segment */
    maxConnections?: number;
    /**
     * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
     * https://www.postgresql.org/docs/current/runtime-config-replication.html
     */
    maxSlotWalKeepSize?: number;
    /**
     * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
     * The default value is 0, which means a limit is not enforced.
     * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment
     */
    gpWorkfileLimitPerSegment?: number;
    /**
     * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
     * The default value is 0, which means a limit is not enforced.
     * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query
     */
    gpWorkfileLimitPerQuery?: number;
    /**
     * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
     * Spill files are created when executing a query that requires more memory than it is allocated.
     * The current query is terminated when the limit is exceeded.
     * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
     * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query
     * Default value is 10000
     */
    gpWorkfileLimitFilesPerQuery?: number;
    /**
     * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
     * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
     */
    maxPreparedTransactions?: number;
    /**
     * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
     * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression
     */
    gpWorkfileCompression?: boolean;
    /**
     * Sets the maximum memory limit for a query. Helps avoid out-of-memory errors on a segment host during query processing as a result of setting statement_mem too high.
     * Taking into account the configuration of a single segment host, calculate max_statement_mem as follows:
     * (seghost_physical_memory) / (average_number_concurrent_queries)
     * When changing both max_statement_mem and statement_mem, max_statement_mem must be changed first, or listed first in the postgresql.conf file.
     * https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem
     * Default value is 2097152000 (2000MB)
     */
    maxStatementMem?: number;
    /**
     * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
     * MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
     * PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
     * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_statement
     * Default value is ddl
     */
    logStatement: LogStatement;
    /** https://docs.vmware.com/en/VMware-Tanzu-Greenplum/6/greenplum-database/GUID-ref_guide-config_params-guc-list.html#gp_add_column_inherits_table_setting */
    gpAddColumnInheritsTableSetting?: boolean;
}
/** Configuration settings version 6.17 */
export interface Greenplumconfigset617 {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17";
    /** Effective settings for a Greenplum® cluster (a combination of settings defined in [user_config] and [default_config]). */
    effectiveConfig?: Greenplumconfig617;
    /** User-defined settings for a Greenplum® cluster. */
    userConfig?: Greenplumconfig617;
    /** Default configuration for a Greenplum® cluster. */
    defaultConfig?: Greenplumconfig617;
}
/** Configuration settings version 6.19 */
export interface Greenplumconfigset619 {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19";
    /** Effective settings for a Greenplum® cluster (a combination of settings defined in [user_config] and [default_config]). */
    effectiveConfig?: Greenplumconfig619;
    /** User-defined settings for a Greenplum® cluster. */
    userConfig?: Greenplumconfig619;
    /** Default configuration for a Greenplum® cluster. */
    defaultConfig?: Greenplumconfig619;
}
export interface Greenplumconfigset621 {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_21";
    /** Effective settings for a Greenplum®  cluster (a combination of settings defined in [user_config] and [default_config]). */
    effectiveConfig?: Greenplumconfig621;
    /** User-defined settings for a Greenplum® cluster. */
    userConfig?: Greenplumconfig621;
    /** Default configuration for a Greenplum® cluster. */
    defaultConfig?: Greenplumconfig621;
}
export interface Greenplumconfigset622 {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_22";
    /** Effective settings for a Greenplum®  cluster (a combination of settings defined in [user_config] and [default_config]). */
    effectiveConfig?: Greenplumconfig622;
    /** User-defined settings for a Greenplum® cluster. */
    userConfig?: Greenplumconfig622;
    /** Default configuration for a Greenplum® cluster. */
    defaultConfig?: Greenplumconfig622;
}
export interface GreenplumConfigSet6 {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6";
    /**
     * Effective settings for a Greenplum (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: GreenplumConfig6;
    /** User-defined settings for a Greenplum. */
    userConfig?: GreenplumConfig6;
    /** Default configuration for a Greenplum. */
    defaultConfig?: GreenplumConfig6;
}
export interface ConnectionPoolerConfigSet {
    $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet";
    /** Effective settings for an Odyssey® pooler (a combination of settings defined in [ConnectionPoolerConfigSet.user_config] and [ConnectionPoolerConfigSet.default_config]). */
    effectiveConfig?: ConnectionPoolerConfig;
    /** User-defined settings for an Odyssey® pooler. */
    userConfig?: ConnectionPoolerConfig;
    /** Default configuration for an Odyssey® pooler. */
    defaultConfig?: ConnectionPoolerConfig;
}
export declare const Resources: {
    $type: "yandex.cloud.mdb.greenplum.v1.Resources";
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial<I extends {
        diskTypeId?: string | undefined;
        diskSize?: number | undefined;
        resourcePresetId?: string | undefined;
    } & {
        diskTypeId?: string | undefined;
        diskSize?: number | undefined;
        resourcePresetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>>(object: I): Resources;
};
export declare const ConnectionPoolerConfig: {
    $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig";
    encode(message: ConnectionPoolerConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectionPoolerConfig;
    fromJSON(object: any): ConnectionPoolerConfig;
    toJSON(message: ConnectionPoolerConfig): unknown;
    fromPartial<I extends {
        mode?: ConnectionPoolerConfig_PoolMode | undefined;
        size?: number | undefined;
        clientIdleTimeout?: number | undefined;
    } & {
        mode?: ConnectionPoolerConfig_PoolMode | undefined;
        size?: number | undefined;
        clientIdleTimeout?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "size" | "clientIdleTimeout">, never>>(object: I): ConnectionPoolerConfig;
};
export declare const BackgroundActivityStartAt: {
    $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivityStartAt";
    encode(message: BackgroundActivityStartAt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackgroundActivityStartAt;
    fromJSON(object: any): BackgroundActivityStartAt;
    toJSON(message: BackgroundActivityStartAt): unknown;
    fromPartial<I extends {
        hours?: number | undefined;
        minutes?: number | undefined;
    } & {
        hours?: number | undefined;
        minutes?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "hours" | "minutes">, never>>(object: I): BackgroundActivityStartAt;
};
export declare const TableSizes: {
    $type: "yandex.cloud.mdb.greenplum.v1.TableSizes";
    encode(message: TableSizes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TableSizes;
    fromJSON(object: any): TableSizes;
    toJSON(message: TableSizes): unknown;
    fromPartial<I extends {
        starts?: {
            hours?: number | undefined;
            minutes?: number | undefined;
        }[] | undefined;
    } & {
        starts?: ({
            hours?: number | undefined;
            minutes?: number | undefined;
        }[] & ({
            hours?: number | undefined;
            minutes?: number | undefined;
        } & {
            hours?: number | undefined;
            minutes?: number | undefined;
        } & Record<Exclude<keyof I["starts"][number], "$type" | "hours" | "minutes">, never>)[] & Record<Exclude<keyof I["starts"], "$type" | keyof {
            hours?: number | undefined;
            minutes?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "starts">, never>>(object: I): TableSizes;
};
export declare const AnalyzeAndVacuum: {
    $type: "yandex.cloud.mdb.greenplum.v1.AnalyzeAndVacuum";
    encode(message: AnalyzeAndVacuum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnalyzeAndVacuum;
    fromJSON(object: any): AnalyzeAndVacuum;
    toJSON(message: AnalyzeAndVacuum): unknown;
    fromPartial<I extends {
        start?: {
            hours?: number | undefined;
            minutes?: number | undefined;
        } | undefined;
        analyzeTimeout?: number | undefined;
        vacuumTimeout?: number | undefined;
    } & {
        start?: ({
            hours?: number | undefined;
            minutes?: number | undefined;
        } & {
            hours?: number | undefined;
            minutes?: number | undefined;
        } & Record<Exclude<keyof I["start"], "$type" | "hours" | "minutes">, never>) | undefined;
        analyzeTimeout?: number | undefined;
        vacuumTimeout?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "start" | "analyzeTimeout" | "vacuumTimeout">, never>>(object: I): AnalyzeAndVacuum;
};
export declare const BackgroundActivitiesConfig: {
    $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivitiesConfig";
    encode(message: BackgroundActivitiesConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackgroundActivitiesConfig;
    fromJSON(object: any): BackgroundActivitiesConfig;
    toJSON(message: BackgroundActivitiesConfig): unknown;
    fromPartial<I extends {
        tableSizes?: {
            starts?: {
                hours?: number | undefined;
                minutes?: number | undefined;
            }[] | undefined;
        } | undefined;
        analyzeAndVacuum?: {
            start?: {
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            analyzeTimeout?: number | undefined;
            vacuumTimeout?: number | undefined;
        } | undefined;
    } & {
        tableSizes?: ({
            starts?: {
                hours?: number | undefined;
                minutes?: number | undefined;
            }[] | undefined;
        } & {
            starts?: ({
                hours?: number | undefined;
                minutes?: number | undefined;
            }[] & ({
                hours?: number | undefined;
                minutes?: number | undefined;
            } & {
                hours?: number | undefined;
                minutes?: number | undefined;
            } & Record<Exclude<keyof I["tableSizes"]["starts"][number], "$type" | "hours" | "minutes">, never>)[] & Record<Exclude<keyof I["tableSizes"]["starts"], "$type" | keyof {
                hours?: number | undefined;
                minutes?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["tableSizes"], "$type" | "starts">, never>) | undefined;
        analyzeAndVacuum?: ({
            start?: {
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            analyzeTimeout?: number | undefined;
            vacuumTimeout?: number | undefined;
        } & {
            start?: ({
                hours?: number | undefined;
                minutes?: number | undefined;
            } & {
                hours?: number | undefined;
                minutes?: number | undefined;
            } & Record<Exclude<keyof I["analyzeAndVacuum"]["start"], "$type" | "hours" | "minutes">, never>) | undefined;
            analyzeTimeout?: number | undefined;
            vacuumTimeout?: number | undefined;
        } & Record<Exclude<keyof I["analyzeAndVacuum"], "$type" | "start" | "analyzeTimeout" | "vacuumTimeout">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "tableSizes" | "analyzeAndVacuum">, never>>(object: I): BackgroundActivitiesConfig;
};
export declare const MasterSubclusterConfig: {
    $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig";
    encode(message: MasterSubclusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterSubclusterConfig;
    fromJSON(object: any): MasterSubclusterConfig;
    toJSON(message: MasterSubclusterConfig): unknown;
    fromPartial<I extends {
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
    } & {
        resources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources">, never>>(object: I): MasterSubclusterConfig;
};
export declare const SegmentSubclusterConfig: {
    $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig";
    encode(message: SegmentSubclusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SegmentSubclusterConfig;
    fromJSON(object: any): SegmentSubclusterConfig;
    toJSON(message: SegmentSubclusterConfig): unknown;
    fromPartial<I extends {
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
    } & {
        resources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources">, never>>(object: I): SegmentSubclusterConfig;
};
export declare const GreenplumConfig6: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6";
    encode(message: GreenplumConfig6, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GreenplumConfig6;
    fromJSON(object: any): GreenplumConfig6;
    toJSON(message: GreenplumConfig6): unknown;
    fromPartial<I extends {
        maxConnections?: number | undefined;
        logStatement?: LogStatement | undefined;
        maxSlotWalKeepSize?: number | undefined;
        gpWorkfileLimitPerSegment?: number | undefined;
        gpWorkfileLimitPerQuery?: number | undefined;
        gpWorkfileLimitFilesPerQuery?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        gpWorkfileCompression?: boolean | undefined;
        maxStatementMem?: number | undefined;
        gpAddColumnInheritsTableSetting?: boolean | undefined;
    } & {
        maxConnections?: number | undefined;
        logStatement?: LogStatement | undefined;
        maxSlotWalKeepSize?: number | undefined;
        gpWorkfileLimitPerSegment?: number | undefined;
        gpWorkfileLimitPerQuery?: number | undefined;
        gpWorkfileLimitFilesPerQuery?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        gpWorkfileCompression?: boolean | undefined;
        maxStatementMem?: number | undefined;
        gpAddColumnInheritsTableSetting?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>>(object: I): GreenplumConfig6;
};
export declare const Greenplumconfig617: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17";
    encode(message: Greenplumconfig617, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Greenplumconfig617;
    fromJSON(object: any): Greenplumconfig617;
    toJSON(message: Greenplumconfig617): unknown;
    fromPartial<I extends {
        maxConnections?: number | undefined;
        maxSlotWalKeepSize?: number | undefined;
        gpWorkfileLimitPerSegment?: number | undefined;
        gpWorkfileLimitPerQuery?: number | undefined;
        gpWorkfileLimitFilesPerQuery?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        gpWorkfileCompression?: boolean | undefined;
    } & {
        maxConnections?: number | undefined;
        maxSlotWalKeepSize?: number | undefined;
        gpWorkfileLimitPerSegment?: number | undefined;
        gpWorkfileLimitPerQuery?: number | undefined;
        gpWorkfileLimitFilesPerQuery?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        gpWorkfileCompression?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>>(object: I): Greenplumconfig617;
};
export declare const Greenplumconfig619: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19";
    encode(message: Greenplumconfig619, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Greenplumconfig619;
    fromJSON(object: any): Greenplumconfig619;
    toJSON(message: Greenplumconfig619): unknown;
    fromPartial<I extends {
        maxConnections?: number | undefined;
        logStatement?: LogStatement | undefined;
        maxSlotWalKeepSize?: number | undefined;
        gpWorkfileLimitPerSegment?: number | undefined;
        gpWorkfileLimitPerQuery?: number | undefined;
        gpWorkfileLimitFilesPerQuery?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        gpWorkfileCompression?: boolean | undefined;
        maxStatementMem?: number | undefined;
    } & {
        maxConnections?: number | undefined;
        logStatement?: LogStatement | undefined;
        maxSlotWalKeepSize?: number | undefined;
        gpWorkfileLimitPerSegment?: number | undefined;
        gpWorkfileLimitPerQuery?: number | undefined;
        gpWorkfileLimitFilesPerQuery?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        gpWorkfileCompression?: boolean | undefined;
        maxStatementMem?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>>(object: I): Greenplumconfig619;
};
export declare const Greenplumconfig621: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_21";
    encode(message: Greenplumconfig621, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Greenplumconfig621;
    fromJSON(object: any): Greenplumconfig621;
    toJSON(message: Greenplumconfig621): unknown;
    fromPartial<I extends {
        maxConnections?: number | undefined;
        logStatement?: LogStatement | undefined;
        maxSlotWalKeepSize?: number | undefined;
        gpWorkfileLimitPerSegment?: number | undefined;
        gpWorkfileLimitPerQuery?: number | undefined;
        gpWorkfileLimitFilesPerQuery?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        gpWorkfileCompression?: boolean | undefined;
        maxStatementMem?: number | undefined;
        gpAddColumnInheritsTableSetting?: boolean | undefined;
    } & {
        maxConnections?: number | undefined;
        logStatement?: LogStatement | undefined;
        maxSlotWalKeepSize?: number | undefined;
        gpWorkfileLimitPerSegment?: number | undefined;
        gpWorkfileLimitPerQuery?: number | undefined;
        gpWorkfileLimitFilesPerQuery?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        gpWorkfileCompression?: boolean | undefined;
        maxStatementMem?: number | undefined;
        gpAddColumnInheritsTableSetting?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>>(object: I): Greenplumconfig621;
};
export declare const Greenplumconfig622: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_22";
    encode(message: Greenplumconfig622, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Greenplumconfig622;
    fromJSON(object: any): Greenplumconfig622;
    toJSON(message: Greenplumconfig622): unknown;
    fromPartial<I extends {
        maxConnections?: number | undefined;
        logStatement?: LogStatement | undefined;
        maxSlotWalKeepSize?: number | undefined;
        gpWorkfileLimitPerSegment?: number | undefined;
        gpWorkfileLimitPerQuery?: number | undefined;
        gpWorkfileLimitFilesPerQuery?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        gpWorkfileCompression?: boolean | undefined;
        maxStatementMem?: number | undefined;
        gpAddColumnInheritsTableSetting?: boolean | undefined;
    } & {
        maxConnections?: number | undefined;
        logStatement?: LogStatement | undefined;
        maxSlotWalKeepSize?: number | undefined;
        gpWorkfileLimitPerSegment?: number | undefined;
        gpWorkfileLimitPerQuery?: number | undefined;
        gpWorkfileLimitFilesPerQuery?: number | undefined;
        maxPreparedTransactions?: number | undefined;
        gpWorkfileCompression?: boolean | undefined;
        maxStatementMem?: number | undefined;
        gpAddColumnInheritsTableSetting?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>>(object: I): Greenplumconfig622;
};
export declare const Greenplumconfigset617: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17";
    encode(message: Greenplumconfigset617, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Greenplumconfigset617;
    fromJSON(object: any): Greenplumconfigset617;
    toJSON(message: Greenplumconfigset617): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } | undefined;
        userConfig?: {
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } | undefined;
        defaultConfig?: {
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
        userConfig?: ({
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
        defaultConfig?: ({
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Greenplumconfigset617;
};
export declare const Greenplumconfigset619: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19";
    encode(message: Greenplumconfigset619, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Greenplumconfigset619;
    fromJSON(object: any): Greenplumconfigset619;
    toJSON(message: Greenplumconfigset619): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } | undefined;
        userConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } | undefined;
        defaultConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
        userConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
        defaultConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Greenplumconfigset619;
};
export declare const Greenplumconfigset621: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_21";
    encode(message: Greenplumconfigset621, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Greenplumconfigset621;
    fromJSON(object: any): Greenplumconfigset621;
    toJSON(message: Greenplumconfigset621): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
        userConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
        defaultConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        userConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        defaultConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Greenplumconfigset621;
};
export declare const Greenplumconfigset622: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_22";
    encode(message: Greenplumconfigset622, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Greenplumconfigset622;
    fromJSON(object: any): Greenplumconfigset622;
    toJSON(message: Greenplumconfigset622): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
        userConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
        defaultConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        userConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        defaultConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): Greenplumconfigset622;
};
export declare const GreenplumConfigSet6: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6";
    encode(message: GreenplumConfigSet6, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GreenplumConfigSet6;
    fromJSON(object: any): GreenplumConfigSet6;
    toJSON(message: GreenplumConfigSet6): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
        userConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
        defaultConfig?: {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        userConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        defaultConfig?: ({
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): GreenplumConfigSet6;
};
export declare const ConnectionPoolerConfigSet: {
    $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet";
    encode(message: ConnectionPoolerConfigSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectionPoolerConfigSet;
    fromJSON(object: any): ConnectionPoolerConfigSet;
    toJSON(message: ConnectionPoolerConfigSet): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            mode?: ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } | undefined;
        userConfig?: {
            mode?: ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } | undefined;
        defaultConfig?: {
            mode?: ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            mode?: ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } & {
            mode?: ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
        userConfig?: ({
            mode?: ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } & {
            mode?: ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
        defaultConfig?: ({
            mode?: ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } & {
            mode?: ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): ConnectionPoolerConfigSet;
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
