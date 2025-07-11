import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.endpoint";
export interface ApiEndpoint {
    $type: "yandex.cloud.endpoint.ApiEndpoint";
    id: string;
    address: string;
}
export declare const ApiEndpoint: {
    $type: "yandex.cloud.endpoint.ApiEndpoint";
    encode(message: ApiEndpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApiEndpoint;
    fromJSON(object: any): ApiEndpoint;
    toJSON(message: ApiEndpoint): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        address?: string | undefined;
    } & {
        id?: string | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "address">, never>>(object: I): ApiEndpoint;
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
