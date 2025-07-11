/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { PolicySettings, Policy, PolicyApplication } from "../../../../yandex/cloud/backup/v1/policy";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.backup.v1";
export interface ListPoliciesRequest {
    $type: "yandex.cloud.backup.v1.ListPoliciesRequest";
    /** Folder ID. Either Folder ID or Compute Cloud instance ID should be set. */
    folderId: string;
    /** Compute Cloud instance ID. Either Folder ID or Compute Cloud instance ID should be set. */
    computeInstanceId: string;
}
export interface ListPoliciesResponse {
    $type: "yandex.cloud.backup.v1.ListPoliciesResponse";
    policies: Policy[];
}
export interface CreatePolicyRequest {
    $type: "yandex.cloud.backup.v1.CreatePolicyRequest";
    /** Folder ID. */
    folderId: string;
    /** Policy name. */
    name: string;
    settings?: PolicySettings;
}
export interface CreatePolicyMetadata {
    $type: "yandex.cloud.backup.v1.CreatePolicyMetadata";
    /** Policy ID. */
    policyId: string;
}
export interface GetPolicyRequest {
    $type: "yandex.cloud.backup.v1.GetPolicyRequest";
    /** Policy ID. */
    policyId: string;
}
export interface UpdatePolicyRequest {
    $type: "yandex.cloud.backup.v1.UpdatePolicyRequest";
    /** Policy ID. */
    policyId: string;
    settings?: PolicySettings;
}
export interface UpdatePolicyMetadata {
    $type: "yandex.cloud.backup.v1.UpdatePolicyMetadata";
    /** Policy ID. */
    policyId: string;
}
export interface DeletePolicyRequest {
    $type: "yandex.cloud.backup.v1.DeletePolicyRequest";
    /** Policy ID. */
    policyId: string;
}
export interface DeletePolicyMetadata {
    $type: "yandex.cloud.backup.v1.DeletePolicyMetadata";
    /** Policy ID. */
    policyId: string;
}
export interface ApplyPolicyRequest {
    $type: "yandex.cloud.backup.v1.ApplyPolicyRequest";
    /** Policy ID. */
    policyId: string;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
}
export interface ApplyPolicyMetadata {
    $type: "yandex.cloud.backup.v1.ApplyPolicyMetadata";
    /** Policy ID. */
    policyId: string;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
}
export interface ListApplicationsRequest {
    $type: "yandex.cloud.backup.v1.ListApplicationsRequest";
    /** Folder ID. */
    folderId: string | undefined;
    /** Policy ID. */
    policyId: string | undefined;
    /** Compute Cloud instance ID. */
    computeInstanceId: string | undefined;
}
export interface ListApplicationsResponse {
    $type: "yandex.cloud.backup.v1.ListApplicationsResponse";
    applications: PolicyApplication[];
}
export interface ExecuteRequest {
    $type: "yandex.cloud.backup.v1.ExecuteRequest";
    /** Policy ID. */
    policyId: string;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
}
export interface ExecuteMetadata {
    $type: "yandex.cloud.backup.v1.ExecuteMetadata";
    /** Policy ID. */
    policyId: string;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
}
export interface RevokeRequest {
    $type: "yandex.cloud.backup.v1.RevokeRequest";
    /** Policy ID. */
    policyId: string;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
}
export interface RevokeMetadata {
    $type: "yandex.cloud.backup.v1.RevokeMetadata";
    /** Policy ID. */
    policyId: string;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
}
export declare const ListPoliciesRequest: {
    $type: "yandex.cloud.backup.v1.ListPoliciesRequest";
    encode(message: ListPoliciesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPoliciesRequest;
    fromJSON(object: any): ListPoliciesRequest;
    toJSON(message: ListPoliciesRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        folderId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "computeInstanceId">, never>>(object: I): ListPoliciesRequest;
};
export declare const ListPoliciesResponse: {
    $type: "yandex.cloud.backup.v1.ListPoliciesResponse";
    encode(message: ListPoliciesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPoliciesResponse;
    fromJSON(object: any): ListPoliciesResponse;
    toJSON(message: ListPoliciesResponse): unknown;
    fromPartial<I extends {
        policies?: {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            settings?: {
                format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
                compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
                multiVolumeSnapshottingEnabled?: boolean | undefined;
                preserveFileSecuritySettings?: boolean | undefined;
                reattempts?: {
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } | undefined;
                silentModeEnabled?: boolean | undefined;
                splitting?: {
                    size?: number | undefined;
                } | undefined;
                vmSnapshotReattempts?: {
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } | undefined;
                vss?: {
                    enabled?: boolean | undefined;
                    provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
                } | undefined;
                archive?: {
                    name?: string | undefined;
                } | undefined;
                performanceWindow?: {
                    enabled?: boolean | undefined;
                } | undefined;
                retention?: {
                    rules?: {
                        backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                        maxAge?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        maxCount?: number | undefined;
                    }[] | undefined;
                    afterBackup?: boolean | undefined;
                } | undefined;
                scheduling?: {
                    enabled?: boolean | undefined;
                    backupSets?: {
                        time?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                            weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                            repeatAt?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[] | undefined;
                            repeatEvery?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                            timeFrom?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            timeTo?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            monthdays?: number[] | undefined;
                            includeLastDayOfMonth?: boolean | undefined;
                            months?: number[] | undefined;
                        } | undefined;
                        sinceLastExecTime?: {
                            delay?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    maxParallelBackups?: number | undefined;
                    randMaxDelay?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                    weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
                } | undefined;
                cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
                fastBackupEnabled?: boolean | undefined;
                quiesceSnapshottingEnabled?: boolean | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        policies?: ({
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            settings?: {
                format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
                compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
                multiVolumeSnapshottingEnabled?: boolean | undefined;
                preserveFileSecuritySettings?: boolean | undefined;
                reattempts?: {
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } | undefined;
                silentModeEnabled?: boolean | undefined;
                splitting?: {
                    size?: number | undefined;
                } | undefined;
                vmSnapshotReattempts?: {
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } | undefined;
                vss?: {
                    enabled?: boolean | undefined;
                    provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
                } | undefined;
                archive?: {
                    name?: string | undefined;
                } | undefined;
                performanceWindow?: {
                    enabled?: boolean | undefined;
                } | undefined;
                retention?: {
                    rules?: {
                        backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                        maxAge?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        maxCount?: number | undefined;
                    }[] | undefined;
                    afterBackup?: boolean | undefined;
                } | undefined;
                scheduling?: {
                    enabled?: boolean | undefined;
                    backupSets?: {
                        time?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                            weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                            repeatAt?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[] | undefined;
                            repeatEvery?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                            timeFrom?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            timeTo?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            monthdays?: number[] | undefined;
                            includeLastDayOfMonth?: boolean | undefined;
                            months?: number[] | undefined;
                        } | undefined;
                        sinceLastExecTime?: {
                            delay?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    maxParallelBackups?: number | undefined;
                    randMaxDelay?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                    weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
                } | undefined;
                cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
                fastBackupEnabled?: boolean | undefined;
                quiesceSnapshottingEnabled?: boolean | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            settings?: {
                format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
                compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
                multiVolumeSnapshottingEnabled?: boolean | undefined;
                preserveFileSecuritySettings?: boolean | undefined;
                reattempts?: {
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } | undefined;
                silentModeEnabled?: boolean | undefined;
                splitting?: {
                    size?: number | undefined;
                } | undefined;
                vmSnapshotReattempts?: {
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } | undefined;
                vss?: {
                    enabled?: boolean | undefined;
                    provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
                } | undefined;
                archive?: {
                    name?: string | undefined;
                } | undefined;
                performanceWindow?: {
                    enabled?: boolean | undefined;
                } | undefined;
                retention?: {
                    rules?: {
                        backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                        maxAge?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        maxCount?: number | undefined;
                    }[] | undefined;
                    afterBackup?: boolean | undefined;
                } | undefined;
                scheduling?: {
                    enabled?: boolean | undefined;
                    backupSets?: {
                        time?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                            weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                            repeatAt?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[] | undefined;
                            repeatEvery?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                            timeFrom?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            timeTo?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            monthdays?: number[] | undefined;
                            includeLastDayOfMonth?: boolean | undefined;
                            months?: number[] | undefined;
                        } | undefined;
                        sinceLastExecTime?: {
                            delay?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    maxParallelBackups?: number | undefined;
                    randMaxDelay?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                    weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
                } | undefined;
                cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
                fastBackupEnabled?: boolean | undefined;
                quiesceSnapshottingEnabled?: boolean | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            settings?: ({
                format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
                compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
                multiVolumeSnapshottingEnabled?: boolean | undefined;
                preserveFileSecuritySettings?: boolean | undefined;
                reattempts?: {
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } | undefined;
                silentModeEnabled?: boolean | undefined;
                splitting?: {
                    size?: number | undefined;
                } | undefined;
                vmSnapshotReattempts?: {
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } | undefined;
                vss?: {
                    enabled?: boolean | undefined;
                    provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
                } | undefined;
                archive?: {
                    name?: string | undefined;
                } | undefined;
                performanceWindow?: {
                    enabled?: boolean | undefined;
                } | undefined;
                retention?: {
                    rules?: {
                        backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                        maxAge?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        maxCount?: number | undefined;
                    }[] | undefined;
                    afterBackup?: boolean | undefined;
                } | undefined;
                scheduling?: {
                    enabled?: boolean | undefined;
                    backupSets?: {
                        time?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                            weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                            repeatAt?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[] | undefined;
                            repeatEvery?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                            timeFrom?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            timeTo?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            monthdays?: number[] | undefined;
                            includeLastDayOfMonth?: boolean | undefined;
                            months?: number[] | undefined;
                        } | undefined;
                        sinceLastExecTime?: {
                            delay?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    maxParallelBackups?: number | undefined;
                    randMaxDelay?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                    weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
                } | undefined;
                cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
                fastBackupEnabled?: boolean | undefined;
                quiesceSnapshottingEnabled?: boolean | undefined;
            } & {
                format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
                compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
                multiVolumeSnapshottingEnabled?: boolean | undefined;
                preserveFileSecuritySettings?: boolean | undefined;
                reattempts?: ({
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } & {
                    interval?: ({
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & Record<Exclude<keyof I["policies"][number]["settings"]["reattempts"]["interval"], "$type" | "type" | "count">, never>) | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } & Record<Exclude<keyof I["policies"][number]["settings"]["reattempts"], "$type" | "interval" | "enabled" | "maxAttempts">, never>) | undefined;
                silentModeEnabled?: boolean | undefined;
                splitting?: ({
                    size?: number | undefined;
                } & {
                    size?: number | undefined;
                } & Record<Exclude<keyof I["policies"][number]["settings"]["splitting"], "$type" | "size">, never>) | undefined;
                vmSnapshotReattempts?: ({
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } & {
                    interval?: ({
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & Record<Exclude<keyof I["policies"][number]["settings"]["vmSnapshotReattempts"]["interval"], "$type" | "type" | "count">, never>) | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } & Record<Exclude<keyof I["policies"][number]["settings"]["vmSnapshotReattempts"], "$type" | "interval" | "enabled" | "maxAttempts">, never>) | undefined;
                vss?: ({
                    enabled?: boolean | undefined;
                    provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
                } & {
                    enabled?: boolean | undefined;
                    provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
                } & Record<Exclude<keyof I["policies"][number]["settings"]["vss"], "$type" | "enabled" | "provider">, never>) | undefined;
                archive?: ({
                    name?: string | undefined;
                } & {
                    name?: string | undefined;
                } & Record<Exclude<keyof I["policies"][number]["settings"]["archive"], "$type" | "name">, never>) | undefined;
                performanceWindow?: ({
                    enabled?: boolean | undefined;
                } & {
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["policies"][number]["settings"]["performanceWindow"], "$type" | "enabled">, never>) | undefined;
                retention?: ({
                    rules?: {
                        backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                        maxAge?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        maxCount?: number | undefined;
                    }[] | undefined;
                    afterBackup?: boolean | undefined;
                } & {
                    rules?: ({
                        backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                        maxAge?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        maxCount?: number | undefined;
                    }[] & ({
                        backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                        maxAge?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        maxCount?: number | undefined;
                    } & {
                        backupSet?: (import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] & import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] & Record<Exclude<keyof I["policies"][number]["settings"]["retention"]["rules"][number]["backupSet"], "$type" | keyof import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[]>, never>) | undefined;
                        maxAge?: ({
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & Record<Exclude<keyof I["policies"][number]["settings"]["retention"]["rules"][number]["maxAge"], "$type" | "type" | "count">, never>) | undefined;
                        maxCount?: number | undefined;
                    } & Record<Exclude<keyof I["policies"][number]["settings"]["retention"]["rules"][number], "$type" | "backupSet" | "maxAge" | "maxCount">, never>)[] & Record<Exclude<keyof I["policies"][number]["settings"]["retention"]["rules"], "$type" | keyof {
                        backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                        maxAge?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        maxCount?: number | undefined;
                    }[]>, never>) | undefined;
                    afterBackup?: boolean | undefined;
                } & Record<Exclude<keyof I["policies"][number]["settings"]["retention"], "$type" | "rules" | "afterBackup">, never>) | undefined;
                scheduling?: ({
                    enabled?: boolean | undefined;
                    backupSets?: {
                        time?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                            weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                            repeatAt?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[] | undefined;
                            repeatEvery?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                            timeFrom?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            timeTo?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            monthdays?: number[] | undefined;
                            includeLastDayOfMonth?: boolean | undefined;
                            months?: number[] | undefined;
                        } | undefined;
                        sinceLastExecTime?: {
                            delay?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    maxParallelBackups?: number | undefined;
                    randMaxDelay?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                    weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
                } & {
                    enabled?: boolean | undefined;
                    backupSets?: ({
                        time?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                            weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                            repeatAt?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[] | undefined;
                            repeatEvery?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                            timeFrom?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            timeTo?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            monthdays?: number[] | undefined;
                            includeLastDayOfMonth?: boolean | undefined;
                            months?: number[] | undefined;
                        } | undefined;
                        sinceLastExecTime?: {
                            delay?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }[] & ({
                        time?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                            weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                            repeatAt?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[] | undefined;
                            repeatEvery?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                            timeFrom?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            timeTo?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            monthdays?: number[] | undefined;
                            includeLastDayOfMonth?: boolean | undefined;
                            months?: number[] | undefined;
                        } | undefined;
                        sinceLastExecTime?: {
                            delay?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } & {
                        time?: ({
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                            weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                            repeatAt?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[] | undefined;
                            repeatEvery?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                            timeFrom?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            timeTo?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            monthdays?: number[] | undefined;
                            includeLastDayOfMonth?: boolean | undefined;
                            months?: number[] | undefined;
                        } & {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                            weekdays?: (import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] & import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number]["time"]["weekdays"], "$type" | keyof import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[]>, never>) | undefined;
                            repeatAt?: ({
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[] & ({
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } & {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number]["time"]["repeatAt"][number], "$type" | "hour" | "minute">, never>)[] & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number]["time"]["repeatAt"], "$type" | keyof {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[]>, never>) | undefined;
                            repeatEvery?: ({
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } & {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number]["time"]["repeatEvery"], "$type" | "type" | "count">, never>) | undefined;
                            timeFrom?: ({
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } & {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number]["time"]["timeFrom"], "$type" | "hour" | "minute">, never>) | undefined;
                            timeTo?: ({
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } & {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number]["time"]["timeTo"], "$type" | "hour" | "minute">, never>) | undefined;
                            monthdays?: (number[] & number[] & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number]["time"]["monthdays"], "$type" | keyof number[]>, never>) | undefined;
                            includeLastDayOfMonth?: boolean | undefined;
                            months?: (number[] & number[] & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number]["time"]["months"], "$type" | keyof number[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number]["time"], "$type" | "type" | "weekdays" | "repeatAt" | "repeatEvery" | "timeFrom" | "timeTo" | "monthdays" | "includeLastDayOfMonth" | "months">, never>) | undefined;
                        sinceLastExecTime?: ({
                            delay?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                        } & {
                            delay?: ({
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } & {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number]["sinceLastExecTime"]["delay"], "$type" | "type" | "count">, never>) | undefined;
                        } & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number]["sinceLastExecTime"], "$type" | "delay">, never>) | undefined;
                    } & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"][number], "$type" | "time" | "sinceLastExecTime">, never>)[] & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["backupSets"], "$type" | keyof {
                        time?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                            weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                            repeatAt?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[] | undefined;
                            repeatEvery?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                            timeFrom?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            timeTo?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            monthdays?: number[] | undefined;
                            includeLastDayOfMonth?: boolean | undefined;
                            months?: number[] | undefined;
                        } | undefined;
                        sinceLastExecTime?: {
                            delay?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }[]>, never>) | undefined;
                    maxParallelBackups?: number | undefined;
                    randMaxDelay?: ({
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"]["randMaxDelay"], "$type" | "type" | "count">, never>) | undefined;
                    scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                    weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
                } & Record<Exclude<keyof I["policies"][number]["settings"]["scheduling"], "$type" | "enabled" | "backupSets" | "maxParallelBackups" | "randMaxDelay" | "scheme" | "weeklyBackupDay">, never>) | undefined;
                cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
                fastBackupEnabled?: boolean | undefined;
                quiesceSnapshottingEnabled?: boolean | undefined;
            } & Record<Exclude<keyof I["policies"][number]["settings"], "$type" | "format" | "compression" | "multiVolumeSnapshottingEnabled" | "preserveFileSecuritySettings" | "reattempts" | "silentModeEnabled" | "splitting" | "vmSnapshotReattempts" | "vss" | "archive" | "performanceWindow" | "retention" | "scheduling" | "cbt" | "fastBackupEnabled" | "quiesceSnapshottingEnabled">, never>) | undefined;
        } & Record<Exclude<keyof I["policies"][number], "$type" | "id" | "name" | "createdAt" | "folderId" | "enabled" | "updatedAt" | "settings">, never>)[] & Record<Exclude<keyof I["policies"], "$type" | keyof {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            settings?: {
                format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
                compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
                multiVolumeSnapshottingEnabled?: boolean | undefined;
                preserveFileSecuritySettings?: boolean | undefined;
                reattempts?: {
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } | undefined;
                silentModeEnabled?: boolean | undefined;
                splitting?: {
                    size?: number | undefined;
                } | undefined;
                vmSnapshotReattempts?: {
                    interval?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    maxAttempts?: number | undefined;
                } | undefined;
                vss?: {
                    enabled?: boolean | undefined;
                    provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
                } | undefined;
                archive?: {
                    name?: string | undefined;
                } | undefined;
                performanceWindow?: {
                    enabled?: boolean | undefined;
                } | undefined;
                retention?: {
                    rules?: {
                        backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                        maxAge?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        maxCount?: number | undefined;
                    }[] | undefined;
                    afterBackup?: boolean | undefined;
                } | undefined;
                scheduling?: {
                    enabled?: boolean | undefined;
                    backupSets?: {
                        time?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                            weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                            repeatAt?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            }[] | undefined;
                            repeatEvery?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                            timeFrom?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            timeTo?: {
                                hour?: number | undefined;
                                minute?: number | undefined;
                            } | undefined;
                            monthdays?: number[] | undefined;
                            includeLastDayOfMonth?: boolean | undefined;
                            months?: number[] | undefined;
                        } | undefined;
                        sinceLastExecTime?: {
                            delay?: {
                                type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                                count?: number | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    maxParallelBackups?: number | undefined;
                    randMaxDelay?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                    weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
                } | undefined;
                cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
                fastBackupEnabled?: boolean | undefined;
                quiesceSnapshottingEnabled?: boolean | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "policies">, never>>(object: I): ListPoliciesResponse;
};
export declare const CreatePolicyRequest: {
    $type: "yandex.cloud.backup.v1.CreatePolicyRequest";
    encode(message: CreatePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePolicyRequest;
    fromJSON(object: any): CreatePolicyRequest;
    toJSON(message: CreatePolicyRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        folderId?: string | undefined;
        settings?: {
            format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
            compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
            multiVolumeSnapshottingEnabled?: boolean | undefined;
            preserveFileSecuritySettings?: boolean | undefined;
            reattempts?: {
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            silentModeEnabled?: boolean | undefined;
            splitting?: {
                size?: number | undefined;
            } | undefined;
            vmSnapshotReattempts?: {
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            vss?: {
                enabled?: boolean | undefined;
                provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } | undefined;
            archive?: {
                name?: string | undefined;
            } | undefined;
            performanceWindow?: {
                enabled?: boolean | undefined;
            } | undefined;
            retention?: {
                rules?: {
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] | undefined;
                afterBackup?: boolean | undefined;
            } | undefined;
            scheduling?: {
                enabled?: boolean | undefined;
                backupSets?: {
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
            } | undefined;
            cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
            fastBackupEnabled?: boolean | undefined;
            quiesceSnapshottingEnabled?: boolean | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        folderId?: string | undefined;
        settings?: ({
            format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
            compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
            multiVolumeSnapshottingEnabled?: boolean | undefined;
            preserveFileSecuritySettings?: boolean | undefined;
            reattempts?: {
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            silentModeEnabled?: boolean | undefined;
            splitting?: {
                size?: number | undefined;
            } | undefined;
            vmSnapshotReattempts?: {
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            vss?: {
                enabled?: boolean | undefined;
                provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } | undefined;
            archive?: {
                name?: string | undefined;
            } | undefined;
            performanceWindow?: {
                enabled?: boolean | undefined;
            } | undefined;
            retention?: {
                rules?: {
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] | undefined;
                afterBackup?: boolean | undefined;
            } | undefined;
            scheduling?: {
                enabled?: boolean | undefined;
                backupSets?: {
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
            } | undefined;
            cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
            fastBackupEnabled?: boolean | undefined;
            quiesceSnapshottingEnabled?: boolean | undefined;
        } & {
            format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
            compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
            multiVolumeSnapshottingEnabled?: boolean | undefined;
            preserveFileSecuritySettings?: boolean | undefined;
            reattempts?: ({
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & {
                interval?: ({
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["reattempts"]["interval"], "$type" | "type" | "count">, never>) | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & Record<Exclude<keyof I["settings"]["reattempts"], "$type" | "interval" | "enabled" | "maxAttempts">, never>) | undefined;
            silentModeEnabled?: boolean | undefined;
            splitting?: ({
                size?: number | undefined;
            } & {
                size?: number | undefined;
            } & Record<Exclude<keyof I["settings"]["splitting"], "$type" | "size">, never>) | undefined;
            vmSnapshotReattempts?: ({
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & {
                interval?: ({
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["vmSnapshotReattempts"]["interval"], "$type" | "type" | "count">, never>) | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & Record<Exclude<keyof I["settings"]["vmSnapshotReattempts"], "$type" | "interval" | "enabled" | "maxAttempts">, never>) | undefined;
            vss?: ({
                enabled?: boolean | undefined;
                provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } & {
                enabled?: boolean | undefined;
                provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } & Record<Exclude<keyof I["settings"]["vss"], "$type" | "enabled" | "provider">, never>) | undefined;
            archive?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["settings"]["archive"], "$type" | "name">, never>) | undefined;
            performanceWindow?: ({
                enabled?: boolean | undefined;
            } & {
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["settings"]["performanceWindow"], "$type" | "enabled">, never>) | undefined;
            retention?: ({
                rules?: {
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] | undefined;
                afterBackup?: boolean | undefined;
            } & {
                rules?: ({
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] & ({
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                } & {
                    backupSet?: (import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] & import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] & Record<Exclude<keyof I["settings"]["retention"]["rules"][number]["backupSet"], "$type" | keyof import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[]>, never>) | undefined;
                    maxAge?: ({
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & Record<Exclude<keyof I["settings"]["retention"]["rules"][number]["maxAge"], "$type" | "type" | "count">, never>) | undefined;
                    maxCount?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["retention"]["rules"][number], "$type" | "backupSet" | "maxAge" | "maxCount">, never>)[] & Record<Exclude<keyof I["settings"]["retention"]["rules"], "$type" | keyof {
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[]>, never>) | undefined;
                afterBackup?: boolean | undefined;
            } & Record<Exclude<keyof I["settings"]["retention"], "$type" | "rules" | "afterBackup">, never>) | undefined;
            scheduling?: ({
                enabled?: boolean | undefined;
                backupSets?: {
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
            } & {
                enabled?: boolean | undefined;
                backupSets?: ({
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    time?: ({
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } & {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: (import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] & import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["weekdays"], "$type" | keyof import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[]>, never>) | undefined;
                        repeatAt?: ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] & ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["repeatAt"][number], "$type" | "hour" | "minute">, never>)[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["repeatAt"], "$type" | keyof {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[]>, never>) | undefined;
                        repeatEvery?: ({
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["repeatEvery"], "$type" | "type" | "count">, never>) | undefined;
                        timeFrom?: ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["timeFrom"], "$type" | "hour" | "minute">, never>) | undefined;
                        timeTo?: ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["timeTo"], "$type" | "hour" | "minute">, never>) | undefined;
                        monthdays?: (number[] & number[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["monthdays"], "$type" | keyof number[]>, never>) | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: (number[] & number[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["months"], "$type" | keyof number[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"], "$type" | "type" | "weekdays" | "repeatAt" | "repeatEvery" | "timeFrom" | "timeTo" | "monthdays" | "includeLastDayOfMonth" | "months">, never>) | undefined;
                    sinceLastExecTime?: ({
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } & {
                        delay?: ({
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["sinceLastExecTime"]["delay"], "$type" | "type" | "count">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["sinceLastExecTime"], "$type" | "delay">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number], "$type" | "time" | "sinceLastExecTime">, never>)[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"], "$type" | keyof {
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: ({
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["scheduling"]["randMaxDelay"], "$type" | "type" | "count">, never>) | undefined;
                scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
            } & Record<Exclude<keyof I["settings"]["scheduling"], "$type" | "enabled" | "backupSets" | "maxParallelBackups" | "randMaxDelay" | "scheme" | "weeklyBackupDay">, never>) | undefined;
            cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
            fastBackupEnabled?: boolean | undefined;
            quiesceSnapshottingEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "format" | "compression" | "multiVolumeSnapshottingEnabled" | "preserveFileSecuritySettings" | "reattempts" | "silentModeEnabled" | "splitting" | "vmSnapshotReattempts" | "vss" | "archive" | "performanceWindow" | "retention" | "scheduling" | "cbt" | "fastBackupEnabled" | "quiesceSnapshottingEnabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "folderId" | "settings">, never>>(object: I): CreatePolicyRequest;
};
export declare const CreatePolicyMetadata: {
    $type: "yandex.cloud.backup.v1.CreatePolicyMetadata";
    encode(message: CreatePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePolicyMetadata;
    fromJSON(object: any): CreatePolicyMetadata;
    toJSON(message: CreatePolicyMetadata): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
    } & {
        policyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId">, never>>(object: I): CreatePolicyMetadata;
};
export declare const GetPolicyRequest: {
    $type: "yandex.cloud.backup.v1.GetPolicyRequest";
    encode(message: GetPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetPolicyRequest;
    fromJSON(object: any): GetPolicyRequest;
    toJSON(message: GetPolicyRequest): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
    } & {
        policyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId">, never>>(object: I): GetPolicyRequest;
};
export declare const UpdatePolicyRequest: {
    $type: "yandex.cloud.backup.v1.UpdatePolicyRequest";
    encode(message: UpdatePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePolicyRequest;
    fromJSON(object: any): UpdatePolicyRequest;
    toJSON(message: UpdatePolicyRequest): unknown;
    fromPartial<I extends {
        settings?: {
            format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
            compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
            multiVolumeSnapshottingEnabled?: boolean | undefined;
            preserveFileSecuritySettings?: boolean | undefined;
            reattempts?: {
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            silentModeEnabled?: boolean | undefined;
            splitting?: {
                size?: number | undefined;
            } | undefined;
            vmSnapshotReattempts?: {
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            vss?: {
                enabled?: boolean | undefined;
                provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } | undefined;
            archive?: {
                name?: string | undefined;
            } | undefined;
            performanceWindow?: {
                enabled?: boolean | undefined;
            } | undefined;
            retention?: {
                rules?: {
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] | undefined;
                afterBackup?: boolean | undefined;
            } | undefined;
            scheduling?: {
                enabled?: boolean | undefined;
                backupSets?: {
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
            } | undefined;
            cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
            fastBackupEnabled?: boolean | undefined;
            quiesceSnapshottingEnabled?: boolean | undefined;
        } | undefined;
        policyId?: string | undefined;
    } & {
        settings?: ({
            format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
            compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
            multiVolumeSnapshottingEnabled?: boolean | undefined;
            preserveFileSecuritySettings?: boolean | undefined;
            reattempts?: {
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            silentModeEnabled?: boolean | undefined;
            splitting?: {
                size?: number | undefined;
            } | undefined;
            vmSnapshotReattempts?: {
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } | undefined;
            vss?: {
                enabled?: boolean | undefined;
                provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } | undefined;
            archive?: {
                name?: string | undefined;
            } | undefined;
            performanceWindow?: {
                enabled?: boolean | undefined;
            } | undefined;
            retention?: {
                rules?: {
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] | undefined;
                afterBackup?: boolean | undefined;
            } | undefined;
            scheduling?: {
                enabled?: boolean | undefined;
                backupSets?: {
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
            } | undefined;
            cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
            fastBackupEnabled?: boolean | undefined;
            quiesceSnapshottingEnabled?: boolean | undefined;
        } & {
            format?: import("../../../../yandex/cloud/backup/v1/policy").Format | undefined;
            compression?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Compression | undefined;
            multiVolumeSnapshottingEnabled?: boolean | undefined;
            preserveFileSecuritySettings?: boolean | undefined;
            reattempts?: ({
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & {
                interval?: ({
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["reattempts"]["interval"], "$type" | "type" | "count">, never>) | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & Record<Exclude<keyof I["settings"]["reattempts"], "$type" | "interval" | "enabled" | "maxAttempts">, never>) | undefined;
            silentModeEnabled?: boolean | undefined;
            splitting?: ({
                size?: number | undefined;
            } & {
                size?: number | undefined;
            } & Record<Exclude<keyof I["settings"]["splitting"], "$type" | "size">, never>) | undefined;
            vmSnapshotReattempts?: ({
                interval?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & {
                interval?: ({
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["vmSnapshotReattempts"]["interval"], "$type" | "type" | "count">, never>) | undefined;
                enabled?: boolean | undefined;
                maxAttempts?: number | undefined;
            } & Record<Exclude<keyof I["settings"]["vmSnapshotReattempts"], "$type" | "interval" | "enabled" | "maxAttempts">, never>) | undefined;
            vss?: ({
                enabled?: boolean | undefined;
                provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } & {
                enabled?: boolean | undefined;
                provider?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_VolumeShadowCopyServiceSettings_VSSProvider | undefined;
            } & Record<Exclude<keyof I["settings"]["vss"], "$type" | "enabled" | "provider">, never>) | undefined;
            archive?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["settings"]["archive"], "$type" | "name">, never>) | undefined;
            performanceWindow?: ({
                enabled?: boolean | undefined;
            } & {
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["settings"]["performanceWindow"], "$type" | "enabled">, never>) | undefined;
            retention?: ({
                rules?: {
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] | undefined;
                afterBackup?: boolean | undefined;
            } & {
                rules?: ({
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[] & ({
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                } & {
                    backupSet?: (import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] & import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] & Record<Exclude<keyof I["settings"]["retention"]["rules"][number]["backupSet"], "$type" | keyof import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[]>, never>) | undefined;
                    maxAge?: ({
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } & Record<Exclude<keyof I["settings"]["retention"]["rules"][number]["maxAge"], "$type" | "type" | "count">, never>) | undefined;
                    maxCount?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["retention"]["rules"][number], "$type" | "backupSet" | "maxAge" | "maxCount">, never>)[] & Record<Exclude<keyof I["settings"]["retention"]["rules"], "$type" | keyof {
                    backupSet?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod[] | undefined;
                    maxAge?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                        count?: number | undefined;
                    } | undefined;
                    maxCount?: number | undefined;
                }[]>, never>) | undefined;
                afterBackup?: boolean | undefined;
            } & Record<Exclude<keyof I["settings"]["retention"], "$type" | "rules" | "afterBackup">, never>) | undefined;
            scheduling?: ({
                enabled?: boolean | undefined;
                backupSets?: {
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } | undefined;
                scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
            } & {
                enabled?: boolean | undefined;
                backupSets?: ({
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    time?: ({
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } & {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: (import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] & import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["weekdays"], "$type" | keyof import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[]>, never>) | undefined;
                        repeatAt?: ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] & ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["repeatAt"][number], "$type" | "hour" | "minute">, never>)[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["repeatAt"], "$type" | keyof {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[]>, never>) | undefined;
                        repeatEvery?: ({
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["repeatEvery"], "$type" | "type" | "count">, never>) | undefined;
                        timeFrom?: ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["timeFrom"], "$type" | "hour" | "minute">, never>) | undefined;
                        timeTo?: ({
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["timeTo"], "$type" | "hour" | "minute">, never>) | undefined;
                        monthdays?: (number[] & number[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["monthdays"], "$type" | keyof number[]>, never>) | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: (number[] & number[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"]["months"], "$type" | keyof number[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["time"], "$type" | "type" | "weekdays" | "repeatAt" | "repeatEvery" | "timeFrom" | "timeTo" | "monthdays" | "includeLastDayOfMonth" | "months">, never>) | undefined;
                    sinceLastExecTime?: ({
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } & {
                        delay?: ({
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["sinceLastExecTime"]["delay"], "$type" | "type" | "count">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number]["sinceLastExecTime"], "$type" | "delay">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"][number], "$type" | "time" | "sinceLastExecTime">, never>)[] & Record<Exclude<keyof I["settings"]["scheduling"]["backupSets"], "$type" | keyof {
                    time?: {
                        type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_RepeatePeriod | undefined;
                        weekdays?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day[] | undefined;
                        repeatAt?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        }[] | undefined;
                        repeatEvery?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                        timeFrom?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        timeTo?: {
                            hour?: number | undefined;
                            minute?: number | undefined;
                        } | undefined;
                        monthdays?: number[] | undefined;
                        includeLastDayOfMonth?: boolean | undefined;
                        months?: number[] | undefined;
                    } | undefined;
                    sinceLastExecTime?: {
                        delay?: {
                            type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                            count?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                maxParallelBackups?: number | undefined;
                randMaxDelay?: ({
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Interval_Type | undefined;
                    count?: number | undefined;
                } & Record<Exclude<keyof I["settings"]["scheduling"]["randMaxDelay"], "$type" | "type" | "count">, never>) | undefined;
                scheme?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Scheduling_Scheme | undefined;
                weeklyBackupDay?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_Day | undefined;
            } & Record<Exclude<keyof I["settings"]["scheduling"], "$type" | "enabled" | "backupSets" | "maxParallelBackups" | "randMaxDelay" | "scheme" | "weeklyBackupDay">, never>) | undefined;
            cbt?: import("../../../../yandex/cloud/backup/v1/policy").PolicySettings_ChangedBlockTracking | undefined;
            fastBackupEnabled?: boolean | undefined;
            quiesceSnapshottingEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "format" | "compression" | "multiVolumeSnapshottingEnabled" | "preserveFileSecuritySettings" | "reattempts" | "silentModeEnabled" | "splitting" | "vmSnapshotReattempts" | "vss" | "archive" | "performanceWindow" | "retention" | "scheduling" | "cbt" | "fastBackupEnabled" | "quiesceSnapshottingEnabled">, never>) | undefined;
        policyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "settings" | "policyId">, never>>(object: I): UpdatePolicyRequest;
};
export declare const UpdatePolicyMetadata: {
    $type: "yandex.cloud.backup.v1.UpdatePolicyMetadata";
    encode(message: UpdatePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePolicyMetadata;
    fromJSON(object: any): UpdatePolicyMetadata;
    toJSON(message: UpdatePolicyMetadata): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
    } & {
        policyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId">, never>>(object: I): UpdatePolicyMetadata;
};
export declare const DeletePolicyRequest: {
    $type: "yandex.cloud.backup.v1.DeletePolicyRequest";
    encode(message: DeletePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeletePolicyRequest;
    fromJSON(object: any): DeletePolicyRequest;
    toJSON(message: DeletePolicyRequest): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
    } & {
        policyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId">, never>>(object: I): DeletePolicyRequest;
};
export declare const DeletePolicyMetadata: {
    $type: "yandex.cloud.backup.v1.DeletePolicyMetadata";
    encode(message: DeletePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeletePolicyMetadata;
    fromJSON(object: any): DeletePolicyMetadata;
    toJSON(message: DeletePolicyMetadata): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
    } & {
        policyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId">, never>>(object: I): DeletePolicyMetadata;
};
export declare const ApplyPolicyRequest: {
    $type: "yandex.cloud.backup.v1.ApplyPolicyRequest";
    encode(message: ApplyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplyPolicyRequest;
    fromJSON(object: any): ApplyPolicyRequest;
    toJSON(message: ApplyPolicyRequest): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId" | "computeInstanceId">, never>>(object: I): ApplyPolicyRequest;
};
export declare const ApplyPolicyMetadata: {
    $type: "yandex.cloud.backup.v1.ApplyPolicyMetadata";
    encode(message: ApplyPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplyPolicyMetadata;
    fromJSON(object: any): ApplyPolicyMetadata;
    toJSON(message: ApplyPolicyMetadata): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId" | "computeInstanceId">, never>>(object: I): ApplyPolicyMetadata;
};
export declare const ListApplicationsRequest: {
    $type: "yandex.cloud.backup.v1.ListApplicationsRequest";
    encode(message: ListApplicationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListApplicationsRequest;
    fromJSON(object: any): ListApplicationsRequest;
    toJSON(message: ListApplicationsRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        folderId?: string | undefined;
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "policyId" | "computeInstanceId">, never>>(object: I): ListApplicationsRequest;
};
export declare const ListApplicationsResponse: {
    $type: "yandex.cloud.backup.v1.ListApplicationsResponse";
    encode(message: ListApplicationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListApplicationsResponse;
    fromJSON(object: any): ListApplicationsResponse;
    toJSON(message: ListApplicationsResponse): unknown;
    fromPartial<I extends {
        applications?: {
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/policy").PolicyApplication_Status | undefined;
            enabled?: boolean | undefined;
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
        }[] | undefined;
    } & {
        applications?: ({
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/policy").PolicyApplication_Status | undefined;
            enabled?: boolean | undefined;
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
        }[] & ({
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/policy").PolicyApplication_Status | undefined;
            enabled?: boolean | undefined;
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/policy").PolicyApplication_Status | undefined;
            enabled?: boolean | undefined;
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
        } & Record<Exclude<keyof I["applications"][number], "$type" | "createdAt" | "status" | "enabled" | "policyId" | "computeInstanceId">, never>)[] & Record<Exclude<keyof I["applications"], "$type" | keyof {
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/policy").PolicyApplication_Status | undefined;
            enabled?: boolean | undefined;
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "applications">, never>>(object: I): ListApplicationsResponse;
};
export declare const ExecuteRequest: {
    $type: "yandex.cloud.backup.v1.ExecuteRequest";
    encode(message: ExecuteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExecuteRequest;
    fromJSON(object: any): ExecuteRequest;
    toJSON(message: ExecuteRequest): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId" | "computeInstanceId">, never>>(object: I): ExecuteRequest;
};
export declare const ExecuteMetadata: {
    $type: "yandex.cloud.backup.v1.ExecuteMetadata";
    encode(message: ExecuteMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExecuteMetadata;
    fromJSON(object: any): ExecuteMetadata;
    toJSON(message: ExecuteMetadata): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId" | "computeInstanceId">, never>>(object: I): ExecuteMetadata;
};
export declare const RevokeRequest: {
    $type: "yandex.cloud.backup.v1.RevokeRequest";
    encode(message: RevokeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RevokeRequest;
    fromJSON(object: any): RevokeRequest;
    toJSON(message: RevokeRequest): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId" | "computeInstanceId">, never>>(object: I): RevokeRequest;
};
export declare const RevokeMetadata: {
    $type: "yandex.cloud.backup.v1.RevokeMetadata";
    encode(message: RevokeMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RevokeMetadata;
    fromJSON(object: any): RevokeMetadata;
    toJSON(message: RevokeMetadata): unknown;
    fromPartial<I extends {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "policyId" | "computeInstanceId">, never>>(object: I): RevokeMetadata;
};
/** A set of methods for managing [policies](/docs/backup/concepts/policy). */
export declare const PolicyServiceService: {
    /** List [policies](/docs/backup/concepts/policy) of specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.backup.v1.PolicyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListPoliciesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPoliciesRequest;
        readonly responseSerialize: (value: ListPoliciesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListPoliciesResponse;
    };
    /**
     * Create a new policy.
     *
     * For detailed information, please see [Creating a backup policy](/docs/backup/operations/policy-vm/create).
     */
    readonly create: {
        readonly path: "/yandex.cloud.backup.v1.PolicyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreatePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreatePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Get specific policy. */
    readonly get: {
        readonly path: "/yandex.cloud.backup.v1.PolicyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetPolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetPolicyRequest;
        readonly responseSerialize: (value: Policy) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Policy;
    };
    /** Update specific policy. */
    readonly update: {
        readonly path: "/yandex.cloud.backup.v1.PolicyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdatePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdatePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Delete specific policy. */
    readonly delete: {
        readonly path: "/yandex.cloud.backup.v1.PolicyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeletePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeletePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Apply policy to [Compute Cloud instance](/docs/backup/concepts/vm-connection#os). */
    readonly apply: {
        readonly path: "/yandex.cloud.backup.v1.PolicyService/Apply";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ApplyPolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ApplyPolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List applied policies using filters. */
    readonly listApplications: {
        readonly path: "/yandex.cloud.backup.v1.PolicyService/ListApplications";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListApplicationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListApplicationsRequest;
        readonly responseSerialize: (value: ListApplicationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListApplicationsResponse;
    };
    /**
     * Run policy on specific Compute Cloud instance. That will create backup
     * according selected policy. In order to perform this action, policy should be
     * applied to the Compute Cloud instance.
     */
    readonly execute: {
        readonly path: "/yandex.cloud.backup.v1.PolicyService/Execute";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ExecuteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ExecuteRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Revoke policy from Compute Cloud instance. */
    readonly revoke: {
        readonly path: "/yandex.cloud.backup.v1.PolicyService/Revoke";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RevokeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RevokeRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface PolicyServiceServer extends UntypedServiceImplementation {
    /** List [policies](/docs/backup/concepts/policy) of specified folder. */
    list: handleUnaryCall<ListPoliciesRequest, ListPoliciesResponse>;
    /**
     * Create a new policy.
     *
     * For detailed information, please see [Creating a backup policy](/docs/backup/operations/policy-vm/create).
     */
    create: handleUnaryCall<CreatePolicyRequest, Operation>;
    /** Get specific policy. */
    get: handleUnaryCall<GetPolicyRequest, Policy>;
    /** Update specific policy. */
    update: handleUnaryCall<UpdatePolicyRequest, Operation>;
    /** Delete specific policy. */
    delete: handleUnaryCall<DeletePolicyRequest, Operation>;
    /** Apply policy to [Compute Cloud instance](/docs/backup/concepts/vm-connection#os). */
    apply: handleUnaryCall<ApplyPolicyRequest, Operation>;
    /** List applied policies using filters. */
    listApplications: handleUnaryCall<ListApplicationsRequest, ListApplicationsResponse>;
    /**
     * Run policy on specific Compute Cloud instance. That will create backup
     * according selected policy. In order to perform this action, policy should be
     * applied to the Compute Cloud instance.
     */
    execute: handleUnaryCall<ExecuteRequest, Operation>;
    /** Revoke policy from Compute Cloud instance. */
    revoke: handleUnaryCall<RevokeRequest, Operation>;
}
export interface PolicyServiceClient extends Client {
    /** List [policies](/docs/backup/concepts/policy) of specified folder. */
    list(request: ListPoliciesRequest, callback: (error: ServiceError | null, response: ListPoliciesResponse) => void): ClientUnaryCall;
    list(request: ListPoliciesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListPoliciesResponse) => void): ClientUnaryCall;
    list(request: ListPoliciesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListPoliciesResponse) => void): ClientUnaryCall;
    /**
     * Create a new policy.
     *
     * For detailed information, please see [Creating a backup policy](/docs/backup/operations/policy-vm/create).
     */
    create(request: CreatePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreatePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreatePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Get specific policy. */
    get(request: GetPolicyRequest, callback: (error: ServiceError | null, response: Policy) => void): ClientUnaryCall;
    get(request: GetPolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Policy) => void): ClientUnaryCall;
    get(request: GetPolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Policy) => void): ClientUnaryCall;
    /** Update specific policy. */
    update(request: UpdatePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdatePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdatePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Delete specific policy. */
    delete(request: DeletePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeletePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeletePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Apply policy to [Compute Cloud instance](/docs/backup/concepts/vm-connection#os). */
    apply(request: ApplyPolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    apply(request: ApplyPolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    apply(request: ApplyPolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List applied policies using filters. */
    listApplications(request: ListApplicationsRequest, callback: (error: ServiceError | null, response: ListApplicationsResponse) => void): ClientUnaryCall;
    listApplications(request: ListApplicationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListApplicationsResponse) => void): ClientUnaryCall;
    listApplications(request: ListApplicationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListApplicationsResponse) => void): ClientUnaryCall;
    /**
     * Run policy on specific Compute Cloud instance. That will create backup
     * according selected policy. In order to perform this action, policy should be
     * applied to the Compute Cloud instance.
     */
    execute(request: ExecuteRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    execute(request: ExecuteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    execute(request: ExecuteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Revoke policy from Compute Cloud instance. */
    revoke(request: RevokeRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    revoke(request: RevokeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    revoke(request: RevokeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const PolicyServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): PolicyServiceClient;
    service: typeof PolicyServiceService;
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
