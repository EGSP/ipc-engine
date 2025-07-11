import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
/**
 * A Kafka user.
 * For more information, see the [Operations -> Accounts](/docs/managed-kafka/operations/cluster-accounts) section of the documentation.
 */
export interface User {
    $type: "yandex.cloud.mdb.kafka.v1.User";
    /** Name of the Kafka user. */
    name: string;
    /**
     * ID of the Apache Kafka® cluster the user belongs to.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Set of permissions granted to this user. */
    permissions: Permission[];
}
export interface UserSpec {
    $type: "yandex.cloud.mdb.kafka.v1.UserSpec";
    /** Name of the Kafka user. */
    name: string;
    /** Password of the Kafka user. */
    password: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
}
export interface Permission {
    $type: "yandex.cloud.mdb.kafka.v1.Permission";
    /**
     * Name or prefix-pattern with wildcard for the topic that the permission grants access to.
     *
     * To get the topic name, make a [TopicService.List] request.
     */
    topicName: string;
    /** Access role type to grant to the user. */
    role: Permission_AccessRole;
    /**
     * Lists hosts allowed for this permission.
     * When not defined, access from any host is allowed.
     *
     * Bare in mind that the same host might appear in multiple permissions at the same time,
     * hence removing individual permission doesn't automatically restricts access from the [allow_hosts] of the permission.
     * If the same host(s) is listed for another permission of the same principal/topic, the host(s) remains allowed.
     */
    allowHosts: string[];
}
export declare enum Permission_AccessRole {
    ACCESS_ROLE_UNSPECIFIED = 0,
    /** ACCESS_ROLE_PRODUCER - producer role for the user. */
    ACCESS_ROLE_PRODUCER = 1,
    /** ACCESS_ROLE_CONSUMER - consumer role for the user. */
    ACCESS_ROLE_CONSUMER = 2,
    /** ACCESS_ROLE_ADMIN - admin role for the user. */
    ACCESS_ROLE_ADMIN = 3,
    UNRECOGNIZED = -1
}
export declare function permission_AccessRoleFromJSON(object: any): Permission_AccessRole;
export declare function permission_AccessRoleToJSON(object: Permission_AccessRole): string;
export declare const User: {
    $type: "yandex.cloud.mdb.kafka.v1.User";
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        permissions?: {
            role?: Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        }[] | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        permissions?: ({
            role?: Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        }[] & ({
            role?: Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        } & {
            role?: Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: (string[] & string[] & Record<Exclude<keyof I["permissions"][number]["allowHosts"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "role" | "topicName" | "allowHosts">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            role?: Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        }[]>, never>) | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "permissions" | "clusterId">, never>>(object: I): User;
};
export declare const UserSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.UserSpec";
    encode(message: UserSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserSpec;
    fromJSON(object: any): UserSpec;
    toJSON(message: UserSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        permissions?: {
            role?: Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        }[] | undefined;
        password?: string | undefined;
    } & {
        name?: string | undefined;
        permissions?: ({
            role?: Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        }[] & ({
            role?: Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        } & {
            role?: Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: (string[] & string[] & Record<Exclude<keyof I["permissions"][number]["allowHosts"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "role" | "topicName" | "allowHosts">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            role?: Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        }[]>, never>) | undefined;
        password?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "permissions" | "password">, never>>(object: I): UserSpec;
};
export declare const Permission: {
    $type: "yandex.cloud.mdb.kafka.v1.Permission";
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    fromPartial<I extends {
        role?: Permission_AccessRole | undefined;
        topicName?: string | undefined;
        allowHosts?: string[] | undefined;
    } & {
        role?: Permission_AccessRole | undefined;
        topicName?: string | undefined;
        allowHosts?: (string[] & string[] & Record<Exclude<keyof I["allowHosts"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "role" | "topicName" | "allowHosts">, never>>(object: I): Permission;
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
