/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { ChallengeType, Certificate, Version } from "../../../../yandex/cloud/certificatemanager/v1/certificate";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.certificatemanager.v1";
export declare enum CertificateView {
    /** BASIC - Output basic information about the certificate. */
    BASIC = 0,
    /** FULL - Output full information about the certificate including domain challenges. */
    FULL = 1,
    UNRECOGNIZED = -1
}
export declare function certificateViewFromJSON(object: any): CertificateView;
export declare function certificateViewToJSON(object: CertificateView): string;
export interface GetCertificateRequest {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateRequest";
    /**
     * ID of the certificate to return.
     *
     * To get the ID of a certificate use a [CertificateService.List] request.
     */
    certificateId: string;
    /** The output type of the certificate. */
    view: CertificateView;
}
export interface ListCertificatesRequest {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificatesRequest";
    /** ID of the folder to list certificate in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListCertificatesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListCertificatesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /** The output type of the certificate. */
    view: CertificateView;
}
export interface ListCertificatesResponse {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificatesResponse";
    /** List of certificates in the specified folder. */
    certificates: Certificate[];
    /**
     * This token allows you to get the next page of results for list requests. If the number
     * of results is greater than the specified [ListCertificatesRequest.page_size], use
     * the `next_page_token` as the value for the [ListCertificatesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListVersionsRequest {
    $type: "yandex.cloud.certificatemanager.v1.ListVersionsRequest";
    /** ID of the certificate to list versions for. */
    certificateId: string;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListCertificatesResponse.next_page_token] returned by a previous list request.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListCertificatesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListVersionsResponse {
    $type: "yandex.cloud.certificatemanager.v1.ListVersionsResponse";
    /** List of versions for the specified certificate. */
    versions: Version[];
    /**
     * This token allows you to get the next page of results for list requests. If the number
     * of results is greater than the specified [ListCertificatesRequest.page_size], use
     * the `next_page_token` as the value for the [ListCertificatesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateCertificateRequest {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest";
    /** ID of the folder to create a certificate in. */
    folderId: string;
    /**
     * Name of the certificate.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the certificate. */
    description: string;
    /** Labels for the certificate as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** PEM-encoded certificate content of the certificate. */
    certificate: string;
    /** PEM-encoded certificate chain content of the certificate. */
    chain: string;
    /** PEM-encoded private key content of the certificate. */
    privateKey: string;
    /** Flag that protects deletion of the certificate */
    deletionProtection: boolean;
}
export interface CreateCertificateRequest_LabelsEntry {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateCertificateMetadata {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateMetadata";
    /** ID of the certificate being created. */
    certificateId: string;
}
export interface UpdateCertificateRequest {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest";
    /**
     * ID of the certificate to update.
     * To get the ID of a certificate use a [CertificateService.List] request.
     */
    certificateId: string;
    /** Field mask that specifies which attributes of the certificate are going to be updated. */
    updateMask?: FieldMask;
    /** New name for the certificate. */
    name: string;
    /** New description for the certificate. */
    description: string;
    /** New labels for the certificate as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** New PEM-encoded certificate content for the certificate. Used only for imported certificates. */
    certificate: string;
    /** New PEM-encoded certificate chain content for the certificate. Used only for imported certificates. */
    chain: string;
    /** New PEM-encoded private key content for the certificate. Used only for imported certificates. */
    privateKey: string;
    /** Flag that protects deletion of the certificate */
    deletionProtection: boolean;
}
export interface UpdateCertificateRequest_LabelsEntry {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateCertificateMetadata {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateMetadata";
    /** ID of the certificate being updated. */
    certificateId: string;
}
export interface DeleteCertificateRequest {
    $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateRequest";
    /** ID of the certificate to be deleted. */
    certificateId: string;
}
export interface DeleteCertificateMetadata {
    $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateMetadata";
    /** ID of the certificate being deleted. */
    certificateId: string;
}
export interface RequestNewCertificateRequest {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest";
    /** ID of the folder to create a certificate in. */
    folderId: string;
    /** Name of the certificate. */
    name: string;
    /** Description of the certificate. */
    description: string;
    /** Labels for the certificate as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Fully qualified domain names of the certificate. */
    domains: string[];
    /** Type of the domain validation challenge. */
    challengeType: ChallengeType;
    /** Flag that protects deletion of the certificate */
    deletionProtection: boolean;
}
export interface RequestNewCertificateRequest_LabelsEntry {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface RequestNewCertificateMetadata {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateMetadata";
    /** ID of the certificate that is being requested. */
    certificateId: string;
}
export interface ListCertificateOperationsRequest {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsRequest";
    /**
     * ID of the certificate to list operations for.
     *
     * To get the certificate ID, use a [CertificateService.List] request.
     */
    certificateId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListCertificateOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListCertificateOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListCertificateOperationsResponse {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsResponse";
    /** List of operations for the specified certificate. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCertificateOperationsRequest.page_size], use the `next_page_token` as the value
     * for the [ListCertificateOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetCertificateRequest: {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateRequest";
    encode(message: GetCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCertificateRequest;
    fromJSON(object: any): GetCertificateRequest;
    toJSON(message: GetCertificateRequest): unknown;
    fromPartial<I extends {
        certificateId?: string | undefined;
        view?: CertificateView | undefined;
    } & {
        certificateId?: string | undefined;
        view?: CertificateView | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateId" | "view">, never>>(object: I): GetCertificateRequest;
};
export declare const ListCertificatesRequest: {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificatesRequest";
    encode(message: ListCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCertificatesRequest;
    fromJSON(object: any): ListCertificatesRequest;
    toJSON(message: ListCertificatesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
        view?: CertificateView | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
        view?: CertificateView | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId" | "view">, never>>(object: I): ListCertificatesRequest;
};
export declare const ListCertificatesResponse: {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificatesResponse";
    encode(message: ListCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCertificatesResponse;
    fromJSON(object: any): ListCertificatesResponse;
    toJSON(message: ListCertificatesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        certificates?: {
            description?: string | undefined;
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").CertificateType | undefined;
            subject?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Certificate_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            domains?: string[] | undefined;
            issuer?: string | undefined;
            serial?: string | undefined;
            deletionProtection?: boolean | undefined;
            incompleteChain?: boolean | undefined;
            issuedAt?: Date | undefined;
            notAfter?: Date | undefined;
            notBefore?: Date | undefined;
            challenges?: {
                type?: ChallengeType | undefined;
                message?: string | undefined;
                createdAt?: Date | undefined;
                error?: string | undefined;
                status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Challenge_Status | undefined;
                updatedAt?: Date | undefined;
                domain?: string | undefined;
                dnsChallenge?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                httpChallenge?: {
                    content?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        certificates?: ({
            description?: string | undefined;
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").CertificateType | undefined;
            subject?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Certificate_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            domains?: string[] | undefined;
            issuer?: string | undefined;
            serial?: string | undefined;
            deletionProtection?: boolean | undefined;
            incompleteChain?: boolean | undefined;
            issuedAt?: Date | undefined;
            notAfter?: Date | undefined;
            notBefore?: Date | undefined;
            challenges?: {
                type?: ChallengeType | undefined;
                message?: string | undefined;
                createdAt?: Date | undefined;
                error?: string | undefined;
                status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Challenge_Status | undefined;
                updatedAt?: Date | undefined;
                domain?: string | undefined;
                dnsChallenge?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                httpChallenge?: {
                    content?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").CertificateType | undefined;
            subject?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Certificate_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            domains?: string[] | undefined;
            issuer?: string | undefined;
            serial?: string | undefined;
            deletionProtection?: boolean | undefined;
            incompleteChain?: boolean | undefined;
            issuedAt?: Date | undefined;
            notAfter?: Date | undefined;
            notBefore?: Date | undefined;
            challenges?: {
                type?: ChallengeType | undefined;
                message?: string | undefined;
                createdAt?: Date | undefined;
                error?: string | undefined;
                status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Challenge_Status | undefined;
                updatedAt?: Date | undefined;
                domain?: string | undefined;
                dnsChallenge?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                httpChallenge?: {
                    content?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").CertificateType | undefined;
            subject?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Certificate_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["certificates"][number]["labels"], string | number>, never>) | undefined;
            updatedAt?: Date | undefined;
            domains?: (string[] & string[] & Record<Exclude<keyof I["certificates"][number]["domains"], "$type" | keyof string[]>, never>) | undefined;
            issuer?: string | undefined;
            serial?: string | undefined;
            deletionProtection?: boolean | undefined;
            incompleteChain?: boolean | undefined;
            issuedAt?: Date | undefined;
            notAfter?: Date | undefined;
            notBefore?: Date | undefined;
            challenges?: ({
                type?: ChallengeType | undefined;
                message?: string | undefined;
                createdAt?: Date | undefined;
                error?: string | undefined;
                status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Challenge_Status | undefined;
                updatedAt?: Date | undefined;
                domain?: string | undefined;
                dnsChallenge?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                httpChallenge?: {
                    content?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }[] & ({
                type?: ChallengeType | undefined;
                message?: string | undefined;
                createdAt?: Date | undefined;
                error?: string | undefined;
                status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Challenge_Status | undefined;
                updatedAt?: Date | undefined;
                domain?: string | undefined;
                dnsChallenge?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                httpChallenge?: {
                    content?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            } & {
                type?: ChallengeType | undefined;
                message?: string | undefined;
                createdAt?: Date | undefined;
                error?: string | undefined;
                status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Challenge_Status | undefined;
                updatedAt?: Date | undefined;
                domain?: string | undefined;
                dnsChallenge?: ({
                    type?: string | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                } & {
                    type?: string | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                } & Record<Exclude<keyof I["certificates"][number]["challenges"][number]["dnsChallenge"], "$type" | "type" | "name" | "value">, never>) | undefined;
                httpChallenge?: ({
                    content?: string | undefined;
                    url?: string | undefined;
                } & {
                    content?: string | undefined;
                    url?: string | undefined;
                } & Record<Exclude<keyof I["certificates"][number]["challenges"][number]["httpChallenge"], "$type" | "content" | "url">, never>) | undefined;
            } & Record<Exclude<keyof I["certificates"][number]["challenges"][number], "$type" | "type" | "message" | "createdAt" | "error" | "status" | "updatedAt" | "domain" | "dnsChallenge" | "httpChallenge">, never>)[] & Record<Exclude<keyof I["certificates"][number]["challenges"], "$type" | keyof {
                type?: ChallengeType | undefined;
                message?: string | undefined;
                createdAt?: Date | undefined;
                error?: string | undefined;
                status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Challenge_Status | undefined;
                updatedAt?: Date | undefined;
                domain?: string | undefined;
                dnsChallenge?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                httpChallenge?: {
                    content?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["certificates"][number], "$type" | "description" | "id" | "type" | "subject" | "name" | "createdAt" | "status" | "folderId" | "labels" | "updatedAt" | "domains" | "issuer" | "serial" | "deletionProtection" | "incompleteChain" | "issuedAt" | "notAfter" | "notBefore" | "challenges">, never>)[] & Record<Exclude<keyof I["certificates"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            type?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").CertificateType | undefined;
            subject?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Certificate_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            domains?: string[] | undefined;
            issuer?: string | undefined;
            serial?: string | undefined;
            deletionProtection?: boolean | undefined;
            incompleteChain?: boolean | undefined;
            issuedAt?: Date | undefined;
            notAfter?: Date | undefined;
            notBefore?: Date | undefined;
            challenges?: {
                type?: ChallengeType | undefined;
                message?: string | undefined;
                createdAt?: Date | undefined;
                error?: string | undefined;
                status?: import("../../../../yandex/cloud/certificatemanager/v1/certificate").Challenge_Status | undefined;
                updatedAt?: Date | undefined;
                domain?: string | undefined;
                dnsChallenge?: {
                    type?: string | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                } | undefined;
                httpChallenge?: {
                    content?: string | undefined;
                    url?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "certificates">, never>>(object: I): ListCertificatesResponse;
};
export declare const ListVersionsRequest: {
    $type: "yandex.cloud.certificatemanager.v1.ListVersionsRequest";
    encode(message: ListVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVersionsRequest;
    fromJSON(object: any): ListVersionsRequest;
    toJSON(message: ListVersionsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        certificateId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        certificateId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "certificateId">, never>>(object: I): ListVersionsRequest;
};
export declare const ListVersionsResponse: {
    $type: "yandex.cloud.certificatemanager.v1.ListVersionsResponse";
    encode(message: ListVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVersionsResponse;
    fromJSON(object: any): ListVersionsResponse;
    toJSON(message: ListVersionsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        versions?: {
            id?: string | undefined;
            createdAt?: Date | undefined;
            certificateId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        versions?: ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            certificateId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            certificateId?: string | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            certificateId?: string | undefined;
        } & Record<Exclude<keyof I["versions"][number], "$type" | "id" | "createdAt" | "certificateId">, never>)[] & Record<Exclude<keyof I["versions"], "$type" | keyof {
            id?: string | undefined;
            createdAt?: Date | undefined;
            certificateId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "versions">, never>>(object: I): ListVersionsResponse;
};
export declare const CreateCertificateRequest: {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest";
    encode(message: CreateCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateCertificateRequest;
    fromJSON(object: any): CreateCertificateRequest;
    toJSON(message: CreateCertificateRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        privateKey?: string | undefined;
        certificate?: string | undefined;
        chain?: string | undefined;
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
        privateKey?: string | undefined;
        certificate?: string | undefined;
        chain?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "deletionProtection" | "privateKey" | "certificate" | "chain">, never>>(object: I): CreateCertificateRequest;
};
export declare const CreateCertificateRequest_LabelsEntry: {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry";
    encode(message: CreateCertificateRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateCertificateRequest_LabelsEntry;
    fromJSON(object: any): CreateCertificateRequest_LabelsEntry;
    toJSON(message: CreateCertificateRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateCertificateRequest_LabelsEntry;
};
export declare const CreateCertificateMetadata: {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateMetadata";
    encode(message: CreateCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateCertificateMetadata;
    fromJSON(object: any): CreateCertificateMetadata;
    toJSON(message: CreateCertificateMetadata): unknown;
    fromPartial<I extends {
        certificateId?: string | undefined;
    } & {
        certificateId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateId">, never>>(object: I): CreateCertificateMetadata;
};
export declare const UpdateCertificateRequest: {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest";
    encode(message: UpdateCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCertificateRequest;
    fromJSON(object: any): UpdateCertificateRequest;
    toJSON(message: UpdateCertificateRequest): unknown;
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
        certificateId?: string | undefined;
        privateKey?: string | undefined;
        certificate?: string | undefined;
        chain?: string | undefined;
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
        certificateId?: string | undefined;
        privateKey?: string | undefined;
        certificate?: string | undefined;
        chain?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "deletionProtection" | "certificateId" | "privateKey" | "certificate" | "chain">, never>>(object: I): UpdateCertificateRequest;
};
export declare const UpdateCertificateRequest_LabelsEntry: {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry";
    encode(message: UpdateCertificateRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCertificateRequest_LabelsEntry;
    fromJSON(object: any): UpdateCertificateRequest_LabelsEntry;
    toJSON(message: UpdateCertificateRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateCertificateRequest_LabelsEntry;
};
export declare const UpdateCertificateMetadata: {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateMetadata";
    encode(message: UpdateCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateCertificateMetadata;
    fromJSON(object: any): UpdateCertificateMetadata;
    toJSON(message: UpdateCertificateMetadata): unknown;
    fromPartial<I extends {
        certificateId?: string | undefined;
    } & {
        certificateId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateId">, never>>(object: I): UpdateCertificateMetadata;
};
export declare const DeleteCertificateRequest: {
    $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateRequest";
    encode(message: DeleteCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteCertificateRequest;
    fromJSON(object: any): DeleteCertificateRequest;
    toJSON(message: DeleteCertificateRequest): unknown;
    fromPartial<I extends {
        certificateId?: string | undefined;
    } & {
        certificateId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateId">, never>>(object: I): DeleteCertificateRequest;
};
export declare const DeleteCertificateMetadata: {
    $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateMetadata";
    encode(message: DeleteCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteCertificateMetadata;
    fromJSON(object: any): DeleteCertificateMetadata;
    toJSON(message: DeleteCertificateMetadata): unknown;
    fromPartial<I extends {
        certificateId?: string | undefined;
    } & {
        certificateId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateId">, never>>(object: I): DeleteCertificateMetadata;
};
export declare const RequestNewCertificateRequest: {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest";
    encode(message: RequestNewCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestNewCertificateRequest;
    fromJSON(object: any): RequestNewCertificateRequest;
    toJSON(message: RequestNewCertificateRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        domains?: string[] | undefined;
        deletionProtection?: boolean | undefined;
        challengeType?: ChallengeType | undefined;
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
        domains?: (string[] & string[] & Record<Exclude<keyof I["domains"], "$type" | keyof string[]>, never>) | undefined;
        deletionProtection?: boolean | undefined;
        challengeType?: ChallengeType | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "domains" | "deletionProtection" | "challengeType">, never>>(object: I): RequestNewCertificateRequest;
};
export declare const RequestNewCertificateRequest_LabelsEntry: {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry";
    encode(message: RequestNewCertificateRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestNewCertificateRequest_LabelsEntry;
    fromJSON(object: any): RequestNewCertificateRequest_LabelsEntry;
    toJSON(message: RequestNewCertificateRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): RequestNewCertificateRequest_LabelsEntry;
};
export declare const RequestNewCertificateMetadata: {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateMetadata";
    encode(message: RequestNewCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestNewCertificateMetadata;
    fromJSON(object: any): RequestNewCertificateMetadata;
    toJSON(message: RequestNewCertificateMetadata): unknown;
    fromPartial<I extends {
        certificateId?: string | undefined;
    } & {
        certificateId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateId">, never>>(object: I): RequestNewCertificateMetadata;
};
export declare const ListCertificateOperationsRequest: {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsRequest";
    encode(message: ListCertificateOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCertificateOperationsRequest;
    fromJSON(object: any): ListCertificateOperationsRequest;
    toJSON(message: ListCertificateOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        certificateId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        certificateId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "certificateId">, never>>(object: I): ListCertificateOperationsRequest;
};
export declare const ListCertificateOperationsResponse: {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsResponse";
    encode(message: ListCertificateOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCertificateOperationsResponse;
    fromJSON(object: any): ListCertificateOperationsResponse;
    toJSON(message: ListCertificateOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListCertificateOperationsResponse;
};
/** A set of methods for managing certificates. */
export declare const CertificateServiceService: {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetCertificateRequest;
        readonly responseSerialize: (value: Certificate) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Certificate;
    };
    /** Returns the list of certificates in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCertificatesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListCertificatesRequest;
        readonly responseSerialize: (value: ListCertificatesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListCertificatesResponse;
    };
    readonly listVersions: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListVersions";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListVersionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListVersionsRequest;
        readonly responseSerialize: (value: ListVersionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListVersionsResponse;
    };
    /** Creates a certificate in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified certificate. */
    readonly update: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified certificate. */
    readonly delete: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Request a certificate in the specified folder. */
    readonly requestNew: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/RequestNew";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RequestNewCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RequestNewCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified certificate. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCertificateOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListCertificateOperationsRequest;
        readonly responseSerialize: (value: ListCertificateOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListCertificateOperationsResponse;
    };
    /** Lists existing access bindings for the specified certificate. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the certificate. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified certificate. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface CertificateServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get: handleUnaryCall<GetCertificateRequest, Certificate>;
    /** Returns the list of certificates in the specified folder. */
    list: handleUnaryCall<ListCertificatesRequest, ListCertificatesResponse>;
    listVersions: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
    /** Creates a certificate in the specified folder. */
    create: handleUnaryCall<CreateCertificateRequest, Operation>;
    /** Updates the specified certificate. */
    update: handleUnaryCall<UpdateCertificateRequest, Operation>;
    /** Deletes the specified certificate. */
    delete: handleUnaryCall<DeleteCertificateRequest, Operation>;
    /** Request a certificate in the specified folder. */
    requestNew: handleUnaryCall<RequestNewCertificateRequest, Operation>;
    /** Lists operations for the specified certificate. */
    listOperations: handleUnaryCall<ListCertificateOperationsRequest, ListCertificateOperationsResponse>;
    /** Lists existing access bindings for the specified certificate. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the certificate. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified certificate. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface CertificateServiceClient extends Client {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get(request: GetCertificateRequest, callback: (error: ServiceError | null, response: Certificate) => void): ClientUnaryCall;
    get(request: GetCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Certificate) => void): ClientUnaryCall;
    get(request: GetCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Certificate) => void): ClientUnaryCall;
    /** Returns the list of certificates in the specified folder. */
    list(request: ListCertificatesRequest, callback: (error: ServiceError | null, response: ListCertificatesResponse) => void): ClientUnaryCall;
    list(request: ListCertificatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListCertificatesResponse) => void): ClientUnaryCall;
    list(request: ListCertificatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListCertificatesResponse) => void): ClientUnaryCall;
    listVersions(request: ListVersionsRequest, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListVersionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    listVersions(request: ListVersionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    /** Creates a certificate in the specified folder. */
    create(request: CreateCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified certificate. */
    update(request: UpdateCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified certificate. */
    delete(request: DeleteCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Request a certificate in the specified folder. */
    requestNew(request: RequestNewCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    requestNew(request: RequestNewCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    requestNew(request: RequestNewCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified certificate. */
    listOperations(request: ListCertificateOperationsRequest, callback: (error: ServiceError | null, response: ListCertificateOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListCertificateOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListCertificateOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListCertificateOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListCertificateOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified certificate. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the certificate. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified certificate. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const CertificateServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): CertificateServiceClient;
    service: typeof CertificateServiceService;
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
