/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.kms.v1.asymmetricencryption";
export interface AsymmetricDecryptRequest {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptRequest";
    /** ID of the asymmetric KMS key to use for decryption. */
    keyId: string;
    /**
     * Ciphertext to be decrypted.
     * Should be encoded with base64.
     */
    ciphertext: Buffer;
}
export interface AsymmetricDecryptResponse {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptResponse";
    /** ID of the asymmetric KMS key that was used for decryption. */
    keyId: string;
    /** Decrypted plaintext. */
    plaintext: Buffer;
}
export interface AsymmetricGetPublicKeyRequest {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyRequest";
    /** ID of the asymmetric KMS key to be used for public key retrieval. */
    keyId: string;
}
export interface AsymmetricGetPublicKeyResponse {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyResponse";
    /** ID of the asymmetric KMS key to get public key of. */
    keyId: string;
    /**
     * Public key value.
     * The value is a PEM-encoded X.509 public key, also known as SubjectPublicKeyInfo (SPKI),
     * as defined in RFC 5280.
     */
    publicKey: string;
}
export declare const AsymmetricDecryptRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptRequest";
    encode(message: AsymmetricDecryptRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricDecryptRequest;
    fromJSON(object: any): AsymmetricDecryptRequest;
    toJSON(message: AsymmetricDecryptRequest): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
        ciphertext?: Buffer | undefined;
    } & {
        keyId?: string | undefined;
        ciphertext?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId" | "ciphertext">, never>>(object: I): AsymmetricDecryptRequest;
};
export declare const AsymmetricDecryptResponse: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptResponse";
    encode(message: AsymmetricDecryptResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricDecryptResponse;
    fromJSON(object: any): AsymmetricDecryptResponse;
    toJSON(message: AsymmetricDecryptResponse): unknown;
    fromPartial<I extends {
        plaintext?: Buffer | undefined;
        keyId?: string | undefined;
    } & {
        plaintext?: Buffer | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "plaintext" | "keyId">, never>>(object: I): AsymmetricDecryptResponse;
};
export declare const AsymmetricGetPublicKeyRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyRequest";
    encode(message: AsymmetricGetPublicKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricGetPublicKeyRequest;
    fromJSON(object: any): AsymmetricGetPublicKeyRequest;
    toJSON(message: AsymmetricGetPublicKeyRequest): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): AsymmetricGetPublicKeyRequest;
};
export declare const AsymmetricGetPublicKeyResponse: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyResponse";
    encode(message: AsymmetricGetPublicKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricGetPublicKeyResponse;
    fromJSON(object: any): AsymmetricGetPublicKeyResponse;
    toJSON(message: AsymmetricGetPublicKeyResponse): unknown;
    fromPartial<I extends {
        publicKey?: string | undefined;
        keyId?: string | undefined;
    } & {
        publicKey?: string | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "publicKey" | "keyId">, never>>(object: I): AsymmetricGetPublicKeyResponse;
};
/** Set of methods that perform asymmetric decryption. */
export declare const AsymmetricEncryptionCryptoServiceService: {
    /** Decrypts the given ciphertext with the specified key. */
    readonly decrypt: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService/Decrypt";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AsymmetricDecryptRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AsymmetricDecryptRequest;
        readonly responseSerialize: (value: AsymmetricDecryptResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AsymmetricDecryptResponse;
    };
    /** Gets value of public key. */
    readonly getPublicKey: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService/GetPublicKey";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AsymmetricGetPublicKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AsymmetricGetPublicKeyRequest;
        readonly responseSerialize: (value: AsymmetricGetPublicKeyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AsymmetricGetPublicKeyResponse;
    };
};
export interface AsymmetricEncryptionCryptoServiceServer extends UntypedServiceImplementation {
    /** Decrypts the given ciphertext with the specified key. */
    decrypt: handleUnaryCall<AsymmetricDecryptRequest, AsymmetricDecryptResponse>;
    /** Gets value of public key. */
    getPublicKey: handleUnaryCall<AsymmetricGetPublicKeyRequest, AsymmetricGetPublicKeyResponse>;
}
export interface AsymmetricEncryptionCryptoServiceClient extends Client {
    /** Decrypts the given ciphertext with the specified key. */
    decrypt(request: AsymmetricDecryptRequest, callback: (error: ServiceError | null, response: AsymmetricDecryptResponse) => void): ClientUnaryCall;
    decrypt(request: AsymmetricDecryptRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AsymmetricDecryptResponse) => void): ClientUnaryCall;
    decrypt(request: AsymmetricDecryptRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AsymmetricDecryptResponse) => void): ClientUnaryCall;
    /** Gets value of public key. */
    getPublicKey(request: AsymmetricGetPublicKeyRequest, callback: (error: ServiceError | null, response: AsymmetricGetPublicKeyResponse) => void): ClientUnaryCall;
    getPublicKey(request: AsymmetricGetPublicKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AsymmetricGetPublicKeyResponse) => void): ClientUnaryCall;
    getPublicKey(request: AsymmetricGetPublicKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AsymmetricGetPublicKeyResponse) => void): ClientUnaryCall;
}
export declare const AsymmetricEncryptionCryptoServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): AsymmetricEncryptionCryptoServiceClient;
    service: typeof AsymmetricEncryptionCryptoServiceService;
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
