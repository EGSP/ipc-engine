import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
export declare enum Health {
    /** HEALTH_UNKNOWN - Object is in unknown state (we have no data). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Object is alive and well (for example, all hosts of the cluster are alive). */
    ALIVE = 1,
    /** DEAD - Object is inoperable (it cannot perform any of its essential functions). */
    DEAD = 2,
    /** DEGRADED - Object is partially alive (it can perform some of its essential functions). */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function healthFromJSON(object: any): Health;
export declare function healthToJSON(object: Health): string;
export interface Resources {
    $type: "yandex.cloud.dataproc.v1.Resources";
    /**
     * ID of the resource preset for computational resources available to a host (CPU, memory etc.).
     * All available presets are listed in the [documentation](/docs/data-proc/concepts/instance-types).
     */
    resourcePresetId: string;
    /**
     * Type of the storage environment for the host.
     * Possible values:
     * * network-hdd - network HDD drive,
     * * network-ssd - network SSD drive.
     */
    diskTypeId: string;
    /** Volume of the storage available to a host, in bytes. */
    diskSize: number;
}
export declare const Resources: {
    $type: "yandex.cloud.dataproc.v1.Resources";
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial<I extends {
        diskTypeId?: string | undefined;
        diskSize?: number | undefined;
        resourcePresetId?: string | undefined;
    } & {
        diskTypeId?: string | undefined;
        diskSize?: number | undefined;
        resourcePresetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>>(object: I): Resources;
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
