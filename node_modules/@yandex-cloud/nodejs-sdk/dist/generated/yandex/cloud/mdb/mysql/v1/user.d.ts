import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1";
export declare enum GlobalPermission {
    GLOBAL_PERMISSION_UNSPECIFIED = 0,
    /** REPLICATION_CLIENT - Enables use of the `SHOW MASTER STATUS`, `SHOW SLAVE STATUS`, and `SHOW BINARY LOGS` statements. */
    REPLICATION_CLIENT = 1,
    /**
     * REPLICATION_SLAVE - Enables the account to request updates that have been made to databases on the master server,
     * using the `SHOW SLAVE HOSTS`, `SHOW RELAYLOG EVENTS` and `SHOW BINLOG EVENTS` statements.
     */
    REPLICATION_SLAVE = 2,
    /**
     * PROCESS - Enables display of information about the the statements currently being performed by sessions (the set of threads executing within the server).
     *
     * The privilege enables use of `SHOW PROCESSLIST` or `mysqladmin` processlist to see threads belonging to other users.
     * You can always see your own threads. The `PROCESS` privilege also enables use of `SHOW ENGINE`.
     */
    PROCESS = 3,
    /** FLUSH_OPTIMIZER_COSTS - Enables use of the `FLUSH OPTIMIZER_COSTS` statement. */
    FLUSH_OPTIMIZER_COSTS = 4,
    /**
     * SHOW_ROUTINE - Enables a user to access definitions and properties of all stored routines (stored procedures and functions), even those for which the user is not named as the routine DEFINER.
     * This access includes:
     * The contents of the Information Schema `ROUTINES` table.
     * The `SHOW CREATE FUNCTION` and `SHOW CREATE PROCEDURE` statements.
     * The `SHOW FUNCTION CODE` and `SHOW PROCEDURE CODE` statements.
     * The SHOW `FUNCTION STATUS` and `SHOW PROCEDURE STATUS` statements.
     */
    SHOW_ROUTINE = 5,
    UNRECOGNIZED = -1
}
export declare function globalPermissionFromJSON(object: any): GlobalPermission;
export declare function globalPermissionToJSON(object: GlobalPermission): string;
export declare enum AuthPlugin {
    AUTH_PLUGIN_UNSPECIFIED = 0,
    /** MYSQL_NATIVE_PASSWORD - Use [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/native-pluggable-authentication.html). */
    MYSQL_NATIVE_PASSWORD = 1,
    /** CACHING_SHA2_PASSWORD - Use [Caching SHA-2 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html). */
    CACHING_SHA2_PASSWORD = 2,
    /** SHA256_PASSWORD - Use [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/sha256-pluggable-authentication.html). */
    SHA256_PASSWORD = 3,
    UNRECOGNIZED = -1
}
export declare function authPluginFromJSON(object: any): AuthPlugin;
export declare function authPluginToJSON(object: AuthPlugin): string;
/**
 * An object that represents MySQL user.
 *
 * See [the documentation](/docs/managed-mysql/operations/cluster-users) for details.
 */
