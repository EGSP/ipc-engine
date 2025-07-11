import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
export interface Backup {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Backup";
    /** Required. ID of the backup. */
    id: string;
    /** ID of the folder that the backup belongs to. */
    folderId: string;
    /** ID of the associated Elasticsearch cluster. */
    sourceClusterId: string;
    /** The time when the backup operation was started. */
    startedAt?: Date;
    /** The time when the backup was created (i.e. when the backup operation completed). */
    createdAt?: Date;
    /** Indices names. (max 100) */
    indices: string[];
    /** Elasticsearch version used to create the snapshot */
    elasticsearchVersion: string;
    /** Total size of all indices in backup. in bytes */
    sizeBytes: number;
    /** Total count of indices in backup */
    indicesTotal: number;
}
export declare const Backup: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Backup";
    encode(message: Backup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Backup;
    fromJSON(object: any): Backup;
    toJSON(message: Backup): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        startedAt?: Date | undefined;
        sizeBytes?: number | undefined;
        sourceClusterId?: string | undefined;
        indices?: string[] | undefined;
        elasticsearchVersion?: string | undefined;
        indicesTotal?: number | undefined;
    } & {
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        startedAt?: Date | undefined;
        sizeBytes?: number | undefined;
        sourceClusterId?: string | undefined;
        indices?: (string[] & string[] & Record<Exclude<keyof I["indices"], "$type" | keyof string[]>, never>) | undefined;
        elasticsearchVersion?: string | undefined;
        indicesTotal?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "createdAt" | "folderId" | "startedAt" | "sizeBytes" | "sourceClusterId" | "indices" | "elasticsearchVersion" | "indicesTotal">, never>>(object: I): Backup;
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
