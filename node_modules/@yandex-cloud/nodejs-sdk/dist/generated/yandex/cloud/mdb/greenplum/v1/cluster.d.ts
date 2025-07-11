import _m0 from "protobufjs/minimal";
import { MasterSubclusterConfig, SegmentSubclusterConfig, ConnectionPoolerConfigSet, BackgroundActivitiesConfig, Greenplumconfigset617, Greenplumconfigset619, Greenplumconfigset621, Greenplumconfigset622, GreenplumConfigSet6 } from "../../../../../yandex/cloud/mdb/greenplum/v1/config";
import { MaintenanceWindow, MaintenanceOperation } from "../../../../../yandex/cloud/mdb/greenplum/v1/maintenance";
import { PXFConfigSet } from "../../../../../yandex/cloud/mdb/greenplum/v1/pxf";
import { TimeOfDay } from "../../../../../google/type/timeofday";
export declare const protobufPackage = "yandex.cloud.mdb.greenplum.v1";
/** A Greenplum® cluster resource. */
export interface Cluster {
    $type: "yandex.cloud.mdb.greenplum.v1.Cluster";
    /**
     * ID of the Greenplum® cluster.
     * This ID is assigned by the platform at the moment of cluster creation.
     */
    id: string;
    /** ID of the folder that the Greenplum® cluster belongs to. */
    folderId: string;
    /** Time when the cluster was created. */
    createdAt?: Date;
    /**
     * Name of the Greenplum® cluster.
     * The name is unique within the folder.
     */
    name: string;
    /** Greenplum® cluster configuration. */
    config?: GreenplumConfig;
    /** Description of the Greenplum® cluster. */
    description: string;
    /** Custom labels for the Greenplum® cluster as `key:value` pairs. Maximum 64 labels per resource. */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Greenplum® cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the Greenplum® cluster. */
    monitoring: Monitoring[];
    /** Configuration of the Greenplum® master subcluster. */
    masterConfig?: MasterSubclusterConfig;
    /** Configuration of the Greenplum® segment subcluster. */
    segmentConfig?: SegmentSubclusterConfig;
    /** Number of hosts in the master subcluster. */
    masterHostCount: number;
    /** Number of hosts in the segment subcluster. */
    segmentHostCount: number;
    /** Number of segments per host. */
    segmentInHost: number;
    /** ID of the cloud network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** A Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
    maintenanceWindow?: MaintenanceWindow;
    /** Maintenance operation planned at nearest [maintenance_window]. */
    plannedOperation?: MaintenanceOperation;
    /** User security groups. */
    securityGroupIds: string[];
    /** Owner user name. */
    userName: string;
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
    /** Greenplum® and Odyssey® configuration. */
    clusterConfig?: ClusterConfigSet;
    /** Cloud storage settings */
    cloudStorage?: CloudStorage;
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
    /** HEALTH_UNKNOWN - Health of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is working normally ([Host.health] for every host in the cluster is ALIVE). */
    ALIVE = 1,
    /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
    DEAD = 2,
    /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
    DEGRADED = 3,
    /** UNBALANCED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is UNBALANCED). */
    UNBALANCED = 4,
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
    $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry";
    key: string;
    value: string;
}
export interface ClusterConfigSet {
    $type: "yandex.cloud.mdb.greenplum.v1.ClusterConfigSet";
    greenplumConfigSet617?: Greenplumconfigset617 | undefined;
    greenplumConfigSet619?: Greenplumconfigset619 | undefined;
    greenplumConfigSet621?: Greenplumconfigset621 | undefined;
    greenplumConfigSet622?: Greenplumconfigset622 | undefined;
    greenplumConfigSet6?: GreenplumConfigSet6 | undefined;
    /** Odyssey® pool settings. */
    pool?: ConnectionPoolerConfigSet;
    backgroundActivities?: BackgroundActivitiesConfig;
    pxfConfig?: PXFConfigSet;
}
/** Monitoring system metadata. */
export interface Monitoring {
    $type: "yandex.cloud.mdb.greenplum.v1.Monitoring";
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the Greenplum® cluster. */
    link: string;
}
export interface GreenplumConfig {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig";
    /** Version of the Greenplum® server software. */
    version: string;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart?: TimeOfDay;
    /** Access policy for external services. */
    access?: Access;
    /**
     * ID of the availability zone the cluster belongs to.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /** ID of the subnet the cluster belongs to. This subnet should be a part of the cloud network the cluster belongs to (see [Cluster.network_id]). */
    subnetId: string;
    /**
     * Determines whether the cluster has a public IP address.
     *
     * After the cluster has been created, this setting cannot be changed.
     */
    assignPublicIp: boolean;
}
export interface Access {
    $type: "yandex.cloud.mdb.greenplum.v1.Access";
    /** Allows data export from the cluster to DataLens. */
    dataLens: boolean;
    /** Allows SQL queries to the cluster databases from the management console. */
    webSql: boolean;
    /** Allows access for DataTransfer. */
    dataTransfer: boolean;
}
export interface GreenplumRestoreConfig {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumRestoreConfig";
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart?: TimeOfDay;
    /** Access policy for external services. */
    access?: Access;
    /**
     * ID of the availability zone where the host resides.
     *
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * ID of the subnet that the host should belong to. This subnet should be a part of the network that the cluster belongs to.
     * The ID of the network is set in the field [Cluster.network_id].
     */
    subnetId: string;
    /**
     * Determines whether the host should get a public IP address on creation.
     *
     * After a host has been created, this setting cannot be changed.
     *
     * To remove an assigned public IP, or to assign a public IP to a host without one, recreate the host with [assign_public_ip] set as needed.
     *
     * Possible values:
     * * `false` - do not assign a public IP to the master host.
     * * `true` - assign a public IP to the master host.
     */
    assignPublicIp: boolean;
}
export interface RestoreResources {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreResources";
    /** ID of the preset for computational resources available to a host (CPU, memory, etc.). */
    resourcePresetId: string;
    /** Volume of the storage available to a host. */
    diskSize: number;
}
/** Cloud Storage Settings */
export interface CloudStorage {
    $type: "yandex.cloud.mdb.greenplum.v1.CloudStorage";
    /** enable Cloud Storage for cluster */
    enable: boolean;
}
export declare const Cluster: {
    $type: "yandex.cloud.mdb.greenplum.v1.Cluster";
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
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
            backupWindowStart?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            access?: {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
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
        health?: Cluster_Health | undefined;
        hostGroupIds?: string[] | undefined;
        monitoring?: {
            link?: string | undefined;
            description?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        plannedOperation?: {
            info?: string | undefined;
            delayedUntil?: Date | undefined;
        } | undefined;
        cloudStorage?: {
            enable?: boolean | undefined;
        } | undefined;
        userName?: string | undefined;
        masterHostCount?: number | undefined;
        segmentHostCount?: number | undefined;
        segmentInHost?: number | undefined;
        masterConfig?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
        } | undefined;
        segmentConfig?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
        } | undefined;
        clusterConfig?: {
            greenplumConfigSet617?: {
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } | undefined;
            } | undefined;
            greenplumConfigSet619?: {
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } | undefined;
            } | undefined;
            greenplumConfigSet621?: {
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
            } | undefined;
            greenplumConfigSet622?: {
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
            } | undefined;
            greenplumConfigSet6?: {
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
            } | undefined;
            pool?: {
                effectiveConfig?: {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } | undefined;
                userConfig?: {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } | undefined;
            } | undefined;
            backgroundActivities?: {
                tableSizes?: {
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } | undefined;
                analyzeAndVacuum?: {
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } | undefined;
            } | undefined;
            pxfConfig?: {
                effectiveConfig?: {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } | undefined;
                userConfig?: {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Cluster_Status | undefined;
        config?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
            backupWindowStart?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            access?: {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
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
                dataTransfer?: boolean | undefined;
            } & {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["config"]["access"], "$type" | "dataLens" | "webSql" | "dataTransfer">, never>) | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "subnetId" | "zoneId" | "version" | "assignPublicIp" | "backupWindowStart" | "access">, never>) | undefined;
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
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
        cloudStorage?: ({
            enable?: boolean | undefined;
        } & {
            enable?: boolean | undefined;
        } & Record<Exclude<keyof I["cloudStorage"], "$type" | "enable">, never>) | undefined;
        userName?: string | undefined;
        masterHostCount?: number | undefined;
        segmentHostCount?: number | undefined;
        segmentInHost?: number | undefined;
        masterConfig?: ({
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
            } & Record<Exclude<keyof I["masterConfig"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        } & Record<Exclude<keyof I["masterConfig"], "$type" | "resources">, never>) | undefined;
        segmentConfig?: ({
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
            } & Record<Exclude<keyof I["segmentConfig"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        } & Record<Exclude<keyof I["segmentConfig"], "$type" | "resources">, never>) | undefined;
        clusterConfig?: ({
            greenplumConfigSet617?: {
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } | undefined;
            } | undefined;
            greenplumConfigSet619?: {
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } | undefined;
            } | undefined;
            greenplumConfigSet621?: {
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
            } | undefined;
            greenplumConfigSet622?: {
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
            } | undefined;
            greenplumConfigSet6?: {
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
            } | undefined;
            pool?: {
                effectiveConfig?: {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } | undefined;
                userConfig?: {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } | undefined;
            } | undefined;
            backgroundActivities?: {
                tableSizes?: {
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } | undefined;
                analyzeAndVacuum?: {
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } | undefined;
            } | undefined;
            pxfConfig?: {
                effectiveConfig?: {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } | undefined;
                userConfig?: {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            greenplumConfigSet617?: ({
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet617"]["effectiveConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
                userConfig?: ({
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet617"]["userConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
                defaultConfig?: ({
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet617"]["defaultConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
            } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet617"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            greenplumConfigSet619?: ({
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet619"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
                userConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet619"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
                defaultConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet619"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
            } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet619"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            greenplumConfigSet621?: ({
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet621"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                userConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet621"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                defaultConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet621"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet621"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            greenplumConfigSet622?: ({
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet622"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                userConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet622"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                defaultConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet622"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet622"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            greenplumConfigSet6?: ({
                effectiveConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                userConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
                defaultConfig?: {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet6"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                userConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet6"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                defaultConfig?: ({
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & {
                    maxConnections?: number | undefined;
                    logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                    maxSlotWalKeepSize?: number | undefined;
                    gpWorkfileLimitPerSegment?: number | undefined;
                    gpWorkfileLimitPerQuery?: number | undefined;
                    gpWorkfileLimitFilesPerQuery?: number | undefined;
                    maxPreparedTransactions?: number | undefined;
                    gpWorkfileCompression?: boolean | undefined;
                    maxStatementMem?: number | undefined;
                    gpAddColumnInheritsTableSetting?: boolean | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet6"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            } & Record<Exclude<keyof I["clusterConfig"]["greenplumConfigSet6"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            pool?: ({
                effectiveConfig?: {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } | undefined;
                userConfig?: {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } & {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["pool"]["effectiveConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
                userConfig?: ({
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } & {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["pool"]["userConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
                defaultConfig?: ({
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } & {
                    mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                    size?: number | undefined;
                    clientIdleTimeout?: number | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["pool"]["defaultConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
            } & Record<Exclude<keyof I["clusterConfig"]["pool"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            backgroundActivities?: ({
                tableSizes?: {
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } | undefined;
                analyzeAndVacuum?: {
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } | undefined;
            } & {
                tableSizes?: ({
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } & {
                    starts?: ({
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] & ({
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & Record<Exclude<keyof I["clusterConfig"]["backgroundActivities"]["tableSizes"]["starts"][number], "$type" | "hours" | "minutes">, never>)[] & Record<Exclude<keyof I["clusterConfig"]["backgroundActivities"]["tableSizes"]["starts"], "$type" | keyof {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["backgroundActivities"]["tableSizes"], "$type" | "starts">, never>) | undefined;
                analyzeAndVacuum?: ({
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } & {
                    start?: ({
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & Record<Exclude<keyof I["clusterConfig"]["backgroundActivities"]["analyzeAndVacuum"]["start"], "$type" | "hours" | "minutes">, never>) | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["backgroundActivities"]["analyzeAndVacuum"], "$type" | "start" | "analyzeTimeout" | "vacuumTimeout">, never>) | undefined;
            } & Record<Exclude<keyof I["clusterConfig"]["backgroundActivities"], "$type" | "tableSizes" | "analyzeAndVacuum">, never>) | undefined;
            pxfConfig?: ({
                effectiveConfig?: {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } | undefined;
                userConfig?: {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } & {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["pxfConfig"]["effectiveConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
                userConfig?: ({
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } & {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["pxfConfig"]["userConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
                defaultConfig?: ({
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } & {
                    maxThreads?: number | undefined;
                    connectionTimeout?: number | undefined;
                    uploadTimeout?: number | undefined;
                    poolAllowCoreThreadTimeout?: boolean | undefined;
                    poolCoreSize?: number | undefined;
                    poolQueueCapacity?: number | undefined;
                    poolMaxSize?: number | undefined;
                    xmx?: number | undefined;
                    xms?: number | undefined;
                } & Record<Exclude<keyof I["clusterConfig"]["pxfConfig"]["defaultConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
            } & Record<Exclude<keyof I["clusterConfig"]["pxfConfig"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        } & Record<Exclude<keyof I["clusterConfig"], "$type" | "greenplumConfigSet617" | "greenplumConfigSet619" | "greenplumConfigSet621" | "greenplumConfigSet622" | "greenplumConfigSet6" | "pool" | "backgroundActivities" | "pxfConfig">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "health" | "hostGroupIds" | "monitoring" | "maintenanceWindow" | "environment" | "plannedOperation" | "cloudStorage" | "userName" | "masterHostCount" | "segmentHostCount" | "segmentInHost" | "masterConfig" | "segmentConfig" | "clusterConfig">, never>>(object: I): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry";
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
export declare const ClusterConfigSet: {
    $type: "yandex.cloud.mdb.greenplum.v1.ClusterConfigSet";
    encode(message: ClusterConfigSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfigSet;
    fromJSON(object: any): ClusterConfigSet;
    toJSON(message: ClusterConfigSet): unknown;
    fromPartial<I extends {
        greenplumConfigSet617?: {
            effectiveConfig?: {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } | undefined;
        } | undefined;
        greenplumConfigSet619?: {
            effectiveConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } | undefined;
            userConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } | undefined;
            defaultConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } | undefined;
        } | undefined;
        greenplumConfigSet621?: {
            effectiveConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
        } | undefined;
        greenplumConfigSet622?: {
            effectiveConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
        } | undefined;
        greenplumConfigSet6?: {
            effectiveConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
        } | undefined;
        pool?: {
            effectiveConfig?: {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } | undefined;
            userConfig?: {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } | undefined;
            defaultConfig?: {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } | undefined;
        } | undefined;
        backgroundActivities?: {
            tableSizes?: {
                starts?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                }[] | undefined;
            } | undefined;
            analyzeAndVacuum?: {
                start?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                analyzeTimeout?: number | undefined;
                vacuumTimeout?: number | undefined;
            } | undefined;
        } | undefined;
        pxfConfig?: {
            effectiveConfig?: {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } | undefined;
            userConfig?: {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } | undefined;
            defaultConfig?: {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        greenplumConfigSet617?: ({
            effectiveConfig?: {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet617"]["effectiveConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
            userConfig?: ({
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet617"]["userConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
            defaultConfig?: ({
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet617"]["defaultConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
        } & Record<Exclude<keyof I["greenplumConfigSet617"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        greenplumConfigSet619?: ({
            effectiveConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } | undefined;
            userConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } | undefined;
            defaultConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet619"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
            userConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet619"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
            defaultConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet619"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
        } & Record<Exclude<keyof I["greenplumConfigSet619"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        greenplumConfigSet621?: ({
            effectiveConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet621"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            userConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet621"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            defaultConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet621"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        } & Record<Exclude<keyof I["greenplumConfigSet621"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        greenplumConfigSet622?: ({
            effectiveConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet622"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            userConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet622"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            defaultConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet622"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        } & Record<Exclude<keyof I["greenplumConfigSet622"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        greenplumConfigSet6?: ({
            effectiveConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            userConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            defaultConfig?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet6"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            userConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet6"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            defaultConfig?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["greenplumConfigSet6"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        } & Record<Exclude<keyof I["greenplumConfigSet6"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        pool?: ({
            effectiveConfig?: {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } | undefined;
            userConfig?: {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } | undefined;
            defaultConfig?: {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } & {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } & Record<Exclude<keyof I["pool"]["effectiveConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
            userConfig?: ({
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } & {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } & Record<Exclude<keyof I["pool"]["userConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
            defaultConfig?: ({
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } & {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } & Record<Exclude<keyof I["pool"]["defaultConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
        } & Record<Exclude<keyof I["pool"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        backgroundActivities?: ({
            tableSizes?: {
                starts?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                }[] | undefined;
            } | undefined;
            analyzeAndVacuum?: {
                start?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                analyzeTimeout?: number | undefined;
                vacuumTimeout?: number | undefined;
            } | undefined;
        } & {
            tableSizes?: ({
                starts?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                }[] | undefined;
            } & {
                starts?: ({
                    hours?: number | undefined;
                    minutes?: number | undefined;
                }[] & ({
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & Record<Exclude<keyof I["backgroundActivities"]["tableSizes"]["starts"][number], "$type" | "hours" | "minutes">, never>)[] & Record<Exclude<keyof I["backgroundActivities"]["tableSizes"]["starts"], "$type" | keyof {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["backgroundActivities"]["tableSizes"], "$type" | "starts">, never>) | undefined;
            analyzeAndVacuum?: ({
                start?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                analyzeTimeout?: number | undefined;
                vacuumTimeout?: number | undefined;
            } & {
                start?: ({
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & Record<Exclude<keyof I["backgroundActivities"]["analyzeAndVacuum"]["start"], "$type" | "hours" | "minutes">, never>) | undefined;
                analyzeTimeout?: number | undefined;
                vacuumTimeout?: number | undefined;
            } & Record<Exclude<keyof I["backgroundActivities"]["analyzeAndVacuum"], "$type" | "start" | "analyzeTimeout" | "vacuumTimeout">, never>) | undefined;
        } & Record<Exclude<keyof I["backgroundActivities"], "$type" | "tableSizes" | "analyzeAndVacuum">, never>) | undefined;
        pxfConfig?: ({
            effectiveConfig?: {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } | undefined;
            userConfig?: {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } | undefined;
            defaultConfig?: {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } & {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } & Record<Exclude<keyof I["pxfConfig"]["effectiveConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
            userConfig?: ({
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } & {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } & Record<Exclude<keyof I["pxfConfig"]["userConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
            defaultConfig?: ({
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } & {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } & Record<Exclude<keyof I["pxfConfig"]["defaultConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
        } & Record<Exclude<keyof I["pxfConfig"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "greenplumConfigSet617" | "greenplumConfigSet619" | "greenplumConfigSet621" | "greenplumConfigSet622" | "greenplumConfigSet6" | "pool" | "backgroundActivities" | "pxfConfig">, never>>(object: I): ClusterConfigSet;
};
export declare const Monitoring: {
    $type: "yandex.cloud.mdb.greenplum.v1.Monitoring";
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
export declare const GreenplumConfig: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig";
    encode(message: GreenplumConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GreenplumConfig;
    fromJSON(object: any): GreenplumConfig;
    toJSON(message: GreenplumConfig): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        version?: string | undefined;
        assignPublicIp?: boolean | undefined;
        backupWindowStart?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } | undefined;
        access?: {
            dataLens?: boolean | undefined;
            webSql?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } | undefined;
    } & {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        version?: string | undefined;
        assignPublicIp?: boolean | undefined;
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
            dataTransfer?: boolean | undefined;
        } & {
            dataLens?: boolean | undefined;
            webSql?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } & Record<Exclude<keyof I["access"], "$type" | "dataLens" | "webSql" | "dataTransfer">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "zoneId" | "version" | "assignPublicIp" | "backupWindowStart" | "access">, never>>(object: I): GreenplumConfig;
};
export declare const Access: {
    $type: "yandex.cloud.mdb.greenplum.v1.Access";
    encode(message: Access, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Access;
    fromJSON(object: any): Access;
    toJSON(message: Access): unknown;
    fromPartial<I extends {
        dataLens?: boolean | undefined;
        webSql?: boolean | undefined;
        dataTransfer?: boolean | undefined;
    } & {
        dataLens?: boolean | undefined;
        webSql?: boolean | undefined;
        dataTransfer?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "dataLens" | "webSql" | "dataTransfer">, never>>(object: I): Access;
};
export declare const GreenplumRestoreConfig: {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumRestoreConfig";
    encode(message: GreenplumRestoreConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GreenplumRestoreConfig;
    fromJSON(object: any): GreenplumRestoreConfig;
    toJSON(message: GreenplumRestoreConfig): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        assignPublicIp?: boolean | undefined;
        backupWindowStart?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } | undefined;
        access?: {
            dataLens?: boolean | undefined;
            webSql?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } | undefined;
    } & {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        assignPublicIp?: boolean | undefined;
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
            dataTransfer?: boolean | undefined;
        } & {
            dataLens?: boolean | undefined;
            webSql?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } & Record<Exclude<keyof I["access"], "$type" | "dataLens" | "webSql" | "dataTransfer">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "zoneId" | "assignPublicIp" | "backupWindowStart" | "access">, never>>(object: I): GreenplumRestoreConfig;
};
export declare const RestoreResources: {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreResources";
    encode(message: RestoreResources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreResources;
    fromJSON(object: any): RestoreResources;
    toJSON(message: RestoreResources): unknown;
    fromPartial<I extends {
        diskSize?: number | undefined;
        resourcePresetId?: string | undefined;
    } & {
        diskSize?: number | undefined;
        resourcePresetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskSize" | "resourcePresetId">, never>>(object: I): RestoreResources;
};
export declare const CloudStorage: {
    $type: "yandex.cloud.mdb.greenplum.v1.CloudStorage";
    encode(message: CloudStorage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CloudStorage;
    fromJSON(object: any): CloudStorage;
    toJSON(message: CloudStorage): unknown;
    fromPartial<I extends {
        enable?: boolean | undefined;
    } & {
        enable?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "enable">, never>>(object: I): CloudStorage;
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
