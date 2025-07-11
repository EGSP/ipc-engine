/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { AsymmetricSignatureAlgorithm, AsymmetricSignatureKey_Status, AsymmetricSignatureKey } from "../../../../../yandex/cloud/kms/v1/asymmetricsignature/asymmetric_signature_key";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.kms.v1.asymmetricsignature";
export interface CreateAsymmetricSignatureKeyRequest {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest";
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
    /** Asymmetric signature algorithm. */
    signatureAlgorithm: AsymmetricSignatureAlgorithm;
    /** Flag that inhibits deletion of the symmetric KMS key */
    deletionProtection: boolean;
}
export interface CreateAsymmetricSignatureKeyRequest_LabelsEntry {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateAsymmetricSignatureKeyMetadata {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyMetadata";
    /** ID of the key being created. */
    keyId: string;
}
export interface GetAsymmetricSignatureKeyRequest {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.GetAsymmetricSignatureKeyRequest";
    /**
     * ID of the asymmetric KMS key to return.
     * To get the ID of an asymmetric KMS key use a [AsymmetricSignatureKeyService.List] request.
     */
    keyId: string;
}
export interface ListAsymmetricSignatureKeysRequest {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysRequest";
    /** ID of the folder to list asymmetric KMS keys in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListAsymmetricSignatureKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListAsymmetricSignatureKeysResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListAsymmetricSignatureKeysResponse {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysResponse";
    /** List of asymmetric KMS keys in the specified folder. */
    keys: AsymmetricSignatureKey[];
    /**
     * This token allows you to get the next page of results for list requests. If the number
     * of results is greater than the specified [ListAsymmetricSignatureKeysRequest.page_size], use
     * the [next_page_token] as the value for the [ListAsymmetricSignatureKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface UpdateAsymmetricSignatureKeyRequest {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest";
    /**
     * ID of the asymmetric KMS key to update.
     * To get the ID of a asymmetric KMS key use a [AsymmetricSignatureKeyService.List] request.
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
     * Using the [AsymmetricSignatureKeyService.Update] method you can only set ACTIVE or INACTIVE status.
     */
    status: AsymmetricSignatureKey_Status;
    /** Custom labels for the asymmetric KMS key as `key:value` pairs. Maximum 64 per key. */
    labels: {
        [key: string]: string;
    };
    /** Flag that inhibits deletion of the asymmetric KMS key */
    deletionProtection: boolean;
}
export interface UpdateAsymmetricSignatureKeyRequest_LabelsEntry {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateAsymmetricSignatureKeyMetadata {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyMetadata";
    /** ID of the key being updated. */
    keyId: string;
}
export interface DeleteAsymmetricSignatureKeyRequest {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyRequest";
    /** ID of the key to be deleted. */
    keyId: string;
}
export interface DeleteAsymmetricSignatureKeyMetadata {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyMetadata";
    /** ID of the key being deleted. */
    keyId: string;
}
export interface ListAsymmetricSignatureKeyOperationsRequest {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsRequest";
    /**
     * ID of the symmetric KMS key to get operations for.
     *
     * To get the key ID, use a [AsymmetricSignatureKeyService.List] request.
     */
    keyId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListAsymmetricSignatureKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListAsymmetricSignatureKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListAsymmetricSignatureKeyOperationsResponse {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsResponse";
    /** List of operations for the specified key. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAsymmetricSignatureKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListAsymmetricSignatureKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const CreateAsymmetricSignatureKeyRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest";
    encode(message: CreateAsymmetricSignatureKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAsymmetricSignatureKeyRequest;
    fromJSON(object: any): CreateAsymmetricSignatureKeyRequest;
    toJSON(message: CreateAsymmetricSignatureKeyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        signatureAlgorithm?: AsymmetricSignatureAlgorithm | undefined;
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
        deletionProtection?: boolean | undefined;
        signatureAlgorithm?: AsymmetricSignatureAlgorithm | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "deletionProtection" | "signatureAlgorithm">, never>>(object: I): CreateAsymmetricSignatureKeyRequest;
};
export declare const CreateAsymmetricSignatureKeyRequest_LabelsEntry: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest.LabelsEntry";
    encode(message: CreateAsymmetricSignatureKeyRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAsymmetricSignatureKeyRequest_LabelsEntry;
    fromJSON(object: any): CreateAsymmetricSignatureKeyRequest_LabelsEntry;
    toJSON(message: CreateAsymmetricSignatureKeyRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateAsymmetricSignatureKeyRequest_LabelsEntry;
};
export declare const CreateAsymmetricSignatureKeyMetadata: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyMetadata";
    encode(message: CreateAsymmetricSignatureKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAsymmetricSignatureKeyMetadata;
    fromJSON(object: any): CreateAsymmetricSignatureKeyMetadata;
    toJSON(message: CreateAsymmetricSignatureKeyMetadata): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): CreateAsymmetricSignatureKeyMetadata;
};
export declare const GetAsymmetricSignatureKeyRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.GetAsymmetricSignatureKeyRequest";
    encode(message: GetAsymmetricSignatureKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAsymmetricSignatureKeyRequest;
    fromJSON(object: any): GetAsymmetricSignatureKeyRequest;
    toJSON(message: GetAsymmetricSignatureKeyRequest): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): GetAsymmetricSignatureKeyRequest;
};
export declare const ListAsymmetricSignatureKeysRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysRequest";
    encode(message: ListAsymmetricSignatureKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAsymmetricSignatureKeysRequest;
    fromJSON(object: any): ListAsymmetricSignatureKeysRequest;
    toJSON(message: ListAsymmetricSignatureKeysRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListAsymmetricSignatureKeysRequest;
};
export declare const ListAsymmetricSignatureKeysResponse: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysResponse";
    encode(message: ListAsymmetricSignatureKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAsymmetricSignatureKeysResponse;
    fromJSON(object: any): ListAsymmetricSignatureKeysResponse;
    toJSON(message: ListAsymmetricSignatureKeysResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        keys?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: AsymmetricSignatureKey_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            signatureAlgorithm?: AsymmetricSignatureAlgorithm | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        keys?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: AsymmetricSignatureKey_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            signatureAlgorithm?: AsymmetricSignatureAlgorithm | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: AsymmetricSignatureKey_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            signatureAlgorithm?: AsymmetricSignatureAlgorithm | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: AsymmetricSignatureKey_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["keys"][number]["labels"], string | number>, never>) | undefined;
            deletionProtection?: boolean | undefined;
            signatureAlgorithm?: AsymmetricSignatureAlgorithm | undefined;
        } & Record<Exclude<keyof I["keys"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "deletionProtection" | "signatureAlgorithm">, never>)[] & Record<Exclude<keyof I["keys"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: AsymmetricSignatureKey_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            signatureAlgorithm?: AsymmetricSignatureAlgorithm | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "keys">, never>>(object: I): ListAsymmetricSignatureKeysResponse;
};
export declare const UpdateAsymmetricSignatureKeyRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest";
    encode(message: UpdateAsymmetricSignatureKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAsymmetricSignatureKeyRequest;
    fromJSON(object: any): UpdateAsymmetricSignatureKeyRequest;
    toJSON(message: UpdateAsymmetricSignatureKeyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        status?: AsymmetricSignatureKey_Status | undefined;
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
        status?: AsymmetricSignatureKey_Status | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "status" | "labels" | "updateMask" | "deletionProtection" | "keyId">, never>>(object: I): UpdateAsymmetricSignatureKeyRequest;
};
export declare const UpdateAsymmetricSignatureKeyRequest_LabelsEntry: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest.LabelsEntry";
    encode(message: UpdateAsymmetricSignatureKeyRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAsymmetricSignatureKeyRequest_LabelsEntry;
    fromJSON(object: any): UpdateAsymmetricSignatureKeyRequest_LabelsEntry;
    toJSON(message: UpdateAsymmetricSignatureKeyRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateAsymmetricSignatureKeyRequest_LabelsEntry;
};
export declare const UpdateAsymmetricSignatureKeyMetadata: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyMetadata";
    encode(message: UpdateAsymmetricSignatureKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAsymmetricSignatureKeyMetadata;
    fromJSON(object: any): UpdateAsymmetricSignatureKeyMetadata;
    toJSON(message: UpdateAsymmetricSignatureKeyMetadata): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): UpdateAsymmetricSignatureKeyMetadata;
};
export declare const DeleteAsymmetricSignatureKeyRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyRequest";
    encode(message: DeleteAsymmetricSignatureKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAsymmetricSignatureKeyRequest;
    fromJSON(object: any): DeleteAsymmetricSignatureKeyRequest;
    toJSON(message: DeleteAsymmetricSignatureKeyRequest): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): DeleteAsymmetricSignatureKeyRequest;
};
export declare const DeleteAsymmetricSignatureKeyMetadata: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyMetadata";
    encode(message: DeleteAsymmetricSignatureKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAsymmetricSignatureKeyMetadata;
    fromJSON(object: any): DeleteAsymmetricSignatureKeyMetadata;
    toJSON(message: DeleteAsymmetricSignatureKeyMetadata): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "keyId">, never>>(object: I): DeleteAsymmetricSignatureKeyMetadata;
};
export declare const ListAsymmetricSignatureKeyOperationsRequest: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsRequest";
    encode(message: ListAsymmetricSignatureKeyOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAsymmetricSignatureKeyOperationsRequest;
    fromJSON(object: any): ListAsymmetricSignatureKeyOperationsRequest;
    toJSON(message: ListAsymmetricSignatureKeyOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        keyId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "keyId">, never>>(object: I): ListAsymmetricSignatureKeyOperationsRequest;
};
export declare const ListAsymmetricSignatureKeyOperationsResponse: {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsResponse";
    encode(message: ListAsymmetricSignatureKeyOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAsymmetricSignatureKeyOperationsResponse;
    fromJSON(object: any): ListAsymmetricSignatureKeyOperationsResponse;
    toJSON(message: ListAsymmetricSignatureKeyOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListAsymmetricSignatureKeyOperationsResponse;
};
/** Set of methods for managing asymmetric signature keys. */
export declare const AsymmetricSignatureKeyServiceService: {
    /**
     * control plane
     * Creates an asymmetric KMS key in the specified folder.
     */
    readonly create: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateAsymmetricSignatureKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateAsymmetricSignatureKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Returns the specified asymmetric KMS key.
     *
     *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAsymmetricSignatureKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAsymmetricSignatureKeyRequest;
        readonly responseSerialize: (value: AsymmetricSignatureKey) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AsymmetricSignatureKey;
    };
    /** Returns the list of asymmetric KMS keys in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAsymmetricSignatureKeysRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAsymmetricSignatureKeysRequest;
        readonly responseSerialize: (value: ListAsymmetricSignatureKeysResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAsymmetricSignatureKeysResponse;
    };
    /** Updates the specified asymmetric KMS key. */
    readonly update: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAsymmetricSignatureKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAsymmetricSignatureKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified asymmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [AsymmetricSignatureKeyService.Get] and [AsymmetricSignatureKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteAsymmetricSignatureKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteAsymmetricSignatureKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified asymmetric KMS key. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAsymmetricSignatureKeyOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAsymmetricSignatureKeyOperationsRequest;
        readonly responseSerialize: (value: ListAsymmetricSignatureKeyOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAsymmetricSignatureKeyOperationsResponse;
    };
    /** Lists existing access bindings for the specified key. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the key. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified key. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface AsymmetricSignatureKeyServiceServer extends UntypedServiceImplementation {
    /**
     * control plane
     * Creates an asymmetric KMS key in the specified folder.
     */
    create: handleUnaryCall<CreateAsymmetricSignatureKeyRequest, Operation>;
    /**
     * Returns the specified asymmetric KMS key.
     *
     *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    get: handleUnaryCall<GetAsymmetricSignatureKeyRequest, AsymmetricSignatureKey>;
    /** Returns the list of asymmetric KMS keys in the specified folder. */
    list: handleUnaryCall<ListAsymmetricSignatureKeysRequest, ListAsymmetricSignatureKeysResponse>;
    /** Updates the specified asymmetric KMS key. */
    update: handleUnaryCall<UpdateAsymmetricSignatureKeyRequest, Operation>;
    /**
     * Deletes the specified asymmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [AsymmetricSignatureKeyService.Get] and [AsymmetricSignatureKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    delete: handleUnaryCall<DeleteAsymmetricSignatureKeyRequest, Operation>;
    /** Lists operations for the specified asymmetric KMS key. */
    listOperations: handleUnaryCall<ListAsymmetricSignatureKeyOperationsRequest, ListAsymmetricSignatureKeyOperationsResponse>;
    /** Lists existing access bindings for the specified key. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the key. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified key. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface AsymmetricSignatureKeyServiceClient extends Client {
    /**
     * control plane
     * Creates an asymmetric KMS key in the specified folder.
     */
    create(request: CreateAsymmetricSignatureKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateAsymmetricSignatureKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateAsymmetricSignatureKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Returns the specified asymmetric KMS key.
     *
     *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    get(request: GetAsymmetricSignatureKeyRequest, callback: (error: ServiceError | null, response: AsymmetricSignatureKey) => void): ClientUnaryCall;
    get(request: GetAsymmetricSignatureKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AsymmetricSignatureKey) => void): ClientUnaryCall;
    get(request: GetAsymmetricSignatureKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AsymmetricSignatureKey) => void): ClientUnaryCall;
    /** Returns the list of asymmetric KMS keys in the specified folder. */
    list(request: ListAsymmetricSignatureKeysRequest, callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeysResponse) => void): ClientUnaryCall;
    list(request: ListAsymmetricSignatureKeysRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeysResponse) => void): ClientUnaryCall;
    list(request: ListAsymmetricSignatureKeysRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeysResponse) => void): ClientUnaryCall;
    /** Updates the specified asymmetric KMS key. */
    update(request: UpdateAsymmetricSignatureKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateAsymmetricSignatureKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateAsymmetricSignatureKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified asymmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [AsymmetricSignatureKeyService.Get] and [AsymmetricSignatureKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    delete(request: DeleteAsymmetricSignatureKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAsymmetricSignatureKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAsymmetricSignatureKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified asymmetric KMS key. */
    listOperations(request: ListAsymmetricSignatureKeyOperationsRequest, callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListAsymmetricSignatureKeyOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListAsymmetricSignatureKeyOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAsymmetricSignatureKeyOperationsResponse) => void): ClientUnaryCall;
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
export declare const AsymmetricSignatureKeyServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): AsymmetricSignatureKeyServiceClient;
    service: typeof AsymmetricSignatureKeyServiceService;
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
