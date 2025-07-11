/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { PlacementGroup, SpreadPlacementStrategy, PartitionPlacementStrategy } from "../../../../yandex/cloud/compute/v1/placement_group";
import { Instance } from "../../../../yandex/cloud/compute/v1/instance";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetPlacementGroupRequest {
    $type: "yandex.cloud.compute.v1.GetPlacementGroupRequest";
    /**
     * ID of the placement group to return.
     *
     * To get a placement group ID make a [PlacementGroupService.List] request.
     */
    placementGroupId: string;
}
export interface ListPlacementGroupsRequest {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupsRequest";
    /**
     * ID of the folder to list placement groups in.
     *
     * To get the folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListPlacementGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListPlacementGroupsResponse.next_page_token]
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
export interface ListPlacementGroupsResponse {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupsResponse";
    /** Lists placement groups in the specified folder. */
    placementGroups: PlacementGroup[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListPlacementGroupsRequest.page_size], use `next_page_token` as the value
     * for the [ListPlacementGroupsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreatePlacementGroupRequest {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest";
    /**
     * ID of the folder to create a placement group in.
     *
     * To get a folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
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
    /** Anti-affinity placement strategy (`spread`). Instances are distributed over distinct failure domains. */
    spreadPlacementStrategy?: SpreadPlacementStrategy | undefined;
    partitionPlacementStrategy?: PartitionPlacementStrategy | undefined;
}
export interface CreatePlacementGroupRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreatePlacementGroupMetadata {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupMetadata";
    /** ID of the placement group that is being created. */
    placementGroupId: string;
}
export interface UpdatePlacementGroupRequest {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest";
    /**
     * ID of the placement group to update.
     *
     * To get the placement group ID, use an [PlacementGroupService.List] request.
     */
    placementGroupId: string;
    /** Field mask that specifies which fields of the PlacementGroup resource should be updated. */
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
export interface UpdatePlacementGroupRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdatePlacementGroupMetadata {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupMetadata";
    /** ID of the placement group that is being updated. */
    placementGroupId: string;
}
export interface DeletePlacementGroupRequest {
    $type: "yandex.cloud.compute.v1.DeletePlacementGroupRequest";
    /**
     * ID of the placement group to delete.
     *
     * To get the placement group ID, use [PlacementGroupService.List] request.
     */
    placementGroupId: string;
}
export interface DeletePlacementGroupMetadata {
    $type: "yandex.cloud.compute.v1.DeletePlacementGroupMetadata";
    /** ID of the placement group that is being deleted. */
    placementGroupId: string;
}
export interface ListPlacementGroupInstancesRequest {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesRequest";
    /**
     * ID of the placement group to list instances for.
     *
     * To get the placement group ID, use [PlacementGroupService.List] request.
     */
    placementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListPlacementGroupInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListPlacementGroupInstancesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListPlacementGroupInstancesResponse {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesResponse";
    /** Lists instances for the specified placement group. */
    instances: Instance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListPlacementGroupInstancesRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListPlacementGroupInstancesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListPlacementGroupOperationsRequest {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsRequest";
    /**
     * ID of the placement group to list operations for.
     *
     * To get the placement group ID, use [PlacementGroupService.List] request.
     */
    placementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListPlacementGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListPlacementGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListPlacementGroupOperationsResponse {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsResponse";
    /** List of operations for the specified placement group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListPlacementGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListPlacementGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetPlacementGroupRequest: {
    $type: "yandex.cloud.compute.v1.GetPlacementGroupRequest";
    encode(message: GetPlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetPlacementGroupRequest;
    fromJSON(object: any): GetPlacementGroupRequest;
    toJSON(message: GetPlacementGroupRequest): unknown;
    fromPartial<I extends {
        placementGroupId?: string | undefined;
    } & {
        placementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "placementGroupId">, never>>(object: I): GetPlacementGroupRequest;
};
export declare const ListPlacementGroupsRequest: {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupsRequest";
    encode(message: ListPlacementGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupsRequest;
    fromJSON(object: any): ListPlacementGroupsRequest;
    toJSON(message: ListPlacementGroupsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "orderBy">, never>>(object: I): ListPlacementGroupsRequest;
};
export declare const ListPlacementGroupsResponse: {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupsResponse";
    encode(message: ListPlacementGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupsResponse;
    fromJSON(object: any): ListPlacementGroupsResponse;
    toJSON(message: ListPlacementGroupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        placementGroups?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            spreadPlacementStrategy?: {} | undefined;
            partitionPlacementStrategy?: {
                partitions?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        placementGroups?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            spreadPlacementStrategy?: {} | undefined;
            partitionPlacementStrategy?: {
                partitions?: number | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            spreadPlacementStrategy?: {} | undefined;
            partitionPlacementStrategy?: {
                partitions?: number | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["placementGroups"][number]["labels"], string | number>, never>) | undefined;
            spreadPlacementStrategy?: ({} & {} & Record<Exclude<keyof I["placementGroups"][number]["spreadPlacementStrategy"], "$type">, never>) | undefined;
            partitionPlacementStrategy?: ({
                partitions?: number | undefined;
            } & {
                partitions?: number | undefined;
            } & Record<Exclude<keyof I["placementGroups"][number]["partitionPlacementStrategy"], "$type" | "partitions">, never>) | undefined;
        } & Record<Exclude<keyof I["placementGroups"][number], "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "spreadPlacementStrategy" | "partitionPlacementStrategy">, never>)[] & Record<Exclude<keyof I["placementGroups"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            spreadPlacementStrategy?: {} | undefined;
            partitionPlacementStrategy?: {
                partitions?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "placementGroups">, never>>(object: I): ListPlacementGroupsResponse;
};
export declare const CreatePlacementGroupRequest: {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest";
    encode(message: CreatePlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePlacementGroupRequest;
    fromJSON(object: any): CreatePlacementGroupRequest;
    toJSON(message: CreatePlacementGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
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
        spreadPlacementStrategy?: ({} & {} & Record<Exclude<keyof I["spreadPlacementStrategy"], "$type">, never>) | undefined;
        partitionPlacementStrategy?: ({
            partitions?: number | undefined;
        } & {
            partitions?: number | undefined;
        } & Record<Exclude<keyof I["partitionPlacementStrategy"], "$type" | "partitions">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "spreadPlacementStrategy" | "partitionPlacementStrategy">, never>>(object: I): CreatePlacementGroupRequest;
};
export declare const CreatePlacementGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry";
    encode(message: CreatePlacementGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePlacementGroupRequest_LabelsEntry;
    fromJSON(object: any): CreatePlacementGroupRequest_LabelsEntry;
    toJSON(message: CreatePlacementGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreatePlacementGroupRequest_LabelsEntry;
};
export declare const CreatePlacementGroupMetadata: {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupMetadata";
    encode(message: CreatePlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePlacementGroupMetadata;
    fromJSON(object: any): CreatePlacementGroupMetadata;
    toJSON(message: CreatePlacementGroupMetadata): unknown;
    fromPartial<I extends {
        placementGroupId?: string | undefined;
    } & {
        placementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "placementGroupId">, never>>(object: I): CreatePlacementGroupMetadata;
};
export declare const UpdatePlacementGroupRequest: {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest";
    encode(message: UpdatePlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePlacementGroupRequest;
    fromJSON(object: any): UpdatePlacementGroupRequest;
    toJSON(message: UpdatePlacementGroupRequest): unknown;
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
        placementGroupId?: string | undefined;
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
        placementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "placementGroupId">, never>>(object: I): UpdatePlacementGroupRequest;
};
export declare const UpdatePlacementGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry";
    encode(message: UpdatePlacementGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePlacementGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdatePlacementGroupRequest_LabelsEntry;
    toJSON(message: UpdatePlacementGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdatePlacementGroupRequest_LabelsEntry;
};
export declare const UpdatePlacementGroupMetadata: {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupMetadata";
    encode(message: UpdatePlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePlacementGroupMetadata;
    fromJSON(object: any): UpdatePlacementGroupMetadata;
    toJSON(message: UpdatePlacementGroupMetadata): unknown;
    fromPartial<I extends {
        placementGroupId?: string | undefined;
    } & {
        placementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "placementGroupId">, never>>(object: I): UpdatePlacementGroupMetadata;
};
export declare const DeletePlacementGroupRequest: {
    $type: "yandex.cloud.compute.v1.DeletePlacementGroupRequest";
    encode(message: DeletePlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeletePlacementGroupRequest;
    fromJSON(object: any): DeletePlacementGroupRequest;
    toJSON(message: DeletePlacementGroupRequest): unknown;
    fromPartial<I extends {
        placementGroupId?: string | undefined;
    } & {
        placementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "placementGroupId">, never>>(object: I): DeletePlacementGroupRequest;
};
export declare const DeletePlacementGroupMetadata: {
    $type: "yandex.cloud.compute.v1.DeletePlacementGroupMetadata";
    encode(message: DeletePlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeletePlacementGroupMetadata;
    fromJSON(object: any): DeletePlacementGroupMetadata;
    toJSON(message: DeletePlacementGroupMetadata): unknown;
    fromPartial<I extends {
        placementGroupId?: string | undefined;
    } & {
        placementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "placementGroupId">, never>>(object: I): DeletePlacementGroupMetadata;
};
export declare const ListPlacementGroupInstancesRequest: {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesRequest";
    encode(message: ListPlacementGroupInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupInstancesRequest;
    fromJSON(object: any): ListPlacementGroupInstancesRequest;
    toJSON(message: ListPlacementGroupInstancesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        placementGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        placementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "placementGroupId">, never>>(object: I): ListPlacementGroupInstancesRequest;
};
export declare const ListPlacementGroupInstancesResponse: {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesResponse";
    encode(message: ListPlacementGroupInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupInstancesResponse;
    fromJSON(object: any): ListPlacementGroupInstancesResponse;
    toJSON(message: ListPlacementGroupInstancesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        instances?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/instance").Instance_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            filesystems?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            platformId?: string | undefined;
            fqdn?: string | undefined;
            serviceAccountId?: string | undefined;
            hostGroupId?: string | undefined;
            hostId?: string | undefined;
            metadataOptions?: {
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } | undefined;
            bootDisk?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } | undefined;
            secondaryDisks?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[] | undefined;
            localDisks?: {
                size?: number | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            gpuSettings?: {
                gpuClusterId?: string | undefined;
            } | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        instances?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/instance").Instance_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            filesystems?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            platformId?: string | undefined;
            fqdn?: string | undefined;
            serviceAccountId?: string | undefined;
            hostGroupId?: string | undefined;
            hostId?: string | undefined;
            metadataOptions?: {
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } | undefined;
            bootDisk?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } | undefined;
            secondaryDisks?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[] | undefined;
            localDisks?: {
                size?: number | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            gpuSettings?: {
                gpuClusterId?: string | undefined;
            } | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/instance").Instance_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            filesystems?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            platformId?: string | undefined;
            fqdn?: string | undefined;
            serviceAccountId?: string | undefined;
            hostGroupId?: string | undefined;
            hostId?: string | undefined;
            metadataOptions?: {
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } | undefined;
            bootDisk?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } | undefined;
            secondaryDisks?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[] | undefined;
            localDisks?: {
                size?: number | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            gpuSettings?: {
                gpuClusterId?: string | undefined;
            } | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["instances"][number]["metadata"], string | number>, never>) | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/instance").Instance_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["instances"][number]["labels"], string | number>, never>) | undefined;
            zoneId?: string | undefined;
            resources?: ({
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } & {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } & Record<Exclude<keyof I["instances"][number]["resources"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
            filesystems?: ({
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] & ({
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            } & {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            } & Record<Exclude<keyof I["instances"][number]["filesystems"][number], "$type" | "mode" | "filesystemId" | "deviceName">, never>)[] & Record<Exclude<keyof I["instances"][number]["filesystems"], "$type" | keyof {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[]>, never>) | undefined;
            platformId?: string | undefined;
            fqdn?: string | undefined;
            serviceAccountId?: string | undefined;
            hostGroupId?: string | undefined;
            hostId?: string | undefined;
            metadataOptions?: ({
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } & {
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } & Record<Exclude<keyof I["instances"][number]["metadataOptions"], "$type" | "gceHttpEndpoint" | "awsV1HttpEndpoint" | "gceHttpToken" | "awsV1HttpToken">, never>) | undefined;
            bootDisk?: ({
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } & {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } & Record<Exclude<keyof I["instances"][number]["bootDisk"], "$type" | "mode" | "diskId" | "deviceName" | "autoDelete">, never>) | undefined;
            secondaryDisks?: ({
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[] & ({
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } & {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } & Record<Exclude<keyof I["instances"][number]["secondaryDisks"][number], "$type" | "mode" | "diskId" | "deviceName" | "autoDelete">, never>)[] & Record<Exclude<keyof I["instances"][number]["secondaryDisks"], "$type" | keyof {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[]>, never>) | undefined;
            localDisks?: ({
                size?: number | undefined;
                deviceName?: string | undefined;
            }[] & ({
                size?: number | undefined;
                deviceName?: string | undefined;
            } & {
                size?: number | undefined;
                deviceName?: string | undefined;
            } & Record<Exclude<keyof I["instances"][number]["localDisks"][number], "$type" | "size" | "deviceName">, never>)[] & Record<Exclude<keyof I["instances"][number]["localDisks"], "$type" | keyof {
                size?: number | undefined;
                deviceName?: string | undefined;
            }[]>, never>) | undefined;
            networkInterfaces?: ({
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] & ({
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                subnetId?: string | undefined;
                securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: ({
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    oneToOneNat?: ({
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } & {
                        address?: string | undefined;
                        dnsRecords?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
                    dnsRecords?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["dnsRecords"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
                primaryV6Address?: ({
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    oneToOneNat?: ({
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } & {
                        address?: string | undefined;
                        dnsRecords?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
                    dnsRecords?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["dnsRecords"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
            } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number], "$type" | "subnetId" | "securityGroupIds" | "index" | "macAddress" | "primaryV4Address" | "primaryV6Address">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"], "$type" | keyof {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            gpuSettings?: ({
                gpuClusterId?: string | undefined;
            } & {
                gpuClusterId?: string | undefined;
            } & Record<Exclude<keyof I["instances"][number]["gpuSettings"], "$type" | "gpuClusterId">, never>) | undefined;
            schedulingPolicy?: ({
                preemptible?: boolean | undefined;
            } & {
                preemptible?: boolean | undefined;
            } & Record<Exclude<keyof I["instances"][number]["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
            networkSettings?: ({
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } & {
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } & Record<Exclude<keyof I["instances"][number]["networkSettings"], "$type" | "type">, never>) | undefined;
            placementPolicy?: ({
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } & {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: ({
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] & ({
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                } & {
                    values?: (string[] & string[] & Record<Exclude<keyof I["instances"][number]["placementPolicy"]["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                } & Record<Exclude<keyof I["instances"][number]["placementPolicy"]["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["instances"][number]["placementPolicy"]["hostAffinityRules"], "$type" | keyof {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["instances"][number]["placementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition" | "hostAffinityRules">, never>) | undefined;
        } & Record<Exclude<keyof I["instances"][number], "$type" | "description" | "id" | "name" | "createdAt" | "metadata" | "status" | "folderId" | "labels" | "zoneId" | "resources" | "filesystems" | "platformId" | "fqdn" | "serviceAccountId" | "hostGroupId" | "hostId" | "metadataOptions" | "bootDisk" | "secondaryDisks" | "localDisks" | "networkInterfaces" | "gpuSettings" | "schedulingPolicy" | "networkSettings" | "placementPolicy">, never>)[] & Record<Exclude<keyof I["instances"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/instance").Instance_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            filesystems?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            platformId?: string | undefined;
            fqdn?: string | undefined;
            serviceAccountId?: string | undefined;
            hostGroupId?: string | undefined;
            hostId?: string | undefined;
            metadataOptions?: {
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } | undefined;
            bootDisk?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } | undefined;
            secondaryDisks?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[] | undefined;
            localDisks?: {
                size?: number | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../yandex/cloud/compute/v1/instance").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            gpuSettings?: {
                gpuClusterId?: string | undefined;
            } | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "instances">, never>>(object: I): ListPlacementGroupInstancesResponse;
};
export declare const ListPlacementGroupOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsRequest";
    encode(message: ListPlacementGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupOperationsRequest;
    fromJSON(object: any): ListPlacementGroupOperationsRequest;
    toJSON(message: ListPlacementGroupOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        placementGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        placementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "placementGroupId">, never>>(object: I): ListPlacementGroupOperationsRequest;
};
export declare const ListPlacementGroupOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsResponse";
    encode(message: ListPlacementGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupOperationsResponse;
    fromJSON(object: any): ListPlacementGroupOperationsResponse;
    toJSON(message: ListPlacementGroupOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListPlacementGroupOperationsResponse;
};
/** A set of methods for managing placement groups. */
export declare const PlacementGroupServiceService: {
    /**
     * Returns the specified placement group.
     *
     * To get the list of all available placement groups, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetPlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetPlacementGroupRequest;
        readonly responseSerialize: (value: PlacementGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => PlacementGroup;
    };
    /** Retrieves the list of placement groups in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListPlacementGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPlacementGroupsRequest;
        readonly responseSerialize: (value: ListPlacementGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListPlacementGroupsResponse;
    };
    /** Creates a placement group in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreatePlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreatePlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified placement group. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdatePlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdatePlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified placement group. */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeletePlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeletePlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists instances for the specified placement group. */
    readonly listInstances: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/ListInstances";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListPlacementGroupInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPlacementGroupInstancesRequest;
        readonly responseSerialize: (value: ListPlacementGroupInstancesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListPlacementGroupInstancesResponse;
    };
    /** Lists operations for the specified placement group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListPlacementGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPlacementGroupOperationsRequest;
        readonly responseSerialize: (value: ListPlacementGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListPlacementGroupOperationsResponse;
    };
};
export interface PlacementGroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified placement group.
     *
     * To get the list of all available placement groups, make a [List] request.
     */
    get: handleUnaryCall<GetPlacementGroupRequest, PlacementGroup>;
    /** Retrieves the list of placement groups in the specified folder. */
    list: handleUnaryCall<ListPlacementGroupsRequest, ListPlacementGroupsResponse>;
    /** Creates a placement group in the specified folder. */
    create: handleUnaryCall<CreatePlacementGroupRequest, Operation>;
    /** Updates the specified placement group. */
    update: handleUnaryCall<UpdatePlacementGroupRequest, Operation>;
    /** Deletes the specified placement group. */
    delete: handleUnaryCall<DeletePlacementGroupRequest, Operation>;
    /** Lists instances for the specified placement group. */
    listInstances: handleUnaryCall<ListPlacementGroupInstancesRequest, ListPlacementGroupInstancesResponse>;
    /** Lists operations for the specified placement group. */
    listOperations: handleUnaryCall<ListPlacementGroupOperationsRequest, ListPlacementGroupOperationsResponse>;
}
export interface PlacementGroupServiceClient extends Client {
    /**
     * Returns the specified placement group.
     *
     * To get the list of all available placement groups, make a [List] request.
     */
    get(request: GetPlacementGroupRequest, callback: (error: ServiceError | null, response: PlacementGroup) => void): ClientUnaryCall;
    get(request: GetPlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: PlacementGroup) => void): ClientUnaryCall;
    get(request: GetPlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: PlacementGroup) => void): ClientUnaryCall;
    /** Retrieves the list of placement groups in the specified folder. */
    list(request: ListPlacementGroupsRequest, callback: (error: ServiceError | null, response: ListPlacementGroupsResponse) => void): ClientUnaryCall;
    list(request: ListPlacementGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListPlacementGroupsResponse) => void): ClientUnaryCall;
    list(request: ListPlacementGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListPlacementGroupsResponse) => void): ClientUnaryCall;
    /** Creates a placement group in the specified folder. */
    create(request: CreatePlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreatePlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreatePlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified placement group. */
    update(request: UpdatePlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdatePlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdatePlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified placement group. */
    delete(request: DeletePlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeletePlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeletePlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists instances for the specified placement group. */
    listInstances(request: ListPlacementGroupInstancesRequest, callback: (error: ServiceError | null, response: ListPlacementGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListPlacementGroupInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListPlacementGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListPlacementGroupInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListPlacementGroupInstancesResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified placement group. */
    listOperations(request: ListPlacementGroupOperationsRequest, callback: (error: ServiceError | null, response: ListPlacementGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListPlacementGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListPlacementGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListPlacementGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListPlacementGroupOperationsResponse) => void): ClientUnaryCall;
}
export declare const PlacementGroupServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): PlacementGroupServiceClient;
    service: typeof PlacementGroupServiceService;
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
