import _m0 from "protobufjs/minimal";
import { NodeTemplate, Taint } from "../../../../yandex/cloud/k8s/v1/node";
import { VersionInfo } from "../../../../yandex/cloud/k8s/v1/version";
import { MaintenanceWindow } from "../../../../yandex/cloud/k8s/v1/maintenance";
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export interface NodeGroup {
    $type: "yandex.cloud.k8s.v1.NodeGroup";
    /** ID of the node group. */
    id: string;
    /** ID of the cluster that the node group belongs to. */
    clusterId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the node group.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the node group. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Status of the node group. */
    status: NodeGroup_Status;
    /** Node template that specifies parameters of the compute instances for the node group. */
    nodeTemplate?: NodeTemplate;
    /** Scale policy of the node group.  For more information, see [Scaling policy](/docs/compute/concepts/instance-groups/policies#scale-policy). */
    scalePolicy?: ScalePolicy;
    /** Allocation policy by which resources for node group are allocated to zones and regions. */
    allocationPolicy?: NodeGroupAllocationPolicy;
    /** Deploy policy according to which the updates are rolled out. */
    deployPolicy?: DeployPolicy;
    /** ID of the managed instance group associated with this node group. */
    instanceGroupId: string;
    /**
     * Version of Kubernetes components that runs on the nodes.
     * Deprecated. Use version_info.current_version.
     */
    nodeVersion: string;
    /** Detailed information about the Kubernetes version that is running on the node. */
    versionInfo?: VersionInfo;
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
export declare enum NodeGroup_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Node group is waiting for resources to be allocated. */
    PROVISIONING = 1,
    /** RUNNING - Node group is running. */
    RUNNING = 2,
    /** RECONCILING - Node group is waiting for some work to be done, such as upgrading node software. */
    RECONCILING = 3,
    /** STOPPING - Node group is being stopped. */
    STOPPING = 4,
    /** STOPPED - Node group stopped. */
    STOPPED = 5,
    /** DELETING - Node group is being deleted. */
    DELETING = 6,
    /** STARTING - Node group is being started. */
    STARTING = 7,
    UNRECOGNIZED = -1
}
export declare function nodeGroup_StatusFromJSON(object: any): NodeGroup_Status;
export declare function nodeGroup_StatusToJSON(object: NodeGroup_Status): string;
export interface NodeGroup_LabelsEntry {
    $type: "yandex.cloud.k8s.v1.NodeGroup.LabelsEntry";
    key: string;
    value: string;
}
export interface NodeGroup_NodeLabelsEntry {
    $type: "yandex.cloud.k8s.v1.NodeGroup.NodeLabelsEntry";
    key: string;
    value: string;
}
export interface ScalePolicy {
    $type: "yandex.cloud.k8s.v1.ScalePolicy";
    /** Fixed scale policy of the node group. */
    fixedScale?: ScalePolicy_FixedScale | undefined;
    /** Auto scale policy of the node group. */
    autoScale?: ScalePolicy_AutoScale | undefined;
}
export interface ScalePolicy_FixedScale {
    $type: "yandex.cloud.k8s.v1.ScalePolicy.FixedScale";
    /** Number of nodes in the node group. */
    size: number;
}
export interface ScalePolicy_AutoScale {
    $type: "yandex.cloud.k8s.v1.ScalePolicy.AutoScale";
    /** Minimum number of nodes in the node group. */
    minSize: number;
    /** Maximum number of nodes in the node group. */
    maxSize: number;
    /** Initial number of nodes in the node group. */
    initialSize: number;
}
export interface NodeGroupAllocationPolicy {
    $type: "yandex.cloud.k8s.v1.NodeGroupAllocationPolicy";
    /** List of locations where resources for the node group will be allocated. */
    locations: NodeGroupLocation[];
}
export interface NodeGroupLocation {
    $type: "yandex.cloud.k8s.v1.NodeGroupLocation";
    /** ID of the availability zone where the nodes may reside. */
    zoneId: string;
    /** ID of the subnet. If a network chosen for the Kubernetes cluster has only one subnet in the specified zone, subnet ID may be omitted. */
    subnetId: string;
}
export interface NodeGroupMaintenancePolicy {
    $type: "yandex.cloud.k8s.v1.NodeGroupMaintenancePolicy";
    /**
     * If set to true, automatic updates are installed in the specified period of time with no interaction from the user.
     * If set to false, automatic upgrades are disabled.
     */
    autoUpgrade: boolean;
    /** If set to true, automatic repairs are enabled. Default value is false. */
    autoRepair: boolean;
    /**
     * Maintenance window settings. Update will start at the specified time and last no more than the specified duration.
     * The time is set in UTC.
     */
    maintenanceWindow?: MaintenanceWindow;
}
export interface DeployPolicy {
    $type: "yandex.cloud.k8s.v1.DeployPolicy";
    /**
     * The maximum number of running instances that can be taken offline (i.e.,
     * stopped or deleted) at the same time during the update process.
     * If [max_expansion] is not specified or set to zero, [max_unavailable] must
     * be set to a non-zero value.
     */
    maxUnavailable: number;
    /**
     * The maximum number of instances that can be temporarily allocated above
     * the group's target size during the update process.
     * If [max_unavailable] is not specified or set to zero, [max_expansion] must
     * be set to a non-zero value.
     */
    maxExpansion: number;
}
export declare const NodeGroup: {
    $type: "yandex.cloud.k8s.v1.NodeGroup";
    encode(message: NodeGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroup;
    fromJSON(object: any): NodeGroup;
    toJSON(message: NodeGroup): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: NodeGroup_Status | undefined;
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
        status?: NodeGroup_Status | undefined;
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
        } & Record<Exclude<keyof I["versionInfo"], "$type" | "currentVersion" | "newRevisionAvailable" | "newRevisionSummary" | "versionDeprecated">, never>) | undefined;
        nodeVersion?: string | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "labels" | "allocationPolicy" | "maintenancePolicy" | "scalePolicy" | "deployPolicy" | "instanceGroupId" | "clusterId" | "versionInfo" | "nodeVersion" | "allowedUnsafeSysctls" | "nodeTemplate" | "nodeTaints" | "nodeLabels">, never>>(object: I): NodeGroup;
};
export declare const NodeGroup_LabelsEntry: {
    $type: "yandex.cloud.k8s.v1.NodeGroup.LabelsEntry";
    encode(message: NodeGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroup_LabelsEntry;
    fromJSON(object: any): NodeGroup_LabelsEntry;
    toJSON(message: NodeGroup_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): NodeGroup_LabelsEntry;
};
export declare const NodeGroup_NodeLabelsEntry: {
    $type: "yandex.cloud.k8s.v1.NodeGroup.NodeLabelsEntry";
    encode(message: NodeGroup_NodeLabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroup_NodeLabelsEntry;
    fromJSON(object: any): NodeGroup_NodeLabelsEntry;
    toJSON(message: NodeGroup_NodeLabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): NodeGroup_NodeLabelsEntry;
};
export declare const ScalePolicy: {
    $type: "yandex.cloud.k8s.v1.ScalePolicy";
    encode(message: ScalePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy;
    fromJSON(object: any): ScalePolicy;
    toJSON(message: ScalePolicy): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["fixedScale"], "$type" | "size">, never>) | undefined;
        autoScale?: ({
            maxSize?: number | undefined;
            initialSize?: number | undefined;
            minSize?: number | undefined;
        } & {
            maxSize?: number | undefined;
            initialSize?: number | undefined;
            minSize?: number | undefined;
        } & Record<Exclude<keyof I["autoScale"], "$type" | "maxSize" | "initialSize" | "minSize">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "fixedScale" | "autoScale">, never>>(object: I): ScalePolicy;
};
export declare const ScalePolicy_FixedScale: {
    $type: "yandex.cloud.k8s.v1.ScalePolicy.FixedScale";
    encode(message: ScalePolicy_FixedScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_FixedScale;
    fromJSON(object: any): ScalePolicy_FixedScale;
    toJSON(message: ScalePolicy_FixedScale): unknown;
    fromPartial<I extends {
        size?: number | undefined;
    } & {
        size?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "size">, never>>(object: I): ScalePolicy_FixedScale;
};
export declare const ScalePolicy_AutoScale: {
    $type: "yandex.cloud.k8s.v1.ScalePolicy.AutoScale";
    encode(message: ScalePolicy_AutoScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_AutoScale;
    fromJSON(object: any): ScalePolicy_AutoScale;
    toJSON(message: ScalePolicy_AutoScale): unknown;
    fromPartial<I extends {
        maxSize?: number | undefined;
        initialSize?: number | undefined;
        minSize?: number | undefined;
    } & {
        maxSize?: number | undefined;
        initialSize?: number | undefined;
        minSize?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxSize" | "initialSize" | "minSize">, never>>(object: I): ScalePolicy_AutoScale;
};
export declare const NodeGroupAllocationPolicy: {
    $type: "yandex.cloud.k8s.v1.NodeGroupAllocationPolicy";
    encode(message: NodeGroupAllocationPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroupAllocationPolicy;
    fromJSON(object: any): NodeGroupAllocationPolicy;
    toJSON(message: NodeGroupAllocationPolicy): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["locations"][number], "$type" | "subnetId" | "zoneId">, never>)[] & Record<Exclude<keyof I["locations"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "locations">, never>>(object: I): NodeGroupAllocationPolicy;
};
export declare const NodeGroupLocation: {
    $type: "yandex.cloud.k8s.v1.NodeGroupLocation";
    encode(message: NodeGroupLocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroupLocation;
    fromJSON(object: any): NodeGroupLocation;
    toJSON(message: NodeGroupLocation): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
    } & {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "zoneId">, never>>(object: I): NodeGroupLocation;
};
export declare const NodeGroupMaintenancePolicy: {
    $type: "yandex.cloud.k8s.v1.NodeGroupMaintenancePolicy";
    encode(message: NodeGroupMaintenancePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroupMaintenancePolicy;
    fromJSON(object: any): NodeGroupMaintenancePolicy;
    toJSON(message: NodeGroupMaintenancePolicy): unknown;
    fromPartial<I extends {
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
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
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
                } & Record<Exclude<keyof I["maintenanceWindow"]["dailyMaintenanceWindow"]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                duration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["maintenanceWindow"]["dailyMaintenanceWindow"]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["dailyMaintenanceWindow"], "$type" | "startTime" | "duration">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                    duration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
                } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number], "$type" | "startTime" | "duration" | "days">, never>)[] & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"], "$type" | keyof {
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
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "daysOfWeek">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "dailyMaintenanceWindow" | "weeklyMaintenanceWindow">, never>) | undefined;
        autoRepair?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "autoUpgrade" | "maintenanceWindow" | "autoRepair">, never>>(object: I): NodeGroupMaintenancePolicy;
};
export declare const DeployPolicy: {
    $type: "yandex.cloud.k8s.v1.DeployPolicy";
    encode(message: DeployPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeployPolicy;
    fromJSON(object: any): DeployPolicy;
    toJSON(message: DeployPolicy): unknown;
    fromPartial<I extends {
        maxUnavailable?: number | undefined;
        maxExpansion?: number | undefined;
    } & {
        maxUnavailable?: number | undefined;
        maxExpansion?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxUnavailable" | "maxExpansion">, never>>(object: I): DeployPolicy;
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
