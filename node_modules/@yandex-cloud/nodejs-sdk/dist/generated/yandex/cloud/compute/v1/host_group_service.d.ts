/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { MaintenancePolicy, ScalePolicy, HostGroup, Host } from "../../../../yandex/cloud/compute/v1/host_group";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Instance } from "../../../../yandex/cloud/compute/v1/instance";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetHostGroupRequest {
    $type: "yandex.cloud.compute.v1.GetHostGroupRequest";
    /**
     * ID of the host group to return.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
}
export interface ListHostGroupsRequest {
    $type: "yandex.cloud.compute.v1.ListHostGroupsRequest";
    /**
     * ID of the folder to list host groups in.
     * To get the folder ID, use [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListHostGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListHostGroupsResponse.next_page_token]
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
export interface ListHostGroupsResponse {
    $type: "yandex.cloud.compute.v1.ListHostGroupsResponse";
    /** Lists host groups for the specified folder. */
    hostGroups: HostGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListHostGroupsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListHostGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateHostGroupRequest {
    $type: "yandex.cloud.compute.v1.CreateHostGroupRequest";
    /**
     * ID of the folder to create a host group in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the group. */
    name: string;
    /** Description of the group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Availability zone where all dedicated hosts will be allocated. */
    zoneId: string;
    /** ID of host type. Resources provided by each host of the group. */
    typeId: string;
    /** Behaviour on maintenance events. */
    maintenancePolicy: MaintenancePolicy;
    /** Scale policy. Only fixed number of hosts are supported at this moment. */
    scalePolicy?: ScalePolicy;
}
export interface CreateHostGroupRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateHostGroupMetadata {
    $type: "yandex.cloud.compute.v1.CreateHostGroupMetadata";
    /** ID of the host group that is being created. */
    hostGroupId: string;
}
export interface UpdateHostGroupRequest {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest";
    /**
     * ID of the host group to update.
     * To get the host group ID, use an [HostGroupService.List] request.
     */
    hostGroupId: string;
    /** Field mask that specifies which fields of the HostGroup resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the group. */
    name: string;
    /** Description of the group. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * The existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /** Behaviour on maintenance events */
    maintenancePolicy: MaintenancePolicy;
    /** Scale policy. Only fixed number of hosts are supported at this moment. */
    scalePolicy?: ScalePolicy;
}
export interface UpdateHostGroupRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateHostGroupMetadata {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupMetadata";
    /** ID of the host group that is being updated. */
    hostGroupId: string;
}
export interface DeleteHostGroupRequest {
    $type: "yandex.cloud.compute.v1.DeleteHostGroupRequest";
    /**
     * ID of the host group to delete.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
}
export interface DeleteHostGroupMetadata {
    $type: "yandex.cloud.compute.v1.DeleteHostGroupMetadata";
    /** ID of the host group that is being deleted. */
    hostGroupId: string;
}
export interface ListHostGroupInstancesRequest {
    $type: "yandex.cloud.compute.v1.ListHostGroupInstancesRequest";
    /**
     * ID of the host group to list instances for.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListHostGroupInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListHostGroupInstancesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /** Filter support is not currently implemented. Any filters are ignored. */
    filter: string;
}
export interface ListHostGroupInstancesResponse {
    $type: "yandex.cloud.compute.v1.ListHostGroupInstancesResponse";
    /** Lists instances for the specified host group. */
    instances: Instance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListHostGroupInstancesRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListHostGroupInstancesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListHostGroupHostsRequest {
    $type: "yandex.cloud.compute.v1.ListHostGroupHostsRequest";
    /**
     * ID of the host group to list hosts for.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListHostGroupHostsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListHostGroupHostsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListHostGroupHostsResponse {
    $type: "yandex.cloud.compute.v1.ListHostGroupHostsResponse";
    /** Lists hosts for the specified host group. */
    hosts: Host[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListHostGroupHostsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListHostGroupHostsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListHostGroupOperationsRequest {
    $type: "yandex.cloud.compute.v1.ListHostGroupOperationsRequest";
    /**
     * ID of the host group to list operations for.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListHostGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListHostGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListHostGroupOperationsResponse {
    $type: "yandex.cloud.compute.v1.ListHostGroupOperationsResponse";
    /** List of operations for the specified host group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListHostGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListHostGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetHostGroupRequest: {
    $type: "yandex.cloud.compute.v1.GetHostGroupRequest";
    encode(message: GetHostGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetHostGroupRequest;
    fromJSON(object: any): GetHostGroupRequest;
    toJSON(message: GetHostGroupRequest): unknown;
    fromPartial<I extends {
        hostGroupId?: string | undefined;
    } & {
        hostGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "hostGroupId">, never>>(object: I): GetHostGroupRequest;
};
export declare const ListHostGroupsRequest: {
    $type: "yandex.cloud.compute.v1.ListHostGroupsRequest";
    encode(message: ListHostGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupsRequest;
    fromJSON(object: any): ListHostGroupsRequest;
    toJSON(message: ListHostGroupsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "orderBy">, never>>(object: I): ListHostGroupsRequest;
};
export declare const ListHostGroupsResponse: {
    $type: "yandex.cloud.compute.v1.ListHostGroupsResponse";
    encode(message: ListHostGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupsResponse;
    fromJSON(object: any): ListHostGroupsResponse;
    toJSON(message: ListHostGroupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        hostGroups?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/host_group").HostGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            typeId?: string | undefined;
            maintenancePolicy?: MaintenancePolicy | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        hostGroups?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/host_group").HostGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            typeId?: string | undefined;
            maintenancePolicy?: MaintenancePolicy | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/host_group").HostGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            typeId?: string | undefined;
            maintenancePolicy?: MaintenancePolicy | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/host_group").HostGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["hostGroups"][number]["labels"], string | number>, never>) | undefined;
            zoneId?: string | undefined;
            typeId?: string | undefined;
            maintenancePolicy?: MaintenancePolicy | undefined;
            scalePolicy?: ({
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
            } & {
                fixedScale?: ({
                    size?: number | undefined;
                } & {
                    size?: number | undefined;
                } & Record<Exclude<keyof I["hostGroups"][number]["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
            } & Record<Exclude<keyof I["hostGroups"][number]["scalePolicy"], "$type" | "fixedScale">, never>) | undefined;
        } & Record<Exclude<keyof I["hostGroups"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "zoneId" | "typeId" | "maintenancePolicy" | "scalePolicy">, never>)[] & Record<Exclude<keyof I["hostGroups"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/host_group").HostGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            typeId?: string | undefined;
            maintenancePolicy?: MaintenancePolicy | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "hostGroups">, never>>(object: I): ListHostGroupsResponse;
};
export declare const CreateHostGroupRequest: {
    $type: "yandex.cloud.compute.v1.CreateHostGroupRequest";
    encode(message: CreateHostGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHostGroupRequest;
    fromJSON(object: any): CreateHostGroupRequest;
    toJSON(message: CreateHostGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zoneId?: string | undefined;
        typeId?: string | undefined;
        maintenancePolicy?: MaintenancePolicy | undefined;
        scalePolicy?: {
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
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
        typeId?: string | undefined;
        maintenancePolicy?: MaintenancePolicy | undefined;
        scalePolicy?: ({
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
        } & {
            fixedScale?: ({
                size?: number | undefined;
            } & {
                size?: number | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
        } & Record<Exclude<keyof I["scalePolicy"], "$type" | "fixedScale">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "zoneId" | "typeId" | "maintenancePolicy" | "scalePolicy">, never>>(object: I): CreateHostGroupRequest;
};
export declare const CreateHostGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry";
    encode(message: CreateHostGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHostGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateHostGroupRequest_LabelsEntry;
    toJSON(message: CreateHostGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateHostGroupRequest_LabelsEntry;
};
export declare const CreateHostGroupMetadata: {
    $type: "yandex.cloud.compute.v1.CreateHostGroupMetadata";
    encode(message: CreateHostGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHostGroupMetadata;
    fromJSON(object: any): CreateHostGroupMetadata;
    toJSON(message: CreateHostGroupMetadata): unknown;
    fromPartial<I extends {
        hostGroupId?: string | undefined;
    } & {
        hostGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "hostGroupId">, never>>(object: I): CreateHostGroupMetadata;
};
export declare const UpdateHostGroupRequest: {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest";
    encode(message: UpdateHostGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHostGroupRequest;
    fromJSON(object: any): UpdateHostGroupRequest;
    toJSON(message: UpdateHostGroupRequest): unknown;
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
        hostGroupId?: string | undefined;
        maintenancePolicy?: MaintenancePolicy | undefined;
        scalePolicy?: {
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
        } | undefined;
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
        hostGroupId?: string | undefined;
        maintenancePolicy?: MaintenancePolicy | undefined;
        scalePolicy?: ({
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
        } & {
            fixedScale?: ({
                size?: number | undefined;
            } & {
                size?: number | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
        } & Record<Exclude<keyof I["scalePolicy"], "$type" | "fixedScale">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "hostGroupId" | "maintenancePolicy" | "scalePolicy">, never>>(object: I): UpdateHostGroupRequest;
};
export declare const UpdateHostGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry";
    encode(message: UpdateHostGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHostGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateHostGroupRequest_LabelsEntry;
    toJSON(message: UpdateHostGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateHostGroupRequest_LabelsEntry;
};
export declare const UpdateHostGroupMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupMetadata";
    encode(message: UpdateHostGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHostGroupMetadata;
    fromJSON(object: any): UpdateHostGroupMetadata;
    toJSON(message: UpdateHostGroupMetadata): unknown;
    fromPartial<I extends {
        hostGroupId?: string | undefined;
    } & {
        hostGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "hostGroupId">, never>>(object: I): UpdateHostGroupMetadata;
};
export declare const DeleteHostGroupRequest: {
    $type: "yandex.cloud.compute.v1.DeleteHostGroupRequest";
    encode(message: DeleteHostGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteHostGroupRequest;
    fromJSON(object: any): DeleteHostGroupRequest;
    toJSON(message: DeleteHostGroupRequest): unknown;
    fromPartial<I extends {
        hostGroupId?: string | undefined;
    } & {
        hostGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "hostGroupId">, never>>(object: I): DeleteHostGroupRequest;
};
export declare const DeleteHostGroupMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteHostGroupMetadata";
    encode(message: DeleteHostGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteHostGroupMetadata;
    fromJSON(object: any): DeleteHostGroupMetadata;
    toJSON(message: DeleteHostGroupMetadata): unknown;
    fromPartial<I extends {
        hostGroupId?: string | undefined;
    } & {
        hostGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "hostGroupId">, never>>(object: I): DeleteHostGroupMetadata;
};
export declare const ListHostGroupInstancesRequest: {
    $type: "yandex.cloud.compute.v1.ListHostGroupInstancesRequest";
    encode(message: ListHostGroupInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupInstancesRequest;
    fromJSON(object: any): ListHostGroupInstancesRequest;
    toJSON(message: ListHostGroupInstancesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        hostGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        hostGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "hostGroupId">, never>>(object: I): ListHostGroupInstancesRequest;
};
export declare const ListHostGroupInstancesResponse: {
    $type: "yandex.cloud.compute.v1.ListHostGroupInstancesResponse";
    encode(message: ListHostGroupInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupInstancesResponse;
    fromJSON(object: any): ListHostGroupInstancesResponse;
    toJSON(message: ListHostGroupInstancesResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "instances">, never>>(object: I): ListHostGroupInstancesResponse;
};
export declare const ListHostGroupHostsRequest: {
    $type: "yandex.cloud.compute.v1.ListHostGroupHostsRequest";
    encode(message: ListHostGroupHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupHostsRequest;
    fromJSON(object: any): ListHostGroupHostsRequest;
    toJSON(message: ListHostGroupHostsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        hostGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        hostGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "hostGroupId">, never>>(object: I): ListHostGroupHostsRequest;
};
export declare const ListHostGroupHostsResponse: {
    $type: "yandex.cloud.compute.v1.ListHostGroupHostsResponse";
    encode(message: ListHostGroupHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupHostsResponse;
    fromJSON(object: any): ListHostGroupHostsResponse;
    toJSON(message: ListHostGroupHostsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        hosts?: {
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/host_group").Host_Status | undefined;
            serverId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        hosts?: ({
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/host_group").Host_Status | undefined;
            serverId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/host_group").Host_Status | undefined;
            serverId?: string | undefined;
        } & {
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/host_group").Host_Status | undefined;
            serverId?: string | undefined;
        } & Record<Exclude<keyof I["hosts"][number], "$type" | "id" | "status" | "serverId">, never>)[] & Record<Exclude<keyof I["hosts"], "$type" | keyof {
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/host_group").Host_Status | undefined;
            serverId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "hosts">, never>>(object: I): ListHostGroupHostsResponse;
};
export declare const ListHostGroupOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListHostGroupOperationsRequest";
    encode(message: ListHostGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupOperationsRequest;
    fromJSON(object: any): ListHostGroupOperationsRequest;
    toJSON(message: ListHostGroupOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        hostGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        hostGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "hostGroupId">, never>>(object: I): ListHostGroupOperationsRequest;
};
export declare const ListHostGroupOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListHostGroupOperationsResponse";
    encode(message: ListHostGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupOperationsResponse;
    fromJSON(object: any): ListHostGroupOperationsResponse;
    toJSON(message: ListHostGroupOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListHostGroupOperationsResponse;
};
/** A set of methods for managing groups of dedicated hosts. */
export declare const HostGroupServiceService: {
    /** Returns the specified host group. */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetHostGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetHostGroupRequest;
        readonly responseSerialize: (value: HostGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => HostGroup;
    };
    /** Retrieves the list of host groups in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHostGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHostGroupsRequest;
        readonly responseSerialize: (value: ListHostGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHostGroupsResponse;
    };
    /** Creates a host group in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateHostGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateHostGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified host group. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateHostGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateHostGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified host group. */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteHostGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteHostGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified host group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHostGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHostGroupOperationsRequest;
        readonly responseSerialize: (value: ListHostGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHostGroupOperationsResponse;
    };
    /** Lists instances that belongs to the specified host group. */
    readonly listInstances: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/ListInstances";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHostGroupInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHostGroupInstancesRequest;
        readonly responseSerialize: (value: ListHostGroupInstancesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHostGroupInstancesResponse;
    };
    /** Lists hosts that belongs to the specified host group. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHostGroupHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHostGroupHostsRequest;
        readonly responseSerialize: (value: ListHostGroupHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHostGroupHostsResponse;
    };
};
export interface HostGroupServiceServer extends UntypedServiceImplementation {
    /** Returns the specified host group. */
    get: handleUnaryCall<GetHostGroupRequest, HostGroup>;
    /** Retrieves the list of host groups in the specified folder. */
    list: handleUnaryCall<ListHostGroupsRequest, ListHostGroupsResponse>;
    /** Creates a host group in the specified folder. */
    create: handleUnaryCall<CreateHostGroupRequest, Operation>;
    /** Updates the specified host group. */
    update: handleUnaryCall<UpdateHostGroupRequest, Operation>;
    /** Deletes the specified host group. */
    delete: handleUnaryCall<DeleteHostGroupRequest, Operation>;
    /** Lists operations for the specified host group. */
    listOperations: handleUnaryCall<ListHostGroupOperationsRequest, ListHostGroupOperationsResponse>;
    /** Lists instances that belongs to the specified host group. */
    listInstances: handleUnaryCall<ListHostGroupInstancesRequest, ListHostGroupInstancesResponse>;
    /** Lists hosts that belongs to the specified host group. */
    listHosts: handleUnaryCall<ListHostGroupHostsRequest, ListHostGroupHostsResponse>;
}
export interface HostGroupServiceClient extends Client {
    /** Returns the specified host group. */
    get(request: GetHostGroupRequest, callback: (error: ServiceError | null, response: HostGroup) => void): ClientUnaryCall;
    get(request: GetHostGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: HostGroup) => void): ClientUnaryCall;
    get(request: GetHostGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: HostGroup) => void): ClientUnaryCall;
    /** Retrieves the list of host groups in the specified folder. */
    list(request: ListHostGroupsRequest, callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void): ClientUnaryCall;
    list(request: ListHostGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void): ClientUnaryCall;
    list(request: ListHostGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void): ClientUnaryCall;
    /** Creates a host group in the specified folder. */
    create(request: CreateHostGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateHostGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateHostGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified host group. */
    update(request: UpdateHostGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateHostGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateHostGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified host group. */
    delete(request: DeleteHostGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteHostGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteHostGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified host group. */
    listOperations(request: ListHostGroupOperationsRequest, callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListHostGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListHostGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void): ClientUnaryCall;
    /** Lists instances that belongs to the specified host group. */
    listInstances(request: ListHostGroupInstancesRequest, callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListHostGroupInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListHostGroupInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void): ClientUnaryCall;
    /** Lists hosts that belongs to the specified host group. */
    listHosts(request: ListHostGroupHostsRequest, callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListHostGroupHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListHostGroupHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void): ClientUnaryCall;
}
export declare const HostGroupServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): HostGroupServiceClient;
    service: typeof HostGroupServiceService;
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
