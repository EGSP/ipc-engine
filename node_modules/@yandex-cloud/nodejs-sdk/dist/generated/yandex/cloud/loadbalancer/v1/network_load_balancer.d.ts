import _m0 from "protobufjs/minimal";
import { HealthCheck } from "../../../../yandex/cloud/loadbalancer/v1/health_check";
export declare const protobufPackage = "yandex.cloud.loadbalancer.v1";
/**
 * IP version of the addresses that the load balancer works with.
 * Only IPv4 is currently available.
 */
export declare enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 */
    IPV4 = 1,
    /** IPV6 - IPv6 */
    IPV6 = 2,
    UNRECOGNIZED = -1
}
export declare function ipVersionFromJSON(object: any): IpVersion;
export declare function ipVersionToJSON(object: IpVersion): string;
/** A NetworkLoadBalancer resource. For more information, see [Network Load Balancer](/docs/network-load-balancer/concepts). */
export interface NetworkLoadBalancer {
    $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer";
    /** ID of the network load balancer. */
    id: string;
    /** ID of the folder that the network load balancer belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Name of the network load balancer. The name is unique within the folder. 3-63 characters long. */
    name: string;
    /** Optional description of the network load balancer. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** ID of the region that the network load balancer belongs to. */
    regionId: string;
    /** Status of the network load balancer. */
    status: NetworkLoadBalancer_Status;
    /** Type of the network load balancer. Only external network load balancers are available now. */
    type: NetworkLoadBalancer_Type;
    /** Type of the session affinity. Only 5-tuple affinity is available now. */
    sessionAffinity: NetworkLoadBalancer_SessionAffinity;
    /** List of listeners for the network load balancer. */
    listeners: Listener[];
    /** List of target groups attached to the network load balancer. */
    attachedTargetGroups: AttachedTargetGroup[];
    /** Specifies if network load balancer protected from deletion. */
    deletionProtection: boolean;
}
export declare enum NetworkLoadBalancer_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Network load balancer is being created. */
    CREATING = 1,
    /** STARTING - Network load balancer is being started. */
    STARTING = 2,
    /** ACTIVE - Network load balancer is active and sends traffic to the targets. */
    ACTIVE = 3,
    /** STOPPING - Network load balancer is being stopped. */
    STOPPING = 4,
    /** STOPPED - Network load balancer is stopped and doesn't send traffic to the targets. */
    STOPPED = 5,
    /** DELETING - Network load balancer is being deleted. */
    DELETING = 6,
    /**
     * INACTIVE - The load balancer doesn't have any listeners or target groups, or
     * attached target groups are empty. The load balancer doesn't perform any health checks or
     * send traffic in this state.
     */
    INACTIVE = 7,
    UNRECOGNIZED = -1
}
export declare function networkLoadBalancer_StatusFromJSON(object: any): NetworkLoadBalancer_Status;
export declare function networkLoadBalancer_StatusToJSON(object: NetworkLoadBalancer_Status): string;
export declare enum NetworkLoadBalancer_Type {
    TYPE_UNSPECIFIED = 0,
    /** EXTERNAL - External network load balancer. */
    EXTERNAL = 1,
    /** INTERNAL - Internal network load balancer. */
    INTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare function networkLoadBalancer_TypeFromJSON(object: any): NetworkLoadBalancer_Type;
export declare function networkLoadBalancer_TypeToJSON(object: NetworkLoadBalancer_Type): string;
/**
 * Type of session affinity. Only 5-tuple affinity is currently available.
 * For more information, see [Load Balancer concepts](/docs/network-load-balancer/concepts/).
 */
export declare enum NetworkLoadBalancer_SessionAffinity {
    SESSION_AFFINITY_UNSPECIFIED = 0,
    /** CLIENT_IP_PORT_PROTO - 5-tuple affinity. */
    CLIENT_IP_PORT_PROTO = 1,
    UNRECOGNIZED = -1
}
export declare function networkLoadBalancer_SessionAffinityFromJSON(object: any): NetworkLoadBalancer_SessionAffinity;
export declare function networkLoadBalancer_SessionAffinityToJSON(object: NetworkLoadBalancer_SessionAffinity): string;
export interface NetworkLoadBalancer_LabelsEntry {
    $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer.LabelsEntry";
    key: string;
    value: string;
}
/** An AttachedTargetGroup resource. For more information, see [Targets and groups](/docs/network-load-balancer/concepts/target-resources). */
export interface AttachedTargetGroup {
    $type: "yandex.cloud.loadbalancer.v1.AttachedTargetGroup";
    /** ID of the target group. */
    targetGroupId: string;
    /**
     * A health check to perform on the target group.
     * For now we accept only one health check per AttachedTargetGroup.
     */
    healthChecks: HealthCheck[];
}
/** A Listener resource. For more information, see [Listener](/docs/network-load-balancer/concepts/listener) */
export interface Listener {
    $type: "yandex.cloud.loadbalancer.v1.Listener";
    /** Name of the listener. The name must be unique for each listener on a single load balancer. 3-63 characters long. */
    name: string;
    /** IP address for the listener. */
    address: string;
    /** Port. */
    port: number;
    /** Network protocol for incoming traffic. */
    protocol: Listener_Protocol;
    /** Port of a target. */
    targetPort: number;
    /** ID of the subnet. */
    subnetId: string;
    /** IP version of the external address. */
    ipVersion: IpVersion;
}
/** Network protocol to use. */
export declare enum Listener_Protocol {
    PROTOCOL_UNSPECIFIED = 0,
    TCP = 1,
    UDP = 2,
    UNRECOGNIZED = -1
}
export declare function listener_ProtocolFromJSON(object: any): Listener_Protocol;
export declare function listener_ProtocolToJSON(object: Listener_Protocol): string;
/** State of the target that was returned after the last health check. */
export interface TargetState {
    $type: "yandex.cloud.loadbalancer.v1.TargetState";
    /** ID of the subnet that the target is connected to. */
    subnetId: string;
    /** IP address of the target. */
    address: string;
    /** Status of the target. */
    status: TargetState_Status;
}
/** Status of the target. */
export declare enum TargetState_Status {
    STATUS_UNSPECIFIED = 0,
    /** INITIAL - The network load balancer is setting up health checks for this target. */
    INITIAL = 1,
    /** HEALTHY - Health check passed and the target is ready to receive traffic. */
    HEALTHY = 2,
    /** UNHEALTHY - Health check failed and the target is not receiving traffic. */
    UNHEALTHY = 3,
    /** DRAINING - Target is being deleted and the network load balancer is no longer sending traffic to this target. */
    DRAINING = 4,
    /** INACTIVE - The network load balancer is stopped and not performing health checks on this target. */
    INACTIVE = 5,
    UNRECOGNIZED = -1
}
export declare function targetState_StatusFromJSON(object: any): TargetState_Status;
export declare function targetState_StatusToJSON(object: TargetState_Status): string;
export declare const NetworkLoadBalancer: {
    $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer";
    encode(message: NetworkLoadBalancer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkLoadBalancer;
    fromJSON(object: any): NetworkLoadBalancer;
    toJSON(message: NetworkLoadBalancer): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        type?: NetworkLoadBalancer_Type | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: NetworkLoadBalancer_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        regionId?: string | undefined;
        listeners?: {
            name?: string | undefined;
            port?: number | undefined;
            subnetId?: string | undefined;
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            protocol?: Listener_Protocol | undefined;
            targetPort?: number | undefined;
        }[] | undefined;
        deletionProtection?: boolean | undefined;
        sessionAffinity?: NetworkLoadBalancer_SessionAffinity | undefined;
        attachedTargetGroups?: {
            targetGroupId?: string | undefined;
            healthChecks?: {
                name?: string | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        type?: NetworkLoadBalancer_Type | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: NetworkLoadBalancer_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        regionId?: string | undefined;
        listeners?: ({
            name?: string | undefined;
            port?: number | undefined;
            subnetId?: string | undefined;
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            protocol?: Listener_Protocol | undefined;
            targetPort?: number | undefined;
        }[] & ({
            name?: string | undefined;
            port?: number | undefined;
            subnetId?: string | undefined;
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            protocol?: Listener_Protocol | undefined;
            targetPort?: number | undefined;
        } & {
            name?: string | undefined;
            port?: number | undefined;
            subnetId?: string | undefined;
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            protocol?: Listener_Protocol | undefined;
            targetPort?: number | undefined;
        } & Record<Exclude<keyof I["listeners"][number], "$type" | "name" | "port" | "subnetId" | "address" | "ipVersion" | "protocol" | "targetPort">, never>)[] & Record<Exclude<keyof I["listeners"], "$type" | keyof {
            name?: string | undefined;
            port?: number | undefined;
            subnetId?: string | undefined;
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            protocol?: Listener_Protocol | undefined;
            targetPort?: number | undefined;
        }[]>, never>) | undefined;
        deletionProtection?: boolean | undefined;
        sessionAffinity?: NetworkLoadBalancer_SessionAffinity | undefined;
        attachedTargetGroups?: ({
            targetGroupId?: string | undefined;
            healthChecks?: {
                name?: string | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            targetGroupId?: string | undefined;
            healthChecks?: {
                name?: string | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            targetGroupId?: string | undefined;
            healthChecks?: ({
                name?: string | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                timeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["attachedTargetGroups"][number]["healthChecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["attachedTargetGroups"][number]["healthChecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: ({
                    port?: number | undefined;
                } & {
                    port?: number | undefined;
                } & Record<Exclude<keyof I["attachedTargetGroups"][number]["healthChecks"][number]["tcpOptions"], "$type" | "port">, never>) | undefined;
                httpOptions?: ({
                    port?: number | undefined;
                    path?: string | undefined;
                } & {
                    port?: number | undefined;
                    path?: string | undefined;
                } & Record<Exclude<keyof I["attachedTargetGroups"][number]["healthChecks"][number]["httpOptions"], "$type" | "port" | "path">, never>) | undefined;
            } & Record<Exclude<keyof I["attachedTargetGroups"][number]["healthChecks"][number], "$type" | "name" | "timeout" | "interval" | "healthyThreshold" | "unhealthyThreshold" | "tcpOptions" | "httpOptions">, never>)[] & Record<Exclude<keyof I["attachedTargetGroups"][number]["healthChecks"], "$type" | keyof {
                name?: string | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["attachedTargetGroups"][number], "$type" | "targetGroupId" | "healthChecks">, never>)[] & Record<Exclude<keyof I["attachedTargetGroups"], "$type" | keyof {
            targetGroupId?: string | undefined;
            healthChecks?: {
                name?: string | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "type" | "name" | "createdAt" | "status" | "folderId" | "labels" | "regionId" | "listeners" | "deletionProtection" | "sessionAffinity" | "attachedTargetGroups">, never>>(object: I): NetworkLoadBalancer;
};
export declare const NetworkLoadBalancer_LabelsEntry: {
    $type: "yandex.cloud.loadbalancer.v1.NetworkLoadBalancer.LabelsEntry";
    encode(message: NetworkLoadBalancer_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkLoadBalancer_LabelsEntry;
    fromJSON(object: any): NetworkLoadBalancer_LabelsEntry;
    toJSON(message: NetworkLoadBalancer_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): NetworkLoadBalancer_LabelsEntry;
};
export declare const AttachedTargetGroup: {
    $type: "yandex.cloud.loadbalancer.v1.AttachedTargetGroup";
    encode(message: AttachedTargetGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedTargetGroup;
    fromJSON(object: any): AttachedTargetGroup;
    toJSON(message: AttachedTargetGroup): unknown;
    fromPartial<I extends {
        targetGroupId?: string | undefined;
        healthChecks?: {
            name?: string | undefined;
            timeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            interval?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            healthyThreshold?: number | undefined;
            unhealthyThreshold?: number | undefined;
            tcpOptions?: {
                port?: number | undefined;
            } | undefined;
            httpOptions?: {
                port?: number | undefined;
                path?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        targetGroupId?: string | undefined;
        healthChecks?: ({
            name?: string | undefined;
            timeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            interval?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            healthyThreshold?: number | undefined;
            unhealthyThreshold?: number | undefined;
            tcpOptions?: {
                port?: number | undefined;
            } | undefined;
            httpOptions?: {
                port?: number | undefined;
                path?: string | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            timeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            interval?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            healthyThreshold?: number | undefined;
            unhealthyThreshold?: number | undefined;
            tcpOptions?: {
                port?: number | undefined;
            } | undefined;
            httpOptions?: {
                port?: number | undefined;
                path?: string | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            timeout?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["healthChecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
            interval?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["healthChecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
            healthyThreshold?: number | undefined;
            unhealthyThreshold?: number | undefined;
            tcpOptions?: ({
                port?: number | undefined;
            } & {
                port?: number | undefined;
            } & Record<Exclude<keyof I["healthChecks"][number]["tcpOptions"], "$type" | "port">, never>) | undefined;
            httpOptions?: ({
                port?: number | undefined;
                path?: string | undefined;
            } & {
                port?: number | undefined;
                path?: string | undefined;
            } & Record<Exclude<keyof I["healthChecks"][number]["httpOptions"], "$type" | "port" | "path">, never>) | undefined;
        } & Record<Exclude<keyof I["healthChecks"][number], "$type" | "name" | "timeout" | "interval" | "healthyThreshold" | "unhealthyThreshold" | "tcpOptions" | "httpOptions">, never>)[] & Record<Exclude<keyof I["healthChecks"], "$type" | keyof {
            name?: string | undefined;
            timeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            interval?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            healthyThreshold?: number | undefined;
            unhealthyThreshold?: number | undefined;
            tcpOptions?: {
                port?: number | undefined;
            } | undefined;
            httpOptions?: {
                port?: number | undefined;
                path?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "targetGroupId" | "healthChecks">, never>>(object: I): AttachedTargetGroup;
};
export declare const Listener: {
    $type: "yandex.cloud.loadbalancer.v1.Listener";
    encode(message: Listener, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Listener;
    fromJSON(object: any): Listener;
    toJSON(message: Listener): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        port?: number | undefined;
        subnetId?: string | undefined;
        address?: string | undefined;
        ipVersion?: IpVersion | undefined;
        protocol?: Listener_Protocol | undefined;
        targetPort?: number | undefined;
    } & {
        name?: string | undefined;
        port?: number | undefined;
        subnetId?: string | undefined;
        address?: string | undefined;
        ipVersion?: IpVersion | undefined;
        protocol?: Listener_Protocol | undefined;
        targetPort?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "port" | "subnetId" | "address" | "ipVersion" | "protocol" | "targetPort">, never>>(object: I): Listener;
};
export declare const TargetState: {
    $type: "yandex.cloud.loadbalancer.v1.TargetState";
    encode(message: TargetState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetState;
    fromJSON(object: any): TargetState;
    toJSON(message: TargetState): unknown;
    fromPartial<I extends {
        status?: TargetState_Status | undefined;
        subnetId?: string | undefined;
        address?: string | undefined;
    } & {
        status?: TargetState_Status | undefined;
        subnetId?: string | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "status" | "subnetId" | "address">, never>>(object: I): TargetState;
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
