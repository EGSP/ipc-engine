import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha.config";
/** Options and structure of `MysqlConfig5_7` reflects MySQL 5.7 configuration file */
export interface Mysqlconfig57 {
    $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfig5_7";
    /**
     * Size of the InnoDB buffer pool used for caching table and index data.
     *
     * For details, see [MySQL documentation for the parameter](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_buffer_pool_size).
     */
    innodbBufferPoolSize?: number;
    /**
     * The maximum permitted number of simultaneous client connections.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_connections).
     */
    maxConnections?: number;
    /**
     * Time that it takes to process a query before it is considered slow.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_long_query_time).
     */
    longQueryTime?: number;
}
export interface Mysqlconfigset57 {
    $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfigSet5_7";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfig5_7";
    encode(message: Mysqlconfig57, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mysqlconfig57;
    fromJSON(object: any): Mysqlconfig57;
    toJSON(message: Mysqlconfig57): unknown;
    fromPartial<I extends {
        maxConnections?: number | undefined;
        innodbBufferPoolSize?: number | undefined;
        longQueryTime?: number | undefined;
    } & {
        maxConnections?: number | undefined;
        innodbBufferPoolSize?: number | undefined;
        longQueryTime?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxConnections" | "innodbBufferPoolSize" | "longQueryTime">, never>>(object: I): Mysqlconfig57;
};
export declare const Mysqlconfigset57: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfigSet5_7";
    encode(message: Mysqlconfigset57, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mysqlconfigset57;
    fromJSON(object: any): Mysqlconfigset57;
    toJSON(message: Mysqlconfigset57): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
        } | undefined;
        userConfig?: {
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
        } | undefined;
        defaultConfig?: {
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
        } & {
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "maxConnections" | "innodbBufferPoolSize" | "longQueryTime">, never>) | undefined;
        userConfig?: ({
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
        } & {
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "maxConnections" | "innodbBufferPoolSize" | "longQueryTime">, never>) | undefined;
        defaultConfig?: ({
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
        } & {
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "maxConnections" | "innodbBufferPoolSize" | "longQueryTime">, never>) | undefined;
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
