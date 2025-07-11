import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.sqlserver.v1.config";
/**
 * SQL Server 2017 Standard edition supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-2017).
 *
 * Any options that are not listed here are not supported.
 */
export interface SQLServerConfig2017std {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017std";
    /**
     * Limits the number of processors to use in parallel plan execution per task.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-max-degree-of-parallelism-server-configuration-option?view=sql-server-2017).
     */
    maxDegreeOfParallelism?: number;
    /**
     * Specifies the threshold at which SQL Server creates and runs parallel plans for queries.
     *
     * SQL Server creates and runs a parallel plan for a query only when the estimated cost to run a serial plan for the same query is higher than the value of the option.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-cost-threshold-for-parallelism-server-configuration-option?view=sql-server-2017).
     */
    costThresholdForParallelism?: number;
    /**
     * Describes how to configure login auditing to monitor SQL Server Database Engine login activity.
     *
     * Possible values:
     * * 0 - do not log login attempts;
     * * 1 - log only failed login attempts;
     * * 2 - log only successful login attempts (not recommended);
     * * 3 - log all login attempts (not recommended).
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/ssms/configure-login-auditing-sql-server-management-studio?view=sql-server-2017).
     */
    auditLevel?: number;
    /**
     * Manages the fill factor server configuration option.
     *
     * When an index is created or rebuilt, the fill factor determines the percentage of space on each index leaf-level page to be filled with data, reserving the rest as free space for future growth.
     *
     * Values 0 and 100 mean full page usage (no space reserved).
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-fill-factor-server-configuration-option?view=sql-server-2017).
     */
    fillFactorPercent?: number;
    /**
     * Determines whether plans should be cached only after second execution.
     *
     * Allows to avoid SQL cache bloat because of single-use plans.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/optimize-for-ad-hoc-workloads-server-configuration-option?view=sql-server-2017).
     */
    optimizeForAdHocWorkloads?: boolean;
}
export interface SQLServerConfigSet2017std {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017std";
    /** Effective settings for an SQL Server 2017 cluster (a combination of settings defined in [user_config] and [default_config]). */
    effectiveConfig?: SQLServerConfig2017std;
    /** User-defined settings for an SQL Server 2017 cluster. */
    userConfig?: SQLServerConfig2017std;
    /** Default configuration for an SQL Server 2017 cluster. */
    defaultConfig?: SQLServerConfig2017std;
}
/**
 * SQL Server 2017 Enterprise edition supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-2017).
 *
 * Any options that are not listed here are not supported.
 */
export interface SQLServerConfig2017ent {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017ent";
    /**
     * Limits the number of processors to use in parallel plan execution per task.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-max-degree-of-parallelism-server-configuration-option?view=sql-server-2017).
     */
    maxDegreeOfParallelism?: number;
    /**
     * Specifies the threshold at which SQL Server creates and runs parallel plans for queries.
     *
     * SQL Server creates and runs a parallel plan for a query only when the estimated cost to run a serial plan for the same query is higher than the value of the option.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-cost-threshold-for-parallelism-server-configuration-option?view=sql-server-2017).
     */
    costThresholdForParallelism?: number;
    /**
     * Describes how to configure login auditing to monitor SQL Server Database Engine login activity.
     *
     * Possible values:
     * * 0 - do not log login attempts;
     * * 1 - log only failed login attempts;
     * * 2 - log only successful login attempts (not recommended);
     * * 3 - log all login attempts (not recommended).
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/ssms/configure-login-auditing-sql-server-management-studio?view=sql-server-2017).
     */
    auditLevel?: number;
    /**
     * Manages the fill factor server configuration option.
     * When an index is created or rebuilt, the fill factor determines the percentage of space on each index leaf-level page to be filled with data, reserving the rest as free space for future growth.
     *
     * Values 0 and 100 mean full page usage (no space reserved).
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-fill-factor-server-configuration-option?view=sql-server-2017).
     */
    fillFactorPercent?: number;
    /**
     * Determines whether plans should be cached only after second execution.
     *
     * Allows to avoid SQL cache bloat because of single-use plans.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/optimize-for-ad-hoc-workloads-server-configuration-option?view=sql-server-2017).
     */
    optimizeForAdHocWorkloads?: boolean;
}
export interface SQLServerConfigSet2017ent {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017ent";
    /** Effective settings for an SQL Server 2017 cluster (a combination of settings defined in [user_config] and [default_config]). */
    effectiveConfig?: SQLServerConfig2017ent;
    /** User-defined settings for an SQL Server 2017 cluster. */
    userConfig?: SQLServerConfig2017ent;
    /** Default configuration for an SQL Server 2017 cluster. */
    defaultConfig?: SQLServerConfig2017ent;
}
export declare const SQLServerConfig2017std: {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017std";
    encode(message: SQLServerConfig2017std, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SQLServerConfig2017std;
    fromJSON(object: any): SQLServerConfig2017std;
    toJSON(message: SQLServerConfig2017std): unknown;
    fromPartial<I extends {
        maxDegreeOfParallelism?: number | undefined;
        costThresholdForParallelism?: number | undefined;
        auditLevel?: number | undefined;
        fillFactorPercent?: number | undefined;
        optimizeForAdHocWorkloads?: boolean | undefined;
    } & {
        maxDegreeOfParallelism?: number | undefined;
        costThresholdForParallelism?: number | undefined;
        auditLevel?: number | undefined;
        fillFactorPercent?: number | undefined;
        optimizeForAdHocWorkloads?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>>(object: I): SQLServerConfig2017std;
};
export declare const SQLServerConfigSet2017std: {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017std";
    encode(message: SQLServerConfigSet2017std, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SQLServerConfigSet2017std;
    fromJSON(object: any): SQLServerConfigSet2017std;
    toJSON(message: SQLServerConfigSet2017std): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
        userConfig?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
        defaultConfig?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        userConfig?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        defaultConfig?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): SQLServerConfigSet2017std;
};
export declare const SQLServerConfig2017ent: {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017ent";
    encode(message: SQLServerConfig2017ent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SQLServerConfig2017ent;
    fromJSON(object: any): SQLServerConfig2017ent;
    toJSON(message: SQLServerConfig2017ent): unknown;
    fromPartial<I extends {
        maxDegreeOfParallelism?: number | undefined;
        costThresholdForParallelism?: number | undefined;
        auditLevel?: number | undefined;
        fillFactorPercent?: number | undefined;
        optimizeForAdHocWorkloads?: boolean | undefined;
    } & {
        maxDegreeOfParallelism?: number | undefined;
        costThresholdForParallelism?: number | undefined;
        auditLevel?: number | undefined;
        fillFactorPercent?: number | undefined;
        optimizeForAdHocWorkloads?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>>(object: I): SQLServerConfig2017ent;
};
export declare const SQLServerConfigSet2017ent: {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017ent";
    encode(message: SQLServerConfigSet2017ent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SQLServerConfigSet2017ent;
    fromJSON(object: any): SQLServerConfigSet2017ent;
    toJSON(message: SQLServerConfigSet2017ent): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
        userConfig?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
        defaultConfig?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        userConfig?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        defaultConfig?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): SQLServerConfigSet2017ent;
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
