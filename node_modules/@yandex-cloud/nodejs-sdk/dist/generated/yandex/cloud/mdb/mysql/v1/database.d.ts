import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1";
/**
 * An object that represents MySQL database.
 *
 * See [the documentation](/docs/managed-mysql/operations/databases) for details.
 */
export interface Database {
    $type: "yandex.cloud.mdb.mysql.v1.Database";
    /** Name of the database. */
    name: string;
    /** ID of the cluster that the database belongs to. */
    clusterId: string;
}
export interface DatabaseSpec {
    $type: "yandex.cloud.mdb.mysql.v1.DatabaseSpec";
    /** Name of the database. */
    name: string;
}
export declare const Database: {
    $type: "yandex.cloud.mdb.mysql.v1.Database";
    encode(message: Database, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Database;
    fromJSON(object: any): Database;
    toJSON(message: Database): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "clusterId">, never>>(object: I): Database;
};
export declare const DatabaseSpec: {
    $type: "yandex.cloud.mdb.mysql.v1.DatabaseSpec";
    encode(message: DatabaseSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DatabaseSpec;
    fromJSON(object: any): DatabaseSpec;
    toJSON(message: DatabaseSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): DatabaseSpec;
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
