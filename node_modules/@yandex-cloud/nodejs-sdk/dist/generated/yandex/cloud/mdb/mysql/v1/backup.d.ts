import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1";
/**
 * An object that represents MySQL backup.
 *
 * See [the documentation](/docs/managed-mysql/concepts/backup) for details.
 */
export interface Backup {
    $type: "yandex.cloud.mdb.mysql.v1.Backup";
    /** ID of the backup. */
    id: string;
    /** ID of the folder that the backup belongs to. */
    folderId: string;
    /** Creation timestamp (the time when the backup operation was completed). */
    createdAt?: Date;
    /** ID of the cluster that the backup was created for. */
    sourceClusterId: string;
    /** Start timestamp (the time when the backup operation was started). */
    startedAt?: Date;
    /** Size of backup, in bytes */
    size: number;
    /** How this backup was created (manual/automatic/etc...) */
    type: Backup_BackupCreationType;
}
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
    $type: "yandex.cloud.mdb.mysql.v1.Backup";
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
    } & {
        id?: string | undefined;
        type?: Backup_BackupCreationType | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        size?: number | undefined;
        startedAt?: Date | undefined;
        sourceClusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "type" | "createdAt" | "folderId" | "size" | "startedAt" | "sourceClusterId">, never>>(object: I): Backup;
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
