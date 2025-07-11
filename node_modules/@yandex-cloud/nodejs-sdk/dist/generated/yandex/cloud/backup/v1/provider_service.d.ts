/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.backup.v1";
export interface ActivateProviderRequest {
    $type: "yandex.cloud.backup.v1.ActivateProviderRequest";
    /** Activate provider for Folder iD. */
    folderId: string;
    /**
     * Activate specific provider by name.
     *
     * For more information, please see [activate-provider](/docs/backup/quickstart#activate-provider)
     */
    name: string;
}
export interface ActivateProviderMetadata {
    $type: "yandex.cloud.backup.v1.ActivateProviderMetadata";
    /** Activate provider for folder specified by ID. */
    folderId: string;
}
export interface ListActivatedProvidersRequest {
    $type: "yandex.cloud.backup.v1.ListActivatedProvidersRequest";
    /** ID of the folder to find out the backup provider. */
    folderId: string;
}
export interface ListActivatedProvidersResponse {
    $type: "yandex.cloud.backup.v1.ListActivatedProvidersResponse";
    /** Folder ID. */
    folderId: string;
    /** Name of the backup provider. */
    names: string[];
}
export declare const ActivateProviderRequest: {
    $type: "yandex.cloud.backup.v1.ActivateProviderRequest";
    encode(message: ActivateProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateProviderRequest;
    fromJSON(object: any): ActivateProviderRequest;
    toJSON(message: ActivateProviderRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        folderId?: string | undefined;
    } & {
        name?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "folderId">, never>>(object: I): ActivateProviderRequest;
};
export declare const ActivateProviderMetadata: {
    $type: "yandex.cloud.backup.v1.ActivateProviderMetadata";
    encode(message: ActivateProviderMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateProviderMetadata;
    fromJSON(object: any): ActivateProviderMetadata;
    toJSON(message: ActivateProviderMetadata): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
    } & {
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId">, never>>(object: I): ActivateProviderMetadata;
};
export declare const ListActivatedProvidersRequest: {
    $type: "yandex.cloud.backup.v1.ListActivatedProvidersRequest";
    encode(message: ListActivatedProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListActivatedProvidersRequest;
    fromJSON(object: any): ListActivatedProvidersRequest;
    toJSON(message: ListActivatedProvidersRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
    } & {
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId">, never>>(object: I): ListActivatedProvidersRequest;
};
export declare const ListActivatedProvidersResponse: {
    $type: "yandex.cloud.backup.v1.ListActivatedProvidersResponse";
    encode(message: ListActivatedProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListActivatedProvidersResponse;
    fromJSON(object: any): ListActivatedProvidersResponse;
    toJSON(message: ListActivatedProvidersResponse): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        names?: string[] | undefined;
    } & {
        folderId?: string | undefined;
        names?: (string[] & string[] & Record<Exclude<keyof I["names"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "names">, never>>(object: I): ListActivatedProvidersResponse;
};
/** A set of methods for managing [backup providers](/docs/backup/concepts/#providers). */
export declare const ProviderServiceService: {
    /** Activate provider for specified client. */
    readonly activate: {
        readonly path: "/yandex.cloud.backup.v1.ProviderService/Activate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ActivateProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ActivateProviderRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List activated providers for specified client. */
    readonly listActivated: {
        readonly path: "/yandex.cloud.backup.v1.ProviderService/ListActivated";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListActivatedProvidersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListActivatedProvidersRequest;
        readonly responseSerialize: (value: ListActivatedProvidersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListActivatedProvidersResponse;
    };
};
export interface ProviderServiceServer extends UntypedServiceImplementation {
    /** Activate provider for specified client. */
    activate: handleUnaryCall<ActivateProviderRequest, Operation>;
    /** List activated providers for specified client. */
    listActivated: handleUnaryCall<ListActivatedProvidersRequest, ListActivatedProvidersResponse>;
}
export interface ProviderServiceClient extends Client {
    /** Activate provider for specified client. */
    activate(request: ActivateProviderRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List activated providers for specified client. */
    listActivated(request: ListActivatedProvidersRequest, callback: (error: ServiceError | null, response: ListActivatedProvidersResponse) => void): ClientUnaryCall;
    listActivated(request: ListActivatedProvidersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListActivatedProvidersResponse) => void): ClientUnaryCall;
    listActivated(request: ListActivatedProvidersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListActivatedProvidersResponse) => void): ClientUnaryCall;
}
export declare const ProviderServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ProviderServiceClient;
    service: typeof ProviderServiceService;
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
