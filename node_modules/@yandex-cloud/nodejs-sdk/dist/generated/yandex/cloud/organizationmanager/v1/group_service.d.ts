/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Group } from "../../../../yandex/cloud/organizationmanager/v1/group";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1";
export interface GetGroupRequest {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupRequest";
    /**
     * ID of the Group resource to return.
     * To get the group ID, use a [GroupService.List] request.
     */
    groupId: string;
}
export interface ListGroupsRequest {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupsRequest";
    /**
     * ID of the organization to list groups in.
     * To get the organization ID, use a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListGroupsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Group.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}
export interface ListGroupsResponse {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupsResponse";
    /** List of Group resources. */
    groups: Group[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListGroupsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateGroupRequest {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupRequest";
    /**
     * ID of the organization to create a group in.
     * To get the organization ID, use a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /**
     * Name of the group.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the group. */
    description: string;
}
export interface CreateGroupMetadata {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMetadata";
    /** ID of the group that is being created. */
    groupId: string;
}
export interface UpdateGroupRequest {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupRequest";
    /**
     * ID of the Group resource to update.
     * To get the group ID, use a [GroupService.List] request.
     */
    groupId: string;
    /** Field mask that specifies which fields of the Group resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the group.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the group. */
    description: string;
}
export interface UpdateGroupMetadata {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMetadata";
    /** ID of the Group resource that is being updated. */
    groupId: string;
}
export interface DeleteGroupRequest {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupRequest";
    /**
     * ID of the group to delete.
     * To get the group ID, use a [GroupService.List] request.
     */
    groupId: string;
}
export interface DeleteGroupMetadata {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMetadata";
    /** ID of the group that is being deleted. */
    groupId: string;
}
export interface ListGroupOperationsRequest {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsRequest";
    /** ID of the Group resource to list operations for. */
    groupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListGroupOperationsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}
export interface ListGroupOperationsResponse {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsResponse";
    /** List of operations for the specified group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListGroupMembersRequest {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersRequest";
    /** ID of the Group resource to list members for. */
    groupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListGroupMembersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListGroupMembersResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}
export interface ListGroupMembersResponse {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersResponse";
    /** List of members for the specified group. */
    members: GroupMember[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListGroupMembersRequest.page_size], use the [next_page_token] as the value
     * for the [ListGroupMembersRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface GroupMember {
    $type: "yandex.cloud.organizationmanager.v1.GroupMember";
    /** ID of the subject. */
    subjectId: string;
    /**
     * Type of the subject.
     *
     * It can contain one of the following values:
     * * `userAccount`: An account on Yandex, added to Yandex Cloud.
     * * `federatedUser`: A federated account. This type represents a user from an identity federation, like Active Directory.
     */
    subjectType: string;
}
export interface UpdateGroupMembersRequest {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersRequest";
    /**
     * ID of the group to update.
     * To get the group ID, use a [GroupService.List] request.
     */
    groupId: string;
    /** Updates to group members. */
    memberDeltas: MemberDelta[];
}
export interface UpdateGroupMembersMetadata {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersMetadata";
    /** ID of the group that is being updated. */
    groupId: string;
}
export interface MemberDelta {
    $type: "yandex.cloud.organizationmanager.v1.MemberDelta";
    /** The action that is being performed on a group member. */
    action: MemberDelta_MemberAction;
    /**
     * ID of the subject that is being added or removed from a group.
     *
     * Subject type can be one of following values:
     * * `userAccount`: An account on Yandex, added to Yandex Cloud.
     * * `federatedUser`: A federated account. This type represents a user from an identity federation, like Active Directory.
     */
    subjectId: string;
}
export declare enum MemberDelta_MemberAction {
    MEMBER_ACTION_UNSPECIFIED = 0,
    /** ADD - Addition of a group member. */
    ADD = 1,
    /** REMOVE - Removal of a group member. */
    REMOVE = 2,
    UNRECOGNIZED = -1
}
export declare function memberDelta_MemberActionFromJSON(object: any): MemberDelta_MemberAction;
export declare function memberDelta_MemberActionToJSON(object: MemberDelta_MemberAction): string;
export declare const GetGroupRequest: {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupRequest";
    encode(message: GetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGroupRequest;
    fromJSON(object: any): GetGroupRequest;
    toJSON(message: GetGroupRequest): unknown;
    fromPartial<I extends {
        groupId?: string | undefined;
    } & {
        groupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupId">, never>>(object: I): GetGroupRequest;
};
export declare const ListGroupsRequest: {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupsRequest";
    encode(message: ListGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGroupsRequest;
    fromJSON(object: any): ListGroupsRequest;
    toJSON(message: ListGroupsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "organizationId">, never>>(object: I): ListGroupsRequest;
};
export declare const ListGroupsResponse: {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupsResponse";
    encode(message: ListGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGroupsResponse;
    fromJSON(object: any): ListGroupsResponse;
    toJSON(message: ListGroupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        groups?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            organizationId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        groups?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            organizationId?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            organizationId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            organizationId?: string | undefined;
        } & Record<Exclude<keyof I["groups"][number], "$type" | "description" | "id" | "name" | "createdAt" | "organizationId">, never>)[] & Record<Exclude<keyof I["groups"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            organizationId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "groups">, never>>(object: I): ListGroupsResponse;
};
export declare const CreateGroupRequest: {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupRequest";
    encode(message: CreateGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGroupRequest;
    fromJSON(object: any): CreateGroupRequest;
    toJSON(message: CreateGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        organizationId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "organizationId">, never>>(object: I): CreateGroupRequest;
};
export declare const CreateGroupMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMetadata";
    encode(message: CreateGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGroupMetadata;
    fromJSON(object: any): CreateGroupMetadata;
    toJSON(message: CreateGroupMetadata): unknown;
    fromPartial<I extends {
        groupId?: string | undefined;
    } & {
        groupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupId">, never>>(object: I): CreateGroupMetadata;
};
export declare const UpdateGroupRequest: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupRequest";
    encode(message: UpdateGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGroupRequest;
    fromJSON(object: any): UpdateGroupRequest;
    toJSON(message: UpdateGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        groupId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        groupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "updateMask" | "groupId">, never>>(object: I): UpdateGroupRequest;
};
export declare const UpdateGroupMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMetadata";
    encode(message: UpdateGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGroupMetadata;
    fromJSON(object: any): UpdateGroupMetadata;
    toJSON(message: UpdateGroupMetadata): unknown;
    fromPartial<I extends {
        groupId?: string | undefined;
    } & {
        groupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupId">, never>>(object: I): UpdateGroupMetadata;
};
export declare const DeleteGroupRequest: {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupRequest";
    encode(message: DeleteGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGroupRequest;
    fromJSON(object: any): DeleteGroupRequest;
    toJSON(message: DeleteGroupRequest): unknown;
    fromPartial<I extends {
        groupId?: string | undefined;
    } & {
        groupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupId">, never>>(object: I): DeleteGroupRequest;
};
export declare const DeleteGroupMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMetadata";
    encode(message: DeleteGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGroupMetadata;
    fromJSON(object: any): DeleteGroupMetadata;
    toJSON(message: DeleteGroupMetadata): unknown;
    fromPartial<I extends {
        groupId?: string | undefined;
    } & {
        groupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupId">, never>>(object: I): DeleteGroupMetadata;
};
export declare const ListGroupOperationsRequest: {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsRequest";
    encode(message: ListGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGroupOperationsRequest;
    fromJSON(object: any): ListGroupOperationsRequest;
    toJSON(message: ListGroupOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        groupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        groupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "groupId">, never>>(object: I): ListGroupOperationsRequest;
};
export declare const ListGroupOperationsResponse: {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsResponse";
    encode(message: ListGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGroupOperationsResponse;
    fromJSON(object: any): ListGroupOperationsResponse;
    toJSON(message: ListGroupOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListGroupOperationsResponse;
};
export declare const ListGroupMembersRequest: {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersRequest";
    encode(message: ListGroupMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGroupMembersRequest;
    fromJSON(object: any): ListGroupMembersRequest;
    toJSON(message: ListGroupMembersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        groupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        groupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "groupId">, never>>(object: I): ListGroupMembersRequest;
};
export declare const ListGroupMembersResponse: {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersResponse";
    encode(message: ListGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGroupMembersResponse;
    fromJSON(object: any): ListGroupMembersResponse;
    toJSON(message: ListGroupMembersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        members?: {
            subjectId?: string | undefined;
            subjectType?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        members?: ({
            subjectId?: string | undefined;
            subjectType?: string | undefined;
        }[] & ({
            subjectId?: string | undefined;
            subjectType?: string | undefined;
        } & {
            subjectId?: string | undefined;
            subjectType?: string | undefined;
        } & Record<Exclude<keyof I["members"][number], "$type" | "subjectId" | "subjectType">, never>)[] & Record<Exclude<keyof I["members"], "$type" | keyof {
            subjectId?: string | undefined;
            subjectType?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "members">, never>>(object: I): ListGroupMembersResponse;
};
export declare const GroupMember: {
    $type: "yandex.cloud.organizationmanager.v1.GroupMember";
    encode(message: GroupMember, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GroupMember;
    fromJSON(object: any): GroupMember;
    toJSON(message: GroupMember): unknown;
    fromPartial<I extends {
        subjectId?: string | undefined;
        subjectType?: string | undefined;
    } & {
        subjectId?: string | undefined;
        subjectType?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subjectId" | "subjectType">, never>>(object: I): GroupMember;
};
export declare const UpdateGroupMembersRequest: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersRequest";
    encode(message: UpdateGroupMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGroupMembersRequest;
    fromJSON(object: any): UpdateGroupMembersRequest;
    toJSON(message: UpdateGroupMembersRequest): unknown;
    fromPartial<I extends {
        groupId?: string | undefined;
        memberDeltas?: {
            action?: MemberDelta_MemberAction | undefined;
            subjectId?: string | undefined;
        }[] | undefined;
    } & {
        groupId?: string | undefined;
        memberDeltas?: ({
            action?: MemberDelta_MemberAction | undefined;
            subjectId?: string | undefined;
        }[] & ({
            action?: MemberDelta_MemberAction | undefined;
            subjectId?: string | undefined;
        } & {
            action?: MemberDelta_MemberAction | undefined;
            subjectId?: string | undefined;
        } & Record<Exclude<keyof I["memberDeltas"][number], "$type" | "action" | "subjectId">, never>)[] & Record<Exclude<keyof I["memberDeltas"], "$type" | keyof {
            action?: MemberDelta_MemberAction | undefined;
            subjectId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupId" | "memberDeltas">, never>>(object: I): UpdateGroupMembersRequest;
};
export declare const UpdateGroupMembersMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersMetadata";
    encode(message: UpdateGroupMembersMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGroupMembersMetadata;
    fromJSON(object: any): UpdateGroupMembersMetadata;
    toJSON(message: UpdateGroupMembersMetadata): unknown;
    fromPartial<I extends {
        groupId?: string | undefined;
    } & {
        groupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupId">, never>>(object: I): UpdateGroupMembersMetadata;
};
export declare const MemberDelta: {
    $type: "yandex.cloud.organizationmanager.v1.MemberDelta";
    encode(message: MemberDelta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MemberDelta;
    fromJSON(object: any): MemberDelta;
    toJSON(message: MemberDelta): unknown;
    fromPartial<I extends {
        action?: MemberDelta_MemberAction | undefined;
        subjectId?: string | undefined;
    } & {
        action?: MemberDelta_MemberAction | undefined;
        subjectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "action" | "subjectId">, never>>(object: I): MemberDelta;
};
/** A set of methods for managing groups. */
export declare const GroupServiceService: {
    /**
     * Returns the specified Group resource.
     *
     * To get the list of available Group resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGroupRequest;
        readonly responseSerialize: (value: Group) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Group;
    };
    /** Retrieves the list of group resources. */
    readonly list: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGroupsRequest;
        readonly responseSerialize: (value: ListGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGroupsResponse;
    };
    /** Creates a group in the specified organization. */
    readonly create: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified group. */
    readonly update: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified group. */
    readonly delete: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGroupOperationsRequest;
        readonly responseSerialize: (value: ListGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGroupOperationsResponse;
    };
    /** List group active members. */
    readonly listMembers: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/ListMembers";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGroupMembersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGroupMembersRequest;
        readonly responseSerialize: (value: ListGroupMembersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGroupMembersResponse;
    };
    /** Update group members. */
    readonly updateMembers: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/UpdateMembers";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateGroupMembersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateGroupMembersRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists access bindings for the specified group. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified group. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified group. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface GroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Group resource.
     *
     * To get the list of available Group resources, make a [List] request.
     */
    get: handleUnaryCall<GetGroupRequest, Group>;
    /** Retrieves the list of group resources. */
    list: handleUnaryCall<ListGroupsRequest, ListGroupsResponse>;
    /** Creates a group in the specified organization. */
    create: handleUnaryCall<CreateGroupRequest, Operation>;
    /** Updates the specified group. */
    update: handleUnaryCall<UpdateGroupRequest, Operation>;
    /** Deletes the specified group. */
    delete: handleUnaryCall<DeleteGroupRequest, Operation>;
    /** Lists operations for the specified group. */
    listOperations: handleUnaryCall<ListGroupOperationsRequest, ListGroupOperationsResponse>;
    /** List group active members. */
    listMembers: handleUnaryCall<ListGroupMembersRequest, ListGroupMembersResponse>;
    /** Update group members. */
    updateMembers: handleUnaryCall<UpdateGroupMembersRequest, Operation>;
    /** Lists access bindings for the specified group. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified group. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified group. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface GroupServiceClient extends Client {
    /**
     * Returns the specified Group resource.
     *
     * To get the list of available Group resources, make a [List] request.
     */
    get(request: GetGroupRequest, callback: (error: ServiceError | null, response: Group) => void): ClientUnaryCall;
    get(request: GetGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Group) => void): ClientUnaryCall;
    get(request: GetGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Group) => void): ClientUnaryCall;
    /** Retrieves the list of group resources. */
    list(request: ListGroupsRequest, callback: (error: ServiceError | null, response: ListGroupsResponse) => void): ClientUnaryCall;
    list(request: ListGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGroupsResponse) => void): ClientUnaryCall;
    list(request: ListGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGroupsResponse) => void): ClientUnaryCall;
    /** Creates a group in the specified organization. */
    create(request: CreateGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified group. */
    update(request: UpdateGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified group. */
    delete(request: DeleteGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified group. */
    listOperations(request: ListGroupOperationsRequest, callback: (error: ServiceError | null, response: ListGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGroupOperationsResponse) => void): ClientUnaryCall;
    /** List group active members. */
    listMembers(request: ListGroupMembersRequest, callback: (error: ServiceError | null, response: ListGroupMembersResponse) => void): ClientUnaryCall;
    listMembers(request: ListGroupMembersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGroupMembersResponse) => void): ClientUnaryCall;
    listMembers(request: ListGroupMembersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGroupMembersResponse) => void): ClientUnaryCall;
    /** Update group members. */
    updateMembers(request: UpdateGroupMembersRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateMembers(request: UpdateGroupMembersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateMembers(request: UpdateGroupMembersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists access bindings for the specified group. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified group. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified group. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const GroupServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): GroupServiceClient;
    service: typeof GroupServiceService;
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
