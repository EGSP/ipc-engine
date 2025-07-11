/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { LifecyclePolicy_Status, LifecyclePolicy, LifecycleRule } from "../../../../yandex/cloud/containerregistry/v1/lifecycle_policy";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Image } from "../../../../yandex/cloud/containerregistry/v1/image";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface GetLifecyclePolicyRequest {
    $type: "yandex.cloud.containerregistry.v1.GetLifecyclePolicyRequest";
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}
export interface ListLifecyclePoliciesRequest {
    $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesRequest";
    /** ID of the lifecycle policy. */
    registryId: string | undefined;
    /** Repository of the lifecycle policy. */
    repositoryId: string | undefined;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns
     * a [ListLifecyclePoliciesResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListLifecyclePoliciesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters lifecycle policy resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * Sorting the list by [LifecyclePolicy.name], [LifecyclePolicy.created_at] and [LifecyclePolicy.status] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}
export interface ListLifecyclePoliciesResponse {
    $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesResponse";
    /** List of lifecycle policies. */
    lifecyclePolicies: LifecyclePolicy[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListLifecyclePoliciesRequest.page_size], use `next_page_token` as the value
     * for the [ListLifecyclePoliciesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateLifecyclePolicyRequest {
    $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyRequest";
    /** ID of the lifecycle policy repository. */
    repositoryId: string;
    /** Name of lifecycle policy. */
    name: string;
    /** Description of lifecycle policy. */
    description: string;
    /** Status of the lifecycle policy. */
    status: LifecyclePolicy_Status;
    /** The rules of the lifecycle policy. */
    rules: LifecycleRule[];
}
export interface UpdateLifecyclePolicyRequest {
    $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyRequest";
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
    /** Field mask that specifies which fields of the lifecycle policy resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of lifecycle policy. */
    name: string;
    /** Description of lifecycle policy. */
    description: string;
    /** Status of the lifecycle policy. */
    status: LifecyclePolicy_Status;
    /** The rules of the lifecycle policy. */
    rules: LifecycleRule[];
}
export interface DeleteLifecyclePolicyRequest {
    $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyRequest";
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}
export interface CreateLifecyclePolicyMetadata {
    $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyMetadata";
    /** ID of the lifecycle policy resource that is being created. */
    lifecyclePolicyId: string;
}
export interface UpdateLifecyclePolicyMetadata {
    $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyMetadata";
    /** ID of the lifecycle policy resource that is being updated. */
    lifecyclePolicyId: string;
}
export interface DeleteLifecyclePolicyMetadata {
    $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyMetadata";
    /** ID of the lifecycle policy resource that is being deleted. */
    lifecyclePolicyId: string;
}
export interface DryRunLifecyclePolicyRequest {
    $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyRequest";
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}
export interface DryRunLifecyclePolicyMetadata {
    $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyMetadata";
    /** ID of the dry run result of the lifecycle policy. */
    dryRunLifecyclePolicyResultId: string;
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
}
export interface DryRunLifecyclePolicyResult {
    $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyResult";
    /** ID of the dry run result of the lifecycle policy. */
    dryRunLifecyclePolicyResultId: string;
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
    /** Time of the getting result. */
    runAt?: Date;
    /** Count of affected images. */
    affectedImagesCount: number;
}
export interface GetDryRunLifecyclePolicyResultRequest {
    $type: "yandex.cloud.containerregistry.v1.GetDryRunLifecyclePolicyResultRequest";
    /** ID of the dry run result of the lifecycle policy. */
    dryRunLifecyclePolicyResultId: string;
}
export interface ListDryRunLifecyclePolicyResultsRequest {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsRequest";
    /** ID of the lifecycle policy. */
    lifecyclePolicyId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns
     * a [ListDryRunLifecyclePolicyResultsResponse.next_page_token] that can be used to get
     * the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDryRunLifecyclePolicyResultsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters dry run results listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * Sorting the list by [DryRunLifecyclePolicyResult.run_at] and [DryRunLifecyclePolicyResult.affected_images_count] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}
export interface ListDryRunLifecyclePolicyResultsResponse {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsResponse";
    /** List of results of dry runs of a lifecycle policy. */
    dryRunLifecyclePolicyResults: DryRunLifecyclePolicyResult[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDryRunLifecyclePolicyResultsRequest.page_size] use `next_page_token` as the value
     * for the [ListDryRunLifecyclePolicyResultsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesRequest";
    /** ID of the dry run result of the lifecycle policy */
    dryRunLifecyclePolicyResultId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDryRunLifecyclePolicyResultAffectedImagesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDryRunLifecyclePolicyResultAffectedImagesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters affected images listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [LifecyclePolicy.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * Sorting the list by [LifecyclePolicy.name] and [LifecyclePolicy.created_at] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}
export interface ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesResponse";
    /** List of affected images. */
    affectedImages: Image[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDryRunLifecyclePolicyResultAffectedImagesRequest.page_size], use `next_page_token` as the value
     * for the [ListDryRunLifecyclePolicyResultAffectedImagesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetLifecyclePolicyRequest: {
    $type: "yandex.cloud.containerregistry.v1.GetLifecyclePolicyRequest";
    encode(message: GetLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLifecyclePolicyRequest;
    fromJSON(object: any): GetLifecyclePolicyRequest;
    toJSON(message: GetLifecyclePolicyRequest): unknown;
    fromPartial<I extends {
        lifecyclePolicyId?: string | undefined;
    } & {
        lifecyclePolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lifecyclePolicyId">, never>>(object: I): GetLifecyclePolicyRequest;
};
export declare const ListLifecyclePoliciesRequest: {
    $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesRequest";
    encode(message: ListLifecyclePoliciesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLifecyclePoliciesRequest;
    fromJSON(object: any): ListLifecyclePoliciesRequest;
    toJSON(message: ListLifecyclePoliciesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        orderBy?: string | undefined;
        registryId?: string | undefined;
        repositoryId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        orderBy?: string | undefined;
        registryId?: string | undefined;
        repositoryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "orderBy" | "registryId" | "repositoryId">, never>>(object: I): ListLifecyclePoliciesRequest;
};
export declare const ListLifecyclePoliciesResponse: {
    $type: "yandex.cloud.containerregistry.v1.ListLifecyclePoliciesResponse";
    encode(message: ListLifecyclePoliciesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLifecyclePoliciesResponse;
    fromJSON(object: any): ListLifecyclePoliciesResponse;
    toJSON(message: ListLifecyclePoliciesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        lifecyclePolicies?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: LifecyclePolicy_Status | undefined;
            rules?: {
                description?: string | undefined;
                expirePeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                tagRegexp?: string | undefined;
                untagged?: boolean | undefined;
                retainedTop?: number | undefined;
            }[] | undefined;
            repositoryId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        lifecyclePolicies?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: LifecyclePolicy_Status | undefined;
            rules?: {
                description?: string | undefined;
                expirePeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                tagRegexp?: string | undefined;
                untagged?: boolean | undefined;
                retainedTop?: number | undefined;
            }[] | undefined;
            repositoryId?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: LifecyclePolicy_Status | undefined;
            rules?: {
                description?: string | undefined;
                expirePeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                tagRegexp?: string | undefined;
                untagged?: boolean | undefined;
                retainedTop?: number | undefined;
            }[] | undefined;
            repositoryId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: LifecyclePolicy_Status | undefined;
            rules?: ({
                description?: string | undefined;
                expirePeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                tagRegexp?: string | undefined;
                untagged?: boolean | undefined;
                retainedTop?: number | undefined;
            }[] & ({
                description?: string | undefined;
                expirePeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                tagRegexp?: string | undefined;
                untagged?: boolean | undefined;
                retainedTop?: number | undefined;
            } & {
                description?: string | undefined;
                expirePeriod?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["lifecyclePolicies"][number]["rules"][number]["expirePeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
                tagRegexp?: string | undefined;
                untagged?: boolean | undefined;
                retainedTop?: number | undefined;
            } & Record<Exclude<keyof I["lifecyclePolicies"][number]["rules"][number], "$type" | "description" | "expirePeriod" | "tagRegexp" | "untagged" | "retainedTop">, never>)[] & Record<Exclude<keyof I["lifecyclePolicies"][number]["rules"], "$type" | keyof {
                description?: string | undefined;
                expirePeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                tagRegexp?: string | undefined;
                untagged?: boolean | undefined;
                retainedTop?: number | undefined;
            }[]>, never>) | undefined;
            repositoryId?: string | undefined;
        } & Record<Exclude<keyof I["lifecyclePolicies"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "rules" | "repositoryId">, never>)[] & Record<Exclude<keyof I["lifecyclePolicies"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: LifecyclePolicy_Status | undefined;
            rules?: {
                description?: string | undefined;
                expirePeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                tagRegexp?: string | undefined;
                untagged?: boolean | undefined;
                retainedTop?: number | undefined;
            }[] | undefined;
            repositoryId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "lifecyclePolicies">, never>>(object: I): ListLifecyclePoliciesResponse;
};
export declare const CreateLifecyclePolicyRequest: {
    $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyRequest";
    encode(message: CreateLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLifecyclePolicyRequest;
    fromJSON(object: any): CreateLifecyclePolicyRequest;
    toJSON(message: CreateLifecyclePolicyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        status?: LifecyclePolicy_Status | undefined;
        rules?: {
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        }[] | undefined;
        repositoryId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        status?: LifecyclePolicy_Status | undefined;
        rules?: ({
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        }[] & ({
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        } & {
            description?: string | undefined;
            expirePeriod?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["rules"][number]["expirePeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        } & Record<Exclude<keyof I["rules"][number], "$type" | "description" | "expirePeriod" | "tagRegexp" | "untagged" | "retainedTop">, never>)[] & Record<Exclude<keyof I["rules"], "$type" | keyof {
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        }[]>, never>) | undefined;
        repositoryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "status" | "rules" | "repositoryId">, never>>(object: I): CreateLifecyclePolicyRequest;
};
export declare const UpdateLifecyclePolicyRequest: {
    $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyRequest";
    encode(message: UpdateLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLifecyclePolicyRequest;
    fromJSON(object: any): UpdateLifecyclePolicyRequest;
    toJSON(message: UpdateLifecyclePolicyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        status?: LifecyclePolicy_Status | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        rules?: {
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        }[] | undefined;
        lifecyclePolicyId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        status?: LifecyclePolicy_Status | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        rules?: ({
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        }[] & ({
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        } & {
            description?: string | undefined;
            expirePeriod?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["rules"][number]["expirePeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        } & Record<Exclude<keyof I["rules"][number], "$type" | "description" | "expirePeriod" | "tagRegexp" | "untagged" | "retainedTop">, never>)[] & Record<Exclude<keyof I["rules"], "$type" | keyof {
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        }[]>, never>) | undefined;
        lifecyclePolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "status" | "updateMask" | "rules" | "lifecyclePolicyId">, never>>(object: I): UpdateLifecyclePolicyRequest;
};
export declare const DeleteLifecyclePolicyRequest: {
    $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyRequest";
    encode(message: DeleteLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLifecyclePolicyRequest;
    fromJSON(object: any): DeleteLifecyclePolicyRequest;
    toJSON(message: DeleteLifecyclePolicyRequest): unknown;
    fromPartial<I extends {
        lifecyclePolicyId?: string | undefined;
    } & {
        lifecyclePolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lifecyclePolicyId">, never>>(object: I): DeleteLifecyclePolicyRequest;
};
export declare const CreateLifecyclePolicyMetadata: {
    $type: "yandex.cloud.containerregistry.v1.CreateLifecyclePolicyMetadata";
    encode(message: CreateLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLifecyclePolicyMetadata;
    fromJSON(object: any): CreateLifecyclePolicyMetadata;
    toJSON(message: CreateLifecyclePolicyMetadata): unknown;
    fromPartial<I extends {
        lifecyclePolicyId?: string | undefined;
    } & {
        lifecyclePolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lifecyclePolicyId">, never>>(object: I): CreateLifecyclePolicyMetadata;
};
export declare const UpdateLifecyclePolicyMetadata: {
    $type: "yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyMetadata";
    encode(message: UpdateLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLifecyclePolicyMetadata;
    fromJSON(object: any): UpdateLifecyclePolicyMetadata;
    toJSON(message: UpdateLifecyclePolicyMetadata): unknown;
    fromPartial<I extends {
        lifecyclePolicyId?: string | undefined;
    } & {
        lifecyclePolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lifecyclePolicyId">, never>>(object: I): UpdateLifecyclePolicyMetadata;
};
export declare const DeleteLifecyclePolicyMetadata: {
    $type: "yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyMetadata";
    encode(message: DeleteLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLifecyclePolicyMetadata;
    fromJSON(object: any): DeleteLifecyclePolicyMetadata;
    toJSON(message: DeleteLifecyclePolicyMetadata): unknown;
    fromPartial<I extends {
        lifecyclePolicyId?: string | undefined;
    } & {
        lifecyclePolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lifecyclePolicyId">, never>>(object: I): DeleteLifecyclePolicyMetadata;
};
export declare const DryRunLifecyclePolicyRequest: {
    $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyRequest";
    encode(message: DryRunLifecyclePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DryRunLifecyclePolicyRequest;
    fromJSON(object: any): DryRunLifecyclePolicyRequest;
    toJSON(message: DryRunLifecyclePolicyRequest): unknown;
    fromPartial<I extends {
        lifecyclePolicyId?: string | undefined;
    } & {
        lifecyclePolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lifecyclePolicyId">, never>>(object: I): DryRunLifecyclePolicyRequest;
};
export declare const DryRunLifecyclePolicyMetadata: {
    $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyMetadata";
    encode(message: DryRunLifecyclePolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DryRunLifecyclePolicyMetadata;
    fromJSON(object: any): DryRunLifecyclePolicyMetadata;
    toJSON(message: DryRunLifecyclePolicyMetadata): unknown;
    fromPartial<I extends {
        lifecyclePolicyId?: string | undefined;
        dryRunLifecyclePolicyResultId?: string | undefined;
    } & {
        lifecyclePolicyId?: string | undefined;
        dryRunLifecyclePolicyResultId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lifecyclePolicyId" | "dryRunLifecyclePolicyResultId">, never>>(object: I): DryRunLifecyclePolicyMetadata;
};
export declare const DryRunLifecyclePolicyResult: {
    $type: "yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyResult";
    encode(message: DryRunLifecyclePolicyResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DryRunLifecyclePolicyResult;
    fromJSON(object: any): DryRunLifecyclePolicyResult;
    toJSON(message: DryRunLifecyclePolicyResult): unknown;
    fromPartial<I extends {
        lifecyclePolicyId?: string | undefined;
        dryRunLifecyclePolicyResultId?: string | undefined;
        affectedImagesCount?: number | undefined;
        runAt?: Date | undefined;
    } & {
        lifecyclePolicyId?: string | undefined;
        dryRunLifecyclePolicyResultId?: string | undefined;
        affectedImagesCount?: number | undefined;
        runAt?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "lifecyclePolicyId" | "dryRunLifecyclePolicyResultId" | "affectedImagesCount" | "runAt">, never>>(object: I): DryRunLifecyclePolicyResult;
};
export declare const GetDryRunLifecyclePolicyResultRequest: {
    $type: "yandex.cloud.containerregistry.v1.GetDryRunLifecyclePolicyResultRequest";
    encode(message: GetDryRunLifecyclePolicyResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDryRunLifecyclePolicyResultRequest;
    fromJSON(object: any): GetDryRunLifecyclePolicyResultRequest;
    toJSON(message: GetDryRunLifecyclePolicyResultRequest): unknown;
    fromPartial<I extends {
        dryRunLifecyclePolicyResultId?: string | undefined;
    } & {
        dryRunLifecyclePolicyResultId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "dryRunLifecyclePolicyResultId">, never>>(object: I): GetDryRunLifecyclePolicyResultRequest;
};
export declare const ListDryRunLifecyclePolicyResultsRequest: {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsRequest";
    encode(message: ListDryRunLifecyclePolicyResultsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDryRunLifecyclePolicyResultsRequest;
    fromJSON(object: any): ListDryRunLifecyclePolicyResultsRequest;
    toJSON(message: ListDryRunLifecyclePolicyResultsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        orderBy?: string | undefined;
        lifecyclePolicyId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        orderBy?: string | undefined;
        lifecyclePolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "orderBy" | "lifecyclePolicyId">, never>>(object: I): ListDryRunLifecyclePolicyResultsRequest;
};
export declare const ListDryRunLifecyclePolicyResultsResponse: {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsResponse";
    encode(message: ListDryRunLifecyclePolicyResultsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDryRunLifecyclePolicyResultsResponse;
    fromJSON(object: any): ListDryRunLifecyclePolicyResultsResponse;
    toJSON(message: ListDryRunLifecyclePolicyResultsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        dryRunLifecyclePolicyResults?: {
            lifecyclePolicyId?: string | undefined;
            dryRunLifecyclePolicyResultId?: string | undefined;
            affectedImagesCount?: number | undefined;
            runAt?: Date | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        dryRunLifecyclePolicyResults?: ({
            lifecyclePolicyId?: string | undefined;
            dryRunLifecyclePolicyResultId?: string | undefined;
            affectedImagesCount?: number | undefined;
            runAt?: Date | undefined;
        }[] & ({
            lifecyclePolicyId?: string | undefined;
            dryRunLifecyclePolicyResultId?: string | undefined;
            affectedImagesCount?: number | undefined;
            runAt?: Date | undefined;
        } & {
            lifecyclePolicyId?: string | undefined;
            dryRunLifecyclePolicyResultId?: string | undefined;
            affectedImagesCount?: number | undefined;
            runAt?: Date | undefined;
        } & Record<Exclude<keyof I["dryRunLifecyclePolicyResults"][number], "$type" | "lifecyclePolicyId" | "dryRunLifecyclePolicyResultId" | "affectedImagesCount" | "runAt">, never>)[] & Record<Exclude<keyof I["dryRunLifecyclePolicyResults"], "$type" | keyof {
            lifecyclePolicyId?: string | undefined;
            dryRunLifecyclePolicyResultId?: string | undefined;
            affectedImagesCount?: number | undefined;
            runAt?: Date | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "dryRunLifecyclePolicyResults">, never>>(object: I): ListDryRunLifecyclePolicyResultsResponse;
};
export declare const ListDryRunLifecyclePolicyResultAffectedImagesRequest: {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesRequest";
    encode(message: ListDryRunLifecyclePolicyResultAffectedImagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    fromJSON(object: any): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    toJSON(message: ListDryRunLifecyclePolicyResultAffectedImagesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        orderBy?: string | undefined;
        dryRunLifecyclePolicyResultId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        orderBy?: string | undefined;
        dryRunLifecyclePolicyResultId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "orderBy" | "dryRunLifecyclePolicyResultId">, never>>(object: I): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
};
export declare const ListDryRunLifecyclePolicyResultAffectedImagesResponse: {
    $type: "yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesResponse";
    encode(message: ListDryRunLifecyclePolicyResultAffectedImagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDryRunLifecyclePolicyResultAffectedImagesResponse;
    fromJSON(object: any): ListDryRunLifecyclePolicyResultAffectedImagesResponse;
    toJSON(message: ListDryRunLifecyclePolicyResultAffectedImagesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        affectedImages?: {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            config?: {
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            } | undefined;
            digest?: string | undefined;
            compressedSize?: number | undefined;
            tags?: string[] | undefined;
            layers?: {
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        affectedImages?: ({
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            config?: {
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            } | undefined;
            digest?: string | undefined;
            compressedSize?: number | undefined;
            tags?: string[] | undefined;
            layers?: {
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            config?: {
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            } | undefined;
            digest?: string | undefined;
            compressedSize?: number | undefined;
            tags?: string[] | undefined;
            layers?: {
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            config?: ({
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            } & {
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: (string[] & string[] & Record<Exclude<keyof I["affectedImages"][number]["config"]["urls"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["affectedImages"][number]["config"], "$type" | "id" | "size" | "digest" | "urls">, never>) | undefined;
            digest?: string | undefined;
            compressedSize?: number | undefined;
            tags?: (string[] & string[] & Record<Exclude<keyof I["affectedImages"][number]["tags"], "$type" | keyof string[]>, never>) | undefined;
            layers?: ({
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            }[] & ({
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            } & {
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: (string[] & string[] & Record<Exclude<keyof I["affectedImages"][number]["layers"][number]["urls"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["affectedImages"][number]["layers"][number], "$type" | "id" | "size" | "digest" | "urls">, never>)[] & Record<Exclude<keyof I["affectedImages"][number]["layers"], "$type" | keyof {
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["affectedImages"][number], "$type" | "id" | "name" | "createdAt" | "config" | "digest" | "compressedSize" | "tags" | "layers">, never>)[] & Record<Exclude<keyof I["affectedImages"], "$type" | keyof {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            config?: {
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            } | undefined;
            digest?: string | undefined;
            compressedSize?: number | undefined;
            tags?: string[] | undefined;
            layers?: {
                id?: string | undefined;
                size?: number | undefined;
                digest?: string | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "affectedImages">, never>>(object: I): ListDryRunLifecyclePolicyResultAffectedImagesResponse;
};
/** A set of methods for managing Lifecycle policy resources. */
export declare const LifecyclePolicyServiceService: {
    /**
     * Returns the specified lifecycle policy.
     *
     * To get the list of all available lifecycle policies, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLifecyclePolicyRequest;
        readonly responseSerialize: (value: LifecyclePolicy) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LifecyclePolicy;
    };
    /** Retrieves the list of lifecycle policies in the specified repository. */
    readonly list: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLifecyclePoliciesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLifecyclePoliciesRequest;
        readonly responseSerialize: (value: ListLifecyclePoliciesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLifecyclePoliciesResponse;
    };
    /** Creates a lifecycle policy in the specified repository. */
    readonly create: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified lifecycle policy. */
    readonly update: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified lifecycle policy. */
    readonly delete: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a request of a dry run of the lifecycle policy. */
    readonly dryRun: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/DryRun";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DryRunLifecyclePolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DryRunLifecyclePolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the dry run result of the specified lifecycle policy. */
    readonly getDryRunResult: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/GetDryRunResult";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDryRunLifecyclePolicyResultRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDryRunLifecyclePolicyResultRequest;
        readonly responseSerialize: (value: DryRunLifecyclePolicyResult) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DryRunLifecyclePolicyResult;
    };
    /** Retrieves the list of the dry run results. */
    readonly listDryRunResults: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResults";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDryRunLifecyclePolicyResultsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultsRequest;
        readonly responseSerialize: (value: ListDryRunLifecyclePolicyResultsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultsResponse;
    };
    /** Retrieves the list of the affected images. */
    readonly listDryRunResultAffectedImages: {
        readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResultAffectedImages";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDryRunLifecyclePolicyResultAffectedImagesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultAffectedImagesRequest;
        readonly responseSerialize: (value: ListDryRunLifecyclePolicyResultAffectedImagesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDryRunLifecyclePolicyResultAffectedImagesResponse;
    };
};
export interface LifecyclePolicyServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified lifecycle policy.
     *
     * To get the list of all available lifecycle policies, make a [List] request.
     */
    get: handleUnaryCall<GetLifecyclePolicyRequest, LifecyclePolicy>;
    /** Retrieves the list of lifecycle policies in the specified repository. */
    list: handleUnaryCall<ListLifecyclePoliciesRequest, ListLifecyclePoliciesResponse>;
    /** Creates a lifecycle policy in the specified repository. */
    create: handleUnaryCall<CreateLifecyclePolicyRequest, Operation>;
    /** Updates the specified lifecycle policy. */
    update: handleUnaryCall<UpdateLifecyclePolicyRequest, Operation>;
    /** Deletes the specified lifecycle policy. */
    delete: handleUnaryCall<DeleteLifecyclePolicyRequest, Operation>;
    /** Creates a request of a dry run of the lifecycle policy. */
    dryRun: handleUnaryCall<DryRunLifecyclePolicyRequest, Operation>;
    /** Returns the dry run result of the specified lifecycle policy. */
    getDryRunResult: handleUnaryCall<GetDryRunLifecyclePolicyResultRequest, DryRunLifecyclePolicyResult>;
    /** Retrieves the list of the dry run results. */
    listDryRunResults: handleUnaryCall<ListDryRunLifecyclePolicyResultsRequest, ListDryRunLifecyclePolicyResultsResponse>;
    /** Retrieves the list of the affected images. */
    listDryRunResultAffectedImages: handleUnaryCall<ListDryRunLifecyclePolicyResultAffectedImagesRequest, ListDryRunLifecyclePolicyResultAffectedImagesResponse>;
}
export interface LifecyclePolicyServiceClient extends Client {
    /**
     * Returns the specified lifecycle policy.
     *
     * To get the list of all available lifecycle policies, make a [List] request.
     */
    get(request: GetLifecyclePolicyRequest, callback: (error: ServiceError | null, response: LifecyclePolicy) => void): ClientUnaryCall;
    get(request: GetLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LifecyclePolicy) => void): ClientUnaryCall;
    get(request: GetLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LifecyclePolicy) => void): ClientUnaryCall;
    /** Retrieves the list of lifecycle policies in the specified repository. */
    list(request: ListLifecyclePoliciesRequest, callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void): ClientUnaryCall;
    list(request: ListLifecyclePoliciesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void): ClientUnaryCall;
    list(request: ListLifecyclePoliciesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLifecyclePoliciesResponse) => void): ClientUnaryCall;
    /** Creates a lifecycle policy in the specified repository. */
    create(request: CreateLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified lifecycle policy. */
    update(request: UpdateLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified lifecycle policy. */
    delete(request: DeleteLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a request of a dry run of the lifecycle policy. */
    dryRun(request: DryRunLifecyclePolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    dryRun(request: DryRunLifecyclePolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    dryRun(request: DryRunLifecyclePolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the dry run result of the specified lifecycle policy. */
    getDryRunResult(request: GetDryRunLifecyclePolicyResultRequest, callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void): ClientUnaryCall;
    getDryRunResult(request: GetDryRunLifecyclePolicyResultRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void): ClientUnaryCall;
    getDryRunResult(request: GetDryRunLifecyclePolicyResultRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DryRunLifecyclePolicyResult) => void): ClientUnaryCall;
    /** Retrieves the list of the dry run results. */
    listDryRunResults(request: ListDryRunLifecyclePolicyResultsRequest, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void): ClientUnaryCall;
    listDryRunResults(request: ListDryRunLifecyclePolicyResultsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void): ClientUnaryCall;
    listDryRunResults(request: ListDryRunLifecyclePolicyResultsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of the affected images. */
    listDryRunResultAffectedImages(request: ListDryRunLifecyclePolicyResultAffectedImagesRequest, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): ClientUnaryCall;
    listDryRunResultAffectedImages(request: ListDryRunLifecyclePolicyResultAffectedImagesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): ClientUnaryCall;
    listDryRunResultAffectedImages(request: ListDryRunLifecyclePolicyResultAffectedImagesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): ClientUnaryCall;
}
export declare const LifecyclePolicyServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): LifecyclePolicyServiceClient;
    service: typeof LifecyclePolicyServiceService;
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
