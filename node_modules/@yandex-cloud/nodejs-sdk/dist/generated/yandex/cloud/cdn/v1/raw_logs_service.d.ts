/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { RawLogsSettings, RawLogsStatus } from "../../../../yandex/cloud/cdn/v1/raw_logs";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.cdn.v1";
export interface ActivateRawLogsRequest {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsRequest";
    /** ID of CDN resource to switch logs storage for.. */
    resourceId: string;
    /** Raw logs settings. */
    settings?: RawLogsSettings;
}
export interface ActivateRawLogsMetadata {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsMetadata";
    /** ID of resource with activated raw logs. */
    resourceId: string;
}
export interface ActivateRawLogsResponse {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsResponse";
    /** Raw logs status. */
    status: RawLogsStatus;
    /** Raw logs settings. */
    settings?: RawLogsSettings;
}
export interface DeactivateRawLogsRequest {
    $type: "yandex.cloud.cdn.v1.DeactivateRawLogsRequest";
    /** ID of CDN resource to deactivate Raw Logs for. */
    resourceId: string;
}
export interface DeactivateRawLogsMetadata {
    $type: "yandex.cloud.cdn.v1.DeactivateRawLogsMetadata";
    /** ID of CDN resource. */
    resourceId: string;
}
export interface GetRawLogsRequest {
    $type: "yandex.cloud.cdn.v1.GetRawLogsRequest";
    /** ID of CDN resource to request status and settings. */
    resourceId: string;
}
export interface GetRawLogsResponse {
    $type: "yandex.cloud.cdn.v1.GetRawLogsResponse";
    /** Raw logs status. */
    status: RawLogsStatus;
    /** Raw logs settings. */
    settings?: RawLogsSettings;
}
export interface UpdateRawLogsRequest {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsRequest";
    /** ID of CDN resource. */
    resourceId: string;
    /** Raw logs settings. */
    settings?: RawLogsSettings;
}
export interface UpdateRawLogsResponse {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsResponse";
    /** Raw logs status. */
    status: RawLogsStatus;
    /** Raw logs settings. */
    settings?: RawLogsSettings;
}
export interface UpdateRawLogsMetadata {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsMetadata";
    /** ID of CDN resource. */
    resourceId: string;
}
export declare const ActivateRawLogsRequest: {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsRequest";
    encode(message: ActivateRawLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateRawLogsRequest;
    fromJSON(object: any): ActivateRawLogsRequest;
    toJSON(message: ActivateRawLogsRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        settings?: {
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } | undefined;
    } & {
        resourceId?: string | undefined;
        settings?: ({
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } & {
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "bucketName" | "bucketRegion" | "filePrefix">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "settings">, never>>(object: I): ActivateRawLogsRequest;
};
export declare const ActivateRawLogsMetadata: {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsMetadata";
    encode(message: ActivateRawLogsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateRawLogsMetadata;
    fromJSON(object: any): ActivateRawLogsMetadata;
    toJSON(message: ActivateRawLogsMetadata): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): ActivateRawLogsMetadata;
};
export declare const ActivateRawLogsResponse: {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsResponse";
    encode(message: ActivateRawLogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateRawLogsResponse;
    fromJSON(object: any): ActivateRawLogsResponse;
    toJSON(message: ActivateRawLogsResponse): unknown;
    fromPartial<I extends {
        status?: RawLogsStatus | undefined;
        settings?: {
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } | undefined;
    } & {
        status?: RawLogsStatus | undefined;
        settings?: ({
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } & {
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "bucketName" | "bucketRegion" | "filePrefix">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "status" | "settings">, never>>(object: I): ActivateRawLogsResponse;
};
export declare const DeactivateRawLogsRequest: {
    $type: "yandex.cloud.cdn.v1.DeactivateRawLogsRequest";
    encode(message: DeactivateRawLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateRawLogsRequest;
    fromJSON(object: any): DeactivateRawLogsRequest;
    toJSON(message: DeactivateRawLogsRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): DeactivateRawLogsRequest;
};
export declare const DeactivateRawLogsMetadata: {
    $type: "yandex.cloud.cdn.v1.DeactivateRawLogsMetadata";
    encode(message: DeactivateRawLogsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateRawLogsMetadata;
    fromJSON(object: any): DeactivateRawLogsMetadata;
    toJSON(message: DeactivateRawLogsMetadata): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): DeactivateRawLogsMetadata;
};
export declare const GetRawLogsRequest: {
    $type: "yandex.cloud.cdn.v1.GetRawLogsRequest";
    encode(message: GetRawLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetRawLogsRequest;
    fromJSON(object: any): GetRawLogsRequest;
    toJSON(message: GetRawLogsRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): GetRawLogsRequest;
};
export declare const GetRawLogsResponse: {
    $type: "yandex.cloud.cdn.v1.GetRawLogsResponse";
    encode(message: GetRawLogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetRawLogsResponse;
    fromJSON(object: any): GetRawLogsResponse;
    toJSON(message: GetRawLogsResponse): unknown;
    fromPartial<I extends {
        status?: RawLogsStatus | undefined;
        settings?: {
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } | undefined;
    } & {
        status?: RawLogsStatus | undefined;
        settings?: ({
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } & {
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "bucketName" | "bucketRegion" | "filePrefix">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "status" | "settings">, never>>(object: I): GetRawLogsResponse;
};
export declare const UpdateRawLogsRequest: {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsRequest";
    encode(message: UpdateRawLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRawLogsRequest;
    fromJSON(object: any): UpdateRawLogsRequest;
    toJSON(message: UpdateRawLogsRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        settings?: {
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } | undefined;
    } & {
        resourceId?: string | undefined;
        settings?: ({
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } & {
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "bucketName" | "bucketRegion" | "filePrefix">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "settings">, never>>(object: I): UpdateRawLogsRequest;
};
export declare const UpdateRawLogsResponse: {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsResponse";
    encode(message: UpdateRawLogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRawLogsResponse;
    fromJSON(object: any): UpdateRawLogsResponse;
    toJSON(message: UpdateRawLogsResponse): unknown;
    fromPartial<I extends {
        status?: RawLogsStatus | undefined;
        settings?: {
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } | undefined;
    } & {
        status?: RawLogsStatus | undefined;
        settings?: ({
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } & {
            bucketName?: string | undefined;
            bucketRegion?: string | undefined;
            filePrefix?: string | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "bucketName" | "bucketRegion" | "filePrefix">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "status" | "settings">, never>>(object: I): UpdateRawLogsResponse;
};
export declare const UpdateRawLogsMetadata: {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsMetadata";
    encode(message: UpdateRawLogsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRawLogsMetadata;
    fromJSON(object: any): UpdateRawLogsMetadata;
    toJSON(message: UpdateRawLogsMetadata): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): UpdateRawLogsMetadata;
};
export declare const RawLogsServiceService: {
    readonly activate: {
        readonly path: "/yandex.cloud.cdn.v1.RawLogsService/Activate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ActivateRawLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ActivateRawLogsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly deactivate: {
        readonly path: "/yandex.cloud.cdn.v1.RawLogsService/Deactivate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeactivateRawLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeactivateRawLogsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly get: {
        readonly path: "/yandex.cloud.cdn.v1.RawLogsService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRawLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRawLogsRequest;
        readonly responseSerialize: (value: GetRawLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetRawLogsResponse;
    };
    readonly update: {
        readonly path: "/yandex.cloud.cdn.v1.RawLogsService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRawLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRawLogsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface RawLogsServiceServer extends UntypedServiceImplementation {
    activate: handleUnaryCall<ActivateRawLogsRequest, Operation>;
    deactivate: handleUnaryCall<DeactivateRawLogsRequest, Operation>;
    get: handleUnaryCall<GetRawLogsRequest, GetRawLogsResponse>;
    update: handleUnaryCall<UpdateRawLogsRequest, Operation>;
}
export interface RawLogsServiceClient extends Client {
    activate(request: ActivateRawLogsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateRawLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateRawLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deactivate(request: DeactivateRawLogsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deactivate(request: DeactivateRawLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deactivate(request: DeactivateRawLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    get(request: GetRawLogsRequest, callback: (error: ServiceError | null, response: GetRawLogsResponse) => void): ClientUnaryCall;
    get(request: GetRawLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetRawLogsResponse) => void): ClientUnaryCall;
    get(request: GetRawLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetRawLogsResponse) => void): ClientUnaryCall;
    update(request: UpdateRawLogsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateRawLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateRawLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const RawLogsServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): RawLogsServiceClient;
    service: typeof RawLogsServiceService;
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
