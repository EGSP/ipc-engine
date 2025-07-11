/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Role, AutoscalingConfig, Host } from "../../../../yandex/cloud/dataproc/v1/subcluster";
import { Resources } from "../../../../yandex/cloud/dataproc/v1/common";
import { HadoopConfig, Cluster } from "../../../../yandex/cloud/dataproc/v1/cluster";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
export interface GetClusterRequest {
    $type: "yandex.cloud.dataproc.v1.GetClusterRequest";
    /**
     * ID of the Data Proc cluster.
     *
     * To get a cluster ID make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: "yandex.cloud.dataproc.v1.ListClustersRequest";
    /**
     * ID of the folder to list clusters in.
     *
     * To get the folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListClustersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters clusters listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Cluster.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-cluster`.
     */
    filter: string;
}
export interface ListClustersResponse {
    $type: "yandex.cloud.dataproc.v1.ListClustersResponse";
    /** List of clusters in the specified folder. */
    clusters: Cluster[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListClustersRequest.page_size], use `next_page_token` as the value
     * for the [ListClustersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateSubclusterConfigSpec {
    $type: "yandex.cloud.dataproc.v1.CreateSubclusterConfigSpec";
    /** Name of the subcluster. */
    name: string;
    /** Role of the subcluster in the Data Proc cluster. */
    role: Role;
    /** Resource configuration for hosts in the subcluster. */
    resources?: Resources;
    /** ID of the VPC subnet used for hosts in the subcluster. */
    subnetId: string;
    /** Number of hosts in the subcluster. */
    hostsCount: number;
    /** Assign public ip addresses for all hosts in subcluter. */
    assignPublicIp: boolean;
    /** Configuration for instance group based subclusters */
    autoscalingConfig?: AutoscalingConfig;
}
export interface UpdateSubclusterConfigSpec {
    $type: "yandex.cloud.dataproc.v1.UpdateSubclusterConfigSpec";
    /**
     * ID of the subcluster to update.
     *
     * To get the subcluster ID make a [SubclusterService.List] request.
     */
    id: string;
    /** Name of the subcluster. */
    name: string;
    /** Resource configuration for each host in the subcluster. */
    resources?: Resources;
    /** Number of hosts in the subcluster. */
    hostsCount: number;
    /** Configuration for instance group based subclusters */
    autoscalingConfig?: AutoscalingConfig;
}
export interface CreateClusterConfigSpec {
    $type: "yandex.cloud.dataproc.v1.CreateClusterConfigSpec";
    /**
     * Version of the image for cluster provisioning.
     *
     * All available versions are listed in the [documentation](/docs/data-proc/concepts/environment).
     */
    versionId: string;
    /** Data Proc specific options. */
    hadoop?: HadoopConfig;
    /** Specification for creating subclusters. */
    subclustersSpec: CreateSubclusterConfigSpec[];
}
export interface UpdateClusterConfigSpec {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterConfigSpec";
    /** New configuration for subclusters in a cluster. */
    subclustersSpec: UpdateSubclusterConfigSpec[];
    /** Hadoop specific options */
    hadoop?: HadoopConfig;
}
export interface CreateClusterRequest {
    $type: "yandex.cloud.dataproc.v1.CreateClusterRequest";
    /**
     * ID of the folder to create a cluster in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the cluster. The name must be unique within the folder.
     * The name can't be changed after the Data Proc cluster is created.
     */
    name: string;
    /** Description of the cluster. */
    description: string;
    /** Cluster labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Configuration and resources for hosts that should be created with the cluster. */
    configSpec?: CreateClusterConfigSpec;
    /**
     * ID of the availability zone where the cluster should be placed.
     *
     * To get the list of available zones make a [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /** ID of the service account to be used by the Data Proc manager agent. */
    serviceAccountId: string;
    /** Name of the Object Storage bucket to use for Data Proc jobs. */
    bucket: string;
    /** Enable UI Proxy feature. */
    uiProxy: boolean;
    /** User security groups. */
    securityGroupIds: string[];
    /** Host groups to place VMs of cluster on. */
    hostGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** ID of the cloud logging log group to write logs. If not set, logs will not be sent to logging service */
    logGroupId: string;
}
export interface CreateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    $type: "yandex.cloud.dataproc.v1.CreateClusterMetadata";
    /** ID of the cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest";
    /**
     * ID of the cluster to update.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which attributes of the cluster should be updated. */
    updateMask?: FieldMask;
    /** New description for the cluster. */
    description: string;
    /** A new set of cluster labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Configuration and resources for hosts that should be created with the Data Proc cluster. */
    configSpec?: UpdateClusterConfigSpec;
    /** New name for the Data Proc cluster. The name must be unique within the folder. */
    name: string;
    /** ID of the new service account to be used by the Data Proc manager agent. */
    serviceAccountId: string;
    /** Name of the new Object Storage bucket to use for Data Proc jobs. */
    bucket: string;
    /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
    decommissionTimeout: number;
    /** Enable UI Proxy feature. */
    uiProxy: boolean;
    /** User security groups. */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** ID of the cloud logging log group to write logs. If not set, logs will not be sent to logging service */
    logGroupId: string;
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterMetadata";
    /** ID of the cluster that is being updated. */
    clusterId: string;
}
export interface DeleteClusterRequest {
    $type: "yandex.cloud.dataproc.v1.DeleteClusterRequest";
    /**
     * ID of the cluster to delete.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
    decommissionTimeout: number;
}
export interface DeleteClusterMetadata {
    $type: "yandex.cloud.dataproc.v1.DeleteClusterMetadata";
    /** ID of the Data Proc cluster that is being deleted. */
    clusterId: string;
}
export interface StartClusterRequest {
    $type: "yandex.cloud.dataproc.v1.StartClusterRequest";
    /**
     * ID of the cluster to start.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: "yandex.cloud.dataproc.v1.StartClusterMetadata";
    /** ID of the Data Proc cluster that is being started. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: "yandex.cloud.dataproc.v1.StopClusterRequest";
    /**
     * ID of the cluster to stop.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
    decommissionTimeout: number;
}
export interface StopClusterMetadata {
    $type: "yandex.cloud.dataproc.v1.StopClusterMetadata";
    /** ID of the Data Proc cluster that is being stopped. */
    clusterId: string;
}
export interface ListClusterOperationsRequest {
    $type: "yandex.cloud.dataproc.v1.ListClusterOperationsRequest";
    /** ID of the cluster to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterOperationsResponse {
    $type: "yandex.cloud.dataproc.v1.ListClusterOperationsResponse";
    /** List of operations for the specified cluster. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListClusterOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListClusterOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterHostsRequest {
    $type: "yandex.cloud.dataproc.v1.ListClusterHostsRequest";
    /**
     * ID of the cluster to list hosts for.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterHostsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters hosts listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Cluster.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-host`
     */
    filter: string;
}
export interface ListClusterHostsResponse {
    $type: "yandex.cloud.dataproc.v1.ListClusterHostsResponse";
    /** Requested list of hosts. */
    hosts: Host[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListClusterHostsRequest.page_size], use `next_page_token` as the value
     * for the [ListClusterHostsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListUILinksRequest {
    $type: "yandex.cloud.dataproc.v1.ListUILinksRequest";
    /** Required. ID of the Hadoop cluster. */
    clusterId: string;
}
export interface UILink {
    $type: "yandex.cloud.dataproc.v1.UILink";
    name: string;
    url: string;
}
export interface ListUILinksResponse {
    $type: "yandex.cloud.dataproc.v1.ListUILinksResponse";
    /** Requested list of ui links. */
    links: UILink[];
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.dataproc.v1.GetClusterRequest";
    encode(message: GetClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetClusterRequest;
    fromJSON(object: any): GetClusterRequest;
    toJSON(message: GetClusterRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): GetClusterRequest;
};
export declare const ListClustersRequest: {
    $type: "yandex.cloud.dataproc.v1.ListClustersRequest";
    encode(message: ListClustersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClustersRequest;
    fromJSON(object: any): ListClustersRequest;
    toJSON(message: ListClustersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListClustersRequest;
};
export declare const ListClustersResponse: {
    $type: "yandex.cloud.dataproc.v1.ListClustersResponse";
    encode(message: ListClustersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClustersResponse;
    fromJSON(object: any): ListClustersResponse;
    toJSON(message: ListClustersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        clusters?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/dataproc/v1/cluster").Cluster_Status | undefined;
            config?: {
                versionId?: string | undefined;
                hadoop?: {
                    properties?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                    sshPublicKeys?: string[] | undefined;
                    initializationActions?: {
                        uri?: string | undefined;
                        timeout?: number | undefined;
                        args?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            bucket?: string | undefined;
            logGroupId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            zoneId?: string | undefined;
            deletionProtection?: boolean | undefined;
            serviceAccountId?: string | undefined;
            health?: import("../../../../yandex/cloud/dataproc/v1/common").Health | undefined;
            uiProxy?: boolean | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        clusters?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/dataproc/v1/cluster").Cluster_Status | undefined;
            config?: {
                versionId?: string | undefined;
                hadoop?: {
                    properties?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                    sshPublicKeys?: string[] | undefined;
                    initializationActions?: {
                        uri?: string | undefined;
                        timeout?: number | undefined;
                        args?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            bucket?: string | undefined;
            logGroupId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            zoneId?: string | undefined;
            deletionProtection?: boolean | undefined;
            serviceAccountId?: string | undefined;
            health?: import("../../../../yandex/cloud/dataproc/v1/common").Health | undefined;
            uiProxy?: boolean | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/dataproc/v1/cluster").Cluster_Status | undefined;
            config?: {
                versionId?: string | undefined;
                hadoop?: {
                    properties?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                    sshPublicKeys?: string[] | undefined;
                    initializationActions?: {
                        uri?: string | undefined;
                        timeout?: number | undefined;
                        args?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            bucket?: string | undefined;
            logGroupId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            zoneId?: string | undefined;
            deletionProtection?: boolean | undefined;
            serviceAccountId?: string | undefined;
            health?: import("../../../../yandex/cloud/dataproc/v1/common").Health | undefined;
            uiProxy?: boolean | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/dataproc/v1/cluster").Cluster_Status | undefined;
            config?: ({
                versionId?: string | undefined;
                hadoop?: {
                    properties?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                    sshPublicKeys?: string[] | undefined;
                    initializationActions?: {
                        uri?: string | undefined;
                        timeout?: number | undefined;
                        args?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                versionId?: string | undefined;
                hadoop?: ({
                    properties?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                    sshPublicKeys?: string[] | undefined;
                    initializationActions?: {
                        uri?: string | undefined;
                        timeout?: number | undefined;
                        args?: string[] | undefined;
                    }[] | undefined;
                } & {
                    properties?: ({
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["hadoop"]["properties"], string | number>, never>) | undefined;
                    services?: (import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] & import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] & Record<Exclude<keyof I["clusters"][number]["config"]["hadoop"]["services"], "$type" | keyof import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[]>, never>) | undefined;
                    sshPublicKeys?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["config"]["hadoop"]["sshPublicKeys"], "$type" | keyof string[]>, never>) | undefined;
                    initializationActions?: ({
                        uri?: string | undefined;
                        timeout?: number | undefined;
                        args?: string[] | undefined;
                    }[] & ({
                        uri?: string | undefined;
                        timeout?: number | undefined;
                        args?: string[] | undefined;
                    } & {
                        uri?: string | undefined;
                        timeout?: number | undefined;
                        args?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["config"]["hadoop"]["initializationActions"][number]["args"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["hadoop"]["initializationActions"][number], "$type" | "uri" | "timeout" | "args">, never>)[] & Record<Exclude<keyof I["clusters"][number]["config"]["hadoop"]["initializationActions"], "$type" | keyof {
                        uri?: string | undefined;
                        timeout?: number | undefined;
                        args?: string[] | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["hadoop"], "$type" | "properties" | "services" | "sshPublicKeys" | "initializationActions">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["config"], "$type" | "versionId" | "hadoop">, never>) | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["labels"], string | number>, never>) | undefined;
            bucket?: string | undefined;
            logGroupId?: string | undefined;
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            zoneId?: string | undefined;
            deletionProtection?: boolean | undefined;
            serviceAccountId?: string | undefined;
            health?: import("../../../../yandex/cloud/dataproc/v1/common").Health | undefined;
            uiProxy?: boolean | undefined;
            hostGroupIds?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["hostGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            monitoring?: ({
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] & ({
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            } & {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["monitoring"][number], "$type" | "link" | "description" | "name">, never>)[] & Record<Exclude<keyof I["clusters"][number]["monitoring"], "$type" | keyof {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["clusters"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "bucket" | "logGroupId" | "securityGroupIds" | "zoneId" | "deletionProtection" | "serviceAccountId" | "health" | "uiProxy" | "hostGroupIds" | "monitoring">, never>)[] & Record<Exclude<keyof I["clusters"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/dataproc/v1/cluster").Cluster_Status | undefined;
            config?: {
                versionId?: string | undefined;
                hadoop?: {
                    properties?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                    sshPublicKeys?: string[] | undefined;
                    initializationActions?: {
                        uri?: string | undefined;
                        timeout?: number | undefined;
                        args?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            bucket?: string | undefined;
            logGroupId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            zoneId?: string | undefined;
            deletionProtection?: boolean | undefined;
            serviceAccountId?: string | undefined;
            health?: import("../../../../yandex/cloud/dataproc/v1/common").Health | undefined;
            uiProxy?: boolean | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "clusters">, never>>(object: I): ListClustersResponse;
};
export declare const CreateSubclusterConfigSpec: {
    $type: "yandex.cloud.dataproc.v1.CreateSubclusterConfigSpec";
    encode(message: CreateSubclusterConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSubclusterConfigSpec;
    fromJSON(object: any): CreateSubclusterConfigSpec;
    toJSON(message: CreateSubclusterConfigSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        role?: Role | undefined;
        subnetId?: string | undefined;
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "name" | "role" | "subnetId" | "resources" | "hostsCount" | "assignPublicIp" | "autoscalingConfig">, never>>(object: I): CreateSubclusterConfigSpec;
};
export declare const UpdateSubclusterConfigSpec: {
    $type: "yandex.cloud.dataproc.v1.UpdateSubclusterConfigSpec";
    encode(message: UpdateSubclusterConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSubclusterConfigSpec;
    fromJSON(object: any): UpdateSubclusterConfigSpec;
    toJSON(message: UpdateSubclusterConfigSpec): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
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
        id?: string | undefined;
        name?: string | undefined;
        resources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "resources" | "hostsCount" | "autoscalingConfig">, never>>(object: I): UpdateSubclusterConfigSpec;
};
export declare const CreateClusterConfigSpec: {
    $type: "yandex.cloud.dataproc.v1.CreateClusterConfigSpec";
    encode(message: CreateClusterConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterConfigSpec;
    fromJSON(object: any): CreateClusterConfigSpec;
    toJSON(message: CreateClusterConfigSpec): unknown;
    fromPartial<I extends {
        versionId?: string | undefined;
        hadoop?: {
            properties?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
            sshPublicKeys?: string[] | undefined;
            initializationActions?: {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[] | undefined;
        } | undefined;
        subclustersSpec?: {
            name?: string | undefined;
            role?: Role | undefined;
            subnetId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
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
        versionId?: string | undefined;
        hadoop?: ({
            properties?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
            sshPublicKeys?: string[] | undefined;
            initializationActions?: {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[] | undefined;
        } & {
            properties?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["hadoop"]["properties"], string | number>, never>) | undefined;
            services?: (import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] & import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] & Record<Exclude<keyof I["hadoop"]["services"], "$type" | keyof import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[]>, never>) | undefined;
            sshPublicKeys?: (string[] & string[] & Record<Exclude<keyof I["hadoop"]["sshPublicKeys"], "$type" | keyof string[]>, never>) | undefined;
            initializationActions?: ({
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[] & ({
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            } & {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: (string[] & string[] & Record<Exclude<keyof I["hadoop"]["initializationActions"][number]["args"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["hadoop"]["initializationActions"][number], "$type" | "uri" | "timeout" | "args">, never>)[] & Record<Exclude<keyof I["hadoop"]["initializationActions"], "$type" | keyof {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["hadoop"], "$type" | "properties" | "services" | "sshPublicKeys" | "initializationActions">, never>) | undefined;
        subclustersSpec?: ({
            name?: string | undefined;
            role?: Role | undefined;
            subnetId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
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
            name?: string | undefined;
            role?: Role | undefined;
            subnetId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
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
            } & Record<Exclude<keyof I["subclustersSpec"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
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
                } & Record<Exclude<keyof I["subclustersSpec"][number]["autoscalingConfig"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                warmupDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["subclustersSpec"][number]["autoscalingConfig"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                stabilizationDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["subclustersSpec"][number]["autoscalingConfig"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                maxHostsCount?: number | undefined;
                cpuUtilizationTarget?: number | undefined;
                decommissionTimeout?: number | undefined;
            } & Record<Exclude<keyof I["subclustersSpec"][number]["autoscalingConfig"], "$type" | "preemptible" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "maxHostsCount" | "cpuUtilizationTarget" | "decommissionTimeout">, never>) | undefined;
        } & Record<Exclude<keyof I["subclustersSpec"][number], "$type" | "name" | "role" | "subnetId" | "resources" | "hostsCount" | "assignPublicIp" | "autoscalingConfig">, never>)[] & Record<Exclude<keyof I["subclustersSpec"], "$type" | keyof {
            name?: string | undefined;
            role?: Role | undefined;
            subnetId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "versionId" | "hadoop" | "subclustersSpec">, never>>(object: I): CreateClusterConfigSpec;
};
export declare const UpdateClusterConfigSpec: {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterConfigSpec";
    encode(message: UpdateClusterConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterConfigSpec;
    fromJSON(object: any): UpdateClusterConfigSpec;
    toJSON(message: UpdateClusterConfigSpec): unknown;
    fromPartial<I extends {
        hadoop?: {
            properties?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
            sshPublicKeys?: string[] | undefined;
            initializationActions?: {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[] | undefined;
        } | undefined;
        subclustersSpec?: {
            id?: string | undefined;
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
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
        }[] | undefined;
    } & {
        hadoop?: ({
            properties?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
            sshPublicKeys?: string[] | undefined;
            initializationActions?: {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[] | undefined;
        } & {
            properties?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["hadoop"]["properties"], string | number>, never>) | undefined;
            services?: (import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] & import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] & Record<Exclude<keyof I["hadoop"]["services"], "$type" | keyof import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[]>, never>) | undefined;
            sshPublicKeys?: (string[] & string[] & Record<Exclude<keyof I["hadoop"]["sshPublicKeys"], "$type" | keyof string[]>, never>) | undefined;
            initializationActions?: ({
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[] & ({
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            } & {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: (string[] & string[] & Record<Exclude<keyof I["hadoop"]["initializationActions"][number]["args"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["hadoop"]["initializationActions"][number], "$type" | "uri" | "timeout" | "args">, never>)[] & Record<Exclude<keyof I["hadoop"]["initializationActions"], "$type" | keyof {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["hadoop"], "$type" | "properties" | "services" | "sshPublicKeys" | "initializationActions">, never>) | undefined;
        subclustersSpec?: ({
            id?: string | undefined;
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
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
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
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
            id?: string | undefined;
            name?: string | undefined;
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["subclustersSpec"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
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
                } & Record<Exclude<keyof I["subclustersSpec"][number]["autoscalingConfig"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                warmupDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["subclustersSpec"][number]["autoscalingConfig"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                stabilizationDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["subclustersSpec"][number]["autoscalingConfig"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                maxHostsCount?: number | undefined;
                cpuUtilizationTarget?: number | undefined;
                decommissionTimeout?: number | undefined;
            } & Record<Exclude<keyof I["subclustersSpec"][number]["autoscalingConfig"], "$type" | "preemptible" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "maxHostsCount" | "cpuUtilizationTarget" | "decommissionTimeout">, never>) | undefined;
        } & Record<Exclude<keyof I["subclustersSpec"][number], "$type" | "id" | "name" | "resources" | "hostsCount" | "autoscalingConfig">, never>)[] & Record<Exclude<keyof I["subclustersSpec"], "$type" | keyof {
            id?: string | undefined;
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "hadoop" | "subclustersSpec">, never>>(object: I): UpdateClusterConfigSpec;
};
export declare const CreateClusterRequest: {
    $type: "yandex.cloud.dataproc.v1.CreateClusterRequest";
    encode(message: CreateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterRequest;
    fromJSON(object: any): CreateClusterRequest;
    toJSON(message: CreateClusterRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        bucket?: string | undefined;
        logGroupId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        zoneId?: string | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        uiProxy?: boolean | undefined;
        hostGroupIds?: string[] | undefined;
        configSpec?: {
            versionId?: string | undefined;
            hadoop?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                sshPublicKeys?: string[] | undefined;
                initializationActions?: {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            subclustersSpec?: {
                name?: string | undefined;
                role?: Role | undefined;
                subnetId?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
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
        bucket?: string | undefined;
        logGroupId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        zoneId?: string | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        uiProxy?: boolean | undefined;
        hostGroupIds?: (string[] & string[] & Record<Exclude<keyof I["hostGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        configSpec?: ({
            versionId?: string | undefined;
            hadoop?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                sshPublicKeys?: string[] | undefined;
                initializationActions?: {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            subclustersSpec?: {
                name?: string | undefined;
                role?: Role | undefined;
                subnetId?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
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
            versionId?: string | undefined;
            hadoop?: ({
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                sshPublicKeys?: string[] | undefined;
                initializationActions?: {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] | undefined;
            } & {
                properties?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["configSpec"]["hadoop"]["properties"], string | number>, never>) | undefined;
                services?: (import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] & import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] & Record<Exclude<keyof I["configSpec"]["hadoop"]["services"], "$type" | keyof import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[]>, never>) | undefined;
                sshPublicKeys?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["hadoop"]["sshPublicKeys"], "$type" | keyof string[]>, never>) | undefined;
                initializationActions?: ({
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] & ({
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                } & {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["hadoop"]["initializationActions"][number]["args"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["hadoop"]["initializationActions"][number], "$type" | "uri" | "timeout" | "args">, never>)[] & Record<Exclude<keyof I["configSpec"]["hadoop"]["initializationActions"], "$type" | keyof {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["hadoop"], "$type" | "properties" | "services" | "sshPublicKeys" | "initializationActions">, never>) | undefined;
            subclustersSpec?: ({
                name?: string | undefined;
                role?: Role | undefined;
                subnetId?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
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
                name?: string | undefined;
                role?: Role | undefined;
                subnetId?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
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
                } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number]["autoscalingConfig"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    warmupDuration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number]["autoscalingConfig"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    stabilizationDuration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number]["autoscalingConfig"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    maxHostsCount?: number | undefined;
                    cpuUtilizationTarget?: number | undefined;
                    decommissionTimeout?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number]["autoscalingConfig"], "$type" | "preemptible" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "maxHostsCount" | "cpuUtilizationTarget" | "decommissionTimeout">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number], "$type" | "name" | "role" | "subnetId" | "resources" | "hostsCount" | "assignPublicIp" | "autoscalingConfig">, never>)[] & Record<Exclude<keyof I["configSpec"]["subclustersSpec"], "$type" | keyof {
                name?: string | undefined;
                role?: Role | undefined;
                subnetId?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
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
        } & Record<Exclude<keyof I["configSpec"], "$type" | "versionId" | "hadoop" | "subclustersSpec">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "bucket" | "logGroupId" | "securityGroupIds" | "zoneId" | "deletionProtection" | "serviceAccountId" | "uiProxy" | "hostGroupIds" | "configSpec">, never>>(object: I): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry";
    encode(message: CreateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterRequest_LabelsEntry;
    fromJSON(object: any): CreateClusterRequest_LabelsEntry;
    toJSON(message: CreateClusterRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateClusterRequest_LabelsEntry;
};
export declare const CreateClusterMetadata: {
    $type: "yandex.cloud.dataproc.v1.CreateClusterMetadata";
    encode(message: CreateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterMetadata;
    fromJSON(object: any): CreateClusterMetadata;
    toJSON(message: CreateClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): CreateClusterMetadata;
};
export declare const UpdateClusterRequest: {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest";
    encode(message: UpdateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterRequest;
    fromJSON(object: any): UpdateClusterRequest;
    toJSON(message: UpdateClusterRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        bucket?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        logGroupId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        uiProxy?: boolean | undefined;
        decommissionTimeout?: number | undefined;
        clusterId?: string | undefined;
        configSpec?: {
            hadoop?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                sshPublicKeys?: string[] | undefined;
                initializationActions?: {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            subclustersSpec?: {
                id?: string | undefined;
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
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
            }[] | undefined;
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
        bucket?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        logGroupId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        uiProxy?: boolean | undefined;
        decommissionTimeout?: number | undefined;
        clusterId?: string | undefined;
        configSpec?: ({
            hadoop?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                sshPublicKeys?: string[] | undefined;
                initializationActions?: {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            subclustersSpec?: {
                id?: string | undefined;
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
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
            }[] | undefined;
        } & {
            hadoop?: ({
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                services?: import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] | undefined;
                sshPublicKeys?: string[] | undefined;
                initializationActions?: {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] | undefined;
            } & {
                properties?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["configSpec"]["hadoop"]["properties"], string | number>, never>) | undefined;
                services?: (import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] & import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[] & Record<Exclude<keyof I["configSpec"]["hadoop"]["services"], "$type" | keyof import("../../../../yandex/cloud/dataproc/v1/cluster").HadoopConfig_Service[]>, never>) | undefined;
                sshPublicKeys?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["hadoop"]["sshPublicKeys"], "$type" | keyof string[]>, never>) | undefined;
                initializationActions?: ({
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] & ({
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                } & {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["hadoop"]["initializationActions"][number]["args"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["hadoop"]["initializationActions"][number], "$type" | "uri" | "timeout" | "args">, never>)[] & Record<Exclude<keyof I["configSpec"]["hadoop"]["initializationActions"], "$type" | keyof {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["hadoop"], "$type" | "properties" | "services" | "sshPublicKeys" | "initializationActions">, never>) | undefined;
            subclustersSpec?: ({
                id?: string | undefined;
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
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
            }[] & ({
                id?: string | undefined;
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
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
                id?: string | undefined;
                name?: string | undefined;
                resources?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number]["autoscalingConfig"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    warmupDuration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number]["autoscalingConfig"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    stabilizationDuration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number]["autoscalingConfig"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    maxHostsCount?: number | undefined;
                    cpuUtilizationTarget?: number | undefined;
                    decommissionTimeout?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number]["autoscalingConfig"], "$type" | "preemptible" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "maxHostsCount" | "cpuUtilizationTarget" | "decommissionTimeout">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["subclustersSpec"][number], "$type" | "id" | "name" | "resources" | "hostsCount" | "autoscalingConfig">, never>)[] & Record<Exclude<keyof I["configSpec"]["subclustersSpec"], "$type" | keyof {
                id?: string | undefined;
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
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
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "hadoop" | "subclustersSpec">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "bucket" | "updateMask" | "logGroupId" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "uiProxy" | "decommissionTimeout" | "clusterId" | "configSpec">, never>>(object: I): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry";
    encode(message: UpdateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterRequest_LabelsEntry;
    fromJSON(object: any): UpdateClusterRequest_LabelsEntry;
    toJSON(message: UpdateClusterRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateClusterRequest_LabelsEntry;
};
export declare const UpdateClusterMetadata: {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterMetadata";
    encode(message: UpdateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterMetadata;
    fromJSON(object: any): UpdateClusterMetadata;
    toJSON(message: UpdateClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): UpdateClusterMetadata;
};
export declare const DeleteClusterRequest: {
    $type: "yandex.cloud.dataproc.v1.DeleteClusterRequest";
    encode(message: DeleteClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterRequest;
    fromJSON(object: any): DeleteClusterRequest;
    toJSON(message: DeleteClusterRequest): unknown;
    fromPartial<I extends {
        decommissionTimeout?: number | undefined;
        clusterId?: string | undefined;
    } & {
        decommissionTimeout?: number | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "decommissionTimeout" | "clusterId">, never>>(object: I): DeleteClusterRequest;
};
export declare const DeleteClusterMetadata: {
    $type: "yandex.cloud.dataproc.v1.DeleteClusterMetadata";
    encode(message: DeleteClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterMetadata;
    fromJSON(object: any): DeleteClusterMetadata;
    toJSON(message: DeleteClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): DeleteClusterMetadata;
};
export declare const StartClusterRequest: {
    $type: "yandex.cloud.dataproc.v1.StartClusterRequest";
    encode(message: StartClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterRequest;
    fromJSON(object: any): StartClusterRequest;
    toJSON(message: StartClusterRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): StartClusterRequest;
};
export declare const StartClusterMetadata: {
    $type: "yandex.cloud.dataproc.v1.StartClusterMetadata";
    encode(message: StartClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterMetadata;
    fromJSON(object: any): StartClusterMetadata;
    toJSON(message: StartClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): StartClusterMetadata;
};
export declare const StopClusterRequest: {
    $type: "yandex.cloud.dataproc.v1.StopClusterRequest";
    encode(message: StopClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopClusterRequest;
    fromJSON(object: any): StopClusterRequest;
    toJSON(message: StopClusterRequest): unknown;
    fromPartial<I extends {
        decommissionTimeout?: number | undefined;
        clusterId?: string | undefined;
    } & {
        decommissionTimeout?: number | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "decommissionTimeout" | "clusterId">, never>>(object: I): StopClusterRequest;
};
export declare const StopClusterMetadata: {
    $type: "yandex.cloud.dataproc.v1.StopClusterMetadata";
    encode(message: StopClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopClusterMetadata;
    fromJSON(object: any): StopClusterMetadata;
    toJSON(message: StopClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): StopClusterMetadata;
};
export declare const ListClusterOperationsRequest: {
    $type: "yandex.cloud.dataproc.v1.ListClusterOperationsRequest";
    encode(message: ListClusterOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterOperationsRequest;
    fromJSON(object: any): ListClusterOperationsRequest;
    toJSON(message: ListClusterOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListClusterOperationsRequest;
};
export declare const ListClusterOperationsResponse: {
    $type: "yandex.cloud.dataproc.v1.ListClusterOperationsResponse";
    encode(message: ListClusterOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterOperationsResponse;
    fromJSON(object: any): ListClusterOperationsResponse;
    toJSON(message: ListClusterOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListClusterOperationsResponse;
};
export declare const ListClusterHostsRequest: {
    $type: "yandex.cloud.dataproc.v1.ListClusterHostsRequest";
    encode(message: ListClusterHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsRequest;
    fromJSON(object: any): ListClusterHostsRequest;
    toJSON(message: ListClusterHostsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "clusterId">, never>>(object: I): ListClusterHostsRequest;
};
export declare const ListClusterHostsResponse: {
    $type: "yandex.cloud.dataproc.v1.ListClusterHostsResponse";
    encode(message: ListClusterHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsResponse;
    fromJSON(object: any): ListClusterHostsResponse;
    toJSON(message: ListClusterHostsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        hosts?: {
            name?: string | undefined;
            role?: Role | undefined;
            computeInstanceId?: string | undefined;
            health?: import("../../../../yandex/cloud/dataproc/v1/common").Health | undefined;
            subclusterId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        hosts?: ({
            name?: string | undefined;
            role?: Role | undefined;
            computeInstanceId?: string | undefined;
            health?: import("../../../../yandex/cloud/dataproc/v1/common").Health | undefined;
            subclusterId?: string | undefined;
        }[] & ({
            name?: string | undefined;
            role?: Role | undefined;
            computeInstanceId?: string | undefined;
            health?: import("../../../../yandex/cloud/dataproc/v1/common").Health | undefined;
            subclusterId?: string | undefined;
        } & {
            name?: string | undefined;
            role?: Role | undefined;
            computeInstanceId?: string | undefined;
            health?: import("../../../../yandex/cloud/dataproc/v1/common").Health | undefined;
            subclusterId?: string | undefined;
        } & Record<Exclude<keyof I["hosts"][number], "$type" | "name" | "role" | "computeInstanceId" | "health" | "subclusterId">, never>)[] & Record<Exclude<keyof I["hosts"], "$type" | keyof {
            name?: string | undefined;
            role?: Role | undefined;
            computeInstanceId?: string | undefined;
            health?: import("../../../../yandex/cloud/dataproc/v1/common").Health | undefined;
            subclusterId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "hosts">, never>>(object: I): ListClusterHostsResponse;
};
export declare const ListUILinksRequest: {
    $type: "yandex.cloud.dataproc.v1.ListUILinksRequest";
    encode(message: ListUILinksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUILinksRequest;
    fromJSON(object: any): ListUILinksRequest;
    toJSON(message: ListUILinksRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): ListUILinksRequest;
};
export declare const UILink: {
    $type: "yandex.cloud.dataproc.v1.UILink";
    encode(message: UILink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UILink;
    fromJSON(object: any): UILink;
    toJSON(message: UILink): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        url?: string | undefined;
    } & {
        name?: string | undefined;
        url?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "url">, never>>(object: I): UILink;
};
export declare const ListUILinksResponse: {
    $type: "yandex.cloud.dataproc.v1.ListUILinksResponse";
    encode(message: ListUILinksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUILinksResponse;
    fromJSON(object: any): ListUILinksResponse;
    toJSON(message: ListUILinksResponse): unknown;
    fromPartial<I extends {
        links?: {
            name?: string | undefined;
            url?: string | undefined;
        }[] | undefined;
    } & {
        links?: ({
            name?: string | undefined;
            url?: string | undefined;
        }[] & ({
            name?: string | undefined;
            url?: string | undefined;
        } & {
            name?: string | undefined;
            url?: string | undefined;
        } & Record<Exclude<keyof I["links"][number], "$type" | "name" | "url">, never>)[] & Record<Exclude<keyof I["links"], "$type" | keyof {
            name?: string | undefined;
            url?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "links">, never>>(object: I): ListUILinksResponse;
};
/** A set of methods for managing Data Proc clusters. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified cluster.
     *
     * To get the list of all available clusters, make a [ClusterService.List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves the list of clusters in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the configuration of the specified cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves the list of hosts in the specified cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
    readonly listUILinks: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/ListUILinks";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListUILinksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListUILinksRequest;
        readonly responseSerialize: (value: ListUILinksResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListUILinksResponse;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified cluster.
     *
     * To get the list of all available clusters, make a [ClusterService.List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of clusters in the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the configuration of the specified cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Starts the specified cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Lists operations for the specified cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves the list of hosts in the specified cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
    listUILinks: handleUnaryCall<ListUILinksRequest, ListUILinksResponse>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified cluster.
     *
     * To get the list of all available clusters, make a [ClusterService.List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves the list of clusters in the specified folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the configuration of the specified cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of hosts in the specified cluster. */
    listHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
    listUILinks(request: ListUILinksRequest, callback: (error: ServiceError | null, response: ListUILinksResponse) => void): ClientUnaryCall;
    listUILinks(request: ListUILinksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListUILinksResponse) => void): ClientUnaryCall;
    listUILinks(request: ListUILinksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListUILinksResponse) => void): ClientUnaryCall;
}
export declare const ClusterServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ClusterServiceClient;
    service: typeof ClusterServiceService;
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
