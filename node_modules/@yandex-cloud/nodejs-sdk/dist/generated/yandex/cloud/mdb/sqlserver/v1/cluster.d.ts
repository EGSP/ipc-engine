import _m0 from "protobufjs/minimal";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { SQLServerConfigSet2016sp2std, SQLServerConfigSet2016sp2ent } from "../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2016sp2";
import { SQLServerConfigSet2017std, SQLServerConfigSet2017ent } from "../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2017";
import { SQLServerConfigSet2019std, SQLServerConfigSet2019ent } from "../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2019";
export declare const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
/**
 * An SQL Server cluster.
 *
 * For more information, see the [Concepts](/docs/managed-sqlserver/concepts) section of the documentation.
 */
export interface Cluster {
    $type: "yandex.cloud.mdb.sqlserver.v1.Cluster";
    /**
     * ID of the SQL Server cluster.
     *
     * This ID is assigned by Managed Service for SQL Server at the moment of creation.
     */
    id: string;
    /** ID of the folder the SQL Server cluster belongs to. */
    folderId: string;
    /** Time when SQL Server cluster was created. */
    createdAt?: Date;
    /**
     * Name of the SQL Server cluster.
     *
     * The name must be unique within the folder, comply with [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt) and be 1-63 characters long.
     */
    name: string;
    /**
     * Description of the SQL Server cluster.
     *
     * Must be 0-256 characters long.
     */
    description: string;
    /**
     * Custom labels for the SQL Server cluster as `key:value` pairs.
     *
     * Maximum 64 per resource.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the SQL Server cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the SQL Server cluster. */
    monitoring: Monitoring[];
    /** Configuration of the SQL Server cluster. */
    config?: ClusterConfig;
    /** ID of the network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** User security groups. */
    securityGroupIds: string[];
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** SQL Server Collation. */
    sqlcollation: string;
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
    /** ID of the service account which is used for access to Object Storage. */
    serviceAccountId: string;
}
export declare enum Cluster_Environment {
    ENVIRONMENT_UNSPECIFIED = 0,
    /** PRODUCTION - Stable environment with a conservative update policy: only hotfixes are applied during regular maintenance. */
    PRODUCTION = 1,
    /** PRESTABLE - Environment with more aggressive update policy: new versions are rolled out irrespective of backward compatibility. */
    PRESTABLE = 2,
    UNRECOGNIZED = -1
}
export declare function cluster_EnvironmentFromJSON(object: any): Cluster_Environment;
export declare function cluster_EnvironmentToJSON(object: Cluster_Environment): string;
export declare enum Cluster_Health {
    /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] of all hosts in the cluster is `UNKNOWN`). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is alive and works well ([Host.health] of all hosts in the cluster is `ALIVE`). */
    ALIVE = 1,
    /** DEAD - Cluster is inoperable ([Host.health] of all hosts in the cluster is `DEAD`). */
    DEAD = 2,
    /** DEGRADED - Cluster is in degraded state ([Host.health] of at least one of the hosts in the cluster is not `ALIVE`). */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function cluster_HealthFromJSON(object: any): Cluster_Health;
