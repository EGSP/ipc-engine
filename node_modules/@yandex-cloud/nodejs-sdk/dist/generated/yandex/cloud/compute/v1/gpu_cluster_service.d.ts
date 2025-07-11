/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { GpuInterconnectType, GpuCluster } from "../../../../yandex/cloud/compute/v1/gpu_cluster";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { Instance } from "../../../../yandex/cloud/compute/v1/instance";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetGpuClusterRequest {
    $type: "yandex.cloud.compute.v1.GetGpuClusterRequest";
    /**
     * ID of the GPU cluster to return.
     *
     * To get a GPU cluster ID, make a [GpuClusterService.List] request.
     */
    gpuClusterId: string;
}
export interface ListGpuClustersRequest {
    $type: "yandex.cloud.compute.v1.ListGpuClustersRequest";
    /**
     * ID of the folder to list GPU clusters in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListGpuClustersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListGpuClustersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters GPU clusters listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [GpuCluster.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-schedule`.
     */
    filter: string;
    /**
     * A sorting expression that sorts GPU clusters listed in the response.
     *
     * The expression must specify the field name from [GpuCluster] and `asc`ending or `desc`ending order,
     * e.g. `createdAt desc`.
     *
     * Default value: `id asc`.
     */
    orderBy: string;
}
export interface ListGpuClustersResponse {
    $type: "yandex.cloud.compute.v1.ListGpuClustersResponse";
    /** List of GPU clusters in the specified folder. */
    gpuClusters: GpuCluster[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListGpuClustersRequest.page_size], use `next_page_token` as the value
     * for the [ListGpuClustersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateGpuClusterRequest {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest";
    /**
     * ID of the folder to create a GPU cluster in.
     *
     * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the GPU cluster.
     *
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the GPU cluster. */
    description: string;
    /** GPU cluster labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the availability zone where the GPU cluster resides.
     * To get a list of available zones use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /** Type of interconnect to use for this GPU cluster. */
    interconnectType: GpuInterconnectType;
}
export interface CreateGpuClusterRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateGpuClusterMetadata {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterMetadata";
    /** ID of the GPU cluster that is being created. */
    gpuClusterId: string;
}
export interface UpdateGpuClusterRequest {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest";
    /**
     * ID of the GPU cluster to update.
     *
     * To get the GPU cluster ID, make a [GpuClusterService.List] request.
     */
    gpuClusterId: string;
    /** Field mask that specifies which attributes of the GPU cluster should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the GPU cluster.
     *
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the GPU cluster. */
    description: string;
    /**
     * New GPU cluster labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [GpuClusterService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateGpuClusterRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateGpuClusterMetadata {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterMetadata";
    /** ID of the GPU cluster that is being updated. */
    gpuClusterId: string;
}
export interface DeleteGpuClusterRequest {
    $type: "yandex.cloud.compute.v1.DeleteGpuClusterRequest";
    /**
     * ID of the GPU cluster to delete.
     *
     * To get a GPU cluster ID, make a [GpuClusterService.List] request.
     */
    gpuClusterId: string;
}
export interface DeleteGpuClusterMetadata {
    $type: "yandex.cloud.compute.v1.DeleteGpuClusterMetadata";
    /** ID of the GPU cluster that is being deleted. */
    gpuClusterId: string;
}
export interface ListGpuClusterOperationsRequest {
    $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsRequest";
    /**
     * ID of the GPU cluster to list operations for.
     *
     * To get a GPU cluster ID, make a [GpuClusterService.List] request.
     */
    gpuClusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListGpuClusterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListGpuClusterOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListGpuClusterOperationsResponse {
    $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsResponse";
    /** List of operations for the specified GPU cluster. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListGpuClusterOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListGpuClusterOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListGpuClusterInstancesRequest {
    $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesRequest";
    /**
     * ID of the GPU cluster to list instances in.
     *
     * To get a GPU cluster ID, make a [GpuClusterService.List] request.
     */
    gpuClusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListGpuClusterInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListGpuClusterInstancesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [Instance.name] field.
     */
    filter: string;
}
export interface ListGpuClusterInstancesResponse {
    $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesResponse";
    /** List of instances in the specified GPU cluster. */
    instances: Instance[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListGpuClusterInstancesRequest.page_size], use `next_page_token` as the value
     * for the [ListGpuClusterInstancesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetGpuClusterRequest: {
    $type: "yandex.cloud.compute.v1.GetGpuClusterRequest";
    encode(message: GetGpuClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGpuClusterRequest;
    fromJSON(object: any): GetGpuClusterRequest;
    toJSON(message: GetGpuClusterRequest): unknown;
    fromPartial<I extends {
        gpuClusterId?: string | undefined;
    } & {
        gpuClusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gpuClusterId">, never>>(object: I): GetGpuClusterRequest;
};
export declare const ListGpuClustersRequest: {
    $type: "yandex.cloud.compute.v1.ListGpuClustersRequest";
    encode(message: ListGpuClustersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGpuClustersRequest;
    fromJSON(object: any): ListGpuClustersRequest;
    toJSON(message: ListGpuClustersRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "orderBy">, never>>(object: I): ListGpuClustersRequest;
};
export declare const ListGpuClustersResponse: {
    $type: "yandex.cloud.compute.v1.ListGpuClustersResponse";
    encode(message: ListGpuClustersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGpuClustersResponse;
    fromJSON(object: any): ListGpuClustersResponse;
    toJSON(message: ListGpuClustersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        gpuClusters?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/gpu_cluster").GpuCluster_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            interconnectType?: GpuInterconnectType | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        gpuClusters?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/gpu_cluster").GpuCluster_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            interconnectType?: GpuInterconnectType | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/gpu_cluster").GpuCluster_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            interconnectType?: GpuInterconnectType | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/gpu_cluster").GpuCluster_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["gpuClusters"][number]["labels"], string | number>, never>) | undefined;
            zoneId?: string | undefined;
            interconnectType?: GpuInterconnectType | undefined;
        } & Record<Exclude<keyof I["gpuClusters"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "zoneId" | "interconnectType">, never>)[] & Record<Exclude<keyof I["gpuClusters"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/gpu_cluster").GpuCluster_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            interconnectType?: GpuInterconnectType | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "gpuClusters">, never>>(object: I): ListGpuClustersResponse;
};
export declare const CreateGpuClusterRequest: {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest";
    encode(message: CreateGpuClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGpuClusterRequest;
    fromJSON(object: any): CreateGpuClusterRequest;
    toJSON(message: CreateGpuClusterRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zoneId?: string | undefined;
        interconnectType?: GpuInterconnectType | undefined;
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
        interconnectType?: GpuInterconnectType | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "zoneId" | "interconnectType">, never>>(object: I): CreateGpuClusterRequest;
};
export declare const CreateGpuClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry";
    encode(message: CreateGpuClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGpuClusterRequest_LabelsEntry;
    fromJSON(object: any): CreateGpuClusterRequest_LabelsEntry;
    toJSON(message: CreateGpuClusterRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateGpuClusterRequest_LabelsEntry;
};
export declare const CreateGpuClusterMetadata: {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterMetadata";
    encode(message: CreateGpuClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGpuClusterMetadata;
    fromJSON(object: any): CreateGpuClusterMetadata;
    toJSON(message: CreateGpuClusterMetadata): unknown;
    fromPartial<I extends {
        gpuClusterId?: string | undefined;
    } & {
        gpuClusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gpuClusterId">, never>>(object: I): CreateGpuClusterMetadata;
};
export declare const UpdateGpuClusterRequest: {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest";
    encode(message: UpdateGpuClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGpuClusterRequest;
    fromJSON(object: any): UpdateGpuClusterRequest;
    toJSON(message: UpdateGpuClusterRequest): unknown;
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
        gpuClusterId?: string | undefined;
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
        gpuClusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "gpuClusterId">, never>>(object: I): UpdateGpuClusterRequest;
};
export declare const UpdateGpuClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry";
    encode(message: UpdateGpuClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGpuClusterRequest_LabelsEntry;
    fromJSON(object: any): UpdateGpuClusterRequest_LabelsEntry;
    toJSON(message: UpdateGpuClusterRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateGpuClusterRequest_LabelsEntry;
};
export declare const UpdateGpuClusterMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterMetadata";
    encode(message: UpdateGpuClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGpuClusterMetadata;
    fromJSON(object: any): UpdateGpuClusterMetadata;
    toJSON(message: UpdateGpuClusterMetadata): unknown;
    fromPartial<I extends {
        gpuClusterId?: string | undefined;
    } & {
        gpuClusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gpuClusterId">, never>>(object: I): UpdateGpuClusterMetadata;
};
export declare const DeleteGpuClusterRequest: {
    $type: "yandex.cloud.compute.v1.DeleteGpuClusterRequest";
    encode(message: DeleteGpuClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGpuClusterRequest;
    fromJSON(object: any): DeleteGpuClusterRequest;
    toJSON(message: DeleteGpuClusterRequest): unknown;
    fromPartial<I extends {
        gpuClusterId?: string | undefined;
    } & {
        gpuClusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gpuClusterId">, never>>(object: I): DeleteGpuClusterRequest;
};
export declare const DeleteGpuClusterMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteGpuClusterMetadata";
    encode(message: DeleteGpuClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGpuClusterMetadata;
    fromJSON(object: any): DeleteGpuClusterMetadata;
    toJSON(message: DeleteGpuClusterMetadata): unknown;
    fromPartial<I extends {
        gpuClusterId?: string | undefined;
    } & {
        gpuClusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gpuClusterId">, never>>(object: I): DeleteGpuClusterMetadata;
};
export declare const ListGpuClusterOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsRequest";
    encode(message: ListGpuClusterOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGpuClusterOperationsRequest;
    fromJSON(object: any): ListGpuClusterOperationsRequest;
    toJSON(message: ListGpuClusterOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        gpuClusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        gpuClusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "gpuClusterId">, never>>(object: I): ListGpuClusterOperationsRequest;
};
export declare const ListGpuClusterOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsResponse";
    encode(message: ListGpuClusterOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGpuClusterOperationsResponse;
    fromJSON(object: any): ListGpuClusterOperationsResponse;
    toJSON(message: ListGpuClusterOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListGpuClusterOperationsResponse;
};
export declare const ListGpuClusterInstancesRequest: {
    $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesRequest";
    encode(message: ListGpuClusterInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGpuClusterInstancesRequest;
    fromJSON(object: any): ListGpuClusterInstancesRequest;
    toJSON(message: ListGpuClusterInstancesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        gpuClusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        gpuClusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "gpuClusterId">, never>>(object: I): ListGpuClusterInstancesRequest;
};
export declare const ListGpuClusterInstancesResponse: {
    $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesResponse";
    encode(message: ListGpuClusterInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGpuClusterInstancesResponse;
    fromJSON(object: any): ListGpuClusterInstancesResponse;
    toJSON(message: ListGpuClusterInstancesResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "instances">, never>>(object: I): ListGpuClusterInstancesResponse;
};
/** A set of methods for managing GPU clusters. */
export declare const GpuClusterServiceService: {
    /**
     * Returns the specified GPU cluster.
     *
     * To get the list of available GPU clusters, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.GpuClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGpuClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGpuClusterRequest;
        readonly responseSerialize: (value: GpuCluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GpuCluster;
    };
    /** Retrieves the list of GPU clusters in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.GpuClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGpuClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGpuClustersRequest;
        readonly responseSerialize: (value: ListGpuClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGpuClustersResponse;
    };
    /** Creates a GPU cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.GpuClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateGpuClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateGpuClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified GPU cluster.
     *
     * Currently only name, description and labels can be updated.
     */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.GpuClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateGpuClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateGpuClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified GPU cluster.
     *
     * GPU cluster can be deleted only if it doesn't have any instances associated with it.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.GpuClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteGpuClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteGpuClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified GPU cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.GpuClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGpuClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGpuClusterOperationsRequest;
        readonly responseSerialize: (value: ListGpuClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGpuClusterOperationsResponse;
    };
    /** List instances created in this GPU cluster. */
    readonly listInstances: {
        readonly path: "/yandex.cloud.compute.v1.GpuClusterService/ListInstances";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGpuClusterInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGpuClusterInstancesRequest;
        readonly responseSerialize: (value: ListGpuClusterInstancesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGpuClusterInstancesResponse;
    };
};
export interface GpuClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified GPU cluster.
     *
     * To get the list of available GPU clusters, make a [List] request.
     */
    get: handleUnaryCall<GetGpuClusterRequest, GpuCluster>;
    /** Retrieves the list of GPU clusters in the specified folder. */
    list: handleUnaryCall<ListGpuClustersRequest, ListGpuClustersResponse>;
    /** Creates a GPU cluster in the specified folder. */
    create: handleUnaryCall<CreateGpuClusterRequest, Operation>;
    /**
     * Updates the specified GPU cluster.
     *
     * Currently only name, description and labels can be updated.
     */
    update: handleUnaryCall<UpdateGpuClusterRequest, Operation>;
    /**
     * Deletes the specified GPU cluster.
     *
     * GPU cluster can be deleted only if it doesn't have any instances associated with it.
     */
    delete: handleUnaryCall<DeleteGpuClusterRequest, Operation>;
    /** Lists operations for the specified GPU cluster. */
    listOperations: handleUnaryCall<ListGpuClusterOperationsRequest, ListGpuClusterOperationsResponse>;
    /** List instances created in this GPU cluster. */
    listInstances: handleUnaryCall<ListGpuClusterInstancesRequest, ListGpuClusterInstancesResponse>;
}
export interface GpuClusterServiceClient extends Client {
    /**
     * Returns the specified GPU cluster.
     *
     * To get the list of available GPU clusters, make a [List] request.
     */
    get(request: GetGpuClusterRequest, callback: (error: ServiceError | null, response: GpuCluster) => void): ClientUnaryCall;
    get(request: GetGpuClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GpuCluster) => void): ClientUnaryCall;
    get(request: GetGpuClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GpuCluster) => void): ClientUnaryCall;
    /** Retrieves the list of GPU clusters in the specified folder. */
    list(request: ListGpuClustersRequest, callback: (error: ServiceError | null, response: ListGpuClustersResponse) => void): ClientUnaryCall;
    list(request: ListGpuClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGpuClustersResponse) => void): ClientUnaryCall;
    list(request: ListGpuClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGpuClustersResponse) => void): ClientUnaryCall;
    /** Creates a GPU cluster in the specified folder. */
    create(request: CreateGpuClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateGpuClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateGpuClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified GPU cluster.
     *
     * Currently only name, description and labels can be updated.
     */
    update(request: UpdateGpuClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateGpuClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateGpuClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified GPU cluster.
     *
     * GPU cluster can be deleted only if it doesn't have any instances associated with it.
     */
    delete(request: DeleteGpuClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteGpuClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteGpuClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified GPU cluster. */
    listOperations(request: ListGpuClusterOperationsRequest, callback: (error: ServiceError | null, response: ListGpuClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListGpuClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGpuClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListGpuClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGpuClusterOperationsResponse) => void): ClientUnaryCall;
    /** List instances created in this GPU cluster. */
    listInstances(request: ListGpuClusterInstancesRequest, callback: (error: ServiceError | null, response: ListGpuClusterInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListGpuClusterInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGpuClusterInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListGpuClusterInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGpuClusterInstancesResponse) => void): ClientUnaryCall;
}
export declare const GpuClusterServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): GpuClusterServiceClient;
    service: typeof GpuClusterServiceService;
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
