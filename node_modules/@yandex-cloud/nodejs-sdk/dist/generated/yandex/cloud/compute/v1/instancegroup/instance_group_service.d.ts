/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { InstanceTemplate, ScalePolicy, DeployPolicy, AllocationPolicy, LoadBalancerSpec, HealthChecksSpec, ApplicationLoadBalancerSpec, Variable, InstanceGroup, ManagedInstance, LogRecord } from "../../../../../yandex/cloud/compute/v1/instancegroup/instance_group";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.compute.v1.instancegroup";
export declare enum InstanceGroupView {
    /** BASIC - Doesn't include the metadata of the instance template in the server response. */
    BASIC = 0,
    /** FULL - Returns the metadata of the instance template in the server response. */
    FULL = 1,
    UNRECOGNIZED = -1
}
export declare function instanceGroupViewFromJSON(object: any): InstanceGroupView;
export declare function instanceGroupViewToJSON(object: InstanceGroupView): string;
export interface ResumeInstanceGroupProcessesRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest";
    /**
     * ID of the instance group to resume processes in.
     *
     * The instance group must have a `PAUSED` status ([InstanceGroup.status]).
     *
     * To get the instance group ID, make a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface ResumeInstanceGroupProcessMetadata {
    $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata";
    /** ID of the instance group that processes are being resumed in. */
    instanceGroupId: string;
}
export interface PauseInstanceGroupProcessesRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest";
    /**
     * ID of the instance group to pause processes in.
     *
     * The instance group must have an `ACTIVE` status ([InstanceGroup.status]).
     *
     * To get the instance group ID, make a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface PauseInstanceGroupProcessMetadata {
    $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata";
    /** ID of the instance group that processes are being paused in. */
    instanceGroupId: string;
}
export interface GetInstanceGroupRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest";
    /**
     * ID of the InstanceGroup resource to return.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /** Defines which information about the Instance template should be returned in the server response. */
    view: InstanceGroupView;
}
export interface CreateInstanceGroupRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest";
    /**
     * ID of the folder to create an instance group in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the instance group. */
    name: string;
    /** Description of the instance group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Instance template that the instance group belongs to. */
    instanceTemplate?: InstanceTemplate;
    /** [Scaling policy](/docs/compute/concepts/instance-groups/scale) of the instance group. */
    scalePolicy?: ScalePolicy;
    /** Deployment policy of the instance group. */
    deployPolicy?: DeployPolicy;
    /** Allocation policy of the instance group by zones and regions. */
    allocationPolicy?: AllocationPolicy;
    /**
     * Settings for balancing load between instances via [Network Load Balancer](/docs/network-load-balancer/concepts)
     * (OSI model layer 3).
     *
     * If specified, a Network Load Balancer target group containing all instances from the instance group will be created
     * and attributed to the instance group.
     */
    loadBalancerSpec?: LoadBalancerSpec;
    /** Health checking specification. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
    healthChecksSpec?: HealthChecksSpec;
    /**
     * ID of the service account. The service account will be used for all API calls
     * made by the Instance Groups component on behalf of the user (for example, creating instances, adding them to load balancer target group, etc.). For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    variables: Variable[];
    /**
     * Flag prohibiting deletion of the instance group.
     *
     * Allowed values:</br>- `false`: The instance group can be deleted.</br>- `true`: The instance group cannot be deleted.
     *
     * The default is `false`.
     */
    deletionProtection: boolean;
    /**
     * Settings for balancing load between instances via [Application Load Balancer](/docs/application-load-balancer/concepts)
     * (OSI model layer 7).
     *
     * If specified, an Application Load Balancer target group containing all instances from the instance group will be created
     * and attributed to the instance group.
     */
    applicationLoadBalancerSpec?: ApplicationLoadBalancerSpec;
}
export interface CreateInstanceGroupRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateInstanceGroupFromYamlRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest";
    /**
     * ID of the folder to create an instance group in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** [InstanceGroupService.Create] request in YAML format. */
    instanceGroupYaml: string;
}
export interface CreateInstanceGroupMetadata {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata";
    /** ID of the instance group that is being created. */
    instanceGroupId: string;
}
export interface UpdateInstanceGroupRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest";
    /**
     * ID of the instance group to update.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /** Field mask that specifies which fields of the InstanceGroup resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the instance group. */
    name: string;
    /** Description of the instance group. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * The existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /** Instance template that the instance group belongs to. */
    instanceTemplate?: InstanceTemplate;
    /** [Scaling policy](/docs/compute/concepts/instance-groups/scale) of the instance group. */
    scalePolicy?: ScalePolicy;
    /** Deployment policy of the instance group. */
    deployPolicy?: DeployPolicy;
    /** Allocation policy of the instance group by zones and regions. */
    allocationPolicy?: AllocationPolicy;
    /** Health checking specification. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
    healthChecksSpec?: HealthChecksSpec;
    /**
     * ID of the service account. The service account will be used for all API calls
     * made by the Instance Groups component on behalf of the user (for example, creating instances, adding them to load balancer target group, etc.). For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /**
     * Settings for balancing load between instances via [Network Load Balancer](/docs/network-load-balancer/concepts)
     * (OSI model layer 3).
     */
    loadBalancerSpec?: LoadBalancerSpec;
    variables: Variable[];
    /** Flag that inhibits deletion of the instance group */
    deletionProtection: boolean;
    /**
     * Settings for balancing load between instances via [Application Load Balancer](/docs/application-load-balancer/concepts)
     * (OSI model layer 7).
     */
    applicationLoadBalancerSpec?: ApplicationLoadBalancerSpec;
}
export interface UpdateInstanceGroupRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateInstanceGroupFromYamlRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest";
    /**
     * ID of the instance group to update.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /** [InstanceGroupService.Update] request in YAML format. */
    instanceGroupYaml: string;
}
export interface UpdateInstanceGroupMetadata {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata";
    /**
     * ID of the InstanceGroup resource that is being updated.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface StartInstanceGroupRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest";
    /**
     * ID of the instance group to start.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface StartInstanceGroupMetadata {
    $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata";
    /** ID of the InstanceGroup resource that is being started. */
    instanceGroupId: string;
}
export interface StopInstanceGroupRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest";
    /**
     * ID of the instance group to stop.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface StopInstanceGroupMetadata {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata";
    /** ID of the InstanceGroup resource that is being stopped. */
    instanceGroupId: string;
}
export interface RollingRestartRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartRequest";
    /**
     * ID of the instance group to restart instances in.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * IDs of managed instances in the group to restart
     * To get instance IDs, use a [InstanceGroupService.ListInstances] request.
     */
    managedInstanceIds: string[];
}
export interface RollingRestartMetadata {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartMetadata";
    /** ID of the InstanceGroup resource that is being rolling restarted. */
    instanceGroupId: string;
}
export interface RollingRecreateRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateRequest";
    /**
     * ID of the instance group to recreate instances in.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * IDs of managed instances in the group to recreate
     * To get instance IDs, use a [InstanceGroupService.ListInstances] request.
     */
    managedInstanceIds: string[];
}
export interface RollingRecreateMetadata {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateMetadata";
    /** ID of the InstanceGroup resource that is being rolling recreated. */
    instanceGroupId: string;
}
export interface DeleteInstanceGroupRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest";
    /**
     * ID of the instance group to delete.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface DeleteInstanceGroupMetadata {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata";
    /**
     * ID of the instance group that is being deleted.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface DeleteInstancesMetadata {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata";
    /** ID of the instance group that the instances are being deleted from. */
    instanceGroupId: string;
}
export interface StopInstancesMetadata {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata";
    /** ID of the instance group that the instances are being stopped from. */
    instanceGroupId: string;
}
export interface ListInstanceGroupsRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest";
    /**
     * ID of the folder to list instance groups in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListInstanceGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListInstanceGroupsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [InstanceGroup.name] field.
     */
    filter: string;
    /** Defines which information about the Instance template should be returned in the server response. */
    view: InstanceGroupView;
}
export interface ListInstanceGroupsResponse {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse";
    /** Lists instance groups for the specified folder. */
    instanceGroups: InstanceGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListInstanceGroupsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListInstanceGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListInstanceGroupInstancesRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest";
    /**
     * ID of the InstanceGroup resource to list instances for.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListInstanceGroupInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListInstanceGroupInstancesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [ManagedInstance.name] field.
     */
    filter: string;
}
export interface ListInstanceGroupInstancesResponse {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse";
    /** Lists instances for the specified instance group. */
    instances: ManagedInstance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListInstanceGroupInstancesRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListInstanceGroupInstancesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteInstancesRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest";
    /**
     * ID of the instance group that the instances are being deleted from.
     * To get the ID of the instance group, use the [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * IDs of the instances to delete. Instances will be deleted along with all dependent resources.
     * Only IDs from the ManagedInstance.id field are allowed, not ManagedInstance.instance_id.
     */
    managedInstanceIds: string[];
    /**
     * If set to true, the target size of instance group will not be reduced and
     * a new instance will be created instead of the deleted one. By default, the target size of instance group
     * will be reduced by the specified number of instance IDs.
     */
    createAnother: boolean;
}
export interface StopInstancesRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesRequest";
    /**
     * ID of the instance group that the instances are being stopped from.
     * To get the ID of the instance group, use the [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * IDs of the instances to stop. After stopping, the instance can be updated, started, or deleted
     * according to scale and deploy policies.
     * Only IDs from the ManagedInstance.id field are allowed, not ManagedInstance.instance_id.
     */
    managedInstanceIds: string[];
}
export interface ListInstanceGroupOperationsRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest";
    /**
     * ID of the InstanceGroup resource to list operations for.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is more than [page_size], the service returns a [ListInstanceGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListInstanceGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [InstanceGroup.name] field.
     */
    filter: string;
}
export interface ListInstanceGroupOperationsResponse {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse";
    /** Lists operations for the specified instance group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListInstanceGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListInstanceGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListInstanceGroupLogRecordsRequest {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest";
    /**
     * ID of the InstanceGroup resource to list logs for.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListInstanceGroupLogRecordsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListInstanceGroupLogRecordsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [InstanceGroup.name] field.
     */
    filter: string;
}
export interface ListInstanceGroupLogRecordsResponse {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse";
    /** Lists logs for the specified instance group. */
    logRecords: LogRecord[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListInstanceGroupLogRecordsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListInstanceGroupLogRecordsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const ResumeInstanceGroupProcessesRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest";
    encode(message: ResumeInstanceGroupProcessesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeInstanceGroupProcessesRequest;
    fromJSON(object: any): ResumeInstanceGroupProcessesRequest;
    toJSON(message: ResumeInstanceGroupProcessesRequest): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): ResumeInstanceGroupProcessesRequest;
};
export declare const ResumeInstanceGroupProcessMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata";
    encode(message: ResumeInstanceGroupProcessMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeInstanceGroupProcessMetadata;
    fromJSON(object: any): ResumeInstanceGroupProcessMetadata;
    toJSON(message: ResumeInstanceGroupProcessMetadata): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): ResumeInstanceGroupProcessMetadata;
};
export declare const PauseInstanceGroupProcessesRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest";
    encode(message: PauseInstanceGroupProcessesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseInstanceGroupProcessesRequest;
    fromJSON(object: any): PauseInstanceGroupProcessesRequest;
    toJSON(message: PauseInstanceGroupProcessesRequest): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): PauseInstanceGroupProcessesRequest;
};
export declare const PauseInstanceGroupProcessMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata";
    encode(message: PauseInstanceGroupProcessMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseInstanceGroupProcessMetadata;
    fromJSON(object: any): PauseInstanceGroupProcessMetadata;
    toJSON(message: PauseInstanceGroupProcessMetadata): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): PauseInstanceGroupProcessMetadata;
};
export declare const GetInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest";
    encode(message: GetInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInstanceGroupRequest;
    fromJSON(object: any): GetInstanceGroupRequest;
    toJSON(message: GetInstanceGroupRequest): unknown;
    fromPartial<I extends {
        view?: InstanceGroupView | undefined;
        instanceGroupId?: string | undefined;
    } & {
        view?: InstanceGroupView | undefined;
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "view" | "instanceGroupId">, never>>(object: I): GetInstanceGroupRequest;
};
export declare const CreateInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest";
    encode(message: CreateInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceGroupRequest;
    fromJSON(object: any): CreateInstanceGroupRequest;
    toJSON(message: CreateInstanceGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        variables?: {
            value?: string | undefined;
            key?: string | undefined;
        }[] | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        allocationPolicy?: {
            zones?: {
                zoneId?: string | undefined;
                instanceTagsPool?: string[] | undefined;
            }[] | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        scalePolicy?: {
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
            autoScale?: {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } | undefined;
            testAutoScale?: {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } | undefined;
        } | undefined;
        instanceTemplate?: {
            description?: string | undefined;
            name?: string | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            platformId?: string | undefined;
            serviceAccountId?: string | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
            hostname?: string | undefined;
            resourcesSpec?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            bootDiskSpec?: {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            } | undefined;
            secondaryDiskSpecs?: {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            }[] | undefined;
            filesystemSpecs?: {
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaceSpecs?: {
                networkId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                subnetIds?: string[] | undefined;
            }[] | undefined;
        } | undefined;
        deployPolicy?: {
            maxUnavailable?: number | undefined;
            maxDeleting?: number | undefined;
            maxCreating?: number | undefined;
            maxExpansion?: number | undefined;
            startupDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
        } | undefined;
        loadBalancerSpec?: {
            targetGroupSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
            maxOpeningTrafficDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } | undefined;
        healthChecksSpec?: {
            healthCheckSpecs?: {
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[] | undefined;
            maxCheckingHealthDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        applicationLoadBalancerSpec?: {
            targetGroupSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
            maxOpeningTrafficDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        variables?: ({
            value?: string | undefined;
            key?: string | undefined;
        }[] & ({
            value?: string | undefined;
            key?: string | undefined;
        } & {
            value?: string | undefined;
            key?: string | undefined;
        } & Record<Exclude<keyof I["variables"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["variables"], "$type" | keyof {
            value?: string | undefined;
            key?: string | undefined;
        }[]>, never>) | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        allocationPolicy?: ({
            zones?: {
                zoneId?: string | undefined;
                instanceTagsPool?: string[] | undefined;
            }[] | undefined;
        } & {
            zones?: ({
                zoneId?: string | undefined;
                instanceTagsPool?: string[] | undefined;
            }[] & ({
                zoneId?: string | undefined;
                instanceTagsPool?: string[] | undefined;
            } & {
                zoneId?: string | undefined;
                instanceTagsPool?: (string[] & string[] & Record<Exclude<keyof I["allocationPolicy"]["zones"][number]["instanceTagsPool"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["allocationPolicy"]["zones"][number], "$type" | "zoneId" | "instanceTagsPool">, never>)[] & Record<Exclude<keyof I["allocationPolicy"]["zones"], "$type" | keyof {
                zoneId?: string | undefined;
                instanceTagsPool?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["allocationPolicy"], "$type" | "zones">, never>) | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        scalePolicy?: ({
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
            autoScale?: {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } | undefined;
            testAutoScale?: {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } | undefined;
        } & {
            fixedScale?: ({
                size?: number | undefined;
            } & {
                size?: number | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
            autoScale?: ({
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } & {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                warmupDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                stabilizationDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: ({
                    utilizationTarget?: number | undefined;
                } & {
                    utilizationTarget?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["cpuUtilizationRule"], "$type" | "utilizationTarget">, never>) | undefined;
                customRules?: ({
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] & ({
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                } & {
                    folderId?: string | undefined;
                    labels?: ({
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["customRules"][number]["labels"], string | number>, never>) | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["customRules"][number], "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>)[] & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["customRules"], "$type" | keyof {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[]>, never>) | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["autoScale"], "$type" | "minZoneSize" | "maxSize" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "initialSize" | "cpuUtilizationRule" | "customRules" | "autoScaleType">, never>) | undefined;
            testAutoScale?: ({
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } & {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                warmupDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                stabilizationDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: ({
                    utilizationTarget?: number | undefined;
                } & {
                    utilizationTarget?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["cpuUtilizationRule"], "$type" | "utilizationTarget">, never>) | undefined;
                customRules?: ({
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] & ({
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                } & {
                    folderId?: string | undefined;
                    labels?: ({
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["customRules"][number]["labels"], string | number>, never>) | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["customRules"][number], "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>)[] & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["customRules"], "$type" | keyof {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[]>, never>) | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"], "$type" | "minZoneSize" | "maxSize" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "initialSize" | "cpuUtilizationRule" | "customRules" | "autoScaleType">, never>) | undefined;
        } & Record<Exclude<keyof I["scalePolicy"], "$type" | "fixedScale" | "autoScale" | "testAutoScale">, never>) | undefined;
        instanceTemplate?: ({
            description?: string | undefined;
            name?: string | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            platformId?: string | undefined;
            serviceAccountId?: string | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
            hostname?: string | undefined;
            resourcesSpec?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            bootDiskSpec?: {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            } | undefined;
            secondaryDiskSpecs?: {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            }[] | undefined;
            filesystemSpecs?: {
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaceSpecs?: {
                networkId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                subnetIds?: string[] | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            name?: string | undefined;
            metadata?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["metadata"], string | number>, never>) | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["labels"], string | number>, never>) | undefined;
            platformId?: string | undefined;
            serviceAccountId?: string | undefined;
            schedulingPolicy?: ({
                preemptible?: boolean | undefined;
            } & {
                preemptible?: boolean | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
            networkSettings?: ({
                type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
            } & {
                type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["networkSettings"], "$type" | "type">, never>) | undefined;
            placementPolicy?: ({
                placementGroupId?: string | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } & {
                placementGroupId?: string | undefined;
                hostAffinityRules?: ({
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] & ({
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                } & {
                    values?: (string[] & string[] & Record<Exclude<keyof I["instanceTemplate"]["placementPolicy"]["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                } & Record<Exclude<keyof I["instanceTemplate"]["placementPolicy"]["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["placementPolicy"]["hostAffinityRules"], "$type" | keyof {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["placementPolicy"], "$type" | "placementGroupId" | "hostAffinityRules">, never>) | undefined;
            hostname?: string | undefined;
            resourcesSpec?: ({
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } & {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["resourcesSpec"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
            bootDiskSpec?: ({
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: ({
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } & {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } & Record<Exclude<keyof I["instanceTemplate"]["bootDiskSpec"]["diskSpec"], "$type" | "description" | "size" | "typeId" | "imageId" | "snapshotId" | "preserveAfterInstanceDelete">, never>) | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["bootDiskSpec"], "$type" | "name" | "mode" | "diskId" | "deviceName" | "diskSpec">, never>) | undefined;
            secondaryDiskSpecs?: ({
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: ({
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } & {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } & Record<Exclude<keyof I["instanceTemplate"]["secondaryDiskSpecs"][number]["diskSpec"], "$type" | "description" | "size" | "typeId" | "imageId" | "snapshotId" | "preserveAfterInstanceDelete">, never>) | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["secondaryDiskSpecs"][number], "$type" | "name" | "mode" | "diskId" | "deviceName" | "diskSpec">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["secondaryDiskSpecs"], "$type" | keyof {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            filesystemSpecs?: ({
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] & ({
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            } & {
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["filesystemSpecs"][number], "$type" | "mode" | "filesystemId" | "deviceName">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["filesystemSpecs"], "$type" | keyof {
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[]>, never>) | undefined;
            networkInterfaceSpecs?: ({
                networkId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                subnetIds?: string[] | undefined;
            }[] & ({
                networkId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                subnetIds?: string[] | undefined;
            } & {
                networkId?: string | undefined;
                securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                primaryV4AddressSpec?: ({
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    oneToOneNatSpec?: ({
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
                    dnsRecordSpecs?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                primaryV6AddressSpec?: ({
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    oneToOneNatSpec?: ({
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
                    dnsRecordSpecs?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                subnetIds?: (string[] & string[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number], "$type" | "networkId" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec" | "subnetIds">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"], "$type" | keyof {
                networkId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                subnetIds?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["instanceTemplate"], "$type" | "description" | "name" | "metadata" | "labels" | "platformId" | "serviceAccountId" | "schedulingPolicy" | "networkSettings" | "placementPolicy" | "hostname" | "resourcesSpec" | "bootDiskSpec" | "secondaryDiskSpecs" | "filesystemSpecs" | "networkInterfaceSpecs">, never>) | undefined;
        deployPolicy?: ({
            maxUnavailable?: number | undefined;
            maxDeleting?: number | undefined;
            maxCreating?: number | undefined;
            maxExpansion?: number | undefined;
            startupDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
        } & {
            maxUnavailable?: number | undefined;
            maxDeleting?: number | undefined;
            maxCreating?: number | undefined;
            maxExpansion?: number | undefined;
            startupDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["deployPolicy"]["startupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
        } & Record<Exclude<keyof I["deployPolicy"], "$type" | "maxUnavailable" | "maxDeleting" | "maxCreating" | "maxExpansion" | "startupDuration" | "strategy">, never>) | undefined;
        loadBalancerSpec?: ({
            targetGroupSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
            maxOpeningTrafficDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } & {
            targetGroupSpec?: ({
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
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
                } & Record<Exclude<keyof I["loadBalancerSpec"]["targetGroupSpec"]["labels"], string | number>, never>) | undefined;
            } & Record<Exclude<keyof I["loadBalancerSpec"]["targetGroupSpec"], "$type" | "description" | "name" | "labels">, never>) | undefined;
            maxOpeningTrafficDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["loadBalancerSpec"]["maxOpeningTrafficDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } & Record<Exclude<keyof I["loadBalancerSpec"], "$type" | "targetGroupSpec" | "maxOpeningTrafficDuration" | "ignoreHealthChecks">, never>) | undefined;
        healthChecksSpec?: ({
            healthCheckSpecs?: {
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[] | undefined;
            maxCheckingHealthDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            healthCheckSpecs?: ({
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[] & ({
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            } & {
                timeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: ({
                    port?: number | undefined;
                } & {
                    port?: number | undefined;
                } & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"][number]["tcpOptions"], "$type" | "port">, never>) | undefined;
                httpOptions?: ({
                    port?: number | undefined;
                    path?: string | undefined;
                } & {
                    port?: number | undefined;
                    path?: string | undefined;
                } & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"][number]["httpOptions"], "$type" | "port" | "path">, never>) | undefined;
            } & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"][number], "$type" | "timeout" | "interval" | "healthyThreshold" | "unhealthyThreshold" | "tcpOptions" | "httpOptions">, never>)[] & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"], "$type" | keyof {
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            maxCheckingHealthDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["healthChecksSpec"]["maxCheckingHealthDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["healthChecksSpec"], "$type" | "healthCheckSpecs" | "maxCheckingHealthDuration">, never>) | undefined;
        applicationLoadBalancerSpec?: ({
            targetGroupSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
            maxOpeningTrafficDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } & {
            targetGroupSpec?: ({
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
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
                } & Record<Exclude<keyof I["applicationLoadBalancerSpec"]["targetGroupSpec"]["labels"], string | number>, never>) | undefined;
            } & Record<Exclude<keyof I["applicationLoadBalancerSpec"]["targetGroupSpec"], "$type" | "description" | "name" | "labels">, never>) | undefined;
            maxOpeningTrafficDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["applicationLoadBalancerSpec"]["maxOpeningTrafficDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } & Record<Exclude<keyof I["applicationLoadBalancerSpec"], "$type" | "targetGroupSpec" | "maxOpeningTrafficDuration" | "ignoreHealthChecks">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "variables" | "labels" | "allocationPolicy" | "deletionProtection" | "serviceAccountId" | "scalePolicy" | "instanceTemplate" | "deployPolicy" | "loadBalancerSpec" | "healthChecksSpec" | "applicationLoadBalancerSpec">, never>>(object: I): CreateInstanceGroupRequest;
};
export declare const CreateInstanceGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry";
    encode(message: CreateInstanceGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateInstanceGroupRequest_LabelsEntry;
    toJSON(message: CreateInstanceGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateInstanceGroupRequest_LabelsEntry;
};
export declare const CreateInstanceGroupFromYamlRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest";
    encode(message: CreateInstanceGroupFromYamlRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceGroupFromYamlRequest;
    fromJSON(object: any): CreateInstanceGroupFromYamlRequest;
    toJSON(message: CreateInstanceGroupFromYamlRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        instanceGroupYaml?: string | undefined;
    } & {
        folderId?: string | undefined;
        instanceGroupYaml?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "instanceGroupYaml">, never>>(object: I): CreateInstanceGroupFromYamlRequest;
};
export declare const CreateInstanceGroupMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata";
    encode(message: CreateInstanceGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceGroupMetadata;
    fromJSON(object: any): CreateInstanceGroupMetadata;
    toJSON(message: CreateInstanceGroupMetadata): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): CreateInstanceGroupMetadata;
};
export declare const UpdateInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest";
    encode(message: UpdateInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceGroupRequest;
    fromJSON(object: any): UpdateInstanceGroupRequest;
    toJSON(message: UpdateInstanceGroupRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        variables?: {
            value?: string | undefined;
            key?: string | undefined;
        }[] | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        allocationPolicy?: {
            zones?: {
                zoneId?: string | undefined;
                instanceTagsPool?: string[] | undefined;
            }[] | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        scalePolicy?: {
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
            autoScale?: {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } | undefined;
            testAutoScale?: {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } | undefined;
        } | undefined;
        instanceTemplate?: {
            description?: string | undefined;
            name?: string | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            platformId?: string | undefined;
            serviceAccountId?: string | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
            hostname?: string | undefined;
            resourcesSpec?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            bootDiskSpec?: {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            } | undefined;
            secondaryDiskSpecs?: {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            }[] | undefined;
            filesystemSpecs?: {
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaceSpecs?: {
                networkId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                subnetIds?: string[] | undefined;
            }[] | undefined;
        } | undefined;
        deployPolicy?: {
            maxUnavailable?: number | undefined;
            maxDeleting?: number | undefined;
            maxCreating?: number | undefined;
            maxExpansion?: number | undefined;
            startupDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
        } | undefined;
        loadBalancerSpec?: {
            targetGroupSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
            maxOpeningTrafficDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } | undefined;
        healthChecksSpec?: {
            healthCheckSpecs?: {
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[] | undefined;
            maxCheckingHealthDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        applicationLoadBalancerSpec?: {
            targetGroupSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
            maxOpeningTrafficDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } | undefined;
        instanceGroupId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        variables?: ({
            value?: string | undefined;
            key?: string | undefined;
        }[] & ({
            value?: string | undefined;
            key?: string | undefined;
        } & {
            value?: string | undefined;
            key?: string | undefined;
        } & Record<Exclude<keyof I["variables"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["variables"], "$type" | keyof {
            value?: string | undefined;
            key?: string | undefined;
        }[]>, never>) | undefined;
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
        allocationPolicy?: ({
            zones?: {
                zoneId?: string | undefined;
                instanceTagsPool?: string[] | undefined;
            }[] | undefined;
        } & {
            zones?: ({
                zoneId?: string | undefined;
                instanceTagsPool?: string[] | undefined;
            }[] & ({
                zoneId?: string | undefined;
                instanceTagsPool?: string[] | undefined;
            } & {
                zoneId?: string | undefined;
                instanceTagsPool?: (string[] & string[] & Record<Exclude<keyof I["allocationPolicy"]["zones"][number]["instanceTagsPool"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["allocationPolicy"]["zones"][number], "$type" | "zoneId" | "instanceTagsPool">, never>)[] & Record<Exclude<keyof I["allocationPolicy"]["zones"], "$type" | keyof {
                zoneId?: string | undefined;
                instanceTagsPool?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["allocationPolicy"], "$type" | "zones">, never>) | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        scalePolicy?: ({
            fixedScale?: {
                size?: number | undefined;
            } | undefined;
            autoScale?: {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } | undefined;
            testAutoScale?: {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } | undefined;
        } & {
            fixedScale?: ({
                size?: number | undefined;
            } & {
                size?: number | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
            autoScale?: ({
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } & {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                warmupDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                stabilizationDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: ({
                    utilizationTarget?: number | undefined;
                } & {
                    utilizationTarget?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["cpuUtilizationRule"], "$type" | "utilizationTarget">, never>) | undefined;
                customRules?: ({
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] & ({
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                } & {
                    folderId?: string | undefined;
                    labels?: ({
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["customRules"][number]["labels"], string | number>, never>) | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["customRules"][number], "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>)[] & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["customRules"], "$type" | keyof {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[]>, never>) | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["autoScale"], "$type" | "minZoneSize" | "maxSize" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "initialSize" | "cpuUtilizationRule" | "customRules" | "autoScaleType">, never>) | undefined;
            testAutoScale?: ({
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                warmupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                stabilizationDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: {
                    utilizationTarget?: number | undefined;
                } | undefined;
                customRules?: {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } & {
                minZoneSize?: number | undefined;
                maxSize?: number | undefined;
                measurementDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                warmupDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                stabilizationDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                initialSize?: number | undefined;
                cpuUtilizationRule?: ({
                    utilizationTarget?: number | undefined;
                } & {
                    utilizationTarget?: number | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["cpuUtilizationRule"], "$type" | "utilizationTarget">, never>) | undefined;
                customRules?: ({
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] & ({
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                } & {
                    folderId?: string | undefined;
                    labels?: ({
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["customRules"][number]["labels"], string | number>, never>) | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["customRules"][number], "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>)[] & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["customRules"], "$type" | keyof {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[]>, never>) | undefined;
                autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
            } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"], "$type" | "minZoneSize" | "maxSize" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "initialSize" | "cpuUtilizationRule" | "customRules" | "autoScaleType">, never>) | undefined;
        } & Record<Exclude<keyof I["scalePolicy"], "$type" | "fixedScale" | "autoScale" | "testAutoScale">, never>) | undefined;
        instanceTemplate?: ({
            description?: string | undefined;
            name?: string | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            platformId?: string | undefined;
            serviceAccountId?: string | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
            hostname?: string | undefined;
            resourcesSpec?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            bootDiskSpec?: {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            } | undefined;
            secondaryDiskSpecs?: {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            }[] | undefined;
            filesystemSpecs?: {
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaceSpecs?: {
                networkId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                subnetIds?: string[] | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            name?: string | undefined;
            metadata?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["metadata"], string | number>, never>) | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["labels"], string | number>, never>) | undefined;
            platformId?: string | undefined;
            serviceAccountId?: string | undefined;
            schedulingPolicy?: ({
                preemptible?: boolean | undefined;
            } & {
                preemptible?: boolean | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
            networkSettings?: ({
                type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
            } & {
                type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["networkSettings"], "$type" | "type">, never>) | undefined;
            placementPolicy?: ({
                placementGroupId?: string | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } & {
                placementGroupId?: string | undefined;
                hostAffinityRules?: ({
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] & ({
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                } & {
                    values?: (string[] & string[] & Record<Exclude<keyof I["instanceTemplate"]["placementPolicy"]["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                } & Record<Exclude<keyof I["instanceTemplate"]["placementPolicy"]["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["placementPolicy"]["hostAffinityRules"], "$type" | keyof {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["placementPolicy"], "$type" | "placementGroupId" | "hostAffinityRules">, never>) | undefined;
            hostname?: string | undefined;
            resourcesSpec?: ({
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } & {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["resourcesSpec"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
            bootDiskSpec?: ({
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: ({
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } & {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } & Record<Exclude<keyof I["instanceTemplate"]["bootDiskSpec"]["diskSpec"], "$type" | "description" | "size" | "typeId" | "imageId" | "snapshotId" | "preserveAfterInstanceDelete">, never>) | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["bootDiskSpec"], "$type" | "name" | "mode" | "diskId" | "deviceName" | "diskSpec">, never>) | undefined;
            secondaryDiskSpecs?: ({
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: ({
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } & {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } & Record<Exclude<keyof I["instanceTemplate"]["secondaryDiskSpecs"][number]["diskSpec"], "$type" | "description" | "size" | "typeId" | "imageId" | "snapshotId" | "preserveAfterInstanceDelete">, never>) | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["secondaryDiskSpecs"][number], "$type" | "name" | "mode" | "diskId" | "deviceName" | "diskSpec">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["secondaryDiskSpecs"], "$type" | keyof {
                name?: string | undefined;
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                diskSpec?: {
                    description?: string | undefined;
                    size?: number | undefined;
                    typeId?: string | undefined;
                    imageId?: string | undefined;
                    snapshotId?: string | undefined;
                    preserveAfterInstanceDelete?: boolean | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            filesystemSpecs?: ({
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] & ({
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            } & {
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["filesystemSpecs"][number], "$type" | "mode" | "filesystemId" | "deviceName">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["filesystemSpecs"], "$type" | keyof {
                mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[]>, never>) | undefined;
            networkInterfaceSpecs?: ({
                networkId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                subnetIds?: string[] | undefined;
            }[] & ({
                networkId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                subnetIds?: string[] | undefined;
            } & {
                networkId?: string | undefined;
                securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                primaryV4AddressSpec?: ({
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    oneToOneNatSpec?: ({
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
                    dnsRecordSpecs?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                primaryV6AddressSpec?: ({
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    oneToOneNatSpec?: ({
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
                    dnsRecordSpecs?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                subnetIds?: (string[] & string[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"][number], "$type" | "networkId" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec" | "subnetIds">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["networkInterfaceSpecs"], "$type" | keyof {
                networkId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                primaryV4AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6AddressSpec?: {
                    address?: string | undefined;
                    oneToOneNatSpec?: {
                        address?: string | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                subnetIds?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["instanceTemplate"], "$type" | "description" | "name" | "metadata" | "labels" | "platformId" | "serviceAccountId" | "schedulingPolicy" | "networkSettings" | "placementPolicy" | "hostname" | "resourcesSpec" | "bootDiskSpec" | "secondaryDiskSpecs" | "filesystemSpecs" | "networkInterfaceSpecs">, never>) | undefined;
        deployPolicy?: ({
            maxUnavailable?: number | undefined;
            maxDeleting?: number | undefined;
            maxCreating?: number | undefined;
            maxExpansion?: number | undefined;
            startupDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
        } & {
            maxUnavailable?: number | undefined;
            maxDeleting?: number | undefined;
            maxCreating?: number | undefined;
            maxExpansion?: number | undefined;
            startupDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["deployPolicy"]["startupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
        } & Record<Exclude<keyof I["deployPolicy"], "$type" | "maxUnavailable" | "maxDeleting" | "maxCreating" | "maxExpansion" | "startupDuration" | "strategy">, never>) | undefined;
        loadBalancerSpec?: ({
            targetGroupSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
            maxOpeningTrafficDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } & {
            targetGroupSpec?: ({
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
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
                } & Record<Exclude<keyof I["loadBalancerSpec"]["targetGroupSpec"]["labels"], string | number>, never>) | undefined;
            } & Record<Exclude<keyof I["loadBalancerSpec"]["targetGroupSpec"], "$type" | "description" | "name" | "labels">, never>) | undefined;
            maxOpeningTrafficDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["loadBalancerSpec"]["maxOpeningTrafficDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } & Record<Exclude<keyof I["loadBalancerSpec"], "$type" | "targetGroupSpec" | "maxOpeningTrafficDuration" | "ignoreHealthChecks">, never>) | undefined;
        healthChecksSpec?: ({
            healthCheckSpecs?: {
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[] | undefined;
            maxCheckingHealthDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            healthCheckSpecs?: ({
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[] & ({
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            } & {
                timeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: ({
                    port?: number | undefined;
                } & {
                    port?: number | undefined;
                } & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"][number]["tcpOptions"], "$type" | "port">, never>) | undefined;
                httpOptions?: ({
                    port?: number | undefined;
                    path?: string | undefined;
                } & {
                    port?: number | undefined;
                    path?: string | undefined;
                } & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"][number]["httpOptions"], "$type" | "port" | "path">, never>) | undefined;
            } & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"][number], "$type" | "timeout" | "interval" | "healthyThreshold" | "unhealthyThreshold" | "tcpOptions" | "httpOptions">, never>)[] & Record<Exclude<keyof I["healthChecksSpec"]["healthCheckSpecs"], "$type" | keyof {
                timeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                healthyThreshold?: number | undefined;
                unhealthyThreshold?: number | undefined;
                tcpOptions?: {
                    port?: number | undefined;
                } | undefined;
                httpOptions?: {
                    port?: number | undefined;
                    path?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            maxCheckingHealthDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["healthChecksSpec"]["maxCheckingHealthDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["healthChecksSpec"], "$type" | "healthCheckSpecs" | "maxCheckingHealthDuration">, never>) | undefined;
        applicationLoadBalancerSpec?: ({
            targetGroupSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
            } | undefined;
            maxOpeningTrafficDuration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } & {
            targetGroupSpec?: ({
                description?: string | undefined;
                name?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
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
                } & Record<Exclude<keyof I["applicationLoadBalancerSpec"]["targetGroupSpec"]["labels"], string | number>, never>) | undefined;
            } & Record<Exclude<keyof I["applicationLoadBalancerSpec"]["targetGroupSpec"], "$type" | "description" | "name" | "labels">, never>) | undefined;
            maxOpeningTrafficDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["applicationLoadBalancerSpec"]["maxOpeningTrafficDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            ignoreHealthChecks?: boolean | undefined;
        } & Record<Exclude<keyof I["applicationLoadBalancerSpec"], "$type" | "targetGroupSpec" | "maxOpeningTrafficDuration" | "ignoreHealthChecks">, never>) | undefined;
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "variables" | "labels" | "updateMask" | "allocationPolicy" | "deletionProtection" | "serviceAccountId" | "scalePolicy" | "instanceTemplate" | "deployPolicy" | "loadBalancerSpec" | "healthChecksSpec" | "applicationLoadBalancerSpec" | "instanceGroupId">, never>>(object: I): UpdateInstanceGroupRequest;
};
export declare const UpdateInstanceGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry";
    encode(message: UpdateInstanceGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateInstanceGroupRequest_LabelsEntry;
    toJSON(message: UpdateInstanceGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateInstanceGroupRequest_LabelsEntry;
};
export declare const UpdateInstanceGroupFromYamlRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest";
    encode(message: UpdateInstanceGroupFromYamlRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceGroupFromYamlRequest;
    fromJSON(object: any): UpdateInstanceGroupFromYamlRequest;
    toJSON(message: UpdateInstanceGroupFromYamlRequest): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
        instanceGroupYaml?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
        instanceGroupYaml?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId" | "instanceGroupYaml">, never>>(object: I): UpdateInstanceGroupFromYamlRequest;
};
export declare const UpdateInstanceGroupMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata";
    encode(message: UpdateInstanceGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceGroupMetadata;
    fromJSON(object: any): UpdateInstanceGroupMetadata;
    toJSON(message: UpdateInstanceGroupMetadata): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): UpdateInstanceGroupMetadata;
};
export declare const StartInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest";
    encode(message: StartInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartInstanceGroupRequest;
    fromJSON(object: any): StartInstanceGroupRequest;
    toJSON(message: StartInstanceGroupRequest): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): StartInstanceGroupRequest;
};
export declare const StartInstanceGroupMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata";
    encode(message: StartInstanceGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartInstanceGroupMetadata;
    fromJSON(object: any): StartInstanceGroupMetadata;
    toJSON(message: StartInstanceGroupMetadata): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): StartInstanceGroupMetadata;
};
export declare const StopInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest";
    encode(message: StopInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstanceGroupRequest;
    fromJSON(object: any): StopInstanceGroupRequest;
    toJSON(message: StopInstanceGroupRequest): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): StopInstanceGroupRequest;
};
export declare const StopInstanceGroupMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata";
    encode(message: StopInstanceGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstanceGroupMetadata;
    fromJSON(object: any): StopInstanceGroupMetadata;
    toJSON(message: StopInstanceGroupMetadata): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): StopInstanceGroupMetadata;
};
export declare const RollingRestartRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartRequest";
    encode(message: RollingRestartRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RollingRestartRequest;
    fromJSON(object: any): RollingRestartRequest;
    toJSON(message: RollingRestartRequest): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
        managedInstanceIds?: string[] | undefined;
    } & {
        instanceGroupId?: string | undefined;
        managedInstanceIds?: (string[] & string[] & Record<Exclude<keyof I["managedInstanceIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId" | "managedInstanceIds">, never>>(object: I): RollingRestartRequest;
};
export declare const RollingRestartMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartMetadata";
    encode(message: RollingRestartMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RollingRestartMetadata;
    fromJSON(object: any): RollingRestartMetadata;
    toJSON(message: RollingRestartMetadata): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): RollingRestartMetadata;
};
export declare const RollingRecreateRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateRequest";
    encode(message: RollingRecreateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RollingRecreateRequest;
    fromJSON(object: any): RollingRecreateRequest;
    toJSON(message: RollingRecreateRequest): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
        managedInstanceIds?: string[] | undefined;
    } & {
        instanceGroupId?: string | undefined;
        managedInstanceIds?: (string[] & string[] & Record<Exclude<keyof I["managedInstanceIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId" | "managedInstanceIds">, never>>(object: I): RollingRecreateRequest;
};
export declare const RollingRecreateMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateMetadata";
    encode(message: RollingRecreateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RollingRecreateMetadata;
    fromJSON(object: any): RollingRecreateMetadata;
    toJSON(message: RollingRecreateMetadata): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): RollingRecreateMetadata;
};
export declare const DeleteInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest";
    encode(message: DeleteInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstanceGroupRequest;
    fromJSON(object: any): DeleteInstanceGroupRequest;
    toJSON(message: DeleteInstanceGroupRequest): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): DeleteInstanceGroupRequest;
};
export declare const DeleteInstanceGroupMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata";
    encode(message: DeleteInstanceGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstanceGroupMetadata;
    fromJSON(object: any): DeleteInstanceGroupMetadata;
    toJSON(message: DeleteInstanceGroupMetadata): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): DeleteInstanceGroupMetadata;
};
export declare const DeleteInstancesMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata";
    encode(message: DeleteInstancesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstancesMetadata;
    fromJSON(object: any): DeleteInstancesMetadata;
    toJSON(message: DeleteInstancesMetadata): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): DeleteInstancesMetadata;
};
export declare const StopInstancesMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata";
    encode(message: StopInstancesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstancesMetadata;
    fromJSON(object: any): StopInstancesMetadata;
    toJSON(message: StopInstancesMetadata): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
    } & {
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId">, never>>(object: I): StopInstancesMetadata;
};
export declare const ListInstanceGroupsRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest";
    encode(message: ListInstanceGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupsRequest;
    fromJSON(object: any): ListInstanceGroupsRequest;
    toJSON(message: ListInstanceGroupsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        view?: InstanceGroupView | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        view?: InstanceGroupView | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "view">, never>>(object: I): ListInstanceGroupsRequest;
};
export declare const ListInstanceGroupsResponse: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse";
    encode(message: ListInstanceGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupsResponse;
    fromJSON(object: any): ListInstanceGroupsResponse;
    toJSON(message: ListInstanceGroupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        instanceGroups?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").InstanceGroup_Status | undefined;
            folderId?: string | undefined;
            variables?: {
                value?: string | undefined;
                key?: string | undefined;
            }[] | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            allocationPolicy?: {
                zones?: {
                    zoneId?: string | undefined;
                    instanceTagsPool?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            serviceAccountId?: string | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
                autoScale?: {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } | undefined;
                testAutoScale?: {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } | undefined;
            } | undefined;
            instanceTemplate?: {
                description?: string | undefined;
                name?: string | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                platformId?: string | undefined;
                serviceAccountId?: string | undefined;
                schedulingPolicy?: {
                    preemptible?: boolean | undefined;
                } | undefined;
                networkSettings?: {
                    type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
                } | undefined;
                placementPolicy?: {
                    placementGroupId?: string | undefined;
                    hostAffinityRules?: {
                        values?: string[] | undefined;
                        key?: string | undefined;
                        op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                    }[] | undefined;
                } | undefined;
                hostname?: string | undefined;
                resourcesSpec?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                bootDiskSpec?: {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                } | undefined;
                secondaryDiskSpecs?: {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                }[] | undefined;
                filesystemSpecs?: {
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                    filesystemId?: string | undefined;
                    deviceName?: string | undefined;
                }[] | undefined;
                networkInterfaceSpecs?: {
                    networkId?: string | undefined;
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            deployPolicy?: {
                maxUnavailable?: number | undefined;
                maxDeleting?: number | undefined;
                maxCreating?: number | undefined;
                maxExpansion?: number | undefined;
                startupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
            } | undefined;
            loadBalancerState?: {
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
            managedInstancesState?: {
                targetSize?: number | undefined;
                runningActualCount?: number | undefined;
                runningOutdatedCount?: number | undefined;
                processingCount?: number | undefined;
            } | undefined;
            loadBalancerSpec?: {
                targetGroupSpec?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                } | undefined;
                maxOpeningTrafficDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } | undefined;
            healthChecksSpec?: {
                healthCheckSpecs?: {
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    tcpOptions?: {
                        port?: number | undefined;
                    } | undefined;
                    httpOptions?: {
                        port?: number | undefined;
                        path?: string | undefined;
                    } | undefined;
                }[] | undefined;
                maxCheckingHealthDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            applicationLoadBalancerSpec?: {
                targetGroupSpec?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                } | undefined;
                maxOpeningTrafficDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } | undefined;
            applicationLoadBalancerState?: {
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        instanceGroups?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").InstanceGroup_Status | undefined;
            folderId?: string | undefined;
            variables?: {
                value?: string | undefined;
                key?: string | undefined;
            }[] | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            allocationPolicy?: {
                zones?: {
                    zoneId?: string | undefined;
                    instanceTagsPool?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            serviceAccountId?: string | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
                autoScale?: {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } | undefined;
                testAutoScale?: {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } | undefined;
            } | undefined;
            instanceTemplate?: {
                description?: string | undefined;
                name?: string | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                platformId?: string | undefined;
                serviceAccountId?: string | undefined;
                schedulingPolicy?: {
                    preemptible?: boolean | undefined;
                } | undefined;
                networkSettings?: {
                    type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
                } | undefined;
                placementPolicy?: {
                    placementGroupId?: string | undefined;
                    hostAffinityRules?: {
                        values?: string[] | undefined;
                        key?: string | undefined;
                        op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                    }[] | undefined;
                } | undefined;
                hostname?: string | undefined;
                resourcesSpec?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                bootDiskSpec?: {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                } | undefined;
                secondaryDiskSpecs?: {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                }[] | undefined;
                filesystemSpecs?: {
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                    filesystemId?: string | undefined;
                    deviceName?: string | undefined;
                }[] | undefined;
                networkInterfaceSpecs?: {
                    networkId?: string | undefined;
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            deployPolicy?: {
                maxUnavailable?: number | undefined;
                maxDeleting?: number | undefined;
                maxCreating?: number | undefined;
                maxExpansion?: number | undefined;
                startupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
            } | undefined;
            loadBalancerState?: {
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
            managedInstancesState?: {
                targetSize?: number | undefined;
                runningActualCount?: number | undefined;
                runningOutdatedCount?: number | undefined;
                processingCount?: number | undefined;
            } | undefined;
            loadBalancerSpec?: {
                targetGroupSpec?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                } | undefined;
                maxOpeningTrafficDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } | undefined;
            healthChecksSpec?: {
                healthCheckSpecs?: {
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    tcpOptions?: {
                        port?: number | undefined;
                    } | undefined;
                    httpOptions?: {
                        port?: number | undefined;
                        path?: string | undefined;
                    } | undefined;
                }[] | undefined;
                maxCheckingHealthDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            applicationLoadBalancerSpec?: {
                targetGroupSpec?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                } | undefined;
                maxOpeningTrafficDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } | undefined;
            applicationLoadBalancerState?: {
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").InstanceGroup_Status | undefined;
            folderId?: string | undefined;
            variables?: {
                value?: string | undefined;
                key?: string | undefined;
            }[] | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            allocationPolicy?: {
                zones?: {
                    zoneId?: string | undefined;
                    instanceTagsPool?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            serviceAccountId?: string | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
                autoScale?: {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } | undefined;
                testAutoScale?: {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } | undefined;
            } | undefined;
            instanceTemplate?: {
                description?: string | undefined;
                name?: string | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                platformId?: string | undefined;
                serviceAccountId?: string | undefined;
                schedulingPolicy?: {
                    preemptible?: boolean | undefined;
                } | undefined;
                networkSettings?: {
                    type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
                } | undefined;
                placementPolicy?: {
                    placementGroupId?: string | undefined;
                    hostAffinityRules?: {
                        values?: string[] | undefined;
                        key?: string | undefined;
                        op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                    }[] | undefined;
                } | undefined;
                hostname?: string | undefined;
                resourcesSpec?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                bootDiskSpec?: {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                } | undefined;
                secondaryDiskSpecs?: {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                }[] | undefined;
                filesystemSpecs?: {
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                    filesystemId?: string | undefined;
                    deviceName?: string | undefined;
                }[] | undefined;
                networkInterfaceSpecs?: {
                    networkId?: string | undefined;
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            deployPolicy?: {
                maxUnavailable?: number | undefined;
                maxDeleting?: number | undefined;
                maxCreating?: number | undefined;
                maxExpansion?: number | undefined;
                startupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
            } | undefined;
            loadBalancerState?: {
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
            managedInstancesState?: {
                targetSize?: number | undefined;
                runningActualCount?: number | undefined;
                runningOutdatedCount?: number | undefined;
                processingCount?: number | undefined;
            } | undefined;
            loadBalancerSpec?: {
                targetGroupSpec?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                } | undefined;
                maxOpeningTrafficDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } | undefined;
            healthChecksSpec?: {
                healthCheckSpecs?: {
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    tcpOptions?: {
                        port?: number | undefined;
                    } | undefined;
                    httpOptions?: {
                        port?: number | undefined;
                        path?: string | undefined;
                    } | undefined;
                }[] | undefined;
                maxCheckingHealthDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            applicationLoadBalancerSpec?: {
                targetGroupSpec?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                } | undefined;
                maxOpeningTrafficDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } | undefined;
            applicationLoadBalancerState?: {
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").InstanceGroup_Status | undefined;
            folderId?: string | undefined;
            variables?: ({
                value?: string | undefined;
                key?: string | undefined;
            }[] & ({
                value?: string | undefined;
                key?: string | undefined;
            } & {
                value?: string | undefined;
                key?: string | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["variables"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["variables"], "$type" | keyof {
                value?: string | undefined;
                key?: string | undefined;
            }[]>, never>) | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["labels"], string | number>, never>) | undefined;
            allocationPolicy?: ({
                zones?: {
                    zoneId?: string | undefined;
                    instanceTagsPool?: string[] | undefined;
                }[] | undefined;
            } & {
                zones?: ({
                    zoneId?: string | undefined;
                    instanceTagsPool?: string[] | undefined;
                }[] & ({
                    zoneId?: string | undefined;
                    instanceTagsPool?: string[] | undefined;
                } & {
                    zoneId?: string | undefined;
                    instanceTagsPool?: (string[] & string[] & Record<Exclude<keyof I["instanceGroups"][number]["allocationPolicy"]["zones"][number]["instanceTagsPool"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["allocationPolicy"]["zones"][number], "$type" | "zoneId" | "instanceTagsPool">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["allocationPolicy"]["zones"], "$type" | keyof {
                    zoneId?: string | undefined;
                    instanceTagsPool?: string[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["allocationPolicy"], "$type" | "zones">, never>) | undefined;
            deletionProtection?: boolean | undefined;
            serviceAccountId?: string | undefined;
            scalePolicy?: ({
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
                autoScale?: {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } | undefined;
                testAutoScale?: {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } | undefined;
            } & {
                fixedScale?: ({
                    size?: number | undefined;
                } & {
                    size?: number | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["fixedScale"], "$type" | "size">, never>) | undefined;
                autoScale?: ({
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } & {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["autoScale"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    warmupDuration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["autoScale"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    stabilizationDuration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["autoScale"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: ({
                        utilizationTarget?: number | undefined;
                    } & {
                        utilizationTarget?: number | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["autoScale"]["cpuUtilizationRule"], "$type" | "utilizationTarget">, never>) | undefined;
                    customRules?: ({
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] & ({
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    } & {
                        folderId?: string | undefined;
                        labels?: ({
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["autoScale"]["customRules"][number]["labels"], string | number>, never>) | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["autoScale"]["customRules"][number], "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["autoScale"]["customRules"], "$type" | keyof {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[]>, never>) | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["autoScale"], "$type" | "minZoneSize" | "maxSize" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "initialSize" | "cpuUtilizationRule" | "customRules" | "autoScaleType">, never>) | undefined;
                testAutoScale?: ({
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } & {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["testAutoScale"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    warmupDuration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["testAutoScale"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    stabilizationDuration?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["testAutoScale"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: ({
                        utilizationTarget?: number | undefined;
                    } & {
                        utilizationTarget?: number | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["testAutoScale"]["cpuUtilizationRule"], "$type" | "utilizationTarget">, never>) | undefined;
                    customRules?: ({
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] & ({
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    } & {
                        folderId?: string | undefined;
                        labels?: ({
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["testAutoScale"]["customRules"][number]["labels"], string | number>, never>) | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["testAutoScale"]["customRules"][number], "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["testAutoScale"]["customRules"], "$type" | keyof {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[]>, never>) | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"]["testAutoScale"], "$type" | "minZoneSize" | "maxSize" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "initialSize" | "cpuUtilizationRule" | "customRules" | "autoScaleType">, never>) | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["scalePolicy"], "$type" | "fixedScale" | "autoScale" | "testAutoScale">, never>) | undefined;
            instanceTemplate?: ({
                description?: string | undefined;
                name?: string | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                platformId?: string | undefined;
                serviceAccountId?: string | undefined;
                schedulingPolicy?: {
                    preemptible?: boolean | undefined;
                } | undefined;
                networkSettings?: {
                    type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
                } | undefined;
                placementPolicy?: {
                    placementGroupId?: string | undefined;
                    hostAffinityRules?: {
                        values?: string[] | undefined;
                        key?: string | undefined;
                        op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                    }[] | undefined;
                } | undefined;
                hostname?: string | undefined;
                resourcesSpec?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                bootDiskSpec?: {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                } | undefined;
                secondaryDiskSpecs?: {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                }[] | undefined;
                filesystemSpecs?: {
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                    filesystemId?: string | undefined;
                    deviceName?: string | undefined;
                }[] | undefined;
                networkInterfaceSpecs?: {
                    networkId?: string | undefined;
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] | undefined;
            } & {
                description?: string | undefined;
                name?: string | undefined;
                metadata?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["metadata"], string | number>, never>) | undefined;
                labels?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["labels"], string | number>, never>) | undefined;
                platformId?: string | undefined;
                serviceAccountId?: string | undefined;
                schedulingPolicy?: ({
                    preemptible?: boolean | undefined;
                } & {
                    preemptible?: boolean | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
                networkSettings?: ({
                    type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
                } & {
                    type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkSettings"], "$type" | "type">, never>) | undefined;
                placementPolicy?: ({
                    placementGroupId?: string | undefined;
                    hostAffinityRules?: {
                        values?: string[] | undefined;
                        key?: string | undefined;
                        op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                    }[] | undefined;
                } & {
                    placementGroupId?: string | undefined;
                    hostAffinityRules?: ({
                        values?: string[] | undefined;
                        key?: string | undefined;
                        op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                    }[] & ({
                        values?: string[] | undefined;
                        key?: string | undefined;
                        op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                    } & {
                        values?: (string[] & string[] & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["placementPolicy"]["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
                        key?: string | undefined;
                        op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["placementPolicy"]["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["placementPolicy"]["hostAffinityRules"], "$type" | keyof {
                        values?: string[] | undefined;
                        key?: string | undefined;
                        op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["placementPolicy"], "$type" | "placementGroupId" | "hostAffinityRules">, never>) | undefined;
                hostname?: string | undefined;
                resourcesSpec?: ({
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } & {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["resourcesSpec"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
                bootDiskSpec?: ({
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                } & {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: ({
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } & {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["bootDiskSpec"]["diskSpec"], "$type" | "description" | "size" | "typeId" | "imageId" | "snapshotId" | "preserveAfterInstanceDelete">, never>) | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["bootDiskSpec"], "$type" | "name" | "mode" | "diskId" | "deviceName" | "diskSpec">, never>) | undefined;
                secondaryDiskSpecs?: ({
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                }[] & ({
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                } & {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: ({
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } & {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["secondaryDiskSpecs"][number]["diskSpec"], "$type" | "description" | "size" | "typeId" | "imageId" | "snapshotId" | "preserveAfterInstanceDelete">, never>) | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["secondaryDiskSpecs"][number], "$type" | "name" | "mode" | "diskId" | "deviceName" | "diskSpec">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["secondaryDiskSpecs"], "$type" | keyof {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                filesystemSpecs?: ({
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                    filesystemId?: string | undefined;
                    deviceName?: string | undefined;
                }[] & ({
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                    filesystemId?: string | undefined;
                    deviceName?: string | undefined;
                } & {
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                    filesystemId?: string | undefined;
                    deviceName?: string | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["filesystemSpecs"][number], "$type" | "mode" | "filesystemId" | "deviceName">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["filesystemSpecs"], "$type" | keyof {
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                    filesystemId?: string | undefined;
                    deviceName?: string | undefined;
                }[]>, never>) | undefined;
                networkInterfaceSpecs?: ({
                    networkId?: string | undefined;
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] & ({
                    networkId?: string | undefined;
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                } & {
                    networkId?: string | undefined;
                    securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                    primaryV4AddressSpec?: ({
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        address?: string | undefined;
                        oneToOneNatSpec?: ({
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } & {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: ({
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] & ({
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            } & {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
                        dnsRecordSpecs?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV4AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                    primaryV6AddressSpec?: ({
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        address?: string | undefined;
                        oneToOneNatSpec?: ({
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } & {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: ({
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] & ({
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            } & {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
                        dnsRecordSpecs?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["primaryV6AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
                    subnetIds?: (string[] & string[] & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"][number], "$type" | "networkId" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec" | "subnetIds">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"]["networkInterfaceSpecs"], "$type" | keyof {
                    networkId?: string | undefined;
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["instanceTemplate"], "$type" | "description" | "name" | "metadata" | "labels" | "platformId" | "serviceAccountId" | "schedulingPolicy" | "networkSettings" | "placementPolicy" | "hostname" | "resourcesSpec" | "bootDiskSpec" | "secondaryDiskSpecs" | "filesystemSpecs" | "networkInterfaceSpecs">, never>) | undefined;
            deployPolicy?: ({
                maxUnavailable?: number | undefined;
                maxDeleting?: number | undefined;
                maxCreating?: number | undefined;
                maxExpansion?: number | undefined;
                startupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
            } & {
                maxUnavailable?: number | undefined;
                maxDeleting?: number | undefined;
                maxCreating?: number | undefined;
                maxExpansion?: number | undefined;
                startupDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["deployPolicy"]["startupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["deployPolicy"], "$type" | "maxUnavailable" | "maxDeleting" | "maxCreating" | "maxExpansion" | "startupDuration" | "strategy">, never>) | undefined;
            loadBalancerState?: ({
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } & {
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["loadBalancerState"], "$type" | "targetGroupId" | "statusMessage">, never>) | undefined;
            managedInstancesState?: ({
                targetSize?: number | undefined;
                runningActualCount?: number | undefined;
                runningOutdatedCount?: number | undefined;
                processingCount?: number | undefined;
            } & {
                targetSize?: number | undefined;
                runningActualCount?: number | undefined;
                runningOutdatedCount?: number | undefined;
                processingCount?: number | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["managedInstancesState"], "$type" | "targetSize" | "runningActualCount" | "runningOutdatedCount" | "processingCount">, never>) | undefined;
            loadBalancerSpec?: ({
                targetGroupSpec?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                } | undefined;
                maxOpeningTrafficDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } & {
                targetGroupSpec?: ({
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
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
                    } & Record<Exclude<keyof I["instanceGroups"][number]["loadBalancerSpec"]["targetGroupSpec"]["labels"], string | number>, never>) | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["loadBalancerSpec"]["targetGroupSpec"], "$type" | "description" | "name" | "labels">, never>) | undefined;
                maxOpeningTrafficDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["loadBalancerSpec"]["maxOpeningTrafficDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["loadBalancerSpec"], "$type" | "targetGroupSpec" | "maxOpeningTrafficDuration" | "ignoreHealthChecks">, never>) | undefined;
            healthChecksSpec?: ({
                healthCheckSpecs?: {
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    tcpOptions?: {
                        port?: number | undefined;
                    } | undefined;
                    httpOptions?: {
                        port?: number | undefined;
                        path?: string | undefined;
                    } | undefined;
                }[] | undefined;
                maxCheckingHealthDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                healthCheckSpecs?: ({
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    tcpOptions?: {
                        port?: number | undefined;
                    } | undefined;
                    httpOptions?: {
                        port?: number | undefined;
                        path?: string | undefined;
                    } | undefined;
                }[] & ({
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    tcpOptions?: {
                        port?: number | undefined;
                    } | undefined;
                    httpOptions?: {
                        port?: number | undefined;
                        path?: string | undefined;
                    } | undefined;
                } & {
                    timeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["healthChecksSpec"]["healthCheckSpecs"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["healthChecksSpec"]["healthCheckSpecs"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    tcpOptions?: ({
                        port?: number | undefined;
                    } & {
                        port?: number | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["healthChecksSpec"]["healthCheckSpecs"][number]["tcpOptions"], "$type" | "port">, never>) | undefined;
                    httpOptions?: ({
                        port?: number | undefined;
                        path?: string | undefined;
                    } & {
                        port?: number | undefined;
                        path?: string | undefined;
                    } & Record<Exclude<keyof I["instanceGroups"][number]["healthChecksSpec"]["healthCheckSpecs"][number]["httpOptions"], "$type" | "port" | "path">, never>) | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["healthChecksSpec"]["healthCheckSpecs"][number], "$type" | "timeout" | "interval" | "healthyThreshold" | "unhealthyThreshold" | "tcpOptions" | "httpOptions">, never>)[] & Record<Exclude<keyof I["instanceGroups"][number]["healthChecksSpec"]["healthCheckSpecs"], "$type" | keyof {
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    tcpOptions?: {
                        port?: number | undefined;
                    } | undefined;
                    httpOptions?: {
                        port?: number | undefined;
                        path?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                maxCheckingHealthDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["healthChecksSpec"]["maxCheckingHealthDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["healthChecksSpec"], "$type" | "healthCheckSpecs" | "maxCheckingHealthDuration">, never>) | undefined;
            applicationLoadBalancerSpec?: ({
                targetGroupSpec?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                } | undefined;
                maxOpeningTrafficDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } & {
                targetGroupSpec?: ({
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
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
                    } & Record<Exclude<keyof I["instanceGroups"][number]["applicationLoadBalancerSpec"]["targetGroupSpec"]["labels"], string | number>, never>) | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["applicationLoadBalancerSpec"]["targetGroupSpec"], "$type" | "description" | "name" | "labels">, never>) | undefined;
                maxOpeningTrafficDuration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["instanceGroups"][number]["applicationLoadBalancerSpec"]["maxOpeningTrafficDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["applicationLoadBalancerSpec"], "$type" | "targetGroupSpec" | "maxOpeningTrafficDuration" | "ignoreHealthChecks">, never>) | undefined;
            applicationLoadBalancerState?: ({
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } & {
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } & Record<Exclude<keyof I["instanceGroups"][number]["applicationLoadBalancerState"], "$type" | "targetGroupId" | "statusMessage">, never>) | undefined;
        } & Record<Exclude<keyof I["instanceGroups"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "variables" | "labels" | "allocationPolicy" | "deletionProtection" | "serviceAccountId" | "scalePolicy" | "instanceTemplate" | "deployPolicy" | "loadBalancerState" | "managedInstancesState" | "loadBalancerSpec" | "healthChecksSpec" | "applicationLoadBalancerSpec" | "applicationLoadBalancerState">, never>)[] & Record<Exclude<keyof I["instanceGroups"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").InstanceGroup_Status | undefined;
            folderId?: string | undefined;
            variables?: {
                value?: string | undefined;
                key?: string | undefined;
            }[] | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            allocationPolicy?: {
                zones?: {
                    zoneId?: string | undefined;
                    instanceTagsPool?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            deletionProtection?: boolean | undefined;
            serviceAccountId?: string | undefined;
            scalePolicy?: {
                fixedScale?: {
                    size?: number | undefined;
                } | undefined;
                autoScale?: {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } | undefined;
                testAutoScale?: {
                    minZoneSize?: number | undefined;
                    maxSize?: number | undefined;
                    measurementDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    warmupDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    stabilizationDuration?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initialSize?: number | undefined;
                    cpuUtilizationRule?: {
                        utilizationTarget?: number | undefined;
                    } | undefined;
                    customRules?: {
                        folderId?: string | undefined;
                        labels?: {
                            [x: string]: string | undefined;
                            [x: number]: string | undefined;
                        } | undefined;
                        target?: number | undefined;
                        ruleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_RuleType | undefined;
                        metricType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_CustomRule_MetricType | undefined;
                        metricName?: string | undefined;
                        service?: string | undefined;
                    }[] | undefined;
                    autoScaleType?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ScalePolicy_AutoScale_AutoScaleType | undefined;
                } | undefined;
            } | undefined;
            instanceTemplate?: {
                description?: string | undefined;
                name?: string | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                platformId?: string | undefined;
                serviceAccountId?: string | undefined;
                schedulingPolicy?: {
                    preemptible?: boolean | undefined;
                } | undefined;
                networkSettings?: {
                    type?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").NetworkSettings_Type | undefined;
                } | undefined;
                placementPolicy?: {
                    placementGroupId?: string | undefined;
                    hostAffinityRules?: {
                        values?: string[] | undefined;
                        key?: string | undefined;
                        op?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").PlacementPolicy_HostAffinityRule_Operator | undefined;
                    }[] | undefined;
                } | undefined;
                hostname?: string | undefined;
                resourcesSpec?: {
                    memory?: number | undefined;
                    cores?: number | undefined;
                    coreFraction?: number | undefined;
                    gpus?: number | undefined;
                } | undefined;
                bootDiskSpec?: {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                } | undefined;
                secondaryDiskSpecs?: {
                    name?: string | undefined;
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedDiskSpec_Mode | undefined;
                    diskId?: string | undefined;
                    deviceName?: string | undefined;
                    diskSpec?: {
                        description?: string | undefined;
                        size?: number | undefined;
                        typeId?: string | undefined;
                        imageId?: string | undefined;
                        snapshotId?: string | undefined;
                        preserveAfterInstanceDelete?: boolean | undefined;
                    } | undefined;
                }[] | undefined;
                filesystemSpecs?: {
                    mode?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").AttachedFilesystemSpec_Mode | undefined;
                    filesystemId?: string | undefined;
                    deviceName?: string | undefined;
                }[] | undefined;
                networkInterfaceSpecs?: {
                    networkId?: string | undefined;
                    securityGroupIds?: string[] | undefined;
                    primaryV4AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    primaryV6AddressSpec?: {
                        address?: string | undefined;
                        oneToOneNatSpec?: {
                            address?: string | undefined;
                            ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                            dnsRecordSpecs?: {
                                ttl?: number | undefined;
                                fqdn?: string | undefined;
                                dnsZoneId?: string | undefined;
                                ptr?: boolean | undefined;
                            }[] | undefined;
                        } | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    subnetIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            deployPolicy?: {
                maxUnavailable?: number | undefined;
                maxDeleting?: number | undefined;
                maxCreating?: number | undefined;
                maxExpansion?: number | undefined;
                startupDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                strategy?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").DeployPolicy_Strategy | undefined;
            } | undefined;
            loadBalancerState?: {
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
            managedInstancesState?: {
                targetSize?: number | undefined;
                runningActualCount?: number | undefined;
                runningOutdatedCount?: number | undefined;
                processingCount?: number | undefined;
            } | undefined;
            loadBalancerSpec?: {
                targetGroupSpec?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                } | undefined;
                maxOpeningTrafficDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } | undefined;
            healthChecksSpec?: {
                healthCheckSpecs?: {
                    timeout?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    healthyThreshold?: number | undefined;
                    unhealthyThreshold?: number | undefined;
                    tcpOptions?: {
                        port?: number | undefined;
                    } | undefined;
                    httpOptions?: {
                        port?: number | undefined;
                        path?: string | undefined;
                    } | undefined;
                }[] | undefined;
                maxCheckingHealthDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            applicationLoadBalancerSpec?: {
                targetGroupSpec?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                } | undefined;
                maxOpeningTrafficDuration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                ignoreHealthChecks?: boolean | undefined;
            } | undefined;
            applicationLoadBalancerState?: {
                targetGroupId?: string | undefined;
                statusMessage?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "instanceGroups">, never>>(object: I): ListInstanceGroupsResponse;
};
export declare const ListInstanceGroupInstancesRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest";
    encode(message: ListInstanceGroupInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupInstancesRequest;
    fromJSON(object: any): ListInstanceGroupInstancesRequest;
    toJSON(message: ListInstanceGroupInstancesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        instanceGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "instanceGroupId">, never>>(object: I): ListInstanceGroupInstancesRequest;
};
export declare const ListInstanceGroupInstancesResponse: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse";
    encode(message: ListInstanceGroupInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupInstancesResponse;
    fromJSON(object: any): ListInstanceGroupInstancesResponse;
    toJSON(message: ListInstanceGroupInstancesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        instances?: {
            id?: string | undefined;
            name?: string | undefined;
            status?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ManagedInstance_Status | undefined;
            zoneId?: string | undefined;
            fqdn?: string | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            instanceId?: string | undefined;
            statusMessage?: string | undefined;
            instanceTag?: string | undefined;
            statusChangedAt?: Date | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        instances?: ({
            id?: string | undefined;
            name?: string | undefined;
            status?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ManagedInstance_Status | undefined;
            zoneId?: string | undefined;
            fqdn?: string | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            instanceId?: string | undefined;
            statusMessage?: string | undefined;
            instanceTag?: string | undefined;
            statusChangedAt?: Date | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            status?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ManagedInstance_Status | undefined;
            zoneId?: string | undefined;
            fqdn?: string | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            instanceId?: string | undefined;
            statusMessage?: string | undefined;
            instanceTag?: string | undefined;
            statusChangedAt?: Date | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            status?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ManagedInstance_Status | undefined;
            zoneId?: string | undefined;
            fqdn?: string | undefined;
            networkInterfaces?: ({
                subnetId?: string | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] & ({
                subnetId?: string | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                subnetId?: string | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: ({
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    oneToOneNat?: ({
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } & {
                        address?: string | undefined;
                        dnsRecords?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
                    dnsRecords?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["dnsRecords"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
                primaryV6Address?: ({
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    oneToOneNat?: ({
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } & {
                        address?: string | undefined;
                        dnsRecords?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
                    dnsRecords?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["dnsRecords"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
            } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number], "$type" | "subnetId" | "index" | "macAddress" | "primaryV4Address" | "primaryV6Address">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"], "$type" | keyof {
                subnetId?: string | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            instanceId?: string | undefined;
            statusMessage?: string | undefined;
            instanceTag?: string | undefined;
            statusChangedAt?: Date | undefined;
        } & Record<Exclude<keyof I["instances"][number], "$type" | "id" | "name" | "status" | "zoneId" | "fqdn" | "networkInterfaces" | "instanceId" | "statusMessage" | "instanceTag" | "statusChangedAt">, never>)[] & Record<Exclude<keyof I["instances"], "$type" | keyof {
            id?: string | undefined;
            name?: string | undefined;
            status?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").ManagedInstance_Status | undefined;
            zoneId?: string | undefined;
            fqdn?: string | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: import("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group").IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            instanceId?: string | undefined;
            statusMessage?: string | undefined;
            instanceTag?: string | undefined;
            statusChangedAt?: Date | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "instances">, never>>(object: I): ListInstanceGroupInstancesResponse;
};
export declare const DeleteInstancesRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest";
    encode(message: DeleteInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstancesRequest;
    fromJSON(object: any): DeleteInstancesRequest;
    toJSON(message: DeleteInstancesRequest): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
        managedInstanceIds?: string[] | undefined;
        createAnother?: boolean | undefined;
    } & {
        instanceGroupId?: string | undefined;
        managedInstanceIds?: (string[] & string[] & Record<Exclude<keyof I["managedInstanceIds"], "$type" | keyof string[]>, never>) | undefined;
        createAnother?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId" | "managedInstanceIds" | "createAnother">, never>>(object: I): DeleteInstancesRequest;
};
export declare const StopInstancesRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesRequest";
    encode(message: StopInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstancesRequest;
    fromJSON(object: any): StopInstancesRequest;
    toJSON(message: StopInstancesRequest): unknown;
    fromPartial<I extends {
        instanceGroupId?: string | undefined;
        managedInstanceIds?: string[] | undefined;
    } & {
        instanceGroupId?: string | undefined;
        managedInstanceIds?: (string[] & string[] & Record<Exclude<keyof I["managedInstanceIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceGroupId" | "managedInstanceIds">, never>>(object: I): StopInstancesRequest;
};
export declare const ListInstanceGroupOperationsRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest";
    encode(message: ListInstanceGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupOperationsRequest;
    fromJSON(object: any): ListInstanceGroupOperationsRequest;
    toJSON(message: ListInstanceGroupOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        instanceGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "instanceGroupId">, never>>(object: I): ListInstanceGroupOperationsRequest;
};
export declare const ListInstanceGroupOperationsResponse: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse";
    encode(message: ListInstanceGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupOperationsResponse;
    fromJSON(object: any): ListInstanceGroupOperationsResponse;
    toJSON(message: ListInstanceGroupOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListInstanceGroupOperationsResponse;
};
export declare const ListInstanceGroupLogRecordsRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest";
    encode(message: ListInstanceGroupLogRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupLogRecordsRequest;
    fromJSON(object: any): ListInstanceGroupLogRecordsRequest;
    toJSON(message: ListInstanceGroupLogRecordsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        instanceGroupId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        instanceGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "instanceGroupId">, never>>(object: I): ListInstanceGroupLogRecordsRequest;
};
export declare const ListInstanceGroupLogRecordsResponse: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse";
    encode(message: ListInstanceGroupLogRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupLogRecordsResponse;
    fromJSON(object: any): ListInstanceGroupLogRecordsResponse;
    toJSON(message: ListInstanceGroupLogRecordsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        logRecords?: {
            message?: string | undefined;
            timestamp?: Date | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        logRecords?: ({
            message?: string | undefined;
            timestamp?: Date | undefined;
        }[] & ({
            message?: string | undefined;
            timestamp?: Date | undefined;
        } & {
            message?: string | undefined;
            timestamp?: Date | undefined;
        } & Record<Exclude<keyof I["logRecords"][number], "$type" | "message" | "timestamp">, never>)[] & Record<Exclude<keyof I["logRecords"], "$type" | keyof {
            message?: string | undefined;
            timestamp?: Date | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "logRecords">, never>>(object: I): ListInstanceGroupLogRecordsResponse;
};
/** A set of methods for managing InstanceGroup resources. */
export declare const InstanceGroupServiceService: {
    /**
     * Returns the specified InstanceGroup resource.
     *
     * To get the list of available InstanceGroup resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetInstanceGroupRequest;
        readonly responseSerialize: (value: InstanceGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => InstanceGroup;
    };
    /** Retrieves the list of InstanceGroup resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstanceGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstanceGroupsRequest;
        readonly responseSerialize: (value: ListInstanceGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstanceGroupsResponse;
    };
    /**
     * Creates an instance group in the specified folder.
     * This method starts an operation that can be cancelled by another operation.
     */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateInstanceGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Creates an instance group in the specified folder from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    readonly createFromYaml: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/CreateFromYaml";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateInstanceGroupFromYamlRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateInstanceGroupFromYamlRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified instance group.
     * This method starts an operation that can be cancelled by another operation.
     */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateInstanceGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified instance group from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    readonly updateFromYaml: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateFromYaml";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateInstanceGroupFromYamlRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateInstanceGroupFromYamlRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified instance group. */
    readonly stop: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopInstanceGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Performs rolling restart of specified instances for the specified instance group.
     * Rolling restart does restart of instances respecting all group policies.
     */
    readonly rollingRestart: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/RollingRestart";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RollingRestartRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RollingRestartRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Performs rolling recreate of specified instances for the specified instance group.
     * Rolling recreate does recreate of instance VMs respecting all group policies.
     */
    readonly rollingRecreate: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/RollingRecreate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RollingRecreateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RollingRecreateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified instance group. */
    readonly start: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartInstanceGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified instance group. */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteInstanceGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists instances for the specified instance group. */
    readonly listInstances: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListInstances";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstanceGroupInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstanceGroupInstancesRequest;
        readonly responseSerialize: (value: ListInstanceGroupInstancesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstanceGroupInstancesResponse;
    };
    /** Delete instances from the instance group. */
    readonly deleteInstances: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/DeleteInstances";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteInstancesRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stop instances from the instance group. */
    readonly stopInstances: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/StopInstances";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopInstancesRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified instance group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstanceGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstanceGroupOperationsRequest;
        readonly responseSerialize: (value: ListInstanceGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstanceGroupOperationsResponse;
    };
    /** Lists logs for the specified instance group. */
    readonly listLogRecords: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListLogRecords";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstanceGroupLogRecordsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstanceGroupLogRecordsRequest;
        readonly responseSerialize: (value: ListInstanceGroupLogRecordsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstanceGroupLogRecordsResponse;
    };
    /** Lists existing access bindings for the specified instance group. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified instance group. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified instance group. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Resumes all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them.
     */
    readonly resumeProcesses: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ResumeProcesses";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ResumeInstanceGroupProcessesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ResumeInstanceGroupProcessesRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Pauses all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
     */
    readonly pauseProcesses: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/PauseProcesses";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PauseInstanceGroupProcessesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PauseInstanceGroupProcessesRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface InstanceGroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified InstanceGroup resource.
     *
     * To get the list of available InstanceGroup resources, make a [List] request.
     */
    get: handleUnaryCall<GetInstanceGroupRequest, InstanceGroup>;
    /** Retrieves the list of InstanceGroup resources in the specified folder. */
    list: handleUnaryCall<ListInstanceGroupsRequest, ListInstanceGroupsResponse>;
    /**
     * Creates an instance group in the specified folder.
     * This method starts an operation that can be cancelled by another operation.
     */
    create: handleUnaryCall<CreateInstanceGroupRequest, Operation>;
    /**
     * Creates an instance group in the specified folder from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    createFromYaml: handleUnaryCall<CreateInstanceGroupFromYamlRequest, Operation>;
    /**
     * Updates the specified instance group.
     * This method starts an operation that can be cancelled by another operation.
     */
    update: handleUnaryCall<UpdateInstanceGroupRequest, Operation>;
    /**
     * Updates the specified instance group from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    updateFromYaml: handleUnaryCall<UpdateInstanceGroupFromYamlRequest, Operation>;
    /** Stops the specified instance group. */
    stop: handleUnaryCall<StopInstanceGroupRequest, Operation>;
    /**
     * Performs rolling restart of specified instances for the specified instance group.
     * Rolling restart does restart of instances respecting all group policies.
     */
    rollingRestart: handleUnaryCall<RollingRestartRequest, Operation>;
    /**
     * Performs rolling recreate of specified instances for the specified instance group.
     * Rolling recreate does recreate of instance VMs respecting all group policies.
     */
    rollingRecreate: handleUnaryCall<RollingRecreateRequest, Operation>;
    /** Starts the specified instance group. */
    start: handleUnaryCall<StartInstanceGroupRequest, Operation>;
    /** Deletes the specified instance group. */
    delete: handleUnaryCall<DeleteInstanceGroupRequest, Operation>;
    /** Lists instances for the specified instance group. */
    listInstances: handleUnaryCall<ListInstanceGroupInstancesRequest, ListInstanceGroupInstancesResponse>;
    /** Delete instances from the instance group. */
    deleteInstances: handleUnaryCall<DeleteInstancesRequest, Operation>;
    /** Stop instances from the instance group. */
    stopInstances: handleUnaryCall<StopInstancesRequest, Operation>;
    /** Lists operations for the specified instance group. */
    listOperations: handleUnaryCall<ListInstanceGroupOperationsRequest, ListInstanceGroupOperationsResponse>;
    /** Lists logs for the specified instance group. */
    listLogRecords: handleUnaryCall<ListInstanceGroupLogRecordsRequest, ListInstanceGroupLogRecordsResponse>;
    /** Lists existing access bindings for the specified instance group. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified instance group. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified instance group. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /**
     * Resumes all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them.
     */
    resumeProcesses: handleUnaryCall<ResumeInstanceGroupProcessesRequest, Operation>;
    /**
     * Pauses all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
     */
    pauseProcesses: handleUnaryCall<PauseInstanceGroupProcessesRequest, Operation>;
}
export interface InstanceGroupServiceClient extends Client {
    /**
     * Returns the specified InstanceGroup resource.
     *
     * To get the list of available InstanceGroup resources, make a [List] request.
     */
    get(request: GetInstanceGroupRequest, callback: (error: ServiceError | null, response: InstanceGroup) => void): ClientUnaryCall;
    get(request: GetInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: InstanceGroup) => void): ClientUnaryCall;
    get(request: GetInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: InstanceGroup) => void): ClientUnaryCall;
    /** Retrieves the list of InstanceGroup resources in the specified folder. */
    list(request: ListInstanceGroupsRequest, callback: (error: ServiceError | null, response: ListInstanceGroupsResponse) => void): ClientUnaryCall;
    list(request: ListInstanceGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstanceGroupsResponse) => void): ClientUnaryCall;
    list(request: ListInstanceGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstanceGroupsResponse) => void): ClientUnaryCall;
    /**
     * Creates an instance group in the specified folder.
     * This method starts an operation that can be cancelled by another operation.
     */
    create(request: CreateInstanceGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Creates an instance group in the specified folder from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    createFromYaml(request: CreateInstanceGroupFromYamlRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createFromYaml(request: CreateInstanceGroupFromYamlRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createFromYaml(request: CreateInstanceGroupFromYamlRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified instance group.
     * This method starts an operation that can be cancelled by another operation.
     */
    update(request: UpdateInstanceGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified instance group from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    updateFromYaml(request: UpdateInstanceGroupFromYamlRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateFromYaml(request: UpdateInstanceGroupFromYamlRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateFromYaml(request: UpdateInstanceGroupFromYamlRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified instance group. */
    stop(request: StopInstanceGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Performs rolling restart of specified instances for the specified instance group.
     * Rolling restart does restart of instances respecting all group policies.
     */
    rollingRestart(request: RollingRestartRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rollingRestart(request: RollingRestartRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rollingRestart(request: RollingRestartRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Performs rolling recreate of specified instances for the specified instance group.
     * Rolling recreate does recreate of instance VMs respecting all group policies.
     */
    rollingRecreate(request: RollingRecreateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rollingRecreate(request: RollingRecreateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rollingRecreate(request: RollingRecreateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified instance group. */
    start(request: StartInstanceGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified instance group. */
    delete(request: DeleteInstanceGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists instances for the specified instance group. */
    listInstances(request: ListInstanceGroupInstancesRequest, callback: (error: ServiceError | null, response: ListInstanceGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListInstanceGroupInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstanceGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListInstanceGroupInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstanceGroupInstancesResponse) => void): ClientUnaryCall;
    /** Delete instances from the instance group. */
    deleteInstances(request: DeleteInstancesRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteInstances(request: DeleteInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteInstances(request: DeleteInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stop instances from the instance group. */
    stopInstances(request: StopInstancesRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stopInstances(request: StopInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stopInstances(request: StopInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified instance group. */
    listOperations(request: ListInstanceGroupOperationsRequest, callback: (error: ServiceError | null, response: ListInstanceGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListInstanceGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstanceGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListInstanceGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstanceGroupOperationsResponse) => void): ClientUnaryCall;
    /** Lists logs for the specified instance group. */
    listLogRecords(request: ListInstanceGroupLogRecordsRequest, callback: (error: ServiceError | null, response: ListInstanceGroupLogRecordsResponse) => void): ClientUnaryCall;
    listLogRecords(request: ListInstanceGroupLogRecordsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstanceGroupLogRecordsResponse) => void): ClientUnaryCall;
    listLogRecords(request: ListInstanceGroupLogRecordsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstanceGroupLogRecordsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified instance group. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified instance group. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified instance group. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Resumes all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them.
     */
    resumeProcesses(request: ResumeInstanceGroupProcessesRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resumeProcesses(request: ResumeInstanceGroupProcessesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resumeProcesses(request: ResumeInstanceGroupProcessesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Pauses all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
     */
    pauseProcesses(request: PauseInstanceGroupProcessesRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pauseProcesses(request: PauseInstanceGroupProcessesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pauseProcesses(request: PauseInstanceGroupProcessesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const InstanceGroupServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): InstanceGroupServiceClient;
    service: typeof InstanceGroupServiceService;
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
