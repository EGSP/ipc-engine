import _m0 from "protobufjs/minimal";
import { MaintenanceWindow, MaintenanceOperation } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance";
import { ElasticsearchConfigSet7 } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/config/elasticsearch";
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
/**
 * An Elasticsearch cluster resource.
 * For more information, see the [Concepts](/docs/managed-elasticsearch/concepts) section of the documentation.
 */
export interface Cluster {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Cluster";
    /**
     * ID of the Elasticsearch cluster.
     * This ID is assigned at creation time.
     */
    id: string;
    /** ID of the folder that the Elasticsearch cluster belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the Elasticsearch cluster.
     * The name must be unique within the folder. 1-63 characters long.
     */
    name: string;
    /** Description of the Elasticsearch cluster. 0-256 characters long. */
    description: string;
    /**
     * Custom labels for the Elasticsearch cluster as `key:value` pairs.
     * A maximum of 64 labels per resource is allowed.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Elasticsearch cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the Elasticsearch cluster. */
    monitoring: Monitoring[];
    /** Configuration of the Elasticsearch cluster. */
    config?: ClusterConfig;
    /** ID of the network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** User security groups */
    securityGroupIds: string[];
    /** ID of the service account used for access to Object Storage. */
    serviceAccountId: string;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Window of maintenance operations. */
    maintenanceWindow?: MaintenanceWindow;
    /** Maintenance operation planned at nearest maintenance_window. */
    plannedOperation?: MaintenanceOperation;
}
export declare enum Cluster_Environment {
    ENVIRONMENT_UNSPECIFIED = 0,
    /** PRODUCTION - stable environment with a conservative update policy when only hotfixes are applied during regular maintenance. */
    PRODUCTION = 1,
    /** PRESTABLE - environment with a more aggressive update policy when new versions are rolled out irrespective of backward compatibility. */
    PRESTABLE = 2,
    UNRECOGNIZED = -1
}
export declare function cluster_EnvironmentFromJSON(object: any): Cluster_Environment;
export declare function cluster_EnvironmentToJSON(object: Cluster_Environment): string;
export declare enum Cluster_Health {
    /** HEALTH_UNKNOWN - state of the cluster is unknown ([Host.health] of all hosts in the cluster is `UNKNOWN`). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - cluster is alive and well ([Host.health] of all hosts in the cluster is `ALIVE`). */
    ALIVE = 1,
    /** DEAD - cluster is inoperable ([Host.health] of all hosts in the cluster is `DEAD`). */
    DEAD = 2,
    /** DEGRADED - cluster is in degraded state ([Host.health] of at least one of the hosts in the cluster is not `ALIVE`). */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function cluster_HealthFromJSON(object: any): Cluster_Health;
export declare function cluster_HealthToJSON(object: Cluster_Health): string;
export declare enum Cluster_Status {
    /** STATUS_UNKNOWN - cluster state is unknown. */
    STATUS_UNKNOWN = 0,
    /** CREATING - cluster is being created. */
    CREATING = 1,
    /** RUNNING - cluster is running normally. */
    RUNNING = 2,
    /** ERROR - cluster encountered a problem and cannot operate. */
    ERROR = 3,
    /** UPDATING - cluster is being updated. */
    UPDATING = 4,
    /** STOPPING - cluster is stopping. */
    STOPPING = 5,
    /** STOPPED - cluster stopped. */
    STOPPED = 6,
    /** STARTING - cluster is starting. */
    STARTING = 7,
    UNRECOGNIZED = -1
}
export declare function cluster_StatusFromJSON(object: any): Cluster_Status;
export declare function cluster_StatusToJSON(object: Cluster_Status): string;
export interface Cluster_LabelsEntry {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Cluster.LabelsEntry";
    key: string;
    value: string;
}
/** Metadata of monitoring system. */
export interface Monitoring {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Monitoring";
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the Elasticsearch cluster. */
    link: string;
}
export interface ClusterConfig {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ClusterConfig";
    /** Elasticsearch version. */
    version: string;
    /** Configuration and resource allocation for Elasticsearch nodes. */
    elasticsearch?: Elasticsearch;
    /** ElasticSearch edition. */
    edition: string;
}
export interface Elasticsearch {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch";
    /** Configuration and resource allocation for Elasticsearch data nodes. */
    dataNode?: Elasticsearch_DataNode;
    /** Configuration and resource allocation for Elasticsearch master nodes. */
    masterNode?: Elasticsearch_MasterNode;
    /** Cluster wide plugins */
    plugins: string[];
}
export interface Elasticsearch_DataNode {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch.DataNode";
    /** Elasticsearch 7.x data node configuration. */
    elasticsearchConfigSet7?: ElasticsearchConfigSet7 | undefined;
    /** Resources allocated to Elasticsearch data nodes. */
    resources?: Resources;
}
export interface Elasticsearch_MasterNode {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch.MasterNode";
    /** Resources allocated to Elasticsearch master nodes. */
    resources?: Resources;
}
/** Computational resources. */
export interface Resources {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Resources";
    /**
     * ID of the preset for computational resources available to a host (CPU, memory etc.).
     * All available presets are listed in the [documentation](/docs/managed-elasticsearch/concepts/instance-types).
     */
    resourcePresetId: string;
    /** Volume of the storage available to a host, in bytes. */
    diskSize: number;
    /**
     * Type of the storage environment for the host.
     * All available types are listed in the [documentation](/docs/managed-elasticsearch/concepts/storage).
     */
    diskTypeId: string;
}
/** Cluster host metadata. */
export interface Host {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Host";
    /** Name of the host. */
    name: string;
    /** ID of the Elasticsearch cluster. */
    clusterId: string;
    /** ID of the availability zone where the host resides. */
    zoneId: string;
    /** Host type. */
    type: Host_Type;
    resources?: Resources;
    /** Aggregated host health data. */
    health: Host_Health;
    /** Services provided by the host. */
    services: Service[];
    /** ID of the subnet the host resides in. */
    subnetId: string;
    /**
     * The flag that defines whether a public IP address is assigned to the host.
     *
     * If the value is `true`, then this host is available on the Internet via it's public IP address.
     */
    assignPublicIp: boolean;
}
export declare enum Host_Type {
    TYPE_UNSPECIFIED = 0,
    /** DATA_NODE - the host is an Elasticsearch data node. */
    DATA_NODE = 1,
    /** MASTER_NODE - the host is an Elasticsearch master node. */
    MASTER_NODE = 2,
    UNRECOGNIZED = -1
}
export declare function host_TypeFromJSON(object: any): Host_Type;
export declare function host_TypeToJSON(object: Host_Type): string;
export declare enum Host_Health {
    /** UNKNOWN - health of the host is unknown. */
    UNKNOWN = 0,
    /** ALIVE - the host is performing all its functions normally. */
    ALIVE = 1,
    /** DEAD - the host is inoperable and cannot perform any of its essential functions. */
    DEAD = 2,
    /** DEGRADED - the host is degraded and can perform only some of its essential functions. */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function host_HealthFromJSON(object: any): Host_Health;
export declare function host_HealthToJSON(object: Host_Health): string;
/** Cluster service metadata. */
export interface Service {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Service";
    /** Type of the service provided by the host. */
    type: Service_Type;
    /** Service health data. */
    health: Service_Health;
}
export declare enum Service_Type {
    TYPE_UNSPECIFIED = 0,
    /** ELASTICSEARCH - the Elasticsearch service. */
    ELASTICSEARCH = 1,
    UNRECOGNIZED = -1
}
export declare function service_TypeFromJSON(object: any): Service_Type;
export declare function service_TypeToJSON(object: Service_Type): string;
export declare enum Service_Health {
    /** UNKNOWN - health of the service is unknown. */
    UNKNOWN = 0,
    /** ALIVE - the service is working normally. */
    ALIVE = 1,
    /** DEAD - the service is dead or unresponsive. */
    DEAD = 2,
    UNRECOGNIZED = -1
}
export declare function service_HealthFromJSON(object: any): Service_Health;
export declare function service_HealthToJSON(object: Service_Health): string;
export declare const Cluster: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Cluster";
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
            elasticsearch?: {
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfigSet7?: {
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } | undefined;
            edition?: string | undefined;
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
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        plannedOperation?: {
            info?: string | undefined;
            delayedUntil?: Date | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Cluster_Status | undefined;
        config?: ({
            version?: string | undefined;
            elasticsearch?: {
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfigSet7?: {
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } | undefined;
            edition?: string | undefined;
        } & {
            version?: string | undefined;
            elasticsearch?: ({
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfigSet7?: {
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } & {
                dataNode?: ({
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfigSet7?: {
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    resources?: ({
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & Record<Exclude<keyof I["config"]["elasticsearch"]["dataNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    elasticsearchConfigSet7?: ({
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } & {
                        effectiveConfig?: ({
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & Record<Exclude<keyof I["config"]["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"]["effectiveConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                        userConfig?: ({
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & Record<Exclude<keyof I["config"]["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"]["userConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                        defaultConfig?: ({
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            reindexSslCaPath?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & Record<Exclude<keyof I["config"]["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"]["defaultConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                    } & Record<Exclude<keyof I["config"]["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["elasticsearch"]["dataNode"], "$type" | "resources" | "elasticsearchConfigSet7">, never>) | undefined;
                masterNode?: ({
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } & {
                    resources?: ({
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & Record<Exclude<keyof I["config"]["elasticsearch"]["masterNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["elasticsearch"]["masterNode"], "$type" | "resources">, never>) | undefined;
                plugins?: (string[] & string[] & Record<Exclude<keyof I["config"]["elasticsearch"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["elasticsearch"], "$type" | "dataNode" | "masterNode" | "plugins">, never>) | undefined;
            edition?: string | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "version" | "elasticsearch" | "edition">, never>) | undefined;
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
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        plannedOperation?: ({
            info?: string | undefined;
            delayedUntil?: Date | undefined;
        } & {
            info?: string | undefined;
            delayedUntil?: Date | undefined;
        } & Record<Exclude<keyof I["plannedOperation"], "$type" | "info" | "delayedUntil">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "health" | "monitoring" | "maintenanceWindow" | "environment" | "plannedOperation">, never>>(object: I): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Cluster.LabelsEntry";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.Monitoring";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ClusterConfig";
    encode(message: ClusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfig;
    fromJSON(object: any): ClusterConfig;
    toJSON(message: ClusterConfig): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        elasticsearch?: {
            dataNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                elasticsearchConfigSet7?: {
                    effectiveConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            masterNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            plugins?: string[] | undefined;
        } | undefined;
        edition?: string | undefined;
    } & {
        version?: string | undefined;
        elasticsearch?: ({
            dataNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                elasticsearchConfigSet7?: {
                    effectiveConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            masterNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            plugins?: string[] | undefined;
        } & {
            dataNode?: ({
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                elasticsearchConfigSet7?: {
                    effectiveConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                resources?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & Record<Exclude<keyof I["elasticsearch"]["dataNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                elasticsearchConfigSet7?: ({
                    effectiveConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & Record<Exclude<keyof I["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"]["effectiveConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                    userConfig?: ({
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & Record<Exclude<keyof I["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"]["userConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                    defaultConfig?: ({
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & Record<Exclude<keyof I["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"]["defaultConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                } & Record<Exclude<keyof I["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            } & Record<Exclude<keyof I["elasticsearch"]["dataNode"], "$type" | "resources" | "elasticsearchConfigSet7">, never>) | undefined;
            masterNode?: ({
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } & {
                resources?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & Record<Exclude<keyof I["elasticsearch"]["masterNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            } & Record<Exclude<keyof I["elasticsearch"]["masterNode"], "$type" | "resources">, never>) | undefined;
            plugins?: (string[] & string[] & Record<Exclude<keyof I["elasticsearch"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["elasticsearch"], "$type" | "dataNode" | "masterNode" | "plugins">, never>) | undefined;
        edition?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "version" | "elasticsearch" | "edition">, never>>(object: I): ClusterConfig;
};
export declare const Elasticsearch: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch";
    encode(message: Elasticsearch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Elasticsearch;
    fromJSON(object: any): Elasticsearch;
    toJSON(message: Elasticsearch): unknown;
    fromPartial<I extends {
        dataNode?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            elasticsearchConfigSet7?: {
                effectiveConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                userConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        masterNode?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
        } | undefined;
        plugins?: string[] | undefined;
    } & {
        dataNode?: ({
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            elasticsearchConfigSet7?: {
                effectiveConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                userConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["dataNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            elasticsearchConfigSet7?: ({
                effectiveConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                userConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & Record<Exclude<keyof I["dataNode"]["elasticsearchConfigSet7"]["effectiveConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                userConfig?: ({
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & Record<Exclude<keyof I["dataNode"]["elasticsearchConfigSet7"]["userConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                defaultConfig?: ({
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & Record<Exclude<keyof I["dataNode"]["elasticsearchConfigSet7"]["defaultConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
            } & Record<Exclude<keyof I["dataNode"]["elasticsearchConfigSet7"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        } & Record<Exclude<keyof I["dataNode"], "$type" | "resources" | "elasticsearchConfigSet7">, never>) | undefined;
        masterNode?: ({
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
        } & {
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["masterNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        } & Record<Exclude<keyof I["masterNode"], "$type" | "resources">, never>) | undefined;
        plugins?: (string[] & string[] & Record<Exclude<keyof I["plugins"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "dataNode" | "masterNode" | "plugins">, never>>(object: I): Elasticsearch;
};
export declare const Elasticsearch_DataNode: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch.DataNode";
    encode(message: Elasticsearch_DataNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Elasticsearch_DataNode;
    fromJSON(object: any): Elasticsearch_DataNode;
    toJSON(message: Elasticsearch_DataNode): unknown;
    fromPartial<I extends {
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        elasticsearchConfigSet7?: {
            effectiveConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
            userConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
            defaultConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        resources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        elasticsearchConfigSet7?: ({
            effectiveConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
            userConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
            defaultConfig?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } & {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } & Record<Exclude<keyof I["elasticsearchConfigSet7"]["effectiveConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
            userConfig?: ({
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } & {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } & Record<Exclude<keyof I["elasticsearchConfigSet7"]["userConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
            defaultConfig?: ({
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } & {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } & Record<Exclude<keyof I["elasticsearchConfigSet7"]["defaultConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
        } & Record<Exclude<keyof I["elasticsearchConfigSet7"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "elasticsearchConfigSet7">, never>>(object: I): Elasticsearch_DataNode;
};
export declare const Elasticsearch_MasterNode: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Elasticsearch.MasterNode";
    encode(message: Elasticsearch_MasterNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Elasticsearch_MasterNode;
    fromJSON(object: any): Elasticsearch_MasterNode;
    toJSON(message: Elasticsearch_MasterNode): unknown;
    fromPartial<I extends {
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
    } & {
        resources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources">, never>>(object: I): Elasticsearch_MasterNode;
};
export declare const Resources: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Resources";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.Host";
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
        services?: {
            type?: Service_Type | undefined;
            health?: Service_Health | undefined;
        }[] | undefined;
        health?: Host_Health | undefined;
        clusterId?: string | undefined;
        assignPublicIp?: boolean | undefined;
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
        services?: ({
            type?: Service_Type | undefined;
            health?: Service_Health | undefined;
        }[] & ({
            type?: Service_Type | undefined;
            health?: Service_Health | undefined;
        } & {
            type?: Service_Type | undefined;
            health?: Service_Health | undefined;
        } & Record<Exclude<keyof I["services"][number], "$type" | "type" | "health">, never>)[] & Record<Exclude<keyof I["services"], "$type" | keyof {
            type?: Service_Type | undefined;
            health?: Service_Health | undefined;
        }[]>, never>) | undefined;
        health?: Host_Health | undefined;
        clusterId?: string | undefined;
        assignPublicIp?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "name" | "subnetId" | "zoneId" | "resources" | "services" | "health" | "clusterId" | "assignPublicIp">, never>>(object: I): Host;
};
export declare const Service: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Service";
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial<I extends {
        type?: Service_Type | undefined;
        health?: Service_Health | undefined;
    } & {
        type?: Service_Type | undefined;
        health?: Service_Health | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "health">, never>>(object: I): Service;
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
