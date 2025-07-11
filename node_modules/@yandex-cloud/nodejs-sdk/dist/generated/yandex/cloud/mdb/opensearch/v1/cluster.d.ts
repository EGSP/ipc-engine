import _m0 from "protobufjs/minimal";
import { MaintenanceWindow, MaintenanceOperation } from "../../../../../yandex/cloud/mdb/opensearch/v1/maintenance";
import { OpenSearchConfigSet2 } from "../../../../../yandex/cloud/mdb/opensearch/v1/config/opensearch";
export declare const protobufPackage = "yandex.cloud.mdb.opensearch.v1";
/** An OpenSearch cluster resource. */
export interface Cluster {
    $type: "yandex.cloud.mdb.opensearch.v1.Cluster";
    /**
     * ID of the OpenSearch cluster.
     * This ID is assigned by the platform at the moment of cluster creation.
     */
    id: string;
    /** ID of the folder that the OpenSearch cluster belongs to. */
    folderId: string;
    /** Time when the cluster was created. */
    createdAt?: Date;
    /**
     * Name of the OpenSearch cluster.
     * The name is unique within the folder. 1-63 characters long.
     */
    name: string;
    /** Description of the OpenSearch cluster. 0-256 characters long. */
    description: string;
    /**
     * Custom labels for the OpenSearch cluster as `key:value` pairs.
     * Maximum 64 labels per resource.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the OpenSearch cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the OpenSearch cluster. */
    monitoring: Monitoring[];
    /** Configuration of the OpenSearch cluster. */
    config?: ClusterConfig;
    /** ID of the cloud network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** User security groups. */
    securityGroupIds: string[];
    /** ID of the service account used to access Object Storage. */
    serviceAccountId: string;
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** Cluster maintenance window. Should be defined by either one of the two options. */
    maintenanceWindow?: MaintenanceWindow;
    /** Maintenance operation planned at nearest [maintenance_window]. */
    plannedOperation?: MaintenanceOperation;
}
export declare enum Cluster_Environment {
    ENVIRONMENT_UNSPECIFIED = 0,
    /**
     * PRODUCTION - Stable environment with a conservative update policy:
     * only hotfixes are applied during regular maintenance.
     */
    PRODUCTION = 1,
    /**
     * PRESTABLE - Environment with more aggressive update policy: new versions
     * are rolled out irrespective of backward compatibility.
     */
    PRESTABLE = 2,
    UNRECOGNIZED = -1
}
export declare function cluster_EnvironmentFromJSON(object: any): Cluster_Environment;
export declare function cluster_EnvironmentToJSON(object: Cluster_Environment): string;
export declare enum Cluster_Health {
    /** HEALTH_UNKNOWN - Health of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is working normally ([Host.health] for every host in the cluster is ALIVE). */
    ALIVE = 1,
    /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
    DEAD = 2,
    /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function cluster_HealthFromJSON(object: any): Cluster_Health;
export declare function cluster_HealthToJSON(object: Cluster_Health): string;
/** Current state of the cluster. */
export declare enum Cluster_Status {
    /** STATUS_UNKNOWN - Cluster state is unknown. */
    STATUS_UNKNOWN = 0,
    /** CREATING - Cluster is being created. */
    CREATING = 1,
    /** RUNNING - Cluster is running normally. */
    RUNNING = 2,
    /** ERROR - Cluster has encountered a problem and cannot operate. */
    ERROR = 3,
    /** UPDATING - Cluster is being updated. */
    UPDATING = 4,
    /** STOPPING - Cluster is stopping. */
    STOPPING = 5,
    /** STOPPED - Cluster has stopped. */
    STOPPED = 6,
    /** STARTING - Cluster is starting. */
    STARTING = 7,
    UNRECOGNIZED = -1
}
export declare function cluster_StatusFromJSON(object: any): Cluster_Status;
export declare function cluster_StatusToJSON(object: Cluster_Status): string;
export interface Cluster_LabelsEntry {
    $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry";
    key: string;
    value: string;
}
/** Monitoring system metadata. */
export interface Monitoring {
    $type: "yandex.cloud.mdb.opensearch.v1.Monitoring";
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the OpenSearch cluster. */
    link: string;
}
/** The OpenSearch cluster configuration. */
export interface ClusterConfig {
    $type: "yandex.cloud.mdb.opensearch.v1.ClusterConfig";
    /** Version of the OpenSearch server software. */
    version: string;
    /** OpenSearch configuration. */
    opensearch?: OpenSearch;
    /** Dashboards configuration. */
    dashboards?: Dashboards;
    /** Access policy for external services. */
    access?: Access;
}
/** The OpenSearch host group type configuration. */
export interface OpenSearch {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch";
    /** Names of the cluster plugins. */
    plugins: string[];
    /** Host groups of the OpenSearch type. */
    nodeGroups: OpenSearch_NodeGroup[];
    opensearchConfigSet2?: OpenSearchConfigSet2 | undefined;
}
export declare enum OpenSearch_GroupRole {
    GROUP_ROLE_UNSPECIFIED = 0,
    DATA = 1,
    MANAGER = 2,
    UNRECOGNIZED = -1
}
export declare function openSearch_GroupRoleFromJSON(object: any): OpenSearch_GroupRole;
export declare function openSearch_GroupRoleToJSON(object: OpenSearch_GroupRole): string;
/** Configuration of the host group. */
export interface OpenSearch_NodeGroup {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch.NodeGroup";
    /** Name of the group. Must be 1-63 characters long. */
    name: string;
    /** Resources allocated to the hosts. */
    resources?: Resources;
    /** Number of hosts in the group. */
    hostsCount: number;
    /** IDs of the availability zones the hosts belong to. */
    zoneIds: string[];
    /** IDs of the subnets that the hosts belong to. */
    subnetIds: string[];
    /** Determines whether a public IP is assigned to the hosts in the group. */
    assignPublicIp: boolean;
    /** Roles of the host group. */
    roles: OpenSearch_GroupRole[];
}
/** The Dashboards host group type configuration. */
export interface Dashboards {
    $type: "yandex.cloud.mdb.opensearch.v1.Dashboards";
    /** Host groups of the Dashboards type. */
    nodeGroups: Dashboards_NodeGroup[];
}
export interface Dashboards_NodeGroup {
    $type: "yandex.cloud.mdb.opensearch.v1.Dashboards.NodeGroup";
    /** Name of the group. 1-63 characters long. */
    name: string;
    /** Resources allocated to the hosts. */
    resources?: Resources;
    /** Number of hosts in the group. */
    hostsCount: number;
    /** IDs of the availability zones the hosts belong to. */
    zoneIds: string[];
    /** IDs of the subnets that the hosts belong to. */
    subnetIds: string[];
    /** Determines whether a public IP is assigned to the hosts in the group. */
    assignPublicIp: boolean;
}
/** A list of computational resources allocated to a host. */
export interface Resources {
    $type: "yandex.cloud.mdb.opensearch.v1.Resources";
    /** ID of the preset for computational resources allocated to a host. */
    resourcePresetId: string;
    /** Volume of the storage used by the host, in bytes. */
    diskSize: number;
    /** Type of the storage used by the host: `network-hdd`, `network-ssd` or `local-ssd`. */
    diskTypeId: string;
}
/** An OpenSearch cluster host resource. */
export interface Host {
    $type: "yandex.cloud.mdb.opensearch.v1.Host";
    /**
     * Required. Name of the OpenSearch host.
     *
     * The host name is assigned by the platform at creation time and cannot be changed.
     *
     * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
     */
    name: string;
    /** Required. ID of the OpenSearch cluster. The ID is assigned by the platform at creation time. */
    clusterId: string;
    /** ID of the availability zone the OpenSearch host belongs to. */
    zoneId: string;
    /** Resources allocated to the OpenSearch host. */
    resources?: Resources;
    /** Type of the host. */
    type: Host_Type;
    /** Status code of the aggregated health of the host. */
    health: Host_Health;
    /** ID of the subnet that the host belongs to. */
    subnetId: string;
    /** Determines whether a public IP is assigned to the host. */
    assignPublicIp: boolean;
    /** Resources used by the host. */
    system?: Host_SystemMetrics;
    /** Name of the host group that the host belongs to. */
    nodeGroup: string;
    /** Roles of the host. */
    roles: OpenSearch_GroupRole[];
}
export declare enum Host_Health {
    /** UNKNOWN - Health of the host is unknown. */
    UNKNOWN = 0,
    /** ALIVE - The host is performing all its functions normally. */
    ALIVE = 1,
    /** DEAD - The host is inoperable and cannot perform any of its essential functions. */
    DEAD = 2,
    /** DEGRADED - The host is working below capacity or not fully functional. */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function host_HealthFromJSON(object: any): Host_Health;
export declare function host_HealthToJSON(object: Host_Health): string;
export declare enum Host_Type {
    /** TYPE_UNSPECIFIED - The type is not specified. */
    TYPE_UNSPECIFIED = 0,
    /** OPENSEARCH - An OpenSearch type host. */
    OPENSEARCH = 1,
    /** DASHBOARDS - A Dashboards type host. */
    DASHBOARDS = 2,
    UNRECOGNIZED = -1
}
export declare function host_TypeFromJSON(object: any): Host_Type;
export declare function host_TypeToJSON(object: Host_Type): string;
/** CPU usage of the host. */
export interface Host_CPUMetric {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.CPUMetric";
    /** Time of the record. */
    timestamp: number;
    /** Percentage of the CPU used. */
    used: number;
}
/** RAM usage of the host. */
export interface Host_MemoryMetric {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.MemoryMetric";
    /** Time of the record. */
    timestamp: number;
    /** The amount of RAM used, in bytes. */
    used: number;
    /** Total amount of RAM allocated to the host. */
    total: number;
}
/** Disk usage of the host. */
export interface Host_DiskMetric {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.DiskMetric";
    /** Time of the record. */
    timestamp: number;
    /** The amount of disk space used, in bytes. */
    used: number;
    /** Total amount of disk space allocated to the host. */
    total: number;
}
/** Resources used by the host. */
export interface Host_SystemMetrics {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.SystemMetrics";
    /** CPU usage of the host. */
    cpu?: Host_CPUMetric;
    /** RAM usage of the host. */
    memory?: Host_MemoryMetric;
    /** Disk usage of the host. */
    disk?: Host_DiskMetric;
}
/** Access policy for external services. */
export interface Access {
    $type: "yandex.cloud.mdb.opensearch.v1.Access";
    /** Determines whether the access to Data Transfer is allowed. */
    dataTransfer: boolean;
    /** Determines whether the access to Serverless is allowed. */
    serverless: boolean;
}
export declare const Cluster: {
    $type: "yandex.cloud.mdb.opensearch.v1.Cluster";
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
        config?: {
            version?: string | undefined;
            access?: {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            opensearch?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] | undefined;
                plugins?: string[] | undefined;
                opensearchConfigSet2?: {
                    effectiveConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            dashboards?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        networkId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        health?: Cluster_Health | undefined;
        monitoring?: {
            link?: string | undefined;
            description?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        plannedOperation?: {
            info?: string | undefined;
            delayedUntil?: Date | undefined;
            latestMaintenanceTime?: Date | undefined;
            nextMaintenanceWindowTime?: Date | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Cluster_Status | undefined;
        config?: ({
            version?: string | undefined;
            access?: {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            opensearch?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] | undefined;
                plugins?: string[] | undefined;
                opensearchConfigSet2?: {
                    effectiveConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            dashboards?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            version?: string | undefined;
            access?: ({
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["config"]["access"], "$type" | "serverless" | "dataTransfer">, never>) | undefined;
            opensearch?: ({
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] | undefined;
                plugins?: string[] | undefined;
                opensearchConfigSet2?: {
                    effectiveConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                nodeGroups?: ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] & ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                } & {
                    name?: string | undefined;
                    resources?: ({
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & Record<Exclude<keyof I["config"]["opensearch"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    zoneIds?: (string[] & string[] & Record<Exclude<keyof I["config"]["opensearch"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                    subnetIds?: (string[] & string[] & Record<Exclude<keyof I["config"]["opensearch"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["config"]["opensearch"]["nodeGroups"][number]["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["opensearch"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp" | "roles">, never>)[] & Record<Exclude<keyof I["config"]["opensearch"]["nodeGroups"], "$type" | keyof {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[]>, never>) | undefined;
                plugins?: (string[] & string[] & Record<Exclude<keyof I["config"]["opensearch"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
                opensearchConfigSet2?: ({
                    effectiveConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["opensearch"]["opensearchConfigSet2"]["effectiveConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
                    userConfig?: ({
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["opensearch"]["opensearchConfigSet2"]["userConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
                    defaultConfig?: ({
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["opensearch"]["opensearchConfigSet2"]["defaultConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["opensearch"]["opensearchConfigSet2"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["opensearch"], "$type" | "nodeGroups" | "plugins" | "opensearchConfigSet2">, never>) | undefined;
            dashboards?: ({
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] | undefined;
            } & {
                nodeGroups?: ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] & ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                } & {
                    name?: string | undefined;
                    resources?: ({
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & Record<Exclude<keyof I["config"]["dashboards"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    zoneIds?: (string[] & string[] & Record<Exclude<keyof I["config"]["dashboards"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                    subnetIds?: (string[] & string[] & Record<Exclude<keyof I["config"]["dashboards"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["dashboards"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["config"]["dashboards"]["nodeGroups"], "$type" | keyof {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["dashboards"], "$type" | "nodeGroups">, never>) | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "version" | "access" | "opensearch" | "dashboards">, never>) | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        networkId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        health?: Cluster_Health | undefined;
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
        } & Record<Exclude<keyof I["monitoring"][number], "$type" | "link" | "description" | "name">, never>)[] & Record<Exclude<keyof I["monitoring"], "$type" | keyof {
            link?: string | undefined;
            description?: string | undefined;
            name?: string | undefined;
        }[]>, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        plannedOperation?: ({
            info?: string | undefined;
            delayedUntil?: Date | undefined;
            latestMaintenanceTime?: Date | undefined;
            nextMaintenanceWindowTime?: Date | undefined;
        } & {
            info?: string | undefined;
            delayedUntil?: Date | undefined;
            latestMaintenanceTime?: Date | undefined;
            nextMaintenanceWindowTime?: Date | undefined;
        } & Record<Exclude<keyof I["plannedOperation"], "$type" | "info" | "delayedUntil" | "latestMaintenanceTime" | "nextMaintenanceWindowTime">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "health" | "monitoring" | "maintenanceWindow" | "environment" | "plannedOperation">, never>>(object: I): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry";
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
export declare const Monitoring: {
    $type: "yandex.cloud.mdb.opensearch.v1.Monitoring";
    encode(message: Monitoring, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Monitoring;
    fromJSON(object: any): Monitoring;
    toJSON(message: Monitoring): unknown;
    fromPartial<I extends {
        link?: string | undefined;
        description?: string | undefined;
        name?: string | undefined;
    } & {
        link?: string | undefined;
        description?: string | undefined;
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "link" | "description" | "name">, never>>(object: I): Monitoring;
};
export declare const ClusterConfig: {
    $type: "yandex.cloud.mdb.opensearch.v1.ClusterConfig";
    encode(message: ClusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfig;
    fromJSON(object: any): ClusterConfig;
    toJSON(message: ClusterConfig): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        access?: {
            serverless?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } | undefined;
        opensearch?: {
            nodeGroups?: {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: OpenSearch_GroupRole[] | undefined;
            }[] | undefined;
            plugins?: string[] | undefined;
            opensearchConfigSet2?: {
                effectiveConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                userConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        dashboards?: {
            nodeGroups?: {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        version?: string | undefined;
        access?: ({
            serverless?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } & {
            serverless?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } & Record<Exclude<keyof I["access"], "$type" | "serverless" | "dataTransfer">, never>) | undefined;
        opensearch?: ({
            nodeGroups?: {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: OpenSearch_GroupRole[] | undefined;
            }[] | undefined;
            plugins?: string[] | undefined;
            opensearchConfigSet2?: {
                effectiveConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                userConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            nodeGroups?: ({
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: OpenSearch_GroupRole[] | undefined;
            }[] & ({
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: OpenSearch_GroupRole[] | undefined;
            } & {
                name?: string | undefined;
                resources?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & Record<Exclude<keyof I["opensearch"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                zoneIds?: (string[] & string[] & Record<Exclude<keyof I["opensearch"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                subnetIds?: (string[] & string[] & Record<Exclude<keyof I["opensearch"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["opensearch"]["nodeGroups"][number]["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
            } & Record<Exclude<keyof I["opensearch"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp" | "roles">, never>)[] & Record<Exclude<keyof I["opensearch"]["nodeGroups"], "$type" | keyof {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: OpenSearch_GroupRole[] | undefined;
            }[]>, never>) | undefined;
            plugins?: (string[] & string[] & Record<Exclude<keyof I["opensearch"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
            opensearchConfigSet2?: ({
                effectiveConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                userConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & Record<Exclude<keyof I["opensearch"]["opensearchConfigSet2"]["effectiveConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
                userConfig?: ({
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & Record<Exclude<keyof I["opensearch"]["opensearchConfigSet2"]["userConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
                defaultConfig?: ({
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & Record<Exclude<keyof I["opensearch"]["opensearchConfigSet2"]["defaultConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
            } & Record<Exclude<keyof I["opensearch"]["opensearchConfigSet2"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        } & Record<Exclude<keyof I["opensearch"], "$type" | "nodeGroups" | "plugins" | "opensearchConfigSet2">, never>) | undefined;
        dashboards?: ({
            nodeGroups?: {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            }[] | undefined;
        } & {
            nodeGroups?: ({
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            }[] & ({
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            } & {
                name?: string | undefined;
                resources?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & Record<Exclude<keyof I["dashboards"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                zoneIds?: (string[] & string[] & Record<Exclude<keyof I["dashboards"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                subnetIds?: (string[] & string[] & Record<Exclude<keyof I["dashboards"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            } & Record<Exclude<keyof I["dashboards"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["dashboards"]["nodeGroups"], "$type" | keyof {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["dashboards"], "$type" | "nodeGroups">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "version" | "access" | "opensearch" | "dashboards">, never>>(object: I): ClusterConfig;
};
export declare const OpenSearch: {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch";
    encode(message: OpenSearch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSearch;
    fromJSON(object: any): OpenSearch;
    toJSON(message: OpenSearch): unknown;
    fromPartial<I extends {
        nodeGroups?: {
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        }[] | undefined;
        plugins?: string[] | undefined;
        opensearchConfigSet2?: {
            effectiveConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
            userConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
            defaultConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        nodeGroups?: ({
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        }[] & ({
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        } & {
            name?: string | undefined;
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            zoneIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["nodeGroups"][number]["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
        } & Record<Exclude<keyof I["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp" | "roles">, never>)[] & Record<Exclude<keyof I["nodeGroups"], "$type" | keyof {
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        }[]>, never>) | undefined;
        plugins?: (string[] & string[] & Record<Exclude<keyof I["plugins"], "$type" | keyof string[]>, never>) | undefined;
        opensearchConfigSet2?: ({
            effectiveConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
            userConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
            defaultConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } & {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } & Record<Exclude<keyof I["opensearchConfigSet2"]["effectiveConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
            userConfig?: ({
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } & {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } & Record<Exclude<keyof I["opensearchConfigSet2"]["userConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
            defaultConfig?: ({
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } & {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } & Record<Exclude<keyof I["opensearchConfigSet2"]["defaultConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
        } & Record<Exclude<keyof I["opensearchConfigSet2"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nodeGroups" | "plugins" | "opensearchConfigSet2">, never>>(object: I): OpenSearch;
};
export declare const OpenSearch_NodeGroup: {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch.NodeGroup";
    encode(message: OpenSearch_NodeGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSearch_NodeGroup;
    fromJSON(object: any): OpenSearch_NodeGroup;
    toJSON(message: OpenSearch_NodeGroup): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        zoneIds?: string[] | undefined;
        subnetIds?: string[] | undefined;
        hostsCount?: number | undefined;
        assignPublicIp?: boolean | undefined;
        roles?: OpenSearch_GroupRole[] | undefined;
    } & {
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
        zoneIds?: (string[] & string[] & Record<Exclude<keyof I["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
        hostsCount?: number | undefined;
        assignPublicIp?: boolean | undefined;
        roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp" | "roles">, never>>(object: I): OpenSearch_NodeGroup;
};
export declare const Dashboards: {
    $type: "yandex.cloud.mdb.opensearch.v1.Dashboards";
    encode(message: Dashboards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Dashboards;
    fromJSON(object: any): Dashboards;
    toJSON(message: Dashboards): unknown;
    fromPartial<I extends {
        nodeGroups?: {
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        }[] | undefined;
    } & {
        nodeGroups?: ({
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        }[] & ({
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        } & {
            name?: string | undefined;
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            zoneIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        } & Record<Exclude<keyof I["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["nodeGroups"], "$type" | keyof {
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nodeGroups">, never>>(object: I): Dashboards;
};
export declare const Dashboards_NodeGroup: {
    $type: "yandex.cloud.mdb.opensearch.v1.Dashboards.NodeGroup";
    encode(message: Dashboards_NodeGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Dashboards_NodeGroup;
    fromJSON(object: any): Dashboards_NodeGroup;
    toJSON(message: Dashboards_NodeGroup): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        zoneIds?: string[] | undefined;
        subnetIds?: string[] | undefined;
        hostsCount?: number | undefined;
        assignPublicIp?: boolean | undefined;
    } & {
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
        zoneIds?: (string[] & string[] & Record<Exclude<keyof I["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
        hostsCount?: number | undefined;
        assignPublicIp?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp">, never>>(object: I): Dashboards_NodeGroup;
};
export declare const Resources: {
    $type: "yandex.cloud.mdb.opensearch.v1.Resources";
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial<I extends {
        diskTypeId?: string | undefined;
        diskSize?: number | undefined;
        resourcePresetId?: string | undefined;
    } & {
        diskTypeId?: string | undefined;
        diskSize?: number | undefined;
        resourcePresetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>>(object: I): Resources;
};
export declare const Host: {
    $type: "yandex.cloud.mdb.opensearch.v1.Host";
    encode(message: Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host;
    fromJSON(object: any): Host;
    toJSON(message: Host): unknown;
    fromPartial<I extends {
        type?: Host_Type | undefined;
        name?: string | undefined;
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        health?: Host_Health | undefined;
        clusterId?: string | undefined;
        assignPublicIp?: boolean | undefined;
        roles?: OpenSearch_GroupRole[] | undefined;
        nodeGroup?: string | undefined;
        system?: {
            memory?: {
                total?: number | undefined;
                timestamp?: number | undefined;
                used?: number | undefined;
            } | undefined;
            disk?: {
                total?: number | undefined;
                timestamp?: number | undefined;
                used?: number | undefined;
            } | undefined;
            cpu?: {
                timestamp?: number | undefined;
                used?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        type?: Host_Type | undefined;
        name?: string | undefined;
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        resources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        health?: Host_Health | undefined;
        clusterId?: string | undefined;
        assignPublicIp?: boolean | undefined;
        roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
        nodeGroup?: string | undefined;
        system?: ({
            memory?: {
                total?: number | undefined;
                timestamp?: number | undefined;
                used?: number | undefined;
            } | undefined;
            disk?: {
                total?: number | undefined;
                timestamp?: number | undefined;
                used?: number | undefined;
            } | undefined;
            cpu?: {
                timestamp?: number | undefined;
                used?: number | undefined;
            } | undefined;
        } & {
            memory?: ({
                total?: number | undefined;
                timestamp?: number | undefined;
                used?: number | undefined;
            } & {
                total?: number | undefined;
                timestamp?: number | undefined;
                used?: number | undefined;
            } & Record<Exclude<keyof I["system"]["memory"], "$type" | "total" | "timestamp" | "used">, never>) | undefined;
            disk?: ({
                total?: number | undefined;
                timestamp?: number | undefined;
                used?: number | undefined;
            } & {
                total?: number | undefined;
                timestamp?: number | undefined;
                used?: number | undefined;
            } & Record<Exclude<keyof I["system"]["disk"], "$type" | "total" | "timestamp" | "used">, never>) | undefined;
            cpu?: ({
                timestamp?: number | undefined;
                used?: number | undefined;
            } & {
                timestamp?: number | undefined;
                used?: number | undefined;
            } & Record<Exclude<keyof I["system"]["cpu"], "$type" | "timestamp" | "used">, never>) | undefined;
        } & Record<Exclude<keyof I["system"], "$type" | "memory" | "disk" | "cpu">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "name" | "subnetId" | "zoneId" | "resources" | "health" | "clusterId" | "assignPublicIp" | "roles" | "nodeGroup" | "system">, never>>(object: I): Host;
};
export declare const Host_CPUMetric: {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.CPUMetric";
    encode(message: Host_CPUMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host_CPUMetric;
    fromJSON(object: any): Host_CPUMetric;
    toJSON(message: Host_CPUMetric): unknown;
    fromPartial<I extends {
        timestamp?: number | undefined;
        used?: number | undefined;
    } & {
        timestamp?: number | undefined;
        used?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "timestamp" | "used">, never>>(object: I): Host_CPUMetric;
};
export declare const Host_MemoryMetric: {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.MemoryMetric";
    encode(message: Host_MemoryMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host_MemoryMetric;
    fromJSON(object: any): Host_MemoryMetric;
    toJSON(message: Host_MemoryMetric): unknown;
    fromPartial<I extends {
        total?: number | undefined;
        timestamp?: number | undefined;
        used?: number | undefined;
    } & {
        total?: number | undefined;
        timestamp?: number | undefined;
        used?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "total" | "timestamp" | "used">, never>>(object: I): Host_MemoryMetric;
};
export declare const Host_DiskMetric: {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.DiskMetric";
    encode(message: Host_DiskMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host_DiskMetric;
    fromJSON(object: any): Host_DiskMetric;
    toJSON(message: Host_DiskMetric): unknown;
    fromPartial<I extends {
        total?: number | undefined;
        timestamp?: number | undefined;
        used?: number | undefined;
    } & {
        total?: number | undefined;
        timestamp?: number | undefined;
        used?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "total" | "timestamp" | "used">, never>>(object: I): Host_DiskMetric;
};
export declare const Host_SystemMetrics: {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.SystemMetrics";
    encode(message: Host_SystemMetrics, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host_SystemMetrics;
    fromJSON(object: any): Host_SystemMetrics;
    toJSON(message: Host_SystemMetrics): unknown;
    fromPartial<I extends {
        memory?: {
            total?: number | undefined;
            timestamp?: number | undefined;
            used?: number | undefined;
        } | undefined;
        disk?: {
            total?: number | undefined;
            timestamp?: number | undefined;
            used?: number | undefined;
        } | undefined;
        cpu?: {
            timestamp?: number | undefined;
            used?: number | undefined;
        } | undefined;
    } & {
        memory?: ({
            total?: number | undefined;
            timestamp?: number | undefined;
            used?: number | undefined;
        } & {
            total?: number | undefined;
            timestamp?: number | undefined;
            used?: number | undefined;
        } & Record<Exclude<keyof I["memory"], "$type" | "total" | "timestamp" | "used">, never>) | undefined;
        disk?: ({
            total?: number | undefined;
            timestamp?: number | undefined;
            used?: number | undefined;
        } & {
            total?: number | undefined;
            timestamp?: number | undefined;
            used?: number | undefined;
        } & Record<Exclude<keyof I["disk"], "$type" | "total" | "timestamp" | "used">, never>) | undefined;
        cpu?: ({
            timestamp?: number | undefined;
            used?: number | undefined;
        } & {
            timestamp?: number | undefined;
            used?: number | undefined;
        } & Record<Exclude<keyof I["cpu"], "$type" | "timestamp" | "used">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "memory" | "disk" | "cpu">, never>>(object: I): Host_SystemMetrics;
};
export declare const Access: {
    $type: "yandex.cloud.mdb.opensearch.v1.Access";
    encode(message: Access, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Access;
    fromJSON(object: any): Access;
    toJSON(message: Access): unknown;
    fromPartial<I extends {
        serverless?: boolean | undefined;
        dataTransfer?: boolean | undefined;
    } & {
        serverless?: boolean | undefined;
        dataTransfer?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "serverless" | "dataTransfer">, never>>(object: I): Access;
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
