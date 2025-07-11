/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { UserSpec, ConnectionLimits, AuthPlugin, Permission, User, GlobalPermission } from "../../../../../yandex/cloud/mdb/mysql/v1/user";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1";
export interface GetUserRequest {
    $type: "yandex.cloud.mdb.mysql.v1.GetUserRequest";
    /**
     * ID of the cluster the user belongs to.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to return information about.
     *
     * To get this name, make a [UserService.List] request.
     */
    userName: string;
}
export interface ListUsersRequest {
    $type: "yandex.cloud.mdb.mysql.v1.ListUsersRequest";
    /**
     * ID of the cluster to list the users in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListUsersResponse.next_page_token] that can be used to get the next page of results in the subsequent [UserService.List] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListUsersResponse.next_page_token] returned by the previous [UserService.List] request.
     */
    pageToken: string;
}
export interface ListUsersResponse {
    $type: "yandex.cloud.mdb.mysql.v1.ListUsersResponse";
    /** List of users. */
    users: User[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListUsersRequest.page_size], use the [next_page_token] as the value for the [ListUsersRequest.page_token] in the subsequent [UserService.List] request to iterate through multiple pages of results.
     *
     * Each of the subsequent [UserService.List] requests should use the [next_page_token] value returned by the previous request to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateUserRequest {
    $type: "yandex.cloud.mdb.mysql.v1.CreateUserRequest";
    /**
     * ID of the cluster to create the user in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the user. */
    userSpec?: UserSpec;
}
export interface CreateUserMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.CreateUserMetadata";
    /** ID of the cluster the user is being created in. */
    clusterId: string;
    /** Name of the user that is being created. */
    userName: string;
}
export interface UpdateUserRequest {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateUserRequest";
    /**
     * ID of the cluster to update the user in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to update.
     *
     * To get this name, make a [UserService.List] request.
     */
    userName: string;
    /** Field mask that specifies which settings of the user should be updated. */
    updateMask?: FieldMask;
    /** New password for the user. */
    password: string;
    /** A new set of permissions that should be granted to the user. */
    permissions: Permission[];
    /** New set of global permissions to grant to the user. */
    globalPermissions: GlobalPermission[];
    /** Set of changed user connection limits. */
    connectionLimits?: ConnectionLimits;
    /** New user authentication plugin. */
    authenticationPlugin: AuthPlugin;
}
export interface UpdateUserMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateUserMetadata";
    /** ID of the cluster the user is being updated in. */
    clusterId: string;
    /** Name of the user that is being updated. */
    userName: string;
}
export interface DeleteUserRequest {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteUserRequest";
    /**
     * ID of the cluster to delete the user from.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to delete.
     *
     * To get this name, make a [UserService.List] request.
     */
    userName: string;
}
export interface DeleteUserMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteUserMetadata";
    /** ID of the cluster the user is being deleted from. */
    clusterId: string;
    /** Name of the user that is being deleted. */
    userName: string;
}
export interface GrantUserPermissionRequest {
    $type: "yandex.cloud.mdb.mysql.v1.GrantUserPermissionRequest";
    /**
     * ID of the cluster to grant permission to the user in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to grant permission to.
     *
     * To get this name, make a [UserService.List] request.
     */
    userName: string;
    /** Permission that should be granted to the specified user. */
    permission?: Permission;
}
export interface GrantUserPermissionMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.GrantUserPermissionMetadata";
    /** ID of the cluster the user is being granted a permission in. */
    clusterId: string;
    /** Name of the user that is being granted a permission. */
    userName: string;
}
export interface RevokeUserPermissionRequest {
    $type: "yandex.cloud.mdb.mysql.v1.RevokeUserPermissionRequest";
    /**
     * ID of the cluster to revoke permission from the user in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to revoke permission from.
     *
     * To get this name, make a [UserService.List] request.
     */
    userName: string;
    /** Permission that should be revoked from the user. */
    permission?: Permission;
}
export interface RevokeUserPermissionMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.RevokeUserPermissionMetadata";
    /** ID of the cluster the user is being revoked a permission in. */
    clusterId: string;
    /** Name of the user whose permission is being revoked. */
    userName: string;
}
export declare const GetUserRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.GetUserRequest";
    encode(message: GetUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserRequest;
    fromJSON(object: any): GetUserRequest;
    toJSON(message: GetUserRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): GetUserRequest;
};
export declare const ListUsersRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.ListUsersRequest";
    encode(message: ListUsersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUsersRequest;
    fromJSON(object: any): ListUsersRequest;
    toJSON(message: ListUsersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListUsersRequest;
};
export declare const ListUsersResponse: {
    $type: "yandex.cloud.mdb.mysql.v1.ListUsersResponse";
    encode(message: ListUsersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUsersResponse;
    fromJSON(object: any): ListUsersResponse;
    toJSON(message: ListUsersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        users?: {
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
            globalPermissions?: GlobalPermission[] | undefined;
            authenticationPlugin?: AuthPlugin | undefined;
            connectionLimits?: {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        users?: ({
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
            globalPermissions?: GlobalPermission[] | undefined;
            authenticationPlugin?: AuthPlugin | undefined;
            connectionLimits?: {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
            globalPermissions?: GlobalPermission[] | undefined;
            authenticationPlugin?: AuthPlugin | undefined;
            connectionLimits?: {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            permissions?: ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] & ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            } & {
                databaseName?: string | undefined;
                roles?: (import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & Record<Exclude<keyof I["users"][number]["permissions"][number]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[]>, never>) | undefined;
            } & Record<Exclude<keyof I["users"][number]["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["users"][number]["permissions"], "$type" | keyof {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[]>, never>) | undefined;
            clusterId?: string | undefined;
            globalPermissions?: (GlobalPermission[] & GlobalPermission[] & Record<Exclude<keyof I["users"][number]["globalPermissions"], "$type" | keyof GlobalPermission[]>, never>) | undefined;
            authenticationPlugin?: AuthPlugin | undefined;
            connectionLimits?: ({
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } & {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } & Record<Exclude<keyof I["users"][number]["connectionLimits"], "$type" | "maxQuestionsPerHour" | "maxUpdatesPerHour" | "maxConnectionsPerHour" | "maxUserConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["users"][number], "$type" | "name" | "permissions" | "clusterId" | "globalPermissions" | "authenticationPlugin" | "connectionLimits">, never>)[] & Record<Exclude<keyof I["users"], "$type" | keyof {
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
            globalPermissions?: GlobalPermission[] | undefined;
            authenticationPlugin?: AuthPlugin | undefined;
            connectionLimits?: {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "users">, never>>(object: I): ListUsersResponse;
};
export declare const CreateUserRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.CreateUserRequest";
    encode(message: CreateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateUserRequest;
    fromJSON(object: any): CreateUserRequest;
    toJSON(message: CreateUserRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userSpec?: {
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
            globalPermissions?: GlobalPermission[] | undefined;
            authenticationPlugin?: AuthPlugin | undefined;
            connectionLimits?: {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        userSpec?: ({
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
            globalPermissions?: GlobalPermission[] | undefined;
            authenticationPlugin?: AuthPlugin | undefined;
            connectionLimits?: {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            permissions?: ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] & ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            } & {
                databaseName?: string | undefined;
                roles?: (import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & Record<Exclude<keyof I["userSpec"]["permissions"][number]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[]>, never>) | undefined;
            } & Record<Exclude<keyof I["userSpec"]["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["userSpec"]["permissions"], "$type" | keyof {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[]>, never>) | undefined;
            password?: string | undefined;
            globalPermissions?: (GlobalPermission[] & GlobalPermission[] & Record<Exclude<keyof I["userSpec"]["globalPermissions"], "$type" | keyof GlobalPermission[]>, never>) | undefined;
            authenticationPlugin?: AuthPlugin | undefined;
            connectionLimits?: ({
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } & {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } & Record<Exclude<keyof I["userSpec"]["connectionLimits"], "$type" | "maxQuestionsPerHour" | "maxUpdatesPerHour" | "maxConnectionsPerHour" | "maxUserConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["userSpec"], "$type" | "name" | "permissions" | "password" | "globalPermissions" | "authenticationPlugin" | "connectionLimits">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userSpec">, never>>(object: I): CreateUserRequest;
};
export declare const CreateUserMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1.CreateUserMetadata";
    encode(message: CreateUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateUserMetadata;
    fromJSON(object: any): CreateUserMetadata;
    toJSON(message: CreateUserMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): CreateUserMetadata;
};
export declare const UpdateUserRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateUserRequest";
    encode(message: UpdateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateUserRequest;
    fromJSON(object: any): UpdateUserRequest;
    toJSON(message: UpdateUserRequest): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        permissions?: {
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
        }[] | undefined;
        clusterId?: string | undefined;
        password?: string | undefined;
        userName?: string | undefined;
        globalPermissions?: GlobalPermission[] | undefined;
        authenticationPlugin?: AuthPlugin | undefined;
        connectionLimits?: {
            maxQuestionsPerHour?: number | undefined;
            maxUpdatesPerHour?: number | undefined;
            maxConnectionsPerHour?: number | undefined;
            maxUserConnections?: number | undefined;
        } | undefined;
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        permissions?: ({
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
        }[] & ({
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
        } & {
            databaseName?: string | undefined;
            roles?: (import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & Record<Exclude<keyof I["permissions"][number]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
        }[]>, never>) | undefined;
        clusterId?: string | undefined;
        password?: string | undefined;
        userName?: string | undefined;
        globalPermissions?: (GlobalPermission[] & GlobalPermission[] & Record<Exclude<keyof I["globalPermissions"], "$type" | keyof GlobalPermission[]>, never>) | undefined;
        authenticationPlugin?: AuthPlugin | undefined;
        connectionLimits?: ({
            maxQuestionsPerHour?: number | undefined;
            maxUpdatesPerHour?: number | undefined;
            maxConnectionsPerHour?: number | undefined;
            maxUserConnections?: number | undefined;
        } & {
            maxQuestionsPerHour?: number | undefined;
            maxUpdatesPerHour?: number | undefined;
            maxConnectionsPerHour?: number | undefined;
            maxUserConnections?: number | undefined;
        } & Record<Exclude<keyof I["connectionLimits"], "$type" | "maxQuestionsPerHour" | "maxUpdatesPerHour" | "maxConnectionsPerHour" | "maxUserConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "permissions" | "clusterId" | "password" | "userName" | "globalPermissions" | "authenticationPlugin" | "connectionLimits">, never>>(object: I): UpdateUserRequest;
};
export declare const UpdateUserMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateUserMetadata";
    encode(message: UpdateUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateUserMetadata;
    fromJSON(object: any): UpdateUserMetadata;
    toJSON(message: UpdateUserMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): UpdateUserMetadata;
};
export declare const DeleteUserRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteUserRequest";
    encode(message: DeleteUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteUserRequest;
    fromJSON(object: any): DeleteUserRequest;
    toJSON(message: DeleteUserRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): DeleteUserRequest;
};
export declare const DeleteUserMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteUserMetadata";
    encode(message: DeleteUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteUserMetadata;
    fromJSON(object: any): DeleteUserMetadata;
    toJSON(message: DeleteUserMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): DeleteUserMetadata;
};
export declare const GrantUserPermissionRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.GrantUserPermissionRequest";
    encode(message: GrantUserPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrantUserPermissionRequest;
    fromJSON(object: any): GrantUserPermissionRequest;
    toJSON(message: GrantUserPermissionRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
        permission?: {
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
        permission?: ({
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
        } & {
            databaseName?: string | undefined;
            roles?: (import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & Record<Exclude<keyof I["permission"]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permission"], "$type" | "databaseName" | "roles">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName" | "permission">, never>>(object: I): GrantUserPermissionRequest;
};
export declare const GrantUserPermissionMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1.GrantUserPermissionMetadata";
    encode(message: GrantUserPermissionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrantUserPermissionMetadata;
    fromJSON(object: any): GrantUserPermissionMetadata;
    toJSON(message: GrantUserPermissionMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): GrantUserPermissionMetadata;
};
export declare const RevokeUserPermissionRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.RevokeUserPermissionRequest";
    encode(message: RevokeUserPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RevokeUserPermissionRequest;
    fromJSON(object: any): RevokeUserPermissionRequest;
    toJSON(message: RevokeUserPermissionRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
        permission?: {
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
        permission?: ({
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
        } & {
            databaseName?: string | undefined;
            roles?: (import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & Record<Exclude<keyof I["permission"]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permission"], "$type" | "databaseName" | "roles">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName" | "permission">, never>>(object: I): RevokeUserPermissionRequest;
};
export declare const RevokeUserPermissionMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1.RevokeUserPermissionMetadata";
    encode(message: RevokeUserPermissionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RevokeUserPermissionMetadata;
    fromJSON(object: any): RevokeUserPermissionMetadata;
    toJSON(message: RevokeUserPermissionMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): RevokeUserPermissionMetadata;
};
/**
 * A set of methods for managing MySQL users.
 *
 * See [the documentation](/docs/managed-mysql/operations/cluster-users) for details.
 */
export declare const UserServiceService: {
    /** Retrieves information about the specified user. */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserRequest;
        readonly responseSerialize: (value: User) => Buffer;
        readonly responseDeserialize: (value: Buffer) => User;
    };
    /** Retrieves the list of users in a cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListUsersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListUsersRequest;
        readonly responseSerialize: (value: ListUsersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListUsersResponse;
    };
    /** Creates a user in a cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates a user in a cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes a user in a cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Grants permission to access a database to a user in a cluster. */
    readonly grantPermission: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/GrantPermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GrantUserPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GrantUserPermissionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Revokes permission to access a database from a user in a cluster. */
    readonly revokePermission: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/RevokePermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RevokeUserPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RevokeUserPermissionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface UserServiceServer extends UntypedServiceImplementation {
    /** Retrieves information about the specified user. */
    get: handleUnaryCall<GetUserRequest, User>;
    /** Retrieves the list of users in a cluster. */
    list: handleUnaryCall<ListUsersRequest, ListUsersResponse>;
    /** Creates a user in a cluster. */
    create: handleUnaryCall<CreateUserRequest, Operation>;
    /** Updates a user in a cluster. */
    update: handleUnaryCall<UpdateUserRequest, Operation>;
    /** Deletes a user in a cluster. */
    delete: handleUnaryCall<DeleteUserRequest, Operation>;
    /** Grants permission to access a database to a user in a cluster. */
    grantPermission: handleUnaryCall<GrantUserPermissionRequest, Operation>;
    /** Revokes permission to access a database from a user in a cluster. */
    revokePermission: handleUnaryCall<RevokeUserPermissionRequest, Operation>;
}
export interface UserServiceClient extends Client {
    /** Retrieves information about the specified user. */
    get(request: GetUserRequest, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: GetUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: GetUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    /** Retrieves the list of users in a cluster. */
    list(request: ListUsersRequest, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    list(request: ListUsersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    list(request: ListUsersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    /** Creates a user in a cluster. */
    create(request: CreateUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates a user in a cluster. */
    update(request: UpdateUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes a user in a cluster. */
    delete(request: DeleteUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Grants permission to access a database to a user in a cluster. */
    grantPermission(request: GrantUserPermissionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    grantPermission(request: GrantUserPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    grantPermission(request: GrantUserPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Revokes permission to access a database from a user in a cluster. */
    revokePermission(request: RevokeUserPermissionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    revokePermission(request: RevokeUserPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    revokePermission(request: RevokeUserPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
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
