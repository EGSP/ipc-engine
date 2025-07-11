import _m0 from "protobufjs/minimal";
import { MaintenanceWindow, MaintenanceOperation } from "../../../../../yandex/cloud/mdb/redis/v1/maintenance";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { RedisConfigSet } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis";
import { Redisconfigset50 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0";
import { Redisconfigset60 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0";
import { Redisconfigset62 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2";
import { Redisconfigset70 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0";
export declare const protobufPackage = "yandex.cloud.mdb.redis.v1";
/**
 * Description of a Redis cluster. For more information, see
 * the Managed Service for Redis [documentation](/docs/managed-redis/concepts/).
 */
export interface Cluster {
    $type: "yandex.cloud.mdb.redis.v1.Cluster";
    /**
     * ID of the Redis cluster.
     * This ID is assigned by MDB at creation time.
     */
    id: string;
    /** ID of the folder that the Redis cluster belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /**
     * Name of the Redis cluster.
     * The name is unique within the folder. 3-63 characters long.
     */
    name: string;
    /** Description of the Redis cluster. 0-256 characters long. */
    description: string;
    /**
     * Custom labels for the Redis cluster as `key:value` pairs.
     * Maximum 64 per cluster.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Redis cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the Redis cluster. */
    monitoring: Monitoring[];
    /** Configuration of the Redis cluster. */
    config?: ClusterConfig;
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Cluster status. */
    status: Cluster_Status;
    /** Redis cluster mode on/off. */
    sharded: boolean;
    /** Maintenance window for the cluster. */
    maintenanceWindow?: MaintenanceWindow;
    /** Planned maintenance operation to be started for the cluster within the nearest [maintenance_window]. */
    plannedOperation?: MaintenanceOperation;
    /** User security groups */
    securityGroupIds: string[];
    /** TLS port and functionality on\off */
    tlsEnabled: boolean;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Persistence mode */
    persistenceMode: Cluster_PersistenceMode;
    /** Enable FQDN instead of ip */
    announceHostnames: boolean;
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
    /** HEALTH_UNKNOWN - Cluster is in unknown state (we have no data) */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is alive and well (all hosts are alive) */
    ALIVE = 1,
    /** DEAD - Cluster is inoperable (it cannot perform any of its essential functions) */
    DEAD = 2,
    /** DEGRADED - Cluster is partially alive (it can perform some of its essential functions) */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function cluster_HealthFromJSON(object: any): Cluster_Health;
export declare function cluster_HealthToJSON(object: Cluster_Health): string;
export declare enum Cluster_Status {
    /** STATUS_UNKNOWN - Cluster status is unknown */
    STATUS_UNKNOWN = 0,
    /** CREATING - Cluster is being created */
    CREATING = 1,
    /** RUNNING - Cluster is running */
    RUNNING = 2,
    /** ERROR - Cluster failed */
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
export declare enum Cluster_PersistenceMode {
    /** ON - cluster persistence mode on */
    ON = 0,
    /** OFF - cluster persistence mode off */
    OFF = 1,
    UNRECOGNIZED = -1
}
export declare function cluster_PersistenceModeFromJSON(object: any): Cluster_PersistenceMode;
export declare function cluster_PersistenceModeToJSON(object: Cluster_PersistenceMode): string;
export interface Cluster_LabelsEntry {
    $type: "yandex.cloud.mdb.redis.v1.Cluster.LabelsEntry";
    key: string;
    value: string;
}
export interface Monitoring {
    $type: "yandex.cloud.mdb.redis.v1.Monitoring";
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the Redis cluster. */
    link: string;
}
export interface ClusterConfig {
    $type: "yandex.cloud.mdb.redis.v1.ClusterConfig";
    /** Version of Redis server software. */
    version: string;
    /** Configuration of a Redis 5.0 server. */
    redisConfig50?: Redisconfigset50 | undefined;
    /** Configuration of a Redis 6.0 server. */
    redisConfig60?: Redisconfigset60 | undefined;
    /** Configuration of a Redis 6.2 server. */
    redisConfig62?: Redisconfigset62 | undefined;
    /** Configuration of a Redis 7.0 server. */
    redisConfig70?: Redisconfigset70 | undefined;
    /** Resources allocated to Redis hosts. */
    resources?: Resources;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart?: TimeOfDay;
    /** Access policy to DB */
    access?: Access;
    /** Unified configuration of a Redis cluster. */
    redis?: RedisConfigSet;
}
export interface Shard {
    $type: "yandex.cloud.mdb.redis.v1.Shard";
    /**
     * Name of the Redis shard. The shard name is assigned by user at creation time, and cannot be changed.
     * 1-63 characters long.
     */
    name: string;
    /** ID of the Redis cluster the shard belongs to. The ID is assigned by MDB at creation time. */
    clusterId: string;
}
export interface Host {
    $type: "yandex.cloud.mdb.redis.v1.Host";
    /**
     * Name of the Redis host. The host name is assigned by MDB at creation time, and cannot be changed.
     * 1-63 characters long.
     *
     * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
     */
    name: string;
    /** ID of the Redis cluster. The ID is assigned by MDB at creation time. */
    clusterId: string;
    /** ID of the availability zone where the Redis host resides. */
    zoneId: string;
    /** ID of the subnet that the host belongs to. */
    subnetId: string;
    /** Resources allocated to the Redis host. */
    resources?: Resources;
    /** Role of the host in the cluster. */
    role: Host_Role;
    /** Status code of the aggregated health of the host. */
    health: Host_Health;
    /** Services provided by the host. */
    services: Service[];
    shardName: string;
    /**
     * A replica with a low priority number is considered better for promotion.
     * A replica with priority of 0 will never be selected by Redis Sentinel for promotion.
     * Works only for non-sharded clusters. Default value is 100.
     */
    replicaPriority?: number;
    /** Flag showing public IP assignment status to this host. */
    assignPublicIp: boolean;
}
export declare enum Host_Role {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    ROLE_UNKNOWN = 0,
    /** MASTER - Host is the master Redis server in the cluster. */
    MASTER = 1,
    /** REPLICA - Host is a replica (standby) Redis server in the cluster. */
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
    /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
    DEAD = 2,
    /** DEGRADED - The host is degraded, and can perform only some of its essential functions. */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function host_HealthFromJSON(object: any): Host_Health;
export declare function host_HealthToJSON(object: Host_Health): string;
export interface Service {
    $type: "yandex.cloud.mdb.redis.v1.Service";
    /** Type of the service provided by the host. */
    type: Service_Type;
    /** Status code of server availability. */
    health: Service_Health;
}
export declare enum Service_Type {
    TYPE_UNSPECIFIED = 0,
    /** REDIS - The host is a Redis server. */
    REDIS = 1,
    /** ARBITER - The host provides a Sentinel-only service (a quorum node). */
    ARBITER = 2,
    /** REDIS_CLUSTER - The host is a Redis Cluster node. */
    REDIS_CLUSTER = 3,
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
    $type: "yandex.cloud.mdb.redis.v1.Resources";
    /**
     * ID of the preset for computational resources available to a host (CPU, memory etc.).
     * All available presets are listed in the [documentation](/docs/managed-redis/concepts/instance-types).
     */
    resourcePresetId: string;
    /** Volume of the storage available to a host, in bytes. */
    diskSize: number;
    /**
     * Type of the storage environment for the host.
     * Possible values:
     * * network-ssd - network SSD drive,
     * * local-ssd - local SSD storage.
     */
    diskTypeId: string;
}
export interface Access {
    $type: "yandex.cloud.mdb.redis.v1.Access";
    /** Allow access for DataLens */
    dataLens: boolean;
}
export declare const Cluster: {
    $type: "yandex.cloud.mdb.redis.v1.Cluster";
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
            } | undefined;
            redisConfig50?: {
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            redisConfig60?: {
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            redisConfig62?: {
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig70?: {
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
            } | undefined;
            redis?: {
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
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
        monitoring?: {
            link?: string | undefined;
            description?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        plannedOperation?: {
            info?: string | undefined;
            delayedUntil?: Date | undefined;
        } | undefined;
        sharded?: boolean | undefined;
        tlsEnabled?: boolean | undefined;
        persistenceMode?: Cluster_PersistenceMode | undefined;
        announceHostnames?: boolean | undefined;
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
            } | undefined;
            redisConfig50?: {
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            redisConfig60?: {
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            redisConfig62?: {
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig70?: {
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
            } | undefined;
            redis?: {
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
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
            } & {
                dataLens?: boolean | undefined;
            } & Record<Exclude<keyof I["config"]["access"], "$type" | "dataLens">, never>) | undefined;
            redisConfig50?: ({
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig50"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig50"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig50"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
                userConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig50"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig50"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig50"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
                defaultConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig50"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig50"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig50"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["redisConfig50"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            redisConfig60?: ({
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig60"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig60"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig60"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
                userConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig60"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig60"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig60"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
                defaultConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig60"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig60"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig60"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["redisConfig60"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            redisConfig62?: ({
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig62"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig62"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    maxmemoryPercent?: number | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig62"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                userConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig62"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig62"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    maxmemoryPercent?: number | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig62"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                defaultConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig62"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig62"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    maxmemoryPercent?: number | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig62"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["redisConfig62"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            redisConfig70?: ({
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig70"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig70"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    maxmemoryPercent?: number | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig70"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                userConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig70"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig70"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    maxmemoryPercent?: number | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig70"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                defaultConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig70"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redisConfig70"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    maxmemoryPercent?: number | undefined;
                } & Record<Exclude<keyof I["config"]["redisConfig70"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["redisConfig70"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            redis?: ({
                effectiveConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                userConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
                defaultConfig?: {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } | undefined;
            } & {
                effectiveConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redis"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redis"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    maxmemoryPercent?: number | undefined;
                } & Record<Exclude<keyof I["config"]["redis"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                userConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redis"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redis"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    maxmemoryPercent?: number | undefined;
                } & Record<Exclude<keyof I["config"]["redis"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                defaultConfig?: ({
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    clientOutputBufferLimitNormal?: {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } | undefined;
                    maxmemoryPercent?: number | undefined;
                } & {
                    timeout?: number | undefined;
                    password?: string | undefined;
                    databases?: number | undefined;
                    maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                    notifyKeyspaceEvents?: string | undefined;
                    slowlogLogSlowerThan?: number | undefined;
                    slowlogMaxLen?: number | undefined;
                    clientOutputBufferLimitPubsub?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redis"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    clientOutputBufferLimitNormal?: ({
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & {
                        hardLimit?: number | undefined;
                        softLimit?: number | undefined;
                        softSeconds?: number | undefined;
                    } & Record<Exclude<keyof I["config"]["redis"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    maxmemoryPercent?: number | undefined;
                } & Record<Exclude<keyof I["config"]["redis"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["redis"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "redisConfig50" | "redisConfig60" | "redisConfig62" | "redisConfig70" | "redis">, never>) | undefined;
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
                day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
        sharded?: boolean | undefined;
        tlsEnabled?: boolean | undefined;
        persistenceMode?: Cluster_PersistenceMode | undefined;
        announceHostnames?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "health" | "monitoring" | "maintenanceWindow" | "environment" | "plannedOperation" | "sharded" | "tlsEnabled" | "persistenceMode" | "announceHostnames">, never>>(object: I): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.mdb.redis.v1.Cluster.LabelsEntry";
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
    $type: "yandex.cloud.mdb.redis.v1.Monitoring";
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
    $type: "yandex.cloud.mdb.redis.v1.ClusterConfig";
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
        } | undefined;
        redisConfig50?: {
            effectiveConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            userConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            defaultConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        redisConfig60?: {
            effectiveConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            userConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            defaultConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        redisConfig62?: {
            effectiveConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            userConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            defaultConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
        } | undefined;
        redisConfig70?: {
            effectiveConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            userConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            defaultConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
        } | undefined;
        redis?: {
            effectiveConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            userConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            defaultConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
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
        } & {
            dataLens?: boolean | undefined;
        } & Record<Exclude<keyof I["access"], "$type" | "dataLens">, never>) | undefined;
        redisConfig50?: ({
            effectiveConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            userConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            defaultConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig50"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig50"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["redisConfig50"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            userConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig50"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig50"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["redisConfig50"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            defaultConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig50"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig50"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["redisConfig50"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
        } & Record<Exclude<keyof I["redisConfig50"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        redisConfig60?: ({
            effectiveConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            userConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            defaultConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig60"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig60"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["redisConfig60"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            userConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig60"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig60"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["redisConfig60"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            defaultConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig60"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig60"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["redisConfig60"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
        } & Record<Exclude<keyof I["redisConfig60"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        redisConfig62?: ({
            effectiveConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            userConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            defaultConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig62"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig62"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig62"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            userConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig62"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig62"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig62"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            defaultConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig62"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig62"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig62"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
        } & Record<Exclude<keyof I["redisConfig62"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        redisConfig70?: ({
            effectiveConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            userConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            defaultConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig70"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig70"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig70"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            userConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig70"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig70"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig70"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            defaultConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig70"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redisConfig70"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig70"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
        } & Record<Exclude<keyof I["redisConfig70"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
        redis?: ({
            effectiveConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            userConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            defaultConfig?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
        } & {
            effectiveConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redis"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redis"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["redis"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            userConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redis"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redis"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["redis"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            defaultConfig?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redis"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["redis"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["redis"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
        } & Record<Exclude<keyof I["redis"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "version" | "backupWindowStart" | "access" | "redisConfig50" | "redisConfig60" | "redisConfig62" | "redisConfig70" | "redis">, never>>(object: I): ClusterConfig;
};
export declare const Shard: {
    $type: "yandex.cloud.mdb.redis.v1.Shard";
    encode(message: Shard, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Shard;
    fromJSON(object: any): Shard;
    toJSON(message: Shard): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "clusterId">, never>>(object: I): Shard;
};
export declare const Host: {
    $type: "yandex.cloud.mdb.redis.v1.Host";
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
        shardName?: string | undefined;
        replicaPriority?: number | undefined;
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
        shardName?: string | undefined;
        replicaPriority?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "role" | "subnetId" | "zoneId" | "resources" | "services" | "health" | "clusterId" | "assignPublicIp" | "shardName" | "replicaPriority">, never>>(object: I): Host;
};
export declare const Service: {
    $type: "yandex.cloud.mdb.redis.v1.Service";
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
    $type: "yandex.cloud.mdb.redis.v1.Resources";
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
    $type: "yandex.cloud.mdb.redis.v1.Access";
    encode(message: Access, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Access;
    fromJSON(object: any): Access;
    toJSON(message: Access): unknown;
    fromPartial<I extends {
        dataLens?: boolean | undefined;
    } & {
        dataLens?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "dataLens">, never>>(object: I): Access;
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
