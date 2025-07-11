import _m0 from "protobufjs/minimal";
import { ResourcesSpec, AttachedDiskSpec, NetworkInterfaceSpec } from "../../../../../../yandex/cloud/compute/v1/instance_service";
export declare const protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";
export interface CreateComputeInstance {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance";
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the availability zone where the instance resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request
     */
    zoneId: string;
    /**
     * Computing resources of the instance, such as the amount of memory and number of cores.
     * To get a list of available values, see [Levels of core performance](/docs/compute/concepts/performance-levels).
     */
    resourcesSpec?: ResourcesSpec;
    /**
     * The metadata `key:value` pairs that will be assigned to this instance. This includes custom metadata and predefined keys.
     * The total size of all keys and values must be less than 512 KB.
     *
     * Values are free-form strings, and only have meaning as interpreted by the programs which configure the instance.
     * The values must be 256 KB or less.
     *
     * For example, you may use the metadata in order to provide your public SSH key to the instance.
     * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
     */
    metadata: {
        [key: string]: string;
    };
    /** Boot disk to attach to the instance. */
    bootDiskSpec?: AttachedDiskSpec;
    /**
     * Network configuration for the instance. Specifies how the network interface is configured
     * to interact with other services on the internal network and on the internet.
     * Currently only one network interface is supported per instance.
     */
    networkInterfaceSpecs: NetworkInterfaceSpec[];
    /**
     * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
}
export interface CreateComputeInstance_LabelsEntry {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateComputeInstance_MetadataEntry {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry";
    key: string;
    value: string;
}
export declare const CreateComputeInstance: {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance";
    encode(message: CreateComputeInstance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateComputeInstance;
    fromJSON(object: any): CreateComputeInstance;
    toJSON(message: CreateComputeInstance): unknown;
    fromPartial<I extends {
        metadata?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zoneId?: string | undefined;
        serviceAccountId?: string | undefined;
        resourcesSpec?: {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } | undefined;
        bootDiskSpec?: {
            mode?: import("../../../../../../yandex/cloud/compute/v1/instance_service").AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } | undefined;
        } | undefined;
        networkInterfaceSpecs?: {
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
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
        zoneId?: string | undefined;
        serviceAccountId?: string | undefined;
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
            mode?: import("../../../../../../yandex/cloud/compute/v1/instance_service").AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } | undefined;
        } & {
            mode?: import("../../../../../../yandex/cloud/compute/v1/instance_service").AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: ({
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } & {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: ({
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } & {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } & Record<Exclude<keyof I["bootDiskSpec"]["diskSpec"]["diskPlacementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition">, never>) | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } & Record<Exclude<keyof I["bootDiskSpec"]["diskSpec"], "$type" | "description" | "name" | "size" | "typeId" | "blockSize" | "diskPlacementPolicy" | "imageId" | "snapshotId">, never>) | undefined;
        } & Record<Exclude<keyof I["bootDiskSpec"], "$type" | "mode" | "diskId" | "deviceName" | "autoDelete" | "diskSpec">, never>) | undefined;
        networkInterfaceSpecs?: ({
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            subnetId?: string | undefined;
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            primaryV4AddressSpec?: ({
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                oneToOneNatSpec?: ({
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
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
                    } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
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
            } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
            primaryV6AddressSpec?: ({
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                oneToOneNatSpec?: ({
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
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
                    } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
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
            } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
        } & Record<Exclude<keyof I["networkInterfaceSpecs"][number], "$type" | "subnetId" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"], "$type" | keyof {
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: import("../../../../compute/v1/instance").IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "metadata" | "labels" | "zoneId" | "serviceAccountId" | "resourcesSpec" | "bootDiskSpec" | "networkInterfaceSpecs">, never>>(object: I): CreateComputeInstance;
};
export declare const CreateComputeInstance_LabelsEntry: {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry";
    encode(message: CreateComputeInstance_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateComputeInstance_LabelsEntry;
    fromJSON(object: any): CreateComputeInstance_LabelsEntry;
    toJSON(message: CreateComputeInstance_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateComputeInstance_LabelsEntry;
};
export declare const CreateComputeInstance_MetadataEntry: {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry";
    encode(message: CreateComputeInstance_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateComputeInstance_MetadataEntry;
    fromJSON(object: any): CreateComputeInstance_MetadataEntry;
    toJSON(message: CreateComputeInstance_MetadataEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateComputeInstance_MetadataEntry;
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
