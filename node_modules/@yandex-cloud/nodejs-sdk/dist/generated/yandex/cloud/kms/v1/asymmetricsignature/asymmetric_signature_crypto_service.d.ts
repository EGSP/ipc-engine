/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.kms.v1.asymmetricsignature";
export interface AsymmetricSignRequest {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignRequest";
    /** ID of the asymmetric KMS key to use for signature. */
    keyId: string;
    /**
     * Message to sign.
     * Should be encoded with base64.
     */
    message: Buffer;
}
export interface AsymmetricSignResponse {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignResponse";
    /** ID of the asymmetric KMS key that was used for signature. */
    keyId: string;
    /**
     * Value of signature.
     * Signature value is produced in accordance with RFC 8017 for RSA
     * and is a DER-encoded object as defined by ANSI X9.62-2005 and RFC 3279 Section 2.2.3 for ECDSA.
     */
    signature: Buffer;
}
export interface AsymmetricSignHashRequest {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashRequest";
    /** ID of the asymmetric KMS key to use for signature. */
    keyId: string;
    /**
     * Hash value to be signed.
     * Should be encoded with base64.
     */
    hash: Buffer;
}
export interface AsymmetricSignHashResponse {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashResponse";
    /** ID of the asymmetric KMS key that was used for signature. */
    keyId: string;
    /**
     * Value of signature.
     * Signature value is produced in accordance with RFC 8017 for RSA
     * and is a DER-encoded object as defined by ANSI X9.62-2005 and RFC 3279 Section 2.2.3 for ECDSA.
     */
    signature: Buffer;
}
export interface AsymmetricGetPublicKeyRequest {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyRequest";
    /** ID of the asymmetric KMS key to be used for public key retrieval. */
    keyId: string;
}
export interface AsymmetricGetPublicKeyResponse {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyResponse";
    /** ID of the asymmetric KMS key to get public key of. */
    keyId: string;
    /**
     * Public key value.
     * The value is a PEM-encoded X.509 public key, also known as SubjectPublicKeyInfo (SPKI),
     * as defined in RFC 5280.
     */
    publicKey: string;
}
export declare const AsymmetricSignRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignRequest";
    encode(message: AsymmetricSignRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricSignRequest;
    fromJSON(object: any): AsymmetricSignRequest;
    toJSON(message: AsymmetricSignRequest): unknown;
    fromPartial<I extends {
        message?: Buffer | undefined;
        keyId?: string | undefined;
    } & {
        message?: Buffer | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "message" | "keyId">, never>>(object: I): AsymmetricSignRequest;
};
export declare const AsymmetricSignResponse: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignResponse";
    encode(message: AsymmetricSignResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricSignResponse;
    fromJSON(object: any): AsymmetricSignResponse;
    toJSON(message: AsymmetricSignResponse): unknown;
    fromPartial<I extends {
        signature?: Buffer | undefined;
        keyId?: string | undefined;
    } & {
        signature?: Buffer | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "signature" | "keyId">, never>>(object: I): AsymmetricSignResponse;
};
export declare const AsymmetricSignHashRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashRequest";
    encode(message: AsymmetricSignHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricSignHashRequest;
    fromJSON(object: any): AsymmetricSignHashRequest;
    toJSON(message: AsymmetricSignHashRequest): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
        hash?: Buffer | undefined;
    } & {
        keyId?: string | undefined;
        hash?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId" | "hash">, never>>(object: I): AsymmetricSignHashRequest;
};
export declare const AsymmetricSignHashResponse: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashResponse";
    encode(message: AsymmetricSignHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AsymmetricSignHashResponse;
    fromJSON(object: any): AsymmetricSignHashResponse;
    toJSON(message: AsymmetricSignHashResponse): unknown;
    fromPartial<I extends {
        signature?: Buffer | undefined;
        keyId?: string | undefined;
    } & {
        signature?: Buffer | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "signature" | "keyId">, never>>(object: I): AsymmetricSignHashResponse;
};
export declare const AsymmetricGetPublicKeyRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyRequest";
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
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyResponse";
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
/** Set of methods that perform asymmetric signature. */
export declare const AsymmetricSignatureCryptoServiceService: {
    /** Signs data specified KMS key. */
    readonly sign: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/Sign";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AsymmetricSignRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AsymmetricSignRequest;
        readonly responseSerialize: (value: AsymmetricSignResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AsymmetricSignResponse;
    };
    /** Signs hash value specified KMS key. */
    readonly signHash: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/SignHash";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AsymmetricSignHashRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AsymmetricSignHashRequest;
        readonly responseSerialize: (value: AsymmetricSignHashResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AsymmetricSignHashResponse;
    };
    /** Gets value of public key. */
    readonly getPublicKey: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/GetPublicKey";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AsymmetricGetPublicKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AsymmetricGetPublicKeyRequest;
        readonly responseSerialize: (value: AsymmetricGetPublicKeyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AsymmetricGetPublicKeyResponse;
    };
};
export interface AsymmetricSignatureCryptoServiceServer extends UntypedServiceImplementation {
    /** Signs data specified KMS key. */
    sign: handleUnaryCall<AsymmetricSignRequest, AsymmetricSignResponse>;
    /** Signs hash value specified KMS key. */
    signHash: handleUnaryCall<AsymmetricSignHashRequest, AsymmetricSignHashResponse>;
    /** Gets value of public key. */
    getPublicKey: handleUnaryCall<AsymmetricGetPublicKeyRequest, AsymmetricGetPublicKeyResponse>;
}
export interface AsymmetricSignatureCryptoServiceClient extends Client {
    /** Signs data specified KMS key. */
    sign(request: AsymmetricSignRequest, callback: (error: ServiceError | null, response: AsymmetricSignResponse) => void): ClientUnaryCall;
    sign(request: AsymmetricSignRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AsymmetricSignResponse) => void): ClientUnaryCall;
    sign(request: AsymmetricSignRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AsymmetricSignResponse) => void): ClientUnaryCall;
    /** Signs hash value specified KMS key. */
    signHash(request: AsymmetricSignHashRequest, callback: (error: ServiceError | null, response: AsymmetricSignHashResponse) => void): ClientUnaryCall;
    signHash(request: AsymmetricSignHashRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AsymmetricSignHashResponse) => void): ClientUnaryCall;
    signHash(request: AsymmetricSignHashRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AsymmetricSignHashResponse) => void): ClientUnaryCall;
    /** Gets value of public key. */
    getPublicKey(request: AsymmetricGetPublicKeyRequest, callback: (error: ServiceError | null, response: AsymmetricGetPublicKeyResponse) => void): ClientUnaryCall;
    getPublicKey(request: AsymmetricGetPublicKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AsymmetricGetPublicKeyResponse) => void): ClientUnaryCall;
    getPublicKey(request: AsymmetricGetPublicKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AsymmetricGetPublicKeyResponse) => void): ClientUnaryCall;
}
export declare const AsymmetricSignatureCryptoServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): AsymmetricSignatureCryptoServiceClient;
    service: typeof AsymmetricSignatureCryptoServiceService;
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
