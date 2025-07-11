import _m0 from "protobufjs/minimal";
import { Payload } from "../../../../yandex/cloud/apploadbalancer/v1/payload";
import { Duration } from "../../../../google/protobuf/duration";
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/**
 * A virtual host resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
 */
export interface VirtualHost {
    $type: "yandex.cloud.apploadbalancer.v1.VirtualHost";
    /** Name of the virtual host. The name is unique within the HTTP router. */
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
    /** Deprecated, use route_options.modify_request_headers. */
    modifyRequestHeaders: HeaderModification[];
    /** Deprecated, use route_options.modify_response_headers. */
    modifyResponseHeaders: HeaderModification[];
    routeOptions?: RouteOptions;
}
export interface RouteOptions {
    $type: "yandex.cloud.apploadbalancer.v1.RouteOptions";
    /** Apply the following modifications to the request headers. */
    modifyRequestHeaders: HeaderModification[];
    /** Apply the following modifications to the response headers. */
    modifyResponseHeaders: HeaderModification[];
    rbac?: RBAC;
    /** Security profile that will take effect to all requests routed via particular virtual host. */
    securityProfileId: string;
}
/**
 * Role Based Access Control (RBAC) provides router, virtual host, and route access control for the ALB
 * service. Requests are allowed or denied based on the `action` and whether a matching principal is
 * found. For instance, if the action is ALLOW and a matching principal is found the request should be
 * allowed.
 */
export interface RBAC {
    $type: "yandex.cloud.apploadbalancer.v1.RBAC";
    /** The action to take if a principal matches. Every action either allows or denies a request. */
    action: RBAC_Action;
    /** Required. A match occurs when at least one matches the request. */
    principals: Principals[];
}
export declare enum RBAC_Action {
    ACTION_UNSPECIFIED = 0,
    /** ALLOW - Allows the request if and only if there is a principal that matches the request. */
    ALLOW = 1,
    /** DENY - Allows the request if and only if there are no principal that match the request. */
    DENY = 2,
    UNRECOGNIZED = -1
}
export declare function rBAC_ActionFromJSON(object: any): RBAC_Action;
export declare function rBAC_ActionToJSON(object: RBAC_Action): string;
/** Principals define a group of identities for a request. */
export interface Principals {
    $type: "yandex.cloud.apploadbalancer.v1.Principals";
    /** Required. A match occurs when all principals match the request. */
    andPrincipals: Principal[];
}
/** Principal defines an identity for a request. */
export interface Principal {
    $type: "yandex.cloud.apploadbalancer.v1.Principal";
    /** A header (or pseudo-header such as :path or :method) of the incoming HTTP request. */
    header?: Principal_HeaderMatcher | undefined;
    /** A CIDR block or IP that describes the request remote/origin address, e.g. ``192.0.0.0/24`` or``192.0.0.4`` . */
    remoteIp: string | undefined;
    /** When any is set, it matches any request. */
    any: boolean | undefined;
}
export interface Principal_HeaderMatcher {
    $type: "yandex.cloud.apploadbalancer.v1.Principal.HeaderMatcher";
    /** Specifies the name of the header in the request. */
    name: string;
    /**
     * Specifies how the header match will be performed to route the request.
     * In the absence of value a request that has specified header name will match,
     * regardless of the header's value.
     */
    value?: StringMatch;
}
/** A header modification resource. */
export interface HeaderModification {
    $type: "yandex.cloud.apploadbalancer.v1.HeaderModification";
    /** Name of the header. */
    name: string;
    /**
     * Appends the specified string to the header value.
     *
     * Variables [defined for Envoy proxy](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#custom-request-response-headers)
     * are supported.
     */
    append: string | undefined;
    /**
     * Replaces the value of the header with the specified string.
     *
     * Variables [defined for Envoy proxy](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#custom-request-response-headers)
     * are supported.
     */
    replace: string | undefined;
    /** Removes the header. */
    remove: boolean | undefined;
    /**
     * Replaces the name of the header with the specified string.
     * This operation is only supported for ALB Virtual Hosts.
     */
    rename: string | undefined;
}
/**
 * A route resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#routes).
 */
