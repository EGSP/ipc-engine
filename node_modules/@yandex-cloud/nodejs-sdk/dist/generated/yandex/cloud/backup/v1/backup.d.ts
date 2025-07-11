import _m0 from "protobufjs/minimal";
import { Format } from "../../../../yandex/cloud/backup/v1/policy";
export declare const protobufPackage = "yandex.cloud.backup.v1";
/** Archive is a container that holds backups of Compute Cloud instance. */
export interface Archive {
    $type: "yandex.cloud.backup.v1.Archive";
    /** ID of the backup. */
    id: string;
    /** Name of the backup. */
    name: string;
    /** ID of the backup vault. */
    vaultId: string;
    /** Archive attributes. */
    attributes?: Archive_ArchiveAttributes;
    /** Archive size. */
    size: number;
    /** Compressed data size. */
    compressedDataSize: number;
    /** Data size. */
    dataSize: number;
    /** Original data size. */
    originalDataSize: number;
    /** Logical size. */
    logicalSize: number;
    format: Format;
    createdAt?: Date;
    updatedAt?: Date;
    lastBackupCreatedAt?: Date;
    lastSeenAt?: Date;
    /**
     * If this field is true, it means that any of encryption algorithm
     * has been chosen.
     */
    protectedByPassword: boolean;
    encryptionAlgorithm: Archive_EncryptionAlgorithm;
    actions: Archive_Action[];
    /** Backup plan ID. */
    backupPlanId: string;
    /** Backup plan name. */
    backupPlanName: string;
    /** Backup plan description. */
    description: string;
    /** Display name, e.g. `INSTANCE_NAME - POLICY_NAME`. */
    displayName: string;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
    /** If this field is true, it means that the archive is consistent. */
    consistent: boolean;
    /** If this field is true, it means that the archive was deleted. */
    deleted: boolean;
    /** Resource ID. */
    resourceId: string;
}
/**
 * Encryption Algorithm for underlying backups:
 * `ENCRYPTION_ALGORITHM_UNSPECIFIED`, `NONE`, `AES128`, `AES192`,
 * `AES256`.
 */
export declare enum Archive_EncryptionAlgorithm {
    ENCRYPTION_ALGORITHM_UNSPECIFIED = 0,
    NONE = 1,
    AES128 = 2,
    AES192 = 3,
    AES256 = 4,
    UNRECOGNIZED = -1
}
export declare function archive_EncryptionAlgorithmFromJSON(object: any): Archive_EncryptionAlgorithm;
export declare function archive_EncryptionAlgorithmToJSON(object: Archive_EncryptionAlgorithm): string;
/**
 * Action with archive backup: `ACTION_UNSPECIFIED`, `REFRESH`,
 * `DELETE_BY_AGENT`.
 */
export declare enum Archive_Action {
    ACTION_UNSPECIFIED = 0,
    REFRESH = 1,
    DELETE_BY_AGENT = 2,
    UNRECOGNIZED = -1
}
export declare function archive_ActionFromJSON(object: any): Archive_Action;
export declare function archive_ActionToJSON(object: Archive_Action): string;
/** Archive attributes. */
export interface Archive_ArchiveAttributes {
    $type: "yandex.cloud.backup.v1.Archive.ArchiveAttributes";
    /** Archive attribute. Default value: `0`. */
    aaib: string;
    /** URI of the backup archive. */
    uri: string;
}
export interface Volume {
    $type: "yandex.cloud.backup.v1.Volume";
    /** Free space in the volume. */
    freeSpace: number;
    /** If this field is true, it means that the volume is bootable. */
    isBootable: boolean;
    /** If this field is true, it means that the volume is a system volume. */
    isSystem: boolean;
    /** Volume name. */
    name: string;
    /** Volume size. */
    size: number;
    /** Mount string ID. */
    mountStrid: string;
}
export interface Disk {
    $type: "yandex.cloud.backup.v1.Disk";
    /** Device model. */
    deviceModel: string;
    /** Disk name. */
    name: string;
    /** Disk size. */
    size: number;
    volumes: Volume[];
}
export interface Backup {
    $type: "yandex.cloud.backup.v1.Backup";
    /** ID of the backup. */
    id: string;
    /** ID of the backup vault. */
    vaultId: string;
    /** ID of the backup archive. */
    archiveId: string;
    createdAt?: Date;
    lastSeenAt?: Date;
    /** Backup size. */
    size: number;
    /** Deduplicated backup size. */
    deduplicatedSize: number;
    /** Backed up data size. */
    backedUpDataSize: number;
    /** Original data size. */
    originalDataSize: number;
    attributes?: Backup_BackupAttributes;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
    disks: Disk[];
    type: Backup_Type;
    /** If this field is true, it means that the backup was deleted. */
    deleted: boolean;
    /** [Policy](/docs/backup/concepts/policy) ID. */
    policyId: string;
    /** Resource ID. It identifies Compute Cloud instance in backup service. */
    resourceId: string;
}
/**
 * Backup type.
 * For detailed information, please see [Backup types](/docs/backup/concepts/backup#types).
 */
