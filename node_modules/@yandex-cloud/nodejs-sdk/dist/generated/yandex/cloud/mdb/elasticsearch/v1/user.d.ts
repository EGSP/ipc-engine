import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
/** An Elasticsearch user. */
export interface User {
    $type: "yandex.cloud.mdb.elasticsearch.v1.User";
    /** Name of the Elasticsearch user. */
    name: string;
    /** ID of the Elasticsearch cluster the user belongs to. */
    clusterId: string;
}
export interface UserSpec {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UserSpec";
    /** Name of the Elasticsearch user. */
    name: string;
    /** Password of the Elasticsearch user. */
    password: string;
}
export declare const User: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.User";
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "clusterId">, never>>(object: I): User;
};
export declare const UserSpec: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UserSpec";
    encode(message: UserSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserSpec;
    fromJSON(object: any): UserSpec;
    toJSON(message: UserSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        password?: string | undefined;
    } & {
        name?: string | undefined;
        password?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "password">, never>>(object: I): UserSpec;
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
