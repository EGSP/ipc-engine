import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface DiskType {
    $type: "yandex.cloud.compute.v1.DiskType";
    /** ID of the disk type. */
    id: string;
    /** Description of the disk type. 0-256 characters long. */
    description: string;
    /** Array of availability zones where the disk type is available. */
    zoneIds: string[];
}
export declare const DiskType: {
    $type: "yandex.cloud.compute.v1.DiskType";
    encode(message: DiskType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DiskType;
    fromJSON(object: any): DiskType;
    toJSON(message: DiskType): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        zoneIds?: string[] | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        zoneIds?: (string[] & string[] & Record<Exclude<keyof I["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "zoneIds">, never>>(object: I): DiskType;
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
