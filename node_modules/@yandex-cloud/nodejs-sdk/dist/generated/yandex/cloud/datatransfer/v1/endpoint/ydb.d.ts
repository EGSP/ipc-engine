import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
export declare enum YdbCleanupPolicy {
    YDB_CLEANUP_POLICY_UNSPECIFIED = 0,
    YDB_CLEANUP_POLICY_DISABLED = 1,
    YDB_CLEANUP_POLICY_DROP = 2,
    UNRECOGNIZED = -1
}
export declare function ydbCleanupPolicyFromJSON(object: any): YdbCleanupPolicy;
export declare function ydbCleanupPolicyToJSON(object: YdbCleanupPolicy): string;
export interface YdbSource {
    $type: "yandex.cloud.datatransfer.v1.endpoint.YdbSource";
    /** Path in YDB where to store tables */
    database: string;
    /** Instance of YDB. example: ydb-ru-prestable.yandex.net:2135 */
    instance: string;
    serviceAccountId: string;
    paths: string[];
    /** Network interface for endpoint. If none will assume public ipv4 */
    subnetId: string;
    /** Security groups */
    securityGroups: string[];
    /** Authorization Key */
    saKeyContent: string;
}
export interface YdbTarget {
    $type: "yandex.cloud.datatransfer.v1.endpoint.YdbTarget";
    /** Path in YDB where to store tables */
    database: string;
    /** Instance of YDB. example: ydb-ru-prestable.yandex.net:2135 */
    instance: string;
    serviceAccountId: string;
    /** Path extension for database, each table will be layouted into this path */
    path: string;
    /** Network interface for endpoint. If none will assume public ipv4 */
    subnetId: string;
    /** Security groups */
    securityGroups: string[];
    /** SA content */
    saKeyContent: string;
    /** Cleanup policy */
    cleanupPolicy: YdbCleanupPolicy;
}
export declare const YdbSource: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.YdbSource";
    encode(message: YdbSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): YdbSource;
    fromJSON(object: any): YdbSource;
    toJSON(message: YdbSource): unknown;
    fromPartial<I extends {
        paths?: string[] | undefined;
        subnetId?: string | undefined;
        serviceAccountId?: string | undefined;
        securityGroups?: string[] | undefined;
        database?: string | undefined;
        instance?: string | undefined;
        saKeyContent?: string | undefined;
    } & {
        paths?: (string[] & string[] & Record<Exclude<keyof I["paths"], "$type" | keyof string[]>, never>) | undefined;
        subnetId?: string | undefined;
        serviceAccountId?: string | undefined;
        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
        database?: string | undefined;
        instance?: string | undefined;
        saKeyContent?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "paths" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "instance" | "saKeyContent">, never>>(object: I): YdbSource;
};
export declare const YdbTarget: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.YdbTarget";
    encode(message: YdbTarget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): YdbTarget;
    fromJSON(object: any): YdbTarget;
    toJSON(message: YdbTarget): unknown;
    fromPartial<I extends {
        path?: string | undefined;
        subnetId?: string | undefined;
        serviceAccountId?: string | undefined;
        securityGroups?: string[] | undefined;
        database?: string | undefined;
        cleanupPolicy?: YdbCleanupPolicy | undefined;
        instance?: string | undefined;
        saKeyContent?: string | undefined;
    } & {
        path?: string | undefined;
        subnetId?: string | undefined;
        serviceAccountId?: string | undefined;
        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
        database?: string | undefined;
        cleanupPolicy?: YdbCleanupPolicy | undefined;
        instance?: string | undefined;
        saKeyContent?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "path" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "cleanupPolicy" | "instance" | "saKeyContent">, never>>(object: I): YdbTarget;
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
