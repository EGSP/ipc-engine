/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { RouteOptions, VirtualHost } from "../../../../yandex/cloud/apploadbalancer/v1/virtual_host";
import { HttpRouter } from "../../../../yandex/cloud/apploadbalancer/v1/http_router";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetHttpRouterRequest {
    $type: "yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest";
    /**
     * ID of the HTTP router to return.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
}
export interface ListHttpRoutersRequest {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest";
    /**
     * ID of the folder to list HTTP routers in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListHttpRoutersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListHttpRoutersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters HTTP routers listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [HttpRouter.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-http-router`.
     */
    filter: string;
}
export interface ListHttpRoutersResponse {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse";
    /** List of HTTP routers in the specified folder. */
    httpRouters: HttpRouter[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListHttpRoutersRequest.page_size], use `next_page_token` as the value
     * for the [ListHttpRoutersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteHttpRouterRequest {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest";
    /**
     * ID of the HTTP router to delete.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
}
export interface DeleteHttpRouterMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata";
    /** ID of the HTTP router that is being deleted. */
    httpRouterId: string;
}
export interface UpdateHttpRouterRequest {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest";
    /**
     * ID of the HTTP router to update.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /** Field mask that specifies which attributes of the HTTP router should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the HTTP router.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the HTTP router. */
    description: string;
    /**
     * HTTP router labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [HttpRouterService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * New virtual hosts that combine routes inside the router.
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
     *
     * Only one virtual host with no authority (default match) can be specified.
     *
     * Existing list of virtual hosts is completely replaced by the specified list, so if you just want to add or remove
     * a virtual host, make a [VirtualHostService.Create] request or a [VirtualHostService.Delete] request.
     */
    virtualHosts: VirtualHost[];
    /** New route options for the HTTP router. */
    routeOptions?: RouteOptions;
}
export interface UpdateHttpRouterRequest_LabelsEntry {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateHttpRouterMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata";
    /** ID of the HTTP router that is being updated. */
    httpRouterId: string;
}
export interface CreateHttpRouterRequest {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest";
    /**
     * ID of the folder to create an HTTP router in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the HTTP router.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the HTTP router. */
    description: string;
    /**
     * HTTP router labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /**
     * Virtual hosts that combine routes inside the router.
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
     *
     * Only one virtual host with no authority (default match) can be specified.
     */
    virtualHosts: VirtualHost[];
    /** Route options for the HTTP router. */
    routeOptions?: RouteOptions;
}
export interface CreateHttpRouterRequest_LabelsEntry {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateHttpRouterMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata";
    /** ID of the HTTP router that is being created. */
    httpRouterId: string;
}
export interface ListHttpRouterOperationsRequest {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest";
    /**
     * ID of the HTTP router to get operations for.
     *
     * To get the HTTP router ID, use a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListHttpRouterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListHttpRouterOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListHttpRouterOperationsResponse {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse";
    /** List of operations for the specified HTTP router. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListHttpRouterOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListHttpRouterOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetHttpRouterRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest";
    encode(message: GetHttpRouterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetHttpRouterRequest;
    fromJSON(object: any): GetHttpRouterRequest;
    toJSON(message: GetHttpRouterRequest): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId">, never>>(object: I): GetHttpRouterRequest;
};
export declare const ListHttpRoutersRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest";
    encode(message: ListHttpRoutersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHttpRoutersRequest;
    fromJSON(object: any): ListHttpRoutersRequest;
    toJSON(message: ListHttpRoutersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListHttpRoutersRequest;
};
export declare const ListHttpRoutersResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse";
    encode(message: ListHttpRoutersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHttpRoutersResponse;
    fromJSON(object: any): ListHttpRoutersResponse;
    toJSON(message: ListHttpRoutersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        httpRouters?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
            virtualHosts?: {
                name?: string | undefined;
                authority?: string[] | undefined;
                routes?: {
                    name?: string | undefined;
                    http?: {
                        match?: {
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } | undefined;
                        route?: {
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } | undefined;
                        redirect?: {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } | undefined;
                        directResponse?: {
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    grpc?: {
                        match?: {
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        route?: {
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        statusResponse?: {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } | undefined;
                    } | undefined;
                    routeOptions?: {
                        modifyRequestHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        modifyResponseHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        rbac?: {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        securityProfileId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        httpRouters?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
            virtualHosts?: {
                name?: string | undefined;
                authority?: string[] | undefined;
                routes?: {
                    name?: string | undefined;
                    http?: {
                        match?: {
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } | undefined;
                        route?: {
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } | undefined;
                        redirect?: {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } | undefined;
                        directResponse?: {
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    grpc?: {
                        match?: {
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        route?: {
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        statusResponse?: {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } | undefined;
                    } | undefined;
                    routeOptions?: {
                        modifyRequestHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        modifyResponseHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        rbac?: {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        securityProfileId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
            virtualHosts?: {
                name?: string | undefined;
                authority?: string[] | undefined;
                routes?: {
                    name?: string | undefined;
                    http?: {
                        match?: {
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } | undefined;
                        route?: {
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } | undefined;
                        redirect?: {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } | undefined;
                        directResponse?: {
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    grpc?: {
                        match?: {
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        route?: {
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        statusResponse?: {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } | undefined;
                    } | undefined;
                    routeOptions?: {
                        modifyRequestHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        modifyResponseHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        rbac?: {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        securityProfileId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["httpRouters"][number]["labels"], string | number>, never>) | undefined;
            routeOptions?: ({
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } & {
                modifyRequestHeaders?: ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] & ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"]["modifyRequestHeaders"], "$type" | keyof {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[]>, never>) | undefined;
                modifyResponseHeaders?: ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] & ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"]["modifyResponseHeaders"], "$type" | keyof {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[]>, never>) | undefined;
                rbac?: ({
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: ({
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] & ({
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        andPrincipals?: ({
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] & ({
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        } & {
                            header?: ({
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } & {
                                name?: string | undefined;
                                value?: ({
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } & {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                            } & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"]["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"]["rbac"]["principals"], "$type" | keyof {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"]["rbac"], "$type" | "action" | "principals">, never>) | undefined;
                securityProfileId?: string | undefined;
            } & Record<Exclude<keyof I["httpRouters"][number]["routeOptions"], "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>) | undefined;
            virtualHosts?: ({
                name?: string | undefined;
                authority?: string[] | undefined;
                routes?: {
                    name?: string | undefined;
                    http?: {
                        match?: {
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } | undefined;
                        route?: {
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } | undefined;
                        redirect?: {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } | undefined;
                        directResponse?: {
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    grpc?: {
                        match?: {
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        route?: {
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        statusResponse?: {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } | undefined;
                    } | undefined;
                    routeOptions?: {
                        modifyRequestHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        modifyResponseHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        rbac?: {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        securityProfileId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                authority?: string[] | undefined;
                routes?: {
                    name?: string | undefined;
                    http?: {
                        match?: {
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } | undefined;
                        route?: {
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } | undefined;
                        redirect?: {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } | undefined;
                        directResponse?: {
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    grpc?: {
                        match?: {
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        route?: {
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        statusResponse?: {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } | undefined;
                    } | undefined;
                    routeOptions?: {
                        modifyRequestHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        modifyResponseHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        rbac?: {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        securityProfileId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                authority?: (string[] & string[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["authority"], "$type" | keyof string[]>, never>) | undefined;
                routes?: ({
                    name?: string | undefined;
                    http?: {
                        match?: {
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } | undefined;
                        route?: {
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } | undefined;
                        redirect?: {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } | undefined;
                        directResponse?: {
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    grpc?: {
                        match?: {
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        route?: {
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        statusResponse?: {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } | undefined;
                    } | undefined;
                    routeOptions?: {
                        modifyRequestHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        modifyResponseHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        rbac?: {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        securityProfileId?: string | undefined;
                    } | undefined;
                }[] & ({
                    name?: string | undefined;
                    http?: {
                        match?: {
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } | undefined;
                        route?: {
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } | undefined;
                        redirect?: {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } | undefined;
                        directResponse?: {
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    grpc?: {
                        match?: {
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        route?: {
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        statusResponse?: {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } | undefined;
                    } | undefined;
                    routeOptions?: {
                        modifyRequestHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        modifyResponseHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        rbac?: {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        securityProfileId?: string | undefined;
                    } | undefined;
                } & {
                    name?: string | undefined;
                    http?: ({
                        match?: {
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } | undefined;
                        route?: {
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } | undefined;
                        redirect?: {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } | undefined;
                        directResponse?: {
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } & {
                        match?: ({
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } & {
                            path?: ({
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } & {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["http"]["match"]["path"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                            httpMethod?: (string[] & string[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["http"]["match"]["httpMethod"], "$type" | keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["http"]["match"], "$type" | "path" | "httpMethod">, never>) | undefined;
                        route?: ({
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } & {
                            timeout?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["http"]["route"]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["http"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: (string[] & string[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["http"]["route"]["upgradeTypes"], "$type" | keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["http"]["route"], "$type" | "timeout" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "prefixRewrite" | "upgradeTypes">, never>) | undefined;
                        redirect?: ({
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } & {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["http"]["redirect"], "$type" | "replaceScheme" | "replaceHost" | "replacePort" | "replacePath" | "replacePrefix" | "removeQuery" | "responseCode">, never>) | undefined;
                        directResponse?: ({
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } & {
                            status?: number | undefined;
                            body?: ({
                                text?: string | undefined;
                            } & {
                                text?: string | undefined;
                            } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["http"]["directResponse"]["body"], "$type" | "text">, never>) | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["http"]["directResponse"], "$type" | "status" | "body">, never>) | undefined;
                    } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["http"], "$type" | "match" | "route" | "redirect" | "directResponse">, never>) | undefined;
                    grpc?: ({
                        match?: {
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        route?: {
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        statusResponse?: {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } | undefined;
                    } & {
                        match?: ({
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } & {
                            fqmn?: ({
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } & {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["grpc"]["match"]["fqmn"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["grpc"]["match"], "$type" | "fqmn">, never>) | undefined;
                        route?: ({
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } & {
                            backendGroupId?: string | undefined;
                            idleTimeout?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["grpc"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: ({
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["grpc"]["route"]["maxTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["grpc"]["route"], "$type" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "maxTimeout">, never>) | undefined;
                        statusResponse?: ({
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } & {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["grpc"]["statusResponse"], "$type" | "status">, never>) | undefined;
                    } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["grpc"], "$type" | "match" | "route" | "statusResponse">, never>) | undefined;
                    routeOptions?: ({
                        modifyRequestHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        modifyResponseHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        rbac?: {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        securityProfileId?: string | undefined;
                    } & {
                        modifyRequestHeaders?: ({
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] & ({
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        } & {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyRequestHeaders"], "$type" | keyof {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[]>, never>) | undefined;
                        modifyResponseHeaders?: ({
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] & ({
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        } & {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyResponseHeaders"], "$type" | keyof {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[]>, never>) | undefined;
                        rbac?: ({
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } & {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: ({
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] & ({
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            } & {
                                andPrincipals?: ({
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] & ({
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                } & {
                                    header?: ({
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } & {
                                        name?: string | undefined;
                                        value?: ({
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } & {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                                    } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"], "$type" | keyof {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"], "$type" | "action" | "principals">, never>) | undefined;
                        securityProfileId?: string | undefined;
                    } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number]["routeOptions"], "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>) | undefined;
                } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"][number], "$type" | "name" | "http" | "grpc" | "routeOptions">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routes"], "$type" | keyof {
                    name?: string | undefined;
                    http?: {
                        match?: {
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } | undefined;
                        route?: {
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } | undefined;
                        redirect?: {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } | undefined;
                        directResponse?: {
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    grpc?: {
                        match?: {
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        route?: {
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        statusResponse?: {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } | undefined;
                    } | undefined;
                    routeOptions?: {
                        modifyRequestHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        modifyResponseHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        rbac?: {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        securityProfileId?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                modifyRequestHeaders?: ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] & ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["modifyRequestHeaders"], "$type" | keyof {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[]>, never>) | undefined;
                modifyResponseHeaders?: ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] & ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["modifyResponseHeaders"], "$type" | keyof {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[]>, never>) | undefined;
                routeOptions?: ({
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } & {
                    modifyRequestHeaders?: ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] & ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"]["modifyRequestHeaders"], "$type" | keyof {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[]>, never>) | undefined;
                    modifyResponseHeaders?: ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] & ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"]["modifyResponseHeaders"], "$type" | keyof {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[]>, never>) | undefined;
                    rbac?: ({
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } & {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: ({
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] & ({
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        } & {
                            andPrincipals?: ({
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] & ({
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            } & {
                                header?: ({
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } & {
                                    name?: string | undefined;
                                    value?: ({
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } & {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                                } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"]["rbac"]["principals"], "$type" | keyof {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"]["rbac"], "$type" | "action" | "principals">, never>) | undefined;
                    securityProfileId?: string | undefined;
                } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number]["routeOptions"], "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>) | undefined;
            } & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"][number], "$type" | "name" | "authority" | "routes" | "modifyRequestHeaders" | "modifyResponseHeaders" | "routeOptions">, never>)[] & Record<Exclude<keyof I["httpRouters"][number]["virtualHosts"], "$type" | keyof {
                name?: string | undefined;
                authority?: string[] | undefined;
                routes?: {
                    name?: string | undefined;
                    http?: {
                        match?: {
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } | undefined;
                        route?: {
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } | undefined;
                        redirect?: {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } | undefined;
                        directResponse?: {
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    grpc?: {
                        match?: {
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        route?: {
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        statusResponse?: {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } | undefined;
                    } | undefined;
                    routeOptions?: {
                        modifyRequestHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        modifyResponseHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        rbac?: {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        securityProfileId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["httpRouters"][number], "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "routeOptions" | "virtualHosts">, never>)[] & Record<Exclude<keyof I["httpRouters"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
            virtualHosts?: {
                name?: string | undefined;
                authority?: string[] | undefined;
                routes?: {
                    name?: string | undefined;
                    http?: {
                        match?: {
                            path?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                            httpMethod?: string[] | undefined;
                        } | undefined;
                        route?: {
                            timeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            prefixRewrite?: string | undefined;
                            upgradeTypes?: string[] | undefined;
                        } | undefined;
                        redirect?: {
                            replaceScheme?: string | undefined;
                            replaceHost?: string | undefined;
                            replacePort?: number | undefined;
                            replacePath?: string | undefined;
                            replacePrefix?: string | undefined;
                            removeQuery?: boolean | undefined;
                            responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                        } | undefined;
                        directResponse?: {
                            status?: number | undefined;
                            body?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    grpc?: {
                        match?: {
                            fqmn?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        route?: {
                            backendGroupId?: string | undefined;
                            idleTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            hostRewrite?: string | undefined;
                            autoHostRewrite?: boolean | undefined;
                            maxTimeout?: {
                                seconds?: number | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                        } | undefined;
                        statusResponse?: {
                            status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                        } | undefined;
                    } | undefined;
                    routeOptions?: {
                        modifyRequestHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        modifyResponseHeaders?: {
                            replace?: string | undefined;
                            name?: string | undefined;
                            append?: string | undefined;
                            remove?: boolean | undefined;
                            rename?: string | undefined;
                        }[] | undefined;
                        rbac?: {
                            action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                            principals?: {
                                andPrincipals?: {
                                    header?: {
                                        name?: string | undefined;
                                        value?: {
                                            exactMatch?: string | undefined;
                                            prefixMatch?: string | undefined;
                                            regexMatch?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                    remoteIp?: string | undefined;
                                    any?: boolean | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        securityProfileId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "httpRouters">, never>>(object: I): ListHttpRoutersResponse;
};
export declare const DeleteHttpRouterRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest";
    encode(message: DeleteHttpRouterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteHttpRouterRequest;
    fromJSON(object: any): DeleteHttpRouterRequest;
    toJSON(message: DeleteHttpRouterRequest): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId">, never>>(object: I): DeleteHttpRouterRequest;
};
export declare const DeleteHttpRouterMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata";
    encode(message: DeleteHttpRouterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteHttpRouterMetadata;
    fromJSON(object: any): DeleteHttpRouterMetadata;
    toJSON(message: DeleteHttpRouterMetadata): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId">, never>>(object: I): DeleteHttpRouterMetadata;
};
export declare const UpdateHttpRouterRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest";
    encode(message: UpdateHttpRouterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHttpRouterRequest;
    fromJSON(object: any): UpdateHttpRouterRequest;
    toJSON(message: UpdateHttpRouterRequest): unknown;
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
        routeOptions?: {
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            rbac?: {
                action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                principals?: {
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            securityProfileId?: string | undefined;
        } | undefined;
        virtualHosts?: {
            name?: string | undefined;
            authority?: string[] | undefined;
            routes?: {
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
        }[] | undefined;
        httpRouterId?: string | undefined;
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
        routeOptions?: ({
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            rbac?: {
                action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                principals?: {
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            securityProfileId?: string | undefined;
        } & {
            modifyRequestHeaders?: ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] & ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & Record<Exclude<keyof I["routeOptions"]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["routeOptions"]["modifyRequestHeaders"], "$type" | keyof {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[]>, never>) | undefined;
            modifyResponseHeaders?: ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] & ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & Record<Exclude<keyof I["routeOptions"]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["routeOptions"]["modifyResponseHeaders"], "$type" | keyof {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[]>, never>) | undefined;
            rbac?: ({
                action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                principals?: {
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                principals?: ({
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                }[] & ({
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                } & {
                    andPrincipals?: ({
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] & ({
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    } & {
                        header?: ({
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } & {
                            name?: string | undefined;
                            value?: ({
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } & {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                        } & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    } & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"], "$type" | keyof {
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["routeOptions"]["rbac"], "$type" | "action" | "principals">, never>) | undefined;
            securityProfileId?: string | undefined;
        } & Record<Exclude<keyof I["routeOptions"], "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>) | undefined;
        virtualHosts?: ({
            name?: string | undefined;
            authority?: string[] | undefined;
            routes?: {
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            authority?: string[] | undefined;
            routes?: {
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            authority?: (string[] & string[] & Record<Exclude<keyof I["virtualHosts"][number]["authority"], "$type" | keyof string[]>, never>) | undefined;
            routes?: ({
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                http?: ({
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    match?: ({
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } & {
                        path?: ({
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } & {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["match"]["path"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                        httpMethod?: (string[] & string[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["match"]["httpMethod"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["match"], "$type" | "path" | "httpMethod">, never>) | undefined;
                    route?: ({
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } & {
                        timeout?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["route"]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: (string[] & string[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["route"]["upgradeTypes"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["route"], "$type" | "timeout" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "prefixRewrite" | "upgradeTypes">, never>) | undefined;
                    redirect?: ({
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } & {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["redirect"], "$type" | "replaceScheme" | "replaceHost" | "replacePort" | "replacePath" | "replacePrefix" | "removeQuery" | "responseCode">, never>) | undefined;
                    directResponse?: ({
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } & {
                        status?: number | undefined;
                        body?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["directResponse"]["body"], "$type" | "text">, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["directResponse"], "$type" | "status" | "body">, never>) | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"], "$type" | "match" | "route" | "redirect" | "directResponse">, never>) | undefined;
                grpc?: ({
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } & {
                    match?: ({
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } & {
                        fqmn?: ({
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } & {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["match"]["fqmn"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["match"], "$type" | "fqmn">, never>) | undefined;
                    route?: ({
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        backendGroupId?: string | undefined;
                        idleTimeout?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["route"]["maxTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["route"], "$type" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "maxTimeout">, never>) | undefined;
                    statusResponse?: ({
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } & {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["statusResponse"], "$type" | "status">, never>) | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"], "$type" | "match" | "route" | "statusResponse">, never>) | undefined;
                routeOptions?: ({
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } & {
                    modifyRequestHeaders?: ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] & ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyRequestHeaders"], "$type" | keyof {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[]>, never>) | undefined;
                    modifyResponseHeaders?: ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] & ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyResponseHeaders"], "$type" | keyof {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[]>, never>) | undefined;
                    rbac?: ({
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } & {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: ({
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] & ({
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        } & {
                            andPrincipals?: ({
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] & ({
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            } & {
                                header?: ({
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } & {
                                    name?: string | undefined;
                                    value?: ({
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } & {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                                } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"], "$type" | keyof {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"], "$type" | "action" | "principals">, never>) | undefined;
                    securityProfileId?: string | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"], "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>) | undefined;
            } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number], "$type" | "name" | "http" | "grpc" | "routeOptions">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"], "$type" | keyof {
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            modifyRequestHeaders?: ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] & ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & Record<Exclude<keyof I["virtualHosts"][number]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["modifyRequestHeaders"], "$type" | keyof {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[]>, never>) | undefined;
            modifyResponseHeaders?: ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] & ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & Record<Exclude<keyof I["virtualHosts"][number]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["modifyResponseHeaders"], "$type" | keyof {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[]>, never>) | undefined;
            routeOptions?: ({
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } & {
                modifyRequestHeaders?: ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] & ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["modifyRequestHeaders"], "$type" | keyof {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[]>, never>) | undefined;
                modifyResponseHeaders?: ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] & ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["modifyResponseHeaders"], "$type" | keyof {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[]>, never>) | undefined;
                rbac?: ({
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: ({
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] & ({
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        andPrincipals?: ({
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] & ({
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        } & {
                            header?: ({
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } & {
                                name?: string | undefined;
                                value?: ({
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } & {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                            } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"], "$type" | keyof {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"], "$type" | "action" | "principals">, never>) | undefined;
                securityProfileId?: string | undefined;
            } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"], "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>) | undefined;
        } & Record<Exclude<keyof I["virtualHosts"][number], "$type" | "name" | "authority" | "routes" | "modifyRequestHeaders" | "modifyResponseHeaders" | "routeOptions">, never>)[] & Record<Exclude<keyof I["virtualHosts"], "$type" | keyof {
            name?: string | undefined;
            authority?: string[] | undefined;
            routes?: {
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        httpRouterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "routeOptions" | "virtualHosts" | "httpRouterId">, never>>(object: I): UpdateHttpRouterRequest;
};
export declare const UpdateHttpRouterRequest_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry";
    encode(message: UpdateHttpRouterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHttpRouterRequest_LabelsEntry;
    fromJSON(object: any): UpdateHttpRouterRequest_LabelsEntry;
    toJSON(message: UpdateHttpRouterRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateHttpRouterRequest_LabelsEntry;
};
export declare const UpdateHttpRouterMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata";
    encode(message: UpdateHttpRouterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHttpRouterMetadata;
    fromJSON(object: any): UpdateHttpRouterMetadata;
    toJSON(message: UpdateHttpRouterMetadata): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId">, never>>(object: I): UpdateHttpRouterMetadata;
};
export declare const CreateHttpRouterRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest";
    encode(message: CreateHttpRouterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHttpRouterRequest;
    fromJSON(object: any): CreateHttpRouterRequest;
    toJSON(message: CreateHttpRouterRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        routeOptions?: {
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            rbac?: {
                action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                principals?: {
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            securityProfileId?: string | undefined;
        } | undefined;
        virtualHosts?: {
            name?: string | undefined;
            authority?: string[] | undefined;
            routes?: {
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
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
        routeOptions?: ({
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            rbac?: {
                action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                principals?: {
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            securityProfileId?: string | undefined;
        } & {
            modifyRequestHeaders?: ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] & ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & Record<Exclude<keyof I["routeOptions"]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["routeOptions"]["modifyRequestHeaders"], "$type" | keyof {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[]>, never>) | undefined;
            modifyResponseHeaders?: ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] & ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & Record<Exclude<keyof I["routeOptions"]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["routeOptions"]["modifyResponseHeaders"], "$type" | keyof {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[]>, never>) | undefined;
            rbac?: ({
                action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                principals?: {
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                principals?: ({
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                }[] & ({
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                } & {
                    andPrincipals?: ({
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] & ({
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    } & {
                        header?: ({
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } & {
                            name?: string | undefined;
                            value?: ({
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } & {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                        } & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    } & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["routeOptions"]["rbac"]["principals"], "$type" | keyof {
                    andPrincipals?: {
                        header?: {
                            name?: string | undefined;
                            value?: {
                                exactMatch?: string | undefined;
                                prefixMatch?: string | undefined;
                                regexMatch?: string | undefined;
                            } | undefined;
                        } | undefined;
                        remoteIp?: string | undefined;
                        any?: boolean | undefined;
                    }[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["routeOptions"]["rbac"], "$type" | "action" | "principals">, never>) | undefined;
            securityProfileId?: string | undefined;
        } & Record<Exclude<keyof I["routeOptions"], "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>) | undefined;
        virtualHosts?: ({
            name?: string | undefined;
            authority?: string[] | undefined;
            routes?: {
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            authority?: string[] | undefined;
            routes?: {
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            authority?: (string[] & string[] & Record<Exclude<keyof I["virtualHosts"][number]["authority"], "$type" | keyof string[]>, never>) | undefined;
            routes?: ({
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                http?: ({
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    match?: ({
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } & {
                        path?: ({
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } & {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["match"]["path"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                        httpMethod?: (string[] & string[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["match"]["httpMethod"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["match"], "$type" | "path" | "httpMethod">, never>) | undefined;
                    route?: ({
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } & {
                        timeout?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["route"]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: (string[] & string[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["route"]["upgradeTypes"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["route"], "$type" | "timeout" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "prefixRewrite" | "upgradeTypes">, never>) | undefined;
                    redirect?: ({
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } & {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["redirect"], "$type" | "replaceScheme" | "replaceHost" | "replacePort" | "replacePath" | "replacePrefix" | "removeQuery" | "responseCode">, never>) | undefined;
                    directResponse?: ({
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } & {
                        status?: number | undefined;
                        body?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["directResponse"]["body"], "$type" | "text">, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"]["directResponse"], "$type" | "status" | "body">, never>) | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["http"], "$type" | "match" | "route" | "redirect" | "directResponse">, never>) | undefined;
                grpc?: ({
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } & {
                    match?: ({
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } & {
                        fqmn?: ({
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } & {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["match"]["fqmn"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["match"], "$type" | "fqmn">, never>) | undefined;
                    route?: ({
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        backendGroupId?: string | undefined;
                        idleTimeout?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["route"]["maxTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["route"], "$type" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "maxTimeout">, never>) | undefined;
                    statusResponse?: ({
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } & {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"]["statusResponse"], "$type" | "status">, never>) | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["grpc"], "$type" | "match" | "route" | "statusResponse">, never>) | undefined;
                routeOptions?: ({
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } & {
                    modifyRequestHeaders?: ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] & ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyRequestHeaders"], "$type" | keyof {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[]>, never>) | undefined;
                    modifyResponseHeaders?: ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] & ({
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["modifyResponseHeaders"], "$type" | keyof {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[]>, never>) | undefined;
                    rbac?: ({
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } & {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: ({
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] & ({
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        } & {
                            andPrincipals?: ({
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] & ({
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            } & {
                                header?: ({
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } & {
                                    name?: string | undefined;
                                    value?: ({
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } & {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                                } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"]["principals"], "$type" | keyof {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"]["rbac"], "$type" | "action" | "principals">, never>) | undefined;
                    securityProfileId?: string | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number]["routeOptions"], "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>) | undefined;
            } & Record<Exclude<keyof I["virtualHosts"][number]["routes"][number], "$type" | "name" | "http" | "grpc" | "routeOptions">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routes"], "$type" | keyof {
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            modifyRequestHeaders?: ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] & ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & Record<Exclude<keyof I["virtualHosts"][number]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["modifyRequestHeaders"], "$type" | keyof {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[]>, never>) | undefined;
            modifyResponseHeaders?: ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] & ({
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            } & Record<Exclude<keyof I["virtualHosts"][number]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["modifyResponseHeaders"], "$type" | keyof {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[]>, never>) | undefined;
            routeOptions?: ({
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } & {
                modifyRequestHeaders?: ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] & ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["modifyRequestHeaders"], "$type" | keyof {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[]>, never>) | undefined;
                modifyResponseHeaders?: ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] & ({
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["modifyResponseHeaders"], "$type" | keyof {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[]>, never>) | undefined;
                rbac?: ({
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: ({
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] & ({
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        andPrincipals?: ({
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] & ({
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        } & {
                            header?: ({
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } & {
                                name?: string | undefined;
                                value?: ({
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } & {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                            } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"]["principals"], "$type" | keyof {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"]["rbac"], "$type" | "action" | "principals">, never>) | undefined;
                securityProfileId?: string | undefined;
            } & Record<Exclude<keyof I["virtualHosts"][number]["routeOptions"], "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>) | undefined;
        } & Record<Exclude<keyof I["virtualHosts"][number], "$type" | "name" | "authority" | "routes" | "modifyRequestHeaders" | "modifyResponseHeaders" | "routeOptions">, never>)[] & Record<Exclude<keyof I["virtualHosts"], "$type" | keyof {
            name?: string | undefined;
            authority?: string[] | undefined;
            routes?: {
                name?: string | undefined;
                http?: {
                    match?: {
                        path?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                        httpMethod?: string[] | undefined;
                    } | undefined;
                    route?: {
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        prefixRewrite?: string | undefined;
                        upgradeTypes?: string[] | undefined;
                    } | undefined;
                    redirect?: {
                        replaceScheme?: string | undefined;
                        replaceHost?: string | undefined;
                        replacePort?: number | undefined;
                        replacePath?: string | undefined;
                        replacePrefix?: string | undefined;
                        removeQuery?: boolean | undefined;
                        responseCode?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RedirectAction_RedirectResponseCode | undefined;
                    } | undefined;
                    directResponse?: {
                        status?: number | undefined;
                        body?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                grpc?: {
                    match?: {
                        fqmn?: {
                            exactMatch?: string | undefined;
                            prefixMatch?: string | undefined;
                            regexMatch?: string | undefined;
                        } | undefined;
                    } | undefined;
                    route?: {
                        backendGroupId?: string | undefined;
                        idleTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        hostRewrite?: string | undefined;
                        autoHostRewrite?: boolean | undefined;
                        maxTimeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    statusResponse?: {
                        status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                    } | undefined;
                } | undefined;
                routeOptions?: {
                    modifyRequestHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    modifyResponseHeaders?: {
                        replace?: string | undefined;
                        name?: string | undefined;
                        append?: string | undefined;
                        remove?: boolean | undefined;
                        rename?: string | undefined;
                    }[] | undefined;
                    rbac?: {
                        action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                        principals?: {
                            andPrincipals?: {
                                header?: {
                                    name?: string | undefined;
                                    value?: {
                                        exactMatch?: string | undefined;
                                        prefixMatch?: string | undefined;
                                        regexMatch?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                remoteIp?: string | undefined;
                                any?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    securityProfileId?: string | undefined;
                } | undefined;
            }[] | undefined;
            modifyRequestHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            modifyResponseHeaders?: {
                replace?: string | undefined;
                name?: string | undefined;
                append?: string | undefined;
                remove?: boolean | undefined;
                rename?: string | undefined;
            }[] | undefined;
            routeOptions?: {
                modifyRequestHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                modifyResponseHeaders?: {
                    replace?: string | undefined;
                    name?: string | undefined;
                    append?: string | undefined;
                    remove?: boolean | undefined;
                    rename?: string | undefined;
                }[] | undefined;
                rbac?: {
                    action?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").RBAC_Action | undefined;
                    principals?: {
                        andPrincipals?: {
                            header?: {
                                name?: string | undefined;
                                value?: {
                                    exactMatch?: string | undefined;
                                    prefixMatch?: string | undefined;
                                    regexMatch?: string | undefined;
                                } | undefined;
                            } | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                securityProfileId?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "routeOptions" | "virtualHosts">, never>>(object: I): CreateHttpRouterRequest;
};
export declare const CreateHttpRouterRequest_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry";
    encode(message: CreateHttpRouterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHttpRouterRequest_LabelsEntry;
    fromJSON(object: any): CreateHttpRouterRequest_LabelsEntry;
    toJSON(message: CreateHttpRouterRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateHttpRouterRequest_LabelsEntry;
};
export declare const CreateHttpRouterMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata";
    encode(message: CreateHttpRouterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHttpRouterMetadata;
    fromJSON(object: any): CreateHttpRouterMetadata;
    toJSON(message: CreateHttpRouterMetadata): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId">, never>>(object: I): CreateHttpRouterMetadata;
};
export declare const ListHttpRouterOperationsRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest";
    encode(message: ListHttpRouterOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHttpRouterOperationsRequest;
    fromJSON(object: any): ListHttpRouterOperationsRequest;
    toJSON(message: ListHttpRouterOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        httpRouterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        httpRouterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "httpRouterId">, never>>(object: I): ListHttpRouterOperationsRequest;
};
export declare const ListHttpRouterOperationsResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse";
    encode(message: ListHttpRouterOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHttpRouterOperationsResponse;
    fromJSON(object: any): ListHttpRouterOperationsResponse;
    toJSON(message: ListHttpRouterOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListHttpRouterOperationsResponse;
};
/** A set of methods for managing HTTP routers. */
export declare const HttpRouterServiceService: {
    /**
     * Returns the specified HTTP router.
     *
     * To get the list of all available HTTP routers, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetHttpRouterRequest;
        readonly responseSerialize: (value: HttpRouter) => Buffer;
        readonly responseDeserialize: (value: Buffer) => HttpRouter;
    };
    /** Lists HTTP routers in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHttpRoutersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHttpRoutersRequest;
        readonly responseSerialize: (value: ListHttpRoutersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHttpRoutersResponse;
    };
    /** Creates an HTTP router in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateHttpRouterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified HTTP router. */
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateHttpRouterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified HTTP router. */
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteHttpRouterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified HTTP router. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHttpRouterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHttpRouterOperationsRequest;
        readonly responseSerialize: (value: ListHttpRouterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHttpRouterOperationsResponse;
    };
};
export interface HttpRouterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified HTTP router.
     *
     * To get the list of all available HTTP routers, make a [List] request.
     */
    get: handleUnaryCall<GetHttpRouterRequest, HttpRouter>;
    /** Lists HTTP routers in the specified folder. */
    list: handleUnaryCall<ListHttpRoutersRequest, ListHttpRoutersResponse>;
    /** Creates an HTTP router in the specified folder. */
    create: handleUnaryCall<CreateHttpRouterRequest, Operation>;
    /** Updates the specified HTTP router. */
    update: handleUnaryCall<UpdateHttpRouterRequest, Operation>;
    /** Deletes the specified HTTP router. */
    delete: handleUnaryCall<DeleteHttpRouterRequest, Operation>;
    /** Lists operations for the specified HTTP router. */
    listOperations: handleUnaryCall<ListHttpRouterOperationsRequest, ListHttpRouterOperationsResponse>;
}
export interface HttpRouterServiceClient extends Client {
    /**
     * Returns the specified HTTP router.
     *
     * To get the list of all available HTTP routers, make a [List] request.
     */
    get(request: GetHttpRouterRequest, callback: (error: ServiceError | null, response: HttpRouter) => void): ClientUnaryCall;
    get(request: GetHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: HttpRouter) => void): ClientUnaryCall;
    get(request: GetHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: HttpRouter) => void): ClientUnaryCall;
    /** Lists HTTP routers in the specified folder. */
    list(request: ListHttpRoutersRequest, callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void): ClientUnaryCall;
    list(request: ListHttpRoutersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void): ClientUnaryCall;
    list(request: ListHttpRoutersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void): ClientUnaryCall;
    /** Creates an HTTP router in the specified folder. */
    create(request: CreateHttpRouterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified HTTP router. */
    update(request: UpdateHttpRouterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified HTTP router. */
    delete(request: DeleteHttpRouterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified HTTP router. */
    listOperations(request: ListHttpRouterOperationsRequest, callback: (error: ServiceError | null, response: ListHttpRouterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListHttpRouterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHttpRouterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListHttpRouterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHttpRouterOperationsResponse) => void): ClientUnaryCall;
}
export declare const HttpRouterServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): HttpRouterServiceClient;
    service: typeof HttpRouterServiceService;
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
