import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.billing.v1";
/** A Service resource. */
export interface Service {
    $type: "yandex.cloud.billing.v1.Service";
    /** ID of the service. */
    id: string;
    /** Name of the service, e.g. `Compute Cloud`, `VPC`. */
    name: string;
    /** Description of the service. */
    description: string;
}
export declare const Service: {
    $type: "yandex.cloud.billing.v1.Service";
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name">, never>>(object: I): Service;
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
