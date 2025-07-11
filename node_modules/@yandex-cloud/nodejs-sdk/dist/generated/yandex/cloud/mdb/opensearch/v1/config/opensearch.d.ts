import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.opensearch.v1.config";
export interface OpenSearchConfig2 {
    $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfig2";
    /** the maximum number of allowed boolean clauses in a query */
    maxClauseCount?: number;
    /** the percentage or absolute value (10%, 512mb) of heap space that is allocated to fielddata */
    fielddataCacheSize: string;
    reindexRemoteWhitelist: string;
}
export interface OpenSearchConfigSet2 {
    $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfigSet2";
    effectiveConfig?: OpenSearchConfig2;
    userConfig?: OpenSearchConfig2;
    defaultConfig?: OpenSearchConfig2;
}
export declare const OpenSearchConfig2: {
    $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfig2";
    encode(message: OpenSearchConfig2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSearchConfig2;
    fromJSON(object: any): OpenSearchConfig2;
    toJSON(message: OpenSearchConfig2): unknown;
    fromPartial<I extends {
        fielddataCacheSize?: string | undefined;
        reindexRemoteWhitelist?: string | undefined;
        maxClauseCount?: number | undefined;
    } & {
        fielddataCacheSize?: string | undefined;
        reindexRemoteWhitelist?: string | undefined;
        maxClauseCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>>(object: I): OpenSearchConfig2;
};
export declare const OpenSearchConfigSet2: {
    $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfigSet2";
    encode(message: OpenSearchConfigSet2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSearchConfigSet2;
    fromJSON(object: any): OpenSearchConfigSet2;
    toJSON(message: OpenSearchConfigSet2): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } | undefined;
        userConfig?: {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } | undefined;
        defaultConfig?: {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } & {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
        userConfig?: ({
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } & {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
        defaultConfig?: ({
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } & {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): OpenSearchConfigSet2;
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
