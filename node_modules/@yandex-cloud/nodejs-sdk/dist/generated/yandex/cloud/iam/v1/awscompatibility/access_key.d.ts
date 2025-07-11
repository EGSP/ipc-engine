import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.iam.v1.awscompatibility";
/**
 * An access key.
 * For more information, see [AWS-compatible access keys](/docs/iam/concepts/authorization/access-key).
 */
export interface AccessKey {
    $type: "yandex.cloud.iam.v1.awscompatibility.AccessKey";
    /**
     * ID of the AccessKey resource.
     * It is used to manage secret credentials: an access key ID and a secret access key.
     */
    id: string;
    /** ID of the service account that the access key belongs to. */
    serviceAccountId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Description of the access key. 0-256 characters long. */
    description: string;
    /**
     * ID of the access key.
     * The key is AWS compatible.
     */
    keyId: string;
}
export declare const AccessKey: {
    $type: "yandex.cloud.iam.v1.awscompatibility.AccessKey";
    encode(message: AccessKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AccessKey;
    fromJSON(object: any): AccessKey;
    toJSON(message: AccessKey): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        serviceAccountId?: string | undefined;
        keyId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        serviceAccountId?: string | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "serviceAccountId" | "keyId">, never>>(object: I): AccessKey;
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
