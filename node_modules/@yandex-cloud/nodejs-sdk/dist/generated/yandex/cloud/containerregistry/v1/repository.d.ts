import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
/** A Repository resource. For more information, see [Repository](/docs/container-registry/concepts/repository). */
export interface Repository {
    $type: "yandex.cloud.containerregistry.v1.Repository";
    /**
     * Name of the repository.
     * The name is unique within the registry.
     */
    name: string;
    /** Output only. ID of the repository. */
    id: string;
}
export declare const Repository: {
    $type: "yandex.cloud.containerregistry.v1.Repository";
    encode(message: Repository, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Repository;
    fromJSON(object: any): Repository;
    toJSON(message: Repository): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name">, never>>(object: I): Repository;
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
