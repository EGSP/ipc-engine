/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { SubjectClaims } from "../../../../yandex/cloud/oauth/claims";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1";
export interface ListMembersRequest {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersRequest";
    /** ID of the Organization resource to list members for. */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListMembersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListMembersResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}
export interface ListMembersResponse {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse";
    /** List of users for the specified organization. */
    users: ListMembersResponse_OrganizationUser[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListMembersRequest.page_size], use the [next_page_token] as the value
     * for the [ListMembersRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListMembersResponse_OrganizationUser {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser";
    /** OpenID standard claims with additional Cloud Organization claims. */
    subjectClaims?: SubjectClaims;
}
export interface DeleteMembershipRequest {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipRequest";
    /** ID of the organization to delete membership. */
    organizationId: string;
    /**
     * ID of the subject that is being deleted from organization.
     * By default equals to authenticated subject.
     */
    subjectId: string;
}
export interface DeleteMembershipMetadata {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata";
    /** ID of the organization to delete membership. */
    organizationId: string;
    /** ID of the subject that is being deleted from organization. */
    subjectId: string;
}
export interface DeleteMembershipResponse {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipResponse";
    /** ID of the organization to delete membership. */
    organizationId: string;
    /** ID of the subject that is being deleted from organization. */
    subjectId: string;
}
export declare const ListMembersRequest: {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersRequest";
    encode(message: ListMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListMembersRequest;
    fromJSON(object: any): ListMembersRequest;
    toJSON(message: ListMembersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        organizationId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "organizationId">, never>>(object: I): ListMembersRequest;
};
export declare const ListMembersResponse: {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse";
    encode(message: ListMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListMembersResponse;
    fromJSON(object: any): ListMembersResponse;
    toJSON(message: ListMembersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        users?: {
            subjectClaims?: {
                sub?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
                picture?: string | undefined;
                givenName?: string | undefined;
                familyName?: string | undefined;
                preferredUsername?: string | undefined;
                zoneinfo?: string | undefined;
                locale?: string | undefined;
                phoneNumber?: string | undefined;
                subType?: import("../../../../yandex/cloud/oauth/claims").SubjectType | undefined;
                federation?: {
                    id?: string | undefined;
                    name?: string | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        users?: ({
            subjectClaims?: {
                sub?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
                picture?: string | undefined;
                givenName?: string | undefined;
                familyName?: string | undefined;
                preferredUsername?: string | undefined;
                zoneinfo?: string | undefined;
                locale?: string | undefined;
                phoneNumber?: string | undefined;
                subType?: import("../../../../yandex/cloud/oauth/claims").SubjectType | undefined;
                federation?: {
                    id?: string | undefined;
                    name?: string | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            subjectClaims?: {
                sub?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
                picture?: string | undefined;
                givenName?: string | undefined;
                familyName?: string | undefined;
                preferredUsername?: string | undefined;
                zoneinfo?: string | undefined;
                locale?: string | undefined;
                phoneNumber?: string | undefined;
                subType?: import("../../../../yandex/cloud/oauth/claims").SubjectType | undefined;
                federation?: {
                    id?: string | undefined;
                    name?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            subjectClaims?: ({
                sub?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
                picture?: string | undefined;
                givenName?: string | undefined;
                familyName?: string | undefined;
                preferredUsername?: string | undefined;
                zoneinfo?: string | undefined;
                locale?: string | undefined;
                phoneNumber?: string | undefined;
                subType?: import("../../../../yandex/cloud/oauth/claims").SubjectType | undefined;
                federation?: {
                    id?: string | undefined;
                    name?: string | undefined;
                } | undefined;
            } & {
                sub?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
                picture?: string | undefined;
                givenName?: string | undefined;
                familyName?: string | undefined;
                preferredUsername?: string | undefined;
                zoneinfo?: string | undefined;
                locale?: string | undefined;
                phoneNumber?: string | undefined;
                subType?: import("../../../../yandex/cloud/oauth/claims").SubjectType | undefined;
                federation?: ({
                    id?: string | undefined;
                    name?: string | undefined;
                } & {
                    id?: string | undefined;
                    name?: string | undefined;
                } & Record<Exclude<keyof I["users"][number]["subjectClaims"]["federation"], "$type" | "id" | "name">, never>) | undefined;
            } & Record<Exclude<keyof I["users"][number]["subjectClaims"], "$type" | "sub" | "name" | "email" | "picture" | "givenName" | "familyName" | "preferredUsername" | "zoneinfo" | "locale" | "phoneNumber" | "subType" | "federation">, never>) | undefined;
        } & Record<Exclude<keyof I["users"][number], "$type" | "subjectClaims">, never>)[] & Record<Exclude<keyof I["users"], "$type" | keyof {
            subjectClaims?: {
                sub?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
                picture?: string | undefined;
                givenName?: string | undefined;
                familyName?: string | undefined;
                preferredUsername?: string | undefined;
                zoneinfo?: string | undefined;
                locale?: string | undefined;
                phoneNumber?: string | undefined;
                subType?: import("../../../../yandex/cloud/oauth/claims").SubjectType | undefined;
                federation?: {
                    id?: string | undefined;
                    name?: string | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "users">, never>>(object: I): ListMembersResponse;
};
export declare const ListMembersResponse_OrganizationUser: {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser";
    encode(message: ListMembersResponse_OrganizationUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListMembersResponse_OrganizationUser;
    fromJSON(object: any): ListMembersResponse_OrganizationUser;
    toJSON(message: ListMembersResponse_OrganizationUser): unknown;
    fromPartial<I extends {
        subjectClaims?: {
            sub?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            picture?: string | undefined;
            givenName?: string | undefined;
            familyName?: string | undefined;
            preferredUsername?: string | undefined;
            zoneinfo?: string | undefined;
            locale?: string | undefined;
            phoneNumber?: string | undefined;
            subType?: import("../../../../yandex/cloud/oauth/claims").SubjectType | undefined;
            federation?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        subjectClaims?: ({
            sub?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            picture?: string | undefined;
            givenName?: string | undefined;
            familyName?: string | undefined;
            preferredUsername?: string | undefined;
            zoneinfo?: string | undefined;
            locale?: string | undefined;
            phoneNumber?: string | undefined;
            subType?: import("../../../../yandex/cloud/oauth/claims").SubjectType | undefined;
            federation?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            sub?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            picture?: string | undefined;
            givenName?: string | undefined;
            familyName?: string | undefined;
            preferredUsername?: string | undefined;
            zoneinfo?: string | undefined;
            locale?: string | undefined;
            phoneNumber?: string | undefined;
            subType?: import("../../../../yandex/cloud/oauth/claims").SubjectType | undefined;
            federation?: ({
                id?: string | undefined;
                name?: string | undefined;
            } & {
                id?: string | undefined;
                name?: string | undefined;
            } & Record<Exclude<keyof I["subjectClaims"]["federation"], "$type" | "id" | "name">, never>) | undefined;
        } & Record<Exclude<keyof I["subjectClaims"], "$type" | "sub" | "name" | "email" | "picture" | "givenName" | "familyName" | "preferredUsername" | "zoneinfo" | "locale" | "phoneNumber" | "subType" | "federation">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "subjectClaims">, never>>(object: I): ListMembersResponse_OrganizationUser;
};
export declare const DeleteMembershipRequest: {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipRequest";
    encode(message: DeleteMembershipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteMembershipRequest;
    fromJSON(object: any): DeleteMembershipRequest;
    toJSON(message: DeleteMembershipRequest): unknown;
    fromPartial<I extends {
        organizationId?: string | undefined;
        subjectId?: string | undefined;
    } & {
        organizationId?: string | undefined;
        subjectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "organizationId" | "subjectId">, never>>(object: I): DeleteMembershipRequest;
};
export declare const DeleteMembershipMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata";
    encode(message: DeleteMembershipMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteMembershipMetadata;
    fromJSON(object: any): DeleteMembershipMetadata;
    toJSON(message: DeleteMembershipMetadata): unknown;
    fromPartial<I extends {
        organizationId?: string | undefined;
        subjectId?: string | undefined;
    } & {
        organizationId?: string | undefined;
        subjectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "organizationId" | "subjectId">, never>>(object: I): DeleteMembershipMetadata;
};
export declare const DeleteMembershipResponse: {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipResponse";
    encode(message: DeleteMembershipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteMembershipResponse;
    fromJSON(object: any): DeleteMembershipResponse;
    toJSON(message: DeleteMembershipResponse): unknown;
    fromPartial<I extends {
        organizationId?: string | undefined;
        subjectId?: string | undefined;
    } & {
        organizationId?: string | undefined;
        subjectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "organizationId" | "subjectId">, never>>(object: I): DeleteMembershipResponse;
};
/** A set of methods for managing Organization users. */
export declare const UserServiceService: {
    /** List organization active members. */
    readonly listMembers: {
        readonly path: "/yandex.cloud.organizationmanager.v1.UserService/ListMembers";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListMembersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListMembersRequest;
        readonly responseSerialize: (value: ListMembersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListMembersResponse;
    };
    /** Delete user membership. */
    readonly deleteMembership: {
        readonly path: "/yandex.cloud.organizationmanager.v1.UserService/DeleteMembership";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteMembershipRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteMembershipRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface UserServiceServer extends UntypedServiceImplementation {
    /** List organization active members. */
    listMembers: handleUnaryCall<ListMembersRequest, ListMembersResponse>;
    /** Delete user membership. */
    deleteMembership: handleUnaryCall<DeleteMembershipRequest, Operation>;
}
export interface UserServiceClient extends Client {
    /** List organization active members. */
    listMembers(request: ListMembersRequest, callback: (error: ServiceError | null, response: ListMembersResponse) => void): ClientUnaryCall;
    listMembers(request: ListMembersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListMembersResponse) => void): ClientUnaryCall;
    listMembers(request: ListMembersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListMembersResponse) => void): ClientUnaryCall;
    /** Delete user membership. */
    deleteMembership(request: DeleteMembershipRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteMembership(request: DeleteMembershipRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteMembership(request: DeleteMembershipRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const UserServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): UserServiceClient;
    service: typeof UserServiceService;
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
