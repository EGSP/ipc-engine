/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
import { BindingType, FederationSecuritySettings, Federation } from "../../../../../yandex/cloud/organizationmanager/v1/saml/federation";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { UserAccount } from "../../../../../yandex/cloud/organizationmanager/v1/user_account";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1.saml";
export interface GetFederationRequest {
    $type: "yandex.cloud.organizationmanager.v1.saml.GetFederationRequest";
    /**
     * ID of the federation to return.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
}
export interface ListFederationsRequest {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationsRequest";
    /**
     * ID of the organization to list federations in.
     * To get the organization ID, make a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListFederationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Federation.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}
export interface ListFederationsResponse {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationsResponse";
    /** List of federations. */
    federations: Federation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListFederationsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateFederationRequest {
    $type: "yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest";
    /**
     * ID of the organization to create a federation in.
     * To get the organization ID, make a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /**
     * Name of the federation.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the federation. */
    description: string;
    /**
     * Browser cookie lifetime in seconds.
     * If the cookie is still valid, the management console
     * authenticates the user immediately and redirects them to the home page.
     * The default value is `8h`.
     */
    cookieMaxAge?: Duration;
    /**
     * Add new users automatically on successful authentication.
     * The user becomes member of the organization automatically,
     * but you need to grant other roles to them.
     *
     * If the value is `false`, users who aren't added to the organization
     * can't log in, even if they have authenticated on your server.
     */
    autoCreateAccountOnLogin: boolean;
    /**
     * ID of the IdP server to be used for authentication.
     * The IdP server also responds to IAM with this ID after the user authenticates.
     */
    issuer: string;
    /**
     * Single sign-on endpoint binding type. Most Identity Providers support the `POST` binding type.
     *
     * SAML Binding is a mapping of a SAML protocol message onto standard messaging
     * formats and/or communications protocols.
     */
    ssoBinding: BindingType;
    /**
     * Single sign-on endpoint URL.
     * Specify the link to the IdP login page here.
     */
    ssoUrl: string;
    /** Federation security settings. */
    securitySettings?: FederationSecuritySettings;
    /** Use case insensitive Name IDs. */
    caseInsensitiveNameIds: boolean;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateFederationRequest_LabelsEntry {
    $type: "yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateFederationMetadata {
    $type: "yandex.cloud.organizationmanager.v1.saml.CreateFederationMetadata";
    /** ID of the federation that is being created. */
    federationId: string;
}
export interface UpdateFederationRequest {
    $type: "yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest";
    /**
     * ID of the federation to update.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
    /** Field mask that specifies which fields of the federation are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the federation.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the federation. */
    description: string;
    /**
     * Browser cookie lifetime in seconds.
     * If the cookie is still valid, the management console
     * authenticates the user immediately and redirects them to the home page.
     * The default value is `8h`.
     */
    cookieMaxAge?: Duration;
    /**
     * Add new users automatically on successful authentication.
     * The user becomes member of the organization automatically,
     * but you need to grant other roles to them.
     *
     * If the value is `false`, users who aren't added to the organization
     * can't log in, even if they have authenticated on your server.
     */
    autoCreateAccountOnLogin: boolean;
    /**
     * ID of the IdP server to be used for authentication.
     * The IdP server also responds to IAM with this ID after the user authenticates.
     */
    issuer: string;
    /**
     * Single sign-on endpoint binding type. Most Identity Providers support the `POST` binding type.
     *
     * SAML Binding is a mapping of a SAML protocol message onto standard messaging
     * formats and/or communications protocols.
     */
    ssoBinding: BindingType;
    /**
     * Single sign-on endpoint URL.
     * Specify the link to the IdP login page here.
     */
    ssoUrl: string;
    /** Federation security settings. */
    securitySettings?: FederationSecuritySettings;
    /** Use case insensitive name ids. */
    caseInsensitiveNameIds: boolean;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateFederationRequest_LabelsEntry {
    $type: "yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateFederationMetadata {
    $type: "yandex.cloud.organizationmanager.v1.saml.UpdateFederationMetadata";
    /** ID of the federation that is being updated. */
    federationId: string;
}
export interface DeleteFederationRequest {
    $type: "yandex.cloud.organizationmanager.v1.saml.DeleteFederationRequest";
    /**
     * ID of the federation to delete.
     * To get the federation ID, make a [FederationService.List] request.
     */
    federationId: string;
}
export interface DeleteFederationMetadata {
    $type: "yandex.cloud.organizationmanager.v1.saml.DeleteFederationMetadata";
    /** ID of the federation that is being deleted. */
    federationId: string;
}
export interface AddFederatedUserAccountsRequest {
    $type: "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsRequest";
    /** ID of the federation to add users. */
    federationId: string;
    /**
     * Name IDs returned by the Identity Provider (IdP) on successful authentication.
     * These may be UPNs or user email addresses.
     */
    nameIds: string[];
}
export interface AddFederatedUserAccountsMetadata {
    $type: "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsMetadata";
    /** ID of the federation that is being altered. */
    federationId: string;
}
export interface AddFederatedUserAccountsResponse {
    $type: "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsResponse";
    /** List of users created by [FederationService.AddUserAccounts] request. */
    userAccounts: UserAccount[];
}
export interface ListFederatedUserAccountsRequest {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsRequest";
    /** ID of the federation to list user accounts for. */
    federationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListFederatedUserAccountsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederatedUserAccountsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [name_id] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 1-1000 characters long and match the regular expression
     *   `[a-z0-9A-Z/@_.\-=+*\\]+`.
     */
    filter: string;
}
export interface ListFederatedUserAccountsResponse {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsResponse";
    /** List of user accounts for the specified federation. */
    userAccounts: UserAccount[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederatedUserAccountsRequest.page_size], use the [next_page_token] as the value
     * for the [ListFederatedUserAccountsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListFederationOperationsRequest {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsRequest";
    /** ID of the federation to list operations for. */
    federationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListFederationOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListFederationOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListFederationOperationsResponse {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsResponse";
    /** List of operations for the specified federation. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListFederationOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListFederationOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetFederationRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.GetFederationRequest";
    encode(message: GetFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFederationRequest;
    fromJSON(object: any): GetFederationRequest;
    toJSON(message: GetFederationRequest): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): GetFederationRequest;
};
export declare const ListFederationsRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationsRequest";
    encode(message: ListFederationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederationsRequest;
    fromJSON(object: any): ListFederationsRequest;
    toJSON(message: ListFederationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        organizationId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "organizationId">, never>>(object: I): ListFederationsRequest;
};
export declare const ListFederationsResponse: {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationsResponse";
    encode(message: ListFederationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederationsResponse;
    fromJSON(object: any): ListFederationsResponse;
    toJSON(message: ListFederationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        federations?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            issuer?: string | undefined;
            organizationId?: string | undefined;
            autoCreateAccountOnLogin?: boolean | undefined;
            ssoBinding?: BindingType | undefined;
            ssoUrl?: string | undefined;
            caseInsensitiveNameIds?: boolean | undefined;
            cookieMaxAge?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            securitySettings?: {
                encryptedAssertions?: boolean | undefined;
                forceAuthn?: boolean | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        federations?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            issuer?: string | undefined;
            organizationId?: string | undefined;
            autoCreateAccountOnLogin?: boolean | undefined;
            ssoBinding?: BindingType | undefined;
            ssoUrl?: string | undefined;
            caseInsensitiveNameIds?: boolean | undefined;
            cookieMaxAge?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            securitySettings?: {
                encryptedAssertions?: boolean | undefined;
                forceAuthn?: boolean | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            issuer?: string | undefined;
            organizationId?: string | undefined;
            autoCreateAccountOnLogin?: boolean | undefined;
            ssoBinding?: BindingType | undefined;
            ssoUrl?: string | undefined;
            caseInsensitiveNameIds?: boolean | undefined;
            cookieMaxAge?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            securitySettings?: {
                encryptedAssertions?: boolean | undefined;
                forceAuthn?: boolean | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["federations"][number]["labels"], string | number>, never>) | undefined;
            issuer?: string | undefined;
            organizationId?: string | undefined;
            autoCreateAccountOnLogin?: boolean | undefined;
            ssoBinding?: BindingType | undefined;
            ssoUrl?: string | undefined;
            caseInsensitiveNameIds?: boolean | undefined;
            cookieMaxAge?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["federations"][number]["cookieMaxAge"], "$type" | "seconds" | "nanos">, never>) | undefined;
            securitySettings?: ({
                encryptedAssertions?: boolean | undefined;
                forceAuthn?: boolean | undefined;
            } & {
                encryptedAssertions?: boolean | undefined;
                forceAuthn?: boolean | undefined;
            } & Record<Exclude<keyof I["federations"][number]["securitySettings"], "$type" | "encryptedAssertions" | "forceAuthn">, never>) | undefined;
        } & Record<Exclude<keyof I["federations"][number], "$type" | "description" | "id" | "name" | "createdAt" | "labels" | "issuer" | "organizationId" | "autoCreateAccountOnLogin" | "ssoBinding" | "ssoUrl" | "caseInsensitiveNameIds" | "cookieMaxAge" | "securitySettings">, never>)[] & Record<Exclude<keyof I["federations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            issuer?: string | undefined;
            organizationId?: string | undefined;
            autoCreateAccountOnLogin?: boolean | undefined;
            ssoBinding?: BindingType | undefined;
            ssoUrl?: string | undefined;
            caseInsensitiveNameIds?: boolean | undefined;
            cookieMaxAge?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            securitySettings?: {
                encryptedAssertions?: boolean | undefined;
                forceAuthn?: boolean | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "federations">, never>>(object: I): ListFederationsResponse;
};
export declare const CreateFederationRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest";
    encode(message: CreateFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFederationRequest;
    fromJSON(object: any): CreateFederationRequest;
    toJSON(message: CreateFederationRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        issuer?: string | undefined;
        organizationId?: string | undefined;
        autoCreateAccountOnLogin?: boolean | undefined;
        ssoBinding?: BindingType | undefined;
        ssoUrl?: string | undefined;
        caseInsensitiveNameIds?: boolean | undefined;
        cookieMaxAge?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        securitySettings?: {
            encryptedAssertions?: boolean | undefined;
            forceAuthn?: boolean | undefined;
        } | undefined;
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
        issuer?: string | undefined;
        organizationId?: string | undefined;
        autoCreateAccountOnLogin?: boolean | undefined;
        ssoBinding?: BindingType | undefined;
        ssoUrl?: string | undefined;
        caseInsensitiveNameIds?: boolean | undefined;
        cookieMaxAge?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["cookieMaxAge"], "$type" | "seconds" | "nanos">, never>) | undefined;
        securitySettings?: ({
            encryptedAssertions?: boolean | undefined;
            forceAuthn?: boolean | undefined;
        } & {
            encryptedAssertions?: boolean | undefined;
            forceAuthn?: boolean | undefined;
        } & Record<Exclude<keyof I["securitySettings"], "$type" | "encryptedAssertions" | "forceAuthn">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "issuer" | "organizationId" | "autoCreateAccountOnLogin" | "ssoBinding" | "ssoUrl" | "caseInsensitiveNameIds" | "cookieMaxAge" | "securitySettings">, never>>(object: I): CreateFederationRequest;
};
export declare const CreateFederationRequest_LabelsEntry: {
    $type: "yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest.LabelsEntry";
    encode(message: CreateFederationRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFederationRequest_LabelsEntry;
    fromJSON(object: any): CreateFederationRequest_LabelsEntry;
    toJSON(message: CreateFederationRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateFederationRequest_LabelsEntry;
};
export declare const CreateFederationMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.saml.CreateFederationMetadata";
    encode(message: CreateFederationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFederationMetadata;
    fromJSON(object: any): CreateFederationMetadata;
    toJSON(message: CreateFederationMetadata): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): CreateFederationMetadata;
};
export declare const UpdateFederationRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest";
    encode(message: UpdateFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFederationRequest;
    fromJSON(object: any): UpdateFederationRequest;
    toJSON(message: UpdateFederationRequest): unknown;
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
        issuer?: string | undefined;
        federationId?: string | undefined;
        autoCreateAccountOnLogin?: boolean | undefined;
        ssoBinding?: BindingType | undefined;
        ssoUrl?: string | undefined;
        caseInsensitiveNameIds?: boolean | undefined;
        cookieMaxAge?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        securitySettings?: {
            encryptedAssertions?: boolean | undefined;
            forceAuthn?: boolean | undefined;
        } | undefined;
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
        issuer?: string | undefined;
        federationId?: string | undefined;
        autoCreateAccountOnLogin?: boolean | undefined;
        ssoBinding?: BindingType | undefined;
        ssoUrl?: string | undefined;
        caseInsensitiveNameIds?: boolean | undefined;
        cookieMaxAge?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["cookieMaxAge"], "$type" | "seconds" | "nanos">, never>) | undefined;
        securitySettings?: ({
            encryptedAssertions?: boolean | undefined;
            forceAuthn?: boolean | undefined;
        } & {
            encryptedAssertions?: boolean | undefined;
            forceAuthn?: boolean | undefined;
        } & Record<Exclude<keyof I["securitySettings"], "$type" | "encryptedAssertions" | "forceAuthn">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "issuer" | "federationId" | "autoCreateAccountOnLogin" | "ssoBinding" | "ssoUrl" | "caseInsensitiveNameIds" | "cookieMaxAge" | "securitySettings">, never>>(object: I): UpdateFederationRequest;
};
export declare const UpdateFederationRequest_LabelsEntry: {
    $type: "yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest.LabelsEntry";
    encode(message: UpdateFederationRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFederationRequest_LabelsEntry;
    fromJSON(object: any): UpdateFederationRequest_LabelsEntry;
    toJSON(message: UpdateFederationRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateFederationRequest_LabelsEntry;
};
export declare const UpdateFederationMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.saml.UpdateFederationMetadata";
    encode(message: UpdateFederationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFederationMetadata;
    fromJSON(object: any): UpdateFederationMetadata;
    toJSON(message: UpdateFederationMetadata): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): UpdateFederationMetadata;
};
export declare const DeleteFederationRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.DeleteFederationRequest";
    encode(message: DeleteFederationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFederationRequest;
    fromJSON(object: any): DeleteFederationRequest;
    toJSON(message: DeleteFederationRequest): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): DeleteFederationRequest;
};
export declare const DeleteFederationMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.saml.DeleteFederationMetadata";
    encode(message: DeleteFederationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFederationMetadata;
    fromJSON(object: any): DeleteFederationMetadata;
    toJSON(message: DeleteFederationMetadata): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): DeleteFederationMetadata;
};
export declare const AddFederatedUserAccountsRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsRequest";
    encode(message: AddFederatedUserAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddFederatedUserAccountsRequest;
    fromJSON(object: any): AddFederatedUserAccountsRequest;
    toJSON(message: AddFederatedUserAccountsRequest): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
        nameIds?: string[] | undefined;
    } & {
        federationId?: string | undefined;
        nameIds?: (string[] & string[] & Record<Exclude<keyof I["nameIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId" | "nameIds">, never>>(object: I): AddFederatedUserAccountsRequest;
};
export declare const AddFederatedUserAccountsMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsMetadata";
    encode(message: AddFederatedUserAccountsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddFederatedUserAccountsMetadata;
    fromJSON(object: any): AddFederatedUserAccountsMetadata;
    toJSON(message: AddFederatedUserAccountsMetadata): unknown;
    fromPartial<I extends {
        federationId?: string | undefined;
    } & {
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "federationId">, never>>(object: I): AddFederatedUserAccountsMetadata;
};
export declare const AddFederatedUserAccountsResponse: {
    $type: "yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsResponse";
    encode(message: AddFederatedUserAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddFederatedUserAccountsResponse;
    fromJSON(object: any): AddFederatedUserAccountsResponse;
    toJSON(message: AddFederatedUserAccountsResponse): unknown;
    fromPartial<I extends {
        userAccounts?: {
            id?: string | undefined;
            yandexPassportUserAccount?: {
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } | undefined;
            samlUserAccount?: {
                attributes?: {
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        userAccounts?: ({
            id?: string | undefined;
            yandexPassportUserAccount?: {
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } | undefined;
            samlUserAccount?: {
                attributes?: {
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            yandexPassportUserAccount?: {
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } | undefined;
            samlUserAccount?: {
                attributes?: {
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            yandexPassportUserAccount?: ({
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } & {
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } & Record<Exclude<keyof I["userAccounts"][number]["yandexPassportUserAccount"], "$type" | "login" | "defaultEmail">, never>) | undefined;
            samlUserAccount?: ({
                attributes?: {
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } & {
                attributes?: ({
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        value?: string[] | undefined;
                    } & {
                        value?: (string[] & string[] & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"]["attributes"][string]["value"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"]["attributes"][string], "$type" | "value">, never>) | undefined;
                    [x: number]: ({
                        value?: string[] | undefined;
                    } & {
                        value?: (string[] & string[] & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"]["attributes"][number]["value"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"]["attributes"][number], "$type" | "value">, never>) | undefined;
                } & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"]["attributes"], string | number>, never>) | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"], "$type" | "attributes" | "federationId" | "nameId">, never>) | undefined;
        } & Record<Exclude<keyof I["userAccounts"][number], "$type" | "id" | "yandexPassportUserAccount" | "samlUserAccount">, never>)[] & Record<Exclude<keyof I["userAccounts"], "$type" | keyof {
            id?: string | undefined;
            yandexPassportUserAccount?: {
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } | undefined;
            samlUserAccount?: {
                attributes?: {
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "userAccounts">, never>>(object: I): AddFederatedUserAccountsResponse;
};
export declare const ListFederatedUserAccountsRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsRequest";
    encode(message: ListFederatedUserAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederatedUserAccountsRequest;
    fromJSON(object: any): ListFederatedUserAccountsRequest;
    toJSON(message: ListFederatedUserAccountsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        federationId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "federationId">, never>>(object: I): ListFederatedUserAccountsRequest;
};
export declare const ListFederatedUserAccountsResponse: {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsResponse";
    encode(message: ListFederatedUserAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederatedUserAccountsResponse;
    fromJSON(object: any): ListFederatedUserAccountsResponse;
    toJSON(message: ListFederatedUserAccountsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        userAccounts?: {
            id?: string | undefined;
            yandexPassportUserAccount?: {
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } | undefined;
            samlUserAccount?: {
                attributes?: {
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        userAccounts?: ({
            id?: string | undefined;
            yandexPassportUserAccount?: {
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } | undefined;
            samlUserAccount?: {
                attributes?: {
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            yandexPassportUserAccount?: {
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } | undefined;
            samlUserAccount?: {
                attributes?: {
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            yandexPassportUserAccount?: ({
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } & {
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } & Record<Exclude<keyof I["userAccounts"][number]["yandexPassportUserAccount"], "$type" | "login" | "defaultEmail">, never>) | undefined;
            samlUserAccount?: ({
                attributes?: {
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } & {
                attributes?: ({
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        value?: string[] | undefined;
                    } & {
                        value?: (string[] & string[] & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"]["attributes"][string]["value"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"]["attributes"][string], "$type" | "value">, never>) | undefined;
                    [x: number]: ({
                        value?: string[] | undefined;
                    } & {
                        value?: (string[] & string[] & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"]["attributes"][number]["value"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"]["attributes"][number], "$type" | "value">, never>) | undefined;
                } & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"]["attributes"], string | number>, never>) | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } & Record<Exclude<keyof I["userAccounts"][number]["samlUserAccount"], "$type" | "attributes" | "federationId" | "nameId">, never>) | undefined;
        } & Record<Exclude<keyof I["userAccounts"][number], "$type" | "id" | "yandexPassportUserAccount" | "samlUserAccount">, never>)[] & Record<Exclude<keyof I["userAccounts"], "$type" | keyof {
            id?: string | undefined;
            yandexPassportUserAccount?: {
                login?: string | undefined;
                defaultEmail?: string | undefined;
            } | undefined;
            samlUserAccount?: {
                attributes?: {
                    [x: string]: {
                        value?: string[] | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: string[] | undefined;
                    } | undefined;
                } | undefined;
                federationId?: string | undefined;
                nameId?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "userAccounts">, never>>(object: I): ListFederatedUserAccountsResponse;
};
export declare const ListFederationOperationsRequest: {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsRequest";
    encode(message: ListFederationOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederationOperationsRequest;
    fromJSON(object: any): ListFederationOperationsRequest;
    toJSON(message: ListFederationOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        federationId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "federationId">, never>>(object: I): ListFederationOperationsRequest;
};
export declare const ListFederationOperationsResponse: {
    $type: "yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsResponse";
    encode(message: ListFederationOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFederationOperationsResponse;
    fromJSON(object: any): ListFederationOperationsResponse;
    toJSON(message: ListFederationOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListFederationOperationsResponse;
};
/** A set of methods for managing federations. */
export declare const FederationServiceService: {
    /**
     * Returns the specified federation.
     *
     * To get the list of available federations, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFederationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFederationRequest;
        readonly responseSerialize: (value: Federation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Federation;
    };
    /** Retrieves the list of federations in the specified organization. */
    readonly list: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFederationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFederationsRequest;
        readonly responseSerialize: (value: ListFederationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFederationsResponse;
    };
    /** Creates a federation in the specified organization. */
    readonly create: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFederationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFederationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified federation. */
    readonly update: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateFederationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateFederationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified federation. */
    readonly delete: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFederationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFederationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Adds users to the specified federation. */
    readonly addUserAccounts: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/AddUserAccounts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddFederatedUserAccountsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddFederatedUserAccountsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists users for the specified federation. */
    readonly listUserAccounts: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/ListUserAccounts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFederatedUserAccountsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFederatedUserAccountsRequest;
        readonly responseSerialize: (value: ListFederatedUserAccountsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFederatedUserAccountsResponse;
    };
    /** Lists operations for the specified federation. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFederationOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFederationOperationsRequest;
        readonly responseSerialize: (value: ListFederationOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFederationOperationsResponse;
    };
};
export interface FederationServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified federation.
     *
     * To get the list of available federations, make a [List] request.
     */
    get: handleUnaryCall<GetFederationRequest, Federation>;
    /** Retrieves the list of federations in the specified organization. */
    list: handleUnaryCall<ListFederationsRequest, ListFederationsResponse>;
    /** Creates a federation in the specified organization. */
    create: handleUnaryCall<CreateFederationRequest, Operation>;
    /** Updates the specified federation. */
    update: handleUnaryCall<UpdateFederationRequest, Operation>;
    /** Deletes the specified federation. */
    delete: handleUnaryCall<DeleteFederationRequest, Operation>;
    /** Adds users to the specified federation. */
    addUserAccounts: handleUnaryCall<AddFederatedUserAccountsRequest, Operation>;
    /** Lists users for the specified federation. */
    listUserAccounts: handleUnaryCall<ListFederatedUserAccountsRequest, ListFederatedUserAccountsResponse>;
    /** Lists operations for the specified federation. */
    listOperations: handleUnaryCall<ListFederationOperationsRequest, ListFederationOperationsResponse>;
}
export interface FederationServiceClient extends Client {
    /**
     * Returns the specified federation.
     *
     * To get the list of available federations, make a [List] request.
     */
    get(request: GetFederationRequest, callback: (error: ServiceError | null, response: Federation) => void): ClientUnaryCall;
    get(request: GetFederationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Federation) => void): ClientUnaryCall;
    get(request: GetFederationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Federation) => void): ClientUnaryCall;
    /** Retrieves the list of federations in the specified organization. */
    list(request: ListFederationsRequest, callback: (error: ServiceError | null, response: ListFederationsResponse) => void): ClientUnaryCall;
    list(request: ListFederationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFederationsResponse) => void): ClientUnaryCall;
    list(request: ListFederationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFederationsResponse) => void): ClientUnaryCall;
    /** Creates a federation in the specified organization. */
    create(request: CreateFederationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFederationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFederationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified federation. */
    update(request: UpdateFederationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFederationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFederationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified federation. */
    delete(request: DeleteFederationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFederationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFederationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Adds users to the specified federation. */
    addUserAccounts(request: AddFederatedUserAccountsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addUserAccounts(request: AddFederatedUserAccountsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addUserAccounts(request: AddFederatedUserAccountsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists users for the specified federation. */
    listUserAccounts(request: ListFederatedUserAccountsRequest, callback: (error: ServiceError | null, response: ListFederatedUserAccountsResponse) => void): ClientUnaryCall;
    listUserAccounts(request: ListFederatedUserAccountsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFederatedUserAccountsResponse) => void): ClientUnaryCall;
    listUserAccounts(request: ListFederatedUserAccountsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFederatedUserAccountsResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified federation. */
    listOperations(request: ListFederationOperationsRequest, callback: (error: ServiceError | null, response: ListFederationOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFederationOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFederationOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFederationOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFederationOperationsResponse) => void): ClientUnaryCall;
}
export declare const FederationServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): FederationServiceClient;
    service: typeof FederationServiceService;
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
