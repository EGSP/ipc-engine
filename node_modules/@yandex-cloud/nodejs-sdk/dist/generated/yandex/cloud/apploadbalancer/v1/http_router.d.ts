import _m0 from "protobufjs/minimal";
import { RouteOptions, VirtualHost } from "../../../../yandex/cloud/apploadbalancer/v1/virtual_host";
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/**
 * An HTTP router resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router).
 */
export interface HttpRouter {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouter";
    /** ID of the router. Generated at creation time. */
    id: string;
    /** Name of the router. The name is unique within the folder. */
    name: string;
    /** Description of the router. */
    description: string;
    /** ID of the folder that the router belongs to. */
    folderId: string;
    /**
     * Router labels as `key:value` pairs.
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
    /** Creation timestamp. */
    createdAt?: Date;
    routeOptions?: RouteOptions;
}
export interface HttpRouter_LabelsEntry {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry";
    key: string;
    value: string;
}
export declare const HttpRouter: {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouter";
    encode(message: HttpRouter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRouter;
    fromJSON(object: any): HttpRouter;
    toJSON(message: HttpRouter): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "routeOptions" | "virtualHosts">, never>>(object: I): HttpRouter;
};
export declare const HttpRouter_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry";
    encode(message: HttpRouter_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRouter_LabelsEntry;
    fromJSON(object: any): HttpRouter_LabelsEntry;
    toJSON(message: HttpRouter_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): HttpRouter_LabelsEntry;
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
