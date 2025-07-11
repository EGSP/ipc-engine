import _m0 from "protobufjs/minimal";
import { TLSMode, ObjectTransferStage, Secret, CleanupPolicy } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
export interface OnPremiseMysql {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMysql";
    hosts: string[];
    /** Database port */
    port: number;
    /** TLS settings for server connection. Disabled by default. */
    tlsMode?: TLSMode;
    /** Network interface for endpoint. If none will assume public ipv4 */
    subnetId: string;
}
export interface MysqlConnection {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlConnection";
    /** Managed Service for MySQL cluster ID */
    mdbClusterId: string | undefined;
    /** Connection options for on-premise MySQL */
    onPremise?: OnPremiseMysql | undefined;
}
export interface MysqlObjectTransferSettings {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlObjectTransferSettings";
    /**
     * Views
     *
     * CREATE VIEW ...
     */
    view: ObjectTransferStage;
    /**
     * Routines
     *
     * CREATE PROCEDURE ... ; CREATE FUNCTION ... ;
     */
    routine: ObjectTransferStage;
    /**
     * Triggers
     *
     * CREATE TRIGGER ...
     */
    trigger: ObjectTransferStage;
    tables: ObjectTransferStage;
}
export interface MysqlSource {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlSource";
    /** Database connection settings */
    connection?: MysqlConnection;
    /** Security groups */
    securityGroups: string[];
    /**
     * Database name
     *
     * You can leave it empty, then it will be possible to transfer tables from several
     * databases at the same time from this source.
     */
    database: string;
    /**
     * Database for service tables
     *
     * Default: data source database. Here created technical tables (__tm_keeper,
     * __tm_gtid_keeper).
     */
    serviceDatabase: string;
    /** User for database access. */
    user: string;
    /** Password for database access. */
    password?: Secret;
    includeTablesRegex: string[];
    excludeTablesRegex: string[];
    /**
     * Database timezone
     *
     * Is used for parsing timestamps for saving source timezones. Accepts values from
     * IANA timezone database. Default: local timezone.
     */
    timezone: string;
    /**
     * Schema migration
     *
     * Select database objects to be transferred during activation or deactivation.
     */
    objectTransferSettings?: MysqlObjectTransferSettings;
}
export interface MysqlTarget {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlTarget";
    /** Database connection settings */
    connection?: MysqlConnection;
    /** Security groups */
    securityGroups: string[];
    /**
     * Database name
     *
     * Allowed to leave it empty, then the tables will be created in databases with the
     * same names as on the source. If this field is empty, then you must fill below db
     * schema for service table.
     */
    database: string;
    /** User for database access. */
    user: string;
    /** Password for database access. */
    password?: Secret;
    /** Default: NO_AUTO_VALUE_ON_ZERO,NO_DIR_IN_CREATE,NO_ENGINE_SUBSTITUTION. */
    sqlMode: string;
    /**
     * Disable constraints checks
     *
     * Recommend to disable for increase replication speed, but if schema contain
     * cascading operations we don't recommend to disable. This option set
     * FOREIGN_KEY_CHECKS=0 and UNIQUE_CHECKS=0.
     */
    skipConstraintChecks: boolean;
    /**
     * Database timezone
     *
     * Is used for parsing timestamps for saving source timezones. Accepts values from
     * IANA timezone database. Default: local timezone.
     */
    timezone: string;
    /**
     * Cleanup policy
     *
     * Cleanup policy for activate, reactivate and reupload processes. Default is
     * DISABLED.
     */
    cleanupPolicy: CleanupPolicy;
    /**
     * Database schema for service table
     *
     * Default: db name. Here created technical tables (__tm_keeper, __tm_gtid_keeper).
     */
    serviceDatabase: string;
}
export declare const OnPremiseMysql: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMysql";
    encode(message: OnPremiseMysql, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OnPremiseMysql;
    fromJSON(object: any): OnPremiseMysql;
    toJSON(message: OnPremiseMysql): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        subnetId?: string | undefined;
        hosts?: string[] | undefined;
        tlsMode?: {
            enabled?: {
                caCertificate?: string | undefined;
            } | undefined;
            disabled?: {} | undefined;
        } | undefined;
    } & {
        port?: number | undefined;
        subnetId?: string | undefined;
        hosts?: (string[] & string[] & Record<Exclude<keyof I["hosts"], "$type" | keyof string[]>, never>) | undefined;
        tlsMode?: ({
            enabled?: {
                caCertificate?: string | undefined;
            } | undefined;
            disabled?: {} | undefined;
        } & {
            enabled?: ({
                caCertificate?: string | undefined;
            } & {
                caCertificate?: string | undefined;
            } & Record<Exclude<keyof I["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
            disabled?: ({} & {} & Record<Exclude<keyof I["tlsMode"]["disabled"], "$type">, never>) | undefined;
        } & Record<Exclude<keyof I["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>>(object: I): OnPremiseMysql;
};
export declare const MysqlConnection: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlConnection";
    encode(message: MysqlConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MysqlConnection;
    fromJSON(object: any): MysqlConnection;
    toJSON(message: MysqlConnection): unknown;
    fromPartial<I extends {
        mdbClusterId?: string | undefined;
        onPremise?: {
            port?: number | undefined;
            subnetId?: string | undefined;
            hosts?: string[] | undefined;
            tlsMode?: {
                enabled?: {
                    caCertificate?: string | undefined;
                } | undefined;
                disabled?: {} | undefined;
            } | undefined;
        } | undefined;
    } & {
        mdbClusterId?: string | undefined;
        onPremise?: ({
            port?: number | undefined;
            subnetId?: string | undefined;
            hosts?: string[] | undefined;
            tlsMode?: {
                enabled?: {
                    caCertificate?: string | undefined;
                } | undefined;
                disabled?: {} | undefined;
            } | undefined;
        } & {
            port?: number | undefined;
            subnetId?: string | undefined;
            hosts?: (string[] & string[] & Record<Exclude<keyof I["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
            tlsMode?: ({
                enabled?: {
                    caCertificate?: string | undefined;
                } | undefined;
                disabled?: {} | undefined;
            } & {
                enabled?: ({
                    caCertificate?: string | undefined;
                } & {
                    caCertificate?: string | undefined;
                } & Record<Exclude<keyof I["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                disabled?: ({} & {} & Record<Exclude<keyof I["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
        } & Record<Exclude<keyof I["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "mdbClusterId" | "onPremise">, never>>(object: I): MysqlConnection;
};
export declare const MysqlObjectTransferSettings: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlObjectTransferSettings";
    encode(message: MysqlObjectTransferSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MysqlObjectTransferSettings;
    fromJSON(object: any): MysqlObjectTransferSettings;
    toJSON(message: MysqlObjectTransferSettings): unknown;
    fromPartial<I extends {
        view?: ObjectTransferStage | undefined;
        routine?: ObjectTransferStage | undefined;
        trigger?: ObjectTransferStage | undefined;
        tables?: ObjectTransferStage | undefined;
    } & {
        view?: ObjectTransferStage | undefined;
        routine?: ObjectTransferStage | undefined;
        trigger?: ObjectTransferStage | undefined;
        tables?: ObjectTransferStage | undefined;
    } & Record<Exclude<keyof I, "$type" | "view" | "routine" | "trigger" | "tables">, never>>(object: I): MysqlObjectTransferSettings;
};
export declare const MysqlSource: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlSource";
    encode(message: MysqlSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MysqlSource;
    fromJSON(object: any): MysqlSource;
    toJSON(message: MysqlSource): unknown;
    fromPartial<I extends {
        connection?: {
            mdbClusterId?: string | undefined;
            onPremise?: {
                port?: number | undefined;
                subnetId?: string | undefined;
                hosts?: string[] | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        securityGroups?: string[] | undefined;
        database?: string | undefined;
        serviceDatabase?: string | undefined;
        user?: string | undefined;
        includeTablesRegex?: string[] | undefined;
        excludeTablesRegex?: string[] | undefined;
        timezone?: string | undefined;
        password?: {
            raw?: string | undefined;
        } | undefined;
        objectTransferSettings?: {
            view?: ObjectTransferStage | undefined;
            routine?: ObjectTransferStage | undefined;
            trigger?: ObjectTransferStage | undefined;
            tables?: ObjectTransferStage | undefined;
        } | undefined;
    } & {
        connection?: ({
            mdbClusterId?: string | undefined;
            onPremise?: {
                port?: number | undefined;
                subnetId?: string | undefined;
                hosts?: string[] | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
            } | undefined;
        } & {
            mdbClusterId?: string | undefined;
            onPremise?: ({
                port?: number | undefined;
                subnetId?: string | undefined;
                hosts?: string[] | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
            } & {
                port?: number | undefined;
                subnetId?: string | undefined;
                hosts?: (string[] & string[] & Record<Exclude<keyof I["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                tlsMode?: ({
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } & {
                    enabled?: ({
                        caCertificate?: string | undefined;
                    } & {
                        caCertificate?: string | undefined;
                    } & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                    disabled?: ({} & {} & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
            } & Record<Exclude<keyof I["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
        } & Record<Exclude<keyof I["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
        database?: string | undefined;
        serviceDatabase?: string | undefined;
        user?: string | undefined;
        includeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["includeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
        excludeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["excludeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
        timezone?: string | undefined;
        password?: ({
            raw?: string | undefined;
        } & {
            raw?: string | undefined;
        } & Record<Exclude<keyof I["password"], "$type" | "raw">, never>) | undefined;
        objectTransferSettings?: ({
            view?: ObjectTransferStage | undefined;
            routine?: ObjectTransferStage | undefined;
            trigger?: ObjectTransferStage | undefined;
            tables?: ObjectTransferStage | undefined;
        } & {
            view?: ObjectTransferStage | undefined;
            routine?: ObjectTransferStage | undefined;
            trigger?: ObjectTransferStage | undefined;
            tables?: ObjectTransferStage | undefined;
        } & Record<Exclude<keyof I["objectTransferSettings"], "$type" | "view" | "routine" | "trigger" | "tables">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "includeTablesRegex" | "excludeTablesRegex" | "timezone" | "password" | "objectTransferSettings">, never>>(object: I): MysqlSource;
};
export declare const MysqlTarget: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlTarget";
    encode(message: MysqlTarget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MysqlTarget;
    fromJSON(object: any): MysqlTarget;
    toJSON(message: MysqlTarget): unknown;
    fromPartial<I extends {
        connection?: {
            mdbClusterId?: string | undefined;
            onPremise?: {
                port?: number | undefined;
                subnetId?: string | undefined;
                hosts?: string[] | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        securityGroups?: string[] | undefined;
        database?: string | undefined;
        serviceDatabase?: string | undefined;
        user?: string | undefined;
        timezone?: string | undefined;
        password?: {
            raw?: string | undefined;
        } | undefined;
        sqlMode?: string | undefined;
        skipConstraintChecks?: boolean | undefined;
        cleanupPolicy?: CleanupPolicy | undefined;
    } & {
        connection?: ({
            mdbClusterId?: string | undefined;
            onPremise?: {
                port?: number | undefined;
                subnetId?: string | undefined;
                hosts?: string[] | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
            } | undefined;
        } & {
            mdbClusterId?: string | undefined;
            onPremise?: ({
                port?: number | undefined;
                subnetId?: string | undefined;
                hosts?: string[] | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
            } & {
                port?: number | undefined;
                subnetId?: string | undefined;
                hosts?: (string[] & string[] & Record<Exclude<keyof I["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                tlsMode?: ({
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } & {
                    enabled?: ({
                        caCertificate?: string | undefined;
                    } & {
                        caCertificate?: string | undefined;
                    } & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                    disabled?: ({} & {} & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
            } & Record<Exclude<keyof I["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
        } & Record<Exclude<keyof I["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
        database?: string | undefined;
        serviceDatabase?: string | undefined;
        user?: string | undefined;
        timezone?: string | undefined;
        password?: ({
            raw?: string | undefined;
        } & {
            raw?: string | undefined;
        } & Record<Exclude<keyof I["password"], "$type" | "raw">, never>) | undefined;
        sqlMode?: string | undefined;
        skipConstraintChecks?: boolean | undefined;
        cleanupPolicy?: CleanupPolicy | undefined;
    } & Record<Exclude<keyof I, "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "timezone" | "password" | "sqlMode" | "skipConstraintChecks" | "cleanupPolicy">, never>>(object: I): MysqlTarget;
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
