/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { ApiKey } from "../../../../yandex/cloud/iam/v1/api_key";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.iam.v1";
export interface GetApiKeyRequest {
    $type: "yandex.cloud.iam.v1.GetApiKeyRequest";
    /**
     * ID of the API key to return.
     * To get the API key ID, use a [ApiKeyService.List] request.
     */
    apiKeyId: string;
}
export interface ListApiKeysRequest {
    $type: "yandex.cloud.iam.v1.ListApiKeysRequest";
    /**
     * ID of the service account to list API keys for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListApiKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListApiKeysResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListApiKeysResponse {
    $type: "yandex.cloud.iam.v1.ListApiKeysResponse";
    /** List of API keys. */
    apiKeys: ApiKey[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListApiKeysRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListApiKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateApiKeyRequest {
    $type: "yandex.cloud.iam.v1.CreateApiKeyRequest";
    /**
     * ID of the service account to create an API key for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /** Description of the API key. */
    description: string;
}
export interface CreateApiKeyResponse {
    $type: "yandex.cloud.iam.v1.CreateApiKeyResponse";
    /** ApiKey resource. */
    apiKey?: ApiKey;
    /** Secret part of the API key. This secret key you may use in the requests for authentication. */
    secret: string;
}
export interface UpdateApiKeyRequest {
    $type: "yandex.cloud.iam.v1.UpdateApiKeyRequest";
    /**
     * ID of the ApiKey resource to update.
     * To get the API key ID, use a [ApiKeyService.List] request.
     */
    apiKeyId: string;
    /** Field mask that specifies which fields of the ApiKey resource are going to be updated. */
    updateMask?: FieldMask;
    /** Description of the API key. */
    description: string;
}
export interface UpdateApiKeyMetadata {
    $type: "yandex.cloud.iam.v1.UpdateApiKeyMetadata";
    /** ID of the ApiKey resource that is being updated. */
    apiKeyId: string;
}
export interface DeleteApiKeyRequest {
    $type: "yandex.cloud.iam.v1.DeleteApiKeyRequest";
    /**
     * ID of the API key to delete.
     * To get the API key ID, use a [ApiKeyService.List] request.
     */
    apiKeyId: string;
}
export interface DeleteApiKeyMetadata {
    $type: "yandex.cloud.iam.v1.DeleteApiKeyMetadata";
    /** ID of the API key that is being deleted. */
    apiKeyId: string;
}
export interface ListApiKeyOperationsRequest {
    $type: "yandex.cloud.iam.v1.ListApiKeyOperationsRequest";
    /** ID of the key to list operations for. */
    apiKeyId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListApiKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListApiKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListApiKeyOperationsResponse {
    $type: "yandex.cloud.iam.v1.ListApiKeyOperationsResponse";
    /** List of operations for the specified API key. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListApiKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListApiKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetApiKeyRequest: {
    $type: "yandex.cloud.iam.v1.GetApiKeyRequest";
    encode(message: GetApiKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetApiKeyRequest;
    fromJSON(object: any): GetApiKeyRequest;
    toJSON(message: GetApiKeyRequest): unknown;
    fromPartial<I extends {
        apiKeyId?: string | undefined;
    } & {
        apiKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "apiKeyId">, never>>(object: I): GetApiKeyRequest;
};
export declare const ListApiKeysRequest: {
    $type: "yandex.cloud.iam.v1.ListApiKeysRequest";
    encode(message: ListApiKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListApiKeysRequest;
    fromJSON(object: any): ListApiKeysRequest;
    toJSON(message: ListApiKeysRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        serviceAccountId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        serviceAccountId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "serviceAccountId">, never>>(object: I): ListApiKeysRequest;
};
export declare const ListApiKeysResponse: {
    $type: "yandex.cloud.iam.v1.ListApiKeysResponse";
    encode(message: ListApiKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListApiKeysResponse;
    fromJSON(object: any): ListApiKeysResponse;
    toJSON(message: ListApiKeysResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        apiKeys?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        apiKeys?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
        } & Record<Exclude<keyof I["apiKeys"][number], "$type" | "description" | "id" | "createdAt" | "serviceAccountId">, never>)[] & Record<Exclude<keyof I["apiKeys"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "apiKeys">, never>>(object: I): ListApiKeysResponse;
};
export declare const CreateApiKeyRequest: {
    $type: "yandex.cloud.iam.v1.CreateApiKeyRequest";
    encode(message: CreateApiKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateApiKeyRequest;
    fromJSON(object: any): CreateApiKeyRequest;
    toJSON(message: CreateApiKeyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        serviceAccountId?: string | undefined;
    } & {
        description?: string | undefined;
        serviceAccountId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "serviceAccountId">, never>>(object: I): CreateApiKeyRequest;
};
export declare const CreateApiKeyResponse: {
    $type: "yandex.cloud.iam.v1.CreateApiKeyResponse";
    encode(message: CreateApiKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateApiKeyResponse;
    fromJSON(object: any): CreateApiKeyResponse;
    toJSON(message: CreateApiKeyResponse): unknown;
    fromPartial<I extends {
        secret?: string | undefined;
        apiKey?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
        } | undefined;
    } & {
        secret?: string | undefined;
        apiKey?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
        } & Record<Exclude<keyof I["apiKey"], "$type" | "description" | "id" | "createdAt" | "serviceAccountId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "secret" | "apiKey">, never>>(object: I): CreateApiKeyResponse;
};
export declare const UpdateApiKeyRequest: {
    $type: "yandex.cloud.iam.v1.UpdateApiKeyRequest";
    encode(message: UpdateApiKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateApiKeyRequest;
    fromJSON(object: any): UpdateApiKeyRequest;
    toJSON(message: UpdateApiKeyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        apiKeyId?: string | undefined;
    } & {
        description?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        apiKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "updateMask" | "apiKeyId">, never>>(object: I): UpdateApiKeyRequest;
};
export declare const UpdateApiKeyMetadata: {
    $type: "yandex.cloud.iam.v1.UpdateApiKeyMetadata";
    encode(message: UpdateApiKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateApiKeyMetadata;
    fromJSON(object: any): UpdateApiKeyMetadata;
    toJSON(message: UpdateApiKeyMetadata): unknown;
    fromPartial<I extends {
        apiKeyId?: string | undefined;
    } & {
        apiKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "apiKeyId">, never>>(object: I): UpdateApiKeyMetadata;
};
export declare const DeleteApiKeyRequest: {
    $type: "yandex.cloud.iam.v1.DeleteApiKeyRequest";
    encode(message: DeleteApiKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteApiKeyRequest;
    fromJSON(object: any): DeleteApiKeyRequest;
    toJSON(message: DeleteApiKeyRequest): unknown;
    fromPartial<I extends {
        apiKeyId?: string | undefined;
    } & {
        apiKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "apiKeyId">, never>>(object: I): DeleteApiKeyRequest;
};
export declare const DeleteApiKeyMetadata: {
    $type: "yandex.cloud.iam.v1.DeleteApiKeyMetadata";
    encode(message: DeleteApiKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteApiKeyMetadata;
    fromJSON(object: any): DeleteApiKeyMetadata;
    toJSON(message: DeleteApiKeyMetadata): unknown;
    fromPartial<I extends {
        apiKeyId?: string | undefined;
    } & {
        apiKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "apiKeyId">, never>>(object: I): DeleteApiKeyMetadata;
};
export declare const ListApiKeyOperationsRequest: {
    $type: "yandex.cloud.iam.v1.ListApiKeyOperationsRequest";
    encode(message: ListApiKeyOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListApiKeyOperationsRequest;
    fromJSON(object: any): ListApiKeyOperationsRequest;
    toJSON(message: ListApiKeyOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        apiKeyId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        apiKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "apiKeyId">, never>>(object: I): ListApiKeyOperationsRequest;
};
export declare const ListApiKeyOperationsResponse: {
    $type: "yandex.cloud.iam.v1.ListApiKeyOperationsResponse";
    encode(message: ListApiKeyOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListApiKeyOperationsResponse;
    fromJSON(object: any): ListApiKeyOperationsResponse;
    toJSON(message: ListApiKeyOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListApiKeyOperationsResponse;
};
/** A set of methods for managing API keys. */
export declare const ApiKeyServiceService: {
    /** Retrieves the list of API keys for the specified service account. */
    readonly list: {
        readonly path: "/yandex.cloud.iam.v1.ApiKeyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListApiKeysRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListApiKeysRequest;
        readonly responseSerialize: (value: ListApiKeysResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListApiKeysResponse;
    };
    /**
     * Returns the specified API key.
     *
     * To get the list of available API keys, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.iam.v1.ApiKeyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetApiKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetApiKeyRequest;
        readonly responseSerialize: (value: ApiKey) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ApiKey;
    };
    /** Creates an API key for the specified service account. */
    readonly create: {
        readonly path: "/yandex.cloud.iam.v1.ApiKeyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateApiKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateApiKeyRequest;
        readonly responseSerialize: (value: CreateApiKeyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateApiKeyResponse;
    };
    /** Updates the specified API key. */
    readonly update: {
        readonly path: "/yandex.cloud.iam.v1.ApiKeyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateApiKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateApiKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified API key. */
    readonly delete: {
        readonly path: "/yandex.cloud.iam.v1.ApiKeyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteApiKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteApiKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of operations for the specified API key. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.iam.v1.ApiKeyService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListApiKeyOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListApiKeyOperationsRequest;
        readonly responseSerialize: (value: ListApiKeyOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListApiKeyOperationsResponse;
    };
};
export interface ApiKeyServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of API keys for the specified service account. */
    list: handleUnaryCall<ListApiKeysRequest, ListApiKeysResponse>;
    /**
     * Returns the specified API key.
     *
     * To get the list of available API keys, make a [List] request.
     */
    get: handleUnaryCall<GetApiKeyRequest, ApiKey>;
    /** Creates an API key for the specified service account. */
    create: handleUnaryCall<CreateApiKeyRequest, CreateApiKeyResponse>;
    /** Updates the specified API key. */
    update: handleUnaryCall<UpdateApiKeyRequest, Operation>;
    /** Deletes the specified API key. */
    delete: handleUnaryCall<DeleteApiKeyRequest, Operation>;
    /** Retrieves the list of operations for the specified API key. */
    listOperations: handleUnaryCall<ListApiKeyOperationsRequest, ListApiKeyOperationsResponse>;
}
export interface ApiKeyServiceClient extends Client {
    /** Retrieves the list of API keys for the specified service account. */
    list(request: ListApiKeysRequest, callback: (error: ServiceError | null, response: ListApiKeysResponse) => void): ClientUnaryCall;
    list(request: ListApiKeysRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListApiKeysResponse) => void): ClientUnaryCall;
    list(request: ListApiKeysRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListApiKeysResponse) => void): ClientUnaryCall;
    /**
     * Returns the specified API key.
     *
     * To get the list of available API keys, make a [List] request.
     */
    get(request: GetApiKeyRequest, callback: (error: ServiceError | null, response: ApiKey) => void): ClientUnaryCall;
    get(request: GetApiKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ApiKey) => void): ClientUnaryCall;
    get(request: GetApiKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ApiKey) => void): ClientUnaryCall;
    /** Creates an API key for the specified service account. */
    create(request: CreateApiKeyRequest, callback: (error: ServiceError | null, response: CreateApiKeyResponse) => void): ClientUnaryCall;
    create(request: CreateApiKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateApiKeyResponse) => void): ClientUnaryCall;
    create(request: CreateApiKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateApiKeyResponse) => void): ClientUnaryCall;
    /** Updates the specified API key. */
    update(request: UpdateApiKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateApiKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateApiKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified API key. */
    delete(request: DeleteApiKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteApiKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteApiKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of operations for the specified API key. */
    listOperations(request: ListApiKeyOperationsRequest, callback: (error: ServiceError | null, response: ListApiKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListApiKeyOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListApiKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListApiKeyOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListApiKeyOperationsResponse) => void): ClientUnaryCall;
}
export declare const ApiKeyServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ApiKeyServiceClient;
    service: typeof ApiKeyServiceService;
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
