/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Cloud } from "../../../../yandex/cloud/resourcemanager/v1/cloud";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.resourcemanager.v1";
export interface GetCloudRequest {
    $type: "yandex.cloud.resourcemanager.v1.GetCloudRequest";
    /**
     * ID of the Cloud resource to return.
     * To get the cloud ID, use a [CloudService.List] request.
     */
    cloudId: string;
}
export interface ListCloudsRequest {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudsRequest";
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListCloudsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListCloudsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Cloud.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * ID of the organization to list clouds in.
     * To get the organization ID, use a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
}
export interface ListCloudsResponse {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudsResponse";
    /** List of Cloud resources. */
    clouds: Cloud[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCloudsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListCloudsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateCloudRequest {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudRequest";
    /**
     * ID of the organization to create a cloud in.
     * To get the organization ID, use a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /** Name of the cloud. */
    name: string;
    /** Description of the cloud. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateCloudRequest_LabelsEntry {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateCloudMetadata {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudMetadata";
    /** ID of the cloud that is being created. */
    cloudId: string;
}
export interface ListCloudOperationsRequest {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudOperationsRequest";
    /** ID of the Cloud resource to list operations for. */
    cloudId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListCloudOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListCloudOperationsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}
export interface ListCloudOperationsResponse {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudOperationsResponse";
    /** List of operations for the specified cloud. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCloudOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListCloudOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface UpdateCloudRequest {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudRequest";
    /**
     * ID of the cloud to update.
     * To get the cloud ID, use a [CloudService.List] request.
     */
    cloudId: string;
    /** Field mask that specifies which fields of the cloud are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the cloud. */
    name: string;
    /** Description of the cloud. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateCloudRequest_LabelsEntry {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateCloudMetadata {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudMetadata";
    /** ID of the cloud that is being updated. */
    cloudId: string;
}
export interface DeleteCloudRequest {
    $type: "yandex.cloud.resourcemanager.v1.DeleteCloudRequest";
    /**
     * ID of the cloud to delete.
     * To get the cloud ID, use a [CloudService.List] request.
     */
    cloudId: string;
    /**
     * The timestamp after which the process of deleting the cloud should begin.
     * Until this timestamp, the cloud goes into the PENDING_DELETION state and all resources in this
     * cloud are stopped. In this state, it is possible to cancel the delete operation without any loss.
     * After this timestamp, the status of the cloud will become DELETING and the process of deleting
     * all the resources  of the cloud will be started. If [delete_after] is not specified it will be
     * (now + 24 hours). To initiate an immediate deletion [delete_after] must be <= now.
     */
    deleteAfter?: Date;
}
export interface DeleteCloudMetadata {
    $type: "yandex.cloud.resourcemanager.v1.DeleteCloudMetadata";
    /** ID of the cloud that is being deleted. */
    cloudId: string;
    /** The timestamp after which the process of deleting the cloud should begin. */
    deleteAfter?: Date;
}
export declare const GetCloudRequest: {
    $type: "yandex.cloud.resourcemanager.v1.GetCloudRequest";
    encode(message: GetCloudRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCloudRequest;
    fromJSON(object: any): GetCloudRequest;
    toJSON(message: GetCloudRequest): unknown;
    fromPartial<I extends {
        cloudId?: string | undefined;
    } & {
        cloudId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "cloudId">, never>>(object: I): GetCloudRequest;
};
export declare const ListCloudsRequest: {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudsRequest";
    encode(message: ListCloudsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCloudsRequest;
    fromJSON(object: any): ListCloudsRequest;
    toJSON(message: ListCloudsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        organizationId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "organizationId">, never>>(object: I): ListCloudsRequest;
};
export declare const ListCloudsResponse: {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudsResponse";
    encode(message: ListCloudsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCloudsResponse;
    fromJSON(object: any): ListCloudsResponse;
    toJSON(message: ListCloudsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        clouds?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            organizationId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        clouds?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            organizationId?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            organizationId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["clouds"][number]["labels"], string | number>, never>) | undefined;
            organizationId?: string | undefined;
        } & Record<Exclude<keyof I["clouds"][number], "$type" | "description" | "id" | "name" | "createdAt" | "labels" | "organizationId">, never>)[] & Record<Exclude<keyof I["clouds"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            organizationId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "clouds">, never>>(object: I): ListCloudsResponse;
};
export declare const CreateCloudRequest: {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudRequest";
    encode(message: CreateCloudRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateCloudRequest;
    fromJSON(object: any): CreateCloudRequest;
    toJSON(message: CreateCloudRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        organizationId?: string | undefined;
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
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "organizationId">, never>>(object: I): CreateCloudRequest;
};
export declare const CreateCloudRequest_LabelsEntry: {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudRequest.LabelsEntry";
    encode(message: CreateCloudRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateCloudRequest_LabelsEntry;
    fromJSON(object: any): CreateCloudRequest_LabelsEntry;
    toJSON(message: CreateCloudRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateCloudRequest_LabelsEntry;
};
export declare const CreateCloudMetadata: {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudMetadata";
    encode(message: CreateCloudMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateCloudMetadata;
    fromJSON(object: any): CreateCloudMetadata;
    toJSON(message: CreateCloudMetadata): unknown;
    fromPartial<I extends {
        cloudId?: string | undefined;
    } & {
        cloudId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "cloudId">, never>>(object: I): CreateCloudMetadata;
};
export declare const ListCloudOperationsRequest: {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudOperationsRequest";
    encode(message: ListCloudOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCloudOperationsRequest;
    fromJSON(object: any): ListCloudOperationsRequest;
    toJSON(message: ListCloudOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        cloudId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        cloudId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "cloudId">, never>>(object: I): ListCloudOperationsRequest;
};
export declare const ListCloudOperationsResponse: {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudOperationsResponse";
    encode(message: ListCloudOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCloudOperationsResponse;
    fromJSON(object: any): ListCloudOperationsResponse;
    toJSON(message: ListCloudOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListCloudOperationsResponse;
};
export declare const UpdateCloudRequest: {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudRequest";
    encode(message: UpdateCloudRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCloudRequest;
    fromJSON(object: any): UpdateCloudRequest;
    toJSON(message: UpdateCloudRequest): unknown;
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
        cloudId?: string | undefined;
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
        cloudId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "cloudId">, never>>(object: I): UpdateCloudRequest;
};
export declare const UpdateCloudRequest_LabelsEntry: {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudRequest.LabelsEntry";
    encode(message: UpdateCloudRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCloudRequest_LabelsEntry;
    fromJSON(object: any): UpdateCloudRequest_LabelsEntry;
    toJSON(message: UpdateCloudRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateCloudRequest_LabelsEntry;
};
export declare const UpdateCloudMetadata: {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudMetadata";
    encode(message: UpdateCloudMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCloudMetadata;
    fromJSON(object: any): UpdateCloudMetadata;
    toJSON(message: UpdateCloudMetadata): unknown;
    fromPartial<I extends {
        cloudId?: string | undefined;
    } & {
        cloudId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "cloudId">, never>>(object: I): UpdateCloudMetadata;
};
export declare const DeleteCloudRequest: {
    $type: "yandex.cloud.resourcemanager.v1.DeleteCloudRequest";
    encode(message: DeleteCloudRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteCloudRequest;
    fromJSON(object: any): DeleteCloudRequest;
    toJSON(message: DeleteCloudRequest): unknown;
    fromPartial<I extends {
        cloudId?: string | undefined;
        deleteAfter?: Date | undefined;
    } & {
        cloudId?: string | undefined;
        deleteAfter?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "cloudId" | "deleteAfter">, never>>(object: I): DeleteCloudRequest;
};
export declare const DeleteCloudMetadata: {
    $type: "yandex.cloud.resourcemanager.v1.DeleteCloudMetadata";
    encode(message: DeleteCloudMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteCloudMetadata;
    fromJSON(object: any): DeleteCloudMetadata;
    toJSON(message: DeleteCloudMetadata): unknown;
    fromPartial<I extends {
        cloudId?: string | undefined;
        deleteAfter?: Date | undefined;
    } & {
        cloudId?: string | undefined;
        deleteAfter?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "cloudId" | "deleteAfter">, never>>(object: I): DeleteCloudMetadata;
};
/** A set of methods for managing Cloud resources. */
export declare const CloudServiceService: {
    /**
     * Returns the specified Cloud resource.
     *
     * To get the list of available Cloud resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetCloudRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetCloudRequest;
        readonly responseSerialize: (value: Cloud) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cloud;
    };
    /** Retrieves the list of Cloud resources. */
    readonly list: {
        readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCloudsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListCloudsRequest;
        readonly responseSerialize: (value: ListCloudsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListCloudsResponse;
    };
    /** Creates a cloud in the specified organization. */
    readonly create: {
        readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateCloudRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateCloudRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified cloud. */
    readonly update: {
        readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateCloudRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateCloudRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified cloud. */
    readonly delete: {
        readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteCloudRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteCloudRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified cloud. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCloudOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListCloudOperationsRequest;
        readonly responseSerialize: (value: ListCloudOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListCloudOperationsResponse;
    };
    /** Lists access bindings for the specified cloud. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified cloud. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified cloud. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface CloudServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Cloud resource.
     *
     * To get the list of available Cloud resources, make a [List] request.
     */
    get: handleUnaryCall<GetCloudRequest, Cloud>;
    /** Retrieves the list of Cloud resources. */
    list: handleUnaryCall<ListCloudsRequest, ListCloudsResponse>;
    /** Creates a cloud in the specified organization. */
    create: handleUnaryCall<CreateCloudRequest, Operation>;
    /** Updates the specified cloud. */
    update: handleUnaryCall<UpdateCloudRequest, Operation>;
    /** Deletes the specified cloud. */
    delete: handleUnaryCall<DeleteCloudRequest, Operation>;
    /** Lists operations for the specified cloud. */
    listOperations: handleUnaryCall<ListCloudOperationsRequest, ListCloudOperationsResponse>;
    /** Lists access bindings for the specified cloud. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified cloud. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified cloud. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface CloudServiceClient extends Client {
    /**
     * Returns the specified Cloud resource.
     *
     * To get the list of available Cloud resources, make a [List] request.
     */
    get(request: GetCloudRequest, callback: (error: ServiceError | null, response: Cloud) => void): ClientUnaryCall;
    get(request: GetCloudRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cloud) => void): ClientUnaryCall;
    get(request: GetCloudRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cloud) => void): ClientUnaryCall;
    /** Retrieves the list of Cloud resources. */
    list(request: ListCloudsRequest, callback: (error: ServiceError | null, response: ListCloudsResponse) => void): ClientUnaryCall;
    list(request: ListCloudsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListCloudsResponse) => void): ClientUnaryCall;
    list(request: ListCloudsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListCloudsResponse) => void): ClientUnaryCall;
    /** Creates a cloud in the specified organization. */
    create(request: CreateCloudRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateCloudRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateCloudRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified cloud. */
    update(request: UpdateCloudRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateCloudRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateCloudRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified cloud. */
    delete(request: DeleteCloudRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteCloudRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteCloudRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified cloud. */
    listOperations(request: ListCloudOperationsRequest, callback: (error: ServiceError | null, response: ListCloudOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListCloudOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListCloudOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListCloudOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListCloudOperationsResponse) => void): ClientUnaryCall;
    /** Lists access bindings for the specified cloud. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified cloud. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified cloud. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const CloudServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): CloudServiceClient;
    service: typeof CloudServiceService;
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
