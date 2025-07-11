/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { RouteTable, StaticRoute } from "../../../../yandex/cloud/vpc/v1/route_table";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.vpc.v1";
export interface GetRouteTableRequest {
    $type: "yandex.cloud.vpc.v1.GetRouteTableRequest";
    /**
     * ID of the RouteTable resource to return.
     * To get the route table ID use a [RouteTableService.List] request.
     */
    routeTableId: string;
}
export interface ListRouteTablesRequest {
    $type: "yandex.cloud.vpc.v1.ListRouteTablesRequest";
    /**
     * ID of the folder that the route table belongs to.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRouteTablesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRouteTablesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [RouteTable.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}
export interface ListRouteTablesResponse {
    $type: "yandex.cloud.vpc.v1.ListRouteTablesResponse";
    /** List of RouteTable resources. */
    routeTables: RouteTable[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRouteTablesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRouteTablesRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateRouteTableRequest {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest";
    /**
     * ID of the folder that the route table belongs to.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the route table.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the route table. */
    description: string;
    /** Resource labels, `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
    /** ID of the network the route table belongs to. */
    networkId: string;
    /** List of static routes. */
    staticRoutes: StaticRoute[];
}
export interface CreateRouteTableRequest_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateRouteTableMetadata {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableMetadata";
    /** ID of the route table that is being created. */
    routeTableId: string;
}
export interface UpdateRouteTableRequest {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest";
    /** ID of the RouteTable resource to update. */
    routeTableId: string;
    /** Field mask that specifies which fields of the RouteTable resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the route table.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the route table. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
    /** List of static routes. */
    staticRoutes: StaticRoute[];
}
export interface UpdateRouteTableRequest_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateRouteTableMetadata {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableMetadata";
    /** ID of the RouteTable resource that is being updated. */
    routeTableId: string;
}
export interface DeleteRouteTableRequest {
    $type: "yandex.cloud.vpc.v1.DeleteRouteTableRequest";
    /**
     * ID of the route table to delete.
     * To get the route table ID use a [RouteTableService.List] request.
     */
    routeTableId: string;
}
export interface DeleteRouteTableMetadata {
    $type: "yandex.cloud.vpc.v1.DeleteRouteTableMetadata";
    /** ID of the RouteTable resource that is being deleted. */
    routeTableId: string;
}
export interface ListRouteTableOperationsRequest {
    $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsRequest";
    /** ID of the RouteTable resource to list operations for. */
    routeTableId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListRouteTableOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRouteTableOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListRouteTableOperationsResponse {
    $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsResponse";
    /** List of operations for the specified RouteTable resource. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRouteTableOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListRouteTableOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface MoveRouteTableRequest {
    $type: "yandex.cloud.vpc.v1.MoveRouteTableRequest";
    /** ID of the RouteTable resource to move. */
    routeTableId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveRouteTableMetadata {
    $type: "yandex.cloud.vpc.v1.MoveRouteTableMetadata";
    /** ID of the RouteTable resource that is being moved. */
    routeTableId: string;
}
export declare const GetRouteTableRequest: {
    $type: "yandex.cloud.vpc.v1.GetRouteTableRequest";
    encode(message: GetRouteTableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetRouteTableRequest;
    fromJSON(object: any): GetRouteTableRequest;
    toJSON(message: GetRouteTableRequest): unknown;
    fromPartial<I extends {
        routeTableId?: string | undefined;
    } & {
        routeTableId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "routeTableId">, never>>(object: I): GetRouteTableRequest;
};
export declare const ListRouteTablesRequest: {
    $type: "yandex.cloud.vpc.v1.ListRouteTablesRequest";
    encode(message: ListRouteTablesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRouteTablesRequest;
    fromJSON(object: any): ListRouteTablesRequest;
    toJSON(message: ListRouteTablesRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListRouteTablesRequest;
};
export declare const ListRouteTablesResponse: {
    $type: "yandex.cloud.vpc.v1.ListRouteTablesResponse";
    encode(message: ListRouteTablesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRouteTablesResponse;
    fromJSON(object: any): ListRouteTablesResponse;
    toJSON(message: ListRouteTablesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        routeTables?: {
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
            staticRoutes?: {
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                gatewayId?: string | undefined;
                destinationPrefix?: string | undefined;
                nextHopAddress?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        routeTables?: ({
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
            staticRoutes?: {
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                gatewayId?: string | undefined;
                destinationPrefix?: string | undefined;
                nextHopAddress?: string | undefined;
            }[] | undefined;
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
            staticRoutes?: {
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                gatewayId?: string | undefined;
                destinationPrefix?: string | undefined;
                nextHopAddress?: string | undefined;
            }[] | undefined;
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
            } & Record<Exclude<keyof I["routeTables"][number]["labels"], string | number>, never>) | undefined;
            networkId?: string | undefined;
            staticRoutes?: ({
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                gatewayId?: string | undefined;
                destinationPrefix?: string | undefined;
                nextHopAddress?: string | undefined;
            }[] & ({
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                gatewayId?: string | undefined;
                destinationPrefix?: string | undefined;
                nextHopAddress?: string | undefined;
            } & {
                labels?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["routeTables"][number]["staticRoutes"][number]["labels"], string | number>, never>) | undefined;
                gatewayId?: string | undefined;
                destinationPrefix?: string | undefined;
                nextHopAddress?: string | undefined;
            } & Record<Exclude<keyof I["routeTables"][number]["staticRoutes"][number], "$type" | "labels" | "gatewayId" | "destinationPrefix" | "nextHopAddress">, never>)[] & Record<Exclude<keyof I["routeTables"][number]["staticRoutes"], "$type" | keyof {
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                gatewayId?: string | undefined;
                destinationPrefix?: string | undefined;
                nextHopAddress?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["routeTables"][number], "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "networkId" | "staticRoutes">, never>)[] & Record<Exclude<keyof I["routeTables"], "$type" | keyof {
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
            staticRoutes?: {
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                gatewayId?: string | undefined;
                destinationPrefix?: string | undefined;
                nextHopAddress?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "routeTables">, never>>(object: I): ListRouteTablesResponse;
};
export declare const CreateRouteTableRequest: {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest";
    encode(message: CreateRouteTableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRouteTableRequest;
    fromJSON(object: any): CreateRouteTableRequest;
    toJSON(message: CreateRouteTableRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        networkId?: string | undefined;
        staticRoutes?: {
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
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
        staticRoutes?: ({
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        }[] & ({
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        } & {
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["staticRoutes"][number]["labels"], string | number>, never>) | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        } & Record<Exclude<keyof I["staticRoutes"][number], "$type" | "labels" | "gatewayId" | "destinationPrefix" | "nextHopAddress">, never>)[] & Record<Exclude<keyof I["staticRoutes"], "$type" | keyof {
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "staticRoutes">, never>>(object: I): CreateRouteTableRequest;
};
export declare const CreateRouteTableRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest.LabelsEntry";
    encode(message: CreateRouteTableRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRouteTableRequest_LabelsEntry;
    fromJSON(object: any): CreateRouteTableRequest_LabelsEntry;
    toJSON(message: CreateRouteTableRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateRouteTableRequest_LabelsEntry;
};
export declare const CreateRouteTableMetadata: {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableMetadata";
    encode(message: CreateRouteTableMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRouteTableMetadata;
    fromJSON(object: any): CreateRouteTableMetadata;
    toJSON(message: CreateRouteTableMetadata): unknown;
    fromPartial<I extends {
        routeTableId?: string | undefined;
    } & {
        routeTableId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "routeTableId">, never>>(object: I): CreateRouteTableMetadata;
};
export declare const UpdateRouteTableRequest: {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest";
    encode(message: UpdateRouteTableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteTableRequest;
    fromJSON(object: any): UpdateRouteTableRequest;
    toJSON(message: UpdateRouteTableRequest): unknown;
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
        routeTableId?: string | undefined;
        staticRoutes?: {
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
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
        routeTableId?: string | undefined;
        staticRoutes?: ({
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        }[] & ({
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        } & {
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["staticRoutes"][number]["labels"], string | number>, never>) | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        } & Record<Exclude<keyof I["staticRoutes"][number], "$type" | "labels" | "gatewayId" | "destinationPrefix" | "nextHopAddress">, never>)[] & Record<Exclude<keyof I["staticRoutes"], "$type" | keyof {
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "routeTableId" | "staticRoutes">, never>>(object: I): UpdateRouteTableRequest;
};
export declare const UpdateRouteTableRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest.LabelsEntry";
    encode(message: UpdateRouteTableRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteTableRequest_LabelsEntry;
    fromJSON(object: any): UpdateRouteTableRequest_LabelsEntry;
    toJSON(message: UpdateRouteTableRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateRouteTableRequest_LabelsEntry;
};
export declare const UpdateRouteTableMetadata: {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableMetadata";
    encode(message: UpdateRouteTableMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteTableMetadata;
    fromJSON(object: any): UpdateRouteTableMetadata;
    toJSON(message: UpdateRouteTableMetadata): unknown;
    fromPartial<I extends {
        routeTableId?: string | undefined;
    } & {
        routeTableId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "routeTableId">, never>>(object: I): UpdateRouteTableMetadata;
};
export declare const DeleteRouteTableRequest: {
    $type: "yandex.cloud.vpc.v1.DeleteRouteTableRequest";
    encode(message: DeleteRouteTableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRouteTableRequest;
    fromJSON(object: any): DeleteRouteTableRequest;
    toJSON(message: DeleteRouteTableRequest): unknown;
    fromPartial<I extends {
        routeTableId?: string | undefined;
    } & {
        routeTableId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "routeTableId">, never>>(object: I): DeleteRouteTableRequest;
};
export declare const DeleteRouteTableMetadata: {
    $type: "yandex.cloud.vpc.v1.DeleteRouteTableMetadata";
    encode(message: DeleteRouteTableMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRouteTableMetadata;
    fromJSON(object: any): DeleteRouteTableMetadata;
    toJSON(message: DeleteRouteTableMetadata): unknown;
    fromPartial<I extends {
        routeTableId?: string | undefined;
    } & {
        routeTableId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "routeTableId">, never>>(object: I): DeleteRouteTableMetadata;
};
export declare const ListRouteTableOperationsRequest: {
    $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsRequest";
    encode(message: ListRouteTableOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRouteTableOperationsRequest;
    fromJSON(object: any): ListRouteTableOperationsRequest;
    toJSON(message: ListRouteTableOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        routeTableId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        routeTableId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "routeTableId">, never>>(object: I): ListRouteTableOperationsRequest;
};
export declare const ListRouteTableOperationsResponse: {
    $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsResponse";
    encode(message: ListRouteTableOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRouteTableOperationsResponse;
    fromJSON(object: any): ListRouteTableOperationsResponse;
    toJSON(message: ListRouteTableOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListRouteTableOperationsResponse;
};
export declare const MoveRouteTableRequest: {
    $type: "yandex.cloud.vpc.v1.MoveRouteTableRequest";
    encode(message: MoveRouteTableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveRouteTableRequest;
    fromJSON(object: any): MoveRouteTableRequest;
    toJSON(message: MoveRouteTableRequest): unknown;
    fromPartial<I extends {
        destinationFolderId?: string | undefined;
        routeTableId?: string | undefined;
    } & {
        destinationFolderId?: string | undefined;
        routeTableId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "destinationFolderId" | "routeTableId">, never>>(object: I): MoveRouteTableRequest;
};
export declare const MoveRouteTableMetadata: {
    $type: "yandex.cloud.vpc.v1.MoveRouteTableMetadata";
    encode(message: MoveRouteTableMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveRouteTableMetadata;
    fromJSON(object: any): MoveRouteTableMetadata;
    toJSON(message: MoveRouteTableMetadata): unknown;
    fromPartial<I extends {
        routeTableId?: string | undefined;
    } & {
        routeTableId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "routeTableId">, never>>(object: I): MoveRouteTableMetadata;
};
/** A set of methods for managing RouteTable resources. */
export declare const RouteTableServiceService: {
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRouteTableRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRouteTableRequest;
        readonly responseSerialize: (value: RouteTable) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RouteTable;
    };
    /** Retrieves the list of RouteTable resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRouteTablesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRouteTablesRequest;
        readonly responseSerialize: (value: ListRouteTablesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRouteTablesResponse;
    };
    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly create: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateRouteTableRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateRouteTableRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly update: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRouteTableRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRouteTableRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified route table. */
    readonly delete: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteRouteTableRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteRouteTableRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List operations for the specified route table. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRouteTableOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRouteTableOperationsRequest;
        readonly responseSerialize: (value: ListRouteTableOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRouteTableOperationsResponse;
    };
    /** Move route table to another folder. */
    readonly move: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveRouteTableRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveRouteTableRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface RouteTableServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    get: handleUnaryCall<GetRouteTableRequest, RouteTable>;
    /** Retrieves the list of RouteTable resources in the specified folder. */
    list: handleUnaryCall<ListRouteTablesRequest, ListRouteTablesResponse>;
    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateRouteTableRequest, Operation>;
    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: handleUnaryCall<UpdateRouteTableRequest, Operation>;
    /** Deletes the specified route table. */
    delete: handleUnaryCall<DeleteRouteTableRequest, Operation>;
    /** List operations for the specified route table. */
    listOperations: handleUnaryCall<ListRouteTableOperationsRequest, ListRouteTableOperationsResponse>;
    /** Move route table to another folder. */
    move: handleUnaryCall<MoveRouteTableRequest, Operation>;
}
export interface RouteTableServiceClient extends Client {
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    get(request: GetRouteTableRequest, callback: (error: ServiceError | null, response: RouteTable) => void): ClientUnaryCall;
    get(request: GetRouteTableRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RouteTable) => void): ClientUnaryCall;
    get(request: GetRouteTableRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RouteTable) => void): ClientUnaryCall;
    /** Retrieves the list of RouteTable resources in the specified folder. */
    list(request: ListRouteTablesRequest, callback: (error: ServiceError | null, response: ListRouteTablesResponse) => void): ClientUnaryCall;
    list(request: ListRouteTablesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRouteTablesResponse) => void): ClientUnaryCall;
    list(request: ListRouteTablesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRouteTablesResponse) => void): ClientUnaryCall;
    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateRouteTableRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateRouteTableRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateRouteTableRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(request: UpdateRouteTableRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateRouteTableRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateRouteTableRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified route table. */
    delete(request: DeleteRouteTableRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteRouteTableRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteRouteTableRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List operations for the specified route table. */
    listOperations(request: ListRouteTableOperationsRequest, callback: (error: ServiceError | null, response: ListRouteTableOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListRouteTableOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRouteTableOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListRouteTableOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRouteTableOperationsResponse) => void): ClientUnaryCall;
    /** Move route table to another folder. */
    move(request: MoveRouteTableRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveRouteTableRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveRouteTableRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const RouteTableServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): RouteTableServiceClient;
    service: typeof RouteTableServiceService;
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
