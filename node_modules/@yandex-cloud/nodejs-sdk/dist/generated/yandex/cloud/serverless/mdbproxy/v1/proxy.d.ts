import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.serverless.mdbproxy.v1";
export interface Proxy {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy";
    /** ID of the proxy. */
    id: string;
    /** ID of the folder that the proxy belongs to. */
    folderId: string;
    /** Creation timestamp for the proxy. */
    createdAt?: Date;
    /** Name of the proxy. */
    name: string;
    /** Description of the proxy. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** MDB specific settings. */
    target?: Target;
}
export interface Proxy_LabelsEntry {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy.LabelsEntry";
    key: string;
    value: string;
}
export interface Target {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target";
    /** Clickhouse settings for proxy. */
    clickhouse?: Target_ClickHouse | undefined;
    /** PostgreSQL settings for proxy. */
    postgresql?: Target_PostgreSQL | undefined;
}
export interface Target_PostgreSQL {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.PostgreSQL";
    /** Cluster identifier for postgresql. */
    clusterId: string;
    /** PostgreSQL user. */
    user: string;
    /** PostgreSQL password, input only field. */
    password: string;
    /** PostgreSQL database name. */
    db: string;
    /** PostgreSQL proxy-host for connection, output only field. */
    endpoint: string;
}
export interface Target_ClickHouse {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.ClickHouse";
    /** Cluster identifier for clickhouse. */
    clusterId: string;
    /** Clickhouse user. */
    user: string;
    /** Clickhouse password, input only field. */
    password: string;
    /** Clickhouse database name. */
    db: string;
    /** Clickhouse proxy-host for connection, output only field. */
    endpoint: string;
}
export declare const Proxy: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy";
    encode(message: Proxy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proxy;
    fromJSON(object: any): Proxy;
    toJSON(message: Proxy): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        target?: {
            clickhouse?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
            postgresql?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        target?: ({
            clickhouse?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
            postgresql?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
        } & {
            clickhouse?: ({
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & Record<Exclude<keyof I["target"]["clickhouse"], "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>) | undefined;
            postgresql?: ({
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & Record<Exclude<keyof I["target"]["postgresql"], "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>) | undefined;
        } & Record<Exclude<keyof I["target"], "$type" | "clickhouse" | "postgresql">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "target">, never>>(object: I): Proxy;
};
export declare const Proxy_LabelsEntry: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy.LabelsEntry";
    encode(message: Proxy_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proxy_LabelsEntry;
    fromJSON(object: any): Proxy_LabelsEntry;
    toJSON(message: Proxy_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Proxy_LabelsEntry;
};
export declare const Target: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target";
    encode(message: Target, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Target;
    fromJSON(object: any): Target;
    toJSON(message: Target): unknown;
    fromPartial<I extends {
        clickhouse?: {
            clusterId?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            db?: string | undefined;
            endpoint?: string | undefined;
        } | undefined;
        postgresql?: {
            clusterId?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            db?: string | undefined;
            endpoint?: string | undefined;
        } | undefined;
    } & {
        clickhouse?: ({
            clusterId?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            db?: string | undefined;
            endpoint?: string | undefined;
        } & {
            clusterId?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            db?: string | undefined;
            endpoint?: string | undefined;
        } & Record<Exclude<keyof I["clickhouse"], "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>) | undefined;
        postgresql?: ({
            clusterId?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            db?: string | undefined;
            endpoint?: string | undefined;
        } & {
            clusterId?: string | undefined;
            user?: string | undefined;
            password?: string | undefined;
            db?: string | undefined;
            endpoint?: string | undefined;
        } & Record<Exclude<keyof I["postgresql"], "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clickhouse" | "postgresql">, never>>(object: I): Target;
};
export declare const Target_PostgreSQL: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.PostgreSQL";
    encode(message: Target_PostgreSQL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Target_PostgreSQL;
    fromJSON(object: any): Target_PostgreSQL;
    toJSON(message: Target_PostgreSQL): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        user?: string | undefined;
        password?: string | undefined;
        db?: string | undefined;
        endpoint?: string | undefined;
    } & {
        clusterId?: string | undefined;
        user?: string | undefined;
        password?: string | undefined;
        db?: string | undefined;
        endpoint?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>>(object: I): Target_PostgreSQL;
};
export declare const Target_ClickHouse: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.ClickHouse";
    encode(message: Target_ClickHouse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Target_ClickHouse;
    fromJSON(object: any): Target_ClickHouse;
    toJSON(message: Target_ClickHouse): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        user?: string | undefined;
        password?: string | undefined;
        db?: string | undefined;
        endpoint?: string | undefined;
    } & {
        clusterId?: string | undefined;
        user?: string | undefined;
        password?: string | undefined;
        db?: string | undefined;
        endpoint?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>>(object: I): Target_ClickHouse;
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
