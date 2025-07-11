import _m0 from "protobufjs/minimal";
import { ObjectTransferStage, TLSMode, Secret, CleanupPolicy } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
export interface PostgresObjectTransferSettings {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresObjectTransferSettings";
    /**
     * Sequences
     *
     * CREATE SEQUENCE ...
     */
    sequence: ObjectTransferStage;
    /**
     * Owned sequences
     *
     * CREATE SEQUENCE ... OWNED BY ...
     */
    sequenceOwnedBy: ObjectTransferStage;
    /**  */
    sequenceSet: ObjectTransferStage;
    /**
     * Tables
     *
     * CREATE TABLE ...
     */
    table: ObjectTransferStage;
    /**
     * Primary keys
     *
     * ALTER TABLE ... ADD PRIMARY KEY ...
     */
    primaryKey: ObjectTransferStage;
    /**
     * Foreign keys
     *
     * ALTER TABLE ... ADD FOREIGN KEY ...
     */
    fkConstraint: ObjectTransferStage;
    /**
     * Default values
     *
     * ALTER TABLE ... ALTER COLUMN ... SET DEFAULT ...
     */
    defaultValues: ObjectTransferStage;
    /**
     * Constraints
     *
     * ALTER TABLE ... ADD CONSTRAINT ...
     */
    constraint: ObjectTransferStage;
    /**
     * Indexes
     *
     * CREATE INDEX ...
     */
    index: ObjectTransferStage;
    /**
     * Views
     *
     * CREATE VIEW ...
     */
    view: ObjectTransferStage;
    /**
     * Materialized views
     *
     * CREATE MATERIALIZED VIEW ...
     */
    materializedView: ObjectTransferStage;
    /**
     * Functions
     *
     * CREATE FUNCTION ...
     */
    function: ObjectTransferStage;
    /**
     * Triggers
     *
     * CREATE TRIGGER ...
     */
    trigger: ObjectTransferStage;
    /**
     * Types
     *
     * CREATE TYPE ...
     */
    type: ObjectTransferStage;
    /**
     * Rules
     *
     * CREATE RULE ...
     */
    rule: ObjectTransferStage;
    /**
     * Collations
     *
     * CREATE COLLATION ...
     */
    collation: ObjectTransferStage;
    /**
     * Policies
     *
     * CREATE POLICY ...
     */
    policy: ObjectTransferStage;
    /**
     * Casts
     *
     * CREATE CAST ...
     */
    cast: ObjectTransferStage;
}
export interface OnPremisePostgres {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremisePostgres";
    hosts: string[];
    /** Will be used if the cluster ID is not specified. */
    port: number;
    /** TLS settings for server connection. Disabled by default. */
    tlsMode?: TLSMode;
    /** Network interface for endpoint. If none will assume public ipv4 */
    subnetId: string;
}
export interface PostgresConnection {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresConnection";
    /** Managed Service for PostgreSQL cluster ID */
    mdbClusterId: string | undefined;
    /** Connection options for on-premise PostgreSQL */
    onPremise?: OnPremisePostgres | undefined;
}
export interface PostgresSource {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresSource";
    /** Database connection settings */
    connection?: PostgresConnection;
    /** Security groups */
    securityGroups: string[];
    /** Database name */
    database: string;
    /** User for database access. */
    user: string;
    /** Password for database access. */
    password?: Secret;
    /**
     * Included tables
     *
     * If none or empty list is presented, all tables are replicated. Full table name
     * with schema. Can contain schema_name.* patterns.
     */
    includeTables: string[];
    /**
     * Excluded tables
     *
     * If none or empty list is presented, all tables are replicated. Full table name
     * with schema. Can contain schema_name.* patterns.
     */
    excludeTables: string[];
    /**
     * Maximum lag of replication slot (in bytes); after exceeding this limit
     * replication will be aborted.
     */
    slotByteLagLimit: number;
    /**
     * Database schema for service tables (__consumer_keeper,
     * __data_transfer_mole_finder). Default is public
     */
    serviceSchema: string;
    /** Select database objects to be transferred during activation or deactivation. */
    objectTransferSettings?: PostgresObjectTransferSettings;
}
export interface PostgresTarget {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresTarget";
    /** Database connection settings */
    connection?: PostgresConnection;
    /** Security groups */
    securityGroups: string[];
    /** Database name */
    database: string;
    /** User for database access. */
    user: string;
    /** Password for database access. */
    password?: Secret;
    /**
     * Cleanup policy for activate, reactivate and reupload processes. Default is
     * truncate.
     */
    cleanupPolicy: CleanupPolicy;
}
export declare const PostgresObjectTransferSettings: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresObjectTransferSettings";
    encode(message: PostgresObjectTransferSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresObjectTransferSettings;
    fromJSON(object: any): PostgresObjectTransferSettings;
    toJSON(message: PostgresObjectTransferSettings): unknown;
    fromPartial<I extends {
        function?: ObjectTransferStage | undefined;
        type?: ObjectTransferStage | undefined;
        view?: ObjectTransferStage | undefined;
        index?: ObjectTransferStage | undefined;
        trigger?: ObjectTransferStage | undefined;
        sequence?: ObjectTransferStage | undefined;
        sequenceOwnedBy?: ObjectTransferStage | undefined;
        sequenceSet?: ObjectTransferStage | undefined;
        table?: ObjectTransferStage | undefined;
        primaryKey?: ObjectTransferStage | undefined;
        fkConstraint?: ObjectTransferStage | undefined;
        defaultValues?: ObjectTransferStage | undefined;
        constraint?: ObjectTransferStage | undefined;
        materializedView?: ObjectTransferStage | undefined;
        rule?: ObjectTransferStage | undefined;
        collation?: ObjectTransferStage | undefined;
        policy?: ObjectTransferStage | undefined;
        cast?: ObjectTransferStage | undefined;
    } & {
        function?: ObjectTransferStage | undefined;
        type?: ObjectTransferStage | undefined;
        view?: ObjectTransferStage | undefined;
        index?: ObjectTransferStage | undefined;
        trigger?: ObjectTransferStage | undefined;
        sequence?: ObjectTransferStage | undefined;
        sequenceOwnedBy?: ObjectTransferStage | undefined;
        sequenceSet?: ObjectTransferStage | undefined;
        table?: ObjectTransferStage | undefined;
        primaryKey?: ObjectTransferStage | undefined;
        fkConstraint?: ObjectTransferStage | undefined;
        defaultValues?: ObjectTransferStage | undefined;
        constraint?: ObjectTransferStage | undefined;
        materializedView?: ObjectTransferStage | undefined;
        rule?: ObjectTransferStage | undefined;
        collation?: ObjectTransferStage | undefined;
        policy?: ObjectTransferStage | undefined;
        cast?: ObjectTransferStage | undefined;
    } & Record<Exclude<keyof I, "function" | "$type" | "type" | "view" | "index" | "trigger" | "sequence" | "sequenceOwnedBy" | "sequenceSet" | "table" | "primaryKey" | "fkConstraint" | "defaultValues" | "constraint" | "materializedView" | "rule" | "collation" | "policy" | "cast">, never>>(object: I): PostgresObjectTransferSettings;
};
export declare const OnPremisePostgres: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremisePostgres";
    encode(message: OnPremisePostgres, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OnPremisePostgres;
    fromJSON(object: any): OnPremisePostgres;
    toJSON(message: OnPremisePostgres): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>>(object: I): OnPremisePostgres;
};
export declare const PostgresConnection: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresConnection";
    encode(message: PostgresConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresConnection;
    fromJSON(object: any): PostgresConnection;
    toJSON(message: PostgresConnection): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "mdbClusterId" | "onPremise">, never>>(object: I): PostgresConnection;
};
export declare const PostgresSource: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresSource";
    encode(message: PostgresSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresSource;
    fromJSON(object: any): PostgresSource;
    toJSON(message: PostgresSource): unknown;
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
        user?: string | undefined;
        password?: {
            raw?: string | undefined;
        } | undefined;
        objectTransferSettings?: {
            function?: ObjectTransferStage | undefined;
            type?: ObjectTransferStage | undefined;
            view?: ObjectTransferStage | undefined;
            index?: ObjectTransferStage | undefined;
            trigger?: ObjectTransferStage | undefined;
            sequence?: ObjectTransferStage | undefined;
            sequenceOwnedBy?: ObjectTransferStage | undefined;
            sequenceSet?: ObjectTransferStage | undefined;
            table?: ObjectTransferStage | undefined;
            primaryKey?: ObjectTransferStage | undefined;
            fkConstraint?: ObjectTransferStage | undefined;
            defaultValues?: ObjectTransferStage | undefined;
            constraint?: ObjectTransferStage | undefined;
            materializedView?: ObjectTransferStage | undefined;
            rule?: ObjectTransferStage | undefined;
            collation?: ObjectTransferStage | undefined;
            policy?: ObjectTransferStage | undefined;
            cast?: ObjectTransferStage | undefined;
        } | undefined;
        includeTables?: string[] | undefined;
        excludeTables?: string[] | undefined;
        slotByteLagLimit?: number | undefined;
        serviceSchema?: string | undefined;
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
        user?: string | undefined;
        password?: ({
            raw?: string | undefined;
        } & {
            raw?: string | undefined;
        } & Record<Exclude<keyof I["password"], "$type" | "raw">, never>) | undefined;
        objectTransferSettings?: ({
            function?: ObjectTransferStage | undefined;
            type?: ObjectTransferStage | undefined;
            view?: ObjectTransferStage | undefined;
            index?: ObjectTransferStage | undefined;
            trigger?: ObjectTransferStage | undefined;
            sequence?: ObjectTransferStage | undefined;
            sequenceOwnedBy?: ObjectTransferStage | undefined;
            sequenceSet?: ObjectTransferStage | undefined;
            table?: ObjectTransferStage | undefined;
            primaryKey?: ObjectTransferStage | undefined;
            fkConstraint?: ObjectTransferStage | undefined;
            defaultValues?: ObjectTransferStage | undefined;
            constraint?: ObjectTransferStage | undefined;
            materializedView?: ObjectTransferStage | undefined;
            rule?: ObjectTransferStage | undefined;
            collation?: ObjectTransferStage | undefined;
            policy?: ObjectTransferStage | undefined;
            cast?: ObjectTransferStage | undefined;
        } & {
            function?: ObjectTransferStage | undefined;
            type?: ObjectTransferStage | undefined;
            view?: ObjectTransferStage | undefined;
            index?: ObjectTransferStage | undefined;
            trigger?: ObjectTransferStage | undefined;
            sequence?: ObjectTransferStage | undefined;
            sequenceOwnedBy?: ObjectTransferStage | undefined;
            sequenceSet?: ObjectTransferStage | undefined;
            table?: ObjectTransferStage | undefined;
            primaryKey?: ObjectTransferStage | undefined;
            fkConstraint?: ObjectTransferStage | undefined;
            defaultValues?: ObjectTransferStage | undefined;
            constraint?: ObjectTransferStage | undefined;
            materializedView?: ObjectTransferStage | undefined;
            rule?: ObjectTransferStage | undefined;
            collation?: ObjectTransferStage | undefined;
            policy?: ObjectTransferStage | undefined;
            cast?: ObjectTransferStage | undefined;
        } & Record<Exclude<keyof I["objectTransferSettings"], "function" | "$type" | "type" | "view" | "index" | "trigger" | "sequence" | "sequenceOwnedBy" | "sequenceSet" | "table" | "primaryKey" | "fkConstraint" | "defaultValues" | "constraint" | "materializedView" | "rule" | "collation" | "policy" | "cast">, never>) | undefined;
        includeTables?: (string[] & string[] & Record<Exclude<keyof I["includeTables"], "$type" | keyof string[]>, never>) | undefined;
        excludeTables?: (string[] & string[] & Record<Exclude<keyof I["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
        slotByteLagLimit?: number | undefined;
        serviceSchema?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "objectTransferSettings" | "includeTables" | "excludeTables" | "slotByteLagLimit" | "serviceSchema">, never>>(object: I): PostgresSource;
};
export declare const PostgresTarget: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresTarget";
    encode(message: PostgresTarget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresTarget;
    fromJSON(object: any): PostgresTarget;
    toJSON(message: PostgresTarget): unknown;
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
        user?: string | undefined;
        password?: {
            raw?: string | undefined;
        } | undefined;
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
        user?: string | undefined;
        password?: ({
            raw?: string | undefined;
        } & {
            raw?: string | undefined;
        } & Record<Exclude<keyof I["password"], "$type" | "raw">, never>) | undefined;
        cleanupPolicy?: CleanupPolicy | undefined;
    } & Record<Exclude<keyof I, "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "cleanupPolicy">, never>>(object: I): PostgresTarget;
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