export interface User {
    $type: "yandex.cloud.mdb.mysql.v1.User";
    /** Name of the user. */
    name: string;
    /** ID of the cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
    /** Set of global permissions to grant to the user. */
    globalPermissions: GlobalPermission[];
    /** Set of user connection limits. */
    connectionLimits?: ConnectionLimits;
    /** User authentication plugin. */
    authenticationPlugin: AuthPlugin;
}
export interface Permission {
    $type: "yandex.cloud.mdb.mysql.v1.Permission";
    /** Name of the database that the permission grants access to. */
    databaseName: string;
    /**
     * Roles granted to the user within the database.
     *
     * See [the documentation](/docs/managed-mysql/operations/grant) for details.
     */
    roles: Permission_Privilege[];
}
export declare enum Permission_Privilege {
    PRIVILEGE_UNSPECIFIED = 0,
    /** ALL_PRIVILEGES - All privileges that can be made available to the user. */
    ALL_PRIVILEGES = 1,
    /** ALTER - Altering tables. */
    ALTER = 2,
    /** ALTER_ROUTINE - Altering stored routines and functions. */
    ALTER_ROUTINE = 3,
    /** CREATE - Creating tables or indexes. */
    CREATE = 4,
    /** CREATE_ROUTINE - Creating stored routines. */
    CREATE_ROUTINE = 5,
    /** CREATE_TEMPORARY_TABLES - Creating temporary tables. */
    CREATE_TEMPORARY_TABLES = 6,
    /** CREATE_VIEW - Creating views. */
    CREATE_VIEW = 7,
    /** DELETE - Deleting tables. */
    DELETE = 8,
    /** DROP - Removing tables or views. */
    DROP = 9,
    /** EVENT - Creating, altering, dropping, or displaying events for the Event Scheduler. */
    EVENT = 10,
    /** EXECUTE - Executing stored routines. */
    EXECUTE = 11,
    /** INDEX - Creating and removing indexes. */
    INDEX = 12,
    /** INSERT - Inserting rows into the database. */
    INSERT = 13,
    /** LOCK_TABLES - Using `LOCK TABLES` statement for tables available with `SELECT` privilege. */
    LOCK_TABLES = 14,
    /**
     * SELECT - Selecting rows from tables.
     *
     * Some `SELECT` statements can be allowed without the `SELECT` privilege. All statements that read column values require the `SELECT` privilege.
     *
     * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_select) for details.
     */
    SELECT = 15,
    /** SHOW_VIEW - Using the `SHOW CREATE VIEW` statement. Also needed for views used with `EXPLAIN`. */
    SHOW_VIEW = 16,
    /** TRIGGER - Creating, removing, executing, or displaying triggers for a table. */
    TRIGGER = 17,
    /** UPDATE - Updating rows in the database. */
    UPDATE = 18,
    /** REFERENCES - Creation of a foreign key constraint for the parent table. */
    REFERENCES = 19,
    UNRECOGNIZED = -1
}
export declare function permission_PrivilegeFromJSON(object: any): Permission_Privilege;
export declare function permission_PrivilegeToJSON(object: Permission_Privilege): string;
export interface ConnectionLimits {
    $type: "yandex.cloud.mdb.mysql.v1.ConnectionLimits";
    /** The maximum permitted number of user questions per hour. */
    maxQuestionsPerHour?: number;
    /** The maximum permitted number of user updates per hour. */
    maxUpdatesPerHour?: number;
    /** The maximum permitted number of simultaneous client connections per hour. */
    maxConnectionsPerHour?: number;
    /** The maximum number of simultaneous connections permitted to any given MySQL user account. */
    maxUserConnections?: number;
}
export interface UserSpec {
    $type: "yandex.cloud.mdb.mysql.v1.UserSpec";
    /** Name of the user. */
    name: string;
    /** Password of the user. */
    password: string;
    /**
     * Set of permissions granted to the user to access specific databases.
     * One permission per database.
     *
     * When a permission for a database is set, the user will have access to the database.
     */
    permissions: Permission[];
    /** Set of global permissions to grant to the user. */
    globalPermissions: GlobalPermission[];
    /** Set of user connection limits. */
    connectionLimits?: ConnectionLimits;
    /** User authentication plugin. */
    authenticationPlugin: AuthPlugin;
}
export declare const User: {
    $type: "yandex.cloud.mdb.mysql.v1.User";
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        permissions?: {
            databaseName?: string | undefined;
            roles?: Permission_Privilege[] | undefined;
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
            roles?: Permission_Privilege[] | undefined;
        }[] & ({
            databaseName?: string | undefined;
            roles?: Permission_Privilege[] | undefined;
        } & {
            databaseName?: string | undefined;
            roles?: (Permission_Privilege[] & Permission_Privilege[] & Record<Exclude<keyof I["permissions"][number]["roles"], "$type" | keyof Permission_Privilege[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            databaseName?: string | undefined;
            roles?: Permission_Privilege[] | undefined;
        }[]>, never>) | undefined;
        clusterId?: string | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "name" | "permissions" | "clusterId" | "globalPermissions" | "authenticationPlugin" | "connectionLimits">, never>>(object: I): User;
};
export declare const Permission: {
    $type: "yandex.cloud.mdb.mysql.v1.Permission";
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    fromPartial<I extends {
        databaseName?: string | undefined;
        roles?: Permission_Privilege[] | undefined;
    } & {
        databaseName?: string | undefined;
        roles?: (Permission_Privilege[] & Permission_Privilege[] & Record<Exclude<keyof I["roles"], "$type" | keyof Permission_Privilege[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseName" | "roles">, never>>(object: I): Permission;
};
export declare const ConnectionLimits: {
    $type: "yandex.cloud.mdb.mysql.v1.ConnectionLimits";
    encode(message: ConnectionLimits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectionLimits;
    fromJSON(object: any): ConnectionLimits;
    toJSON(message: ConnectionLimits): unknown;
    fromPartial<I extends {
        maxQuestionsPerHour?: number | undefined;
        maxUpdatesPerHour?: number | undefined;
        maxConnectionsPerHour?: number | undefined;
        maxUserConnections?: number | undefined;
    } & {
        maxQuestionsPerHour?: number | undefined;
        maxUpdatesPerHour?: number | undefined;
        maxConnectionsPerHour?: number | undefined;
        maxUserConnections?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxQuestionsPerHour" | "maxUpdatesPerHour" | "maxConnectionsPerHour" | "maxUserConnections">, never>>(object: I): ConnectionLimits;
};
export declare const UserSpec: {
    $type: "yandex.cloud.mdb.mysql.v1.UserSpec";
    encode(message: UserSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserSpec;
    fromJSON(object: any): UserSpec;
    toJSON(message: UserSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        permissions?: {
            databaseName?: string | undefined;
            roles?: Permission_Privilege[] | undefined;
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
            roles?: Permission_Privilege[] | undefined;
        }[] & ({
            databaseName?: string | undefined;
            roles?: Permission_Privilege[] | undefined;
        } & {
            databaseName?: string | undefined;
            roles?: (Permission_Privilege[] & Permission_Privilege[] & Record<Exclude<keyof I["permissions"][number]["roles"], "$type" | keyof Permission_Privilege[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            databaseName?: string | undefined;
            roles?: Permission_Privilege[] | undefined;
        }[]>, never>) | undefined;
        password?: string | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "name" | "permissions" | "password" | "globalPermissions" | "authenticationPlugin" | "connectionLimits">, never>>(object: I): UserSpec;
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
