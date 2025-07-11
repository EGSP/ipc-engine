import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.reference";
export interface Reference {
    $type: "yandex.cloud.reference.Reference";
    referrer?: Referrer;
    type: Reference_Type;
}
export declare enum Reference_Type {
    TYPE_UNSPECIFIED = 0,
    MANAGED_BY = 1,
    USED_BY = 2,
    UNRECOGNIZED = -1
}
export declare function reference_TypeFromJSON(object: any): Reference_Type;
export declare function reference_TypeToJSON(object: Reference_Type): string;
export interface Referrer {
    $type: "yandex.cloud.reference.Referrer";
    /**
     * `type = compute.instance, id = <instance id>`
     * * `type = compute.instanceGroup, id = <instanceGroup id>`
     * * `type = loadbalancer.networkLoadBalancer, id = <networkLoadBalancer id>`
     * * `type = managed-kubernetes.cluster, id = <cluster id>`
     * * `type = managed-mysql.cluster, id = <cluster id>`
     */
    type: string;
    id: string;
}
export declare const Reference: {
    $type: "yandex.cloud.reference.Reference";
    encode(message: Reference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Reference;
    fromJSON(object: any): Reference;
    toJSON(message: Reference): unknown;
    fromPartial<I extends {
        type?: Reference_Type | undefined;
        referrer?: {
            id?: string | undefined;
            type?: string | undefined;
        } | undefined;
    } & {
        type?: Reference_Type | undefined;
        referrer?: ({
            id?: string | undefined;
            type?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
        } & Record<Exclude<keyof I["referrer"], "$type" | "id" | "type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "referrer">, never>>(object: I): Reference;
};
export declare const Referrer: {
    $type: "yandex.cloud.reference.Referrer";
    encode(message: Referrer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Referrer;
    fromJSON(object: any): Referrer;
    toJSON(message: Referrer): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        type?: string | undefined;
    } & {
        id?: string | undefined;
        type?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "type">, never>>(object: I): Referrer;
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
