import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.compute.v1";
/**
 * Represents host resources.
 * Note: Platform can use hosts with different number of memory and cores.
 * TODO: Do we need sockets here?
 */
export interface HostType {
    $type: "yandex.cloud.compute.v1.HostType";
    /** Unique type identifier. */
    id: string;
    /** Total number of cores available for instances. */
    cores: number;
    /** Ammount of memory available for instances. */
    memory: number;
    /** Number of local disks available for instances */
    disks: number;
    /** Size of each local disk */
    diskSize: number;
}
export declare const HostType: {
    $type: "yandex.cloud.compute.v1.HostType";
    encode(message: HostType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostType;
    fromJSON(object: any): HostType;
    toJSON(message: HostType): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        disks?: number | undefined;
        memory?: number | undefined;
        cores?: number | undefined;
        diskSize?: number | undefined;
    } & {
        id?: string | undefined;
        disks?: number | undefined;
        memory?: number | undefined;
        cores?: number | undefined;
        diskSize?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "disks" | "memory" | "cores" | "diskSize">, never>>(object: I): HostType;
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
