/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Broker, BrokerCertificate, BrokerPassword } from "../../../../../yandex/cloud/iot/broker/v1/broker";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.iot.broker.v1";
export interface GetBrokerRequest {
    $type: "yandex.cloud.iot.broker.v1.GetBrokerRequest";
    /**
     * ID of the broker to return.
     *
     * To get a broker ID make a [BrokerService.List] request.
     */
    brokerId: string;
}
export interface ListBrokersRequest {
    $type: "yandex.cloud.iot.broker.v1.ListBrokersRequest";
    /**
     * ID of the folder to list brokers in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListBrokersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListBrokersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListBrokersResponse {
    $type: "yandex.cloud.iot.broker.v1.ListBrokersResponse";
    /** List of brokers. */
    brokers: Broker[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListBrokersRequest.page_size], use `next_page_token` as the value
     * for the [ListBrokersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateBrokerRequest {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest";
    /**
     * ID of the folder to create a broker in.
     *
     * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the broker. The name must be unique within the folder. */
    name: string;
    /** Description of the broker. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Broker certificates. */
    certificates: CreateBrokerRequest_Certificate[];
    /**
     * Broker passwords.
     *
     * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
     */
    password: string;
}
export interface CreateBrokerRequest_LabelsEntry {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry";
    key: string;
    value: string;
}
/** Specification of a broker certificate. */
export interface CreateBrokerRequest_Certificate {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.Certificate";
    /** Public part of the broker certificate. */
    certificateData: string;
}
export interface CreateBrokerMetadata {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerMetadata";
    /** ID of the broker that is being created. */
    brokerId: string;
}
export interface UpdateBrokerRequest {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest";
    /**
     * ID of the broker to update.
     *
     * To get a broker ID make a [BrokerService.List] request.
     */
    brokerId: string;
    /** Field mask that specifies which fields of the broker are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the broker. The name must be unique within the folder. */
    name: string;
    /** Description of the broker. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateBrokerRequest_LabelsEntry {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateBrokerMetadata {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerMetadata";
    /** ID of the broker that is being updated. */
    brokerId: string;
}
export interface DeleteBrokerRequest {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerRequest";
    /**
     * ID of the broker to delete.
     *
     * To get a broker ID make a [BrokerService.List] request.
     */
    brokerId: string;
}
export interface DeleteBrokerMetadata {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerMetadata";
    /** ID of the broker that is being deleted. */
    brokerId: string;
}
export interface ListBrokerCertificatesRequest {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesRequest";
    /** ID of the broker to list certificates for. */
    brokerId: string;
}
export interface ListBrokerCertificatesResponse {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesResponse";
    /** List of certificates for the specified broker. */
    certificates: BrokerCertificate[];
}
export interface AddBrokerCertificateRequest {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateRequest";
    /**
     * ID of the broker for which the certificate is being added.
     *
     * To get a broker ID make a [BrokerService.List] request.
     */
    brokerId: string;
    /** Public part of the certificate that is being added. */
    certificateData: string;
}
export interface AddBrokerCertificateMetadata {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateMetadata";
    /** ID of the broker certificate that is being added. */
    brokerId: string;
    /** Fingerprint of the certificate that is being added. */
    fingerprint: string;
}
export interface DeleteBrokerCertificateRequest {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateRequest";
    /**
     * ID of the broker to delete a certificate for.
     *
     * To get a broker ID make a [BrokerService.List] request.
     */
    brokerId: string;
    /** Fingerprint of the certificate that is being deleted. */
    fingerprint: string;
}
export interface DeleteBrokerCertificateMetadata {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateMetadata";
    /** ID of a broker for which the certificate is being delete. */
    brokerId: string;
    /** Fingerprint of the certificate to deleted. */
    fingerprint: string;
}
export interface ListBrokerPasswordsRequest {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsRequest";
    /**
     * ID of the broker to list passwords in.
     *
     * To get a broker ID make a [BrokerService.List] request.
     */
    brokerId: string;
}
export interface ListBrokerPasswordsResponse {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsResponse";
    /** List of passwords for the specified broker. */
    passwords: BrokerPassword[];
}
export interface AddBrokerPasswordRequest {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordRequest";
    /**
     * ID of the broker to add a password for.
     *
     * To get a broker ID make a [BrokerService.List] request.
     */
    brokerId: string;
    /**
     * Passwords for the broker.
     *
     * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
     */
    password: string;
}
export interface AddBrokerPasswordMetadata {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordMetadata";
    /** ID of the broker for which the password is being added. */
    brokerId: string;
    /** ID of a password that is being added. */
    passwordId: string;
}
export interface DeleteBrokerPasswordRequest {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordRequest";
    /**
     * ID of the broker to delete a password for.
     *
     * To get a broker ID make a [BrokerService.List] request.
     */
    brokerId: string;
    /**
     * ID of the password to delete.
     *
     * To get a password ID make a [BrokerService.ListPasswords] request.
     */
    passwordId: string;
}
export interface DeleteBrokerPasswordMetadata {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordMetadata";
    /** ID of a broker for which the password is being delete. */
    brokerId: string;
    /**
     * ID of the password to delete.
     *
     * To get a password ID make a [BrokerService.ListPasswords] request.
     */
    passwordId: string;
}
export interface ListBrokerOperationsRequest {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsRequest";
    /** ID of the broker to list operations for. */
    brokerId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListBrokerOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListBrokerOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on [Broker.name] field.
     */
    filter: string;
}
export interface ListBrokerOperationsResponse {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsResponse";
    /** List of operations for the specified broker. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListBrokerOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListBrokerOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetBrokerRequest: {
    $type: "yandex.cloud.iot.broker.v1.GetBrokerRequest";
    encode(message: GetBrokerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBrokerRequest;
    fromJSON(object: any): GetBrokerRequest;
    toJSON(message: GetBrokerRequest): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
    } & {
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId">, never>>(object: I): GetBrokerRequest;
};
export declare const ListBrokersRequest: {
    $type: "yandex.cloud.iot.broker.v1.ListBrokersRequest";
    encode(message: ListBrokersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBrokersRequest;
    fromJSON(object: any): ListBrokersRequest;
    toJSON(message: ListBrokersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListBrokersRequest;
};
export declare const ListBrokersResponse: {
    $type: "yandex.cloud.iot.broker.v1.ListBrokersResponse";
    encode(message: ListBrokersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBrokersResponse;
    fromJSON(object: any): ListBrokersResponse;
    toJSON(message: ListBrokersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        brokers?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/iot/broker/v1/broker").Broker_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        brokers?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/iot/broker/v1/broker").Broker_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/iot/broker/v1/broker").Broker_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/iot/broker/v1/broker").Broker_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["brokers"][number]["labels"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["brokers"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels">, never>)[] & Record<Exclude<keyof I["brokers"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/iot/broker/v1/broker").Broker_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "brokers">, never>>(object: I): ListBrokersResponse;
};
export declare const CreateBrokerRequest: {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest";
    encode(message: CreateBrokerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBrokerRequest;
    fromJSON(object: any): CreateBrokerRequest;
    toJSON(message: CreateBrokerRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        certificates?: {
            certificateData?: string | undefined;
        }[] | undefined;
        password?: string | undefined;
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
        certificates?: ({
            certificateData?: string | undefined;
        }[] & ({
            certificateData?: string | undefined;
        } & {
            certificateData?: string | undefined;
        } & Record<Exclude<keyof I["certificates"][number], "$type" | "certificateData">, never>)[] & Record<Exclude<keyof I["certificates"], "$type" | keyof {
            certificateData?: string | undefined;
        }[]>, never>) | undefined;
        password?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "certificates" | "password">, never>>(object: I): CreateBrokerRequest;
};
export declare const CreateBrokerRequest_LabelsEntry: {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry";
    encode(message: CreateBrokerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBrokerRequest_LabelsEntry;
    fromJSON(object: any): CreateBrokerRequest_LabelsEntry;
    toJSON(message: CreateBrokerRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateBrokerRequest_LabelsEntry;
};
export declare const CreateBrokerRequest_Certificate: {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.Certificate";
    encode(message: CreateBrokerRequest_Certificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBrokerRequest_Certificate;
    fromJSON(object: any): CreateBrokerRequest_Certificate;
    toJSON(message: CreateBrokerRequest_Certificate): unknown;
    fromPartial<I extends {
        certificateData?: string | undefined;
    } & {
        certificateData?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateData">, never>>(object: I): CreateBrokerRequest_Certificate;
};
export declare const CreateBrokerMetadata: {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerMetadata";
    encode(message: CreateBrokerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBrokerMetadata;
    fromJSON(object: any): CreateBrokerMetadata;
    toJSON(message: CreateBrokerMetadata): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
    } & {
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId">, never>>(object: I): CreateBrokerMetadata;
};
export declare const UpdateBrokerRequest: {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest";
    encode(message: UpdateBrokerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBrokerRequest;
    fromJSON(object: any): UpdateBrokerRequest;
    toJSON(message: UpdateBrokerRequest): unknown;
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
        brokerId?: string | undefined;
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
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "brokerId">, never>>(object: I): UpdateBrokerRequest;
};
export declare const UpdateBrokerRequest_LabelsEntry: {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry";
    encode(message: UpdateBrokerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBrokerRequest_LabelsEntry;
    fromJSON(object: any): UpdateBrokerRequest_LabelsEntry;
    toJSON(message: UpdateBrokerRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateBrokerRequest_LabelsEntry;
};
export declare const UpdateBrokerMetadata: {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerMetadata";
    encode(message: UpdateBrokerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBrokerMetadata;
    fromJSON(object: any): UpdateBrokerMetadata;
    toJSON(message: UpdateBrokerMetadata): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
    } & {
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId">, never>>(object: I): UpdateBrokerMetadata;
};
export declare const DeleteBrokerRequest: {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerRequest";
    encode(message: DeleteBrokerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBrokerRequest;
    fromJSON(object: any): DeleteBrokerRequest;
    toJSON(message: DeleteBrokerRequest): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
    } & {
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId">, never>>(object: I): DeleteBrokerRequest;
};
export declare const DeleteBrokerMetadata: {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerMetadata";
    encode(message: DeleteBrokerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBrokerMetadata;
    fromJSON(object: any): DeleteBrokerMetadata;
    toJSON(message: DeleteBrokerMetadata): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
    } & {
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId">, never>>(object: I): DeleteBrokerMetadata;
};
export declare const ListBrokerCertificatesRequest: {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesRequest";
    encode(message: ListBrokerCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBrokerCertificatesRequest;
    fromJSON(object: any): ListBrokerCertificatesRequest;
    toJSON(message: ListBrokerCertificatesRequest): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
    } & {
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId">, never>>(object: I): ListBrokerCertificatesRequest;
};
export declare const ListBrokerCertificatesResponse: {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesResponse";
    encode(message: ListBrokerCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBrokerCertificatesResponse;
    fromJSON(object: any): ListBrokerCertificatesResponse;
    toJSON(message: ListBrokerCertificatesResponse): unknown;
    fromPartial<I extends {
        certificates?: {
            createdAt?: Date | undefined;
            brokerId?: string | undefined;
            fingerprint?: string | undefined;
            certificateData?: string | undefined;
        }[] | undefined;
    } & {
        certificates?: ({
            createdAt?: Date | undefined;
            brokerId?: string | undefined;
            fingerprint?: string | undefined;
            certificateData?: string | undefined;
        }[] & ({
            createdAt?: Date | undefined;
            brokerId?: string | undefined;
            fingerprint?: string | undefined;
            certificateData?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            brokerId?: string | undefined;
            fingerprint?: string | undefined;
            certificateData?: string | undefined;
        } & Record<Exclude<keyof I["certificates"][number], "$type" | "createdAt" | "brokerId" | "fingerprint" | "certificateData">, never>)[] & Record<Exclude<keyof I["certificates"], "$type" | keyof {
            createdAt?: Date | undefined;
            brokerId?: string | undefined;
            fingerprint?: string | undefined;
            certificateData?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificates">, never>>(object: I): ListBrokerCertificatesResponse;
};
export declare const AddBrokerCertificateRequest: {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateRequest";
    encode(message: AddBrokerCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddBrokerCertificateRequest;
    fromJSON(object: any): AddBrokerCertificateRequest;
    toJSON(message: AddBrokerCertificateRequest): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
        certificateData?: string | undefined;
    } & {
        brokerId?: string | undefined;
        certificateData?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId" | "certificateData">, never>>(object: I): AddBrokerCertificateRequest;
};
export declare const AddBrokerCertificateMetadata: {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateMetadata";
    encode(message: AddBrokerCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddBrokerCertificateMetadata;
    fromJSON(object: any): AddBrokerCertificateMetadata;
    toJSON(message: AddBrokerCertificateMetadata): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
        fingerprint?: string | undefined;
    } & {
        brokerId?: string | undefined;
        fingerprint?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId" | "fingerprint">, never>>(object: I): AddBrokerCertificateMetadata;
};
export declare const DeleteBrokerCertificateRequest: {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateRequest";
    encode(message: DeleteBrokerCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBrokerCertificateRequest;
    fromJSON(object: any): DeleteBrokerCertificateRequest;
    toJSON(message: DeleteBrokerCertificateRequest): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
        fingerprint?: string | undefined;
    } & {
        brokerId?: string | undefined;
        fingerprint?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId" | "fingerprint">, never>>(object: I): DeleteBrokerCertificateRequest;
};
export declare const DeleteBrokerCertificateMetadata: {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateMetadata";
    encode(message: DeleteBrokerCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBrokerCertificateMetadata;
    fromJSON(object: any): DeleteBrokerCertificateMetadata;
    toJSON(message: DeleteBrokerCertificateMetadata): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
        fingerprint?: string | undefined;
    } & {
        brokerId?: string | undefined;
        fingerprint?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId" | "fingerprint">, never>>(object: I): DeleteBrokerCertificateMetadata;
};
export declare const ListBrokerPasswordsRequest: {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsRequest";
    encode(message: ListBrokerPasswordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBrokerPasswordsRequest;
    fromJSON(object: any): ListBrokerPasswordsRequest;
    toJSON(message: ListBrokerPasswordsRequest): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
    } & {
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId">, never>>(object: I): ListBrokerPasswordsRequest;
};
export declare const ListBrokerPasswordsResponse: {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsResponse";
    encode(message: ListBrokerPasswordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBrokerPasswordsResponse;
    fromJSON(object: any): ListBrokerPasswordsResponse;
    toJSON(message: ListBrokerPasswordsResponse): unknown;
    fromPartial<I extends {
        passwords?: {
            id?: string | undefined;
            createdAt?: Date | undefined;
            brokerId?: string | undefined;
        }[] | undefined;
    } & {
        passwords?: ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            brokerId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            brokerId?: string | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            brokerId?: string | undefined;
        } & Record<Exclude<keyof I["passwords"][number], "$type" | "id" | "createdAt" | "brokerId">, never>)[] & Record<Exclude<keyof I["passwords"], "$type" | keyof {
            id?: string | undefined;
            createdAt?: Date | undefined;
            brokerId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "passwords">, never>>(object: I): ListBrokerPasswordsResponse;
};
export declare const AddBrokerPasswordRequest: {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordRequest";
    encode(message: AddBrokerPasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddBrokerPasswordRequest;
    fromJSON(object: any): AddBrokerPasswordRequest;
    toJSON(message: AddBrokerPasswordRequest): unknown;
    fromPartial<I extends {
        password?: string | undefined;
        brokerId?: string | undefined;
    } & {
        password?: string | undefined;
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "password" | "brokerId">, never>>(object: I): AddBrokerPasswordRequest;
};
export declare const AddBrokerPasswordMetadata: {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordMetadata";
    encode(message: AddBrokerPasswordMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddBrokerPasswordMetadata;
    fromJSON(object: any): AddBrokerPasswordMetadata;
    toJSON(message: AddBrokerPasswordMetadata): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
        passwordId?: string | undefined;
    } & {
        brokerId?: string | undefined;
        passwordId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId" | "passwordId">, never>>(object: I): AddBrokerPasswordMetadata;
};
export declare const DeleteBrokerPasswordRequest: {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordRequest";
    encode(message: DeleteBrokerPasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBrokerPasswordRequest;
    fromJSON(object: any): DeleteBrokerPasswordRequest;
    toJSON(message: DeleteBrokerPasswordRequest): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
        passwordId?: string | undefined;
    } & {
        brokerId?: string | undefined;
        passwordId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId" | "passwordId">, never>>(object: I): DeleteBrokerPasswordRequest;
};
export declare const DeleteBrokerPasswordMetadata: {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordMetadata";
    encode(message: DeleteBrokerPasswordMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBrokerPasswordMetadata;
    fromJSON(object: any): DeleteBrokerPasswordMetadata;
    toJSON(message: DeleteBrokerPasswordMetadata): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
        passwordId?: string | undefined;
    } & {
        brokerId?: string | undefined;
        passwordId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId" | "passwordId">, never>>(object: I): DeleteBrokerPasswordMetadata;
};
export declare const ListBrokerOperationsRequest: {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsRequest";
    encode(message: ListBrokerOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBrokerOperationsRequest;
    fromJSON(object: any): ListBrokerOperationsRequest;
    toJSON(message: ListBrokerOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        brokerId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "brokerId">, never>>(object: I): ListBrokerOperationsRequest;
};
export declare const ListBrokerOperationsResponse: {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsResponse";
    encode(message: ListBrokerOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBrokerOperationsResponse;
    fromJSON(object: any): ListBrokerOperationsResponse;
    toJSON(message: ListBrokerOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListBrokerOperationsResponse;
};
/** A set of methods for managing broker. */
export declare const BrokerServiceService: {
    /**
     * Returns the specified broker.
     *
     * To get the list of available brokers, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBrokerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBrokerRequest;
        readonly responseSerialize: (value: Broker) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Broker;
    };
    /** Retrieves the list of brokers in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBrokersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBrokersRequest;
        readonly responseSerialize: (value: ListBrokersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBrokersResponse;
    };
    /** Creates a broker in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateBrokerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateBrokerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified broker. */
    readonly update: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateBrokerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateBrokerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified broker. */
    readonly delete: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBrokerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBrokerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of broker certificates for the specified broker. */
    readonly listCertificates: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/ListCertificates";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBrokerCertificatesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBrokerCertificatesRequest;
        readonly responseSerialize: (value: ListBrokerCertificatesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBrokerCertificatesResponse;
    };
    /** Adds a certificate. */
    readonly addCertificate: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/AddCertificate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddBrokerCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddBrokerCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified broker certificate. */
    readonly deleteCertificate: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/DeleteCertificate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBrokerCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBrokerCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of passwords for the specified broker. */
    readonly listPasswords: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/ListPasswords";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBrokerPasswordsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBrokerPasswordsRequest;
        readonly responseSerialize: (value: ListBrokerPasswordsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBrokerPasswordsResponse;
    };
    /** Adds password for the specified broker. */
    readonly addPassword: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/AddPassword";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddBrokerPasswordRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddBrokerPasswordRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified password. */
    readonly deletePassword: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/DeletePassword";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBrokerPasswordRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBrokerPasswordRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified broker. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBrokerOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBrokerOperationsRequest;
        readonly responseSerialize: (value: ListBrokerOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBrokerOperationsResponse;
    };
};
export interface BrokerServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified broker.
     *
     * To get the list of available brokers, make a [List] request.
     */
    get: handleUnaryCall<GetBrokerRequest, Broker>;
    /** Retrieves the list of brokers in the specified folder. */
    list: handleUnaryCall<ListBrokersRequest, ListBrokersResponse>;
    /** Creates a broker in the specified folder. */
    create: handleUnaryCall<CreateBrokerRequest, Operation>;
    /** Updates the specified broker. */
    update: handleUnaryCall<UpdateBrokerRequest, Operation>;
    /** Deletes the specified broker. */
    delete: handleUnaryCall<DeleteBrokerRequest, Operation>;
    /** Retrieves the list of broker certificates for the specified broker. */
    listCertificates: handleUnaryCall<ListBrokerCertificatesRequest, ListBrokerCertificatesResponse>;
    /** Adds a certificate. */
    addCertificate: handleUnaryCall<AddBrokerCertificateRequest, Operation>;
    /** Deletes the specified broker certificate. */
    deleteCertificate: handleUnaryCall<DeleteBrokerCertificateRequest, Operation>;
    /** Retrieves the list of passwords for the specified broker. */
    listPasswords: handleUnaryCall<ListBrokerPasswordsRequest, ListBrokerPasswordsResponse>;
    /** Adds password for the specified broker. */
    addPassword: handleUnaryCall<AddBrokerPasswordRequest, Operation>;
    /** Deletes the specified password. */
    deletePassword: handleUnaryCall<DeleteBrokerPasswordRequest, Operation>;
    /** Lists operations for the specified broker. */
    listOperations: handleUnaryCall<ListBrokerOperationsRequest, ListBrokerOperationsResponse>;
}
export interface BrokerServiceClient extends Client {
    /**
     * Returns the specified broker.
     *
     * To get the list of available brokers, make a [List] request.
     */
    get(request: GetBrokerRequest, callback: (error: ServiceError | null, response: Broker) => void): ClientUnaryCall;
    get(request: GetBrokerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Broker) => void): ClientUnaryCall;
    get(request: GetBrokerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Broker) => void): ClientUnaryCall;
    /** Retrieves the list of brokers in the specified folder. */
    list(request: ListBrokersRequest, callback: (error: ServiceError | null, response: ListBrokersResponse) => void): ClientUnaryCall;
    list(request: ListBrokersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBrokersResponse) => void): ClientUnaryCall;
    list(request: ListBrokersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBrokersResponse) => void): ClientUnaryCall;
    /** Creates a broker in the specified folder. */
    create(request: CreateBrokerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBrokerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBrokerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified broker. */
    update(request: UpdateBrokerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateBrokerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateBrokerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified broker. */
    delete(request: DeleteBrokerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBrokerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBrokerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of broker certificates for the specified broker. */
    listCertificates(request: ListBrokerCertificatesRequest, callback: (error: ServiceError | null, response: ListBrokerCertificatesResponse) => void): ClientUnaryCall;
    listCertificates(request: ListBrokerCertificatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBrokerCertificatesResponse) => void): ClientUnaryCall;
    listCertificates(request: ListBrokerCertificatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBrokerCertificatesResponse) => void): ClientUnaryCall;
    /** Adds a certificate. */
    addCertificate(request: AddBrokerCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addCertificate(request: AddBrokerCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addCertificate(request: AddBrokerCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified broker certificate. */
    deleteCertificate(request: DeleteBrokerCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteCertificate(request: DeleteBrokerCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteCertificate(request: DeleteBrokerCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of passwords for the specified broker. */
    listPasswords(request: ListBrokerPasswordsRequest, callback: (error: ServiceError | null, response: ListBrokerPasswordsResponse) => void): ClientUnaryCall;
    listPasswords(request: ListBrokerPasswordsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBrokerPasswordsResponse) => void): ClientUnaryCall;
    listPasswords(request: ListBrokerPasswordsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBrokerPasswordsResponse) => void): ClientUnaryCall;
    /** Adds password for the specified broker. */
    addPassword(request: AddBrokerPasswordRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addPassword(request: AddBrokerPasswordRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addPassword(request: AddBrokerPasswordRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified password. */
    deletePassword(request: DeleteBrokerPasswordRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deletePassword(request: DeleteBrokerPasswordRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deletePassword(request: DeleteBrokerPasswordRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified broker. */
    listOperations(request: ListBrokerOperationsRequest, callback: (error: ServiceError | null, response: ListBrokerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListBrokerOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBrokerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListBrokerOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBrokerOperationsResponse) => void): ClientUnaryCall;
}
export declare const BrokerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): BrokerServiceClient;
    service: typeof BrokerServiceService;
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
