import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.kms.v1.asymmetricsignature";
/** Supported asymmetric signature algorithms. */
export declare enum AsymmetricSignatureAlgorithm {
    ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED = 0,
    /** RSA_2048_SIGN_PSS_SHA_256 - RSA-2048 signature with PSS padding and SHA-256 */
    RSA_2048_SIGN_PSS_SHA_256 = 1,
    /** RSA_2048_SIGN_PSS_SHA_384 - RSA-2048 signature with PSS padding and SHA-384 */
    RSA_2048_SIGN_PSS_SHA_384 = 2,
    /** RSA_2048_SIGN_PSS_SHA_512 - RSA-2048 signature with PSS padding and SHA-512 */
    RSA_2048_SIGN_PSS_SHA_512 = 3,
    /** RSA_3072_SIGN_PSS_SHA_256 - RSA-3072 signature with PSS padding and SHA-256 */
    RSA_3072_SIGN_PSS_SHA_256 = 4,
    /** RSA_3072_SIGN_PSS_SHA_384 - RSA-3072 signature with PSS padding and SHA-384 */
    RSA_3072_SIGN_PSS_SHA_384 = 5,
    /** RSA_3072_SIGN_PSS_SHA_512 - RSA-3072 signature with PSS padding and SHA-512 */
    RSA_3072_SIGN_PSS_SHA_512 = 6,
    /** RSA_4096_SIGN_PSS_SHA_256 - RSA-4096 signature with PSS padding and SHA-256 */
    RSA_4096_SIGN_PSS_SHA_256 = 7,
    /** RSA_4096_SIGN_PSS_SHA_384 - RSA-4096 signature with PSS padding and SHA-384 */
    RSA_4096_SIGN_PSS_SHA_384 = 8,
    /** RSA_4096_SIGN_PSS_SHA_512 - RSA-4096 signature with PSS padding and SHA-512 */
    RSA_4096_SIGN_PSS_SHA_512 = 9,
    /** ECDSA_NIST_P256_SHA_256 - ECDSA signature with NIST P-256 curve and SHA-256 */
    ECDSA_NIST_P256_SHA_256 = 10,
    /** ECDSA_NIST_P384_SHA_384 - ECDSA signature with NIST P-384 curve and SHA-384 */
    ECDSA_NIST_P384_SHA_384 = 11,
    /** ECDSA_NIST_P521_SHA_512 - ECDSA signature with NIST P-521 curve and SHA-512 */
    ECDSA_NIST_P521_SHA_512 = 12,
    /** ECDSA_SECP256_K1_SHA_256 - ECDSA signature with SECP256_K1 curve and SHA-256 */
    ECDSA_SECP256_K1_SHA_256 = 13,
    UNRECOGNIZED = -1
}
export declare function asymmetricSignatureAlgorithmFromJSON(object: any): AsymmetricSignatureAlgorithm;
export declare function asymmetricSignatureAlgorithmToJSON(object: AsymmetricSignatureAlgorithm): string;
/** An asymmetric KMS key that may contain several versions of the cryptographic material. */
export interface AsymmetricSignatureKey {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey";
    /** ID of the key. */
    id: string;
    /** ID of the folder that the key belongs to. */
    folderId: string;
    /** Time when the key was created. */
    createdAt?: Date;
    /** Name of the key. */
    name: string;
    /** Description of the key. */
    description: string;
    /** Custom labels for the key as `key:value` pairs. Maximum 64 per key. */
    labels: {
        [key: string]: string;
    };
    /** Current status of the key. */
    status: AsymmetricSignatureKey_Status;
    /** Signature Algorithm ID. */
    signatureAlgorithm: AsymmetricSignatureAlgorithm;
    /** Flag that inhibits deletion of the key */
    deletionProtection: boolean;
}
export declare enum AsymmetricSignatureKey_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The key is being created. */
    CREATING = 1,
    /**
     * ACTIVE - The key is active and can be used for encryption and decryption or signature and verification.
     * Can be set to INACTIVE using the [AsymmetricKeyService.Update] method.
     */
    ACTIVE = 2,
    /**
     * INACTIVE - The key is inactive and unusable.
     * Can be set to ACTIVE using the [AsymmetricKeyService.Update] method.
     */
    INACTIVE = 3,
    UNRECOGNIZED = -1
}
export declare function asymmetricSignatureKey_StatusFromJSON(object: any): AsymmetricSignatureKey_Status;
export declare function asymmetricSignatureKey_StatusToJSON(object: AsymmetricSignatureKey_Status): string;
export interface AsymmetricSignatureKey_LabelsEntry {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry";
    key: string;
    value: string;
}
export declare const AsymmetricSignatureKey: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey";
    encode(message: AsymmetricSignatureKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricSignatureKey;
    fromJSON(object: any): AsymmetricSignatureKey;
    toJSON(message: AsymmetricSignatureKey): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: AsymmetricSignatureKey_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        signatureAlgorithm?: AsymmetricSignatureAlgorithm | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: AsymmetricSignatureKey_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        deletionProtection?: boolean | undefined;
        signatureAlgorithm?: AsymmetricSignatureAlgorithm | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "deletionProtection" | "signatureAlgorithm">, never>>(object: I): AsymmetricSignatureKey;
};
export declare const AsymmetricSignatureKey_LabelsEntry: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry";
    encode(message: AsymmetricSignatureKey_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricSignatureKey_LabelsEntry;
    fromJSON(object: any): AsymmetricSignatureKey_LabelsEntry;
    toJSON(message: AsymmetricSignatureKey_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): AsymmetricSignatureKey_LabelsEntry;
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
