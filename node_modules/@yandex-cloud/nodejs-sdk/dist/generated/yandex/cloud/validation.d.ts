import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud";
export interface MapKeySpec {
    $type: "yandex.cloud.MapKeySpec";
    value: string;
    pattern: string;
    length: string;
}
export declare const MapKeySpec: {
    $type: "yandex.cloud.MapKeySpec";
    encode(message: MapKeySpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MapKeySpec;
    fromJSON(object: any): MapKeySpec;
    toJSON(message: MapKeySpec): unknown;
    fromPartial<I extends {
        length?: string | undefined;
        value?: string | undefined;
        pattern?: string | undefined;
    } & {
        length?: string | undefined;
        value?: string | undefined;
        pattern?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "length" | "value" | "pattern">, never>>(object: I): MapKeySpec;
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
