/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { NodeTemplate, Node, Taint } from "../../../../yandex/cloud/k8s/v1/node";
import { ScalePolicy, NodeGroupAllocationPolicy, DeployPolicy, NodeGroupMaintenancePolicy, NodeGroup } from "../../../../yandex/cloud/k8s/v1/node_group";
import { UpdateVersionSpec } from "../../../../yandex/cloud/k8s/v1/version";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export interface GetNodeGroupRequest {
    $type: "yandex.cloud.k8s.v1.GetNodeGroupRequest";
    /**
     * ID of the node group to return.
     * To get the node group ID use a [NodeGroupService.List] request.
     */
    nodeGroupId: string;
}
export interface ListNodeGroupsRequest {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupsRequest";
    /**
     * ID of the folder to list node groups in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListNodeGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListNodeGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [NodeGroup.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}
export interface ListNodeGroupsResponse {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupsResponse";
    /** List of node groups. */
    nodeGroups: NodeGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNodeGroupsRequest.page_size], use
     * the `next_page_token` as the value
     * for the [ListNodeGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListNodeGroupNodesRequest {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesRequest";
    /**
     * ID of the node group to list.
     * To get the node group ID use a [NodeGroupService.List] request.
     */
    nodeGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListNodeGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListNodeGroupNodesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListNodeGroupNodesResponse {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesResponse";
    /** List of nodes. */
    nodes: Node[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNodeGroupNodesRequest.page_size], use
     * the `next_page_token` as the value
     * for the [ListNodeGroupNodesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteNodeGroupRequest {
    $type: "yandex.cloud.k8s.v1.DeleteNodeGroupRequest";
    /**
     * ID of the node group to delete.
     * To get node group ID use a [NodeGroupService.List] request.
     */
    nodeGroupId: string;
}
export interface DeleteNodeGroupMetadata {
    $type: "yandex.cloud.k8s.v1.DeleteNodeGroupMetadata";
    /** ID of the node group that is being deleted. */
    nodeGroupId: string;
}
export interface UpdateNodeGroupRequest {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest";
    /**
     * ID of the node group to update.
     * To get the node group ID use a [NodeGroupService.List] request.
     */
    nodeGroupId: string;
    /** Field mask that specifies which fields of the node group are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the node group.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the node group. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * Node template for the node group.
     * Change may trigger nodes rolling reboot or recreate.
     */
    nodeTemplate?: NodeTemplate;
    /** Scale policy of the node group. */
    scalePolicy?: ScalePolicy;
    /** Allocation policy of the node group by the zones and regions. */
    allocationPolicy?: NodeGroupAllocationPolicy;
    /**
     * Deploy policy according to which the updates are rolled out. If not specified,
     * the default is used.
     */
    deployPolicy?: DeployPolicy;
    /** Version of Kubernetes components that runs on the nodes. */
    version?: UpdateVersionSpec;
    /** Maintenance policy of the node group. */
    maintenancePolicy?: NodeGroupMaintenancePolicy;
    /** Support for unsafe sysctl parameters. For more details see [documentation](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/). */
    allowedUnsafeSysctls: string[];
    /** Taints that are applied to the nodes of the node group at creation time. */
    nodeTaints: Taint[];
    /** Labels that are assigned to the nodes of the node group at creation time. */
    nodeLabels: {
        [key: string]: string;
    };
}
export interface UpdateNodeGroupRequest_LabelsEntry {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateNodeGroupRequest_NodeLabelsEntry {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry";
    key: string;
    value: string;
}
export interface UpdateNodeGroupMetadata {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupMetadata";
    /** ID of the Node group that is being updated. */
    nodeGroupId: string;
}
export interface CreateNodeGroupRequest {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest";
    /**
     * ID of the Kubernetes cluster to create a node group in.
     * To get the Kubernetes cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the node group.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the node group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Node template for creating the node group. */
    nodeTemplate?: NodeTemplate;
    /** Scale policy of the node group. */
    scalePolicy?: ScalePolicy;
    /** Allocation policy of the node group by the zones and regions. */
    allocationPolicy?: NodeGroupAllocationPolicy;
    /**
     * Deploy policy according to which the updates are rolled out. If not specified,
     * the default is used.
     */
    deployPolicy?: DeployPolicy;
    /** Version of Kubernetes components that runs on the nodes. */
    version: string;
    /** Maintenance policy of the node group. */
    maintenancePolicy?: NodeGroupMaintenancePolicy;
    /** Support for unsafe sysctl parameters. For more details see [documentation](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/). */
    allowedUnsafeSysctls: string[];
    /** Taints that are applied to the nodes of the node group at creation time. */
    nodeTaints: Taint[];
    /** Labels that are assigned to the nodes of the node group at creation time. */
    nodeLabels: {
        [key: string]: string;
    };
}
export interface CreateNodeGroupRequest_LabelsEntry {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateNodeGroupRequest_NodeLabelsEntry {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry";
    key: string;
    value: string;
}
export interface CreateNodeGroupMetadata {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupMetadata";
    /** ID of the node group that is being created. */
    nodeGroupId: string;
}
export interface AutoUpgradeNodeGroupMetadata {
    $type: "yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata";
    /** ID of the node group that is being auto upgraded. */
    nodeGroupId: string;
}
export interface ListNodeGroupOperationsRequest {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest";
    /** ID of the node group to list operations for. */
    nodeGroupId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListNodeGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListNodeGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on [NodeGroup.name] field.
     */
    filter: string;
}
export interface ListNodeGroupOperationsResponse {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse";
    /** List of operations for the specified node group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNodeGroupOperationsRequest.page_size], use the `next_page_token` as the value
     * for the [ListNodeGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetNodeGroupRequest: {
    $type: "yandex.cloud.k8s.v1.GetNodeGroupRequest";
    encode(message: GetNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetNodeGroupRequest;
    fromJSON(object: any): GetNodeGroupRequest;
    toJSON(message: GetNodeGroupRequest): unknown;
    fromPartial<I extends {
        nodeGroupId?: string | undefined;
    } & {
        nodeGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "nodeGroupId">, never>>(object: I): GetNodeGroupRequest;
};
export declare const ListNodeGroupsRequest: {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupsRequest";
    encode(message: ListNodeGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupsRequest;
    fromJSON(object: any): ListNodeGroupsRequest;
    toJSON(message: ListNodeGroupsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListNodeGroupsRequest;
};
export declare const ListNodeGroupsResponse: {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupsResponse";
    encode(message: ListNodeGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupsResponse;
    fromJSON(object: any): ListNodeGroupsResponse;
    toJSON(message: ListNodeGroupsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "nodeGroups">, never>>(object: I): ListNodeGroupsResponse;
};
export declare const ListNodeGroupNodesRequest: {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesRequest";
    encode(message: ListNodeGroupNodesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupNodesRequest;
    fromJSON(object: any): ListNodeGroupNodesRequest;
    toJSON(message: ListNodeGroupNodesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        nodeGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        nodeGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "nodeGroupId">, never>>(object: I): ListNodeGroupNodesRequest;
};
export declare const ListNodeGroupNodesResponse: {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesResponse";
    encode(message: ListNodeGroupNodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupNodesResponse;
    fromJSON(object: any): ListNodeGroupNodesResponse;
    toJSON(message: ListNodeGroupNodesResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "nodes">, never>>(object: I): ListNodeGroupNodesResponse;
};
export declare const DeleteNodeGroupRequest: {
    $type: "yandex.cloud.k8s.v1.DeleteNodeGroupRequest";
    encode(message: DeleteNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteNodeGroupRequest;
    fromJSON(object: any): DeleteNodeGroupRequest;
    toJSON(message: DeleteNodeGroupRequest): unknown;
    fromPartial<I extends {
        nodeGroupId?: string | undefined;
    } & {
        nodeGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "nodeGroupId">, never>>(object: I): DeleteNodeGroupRequest;
};
export declare const DeleteNodeGroupMetadata: {
    $type: "yandex.cloud.k8s.v1.DeleteNodeGroupMetadata";
    encode(message: DeleteNodeGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteNodeGroupMetadata;
    fromJSON(object: any): DeleteNodeGroupMetadata;
    toJSON(message: DeleteNodeGroupMetadata): unknown;
    fromPartial<I extends {
        nodeGroupId?: string | undefined;
    } & {
        nodeGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "nodeGroupId">, never>>(object: I): DeleteNodeGroupMetadata;
};
export declare const UpdateNodeGroupRequest: {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest";
    encode(message: UpdateNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNodeGroupRequest;
    fromJSON(object: any): UpdateNodeGroupRequest;
    toJSON(message: UpdateNodeGroupRequest): unknown;
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
        version?: {
            version?: string | undefined;
            latestRevision?: boolean | undefined;
        } | undefined;
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
        nodeGroupId?: string | undefined;
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
            } & Record<Exclude<keyof I["allocationPolicy"]["locations"][number], "$type" | "subnetId" | "zoneId">, never>)[] & Record<Exclude<keyof I["allocationPolicy"]["locations"], "$type" | keyof {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["allocationPolicy"], "$type" | "locations">, never>) | undefined;
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
            autoRepair?: boolean | undefined;
        } & Record<Exclude<keyof I["maintenancePolicy"], "$type" | "autoUpgrade" | "maintenanceWindow" | "autoRepair">, never>) | undefined;
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
            } & Record<Exclude<keyof I["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
            autoScale?: ({
                maxSize?: number | undefined;
                initialSize?: number | undefined;
                minSize?: number | undefined;
            } & {
                maxSize?: number | undefined;
                initialSize?: number | undefined;
                minSize?: number | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["autoScale"], "$type" | "maxSize" | "initialSize" | "minSize">, never>) | undefined;
        } & Record<Exclude<keyof I["scalePolicy"], "$type" | "fixedScale" | "autoScale">, never>) | undefined;
        deployPolicy?: ({
            maxUnavailable?: number | undefined;
            maxExpansion?: number | undefined;
        } & {
            maxUnavailable?: number | undefined;
            maxExpansion?: number | undefined;
        } & Record<Exclude<keyof I["deployPolicy"], "$type" | "maxUnavailable" | "maxExpansion">, never>) | undefined;
        version?: ({
            version?: string | undefined;
            latestRevision?: boolean | undefined;
        } & {
            version?: string | undefined;
            latestRevision?: boolean | undefined;
        } & Record<Exclude<keyof I["version"], "$type" | "version" | "latestRevision">, never>) | undefined;
        allowedUnsafeSysctls?: (string[] & string[] & Record<Exclude<keyof I["allowedUnsafeSysctls"], "$type" | keyof string[]>, never>) | undefined;
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
            } & Record<Exclude<keyof I["nodeTemplate"]["metadata"], string | number>, never>) | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["labels"], string | number>, never>) | undefined;
            platformId?: string | undefined;
            gpuSettings?: ({
                gpuClusterId?: string | undefined;
                gpuEnvironment?: import("../../../../yandex/cloud/k8s/v1/node").GpuSettings_GpuEnvironment | undefined;
            } & {
                gpuClusterId?: string | undefined;
                gpuEnvironment?: import("../../../../yandex/cloud/k8s/v1/node").GpuSettings_GpuEnvironment | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["gpuSettings"], "$type" | "gpuClusterId" | "gpuEnvironment">, never>) | undefined;
            schedulingPolicy?: ({
                preemptible?: boolean | undefined;
            } & {
                preemptible?: boolean | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
            networkSettings?: ({
                type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_NetworkSettings_Type | undefined;
            } & {
                type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_NetworkSettings_Type | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["networkSettings"], "$type" | "type">, never>) | undefined;
            placementPolicy?: ({
                placementGroupId?: string | undefined;
            } & {
                placementGroupId?: string | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["placementPolicy"], "$type" | "placementGroupId">, never>) | undefined;
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
            } & Record<Exclude<keyof I["nodeTemplate"]["resourcesSpec"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
            bootDiskSpec?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["bootDiskSpec"], "$type" | "diskTypeId" | "diskSize">, never>) | undefined;
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
                securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                subnetIds?: (string[] & string[] & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number], "$type" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec" | "subnetIds">, never>)[] & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"], "$type" | keyof {
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
                } & Record<Exclude<keyof I["nodeTemplate"]["v4AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
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
                } & Record<Exclude<keyof I["nodeTemplate"]["v4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["nodeTemplate"]["v4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["v4AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
            containerRuntimeSettings?: ({
                type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_ContainerRuntimeSettings_Type | undefined;
            } & {
                type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_ContainerRuntimeSettings_Type | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["containerRuntimeSettings"], "$type" | "type">, never>) | undefined;
            containerNetworkSettings?: ({
                podMtu?: number | undefined;
            } & {
                podMtu?: number | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["containerNetworkSettings"], "$type" | "podMtu">, never>) | undefined;
        } & Record<Exclude<keyof I["nodeTemplate"], "$type" | "name" | "metadata" | "labels" | "platformId" | "gpuSettings" | "schedulingPolicy" | "networkSettings" | "placementPolicy" | "resourcesSpec" | "bootDiskSpec" | "networkInterfaceSpecs" | "v4AddressSpec" | "containerRuntimeSettings" | "containerNetworkSettings">, never>) | undefined;
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
        } & Record<Exclude<keyof I["nodeTaints"][number], "$type" | "value" | "key" | "effect">, never>)[] & Record<Exclude<keyof I["nodeTaints"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["nodeLabels"], string | number>, never>) | undefined;
        nodeGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "allocationPolicy" | "maintenancePolicy" | "scalePolicy" | "deployPolicy" | "version" | "allowedUnsafeSysctls" | "nodeTemplate" | "nodeTaints" | "nodeLabels" | "nodeGroupId">, never>>(object: I): UpdateNodeGroupRequest;
};
export declare const UpdateNodeGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry";
    encode(message: UpdateNodeGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNodeGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateNodeGroupRequest_LabelsEntry;
    toJSON(message: UpdateNodeGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateNodeGroupRequest_LabelsEntry;
};
export declare const UpdateNodeGroupRequest_NodeLabelsEntry: {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry";
    encode(message: UpdateNodeGroupRequest_NodeLabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNodeGroupRequest_NodeLabelsEntry;
    fromJSON(object: any): UpdateNodeGroupRequest_NodeLabelsEntry;
    toJSON(message: UpdateNodeGroupRequest_NodeLabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateNodeGroupRequest_NodeLabelsEntry;
};
export declare const UpdateNodeGroupMetadata: {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupMetadata";
    encode(message: UpdateNodeGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNodeGroupMetadata;
    fromJSON(object: any): UpdateNodeGroupMetadata;
    toJSON(message: UpdateNodeGroupMetadata): unknown;
    fromPartial<I extends {
        nodeGroupId?: string | undefined;
    } & {
        nodeGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "nodeGroupId">, never>>(object: I): UpdateNodeGroupMetadata;
};
export declare const CreateNodeGroupRequest: {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest";
    encode(message: CreateNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNodeGroupRequest;
    fromJSON(object: any): CreateNodeGroupRequest;
    toJSON(message: CreateNodeGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
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
        version?: string | undefined;
        clusterId?: string | undefined;
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
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
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
            } & Record<Exclude<keyof I["allocationPolicy"]["locations"][number], "$type" | "subnetId" | "zoneId">, never>)[] & Record<Exclude<keyof I["allocationPolicy"]["locations"], "$type" | keyof {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["allocationPolicy"], "$type" | "locations">, never>) | undefined;
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
            autoRepair?: boolean | undefined;
        } & Record<Exclude<keyof I["maintenancePolicy"], "$type" | "autoUpgrade" | "maintenanceWindow" | "autoRepair">, never>) | undefined;
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
            } & Record<Exclude<keyof I["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
            autoScale?: ({
                maxSize?: number | undefined;
                initialSize?: number | undefined;
                minSize?: number | undefined;
            } & {
                maxSize?: number | undefined;
                initialSize?: number | undefined;
                minSize?: number | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["autoScale"], "$type" | "maxSize" | "initialSize" | "minSize">, never>) | undefined;
        } & Record<Exclude<keyof I["scalePolicy"], "$type" | "fixedScale" | "autoScale">, never>) | undefined;
        deployPolicy?: ({
            maxUnavailable?: number | undefined;
            maxExpansion?: number | undefined;
        } & {
            maxUnavailable?: number | undefined;
            maxExpansion?: number | undefined;
        } & Record<Exclude<keyof I["deployPolicy"], "$type" | "maxUnavailable" | "maxExpansion">, never>) | undefined;
        version?: string | undefined;
        clusterId?: string | undefined;
        allowedUnsafeSysctls?: (string[] & string[] & Record<Exclude<keyof I["allowedUnsafeSysctls"], "$type" | keyof string[]>, never>) | undefined;
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
            } & Record<Exclude<keyof I["nodeTemplate"]["metadata"], string | number>, never>) | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["labels"], string | number>, never>) | undefined;
            platformId?: string | undefined;
            gpuSettings?: ({
                gpuClusterId?: string | undefined;
                gpuEnvironment?: import("../../../../yandex/cloud/k8s/v1/node").GpuSettings_GpuEnvironment | undefined;
            } & {
                gpuClusterId?: string | undefined;
                gpuEnvironment?: import("../../../../yandex/cloud/k8s/v1/node").GpuSettings_GpuEnvironment | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["gpuSettings"], "$type" | "gpuClusterId" | "gpuEnvironment">, never>) | undefined;
            schedulingPolicy?: ({
                preemptible?: boolean | undefined;
            } & {
                preemptible?: boolean | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
            networkSettings?: ({
                type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_NetworkSettings_Type | undefined;
            } & {
                type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_NetworkSettings_Type | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["networkSettings"], "$type" | "type">, never>) | undefined;
            placementPolicy?: ({
                placementGroupId?: string | undefined;
            } & {
                placementGroupId?: string | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["placementPolicy"], "$type" | "placementGroupId">, never>) | undefined;
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
            } & Record<Exclude<keyof I["nodeTemplate"]["resourcesSpec"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
            bootDiskSpec?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["bootDiskSpec"], "$type" | "diskTypeId" | "diskSize">, never>) | undefined;
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
                securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                subnetIds?: (string[] & string[] & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"][number], "$type" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec" | "subnetIds">, never>)[] & Record<Exclude<keyof I["nodeTemplate"]["networkInterfaceSpecs"], "$type" | keyof {
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
                } & Record<Exclude<keyof I["nodeTemplate"]["v4AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
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
                } & Record<Exclude<keyof I["nodeTemplate"]["v4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["nodeTemplate"]["v4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["v4AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
            containerRuntimeSettings?: ({
                type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_ContainerRuntimeSettings_Type | undefined;
            } & {
                type?: import("../../../../yandex/cloud/k8s/v1/node").NodeTemplate_ContainerRuntimeSettings_Type | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["containerRuntimeSettings"], "$type" | "type">, never>) | undefined;
            containerNetworkSettings?: ({
                podMtu?: number | undefined;
            } & {
                podMtu?: number | undefined;
            } & Record<Exclude<keyof I["nodeTemplate"]["containerNetworkSettings"], "$type" | "podMtu">, never>) | undefined;
        } & Record<Exclude<keyof I["nodeTemplate"], "$type" | "name" | "metadata" | "labels" | "platformId" | "gpuSettings" | "schedulingPolicy" | "networkSettings" | "placementPolicy" | "resourcesSpec" | "bootDiskSpec" | "networkInterfaceSpecs" | "v4AddressSpec" | "containerRuntimeSettings" | "containerNetworkSettings">, never>) | undefined;
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
        } & Record<Exclude<keyof I["nodeTaints"][number], "$type" | "value" | "key" | "effect">, never>)[] & Record<Exclude<keyof I["nodeTaints"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["nodeLabels"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "allocationPolicy" | "maintenancePolicy" | "scalePolicy" | "deployPolicy" | "version" | "clusterId" | "allowedUnsafeSysctls" | "nodeTemplate" | "nodeTaints" | "nodeLabels">, never>>(object: I): CreateNodeGroupRequest;
};
export declare const CreateNodeGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry";
    encode(message: CreateNodeGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNodeGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateNodeGroupRequest_LabelsEntry;
    toJSON(message: CreateNodeGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateNodeGroupRequest_LabelsEntry;
};
export declare const CreateNodeGroupRequest_NodeLabelsEntry: {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry";
    encode(message: CreateNodeGroupRequest_NodeLabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNodeGroupRequest_NodeLabelsEntry;
    fromJSON(object: any): CreateNodeGroupRequest_NodeLabelsEntry;
    toJSON(message: CreateNodeGroupRequest_NodeLabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateNodeGroupRequest_NodeLabelsEntry;
};
export declare const CreateNodeGroupMetadata: {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupMetadata";
    encode(message: CreateNodeGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNodeGroupMetadata;
    fromJSON(object: any): CreateNodeGroupMetadata;
    toJSON(message: CreateNodeGroupMetadata): unknown;
    fromPartial<I extends {
        nodeGroupId?: string | undefined;
    } & {
        nodeGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "nodeGroupId">, never>>(object: I): CreateNodeGroupMetadata;
};
export declare const AutoUpgradeNodeGroupMetadata: {
    $type: "yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata";
    encode(message: AutoUpgradeNodeGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AutoUpgradeNodeGroupMetadata;
    fromJSON(object: any): AutoUpgradeNodeGroupMetadata;
    toJSON(message: AutoUpgradeNodeGroupMetadata): unknown;
    fromPartial<I extends {
        nodeGroupId?: string | undefined;
    } & {
        nodeGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "nodeGroupId">, never>>(object: I): AutoUpgradeNodeGroupMetadata;
};
export declare const ListNodeGroupOperationsRequest: {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest";
    encode(message: ListNodeGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupOperationsRequest;
    fromJSON(object: any): ListNodeGroupOperationsRequest;
    toJSON(message: ListNodeGroupOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        nodeGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        nodeGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "nodeGroupId">, never>>(object: I): ListNodeGroupOperationsRequest;
};
export declare const ListNodeGroupOperationsResponse: {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse";
    encode(message: ListNodeGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupOperationsResponse;
    fromJSON(object: any): ListNodeGroupOperationsResponse;
    toJSON(message: ListNodeGroupOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListNodeGroupOperationsResponse;
};
/** A set of methods for managing node groups. */
export declare const NodeGroupServiceService: {
    /**
     * Returns the specified node group.
     *
     * To get the list of available node group, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetNodeGroupRequest;
        readonly responseSerialize: (value: NodeGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => NodeGroup;
    };
    /** Retrieves the list of node group in the specified Kubernetes cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNodeGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNodeGroupsRequest;
        readonly responseSerialize: (value: ListNodeGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNodeGroupsResponse;
    };
    /** Creates a node group in the specified Kubernetes cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified node group. */
    readonly update: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified node group. */
    readonly delete: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified node group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNodeGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNodeGroupOperationsRequest;
        readonly responseSerialize: (value: ListNodeGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNodeGroupOperationsResponse;
    };
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    readonly listNodes: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/ListNodes";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNodeGroupNodesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNodeGroupNodesRequest;
        readonly responseSerialize: (value: ListNodeGroupNodesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNodeGroupNodesResponse;
    };
};
export interface NodeGroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified node group.
     *
     * To get the list of available node group, make a [List] request.
     */
    get: handleUnaryCall<GetNodeGroupRequest, NodeGroup>;
    /** Retrieves the list of node group in the specified Kubernetes cluster. */
    list: handleUnaryCall<ListNodeGroupsRequest, ListNodeGroupsResponse>;
    /** Creates a node group in the specified Kubernetes cluster. */
    create: handleUnaryCall<CreateNodeGroupRequest, Operation>;
    /** Updates the specified node group. */
    update: handleUnaryCall<UpdateNodeGroupRequest, Operation>;
    /** Deletes the specified node group. */
    delete: handleUnaryCall<DeleteNodeGroupRequest, Operation>;
    /** Lists operations for the specified node group. */
    listOperations: handleUnaryCall<ListNodeGroupOperationsRequest, ListNodeGroupOperationsResponse>;
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    listNodes: handleUnaryCall<ListNodeGroupNodesRequest, ListNodeGroupNodesResponse>;
}
export interface NodeGroupServiceClient extends Client {
    /**
     * Returns the specified node group.
     *
     * To get the list of available node group, make a [List] request.
     */
    get(request: GetNodeGroupRequest, callback: (error: ServiceError | null, response: NodeGroup) => void): ClientUnaryCall;
    get(request: GetNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: NodeGroup) => void): ClientUnaryCall;
    get(request: GetNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: NodeGroup) => void): ClientUnaryCall;
    /** Retrieves the list of node group in the specified Kubernetes cluster. */
    list(request: ListNodeGroupsRequest, callback: (error: ServiceError | null, response: ListNodeGroupsResponse) => void): ClientUnaryCall;
    list(request: ListNodeGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNodeGroupsResponse) => void): ClientUnaryCall;
    list(request: ListNodeGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNodeGroupsResponse) => void): ClientUnaryCall;
    /** Creates a node group in the specified Kubernetes cluster. */
    create(request: CreateNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified node group. */
    update(request: UpdateNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified node group. */
    delete(request: DeleteNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified node group. */
    listOperations(request: ListNodeGroupOperationsRequest, callback: (error: ServiceError | null, response: ListNodeGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListNodeGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNodeGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListNodeGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNodeGroupOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    listNodes(request: ListNodeGroupNodesRequest, callback: (error: ServiceError | null, response: ListNodeGroupNodesResponse) => void): ClientUnaryCall;
    listNodes(request: ListNodeGroupNodesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNodeGroupNodesResponse) => void): ClientUnaryCall;
    listNodes(request: ListNodeGroupNodesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNodeGroupNodesResponse) => void): ClientUnaryCall;
}
export declare const NodeGroupServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): NodeGroupServiceClient;
    service: typeof NodeGroupServiceService;
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
