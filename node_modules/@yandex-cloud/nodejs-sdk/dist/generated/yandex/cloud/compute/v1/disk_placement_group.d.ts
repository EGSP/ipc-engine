import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface DiskPlacementGroup {
    $type: "yandex.cloud.compute.v1.DiskPlacementGroup";
    /** ID of the placement group. */
    id: string;
    /** ID of the folder that the placement group belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /**
     * Name of the placement group.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the placement group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** ID of the availability zone where the placement group resides. */
    zoneId: string;
    /** Current status of the placement group */
    status: DiskPlacementGroup_Status;
    /** Distribute disks over distinct failure domains. */
    spreadPlacementStrategy?: DiskSpreadPlacementStrategy | undefined;
    /** Distribute disks over partitions. */
    partitionPlacementStrategy?: DiskPartitionPlacementStrategy | undefined;
}
export declare enum DiskPlacementGroup_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    DELETING = 4,
    UNRECOGNIZED = -1
}
export declare function diskPlacementGroup_StatusFromJSON(object: any): DiskPlacementGroup_Status;
export declare function diskPlacementGroup_StatusToJSON(object: DiskPlacementGroup_Status): string;
export interface DiskPlacementGroup_LabelsEntry {
    $type: "yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry";
    key: string;
    value: string;
}
export interface DiskSpreadPlacementStrategy {
    $type: "yandex.cloud.compute.v1.DiskSpreadPlacementStrategy";
}
export interface DiskPartitionPlacementStrategy {
    $type: "yandex.cloud.compute.v1.DiskPartitionPlacementStrategy";
    partitions: number;
}
export declare const DiskPlacementGroup: {
    $type: "yandex.cloud.compute.v1.DiskPlacementGroup";
    encode(message: DiskPlacementGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DiskPlacementGroup;
    fromJSON(object: any): DiskPlacementGroup;
    toJSON(message: DiskPlacementGroup): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: DiskPlacementGroup_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zoneId?: string | undefined;
        spreadPlacementStrategy?: {} | undefined;
        partitionPlacementStrategy?: {
            partitions?: number | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: DiskPlacementGroup_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        zoneId?: string | undefined;
        spreadPlacementStrategy?: ({} & {} & Record<Exclude<keyof I["spreadPlacementStrategy"], "$type">, never>) | undefined;
        partitionPlacementStrategy?: ({
            partitions?: number | undefined;
        } & {
            partitions?: number | undefined;
        } & Record<Exclude<keyof I["partitionPlacementStrategy"], "$type" | "partitions">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "zoneId" | "spreadPlacementStrategy" | "partitionPlacementStrategy">, never>>(object: I): DiskPlacementGroup;
};
export declare const DiskPlacementGroup_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry";
    encode(message: DiskPlacementGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DiskPlacementGroup_LabelsEntry;
    fromJSON(object: any): DiskPlacementGroup_LabelsEntry;
    toJSON(message: DiskPlacementGroup_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): DiskPlacementGroup_LabelsEntry;
};
export declare const DiskSpreadPlacementStrategy: {
    $type: "yandex.cloud.compute.v1.DiskSpreadPlacementStrategy";
    encode(_: DiskSpreadPlacementStrategy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DiskSpreadPlacementStrategy;
    fromJSON(_: any): DiskSpreadPlacementStrategy;
    toJSON(_: DiskSpreadPlacementStrategy): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): DiskSpreadPlacementStrategy;
};
export declare const DiskPartitionPlacementStrategy: {
    $type: "yandex.cloud.compute.v1.DiskPartitionPlacementStrategy";
    encode(message: DiskPartitionPlacementStrategy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DiskPartitionPlacementStrategy;
    fromJSON(object: any): DiskPartitionPlacementStrategy;
    toJSON(message: DiskPartitionPlacementStrategy): unknown;
    fromPartial<I extends {
        partitions?: number | undefined;
    } & {
        partitions?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "partitions">, never>>(object: I): DiskPartitionPlacementStrategy;
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
