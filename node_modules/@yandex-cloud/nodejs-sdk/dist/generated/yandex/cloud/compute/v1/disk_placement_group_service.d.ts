/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { DiskPlacementGroup, DiskSpreadPlacementStrategy, DiskPartitionPlacementStrategy } from "../../../../yandex/cloud/compute/v1/disk_placement_group";
import { Disk } from "../../../../yandex/cloud/compute/v1/disk";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetDiskPlacementGroupRequest {
    $type: "yandex.cloud.compute.v1.GetDiskPlacementGroupRequest";
    /**
     * ID of the placement group to return.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
}
export interface ListDiskPlacementGroupsRequest {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsRequest";
    /**
     * ID of the folder to list placement groups in.
     * To get the folder ID, use [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDiskPlacementGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListDiskPlacementGroupsResponse.next_page_token]
     * returned by a previous list request.
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
export interface ListDiskPlacementGroupsResponse {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsResponse";
    /** Lists placement groups for the specified folder. */
    diskPlacementGroups: DiskPlacementGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDiskPlacementGroupsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListDiskPlacementGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateDiskPlacementGroupRequest {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest";
    /**
     * ID of the folder to create a placement group in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the placement group. */
    name: string;
    /** Description of the placement group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the availability zone where the placement group resides.
     * To get a list of available zones use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /** Distribute disks over distinct failure domains. */
    spreadPlacementStrategy?: DiskSpreadPlacementStrategy | undefined;
    /** Distribute disks over partitions. */
    partitionPlacementStrategy?: DiskPartitionPlacementStrategy | undefined;
}
export interface CreateDiskPlacementGroupRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateDiskPlacementGroupMetadata {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupMetadata";
    /** ID of the placement group that is being created. */
    diskPlacementGroupId: string;
}
export interface UpdateDiskPlacementGroupRequest {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest";
    /**
     * ID of the placement group to update.
     * To get the placement group ID, use an [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
    /** Field mask that specifies which fields of the DiskPlacementGroup resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the placement group. */
    name: string;
    /** Description of the placement group. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * The existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateDiskPlacementGroupRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateDiskPlacementGroupMetadata {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupMetadata";
    /** ID of the placement group that is being updated. */
    diskPlacementGroupId: string;
}
export interface DeleteDiskPlacementGroupRequest {
    $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupRequest";
    /**
     * ID of the placement group to delete.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
}
export interface DeleteDiskPlacementGroupMetadata {
    $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupMetadata";
    /** ID of the placement group that is being deleted. */
    diskPlacementGroupId: string;
}
export interface ListDiskPlacementGroupDisksRequest {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksRequest";
    /**
     * ID of the placement group to list disks for.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDiskPlacementGroupDisksResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListDiskPlacementGroupDisksResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListDiskPlacementGroupDisksResponse {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksResponse";
    /** Lists disks for the specified placement group. */
    disks: Disk[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListDiskPlacementGroupDisksRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListDiskPlacementGroupDisksRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListDiskPlacementGroupOperationsRequest {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsRequest";
    /**
     * ID of the placement group to list operations for.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListDiskPlacementGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDiskPlacementGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListDiskPlacementGroupOperationsResponse {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsResponse";
    /** List of operations for the specified placement group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDiskPlacementGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListDiskPlacementGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetDiskPlacementGroupRequest: {
    $type: "yandex.cloud.compute.v1.GetDiskPlacementGroupRequest";
    encode(message: GetDiskPlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDiskPlacementGroupRequest;
    fromJSON(object: any): GetDiskPlacementGroupRequest;
    toJSON(message: GetDiskPlacementGroupRequest): unknown;
    fromPartial<I extends {
        diskPlacementGroupId?: string | undefined;
    } & {
        diskPlacementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskPlacementGroupId">, never>>(object: I): GetDiskPlacementGroupRequest;
};
export declare const ListDiskPlacementGroupsRequest: {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsRequest";
    encode(message: ListDiskPlacementGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupsRequest;
    fromJSON(object: any): ListDiskPlacementGroupsRequest;
    toJSON(message: ListDiskPlacementGroupsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "orderBy">, never>>(object: I): ListDiskPlacementGroupsRequest;
};
export declare const ListDiskPlacementGroupsResponse: {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsResponse";
    encode(message: ListDiskPlacementGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupsResponse;
    fromJSON(object: any): ListDiskPlacementGroupsResponse;
    toJSON(message: ListDiskPlacementGroupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        diskPlacementGroups?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/disk_placement_group").DiskPlacementGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            spreadPlacementStrategy?: {} | undefined;
            partitionPlacementStrategy?: {
                partitions?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        diskPlacementGroups?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/disk_placement_group").DiskPlacementGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            spreadPlacementStrategy?: {} | undefined;
            partitionPlacementStrategy?: {
                partitions?: number | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/disk_placement_group").DiskPlacementGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            spreadPlacementStrategy?: {} | undefined;
            partitionPlacementStrategy?: {
                partitions?: number | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/disk_placement_group").DiskPlacementGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["diskPlacementGroups"][number]["labels"], string | number>, never>) | undefined;
            zoneId?: string | undefined;
            spreadPlacementStrategy?: ({} & {} & Record<Exclude<keyof I["diskPlacementGroups"][number]["spreadPlacementStrategy"], "$type">, never>) | undefined;
            partitionPlacementStrategy?: ({
                partitions?: number | undefined;
            } & {
                partitions?: number | undefined;
            } & Record<Exclude<keyof I["diskPlacementGroups"][number]["partitionPlacementStrategy"], "$type" | "partitions">, never>) | undefined;
        } & Record<Exclude<keyof I["diskPlacementGroups"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "zoneId" | "spreadPlacementStrategy" | "partitionPlacementStrategy">, never>)[] & Record<Exclude<keyof I["diskPlacementGroups"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/disk_placement_group").DiskPlacementGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            spreadPlacementStrategy?: {} | undefined;
            partitionPlacementStrategy?: {
                partitions?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "diskPlacementGroups">, never>>(object: I): ListDiskPlacementGroupsResponse;
};
export declare const CreateDiskPlacementGroupRequest: {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest";
    encode(message: CreateDiskPlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskPlacementGroupRequest;
    fromJSON(object: any): CreateDiskPlacementGroupRequest;
    toJSON(message: CreateDiskPlacementGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zoneId?: string | undefined;
        spreadPlacementStrategy?: {} | undefined;
        partitionPlacementStrategy?: {
            partitions?: number | undefined;
        } | undefined;
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
        spreadPlacementStrategy?: ({} & {} & Record<Exclude<keyof I["spreadPlacementStrategy"], "$type">, never>) | undefined;
        partitionPlacementStrategy?: ({
            partitions?: number | undefined;
        } & {
            partitions?: number | undefined;
        } & Record<Exclude<keyof I["partitionPlacementStrategy"], "$type" | "partitions">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "zoneId" | "spreadPlacementStrategy" | "partitionPlacementStrategy">, never>>(object: I): CreateDiskPlacementGroupRequest;
};
export declare const CreateDiskPlacementGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry";
    encode(message: CreateDiskPlacementGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskPlacementGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateDiskPlacementGroupRequest_LabelsEntry;
    toJSON(message: CreateDiskPlacementGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateDiskPlacementGroupRequest_LabelsEntry;
};
export declare const CreateDiskPlacementGroupMetadata: {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupMetadata";
    encode(message: CreateDiskPlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskPlacementGroupMetadata;
    fromJSON(object: any): CreateDiskPlacementGroupMetadata;
    toJSON(message: CreateDiskPlacementGroupMetadata): unknown;
    fromPartial<I extends {
        diskPlacementGroupId?: string | undefined;
    } & {
        diskPlacementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskPlacementGroupId">, never>>(object: I): CreateDiskPlacementGroupMetadata;
};
export declare const UpdateDiskPlacementGroupRequest: {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest";
    encode(message: UpdateDiskPlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskPlacementGroupRequest;
    fromJSON(object: any): UpdateDiskPlacementGroupRequest;
    toJSON(message: UpdateDiskPlacementGroupRequest): unknown;
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
        diskPlacementGroupId?: string | undefined;
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
        diskPlacementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "diskPlacementGroupId">, never>>(object: I): UpdateDiskPlacementGroupRequest;
};
export declare const UpdateDiskPlacementGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry";
    encode(message: UpdateDiskPlacementGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskPlacementGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateDiskPlacementGroupRequest_LabelsEntry;
    toJSON(message: UpdateDiskPlacementGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateDiskPlacementGroupRequest_LabelsEntry;
};
export declare const UpdateDiskPlacementGroupMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupMetadata";
    encode(message: UpdateDiskPlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskPlacementGroupMetadata;
    fromJSON(object: any): UpdateDiskPlacementGroupMetadata;
    toJSON(message: UpdateDiskPlacementGroupMetadata): unknown;
    fromPartial<I extends {
        diskPlacementGroupId?: string | undefined;
    } & {
        diskPlacementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskPlacementGroupId">, never>>(object: I): UpdateDiskPlacementGroupMetadata;
};
export declare const DeleteDiskPlacementGroupRequest: {
    $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupRequest";
    encode(message: DeleteDiskPlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDiskPlacementGroupRequest;
    fromJSON(object: any): DeleteDiskPlacementGroupRequest;
    toJSON(message: DeleteDiskPlacementGroupRequest): unknown;
    fromPartial<I extends {
        diskPlacementGroupId?: string | undefined;
    } & {
        diskPlacementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskPlacementGroupId">, never>>(object: I): DeleteDiskPlacementGroupRequest;
};
export declare const DeleteDiskPlacementGroupMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupMetadata";
    encode(message: DeleteDiskPlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDiskPlacementGroupMetadata;
    fromJSON(object: any): DeleteDiskPlacementGroupMetadata;
    toJSON(message: DeleteDiskPlacementGroupMetadata): unknown;
    fromPartial<I extends {
        diskPlacementGroupId?: string | undefined;
    } & {
        diskPlacementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskPlacementGroupId">, never>>(object: I): DeleteDiskPlacementGroupMetadata;
};
export declare const ListDiskPlacementGroupDisksRequest: {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksRequest";
    encode(message: ListDiskPlacementGroupDisksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupDisksRequest;
    fromJSON(object: any): ListDiskPlacementGroupDisksRequest;
    toJSON(message: ListDiskPlacementGroupDisksRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        diskPlacementGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        diskPlacementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "diskPlacementGroupId">, never>>(object: I): ListDiskPlacementGroupDisksRequest;
};
export declare const ListDiskPlacementGroupDisksResponse: {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksResponse";
    encode(message: ListDiskPlacementGroupDisksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupDisksResponse;
    fromJSON(object: any): ListDiskPlacementGroupDisksResponse;
    toJSON(message: ListDiskPlacementGroupDisksResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "disks">, never>>(object: I): ListDiskPlacementGroupDisksResponse;
};
export declare const ListDiskPlacementGroupOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsRequest";
    encode(message: ListDiskPlacementGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupOperationsRequest;
    fromJSON(object: any): ListDiskPlacementGroupOperationsRequest;
    toJSON(message: ListDiskPlacementGroupOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        diskPlacementGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        diskPlacementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "diskPlacementGroupId">, never>>(object: I): ListDiskPlacementGroupOperationsRequest;
};
export declare const ListDiskPlacementGroupOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsResponse";
    encode(message: ListDiskPlacementGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupOperationsResponse;
    fromJSON(object: any): ListDiskPlacementGroupOperationsResponse;
    toJSON(message: ListDiskPlacementGroupOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListDiskPlacementGroupOperationsResponse;
};
/** A set of methods for managing DiskPlacementGroup resources. */
export declare const DiskPlacementGroupServiceService: {
    /** Returns the specified placement group. */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDiskPlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDiskPlacementGroupRequest;
        readonly responseSerialize: (value: DiskPlacementGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DiskPlacementGroup;
    };
    /** Retrieves the list of placement groups in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDiskPlacementGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDiskPlacementGroupsRequest;
        readonly responseSerialize: (value: ListDiskPlacementGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDiskPlacementGroupsResponse;
    };
    /** Creates a placement group in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDiskPlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDiskPlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified placement group. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDiskPlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDiskPlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified placement group. */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDiskPlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDiskPlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists disks for the specified placement group. */
    readonly listDisks: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListDisks";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDiskPlacementGroupDisksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDiskPlacementGroupDisksRequest;
        readonly responseSerialize: (value: ListDiskPlacementGroupDisksResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDiskPlacementGroupDisksResponse;
    };
    /** Lists operations for the specified placement group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDiskPlacementGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDiskPlacementGroupOperationsRequest;
        readonly responseSerialize: (value: ListDiskPlacementGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDiskPlacementGroupOperationsResponse;
    };
};
export interface DiskPlacementGroupServiceServer extends UntypedServiceImplementation {
    /** Returns the specified placement group. */
    get: handleUnaryCall<GetDiskPlacementGroupRequest, DiskPlacementGroup>;
    /** Retrieves the list of placement groups in the specified folder. */
    list: handleUnaryCall<ListDiskPlacementGroupsRequest, ListDiskPlacementGroupsResponse>;
    /** Creates a placement group in the specified folder. */
    create: handleUnaryCall<CreateDiskPlacementGroupRequest, Operation>;
    /** Updates the specified placement group. */
    update: handleUnaryCall<UpdateDiskPlacementGroupRequest, Operation>;
    /** Deletes the specified placement group. */
    delete: handleUnaryCall<DeleteDiskPlacementGroupRequest, Operation>;
    /** Lists disks for the specified placement group. */
    listDisks: handleUnaryCall<ListDiskPlacementGroupDisksRequest, ListDiskPlacementGroupDisksResponse>;
    /** Lists operations for the specified placement group. */
    listOperations: handleUnaryCall<ListDiskPlacementGroupOperationsRequest, ListDiskPlacementGroupOperationsResponse>;
}
export interface DiskPlacementGroupServiceClient extends Client {
    /** Returns the specified placement group. */
    get(request: GetDiskPlacementGroupRequest, callback: (error: ServiceError | null, response: DiskPlacementGroup) => void): ClientUnaryCall;
    get(request: GetDiskPlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DiskPlacementGroup) => void): ClientUnaryCall;
    get(request: GetDiskPlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DiskPlacementGroup) => void): ClientUnaryCall;
    /** Retrieves the list of placement groups in the specified folder. */
    list(request: ListDiskPlacementGroupsRequest, callback: (error: ServiceError | null, response: ListDiskPlacementGroupsResponse) => void): ClientUnaryCall;
    list(request: ListDiskPlacementGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDiskPlacementGroupsResponse) => void): ClientUnaryCall;
    list(request: ListDiskPlacementGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDiskPlacementGroupsResponse) => void): ClientUnaryCall;
    /** Creates a placement group in the specified folder. */
    create(request: CreateDiskPlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDiskPlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDiskPlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified placement group. */
    update(request: UpdateDiskPlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDiskPlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDiskPlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified placement group. */
    delete(request: DeleteDiskPlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDiskPlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDiskPlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists disks for the specified placement group. */
    listDisks(request: ListDiskPlacementGroupDisksRequest, callback: (error: ServiceError | null, response: ListDiskPlacementGroupDisksResponse) => void): ClientUnaryCall;
    listDisks(request: ListDiskPlacementGroupDisksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDiskPlacementGroupDisksResponse) => void): ClientUnaryCall;
    listDisks(request: ListDiskPlacementGroupDisksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDiskPlacementGroupDisksResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified placement group. */
    listOperations(request: ListDiskPlacementGroupOperationsRequest, callback: (error: ServiceError | null, response: ListDiskPlacementGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDiskPlacementGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDiskPlacementGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDiskPlacementGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDiskPlacementGroupOperationsResponse) => void): ClientUnaryCall;
}
export declare const DiskPlacementGroupServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): DiskPlacementGroupServiceClient;
    service: typeof DiskPlacementGroupServiceService;
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