export declare function cluster_HealthToJSON(object: Cluster_Health): string;
export declare enum Cluster_Status {
    /** STATUS_UNKNOWN - Cluster state is unknown. */
    STATUS_UNKNOWN = 0,
    /** CREATING - Cluster is being created. */
    CREATING = 1,
    /** RUNNING - Cluster is running normally. */
    RUNNING = 2,
    /** ERROR - Cluster encountered a problem and cannot operate. */
    ERROR = 3,
    /** UPDATING - Cluster is being updated. */
    UPDATING = 4,
    /** STOPPING - Cluster is stopping. */
    STOPPING = 5,
    /** STOPPED - Cluster stopped. */
    STOPPED = 6,
    /** STARTING - Cluster is starting. */
    STARTING = 7,
    UNRECOGNIZED = -1
}
export declare function cluster_StatusFromJSON(object: any): Cluster_Status;
export declare function cluster_StatusToJSON(object: Cluster_Status): string;
export interface Cluster_LabelsEntry {
    $type: "yandex.cloud.mdb.sqlserver.v1.Cluster.LabelsEntry";
    key: string;
    value: string;
}
export interface Monitoring {
    $type: "yandex.cloud.mdb.sqlserver.v1.Monitoring";
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the SQL Server cluster. */
    link: string;
}
export interface ClusterConfig {
    $type: "yandex.cloud.mdb.sqlserver.v1.ClusterConfig";
    /** Version of the SQL Server. */
    version: string;
    /** Configuration of the SQL Server 2016sp2 standard edition instance. */
    sqlserverConfig2016sp2std?: SQLServerConfigSet2016sp2std | undefined;
    /** Configuration of the SQL Server 2016sp2 enterprise edition instance. */
    sqlserverConfig2016sp2ent?: SQLServerConfigSet2016sp2ent | undefined;
    /** Configuration of the SQL Server 2017 standard edition instance. */
    sqlserverConfig2017std?: SQLServerConfigSet2017std | undefined;
    /** Configuration of the SQL Server 2017 enterprise edition instance. */
    sqlserverConfig2017ent?: SQLServerConfigSet2017ent | undefined;
    /** Configuration of the SQL Server 2019 standard edition instance. */
    sqlserverConfig2019std?: SQLServerConfigSet2019std | undefined;
    /** Configuration of the SQL Server 2019 enterprise edition instance. */
    sqlserverConfig2019ent?: SQLServerConfigSet2019ent | undefined;
    /** Resources allocated to SQL Server hosts. */
    resources?: Resources;
    /** Start time for the daily backup in UTC timezone. */
    backupWindowStart?: TimeOfDay;
    /** Database access policy. */
    access?: Access;
    /** Secondary replicas connection mode */
    secondaryConnections: ClusterConfig_SecondaryConnections;
}
export declare enum ClusterConfig_SecondaryConnections {
    SECONDARY_CONNECTIONS_UNSPECIFIED = 0,
    /** SECONDARY_CONNECTIONS_OFF - Connections to secondary replicas are prohibited */
    SECONDARY_CONNECTIONS_OFF = 1,
    /** SECONDARY_CONNECTIONS_READ_ONLY - Secondary replicas are read-only */
    SECONDARY_CONNECTIONS_READ_ONLY = 2,
    UNRECOGNIZED = -1
}
export declare function clusterConfig_SecondaryConnectionsFromJSON(object: any): ClusterConfig_SecondaryConnections;
export declare function clusterConfig_SecondaryConnectionsToJSON(object: ClusterConfig_SecondaryConnections): string;
export interface Host {
    $type: "yandex.cloud.mdb.sqlserver.v1.Host";
    /**
     * Name of the SQL Server host.
     *
     * The host name is assigned by Managed Service for SQL Server at the moment of creation and cannot be changed. 1-63 characters long.
     *
     * The name is unique across all database hosts that exist on the platform as it defines the FQDN of the host.
     */
    name: string;
    /**
     * ID of the SQL Server host.
     *
     * The ID is assigned by Managed Service for SQL Server at the moment of creation.
     */
    clusterId: string;
    /** ID of the availability zone where the SQL Server host resides. */
    zoneId: string;
    /** Resources allocated to the host. */
    resources?: Resources;
    /** Role of the host in the cluster. */
    role: Host_Role;
    /** Status code of the aggregated health of the host. */
    health: Host_Health;
    /** Services provided by the host. */
    services: Service[];
    /** ID of the subnet that the host belongs to. */
    subnetId: string;
    /** Flag showing public IP assignment status to this host. */
    assignPublicIp: boolean;
}
export declare enum Host_Role {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    ROLE_UNKNOWN = 0,
    /** MASTER - Host is the master SQL Server instance in the cluster. */
    MASTER = 1,
    /** REPLICA - Host is a replica SQL Server instance in the cluster. */
    REPLICA = 2,
    UNRECOGNIZED = -1
}
export declare function host_RoleFromJSON(object: any): Host_Role;
export declare function host_RoleToJSON(object: Host_Role): string;
export declare enum Host_Health {
    /** HEALTH_UNKNOWN - Health of the host is unknown. */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - The host is performing all its functions normally. */
    ALIVE = 1,
    /** DEAD - The host is inoperable and cannot perform any of its essential functions. */
    DEAD = 2,
    /** DEGRADED - The host is degraded and can perform only some of its essential functions. */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function host_HealthFromJSON(object: any): Host_Health;
export declare function host_HealthToJSON(object: Host_Health): string;
export interface Service {
    $type: "yandex.cloud.mdb.sqlserver.v1.Service";
    /** Type of the service provided by the host. */
    type: Service_Type;
    /** Status code of server availability. */
    health: Service_Health;
}
export declare enum Service_Type {
    TYPE_UNSPECIFIED = 0,
    /** SQLSERVER - SQL Server service. */
    SQLSERVER = 1,
    UNRECOGNIZED = -1
}
export declare function service_TypeFromJSON(object: any): Service_Type;
export declare function service_TypeToJSON(object: Service_Type): string;
export declare enum Service_Health {
    /** HEALTH_UNKNOWN - Health of the server is unknown. */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - The server is working normally. */
    ALIVE = 1,
    /** DEAD - The server is dead or unresponsive. */
    DEAD = 2,
    UNRECOGNIZED = -1
}
export declare function service_HealthFromJSON(object: any): Service_Health;
export declare function service_HealthToJSON(object: Service_Health): string;
export interface Resources {
    $type: "yandex.cloud.mdb.sqlserver.v1.Resources";
    /**
     * ID of the preset for computational resources available to a host (CPU, memory, etc.).
     *
     * All available presets are listed in the [documentation](/docs/managed-sqlserver/concepts/instance-types).
     */
    resourcePresetId: string;
    /** Volume of the storage available to a host. */
    diskSize: number;
    /**
     * Type of the storage environment for the host.
     *
     * Possible values:
     * * `network-hdd` - network HDD drive;
     * * `network-ssd` - network SSD drive;
     * * `local-ssd` - local SSD storage.
     */
    diskTypeId: string;
}
export interface Access {
    $type: "yandex.cloud.mdb.sqlserver.v1.Access";
    /** Allows access for DataLens. */
    dataLens: boolean;
    /** Allows access for Web SQL. */
    webSql: boolean;
}
export declare const Cluster: {
    $type: "yandex.cloud.mdb.sqlserver.v1.Cluster";
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
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            version?: string | undefined;
            backupWindowStart?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            access?: {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
            } | undefined;
            sqlserverConfig2016sp2std?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            sqlserverConfig2016sp2ent?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            sqlserverConfig2017std?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            sqlserverConfig2017ent?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            sqlserverConfig2019std?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            sqlserverConfig2019ent?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
        hostGroupIds?: string[] | undefined;
        monitoring?: {
            link?: string | undefined;
            description?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        environment?: Cluster_Environment | undefined;
        sqlcollation?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Cluster_Status | undefined;
        config?: ({
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            version?: string | undefined;
            backupWindowStart?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            access?: {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
            } | undefined;
            sqlserverConfig2016sp2std?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            sqlserverConfig2016sp2ent?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            sqlserverConfig2017std?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            sqlserverConfig2017ent?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            sqlserverConfig2019std?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            sqlserverConfig2019ent?: {
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
        } & {
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["config"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            version?: string | undefined;
            backupWindowStart?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & Record<Exclude<keyof I["config"]["backupWindowStart"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
            access?: ({
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
            } & {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
            } & Record<Exclude<keyof I["config"]["access"], "$type" | "dataLens" | "webSql">, never>) | undefined;
            sqlserverConfig2016sp2std?: ({
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2016sp2std"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                userConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2016sp2std"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                defaultConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2016sp2std"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["sqlserverConfig2016sp2std"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            sqlserverConfig2016sp2ent?: ({
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2016sp2ent"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                userConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2016sp2ent"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                defaultConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2016sp2ent"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["sqlserverConfig2016sp2ent"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            sqlserverConfig2017std?: ({
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2017std"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                userConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2017std"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                defaultConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2017std"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["sqlserverConfig2017std"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            sqlserverConfig2017ent?: ({
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2017ent"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                userConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2017ent"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                defaultConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2017ent"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["sqlserverConfig2017ent"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            sqlserverConfig2019std?: ({
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2019std"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                userConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2019std"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                defaultConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2019std"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["sqlserverConfig2019std"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            sqlserverConfig2019ent?: ({
                effectiveConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2019ent"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                userConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2019ent"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                defaultConfig?: ({
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & {
                    maxDegreeOfParallelism?: number | undefined;
                    costThresholdForParallelism?: number | undefined;
                    auditLevel?: number | undefined;
                    fillFactorPercent?: number | undefined;
                    optimizeForAdHocWorkloads?: boolean | undefined;
                } & Record<Exclude<keyof I["config"]["sqlserverConfig2019ent"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["sqlserverConfig2019ent"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "sqlserverConfig2016sp2std" | "sqlserverConfig2016sp2ent" | "sqlserverConfig2017std" | "sqlserverConfig2017ent" | "sqlserverConfig2019std" | "sqlserverConfig2019ent" | "secondaryConnections">, never>) | undefined;
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
        hostGroupIds?: (string[] & string[] & Record<Exclude<keyof I["hostGroupIds"], "$type" | keyof string[]>, never>) | undefined;
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
        environment?: Cluster_Environment | undefined;
        sqlcollation?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "health" | "hostGroupIds" | "monitoring" | "environment" | "sqlcollation">, never>>(object: I): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.mdb.sqlserver.v1.Cluster.LabelsEntry";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.Monitoring";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.ClusterConfig";
    encode(message: ClusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfig;
    fromJSON(object: any): ClusterConfig;
    toJSON(message: ClusterConfig): unknown;
    fromPartial<I extends {
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        version?: string | undefined;
        backupWindowStart?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } | undefined;
        access?: {
            dataLens?: boolean | undefined;
            webSql?: boolean | undefined;
        } | undefined;
        sqlserverConfig2016sp2std?: {
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } | undefined;
        sqlserverConfig2016sp2ent?: {
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } | undefined;
        sqlserverConfig2017std?: {
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } | undefined;
        sqlserverConfig2017ent?: {
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } | undefined;
        sqlserverConfig2019std?: {
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } | undefined;
        sqlserverConfig2019ent?: {
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } | undefined;
        secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
        version?: string | undefined;
        backupWindowStart?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & Record<Exclude<keyof I["backupWindowStart"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
        access?: ({
            dataLens?: boolean | undefined;
            webSql?: boolean | undefined;
        } & {
            dataLens?: boolean | undefined;
            webSql?: boolean | undefined;
        } & Record<Exclude<keyof I["access"], "$type" | "dataLens" | "webSql">, never>) | undefined;
        sqlserverConfig2016sp2std?: ({
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2016sp2std"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            userConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2016sp2std"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            defaultConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2016sp2std"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2016sp2std"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        sqlserverConfig2016sp2ent?: ({
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2016sp2ent"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            userConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2016sp2ent"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            defaultConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2016sp2ent"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2016sp2ent"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        sqlserverConfig2017std?: ({
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2017std"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            userConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2017std"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            defaultConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2017std"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2017std"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        sqlserverConfig2017ent?: ({
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2017ent"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            userConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2017ent"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            defaultConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2017ent"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2017ent"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        sqlserverConfig2019std?: ({
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2019std"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            userConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2019std"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            defaultConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2019std"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2019std"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        sqlserverConfig2019ent?: ({
            effectiveConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2019ent"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            userConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2019ent"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            defaultConfig?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["sqlserverConfig2019ent"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2019ent"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "version" | "backupWindowStart" | "access" | "sqlserverConfig2016sp2std" | "sqlserverConfig2016sp2ent" | "sqlserverConfig2017std" | "sqlserverConfig2017ent" | "sqlserverConfig2019std" | "sqlserverConfig2019ent" | "secondaryConnections">, never>>(object: I): ClusterConfig;
};
export declare const Host: {
    $type: "yandex.cloud.mdb.sqlserver.v1.Host";
    encode(message: Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host;
    fromJSON(object: any): Host;
    toJSON(message: Host): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        role?: Host_Role | undefined;
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
        name?: string | undefined;
        role?: Host_Role | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "name" | "role" | "subnetId" | "zoneId" | "resources" | "services" | "health" | "clusterId" | "assignPublicIp">, never>>(object: I): Host;
};
export declare const Service: {
    $type: "yandex.cloud.mdb.sqlserver.v1.Service";
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
export declare const Resources: {
    $type: "yandex.cloud.mdb.sqlserver.v1.Resources";
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
export declare const Access: {
    $type: "yandex.cloud.mdb.sqlserver.v1.Access";
    encode(message: Access, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Access;
    fromJSON(object: any): Access;
    toJSON(message: Access): unknown;
    fromPartial<I extends {
        dataLens?: boolean | undefined;
        webSql?: boolean | undefined;
    } & {
        dataLens?: boolean | undefined;
        webSql?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "dataLens" | "webSql">, never>>(object: I): Access;
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
