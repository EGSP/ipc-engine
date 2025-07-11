import _m0 from "protobufjs/minimal";
import { Health } from "../../../../yandex/cloud/dataproc/v1/common";
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
/** A Data Proc cluster. For details about the concept, see [documentation](/docs/data-proc/concepts/). */
export interface Cluster {
    $type: "yandex.cloud.dataproc.v1.Cluster";
    /** ID of the cluster. Generated at creation time. */
    id: string;
    /** ID of the folder that the cluster belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the cluster. The name is unique within the folder. */
    name: string;
    /** Description of the cluster. */
    description: string;
    /** Cluster labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Monitoring systems relevant to the cluster. */
    monitoring: Monitoring[];
    /** Configuration of the cluster. */
    config?: ClusterConfig;
    /** Aggregated cluster health. */
    health: Health;
    /** Cluster status. */
    status: Cluster_Status;
    /** ID of the availability zone where the cluster resides. */
    zoneId: string;
    /** ID of service account for the Data Proc manager agent. */
    serviceAccountId: string;
    /** Object Storage bucket to be used for Data Proc jobs that are run in the cluster. */
    bucket: string;
    /** Whether UI Proxy feature is enabled. */
    uiProxy: boolean;
    /** User security groups. */
    securityGroupIds: string[];
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /**
     * ID of the cloud logging log group to write logs. If not set, default log group for the folder will be used.
     * To prevent logs from being sent to the cloud set cluster property dataproc:disable_cloud_logging = true
     */
    logGroupId: string;
}
export declare enum Cluster_Status {
    /** STATUS_UNKNOWN - Cluster state is unknown. */
    STATUS_UNKNOWN = 0,
    /** CREATING - Cluster is being created. */
    CREATING = 1,
    /** RUNNING - Cluster is running normally. */
    RUNNING = 2,
    /** ERROR - Cluster encountered a problem and cannot operate. */
    ERROR = 3,
    /** STOPPING - Cluster is stopping. */
    STOPPING = 4,
    /** STOPPED - Cluster stopped. */
    STOPPED = 5,
    /** STARTING - Cluster is starting. */
    STARTING = 6,
    UNRECOGNIZED = -1
}
export declare function cluster_StatusFromJSON(object: any): Cluster_Status;
export declare function cluster_StatusToJSON(object: Cluster_Status): string;
export interface Cluster_LabelsEntry {
    $type: "yandex.cloud.dataproc.v1.Cluster.LabelsEntry";
    key: string;
    value: string;
}
/** Metadata of a monitoring system for a Data Proc cluster. */
export interface Monitoring {
    $type: "yandex.cloud.dataproc.v1.Monitoring";
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system. */
    link: string;
}
/**
 * Hadoop configuration that describes services installed in a cluster,
 * their properties and settings.
 */
