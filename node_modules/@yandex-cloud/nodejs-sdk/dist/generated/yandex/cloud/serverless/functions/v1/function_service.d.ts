/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Resources, Connectivity, LogOptions, AsyncInvocationConfig, Function, Version, Package, Secret, StorageMount, ScalingPolicy } from "../../../../../yandex/cloud/serverless/functions/v1/function";
import { Duration } from "../../../../../google/protobuf/duration";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.serverless.functions.v1";
export interface GetFunctionRequest {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionRequest";
    /**
     * ID of the function to return.
     *
     * To get a function ID make a [FunctionService.List] request.
     */
    functionId: string;
}
export interface GetFunctionVersionRequest {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest";
    /**
     * ID of the version to return.
     *
     * To get a version ID make a [FunctionService.ListVersions] request.
     */
    functionVersionId: string;
}
export interface GetFunctionVersionByTagRequest {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest";
    /**
     * ID of the function whose versions should be listed.
     *
     * To get a function ID use a [FunctionService.List] request.
     */
    functionId: string;
    /**
     * Version tag.
     *
     * To get the history of version tags make a [FunctionService.ListTagHistory] request.
     */
    tag: string;
}
export interface ListFunctionsRequest {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsRequest";
    /**
     * ID of the folder to list functions in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListFunctionsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListFunctionsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters functions listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Function.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name="my-function"`.
     */
    filter: string;
}
export interface ListFunctionsResponse {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsResponse";
    /** List of functions in the specified folder. */
    functions: Function[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFunctionsRequest.page_size], use `nextPageToken` as the value
     * for the [ListFunctionsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateFunctionRequest {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest";
    /**
     * ID of the folder to create a function in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the function.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the function. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateFunctionRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateFunctionMetadata {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionMetadata";
    /** ID of the function that is being created. */
    functionId: string;
}
export interface UpdateFunctionRequest {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest";
    /**
     * ID of the function to update.
     *
     * To get a function ID make a [FunctionService.List] request.
     */
    functionId: string;
    /** Field mask that specifies which attributes of the function should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the function.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description for the function. */
    description: string;
    /**
     * Function labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label, request the current set of labels with a [FunctionService.Get] request.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateFunctionRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateFunctionMetadata {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata";
    /** ID of the function that is being updated. */
    functionId: string;
}
export interface DeleteFunctionRequest {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionRequest";
    /**
     * ID of the function to delete.
     * To get a function ID make a [FunctionService.List] request.
     */
    functionId: string;
}
export interface DeleteFunctionMetadata {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata";
    /** ID of the function that is being deleted. */
    functionId: string;
}
export interface DeleteFunctionVersionRequest {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionRequest";
    /** ID of the function's version to delete. */
    functionVersionId: string;
    /**
     * Forces deletion of the version tags.
     *
     * If the value equals false and the function has tags with the selected version then request returns an error.
     */
    force: boolean;
}
export interface DeleteFunctionVersionMetadata {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionMetadata";
    /** ID of the function's version is being deleted. */
    functionVersionId: string;
}
export interface ListRuntimesRequest {
    $type: "yandex.cloud.serverless.functions.v1.ListRuntimesRequest";
}
export interface ListRuntimesResponse {
    $type: "yandex.cloud.serverless.functions.v1.ListRuntimesResponse";
    /** Runtime environments available for the specified function. */
    runtimes: string[];
}
export interface ListFunctionsVersionsRequest {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest";
    /**
     * ID of the folder to list function versions for.
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string | undefined;
    /**
     * ID of the function to list versions for.
     * To get a function ID use a [FunctionService.List] request.
     */
    functionId: string | undefined;
    /**
     * The maximum number of results per page to return. If the number of available results
     * is larger than `pageSize`, the service returns a [ListFunctionsVersionsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListFunctionsVersionsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Version.status] and [Version.runtime] fields.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `status="ACTIVE"`.
     */
    filter: string;
}
export interface ListFunctionsVersionsResponse {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse";
    /** List of versions for the specified folder or function. */
    versions: Version[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFunctionsVersionsRequest.page_size], use `nextPageToken` as the value
     * for the [ListFunctionsVersionsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListFunctionOperationsRequest {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest";
    /** ID of the function to list operations for. */
    functionId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListFunctionOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListFunctionOperationsResponse.next_page_token] returned by a previous list request.
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
export interface ListFunctionOperationsResponse {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse";
    /** List of operations for the specified function. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFunctionOperationsRequest.page_size], use `nextPageToken` as the value
     * for the [ListFunctionOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateFunctionVersionRequest {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest";
    /**
     * ID of the function to create a version for.
     *
     * To get a function ID, make a [FunctionService.List] request.
     */
    functionId: string;
    /** Runtime environment for the version. */
    runtime: string;
    /** Description of the version */
    description: string;
    /** Entrypoint of the version. */
    entrypoint: string;
    /** Resources allocated to the version. */
    resources?: Resources;
    /**
     * Timeout for the execution of the version.
     *
     * If the timeout is exceeded, Cloud Functions responds with a 504 HTTP code.
     */
    executionTimeout?: Duration;
    /** ID of the service account to associate with the version. */
    serviceAccountId: string;
    /** Functions deployment package. */
    package?: Package | undefined;
    /** Content of the deployment package. */
    content: Buffer | undefined;
    /**
     * ID of the version to be copied from. Source version must belong to the same folder as the created version
     * and the user must have read permissions to the source version.
     */
    versionId: string | undefined;
    /** Environment settings for the version. */
    environment: {
        [key: string]: string;
    };
    /** Function version tags. For details, see [Version tag](/docs/functions/concepts/function#tag). */
    tag: string[];
    /** Function version connectivity. If specified the version will be attached to specified network/subnet(s). */
    connectivity?: Connectivity;
    /** Additional service accounts to be used by the version. */
    namedServiceAccounts: {
        [key: string]: string;
    };
    /** Yandex Lockbox secrets to be used by the version. */
    secrets: Secret[];
    /** Options for logging from the function */
    logOptions?: LogOptions;
    /** S3 mounts to be used by the version. */
    storageMounts: StorageMount[];
    /** Config for asynchronous invocations of the version */
    asyncInvocationConfig?: AsyncInvocationConfig;
}
export interface CreateFunctionVersionRequest_EnvironmentEntry {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry";
    key: string;
    value: string;
}
export interface CreateFunctionVersionRequest_NamedServiceAccountsEntry {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry";
    key: string;
    value: string;
}
export interface CreateFunctionVersionMetadata {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata";
    /** ID of the version that is being created. */
    functionVersionId: string;
}
export interface SetFunctionTagRequest {
    $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagRequest";
    /**
     * ID of the version to set the tag for.
     *
     * To get a version ID make a [FunctionService.ListVersions] request.
     */
    functionVersionId: string;
    /** Tag to set for the version. */
    tag: string;
}
export interface RemoveFunctionTagRequest {
    $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest";
    /**
     * ID of the version to remove a tag from.
     *
     * To get the a version ID make a [FunctionService.ListVersions] request.
     */
    functionVersionId: string;
    /** Tag to remove from the specified version. */
    tag: string;
}
export interface SetFunctionTagMetadata {
    $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata";
    /** ID of the function versions that is being tagged. */
    functionVersionId: string;
}
export interface RemoveFunctionTagMetadata {
    $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata";
    /** ID of the function versions that is being untagged. */
    functionVersionId: string;
}
export interface ListFunctionTagHistoryRequest {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest";
    /**
     * ID of the function to retrieve tag history for.
     *
     * To get a function ID, make a [FunctionService.List] request.
     */
    functionId: string;
    /** Specific tag that history should be limited to. */
    tag: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListFunctionOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListFunctionOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [FunctionTagHistoryRecord.effective_from] and [FunctionTagHistoryRecord.effective_to] fields.
     * 2. An `=` or `>` or `<` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * For example, `effective_to>2021-01-01T12:00:00Z`.
     */
    filter: string;
}
export interface ListFunctionTagHistoryResponse {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse";
    /** Set of relevant tag history records. */
    functionTagHistoryRecord: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFunctionTagHistoryRequest.page_size], use `nextPageToken` as the value
     * for the [ListFunctionTagHistoryRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
/** A record in the tag history. */
export interface ListFunctionTagHistoryResponse_FunctionTagHistoryRecord {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord";
    /** ID of the function that the record is about. */
    functionId: string;
    /** ID of the function version that the record is about. */
    functionVersionId: string;
    /** Tag that was set for the version at some point. */
    tag: string;
    /** Timestamp when the tag started being active for the function. */
    effectiveFrom?: Date;
    /** Timestamp when the tag stopped being active for the function. */
    effectiveTo?: Date;
}
export interface ListScalingPoliciesRequest {
    $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest";
    /**
     * ID of the function to retrieve scaling policies for.
     *
     * To get a function ID, make a [FunctionService.List] request.
     */
    functionId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListScalingPoliciesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListScalingPoliciesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListScalingPoliciesResponse {
    $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse";
    /** Set of relevant scaling policies. */
    scalingPolicies: ScalingPolicy[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListScalingPoliciesRequest.page_size], use `nextPageToken` as the value
     * for the [ListScalingPoliciesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface SetScalingPolicyRequest {
    $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest";
    /**
     * ID of the function to retrieve scaling policies for.
     *
     * To get a function ID, make a [FunctionService.List] request.
     */
    functionId: string;
    /**
     * Version tag.
     *
     * To get the history of version tags make a [FunctionService.ListTagHistory] request.
     */
    tag: string;
    /**
     * Minimum guaranteed provisioned instances count for all zones in total.
     * Billed separately.
     */
    provisionedInstancesCount: number;
    /**
     * Upper limit for instance count in each zone.
     * 0 means no limit.
     */
    zoneInstancesLimit: number;
    /**
     * Upper limit of requests count in each zone.
     * 0 means no limit.
     */
    zoneRequestsLimit: number;
}
export interface SetScalingPolicyMetadata {
    $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata";
    /** ID of the function for which scaling policy was set. */
    functionId: string;
}
export interface RemoveScalingPolicyRequest {
    $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest";
    /**
     * ID of the function to remove scaling policies for.
     *
     * To get a function ID, make a [FunctionService.List] request.
     */
    functionId: string;
    /**
     * Version tag.
     *
     * To get the history of version tags make a [FunctionService.ListTagHistory] request.
     */
    tag: string;
}
export interface RemoveScalingPolicyMetadata {
    $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata";
    /** ID of the function for which scaling policy was removed. */
    functionId: string;
}
export declare const GetFunctionRequest: {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionRequest";
    encode(message: GetFunctionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFunctionRequest;
    fromJSON(object: any): GetFunctionRequest;
    toJSON(message: GetFunctionRequest): unknown;
    fromPartial<I extends {
        functionId?: string | undefined;
    } & {
        functionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionId">, never>>(object: I): GetFunctionRequest;
};
export declare const GetFunctionVersionRequest: {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest";
    encode(message: GetFunctionVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFunctionVersionRequest;
    fromJSON(object: any): GetFunctionVersionRequest;
    toJSON(message: GetFunctionVersionRequest): unknown;
    fromPartial<I extends {
        functionVersionId?: string | undefined;
    } & {
        functionVersionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionVersionId">, never>>(object: I): GetFunctionVersionRequest;
};
export declare const GetFunctionVersionByTagRequest: {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest";
    encode(message: GetFunctionVersionByTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFunctionVersionByTagRequest;
    fromJSON(object: any): GetFunctionVersionByTagRequest;
    toJSON(message: GetFunctionVersionByTagRequest): unknown;
    fromPartial<I extends {
        functionId?: string | undefined;
        tag?: string | undefined;
    } & {
        functionId?: string | undefined;
        tag?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionId" | "tag">, never>>(object: I): GetFunctionVersionByTagRequest;
};
export declare const ListFunctionsRequest: {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsRequest";
    encode(message: ListFunctionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionsRequest;
    fromJSON(object: any): ListFunctionsRequest;
    toJSON(message: ListFunctionsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListFunctionsRequest;
};
export declare const ListFunctionsResponse: {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsResponse";
    encode(message: ListFunctionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionsResponse;
    fromJSON(object: any): ListFunctionsResponse;
    toJSON(message: ListFunctionsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        functions?: Function[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        functions?: (Function[] & Function[] & Record<Exclude<keyof I["functions"], "$type" | keyof Function[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "functions">, never>>(object: I): ListFunctionsResponse;
};
export declare const CreateFunctionRequest: {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest";
    encode(message: CreateFunctionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionRequest;
    fromJSON(object: any): CreateFunctionRequest;
    toJSON(message: CreateFunctionRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels">, never>>(object: I): CreateFunctionRequest;
};
export declare const CreateFunctionRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry";
    encode(message: CreateFunctionRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionRequest_LabelsEntry;
    fromJSON(object: any): CreateFunctionRequest_LabelsEntry;
    toJSON(message: CreateFunctionRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateFunctionRequest_LabelsEntry;
};
export declare const CreateFunctionMetadata: {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionMetadata";
    encode(message: CreateFunctionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionMetadata;
    fromJSON(object: any): CreateFunctionMetadata;
    toJSON(message: CreateFunctionMetadata): unknown;
    fromPartial<I extends {
        functionId?: string | undefined;
    } & {
        functionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionId">, never>>(object: I): CreateFunctionMetadata;
};
export declare const UpdateFunctionRequest: {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest";
    encode(message: UpdateFunctionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFunctionRequest;
    fromJSON(object: any): UpdateFunctionRequest;
    toJSON(message: UpdateFunctionRequest): unknown;
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
        functionId?: string | undefined;
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
        functionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "functionId">, never>>(object: I): UpdateFunctionRequest;
};
export declare const UpdateFunctionRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry";
    encode(message: UpdateFunctionRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFunctionRequest_LabelsEntry;
    fromJSON(object: any): UpdateFunctionRequest_LabelsEntry;
    toJSON(message: UpdateFunctionRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateFunctionRequest_LabelsEntry;
};
export declare const UpdateFunctionMetadata: {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata";
    encode(message: UpdateFunctionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFunctionMetadata;
    fromJSON(object: any): UpdateFunctionMetadata;
    toJSON(message: UpdateFunctionMetadata): unknown;
    fromPartial<I extends {
        functionId?: string | undefined;
    } & {
        functionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionId">, never>>(object: I): UpdateFunctionMetadata;
};
export declare const DeleteFunctionRequest: {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionRequest";
    encode(message: DeleteFunctionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFunctionRequest;
    fromJSON(object: any): DeleteFunctionRequest;
    toJSON(message: DeleteFunctionRequest): unknown;
    fromPartial<I extends {
        functionId?: string | undefined;
    } & {
        functionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionId">, never>>(object: I): DeleteFunctionRequest;
};
export declare const DeleteFunctionMetadata: {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata";
    encode(message: DeleteFunctionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFunctionMetadata;
    fromJSON(object: any): DeleteFunctionMetadata;
    toJSON(message: DeleteFunctionMetadata): unknown;
    fromPartial<I extends {
        functionId?: string | undefined;
    } & {
        functionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionId">, never>>(object: I): DeleteFunctionMetadata;
};
export declare const DeleteFunctionVersionRequest: {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionRequest";
    encode(message: DeleteFunctionVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFunctionVersionRequest;
    fromJSON(object: any): DeleteFunctionVersionRequest;
    toJSON(message: DeleteFunctionVersionRequest): unknown;
    fromPartial<I extends {
        functionVersionId?: string | undefined;
        force?: boolean | undefined;
    } & {
        functionVersionId?: string | undefined;
        force?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionVersionId" | "force">, never>>(object: I): DeleteFunctionVersionRequest;
};
export declare const DeleteFunctionVersionMetadata: {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionMetadata";
    encode(message: DeleteFunctionVersionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFunctionVersionMetadata;
    fromJSON(object: any): DeleteFunctionVersionMetadata;
    toJSON(message: DeleteFunctionVersionMetadata): unknown;
    fromPartial<I extends {
        functionVersionId?: string | undefined;
    } & {
        functionVersionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionVersionId">, never>>(object: I): DeleteFunctionVersionMetadata;
};
export declare const ListRuntimesRequest: {
    $type: "yandex.cloud.serverless.functions.v1.ListRuntimesRequest";
    encode(_: ListRuntimesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRuntimesRequest;
    fromJSON(_: any): ListRuntimesRequest;
    toJSON(_: ListRuntimesRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): ListRuntimesRequest;
};
export declare const ListRuntimesResponse: {
    $type: "yandex.cloud.serverless.functions.v1.ListRuntimesResponse";
    encode(message: ListRuntimesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRuntimesResponse;
    fromJSON(object: any): ListRuntimesResponse;
    toJSON(message: ListRuntimesResponse): unknown;
    fromPartial<I extends {
        runtimes?: string[] | undefined;
    } & {
        runtimes?: (string[] & string[] & Record<Exclude<keyof I["runtimes"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "runtimes">, never>>(object: I): ListRuntimesResponse;
};
export declare const ListFunctionsVersionsRequest: {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest";
    encode(message: ListFunctionsVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionsVersionsRequest;
    fromJSON(object: any): ListFunctionsVersionsRequest;
    toJSON(message: ListFunctionsVersionsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        functionId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        functionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "functionId">, never>>(object: I): ListFunctionsVersionsRequest;
};
export declare const ListFunctionsVersionsResponse: {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse";
    encode(message: ListFunctionsVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionsVersionsResponse;
    fromJSON(object: any): ListFunctionsVersionsResponse;
    toJSON(message: ListFunctionsVersionsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        versions?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/functions/v1/function").Version_Status | undefined;
            logGroupId?: string | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            resources?: {
                memory?: number | undefined;
            } | undefined;
            serviceAccountId?: string | undefined;
            tags?: string[] | undefined;
            secrets?: {
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            }[] | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            connectivity?: {
                subnetId?: string[] | undefined;
                networkId?: string | undefined;
            } | undefined;
            executionTimeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            storageMounts?: {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointName?: string | undefined;
            }[] | undefined;
            functionId?: string | undefined;
            runtime?: string | undefined;
            entrypoint?: string | undefined;
            imageSize?: number | undefined;
            namedServiceAccounts?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            asyncInvocationConfig?: {
                serviceAccountId?: string | undefined;
                retriesCount?: number | undefined;
                successTarget?: {
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } | undefined;
                failureTarget?: {
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        versions?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/functions/v1/function").Version_Status | undefined;
            logGroupId?: string | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            resources?: {
                memory?: number | undefined;
            } | undefined;
            serviceAccountId?: string | undefined;
            tags?: string[] | undefined;
            secrets?: {
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            }[] | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            connectivity?: {
                subnetId?: string[] | undefined;
                networkId?: string | undefined;
            } | undefined;
            executionTimeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            storageMounts?: {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointName?: string | undefined;
            }[] | undefined;
            functionId?: string | undefined;
            runtime?: string | undefined;
            entrypoint?: string | undefined;
            imageSize?: number | undefined;
            namedServiceAccounts?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            asyncInvocationConfig?: {
                serviceAccountId?: string | undefined;
                retriesCount?: number | undefined;
                successTarget?: {
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } | undefined;
                failureTarget?: {
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/functions/v1/function").Version_Status | undefined;
            logGroupId?: string | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            resources?: {
                memory?: number | undefined;
            } | undefined;
            serviceAccountId?: string | undefined;
            tags?: string[] | undefined;
            secrets?: {
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            }[] | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            connectivity?: {
                subnetId?: string[] | undefined;
                networkId?: string | undefined;
            } | undefined;
            executionTimeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            storageMounts?: {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointName?: string | undefined;
            }[] | undefined;
            functionId?: string | undefined;
            runtime?: string | undefined;
            entrypoint?: string | undefined;
            imageSize?: number | undefined;
            namedServiceAccounts?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            asyncInvocationConfig?: {
                serviceAccountId?: string | undefined;
                retriesCount?: number | undefined;
                successTarget?: {
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } | undefined;
                failureTarget?: {
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/functions/v1/function").Version_Status | undefined;
            logGroupId?: string | undefined;
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
            } & Record<Exclude<keyof I["versions"][number]["logOptions"], "$type" | "folderId" | "logGroupId" | "disabled" | "minLevel">, never>) | undefined;
            resources?: ({
                memory?: number | undefined;
            } & {
                memory?: number | undefined;
            } & Record<Exclude<keyof I["versions"][number]["resources"], "$type" | "memory">, never>) | undefined;
            serviceAccountId?: string | undefined;
            tags?: (string[] & string[] & Record<Exclude<keyof I["versions"][number]["tags"], "$type" | keyof string[]>, never>) | undefined;
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
            } & Record<Exclude<keyof I["versions"][number]["secrets"][number], "$type" | "id" | "key" | "versionId" | "environmentVariable">, never>)[] & Record<Exclude<keyof I["versions"][number]["secrets"], "$type" | keyof {
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            }[]>, never>) | undefined;
            environment?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["versions"][number]["environment"], string | number>, never>) | undefined;
            connectivity?: ({
                subnetId?: string[] | undefined;
                networkId?: string | undefined;
            } & {
                subnetId?: (string[] & string[] & Record<Exclude<keyof I["versions"][number]["connectivity"]["subnetId"], "$type" | keyof string[]>, never>) | undefined;
                networkId?: string | undefined;
            } & Record<Exclude<keyof I["versions"][number]["connectivity"], "$type" | "subnetId" | "networkId">, never>) | undefined;
            executionTimeout?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["versions"][number]["executionTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
            storageMounts?: ({
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointName?: string | undefined;
            }[] & ({
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointName?: string | undefined;
            } & {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointName?: string | undefined;
            } & Record<Exclude<keyof I["versions"][number]["storageMounts"][number], "$type" | "prefix" | "bucketId" | "readOnly" | "mountPointName">, never>)[] & Record<Exclude<keyof I["versions"][number]["storageMounts"], "$type" | keyof {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointName?: string | undefined;
            }[]>, never>) | undefined;
            functionId?: string | undefined;
            runtime?: string | undefined;
            entrypoint?: string | undefined;
            imageSize?: number | undefined;
            namedServiceAccounts?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["versions"][number]["namedServiceAccounts"], string | number>, never>) | undefined;
            asyncInvocationConfig?: ({
                serviceAccountId?: string | undefined;
                retriesCount?: number | undefined;
                successTarget?: {
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } | undefined;
                failureTarget?: {
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                retriesCount?: number | undefined;
                successTarget?: ({
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } & {
                    emptyTarget?: ({} & {} & Record<Exclude<keyof I["versions"][number]["asyncInvocationConfig"]["successTarget"]["emptyTarget"], "$type">, never>) | undefined;
                    ymqTarget?: ({
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } & Record<Exclude<keyof I["versions"][number]["asyncInvocationConfig"]["successTarget"]["ymqTarget"], "$type" | "serviceAccountId" | "queueArn">, never>) | undefined;
                } & Record<Exclude<keyof I["versions"][number]["asyncInvocationConfig"]["successTarget"], "$type" | "emptyTarget" | "ymqTarget">, never>) | undefined;
                failureTarget?: ({
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } & {
                    emptyTarget?: ({} & {} & Record<Exclude<keyof I["versions"][number]["asyncInvocationConfig"]["failureTarget"]["emptyTarget"], "$type">, never>) | undefined;
                    ymqTarget?: ({
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } & Record<Exclude<keyof I["versions"][number]["asyncInvocationConfig"]["failureTarget"]["ymqTarget"], "$type" | "serviceAccountId" | "queueArn">, never>) | undefined;
                } & Record<Exclude<keyof I["versions"][number]["asyncInvocationConfig"]["failureTarget"], "$type" | "emptyTarget" | "ymqTarget">, never>) | undefined;
            } & Record<Exclude<keyof I["versions"][number]["asyncInvocationConfig"], "$type" | "serviceAccountId" | "retriesCount" | "successTarget" | "failureTarget">, never>) | undefined;
        } & Record<Exclude<keyof I["versions"][number], "$type" | "description" | "id" | "createdAt" | "status" | "logGroupId" | "logOptions" | "resources" | "serviceAccountId" | "tags" | "secrets" | "environment" | "connectivity" | "executionTimeout" | "storageMounts" | "functionId" | "runtime" | "entrypoint" | "imageSize" | "namedServiceAccounts" | "asyncInvocationConfig">, never>)[] & Record<Exclude<keyof I["versions"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/functions/v1/function").Version_Status | undefined;
            logGroupId?: string | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            resources?: {
                memory?: number | undefined;
            } | undefined;
            serviceAccountId?: string | undefined;
            tags?: string[] | undefined;
            secrets?: {
                id?: string | undefined;
                key?: string | undefined;
                versionId?: string | undefined;
                environmentVariable?: string | undefined;
            }[] | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            connectivity?: {
                subnetId?: string[] | undefined;
                networkId?: string | undefined;
            } | undefined;
            executionTimeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            storageMounts?: {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                readOnly?: boolean | undefined;
                mountPointName?: string | undefined;
            }[] | undefined;
            functionId?: string | undefined;
            runtime?: string | undefined;
            entrypoint?: string | undefined;
            imageSize?: number | undefined;
            namedServiceAccounts?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            asyncInvocationConfig?: {
                serviceAccountId?: string | undefined;
                retriesCount?: number | undefined;
                successTarget?: {
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } | undefined;
                failureTarget?: {
                    emptyTarget?: {} | undefined;
                    ymqTarget?: {
                        serviceAccountId?: string | undefined;
                        queueArn?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "versions">, never>>(object: I): ListFunctionsVersionsResponse;
};
export declare const ListFunctionOperationsRequest: {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest";
    encode(message: ListFunctionOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionOperationsRequest;
    fromJSON(object: any): ListFunctionOperationsRequest;
    toJSON(message: ListFunctionOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        functionId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        functionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "functionId">, never>>(object: I): ListFunctionOperationsRequest;
};
export declare const ListFunctionOperationsResponse: {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse";
    encode(message: ListFunctionOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionOperationsResponse;
    fromJSON(object: any): ListFunctionOperationsResponse;
    toJSON(message: ListFunctionOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListFunctionOperationsResponse;
};
export declare const CreateFunctionVersionRequest: {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest";
    encode(message: CreateFunctionVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionVersionRequest;
    fromJSON(object: any): CreateFunctionVersionRequest;
    toJSON(message: CreateFunctionVersionRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        content?: Buffer | undefined;
        logOptions?: {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
        } | undefined;
        resources?: {
            memory?: number | undefined;
        } | undefined;
        versionId?: string | undefined;
        serviceAccountId?: string | undefined;
        package?: {
            bucketName?: string | undefined;
            objectName?: string | undefined;
            sha256?: string | undefined;
        } | undefined;
        secrets?: {
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        }[] | undefined;
        environment?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        connectivity?: {
            subnetId?: string[] | undefined;
            networkId?: string | undefined;
        } | undefined;
        executionTimeout?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        storageMounts?: {
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointName?: string | undefined;
        }[] | undefined;
        functionId?: string | undefined;
        runtime?: string | undefined;
        entrypoint?: string | undefined;
        namedServiceAccounts?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        asyncInvocationConfig?: {
            serviceAccountId?: string | undefined;
            retriesCount?: number | undefined;
            successTarget?: {
                emptyTarget?: {} | undefined;
                ymqTarget?: {
                    serviceAccountId?: string | undefined;
                    queueArn?: string | undefined;
                } | undefined;
            } | undefined;
            failureTarget?: {
                emptyTarget?: {} | undefined;
                ymqTarget?: {
                    serviceAccountId?: string | undefined;
                    queueArn?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        tag?: string[] | undefined;
    } & {
        description?: string | undefined;
        content?: Buffer | undefined;
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
        } & {
            memory?: number | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "memory">, never>) | undefined;
        versionId?: string | undefined;
        serviceAccountId?: string | undefined;
        package?: ({
            bucketName?: string | undefined;
            objectName?: string | undefined;
            sha256?: string | undefined;
        } & {
            bucketName?: string | undefined;
            objectName?: string | undefined;
            sha256?: string | undefined;
        } & Record<Exclude<keyof I["package"], "$type" | "bucketName" | "objectName" | "sha256">, never>) | undefined;
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
        environment?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["environment"], string | number>, never>) | undefined;
        connectivity?: ({
            subnetId?: string[] | undefined;
            networkId?: string | undefined;
        } & {
            subnetId?: (string[] & string[] & Record<Exclude<keyof I["connectivity"]["subnetId"], "$type" | keyof string[]>, never>) | undefined;
            networkId?: string | undefined;
        } & Record<Exclude<keyof I["connectivity"], "$type" | "subnetId" | "networkId">, never>) | undefined;
        executionTimeout?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["executionTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
        storageMounts?: ({
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointName?: string | undefined;
        }[] & ({
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointName?: string | undefined;
        } & {
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointName?: string | undefined;
        } & Record<Exclude<keyof I["storageMounts"][number], "$type" | "prefix" | "bucketId" | "readOnly" | "mountPointName">, never>)[] & Record<Exclude<keyof I["storageMounts"], "$type" | keyof {
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointName?: string | undefined;
        }[]>, never>) | undefined;
        functionId?: string | undefined;
        runtime?: string | undefined;
        entrypoint?: string | undefined;
        namedServiceAccounts?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["namedServiceAccounts"], string | number>, never>) | undefined;
        asyncInvocationConfig?: ({
            serviceAccountId?: string | undefined;
            retriesCount?: number | undefined;
            successTarget?: {
                emptyTarget?: {} | undefined;
                ymqTarget?: {
                    serviceAccountId?: string | undefined;
                    queueArn?: string | undefined;
                } | undefined;
            } | undefined;
            failureTarget?: {
                emptyTarget?: {} | undefined;
                ymqTarget?: {
                    serviceAccountId?: string | undefined;
                    queueArn?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            retriesCount?: number | undefined;
            successTarget?: ({
                emptyTarget?: {} | undefined;
                ymqTarget?: {
                    serviceAccountId?: string | undefined;
                    queueArn?: string | undefined;
                } | undefined;
            } & {
                emptyTarget?: ({} & {} & Record<Exclude<keyof I["asyncInvocationConfig"]["successTarget"]["emptyTarget"], "$type">, never>) | undefined;
                ymqTarget?: ({
                    serviceAccountId?: string | undefined;
                    queueArn?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueArn?: string | undefined;
                } & Record<Exclude<keyof I["asyncInvocationConfig"]["successTarget"]["ymqTarget"], "$type" | "serviceAccountId" | "queueArn">, never>) | undefined;
            } & Record<Exclude<keyof I["asyncInvocationConfig"]["successTarget"], "$type" | "emptyTarget" | "ymqTarget">, never>) | undefined;
            failureTarget?: ({
                emptyTarget?: {} | undefined;
                ymqTarget?: {
                    serviceAccountId?: string | undefined;
                    queueArn?: string | undefined;
                } | undefined;
            } & {
                emptyTarget?: ({} & {} & Record<Exclude<keyof I["asyncInvocationConfig"]["failureTarget"]["emptyTarget"], "$type">, never>) | undefined;
                ymqTarget?: ({
                    serviceAccountId?: string | undefined;
                    queueArn?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueArn?: string | undefined;
                } & Record<Exclude<keyof I["asyncInvocationConfig"]["failureTarget"]["ymqTarget"], "$type" | "serviceAccountId" | "queueArn">, never>) | undefined;
            } & Record<Exclude<keyof I["asyncInvocationConfig"]["failureTarget"], "$type" | "emptyTarget" | "ymqTarget">, never>) | undefined;
        } & Record<Exclude<keyof I["asyncInvocationConfig"], "$type" | "serviceAccountId" | "retriesCount" | "successTarget" | "failureTarget">, never>) | undefined;
        tag?: (string[] & string[] & Record<Exclude<keyof I["tag"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "content" | "logOptions" | "resources" | "versionId" | "serviceAccountId" | "package" | "secrets" | "environment" | "connectivity" | "executionTimeout" | "storageMounts" | "functionId" | "runtime" | "entrypoint" | "namedServiceAccounts" | "asyncInvocationConfig" | "tag">, never>>(object: I): CreateFunctionVersionRequest;
};
export declare const CreateFunctionVersionRequest_EnvironmentEntry: {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry";
    encode(message: CreateFunctionVersionRequest_EnvironmentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionVersionRequest_EnvironmentEntry;
    fromJSON(object: any): CreateFunctionVersionRequest_EnvironmentEntry;
    toJSON(message: CreateFunctionVersionRequest_EnvironmentEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateFunctionVersionRequest_EnvironmentEntry;
};
export declare const CreateFunctionVersionRequest_NamedServiceAccountsEntry: {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry";
    encode(message: CreateFunctionVersionRequest_NamedServiceAccountsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionVersionRequest_NamedServiceAccountsEntry;
    fromJSON(object: any): CreateFunctionVersionRequest_NamedServiceAccountsEntry;
    toJSON(message: CreateFunctionVersionRequest_NamedServiceAccountsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateFunctionVersionRequest_NamedServiceAccountsEntry;
};
export declare const CreateFunctionVersionMetadata: {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata";
    encode(message: CreateFunctionVersionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFunctionVersionMetadata;
    fromJSON(object: any): CreateFunctionVersionMetadata;
    toJSON(message: CreateFunctionVersionMetadata): unknown;
    fromPartial<I extends {
        functionVersionId?: string | undefined;
    } & {
        functionVersionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionVersionId">, never>>(object: I): CreateFunctionVersionMetadata;
};
export declare const SetFunctionTagRequest: {
    $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagRequest";
    encode(message: SetFunctionTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetFunctionTagRequest;
    fromJSON(object: any): SetFunctionTagRequest;
    toJSON(message: SetFunctionTagRequest): unknown;
    fromPartial<I extends {
        tag?: string | undefined;
        functionVersionId?: string | undefined;
    } & {
        tag?: string | undefined;
        functionVersionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "tag" | "functionVersionId">, never>>(object: I): SetFunctionTagRequest;
};
export declare const RemoveFunctionTagRequest: {
    $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest";
    encode(message: RemoveFunctionTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveFunctionTagRequest;
    fromJSON(object: any): RemoveFunctionTagRequest;
    toJSON(message: RemoveFunctionTagRequest): unknown;
    fromPartial<I extends {
        tag?: string | undefined;
        functionVersionId?: string | undefined;
    } & {
        tag?: string | undefined;
        functionVersionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "tag" | "functionVersionId">, never>>(object: I): RemoveFunctionTagRequest;
};
export declare const SetFunctionTagMetadata: {
    $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata";
    encode(message: SetFunctionTagMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetFunctionTagMetadata;
    fromJSON(object: any): SetFunctionTagMetadata;
    toJSON(message: SetFunctionTagMetadata): unknown;
    fromPartial<I extends {
        functionVersionId?: string | undefined;
    } & {
        functionVersionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionVersionId">, never>>(object: I): SetFunctionTagMetadata;
};
export declare const RemoveFunctionTagMetadata: {
    $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata";
    encode(message: RemoveFunctionTagMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveFunctionTagMetadata;
    fromJSON(object: any): RemoveFunctionTagMetadata;
    toJSON(message: RemoveFunctionTagMetadata): unknown;
    fromPartial<I extends {
        functionVersionId?: string | undefined;
    } & {
        functionVersionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionVersionId">, never>>(object: I): RemoveFunctionTagMetadata;
};
export declare const ListFunctionTagHistoryRequest: {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest";
    encode(message: ListFunctionTagHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionTagHistoryRequest;
    fromJSON(object: any): ListFunctionTagHistoryRequest;
    toJSON(message: ListFunctionTagHistoryRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        functionId?: string | undefined;
        tag?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        functionId?: string | undefined;
        tag?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "functionId" | "tag">, never>>(object: I): ListFunctionTagHistoryRequest;
};
export declare const ListFunctionTagHistoryResponse: {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse";
    encode(message: ListFunctionTagHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionTagHistoryResponse;
    fromJSON(object: any): ListFunctionTagHistoryResponse;
    toJSON(message: ListFunctionTagHistoryResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        functionTagHistoryRecord?: {
            functionId?: string | undefined;
            tag?: string | undefined;
            functionVersionId?: string | undefined;
            effectiveFrom?: Date | undefined;
            effectiveTo?: Date | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        functionTagHistoryRecord?: ({
            functionId?: string | undefined;
            tag?: string | undefined;
            functionVersionId?: string | undefined;
            effectiveFrom?: Date | undefined;
            effectiveTo?: Date | undefined;
        }[] & ({
            functionId?: string | undefined;
            tag?: string | undefined;
            functionVersionId?: string | undefined;
            effectiveFrom?: Date | undefined;
            effectiveTo?: Date | undefined;
        } & {
            functionId?: string | undefined;
            tag?: string | undefined;
            functionVersionId?: string | undefined;
            effectiveFrom?: Date | undefined;
            effectiveTo?: Date | undefined;
        } & Record<Exclude<keyof I["functionTagHistoryRecord"][number], "$type" | "functionId" | "tag" | "functionVersionId" | "effectiveFrom" | "effectiveTo">, never>)[] & Record<Exclude<keyof I["functionTagHistoryRecord"], "$type" | keyof {
            functionId?: string | undefined;
            tag?: string | undefined;
            functionVersionId?: string | undefined;
            effectiveFrom?: Date | undefined;
            effectiveTo?: Date | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "functionTagHistoryRecord">, never>>(object: I): ListFunctionTagHistoryResponse;
};
export declare const ListFunctionTagHistoryResponse_FunctionTagHistoryRecord: {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord";
    encode(message: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord;
    fromJSON(object: any): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord;
    toJSON(message: ListFunctionTagHistoryResponse_FunctionTagHistoryRecord): unknown;
    fromPartial<I extends {
        functionId?: string | undefined;
        tag?: string | undefined;
        functionVersionId?: string | undefined;
        effectiveFrom?: Date | undefined;
        effectiveTo?: Date | undefined;
    } & {
        functionId?: string | undefined;
        tag?: string | undefined;
        functionVersionId?: string | undefined;
        effectiveFrom?: Date | undefined;
        effectiveTo?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionId" | "tag" | "functionVersionId" | "effectiveFrom" | "effectiveTo">, never>>(object: I): ListFunctionTagHistoryResponse_FunctionTagHistoryRecord;
};
export declare const ListScalingPoliciesRequest: {
    $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest";
    encode(message: ListScalingPoliciesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListScalingPoliciesRequest;
    fromJSON(object: any): ListScalingPoliciesRequest;
    toJSON(message: ListScalingPoliciesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        functionId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        functionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "functionId">, never>>(object: I): ListScalingPoliciesRequest;
};
export declare const ListScalingPoliciesResponse: {
    $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse";
    encode(message: ListScalingPoliciesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListScalingPoliciesResponse;
    fromJSON(object: any): ListScalingPoliciesResponse;
    toJSON(message: ListScalingPoliciesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        scalingPolicies?: {
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            zoneInstancesLimit?: number | undefined;
            zoneRequestsLimit?: number | undefined;
            functionId?: string | undefined;
            tag?: string | undefined;
            provisionedInstancesCount?: number | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        scalingPolicies?: ({
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            zoneInstancesLimit?: number | undefined;
            zoneRequestsLimit?: number | undefined;
            functionId?: string | undefined;
            tag?: string | undefined;
            provisionedInstancesCount?: number | undefined;
        }[] & ({
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            zoneInstancesLimit?: number | undefined;
            zoneRequestsLimit?: number | undefined;
            functionId?: string | undefined;
            tag?: string | undefined;
            provisionedInstancesCount?: number | undefined;
        } & {
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            zoneInstancesLimit?: number | undefined;
            zoneRequestsLimit?: number | undefined;
            functionId?: string | undefined;
            tag?: string | undefined;
            provisionedInstancesCount?: number | undefined;
        } & Record<Exclude<keyof I["scalingPolicies"][number], "$type" | "createdAt" | "modifiedAt" | "zoneInstancesLimit" | "zoneRequestsLimit" | "functionId" | "tag" | "provisionedInstancesCount">, never>)[] & Record<Exclude<keyof I["scalingPolicies"], "$type" | keyof {
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            zoneInstancesLimit?: number | undefined;
            zoneRequestsLimit?: number | undefined;
            functionId?: string | undefined;
            tag?: string | undefined;
            provisionedInstancesCount?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "scalingPolicies">, never>>(object: I): ListScalingPoliciesResponse;
};
export declare const SetScalingPolicyRequest: {
    $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest";
    encode(message: SetScalingPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetScalingPolicyRequest;
    fromJSON(object: any): SetScalingPolicyRequest;
    toJSON(message: SetScalingPolicyRequest): unknown;
    fromPartial<I extends {
        zoneInstancesLimit?: number | undefined;
        zoneRequestsLimit?: number | undefined;
        functionId?: string | undefined;
        tag?: string | undefined;
        provisionedInstancesCount?: number | undefined;
    } & {
        zoneInstancesLimit?: number | undefined;
        zoneRequestsLimit?: number | undefined;
        functionId?: string | undefined;
        tag?: string | undefined;
        provisionedInstancesCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "zoneInstancesLimit" | "zoneRequestsLimit" | "functionId" | "tag" | "provisionedInstancesCount">, never>>(object: I): SetScalingPolicyRequest;
};
export declare const SetScalingPolicyMetadata: {
    $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata";
    encode(message: SetScalingPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetScalingPolicyMetadata;
    fromJSON(object: any): SetScalingPolicyMetadata;
    toJSON(message: SetScalingPolicyMetadata): unknown;
    fromPartial<I extends {
        functionId?: string | undefined;
    } & {
        functionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionId">, never>>(object: I): SetScalingPolicyMetadata;
};
export declare const RemoveScalingPolicyRequest: {
    $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest";
    encode(message: RemoveScalingPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveScalingPolicyRequest;
    fromJSON(object: any): RemoveScalingPolicyRequest;
    toJSON(message: RemoveScalingPolicyRequest): unknown;
    fromPartial<I extends {
        functionId?: string | undefined;
        tag?: string | undefined;
    } & {
        functionId?: string | undefined;
        tag?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionId" | "tag">, never>>(object: I): RemoveScalingPolicyRequest;
};
export declare const RemoveScalingPolicyMetadata: {
    $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata";
    encode(message: RemoveScalingPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveScalingPolicyMetadata;
    fromJSON(object: any): RemoveScalingPolicyMetadata;
    toJSON(message: RemoveScalingPolicyMetadata): unknown;
    fromPartial<I extends {
        functionId?: string | undefined;
    } & {
        functionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "functionId">, never>>(object: I): RemoveScalingPolicyMetadata;
};
/** A set of methods for managing serverless functions. */
export declare const FunctionServiceService: {
    /**
     * Returns the specified function.
     *
     * To get the list of all available functions, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFunctionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFunctionRequest;
        readonly responseSerialize: (value: Function) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Function;
    };
    /** Retrieves the list of functions in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFunctionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFunctionsRequest;
        readonly responseSerialize: (value: ListFunctionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFunctionsResponse;
    };
    /** Creates a function in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFunctionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFunctionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified function. */
    readonly update: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateFunctionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateFunctionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified function. */
    readonly delete: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFunctionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFunctionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Returns the specified version of a function.
     *
     * To get the list of available version, make a [ListVersions] request.
     */
    readonly getVersion: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersion";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFunctionVersionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFunctionVersionRequest;
        readonly responseSerialize: (value: Version) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Version;
    };
    /**
     * Returns all versions with the specified tag.
     *
     * To get the list of all available versions, make a [ListVersions] request.
     */
    readonly getVersionByTag: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersionByTag";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFunctionVersionByTagRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFunctionVersionByTagRequest;
        readonly responseSerialize: (value: Version) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Version;
    };
    /**
     * Retrieves the list of versions for the specified function, or of all function versions
     * in the specified folder.
     */
    readonly listVersions: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListVersions";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFunctionsVersionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFunctionsVersionsRequest;
        readonly responseSerialize: (value: ListFunctionsVersionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFunctionsVersionsResponse;
    };
    /**
     * Deletes the specified version of a function.
     *
     * NOTE: old untagged function versions are deleted automatically.
     */
    readonly deleteVersion: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/DeleteVersion";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFunctionVersionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFunctionVersionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Set a tag for the specified version of a function. */
    readonly setTag: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetTag";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetFunctionTagRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetFunctionTagRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Remove a tag from the specified version of a function. */
    readonly removeTag: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveTag";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveFunctionTagRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveFunctionTagRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the log of tags assigned to versions of the specified function. */
    readonly listTagHistory: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListTagHistory";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFunctionTagHistoryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFunctionTagHistoryRequest;
        readonly responseSerialize: (value: ListFunctionTagHistoryResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFunctionTagHistoryResponse;
    };
    /** Creates a version for the specified function. */
    readonly createVersion: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/CreateVersion";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFunctionVersionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFunctionVersionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists available runtime environments for the specified function. */
    readonly listRuntimes: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListRuntimes";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRuntimesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRuntimesRequest;
        readonly responseSerialize: (value: ListRuntimesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRuntimesResponse;
    };
    /** Lists operations for the specified function. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFunctionOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFunctionOperationsRequest;
        readonly responseSerialize: (value: ListFunctionOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFunctionOperationsResponse;
    };
    /** Lists existing access bindings for the specified function. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the function. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified function. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists existing scaling policies for specified function */
    readonly listScalingPolicies: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListScalingPolicies";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListScalingPoliciesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListScalingPoliciesRequest;
        readonly responseSerialize: (value: ListScalingPoliciesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListScalingPoliciesResponse;
    };
    /** Set scaling policy for specified function and tag */
    readonly setScalingPolicy: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetScalingPolicy";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetScalingPolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetScalingPolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Remove scaling policy for specified function and tag */
    readonly removeScalingPolicy: {
        readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveScalingPolicy";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveScalingPolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveScalingPolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface FunctionServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified function.
     *
     * To get the list of all available functions, make a [List] request.
     */
    get: handleUnaryCall<GetFunctionRequest, Function>;
    /** Retrieves the list of functions in the specified folder. */
    list: handleUnaryCall<ListFunctionsRequest, ListFunctionsResponse>;
    /** Creates a function in the specified folder. */
    create: handleUnaryCall<CreateFunctionRequest, Operation>;
    /** Updates the specified function. */
    update: handleUnaryCall<UpdateFunctionRequest, Operation>;
    /** Deletes the specified function. */
    delete: handleUnaryCall<DeleteFunctionRequest, Operation>;
    /**
     * Returns the specified version of a function.
     *
     * To get the list of available version, make a [ListVersions] request.
     */
    getVersion: handleUnaryCall<GetFunctionVersionRequest, Version>;
    /**
     * Returns all versions with the specified tag.
     *
     * To get the list of all available versions, make a [ListVersions] request.
     */
    getVersionByTag: handleUnaryCall<GetFunctionVersionByTagRequest, Version>;
    /**
     * Retrieves the list of versions for the specified function, or of all function versions
     * in the specified folder.
     */
    listVersions: handleUnaryCall<ListFunctionsVersionsRequest, ListFunctionsVersionsResponse>;
    /**
     * Deletes the specified version of a function.
     *
     * NOTE: old untagged function versions are deleted automatically.
     */
    deleteVersion: handleUnaryCall<DeleteFunctionVersionRequest, Operation>;
    /** Set a tag for the specified version of a function. */
    setTag: handleUnaryCall<SetFunctionTagRequest, Operation>;
    /** Remove a tag from the specified version of a function. */
    removeTag: handleUnaryCall<RemoveFunctionTagRequest, Operation>;
    /** Returns the log of tags assigned to versions of the specified function. */
    listTagHistory: handleUnaryCall<ListFunctionTagHistoryRequest, ListFunctionTagHistoryResponse>;
    /** Creates a version for the specified function. */
    createVersion: handleUnaryCall<CreateFunctionVersionRequest, Operation>;
    /** Lists available runtime environments for the specified function. */
    listRuntimes: handleUnaryCall<ListRuntimesRequest, ListRuntimesResponse>;
    /** Lists operations for the specified function. */
    listOperations: handleUnaryCall<ListFunctionOperationsRequest, ListFunctionOperationsResponse>;
    /** Lists existing access bindings for the specified function. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the function. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified function. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Lists existing scaling policies for specified function */
    listScalingPolicies: handleUnaryCall<ListScalingPoliciesRequest, ListScalingPoliciesResponse>;
    /** Set scaling policy for specified function and tag */
    setScalingPolicy: handleUnaryCall<SetScalingPolicyRequest, Operation>;
    /** Remove scaling policy for specified function and tag */
    removeScalingPolicy: handleUnaryCall<RemoveScalingPolicyRequest, Operation>;
}
export interface FunctionServiceClient extends Client {
    /**
     * Returns the specified function.
     *
     * To get the list of all available functions, make a [List] request.
     */
    get(request: GetFunctionRequest, callback: (error: ServiceError | null, response: Function) => void): ClientUnaryCall;
    get(request: GetFunctionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Function) => void): ClientUnaryCall;
    get(request: GetFunctionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Function) => void): ClientUnaryCall;
    /** Retrieves the list of functions in the specified folder. */
    list(request: ListFunctionsRequest, callback: (error: ServiceError | null, response: ListFunctionsResponse) => void): ClientUnaryCall;
    list(request: ListFunctionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFunctionsResponse) => void): ClientUnaryCall;
    list(request: ListFunctionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFunctionsResponse) => void): ClientUnaryCall;
    /** Creates a function in the specified folder. */
    create(request: CreateFunctionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFunctionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFunctionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified function. */
    update(request: UpdateFunctionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFunctionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFunctionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified function. */
    delete(request: DeleteFunctionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFunctionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFunctionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Returns the specified version of a function.
     *
     * To get the list of available version, make a [ListVersions] request.
     */
    getVersion(request: GetFunctionVersionRequest, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    getVersion(request: GetFunctionVersionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    getVersion(request: GetFunctionVersionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    /**
     * Returns all versions with the specified tag.
     *
     * To get the list of all available versions, make a [ListVersions] request.
     */
    getVersionByTag(request: GetFunctionVersionByTagRequest, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    getVersionByTag(request: GetFunctionVersionByTagRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    getVersionByTag(request: GetFunctionVersionByTagRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Version) => void): ClientUnaryCall;
    /**
     * Retrieves the list of versions for the specified function, or of all function versions
     * in the specified folder.
     */
    listVersions(request: ListFunctionsVersionsRequest, callback: (error: ServiceError | null, response: ListFunctionsVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListFunctionsVersionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFunctionsVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListFunctionsVersionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFunctionsVersionsResponse) => void): ClientUnaryCall;
    /**
     * Deletes the specified version of a function.
     *
     * NOTE: old untagged function versions are deleted automatically.
     */
    deleteVersion(request: DeleteFunctionVersionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteVersion(request: DeleteFunctionVersionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteVersion(request: DeleteFunctionVersionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Set a tag for the specified version of a function. */
    setTag(request: SetFunctionTagRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setTag(request: SetFunctionTagRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setTag(request: SetFunctionTagRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Remove a tag from the specified version of a function. */
    removeTag(request: RemoveFunctionTagRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeTag(request: RemoveFunctionTagRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeTag(request: RemoveFunctionTagRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the log of tags assigned to versions of the specified function. */
    listTagHistory(request: ListFunctionTagHistoryRequest, callback: (error: ServiceError | null, response: ListFunctionTagHistoryResponse) => void): ClientUnaryCall;
    listTagHistory(request: ListFunctionTagHistoryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFunctionTagHistoryResponse) => void): ClientUnaryCall;
    listTagHistory(request: ListFunctionTagHistoryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFunctionTagHistoryResponse) => void): ClientUnaryCall;
    /** Creates a version for the specified function. */
    createVersion(request: CreateFunctionVersionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createVersion(request: CreateFunctionVersionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createVersion(request: CreateFunctionVersionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists available runtime environments for the specified function. */
    listRuntimes(request: ListRuntimesRequest, callback: (error: ServiceError | null, response: ListRuntimesResponse) => void): ClientUnaryCall;
    listRuntimes(request: ListRuntimesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRuntimesResponse) => void): ClientUnaryCall;
    listRuntimes(request: ListRuntimesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRuntimesResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified function. */
    listOperations(request: ListFunctionOperationsRequest, callback: (error: ServiceError | null, response: ListFunctionOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFunctionOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFunctionOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFunctionOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFunctionOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified function. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the function. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified function. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists existing scaling policies for specified function */
    listScalingPolicies(request: ListScalingPoliciesRequest, callback: (error: ServiceError | null, response: ListScalingPoliciesResponse) => void): ClientUnaryCall;
    listScalingPolicies(request: ListScalingPoliciesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListScalingPoliciesResponse) => void): ClientUnaryCall;
    listScalingPolicies(request: ListScalingPoliciesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListScalingPoliciesResponse) => void): ClientUnaryCall;
    /** Set scaling policy for specified function and tag */
    setScalingPolicy(request: SetScalingPolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setScalingPolicy(request: SetScalingPolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setScalingPolicy(request: SetScalingPolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Remove scaling policy for specified function and tag */
    removeScalingPolicy(request: RemoveScalingPolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeScalingPolicy(request: RemoveScalingPolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeScalingPolicy(request: RemoveScalingPolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const FunctionServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): FunctionServiceClient;
    service: typeof FunctionServiceService;
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
