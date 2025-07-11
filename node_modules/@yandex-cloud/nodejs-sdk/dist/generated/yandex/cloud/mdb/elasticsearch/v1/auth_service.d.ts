/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { AuthProvider } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/auth";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
export interface ListAuthProvidersRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersRequest";
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
}
export interface ListAuthProvidersResponse {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersResponse";
    /** List of auth providers of the Elasticsearch cluster. */
    providers: AuthProvider[];
}
export interface GetAuthProviderRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetAuthProviderRequest";
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. Name of the provider to delete. */
    name: string;
}
export interface AddAuthProvidersRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersRequest";
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. List of providers to add. */
    providers: AuthProvider[];
}
export interface UpdateAuthProvidersRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersRequest";
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. List of providers to set. */
    providers: AuthProvider[];
}
export interface DeleteAuthProvidersRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersRequest";
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. List of providers to delete. */
    providerNames: string[];
}
export interface UpdateAuthProviderRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProviderRequest";
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. Name of the provider to update. */
    name: string;
    /** Required. New provider defenition. */
    provider?: AuthProvider;
}
export interface DeleteAuthProviderRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProviderRequest";
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. Name of the provider to delete. */
    name: string;
}
export interface AddAuthProvidersMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersMetadata";
    /** ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Names of the providers being added. */
    names: string[];
}
export interface UpdateAuthProvidersMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersMetadata";
    /** ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Names of the providers being added. */
    names: string[];
}
export interface DeleteAuthProvidersMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersMetadata";
    /** ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Names of the providers being removed. */
    names: string[];
}
export declare const ListAuthProvidersRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersRequest";
    encode(message: ListAuthProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAuthProvidersRequest;
    fromJSON(object: any): ListAuthProvidersRequest;
    toJSON(message: ListAuthProvidersRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): ListAuthProvidersRequest;
};
export declare const ListAuthProvidersResponse: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersResponse";
    encode(message: ListAuthProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAuthProvidersResponse;
    fromJSON(object: any): ListAuthProvidersResponse;
    toJSON(message: ListAuthProvidersResponse): unknown;
    fromPartial<I extends {
        providers?: {
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        providers?: ({
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: ({
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } & {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } & Record<Exclude<keyof I["providers"][number]["saml"], "$type" | "idpEntityId" | "idpMetadataFile" | "spEntityId" | "kibanaUrl" | "attributePrincipal" | "attributeGroups" | "attributeName" | "attributeEmail" | "attributeDn">, never>) | undefined;
        } & Record<Exclude<keyof I["providers"][number], "$type" | "description" | "type" | "name" | "enabled" | "order" | "hidden" | "hint" | "icon" | "saml">, never>)[] & Record<Exclude<keyof I["providers"], "$type" | keyof {
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "providers">, never>>(object: I): ListAuthProvidersResponse;
};
export declare const GetAuthProviderRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetAuthProviderRequest";
    encode(message: GetAuthProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAuthProviderRequest;
    fromJSON(object: any): GetAuthProviderRequest;
    toJSON(message: GetAuthProviderRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "clusterId">, never>>(object: I): GetAuthProviderRequest;
};
export declare const AddAuthProvidersRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersRequest";
    encode(message: AddAuthProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddAuthProvidersRequest;
    fromJSON(object: any): AddAuthProvidersRequest;
    toJSON(message: AddAuthProvidersRequest): unknown;
    fromPartial<I extends {
        providers?: {
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[] | undefined;
        clusterId?: string | undefined;
    } & {
        providers?: ({
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: ({
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } & {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } & Record<Exclude<keyof I["providers"][number]["saml"], "$type" | "idpEntityId" | "idpMetadataFile" | "spEntityId" | "kibanaUrl" | "attributePrincipal" | "attributeGroups" | "attributeName" | "attributeEmail" | "attributeDn">, never>) | undefined;
        } & Record<Exclude<keyof I["providers"][number], "$type" | "description" | "type" | "name" | "enabled" | "order" | "hidden" | "hint" | "icon" | "saml">, never>)[] & Record<Exclude<keyof I["providers"], "$type" | keyof {
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "providers" | "clusterId">, never>>(object: I): AddAuthProvidersRequest;
};
export declare const UpdateAuthProvidersRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersRequest";
    encode(message: UpdateAuthProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAuthProvidersRequest;
    fromJSON(object: any): UpdateAuthProvidersRequest;
    toJSON(message: UpdateAuthProvidersRequest): unknown;
    fromPartial<I extends {
        providers?: {
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[] | undefined;
        clusterId?: string | undefined;
    } & {
        providers?: ({
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: ({
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } & {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } & Record<Exclude<keyof I["providers"][number]["saml"], "$type" | "idpEntityId" | "idpMetadataFile" | "spEntityId" | "kibanaUrl" | "attributePrincipal" | "attributeGroups" | "attributeName" | "attributeEmail" | "attributeDn">, never>) | undefined;
        } & Record<Exclude<keyof I["providers"][number], "$type" | "description" | "type" | "name" | "enabled" | "order" | "hidden" | "hint" | "icon" | "saml">, never>)[] & Record<Exclude<keyof I["providers"], "$type" | keyof {
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "providers" | "clusterId">, never>>(object: I): UpdateAuthProvidersRequest;
};
export declare const DeleteAuthProvidersRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersRequest";
    encode(message: DeleteAuthProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAuthProvidersRequest;
    fromJSON(object: any): DeleteAuthProvidersRequest;
    toJSON(message: DeleteAuthProvidersRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        providerNames?: string[] | undefined;
    } & {
        clusterId?: string | undefined;
        providerNames?: (string[] & string[] & Record<Exclude<keyof I["providerNames"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "providerNames">, never>>(object: I): DeleteAuthProvidersRequest;
};
export declare const UpdateAuthProviderRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProviderRequest";
    encode(message: UpdateAuthProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAuthProviderRequest;
    fromJSON(object: any): UpdateAuthProviderRequest;
    toJSON(message: UpdateAuthProviderRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        provider?: {
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        } | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        provider?: ({
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth").AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: ({
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } & {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } & Record<Exclude<keyof I["provider"]["saml"], "$type" | "idpEntityId" | "idpMetadataFile" | "spEntityId" | "kibanaUrl" | "attributePrincipal" | "attributeGroups" | "attributeName" | "attributeEmail" | "attributeDn">, never>) | undefined;
        } & Record<Exclude<keyof I["provider"], "$type" | "description" | "type" | "name" | "enabled" | "order" | "hidden" | "hint" | "icon" | "saml">, never>) | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "provider" | "clusterId">, never>>(object: I): UpdateAuthProviderRequest;
};
export declare const DeleteAuthProviderRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProviderRequest";
    encode(message: DeleteAuthProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAuthProviderRequest;
    fromJSON(object: any): DeleteAuthProviderRequest;
    toJSON(message: DeleteAuthProviderRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "clusterId">, never>>(object: I): DeleteAuthProviderRequest;
};
export declare const AddAuthProvidersMetadata: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersMetadata";
    encode(message: AddAuthProvidersMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddAuthProvidersMetadata;
    fromJSON(object: any): AddAuthProvidersMetadata;
    toJSON(message: AddAuthProvidersMetadata): unknown;
    fromPartial<I extends {
        names?: string[] | undefined;
        clusterId?: string | undefined;
    } & {
        names?: (string[] & string[] & Record<Exclude<keyof I["names"], "$type" | keyof string[]>, never>) | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "names" | "clusterId">, never>>(object: I): AddAuthProvidersMetadata;
};
export declare const UpdateAuthProvidersMetadata: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersMetadata";
    encode(message: UpdateAuthProvidersMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAuthProvidersMetadata;
    fromJSON(object: any): UpdateAuthProvidersMetadata;
    toJSON(message: UpdateAuthProvidersMetadata): unknown;
    fromPartial<I extends {
        names?: string[] | undefined;
        clusterId?: string | undefined;
    } & {
        names?: (string[] & string[] & Record<Exclude<keyof I["names"], "$type" | keyof string[]>, never>) | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "names" | "clusterId">, never>>(object: I): UpdateAuthProvidersMetadata;
};
export declare const DeleteAuthProvidersMetadata: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersMetadata";
    encode(message: DeleteAuthProvidersMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAuthProvidersMetadata;
    fromJSON(object: any): DeleteAuthProvidersMetadata;
    toJSON(message: DeleteAuthProvidersMetadata): unknown;
    fromPartial<I extends {
        names?: string[] | undefined;
        clusterId?: string | undefined;
    } & {
        names?: (string[] & string[] & Record<Exclude<keyof I["names"], "$type" | keyof string[]>, never>) | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "names" | "clusterId">, never>>(object: I): DeleteAuthProvidersMetadata;
};
/** A set of methods for managing Elasticsearch Authentication resources. */
export declare const AuthServiceService: {
    /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
    readonly listProviders: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/ListProviders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAuthProvidersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAuthProvidersRequest;
        readonly responseSerialize: (value: ListAuthProvidersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAuthProvidersResponse;
    };
    /** Returns registered auth provider by name. */
    readonly getProvider: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/GetProvider";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAuthProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAuthProviderRequest;
        readonly responseSerialize: (value: AuthProvider) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AuthProvider;
    };
    /** Adds new auth providers to Elasticsearch cluster. */
    readonly addProviders: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/AddProviders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddAuthProvidersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddAuthProvidersRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Replase the list of auth providers. */
    readonly updateProviders: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProviders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAuthProvidersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAuthProvidersRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Removes auth providers from Elasticsearch cluster by name. */
    readonly deleteProviders: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProviders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteAuthProvidersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteAuthProvidersRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates registered auth provider. */
    readonly updateProvider: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProvider";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAuthProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAuthProviderRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Removes auth provider from Elasticsearch cluster by name. */
    readonly deleteProvider: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProvider";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteAuthProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteAuthProviderRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface AuthServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
    listProviders: handleUnaryCall<ListAuthProvidersRequest, ListAuthProvidersResponse>;
    /** Returns registered auth provider by name. */
    getProvider: handleUnaryCall<GetAuthProviderRequest, AuthProvider>;
    /** Adds new auth providers to Elasticsearch cluster. */
    addProviders: handleUnaryCall<AddAuthProvidersRequest, Operation>;
    /** Replase the list of auth providers. */
    updateProviders: handleUnaryCall<UpdateAuthProvidersRequest, Operation>;
    /** Removes auth providers from Elasticsearch cluster by name. */
    deleteProviders: handleUnaryCall<DeleteAuthProvidersRequest, Operation>;
    /** Updates registered auth provider. */
    updateProvider: handleUnaryCall<UpdateAuthProviderRequest, Operation>;
    /** Removes auth provider from Elasticsearch cluster by name. */
    deleteProvider: handleUnaryCall<DeleteAuthProviderRequest, Operation>;
}
export interface AuthServiceClient extends Client {
    /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
    listProviders(request: ListAuthProvidersRequest, callback: (error: ServiceError | null, response: ListAuthProvidersResponse) => void): ClientUnaryCall;
    listProviders(request: ListAuthProvidersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAuthProvidersResponse) => void): ClientUnaryCall;
    listProviders(request: ListAuthProvidersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAuthProvidersResponse) => void): ClientUnaryCall;
    /** Returns registered auth provider by name. */
    getProvider(request: GetAuthProviderRequest, callback: (error: ServiceError | null, response: AuthProvider) => void): ClientUnaryCall;
    getProvider(request: GetAuthProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AuthProvider) => void): ClientUnaryCall;
    getProvider(request: GetAuthProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AuthProvider) => void): ClientUnaryCall;
    /** Adds new auth providers to Elasticsearch cluster. */
    addProviders(request: AddAuthProvidersRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addProviders(request: AddAuthProvidersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addProviders(request: AddAuthProvidersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Replase the list of auth providers. */
    updateProviders(request: UpdateAuthProvidersRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateProviders(request: UpdateAuthProvidersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateProviders(request: UpdateAuthProvidersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Removes auth providers from Elasticsearch cluster by name. */
    deleteProviders(request: DeleteAuthProvidersRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteProviders(request: DeleteAuthProvidersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteProviders(request: DeleteAuthProvidersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates registered auth provider. */
    updateProvider(request: UpdateAuthProviderRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateProvider(request: UpdateAuthProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateProvider(request: UpdateAuthProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Removes auth provider from Elasticsearch cluster by name. */
    deleteProvider(request: DeleteAuthProviderRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteProvider(request: DeleteAuthProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteProvider(request: DeleteAuthProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const AuthServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): AuthServiceClient;
    service: typeof AuthServiceService;
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
