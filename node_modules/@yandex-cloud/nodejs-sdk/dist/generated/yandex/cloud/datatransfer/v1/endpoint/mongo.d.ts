import _m0 from "protobufjs/minimal";
import { TLSMode, Secret, CleanupPolicy } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
export interface OnPremiseMongo {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMongo";
    hosts: string[];
    port: number;
    tlsMode?: TLSMode;
    replicaSet: string;
}
export interface MongoConnectionOptions {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnectionOptions";
    mdbClusterId: string | undefined;
    onPremise?: OnPremiseMongo | undefined;
    /** User name */
    user: string;
    /** Password for user */
    password?: Secret;
    /** Database name associated with the credentials */
    authSource: string;
}
export interface MongoConnection {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnection";
    connectionOptions?: MongoConnectionOptions | undefined;
}
export interface MongoCollection {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoCollection";
    databaseName: string;
    collectionName: string;
}
export interface MongoSource {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoSource";
    connection?: MongoConnection;
    subnetId: string;
    /** Security groups */
    securityGroups: string[];
    /**
     * List of collections for replication. Empty list implies replication of all
     * tables on the deployment. Allowed to use * as collection name.
     */
    collections: MongoCollection[];
    /**
     * List of forbidden collections for replication. Allowed to use * as collection
     * name for forbid all collections of concrete schema.
     */
    excludedCollections: MongoCollection[];
    /** Read mode for mongo client */
    secondaryPreferredMode: boolean;
}
export interface MongoTarget {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoTarget";
    connection?: MongoConnection;
    subnetId: string;
    /** Security groups */
    securityGroups: string[];
    /** Database name */
    database: string;
    cleanupPolicy: CleanupPolicy;
}
export declare const OnPremiseMongo: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMongo";
    encode(message: OnPremiseMongo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OnPremiseMongo;
    fromJSON(object: any): OnPremiseMongo;
    toJSON(message: OnPremiseMongo): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        hosts?: string[] | undefined;
        tlsMode?: {
            enabled?: {
                caCertificate?: string | undefined;
            } | undefined;
            disabled?: {} | undefined;
        } | undefined;
        replicaSet?: string | undefined;
    } & {
        port?: number | undefined;
        hosts?: (string[] & string[] & Record<Exclude<keyof I["hosts"], "$type" | keyof string[]>, never>) | undefined;
        tlsMode?: ({
            enabled?: {
                caCertificate?: string | undefined;
            } | undefined;
            disabled?: {} | undefined;
        } & {
            enabled?: ({
                caCertificate?: string | undefined;
            } & {
                caCertificate?: string | undefined;
            } & Record<Exclude<keyof I["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
            disabled?: ({} & {} & Record<Exclude<keyof I["tlsMode"]["disabled"], "$type">, never>) | undefined;
        } & Record<Exclude<keyof I["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
        replicaSet?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>>(object: I): OnPremiseMongo;
};
export declare const MongoConnectionOptions: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnectionOptions";
    encode(message: MongoConnectionOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MongoConnectionOptions;
    fromJSON(object: any): MongoConnectionOptions;
    toJSON(message: MongoConnectionOptions): unknown;
    fromPartial<I extends {
        mdbClusterId?: string | undefined;
        onPremise?: {
            port?: number | undefined;
            hosts?: string[] | undefined;
            tlsMode?: {
                enabled?: {
                    caCertificate?: string | undefined;
                } | undefined;
                disabled?: {} | undefined;
            } | undefined;
            replicaSet?: string | undefined;
        } | undefined;
        user?: string | undefined;
        password?: {
            raw?: string | undefined;
        } | undefined;
        authSource?: string | undefined;
    } & {
        mdbClusterId?: string | undefined;
        onPremise?: ({
            port?: number | undefined;
            hosts?: string[] | undefined;
            tlsMode?: {
                enabled?: {
                    caCertificate?: string | undefined;
                } | undefined;
                disabled?: {} | undefined;
            } | undefined;
            replicaSet?: string | undefined;
        } & {
            port?: number | undefined;
            hosts?: (string[] & string[] & Record<Exclude<keyof I["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
            tlsMode?: ({
                enabled?: {
                    caCertificate?: string | undefined;
                } | undefined;
                disabled?: {} | undefined;
            } & {
                enabled?: ({
                    caCertificate?: string | undefined;
                } & {
                    caCertificate?: string | undefined;
                } & Record<Exclude<keyof I["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                disabled?: ({} & {} & Record<Exclude<keyof I["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
            replicaSet?: string | undefined;
        } & Record<Exclude<keyof I["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
        user?: string | undefined;
        password?: ({
            raw?: string | undefined;
        } & {
            raw?: string | undefined;
        } & Record<Exclude<keyof I["password"], "$type" | "raw">, never>) | undefined;
        authSource?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>>(object: I): MongoConnectionOptions;
};
export declare const MongoConnection: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnection";
    encode(message: MongoConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MongoConnection;
    fromJSON(object: any): MongoConnection;
    toJSON(message: MongoConnection): unknown;
    fromPartial<I extends {
        connectionOptions?: {
            mdbClusterId?: string | undefined;
            onPremise?: {
                port?: number | undefined;
                hosts?: string[] | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                replicaSet?: string | undefined;
            } | undefined;
            user?: string | undefined;
            password?: {
                raw?: string | undefined;
            } | undefined;
            authSource?: string | undefined;
        } | undefined;
    } & {
        connectionOptions?: ({
            mdbClusterId?: string | undefined;
            onPremise?: {
                port?: number | undefined;
                hosts?: string[] | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                replicaSet?: string | undefined;
            } | undefined;
            user?: string | undefined;
            password?: {
                raw?: string | undefined;
            } | undefined;
            authSource?: string | undefined;
        } & {
            mdbClusterId?: string | undefined;
            onPremise?: ({
                port?: number | undefined;
                hosts?: string[] | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                replicaSet?: string | undefined;
            } & {
                port?: number | undefined;
                hosts?: (string[] & string[] & Record<Exclude<keyof I["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                tlsMode?: ({
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } & {
                    enabled?: ({
                        caCertificate?: string | undefined;
                    } & {
                        caCertificate?: string | undefined;
                    } & Record<Exclude<keyof I["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                    disabled?: ({} & {} & Record<Exclude<keyof I["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                replicaSet?: string | undefined;
            } & Record<Exclude<keyof I["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
            user?: string | undefined;
            password?: ({
                raw?: string | undefined;
            } & {
                raw?: string | undefined;
            } & Record<Exclude<keyof I["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
            authSource?: string | undefined;
        } & Record<Exclude<keyof I["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "connectionOptions">, never>>(object: I): MongoConnection;
};
export declare const MongoCollection: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoCollection";
    encode(message: MongoCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MongoCollection;
    fromJSON(object: any): MongoCollection;
    toJSON(message: MongoCollection): unknown;
    fromPartial<I extends {
        databaseName?: string | undefined;
        collectionName?: string | undefined;
    } & {
        databaseName?: string | undefined;
        collectionName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "databaseName" | "collectionName">, never>>(object: I): MongoCollection;
};
export declare const MongoSource: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoSource";
    encode(message: MongoSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MongoSource;
    fromJSON(object: any): MongoSource;
    toJSON(message: MongoSource): unknown;
    fromPartial<I extends {
        connection?: {
            connectionOptions?: {
                mdbClusterId?: string | undefined;
                onPremise?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    replicaSet?: string | undefined;
                } | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                authSource?: string | undefined;
            } | undefined;
        } | undefined;
        subnetId?: string | undefined;
        securityGroups?: string[] | undefined;
        secondaryPreferredMode?: boolean | undefined;
        collections?: {
            databaseName?: string | undefined;
            collectionName?: string | undefined;
        }[] | undefined;
        excludedCollections?: {
            databaseName?: string | undefined;
            collectionName?: string | undefined;
        }[] | undefined;
    } & {
        connection?: ({
            connectionOptions?: {
                mdbClusterId?: string | undefined;
                onPremise?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    replicaSet?: string | undefined;
                } | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                authSource?: string | undefined;
            } | undefined;
        } & {
            connectionOptions?: ({
                mdbClusterId?: string | undefined;
                onPremise?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    replicaSet?: string | undefined;
                } | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                authSource?: string | undefined;
            } & {
                mdbClusterId?: string | undefined;
                onPremise?: ({
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    replicaSet?: string | undefined;
                } & {
                    port?: number | undefined;
                    hosts?: (string[] & string[] & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                    tlsMode?: ({
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } & {
                        enabled?: ({
                            caCertificate?: string | undefined;
                        } & {
                            caCertificate?: string | undefined;
                        } & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                        disabled?: ({} & {} & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    replicaSet?: string | undefined;
                } & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                user?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                authSource?: string | undefined;
            } & Record<Exclude<keyof I["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
        } & Record<Exclude<keyof I["connection"], "$type" | "connectionOptions">, never>) | undefined;
        subnetId?: string | undefined;
        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
        secondaryPreferredMode?: boolean | undefined;
        collections?: ({
            databaseName?: string | undefined;
            collectionName?: string | undefined;
        }[] & ({
            databaseName?: string | undefined;
            collectionName?: string | undefined;
        } & {
            databaseName?: string | undefined;
            collectionName?: string | undefined;
        } & Record<Exclude<keyof I["collections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["collections"], "$type" | keyof {
            databaseName?: string | undefined;
            collectionName?: string | undefined;
        }[]>, never>) | undefined;
        excludedCollections?: ({
            databaseName?: string | undefined;
            collectionName?: string | undefined;
        }[] & ({
            databaseName?: string | undefined;
            collectionName?: string | undefined;
        } & {
            databaseName?: string | undefined;
            collectionName?: string | undefined;
        } & Record<Exclude<keyof I["excludedCollections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["excludedCollections"], "$type" | keyof {
            databaseName?: string | undefined;
            collectionName?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "connection" | "subnetId" | "securityGroups" | "secondaryPreferredMode" | "collections" | "excludedCollections">, never>>(object: I): MongoSource;
};
export declare const MongoTarget: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoTarget";
    encode(message: MongoTarget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MongoTarget;
    fromJSON(object: any): MongoTarget;
    toJSON(message: MongoTarget): unknown;
    fromPartial<I extends {
        connection?: {
            connectionOptions?: {
                mdbClusterId?: string | undefined;
                onPremise?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    replicaSet?: string | undefined;
                } | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                authSource?: string | undefined;
            } | undefined;
        } | undefined;
        subnetId?: string | undefined;
        securityGroups?: string[] | undefined;
        database?: string | undefined;
        cleanupPolicy?: CleanupPolicy | undefined;
    } & {
        connection?: ({
            connectionOptions?: {
                mdbClusterId?: string | undefined;
                onPremise?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    replicaSet?: string | undefined;
                } | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                authSource?: string | undefined;
            } | undefined;
        } & {
            connectionOptions?: ({
                mdbClusterId?: string | undefined;
                onPremise?: {
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    replicaSet?: string | undefined;
                } | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                authSource?: string | undefined;
            } & {
                mdbClusterId?: string | undefined;
                onPremise?: ({
                    port?: number | undefined;
                    hosts?: string[] | undefined;
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    replicaSet?: string | undefined;
                } & {
                    port?: number | undefined;
                    hosts?: (string[] & string[] & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                    tlsMode?: ({
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } & {
                        enabled?: ({
                            caCertificate?: string | undefined;
                        } & {
                            caCertificate?: string | undefined;
                        } & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                        disabled?: ({} & {} & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    replicaSet?: string | undefined;
                } & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                user?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                authSource?: string | undefined;
            } & Record<Exclude<keyof I["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
        } & Record<Exclude<keyof I["connection"], "$type" | "connectionOptions">, never>) | undefined;
        subnetId?: string | undefined;
        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
        database?: string | undefined;
        cleanupPolicy?: CleanupPolicy | undefined;
    } & Record<Exclude<keyof I, "$type" | "connection" | "subnetId" | "securityGroups" | "database" | "cleanupPolicy">, never>>(object: I): MongoTarget;
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
