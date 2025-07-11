import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export declare enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address, for example 192.168.0.0. */
    IPV4 = 1,
    /** IPV6 - IPv6 address, not available yet. */
    IPV6 = 2,
    UNRECOGNIZED = -1
}
export declare function ipVersionFromJSON(object: any): IpVersion;
export declare function ipVersionToJSON(object: IpVersion): string;
export interface Node {
    $type: "yandex.cloud.k8s.v1.Node";
    /** Computed node status. */
    status: Node_Status;
    /** Node specificaion. */
    spec?: Node_Spec;
    /**
     * Cloud instance status.
     * Not available in `MISSING` status.
     */
    cloudStatus?: Node_CloudStatus;
    /**
     * Kubernetes node status.
     * Not available in `PROVISIONING` and `NOT_CONNECTED` states.
     */
    kubernetesStatus?: Node_KubernetesStatus;
}
/** Computed node status. */
export declare enum Node_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Node instance is not yet created (e.g. in progress). */
    PROVISIONING = 1,
    /**
     * NOT_CONNECTED - Node instance is created but not registered
     * (e.g. is still initializing).
     */
    NOT_CONNECTED = 2,
    /**
     * NOT_READY - Node has connected but is not ready for
     * workload (see conditions for details).
     */
    NOT_READY = 3,
    /** READY - Node has connected and ready for workload. */
    READY = 4,
    /**
     * MISSING - Node is still registered but its instance
     * is deleted (this is our bug).
     */
    MISSING = 5,
    /** STOPPED - Node is stopped */
    STOPPED = 6,
    /** UNKNOWN - Backend request to kubernetes api was unsuccessful. */
    UNKNOWN = 7,
    UNRECOGNIZED = -1
}
export declare function node_StatusFromJSON(object: any): Node_Status;
export declare function node_StatusToJSON(object: Node_Status): string;
/** Kubernetes node info */
export interface Node_KubernetesStatus {
    $type: "yandex.cloud.k8s.v1.Node.KubernetesStatus";
    /** Node id (and instance name) */
    id: string;
    /**
     * Conditions is an array of current observed node conditions.
     * More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
     */
    conditions: Condition[];
    /** If specified, the node's taints. */
    taints: Taint[];
    /** List of volumes that are attached to the node. */
    attachedVolumes: AttachedVolume[];
}
/** Cloud instance info */
export interface Node_CloudStatus {
    $type: "yandex.cloud.k8s.v1.Node.CloudStatus";
    /** Compute instance id */
    id: string;
    /** IG instance status */
    status: string;
    /** IG instance status message */
    statusMessage: string;
}
/** Node specification. */
export interface Node_Spec {
    $type: "yandex.cloud.k8s.v1.Node.Spec";
    /** Node group specified resources. */
    resources?: ResourcesSpec;
    /** Node group specified disk. */
    disk?: DiskSpec;
}
export interface Condition {
    $type: "yandex.cloud.k8s.v1.Condition";
    /** Type of node condition. */
    type: string;
    /** Status is the status of the condition. */
    status: string;
    /** Human-readable message indicating details about last transition. */
    message: string;
    /** Last time we got an update on a given condition. */
    lastHeartbeatTime?: Date;
    /** Last time the condition transit from one status to another. */
    lastTransitionTime?: Date;
}
export interface Taint {
    $type: "yandex.cloud.k8s.v1.Taint";
    /** The taint key to be applied to a node. */
    key: string;
    /** The taint value corresponding to the taint key. */
    value: string;
    /** The effect of the taint on pods that do not tolerate the taint. */
    effect: Taint_Effect;
}
export declare enum Taint_Effect {
    EFFECT_UNSPECIFIED = 0,
    /**
     * NO_SCHEDULE - Do not allow new pods to schedule onto the node unless they tolerate the taint,
     * but allow all pods submitted to Kubelet without going through the scheduler
     * to start, and allow all already-running pods to continue running.
     */
    NO_SCHEDULE = 1,
    /**
     * PREFER_NO_SCHEDULE - Like NO_SCHEDULE, but the scheduler tries not to schedule
     * new pods onto the node, rather than prohibiting new pods from scheduling
     * onto the node entirely. Enforced by the scheduler.
     */
    PREFER_NO_SCHEDULE = 2,
    /** NO_EXECUTE - Evict any already-running pods that do not tolerate the taint. */
    NO_EXECUTE = 3,
    UNRECOGNIZED = -1
}
export declare function taint_EffectFromJSON(object: any): Taint_Effect;
export declare function taint_EffectToJSON(object: Taint_Effect): string;
/** AttachedVolume describes a volume attached to a node */
export interface AttachedVolume {
    $type: "yandex.cloud.k8s.v1.AttachedVolume";
    /** Name of the driver which has attached the volume */
    driverName: string;
    /** Volume handle (cloud disk id) */
    volumeHandle: string;
}
export interface NodeTemplate {
    $type: "yandex.cloud.k8s.v1.NodeTemplate";
    /**
     * Name of the instance.
     * In order to be unique it must contain at least on of instance unique placeholders:
     *   {instance.short_id}
     *   {instance.index}
     *   combination of {instance.zone_id} and {instance.index_in_zone}
     * Example: my-instance-{instance.index}
     * If not set, default is used: {instance_group.id}-{instance.short_id}
     * It may also contain another placeholders, see metadata doc for full list.
     */
    name: string;
    /** these labels will be assigned to compute nodes (instances), created by the nodegroup */
    labels: {
        [key: string]: string;
    };
    /** ID of the hardware platform configuration for the node. */
    platformId: string;
    /** Computing resources of the node such as the amount of memory and number of cores. */
    resourcesSpec?: ResourcesSpec;
    /** Specification for the boot disk that will be attached to the node. */
    bootDiskSpec?: DiskSpec;
    /**
     * The metadata as `key:value` pairs assigned to this instance template. Only SSH keys are supported as metadata.
     *
     * For more information, see [Connecting to a node over SSH](/docs/managed-kubernetes/operations/node-connect-ssh).
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * Specification for the create network interfaces for the node group compute instances.
     * Deprecated, please use network_interface_specs.
     *
     * @deprecated
     */
    v4AddressSpec?: NodeAddressSpec;
    /** Scheduling policy configuration. */
    schedulingPolicy?: SchedulingPolicy;
    /**
     * New api, to specify network interfaces for the node group compute instances.
     * Can not be used together with 'v4_address_spec'
     */
    networkInterfaceSpecs: NetworkInterfaceSpec[];
    placementPolicy?: PlacementPolicy;
    /** this parameter allows to specify type of network acceleration used on nodes (instances) */
    networkSettings?: NodeTemplate_NetworkSettings;
    containerRuntimeSettings?: NodeTemplate_ContainerRuntimeSettings;
    containerNetworkSettings?: NodeTemplate_ContainerNetworkSettings;
    /** GPU settings */
    gpuSettings?: GpuSettings;
}
export interface NodeTemplate_LabelsEntry {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.LabelsEntry";
    key: string;
    value: string;
}
export interface NodeTemplate_MetadataEntry {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.MetadataEntry";
    key: string;
    value: string;
}
export interface NodeTemplate_NetworkSettings {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.NetworkSettings";
    type: NodeTemplate_NetworkSettings_Type;
}
export declare enum NodeTemplate_NetworkSettings_Type {
    TYPE_UNSPECIFIED = 0,
    STANDARD = 1,
    /**
     * SOFTWARE_ACCELERATED - unsupported yet, commented for possible future utilization.
     * HARDWARE_ACCELERATED = 3;
     */
    SOFTWARE_ACCELERATED = 2,
    UNRECOGNIZED = -1
}
export declare function nodeTemplate_NetworkSettings_TypeFromJSON(object: any): NodeTemplate_NetworkSettings_Type;
export declare function nodeTemplate_NetworkSettings_TypeToJSON(object: NodeTemplate_NetworkSettings_Type): string;
export interface NodeTemplate_ContainerRuntimeSettings {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerRuntimeSettings";
    type: NodeTemplate_ContainerRuntimeSettings_Type;
}
export declare enum NodeTemplate_ContainerRuntimeSettings_Type {
    TYPE_UNSPECIFIED = 0,
    DOCKER = 1,
    CONTAINERD = 2,
    UNRECOGNIZED = -1
}
export declare function nodeTemplate_ContainerRuntimeSettings_TypeFromJSON(object: any): NodeTemplate_ContainerRuntimeSettings_Type;
export declare function nodeTemplate_ContainerRuntimeSettings_TypeToJSON(object: NodeTemplate_ContainerRuntimeSettings_Type): string;
export interface NodeTemplate_ContainerNetworkSettings {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerNetworkSettings";
    podMtu: number;
}
export interface GpuSettings {
    $type: "yandex.cloud.k8s.v1.GpuSettings";
    /** GPU cluster id, that mk8s node will join. */
    gpuClusterId: string;
    /** GPU environment configured on node. */
    gpuEnvironment: GpuSettings_GpuEnvironment;
}
export declare enum GpuSettings_GpuEnvironment {
    /** GPU_ENVIRONMENT_UNSPECIFIED - Use one of the values below, depending on the default for the specific Cloud installation. */
    GPU_ENVIRONMENT_UNSPECIFIED = 0,
    /** RUNC_DRIVERS_CUDA - Use a node image with the pre-installed GPU toolkit, drivers and CUDA. */
    RUNC_DRIVERS_CUDA = 1,
    /**
     * RUNC - Use a node image with the pre-installed GPU toolkit but without drivers.
     * You should install drivers on a node yourself in that case.
     * There are tools to help you to do that, for example gpu-operator.
     */
    RUNC = 2,
    UNRECOGNIZED = -1
}
export declare function gpuSettings_GpuEnvironmentFromJSON(object: any): GpuSettings_GpuEnvironment;
export declare function gpuSettings_GpuEnvironmentToJSON(object: GpuSettings_GpuEnvironment): string;
export interface NetworkInterfaceSpec {
    $type: "yandex.cloud.k8s.v1.NetworkInterfaceSpec";
    /** IDs of the subnets. */
    subnetIds: string[];
    /** Primary IPv4 address that is assigned to the instance for this network interface. */
    primaryV4AddressSpec?: NodeAddressSpec;
    /** Primary IPv6 address that is assigned to the instance for this network interface. */
    primaryV6AddressSpec?: NodeAddressSpec;
    /** IDs of security groups. */
    securityGroupIds: string[];
}
export interface NodeAddressSpec {
    $type: "yandex.cloud.k8s.v1.NodeAddressSpec";
    /** One-to-one NAT configuration. Setting up one-to-one NAT ensures that public IP addresses are assigned to nodes, and therefore internet is accessible for all nodes of the node group. If the field is not set, NAT will not be set up. */
    oneToOneNatSpec?: OneToOneNatSpec;
    /** Internal DNS configuration. */
    dnsRecordSpecs: DnsRecordSpec[];
}
export interface DnsRecordSpec {
    $type: "yandex.cloud.k8s.v1.DnsRecordSpec";
    /** FQDN (required). */
    fqdn: string;
    /** DNS zone id (optional, if not set, private zone is used). */
    dnsZoneId: string;
    /** DNS record ttl, values in 0-86400 (optional). */
    ttl: number;
    /** When set to true, also create PTR DNS record (optional). */
    ptr: boolean;
}
export interface OneToOneNatSpec {
    $type: "yandex.cloud.k8s.v1.OneToOneNatSpec";
    /** IP version for the public IP address. */
    ipVersion: IpVersion;
}
export interface ResourcesSpec {
    $type: "yandex.cloud.k8s.v1.ResourcesSpec";
    /** Amount of memory available to the node, specified in bytes. */
    memory: number;
    /** Number of cores available to the node. */
    cores: number;
    /**
     * Baseline level of CPU performance with the possibility to burst performance above that baseline level.
     * This field sets baseline performance for each core.
     */
    coreFraction: number;
    /** Number of GPUs available to the node. */
    gpus: number;
}
export interface DiskSpec {
    $type: "yandex.cloud.k8s.v1.DiskSpec";
    /** ID of the disk type. */
    diskTypeId: string;
    /** Size of the disk, specified in bytes. */
    diskSize: number;
}
export interface SchedulingPolicy {
    $type: "yandex.cloud.k8s.v1.SchedulingPolicy";
    /**
     * True for preemptible compute instances. Default value is false. Preemptible compute instances are stopped at least once every 24 hours, and can be stopped at any time
     * if their resources are needed by Compute.
     * For more information, see [Preemptible Virtual Machines](/docs/compute/concepts/preemptible-vm).
     */
    preemptible: boolean;
}
export interface PlacementPolicy {
    $type: "yandex.cloud.k8s.v1.PlacementPolicy";
    /** Identifier of placement group */
    placementGroupId: string;
}
export declare const Node: {
    $type: "yandex.cloud.k8s.v1.Node";
    encode(message: Node, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): unknown;
    fromPartial<I extends {
        status?: Node_Status | undefined;
        spec?: {
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            disk?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
            } | undefined;
        } | undefined;
        cloudStatus?: {
            id?: string | undefined;
            status?: string | undefined;
            statusMessage?: string | undefined;
        } | undefined;
        kubernetesStatus?: {
            id?: string | undefined;
            conditions?: {
                type?: string | undefined;
                message?: string | undefined;
                status?: string | undefined;
                lastHeartbeatTime?: Date | undefined;
                lastTransitionTime?: Date | undefined;
            }[] | undefined;
            taints?: {
                value?: string | undefined;
                key?: string | undefined;
                effect?: Taint_Effect | undefined;
            }[] | undefined;
            attachedVolumes?: {
                driverName?: string | undefined;
                volumeHandle?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        status?: Node_Status | undefined;
        spec?: ({
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            disk?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
            } | undefined;
        } & {
            resources?: ({
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } & {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } & Record<Exclude<keyof I["spec"]["resources"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
            disk?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
            } & Record<Exclude<keyof I["spec"]["disk"], "$type" | "diskTypeId" | "diskSize">, never>) | undefined;
        } & Record<Exclude<keyof I["spec"], "$type" | "resources" | "disk">, never>) | undefined;
        cloudStatus?: ({
            id?: string | undefined;
            status?: string | undefined;
            statusMessage?: string | undefined;
        } & {
            id?: string | undefined;
            status?: string | undefined;
            statusMessage?: string | undefined;
        } & Record<Exclude<keyof I["cloudStatus"], "$type" | "id" | "status" | "statusMessage">, never>) | undefined;
        kubernetesStatus?: ({
            id?: string | undefined;
            conditions?: {
                type?: string | undefined;
                message?: string | undefined;
                status?: string | undefined;
                lastHeartbeatTime?: Date | undefined;
                lastTransitionTime?: Date | undefined;
            }[] | undefined;
            taints?: {
                value?: string | undefined;
                key?: string | undefined;
                effect?: Taint_Effect | undefined;
            }[] | undefined;
            attachedVolumes?: {
                driverName?: string | undefined;
                volumeHandle?: string | undefined;
            }[] | undefined;
        } & {
            id?: string | undefined;
            conditions?: ({
                type?: string | undefined;
                message?: string | undefined;
                status?: string | undefined;
                lastHeartbeatTime?: Date | undefined;
                lastTransitionTime?: Date | undefined;
            }[] & ({
                type?: string | undefined;
                message?: string | undefined;
                status?: string | undefined;
                lastHeartbeatTime?: Date | undefined;
                lastTransitionTime?: Date | undefined;
            } & {
                type?: string | undefined;
                message?: string | undefined;
                status?: string | undefined;
                lastHeartbeatTime?: Date | undefined;
                lastTransitionTime?: Date | undefined;
            } & Record<Exclude<keyof I["kubernetesStatus"]["conditions"][number], "$type" | "type" | "message" | "status" | "lastHeartbeatTime" | "lastTransitionTime">, never>)[] & Record<Exclude<keyof I["kubernetesStatus"]["conditions"], "$type" | keyof {
                type?: string | undefined;
                message?: string | undefined;
                status?: string | undefined;
                lastHeartbeatTime?: Date | undefined;
                lastTransitionTime?: Date | undefined;
            }[]>, never>) | undefined;
            taints?: ({
                value?: string | undefined;
                key?: string | undefined;
                effect?: Taint_Effect | undefined;
            }[] & ({
                value?: string | undefined;
                key?: string | undefined;
                effect?: Taint_Effect | undefined;
            } & {
                value?: string | undefined;
                key?: string | undefined;
                effect?: Taint_Effect | undefined;
            } & Record<Exclude<keyof I["kubernetesStatus"]["taints"][number], "$type" | "value" | "key" | "effect">, never>)[] & Record<Exclude<keyof I["kubernetesStatus"]["taints"], "$type" | keyof {
                value?: string | undefined;
                key?: string | undefined;
                effect?: Taint_Effect | undefined;
            }[]>, never>) | undefined;
            attachedVolumes?: ({
                driverName?: string | undefined;
                volumeHandle?: string | undefined;
            }[] & ({
                driverName?: string | undefined;
                volumeHandle?: string | undefined;
            } & {
                driverName?: string | undefined;
                volumeHandle?: string | undefined;
            } & Record<Exclude<keyof I["kubernetesStatus"]["attachedVolumes"][number], "$type" | "driverName" | "volumeHandle">, never>)[] & Record<Exclude<keyof I["kubernetesStatus"]["attachedVolumes"], "$type" | keyof {
                driverName?: string | undefined;
                volumeHandle?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["kubernetesStatus"], "$type" | "id" | "conditions" | "taints" | "attachedVolumes">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "status" | "spec" | "cloudStatus" | "kubernetesStatus">, never>>(object: I): Node;
};
export declare const Node_KubernetesStatus: {
    $type: "yandex.cloud.k8s.v1.Node.KubernetesStatus";
    encode(message: Node_KubernetesStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Node_KubernetesStatus;
    fromJSON(object: any): Node_KubernetesStatus;
    toJSON(message: Node_KubernetesStatus): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        conditions?: {
            type?: string | undefined;
            message?: string | undefined;
            status?: string | undefined;
            lastHeartbeatTime?: Date | undefined;
            lastTransitionTime?: Date | undefined;
        }[] | undefined;
        taints?: {
            value?: string | undefined;
            key?: string | undefined;
            effect?: Taint_Effect | undefined;
        }[] | undefined;
        attachedVolumes?: {
            driverName?: string | undefined;
            volumeHandle?: string | undefined;
        }[] | undefined;
    } & {
        id?: string | undefined;
        conditions?: ({
            type?: string | undefined;
            message?: string | undefined;
            status?: string | undefined;
            lastHeartbeatTime?: Date | undefined;
            lastTransitionTime?: Date | undefined;
        }[] & ({
            type?: string | undefined;
            message?: string | undefined;
            status?: string | undefined;
            lastHeartbeatTime?: Date | undefined;
            lastTransitionTime?: Date | undefined;
        } & {
            type?: string | undefined;
            message?: string | undefined;
            status?: string | undefined;
            lastHeartbeatTime?: Date | undefined;
            lastTransitionTime?: Date | undefined;
        } & Record<Exclude<keyof I["conditions"][number], "$type" | "type" | "message" | "status" | "lastHeartbeatTime" | "lastTransitionTime">, never>)[] & Record<Exclude<keyof I["conditions"], "$type" | keyof {
            type?: string | undefined;
            message?: string | undefined;
            status?: string | undefined;
            lastHeartbeatTime?: Date | undefined;
            lastTransitionTime?: Date | undefined;
        }[]>, never>) | undefined;
        taints?: ({
            value?: string | undefined;
            key?: string | undefined;
            effect?: Taint_Effect | undefined;
        }[] & ({
            value?: string | undefined;
            key?: string | undefined;
            effect?: Taint_Effect | undefined;
        } & {
            value?: string | undefined;
            key?: string | undefined;
            effect?: Taint_Effect | undefined;
        } & Record<Exclude<keyof I["taints"][number], "$type" | "value" | "key" | "effect">, never>)[] & Record<Exclude<keyof I["taints"], "$type" | keyof {
            value?: string | undefined;
            key?: string | undefined;
            effect?: Taint_Effect | undefined;
        }[]>, never>) | undefined;
        attachedVolumes?: ({
            driverName?: string | undefined;
            volumeHandle?: string | undefined;
        }[] & ({
            driverName?: string | undefined;
            volumeHandle?: string | undefined;
        } & {
            driverName?: string | undefined;
            volumeHandle?: string | undefined;
        } & Record<Exclude<keyof I["attachedVolumes"][number], "$type" | "driverName" | "volumeHandle">, never>)[] & Record<Exclude<keyof I["attachedVolumes"], "$type" | keyof {
            driverName?: string | undefined;
            volumeHandle?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "conditions" | "taints" | "attachedVolumes">, never>>(object: I): Node_KubernetesStatus;
};
export declare const Node_CloudStatus: {
    $type: "yandex.cloud.k8s.v1.Node.CloudStatus";
    encode(message: Node_CloudStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Node_CloudStatus;
    fromJSON(object: any): Node_CloudStatus;
    toJSON(message: Node_CloudStatus): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        status?: string | undefined;
        statusMessage?: string | undefined;
    } & {
        id?: string | undefined;
        status?: string | undefined;
        statusMessage?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "status" | "statusMessage">, never>>(object: I): Node_CloudStatus;
};
export declare const Node_Spec: {
    $type: "yandex.cloud.k8s.v1.Node.Spec";
    encode(message: Node_Spec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Node_Spec;
    fromJSON(object: any): Node_Spec;
    toJSON(message: Node_Spec): unknown;
    fromPartial<I extends {
        resources?: {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } | undefined;
        disk?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
        } | undefined;
    } & {
        resources?: ({
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } & {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
        disk?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
        } & Record<Exclude<keyof I["disk"], "$type" | "diskTypeId" | "diskSize">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "disk">, never>>(object: I): Node_Spec;
};
export declare const Condition: {
    $type: "yandex.cloud.k8s.v1.Condition";
    encode(message: Condition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Condition;
    fromJSON(object: any): Condition;
    toJSON(message: Condition): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        message?: string | undefined;
        status?: string | undefined;
        lastHeartbeatTime?: Date | undefined;
        lastTransitionTime?: Date | undefined;
    } & {
        type?: string | undefined;
        message?: string | undefined;
        status?: string | undefined;
        lastHeartbeatTime?: Date | undefined;
        lastTransitionTime?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "message" | "status" | "lastHeartbeatTime" | "lastTransitionTime">, never>>(object: I): Condition;
};
export declare const Taint: {
    $type: "yandex.cloud.k8s.v1.Taint";
    encode(message: Taint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Taint;
    fromJSON(object: any): Taint;
    toJSON(message: Taint): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
        effect?: Taint_Effect | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
        effect?: Taint_Effect | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key" | "effect">, never>>(object: I): Taint;
};
export declare const AttachedVolume: {
    $type: "yandex.cloud.k8s.v1.AttachedVolume";
    encode(message: AttachedVolume, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedVolume;
    fromJSON(object: any): AttachedVolume;
    toJSON(message: AttachedVolume): unknown;
    fromPartial<I extends {
        driverName?: string | undefined;
        volumeHandle?: string | undefined;
    } & {
        driverName?: string | undefined;
        volumeHandle?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "driverName" | "volumeHandle">, never>>(object: I): AttachedVolume;
};
export declare const NodeTemplate: {
    $type: "yandex.cloud.k8s.v1.NodeTemplate";
    encode(message: NodeTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeTemplate;
    fromJSON(object: any): NodeTemplate;
    toJSON(message: NodeTemplate): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        metadata?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        platformId?: string | undefined;
        gpuSettings?: {
            gpuClusterId?: string | undefined;
            gpuEnvironment?: GpuSettings_GpuEnvironment | undefined;
        } | undefined;
        schedulingPolicy?: {
            preemptible?: boolean | undefined;
        } | undefined;
        networkSettings?: {
            type?: NodeTemplate_NetworkSettings_Type | undefined;
        } | undefined;
        placementPolicy?: {
            placementGroupId?: string | undefined;
        } | undefined;
        resourcesSpec?: {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } | undefined;
        bootDiskSpec?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
        } | undefined;
        networkInterfaceSpecs?: {
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                oneToOneNatSpec?: {
                    ipVersion?: IpVersion | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                oneToOneNatSpec?: {
                    ipVersion?: IpVersion | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            subnetIds?: string[] | undefined;
        }[] | undefined;
        v4AddressSpec?: {
            oneToOneNatSpec?: {
                ipVersion?: IpVersion | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        containerRuntimeSettings?: {
            type?: NodeTemplate_ContainerRuntimeSettings_Type | undefined;
        } | undefined;
        containerNetworkSettings?: {
            podMtu?: number | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        metadata?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["metadata"], string | number>, never>) | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        platformId?: string | undefined;
        gpuSettings?: ({
            gpuClusterId?: string | undefined;
            gpuEnvironment?: GpuSettings_GpuEnvironment | undefined;
        } & {
            gpuClusterId?: string | undefined;
            gpuEnvironment?: GpuSettings_GpuEnvironment | undefined;
        } & Record<Exclude<keyof I["gpuSettings"], "$type" | "gpuClusterId" | "gpuEnvironment">, never>) | undefined;
        schedulingPolicy?: ({
            preemptible?: boolean | undefined;
        } & {
            preemptible?: boolean | undefined;
        } & Record<Exclude<keyof I["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
        networkSettings?: ({
            type?: NodeTemplate_NetworkSettings_Type | undefined;
        } & {
            type?: NodeTemplate_NetworkSettings_Type | undefined;
        } & Record<Exclude<keyof I["networkSettings"], "$type" | "type">, never>) | undefined;
        placementPolicy?: ({
            placementGroupId?: string | undefined;
        } & {
            placementGroupId?: string | undefined;
        } & Record<Exclude<keyof I["placementPolicy"], "$type" | "placementGroupId">, never>) | undefined;
        resourcesSpec?: ({
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } & {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } & Record<Exclude<keyof I["resourcesSpec"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
        bootDiskSpec?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
        } & Record<Exclude<keyof I["bootDiskSpec"], "$type" | "diskTypeId" | "diskSize">, never>) | undefined;
        networkInterfaceSpecs?: ({
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                oneToOneNatSpec?: {
                    ipVersion?: IpVersion | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                oneToOneNatSpec?: {
                    ipVersion?: IpVersion | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            subnetIds?: string[] | undefined;
        }[] & ({
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                oneToOneNatSpec?: {
                    ipVersion?: IpVersion | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                oneToOneNatSpec?: {
                    ipVersion?: IpVersion | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            subnetIds?: string[] | undefined;
        } & {
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            primaryV4AddressSpec?: ({
                oneToOneNatSpec?: {
                    ipVersion?: IpVersion | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                oneToOneNatSpec?: ({
                    ipVersion?: IpVersion | undefined;
                } & {
                    ipVersion?: IpVersion | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
                dnsRecordSpecs?: ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] & ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
            primaryV6AddressSpec?: ({
                oneToOneNatSpec?: {
                    ipVersion?: IpVersion | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                oneToOneNatSpec?: ({
                    ipVersion?: IpVersion | undefined;
                } & {
                    ipVersion?: IpVersion | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
                dnsRecordSpecs?: ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] & ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["networkInterfaceSpecs"][number], "$type" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec" | "subnetIds">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"], "$type" | keyof {
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                oneToOneNatSpec?: {
                    ipVersion?: IpVersion | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                oneToOneNatSpec?: {
                    ipVersion?: IpVersion | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            subnetIds?: string[] | undefined;
        }[]>, never>) | undefined;
        v4AddressSpec?: ({
            oneToOneNatSpec?: {
                ipVersion?: IpVersion | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } & {
            oneToOneNatSpec?: ({
                ipVersion?: IpVersion | undefined;
            } & {
                ipVersion?: IpVersion | undefined;
            } & Record<Exclude<keyof I["v4AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
            dnsRecordSpecs?: ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] & ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & Record<Exclude<keyof I["v4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["v4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["v4AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
        containerRuntimeSettings?: ({
            type?: NodeTemplate_ContainerRuntimeSettings_Type | undefined;
        } & {
            type?: NodeTemplate_ContainerRuntimeSettings_Type | undefined;
        } & Record<Exclude<keyof I["containerRuntimeSettings"], "$type" | "type">, never>) | undefined;
        containerNetworkSettings?: ({
            podMtu?: number | undefined;
        } & {
            podMtu?: number | undefined;
        } & Record<Exclude<keyof I["containerNetworkSettings"], "$type" | "podMtu">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "metadata" | "labels" | "platformId" | "gpuSettings" | "schedulingPolicy" | "networkSettings" | "placementPolicy" | "resourcesSpec" | "bootDiskSpec" | "networkInterfaceSpecs" | "v4AddressSpec" | "containerRuntimeSettings" | "containerNetworkSettings">, never>>(object: I): NodeTemplate;
};
export declare const NodeTemplate_LabelsEntry: {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.LabelsEntry";
    encode(message: NodeTemplate_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeTemplate_LabelsEntry;
    fromJSON(object: any): NodeTemplate_LabelsEntry;
    toJSON(message: NodeTemplate_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): NodeTemplate_LabelsEntry;
};
export declare const NodeTemplate_MetadataEntry: {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.MetadataEntry";
    encode(message: NodeTemplate_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeTemplate_MetadataEntry;
    fromJSON(object: any): NodeTemplate_MetadataEntry;
    toJSON(message: NodeTemplate_MetadataEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): NodeTemplate_MetadataEntry;
};
export declare const NodeTemplate_NetworkSettings: {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.NetworkSettings";
    encode(message: NodeTemplate_NetworkSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeTemplate_NetworkSettings;
    fromJSON(object: any): NodeTemplate_NetworkSettings;
    toJSON(message: NodeTemplate_NetworkSettings): unknown;
    fromPartial<I extends {
        type?: NodeTemplate_NetworkSettings_Type | undefined;
    } & {
        type?: NodeTemplate_NetworkSettings_Type | undefined;
    } & Record<Exclude<keyof I, "$type" | "type">, never>>(object: I): NodeTemplate_NetworkSettings;
};
export declare const NodeTemplate_ContainerRuntimeSettings: {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerRuntimeSettings";
    encode(message: NodeTemplate_ContainerRuntimeSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeTemplate_ContainerRuntimeSettings;
    fromJSON(object: any): NodeTemplate_ContainerRuntimeSettings;
    toJSON(message: NodeTemplate_ContainerRuntimeSettings): unknown;
    fromPartial<I extends {
        type?: NodeTemplate_ContainerRuntimeSettings_Type | undefined;
    } & {
        type?: NodeTemplate_ContainerRuntimeSettings_Type | undefined;
    } & Record<Exclude<keyof I, "$type" | "type">, never>>(object: I): NodeTemplate_ContainerRuntimeSettings;
};
export declare const NodeTemplate_ContainerNetworkSettings: {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerNetworkSettings";
    encode(message: NodeTemplate_ContainerNetworkSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeTemplate_ContainerNetworkSettings;
    fromJSON(object: any): NodeTemplate_ContainerNetworkSettings;
    toJSON(message: NodeTemplate_ContainerNetworkSettings): unknown;
    fromPartial<I extends {
        podMtu?: number | undefined;
    } & {
        podMtu?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "podMtu">, never>>(object: I): NodeTemplate_ContainerNetworkSettings;
};
export declare const GpuSettings: {
    $type: "yandex.cloud.k8s.v1.GpuSettings";
    encode(message: GpuSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GpuSettings;
    fromJSON(object: any): GpuSettings;
    toJSON(message: GpuSettings): unknown;
    fromPartial<I extends {
        gpuClusterId?: string | undefined;
        gpuEnvironment?: GpuSettings_GpuEnvironment | undefined;
    } & {
        gpuClusterId?: string | undefined;
        gpuEnvironment?: GpuSettings_GpuEnvironment | undefined;
    } & Record<Exclude<keyof I, "$type" | "gpuClusterId" | "gpuEnvironment">, never>>(object: I): GpuSettings;
};
export declare const NetworkInterfaceSpec: {
    $type: "yandex.cloud.k8s.v1.NetworkInterfaceSpec";
    encode(message: NetworkInterfaceSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInterfaceSpec;
    fromJSON(object: any): NetworkInterfaceSpec;
    toJSON(message: NetworkInterfaceSpec): unknown;
    fromPartial<I extends {
        securityGroupIds?: string[] | undefined;
        primaryV4AddressSpec?: {
            oneToOneNatSpec?: {
                ipVersion?: IpVersion | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        primaryV6AddressSpec?: {
            oneToOneNatSpec?: {
                ipVersion?: IpVersion | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        subnetIds?: string[] | undefined;
    } & {
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        primaryV4AddressSpec?: ({
            oneToOneNatSpec?: {
                ipVersion?: IpVersion | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } & {
            oneToOneNatSpec?: ({
                ipVersion?: IpVersion | undefined;
            } & {
                ipVersion?: IpVersion | undefined;
            } & Record<Exclude<keyof I["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
            dnsRecordSpecs?: ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] & ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & Record<Exclude<keyof I["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV4AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
        primaryV6AddressSpec?: ({
            oneToOneNatSpec?: {
                ipVersion?: IpVersion | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } & {
            oneToOneNatSpec?: ({
                ipVersion?: IpVersion | undefined;
            } & {
                ipVersion?: IpVersion | undefined;
            } & Record<Exclude<keyof I["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
            dnsRecordSpecs?: ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] & ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & Record<Exclude<keyof I["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV6AddressSpec"], "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec" | "subnetIds">, never>>(object: I): NetworkInterfaceSpec;
};
export declare const NodeAddressSpec: {
    $type: "yandex.cloud.k8s.v1.NodeAddressSpec";
    encode(message: NodeAddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeAddressSpec;
    fromJSON(object: any): NodeAddressSpec;
    toJSON(message: NodeAddressSpec): unknown;
    fromPartial<I extends {
        oneToOneNatSpec?: {
            ipVersion?: IpVersion | undefined;
        } | undefined;
        dnsRecordSpecs?: {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[] | undefined;
    } & {
        oneToOneNatSpec?: ({
            ipVersion?: IpVersion | undefined;
        } & {
            ipVersion?: IpVersion | undefined;
        } & Record<Exclude<keyof I["oneToOneNatSpec"], "$type" | "ipVersion">, never>) | undefined;
        dnsRecordSpecs?: ({
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[] & ({
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        } & {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        } & Record<Exclude<keyof I["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["dnsRecordSpecs"], "$type" | keyof {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>>(object: I): NodeAddressSpec;
};
export declare const DnsRecordSpec: {
    $type: "yandex.cloud.k8s.v1.DnsRecordSpec";
    encode(message: DnsRecordSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DnsRecordSpec;
    fromJSON(object: any): DnsRecordSpec;
    toJSON(message: DnsRecordSpec): unknown;
    fromPartial<I extends {
        ttl?: number | undefined;
        fqdn?: string | undefined;
        dnsZoneId?: string | undefined;
        ptr?: boolean | undefined;
    } & {
        ttl?: number | undefined;
        fqdn?: string | undefined;
        dnsZoneId?: string | undefined;
        ptr?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>>(object: I): DnsRecordSpec;
};
export declare const OneToOneNatSpec: {
    $type: "yandex.cloud.k8s.v1.OneToOneNatSpec";
    encode(message: OneToOneNatSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OneToOneNatSpec;
    fromJSON(object: any): OneToOneNatSpec;
    toJSON(message: OneToOneNatSpec): unknown;
    fromPartial<I extends {
        ipVersion?: IpVersion | undefined;
    } & {
        ipVersion?: IpVersion | undefined;
    } & Record<Exclude<keyof I, "$type" | "ipVersion">, never>>(object: I): OneToOneNatSpec;
};
export declare const ResourcesSpec: {
    $type: "yandex.cloud.k8s.v1.ResourcesSpec";
    encode(message: ResourcesSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourcesSpec;
    fromJSON(object: any): ResourcesSpec;
    toJSON(message: ResourcesSpec): unknown;
    fromPartial<I extends {
        memory?: number | undefined;
        cores?: number | undefined;
        coreFraction?: number | undefined;
        gpus?: number | undefined;
    } & {
        memory?: number | undefined;
        cores?: number | undefined;
        coreFraction?: number | undefined;
        gpus?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>>(object: I): ResourcesSpec;
};
export declare const DiskSpec: {
    $type: "yandex.cloud.k8s.v1.DiskSpec";
    encode(message: DiskSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DiskSpec;
    fromJSON(object: any): DiskSpec;
    toJSON(message: DiskSpec): unknown;
    fromPartial<I extends {
        diskTypeId?: string | undefined;
        diskSize?: number | undefined;
    } & {
        diskTypeId?: string | undefined;
        diskSize?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskTypeId" | "diskSize">, never>>(object: I): DiskSpec;
};
export declare const SchedulingPolicy: {
    $type: "yandex.cloud.k8s.v1.SchedulingPolicy";
    encode(message: SchedulingPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchedulingPolicy;
    fromJSON(object: any): SchedulingPolicy;
    toJSON(message: SchedulingPolicy): unknown;
    fromPartial<I extends {
        preemptible?: boolean | undefined;
    } & {
        preemptible?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "preemptible">, never>>(object: I): SchedulingPolicy;
};
export declare const PlacementPolicy: {
    $type: "yandex.cloud.k8s.v1.PlacementPolicy";
    encode(message: PlacementPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementPolicy;
    fromJSON(object: any): PlacementPolicy;
    toJSON(message: PlacementPolicy): unknown;
    fromPartial<I extends {
        placementGroupId?: string | undefined;
    } & {
        placementGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "placementGroupId">, never>>(object: I): PlacementPolicy;
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
