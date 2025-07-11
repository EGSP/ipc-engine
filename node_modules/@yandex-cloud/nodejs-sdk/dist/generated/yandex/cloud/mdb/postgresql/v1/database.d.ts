import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1";
/**
 * A PostgreSQL Database resource. For more information, see
 * the [Developer's Guide](/docs/managed-postgresql/concepts).
 */
export interface Database {
    $type: "yandex.cloud.mdb.postgresql.v1.Database";
    /** Name of the database. */
    name: string;
    /** ID of the PostgreSQL cluster that the database belongs to. */
    clusterId: string;
    /** Name of the user assigned as the owner of the database. */
    owner: string;
    /**
     * POSIX locale for string sorting order.
     * Can only be set at creation time.
     */
    lcCollate: string;
    /**
     * POSIX locale for character classification.
     * Can only be set at creation time.
     */
    lcCtype: string;
    /** PostgreSQL extensions enabled for the database. */
    extensions: Extension[];
    /** Name of the database template. */
    templateDb: string;
    /**
     * Deletion Protection inhibits deletion of the database
     *
     * Default value: `unspecified` (inherits cluster's deletion_protection)
     */
    deletionProtection?: boolean;
}
export interface Extension {
    $type: "yandex.cloud.mdb.postgresql.v1.Extension";
    /**
     * Name of the extension, e.g. `pg_trgm` or `pg_btree`.
     * Extensions supported by Managed Service for PostgreSQL are [listed in the Developer's Guide](/docs/managed-postgresql/operations/extensions/cluster-extensions).
     */
    name: string;
    /** Version of the extension. */
    version: string;
}
export interface DatabaseSpec {
    $type: "yandex.cloud.mdb.postgresql.v1.DatabaseSpec";
    /** Name of the PostgreSQL database. 1-63 characters long. */
    name: string;
    /**
     * Name of the user to be assigned as the owner of the database.
     * To get the list of available PostgreSQL users, make a [UserService.List] request.
     */
    owner: string;
    /**
     * POSIX locale for string sorting order.
     * Can only be set at creation time.
     */
    lcCollate: string;
    /**
     * POSIX locale for character classification.
     * Can only be set at creation time.
     */
    lcCtype: string;
    /** PostgreSQL extensions to be enabled for the database. */
    extensions: Extension[];
    /** Name of the PostgreSQL database template. */
    templateDb: string;
    /**
     * Deletion Protection inhibits deletion of the database
     *
     * Default value: `unspecified` (inherits cluster's deletion_protection)
     */
    deletionProtection?: boolean;
}
export declare const Database: {
    $type: "yandex.cloud.mdb.postgresql.v1.Database";
    encode(message: Database, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Database;
    fromJSON(object: any): Database;
    toJSON(message: Database): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        deletionProtection?: boolean | undefined;
        clusterId?: string | undefined;
        extensions?: {
            name?: string | undefined;
            version?: string | undefined;
        }[] | undefined;
        owner?: string | undefined;
        lcCollate?: string | undefined;
        lcCtype?: string | undefined;
        templateDb?: string | undefined;
    } & {
        name?: string | undefined;
        deletionProtection?: boolean | undefined;
        clusterId?: string | undefined;
        extensions?: ({
            name?: string | undefined;
            version?: string | undefined;
        }[] & ({
            name?: string | undefined;
            version?: string | undefined;
        } & {
            name?: string | undefined;
            version?: string | undefined;
        } & Record<Exclude<keyof I["extensions"][number], "$type" | "name" | "version">, never>)[] & Record<Exclude<keyof I["extensions"], "$type" | keyof {
            name?: string | undefined;
            version?: string | undefined;
        }[]>, never>) | undefined;
        owner?: string | undefined;
        lcCollate?: string | undefined;
        lcCtype?: string | undefined;
        templateDb?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "deletionProtection" | "clusterId" | "extensions" | "owner" | "lcCollate" | "lcCtype" | "templateDb">, never>>(object: I): Database;
};
export declare const Extension: {
    $type: "yandex.cloud.mdb.postgresql.v1.Extension";
    encode(message: Extension, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Extension;
    fromJSON(object: any): Extension;
    toJSON(message: Extension): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        version?: string | undefined;
    } & {
        name?: string | undefined;
        version?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "version">, never>>(object: I): Extension;
};
export declare const DatabaseSpec: {
    $type: "yandex.cloud.mdb.postgresql.v1.DatabaseSpec";
    encode(message: DatabaseSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DatabaseSpec;
    fromJSON(object: any): DatabaseSpec;
    toJSON(message: DatabaseSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        deletionProtection?: boolean | undefined;
        extensions?: {
            name?: string | undefined;
            version?: string | undefined;
        }[] | undefined;
        owner?: string | undefined;
        lcCollate?: string | undefined;
        lcCtype?: string | undefined;
        templateDb?: string | undefined;
    } & {
        name?: string | undefined;
        deletionProtection?: boolean | undefined;
        extensions?: ({
            name?: string | undefined;
            version?: string | undefined;
        }[] & ({
            name?: string | undefined;
            version?: string | undefined;
        } & {
            name?: string | undefined;
            version?: string | undefined;
        } & Record<Exclude<keyof I["extensions"][number], "$type" | "name" | "version">, never>)[] & Record<Exclude<keyof I["extensions"], "$type" | keyof {
            name?: string | undefined;
            version?: string | undefined;
        }[]>, never>) | undefined;
        owner?: string | undefined;
        lcCollate?: string | undefined;
        lcCtype?: string | undefined;
        templateDb?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "deletionProtection" | "extensions" | "owner" | "lcCollate" | "lcCtype" | "templateDb">, never>>(object: I): DatabaseSpec;
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
