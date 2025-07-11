import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.iam.v1";
/** A Key resource. For more information, see [Authorized keys](/docs/iam/concepts/authorization/key). */
export interface Key {
    $type: "yandex.cloud.iam.v1.Key";
    /** ID of the Key resource. */
    id: string;
    /** ID of the user account that the Key resource belongs to. */
    userAccountId: string | undefined;
    /** ID of the service account that the Key resource belongs to. */
    serviceAccountId: string | undefined;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Description of the Key resource. 0-256 characters long. */
    description: string;
    /** An algorithm used to generate a key pair of the Key resource. */
    keyAlgorithm: Key_Algorithm;
    /** A public key of the Key resource. */
    publicKey: string;
}
export declare enum Key_Algorithm {
    ALGORITHM_UNSPECIFIED = 0,
    /** RSA_2048 - RSA with a 2048-bit key size. Default value. */
    RSA_2048 = 1,
    /** RSA_4096 - RSA with a 4096-bit key size. */
    RSA_4096 = 2,
    UNRECOGNIZED = -1
}
export declare function key_AlgorithmFromJSON(object: any): Key_Algorithm;
export declare function key_AlgorithmToJSON(object: Key_Algorithm): string;
export declare const Key: {
    $type: "yandex.cloud.iam.v1.Key";
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        serviceAccountId?: string | undefined;
        keyAlgorithm?: Key_Algorithm | undefined;
        publicKey?: string | undefined;
        userAccountId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        serviceAccountId?: string | undefined;
        keyAlgorithm?: Key_Algorithm | undefined;
        publicKey?: string | undefined;
        userAccountId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "serviceAccountId" | "keyAlgorithm" | "publicKey" | "userAccountId">, never>>(object: I): Key;
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
