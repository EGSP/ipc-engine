/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { BackendGroup, HttpBackendGroup, GrpcBackendGroup, StreamBackendGroup, HttpBackend, GrpcBackend, StreamBackend } from "../../../../yandex/cloud/apploadbalancer/v1/backend_group";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetBackendGroupRequest {
    $type: "yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest";
    /**
     * ID of the backend group to return.
     *
     * To get the backend group ID, make a [BackendGroupService.List] request.
     */
    backendGroupId: string;
}
export interface ListBackendGroupsRequest {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest";
    /**
     * ID of the folder to list backend groups in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListBackendGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListBackendGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters backend groups listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [BackendGroup.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-backend-group`.
     */
    filter: string;
}
export interface ListBackendGroupsResponse {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse";
    /** List of backend groups in the specified folder. */
    backendGroups: BackendGroup[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListBackendGroupsRequest.page_size], use `next_page_token` as the value
     * for the [ListBackendGroupsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteBackendGroupRequest {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest";
    /**
     * ID of the backend group to delete.
     *
     * To get the backend group ID, make a [BackendGroupService.List] request.
     */
    backendGroupId: string;
}
export interface DeleteBackendGroupMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata";
    /** ID of the backend group that is being deleted. */
    backendGroupId: string;
}
export interface UpdateBackendGroupRequest {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest";
    /**
     * ID of the backend group to update.
     *
     * To get the backend group ID, make a [BackendGroupService.List] request.
     */
    backendGroupId: string;
    /** Field mask that specifies which attributes of the backend group should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the backend group.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the backend group. */
    description: string;
    /**
     * Backend group labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [BackendGroupService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
    /** New list of HTTP backends that the backend group will consist of. */
    http?: HttpBackendGroup | undefined;
    /** New list of gRPC backends that the backend group will consist of. */
    grpc?: GrpcBackendGroup | undefined;
    /** New list of stream (TCP) backends that the backend group will consist of. */
    stream?: StreamBackendGroup | undefined;
}
export interface UpdateBackendGroupRequest_LabelsEntry {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateBackendGroupMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata";
    /** ID of the backend group that is being updated. */
    backendGroupId: string;
}
export interface CreateBackendGroupRequest {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest";
    /**
     * ID of the folder to create a backend group in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the backend group.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the backend group. */
    description: string;
    /**
     * Backend group labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /** List of HTTP backends that the backend group will consist of. */
    http?: HttpBackendGroup | undefined;
    /** List of gRPC backends that the backend group consists of. */
    grpc?: GrpcBackendGroup | undefined;
    /** List of stream (TCP) backends that the backend group consists of. */
    stream?: StreamBackendGroup | undefined;
}
export interface CreateBackendGroupRequest_LabelsEntry {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateBackendGroupMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata";
    /** ID of the backend group that is being created. */
    backendGroupId: string;
}
export interface AddBackendRequest {
    $type: "yandex.cloud.apploadbalancer.v1.AddBackendRequest";
    /**
     * ID of the backend group to add a backend to.
     *
     * To get the backend group ID, make a [BackendGroupService.List] request.
     */
    backendGroupId: string;
    /** HTTP backend to add to the backend group. */
    http?: HttpBackend | undefined;
    /** gRPC backend to add to the backend group. */
    grpc?: GrpcBackend | undefined;
    /** New settings for the Stream backend. */
    stream?: StreamBackend | undefined;
}
export interface AddBackendMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.AddBackendMetadata";
    /** ID of the backend group that the backend is being added to. */
    backendGroupId: string;
    /** Name of the backend that is being added to the backend group. */
    backendName: string;
}
export interface UpdateBackendRequest {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendRequest";
    /** ID of the backend group to update the backend in. */
    backendGroupId: string;
    /** Field mask that specifies which attributes of the backend should be updated. */
    updateMask?: FieldMask;
    /** New settings for the HTTP backend. */
    http?: HttpBackend | undefined;
    /** New settings for the gRPC backend. */
    grpc?: GrpcBackend | undefined;
    /** New settings for the stream (TCP) backend. */
    stream?: StreamBackend | undefined;
}
export interface UpdateBackendMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata";
    /** ID of the backend group that the backend is being updated it. */
    backendGroupId: string;
    /** Name of the backend that is being updated. */
    backendName: string;
}
export interface RemoveBackendRequest {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendRequest";
    /**
     * ID of the backend group to remove a backend from.
     *
     * To get the backend group ID, make a [BackendGroupService.List] request.
     */
    backendGroupId: string;
    /**
     * Name of the backend to remove.
     *
     * To get the backend name, make a [BackendGroupService.Get] request.
     */
    backendName: string;
}
export interface RemoveBackendMetadata {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata";
    /** ID of the backend group that the backend is being removed from. */
    backendGroupId: string;
    /** Name of the backend that is being removed. */
    backendName: string;
}
export interface ListBackendGroupOperationsRequest {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest";
    /**
     * ID of the backend group to get operations for.
     *
     * To get the backend group ID, use a [BackendGroupService.List] request.
     */
    backendGroupId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListBackendGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListBackendGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListBackendGroupOperationsResponse {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse";
    /** List of operations for the specified backend group. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListBackendGroupOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListBackendGroupOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetBackendGroupRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest";
    encode(message: GetBackendGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBackendGroupRequest;
    fromJSON(object: any): GetBackendGroupRequest;
    toJSON(message: GetBackendGroupRequest): unknown;
    fromPartial<I extends {
        backendGroupId?: string | undefined;
    } & {
        backendGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId">, never>>(object: I): GetBackendGroupRequest;
};
export declare const ListBackendGroupsRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest";
    encode(message: ListBackendGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackendGroupsRequest;
    fromJSON(object: any): ListBackendGroupsRequest;
    toJSON(message: ListBackendGroupsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListBackendGroupsRequest;
};
export declare const ListBackendGroupsResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse";
    encode(message: ListBackendGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackendGroupsResponse;
    fromJSON(object: any): ListBackendGroupsResponse;
    toJSON(message: ListBackendGroupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        backendGroups?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            http?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    storageBucket?: {
                        bucket?: string | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    useHttp2?: boolean | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
                header?: {
                    headerName?: string | undefined;
                } | undefined;
                cookie?: {
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            grpc?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
                header?: {
                    headerName?: string | undefined;
                } | undefined;
                cookie?: {
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    enableProxyProtocol?: boolean | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        backendGroups?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            http?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    storageBucket?: {
                        bucket?: string | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    useHttp2?: boolean | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
                header?: {
                    headerName?: string | undefined;
                } | undefined;
                cookie?: {
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            grpc?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
                header?: {
                    headerName?: string | undefined;
                } | undefined;
                cookie?: {
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    enableProxyProtocol?: boolean | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
            } | undefined;
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
            http?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    storageBucket?: {
                        bucket?: string | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    useHttp2?: boolean | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
                header?: {
                    headerName?: string | undefined;
                } | undefined;
                cookie?: {
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            grpc?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
                header?: {
                    headerName?: string | undefined;
                } | undefined;
                cookie?: {
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    enableProxyProtocol?: boolean | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
            } | undefined;
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
            } & Record<Exclude<keyof I["backendGroups"][number]["labels"], string | number>, never>) | undefined;
            http?: ({
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    storageBucket?: {
                        bucket?: string | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    useHttp2?: boolean | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
                header?: {
                    headerName?: string | undefined;
                } | undefined;
                cookie?: {
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                backends?: ({
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    storageBucket?: {
                        bucket?: string | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    useHttp2?: boolean | undefined;
                }[] & ({
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    storageBucket?: {
                        bucket?: string | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    useHttp2?: boolean | undefined;
                } & {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: ({
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } & {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
                    port?: number | undefined;
                    targetGroups?: ({
                        targetGroupIds?: string[] | undefined;
                    } & {
                        targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
                    storageBucket?: ({
                        bucket?: string | undefined;
                    } & {
                        bucket?: string | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["storageBucket"], "$type" | "bucket">, never>) | undefined;
                    healthchecks?: ({
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] & ({
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    } & {
                        http?: ({
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } & {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                        grpc?: ({
                            serviceName?: string | undefined;
                        } & {
                            serviceName?: string | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                        stream?: ({
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } & {
                            send?: ({
                                text?: string | undefined;
                            } & {
                                text?: string | undefined;
                            } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                            receive?: ({
                                text?: string | undefined;
                            } & {
                                text?: string | undefined;
                            } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                        tls?: ({
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } & {
                            sni?: string | undefined;
                            validationContext?: ({
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } & {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                        timeout?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: ({} & {} & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["healthchecks"], "$type" | keyof {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[]>, never>) | undefined;
                    tls?: ({
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } & {
                        sni?: string | undefined;
                        validationContext?: ({
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                    useHttp2?: boolean | undefined;
                } & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"][number], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "storageBucket" | "healthchecks" | "tls" | "useHttp2">, never>)[] & Record<Exclude<keyof I["backendGroups"][number]["http"]["backends"], "$type" | keyof {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    storageBucket?: {
                        bucket?: string | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    useHttp2?: boolean | undefined;
                }[]>, never>) | undefined;
                connection?: ({
                    sourceIp?: boolean | undefined;
                } & {
                    sourceIp?: boolean | undefined;
                } & Record<Exclude<keyof I["backendGroups"][number]["http"]["connection"], "$type" | "sourceIp">, never>) | undefined;
                header?: ({
                    headerName?: string | undefined;
                } & {
                    headerName?: string | undefined;
                } & Record<Exclude<keyof I["backendGroups"][number]["http"]["header"], "$type" | "headerName">, never>) | undefined;
                cookie?: ({
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    name?: string | undefined;
                    ttl?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["http"]["cookie"]["ttl"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["backendGroups"][number]["http"]["cookie"], "$type" | "name" | "ttl">, never>) | undefined;
            } & Record<Exclude<keyof I["backendGroups"][number]["http"], "$type" | "backends" | "connection" | "header" | "cookie">, never>) | undefined;
            grpc?: ({
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
                header?: {
                    headerName?: string | undefined;
                } | undefined;
                cookie?: {
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                backends?: ({
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: ({
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } & {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
                    port?: number | undefined;
                    targetGroups?: ({
                        targetGroupIds?: string[] | undefined;
                    } & {
                        targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
                    healthchecks?: ({
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] & ({
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    } & {
                        http?: ({
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } & {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                        grpc?: ({
                            serviceName?: string | undefined;
                        } & {
                            serviceName?: string | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                        stream?: ({
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } & {
                            send?: ({
                                text?: string | undefined;
                            } & {
                                text?: string | undefined;
                            } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                            receive?: ({
                                text?: string | undefined;
                            } & {
                                text?: string | undefined;
                            } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                        tls?: ({
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } & {
                            sni?: string | undefined;
                            validationContext?: ({
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } & {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                        timeout?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: ({} & {} & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["healthchecks"], "$type" | keyof {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[]>, never>) | undefined;
                    tls?: ({
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } & {
                        sni?: string | undefined;
                        validationContext?: ({
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"][number], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "healthchecks" | "tls">, never>)[] & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["backends"], "$type" | keyof {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                connection?: ({
                    sourceIp?: boolean | undefined;
                } & {
                    sourceIp?: boolean | undefined;
                } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["connection"], "$type" | "sourceIp">, never>) | undefined;
                header?: ({
                    headerName?: string | undefined;
                } & {
                    headerName?: string | undefined;
                } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["header"], "$type" | "headerName">, never>) | undefined;
                cookie?: ({
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    name?: string | undefined;
                    ttl?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["cookie"]["ttl"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["backendGroups"][number]["grpc"]["cookie"], "$type" | "name" | "ttl">, never>) | undefined;
            } & Record<Exclude<keyof I["backendGroups"][number]["grpc"], "$type" | "backends" | "connection" | "header" | "cookie">, never>) | undefined;
            stream?: ({
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    enableProxyProtocol?: boolean | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
            } & {
                backends?: ({
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    enableProxyProtocol?: boolean | undefined;
                }[] & ({
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    enableProxyProtocol?: boolean | undefined;
                } & {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: ({
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } & {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
                    port?: number | undefined;
                    targetGroups?: ({
                        targetGroupIds?: string[] | undefined;
                    } & {
                        targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
                    healthchecks?: ({
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] & ({
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    } & {
                        http?: ({
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } & {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                        grpc?: ({
                            serviceName?: string | undefined;
                        } & {
                            serviceName?: string | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                        stream?: ({
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } & {
                            send?: ({
                                text?: string | undefined;
                            } & {
                                text?: string | undefined;
                            } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                            receive?: ({
                                text?: string | undefined;
                            } & {
                                text?: string | undefined;
                            } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                        tls?: ({
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } & {
                            sni?: string | undefined;
                            validationContext?: ({
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } & {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                        timeout?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: ({} & {} & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["healthchecks"], "$type" | keyof {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[]>, never>) | undefined;
                    tls?: ({
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } & {
                        sni?: string | undefined;
                        validationContext?: ({
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                    } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                    enableProxyProtocol?: boolean | undefined;
                } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"][number], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "healthchecks" | "tls" | "enableProxyProtocol">, never>)[] & Record<Exclude<keyof I["backendGroups"][number]["stream"]["backends"], "$type" | keyof {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    enableProxyProtocol?: boolean | undefined;
                }[]>, never>) | undefined;
                connection?: ({
                    sourceIp?: boolean | undefined;
                } & {
                    sourceIp?: boolean | undefined;
                } & Record<Exclude<keyof I["backendGroups"][number]["stream"]["connection"], "$type" | "sourceIp">, never>) | undefined;
            } & Record<Exclude<keyof I["backendGroups"][number]["stream"], "$type" | "backends" | "connection">, never>) | undefined;
        } & Record<Exclude<keyof I["backendGroups"][number], "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "http" | "grpc" | "stream">, never>)[] & Record<Exclude<keyof I["backendGroups"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            http?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    storageBucket?: {
                        bucket?: string | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    useHttp2?: boolean | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
                header?: {
                    headerName?: string | undefined;
                } | undefined;
                cookie?: {
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            grpc?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
                header?: {
                    headerName?: string | undefined;
                } | undefined;
                cookie?: {
                    name?: string | undefined;
                    ttl?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                backends?: {
                    name?: string | undefined;
                    backendWeight?: number | undefined;
                    loadBalancingConfig?: {
                        panicThreshold?: number | undefined;
                        localityAwareRoutingPercent?: number | undefined;
                        strictLocality?: boolean | undefined;
                        mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                    } | undefined;
                    port?: number | undefined;
                    targetGroups?: {
                        targetGroupIds?: string[] | undefined;
                    } | undefined;
                    healthchecks?: {
                        http?: {
                            useHttp2?: boolean | undefined;
                            host?: string | undefined;
                            path?: string | undefined;
                        } | undefined;
                        grpc?: {
                            serviceName?: string | undefined;
                        } | undefined;
                        stream?: {
                            send?: {
                                text?: string | undefined;
                            } | undefined;
                            receive?: {
                                text?: string | undefined;
                            } | undefined;
                        } | undefined;
                        tls?: {
                            sni?: string | undefined;
                            validationContext?: {
                                trustedCaId?: string | undefined;
                                trustedCaBytes?: string | undefined;
                            } | undefined;
                        } | undefined;
                        timeout?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        intervalJitterPercent?: number | undefined;
                        healthyThreshold?: number | undefined;
                        unhealthyThreshold?: number | undefined;
                        healthcheckPort?: number | undefined;
                        plaintext?: {} | undefined;
                    }[] | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    enableProxyProtocol?: boolean | undefined;
                }[] | undefined;
                connection?: {
                    sourceIp?: boolean | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "backendGroups">, never>>(object: I): ListBackendGroupsResponse;
};
export declare const DeleteBackendGroupRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest";
    encode(message: DeleteBackendGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackendGroupRequest;
    fromJSON(object: any): DeleteBackendGroupRequest;
    toJSON(message: DeleteBackendGroupRequest): unknown;
    fromPartial<I extends {
        backendGroupId?: string | undefined;
    } & {
        backendGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId">, never>>(object: I): DeleteBackendGroupRequest;
};
export declare const DeleteBackendGroupMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata";
    encode(message: DeleteBackendGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackendGroupMetadata;
    fromJSON(object: any): DeleteBackendGroupMetadata;
    toJSON(message: DeleteBackendGroupMetadata): unknown;
    fromPartial<I extends {
        backendGroupId?: string | undefined;
    } & {
        backendGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId">, never>>(object: I): DeleteBackendGroupMetadata;
};
export declare const UpdateBackendGroupRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest";
    encode(message: UpdateBackendGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBackendGroupRequest;
    fromJSON(object: any): UpdateBackendGroupRequest;
    toJSON(message: UpdateBackendGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        http?: {
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                storageBucket?: {
                    bucket?: string | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                useHttp2?: boolean | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
            header?: {
                headerName?: string | undefined;
            } | undefined;
            cookie?: {
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        grpc?: {
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
            header?: {
                headerName?: string | undefined;
            } | undefined;
            cookie?: {
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        stream?: {
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                enableProxyProtocol?: boolean | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
        } | undefined;
        backendGroupId?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
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
        http?: ({
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                storageBucket?: {
                    bucket?: string | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                useHttp2?: boolean | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
            header?: {
                headerName?: string | undefined;
            } | undefined;
            cookie?: {
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            backends?: ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                storageBucket?: {
                    bucket?: string | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                useHttp2?: boolean | undefined;
            }[] & ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                storageBucket?: {
                    bucket?: string | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                useHttp2?: boolean | undefined;
            } & {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: ({
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & Record<Exclude<keyof I["http"]["backends"][number]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
                port?: number | undefined;
                targetGroups?: ({
                    targetGroupIds?: string[] | undefined;
                } & {
                    targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["http"]["backends"][number]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["http"]["backends"][number]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
                storageBucket?: ({
                    bucket?: string | undefined;
                } & {
                    bucket?: string | undefined;
                } & Record<Exclude<keyof I["http"]["backends"][number]["storageBucket"], "$type" | "bucket">, never>) | undefined;
                healthchecks?: ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] & ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                } & {
                    http?: ({
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                    grpc?: ({
                        serviceName?: string | undefined;
                    } & {
                        serviceName?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                    stream?: ({
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } & {
                        send?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                        receive?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                    tls?: ({
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } & {
                        sni?: string | undefined;
                        validationContext?: ({
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                    timeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: ({} & {} & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"], "$type" | keyof {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[]>, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["http"]["backends"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                useHttp2?: boolean | undefined;
            } & Record<Exclude<keyof I["http"]["backends"][number], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "storageBucket" | "healthchecks" | "tls" | "useHttp2">, never>)[] & Record<Exclude<keyof I["http"]["backends"], "$type" | keyof {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                storageBucket?: {
                    bucket?: string | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                useHttp2?: boolean | undefined;
            }[]>, never>) | undefined;
            connection?: ({
                sourceIp?: boolean | undefined;
            } & {
                sourceIp?: boolean | undefined;
            } & Record<Exclude<keyof I["http"]["connection"], "$type" | "sourceIp">, never>) | undefined;
            header?: ({
                headerName?: string | undefined;
            } & {
                headerName?: string | undefined;
            } & Record<Exclude<keyof I["http"]["header"], "$type" | "headerName">, never>) | undefined;
            cookie?: ({
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                ttl?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["http"]["cookie"]["ttl"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["http"]["cookie"], "$type" | "name" | "ttl">, never>) | undefined;
        } & Record<Exclude<keyof I["http"], "$type" | "backends" | "connection" | "header" | "cookie">, never>) | undefined;
        grpc?: ({
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
            header?: {
                headerName?: string | undefined;
            } | undefined;
            cookie?: {
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            backends?: ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: ({
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & Record<Exclude<keyof I["grpc"]["backends"][number]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
                port?: number | undefined;
                targetGroups?: ({
                    targetGroupIds?: string[] | undefined;
                } & {
                    targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["grpc"]["backends"][number]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["grpc"]["backends"][number]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
                healthchecks?: ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] & ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                } & {
                    http?: ({
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                    grpc?: ({
                        serviceName?: string | undefined;
                    } & {
                        serviceName?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                    stream?: ({
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } & {
                        send?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                        receive?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                    tls?: ({
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } & {
                        sni?: string | undefined;
                        validationContext?: ({
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                    timeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: ({} & {} & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"], "$type" | keyof {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[]>, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["grpc"]["backends"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["backends"][number], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "healthchecks" | "tls">, never>)[] & Record<Exclude<keyof I["grpc"]["backends"], "$type" | keyof {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            connection?: ({
                sourceIp?: boolean | undefined;
            } & {
                sourceIp?: boolean | undefined;
            } & Record<Exclude<keyof I["grpc"]["connection"], "$type" | "sourceIp">, never>) | undefined;
            header?: ({
                headerName?: string | undefined;
            } & {
                headerName?: string | undefined;
            } & Record<Exclude<keyof I["grpc"]["header"], "$type" | "headerName">, never>) | undefined;
            cookie?: ({
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                ttl?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["grpc"]["cookie"]["ttl"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["cookie"], "$type" | "name" | "ttl">, never>) | undefined;
        } & Record<Exclude<keyof I["grpc"], "$type" | "backends" | "connection" | "header" | "cookie">, never>) | undefined;
        stream?: ({
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                enableProxyProtocol?: boolean | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
        } & {
            backends?: ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                enableProxyProtocol?: boolean | undefined;
            }[] & ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                enableProxyProtocol?: boolean | undefined;
            } & {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: ({
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & Record<Exclude<keyof I["stream"]["backends"][number]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
                port?: number | undefined;
                targetGroups?: ({
                    targetGroupIds?: string[] | undefined;
                } & {
                    targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["stream"]["backends"][number]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["stream"]["backends"][number]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
                healthchecks?: ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] & ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                } & {
                    http?: ({
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                    grpc?: ({
                        serviceName?: string | undefined;
                    } & {
                        serviceName?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                    stream?: ({
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } & {
                        send?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                        receive?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                    tls?: ({
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } & {
                        sni?: string | undefined;
                        validationContext?: ({
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                    timeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: ({} & {} & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"], "$type" | keyof {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[]>, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["stream"]["backends"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                enableProxyProtocol?: boolean | undefined;
            } & Record<Exclude<keyof I["stream"]["backends"][number], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "healthchecks" | "tls" | "enableProxyProtocol">, never>)[] & Record<Exclude<keyof I["stream"]["backends"], "$type" | keyof {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                enableProxyProtocol?: boolean | undefined;
            }[]>, never>) | undefined;
            connection?: ({
                sourceIp?: boolean | undefined;
            } & {
                sourceIp?: boolean | undefined;
            } & Record<Exclude<keyof I["stream"]["connection"], "$type" | "sourceIp">, never>) | undefined;
        } & Record<Exclude<keyof I["stream"], "$type" | "backends" | "connection">, never>) | undefined;
        backendGroupId?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "http" | "grpc" | "stream" | "backendGroupId" | "updateMask">, never>>(object: I): UpdateBackendGroupRequest;
};
export declare const UpdateBackendGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry";
    encode(message: UpdateBackendGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBackendGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateBackendGroupRequest_LabelsEntry;
    toJSON(message: UpdateBackendGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateBackendGroupRequest_LabelsEntry;
};
export declare const UpdateBackendGroupMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata";
    encode(message: UpdateBackendGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBackendGroupMetadata;
    fromJSON(object: any): UpdateBackendGroupMetadata;
    toJSON(message: UpdateBackendGroupMetadata): unknown;
    fromPartial<I extends {
        backendGroupId?: string | undefined;
    } & {
        backendGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId">, never>>(object: I): UpdateBackendGroupMetadata;
};
export declare const CreateBackendGroupRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest";
    encode(message: CreateBackendGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBackendGroupRequest;
    fromJSON(object: any): CreateBackendGroupRequest;
    toJSON(message: CreateBackendGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        http?: {
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                storageBucket?: {
                    bucket?: string | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                useHttp2?: boolean | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
            header?: {
                headerName?: string | undefined;
            } | undefined;
            cookie?: {
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        grpc?: {
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
            header?: {
                headerName?: string | undefined;
            } | undefined;
            cookie?: {
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        stream?: {
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                enableProxyProtocol?: boolean | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
        } | undefined;
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
        http?: ({
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                storageBucket?: {
                    bucket?: string | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                useHttp2?: boolean | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
            header?: {
                headerName?: string | undefined;
            } | undefined;
            cookie?: {
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            backends?: ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                storageBucket?: {
                    bucket?: string | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                useHttp2?: boolean | undefined;
            }[] & ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                storageBucket?: {
                    bucket?: string | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                useHttp2?: boolean | undefined;
            } & {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: ({
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & Record<Exclude<keyof I["http"]["backends"][number]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
                port?: number | undefined;
                targetGroups?: ({
                    targetGroupIds?: string[] | undefined;
                } & {
                    targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["http"]["backends"][number]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["http"]["backends"][number]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
                storageBucket?: ({
                    bucket?: string | undefined;
                } & {
                    bucket?: string | undefined;
                } & Record<Exclude<keyof I["http"]["backends"][number]["storageBucket"], "$type" | "bucket">, never>) | undefined;
                healthchecks?: ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] & ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                } & {
                    http?: ({
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                    grpc?: ({
                        serviceName?: string | undefined;
                    } & {
                        serviceName?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                    stream?: ({
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } & {
                        send?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                        receive?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                    tls?: ({
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } & {
                        sni?: string | undefined;
                        validationContext?: ({
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                    timeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: ({} & {} & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["http"]["backends"][number]["healthchecks"], "$type" | keyof {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[]>, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["backends"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["http"]["backends"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                useHttp2?: boolean | undefined;
            } & Record<Exclude<keyof I["http"]["backends"][number], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "storageBucket" | "healthchecks" | "tls" | "useHttp2">, never>)[] & Record<Exclude<keyof I["http"]["backends"], "$type" | keyof {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                storageBucket?: {
                    bucket?: string | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                useHttp2?: boolean | undefined;
            }[]>, never>) | undefined;
            connection?: ({
                sourceIp?: boolean | undefined;
            } & {
                sourceIp?: boolean | undefined;
            } & Record<Exclude<keyof I["http"]["connection"], "$type" | "sourceIp">, never>) | undefined;
            header?: ({
                headerName?: string | undefined;
            } & {
                headerName?: string | undefined;
            } & Record<Exclude<keyof I["http"]["header"], "$type" | "headerName">, never>) | undefined;
            cookie?: ({
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                ttl?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["http"]["cookie"]["ttl"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["http"]["cookie"], "$type" | "name" | "ttl">, never>) | undefined;
        } & Record<Exclude<keyof I["http"], "$type" | "backends" | "connection" | "header" | "cookie">, never>) | undefined;
        grpc?: ({
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
            header?: {
                headerName?: string | undefined;
            } | undefined;
            cookie?: {
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            backends?: ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: ({
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & Record<Exclude<keyof I["grpc"]["backends"][number]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
                port?: number | undefined;
                targetGroups?: ({
                    targetGroupIds?: string[] | undefined;
                } & {
                    targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["grpc"]["backends"][number]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["grpc"]["backends"][number]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
                healthchecks?: ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] & ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                } & {
                    http?: ({
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                    grpc?: ({
                        serviceName?: string | undefined;
                    } & {
                        serviceName?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                    stream?: ({
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } & {
                        send?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                        receive?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                    tls?: ({
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } & {
                        sni?: string | undefined;
                        validationContext?: ({
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                    timeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: ({} & {} & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["grpc"]["backends"][number]["healthchecks"], "$type" | keyof {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[]>, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["backends"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["grpc"]["backends"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["backends"][number], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "healthchecks" | "tls">, never>)[] & Record<Exclude<keyof I["grpc"]["backends"], "$type" | keyof {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            connection?: ({
                sourceIp?: boolean | undefined;
            } & {
                sourceIp?: boolean | undefined;
            } & Record<Exclude<keyof I["grpc"]["connection"], "$type" | "sourceIp">, never>) | undefined;
            header?: ({
                headerName?: string | undefined;
            } & {
                headerName?: string | undefined;
            } & Record<Exclude<keyof I["grpc"]["header"], "$type" | "headerName">, never>) | undefined;
            cookie?: ({
                name?: string | undefined;
                ttl?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                ttl?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["grpc"]["cookie"]["ttl"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["cookie"], "$type" | "name" | "ttl">, never>) | undefined;
        } & Record<Exclude<keyof I["grpc"], "$type" | "backends" | "connection" | "header" | "cookie">, never>) | undefined;
        stream?: ({
            backends?: {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                enableProxyProtocol?: boolean | undefined;
            }[] | undefined;
            connection?: {
                sourceIp?: boolean | undefined;
            } | undefined;
        } & {
            backends?: ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                enableProxyProtocol?: boolean | undefined;
            }[] & ({
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                enableProxyProtocol?: boolean | undefined;
            } & {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: ({
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } & Record<Exclude<keyof I["stream"]["backends"][number]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
                port?: number | undefined;
                targetGroups?: ({
                    targetGroupIds?: string[] | undefined;
                } & {
                    targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["stream"]["backends"][number]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["stream"]["backends"][number]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
                healthchecks?: ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] & ({
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                } & {
                    http?: ({
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                    grpc?: ({
                        serviceName?: string | undefined;
                    } & {
                        serviceName?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                    stream?: ({
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } & {
                        send?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                        receive?: ({
                            text?: string | undefined;
                        } & {
                            text?: string | undefined;
                        } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                    tls?: ({
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } & {
                        sni?: string | undefined;
                        validationContext?: ({
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                    timeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: ({} & {} & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["stream"]["backends"][number]["healthchecks"], "$type" | keyof {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[]>, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["backends"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["stream"]["backends"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                enableProxyProtocol?: boolean | undefined;
            } & Record<Exclude<keyof I["stream"]["backends"][number], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "healthchecks" | "tls" | "enableProxyProtocol">, never>)[] & Record<Exclude<keyof I["stream"]["backends"], "$type" | keyof {
                name?: string | undefined;
                backendWeight?: number | undefined;
                loadBalancingConfig?: {
                    panicThreshold?: number | undefined;
                    localityAwareRoutingPercent?: number | undefined;
                    strictLocality?: boolean | undefined;
                    mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
                } | undefined;
                port?: number | undefined;
                targetGroups?: {
                    targetGroupIds?: string[] | undefined;
                } | undefined;
                healthchecks?: {
                    http?: {
                        useHttp2?: boolean | undefined;
                        host?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    grpc?: {
                        serviceName?: string | undefined;
                    } | undefined;
                    stream?: {
                        send?: {
                            text?: string | undefined;
                        } | undefined;
                        receive?: {
                            text?: string | undefined;
                        } | undefined;
                    } | undefined;
                    tls?: {
                        sni?: string | undefined;
                        validationContext?: {
                            trustedCaId?: string | undefined;
                            trustedCaBytes?: string | undefined;
                        } | undefined;
                    } | undefined;
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    intervalJitterPercent?: number | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    healthcheckPort?: number | undefined;
                    plaintext?: {} | undefined;
                }[] | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                enableProxyProtocol?: boolean | undefined;
            }[]>, never>) | undefined;
            connection?: ({
                sourceIp?: boolean | undefined;
            } & {
                sourceIp?: boolean | undefined;
            } & Record<Exclude<keyof I["stream"]["connection"], "$type" | "sourceIp">, never>) | undefined;
        } & Record<Exclude<keyof I["stream"], "$type" | "backends" | "connection">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "http" | "grpc" | "stream">, never>>(object: I): CreateBackendGroupRequest;
};
export declare const CreateBackendGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry";
    encode(message: CreateBackendGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBackendGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateBackendGroupRequest_LabelsEntry;
    toJSON(message: CreateBackendGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateBackendGroupRequest_LabelsEntry;
};
export declare const CreateBackendGroupMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata";
    encode(message: CreateBackendGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBackendGroupMetadata;
    fromJSON(object: any): CreateBackendGroupMetadata;
    toJSON(message: CreateBackendGroupMetadata): unknown;
    fromPartial<I extends {
        backendGroupId?: string | undefined;
    } & {
        backendGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId">, never>>(object: I): CreateBackendGroupMetadata;
};
export declare const AddBackendRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.AddBackendRequest";
    encode(message: AddBackendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddBackendRequest;
    fromJSON(object: any): AddBackendRequest;
    toJSON(message: AddBackendRequest): unknown;
    fromPartial<I extends {
        http?: {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            storageBucket?: {
                bucket?: string | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
            useHttp2?: boolean | undefined;
        } | undefined;
        grpc?: {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        stream?: {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
            enableProxyProtocol?: boolean | undefined;
        } | undefined;
        backendGroupId?: string | undefined;
    } & {
        http?: ({
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            storageBucket?: {
                bucket?: string | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
            useHttp2?: boolean | undefined;
        } & {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: ({
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & Record<Exclude<keyof I["http"]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
            port?: number | undefined;
            targetGroups?: ({
                targetGroupIds?: string[] | undefined;
            } & {
                targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["http"]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["http"]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
            storageBucket?: ({
                bucket?: string | undefined;
            } & {
                bucket?: string | undefined;
            } & Record<Exclude<keyof I["http"]["storageBucket"], "$type" | "bucket">, never>) | undefined;
            healthchecks?: ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] & ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            } & {
                http?: ({
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                grpc?: ({
                    serviceName?: string | undefined;
                } & {
                    serviceName?: string | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                stream?: ({
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } & {
                    send?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                    receive?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                timeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: ({} & {} & Record<Exclude<keyof I["http"]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["http"]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["http"]["healthchecks"], "$type" | keyof {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[]>, never>) | undefined;
            tls?: ({
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } & {
                sni?: string | undefined;
                validationContext?: ({
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & Record<Exclude<keyof I["http"]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
            } & Record<Exclude<keyof I["http"]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
            useHttp2?: boolean | undefined;
        } & Record<Exclude<keyof I["http"], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "storageBucket" | "healthchecks" | "tls" | "useHttp2">, never>) | undefined;
        grpc?: ({
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: ({
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & Record<Exclude<keyof I["grpc"]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
            port?: number | undefined;
            targetGroups?: ({
                targetGroupIds?: string[] | undefined;
            } & {
                targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["grpc"]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
            healthchecks?: ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] & ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            } & {
                http?: ({
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                grpc?: ({
                    serviceName?: string | undefined;
                } & {
                    serviceName?: string | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                stream?: ({
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } & {
                    send?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                    receive?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                timeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: ({} & {} & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["grpc"]["healthchecks"], "$type" | keyof {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[]>, never>) | undefined;
            tls?: ({
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } & {
                sni?: string | undefined;
                validationContext?: ({
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & Record<Exclude<keyof I["grpc"]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
        } & Record<Exclude<keyof I["grpc"], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "healthchecks" | "tls">, never>) | undefined;
        stream?: ({
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
            enableProxyProtocol?: boolean | undefined;
        } & {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: ({
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & Record<Exclude<keyof I["stream"]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
            port?: number | undefined;
            targetGroups?: ({
                targetGroupIds?: string[] | undefined;
            } & {
                targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["stream"]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["stream"]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
            healthchecks?: ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] & ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            } & {
                http?: ({
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                grpc?: ({
                    serviceName?: string | undefined;
                } & {
                    serviceName?: string | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                stream?: ({
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } & {
                    send?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                    receive?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                timeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: ({} & {} & Record<Exclude<keyof I["stream"]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["stream"]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["stream"]["healthchecks"], "$type" | keyof {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[]>, never>) | undefined;
            tls?: ({
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } & {
                sni?: string | undefined;
                validationContext?: ({
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & Record<Exclude<keyof I["stream"]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
            } & Record<Exclude<keyof I["stream"]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
            enableProxyProtocol?: boolean | undefined;
        } & Record<Exclude<keyof I["stream"], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "healthchecks" | "tls" | "enableProxyProtocol">, never>) | undefined;
        backendGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "http" | "grpc" | "stream" | "backendGroupId">, never>>(object: I): AddBackendRequest;
};
export declare const AddBackendMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.AddBackendMetadata";
    encode(message: AddBackendMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddBackendMetadata;
    fromJSON(object: any): AddBackendMetadata;
    toJSON(message: AddBackendMetadata): unknown;
    fromPartial<I extends {
        backendGroupId?: string | undefined;
        backendName?: string | undefined;
    } & {
        backendGroupId?: string | undefined;
        backendName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId" | "backendName">, never>>(object: I): AddBackendMetadata;
};
export declare const UpdateBackendRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendRequest";
    encode(message: UpdateBackendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBackendRequest;
    fromJSON(object: any): UpdateBackendRequest;
    toJSON(message: UpdateBackendRequest): unknown;
    fromPartial<I extends {
        http?: {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            storageBucket?: {
                bucket?: string | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
            useHttp2?: boolean | undefined;
        } | undefined;
        grpc?: {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        stream?: {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
            enableProxyProtocol?: boolean | undefined;
        } | undefined;
        backendGroupId?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
    } & {
        http?: ({
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            storageBucket?: {
                bucket?: string | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
            useHttp2?: boolean | undefined;
        } & {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: ({
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & Record<Exclude<keyof I["http"]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
            port?: number | undefined;
            targetGroups?: ({
                targetGroupIds?: string[] | undefined;
            } & {
                targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["http"]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["http"]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
            storageBucket?: ({
                bucket?: string | undefined;
            } & {
                bucket?: string | undefined;
            } & Record<Exclude<keyof I["http"]["storageBucket"], "$type" | "bucket">, never>) | undefined;
            healthchecks?: ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] & ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            } & {
                http?: ({
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                grpc?: ({
                    serviceName?: string | undefined;
                } & {
                    serviceName?: string | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                stream?: ({
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } & {
                    send?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                    receive?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["http"]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                timeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["http"]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: ({} & {} & Record<Exclude<keyof I["http"]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["http"]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["http"]["healthchecks"], "$type" | keyof {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[]>, never>) | undefined;
            tls?: ({
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } & {
                sni?: string | undefined;
                validationContext?: ({
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & Record<Exclude<keyof I["http"]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
            } & Record<Exclude<keyof I["http"]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
            useHttp2?: boolean | undefined;
        } & Record<Exclude<keyof I["http"], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "storageBucket" | "healthchecks" | "tls" | "useHttp2">, never>) | undefined;
        grpc?: ({
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: ({
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & Record<Exclude<keyof I["grpc"]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
            port?: number | undefined;
            targetGroups?: ({
                targetGroupIds?: string[] | undefined;
            } & {
                targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["grpc"]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
            healthchecks?: ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] & ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            } & {
                http?: ({
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                grpc?: ({
                    serviceName?: string | undefined;
                } & {
                    serviceName?: string | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                stream?: ({
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } & {
                    send?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                    receive?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                timeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: ({} & {} & Record<Exclude<keyof I["grpc"]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["grpc"]["healthchecks"], "$type" | keyof {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[]>, never>) | undefined;
            tls?: ({
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } & {
                sni?: string | undefined;
                validationContext?: ({
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & Record<Exclude<keyof I["grpc"]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
            } & Record<Exclude<keyof I["grpc"]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
        } & Record<Exclude<keyof I["grpc"], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "healthchecks" | "tls">, never>) | undefined;
        stream?: ({
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } | undefined;
            port?: number | undefined;
            targetGroups?: {
                targetGroupIds?: string[] | undefined;
            } | undefined;
            healthchecks?: {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] | undefined;
            tls?: {
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } | undefined;
            enableProxyProtocol?: boolean | undefined;
        } & {
            name?: string | undefined;
            backendWeight?: number | undefined;
            loadBalancingConfig?: ({
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & {
                panicThreshold?: number | undefined;
                localityAwareRoutingPercent?: number | undefined;
                strictLocality?: boolean | undefined;
                mode?: import("../../../../yandex/cloud/apploadbalancer/v1/backend_group").LoadBalancingMode | undefined;
            } & Record<Exclude<keyof I["stream"]["loadBalancingConfig"], "$type" | "panicThreshold" | "localityAwareRoutingPercent" | "strictLocality" | "mode">, never>) | undefined;
            port?: number | undefined;
            targetGroups?: ({
                targetGroupIds?: string[] | undefined;
            } & {
                targetGroupIds?: (string[] & string[] & Record<Exclude<keyof I["stream"]["targetGroups"]["targetGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["stream"]["targetGroups"], "$type" | "targetGroupIds">, never>) | undefined;
            healthchecks?: ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[] & ({
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            } & {
                http?: ({
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["http"], "$type" | "useHttp2" | "host" | "path">, never>) | undefined;
                grpc?: ({
                    serviceName?: string | undefined;
                } & {
                    serviceName?: string | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["grpc"], "$type" | "serviceName">, never>) | undefined;
                stream?: ({
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } & {
                    send?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["stream"]["send"], "$type" | "text">, never>) | undefined;
                    receive?: ({
                        text?: string | undefined;
                    } & {
                        text?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["stream"]["receive"], "$type" | "text">, never>) | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["stream"], "$type" | "send" | "receive">, never>) | undefined;
                tls?: ({
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } & {
                    sni?: string | undefined;
                    validationContext?: ({
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
                timeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["stream"]["healthchecks"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: ({} & {} & Record<Exclude<keyof I["stream"]["healthchecks"][number]["plaintext"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["stream"]["healthchecks"][number], "$type" | "http" | "grpc" | "stream" | "tls" | "timeout" | "interval" | "intervalJitterPercent" | "healthyThreshold" | "unhealthyThreshold" | "healthcheckPort" | "plaintext">, never>)[] & Record<Exclude<keyof I["stream"]["healthchecks"], "$type" | keyof {
                http?: {
                    useHttp2?: boolean | undefined;
                    host?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                grpc?: {
                    serviceName?: string | undefined;
                } | undefined;
                stream?: {
                    send?: {
                        text?: string | undefined;
                    } | undefined;
                    receive?: {
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                tls?: {
                    sni?: string | undefined;
                    validationContext?: {
                        trustedCaId?: string | undefined;
                        trustedCaBytes?: string | undefined;
                    } | undefined;
                } | undefined;
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                intervalJitterPercent?: number | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                healthcheckPort?: number | undefined;
                plaintext?: {} | undefined;
            }[]>, never>) | undefined;
            tls?: ({
                sni?: string | undefined;
                validationContext?: {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } | undefined;
            } & {
                sni?: string | undefined;
                validationContext?: ({
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & {
                    trustedCaId?: string | undefined;
                    trustedCaBytes?: string | undefined;
                } & Record<Exclude<keyof I["stream"]["tls"]["validationContext"], "$type" | "trustedCaId" | "trustedCaBytes">, never>) | undefined;
            } & Record<Exclude<keyof I["stream"]["tls"], "$type" | "sni" | "validationContext">, never>) | undefined;
            enableProxyProtocol?: boolean | undefined;
        } & Record<Exclude<keyof I["stream"], "$type" | "name" | "backendWeight" | "loadBalancingConfig" | "port" | "targetGroups" | "healthchecks" | "tls" | "enableProxyProtocol">, never>) | undefined;
        backendGroupId?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "http" | "grpc" | "stream" | "backendGroupId" | "updateMask">, never>>(object: I): UpdateBackendRequest;
};
export declare const UpdateBackendMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata";
    encode(message: UpdateBackendMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBackendMetadata;
    fromJSON(object: any): UpdateBackendMetadata;
    toJSON(message: UpdateBackendMetadata): unknown;
    fromPartial<I extends {
        backendGroupId?: string | undefined;
        backendName?: string | undefined;
    } & {
        backendGroupId?: string | undefined;
        backendName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId" | "backendName">, never>>(object: I): UpdateBackendMetadata;
};
export declare const RemoveBackendRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendRequest";
    encode(message: RemoveBackendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveBackendRequest;
    fromJSON(object: any): RemoveBackendRequest;
    toJSON(message: RemoveBackendRequest): unknown;
    fromPartial<I extends {
        backendGroupId?: string | undefined;
        backendName?: string | undefined;
    } & {
        backendGroupId?: string | undefined;
        backendName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId" | "backendName">, never>>(object: I): RemoveBackendRequest;
};
export declare const RemoveBackendMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata";
    encode(message: RemoveBackendMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveBackendMetadata;
    fromJSON(object: any): RemoveBackendMetadata;
    toJSON(message: RemoveBackendMetadata): unknown;
    fromPartial<I extends {
        backendGroupId?: string | undefined;
        backendName?: string | undefined;
    } & {
        backendGroupId?: string | undefined;
        backendName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backendGroupId" | "backendName">, never>>(object: I): RemoveBackendMetadata;
};
export declare const ListBackendGroupOperationsRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest";
    encode(message: ListBackendGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackendGroupOperationsRequest;
    fromJSON(object: any): ListBackendGroupOperationsRequest;
    toJSON(message: ListBackendGroupOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        backendGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        backendGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "backendGroupId">, never>>(object: I): ListBackendGroupOperationsRequest;
};
export declare const ListBackendGroupOperationsResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse";
    encode(message: ListBackendGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackendGroupOperationsResponse;
    fromJSON(object: any): ListBackendGroupOperationsResponse;
    toJSON(message: ListBackendGroupOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListBackendGroupOperationsResponse;
};
/** A set of methods for managing backend groups. */
export declare const BackendGroupServiceService: {
    /**
     * Returns the specified backend group.
     *
     * To get the list of all available backend groups, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBackendGroupRequest;
        readonly responseSerialize: (value: BackendGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BackendGroup;
    };
    /** Lists backend groups in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBackendGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBackendGroupsRequest;
        readonly responseSerialize: (value: ListBackendGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBackendGroupsResponse;
    };
    /** Creates a backend group in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateBackendGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified backend group. */
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateBackendGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified backend group. */
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBackendGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Adds backends to the specified backend group. */
    readonly addBackend: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/AddBackend";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddBackendRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddBackendRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Removes backends from the specified backend group. */
    readonly removeBackend: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/RemoveBackend";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveBackendRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveBackendRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified backend. */
    readonly updateBackend: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/UpdateBackend";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateBackendRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateBackendRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified backend group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBackendGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBackendGroupOperationsRequest;
        readonly responseSerialize: (value: ListBackendGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBackendGroupOperationsResponse;
    };
};
export interface BackendGroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified backend group.
     *
     * To get the list of all available backend groups, make a [List] request.
     */
    get: handleUnaryCall<GetBackendGroupRequest, BackendGroup>;
    /** Lists backend groups in the specified folder. */
    list: handleUnaryCall<ListBackendGroupsRequest, ListBackendGroupsResponse>;
    /** Creates a backend group in the specified folder. */
    create: handleUnaryCall<CreateBackendGroupRequest, Operation>;
    /** Updates the specified backend group. */
    update: handleUnaryCall<UpdateBackendGroupRequest, Operation>;
    /** Deletes the specified backend group. */
    delete: handleUnaryCall<DeleteBackendGroupRequest, Operation>;
    /** Adds backends to the specified backend group. */
    addBackend: handleUnaryCall<AddBackendRequest, Operation>;
    /** Removes backends from the specified backend group. */
    removeBackend: handleUnaryCall<RemoveBackendRequest, Operation>;
    /** Updates the specified backend. */
    updateBackend: handleUnaryCall<UpdateBackendRequest, Operation>;
    /** Lists operations for the specified backend group. */
    listOperations: handleUnaryCall<ListBackendGroupOperationsRequest, ListBackendGroupOperationsResponse>;
}
export interface BackendGroupServiceClient extends Client {
    /**
     * Returns the specified backend group.
     *
     * To get the list of all available backend groups, make a [List] request.
     */
    get(request: GetBackendGroupRequest, callback: (error: ServiceError | null, response: BackendGroup) => void): ClientUnaryCall;
    get(request: GetBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BackendGroup) => void): ClientUnaryCall;
    get(request: GetBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BackendGroup) => void): ClientUnaryCall;
    /** Lists backend groups in the specified folder. */
    list(request: ListBackendGroupsRequest, callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void): ClientUnaryCall;
    list(request: ListBackendGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void): ClientUnaryCall;
    list(request: ListBackendGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void): ClientUnaryCall;
    /** Creates a backend group in the specified folder. */
    create(request: CreateBackendGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified backend group. */
    update(request: UpdateBackendGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified backend group. */
    delete(request: DeleteBackendGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Adds backends to the specified backend group. */
    addBackend(request: AddBackendRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addBackend(request: AddBackendRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addBackend(request: AddBackendRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Removes backends from the specified backend group. */
    removeBackend(request: RemoveBackendRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeBackend(request: RemoveBackendRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeBackend(request: RemoveBackendRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified backend. */
    updateBackend(request: UpdateBackendRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateBackend(request: UpdateBackendRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateBackend(request: UpdateBackendRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified backend group. */
    listOperations(request: ListBackendGroupOperationsRequest, callback: (error: ServiceError | null, response: ListBackendGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListBackendGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBackendGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListBackendGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBackendGroupOperationsResponse) => void): ClientUnaryCall;
}
export declare const BackendGroupServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): BackendGroupServiceClient;
    service: typeof BackendGroupServiceService;
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
