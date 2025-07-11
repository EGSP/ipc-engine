/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Operation } from "../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.operation";
export interface GetOperationRequest {
    $type: "yandex.cloud.operation.GetOperationRequest";
    /** ID of the Operation resource to return. */
    operationId: string;
}
export interface CancelOperationRequest {
    $type: "yandex.cloud.operation.CancelOperationRequest";
    /** ID of the operation to cancel. */
    operationId: string;
}
export declare const GetOperationRequest: {
    $type: "yandex.cloud.operation.GetOperationRequest";
    encode(message: GetOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOperationRequest;
    fromJSON(object: any): GetOperationRequest;
    toJSON(message: GetOperationRequest): unknown;
    fromPartial<I extends {
        operationId?: string | undefined;
    } & {
        operationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "operationId">, never>>(object: I): GetOperationRequest;
};
export declare const CancelOperationRequest: {
    $type: "yandex.cloud.operation.CancelOperationRequest";
    encode(message: CancelOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelOperationRequest;
    fromJSON(object: any): CancelOperationRequest;
    toJSON(message: CancelOperationRequest): unknown;
    fromPartial<I extends {
        operationId?: string | undefined;
    } & {
        operationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "operationId">, never>>(object: I): CancelOperationRequest;
};
/** A set of methods for managing operations for asynchronous API requests. */
export declare const OperationServiceService: {
    /** Returns the specified Operation resource. */
    readonly get: {
        readonly path: "/yandex.cloud.operation.OperationService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOperationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOperationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Cancels the specified operation.
     *
     * Note that currently Object Storage API does not support cancelling operations.
     */
    readonly cancel: {
        readonly path: "/yandex.cloud.operation.OperationService/Cancel";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CancelOperationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CancelOperationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface OperationServiceServer extends UntypedServiceImplementation {
    /** Returns the specified Operation resource. */
    get: handleUnaryCall<GetOperationRequest, Operation>;
    /**
     * Cancels the specified operation.
     *
     * Note that currently Object Storage API does not support cancelling operations.
     */
    cancel: handleUnaryCall<CancelOperationRequest, Operation>;
}
export interface OperationServiceClient extends Client {
    /** Returns the specified Operation resource. */
    get(request: GetOperationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    get(request: GetOperationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    get(request: GetOperationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Cancels the specified operation.
     *
     * Note that currently Object Storage API does not support cancelling operations.
     */
    cancel(request: CancelOperationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancel(request: CancelOperationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancel(request: CancelOperationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const OperationServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): OperationServiceClient;
    service: typeof OperationServiceService;
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
