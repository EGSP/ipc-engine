/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { DhcpOptions, IpVersion, Subnet } from "../../../../yandex/cloud/vpc/v1/subnet";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { Reference } from "../../../../yandex/cloud/reference/reference";
export declare const protobufPackage = "yandex.cloud.vpc.v1";
export interface GetSubnetRequest {
    $type: "yandex.cloud.vpc.v1.GetSubnetRequest";
    /**
     * ID of the Subnet resource to return.
     * To get the subnet ID use a [SubnetService.List] request.
     */
    subnetId: string;
}
export interface ListSubnetsRequest {
    $type: "yandex.cloud.vpc.v1.ListSubnetsRequest";
    /**
     * ID of the folder to list subnets in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListSubnetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSubnetsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Subnet.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}
export interface ListSubnetsResponse {
    $type: "yandex.cloud.vpc.v1.ListSubnetsResponse";
    /** List of Subnet resources. */
    subnets: Subnet[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSubnetsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListSubnetsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateSubnetRequest {
    $type: "yandex.cloud.vpc.v1.CreateSubnetRequest";
    /**
     * ID of the folder to create a subnet in.
     * To get folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the subnet.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the subnet. */
    description: string;
    /** Resource labels, `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
    /** ID of the network to create subnet in. */
    networkId: string;
    /**
     * ID of the availability zone where the subnet resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * CIDR block.
     * The range of internal addresses that are defined for this subnet.
     * This field can be set only at Subnet resource creation time and cannot be changed.
     * For example, 10.0.0.0/22 or 192.168.0.0/24.
     * Minimum subnet size is /28, maximum subnet size is /16.
     */
    v4CidrBlocks: string[];
    /** ID of route table the subnet is linked to. */
    routeTableId: string;
    dhcpOptions?: DhcpOptions;
}
export interface CreateSubnetRequest_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateSubnetMetadata {
    $type: "yandex.cloud.vpc.v1.CreateSubnetMetadata";
    /** ID of the subnet that is being created. */
    subnetId: string;
}
export interface UpdateSubnetRequest {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest";
    /** ID of the Subnet resource to update. */
    subnetId: string;
    /** Field mask that specifies which fields of the Subnet resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the subnet.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the subnet. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
    /** ID of route table the subnet is linked to. */
    routeTableId: string;
    dhcpOptions?: DhcpOptions;
}
export interface UpdateSubnetRequest_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateSubnetMetadata {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetMetadata";
    /** ID of the Subnet resource that is being updated. */
    subnetId: string;
}
export interface AddSubnetCidrBlocksRequest {
    $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksRequest";
    /** ID of the Subnet resource that is being updated. */
    subnetId: string;
    /**
     * CIDR block.
     * The range of internal addresses that should be added to this subnet.
     * For example, 10.0.0.0/22 or 192.168.0.0/24.
     * Minimum subnet size is /28, maximum subnet size is /16.
     */
    v4CidrBlocks: string[];
}
export interface AddSubnetCidrBlocksMetadata {
    $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksMetadata";
    /** ID of the Subnet resource that is being updated. */
    subnetId: string;
}
export interface RemoveSubnetCidrBlocksRequest {
    $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksRequest";
    /** ID of the Subnet resource that is being updated. */
    subnetId: string;
    /**
     * CIDR block.
     * The range of internal addresses that are removed from this subnet.
     */
    v4CidrBlocks: string[];
}
export interface RemoveSubnetCidrBlocksMetadata {
    $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksMetadata";
    /** ID of the Subnet resource that is being updated. */
    subnetId: string;
}
export interface DeleteSubnetRequest {
    $type: "yandex.cloud.vpc.v1.DeleteSubnetRequest";
    /**
     * ID of the subnet to delete.
     * To get the subnet ID use a [SubnetService.List] request.
     */
    subnetId: string;
}
export interface DeleteSubnetMetadata {
    $type: "yandex.cloud.vpc.v1.DeleteSubnetMetadata";
    /** ID of the Subnet resource that is being deleted. */
    subnetId: string;
}
export interface ListSubnetOperationsRequest {
    $type: "yandex.cloud.vpc.v1.ListSubnetOperationsRequest";
    /** ID of the Subnet resource to list operations for. */
    subnetId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListSubnetOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSubnetOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSubnetOperationsResponse {
    $type: "yandex.cloud.vpc.v1.ListSubnetOperationsResponse";
    /** List of operations for the specified Subnet resource. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSubnetOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListSubnetOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface MoveSubnetRequest {
    $type: "yandex.cloud.vpc.v1.MoveSubnetRequest";
    /** ID of the Subnet resource to move. */
    subnetId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveSubnetMetadata {
    $type: "yandex.cloud.vpc.v1.MoveSubnetMetadata";
    /** ID of the Subnet resource that is being moved. */
    subnetId: string;
}
export interface ListUsedAddressesRequest {
    $type: "yandex.cloud.vpc.v1.ListUsedAddressesRequest";
    subnetId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}
export interface ListUsedAddressesResponse {
    $type: "yandex.cloud.vpc.v1.ListUsedAddressesResponse";
    addresses: UsedAddress[];
    nextPageToken: string;
}
export interface UsedAddress {
    $type: "yandex.cloud.vpc.v1.UsedAddress";
    address: string;
    ipVersion: IpVersion;
    references: Reference[];
}
export declare const GetSubnetRequest: {
    $type: "yandex.cloud.vpc.v1.GetSubnetRequest";
    encode(message: GetSubnetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSubnetRequest;
    fromJSON(object: any): GetSubnetRequest;
    toJSON(message: GetSubnetRequest): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
    } & {
        subnetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId">, never>>(object: I): GetSubnetRequest;
};
export declare const ListSubnetsRequest: {
    $type: "yandex.cloud.vpc.v1.ListSubnetsRequest";
    encode(message: ListSubnetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSubnetsRequest;
    fromJSON(object: any): ListSubnetsRequest;
    toJSON(message: ListSubnetsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListSubnetsRequest;
};
export declare const ListSubnetsResponse: {
    $type: "yandex.cloud.vpc.v1.ListSubnetsResponse";
    encode(message: ListSubnetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSubnetsResponse;
    fromJSON(object: any): ListSubnetsResponse;
    toJSON(message: ListSubnetsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        subnets?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            zoneId?: string | undefined;
            v4CidrBlocks?: string[] | undefined;
            v6CidrBlocks?: string[] | undefined;
            routeTableId?: string | undefined;
            dhcpOptions?: {
                domainName?: string | undefined;
                domainNameServers?: string[] | undefined;
                ntpServers?: string[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        subnets?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            zoneId?: string | undefined;
            v4CidrBlocks?: string[] | undefined;
            v6CidrBlocks?: string[] | undefined;
            routeTableId?: string | undefined;
            dhcpOptions?: {
                domainName?: string | undefined;
                domainNameServers?: string[] | undefined;
                ntpServers?: string[] | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            zoneId?: string | undefined;
            v4CidrBlocks?: string[] | undefined;
            v6CidrBlocks?: string[] | undefined;
            routeTableId?: string | undefined;
            dhcpOptions?: {
                domainName?: string | undefined;
                domainNameServers?: string[] | undefined;
                ntpServers?: string[] | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["subnets"][number]["labels"], string | number>, never>) | undefined;
            networkId?: string | undefined;
            zoneId?: string | undefined;
            v4CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["subnets"][number]["v4CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
            v6CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["subnets"][number]["v6CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
            routeTableId?: string | undefined;
            dhcpOptions?: ({
                domainName?: string | undefined;
                domainNameServers?: string[] | undefined;
                ntpServers?: string[] | undefined;
            } & {
                domainName?: string | undefined;
                domainNameServers?: (string[] & string[] & Record<Exclude<keyof I["subnets"][number]["dhcpOptions"]["domainNameServers"], "$type" | keyof string[]>, never>) | undefined;
                ntpServers?: (string[] & string[] & Record<Exclude<keyof I["subnets"][number]["dhcpOptions"]["ntpServers"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["subnets"][number]["dhcpOptions"], "$type" | "domainName" | "domainNameServers" | "ntpServers">, never>) | undefined;
        } & Record<Exclude<keyof I["subnets"][number], "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "networkId" | "zoneId" | "v4CidrBlocks" | "v6CidrBlocks" | "routeTableId" | "dhcpOptions">, never>)[] & Record<Exclude<keyof I["subnets"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            zoneId?: string | undefined;
            v4CidrBlocks?: string[] | undefined;
            v6CidrBlocks?: string[] | undefined;
            routeTableId?: string | undefined;
            dhcpOptions?: {
                domainName?: string | undefined;
                domainNameServers?: string[] | undefined;
                ntpServers?: string[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "subnets">, never>>(object: I): ListSubnetsResponse;
};
export declare const CreateSubnetRequest: {
    $type: "yandex.cloud.vpc.v1.CreateSubnetRequest";
    encode(message: CreateSubnetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSubnetRequest;
    fromJSON(object: any): CreateSubnetRequest;
    toJSON(message: CreateSubnetRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        networkId?: string | undefined;
        zoneId?: string | undefined;
        v4CidrBlocks?: string[] | undefined;
        routeTableId?: string | undefined;
        dhcpOptions?: {
            domainName?: string | undefined;
            domainNameServers?: string[] | undefined;
            ntpServers?: string[] | undefined;
        } | undefined;
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
        zoneId?: string | undefined;
        v4CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["v4CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
        routeTableId?: string | undefined;
        dhcpOptions?: ({
            domainName?: string | undefined;
            domainNameServers?: string[] | undefined;
            ntpServers?: string[] | undefined;
        } & {
            domainName?: string | undefined;
            domainNameServers?: (string[] & string[] & Record<Exclude<keyof I["dhcpOptions"]["domainNameServers"], "$type" | keyof string[]>, never>) | undefined;
            ntpServers?: (string[] & string[] & Record<Exclude<keyof I["dhcpOptions"]["ntpServers"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["dhcpOptions"], "$type" | "domainName" | "domainNameServers" | "ntpServers">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "zoneId" | "v4CidrBlocks" | "routeTableId" | "dhcpOptions">, never>>(object: I): CreateSubnetRequest;
};
export declare const CreateSubnetRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry";
    encode(message: CreateSubnetRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSubnetRequest_LabelsEntry;
    fromJSON(object: any): CreateSubnetRequest_LabelsEntry;
    toJSON(message: CreateSubnetRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateSubnetRequest_LabelsEntry;
};
export declare const CreateSubnetMetadata: {
    $type: "yandex.cloud.vpc.v1.CreateSubnetMetadata";
    encode(message: CreateSubnetMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSubnetMetadata;
    fromJSON(object: any): CreateSubnetMetadata;
    toJSON(message: CreateSubnetMetadata): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
    } & {
        subnetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId">, never>>(object: I): CreateSubnetMetadata;
};
export declare const UpdateSubnetRequest: {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest";
    encode(message: UpdateSubnetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSubnetRequest;
    fromJSON(object: any): UpdateSubnetRequest;
    toJSON(message: UpdateSubnetRequest): unknown;
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
        subnetId?: string | undefined;
        routeTableId?: string | undefined;
        dhcpOptions?: {
            domainName?: string | undefined;
            domainNameServers?: string[] | undefined;
            ntpServers?: string[] | undefined;
        } | undefined;
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
        subnetId?: string | undefined;
        routeTableId?: string | undefined;
        dhcpOptions?: ({
            domainName?: string | undefined;
            domainNameServers?: string[] | undefined;
            ntpServers?: string[] | undefined;
        } & {
            domainName?: string | undefined;
            domainNameServers?: (string[] & string[] & Record<Exclude<keyof I["dhcpOptions"]["domainNameServers"], "$type" | keyof string[]>, never>) | undefined;
            ntpServers?: (string[] & string[] & Record<Exclude<keyof I["dhcpOptions"]["ntpServers"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["dhcpOptions"], "$type" | "domainName" | "domainNameServers" | "ntpServers">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "subnetId" | "routeTableId" | "dhcpOptions">, never>>(object: I): UpdateSubnetRequest;
};
export declare const UpdateSubnetRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry";
    encode(message: UpdateSubnetRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSubnetRequest_LabelsEntry;
    fromJSON(object: any): UpdateSubnetRequest_LabelsEntry;
    toJSON(message: UpdateSubnetRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateSubnetRequest_LabelsEntry;
};
export declare const UpdateSubnetMetadata: {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetMetadata";
    encode(message: UpdateSubnetMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSubnetMetadata;
    fromJSON(object: any): UpdateSubnetMetadata;
    toJSON(message: UpdateSubnetMetadata): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
    } & {
        subnetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId">, never>>(object: I): UpdateSubnetMetadata;
};
export declare const AddSubnetCidrBlocksRequest: {
    $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksRequest";
    encode(message: AddSubnetCidrBlocksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddSubnetCidrBlocksRequest;
    fromJSON(object: any): AddSubnetCidrBlocksRequest;
    toJSON(message: AddSubnetCidrBlocksRequest): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        v4CidrBlocks?: string[] | undefined;
    } & {
        subnetId?: string | undefined;
        v4CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["v4CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "v4CidrBlocks">, never>>(object: I): AddSubnetCidrBlocksRequest;
};
export declare const AddSubnetCidrBlocksMetadata: {
    $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksMetadata";
    encode(message: AddSubnetCidrBlocksMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddSubnetCidrBlocksMetadata;
    fromJSON(object: any): AddSubnetCidrBlocksMetadata;
    toJSON(message: AddSubnetCidrBlocksMetadata): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
    } & {
        subnetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId">, never>>(object: I): AddSubnetCidrBlocksMetadata;
};
export declare const RemoveSubnetCidrBlocksRequest: {
    $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksRequest";
    encode(message: RemoveSubnetCidrBlocksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveSubnetCidrBlocksRequest;
    fromJSON(object: any): RemoveSubnetCidrBlocksRequest;
    toJSON(message: RemoveSubnetCidrBlocksRequest): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        v4CidrBlocks?: string[] | undefined;
    } & {
        subnetId?: string | undefined;
        v4CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["v4CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "v4CidrBlocks">, never>>(object: I): RemoveSubnetCidrBlocksRequest;
};
export declare const RemoveSubnetCidrBlocksMetadata: {
    $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksMetadata";
    encode(message: RemoveSubnetCidrBlocksMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveSubnetCidrBlocksMetadata;
    fromJSON(object: any): RemoveSubnetCidrBlocksMetadata;
    toJSON(message: RemoveSubnetCidrBlocksMetadata): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
    } & {
        subnetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId">, never>>(object: I): RemoveSubnetCidrBlocksMetadata;
};
export declare const DeleteSubnetRequest: {
    $type: "yandex.cloud.vpc.v1.DeleteSubnetRequest";
    encode(message: DeleteSubnetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSubnetRequest;
    fromJSON(object: any): DeleteSubnetRequest;
    toJSON(message: DeleteSubnetRequest): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
    } & {
        subnetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId">, never>>(object: I): DeleteSubnetRequest;
};
export declare const DeleteSubnetMetadata: {
    $type: "yandex.cloud.vpc.v1.DeleteSubnetMetadata";
    encode(message: DeleteSubnetMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSubnetMetadata;
    fromJSON(object: any): DeleteSubnetMetadata;
    toJSON(message: DeleteSubnetMetadata): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
    } & {
        subnetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId">, never>>(object: I): DeleteSubnetMetadata;
};
export declare const ListSubnetOperationsRequest: {
    $type: "yandex.cloud.vpc.v1.ListSubnetOperationsRequest";
    encode(message: ListSubnetOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSubnetOperationsRequest;
    fromJSON(object: any): ListSubnetOperationsRequest;
    toJSON(message: ListSubnetOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        subnetId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        subnetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "subnetId">, never>>(object: I): ListSubnetOperationsRequest;
};
export declare const ListSubnetOperationsResponse: {
    $type: "yandex.cloud.vpc.v1.ListSubnetOperationsResponse";
    encode(message: ListSubnetOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSubnetOperationsResponse;
    fromJSON(object: any): ListSubnetOperationsResponse;
    toJSON(message: ListSubnetOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListSubnetOperationsResponse;
};
export declare const MoveSubnetRequest: {
    $type: "yandex.cloud.vpc.v1.MoveSubnetRequest";
    encode(message: MoveSubnetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveSubnetRequest;
    fromJSON(object: any): MoveSubnetRequest;
    toJSON(message: MoveSubnetRequest): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        destinationFolderId?: string | undefined;
    } & {
        subnetId?: string | undefined;
        destinationFolderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "destinationFolderId">, never>>(object: I): MoveSubnetRequest;
};
export declare const MoveSubnetMetadata: {
    $type: "yandex.cloud.vpc.v1.MoveSubnetMetadata";
    encode(message: MoveSubnetMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveSubnetMetadata;
    fromJSON(object: any): MoveSubnetMetadata;
    toJSON(message: MoveSubnetMetadata): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
    } & {
        subnetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId">, never>>(object: I): MoveSubnetMetadata;
};
export declare const ListUsedAddressesRequest: {
    $type: "yandex.cloud.vpc.v1.ListUsedAddressesRequest";
    encode(message: ListUsedAddressesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUsedAddressesRequest;
    fromJSON(object: any): ListUsedAddressesRequest;
    toJSON(message: ListUsedAddressesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        subnetId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        subnetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "subnetId">, never>>(object: I): ListUsedAddressesRequest;
};
export declare const ListUsedAddressesResponse: {
    $type: "yandex.cloud.vpc.v1.ListUsedAddressesResponse";
    encode(message: ListUsedAddressesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUsedAddressesResponse;
    fromJSON(object: any): ListUsedAddressesResponse;
    toJSON(message: ListUsedAddressesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        addresses?: {
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            references?: {
                type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
                referrer?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        addresses?: ({
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            references?: {
                type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
                referrer?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            references?: {
                type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
                referrer?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            references?: ({
                type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
                referrer?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            }[] & ({
                type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
                referrer?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } & {
                type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
                referrer?: ({
                    id?: string | undefined;
                    type?: string | undefined;
                } & {
                    id?: string | undefined;
                    type?: string | undefined;
                } & Record<Exclude<keyof I["addresses"][number]["references"][number]["referrer"], "$type" | "id" | "type">, never>) | undefined;
            } & Record<Exclude<keyof I["addresses"][number]["references"][number], "$type" | "type" | "referrer">, never>)[] & Record<Exclude<keyof I["addresses"][number]["references"], "$type" | keyof {
                type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
                referrer?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["addresses"][number], "$type" | "address" | "ipVersion" | "references">, never>)[] & Record<Exclude<keyof I["addresses"], "$type" | keyof {
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            references?: {
                type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
                referrer?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "addresses">, never>>(object: I): ListUsedAddressesResponse;
};
export declare const UsedAddress: {
    $type: "yandex.cloud.vpc.v1.UsedAddress";
    encode(message: UsedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UsedAddress;
    fromJSON(object: any): UsedAddress;
    toJSON(message: UsedAddress): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        ipVersion?: IpVersion | undefined;
        references?: {
            type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
            referrer?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        address?: string | undefined;
        ipVersion?: IpVersion | undefined;
        references?: ({
            type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
            referrer?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        }[] & ({
            type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
            referrer?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        } & {
            type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
            referrer?: ({
                id?: string | undefined;
                type?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
            } & Record<Exclude<keyof I["references"][number]["referrer"], "$type" | "id" | "type">, never>) | undefined;
        } & Record<Exclude<keyof I["references"][number], "$type" | "type" | "referrer">, never>)[] & Record<Exclude<keyof I["references"], "$type" | keyof {
            type?: import("../../../../yandex/cloud/reference/reference").Reference_Type | undefined;
            referrer?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "address" | "ipVersion" | "references">, never>>(object: I): UsedAddress;
};
/** A set of methods for managing Subnet resources. */
export declare const SubnetServiceService: {
    /**
     * Returns the specified Subnet resource.
     *
     * To get the list of available Subnet resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.vpc.v1.SubnetService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSubnetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSubnetRequest;
        readonly responseSerialize: (value: Subnet) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Subnet;
    };
    /** Retrieves the list of Subnet resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.vpc.v1.SubnetService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSubnetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSubnetsRequest;
        readonly responseSerialize: (value: ListSubnetsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSubnetsResponse;
    };
    /**
     * Creates a subnet in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly create: {
        readonly path: "/yandex.cloud.vpc.v1.SubnetService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSubnetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSubnetRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly update: {
        readonly path: "/yandex.cloud.vpc.v1.SubnetService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSubnetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSubnetRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Adds CIDR blocks to the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly addCidrBlocks: {
        readonly path: "/yandex.cloud.vpc.v1.SubnetService/AddCidrBlocks";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddSubnetCidrBlocksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddSubnetCidrBlocksRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Removes CIDR blocks from the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly removeCidrBlocks: {
        readonly path: "/yandex.cloud.vpc.v1.SubnetService/RemoveCidrBlocks";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveSubnetCidrBlocksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveSubnetCidrBlocksRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified subnet. */
    readonly delete: {
        readonly path: "/yandex.cloud.vpc.v1.SubnetService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSubnetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSubnetRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List operations for the specified subnet. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.vpc.v1.SubnetService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSubnetOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSubnetOperationsRequest;
        readonly responseSerialize: (value: ListSubnetOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSubnetOperationsResponse;
    };
    /** Move subnet to another folder. */
    readonly move: {
        readonly path: "/yandex.cloud.vpc.v1.SubnetService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveSubnetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveSubnetRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List used addresses in specified subnet. */
    readonly listUsedAddresses: {
        readonly path: "/yandex.cloud.vpc.v1.SubnetService/ListUsedAddresses";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListUsedAddressesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListUsedAddressesRequest;
        readonly responseSerialize: (value: ListUsedAddressesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListUsedAddressesResponse;
    };
};
export interface SubnetServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Subnet resource.
     *
     * To get the list of available Subnet resources, make a [List] request.
     */
    get: handleUnaryCall<GetSubnetRequest, Subnet>;
    /** Retrieves the list of Subnet resources in the specified folder. */
    list: handleUnaryCall<ListSubnetsRequest, ListSubnetsResponse>;
    /**
     * Creates a subnet in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateSubnetRequest, Operation>;
    /**
     * Updates the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: handleUnaryCall<UpdateSubnetRequest, Operation>;
    /**
     * Adds CIDR blocks to the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    addCidrBlocks: handleUnaryCall<AddSubnetCidrBlocksRequest, Operation>;
    /**
     * Removes CIDR blocks from the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removeCidrBlocks: handleUnaryCall<RemoveSubnetCidrBlocksRequest, Operation>;
    /** Deletes the specified subnet. */
    delete: handleUnaryCall<DeleteSubnetRequest, Operation>;
    /** List operations for the specified subnet. */
    listOperations: handleUnaryCall<ListSubnetOperationsRequest, ListSubnetOperationsResponse>;
    /** Move subnet to another folder. */
    move: handleUnaryCall<MoveSubnetRequest, Operation>;
    /** List used addresses in specified subnet. */
    listUsedAddresses: handleUnaryCall<ListUsedAddressesRequest, ListUsedAddressesResponse>;
}
export interface SubnetServiceClient extends Client {
    /**
     * Returns the specified Subnet resource.
     *
     * To get the list of available Subnet resources, make a [List] request.
     */
    get(request: GetSubnetRequest, callback: (error: ServiceError | null, response: Subnet) => void): ClientUnaryCall;
    get(request: GetSubnetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Subnet) => void): ClientUnaryCall;
    get(request: GetSubnetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Subnet) => void): ClientUnaryCall;
    /** Retrieves the list of Subnet resources in the specified folder. */
    list(request: ListSubnetsRequest, callback: (error: ServiceError | null, response: ListSubnetsResponse) => void): ClientUnaryCall;
    list(request: ListSubnetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSubnetsResponse) => void): ClientUnaryCall;
    list(request: ListSubnetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSubnetsResponse) => void): ClientUnaryCall;
    /**
     * Creates a subnet in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateSubnetRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSubnetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSubnetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(request: UpdateSubnetRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSubnetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSubnetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Adds CIDR blocks to the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    addCidrBlocks(request: AddSubnetCidrBlocksRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addCidrBlocks(request: AddSubnetCidrBlocksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addCidrBlocks(request: AddSubnetCidrBlocksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Removes CIDR blocks from the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removeCidrBlocks(request: RemoveSubnetCidrBlocksRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeCidrBlocks(request: RemoveSubnetCidrBlocksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeCidrBlocks(request: RemoveSubnetCidrBlocksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified subnet. */
    delete(request: DeleteSubnetRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSubnetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSubnetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List operations for the specified subnet. */
    listOperations(request: ListSubnetOperationsRequest, callback: (error: ServiceError | null, response: ListSubnetOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSubnetOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSubnetOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSubnetOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSubnetOperationsResponse) => void): ClientUnaryCall;
    /** Move subnet to another folder. */
    move(request: MoveSubnetRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveSubnetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveSubnetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List used addresses in specified subnet. */
    listUsedAddresses(request: ListUsedAddressesRequest, callback: (error: ServiceError | null, response: ListUsedAddressesResponse) => void): ClientUnaryCall;
    listUsedAddresses(request: ListUsedAddressesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListUsedAddressesResponse) => void): ClientUnaryCall;
    listUsedAddresses(request: ListUsedAddressesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListUsedAddressesResponse) => void): ClientUnaryCall;
}
export declare const SubnetServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): SubnetServiceClient;
    service: typeof SubnetServiceService;
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
