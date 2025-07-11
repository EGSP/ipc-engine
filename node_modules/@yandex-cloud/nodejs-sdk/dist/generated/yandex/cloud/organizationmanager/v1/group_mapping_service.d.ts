/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { GroupMapping, GroupMappingItem } from "../../../../yandex/cloud/organizationmanager/v1/group_mapping";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1";
export interface GetGroupMappingRequest {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingRequest";
    federationId: string;
}
export interface GetGroupMappingResponse {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingResponse";
    groupMapping?: GroupMapping;
}
export interface CreateGroupMappingRequest {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingRequest";
    /** Federation the group mapping will be created for */
    federationId: string;
    /** Synchronization status. */
    enabled: boolean;
}
export interface CreateGroupMappingMetadata {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingMetadata";
    federationId: string;
}
/** Request for updating group mapping configuration */
export interface UpdateGroupMappingRequest {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingRequest";
    /** Federation the group mapping update is requested */
    federationId: string;
    /** A set of fields that should be updated */
    updateMask?: FieldMask;
    /** A new state of synchronization to update (if mentioned in update_mask). */
    enabled: boolean;
}
export interface UpdateGroupMappingMetadata {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingMetadata";
    federationId: string;
}
export interface DeleteGroupMappingRequest {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingRequest";
    /** Federation the group mapping deletion is requested */
    federationId: string;
}
export interface DeleteGroupMappingMetadata {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingMetadata";
    federationId: string;
}
/** Request for updating group mapping configuration */
export interface UpdateGroupMappingItemsRequest {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsRequest";
    /** Federation the group mapping update is requested */
    federationId: string;
    /** A collection of mapping items to add or remove (ignores update_fields). */
    groupMappingItemDeltas: GroupMappingItemDelta[];
}
/** Message describes the user's request to change (add or remove) a single group mapping. */
export interface GroupMappingItemDelta {
    $type: "yandex.cloud.organizationmanager.v1.GroupMappingItemDelta";
    item?: GroupMappingItem;
    action: GroupMappingItemDelta_Action;
}
export declare enum GroupMappingItemDelta_Action {
    ACTION_UNSPECIFIED = 0,
    /** ADD - Group mapping item is to be added */
    ADD = 1,
    /** REMOVE - Group mapping item is to be removed */
    REMOVE = 2,
    UNRECOGNIZED = -1
}
export declare function groupMappingItemDelta_ActionFromJSON(object: any): GroupMappingItemDelta_Action;
export declare function groupMappingItemDelta_ActionToJSON(object: GroupMappingItemDelta_Action): string;
export interface UpdateGroupMappingItemsMetadata {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsMetadata";
    federationId: string;
}
export interface UpdateGroupMappingItemsResponse {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsResponse";
    /** Effective changes that were applied */
    groupMappingItemDeltas: GroupMappingItemDelta[];
}
export interface ListGroupMappingItemsRequest {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsRequest";
    federationId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}
