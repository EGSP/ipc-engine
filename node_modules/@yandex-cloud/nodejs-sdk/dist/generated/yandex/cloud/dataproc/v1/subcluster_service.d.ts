/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Role, AutoscalingConfig, Subcluster } from "../../../../yandex/cloud/dataproc/v1/subcluster";
import { Resources } from "../../../../yandex/cloud/dataproc/v1/common";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
export interface GetSubclusterRequest {
    $type: "yandex.cloud.dataproc.v1.GetSubclusterRequest";
    /** ID of the Data Proc cluster that the subcluster belongs to. */
    clusterId: string;
    /**
     * ID of the subcluster to return.
     *
     * To get a subcluster ID make a [SubclusterService.List] request.
     */
    subclusterId: string;
}
export interface ListSubclustersRequest {
    $type: "yandex.cloud.dataproc.v1.ListSubclustersRequest";
    /** ID of the Data Proc cluster to list subclusters in. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListSubclustersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListSubclustersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters subclusters listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Subcluster.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=dataproc123_subcluster456`.
     */
    filter: string;
}
export interface ListSubclustersResponse {
    $type: "yandex.cloud.dataproc.v1.ListSubclustersResponse";
    /** List of subclusters in the specified cluster. */
    subclusters: Subcluster[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListSubclustersRequest.page_size], use `next_page_token` as the value
     * for the [ListSubclustersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateSubclusterRequest {
    $type: "yandex.cloud.dataproc.v1.CreateSubclusterRequest";
    /**
     * ID of the Data Proc cluster to create a subcluster in.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the subcluster. The name must be unique within the cluster. The name can't be
     * changed when the subcluster is created.
     */
    name: string;
    /** Role that is fulfilled by hosts of the subcluster. */
    role: Role;
    /** Resources allocated for each host in the subcluster. */
    resources?: Resources;
    /** ID of the VPC subnet used for hosts in the subcluster. */
    subnetId: string;
    /** Number of hosts in the subcluster. */
    hostsCount: number;
    /** Configuration for instance group based subclusters */
    autoscalingConfig?: AutoscalingConfig;
}
export interface CreateSubclusterMetadata {
    $type: "yandex.cloud.dataproc.v1.CreateSubclusterMetadata";
    /** ID of the cluster that the subcluster is being added to. */
    clusterId: string;
    /** ID of the subcluster that is being created. */
    subclusterId: string;
}
export interface UpdateSubclusterRequest {
    $type: "yandex.cloud.dataproc.v1.UpdateSubclusterRequest";
    /**
     * ID of the cluster to update a subcluster in.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * ID of the subcluster to update.
     *
     * To get a subcluster ID, make a [SubclusterService.List] request.
     */
    subclusterId: string;
    /** Field mask that specifies which attributes of the subcluster should be updated. */
    updateMask?: FieldMask;
    /** New configuration of resources that should be allocated for each host in the subcluster. */
    resources?: Resources;
    /** New name for the subcluster. The name must be unique within the cluster. */
    name: string;
    /** New number of hosts in the subcluster. */
    hostsCount: number;
    /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
    decommissionTimeout: number;
    /** Configuration for instance group based subclusters */
    autoscalingConfig?: AutoscalingConfig;
}
export interface UpdateSubclusterMetadata {
    $type: "yandex.cloud.dataproc.v1.UpdateSubclusterMetadata";
    /** ID of the cluster whose subcluster is being updated. */
    clusterId: string;
    /** ID of the subcluster that is being updated. */
    subclusterId: string;
}
export interface DeleteSubclusterRequest {
    $type: "yandex.cloud.dataproc.v1.DeleteSubclusterRequest";
    /**
     * ID of the cluster to remove a subcluster from.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** ID of the subcluster to delete. */
    subclusterId: string;
    /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
    decommissionTimeout: number;
}
export interface DeleteSubclusterMetadata {
    $type: "yandex.cloud.dataproc.v1.DeleteSubclusterMetadata";
    /** ID of the cluster whose subcluster is being deleted. */
    clusterId: string;
    /** ID of the subcluster that is being deleted. */
    subclusterId: string;
}
export declare const GetSubclusterRequest: {
    $type: "yandex.cloud.dataproc.v1.GetSubclusterRequest";
    encode(message: GetSubclusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSubclusterRequest;
    fromJSON(object: any): GetSubclusterRequest;
    toJSON(message: GetSubclusterRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        subclusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        subclusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "subclusterId">, never>>(object: I): GetSubclusterRequest;
};
export declare const ListSubclustersRequest: {
    $type: "yandex.cloud.dataproc.v1.ListSubclustersRequest";
    encode(message: ListSubclustersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSubclustersRequest;
    fromJSON(object: any): ListSubclustersRequest;
    toJSON(message: ListSubclustersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "clusterId">, never>>(object: I): ListSubclustersRequest;
};
export declare const ListSubclustersResponse: {
    $type: "yandex.cloud.dataproc.v1.ListSubclustersResponse";
    encode(message: ListSubclustersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSubclustersResponse;
    fromJSON(object: any): ListSubclustersResponse;
    toJSON(message: ListSubclustersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        subclusters?: {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            role?: Role | undefined;
            subnetId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            instanceGroupId?: string | undefined;
            clusterId?: string | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            autoscalingConfig?: {
                preemptible?: boolean | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                maxHostsCount?: number | undefined;
                cpuUtilizationTarget?: number | undefined;
                decommissionTimeout?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        subclusters?: ({
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            role?: Role | undefined;
            subnetId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            instanceGroupId?: string | undefined;
            clusterId?: string | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            autoscalingConfig?: {
                preemptible?: boolean | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                maxHostsCount?: number | undefined;
                cpuUtilizationTarget?: number | undefined;
                decommissionTimeout?: number | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            role?: Role | undefined;
            subnetId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            instanceGroupId?: string | undefined;
            clusterId?: string | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            autoscalingConfig?: {
                preemptible?: boolean | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                maxHostsCount?: number | undefined;
                cpuUtilizationTarget?: number | undefined;
                decommissionTimeout?: number | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            role?: Role | undefined;
            subnetId?: string | undefined;
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["subclusters"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            instanceGroupId?: string | undefined;
            clusterId?: string | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            autoscalingConfig?: ({
                preemptible?: boolean | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                maxHostsCount?: number | undefined;
                cpuUtilizationTarget?: number | undefined;
                decommissionTimeout?: number | undefined;
            } & {
                preemptible?: boolean | undefined;
                measurementDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["subclusters"][number]["autoscalingConfig"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                warmupDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["subclusters"][number]["autoscalingConfig"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                stabilizationDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["subclusters"][number]["autoscalingConfig"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                maxHostsCount?: number | undefined;
                cpuUtilizationTarget?: number | undefined;
                decommissionTimeout?: number | undefined;
            } & Record<Exclude<keyof I["subclusters"][number]["autoscalingConfig"], "$type" | "preemptible" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "maxHostsCount" | "cpuUtilizationTarget" | "decommissionTimeout">, never>) | undefined;
        } & Record<Exclude<keyof I["subclusters"][number], "$type" | "id" | "name" | "createdAt" | "role" | "subnetId" | "resources" | "instanceGroupId" | "clusterId" | "hostsCount" | "assignPublicIp" | "autoscalingConfig">, never>)[] & Record<Exclude<keyof I["subclusters"], "$type" | keyof {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            role?: Role | undefined;
            subnetId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            instanceGroupId?: string | undefined;
            clusterId?: string | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            autoscalingConfig?: {
                preemptible?: boolean | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                maxHostsCount?: number | undefined;
                cpuUtilizationTarget?: number | undefined;
                decommissionTimeout?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "subclusters">, never>>(object: I): ListSubclustersResponse;
};
export declare const CreateSubclusterRequest: {
    $type: "yandex.cloud.dataproc.v1.CreateSubclusterRequest";
    encode(message: CreateSubclusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSubclusterRequest;
    fromJSON(object: any): CreateSubclusterRequest;
    toJSON(message: CreateSubclusterRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        role?: Role | undefined;
        subnetId?: string | undefined;
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        clusterId?: string | undefined;
        hostsCount?: number | undefined;
        autoscalingConfig?: {
            preemptible?: boolean | undefined;
            measurementDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            warmupDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            stabilizationDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxHostsCount?: number | undefined;
            cpuUtilizationTarget?: number | undefined;
            decommissionTimeout?: number | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        role?: Role | undefined;
        subnetId?: string | undefined;
        resources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        clusterId?: string | undefined;
        hostsCount?: number | undefined;
        autoscalingConfig?: ({
            preemptible?: boolean | undefined;
            measurementDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            warmupDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            stabilizationDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxHostsCount?: number | undefined;
            cpuUtilizationTarget?: number | undefined;
            decommissionTimeout?: number | undefined;
        } & {
            preemptible?: boolean | undefined;
            measurementDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoscalingConfig"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            warmupDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoscalingConfig"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            stabilizationDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoscalingConfig"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            maxHostsCount?: number | undefined;
            cpuUtilizationTarget?: number | undefined;
            decommissionTimeout?: number | undefined;
        } & Record<Exclude<keyof I["autoscalingConfig"], "$type" | "preemptible" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "maxHostsCount" | "cpuUtilizationTarget" | "decommissionTimeout">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "role" | "subnetId" | "resources" | "clusterId" | "hostsCount" | "autoscalingConfig">, never>>(object: I): CreateSubclusterRequest;
};
export declare const CreateSubclusterMetadata: {
    $type: "yandex.cloud.dataproc.v1.CreateSubclusterMetadata";
    encode(message: CreateSubclusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSubclusterMetadata;
    fromJSON(object: any): CreateSubclusterMetadata;
    toJSON(message: CreateSubclusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        subclusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        subclusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "subclusterId">, never>>(object: I): CreateSubclusterMetadata;
};
export declare const UpdateSubclusterRequest: {
    $type: "yandex.cloud.dataproc.v1.UpdateSubclusterRequest";
    encode(message: UpdateSubclusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSubclusterRequest;
    fromJSON(object: any): UpdateSubclusterRequest;
    toJSON(message: UpdateSubclusterRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        decommissionTimeout?: number | undefined;
        clusterId?: string | undefined;
        hostsCount?: number | undefined;
        autoscalingConfig?: {
            preemptible?: boolean | undefined;
            measurementDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            warmupDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            stabilizationDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxHostsCount?: number | undefined;
            cpuUtilizationTarget?: number | undefined;
            decommissionTimeout?: number | undefined;
        } | undefined;
        subclusterId?: string | undefined;
    } & {
        name?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        resources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        decommissionTimeout?: number | undefined;
        clusterId?: string | undefined;
        hostsCount?: number | undefined;
        autoscalingConfig?: ({
            preemptible?: boolean | undefined;
            measurementDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            warmupDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            stabilizationDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxHostsCount?: number | undefined;
            cpuUtilizationTarget?: number | undefined;
            decommissionTimeout?: number | undefined;
        } & {
            preemptible?: boolean | undefined;
            measurementDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoscalingConfig"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            warmupDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoscalingConfig"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            stabilizationDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoscalingConfig"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            maxHostsCount?: number | undefined;
            cpuUtilizationTarget?: number | undefined;
            decommissionTimeout?: number | undefined;
        } & Record<Exclude<keyof I["autoscalingConfig"], "$type" | "preemptible" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "maxHostsCount" | "cpuUtilizationTarget" | "decommissionTimeout">, never>) | undefined;
        subclusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "updateMask" | "resources" | "decommissionTimeout" | "clusterId" | "hostsCount" | "autoscalingConfig" | "subclusterId">, never>>(object: I): UpdateSubclusterRequest;
};
export declare const UpdateSubclusterMetadata: {
    $type: "yandex.cloud.dataproc.v1.UpdateSubclusterMetadata";
    encode(message: UpdateSubclusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSubclusterMetadata;
    fromJSON(object: any): UpdateSubclusterMetadata;
    toJSON(message: UpdateSubclusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        subclusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        subclusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "subclusterId">, never>>(object: I): UpdateSubclusterMetadata;
};
export declare const DeleteSubclusterRequest: {
    $type: "yandex.cloud.dataproc.v1.DeleteSubclusterRequest";
    encode(message: DeleteSubclusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSubclusterRequest;
    fromJSON(object: any): DeleteSubclusterRequest;
    toJSON(message: DeleteSubclusterRequest): unknown;
    fromPartial<I extends {
        decommissionTimeout?: number | undefined;
        clusterId?: string | undefined;
        subclusterId?: string | undefined;
    } & {
        decommissionTimeout?: number | undefined;
        clusterId?: string | undefined;
        subclusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "decommissionTimeout" | "clusterId" | "subclusterId">, never>>(object: I): DeleteSubclusterRequest;
};
export declare const DeleteSubclusterMetadata: {
    $type: "yandex.cloud.dataproc.v1.DeleteSubclusterMetadata";
    encode(message: DeleteSubclusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSubclusterMetadata;
    fromJSON(object: any): DeleteSubclusterMetadata;
    toJSON(message: DeleteSubclusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        subclusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        subclusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "subclusterId">, never>>(object: I): DeleteSubclusterMetadata;
};
/** A set of methods for managing Data Proc subclusters. */
export declare const SubclusterServiceService: {
    /**
     * Returns the specified subcluster.
     *
     * To get the list of all available subclusters, make a [SubclusterService.List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.dataproc.v1.SubclusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSubclusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSubclusterRequest;
        readonly responseSerialize: (value: Subcluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Subcluster;
    };
    /** Retrieves a list of subclusters in the specified cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.dataproc.v1.SubclusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSubclustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSubclustersRequest;
        readonly responseSerialize: (value: ListSubclustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSubclustersResponse;
    };
    /** Creates a subcluster in the specified cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.dataproc.v1.SubclusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSubclusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSubclusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified subcluster. */
    readonly update: {
        readonly path: "/yandex.cloud.dataproc.v1.SubclusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSubclusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSubclusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified subcluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.dataproc.v1.SubclusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSubclusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSubclusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface SubclusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified subcluster.
     *
     * To get the list of all available subclusters, make a [SubclusterService.List] request.
     */
    get: handleUnaryCall<GetSubclusterRequest, Subcluster>;
    /** Retrieves a list of subclusters in the specified cluster. */
    list: handleUnaryCall<ListSubclustersRequest, ListSubclustersResponse>;
    /** Creates a subcluster in the specified cluster. */
    create: handleUnaryCall<CreateSubclusterRequest, Operation>;
    /** Updates the specified subcluster. */
    update: handleUnaryCall<UpdateSubclusterRequest, Operation>;
    /** Deletes the specified subcluster. */
    delete: handleUnaryCall<DeleteSubclusterRequest, Operation>;
}
export interface SubclusterServiceClient extends Client {
    /**
     * Returns the specified subcluster.
     *
     * To get the list of all available subclusters, make a [SubclusterService.List] request.
     */
    get(request: GetSubclusterRequest, callback: (error: ServiceError | null, response: Subcluster) => void): ClientUnaryCall;
    get(request: GetSubclusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Subcluster) => void): ClientUnaryCall;
    get(request: GetSubclusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Subcluster) => void): ClientUnaryCall;
    /** Retrieves a list of subclusters in the specified cluster. */
    list(request: ListSubclustersRequest, callback: (error: ServiceError | null, response: ListSubclustersResponse) => void): ClientUnaryCall;
    list(request: ListSubclustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSubclustersResponse) => void): ClientUnaryCall;
    list(request: ListSubclustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSubclustersResponse) => void): ClientUnaryCall;
    /** Creates a subcluster in the specified cluster. */
    create(request: CreateSubclusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSubclusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSubclusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified subcluster. */
    update(request: UpdateSubclusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSubclusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSubclusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified subcluster. */
    delete(request: DeleteSubclusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSubclusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSubclusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const SubclusterServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): SubclusterServiceClient;
    service: typeof SubclusterServiceService;
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
