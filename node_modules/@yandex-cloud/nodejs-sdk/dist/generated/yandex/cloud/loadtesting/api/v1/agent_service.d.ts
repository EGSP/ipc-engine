/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { CreateComputeInstance } from "../../../../../yandex/cloud/loadtesting/api/v1/agent/create_compute_instance";
import { Agent } from "../../../../../yandex/cloud/loadtesting/api/v1/agent/agent";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.loadtesting.api.v1";
export interface CreateAgentRequest {
    $type: "yandex.cloud.loadtesting.api.v1.CreateAgentRequest";
    folderId: string;
    name: string;
    description: string;
    computeInstanceParams?: CreateComputeInstance;
    agentVersion: string;
}
export interface CreateAgentMetadata {
    $type: "yandex.cloud.loadtesting.api.v1.CreateAgentMetadata";
    agentId: string;
}
export interface GetAgentRequest {
    $type: "yandex.cloud.loadtesting.api.v1.GetAgentRequest";
    agentId: string;
}
export interface DeleteAgentRequest {
    $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentRequest";
    agentId: string;
}
export interface DeleteAgentMetadata {
    $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentMetadata";
    agentId: string;
}
export interface ListAgentsRequest {
    $type: "yandex.cloud.loadtesting.api.v1.ListAgentsRequest";
    folderId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}
