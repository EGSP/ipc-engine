import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1";
/**
 * A PostgreSQL Backup resource. For more information, see
 * the [Developer's Guide](/docs/managed-postgresql/concepts/backup).
 */
export interface Backup {
    $type: "yandex.cloud.mdb.postgresql.v1.Backup";
    /** Required. ID of the backup. */
    id: string;
    /** ID of the folder that the backup belongs to. */
    folderId: string;
    /**
     * Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format
     * (i.e. when the backup operation was completed).
     */
    createdAt?: Date;
    /** ID of the PostgreSQL cluster that the backup was created for. */
    sourceClusterId: string;
    /** Time when the backup operation was started. */
    startedAt?: Date;
    /** Size of backup, in bytes */
    size: number;
    /** How this backup was created (manual/automatic/etc...) */
    type: Backup_BackupCreationType;
    /** Method of backup creation */
    method: Backup_BackupMethod;
    /** Size of the journal associated with backup, in bytes */
    journalSize: number;
}
export declare enum Backup_BackupMethod {
    BACKUP_METHOD_UNSPECIFIED = 0,
    /** BASE - Base backup */
    BASE = 1,
    /** INCREMENTAL - Delta (incremental) PostgreSQL backup */
    INCREMENTAL = 2,
    UNRECOGNIZED = -1
}
export declare function backup_BackupMethodFromJSON(object: any): Backup_BackupMethod;
export declare function backup_BackupMethodToJSON(object: Backup_BackupMethod): string;
export declare enum Backup_BackupCreationType {
    BACKUP_CREATION_TYPE_UNSPECIFIED = 0,
    /** AUTOMATED - Backup created by automated daily schedule */
    AUTOMATED = 1,
    /** MANUAL - Backup created by user request */
    MANUAL = 2,
    UNRECOGNIZED = -1
}
export declare function backup_BackupCreationTypeFromJSON(object: any): Backup_BackupCreationType;
export declare function backup_BackupCreationTypeToJSON(object: Backup_BackupCreationType): string;
export declare const Backup: {
    $type: "yandex.cloud.mdb.postgresql.v1.Backup";
    encode(message: Backup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Backup;
    fromJSON(object: any): Backup;
    toJSON(message: Backup): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        type?: Backup_BackupCreationType | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        size?: number | undefined;
        startedAt?: Date | undefined;
        sourceClusterId?: string | undefined;
        method?: Backup_BackupMethod | undefined;
        journalSize?: number | undefined;
    } & {
        id?: string | undefined;
        type?: Backup_BackupCreationType | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        size?: number | undefined;
        startedAt?: Date | undefined;
        sourceClusterId?: string | undefined;
        method?: Backup_BackupMethod | undefined;
        journalSize?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "type" | "createdAt" | "folderId" | "size" | "startedAt" | "sourceClusterId" | "method" | "journalSize">, never>>(object: I): Backup;
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
