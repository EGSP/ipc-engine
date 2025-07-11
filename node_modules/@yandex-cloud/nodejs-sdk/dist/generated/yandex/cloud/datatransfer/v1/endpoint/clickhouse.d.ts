import _m0 from "protobufjs/minimal";
import { TLSMode, Secret, ColumnValue, AltName } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";
import { Empty } from "../../../../../google/protobuf/empty";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
export declare enum ClickhouseCleanupPolicy {
    CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED = 0,
    CLICKHOUSE_CLEANUP_POLICY_DISABLED = 1,
    CLICKHOUSE_CLEANUP_POLICY_DROP = 2,
    CLICKHOUSE_CLEANUP_POLICY_TRUNCATE = 3,
    UNRECOGNIZED = -1
}
export declare function clickhouseCleanupPolicyFromJSON(object: any): ClickhouseCleanupPolicy;
export declare function clickhouseCleanupPolicyToJSON(object: ClickhouseCleanupPolicy): string;
export interface ClickhouseShard {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseShard";
    name: string;
    hosts: string[];
}
export interface OnPremiseClickhouse {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseClickhouse";
    shards: ClickhouseShard[];
    httpPort: number;
    nativePort: number;
    tlsMode?: TLSMode;
}
export interface ClickhouseConnectionOptions {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnectionOptions";
    mdbClusterId: string | undefined;
    onPremise?: OnPremiseClickhouse | undefined;
    /** Database */
    database: string;
    user: string;
    password?: Secret;
}
export interface ClickhouseConnection {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnection";
    connectionOptions?: ClickhouseConnectionOptions | undefined;
}
export interface ClickhouseSharding {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding";
    columnValueHash?: ClickhouseSharding_ColumnValueHash | undefined;
    customMapping?: ClickhouseSharding_ColumnValueMapping | undefined;
    transferId?: Empty | undefined;
}
export interface ClickhouseSharding_ColumnValueHash {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueHash";
    columnName: string;
}
export interface ClickhouseSharding_ColumnValueMapping {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping";
    columnName: string;
    mapping: ClickhouseSharding_ColumnValueMapping_ValueToShard[];
}
export interface ClickhouseSharding_ColumnValueMapping_ValueToShard {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping.ValueToShard";
    columnValue?: ColumnValue;
    shardName: string;
}
export interface ClickhouseSource {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSource";
    connection?: ClickhouseConnection;
    subnetId: string;
    securityGroups: string[];
    /**
     * While list of tables for replication. If none or empty list is presented - will
     * replicate all tables. Can contain * patterns.
     */
    includeTables: string[];
    /**
     * Exclude list of tables for replication. If none or empty list is presented -
     * will replicate all tables. Can contain * patterns.
     */
    excludeTables: string[];
}
export interface ClickhouseTarget {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseTarget";
    connection?: ClickhouseConnection;
    subnetId: string;
    securityGroups: string[];
    clickhouseClusterName: string;
    /** Alternative table names in target */
    altNames: AltName[];
    sharding?: ClickhouseSharding;
    cleanupPolicy: ClickhouseCleanupPolicy;
}
export declare const ClickhouseShard: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseShard";
    encode(message: ClickhouseShard, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseShard;
    fromJSON(object: any): ClickhouseShard;
    toJSON(message: ClickhouseShard): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        hosts?: string[] | undefined;
    } & {
        name?: string | undefined;
        hosts?: (string[] & string[] & Record<Exclude<keyof I["hosts"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "hosts">, never>>(object: I): ClickhouseShard;
};
export declare const OnPremiseClickhouse: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseClickhouse";
    encode(message: OnPremiseClickhouse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OnPremiseClickhouse;
    fromJSON(object: any): OnPremiseClickhouse;
    toJSON(message: OnPremiseClickhouse): unknown;
    fromPartial<I extends {
        tlsMode?: {
            enabled?: {
                caCertificate?: string | undefined;
            } | undefined;
            disabled?: {} | undefined;
        } | undefined;
        httpPort?: number | undefined;
        nativePort?: number | undefined;
        shards?: {
            name?: string | undefined;
            hosts?: string[] | undefined;
        }[] | undefined;
    } & {
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
        httpPort?: number | undefined;
        nativePort?: number | undefined;
        shards?: ({
            name?: string | undefined;
            hosts?: string[] | undefined;
        }[] & ({
            name?: string | undefined;
            hosts?: string[] | undefined;
        } & {
            name?: string | undefined;
            hosts?: (string[] & string[] & Record<Exclude<keyof I["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["shards"], "$type" | keyof {
            name?: string | undefined;
            hosts?: string[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>>(object: I): OnPremiseClickhouse;
};
export declare const ClickhouseConnectionOptions: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnectionOptions";
    encode(message: ClickhouseConnectionOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConnectionOptions;
    fromJSON(object: any): ClickhouseConnectionOptions;
    toJSON(message: ClickhouseConnectionOptions): unknown;
    fromPartial<I extends {
        mdbClusterId?: string | undefined;
        onPremise?: {
            tlsMode?: {
                enabled?: {
                    caCertificate?: string | undefined;
                } | undefined;
                disabled?: {} | undefined;
            } | undefined;
            httpPort?: number | undefined;
            nativePort?: number | undefined;
            shards?: {
                name?: string | undefined;
                hosts?: string[] | undefined;
            }[] | undefined;
        } | undefined;
        database?: string | undefined;
        user?: string | undefined;
        password?: {
            raw?: string | undefined;
        } | undefined;
    } & {
        mdbClusterId?: string | undefined;
        onPremise?: ({
            tlsMode?: {
                enabled?: {
                    caCertificate?: string | undefined;
                } | undefined;
                disabled?: {} | undefined;
            } | undefined;
            httpPort?: number | undefined;
            nativePort?: number | undefined;
            shards?: {
                name?: string | undefined;
                hosts?: string[] | undefined;
            }[] | undefined;
        } & {
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
            httpPort?: number | undefined;
            nativePort?: number | undefined;
            shards?: ({
                name?: string | undefined;
                hosts?: string[] | undefined;
            }[] & ({
                name?: string | undefined;
                hosts?: string[] | undefined;
            } & {
                name?: string | undefined;
                hosts?: (string[] & string[] & Record<Exclude<keyof I["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["onPremise"]["shards"], "$type" | keyof {
                name?: string | undefined;
                hosts?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
        database?: string | undefined;
        user?: string | undefined;
        password?: ({
            raw?: string | undefined;
        } & {
            raw?: string | undefined;
        } & Record<Exclude<keyof I["password"], "$type" | "raw">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>>(object: I): ClickhouseConnectionOptions;
};
export declare const ClickhouseConnection: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnection";
    encode(message: ClickhouseConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConnection;
    fromJSON(object: any): ClickhouseConnection;
    toJSON(message: ClickhouseConnection): unknown;
    fromPartial<I extends {
        connectionOptions?: {
            mdbClusterId?: string | undefined;
            onPremise?: {
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                httpPort?: number | undefined;
                nativePort?: number | undefined;
                shards?: {
                    name?: string | undefined;
                    hosts?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            database?: string | undefined;
            user?: string | undefined;
            password?: {
                raw?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        connectionOptions?: ({
            mdbClusterId?: string | undefined;
            onPremise?: {
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                httpPort?: number | undefined;
                nativePort?: number | undefined;
                shards?: {
                    name?: string | undefined;
                    hosts?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            database?: string | undefined;
            user?: string | undefined;
            password?: {
                raw?: string | undefined;
            } | undefined;
        } & {
            mdbClusterId?: string | undefined;
            onPremise?: ({
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                httpPort?: number | undefined;
                nativePort?: number | undefined;
                shards?: {
                    name?: string | undefined;
                    hosts?: string[] | undefined;
                }[] | undefined;
            } & {
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
                httpPort?: number | undefined;
                nativePort?: number | undefined;
                shards?: ({
                    name?: string | undefined;
                    hosts?: string[] | undefined;
                }[] & ({
                    name?: string | undefined;
                    hosts?: string[] | undefined;
                } & {
                    name?: string | undefined;
                    hosts?: (string[] & string[] & Record<Exclude<keyof I["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                    name?: string | undefined;
                    hosts?: string[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
            database?: string | undefined;
            user?: string | undefined;
            password?: ({
                raw?: string | undefined;
            } & {
                raw?: string | undefined;
            } & Record<Exclude<keyof I["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
        } & Record<Exclude<keyof I["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "connectionOptions">, never>>(object: I): ClickhouseConnection;
};
export declare const ClickhouseSharding: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding";
    encode(message: ClickhouseSharding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseSharding;
    fromJSON(object: any): ClickhouseSharding;
    toJSON(message: ClickhouseSharding): unknown;
    fromPartial<I extends {
        columnValueHash?: {
            columnName?: string | undefined;
        } | undefined;
        customMapping?: {
            columnName?: string | undefined;
            mapping?: {
                columnValue?: {
                    stringValue?: string | undefined;
                } | undefined;
                shardName?: string | undefined;
            }[] | undefined;
        } | undefined;
        transferId?: {} | undefined;
    } & {
        columnValueHash?: ({
            columnName?: string | undefined;
        } & {
            columnName?: string | undefined;
        } & Record<Exclude<keyof I["columnValueHash"], "$type" | "columnName">, never>) | undefined;
        customMapping?: ({
            columnName?: string | undefined;
            mapping?: {
                columnValue?: {
                    stringValue?: string | undefined;
                } | undefined;
                shardName?: string | undefined;
            }[] | undefined;
        } & {
            columnName?: string | undefined;
            mapping?: ({
                columnValue?: {
                    stringValue?: string | undefined;
                } | undefined;
                shardName?: string | undefined;
            }[] & ({
                columnValue?: {
                    stringValue?: string | undefined;
                } | undefined;
                shardName?: string | undefined;
            } & {
                columnValue?: ({
                    stringValue?: string | undefined;
                } & {
                    stringValue?: string | undefined;
                } & Record<Exclude<keyof I["customMapping"]["mapping"][number]["columnValue"], "$type" | "stringValue">, never>) | undefined;
                shardName?: string | undefined;
            } & Record<Exclude<keyof I["customMapping"]["mapping"][number], "$type" | "columnValue" | "shardName">, never>)[] & Record<Exclude<keyof I["customMapping"]["mapping"], "$type" | keyof {
                columnValue?: {
                    stringValue?: string | undefined;
                } | undefined;
                shardName?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["customMapping"], "$type" | "columnName" | "mapping">, never>) | undefined;
        transferId?: ({} & {} & Record<Exclude<keyof I["transferId"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "columnValueHash" | "customMapping" | "transferId">, never>>(object: I): ClickhouseSharding;
};
export declare const ClickhouseSharding_ColumnValueHash: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueHash";
    encode(message: ClickhouseSharding_ColumnValueHash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseSharding_ColumnValueHash;
    fromJSON(object: any): ClickhouseSharding_ColumnValueHash;
    toJSON(message: ClickhouseSharding_ColumnValueHash): unknown;
    fromPartial<I extends {
        columnName?: string | undefined;
    } & {
        columnName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "columnName">, never>>(object: I): ClickhouseSharding_ColumnValueHash;
};
export declare const ClickhouseSharding_ColumnValueMapping: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping";
    encode(message: ClickhouseSharding_ColumnValueMapping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseSharding_ColumnValueMapping;
    fromJSON(object: any): ClickhouseSharding_ColumnValueMapping;
    toJSON(message: ClickhouseSharding_ColumnValueMapping): unknown;
    fromPartial<I extends {
        columnName?: string | undefined;
        mapping?: {
            columnValue?: {
                stringValue?: string | undefined;
            } | undefined;
            shardName?: string | undefined;
        }[] | undefined;
    } & {
        columnName?: string | undefined;
        mapping?: ({
            columnValue?: {
                stringValue?: string | undefined;
            } | undefined;
            shardName?: string | undefined;
        }[] & ({
            columnValue?: {
                stringValue?: string | undefined;
            } | undefined;
            shardName?: string | undefined;
        } & {
            columnValue?: ({
                stringValue?: string | undefined;
            } & {
                stringValue?: string | undefined;
            } & Record<Exclude<keyof I["mapping"][number]["columnValue"], "$type" | "stringValue">, never>) | undefined;
            shardName?: string | undefined;
        } & Record<Exclude<keyof I["mapping"][number], "$type" | "columnValue" | "shardName">, never>)[] & Record<Exclude<keyof I["mapping"], "$type" | keyof {
            columnValue?: {
                stringValue?: string | undefined;
            } | undefined;
            shardName?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "columnName" | "mapping">, never>>(object: I): ClickhouseSharding_ColumnValueMapping;
};
export declare const ClickhouseSharding_ColumnValueMapping_ValueToShard: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping.ValueToShard";
    encode(message: ClickhouseSharding_ColumnValueMapping_ValueToShard, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseSharding_ColumnValueMapping_ValueToShard;
    fromJSON(object: any): ClickhouseSharding_ColumnValueMapping_ValueToShard;
    toJSON(message: ClickhouseSharding_ColumnValueMapping_ValueToShard): unknown;
    fromPartial<I extends {
        columnValue?: {
            stringValue?: string | undefined;
        } | undefined;
        shardName?: string | undefined;
    } & {
        columnValue?: ({
            stringValue?: string | undefined;
        } & {
            stringValue?: string | undefined;
        } & Record<Exclude<keyof I["columnValue"], "$type" | "stringValue">, never>) | undefined;
        shardName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "columnValue" | "shardName">, never>>(object: I): ClickhouseSharding_ColumnValueMapping_ValueToShard;
};
export declare const ClickhouseSource: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSource";
    encode(message: ClickhouseSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseSource;
    fromJSON(object: any): ClickhouseSource;
    toJSON(message: ClickhouseSource): unknown;
    fromPartial<I extends {
        connection?: {
            connectionOptions?: {
                mdbClusterId?: string | undefined;
                onPremise?: {
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    httpPort?: number | undefined;
                    nativePort?: number | undefined;
                    shards?: {
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        subnetId?: string | undefined;
        securityGroups?: string[] | undefined;
        includeTables?: string[] | undefined;
        excludeTables?: string[] | undefined;
    } & {
        connection?: ({
            connectionOptions?: {
                mdbClusterId?: string | undefined;
                onPremise?: {
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    httpPort?: number | undefined;
                    nativePort?: number | undefined;
                    shards?: {
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            connectionOptions?: ({
                mdbClusterId?: string | undefined;
                onPremise?: {
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    httpPort?: number | undefined;
                    nativePort?: number | undefined;
                    shards?: {
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
            } & {
                mdbClusterId?: string | undefined;
                onPremise?: ({
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    httpPort?: number | undefined;
                    nativePort?: number | undefined;
                    shards?: {
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[] | undefined;
                } & {
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
                    httpPort?: number | undefined;
                    nativePort?: number | undefined;
                    shards?: ({
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[] & ({
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    } & {
                        name?: string | undefined;
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
            } & Record<Exclude<keyof I["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
        } & Record<Exclude<keyof I["connection"], "$type" | "connectionOptions">, never>) | undefined;
        subnetId?: string | undefined;
        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
        includeTables?: (string[] & string[] & Record<Exclude<keyof I["includeTables"], "$type" | keyof string[]>, never>) | undefined;
        excludeTables?: (string[] & string[] & Record<Exclude<keyof I["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "connection" | "subnetId" | "securityGroups" | "includeTables" | "excludeTables">, never>>(object: I): ClickhouseSource;
};
export declare const ClickhouseTarget: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseTarget";
    encode(message: ClickhouseTarget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseTarget;
    fromJSON(object: any): ClickhouseTarget;
    toJSON(message: ClickhouseTarget): unknown;
    fromPartial<I extends {
        connection?: {
            connectionOptions?: {
                mdbClusterId?: string | undefined;
                onPremise?: {
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    httpPort?: number | undefined;
                    nativePort?: number | undefined;
                    shards?: {
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        subnetId?: string | undefined;
        securityGroups?: string[] | undefined;
        cleanupPolicy?: ClickhouseCleanupPolicy | undefined;
        clickhouseClusterName?: string | undefined;
        altNames?: {
            fromName?: string | undefined;
            toName?: string | undefined;
        }[] | undefined;
        sharding?: {
            columnValueHash?: {
                columnName?: string | undefined;
            } | undefined;
            customMapping?: {
                columnName?: string | undefined;
                mapping?: {
                    columnValue?: {
                        stringValue?: string | undefined;
                    } | undefined;
                    shardName?: string | undefined;
                }[] | undefined;
            } | undefined;
            transferId?: {} | undefined;
        } | undefined;
    } & {
        connection?: ({
            connectionOptions?: {
                mdbClusterId?: string | undefined;
                onPremise?: {
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    httpPort?: number | undefined;
                    nativePort?: number | undefined;
                    shards?: {
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            connectionOptions?: ({
                mdbClusterId?: string | undefined;
                onPremise?: {
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    httpPort?: number | undefined;
                    nativePort?: number | undefined;
                    shards?: {
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
            } & {
                mdbClusterId?: string | undefined;
                onPremise?: ({
                    tlsMode?: {
                        enabled?: {
                            caCertificate?: string | undefined;
                        } | undefined;
                        disabled?: {} | undefined;
                    } | undefined;
                    httpPort?: number | undefined;
                    nativePort?: number | undefined;
                    shards?: {
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[] | undefined;
                } & {
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
                    httpPort?: number | undefined;
                    nativePort?: number | undefined;
                    shards?: ({
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[] & ({
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    } & {
                        name?: string | undefined;
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                        name?: string | undefined;
                        hosts?: string[] | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
            } & Record<Exclude<keyof I["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
        } & Record<Exclude<keyof I["connection"], "$type" | "connectionOptions">, never>) | undefined;
        subnetId?: string | undefined;
        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
        cleanupPolicy?: ClickhouseCleanupPolicy | undefined;
        clickhouseClusterName?: string | undefined;
        altNames?: ({
            fromName?: string | undefined;
            toName?: string | undefined;
        }[] & ({
            fromName?: string | undefined;
            toName?: string | undefined;
        } & {
            fromName?: string | undefined;
            toName?: string | undefined;
        } & Record<Exclude<keyof I["altNames"][number], "$type" | "fromName" | "toName">, never>)[] & Record<Exclude<keyof I["altNames"], "$type" | keyof {
            fromName?: string | undefined;
            toName?: string | undefined;
        }[]>, never>) | undefined;
        sharding?: ({
            columnValueHash?: {
                columnName?: string | undefined;
            } | undefined;
            customMapping?: {
                columnName?: string | undefined;
                mapping?: {
                    columnValue?: {
                        stringValue?: string | undefined;
                    } | undefined;
                    shardName?: string | undefined;
                }[] | undefined;
            } | undefined;
            transferId?: {} | undefined;
        } & {
            columnValueHash?: ({
                columnName?: string | undefined;
            } & {
                columnName?: string | undefined;
            } & Record<Exclude<keyof I["sharding"]["columnValueHash"], "$type" | "columnName">, never>) | undefined;
            customMapping?: ({
                columnName?: string | undefined;
                mapping?: {
                    columnValue?: {
                        stringValue?: string | undefined;
                    } | undefined;
                    shardName?: string | undefined;
                }[] | undefined;
            } & {
                columnName?: string | undefined;
                mapping?: ({
                    columnValue?: {
                        stringValue?: string | undefined;
                    } | undefined;
                    shardName?: string | undefined;
                }[] & ({
                    columnValue?: {
                        stringValue?: string | undefined;
                    } | undefined;
                    shardName?: string | undefined;
                } & {
                    columnValue?: ({
                        stringValue?: string | undefined;
                    } & {
                        stringValue?: string | undefined;
                    } & Record<Exclude<keyof I["sharding"]["customMapping"]["mapping"][number]["columnValue"], "$type" | "stringValue">, never>) | undefined;
                    shardName?: string | undefined;
                } & Record<Exclude<keyof I["sharding"]["customMapping"]["mapping"][number], "$type" | "columnValue" | "shardName">, never>)[] & Record<Exclude<keyof I["sharding"]["customMapping"]["mapping"], "$type" | keyof {
                    columnValue?: {
                        stringValue?: string | undefined;
                    } | undefined;
                    shardName?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["sharding"]["customMapping"], "$type" | "columnName" | "mapping">, never>) | undefined;
            transferId?: ({} & {} & Record<Exclude<keyof I["sharding"]["transferId"], "$type">, never>) | undefined;
        } & Record<Exclude<keyof I["sharding"], "$type" | "columnValueHash" | "customMapping" | "transferId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "connection" | "subnetId" | "securityGroups" | "cleanupPolicy" | "clickhouseClusterName" | "altNames" | "sharding">, never>>(object: I): ClickhouseTarget;
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
