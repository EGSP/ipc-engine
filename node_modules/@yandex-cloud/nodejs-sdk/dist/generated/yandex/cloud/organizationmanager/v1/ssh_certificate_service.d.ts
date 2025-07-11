/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1";
export interface GenerateSshCertificateRequest {
    $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateRequest";
    /** the cloud must be attached to an organization */
    cloudId: string | undefined;
    organizationId: string | undefined;
    /** specify subject to generate certificate for default login */
    subjectId: string | undefined;
    /** specify os_login for a specific login */
    osLogin: string | undefined;
    publicKey: string;
}
export interface GenerateSshCertificateResponse {
    $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateResponse";
    /** as per specification https://cvsweb.openbsd.org/src/usr.bin/ssh/PROTOCOL.certkeys?annotate=HEAD */
    signedCertificate: string;
}
export declare const GenerateSshCertificateRequest: {
    $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateRequest";
    encode(message: GenerateSshCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenerateSshCertificateRequest;
    fromJSON(object: any): GenerateSshCertificateRequest;
    toJSON(message: GenerateSshCertificateRequest): unknown;
    fromPartial<I extends {
        cloudId?: string | undefined;
        organizationId?: string | undefined;
        publicKey?: string | undefined;
        subjectId?: string | undefined;
        osLogin?: string | undefined;
    } & {
        cloudId?: string | undefined;
        organizationId?: string | undefined;
        publicKey?: string | undefined;
        subjectId?: string | undefined;
        osLogin?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "cloudId" | "organizationId" | "publicKey" | "subjectId" | "osLogin">, never>>(object: I): GenerateSshCertificateRequest;
};
export declare const GenerateSshCertificateResponse: {
    $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateResponse";
    encode(message: GenerateSshCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenerateSshCertificateResponse;
    fromJSON(object: any): GenerateSshCertificateResponse;
    toJSON(message: GenerateSshCertificateResponse): unknown;
    fromPartial<I extends {
        signedCertificate?: string | undefined;
    } & {
        signedCertificate?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "signedCertificate">, never>>(object: I): GenerateSshCertificateResponse;
};
export declare const SshCertificateServiceService: {
    /**
     * Members of an organization can generate certificates for themselves
     * Signing certificates for other users requires a special permission
     */
    readonly generate: {
        readonly path: "/yandex.cloud.organizationmanager.v1.SshCertificateService/Generate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GenerateSshCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GenerateSshCertificateRequest;
        readonly responseSerialize: (value: GenerateSshCertificateResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GenerateSshCertificateResponse;
    };
};
export interface SshCertificateServiceServer extends UntypedServiceImplementation {
    /**
     * Members of an organization can generate certificates for themselves
     * Signing certificates for other users requires a special permission
     */
    generate: handleUnaryCall<GenerateSshCertificateRequest, GenerateSshCertificateResponse>;
}
export interface SshCertificateServiceClient extends Client {
    /**
     * Members of an organization can generate certificates for themselves
     * Signing certificates for other users requires a special permission
     */
    generate(request: GenerateSshCertificateRequest, callback: (error: ServiceError | null, response: GenerateSshCertificateResponse) => void): ClientUnaryCall;
    generate(request: GenerateSshCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GenerateSshCertificateResponse) => void): ClientUnaryCall;
    generate(request: GenerateSshCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GenerateSshCertificateResponse) => void): ClientUnaryCall;
}
export declare const SshCertificateServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): SshCertificateServiceClient;
    service: typeof SshCertificateServiceService;
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
