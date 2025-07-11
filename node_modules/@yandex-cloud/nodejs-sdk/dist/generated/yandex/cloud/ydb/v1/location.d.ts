import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface Location {
    $type: "yandex.cloud.ydb.v1.Location";
    id: string;
    description: string;
}
export declare const Location: {
    $type: "yandex.cloud.ydb.v1.Location";
    encode(message: Location, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Location;
    fromJSON(object: any): Location;
    toJSON(message: Location): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id">, never>>(object: I): Location;
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
