/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Payload } from "../../../../yandex/cloud/lockbox/v1/payload";
export declare const protobufPackage = "yandex.cloud.lockbox.v1";
export interface GetPayloadRequest {
    $type: "yandex.cloud.lockbox.v1.GetPayloadRequest";
    /** ID of the secret. */
    secretId: string;
    /** Optional ID of the version. */
    versionId: string;
}
export declare const GetPayloadRequest: {
    $type: "yandex.cloud.lockbox.v1.GetPayloadRequest";
    encode(message: GetPayloadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetPayloadRequest;
    fromJSON(object: any): GetPayloadRequest;
    toJSON(message: GetPayloadRequest): unknown;
    fromPartial<I extends {
        versionId?: string | undefined;
        secretId?: string | undefined;
    } & {
        versionId?: string | undefined;
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "versionId" | "secretId">, never>>(object: I): GetPayloadRequest;
};
/** Set of methods to access payload of secrets. */
export declare const PayloadServiceService: {
    /**
     * Returns the payload of the specified secret.
     *
     * To get the list of all available secrets, make a [SecretService.List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.lockbox.v1.PayloadService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetPayloadRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetPayloadRequest;
        readonly responseSerialize: (value: Payload) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Payload;
    };
};
export interface PayloadServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the payload of the specified secret.
     *
     * To get the list of all available secrets, make a [SecretService.List] request.
     */
    get: handleUnaryCall<GetPayloadRequest, Payload>;
}
export interface PayloadServiceClient extends Client {
    /**
     * Returns the payload of the specified secret.
     *
     * To get the list of all available secrets, make a [SecretService.List] request.
     */
    get(request: GetPayloadRequest, callback: (error: ServiceError | null, response: Payload) => void): ClientUnaryCall;
    get(request: GetPayloadRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Payload) => void): ClientUnaryCall;
    get(request: GetPayloadRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Payload) => void): ClientUnaryCall;
}
export declare const PayloadServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): PayloadServiceClient;
    service: typeof PayloadServiceService;
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
