/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Community } from "../../../../yandex/cloud/datasphere/v2/community";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.datasphere.v2";
export interface CreateCommunityRequest {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest";
    /** Name of the community. */
    name: string;
    /** Description of the community. */
    description: string;
    /** ID of the organization where community should be created. */
    organizationId: string;
    /** ID of the billing account for the created community. Optional, billing account could be bound to community later. */
    billingAccountId: string;
    /** Labels of the community. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateCommunityRequest_LabelsEntry {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateCommunityMetadata {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityMetadata";
    /** ID of the community that is being created. */
    communityId: string;
}
export interface GetCommunityRequest {
    $type: "yandex.cloud.datasphere.v2.GetCommunityRequest";
    /** ID of the community. */
    communityId: string;
}
export interface UpdateCommunityRequest {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest";
    /** ID of the community. */
    communityId: string;
    /** Field mask that specifies which fields of the Community resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the community. */
    name: string;
    /** Description of the community. */
    description: string;
    /** Labels of the community. */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateCommunityRequest_LabelsEntry {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateCommunityMetadata {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityMetadata";
    /** ID of the community that is being updated. */
    communityId: string;
}
export interface DeleteCommunityRequest {
    $type: "yandex.cloud.datasphere.v2.DeleteCommunityRequest";
    /** ID of the community. */
    communityId: string;
}
export interface DeleteCommunityMetadata {
    $type: "yandex.cloud.datasphere.v2.DeleteCommunityMetadata";
    /** ID of the community that is being deleted. */
    communityId: string;
}
export interface ListCommunitiesRequest {
    $type: "yandex.cloud.datasphere.v2.ListCommunitiesRequest";
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListCommunitiesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListCommunitiesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * Community name or description pattern.
     * Only communities with names or descriptions matching specified pattern will be returned.
     */
    nameOrDescriptionPattern: string;
    /** ID of the user. Only communities owned by specified user will be returned. */
    ownedById: string;
    /** If set to true, only public communities will be returned. */
    listPublic: boolean;
    /** ID of the organization to list communities in. */
    organizationId: string;
}
export interface ListCommunitiesResponse {
    $type: "yandex.cloud.datasphere.v2.ListCommunitiesResponse";
    /** List of communities matching filters in list communities request. */
    communities: Community[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCommunitiesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListCommunitiesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface SetCommunityAccessBindingsMetadata {
    $type: "yandex.cloud.datasphere.v2.SetCommunityAccessBindingsMetadata";
    /** ID of the community which access bindings are set. */
    communityId: string;
}
export interface UpdateCommunityAccessBindingsMetadata {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityAccessBindingsMetadata";
    /** ID of the community which access bindings are updated. */
    communityId: string;
}
export declare const CreateCommunityRequest: {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest";
    encode(message: CreateCommunityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateCommunityRequest;
    fromJSON(object: any): CreateCommunityRequest;
    toJSON(message: CreateCommunityRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        billingAccountId?: string | undefined;
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
        billingAccountId?: string | undefined;
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "billingAccountId" | "organizationId">, never>>(object: I): CreateCommunityRequest;
};
export declare const CreateCommunityRequest_LabelsEntry: {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry";
    encode(message: CreateCommunityRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateCommunityRequest_LabelsEntry;
    fromJSON(object: any): CreateCommunityRequest_LabelsEntry;
    toJSON(message: CreateCommunityRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateCommunityRequest_LabelsEntry;
};
export declare const CreateCommunityMetadata: {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityMetadata";
    encode(message: CreateCommunityMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateCommunityMetadata;
    fromJSON(object: any): CreateCommunityMetadata;
    toJSON(message: CreateCommunityMetadata): unknown;
    fromPartial<I extends {
        communityId?: string | undefined;
    } & {
        communityId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "communityId">, never>>(object: I): CreateCommunityMetadata;
};
export declare const GetCommunityRequest: {
    $type: "yandex.cloud.datasphere.v2.GetCommunityRequest";
    encode(message: GetCommunityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCommunityRequest;
    fromJSON(object: any): GetCommunityRequest;
    toJSON(message: GetCommunityRequest): unknown;
    fromPartial<I extends {
        communityId?: string | undefined;
    } & {
        communityId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "communityId">, never>>(object: I): GetCommunityRequest;
};
export declare const UpdateCommunityRequest: {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest";
    encode(message: UpdateCommunityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCommunityRequest;
    fromJSON(object: any): UpdateCommunityRequest;
    toJSON(message: UpdateCommunityRequest): unknown;
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
        communityId?: string | undefined;
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
        communityId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "communityId">, never>>(object: I): UpdateCommunityRequest;
};
export declare const UpdateCommunityRequest_LabelsEntry: {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry";
    encode(message: UpdateCommunityRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCommunityRequest_LabelsEntry;
    fromJSON(object: any): UpdateCommunityRequest_LabelsEntry;
    toJSON(message: UpdateCommunityRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateCommunityRequest_LabelsEntry;
};
export declare const UpdateCommunityMetadata: {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityMetadata";
    encode(message: UpdateCommunityMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCommunityMetadata;
    fromJSON(object: any): UpdateCommunityMetadata;
    toJSON(message: UpdateCommunityMetadata): unknown;
    fromPartial<I extends {
        communityId?: string | undefined;
    } & {
        communityId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "communityId">, never>>(object: I): UpdateCommunityMetadata;
};
export declare const DeleteCommunityRequest: {
    $type: "yandex.cloud.datasphere.v2.DeleteCommunityRequest";
    encode(message: DeleteCommunityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteCommunityRequest;
    fromJSON(object: any): DeleteCommunityRequest;
    toJSON(message: DeleteCommunityRequest): unknown;
    fromPartial<I extends {
        communityId?: string | undefined;
    } & {
        communityId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "communityId">, never>>(object: I): DeleteCommunityRequest;
};
export declare const DeleteCommunityMetadata: {
    $type: "yandex.cloud.datasphere.v2.DeleteCommunityMetadata";
    encode(message: DeleteCommunityMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteCommunityMetadata;
    fromJSON(object: any): DeleteCommunityMetadata;
    toJSON(message: DeleteCommunityMetadata): unknown;
    fromPartial<I extends {
        communityId?: string | undefined;
    } & {
        communityId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "communityId">, never>>(object: I): DeleteCommunityMetadata;
};
export declare const ListCommunitiesRequest: {
    $type: "yandex.cloud.datasphere.v2.ListCommunitiesRequest";
    encode(message: ListCommunitiesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCommunitiesRequest;
    fromJSON(object: any): ListCommunitiesRequest;
    toJSON(message: ListCommunitiesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        organizationId?: string | undefined;
        nameOrDescriptionPattern?: string | undefined;
        ownedById?: string | undefined;
        listPublic?: boolean | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        organizationId?: string | undefined;
        nameOrDescriptionPattern?: string | undefined;
        ownedById?: string | undefined;
        listPublic?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "organizationId" | "nameOrDescriptionPattern" | "ownedById" | "listPublic">, never>>(object: I): ListCommunitiesRequest;
};
export declare const ListCommunitiesResponse: {
    $type: "yandex.cloud.datasphere.v2.ListCommunitiesResponse";
    encode(message: ListCommunitiesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCommunitiesResponse;
    fromJSON(object: any): ListCommunitiesResponse;
    toJSON(message: ListCommunitiesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        communities?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            createdById?: string | undefined;
            organizationId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        communities?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            createdById?: string | undefined;
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
            createdById?: string | undefined;
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
            } & Record<Exclude<keyof I["communities"][number]["labels"], string | number>, never>) | undefined;
            createdById?: string | undefined;
            organizationId?: string | undefined;
        } & Record<Exclude<keyof I["communities"][number], "$type" | "description" | "id" | "name" | "createdAt" | "labels" | "createdById" | "organizationId">, never>)[] & Record<Exclude<keyof I["communities"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            createdById?: string | undefined;
            organizationId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "communities">, never>>(object: I): ListCommunitiesResponse;
};
export declare const SetCommunityAccessBindingsMetadata: {
    $type: "yandex.cloud.datasphere.v2.SetCommunityAccessBindingsMetadata";
    encode(message: SetCommunityAccessBindingsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetCommunityAccessBindingsMetadata;
    fromJSON(object: any): SetCommunityAccessBindingsMetadata;
    toJSON(message: SetCommunityAccessBindingsMetadata): unknown;
    fromPartial<I extends {
        communityId?: string | undefined;
    } & {
        communityId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "communityId">, never>>(object: I): SetCommunityAccessBindingsMetadata;
};
export declare const UpdateCommunityAccessBindingsMetadata: {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityAccessBindingsMetadata";
    encode(message: UpdateCommunityAccessBindingsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCommunityAccessBindingsMetadata;
    fromJSON(object: any): UpdateCommunityAccessBindingsMetadata;
    toJSON(message: UpdateCommunityAccessBindingsMetadata): unknown;
    fromPartial<I extends {
        communityId?: string | undefined;
    } & {
        communityId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "communityId">, never>>(object: I): UpdateCommunityAccessBindingsMetadata;
};
export declare const CommunityServiceService: {
    /** Creates community in specified organization. */
    readonly create: {
        readonly path: "/yandex.cloud.datasphere.v2.CommunityService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateCommunityRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateCommunityRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns community. */
    readonly get: {
        readonly path: "/yandex.cloud.datasphere.v2.CommunityService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetCommunityRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetCommunityRequest;
        readonly responseSerialize: (value: Community) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Community;
    };
    /** Updates specified community. */
    readonly update: {
        readonly path: "/yandex.cloud.datasphere.v2.CommunityService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateCommunityRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateCommunityRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes specified community. */
    readonly delete: {
        readonly path: "/yandex.cloud.datasphere.v2.CommunityService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteCommunityRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteCommunityRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List communities in specified organization. */
    readonly list: {
        readonly path: "/yandex.cloud.datasphere.v2.CommunityService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCommunitiesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListCommunitiesRequest;
        readonly responseSerialize: (value: ListCommunitiesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListCommunitiesResponse;
    };
    /** Lists access bindings for specified community. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.datasphere.v2.CommunityService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for specified community. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.datasphere.v2.CommunityService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for specified community. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.datasphere.v2.CommunityService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface CommunityServiceServer extends UntypedServiceImplementation {
    /** Creates community in specified organization. */
    create: handleUnaryCall<CreateCommunityRequest, Operation>;
    /** Returns community. */
    get: handleUnaryCall<GetCommunityRequest, Community>;
    /** Updates specified community. */
    update: handleUnaryCall<UpdateCommunityRequest, Operation>;
    /** Deletes specified community. */
    delete: handleUnaryCall<DeleteCommunityRequest, Operation>;
    /** List communities in specified organization. */
    list: handleUnaryCall<ListCommunitiesRequest, ListCommunitiesResponse>;
    /** Lists access bindings for specified community. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for specified community. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for specified community. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface CommunityServiceClient extends Client {
    /** Creates community in specified organization. */
    create(request: CreateCommunityRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateCommunityRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateCommunityRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns community. */
    get(request: GetCommunityRequest, callback: (error: ServiceError | null, response: Community) => void): ClientUnaryCall;
    get(request: GetCommunityRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Community) => void): ClientUnaryCall;
    get(request: GetCommunityRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Community) => void): ClientUnaryCall;
    /** Updates specified community. */
    update(request: UpdateCommunityRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateCommunityRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateCommunityRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes specified community. */
    delete(request: DeleteCommunityRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteCommunityRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteCommunityRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List communities in specified organization. */
    list(request: ListCommunitiesRequest, callback: (error: ServiceError | null, response: ListCommunitiesResponse) => void): ClientUnaryCall;
    list(request: ListCommunitiesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListCommunitiesResponse) => void): ClientUnaryCall;
    list(request: ListCommunitiesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListCommunitiesResponse) => void): ClientUnaryCall;
    /** Lists access bindings for specified community. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for specified community. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for specified community. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const CommunityServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): CommunityServiceClient;
    service: typeof CommunityServiceService;
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
