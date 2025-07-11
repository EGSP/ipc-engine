/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Lock } from "../../../../../yandex/cloud/marketplace/licensemanager/v1/lock";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";
export interface GetLockRequest {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest";
    lockId: string;
}
export interface CreateLockRequest {
    $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest";
    /** license */
    instanceId: string;
    resourceId: string;
}
export interface EnsureLockRequest {
    $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest";
    /** license */
    instanceId: string;
    resourceId: string;
}
export interface CreateLockMetadata {
    $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata";
    lockId: string;
}
export interface EnsureLockMetadata {
    $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata";
    lockId: string;
}
export interface DeleteLockRequest {
    $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest";
    lockId: string;
}
export interface DeleteLockMetadata {
    $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata";
    lockId: string;
}
export interface GetLockByInstanceAndResourceRequest {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest";
    /** license */
    instanceId: string;
    resourceId: string;
}
export declare const GetLockRequest: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest";
    encode(message: GetLockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLockRequest;
    fromJSON(object: any): GetLockRequest;
    toJSON(message: GetLockRequest): unknown;
    fromPartial<I extends {
        lockId?: string | undefined;
    } & {
        lockId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lockId">, never>>(object: I): GetLockRequest;
};
export declare const CreateLockRequest: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest";
    encode(message: CreateLockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLockRequest;
    fromJSON(object: any): CreateLockRequest;
    toJSON(message: CreateLockRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        instanceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "instanceId">, never>>(object: I): CreateLockRequest;
};
export declare const EnsureLockRequest: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest";
    encode(message: EnsureLockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EnsureLockRequest;
    fromJSON(object: any): EnsureLockRequest;
    toJSON(message: EnsureLockRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        instanceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "instanceId">, never>>(object: I): EnsureLockRequest;
};
export declare const CreateLockMetadata: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata";
    encode(message: CreateLockMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLockMetadata;
    fromJSON(object: any): CreateLockMetadata;
    toJSON(message: CreateLockMetadata): unknown;
    fromPartial<I extends {
        lockId?: string | undefined;
    } & {
        lockId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lockId">, never>>(object: I): CreateLockMetadata;
};
export declare const EnsureLockMetadata: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata";
    encode(message: EnsureLockMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EnsureLockMetadata;
    fromJSON(object: any): EnsureLockMetadata;
    toJSON(message: EnsureLockMetadata): unknown;
    fromPartial<I extends {
        lockId?: string | undefined;
    } & {
        lockId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lockId">, never>>(object: I): EnsureLockMetadata;
};
export declare const DeleteLockRequest: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest";
    encode(message: DeleteLockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLockRequest;
    fromJSON(object: any): DeleteLockRequest;
    toJSON(message: DeleteLockRequest): unknown;
    fromPartial<I extends {
        lockId?: string | undefined;
    } & {
        lockId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lockId">, never>>(object: I): DeleteLockRequest;
};
export declare const DeleteLockMetadata: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata";
    encode(message: DeleteLockMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLockMetadata;
    fromJSON(object: any): DeleteLockMetadata;
    toJSON(message: DeleteLockMetadata): unknown;
    fromPartial<I extends {
        lockId?: string | undefined;
    } & {
        lockId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "lockId">, never>>(object: I): DeleteLockMetadata;
};
export declare const GetLockByInstanceAndResourceRequest: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest";
    encode(message: GetLockByInstanceAndResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLockByInstanceAndResourceRequest;
    fromJSON(object: any): GetLockByInstanceAndResourceRequest;
    toJSON(message: GetLockByInstanceAndResourceRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        instanceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "instanceId">, never>>(object: I): GetLockByInstanceAndResourceRequest;
};
export declare const LockServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLockRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLockRequest;
        readonly responseSerialize: (value: Lock) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Lock;
    };
    readonly getByInstanceAndResource: {
        readonly path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/GetByInstanceAndResource";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLockByInstanceAndResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLockByInstanceAndResourceRequest;
        readonly responseSerialize: (value: Lock) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Lock;
    };
    readonly create: {
        readonly path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateLockRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateLockRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly ensure: {
        readonly path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Ensure";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EnsureLockRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EnsureLockRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteLockRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteLockRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface LockServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetLockRequest, Lock>;
    getByInstanceAndResource: handleUnaryCall<GetLockByInstanceAndResourceRequest, Lock>;
    create: handleUnaryCall<CreateLockRequest, Operation>;
    ensure: handleUnaryCall<EnsureLockRequest, Operation>;
    delete: handleUnaryCall<DeleteLockRequest, Operation>;
}
export interface LockServiceClient extends Client {
    get(request: GetLockRequest, callback: (error: ServiceError | null, response: Lock) => void): ClientUnaryCall;
    get(request: GetLockRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Lock) => void): ClientUnaryCall;
    get(request: GetLockRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Lock) => void): ClientUnaryCall;
    getByInstanceAndResource(request: GetLockByInstanceAndResourceRequest, callback: (error: ServiceError | null, response: Lock) => void): ClientUnaryCall;
    getByInstanceAndResource(request: GetLockByInstanceAndResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Lock) => void): ClientUnaryCall;
    getByInstanceAndResource(request: GetLockByInstanceAndResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Lock) => void): ClientUnaryCall;
    create(request: CreateLockRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLockRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLockRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    ensure(request: EnsureLockRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    ensure(request: EnsureLockRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    ensure(request: EnsureLockRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLockRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLockRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLockRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const LockServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): LockServiceClient;
    service: typeof LockServiceService;
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
