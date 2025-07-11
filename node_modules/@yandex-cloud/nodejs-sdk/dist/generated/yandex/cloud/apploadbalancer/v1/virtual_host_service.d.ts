/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { RouteOptions, VirtualHost, Route, HeaderModification, HttpRoute, GrpcRoute } from "../../../../yandex/cloud/apploadbalancer/v1/virtual_host";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetVirtualHostRequest {
    $type: "yandex.cloud.apploadbalancer.v1.GetVirtualHostRequest";
    /**
     * ID of the HTTP router that the virtual host belongs to.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * Name of the virtual host to return.
     *
     * To get the virtual host name, make a [VirtualHostService.List] request.
     */
    virtualHostName: string;
}
export interface ListVirtualHostsRequest {
    $type: "yandex.cloud.apploadbalancer.v1.ListVirtualHostsRequest";
    /**
     * ID of the HTTP router to list virtual hosts in.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListVirtualHostsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListVirtualHostsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListVirtualHostsResponse {
    $type: "yandex.cloud.apploadbalancer.v1.ListVirtualHostsResponse";
    /** List of virtual hosts of the specified HTTP router. */
    virtualHosts: VirtualHost[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListVirtualHostsRequest.page_size], use `next_page_token` as the value
     * for the [ListVirtualHostsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateVirtualHostRequest {
    $type: "yandex.cloud.apploadbalancer.v1.CreateVirtualHostRequest";
    /**
     * ID of the HTTP router to create a virtual host in.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /** Name of the virtual host. The name must be unique within the HTTP router and cannot be changed after creation. */
    name: string;
    /**
     * List of domains that are attributed to the virtual host.
     *
     * The host is selected to process the request received by the load balancer
     * if the domain specified in the HTTP/1.1 `Host` header or the HTTP/2 `:authority` pseudo-header matches a domain
     * specified in the host.
     *
     * A wildcard asterisk character (`*`) matches 0 or more characters.
     *
     * If not specified, all domains are attributed to the host, which is the same as specifying a `*` value.
     * An HTTP router must not contain more than one virtual host to which all domains are attributed.
     */
    authority: string[];
    /**
     * Routes of the virtual host.
     *
     * A route contains a set of conditions (predicates) that are used by the load balancer to select the route
     * for the request and an action on the request.
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#routes).
     *
     * The order of routes matters: the first route whose predicate matches the request is selected.
     * The most specific routes should be at the top of the list, so that they are not overridden.
     * For example, if the first HTTP route is configured, via [HttpRoute.match], to match paths prefixed with just `/`,
     * other routes are never matched.
     */
    routes: Route[];
    /** Modifications that are made to the headers of incoming HTTP requests before they are forwarded to backends. */
    modifyRequestHeaders: HeaderModification[];
    /**
     * Modifications that are made to the headers of HTTP responses received from backends
     * before responses are forwarded to clients.
     */
    modifyResponseHeaders: HeaderModification[];
    /** Route options for the virtual host. */
    routeOptions?: RouteOptions;
}
export interface CreateVirtualHostMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.CreateVirtualHostMetadata";
    /** ID of the HTTP router that the virtual host is being created in. */
    httpRouterId: string;
    /** Name of the virtual host that is being created. */
    virtualHostName: string;
}
export interface UpdateVirtualHostRequest {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateVirtualHostRequest";
    /**
     * ID of the HTTP router to update a virtual host in.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * Name of the virtual host.
     *
     * Used only to refer to the virtual host. The name of a host cannot be changed.
     *
     * To get the virtual host name, make a [VirtualHostService.List] request.
     */
    virtualHostName: string;
    /** Field mask that specifies which attributes of the virtual host should be updated. */
    updateMask?: FieldMask;
    /**
     * New list of domains to attribute to the virtual host.
     *
     * The host is selected to process the request received by the load balancer
     * if the domain specified in the HTTP/1.1 `Host` header or the HTTP/2 `:authority` pseudo-header matches a domain
     * specified in the host.
     *
     * A wildcard asterisk character (`*`) matches 0 or more characters.
     *
     * Existing list of domains is completely replaced by the specified list.
     *
     * If not specified, all domains are attributed to the host, which is the same as specifying a `*` value.
     * An HTTP router must not contain more than one virtual host to which all domains are attributed.
     */
    authority: string[];
    /**
     * New list of routes of the virtual host.
     *
     * A route contains a set of conditions (predicates) that are used by the load balancer to select the route
     * for the request and an action on the request.
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#routes).
     *
     * The order of routes matters: the first route whose predicate matches the request is selected.
     * The most specific routes should be at the top of the list, so that they are not overridden.
     * For example, if the first HTTP route is configured, via [HttpRoute.match], to match paths prefixed with just `/`,
     * other routes are never matched.
     *
     * Existing list of routes is completely replaced by the specified list, so if you just want to remove a route,
     * make a [VirtualHostService.RemoveRoute] request.
     */
    routes: Route[];
    /**
     * New list of modifications that are made to the headers of incoming HTTP requests
     * before they are forwarded to backends.
     *
     * Existing list of modifications is completely replaced by the specified list.
     */
    modifyRequestHeaders: HeaderModification[];
    /**
     * New list of modifications that are made to the headers of HTTP responses received from backends
     * before responses are forwarded to clients.
     *
     * Existing list of modifications is completely replaced by the specified list.
     */
    modifyResponseHeaders: HeaderModification[];
    /** New route options for the virtual host. */
    routeOptions?: RouteOptions;
}
export interface UpdateVirtualHostMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateVirtualHostMetadata";
    /** ID of the HTTP router that the virtual host is being updated in. */
    httpRouterId: string;
    /** Name of the virtual host that is being updated. */
    virtualHostName: string;
}
export interface DeleteVirtualHostRequest {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteVirtualHostRequest";
    /**
     * ID of the HTTP router to delete a virtual host from.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * Name of the virtual host to delete.
     *
     * To get the virtual host name, make a [VirtualHostService.List] request.
     */
    virtualHostName: string;
}
export interface DeleteVirtualHostMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteVirtualHostMetadata";
    /** ID of the HTTP router that the virtual host is being deleted from. */
    httpRouterId: string;
    /** Name of the virtual host that is being deleted. */
    virtualHostName: string;
}
export interface RemoveRouteRequest {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveRouteRequest";
    /**
     * ID of the HTTP router to delete a route from.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * Name of the virtual host to delete a route from.
     *
     * To get the virtual host name, make a [VirtualHostService.List] request.
     */
    virtualHostName: string;
    /**
     * Name of the route to delete.
     *
     * To get the route name, make a [VirtualHostService.Get] request.
     */
    routeName: string;
}
export interface RemoveRouteMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveRouteMetadata";
    /** ID of the HTTP router that the route is being deleted from. */
    httpRouterId: string;
    /** Name of the virtual host that the route is being deleted from. */
    virtualHostName: string;
    /** Name of the route that is being deleted. */
    routeName: string;
}
export interface UpdateRouteRequest {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateRouteRequest";
    /**
     * ID of the HTTP router to update a route in.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * Name of the virtual host to update a route in.
     *
     * To get the virtual host name, make a [VirtualHostService.List] request.
     */
    virtualHostName: string;
    /**
     * Name of the route to update.
     *
     * To get the route name, make a [VirtualHostService.Get] request.
     */
    routeName: string;
    /** Field mask that specifies which attributes of the route should be updated. */
    updateMask?: FieldMask;
    /** New settings of the HTTP route. */
    http?: HttpRoute | undefined;
    /** New settings of the gRPC route. */
    grpc?: GrpcRoute | undefined;
    /** New route options for the route. */
    routeOptions?: RouteOptions;
}
export interface UpdateRouteMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateRouteMetadata";
    /** ID of the HTTP router that the route is being updated in. */
    httpRouterId: string;
    /** Name of the virtual host that the route is being updated in. */
    virtualHostName: string;
    /** Name of the route that is being updated. */
    routeName: string;
}
export declare const GetVirtualHostRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.GetVirtualHostRequest";
    encode(message: GetVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetVirtualHostRequest;
    fromJSON(object: any): GetVirtualHostRequest;
    toJSON(message: GetVirtualHostRequest): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId" | "virtualHostName">, never>>(object: I): GetVirtualHostRequest;
};
export declare const ListVirtualHostsRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.ListVirtualHostsRequest";
    encode(message: ListVirtualHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVirtualHostsRequest;
    fromJSON(object: any): ListVirtualHostsRequest;
    toJSON(message: ListVirtualHostsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        httpRouterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        httpRouterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "httpRouterId">, never>>(object: I): ListVirtualHostsRequest;
};
export declare const ListVirtualHostsResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.ListVirtualHostsResponse";
    encode(message: ListVirtualHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVirtualHostsResponse;
    fromJSON(object: any): ListVirtualHostsResponse;
    toJSON(message: ListVirtualHostsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
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
        nextPageToken?: string | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "virtualHosts">, never>>(object: I): ListVirtualHostsResponse;
};
export declare const CreateVirtualHostRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateVirtualHostRequest";
    encode(message: CreateVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateVirtualHostRequest;
    fromJSON(object: any): CreateVirtualHostRequest;
    toJSON(message: CreateVirtualHostRequest): unknown;
    fromPartial<I extends {
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
        httpRouterId?: string | undefined;
    } & {
        name?: string | undefined;
        authority?: (string[] & string[] & Record<Exclude<keyof I["authority"], "$type" | keyof string[]>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["routes"][number]["http"]["match"]["path"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                    httpMethod?: (string[] & string[] & Record<Exclude<keyof I["routes"][number]["http"]["match"]["httpMethod"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["routes"][number]["http"]["match"], "$type" | "path" | "httpMethod">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["routes"][number]["http"]["route"]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    backendGroupId?: string | undefined;
                    idleTimeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["routes"][number]["http"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    hostRewrite?: string | undefined;
                    autoHostRewrite?: boolean | undefined;
                    prefixRewrite?: string | undefined;
                    upgradeTypes?: (string[] & string[] & Record<Exclude<keyof I["routes"][number]["http"]["route"]["upgradeTypes"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["routes"][number]["http"]["route"], "$type" | "timeout" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "prefixRewrite" | "upgradeTypes">, never>) | undefined;
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
                } & Record<Exclude<keyof I["routes"][number]["http"]["redirect"], "$type" | "replaceScheme" | "replaceHost" | "replacePort" | "replacePath" | "replacePrefix" | "removeQuery" | "responseCode">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["routes"][number]["http"]["directResponse"]["body"], "$type" | "text">, never>) | undefined;
                } & Record<Exclude<keyof I["routes"][number]["http"]["directResponse"], "$type" | "status" | "body">, never>) | undefined;
            } & Record<Exclude<keyof I["routes"][number]["http"], "$type" | "match" | "route" | "redirect" | "directResponse">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["routes"][number]["grpc"]["match"]["fqmn"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                } & Record<Exclude<keyof I["routes"][number]["grpc"]["match"], "$type" | "fqmn">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["routes"][number]["grpc"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    hostRewrite?: string | undefined;
                    autoHostRewrite?: boolean | undefined;
                    maxTimeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["routes"][number]["grpc"]["route"]["maxTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["routes"][number]["grpc"]["route"], "$type" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "maxTimeout">, never>) | undefined;
                statusResponse?: ({
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                } & {
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                } & Record<Exclude<keyof I["routes"][number]["grpc"]["statusResponse"], "$type" | "status">, never>) | undefined;
            } & Record<Exclude<keyof I["routes"][number]["grpc"], "$type" | "match" | "route" | "statusResponse">, never>) | undefined;
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
                } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["routes"][number]["routeOptions"]["modifyRequestHeaders"], "$type" | keyof {
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
                } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["routes"][number]["routeOptions"]["modifyResponseHeaders"], "$type" | keyof {
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
                                } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                            } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
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
                    } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"], "$type" | keyof {
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
                } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"], "$type" | "action" | "principals">, never>) | undefined;
                securityProfileId?: string | undefined;
            } & Record<Exclude<keyof I["routes"][number]["routeOptions"], "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>) | undefined;
        } & Record<Exclude<keyof I["routes"][number], "$type" | "name" | "http" | "grpc" | "routeOptions">, never>)[] & Record<Exclude<keyof I["routes"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["modifyRequestHeaders"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["modifyResponseHeaders"], "$type" | keyof {
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
        httpRouterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "authority" | "routes" | "modifyRequestHeaders" | "modifyResponseHeaders" | "routeOptions" | "httpRouterId">, never>>(object: I): CreateVirtualHostRequest;
};
export declare const CreateVirtualHostMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateVirtualHostMetadata";
    encode(message: CreateVirtualHostMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateVirtualHostMetadata;
    fromJSON(object: any): CreateVirtualHostMetadata;
    toJSON(message: CreateVirtualHostMetadata): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId" | "virtualHostName">, never>>(object: I): CreateVirtualHostMetadata;
};
export declare const UpdateVirtualHostRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateVirtualHostRequest";
    encode(message: UpdateVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateVirtualHostRequest;
    fromJSON(object: any): UpdateVirtualHostRequest;
    toJSON(message: UpdateVirtualHostRequest): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
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
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        authority?: (string[] & string[] & Record<Exclude<keyof I["authority"], "$type" | keyof string[]>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["routes"][number]["http"]["match"]["path"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                    httpMethod?: (string[] & string[] & Record<Exclude<keyof I["routes"][number]["http"]["match"]["httpMethod"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["routes"][number]["http"]["match"], "$type" | "path" | "httpMethod">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["routes"][number]["http"]["route"]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    backendGroupId?: string | undefined;
                    idleTimeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["routes"][number]["http"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    hostRewrite?: string | undefined;
                    autoHostRewrite?: boolean | undefined;
                    prefixRewrite?: string | undefined;
                    upgradeTypes?: (string[] & string[] & Record<Exclude<keyof I["routes"][number]["http"]["route"]["upgradeTypes"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["routes"][number]["http"]["route"], "$type" | "timeout" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "prefixRewrite" | "upgradeTypes">, never>) | undefined;
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
                } & Record<Exclude<keyof I["routes"][number]["http"]["redirect"], "$type" | "replaceScheme" | "replaceHost" | "replacePort" | "replacePath" | "replacePrefix" | "removeQuery" | "responseCode">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["routes"][number]["http"]["directResponse"]["body"], "$type" | "text">, never>) | undefined;
                } & Record<Exclude<keyof I["routes"][number]["http"]["directResponse"], "$type" | "status" | "body">, never>) | undefined;
            } & Record<Exclude<keyof I["routes"][number]["http"], "$type" | "match" | "route" | "redirect" | "directResponse">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["routes"][number]["grpc"]["match"]["fqmn"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                } & Record<Exclude<keyof I["routes"][number]["grpc"]["match"], "$type" | "fqmn">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["routes"][number]["grpc"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    hostRewrite?: string | undefined;
                    autoHostRewrite?: boolean | undefined;
                    maxTimeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["routes"][number]["grpc"]["route"]["maxTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["routes"][number]["grpc"]["route"], "$type" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "maxTimeout">, never>) | undefined;
                statusResponse?: ({
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                } & {
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
                } & Record<Exclude<keyof I["routes"][number]["grpc"]["statusResponse"], "$type" | "status">, never>) | undefined;
            } & Record<Exclude<keyof I["routes"][number]["grpc"], "$type" | "match" | "route" | "statusResponse">, never>) | undefined;
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
                } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["routes"][number]["routeOptions"]["modifyRequestHeaders"], "$type" | keyof {
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
                } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["routes"][number]["routeOptions"]["modifyResponseHeaders"], "$type" | keyof {
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
                                } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                            } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                            remoteIp?: string | undefined;
                            any?: boolean | undefined;
                        } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
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
                    } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"]["principals"], "$type" | keyof {
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
                } & Record<Exclude<keyof I["routes"][number]["routeOptions"]["rbac"], "$type" | "action" | "principals">, never>) | undefined;
                securityProfileId?: string | undefined;
            } & Record<Exclude<keyof I["routes"][number]["routeOptions"], "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>) | undefined;
        } & Record<Exclude<keyof I["routes"][number], "$type" | "name" | "http" | "grpc" | "routeOptions">, never>)[] & Record<Exclude<keyof I["routes"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["modifyRequestHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["modifyRequestHeaders"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["modifyResponseHeaders"][number], "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>)[] & Record<Exclude<keyof I["modifyResponseHeaders"], "$type" | keyof {
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
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "authority" | "routes" | "modifyRequestHeaders" | "modifyResponseHeaders" | "routeOptions" | "httpRouterId" | "virtualHostName">, never>>(object: I): UpdateVirtualHostRequest;
};
export declare const UpdateVirtualHostMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateVirtualHostMetadata";
    encode(message: UpdateVirtualHostMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateVirtualHostMetadata;
    fromJSON(object: any): UpdateVirtualHostMetadata;
    toJSON(message: UpdateVirtualHostMetadata): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId" | "virtualHostName">, never>>(object: I): UpdateVirtualHostMetadata;
};
export declare const DeleteVirtualHostRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteVirtualHostRequest";
    encode(message: DeleteVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteVirtualHostRequest;
    fromJSON(object: any): DeleteVirtualHostRequest;
    toJSON(message: DeleteVirtualHostRequest): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId" | "virtualHostName">, never>>(object: I): DeleteVirtualHostRequest;
};
export declare const DeleteVirtualHostMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteVirtualHostMetadata";
    encode(message: DeleteVirtualHostMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteVirtualHostMetadata;
    fromJSON(object: any): DeleteVirtualHostMetadata;
    toJSON(message: DeleteVirtualHostMetadata): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId" | "virtualHostName">, never>>(object: I): DeleteVirtualHostMetadata;
};
export declare const RemoveRouteRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveRouteRequest";
    encode(message: RemoveRouteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveRouteRequest;
    fromJSON(object: any): RemoveRouteRequest;
    toJSON(message: RemoveRouteRequest): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
        routeName?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
        routeName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId" | "virtualHostName" | "routeName">, never>>(object: I): RemoveRouteRequest;
};
export declare const RemoveRouteMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveRouteMetadata";
    encode(message: RemoveRouteMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveRouteMetadata;
    fromJSON(object: any): RemoveRouteMetadata;
    toJSON(message: RemoveRouteMetadata): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
        routeName?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
        routeName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId" | "virtualHostName" | "routeName">, never>>(object: I): RemoveRouteMetadata;
};
export declare const UpdateRouteRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateRouteRequest";
    encode(message: UpdateRouteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteRequest;
    fromJSON(object: any): UpdateRouteRequest;
    toJSON(message: UpdateRouteRequest): unknown;
    fromPartial<I extends {
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
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
        routeName?: string | undefined;
    } & {
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
                } & Record<Exclude<keyof I["http"]["match"]["path"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                httpMethod?: (string[] & string[] & Record<Exclude<keyof I["http"]["match"]["httpMethod"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["http"]["match"], "$type" | "path" | "httpMethod">, never>) | undefined;
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
                } & Record<Exclude<keyof I["http"]["route"]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                backendGroupId?: string | undefined;
                idleTimeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["http"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                hostRewrite?: string | undefined;
                autoHostRewrite?: boolean | undefined;
                prefixRewrite?: string | undefined;
                upgradeTypes?: (string[] & string[] & Record<Exclude<keyof I["http"]["route"]["upgradeTypes"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["http"]["route"], "$type" | "timeout" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "prefixRewrite" | "upgradeTypes">, never>) | undefined;
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
            } & Record<Exclude<keyof I["http"]["redirect"], "$type" | "replaceScheme" | "replaceHost" | "replacePort" | "replacePath" | "replacePrefix" | "removeQuery" | "responseCode">, never>) | undefined;
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
                } & Record<Exclude<keyof I["http"]["directResponse"]["body"], "$type" | "text">, never>) | undefined;
            } & Record<Exclude<keyof I["http"]["directResponse"], "$type" | "status" | "body">, never>) | undefined;
        } & Record<Exclude<keyof I["http"], "$type" | "match" | "route" | "redirect" | "directResponse">, never>) | undefined;
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
                } & Record<Exclude<keyof I["grpc"]["match"]["fqmn"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["match"], "$type" | "fqmn">, never>) | undefined;
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
                } & Record<Exclude<keyof I["grpc"]["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                hostRewrite?: string | undefined;
                autoHostRewrite?: boolean | undefined;
                maxTimeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["grpc"]["route"]["maxTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["route"], "$type" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "maxTimeout">, never>) | undefined;
            statusResponse?: ({
                status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
            } & {
                status?: import("../../../../yandex/cloud/apploadbalancer/v1/virtual_host").GrpcStatusResponseAction_Status | undefined;
            } & Record<Exclude<keyof I["grpc"]["statusResponse"], "$type" | "status">, never>) | undefined;
        } & Record<Exclude<keyof I["grpc"], "$type" | "match" | "route" | "statusResponse">, never>) | undefined;
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
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
        routeName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "http" | "grpc" | "updateMask" | "routeOptions" | "httpRouterId" | "virtualHostName" | "routeName">, never>>(object: I): UpdateRouteRequest;
};
export declare const UpdateRouteMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateRouteMetadata";
    encode(message: UpdateRouteMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteMetadata;
    fromJSON(object: any): UpdateRouteMetadata;
    toJSON(message: UpdateRouteMetadata): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
        routeName?: string | undefined;
    } & {
        httpRouterId?: string | undefined;
        virtualHostName?: string | undefined;
        routeName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId" | "virtualHostName" | "routeName">, never>>(object: I): UpdateRouteMetadata;
};
/** A set of methods for managing virtual hosts of HTTP routers. */
export declare const VirtualHostServiceService: {
    /**
     * Returns the specified virtual host.
     *
     * To get the list of all virtual hosts of an HTTP router, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetVirtualHostRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetVirtualHostRequest;
        readonly responseSerialize: (value: VirtualHost) => Buffer;
        readonly responseDeserialize: (value: Buffer) => VirtualHost;
    };
    /** Lists virtual hosts of the specified HTTP router. */
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListVirtualHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListVirtualHostsRequest;
        readonly responseSerialize: (value: ListVirtualHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListVirtualHostsResponse;
    };
    /** Creates a virtual host in the specified HTTP router. */
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateVirtualHostRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateVirtualHostRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified virtual host of the specified HTTP router. */
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateVirtualHostRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateVirtualHostRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified virtual host. */
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteVirtualHostRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteVirtualHostRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified route from the specified virtual host. */
    readonly removeRoute: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/RemoveRoute";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveRouteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveRouteRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified route of the specified virtual host. */
    readonly updateRoute: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/UpdateRoute";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRouteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRouteRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface VirtualHostServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified virtual host.
     *
     * To get the list of all virtual hosts of an HTTP router, make a [List] request.
     */
    get: handleUnaryCall<GetVirtualHostRequest, VirtualHost>;
    /** Lists virtual hosts of the specified HTTP router. */
    list: handleUnaryCall<ListVirtualHostsRequest, ListVirtualHostsResponse>;
    /** Creates a virtual host in the specified HTTP router. */
    create: handleUnaryCall<CreateVirtualHostRequest, Operation>;
    /** Updates the specified virtual host of the specified HTTP router. */
    update: handleUnaryCall<UpdateVirtualHostRequest, Operation>;
    /** Deletes the specified virtual host. */
    delete: handleUnaryCall<DeleteVirtualHostRequest, Operation>;
    /** Deletes the specified route from the specified virtual host. */
    removeRoute: handleUnaryCall<RemoveRouteRequest, Operation>;
    /** Updates the specified route of the specified virtual host. */
    updateRoute: handleUnaryCall<UpdateRouteRequest, Operation>;
}
export interface VirtualHostServiceClient extends Client {
    /**
     * Returns the specified virtual host.
     *
     * To get the list of all virtual hosts of an HTTP router, make a [List] request.
     */
    get(request: GetVirtualHostRequest, callback: (error: ServiceError | null, response: VirtualHost) => void): ClientUnaryCall;
    get(request: GetVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: VirtualHost) => void): ClientUnaryCall;
    get(request: GetVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: VirtualHost) => void): ClientUnaryCall;
    /** Lists virtual hosts of the specified HTTP router. */
    list(request: ListVirtualHostsRequest, callback: (error: ServiceError | null, response: ListVirtualHostsResponse) => void): ClientUnaryCall;
    list(request: ListVirtualHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListVirtualHostsResponse) => void): ClientUnaryCall;
    list(request: ListVirtualHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListVirtualHostsResponse) => void): ClientUnaryCall;
    /** Creates a virtual host in the specified HTTP router. */
    create(request: CreateVirtualHostRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified virtual host of the specified HTTP router. */
    update(request: UpdateVirtualHostRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified virtual host. */
    delete(request: DeleteVirtualHostRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified route from the specified virtual host. */
    removeRoute(request: RemoveRouteRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeRoute(request: RemoveRouteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeRoute(request: RemoveRouteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified route of the specified virtual host. */
    updateRoute(request: UpdateRouteRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRoute(request: UpdateRouteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRoute(request: UpdateRouteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const VirtualHostServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): VirtualHostServiceClient;
    service: typeof VirtualHostServiceService;
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
