/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Resources, Connectivity, ProvisionPolicy, ScalingPolicy, LogOptions, Command, Args, Container, Revision, Secret, StorageMount } from "../../../../../yandex/cloud/serverless/containers/v1/container";
import { Duration } from "../../../../../google/protobuf/duration";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.serverless.containers.v1";
export interface GetContainerRequest {
    $type: "yandex.cloud.serverless.containers.v1.GetContainerRequest";
    /**
     * ID of the container to return.
     *
     * To get a container ID make a [ContainerService.List] request.
     */
    containerId: string;
}
export interface ListContainersRequest {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRequest";
    /**
     * ID of the folder to list containers in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListContainersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListContainersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters containers listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Container.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name="my-container"`.
     */
    filter: string;
}
export interface ListContainersResponse {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersResponse";
    /** List of containers in the specified folder. */
    containers: Container[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListContainersRequest.page_size], use `nextPageToken` as the value
     * for the [ListContainersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateContainerRequest {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerRequest";
    /**
     * ID of the folder to create a container in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the container.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the container. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateContainerRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateContainerMetadata {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerMetadata";
    /** ID of the container that is being created. */
    containerId: string;
}
export interface UpdateContainerRequest {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerRequest";
    /**
     * ID of the container to update.
     *
     * To get a container ID make a [ContainerService.List] request.
     */
    containerId: string;
    /** Field mask that specifies which attributes of the container should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the container.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description for the container. */
    description: string;
    /**
     * Container labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label, request the current set of labels with a [ContainerService.Get] request.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateContainerRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateContainerMetadata {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerMetadata";
    /** ID of the container that is being updated. */
    containerId: string;
}
export interface DeleteContainerRequest {
    $type: "yandex.cloud.serverless.containers.v1.DeleteContainerRequest";
    /**
     * ID of the container to delete.
     * To get a container ID make a [ContainerService.List] request.
     */
    containerId: string;
}
export interface DeleteContainerMetadata {
    $type: "yandex.cloud.serverless.containers.v1.DeleteContainerMetadata";
    /** ID of the container that is being deleted. */
    containerId: string;
}
export interface GetContainerRevisionRequest {
    $type: "yandex.cloud.serverless.containers.v1.GetContainerRevisionRequest";
    /**
     * ID of the revision to return.
     *
     * To get a revision ID make a [ContainerService.ListRevisions] request.
     */
    containerRevisionId: string;
}
export interface ListContainersRevisionsRequest {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRevisionsRequest";
    /**
     * ID of the folder to list container revisions for.
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string | undefined;
    /**
     * ID of the container to list revisions for.
     * To get a container ID use a [ContainerService.List] request.
     */
    containerId: string | undefined;
    /**
     * The maximum number of results per page to return. If the number of available results
     * is larger than `pageSize`, the service returns a [ListContainersRevisionsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListContainersRevisionsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Revision.status] and [Revision.runtime] fields.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `status="ACTIVE"`.
     */
    filter: string;
}
export interface ListContainersRevisionsResponse {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRevisionsResponse";
    /** List of revisions for the specified folder or container. */
    revisions: Revision[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListContainersRevisionsRequest.page_size], use `nextPageToken` as the value
     * for the [ListContainersRevisionsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeployContainerRevisionRequest {
    $type: "yandex.cloud.serverless.containers.v1.DeployContainerRevisionRequest";
    /**
     * ID of the container to create a revision for.
     *
     * To get a container ID, make a [ContainerService.List] request.
     */
    containerId: string;
    /** Description of the revision. */
    description: string;
    /** Resources allocated to the revision. */
    resources?: Resources;
    /**
     * Timeout for the execution of the revision.
     *
     * If the timeout is exceeded, Serverless Containers responds with a 504 HTTP code.
     */
    executionTimeout?: Duration;
    /** ID of the service account to associate with the revision. */
    serviceAccountId: string;
    /** Image configuration for the revision. */
    imageSpec?: ImageSpec;
    /**
     * The number of concurrent requests allowed per container instance.
     *
     * The default value is 1.
     */
    concurrency: number;
    /** Yandex Lockbox secrets to be used by the revision. */
    secrets: Secret[];
    /** Network access. If specified the revision will be attached to specified network/subnet(s). */
    connectivity?: Connectivity;
    /**
     * Policy for provisioning instances of the revision.
     *
     * The policy is only applied when the revision is ACTIVE.
     */
    provisionPolicy?: ProvisionPolicy;
    /** Policy for scaling instances of the revision. */
    scalingPolicy?: ScalingPolicy;
    /** Options for logging from the container. */
    logOptions?: LogOptions;
    /** S3 mounts to be used by the version. */
    storageMounts: StorageMount[];
}
/** Revision image specification. */
export interface ImageSpec {
    $type: "yandex.cloud.serverless.containers.v1.ImageSpec";
    /** Image URL, that is used by the revision. */
    imageUrl: string;
    /** Override for the image's ENTRYPOINT. */
    command?: Command;
    /** Override for the image's CMD. */
    args?: Args;
    /** Additional environment for the container. */
    environment: {
        [key: string]: string;
    };
    /** Override for the image's WORKDIR. */
    workingDir: string;
}
export interface ImageSpec_EnvironmentEntry {
    $type: "yandex.cloud.serverless.containers.v1.ImageSpec.EnvironmentEntry";
    key: string;
    value: string;
}
export interface DeployContainerRevisionMetadata {
    $type: "yandex.cloud.serverless.containers.v1.DeployContainerRevisionMetadata";
    /** ID of the revision that is being created. */
    containerRevisionId: string;
}
export interface RollbackContainerRequest {
    $type: "yandex.cloud.serverless.containers.v1.RollbackContainerRequest";
    /**
     * ID of the container to rollback to an old revision.
     *
     * To get a container ID, make a [ContainerService.List] request.
     */
    containerId: string;
    /**
     * ID of the revision to rollback to.
     *
     * To get a revision ID make a [ContainerService.ListRevisions] request.
     */
    revisionId: string;
}
export interface RollbackContainerMetadata {
    $type: "yandex.cloud.serverless.containers.v1.RollbackContainerMetadata";
    /** ID of the container that is being rolled back. */
    containerId: string;
    /** ID of the revision that the container is being rolled back to. */
    revisionId: string;
}
export interface ListContainerOperationsRequest {
    $type: "yandex.cloud.serverless.containers.v1.ListContainerOperationsRequest";
    /** ID of the container to list operations for. */
    containerId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListContainerOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListContainerOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}
export interface ListContainerOperationsResponse {
    $type: "yandex.cloud.serverless.containers.v1.ListContainerOperationsResponse";
    /** List of operations for the specified container. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListContainerOperationsRequest.page_size], use `nextPageToken` as the value
     * for the [ListContainerOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetContainerRequest: {
    $type: "yandex.cloud.serverless.containers.v1.GetContainerRequest";
    encode(message: GetContainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetContainerRequest;
    fromJSON(object: any): GetContainerRequest;
    toJSON(message: GetContainerRequest): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
    } & {
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId">, never>>(object: I): GetContainerRequest;
};
export declare const ListContainersRequest: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRequest";
    encode(message: ListContainersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainersRequest;
    fromJSON(object: any): ListContainersRequest;
    toJSON(message: ListContainersRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListContainersRequest;
};
export declare const ListContainersResponse: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersResponse";
    encode(message: ListContainersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainersResponse;
    fromJSON(object: any): ListContainersResponse;
    toJSON(message: ListContainersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        containers?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Container_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            url?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        containers?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Container_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            url?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Container_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            url?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Container_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["containers"][number]["labels"], string | number>, never>) | undefined;
            url?: string | undefined;
        } & Record<Exclude<keyof I["containers"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "url">, never>)[] & Record<Exclude<keyof I["containers"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Container_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            url?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "containers">, never>>(object: I): ListContainersResponse;
};
export declare const CreateContainerRequest: {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerRequest";
    encode(message: CreateContainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateContainerRequest;
    fromJSON(object: any): CreateContainerRequest;
    toJSON(message: CreateContainerRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels">, never>>(object: I): CreateContainerRequest;
};
export declare const CreateContainerRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerRequest.LabelsEntry";
    encode(message: CreateContainerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateContainerRequest_LabelsEntry;
    fromJSON(object: any): CreateContainerRequest_LabelsEntry;
    toJSON(message: CreateContainerRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateContainerRequest_LabelsEntry;
};
export declare const CreateContainerMetadata: {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerMetadata";
    encode(message: CreateContainerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateContainerMetadata;
    fromJSON(object: any): CreateContainerMetadata;
    toJSON(message: CreateContainerMetadata): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
    } & {
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId">, never>>(object: I): CreateContainerMetadata;
};
export declare const UpdateContainerRequest: {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerRequest";
    encode(message: UpdateContainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateContainerRequest;
    fromJSON(object: any): UpdateContainerRequest;
    toJSON(message: UpdateContainerRequest): unknown;
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
        containerId?: string | undefined;
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
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "containerId">, never>>(object: I): UpdateContainerRequest;
};
export declare const UpdateContainerRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerRequest.LabelsEntry";
    encode(message: UpdateContainerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateContainerRequest_LabelsEntry;
    fromJSON(object: any): UpdateContainerRequest_LabelsEntry;
    toJSON(message: UpdateContainerRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateContainerRequest_LabelsEntry;
};
export declare const UpdateContainerMetadata: {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerMetadata";
    encode(message: UpdateContainerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateContainerMetadata;
    fromJSON(object: any): UpdateContainerMetadata;
    toJSON(message: UpdateContainerMetadata): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
    } & {
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId">, never>>(object: I): UpdateContainerMetadata;
};
export declare const DeleteContainerRequest: {
    $type: "yandex.cloud.serverless.containers.v1.DeleteContainerRequest";
    encode(message: DeleteContainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteContainerRequest;
    fromJSON(object: any): DeleteContainerRequest;
    toJSON(message: DeleteContainerRequest): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
    } & {
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId">, never>>(object: I): DeleteContainerRequest;
};
export declare const DeleteContainerMetadata: {
    $type: "yandex.cloud.serverless.containers.v1.DeleteContainerMetadata";
    encode(message: DeleteContainerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteContainerMetadata;
    fromJSON(object: any): DeleteContainerMetadata;
    toJSON(message: DeleteContainerMetadata): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
    } & {
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId">, never>>(object: I): DeleteContainerMetadata;
};
export declare const GetContainerRevisionRequest: {
    $type: "yandex.cloud.serverless.containers.v1.GetContainerRevisionRequest";
    encode(message: GetContainerRevisionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetContainerRevisionRequest;
    fromJSON(object: any): GetContainerRevisionRequest;
    toJSON(message: GetContainerRevisionRequest): unknown;
    fromPartial<I extends {
        containerRevisionId?: string | undefined;
    } & {
        containerRevisionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerRevisionId">, never>>(object: I): GetContainerRevisionRequest;
};
export declare const ListContainersRevisionsRequest: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRevisionsRequest";
    encode(message: ListContainersRevisionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainersRevisionsRequest;
    fromJSON(object: any): ListContainersRevisionsRequest;
    toJSON(message: ListContainersRevisionsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        containerId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "containerId">, never>>(object: I): ListContainersRevisionsRequest;
};
export declare const ListContainersRevisionsResponse: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRevisionsResponse";
    encode(message: ListContainersRevisionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainersRevisionsResponse;
    fromJSON(object: any): ListContainersRevisionsResponse;
    toJSON(message: ListContainersRevisionsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        revisions?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Revision_Status | undefined;
            image?: {
                imageUrl?: string | undefined;
                args?: {
                    args?: string[] | undefined;
                } | undefined;
                environment?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                imageDigest?: string | undefined;
                command?: {
                    command?: string[] | undefined;
                } | undefined;
                workingDir?: string | undefined;
            } | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
            } | undefined;
            serviceAccountId?: string | undefined;
            secrets?: {
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            }[] | undefined;
            connectivity?: {
                networkId?: string | undefined;
                subnetIds?: string[] | undefined;
            } | undefined;
            containerId?: string | undefined;
            concurrency?: number | undefined;
            executionTimeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            provisionPolicy?: {
                minInstances?: number | undefined;
            } | undefined;
            scalingPolicy?: {
                zoneInstancesLimit?: number | undefined;
                zoneRequestsLimit?: number | undefined;
            } | undefined;
            storageMounts?: {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointPath?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        revisions?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Revision_Status | undefined;
            image?: {
                imageUrl?: string | undefined;
                args?: {
                    args?: string[] | undefined;
                } | undefined;
                environment?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                imageDigest?: string | undefined;
                command?: {
                    command?: string[] | undefined;
                } | undefined;
                workingDir?: string | undefined;
            } | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
            } | undefined;
            serviceAccountId?: string | undefined;
            secrets?: {
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            }[] | undefined;
            connectivity?: {
                networkId?: string | undefined;
                subnetIds?: string[] | undefined;
            } | undefined;
            containerId?: string | undefined;
            concurrency?: number | undefined;
            executionTimeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            provisionPolicy?: {
                minInstances?: number | undefined;
            } | undefined;
            scalingPolicy?: {
                zoneInstancesLimit?: number | undefined;
                zoneRequestsLimit?: number | undefined;
            } | undefined;
            storageMounts?: {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointPath?: string | undefined;
            }[] | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Revision_Status | undefined;
            image?: {
                imageUrl?: string | undefined;
                args?: {
                    args?: string[] | undefined;
                } | undefined;
                environment?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                imageDigest?: string | undefined;
                command?: {
                    command?: string[] | undefined;
                } | undefined;
                workingDir?: string | undefined;
            } | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
            } | undefined;
            serviceAccountId?: string | undefined;
            secrets?: {
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            }[] | undefined;
            connectivity?: {
                networkId?: string | undefined;
                subnetIds?: string[] | undefined;
            } | undefined;
            containerId?: string | undefined;
            concurrency?: number | undefined;
            executionTimeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            provisionPolicy?: {
                minInstances?: number | undefined;
            } | undefined;
            scalingPolicy?: {
                zoneInstancesLimit?: number | undefined;
                zoneRequestsLimit?: number | undefined;
            } | undefined;
            storageMounts?: {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointPath?: string | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Revision_Status | undefined;
            image?: ({
                imageUrl?: string | undefined;
                args?: {
                    args?: string[] | undefined;
                } | undefined;
                environment?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                imageDigest?: string | undefined;
                command?: {
                    command?: string[] | undefined;
                } | undefined;
                workingDir?: string | undefined;
            } & {
                imageUrl?: string | undefined;
                args?: ({
                    args?: string[] | undefined;
                } & {
                    args?: (string[] & string[] & Record<Exclude<keyof I["revisions"][number]["image"]["args"]["args"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["revisions"][number]["image"]["args"], "$type" | "args">, never>) | undefined;
                environment?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["revisions"][number]["image"]["environment"], string | number>, never>) | undefined;
                imageDigest?: string | undefined;
                command?: ({
                    command?: string[] | undefined;
                } & {
                    command?: (string[] & string[] & Record<Exclude<keyof I["revisions"][number]["image"]["command"]["command"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["revisions"][number]["image"]["command"], "$type" | "command">, never>) | undefined;
                workingDir?: string | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["image"], "$type" | "imageUrl" | "args" | "environment" | "imageDigest" | "command" | "workingDir">, never>) | undefined;
            logOptions?: ({
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } & {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["logOptions"], "$type" | "folderId" | "logGroupId" | "disabled" | "minLevel">, never>) | undefined;
            resources?: ({
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
            } & {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["resources"], "$type" | "memory" | "cores" | "coreFraction">, never>) | undefined;
            serviceAccountId?: string | undefined;
            secrets?: ({
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            }[] & ({
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            } & {
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["secrets"][number], "$type" | "id" | "key" | "versionId" | "environmentVariable">, never>)[] & Record<Exclude<keyof I["revisions"][number]["secrets"], "$type" | keyof {
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            }[]>, never>) | undefined;
            connectivity?: ({
                networkId?: string | undefined;
                subnetIds?: string[] | undefined;
            } & {
                networkId?: string | undefined;
                subnetIds?: (string[] & string[] & Record<Exclude<keyof I["revisions"][number]["connectivity"]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["connectivity"], "$type" | "networkId" | "subnetIds">, never>) | undefined;
            containerId?: string | undefined;
            concurrency?: number | undefined;
            executionTimeout?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["executionTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
            provisionPolicy?: ({
                minInstances?: number | undefined;
            } & {
                minInstances?: number | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["provisionPolicy"], "$type" | "minInstances">, never>) | undefined;
            scalingPolicy?: ({
                zoneInstancesLimit?: number | undefined;
                zoneRequestsLimit?: number | undefined;
            } & {
                zoneInstancesLimit?: number | undefined;
                zoneRequestsLimit?: number | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["scalingPolicy"], "$type" | "zoneInstancesLimit" | "zoneRequestsLimit">, never>) | undefined;
            storageMounts?: ({
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointPath?: string | undefined;
            }[] & ({
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointPath?: string | undefined;
            } & {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointPath?: string | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["storageMounts"][number], "$type" | "prefix" | "bucketId" | "readOnly" | "mountPointPath">, never>)[] & Record<Exclude<keyof I["revisions"][number]["storageMounts"], "$type" | keyof {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointPath?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["revisions"][number], "$type" | "description" | "id" | "createdAt" | "status" | "image" | "logOptions" | "resources" | "serviceAccountId" | "secrets" | "connectivity" | "containerId" | "concurrency" | "executionTimeout" | "provisionPolicy" | "scalingPolicy" | "storageMounts">, never>)[] & Record<Exclude<keyof I["revisions"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Revision_Status | undefined;
            image?: {
                imageUrl?: string | undefined;
                args?: {
                    args?: string[] | undefined;
                } | undefined;
                environment?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                imageDigest?: string | undefined;
                command?: {
                    command?: string[] | undefined;
                } | undefined;
                workingDir?: string | undefined;
            } | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
            } | undefined;
            serviceAccountId?: string | undefined;
            secrets?: {
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            }[] | undefined;
            connectivity?: {
                networkId?: string | undefined;
                subnetIds?: string[] | undefined;
            } | undefined;
            containerId?: string | undefined;
            concurrency?: number | undefined;
            executionTimeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            provisionPolicy?: {
                minInstances?: number | undefined;
            } | undefined;
            scalingPolicy?: {
                zoneInstancesLimit?: number | undefined;
                zoneRequestsLimit?: number | undefined;
            } | undefined;
            storageMounts?: {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointPath?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "revisions">, never>>(object: I): ListContainersRevisionsResponse;
};
export declare const DeployContainerRevisionRequest: {
    $type: "yandex.cloud.serverless.containers.v1.DeployContainerRevisionRequest";
    encode(message: DeployContainerRevisionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeployContainerRevisionRequest;
    fromJSON(object: any): DeployContainerRevisionRequest;
    toJSON(message: DeployContainerRevisionRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        logOptions?: {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
        } | undefined;
        resources?: {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
        } | undefined;
        serviceAccountId?: string | undefined;
        secrets?: {
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        }[] | undefined;
        connectivity?: {
            networkId?: string | undefined;
            subnetIds?: string[] | undefined;
        } | undefined;
        containerId?: string | undefined;
        concurrency?: number | undefined;
        executionTimeout?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        provisionPolicy?: {
            minInstances?: number | undefined;
        } | undefined;
        scalingPolicy?: {
            zoneInstancesLimit?: number | undefined;
            zoneRequestsLimit?: number | undefined;
        } | undefined;
        storageMounts?: {
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointPath?: string | undefined;
        }[] | undefined;
        imageSpec?: {
            imageUrl?: string | undefined;
            args?: {
                args?: string[] | undefined;
            } | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            command?: {
                command?: string[] | undefined;
            } | undefined;
            workingDir?: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        logOptions?: ({
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
        } & {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
        } & Record<Exclude<keyof I["logOptions"], "$type" | "folderId" | "logGroupId" | "disabled" | "minLevel">, never>) | undefined;
        resources?: ({
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
        } & {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "memory" | "cores" | "coreFraction">, never>) | undefined;
        serviceAccountId?: string | undefined;
        secrets?: ({
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        }[] & ({
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        } & {
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        } & Record<Exclude<keyof I["secrets"][number], "$type" | "id" | "key" | "versionId" | "environmentVariable">, never>)[] & Record<Exclude<keyof I["secrets"], "$type" | keyof {
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        }[]>, never>) | undefined;
        connectivity?: ({
            networkId?: string | undefined;
            subnetIds?: string[] | undefined;
        } & {
            networkId?: string | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["connectivity"]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["connectivity"], "$type" | "networkId" | "subnetIds">, never>) | undefined;
        containerId?: string | undefined;
        concurrency?: number | undefined;
        executionTimeout?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["executionTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
        provisionPolicy?: ({
            minInstances?: number | undefined;
        } & {
            minInstances?: number | undefined;
        } & Record<Exclude<keyof I["provisionPolicy"], "$type" | "minInstances">, never>) | undefined;
        scalingPolicy?: ({
            zoneInstancesLimit?: number | undefined;
            zoneRequestsLimit?: number | undefined;
        } & {
            zoneInstancesLimit?: number | undefined;
            zoneRequestsLimit?: number | undefined;
        } & Record<Exclude<keyof I["scalingPolicy"], "$type" | "zoneInstancesLimit" | "zoneRequestsLimit">, never>) | undefined;
        storageMounts?: ({
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointPath?: string | undefined;
        }[] & ({
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointPath?: string | undefined;
        } & {
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointPath?: string | undefined;
        } & Record<Exclude<keyof I["storageMounts"][number], "$type" | "prefix" | "bucketId" | "readOnly" | "mountPointPath">, never>)[] & Record<Exclude<keyof I["storageMounts"], "$type" | keyof {
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointPath?: string | undefined;
        }[]>, never>) | undefined;
        imageSpec?: ({
            imageUrl?: string | undefined;
            args?: {
                args?: string[] | undefined;
            } | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            command?: {
                command?: string[] | undefined;
            } | undefined;
            workingDir?: string | undefined;
        } & {
            imageUrl?: string | undefined;
            args?: ({
                args?: string[] | undefined;
            } & {
                args?: (string[] & string[] & Record<Exclude<keyof I["imageSpec"]["args"]["args"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["imageSpec"]["args"], "$type" | "args">, never>) | undefined;
            environment?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["imageSpec"]["environment"], string | number>, never>) | undefined;
            command?: ({
                command?: string[] | undefined;
            } & {
                command?: (string[] & string[] & Record<Exclude<keyof I["imageSpec"]["command"]["command"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["imageSpec"]["command"], "$type" | "command">, never>) | undefined;
            workingDir?: string | undefined;
        } & Record<Exclude<keyof I["imageSpec"], "$type" | "imageUrl" | "args" | "environment" | "command" | "workingDir">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "logOptions" | "resources" | "serviceAccountId" | "secrets" | "connectivity" | "containerId" | "concurrency" | "executionTimeout" | "provisionPolicy" | "scalingPolicy" | "storageMounts" | "imageSpec">, never>>(object: I): DeployContainerRevisionRequest;
};
export declare const ImageSpec: {
    $type: "yandex.cloud.serverless.containers.v1.ImageSpec";
    encode(message: ImageSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ImageSpec;
    fromJSON(object: any): ImageSpec;
    toJSON(message: ImageSpec): unknown;
    fromPartial<I extends {
        imageUrl?: string | undefined;
        args?: {
            args?: string[] | undefined;
        } | undefined;
        environment?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        command?: {
            command?: string[] | undefined;
        } | undefined;
        workingDir?: string | undefined;
    } & {
        imageUrl?: string | undefined;
        args?: ({
            args?: string[] | undefined;
        } & {
            args?: (string[] & string[] & Record<Exclude<keyof I["args"]["args"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["args"], "$type" | "args">, never>) | undefined;
        environment?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["environment"], string | number>, never>) | undefined;
        command?: ({
            command?: string[] | undefined;
        } & {
            command?: (string[] & string[] & Record<Exclude<keyof I["command"]["command"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["command"], "$type" | "command">, never>) | undefined;
        workingDir?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "imageUrl" | "args" | "environment" | "command" | "workingDir">, never>>(object: I): ImageSpec;
};
export declare const ImageSpec_EnvironmentEntry: {
    $type: "yandex.cloud.serverless.containers.v1.ImageSpec.EnvironmentEntry";
    encode(message: ImageSpec_EnvironmentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ImageSpec_EnvironmentEntry;
    fromJSON(object: any): ImageSpec_EnvironmentEntry;
    toJSON(message: ImageSpec_EnvironmentEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): ImageSpec_EnvironmentEntry;
};
export declare const DeployContainerRevisionMetadata: {
    $type: "yandex.cloud.serverless.containers.v1.DeployContainerRevisionMetadata";
    encode(message: DeployContainerRevisionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeployContainerRevisionMetadata;
    fromJSON(object: any): DeployContainerRevisionMetadata;
    toJSON(message: DeployContainerRevisionMetadata): unknown;
    fromPartial<I extends {
        containerRevisionId?: string | undefined;
    } & {
        containerRevisionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerRevisionId">, never>>(object: I): DeployContainerRevisionMetadata;
};
export declare const RollbackContainerRequest: {
    $type: "yandex.cloud.serverless.containers.v1.RollbackContainerRequest";
    encode(message: RollbackContainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RollbackContainerRequest;
    fromJSON(object: any): RollbackContainerRequest;
    toJSON(message: RollbackContainerRequest): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
        revisionId?: string | undefined;
    } & {
        containerId?: string | undefined;
        revisionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId" | "revisionId">, never>>(object: I): RollbackContainerRequest;
};
export declare const RollbackContainerMetadata: {
    $type: "yandex.cloud.serverless.containers.v1.RollbackContainerMetadata";
    encode(message: RollbackContainerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RollbackContainerMetadata;
    fromJSON(object: any): RollbackContainerMetadata;
    toJSON(message: RollbackContainerMetadata): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
        revisionId?: string | undefined;
    } & {
        containerId?: string | undefined;
        revisionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId" | "revisionId">, never>>(object: I): RollbackContainerMetadata;
};
export declare const ListContainerOperationsRequest: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainerOperationsRequest";
    encode(message: ListContainerOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainerOperationsRequest;
    fromJSON(object: any): ListContainerOperationsRequest;
    toJSON(message: ListContainerOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        containerId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "containerId">, never>>(object: I): ListContainerOperationsRequest;
};
export declare const ListContainerOperationsResponse: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainerOperationsResponse";
    encode(message: ListContainerOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainerOperationsResponse;
    fromJSON(object: any): ListContainerOperationsResponse;
    toJSON(message: ListContainerOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListContainerOperationsResponse;
};
/** A set of methods for managing serverless containers. */
export declare const ContainerServiceService: {
    /**
     * Returns the specified container.
     *
     * To get the list of all available containers, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetContainerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetContainerRequest;
        readonly responseSerialize: (value: Container) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Container;
    };
    /** Retrieves the list of containers in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListContainersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListContainersRequest;
        readonly responseSerialize: (value: ListContainersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListContainersResponse;
    };
    /** Creates a container in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateContainerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateContainerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified container. */
    readonly update: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateContainerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateContainerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified container. */
    readonly delete: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteContainerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteContainerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deploys a revision for the specified container. */
    readonly deployRevision: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/DeployRevision";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeployContainerRevisionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeployContainerRevisionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Rollback the specified container to an old revision. */
    readonly rollback: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Rollback";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RollbackContainerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RollbackContainerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Returns the specified revision of a container.
     *
     * To get the list of available revision, make a [ListRevisions] request.
     */
    readonly getRevision: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/GetRevision";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetContainerRevisionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetContainerRevisionRequest;
        readonly responseSerialize: (value: Revision) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Revision;
    };
    /**
     * Retrieves the list of revisions for the specified container, or of all container revisions
     * in the specified folder.
     */
    readonly listRevisions: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListRevisions";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListContainersRevisionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListContainersRevisionsRequest;
        readonly responseSerialize: (value: ListContainersRevisionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListContainersRevisionsResponse;
    };
    /** Lists operations for the specified container. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListContainerOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListContainerOperationsRequest;
        readonly responseSerialize: (value: ListContainerOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListContainerOperationsResponse;
    };
    /** Lists existing access bindings for the specified container. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the container. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified container. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ContainerServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified container.
     *
     * To get the list of all available containers, make a [List] request.
     */
    get: handleUnaryCall<GetContainerRequest, Container>;
    /** Retrieves the list of containers in the specified folder. */
    list: handleUnaryCall<ListContainersRequest, ListContainersResponse>;
    /** Creates a container in the specified folder. */
    create: handleUnaryCall<CreateContainerRequest, Operation>;
    /** Updates the specified container. */
    update: handleUnaryCall<UpdateContainerRequest, Operation>;
    /** Deletes the specified container. */
    delete: handleUnaryCall<DeleteContainerRequest, Operation>;
    /** Deploys a revision for the specified container. */
    deployRevision: handleUnaryCall<DeployContainerRevisionRequest, Operation>;
    /** Rollback the specified container to an old revision. */
    rollback: handleUnaryCall<RollbackContainerRequest, Operation>;
    /**
     * Returns the specified revision of a container.
     *
     * To get the list of available revision, make a [ListRevisions] request.
     */
    getRevision: handleUnaryCall<GetContainerRevisionRequest, Revision>;
    /**
     * Retrieves the list of revisions for the specified container, or of all container revisions
     * in the specified folder.
     */
    listRevisions: handleUnaryCall<ListContainersRevisionsRequest, ListContainersRevisionsResponse>;
    /** Lists operations for the specified container. */
    listOperations: handleUnaryCall<ListContainerOperationsRequest, ListContainerOperationsResponse>;
    /** Lists existing access bindings for the specified container. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the container. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified container. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface ContainerServiceClient extends Client {
    /**
     * Returns the specified container.
     *
     * To get the list of all available containers, make a [List] request.
     */
    get(request: GetContainerRequest, callback: (error: ServiceError | null, response: Container) => void): ClientUnaryCall;
    get(request: GetContainerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Container) => void): ClientUnaryCall;
    get(request: GetContainerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Container) => void): ClientUnaryCall;
    /** Retrieves the list of containers in the specified folder. */
    list(request: ListContainersRequest, callback: (error: ServiceError | null, response: ListContainersResponse) => void): ClientUnaryCall;
    list(request: ListContainersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListContainersResponse) => void): ClientUnaryCall;
    list(request: ListContainersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListContainersResponse) => void): ClientUnaryCall;
    /** Creates a container in the specified folder. */
    create(request: CreateContainerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateContainerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateContainerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified container. */
    update(request: UpdateContainerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateContainerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateContainerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified container. */
    delete(request: DeleteContainerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteContainerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteContainerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deploys a revision for the specified container. */
    deployRevision(request: DeployContainerRevisionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deployRevision(request: DeployContainerRevisionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deployRevision(request: DeployContainerRevisionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Rollback the specified container to an old revision. */
    rollback(request: RollbackContainerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rollback(request: RollbackContainerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rollback(request: RollbackContainerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Returns the specified revision of a container.
     *
     * To get the list of available revision, make a [ListRevisions] request.
     */
    getRevision(request: GetContainerRevisionRequest, callback: (error: ServiceError | null, response: Revision) => void): ClientUnaryCall;
    getRevision(request: GetContainerRevisionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Revision) => void): ClientUnaryCall;
    getRevision(request: GetContainerRevisionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Revision) => void): ClientUnaryCall;
    /**
     * Retrieves the list of revisions for the specified container, or of all container revisions
     * in the specified folder.
     */
    listRevisions(request: ListContainersRevisionsRequest, callback: (error: ServiceError | null, response: ListContainersRevisionsResponse) => void): ClientUnaryCall;
    listRevisions(request: ListContainersRevisionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListContainersRevisionsResponse) => void): ClientUnaryCall;
    listRevisions(request: ListContainersRevisionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListContainersRevisionsResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified container. */
    listOperations(request: ListContainerOperationsRequest, callback: (error: ServiceError | null, response: ListContainerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListContainerOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListContainerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListContainerOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListContainerOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified container. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the container. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified container. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ContainerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ContainerServiceClient;
    service: typeof ContainerServiceService;
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
