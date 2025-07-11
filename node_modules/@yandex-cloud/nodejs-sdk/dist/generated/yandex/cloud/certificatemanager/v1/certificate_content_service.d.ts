/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.certificatemanager.v1";
export declare enum PrivateKeyFormat {
    PRIVATE_KEY_FORMAT_UNSPECIFIED = 0,
    PKCS1 = 1,
    PKCS8 = 2,
    UNRECOGNIZED = -1
}
export declare function privateKeyFormatFromJSON(object: any): PrivateKeyFormat;
export declare function privateKeyFormatToJSON(object: PrivateKeyFormat): string;
export interface GetCertificateContentResponse {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentResponse";
    /** ID of the certificate. */
    certificateId: string;
    /** PEM-encoded certificate chain content of the certificate. */
    certificateChain: string[];
    /** PEM-encoded private key content of the certificate. */
    privateKey: string;
}
export interface GetCertificateContentRequest {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentRequest";
    /** ID of the certificate to download content. */
    certificateId: string;
    /** Optional ID of the version. */
    versionId: string;
    /** Desired format of private key */
    privateKeyFormat: PrivateKeyFormat;
}
export declare const GetCertificateContentResponse: {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentResponse";
    encode(message: GetCertificateContentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCertificateContentResponse;
    fromJSON(object: any): GetCertificateContentResponse;
    toJSON(message: GetCertificateContentResponse): unknown;
    fromPartial<I extends {
        certificateId?: string | undefined;
        certificateChain?: string[] | undefined;
        privateKey?: string | undefined;
    } & {
        certificateId?: string | undefined;
        certificateChain?: (string[] & string[] & Record<Exclude<keyof I["certificateChain"], "$type" | keyof string[]>, never>) | undefined;
        privateKey?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateId" | "certificateChain" | "privateKey">, never>>(object: I): GetCertificateContentResponse;
};
export declare const GetCertificateContentRequest: {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateContentRequest";
    encode(message: GetCertificateContentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCertificateContentRequest;
    fromJSON(object: any): GetCertificateContentRequest;
    toJSON(message: GetCertificateContentRequest): unknown;
    fromPartial<I extends {
        certificateId?: string | undefined;
        versionId?: string | undefined;
        privateKeyFormat?: PrivateKeyFormat | undefined;
    } & {
        certificateId?: string | undefined;
        versionId?: string | undefined;
        privateKeyFormat?: PrivateKeyFormat | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateId" | "versionId" | "privateKeyFormat">, never>>(object: I): GetCertificateContentRequest;
};
/** A set of methods for managing certificate content. */
export declare const CertificateContentServiceService: {
    /** Returns chain and private key of the specified certificate. */
    readonly get: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateContentService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetCertificateContentRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetCertificateContentRequest;
        readonly responseSerialize: (value: GetCertificateContentResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetCertificateContentResponse;
    };
};
export interface CertificateContentServiceServer extends UntypedServiceImplementation {
    /** Returns chain and private key of the specified certificate. */
    get: handleUnaryCall<GetCertificateContentRequest, GetCertificateContentResponse>;
}
export interface CertificateContentServiceClient extends Client {
    /** Returns chain and private key of the specified certificate. */
    get(request: GetCertificateContentRequest, callback: (error: ServiceError | null, response: GetCertificateContentResponse) => void): ClientUnaryCall;
    get(request: GetCertificateContentRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetCertificateContentResponse) => void): ClientUnaryCall;
    get(request: GetCertificateContentRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetCertificateContentResponse) => void): ClientUnaryCall;
}
export declare const CertificateContentServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): CertificateContentServiceClient;
    service: typeof CertificateContentServiceService;
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
