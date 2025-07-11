import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.greenplum.v1";
/** A preset of resources for hardware configuration of Greenplum® hosts. */
export interface ResourcePreset {
    $type: "yandex.cloud.mdb.greenplum.v1.ResourcePreset";
    /** ID of the resource preset. */
    id: string;
    /** IDs of availability zones where the resource preset is available. */
    zoneIds: string[];
    /** IDs of availability disk types available in the resource preset. */
    diskTypeIds: string[];
    /** Number of CPU cores for a Greenplum® host created with the preset. */
    cores: number;
    /** RAM volume for a Greenplum® host created with the preset, in bytes. */
    memory: number;
    /** Host type. */
    type: ResourcePreset_Type;
    /** The number of hosts must be divisible by [host_count_divider]. */
    hostCountDivider: number;
    /** Maximum number of segments in segment host. */
    maxSegmentInHostCount: number;
}
export declare enum ResourcePreset_Type {
    TYPE_UNSPECIFIED = 0,
    /** MASTER - Greenplum® master host. */
    MASTER = 1,
    /** SEGMENT - Greenplum® segment host. */
    SEGMENT = 2,
    UNRECOGNIZED = -1
}
export declare function resourcePreset_TypeFromJSON(object: any): ResourcePreset_Type;
export declare function resourcePreset_TypeToJSON(object: ResourcePreset_Type): string;
export declare const ResourcePreset: {
    $type: "yandex.cloud.mdb.greenplum.v1.ResourcePreset";
    encode(message: ResourcePreset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourcePreset;
    fromJSON(object: any): ResourcePreset;
    toJSON(message: ResourcePreset): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        type?: ResourcePreset_Type | undefined;
        zoneIds?: string[] | undefined;
        memory?: number | undefined;
        cores?: number | undefined;
        diskTypeIds?: string[] | undefined;
        hostCountDivider?: number | undefined;
        maxSegmentInHostCount?: number | undefined;
    } & {
        id?: string | undefined;
        type?: ResourcePreset_Type | undefined;
        zoneIds?: (string[] & string[] & Record<Exclude<keyof I["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
        memory?: number | undefined;
        cores?: number | undefined;
        diskTypeIds?: (string[] & string[] & Record<Exclude<keyof I["diskTypeIds"], "$type" | keyof string[]>, never>) | undefined;
        hostCountDivider?: number | undefined;
        maxSegmentInHostCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "type" | "zoneIds" | "memory" | "cores" | "diskTypeIds" | "hostCountDivider" | "maxSegmentInHostCount">, never>>(object: I): ResourcePreset;
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
