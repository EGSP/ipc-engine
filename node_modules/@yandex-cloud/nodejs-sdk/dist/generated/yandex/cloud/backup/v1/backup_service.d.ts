/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Archive, Backup, BackupFile } from "../../../../yandex/cloud/backup/v1/backup";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.backup.v1";
export interface ListArchivesRequest {
    $type: "yandex.cloud.backup.v1.ListArchivesRequest";
    /** List of archives in specified folder. */
    folderId: string | undefined;
    /** List of archives of the specified Compute Cloud instance. */
    computeInstanceId: string | undefined;
}
export interface ListArchivesResponse {
    $type: "yandex.cloud.backup.v1.ListArchivesResponse";
    archives: Archive[];
}
export interface ListBackupsRequest {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest";
    /** List backups that belongs to specific Compute Cloud instance. */
    computeInstanceId: string | undefined;
    /** List backups that belongs to specific archive of specific folder. */
    archive?: ListBackupsRequest_ArchiveParameters | undefined;
    /** List backups that belongs to specific folder. */
    folderId: string | undefined;
    /** List backups that belongs to specific instance and policy at the same time. */
    instancePolicy?: ListBackupsRequest_InstancePolicy | undefined;
    /** List backups by specific resource ID. */
    resourceId: string | undefined;
    /** List backups by specific policy ID. */
    policyId: string | undefined;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "createdAt desc" if omitted.
     */
    orderBy: string;
    /**
     * Filter list by various parameters.
     * Supported parameters are:
     * * created_at
     *
     * Supported logic operators:
     * * AND
     */
    filter: string;
}
export interface ListBackupsRequest_ArchiveParameters {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest.ArchiveParameters";
    /** Archive ID. */
    archiveId: string;
    /** Folder ID. */
    folderId: string;
}
export interface ListBackupsRequest_InstancePolicy {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest.InstancePolicy";
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
    /** Policy ID. */
    policyId: string;
}
export interface ListBackupsResponse {
    $type: "yandex.cloud.backup.v1.ListBackupsResponse";
    backups: Backup[];
}
export interface ListFilesRequest {
    $type: "yandex.cloud.backup.v1.ListFilesRequest";
    /** Folder ID. */
    folderId: string;
    /** Backup ID. */
    backupId: string;
    /** Empty source will list disks of the backup. */
    sourceId: string;
}
export interface ListFilesResponse {
    $type: "yandex.cloud.backup.v1.ListFilesResponse";
    files: BackupFile[];
}
export interface GetBackupRequest {
    $type: "yandex.cloud.backup.v1.GetBackupRequest";
    /** Backup ID. */
    backupId: string;
    /** Folder ID. */
    folderId: string;
}
export interface StartRecoveryRequest {
    $type: "yandex.cloud.backup.v1.StartRecoveryRequest";
    /** Destination Compute Cloud instance ID to which backup should be applied. */
    computeInstanceId: string;
    /** Backup ID that will be applied to destination Compute Cloud instance. */
    backupId: string;
}
export interface StartRecoveryMetadata {
    $type: "yandex.cloud.backup.v1.StartRecoveryMetadata";
    /** Progress of the backup process. */
    progressPercentage: number;
    /** Source Backup ID that will be applied. */
    srcBackupId: string;
    /** Destination Compute Cloud instance ID to which backup will be applied. */
    dstComputeInstanceId: string;
}
export interface TargetPathOriginal {
    $type: "yandex.cloud.backup.v1.TargetPathOriginal";
}
export interface TargetPathCustom {
    $type: "yandex.cloud.backup.v1.TargetPathCustom";
    /** Custom folder for file recovery. */
    path: string;
}
export interface FilesRecoveryOptions {
    $type: "yandex.cloud.backup.v1.FilesRecoveryOptions";
    /** Overwrite options declares the behavior for files that already exists on the file system. */
    overwrite: FilesRecoveryOptions_Overwrite;
    /** specifies whether the recovery plan is able to reboot host if needed. */
    rebootIfNeeded: boolean;
    /** Keep original paths of files. */
    original?: TargetPathOriginal | undefined;
    /** Set custom folder for file recovery. */
    custom?: TargetPathCustom | undefined;
}
export declare enum FilesRecoveryOptions_Overwrite {
    /** OVERWRITE_UNSPECIFIED - Unspecified value treated as Overwrite all */
    OVERWRITE_UNSPECIFIED = 0,
    /** OVERWRITE_ALL - All overwrites all existing files by recovered ones. */
    OVERWRITE_ALL = 1,
    /** OVERWRITE_OLDER - Older overwrites older files only. */
    OVERWRITE_OLDER = 2,
    /** OVERWRITE_NONE - None does not overwrites files at all. */
    OVERWRITE_NONE = 3,
    UNRECOGNIZED = -1
}
export declare function filesRecoveryOptions_OverwriteFromJSON(object: any): FilesRecoveryOptions_Overwrite;
export declare function filesRecoveryOptions_OverwriteToJSON(object: FilesRecoveryOptions_Overwrite): string;
export interface StartFilesRecoveryRequest {
    $type: "yandex.cloud.backup.v1.StartFilesRecoveryRequest";
    /** Destination instance ID. */
    computeInstanceId: string;
    /** Backup ID. */
    backupId: string;
    opts?: FilesRecoveryOptions;
    sourceIds: string[];
}
export interface StartFilesRecoveryMetadata {
    $type: "yandex.cloud.backup.v1.StartFilesRecoveryMetadata";
    progressPercentage: number;
    /** Destination instance ID. */
    computeInstanceId: string;
    /** Backup ID. */
    backupId: string;
    sourceIds: string[];
}
export interface DeleteBackupRequest {
    $type: "yandex.cloud.backup.v1.DeleteBackupRequest";
    /** Compute Cloud instance ID of the Backup. */
    computeInstanceId: string;
    /** Backup ID that should be deleted. */
    backupId: string;
}
export interface DeleteBackupMetadata {
    $type: "yandex.cloud.backup.v1.DeleteBackupMetadata";
    /** Compute Cloud instance ID of the Backup. */
    computeInstanceId: string;
    /** Backup ID that should be deleted. */
    backupId: string;
}
export declare const ListArchivesRequest: {
    $type: "yandex.cloud.backup.v1.ListArchivesRequest";
    encode(message: ListArchivesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListArchivesRequest;
    fromJSON(object: any): ListArchivesRequest;
    toJSON(message: ListArchivesRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        folderId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "computeInstanceId">, never>>(object: I): ListArchivesRequest;
};
export declare const ListArchivesResponse: {
    $type: "yandex.cloud.backup.v1.ListArchivesResponse";
    encode(message: ListArchivesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListArchivesResponse;
    fromJSON(object: any): ListArchivesResponse;
    toJSON(message: ListArchivesResponse): unknown;
    fromPartial<I extends {
        archives?: {
            description?: string | undefined;
            id?: string | undefined;
            resourceId?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            format?: import("./policy").Format | undefined;
            updatedAt?: Date | undefined;
            size?: number | undefined;
            computeInstanceId?: string | undefined;
            vaultId?: string | undefined;
            compressedDataSize?: number | undefined;
            dataSize?: number | undefined;
            originalDataSize?: number | undefined;
            logicalSize?: number | undefined;
            protectedByPassword?: boolean | undefined;
            encryptionAlgorithm?: import("../../../../yandex/cloud/backup/v1/backup").Archive_EncryptionAlgorithm | undefined;
            actions?: import("../../../../yandex/cloud/backup/v1/backup").Archive_Action[] | undefined;
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
        }[] | undefined;
    } & {
        archives?: ({
            description?: string | undefined;
            id?: string | undefined;
            resourceId?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            format?: import("./policy").Format | undefined;
            updatedAt?: Date | undefined;
            size?: number | undefined;
            computeInstanceId?: string | undefined;
            vaultId?: string | undefined;
            compressedDataSize?: number | undefined;
            dataSize?: number | undefined;
            originalDataSize?: number | undefined;
            logicalSize?: number | undefined;
            protectedByPassword?: boolean | undefined;
            encryptionAlgorithm?: import("../../../../yandex/cloud/backup/v1/backup").Archive_EncryptionAlgorithm | undefined;
            actions?: import("../../../../yandex/cloud/backup/v1/backup").Archive_Action[] | undefined;
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
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            resourceId?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            format?: import("./policy").Format | undefined;
            updatedAt?: Date | undefined;
            size?: number | undefined;
            computeInstanceId?: string | undefined;
            vaultId?: string | undefined;
            compressedDataSize?: number | undefined;
            dataSize?: number | undefined;
            originalDataSize?: number | undefined;
            logicalSize?: number | undefined;
            protectedByPassword?: boolean | undefined;
            encryptionAlgorithm?: import("../../../../yandex/cloud/backup/v1/backup").Archive_EncryptionAlgorithm | undefined;
            actions?: import("../../../../yandex/cloud/backup/v1/backup").Archive_Action[] | undefined;
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
            format?: import("./policy").Format | undefined;
            updatedAt?: Date | undefined;
            size?: number | undefined;
            computeInstanceId?: string | undefined;
            vaultId?: string | undefined;
            compressedDataSize?: number | undefined;
            dataSize?: number | undefined;
            originalDataSize?: number | undefined;
            logicalSize?: number | undefined;
            protectedByPassword?: boolean | undefined;
            encryptionAlgorithm?: import("../../../../yandex/cloud/backup/v1/backup").Archive_EncryptionAlgorithm | undefined;
            actions?: (import("../../../../yandex/cloud/backup/v1/backup").Archive_Action[] & import("../../../../yandex/cloud/backup/v1/backup").Archive_Action[] & Record<Exclude<keyof I["archives"][number]["actions"], "$type" | keyof import("../../../../yandex/cloud/backup/v1/backup").Archive_Action[]>, never>) | undefined;
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
            } & Record<Exclude<keyof I["archives"][number]["attributes"], "$type" | "uri" | "aaib">, never>) | undefined;
            lastBackupCreatedAt?: Date | undefined;
            lastSeenAt?: Date | undefined;
        } & Record<Exclude<keyof I["archives"][number], "$type" | "description" | "id" | "resourceId" | "name" | "createdAt" | "format" | "updatedAt" | "size" | "computeInstanceId" | "vaultId" | "compressedDataSize" | "dataSize" | "originalDataSize" | "logicalSize" | "protectedByPassword" | "encryptionAlgorithm" | "actions" | "backupPlanId" | "backupPlanName" | "displayName" | "consistent" | "deleted" | "attributes" | "lastBackupCreatedAt" | "lastSeenAt">, never>)[] & Record<Exclude<keyof I["archives"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            resourceId?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            format?: import("./policy").Format | undefined;
            updatedAt?: Date | undefined;
            size?: number | undefined;
            computeInstanceId?: string | undefined;
            vaultId?: string | undefined;
            compressedDataSize?: number | undefined;
            dataSize?: number | undefined;
            originalDataSize?: number | undefined;
            logicalSize?: number | undefined;
            protectedByPassword?: boolean | undefined;
            encryptionAlgorithm?: import("../../../../yandex/cloud/backup/v1/backup").Archive_EncryptionAlgorithm | undefined;
            actions?: import("../../../../yandex/cloud/backup/v1/backup").Archive_Action[] | undefined;
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "archives">, never>>(object: I): ListArchivesResponse;
};
export declare const ListBackupsRequest: {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest";
    encode(message: ListBackupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsRequest;
    fromJSON(object: any): ListBackupsRequest;
    toJSON(message: ListBackupsRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        archive?: {
            folderId?: string | undefined;
            archiveId?: string | undefined;
        } | undefined;
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
        orderBy?: string | undefined;
        instancePolicy?: {
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
        } | undefined;
    } & {
        resourceId?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        archive?: ({
            folderId?: string | undefined;
            archiveId?: string | undefined;
        } & {
            folderId?: string | undefined;
            archiveId?: string | undefined;
        } & Record<Exclude<keyof I["archive"], "$type" | "folderId" | "archiveId">, never>) | undefined;
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
        orderBy?: string | undefined;
        instancePolicy?: ({
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
        } & {
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
        } & Record<Exclude<keyof I["instancePolicy"], "$type" | "policyId" | "computeInstanceId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "filter" | "folderId" | "archive" | "policyId" | "computeInstanceId" | "orderBy" | "instancePolicy">, never>>(object: I): ListBackupsRequest;
};
export declare const ListBackupsRequest_ArchiveParameters: {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest.ArchiveParameters";
    encode(message: ListBackupsRequest_ArchiveParameters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsRequest_ArchiveParameters;
    fromJSON(object: any): ListBackupsRequest_ArchiveParameters;
    toJSON(message: ListBackupsRequest_ArchiveParameters): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        archiveId?: string | undefined;
    } & {
        folderId?: string | undefined;
        archiveId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "archiveId">, never>>(object: I): ListBackupsRequest_ArchiveParameters;
};
export declare const ListBackupsRequest_InstancePolicy: {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest.InstancePolicy";
    encode(message: ListBackupsRequest_InstancePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsRequest_InstancePolicy;
    fromJSON(object: any): ListBackupsRequest_InstancePolicy;
    toJSON(message: ListBackupsRequest_InstancePolicy): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId" | "computeInstanceId">, never>>(object: I): ListBackupsRequest_InstancePolicy;
};
export declare const ListBackupsResponse: {
    $type: "yandex.cloud.backup.v1.ListBackupsResponse";
    encode(message: ListBackupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsResponse;
    fromJSON(object: any): ListBackupsResponse;
    toJSON(message: ListBackupsResponse): unknown;
    fromPartial<I extends {
        backups?: {
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/backup").Backup_Type | undefined;
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
        }[] | undefined;
    } & {
        backups?: ({
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/backup").Backup_Type | undefined;
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
        }[] & ({
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/backup").Backup_Type | undefined;
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
            type?: import("../../../../yandex/cloud/backup/v1/backup").Backup_Type | undefined;
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
            } & Record<Exclude<keyof I["backups"][number]["attributes"], "$type" | "uri" | "streamName">, never>) | undefined;
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
                } & Record<Exclude<keyof I["backups"][number]["disks"][number]["volumes"][number], "$type" | "name" | "size" | "freeSpace" | "isBootable" | "isSystem" | "mountStrid">, never>)[] & Record<Exclude<keyof I["backups"][number]["disks"][number]["volumes"], "$type" | keyof {
                    name?: string | undefined;
                    size?: number | undefined;
                    freeSpace?: number | undefined;
                    isBootable?: boolean | undefined;
                    isSystem?: boolean | undefined;
                    mountStrid?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["backups"][number]["disks"][number], "$type" | "name" | "size" | "deviceModel" | "volumes">, never>)[] & Record<Exclude<keyof I["backups"][number]["disks"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["backups"][number], "$type" | "id" | "type" | "resourceId" | "createdAt" | "size" | "policyId" | "computeInstanceId" | "vaultId" | "originalDataSize" | "deleted" | "attributes" | "lastSeenAt" | "archiveId" | "deduplicatedSize" | "backedUpDataSize" | "disks">, never>)[] & Record<Exclude<keyof I["backups"], "$type" | keyof {
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/backup").Backup_Type | undefined;
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "backups">, never>>(object: I): ListBackupsResponse;
};
export declare const ListFilesRequest: {
    $type: "yandex.cloud.backup.v1.ListFilesRequest";
    encode(message: ListFilesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFilesRequest;
    fromJSON(object: any): ListFilesRequest;
    toJSON(message: ListFilesRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        backupId?: string | undefined;
        sourceId?: string | undefined;
    } & {
        folderId?: string | undefined;
        backupId?: string | undefined;
        sourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "backupId" | "sourceId">, never>>(object: I): ListFilesRequest;
};
export declare const ListFilesResponse: {
    $type: "yandex.cloud.backup.v1.ListFilesResponse";
    encode(message: ListFilesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFilesResponse;
    fromJSON(object: any): ListFilesResponse;
    toJSON(message: ListFilesResponse): unknown;
    fromPartial<I extends {
        files?: {
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/backup").BackupFile_Type | undefined;
            name?: string | undefined;
            modifiedAt?: Date | undefined;
            size?: number | undefined;
            actions?: {
                restoreToDisk?: boolean | undefined;
                goToLocation?: boolean | undefined;
            } | undefined;
            fullPath?: string | undefined;
            parentId?: string | undefined;
        }[] | undefined;
    } & {
        files?: ({
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/backup").BackupFile_Type | undefined;
            name?: string | undefined;
            modifiedAt?: Date | undefined;
            size?: number | undefined;
            actions?: {
                restoreToDisk?: boolean | undefined;
                goToLocation?: boolean | undefined;
            } | undefined;
            fullPath?: string | undefined;
            parentId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/backup").BackupFile_Type | undefined;
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
            type?: import("../../../../yandex/cloud/backup/v1/backup").BackupFile_Type | undefined;
            name?: string | undefined;
            modifiedAt?: Date | undefined;
            size?: number | undefined;
            actions?: ({
                restoreToDisk?: boolean | undefined;
                goToLocation?: boolean | undefined;
            } & {
                restoreToDisk?: boolean | undefined;
                goToLocation?: boolean | undefined;
            } & Record<Exclude<keyof I["files"][number]["actions"], "$type" | "restoreToDisk" | "goToLocation">, never>) | undefined;
            fullPath?: string | undefined;
            parentId?: string | undefined;
        } & Record<Exclude<keyof I["files"][number], "$type" | "id" | "type" | "name" | "modifiedAt" | "size" | "actions" | "fullPath" | "parentId">, never>)[] & Record<Exclude<keyof I["files"], "$type" | keyof {
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/backup").BackupFile_Type | undefined;
            name?: string | undefined;
            modifiedAt?: Date | undefined;
            size?: number | undefined;
            actions?: {
                restoreToDisk?: boolean | undefined;
                goToLocation?: boolean | undefined;
            } | undefined;
            fullPath?: string | undefined;
            parentId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "files">, never>>(object: I): ListFilesResponse;
};
export declare const GetBackupRequest: {
    $type: "yandex.cloud.backup.v1.GetBackupRequest";
    encode(message: GetBackupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBackupRequest;
    fromJSON(object: any): GetBackupRequest;
    toJSON(message: GetBackupRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        backupId?: string | undefined;
    } & {
        folderId?: string | undefined;
        backupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "backupId">, never>>(object: I): GetBackupRequest;
};
export declare const StartRecoveryRequest: {
    $type: "yandex.cloud.backup.v1.StartRecoveryRequest";
    encode(message: StartRecoveryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartRecoveryRequest;
    fromJSON(object: any): StartRecoveryRequest;
    toJSON(message: StartRecoveryRequest): unknown;
    fromPartial<I extends {
        computeInstanceId?: string | undefined;
        backupId?: string | undefined;
    } & {
        computeInstanceId?: string | undefined;
        backupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "computeInstanceId" | "backupId">, never>>(object: I): StartRecoveryRequest;
};
export declare const StartRecoveryMetadata: {
    $type: "yandex.cloud.backup.v1.StartRecoveryMetadata";
    encode(message: StartRecoveryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartRecoveryMetadata;
    fromJSON(object: any): StartRecoveryMetadata;
    toJSON(message: StartRecoveryMetadata): unknown;
    fromPartial<I extends {
        progressPercentage?: number | undefined;
        srcBackupId?: string | undefined;
        dstComputeInstanceId?: string | undefined;
    } & {
        progressPercentage?: number | undefined;
        srcBackupId?: string | undefined;
        dstComputeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "progressPercentage" | "srcBackupId" | "dstComputeInstanceId">, never>>(object: I): StartRecoveryMetadata;
};
export declare const TargetPathOriginal: {
    $type: "yandex.cloud.backup.v1.TargetPathOriginal";
    encode(_: TargetPathOriginal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetPathOriginal;
    fromJSON(_: any): TargetPathOriginal;
    toJSON(_: TargetPathOriginal): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): TargetPathOriginal;
};
export declare const TargetPathCustom: {
    $type: "yandex.cloud.backup.v1.TargetPathCustom";
    encode(message: TargetPathCustom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetPathCustom;
    fromJSON(object: any): TargetPathCustom;
    toJSON(message: TargetPathCustom): unknown;
    fromPartial<I extends {
        path?: string | undefined;
    } & {
        path?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "path">, never>>(object: I): TargetPathCustom;
};
export declare const FilesRecoveryOptions: {
    $type: "yandex.cloud.backup.v1.FilesRecoveryOptions";
    encode(message: FilesRecoveryOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FilesRecoveryOptions;
    fromJSON(object: any): FilesRecoveryOptions;
    toJSON(message: FilesRecoveryOptions): unknown;
    fromPartial<I extends {
        overwrite?: FilesRecoveryOptions_Overwrite | undefined;
        rebootIfNeeded?: boolean | undefined;
        original?: {} | undefined;
        custom?: {
            path?: string | undefined;
        } | undefined;
    } & {
        overwrite?: FilesRecoveryOptions_Overwrite | undefined;
        rebootIfNeeded?: boolean | undefined;
        original?: ({} & {} & Record<Exclude<keyof I["original"], "$type">, never>) | undefined;
        custom?: ({
            path?: string | undefined;
        } & {
            path?: string | undefined;
        } & Record<Exclude<keyof I["custom"], "$type" | "path">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "overwrite" | "rebootIfNeeded" | "original" | "custom">, never>>(object: I): FilesRecoveryOptions;
};
export declare const StartFilesRecoveryRequest: {
    $type: "yandex.cloud.backup.v1.StartFilesRecoveryRequest";
    encode(message: StartFilesRecoveryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartFilesRecoveryRequest;
    fromJSON(object: any): StartFilesRecoveryRequest;
    toJSON(message: StartFilesRecoveryRequest): unknown;
    fromPartial<I extends {
        computeInstanceId?: string | undefined;
        backupId?: string | undefined;
        sourceIds?: string[] | undefined;
        opts?: {
            overwrite?: FilesRecoveryOptions_Overwrite | undefined;
            rebootIfNeeded?: boolean | undefined;
            original?: {} | undefined;
            custom?: {
                path?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        computeInstanceId?: string | undefined;
        backupId?: string | undefined;
        sourceIds?: (string[] & string[] & Record<Exclude<keyof I["sourceIds"], "$type" | keyof string[]>, never>) | undefined;
        opts?: ({
            overwrite?: FilesRecoveryOptions_Overwrite | undefined;
            rebootIfNeeded?: boolean | undefined;
            original?: {} | undefined;
            custom?: {
                path?: string | undefined;
            } | undefined;
        } & {
            overwrite?: FilesRecoveryOptions_Overwrite | undefined;
            rebootIfNeeded?: boolean | undefined;
            original?: ({} & {} & Record<Exclude<keyof I["opts"]["original"], "$type">, never>) | undefined;
            custom?: ({
                path?: string | undefined;
            } & {
                path?: string | undefined;
            } & Record<Exclude<keyof I["opts"]["custom"], "$type" | "path">, never>) | undefined;
        } & Record<Exclude<keyof I["opts"], "$type" | "overwrite" | "rebootIfNeeded" | "original" | "custom">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "computeInstanceId" | "backupId" | "sourceIds" | "opts">, never>>(object: I): StartFilesRecoveryRequest;
};
export declare const StartFilesRecoveryMetadata: {
    $type: "yandex.cloud.backup.v1.StartFilesRecoveryMetadata";
    encode(message: StartFilesRecoveryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartFilesRecoveryMetadata;
    fromJSON(object: any): StartFilesRecoveryMetadata;
    toJSON(message: StartFilesRecoveryMetadata): unknown;
    fromPartial<I extends {
        computeInstanceId?: string | undefined;
        backupId?: string | undefined;
        progressPercentage?: number | undefined;
        sourceIds?: string[] | undefined;
    } & {
        computeInstanceId?: string | undefined;
        backupId?: string | undefined;
        progressPercentage?: number | undefined;
        sourceIds?: (string[] & string[] & Record<Exclude<keyof I["sourceIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "computeInstanceId" | "backupId" | "progressPercentage" | "sourceIds">, never>>(object: I): StartFilesRecoveryMetadata;
};
export declare const DeleteBackupRequest: {
    $type: "yandex.cloud.backup.v1.DeleteBackupRequest";
    encode(message: DeleteBackupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackupRequest;
    fromJSON(object: any): DeleteBackupRequest;
    toJSON(message: DeleteBackupRequest): unknown;
    fromPartial<I extends {
        computeInstanceId?: string | undefined;
        backupId?: string | undefined;
    } & {
        computeInstanceId?: string | undefined;
        backupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "computeInstanceId" | "backupId">, never>>(object: I): DeleteBackupRequest;
};
export declare const DeleteBackupMetadata: {
    $type: "yandex.cloud.backup.v1.DeleteBackupMetadata";
    encode(message: DeleteBackupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackupMetadata;
    fromJSON(object: any): DeleteBackupMetadata;
    toJSON(message: DeleteBackupMetadata): unknown;
    fromPartial<I extends {
        computeInstanceId?: string | undefined;
        backupId?: string | undefined;
    } & {
        computeInstanceId?: string | undefined;
        backupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "computeInstanceId" | "backupId">, never>>(object: I): DeleteBackupMetadata;
};
/** A set of methods for managing [backups](/docs/backup/concepts/backup). */
export declare const BackupServiceService: {
    /** List backups using filters. */
    readonly list: {
        readonly path: "/yandex.cloud.backup.v1.BackupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBackupsRequest;
        readonly responseSerialize: (value: ListBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBackupsResponse;
    };
    /**
     * List archives that holds backups for specified folder or
     * specified [Compute Cloud instance](/docs/backup/concepts/vm-connection#os).
     */
    readonly listArchives: {
        readonly path: "/yandex.cloud.backup.v1.BackupService/ListArchives";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListArchivesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListArchivesRequest;
        readonly responseSerialize: (value: ListArchivesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListArchivesResponse;
    };
    /** ListFiles of the backup. */
    readonly listFiles: {
        readonly path: "/yandex.cloud.backup.v1.BackupService/ListFiles";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFilesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFilesRequest;
        readonly responseSerialize: (value: ListFilesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFilesResponse;
    };
    /** Get backup by its id. */
    readonly get: {
        readonly path: "/yandex.cloud.backup.v1.BackupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBackupRequest;
        readonly responseSerialize: (value: Backup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Backup;
    };
    /**
     * Start recovery process of specified backup to specific Compute Cloud instance.
     *
     * For details, see [Restoring a VM from a backup](/docs/backup/operations/backup-vm/recover).
     */
    readonly startRecovery: {
        readonly path: "/yandex.cloud.backup.v1.BackupService/StartRecovery";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartRecoveryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartRecoveryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** StartFilesRecovery runs recovery process of selected files to specific Compute Cloud instance. */
    readonly startFilesRecovery: {
        readonly path: "/yandex.cloud.backup.v1.BackupService/StartFilesRecovery";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartFilesRecoveryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartFilesRecoveryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Delete specific backup. */
    readonly delete: {
        readonly path: "/yandex.cloud.backup.v1.BackupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBackupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface BackupServiceServer extends UntypedServiceImplementation {
    /** List backups using filters. */
    list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
    /**
     * List archives that holds backups for specified folder or
     * specified [Compute Cloud instance](/docs/backup/concepts/vm-connection#os).
     */
    listArchives: handleUnaryCall<ListArchivesRequest, ListArchivesResponse>;
    /** ListFiles of the backup. */
    listFiles: handleUnaryCall<ListFilesRequest, ListFilesResponse>;
    /** Get backup by its id. */
    get: handleUnaryCall<GetBackupRequest, Backup>;
    /**
     * Start recovery process of specified backup to specific Compute Cloud instance.
     *
     * For details, see [Restoring a VM from a backup](/docs/backup/operations/backup-vm/recover).
     */
    startRecovery: handleUnaryCall<StartRecoveryRequest, Operation>;
    /** StartFilesRecovery runs recovery process of selected files to specific Compute Cloud instance. */
    startFilesRecovery: handleUnaryCall<StartFilesRecoveryRequest, Operation>;
    /** Delete specific backup. */
    delete: handleUnaryCall<DeleteBackupRequest, Operation>;
}
export interface BackupServiceClient extends Client {
    /** List backups using filters. */
    list(request: ListBackupsRequest, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    /**
     * List archives that holds backups for specified folder or
     * specified [Compute Cloud instance](/docs/backup/concepts/vm-connection#os).
     */
    listArchives(request: ListArchivesRequest, callback: (error: ServiceError | null, response: ListArchivesResponse) => void): ClientUnaryCall;
    listArchives(request: ListArchivesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListArchivesResponse) => void): ClientUnaryCall;
    listArchives(request: ListArchivesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListArchivesResponse) => void): ClientUnaryCall;
    /** ListFiles of the backup. */
    listFiles(request: ListFilesRequest, callback: (error: ServiceError | null, response: ListFilesResponse) => void): ClientUnaryCall;
    listFiles(request: ListFilesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFilesResponse) => void): ClientUnaryCall;
    listFiles(request: ListFilesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFilesResponse) => void): ClientUnaryCall;
    /** Get backup by its id. */
    get(request: GetBackupRequest, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    /**
     * Start recovery process of specified backup to specific Compute Cloud instance.
     *
     * For details, see [Restoring a VM from a backup](/docs/backup/operations/backup-vm/recover).
     */
    startRecovery(request: StartRecoveryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    startRecovery(request: StartRecoveryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    startRecovery(request: StartRecoveryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** StartFilesRecovery runs recovery process of selected files to specific Compute Cloud instance. */
    startFilesRecovery(request: StartFilesRecoveryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    startFilesRecovery(request: StartFilesRecoveryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    startFilesRecovery(request: StartFilesRecoveryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Delete specific backup. */
    delete(request: DeleteBackupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const BackupServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): BackupServiceClient;
    service: typeof BackupServiceService;
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
