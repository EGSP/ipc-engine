import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.redis.v1";
/**
 * Description of a Redis backup. For more information, see
 * the Managed Service for Redis [documentation](/docs/managed-redis/concepts/backup).
 */
export interface Backup {
    $type: "yandex.cloud.mdb.redis.v1.Backup";
    /** ID of the backup. */
    id: string;
    /** ID of the folder that the backup belongs to. */
    folderId: string;
    /**
     * Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format
     * (i.e. when the backup operation was completed).
     */
    createdAt?: Date;
    /** ID of the Redis cluster that the backup was created for. */
    sourceClusterId: string;
    /**
     * Start timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format
     * (i.e. when the backup operation was started).
     */
    startedAt?: Date;
    /** Shard names used as a source for backup. */
    sourceShardNames: string[];
}
export declare const Backup: {
    $type: "yandex.cloud.mdb.redis.v1.Backup";
    encode(message: Backup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Backup;
    fromJSON(object: any): Backup;
    toJSON(message: Backup): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        startedAt?: Date | undefined;
        sourceClusterId?: string | undefined;
        sourceShardNames?: string[] | undefined;
    } & {
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        startedAt?: Date | undefined;
        sourceClusterId?: string | undefined;
        sourceShardNames?: (string[] & string[] & Record<Exclude<keyof I["sourceShardNames"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "createdAt" | "folderId" | "startedAt" | "sourceClusterId" | "sourceShardNames">, never>>(object: I): Backup;
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
