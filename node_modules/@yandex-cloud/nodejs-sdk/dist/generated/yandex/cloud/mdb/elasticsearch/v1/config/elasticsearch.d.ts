import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1.config";
/**
 * Elasticsearch 7.x supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html).
 *
 * Any options that are not listed here are not supported.
 */
export interface ElasticsearchConfig7 {
    $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7";
    /**
     * The maximum number of clauses a boolean query can contain.
     *
     * The limit is in place to prevent searches from becoming too large and taking up too much CPU and memory.
     * It affects not only Elasticsearch's `bool` query, but many other queries that are implicitly converted to `bool` query by Elastcsearch.
     *
     * Default value: `1024`.
     *
     * See in-depth description in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-settings.html).
     */
    maxClauseCount?: number;
    /**
     * The maximum percentage or absolute value (10%, 512mb) of heap space that is allocated to field data cache.
     *
     * All the field values that are placed in this cache, get loaded to memory in order to provide fast document based access to those values.
     * Building the field data cache for a field can be an expensive operations, so its recommended to have enough memory for this cache, and to keep it loaded.
     *
     * Default value: unbounded.
     *
     * See in-depth description in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-fielddata.html).
     */
    fielddataCacheSize: string;
    /**
     * Remote hosts for reindex have to be explicitly allowed in elasticsearch.yml using the reindex.remote.whitelist property.
     * It can be set to a comma delimited list of allowed remote host and port combinations.
     * Scheme is ignored, only the host and port are used.
     */
    reindexRemoteWhitelist: string;
    /**
     * List of paths to PEM encoded certificate files that should be trusted.
     *
     * See in-depth description in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html#reindex-ssl)
     */
    reindexSslCaPath: string;
}
/** Elasticsearch 7.x data node configuration. */
export interface ElasticsearchConfigSet7 {
    $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7";
    /** Effective settings for an Elasticsearch cluster (a combination of settings defined in [user_config] and [default_config]). */
    effectiveConfig?: ElasticsearchConfig7;
    /** User-defined settings for an Elasticsearch cluster. */
    userConfig?: ElasticsearchConfig7;
    /** Default settings for an Elasticsearch cluster. */
    defaultConfig?: ElasticsearchConfig7;
}
export declare const ElasticsearchConfig7: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7";
    encode(message: ElasticsearchConfig7, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ElasticsearchConfig7;
    fromJSON(object: any): ElasticsearchConfig7;
    toJSON(message: ElasticsearchConfig7): unknown;
    fromPartial<I extends {
        fielddataCacheSize?: string | undefined;
        reindexRemoteWhitelist?: string | undefined;
        reindexSslCaPath?: string | undefined;
        maxClauseCount?: number | undefined;
    } & {
        fielddataCacheSize?: string | undefined;
        reindexRemoteWhitelist?: string | undefined;
        reindexSslCaPath?: string | undefined;
        maxClauseCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>>(object: I): ElasticsearchConfig7;
};
export declare const ElasticsearchConfigSet7: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7";
    encode(message: ElasticsearchConfigSet7, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ElasticsearchConfigSet7;
    fromJSON(object: any): ElasticsearchConfigSet7;
    toJSON(message: ElasticsearchConfigSet7): unknown;
    fromPartial<I extends {
        effectiveConfig?: {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
        } | undefined;
        userConfig?: {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
        } | undefined;
        defaultConfig?: {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
        } | undefined;
    } & {
        effectiveConfig?: ({
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
        } & {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
        } & Record<Exclude<keyof I["effectiveConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
        userConfig?: ({
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
        } & {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
        } & Record<Exclude<keyof I["userConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
        defaultConfig?: ({
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
        } & {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
        } & Record<Exclude<keyof I["defaultConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>>(object: I): ElasticsearchConfigSet7;
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
