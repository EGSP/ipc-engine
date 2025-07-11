/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Instance } from "../../../../../yandex/cloud/marketplace/licensemanager/v1/instance";
export declare const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";
export interface GetInstanceRequest {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetInstanceRequest";
    instanceId: string;
}
export interface ListInstancesRequest {
    $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesRequest";
    folderId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
    orderBy: string;
}
export interface ListInstancesResponse {
    $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesResponse";
    instances: Instance[];
    nextPageToken: string;
}
export declare const GetInstanceRequest: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetInstanceRequest";
    encode(message: GetInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInstanceRequest;
    fromJSON(object: any): GetInstanceRequest;
    toJSON(message: GetInstanceRequest): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): GetInstanceRequest;
};
export declare const ListInstancesRequest: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesRequest";
    encode(message: ListInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstancesRequest;
    fromJSON(object: any): ListInstancesRequest;
    toJSON(message: ListInstancesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        orderBy?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        orderBy?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "orderBy">, never>>(object: I): ListInstancesRequest;
};
export declare const ListInstancesResponse: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesResponse";
    encode(message: ListInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstancesResponse;
    fromJSON(object: any): ListInstancesResponse;
    toJSON(message: ListInstancesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        instances?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            updatedAt?: Date | undefined;
            cloudId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/instance").Instance_State | undefined;
            templateId?: string | undefined;
            templateVersionId?: string | undefined;
            locks?: {
                id?: string | undefined;
                resourceId?: string | undefined;
                createdAt?: Date | undefined;
                startTime?: Date | undefined;
                endTime?: Date | undefined;
                updatedAt?: Date | undefined;
                instanceId?: string | undefined;
                state?: import("./lock").Lock_State | undefined;
            }[] | undefined;
            licenseTemplate?: {
                id?: string | undefined;
                name?: string | undefined;
                createdAt?: Date | undefined;
                updatedAt?: Date | undefined;
                versionId?: string | undefined;
                state?: import("./template").Template_State | undefined;
                publisherId?: string | undefined;
                productId?: string | undefined;
                tariffId?: string | undefined;
                licenseSkuId?: string | undefined;
                period?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        instances?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            updatedAt?: Date | undefined;
            cloudId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/instance").Instance_State | undefined;
            templateId?: string | undefined;
            templateVersionId?: string | undefined;
            locks?: {
                id?: string | undefined;
                resourceId?: string | undefined;
                createdAt?: Date | undefined;
                startTime?: Date | undefined;
                endTime?: Date | undefined;
                updatedAt?: Date | undefined;
                instanceId?: string | undefined;
                state?: import("./lock").Lock_State | undefined;
            }[] | undefined;
            licenseTemplate?: {
                id?: string | undefined;
                name?: string | undefined;
                createdAt?: Date | undefined;
                updatedAt?: Date | undefined;
                versionId?: string | undefined;
                state?: import("./template").Template_State | undefined;
                publisherId?: string | undefined;
                productId?: string | undefined;
                tariffId?: string | undefined;
                licenseSkuId?: string | undefined;
                period?: string | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            updatedAt?: Date | undefined;
            cloudId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/instance").Instance_State | undefined;
            templateId?: string | undefined;
            templateVersionId?: string | undefined;
            locks?: {
                id?: string | undefined;
                resourceId?: string | undefined;
                createdAt?: Date | undefined;
                startTime?: Date | undefined;
                endTime?: Date | undefined;
                updatedAt?: Date | undefined;
                instanceId?: string | undefined;
                state?: import("./lock").Lock_State | undefined;
            }[] | undefined;
            licenseTemplate?: {
                id?: string | undefined;
                name?: string | undefined;
                createdAt?: Date | undefined;
                updatedAt?: Date | undefined;
                versionId?: string | undefined;
                state?: import("./template").Template_State | undefined;
                publisherId?: string | undefined;
                productId?: string | undefined;
                tariffId?: string | undefined;
                licenseSkuId?: string | undefined;
                period?: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            updatedAt?: Date | undefined;
            cloudId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/instance").Instance_State | undefined;
            templateId?: string | undefined;
            templateVersionId?: string | undefined;
            locks?: ({
                id?: string | undefined;
                resourceId?: string | undefined;
                createdAt?: Date | undefined;
                startTime?: Date | undefined;
                endTime?: Date | undefined;
                updatedAt?: Date | undefined;
                instanceId?: string | undefined;
                state?: import("./lock").Lock_State | undefined;
            }[] & ({
                id?: string | undefined;
                resourceId?: string | undefined;
                createdAt?: Date | undefined;
                startTime?: Date | undefined;
                endTime?: Date | undefined;
                updatedAt?: Date | undefined;
                instanceId?: string | undefined;
                state?: import("./lock").Lock_State | undefined;
            } & {
                id?: string | undefined;
                resourceId?: string | undefined;
                createdAt?: Date | undefined;
                startTime?: Date | undefined;
                endTime?: Date | undefined;
                updatedAt?: Date | undefined;
                instanceId?: string | undefined;
                state?: import("./lock").Lock_State | undefined;
            } & Record<Exclude<keyof I["instances"][number]["locks"][number], "$type" | "id" | "resourceId" | "createdAt" | "startTime" | "endTime" | "updatedAt" | "instanceId" | "state">, never>)[] & Record<Exclude<keyof I["instances"][number]["locks"], "$type" | keyof {
                id?: string | undefined;
                resourceId?: string | undefined;
                createdAt?: Date | undefined;
                startTime?: Date | undefined;
                endTime?: Date | undefined;
                updatedAt?: Date | undefined;
                instanceId?: string | undefined;
                state?: import("./lock").Lock_State | undefined;
            }[]>, never>) | undefined;
            licenseTemplate?: ({
                id?: string | undefined;
                name?: string | undefined;
                createdAt?: Date | undefined;
                updatedAt?: Date | undefined;
                versionId?: string | undefined;
                state?: import("./template").Template_State | undefined;
                publisherId?: string | undefined;
                productId?: string | undefined;
                tariffId?: string | undefined;
                licenseSkuId?: string | undefined;
                period?: string | undefined;
            } & {
                id?: string | undefined;
                name?: string | undefined;
                createdAt?: Date | undefined;
                updatedAt?: Date | undefined;
                versionId?: string | undefined;
                state?: import("./template").Template_State | undefined;
                publisherId?: string | undefined;
                productId?: string | undefined;
                tariffId?: string | undefined;
                licenseSkuId?: string | undefined;
                period?: string | undefined;
            } & Record<Exclude<keyof I["instances"][number]["licenseTemplate"], "$type" | "id" | "name" | "createdAt" | "updatedAt" | "versionId" | "state" | "publisherId" | "productId" | "tariffId" | "licenseSkuId" | "period">, never>) | undefined;
        } & Record<Exclude<keyof I["instances"][number], "$type" | "description" | "id" | "createdAt" | "folderId" | "startTime" | "endTime" | "updatedAt" | "cloudId" | "state" | "templateId" | "templateVersionId" | "locks" | "licenseTemplate">, never>)[] & Record<Exclude<keyof I["instances"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            updatedAt?: Date | undefined;
            cloudId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/instance").Instance_State | undefined;
            templateId?: string | undefined;
            templateVersionId?: string | undefined;
            locks?: {
                id?: string | undefined;
                resourceId?: string | undefined;
                createdAt?: Date | undefined;
                startTime?: Date | undefined;
                endTime?: Date | undefined;
                updatedAt?: Date | undefined;
                instanceId?: string | undefined;
                state?: import("./lock").Lock_State | undefined;
            }[] | undefined;
            licenseTemplate?: {
                id?: string | undefined;
                name?: string | undefined;
                createdAt?: Date | undefined;
                updatedAt?: Date | undefined;
                versionId?: string | undefined;
                state?: import("./template").Template_State | undefined;
                publisherId?: string | undefined;
                productId?: string | undefined;
                tariffId?: string | undefined;
                licenseSkuId?: string | undefined;
                period?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "instances">, never>>(object: I): ListInstancesResponse;
};
export declare const InstanceServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.marketplace.licensemanager.v1.InstanceService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetInstanceRequest;
        readonly responseSerialize: (value: Instance) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Instance;
    };
    readonly list: {
        readonly path: "/yandex.cloud.marketplace.licensemanager.v1.InstanceService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstancesRequest;
        readonly responseSerialize: (value: ListInstancesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstancesResponse;
    };
};
export interface InstanceServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetInstanceRequest, Instance>;
    list: handleUnaryCall<ListInstancesRequest, ListInstancesResponse>;
}
export interface InstanceServiceClient extends Client {
    get(request: GetInstanceRequest, callback: (error: ServiceError | null, response: Instance) => void): ClientUnaryCall;
    get(request: GetInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Instance) => void): ClientUnaryCall;
    get(request: GetInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Instance) => void): ClientUnaryCall;
    list(request: ListInstancesRequest, callback: (error: ServiceError | null, response: ListInstancesResponse) => void): ClientUnaryCall;
    list(request: ListInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstancesResponse) => void): ClientUnaryCall;
    list(request: ListInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstancesResponse) => void): ClientUnaryCall;
}
export declare const InstanceServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): InstanceServiceClient;
    service: typeof InstanceServiceService;
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
