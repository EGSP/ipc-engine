/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.dataproc.manager.v1";
export declare enum InitActsState {
    /** INIT_ACTS_STATE_UNSPECIFIED - No init acts on cluster */
    INIT_ACTS_STATE_UNSPECIFIED = 0,
    /** FAILED - At least one failed init act */
    FAILED = 1,
    /** SUCCESSFUL - All init acts succeeded */
    SUCCESSFUL = 2,
    /** IN_PROGRESS - Some init acts not finished */
    IN_PROGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function initActsStateFromJSON(object: any): InitActsState;
export declare function initActsStateToJSON(object: InitActsState): string;
export interface HbaseNodeInfo {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseNodeInfo";
    name: string;
    requests: number;
    heapSizeMb: number;
    maxHeapSizeMb: number;
}
export interface HbaseInfo {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseInfo";
    available: boolean;
    regions: number;
    requests: number;
    averageLoad: number;
    liveNodes: HbaseNodeInfo[];
    deadNodes: HbaseNodeInfo[];
}
export interface HDFSNodeInfo {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSNodeInfo";
    name: string;
    used: number;
    remaining: number;
    capacity: number;
    numBlocks: number;
    state: string;
}
export interface HDFSInfo {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSInfo";
    available: boolean;
    percentRemaining: number;
    used: number;
    free: number;
    totalBlocks: number;
    missingBlocks: number;
    missingBlocksReplicaOne: number;
    liveNodes: HDFSNodeInfo[];
    deadNodes: HDFSNodeInfo[];
    safemode: string;
    decommissioningNodes: HDFSNodeInfo[];
    decommissionedNodes: HDFSNodeInfo[];
    /** Actual list of decommission hosts in HDFS namenode memory */
    requestedDecommissionHosts: string[];
}
export interface HiveInfo {
    $type: "yandex.cloud.dataproc.manager.v1.HiveInfo";
    available: boolean;
    queriesSucceeded: number;
    queriesFailed: number;
    queriesExecuting: number;
    sessionsOpen: number;
    sessionsActive: number;
}
export interface YarnNodeInfo {
    $type: "yandex.cloud.dataproc.manager.v1.YarnNodeInfo";
    name: string;
    state: string;
    numContainers: number;
    usedMemoryMb: number;
    availableMemoryMb: number;
    updateTime: number;
}
export interface YarnInfo {
    $type: "yandex.cloud.dataproc.manager.v1.YarnInfo";
    available: boolean;
    liveNodes: YarnNodeInfo[];
    /** Actual list of decommission hosts in Yarn resource manager memory */
    requestedDecommissionHosts: string[];
}
export interface ZookeeperInfo {
    $type: "yandex.cloud.dataproc.manager.v1.ZookeeperInfo";
    alive: boolean;
}
export interface OozieInfo {
    $type: "yandex.cloud.dataproc.manager.v1.OozieInfo";
    alive: boolean;
}
export interface LivyInfo {
    $type: "yandex.cloud.dataproc.manager.v1.LivyInfo";
    alive: boolean;
}
export interface InitActs {
    $type: "yandex.cloud.dataproc.manager.v1.InitActs";
    state: InitActsState;
    /** fqdns of nodes for error message */
    fqdns: string[];
}
export interface Info {
    $type: "yandex.cloud.dataproc.manager.v1.Info";
    hdfs?: HDFSInfo;
    yarn?: YarnInfo;
    hive?: HiveInfo;
    zookeeper?: ZookeeperInfo;
    hbase?: HbaseInfo;
    oozie?: OozieInfo;
    /**
     * Report count is incremented every time report is sent by Dataproc Agent.
     * So Worker can use this property to make sure that Dataproc Agent got data sent by Worker through Dataproc Manager
     * for synchronization purposes
     */
    reportCount: number;
    livy?: LivyInfo;
    initActs?: InitActs;
}
/** The request message containing the host status report. */
export interface ReportRequest {
    $type: "yandex.cloud.dataproc.manager.v1.ReportRequest";
    cid: string;
    topologyRevision: number;
    info?: Info;
    collectedAt?: Date;
}
/** The response message containing the agent commands to apply on host. */
export interface ReportReply {
    $type: "yandex.cloud.dataproc.manager.v1.ReportReply";
    decommissionTimeout: number;
    yarnHostsToDecommission: string[];
    hdfsHostsToDecommission: string[];
}
export declare const HbaseNodeInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseNodeInfo";
    encode(message: HbaseNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HbaseNodeInfo;
    fromJSON(object: any): HbaseNodeInfo;
    toJSON(message: HbaseNodeInfo): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        requests?: number | undefined;
        heapSizeMb?: number | undefined;
        maxHeapSizeMb?: number | undefined;
    } & {
        name?: string | undefined;
        requests?: number | undefined;
        heapSizeMb?: number | undefined;
        maxHeapSizeMb?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "requests" | "heapSizeMb" | "maxHeapSizeMb">, never>>(object: I): HbaseNodeInfo;
};
export declare const HbaseInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseInfo";
    encode(message: HbaseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HbaseInfo;
    fromJSON(object: any): HbaseInfo;
    toJSON(message: HbaseInfo): unknown;
    fromPartial<I extends {
        requests?: number | undefined;
        available?: boolean | undefined;
        regions?: number | undefined;
        averageLoad?: number | undefined;
        liveNodes?: {
            name?: string | undefined;
            requests?: number | undefined;
            heapSizeMb?: number | undefined;
            maxHeapSizeMb?: number | undefined;
        }[] | undefined;
        deadNodes?: {
            name?: string | undefined;
            requests?: number | undefined;
            heapSizeMb?: number | undefined;
            maxHeapSizeMb?: number | undefined;
        }[] | undefined;
    } & {
        requests?: number | undefined;
        available?: boolean | undefined;
        regions?: number | undefined;
        averageLoad?: number | undefined;
        liveNodes?: ({
            name?: string | undefined;
            requests?: number | undefined;
            heapSizeMb?: number | undefined;
            maxHeapSizeMb?: number | undefined;
        }[] & ({
            name?: string | undefined;
            requests?: number | undefined;
            heapSizeMb?: number | undefined;
            maxHeapSizeMb?: number | undefined;
        } & {
            name?: string | undefined;
            requests?: number | undefined;
            heapSizeMb?: number | undefined;
            maxHeapSizeMb?: number | undefined;
        } & Record<Exclude<keyof I["liveNodes"][number], "$type" | "name" | "requests" | "heapSizeMb" | "maxHeapSizeMb">, never>)[] & Record<Exclude<keyof I["liveNodes"], "$type" | keyof {
            name?: string | undefined;
            requests?: number | undefined;
            heapSizeMb?: number | undefined;
            maxHeapSizeMb?: number | undefined;
        }[]>, never>) | undefined;
        deadNodes?: ({
            name?: string | undefined;
            requests?: number | undefined;
            heapSizeMb?: number | undefined;
            maxHeapSizeMb?: number | undefined;
        }[] & ({
            name?: string | undefined;
            requests?: number | undefined;
            heapSizeMb?: number | undefined;
            maxHeapSizeMb?: number | undefined;
        } & {
            name?: string | undefined;
            requests?: number | undefined;
            heapSizeMb?: number | undefined;
            maxHeapSizeMb?: number | undefined;
        } & Record<Exclude<keyof I["deadNodes"][number], "$type" | "name" | "requests" | "heapSizeMb" | "maxHeapSizeMb">, never>)[] & Record<Exclude<keyof I["deadNodes"], "$type" | keyof {
            name?: string | undefined;
            requests?: number | undefined;
            heapSizeMb?: number | undefined;
            maxHeapSizeMb?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "requests" | "available" | "regions" | "averageLoad" | "liveNodes" | "deadNodes">, never>>(object: I): HbaseInfo;
};
export declare const HDFSNodeInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSNodeInfo";
    encode(message: HDFSNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HDFSNodeInfo;
    fromJSON(object: any): HDFSNodeInfo;
    toJSON(message: HDFSNodeInfo): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        used?: number | undefined;
        remaining?: number | undefined;
        capacity?: number | undefined;
        numBlocks?: number | undefined;
        state?: string | undefined;
    } & {
        name?: string | undefined;
        used?: number | undefined;
        remaining?: number | undefined;
        capacity?: number | undefined;
        numBlocks?: number | undefined;
        state?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>>(object: I): HDFSNodeInfo;
};
export declare const HDFSInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSInfo";
    encode(message: HDFSInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HDFSInfo;
    fromJSON(object: any): HDFSInfo;
    toJSON(message: HDFSInfo): unknown;
    fromPartial<I extends {
        available?: boolean | undefined;
        liveNodes?: {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[] | undefined;
        deadNodes?: {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[] | undefined;
        used?: number | undefined;
        percentRemaining?: number | undefined;
        free?: number | undefined;
        totalBlocks?: number | undefined;
        missingBlocks?: number | undefined;
        missingBlocksReplicaOne?: number | undefined;
        safemode?: string | undefined;
        requestedDecommissionHosts?: string[] | undefined;
        decommissioningNodes?: {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[] | undefined;
        decommissionedNodes?: {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[] | undefined;
    } & {
        available?: boolean | undefined;
        liveNodes?: ({
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[] & ({
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        } & {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        } & Record<Exclude<keyof I["liveNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["liveNodes"], "$type" | keyof {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[]>, never>) | undefined;
        deadNodes?: ({
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[] & ({
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        } & {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        } & Record<Exclude<keyof I["deadNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["deadNodes"], "$type" | keyof {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[]>, never>) | undefined;
        used?: number | undefined;
        percentRemaining?: number | undefined;
        free?: number | undefined;
        totalBlocks?: number | undefined;
        missingBlocks?: number | undefined;
        missingBlocksReplicaOne?: number | undefined;
        safemode?: string | undefined;
        requestedDecommissionHosts?: (string[] & string[] & Record<Exclude<keyof I["requestedDecommissionHosts"], "$type" | keyof string[]>, never>) | undefined;
        decommissioningNodes?: ({
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[] & ({
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        } & {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        } & Record<Exclude<keyof I["decommissioningNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["decommissioningNodes"], "$type" | keyof {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[]>, never>) | undefined;
        decommissionedNodes?: ({
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[] & ({
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        } & {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        } & Record<Exclude<keyof I["decommissionedNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["decommissionedNodes"], "$type" | keyof {
            name?: string | undefined;
            used?: number | undefined;
            remaining?: number | undefined;
            capacity?: number | undefined;
            numBlocks?: number | undefined;
            state?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "available" | "liveNodes" | "deadNodes" | "used" | "percentRemaining" | "free" | "totalBlocks" | "missingBlocks" | "missingBlocksReplicaOne" | "safemode" | "requestedDecommissionHosts" | "decommissioningNodes" | "decommissionedNodes">, never>>(object: I): HDFSInfo;
};
export declare const HiveInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.HiveInfo";
    encode(message: HiveInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HiveInfo;
    fromJSON(object: any): HiveInfo;
    toJSON(message: HiveInfo): unknown;
    fromPartial<I extends {
        available?: boolean | undefined;
        queriesSucceeded?: number | undefined;
        queriesFailed?: number | undefined;
        queriesExecuting?: number | undefined;
        sessionsOpen?: number | undefined;
        sessionsActive?: number | undefined;
    } & {
        available?: boolean | undefined;
        queriesSucceeded?: number | undefined;
        queriesFailed?: number | undefined;
        queriesExecuting?: number | undefined;
        sessionsOpen?: number | undefined;
        sessionsActive?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "available" | "queriesSucceeded" | "queriesFailed" | "queriesExecuting" | "sessionsOpen" | "sessionsActive">, never>>(object: I): HiveInfo;
};
export declare const YarnNodeInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.YarnNodeInfo";
    encode(message: YarnNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): YarnNodeInfo;
    fromJSON(object: any): YarnNodeInfo;
    toJSON(message: YarnNodeInfo): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        state?: string | undefined;
        numContainers?: number | undefined;
        usedMemoryMb?: number | undefined;
        availableMemoryMb?: number | undefined;
        updateTime?: number | undefined;
    } & {
        name?: string | undefined;
        state?: string | undefined;
        numContainers?: number | undefined;
        usedMemoryMb?: number | undefined;
        availableMemoryMb?: number | undefined;
        updateTime?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "state" | "numContainers" | "usedMemoryMb" | "availableMemoryMb" | "updateTime">, never>>(object: I): YarnNodeInfo;
};
export declare const YarnInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.YarnInfo";
    encode(message: YarnInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): YarnInfo;
    fromJSON(object: any): YarnInfo;
    toJSON(message: YarnInfo): unknown;
    fromPartial<I extends {
        available?: boolean | undefined;
        liveNodes?: {
            name?: string | undefined;
            state?: string | undefined;
            numContainers?: number | undefined;
            usedMemoryMb?: number | undefined;
            availableMemoryMb?: number | undefined;
            updateTime?: number | undefined;
        }[] | undefined;
        requestedDecommissionHosts?: string[] | undefined;
    } & {
        available?: boolean | undefined;
        liveNodes?: ({
            name?: string | undefined;
            state?: string | undefined;
            numContainers?: number | undefined;
            usedMemoryMb?: number | undefined;
            availableMemoryMb?: number | undefined;
            updateTime?: number | undefined;
        }[] & ({
            name?: string | undefined;
            state?: string | undefined;
            numContainers?: number | undefined;
            usedMemoryMb?: number | undefined;
            availableMemoryMb?: number | undefined;
            updateTime?: number | undefined;
        } & {
            name?: string | undefined;
            state?: string | undefined;
            numContainers?: number | undefined;
            usedMemoryMb?: number | undefined;
            availableMemoryMb?: number | undefined;
            updateTime?: number | undefined;
        } & Record<Exclude<keyof I["liveNodes"][number], "$type" | "name" | "state" | "numContainers" | "usedMemoryMb" | "availableMemoryMb" | "updateTime">, never>)[] & Record<Exclude<keyof I["liveNodes"], "$type" | keyof {
            name?: string | undefined;
            state?: string | undefined;
            numContainers?: number | undefined;
            usedMemoryMb?: number | undefined;
            availableMemoryMb?: number | undefined;
            updateTime?: number | undefined;
        }[]>, never>) | undefined;
        requestedDecommissionHosts?: (string[] & string[] & Record<Exclude<keyof I["requestedDecommissionHosts"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "available" | "liveNodes" | "requestedDecommissionHosts">, never>>(object: I): YarnInfo;
};
export declare const ZookeeperInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.ZookeeperInfo";
    encode(message: ZookeeperInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ZookeeperInfo;
    fromJSON(object: any): ZookeeperInfo;
    toJSON(message: ZookeeperInfo): unknown;
    fromPartial<I extends {
        alive?: boolean | undefined;
    } & {
        alive?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "alive">, never>>(object: I): ZookeeperInfo;
};
export declare const OozieInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.OozieInfo";
    encode(message: OozieInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OozieInfo;
    fromJSON(object: any): OozieInfo;
    toJSON(message: OozieInfo): unknown;
    fromPartial<I extends {
        alive?: boolean | undefined;
    } & {
        alive?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "alive">, never>>(object: I): OozieInfo;
};
export declare const LivyInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.LivyInfo";
    encode(message: LivyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LivyInfo;
    fromJSON(object: any): LivyInfo;
    toJSON(message: LivyInfo): unknown;
    fromPartial<I extends {
        alive?: boolean | undefined;
    } & {
        alive?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "alive">, never>>(object: I): LivyInfo;
};
export declare const InitActs: {
    $type: "yandex.cloud.dataproc.manager.v1.InitActs";
    encode(message: InitActs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InitActs;
    fromJSON(object: any): InitActs;
    toJSON(message: InitActs): unknown;
    fromPartial<I extends {
        state?: InitActsState | undefined;
        fqdns?: string[] | undefined;
    } & {
        state?: InitActsState | undefined;
        fqdns?: (string[] & string[] & Record<Exclude<keyof I["fqdns"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "state" | "fqdns">, never>>(object: I): InitActs;
};
export declare const Info: {
    $type: "yandex.cloud.dataproc.manager.v1.Info";
    encode(message: Info, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Info;
    fromJSON(object: any): Info;
    toJSON(message: Info): unknown;
    fromPartial<I extends {
        reportCount?: number | undefined;
        hdfs?: {
            available?: boolean | undefined;
            liveNodes?: {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] | undefined;
            deadNodes?: {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] | undefined;
            used?: number | undefined;
            percentRemaining?: number | undefined;
            free?: number | undefined;
            totalBlocks?: number | undefined;
            missingBlocks?: number | undefined;
            missingBlocksReplicaOne?: number | undefined;
            safemode?: string | undefined;
            requestedDecommissionHosts?: string[] | undefined;
            decommissioningNodes?: {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] | undefined;
            decommissionedNodes?: {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] | undefined;
        } | undefined;
        yarn?: {
            available?: boolean | undefined;
            liveNodes?: {
                name?: string | undefined;
                state?: string | undefined;
                numContainers?: number | undefined;
                usedMemoryMb?: number | undefined;
                availableMemoryMb?: number | undefined;
                updateTime?: number | undefined;
            }[] | undefined;
            requestedDecommissionHosts?: string[] | undefined;
        } | undefined;
        hive?: {
            available?: boolean | undefined;
            queriesSucceeded?: number | undefined;
            queriesFailed?: number | undefined;
            queriesExecuting?: number | undefined;
            sessionsOpen?: number | undefined;
            sessionsActive?: number | undefined;
        } | undefined;
        zookeeper?: {
            alive?: boolean | undefined;
        } | undefined;
        hbase?: {
            requests?: number | undefined;
            available?: boolean | undefined;
            regions?: number | undefined;
            averageLoad?: number | undefined;
            liveNodes?: {
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            }[] | undefined;
            deadNodes?: {
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            }[] | undefined;
        } | undefined;
        oozie?: {
            alive?: boolean | undefined;
        } | undefined;
        livy?: {
            alive?: boolean | undefined;
        } | undefined;
        initActs?: {
            state?: InitActsState | undefined;
            fqdns?: string[] | undefined;
        } | undefined;
    } & {
        reportCount?: number | undefined;
        hdfs?: ({
            available?: boolean | undefined;
            liveNodes?: {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] | undefined;
            deadNodes?: {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] | undefined;
            used?: number | undefined;
            percentRemaining?: number | undefined;
            free?: number | undefined;
            totalBlocks?: number | undefined;
            missingBlocks?: number | undefined;
            missingBlocksReplicaOne?: number | undefined;
            safemode?: string | undefined;
            requestedDecommissionHosts?: string[] | undefined;
            decommissioningNodes?: {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] | undefined;
            decommissionedNodes?: {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] | undefined;
        } & {
            available?: boolean | undefined;
            liveNodes?: ({
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] & ({
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            } & {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            } & Record<Exclude<keyof I["hdfs"]["liveNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["hdfs"]["liveNodes"], "$type" | keyof {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[]>, never>) | undefined;
            deadNodes?: ({
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] & ({
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            } & {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            } & Record<Exclude<keyof I["hdfs"]["deadNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["hdfs"]["deadNodes"], "$type" | keyof {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[]>, never>) | undefined;
            used?: number | undefined;
            percentRemaining?: number | undefined;
            free?: number | undefined;
            totalBlocks?: number | undefined;
            missingBlocks?: number | undefined;
            missingBlocksReplicaOne?: number | undefined;
            safemode?: string | undefined;
            requestedDecommissionHosts?: (string[] & string[] & Record<Exclude<keyof I["hdfs"]["requestedDecommissionHosts"], "$type" | keyof string[]>, never>) | undefined;
            decommissioningNodes?: ({
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] & ({
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            } & {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            } & Record<Exclude<keyof I["hdfs"]["decommissioningNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["hdfs"]["decommissioningNodes"], "$type" | keyof {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[]>, never>) | undefined;
            decommissionedNodes?: ({
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[] & ({
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            } & {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            } & Record<Exclude<keyof I["hdfs"]["decommissionedNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["hdfs"]["decommissionedNodes"], "$type" | keyof {
                name?: string | undefined;
                used?: number | undefined;
                remaining?: number | undefined;
                capacity?: number | undefined;
                numBlocks?: number | undefined;
                state?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["hdfs"], "$type" | "available" | "liveNodes" | "deadNodes" | "used" | "percentRemaining" | "free" | "totalBlocks" | "missingBlocks" | "missingBlocksReplicaOne" | "safemode" | "requestedDecommissionHosts" | "decommissioningNodes" | "decommissionedNodes">, never>) | undefined;
        yarn?: ({
            available?: boolean | undefined;
            liveNodes?: {
                name?: string | undefined;
                state?: string | undefined;
                numContainers?: number | undefined;
                usedMemoryMb?: number | undefined;
                availableMemoryMb?: number | undefined;
                updateTime?: number | undefined;
            }[] | undefined;
            requestedDecommissionHosts?: string[] | undefined;
        } & {
            available?: boolean | undefined;
            liveNodes?: ({
                name?: string | undefined;
                state?: string | undefined;
                numContainers?: number | undefined;
                usedMemoryMb?: number | undefined;
                availableMemoryMb?: number | undefined;
                updateTime?: number | undefined;
            }[] & ({
                name?: string | undefined;
                state?: string | undefined;
                numContainers?: number | undefined;
                usedMemoryMb?: number | undefined;
                availableMemoryMb?: number | undefined;
                updateTime?: number | undefined;
            } & {
                name?: string | undefined;
                state?: string | undefined;
                numContainers?: number | undefined;
                usedMemoryMb?: number | undefined;
                availableMemoryMb?: number | undefined;
                updateTime?: number | undefined;
            } & Record<Exclude<keyof I["yarn"]["liveNodes"][number], "$type" | "name" | "state" | "numContainers" | "usedMemoryMb" | "availableMemoryMb" | "updateTime">, never>)[] & Record<Exclude<keyof I["yarn"]["liveNodes"], "$type" | keyof {
                name?: string | undefined;
                state?: string | undefined;
                numContainers?: number | undefined;
                usedMemoryMb?: number | undefined;
                availableMemoryMb?: number | undefined;
                updateTime?: number | undefined;
            }[]>, never>) | undefined;
            requestedDecommissionHosts?: (string[] & string[] & Record<Exclude<keyof I["yarn"]["requestedDecommissionHosts"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["yarn"], "$type" | "available" | "liveNodes" | "requestedDecommissionHosts">, never>) | undefined;
        hive?: ({
            available?: boolean | undefined;
            queriesSucceeded?: number | undefined;
            queriesFailed?: number | undefined;
            queriesExecuting?: number | undefined;
            sessionsOpen?: number | undefined;
            sessionsActive?: number | undefined;
        } & {
            available?: boolean | undefined;
            queriesSucceeded?: number | undefined;
            queriesFailed?: number | undefined;
            queriesExecuting?: number | undefined;
            sessionsOpen?: number | undefined;
            sessionsActive?: number | undefined;
        } & Record<Exclude<keyof I["hive"], "$type" | "available" | "queriesSucceeded" | "queriesFailed" | "queriesExecuting" | "sessionsOpen" | "sessionsActive">, never>) | undefined;
        zookeeper?: ({
            alive?: boolean | undefined;
        } & {
            alive?: boolean | undefined;
        } & Record<Exclude<keyof I["zookeeper"], "$type" | "alive">, never>) | undefined;
        hbase?: ({
            requests?: number | undefined;
            available?: boolean | undefined;
            regions?: number | undefined;
            averageLoad?: number | undefined;
            liveNodes?: {
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            }[] | undefined;
            deadNodes?: {
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            }[] | undefined;
        } & {
            requests?: number | undefined;
            available?: boolean | undefined;
            regions?: number | undefined;
            averageLoad?: number | undefined;
            liveNodes?: ({
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            }[] & ({
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            } & {
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            } & Record<Exclude<keyof I["hbase"]["liveNodes"][number], "$type" | "name" | "requests" | "heapSizeMb" | "maxHeapSizeMb">, never>)[] & Record<Exclude<keyof I["hbase"]["liveNodes"], "$type" | keyof {
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            }[]>, never>) | undefined;
            deadNodes?: ({
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            }[] & ({
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            } & {
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            } & Record<Exclude<keyof I["hbase"]["deadNodes"][number], "$type" | "name" | "requests" | "heapSizeMb" | "maxHeapSizeMb">, never>)[] & Record<Exclude<keyof I["hbase"]["deadNodes"], "$type" | keyof {
                name?: string | undefined;
                requests?: number | undefined;
                heapSizeMb?: number | undefined;
                maxHeapSizeMb?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["hbase"], "$type" | "requests" | "available" | "regions" | "averageLoad" | "liveNodes" | "deadNodes">, never>) | undefined;
        oozie?: ({
            alive?: boolean | undefined;
        } & {
            alive?: boolean | undefined;
        } & Record<Exclude<keyof I["oozie"], "$type" | "alive">, never>) | undefined;
        livy?: ({
            alive?: boolean | undefined;
        } & {
            alive?: boolean | undefined;
        } & Record<Exclude<keyof I["livy"], "$type" | "alive">, never>) | undefined;
        initActs?: ({
            state?: InitActsState | undefined;
            fqdns?: string[] | undefined;
        } & {
            state?: InitActsState | undefined;
            fqdns?: (string[] & string[] & Record<Exclude<keyof I["initActs"]["fqdns"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["initActs"], "$type" | "state" | "fqdns">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "reportCount" | "hdfs" | "yarn" | "hive" | "zookeeper" | "hbase" | "oozie" | "livy" | "initActs">, never>>(object: I): Info;
};
export declare const ReportRequest: {
    $type: "yandex.cloud.dataproc.manager.v1.ReportRequest";
    encode(message: ReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReportRequest;
    fromJSON(object: any): ReportRequest;
    toJSON(message: ReportRequest): unknown;
    fromPartial<I extends {
        cid?: string | undefined;
        topologyRevision?: number | undefined;
        info?: {
            reportCount?: number | undefined;
            hdfs?: {
                available?: boolean | undefined;
                liveNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
                deadNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
                used?: number | undefined;
                percentRemaining?: number | undefined;
                free?: number | undefined;
                totalBlocks?: number | undefined;
                missingBlocks?: number | undefined;
                missingBlocksReplicaOne?: number | undefined;
                safemode?: string | undefined;
                requestedDecommissionHosts?: string[] | undefined;
                decommissioningNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
                decommissionedNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
            } | undefined;
            yarn?: {
                available?: boolean | undefined;
                liveNodes?: {
                    name?: string | undefined;
                    state?: string | undefined;
                    numContainers?: number | undefined;
                    usedMemoryMb?: number | undefined;
                    availableMemoryMb?: number | undefined;
                    updateTime?: number | undefined;
                }[] | undefined;
                requestedDecommissionHosts?: string[] | undefined;
            } | undefined;
            hive?: {
                available?: boolean | undefined;
                queriesSucceeded?: number | undefined;
                queriesFailed?: number | undefined;
                queriesExecuting?: number | undefined;
                sessionsOpen?: number | undefined;
                sessionsActive?: number | undefined;
            } | undefined;
            zookeeper?: {
                alive?: boolean | undefined;
            } | undefined;
            hbase?: {
                requests?: number | undefined;
                available?: boolean | undefined;
                regions?: number | undefined;
                averageLoad?: number | undefined;
                liveNodes?: {
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                }[] | undefined;
                deadNodes?: {
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                }[] | undefined;
            } | undefined;
            oozie?: {
                alive?: boolean | undefined;
            } | undefined;
            livy?: {
                alive?: boolean | undefined;
            } | undefined;
            initActs?: {
                state?: InitActsState | undefined;
                fqdns?: string[] | undefined;
            } | undefined;
        } | undefined;
        collectedAt?: Date | undefined;
    } & {
        cid?: string | undefined;
        topologyRevision?: number | undefined;
        info?: ({
            reportCount?: number | undefined;
            hdfs?: {
                available?: boolean | undefined;
                liveNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
                deadNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
                used?: number | undefined;
                percentRemaining?: number | undefined;
                free?: number | undefined;
                totalBlocks?: number | undefined;
                missingBlocks?: number | undefined;
                missingBlocksReplicaOne?: number | undefined;
                safemode?: string | undefined;
                requestedDecommissionHosts?: string[] | undefined;
                decommissioningNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
                decommissionedNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
            } | undefined;
            yarn?: {
                available?: boolean | undefined;
                liveNodes?: {
                    name?: string | undefined;
                    state?: string | undefined;
                    numContainers?: number | undefined;
                    usedMemoryMb?: number | undefined;
                    availableMemoryMb?: number | undefined;
                    updateTime?: number | undefined;
                }[] | undefined;
                requestedDecommissionHosts?: string[] | undefined;
            } | undefined;
            hive?: {
                available?: boolean | undefined;
                queriesSucceeded?: number | undefined;
                queriesFailed?: number | undefined;
                queriesExecuting?: number | undefined;
                sessionsOpen?: number | undefined;
                sessionsActive?: number | undefined;
            } | undefined;
            zookeeper?: {
                alive?: boolean | undefined;
            } | undefined;
            hbase?: {
                requests?: number | undefined;
                available?: boolean | undefined;
                regions?: number | undefined;
                averageLoad?: number | undefined;
                liveNodes?: {
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                }[] | undefined;
                deadNodes?: {
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                }[] | undefined;
            } | undefined;
            oozie?: {
                alive?: boolean | undefined;
            } | undefined;
            livy?: {
                alive?: boolean | undefined;
            } | undefined;
            initActs?: {
                state?: InitActsState | undefined;
                fqdns?: string[] | undefined;
            } | undefined;
        } & {
            reportCount?: number | undefined;
            hdfs?: ({
                available?: boolean | undefined;
                liveNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
                deadNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
                used?: number | undefined;
                percentRemaining?: number | undefined;
                free?: number | undefined;
                totalBlocks?: number | undefined;
                missingBlocks?: number | undefined;
                missingBlocksReplicaOne?: number | undefined;
                safemode?: string | undefined;
                requestedDecommissionHosts?: string[] | undefined;
                decommissioningNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
                decommissionedNodes?: {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] | undefined;
            } & {
                available?: boolean | undefined;
                liveNodes?: ({
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] & ({
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                } & {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                } & Record<Exclude<keyof I["info"]["hdfs"]["liveNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["info"]["hdfs"]["liveNodes"], "$type" | keyof {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[]>, never>) | undefined;
                deadNodes?: ({
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] & ({
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                } & {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                } & Record<Exclude<keyof I["info"]["hdfs"]["deadNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["info"]["hdfs"]["deadNodes"], "$type" | keyof {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[]>, never>) | undefined;
                used?: number | undefined;
                percentRemaining?: number | undefined;
                free?: number | undefined;
                totalBlocks?: number | undefined;
                missingBlocks?: number | undefined;
                missingBlocksReplicaOne?: number | undefined;
                safemode?: string | undefined;
                requestedDecommissionHosts?: (string[] & string[] & Record<Exclude<keyof I["info"]["hdfs"]["requestedDecommissionHosts"], "$type" | keyof string[]>, never>) | undefined;
                decommissioningNodes?: ({
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] & ({
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                } & {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                } & Record<Exclude<keyof I["info"]["hdfs"]["decommissioningNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["info"]["hdfs"]["decommissioningNodes"], "$type" | keyof {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[]>, never>) | undefined;
                decommissionedNodes?: ({
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[] & ({
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                } & {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                } & Record<Exclude<keyof I["info"]["hdfs"]["decommissionedNodes"][number], "$type" | "name" | "used" | "remaining" | "capacity" | "numBlocks" | "state">, never>)[] & Record<Exclude<keyof I["info"]["hdfs"]["decommissionedNodes"], "$type" | keyof {
                    name?: string | undefined;
                    used?: number | undefined;
                    remaining?: number | undefined;
                    capacity?: number | undefined;
                    numBlocks?: number | undefined;
                    state?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["info"]["hdfs"], "$type" | "available" | "liveNodes" | "deadNodes" | "used" | "percentRemaining" | "free" | "totalBlocks" | "missingBlocks" | "missingBlocksReplicaOne" | "safemode" | "requestedDecommissionHosts" | "decommissioningNodes" | "decommissionedNodes">, never>) | undefined;
            yarn?: ({
                available?: boolean | undefined;
                liveNodes?: {
                    name?: string | undefined;
                    state?: string | undefined;
                    numContainers?: number | undefined;
                    usedMemoryMb?: number | undefined;
                    availableMemoryMb?: number | undefined;
                    updateTime?: number | undefined;
                }[] | undefined;
                requestedDecommissionHosts?: string[] | undefined;
            } & {
                available?: boolean | undefined;
                liveNodes?: ({
                    name?: string | undefined;
                    state?: string | undefined;
                    numContainers?: number | undefined;
                    usedMemoryMb?: number | undefined;
                    availableMemoryMb?: number | undefined;
                    updateTime?: number | undefined;
                }[] & ({
                    name?: string | undefined;
                    state?: string | undefined;
                    numContainers?: number | undefined;
                    usedMemoryMb?: number | undefined;
                    availableMemoryMb?: number | undefined;
                    updateTime?: number | undefined;
                } & {
                    name?: string | undefined;
                    state?: string | undefined;
                    numContainers?: number | undefined;
                    usedMemoryMb?: number | undefined;
                    availableMemoryMb?: number | undefined;
                    updateTime?: number | undefined;
                } & Record<Exclude<keyof I["info"]["yarn"]["liveNodes"][number], "$type" | "name" | "state" | "numContainers" | "usedMemoryMb" | "availableMemoryMb" | "updateTime">, never>)[] & Record<Exclude<keyof I["info"]["yarn"]["liveNodes"], "$type" | keyof {
                    name?: string | undefined;
                    state?: string | undefined;
                    numContainers?: number | undefined;
                    usedMemoryMb?: number | undefined;
                    availableMemoryMb?: number | undefined;
                    updateTime?: number | undefined;
                }[]>, never>) | undefined;
                requestedDecommissionHosts?: (string[] & string[] & Record<Exclude<keyof I["info"]["yarn"]["requestedDecommissionHosts"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["info"]["yarn"], "$type" | "available" | "liveNodes" | "requestedDecommissionHosts">, never>) | undefined;
            hive?: ({
                available?: boolean | undefined;
                queriesSucceeded?: number | undefined;
                queriesFailed?: number | undefined;
                queriesExecuting?: number | undefined;
                sessionsOpen?: number | undefined;
                sessionsActive?: number | undefined;
            } & {
                available?: boolean | undefined;
                queriesSucceeded?: number | undefined;
                queriesFailed?: number | undefined;
                queriesExecuting?: number | undefined;
                sessionsOpen?: number | undefined;
                sessionsActive?: number | undefined;
            } & Record<Exclude<keyof I["info"]["hive"], "$type" | "available" | "queriesSucceeded" | "queriesFailed" | "queriesExecuting" | "sessionsOpen" | "sessionsActive">, never>) | undefined;
            zookeeper?: ({
                alive?: boolean | undefined;
            } & {
                alive?: boolean | undefined;
            } & Record<Exclude<keyof I["info"]["zookeeper"], "$type" | "alive">, never>) | undefined;
            hbase?: ({
                requests?: number | undefined;
                available?: boolean | undefined;
                regions?: number | undefined;
                averageLoad?: number | undefined;
                liveNodes?: {
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                }[] | undefined;
                deadNodes?: {
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                }[] | undefined;
            } & {
                requests?: number | undefined;
                available?: boolean | undefined;
                regions?: number | undefined;
                averageLoad?: number | undefined;
                liveNodes?: ({
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                }[] & ({
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                } & {
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                } & Record<Exclude<keyof I["info"]["hbase"]["liveNodes"][number], "$type" | "name" | "requests" | "heapSizeMb" | "maxHeapSizeMb">, never>)[] & Record<Exclude<keyof I["info"]["hbase"]["liveNodes"], "$type" | keyof {
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                }[]>, never>) | undefined;
                deadNodes?: ({
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                }[] & ({
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                } & {
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                } & Record<Exclude<keyof I["info"]["hbase"]["deadNodes"][number], "$type" | "name" | "requests" | "heapSizeMb" | "maxHeapSizeMb">, never>)[] & Record<Exclude<keyof I["info"]["hbase"]["deadNodes"], "$type" | keyof {
                    name?: string | undefined;
                    requests?: number | undefined;
                    heapSizeMb?: number | undefined;
                    maxHeapSizeMb?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["info"]["hbase"], "$type" | "requests" | "available" | "regions" | "averageLoad" | "liveNodes" | "deadNodes">, never>) | undefined;
            oozie?: ({
                alive?: boolean | undefined;
            } & {
                alive?: boolean | undefined;
            } & Record<Exclude<keyof I["info"]["oozie"], "$type" | "alive">, never>) | undefined;
            livy?: ({
                alive?: boolean | undefined;
            } & {
                alive?: boolean | undefined;
            } & Record<Exclude<keyof I["info"]["livy"], "$type" | "alive">, never>) | undefined;
            initActs?: ({
                state?: InitActsState | undefined;
                fqdns?: string[] | undefined;
            } & {
                state?: InitActsState | undefined;
                fqdns?: (string[] & string[] & Record<Exclude<keyof I["info"]["initActs"]["fqdns"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["info"]["initActs"], "$type" | "state" | "fqdns">, never>) | undefined;
        } & Record<Exclude<keyof I["info"], "$type" | "reportCount" | "hdfs" | "yarn" | "hive" | "zookeeper" | "hbase" | "oozie" | "livy" | "initActs">, never>) | undefined;
        collectedAt?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "cid" | "topologyRevision" | "info" | "collectedAt">, never>>(object: I): ReportRequest;
};
export declare const ReportReply: {
    $type: "yandex.cloud.dataproc.manager.v1.ReportReply";
    encode(message: ReportReply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReportReply;
    fromJSON(object: any): ReportReply;
    toJSON(message: ReportReply): unknown;
    fromPartial<I extends {
        decommissionTimeout?: number | undefined;
        yarnHostsToDecommission?: string[] | undefined;
        hdfsHostsToDecommission?: string[] | undefined;
    } & {
        decommissionTimeout?: number | undefined;
        yarnHostsToDecommission?: (string[] & string[] & Record<Exclude<keyof I["yarnHostsToDecommission"], "$type" | keyof string[]>, never>) | undefined;
        hdfsHostsToDecommission?: (string[] & string[] & Record<Exclude<keyof I["hdfsHostsToDecommission"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "decommissionTimeout" | "yarnHostsToDecommission" | "hdfsHostsToDecommission">, never>>(object: I): ReportReply;
};
/** Data Proc manager service definition. */
export declare const DataprocManagerServiceService: {
    /** Sends a status report from a host. */
    readonly report: {
        readonly path: "/yandex.cloud.dataproc.manager.v1.DataprocManagerService/Report";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ReportRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ReportRequest;
        readonly responseSerialize: (value: ReportReply) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ReportReply;
    };
};
export interface DataprocManagerServiceServer extends UntypedServiceImplementation {
    /** Sends a status report from a host. */
    report: handleUnaryCall<ReportRequest, ReportReply>;
}
export interface DataprocManagerServiceClient extends Client {
    /** Sends a status report from a host. */
    report(request: ReportRequest, callback: (error: ServiceError | null, response: ReportReply) => void): ClientUnaryCall;
    report(request: ReportRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ReportReply) => void): ClientUnaryCall;
    report(request: ReportRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ReportReply) => void): ClientUnaryCall;
}
export declare const DataprocManagerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): DataprocManagerServiceClient;
    service: typeof DataprocManagerServiceService;
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