export interface Route {
    $type: "yandex.cloud.apploadbalancer.v1.Route";
    /** Name of the route. */
    name: string;
    /** HTTP route configuration. */
    http?: HttpRoute | undefined;
    /** gRPC route configuration. */
    grpc?: GrpcRoute | undefined;
    routeOptions?: RouteOptions;
}
/** An HTTP route configuration resource. */
export interface HttpRoute {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRoute";
    /** Condition (predicate) used to select the route. */
    match?: HttpRouteMatch;
    /** Forwards the request to a backend group for processing as configured. */
    route?: HttpRouteAction | undefined;
    /** Redirects the request as configured. */
    redirect?: RedirectAction | undefined;
    /** Instructs the load balancer to respond directly as configured. */
    directResponse?: DirectResponseAction | undefined;
}
/** A gRPC route configuration resource. */
export interface GrpcRoute {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRoute";
    /** Condition (predicate) used to select the route. */
    match?: GrpcRouteMatch;
    /** Forwards the request to a backend group for processing as configured. */
    route?: GrpcRouteAction | undefined;
    /** Instructs the load balancer to respond directly with a specified status. */
    statusResponse?: GrpcStatusResponseAction | undefined;
}
/** An HTTP route condition (predicate) resource. */
export interface HttpRouteMatch {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouteMatch";
    /** HTTP method specified in the request. */
    httpMethod: string[];
    /**
     * Match settings for the path specified in the request.
     *
     * If not specified, the route matches all paths.
     */
    path?: StringMatch;
}
/** A gRPC route condition (predicate) resource. */
export interface GrpcRouteMatch {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteMatch";
    /**
     * Match settings for gRPC service method called in the request.
     *
     * A match string must be a fully qualified method name, e.g. `foo.bar.v1.BazService/Get`, or a prefix of such.
     *
     * If not specified, the route matches all methods.
     */
    fqmn?: StringMatch;
}
/** A string matcher resource. */
export interface StringMatch {
    $type: "yandex.cloud.apploadbalancer.v1.StringMatch";
    /** Exact match string. */
    exactMatch: string | undefined;
    /** Prefix match string. */
    prefixMatch: string | undefined;
    /** Regular expression match string. */
    regexMatch: string | undefined;
}
/** A redirect action resource. */
export interface RedirectAction {
    $type: "yandex.cloud.apploadbalancer.v1.RedirectAction";
    /**
     * URI scheme replacement.
     *
     * If `http` or `https` scheme is to be replaced and `80` or `443` port is specified in the original URI,
     * the port is also removed.
     *
     * If not specified, the original scheme and port are used.
     */
    replaceScheme: string;
    /**
     * URI host replacement.
     *
     * If not specified, the original host is used.
     */
    replaceHost: string;
    /**
     * URI host replacement.
     *
     * If not specified, the original host is used.
     */
    replacePort: number;
    /** Replacement for the whole path. */
    replacePath: string | undefined;
    /**
     * Replacement for the path prefix matched by [StringMatch].
     *
     * For instance, if [StringMatch.prefix_match] value is `/foo` and `replace_prefix` value is `/bar`,
     * a request with `https://example.com/foobaz` URI is redirected to `https://example.com/barbaz`.
     * For [StringMatch.exact_match], the whole path is replaced.
     */
    replacePrefix: string | undefined;
    /** Removes URI query. */
    removeQuery: boolean;
    /** HTTP status code to use in redirect responses. */
    responseCode: RedirectAction_RedirectResponseCode;
}
/** HTTP status codes supported for use in redirect responses. */
export declare enum RedirectAction_RedirectResponseCode {
    /** MOVED_PERMANENTLY - `301 Moved Permanently` status code. */
    MOVED_PERMANENTLY = 0,
    /** FOUND - `302 Found` status code. */
    FOUND = 1,
    /** SEE_OTHER - `303 See Other` status code. */
    SEE_OTHER = 2,
    /** TEMPORARY_REDIRECT - `307 Temporary Redirect` status code. */
    TEMPORARY_REDIRECT = 3,
    /** PERMANENT_REDIRECT - `308 Permanent Redirect` status code. */
    PERMANENT_REDIRECT = 4,
    UNRECOGNIZED = -1
}
export declare function redirectAction_RedirectResponseCodeFromJSON(object: any): RedirectAction_RedirectResponseCode;
export declare function redirectAction_RedirectResponseCodeToJSON(object: RedirectAction_RedirectResponseCode): string;
/** A direct response action resource. */
export interface DirectResponseAction {
    $type: "yandex.cloud.apploadbalancer.v1.DirectResponseAction";
    /** HTTP status code to use in responses. */
    status: number;
    /** Response body. */
    body?: Payload;
}
/** A gRPC status response action resource. */
export interface GrpcStatusResponseAction {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction";
    /** gRPC [status code](https://grpc.github.io/grpc/core/md_doc_statuscodes.html) to use in responses. */
    status: GrpcStatusResponseAction_Status;
}
/** gRPC status code supported for use in responses. */
export declare enum GrpcStatusResponseAction_Status {
    /** OK - `OK` (0) status code. */
    OK = 0,
    /** INVALID_ARGUMENT - `INVALID_ARGUMENT` (3) status code. */
    INVALID_ARGUMENT = 1,
    /** NOT_FOUND - `NOT_FOUND` (5) status code. */
    NOT_FOUND = 2,
    /** PERMISSION_DENIED - `PERMISSION_DENIED` (7) status code. */
    PERMISSION_DENIED = 3,
    /** UNAUTHENTICATED - `UNAUTHENTICATED` (16) status code. */
    UNAUTHENTICATED = 4,
    /** UNIMPLEMENTED - `UNIMPLEMENTED` (12) status code. */
    UNIMPLEMENTED = 5,
    /** INTERNAL - `INTERNAL` (13) status code. */
    INTERNAL = 6,
    /** UNAVAILABLE - `UNAVAILABLE` (14) status code. */
    UNAVAILABLE = 7,
    UNRECOGNIZED = -1
}
export declare function grpcStatusResponseAction_StatusFromJSON(object: any): GrpcStatusResponseAction_Status;
export declare function grpcStatusResponseAction_StatusToJSON(object: GrpcStatusResponseAction_Status): string;
/** An HTTP route action resource. */
export interface HttpRouteAction {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouteAction";
    /**
     * Backend group to forward requests to.
     *
     * Stream (TCP) backend groups are not supported.
     */
    backendGroupId: string;
    /**
     * Overall timeout for an HTTP connection between a load balancer node an a backend from the backend group:
     * the maximum time the connection is kept alive for, regardless of whether data is transferred over it.
     *
     * If a connection times out, the load balancer responds to the client with a `504 Gateway Timeout` status code.
     *
     * Default value: `60`.
     */
    timeout?: Duration;
    /**
     * Idle timeout for an HTTP connection between a load balancer node an a backend from the backend group:
     * the maximum time the connection is allowed to be idle, i.e. without any data transferred over it.
     *
     * Specifying meaningful values for both [timeout] and `idle_timeout` is useful for implementing
     * server-push mechanisms such as long polling, server-sent events (`EventSource` interface) etc.
     *
     * If a connection times out, the load balancer responds to the client with a `504 Gateway Timeout` status code.
     *
     * If not specified, no idle timeout is used, and an alive connection may be idle for any duration (see [timeout]).
     */
    idleTimeout?: Duration;
    /** Host replacement. */
    hostRewrite: string | undefined;
    /** Automatically replaces the host with that of the target. */
    autoHostRewrite: boolean | undefined;
    /**
     * Replacement for the path prefix matched by [StringMatch].
     *
     * For instance, if [StringMatch.prefix_match] value is `/foo` and `prefix_rewrite` value is `/bar`,
     * a request with `/foobaz` path is forwarded with `/barbaz` path.
     * For [StringMatch.exact_match], the whole path is replaced.
     *
     * If not specified, the path is not changed.
     */
    prefixRewrite: string;
    /** Supported values for HTTP `Upgrade` header. E.g. `websocket`. */
    upgradeTypes: string[];
}
/** A gRPC route action resource. */
export interface GrpcRouteAction {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteAction";
    /** Backend group to forward requests to. */
    backendGroupId: string;
    /**
     * Overall timeout for an underlying HTTP connection between a load balancer node an a backend from the backend group:
     * the maximum time the connection is kept alive for, regardless of whether data is transferred over it.
     *
     * If a client specifies a lower timeout in HTTP `grpc-timeout` header, the `max_timeout` value is ignored.
     *
     * If a connection times out, the load balancer responds to the client with an `UNAVAILABLE` status code.
     *
     * Default value: `60`.
     */
    maxTimeout?: Duration;
    /**
     * Idle timeout for an underlying HTTP connection between a load balancer node an a backend from the backend group:
     * the maximum time the connection is allowed to be idle, i.e. without any data transferred over it.
     *
     * Specifying meaningful values for both [max_timeout] and `idle_timeout` is useful for implementing
     * server-push mechanisms such as long polling, server-sent events etc.
     *
     * If a connection times out, the load balancer responds to the client with an `UNAVAILABLE` status code.
     *
     * If not specified, no idle timeout is used, and an alive connection may be idle for any duration
     * (see [max_timeout]).
     */
    idleTimeout?: Duration;
    /** Host replacement. */
    hostRewrite: string | undefined;
    /** Automatically replaces the host with that of the target. */
    autoHostRewrite: boolean | undefined;
}
export declare const VirtualHost: {
    $type: "yandex.cloud.apploadbalancer.v1.VirtualHost";
    encode(message: VirtualHost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VirtualHost;
    fromJSON(object: any): VirtualHost;
    toJSON(message: VirtualHost): unknown;
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
                    responseCode?: RedirectAction_RedirectResponseCode | undefined;
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
                    status?: GrpcStatusResponseAction_Status | undefined;
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
                    action?: RBAC_Action | undefined;
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
                action?: RBAC_Action | undefined;
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
                    responseCode?: RedirectAction_RedirectResponseCode | undefined;
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
                    status?: GrpcStatusResponseAction_Status | undefined;
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
                    action?: RBAC_Action | undefined;
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
                    responseCode?: RedirectAction_RedirectResponseCode | undefined;
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
                    status?: GrpcStatusResponseAction_Status | undefined;
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
                    action?: RBAC_Action | undefined;
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
                    responseCode?: RedirectAction_RedirectResponseCode | undefined;
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
                    responseCode?: RedirectAction_RedirectResponseCode | undefined;
                } & {
                    replaceScheme?: string | undefined;
                    replaceHost?: string | undefined;
                    replacePort?: number | undefined;
                    replacePath?: string | undefined;
                    replacePrefix?: string | undefined;
                    removeQuery?: boolean | undefined;
                    responseCode?: RedirectAction_RedirectResponseCode | undefined;
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
                    status?: GrpcStatusResponseAction_Status | undefined;
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
                    status?: GrpcStatusResponseAction_Status | undefined;
                } & {
                    status?: GrpcStatusResponseAction_Status | undefined;
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
                    action?: RBAC_Action | undefined;
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
                    action?: RBAC_Action | undefined;
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
                    action?: RBAC_Action | undefined;
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
                    responseCode?: RedirectAction_RedirectResponseCode | undefined;
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
                    status?: GrpcStatusResponseAction_Status | undefined;
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
                    action?: RBAC_Action | undefined;
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
                action?: RBAC_Action | undefined;
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
                action?: RBAC_Action | undefined;
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
                action?: RBAC_Action | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "name" | "authority" | "routes" | "modifyRequestHeaders" | "modifyResponseHeaders" | "routeOptions">, never>>(object: I): VirtualHost;
};
export declare const RouteOptions: {
    $type: "yandex.cloud.apploadbalancer.v1.RouteOptions";
    encode(message: RouteOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteOptions;
    fromJSON(object: any): RouteOptions;
    toJSON(message: RouteOptions): unknown;
    fromPartial<I extends {
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
            action?: RBAC_Action | undefined;
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
        rbac?: ({
            action?: RBAC_Action | undefined;
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
            action?: RBAC_Action | undefined;
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
                        } & Record<Exclude<keyof I["rbac"]["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                    } & Record<Exclude<keyof I["rbac"]["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                    remoteIp?: string | undefined;
                    any?: boolean | undefined;
                } & Record<Exclude<keyof I["rbac"]["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["rbac"]["principals"][number]["andPrincipals"], "$type" | keyof {
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
            } & Record<Exclude<keyof I["rbac"]["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["rbac"]["principals"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["rbac"], "$type" | "action" | "principals">, never>) | undefined;
        securityProfileId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "modifyRequestHeaders" | "modifyResponseHeaders" | "rbac" | "securityProfileId">, never>>(object: I): RouteOptions;
};
export declare const RBAC: {
    $type: "yandex.cloud.apploadbalancer.v1.RBAC";
    encode(message: RBAC, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RBAC;
    fromJSON(object: any): RBAC;
    toJSON(message: RBAC): unknown;
    fromPartial<I extends {
        action?: RBAC_Action | undefined;
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
        action?: RBAC_Action | undefined;
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
                    } & Record<Exclude<keyof I["principals"][number]["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
                } & Record<Exclude<keyof I["principals"][number]["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
                remoteIp?: string | undefined;
                any?: boolean | undefined;
            } & Record<Exclude<keyof I["principals"][number]["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["principals"][number]["andPrincipals"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["principals"][number], "$type" | "andPrincipals">, never>)[] & Record<Exclude<keyof I["principals"], "$type" | keyof {
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
    } & Record<Exclude<keyof I, "$type" | "action" | "principals">, never>>(object: I): RBAC;
};
export declare const Principals: {
    $type: "yandex.cloud.apploadbalancer.v1.Principals";
    encode(message: Principals, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Principals;
    fromJSON(object: any): Principals;
    toJSON(message: Principals): unknown;
    fromPartial<I extends {
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
                } & Record<Exclude<keyof I["andPrincipals"][number]["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
            } & Record<Exclude<keyof I["andPrincipals"][number]["header"], "$type" | "name" | "value">, never>) | undefined;
            remoteIp?: string | undefined;
            any?: boolean | undefined;
        } & Record<Exclude<keyof I["andPrincipals"][number], "$type" | "header" | "remoteIp" | "any">, never>)[] & Record<Exclude<keyof I["andPrincipals"], "$type" | keyof {
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
    } & Record<Exclude<keyof I, "$type" | "andPrincipals">, never>>(object: I): Principals;
};
export declare const Principal: {
    $type: "yandex.cloud.apploadbalancer.v1.Principal";
    encode(message: Principal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Principal;
    fromJSON(object: any): Principal;
    toJSON(message: Principal): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["header"]["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
        } & Record<Exclude<keyof I["header"], "$type" | "name" | "value">, never>) | undefined;
        remoteIp?: string | undefined;
        any?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "header" | "remoteIp" | "any">, never>>(object: I): Principal;
};
export declare const Principal_HeaderMatcher: {
    $type: "yandex.cloud.apploadbalancer.v1.Principal.HeaderMatcher";
    encode(message: Principal_HeaderMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Principal_HeaderMatcher;
    fromJSON(object: any): Principal_HeaderMatcher;
    toJSON(message: Principal_HeaderMatcher): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["value"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "value">, never>>(object: I): Principal_HeaderMatcher;
};
export declare const HeaderModification: {
    $type: "yandex.cloud.apploadbalancer.v1.HeaderModification";
    encode(message: HeaderModification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeaderModification;
    fromJSON(object: any): HeaderModification;
    toJSON(message: HeaderModification): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, "$type" | "replace" | "name" | "append" | "remove" | "rename">, never>>(object: I): HeaderModification;
};
export declare const Route: {
    $type: "yandex.cloud.apploadbalancer.v1.Route";
    encode(message: Route, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Route;
    fromJSON(object: any): Route;
    toJSON(message: Route): unknown;
    fromPartial<I extends {
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
                responseCode?: RedirectAction_RedirectResponseCode | undefined;
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
                status?: GrpcStatusResponseAction_Status | undefined;
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
                action?: RBAC_Action | undefined;
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
                responseCode?: RedirectAction_RedirectResponseCode | undefined;
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
                responseCode?: RedirectAction_RedirectResponseCode | undefined;
            } & {
                replaceScheme?: string | undefined;
                replaceHost?: string | undefined;
                replacePort?: number | undefined;
                replacePath?: string | undefined;
                replacePrefix?: string | undefined;
                removeQuery?: boolean | undefined;
                responseCode?: RedirectAction_RedirectResponseCode | undefined;
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
                status?: GrpcStatusResponseAction_Status | undefined;
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
                status?: GrpcStatusResponseAction_Status | undefined;
            } & {
                status?: GrpcStatusResponseAction_Status | undefined;
            } & Record<Exclude<keyof I["grpc"]["statusResponse"], "$type" | "status">, never>) | undefined;
        } & Record<Exclude<keyof I["grpc"], "$type" | "match" | "route" | "statusResponse">, never>) | undefined;
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
                action?: RBAC_Action | undefined;
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
                action?: RBAC_Action | undefined;
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
                action?: RBAC_Action | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "name" | "http" | "grpc" | "routeOptions">, never>>(object: I): Route;
};
export declare const HttpRoute: {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRoute";
    encode(message: HttpRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRoute;
    fromJSON(object: any): HttpRoute;
    toJSON(message: HttpRoute): unknown;
    fromPartial<I extends {
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
            responseCode?: RedirectAction_RedirectResponseCode | undefined;
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
            } & Record<Exclude<keyof I["match"]["path"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
            httpMethod?: (string[] & string[] & Record<Exclude<keyof I["match"]["httpMethod"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["match"], "$type" | "path" | "httpMethod">, never>) | undefined;
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
            } & Record<Exclude<keyof I["route"]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
            backendGroupId?: string | undefined;
            idleTimeout?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
            hostRewrite?: string | undefined;
            autoHostRewrite?: boolean | undefined;
            prefixRewrite?: string | undefined;
            upgradeTypes?: (string[] & string[] & Record<Exclude<keyof I["route"]["upgradeTypes"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["route"], "$type" | "timeout" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "prefixRewrite" | "upgradeTypes">, never>) | undefined;
        redirect?: ({
            replaceScheme?: string | undefined;
            replaceHost?: string | undefined;
            replacePort?: number | undefined;
            replacePath?: string | undefined;
            replacePrefix?: string | undefined;
            removeQuery?: boolean | undefined;
            responseCode?: RedirectAction_RedirectResponseCode | undefined;
        } & {
            replaceScheme?: string | undefined;
            replaceHost?: string | undefined;
            replacePort?: number | undefined;
            replacePath?: string | undefined;
            replacePrefix?: string | undefined;
            removeQuery?: boolean | undefined;
            responseCode?: RedirectAction_RedirectResponseCode | undefined;
        } & Record<Exclude<keyof I["redirect"], "$type" | "replaceScheme" | "replaceHost" | "replacePort" | "replacePath" | "replacePrefix" | "removeQuery" | "responseCode">, never>) | undefined;
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
            } & Record<Exclude<keyof I["directResponse"]["body"], "$type" | "text">, never>) | undefined;
        } & Record<Exclude<keyof I["directResponse"], "$type" | "status" | "body">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "match" | "route" | "redirect" | "directResponse">, never>>(object: I): HttpRoute;
};
export declare const GrpcRoute: {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRoute";
    encode(message: GrpcRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcRoute;
    fromJSON(object: any): GrpcRoute;
    toJSON(message: GrpcRoute): unknown;
    fromPartial<I extends {
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
            status?: GrpcStatusResponseAction_Status | undefined;
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
            } & Record<Exclude<keyof I["match"]["fqmn"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
        } & Record<Exclude<keyof I["match"], "$type" | "fqmn">, never>) | undefined;
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
            } & Record<Exclude<keyof I["route"]["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
            hostRewrite?: string | undefined;
            autoHostRewrite?: boolean | undefined;
            maxTimeout?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["route"]["maxTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["route"], "$type" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "maxTimeout">, never>) | undefined;
        statusResponse?: ({
            status?: GrpcStatusResponseAction_Status | undefined;
        } & {
            status?: GrpcStatusResponseAction_Status | undefined;
        } & Record<Exclude<keyof I["statusResponse"], "$type" | "status">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "match" | "route" | "statusResponse">, never>>(object: I): GrpcRoute;
};
export declare const HttpRouteMatch: {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouteMatch";
    encode(message: HttpRouteMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRouteMatch;
    fromJSON(object: any): HttpRouteMatch;
    toJSON(message: HttpRouteMatch): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["path"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
        httpMethod?: (string[] & string[] & Record<Exclude<keyof I["httpMethod"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "path" | "httpMethod">, never>>(object: I): HttpRouteMatch;
};
export declare const GrpcRouteMatch: {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteMatch";
    encode(message: GrpcRouteMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcRouteMatch;
    fromJSON(object: any): GrpcRouteMatch;
    toJSON(message: GrpcRouteMatch): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["fqmn"], "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "fqmn">, never>>(object: I): GrpcRouteMatch;
};
export declare const StringMatch: {
    $type: "yandex.cloud.apploadbalancer.v1.StringMatch";
    encode(message: StringMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StringMatch;
    fromJSON(object: any): StringMatch;
    toJSON(message: StringMatch): unknown;
    fromPartial<I extends {
        exactMatch?: string | undefined;
        prefixMatch?: string | undefined;
        regexMatch?: string | undefined;
    } & {
        exactMatch?: string | undefined;
        prefixMatch?: string | undefined;
        regexMatch?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "exactMatch" | "prefixMatch" | "regexMatch">, never>>(object: I): StringMatch;
};
export declare const RedirectAction: {
    $type: "yandex.cloud.apploadbalancer.v1.RedirectAction";
    encode(message: RedirectAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RedirectAction;
    fromJSON(object: any): RedirectAction;
    toJSON(message: RedirectAction): unknown;
    fromPartial<I extends {
        replaceScheme?: string | undefined;
        replaceHost?: string | undefined;
        replacePort?: number | undefined;
        replacePath?: string | undefined;
        replacePrefix?: string | undefined;
        removeQuery?: boolean | undefined;
        responseCode?: RedirectAction_RedirectResponseCode | undefined;
    } & {
        replaceScheme?: string | undefined;
        replaceHost?: string | undefined;
        replacePort?: number | undefined;
        replacePath?: string | undefined;
        replacePrefix?: string | undefined;
        removeQuery?: boolean | undefined;
        responseCode?: RedirectAction_RedirectResponseCode | undefined;
    } & Record<Exclude<keyof I, "$type" | "replaceScheme" | "replaceHost" | "replacePort" | "replacePath" | "replacePrefix" | "removeQuery" | "responseCode">, never>>(object: I): RedirectAction;
};
export declare const DirectResponseAction: {
    $type: "yandex.cloud.apploadbalancer.v1.DirectResponseAction";
    encode(message: DirectResponseAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DirectResponseAction;
    fromJSON(object: any): DirectResponseAction;
    toJSON(message: DirectResponseAction): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["body"], "$type" | "text">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "status" | "body">, never>>(object: I): DirectResponseAction;
};
export declare const GrpcStatusResponseAction: {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction";
    encode(message: GrpcStatusResponseAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcStatusResponseAction;
    fromJSON(object: any): GrpcStatusResponseAction;
    toJSON(message: GrpcStatusResponseAction): unknown;
    fromPartial<I extends {
        status?: GrpcStatusResponseAction_Status | undefined;
    } & {
        status?: GrpcStatusResponseAction_Status | undefined;
    } & Record<Exclude<keyof I, "$type" | "status">, never>>(object: I): GrpcStatusResponseAction;
};
export declare const HttpRouteAction: {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouteAction";
    encode(message: HttpRouteAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRouteAction;
    fromJSON(object: any): HttpRouteAction;
    toJSON(message: HttpRouteAction): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
        backendGroupId?: string | undefined;
        idleTimeout?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
        hostRewrite?: string | undefined;
        autoHostRewrite?: boolean | undefined;
        prefixRewrite?: string | undefined;
        upgradeTypes?: (string[] & string[] & Record<Exclude<keyof I["upgradeTypes"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "timeout" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "prefixRewrite" | "upgradeTypes">, never>>(object: I): HttpRouteAction;
};
export declare const GrpcRouteAction: {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteAction";
    encode(message: GrpcRouteAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcRouteAction;
    fromJSON(object: any): GrpcRouteAction;
    toJSON(message: GrpcRouteAction): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["idleTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
        hostRewrite?: string | undefined;
        autoHostRewrite?: boolean | undefined;
        maxTimeout?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["maxTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId" | "idleTimeout" | "hostRewrite" | "autoHostRewrite" | "maxTimeout">, never>>(object: I): GrpcRouteAction;
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
