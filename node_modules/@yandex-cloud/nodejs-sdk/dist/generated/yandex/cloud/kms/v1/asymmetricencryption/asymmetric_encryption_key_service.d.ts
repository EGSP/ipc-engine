/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { AsymmetricEncryptionAlgorithm, AsymmetricEncryptionKey_Status, AsymmetricEncryptionKey } from "../../../../../yandex/cloud/kms/v1/asymmetricencryption/asymmetric_encryption_key";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.kms.v1.asymmetricencryption";
export interface CreateAsymmetricEncryptionKeyRequest {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest";
    /** ID of the folder to create a asymmetric KMS key in. */
    folderId: string;
    /** Name of the key. */
    name: string;
    /** Description of the key. */
    description: string;
    /**
     * Custom labels for the asymmetric KMS key as `key:value` pairs. Maximum 64 per key.
     * For example, `"project": "mvp"` or `"source": "dictionary"`.
     */
    labels: {
        [key: string]: string;
    };
    /** Asymmetric encryption algorithm. */
    encryptionAlgorithm: AsymmetricEncryptionAlgorithm;
    /** Flag that inhibits deletion of the symmetric KMS key */
    deletionProtection: boolean;
}
export interface CreateAsymmetricEncryptionKeyRequest_LabelsEntry {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateAsymmetricEncryptionKeyMetadata {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyMetadata";
    /** ID of the key being created. */
    keyId: string;
}
export interface GetAsymmetricEncryptionKeyRequest {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.GetAsymmetricEncryptionKeyRequest";
    /**
     * ID of the asymmetric KMS key to return.
     * To get the ID of an asymmetric KMS key use a [AsymmetricEncryptionKeyService.List] request.
     */
    keyId: string;
}
export interface ListAsymmetricEncryptionKeysRequest {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysRequest";
    /** ID of the folder to list asymmetric KMS keys in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListAsymmetricEncryptionKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListAsymmetricEncryptionKeysResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListAsymmetricEncryptionKeysResponse {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysResponse";
    /** List of asymmetric KMS keys in the specified folder. */
    keys: AsymmetricEncryptionKey[];
    /**
     * This token allows you to get the next page of results for list requests. If the number
     * of results is greater than the specified [ListAsymmetricEncryptionKeysRequest.page_size], use
     * the [next_page_token] as the value for the [ListAsymmetricEncryptionKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface UpdateAsymmetricEncryptionKeyRequest {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest";
    /**
     * ID of the asymmetric KMS key to update.
     * To get the ID of a asymmetric KMS key use a [AsymmetricEncryptionKeyService.List] request.
     */
    keyId: string;
    /** Field mask that specifies which attributes of the asymmetric KMS key are going to be updated. */
    updateMask?: FieldMask;
    /** New name for the asymmetric KMS key. */
    name: string;
    /** New description for the asymmetric KMS key. */
    description: string;
    /**
     * New status for the asymmetric KMS key.
     * Using the [AsymmetricEncryptionKeyService.Update] method you can only set ACTIVE or INACTIVE status.
     */
    status: AsymmetricEncryptionKey_Status;
    /** Custom labels for the asymmetric KMS key as `key:value` pairs. Maximum 64 per key. */
    labels: {
        [key: string]: string;
    };
    /** Flag that inhibits deletion of the asymmetric KMS key */
    deletionProtection: boolean;
}
export interface UpdateAsymmetricEncryptionKeyRequest_LabelsEntry {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateAsymmetricEncryptionKeyMetadata {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyMetadata";
    /** ID of the key being updated. */
    keyId: string;
}
export interface DeleteAsymmetricEncryptionKeyRequest {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyRequest";
    /** ID of the key to be deleted. */
    keyId: string;
}
export interface DeleteAsymmetricEncryptionKeyMetadata {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyMetadata";
    /** ID of the key being deleted. */
    keyId: string;
}
export interface ListAsymmetricEncryptionKeyOperationsRequest {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsRequest";
    /**
     * ID of the symmetric KMS key to get operations for.
     *
     * To get the key ID, use a [AsymmetricKeyEncryptionService.List] request.
     */
    keyId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListAsymmetricEncryptionKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListAsymmetricKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListAsymmetricEncryptionKeyOperationsResponse {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsResponse";
    /** List of operations for the specified key. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAsymmetricEncryptionKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListAsymmetricEncryptionKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const CreateAsymmetricEncryptionKeyRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest";
    encode(message: CreateAsymmetricEncryptionKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAsymmetricEncryptionKeyRequest;
    fromJSON(object: any): CreateAsymmetricEncryptionKeyRequest;
    toJSON(message: CreateAsymmetricEncryptionKeyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        encryptionAlgorithm?: AsymmetricEncryptionAlgorithm | undefined;
        deletionProtection?: boolean | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        encryptionAlgorithm?: AsymmetricEncryptionAlgorithm | undefined;
        deletionProtection?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "encryptionAlgorithm" | "deletionProtection">, never>>(object: I): CreateAsymmetricEncryptionKeyRequest;
};
export declare const CreateAsymmetricEncryptionKeyRequest_LabelsEntry: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest.LabelsEntry";
    encode(message: CreateAsymmetricEncryptionKeyRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAsymmetricEncryptionKeyRequest_LabelsEntry;
    fromJSON(object: any): CreateAsymmetricEncryptionKeyRequest_LabelsEntry;
    toJSON(message: CreateAsymmetricEncryptionKeyRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateAsymmetricEncryptionKeyRequest_LabelsEntry;
};
export declare const CreateAsymmetricEncryptionKeyMetadata: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyMetadata";
    encode(message: CreateAsymmetricEncryptionKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAsymmetricEncryptionKeyMetadata;
    fromJSON(object: any): CreateAsymmetricEncryptionKeyMetadata;
    toJSON(message: CreateAsymmetricEncryptionKeyMetadata): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): CreateAsymmetricEncryptionKeyMetadata;
};
export declare const GetAsymmetricEncryptionKeyRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.GetAsymmetricEncryptionKeyRequest";
    encode(message: GetAsymmetricEncryptionKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAsymmetricEncryptionKeyRequest;
    fromJSON(object: any): GetAsymmetricEncryptionKeyRequest;
    toJSON(message: GetAsymmetricEncryptionKeyRequest): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): GetAsymmetricEncryptionKeyRequest;
};
export declare const ListAsymmetricEncryptionKeysRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysRequest";
    encode(message: ListAsymmetricEncryptionKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAsymmetricEncryptionKeysRequest;
    fromJSON(object: any): ListAsymmetricEncryptionKeysRequest;
    toJSON(message: ListAsymmetricEncryptionKeysRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListAsymmetricEncryptionKeysRequest;
};
export declare const ListAsymmetricEncryptionKeysResponse: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysResponse";
    encode(message: ListAsymmetricEncryptionKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAsymmetricEncryptionKeysResponse;
    fromJSON(object: any): ListAsymmetricEncryptionKeysResponse;
    toJSON(message: ListAsymmetricEncryptionKeysResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        keys?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: AsymmetricEncryptionKey_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            encryptionAlgorithm?: AsymmetricEncryptionAlgorithm | undefined;
            deletionProtection?: boolean | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        keys?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: AsymmetricEncryptionKey_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            encryptionAlgorithm?: AsymmetricEncryptionAlgorithm | undefined;
            deletionProtection?: boolean | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: AsymmetricEncryptionKey_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            encryptionAlgorithm?: AsymmetricEncryptionAlgorithm | undefined;
            deletionProtection?: boolean | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: AsymmetricEncryptionKey_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["keys"][number]["labels"], string | number>, never>) | undefined;
            encryptionAlgorithm?: AsymmetricEncryptionAlgorithm | undefined;
            deletionProtection?: boolean | undefined;
        } & Record<Exclude<keyof I["keys"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "encryptionAlgorithm" | "deletionProtection">, never>)[] & Record<Exclude<keyof I["keys"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: AsymmetricEncryptionKey_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            encryptionAlgorithm?: AsymmetricEncryptionAlgorithm | undefined;
            deletionProtection?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "keys">, never>>(object: I): ListAsymmetricEncryptionKeysResponse;
};
export declare const UpdateAsymmetricEncryptionKeyRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest";
    encode(message: UpdateAsymmetricEncryptionKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAsymmetricEncryptionKeyRequest;
    fromJSON(object: any): UpdateAsymmetricEncryptionKeyRequest;
    toJSON(message: UpdateAsymmetricEncryptionKeyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        status?: AsymmetricEncryptionKey_Status | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        keyId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        status?: AsymmetricEncryptionKey_Status | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        deletionProtection?: boolean | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "status" | "labels" | "updateMask" | "deletionProtection" | "keyId">, never>>(object: I): UpdateAsymmetricEncryptionKeyRequest;
};
export declare const UpdateAsymmetricEncryptionKeyRequest_LabelsEntry: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest.LabelsEntry";
    encode(message: UpdateAsymmetricEncryptionKeyRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAsymmetricEncryptionKeyRequest_LabelsEntry;
    fromJSON(object: any): UpdateAsymmetricEncryptionKeyRequest_LabelsEntry;
    toJSON(message: UpdateAsymmetricEncryptionKeyRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateAsymmetricEncryptionKeyRequest_LabelsEntry;
};
export declare const UpdateAsymmetricEncryptionKeyMetadata: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyMetadata";
    encode(message: UpdateAsymmetricEncryptionKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAsymmetricEncryptionKeyMetadata;
    fromJSON(object: any): UpdateAsymmetricEncryptionKeyMetadata;
    toJSON(message: UpdateAsymmetricEncryptionKeyMetadata): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): UpdateAsymmetricEncryptionKeyMetadata;
};
export declare const DeleteAsymmetricEncryptionKeyRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyRequest";
    encode(message: DeleteAsymmetricEncryptionKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAsymmetricEncryptionKeyRequest;
    fromJSON(object: any): DeleteAsymmetricEncryptionKeyRequest;
    toJSON(message: DeleteAsymmetricEncryptionKeyRequest): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): DeleteAsymmetricEncryptionKeyRequest;
};
export declare const DeleteAsymmetricEncryptionKeyMetadata: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyMetadata";
    encode(message: DeleteAsymmetricEncryptionKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAsymmetricEncryptionKeyMetadata;
    fromJSON(object: any): DeleteAsymmetricEncryptionKeyMetadata;
    toJSON(message: DeleteAsymmetricEncryptionKeyMetadata): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): DeleteAsymmetricEncryptionKeyMetadata;
};
export declare const ListAsymmetricEncryptionKeyOperationsRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsRequest";
    encode(message: ListAsymmetricEncryptionKeyOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAsymmetricEncryptionKeyOperationsRequest;
    fromJSON(object: any): ListAsymmetricEncryptionKeyOperationsRequest;
    toJSON(message: ListAsymmetricEncryptionKeyOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        keyId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "keyId">, never>>(object: I): ListAsymmetricEncryptionKeyOperationsRequest;
};
export declare const ListAsymmetricEncryptionKeyOperationsResponse: {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsResponse";
    encode(message: ListAsymmetricEncryptionKeyOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAsymmetricEncryptionKeyOperationsResponse;
    fromJSON(object: any): ListAsymmetricEncryptionKeyOperationsResponse;
    toJSON(message: ListAsymmetricEncryptionKeyOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListAsymmetricEncryptionKeyOperationsResponse;
};
/** Set of methods for managing asymmetric KMS keys. */
export declare const AsymmetricEncryptionKeyServiceService: {
    /**
     * control plane
     * Creates an asymmetric KMS key in the specified folder.
     */
    readonly create: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateAsymmetricEncryptionKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateAsymmetricEncryptionKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Returns the specified asymmetric KMS key.
     *
     *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAsymmetricEncryptionKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAsymmetricEncryptionKeyRequest;
        readonly responseSerialize: (value: AsymmetricEncryptionKey) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AsymmetricEncryptionKey;
    };
    /** Returns the list of asymmetric KMS keys in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAsymmetricEncryptionKeysRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAsymmetricEncryptionKeysRequest;
        readonly responseSerialize: (value: ListAsymmetricEncryptionKeysResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAsymmetricEncryptionKeysResponse;
    };
    /** Updates the specified asymmetric KMS key. */
    readonly update: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAsymmetricEncryptionKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAsymmetricEncryptionKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified asymmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [AsymmetricEncryptionKeyService.Get] and [AsymmetricEncryptionKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteAsymmetricEncryptionKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteAsymmetricEncryptionKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified asymmetric KMS key. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAsymmetricEncryptionKeyOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAsymmetricEncryptionKeyOperationsRequest;
        readonly responseSerialize: (value: ListAsymmetricEncryptionKeyOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAsymmetricEncryptionKeyOperationsResponse;
    };
    /** Lists existing access bindings for the specified key. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the key. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified key. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface AsymmetricEncryptionKeyServiceServer extends UntypedServiceImplementation {
    /**
     * control plane
     * Creates an asymmetric KMS key in the specified folder.
     */
    create: handleUnaryCall<CreateAsymmetricEncryptionKeyRequest, Operation>;
    /**
     * Returns the specified asymmetric KMS key.
     *
     *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    get: handleUnaryCall<GetAsymmetricEncryptionKeyRequest, AsymmetricEncryptionKey>;
    /** Returns the list of asymmetric KMS keys in the specified folder. */
    list: handleUnaryCall<ListAsymmetricEncryptionKeysRequest, ListAsymmetricEncryptionKeysResponse>;
    /** Updates the specified asymmetric KMS key. */
    update: handleUnaryCall<UpdateAsymmetricEncryptionKeyRequest, Operation>;
    /**
     * Deletes the specified asymmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [AsymmetricEncryptionKeyService.Get] and [AsymmetricEncryptionKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    delete: handleUnaryCall<DeleteAsymmetricEncryptionKeyRequest, Operation>;
    /** Lists operations for the specified asymmetric KMS key. */
    listOperations: handleUnaryCall<ListAsymmetricEncryptionKeyOperationsRequest, ListAsymmetricEncryptionKeyOperationsResponse>;
    /** Lists existing access bindings for the specified key. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the key. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified key. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface AsymmetricEncryptionKeyServiceClient extends Client {
    /**
     * control plane
     * Creates an asymmetric KMS key in the specified folder.
     */
    create(request: CreateAsymmetricEncryptionKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateAsymmetricEncryptionKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateAsymmetricEncryptionKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Returns the specified asymmetric KMS key.
     *
     *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    get(request: GetAsymmetricEncryptionKeyRequest, callback: (error: ServiceError | null, response: AsymmetricEncryptionKey) => void): ClientUnaryCall;
    get(request: GetAsymmetricEncryptionKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AsymmetricEncryptionKey) => void): ClientUnaryCall;
    get(request: GetAsymmetricEncryptionKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AsymmetricEncryptionKey) => void): ClientUnaryCall;
    /** Returns the list of asymmetric KMS keys in the specified folder. */
    list(request: ListAsymmetricEncryptionKeysRequest, callback: (error: ServiceError | null, response: ListAsymmetricEncryptionKeysResponse) => void): ClientUnaryCall;
    list(request: ListAsymmetricEncryptionKeysRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAsymmetricEncryptionKeysResponse) => void): ClientUnaryCall;
    list(request: ListAsymmetricEncryptionKeysRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAsymmetricEncryptionKeysResponse) => void): ClientUnaryCall;
    /** Updates the specified asymmetric KMS key. */
    update(request: UpdateAsymmetricEncryptionKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateAsymmetricEncryptionKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateAsymmetricEncryptionKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified asymmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [AsymmetricEncryptionKeyService.Get] and [AsymmetricEncryptionKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    delete(request: DeleteAsymmetricEncryptionKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAsymmetricEncryptionKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAsymmetricEncryptionKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified asymmetric KMS key. */
    listOperations(request: ListAsymmetricEncryptionKeyOperationsRequest, callback: (error: ServiceError | null, response: ListAsymmetricEncryptionKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListAsymmetricEncryptionKeyOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAsymmetricEncryptionKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListAsymmetricEncryptionKeyOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAsymmetricEncryptionKeyOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified key. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the key. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified key. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const AsymmetricEncryptionKeyServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): AsymmetricEncryptionKeyServiceClient;
    service: typeof AsymmetricEncryptionKeyServiceService;
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
