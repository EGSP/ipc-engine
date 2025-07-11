/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { OriginMeta, Origin } from "../../../../yandex/cloud/cdn/v1/origin";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.cdn.v1";
export interface GetOriginRequest {
    $type: "yandex.cloud.cdn.v1.GetOriginRequest";
    /** ID of the folder that the origin belongs to. */
    folderId: string;
    /** [origin_id] group ID to request origin from. */
    originId: number;
}
export interface ListOriginsRequest {
    $type: "yandex.cloud.cdn.v1.ListOriginsRequest";
    /** ID of the folder that the origin belongs to. */
    folderId: string;
    /** ID of the group to request origins from. */
    originGroupId: number;
}
export interface ListOriginsResponse {
    $type: "yandex.cloud.cdn.v1.ListOriginsResponse";
    /** Origin from response. */
    origins: Origin[];
}
export interface CreateOriginRequest {
    $type: "yandex.cloud.cdn.v1.CreateOriginRequest";
    /** ID of the folder that the origin belongs to. */
    folderId: string;
    /** [origin_group_id] group ID to request origins from. */
    originGroupId: number;
    /**
     * IP address or Domain name of your origin and the port (if custom).
     * Used if [meta] variant is `common`.
     */
    source: string;
    /**
     * The setting allows to enable or disable an Origin source in the Origins group.
     *
     * It has two possible values:
     *
     * True - The origin is enabled and used as a source for the CDN. An origins
     * group must contain at least one enabled origin. Default value.
     * False - The origin is disabled and the CDN is not using it to pull content.
     */
    enabled?: boolean;
    /**
     * Specifies whether the origin is used in its origin group as backup.
     * A backup origin is used when one of active origins becomes unavailable.
     *
     * Default value: False.
     */
    backup?: boolean;
    /** Set up origin of the content. */
    meta?: OriginMeta;
}
export interface CreateOriginMetadata {
    $type: "yandex.cloud.cdn.v1.CreateOriginMetadata";
    /** ID of the origin. */
    originId: number;
    /** ID pf the parent origins group. */
    originGroupId: number;
}
export interface UpdateOriginRequest {
    $type: "yandex.cloud.cdn.v1.UpdateOriginRequest";
    /** ID of the folder that the origin belongs to. */
    folderId: string;
    /** ID of the origin. */
    originId: number;
    /**
     * IP address or Domain name of your origin and the port (if custom).
     * Used if [meta] variant is `common`.
     * Required.
     */
    source: string;
    /**
     * The setting allows to enable or disable an Origin source in the Origins group.
     *
     * It has two possible values:
     *
     * True - The origin is enabled and used as a source for the CDN. An origins
     * group must contain at least one enabled origin. Default value.
     * False - The origin is disabled and the CDN is not using it to pull content.
     *
     * Required.
     */
    enabled: boolean;
    /**
     * Specifies whether the origin is used in its origin group as backup.
     * A backup origin is used when one of active origins becomes unavailable.
     *
     * Required.
     */
    backup: boolean;
    /** Set up type of the origin. */
    meta?: OriginMeta;
}
export interface UpdateOriginMetadata {
    $type: "yandex.cloud.cdn.v1.UpdateOriginMetadata";
    /** ID of the origin. */
    originId: number;
    /** Parent origins group ID. */
    originGroupId: number;
}
export interface DeleteOriginRequest {
    $type: "yandex.cloud.cdn.v1.DeleteOriginRequest";
    /** ID of the folder that the origin belongs to. */
    folderId: string;
    /** ID of the origin. */
    originId: number;
}
export interface DeleteOriginMetadata {
    $type: "yandex.cloud.cdn.v1.DeleteOriginMetadata";
    /** ID of the origin. */
    originId: number;
}
export declare const GetOriginRequest: {
    $type: "yandex.cloud.cdn.v1.GetOriginRequest";
    encode(message: GetOriginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOriginRequest;
    fromJSON(object: any): GetOriginRequest;
    toJSON(message: GetOriginRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        originId?: number | undefined;
    } & {
        folderId?: string | undefined;
        originId?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "originId">, never>>(object: I): GetOriginRequest;
};
export declare const ListOriginsRequest: {
    $type: "yandex.cloud.cdn.v1.ListOriginsRequest";
    encode(message: ListOriginsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOriginsRequest;
    fromJSON(object: any): ListOriginsRequest;
    toJSON(message: ListOriginsRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        originGroupId?: number | undefined;
    } & {
        folderId?: string | undefined;
        originGroupId?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "originGroupId">, never>>(object: I): ListOriginsRequest;
};
export declare const ListOriginsResponse: {
    $type: "yandex.cloud.cdn.v1.ListOriginsResponse";
    encode(message: ListOriginsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOriginsResponse;
    fromJSON(object: any): ListOriginsResponse;
    toJSON(message: ListOriginsResponse): unknown;
    fromPartial<I extends {
        origins?: {
            id?: number | undefined;
            enabled?: boolean | undefined;
            originGroupId?: number | undefined;
            source?: string | undefined;
            backup?: boolean | undefined;
            meta?: {
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        origins?: ({
            id?: number | undefined;
            enabled?: boolean | undefined;
            originGroupId?: number | undefined;
            source?: string | undefined;
            backup?: boolean | undefined;
            meta?: {
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            id?: number | undefined;
            enabled?: boolean | undefined;
            originGroupId?: number | undefined;
            source?: string | undefined;
            backup?: boolean | undefined;
            meta?: {
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            id?: number | undefined;
            enabled?: boolean | undefined;
            originGroupId?: number | undefined;
            source?: string | undefined;
            backup?: boolean | undefined;
            meta?: ({
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } & {
                bucket?: ({
                    name?: string | undefined;
                } & {
                    name?: string | undefined;
                } & Record<Exclude<keyof I["origins"][number]["meta"]["bucket"], "$type" | "name">, never>) | undefined;
                common?: ({
                    name?: string | undefined;
                } & {
                    name?: string | undefined;
                } & Record<Exclude<keyof I["origins"][number]["meta"]["common"], "$type" | "name">, never>) | undefined;
                website?: ({
                    name?: string | undefined;
                } & {
                    name?: string | undefined;
                } & Record<Exclude<keyof I["origins"][number]["meta"]["website"], "$type" | "name">, never>) | undefined;
                balancer?: ({
                    id?: string | undefined;
                } & {
                    id?: string | undefined;
                } & Record<Exclude<keyof I["origins"][number]["meta"]["balancer"], "$type" | "id">, never>) | undefined;
            } & Record<Exclude<keyof I["origins"][number]["meta"], "$type" | "bucket" | "common" | "website" | "balancer">, never>) | undefined;
        } & Record<Exclude<keyof I["origins"][number], "$type" | "id" | "enabled" | "originGroupId" | "source" | "backup" | "meta">, never>)[] & Record<Exclude<keyof I["origins"], "$type" | keyof {
            id?: number | undefined;
            enabled?: boolean | undefined;
            originGroupId?: number | undefined;
            source?: string | undefined;
            backup?: boolean | undefined;
            meta?: {
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "origins">, never>>(object: I): ListOriginsResponse;
};
export declare const CreateOriginRequest: {
    $type: "yandex.cloud.cdn.v1.CreateOriginRequest";
    encode(message: CreateOriginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateOriginRequest;
    fromJSON(object: any): CreateOriginRequest;
    toJSON(message: CreateOriginRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        enabled?: boolean | undefined;
        originGroupId?: number | undefined;
        source?: string | undefined;
        backup?: boolean | undefined;
        meta?: {
            bucket?: {
                name?: string | undefined;
            } | undefined;
            common?: {
                name?: string | undefined;
            } | undefined;
            website?: {
                name?: string | undefined;
            } | undefined;
            balancer?: {
                id?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        folderId?: string | undefined;
        enabled?: boolean | undefined;
        originGroupId?: number | undefined;
        source?: string | undefined;
        backup?: boolean | undefined;
        meta?: ({
            bucket?: {
                name?: string | undefined;
            } | undefined;
            common?: {
                name?: string | undefined;
            } | undefined;
            website?: {
                name?: string | undefined;
            } | undefined;
            balancer?: {
                id?: string | undefined;
            } | undefined;
        } & {
            bucket?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["bucket"], "$type" | "name">, never>) | undefined;
            common?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["common"], "$type" | "name">, never>) | undefined;
            website?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["website"], "$type" | "name">, never>) | undefined;
            balancer?: ({
                id?: string | undefined;
            } & {
                id?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["balancer"], "$type" | "id">, never>) | undefined;
        } & Record<Exclude<keyof I["meta"], "$type" | "bucket" | "common" | "website" | "balancer">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "enabled" | "originGroupId" | "source" | "backup" | "meta">, never>>(object: I): CreateOriginRequest;
};
export declare const CreateOriginMetadata: {
    $type: "yandex.cloud.cdn.v1.CreateOriginMetadata";
    encode(message: CreateOriginMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateOriginMetadata;
    fromJSON(object: any): CreateOriginMetadata;
    toJSON(message: CreateOriginMetadata): unknown;
    fromPartial<I extends {
        originGroupId?: number | undefined;
        originId?: number | undefined;
    } & {
        originGroupId?: number | undefined;
        originId?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "originGroupId" | "originId">, never>>(object: I): CreateOriginMetadata;
};
export declare const UpdateOriginRequest: {
    $type: "yandex.cloud.cdn.v1.UpdateOriginRequest";
    encode(message: UpdateOriginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOriginRequest;
    fromJSON(object: any): UpdateOriginRequest;
    toJSON(message: UpdateOriginRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        enabled?: boolean | undefined;
        source?: string | undefined;
        backup?: boolean | undefined;
        meta?: {
            bucket?: {
                name?: string | undefined;
            } | undefined;
            common?: {
                name?: string | undefined;
            } | undefined;
            website?: {
                name?: string | undefined;
            } | undefined;
            balancer?: {
                id?: string | undefined;
            } | undefined;
        } | undefined;
        originId?: number | undefined;
    } & {
        folderId?: string | undefined;
        enabled?: boolean | undefined;
        source?: string | undefined;
        backup?: boolean | undefined;
        meta?: ({
            bucket?: {
                name?: string | undefined;
            } | undefined;
            common?: {
                name?: string | undefined;
            } | undefined;
            website?: {
                name?: string | undefined;
            } | undefined;
            balancer?: {
                id?: string | undefined;
            } | undefined;
        } & {
            bucket?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["bucket"], "$type" | "name">, never>) | undefined;
            common?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["common"], "$type" | "name">, never>) | undefined;
            website?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["website"], "$type" | "name">, never>) | undefined;
            balancer?: ({
                id?: string | undefined;
            } & {
                id?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["balancer"], "$type" | "id">, never>) | undefined;
        } & Record<Exclude<keyof I["meta"], "$type" | "bucket" | "common" | "website" | "balancer">, never>) | undefined;
        originId?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "enabled" | "source" | "backup" | "meta" | "originId">, never>>(object: I): UpdateOriginRequest;
};
export declare const UpdateOriginMetadata: {
    $type: "yandex.cloud.cdn.v1.UpdateOriginMetadata";
    encode(message: UpdateOriginMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOriginMetadata;
    fromJSON(object: any): UpdateOriginMetadata;
    toJSON(message: UpdateOriginMetadata): unknown;
    fromPartial<I extends {
        originGroupId?: number | undefined;
        originId?: number | undefined;
    } & {
        originGroupId?: number | undefined;
        originId?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "originGroupId" | "originId">, never>>(object: I): UpdateOriginMetadata;
};
export declare const DeleteOriginRequest: {
    $type: "yandex.cloud.cdn.v1.DeleteOriginRequest";
    encode(message: DeleteOriginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteOriginRequest;
    fromJSON(object: any): DeleteOriginRequest;
    toJSON(message: DeleteOriginRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        originId?: number | undefined;
    } & {
        folderId?: string | undefined;
        originId?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "originId">, never>>(object: I): DeleteOriginRequest;
};
export declare const DeleteOriginMetadata: {
    $type: "yandex.cloud.cdn.v1.DeleteOriginMetadata";
    encode(message: DeleteOriginMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteOriginMetadata;
    fromJSON(object: any): DeleteOriginMetadata;
    toJSON(message: DeleteOriginMetadata): unknown;
    fromPartial<I extends {
        originId?: number | undefined;
    } & {
        originId?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "originId">, never>>(object: I): DeleteOriginMetadata;
};
/**
 * Origin management service.
 * Origin is not a standalone entity. It can live only within origin group.
 */
export declare const OriginServiceService: {
    /** Get origin in origin group. */
    readonly get: {
        readonly path: "/yandex.cloud.cdn.v1.OriginService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOriginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOriginRequest;
        readonly responseSerialize: (value: Origin) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Origin;
    };
    /** Lists origins of origin group. */
    readonly list: {
        readonly path: "/yandex.cloud.cdn.v1.OriginService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOriginsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOriginsRequest;
        readonly responseSerialize: (value: ListOriginsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListOriginsResponse;
    };
    /** Creates origin inside origin group. */
    readonly create: {
        readonly path: "/yandex.cloud.cdn.v1.OriginService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateOriginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateOriginRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified origin from the origin group.
     *
     * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
     * use the origin via a [CacheService.Purge] request.
     */
    readonly update: {
        readonly path: "/yandex.cloud.cdn.v1.OriginService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateOriginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateOriginRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes origin from origin group. */
    readonly delete: {
        readonly path: "/yandex.cloud.cdn.v1.OriginService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteOriginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteOriginRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface OriginServiceServer extends UntypedServiceImplementation {
    /** Get origin in origin group. */
    get: handleUnaryCall<GetOriginRequest, Origin>;
    /** Lists origins of origin group. */
    list: handleUnaryCall<ListOriginsRequest, ListOriginsResponse>;
    /** Creates origin inside origin group. */
    create: handleUnaryCall<CreateOriginRequest, Operation>;
    /**
     * Updates the specified origin from the origin group.
     *
     * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
     * use the origin via a [CacheService.Purge] request.
     */
    update: handleUnaryCall<UpdateOriginRequest, Operation>;
    /** Deletes origin from origin group. */
    delete: handleUnaryCall<DeleteOriginRequest, Operation>;
}
export interface OriginServiceClient extends Client {
    /** Get origin in origin group. */
    get(request: GetOriginRequest, callback: (error: ServiceError | null, response: Origin) => void): ClientUnaryCall;
    get(request: GetOriginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Origin) => void): ClientUnaryCall;
    get(request: GetOriginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Origin) => void): ClientUnaryCall;
    /** Lists origins of origin group. */
    list(request: ListOriginsRequest, callback: (error: ServiceError | null, response: ListOriginsResponse) => void): ClientUnaryCall;
    list(request: ListOriginsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListOriginsResponse) => void): ClientUnaryCall;
    list(request: ListOriginsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListOriginsResponse) => void): ClientUnaryCall;
    /** Creates origin inside origin group. */
    create(request: CreateOriginRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateOriginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateOriginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified origin from the origin group.
     *
     * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
     * use the origin via a [CacheService.Purge] request.
     */
    update(request: UpdateOriginRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateOriginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateOriginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes origin from origin group. */
    delete(request: DeleteOriginRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteOriginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteOriginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const OriginServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): OriginServiceClient;
    service: typeof OriginServiceService;
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
