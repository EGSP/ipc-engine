/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { SecurityGroupRule_Direction, PortRange, SecurityGroup, CidrBlocks } from "../../../../yandex/cloud/vpc/v1/security_group";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.vpc.v1";
export interface GetSecurityGroupRequest {
    $type: "yandex.cloud.vpc.v1.GetSecurityGroupRequest";
    securityGroupId: string;
}
export interface ListSecurityGroupsRequest {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupsRequest";
    folderId: string;
    pageSize: number;
    pageToken: string;
    /** filter by network_id is here */
    filter: string;
}
export interface ListSecurityGroupsResponse {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupsResponse";
    securityGroups: SecurityGroup[];
    nextPageToken: string;
}
export interface CreateSecurityGroupRequest {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest";
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    networkId: string;
    ruleSpecs: SecurityGroupRuleSpec[];
}
export interface CreateSecurityGroupRequest_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface SecurityGroupRuleSpec {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec";
    description: string;
    labels: {
        [key: string]: string;
    };
    direction: SecurityGroupRule_Direction;
    /** null value means any port */
    ports?: PortRange;
    protocolName: string | undefined;
    protocolNumber: number | undefined;
    cidrBlocks?: CidrBlocks | undefined;
    securityGroupId: string | undefined;
    /** string subnet_id = .. ; */
    predefinedTarget: string | undefined;
}
export interface SecurityGroupRuleSpec_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateSecurityGroupMetadata {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupMetadata";
    securityGroupId: string;
}
export interface UpdateSecurityGroupRequest {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest";
    securityGroupId: string;
    updateMask?: FieldMask;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    /** all existing rules will be replaced with given list */
    ruleSpecs: SecurityGroupRuleSpec[];
}
export interface UpdateSecurityGroupRequest_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateSecurityGroupMetadata {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupMetadata";
    securityGroupId: string;
    addedRuleIds: string[];
}
export interface UpdateSecurityGroupRulesRequest {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRulesRequest";
    securityGroupId: string;
    /** list of rules ids to delete */
    deletionRuleIds: string[];
    additionRuleSpecs: SecurityGroupRuleSpec[];
}
export interface UpdateSecurityGroupRuleRequest {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest";
    securityGroupId: string;
    ruleId: string;
    updateMask?: FieldMask;
    description: string;
    labels: {
        [key: string]: string;
    };
}
export interface UpdateSecurityGroupRuleRequest_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateSecurityGroupRuleMetadata {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleMetadata";
    securityGroupId: string;
    ruleId: string;
}
export interface DeleteSecurityGroupRequest {
    $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupRequest";
    securityGroupId: string;
}
export interface DeleteSecurityGroupMetadata {
    $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupMetadata";
    securityGroupId: string;
}
export interface ListSecurityGroupOperationsRequest {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsRequest";
    securityGroupId: string;
    pageSize: number;
    pageToken: string;
}
export interface ListSecurityGroupOperationsResponse {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsResponse";
    operations: Operation[];
    nextPageToken: string;
}
export interface MoveSecurityGroupRequest {
    $type: "yandex.cloud.vpc.v1.MoveSecurityGroupRequest";
    securityGroupId: string;
    destinationFolderId: string;
}
export interface MoveSecurityGroupMetadata {
    $type: "yandex.cloud.vpc.v1.MoveSecurityGroupMetadata";
    securityGroupId: string;
}
export declare const GetSecurityGroupRequest: {
    $type: "yandex.cloud.vpc.v1.GetSecurityGroupRequest";
    encode(message: GetSecurityGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSecurityGroupRequest;
    fromJSON(object: any): GetSecurityGroupRequest;
    toJSON(message: GetSecurityGroupRequest): unknown;
    fromPartial<I extends {
        securityGroupId?: string | undefined;
    } & {
        securityGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityGroupId">, never>>(object: I): GetSecurityGroupRequest;
};
export declare const ListSecurityGroupsRequest: {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupsRequest";
    encode(message: ListSecurityGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecurityGroupsRequest;
    fromJSON(object: any): ListSecurityGroupsRequest;
    toJSON(message: ListSecurityGroupsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListSecurityGroupsRequest;
};
export declare const ListSecurityGroupsResponse: {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupsResponse";
    encode(message: ListSecurityGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecurityGroupsResponse;
    fromJSON(object: any): ListSecurityGroupsResponse;
    toJSON(message: ListSecurityGroupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        securityGroups?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/vpc/v1/security_group").SecurityGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            rules?: {
                description?: string | undefined;
                id?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                ports?: {
                    fromPort?: number | undefined;
                    toPort?: number | undefined;
                } | undefined;
                direction?: SecurityGroupRule_Direction | undefined;
                protocolName?: string | undefined;
                protocolNumber?: number | undefined;
                cidrBlocks?: {
                    v4CidrBlocks?: string[] | undefined;
                    v6CidrBlocks?: string[] | undefined;
                } | undefined;
                securityGroupId?: string | undefined;
                predefinedTarget?: string | undefined;
            }[] | undefined;
            defaultForNetwork?: boolean | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        securityGroups?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/vpc/v1/security_group").SecurityGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            rules?: {
                description?: string | undefined;
                id?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                ports?: {
                    fromPort?: number | undefined;
                    toPort?: number | undefined;
                } | undefined;
                direction?: SecurityGroupRule_Direction | undefined;
                protocolName?: string | undefined;
                protocolNumber?: number | undefined;
                cidrBlocks?: {
                    v4CidrBlocks?: string[] | undefined;
                    v6CidrBlocks?: string[] | undefined;
                } | undefined;
                securityGroupId?: string | undefined;
                predefinedTarget?: string | undefined;
            }[] | undefined;
            defaultForNetwork?: boolean | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/vpc/v1/security_group").SecurityGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            rules?: {
                description?: string | undefined;
                id?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                ports?: {
                    fromPort?: number | undefined;
                    toPort?: number | undefined;
                } | undefined;
                direction?: SecurityGroupRule_Direction | undefined;
                protocolName?: string | undefined;
                protocolNumber?: number | undefined;
                cidrBlocks?: {
                    v4CidrBlocks?: string[] | undefined;
                    v6CidrBlocks?: string[] | undefined;
                } | undefined;
                securityGroupId?: string | undefined;
                predefinedTarget?: string | undefined;
            }[] | undefined;
            defaultForNetwork?: boolean | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/vpc/v1/security_group").SecurityGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["securityGroups"][number]["labels"], string | number>, never>) | undefined;
            networkId?: string | undefined;
            rules?: ({
                description?: string | undefined;
                id?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                ports?: {
                    fromPort?: number | undefined;
                    toPort?: number | undefined;
                } | undefined;
                direction?: SecurityGroupRule_Direction | undefined;
                protocolName?: string | undefined;
                protocolNumber?: number | undefined;
                cidrBlocks?: {
                    v4CidrBlocks?: string[] | undefined;
                    v6CidrBlocks?: string[] | undefined;
                } | undefined;
                securityGroupId?: string | undefined;
                predefinedTarget?: string | undefined;
            }[] & ({
                description?: string | undefined;
                id?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                ports?: {
                    fromPort?: number | undefined;
                    toPort?: number | undefined;
                } | undefined;
                direction?: SecurityGroupRule_Direction | undefined;
                protocolName?: string | undefined;
                protocolNumber?: number | undefined;
                cidrBlocks?: {
                    v4CidrBlocks?: string[] | undefined;
                    v6CidrBlocks?: string[] | undefined;
                } | undefined;
                securityGroupId?: string | undefined;
                predefinedTarget?: string | undefined;
            } & {
                description?: string | undefined;
                id?: string | undefined;
                labels?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["securityGroups"][number]["rules"][number]["labels"], string | number>, never>) | undefined;
                ports?: ({
                    fromPort?: number | undefined;
                    toPort?: number | undefined;
                } & {
                    fromPort?: number | undefined;
                    toPort?: number | undefined;
                } & Record<Exclude<keyof I["securityGroups"][number]["rules"][number]["ports"], "$type" | "fromPort" | "toPort">, never>) | undefined;
                direction?: SecurityGroupRule_Direction | undefined;
                protocolName?: string | undefined;
                protocolNumber?: number | undefined;
                cidrBlocks?: ({
                    v4CidrBlocks?: string[] | undefined;
                    v6CidrBlocks?: string[] | undefined;
                } & {
                    v4CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"][number]["rules"][number]["cidrBlocks"]["v4CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
                    v6CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"][number]["rules"][number]["cidrBlocks"]["v6CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["securityGroups"][number]["rules"][number]["cidrBlocks"], "$type" | "v4CidrBlocks" | "v6CidrBlocks">, never>) | undefined;
                securityGroupId?: string | undefined;
                predefinedTarget?: string | undefined;
            } & Record<Exclude<keyof I["securityGroups"][number]["rules"][number], "$type" | "description" | "id" | "labels" | "ports" | "direction" | "protocolName" | "protocolNumber" | "cidrBlocks" | "securityGroupId" | "predefinedTarget">, never>)[] & Record<Exclude<keyof I["securityGroups"][number]["rules"], "$type" | keyof {
                description?: string | undefined;
                id?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                ports?: {
                    fromPort?: number | undefined;
                    toPort?: number | undefined;
                } | undefined;
                direction?: SecurityGroupRule_Direction | undefined;
                protocolName?: string | undefined;
                protocolNumber?: number | undefined;
                cidrBlocks?: {
                    v4CidrBlocks?: string[] | undefined;
                    v6CidrBlocks?: string[] | undefined;
                } | undefined;
                securityGroupId?: string | undefined;
                predefinedTarget?: string | undefined;
            }[]>, never>) | undefined;
            defaultForNetwork?: boolean | undefined;
        } & Record<Exclude<keyof I["securityGroups"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "networkId" | "rules" | "defaultForNetwork">, never>)[] & Record<Exclude<keyof I["securityGroups"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/vpc/v1/security_group").SecurityGroup_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            rules?: {
                description?: string | undefined;
                id?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                ports?: {
                    fromPort?: number | undefined;
                    toPort?: number | undefined;
                } | undefined;
                direction?: SecurityGroupRule_Direction | undefined;
                protocolName?: string | undefined;
                protocolNumber?: number | undefined;
                cidrBlocks?: {
                    v4CidrBlocks?: string[] | undefined;
                    v6CidrBlocks?: string[] | undefined;
                } | undefined;
                securityGroupId?: string | undefined;
                predefinedTarget?: string | undefined;
            }[] | undefined;
            defaultForNetwork?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "securityGroups">, never>>(object: I): ListSecurityGroupsResponse;
};
export declare const CreateSecurityGroupRequest: {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest";
    encode(message: CreateSecurityGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecurityGroupRequest;
    fromJSON(object: any): CreateSecurityGroupRequest;
    toJSON(message: CreateSecurityGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        networkId?: string | undefined;
        ruleSpecs?: {
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        }[] | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        networkId?: string | undefined;
        ruleSpecs?: ({
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        }[] & ({
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        } & {
            description?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["ruleSpecs"][number]["labels"], string | number>, never>) | undefined;
            ports?: ({
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } & {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } & Record<Exclude<keyof I["ruleSpecs"][number]["ports"], "$type" | "fromPort" | "toPort">, never>) | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: ({
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } & {
                v4CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["ruleSpecs"][number]["cidrBlocks"]["v4CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
                v6CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["ruleSpecs"][number]["cidrBlocks"]["v6CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["ruleSpecs"][number]["cidrBlocks"], "$type" | "v4CidrBlocks" | "v6CidrBlocks">, never>) | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        } & Record<Exclude<keyof I["ruleSpecs"][number], "$type" | "description" | "labels" | "ports" | "direction" | "protocolName" | "protocolNumber" | "cidrBlocks" | "securityGroupId" | "predefinedTarget">, never>)[] & Record<Exclude<keyof I["ruleSpecs"], "$type" | keyof {
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "ruleSpecs">, never>>(object: I): CreateSecurityGroupRequest;
};
export declare const CreateSecurityGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry";
    encode(message: CreateSecurityGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecurityGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateSecurityGroupRequest_LabelsEntry;
    toJSON(message: CreateSecurityGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateSecurityGroupRequest_LabelsEntry;
};
export declare const SecurityGroupRuleSpec: {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec";
    encode(message: SecurityGroupRuleSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SecurityGroupRuleSpec;
    fromJSON(object: any): SecurityGroupRuleSpec;
    toJSON(message: SecurityGroupRuleSpec): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        ports?: {
            fromPort?: number | undefined;
            toPort?: number | undefined;
        } | undefined;
        direction?: SecurityGroupRule_Direction | undefined;
        protocolName?: string | undefined;
        protocolNumber?: number | undefined;
        cidrBlocks?: {
            v4CidrBlocks?: string[] | undefined;
            v6CidrBlocks?: string[] | undefined;
        } | undefined;
        securityGroupId?: string | undefined;
        predefinedTarget?: string | undefined;
    } & {
        description?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        ports?: ({
            fromPort?: number | undefined;
            toPort?: number | undefined;
        } & {
            fromPort?: number | undefined;
            toPort?: number | undefined;
        } & Record<Exclude<keyof I["ports"], "$type" | "fromPort" | "toPort">, never>) | undefined;
        direction?: SecurityGroupRule_Direction | undefined;
        protocolName?: string | undefined;
        protocolNumber?: number | undefined;
        cidrBlocks?: ({
            v4CidrBlocks?: string[] | undefined;
            v6CidrBlocks?: string[] | undefined;
        } & {
            v4CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["cidrBlocks"]["v4CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
            v6CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["cidrBlocks"]["v6CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["cidrBlocks"], "$type" | "v4CidrBlocks" | "v6CidrBlocks">, never>) | undefined;
        securityGroupId?: string | undefined;
        predefinedTarget?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "labels" | "ports" | "direction" | "protocolName" | "protocolNumber" | "cidrBlocks" | "securityGroupId" | "predefinedTarget">, never>>(object: I): SecurityGroupRuleSpec;
};
export declare const SecurityGroupRuleSpec_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry";
    encode(message: SecurityGroupRuleSpec_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SecurityGroupRuleSpec_LabelsEntry;
    fromJSON(object: any): SecurityGroupRuleSpec_LabelsEntry;
    toJSON(message: SecurityGroupRuleSpec_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): SecurityGroupRuleSpec_LabelsEntry;
};
export declare const CreateSecurityGroupMetadata: {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupMetadata";
    encode(message: CreateSecurityGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecurityGroupMetadata;
    fromJSON(object: any): CreateSecurityGroupMetadata;
    toJSON(message: CreateSecurityGroupMetadata): unknown;
    fromPartial<I extends {
        securityGroupId?: string | undefined;
    } & {
        securityGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityGroupId">, never>>(object: I): CreateSecurityGroupMetadata;
};
export declare const UpdateSecurityGroupRequest: {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest";
    encode(message: UpdateSecurityGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRequest;
    fromJSON(object: any): UpdateSecurityGroupRequest;
    toJSON(message: UpdateSecurityGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        securityGroupId?: string | undefined;
        ruleSpecs?: {
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        }[] | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        securityGroupId?: string | undefined;
        ruleSpecs?: ({
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        }[] & ({
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        } & {
            description?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["ruleSpecs"][number]["labels"], string | number>, never>) | undefined;
            ports?: ({
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } & {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } & Record<Exclude<keyof I["ruleSpecs"][number]["ports"], "$type" | "fromPort" | "toPort">, never>) | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: ({
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } & {
                v4CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["ruleSpecs"][number]["cidrBlocks"]["v4CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
                v6CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["ruleSpecs"][number]["cidrBlocks"]["v6CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["ruleSpecs"][number]["cidrBlocks"], "$type" | "v4CidrBlocks" | "v6CidrBlocks">, never>) | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        } & Record<Exclude<keyof I["ruleSpecs"][number], "$type" | "description" | "labels" | "ports" | "direction" | "protocolName" | "protocolNumber" | "cidrBlocks" | "securityGroupId" | "predefinedTarget">, never>)[] & Record<Exclude<keyof I["ruleSpecs"], "$type" | keyof {
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "securityGroupId" | "ruleSpecs">, never>>(object: I): UpdateSecurityGroupRequest;
};
export declare const UpdateSecurityGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry";
    encode(message: UpdateSecurityGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateSecurityGroupRequest_LabelsEntry;
    toJSON(message: UpdateSecurityGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateSecurityGroupRequest_LabelsEntry;
};
export declare const UpdateSecurityGroupMetadata: {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupMetadata";
    encode(message: UpdateSecurityGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupMetadata;
    fromJSON(object: any): UpdateSecurityGroupMetadata;
    toJSON(message: UpdateSecurityGroupMetadata): unknown;
    fromPartial<I extends {
        securityGroupId?: string | undefined;
        addedRuleIds?: string[] | undefined;
    } & {
        securityGroupId?: string | undefined;
        addedRuleIds?: (string[] & string[] & Record<Exclude<keyof I["addedRuleIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityGroupId" | "addedRuleIds">, never>>(object: I): UpdateSecurityGroupMetadata;
};
export declare const UpdateSecurityGroupRulesRequest: {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRulesRequest";
    encode(message: UpdateSecurityGroupRulesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRulesRequest;
    fromJSON(object: any): UpdateSecurityGroupRulesRequest;
    toJSON(message: UpdateSecurityGroupRulesRequest): unknown;
    fromPartial<I extends {
        securityGroupId?: string | undefined;
        deletionRuleIds?: string[] | undefined;
        additionRuleSpecs?: {
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        }[] | undefined;
    } & {
        securityGroupId?: string | undefined;
        deletionRuleIds?: (string[] & string[] & Record<Exclude<keyof I["deletionRuleIds"], "$type" | keyof string[]>, never>) | undefined;
        additionRuleSpecs?: ({
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        }[] & ({
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        } & {
            description?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["additionRuleSpecs"][number]["labels"], string | number>, never>) | undefined;
            ports?: ({
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } & {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } & Record<Exclude<keyof I["additionRuleSpecs"][number]["ports"], "$type" | "fromPort" | "toPort">, never>) | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: ({
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } & {
                v4CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["additionRuleSpecs"][number]["cidrBlocks"]["v4CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
                v6CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["additionRuleSpecs"][number]["cidrBlocks"]["v6CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["additionRuleSpecs"][number]["cidrBlocks"], "$type" | "v4CidrBlocks" | "v6CidrBlocks">, never>) | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        } & Record<Exclude<keyof I["additionRuleSpecs"][number], "$type" | "description" | "labels" | "ports" | "direction" | "protocolName" | "protocolNumber" | "cidrBlocks" | "securityGroupId" | "predefinedTarget">, never>)[] & Record<Exclude<keyof I["additionRuleSpecs"], "$type" | keyof {
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            ports?: {
                fromPort?: number | undefined;
                toPort?: number | undefined;
            } | undefined;
            direction?: SecurityGroupRule_Direction | undefined;
            protocolName?: string | undefined;
            protocolNumber?: number | undefined;
            cidrBlocks?: {
                v4CidrBlocks?: string[] | undefined;
                v6CidrBlocks?: string[] | undefined;
            } | undefined;
            securityGroupId?: string | undefined;
            predefinedTarget?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityGroupId" | "deletionRuleIds" | "additionRuleSpecs">, never>>(object: I): UpdateSecurityGroupRulesRequest;
};
export declare const UpdateSecurityGroupRuleRequest: {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest";
    encode(message: UpdateSecurityGroupRuleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRuleRequest;
    fromJSON(object: any): UpdateSecurityGroupRuleRequest;
    toJSON(message: UpdateSecurityGroupRuleRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        securityGroupId?: string | undefined;
        ruleId?: string | undefined;
    } & {
        description?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        securityGroupId?: string | undefined;
        ruleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "labels" | "updateMask" | "securityGroupId" | "ruleId">, never>>(object: I): UpdateSecurityGroupRuleRequest;
};
export declare const UpdateSecurityGroupRuleRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry";
    encode(message: UpdateSecurityGroupRuleRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRuleRequest_LabelsEntry;
    fromJSON(object: any): UpdateSecurityGroupRuleRequest_LabelsEntry;
    toJSON(message: UpdateSecurityGroupRuleRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateSecurityGroupRuleRequest_LabelsEntry;
};
export declare const UpdateSecurityGroupRuleMetadata: {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleMetadata";
    encode(message: UpdateSecurityGroupRuleMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecurityGroupRuleMetadata;
    fromJSON(object: any): UpdateSecurityGroupRuleMetadata;
    toJSON(message: UpdateSecurityGroupRuleMetadata): unknown;
    fromPartial<I extends {
        securityGroupId?: string | undefined;
        ruleId?: string | undefined;
    } & {
        securityGroupId?: string | undefined;
        ruleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityGroupId" | "ruleId">, never>>(object: I): UpdateSecurityGroupRuleMetadata;
};
export declare const DeleteSecurityGroupRequest: {
    $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupRequest";
    encode(message: DeleteSecurityGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSecurityGroupRequest;
    fromJSON(object: any): DeleteSecurityGroupRequest;
    toJSON(message: DeleteSecurityGroupRequest): unknown;
    fromPartial<I extends {
        securityGroupId?: string | undefined;
    } & {
        securityGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityGroupId">, never>>(object: I): DeleteSecurityGroupRequest;
};
export declare const DeleteSecurityGroupMetadata: {
    $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupMetadata";
    encode(message: DeleteSecurityGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSecurityGroupMetadata;
    fromJSON(object: any): DeleteSecurityGroupMetadata;
    toJSON(message: DeleteSecurityGroupMetadata): unknown;
    fromPartial<I extends {
        securityGroupId?: string | undefined;
    } & {
        securityGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityGroupId">, never>>(object: I): DeleteSecurityGroupMetadata;
};
export declare const ListSecurityGroupOperationsRequest: {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsRequest";
    encode(message: ListSecurityGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecurityGroupOperationsRequest;
    fromJSON(object: any): ListSecurityGroupOperationsRequest;
    toJSON(message: ListSecurityGroupOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        securityGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        securityGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "securityGroupId">, never>>(object: I): ListSecurityGroupOperationsRequest;
};
export declare const ListSecurityGroupOperationsResponse: {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsResponse";
    encode(message: ListSecurityGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecurityGroupOperationsResponse;
    fromJSON(object: any): ListSecurityGroupOperationsResponse;
    toJSON(message: ListSecurityGroupOperationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        operations?: {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        operations?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["metadata"], "$type" | "typeUrl" | "value">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["operations"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["operations"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["operations"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            response?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["response"], "$type" | "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["operations"][number], "$type" | "description" | "id" | "createdBy" | "done" | "createdAt" | "modifiedAt" | "metadata" | "error" | "response">, never>)[] & Record<Exclude<keyof I["operations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListSecurityGroupOperationsResponse;
};
export declare const MoveSecurityGroupRequest: {
    $type: "yandex.cloud.vpc.v1.MoveSecurityGroupRequest";
    encode(message: MoveSecurityGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveSecurityGroupRequest;
    fromJSON(object: any): MoveSecurityGroupRequest;
    toJSON(message: MoveSecurityGroupRequest): unknown;
    fromPartial<I extends {
        destinationFolderId?: string | undefined;
        securityGroupId?: string | undefined;
    } & {
        destinationFolderId?: string | undefined;
        securityGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "destinationFolderId" | "securityGroupId">, never>>(object: I): MoveSecurityGroupRequest;
};
export declare const MoveSecurityGroupMetadata: {
    $type: "yandex.cloud.vpc.v1.MoveSecurityGroupMetadata";
    encode(message: MoveSecurityGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveSecurityGroupMetadata;
    fromJSON(object: any): MoveSecurityGroupMetadata;
    toJSON(message: MoveSecurityGroupMetadata): unknown;
    fromPartial<I extends {
        securityGroupId?: string | undefined;
    } & {
        securityGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityGroupId">, never>>(object: I): MoveSecurityGroupMetadata;
};
export declare const SecurityGroupServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSecurityGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSecurityGroupRequest;
        readonly responseSerialize: (value: SecurityGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SecurityGroup;
    };
    readonly list: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSecurityGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSecurityGroupsRequest;
        readonly responseSerialize: (value: ListSecurityGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSecurityGroupsResponse;
    };
    readonly create: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSecurityGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSecurityGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSecurityGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSecurityGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly updateRules: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRules";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSecurityGroupRulesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSecurityGroupRulesRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** update rule description or labels */
    readonly updateRule: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRule";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSecurityGroupRuleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSecurityGroupRuleRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSecurityGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSecurityGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly move: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveSecurityGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveSecurityGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly listOperations: {
        readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSecurityGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSecurityGroupOperationsRequest;
        readonly responseSerialize: (value: ListSecurityGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSecurityGroupOperationsResponse;
    };
};
export interface SecurityGroupServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetSecurityGroupRequest, SecurityGroup>;
    list: handleUnaryCall<ListSecurityGroupsRequest, ListSecurityGroupsResponse>;
    create: handleUnaryCall<CreateSecurityGroupRequest, Operation>;
    update: handleUnaryCall<UpdateSecurityGroupRequest, Operation>;
    updateRules: handleUnaryCall<UpdateSecurityGroupRulesRequest, Operation>;
    /** update rule description or labels */
    updateRule: handleUnaryCall<UpdateSecurityGroupRuleRequest, Operation>;
    delete: handleUnaryCall<DeleteSecurityGroupRequest, Operation>;
    move: handleUnaryCall<MoveSecurityGroupRequest, Operation>;
    listOperations: handleUnaryCall<ListSecurityGroupOperationsRequest, ListSecurityGroupOperationsResponse>;
}
export interface SecurityGroupServiceClient extends Client {
    get(request: GetSecurityGroupRequest, callback: (error: ServiceError | null, response: SecurityGroup) => void): ClientUnaryCall;
    get(request: GetSecurityGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SecurityGroup) => void): ClientUnaryCall;
    get(request: GetSecurityGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SecurityGroup) => void): ClientUnaryCall;
    list(request: ListSecurityGroupsRequest, callback: (error: ServiceError | null, response: ListSecurityGroupsResponse) => void): ClientUnaryCall;
    list(request: ListSecurityGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSecurityGroupsResponse) => void): ClientUnaryCall;
    list(request: ListSecurityGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSecurityGroupsResponse) => void): ClientUnaryCall;
    create(request: CreateSecurityGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSecurityGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSecurityGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSecurityGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSecurityGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSecurityGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRules(request: UpdateSecurityGroupRulesRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRules(request: UpdateSecurityGroupRulesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRules(request: UpdateSecurityGroupRulesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** update rule description or labels */
    updateRule(request: UpdateSecurityGroupRuleRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRule(request: UpdateSecurityGroupRuleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRule(request: UpdateSecurityGroupRuleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSecurityGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSecurityGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSecurityGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveSecurityGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveSecurityGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveSecurityGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    listOperations(request: ListSecurityGroupOperationsRequest, callback: (error: ServiceError | null, response: ListSecurityGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSecurityGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSecurityGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSecurityGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSecurityGroupOperationsResponse) => void): ClientUnaryCall;
}
export declare const SecurityGroupServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): SecurityGroupServiceClient;
    service: typeof SecurityGroupServiceService;
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
