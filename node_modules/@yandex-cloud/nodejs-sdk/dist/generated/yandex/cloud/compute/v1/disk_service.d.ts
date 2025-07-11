/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { DiskPlacementPolicy, Disk } from "../../../../yandex/cloud/compute/v1/disk";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { SnapshotSchedule } from "../../../../yandex/cloud/compute/v1/snapshot_schedule";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetDiskRequest {
    $type: "yandex.cloud.compute.v1.GetDiskRequest";
    /**
     * ID of the Disk resource to return.
     * To get the disk ID use a [DiskService.List] request.
     */
    diskId: string;
}
export interface ListDisksRequest {
    $type: "yandex.cloud.compute.v1.ListDisksRequest";
    /**
     * ID of the folder to list disks in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDisksResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDisksResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
     *
     * Each condition has the form `<field> <operator> <value>`, where:
     * 1. `<field>` is the field name. Currently you can use filtering only on the limited number of fields.
     * 2. `<operator>` is a logical operator, one of `=`, `!=`, `IN`, `NOT IN`.
     * 3. `<value>` represents a value.
     * String values should be written in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
     */
    filter: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "id asc" if omitted.
     * The default sorting order is ascending
     */
    orderBy: string;
}
export interface ListDisksResponse {
    $type: "yandex.cloud.compute.v1.ListDisksResponse";
    /** List of Disk resources. */
    disks: Disk[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDisksRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListDisksRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateDiskRequest {
    $type: "yandex.cloud.compute.v1.CreateDiskRequest";
    /**
     * ID of the folder to create a disk in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the disk. */
    name: string;
    /** Description of the disk. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the disk type.
     * To get a list of available disk types use the [yandex.cloud.compute.v1.DiskTypeService.List] request.
     */
    typeId: string;
    /**
     * ID of the availability zone where the disk resides.
     * To get a list of available zones use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * Size of the disk, specified in bytes.
     * If the disk was created from a image, this value should be more than the
     * [yandex.cloud.compute.v1.Image.min_disk_size] value.
     */
    size: number;
    /** ID of the image to create the disk from. */
    imageId: string | undefined;
    /** ID of the snapshot to restore the disk from. */
    snapshotId: string | undefined;
    /** Block size used for disk, specified in bytes. The default is 4096. */
    blockSize: number;
    /** Placement policy configuration. */
    diskPlacementPolicy?: DiskPlacementPolicy;
    /** List of IDs of the snapshot schedules to attach the disk to. */
    snapshotScheduleIds: string[];
}
export interface CreateDiskRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateDiskMetadata {
    $type: "yandex.cloud.compute.v1.CreateDiskMetadata";
    /** ID of the disk that is being created. */
    diskId: string;
}
export interface UpdateDiskRequest {
    $type: "yandex.cloud.compute.v1.UpdateDiskRequest";
    /**
     * ID of the Disk resource to update.
     * To get the disk ID use a [DiskService.List] request.
     */
    diskId: string;
    /** Field mask that specifies which fields of the Disk resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the disk. */
    name: string;
    /** Description of the disk. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /** Size of the disk, specified in bytes. */
    size: number;
    /** Placement policy configuration. */
    diskPlacementPolicy?: DiskPlacementPolicy;
}
export interface UpdateDiskRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateDiskMetadata {
    $type: "yandex.cloud.compute.v1.UpdateDiskMetadata";
    /** ID of the Disk resource that is being updated. */
    diskId: string;
}
export interface DeleteDiskRequest {
    $type: "yandex.cloud.compute.v1.DeleteDiskRequest";
    /**
     * ID of the disk to delete.
     * To get the disk ID use a [DiskService.List] request.
     */
    diskId: string;
}
export interface DeleteDiskMetadata {
    $type: "yandex.cloud.compute.v1.DeleteDiskMetadata";
    /** ID of the disk that is being deleted. */
    diskId: string;
}
export interface ListDiskOperationsRequest {
    $type: "yandex.cloud.compute.v1.ListDiskOperationsRequest";
    /** ID of the Disk resource to list operations for. */
    diskId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListDiskOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDiskOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListDiskOperationsResponse {
    $type: "yandex.cloud.compute.v1.ListDiskOperationsResponse";
    /** List of operations for the specified disk. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDiskOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListDiskOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface MoveDiskRequest {
    $type: "yandex.cloud.compute.v1.MoveDiskRequest";
    /**
     * ID of the disk to move.
     *
     * To get the disk ID, make a [DiskService.List] request.
     */
    diskId: string;
    /**
     * ID of the folder to move the disk to.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    destinationFolderId: string;
}
export interface MoveDiskMetadata {
    $type: "yandex.cloud.compute.v1.MoveDiskMetadata";
    /** ID of the disk that is being moved. */
    diskId: string;
    /** ID of the folder that the disk is being moved from. */
    sourceFolderId: string;
    /** ID of the folder that the disk is being moved to. */
    destinationFolderId: string;
}
export interface RelocateDiskRequest {
    $type: "yandex.cloud.compute.v1.RelocateDiskRequest";
    /**
     * ID of the disk to move.
     *
     * To get the disk ID, make a [DiskService.List] request.
     */
    diskId: string;
    /**
     * ID of the availability zone to move the disk to.
     *
     * To get the zone ID, make a [ZoneService.List] request.
     */
    destinationZoneId: string;
}
export interface RelocateDiskMetadata {
    $type: "yandex.cloud.compute.v1.RelocateDiskMetadata";
    /** ID of the disk that is being moved. */
    diskId: string;
    /** ID of the availability zone that the disk is being moved from. */
    sourceZoneId: string;
    /** ID of the availability zone that the disk is being moved to. */
    destinationZoneId: string;
}
export interface ListDiskSnapshotSchedulesRequest {
    $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesRequest";
    /** ID of the disk to list snapshot schedules for. */
    diskId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDiskSnapshotSchedulesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDiskSnapshotSchedulesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListDiskSnapshotSchedulesResponse {
    $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesResponse";
    /** List of snapshot schedules the specified disk is attached to. */
    snapshotSchedules: SnapshotSchedule[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDiskSnapshotSchedulesRequest.page_size], use `next_page_token` as the value
     * for the [ListDiskSnapshotSchedulesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetDiskRequest: {
    $type: "yandex.cloud.compute.v1.GetDiskRequest";
    encode(message: GetDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDiskRequest;
    fromJSON(object: any): GetDiskRequest;
    toJSON(message: GetDiskRequest): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
    } & {
        diskId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId">, never>>(object: I): GetDiskRequest;
};
export declare const ListDisksRequest: {
    $type: "yandex.cloud.compute.v1.ListDisksRequest";
    encode(message: ListDisksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDisksRequest;
    fromJSON(object: any): ListDisksRequest;
    toJSON(message: ListDisksRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "orderBy">, never>>(object: I): ListDisksRequest;
};
export declare const ListDisksResponse: {
    $type: "yandex.cloud.compute.v1.ListDisksResponse";
    encode(message: ListDisksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDisksResponse;
    fromJSON(object: any): ListDisksResponse;
    toJSON(message: ListDisksResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "disks">, never>>(object: I): ListDisksResponse;
};
export declare const CreateDiskRequest: {
    $type: "yandex.cloud.compute.v1.CreateDiskRequest";
    encode(message: CreateDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskRequest;
    fromJSON(object: any): CreateDiskRequest;
    toJSON(message: CreateDiskRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zoneId?: string | undefined;
        size?: number | undefined;
        typeId?: string | undefined;
        blockSize?: number | undefined;
        diskPlacementPolicy?: {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
        } | undefined;
        snapshotScheduleIds?: string[] | undefined;
        imageId?: string | undefined;
        snapshotId?: string | undefined;
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
        zoneId?: string | undefined;
        size?: number | undefined;
        typeId?: string | undefined;
        blockSize?: number | undefined;
        diskPlacementPolicy?: ({
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
        } & {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
        } & Record<Exclude<keyof I["diskPlacementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition">, never>) | undefined;
        snapshotScheduleIds?: (string[] & string[] & Record<Exclude<keyof I["snapshotScheduleIds"], "$type" | keyof string[]>, never>) | undefined;
        imageId?: string | undefined;
        snapshotId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "zoneId" | "size" | "typeId" | "blockSize" | "diskPlacementPolicy" | "snapshotScheduleIds" | "imageId" | "snapshotId">, never>>(object: I): CreateDiskRequest;
};
export declare const CreateDiskRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry";
    encode(message: CreateDiskRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskRequest_LabelsEntry;
    fromJSON(object: any): CreateDiskRequest_LabelsEntry;
    toJSON(message: CreateDiskRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateDiskRequest_LabelsEntry;
};
export declare const CreateDiskMetadata: {
    $type: "yandex.cloud.compute.v1.CreateDiskMetadata";
    encode(message: CreateDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskMetadata;
    fromJSON(object: any): CreateDiskMetadata;
    toJSON(message: CreateDiskMetadata): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
    } & {
        diskId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId">, never>>(object: I): CreateDiskMetadata;
};
export declare const UpdateDiskRequest: {
    $type: "yandex.cloud.compute.v1.UpdateDiskRequest";
    encode(message: UpdateDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskRequest;
    fromJSON(object: any): UpdateDiskRequest;
    toJSON(message: UpdateDiskRequest): unknown;
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
        size?: number | undefined;
        diskPlacementPolicy?: {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
        } | undefined;
        diskId?: string | undefined;
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
        size?: number | undefined;
        diskPlacementPolicy?: ({
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
        } & {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
        } & Record<Exclude<keyof I["diskPlacementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition">, never>) | undefined;
        diskId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "size" | "diskPlacementPolicy" | "diskId">, never>>(object: I): UpdateDiskRequest;
};
export declare const UpdateDiskRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry";
    encode(message: UpdateDiskRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskRequest_LabelsEntry;
    fromJSON(object: any): UpdateDiskRequest_LabelsEntry;
    toJSON(message: UpdateDiskRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateDiskRequest_LabelsEntry;
};
export declare const UpdateDiskMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateDiskMetadata";
    encode(message: UpdateDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskMetadata;
    fromJSON(object: any): UpdateDiskMetadata;
    toJSON(message: UpdateDiskMetadata): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
    } & {
        diskId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId">, never>>(object: I): UpdateDiskMetadata;
};
export declare const DeleteDiskRequest: {
    $type: "yandex.cloud.compute.v1.DeleteDiskRequest";
    encode(message: DeleteDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDiskRequest;
    fromJSON(object: any): DeleteDiskRequest;
    toJSON(message: DeleteDiskRequest): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
    } & {
        diskId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId">, never>>(object: I): DeleteDiskRequest;
};
export declare const DeleteDiskMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteDiskMetadata";
    encode(message: DeleteDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDiskMetadata;
    fromJSON(object: any): DeleteDiskMetadata;
    toJSON(message: DeleteDiskMetadata): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
    } & {
        diskId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId">, never>>(object: I): DeleteDiskMetadata;
};
export declare const ListDiskOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListDiskOperationsRequest";
    encode(message: ListDiskOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskOperationsRequest;
    fromJSON(object: any): ListDiskOperationsRequest;
    toJSON(message: ListDiskOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        diskId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        diskId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "diskId">, never>>(object: I): ListDiskOperationsRequest;
};
export declare const ListDiskOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListDiskOperationsResponse";
    encode(message: ListDiskOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskOperationsResponse;
    fromJSON(object: any): ListDiskOperationsResponse;
    toJSON(message: ListDiskOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListDiskOperationsResponse;
};
export declare const MoveDiskRequest: {
    $type: "yandex.cloud.compute.v1.MoveDiskRequest";
    encode(message: MoveDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveDiskRequest;
    fromJSON(object: any): MoveDiskRequest;
    toJSON(message: MoveDiskRequest): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
        destinationFolderId?: string | undefined;
    } & {
        diskId?: string | undefined;
        destinationFolderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId" | "destinationFolderId">, never>>(object: I): MoveDiskRequest;
};
export declare const MoveDiskMetadata: {
    $type: "yandex.cloud.compute.v1.MoveDiskMetadata";
    encode(message: MoveDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveDiskMetadata;
    fromJSON(object: any): MoveDiskMetadata;
    toJSON(message: MoveDiskMetadata): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
        destinationFolderId?: string | undefined;
        sourceFolderId?: string | undefined;
    } & {
        diskId?: string | undefined;
        destinationFolderId?: string | undefined;
        sourceFolderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId" | "destinationFolderId" | "sourceFolderId">, never>>(object: I): MoveDiskMetadata;
};
export declare const RelocateDiskRequest: {
    $type: "yandex.cloud.compute.v1.RelocateDiskRequest";
    encode(message: RelocateDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RelocateDiskRequest;
    fromJSON(object: any): RelocateDiskRequest;
    toJSON(message: RelocateDiskRequest): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
        destinationZoneId?: string | undefined;
    } & {
        diskId?: string | undefined;
        destinationZoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId" | "destinationZoneId">, never>>(object: I): RelocateDiskRequest;
};
export declare const RelocateDiskMetadata: {
    $type: "yandex.cloud.compute.v1.RelocateDiskMetadata";
    encode(message: RelocateDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RelocateDiskMetadata;
    fromJSON(object: any): RelocateDiskMetadata;
    toJSON(message: RelocateDiskMetadata): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
        destinationZoneId?: string | undefined;
        sourceZoneId?: string | undefined;
    } & {
        diskId?: string | undefined;
        destinationZoneId?: string | undefined;
        sourceZoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId" | "destinationZoneId" | "sourceZoneId">, never>>(object: I): RelocateDiskMetadata;
};
export declare const ListDiskSnapshotSchedulesRequest: {
    $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesRequest";
    encode(message: ListDiskSnapshotSchedulesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskSnapshotSchedulesRequest;
    fromJSON(object: any): ListDiskSnapshotSchedulesRequest;
    toJSON(message: ListDiskSnapshotSchedulesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        diskId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        diskId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "diskId">, never>>(object: I): ListDiskSnapshotSchedulesRequest;
};
export declare const ListDiskSnapshotSchedulesResponse: {
    $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesResponse";
    encode(message: ListDiskSnapshotSchedulesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskSnapshotSchedulesResponse;
    fromJSON(object: any): ListDiskSnapshotSchedulesResponse;
    toJSON(message: ListDiskSnapshotSchedulesResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "snapshotSchedules">, never>>(object: I): ListDiskSnapshotSchedulesResponse;
};
/** A set of methods for managing Disk resources. */
export declare const DiskServiceService: {
    /**
     * Returns the specified Disk resource.
     *
     * To get the list of available Disk resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDiskRequest;
        readonly responseSerialize: (value: Disk) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Disk;
    };
    /** Retrieves the list of Disk resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDisksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDisksRequest;
        readonly responseSerialize: (value: ListDisksResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDisksResponse;
    };
    /**
     * Creates a disk in the specified folder.
     *
     * You can create an empty disk or restore it from a snapshot or an image.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified disk. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified disk.
     *
     * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
     * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
     *
     * It is not possible to delete a disk that is attached to an instance.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified disk. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDiskOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDiskOperationsRequest;
        readonly responseSerialize: (value: ListDiskOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDiskOperationsResponse;
    };
    /** Moves the specified disk to another folder of the same cloud. */
    readonly move: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Moves the specified disk to another availability zone
     *
     * Disk must be detached from instances. To move attached
     * disk use [InstanceService.Relocate] request.
     */
    readonly relocate: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/Relocate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RelocateDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RelocateDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of snapshot schedules the specified disk is attached to. */
    readonly listSnapshotSchedules: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/ListSnapshotSchedules";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDiskSnapshotSchedulesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDiskSnapshotSchedulesRequest;
        readonly responseSerialize: (value: ListDiskSnapshotSchedulesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDiskSnapshotSchedulesResponse;
    };
};
export interface DiskServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Disk resource.
     *
     * To get the list of available Disk resources, make a [List] request.
     */
    get: handleUnaryCall<GetDiskRequest, Disk>;
    /** Retrieves the list of Disk resources in the specified folder. */
    list: handleUnaryCall<ListDisksRequest, ListDisksResponse>;
    /**
     * Creates a disk in the specified folder.
     *
     * You can create an empty disk or restore it from a snapshot or an image.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateDiskRequest, Operation>;
    /** Updates the specified disk. */
    update: handleUnaryCall<UpdateDiskRequest, Operation>;
    /**
     * Deletes the specified disk.
     *
     * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
     * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
     *
     * It is not possible to delete a disk that is attached to an instance.
     */
    delete: handleUnaryCall<DeleteDiskRequest, Operation>;
    /** Lists operations for the specified disk. */
    listOperations: handleUnaryCall<ListDiskOperationsRequest, ListDiskOperationsResponse>;
    /** Moves the specified disk to another folder of the same cloud. */
    move: handleUnaryCall<MoveDiskRequest, Operation>;
    /**
     * Moves the specified disk to another availability zone
     *
     * Disk must be detached from instances. To move attached
     * disk use [InstanceService.Relocate] request.
     */
    relocate: handleUnaryCall<RelocateDiskRequest, Operation>;
    /** Retrieves the list of snapshot schedules the specified disk is attached to. */
    listSnapshotSchedules: handleUnaryCall<ListDiskSnapshotSchedulesRequest, ListDiskSnapshotSchedulesResponse>;
}
export interface DiskServiceClient extends Client {
    /**
     * Returns the specified Disk resource.
     *
     * To get the list of available Disk resources, make a [List] request.
     */
    get(request: GetDiskRequest, callback: (error: ServiceError | null, response: Disk) => void): ClientUnaryCall;
    get(request: GetDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Disk) => void): ClientUnaryCall;
    get(request: GetDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Disk) => void): ClientUnaryCall;
    /** Retrieves the list of Disk resources in the specified folder. */
    list(request: ListDisksRequest, callback: (error: ServiceError | null, response: ListDisksResponse) => void): ClientUnaryCall;
    list(request: ListDisksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDisksResponse) => void): ClientUnaryCall;
    list(request: ListDisksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDisksResponse) => void): ClientUnaryCall;
    /**
     * Creates a disk in the specified folder.
     *
     * You can create an empty disk or restore it from a snapshot or an image.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified disk. */
    update(request: UpdateDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified disk.
     *
     * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
     * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
     *
     * It is not possible to delete a disk that is attached to an instance.
     */
    delete(request: DeleteDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified disk. */
    listOperations(request: ListDiskOperationsRequest, callback: (error: ServiceError | null, response: ListDiskOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDiskOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDiskOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDiskOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDiskOperationsResponse) => void): ClientUnaryCall;
    /** Moves the specified disk to another folder of the same cloud. */
    move(request: MoveDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Moves the specified disk to another availability zone
     *
     * Disk must be detached from instances. To move attached
     * disk use [InstanceService.Relocate] request.
     */
    relocate(request: RelocateDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    relocate(request: RelocateDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    relocate(request: RelocateDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of snapshot schedules the specified disk is attached to. */
    listSnapshotSchedules(request: ListDiskSnapshotSchedulesRequest, callback: (error: ServiceError | null, response: ListDiskSnapshotSchedulesResponse) => void): ClientUnaryCall;
    listSnapshotSchedules(request: ListDiskSnapshotSchedulesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDiskSnapshotSchedulesResponse) => void): ClientUnaryCall;
    listSnapshotSchedules(request: ListDiskSnapshotSchedulesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDiskSnapshotSchedulesResponse) => void): ClientUnaryCall;
}
export declare const DiskServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): DiskServiceClient;
    service: typeof DiskServiceService;
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
