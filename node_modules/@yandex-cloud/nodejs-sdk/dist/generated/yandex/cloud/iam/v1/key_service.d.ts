/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Key_Algorithm, Key } from "../../../../yandex/cloud/iam/v1/key";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.iam.v1";
export declare enum KeyFormat {
    /** PEM_FILE - Privacy-Enhanced Mail (PEM) format. Default value. */
    PEM_FILE = 0,
    UNRECOGNIZED = -1
}
export declare function keyFormatFromJSON(object: any): KeyFormat;
export declare function keyFormatToJSON(object: KeyFormat): string;
export interface GetKeyRequest {
    $type: "yandex.cloud.iam.v1.GetKeyRequest";
    /**
     * ID of the Key resource to return.
     * To get the ID use a [KeyService.List] request.
     */
    keyId: string;
    /** Output format of the key. */
    format: KeyFormat;
}
export interface ListKeysRequest {
    $type: "yandex.cloud.iam.v1.ListKeysRequest";
    /** Output format of the key. */
    format: KeyFormat;
    /**
     * ID of the service account to list key pairs for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListKeysResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListKeysResponse {
    $type: "yandex.cloud.iam.v1.ListKeysResponse";
    /** List of Key resources. */
    keys: Key[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListKeysRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateKeyRequest {
    $type: "yandex.cloud.iam.v1.CreateKeyRequest";
    /**
     * ID of the service account to create a key pair for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /** Description of the key pair. */
    description: string;
    /** Output format of the key. */
    format: KeyFormat;
    /** An algorithm used to generate a key pair of the Key resource. */
    keyAlgorithm: Key_Algorithm;
}
export interface CreateKeyResponse {
    $type: "yandex.cloud.iam.v1.CreateKeyResponse";
    /** Key resource. */
    key?: Key;
    /**
     * A private key of the Key resource.
     * This key must be stored securely.
     */
    privateKey: string;
}
export interface UpdateKeyRequest {
    $type: "yandex.cloud.iam.v1.UpdateKeyRequest";
    /**
     * ID of the Key resource to update.
     * To get key pair ID, use a [KeyService.List] request.
     */
    keyId: string;
    /** Field mask that specifies which fields of the Key resource are going to be updated. */
    updateMask?: FieldMask;
    /** Description of the key pair. */
    description: string;
}
export interface UpdateKeyMetadata {
    $type: "yandex.cloud.iam.v1.UpdateKeyMetadata";
    /** ID of the Key resource that is being updated. */
    keyId: string;
}
export interface DeleteKeyRequest {
    $type: "yandex.cloud.iam.v1.DeleteKeyRequest";
    /**
     * ID of the key to delete.
     * To get key ID use a [KeyService.List] request.
     */
    keyId: string;
}
export interface DeleteKeyMetadata {
    $type: "yandex.cloud.iam.v1.DeleteKeyMetadata";
    /** ID of the key that is being deleted. */
    keyId: string;
}
export interface ListKeyOperationsRequest {
    $type: "yandex.cloud.iam.v1.ListKeyOperationsRequest";
    /** ID of the key to list operations for. */
    keyId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListKeyOperationsResponse {
    $type: "yandex.cloud.iam.v1.ListKeyOperationsResponse";
    /** List of operations for the specified key. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetKeyRequest: {
    $type: "yandex.cloud.iam.v1.GetKeyRequest";
    encode(message: GetKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetKeyRequest;
    fromJSON(object: any): GetKeyRequest;
    toJSON(message: GetKeyRequest): unknown;
    fromPartial<I extends {
        format?: KeyFormat | undefined;
        keyId?: string | undefined;
    } & {
        format?: KeyFormat | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "format" | "keyId">, never>>(object: I): GetKeyRequest;
};
export declare const ListKeysRequest: {
    $type: "yandex.cloud.iam.v1.ListKeysRequest";
    encode(message: ListKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListKeysRequest;
    fromJSON(object: any): ListKeysRequest;
    toJSON(message: ListKeysRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        format?: KeyFormat | undefined;
        serviceAccountId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        format?: KeyFormat | undefined;
        serviceAccountId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "format" | "serviceAccountId">, never>>(object: I): ListKeysRequest;
};
export declare const ListKeysResponse: {
    $type: "yandex.cloud.iam.v1.ListKeysResponse";
    encode(message: ListKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListKeysResponse;
    fromJSON(object: any): ListKeysResponse;
    toJSON(message: ListKeysResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        keys?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyAlgorithm?: Key_Algorithm | undefined;
            publicKey?: string | undefined;
            userAccountId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        keys?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyAlgorithm?: Key_Algorithm | undefined;
            publicKey?: string | undefined;
            userAccountId?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyAlgorithm?: Key_Algorithm | undefined;
            publicKey?: string | undefined;
            userAccountId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyAlgorithm?: Key_Algorithm | undefined;
            publicKey?: string | undefined;
            userAccountId?: string | undefined;
        } & Record<Exclude<keyof I["keys"][number], "$type" | "description" | "id" | "createdAt" | "serviceAccountId" | "keyAlgorithm" | "publicKey" | "userAccountId">, never>)[] & Record<Exclude<keyof I["keys"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyAlgorithm?: Key_Algorithm | undefined;
            publicKey?: string | undefined;
            userAccountId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "keys">, never>>(object: I): ListKeysResponse;
};
export declare const CreateKeyRequest: {
    $type: "yandex.cloud.iam.v1.CreateKeyRequest";
    encode(message: CreateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateKeyRequest;
    fromJSON(object: any): CreateKeyRequest;
    toJSON(message: CreateKeyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        format?: KeyFormat | undefined;
        serviceAccountId?: string | undefined;
        keyAlgorithm?: Key_Algorithm | undefined;
    } & {
        description?: string | undefined;
        format?: KeyFormat | undefined;
        serviceAccountId?: string | undefined;
        keyAlgorithm?: Key_Algorithm | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "format" | "serviceAccountId" | "keyAlgorithm">, never>>(object: I): CreateKeyRequest;
};
export declare const CreateKeyResponse: {
    $type: "yandex.cloud.iam.v1.CreateKeyResponse";
    encode(message: CreateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateKeyResponse;
    fromJSON(object: any): CreateKeyResponse;
    toJSON(message: CreateKeyResponse): unknown;
    fromPartial<I extends {
        key?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyAlgorithm?: Key_Algorithm | undefined;
            publicKey?: string | undefined;
            userAccountId?: string | undefined;
        } | undefined;
        privateKey?: string | undefined;
    } & {
        key?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyAlgorithm?: Key_Algorithm | undefined;
            publicKey?: string | undefined;
            userAccountId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            serviceAccountId?: string | undefined;
            keyAlgorithm?: Key_Algorithm | undefined;
            publicKey?: string | undefined;
            userAccountId?: string | undefined;
        } & Record<Exclude<keyof I["key"], "$type" | "description" | "id" | "createdAt" | "serviceAccountId" | "keyAlgorithm" | "publicKey" | "userAccountId">, never>) | undefined;
        privateKey?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "key" | "privateKey">, never>>(object: I): CreateKeyResponse;
};
export declare const UpdateKeyRequest: {
    $type: "yandex.cloud.iam.v1.UpdateKeyRequest";
    encode(message: UpdateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateKeyRequest;
    fromJSON(object: any): UpdateKeyRequest;
    toJSON(message: UpdateKeyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        keyId?: string | undefined;
    } & {
        description?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "updateMask" | "keyId">, never>>(object: I): UpdateKeyRequest;
};
export declare const UpdateKeyMetadata: {
    $type: "yandex.cloud.iam.v1.UpdateKeyMetadata";
    encode(message: UpdateKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateKeyMetadata;
    fromJSON(object: any): UpdateKeyMetadata;
    toJSON(message: UpdateKeyMetadata): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): UpdateKeyMetadata;
};
export declare const DeleteKeyRequest: {
    $type: "yandex.cloud.iam.v1.DeleteKeyRequest";
    encode(message: DeleteKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteKeyRequest;
    fromJSON(object: any): DeleteKeyRequest;
    toJSON(message: DeleteKeyRequest): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): DeleteKeyRequest;
};
export declare const DeleteKeyMetadata: {
    $type: "yandex.cloud.iam.v1.DeleteKeyMetadata";
    encode(message: DeleteKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteKeyMetadata;
    fromJSON(object: any): DeleteKeyMetadata;
    toJSON(message: DeleteKeyMetadata): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): DeleteKeyMetadata;
};
export declare const ListKeyOperationsRequest: {
    $type: "yandex.cloud.iam.v1.ListKeyOperationsRequest";
    encode(message: ListKeyOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListKeyOperationsRequest;
    fromJSON(object: any): ListKeyOperationsRequest;
    toJSON(message: ListKeyOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        keyId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "keyId">, never>>(object: I): ListKeyOperationsRequest;
};
export declare const ListKeyOperationsResponse: {
    $type: "yandex.cloud.iam.v1.ListKeyOperationsResponse";
    encode(message: ListKeyOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListKeyOperationsResponse;
    fromJSON(object: any): ListKeyOperationsResponse;
    toJSON(message: ListKeyOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListKeyOperationsResponse;
};
/** A set of methods for managing Key resources. */
export declare const KeyServiceService: {
    /**
     * Returns the specified Key resource.
     *
     * To get the list of available Key resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetKeyRequest;
        readonly responseSerialize: (value: Key) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Key;
    };
    /** Retrieves the list of Key resources for the specified service account. */
    readonly list: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListKeysRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListKeysRequest;
        readonly responseSerialize: (value: ListKeysResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListKeysResponse;
    };
    /** Creates a key pair for the specified service account. */
    readonly create: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateKeyRequest;
        readonly responseSerialize: (value: CreateKeyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateKeyResponse;
    };
    /** Updates the specified key pair. */
    readonly update: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified key pair. */
    readonly delete: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified key. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListKeyOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListKeyOperationsRequest;
        readonly responseSerialize: (value: ListKeyOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListKeyOperationsResponse;
    };
};
export interface KeyServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Key resource.
     *
     * To get the list of available Key resources, make a [List] request.
     */
    get: handleUnaryCall<GetKeyRequest, Key>;
    /** Retrieves the list of Key resources for the specified service account. */
    list: handleUnaryCall<ListKeysRequest, ListKeysResponse>;
    /** Creates a key pair for the specified service account. */
    create: handleUnaryCall<CreateKeyRequest, CreateKeyResponse>;
    /** Updates the specified key pair. */
    update: handleUnaryCall<UpdateKeyRequest, Operation>;
    /** Deletes the specified key pair. */
    delete: handleUnaryCall<DeleteKeyRequest, Operation>;
    /** Lists operations for the specified key. */
    listOperations: handleUnaryCall<ListKeyOperationsRequest, ListKeyOperationsResponse>;
}
export interface KeyServiceClient extends Client {
    /**
     * Returns the specified Key resource.
     *
     * To get the list of available Key resources, make a [List] request.
     */
    get(request: GetKeyRequest, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    get(request: GetKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    get(request: GetKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    /** Retrieves the list of Key resources for the specified service account. */
    list(request: ListKeysRequest, callback: (error: ServiceError | null, response: ListKeysResponse) => void): ClientUnaryCall;
    list(request: ListKeysRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListKeysResponse) => void): ClientUnaryCall;
    list(request: ListKeysRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListKeysResponse) => void): ClientUnaryCall;
    /** Creates a key pair for the specified service account. */
    create(request: CreateKeyRequest, callback: (error: ServiceError | null, response: CreateKeyResponse) => void): ClientUnaryCall;
    create(request: CreateKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateKeyResponse) => void): ClientUnaryCall;
    create(request: CreateKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateKeyResponse) => void): ClientUnaryCall;
    /** Updates the specified key pair. */
    update(request: UpdateKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified key pair. */
    delete(request: DeleteKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified key. */
    listOperations(request: ListKeyOperationsRequest, callback: (error: ServiceError | null, response: ListKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListKeyOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListKeyOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListKeyOperationsResponse) => void): ClientUnaryCall;
}
export declare const KeyServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): KeyServiceClient;
    service: typeof KeyServiceService;
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
