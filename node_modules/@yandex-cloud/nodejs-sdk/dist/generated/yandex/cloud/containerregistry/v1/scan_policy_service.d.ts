/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { ScanRules, ScanPolicy } from "../../../../yandex/cloud/containerregistry/v1/scan_policy";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface GetScanPolicyRequest {
    $type: "yandex.cloud.containerregistry.v1.GetScanPolicyRequest";
    /** ID of the scan policy. */
    scanPolicyId: string;
}
export interface GetScanPolicyByRegistryRequest {
    $type: "yandex.cloud.containerregistry.v1.GetScanPolicyByRegistryRequest";
    /** ID of the registry with scan policy. */
    registryId: string;
}
export interface CreateScanPolicyRequest {
    $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyRequest";
    /** ID of the scan policy registry. */
    registryId: string;
    /** Name of the scan policy. */
    name: string;
    /** Description of the scan policy. */
    description: string;
    /** Rules of the scan policy. */
    rules?: ScanRules;
}
export interface UpdateScanPolicyRequest {
    $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyRequest";
    /** ID of the scan policy. */
    scanPolicyId: string;
    /** Field mask that specifies which fields of the scan policy resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the scan policy. */
    name: string;
    /** Description of the scan policy. */
    description: string;
    /** Rules of the scan policy. */
    rules?: ScanRules;
}
export interface DeleteScanPolicyRequest {
    $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyRequest";
    /** ID of the scan policy. */
    scanPolicyId: string;
}
export interface CreateScanPolicyMetadata {
    $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyMetadata";
    /** ID of created scan policy resource. */
    scanPolicyId: string;
}
export interface UpdateScanPolicyMetadata {
    $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyMetadata";
    /** ID of the scan policy resource that is updated. */
    scanPolicyId: string;
}
export interface DeleteScanPolicyMetadata {
    $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyMetadata";
    /** ID of the scan policy resource that is deleted. */
    scanPolicyId: string;
}
export declare const GetScanPolicyRequest: {
    $type: "yandex.cloud.containerregistry.v1.GetScanPolicyRequest";
    encode(message: GetScanPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetScanPolicyRequest;
    fromJSON(object: any): GetScanPolicyRequest;
    toJSON(message: GetScanPolicyRequest): unknown;
    fromPartial<I extends {
        scanPolicyId?: string | undefined;
    } & {
        scanPolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "scanPolicyId">, never>>(object: I): GetScanPolicyRequest;
};
export declare const GetScanPolicyByRegistryRequest: {
    $type: "yandex.cloud.containerregistry.v1.GetScanPolicyByRegistryRequest";
    encode(message: GetScanPolicyByRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetScanPolicyByRegistryRequest;
    fromJSON(object: any): GetScanPolicyByRegistryRequest;
    toJSON(message: GetScanPolicyByRegistryRequest): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
    } & {
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId">, never>>(object: I): GetScanPolicyByRegistryRequest;
};
export declare const CreateScanPolicyRequest: {
    $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyRequest";
    encode(message: CreateScanPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateScanPolicyRequest;
    fromJSON(object: any): CreateScanPolicyRequest;
    toJSON(message: CreateScanPolicyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        rules?: {
            pushRule?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
            } | undefined;
            scheduleRules?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        registryId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        rules?: ({
            pushRule?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
            } | undefined;
            scheduleRules?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            pushRule?: ({
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
            } & {
                disabled?: boolean | undefined;
                repositoryPrefixes?: (string[] & string[] & Record<Exclude<keyof I["rules"]["pushRule"]["repositoryPrefixes"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["rules"]["pushRule"], "$type" | "disabled" | "repositoryPrefixes">, never>) | undefined;
            scheduleRules?: ({
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] & ({
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                disabled?: boolean | undefined;
                repositoryPrefixes?: (string[] & string[] & Record<Exclude<keyof I["rules"]["scheduleRules"][number]["repositoryPrefixes"], "$type" | keyof string[]>, never>) | undefined;
                rescanPeriod?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["rules"]["scheduleRules"][number]["rescanPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["rules"]["scheduleRules"][number], "$type" | "disabled" | "repositoryPrefixes" | "rescanPeriod">, never>)[] & Record<Exclude<keyof I["rules"]["scheduleRules"], "$type" | keyof {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["rules"], "$type" | "pushRule" | "scheduleRules">, never>) | undefined;
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "rules" | "registryId">, never>>(object: I): CreateScanPolicyRequest;
};
export declare const UpdateScanPolicyRequest: {
    $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyRequest";
    encode(message: UpdateScanPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateScanPolicyRequest;
    fromJSON(object: any): UpdateScanPolicyRequest;
    toJSON(message: UpdateScanPolicyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        rules?: {
            pushRule?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
            } | undefined;
            scheduleRules?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        scanPolicyId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        rules?: ({
            pushRule?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
            } | undefined;
            scheduleRules?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            pushRule?: ({
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
            } & {
                disabled?: boolean | undefined;
                repositoryPrefixes?: (string[] & string[] & Record<Exclude<keyof I["rules"]["pushRule"]["repositoryPrefixes"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["rules"]["pushRule"], "$type" | "disabled" | "repositoryPrefixes">, never>) | undefined;
            scheduleRules?: ({
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] & ({
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                disabled?: boolean | undefined;
                repositoryPrefixes?: (string[] & string[] & Record<Exclude<keyof I["rules"]["scheduleRules"][number]["repositoryPrefixes"], "$type" | keyof string[]>, never>) | undefined;
                rescanPeriod?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["rules"]["scheduleRules"][number]["rescanPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["rules"]["scheduleRules"][number], "$type" | "disabled" | "repositoryPrefixes" | "rescanPeriod">, never>)[] & Record<Exclude<keyof I["rules"]["scheduleRules"], "$type" | keyof {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["rules"], "$type" | "pushRule" | "scheduleRules">, never>) | undefined;
        scanPolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "updateMask" | "rules" | "scanPolicyId">, never>>(object: I): UpdateScanPolicyRequest;
};
export declare const DeleteScanPolicyRequest: {
    $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyRequest";
    encode(message: DeleteScanPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteScanPolicyRequest;
    fromJSON(object: any): DeleteScanPolicyRequest;
    toJSON(message: DeleteScanPolicyRequest): unknown;
    fromPartial<I extends {
        scanPolicyId?: string | undefined;
    } & {
        scanPolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "scanPolicyId">, never>>(object: I): DeleteScanPolicyRequest;
};
export declare const CreateScanPolicyMetadata: {
    $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyMetadata";
    encode(message: CreateScanPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateScanPolicyMetadata;
    fromJSON(object: any): CreateScanPolicyMetadata;
    toJSON(message: CreateScanPolicyMetadata): unknown;
    fromPartial<I extends {
        scanPolicyId?: string | undefined;
    } & {
        scanPolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "scanPolicyId">, never>>(object: I): CreateScanPolicyMetadata;
};
export declare const UpdateScanPolicyMetadata: {
    $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyMetadata";
    encode(message: UpdateScanPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateScanPolicyMetadata;
    fromJSON(object: any): UpdateScanPolicyMetadata;
    toJSON(message: UpdateScanPolicyMetadata): unknown;
    fromPartial<I extends {
        scanPolicyId?: string | undefined;
    } & {
        scanPolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "scanPolicyId">, never>>(object: I): UpdateScanPolicyMetadata;
};
export declare const DeleteScanPolicyMetadata: {
    $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyMetadata";
    encode(message: DeleteScanPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteScanPolicyMetadata;
    fromJSON(object: any): DeleteScanPolicyMetadata;
    toJSON(message: DeleteScanPolicyMetadata): unknown;
    fromPartial<I extends {
        scanPolicyId?: string | undefined;
    } & {
        scanPolicyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "scanPolicyId">, never>>(object: I): DeleteScanPolicyMetadata;
};
/** A set of methods for managing scan policy resources. */
export declare const ScanPolicyServiceService: {
    /** Returns the specified scan policy. */
    readonly get: {
        readonly path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetScanPolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetScanPolicyRequest;
        readonly responseSerialize: (value: ScanPolicy) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ScanPolicy;
    };
    /** Returns scan policy for the registry if any exists. */
    readonly getByRegistry: {
        readonly path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/GetByRegistry";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetScanPolicyByRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetScanPolicyByRegistryRequest;
        readonly responseSerialize: (value: ScanPolicy) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ScanPolicy;
    };
    /** Creates a scan policy for the specified registry. */
    readonly create: {
        readonly path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateScanPolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateScanPolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified scan policy. */
    readonly update: {
        readonly path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateScanPolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateScanPolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified scan policy. */
    readonly delete: {
        readonly path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteScanPolicyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteScanPolicyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ScanPolicyServiceServer extends UntypedServiceImplementation {
    /** Returns the specified scan policy. */
    get: handleUnaryCall<GetScanPolicyRequest, ScanPolicy>;
    /** Returns scan policy for the registry if any exists. */
    getByRegistry: handleUnaryCall<GetScanPolicyByRegistryRequest, ScanPolicy>;
    /** Creates a scan policy for the specified registry. */
    create: handleUnaryCall<CreateScanPolicyRequest, Operation>;
    /** Updates the specified scan policy. */
    update: handleUnaryCall<UpdateScanPolicyRequest, Operation>;
    /** Deletes the specified scan policy. */
    delete: handleUnaryCall<DeleteScanPolicyRequest, Operation>;
}
export interface ScanPolicyServiceClient extends Client {
    /** Returns the specified scan policy. */
    get(request: GetScanPolicyRequest, callback: (error: ServiceError | null, response: ScanPolicy) => void): ClientUnaryCall;
    get(request: GetScanPolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ScanPolicy) => void): ClientUnaryCall;
    get(request: GetScanPolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ScanPolicy) => void): ClientUnaryCall;
    /** Returns scan policy for the registry if any exists. */
    getByRegistry(request: GetScanPolicyByRegistryRequest, callback: (error: ServiceError | null, response: ScanPolicy) => void): ClientUnaryCall;
    getByRegistry(request: GetScanPolicyByRegistryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ScanPolicy) => void): ClientUnaryCall;
    getByRegistry(request: GetScanPolicyByRegistryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ScanPolicy) => void): ClientUnaryCall;
    /** Creates a scan policy for the specified registry. */
    create(request: CreateScanPolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateScanPolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateScanPolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified scan policy. */
    update(request: UpdateScanPolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateScanPolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateScanPolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified scan policy. */
    delete(request: DeleteScanPolicyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteScanPolicyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteScanPolicyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ScanPolicyServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ScanPolicyServiceClient;
    service: typeof ScanPolicyServiceService;
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