export interface HadoopConfig {
    $type: "yandex.cloud.dataproc.v1.HadoopConfig";
    /** Set of services used in the cluster (if empty, the default set is used). */
    services: HadoopConfig_Service[];
    /**
     * Properties set for all hosts in `*-site.xml` configurations. The key should indicate
     * the service and the property.
     *
     * For example, use the key 'hdfs:dfs.replication' to set the `dfs.replication` property
     * in the file `/etc/hadoop/conf/hdfs-site.xml`.
     */
    properties: {
        [key: string]: string;
    };
    /** List of public SSH keys to access to cluster hosts. */
    sshPublicKeys: string[];
    /** Set of init-actions */
    initializationActions: InitializationAction[];
}
export declare enum HadoopConfig_Service {
    SERVICE_UNSPECIFIED = 0,
    HDFS = 1,
    YARN = 2,
    MAPREDUCE = 3,
    HIVE = 4,
    TEZ = 5,
    ZOOKEEPER = 6,
    HBASE = 7,
    SQOOP = 8,
    FLUME = 9,
    SPARK = 10,
    ZEPPELIN = 11,
    OOZIE = 12,
    LIVY = 13,
    UNRECOGNIZED = -1
}
export declare function hadoopConfig_ServiceFromJSON(object: any): HadoopConfig_Service;
export declare function hadoopConfig_ServiceToJSON(object: HadoopConfig_Service): string;
export interface HadoopConfig_PropertiesEntry {
    $type: "yandex.cloud.dataproc.v1.HadoopConfig.PropertiesEntry";
    key: string;
    value: string;
}
export interface ClusterConfig {
    $type: "yandex.cloud.dataproc.v1.ClusterConfig";
    /**
     * Image version for cluster provisioning.
     * All available versions are listed in the [documentation](/docs/data-proc/concepts/environment).
     */
    versionId: string;
    /** Data Proc specific configuration options. */
    hadoop?: HadoopConfig;
}
export interface InitializationAction {
    $type: "yandex.cloud.dataproc.v1.InitializationAction";
    /** URI of the executable file */
    uri: string;
    /** Arguments to the initialization action */
    args: string[];
    /** Execution timeout */
    timeout: number;
}
export declare const Cluster: {
    $type: "yandex.cloud.dataproc.v1.Cluster";
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
            versionId?: string | undefined;
            hadoop?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                services?: HadoopConfig_Service[] | undefined;
                sshPublicKeys?: string[] | undefined;
                initializationActions?: {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        bucket?: string | undefined;
        logGroupId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        zoneId?: string | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        health?: Health | undefined;
        uiProxy?: boolean | undefined;
        hostGroupIds?: string[] | undefined;
        monitoring?: {
            link?: string | undefined;
            description?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Cluster_Status | undefined;
        config?: ({
            versionId?: string | undefined;
            hadoop?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                services?: HadoopConfig_Service[] | undefined;
                sshPublicKeys?: string[] | undefined;
                initializationActions?: {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            versionId?: string | undefined;
            hadoop?: ({
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                services?: HadoopConfig_Service[] | undefined;
                sshPublicKeys?: string[] | undefined;
                initializationActions?: {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] | undefined;
            } & {
                properties?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["config"]["hadoop"]["properties"], string | number>, never>) | undefined;
                services?: (HadoopConfig_Service[] & HadoopConfig_Service[] & Record<Exclude<keyof I["config"]["hadoop"]["services"], "$type" | keyof HadoopConfig_Service[]>, never>) | undefined;
                sshPublicKeys?: (string[] & string[] & Record<Exclude<keyof I["config"]["hadoop"]["sshPublicKeys"], "$type" | keyof string[]>, never>) | undefined;
                initializationActions?: ({
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[] & ({
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                } & {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: (string[] & string[] & Record<Exclude<keyof I["config"]["hadoop"]["initializationActions"][number]["args"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["config"]["hadoop"]["initializationActions"][number], "$type" | "uri" | "timeout" | "args">, never>)[] & Record<Exclude<keyof I["config"]["hadoop"]["initializationActions"], "$type" | keyof {
                    uri?: string | undefined;
                    timeout?: number | undefined;
                    args?: string[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["config"]["hadoop"], "$type" | "properties" | "services" | "sshPublicKeys" | "initializationActions">, never>) | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "versionId" | "hadoop">, never>) | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        bucket?: string | undefined;
        logGroupId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        zoneId?: string | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        health?: Health | undefined;
        uiProxy?: boolean | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "bucket" | "logGroupId" | "securityGroupIds" | "zoneId" | "deletionProtection" | "serviceAccountId" | "health" | "uiProxy" | "hostGroupIds" | "monitoring">, never>>(object: I): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.dataproc.v1.Cluster.LabelsEntry";
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
    $type: "yandex.cloud.dataproc.v1.Monitoring";
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
export declare const HadoopConfig: {
    $type: "yandex.cloud.dataproc.v1.HadoopConfig";
    encode(message: HadoopConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HadoopConfig;
    fromJSON(object: any): HadoopConfig;
    toJSON(message: HadoopConfig): unknown;
    fromPartial<I extends {
        properties?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        services?: HadoopConfig_Service[] | undefined;
        sshPublicKeys?: string[] | undefined;
        initializationActions?: {
            uri?: string | undefined;
            timeout?: number | undefined;
            args?: string[] | undefined;
        }[] | undefined;
    } & {
        properties?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["properties"], string | number>, never>) | undefined;
        services?: (HadoopConfig_Service[] & HadoopConfig_Service[] & Record<Exclude<keyof I["services"], "$type" | keyof HadoopConfig_Service[]>, never>) | undefined;
        sshPublicKeys?: (string[] & string[] & Record<Exclude<keyof I["sshPublicKeys"], "$type" | keyof string[]>, never>) | undefined;
        initializationActions?: ({
            uri?: string | undefined;
            timeout?: number | undefined;
            args?: string[] | undefined;
        }[] & ({
            uri?: string | undefined;
            timeout?: number | undefined;
            args?: string[] | undefined;
        } & {
            uri?: string | undefined;
            timeout?: number | undefined;
            args?: (string[] & string[] & Record<Exclude<keyof I["initializationActions"][number]["args"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["initializationActions"][number], "$type" | "uri" | "timeout" | "args">, never>)[] & Record<Exclude<keyof I["initializationActions"], "$type" | keyof {
            uri?: string | undefined;
            timeout?: number | undefined;
            args?: string[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "properties" | "services" | "sshPublicKeys" | "initializationActions">, never>>(object: I): HadoopConfig;
};
export declare const HadoopConfig_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.v1.HadoopConfig.PropertiesEntry";
    encode(message: HadoopConfig_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HadoopConfig_PropertiesEntry;
    fromJSON(object: any): HadoopConfig_PropertiesEntry;
    toJSON(message: HadoopConfig_PropertiesEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): HadoopConfig_PropertiesEntry;
};
export declare const ClusterConfig: {
    $type: "yandex.cloud.dataproc.v1.ClusterConfig";
    encode(message: ClusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfig;
    fromJSON(object: any): ClusterConfig;
    toJSON(message: ClusterConfig): unknown;
    fromPartial<I extends {
        versionId?: string | undefined;
        hadoop?: {
            properties?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            services?: HadoopConfig_Service[] | undefined;
            sshPublicKeys?: string[] | undefined;
            initializationActions?: {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        versionId?: string | undefined;
        hadoop?: ({
            properties?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            services?: HadoopConfig_Service[] | undefined;
            sshPublicKeys?: string[] | undefined;
            initializationActions?: {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[] | undefined;
        } & {
            properties?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["hadoop"]["properties"], string | number>, never>) | undefined;
            services?: (HadoopConfig_Service[] & HadoopConfig_Service[] & Record<Exclude<keyof I["hadoop"]["services"], "$type" | keyof HadoopConfig_Service[]>, never>) | undefined;
            sshPublicKeys?: (string[] & string[] & Record<Exclude<keyof I["hadoop"]["sshPublicKeys"], "$type" | keyof string[]>, never>) | undefined;
            initializationActions?: ({
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[] & ({
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            } & {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: (string[] & string[] & Record<Exclude<keyof I["hadoop"]["initializationActions"][number]["args"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["hadoop"]["initializationActions"][number], "$type" | "uri" | "timeout" | "args">, never>)[] & Record<Exclude<keyof I["hadoop"]["initializationActions"], "$type" | keyof {
                uri?: string | undefined;
                timeout?: number | undefined;
                args?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["hadoop"], "$type" | "properties" | "services" | "sshPublicKeys" | "initializationActions">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "versionId" | "hadoop">, never>>(object: I): ClusterConfig;
};
export declare const InitializationAction: {
    $type: "yandex.cloud.dataproc.v1.InitializationAction";
    encode(message: InitializationAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InitializationAction;
    fromJSON(object: any): InitializationAction;
    toJSON(message: InitializationAction): unknown;
    fromPartial<I extends {
        uri?: string | undefined;
        timeout?: number | undefined;
        args?: string[] | undefined;
    } & {
        uri?: string | undefined;
        timeout?: number | undefined;
        args?: (string[] & string[] & Record<Exclude<keyof I["args"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "uri" | "timeout" | "args">, never>>(object: I): InitializationAction;
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
