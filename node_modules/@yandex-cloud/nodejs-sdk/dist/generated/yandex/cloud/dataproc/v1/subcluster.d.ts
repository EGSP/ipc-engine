import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
import { Resources, Health } from "../../../../yandex/cloud/dataproc/v1/common";
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
export declare enum Role {
    ROLE_UNSPECIFIED = 0,
    /**
     * MASTERNODE - The subcluster fulfills the master role.
     *
     * Master can run the following services, depending on the requested components:
     * * HDFS: Namenode, Secondary Namenode
     * * YARN: ResourceManager, Timeline Server
     * * HBase Master
     * * Hive: Server, Metastore, HCatalog
     * * Spark History Server
     * * Zeppelin
     * * ZooKeeper
     */
    MASTERNODE = 1,
    /**
     * DATANODE - The subcluster is a DATANODE in a Data Proc cluster.
     *
     * DATANODE can run the following services, depending on the requested components:
     * * HDFS DataNode
     * * YARN NodeManager
     * * HBase RegionServer
     * * Spark libraries
     */
    DATANODE = 2,
    /**
     * COMPUTENODE - The subcluster is a COMPUTENODE in a Data Proc cluster.
     *
     * COMPUTENODE can run the following services, depending on the requested components:
     * * YARN NodeManager
     * * Spark libraries
     */
    COMPUTENODE = 3,
    UNRECOGNIZED = -1
}
export declare function roleFromJSON(object: any): Role;
export declare function roleToJSON(object: Role): string;
export interface AutoscalingConfig {
    $type: "yandex.cloud.dataproc.v1.AutoscalingConfig";
    /** Upper limit for total instance subcluster count. */
    maxHostsCount: number;
    /**
     * Preemptible instances are stopped at least once every 24 hours, and can be stopped at any time
     * if their resources are needed by Compute.
     * For more information, see [Preemptible Virtual Machines](/docs/compute/concepts/preemptible-vm).
     */
    preemptible: boolean;
    /** Time in seconds allotted for averaging metrics. */
    measurementDuration?: Duration;
    /**
     * The warmup time of the instance in seconds. During this time,
     * traffic is sent to the instance, but instance metrics are not collected.
     */
    warmupDuration?: Duration;
    /**
     * Minimum amount of time in seconds allotted for monitoring before
     * Instance Groups can reduce the number of instances in the group.
     * During this time, the group size doesn't decrease, even if the new metric values
     * indicate that it should.
     */
    stabilizationDuration?: Duration;
    /** Defines an autoscaling rule based on the average CPU utilization of the instance group. */
    cpuUtilizationTarget: number;
    /** Timeout to gracefully decommission nodes during downscaling. In seconds. Default value: 120 */
    decommissionTimeout: number;
}
/** A Data Proc subcluster. For details about the concept, see [documentation](/docs/data-proc/concepts/). */
export interface Subcluster {
    $type: "yandex.cloud.dataproc.v1.Subcluster";
    /** ID of the subcluster. Generated at creation time. */
    id: string;
    /** ID of the Data Proc cluster that the subcluster belongs to. */
    clusterId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the subcluster. The name is unique within the cluster. */
    name: string;
    /** Role that is fulfilled by hosts of the subcluster. */
    role: Role;
    /** Resources allocated for each host in the subcluster. */
    resources?: Resources;
    /** ID of the VPC subnet used for hosts in the subcluster. */
    subnetId: string;
    /** Number of hosts in the subcluster. */
    hostsCount: number;
    /** Assign public ip addresses for all hosts in subcluter. */
    assignPublicIp: boolean;
    /** Configuration for instance group based subclusters */
    autoscalingConfig?: AutoscalingConfig;
    /** ID of Compute Instance Group for autoscaling subclusters */
    instanceGroupId: string;
}
/** A Data Proc host. For details about the concept, see [documentation](/docs/data-proc/concepts/). */
export interface Host {
    $type: "yandex.cloud.dataproc.v1.Host";
    /**
     * Name of the Data Proc host. The host name is assigned by Data Proc at creation time
     * and cannot be changed. The name is generated to be unique across all Data Proc
     * hosts that exist on the platform, as it defines the FQDN of the host.
     */
    name: string;
    /** ID of the Data Proc subcluster that the host belongs to. */
    subclusterId: string;
    /** Status code of the aggregated health of the host. */
    health: Health;
    /** ID of the Compute virtual machine that is used as the Data Proc host. */
    computeInstanceId: string;
    /** Role of the host in the cluster. */
    role: Role;
}
export declare const AutoscalingConfig: {
    $type: "yandex.cloud.dataproc.v1.AutoscalingConfig";
    encode(message: AutoscalingConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AutoscalingConfig;
    fromJSON(object: any): AutoscalingConfig;
    toJSON(message: AutoscalingConfig): unknown;
    fromPartial<I extends {
        preemptible?: boolean | undefined;
        measurementDuration?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        warmupDuration?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        stabilizationDuration?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        maxHostsCount?: number | undefined;
        cpuUtilizationTarget?: number | undefined;
        decommissionTimeout?: number | undefined;
    } & {
        preemptible?: boolean | undefined;
        measurementDuration?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        warmupDuration?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        stabilizationDuration?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        maxHostsCount?: number | undefined;
        cpuUtilizationTarget?: number | undefined;
        decommissionTimeout?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "preemptible" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "maxHostsCount" | "cpuUtilizationTarget" | "decommissionTimeout">, never>>(object: I): AutoscalingConfig;
};
export declare const Subcluster: {
    $type: "yandex.cloud.dataproc.v1.Subcluster";
    encode(message: Subcluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Subcluster;
    fromJSON(object: any): Subcluster;
    toJSON(message: Subcluster): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        role?: Role | undefined;
        subnetId?: string | undefined;
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        instanceGroupId?: string | undefined;
        clusterId?: string | undefined;
        hostsCount?: number | undefined;
        assignPublicIp?: boolean | undefined;
        autoscalingConfig?: {
            preemptible?: boolean | undefined;
            measurementDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            warmupDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            stabilizationDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxHostsCount?: number | undefined;
            cpuUtilizationTarget?: number | undefined;
            decommissionTimeout?: number | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        role?: Role | undefined;
        subnetId?: string | undefined;
        resources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        instanceGroupId?: string | undefined;
        clusterId?: string | undefined;
        hostsCount?: number | undefined;
        assignPublicIp?: boolean | undefined;
        autoscalingConfig?: ({
            preemptible?: boolean | undefined;
            measurementDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            warmupDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            stabilizationDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxHostsCount?: number | undefined;
            cpuUtilizationTarget?: number | undefined;
            decommissionTimeout?: number | undefined;
        } & {
            preemptible?: boolean | undefined;
            measurementDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoscalingConfig"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            warmupDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoscalingConfig"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            stabilizationDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoscalingConfig"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            maxHostsCount?: number | undefined;
            cpuUtilizationTarget?: number | undefined;
            decommissionTimeout?: number | undefined;
        } & Record<Exclude<keyof I["autoscalingConfig"], "$type" | "preemptible" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "maxHostsCount" | "cpuUtilizationTarget" | "decommissionTimeout">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "createdAt" | "role" | "subnetId" | "resources" | "instanceGroupId" | "clusterId" | "hostsCount" | "assignPublicIp" | "autoscalingConfig">, never>>(object: I): Subcluster;
};
export declare const Host: {
    $type: "yandex.cloud.dataproc.v1.Host";
    encode(message: Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host;
    fromJSON(object: any): Host;
    toJSON(message: Host): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        role?: Role | undefined;
        computeInstanceId?: string | undefined;
        health?: Health | undefined;
        subclusterId?: string | undefined;
    } & {
        name?: string | undefined;
        role?: Role | undefined;
        computeInstanceId?: string | undefined;
        health?: Health | undefined;
        subclusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "role" | "computeInstanceId" | "health" | "subclusterId">, never>>(object: I): Host;
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
