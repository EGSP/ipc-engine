/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Folder } from "../../../../yandex/cloud/resourcemanager/v1/folder";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.resourcemanager.v1";
export interface GetFolderRequest {
    $type: "yandex.cloud.resourcemanager.v1.GetFolderRequest";
    /**
     * ID of the Folder resource to return.
     * To get the folder ID, use a [FolderService.List] request.
     */
    folderId: string;
}
export interface ListFoldersRequest {
    $type: "yandex.cloud.resourcemanager.v1.ListFoldersRequest";
    /**
     * ID of the cloud to list folders in.
     * To get the cloud ID, use a [yandex.cloud.resourcemanager.v1.CloudService.List] request.
     */
    cloudId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListFoldersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListFoldersResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Folder.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}
export interface ListFoldersResponse {
    $type: "yandex.cloud.resourcemanager.v1.ListFoldersResponse";
    /** List of Folder resources. */
    folders: Folder[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFoldersRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListFoldersRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateFolderRequest {
    $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest";
    /**
     * ID of the cloud to create a folder in.
     * To get the cloud ID, use a [yandex.cloud.resourcemanager.v1.CloudService.List] request.
     */
    cloudId: string;
    /**
     * Name of the folder.
     * The name must be unique within the cloud.
     */
    name: string;
    /** Description of the folder. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateFolderRequest_LabelsEntry {
    $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateFolderMetadata {
    $type: "yandex.cloud.resourcemanager.v1.CreateFolderMetadata";
    /** ID of the folder that is being created. */
    folderId: string;
}
export interface UpdateFolderRequest {
    $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest";
    /**
     * ID of the Folder resource to update.
     * To get the folder ID, use a [FolderService.List] request.
     */
    folderId: string;
    /** Field mask that specifies which fields of the Folder resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the folder.
     * The name must be unique within the cloud.
     */
    name: string;
    /** Description of the folder. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateFolderRequest_LabelsEntry {
    $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateFolderMetadata {
    $type: "yandex.cloud.resourcemanager.v1.UpdateFolderMetadata";
    /** ID of the Folder resource that is being updated. */
    folderId: string;
}
export interface DeleteFolderRequest {
    $type: "yandex.cloud.resourcemanager.v1.DeleteFolderRequest";
    /**
     * ID of the folder to delete.
     * To get the folder ID, use a [FolderService.List] request.
     */
    folderId: string;
    /**
     * The timestamp after which the process of deleting the folder should begin.
     * Until this timestamp, the folder goes into the [Folder.Status.PENDING_DELETION] state and all resources in this
     * folder are stopped. In this state, it is possible to cancel the delete operation without any loss.
     * After this timestamp, the status of the folder will become [Folder.Status.DELETING] and the process of deleting
     * all the resources  of the folder will be started. If [delete_after] is not specified it will be
     * (now + 24 hours). To initiate an immediate deletion [delete_after] must be <= now.
     */
    deleteAfter?: Date;
}
export interface DeleteFolderMetadata {
    $type: "yandex.cloud.resourcemanager.v1.DeleteFolderMetadata";
    /** ID of the folder that is being deleted. */
    folderId: string;
    /** The timestamp after which the process of deleting the folder should begin. */
    deleteAfter?: Date;
}
export interface ListFolderOperationsRequest {
    $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsRequest";
    /** ID of the Folder resource to list operations for. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListFolderOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListFolderOperationsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}
export interface ListFolderOperationsResponse {
    $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsResponse";
    /** List of operations for the specified folder. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFolderOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListFolderOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetFolderRequest: {
    $type: "yandex.cloud.resourcemanager.v1.GetFolderRequest";
    encode(message: GetFolderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFolderRequest;
    fromJSON(object: any): GetFolderRequest;
    toJSON(message: GetFolderRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
    } & {
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId">, never>>(object: I): GetFolderRequest;
};
export declare const ListFoldersRequest: {
    $type: "yandex.cloud.resourcemanager.v1.ListFoldersRequest";
    encode(message: ListFoldersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFoldersRequest;
    fromJSON(object: any): ListFoldersRequest;
    toJSON(message: ListFoldersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        cloudId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        cloudId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "cloudId">, never>>(object: I): ListFoldersRequest;
};
export declare const ListFoldersResponse: {
    $type: "yandex.cloud.resourcemanager.v1.ListFoldersResponse";
    encode(message: ListFoldersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFoldersResponse;
    fromJSON(object: any): ListFoldersResponse;
    toJSON(message: ListFoldersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        folders?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/resourcemanager/v1/folder").Folder_Status | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            cloudId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        folders?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/resourcemanager/v1/folder").Folder_Status | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            cloudId?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/resourcemanager/v1/folder").Folder_Status | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            cloudId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/resourcemanager/v1/folder").Folder_Status | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["folders"][number]["labels"], string | number>, never>) | undefined;
            cloudId?: string | undefined;
        } & Record<Exclude<keyof I["folders"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "labels" | "cloudId">, never>)[] & Record<Exclude<keyof I["folders"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/resourcemanager/v1/folder").Folder_Status | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            cloudId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "folders">, never>>(object: I): ListFoldersResponse;
};
export declare const CreateFolderRequest: {
    $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest";
    encode(message: CreateFolderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFolderRequest;
    fromJSON(object: any): CreateFolderRequest;
    toJSON(message: CreateFolderRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
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
        cloudId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "cloudId">, never>>(object: I): CreateFolderRequest;
};
export declare const CreateFolderRequest_LabelsEntry: {
    $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest.LabelsEntry";
    encode(message: CreateFolderRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFolderRequest_LabelsEntry;
    fromJSON(object: any): CreateFolderRequest_LabelsEntry;
    toJSON(message: CreateFolderRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateFolderRequest_LabelsEntry;
};
export declare const CreateFolderMetadata: {
    $type: "yandex.cloud.resourcemanager.v1.CreateFolderMetadata";
    encode(message: CreateFolderMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFolderMetadata;
    fromJSON(object: any): CreateFolderMetadata;
    toJSON(message: CreateFolderMetadata): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
    } & {
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId">, never>>(object: I): CreateFolderMetadata;
};
export declare const UpdateFolderRequest: {
    $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest";
    encode(message: UpdateFolderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFolderRequest;
    fromJSON(object: any): UpdateFolderRequest;
    toJSON(message: UpdateFolderRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
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
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "updateMask">, never>>(object: I): UpdateFolderRequest;
};
export declare const UpdateFolderRequest_LabelsEntry: {
    $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest.LabelsEntry";
    encode(message: UpdateFolderRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFolderRequest_LabelsEntry;
    fromJSON(object: any): UpdateFolderRequest_LabelsEntry;
    toJSON(message: UpdateFolderRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateFolderRequest_LabelsEntry;
};
export declare const UpdateFolderMetadata: {
    $type: "yandex.cloud.resourcemanager.v1.UpdateFolderMetadata";
    encode(message: UpdateFolderMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFolderMetadata;
    fromJSON(object: any): UpdateFolderMetadata;
    toJSON(message: UpdateFolderMetadata): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
    } & {
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId">, never>>(object: I): UpdateFolderMetadata;
};
export declare const DeleteFolderRequest: {
    $type: "yandex.cloud.resourcemanager.v1.DeleteFolderRequest";
    encode(message: DeleteFolderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFolderRequest;
    fromJSON(object: any): DeleteFolderRequest;
    toJSON(message: DeleteFolderRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        deleteAfter?: Date | undefined;
    } & {
        folderId?: string | undefined;
        deleteAfter?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "deleteAfter">, never>>(object: I): DeleteFolderRequest;
};
export declare const DeleteFolderMetadata: {
    $type: "yandex.cloud.resourcemanager.v1.DeleteFolderMetadata";
    encode(message: DeleteFolderMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFolderMetadata;
    fromJSON(object: any): DeleteFolderMetadata;
    toJSON(message: DeleteFolderMetadata): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        deleteAfter?: Date | undefined;
    } & {
        folderId?: string | undefined;
        deleteAfter?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "deleteAfter">, never>>(object: I): DeleteFolderMetadata;
};
export declare const ListFolderOperationsRequest: {
    $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsRequest";
    encode(message: ListFolderOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFolderOperationsRequest;
    fromJSON(object: any): ListFolderOperationsRequest;
    toJSON(message: ListFolderOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListFolderOperationsRequest;
};
export declare const ListFolderOperationsResponse: {
    $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsResponse";
    encode(message: ListFolderOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFolderOperationsResponse;
    fromJSON(object: any): ListFolderOperationsResponse;
    toJSON(message: ListFolderOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListFolderOperationsResponse;
};
/** A set of methods for managing Folder resources. */
export declare const FolderServiceService: {
    /**
     * Returns the specified Folder resource.
     *
     * To get the list of available Folder resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFolderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFolderRequest;
        readonly responseSerialize: (value: Folder) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Folder;
    };
    /** Retrieves the list of Folder resources in the specified cloud. */
    readonly list: {
        readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFoldersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFoldersRequest;
        readonly responseSerialize: (value: ListFoldersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFoldersResponse;
    };
    /** Creates a folder in the specified cloud. */
    readonly create: {
        readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFolderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFolderRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified folder. */
    readonly update: {
        readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateFolderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateFolderRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified folder. */
    readonly delete: {
        readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFolderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFolderRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified folder. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFolderOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFolderOperationsRequest;
        readonly responseSerialize: (value: ListFolderOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFolderOperationsResponse;
    };
    /** Lists access bindings for the specified folder. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified folder. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified folder. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface FolderServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Folder resource.
     *
     * To get the list of available Folder resources, make a [List] request.
     */
    get: handleUnaryCall<GetFolderRequest, Folder>;
    /** Retrieves the list of Folder resources in the specified cloud. */
    list: handleUnaryCall<ListFoldersRequest, ListFoldersResponse>;
    /** Creates a folder in the specified cloud. */
    create: handleUnaryCall<CreateFolderRequest, Operation>;
    /** Updates the specified folder. */
    update: handleUnaryCall<UpdateFolderRequest, Operation>;
    /** Deletes the specified folder. */
    delete: handleUnaryCall<DeleteFolderRequest, Operation>;
    /** Lists operations for the specified folder. */
    listOperations: handleUnaryCall<ListFolderOperationsRequest, ListFolderOperationsResponse>;
    /** Lists access bindings for the specified folder. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified folder. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified folder. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface FolderServiceClient extends Client {
    /**
     * Returns the specified Folder resource.
     *
     * To get the list of available Folder resources, make a [List] request.
     */
    get(request: GetFolderRequest, callback: (error: ServiceError | null, response: Folder) => void): ClientUnaryCall;
    get(request: GetFolderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Folder) => void): ClientUnaryCall;
    get(request: GetFolderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Folder) => void): ClientUnaryCall;
    /** Retrieves the list of Folder resources in the specified cloud. */
    list(request: ListFoldersRequest, callback: (error: ServiceError | null, response: ListFoldersResponse) => void): ClientUnaryCall;
    list(request: ListFoldersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFoldersResponse) => void): ClientUnaryCall;
    list(request: ListFoldersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFoldersResponse) => void): ClientUnaryCall;
    /** Creates a folder in the specified cloud. */
    create(request: CreateFolderRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFolderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFolderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified folder. */
    update(request: UpdateFolderRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFolderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFolderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified folder. */
    delete(request: DeleteFolderRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFolderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFolderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified folder. */
    listOperations(request: ListFolderOperationsRequest, callback: (error: ServiceError | null, response: ListFolderOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFolderOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFolderOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFolderOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFolderOperationsResponse) => void): ClientUnaryCall;
    /** Lists access bindings for the specified folder. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified folder. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified folder. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const FolderServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): FolderServiceClient;
    service: typeof FolderServiceService;
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
