import _m0 from "protobufjs/minimal";
import { VersionInfo } from "../../../../yandex/cloud/k8s/v1/version";
import { MaintenanceWindow } from "../../../../yandex/cloud/k8s/v1/maintenance";
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export declare enum ReleaseChannel {
    RELEASE_CHANNEL_UNSPECIFIED = 0,
    /**
     * RAPID - Minor updates with new functions and improvements are often added.
     * You can't disable automatic updates in this channel, but you can specify a time period for automatic updates.
     */
    RAPID = 1,
    /** REGULAR - New functions and improvements are added in chunks shortly after they appear on `RAPID`. */
    REGULAR = 2,
    /** STABLE - Only updates related to bug fixes or security improvements are added. */
    STABLE = 3,
    UNRECOGNIZED = -1
}
export declare function releaseChannelFromJSON(object: any): ReleaseChannel;
export declare function releaseChannelToJSON(object: ReleaseChannel): string;
/** A Kubernetes cluster. */
export interface Cluster {
    $type: "yandex.cloud.k8s.v1.Cluster";
    /** ID of the Kubernetes cluster. */
    id: string;
    /** ID of the folder that the Kubernetes cluster belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the Kubernetes cluster. */
    name: string;
    /** Description of the Kubernetes cluster. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Status of the Kubernetes cluster. */
    status: Cluster_Status;
    /** Health of the Kubernetes cluster. */
    health: Cluster_Health;
    /** ID of the network the Kubernetes cluster belongs to. */
    networkId: string;
    /** Properties of the master for the Kubernetes cluster. */
    master?: Master;
    /** Allocation policy for IP addresses of services and pods inside the Kubernetes cluster in different availability zones. */
    ipAllocationPolicy?: IPAllocationPolicy;
    /** Gateway IPv4 address. */
    gatewayIpv4Address: string | undefined;
    /** Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster. */
    serviceAccountId: string;
    /** Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry or to push node logs and metrics. */
    nodeServiceAccountId: string;
    /**
     * When creating a Kubernetes cluster, you should specify one of three release channels. The release channel contains several Kubernetes versions.
     * Channels differ in the set of available versions, the management of auto-updates, and the updates received.
     * You can't change the channel once the Kubernetes cluster is created, you can only recreate the Kubernetes cluster and specify a new release channel.
     * For more details see [documentation](https://cloud.yandex.com/docs/managed-kubernetes/concepts/release-channels-and-updates).
     */
    releaseChannel: ReleaseChannel;
    networkPolicy?: NetworkPolicy;
    /** KMS provider configuration. */
    kmsProvider?: KMSProvider;
    /** Log group where cluster stores cluster system logs, like audit, events, or controlplane logs. */
    logGroupId: string;
    cilium?: Cilium | undefined;
}
export declare enum Cluster_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Kubernetes cluster is waiting for resources to be allocated. */
    PROVISIONING = 1,
    /** RUNNING - Kubernetes cluster is running. */
    RUNNING = 2,
    /** RECONCILING - Kubernetes cluster is being reconciled. */
    RECONCILING = 3,
    /** STOPPING - Kubernetes cluster is being stopped. */
    STOPPING = 4,
    /** STOPPED - Kubernetes cluster stopped. */
    STOPPED = 5,
    /** DELETING - Kubernetes cluster is being deleted. */
    DELETING = 6,
    /** STARTING - Kubernetes cluster is being started. */
    STARTING = 7,
    UNRECOGNIZED = -1
}
export declare function cluster_StatusFromJSON(object: any): Cluster_Status;
export declare function cluster_StatusToJSON(object: Cluster_Status): string;
export declare enum Cluster_Health {
    HEALTH_UNSPECIFIED = 0,
    /** HEALTHY - Kubernetes cluster is alive and well. */
    HEALTHY = 1,
    /** UNHEALTHY - Kubernetes cluster is inoperable. */
    UNHEALTHY = 2,
    UNRECOGNIZED = -1
}
export declare function cluster_HealthFromJSON(object: any): Cluster_Health;
export declare function cluster_HealthToJSON(object: Cluster_Health): string;
export interface Cluster_LabelsEntry {
    $type: "yandex.cloud.k8s.v1.Cluster.LabelsEntry";
    key: string;
    value: string;
}
export interface Master {
    $type: "yandex.cloud.k8s.v1.Master";
    /** Parameters of the availability zone for the master. */
    zonalMaster?: ZonalMaster | undefined;
    /** Parameters of the region for the master. */
    regionalMaster?: RegionalMaster | undefined;
    /** Locations specification for Kubernetes control-plane (master) instances. */
    locations: Location[];
    /** Number of etcd nodes in cluster. */
    etcdClusterSize: number;
    /** Version of Kubernetes components that runs on the master. */
    version: string;
    /**
     * Endpoints of the master. Endpoints constitute of scheme and port (i.e. `https://ip-address:port`)
     * and can be used by the clients to communicate with the Kubernetes API of the Kubernetes cluster.
     */
    endpoints?: MasterEndpoints;
    /** Master authentication parameters are used to establish trust between the master and a client. */
    masterAuth?: MasterAuth;
    /** Detailed information about the Kubernetes version that is running on the master. */
    versionInfo?: VersionInfo;
    /** Maintenance policy of the master. */
    maintenancePolicy?: MasterMaintenancePolicy;
    /** Master security groups. */
    securityGroupIds: string[];
    /** Cloud Logging for master components. */
    masterLogging?: MasterLogging;
}
export interface MasterAuth {
    $type: "yandex.cloud.k8s.v1.MasterAuth";
    /** PEM-encoded public certificate that is the root of trust for the Kubernetes cluster. */
    clusterCaCertificate: string;
}
export interface ZonalMaster {
    $type: "yandex.cloud.k8s.v1.ZonalMaster";
    /** ID of the availability zone where the master resides. */
    zoneId: string;
    /** IPv4 internal network address that is assigned to the master. */
    internalV4Address: string;
    /** IPv4 external network address that is assigned to the master. */
    externalV4Address: string;
}
export interface RegionalMaster {
    $type: "yandex.cloud.k8s.v1.RegionalMaster";
    /** ID of the region where the master resides. */
    regionId: string;
    /** IPv4 internal network address that is assigned to the master. */
    internalV4Address: string;
    /** IPv4 external network address that is assigned to the master. */
    externalV4Address: string;
    /** IPv6 external network address that is assigned to the master. */
    externalV6Address: string;
}
export interface Location {
    $type: "yandex.cloud.k8s.v1.Location";
    /** ID of the availability zone where the master resides. */
    zoneId: string;
    /** ID of the VPC network's subnet where the master resides. */
    subnetId: string;
}
export interface MasterEndpoints {
    $type: "yandex.cloud.k8s.v1.MasterEndpoints";
    /** Internal endpoint that can be used to connect to the master from cloud networks. */
    internalV4Endpoint: string;
    /** External endpoint that can be used to access Kubernetes cluster API from the internet (outside of the cloud). */
    externalV4Endpoint: string;
    /** External IPv6 endpoint that can be used to access Kubernetes cluster API from the internet (outside of the cloud). */
    externalV6Endpoint: string;
}
export interface IPAllocationPolicy {
    $type: "yandex.cloud.k8s.v1.IPAllocationPolicy";
    /**
     * CIDR block. IP range for allocating pod addresses.
     *
     * It should not overlap with any subnet in the network the Kubernetes cluster located in. Static routes will be
     * set up for this CIDR blocks in node subnets.
     */
    clusterIpv4CidrBlock: string;
    /**
     * Size of the masks that are assigned for each node in the cluster.
     *
     * If not specified, 24 is used.
     */
    nodeIpv4CidrMaskSize: number;
    /**
     * CIDR block. IP range Kubernetes service Kubernetes cluster IP addresses will be allocated from.
     *
     * It should not overlap with any subnet in the network the Kubernetes cluster located in.
     */
    serviceIpv4CidrBlock: string;
    /** IPv6 range for allocating pod IP addresses. */
    clusterIpv6CidrBlock: string;
    /** IPv6 range for allocating Kubernetes service IP addresses */
    serviceIpv6CidrBlock: string;
}
export interface MasterMaintenancePolicy {
    $type: "yandex.cloud.k8s.v1.MasterMaintenancePolicy";
    /**
     * If set to true, automatic updates are installed in the specified period of time with no interaction from the user.
     * If set to false, automatic upgrades are disabled.
     */
    autoUpgrade: boolean;
    /**
     * Maintenance window settings. Update will start at the specified time and last no more than the specified duration.
     * The time is set in UTC.
     */
    maintenanceWindow?: MaintenanceWindow;
}
export interface MasterLogging {
    $type: "yandex.cloud.k8s.v1.MasterLogging";
    /** Identifies whether Cloud Logging is enabled for master components. */
    enabled: boolean;
    /** ID of the log group where logs of master components should be stored. */
    logGroupId: string | undefined;
    /** ID of the folder where logs should be stored (in default group). */
    folderId: string | undefined;
    /** Identifies whether Cloud Logging is enabled for audit logs. */
    auditEnabled: boolean;
    /** Identifies whether Cloud Logging is enabled for cluster-autoscaler. */
    clusterAutoscalerEnabled: boolean;
    /** Identifies whether Cloud Logging is enabled for kube-apiserver. */
    kubeApiserverEnabled: boolean;
    /** Identifies whether Cloud Logging is enabled for events. */
    eventsEnabled: boolean;
}
export interface NetworkPolicy {
    $type: "yandex.cloud.k8s.v1.NetworkPolicy";
    provider: NetworkPolicy_Provider;
}
export declare enum NetworkPolicy_Provider {
    PROVIDER_UNSPECIFIED = 0,
    CALICO = 1,
    UNRECOGNIZED = -1
}
export declare function networkPolicy_ProviderFromJSON(object: any): NetworkPolicy_Provider;
export declare function networkPolicy_ProviderToJSON(object: NetworkPolicy_Provider): string;
export interface KMSProvider {
    $type: "yandex.cloud.k8s.v1.KMSProvider";
    /**
     * KMS key ID for secrets encryption.
     * To obtain a KMS key ID use a [yandex.cloud.kms.v1.SymmetricKeyService.List] request.
     */
    keyId: string;
}
export interface Cilium {
    $type: "yandex.cloud.k8s.v1.Cilium";
    routingMode: Cilium_RoutingMode;
}
export declare enum Cilium_RoutingMode {
    ROUTING_MODE_UNSPECIFIED = 0,
    TUNNEL = 1,
    UNRECOGNIZED = -1
}
export declare function cilium_RoutingModeFromJSON(object: any): Cilium_RoutingMode;
export declare function cilium_RoutingModeToJSON(object: Cilium_RoutingMode): string;
export declare const Cluster: {
    $type: "yandex.cloud.k8s.v1.Cluster";
    encode(message: Cluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster;
    fromJSON(object: any): Cluster;
    toJSON(message: Cluster): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Cluster_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        logGroupId?: string | undefined;
        networkId?: string | undefined;
        serviceAccountId?: string | undefined;
        health?: Cluster_Health | undefined;
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
            provider?: NetworkPolicy_Provider | undefined;
        } | undefined;
        kmsProvider?: {
            keyId?: string | undefined;
        } | undefined;
        cilium?: {
            routingMode?: Cilium_RoutingMode | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Cluster_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        logGroupId?: string | undefined;
        networkId?: string | undefined;
        serviceAccountId?: string | undefined;
        health?: Cluster_Health | undefined;
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
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["master"]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            endpoints?: ({
                internalV4Endpoint?: string | undefined;
                externalV4Endpoint?: string | undefined;
                externalV6Endpoint?: string | undefined;
            } & {
                internalV4Endpoint?: string | undefined;
                externalV4Endpoint?: string | undefined;
                externalV6Endpoint?: string | undefined;
            } & Record<Exclude<keyof I["master"]["endpoints"], "$type" | "internalV4Endpoint" | "externalV4Endpoint" | "externalV6Endpoint">, never>) | undefined;
            locations?: ({
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            }[] & ({
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            } & {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
            } & Record<Exclude<keyof I["master"]["locations"][number], "$type" | "subnetId" | "zoneId">, never>)[] & Record<Exclude<keyof I["master"]["locations"], "$type" | keyof {
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
                    anytime?: ({} & {} & Record<Exclude<keyof I["master"]["maintenancePolicy"]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["master"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                        duration?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["master"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["master"]["maintenancePolicy"]["maintenanceWindow"]["dailyMaintenanceWindow"], "$type" | "startTime" | "duration">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                            duration?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            days?: (import("../../../../google/type/dayofweek").DayOfWeek[] & import("../../../../google/type/dayofweek").DayOfWeek[] & Record<Exclude<keyof I["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number]["days"], "$type" | keyof import("../../../../google/type/dayofweek").DayOfWeek[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"][number], "$type" | "startTime" | "duration" | "days">, never>)[] & Record<Exclude<keyof I["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"]["daysOfWeek"], "$type" | keyof {
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
                    } & Record<Exclude<keyof I["master"]["maintenancePolicy"]["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "daysOfWeek">, never>) | undefined;
                } & Record<Exclude<keyof I["master"]["maintenancePolicy"]["maintenanceWindow"], "$type" | "anytime" | "dailyMaintenanceWindow" | "weeklyMaintenanceWindow">, never>) | undefined;
            } & Record<Exclude<keyof I["master"]["maintenancePolicy"], "$type" | "autoUpgrade" | "maintenanceWindow">, never>) | undefined;
            version?: string | undefined;
            zonalMaster?: ({
                zoneId?: string | undefined;
                internalV4Address?: string | undefined;
                externalV4Address?: string | undefined;
            } & {
                zoneId?: string | undefined;
                internalV4Address?: string | undefined;
                externalV4Address?: string | undefined;
            } & Record<Exclude<keyof I["master"]["zonalMaster"], "$type" | "zoneId" | "internalV4Address" | "externalV4Address">, never>) | undefined;
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
            } & Record<Exclude<keyof I["master"]["regionalMaster"], "$type" | "regionId" | "internalV4Address" | "externalV4Address" | "externalV6Address">, never>) | undefined;
            etcdClusterSize?: number | undefined;
            masterAuth?: ({
                clusterCaCertificate?: string | undefined;
            } & {
                clusterCaCertificate?: string | undefined;
            } & Record<Exclude<keyof I["master"]["masterAuth"], "$type" | "clusterCaCertificate">, never>) | undefined;
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
            } & Record<Exclude<keyof I["master"]["versionInfo"], "$type" | "currentVersion" | "newRevisionAvailable" | "newRevisionSummary" | "versionDeprecated">, never>) | undefined;
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
            } & Record<Exclude<keyof I["master"]["masterLogging"], "$type" | "folderId" | "logGroupId" | "enabled" | "auditEnabled" | "clusterAutoscalerEnabled" | "kubeApiserverEnabled" | "eventsEnabled">, never>) | undefined;
        } & Record<Exclude<keyof I["master"], "$type" | "securityGroupIds" | "endpoints" | "locations" | "maintenancePolicy" | "version" | "zonalMaster" | "regionalMaster" | "etcdClusterSize" | "masterAuth" | "versionInfo" | "masterLogging">, never>) | undefined;
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
            provider?: NetworkPolicy_Provider | undefined;
        } & {
            provider?: NetworkPolicy_Provider | undefined;
        } & Record<Exclude<keyof I["networkPolicy"], "$type" | "provider">, never>) | undefined;
        kmsProvider?: ({
            keyId?: string | undefined;
        } & {
            keyId?: string | undefined;
        } & Record<Exclude<keyof I["kmsProvider"], "$type" | "keyId">, never>) | undefined;
        cilium?: ({
            routingMode?: Cilium_RoutingMode | undefined;
        } & {
            routingMode?: Cilium_RoutingMode | undefined;
        } & Record<Exclude<keyof I["cilium"], "$type" | "routingMode">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "logGroupId" | "networkId" | "serviceAccountId" | "health" | "nodeServiceAccountId" | "releaseChannel" | "master" | "ipAllocationPolicy" | "gatewayIpv4Address" | "networkPolicy" | "kmsProvider" | "cilium">, never>>(object: I): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.k8s.v1.Cluster.LabelsEntry";
    encode(message: Cluster_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster_LabelsEntry;
    fromJSON(object: any): Cluster_LabelsEntry;
    toJSON(message: Cluster_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Cluster_LabelsEntry;
};
export declare const Master: {
    $type: "yandex.cloud.k8s.v1.Master";
    encode(message: Master, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Master;
    fromJSON(object: any): Master;
    toJSON(message: Master): unknown;
    fromPartial<I extends {
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
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        endpoints?: ({
            internalV4Endpoint?: string | undefined;
            externalV4Endpoint?: string | undefined;
            externalV6Endpoint?: string | undefined;
        } & {
            internalV4Endpoint?: string | undefined;
            externalV4Endpoint?: string | undefined;
            externalV6Endpoint?: string | undefined;
        } & Record<Exclude<keyof I["endpoints"], "$type" | "internalV4Endpoint" | "externalV4Endpoint" | "externalV6Endpoint">, never>) | undefined;
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
        zonalMaster?: ({
            zoneId?: string | undefined;
            internalV4Address?: string | undefined;
            externalV4Address?: string | undefined;
        } & {
            zoneId?: string | undefined;
            internalV4Address?: string | undefined;
            externalV4Address?: string | undefined;
        } & Record<Exclude<keyof I["zonalMaster"], "$type" | "zoneId" | "internalV4Address" | "externalV4Address">, never>) | undefined;
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
        } & Record<Exclude<keyof I["regionalMaster"], "$type" | "regionId" | "internalV4Address" | "externalV4Address" | "externalV6Address">, never>) | undefined;
        etcdClusterSize?: number | undefined;
        masterAuth?: ({
            clusterCaCertificate?: string | undefined;
        } & {
            clusterCaCertificate?: string | undefined;
        } & Record<Exclude<keyof I["masterAuth"], "$type" | "clusterCaCertificate">, never>) | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "securityGroupIds" | "endpoints" | "locations" | "maintenancePolicy" | "version" | "zonalMaster" | "regionalMaster" | "etcdClusterSize" | "masterAuth" | "versionInfo" | "masterLogging">, never>>(object: I): Master;
};
export declare const MasterAuth: {
    $type: "yandex.cloud.k8s.v1.MasterAuth";
    encode(message: MasterAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterAuth;
    fromJSON(object: any): MasterAuth;
    toJSON(message: MasterAuth): unknown;
    fromPartial<I extends {
        clusterCaCertificate?: string | undefined;
    } & {
        clusterCaCertificate?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterCaCertificate">, never>>(object: I): MasterAuth;
};
export declare const ZonalMaster: {
    $type: "yandex.cloud.k8s.v1.ZonalMaster";
    encode(message: ZonalMaster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ZonalMaster;
    fromJSON(object: any): ZonalMaster;
    toJSON(message: ZonalMaster): unknown;
    fromPartial<I extends {
        zoneId?: string | undefined;
        internalV4Address?: string | undefined;
        externalV4Address?: string | undefined;
    } & {
        zoneId?: string | undefined;
        internalV4Address?: string | undefined;
        externalV4Address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "zoneId" | "internalV4Address" | "externalV4Address">, never>>(object: I): ZonalMaster;
};
export declare const RegionalMaster: {
    $type: "yandex.cloud.k8s.v1.RegionalMaster";
    encode(message: RegionalMaster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegionalMaster;
    fromJSON(object: any): RegionalMaster;
    toJSON(message: RegionalMaster): unknown;
    fromPartial<I extends {
        regionId?: string | undefined;
        internalV4Address?: string | undefined;
        externalV4Address?: string | undefined;
        externalV6Address?: string | undefined;
    } & {
        regionId?: string | undefined;
        internalV4Address?: string | undefined;
        externalV4Address?: string | undefined;
        externalV6Address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "regionId" | "internalV4Address" | "externalV4Address" | "externalV6Address">, never>>(object: I): RegionalMaster;
};
export declare const Location: {
    $type: "yandex.cloud.k8s.v1.Location";
    encode(message: Location, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Location;
    fromJSON(object: any): Location;
    toJSON(message: Location): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
    } & {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "zoneId">, never>>(object: I): Location;
};
export declare const MasterEndpoints: {
    $type: "yandex.cloud.k8s.v1.MasterEndpoints";
    encode(message: MasterEndpoints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterEndpoints;
    fromJSON(object: any): MasterEndpoints;
    toJSON(message: MasterEndpoints): unknown;
    fromPartial<I extends {
        internalV4Endpoint?: string | undefined;
        externalV4Endpoint?: string | undefined;
        externalV6Endpoint?: string | undefined;
    } & {
        internalV4Endpoint?: string | undefined;
        externalV4Endpoint?: string | undefined;
        externalV6Endpoint?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "internalV4Endpoint" | "externalV4Endpoint" | "externalV6Endpoint">, never>>(object: I): MasterEndpoints;
};
export declare const IPAllocationPolicy: {
    $type: "yandex.cloud.k8s.v1.IPAllocationPolicy";
    encode(message: IPAllocationPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IPAllocationPolicy;
    fromJSON(object: any): IPAllocationPolicy;
    toJSON(message: IPAllocationPolicy): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, "$type" | "clusterIpv4CidrBlock" | "nodeIpv4CidrMaskSize" | "serviceIpv4CidrBlock" | "clusterIpv6CidrBlock" | "serviceIpv6CidrBlock">, never>>(object: I): IPAllocationPolicy;
};
export declare const MasterMaintenancePolicy: {
    $type: "yandex.cloud.k8s.v1.MasterMaintenancePolicy";
    encode(message: MasterMaintenancePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterMaintenancePolicy;
    fromJSON(object: any): MasterMaintenancePolicy;
    toJSON(message: MasterMaintenancePolicy): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "autoUpgrade" | "maintenanceWindow">, never>>(object: I): MasterMaintenancePolicy;
};
export declare const MasterLogging: {
    $type: "yandex.cloud.k8s.v1.MasterLogging";
    encode(message: MasterLogging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterLogging;
    fromJSON(object: any): MasterLogging;
    toJSON(message: MasterLogging): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, "$type" | "folderId" | "logGroupId" | "enabled" | "auditEnabled" | "clusterAutoscalerEnabled" | "kubeApiserverEnabled" | "eventsEnabled">, never>>(object: I): MasterLogging;
};
export declare const NetworkPolicy: {
    $type: "yandex.cloud.k8s.v1.NetworkPolicy";
    encode(message: NetworkPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkPolicy;
    fromJSON(object: any): NetworkPolicy;
    toJSON(message: NetworkPolicy): unknown;
    fromPartial<I extends {
        provider?: NetworkPolicy_Provider | undefined;
    } & {
        provider?: NetworkPolicy_Provider | undefined;
    } & Record<Exclude<keyof I, "$type" | "provider">, never>>(object: I): NetworkPolicy;
};
export declare const KMSProvider: {
    $type: "yandex.cloud.k8s.v1.KMSProvider";
    encode(message: KMSProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KMSProvider;
    fromJSON(object: any): KMSProvider;
    toJSON(message: KMSProvider): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): KMSProvider;
};
export declare const Cilium: {
    $type: "yandex.cloud.k8s.v1.Cilium";
    encode(message: Cilium, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cilium;
    fromJSON(object: any): Cilium;
    toJSON(message: Cilium): unknown;
    fromPartial<I extends {
        routingMode?: Cilium_RoutingMode | undefined;
    } & {
        routingMode?: Cilium_RoutingMode | undefined;
    } & Record<Exclude<keyof I, "$type" | "routingMode">, never>>(object: I): Cilium;
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
