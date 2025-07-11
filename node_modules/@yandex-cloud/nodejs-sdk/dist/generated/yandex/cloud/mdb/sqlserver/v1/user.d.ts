import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
/** Set of server roles. */
export declare enum ServerRole {
    SERVER_ROLE_UNSPECIFIED = 0,
    /**
     * MDB_MONITOR - Effectively grants VIEW SERVER STATE to the login.
     *
     * That gives an ability to use various dynamic management views to monitor server state, including Activity Monitor tool that is built-in into SSMS.
     *
     * No intrusive actions are allowed, so this is pretty safe to grant.
     */
    MDB_MONITOR = 1,
    UNRECOGNIZED = -1
}
export declare function serverRoleFromJSON(object: any): ServerRole;
export declare function serverRoleToJSON(object: ServerRole): string;
/** An SQL Server user. */
export interface User {
    $type: "yandex.cloud.mdb.sqlserver.v1.User";
    /** Name of the SQL Server user. */
    name: string;
    /** ID of the SQL Server cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
    /** Set of server roles granted to the login. */
    serverRoles: ServerRole[];
}
export interface Permission {
    $type: "yandex.cloud.mdb.sqlserver.v1.Permission";
    /** Name of the database the permission grants access to. */
    databaseName: string;
    /** Roles granted to the user within the database. */
    roles: Permission_Role[];
}
/** Role granted to the user within the database. */
export declare enum Permission_Role {
    ROLE_UNSPECIFIED = 0,
    /** DB_OWNER - Members of this fixed database role can perform all configuration and maintenance activities on a database and can also drop a database in SQL Server. */
    DB_OWNER = 1,
    /** DB_SECURITYADMIN - Members of this fixed database role can modify role membership for custom roles only and manage permissions. They can potentially elevate their privileges and their actions should be monitored. */
    DB_SECURITYADMIN = 2,
    /** DB_ACCESSADMIN - Members of this fixed database role can add or remove access to a database for Windows logins, Windows groups, and SQL Server logins. */
    DB_ACCESSADMIN = 3,
    /** DB_BACKUPOPERATOR - Members of this fixed database role can back up the database. */
    DB_BACKUPOPERATOR = 4,
    /** DB_DDLADMIN - Members of this fixed database role can run any Data Definition Language (DDL) command in a database. */
    DB_DDLADMIN = 5,
    /** DB_DATAWRITER - Members of this fixed database role can add, delete, or change data in all user tables. */
    DB_DATAWRITER = 6,
    /** DB_DATAREADER - Members of this fixed database role can read all data from all user tables. */
    DB_DATAREADER = 7,
    /** DB_DENYDATAWRITER - Members of this fixed database role cannot add, modify, or delete any data in the user tables within a database. A denial has a higher priority than a grant, so you can use this role to quickly restrict one's privileges without explicitly revoking permissions or roles. */
    DB_DENYDATAWRITER = 8,
    /** DB_DENYDATAREADER - Members of this fixed database role cannot read any data in the user tables within a database. A denial has a higher priority than a grant, so you can use this role to quickly restrict one's privileges without explicitly revoking permissions or roles. */
    DB_DENYDATAREADER = 9,
    UNRECOGNIZED = -1
}
export declare function permission_RoleFromJSON(object: any): Permission_Role;
export declare function permission_RoleToJSON(object: Permission_Role): string;
export interface UserSpec {
    $type: "yandex.cloud.mdb.sqlserver.v1.UserSpec";
    /** Name of the SQL Server user. */
    name: string;
    /** Password of the SQL Server user. */
    password: string;
    /** Set of permissions to grant to the user. */
    permissions: Permission[];
    /** Set of server roles. */
    serverRoles: ServerRole[];
}
export declare const User: {
    $type: "yandex.cloud.mdb.sqlserver.v1.User";
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        permissions?: {
            databaseName?: string | undefined;
            roles?: Permission_Role[] | undefined;
        }[] | undefined;
        clusterId?: string | undefined;
        serverRoles?: ServerRole[] | undefined;
    } & {
        name?: string | undefined;
        permissions?: ({
            databaseName?: string | undefined;
            roles?: Permission_Role[] | undefined;
        }[] & ({
            databaseName?: string | undefined;
            roles?: Permission_Role[] | undefined;
        } & {
            databaseName?: string | undefined;
            roles?: (Permission_Role[] & Permission_Role[] & Record<Exclude<keyof I["permissions"][number]["roles"], "$type" | keyof Permission_Role[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            databaseName?: string | undefined;
            roles?: Permission_Role[] | undefined;
        }[]>, never>) | undefined;
        clusterId?: string | undefined;
        serverRoles?: (ServerRole[] & ServerRole[] & Record<Exclude<keyof I["serverRoles"], "$type" | keyof ServerRole[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "permissions" | "clusterId" | "serverRoles">, never>>(object: I): User;
};
export declare const Permission: {
    $type: "yandex.cloud.mdb.sqlserver.v1.Permission";
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    fromPartial<I extends {
        databaseName?: string | undefined;
        roles?: Permission_Role[] | undefined;
    } & {
        databaseName?: string | undefined;
        roles?: (Permission_Role[] & Permission_Role[] & Record<Exclude<keyof I["roles"], "$type" | keyof Permission_Role[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseName" | "roles">, never>>(object: I): Permission;
};
export declare const UserSpec: {
    $type: "yandex.cloud.mdb.sqlserver.v1.UserSpec";
    encode(message: UserSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserSpec;
    fromJSON(object: any): UserSpec;
    toJSON(message: UserSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        permissions?: {
            databaseName?: string | undefined;
            roles?: Permission_Role[] | undefined;
        }[] | undefined;
        password?: string | undefined;
        serverRoles?: ServerRole[] | undefined;
    } & {
        name?: string | undefined;
        permissions?: ({
            databaseName?: string | undefined;
            roles?: Permission_Role[] | undefined;
        }[] & ({
            databaseName?: string | undefined;
            roles?: Permission_Role[] | undefined;
        } & {
            databaseName?: string | undefined;
            roles?: (Permission_Role[] & Permission_Role[] & Record<Exclude<keyof I["permissions"][number]["roles"], "$type" | keyof Permission_Role[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            databaseName?: string | undefined;
            roles?: Permission_Role[] | undefined;
        }[]>, never>) | undefined;
        password?: string | undefined;
        serverRoles?: (ServerRole[] & ServerRole[] & Record<Exclude<keyof I["serverRoles"], "$type" | keyof ServerRole[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "permissions" | "password" | "serverRoles">, never>>(object: I): UserSpec;
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
