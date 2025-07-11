/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Duration } from "../../../../google/protobuf/duration";
import { Secret, Version } from "../../../../yandex/cloud/lockbox/v1/secret";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.lockbox.v1";
export interface PayloadEntryChange {
    $type: "yandex.cloud.lockbox.v1.PayloadEntryChange";
    /** Non-confidential key of the entry. */
    key: string;
    /** Use the field to set a text value. */
    textValue: string | undefined;
    /** Use the field to set a binary value. */
    binaryValue: Buffer | undefined;
}
export interface GetSecretRequest {
    $type: "yandex.cloud.lockbox.v1.GetSecretRequest";
    /**
     * ID of the secret to return.
     *
     * To get a secret ID make a [List] request.
     */
    secretId: string;
}
export interface ListSecretsRequest {
    $type: "yandex.cloud.lockbox.v1.ListSecretsRequest";
    /** ID of the folder to list secrets in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListSecretsRequest.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListSecretsRequest.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSecretsResponse {
    $type: "yandex.cloud.lockbox.v1.ListSecretsResponse";
    /** List of secrets in the specified folder. */
    secrets: Secret[];
    /**
     * This token allows you to get the next page of results for list requests. If the number
     * of results is greater than the specified [ListSecretsRequest.page_size], use
     * the `next_page_token` as the value for the [ListSecretsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateSecretRequest {
    $type: "yandex.cloud.lockbox.v1.CreateSecretRequest";
    /** ID of the folder to create a secret in. */
    folderId: string;
    /** Name of the secret. */
    name: string;
    /** Description of the secret. */
    description: string;
    /**
     * Custom labels for the secret as `key:value` pairs. Maximum 64 per key.
     * For example, `"project": "mvp"` or `"source": "dictionary"`.
     */
    labels: {
        [key: string]: string;
    };
    /** Optional ID of the KMS key will be used to encrypt and decrypt the secret. */
    kmsKeyId: string;
    /** Description of the first version. */
    versionDescription: string;
    /** Payload entries added to the first version. */
    versionPayloadEntries: PayloadEntryChange[];
    /** Flag that inhibits deletion of the secret. */
    deletionProtection: boolean;
}
export interface CreateSecretRequest_LabelsEntry {
    $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateSecretMetadata {
    $type: "yandex.cloud.lockbox.v1.CreateSecretMetadata";
    /** ID of the secret being created. */
    secretId: string;
    /** ID of the current version of the secret being created. */
    versionId: string;
}
export interface UpdateSecretRequest {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest";
    /** ID of the secret to update. */
    secretId: string;
    /** Field mask that specifies which attributes of the secret are going to be updated. */
    updateMask?: FieldMask;
    /** New name of the secret. */
    name: string;
    /** New description of the secret. */
    description: string;
    /** Custom labels for the secret as `key:value` pairs. Maximum 64 per key. */
    labels: {
        [key: string]: string;
    };
    /** Flag that inhibits deletion of the secret. */
    deletionProtection: boolean;
}
export interface UpdateSecretRequest_LabelsEntry {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateSecretMetadata {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretMetadata";
    /** ID of the secret being updated. */
    secretId: string;
}
export interface DeleteSecretRequest {
    $type: "yandex.cloud.lockbox.v1.DeleteSecretRequest";
    /** ID of the secret to be deleted. */
    secretId: string;
}
export interface DeleteSecretMetadata {
    $type: "yandex.cloud.lockbox.v1.DeleteSecretMetadata";
    /** ID of the secret being deleted. */
    secretId: string;
}
export interface ActivateSecretRequest {
    $type: "yandex.cloud.lockbox.v1.ActivateSecretRequest";
    /** ID of the secret to be activated. */
    secretId: string;
}
export interface ActivateSecretMetadata {
    $type: "yandex.cloud.lockbox.v1.ActivateSecretMetadata";
    /** ID of the secret being activated. */
    secretId: string;
}
export interface DeactivateSecretRequest {
    $type: "yandex.cloud.lockbox.v1.DeactivateSecretRequest";
    /** ID of the secret to be deactivated. */
    secretId: string;
}
export interface DeactivateSecretMetadata {
    $type: "yandex.cloud.lockbox.v1.DeactivateSecretMetadata";
    /** ID of the secret being deactivated. */
    secretId: string;
}
export interface AddVersionRequest {
    $type: "yandex.cloud.lockbox.v1.AddVersionRequest";
    /** ID of the secret. */
    secretId: string;
    /** Description of the version. */
    description: string;
    /** Describe how payload entries of the base version change in the added version. */
    payloadEntries: PayloadEntryChange[];
    /** Optional base version id. Defaults to the current version if not specified */
    baseVersionId: string;
}
export interface AddVersionMetadata {
    $type: "yandex.cloud.lockbox.v1.AddVersionMetadata";
    /** ID of the secret. */
    secretId: string;
    /** ID of the added version. */
    versionId: string;
}
export interface ListVersionsRequest {
    $type: "yandex.cloud.lockbox.v1.ListVersionsRequest";
    /** ID of the secret to list versions for. */
    secretId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListVersionsRequest.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListVersionsRequest.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListVersionsResponse {
    $type: "yandex.cloud.lockbox.v1.ListVersionsResponse";
    /** List of versions for the specified secret. */
    versions: Version[];
    /**
     * This token allows you to get the next page of results for list requests. If the number
     * of results is greater than the specified [ListVersionsRequest.page_size], use
     * the `next_page_token` as the value for the [ListVersionsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ScheduleVersionDestructionRequest {
    $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionRequest";
    /** ID of the secret whose version should be scheduled for destruction. */
    secretId: string;
    /** ID of the version to be destroyed. */
    versionId: string;
    /**
     * Time interval between the version destruction request and actual destruction.
     * Default value: 7 days.
     */
    pendingPeriod?: Duration;
}
export interface ScheduleVersionDestructionMetadata {
    $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionMetadata";
    /** ID of the secret whose version is being scheduled for destruction. */
    secretId: string;
    /** ID of the version that is being scheduled for destruction. */
    versionId: string;
    /** Destruction timestamp. */
    destroyAt?: Date;
}
export interface CancelVersionDestructionRequest {
    $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionRequest";
    /** ID of the secret to cancel a version's destruction for. */
    secretId: string;
    /** ID of the secret whose scheduled destruction should be cancelled. */
    versionId: string;
}
export interface CancelVersionDestructionMetadata {
    $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionMetadata";
    /** ID of the secret whose version's destruction is being cancelled. */
    secretId: string;
    /** ID of the version whose scheduled destruction is being cancelled. */
    versionId: string;
}
export interface ListSecretOperationsRequest {
    $type: "yandex.cloud.lockbox.v1.ListSecretOperationsRequest";
    /** ID of the secret to get operations for. */
    secretId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListSecretOperationsRequest.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListSecretOperationsRequest.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSecretOperationsResponse {
    $type: "yandex.cloud.lockbox.v1.ListSecretOperationsResponse";
    /** List of operations for the specified secret. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSecretOperationsResponse.page_size], use the `next_page_token` as the value
     * for the [ListSecretOperationsResponse.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const PayloadEntryChange: {
    $type: "yandex.cloud.lockbox.v1.PayloadEntryChange";
    encode(message: PayloadEntryChange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PayloadEntryChange;
    fromJSON(object: any): PayloadEntryChange;
    toJSON(message: PayloadEntryChange): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        textValue?: string | undefined;
        binaryValue?: Buffer | undefined;
    } & {
        key?: string | undefined;
        textValue?: string | undefined;
        binaryValue?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "key" | "textValue" | "binaryValue">, never>>(object: I): PayloadEntryChange;
};
export declare const GetSecretRequest: {
    $type: "yandex.cloud.lockbox.v1.GetSecretRequest";
    encode(message: GetSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSecretRequest;
    fromJSON(object: any): GetSecretRequest;
    toJSON(message: GetSecretRequest): unknown;
    fromPartial<I extends {
        secretId?: string | undefined;
    } & {
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "secretId">, never>>(object: I): GetSecretRequest;
};
export declare const ListSecretsRequest: {
    $type: "yandex.cloud.lockbox.v1.ListSecretsRequest";
    encode(message: ListSecretsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecretsRequest;
    fromJSON(object: any): ListSecretsRequest;
    toJSON(message: ListSecretsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListSecretsRequest;
};
export declare const ListSecretsResponse: {
    $type: "yandex.cloud.lockbox.v1.ListSecretsResponse";
    encode(message: ListSecretsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecretsResponse;
    fromJSON(object: any): ListSecretsResponse;
    toJSON(message: ListSecretsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        secrets?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/lockbox/v1/secret").Secret_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            currentVersion?: {
                description?: string | undefined;
                id?: string | undefined;
                createdAt?: Date | undefined;
                status?: import("../../../../yandex/cloud/lockbox/v1/secret").Version_Status | undefined;
                destroyAt?: Date | undefined;
                secretId?: string | undefined;
                payloadEntryKeys?: string[] | undefined;
            } | undefined;
            kmsKeyId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        secrets?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/lockbox/v1/secret").Secret_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            currentVersion?: {
                description?: string | undefined;
                id?: string | undefined;
                createdAt?: Date | undefined;
                status?: import("../../../../yandex/cloud/lockbox/v1/secret").Version_Status | undefined;
                destroyAt?: Date | undefined;
                secretId?: string | undefined;
                payloadEntryKeys?: string[] | undefined;
            } | undefined;
            kmsKeyId?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/lockbox/v1/secret").Secret_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            currentVersion?: {
                description?: string | undefined;
                id?: string | undefined;
                createdAt?: Date | undefined;
                status?: import("../../../../yandex/cloud/lockbox/v1/secret").Version_Status | undefined;
                destroyAt?: Date | undefined;
                secretId?: string | undefined;
                payloadEntryKeys?: string[] | undefined;
            } | undefined;
            kmsKeyId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/lockbox/v1/secret").Secret_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["secrets"][number]["labels"], string | number>, never>) | undefined;
            deletionProtection?: boolean | undefined;
            currentVersion?: ({
                description?: string | undefined;
                id?: string | undefined;
                createdAt?: Date | undefined;
                status?: import("../../../../yandex/cloud/lockbox/v1/secret").Version_Status | undefined;
                destroyAt?: Date | undefined;
                secretId?: string | undefined;
                payloadEntryKeys?: string[] | undefined;
            } & {
                description?: string | undefined;
                id?: string | undefined;
                createdAt?: Date | undefined;
                status?: import("../../../../yandex/cloud/lockbox/v1/secret").Version_Status | undefined;
                destroyAt?: Date | undefined;
                secretId?: string | undefined;
                payloadEntryKeys?: (string[] & string[] & Record<Exclude<keyof I["secrets"][number]["currentVersion"]["payloadEntryKeys"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["secrets"][number]["currentVersion"], "$type" | "description" | "id" | "createdAt" | "status" | "destroyAt" | "secretId" | "payloadEntryKeys">, never>) | undefined;
            kmsKeyId?: string | undefined;
        } & Record<Exclude<keyof I["secrets"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "deletionProtection" | "currentVersion" | "kmsKeyId">, never>)[] & Record<Exclude<keyof I["secrets"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/lockbox/v1/secret").Secret_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            currentVersion?: {
                description?: string | undefined;
                id?: string | undefined;
                createdAt?: Date | undefined;
                status?: import("../../../../yandex/cloud/lockbox/v1/secret").Version_Status | undefined;
                destroyAt?: Date | undefined;
                secretId?: string | undefined;
                payloadEntryKeys?: string[] | undefined;
            } | undefined;
            kmsKeyId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "secrets">, never>>(object: I): ListSecretsResponse;
};
export declare const CreateSecretRequest: {
    $type: "yandex.cloud.lockbox.v1.CreateSecretRequest";
    encode(message: CreateSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecretRequest;
    fromJSON(object: any): CreateSecretRequest;
    toJSON(message: CreateSecretRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        kmsKeyId?: string | undefined;
        versionDescription?: string | undefined;
        versionPayloadEntries?: {
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        }[] | undefined;
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
        kmsKeyId?: string | undefined;
        versionDescription?: string | undefined;
        versionPayloadEntries?: ({
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        }[] & ({
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        } & {
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        } & Record<Exclude<keyof I["versionPayloadEntries"][number], "$type" | "key" | "textValue" | "binaryValue">, never>)[] & Record<Exclude<keyof I["versionPayloadEntries"], "$type" | keyof {
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "deletionProtection" | "kmsKeyId" | "versionDescription" | "versionPayloadEntries">, never>>(object: I): CreateSecretRequest;
};
export declare const CreateSecretRequest_LabelsEntry: {
    $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry";
    encode(message: CreateSecretRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecretRequest_LabelsEntry;
    fromJSON(object: any): CreateSecretRequest_LabelsEntry;
    toJSON(message: CreateSecretRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateSecretRequest_LabelsEntry;
};
export declare const CreateSecretMetadata: {
    $type: "yandex.cloud.lockbox.v1.CreateSecretMetadata";
    encode(message: CreateSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSecretMetadata;
    fromJSON(object: any): CreateSecretMetadata;
    toJSON(message: CreateSecretMetadata): unknown;
    fromPartial<I extends {
        versionId?: string | undefined;
        secretId?: string | undefined;
    } & {
        versionId?: string | undefined;
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "versionId" | "secretId">, never>>(object: I): CreateSecretMetadata;
};
export declare const UpdateSecretRequest: {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest";
    encode(message: UpdateSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecretRequest;
    fromJSON(object: any): UpdateSecretRequest;
    toJSON(message: UpdateSecretRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        secretId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
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
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "deletionProtection" | "secretId">, never>>(object: I): UpdateSecretRequest;
};
export declare const UpdateSecretRequest_LabelsEntry: {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry";
    encode(message: UpdateSecretRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecretRequest_LabelsEntry;
    fromJSON(object: any): UpdateSecretRequest_LabelsEntry;
    toJSON(message: UpdateSecretRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateSecretRequest_LabelsEntry;
};
export declare const UpdateSecretMetadata: {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretMetadata";
    encode(message: UpdateSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSecretMetadata;
    fromJSON(object: any): UpdateSecretMetadata;
    toJSON(message: UpdateSecretMetadata): unknown;
    fromPartial<I extends {
        secretId?: string | undefined;
    } & {
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "secretId">, never>>(object: I): UpdateSecretMetadata;
};
export declare const DeleteSecretRequest: {
    $type: "yandex.cloud.lockbox.v1.DeleteSecretRequest";
    encode(message: DeleteSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSecretRequest;
    fromJSON(object: any): DeleteSecretRequest;
    toJSON(message: DeleteSecretRequest): unknown;
    fromPartial<I extends {
        secretId?: string | undefined;
    } & {
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "secretId">, never>>(object: I): DeleteSecretRequest;
};
export declare const DeleteSecretMetadata: {
    $type: "yandex.cloud.lockbox.v1.DeleteSecretMetadata";
    encode(message: DeleteSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSecretMetadata;
    fromJSON(object: any): DeleteSecretMetadata;
    toJSON(message: DeleteSecretMetadata): unknown;
    fromPartial<I extends {
        secretId?: string | undefined;
    } & {
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "secretId">, never>>(object: I): DeleteSecretMetadata;
};
export declare const ActivateSecretRequest: {
    $type: "yandex.cloud.lockbox.v1.ActivateSecretRequest";
    encode(message: ActivateSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateSecretRequest;
    fromJSON(object: any): ActivateSecretRequest;
    toJSON(message: ActivateSecretRequest): unknown;
    fromPartial<I extends {
        secretId?: string | undefined;
    } & {
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "secretId">, never>>(object: I): ActivateSecretRequest;
};
export declare const ActivateSecretMetadata: {
    $type: "yandex.cloud.lockbox.v1.ActivateSecretMetadata";
    encode(message: ActivateSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateSecretMetadata;
    fromJSON(object: any): ActivateSecretMetadata;
    toJSON(message: ActivateSecretMetadata): unknown;
    fromPartial<I extends {
        secretId?: string | undefined;
    } & {
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "secretId">, never>>(object: I): ActivateSecretMetadata;
};
export declare const DeactivateSecretRequest: {
    $type: "yandex.cloud.lockbox.v1.DeactivateSecretRequest";
    encode(message: DeactivateSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateSecretRequest;
    fromJSON(object: any): DeactivateSecretRequest;
    toJSON(message: DeactivateSecretRequest): unknown;
    fromPartial<I extends {
        secretId?: string | undefined;
    } & {
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "secretId">, never>>(object: I): DeactivateSecretRequest;
};
export declare const DeactivateSecretMetadata: {
    $type: "yandex.cloud.lockbox.v1.DeactivateSecretMetadata";
    encode(message: DeactivateSecretMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateSecretMetadata;
    fromJSON(object: any): DeactivateSecretMetadata;
    toJSON(message: DeactivateSecretMetadata): unknown;
    fromPartial<I extends {
        secretId?: string | undefined;
    } & {
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "secretId">, never>>(object: I): DeactivateSecretMetadata;
};
export declare const AddVersionRequest: {
    $type: "yandex.cloud.lockbox.v1.AddVersionRequest";
    encode(message: AddVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddVersionRequest;
    fromJSON(object: any): AddVersionRequest;
    toJSON(message: AddVersionRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        secretId?: string | undefined;
        baseVersionId?: string | undefined;
        payloadEntries?: {
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        }[] | undefined;
    } & {
        description?: string | undefined;
        secretId?: string | undefined;
        baseVersionId?: string | undefined;
        payloadEntries?: ({
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        }[] & ({
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        } & {
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        } & Record<Exclude<keyof I["payloadEntries"][number], "$type" | "key" | "textValue" | "binaryValue">, never>)[] & Record<Exclude<keyof I["payloadEntries"], "$type" | keyof {
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "secretId" | "baseVersionId" | "payloadEntries">, never>>(object: I): AddVersionRequest;
};
export declare const AddVersionMetadata: {
    $type: "yandex.cloud.lockbox.v1.AddVersionMetadata";
    encode(message: AddVersionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddVersionMetadata;
    fromJSON(object: any): AddVersionMetadata;
    toJSON(message: AddVersionMetadata): unknown;
    fromPartial<I extends {
        versionId?: string | undefined;
        secretId?: string | undefined;
    } & {
        versionId?: string | undefined;
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "versionId" | "secretId">, never>>(object: I): AddVersionMetadata;
};
export declare const ListVersionsRequest: {
    $type: "yandex.cloud.lockbox.v1.ListVersionsRequest";
    encode(message: ListVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVersionsRequest;
    fromJSON(object: any): ListVersionsRequest;
    toJSON(message: ListVersionsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        secretId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "secretId">, never>>(object: I): ListVersionsRequest;
};
export declare const ListVersionsResponse: {
    $type: "yandex.cloud.lockbox.v1.ListVersionsResponse";
    encode(message: ListVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVersionsResponse;
    fromJSON(object: any): ListVersionsResponse;
    toJSON(message: ListVersionsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        versions?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/lockbox/v1/secret").Version_Status | undefined;
            destroyAt?: Date | undefined;
            secretId?: string | undefined;
            payloadEntryKeys?: string[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        versions?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/lockbox/v1/secret").Version_Status | undefined;
            destroyAt?: Date | undefined;
            secretId?: string | undefined;
            payloadEntryKeys?: string[] | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/lockbox/v1/secret").Version_Status | undefined;
            destroyAt?: Date | undefined;
            secretId?: string | undefined;
            payloadEntryKeys?: string[] | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/lockbox/v1/secret").Version_Status | undefined;
            destroyAt?: Date | undefined;
            secretId?: string | undefined;
            payloadEntryKeys?: (string[] & string[] & Record<Exclude<keyof I["versions"][number]["payloadEntryKeys"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["versions"][number], "$type" | "description" | "id" | "createdAt" | "status" | "destroyAt" | "secretId" | "payloadEntryKeys">, never>)[] & Record<Exclude<keyof I["versions"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/lockbox/v1/secret").Version_Status | undefined;
            destroyAt?: Date | undefined;
            secretId?: string | undefined;
            payloadEntryKeys?: string[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "versions">, never>>(object: I): ListVersionsResponse;
};
export declare const ScheduleVersionDestructionRequest: {
    $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionRequest";
    encode(message: ScheduleVersionDestructionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScheduleVersionDestructionRequest;
    fromJSON(object: any): ScheduleVersionDestructionRequest;
    toJSON(message: ScheduleVersionDestructionRequest): unknown;
    fromPartial<I extends {
        versionId?: string | undefined;
        pendingPeriod?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        secretId?: string | undefined;
    } & {
        versionId?: string | undefined;
        pendingPeriod?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["pendingPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "versionId" | "pendingPeriod" | "secretId">, never>>(object: I): ScheduleVersionDestructionRequest;
};
export declare const ScheduleVersionDestructionMetadata: {
    $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionMetadata";
    encode(message: ScheduleVersionDestructionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScheduleVersionDestructionMetadata;
    fromJSON(object: any): ScheduleVersionDestructionMetadata;
    toJSON(message: ScheduleVersionDestructionMetadata): unknown;
    fromPartial<I extends {
        versionId?: string | undefined;
        destroyAt?: Date | undefined;
        secretId?: string | undefined;
    } & {
        versionId?: string | undefined;
        destroyAt?: Date | undefined;
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "versionId" | "destroyAt" | "secretId">, never>>(object: I): ScheduleVersionDestructionMetadata;
};
export declare const CancelVersionDestructionRequest: {
    $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionRequest";
    encode(message: CancelVersionDestructionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelVersionDestructionRequest;
    fromJSON(object: any): CancelVersionDestructionRequest;
    toJSON(message: CancelVersionDestructionRequest): unknown;
    fromPartial<I extends {
        versionId?: string | undefined;
        secretId?: string | undefined;
    } & {
        versionId?: string | undefined;
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "versionId" | "secretId">, never>>(object: I): CancelVersionDestructionRequest;
};
export declare const CancelVersionDestructionMetadata: {
    $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionMetadata";
    encode(message: CancelVersionDestructionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelVersionDestructionMetadata;
    fromJSON(object: any): CancelVersionDestructionMetadata;
    toJSON(message: CancelVersionDestructionMetadata): unknown;
    fromPartial<I extends {
        versionId?: string | undefined;
        secretId?: string | undefined;
    } & {
        versionId?: string | undefined;
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "versionId" | "secretId">, never>>(object: I): CancelVersionDestructionMetadata;
};
export declare const ListSecretOperationsRequest: {
    $type: "yandex.cloud.lockbox.v1.ListSecretOperationsRequest";
    encode(message: ListSecretOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecretOperationsRequest;
    fromJSON(object: any): ListSecretOperationsRequest;
    toJSON(message: ListSecretOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        secretId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        secretId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "secretId">, never>>(object: I): ListSecretOperationsRequest;
};
export declare const ListSecretOperationsResponse: {
    $type: "yandex.cloud.lockbox.v1.ListSecretOperationsResponse";
    encode(message: ListSecretOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSecretOperationsResponse;
    fromJSON(object: any): ListSecretOperationsResponse;
    toJSON(message: ListSecretOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListSecretOperationsResponse;
};
/** A set of methods for managing secrets. */
export declare const SecretServiceService: {
    /**
     * Returns the specified secret.
     *
     * To get the list of all available secrets, make a [List] request.
     * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
     */
    readonly get: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSecretRequest;
        readonly responseSerialize: (value: Secret) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Secret;
    };
    /** Retrieves the list of secrets in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSecretsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSecretsRequest;
        readonly responseSerialize: (value: ListSecretsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSecretsResponse;
    };
    /** Creates a secret in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSecretRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified secret. */
    readonly update: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSecretRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified secret. */
    readonly delete: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSecretRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Activates the specified secret. */
    readonly activate: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Activate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ActivateSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ActivateSecretRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deactivates the specified secret. */
    readonly deactivate: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/Deactivate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeactivateSecretRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeactivateSecretRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of versions of the specified secret. */
    readonly listVersions: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/ListVersions";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListVersionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListVersionsRequest;
        readonly responseSerialize: (value: ListVersionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListVersionsResponse;
    };
    /** Adds new version based on a previous one. */
    readonly addVersion: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/AddVersion";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddVersionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddVersionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Schedules the specified version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
     */
    readonly scheduleVersionDestruction: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/ScheduleVersionDestruction";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ScheduleVersionDestructionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ScheduleVersionDestructionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    readonly cancelVersionDestruction: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/CancelVersionDestruction";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CancelVersionDestructionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CancelVersionDestructionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified secret. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSecretOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSecretOperationsRequest;
        readonly responseSerialize: (value: ListSecretOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSecretOperationsResponse;
    };
    /** Lists existing access bindings for the specified secret. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the secret. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the secret. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.lockbox.v1.SecretService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface SecretServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified secret.
     *
     * To get the list of all available secrets, make a [List] request.
     * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
     */
    get: handleUnaryCall<GetSecretRequest, Secret>;
    /** Retrieves the list of secrets in the specified folder. */
    list: handleUnaryCall<ListSecretsRequest, ListSecretsResponse>;
    /** Creates a secret in the specified folder. */
    create: handleUnaryCall<CreateSecretRequest, Operation>;
    /** Updates the specified secret. */
    update: handleUnaryCall<UpdateSecretRequest, Operation>;
    /** Deletes the specified secret. */
    delete: handleUnaryCall<DeleteSecretRequest, Operation>;
    /** Activates the specified secret. */
    activate: handleUnaryCall<ActivateSecretRequest, Operation>;
    /** Deactivates the specified secret. */
    deactivate: handleUnaryCall<DeactivateSecretRequest, Operation>;
    /** Retrieves the list of versions of the specified secret. */
    listVersions: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
    /** Adds new version based on a previous one. */
    addVersion: handleUnaryCall<AddVersionRequest, Operation>;
    /**
     * Schedules the specified version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction: handleUnaryCall<ScheduleVersionDestructionRequest, Operation>;
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction: handleUnaryCall<CancelVersionDestructionRequest, Operation>;
    /** Lists operations for the specified secret. */
    listOperations: handleUnaryCall<ListSecretOperationsRequest, ListSecretOperationsResponse>;
    /** Lists existing access bindings for the specified secret. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the secret. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the secret. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface SecretServiceClient extends Client {
    /**
     * Returns the specified secret.
     *
     * To get the list of all available secrets, make a [List] request.
     * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
     */
    get(request: GetSecretRequest, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    get(request: GetSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    get(request: GetSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Secret) => void): ClientUnaryCall;
    /** Retrieves the list of secrets in the specified folder. */
    list(request: ListSecretsRequest, callback: (error: ServiceError | null, response: ListSecretsResponse) => void): ClientUnaryCall;
    list(request: ListSecretsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSecretsResponse) => void): ClientUnaryCall;
    list(request: ListSecretsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSecretsResponse) => void): ClientUnaryCall;
    /** Creates a secret in the specified folder. */
    create(request: CreateSecretRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified secret. */
    update(request: UpdateSecretRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified secret. */
    delete(request: DeleteSecretRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Activates the specified secret. */
    activate(request: ActivateSecretRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deactivates the specified secret. */
    deactivate(request: DeactivateSecretRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deactivate(request: DeactivateSecretRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deactivate(request: DeactivateSecretRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of versions of the specified secret. */
    listVersions(request: ListVersionsRequest, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListVersionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListVersionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    /** Adds new version based on a previous one. */
    addVersion(request: AddVersionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addVersion(request: AddVersionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addVersion(request: AddVersionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Schedules the specified version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction(request: ScheduleVersionDestructionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    scheduleVersionDestruction(request: ScheduleVersionDestructionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    scheduleVersionDestruction(request: ScheduleVersionDestructionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction(request: CancelVersionDestructionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancelVersionDestruction(request: CancelVersionDestructionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancelVersionDestruction(request: CancelVersionDestructionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified secret. */
    listOperations(request: ListSecretOperationsRequest, callback: (error: ServiceError | null, response: ListSecretOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSecretOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSecretOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSecretOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSecretOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified secret. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the secret. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the secret. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const SecretServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): SecretServiceClient;
    service: typeof SecretServiceService;
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
