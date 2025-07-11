import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export declare enum GpuInterconnectType {
    GPU_INTERCONNECT_TYPE_UNSPECIFIED = 0,
    /** INFINIBAND - InfiniBand interconnect. */
    INFINIBAND = 1,
    UNRECOGNIZED = -1
}
export declare function gpuInterconnectTypeFromJSON(object: any): GpuInterconnectType;
export declare function gpuInterconnectTypeToJSON(object: GpuInterconnectType): string;
/** A GPU cluster. For details about the concept, see [documentation](/docs/compute/concepts/gpu-cluster). */
export interface GpuCluster {
    $type: "yandex.cloud.compute.v1.GpuCluster";
    /** ID of GPU cluster. */
    id: string;
    /** ID of the folder that the GPU cluster belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the GPU cluster.
     *
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the GPU cluster. */
    description: string;
    /** GPU cluster labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Status of the GPU cluster. */
    status: GpuCluster_Status;
    /** ID of the availability zone where the GPU cluster resides. */
    zoneId: string;
    /** Type of interconnect used for this GPU cluster. */
    interconnectType: GpuInterconnectType;
}
export declare enum GpuCluster_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - GPU cluster is being created. */
    CREATING = 1,
    /** READY - GPU cluster is ready to use. */
    READY = 2,
    /** ERROR - GPU cluster encountered a problem and cannot operate. */
    ERROR = 3,
    /** DELETING - GPU cluster is being deleted. */
    DELETING = 4,
    UNRECOGNIZED = -1
}
export declare function gpuCluster_StatusFromJSON(object: any): GpuCluster_Status;
export declare function gpuCluster_StatusToJSON(object: GpuCluster_Status): string;
export interface GpuCluster_LabelsEntry {
    $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry";
    key: string;
    value: string;
}
export declare const GpuCluster: {
    $type: "yandex.cloud.compute.v1.GpuCluster";
    encode(message: GpuCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GpuCluster;
    fromJSON(object: any): GpuCluster;
    toJSON(message: GpuCluster): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: GpuCluster_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zoneId?: string | undefined;
        interconnectType?: GpuInterconnectType | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: GpuCluster_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        zoneId?: string | undefined;
        interconnectType?: GpuInterconnectType | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "zoneId" | "interconnectType">, never>>(object: I): GpuCluster;
};
export declare const GpuCluster_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry";
    encode(message: GpuCluster_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GpuCluster_LabelsEntry;
    fromJSON(object: any): GpuCluster_LabelsEntry;
    toJSON(message: GpuCluster_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): GpuCluster_LabelsEntry;
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
