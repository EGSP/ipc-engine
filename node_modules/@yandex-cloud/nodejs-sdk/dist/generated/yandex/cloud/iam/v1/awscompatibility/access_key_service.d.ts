/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { AccessKey } from "../../../../../yandex/cloud/iam/v1/awscompatibility/access_key";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.iam.v1.awscompatibility";
export interface GetAccessKeyRequest {
    $type: "yandex.cloud.iam.v1.awscompatibility.GetAccessKeyRequest";
    /**
     * ID of the AccessKey resource to return.
     * To get the access key ID, use a [AccessKeyService.List] request.
     */
    accessKeyId: string;
}
export interface ListAccessKeysRequest {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysRequest";
    /**
     * ID of the service account to list access keys for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListAccessKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListAccessKeysResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListAccessKeysResponse {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysResponse";
    /** List of access keys. */
    accessKeys: AccessKey[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAccessKeysRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListAccessKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateAccessKeyRequest {
    $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyRequest";
    /**
     * ID of the service account to create an access key for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /** Description of the access key. */
    description: string;
}
export interface CreateAccessKeyResponse {
    $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyResponse";
    /** AccessKey resource. */
    accessKey?: AccessKey;
    /**
     * Secret access key.
     * The key is AWS compatible.
     */
    secret: string;
}
export interface UpdateAccessKeyRequest {
    $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyRequest";
    /**
     * ID of the AccessKey resource to update.
     * To get the access key ID, use a [AccessKeyService.List] request.
     */
    accessKeyId: string;
    /** Field mask that specifies which fields of the Accesskey resource are going to be updated. */
    updateMask?: FieldMask;
    /** Description of the access key. */
    description: string;
}
export interface UpdateAccessKeyMetadata {
    $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyMetadata";
    /** ID of the AccessKey resource that is being updated. */
    accessKeyId: string;
}
export interface DeleteAccessKeyRequest {
    $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyRequest";
    /**
     * ID of the access key to delete.
     * To get the access key ID, use a [AccessKeyService.List] request.
     */
    accessKeyId: string;
}
export interface DeleteAccessKeyMetadata {
    $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyMetadata";
    /** ID of the access key that is being deleted. */
    accessKeyId: string;
}
export interface ListAccessKeyOperationsRequest {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsRequest";
    /** ID of the key to list operations for. */
    accessKeyId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListAccessKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListAccessKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListAccessKeyOperationsResponse {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsResponse";
    /** List of operations for the specified access key. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAccessKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListAccessKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetAccessKeyRequest: {
    $type: "yandex.cloud.iam.v1.awscompatibility.GetAccessKeyRequest";
    encode(message: GetAccessKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAccessKeyRequest;
    fromJSON(object: any): GetAccessKeyRequest;
    toJSON(message: GetAccessKeyRequest): unknown;
    fromPartial<I extends {
        accessKeyId?: string | undefined;
    } & {
        accessKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "accessKeyId">, never>>(object: I): GetAccessKeyRequest;
};
export declare const ListAccessKeysRequest: {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysRequest";
    encode(message: ListAccessKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAccessKeysRequest;
    fromJSON(object: any): ListAccessKeysRequest;
    toJSON(message: ListAccessKeysRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        serviceAccountId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        serviceAccountId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "serviceAccountId">, never>>(object: I): ListAccessKeysRequest;
};
export declare const ListAccessKeysResponse: {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysResponse";
    encode(message: ListAccessKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAccessKeysResponse;
    fromJSON(object: any): ListAccessKeysResponse;
    toJSON(message: ListAccessKeysResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        accessKeys?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        accessKeys?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyId?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyId?: string | undefined;
        } & Record<Exclude<keyof I["accessKeys"][number], "$type" | "description" | "id" | "createdAt" | "serviceAccountId" | "keyId">, never>)[] & Record<Exclude<keyof I["accessKeys"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "accessKeys">, never>>(object: I): ListAccessKeysResponse;
};
export declare const CreateAccessKeyRequest: {
    $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyRequest";
    encode(message: CreateAccessKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAccessKeyRequest;
    fromJSON(object: any): CreateAccessKeyRequest;
    toJSON(message: CreateAccessKeyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        serviceAccountId?: string | undefined;
    } & {
        description?: string | undefined;
        serviceAccountId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "serviceAccountId">, never>>(object: I): CreateAccessKeyRequest;
};
export declare const CreateAccessKeyResponse: {
    $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyResponse";
    encode(message: CreateAccessKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAccessKeyResponse;
    fromJSON(object: any): CreateAccessKeyResponse;
    toJSON(message: CreateAccessKeyResponse): unknown;
    fromPartial<I extends {
        secret?: string | undefined;
        accessKey?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyId?: string | undefined;
        } | undefined;
    } & {
        secret?: string | undefined;
        accessKey?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyId?: string | undefined;
        } & Record<Exclude<keyof I["accessKey"], "$type" | "description" | "id" | "createdAt" | "serviceAccountId" | "keyId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "secret" | "accessKey">, never>>(object: I): CreateAccessKeyResponse;
};
export declare const UpdateAccessKeyRequest: {
    $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyRequest";
    encode(message: UpdateAccessKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAccessKeyRequest;
    fromJSON(object: any): UpdateAccessKeyRequest;
    toJSON(message: UpdateAccessKeyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        accessKeyId?: string | undefined;
    } & {
        description?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        accessKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "updateMask" | "accessKeyId">, never>>(object: I): UpdateAccessKeyRequest;
};
export declare const UpdateAccessKeyMetadata: {
    $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyMetadata";
    encode(message: UpdateAccessKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAccessKeyMetadata;
    fromJSON(object: any): UpdateAccessKeyMetadata;
    toJSON(message: UpdateAccessKeyMetadata): unknown;
    fromPartial<I extends {
        accessKeyId?: string | undefined;
    } & {
        accessKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "accessKeyId">, never>>(object: I): UpdateAccessKeyMetadata;
};
export declare const DeleteAccessKeyRequest: {
    $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyRequest";
    encode(message: DeleteAccessKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAccessKeyRequest;
    fromJSON(object: any): DeleteAccessKeyRequest;
    toJSON(message: DeleteAccessKeyRequest): unknown;
    fromPartial<I extends {
        accessKeyId?: string | undefined;
    } & {
        accessKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "accessKeyId">, never>>(object: I): DeleteAccessKeyRequest;
};
export declare const DeleteAccessKeyMetadata: {
    $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyMetadata";
    encode(message: DeleteAccessKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAccessKeyMetadata;
    fromJSON(object: any): DeleteAccessKeyMetadata;
    toJSON(message: DeleteAccessKeyMetadata): unknown;
    fromPartial<I extends {
        accessKeyId?: string | undefined;
    } & {
        accessKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "accessKeyId">, never>>(object: I): DeleteAccessKeyMetadata;
};
export declare const ListAccessKeyOperationsRequest: {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsRequest";
    encode(message: ListAccessKeyOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAccessKeyOperationsRequest;
    fromJSON(object: any): ListAccessKeyOperationsRequest;
    toJSON(message: ListAccessKeyOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        accessKeyId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        accessKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "accessKeyId">, never>>(object: I): ListAccessKeyOperationsRequest;
};
export declare const ListAccessKeyOperationsResponse: {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsResponse";
    encode(message: ListAccessKeyOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAccessKeyOperationsResponse;
    fromJSON(object: any): ListAccessKeyOperationsResponse;
    toJSON(message: ListAccessKeyOperationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        operations?: {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        operations?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["metadata"], "$type" | "typeUrl" | "value">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["operations"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["operations"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["operations"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            response?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["response"], "$type" | "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["operations"][number], "$type" | "description" | "id" | "createdBy" | "done" | "createdAt" | "modifiedAt" | "metadata" | "error" | "response">, never>)[] & Record<Exclude<keyof I["operations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListAccessKeyOperationsResponse;
};
/** A set of methods for managing access keys. */
export declare const AccessKeyServiceService: {
    /** Retrieves the list of access keys for the specified service account. */
    readonly list: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessKeysRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessKeysRequest;
        readonly responseSerialize: (value: ListAccessKeysResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessKeysResponse;
    };
    /**
     * Returns the specified access key.
     *
     * To get the list of available access keys, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAccessKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAccessKeyRequest;
        readonly responseSerialize: (value: AccessKey) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AccessKey;
    };
    /** Creates an access key for the specified service account. */
    readonly create: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateAccessKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateAccessKeyRequest;
        readonly responseSerialize: (value: CreateAccessKeyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateAccessKeyResponse;
    };
    /** Updates the specified access key. */
    readonly update: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified access key. */
    readonly delete: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteAccessKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteAccessKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of operations for the specified access key. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessKeyOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessKeyOperationsRequest;
        readonly responseSerialize: (value: ListAccessKeyOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessKeyOperationsResponse;
    };
};
export interface AccessKeyServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of access keys for the specified service account. */
    list: handleUnaryCall<ListAccessKeysRequest, ListAccessKeysResponse>;
    /**
     * Returns the specified access key.
     *
     * To get the list of available access keys, make a [List] request.
     */
    get: handleUnaryCall<GetAccessKeyRequest, AccessKey>;
    /** Creates an access key for the specified service account. */
    create: handleUnaryCall<CreateAccessKeyRequest, CreateAccessKeyResponse>;
    /** Updates the specified access key. */
    update: handleUnaryCall<UpdateAccessKeyRequest, Operation>;
    /** Deletes the specified access key. */
    delete: handleUnaryCall<DeleteAccessKeyRequest, Operation>;
    /** Retrieves the list of operations for the specified access key. */
    listOperations: handleUnaryCall<ListAccessKeyOperationsRequest, ListAccessKeyOperationsResponse>;
}
export interface AccessKeyServiceClient extends Client {
    /** Retrieves the list of access keys for the specified service account. */
    list(request: ListAccessKeysRequest, callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void): ClientUnaryCall;
    list(request: ListAccessKeysRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void): ClientUnaryCall;
    list(request: ListAccessKeysRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void): ClientUnaryCall;
    /**
     * Returns the specified access key.
     *
     * To get the list of available access keys, make a [List] request.
     */
    get(request: GetAccessKeyRequest, callback: (error: ServiceError | null, response: AccessKey) => void): ClientUnaryCall;
    get(request: GetAccessKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AccessKey) => void): ClientUnaryCall;
    get(request: GetAccessKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AccessKey) => void): ClientUnaryCall;
    /** Creates an access key for the specified service account. */
    create(request: CreateAccessKeyRequest, callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void): ClientUnaryCall;
    create(request: CreateAccessKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void): ClientUnaryCall;
    create(request: CreateAccessKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void): ClientUnaryCall;
    /** Updates the specified access key. */
    update(request: UpdateAccessKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateAccessKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateAccessKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified access key. */
    delete(request: DeleteAccessKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAccessKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAccessKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of operations for the specified access key. */
    listOperations(request: ListAccessKeyOperationsRequest, callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListAccessKeyOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListAccessKeyOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void): ClientUnaryCall;
}
export declare const AccessKeyServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): AccessKeyServiceClient;
    service: typeof AccessKeyServiceService;
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
