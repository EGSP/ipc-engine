/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { AllocationPolicy, AutoScalePolicy, TlsHandler, LoadBalancer, HttpListener, TlsListener, StreamListener, TargetState } from "../../../../yandex/cloud/apploadbalancer/v1/load_balancer";
import { LogOptions } from "../../../../yandex/cloud/apploadbalancer/v1/logging";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetLoadBalancerRequest {
    $type: "yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest";
    /**
     * ID of the application load balancer to return.
     *
     * To get the application load balancer ID, make a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
}
export interface ListLoadBalancersRequest {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest";
    /**
     * ID of the folder to list application load balancers in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListLoadBalancersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListLoadBalancersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters application load balancers listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [LoadBalancer.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-load-balancer`.
     */
    filter: string;
}
export interface ListLoadBalancersResponse {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse";
    /** List of application load balancers in the specified folder. */
    loadBalancers: LoadBalancer[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListLoadBalancersRequest.page_size], use `next_page_token` as the value
     * for the [ListLoadBalancersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteLoadBalancerRequest {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest";
    /**
     * ID of the application load balancer to delete.
     *
     * To get the application load balancer ID, make a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
}
export interface DeleteLoadBalancerMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata";
    /** ID of the application load balancer that is being deleted. */
    loadBalancerId: string;
}
export interface UpdateLoadBalancerRequest {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest";
    /**
     * ID of the application load balancer to update.
     *
     * To get the application load balancer ID, make a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
    /** Field mask that specifies which attributes of the application load balancer should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the application load balancer.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the application load balancer. */
    description: string;
    /**
     * New application load balancer labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [LoadBalancerService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * New listeners for the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
     *
     * Existing list of listeners is completely replaced by the specified list, so if you just want to add, update,
     * or remove a listener, make a [LoadBalancerService.AddListener] request,
     * a [LoadBalancerService.UpdateListener] request, or a [LoadBalancerService.RemoveListener] request.
     */
    listenerSpecs: ListenerSpec[];
    /**
     * New locality settings of the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
     *
     * Existing locality settings are completely replaced by the specified settings,
     * so if you just want to add or remove an allocation policy:
     * 1. Get the current settings with a [LoadBalancerService.Get] request.
     * 2. Add or remove a policy in this set.
     * 3. Send the new set in this field.
     */
    allocationPolicy?: AllocationPolicy;
    /**
     * ID's of new security groups attributed to the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
     *
     * Existing list of security groups is completely replaced by the specified list,
     * so if you just want to add or remove an allocation policy:
     * 1. Get the current set of security groups with a [LoadBalancerService.Get] request.
     * 2. Add or remove a group in this set.
     * 3. Send the new set in this field.
     */
    securityGroupIds: string[];
    /**
     * New scaling settings of the application load balancer.
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
export interface UpdateLoadBalancerRequest_LabelsEntry {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateLoadBalancerMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata";
    /** ID of the application load balancer that is being updated. */
    loadBalancerId: string;
}
export interface CreateLoadBalancerRequest {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest";
    /**
     * ID of the folder to create an application load balancer in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the application load balancer.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the application load balancer. */
    description: string;
    /**
     * Application load balancer labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the region that the application load balancer is located at.
     *
     * The only supported value is `ru-central1`.
     */
    regionId: string;
    /** ID of the network that the application load balancer belongs to. */
    networkId: string;
    /**
     * Listeners that belong to the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
     */
    listenerSpecs: ListenerSpec[];
    /**
     * Locality settings of the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
     */
    allocationPolicy?: AllocationPolicy;
    /**
     * ID's of the security groups attributed to the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
     */
    securityGroupIds: string[];
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
export interface CreateLoadBalancerRequest_LabelsEntry {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateLoadBalancerMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata";
    /** ID of the application load balancer that is being created. */
    loadBalancerId: string;
}
export interface StartLoadBalancerRequest {
    $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest";
    /**
     * ID of the application load balancer to start.
     *
     * The application load balancer must have a `STOPPED` status ([LoadBalancer.status]).
     *
     * To get the application load balancer ID, make a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
}
export interface StartLoadBalancerMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata";
    /** ID of the application load balancer that is being started. */
    loadBalancerId: string;
}
export interface StopLoadBalancerRequest {
    $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest";
    /**
     * ID of the application load balancer to stop.
     *
     * The application load balancer must have an `ACTIVE` status ([LoadBalancer.status]).
     *
     * To get the application load balancer ID, make a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
}
export interface StopLoadBalancerMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata";
    /** ID of the application load balancer that is being stopped. */
    loadBalancerId: string;
}
export interface AddListenerRequest {
    $type: "yandex.cloud.apploadbalancer.v1.AddListenerRequest";
    /** ID of the application load balancer to add a listener to. */
    loadBalancerId: string;
    /** Listener to add to the application load balancer. */
    listenerSpec?: ListenerSpec;
}
export interface AddListenerMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.AddListenerMetadata";
    /** ID of the application load balancer that the listener is being added to. */
    loadBalancerId: string;
    /** Name of the listener that is being added to the application load balancer. */
    listenerName: string;
}
export interface RemoveListenerRequest {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerRequest";
    /** ID of the application load balancer to remove the listener from. */
    loadBalancerId: string;
    /** Name of the listener to remove from the application load balancer. */
    name: string;
}
export interface RemoveListenerMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata";
    /** ID of the application load balancer that the listener is being removed from. */
    loadBalancerId: string;
    /** Name of the listener that is being removed from the application load balancer. */
    listenerName: string;
}
export interface UpdateListenerRequest {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerRequest";
    /** ID of the application load balancer to update the listener in. */
    loadBalancerId: string;
    /** Field mask that specifies which attributes of the listener should be updated. */
    updateMask?: FieldMask;
    /** New attributes of the listener. */
    listenerSpec?: ListenerSpec;
}
export interface UpdateListenerMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata";
    /** ID of the application load balancer that the listener is being updated in. */
    loadBalancerId: string;
    /** Name of the listener that is being updated. */
    listenerName: string;
}
export interface AddressSpec {
    $type: "yandex.cloud.apploadbalancer.v1.AddressSpec";
    /** Public IPv4 endpoint address. */
    externalIpv4AddressSpec?: ExternalIpv4AddressSpec | undefined;
    /**
     * Internal IPv4 endpoint address.
     *
     * To enable the use of listeners with internal addresses, [contact support](https://console.cloud.yandex.ru/support).
     */
    internalIpv4AddressSpec?: InternalIpv4AddressSpec | undefined;
    /** Public IPv6 endpoint address. */
    externalIpv6AddressSpec?: ExternalIpv6AddressSpec | undefined;
}
export interface ExternalIpv4AddressSpec {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec";
    /** IPv4 address. */
    address: string;
}
export interface InternalIpv4AddressSpec {
    $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec";
    /** IPv4 address. */
    address: string;
    /** ID of the subnet that the address belongs to. */
    subnetId: string;
}
export interface ExternalIpv6AddressSpec {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec";
    /** IPv6 address. */
    address: string;
}
export interface EndpointSpec {
    $type: "yandex.cloud.apploadbalancer.v1.EndpointSpec";
    /** Endpoint public (external) and internal addresses. */
    addressSpecs: AddressSpec[];
    /** Endpoint ports. */
    ports: number[];
}
export interface ListenerSpec {
    $type: "yandex.cloud.apploadbalancer.v1.ListenerSpec";
    /** Name of the listener. The name is unique within the application load balancer. */
    name: string;
    /**
     * Endpoints of the listener.
     *
     * Endpoints are defined by their IP addresses and ports.
     */
    endpointSpecs: EndpointSpec[];
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
export interface GetTargetStatesRequest {
    $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest";
    /** ID of the application load balancer that the backend group is attributed to. */
    loadBalancerId: string;
    /** ID of the backend group that the target group is attributed to. */
    backendGroupId: string;
    /** ID of the target group to get target states of. */
    targetGroupId: string;
}
export interface GetTargetStatesResponse {
    $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse";
    /** Target states of the specified target group. */
    targetStates: TargetState[];
}
export interface AddSniMatchRequest {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchRequest";
    /** ID of the application load balancer to add a SNI handler to. */
    loadBalancerId: string;
    /** Name of the listener to add a SNI handler to. */
    listenerName: string;
    /** Name of the SNI handler to add. */
    name: string;
    /** Server names that are matched by the SNI handler. */
    serverNames: string[];
    /** Settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
    handler?: TlsHandler;
}
export interface AddSniMatchMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata";
    /** ID of the application load balancer that the SNI handler is being added to. */
    loadBalancerId: string;
    /** Name of the listener that the SNI handler is being added to. */
    listenerName: string;
    /** Name of the SNI handler that is being added to the listener. */
    sniMatchName: string;
}
export interface RemoveSniMatchRequest {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest";
    /** ID of the application load balancer to remove the SNI handler from. */
    loadBalancerId: string;
    /** Name of the listener te remove the SNI handler from. */
    listenerName: string;
    /** Name of the SNI handler to remove. */
    sniMatchName: string;
}
export interface RemoveSniMatchMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata";
    /** ID of the application load balancer that the SNI handler is being removed from. */
    loadBalancerId: string;
    /** Name of the listener that the SNI handler is being removed from. */
    listenerName: string;
    /** Name of the SNI handler that is being removed. */
    sniMatchName: string;
}
export interface UpdateSniMatchRequest {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest";
    /** ID of the application load balancer to update the SNI handler in. */
    loadBalancerId: string;
    /** Name of the listener to update the SNI handler in. */
    listenerName: string;
    /** Name of the SNI handler to update. */
    name: string;
    /** Field mask that specifies which attributes of the SNI handler should be updated. */
    updateMask?: FieldMask;
    /**
     * New server names that are matched by the SNI handler.
     *
     * Existing set of server names is completely replaced by the provided set, so if you just want
     * to add or remove a server name:
     * 1. Get the current set of server names with a [LoadBalancerService.Get] request.
     * 2. Add or remove a server name in this set.
     * 3. Send the new set in this field.
     */
    serverNames: string[];
    /** New settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
    handler?: TlsHandler;
}
export interface UpdateSniMatchMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata";
    /** ID of the application load balancer that the SNI handler is being updated in. */
    loadBalancerId: string;
    /** Name of the listener that the SNI handler is being updated in. */
    listenerName: string;
    /** Name of the SNI handler that is being updated. */
    sniMatchName: string;
}
export interface ListLoadBalancerOperationsRequest {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest";
    /**
     * ID of the application load balancer to get operations for.
     *
     * To get the application load balancer ID, use a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListLoadBalancerOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListLoadBalancerOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListLoadBalancerOperationsResponse {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse";
    /** List of operations for the specified application load balancer. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListLoadBalancerOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListLoadBalancerOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest";
    encode(message: GetLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLoadBalancerRequest;
    fromJSON(object: any): GetLoadBalancerRequest;
    toJSON(message: GetLoadBalancerRequest): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId">, never>>(object: I): GetLoadBalancerRequest;
};
export declare const ListLoadBalancersRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest";
    encode(message: ListLoadBalancersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancersRequest;
    fromJSON(object: any): ListLoadBalancersRequest;
    toJSON(message: ListLoadBalancersRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListLoadBalancersRequest;
};
export declare const ListLoadBalancersResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse";
    encode(message: ListLoadBalancersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancersResponse;
    fromJSON(object: any): ListLoadBalancersResponse;
    toJSON(message: ListLoadBalancersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        loadBalancers?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").LoadBalancer_Status | undefined;
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
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        loadBalancers?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").LoadBalancer_Status | undefined;
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
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").LoadBalancer_Status | undefined;
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
            status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").LoadBalancer_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["loadBalancers"][number]["labels"], string | number>, never>) | undefined;
            logGroupId?: string | undefined;
            regionId?: string | undefined;
            networkId?: string | undefined;
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["loadBalancers"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["http"]["handler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["http"]["handler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                    redirects?: ({
                        httpToHttps?: boolean | undefined;
                    } & {
                        httpToHttps?: boolean | undefined;
                    } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["http"]["redirects"], "$type" | "httpToHttps">, never>) | undefined;
                } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["http"], "$type" | "handler" | "redirects">, never>) | undefined;
                stream?: ({
                    handler?: {
                        backendGroupId?: string | undefined;
                    } | undefined;
                } & {
                    handler?: ({
                        backendGroupId?: string | undefined;
                    } & {
                        backendGroupId?: string | undefined;
                    } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["stream"]["handler"], "$type" | "backendGroupId">, never>) | undefined;
                } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["stream"], "$type" | "handler">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["defaultHandler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["defaultHandler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                        streamHandler?: ({
                            backendGroupId?: string | undefined;
                        } & {
                            backendGroupId?: string | undefined;
                        } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["defaultHandler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                        certificateIds?: (string[] & string[] & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["defaultHandler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["defaultHandler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["sniHandlers"][number]["handler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                                allowHttp10?: boolean | undefined;
                                rewriteRequestId?: boolean | undefined;
                            } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["sniHandlers"][number]["handler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                            streamHandler?: ({
                                backendGroupId?: string | undefined;
                            } & {
                                backendGroupId?: string | undefined;
                            } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["sniHandlers"][number]["handler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                            certificateIds?: (string[] & string[] & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["sniHandlers"][number]["handler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["sniHandlers"][number]["handler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
                        serverNames?: (string[] & string[] & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["sniHandlers"][number]["serverNames"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["sniHandlers"][number], "$type" | "name" | "handler" | "serverNames">, never>)[] & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"]["sniHandlers"], "$type" | keyof {
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
                } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["tls"], "$type" | "defaultHandler" | "sniHandlers">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["endpoints"][number]["addresses"][number]["externalIpv4Address"], "$type" | "address">, never>) | undefined;
                        internalIpv4Address?: ({
                            subnetId?: string | undefined;
                            address?: string | undefined;
                        } & {
                            subnetId?: string | undefined;
                            address?: string | undefined;
                        } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["endpoints"][number]["addresses"][number]["internalIpv4Address"], "$type" | "subnetId" | "address">, never>) | undefined;
                        externalIpv6Address?: ({
                            address?: string | undefined;
                        } & {
                            address?: string | undefined;
                        } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["endpoints"][number]["addresses"][number]["externalIpv6Address"], "$type" | "address">, never>) | undefined;
                    } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["endpoints"][number]["addresses"][number], "$type" | "externalIpv4Address" | "internalIpv4Address" | "externalIpv6Address">, never>)[] & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["endpoints"][number]["addresses"], "$type" | keyof {
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
                    ports?: (number[] & number[] & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["endpoints"][number]["ports"], "$type" | keyof number[]>, never>) | undefined;
                } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["endpoints"][number], "$type" | "addresses" | "ports">, never>)[] & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number]["endpoints"], "$type" | keyof {
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
            } & Record<Exclude<keyof I["loadBalancers"][number]["listeners"][number], "$type" | "name" | "http" | "stream" | "tls" | "endpoints">, never>)[] & Record<Exclude<keyof I["loadBalancers"][number]["listeners"], "$type" | keyof {
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
                } & Record<Exclude<keyof I["loadBalancers"][number]["allocationPolicy"]["locations"][number], "$type" | "subnetId" | "zoneId" | "disableTraffic">, never>)[] & Record<Exclude<keyof I["loadBalancers"][number]["allocationPolicy"]["locations"], "$type" | keyof {
                    subnetId?: string | undefined;
                    zoneId?: string | undefined;
                    disableTraffic?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["loadBalancers"][number]["allocationPolicy"], "$type" | "locations">, never>) | undefined;
            autoScalePolicy?: ({
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
            } & {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
            } & Record<Exclude<keyof I["loadBalancers"][number]["autoScalePolicy"], "$type" | "minZoneSize" | "maxSize">, never>) | undefined;
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
                    httpCodes?: (number[] & number[] & Record<Exclude<keyof I["loadBalancers"][number]["logOptions"]["discardRules"][number]["httpCodes"], "$type" | keyof number[]>, never>) | undefined;
                    httpCodeIntervals?: (import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[] & import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[] & Record<Exclude<keyof I["loadBalancers"][number]["logOptions"]["discardRules"][number]["httpCodeIntervals"], "$type" | keyof import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[]>, never>) | undefined;
                    grpcCodes?: (import("../../../../google/rpc/code").Code[] & import("../../../../google/rpc/code").Code[] & Record<Exclude<keyof I["loadBalancers"][number]["logOptions"]["discardRules"][number]["grpcCodes"], "$type" | keyof import("../../../../google/rpc/code").Code[]>, never>) | undefined;
                    discardPercent?: number | undefined;
                } & Record<Exclude<keyof I["loadBalancers"][number]["logOptions"]["discardRules"][number], "$type" | "httpCodes" | "httpCodeIntervals" | "grpcCodes" | "discardPercent">, never>)[] & Record<Exclude<keyof I["loadBalancers"][number]["logOptions"]["discardRules"], "$type" | keyof {
                    httpCodes?: number[] | undefined;
                    httpCodeIntervals?: import("../../../../yandex/cloud/apploadbalancer/v1/logging").HttpCodeInterval[] | undefined;
                    grpcCodes?: import("../../../../google/rpc/code").Code[] | undefined;
                    discardPercent?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["loadBalancers"][number]["logOptions"], "$type" | "logGroupId" | "disable" | "discardRules">, never>) | undefined;
        } & Record<Exclude<keyof I["loadBalancers"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "logGroupId" | "regionId" | "networkId" | "securityGroupIds" | "listeners" | "allocationPolicy" | "autoScalePolicy" | "logOptions">, never>)[] & Record<Exclude<keyof I["loadBalancers"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").LoadBalancer_Status | undefined;
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "loadBalancers">, never>>(object: I): ListLoadBalancersResponse;
};
export declare const DeleteLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest";
    encode(message: DeleteLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLoadBalancerRequest;
    fromJSON(object: any): DeleteLoadBalancerRequest;
    toJSON(message: DeleteLoadBalancerRequest): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId">, never>>(object: I): DeleteLoadBalancerRequest;
};
export declare const DeleteLoadBalancerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata";
    encode(message: DeleteLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLoadBalancerMetadata;
    fromJSON(object: any): DeleteLoadBalancerMetadata;
    toJSON(message: DeleteLoadBalancerMetadata): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId">, never>>(object: I): DeleteLoadBalancerMetadata;
};
export declare const UpdateLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest";
    encode(message: UpdateLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLoadBalancerRequest;
    fromJSON(object: any): UpdateLoadBalancerRequest;
    toJSON(message: UpdateLoadBalancerRequest): unknown;
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
        securityGroupIds?: string[] | undefined;
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
        loadBalancerId?: string | undefined;
        listenerSpecs?: {
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
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
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
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
        loadBalancerId?: string | undefined;
        listenerSpecs?: ({
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["http"]["handler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["http"]["handler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                redirects?: ({
                    httpToHttps?: boolean | undefined;
                } & {
                    httpToHttps?: boolean | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["http"]["redirects"], "$type" | "httpToHttps">, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpecs"][number]["http"], "$type" | "handler" | "redirects">, never>) | undefined;
            stream?: ({
                handler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
            } & {
                handler?: ({
                    backendGroupId?: string | undefined;
                } & {
                    backendGroupId?: string | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["stream"]["handler"], "$type" | "backendGroupId">, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpecs"][number]["stream"], "$type" | "handler">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["defaultHandler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["defaultHandler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                    streamHandler?: ({
                        backendGroupId?: string | undefined;
                    } & {
                        backendGroupId?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["defaultHandler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                    certificateIds?: (string[] & string[] & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["defaultHandler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["defaultHandler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["handler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["handler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                        streamHandler?: ({
                            backendGroupId?: string | undefined;
                        } & {
                            backendGroupId?: string | undefined;
                        } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["handler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                        certificateIds?: (string[] & string[] & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["handler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["handler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
                    serverNames?: (string[] & string[] & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["serverNames"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number], "$type" | "name" | "handler" | "serverNames">, never>)[] & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"], "$type" | keyof {
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
            } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"], "$type" | "defaultHandler" | "sniHandlers">, never>) | undefined;
            endpointSpecs?: ({
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                ports?: (number[] & number[] & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["ports"], "$type" | keyof number[]>, never>) | undefined;
                addressSpecs?: ({
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] & ({
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                } & {
                    externalIpv4AddressSpec?: ({
                        address?: string | undefined;
                    } & {
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["addressSpecs"][number]["externalIpv4AddressSpec"], "$type" | "address">, never>) | undefined;
                    internalIpv4AddressSpec?: ({
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } & {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["addressSpecs"][number]["internalIpv4AddressSpec"], "$type" | "subnetId" | "address">, never>) | undefined;
                    externalIpv6AddressSpec?: ({
                        address?: string | undefined;
                    } & {
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["addressSpecs"][number]["externalIpv6AddressSpec"], "$type" | "address">, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["addressSpecs"][number], "$type" | "externalIpv4AddressSpec" | "internalIpv4AddressSpec" | "externalIpv6AddressSpec">, never>)[] & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["addressSpecs"], "$type" | keyof {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number], "$type" | "ports" | "addressSpecs">, never>)[] & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"], "$type" | keyof {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["listenerSpecs"][number], "$type" | "name" | "http" | "stream" | "tls" | "endpointSpecs">, never>)[] & Record<Exclude<keyof I["listenerSpecs"], "$type" | keyof {
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "securityGroupIds" | "allocationPolicy" | "autoScalePolicy" | "logOptions" | "loadBalancerId" | "listenerSpecs">, never>>(object: I): UpdateLoadBalancerRequest;
};
export declare const UpdateLoadBalancerRequest_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry";
    encode(message: UpdateLoadBalancerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLoadBalancerRequest_LabelsEntry;
    fromJSON(object: any): UpdateLoadBalancerRequest_LabelsEntry;
    toJSON(message: UpdateLoadBalancerRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateLoadBalancerRequest_LabelsEntry;
};
export declare const UpdateLoadBalancerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata";
    encode(message: UpdateLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLoadBalancerMetadata;
    fromJSON(object: any): UpdateLoadBalancerMetadata;
    toJSON(message: UpdateLoadBalancerMetadata): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId">, never>>(object: I): UpdateLoadBalancerMetadata;
};
export declare const CreateLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest";
    encode(message: CreateLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLoadBalancerRequest;
    fromJSON(object: any): CreateLoadBalancerRequest;
    toJSON(message: CreateLoadBalancerRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        regionId?: string | undefined;
        networkId?: string | undefined;
        securityGroupIds?: string[] | undefined;
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
        listenerSpecs?: {
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
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
        regionId?: string | undefined;
        networkId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
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
        listenerSpecs?: ({
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["http"]["handler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["http"]["handler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                redirects?: ({
                    httpToHttps?: boolean | undefined;
                } & {
                    httpToHttps?: boolean | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["http"]["redirects"], "$type" | "httpToHttps">, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpecs"][number]["http"], "$type" | "handler" | "redirects">, never>) | undefined;
            stream?: ({
                handler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
            } & {
                handler?: ({
                    backendGroupId?: string | undefined;
                } & {
                    backendGroupId?: string | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["stream"]["handler"], "$type" | "backendGroupId">, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpecs"][number]["stream"], "$type" | "handler">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["defaultHandler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["defaultHandler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                    streamHandler?: ({
                        backendGroupId?: string | undefined;
                    } & {
                        backendGroupId?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["defaultHandler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                    certificateIds?: (string[] & string[] & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["defaultHandler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["defaultHandler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["handler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["handler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                        streamHandler?: ({
                            backendGroupId?: string | undefined;
                        } & {
                            backendGroupId?: string | undefined;
                        } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["handler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                        certificateIds?: (string[] & string[] & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["handler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["handler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
                    serverNames?: (string[] & string[] & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number]["serverNames"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"][number], "$type" | "name" | "handler" | "serverNames">, never>)[] & Record<Exclude<keyof I["listenerSpecs"][number]["tls"]["sniHandlers"], "$type" | keyof {
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
            } & Record<Exclude<keyof I["listenerSpecs"][number]["tls"], "$type" | "defaultHandler" | "sniHandlers">, never>) | undefined;
            endpointSpecs?: ({
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                ports?: (number[] & number[] & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["ports"], "$type" | keyof number[]>, never>) | undefined;
                addressSpecs?: ({
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] & ({
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                } & {
                    externalIpv4AddressSpec?: ({
                        address?: string | undefined;
                    } & {
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["addressSpecs"][number]["externalIpv4AddressSpec"], "$type" | "address">, never>) | undefined;
                    internalIpv4AddressSpec?: ({
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } & {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["addressSpecs"][number]["internalIpv4AddressSpec"], "$type" | "subnetId" | "address">, never>) | undefined;
                    externalIpv6AddressSpec?: ({
                        address?: string | undefined;
                    } & {
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["addressSpecs"][number]["externalIpv6AddressSpec"], "$type" | "address">, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["addressSpecs"][number], "$type" | "externalIpv4AddressSpec" | "internalIpv4AddressSpec" | "externalIpv6AddressSpec">, never>)[] & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number]["addressSpecs"], "$type" | keyof {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"][number], "$type" | "ports" | "addressSpecs">, never>)[] & Record<Exclude<keyof I["listenerSpecs"][number]["endpointSpecs"], "$type" | keyof {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["listenerSpecs"][number], "$type" | "name" | "http" | "stream" | "tls" | "endpointSpecs">, never>)[] & Record<Exclude<keyof I["listenerSpecs"], "$type" | keyof {
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "regionId" | "networkId" | "securityGroupIds" | "allocationPolicy" | "autoScalePolicy" | "logOptions" | "listenerSpecs">, never>>(object: I): CreateLoadBalancerRequest;
};
export declare const CreateLoadBalancerRequest_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry";
    encode(message: CreateLoadBalancerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLoadBalancerRequest_LabelsEntry;
    fromJSON(object: any): CreateLoadBalancerRequest_LabelsEntry;
    toJSON(message: CreateLoadBalancerRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateLoadBalancerRequest_LabelsEntry;
};
export declare const CreateLoadBalancerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata";
    encode(message: CreateLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLoadBalancerMetadata;
    fromJSON(object: any): CreateLoadBalancerMetadata;
    toJSON(message: CreateLoadBalancerMetadata): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId">, never>>(object: I): CreateLoadBalancerMetadata;
};
export declare const StartLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest";
    encode(message: StartLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartLoadBalancerRequest;
    fromJSON(object: any): StartLoadBalancerRequest;
    toJSON(message: StartLoadBalancerRequest): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId">, never>>(object: I): StartLoadBalancerRequest;
};
export declare const StartLoadBalancerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata";
    encode(message: StartLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartLoadBalancerMetadata;
    fromJSON(object: any): StartLoadBalancerMetadata;
    toJSON(message: StartLoadBalancerMetadata): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId">, never>>(object: I): StartLoadBalancerMetadata;
};
export declare const StopLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest";
    encode(message: StopLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopLoadBalancerRequest;
    fromJSON(object: any): StopLoadBalancerRequest;
    toJSON(message: StopLoadBalancerRequest): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId">, never>>(object: I): StopLoadBalancerRequest;
};
export declare const StopLoadBalancerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata";
    encode(message: StopLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopLoadBalancerMetadata;
    fromJSON(object: any): StopLoadBalancerMetadata;
    toJSON(message: StopLoadBalancerMetadata): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId">, never>>(object: I): StopLoadBalancerMetadata;
};
export declare const AddListenerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.AddListenerRequest";
    encode(message: AddListenerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddListenerRequest;
    fromJSON(object: any): AddListenerRequest;
    toJSON(message: AddListenerRequest): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
        listenerSpec?: {
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        loadBalancerId?: string | undefined;
        listenerSpec?: ({
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
                    } & Record<Exclude<keyof I["listenerSpec"]["http"]["handler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["http"]["handler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                redirects?: ({
                    httpToHttps?: boolean | undefined;
                } & {
                    httpToHttps?: boolean | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["http"]["redirects"], "$type" | "httpToHttps">, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpec"]["http"], "$type" | "handler" | "redirects">, never>) | undefined;
            stream?: ({
                handler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
            } & {
                handler?: ({
                    backendGroupId?: string | undefined;
                } & {
                    backendGroupId?: string | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["stream"]["handler"], "$type" | "backendGroupId">, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpec"]["stream"], "$type" | "handler">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["listenerSpec"]["tls"]["defaultHandler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["tls"]["defaultHandler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                    streamHandler?: ({
                        backendGroupId?: string | undefined;
                    } & {
                        backendGroupId?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["tls"]["defaultHandler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                    certificateIds?: (string[] & string[] & Record<Exclude<keyof I["listenerSpec"]["tls"]["defaultHandler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["tls"]["defaultHandler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["handler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["handler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                        streamHandler?: ({
                            backendGroupId?: string | undefined;
                        } & {
                            backendGroupId?: string | undefined;
                        } & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["handler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                        certificateIds?: (string[] & string[] & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["handler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["handler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
                    serverNames?: (string[] & string[] & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["serverNames"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number], "$type" | "name" | "handler" | "serverNames">, never>)[] & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"], "$type" | keyof {
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
            } & Record<Exclude<keyof I["listenerSpec"]["tls"], "$type" | "defaultHandler" | "sniHandlers">, never>) | undefined;
            endpointSpecs?: ({
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                ports?: (number[] & number[] & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["ports"], "$type" | keyof number[]>, never>) | undefined;
                addressSpecs?: ({
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] & ({
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                } & {
                    externalIpv4AddressSpec?: ({
                        address?: string | undefined;
                    } & {
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["addressSpecs"][number]["externalIpv4AddressSpec"], "$type" | "address">, never>) | undefined;
                    internalIpv4AddressSpec?: ({
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } & {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["addressSpecs"][number]["internalIpv4AddressSpec"], "$type" | "subnetId" | "address">, never>) | undefined;
                    externalIpv6AddressSpec?: ({
                        address?: string | undefined;
                    } & {
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["addressSpecs"][number]["externalIpv6AddressSpec"], "$type" | "address">, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["addressSpecs"][number], "$type" | "externalIpv4AddressSpec" | "internalIpv4AddressSpec" | "externalIpv6AddressSpec">, never>)[] & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["addressSpecs"], "$type" | keyof {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number], "$type" | "ports" | "addressSpecs">, never>)[] & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"], "$type" | keyof {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["listenerSpec"], "$type" | "name" | "http" | "stream" | "tls" | "endpointSpecs">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId" | "listenerSpec">, never>>(object: I): AddListenerRequest;
};
export declare const AddListenerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.AddListenerMetadata";
    encode(message: AddListenerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddListenerMetadata;
    fromJSON(object: any): AddListenerMetadata;
    toJSON(message: AddListenerMetadata): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId" | "listenerName">, never>>(object: I): AddListenerMetadata;
};
export declare const RemoveListenerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerRequest";
    encode(message: RemoveListenerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveListenerRequest;
    fromJSON(object: any): RemoveListenerRequest;
    toJSON(message: RemoveListenerRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        loadBalancerId?: string | undefined;
    } & {
        name?: string | undefined;
        loadBalancerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "loadBalancerId">, never>>(object: I): RemoveListenerRequest;
};
export declare const RemoveListenerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata";
    encode(message: RemoveListenerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveListenerMetadata;
    fromJSON(object: any): RemoveListenerMetadata;
    toJSON(message: RemoveListenerMetadata): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId" | "listenerName">, never>>(object: I): RemoveListenerMetadata;
};
export declare const UpdateListenerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerRequest";
    encode(message: UpdateListenerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateListenerRequest;
    fromJSON(object: any): UpdateListenerRequest;
    toJSON(message: UpdateListenerRequest): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        loadBalancerId?: string | undefined;
        listenerSpec?: {
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        loadBalancerId?: string | undefined;
        listenerSpec?: ({
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
            endpointSpecs?: {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
                    } & Record<Exclude<keyof I["listenerSpec"]["http"]["handler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                    allowHttp10?: boolean | undefined;
                    rewriteRequestId?: boolean | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["http"]["handler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                redirects?: ({
                    httpToHttps?: boolean | undefined;
                } & {
                    httpToHttps?: boolean | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["http"]["redirects"], "$type" | "httpToHttps">, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpec"]["http"], "$type" | "handler" | "redirects">, never>) | undefined;
            stream?: ({
                handler?: {
                    backendGroupId?: string | undefined;
                } | undefined;
            } & {
                handler?: ({
                    backendGroupId?: string | undefined;
                } & {
                    backendGroupId?: string | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["stream"]["handler"], "$type" | "backendGroupId">, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpec"]["stream"], "$type" | "handler">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["listenerSpec"]["tls"]["defaultHandler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                        allowHttp10?: boolean | undefined;
                        rewriteRequestId?: boolean | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["tls"]["defaultHandler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                    streamHandler?: ({
                        backendGroupId?: string | undefined;
                    } & {
                        backendGroupId?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["tls"]["defaultHandler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                    certificateIds?: (string[] & string[] & Record<Exclude<keyof I["listenerSpec"]["tls"]["defaultHandler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["tls"]["defaultHandler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["handler"]["httpHandler"]["http2Options"], "$type" | "maxConcurrentStreams">, never>) | undefined;
                            allowHttp10?: boolean | undefined;
                            rewriteRequestId?: boolean | undefined;
                        } & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["handler"]["httpHandler"], "$type" | "httpRouterId" | "http2Options" | "allowHttp10" | "rewriteRequestId">, never>) | undefined;
                        streamHandler?: ({
                            backendGroupId?: string | undefined;
                        } & {
                            backendGroupId?: string | undefined;
                        } & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["handler"]["streamHandler"], "$type" | "backendGroupId">, never>) | undefined;
                        certificateIds?: (string[] & string[] & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["handler"]["certificateIds"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["handler"], "$type" | "httpHandler" | "streamHandler" | "certificateIds">, never>) | undefined;
                    serverNames?: (string[] & string[] & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number]["serverNames"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"][number], "$type" | "name" | "handler" | "serverNames">, never>)[] & Record<Exclude<keyof I["listenerSpec"]["tls"]["sniHandlers"], "$type" | keyof {
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
            } & Record<Exclude<keyof I["listenerSpec"]["tls"], "$type" | "defaultHandler" | "sniHandlers">, never>) | undefined;
            endpointSpecs?: ({
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                ports?: (number[] & number[] & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["ports"], "$type" | keyof number[]>, never>) | undefined;
                addressSpecs?: ({
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] & ({
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                } & {
                    externalIpv4AddressSpec?: ({
                        address?: string | undefined;
                    } & {
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["addressSpecs"][number]["externalIpv4AddressSpec"], "$type" | "address">, never>) | undefined;
                    internalIpv4AddressSpec?: ({
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } & {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["addressSpecs"][number]["internalIpv4AddressSpec"], "$type" | "subnetId" | "address">, never>) | undefined;
                    externalIpv6AddressSpec?: ({
                        address?: string | undefined;
                    } & {
                        address?: string | undefined;
                    } & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["addressSpecs"][number]["externalIpv6AddressSpec"], "$type" | "address">, never>) | undefined;
                } & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["addressSpecs"][number], "$type" | "externalIpv4AddressSpec" | "internalIpv4AddressSpec" | "externalIpv6AddressSpec">, never>)[] & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number]["addressSpecs"], "$type" | keyof {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"][number], "$type" | "ports" | "addressSpecs">, never>)[] & Record<Exclude<keyof I["listenerSpec"]["endpointSpecs"], "$type" | keyof {
                ports?: number[] | undefined;
                addressSpecs?: {
                    externalIpv4AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                    internalIpv4AddressSpec?: {
                        subnetId?: string | undefined;
                        address?: string | undefined;
                    } | undefined;
                    externalIpv6AddressSpec?: {
                        address?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["listenerSpec"], "$type" | "name" | "http" | "stream" | "tls" | "endpointSpecs">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "loadBalancerId" | "listenerSpec">, never>>(object: I): UpdateListenerRequest;
};
export declare const UpdateListenerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata";
    encode(message: UpdateListenerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateListenerMetadata;
    fromJSON(object: any): UpdateListenerMetadata;
    toJSON(message: UpdateListenerMetadata): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId" | "listenerName">, never>>(object: I): UpdateListenerMetadata;
};
export declare const AddressSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.AddressSpec";
    encode(message: AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddressSpec;
    fromJSON(object: any): AddressSpec;
    toJSON(message: AddressSpec): unknown;
    fromPartial<I extends {
        externalIpv4AddressSpec?: {
            address?: string | undefined;
        } | undefined;
        internalIpv4AddressSpec?: {
            subnetId?: string | undefined;
            address?: string | undefined;
        } | undefined;
        externalIpv6AddressSpec?: {
            address?: string | undefined;
        } | undefined;
    } & {
        externalIpv4AddressSpec?: ({
            address?: string | undefined;
        } & {
            address?: string | undefined;
        } & Record<Exclude<keyof I["externalIpv4AddressSpec"], "$type" | "address">, never>) | undefined;
        internalIpv4AddressSpec?: ({
            subnetId?: string | undefined;
            address?: string | undefined;
        } & {
            subnetId?: string | undefined;
            address?: string | undefined;
        } & Record<Exclude<keyof I["internalIpv4AddressSpec"], "$type" | "subnetId" | "address">, never>) | undefined;
        externalIpv6AddressSpec?: ({
            address?: string | undefined;
        } & {
            address?: string | undefined;
        } & Record<Exclude<keyof I["externalIpv6AddressSpec"], "$type" | "address">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "externalIpv4AddressSpec" | "internalIpv4AddressSpec" | "externalIpv6AddressSpec">, never>>(object: I): AddressSpec;
};
export declare const ExternalIpv4AddressSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec";
    encode(message: ExternalIpv4AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv4AddressSpec;
    fromJSON(object: any): ExternalIpv4AddressSpec;
    toJSON(message: ExternalIpv4AddressSpec): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "address">, never>>(object: I): ExternalIpv4AddressSpec;
};
export declare const InternalIpv4AddressSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec";
    encode(message: InternalIpv4AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InternalIpv4AddressSpec;
    fromJSON(object: any): InternalIpv4AddressSpec;
    toJSON(message: InternalIpv4AddressSpec): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        address?: string | undefined;
    } & {
        subnetId?: string | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "address">, never>>(object: I): InternalIpv4AddressSpec;
};
export declare const ExternalIpv6AddressSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec";
    encode(message: ExternalIpv6AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv6AddressSpec;
    fromJSON(object: any): ExternalIpv6AddressSpec;
    toJSON(message: ExternalIpv6AddressSpec): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "address">, never>>(object: I): ExternalIpv6AddressSpec;
};
export declare const EndpointSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.EndpointSpec";
    encode(message: EndpointSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EndpointSpec;
    fromJSON(object: any): EndpointSpec;
    toJSON(message: EndpointSpec): unknown;
    fromPartial<I extends {
        ports?: number[] | undefined;
        addressSpecs?: {
            externalIpv4AddressSpec?: {
                address?: string | undefined;
            } | undefined;
            internalIpv4AddressSpec?: {
                subnetId?: string | undefined;
                address?: string | undefined;
            } | undefined;
            externalIpv6AddressSpec?: {
                address?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        ports?: (number[] & number[] & Record<Exclude<keyof I["ports"], "$type" | keyof number[]>, never>) | undefined;
        addressSpecs?: ({
            externalIpv4AddressSpec?: {
                address?: string | undefined;
            } | undefined;
            internalIpv4AddressSpec?: {
                subnetId?: string | undefined;
                address?: string | undefined;
            } | undefined;
            externalIpv6AddressSpec?: {
                address?: string | undefined;
            } | undefined;
        }[] & ({
            externalIpv4AddressSpec?: {
                address?: string | undefined;
            } | undefined;
            internalIpv4AddressSpec?: {
                subnetId?: string | undefined;
                address?: string | undefined;
            } | undefined;
            externalIpv6AddressSpec?: {
                address?: string | undefined;
            } | undefined;
        } & {
            externalIpv4AddressSpec?: ({
                address?: string | undefined;
            } & {
                address?: string | undefined;
            } & Record<Exclude<keyof I["addressSpecs"][number]["externalIpv4AddressSpec"], "$type" | "address">, never>) | undefined;
            internalIpv4AddressSpec?: ({
                subnetId?: string | undefined;
                address?: string | undefined;
            } & {
                subnetId?: string | undefined;
                address?: string | undefined;
            } & Record<Exclude<keyof I["addressSpecs"][number]["internalIpv4AddressSpec"], "$type" | "subnetId" | "address">, never>) | undefined;
            externalIpv6AddressSpec?: ({
                address?: string | undefined;
            } & {
                address?: string | undefined;
            } & Record<Exclude<keyof I["addressSpecs"][number]["externalIpv6AddressSpec"], "$type" | "address">, never>) | undefined;
        } & Record<Exclude<keyof I["addressSpecs"][number], "$type" | "externalIpv4AddressSpec" | "internalIpv4AddressSpec" | "externalIpv6AddressSpec">, never>)[] & Record<Exclude<keyof I["addressSpecs"], "$type" | keyof {
            externalIpv4AddressSpec?: {
                address?: string | undefined;
            } | undefined;
            internalIpv4AddressSpec?: {
                subnetId?: string | undefined;
                address?: string | undefined;
            } | undefined;
            externalIpv6AddressSpec?: {
                address?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "ports" | "addressSpecs">, never>>(object: I): EndpointSpec;
};
export declare const ListenerSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.ListenerSpec";
    encode(message: ListenerSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListenerSpec;
    fromJSON(object: any): ListenerSpec;
    toJSON(message: ListenerSpec): unknown;
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
        endpointSpecs?: {
            ports?: number[] | undefined;
            addressSpecs?: {
                externalIpv4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4AddressSpec?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
            }[] | undefined;
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
        endpointSpecs?: ({
            ports?: number[] | undefined;
            addressSpecs?: {
                externalIpv4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4AddressSpec?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            ports?: number[] | undefined;
            addressSpecs?: {
                externalIpv4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4AddressSpec?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            ports?: (number[] & number[] & Record<Exclude<keyof I["endpointSpecs"][number]["ports"], "$type" | keyof number[]>, never>) | undefined;
            addressSpecs?: ({
                externalIpv4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4AddressSpec?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
            }[] & ({
                externalIpv4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4AddressSpec?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
            } & {
                externalIpv4AddressSpec?: ({
                    address?: string | undefined;
                } & {
                    address?: string | undefined;
                } & Record<Exclude<keyof I["endpointSpecs"][number]["addressSpecs"][number]["externalIpv4AddressSpec"], "$type" | "address">, never>) | undefined;
                internalIpv4AddressSpec?: ({
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } & {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } & Record<Exclude<keyof I["endpointSpecs"][number]["addressSpecs"][number]["internalIpv4AddressSpec"], "$type" | "subnetId" | "address">, never>) | undefined;
                externalIpv6AddressSpec?: ({
                    address?: string | undefined;
                } & {
                    address?: string | undefined;
                } & Record<Exclude<keyof I["endpointSpecs"][number]["addressSpecs"][number]["externalIpv6AddressSpec"], "$type" | "address">, never>) | undefined;
            } & Record<Exclude<keyof I["endpointSpecs"][number]["addressSpecs"][number], "$type" | "externalIpv4AddressSpec" | "internalIpv4AddressSpec" | "externalIpv6AddressSpec">, never>)[] & Record<Exclude<keyof I["endpointSpecs"][number]["addressSpecs"], "$type" | keyof {
                externalIpv4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4AddressSpec?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["endpointSpecs"][number], "$type" | "ports" | "addressSpecs">, never>)[] & Record<Exclude<keyof I["endpointSpecs"], "$type" | keyof {
            ports?: number[] | undefined;
            addressSpecs?: {
                externalIpv4AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
                internalIpv4AddressSpec?: {
                    subnetId?: string | undefined;
                    address?: string | undefined;
                } | undefined;
                externalIpv6AddressSpec?: {
                    address?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "http" | "stream" | "tls" | "endpointSpecs">, never>>(object: I): ListenerSpec;
};
export declare const GetTargetStatesRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest";
    encode(message: GetTargetStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTargetStatesRequest;
    fromJSON(object: any): GetTargetStatesRequest;
    toJSON(message: GetTargetStatesRequest): unknown;
    fromPartial<I extends {
        backendGroupId?: string | undefined;
        loadBalancerId?: string | undefined;
        targetGroupId?: string | undefined;
    } & {
        backendGroupId?: string | undefined;
        loadBalancerId?: string | undefined;
        targetGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId" | "loadBalancerId" | "targetGroupId">, never>>(object: I): GetTargetStatesRequest;
};
export declare const GetTargetStatesResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse";
    encode(message: GetTargetStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTargetStatesResponse;
    fromJSON(object: any): GetTargetStatesResponse;
    toJSON(message: GetTargetStatesResponse): unknown;
    fromPartial<I extends {
        targetStates?: {
            status?: {
                zoneStatuses?: {
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").TargetState_Status | undefined;
                    zoneId?: string | undefined;
                    failedActiveHc?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            target?: {
                ipAddress?: string | undefined;
                subnetId?: string | undefined;
                privateIpv4Address?: boolean | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        targetStates?: ({
            status?: {
                zoneStatuses?: {
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").TargetState_Status | undefined;
                    zoneId?: string | undefined;
                    failedActiveHc?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            target?: {
                ipAddress?: string | undefined;
                subnetId?: string | undefined;
                privateIpv4Address?: boolean | undefined;
            } | undefined;
        }[] & ({
            status?: {
                zoneStatuses?: {
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").TargetState_Status | undefined;
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
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").TargetState_Status | undefined;
                    zoneId?: string | undefined;
                    failedActiveHc?: boolean | undefined;
                }[] | undefined;
            } & {
                zoneStatuses?: ({
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").TargetState_Status | undefined;
                    zoneId?: string | undefined;
                    failedActiveHc?: boolean | undefined;
                }[] & ({
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").TargetState_Status | undefined;
                    zoneId?: string | undefined;
                    failedActiveHc?: boolean | undefined;
                } & {
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").TargetState_Status | undefined;
                    zoneId?: string | undefined;
                    failedActiveHc?: boolean | undefined;
                } & Record<Exclude<keyof I["targetStates"][number]["status"]["zoneStatuses"][number], "$type" | "status" | "zoneId" | "failedActiveHc">, never>)[] & Record<Exclude<keyof I["targetStates"][number]["status"]["zoneStatuses"], "$type" | keyof {
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").TargetState_Status | undefined;
                    zoneId?: string | undefined;
                    failedActiveHc?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["targetStates"][number]["status"], "$type" | "zoneStatuses">, never>) | undefined;
            target?: ({
                ipAddress?: string | undefined;
                subnetId?: string | undefined;
                privateIpv4Address?: boolean | undefined;
            } & {
                ipAddress?: string | undefined;
                subnetId?: string | undefined;
                privateIpv4Address?: boolean | undefined;
            } & Record<Exclude<keyof I["targetStates"][number]["target"], "$type" | "ipAddress" | "subnetId" | "privateIpv4Address">, never>) | undefined;
        } & Record<Exclude<keyof I["targetStates"][number], "$type" | "status" | "target">, never>)[] & Record<Exclude<keyof I["targetStates"], "$type" | keyof {
            status?: {
                zoneStatuses?: {
                    status?: import("../../../../yandex/cloud/apploadbalancer/v1/load_balancer").TargetState_Status | undefined;
                    zoneId?: string | undefined;
                    failedActiveHc?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            target?: {
                ipAddress?: string | undefined;
                subnetId?: string | undefined;
                privateIpv4Address?: boolean | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "targetStates">, never>>(object: I): GetTargetStatesResponse;
};
export declare const AddSniMatchRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchRequest";
    encode(message: AddSniMatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddSniMatchRequest;
    fromJSON(object: any): AddSniMatchRequest;
    toJSON(message: AddSniMatchRequest): unknown;
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
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
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
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "handler" | "serverNames" | "loadBalancerId" | "listenerName">, never>>(object: I): AddSniMatchRequest;
};
export declare const AddSniMatchMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata";
    encode(message: AddSniMatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddSniMatchMetadata;
    fromJSON(object: any): AddSniMatchMetadata;
    toJSON(message: AddSniMatchMetadata): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
        sniMatchName?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
        sniMatchName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId" | "listenerName" | "sniMatchName">, never>>(object: I): AddSniMatchMetadata;
};
export declare const RemoveSniMatchRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest";
    encode(message: RemoveSniMatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveSniMatchRequest;
    fromJSON(object: any): RemoveSniMatchRequest;
    toJSON(message: RemoveSniMatchRequest): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
        sniMatchName?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
        sniMatchName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId" | "listenerName" | "sniMatchName">, never>>(object: I): RemoveSniMatchRequest;
};
export declare const RemoveSniMatchMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata";
    encode(message: RemoveSniMatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveSniMatchMetadata;
    fromJSON(object: any): RemoveSniMatchMetadata;
    toJSON(message: RemoveSniMatchMetadata): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
        sniMatchName?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
        sniMatchName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId" | "listenerName" | "sniMatchName">, never>>(object: I): RemoveSniMatchMetadata;
};
export declare const UpdateSniMatchRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest";
    encode(message: UpdateSniMatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSniMatchRequest;
    fromJSON(object: any): UpdateSniMatchRequest;
    toJSON(message: UpdateSniMatchRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
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
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
    } & {
        name?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
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
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "updateMask" | "handler" | "serverNames" | "loadBalancerId" | "listenerName">, never>>(object: I): UpdateSniMatchRequest;
};
export declare const UpdateSniMatchMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata";
    encode(message: UpdateSniMatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSniMatchMetadata;
    fromJSON(object: any): UpdateSniMatchMetadata;
    toJSON(message: UpdateSniMatchMetadata): unknown;
    fromPartial<I extends {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
        sniMatchName?: string | undefined;
    } & {
        loadBalancerId?: string | undefined;
        listenerName?: string | undefined;
        sniMatchName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadBalancerId" | "listenerName" | "sniMatchName">, never>>(object: I): UpdateSniMatchMetadata;
};
export declare const ListLoadBalancerOperationsRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest";
    encode(message: ListLoadBalancerOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancerOperationsRequest;
    fromJSON(object: any): ListLoadBalancerOperationsRequest;
    toJSON(message: ListLoadBalancerOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        loadBalancerId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        loadBalancerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "loadBalancerId">, never>>(object: I): ListLoadBalancerOperationsRequest;
};
export declare const ListLoadBalancerOperationsResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse";
    encode(message: ListLoadBalancerOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancerOperationsResponse;
    fromJSON(object: any): ListLoadBalancerOperationsResponse;
    toJSON(message: ListLoadBalancerOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListLoadBalancerOperationsResponse;
};
/** A set of methods for managing application load balancers. */
export declare const LoadBalancerServiceService: {
    /**
     * Returns the specified application load balancer.
     *
     * To get the list of all available application load balancers, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLoadBalancerRequest;
        readonly responseSerialize: (value: LoadBalancer) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LoadBalancer;
    };
    /** Lists application load balancers in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLoadBalancersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLoadBalancersRequest;
        readonly responseSerialize: (value: ListLoadBalancersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLoadBalancersResponse;
    };
    /** Creates an application load balancer in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified application load balancer. */
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified application load balancer. */
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified application load balancer. */
    readonly start: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified application load balancer. */
    readonly stop: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Adds a listener to the specified application load balancer. */
    readonly addListener: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddListenerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddListenerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified listener. */
    readonly removeListener: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveListenerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveListenerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified listener of the specified application load balancer. */
    readonly updateListener: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateListenerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateListenerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Adds a SNI handler to the specified listener.
     *
     * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    readonly addSniMatch: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddSniMatch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddSniMatchRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddSniMatchRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified SNI handler of the specified listener.
     *
     * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    readonly updateSniMatch: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateSniMatch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSniMatchRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSniMatchRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified SNI handler.
     *
     * This request does not allow to delete [TlsListener.default_handler].
     */
    readonly removeSniMatch: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveSniMatch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveSniMatchRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveSniMatchRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
    readonly getTargetStates: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTargetStatesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTargetStatesRequest;
        readonly responseSerialize: (value: GetTargetStatesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetTargetStatesResponse;
    };
    /** Lists operations for the specified application load balancer. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLoadBalancerOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLoadBalancerOperationsRequest;
        readonly responseSerialize: (value: ListLoadBalancerOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLoadBalancerOperationsResponse;
    };
};
export interface LoadBalancerServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified application load balancer.
     *
     * To get the list of all available application load balancers, make a [List] request.
     */
    get: handleUnaryCall<GetLoadBalancerRequest, LoadBalancer>;
    /** Lists application load balancers in the specified folder. */
    list: handleUnaryCall<ListLoadBalancersRequest, ListLoadBalancersResponse>;
    /** Creates an application load balancer in the specified folder. */
    create: handleUnaryCall<CreateLoadBalancerRequest, Operation>;
    /** Updates the specified application load balancer. */
    update: handleUnaryCall<UpdateLoadBalancerRequest, Operation>;
    /** Deletes the specified application load balancer. */
    delete: handleUnaryCall<DeleteLoadBalancerRequest, Operation>;
    /** Starts the specified application load balancer. */
    start: handleUnaryCall<StartLoadBalancerRequest, Operation>;
    /** Stops the specified application load balancer. */
    stop: handleUnaryCall<StopLoadBalancerRequest, Operation>;
    /** Adds a listener to the specified application load balancer. */
    addListener: handleUnaryCall<AddListenerRequest, Operation>;
    /** Deletes the specified listener. */
    removeListener: handleUnaryCall<RemoveListenerRequest, Operation>;
    /** Updates the specified listener of the specified application load balancer. */
    updateListener: handleUnaryCall<UpdateListenerRequest, Operation>;
    /**
     * Adds a SNI handler to the specified listener.
     *
     * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    addSniMatch: handleUnaryCall<AddSniMatchRequest, Operation>;
    /**
     * Updates the specified SNI handler of the specified listener.
     *
     * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    updateSniMatch: handleUnaryCall<UpdateSniMatchRequest, Operation>;
    /**
     * Deletes the specified SNI handler.
     *
     * This request does not allow to delete [TlsListener.default_handler].
     */
    removeSniMatch: handleUnaryCall<RemoveSniMatchRequest, Operation>;
    /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
    getTargetStates: handleUnaryCall<GetTargetStatesRequest, GetTargetStatesResponse>;
    /** Lists operations for the specified application load balancer. */
    listOperations: handleUnaryCall<ListLoadBalancerOperationsRequest, ListLoadBalancerOperationsResponse>;
}
export interface LoadBalancerServiceClient extends Client {
    /**
     * Returns the specified application load balancer.
     *
     * To get the list of all available application load balancers, make a [List] request.
     */
    get(request: GetLoadBalancerRequest, callback: (error: ServiceError | null, response: LoadBalancer) => void): ClientUnaryCall;
    get(request: GetLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LoadBalancer) => void): ClientUnaryCall;
    get(request: GetLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LoadBalancer) => void): ClientUnaryCall;
    /** Lists application load balancers in the specified folder. */
    list(request: ListLoadBalancersRequest, callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void): ClientUnaryCall;
    list(request: ListLoadBalancersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void): ClientUnaryCall;
    list(request: ListLoadBalancersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void): ClientUnaryCall;
    /** Creates an application load balancer in the specified folder. */
    create(request: CreateLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified application load balancer. */
    update(request: UpdateLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified application load balancer. */
    delete(request: DeleteLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified application load balancer. */
    start(request: StartLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified application load balancer. */
    stop(request: StopLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Adds a listener to the specified application load balancer. */
    addListener(request: AddListenerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addListener(request: AddListenerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addListener(request: AddListenerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified listener. */
    removeListener(request: RemoveListenerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeListener(request: RemoveListenerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeListener(request: RemoveListenerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified listener of the specified application load balancer. */
    updateListener(request: UpdateListenerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateListener(request: UpdateListenerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateListener(request: UpdateListenerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Adds a SNI handler to the specified listener.
     *
     * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    addSniMatch(request: AddSniMatchRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addSniMatch(request: AddSniMatchRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addSniMatch(request: AddSniMatchRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified SNI handler of the specified listener.
     *
     * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    updateSniMatch(request: UpdateSniMatchRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateSniMatch(request: UpdateSniMatchRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateSniMatch(request: UpdateSniMatchRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified SNI handler.
     *
     * This request does not allow to delete [TlsListener.default_handler].
     */
    removeSniMatch(request: RemoveSniMatchRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeSniMatch(request: RemoveSniMatchRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeSniMatch(request: RemoveSniMatchRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
    getTargetStates(request: GetTargetStatesRequest, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    getTargetStates(request: GetTargetStatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    getTargetStates(request: GetTargetStatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified application load balancer. */
    listOperations(request: ListLoadBalancerOperationsRequest, callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListLoadBalancerOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListLoadBalancerOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void): ClientUnaryCall;
}
export declare const LoadBalancerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): LoadBalancerServiceClient;
    service: typeof LoadBalancerServiceService;
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
