/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { SchedulePolicy, SnapshotSpec, SnapshotSchedule } from "../../../../yandex/cloud/compute/v1/snapshot_schedule";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Duration } from "../../../../google/protobuf/duration";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { Snapshot } from "../../../../yandex/cloud/compute/v1/snapshot";
import { Disk } from "../../../../yandex/cloud/compute/v1/disk";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetSnapshotScheduleRequest {
    $type: "yandex.cloud.compute.v1.GetSnapshotScheduleRequest";
    /**
     * ID of the snapshot schedule to return.
     *
     * To get a schedule ID, make a [SnapshotScheduleService.List] request.
     */
    snapshotScheduleId: string;
}
export interface ListSnapshotSchedulesRequest {
    $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesRequest";
    /**
     * ID of the folder to list snapshot schedules in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListSnapshotSchedulesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListSnapshotSchedulesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters snapshot schedules listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [SnapshotSchedule.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-schedule`.
     */
    filter: string;
    /**
     * A sorting expression that sorts snapshot schedules listed in the response.
     *
     * The expression must specify the field name from [SnapshotSchedule] and `asc`ending or `desc`ending order,
     * e.g. `createdAt desc`.
     *
     * Default value: `id asc`.
     */
    orderBy: string;
}
export interface ListSnapshotSchedulesResponse {
    $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesResponse";
    /** List of snapshot schedules in the specified folder. */
    snapshotSchedules: SnapshotSchedule[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListSnapshotSchedulesRequest.page_size], use `next_page_token` as the value
     * for the [ListSnapshotSchedulesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateSnapshotScheduleRequest {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest";
    /**
     * ID of the folder to create a snapshot schedule in.
     *
     * Snapshots are created in the same folder as the schedule, even if disks from other folders are attached
     * to the schedule.
     *
     * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the snapshot schedule.
     *
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the snapshot schedule. */
    description: string;
    /** Snapshot schedule labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Frequency settings of the snapshot schedule. */
    schedulePolicy?: SchedulePolicy;
    /**
     * Retention period of the snapshot schedule. Once a snapshot created by the schedule reaches this age, it is
     * automatically deleted.
     */
    retentionPeriod?: Duration | undefined;
    /**
     * Retention count of the snapshot schedule. Once the number of snapshots created by the schedule exceeds this
     * number, the oldest ones are automatically deleted. E.g. if the number is 5, the first snapshot is deleted
     * after the sixth one is created, the second is deleted after the seventh one is created, and so on.
     */
    snapshotCount: number | undefined;
    /** Attributes of snapshots created by the snapshot schedule. */
    snapshotSpec?: SnapshotSpec;
    /**
     * List of IDs of the disks attached to the snapshot schedule.
     *
     * To get a disk ID, make a [yandex.cloud.compute.v1.DiskService.List] request.
     */
    diskIds: string[];
}
export interface CreateSnapshotScheduleRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateSnapshotScheduleMetadata {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleMetadata";
    /** ID of the snapshot schedule that is being created. */
    snapshotScheduleId: string;
}
export interface UpdateSnapshotScheduleRequest {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest";
    /**
     * ID of the snapshot schedule to update.
     *
     * To get the snapshot schedule ID, make a [SnapshotScheduleService.List] request.
     */
    snapshotScheduleId: string;
    /** Field mask that specifies which attributes of the snapshot schedule should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the snapshot schedule.
     *
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the snapshot schedule. */
    description: string;
    /**
     * Snapshot schedule labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [SnapshotScheduleService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
    /** New frequency settings of the snapshot schedule. */
    schedulePolicy?: SchedulePolicy;
    /**
     * Retention period of the snapshot schedule. Once a snapshot created by the schedule reaches this age, it is
     * automatically deleted.
     */
    retentionPeriod?: Duration | undefined;
    /**
     * Retention count of the snapshot schedule. Once the number of snapshots created by the schedule exceeds this
     * number, the oldest ones are automatically deleted. E.g. if the number is 5, the first snapshot is deleted
     * after the sixth one is created, the second is deleted after the seventh one is created, and so on.
     */
    snapshotCount: number | undefined;
    /** New attributes of snapshots created by the snapshot schedule. */
    snapshotSpec?: SnapshotSpec;
}
export interface UpdateSnapshotScheduleRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateSnapshotScheduleMetadata {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleMetadata";
    /** ID of the snapshot schedule that is being updated. */
    snapshotScheduleId: string;
}
export interface DeleteSnapshotScheduleRequest {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleRequest";
    /**
     * ID of the snapshot schedule to delete.
     *
     * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
     */
    snapshotScheduleId: string;
}
export interface DeleteSnapshotScheduleMetadata {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleMetadata";
    /** ID of the snapshot schedule that is being deleted. */
    snapshotScheduleId: string;
}
export interface DisableSnapshotScheduleRequest {
    $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleRequest";
    /**
     * ID of the snapshot schedule to disable.
     *
     * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
     */
    snapshotScheduleId: string;
}
export interface DisableSnapshotScheduleMetadata {
    $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleMetadata";
    /** ID of the snapshot schedule that is being disabled. */
    snapshotScheduleId: string;
}
export interface EnableSnapshotScheduleRequest {
    $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleRequest";
    /**
     * ID of the snapshot schedule to enable.
     *
     * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
     */
    snapshotScheduleId: string;
}
export interface EnableSnapshotScheduleMetadata {
    $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleMetadata";
    /** ID of the snapshot schedule that is being enabled. */
    snapshotScheduleId: string;
}
export interface ListSnapshotScheduleOperationsRequest {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsRequest";
    /**
     * ID of the snapshot schedule to list operations for.
     *
     * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
     */
    snapshotScheduleId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListSnapshotScheduleOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSnapshotScheduleOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSnapshotScheduleOperationsResponse {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsResponse";
    /** List of operations for the specified snapshot schedule. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListSnapshotScheduleOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListSnapshotScheduleOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListSnapshotScheduleSnapshotsRequest {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsRequest";
    /**
     * ID of the snapshot schedule to list created snapshots for.
     *
     * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
     */
    snapshotScheduleId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListSnapshotScheduleOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSnapshotScheduleOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSnapshotScheduleSnapshotsResponse {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsResponse";
    /** List of snapshots created by the specified snapshot schedule. */
    snapshots: Snapshot[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListSnapshotScheduleSnapshotsRequest.page_size], use `next_page_token` as the value
     * for the [ListSnapshotScheduleSnapshotsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListSnapshotScheduleDisksRequest {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksRequest";
    /**
     * ID of the snapshot schedule to list attached disks for.
     *
     * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
     */
    snapshotScheduleId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListSnapshotScheduleDisksResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSnapshotScheduleDisksResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSnapshotScheduleDisksResponse {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksResponse";
    /** List of disks attached to the specified snapshot schedule. */
    disks: Disk[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListSnapshotScheduleDisksRequest.page_size], use `next_page_token` as the value
     * for the [ListSnapshotScheduleDisksRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface UpdateSnapshotScheduleDisksRequest {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksRequest";
    /**
     * ID of the snapshot schedule to update.
     *
     * To get a snapshot schedule ID, make a [SnapshotScheduleService.List] request.
     */
    snapshotScheduleId: string;
    /**
     * List of IDs of the disks to detach from the specified schedule.
     *
     * To get an ID of a disk attached to the schedule, make a [SnapshotScheduleService.ListDisks] request.
     */
    remove: string[];
    /**
     * List of IDs of the disks to attach to the specified schedule.
     *
     * To get a disk ID, make a [yandex.cloud.compute.v1.DiskService.List] request.
     */
    add: string[];
}
export interface UpdateSnapshotScheduleDisksMetadata {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksMetadata";
    /** ID of the snapshot schedule that is being updated. */
    snapshotScheduleId: string;
}
export declare const GetSnapshotScheduleRequest: {
    $type: "yandex.cloud.compute.v1.GetSnapshotScheduleRequest";
    encode(message: GetSnapshotScheduleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSnapshotScheduleRequest;
    fromJSON(object: any): GetSnapshotScheduleRequest;
    toJSON(message: GetSnapshotScheduleRequest): unknown;
    fromPartial<I extends {
        snapshotScheduleId?: string | undefined;
    } & {
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotScheduleId">, never>>(object: I): GetSnapshotScheduleRequest;
};
export declare const ListSnapshotSchedulesRequest: {
    $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesRequest";
    encode(message: ListSnapshotSchedulesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotSchedulesRequest;
    fromJSON(object: any): ListSnapshotSchedulesRequest;
    toJSON(message: ListSnapshotSchedulesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        orderBy?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        orderBy?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "orderBy">, never>>(object: I): ListSnapshotSchedulesRequest;
};
export declare const ListSnapshotSchedulesResponse: {
    $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesResponse";
    encode(message: ListSnapshotSchedulesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotSchedulesResponse;
    fromJSON(object: any): ListSnapshotSchedulesResponse;
    toJSON(message: ListSnapshotSchedulesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        snapshotSchedules?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot_schedule").SnapshotSchedule_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            schedulePolicy?: {
                startAt?: Date | undefined;
                expression?: string | undefined;
            } | undefined;
            retentionPeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            snapshotCount?: number | undefined;
            snapshotSpec?: {
                description?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        snapshotSchedules?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot_schedule").SnapshotSchedule_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            schedulePolicy?: {
                startAt?: Date | undefined;
                expression?: string | undefined;
            } | undefined;
            retentionPeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            snapshotCount?: number | undefined;
            snapshotSpec?: {
                description?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot_schedule").SnapshotSchedule_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            schedulePolicy?: {
                startAt?: Date | undefined;
                expression?: string | undefined;
            } | undefined;
            retentionPeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            snapshotCount?: number | undefined;
            snapshotSpec?: {
                description?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot_schedule").SnapshotSchedule_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["snapshotSchedules"][number]["labels"], string | number>, never>) | undefined;
            schedulePolicy?: ({
                startAt?: Date | undefined;
                expression?: string | undefined;
            } & {
                startAt?: Date | undefined;
                expression?: string | undefined;
            } & Record<Exclude<keyof I["snapshotSchedules"][number]["schedulePolicy"], "$type" | "startAt" | "expression">, never>) | undefined;
            retentionPeriod?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["snapshotSchedules"][number]["retentionPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
            snapshotCount?: number | undefined;
            snapshotSpec?: ({
                description?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } & {
                description?: string | undefined;
                labels?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["snapshotSchedules"][number]["snapshotSpec"]["labels"], string | number>, never>) | undefined;
            } & Record<Exclude<keyof I["snapshotSchedules"][number]["snapshotSpec"], "$type" | "description" | "labels">, never>) | undefined;
        } & Record<Exclude<keyof I["snapshotSchedules"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "schedulePolicy" | "retentionPeriod" | "snapshotCount" | "snapshotSpec">, never>)[] & Record<Exclude<keyof I["snapshotSchedules"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot_schedule").SnapshotSchedule_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            schedulePolicy?: {
                startAt?: Date | undefined;
                expression?: string | undefined;
            } | undefined;
            retentionPeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            snapshotCount?: number | undefined;
            snapshotSpec?: {
                description?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "snapshotSchedules">, never>>(object: I): ListSnapshotSchedulesResponse;
};
export declare const CreateSnapshotScheduleRequest: {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest";
    encode(message: CreateSnapshotScheduleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSnapshotScheduleRequest;
    fromJSON(object: any): CreateSnapshotScheduleRequest;
    toJSON(message: CreateSnapshotScheduleRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        schedulePolicy?: {
            startAt?: Date | undefined;
            expression?: string | undefined;
        } | undefined;
        retentionPeriod?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        snapshotCount?: number | undefined;
        snapshotSpec?: {
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } | undefined;
        diskIds?: string[] | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        schedulePolicy?: ({
            startAt?: Date | undefined;
            expression?: string | undefined;
        } & {
            startAt?: Date | undefined;
            expression?: string | undefined;
        } & Record<Exclude<keyof I["schedulePolicy"], "$type" | "startAt" | "expression">, never>) | undefined;
        retentionPeriod?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["retentionPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
        snapshotCount?: number | undefined;
        snapshotSpec?: ({
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["snapshotSpec"]["labels"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["snapshotSpec"], "$type" | "description" | "labels">, never>) | undefined;
        diskIds?: (string[] & string[] & Record<Exclude<keyof I["diskIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "schedulePolicy" | "retentionPeriod" | "snapshotCount" | "snapshotSpec" | "diskIds">, never>>(object: I): CreateSnapshotScheduleRequest;
};
export declare const CreateSnapshotScheduleRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest.LabelsEntry";
    encode(message: CreateSnapshotScheduleRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSnapshotScheduleRequest_LabelsEntry;
    fromJSON(object: any): CreateSnapshotScheduleRequest_LabelsEntry;
    toJSON(message: CreateSnapshotScheduleRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateSnapshotScheduleRequest_LabelsEntry;
};
export declare const CreateSnapshotScheduleMetadata: {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleMetadata";
    encode(message: CreateSnapshotScheduleMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSnapshotScheduleMetadata;
    fromJSON(object: any): CreateSnapshotScheduleMetadata;
    toJSON(message: CreateSnapshotScheduleMetadata): unknown;
    fromPartial<I extends {
        snapshotScheduleId?: string | undefined;
    } & {
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotScheduleId">, never>>(object: I): CreateSnapshotScheduleMetadata;
};
export declare const UpdateSnapshotScheduleRequest: {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest";
    encode(message: UpdateSnapshotScheduleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSnapshotScheduleRequest;
    fromJSON(object: any): UpdateSnapshotScheduleRequest;
    toJSON(message: UpdateSnapshotScheduleRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        schedulePolicy?: {
            startAt?: Date | undefined;
            expression?: string | undefined;
        } | undefined;
        retentionPeriod?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        snapshotCount?: number | undefined;
        snapshotSpec?: {
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } | undefined;
        snapshotScheduleId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        schedulePolicy?: ({
            startAt?: Date | undefined;
            expression?: string | undefined;
        } & {
            startAt?: Date | undefined;
            expression?: string | undefined;
        } & Record<Exclude<keyof I["schedulePolicy"], "$type" | "startAt" | "expression">, never>) | undefined;
        retentionPeriod?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["retentionPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
        snapshotCount?: number | undefined;
        snapshotSpec?: ({
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["snapshotSpec"]["labels"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["snapshotSpec"], "$type" | "description" | "labels">, never>) | undefined;
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "schedulePolicy" | "retentionPeriod" | "snapshotCount" | "snapshotSpec" | "snapshotScheduleId">, never>>(object: I): UpdateSnapshotScheduleRequest;
};
export declare const UpdateSnapshotScheduleRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest.LabelsEntry";
    encode(message: UpdateSnapshotScheduleRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSnapshotScheduleRequest_LabelsEntry;
    fromJSON(object: any): UpdateSnapshotScheduleRequest_LabelsEntry;
    toJSON(message: UpdateSnapshotScheduleRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateSnapshotScheduleRequest_LabelsEntry;
};
export declare const UpdateSnapshotScheduleMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleMetadata";
    encode(message: UpdateSnapshotScheduleMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSnapshotScheduleMetadata;
    fromJSON(object: any): UpdateSnapshotScheduleMetadata;
    toJSON(message: UpdateSnapshotScheduleMetadata): unknown;
    fromPartial<I extends {
        snapshotScheduleId?: string | undefined;
    } & {
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotScheduleId">, never>>(object: I): UpdateSnapshotScheduleMetadata;
};
export declare const DeleteSnapshotScheduleRequest: {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleRequest";
    encode(message: DeleteSnapshotScheduleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSnapshotScheduleRequest;
    fromJSON(object: any): DeleteSnapshotScheduleRequest;
    toJSON(message: DeleteSnapshotScheduleRequest): unknown;
    fromPartial<I extends {
        snapshotScheduleId?: string | undefined;
    } & {
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotScheduleId">, never>>(object: I): DeleteSnapshotScheduleRequest;
};
export declare const DeleteSnapshotScheduleMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleMetadata";
    encode(message: DeleteSnapshotScheduleMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSnapshotScheduleMetadata;
    fromJSON(object: any): DeleteSnapshotScheduleMetadata;
    toJSON(message: DeleteSnapshotScheduleMetadata): unknown;
    fromPartial<I extends {
        snapshotScheduleId?: string | undefined;
    } & {
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotScheduleId">, never>>(object: I): DeleteSnapshotScheduleMetadata;
};
export declare const DisableSnapshotScheduleRequest: {
    $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleRequest";
    encode(message: DisableSnapshotScheduleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DisableSnapshotScheduleRequest;
    fromJSON(object: any): DisableSnapshotScheduleRequest;
    toJSON(message: DisableSnapshotScheduleRequest): unknown;
    fromPartial<I extends {
        snapshotScheduleId?: string | undefined;
    } & {
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotScheduleId">, never>>(object: I): DisableSnapshotScheduleRequest;
};
export declare const DisableSnapshotScheduleMetadata: {
    $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleMetadata";
    encode(message: DisableSnapshotScheduleMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DisableSnapshotScheduleMetadata;
    fromJSON(object: any): DisableSnapshotScheduleMetadata;
    toJSON(message: DisableSnapshotScheduleMetadata): unknown;
    fromPartial<I extends {
        snapshotScheduleId?: string | undefined;
    } & {
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotScheduleId">, never>>(object: I): DisableSnapshotScheduleMetadata;
};
export declare const EnableSnapshotScheduleRequest: {
    $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleRequest";
    encode(message: EnableSnapshotScheduleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EnableSnapshotScheduleRequest;
    fromJSON(object: any): EnableSnapshotScheduleRequest;
    toJSON(message: EnableSnapshotScheduleRequest): unknown;
    fromPartial<I extends {
        snapshotScheduleId?: string | undefined;
    } & {
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotScheduleId">, never>>(object: I): EnableSnapshotScheduleRequest;
};
export declare const EnableSnapshotScheduleMetadata: {
    $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleMetadata";
    encode(message: EnableSnapshotScheduleMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EnableSnapshotScheduleMetadata;
    fromJSON(object: any): EnableSnapshotScheduleMetadata;
    toJSON(message: EnableSnapshotScheduleMetadata): unknown;
    fromPartial<I extends {
        snapshotScheduleId?: string | undefined;
    } & {
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotScheduleId">, never>>(object: I): EnableSnapshotScheduleMetadata;
};
export declare const ListSnapshotScheduleOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsRequest";
    encode(message: ListSnapshotScheduleOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotScheduleOperationsRequest;
    fromJSON(object: any): ListSnapshotScheduleOperationsRequest;
    toJSON(message: ListSnapshotScheduleOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        snapshotScheduleId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "snapshotScheduleId">, never>>(object: I): ListSnapshotScheduleOperationsRequest;
};
export declare const ListSnapshotScheduleOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsResponse";
    encode(message: ListSnapshotScheduleOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotScheduleOperationsResponse;
    fromJSON(object: any): ListSnapshotScheduleOperationsResponse;
    toJSON(message: ListSnapshotScheduleOperationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        operations?: {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        operations?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["metadata"], "$type" | "typeUrl" | "value">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["operations"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["operations"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["operations"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            response?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["response"], "$type" | "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["operations"][number], "$type" | "description" | "id" | "createdBy" | "done" | "createdAt" | "modifiedAt" | "metadata" | "error" | "response">, never>)[] & Record<Exclude<keyof I["operations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListSnapshotScheduleOperationsResponse;
};
export declare const ListSnapshotScheduleSnapshotsRequest: {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsRequest";
    encode(message: ListSnapshotScheduleSnapshotsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotScheduleSnapshotsRequest;
    fromJSON(object: any): ListSnapshotScheduleSnapshotsRequest;
    toJSON(message: ListSnapshotScheduleSnapshotsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        snapshotScheduleId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "snapshotScheduleId">, never>>(object: I): ListSnapshotScheduleSnapshotsRequest;
};
export declare const ListSnapshotScheduleSnapshotsResponse: {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsResponse";
    encode(message: ListSnapshotScheduleSnapshotsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotScheduleSnapshotsResponse;
    fromJSON(object: any): ListSnapshotScheduleSnapshotsResponse;
    toJSON(message: ListSnapshotScheduleSnapshotsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        snapshots?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot").Snapshot_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            productIds?: string[] | undefined;
            diskSize?: number | undefined;
            storageSize?: number | undefined;
            sourceDiskId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        snapshots?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot").Snapshot_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            productIds?: string[] | undefined;
            diskSize?: number | undefined;
            storageSize?: number | undefined;
            sourceDiskId?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot").Snapshot_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            productIds?: string[] | undefined;
            diskSize?: number | undefined;
            storageSize?: number | undefined;
            sourceDiskId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot").Snapshot_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["snapshots"][number]["labels"], string | number>, never>) | undefined;
            productIds?: (string[] & string[] & Record<Exclude<keyof I["snapshots"][number]["productIds"], "$type" | keyof string[]>, never>) | undefined;
            diskSize?: number | undefined;
            storageSize?: number | undefined;
            sourceDiskId?: string | undefined;
        } & Record<Exclude<keyof I["snapshots"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "productIds" | "diskSize" | "storageSize" | "sourceDiskId">, never>)[] & Record<Exclude<keyof I["snapshots"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot").Snapshot_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            productIds?: string[] | undefined;
            diskSize?: number | undefined;
            storageSize?: number | undefined;
            sourceDiskId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "snapshots">, never>>(object: I): ListSnapshotScheduleSnapshotsResponse;
};
export declare const ListSnapshotScheduleDisksRequest: {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksRequest";
    encode(message: ListSnapshotScheduleDisksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotScheduleDisksRequest;
    fromJSON(object: any): ListSnapshotScheduleDisksRequest;
    toJSON(message: ListSnapshotScheduleDisksRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        snapshotScheduleId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "snapshotScheduleId">, never>>(object: I): ListSnapshotScheduleDisksRequest;
};
export declare const ListSnapshotScheduleDisksResponse: {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksResponse";
    encode(message: ListSnapshotScheduleDisksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotScheduleDisksResponse;
    fromJSON(object: any): ListSnapshotScheduleDisksResponse;
    toJSON(message: ListSnapshotScheduleDisksResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        disks?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/disk").Disk_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
            productIds?: string[] | undefined;
            instanceIds?: string[] | undefined;
            sourceImageId?: string | undefined;
            sourceSnapshotId?: string | undefined;
            diskPlacementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        disks?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/disk").Disk_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
            productIds?: string[] | undefined;
            instanceIds?: string[] | undefined;
            sourceImageId?: string | undefined;
            sourceSnapshotId?: string | undefined;
            diskPlacementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/disk").Disk_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
            productIds?: string[] | undefined;
            instanceIds?: string[] | undefined;
            sourceImageId?: string | undefined;
            sourceSnapshotId?: string | undefined;
            diskPlacementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/disk").Disk_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["disks"][number]["labels"], string | number>, never>) | undefined;
            zoneId?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
            productIds?: (string[] & string[] & Record<Exclude<keyof I["disks"][number]["productIds"], "$type" | keyof string[]>, never>) | undefined;
            instanceIds?: (string[] & string[] & Record<Exclude<keyof I["disks"][number]["instanceIds"], "$type" | keyof string[]>, never>) | undefined;
            sourceImageId?: string | undefined;
            sourceSnapshotId?: string | undefined;
            diskPlacementPolicy?: ({
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
            } & {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
            } & Record<Exclude<keyof I["disks"][number]["diskPlacementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition">, never>) | undefined;
        } & Record<Exclude<keyof I["disks"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "zoneId" | "size" | "typeId" | "blockSize" | "productIds" | "instanceIds" | "sourceImageId" | "sourceSnapshotId" | "diskPlacementPolicy">, never>)[] & Record<Exclude<keyof I["disks"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/disk").Disk_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
            productIds?: string[] | undefined;
            instanceIds?: string[] | undefined;
            sourceImageId?: string | undefined;
            sourceSnapshotId?: string | undefined;
            diskPlacementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "disks">, never>>(object: I): ListSnapshotScheduleDisksResponse;
};
export declare const UpdateSnapshotScheduleDisksRequest: {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksRequest";
    encode(message: UpdateSnapshotScheduleDisksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSnapshotScheduleDisksRequest;
    fromJSON(object: any): UpdateSnapshotScheduleDisksRequest;
    toJSON(message: UpdateSnapshotScheduleDisksRequest): unknown;
    fromPartial<I extends {
        remove?: string[] | undefined;
        snapshotScheduleId?: string | undefined;
        add?: string[] | undefined;
    } & {
        remove?: (string[] & string[] & Record<Exclude<keyof I["remove"], "$type" | keyof string[]>, never>) | undefined;
        snapshotScheduleId?: string | undefined;
        add?: (string[] & string[] & Record<Exclude<keyof I["add"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "remove" | "snapshotScheduleId" | "add">, never>>(object: I): UpdateSnapshotScheduleDisksRequest;
};
export declare const UpdateSnapshotScheduleDisksMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksMetadata";
    encode(message: UpdateSnapshotScheduleDisksMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSnapshotScheduleDisksMetadata;
    fromJSON(object: any): UpdateSnapshotScheduleDisksMetadata;
    toJSON(message: UpdateSnapshotScheduleDisksMetadata): unknown;
    fromPartial<I extends {
        snapshotScheduleId?: string | undefined;
    } & {
        snapshotScheduleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotScheduleId">, never>>(object: I): UpdateSnapshotScheduleDisksMetadata;
};
/** A set of methods for managing snapshot schedules. */
export declare const SnapshotScheduleServiceService: {
    /**
     * Returns the specified snapshot schedule.
     *
     * To get the list of available snapshot schedules, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSnapshotScheduleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSnapshotScheduleRequest;
        readonly responseSerialize: (value: SnapshotSchedule) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SnapshotSchedule;
    };
    /** Retrieves the list of snapshot schedules in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSnapshotSchedulesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSnapshotSchedulesRequest;
        readonly responseSerialize: (value: ListSnapshotSchedulesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSnapshotSchedulesResponse;
    };
    /** Creates a snapshot schedule in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSnapshotScheduleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSnapshotScheduleRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified snapshot schedule.
     *
     * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSnapshotScheduleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSnapshotScheduleRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified snapshot schedule.
     *
     * Deleting a snapshot schedule removes its data permanently and is irreversible. However, deleting a schedule
     * does not delete any snapshots created by the schedule. You must delete snapshots separately.
     *
     * The schedule is deleted only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSnapshotScheduleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSnapshotScheduleRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the list of disks attached to the specified schedule.
     *
     * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    readonly updateDisks: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/UpdateDisks";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSnapshotScheduleDisksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSnapshotScheduleDisksRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Disables the specified snapshot schedule.
     *
     * The [SnapshotSchedule.status] is changed to `INACTIVE`: the schedule is interrupted, snapshots won't be created
     * or deleted.
     *
     * The schedule is disabled only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    readonly disable: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Disable";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DisableSnapshotScheduleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DisableSnapshotScheduleRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Enables the specified snapshot schedule.
     *
     * The [SnapshotSchedule.status] is changed to `ACTIVE`: new disk snapshots will be created, old ones deleted
     * (if [SnapshotSchedule.retention_policy] is specified).
     */
    readonly enable: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Enable";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EnableSnapshotScheduleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EnableSnapshotScheduleRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified snapshot schedule. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSnapshotScheduleOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSnapshotScheduleOperationsRequest;
        readonly responseSerialize: (value: ListSnapshotScheduleOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSnapshotScheduleOperationsResponse;
    };
    /** Retrieves the list of snapshots created by the specified snapshot schedule. */
    readonly listSnapshots: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListSnapshots";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSnapshotScheduleSnapshotsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSnapshotScheduleSnapshotsRequest;
        readonly responseSerialize: (value: ListSnapshotScheduleSnapshotsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSnapshotScheduleSnapshotsResponse;
    };
    /** Retrieves the list of disks attached to the specified snapshot schedule. */
    readonly listDisks: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListDisks";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSnapshotScheduleDisksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSnapshotScheduleDisksRequest;
        readonly responseSerialize: (value: ListSnapshotScheduleDisksResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSnapshotScheduleDisksResponse;
    };
};
export interface SnapshotScheduleServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified snapshot schedule.
     *
     * To get the list of available snapshot schedules, make a [List] request.
     */
    get: handleUnaryCall<GetSnapshotScheduleRequest, SnapshotSchedule>;
    /** Retrieves the list of snapshot schedules in the specified folder. */
    list: handleUnaryCall<ListSnapshotSchedulesRequest, ListSnapshotSchedulesResponse>;
    /** Creates a snapshot schedule in the specified folder. */
    create: handleUnaryCall<CreateSnapshotScheduleRequest, Operation>;
    /**
     * Updates the specified snapshot schedule.
     *
     * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    update: handleUnaryCall<UpdateSnapshotScheduleRequest, Operation>;
    /**
     * Deletes the specified snapshot schedule.
     *
     * Deleting a snapshot schedule removes its data permanently and is irreversible. However, deleting a schedule
     * does not delete any snapshots created by the schedule. You must delete snapshots separately.
     *
     * The schedule is deleted only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    delete: handleUnaryCall<DeleteSnapshotScheduleRequest, Operation>;
    /**
     * Updates the list of disks attached to the specified schedule.
     *
     * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    updateDisks: handleUnaryCall<UpdateSnapshotScheduleDisksRequest, Operation>;
    /**
     * Disables the specified snapshot schedule.
     *
     * The [SnapshotSchedule.status] is changed to `INACTIVE`: the schedule is interrupted, snapshots won't be created
     * or deleted.
     *
     * The schedule is disabled only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    disable: handleUnaryCall<DisableSnapshotScheduleRequest, Operation>;
    /**
     * Enables the specified snapshot schedule.
     *
     * The [SnapshotSchedule.status] is changed to `ACTIVE`: new disk snapshots will be created, old ones deleted
     * (if [SnapshotSchedule.retention_policy] is specified).
     */
    enable: handleUnaryCall<EnableSnapshotScheduleRequest, Operation>;
    /** Lists operations for the specified snapshot schedule. */
    listOperations: handleUnaryCall<ListSnapshotScheduleOperationsRequest, ListSnapshotScheduleOperationsResponse>;
    /** Retrieves the list of snapshots created by the specified snapshot schedule. */
    listSnapshots: handleUnaryCall<ListSnapshotScheduleSnapshotsRequest, ListSnapshotScheduleSnapshotsResponse>;
    /** Retrieves the list of disks attached to the specified snapshot schedule. */
    listDisks: handleUnaryCall<ListSnapshotScheduleDisksRequest, ListSnapshotScheduleDisksResponse>;
}
export interface SnapshotScheduleServiceClient extends Client {
    /**
     * Returns the specified snapshot schedule.
     *
     * To get the list of available snapshot schedules, make a [List] request.
     */
    get(request: GetSnapshotScheduleRequest, callback: (error: ServiceError | null, response: SnapshotSchedule) => void): ClientUnaryCall;
    get(request: GetSnapshotScheduleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SnapshotSchedule) => void): ClientUnaryCall;
    get(request: GetSnapshotScheduleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SnapshotSchedule) => void): ClientUnaryCall;
    /** Retrieves the list of snapshot schedules in the specified folder. */
    list(request: ListSnapshotSchedulesRequest, callback: (error: ServiceError | null, response: ListSnapshotSchedulesResponse) => void): ClientUnaryCall;
    list(request: ListSnapshotSchedulesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSnapshotSchedulesResponse) => void): ClientUnaryCall;
    list(request: ListSnapshotSchedulesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSnapshotSchedulesResponse) => void): ClientUnaryCall;
    /** Creates a snapshot schedule in the specified folder. */
    create(request: CreateSnapshotScheduleRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSnapshotScheduleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSnapshotScheduleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified snapshot schedule.
     *
     * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    update(request: UpdateSnapshotScheduleRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSnapshotScheduleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSnapshotScheduleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified snapshot schedule.
     *
     * Deleting a snapshot schedule removes its data permanently and is irreversible. However, deleting a schedule
     * does not delete any snapshots created by the schedule. You must delete snapshots separately.
     *
     * The schedule is deleted only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    delete(request: DeleteSnapshotScheduleRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSnapshotScheduleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSnapshotScheduleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the list of disks attached to the specified schedule.
     *
     * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    updateDisks(request: UpdateSnapshotScheduleDisksRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateDisks(request: UpdateSnapshotScheduleDisksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateDisks(request: UpdateSnapshotScheduleDisksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Disables the specified snapshot schedule.
     *
     * The [SnapshotSchedule.status] is changed to `INACTIVE`: the schedule is interrupted, snapshots won't be created
     * or deleted.
     *
     * The schedule is disabled only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    disable(request: DisableSnapshotScheduleRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    disable(request: DisableSnapshotScheduleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    disable(request: DisableSnapshotScheduleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Enables the specified snapshot schedule.
     *
     * The [SnapshotSchedule.status] is changed to `ACTIVE`: new disk snapshots will be created, old ones deleted
     * (if [SnapshotSchedule.retention_policy] is specified).
     */
    enable(request: EnableSnapshotScheduleRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    enable(request: EnableSnapshotScheduleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    enable(request: EnableSnapshotScheduleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified snapshot schedule. */
    listOperations(request: ListSnapshotScheduleOperationsRequest, callback: (error: ServiceError | null, response: ListSnapshotScheduleOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSnapshotScheduleOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSnapshotScheduleOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSnapshotScheduleOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSnapshotScheduleOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of snapshots created by the specified snapshot schedule. */
    listSnapshots(request: ListSnapshotScheduleSnapshotsRequest, callback: (error: ServiceError | null, response: ListSnapshotScheduleSnapshotsResponse) => void): ClientUnaryCall;
    listSnapshots(request: ListSnapshotScheduleSnapshotsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSnapshotScheduleSnapshotsResponse) => void): ClientUnaryCall;
    listSnapshots(request: ListSnapshotScheduleSnapshotsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSnapshotScheduleSnapshotsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of disks attached to the specified snapshot schedule. */
    listDisks(request: ListSnapshotScheduleDisksRequest, callback: (error: ServiceError | null, response: ListSnapshotScheduleDisksResponse) => void): ClientUnaryCall;
    listDisks(request: ListSnapshotScheduleDisksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSnapshotScheduleDisksResponse) => void): ClientUnaryCall;
    listDisks(request: ListSnapshotScheduleDisksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSnapshotScheduleDisksResponse) => void): ClientUnaryCall;
}
export declare const SnapshotScheduleServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): SnapshotScheduleServiceClient;
    service: typeof SnapshotScheduleServiceService;
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
