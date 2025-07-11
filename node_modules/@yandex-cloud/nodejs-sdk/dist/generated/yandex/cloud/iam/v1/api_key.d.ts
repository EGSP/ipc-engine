import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.iam.v1";
/** An ApiKey resource. For more information, see [Api-Key](/docs/iam/concepts/authorization/api-key). */
export interface ApiKey {
    $type: "yandex.cloud.iam.v1.ApiKey";
    /** ID of the API Key. */
    id: string;
    /** ID of the service account that the API key belongs to. */
    serviceAccountId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Description of the API key. 0-256 characters long. */
    description: string;
}
export declare const ApiKey: {
    $type: "yandex.cloud.iam.v1.ApiKey";
    encode(message: ApiKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApiKey;
    fromJSON(object: any): ApiKey;
    toJSON(message: ApiKey): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        serviceAccountId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        serviceAccountId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "serviceAccountId">, never>>(object: I): ApiKey;
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
