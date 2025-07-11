import _m0 from "protobufjs/minimal";
import { LogOptions } from "../../../../yandex/cloud/apploadbalancer/v1/logging";
import { Target } from "../../../../yandex/cloud/apploadbalancer/v1/target_group";
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/**
 * An application load balancer resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer).
 */
export interface LoadBalancer {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer";
    /** ID of the application load balancer. Generated at creation time. */
    id: string;
    /** Name of the application load balancer. The name is unique within the folder. */
    name: string;
    /** Description of the application load balancer. */
    description: string;
    /** ID of the folder that the application load balancer belongs to. */
    folderId: string;
    /**
     * Application load balancer labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /** Status of the application load balancer. */
    status: LoadBalancer_Status;
    /** ID of the region that the application load balancer is located at. */
    regionId: string;
    /** ID of the network that the application load balancer belongs to. */
    networkId: string;
    /**
     * Listeners that belong to the application load balancer.
     *
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
     */
    listeners: Listener[];
    /**
     * Locality settings of the application load balancer.
     *
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
     */
    allocationPolicy?: AllocationPolicy;
    /**
     * ID of the log group that stores access logs of the application load balancer.
     *
     * The logs can be accessed using a Cloud Functions [trigger for Cloud Logs](/docs/functions/operations/trigger/cloudlogs-trigger-create).
     */
    logGroupId: string;
    /**
     * ID's of the security groups attributed to the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
     */
    securityGroupIds: string[];
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Scaling settings of the application load balancer.
     *
     * The scaling settings relate to a special internal instance group which facilitates the balancer's work.
     * Instances in this group are called _resource units_. The group is scaled automatically based on incoming load
     * and within limitations specified in these settings.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lcu-scaling).
     */
    autoScalePolicy?: AutoScalePolicy;
    /** Cloud logging settings of the application load balancer. */
    logOptions?: LogOptions;
}
export declare enum LoadBalancer_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The application load balancer is being created. */
    CREATING = 1,
    /** STARTING - The application load balancer is being started. */
    STARTING = 2,
    /** ACTIVE - The application load balancer is active and sends traffic to the targets. */
    ACTIVE = 3,
    /** STOPPING - The application load balancer is being stopped. */
    STOPPING = 4,
    /** STOPPED - The application load balancer is stopped and doesn't send traffic to the targets. */
    STOPPED = 5,
    /** DELETING - The application load balancer is being deleted. */
    DELETING = 6,
    UNRECOGNIZED = -1
}
export declare function loadBalancer_StatusFromJSON(object: any): LoadBalancer_Status;
export declare function loadBalancer_StatusToJSON(object: LoadBalancer_Status): string;
export interface LoadBalancer_LabelsEntry {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry";
    key: string;
    value: string;
}
/** An endpoint address resource. */
export interface Address {
    $type: "yandex.cloud.apploadbalancer.v1.Address";
    /** Public IPv4 endpoint address. */
    externalIpv4Address?: ExternalIpv4Address | undefined;
    /**
     * Internal IPv4 endpoint address.
     *
     * To enable the use of listeners with internal addresses, [contact support](https://console.cloud.yandex.ru/support).
     */
    internalIpv4Address?: InternalIpv4Address | undefined;
    /** Public IPv6 endpoint address. */
    externalIpv6Address?: ExternalIpv6Address | undefined;
}
/** A public (external) IPv4 endpoint address resource. */
export interface ExternalIpv4Address {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4Address";
    /** IPv4 address. */
    address: string;
}
/** An internal IPv4 endpoint address resource. */
export interface InternalIpv4Address {
    $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4Address";
    /** IPv4 address. */
    address: string;
    /** ID of the subnet that the address belongs to. */
    subnetId: string;
}
/** A public (external) IPv4 endpoint address resource. */
export interface ExternalIpv6Address {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6Address";
    /** IPv6 address. */
    address: string;
}
/**
 * An application load balancer location resource.
 *
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
 */
export interface Location {
    $type: "yandex.cloud.apploadbalancer.v1.Location";
    /**
     * ID of the availability zone where the application load balancer resides.
     *
     * Each availability zone can only be specified once.
     */
    zoneId: string;
    /** ID of the subnet that the application load balancer belongs to. */
    subnetId: string;
    /**
     * Disables the load balancer node in the specified availability zone.
     *
     * Backends in the availability zone are not directly affected by this setting.
     * They still may receive traffic from the load balancer nodes in other availability zones,
     * subject to [LoadBalancingConfig.locality_aware_routing_percent] and [LoadBalancingConfig.strict_locality] settings.
     */
    disableTraffic: boolean;
}
/** A locality settings (allocation policy) resource. */
export interface AllocationPolicy {
    $type: "yandex.cloud.apploadbalancer.v1.AllocationPolicy";
    /** Availability zones and subnets that the application load balancer resides. */
    locations: Location[];
}
/**
 * A listener resource.
 *
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
 */