export interface ListAgentsResponse {
    $type: "yandex.cloud.loadtesting.api.v1.ListAgentsResponse";
    agents: Agent[];
    nextPageToken: string;
}
export declare const CreateAgentRequest: {
    $type: "yandex.cloud.loadtesting.api.v1.CreateAgentRequest";
    encode(message: CreateAgentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAgentRequest;
    fromJSON(object: any): CreateAgentRequest;
    toJSON(message: CreateAgentRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        agentVersion?: string | undefined;
        computeInstanceParams?: {
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
                mode?: import("../../../compute/v1/instance_service").AttachedDiskSpec_Mode | undefined;
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
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
        } | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        agentVersion?: string | undefined;
        computeInstanceParams?: ({
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
                mode?: import("../../../compute/v1/instance_service").AttachedDiskSpec_Mode | undefined;
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
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
            } & Record<Exclude<keyof I["computeInstanceParams"]["metadata"], string | number>, never>) | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["computeInstanceParams"]["labels"], string | number>, never>) | undefined;
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
            } & Record<Exclude<keyof I["computeInstanceParams"]["resourcesSpec"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
            bootDiskSpec?: ({
                mode?: import("../../../compute/v1/instance_service").AttachedDiskSpec_Mode | undefined;
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
                mode?: import("../../../compute/v1/instance_service").AttachedDiskSpec_Mode | undefined;
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
                    } & Record<Exclude<keyof I["computeInstanceParams"]["bootDiskSpec"]["diskSpec"]["diskPlacementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition">, never>) | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                } & Record<Exclude<keyof I["computeInstanceParams"]["bootDiskSpec"]["diskSpec"], "$type" | "description" | "name" | "size" | "typeId" | "blockSize" | "diskPlacementPolicy" | "imageId" | "snapshotId">, never>) | undefined;
            } & Record<Exclude<keyof I["computeInstanceParams"]["bootDiskSpec"], "$type" | "mode" | "diskId" | "deviceName" | "autoDelete" | "diskSpec">, never>) | undefined;
            networkInterfaceSpecs?: ({
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
                securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                primaryV4AddressSpec?: ({
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        address?: string | undefined;
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
                        } & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                primaryV6AddressSpec?: ({
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        address?: string | undefined;
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
                        } & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
            } & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"][number], "$type" | "subnetId" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec">, never>)[] & Record<Exclude<keyof I["computeInstanceParams"]["networkInterfaceSpecs"], "$type" | keyof {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
                        ipVersion?: import("../../../compute/v1/instance").IpVersion | undefined;
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
        } & Record<Exclude<keyof I["computeInstanceParams"], "$type" | "metadata" | "labels" | "zoneId" | "serviceAccountId" | "resourcesSpec" | "bootDiskSpec" | "networkInterfaceSpecs">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "agentVersion" | "computeInstanceParams">, never>>(object: I): CreateAgentRequest;
};
export declare const CreateAgentMetadata: {
    $type: "yandex.cloud.loadtesting.api.v1.CreateAgentMetadata";
    encode(message: CreateAgentMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAgentMetadata;
    fromJSON(object: any): CreateAgentMetadata;
    toJSON(message: CreateAgentMetadata): unknown;
    fromPartial<I extends {
        agentId?: string | undefined;
    } & {
        agentId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "agentId">, never>>(object: I): CreateAgentMetadata;
};
export declare const GetAgentRequest: {
    $type: "yandex.cloud.loadtesting.api.v1.GetAgentRequest";
    encode(message: GetAgentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAgentRequest;
    fromJSON(object: any): GetAgentRequest;
    toJSON(message: GetAgentRequest): unknown;
    fromPartial<I extends {
        agentId?: string | undefined;
    } & {
        agentId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "agentId">, never>>(object: I): GetAgentRequest;
};
export declare const DeleteAgentRequest: {
    $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentRequest";
    encode(message: DeleteAgentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAgentRequest;
    fromJSON(object: any): DeleteAgentRequest;
    toJSON(message: DeleteAgentRequest): unknown;
    fromPartial<I extends {
        agentId?: string | undefined;
    } & {
        agentId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "agentId">, never>>(object: I): DeleteAgentRequest;
};
export declare const DeleteAgentMetadata: {
    $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentMetadata";
    encode(message: DeleteAgentMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAgentMetadata;
    fromJSON(object: any): DeleteAgentMetadata;
    toJSON(message: DeleteAgentMetadata): unknown;
    fromPartial<I extends {
        agentId?: string | undefined;
    } & {
        agentId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "agentId">, never>>(object: I): DeleteAgentMetadata;
};
export declare const ListAgentsRequest: {
    $type: "yandex.cloud.loadtesting.api.v1.ListAgentsRequest";
    encode(message: ListAgentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAgentsRequest;
    fromJSON(object: any): ListAgentsRequest;
    toJSON(message: ListAgentsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListAgentsRequest;
};
export declare const ListAgentsResponse: {
    $type: "yandex.cloud.loadtesting.api.v1.ListAgentsResponse";
    encode(message: ListAgentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAgentsResponse;
    fromJSON(object: any): ListAgentsResponse;
    toJSON(message: ListAgentsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        agents?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            status?: import("./agent/status").Status | undefined;
            folderId?: string | undefined;
            computeInstanceId?: string | undefined;
            errors?: string[] | undefined;
            currentJobId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        agents?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            status?: import("./agent/status").Status | undefined;
            folderId?: string | undefined;
            computeInstanceId?: string | undefined;
            errors?: string[] | undefined;
            currentJobId?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            status?: import("./agent/status").Status | undefined;
            folderId?: string | undefined;
            computeInstanceId?: string | undefined;
            errors?: string[] | undefined;
            currentJobId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            status?: import("./agent/status").Status | undefined;
            folderId?: string | undefined;
            computeInstanceId?: string | undefined;
            errors?: (string[] & string[] & Record<Exclude<keyof I["agents"][number]["errors"], "$type" | keyof string[]>, never>) | undefined;
            currentJobId?: string | undefined;
        } & Record<Exclude<keyof I["agents"][number], "$type" | "description" | "id" | "name" | "status" | "folderId" | "computeInstanceId" | "errors" | "currentJobId">, never>)[] & Record<Exclude<keyof I["agents"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            status?: import("./agent/status").Status | undefined;
            folderId?: string | undefined;
            computeInstanceId?: string | undefined;
            errors?: string[] | undefined;
            currentJobId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "agents">, never>>(object: I): ListAgentsResponse;
};
export declare const AgentServiceService: {
    readonly create: {
        readonly path: "/yandex.cloud.loadtesting.api.v1.AgentService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateAgentRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateAgentRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly get: {
        readonly path: "/yandex.cloud.loadtesting.api.v1.AgentService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAgentRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAgentRequest;
        readonly responseSerialize: (value: Agent) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Agent;
    };
    readonly list: {
        readonly path: "/yandex.cloud.loadtesting.api.v1.AgentService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAgentsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAgentsRequest;
        readonly responseSerialize: (value: ListAgentsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAgentsResponse;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.loadtesting.api.v1.AgentService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteAgentRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteAgentRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface AgentServiceServer extends UntypedServiceImplementation {
    create: handleUnaryCall<CreateAgentRequest, Operation>;
    get: handleUnaryCall<GetAgentRequest, Agent>;
    list: handleUnaryCall<ListAgentsRequest, ListAgentsResponse>;
    delete: handleUnaryCall<DeleteAgentRequest, Operation>;
}
export interface AgentServiceClient extends Client {
    create(request: CreateAgentRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateAgentRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateAgentRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    get(request: GetAgentRequest, callback: (error: ServiceError | null, response: Agent) => void): ClientUnaryCall;
    get(request: GetAgentRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Agent) => void): ClientUnaryCall;
    get(request: GetAgentRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Agent) => void): ClientUnaryCall;
    list(request: ListAgentsRequest, callback: (error: ServiceError | null, response: ListAgentsResponse) => void): ClientUnaryCall;
    list(request: ListAgentsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAgentsResponse) => void): ClientUnaryCall;
    list(request: ListAgentsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAgentsResponse) => void): ClientUnaryCall;
    delete(request: DeleteAgentRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAgentRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAgentRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const AgentServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): AgentServiceClient;
    service: typeof AgentServiceService;
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
