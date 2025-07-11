import _m0 from "protobufjs/minimal";
import { MaintenanceWindow, MaintenanceOperation } from "../../../../../yandex/cloud/mdb/kafka/v1/maintenance";
import { CompressionType, SaslMechanism } from "../../../../../yandex/cloud/mdb/kafka/v1/common";
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
/**
 * An Apache Kafka® cluster resource.
 * For more information, see the [Concepts](/docs/managed-kafka/concepts) section of the documentation.
 */
export interface Cluster {
    $type: "yandex.cloud.mdb.kafka.v1.Cluster";
    /**
     * ID of the Apache Kafka® cluster.
     * This ID is assigned at creation time.
     */
    id: string;
    /** ID of the folder that the Apache Kafka® cluster belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the Apache Kafka® cluster.
     * The name must be unique within the folder. 1-63 characters long. Value must match the regular expression `[a-zA-Z0-9_-]*`.
     */
    name: string;
    /** Description of the Apache Kafka® cluster. 0-256 characters long. */
    description: string;
    /**
     * Custom labels for the Apache Kafka® cluster as `key:value` pairs.
     * A maximum of 64 labels per resource is allowed.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Apache Kafka® cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the Apache Kafka® cluster. */
    monitoring: Monitoring[];
    /** Configuration of the Apache Kafka® cluster. */
    config?: ConfigSpec;
    /** ID of the network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** User security groups */
    securityGroupIds: string[];
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Window of maintenance operations. */
    maintenanceWindow?: MaintenanceWindow;
    /** Scheduled maintenance operation. */
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
    $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry";
    key: string;
    value: string;
}
/** Metadata of monitoring system. */
export interface Monitoring {
    $type: "yandex.cloud.mdb.kafka.v1.Monitoring";
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the Apache Kafka® cluster. */
    link: string;
}
export interface ConfigSpec {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec";
    /** Version of Apache Kafka® used in the cluster. Possible values: `2.1`, `2.6`. */
    version: string;
    /** Configuration and resource allocation for Kafka brokers. */
    kafka?: ConfigSpec_Kafka;
    /** Configuration and resource allocation for ZooKeeper hosts. */
    zookeeper?: ConfigSpec_Zookeeper;
    /** IDs of availability zones where Kafka brokers reside. */
    zoneId: string[];
    /** The number of Kafka brokers deployed in each availability zone. */
    brokersCount?: number;
    /**
     * The flag that defines whether a public IP address is assigned to the cluster.
     * If the value is `true`, then Apache Kafka® cluster is available on the Internet via it's public IP address.
     */
    assignPublicIp: boolean;
    /** Allows to manage topics via AdminAPI */
    unmanagedTopics: boolean;
    /** Enables managed schema registry on cluster */
    schemaRegistry: boolean;
    /** Access policy for external services. */
    access?: Access;
    /** Configuration of REST API. */
    restApiConfig?: ConfigSpec_RestAPIConfig;
}
export interface ConfigSpec_Kafka {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Kafka";
    /** Resources allocated to Kafka brokers. */
    resources?: Resources;
    kafkaConfig28?: Kafkaconfig28 | undefined;
    kafkaConfig3?: KafkaConfig3 | undefined;
}
export interface ConfigSpec_Zookeeper {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Zookeeper";
    /** Resources allocated to ZooKeeper hosts. */
    resources?: Resources;
}
export interface ConfigSpec_RestAPIConfig {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.RestAPIConfig";
    /** Is REST API enabled for this cluster. */
    enabled: boolean;
}
export interface Resources {
    $type: "yandex.cloud.mdb.kafka.v1.Resources";
    /**
     * ID of the preset for computational resources available to a host (CPU, memory, etc.).
     * All available presets are listed in the [documentation](/docs/managed-kafka/concepts/instance-types).
     */
    resourcePresetId: string;
    /** Volume of the storage available to a host, in bytes. Must be greater than 2 * partition segment size in bytes * partitions count, so each partition can have one active segment file and one closed segment file that can be deleted. */
    diskSize: number;
    /** Type of the storage environment for the host. */
    diskTypeId: string;
}
/** Kafka version 2.8 broker configuration. */
export interface Kafkaconfig28 {
    $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig2_8";
    /** Cluster topics compression type. */
    compressionType: CompressionType;
    /**
     * The number of messages accumulated on a log partition before messages are flushed to disk.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.flush_messages] setting.
     */
    logFlushIntervalMessages?: number;
    /**
     * The maximum time (in milliseconds) that a message in any topic is kept in memory before flushed to disk.
     * If not set, the value of [log_flush_scheduler_interval_ms] is used.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.flush_ms] setting.
     */
    logFlushIntervalMs?: number;
    /**
     * The frequency of checks (in milliseconds) for any logs that need to be flushed to disk.
     * This check is done by the log flusher.
     */
    logFlushSchedulerIntervalMs?: number;
    /**
     * Partition size limit; Kafka will discard old log segments to free up space if `delete` [TopicConfig2_8.cleanup_policy] is in effect.
     * This setting is helpful if you need to control the size of a log due to limited disk space.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.retention_bytes] setting.
     */
    logRetentionBytes?: number;
    /** The number of hours to keep a log segment file before deleting it. */
    logRetentionHours?: number;
    /**
     * The number of minutes to keep a log segment file before deleting it.
     *
     * If not set, the value of [log_retention_hours] is used.
     */
    logRetentionMinutes?: number;
    /**
     * The number of milliseconds to keep a log segment file before deleting it.
     *
     * If not set, the value of [log_retention_minutes] is used.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.retention_ms] setting.
     */
    logRetentionMs?: number;
    /**
     * The maximum size of a single log file.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.segment_bytes] setting.
     */
    logSegmentBytes?: number;
    /**
     * Should pre allocate file when create new segment?
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.preallocate] setting.
     */
    logPreallocate?: boolean;
    /** The SO_SNDBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
    socketSendBufferBytes?: number;
    /** The SO_RCVBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
    socketReceiveBufferBytes?: number;
    /** Enable auto creation of topic on the server */
    autoCreateTopicsEnable?: boolean;
    /** Default number of partitions per topic on the whole cluster */
    numPartitions?: number;
    /** Default replication factor of the topic on the whole cluster */
    defaultReplicationFactor?: number;
    /** The largest record batch size allowed by Kafka. Default value: 1048588. */
    messageMaxBytes?: number;
    /** The number of bytes of messages to attempt to fetch for each partition. Default value: 1048576. */
    replicaFetchMaxBytes?: number;
    /** A list of cipher suites. */
    sslCipherSuites: string[];
    /** Offset storage time after a consumer group loses all its consumers. Default: 10080. */
    offsetsRetentionMinutes?: number;
    /** The list of SASL mechanisms enabled in the Kafka server. Default: [SCRAM_SHA_512]. */
    saslEnabledMechanisms: SaslMechanism[];
}
/** Kafka version 3.x broker configuration. */
export interface KafkaConfig3 {
    $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig3";
    /** Cluster topics compression type. */
    compressionType: CompressionType;
    /**
     * The number of messages accumulated on a log partition before messages are flushed to disk.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.flush_messages] setting.
     */
    logFlushIntervalMessages?: number;
    /**
     * The maximum time (in milliseconds) that a message in any topic is kept in memory before flushed to disk.
     * If not set, the value of [log_flush_scheduler_interval_ms] is used.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.flush_ms] setting.
     */
    logFlushIntervalMs?: number;
    /**
     * The frequency of checks (in milliseconds) for any logs that need to be flushed to disk.
     * This check is done by the log flusher.
     */
    logFlushSchedulerIntervalMs?: number;
    /**
     * Partition size limit; Kafka will discard old log segments to free up space if `delete` [TopicConfig3.cleanup_policy] is in effect.
     * This setting is helpful if you need to control the size of a log due to limited disk space.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.retention_bytes] setting.
     */
    logRetentionBytes?: number;
    /** The number of hours to keep a log segment file before deleting it. */
    logRetentionHours?: number;
    /**
     * The number of minutes to keep a log segment file before deleting it.
     *
     * If not set, the value of [log_retention_hours] is used.
     */
    logRetentionMinutes?: number;
    /**
     * The number of milliseconds to keep a log segment file before deleting it.
     *
     * If not set, the value of [log_retention_minutes] is used.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.retention_ms] setting.
     */
    logRetentionMs?: number;
    /**
     * The maximum size of a single log file.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.segment_bytes] setting.
     */
    logSegmentBytes?: number;
    /**
     * Should pre allocate file when create new segment?
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.preallocate] setting.
     */
    logPreallocate?: boolean;
    /** The SO_SNDBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
    socketSendBufferBytes?: number;
    /** The SO_RCVBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
    socketReceiveBufferBytes?: number;
    /** Enable auto creation of topic on the server */
    autoCreateTopicsEnable?: boolean;
    /** Default number of partitions per topic on the whole cluster */
    numPartitions?: number;
    /** Default replication factor of the topic on the whole cluster */
    defaultReplicationFactor?: number;
    /** The largest record batch size allowed by Kafka. Default value: 1048588. */
    messageMaxBytes?: number;
    /** The number of bytes of messages to attempt to fetch for each partition. Default value: 1048576. */
    replicaFetchMaxBytes?: number;
    /** A list of cipher suites. */
    sslCipherSuites: string[];
    /** Offset storage time after a consumer group loses all its consumers. Default: 10080. */
    offsetsRetentionMinutes?: number;
    /** The list of SASL mechanisms enabled in the Kafka server. Default: [SCRAM_SHA_512]. */
    saslEnabledMechanisms: SaslMechanism[];
}
/** Cluster host metadata. */
export interface Host {
    $type: "yandex.cloud.mdb.kafka.v1.Host";
    /** Name of the host. */
    name: string;
    /** ID of the Apache Kafka® cluster. */
    clusterId: string;
    /** ID of the availability zone where the host resides. */
    zoneId: string;
    /** Host role. */
    role: Host_Role;
    /** Computational resources allocated to the host. */
    resources?: Resources;
    /** Aggregated host health data. */
    health: Host_Health;
    /** ID of the subnet the host resides in. */
    subnetId: string;
    /**
     * The flag that defines whether a public IP address is assigned to the node.
     *
     * If the value is `true`, then this node is available on the Internet via it's public IP address.
     */
    assignPublicIp: boolean;
}
export declare enum Host_Role {
    ROLE_UNSPECIFIED = 0,
    /** KAFKA - the host is a Kafka broker. */
    KAFKA = 1,
    /** ZOOKEEPER - the host is a ZooKeeper server. */
    ZOOKEEPER = 2,
    UNRECOGNIZED = -1
}
export declare function host_RoleFromJSON(object: any): Host_Role;
export declare function host_RoleToJSON(object: Host_Role): string;
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
export interface Access {
    $type: "yandex.cloud.mdb.kafka.v1.Access";
    /** Allow access for DataTransfer. */
    dataTransfer: boolean;
}
export declare const Cluster: {
    $type: "yandex.cloud.mdb.kafka.v1.Cluster";
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
            zoneId?: string[] | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
            zookeeper?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            kafka?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                kafkaConfig28?: {
                    compressionType?: CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: SaslMechanism[] | undefined;
                } | undefined;
                kafkaConfig3?: {
                    compressionType?: CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: SaslMechanism[] | undefined;
                } | undefined;
            } | undefined;
            access?: {
                dataTransfer?: boolean | undefined;
            } | undefined;
            brokersCount?: number | undefined;
            unmanagedTopics?: boolean | undefined;
            schemaRegistry?: boolean | undefined;
            restApiConfig?: {
                enabled?: boolean | undefined;
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
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
            zoneId?: string[] | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
            zookeeper?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            kafka?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                kafkaConfig28?: {
                    compressionType?: CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: SaslMechanism[] | undefined;
                } | undefined;
                kafkaConfig3?: {
                    compressionType?: CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: SaslMechanism[] | undefined;
                } | undefined;
            } | undefined;
            access?: {
                dataTransfer?: boolean | undefined;
            } | undefined;
            brokersCount?: number | undefined;
            unmanagedTopics?: boolean | undefined;
            schemaRegistry?: boolean | undefined;
            restApiConfig?: {
                enabled?: boolean | undefined;
            } | undefined;
        } & {
            zoneId?: (string[] & string[] & Record<Exclude<keyof I["config"]["zoneId"], "$type" | keyof string[]>, never>) | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
            zookeeper?: ({
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
                } & Record<Exclude<keyof I["config"]["zookeeper"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["zookeeper"], "$type" | "resources">, never>) | undefined;
            kafka?: ({
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                kafkaConfig28?: {
                    compressionType?: CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: SaslMechanism[] | undefined;
                } | undefined;
                kafkaConfig3?: {
                    compressionType?: CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: SaslMechanism[] | undefined;
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
                } & Record<Exclude<keyof I["config"]["kafka"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                kafkaConfig28?: ({
                    compressionType?: CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: SaslMechanism[] | undefined;
                } & {
                    compressionType?: CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["config"]["kafka"]["kafkaConfig28"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: (SaslMechanism[] & SaslMechanism[] & Record<Exclude<keyof I["config"]["kafka"]["kafkaConfig28"]["saslEnabledMechanisms"], "$type" | keyof SaslMechanism[]>, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["kafka"]["kafkaConfig28"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
                kafkaConfig3?: ({
                    compressionType?: CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: SaslMechanism[] | undefined;
                } & {
                    compressionType?: CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["config"]["kafka"]["kafkaConfig3"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: (SaslMechanism[] & SaslMechanism[] & Record<Exclude<keyof I["config"]["kafka"]["kafkaConfig3"]["saslEnabledMechanisms"], "$type" | keyof SaslMechanism[]>, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["kafka"]["kafkaConfig3"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["kafka"], "$type" | "resources" | "kafkaConfig28" | "kafkaConfig3">, never>) | undefined;
            access?: ({
                dataTransfer?: boolean | undefined;
            } & {
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["config"]["access"], "$type" | "dataTransfer">, never>) | undefined;
            brokersCount?: number | undefined;
            unmanagedTopics?: boolean | undefined;
            schemaRegistry?: boolean | undefined;
            restApiConfig?: ({
                enabled?: boolean | undefined;
            } & {
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["config"]["restApiConfig"], "$type" | "enabled">, never>) | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "zoneId" | "version" | "assignPublicIp" | "zookeeper" | "kafka" | "access" | "brokersCount" | "unmanagedTopics" | "schemaRegistry" | "restApiConfig">, never>) | undefined;
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
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "health" | "hostGroupIds" | "monitoring" | "maintenanceWindow" | "environment" | "plannedOperation">, never>>(object: I): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry";
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
    $type: "yandex.cloud.mdb.kafka.v1.Monitoring";
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
export declare const ConfigSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec";
    encode(message: ConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec;
    fromJSON(object: any): ConfigSpec;
    toJSON(message: ConfigSpec): unknown;
    fromPartial<I extends {
        zoneId?: string[] | undefined;
        version?: string | undefined;
        assignPublicIp?: boolean | undefined;
        zookeeper?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
        } | undefined;
        kafka?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            kafkaConfig28?: {
                compressionType?: CompressionType | undefined;
                logFlushIntervalMessages?: number | undefined;
                logFlushIntervalMs?: number | undefined;
                logFlushSchedulerIntervalMs?: number | undefined;
                logRetentionBytes?: number | undefined;
                logRetentionHours?: number | undefined;
                logRetentionMinutes?: number | undefined;
                logRetentionMs?: number | undefined;
                logSegmentBytes?: number | undefined;
                logPreallocate?: boolean | undefined;
                socketSendBufferBytes?: number | undefined;
                socketReceiveBufferBytes?: number | undefined;
                autoCreateTopicsEnable?: boolean | undefined;
                numPartitions?: number | undefined;
                defaultReplicationFactor?: number | undefined;
                messageMaxBytes?: number | undefined;
                replicaFetchMaxBytes?: number | undefined;
                sslCipherSuites?: string[] | undefined;
                offsetsRetentionMinutes?: number | undefined;
                saslEnabledMechanisms?: SaslMechanism[] | undefined;
            } | undefined;
            kafkaConfig3?: {
                compressionType?: CompressionType | undefined;
                logFlushIntervalMessages?: number | undefined;
                logFlushIntervalMs?: number | undefined;
                logFlushSchedulerIntervalMs?: number | undefined;
                logRetentionBytes?: number | undefined;
                logRetentionHours?: number | undefined;
                logRetentionMinutes?: number | undefined;
                logRetentionMs?: number | undefined;
                logSegmentBytes?: number | undefined;
                logPreallocate?: boolean | undefined;
                socketSendBufferBytes?: number | undefined;
                socketReceiveBufferBytes?: number | undefined;
                autoCreateTopicsEnable?: boolean | undefined;
                numPartitions?: number | undefined;
                defaultReplicationFactor?: number | undefined;
                messageMaxBytes?: number | undefined;
                replicaFetchMaxBytes?: number | undefined;
                sslCipherSuites?: string[] | undefined;
                offsetsRetentionMinutes?: number | undefined;
                saslEnabledMechanisms?: SaslMechanism[] | undefined;
            } | undefined;
        } | undefined;
        access?: {
            dataTransfer?: boolean | undefined;
        } | undefined;
        brokersCount?: number | undefined;
        unmanagedTopics?: boolean | undefined;
        schemaRegistry?: boolean | undefined;
        restApiConfig?: {
            enabled?: boolean | undefined;
        } | undefined;
    } & {
        zoneId?: (string[] & string[] & Record<Exclude<keyof I["zoneId"], "$type" | keyof string[]>, never>) | undefined;
        version?: string | undefined;
        assignPublicIp?: boolean | undefined;
        zookeeper?: ({
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
            } & Record<Exclude<keyof I["zookeeper"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        } & Record<Exclude<keyof I["zookeeper"], "$type" | "resources">, never>) | undefined;
        kafka?: ({
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            kafkaConfig28?: {
                compressionType?: CompressionType | undefined;
                logFlushIntervalMessages?: number | undefined;
                logFlushIntervalMs?: number | undefined;
                logFlushSchedulerIntervalMs?: number | undefined;
                logRetentionBytes?: number | undefined;
                logRetentionHours?: number | undefined;
                logRetentionMinutes?: number | undefined;
                logRetentionMs?: number | undefined;
                logSegmentBytes?: number | undefined;
                logPreallocate?: boolean | undefined;
                socketSendBufferBytes?: number | undefined;
                socketReceiveBufferBytes?: number | undefined;
                autoCreateTopicsEnable?: boolean | undefined;
                numPartitions?: number | undefined;
                defaultReplicationFactor?: number | undefined;
                messageMaxBytes?: number | undefined;
                replicaFetchMaxBytes?: number | undefined;
                sslCipherSuites?: string[] | undefined;
                offsetsRetentionMinutes?: number | undefined;
                saslEnabledMechanisms?: SaslMechanism[] | undefined;
            } | undefined;
            kafkaConfig3?: {
                compressionType?: CompressionType | undefined;
                logFlushIntervalMessages?: number | undefined;
                logFlushIntervalMs?: number | undefined;
                logFlushSchedulerIntervalMs?: number | undefined;
                logRetentionBytes?: number | undefined;
                logRetentionHours?: number | undefined;
                logRetentionMinutes?: number | undefined;
                logRetentionMs?: number | undefined;
                logSegmentBytes?: number | undefined;
                logPreallocate?: boolean | undefined;
                socketSendBufferBytes?: number | undefined;
                socketReceiveBufferBytes?: number | undefined;
                autoCreateTopicsEnable?: boolean | undefined;
                numPartitions?: number | undefined;
                defaultReplicationFactor?: number | undefined;
                messageMaxBytes?: number | undefined;
                replicaFetchMaxBytes?: number | undefined;
                sslCipherSuites?: string[] | undefined;
                offsetsRetentionMinutes?: number | undefined;
                saslEnabledMechanisms?: SaslMechanism[] | undefined;
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
            } & Record<Exclude<keyof I["kafka"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            kafkaConfig28?: ({
                compressionType?: CompressionType | undefined;
                logFlushIntervalMessages?: number | undefined;
                logFlushIntervalMs?: number | undefined;
                logFlushSchedulerIntervalMs?: number | undefined;
                logRetentionBytes?: number | undefined;
                logRetentionHours?: number | undefined;
                logRetentionMinutes?: number | undefined;
                logRetentionMs?: number | undefined;
                logSegmentBytes?: number | undefined;
                logPreallocate?: boolean | undefined;
                socketSendBufferBytes?: number | undefined;
                socketReceiveBufferBytes?: number | undefined;
                autoCreateTopicsEnable?: boolean | undefined;
                numPartitions?: number | undefined;
                defaultReplicationFactor?: number | undefined;
                messageMaxBytes?: number | undefined;
                replicaFetchMaxBytes?: number | undefined;
                sslCipherSuites?: string[] | undefined;
                offsetsRetentionMinutes?: number | undefined;
                saslEnabledMechanisms?: SaslMechanism[] | undefined;
            } & {
                compressionType?: CompressionType | undefined;
                logFlushIntervalMessages?: number | undefined;
                logFlushIntervalMs?: number | undefined;
                logFlushSchedulerIntervalMs?: number | undefined;
                logRetentionBytes?: number | undefined;
                logRetentionHours?: number | undefined;
                logRetentionMinutes?: number | undefined;
                logRetentionMs?: number | undefined;
                logSegmentBytes?: number | undefined;
                logPreallocate?: boolean | undefined;
                socketSendBufferBytes?: number | undefined;
                socketReceiveBufferBytes?: number | undefined;
                autoCreateTopicsEnable?: boolean | undefined;
                numPartitions?: number | undefined;
                defaultReplicationFactor?: number | undefined;
                messageMaxBytes?: number | undefined;
                replicaFetchMaxBytes?: number | undefined;
                sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["kafka"]["kafkaConfig28"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
                offsetsRetentionMinutes?: number | undefined;
                saslEnabledMechanisms?: (SaslMechanism[] & SaslMechanism[] & Record<Exclude<keyof I["kafka"]["kafkaConfig28"]["saslEnabledMechanisms"], "$type" | keyof SaslMechanism[]>, never>) | undefined;
            } & Record<Exclude<keyof I["kafka"]["kafkaConfig28"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
            kafkaConfig3?: ({
                compressionType?: CompressionType | undefined;
                logFlushIntervalMessages?: number | undefined;
                logFlushIntervalMs?: number | undefined;
                logFlushSchedulerIntervalMs?: number | undefined;
                logRetentionBytes?: number | undefined;
                logRetentionHours?: number | undefined;
                logRetentionMinutes?: number | undefined;
                logRetentionMs?: number | undefined;
                logSegmentBytes?: number | undefined;
                logPreallocate?: boolean | undefined;
                socketSendBufferBytes?: number | undefined;
                socketReceiveBufferBytes?: number | undefined;
                autoCreateTopicsEnable?: boolean | undefined;
                numPartitions?: number | undefined;
                defaultReplicationFactor?: number | undefined;
                messageMaxBytes?: number | undefined;
                replicaFetchMaxBytes?: number | undefined;
                sslCipherSuites?: string[] | undefined;
                offsetsRetentionMinutes?: number | undefined;
                saslEnabledMechanisms?: SaslMechanism[] | undefined;
            } & {
                compressionType?: CompressionType | undefined;
                logFlushIntervalMessages?: number | undefined;
                logFlushIntervalMs?: number | undefined;
                logFlushSchedulerIntervalMs?: number | undefined;
                logRetentionBytes?: number | undefined;
                logRetentionHours?: number | undefined;
                logRetentionMinutes?: number | undefined;
                logRetentionMs?: number | undefined;
                logSegmentBytes?: number | undefined;
                logPreallocate?: boolean | undefined;
                socketSendBufferBytes?: number | undefined;
                socketReceiveBufferBytes?: number | undefined;
                autoCreateTopicsEnable?: boolean | undefined;
                numPartitions?: number | undefined;
                defaultReplicationFactor?: number | undefined;
                messageMaxBytes?: number | undefined;
                replicaFetchMaxBytes?: number | undefined;
                sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["kafka"]["kafkaConfig3"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
                offsetsRetentionMinutes?: number | undefined;
                saslEnabledMechanisms?: (SaslMechanism[] & SaslMechanism[] & Record<Exclude<keyof I["kafka"]["kafkaConfig3"]["saslEnabledMechanisms"], "$type" | keyof SaslMechanism[]>, never>) | undefined;
            } & Record<Exclude<keyof I["kafka"]["kafkaConfig3"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
        } & Record<Exclude<keyof I["kafka"], "$type" | "resources" | "kafkaConfig28" | "kafkaConfig3">, never>) | undefined;
        access?: ({
            dataTransfer?: boolean | undefined;
        } & {
            dataTransfer?: boolean | undefined;
        } & Record<Exclude<keyof I["access"], "$type" | "dataTransfer">, never>) | undefined;
        brokersCount?: number | undefined;
        unmanagedTopics?: boolean | undefined;
        schemaRegistry?: boolean | undefined;
        restApiConfig?: ({
            enabled?: boolean | undefined;
        } & {
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["restApiConfig"], "$type" | "enabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "zoneId" | "version" | "assignPublicIp" | "zookeeper" | "kafka" | "access" | "brokersCount" | "unmanagedTopics" | "schemaRegistry" | "restApiConfig">, never>>(object: I): ConfigSpec;
};
export declare const ConfigSpec_Kafka: {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Kafka";
    encode(message: ConfigSpec_Kafka, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec_Kafka;
    fromJSON(object: any): ConfigSpec_Kafka;
    toJSON(message: ConfigSpec_Kafka): unknown;
    fromPartial<I extends {
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        kafkaConfig28?: {
            compressionType?: CompressionType | undefined;
            logFlushIntervalMessages?: number | undefined;
            logFlushIntervalMs?: number | undefined;
            logFlushSchedulerIntervalMs?: number | undefined;
            logRetentionBytes?: number | undefined;
            logRetentionHours?: number | undefined;
            logRetentionMinutes?: number | undefined;
            logRetentionMs?: number | undefined;
            logSegmentBytes?: number | undefined;
            logPreallocate?: boolean | undefined;
            socketSendBufferBytes?: number | undefined;
            socketReceiveBufferBytes?: number | undefined;
            autoCreateTopicsEnable?: boolean | undefined;
            numPartitions?: number | undefined;
            defaultReplicationFactor?: number | undefined;
            messageMaxBytes?: number | undefined;
            replicaFetchMaxBytes?: number | undefined;
            sslCipherSuites?: string[] | undefined;
            offsetsRetentionMinutes?: number | undefined;
            saslEnabledMechanisms?: SaslMechanism[] | undefined;
        } | undefined;
        kafkaConfig3?: {
            compressionType?: CompressionType | undefined;
            logFlushIntervalMessages?: number | undefined;
            logFlushIntervalMs?: number | undefined;
            logFlushSchedulerIntervalMs?: number | undefined;
            logRetentionBytes?: number | undefined;
            logRetentionHours?: number | undefined;
            logRetentionMinutes?: number | undefined;
            logRetentionMs?: number | undefined;
            logSegmentBytes?: number | undefined;
            logPreallocate?: boolean | undefined;
            socketSendBufferBytes?: number | undefined;
            socketReceiveBufferBytes?: number | undefined;
            autoCreateTopicsEnable?: boolean | undefined;
            numPartitions?: number | undefined;
            defaultReplicationFactor?: number | undefined;
            messageMaxBytes?: number | undefined;
            replicaFetchMaxBytes?: number | undefined;
            sslCipherSuites?: string[] | undefined;
            offsetsRetentionMinutes?: number | undefined;
            saslEnabledMechanisms?: SaslMechanism[] | undefined;
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
        kafkaConfig28?: ({
            compressionType?: CompressionType | undefined;
            logFlushIntervalMessages?: number | undefined;
            logFlushIntervalMs?: number | undefined;
            logFlushSchedulerIntervalMs?: number | undefined;
            logRetentionBytes?: number | undefined;
            logRetentionHours?: number | undefined;
            logRetentionMinutes?: number | undefined;
            logRetentionMs?: number | undefined;
            logSegmentBytes?: number | undefined;
            logPreallocate?: boolean | undefined;
            socketSendBufferBytes?: number | undefined;
            socketReceiveBufferBytes?: number | undefined;
            autoCreateTopicsEnable?: boolean | undefined;
            numPartitions?: number | undefined;
            defaultReplicationFactor?: number | undefined;
            messageMaxBytes?: number | undefined;
            replicaFetchMaxBytes?: number | undefined;
            sslCipherSuites?: string[] | undefined;
            offsetsRetentionMinutes?: number | undefined;
            saslEnabledMechanisms?: SaslMechanism[] | undefined;
        } & {
            compressionType?: CompressionType | undefined;
            logFlushIntervalMessages?: number | undefined;
            logFlushIntervalMs?: number | undefined;
            logFlushSchedulerIntervalMs?: number | undefined;
            logRetentionBytes?: number | undefined;
            logRetentionHours?: number | undefined;
            logRetentionMinutes?: number | undefined;
            logRetentionMs?: number | undefined;
            logSegmentBytes?: number | undefined;
            logPreallocate?: boolean | undefined;
            socketSendBufferBytes?: number | undefined;
            socketReceiveBufferBytes?: number | undefined;
            autoCreateTopicsEnable?: boolean | undefined;
            numPartitions?: number | undefined;
            defaultReplicationFactor?: number | undefined;
            messageMaxBytes?: number | undefined;
            replicaFetchMaxBytes?: number | undefined;
            sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["kafkaConfig28"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
            offsetsRetentionMinutes?: number | undefined;
            saslEnabledMechanisms?: (SaslMechanism[] & SaslMechanism[] & Record<Exclude<keyof I["kafkaConfig28"]["saslEnabledMechanisms"], "$type" | keyof SaslMechanism[]>, never>) | undefined;
        } & Record<Exclude<keyof I["kafkaConfig28"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
        kafkaConfig3?: ({
            compressionType?: CompressionType | undefined;
            logFlushIntervalMessages?: number | undefined;
            logFlushIntervalMs?: number | undefined;
            logFlushSchedulerIntervalMs?: number | undefined;
            logRetentionBytes?: number | undefined;
            logRetentionHours?: number | undefined;
            logRetentionMinutes?: number | undefined;
            logRetentionMs?: number | undefined;
            logSegmentBytes?: number | undefined;
            logPreallocate?: boolean | undefined;
            socketSendBufferBytes?: number | undefined;
            socketReceiveBufferBytes?: number | undefined;
            autoCreateTopicsEnable?: boolean | undefined;
            numPartitions?: number | undefined;
            defaultReplicationFactor?: number | undefined;
            messageMaxBytes?: number | undefined;
            replicaFetchMaxBytes?: number | undefined;
            sslCipherSuites?: string[] | undefined;
            offsetsRetentionMinutes?: number | undefined;
            saslEnabledMechanisms?: SaslMechanism[] | undefined;
        } & {
            compressionType?: CompressionType | undefined;
            logFlushIntervalMessages?: number | undefined;
            logFlushIntervalMs?: number | undefined;
            logFlushSchedulerIntervalMs?: number | undefined;
            logRetentionBytes?: number | undefined;
            logRetentionHours?: number | undefined;
            logRetentionMinutes?: number | undefined;
            logRetentionMs?: number | undefined;
            logSegmentBytes?: number | undefined;
            logPreallocate?: boolean | undefined;
            socketSendBufferBytes?: number | undefined;
            socketReceiveBufferBytes?: number | undefined;
            autoCreateTopicsEnable?: boolean | undefined;
            numPartitions?: number | undefined;
            defaultReplicationFactor?: number | undefined;
            messageMaxBytes?: number | undefined;
            replicaFetchMaxBytes?: number | undefined;
            sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["kafkaConfig3"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
            offsetsRetentionMinutes?: number | undefined;
            saslEnabledMechanisms?: (SaslMechanism[] & SaslMechanism[] & Record<Exclude<keyof I["kafkaConfig3"]["saslEnabledMechanisms"], "$type" | keyof SaslMechanism[]>, never>) | undefined;
        } & Record<Exclude<keyof I["kafkaConfig3"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "kafkaConfig28" | "kafkaConfig3">, never>>(object: I): ConfigSpec_Kafka;
};
export declare const ConfigSpec_Zookeeper: {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Zookeeper";
    encode(message: ConfigSpec_Zookeeper, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec_Zookeeper;
    fromJSON(object: any): ConfigSpec_Zookeeper;
    toJSON(message: ConfigSpec_Zookeeper): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "resources">, never>>(object: I): ConfigSpec_Zookeeper;
};
export declare const ConfigSpec_RestAPIConfig: {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.RestAPIConfig";
    encode(message: ConfigSpec_RestAPIConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec_RestAPIConfig;
    fromJSON(object: any): ConfigSpec_RestAPIConfig;
    toJSON(message: ConfigSpec_RestAPIConfig): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
    } & {
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled">, never>>(object: I): ConfigSpec_RestAPIConfig;
};
export declare const Resources: {
    $type: "yandex.cloud.mdb.kafka.v1.Resources";
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
export declare const Kafkaconfig28: {
    $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig2_8";
    encode(message: Kafkaconfig28, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Kafkaconfig28;
    fromJSON(object: any): Kafkaconfig28;
    toJSON(message: Kafkaconfig28): unknown;
    fromPartial<I extends {
        compressionType?: CompressionType | undefined;
        logFlushIntervalMessages?: number | undefined;
        logFlushIntervalMs?: number | undefined;
        logFlushSchedulerIntervalMs?: number | undefined;
        logRetentionBytes?: number | undefined;
        logRetentionHours?: number | undefined;
        logRetentionMinutes?: number | undefined;
        logRetentionMs?: number | undefined;
        logSegmentBytes?: number | undefined;
        logPreallocate?: boolean | undefined;
        socketSendBufferBytes?: number | undefined;
        socketReceiveBufferBytes?: number | undefined;
        autoCreateTopicsEnable?: boolean | undefined;
        numPartitions?: number | undefined;
        defaultReplicationFactor?: number | undefined;
        messageMaxBytes?: number | undefined;
        replicaFetchMaxBytes?: number | undefined;
        sslCipherSuites?: string[] | undefined;
        offsetsRetentionMinutes?: number | undefined;
        saslEnabledMechanisms?: SaslMechanism[] | undefined;
    } & {
        compressionType?: CompressionType | undefined;
        logFlushIntervalMessages?: number | undefined;
        logFlushIntervalMs?: number | undefined;
        logFlushSchedulerIntervalMs?: number | undefined;
        logRetentionBytes?: number | undefined;
        logRetentionHours?: number | undefined;
        logRetentionMinutes?: number | undefined;
        logRetentionMs?: number | undefined;
        logSegmentBytes?: number | undefined;
        logPreallocate?: boolean | undefined;
        socketSendBufferBytes?: number | undefined;
        socketReceiveBufferBytes?: number | undefined;
        autoCreateTopicsEnable?: boolean | undefined;
        numPartitions?: number | undefined;
        defaultReplicationFactor?: number | undefined;
        messageMaxBytes?: number | undefined;
        replicaFetchMaxBytes?: number | undefined;
        sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
        offsetsRetentionMinutes?: number | undefined;
        saslEnabledMechanisms?: (SaslMechanism[] & SaslMechanism[] & Record<Exclude<keyof I["saslEnabledMechanisms"], "$type" | keyof SaslMechanism[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>>(object: I): Kafkaconfig28;
};
export declare const KafkaConfig3: {
    $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig3";
    encode(message: KafkaConfig3, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KafkaConfig3;
    fromJSON(object: any): KafkaConfig3;
    toJSON(message: KafkaConfig3): unknown;
    fromPartial<I extends {
        compressionType?: CompressionType | undefined;
        logFlushIntervalMessages?: number | undefined;
        logFlushIntervalMs?: number | undefined;
        logFlushSchedulerIntervalMs?: number | undefined;
        logRetentionBytes?: number | undefined;
        logRetentionHours?: number | undefined;
        logRetentionMinutes?: number | undefined;
        logRetentionMs?: number | undefined;
        logSegmentBytes?: number | undefined;
        logPreallocate?: boolean | undefined;
        socketSendBufferBytes?: number | undefined;
        socketReceiveBufferBytes?: number | undefined;
        autoCreateTopicsEnable?: boolean | undefined;
        numPartitions?: number | undefined;
        defaultReplicationFactor?: number | undefined;
        messageMaxBytes?: number | undefined;
        replicaFetchMaxBytes?: number | undefined;
        sslCipherSuites?: string[] | undefined;
        offsetsRetentionMinutes?: number | undefined;
        saslEnabledMechanisms?: SaslMechanism[] | undefined;
    } & {
        compressionType?: CompressionType | undefined;
        logFlushIntervalMessages?: number | undefined;
        logFlushIntervalMs?: number | undefined;
        logFlushSchedulerIntervalMs?: number | undefined;
        logRetentionBytes?: number | undefined;
        logRetentionHours?: number | undefined;
        logRetentionMinutes?: number | undefined;
        logRetentionMs?: number | undefined;
        logSegmentBytes?: number | undefined;
        logPreallocate?: boolean | undefined;
        socketSendBufferBytes?: number | undefined;
        socketReceiveBufferBytes?: number | undefined;
        autoCreateTopicsEnable?: boolean | undefined;
        numPartitions?: number | undefined;
        defaultReplicationFactor?: number | undefined;
        messageMaxBytes?: number | undefined;
        replicaFetchMaxBytes?: number | undefined;
        sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
        offsetsRetentionMinutes?: number | undefined;
        saslEnabledMechanisms?: (SaslMechanism[] & SaslMechanism[] & Record<Exclude<keyof I["saslEnabledMechanisms"], "$type" | keyof SaslMechanism[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>>(object: I): KafkaConfig3;
};
export declare const Host: {
    $type: "yandex.cloud.mdb.kafka.v1.Host";
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
        health?: Host_Health | undefined;
        clusterId?: string | undefined;
        assignPublicIp?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "role" | "subnetId" | "zoneId" | "resources" | "health" | "clusterId" | "assignPublicIp">, never>>(object: I): Host;
};
export declare const Access: {
    $type: "yandex.cloud.mdb.kafka.v1.Access";
    encode(message: Access, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Access;
    fromJSON(object: any): Access;
    toJSON(message: Access): unknown;
    fromPartial<I extends {
        dataTransfer?: boolean | undefined;
    } & {
        dataTransfer?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "dataTransfer">, never>>(object: I): Access;
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