export interface Listener {
    $type: "yandex.cloud.apploadbalancer.v1.Listener";
    /**
     * Name of the listener. The name is unique within the application load balancer.
     * The string length in characters is 3-63.
     */
    name: string;
    /**
     * Endpoints of the listener.
     *
     * Endpoints are defined by their IP addresses and ports.
     */
    endpoints: Endpoint[];
    /** Unencrypted HTTP listener settings. */
    http?: HttpListener | undefined;
    /**
     * TLS-encrypted HTTP or TCP stream listener settings.
     *
     * All handlers within a listener ([TlsListener.default_handler] and [TlsListener.sni_handlers]) must be of one
     * type, [HttpHandler] or [StreamHandler]. Mixing HTTP and TCP stream traffic in a TLS-encrypted listener is not
     * supported.
     */
    tls?: TlsListener | undefined;
    /** Unencrypted stream (TCP) listener settings. */
    stream?: StreamListener | undefined;
}
/** An endpoint resource. */
export interface Endpoint {
    $type: "yandex.cloud.apploadbalancer.v1.Endpoint";
    /** Endpoint public (external) and internal addresses. */
    addresses: Address[];
    /** Endpoint ports. */
    ports: number[];
}
/** An HTTP listener resource. */
export interface HttpListener {
    $type: "yandex.cloud.apploadbalancer.v1.HttpListener";
    /**
     * Settings for handling HTTP requests.
     *
     * Only one of `handler` and [redirects] can be specified.
     */
    handler?: HttpHandler;
    /**
     * Redirects settings.
     *
     * Only one of `redirects` and [handler] can be specified.
     */
    redirects?: Redirects;
}
/** TLS-encrypted (HTTP or TCP stream) listener resource. */
export interface TlsListener {
    $type: "yandex.cloud.apploadbalancer.v1.TlsListener";
    /**
     * Settings for handling requests by default, with Server Name
     * Indication (SNI) not matching any of the [sni_handlers].
     */
    defaultHandler?: TlsHandler;
    /**
     * Settings for handling requests with Server Name Indication (SNI)
     * matching one of [SniMatch.server_names] values.
     */
    sniHandlers: SniMatch[];
}
/** A stream (TCP) listener resource. */
export interface StreamListener {
    $type: "yandex.cloud.apploadbalancer.v1.StreamListener";
    /** Settings for handling stream (TCP) requests. */
    handler?: StreamHandler;
}
/** An HTTP/2 options resource. */
export interface Http2Options {
    $type: "yandex.cloud.apploadbalancer.v1.Http2Options";
    /** Maximum number of concurrent HTTP/2 streams in a connection. */
    maxConcurrentStreams: number;
}
/** A stream (TCP) handler resource. */
export interface StreamHandler {
    $type: "yandex.cloud.apploadbalancer.v1.StreamHandler";
    /**
     * ID of the backend group processing requests. For details about the concept, see
     * [documentation](/docs/application-load-balancer/concepts/backend-group).
     *
     * The backend group type, specified via [BackendGroup.backend], must be `stream`.
     *
     * To get the list of all available backend groups, make a [BackendGroupService.List] request.
     */
    backendGroupId: string;
}
/** An HTTP handler resource. */
export interface HttpHandler {
    $type: "yandex.cloud.apploadbalancer.v1.HttpHandler";
    /**
     * ID of the HTTP router processing requests. For details about the concept, see
     * [documentation](/docs/application-load-balancer/concepts/http-router).
     *
     * To get the list of all available HTTP routers, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * HTTP/2 settings.
     *
     * If specified, incoming HTTP/2 requests are supported by the listener.
     */
    http2Options?: Http2Options | undefined;
    /** Enables support for incoming HTTP/1.0 and HTTP/1.1 requests and disables it for HTTP/2 requests. */
    allowHttp10: boolean | undefined;
    /** When unset, will preserve the incoming x-request-id header, otherwise would rewrite it with a new value. */
    rewriteRequestId: boolean;
}
/** A listener redirects resource. */
export interface Redirects {
    $type: "yandex.cloud.apploadbalancer.v1.Redirects";
    /**
     * Redirects all unencrypted HTTP requests to the same URI with scheme changed to `https`.
     *
     * The setting has the same effect as a single, catch-all [HttpRoute]
     * with [RedirectAction.replace_scheme] set to `https`.
     */
    httpToHttps: boolean;
}
/** A SNI handler resource. */
export interface SniMatch {
    $type: "yandex.cloud.apploadbalancer.v1.SniMatch";
    /** Name of the SNI handler. */
    name: string;
    /** Server names that are matched by the SNI handler. */
    serverNames: string[];
    /** Settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
    handler?: TlsHandler;
}
/** A TLS-encrypted (HTTP or TCP stream) handler resource. */
export interface TlsHandler {
    $type: "yandex.cloud.apploadbalancer.v1.TlsHandler";
    /** HTTP handler. */
    httpHandler?: HttpHandler | undefined;
    /** Stream (TCP) handler. */
    streamHandler?: StreamHandler | undefined;
    /**
     * ID's of the TLS server certificates from [Certificate Manager](/docs/certificate-manager/).
     *
     * RSA and ECDSA certificates are supported, and only the first certificate of each type is used.
     */
    certificateIds: string[];
}
/** A target state resource. */
export interface TargetState {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState";
    /** Health of the target, i.e. its statuses in all availability zones. */
    status?: TargetState_HealthcheckStatus;
    /** Target. */
    target?: Target;
}
/** Supported target statuses. */
export declare enum TargetState_Status {
    STATUS_UNSPECIFIED = 0,
    /**
     * HEALTHY - All of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] are passed
     * (the number depends on the [HealthCheck.healthy_threshold] setting) and the target is ready to receive traffic.
     */
    HEALTHY = 1,
    /**
     * PARTIALLY_HEALTHY - Some of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] failed
     * (the number depends on the [HealthCheck.unhealthy_threshold] setting).
     * The target is ready to receive traffic from the load balancer nodes which, based on their health checks,
     * consider the target healthy.
     */
    PARTIALLY_HEALTHY = 2,
    /**
     * UNHEALTHY - All of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] failed
     * (the number depends on the [HealthCheck.unhealthy_threshold] setting) and the target is not receiving traffic.
     */
    UNHEALTHY = 3,
    /** DRAINING - Target is being deleted and the application load balancer is no longer sending traffic to this target. */
    DRAINING = 4,
    TIMEOUT = 5,
    UNRECOGNIZED = -1
}
export declare function targetState_StatusFromJSON(object: any): TargetState_Status;
export declare function targetState_StatusToJSON(object: TargetState_Status): string;
/** Health of the target. */
export interface TargetState_HealthcheckStatus {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState.HealthcheckStatus";
    /** Statuses of the target in its availability zones. */
    zoneStatuses: TargetState_ZoneHealthcheckStatus[];
}
/** Health of the target in the availability zone. */
export interface TargetState_ZoneHealthcheckStatus {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState.ZoneHealthcheckStatus";
    /** ID of the availability zone. */
    zoneId: string;
    /** Status of the target in the availability zone. */
    status: TargetState_Status;
    /**
     * Indicates whether the target has been marked `UNHEALTHY` due to failing active health checks,
     * which determine target statuses as configured in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks].
     *
     * Currently the only type of health checks is active, as described above.
     * Passive health checks, which determine the health of a target based on its responses to production requests
     * (HTTP 5xx status codes, connection errors etc.), are not implemented yet.
     */
    failedActiveHc: boolean;
}
/** A resource for scaling settings of an application load balancer. */
export interface AutoScalePolicy {
    $type: "yandex.cloud.apploadbalancer.v1.AutoScalePolicy";
    /**
     * Lower limit for the number of resource units in each availability zone.
     *
     * If not specified previously (using other instruments such as management console), the default value is 2.
     * To revert to it, specify it explicitly.
     *
     * The minimum value is 2.
     */
    minZoneSize: number;
    /**
     * Upper limit for the total number of resource units across all availability zones.
     *
     * If a positive value is specified, it must be at least [min_zone_size] multiplied by the size of
     * [AllocationPolicy.locations].
     *
     * If the value is 0, there is no upper limit.
     */
    maxSize: number;
}
export declare const LoadBalancer: {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer";
    encode(message: LoadBalancer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoadBalancer;
    fromJSON(object: any): LoadBalancer;
    toJSON(message: LoadBalancer): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: LoadBalancer_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        logGroupId?: string | undefined;
        regionId?: string | undefined;
        networkId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        listeners?: {
            name?: string | undefined;
            http?: {
                handler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                redirects?: {
                    httpToHttps?: boolean | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                handler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
            } | undefined;
            tls?: {
                defaultHandler?: {
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } | undefined;
                sniHandlers?: {
                    name?: string | undefined;
                    handler?: {
                        httpHandler?: {
                            httpRouterId?: string | undefined;
                            http2Options?: {
                                maxConcurrentStreams?: number | undefined;
                            } | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } | undefined;
                        streamHandler?: {
                            backendGroupId?: string | undefined;
                        } | undefined;
                        certificateIds?: string[] | undefined;
                    } | undefined;
                    serverNames?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            endpoints?: {
                addresses?: {
                    externalIpv4Address?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4Address?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6Address?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
                ports?: number[] | undefined;
            }[] | undefined;
        }[] | undefined;
        allocationPolicy?: {
            locations?: {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                disableTraffic?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        autoScalePolicy?: {
            minZoneSize?: number | undefined;
            maxSize?: number | undefined;
        } | undefined;
        logOptions?: {
            logGroupId?: string | undefined;
            disable?: boolean | undefined;
            discardRules?: {
                httpCodes?: number[] | undefined;
                httpCodeIntervals?: import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[] | undefined;
                grpcCodes?: import("../../../../google/rpc/code").Code[] | undefined;
                discardPercent?: number | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: LoadBalancer_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        logGroupId?: string | undefined;
        regionId?: string | undefined;
        networkId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        listeners?: ({
            name?: string | undefined;
            http?: {
                handler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                redirects?: {
                    httpToHttps?: boolean | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                handler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
            } | undefined;
            tls?: {
                defaultHandler?: {
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } | undefined;
                sniHandlers?: {
                    name?: string | undefined;
                    handler?: {
                        httpHandler?: {
                            httpRouterId?: string | undefined;
                            http2Options?: {
                                maxConcurrentStreams?: number | undefined;
                            } | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } | undefined;
                        streamHandler?: {
                            backendGroupId?: string | undefined;
                        } | undefined;
                        certificateIds?: string[] | undefined;
                    } | undefined;
                    serverNames?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            endpoints?: {
                addresses?: {
                    externalIpv4Address?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4Address?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6Address?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
                ports?: number[] | undefined;
            }[] | undefined;
        }[] & ({
            name?: string | undefined;
            http?: {
                handler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                redirects?: {
                    httpToHttps?: boolean | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                handler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
            } | undefined;
            tls?: {
                defaultHandler?: {
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } | undefined;
                sniHandlers?: {
                    name?: string | undefined;
                    handler?: {
                        httpHandler?: {
                            httpRouterId?: string | undefined;
                            http2Options?: {
                                maxConcurrentStreams?: number | undefined;
                            } | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } | undefined;
                        streamHandler?: {
                            backendGroupId?: string | undefined;
                        } | undefined;
                        certificateIds?: string[] | undefined;
                    } | undefined;
                    serverNames?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            endpoints?: {
                addresses?: {
                    externalIpv4Address?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4Address?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6Address?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
                ports?: number[] | undefined;
            }[] | undefined;
        } & {
            name?: string | undefined;
            http?: ({
                handler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                redirects?: {
                    httpToHttps?: boolean | undefined;
                } | undefined;
            } & {
                handler?: ({
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } & {
                    httpRouterId?: string | undefined;
                    http2Options?: ({
                        maxConcurrentStreams?: number | undefined;
                    } & {
                        maxConcurrentStreams?: number | undefined;
                    } & Record<Exclude<keyof I["listeners"][number]["http"]["handler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } & Record<Exclude<keyof I["listeners"][number]["http"]["handler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                redirects?: ({
                    httpToHttps?: boolean | undefined;
                } & {
                    httpToHttps?: boolean | undefined;
                } & Record<Exclude<keyof I["listeners"][number]["http"]["redirects"], "$type" | "httpToHttps">, never>) | undefined;
            } & Record<Exclude<keyof I["listeners"][number]["http"], "$type" | "handler" | "redirects">, never>) | undefined;
            stream?: ({
                handler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
            } & {
                handler?: ({
                    backendGroupId?: string | undefined;
                } & {
                    backendGroupId?: string | undefined;
                } & Record<Exclude<keyof I["listeners"][number]["stream"]["handler"], "$type" | "backendGroupId">, never>) | undefined;
            } & Record<Exclude<keyof I["listeners"][number]["stream"], "$type" | "handler">, never>) | undefined;
            tls?: ({
                defaultHandler?: {
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } | undefined;
                sniHandlers?: {
                    name?: string | undefined;
                    handler?: {
                        httpHandler?: {
                            httpRouterId?: string | undefined;
                            http2Options?: {
                                maxConcurrentStreams?: number | undefined;
                            } | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } | undefined;
                        streamHandler?: {
                            backendGroupId?: string | undefined;
                        } | undefined;
                        certificateIds?: string[] | undefined;
                    } | undefined;
                    serverNames?: string[] | undefined;
                }[] | undefined;
            } & {
                defaultHandler?: ({
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } & {
                    httpHandler?: ({
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } & {
                        httpRouterId?: string | undefined;
                        http2Options?: ({
                            maxConcurrentStreams?: number | undefined;
                        } & {
                            maxConcurrentStreams?: number | undefined;
                        } & Record<Exclude<keyof I["listeners"][number]["tls"]["defaultHandler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } & Record<Exclude<keyof I["listeners"][number]["tls"]["defaultHandler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                    streamHandler?: ({
                        backendGroupId?: string | undefined;
                    } & {
                        backendGroupId?: string | undefined;
                    } & Record<Exclude<keyof I["listeners"][number]["tls"]["defaultHandler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                    certificateIds?: (string[] & string[] & Record<Exclude<keyof I["listeners"][number]["tls"]["defaultHandler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["listeners"][number]["tls"]["defaultHandler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
                sniHandlers?: ({
                    name?: string | undefined;
                    handler?: {
                        httpHandler?: {
                            httpRouterId?: string | undefined;
                            http2Options?: {
                                maxConcurrentStreams?: number | undefined;
                            } | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } | undefined;
                        streamHandler?: {
                            backendGroupId?: string | undefined;
                        } | undefined;
                        certificateIds?: string[] | undefined;
                    } | undefined;
                    serverNames?: string[] | undefined;
                }[] & ({
                    name?: string | undefined;
                    handler?: {
                        httpHandler?: {
                            httpRouterId?: string | undefined;
                            http2Options?: {
                                maxConcurrentStreams?: number | undefined;
                            } | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } | undefined;
                        streamHandler?: {
                            backendGroupId?: string | undefined;
                        } | undefined;
                        certificateIds?: string[] | undefined;
                    } | undefined;
                    serverNames?: string[] | undefined;
                } & {
                    name?: string | undefined;
                    handler?: ({
                        httpHandler?: {
                            httpRouterId?: string | undefined;
                            http2Options?: {
                                maxConcurrentStreams?: number | undefined;
                            } | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } | undefined;
                        streamHandler?: {
                            backendGroupId?: string | undefined;
                        } | undefined;
                        certificateIds?: string[] | undefined;
                    } & {
                        httpHandler?: ({
                            httpRouterId?: string | undefined;
                            http2Options?: {
                                maxConcurrentStreams?: number | undefined;
                            } | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } & {
                            httpRouterId?: string | undefined;
                            http2Options?: ({
                                maxConcurrentStreams?: number | undefined;
                            } & {
                                maxConcurrentStreams?: number | undefined;
                            } & Record<Exclude<keyof I["listeners"][number]["tls"]["sniHandlers"][number]["handler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } & Record<Exclude<keyof I["listeners"][number]["tls"]["sniHandlers"][number]["handler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                        streamHandler?: ({
                            backendGroupId?: string | undefined;
                        } & {
                            backendGroupId?: string | undefined;
                        } & Record<Exclude<keyof I["listeners"][number]["tls"]["sniHandlers"][number]["handler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                        certificateIds?: (string[] & string[] & Record<Exclude<keyof I["listeners"][number]["tls"]["sniHandlers"][number]["handler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["listeners"][number]["tls"]["sniHandlers"][number]["handler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
                    serverNames?: (string[] & string[] & Record<Exclude<keyof I["listeners"][number]["tls"]["sniHandlers"][number]["serverNames"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["listeners"][number]["tls"]["sniHandlers"][number], "$type" | "name" | "handler" | "serverNames">, never>)[] & Record<Exclude<keyof I["listeners"][number]["tls"]["sniHandlers"], "$type" | keyof {
                    name?: string | undefined;
                    handler?: {
                        httpHandler?: {
                            httpRouterId?: string | undefined;
                            http2Options?: {
                                maxConcurrentStreams?: number | undefined;
                            } | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } | undefined;
                        streamHandler?: {
                            backendGroupId?: string | undefined;
                        } | undefined;
                        certificateIds?: string[] | undefined;
                    } | undefined;
                    serverNames?: string[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["listeners"][number]["tls"], "$type" | "defaultHandler" | "sniHandlers">, never>) | undefined;
            endpoints?: ({
                addresses?: {
                    externalIpv4Address?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4Address?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6Address?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
                ports?: number[] | undefined;
            }[] & ({
                addresses?: {
                    externalIpv4Address?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4Address?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6Address?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
                ports?: number[] | undefined;
            } & {
                addresses?: ({
                    externalIpv4Address?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4Address?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6Address?: {
                        address?: string | undefined;
                    } | undefined;
                }[] & ({
                    externalIpv4Address?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4Address?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6Address?: {
                        address?: string | undefined;
                    } | undefined;
                } & {
                    externalIpv4Address?: ({
                        address?: string | undefined;
                    } & {
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listeners"][number]["endpoints"][number]["addresses"][number]["externalIpv4Address"], "$type" | "address">, never>) | undefined;
                    internalIpv4Address?: ({
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } & {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listeners"][number]["endpoints"][number]["addresses"][number]["internalIpv4Address"], "$type" | "subnetId" | "address">, never>) | undefined;
                    externalIpv6Address?: ({
                        address?: string | undefined;
                    } & {
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listeners"][number]["endpoints"][number]["addresses"][number]["externalIpv6Address"], "$type" | "address">, never>) | undefined;
                } & Record<Exclude<keyof I["listeners"][number]["endpoints"][number]["addresses"][number], "$type" | "externalIpv4Address" | "internalIpv4Address" | "externalIpv6Address">, never>)[] & Record<Exclude<keyof I["listeners"][number]["endpoints"][number]["addresses"], "$type" | keyof {
                    externalIpv4Address?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4Address?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6Address?: {
                        address?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                ports?: (number[] & number[] & Record<Exclude<keyof I["listeners"][number]["endpoints"][number]["ports"], "$type" | keyof number[]>, never>) | undefined;
            } & Record<Exclude<keyof I["listeners"][number]["endpoints"][number], "$type" | "addresses" | "ports">, never>)[] & Record<Exclude<keyof I["listeners"][number]["endpoints"], "$type" | keyof {
                addresses?: {
                    externalIpv4Address?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4Address?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6Address?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
                ports?: number[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["listeners"][number], "$type" | "name" | "http" | "stream" | "tls" | "endpoints">, never>)[] & Record<Exclude<keyof I["listeners"], "$type" | keyof {
            name?: string | undefined;
            http?: {
                handler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                redirects?: {
                    httpToHttps?: boolean | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                handler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
            } | undefined;
            tls?: {
                defaultHandler?: {
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } | undefined;
                sniHandlers?: {
                    name?: string | undefined;
                    handler?: {
                        httpHandler?: {
                            httpRouterId?: string | undefined;
                            http2Options?: {
                                maxConcurrentStreams?: number | undefined;
                            } | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } | undefined;
                        streamHandler?: {
                            backendGroupId?: string | undefined;
                        } | undefined;
                        certificateIds?: string[] | undefined;
                    } | undefined;
                    serverNames?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            endpoints?: {
                addresses?: {
                    externalIpv4Address?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4Address?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6Address?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
                ports?: number[] | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        allocationPolicy?: ({
            locations?: {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                disableTraffic?: boolean | undefined;
            }[] | undefined;
        } & {
            locations?: ({
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                disableTraffic?: boolean | undefined;
            }[] & ({
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                disableTraffic?: boolean | undefined;
            } & {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                disableTraffic?: boolean | undefined;
            } & Record<Exclude<keyof I["allocationPolicy"]["locations"][number], "$type" | "subnetId" | "zoneId" | "disableTraffic">, never>)[] & Record<Exclude<keyof I["allocationPolicy"]["locations"], "$type" | keyof {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                disableTraffic?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["allocationPolicy"], "$type" | "locations">, never>) | undefined;
        autoScalePolicy?: ({
            minZoneSize?: number | undefined;
            maxSize?: number | undefined;
        } & {
            minZoneSize?: number | undefined;
            maxSize?: number | undefined;
        } & Record<Exclude<keyof I["autoScalePolicy"], "$type" | "minZoneSize" | "maxSize">, never>) | undefined;
        logOptions?: ({
            logGroupId?: string | undefined;
            disable?: boolean | undefined;
            discardRules?: {
                httpCodes?: number[] | undefined;
                httpCodeIntervals?: import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[] | undefined;
                grpcCodes?: import("../../../../google/rpc/code").Code[] | undefined;
                discardPercent?: number | undefined;
            }[] | undefined;
        } & {
            logGroupId?: string | undefined;
            disable?: boolean | undefined;
            discardRules?: ({
                httpCodes?: number[] | undefined;
                httpCodeIntervals?: import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[] | undefined;
                grpcCodes?: import("../../../../google/rpc/code").Code[] | undefined;
                discardPercent?: number | undefined;
            }[] & ({
                httpCodes?: number[] | undefined;
                httpCodeIntervals?: import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[] | undefined;
                grpcCodes?: import("../../../../google/rpc/code").Code[] | undefined;
                discardPercent?: number | undefined;
            } & {
                httpCodes?: (number[] & number[] & Record<Exclude<keyof I["logOptions"]["discardRules"][number]["httpCodes"], "$type" | keyof number[]>, never>) | undefined;
                httpCodeIntervals?: (import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[] & import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[] & Record<Exclude<keyof I["logOptions"]["discardRules"][number]["httpCodeIntervals"], "$type" | keyof import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[]>, never>) | undefined;
                grpcCodes?: (import("../../../../google/rpc/code").Code[] & import("../../../../google/rpc/code").Code[] & Record<Exclude<keyof I["logOptions"]["discardRules"][number]["grpcCodes"], "$type" | keyof import("../../../../google/rpc/code").Code[]>, never>) | undefined;
                discardPercent?: number | undefined;
            } & Record<Exclude<keyof I["logOptions"]["discardRules"][number], "$type" | "httpCodes" | "httpCodeIntervals" | "grpcCodes" | "discardPercent">, never>)[] & Record<Exclude<keyof I["logOptions"]["discardRules"], "$type" | keyof {
                httpCodes?: number[] | undefined;
                httpCodeIntervals?: import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[] | undefined;
                grpcCodes?: import("../../../../google/rpc/code").Code[] | undefined;
                discardPercent?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["logOptions"], "$type" | "logGroupId" | "disable" | "discardRules">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "logGroupId" | "regionId" | "networkId" | "securityGroupIds" | "listeners" | "allocationPolicy" | "autoScalePolicy" | "logOptions">, never>>(object: I): LoadBalancer;
};
export declare const LoadBalancer_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry";
    encode(message: LoadBalancer_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoadBalancer_LabelsEntry;
    fromJSON(object: any): LoadBalancer_LabelsEntry;
    toJSON(message: LoadBalancer_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): LoadBalancer_LabelsEntry;
};
export declare const Address: {
    $type: "yandex.cloud.apploadbalancer.v1.Address";
    encode(message: Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Address;
    fromJSON(object: any): Address;
    toJSON(message: Address): unknown;
    fromPartial<I extends {
        externalIpv4Address?: {
            address?: string | undefined;
        } | undefined;
        internalIpv4Address?: {
            subnetId?: string | undefined;
            address?: string | undefined;
        } | undefined;
        externalIpv6Address?: {
            address?: string | undefined;
        } | undefined;
    } & {
        externalIpv4Address?: ({
            address?: string | undefined;
        } & {
            address?: string | undefined;
        } & Record<Exclude<keyof I["externalIpv4Address"], "$type" | "address">, never>) | undefined;
        internalIpv4Address?: ({
            subnetId?: string | undefined;
            address?: string | undefined;
        } & {
            subnetId?: string | undefined;
            address?: string | undefined;
        } & Record<Exclude<keyof I["internalIpv4Address"], "$type" | "subnetId" | "address">, never>) | undefined;
        externalIpv6Address?: ({
            address?: string | undefined;
        } & {
            address?: string | undefined;
        } & Record<Exclude<keyof I["externalIpv6Address"], "$type" | "address">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "externalIpv4Address" | "internalIpv4Address" | "externalIpv6Address">, never>>(object: I): Address;
};
export declare const ExternalIpv4Address: {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4Address";
    encode(message: ExternalIpv4Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv4Address;
    fromJSON(object: any): ExternalIpv4Address;
    toJSON(message: ExternalIpv4Address): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "address">, never>>(object: I): ExternalIpv4Address;
};
export declare const InternalIpv4Address: {
    $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4Address";
    encode(message: InternalIpv4Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InternalIpv4Address;
    fromJSON(object: any): InternalIpv4Address;
    toJSON(message: InternalIpv4Address): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        address?: string | undefined;
    } & {
        subnetId?: string | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "address">, never>>(object: I): InternalIpv4Address;
};
export declare const ExternalIpv6Address: {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6Address";
    encode(message: ExternalIpv6Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv6Address;
    fromJSON(object: any): ExternalIpv6Address;
    toJSON(message: ExternalIpv6Address): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "address">, never>>(object: I): ExternalIpv6Address;
};
export declare const Location: {
    $type: "yandex.cloud.apploadbalancer.v1.Location";
    encode(message: Location, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Location;
    fromJSON(object: any): Location;
    toJSON(message: Location): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        disableTraffic?: boolean | undefined;
    } & {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        disableTraffic?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "zoneId" | "disableTraffic">, never>>(object: I): Location;
};
export declare const AllocationPolicy: {
    $type: "yandex.cloud.apploadbalancer.v1.AllocationPolicy";
    encode(message: AllocationPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AllocationPolicy;
    fromJSON(object: any): AllocationPolicy;
    toJSON(message: AllocationPolicy): unknown;
    fromPartial<I extends {
        locations?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            disableTraffic?: boolean | undefined;
        }[] | undefined;
    } & {
        locations?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            disableTraffic?: boolean | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            disableTraffic?: boolean | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            disableTraffic?: boolean | undefined;
        } & Record<Exclude<keyof I["locations"][number], "$type" | "subnetId" | "zoneId" | "disableTraffic">, never>)[] & Record<Exclude<keyof I["locations"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            disableTraffic?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "locations">, never>>(object: I): AllocationPolicy;
};
export declare const Listener: {
    $type: "yandex.cloud.apploadbalancer.v1.Listener";
    encode(message: Listener, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Listener;
    fromJSON(object: any): Listener;
    toJSON(message: Listener): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        http?: {
            handler?: {
                httpRouterId?: string | undefined;
                http2Options?: {
                    maxConcurrentStreams?: number | undefined;
                } | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } | undefined;
            redirects?: {
                httpToHttps?: boolean | undefined;
            } | undefined;
        } | undefined;
        stream?: {
            handler?: {
                backendGroupId?: string | undefined;
            } | undefined;
        } | undefined;
        tls?: {
            defaultHandler?: {
                httpHandler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                streamHandler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
                certificateIds?: string[] | undefined;
            } | undefined;
            sniHandlers?: {
                name?: string | undefined;
                handler?: {
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } | undefined;
                serverNames?: string[] | undefined;
            }[] | undefined;
        } | undefined;
        endpoints?: {
            addresses?: {
                externalIpv4Address?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4Address?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6Address?: {
                    address?: string | undefined;
                } | undefined;
            }[] | undefined;
            ports?: number[] | undefined;
        }[] | undefined;
    } & {
        name?: string | undefined;
        http?: ({
            handler?: {
                httpRouterId?: string | undefined;
                http2Options?: {
                    maxConcurrentStreams?: number | undefined;
                } | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } | undefined;
            redirects?: {
                httpToHttps?: boolean | undefined;
            } | undefined;
        } & {
            handler?: ({
                httpRouterId?: string | undefined;
                http2Options?: {
                    maxConcurrentStreams?: number | undefined;
                } | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } & {
                httpRouterId?: string | undefined;
                http2Options?: ({
                    maxConcurrentStreams?: number | undefined;
                } & {
                    maxConcurrentStreams?: number | undefined;
                } & Record<Exclude<keyof I["http"]["handler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } & Record<Exclude<keyof I["http"]["handler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
            redirects?: ({
                httpToHttps?: boolean | undefined;
            } & {
                httpToHttps?: boolean | undefined;
            } & Record<Exclude<keyof I["http"]["redirects"], "$type" | "httpToHttps">, never>) | undefined;
        } & Record<Exclude<keyof I["http"], "$type" | "handler" | "redirects">, never>) | undefined;
        stream?: ({
            handler?: {
                backendGroupId?: string | undefined;
            } | undefined;
        } & {
            handler?: ({
                backendGroupId?: string | undefined;
            } & {
                backendGroupId?: string | undefined;
            } & Record<Exclude<keyof I["stream"]["handler"], "$type" | "backendGroupId">, never>) | undefined;
        } & Record<Exclude<keyof I["stream"], "$type" | "handler">, never>) | undefined;
        tls?: ({
            defaultHandler?: {
                httpHandler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                streamHandler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
                certificateIds?: string[] | undefined;
            } | undefined;
            sniHandlers?: {
                name?: string | undefined;
                handler?: {
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } | undefined;
                serverNames?: string[] | undefined;
            }[] | undefined;
        } & {
            defaultHandler?: ({
                httpHandler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                streamHandler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
                certificateIds?: string[] | undefined;
            } & {
                httpHandler?: ({
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } & {
                    httpRouterId?: string | undefined;
                    http2Options?: ({
                        maxConcurrentStreams?: number | undefined;
                    } & {
                        maxConcurrentStreams?: number | undefined;
                    } & Record<Exclude<keyof I["tls"]["defaultHandler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } & Record<Exclude<keyof I["tls"]["defaultHandler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                streamHandler?: ({
                    backendGroupId?: string | undefined;
                } & {
                    backendGroupId?: string | undefined;
                } & Record<Exclude<keyof I["tls"]["defaultHandler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                certificateIds?: (string[] & string[] & Record<Exclude<keyof I["tls"]["defaultHandler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["tls"]["defaultHandler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
            sniHandlers?: ({
                name?: string | undefined;
                handler?: {
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } | undefined;
                serverNames?: string[] | undefined;
            }[] & ({
                name?: string | undefined;
                handler?: {
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } | undefined;
                serverNames?: string[] | undefined;
            } & {
                name?: string | undefined;
                handler?: ({
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } & {
                    httpHandler?: ({
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } & {
                        httpRouterId?: string | undefined;
                        http2Options?: ({
                            maxConcurrentStreams?: number | undefined;
                        } & {
                            maxConcurrentStreams?: number | undefined;
                        } & Record<Exclude<keyof I["tls"]["sniHandlers"][number]["handler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } & Record<Exclude<keyof I["tls"]["sniHandlers"][number]["handler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                    streamHandler?: ({
                        backendGroupId?: string | undefined;
                    } & {
                        backendGroupId?: string | undefined;
                    } & Record<Exclude<keyof I["tls"]["sniHandlers"][number]["handler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                    certificateIds?: (string[] & string[] & Record<Exclude<keyof I["tls"]["sniHandlers"][number]["handler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["tls"]["sniHandlers"][number]["handler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
                serverNames?: (string[] & string[] & Record<Exclude<keyof I["tls"]["sniHandlers"][number]["serverNames"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["tls"]["sniHandlers"][number], "$type" | "name" | "handler" | "serverNames">, never>)[] & Record<Exclude<keyof I["tls"]["sniHandlers"], "$type" | keyof {
                name?: string | undefined;
                handler?: {
                    httpHandler?: {
                        httpRouterId?: string | undefined;
                        http2Options?: {
                            maxConcurrentStreams?: number | undefined;
                        } | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } | undefined;
                    streamHandler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                    certificateIds?: string[] | undefined;
                } | undefined;
                serverNames?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["tls"], "$type" | "defaultHandler" | "sniHandlers">, never>) | undefined;
        endpoints?: ({
            addresses?: {
                externalIpv4Address?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4Address?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6Address?: {
                    address?: string | undefined;
                } | undefined;
            }[] | undefined;
            ports?: number[] | undefined;
        }[] & ({
            addresses?: {
                externalIpv4Address?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4Address?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6Address?: {
                    address?: string | undefined;
                } | undefined;
            }[] | undefined;
            ports?: number[] | undefined;
        } & {
            addresses?: ({
                externalIpv4Address?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4Address?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6Address?: {
                    address?: string | undefined;
                } | undefined;
            }[] & ({
                externalIpv4Address?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4Address?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6Address?: {
                    address?: string | undefined;
                } | undefined;
            } & {
                externalIpv4Address?: ({
                    address?: string | undefined;
                } & {
                    address?: string | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["addresses"][number]["externalIpv4Address"], "$type" | "address">, never>) | undefined;
                internalIpv4Address?: ({
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } & {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["addresses"][number]["internalIpv4Address"], "$type" | "subnetId" | "address">, never>) | undefined;
                externalIpv6Address?: ({
                    address?: string | undefined;
                } & {
                    address?: string | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["addresses"][number]["externalIpv6Address"], "$type" | "address">, never>) | undefined;
            } & Record<Exclude<keyof I["endpoints"][number]["addresses"][number], "$type" | "externalIpv4Address" | "internalIpv4Address" | "externalIpv6Address">, never>)[] & Record<Exclude<keyof I["endpoints"][number]["addresses"], "$type" | keyof {
                externalIpv4Address?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4Address?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6Address?: {
                    address?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            ports?: (number[] & number[] & Record<Exclude<keyof I["endpoints"][number]["ports"], "$type" | keyof number[]>, never>) | undefined;
        } & Record<Exclude<keyof I["endpoints"][number], "$type" | "addresses" | "ports">, never>)[] & Record<Exclude<keyof I["endpoints"], "$type" | keyof {
            addresses?: {
                externalIpv4Address?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4Address?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6Address?: {
                    address?: string | undefined;
                } | undefined;
            }[] | undefined;
            ports?: number[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "http" | "stream" | "tls" | "endpoints">, never>>(object: I): Listener;
};
export declare const Endpoint: {
    $type: "yandex.cloud.apploadbalancer.v1.Endpoint";
    encode(message: Endpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Endpoint;
    fromJSON(object: any): Endpoint;
    toJSON(message: Endpoint): unknown;
    fromPartial<I extends {
        addresses?: {
            externalIpv4Address?: {
                address?: string | undefined;
            } | undefined;
            internalIpv4Address?: {
                subnetId?: string | undefined;
                address?: string | undefined;
            } | undefined;
            externalIpv6Address?: {
                address?: string | undefined;
            } | undefined;
        }[] | undefined;
        ports?: number[] | undefined;
    } & {
        addresses?: ({
            externalIpv4Address?: {
                address?: string | undefined;
            } | undefined;
            internalIpv4Address?: {
                subnetId?: string | undefined;
                address?: string | undefined;
            } | undefined;
            externalIpv6Address?: {
                address?: string | undefined;
            } | undefined;
        }[] & ({
            externalIpv4Address?: {
                address?: string | undefined;
            } | undefined;
            internalIpv4Address?: {
                subnetId?: string | undefined;
                address?: string | undefined;
            } | undefined;
            externalIpv6Address?: {
                address?: string | undefined;
            } | undefined;
        } & {
            externalIpv4Address?: ({
                address?: string | undefined;
            } & {
                address?: string | undefined;
            } & Record<Exclude<keyof I["addresses"][number]["externalIpv4Address"], "$type" | "address">, never>) | undefined;
            internalIpv4Address?: ({
                subnetId?: string | undefined;
                address?: string | undefined;
            } & {
                subnetId?: string | undefined;
                address?: string | undefined;
            } & Record<Exclude<keyof I["addresses"][number]["internalIpv4Address"], "$type" | "subnetId" | "address">, never>) | undefined;
            externalIpv6Address?: ({
                address?: string | undefined;
            } & {
                address?: string | undefined;
            } & Record<Exclude<keyof I["addresses"][number]["externalIpv6Address"], "$type" | "address">, never>) | undefined;
        } & Record<Exclude<keyof I["addresses"][number], "$type" | "externalIpv4Address" | "internalIpv4Address" | "externalIpv6Address">, never>)[] & Record<Exclude<keyof I["addresses"], "$type" | keyof {
            externalIpv4Address?: {
                address?: string | undefined;
            } | undefined;
            internalIpv4Address?: {
                subnetId?: string | undefined;
                address?: string | undefined;
            } | undefined;
            externalIpv6Address?: {
                address?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        ports?: (number[] & number[] & Record<Exclude<keyof I["ports"], "$type" | keyof number[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "addresses" | "ports">, never>>(object: I): Endpoint;
};
export declare const HttpListener: {
    $type: "yandex.cloud.apploadbalancer.v1.HttpListener";
    encode(message: HttpListener, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpListener;
    fromJSON(object: any): HttpListener;
    toJSON(message: HttpListener): unknown;
    fromPartial<I extends {
        handler?: {
            httpRouterId?: string | undefined;
            http2Options?: {
                maxConcurrentStreams?: number | undefined;
            } | undefined;
            allowHttp10?: boolean | undefined;
            rewriteRequestId?: boolean | undefined;
        } | undefined;
        redirects?: {
            httpToHttps?: boolean | undefined;
        } | undefined;
    } & {
        handler?: ({
            httpRouterId?: string | undefined;
            http2Options?: {
                maxConcurrentStreams?: number | undefined;
            } | undefined;
            allowHttp10?: boolean | undefined;
            rewriteRequestId?: boolean | undefined;
        } & {
            httpRouterId?: string | undefined;
            http2Options?: ({
                maxConcurrentStreams?: number | undefined;
            } & {
                maxConcurrentStreams?: number | undefined;
            } & Record<Exclude<keyof I["handler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
            allowHttp10?: boolean | undefined;
            rewriteRequestId?: boolean | undefined;
        } & Record<Exclude<keyof I["handler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
        redirects?: ({
            httpToHttps?: boolean | undefined;
        } & {
            httpToHttps?: boolean | undefined;
        } & Record<Exclude<keyof I["redirects"], "$type" | "httpToHttps">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "handler" | "redirects">, never>>(object: I): HttpListener;
};
export declare const TlsListener: {
    $type: "yandex.cloud.apploadbalancer.v1.TlsListener";
    encode(message: TlsListener, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TlsListener;
    fromJSON(object: any): TlsListener;
    toJSON(message: TlsListener): unknown;
    fromPartial<I extends {
        defaultHandler?: {
            httpHandler?: {
                httpRouterId?: string | undefined;
                http2Options?: {
                    maxConcurrentStreams?: number | undefined;
                } | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } | undefined;
            streamHandler?: {
                backendGroupId?: string | undefined;
            } | undefined;
            certificateIds?: string[] | undefined;
        } | undefined;
        sniHandlers?: {
            name?: string | undefined;
            handler?: {
                httpHandler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                streamHandler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
                certificateIds?: string[] | undefined;
            } | undefined;
            serverNames?: string[] | undefined;
        }[] | undefined;
    } & {
        defaultHandler?: ({
            httpHandler?: {
                httpRouterId?: string | undefined;
                http2Options?: {
                    maxConcurrentStreams?: number | undefined;
                } | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } | undefined;
            streamHandler?: {
                backendGroupId?: string | undefined;
            } | undefined;
            certificateIds?: string[] | undefined;
        } & {
            httpHandler?: ({
                httpRouterId?: string | undefined;
                http2Options?: {
                    maxConcurrentStreams?: number | undefined;
                } | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } & {
                httpRouterId?: string | undefined;
                http2Options?: ({
                    maxConcurrentStreams?: number | undefined;
                } & {
                    maxConcurrentStreams?: number | undefined;
                } & Record<Exclude<keyof I["defaultHandler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } & Record<Exclude<keyof I["defaultHandler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
            streamHandler?: ({
                backendGroupId?: string | undefined;
            } & {
                backendGroupId?: string | undefined;
            } & Record<Exclude<keyof I["defaultHandler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
            certificateIds?: (string[] & string[] & Record<Exclude<keyof I["defaultHandler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["defaultHandler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
        sniHandlers?: ({
            name?: string | undefined;
            handler?: {
                httpHandler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                streamHandler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
                certificateIds?: string[] | undefined;
            } | undefined;
            serverNames?: string[] | undefined;
        }[] & ({
            name?: string | undefined;
            handler?: {
                httpHandler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                streamHandler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
                certificateIds?: string[] | undefined;
            } | undefined;
            serverNames?: string[] | undefined;
        } & {
            name?: string | undefined;
            handler?: ({
                httpHandler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                streamHandler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
                certificateIds?: string[] | undefined;
            } & {
                httpHandler?: ({
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } & {
                    httpRouterId?: string | undefined;
                    http2Options?: ({
                        maxConcurrentStreams?: number | undefined;
                    } & {
                        maxConcurrentStreams?: number | undefined;
                    } & Record<Exclude<keyof I["sniHandlers"][number]["handler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } & Record<Exclude<keyof I["sniHandlers"][number]["handler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                streamHandler?: ({
                    backendGroupId?: string | undefined;
                } & {
                    backendGroupId?: string | undefined;
                } & Record<Exclude<keyof I["sniHandlers"][number]["handler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                certificateIds?: (string[] & string[] & Record<Exclude<keyof I["sniHandlers"][number]["handler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["sniHandlers"][number]["handler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
            serverNames?: (string[] & string[] & Record<Exclude<keyof I["sniHandlers"][number]["serverNames"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["sniHandlers"][number], "$type" | "name" | "handler" | "serverNames">, never>)[] & Record<Exclude<keyof I["sniHandlers"], "$type" | keyof {
            name?: string | undefined;
            handler?: {
                httpHandler?: {
                    httpRouterId?: string | undefined;
                    http2Options?: {
                        maxConcurrentStreams?: number | undefined;
                    } | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } | undefined;
                streamHandler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
                certificateIds?: string[] | undefined;
            } | undefined;
            serverNames?: string[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "defaultHandler" | "sniHandlers">, never>>(object: I): TlsListener;
};
export declare const StreamListener: {
    $type: "yandex.cloud.apploadbalancer.v1.StreamListener";
    encode(message: StreamListener, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamListener;
    fromJSON(object: any): StreamListener;
    toJSON(message: StreamListener): unknown;
    fromPartial<I extends {
        handler?: {
            backendGroupId?: string | undefined;
        } | undefined;
    } & {
        handler?: ({
            backendGroupId?: string | undefined;
        } & {
            backendGroupId?: string | undefined;
        } & Record<Exclude<keyof I["handler"], "$type" | "backendGroupId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "handler">, never>>(object: I): StreamListener;
};
export declare const Http2Options: {
    $type: "yandex.cloud.apploadbalancer.v1.Http2Options";
    encode(message: Http2Options, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Http2Options;
    fromJSON(object: any): Http2Options;
    toJSON(message: Http2Options): unknown;
    fromPartial<I extends {
        maxConcurrentStreams?: number | undefined;
    } & {
        maxConcurrentStreams?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxConcurrentStreams">, never>>(object: I): Http2Options;
};
export declare const StreamHandler: {
    $type: "yandex.cloud.apploadbalancer.v1.StreamHandler";
    encode(message: StreamHandler, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamHandler;
    fromJSON(object: any): StreamHandler;
    toJSON(message: StreamHandler): unknown;
    fromPartial<I extends {
        backendGroupId?: string | undefined;
    } & {
        backendGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId">, never>>(object: I): StreamHandler;
};
export declare const HttpHandler: {
    $type: "yandex.cloud.apploadbalancer.v1.HttpHandler";
    encode(message: HttpHandler, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpHandler;
    fromJSON(object: any): HttpHandler;
    toJSON(message: HttpHandler): unknown;
    fromPartial<I extends {
        httpRouterId?: string | undefined;
        http2Options?: {
            maxConcurrentStreams?: number | undefined;
        } | undefined;
        allowHttp10?: boolean | undefined;
        rewriteRequestId?: boolean | undefined;
    } & {
        httpRouterId?: string | undefined;
        http2Options?: ({
            maxConcurrentStreams?: number | undefined;
        } & {
            maxConcurrentStreams?: number | undefined;
        } & Record<Exclude<keyof I["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
        allowHttp10?: boolean | undefined;
        rewriteRequestId?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>>(object: I): HttpHandler;
};
export declare const Redirects: {
    $type: "yandex.cloud.apploadbalancer.v1.Redirects";
    encode(message: Redirects, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Redirects;
    fromJSON(object: any): Redirects;
    toJSON(message: Redirects): unknown;
    fromPartial<I extends {
        httpToHttps?: boolean | undefined;
    } & {
        httpToHttps?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpToHttps">, never>>(object: I): Redirects;
};
export declare const SniMatch: {
    $type: "yandex.cloud.apploadbalancer.v1.SniMatch";
    encode(message: SniMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SniMatch;
    fromJSON(object: any): SniMatch;
    toJSON(message: SniMatch): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        handler?: {
            httpHandler?: {
                httpRouterId?: string | undefined;
                http2Options?: {
                    maxConcurrentStreams?: number | undefined;
                } | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } | undefined;
            streamHandler?: {
                backendGroupId?: string | undefined;
            } | undefined;
            certificateIds?: string[] | undefined;
        } | undefined;
        serverNames?: string[] | undefined;
    } & {
        name?: string | undefined;
        handler?: ({
            httpHandler?: {
                httpRouterId?: string | undefined;
                http2Options?: {
                    maxConcurrentStreams?: number | undefined;
                } | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } | undefined;
            streamHandler?: {
                backendGroupId?: string | undefined;
            } | undefined;
            certificateIds?: string[] | undefined;
        } & {
            httpHandler?: ({
                httpRouterId?: string | undefined;
                http2Options?: {
                    maxConcurrentStreams?: number | undefined;
                } | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } & {
                httpRouterId?: string | undefined;
                http2Options?: ({
                    maxConcurrentStreams?: number | undefined;
                } & {
                    maxConcurrentStreams?: number | undefined;
                } & Record<Exclude<keyof I["handler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                allowHttp10?: boolean | undefined;
                rewriteRequestId?: boolean | undefined;
            } & Record<Exclude<keyof I["handler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
            streamHandler?: ({
                backendGroupId?: string | undefined;
            } & {
                backendGroupId?: string | undefined;
            } & Record<Exclude<keyof I["handler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
            certificateIds?: (string[] & string[] & Record<Exclude<keyof I["handler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["handler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
        serverNames?: (string[] & string[] & Record<Exclude<keyof I["serverNames"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "handler" | "serverNames">, never>>(object: I): SniMatch;
};
export declare const TlsHandler: {
    $type: "yandex.cloud.apploadbalancer.v1.TlsHandler";
    encode(message: TlsHandler, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TlsHandler;
    fromJSON(object: any): TlsHandler;
    toJSON(message: TlsHandler): unknown;
    fromPartial<I extends {
        httpHandler?: {
            httpRouterId?: string | undefined;
            http2Options?: {
                maxConcurrentStreams?: number | undefined;
            } | undefined;
            allowHttp10?: boolean | undefined;
            rewriteRequestId?: boolean | undefined;
        } | undefined;
        streamHandler?: {
            backendGroupId?: string | undefined;
        } | undefined;
        certificateIds?: string[] | undefined;
    } & {
        httpHandler?: ({
            httpRouterId?: string | undefined;
            http2Options?: {
                maxConcurrentStreams?: number | undefined;
            } | undefined;
            allowHttp10?: boolean | undefined;
            rewriteRequestId?: boolean | undefined;
        } & {
            httpRouterId?: string | undefined;
            http2Options?: ({
                maxConcurrentStreams?: number | undefined;
            } & {
                maxConcurrentStreams?: number | undefined;
            } & Record<Exclude<keyof I["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
            allowHttp10?: boolean | undefined;
            rewriteRequestId?: boolean | undefined;
        } & Record<Exclude<keyof I["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
        streamHandler?: ({
            backendGroupId?: string | undefined;
        } & {
            backendGroupId?: string | undefined;
        } & Record<Exclude<keyof I["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
        certificateIds?: (string[] & string[] & Record<Exclude<keyof I["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>>(object: I): TlsHandler;
};
export declare const TargetState: {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState";
    encode(message: TargetState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetState;
    fromJSON(object: any): TargetState;
    toJSON(message: TargetState): unknown;
    fromPartial<I extends {
        status?: {
            zoneStatuses?: {
                status?: TargetState_Status | undefined;
                zoneId?: string | undefined;
                failedActiveHc?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        target?: {
            ipAddress?: string | undefined;
            subnetId?: string | undefined;
            privateIpv4Address?: boolean | undefined;
        } | undefined;
    } & {
        status?: ({
            zoneStatuses?: {
                status?: TargetState_Status | undefined;
                zoneId?: string | undefined;
                failedActiveHc?: boolean | undefined;
            }[] | undefined;
        } & {
            zoneStatuses?: ({
                status?: TargetState_Status | undefined;
                zoneId?: string | undefined;
                failedActiveHc?: boolean | undefined;
            }[] & ({
                status?: TargetState_Status | undefined;
                zoneId?: string | undefined;
                failedActiveHc?: boolean | undefined;
            } & {
                status?: TargetState_Status | undefined;
                zoneId?: string | undefined;
                failedActiveHc?: boolean | undefined;
            } & Record<Exclude<keyof I["status"]["zoneStatuses"][number], "$type" | "status" | "zoneId" | "failedActiveHc">, never>)[] & Record<Exclude<keyof I["status"]["zoneStatuses"], "$type" | keyof {
                status?: TargetState_Status | undefined;
                zoneId?: string | undefined;
                failedActiveHc?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["status"], "$type" | "zoneStatuses">, never>) | undefined;
        target?: ({
            ipAddress?: string | undefined;
            subnetId?: string | undefined;
            privateIpv4Address?: boolean | undefined;
        } & {
            ipAddress?: string | undefined;
            subnetId?: string | undefined;
            privateIpv4Address?: boolean | undefined;
        } & Record<Exclude<keyof I["target"], "$type" | "ipAddress" | "subnetId" | "privateIpv4Address">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "status" | "target">, never>>(object: I): TargetState;
};
export declare const TargetState_HealthcheckStatus: {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState.HealthcheckStatus";
    encode(message: TargetState_HealthcheckStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetState_HealthcheckStatus;
    fromJSON(object: any): TargetState_HealthcheckStatus;
    toJSON(message: TargetState_HealthcheckStatus): unknown;
    fromPartial<I extends {
        zoneStatuses?: {
            status?: TargetState_Status | undefined;
            zoneId?: string | undefined;
            failedActiveHc?: boolean | undefined;
        }[] | undefined;
    } & {
        zoneStatuses?: ({
            status?: TargetState_Status | undefined;
            zoneId?: string | undefined;
            failedActiveHc?: boolean | undefined;
        }[] & ({
            status?: TargetState_Status | undefined;
            zoneId?: string | undefined;
            failedActiveHc?: boolean | undefined;
        } & {
            status?: TargetState_Status | undefined;
            zoneId?: string | undefined;
            failedActiveHc?: boolean | undefined;
        } & Record<Exclude<keyof I["zoneStatuses"][number], "$type" | "status" | "zoneId" | "failedActiveHc">, never>)[] & Record<Exclude<keyof I["zoneStatuses"], "$type" | keyof {
            status?: TargetState_Status | undefined;
            zoneId?: string | undefined;
            failedActiveHc?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "zoneStatuses">, never>>(object: I): TargetState_HealthcheckStatus;
};
export declare const TargetState_ZoneHealthcheckStatus: {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState.ZoneHealthcheckStatus";
    encode(message: TargetState_ZoneHealthcheckStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetState_ZoneHealthcheckStatus;
    fromJSON(object: any): TargetState_ZoneHealthcheckStatus;
    toJSON(message: TargetState_ZoneHealthcheckStatus): unknown;
    fromPartial<I extends {
        status?: TargetState_Status | undefined;
        zoneId?: string | undefined;
        failedActiveHc?: boolean | undefined;
    } & {
        status?: TargetState_Status | undefined;
        zoneId?: string | undefined;
        failedActiveHc?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "status" | "zoneId" | "failedActiveHc">, never>>(object: I): TargetState_ZoneHealthcheckStatus;
};
export declare const AutoScalePolicy: {
    $type: "yandex.cloud.apploadbalancer.v1.AutoScalePolicy";
    encode(message: AutoScalePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AutoScalePolicy;
    fromJSON(object: any): AutoScalePolicy;
    toJSON(message: AutoScalePolicy): unknown;
    fromPartial<I extends {
        minZoneSize?: number | undefined;
        maxSize?: number | undefined;
    } & {
        minZoneSize?: number | undefined;
        maxSize?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "minZoneSize" | "maxSize">, never>>(object: I): AutoScalePolicy;
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
