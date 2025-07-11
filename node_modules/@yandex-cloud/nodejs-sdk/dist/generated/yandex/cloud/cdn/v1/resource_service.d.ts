/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { SecondaryHostnames, OriginProtocol, ResourceOptions, SSLTargetCertificate, Resource } from "../../../../yandex/cloud/cdn/v1/resource";
import { OriginMeta } from "../../../../yandex/cloud/cdn/v1/origin";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.cdn.v1";
/** A request to get a resource. */
export interface GetResourceRequest {
    $type: "yandex.cloud.cdn.v1.GetResourceRequest";
    /** ID of the requested resource. */
    resourceId: string;
}
export interface ListResourcesRequest {
    $type: "yandex.cloud.cdn.v1.ListResourcesRequest";
    /** ID of the folder to request listing for. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListResourcesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListResourcesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListResourcesResponse {
    $type: "yandex.cloud.cdn.v1.ListResourcesResponse";
    /** List of the resources */
    resources: Resource[];
    /**
     * [next_page_token] token allows you to get the next page of results for list requests.
     * If the number of results is larger than [ListResourcesRequest.page_size], use
     * the [next_page_token] as the value for the [ListResourcesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateResourceRequest {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest";
    /** ID of the to bind with new resource. */
    folderId: string;
    /** CDN endpoint CNAME, must be unique among clients's resources. */
    cname: string;
    /** Specify the origins to be used for CDN resources requests. */
    origin?: CreateResourceRequest_Origin;
    /** List of additional CNAMEs. */
    secondaryHostnames?: SecondaryHostnames;
    /** Specify the protocol schema to be used in communication with origin. */
    originProtocol: OriginProtocol;
    /**
     * Flag to create Resource either in active or disabled state.
     * In active state Origins payload could be transmitted from CDN CNAME requests.
     * Default value: true
     */
    active?: boolean;
    /** Resource settings and options to tune CDN edge behavior. Most is unset. */
    options?: ResourceOptions;
    /** SSL Certificate options. */
    sslCertificate?: SSLTargetCertificate;
    /** Labels of the resource. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateResourceRequest_Origin {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest.Origin";
    /** ID of pre-created origin group. */
    originGroupId: number | undefined;
    /**
     * Create new Origins group with single source, it's id will be
     * returned in result.
     */
    originSource: string | undefined;
    /** Set up resource origin parameters. */
    originSourceParams?: ResourceOriginParams | undefined;
}
export interface CreateResourceRequest_LabelsEntry {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry";
    key: string;
    value: string;
}
/** A set of resource origin parameters. */
export interface ResourceOriginParams {
    $type: "yandex.cloud.cdn.v1.ResourceOriginParams";
    /** Source of the content. */
    source: string;
    /** Set up type of the origin. */
    meta?: OriginMeta;
}
export interface CreateResourceMetadata {
    $type: "yandex.cloud.cdn.v1.CreateResourceMetadata";
    /** ID of created resource. */
    resourceId: string;
}
export interface UpdateResourceRequest {
    $type: "yandex.cloud.cdn.v1.UpdateResourceRequest";
    /** ID of updated resource. */
    resourceId: string;
    /** ID of updated origin group. */
    originGroupId?: number;
    /** List of additional CNAMEs. */
    secondaryHostnames?: SecondaryHostnames;
    /** Resource settings and options to tune CDN edge behavior. */
    options?: ResourceOptions;
    /** Specify the protocol schema to be used in communication with origin. */
    originProtocol: OriginProtocol;
    /**
     * Flag to create Resource either in active or disabled state.
     * In active state Origins payload could be transmitted from CDN CNAME requests.
     * Default value: true
     */
    active?: boolean;
    /** SSL Certificate options. */
    sslCertificate?: SSLTargetCertificate;
    /** Resource labels. At some point will be needed for granular detailing. */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateResourceRequest_LabelsEntry {
    $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateResourceMetadata {
    $type: "yandex.cloud.cdn.v1.UpdateResourceMetadata";
    /** ID of updated resource. */
    resourceId: string;
}
export interface DeleteResourceRequest {
    $type: "yandex.cloud.cdn.v1.DeleteResourceRequest";
    /** ID of resource to delete. */
    resourceId: string;
}
export interface DeleteResourceMetadata {
    $type: "yandex.cloud.cdn.v1.DeleteResourceMetadata";
    /** ID of deleted resource. */
    resourceId: string;
}
export interface GetProviderCNameRequest {
    $type: "yandex.cloud.cdn.v1.GetProviderCNameRequest";
    /** Folder ID to get provider's CNAME. */
    folderId: string;
}
export interface GetProviderCNameResponse {
    $type: "yandex.cloud.cdn.v1.GetProviderCNameResponse";
    /** Provider's CNAME. */
    cname: string;
    /** ID of the folder that the provider belongs to. */
    folderId: string;
}
export declare const GetResourceRequest: {
    $type: "yandex.cloud.cdn.v1.GetResourceRequest";
    encode(message: GetResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetResourceRequest;
    fromJSON(object: any): GetResourceRequest;
    toJSON(message: GetResourceRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): GetResourceRequest;
};
export declare const ListResourcesRequest: {
    $type: "yandex.cloud.cdn.v1.ListResourcesRequest";
    encode(message: ListResourcesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcesRequest;
    fromJSON(object: any): ListResourcesRequest;
    toJSON(message: ListResourcesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListResourcesRequest;
};
export declare const ListResourcesResponse: {
    $type: "yandex.cloud.cdn.v1.ListResourcesResponse";
    encode(message: ListResourcesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcesResponse;
    fromJSON(object: any): ListResourcesResponse;
    toJSON(message: ListResourcesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        resources?: {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            active?: boolean | undefined;
            originGroupId?: number | undefined;
            cname?: string | undefined;
            secondaryHostnames?: string[] | undefined;
            originGroupName?: string | undefined;
            originProtocol?: OriginProtocol | undefined;
            options?: {
                slice?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                disableCache?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                edgeCacheSettings?: {
                    value?: {
                        simpleValue?: number | undefined;
                        customValues?: {
                            [x: string]: number | undefined;
                            [x: number]: number | undefined;
                        } | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    defaultValue?: number | undefined;
                } | undefined;
                browserCacheSettings?: {
                    value?: number | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                cacheHttpHeaders?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsOptions?: {
                    ignoreQueryString?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsWhitelist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsBlacklist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                compressionOptions?: {
                    fetchCompressed?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    gzipOn?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    brotliCompression?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                redirectOptions?: {
                    redirectHttpToHttps?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    redirectHttpsToHttp?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                hostOptions?: {
                    host?: {
                        value?: string | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    forwardHostHeader?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                staticHeaders?: {
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                cors?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                stale?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                allowedHttpMethods?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                proxyCacheMethodsSet?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                disableProxyForceRanges?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                staticRequestHeaders?: {
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                customServerName?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                ignoreCookie?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                rewrite?: {
                    body?: string | undefined;
                    enabled?: boolean | undefined;
                    flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
                } | undefined;
            } | undefined;
            sslCertificate?: {
                type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
                data?: {
                    cm?: {
                        id?: string | undefined;
                    } | undefined;
                } | undefined;
                status?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateStatus | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        resources?: ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            active?: boolean | undefined;
            originGroupId?: number | undefined;
            cname?: string | undefined;
            secondaryHostnames?: string[] | undefined;
            originGroupName?: string | undefined;
            originProtocol?: OriginProtocol | undefined;
            options?: {
                slice?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                disableCache?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                edgeCacheSettings?: {
                    value?: {
                        simpleValue?: number | undefined;
                        customValues?: {
                            [x: string]: number | undefined;
                            [x: number]: number | undefined;
                        } | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    defaultValue?: number | undefined;
                } | undefined;
                browserCacheSettings?: {
                    value?: number | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                cacheHttpHeaders?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsOptions?: {
                    ignoreQueryString?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsWhitelist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsBlacklist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                compressionOptions?: {
                    fetchCompressed?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    gzipOn?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    brotliCompression?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                redirectOptions?: {
                    redirectHttpToHttps?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    redirectHttpsToHttp?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                hostOptions?: {
                    host?: {
                        value?: string | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    forwardHostHeader?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                staticHeaders?: {
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                cors?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                stale?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                allowedHttpMethods?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                proxyCacheMethodsSet?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                disableProxyForceRanges?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                staticRequestHeaders?: {
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                customServerName?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                ignoreCookie?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                rewrite?: {
                    body?: string | undefined;
                    enabled?: boolean | undefined;
                    flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
                } | undefined;
            } | undefined;
            sslCertificate?: {
                type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
                data?: {
                    cm?: {
                        id?: string | undefined;
                    } | undefined;
                } | undefined;
                status?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateStatus | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            active?: boolean | undefined;
            originGroupId?: number | undefined;
            cname?: string | undefined;
            secondaryHostnames?: string[] | undefined;
            originGroupName?: string | undefined;
            originProtocol?: OriginProtocol | undefined;
            options?: {
                slice?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                disableCache?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                edgeCacheSettings?: {
                    value?: {
                        simpleValue?: number | undefined;
                        customValues?: {
                            [x: string]: number | undefined;
                            [x: number]: number | undefined;
                        } | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    defaultValue?: number | undefined;
                } | undefined;
                browserCacheSettings?: {
                    value?: number | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                cacheHttpHeaders?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsOptions?: {
                    ignoreQueryString?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsWhitelist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsBlacklist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                compressionOptions?: {
                    fetchCompressed?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    gzipOn?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    brotliCompression?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                redirectOptions?: {
                    redirectHttpToHttps?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    redirectHttpsToHttp?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                hostOptions?: {
                    host?: {
                        value?: string | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    forwardHostHeader?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                staticHeaders?: {
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                cors?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                stale?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                allowedHttpMethods?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                proxyCacheMethodsSet?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                disableProxyForceRanges?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                staticRequestHeaders?: {
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                customServerName?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                ignoreCookie?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                rewrite?: {
                    body?: string | undefined;
                    enabled?: boolean | undefined;
                    flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
                } | undefined;
            } | undefined;
            sslCertificate?: {
                type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
                data?: {
                    cm?: {
                        id?: string | undefined;
                    } | undefined;
                } | undefined;
                status?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateStatus | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["resources"][number]["labels"], string | number>, never>) | undefined;
            updatedAt?: Date | undefined;
            active?: boolean | undefined;
            originGroupId?: number | undefined;
            cname?: string | undefined;
            secondaryHostnames?: (string[] & string[] & Record<Exclude<keyof I["resources"][number]["secondaryHostnames"], "$type" | keyof string[]>, never>) | undefined;
            originGroupName?: string | undefined;
            originProtocol?: OriginProtocol | undefined;
            options?: ({
                slice?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                disableCache?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                edgeCacheSettings?: {
                    value?: {
                        simpleValue?: number | undefined;
                        customValues?: {
                            [x: string]: number | undefined;
                            [x: number]: number | undefined;
                        } | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    defaultValue?: number | undefined;
                } | undefined;
                browserCacheSettings?: {
                    value?: number | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                cacheHttpHeaders?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsOptions?: {
                    ignoreQueryString?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsWhitelist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsBlacklist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                compressionOptions?: {
                    fetchCompressed?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    gzipOn?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    brotliCompression?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                redirectOptions?: {
                    redirectHttpToHttps?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    redirectHttpsToHttp?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                hostOptions?: {
                    host?: {
                        value?: string | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    forwardHostHeader?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                staticHeaders?: {
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                cors?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                stale?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                allowedHttpMethods?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                proxyCacheMethodsSet?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                disableProxyForceRanges?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                staticRequestHeaders?: {
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                customServerName?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                ignoreCookie?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                rewrite?: {
                    body?: string | undefined;
                    enabled?: boolean | undefined;
                    flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
                } | undefined;
            } & {
                slice?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["slice"], "$type" | "value" | "enabled">, never>) | undefined;
                disableCache?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["disableCache"], "$type" | "value" | "enabled">, never>) | undefined;
                edgeCacheSettings?: ({
                    value?: {
                        simpleValue?: number | undefined;
                        customValues?: {
                            [x: string]: number | undefined;
                            [x: number]: number | undefined;
                        } | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    defaultValue?: number | undefined;
                } & {
                    value?: ({
                        simpleValue?: number | undefined;
                        customValues?: {
                            [x: string]: number | undefined;
                            [x: number]: number | undefined;
                        } | undefined;
                    } & {
                        simpleValue?: number | undefined;
                        customValues?: ({
                            [x: string]: number | undefined;
                            [x: number]: number | undefined;
                        } & {
                            [x: string]: number | undefined;
                            [x: number]: number | undefined;
                        } & Record<Exclude<keyof I["resources"][number]["options"]["edgeCacheSettings"]["value"]["customValues"], string | number>, never>) | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["edgeCacheSettings"]["value"], "$type" | "simpleValue" | "customValues">, never>) | undefined;
                    enabled?: boolean | undefined;
                    defaultValue?: number | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["edgeCacheSettings"], "$type" | "value" | "enabled" | "defaultValue">, never>) | undefined;
                browserCacheSettings?: ({
                    value?: number | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: number | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["browserCacheSettings"], "$type" | "value" | "enabled">, never>) | undefined;
                cacheHttpHeaders?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["resources"][number]["options"]["cacheHttpHeaders"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["cacheHttpHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
                queryParamsOptions?: ({
                    ignoreQueryString?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsWhitelist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsBlacklist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } & {
                    ignoreQueryString?: ({
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["queryParamsOptions"]["ignoreQueryString"], "$type" | "value" | "enabled">, never>) | undefined;
                    queryParamsWhitelist?: ({
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } & {
                        value?: (string[] & string[] & Record<Exclude<keyof I["resources"][number]["options"]["queryParamsOptions"]["queryParamsWhitelist"]["value"], "$type" | keyof string[]>, never>) | undefined;
                        enabled?: boolean | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["queryParamsOptions"]["queryParamsWhitelist"], "$type" | "value" | "enabled">, never>) | undefined;
                    queryParamsBlacklist?: ({
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } & {
                        value?: (string[] & string[] & Record<Exclude<keyof I["resources"][number]["options"]["queryParamsOptions"]["queryParamsBlacklist"]["value"], "$type" | keyof string[]>, never>) | undefined;
                        enabled?: boolean | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["queryParamsOptions"]["queryParamsBlacklist"], "$type" | "value" | "enabled">, never>) | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["queryParamsOptions"], "$type" | "ignoreQueryString" | "queryParamsWhitelist" | "queryParamsBlacklist">, never>) | undefined;
                compressionOptions?: ({
                    fetchCompressed?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    gzipOn?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    brotliCompression?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } & {
                    fetchCompressed?: ({
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["compressionOptions"]["fetchCompressed"], "$type" | "value" | "enabled">, never>) | undefined;
                    gzipOn?: ({
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["compressionOptions"]["gzipOn"], "$type" | "value" | "enabled">, never>) | undefined;
                    brotliCompression?: ({
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } & {
                        value?: (string[] & string[] & Record<Exclude<keyof I["resources"][number]["options"]["compressionOptions"]["brotliCompression"]["value"], "$type" | keyof string[]>, never>) | undefined;
                        enabled?: boolean | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["compressionOptions"]["brotliCompression"], "$type" | "value" | "enabled">, never>) | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["compressionOptions"], "$type" | "fetchCompressed" | "gzipOn" | "brotliCompression">, never>) | undefined;
                redirectOptions?: ({
                    redirectHttpToHttps?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    redirectHttpsToHttp?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } & {
                    redirectHttpToHttps?: ({
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["redirectOptions"]["redirectHttpToHttps"], "$type" | "value" | "enabled">, never>) | undefined;
                    redirectHttpsToHttp?: ({
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["redirectOptions"]["redirectHttpsToHttp"], "$type" | "value" | "enabled">, never>) | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["redirectOptions"], "$type" | "redirectHttpToHttps" | "redirectHttpsToHttp">, never>) | undefined;
                hostOptions?: ({
                    host?: {
                        value?: string | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    forwardHostHeader?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } & {
                    host?: ({
                        value?: string | undefined;
                        enabled?: boolean | undefined;
                    } & {
                        value?: string | undefined;
                        enabled?: boolean | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["hostOptions"]["host"], "$type" | "value" | "enabled">, never>) | undefined;
                    forwardHostHeader?: ({
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["hostOptions"]["forwardHostHeader"], "$type" | "value" | "enabled">, never>) | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["hostOptions"], "$type" | "host" | "forwardHostHeader">, never>) | undefined;
                staticHeaders?: ({
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: ({
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["staticHeaders"]["value"], string | number>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["staticHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
                cors?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["resources"][number]["options"]["cors"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["cors"], "$type" | "value" | "enabled">, never>) | undefined;
                stale?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["resources"][number]["options"]["stale"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["stale"], "$type" | "value" | "enabled">, never>) | undefined;
                allowedHttpMethods?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["resources"][number]["options"]["allowedHttpMethods"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["allowedHttpMethods"], "$type" | "value" | "enabled">, never>) | undefined;
                proxyCacheMethodsSet?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["proxyCacheMethodsSet"], "$type" | "value" | "enabled">, never>) | undefined;
                disableProxyForceRanges?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["disableProxyForceRanges"], "$type" | "value" | "enabled">, never>) | undefined;
                staticRequestHeaders?: ({
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: ({
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["options"]["staticRequestHeaders"]["value"], string | number>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["staticRequestHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
                customServerName?: ({
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["customServerName"], "$type" | "value" | "enabled">, never>) | undefined;
                ignoreCookie?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["ignoreCookie"], "$type" | "value" | "enabled">, never>) | undefined;
                rewrite?: ({
                    body?: string | undefined;
                    enabled?: boolean | undefined;
                    flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
                } & {
                    body?: string | undefined;
                    enabled?: boolean | undefined;
                    flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
                } & Record<Exclude<keyof I["resources"][number]["options"]["rewrite"], "$type" | "body" | "enabled" | "flag">, never>) | undefined;
            } & Record<Exclude<keyof I["resources"][number]["options"], "$type" | "slice" | "disableCache" | "edgeCacheSettings" | "browserCacheSettings" | "cacheHttpHeaders" | "queryParamsOptions" | "compressionOptions" | "redirectOptions" | "hostOptions" | "staticHeaders" | "cors" | "stale" | "allowedHttpMethods" | "proxyCacheMethodsSet" | "disableProxyForceRanges" | "staticRequestHeaders" | "customServerName" | "ignoreCookie" | "rewrite">, never>) | undefined;
            sslCertificate?: ({
                type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
                data?: {
                    cm?: {
                        id?: string | undefined;
                    } | undefined;
                } | undefined;
                status?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateStatus | undefined;
            } & {
                type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
                data?: ({
                    cm?: {
                        id?: string | undefined;
                    } | undefined;
                } & {
                    cm?: ({
                        id?: string | undefined;
                    } & {
                        id?: string | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["sslCertificate"]["data"]["cm"], "$type" | "id">, never>) | undefined;
                } & Record<Exclude<keyof I["resources"][number]["sslCertificate"]["data"], "$type" | "cm">, never>) | undefined;
                status?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateStatus | undefined;
            } & Record<Exclude<keyof I["resources"][number]["sslCertificate"], "$type" | "type" | "data" | "status">, never>) | undefined;
        } & Record<Exclude<keyof I["resources"][number], "$type" | "id" | "createdAt" | "folderId" | "labels" | "updatedAt" | "active" | "originGroupId" | "cname" | "secondaryHostnames" | "originGroupName" | "originProtocol" | "options" | "sslCertificate">, never>)[] & Record<Exclude<keyof I["resources"], "$type" | keyof {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            active?: boolean | undefined;
            originGroupId?: number | undefined;
            cname?: string | undefined;
            secondaryHostnames?: string[] | undefined;
            originGroupName?: string | undefined;
            originProtocol?: OriginProtocol | undefined;
            options?: {
                slice?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                disableCache?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                edgeCacheSettings?: {
                    value?: {
                        simpleValue?: number | undefined;
                        customValues?: {
                            [x: string]: number | undefined;
                            [x: number]: number | undefined;
                        } | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                    defaultValue?: number | undefined;
                } | undefined;
                browserCacheSettings?: {
                    value?: number | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                cacheHttpHeaders?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsOptions?: {
                    ignoreQueryString?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsWhitelist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    queryParamsBlacklist?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                compressionOptions?: {
                    fetchCompressed?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    gzipOn?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    brotliCompression?: {
                        value?: string[] | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                redirectOptions?: {
                    redirectHttpToHttps?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    redirectHttpsToHttp?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                hostOptions?: {
                    host?: {
                        value?: string | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                    forwardHostHeader?: {
                        value?: boolean | undefined;
                        enabled?: boolean | undefined;
                    } | undefined;
                } | undefined;
                staticHeaders?: {
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                cors?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                stale?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                allowedHttpMethods?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                proxyCacheMethodsSet?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                disableProxyForceRanges?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                staticRequestHeaders?: {
                    value?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                customServerName?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                ignoreCookie?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                rewrite?: {
                    body?: string | undefined;
                    enabled?: boolean | undefined;
                    flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
                } | undefined;
            } | undefined;
            sslCertificate?: {
                type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
                data?: {
                    cm?: {
                        id?: string | undefined;
                    } | undefined;
                } | undefined;
                status?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateStatus | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "resources">, never>>(object: I): ListResourcesResponse;
};
export declare const CreateResourceRequest: {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest";
    encode(message: CreateResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateResourceRequest;
    fromJSON(object: any): CreateResourceRequest;
    toJSON(message: CreateResourceRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        active?: boolean | undefined;
        cname?: string | undefined;
        secondaryHostnames?: {
            values?: string[] | undefined;
        } | undefined;
        originProtocol?: OriginProtocol | undefined;
        options?: {
            slice?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableCache?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            edgeCacheSettings?: {
                value?: {
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } | undefined;
            browserCacheSettings?: {
                value?: number | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cacheHttpHeaders?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            queryParamsOptions?: {
                ignoreQueryString?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsWhitelist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsBlacklist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            compressionOptions?: {
                fetchCompressed?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                gzipOn?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                brotliCompression?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            redirectOptions?: {
                redirectHttpToHttps?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                redirectHttpsToHttp?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            hostOptions?: {
                host?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                forwardHostHeader?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            staticHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cors?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            stale?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            allowedHttpMethods?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            proxyCacheMethodsSet?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableProxyForceRanges?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            staticRequestHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            customServerName?: {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            ignoreCookie?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            rewrite?: {
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
            } | undefined;
        } | undefined;
        sslCertificate?: {
            type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
            data?: {
                cm?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        origin?: {
            originGroupId?: number | undefined;
            originSource?: string | undefined;
            originSourceParams?: {
                source?: string | undefined;
                meta?: {
                    bucket?: {
                        name?: string | undefined;
                    } | undefined;
                    common?: {
                        name?: string | undefined;
                    } | undefined;
                    website?: {
                        name?: string | undefined;
                    } | undefined;
                    balancer?: {
                        id?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        active?: boolean | undefined;
        cname?: string | undefined;
        secondaryHostnames?: ({
            values?: string[] | undefined;
        } & {
            values?: (string[] & string[] & Record<Exclude<keyof I["secondaryHostnames"]["values"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["secondaryHostnames"], "$type" | "values">, never>) | undefined;
        originProtocol?: OriginProtocol | undefined;
        options?: ({
            slice?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableCache?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            edgeCacheSettings?: {
                value?: {
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } | undefined;
            browserCacheSettings?: {
                value?: number | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cacheHttpHeaders?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            queryParamsOptions?: {
                ignoreQueryString?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsWhitelist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsBlacklist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            compressionOptions?: {
                fetchCompressed?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                gzipOn?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                brotliCompression?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            redirectOptions?: {
                redirectHttpToHttps?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                redirectHttpsToHttp?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            hostOptions?: {
                host?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                forwardHostHeader?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            staticHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cors?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            stale?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            allowedHttpMethods?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            proxyCacheMethodsSet?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableProxyForceRanges?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            staticRequestHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            customServerName?: {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            ignoreCookie?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            rewrite?: {
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
            } | undefined;
        } & {
            slice?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["slice"], "$type" | "value" | "enabled">, never>) | undefined;
            disableCache?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["disableCache"], "$type" | "value" | "enabled">, never>) | undefined;
            edgeCacheSettings?: ({
                value?: {
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } & {
                value?: ({
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } & {
                    simpleValue?: number | undefined;
                    customValues?: ({
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } & {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } & Record<Exclude<keyof I["options"]["edgeCacheSettings"]["value"]["customValues"], string | number>, never>) | undefined;
                } & Record<Exclude<keyof I["options"]["edgeCacheSettings"]["value"], "$type" | "simpleValue" | "customValues">, never>) | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } & Record<Exclude<keyof I["options"]["edgeCacheSettings"], "$type" | "value" | "enabled" | "defaultValue">, never>) | undefined;
            browserCacheSettings?: ({
                value?: number | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: number | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["browserCacheSettings"], "$type" | "value" | "enabled">, never>) | undefined;
            cacheHttpHeaders?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["cacheHttpHeaders"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["cacheHttpHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
            queryParamsOptions?: ({
                ignoreQueryString?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsWhitelist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsBlacklist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                ignoreQueryString?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["queryParamsOptions"]["ignoreQueryString"], "$type" | "value" | "enabled">, never>) | undefined;
                queryParamsWhitelist?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsWhitelist"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsWhitelist"], "$type" | "value" | "enabled">, never>) | undefined;
                queryParamsBlacklist?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsBlacklist"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsBlacklist"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["queryParamsOptions"], "$type" | "ignoreQueryString" | "queryParamsWhitelist" | "queryParamsBlacklist">, never>) | undefined;
            compressionOptions?: ({
                fetchCompressed?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                gzipOn?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                brotliCompression?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                fetchCompressed?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["compressionOptions"]["fetchCompressed"], "$type" | "value" | "enabled">, never>) | undefined;
                gzipOn?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["compressionOptions"]["gzipOn"], "$type" | "value" | "enabled">, never>) | undefined;
                brotliCompression?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["options"]["compressionOptions"]["brotliCompression"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["compressionOptions"]["brotliCompression"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["compressionOptions"], "$type" | "fetchCompressed" | "gzipOn" | "brotliCompression">, never>) | undefined;
            redirectOptions?: ({
                redirectHttpToHttps?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                redirectHttpsToHttp?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                redirectHttpToHttps?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["redirectOptions"]["redirectHttpToHttps"], "$type" | "value" | "enabled">, never>) | undefined;
                redirectHttpsToHttp?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["redirectOptions"]["redirectHttpsToHttp"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["redirectOptions"], "$type" | "redirectHttpToHttps" | "redirectHttpsToHttp">, never>) | undefined;
            hostOptions?: ({
                host?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                forwardHostHeader?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                host?: ({
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["hostOptions"]["host"], "$type" | "value" | "enabled">, never>) | undefined;
                forwardHostHeader?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["hostOptions"]["forwardHostHeader"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["hostOptions"], "$type" | "host" | "forwardHostHeader">, never>) | undefined;
            staticHeaders?: ({
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["options"]["staticHeaders"]["value"], string | number>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["staticHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
            cors?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["cors"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["cors"], "$type" | "value" | "enabled">, never>) | undefined;
            stale?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["stale"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["stale"], "$type" | "value" | "enabled">, never>) | undefined;
            allowedHttpMethods?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["allowedHttpMethods"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["allowedHttpMethods"], "$type" | "value" | "enabled">, never>) | undefined;
            proxyCacheMethodsSet?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["proxyCacheMethodsSet"], "$type" | "value" | "enabled">, never>) | undefined;
            disableProxyForceRanges?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["disableProxyForceRanges"], "$type" | "value" | "enabled">, never>) | undefined;
            staticRequestHeaders?: ({
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["options"]["staticRequestHeaders"]["value"], string | number>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["staticRequestHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
            customServerName?: ({
                value?: string | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["customServerName"], "$type" | "value" | "enabled">, never>) | undefined;
            ignoreCookie?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["ignoreCookie"], "$type" | "value" | "enabled">, never>) | undefined;
            rewrite?: ({
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
            } & {
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
            } & Record<Exclude<keyof I["options"]["rewrite"], "$type" | "body" | "enabled" | "flag">, never>) | undefined;
        } & Record<Exclude<keyof I["options"], "$type" | "slice" | "disableCache" | "edgeCacheSettings" | "browserCacheSettings" | "cacheHttpHeaders" | "queryParamsOptions" | "compressionOptions" | "redirectOptions" | "hostOptions" | "staticHeaders" | "cors" | "stale" | "allowedHttpMethods" | "proxyCacheMethodsSet" | "disableProxyForceRanges" | "staticRequestHeaders" | "customServerName" | "ignoreCookie" | "rewrite">, never>) | undefined;
        sslCertificate?: ({
            type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
            data?: {
                cm?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
            data?: ({
                cm?: {
                    id?: string | undefined;
                } | undefined;
            } & {
                cm?: ({
                    id?: string | undefined;
                } & {
                    id?: string | undefined;
                } & Record<Exclude<keyof I["sslCertificate"]["data"]["cm"], "$type" | "id">, never>) | undefined;
            } & Record<Exclude<keyof I["sslCertificate"]["data"], "$type" | "cm">, never>) | undefined;
        } & Record<Exclude<keyof I["sslCertificate"], "$type" | "type" | "data">, never>) | undefined;
        origin?: ({
            originGroupId?: number | undefined;
            originSource?: string | undefined;
            originSourceParams?: {
                source?: string | undefined;
                meta?: {
                    bucket?: {
                        name?: string | undefined;
                    } | undefined;
                    common?: {
                        name?: string | undefined;
                    } | undefined;
                    website?: {
                        name?: string | undefined;
                    } | undefined;
                    balancer?: {
                        id?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            originGroupId?: number | undefined;
            originSource?: string | undefined;
            originSourceParams?: ({
                source?: string | undefined;
                meta?: {
                    bucket?: {
                        name?: string | undefined;
                    } | undefined;
                    common?: {
                        name?: string | undefined;
                    } | undefined;
                    website?: {
                        name?: string | undefined;
                    } | undefined;
                    balancer?: {
                        id?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                source?: string | undefined;
                meta?: ({
                    bucket?: {
                        name?: string | undefined;
                    } | undefined;
                    common?: {
                        name?: string | undefined;
                    } | undefined;
                    website?: {
                        name?: string | undefined;
                    } | undefined;
                    balancer?: {
                        id?: string | undefined;
                    } | undefined;
                } & {
                    bucket?: ({
                        name?: string | undefined;
                    } & {
                        name?: string | undefined;
                    } & Record<Exclude<keyof I["origin"]["originSourceParams"]["meta"]["bucket"], "$type" | "name">, never>) | undefined;
                    common?: ({
                        name?: string | undefined;
                    } & {
                        name?: string | undefined;
                    } & Record<Exclude<keyof I["origin"]["originSourceParams"]["meta"]["common"], "$type" | "name">, never>) | undefined;
                    website?: ({
                        name?: string | undefined;
                    } & {
                        name?: string | undefined;
                    } & Record<Exclude<keyof I["origin"]["originSourceParams"]["meta"]["website"], "$type" | "name">, never>) | undefined;
                    balancer?: ({
                        id?: string | undefined;
                    } & {
                        id?: string | undefined;
                    } & Record<Exclude<keyof I["origin"]["originSourceParams"]["meta"]["balancer"], "$type" | "id">, never>) | undefined;
                } & Record<Exclude<keyof I["origin"]["originSourceParams"]["meta"], "$type" | "bucket" | "common" | "website" | "balancer">, never>) | undefined;
            } & Record<Exclude<keyof I["origin"]["originSourceParams"], "$type" | "source" | "meta">, never>) | undefined;
        } & Record<Exclude<keyof I["origin"], "$type" | "originGroupId" | "originSource" | "originSourceParams">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "labels" | "active" | "cname" | "secondaryHostnames" | "originProtocol" | "options" | "sslCertificate" | "origin">, never>>(object: I): CreateResourceRequest;
};
export declare const CreateResourceRequest_Origin: {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest.Origin";
    encode(message: CreateResourceRequest_Origin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateResourceRequest_Origin;
    fromJSON(object: any): CreateResourceRequest_Origin;
    toJSON(message: CreateResourceRequest_Origin): unknown;
    fromPartial<I extends {
        originGroupId?: number | undefined;
        originSource?: string | undefined;
        originSourceParams?: {
            source?: string | undefined;
            meta?: {
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        originGroupId?: number | undefined;
        originSource?: string | undefined;
        originSourceParams?: ({
            source?: string | undefined;
            meta?: {
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            source?: string | undefined;
            meta?: ({
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } & {
                bucket?: ({
                    name?: string | undefined;
                } & {
                    name?: string | undefined;
                } & Record<Exclude<keyof I["originSourceParams"]["meta"]["bucket"], "$type" | "name">, never>) | undefined;
                common?: ({
                    name?: string | undefined;
                } & {
                    name?: string | undefined;
                } & Record<Exclude<keyof I["originSourceParams"]["meta"]["common"], "$type" | "name">, never>) | undefined;
                website?: ({
                    name?: string | undefined;
                } & {
                    name?: string | undefined;
                } & Record<Exclude<keyof I["originSourceParams"]["meta"]["website"], "$type" | "name">, never>) | undefined;
                balancer?: ({
                    id?: string | undefined;
                } & {
                    id?: string | undefined;
                } & Record<Exclude<keyof I["originSourceParams"]["meta"]["balancer"], "$type" | "id">, never>) | undefined;
            } & Record<Exclude<keyof I["originSourceParams"]["meta"], "$type" | "bucket" | "common" | "website" | "balancer">, never>) | undefined;
        } & Record<Exclude<keyof I["originSourceParams"], "$type" | "source" | "meta">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "originGroupId" | "originSource" | "originSourceParams">, never>>(object: I): CreateResourceRequest_Origin;
};
export declare const CreateResourceRequest_LabelsEntry: {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry";
    encode(message: CreateResourceRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateResourceRequest_LabelsEntry;
    fromJSON(object: any): CreateResourceRequest_LabelsEntry;
    toJSON(message: CreateResourceRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateResourceRequest_LabelsEntry;
};
export declare const ResourceOriginParams: {
    $type: "yandex.cloud.cdn.v1.ResourceOriginParams";
    encode(message: ResourceOriginParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOriginParams;
    fromJSON(object: any): ResourceOriginParams;
    toJSON(message: ResourceOriginParams): unknown;
    fromPartial<I extends {
        source?: string | undefined;
        meta?: {
            bucket?: {
                name?: string | undefined;
            } | undefined;
            common?: {
                name?: string | undefined;
            } | undefined;
            website?: {
                name?: string | undefined;
            } | undefined;
            balancer?: {
                id?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        source?: string | undefined;
        meta?: ({
            bucket?: {
                name?: string | undefined;
            } | undefined;
            common?: {
                name?: string | undefined;
            } | undefined;
            website?: {
                name?: string | undefined;
            } | undefined;
            balancer?: {
                id?: string | undefined;
            } | undefined;
        } & {
            bucket?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["bucket"], "$type" | "name">, never>) | undefined;
            common?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["common"], "$type" | "name">, never>) | undefined;
            website?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["website"], "$type" | "name">, never>) | undefined;
            balancer?: ({
                id?: string | undefined;
            } & {
                id?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["balancer"], "$type" | "id">, never>) | undefined;
        } & Record<Exclude<keyof I["meta"], "$type" | "bucket" | "common" | "website" | "balancer">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "source" | "meta">, never>>(object: I): ResourceOriginParams;
};
export declare const CreateResourceMetadata: {
    $type: "yandex.cloud.cdn.v1.CreateResourceMetadata";
    encode(message: CreateResourceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateResourceMetadata;
    fromJSON(object: any): CreateResourceMetadata;
    toJSON(message: CreateResourceMetadata): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): CreateResourceMetadata;
};
export declare const UpdateResourceRequest: {
    $type: "yandex.cloud.cdn.v1.UpdateResourceRequest";
    encode(message: UpdateResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateResourceRequest;
    fromJSON(object: any): UpdateResourceRequest;
    toJSON(message: UpdateResourceRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        active?: boolean | undefined;
        originGroupId?: number | undefined;
        secondaryHostnames?: {
            values?: string[] | undefined;
        } | undefined;
        originProtocol?: OriginProtocol | undefined;
        options?: {
            slice?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableCache?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            edgeCacheSettings?: {
                value?: {
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } | undefined;
            browserCacheSettings?: {
                value?: number | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cacheHttpHeaders?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            queryParamsOptions?: {
                ignoreQueryString?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsWhitelist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsBlacklist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            compressionOptions?: {
                fetchCompressed?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                gzipOn?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                brotliCompression?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            redirectOptions?: {
                redirectHttpToHttps?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                redirectHttpsToHttp?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            hostOptions?: {
                host?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                forwardHostHeader?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            staticHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cors?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            stale?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            allowedHttpMethods?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            proxyCacheMethodsSet?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableProxyForceRanges?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            staticRequestHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            customServerName?: {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            ignoreCookie?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            rewrite?: {
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
            } | undefined;
        } | undefined;
        sslCertificate?: {
            type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
            data?: {
                cm?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        resourceId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        active?: boolean | undefined;
        originGroupId?: number | undefined;
        secondaryHostnames?: ({
            values?: string[] | undefined;
        } & {
            values?: (string[] & string[] & Record<Exclude<keyof I["secondaryHostnames"]["values"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["secondaryHostnames"], "$type" | "values">, never>) | undefined;
        originProtocol?: OriginProtocol | undefined;
        options?: ({
            slice?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableCache?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            edgeCacheSettings?: {
                value?: {
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } | undefined;
            browserCacheSettings?: {
                value?: number | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cacheHttpHeaders?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            queryParamsOptions?: {
                ignoreQueryString?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsWhitelist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsBlacklist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            compressionOptions?: {
                fetchCompressed?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                gzipOn?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                brotliCompression?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            redirectOptions?: {
                redirectHttpToHttps?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                redirectHttpsToHttp?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            hostOptions?: {
                host?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                forwardHostHeader?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            staticHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cors?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            stale?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            allowedHttpMethods?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            proxyCacheMethodsSet?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableProxyForceRanges?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            staticRequestHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            customServerName?: {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            ignoreCookie?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            rewrite?: {
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
            } | undefined;
        } & {
            slice?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["slice"], "$type" | "value" | "enabled">, never>) | undefined;
            disableCache?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["disableCache"], "$type" | "value" | "enabled">, never>) | undefined;
            edgeCacheSettings?: ({
                value?: {
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } & {
                value?: ({
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } & {
                    simpleValue?: number | undefined;
                    customValues?: ({
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } & {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } & Record<Exclude<keyof I["options"]["edgeCacheSettings"]["value"]["customValues"], string | number>, never>) | undefined;
                } & Record<Exclude<keyof I["options"]["edgeCacheSettings"]["value"], "$type" | "simpleValue" | "customValues">, never>) | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } & Record<Exclude<keyof I["options"]["edgeCacheSettings"], "$type" | "value" | "enabled" | "defaultValue">, never>) | undefined;
            browserCacheSettings?: ({
                value?: number | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: number | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["browserCacheSettings"], "$type" | "value" | "enabled">, never>) | undefined;
            cacheHttpHeaders?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["cacheHttpHeaders"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["cacheHttpHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
            queryParamsOptions?: ({
                ignoreQueryString?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsWhitelist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsBlacklist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                ignoreQueryString?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["queryParamsOptions"]["ignoreQueryString"], "$type" | "value" | "enabled">, never>) | undefined;
                queryParamsWhitelist?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsWhitelist"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsWhitelist"], "$type" | "value" | "enabled">, never>) | undefined;
                queryParamsBlacklist?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsBlacklist"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsBlacklist"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["queryParamsOptions"], "$type" | "ignoreQueryString" | "queryParamsWhitelist" | "queryParamsBlacklist">, never>) | undefined;
            compressionOptions?: ({
                fetchCompressed?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                gzipOn?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                brotliCompression?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                fetchCompressed?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["compressionOptions"]["fetchCompressed"], "$type" | "value" | "enabled">, never>) | undefined;
                gzipOn?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["compressionOptions"]["gzipOn"], "$type" | "value" | "enabled">, never>) | undefined;
                brotliCompression?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["options"]["compressionOptions"]["brotliCompression"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["compressionOptions"]["brotliCompression"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["compressionOptions"], "$type" | "fetchCompressed" | "gzipOn" | "brotliCompression">, never>) | undefined;
            redirectOptions?: ({
                redirectHttpToHttps?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                redirectHttpsToHttp?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                redirectHttpToHttps?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["redirectOptions"]["redirectHttpToHttps"], "$type" | "value" | "enabled">, never>) | undefined;
                redirectHttpsToHttp?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["redirectOptions"]["redirectHttpsToHttp"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["redirectOptions"], "$type" | "redirectHttpToHttps" | "redirectHttpsToHttp">, never>) | undefined;
            hostOptions?: ({
                host?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                forwardHostHeader?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                host?: ({
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["hostOptions"]["host"], "$type" | "value" | "enabled">, never>) | undefined;
                forwardHostHeader?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["hostOptions"]["forwardHostHeader"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["hostOptions"], "$type" | "host" | "forwardHostHeader">, never>) | undefined;
            staticHeaders?: ({
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["options"]["staticHeaders"]["value"], string | number>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["staticHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
            cors?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["cors"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["cors"], "$type" | "value" | "enabled">, never>) | undefined;
            stale?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["stale"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["stale"], "$type" | "value" | "enabled">, never>) | undefined;
            allowedHttpMethods?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["allowedHttpMethods"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["allowedHttpMethods"], "$type" | "value" | "enabled">, never>) | undefined;
            proxyCacheMethodsSet?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["proxyCacheMethodsSet"], "$type" | "value" | "enabled">, never>) | undefined;
            disableProxyForceRanges?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["disableProxyForceRanges"], "$type" | "value" | "enabled">, never>) | undefined;
            staticRequestHeaders?: ({
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["options"]["staticRequestHeaders"]["value"], string | number>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["staticRequestHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
            customServerName?: ({
                value?: string | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["customServerName"], "$type" | "value" | "enabled">, never>) | undefined;
            ignoreCookie?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["ignoreCookie"], "$type" | "value" | "enabled">, never>) | undefined;
            rewrite?: ({
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
            } & {
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: import("../../../../yandex/cloud/cdn/v1/resource").RewriteFlag | undefined;
            } & Record<Exclude<keyof I["options"]["rewrite"], "$type" | "body" | "enabled" | "flag">, never>) | undefined;
        } & Record<Exclude<keyof I["options"], "$type" | "slice" | "disableCache" | "edgeCacheSettings" | "browserCacheSettings" | "cacheHttpHeaders" | "queryParamsOptions" | "compressionOptions" | "redirectOptions" | "hostOptions" | "staticHeaders" | "cors" | "stale" | "allowedHttpMethods" | "proxyCacheMethodsSet" | "disableProxyForceRanges" | "staticRequestHeaders" | "customServerName" | "ignoreCookie" | "rewrite">, never>) | undefined;
        sslCertificate?: ({
            type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
            data?: {
                cm?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            type?: import("../../../../yandex/cloud/cdn/v1/resource").SSLCertificateType | undefined;
            data?: ({
                cm?: {
                    id?: string | undefined;
                } | undefined;
            } & {
                cm?: ({
                    id?: string | undefined;
                } & {
                    id?: string | undefined;
                } & Record<Exclude<keyof I["sslCertificate"]["data"]["cm"], "$type" | "id">, never>) | undefined;
            } & Record<Exclude<keyof I["sslCertificate"]["data"], "$type" | "cm">, never>) | undefined;
        } & Record<Exclude<keyof I["sslCertificate"], "$type" | "type" | "data">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "labels" | "active" | "originGroupId" | "secondaryHostnames" | "originProtocol" | "options" | "sslCertificate">, never>>(object: I): UpdateResourceRequest;
};
export declare const UpdateResourceRequest_LabelsEntry: {
    $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry";
    encode(message: UpdateResourceRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateResourceRequest_LabelsEntry;
    fromJSON(object: any): UpdateResourceRequest_LabelsEntry;
    toJSON(message: UpdateResourceRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateResourceRequest_LabelsEntry;
};
export declare const UpdateResourceMetadata: {
    $type: "yandex.cloud.cdn.v1.UpdateResourceMetadata";
    encode(message: UpdateResourceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateResourceMetadata;
    fromJSON(object: any): UpdateResourceMetadata;
    toJSON(message: UpdateResourceMetadata): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): UpdateResourceMetadata;
};
export declare const DeleteResourceRequest: {
    $type: "yandex.cloud.cdn.v1.DeleteResourceRequest";
    encode(message: DeleteResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteResourceRequest;
    fromJSON(object: any): DeleteResourceRequest;
    toJSON(message: DeleteResourceRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): DeleteResourceRequest;
};
export declare const DeleteResourceMetadata: {
    $type: "yandex.cloud.cdn.v1.DeleteResourceMetadata";
    encode(message: DeleteResourceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteResourceMetadata;
    fromJSON(object: any): DeleteResourceMetadata;
    toJSON(message: DeleteResourceMetadata): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): DeleteResourceMetadata;
};
export declare const GetProviderCNameRequest: {
    $type: "yandex.cloud.cdn.v1.GetProviderCNameRequest";
    encode(message: GetProviderCNameRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetProviderCNameRequest;
    fromJSON(object: any): GetProviderCNameRequest;
    toJSON(message: GetProviderCNameRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
    } & {
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId">, never>>(object: I): GetProviderCNameRequest;
};
export declare const GetProviderCNameResponse: {
    $type: "yandex.cloud.cdn.v1.GetProviderCNameResponse";
    encode(message: GetProviderCNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetProviderCNameResponse;
    fromJSON(object: any): GetProviderCNameResponse;
    toJSON(message: GetProviderCNameResponse): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        cname?: string | undefined;
    } & {
        folderId?: string | undefined;
        cname?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "cname">, never>>(object: I): GetProviderCNameResponse;
};
/** Provider's resources management service. */
export declare const ResourceServiceService: {
    /** Get client's CDN resource by resource id. */
    readonly get: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetResourceRequest;
        readonly responseSerialize: (value: Resource) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Resource;
    };
    /** Lists CDN resources. */
    readonly list: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListResourcesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListResourcesRequest;
        readonly responseSerialize: (value: ListResourcesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListResourcesResponse;
    };
    /**
     * Creates a CDN resource in the specified folder.
     *
     * Creation may take up to 15 minutes.
     */
    readonly create: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateResourceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified CDN resource.
     *
     * The method implements patch behaviour, i.e. only the fields specified in the request are updated in the resource.
     *
     * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge the resource's cache via a
     * [CacheService.Purge] request.
     */
    readonly update: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateResourceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes client's CDN resource. */
    readonly delete: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteResourceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Get Provider's CNAME (edge endpoint) bind to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    readonly getProviderCName: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/GetProviderCName";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProviderCNameRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProviderCNameRequest;
        readonly responseSerialize: (value: GetProviderCNameResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetProviderCNameResponse;
    };
};
export interface ResourceServiceServer extends UntypedServiceImplementation {
    /** Get client's CDN resource by resource id. */
    get: handleUnaryCall<GetResourceRequest, Resource>;
    /** Lists CDN resources. */
    list: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
    /**
     * Creates a CDN resource in the specified folder.
     *
     * Creation may take up to 15 minutes.
     */
    create: handleUnaryCall<CreateResourceRequest, Operation>;
    /**
     * Updates the specified CDN resource.
     *
     * The method implements patch behaviour, i.e. only the fields specified in the request are updated in the resource.
     *
     * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge the resource's cache via a
     * [CacheService.Purge] request.
     */
    update: handleUnaryCall<UpdateResourceRequest, Operation>;
    /** Deletes client's CDN resource. */
    delete: handleUnaryCall<DeleteResourceRequest, Operation>;
    /**
     * Get Provider's CNAME (edge endpoint) bind to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    getProviderCName: handleUnaryCall<GetProviderCNameRequest, GetProviderCNameResponse>;
}
export interface ResourceServiceClient extends Client {
    /** Get client's CDN resource by resource id. */
    get(request: GetResourceRequest, callback: (error: ServiceError | null, response: Resource) => void): ClientUnaryCall;
    get(request: GetResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Resource) => void): ClientUnaryCall;
    get(request: GetResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Resource) => void): ClientUnaryCall;
    /** Lists CDN resources. */
    list(request: ListResourcesRequest, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    list(request: ListResourcesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    list(request: ListResourcesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    /**
     * Creates a CDN resource in the specified folder.
     *
     * Creation may take up to 15 minutes.
     */
    create(request: CreateResourceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified CDN resource.
     *
     * The method implements patch behaviour, i.e. only the fields specified in the request are updated in the resource.
     *
     * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge the resource's cache via a
     * [CacheService.Purge] request.
     */
    update(request: UpdateResourceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes client's CDN resource. */
    delete(request: DeleteResourceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Get Provider's CNAME (edge endpoint) bind to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    getProviderCName(request: GetProviderCNameRequest, callback: (error: ServiceError | null, response: GetProviderCNameResponse) => void): ClientUnaryCall;
    getProviderCName(request: GetProviderCNameRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetProviderCNameResponse) => void): ClientUnaryCall;
    getProviderCName(request: GetProviderCNameRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetProviderCNameResponse) => void): ClientUnaryCall;
}
export declare const ResourceServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ResourceServiceClient;
    service: typeof ResourceServiceService;
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