export declare enum Backup_Type {
    TYPE_UNSPECIFIED = 0,
    FULL = 1,
    INCREMENTAL = 2,
    UNRECOGNIZED = -1
}
export declare function backup_TypeFromJSON(object: any): Backup_Type;
export declare function backup_TypeToJSON(object: Backup_Type): string;
/** Backup attributes. */
export interface Backup_BackupAttributes {
    $type: "yandex.cloud.backup.v1.Backup.BackupAttributes";
    /** Backup stream name. */
    streamName: string;
    /** URI of the backup archive. */
    uri: string;
}
/** BackupFile represents a single unit of file or directory system inside the backup. */
export interface BackupFile {
    $type: "yandex.cloud.backup.v1.BackupFile";
    /** ID of the item. Should be used as source ID in case of listing. */
    id: string;
    /** Might be empty if this is root directory. */
    parentId?: string;
    /** Type of the item. */
    type: BackupFile_Type;
    /** Absolute path of the item. */
    fullPath: string;
    /** Name of the directory / file. */
    name: string;
    /** Size in bytes of the item. */
    size: number;
    /** Actions that might be done on the object. */
    actions?: BackupFile_Actions;
    modifiedAt?: Date;
}
/** Type of the file. */
export declare enum BackupFile_Type {
    TYPE_UNSPECIFIED = 0,
    TYPE_DIR = 1,
    TYPE_FILE = 2,
    UNRECOGNIZED = -1
}
export declare function backupFile_TypeFromJSON(object: any): BackupFile_Type;
export declare function backupFile_TypeToJSON(object: BackupFile_Type): string;
export interface BackupFile_Actions {
    $type: "yandex.cloud.backup.v1.BackupFile.Actions";
    /** Allows to send request to restore item to disk */
    restoreToDisk: boolean;
    /** Allows to move to location by id. */
    goToLocation: boolean;
}
export declare const Archive: {
    $type: "yandex.cloud.backup.v1.Archive";
    encode(message: Archive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Archive;
    fromJSON(object: any): Archive;
    toJSON(message: Archive): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        resourceId?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        format?: Format | undefined;
        updatedAt?: Date | undefined;
        size?: number | undefined;
        computeInstanceId?: string | undefined;
        vaultId?: string | undefined;
        compressedDataSize?: number | undefined;
        dataSize?: number | undefined;
        originalDataSize?: number | undefined;
        logicalSize?: number | undefined;
        protectedByPassword?: boolean | undefined;
        encryptionAlgorithm?: Archive_EncryptionAlgorithm | undefined;
        actions?: Archive_Action[] | undefined;
        backupPlanId?: string | undefined;
        backupPlanName?: string | undefined;
        displayName?: string | undefined;
        consistent?: boolean | undefined;
        deleted?: boolean | undefined;
        attributes?: {
            uri?: string | undefined;
            aaib?: string | undefined;
        } | undefined;
        lastBackupCreatedAt?: Date | undefined;
        lastSeenAt?: Date | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        resourceId?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        format?: Format | undefined;
        updatedAt?: Date | undefined;
        size?: number | undefined;
        computeInstanceId?: string | undefined;
        vaultId?: string | undefined;
        compressedDataSize?: number | undefined;
        dataSize?: number | undefined;
        originalDataSize?: number | undefined;
        logicalSize?: number | undefined;
        protectedByPassword?: boolean | undefined;
        encryptionAlgorithm?: Archive_EncryptionAlgorithm | undefined;
        actions?: (Archive_Action[] & Archive_Action[] & Record<Exclude<keyof I["actions"], "$type" | keyof Archive_Action[]>, never>) | undefined;
        backupPlanId?: string | undefined;
        backupPlanName?: string | undefined;
        displayName?: string | undefined;
        consistent?: boolean | undefined;
        deleted?: boolean | undefined;
        attributes?: ({
            uri?: string | undefined;
            aaib?: string | undefined;
        } & {
            uri?: string | undefined;
            aaib?: string | undefined;
        } & Record<Exclude<keyof I["attributes"], "$type" | "uri" | "aaib">, never>) | undefined;
        lastBackupCreatedAt?: Date | undefined;
        lastSeenAt?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "resourceId" | "name" | "createdAt" | "format" | "updatedAt" | "size" | "computeInstanceId" | "vaultId" | "compressedDataSize" | "dataSize" | "originalDataSize" | "logicalSize" | "protectedByPassword" | "encryptionAlgorithm" | "actions" | "backupPlanId" | "backupPlanName" | "displayName" | "consistent" | "deleted" | "attributes" | "lastBackupCreatedAt" | "lastSeenAt">, never>>(object: I): Archive;
};
export declare const Archive_ArchiveAttributes: {
    $type: "yandex.cloud.backup.v1.Archive.ArchiveAttributes";
    encode(message: Archive_ArchiveAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Archive_ArchiveAttributes;
    fromJSON(object: any): Archive_ArchiveAttributes;
    toJSON(message: Archive_ArchiveAttributes): unknown;
    fromPartial<I extends {
        uri?: string | undefined;
        aaib?: string | undefined;
    } & {
        uri?: string | undefined;
        aaib?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "uri" | "aaib">, never>>(object: I): Archive_ArchiveAttributes;
};
export declare const Volume: {
    $type: "yandex.cloud.backup.v1.Volume";
    encode(message: Volume, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Volume;
    fromJSON(object: any): Volume;
    toJSON(message: Volume): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        size?: number | undefined;
        freeSpace?: number | undefined;
        isBootable?: boolean | undefined;
        isSystem?: boolean | undefined;
        mountStrid?: string | undefined;
    } & {
        name?: string | undefined;
        size?: number | undefined;
        freeSpace?: number | undefined;
        isBootable?: boolean | undefined;
        isSystem?: boolean | undefined;
        mountStrid?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "size" | "freeSpace" | "isBootable" | "isSystem" | "mountStrid">, never>>(object: I): Volume;
};
export declare const Disk: {
    $type: "yandex.cloud.backup.v1.Disk";
    encode(message: Disk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Disk;
    fromJSON(object: any): Disk;
    toJSON(message: Disk): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        size?: number | undefined;
        deviceModel?: string | undefined;
        volumes?: {
            name?: string | undefined;
            size?: number | undefined;
            freeSpace?: number | undefined;
            isBootable?: boolean | undefined;
            isSystem?: boolean | undefined;
            mountStrid?: string | undefined;
        }[] | undefined;
    } & {
        name?: string | undefined;
        size?: number | undefined;
        deviceModel?: string | undefined;
        volumes?: ({
            name?: string | undefined;
            size?: number | undefined;
            freeSpace?: number | undefined;
            isBootable?: boolean | undefined;
            isSystem?: boolean | undefined;
            mountStrid?: string | undefined;
        }[] & ({
            name?: string | undefined;
            size?: number | undefined;
            freeSpace?: number | undefined;
            isBootable?: boolean | undefined;
            isSystem?: boolean | undefined;
            mountStrid?: string | undefined;
        } & {
            name?: string | undefined;
            size?: number | undefined;
            freeSpace?: number | undefined;
            isBootable?: boolean | undefined;
            isSystem?: boolean | undefined;
            mountStrid?: string | undefined;
        } & Record<Exclude<keyof I["volumes"][number], "$type" | "name" | "size" | "freeSpace" | "isBootable" | "isSystem" | "mountStrid">, never>)[] & Record<Exclude<keyof I["volumes"], "$type" | keyof {
            name?: string | undefined;
            size?: number | undefined;
            freeSpace?: number | undefined;
            isBootable?: boolean | undefined;
            isSystem?: boolean | undefined;
            mountStrid?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "size" | "deviceModel" | "volumes">, never>>(object: I): Disk;
};
export declare const Backup: {
    $type: "yandex.cloud.backup.v1.Backup";
    encode(message: Backup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Backup;
    fromJSON(object: any): Backup;
    toJSON(message: Backup): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        type?: Backup_Type | undefined;
        resourceId?: string | undefined;
        createdAt?: Date | undefined;
        size?: number | undefined;
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
        vaultId?: string | undefined;
        originalDataSize?: number | undefined;
        deleted?: boolean | undefined;
        attributes?: {
            uri?: string | undefined;
            streamName?: string | undefined;
        } | undefined;
        lastSeenAt?: Date | undefined;
        archiveId?: string | undefined;
        deduplicatedSize?: number | undefined;
        backedUpDataSize?: number | undefined;
        disks?: {
            name?: string | undefined;
            size?: number | undefined;
            deviceModel?: string | undefined;
            volumes?: {
                name?: string | undefined;
                size?: number | undefined;
                freeSpace?: number | undefined;
                isBootable?: boolean | undefined;
                isSystem?: boolean | undefined;
                mountStrid?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        id?: string | undefined;
        type?: Backup_Type | undefined;
        resourceId?: string | undefined;
        createdAt?: Date | undefined;
        size?: number | undefined;
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
        vaultId?: string | undefined;
        originalDataSize?: number | undefined;
        deleted?: boolean | undefined;
        attributes?: ({
            uri?: string | undefined;
            streamName?: string | undefined;
        } & {
            uri?: string | undefined;
            streamName?: string | undefined;
        } & Record<Exclude<keyof I["attributes"], "$type" | "uri" | "streamName">, never>) | undefined;
        lastSeenAt?: Date | undefined;
        archiveId?: string | undefined;
        deduplicatedSize?: number | undefined;
        backedUpDataSize?: number | undefined;
        disks?: ({
            name?: string | undefined;
            size?: number | undefined;
            deviceModel?: string | undefined;
            volumes?: {
                name?: string | undefined;
                size?: number | undefined;
                freeSpace?: number | undefined;
                isBootable?: boolean | undefined;
                isSystem?: boolean | undefined;
                mountStrid?: string | undefined;
            }[] | undefined;
        }[] & ({
            name?: string | undefined;
            size?: number | undefined;
            deviceModel?: string | undefined;
            volumes?: {
                name?: string | undefined;
                size?: number | undefined;
                freeSpace?: number | undefined;
                isBootable?: boolean | undefined;
                isSystem?: boolean | undefined;
                mountStrid?: string | undefined;
            }[] | undefined;
        } & {
            name?: string | undefined;
            size?: number | undefined;
            deviceModel?: string | undefined;
            volumes?: ({
                name?: string | undefined;
                size?: number | undefined;
                freeSpace?: number | undefined;
                isBootable?: boolean | undefined;
                isSystem?: boolean | undefined;
                mountStrid?: string | undefined;
            }[] & ({
                name?: string | undefined;
                size?: number | undefined;
                freeSpace?: number | undefined;
                isBootable?: boolean | undefined;
                isSystem?: boolean | undefined;
                mountStrid?: string | undefined;
            } & {
                name?: string | undefined;
                size?: number | undefined;
                freeSpace?: number | undefined;
                isBootable?: boolean | undefined;
                isSystem?: boolean | undefined;
                mountStrid?: string | undefined;
            } & Record<Exclude<keyof I["disks"][number]["volumes"][number], "$type" | "name" | "size" | "freeSpace" | "isBootable" | "isSystem" | "mountStrid">, never>)[] & Record<Exclude<keyof I["disks"][number]["volumes"], "$type" | keyof {
                name?: string | undefined;
                size?: number | undefined;
                freeSpace?: number | undefined;
                isBootable?: boolean | undefined;
                isSystem?: boolean | undefined;
                mountStrid?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["disks"][number], "$type" | "name" | "size" | "deviceModel" | "volumes">, never>)[] & Record<Exclude<keyof I["disks"], "$type" | keyof {
            name?: string | undefined;
            size?: number | undefined;
            deviceModel?: string | undefined;
            volumes?: {
                name?: string | undefined;
                size?: number | undefined;
                freeSpace?: number | undefined;
                isBootable?: boolean | undefined;
                isSystem?: boolean | undefined;
                mountStrid?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "type" | "resourceId" | "createdAt" | "size" | "policyId" | "computeInstanceId" | "vaultId" | "originalDataSize" | "deleted" | "attributes" | "lastSeenAt" | "archiveId" | "deduplicatedSize" | "backedUpDataSize" | "disks">, never>>(object: I): Backup;
};
export declare const Backup_BackupAttributes: {
    $type: "yandex.cloud.backup.v1.Backup.BackupAttributes";
    encode(message: Backup_BackupAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Backup_BackupAttributes;
    fromJSON(object: any): Backup_BackupAttributes;
    toJSON(message: Backup_BackupAttributes): unknown;
    fromPartial<I extends {
        uri?: string | undefined;
        streamName?: string | undefined;
    } & {
        uri?: string | undefined;
        streamName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "uri" | "streamName">, never>>(object: I): Backup_BackupAttributes;
};
export declare const BackupFile: {
    $type: "yandex.cloud.backup.v1.BackupFile";
    encode(message: BackupFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupFile;
    fromJSON(object: any): BackupFile;
    toJSON(message: BackupFile): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        type?: BackupFile_Type | undefined;
        name?: string | undefined;
        modifiedAt?: Date | undefined;
        size?: number | undefined;
        actions?: {
            restoreToDisk?: boolean | undefined;
            goToLocation?: boolean | undefined;
        } | undefined;
        fullPath?: string | undefined;
        parentId?: string | undefined;
    } & {
        id?: string | undefined;
        type?: BackupFile_Type | undefined;
        name?: string | undefined;
        modifiedAt?: Date | undefined;
        size?: number | undefined;
        actions?: ({
            restoreToDisk?: boolean | undefined;
            goToLocation?: boolean | undefined;
        } & {
            restoreToDisk?: boolean | undefined;
            goToLocation?: boolean | undefined;
        } & Record<Exclude<keyof I["actions"], "$type" | "restoreToDisk" | "goToLocation">, never>) | undefined;
        fullPath?: string | undefined;
        parentId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "type" | "name" | "modifiedAt" | "size" | "actions" | "fullPath" | "parentId">, never>>(object: I): BackupFile;
};
export declare const BackupFile_Actions: {
    $type: "yandex.cloud.backup.v1.BackupFile.Actions";
    encode(message: BackupFile_Actions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupFile_Actions;
    fromJSON(object: any): BackupFile_Actions;
    toJSON(message: BackupFile_Actions): unknown;
    fromPartial<I extends {
        restoreToDisk?: boolean | undefined;
        goToLocation?: boolean | undefined;
    } & {
        restoreToDisk?: boolean | undefined;
        goToLocation?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "restoreToDisk" | "goToLocation">, never>>(object: I): BackupFile_Actions;
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