export interface ListGroupMappingItemsResponse {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsResponse";
    groupMappingItems: GroupMappingItem[];
    nextPageToken: string;
}
export declare const GetGroupMappingRequest: {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingRequest";
    encode(message: GetGroupMappingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGroupMappingRequest;
    fromJSON(object: any): GetGroupMappingRequest;
    toJSON(message: GetGroupMappingRequest): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): GetGroupMappingRequest;
};
export declare const GetGroupMappingResponse: {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingResponse";
    encode(message: GetGroupMappingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGroupMappingResponse;
    fromJSON(object: any): GetGroupMappingResponse;
    toJSON(message: GetGroupMappingResponse): unknown;
    fromPartial<I extends {
        groupMapping?: {
            enabled?: boolean | undefined;
            federationId?: string | undefined;
        } | undefined;
    } & {
        groupMapping?: ({
            enabled?: boolean | undefined;
            federationId?: string | undefined;
        } & {
            enabled?: boolean | undefined;
            federationId?: string | undefined;
        } & Record<Exclude<keyof I["groupMapping"], "$type" | "enabled" | "federationId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupMapping">, never>>(object: I): GetGroupMappingResponse;
};
export declare const CreateGroupMappingRequest: {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingRequest";
    encode(message: CreateGroupMappingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGroupMappingRequest;
    fromJSON(object: any): CreateGroupMappingRequest;
    toJSON(message: CreateGroupMappingRequest): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
        federationId?: string | undefined;
    } & {
        enabled?: boolean | undefined;
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled" | "federationId">, never>>(object: I): CreateGroupMappingRequest;
};
export declare const CreateGroupMappingMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingMetadata";
    encode(message: CreateGroupMappingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGroupMappingMetadata;
    fromJSON(object: any): CreateGroupMappingMetadata;
    toJSON(message: CreateGroupMappingMetadata): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): CreateGroupMappingMetadata;
};
export declare const UpdateGroupMappingRequest: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingRequest";
    encode(message: UpdateGroupMappingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGroupMappingRequest;
    fromJSON(object: any): UpdateGroupMappingRequest;
    toJSON(message: UpdateGroupMappingRequest): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        enabled?: boolean | undefined;
        federationId?: string | undefined;
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        enabled?: boolean | undefined;
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "enabled" | "federationId">, never>>(object: I): UpdateGroupMappingRequest;
};
export declare const UpdateGroupMappingMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingMetadata";
    encode(message: UpdateGroupMappingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGroupMappingMetadata;
    fromJSON(object: any): UpdateGroupMappingMetadata;
    toJSON(message: UpdateGroupMappingMetadata): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): UpdateGroupMappingMetadata;
};
export declare const DeleteGroupMappingRequest: {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingRequest";
    encode(message: DeleteGroupMappingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGroupMappingRequest;
    fromJSON(object: any): DeleteGroupMappingRequest;
    toJSON(message: DeleteGroupMappingRequest): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): DeleteGroupMappingRequest;
};
export declare const DeleteGroupMappingMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingMetadata";
    encode(message: DeleteGroupMappingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGroupMappingMetadata;
    fromJSON(object: any): DeleteGroupMappingMetadata;
    toJSON(message: DeleteGroupMappingMetadata): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): DeleteGroupMappingMetadata;
};
export declare const UpdateGroupMappingItemsRequest: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsRequest";
    encode(message: UpdateGroupMappingItemsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGroupMappingItemsRequest;
    fromJSON(object: any): UpdateGroupMappingItemsRequest;
    toJSON(message: UpdateGroupMappingItemsRequest): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
        groupMappingItemDeltas?: {
            action?: GroupMappingItemDelta_Action | undefined;
            item?: {
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        federationId?: string | undefined;
        groupMappingItemDeltas?: ({
            action?: GroupMappingItemDelta_Action | undefined;
            item?: {
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } | undefined;
        }[] & ({
            action?: GroupMappingItemDelta_Action | undefined;
            item?: {
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } | undefined;
        } & {
            action?: GroupMappingItemDelta_Action | undefined;
            item?: ({
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } & {
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } & Record<Exclude<keyof I["groupMappingItemDeltas"][number]["item"], "$type" | "externalGroupId" | "internalGroupId">, never>) | undefined;
        } & Record<Exclude<keyof I["groupMappingItemDeltas"][number], "$type" | "action" | "item">, never>)[] & Record<Exclude<keyof I["groupMappingItemDeltas"], "$type" | keyof {
            action?: GroupMappingItemDelta_Action | undefined;
            item?: {
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId" | "groupMappingItemDeltas">, never>>(object: I): UpdateGroupMappingItemsRequest;
};
export declare const GroupMappingItemDelta: {
    $type: "yandex.cloud.organizationmanager.v1.GroupMappingItemDelta";
    encode(message: GroupMappingItemDelta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GroupMappingItemDelta;
    fromJSON(object: any): GroupMappingItemDelta;
    toJSON(message: GroupMappingItemDelta): unknown;
    fromPartial<I extends {
        action?: GroupMappingItemDelta_Action | undefined;
        item?: {
            externalGroupId?: string | undefined;
            internalGroupId?: string | undefined;
        } | undefined;
    } & {
        action?: GroupMappingItemDelta_Action | undefined;
        item?: ({
            externalGroupId?: string | undefined;
            internalGroupId?: string | undefined;
        } & {
            externalGroupId?: string | undefined;
            internalGroupId?: string | undefined;
        } & Record<Exclude<keyof I["item"], "$type" | "externalGroupId" | "internalGroupId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "action" | "item">, never>>(object: I): GroupMappingItemDelta;
};
export declare const UpdateGroupMappingItemsMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsMetadata";
    encode(message: UpdateGroupMappingItemsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGroupMappingItemsMetadata;
    fromJSON(object: any): UpdateGroupMappingItemsMetadata;
    toJSON(message: UpdateGroupMappingItemsMetadata): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): UpdateGroupMappingItemsMetadata;
};
export declare const UpdateGroupMappingItemsResponse: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsResponse";
    encode(message: UpdateGroupMappingItemsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGroupMappingItemsResponse;
    fromJSON(object: any): UpdateGroupMappingItemsResponse;
    toJSON(message: UpdateGroupMappingItemsResponse): unknown;
    fromPartial<I extends {
        groupMappingItemDeltas?: {
            action?: GroupMappingItemDelta_Action | undefined;
            item?: {
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        groupMappingItemDeltas?: ({
            action?: GroupMappingItemDelta_Action | undefined;
            item?: {
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } | undefined;
        }[] & ({
            action?: GroupMappingItemDelta_Action | undefined;
            item?: {
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } | undefined;
        } & {
            action?: GroupMappingItemDelta_Action | undefined;
            item?: ({
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } & {
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } & Record<Exclude<keyof I["groupMappingItemDeltas"][number]["item"], "$type" | "externalGroupId" | "internalGroupId">, never>) | undefined;
        } & Record<Exclude<keyof I["groupMappingItemDeltas"][number], "$type" | "action" | "item">, never>)[] & Record<Exclude<keyof I["groupMappingItemDeltas"], "$type" | keyof {
            action?: GroupMappingItemDelta_Action | undefined;
            item?: {
                externalGroupId?: string | undefined;
                internalGroupId?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupMappingItemDeltas">, never>>(object: I): UpdateGroupMappingItemsResponse;
};
export declare const ListGroupMappingItemsRequest: {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsRequest";
    encode(message: ListGroupMappingItemsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGroupMappingItemsRequest;
    fromJSON(object: any): ListGroupMappingItemsRequest;
    toJSON(message: ListGroupMappingItemsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        federationId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "federationId">, never>>(object: I): ListGroupMappingItemsRequest;
};
export declare const ListGroupMappingItemsResponse: {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsResponse";
    encode(message: ListGroupMappingItemsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGroupMappingItemsResponse;
    fromJSON(object: any): ListGroupMappingItemsResponse;
    toJSON(message: ListGroupMappingItemsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        groupMappingItems?: {
            externalGroupId?: string | undefined;
            internalGroupId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        groupMappingItems?: ({
            externalGroupId?: string | undefined;
            internalGroupId?: string | undefined;
        }[] & ({
            externalGroupId?: string | undefined;
            internalGroupId?: string | undefined;
        } & {
            externalGroupId?: string | undefined;
            internalGroupId?: string | undefined;
        } & Record<Exclude<keyof I["groupMappingItems"][number], "$type" | "externalGroupId" | "internalGroupId">, never>)[] & Record<Exclude<keyof I["groupMappingItems"], "$type" | keyof {
            externalGroupId?: string | undefined;
            internalGroupId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "groupMappingItems">, never>>(object: I): ListGroupMappingItemsResponse;
};
/** RPC service dedicated for federation group mapping. */
export declare const GroupMappingServiceService: {
    /**
     * Returns a group mapping configured for the specific federation
     * If a federation does not exist this call will return an error
     *    NOT_FOUND will be returned
     * If a federation exist, but has not ever been configured for group mapping
     *   the call FAILED_PRECONDITION will be returned.
     */
    readonly get: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGroupMappingRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGroupMappingRequest;
        readonly responseSerialize: (value: GetGroupMappingResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetGroupMappingResponse;
    };
    /**
     * Adds a group mapping for a federation
     * If mapping already exist, ALREADY_EXISTS will be returned
     */
    readonly create: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateGroupMappingRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateGroupMappingRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates an existing group mapping for a federation
     * Errors:
     * - if federation is not found
     * In case of any error, no changes are applied to existing group mapping
     *
     * This call is idempotent. The following actions do nothing:
     * - enabling when already enabled
     * - disabling when disabled
     * Such parts of request will be ignored. Others will be applied.
     */
    readonly update: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateGroupMappingRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateGroupMappingRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes a group mapping. This will remove all the mapping items
     * cascade.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteGroupMappingRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteGroupMappingRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Returns all the group mappings items
     *
     * Filtering is only supported by external_group_id or internal_group_id
     */
    readonly listItems: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/ListItems";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGroupMappingItemsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGroupMappingItemsRequest;
        readonly responseSerialize: (value: ListGroupMappingItemsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGroupMappingItemsResponse;
    };
    /**
     * Updates group mapping items for a specified federation
     * Errors:
     * - if federation is not found
     * - if internal group in the mapping added does not exist
     * In case of any error, no changes are applied to existing group mapping
     *
     * This call is idempotent. The following actions do nothing:
     * - adding group mapping items that are already present
     * - removing group mapping items that are not present
     * Such parts of request will be ignored. Others will be applied.
     */
    readonly updateItems: {
        readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/UpdateItems";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateGroupMappingItemsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateGroupMappingItemsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface GroupMappingServiceServer extends UntypedServiceImplementation {
    /**
     * Returns a group mapping configured for the specific federation
     * If a federation does not exist this call will return an error
     *    NOT_FOUND will be returned
     * If a federation exist, but has not ever been configured for group mapping
     *   the call FAILED_PRECONDITION will be returned.
     */
    get: handleUnaryCall<GetGroupMappingRequest, GetGroupMappingResponse>;
    /**
     * Adds a group mapping for a federation
     * If mapping already exist, ALREADY_EXISTS will be returned
     */
    create: handleUnaryCall<CreateGroupMappingRequest, Operation>;
    /**
     * Updates an existing group mapping for a federation
     * Errors:
     * - if federation is not found
     * In case of any error, no changes are applied to existing group mapping
     *
     * This call is idempotent. The following actions do nothing:
     * - enabling when already enabled
     * - disabling when disabled
     * Such parts of request will be ignored. Others will be applied.
     */
    update: handleUnaryCall<UpdateGroupMappingRequest, Operation>;
    /**
     * Deletes a group mapping. This will remove all the mapping items
     * cascade.
     */
    delete: handleUnaryCall<DeleteGroupMappingRequest, Operation>;
    /**
     * Returns all the group mappings items
     *
     * Filtering is only supported by external_group_id or internal_group_id
     */
    listItems: handleUnaryCall<ListGroupMappingItemsRequest, ListGroupMappingItemsResponse>;
    /**
     * Updates group mapping items for a specified federation
     * Errors:
     * - if federation is not found
     * - if internal group in the mapping added does not exist
     * In case of any error, no changes are applied to existing group mapping
     *
     * This call is idempotent. The following actions do nothing:
     * - adding group mapping items that are already present
     * - removing group mapping items that are not present
     * Such parts of request will be ignored. Others will be applied.
     */
    updateItems: handleUnaryCall<UpdateGroupMappingItemsRequest, Operation>;
}
export interface GroupMappingServiceClient extends Client {
    /**
     * Returns a group mapping configured for the specific federation
     * If a federation does not exist this call will return an error
     *    NOT_FOUND will be returned
     * If a federation exist, but has not ever been configured for group mapping
     *   the call FAILED_PRECONDITION will be returned.
     */
    get(request: GetGroupMappingRequest, callback: (error: ServiceError | null, response: GetGroupMappingResponse) => void): ClientUnaryCall;
    get(request: GetGroupMappingRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetGroupMappingResponse) => void): ClientUnaryCall;
    get(request: GetGroupMappingRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetGroupMappingResponse) => void): ClientUnaryCall;
    /**
     * Adds a group mapping for a federation
     * If mapping already exist, ALREADY_EXISTS will be returned
     */
    create(request: CreateGroupMappingRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateGroupMappingRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateGroupMappingRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates an existing group mapping for a federation
     * Errors:
     * - if federation is not found
     * In case of any error, no changes are applied to existing group mapping
     *
     * This call is idempotent. The following actions do nothing:
     * - enabling when already enabled
     * - disabling when disabled
     * Such parts of request will be ignored. Others will be applied.
     */
    update(request: UpdateGroupMappingRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateGroupMappingRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateGroupMappingRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes a group mapping. This will remove all the mapping items
     * cascade.
     */
    delete(request: DeleteGroupMappingRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteGroupMappingRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteGroupMappingRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Returns all the group mappings items
     *
     * Filtering is only supported by external_group_id or internal_group_id
     */
    listItems(request: ListGroupMappingItemsRequest, callback: (error: ServiceError | null, response: ListGroupMappingItemsResponse) => void): ClientUnaryCall;
    listItems(request: ListGroupMappingItemsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGroupMappingItemsResponse) => void): ClientUnaryCall;
    listItems(request: ListGroupMappingItemsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGroupMappingItemsResponse) => void): ClientUnaryCall;
    /**
     * Updates group mapping items for a specified federation
     * Errors:
     * - if federation is not found
     * - if internal group in the mapping added does not exist
     * In case of any error, no changes are applied to existing group mapping
     *
     * This call is idempotent. The following actions do nothing:
     * - adding group mapping items that are already present
     * - removing group mapping items that are not present
     * Such parts of request will be ignored. Others will be applied.
     */
    updateItems(request: UpdateGroupMappingItemsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateItems(request: UpdateGroupMappingItemsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateItems(request: UpdateGroupMappingItemsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const GroupMappingServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): GroupMappingServiceClient;
    service: typeof GroupMappingServiceService;
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
