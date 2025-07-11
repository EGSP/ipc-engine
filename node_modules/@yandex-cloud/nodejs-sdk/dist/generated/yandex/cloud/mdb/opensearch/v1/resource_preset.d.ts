import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.opensearch.v1";
/** A preset of resources for hardware configuration of the OpenSearch hosts. */
export interface ResourcePreset {
    $type: "yandex.cloud.mdb.opensearch.v1.ResourcePreset";
    /** ID of the resource preset. */
    id: string;
    /** IDs of the availability zones where the resource preset is available. */
    zoneIds: string[];
    /** Number of the CPU cores for an OpenSearch host created with the preset. */
    cores: number;
    /** RAM volume for an OpenSearch host created with the preset, in bytes. */
    memory: number;
}
export declare const ResourcePreset: {
    $type: "yandex.cloud.mdb.opensearch.v1.ResourcePreset";
    encode(message: ResourcePreset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourcePreset;
    fromJSON(object: any): ResourcePreset;
    toJSON(message: ResourcePreset): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        zoneIds?: string[] | undefined;
        memory?: number | undefined;
        cores?: number | undefined;
    } & {
        id?: string | undefined;
        zoneIds?: (string[] & string[] & Record<Exclude<keyof I["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
        memory?: number | undefined;
        cores?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "zoneIds" | "memory" | "cores">, never>>(object: I): ResourcePreset;
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
