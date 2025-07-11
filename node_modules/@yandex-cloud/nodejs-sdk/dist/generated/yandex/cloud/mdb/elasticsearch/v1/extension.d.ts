import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
export interface Extension {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Extension";
    /** Name of the extension. */
    name: string;
    /** Unique ID of the extension. */
    id: string;
    /** ID of the Elasticsearch cluster the extension belongs to. */
    clusterId: string;
    /** Version of the extension. */
    version: number;
    /** The flag shows whether the extension is active. */
    active: boolean;
}
export interface ExtensionSpec {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ExtensionSpec";
    /** Name of the extension. */
    name: string;
    /** URI of the zip archive to create the new extension from. Currently only supports links that are stored in Object Storage. */
    uri: string;
    /** The flag shows whether to create the extension in disabled state. */
    disabled: boolean;
}
export declare const Extension: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Extension";
    encode(message: Extension, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Extension;
    fromJSON(object: any): Extension;
    toJSON(message: Extension): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        active?: boolean | undefined;
        version?: number | undefined;
        clusterId?: string | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        active?: boolean | undefined;
        version?: number | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "active" | "version" | "clusterId">, never>>(object: I): Extension;
};
export declare const ExtensionSpec: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ExtensionSpec";
    encode(message: ExtensionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExtensionSpec;
    fromJSON(object: any): ExtensionSpec;
    toJSON(message: ExtensionSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        uri?: string | undefined;
        disabled?: boolean | undefined;
    } & {
        name?: string | undefined;
        uri?: string | undefined;
        disabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "uri" | "disabled">, never>>(object: I): ExtensionSpec;
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
