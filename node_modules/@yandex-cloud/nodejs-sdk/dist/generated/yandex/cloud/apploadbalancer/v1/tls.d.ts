import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/** A TLS validation context resource. */
export interface ValidationContext {
    $type: "yandex.cloud.apploadbalancer.v1.ValidationContext";
    trustedCaId: string | undefined;
    /** X.509 certificate contents in PEM format. */
    trustedCaBytes: string | undefined;
}
export declare const ValidationContext: {
    $type: "yandex.cloud.apploadbalancer.v1.ValidationContext";
    encode(message: ValidationContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidationContext;
    fromJSON(object: any): ValidationContext;
    toJSON(message: ValidationContext): unknown;
    fromPartial<I extends {
        trustedCaId?: string | undefined;
        trustedCaBytes?: string | undefined;
    } & {
        trustedCaId?: string | undefined;
        trustedCaBytes?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "trustedCaId" | "trustedCaBytes">, never>>(object: I): ValidationContext;
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
