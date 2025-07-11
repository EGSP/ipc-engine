/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Gateway } from "../../../../yandex/cloud/vpc/v1/gateway";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.vpc.v1";
export interface GetGatewayRequest {
    $type: "yandex.cloud.vpc.v1.GetGatewayRequest";
    /**
     * ID of the Gateway resource to return.
     *
     * To get Gateway resource ID make a [GatewayService.List] request.
     */
    gatewayId: string;
}
export interface ListGatewaysRequest {
    $type: "yandex.cloud.vpc.v1.ListGatewaysRequest";
    /**
     * ID of the folder to list gateways in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListGatewaysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListGatewaysResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters Gateway listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Gateway.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-gateway`.
     */
    filter: string;
}
export interface ListGatewaysResponse {
    $type: "yandex.cloud.vpc.v1.ListGatewaysResponse";
    /** List of gateways. */
    gateways: Gateway[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListGatewaysRequest.page_size], use `next_page_token` as the value
     * for the [ListGatewaysRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListGatewayOperationsRequest {
    $type: "yandex.cloud.vpc.v1.ListGatewayOperationsRequest";
    /**
     * ID of the gateway to list operations for.
     *
     * To get a gateway ID make a [GatewayService.List] request.
     */
    gatewayId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListGatewayOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListGatewayOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListGatewayOperationsResponse {
    $type: "yandex.cloud.vpc.v1.ListGatewayOperationsResponse";
    /** List of operations for the specified gateway. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListGatewayOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListGatewayOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface SharedEgressGatewaySpec {
    $type: "yandex.cloud.vpc.v1.SharedEgressGatewaySpec";
}
export interface CreateGatewayRequest {
    $type: "yandex.cloud.vpc.v1.CreateGatewayRequest";
    /**
     * ID of the folder to create a gateway in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the gateway.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the gateway. */
    description: string;
    /** Gateway labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    sharedEgressGatewaySpec?: SharedEgressGatewaySpec | undefined;
}
export interface CreateGatewayRequest_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.CreateGatewayRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateGatewayMetadata {
    $type: "yandex.cloud.vpc.v1.CreateGatewayMetadata";
    /** ID of the gateway that is being created. */
    gatewayId: string;
}
export interface UpdateGatewayRequest {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest";
    /**
     * ID of the gateway to update.
     *
     * To get the gateway ID make a [GatewayService.List] request.
     */
    gatewayId: string;
    /** Field mask that specifies which attributes of the Gateway should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the gateway.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the gateway. */
    description: string;
    /**
     * Gateway labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [GatewayService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
    sharedEgressGatewaySpec?: SharedEgressGatewaySpec | undefined;
}
export interface UpdateGatewayRequest_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateGatewayMetadata {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayMetadata";
    /** ID of the Gateway that is being updated. */
    gatewayId: string;
}
export interface DeleteGatewayRequest {
    $type: "yandex.cloud.vpc.v1.DeleteGatewayRequest";
    /**
     * ID of the gateway to delete.
     *
     * To get a gateway ID make a [GatewayService.List] request.
     */
    gatewayId: string;
}
export interface DeleteGatewayMetadata {
    $type: "yandex.cloud.vpc.v1.DeleteGatewayMetadata";
    /** ID of the gateway that is being deleted. */
    gatewayId: string;
}
export interface MoveGatewayRequest {
    $type: "yandex.cloud.vpc.v1.MoveGatewayRequest";
    gatewayId: string;
    destinationFolderId: string;
}
export interface MoveGatewayMetadata {
    $type: "yandex.cloud.vpc.v1.MoveGatewayMetadata";
    gatewayId: string;
}
export declare const GetGatewayRequest: {
    $type: "yandex.cloud.vpc.v1.GetGatewayRequest";
    encode(message: GetGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGatewayRequest;
    fromJSON(object: any): GetGatewayRequest;
    toJSON(message: GetGatewayRequest): unknown;
    fromPartial<I extends {
        gatewayId?: string | undefined;
    } & {
        gatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gatewayId">, never>>(object: I): GetGatewayRequest;
};
export declare const ListGatewaysRequest: {
    $type: "yandex.cloud.vpc.v1.ListGatewaysRequest";
    encode(message: ListGatewaysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGatewaysRequest;
    fromJSON(object: any): ListGatewaysRequest;
    toJSON(message: ListGatewaysRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListGatewaysRequest;
};
export declare const ListGatewaysResponse: {
    $type: "yandex.cloud.vpc.v1.ListGatewaysResponse";
    encode(message: ListGatewaysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGatewaysResponse;
    fromJSON(object: any): ListGatewaysResponse;
    toJSON(message: ListGatewaysResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        gateways?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            sharedEgressGateway?: {} | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        gateways?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            sharedEgressGateway?: {} | undefined;
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
            sharedEgressGateway?: {} | undefined;
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
            } & Record<Exclude<keyof I["gateways"][number]["labels"], string | number>, never>) | undefined;
            sharedEgressGateway?: ({} & {} & Record<Exclude<keyof I["gateways"][number]["sharedEgressGateway"], "$type">, never>) | undefined;
        } & Record<Exclude<keyof I["gateways"][number], "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "sharedEgressGateway">, never>)[] & Record<Exclude<keyof I["gateways"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            sharedEgressGateway?: {} | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "gateways">, never>>(object: I): ListGatewaysResponse;
};
export declare const ListGatewayOperationsRequest: {
    $type: "yandex.cloud.vpc.v1.ListGatewayOperationsRequest";
    encode(message: ListGatewayOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGatewayOperationsRequest;
    fromJSON(object: any): ListGatewayOperationsRequest;
    toJSON(message: ListGatewayOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        gatewayId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        gatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "gatewayId">, never>>(object: I): ListGatewayOperationsRequest;
};
export declare const ListGatewayOperationsResponse: {
    $type: "yandex.cloud.vpc.v1.ListGatewayOperationsResponse";
    encode(message: ListGatewayOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGatewayOperationsResponse;
    fromJSON(object: any): ListGatewayOperationsResponse;
    toJSON(message: ListGatewayOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListGatewayOperationsResponse;
};
export declare const SharedEgressGatewaySpec: {
    $type: "yandex.cloud.vpc.v1.SharedEgressGatewaySpec";
    encode(_: SharedEgressGatewaySpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SharedEgressGatewaySpec;
    fromJSON(_: any): SharedEgressGatewaySpec;
    toJSON(_: SharedEgressGatewaySpec): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): SharedEgressGatewaySpec;
};
export declare const CreateGatewayRequest: {
    $type: "yandex.cloud.vpc.v1.CreateGatewayRequest";
    encode(message: CreateGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGatewayRequest;
    fromJSON(object: any): CreateGatewayRequest;
    toJSON(message: CreateGatewayRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        sharedEgressGatewaySpec?: {} | undefined;
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
        sharedEgressGatewaySpec?: ({} & {} & Record<Exclude<keyof I["sharedEgressGatewaySpec"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "sharedEgressGatewaySpec">, never>>(object: I): CreateGatewayRequest;
};
export declare const CreateGatewayRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.CreateGatewayRequest.LabelsEntry";
    encode(message: CreateGatewayRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGatewayRequest_LabelsEntry;
    fromJSON(object: any): CreateGatewayRequest_LabelsEntry;
    toJSON(message: CreateGatewayRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateGatewayRequest_LabelsEntry;
};
export declare const CreateGatewayMetadata: {
    $type: "yandex.cloud.vpc.v1.CreateGatewayMetadata";
    encode(message: CreateGatewayMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGatewayMetadata;
    fromJSON(object: any): CreateGatewayMetadata;
    toJSON(message: CreateGatewayMetadata): unknown;
    fromPartial<I extends {
        gatewayId?: string | undefined;
    } & {
        gatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gatewayId">, never>>(object: I): CreateGatewayMetadata;
};
export declare const UpdateGatewayRequest: {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest";
    encode(message: UpdateGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGatewayRequest;
    fromJSON(object: any): UpdateGatewayRequest;
    toJSON(message: UpdateGatewayRequest): unknown;
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
        gatewayId?: string | undefined;
        sharedEgressGatewaySpec?: {} | undefined;
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
        gatewayId?: string | undefined;
        sharedEgressGatewaySpec?: ({} & {} & Record<Exclude<keyof I["sharedEgressGatewaySpec"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "gatewayId" | "sharedEgressGatewaySpec">, never>>(object: I): UpdateGatewayRequest;
};
export declare const UpdateGatewayRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest.LabelsEntry";
    encode(message: UpdateGatewayRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGatewayRequest_LabelsEntry;
    fromJSON(object: any): UpdateGatewayRequest_LabelsEntry;
    toJSON(message: UpdateGatewayRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateGatewayRequest_LabelsEntry;
};
export declare const UpdateGatewayMetadata: {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayMetadata";
    encode(message: UpdateGatewayMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGatewayMetadata;
    fromJSON(object: any): UpdateGatewayMetadata;
    toJSON(message: UpdateGatewayMetadata): unknown;
    fromPartial<I extends {
        gatewayId?: string | undefined;
    } & {
        gatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gatewayId">, never>>(object: I): UpdateGatewayMetadata;
};
export declare const DeleteGatewayRequest: {
    $type: "yandex.cloud.vpc.v1.DeleteGatewayRequest";
    encode(message: DeleteGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGatewayRequest;
    fromJSON(object: any): DeleteGatewayRequest;
    toJSON(message: DeleteGatewayRequest): unknown;
    fromPartial<I extends {
        gatewayId?: string | undefined;
    } & {
        gatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gatewayId">, never>>(object: I): DeleteGatewayRequest;
};
export declare const DeleteGatewayMetadata: {
    $type: "yandex.cloud.vpc.v1.DeleteGatewayMetadata";
    encode(message: DeleteGatewayMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGatewayMetadata;
    fromJSON(object: any): DeleteGatewayMetadata;
    toJSON(message: DeleteGatewayMetadata): unknown;
    fromPartial<I extends {
        gatewayId?: string | undefined;
    } & {
        gatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gatewayId">, never>>(object: I): DeleteGatewayMetadata;
};
export declare const MoveGatewayRequest: {
    $type: "yandex.cloud.vpc.v1.MoveGatewayRequest";
    encode(message: MoveGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveGatewayRequest;
    fromJSON(object: any): MoveGatewayRequest;
    toJSON(message: MoveGatewayRequest): unknown;
    fromPartial<I extends {
        destinationFolderId?: string | undefined;
        gatewayId?: string | undefined;
    } & {
        destinationFolderId?: string | undefined;
        gatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "destinationFolderId" | "gatewayId">, never>>(object: I): MoveGatewayRequest;
};
export declare const MoveGatewayMetadata: {
    $type: "yandex.cloud.vpc.v1.MoveGatewayMetadata";
    encode(message: MoveGatewayMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveGatewayMetadata;
    fromJSON(object: any): MoveGatewayMetadata;
    toJSON(message: MoveGatewayMetadata): unknown;
    fromPartial<I extends {
        gatewayId?: string | undefined;
    } & {
        gatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gatewayId">, never>>(object: I): MoveGatewayMetadata;
};
export declare const GatewayServiceService: {
    /**
     * Returns the specified Gateway resource.
     *
     * To get the list of all available Gateway resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.vpc.v1.GatewayService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGatewayRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGatewayRequest;
        readonly responseSerialize: (value: Gateway) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Gateway;
    };
    /** Retrieves the list of Gateway resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.vpc.v1.GatewayService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGatewaysRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGatewaysRequest;
        readonly responseSerialize: (value: ListGatewaysResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGatewaysResponse;
    };
    /** Creates a gateway in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.vpc.v1.GatewayService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateGatewayRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateGatewayRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified gateway. */
    readonly update: {
        readonly path: "/yandex.cloud.vpc.v1.GatewayService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateGatewayRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateGatewayRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified gateway. */
    readonly delete: {
        readonly path: "/yandex.cloud.vpc.v1.GatewayService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteGatewayRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteGatewayRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List operations for the specified gateway. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.vpc.v1.GatewayService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGatewayOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGatewayOperationsRequest;
        readonly responseSerialize: (value: ListGatewayOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGatewayOperationsResponse;
    };
    /** Move a gateway to another folder */
    readonly move: {
        readonly path: "/yandex.cloud.vpc.v1.GatewayService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveGatewayRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveGatewayRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface GatewayServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Gateway resource.
     *
     * To get the list of all available Gateway resources, make a [List] request.
     */
    get: handleUnaryCall<GetGatewayRequest, Gateway>;
    /** Retrieves the list of Gateway resources in the specified folder. */
    list: handleUnaryCall<ListGatewaysRequest, ListGatewaysResponse>;
    /** Creates a gateway in the specified folder. */
    create: handleUnaryCall<CreateGatewayRequest, Operation>;
    /** Updates the specified gateway. */
    update: handleUnaryCall<UpdateGatewayRequest, Operation>;
    /** Deletes the specified gateway. */
    delete: handleUnaryCall<DeleteGatewayRequest, Operation>;
    /** List operations for the specified gateway. */
    listOperations: handleUnaryCall<ListGatewayOperationsRequest, ListGatewayOperationsResponse>;
    /** Move a gateway to another folder */
    move: handleUnaryCall<MoveGatewayRequest, Operation>;
}
export interface GatewayServiceClient extends Client {
    /**
     * Returns the specified Gateway resource.
     *
     * To get the list of all available Gateway resources, make a [List] request.
     */
    get(request: GetGatewayRequest, callback: (error: ServiceError | null, response: Gateway) => void): ClientUnaryCall;
    get(request: GetGatewayRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Gateway) => void): ClientUnaryCall;
    get(request: GetGatewayRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Gateway) => void): ClientUnaryCall;
    /** Retrieves the list of Gateway resources in the specified folder. */
    list(request: ListGatewaysRequest, callback: (error: ServiceError | null, response: ListGatewaysResponse) => void): ClientUnaryCall;
    list(request: ListGatewaysRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGatewaysResponse) => void): ClientUnaryCall;
    list(request: ListGatewaysRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGatewaysResponse) => void): ClientUnaryCall;
    /** Creates a gateway in the specified folder. */
    create(request: CreateGatewayRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateGatewayRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateGatewayRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified gateway. */
    update(request: UpdateGatewayRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateGatewayRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateGatewayRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified gateway. */
    delete(request: DeleteGatewayRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteGatewayRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteGatewayRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List operations for the specified gateway. */
    listOperations(request: ListGatewayOperationsRequest, callback: (error: ServiceError | null, response: ListGatewayOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListGatewayOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGatewayOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListGatewayOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGatewayOperationsResponse) => void): ClientUnaryCall;
    /** Move a gateway to another folder */
    move(request: MoveGatewayRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveGatewayRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveGatewayRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const GatewayServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): GatewayServiceClient;
    service: typeof GatewayServiceService;
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
