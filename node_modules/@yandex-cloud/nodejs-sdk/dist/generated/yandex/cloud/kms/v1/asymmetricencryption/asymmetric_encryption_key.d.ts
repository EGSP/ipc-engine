import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.kms.v1.asymmetricencryption";
/** Supported asymmetric encryption algorithms. */
export declare enum AsymmetricEncryptionAlgorithm {
    ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED = 0,
    /** RSA_2048_ENC_OAEP_SHA_256 - RSA-2048 encryption with OAEP padding and SHA-256 */
    RSA_2048_ENC_OAEP_SHA_256 = 1,
    /** RSA_3072_ENC_OAEP_SHA_256 - RSA-3072 encryption with OAEP padding and SHA-256 */
    RSA_3072_ENC_OAEP_SHA_256 = 2,
    /** RSA_4096_ENC_OAEP_SHA_256 - RSA-4096 encryption with OAEP padding and SHA-256 */
    RSA_4096_ENC_OAEP_SHA_256 = 3,
    UNRECOGNIZED = -1
}
export declare function asymmetricEncryptionAlgorithmFromJSON(object: any): AsymmetricEncryptionAlgorithm;
export declare function asymmetricEncryptionAlgorithmToJSON(object: AsymmetricEncryptionAlgorithm): string;
/** An asymmetric KMS key that may contain several versions of the cryptographic material. */
export interface AsymmetricEncryptionKey {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey";
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
    status: AsymmetricEncryptionKey_Status;
    /** Asymmetric Encryption Algorithm ID. */
    encryptionAlgorithm: AsymmetricEncryptionAlgorithm;
    /** Flag that inhibits deletion of the key */
    deletionProtection: boolean;
}
export declare enum AsymmetricEncryptionKey_Status {
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
export declare function asymmetricEncryptionKey_StatusFromJSON(object: any): AsymmetricEncryptionKey_Status;
export declare function asymmetricEncryptionKey_StatusToJSON(object: AsymmetricEncryptionKey_Status): string;
export interface AsymmetricEncryptionKey_LabelsEntry {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey.LabelsEntry";
    key: string;
    value: string;
}
export declare const AsymmetricEncryptionKey: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey";
    encode(message: AsymmetricEncryptionKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricEncryptionKey;
    fromJSON(object: any): AsymmetricEncryptionKey;
    toJSON(message: AsymmetricEncryptionKey): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: AsymmetricEncryptionKey_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        encryptionAlgorithm?: AsymmetricEncryptionAlgorithm | undefined;
        deletionProtection?: boolean | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: AsymmetricEncryptionKey_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        encryptionAlgorithm?: AsymmetricEncryptionAlgorithm | undefined;
        deletionProtection?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "encryptionAlgorithm" | "deletionProtection">, never>>(object: I): AsymmetricEncryptionKey;
};
export declare const AsymmetricEncryptionKey_LabelsEntry: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey.LabelsEntry";
    encode(message: AsymmetricEncryptionKey_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricEncryptionKey_LabelsEntry;
    fromJSON(object: any): AsymmetricEncryptionKey_LabelsEntry;
    toJSON(message: AsymmetricEncryptionKey_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): AsymmetricEncryptionKey_LabelsEntry;
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
