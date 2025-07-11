/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Resource, Task } from "../../../../yandex/cloud/backup/v1/resource";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.backup.v1";
export interface ListResourcesRequest {
    $type: "yandex.cloud.backup.v1.ListResourcesRequest";
    /** Folder ID. */
    folderId: string;
    /** Number of results per page. */
    pageSize: number;
    /** Token for the results page. */
    pageToken: string;
}
export interface ListResourcesResponse {
    $type: "yandex.cloud.backup.v1.ListResourcesResponse";
    /** Set of resource parameters. */
    resources: Resource[];
    /** Token for the next results page. */
    nextPageToken: string;
}
export interface GetResourceRequest {
    $type: "yandex.cloud.backup.v1.GetResourceRequest";
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
}
export interface GetResourceResponse {
    $type: "yandex.cloud.backup.v1.GetResourceResponse";
    /** Set of resource parameters. */
    resource?: Resource;
}
export interface DeleteResourceRequest {
    $type: "yandex.cloud.backup.v1.DeleteResourceRequest";
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
    /** Resource ID is used to identify Compute Cloud instance in backup service. */
    resourceId: string;
}
export interface DeleteResourceMetadata {
    $type: "yandex.cloud.backup.v1.DeleteResourceMetadata";
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
}
export interface ListTasksRequest {
    $type: "yandex.cloud.backup.v1.ListTasksRequest";
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
    /** Number of results per page. */
    pageSize: number;
    /** Token for the results page. */
    pageToken: string;
}
export interface ListTasksResponse {
    $type: "yandex.cloud.backup.v1.ListTasksResponse";
    /** Set of tasks parameters. */
    tasks: Task[];
    /** Token for the next results page. */
    nextPageToken: string;
}
export interface ListDirectoryRequest {
    $type: "yandex.cloud.backup.v1.ListDirectoryRequest";
    /** Folder ID. */
    folderId: string;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
    /** Path to list items in. */
    path: string;
}
export interface ListDirectoryResponse {
    $type: "yandex.cloud.backup.v1.ListDirectoryResponse";
    items: ListDirectoryResponse_FilesystemItem[];
}
export interface ListDirectoryResponse_FilesystemItem {
    $type: "yandex.cloud.backup.v1.ListDirectoryResponse.FilesystemItem";
    /** Item name. */
    name: string;
    /** Might be Volume, Directory of File. */
    type: ListDirectoryResponse_FilesystemItem_Type;
    /** Might be Directory or File. */
    fileType: ListDirectoryResponse_FilesystemItem_Type;
    size: number;
}
export declare enum ListDirectoryResponse_FilesystemItem_Type {
    TYPE_UNSPECIFIED = 0,
    VOLUME = 1,
    DIRECTORY = 2,
    FILE = 3,
    UNRECOGNIZED = -1
}
export declare function listDirectoryResponse_FilesystemItem_TypeFromJSON(object: any): ListDirectoryResponse_FilesystemItem_Type;
export declare function listDirectoryResponse_FilesystemItem_TypeToJSON(object: ListDirectoryResponse_FilesystemItem_Type): string;
export interface CreateDirectoryRequest {
    $type: "yandex.cloud.backup.v1.CreateDirectoryRequest";
    /** Folder ID. */
    folderId: string;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
    /** Path to create directory in. */
    path: string;
}
export interface CreateDirectoryMetadata {
    $type: "yandex.cloud.backup.v1.CreateDirectoryMetadata";
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
    /** Path to create directory metadata in. */
    path: string;
}
export declare const ListResourcesRequest: {
    $type: "yandex.cloud.backup.v1.ListResourcesRequest";
    encode(message: ListResourcesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcesRequest;
    fromJSON(object: any): ListResourcesRequest;
    toJSON(message: ListResourcesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListResourcesRequest;
};
export declare const ListResourcesResponse: {
    $type: "yandex.cloud.backup.v1.ListResourcesResponse";
    encode(message: ListResourcesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcesResponse;
    fromJSON(object: any): ListResourcesResponse;
    toJSON(message: ListResourcesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        resources?: {
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Resource_Status | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            computeInstanceId?: string | undefined;
            online?: boolean | undefined;
            statusDetails?: string | undefined;
            statusProgress?: number | undefined;
            isActive?: boolean | undefined;
            lastBackupTime?: Date | undefined;
            nextBackupTime?: Date | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        resources?: ({
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Resource_Status | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            computeInstanceId?: string | undefined;
            online?: boolean | undefined;
            statusDetails?: string | undefined;
            statusProgress?: number | undefined;
            isActive?: boolean | undefined;
            lastBackupTime?: Date | undefined;
            nextBackupTime?: Date | undefined;
        }[] & ({
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Resource_Status | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            computeInstanceId?: string | undefined;
            online?: boolean | undefined;
            statusDetails?: string | undefined;
            statusProgress?: number | undefined;
            isActive?: boolean | undefined;
            lastBackupTime?: Date | undefined;
            nextBackupTime?: Date | undefined;
        } & {
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Resource_Status | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            computeInstanceId?: string | undefined;
            online?: boolean | undefined;
            statusDetails?: string | undefined;
            statusProgress?: number | undefined;
            isActive?: boolean | undefined;
            lastBackupTime?: Date | undefined;
            nextBackupTime?: Date | undefined;
        } & Record<Exclude<keyof I["resources"][number], "$type" | "resourceId" | "createdAt" | "status" | "enabled" | "updatedAt" | "computeInstanceId" | "online" | "statusDetails" | "statusProgress" | "isActive" | "lastBackupTime" | "nextBackupTime">, never>)[] & Record<Exclude<keyof I["resources"], "$type" | keyof {
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Resource_Status | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            computeInstanceId?: string | undefined;
            online?: boolean | undefined;
            statusDetails?: string | undefined;
            statusProgress?: number | undefined;
            isActive?: boolean | undefined;
            lastBackupTime?: Date | undefined;
            nextBackupTime?: Date | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "resources">, never>>(object: I): ListResourcesResponse;
};
export declare const GetResourceRequest: {
    $type: "yandex.cloud.backup.v1.GetResourceRequest";
    encode(message: GetResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetResourceRequest;
    fromJSON(object: any): GetResourceRequest;
    toJSON(message: GetResourceRequest): unknown;
    fromPartial<I extends {
        computeInstanceId?: string | undefined;
    } & {
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "computeInstanceId">, never>>(object: I): GetResourceRequest;
};
export declare const GetResourceResponse: {
    $type: "yandex.cloud.backup.v1.GetResourceResponse";
    encode(message: GetResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetResourceResponse;
    fromJSON(object: any): GetResourceResponse;
    toJSON(message: GetResourceResponse): unknown;
    fromPartial<I extends {
        resource?: {
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Resource_Status | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            computeInstanceId?: string | undefined;
            online?: boolean | undefined;
            statusDetails?: string | undefined;
            statusProgress?: number | undefined;
            isActive?: boolean | undefined;
            lastBackupTime?: Date | undefined;
            nextBackupTime?: Date | undefined;
        } | undefined;
    } & {
        resource?: ({
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Resource_Status | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            computeInstanceId?: string | undefined;
            online?: boolean | undefined;
            statusDetails?: string | undefined;
            statusProgress?: number | undefined;
            isActive?: boolean | undefined;
            lastBackupTime?: Date | undefined;
            nextBackupTime?: Date | undefined;
        } & {
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Resource_Status | undefined;
            enabled?: boolean | undefined;
            updatedAt?: Date | undefined;
            computeInstanceId?: string | undefined;
            online?: boolean | undefined;
            statusDetails?: string | undefined;
            statusProgress?: number | undefined;
            isActive?: boolean | undefined;
            lastBackupTime?: Date | undefined;
            nextBackupTime?: Date | undefined;
        } & Record<Exclude<keyof I["resource"], "$type" | "resourceId" | "createdAt" | "status" | "enabled" | "updatedAt" | "computeInstanceId" | "online" | "statusDetails" | "statusProgress" | "isActive" | "lastBackupTime" | "nextBackupTime">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resource">, never>>(object: I): GetResourceResponse;
};
export declare const DeleteResourceRequest: {
    $type: "yandex.cloud.backup.v1.DeleteResourceRequest";
    encode(message: DeleteResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteResourceRequest;
    fromJSON(object: any): DeleteResourceRequest;
    toJSON(message: DeleteResourceRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "computeInstanceId">, never>>(object: I): DeleteResourceRequest;
};
export declare const DeleteResourceMetadata: {
    $type: "yandex.cloud.backup.v1.DeleteResourceMetadata";
    encode(message: DeleteResourceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteResourceMetadata;
    fromJSON(object: any): DeleteResourceMetadata;
    toJSON(message: DeleteResourceMetadata): unknown;
    fromPartial<I extends {
        computeInstanceId?: string | undefined;
    } & {
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "computeInstanceId">, never>>(object: I): DeleteResourceMetadata;
};
export declare const ListTasksRequest: {
    $type: "yandex.cloud.backup.v1.ListTasksRequest";
    encode(message: ListTasksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTasksRequest;
    fromJSON(object: any): ListTasksRequest;
    toJSON(message: ListTasksRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "computeInstanceId">, never>>(object: I): ListTasksRequest;
};
export declare const ListTasksResponse: {
    $type: "yandex.cloud.backup.v1.ListTasksResponse";
    encode(message: ListTasksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTasksResponse;
    fromJSON(object: any): ListTasksResponse;
    toJSON(message: ListTasksResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        tasks?: {
            id?: number | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/resource").Task_Type | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Task_Status | undefined;
            updatedAt?: Date | undefined;
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
            cancellable?: boolean | undefined;
            progress?: {
                current?: number | undefined;
                total?: number | undefined;
            } | undefined;
            enqueuedAt?: Date | undefined;
            startedAt?: Date | undefined;
            completedAt?: Date | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        tasks?: ({
            id?: number | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/resource").Task_Type | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Task_Status | undefined;
            updatedAt?: Date | undefined;
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
            cancellable?: boolean | undefined;
            progress?: {
                current?: number | undefined;
                total?: number | undefined;
            } | undefined;
            enqueuedAt?: Date | undefined;
            startedAt?: Date | undefined;
            completedAt?: Date | undefined;
        }[] & ({
            id?: number | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/resource").Task_Type | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Task_Status | undefined;
            updatedAt?: Date | undefined;
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
            cancellable?: boolean | undefined;
            progress?: {
                current?: number | undefined;
                total?: number | undefined;
            } | undefined;
            enqueuedAt?: Date | undefined;
            startedAt?: Date | undefined;
            completedAt?: Date | undefined;
        } & {
            id?: number | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/resource").Task_Type | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Task_Status | undefined;
            updatedAt?: Date | undefined;
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
            cancellable?: boolean | undefined;
            progress?: ({
                current?: number | undefined;
                total?: number | undefined;
            } & {
                current?: number | undefined;
                total?: number | undefined;
            } & Record<Exclude<keyof I["tasks"][number]["progress"], "$type" | "current" | "total">, never>) | undefined;
            enqueuedAt?: Date | undefined;
            startedAt?: Date | undefined;
            completedAt?: Date | undefined;
        } & Record<Exclude<keyof I["tasks"][number], "$type" | "id" | "type" | "status" | "updatedAt" | "policyId" | "computeInstanceId" | "cancellable" | "progress" | "enqueuedAt" | "startedAt" | "completedAt">, never>)[] & Record<Exclude<keyof I["tasks"], "$type" | keyof {
            id?: number | undefined;
            type?: import("../../../../yandex/cloud/backup/v1/resource").Task_Type | undefined;
            status?: import("../../../../yandex/cloud/backup/v1/resource").Task_Status | undefined;
            updatedAt?: Date | undefined;
            policyId?: string | undefined;
            computeInstanceId?: string | undefined;
            cancellable?: boolean | undefined;
            progress?: {
                current?: number | undefined;
                total?: number | undefined;
            } | undefined;
            enqueuedAt?: Date | undefined;
            startedAt?: Date | undefined;
            completedAt?: Date | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "tasks">, never>>(object: I): ListTasksResponse;
};
export declare const ListDirectoryRequest: {
    $type: "yandex.cloud.backup.v1.ListDirectoryRequest";
    encode(message: ListDirectoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDirectoryRequest;
    fromJSON(object: any): ListDirectoryRequest;
    toJSON(message: ListDirectoryRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        path?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        folderId?: string | undefined;
        path?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "path" | "computeInstanceId">, never>>(object: I): ListDirectoryRequest;
};
export declare const ListDirectoryResponse: {
    $type: "yandex.cloud.backup.v1.ListDirectoryResponse";
    encode(message: ListDirectoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDirectoryResponse;
    fromJSON(object: any): ListDirectoryResponse;
    toJSON(message: ListDirectoryResponse): unknown;
    fromPartial<I extends {
        items?: {
            type?: ListDirectoryResponse_FilesystemItem_Type | undefined;
            name?: string | undefined;
            size?: number | undefined;
            fileType?: ListDirectoryResponse_FilesystemItem_Type | undefined;
        }[] | undefined;
    } & {
        items?: ({
            type?: ListDirectoryResponse_FilesystemItem_Type | undefined;
            name?: string | undefined;
            size?: number | undefined;
            fileType?: ListDirectoryResponse_FilesystemItem_Type | undefined;
        }[] & ({
            type?: ListDirectoryResponse_FilesystemItem_Type | undefined;
            name?: string | undefined;
            size?: number | undefined;
            fileType?: ListDirectoryResponse_FilesystemItem_Type | undefined;
        } & {
            type?: ListDirectoryResponse_FilesystemItem_Type | undefined;
            name?: string | undefined;
            size?: number | undefined;
            fileType?: ListDirectoryResponse_FilesystemItem_Type | undefined;
        } & Record<Exclude<keyof I["items"][number], "$type" | "type" | "name" | "size" | "fileType">, never>)[] & Record<Exclude<keyof I["items"], "$type" | keyof {
            type?: ListDirectoryResponse_FilesystemItem_Type | undefined;
            name?: string | undefined;
            size?: number | undefined;
            fileType?: ListDirectoryResponse_FilesystemItem_Type | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "items">, never>>(object: I): ListDirectoryResponse;
};
export declare const ListDirectoryResponse_FilesystemItem: {
    $type: "yandex.cloud.backup.v1.ListDirectoryResponse.FilesystemItem";
    encode(message: ListDirectoryResponse_FilesystemItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDirectoryResponse_FilesystemItem;
    fromJSON(object: any): ListDirectoryResponse_FilesystemItem;
    toJSON(message: ListDirectoryResponse_FilesystemItem): unknown;
    fromPartial<I extends {
        type?: ListDirectoryResponse_FilesystemItem_Type | undefined;
        name?: string | undefined;
        size?: number | undefined;
        fileType?: ListDirectoryResponse_FilesystemItem_Type | undefined;
    } & {
        type?: ListDirectoryResponse_FilesystemItem_Type | undefined;
        name?: string | undefined;
        size?: number | undefined;
        fileType?: ListDirectoryResponse_FilesystemItem_Type | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "name" | "size" | "fileType">, never>>(object: I): ListDirectoryResponse_FilesystemItem;
};
export declare const CreateDirectoryRequest: {
    $type: "yandex.cloud.backup.v1.CreateDirectoryRequest";
    encode(message: CreateDirectoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDirectoryRequest;
    fromJSON(object: any): CreateDirectoryRequest;
    toJSON(message: CreateDirectoryRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        path?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        folderId?: string | undefined;
        path?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "path" | "computeInstanceId">, never>>(object: I): CreateDirectoryRequest;
};
export declare const CreateDirectoryMetadata: {
    $type: "yandex.cloud.backup.v1.CreateDirectoryMetadata";
    encode(message: CreateDirectoryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDirectoryMetadata;
    fromJSON(object: any): CreateDirectoryMetadata;
    toJSON(message: CreateDirectoryMetadata): unknown;
    fromPartial<I extends {
        path?: string | undefined;
        computeInstanceId?: string | undefined;
    } & {
        path?: string | undefined;
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "path" | "computeInstanceId">, never>>(object: I): CreateDirectoryMetadata;
};
/** A set of methods for managing backup resources: [Compute Cloud instances](/docs/backup/concepts/vm-connection#os). */
export declare const ResourceServiceService: {
    /** List resources: Compute Cloud instances. */
    readonly list: {
        readonly path: "/yandex.cloud.backup.v1.ResourceService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListResourcesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListResourcesRequest;
        readonly responseSerialize: (value: ListResourcesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListResourcesResponse;
    };
    /** Get specific Compute Cloud instance. */
    readonly get: {
        readonly path: "/yandex.cloud.backup.v1.ResourceService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetResourceRequest;
        readonly responseSerialize: (value: GetResourceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetResourceResponse;
    };
    /**
     * Delete specific Compute Cloud instance from Cloud Backup. It does not delete
     * instance from Cloud Compute service.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.backup.v1.ResourceService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteResourceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List tasks of resources. */
    readonly listTasks: {
        readonly path: "/yandex.cloud.backup.v1.ResourceService/ListTasks";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTasksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTasksRequest;
        readonly responseSerialize: (value: ListTasksResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTasksResponse;
    };
    /**
     * ListDirectory returns all subdirectories found in requested directory identified
     * by the id.
     */
    readonly listDirectory: {
        readonly path: "/yandex.cloud.backup.v1.ResourceService/ListDirectory";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDirectoryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDirectoryRequest;
        readonly responseSerialize: (value: ListDirectoryResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDirectoryResponse;
    };
    /** CreateDirectory creates new directory by requested path. */
    readonly createDirectory: {
        readonly path: "/yandex.cloud.backup.v1.ResourceService/CreateDirectory";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDirectoryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDirectoryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ResourceServiceServer extends UntypedServiceImplementation {
    /** List resources: Compute Cloud instances. */
    list: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
    /** Get specific Compute Cloud instance. */
    get: handleUnaryCall<GetResourceRequest, GetResourceResponse>;
    /**
     * Delete specific Compute Cloud instance from Cloud Backup. It does not delete
     * instance from Cloud Compute service.
     */
    delete: handleUnaryCall<DeleteResourceRequest, Operation>;
    /** List tasks of resources. */
    listTasks: handleUnaryCall<ListTasksRequest, ListTasksResponse>;
    /**
     * ListDirectory returns all subdirectories found in requested directory identified
     * by the id.
     */
    listDirectory: handleUnaryCall<ListDirectoryRequest, ListDirectoryResponse>;
    /** CreateDirectory creates new directory by requested path. */
    createDirectory: handleUnaryCall<CreateDirectoryRequest, Operation>;
}
export interface ResourceServiceClient extends Client {
    /** List resources: Compute Cloud instances. */
    list(request: ListResourcesRequest, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    list(request: ListResourcesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    list(request: ListResourcesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    /** Get specific Compute Cloud instance. */
    get(request: GetResourceRequest, callback: (error: ServiceError | null, response: GetResourceResponse) => void): ClientUnaryCall;
    get(request: GetResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetResourceResponse) => void): ClientUnaryCall;
    get(request: GetResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetResourceResponse) => void): ClientUnaryCall;
    /**
     * Delete specific Compute Cloud instance from Cloud Backup. It does not delete
     * instance from Cloud Compute service.
     */
    delete(request: DeleteResourceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List tasks of resources. */
    listTasks(request: ListTasksRequest, callback: (error: ServiceError | null, response: ListTasksResponse) => void): ClientUnaryCall;
    listTasks(request: ListTasksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTasksResponse) => void): ClientUnaryCall;
    listTasks(request: ListTasksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTasksResponse) => void): ClientUnaryCall;
    /**
     * ListDirectory returns all subdirectories found in requested directory identified
     * by the id.
     */
    listDirectory(request: ListDirectoryRequest, callback: (error: ServiceError | null, response: ListDirectoryResponse) => void): ClientUnaryCall;
    listDirectory(request: ListDirectoryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDirectoryResponse) => void): ClientUnaryCall;
    listDirectory(request: ListDirectoryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDirectoryResponse) => void): ClientUnaryCall;
    /** CreateDirectory creates new directory by requested path. */
    createDirectory(request: CreateDirectoryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createDirectory(request: CreateDirectoryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createDirectory(request: CreateDirectoryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ResourceServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ResourceServiceClient;
    service: typeof ResourceServiceService;
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
