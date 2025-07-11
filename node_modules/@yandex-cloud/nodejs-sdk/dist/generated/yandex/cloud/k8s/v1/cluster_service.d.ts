/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { NetworkPolicy, IPAllocationPolicy, MasterMaintenancePolicy, MasterLogging, ReleaseChannel, KMSProvider, Cluster, Cilium } from "../../../../yandex/cloud/k8s/v1/cluster";
import { UpdateVersionSpec } from "../../../../yandex/cloud/k8s/v1/version";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { NodeGroup } from "../../../../yandex/cloud/k8s/v1/node_group";
import { Node } from "../../../../yandex/cloud/k8s/v1/node";
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export interface GetClusterRequest {
    $type: "yandex.cloud.k8s.v1.GetClusterRequest";
    /** ID of the Kubernetes cluster to return. */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: "yandex.cloud.k8s.v1.ListClustersRequest";
    /**
     * ID of the folder to list Kubernetes cluster in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListClustersResponse.next_page_token]
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
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Cluster.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}
export interface ListClustersResponse {
    $type: "yandex.cloud.k8s.v1.ListClustersResponse";
    /** List of Kubernetes cluster. */
    clusters: Cluster[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClustersRequest.page_size], use
     * the `next_page_token` as the value
     * for the [ListClustersRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteClusterRequest {
    $type: "yandex.cloud.k8s.v1.DeleteClusterRequest";
    /**
     * ID of the Kubernetes cluster to delete.
     * To get Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    $type: "yandex.cloud.k8s.v1.DeleteClusterMetadata";
    /** ID of the Kubernetes cluster that is being deleted. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: "yandex.cloud.k8s.v1.StopClusterRequest";
    /**
     * ID of the Kubernetes cluster to stop.
     * To get Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StopClusterMetadata {
    $type: "yandex.cloud.k8s.v1.StopClusterMetadata";
    /** ID of the Kubernetes cluster that is being stopped. */
    clusterId: string;
}
export interface StartClusterRequest {
    $type: "yandex.cloud.k8s.v1.StartClusterRequest";
    /**
     * ID of the Kubernetes cluster to start.
     * To get Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: "yandex.cloud.k8s.v1.StartClusterMetadata";
    /** ID of the Kubernetes cluster that is being started. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: "yandex.cloud.k8s.v1.UpdateClusterRequest";
    /**
     * ID of the Kubernetes cluster to update.
     * To get the Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    updateMask?: FieldMask;
    /**
     * Name of the Kubernetes cluster.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the Kubernetes cluster. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /** Gateway IPv4 address. */
    gatewayIpv4Address: string | undefined;
    /** Specification of the master update. */
    masterSpec?: MasterUpdateSpec;
    /**
     * Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster.
     * Selected service account should have `edit` role on the folder where the Kubernetes cluster will be
     * located and on the folder where selected network resides.
     */
    serviceAccountId: string;
    /**
     * Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry
     * or to push node logs and metrics.
     */
    nodeServiceAccountId: string;
    networkPolicy?: NetworkPolicy;
    ipAllocationPolicy?: IPAllocationPolicy;
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface MasterUpdateSpec {
    $type: "yandex.cloud.k8s.v1.MasterUpdateSpec";
    /** Specification of the master update. */
    version?: UpdateVersionSpec;
    /** Maintenance policy of the master. */
    maintenancePolicy?: MasterMaintenancePolicy;
    /** Master security groups. */
    securityGroupIds: string[];
    /** Cloud Logging for master components. */
    masterLogging?: MasterLogging;
    /** Update master instance locations. */
    locations: LocationSpec[];
}
export interface UpdateClusterMetadata {
    $type: "yandex.cloud.k8s.v1.UpdateClusterMetadata";
    /** ID of the Kubernetes cluster that is being updated. */
    clusterId: string;
}
export interface CreateClusterRequest {
    $type: "yandex.cloud.k8s.v1.CreateClusterRequest";
    /**
     * ID of the folder to create a Kubernetes cluster in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the Kubernetes cluster.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the Kubernetes cluster. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** ID of the network. */
    networkId: string;
    /** Master specification of the Kubernetes cluster. */
    masterSpec?: MasterSpec;
    /** IP allocation policy of the Kubernetes cluster. */
    ipAllocationPolicy?: IPAllocationPolicy;
    /** Gateway IPv4 address. */
    gatewayIpv4Address: string | undefined;
    /**
     * Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster.
     * Selected service account should have `edit` role on the folder where the Kubernetes cluster will be
     * located and on the folder where selected network resides.
     */
    serviceAccountId: string;
    /** Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry or to push node logs and metrics. */
    nodeServiceAccountId: string;
    /** Release channel for the master. */
    releaseChannel: ReleaseChannel;
    networkPolicy?: NetworkPolicy;
    /** KMS provider configuration. */
    kmsProvider?: KMSProvider;
    cilium?: Cilium | undefined;
}
export interface CreateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    $type: "yandex.cloud.k8s.v1.CreateClusterMetadata";
    /** ID of the Kubernetes cluster that is being created. */
    clusterId: string;
}
export interface AutoUpgradeMasterMetadata {
    $type: "yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata";
    /** ID of the Kubernetes cluster that is being auto upgraded. */
    clusterId: string;
}
export interface ListClusterOperationsRequest {
    $type: "yandex.cloud.k8s.v1.ListClusterOperationsRequest";
    /** ID of the Kubernetes cluster to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListClusterOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on [Cluster.name] field.
     */
    filter: string;
}
export interface ListClusterOperationsResponse {
    $type: "yandex.cloud.k8s.v1.ListClusterOperationsResponse";
    /** List of operations for the specified Kubernetes cluster. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterOperationsRequest.page_size], use the `next_page_token` as the value
     * for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterNodeGroupsRequest {
    $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest";
    /**
     * ID of the Kubernetes cluster to list node groups in.
     * To get the Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListClusterNodeGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListClusterNodeGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on [Cluster.name] field.
     */
    filter: string;
}
export interface ListClusterNodeGroupsResponse {
    $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse";
    /** List of node groups for the specified Kubernetes cluster. */
    nodeGroups: NodeGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterNodeGroupsRequest.page_size], use
     * the `next_page_token` as the value
     * for the [ListClusterNodeGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterNodesRequest {
    $type: "yandex.cloud.k8s.v1.ListClusterNodesRequest";
    /**
     * ID of the Kubernetes cluster to list nodes in.
     * To get the Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListClusterNodesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListClusterNodeGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterNodesResponse {
    $type: "yandex.cloud.k8s.v1.ListClusterNodesResponse";
    /** List of nodes for the specified Kubernetes cluster. */
    nodes: Node[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterNodesRequest.page_size], use
     * the `next_page_token` as the value
     * for the [ListClusterNodesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface MasterSpec {
    $type: "yandex.cloud.k8s.v1.MasterSpec";
    /** Specification of the zonal master. */
    zonalMasterSpec?: ZonalMasterSpec | undefined;
    /** Specification of the regional master. */
    regionalMasterSpec?: RegionalMasterSpec | undefined;
    /**
     * Locations specification for Kubernetes control-plane (master) instances.
     * Works in conjunction with [etcd_cluster_size]. See it's documentation for details.
     * Possible combinations:
     * - 1 location and etcd_cluster_size = 1 - a single node cluster whose availability is limited by the availability of a single Compute Instance; downtime is expected during cluster updates.
     * - 1 location and etcd_cluster_size = 3 - a highly available cluster within a single availability zone; can survive the failure of a Compute Instance, a server, or an individual server rack.
     * - 3 location and etcd_cluster_size = 3 - a highly available cluster with each etcd instance located within separate availability zone; can survive the failure of a single availability zone.
     */
    locations: LocationSpec[];
    /**
     * Number of etcd nodes in cluster.
     * Works in conjunction with [locations]. See it's documentation for details.
     * Optional. If not set, will be assumed equal to the number of locations.
     */
    etcdClusterSize: number;
    /** Specification of parameters for external IPv4 networking. */
    externalV4AddressSpec?: ExternalAddressSpec;
    /** Specification of parameters for external IPv6 networking. */
    externalV6AddressSpec?: ExternalAddressSpec;
    /** Version of Kubernetes components that runs on the master. */
    version: string;
    /** Maintenance policy of the master. */
    maintenancePolicy?: MasterMaintenancePolicy;
    /** Master security groups. */
    securityGroupIds: string[];
    /** Cloud Logging for master components. */
    masterLogging?: MasterLogging;
}
export interface ZonalMasterSpec {
    $type: "yandex.cloud.k8s.v1.ZonalMasterSpec";
    /** ID of the availability zone. */
    zoneId: string;
    /** Specification of parameters for internal IPv4 networking. */
    internalV4AddressSpec?: InternalAddressSpec;
    /** Specification of parameters for external IPv4 networking. */
    externalV4AddressSpec?: ExternalAddressSpec;
}
export interface RegionalMasterSpec {
    $type: "yandex.cloud.k8s.v1.RegionalMasterSpec";
    /** ID of the availability zone where the master resides. */
    regionId: string;
    /** List of locations where the master will be allocated. */
    locations: MasterLocation[];
    /** Specify to allocate a static public IP for the master. */
    externalV4AddressSpec?: ExternalAddressSpec;
    /** Specification of parameters for external IPv6 networking. */
    externalV6AddressSpec?: ExternalAddressSpec;
}
export interface InternalAddressSpec {
    $type: "yandex.cloud.k8s.v1.InternalAddressSpec";
    /** ID of the subnet. If no ID is specified, and there only one subnet in specified zone, an address in this subnet will be allocated. */
    subnetId: string;
}
export interface ExternalAddressSpec {
    $type: "yandex.cloud.k8s.v1.ExternalAddressSpec";
    /** IP address. */
    address: string;
}
export interface MasterLocation {
    $type: "yandex.cloud.k8s.v1.MasterLocation";
    /** ID of the availability zone. */
    zoneId: string;
    /**
     * If not specified and there is a single subnet in specified zone, address
     * in this subnet will be allocated.
     */
    internalV4AddressSpec?: InternalAddressSpec;
}
export interface LocationSpec {
    $type: "yandex.cloud.k8s.v1.LocationSpec";
    /** ID of the availability zone where the master resides. */
    zoneId: string;
    /**
     * ID of the VPC network's subnet where the master resides.
     * If not specified and there is a single subnet in specified zone, address in this subnet will be allocated.
     */
    subnetId: string;
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.k8s.v1.GetClusterRequest";
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
    $type: "yandex.cloud.k8s.v1.ListClustersRequest";
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
    $type: "yandex.cloud.k8s.v1.ListClustersResponse";
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
            status?: import("../../../../yandex/cloud/k8s/v1/cluster").Cluster_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            logGroupId?: string | undefined;
            networkId?: string | undefined;
            serviceAccountId?: string | undefined;
            health?: import("../../../../yandex/cloud/k8s/v1/cluster").Cluster_Health | undefined;
            nodeServiceAccountId?: string | undefined;
            releaseChannel?: ReleaseChannel | undefined;
            master?: {
                securityGroupIds?: string[] | undefined;
                endpoints?: {
                    internalV4Endpoint?: string | undefined;
                    externalV4Endpoint?: string | undefined;
                    externalV6Endpoint?: string | undefined;
                } | undefined;
                locations?: {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] | undefined;
                maintenancePolicy?: {
                    autoUpgrade?: boolean | undefined;
                    maintenanceWindow?: {
                        anytime?: {} | undefined;
                        dailyMaintenanceWindow?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        weeklyMaintenanceWindow?: {
                            daysOfWeek?: {
                                startTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                                duration?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                version?: string | undefined;
                zonalMaster?: {
                    zoneId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                } | undefined;
                regionalMaster?: {
                    regionId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                    externalV6Address?: string | undefined;
                } | undefined;
                etcdClusterSize?: number | undefined;
                masterAuth?: {
                    clusterCaCertificate?: string | undefined;
                } | undefined;
                versionInfo?: {
                    currentVersion?: string | undefined;
                    newRevisionAvailable?: boolean | undefined;
                    newRevisionSummary?: string | undefined;
                    versionDeprecated?: boolean | undefined;
                } | undefined;
                masterLogging?: {
                    folderId?: string | undefined;
                    logGroupId?: string | undefined;
                    enabled?: boolean | undefined;
                    auditEnabled?: boolean | undefined;
                    clusterAutoscalerEnabled?: boolean | undefined;
                    kubeApiserverEnabled?: boolean | undefined;
                    eventsEnabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            ipAllocationPolicy?: {
                clusterIpv4CidrBlock?: string | undefined;
                nodeIpv4CidrMaskSize?: number | undefined;
                serviceIpv4CidrBlock?: string | undefined;
                clusterIpv6CidrBlock?: string | undefined;
                serviceIpv6CidrBlock?: string | undefined;
            } | undefined;
            gatewayIpv4Address?: string | undefined;
            networkPolicy?: {
                provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
            } | undefined;
            kmsProvider?: {
                keyId?: string | undefined;
            } | undefined;
            cilium?: {
                routingMode?: import("../../../../yandex/cloud/k8s/v1/cluster").Cilium_RoutingMode | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        clusters?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/k8s/v1/cluster").Cluster_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            logGroupId?: string | undefined;
            networkId?: string | undefined;
            serviceAccountId?: string | undefined;
            health?: import("../../../../yandex/cloud/k8s/v1/cluster").Cluster_Health | undefined;
            nodeServiceAccountId?: string | undefined;
            releaseChannel?: ReleaseChannel | undefined;
            master?: {
                securityGroupIds?: string[] | undefined;
                endpoints?: {
                    internalV4Endpoint?: string | undefined;
                    externalV4Endpoint?: string | undefined;
                    externalV6Endpoint?: string | undefined;
                } | undefined;
                locations?: {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] | undefined;
                maintenancePolicy?: {
                    autoUpgrade?: boolean | undefined;
                    maintenanceWindow?: {
                        anytime?: {} | undefined;
                        dailyMaintenanceWindow?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        weeklyMaintenanceWindow?: {
                            daysOfWeek?: {
                                startTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                                duration?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                version?: string | undefined;
                zonalMaster?: {
                    zoneId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                } | undefined;
                regionalMaster?: {
                    regionId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                    externalV6Address?: string | undefined;
                } | undefined;
                etcdClusterSize?: number | undefined;
                masterAuth?: {
                    clusterCaCertificate?: string | undefined;
                } | undefined;
                versionInfo?: {
                    currentVersion?: string | undefined;
                    newRevisionAvailable?: boolean | undefined;
                    newRevisionSummary?: string | undefined;
                    versionDeprecated?: boolean | undefined;
                } | undefined;
                masterLogging?: {
                    folderId?: string | undefined;
                    logGroupId?: string | undefined;
                    enabled?: boolean | undefined;
                    auditEnabled?: boolean | undefined;
                    clusterAutoscalerEnabled?: boolean | undefined;
                    kubeApiserverEnabled?: boolean | undefined;
                    eventsEnabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            ipAllocationPolicy?: {
                clusterIpv4CidrBlock?: string | undefined;
                nodeIpv4CidrMaskSize?: number | undefined;
                serviceIpv4CidrBlock?: string | undefined;
                clusterIpv6CidrBlock?: string | undefined;
                serviceIpv6CidrBlock?: string | undefined;
            } | undefined;
            gatewayIpv4Address?: string | undefined;
            networkPolicy?: {
                provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
            } | undefined;
            kmsProvider?: {
                keyId?: string | undefined;
            } | undefined;
            cilium?: {
                routingMode?: import("../../../../yandex/cloud/k8s/v1/cluster").Cilium_RoutingMode | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/k8s/v1/cluster").Cluster_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            logGroupId?: string | undefined;
            networkId?: string | undefined;
            serviceAccountId?: string | undefined;
            health?: import("../../../../yandex/cloud/k8s/v1/cluster").Cluster_Health | undefined;
            nodeServiceAccountId?: string | undefined;
            releaseChannel?: ReleaseChannel | undefined;
            master?: {
                securityGroupIds?: string[] | undefined;
                endpoints?: {
                    internalV4Endpoint?: string | undefined;
                    externalV4Endpoint?: string | undefined;
                    externalV6Endpoint?: string | undefined;
                } | undefined;
                locations?: {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] | undefined;
                maintenancePolicy?: {
                    autoUpgrade?: boolean | undefined;
                    maintenanceWindow?: {
                        anytime?: {} | undefined;
                        dailyMaintenanceWindow?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        weeklyMaintenanceWindow?: {
                            daysOfWeek?: {
                                startTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                                duration?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                version?: string | undefined;
                zonalMaster?: {
                    zoneId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                } | undefined;
                regionalMaster?: {
                    regionId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                    externalV6Address?: string | undefined;
                } | undefined;
                etcdClusterSize?: number | undefined;
                masterAuth?: {
                    clusterCaCertificate?: string | undefined;
                } | undefined;
                versionInfo?: {
                    currentVersion?: string | undefined;
                    newRevisionAvailable?: boolean | undefined;
                    newRevisionSummary?: string | undefined;
                    versionDeprecated?: boolean | undefined;
                } | undefined;
                masterLogging?: {
                    folderId?: string | undefined;
                    logGroupId?: string | undefined;
                    enabled?: boolean | undefined;
                    auditEnabled?: boolean | undefined;
                    clusterAutoscalerEnabled?: boolean | undefined;
                    kubeApiserverEnabled?: boolean | undefined;
                    eventsEnabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            ipAllocationPolicy?: {
                clusterIpv4CidrBlock?: string | undefined;
                nodeIpv4CidrMaskSize?: number | undefined;
                serviceIpv4CidrBlock?: string | undefined;
                clusterIpv6CidrBlock?: string | undefined;
                serviceIpv6CidrBlock?: string | undefined;
            } | undefined;
            gatewayIpv4Address?: string | undefined;
            networkPolicy?: {
                provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
            } | undefined;
            kmsProvider?: {
                keyId?: string | undefined;
            } | undefined;
            cilium?: {
                routingMode?: import("../../../../yandex/cloud/k8s/v1/cluster").Cilium_RoutingMode | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/k8s/v1/cluster").Cluster_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["labels"], string | number>, never>) | undefined;
            logGroupId?: string | undefined;
            networkId?: string | undefined;
            serviceAccountId?: string | undefined;
            health?: import("../../../../yandex/cloud/k8s/v1/cluster").Cluster_Health | undefined;
            nodeServiceAccountId?: string | undefined;
            releaseChannel?: ReleaseChannel | undefined;
            master?: ({
                securityGroupIds?: string[] | undefined;
                endpoints?: {
                    internalV4Endpoint?: string | undefined;
                    externalV4Endpoint?: string | undefined;
                    externalV6Endpoint?: string | undefined;
                } | undefined;
                locations?: {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] | undefined;
                maintenancePolicy?: {
                    autoUpgrade?: boolean | undefined;
                    maintenanceWindow?: {
                        anytime?: {} | undefined;
                        dailyMaintenanceWindow?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        weeklyMaintenanceWindow?: {
                            daysOfWeek?: {
                                startTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                                duration?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                version?: string | undefined;
                zonalMaster?: {
                    zoneId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                } | undefined;
                regionalMaster?: {
                    regionId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                    externalV6Address?: string | undefined;
                } | undefined;
                etcdClusterSize?: number | undefined;
                masterAuth?: {
                    clusterCaCertificate?: string | undefined;
                } | undefined;
                versionInfo?: {
                    currentVersion?: string | undefined;
                    newRevisionAvailable?: boolean | undefined;
                    newRevisionSummary?: string | undefined;
                    versionDeprecated?: boolean | undefined;
                } | undefined;
                masterLogging?: {
                    folderId?: string | undefined;
                    logGroupId?: string | undefined;
                    enabled?: boolean | undefined;
                    auditEnabled?: boolean | undefined;
                    clusterAutoscalerEnabled?: boolean | undefined;
                    kubeApiserverEnabled?: boolean | undefined;
                    eventsEnabled?: boolean | undefined;
                } | undefined;
            } & {
                securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["master"]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                endpoints?: ({
                    internalV4Endpoint?: string | undefined;
                    externalV4Endpoint?: string | undefined;
                    externalV6Endpoint?: string | undefined;
                } & {
                    internalV4Endpoint?: string | undefined;
                    externalV4Endpoint?: string | undefined;
                    externalV6Endpoint?: string | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["master"]["endpoints"], "$type" | "internalV4Endpoint" | "externalV4Endpoint" | "externalV6Endpoint">, never>) | undefined;
                locations?: ({
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] & ({
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                } & {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["master"]["locations"][number], "$type" | "subnetId" | "zoneId">, never>)[] & Record<Exclude<keyof I["clusters"][number]["master"]["locations"], "$type" | keyof {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[]>, never>) | undefined;
                maintenancePolicy?: ({
                    autoUpgrade?: boolean | undefined;
                    maintenanceWindow?: {
                        anytime?: {} | undefined;
                        dailyMaintenanceWindow?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        weeklyMaintenanceWindow?: {
                            daysOfWeek?: {
                                startTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                                duration?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    autoUpgrade?: boolean | undefined;
                    maintenanceWindow?: ({
                        anytime?: {} | undefined;
                        dailyMaintenanceWindow?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        weeklyMaintenanceWindow?: {
                            daysOfWeek?: {
                                startTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                                duration?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        anytime?: ({} & {} & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                        dailyMaintenanceWindow?: ({
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } & {
                            startTime?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                            duration?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"], "$type" | "startTime" | "duration">, never>) | undefined;
                        weeklyMaintenanceWindow?: ({
                            daysOfWeek?: {
                                startTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                                duration?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            }[] | undefined;
                        } & {
                            daysOfWeek?: ({
                                startTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                                duration?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            }[] & ({
                                startTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                                duration?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            } & {
                                startTime?: ({
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } & {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                                duration?: ({
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } & {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                                days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number], "$type" | "startTime" | "duration" | "days">, never>)[] & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"], "$type" | keyof {
                                startTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                                duration?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "daysOfWeek">, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"]["maintenanceWindow"], "$type" | "anytime" | "dailyMaintenanceWindow" | "weeklyMaintenanceWindow">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["master"]["maintenancePolicy"], "$type" | "autoUpgrade" | "maintenanceWindow">, never>) | undefined;
                version?: string | undefined;
                zonalMaster?: ({
                    zoneId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                } & {
                    zoneId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["master"]["zonalMaster"], "$type" | "zoneId" | "internalV4Address" | "externalV4Address">, never>) | undefined;
                regionalMaster?: ({
                    regionId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                    externalV6Address?: string | undefined;
                } & {
                    regionId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                    externalV6Address?: string | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["master"]["regionalMaster"], "$type" | "regionId" | "internalV4Address" | "externalV4Address" | "externalV6Address">, never>) | undefined;
                etcdClusterSize?: number | undefined;
                masterAuth?: ({
                    clusterCaCertificate?: string | undefined;
                } & {
                    clusterCaCertificate?: string | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["master"]["masterAuth"], "$type" | "clusterCaCertificate">, never>) | undefined;
                versionInfo?: ({
                    currentVersion?: string | undefined;
                    newRevisionAvailable?: boolean | undefined;
                    newRevisionSummary?: string | undefined;
                    versionDeprecated?: boolean | undefined;
                } & {
                    currentVersion?: string | undefined;
                    newRevisionAvailable?: boolean | undefined;
                    newRevisionSummary?: string | undefined;
                    versionDeprecated?: boolean | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["master"]["versionInfo"], "$type" | "currentVersion" | "newRevisionAvailable" | "newRevisionSummary" | "versionDeprecated">, never>) | undefined;
                masterLogging?: ({
                    folderId?: string | undefined;
                    logGroupId?: string | undefined;
                    enabled?: boolean | undefined;
                    auditEnabled?: boolean | undefined;
                    clusterAutoscalerEnabled?: boolean | undefined;
                    kubeApiserverEnabled?: boolean | undefined;
                    eventsEnabled?: boolean | undefined;
                } & {
                    folderId?: string | undefined;
                    logGroupId?: string | undefined;
                    enabled?: boolean | undefined;
                    auditEnabled?: boolean | undefined;
                    clusterAutoscalerEnabled?: boolean | undefined;
                    kubeApiserverEnabled?: boolean | undefined;
                    eventsEnabled?: boolean | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["master"]["masterLogging"], "$type" | "folderId" | "logGroupId" | "enabled" | "auditEnabled" | "clusterAutoscalerEnabled" | "kubeApiserverEnabled" | "eventsEnabled">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["master"], "$type" | "securityGroupIds" | "endpoints" | "locations" | "maintenancePolicy" | "version" | "zonalMaster" | "regionalMaster" | "etcdClusterSize" | "masterAuth" | "versionInfo" | "masterLogging">, never>) | undefined;
            ipAllocationPolicy?: ({
                clusterIpv4CidrBlock?: string | undefined;
                nodeIpv4CidrMaskSize?: number | undefined;
                serviceIpv4CidrBlock?: string | undefined;
                clusterIpv6CidrBlock?: string | undefined;
                serviceIpv6CidrBlock?: string | undefined;
            } & {
                clusterIpv4CidrBlock?: string | undefined;
                nodeIpv4CidrMaskSize?: number | undefined;
                serviceIpv4CidrBlock?: string | undefined;
                clusterIpv6CidrBlock?: string | undefined;
                serviceIpv6CidrBlock?: string | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["ipAllocationPolicy"], "$type" | "clusterIpv4CidrBlock" | "nodeIpv4CidrMaskSize" | "serviceIpv4CidrBlock" | "clusterIpv6CidrBlock" | "serviceIpv6CidrBlock">, never>) | undefined;
            gatewayIpv4Address?: string | undefined;
            networkPolicy?: ({
                provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
            } & {
                provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["networkPolicy"], "$type" | "provider">, never>) | undefined;
            kmsProvider?: ({
                keyId?: string | undefined;
            } & {
                keyId?: string | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["kmsProvider"], "$type" | "keyId">, never>) | undefined;
            cilium?: ({
                routingMode?: import("../../../../yandex/cloud/k8s/v1/cluster").Cilium_RoutingMode | undefined;
            } & {
                routingMode?: import("../../../../yandex/cloud/k8s/v1/cluster").Cilium_RoutingMode | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["cilium"], "$type" | "routingMode">, never>) | undefined;
        } & Record<Exclude<keyof I["clusters"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "logGroupId" | "networkId" | "serviceAccountId" | "health" | "nodeServiceAccountId" | "releaseChannel" | "master" | "ipAllocationPolicy" | "gatewayIpv4Address" | "networkPolicy" | "kmsProvider" | "cilium">, never>)[] & Record<Exclude<keyof I["clusters"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/k8s/v1/cluster").Cluster_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            logGroupId?: string | undefined;
            networkId?: string | undefined;
            serviceAccountId?: string | undefined;
            health?: import("../../../../yandex/cloud/k8s/v1/cluster").Cluster_Health | undefined;
            nodeServiceAccountId?: string | undefined;
            releaseChannel?: ReleaseChannel | undefined;
            master?: {
                securityGroupIds?: string[] | undefined;
                endpoints?: {
                    internalV4Endpoint?: string | undefined;
                    externalV4Endpoint?: string | undefined;
                    externalV6Endpoint?: string | undefined;
                } | undefined;
                locations?: {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] | undefined;
                maintenancePolicy?: {
                    autoUpgrade?: boolean | undefined;
                    maintenanceWindow?: {
                        anytime?: {} | undefined;
                        dailyMaintenanceWindow?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        weeklyMaintenanceWindow?: {
                            daysOfWeek?: {
                                startTime?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                    hours?: number | undefined;
                                    minutes?: number | undefined;
                                } | undefined;
                                duration?: {
                                    seconds?: number | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                version?: string | undefined;
                zonalMaster?: {
                    zoneId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                } | undefined;
                regionalMaster?: {
                    regionId?: string | undefined;
                    internalV4Address?: string | undefined;
                    externalV4Address?: string | undefined;
                    externalV6Address?: string | undefined;
                } | undefined;
                etcdClusterSize?: number | undefined;
                masterAuth?: {
                    clusterCaCertificate?: string | undefined;
                } | undefined;
                versionInfo?: {
                    currentVersion?: string | undefined;
                    newRevisionAvailable?: boolean | undefined;
                    newRevisionSummary?: string | undefined;
                    versionDeprecated?: boolean | undefined;
                } | undefined;
                masterLogging?: {
                    folderId?: string | undefined;
                    logGroupId?: string | undefined;
                    enabled?: boolean | undefined;
                    auditEnabled?: boolean | undefined;
                    clusterAutoscalerEnabled?: boolean | undefined;
                    kubeApiserverEnabled?: boolean | undefined;
                    eventsEnabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            ipAllocationPolicy?: {
                clusterIpv4CidrBlock?: string | undefined;
                nodeIpv4CidrMaskSize?: number | undefined;
                serviceIpv4CidrBlock?: string | undefined;
                clusterIpv6CidrBlock?: string | undefined;
                serviceIpv6CidrBlock?: string | undefined;
            } | undefined;
            gatewayIpv4Address?: string | undefined;
            networkPolicy?: {
                provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
            } | undefined;
            kmsProvider?: {
                keyId?: string | undefined;
            } | undefined;
            cilium?: {
                routingMode?: import("../../../../yandex/cloud/k8s/v1/cluster").Cilium_RoutingMode | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "clusters">, never>>(object: I): ListClustersResponse;
};
export declare const DeleteClusterRequest: {
    $type: "yandex.cloud.k8s.v1.DeleteClusterRequest";
    encode(message: DeleteClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterRequest;
    fromJSON(object: any): DeleteClusterRequest;
    toJSON(message: DeleteClusterRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): DeleteClusterRequest;
};
export declare const DeleteClusterMetadata: {
    $type: "yandex.cloud.k8s.v1.DeleteClusterMetadata";
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
export declare const StopClusterRequest: {
    $type: "yandex.cloud.k8s.v1.StopClusterRequest";
    encode(message: StopClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopClusterRequest;
    fromJSON(object: any): StopClusterRequest;
    toJSON(message: StopClusterRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): StopClusterRequest;
};
export declare const StopClusterMetadata: {
    $type: "yandex.cloud.k8s.v1.StopClusterMetadata";
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
export declare const StartClusterRequest: {
    $type: "yandex.cloud.k8s.v1.StartClusterRequest";
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
    $type: "yandex.cloud.k8s.v1.StartClusterMetadata";
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
export declare const UpdateClusterRequest: {
    $type: "yandex.cloud.k8s.v1.UpdateClusterRequest";
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
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        serviceAccountId?: string | undefined;
        clusterId?: string | undefined;
        nodeServiceAccountId?: string | undefined;
        ipAllocationPolicy?: {
            clusterIpv4CidrBlock?: string | undefined;
            nodeIpv4CidrMaskSize?: number | undefined;
            serviceIpv4CidrBlock?: string | undefined;
            clusterIpv6CidrBlock?: string | undefined;
            serviceIpv6CidrBlock?: string | undefined;
        } | undefined;
        gatewayIpv4Address?: string | undefined;
        networkPolicy?: {
            provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
        } | undefined;
        masterSpec?: {
            securityGroupIds?: string[] | undefined;
            locations?: {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            }[] | undefined;
            maintenancePolicy?: {
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: {
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            version?: {
                version?: string | undefined;
                latestRevision?: boolean | undefined;
            } | undefined;
            masterLogging?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                enabled?: boolean | undefined;
                auditEnabled?: boolean | undefined;
                clusterAutoscalerEnabled?: boolean | undefined;
                kubeApiserverEnabled?: boolean | undefined;
                eventsEnabled?: boolean | undefined;
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
        serviceAccountId?: string | undefined;
        clusterId?: string | undefined;
        nodeServiceAccountId?: string | undefined;
        ipAllocationPolicy?: ({
            clusterIpv4CidrBlock?: string | undefined;
            nodeIpv4CidrMaskSize?: number | undefined;
            serviceIpv4CidrBlock?: string | undefined;
            clusterIpv6CidrBlock?: string | undefined;
            serviceIpv6CidrBlock?: string | undefined;
        } & {
            clusterIpv4CidrBlock?: string | undefined;
            nodeIpv4CidrMaskSize?: number | undefined;
            serviceIpv4CidrBlock?: string | undefined;
            clusterIpv6CidrBlock?: string | undefined;
            serviceIpv6CidrBlock?: string | undefined;
        } & Record<Exclude<keyof I["ipAllocationPolicy"], "$type" | "clusterIpv4CidrBlock" | "nodeIpv4CidrMaskSize" | "serviceIpv4CidrBlock" | "clusterIpv6CidrBlock" | "serviceIpv6CidrBlock">, never>) | undefined;
        gatewayIpv4Address?: string | undefined;
        networkPolicy?: ({
            provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
        } & {
            provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
        } & Record<Exclude<keyof I["networkPolicy"], "$type" | "provider">, never>) | undefined;
        masterSpec?: ({
            securityGroupIds?: string[] | undefined;
            locations?: {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            }[] | undefined;
            maintenancePolicy?: {
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: {
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            version?: {
                version?: string | undefined;
                latestRevision?: boolean | undefined;
            } | undefined;
            masterLogging?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                enabled?: boolean | undefined;
                auditEnabled?: boolean | undefined;
                clusterAutoscalerEnabled?: boolean | undefined;
                kubeApiserverEnabled?: boolean | undefined;
                eventsEnabled?: boolean | undefined;
            } | undefined;
        } & {
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["masterSpec"]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            locations?: ({
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            }[] & ({
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            } & {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            } & Record<Exclude<keyof I["masterSpec"]["locations"][number], "$type" | "subnetId" | "zoneId">, never>)[] & Record<Exclude<keyof I["masterSpec"]["locations"], "$type" | keyof {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            }[]>, never>) | undefined;
            maintenancePolicy?: ({
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: {
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } & {
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: ({
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    anytime?: ({} & {} & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                    dailyMaintenanceWindow?: ({
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        startTime?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                        duration?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"], "$type" | "startTime" | "duration">, never>) | undefined;
                    weeklyMaintenanceWindow?: ({
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } & {
                        daysOfWeek?: ({
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] & ({
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        } & {
                            startTime?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                            duration?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number], "$type" | "startTime" | "duration" | "days">, never>)[] & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"], "$type" | keyof {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "daysOfWeek">, never>) | undefined;
                } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"], "$type" | "anytime" | "dailyMaintenanceWindow" | "weeklyMaintenanceWindow">, never>) | undefined;
            } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"], "$type" | "autoUpgrade" | "maintenanceWindow">, never>) | undefined;
            version?: ({
                version?: string | undefined;
                latestRevision?: boolean | undefined;
            } & {
                version?: string | undefined;
                latestRevision?: boolean | undefined;
            } & Record<Exclude<keyof I["masterSpec"]["version"], "$type" | "version" | "latestRevision">, never>) | undefined;
            masterLogging?: ({
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                enabled?: boolean | undefined;
                auditEnabled?: boolean | undefined;
                clusterAutoscalerEnabled?: boolean | undefined;
                kubeApiserverEnabled?: boolean | undefined;
                eventsEnabled?: boolean | undefined;
            } & {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                enabled?: boolean | undefined;
                auditEnabled?: boolean | undefined;
                clusterAutoscalerEnabled?: boolean | undefined;
                kubeApiserverEnabled?: boolean | undefined;
                eventsEnabled?: boolean | undefined;
            } & Record<Exclude<keyof I["masterSpec"]["masterLogging"], "$type" | "folderId" | "logGroupId" | "enabled" | "auditEnabled" | "clusterAutoscalerEnabled" | "kubeApiserverEnabled" | "eventsEnabled">, never>) | undefined;
        } & Record<Exclude<keyof I["masterSpec"], "$type" | "securityGroupIds" | "locations" | "maintenancePolicy" | "version" | "masterLogging">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "serviceAccountId" | "clusterId" | "nodeServiceAccountId" | "ipAllocationPolicy" | "gatewayIpv4Address" | "networkPolicy" | "masterSpec">, never>>(object: I): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry";
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
export declare const MasterUpdateSpec: {
    $type: "yandex.cloud.k8s.v1.MasterUpdateSpec";
    encode(message: MasterUpdateSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterUpdateSpec;
    fromJSON(object: any): MasterUpdateSpec;
    toJSON(message: MasterUpdateSpec): unknown;
    fromPartial<I extends {
        securityGroupIds?: string[] | undefined;
        locations?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
        }[] | undefined;
        maintenancePolicy?: {
            autoUpgrade?: boolean | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                dailyMaintenanceWindow?: {
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    duration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyMaintenanceWindow?: {
                    daysOfWeek?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        version?: {
            version?: string | undefined;
            latestRevision?: boolean | undefined;
        } | undefined;
        masterLogging?: {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            enabled?: boolean | undefined;
            auditEnabled?: boolean | undefined;
            clusterAutoscalerEnabled?: boolean | undefined;
            kubeApiserverEnabled?: boolean | undefined;
            eventsEnabled?: boolean | undefined;
        } | undefined;
    } & {
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        locations?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
        } & Record<Exclude<keyof I["locations"][number], "$type" | "subnetId" | "zoneId">, never>)[] & Record<Exclude<keyof I["locations"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
        }[]>, never>) | undefined;
        maintenancePolicy?: ({
            autoUpgrade?: boolean | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                dailyMaintenanceWindow?: {
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    duration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyMaintenanceWindow?: {
                    daysOfWeek?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } & {
            autoUpgrade?: boolean | undefined;
            maintenanceWindow?: ({
                anytime?: {} | undefined;
                dailyMaintenanceWindow?: {
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    duration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyMaintenanceWindow?: {
                    daysOfWeek?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                anytime?: ({} & {} & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                dailyMaintenanceWindow?: ({
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    duration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    startTime?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                    duration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"], "$type" | "startTime" | "duration">, never>) | undefined;
                weeklyMaintenanceWindow?: ({
                    daysOfWeek?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[] | undefined;
                } & {
                    daysOfWeek?: ({
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[] & ({
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    } & {
                        startTime?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                        duration?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number], "$type" | "startTime" | "duration" | "days">, never>)[] & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"], "$type" | keyof {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "daysOfWeek">, never>) | undefined;
            } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"], "$type" | "anytime" | "dailyMaintenanceWindow" | "weeklyMaintenanceWindow">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenancePolicy"], "$type" | "autoUpgrade" | "maintenanceWindow">, never>) | undefined;
        version?: ({
            version?: string | undefined;
            latestRevision?: boolean | undefined;
        } & {
            version?: string | undefined;
            latestRevision?: boolean | undefined;
        } & Record<Exclude<keyof I["version"], "$type" | "version" | "latestRevision">, never>) | undefined;
        masterLogging?: ({
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            enabled?: boolean | undefined;
            auditEnabled?: boolean | undefined;
            clusterAutoscalerEnabled?: boolean | undefined;
            kubeApiserverEnabled?: boolean | undefined;
            eventsEnabled?: boolean | undefined;
        } & {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            enabled?: boolean | undefined;
            auditEnabled?: boolean | undefined;
            clusterAutoscalerEnabled?: boolean | undefined;
            kubeApiserverEnabled?: boolean | undefined;
            eventsEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["masterLogging"], "$type" | "folderId" | "logGroupId" | "enabled" | "auditEnabled" | "clusterAutoscalerEnabled" | "kubeApiserverEnabled" | "eventsEnabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityGroupIds" | "locations" | "maintenancePolicy" | "version" | "masterLogging">, never>>(object: I): MasterUpdateSpec;
};
export declare const UpdateClusterMetadata: {
    $type: "yandex.cloud.k8s.v1.UpdateClusterMetadata";
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
export declare const CreateClusterRequest: {
    $type: "yandex.cloud.k8s.v1.CreateClusterRequest";
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
        networkId?: string | undefined;
        serviceAccountId?: string | undefined;
        nodeServiceAccountId?: string | undefined;
        releaseChannel?: ReleaseChannel | undefined;
        ipAllocationPolicy?: {
            clusterIpv4CidrBlock?: string | undefined;
            nodeIpv4CidrMaskSize?: number | undefined;
            serviceIpv4CidrBlock?: string | undefined;
            clusterIpv6CidrBlock?: string | undefined;
            serviceIpv6CidrBlock?: string | undefined;
        } | undefined;
        gatewayIpv4Address?: string | undefined;
        networkPolicy?: {
            provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
        } | undefined;
        kmsProvider?: {
            keyId?: string | undefined;
        } | undefined;
        cilium?: {
            routingMode?: import("../../../../yandex/cloud/k8s/v1/cluster").Cilium_RoutingMode | undefined;
        } | undefined;
        masterSpec?: {
            securityGroupIds?: string[] | undefined;
            locations?: {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            }[] | undefined;
            maintenancePolicy?: {
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: {
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            version?: string | undefined;
            etcdClusterSize?: number | undefined;
            masterLogging?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                enabled?: boolean | undefined;
                auditEnabled?: boolean | undefined;
                clusterAutoscalerEnabled?: boolean | undefined;
                kubeApiserverEnabled?: boolean | undefined;
                eventsEnabled?: boolean | undefined;
            } | undefined;
            zonalMasterSpec?: {
                zoneId?: string | undefined;
                externalV4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                internalV4AddressSpec?: {
                    subnetId?: string | undefined;
                } | undefined;
            } | undefined;
            regionalMasterSpec?: {
                regionId?: string | undefined;
                locations?: {
                    zoneId?: string | undefined;
                    internalV4AddressSpec?: {
                        subnetId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                externalV4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                externalV6AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
            } | undefined;
            externalV4AddressSpec?: {
                address?: string | undefined;
            } | undefined;
            externalV6AddressSpec?: {
                address?: string | undefined;
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
        networkId?: string | undefined;
        serviceAccountId?: string | undefined;
        nodeServiceAccountId?: string | undefined;
        releaseChannel?: ReleaseChannel | undefined;
        ipAllocationPolicy?: ({
            clusterIpv4CidrBlock?: string | undefined;
            nodeIpv4CidrMaskSize?: number | undefined;
            serviceIpv4CidrBlock?: string | undefined;
            clusterIpv6CidrBlock?: string | undefined;
            serviceIpv6CidrBlock?: string | undefined;
        } & {
            clusterIpv4CidrBlock?: string | undefined;
            nodeIpv4CidrMaskSize?: number | undefined;
            serviceIpv4CidrBlock?: string | undefined;
            clusterIpv6CidrBlock?: string | undefined;
            serviceIpv6CidrBlock?: string | undefined;
        } & Record<Exclude<keyof I["ipAllocationPolicy"], "$type" | "clusterIpv4CidrBlock" | "nodeIpv4CidrMaskSize" | "serviceIpv4CidrBlock" | "clusterIpv6CidrBlock" | "serviceIpv6CidrBlock">, never>) | undefined;
        gatewayIpv4Address?: string | undefined;
        networkPolicy?: ({
            provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
        } & {
            provider?: import("../../../../yandex/cloud/k8s/v1/cluster").NetworkPolicy_Provider | undefined;
        } & Record<Exclude<keyof I["networkPolicy"], "$type" | "provider">, never>) | undefined;
        kmsProvider?: ({
            keyId?: string | undefined;
        } & {
            keyId?: string | undefined;
        } & Record<Exclude<keyof I["kmsProvider"], "$type" | "keyId">, never>) | undefined;
        cilium?: ({
            routingMode?: import("../../../../yandex/cloud/k8s/v1/cluster").Cilium_RoutingMode | undefined;
        } & {
            routingMode?: import("../../../../yandex/cloud/k8s/v1/cluster").Cilium_RoutingMode | undefined;
        } & Record<Exclude<keyof I["cilium"], "$type" | "routingMode">, never>) | undefined;
        masterSpec?: ({
            securityGroupIds?: string[] | undefined;
            locations?: {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            }[] | undefined;
            maintenancePolicy?: {
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: {
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            version?: string | undefined;
            etcdClusterSize?: number | undefined;
            masterLogging?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                enabled?: boolean | undefined;
                auditEnabled?: boolean | undefined;
                clusterAutoscalerEnabled?: boolean | undefined;
                kubeApiserverEnabled?: boolean | undefined;
                eventsEnabled?: boolean | undefined;
            } | undefined;
            zonalMasterSpec?: {
                zoneId?: string | undefined;
                externalV4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                internalV4AddressSpec?: {
                    subnetId?: string | undefined;
                } | undefined;
            } | undefined;
            regionalMasterSpec?: {
                regionId?: string | undefined;
                locations?: {
                    zoneId?: string | undefined;
                    internalV4AddressSpec?: {
                        subnetId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                externalV4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                externalV6AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
            } | undefined;
            externalV4AddressSpec?: {
                address?: string | undefined;
            } | undefined;
            externalV6AddressSpec?: {
                address?: string | undefined;
            } | undefined;
        } & {
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["masterSpec"]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            locations?: ({
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            }[] & ({
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            } & {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            } & Record<Exclude<keyof I["masterSpec"]["locations"][number], "$type" | "subnetId" | "zoneId">, never>)[] & Record<Exclude<keyof I["masterSpec"]["locations"], "$type" | keyof {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            }[]>, never>) | undefined;
            maintenancePolicy?: ({
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: {
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } & {
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: ({
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    anytime?: ({} & {} & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                    dailyMaintenanceWindow?: ({
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        startTime?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                        duration?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"], "$type" | "startTime" | "duration">, never>) | undefined;
                    weeklyMaintenanceWindow?: ({
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } & {
                        daysOfWeek?: ({
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] & ({
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        } & {
                            startTime?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                            duration?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number], "$type" | "startTime" | "duration" | "days">, never>)[] & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"], "$type" | keyof {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "daysOfWeek">, never>) | undefined;
                } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"]["maintenanceWindow"], "$type" | "anytime" | "dailyMaintenanceWindow" | "weeklyMaintenanceWindow">, never>) | undefined;
            } & Record<Exclude<keyof I["masterSpec"]["maintenancePolicy"], "$type" | "autoUpgrade" | "maintenanceWindow">, never>) | undefined;
            version?: string | undefined;
            etcdClusterSize?: number | undefined;
            masterLogging?: ({
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                enabled?: boolean | undefined;
                auditEnabled?: boolean | undefined;
                clusterAutoscalerEnabled?: boolean | undefined;
                kubeApiserverEnabled?: boolean | undefined;
                eventsEnabled?: boolean | undefined;
            } & {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                enabled?: boolean | undefined;
                auditEnabled?: boolean | undefined;
                clusterAutoscalerEnabled?: boolean | undefined;
                kubeApiserverEnabled?: boolean | undefined;
                eventsEnabled?: boolean | undefined;
            } & Record<Exclude<keyof I["masterSpec"]["masterLogging"], "$type" | "folderId" | "logGroupId" | "enabled" | "auditEnabled" | "clusterAutoscalerEnabled" | "kubeApiserverEnabled" | "eventsEnabled">, never>) | undefined;
            zonalMasterSpec?: ({
                zoneId?: string | undefined;
                externalV4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                internalV4AddressSpec?: {
                    subnetId?: string | undefined;
                } | undefined;
            } & {
                zoneId?: string | undefined;
                externalV4AddressSpec?: ({
                    address?: string | undefined;
                } & {
                    address?: string | undefined;
                } & Record<Exclude<keyof I["masterSpec"]["zonalMasterSpec"]["externalV4AddressSpec"], "$type" | "address">, never>) | undefined;
                internalV4AddressSpec?: ({
                    subnetId?: string | undefined;
                } & {
                    subnetId?: string | undefined;
                } & Record<Exclude<keyof I["masterSpec"]["zonalMasterSpec"]["internalV4AddressSpec"], "$type" | "subnetId">, never>) | undefined;
            } & Record<Exclude<keyof I["masterSpec"]["zonalMasterSpec"], "$type" | "zoneId" | "externalV4AddressSpec" | "internalV4AddressSpec">, never>) | undefined;
            regionalMasterSpec?: ({
                regionId?: string | undefined;
                locations?: {
                    zoneId?: string | undefined;
                    internalV4AddressSpec?: {
                        subnetId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                externalV4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                externalV6AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
            } & {
                regionId?: string | undefined;
                locations?: ({
                    zoneId?: string | undefined;
                    internalV4AddressSpec?: {
                        subnetId?: string | undefined;
                    } | undefined;
                }[] & ({
                    zoneId?: string | undefined;
                    internalV4AddressSpec?: {
                        subnetId?: string | undefined;
                    } | undefined;
                } & {
                    zoneId?: string | undefined;
                    internalV4AddressSpec?: ({
                        subnetId?: string | undefined;
                    } & {
                        subnetId?: string | undefined;
                    } & Record<Exclude<keyof I["masterSpec"]["regionalMasterSpec"]["locations"][number]["internalV4AddressSpec"], "$type" | "subnetId">, never>) | undefined;
                } & Record<Exclude<keyof I["masterSpec"]["regionalMasterSpec"]["locations"][number], "$type" | "zoneId" | "internalV4AddressSpec">, never>)[] & Record<Exclude<keyof I["masterSpec"]["regionalMasterSpec"]["locations"], "$type" | keyof {
                    zoneId?: string | undefined;
                    internalV4AddressSpec?: {
                        subnetId?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                externalV4AddressSpec?: ({
                    address?: string | undefined;
                } & {
                    address?: string | undefined;
                } & Record<Exclude<keyof I["masterSpec"]["regionalMasterSpec"]["externalV4AddressSpec"], "$type" | "address">, never>) | undefined;
                externalV6AddressSpec?: ({
                    address?: string | undefined;
                } & {
                    address?: string | undefined;
                } & Record<Exclude<keyof I["masterSpec"]["regionalMasterSpec"]["externalV6AddressSpec"], "$type" | "address">, never>) | undefined;
            } & Record<Exclude<keyof I["masterSpec"]["regionalMasterSpec"], "$type" | "regionId" | "locations" | "externalV4AddressSpec" | "externalV6AddressSpec">, never>) | undefined;
            externalV4AddressSpec?: ({
                address?: string | undefined;
            } & {
                address?: string | undefined;
            } & Record<Exclude<keyof I["masterSpec"]["externalV4AddressSpec"], "$type" | "address">, never>) | undefined;
            externalV6AddressSpec?: ({
                address?: string | undefined;
            } & {
                address?: string | undefined;
            } & Record<Exclude<keyof I["masterSpec"]["externalV6AddressSpec"], "$type" | "address">, never>) | undefined;
        } & Record<Exclude<keyof I["masterSpec"], "$type" | "securityGroupIds" | "locations" | "maintenancePolicy" | "version" | "etcdClusterSize" | "masterLogging" | "zonalMasterSpec" | "regionalMasterSpec" | "externalV4AddressSpec" | "externalV6AddressSpec">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "serviceAccountId" | "nodeServiceAccountId" | "releaseChannel" | "ipAllocationPolicy" | "gatewayIpv4Address" | "networkPolicy" | "kmsProvider" | "cilium" | "masterSpec">, never>>(object: I): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.k8s.v1.CreateClusterMetadata";
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
export declare const AutoUpgradeMasterMetadata: {
    $type: "yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata";
    encode(message: AutoUpgradeMasterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AutoUpgradeMasterMetadata;
    fromJSON(object: any): AutoUpgradeMasterMetadata;
    toJSON(message: AutoUpgradeMasterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): AutoUpgradeMasterMetadata;
};
export declare const ListClusterOperationsRequest: {
    $type: "yandex.cloud.k8s.v1.ListClusterOperationsRequest";
    encode(message: ListClusterOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterOperationsRequest;
    fromJSON(object: any): ListClusterOperationsRequest;
    toJSON(message: ListClusterOperationsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "clusterId">, never>>(object: I): ListClusterOperationsRequest;
};
export declare const ListClusterOperationsResponse: {
    $type: "yandex.cloud.k8s.v1.ListClusterOperationsResponse";
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
export declare const ListClusterNodeGroupsRequest: {
    $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest";
    encode(message: ListClusterNodeGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterNodeGroupsRequest;
    fromJSON(object: any): ListClusterNodeGroupsRequest;
    toJSON(message: ListClusterNodeGroupsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "clusterId">, never>>(object: I): ListClusterNodeGroupsRequest;
};
export declare const ListClusterNodeGroupsResponse: {
    $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse";
    encode(message: ListClusterNodeGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterNodeGroupsResponse;
    fromJSON(object: any): ListClusterNodeGroupsResponse;
    toJSON(message: ListClusterNodeGroupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        nodeGroups?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/k8s/v1/node_group").NodeGroup_Status | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            allocationPolicy?: {
                locations?: {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] | undefined;
            } | undefined;
            maintenancePolicy?: {
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: {
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                autoRepair?: boolean | undefined;
            } | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
                autoScale?: {
                    maxSize?: number | undefined;
                    initialSize?: number | undefined;
                    minSize?: number | undefined;
                } | undefined;
            } | undefined;
            deployPolicy?: {
                maxUnavailable?: number | undefined;
                maxExpansion?: number | undefined;
            } | undefined;
            instanceGroupId?: string | undefined;
            clusterId?: string | undefined;
            versionInfo?: {
                currentVersion?: string | undefined;
                newRevisionAvailable?: boolean | undefined;
                newRevisionSummary?: string | undefined;
                versionDeprecated?: boolean | undefined;
            } | undefined;
            nodeVersion?: string | undefined;
            allowedUnsafeSysctls?: string[] | undefined;
            nodeTemplate?: {
                name?: string | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                platformId?: string | undefined;
                gpuSettings?: {
                    gpuClusterId?: string | undefined;
                    gpuEnvironment?: import("../../../../yandex/cloud/k8s/v1/node").GpuSettings_GpuEnvironment | undefined;
                } | undefined;
                schedulingPolicy?: {
                    preemptible?: boolean | undefined;
                } | undefined;
                networkSettings?: {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_NetworkSettings_Type | undefined;
                } | undefined;
                placementPolicy?: {
                    placementGroupId?: string | undefined;
                } | undefined;
                resourcesSpec?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                bootDiskSpec?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } | undefined;
                networkInterfaceSpecs?: {
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] | undefined;
                v4AddressSpec?: {
                    oneToOneNatSpec?: {
                        ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                containerRuntimeSettings?: {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_ContainerRuntimeSettings_Type | undefined;
                } | undefined;
                containerNetworkSettings?: {
                    podMtu?: number | undefined;
                } | undefined;
            } | undefined;
            nodeTaints?: {
                value?: string | undefined;
                key?: string | undefined;
                effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
            }[] | undefined;
            nodeLabels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        nodeGroups?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/k8s/v1/node_group").NodeGroup_Status | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            allocationPolicy?: {
                locations?: {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] | undefined;
            } | undefined;
            maintenancePolicy?: {
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: {
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                autoRepair?: boolean | undefined;
            } | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
                autoScale?: {
                    maxSize?: number | undefined;
                    initialSize?: number | undefined;
                    minSize?: number | undefined;
                } | undefined;
            } | undefined;
            deployPolicy?: {
                maxUnavailable?: number | undefined;
                maxExpansion?: number | undefined;
            } | undefined;
            instanceGroupId?: string | undefined;
            clusterId?: string | undefined;
            versionInfo?: {
                currentVersion?: string | undefined;
                newRevisionAvailable?: boolean | undefined;
                newRevisionSummary?: string | undefined;
                versionDeprecated?: boolean | undefined;
            } | undefined;
            nodeVersion?: string | undefined;
            allowedUnsafeSysctls?: string[] | undefined;
            nodeTemplate?: {
                name?: string | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                platformId?: string | undefined;
                gpuSettings?: {
                    gpuClusterId?: string | undefined;
                    gpuEnvironment?: import("../../../../yandex/cloud/k8s/v1/node").GpuSettings_GpuEnvironment | undefined;
                } | undefined;
                schedulingPolicy?: {
                    preemptible?: boolean | undefined;
                } | undefined;
                networkSettings?: {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_NetworkSettings_Type | undefined;
                } | undefined;
                placementPolicy?: {
                    placementGroupId?: string | undefined;
                } | undefined;
                resourcesSpec?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                bootDiskSpec?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } | undefined;
                networkInterfaceSpecs?: {
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] | undefined;
                v4AddressSpec?: {
                    oneToOneNatSpec?: {
                        ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                containerRuntimeSettings?: {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_ContainerRuntimeSettings_Type | undefined;
                } | undefined;
                containerNetworkSettings?: {
                    podMtu?: number | undefined;
                } | undefined;
            } | undefined;
            nodeTaints?: {
                value?: string | undefined;
                key?: string | undefined;
                effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
            }[] | undefined;
            nodeLabels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/k8s/v1/node_group").NodeGroup_Status | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            allocationPolicy?: {
                locations?: {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] | undefined;
            } | undefined;
            maintenancePolicy?: {
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: {
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                autoRepair?: boolean | undefined;
            } | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
                autoScale?: {
                    maxSize?: number | undefined;
                    initialSize?: number | undefined;
                    minSize?: number | undefined;
                } | undefined;
            } | undefined;
            deployPolicy?: {
                maxUnavailable?: number | undefined;
                maxExpansion?: number | undefined;
            } | undefined;
            instanceGroupId?: string | undefined;
            clusterId?: string | undefined;
            versionInfo?: {
                currentVersion?: string | undefined;
                newRevisionAvailable?: boolean | undefined;
                newRevisionSummary?: string | undefined;
                versionDeprecated?: boolean | undefined;
            } | undefined;
            nodeVersion?: string | undefined;
            allowedUnsafeSysctls?: string[] | undefined;
            nodeTemplate?: {
                name?: string | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                platformId?: string | undefined;
                gpuSettings?: {
                    gpuClusterId?: string | undefined;
                    gpuEnvironment?: import("../../../../yandex/cloud/k8s/v1/node").GpuSettings_GpuEnvironment | undefined;
                } | undefined;
                schedulingPolicy?: {
                    preemptible?: boolean | undefined;
                } | undefined;
                networkSettings?: {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_NetworkSettings_Type | undefined;
                } | undefined;
                placementPolicy?: {
                    placementGroupId?: string | undefined;
                } | undefined;
                resourcesSpec?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                bootDiskSpec?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } | undefined;
                networkInterfaceSpecs?: {
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] | undefined;
                v4AddressSpec?: {
                    oneToOneNatSpec?: {
                        ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                containerRuntimeSettings?: {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_ContainerRuntimeSettings_Type | undefined;
                } | undefined;
                containerNetworkSettings?: {
                    podMtu?: number | undefined;
                } | undefined;
            } | undefined;
            nodeTaints?: {
                value?: string | undefined;
                key?: string | undefined;
                effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
            }[] | undefined;
            nodeLabels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/k8s/v1/node_group").NodeGroup_Status | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["labels"], string | number>, never>) | undefined;
            allocationPolicy?: ({
                locations?: {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] | undefined;
            } & {
                locations?: ({
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] & ({
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                } & {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["allocationPolicy"]["locations"][number], "$type" | "subnetId" | "zoneId">, never>)[] & Record<Exclude<keyof I["nodeGroups"][number]["allocationPolicy"]["locations"], "$type" | keyof {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["allocationPolicy"], "$type" | "locations">, never>) | undefined;
            maintenancePolicy?: ({
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: {
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                autoRepair?: boolean | undefined;
            } & {
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: ({
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    anytime?: ({} & {} & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                    dailyMaintenanceWindow?: ({
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        startTime?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                        duration?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"], "$type" | "startTime" | "duration">, never>) | undefined;
                    weeklyMaintenanceWindow?: ({
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } & {
                        daysOfWeek?: ({
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] & ({
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        } & {
                            startTime?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                            duration?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number], "$type" | "startTime" | "duration" | "days">, never>)[] & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"], "$type" | keyof {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "daysOfWeek">, never>) | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"]["maintenanceWindow"], "$type" | "anytime" | "dailyMaintenanceWindow" | "weeklyMaintenanceWindow">, never>) | undefined;
                autoRepair?: boolean | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["maintenancePolicy"], "$type" | "autoUpgrade" | "maintenanceWindow" | "autoRepair">, never>) | undefined;
            scalePolicy?: ({
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
                autoScale?: {
                    maxSize?: number | undefined;
                    initialSize?: number | undefined;
                    minSize?: number | undefined;
                } | undefined;
            } & {
                fixedScale?: ({
                    size?: number | undefined;
                } & {
                    size?: number | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
                autoScale?: ({
                    maxSize?: number | undefined;
                    initialSize?: number | undefined;
                    minSize?: number | undefined;
                } & {
                    maxSize?: number | undefined;
                    initialSize?: number | undefined;
                    minSize?: number | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["scalePolicy"]["autoScale"], "$type" | "maxSize" | "initialSize" | "minSize">, never>) | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["scalePolicy"], "$type" | "fixedScale" | "autoScale">, never>) | undefined;
            deployPolicy?: ({
                maxUnavailable?: number | undefined;
                maxExpansion?: number | undefined;
            } & {
                maxUnavailable?: number | undefined;
                maxExpansion?: number | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["deployPolicy"], "$type" | "maxUnavailable" | "maxExpansion">, never>) | undefined;
            instanceGroupId?: string | undefined;
            clusterId?: string | undefined;
            versionInfo?: ({
                currentVersion?: string | undefined;
                newRevisionAvailable?: boolean | undefined;
                newRevisionSummary?: string | undefined;
                versionDeprecated?: boolean | undefined;
            } & {
                currentVersion?: string | undefined;
                newRevisionAvailable?: boolean | undefined;
                newRevisionSummary?: string | undefined;
                versionDeprecated?: boolean | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["versionInfo"], "$type" | "currentVersion" | "newRevisionAvailable" | "newRevisionSummary" | "versionDeprecated">, never>) | undefined;
            nodeVersion?: string | undefined;
            allowedUnsafeSysctls?: (string[] & string[] & Record<Exclude<keyof I["nodeGroups"][number]["allowedUnsafeSysctls"], "$type" | keyof string[]>, never>) | undefined;
            nodeTemplate?: ({
                name?: string | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                platformId?: string | undefined;
                gpuSettings?: {
                    gpuClusterId?: string | undefined;
                    gpuEnvironment?: import("../../../../yandex/cloud/k8s/v1/node").GpuSettings_GpuEnvironment | undefined;
                } | undefined;
                schedulingPolicy?: {
                    preemptible?: boolean | undefined;
                } | undefined;
                networkSettings?: {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_NetworkSettings_Type | undefined;
                } | undefined;
                placementPolicy?: {
                    placementGroupId?: string | undefined;
                } | undefined;
                resourcesSpec?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                bootDiskSpec?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } | undefined;
                networkInterfaceSpecs?: {
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] | undefined;
                v4AddressSpec?: {
                    oneToOneNatSpec?: {
                        ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                containerRuntimeSettings?: {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_ContainerRuntimeSettings_Type | undefined;
                } | undefined;
                containerNetworkSettings?: {
                    podMtu?: number | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                metadata?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["metadata"], string | number>, never>) | undefined;
                labels?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["labels"], string | number>, never>) | undefined;
                platformId?: string | undefined;
                gpuSettings?: ({
                    gpuClusterId?: string | undefined;
                    gpuEnvironment?: import("../../../../yandex/cloud/k8s/v1/node").GpuSettings_GpuEnvironment | undefined;
                } & {
                    gpuClusterId?: string | undefined;
                    gpuEnvironment?: import("../../../../yandex/cloud/k8s/v1/node").GpuSettings_GpuEnvironment | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["gpuSettings"], "$type" | "gpuClusterId" | "gpuEnvironment">, never>) | undefined;
                schedulingPolicy?: ({
                    preemptible?: boolean | undefined;
                } & {
                    preemptible?: boolean | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
                networkSettings?: ({
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_NetworkSettings_Type | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_NetworkSettings_Type | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkSettings"], "$type" | "type">, never>) | undefined;
                placementPolicy?: ({
                    placementGroupId?: string | undefined;
                } & {
                    placementGroupId?: string | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["placementPolicy"], "$type" | "placementGroupId">, never>) | undefined;
                resourcesSpec?: ({
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } & {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["resourcesSpec"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
                bootDiskSpec?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["bootDiskSpec"], "$type" | "diskTypeId" | "diskSize">, never>) | undefined;
                networkInterfaceSpecs?: ({
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] & ({
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                } & {
                    securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                    primaryV4AddressSpec?: ({
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        oneToOneNatSpec?: ({
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } & {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
                        dnsRecordSpecs?: ({
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
                        } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                    primaryV6AddressSpec?: ({
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        oneToOneNatSpec?: ({
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } & {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
                        dnsRecordSpecs?: ({
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
                        } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                    subnetIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"][number], "$type" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec" | "subnetIds">, never>)[] & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["networkInterfaceSpecs"], "$type" | keyof {
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[]>, never>) | undefined;
                v4AddressSpec?: ({
                    oneToOneNatSpec?: {
                        ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    oneToOneNatSpec?: ({
                        ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                    } & {
                        ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                    } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["v4AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
                    dnsRecordSpecs?: ({
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
                    } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["v4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["v4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["v4AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                containerRuntimeSettings?: ({
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_ContainerRuntimeSettings_Type | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_ContainerRuntimeSettings_Type | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["containerRuntimeSettings"], "$type" | "type">, never>) | undefined;
                containerNetworkSettings?: ({
                    podMtu?: number | undefined;
                } & {
                    podMtu?: number | undefined;
                } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"]["containerNetworkSettings"], "$type" | "podMtu">, never>) | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTemplate"], "$type" | "name" | "metadata" | "labels" | "platformId" | "gpuSettings" | "schedulingPolicy" | "networkSettings" | "placementPolicy" | "resourcesSpec" | "bootDiskSpec" | "networkInterfaceSpecs" | "v4AddressSpec" | "containerRuntimeSettings" | "containerNetworkSettings">, never>) | undefined;
            nodeTaints?: ({
                value?: string | undefined;
                key?: string | undefined;
                effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
            }[] & ({
                value?: string | undefined;
                key?: string | undefined;
                effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
            } & {
                value?: string | undefined;
                key?: string | undefined;
                effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["nodeTaints"][number], "$type" | "value" | "key" | "effect">, never>)[] & Record<Exclude<keyof I["nodeGroups"][number]["nodeTaints"], "$type" | keyof {
                value?: string | undefined;
                key?: string | undefined;
                effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
            }[]>, never>) | undefined;
            nodeLabels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["nodeLabels"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["nodeGroups"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "labels" | "allocationPolicy" | "maintenancePolicy" | "scalePolicy" | "deployPolicy" | "instanceGroupId" | "clusterId" | "versionInfo" | "nodeVersion" | "allowedUnsafeSysctls" | "nodeTemplate" | "nodeTaints" | "nodeLabels">, never>)[] & Record<Exclude<keyof I["nodeGroups"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/k8s/v1/node_group").NodeGroup_Status | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            allocationPolicy?: {
                locations?: {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                }[] | undefined;
            } | undefined;
            maintenancePolicy?: {
                autoUpgrade?: boolean | undefined;
                maintenanceWindow?: {
                    anytime?: {} | undefined;
                    dailyMaintenanceWindow?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    weeklyMaintenanceWindow?: {
                        daysOfWeek?: {
                            startTime?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                                hours?: number | undefined;
                                minutes?: number | undefined;
                            } | undefined;
                            duration?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                autoRepair?: boolean | undefined;
            } | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
                autoScale?: {
                    maxSize?: number | undefined;
                    initialSize?: number | undefined;
                    minSize?: number | undefined;
                } | undefined;
            } | undefined;
            deployPolicy?: {
                maxUnavailable?: number | undefined;
                maxExpansion?: number | undefined;
            } | undefined;
            instanceGroupId?: string | undefined;
            clusterId?: string | undefined;
            versionInfo?: {
                currentVersion?: string | undefined;
                newRevisionAvailable?: boolean | undefined;
                newRevisionSummary?: string | undefined;
                versionDeprecated?: boolean | undefined;
            } | undefined;
            nodeVersion?: string | undefined;
            allowedUnsafeSysctls?: string[] | undefined;
            nodeTemplate?: {
                name?: string | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                platformId?: string | undefined;
                gpuSettings?: {
                    gpuClusterId?: string | undefined;
                    gpuEnvironment?: import("../../../../yandex/cloud/k8s/v1/node").GpuSettings_GpuEnvironment | undefined;
                } | undefined;
                schedulingPolicy?: {
                    preemptible?: boolean | undefined;
                } | undefined;
                networkSettings?: {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_NetworkSettings_Type | undefined;
                } | undefined;
                placementPolicy?: {
                    placementGroupId?: string | undefined;
                } | undefined;
                resourcesSpec?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                bootDiskSpec?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } | undefined;
                networkInterfaceSpecs?: {
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        oneToOneNatSpec?: {
                            ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] | undefined;
                v4AddressSpec?: {
                    oneToOneNatSpec?: {
                        ipVersion?: import("../../../../yandex/cloud/k8s/v1/node").IpVersion | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                containerRuntimeSettings?: {
                    type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_ContainerRuntimeSettings_Type | undefined;
                } | undefined;
                containerNetworkSettings?: {
                    podMtu?: number | undefined;
                } | undefined;
            } | undefined;
            nodeTaints?: {
                value?: string | undefined;
                key?: string | undefined;
                effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
            }[] | undefined;
            nodeLabels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "nodeGroups">, never>>(object: I): ListClusterNodeGroupsResponse;
};
export declare const ListClusterNodesRequest: {
    $type: "yandex.cloud.k8s.v1.ListClusterNodesRequest";
    encode(message: ListClusterNodesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterNodesRequest;
    fromJSON(object: any): ListClusterNodesRequest;
    toJSON(message: ListClusterNodesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListClusterNodesRequest;
};
export declare const ListClusterNodesResponse: {
    $type: "yandex.cloud.k8s.v1.ListClusterNodesResponse";
    encode(message: ListClusterNodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterNodesResponse;
    fromJSON(object: any): ListClusterNodesResponse;
    toJSON(message: ListClusterNodesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        nodes?: {
            status?: import("../../../../yandex/cloud/k8s/v1/node").Node_Status | undefined;
            spec?: {
                resources?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                disk?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } | undefined;
            } | undefined;
            cloudStatus?: {
                id?: string | undefined;
                status?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
            kubernetesStatus?: {
                id?: string | undefined;
                conditions?: {
                    type?: string | undefined;
                    message?: string | undefined;
                    status?: string | undefined;
                    lastHeartbeatTime?: Date | undefined;
                    lastTransitionTime?: Date | undefined;
                }[] | undefined;
                taints?: {
                    value?: string | undefined;
                    key?: string | undefined;
                    effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
                }[] | undefined;
                attachedVolumes?: {
                    driverName?: string | undefined;
                    volumeHandle?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        nodes?: ({
            status?: import("../../../../yandex/cloud/k8s/v1/node").Node_Status | undefined;
            spec?: {
                resources?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                disk?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } | undefined;
            } | undefined;
            cloudStatus?: {
                id?: string | undefined;
                status?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
            kubernetesStatus?: {
                id?: string | undefined;
                conditions?: {
                    type?: string | undefined;
                    message?: string | undefined;
                    status?: string | undefined;
                    lastHeartbeatTime?: Date | undefined;
                    lastTransitionTime?: Date | undefined;
                }[] | undefined;
                taints?: {
                    value?: string | undefined;
                    key?: string | undefined;
                    effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
                }[] | undefined;
                attachedVolumes?: {
                    driverName?: string | undefined;
                    volumeHandle?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            status?: import("../../../../yandex/cloud/k8s/v1/node").Node_Status | undefined;
            spec?: {
                resources?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                disk?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } | undefined;
            } | undefined;
            cloudStatus?: {
                id?: string | undefined;
                status?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
            kubernetesStatus?: {
                id?: string | undefined;
                conditions?: {
                    type?: string | undefined;
                    message?: string | undefined;
                    status?: string | undefined;
                    lastHeartbeatTime?: Date | undefined;
                    lastTransitionTime?: Date | undefined;
                }[] | undefined;
                taints?: {
                    value?: string | undefined;
                    key?: string | undefined;
                    effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
                }[] | undefined;
                attachedVolumes?: {
                    driverName?: string | undefined;
                    volumeHandle?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            status?: import("../../../../yandex/cloud/k8s/v1/node").Node_Status | undefined;
            spec?: ({
                resources?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                disk?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } | undefined;
            } & {
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
                } & Record<Exclude<keyof I["nodes"][number]["spec"]["resources"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
                disk?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } & Record<Exclude<keyof I["nodes"][number]["spec"]["disk"], "$type" | "diskTypeId" | "diskSize">, never>) | undefined;
            } & Record<Exclude<keyof I["nodes"][number]["spec"], "$type" | "resources" | "disk">, never>) | undefined;
            cloudStatus?: ({
                id?: string | undefined;
                status?: string | undefined;
                statusMessage?: string | undefined;
            } & {
                id?: string | undefined;
                status?: string | undefined;
                statusMessage?: string | undefined;
            } & Record<Exclude<keyof I["nodes"][number]["cloudStatus"], "$type" | "id" | "status" | "statusMessage">, never>) | undefined;
            kubernetesStatus?: ({
                id?: string | undefined;
                conditions?: {
                    type?: string | undefined;
                    message?: string | undefined;
                    status?: string | undefined;
                    lastHeartbeatTime?: Date | undefined;
                    lastTransitionTime?: Date | undefined;
                }[] | undefined;
                taints?: {
                    value?: string | undefined;
                    key?: string | undefined;
                    effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
                }[] | undefined;
                attachedVolumes?: {
                    driverName?: string | undefined;
                    volumeHandle?: string | undefined;
                }[] | undefined;
            } & {
                id?: string | undefined;
                conditions?: ({
                    type?: string | undefined;
                    message?: string | undefined;
                    status?: string | undefined;
                    lastHeartbeatTime?: Date | undefined;
                    lastTransitionTime?: Date | undefined;
                }[] & ({
                    type?: string | undefined;
                    message?: string | undefined;
                    status?: string | undefined;
                    lastHeartbeatTime?: Date | undefined;
                    lastTransitionTime?: Date | undefined;
                } & {
                    type?: string | undefined;
                    message?: string | undefined;
                    status?: string | undefined;
                    lastHeartbeatTime?: Date | undefined;
                    lastTransitionTime?: Date | undefined;
                } & Record<Exclude<keyof I["nodes"][number]["kubernetesStatus"]["conditions"][number], "$type" | "type" | "message" | "status" | "lastHeartbeatTime" | "lastTransitionTime">, never>)[] & Record<Exclude<keyof I["nodes"][number]["kubernetesStatus"]["conditions"], "$type" | keyof {
                    type?: string | undefined;
                    message?: string | undefined;
                    status?: string | undefined;
                    lastHeartbeatTime?: Date | undefined;
                    lastTransitionTime?: Date | undefined;
                }[]>, never>) | undefined;
                taints?: ({
                    value?: string | undefined;
                    key?: string | undefined;
                    effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
                }[] & ({
                    value?: string | undefined;
                    key?: string | undefined;
                    effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
                } & {
                    value?: string | undefined;
                    key?: string | undefined;
                    effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
                } & Record<Exclude<keyof I["nodes"][number]["kubernetesStatus"]["taints"][number], "$type" | "value" | "key" | "effect">, never>)[] & Record<Exclude<keyof I["nodes"][number]["kubernetesStatus"]["taints"], "$type" | keyof {
                    value?: string | undefined;
                    key?: string | undefined;
                    effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
                }[]>, never>) | undefined;
                attachedVolumes?: ({
                    driverName?: string | undefined;
                    volumeHandle?: string | undefined;
                }[] & ({
                    driverName?: string | undefined;
                    volumeHandle?: string | undefined;
                } & {
                    driverName?: string | undefined;
                    volumeHandle?: string | undefined;
                } & Record<Exclude<keyof I["nodes"][number]["kubernetesStatus"]["attachedVolumes"][number], "$type" | "driverName" | "volumeHandle">, never>)[] & Record<Exclude<keyof I["nodes"][number]["kubernetesStatus"]["attachedVolumes"], "$type" | keyof {
                    driverName?: string | undefined;
                    volumeHandle?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["nodes"][number]["kubernetesStatus"], "$type" | "id" | "conditions" | "taints" | "attachedVolumes">, never>) | undefined;
        } & Record<Exclude<keyof I["nodes"][number], "$type" | "status" | "spec" | "cloudStatus" | "kubernetesStatus">, never>)[] & Record<Exclude<keyof I["nodes"], "$type" | keyof {
            status?: import("../../../../yandex/cloud/k8s/v1/node").Node_Status | undefined;
            spec?: {
                resources?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                disk?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                } | undefined;
            } | undefined;
            cloudStatus?: {
                id?: string | undefined;
                status?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
            kubernetesStatus?: {
                id?: string | undefined;
                conditions?: {
                    type?: string | undefined;
                    message?: string | undefined;
                    status?: string | undefined;
                    lastHeartbeatTime?: Date | undefined;
                    lastTransitionTime?: Date | undefined;
                }[] | undefined;
                taints?: {
                    value?: string | undefined;
                    key?: string | undefined;
                    effect?: import("../../../../yandex/cloud/k8s/v1/node").Taint_Effect | undefined;
                }[] | undefined;
                attachedVolumes?: {
                    driverName?: string | undefined;
                    volumeHandle?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "nodes">, never>>(object: I): ListClusterNodesResponse;
};
export declare const MasterSpec: {
    $type: "yandex.cloud.k8s.v1.MasterSpec";
    encode(message: MasterSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterSpec;
    fromJSON(object: any): MasterSpec;
    toJSON(message: MasterSpec): unknown;
    fromPartial<I extends {
        securityGroupIds?: string[] | undefined;
        locations?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
        }[] | undefined;
        maintenancePolicy?: {
            autoUpgrade?: boolean | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                dailyMaintenanceWindow?: {
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    duration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyMaintenanceWindow?: {
                    daysOfWeek?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        version?: string | undefined;
        etcdClusterSize?: number | undefined;
        masterLogging?: {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            enabled?: boolean | undefined;
            auditEnabled?: boolean | undefined;
            clusterAutoscalerEnabled?: boolean | undefined;
            kubeApiserverEnabled?: boolean | undefined;
            eventsEnabled?: boolean | undefined;
        } | undefined;
        zonalMasterSpec?: {
            zoneId?: string | undefined;
            externalV4AddressSpec?: {
                address?: string | undefined;
            } | undefined;
            internalV4AddressSpec?: {
                subnetId?: string | undefined;
            } | undefined;
        } | undefined;
        regionalMasterSpec?: {
            regionId?: string | undefined;
            locations?: {
                zoneId?: string | undefined;
                internalV4AddressSpec?: {
                    subnetId?: string | undefined;
                } | undefined;
            }[] | undefined;
            externalV4AddressSpec?: {
                address?: string | undefined;
            } | undefined;
            externalV6AddressSpec?: {
                address?: string | undefined;
            } | undefined;
        } | undefined;
        externalV4AddressSpec?: {
            address?: string | undefined;
        } | undefined;
        externalV6AddressSpec?: {
            address?: string | undefined;
        } | undefined;
    } & {
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        locations?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
        } & Record<Exclude<keyof I["locations"][number], "$type" | "subnetId" | "zoneId">, never>)[] & Record<Exclude<keyof I["locations"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
        }[]>, never>) | undefined;
        maintenancePolicy?: ({
            autoUpgrade?: boolean | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                dailyMaintenanceWindow?: {
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    duration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyMaintenanceWindow?: {
                    daysOfWeek?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } & {
            autoUpgrade?: boolean | undefined;
            maintenanceWindow?: ({
                anytime?: {} | undefined;
                dailyMaintenanceWindow?: {
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    duration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                weeklyMaintenanceWindow?: {
                    daysOfWeek?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                anytime?: ({} & {} & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                dailyMaintenanceWindow?: ({
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    duration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    startTime?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                    duration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"], "$type" | "startTime" | "duration">, never>) | undefined;
                weeklyMaintenanceWindow?: ({
                    daysOfWeek?: {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[] | undefined;
                } & {
                    daysOfWeek?: ({
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[] & ({
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    } & {
                        startTime?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                        duration?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number], "$type" | "startTime" | "duration" | "days">, never>)[] & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"], "$type" | keyof {
                        startTime?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        duration?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        days?: import("../../../../google/type/dayofweek").DayOfWeek[] | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "daysOfWeek">, never>) | undefined;
            } & Record<Exclude<keyof I["maintenancePolicy"]["maintenanceWindow"], "$type" | "anytime" | "dailyMaintenanceWindow" | "weeklyMaintenanceWindow">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenancePolicy"], "$type" | "autoUpgrade" | "maintenanceWindow">, never>) | undefined;
        version?: string | undefined;
        etcdClusterSize?: number | undefined;
        masterLogging?: ({
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            enabled?: boolean | undefined;
            auditEnabled?: boolean | undefined;
            clusterAutoscalerEnabled?: boolean | undefined;
            kubeApiserverEnabled?: boolean | undefined;
            eventsEnabled?: boolean | undefined;
        } & {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            enabled?: boolean | undefined;
            auditEnabled?: boolean | undefined;
            clusterAutoscalerEnabled?: boolean | undefined;
            kubeApiserverEnabled?: boolean | undefined;
            eventsEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["masterLogging"], "$type" | "folderId" | "logGroupId" | "enabled" | "auditEnabled" | "clusterAutoscalerEnabled" | "kubeApiserverEnabled" | "eventsEnabled">, never>) | undefined;
        zonalMasterSpec?: ({
            zoneId?: string | undefined;
            externalV4AddressSpec?: {
                address?: string | undefined;
            } | undefined;
            internalV4AddressSpec?: {
                subnetId?: string | undefined;
            } | undefined;
        } & {
            zoneId?: string | undefined;
            externalV4AddressSpec?: ({
                address?: string | undefined;
            } & {
                address?: string | undefined;
            } & Record<Exclude<keyof I["zonalMasterSpec"]["externalV4AddressSpec"], "$type" | "address">, never>) | undefined;
            internalV4AddressSpec?: ({
                subnetId?: string | undefined;
            } & {
                subnetId?: string | undefined;
            } & Record<Exclude<keyof I["zonalMasterSpec"]["internalV4AddressSpec"], "$type" | "subnetId">, never>) | undefined;
        } & Record<Exclude<keyof I["zonalMasterSpec"], "$type" | "zoneId" | "externalV4AddressSpec" | "internalV4AddressSpec">, never>) | undefined;
        regionalMasterSpec?: ({
            regionId?: string | undefined;
            locations?: {
                zoneId?: string | undefined;
                internalV4AddressSpec?: {
                    subnetId?: string | undefined;
                } | undefined;
            }[] | undefined;
            externalV4AddressSpec?: {
                address?: string | undefined;
            } | undefined;
            externalV6AddressSpec?: {
                address?: string | undefined;
            } | undefined;
        } & {
            regionId?: string | undefined;
            locations?: ({
                zoneId?: string | undefined;
                internalV4AddressSpec?: {
                    subnetId?: string | undefined;
                } | undefined;
            }[] & ({
                zoneId?: string | undefined;
                internalV4AddressSpec?: {
                    subnetId?: string | undefined;
                } | undefined;
            } & {
                zoneId?: string | undefined;
                internalV4AddressSpec?: ({
                    subnetId?: string | undefined;
                } & {
                    subnetId?: string | undefined;
                } & Record<Exclude<keyof I["regionalMasterSpec"]["locations"][number]["internalV4AddressSpec"], "$type" | "subnetId">, never>) | undefined;
            } & Record<Exclude<keyof I["regionalMasterSpec"]["locations"][number], "$type" | "zoneId" | "internalV4AddressSpec">, never>)[] & Record<Exclude<keyof I["regionalMasterSpec"]["locations"], "$type" | keyof {
                zoneId?: string | undefined;
                internalV4AddressSpec?: {
                    subnetId?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            externalV4AddressSpec?: ({
                address?: string | undefined;
            } & {
                address?: string | undefined;
            } & Record<Exclude<keyof I["regionalMasterSpec"]["externalV4AddressSpec"], "$type" | "address">, never>) | undefined;
            externalV6AddressSpec?: ({
                address?: string | undefined;
            } & {
                address?: string | undefined;
            } & Record<Exclude<keyof I["regionalMasterSpec"]["externalV6AddressSpec"], "$type" | "address">, never>) | undefined;
        } & Record<Exclude<keyof I["regionalMasterSpec"], "$type" | "regionId" | "locations" | "externalV4AddressSpec" | "externalV6AddressSpec">, never>) | undefined;
        externalV4AddressSpec?: ({
            address?: string | undefined;
        } & {
            address?: string | undefined;
        } & Record<Exclude<keyof I["externalV4AddressSpec"], "$type" | "address">, never>) | undefined;
        externalV6AddressSpec?: ({
            address?: string | undefined;
        } & {
            address?: string | undefined;
        } & Record<Exclude<keyof I["externalV6AddressSpec"], "$type" | "address">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityGroupIds" | "locations" | "maintenancePolicy" | "version" | "etcdClusterSize" | "masterLogging" | "zonalMasterSpec" | "regionalMasterSpec" | "externalV4AddressSpec" | "externalV6AddressSpec">, never>>(object: I): MasterSpec;
};
export declare const ZonalMasterSpec: {
    $type: "yandex.cloud.k8s.v1.ZonalMasterSpec";
    encode(message: ZonalMasterSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ZonalMasterSpec;
    fromJSON(object: any): ZonalMasterSpec;
    toJSON(message: ZonalMasterSpec): unknown;
    fromPartial<I extends {
        zoneId?: string | undefined;
        externalV4AddressSpec?: {
            address?: string | undefined;
        } | undefined;
        internalV4AddressSpec?: {
            subnetId?: string | undefined;
        } | undefined;
    } & {
        zoneId?: string | undefined;
        externalV4AddressSpec?: ({
            address?: string | undefined;
        } & {
            address?: string | undefined;
        } & Record<Exclude<keyof I["externalV4AddressSpec"], "$type" | "address">, never>) | undefined;
        internalV4AddressSpec?: ({
            subnetId?: string | undefined;
        } & {
            subnetId?: string | undefined;
        } & Record<Exclude<keyof I["internalV4AddressSpec"], "$type" | "subnetId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "zoneId" | "externalV4AddressSpec" | "internalV4AddressSpec">, never>>(object: I): ZonalMasterSpec;
};
export declare const RegionalMasterSpec: {
    $type: "yandex.cloud.k8s.v1.RegionalMasterSpec";
    encode(message: RegionalMasterSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegionalMasterSpec;
    fromJSON(object: any): RegionalMasterSpec;
    toJSON(message: RegionalMasterSpec): unknown;
    fromPartial<I extends {
        regionId?: string | undefined;
        locations?: {
            zoneId?: string | undefined;
            internalV4AddressSpec?: {
                subnetId?: string | undefined;
            } | undefined;
        }[] | undefined;
        externalV4AddressSpec?: {
            address?: string | undefined;
        } | undefined;
        externalV6AddressSpec?: {
            address?: string | undefined;
        } | undefined;
    } & {
        regionId?: string | undefined;
        locations?: ({
            zoneId?: string | undefined;
            internalV4AddressSpec?: {
                subnetId?: string | undefined;
            } | undefined;
        }[] & ({
            zoneId?: string | undefined;
            internalV4AddressSpec?: {
                subnetId?: string | undefined;
            } | undefined;
        } & {
            zoneId?: string | undefined;
            internalV4AddressSpec?: ({
                subnetId?: string | undefined;
            } & {
                subnetId?: string | undefined;
            } & Record<Exclude<keyof I["locations"][number]["internalV4AddressSpec"], "$type" | "subnetId">, never>) | undefined;
        } & Record<Exclude<keyof I["locations"][number], "$type" | "zoneId" | "internalV4AddressSpec">, never>)[] & Record<Exclude<keyof I["locations"], "$type" | keyof {
            zoneId?: string | undefined;
            internalV4AddressSpec?: {
                subnetId?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        externalV4AddressSpec?: ({
            address?: string | undefined;
        } & {
            address?: string | undefined;
        } & Record<Exclude<keyof I["externalV4AddressSpec"], "$type" | "address">, never>) | undefined;
        externalV6AddressSpec?: ({
            address?: string | undefined;
        } & {
            address?: string | undefined;
        } & Record<Exclude<keyof I["externalV6AddressSpec"], "$type" | "address">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "regionId" | "locations" | "externalV4AddressSpec" | "externalV6AddressSpec">, never>>(object: I): RegionalMasterSpec;
};
export declare const InternalAddressSpec: {
    $type: "yandex.cloud.k8s.v1.InternalAddressSpec";
    encode(message: InternalAddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InternalAddressSpec;
    fromJSON(object: any): InternalAddressSpec;
    toJSON(message: InternalAddressSpec): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
    } & {
        subnetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId">, never>>(object: I): InternalAddressSpec;
};
export declare const ExternalAddressSpec: {
    $type: "yandex.cloud.k8s.v1.ExternalAddressSpec";
    encode(message: ExternalAddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalAddressSpec;
    fromJSON(object: any): ExternalAddressSpec;
    toJSON(message: ExternalAddressSpec): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "address">, never>>(object: I): ExternalAddressSpec;
};
export declare const MasterLocation: {
    $type: "yandex.cloud.k8s.v1.MasterLocation";
    encode(message: MasterLocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterLocation;
    fromJSON(object: any): MasterLocation;
    toJSON(message: MasterLocation): unknown;
    fromPartial<I extends {
        zoneId?: string | undefined;
        internalV4AddressSpec?: {
            subnetId?: string | undefined;
        } | undefined;
    } & {
        zoneId?: string | undefined;
        internalV4AddressSpec?: ({
            subnetId?: string | undefined;
        } & {
            subnetId?: string | undefined;
        } & Record<Exclude<keyof I["internalV4AddressSpec"], "$type" | "subnetId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "zoneId" | "internalV4AddressSpec">, never>>(object: I): MasterLocation;
};
export declare const LocationSpec: {
    $type: "yandex.cloud.k8s.v1.LocationSpec";
    encode(message: LocationSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LocationSpec;
    fromJSON(object: any): LocationSpec;
    toJSON(message: LocationSpec): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
    } & {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "zoneId">, never>>(object: I): LocationSpec;
};
/** A set of methods for managing Kubernetes cluster. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified Kubernetes cluster.
     *
     * To get the list of available Kubernetes cluster, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves the list of Kubernetes cluster in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a Kubernetes cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified Kubernetes cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified Kubernetes cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified Kubernetes cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified Kubernetes cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists nodegroup for the specified Kubernetes cluster. */
    readonly listNodeGroups: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/ListNodeGroups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterNodeGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterNodeGroupsRequest;
        readonly responseSerialize: (value: ListClusterNodeGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterNodeGroupsResponse;
    };
    /** Lists operations for the specified Kubernetes cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Lists cluster's nodes. */
    readonly listNodes: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/ListNodes";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterNodesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterNodesRequest;
        readonly responseSerialize: (value: ListClusterNodesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterNodesResponse;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Kubernetes cluster.
     *
     * To get the list of available Kubernetes cluster, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of Kubernetes cluster in the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a Kubernetes cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified Kubernetes cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified Kubernetes cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Stops the specified Kubernetes cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Starts the specified Kubernetes cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Lists nodegroup for the specified Kubernetes cluster. */
    listNodeGroups: handleUnaryCall<ListClusterNodeGroupsRequest, ListClusterNodeGroupsResponse>;
    /** Lists operations for the specified Kubernetes cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Lists cluster's nodes. */
    listNodes: handleUnaryCall<ListClusterNodesRequest, ListClusterNodesResponse>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified Kubernetes cluster.
     *
     * To get the list of available Kubernetes cluster, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves the list of Kubernetes cluster in the specified folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a Kubernetes cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified Kubernetes cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified Kubernetes cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified Kubernetes cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified Kubernetes cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists nodegroup for the specified Kubernetes cluster. */
    listNodeGroups(request: ListClusterNodeGroupsRequest, callback: (error: ServiceError | null, response: ListClusterNodeGroupsResponse) => void): ClientUnaryCall;
    listNodeGroups(request: ListClusterNodeGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterNodeGroupsResponse) => void): ClientUnaryCall;
    listNodeGroups(request: ListClusterNodeGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterNodeGroupsResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified Kubernetes cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Lists cluster's nodes. */
    listNodes(request: ListClusterNodesRequest, callback: (error: ServiceError | null, response: ListClusterNodesResponse) => void): ClientUnaryCall;
    listNodes(request: ListClusterNodesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterNodesResponse) => void): ClientUnaryCall;
    listNodes(request: ListClusterNodesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterNodesResponse) => void): ClientUnaryCall;
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
