import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
export declare const protobufPackage = "yandex.cloud.compute.v1.instancegroup";
export declare enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address, for example 192.168.0.0. */
    IPV4 = 1,
    /** IPV6 - IPv6 address, not available yet. */
    IPV6 = 2,
    UNRECOGNIZED = -1
}
export declare function ipVersionFromJSON(object: any): IpVersion;
export declare function ipVersionToJSON(object: IpVersion): string;
export interface InstanceGroup {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup";
    /** ID of the instance group. */
    id: string;
    /** ID of the folder that the instance group belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /**
     * Name of the instance group.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the instance group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * Instance template for creating the instance group.
     * For more information, see [Instance Templates](/docs/compute/concepts/instance-groups/instance-template).
     */
    instanceTemplate?: InstanceTemplate;
    /** [Scaling policy](/docs/compute/concepts/instance-groups/scale) of the instance group. */
    scalePolicy?: ScalePolicy;
    /** Deployment policy of the instance group. */
    deployPolicy?: DeployPolicy;
    /** Allocation policy of the instance group by zones and regions. */
    allocationPolicy?: AllocationPolicy;
    /** Status of the Network Load Balancer target group attributed to the instance group. */
    loadBalancerState?: LoadBalancerState;
    /** States of instances for this instance group. */
    managedInstancesState?: ManagedInstancesState;
    /**
     * Settings for balancing load between instances via [Network Load Balancer](/docs/network-load-balancer/concepts)
     * (OSI model layer 3).
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
    /** Status of the instance group. */
    status: InstanceGroup_Status;
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
     */
    applicationLoadBalancerSpec?: ApplicationLoadBalancerSpec;
    /**
     * Status of the Application Load Balancer target group attributed to the instance group.
     *
     * Returned if there is a working load balancer that the target group is connected to.
     */
    applicationLoadBalancerState?: ApplicationLoadBalancerState;
}
export declare enum InstanceGroup_Status {
    STATUS_UNSPECIFIED = 0,
    /** STARTING - Instance group is being started and will become active soon. */
    STARTING = 1,
    /**
     * ACTIVE - Instance group is active.
     * In this state the group manages its instances and monitors their health,
     * creating, deleting, stopping, updating and starting instances as needed.
     *
     * To stop the instance group, call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.Stop].
     * To pause the processes in the instance group, i.e. scaling, checking instances' health,
     * auto-healing and updating them, without stopping the instances,
     * call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.PauseProcesses].
     */
    ACTIVE = 2,
    /**
     * STOPPING - Instance group is being stopped.
     * Group's instances stop receiving traffic from the load balancer (if any) and are then stopped.
     */
    STOPPING = 3,
    /**
     * STOPPED - Instance group is stopped.
     * In this state the group cannot be updated and does not react to any changes made to its instances.
     * To start the instance group, call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.Start].
     */
    STOPPED = 4,
    /** DELETING - Instance group is being deleted. */
    DELETING = 5,
    /**
     * PAUSED - Instance group is paused.
     * In this state all the processes regarding the group management, i.e. scaling, checking instances' health,
     * auto-healing and updating them, are paused. The instances that were running prior to pausing the group, however,
     * may still be running.
     *
     * To resume the processes in the instance group,
     * call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.ResumeProcesses].
     * The group status will change to `ACTIVE`.
     */
    PAUSED = 6,
    UNRECOGNIZED = -1
}
export declare function instanceGroup_StatusFromJSON(object: any): InstanceGroup_Status;
export declare function instanceGroup_StatusToJSON(object: InstanceGroup_Status): string;
export interface InstanceGroup_LabelsEntry {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry";
    key: string;
    value: string;
}
export interface ApplicationLoadBalancerState {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState";
    /** ID of the Application Load Balancer target group attributed to the instance group. */
    targetGroupId: string;
    /** Status message of the target group. */
    statusMessage: string;
}
export interface Variable {
    $type: "yandex.cloud.compute.v1.instancegroup.Variable";
    key: string;
    value: string;
}
export interface LoadBalancerState {
    $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerState";
    /** ID of the Network Load Balancer target group attributed to the instance group. */
    targetGroupId: string;
    /** Status message of the target group. */
    statusMessage: string;
}
export interface ManagedInstancesState {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState";
    /** Target number of instances for this instance group. */
    targetSize: number;
    /** The number of running instances that match the current instance template. For more information, see [ManagedInstance.Status.RUNNING_ACTUAL]. */
    runningActualCount: number;
    /** The number of running instances that does not match the current instance template. For more information, see [ManagedInstance.Status.RUNNING_OUTDATED]. */
    runningOutdatedCount: number;
    /** The number of instances in flight (for example, updating, starting, deleting). For more information, see [ManagedInstance.Status]. */
    processingCount: number;
}
export interface ManagedInstancesState_Statuses {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses";
    /** Instance is being created. */
    creating: number;
    /** Instance is being started. */
    starting: number;
    /** Instance is being opened to receive traffic. */
    opening: number;
    /** Instance is being warmed. */
    warming: number;
    /** Instance is running normally. */
    running: number;
    /** Instance is being closed to traffic. */
    closing: number;
    /** Instance is being stopped. */
    stopping: number;
    /** Instance is being updated. */
    updating: number;
    /** Instance is being deleted. */
    deleting: number;
    /** Instance failed and needs to be recreated. */
    failed: number;
}
export interface ScalePolicy {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy";
    /** [Manual scaling policy](/docs/compute/concepts/instance-groups/scale#fixed-policy) of the instance group. */
    fixedScale?: ScalePolicy_FixedScale | undefined;
    /** [Automatic scaling policy](/docs/compute/concepts/instance-groups/scale#auto-scale) of the instance group. */
    autoScale?: ScalePolicy_AutoScale | undefined;
    /** Test spec for [automatic scaling policy](/docs/compute/concepts/instance-groups/scale#auto-scale) of the instance group. */
    testAutoScale?: ScalePolicy_AutoScale;
}
export interface ScalePolicy_AutoScale {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale";
    /** Lower limit for instance count in each zone. */
    minZoneSize: number;
    /**
     * Upper limit for total instance count (across all zones).
     * 0 means maximum limit = 100.
     */
    maxSize: number;
    /**
     * Time in seconds allotted for averaging metrics.
     * 1 minute by default.
     */
    measurementDuration?: Duration;
    /**
     * The warmup time of the instance in seconds. During this time,
     * traffic is sent to the instance, but instance metrics are not collected.
     */
    warmupDuration?: Duration;
    /**
     * Minimum amount of time in seconds allotted for monitoring before
     * Instance Groups can reduce the number of instances in the group.
     * During this time, the group size doesn't decrease, even if the new metric values
     * indicate that it should.
     */
    stabilizationDuration?: Duration;
    /** Target group size. */
    initialSize: number;
    /**
     * Defines an autoscaling rule based on the average CPU utilization of the instance group.
     *
     * If more than one rule is specified, e.g. CPU utilization and one or more Monitoring metrics ([custom_rules]),
     * the size of the instance group will be equal to the maximum of sizes calculated according to each metric.
     */
    cpuUtilizationRule?: ScalePolicy_CpuUtilizationRule;
    /**
     * Defines an autoscaling rule based on a [custom metric](/docs/monitoring/operations/metric/add) from Monitoring.
     *
     * If more than one rule is specified, e.g. CPU utilization ([cpu_utilization_rule]) and one or more Monitoring
     * metrics, the size of the instance group will be equal to the maximum of sizes calculated according to each metric.
     */
    customRules: ScalePolicy_CustomRule[];
    /** Autoscaling type. */
    autoScaleType: ScalePolicy_AutoScale_AutoScaleType;
}
export declare enum ScalePolicy_AutoScale_AutoScaleType {
    AUTO_SCALE_TYPE_UNSPECIFIED = 0,
    /** ZONAL - Scale each zone independently. This is the default. */
    ZONAL = 1,
    /** REGIONAL - Scale group as a whole. */
    REGIONAL = 2,
    UNRECOGNIZED = -1
}
export declare function scalePolicy_AutoScale_AutoScaleTypeFromJSON(object: any): ScalePolicy_AutoScale_AutoScaleType;
export declare function scalePolicy_AutoScale_AutoScaleTypeToJSON(object: ScalePolicy_AutoScale_AutoScaleType): string;
export interface ScalePolicy_CpuUtilizationRule {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule";
    /** Target CPU utilization level. Instance Groups maintains this level for each availability zone. */
    utilizationTarget: number;
}
export interface ScalePolicy_CustomRule {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule";
    /**
     * Custom metric rule type. This field affects which label from
     * the custom metric should be used: `zone_id` or `instance_id`.
     */
    ruleType: ScalePolicy_CustomRule_RuleType;
    /** Type of custom metric. This field affects how Instance Groups calculates the average metric value. */
    metricType: ScalePolicy_CustomRule_MetricType;
    /** Name of custom metric in Monitoring that should be used for scaling. */
    metricName: string;
    /** Labels of custom metric in Monitoring that should be used for scaling. */
    labels: {
        [key: string]: string;
    };
    /** Target value for the custom metric. Instance Groups maintains this level for each availability zone. */
    target: number;
    /** Folder id of custom metric in Monitoring that should be used for scaling. */
    folderId: string;
    /** Service of custom metric in Monitoring that should be used for scaling. */
    service: string;
}
export declare enum ScalePolicy_CustomRule_RuleType {
    RULE_TYPE_UNSPECIFIED = 0,
    /**
     * UTILIZATION - This type means that the metric applies to one instance.
     * First, Instance Groups calculates the average metric value for each instance,
     * then averages the values for instances in one availability zone or in whole group depends on autoscaling type.
     * This type of metric must have the `instance_id` label.
     */
    UTILIZATION = 1,
    /**
     * WORKLOAD - This type means that the metric applies to instances in one availability zone or to whole group depends on autoscaling type.
     * This type of metric must have the `zone_id` label if ZONAL autoscaling type is chosen.
     */
    WORKLOAD = 2,
    UNRECOGNIZED = -1
}
export declare function scalePolicy_CustomRule_RuleTypeFromJSON(object: any): ScalePolicy_CustomRule_RuleType;
export declare function scalePolicy_CustomRule_RuleTypeToJSON(object: ScalePolicy_CustomRule_RuleType): string;
export declare enum ScalePolicy_CustomRule_MetricType {
    METRIC_TYPE_UNSPECIFIED = 0,
    /**
     * GAUGE - This type is used for metrics that show the metric value at a certain point in time,
     * such as requests per second to the server on an instance.
     *
     * Instance Groups calculates the average metric value for the period
     * specified in the [AutoScale.measurement_duration] field.
     */
    GAUGE = 1,
    /**
     * COUNTER - This type is used for metrics that monotonically increase over time,
     * such as the total number of requests to the server on an instance.
     *
     * Instance Groups calculates the average value increase for the period
     * specified in the [AutoScale.measurement_duration] field.
     */
    COUNTER = 2,
    UNRECOGNIZED = -1
}
export declare function scalePolicy_CustomRule_MetricTypeFromJSON(object: any): ScalePolicy_CustomRule_MetricType;
export declare function scalePolicy_CustomRule_MetricTypeToJSON(object: ScalePolicy_CustomRule_MetricType): string;
export interface ScalePolicy_CustomRule_LabelsEntry {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry";
    key: string;
    value: string;
}
export interface ScalePolicy_FixedScale {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale";
    /** Number of instances in the instance group. */
    size: number;
}
export interface DeployPolicy {
    $type: "yandex.cloud.compute.v1.instancegroup.DeployPolicy";
    /**
     * The maximum number of running instances that can be taken offline (i.e., stopped or deleted) at the same time
     * during the update process.
     * If [max_expansion] is not specified or set to zero, [max_unavailable] must be set to a non-zero value.
     */
    maxUnavailable: number;
    /**
     * The maximum number of instances that can be deleted at the same time.
     *
     * The value 0 is any number of virtual machines within the allowed values.
     */
    maxDeleting: number;
    /**
     * The maximum number of instances that can be created at the same time.
     *
     * The value 0 is any number of virtual machines within the allowed values.
     */
    maxCreating: number;
    /**
     * The maximum number of instances that can be temporarily allocated above the group's target size
     * during the update process.
     * If [max_unavailable] is not specified or set to zero, [max_expansion] must be set to a non-zero value.
     */
    maxExpansion: number;
    /**
     * Instance startup duration.
     * Instance will be considered up and running (and start receiving traffic) only after startup_duration
     * has elapsed and all health checks are passed.
     * See [yandex.cloud.compute.v1.instancegroup.ManagedInstance.Status] for more information.
     */
    startupDuration?: Duration;
    /** Affects the lifecycle of the instance during deployment. */
    strategy: DeployPolicy_Strategy;
}
export declare enum DeployPolicy_Strategy {
    STRATEGY_UNSPECIFIED = 0,
    /** PROACTIVE - Instance Groups can forcefully stop a running instance. This is the default. */
    PROACTIVE = 1,
    /**
     * OPPORTUNISTIC - Instance Groups does not stop a running instance.
     * Instead, it will wait until the instance stops itself or becomes unhealthy.
     */
    OPPORTUNISTIC = 2,
    UNRECOGNIZED = -1
}
export declare function deployPolicy_StrategyFromJSON(object: any): DeployPolicy_Strategy;
export declare function deployPolicy_StrategyToJSON(object: DeployPolicy_Strategy): string;
export interface AllocationPolicy {
    $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy";
    /** List of availability zones. */
    zones: AllocationPolicy_Zone[];
}
export interface AllocationPolicy_Zone {
    $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone";
    /** ID of the availability zone where the instance resides. */
    zoneId: string;
    /**
     * Each instance in a zone will be associated with exactly one of a tag from a pool below.
     * All specified tags must be unique across the whole group not only the zone.
     * It is guaranteed that during whole deploy only tags from prefix of the specified list will be used.
     * It is possible to use tag associated with instance in templating via {instance.tag}.
     */
    instanceTagsPool: string[];
}
export interface InstanceTemplate {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate";
    /** Description of the instance template. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the hardware platform configuration for the instance.
     * Platforms allows you to create various types of instances: with a large amount of memory,
     * with a large number of cores, with a burstable performance.
     * For more information, see [Platforms](/docs/compute/concepts/vm-platforms).
     */
    platformId: string;
    /** Computing resources of the instance such as the amount of memory and number of cores. */
    resourcesSpec?: ResourcesSpec;
    /**
     * The metadata `key:value` pairs assigned to this instance template. This includes custom metadata and predefined keys.
     *
     * Metadata values may contain one of the supported placeholders:
     *   {instance_group.id}
     *   {instance.short_id}
     *   {instance.index}
     *   {instance.index_in_zone}
     *   {instance.zone_id}
     * InstanceGroup and Instance labels may be copied to metadata following way:
     *   {instance_group.labels.some_label_key}
     *   {instance.labels.another_label_key}
     * These placeholders will be substituted for each created instance anywhere in the value text.
     * In the rare case the value requires to contain this placeholder explicitly,
     * it must be escaped with double brackets, in example {instance.index}.
     *
     * For example, you may use the metadata in order to provide your public SSH key to the instance.
     * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
     */
    metadata: {
        [key: string]: string;
    };
    /** Boot disk specification that will be attached to the instance. */
    bootDiskSpec?: AttachedDiskSpec;
    /** Array of secondary disks that will be attached to the instance. */
    secondaryDiskSpecs: AttachedDiskSpec[];
    /** Array of network interfaces that will be attached to the instance. */
    networkInterfaceSpecs: NetworkInterfaceSpec[];
    /** Scheduling policy for the instance. */
    schedulingPolicy?: SchedulingPolicy;
    /** Service account ID for the instance. */
    serviceAccountId: string;
    /** Network settings for the instance. */
    networkSettings?: NetworkSettings;
    /**
     * Name of the instance.
     * In order to be unique it must contain at least on of instance unique placeholders:
     *   {instance.short_id}
     *   {instance.index}
     *   combination of {instance.zone_id} and {instance.index_in_zone}
     * Example: my-instance-{instance.index}
     * If not set, default is used: {instance_group.id}-{instance.short_id}
     * It may also contain another placeholders, see metadata doc for full list.
     */
    name: string;
    /**
     * Host name for the instance.
     * This field is used to generate the [yandex.cloud.compute.v1.Instance.fqdn] value.
     * The host name must be unique within the network and region.
     * If not specified, the host name will be equal to [yandex.cloud.compute.v1.Instance.id] of the instance
     * and FQDN will be `<id>.auto.internal`. Otherwise FQDN will be `<hostname>.<region_id>.internal`.
     *
     * In order to be unique it must contain at least on of instance unique placeholders:
     *   {instance.short_id}
     *   {instance.index}
     *   combination of {instance.zone_id} and {instance.index_in_zone}
     * Example: my-instance-{instance.index}
     * If not set, `name` value will be used
     * It may also contain another placeholders, see metadata doc for full list.
     */
    hostname: string;
    /** Placement Group */
    placementPolicy?: PlacementPolicy;
    /**
     * Array of filesystems to attach to the instance.
     *
     * The filesystems must reside in the same availability zone as the instance.
     *
     * To use the instance with an attached filesystem, the latter must be mounted.
     * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
     */
    filesystemSpecs: AttachedFilesystemSpec[];
}
export interface InstanceTemplate_LabelsEntry {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry";
    key: string;
    value: string;
}
export interface InstanceTemplate_MetadataEntry {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry";
    key: string;
    value: string;
}
export interface AttachedFilesystemSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedFilesystemSpec";
    /** Mode of access to the filesystem that should be attached. */
    mode: AttachedFilesystemSpec_Mode;
    /**
     * Name of the device representing the filesystem on the instance.
     *
     * The name should be used for referencing the filesystem from within the instance
     * when it's being mounted, resized etc.
     *
     * If not specified, a random value will be generated.
     */
    deviceName: string;
    /** ID of the filesystem that should be attached. */
    filesystemId: string;
}
export declare enum AttachedFilesystemSpec_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. Default value. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1
}
export declare function attachedFilesystemSpec_ModeFromJSON(object: any): AttachedFilesystemSpec_Mode;
export declare function attachedFilesystemSpec_ModeToJSON(object: AttachedFilesystemSpec_Mode): string;
export interface PlacementPolicy {
    $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy";
    /** Identifier of placement group */
    placementGroupId: string;
    /** List of affinity rules. Scheduler will attempt to allocate instances according to order of rules. */
    hostAffinityRules: PlacementPolicy_HostAffinityRule[];
}
/** Affinity definition */
export interface PlacementPolicy_HostAffinityRule {
    $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule";
    /** Affinity label or one of reserved values - 'yc.hostId', 'yc.hostGroupId' */
    key: string;
    /** Include or exclude action */
    op: PlacementPolicy_HostAffinityRule_Operator;
    /** Affinity value or host ID or host group ID */
    values: string[];
}
export declare enum PlacementPolicy_HostAffinityRule_Operator {
    OPERATOR_UNSPECIFIED = 0,
    IN = 1,
    NOT_IN = 2,
    UNRECOGNIZED = -1
}
export declare function placementPolicy_HostAffinityRule_OperatorFromJSON(object: any): PlacementPolicy_HostAffinityRule_Operator;
export declare function placementPolicy_HostAffinityRule_OperatorToJSON(object: PlacementPolicy_HostAffinityRule_Operator): string;
export interface ResourcesSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.ResourcesSpec";
    /** The amount of memory available to the instance, specified in bytes. */
    memory: number;
    /** The number of cores available to the instance. */
    cores: number;
    /**
     * Baseline level of CPU performance with the ability to burst performance above that baseline level.
     * This field sets baseline performance for each core.
     */
    coreFraction: number;
    /** The number of GPUs available to the instance. */
    gpus: number;
}
export interface AttachedDiskSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec";
    /** Access mode to the Disk resource. */
    mode: AttachedDiskSpec_Mode;
    /**
     * Serial number that is reflected in the /dev/disk/by-id/ tree
     * of a Linux operating system running within the instance.
     *
     * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
     */
    deviceName: string;
    /**
     * oneof disk_spec or disk_id
     * Disk specification that is attached to the instance. For more information, see [Disks](/docs/compute/concepts/disk).
     */
    diskSpec?: AttachedDiskSpec_DiskSpec;
    /** Set to use an existing disk. To set use variables. */
    diskId: string;
    /** When set can be later used to change DiskSpec of actual disk. */
    name: string;
}
export declare enum AttachedDiskSpec_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1
}
export declare function attachedDiskSpec_ModeFromJSON(object: any): AttachedDiskSpec_Mode;
export declare function attachedDiskSpec_ModeToJSON(object: AttachedDiskSpec_Mode): string;
export interface AttachedDiskSpec_DiskSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec";
    /** Description of the disk. */
    description: string;
    /** ID of the disk type. */
    typeId: string;
    /** Size of the disk, specified in bytes. */
    size: number;
    /** ID of the image that will be used for disk creation. */
    imageId: string | undefined;
    /** ID of the snapshot that will be used for disk creation. */
    snapshotId: string | undefined;
    /**
     * When set to true, disk will not be deleted even after managed instance is deleted.
     * It will be a user's responsibility to delete such disks.
     */
    preserveAfterInstanceDelete: boolean;
}
export interface NetworkInterfaceSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec";
    /** ID of the network. */
    networkId: string;
    /** IDs of the subnets. */
    subnetIds: string[];
    /** Primary IPv4 address that is assigned to the instance for this network interface. */
    primaryV4AddressSpec?: PrimaryAddressSpec;
    /** Primary IPv6 address that is assigned to the instance for this network interface. IPv6 not available yet. */
    primaryV6AddressSpec?: PrimaryAddressSpec;
    /** IDs of security groups. */
    securityGroupIds: string[];
}
export interface PrimaryAddressSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec";
    /**
     * An external IP address configuration.
     * If not specified, then this managed instance will have no external internet access.
     */
    oneToOneNatSpec?: OneToOneNatSpec;
    /** Internal DNS configuration */
    dnsRecordSpecs: DnsRecordSpec[];
    /** Optional. Manual set static internal IP. To set use variables. */
    address: string;
}
export interface OneToOneNatSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec";
    /** IP version for the public IP address. */
    ipVersion: IpVersion;
    /** Manual set static public IP. To set use variables. (optional) */
    address: string;
    /** External DNS configuration */
    dnsRecordSpecs: DnsRecordSpec[];
}
export interface DnsRecordSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.DnsRecordSpec";
    /** FQDN (required) */
    fqdn: string;
    /** DNS zone id (optional, if not set, private zone used) */
    dnsZoneId: string;
    /** DNS record ttl, values in 0-86400 (optional) */
    ttl: number;
    /** When set to true, also create PTR DNS record (optional) */
    ptr: boolean;
}
export interface SchedulingPolicy {
    $type: "yandex.cloud.compute.v1.instancegroup.SchedulingPolicy";
    /**
     * Preemptible instances are stopped at least once every 24 hours, and can be stopped at any time
     * if their resources are needed by Compute.
     * For more information, see [Preemptible Virtual Machines](/docs/compute/concepts/preemptible-vm).
     */
    preemptible: boolean;
}
export interface NetworkSettings {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkSettings";
    /** Type of instance network. */
    type: NetworkSettings_Type;
}
export declare enum NetworkSettings_Type {
    TYPE_UNSPECIFIED = 0,
    STANDARD = 1,
    SOFTWARE_ACCELERATED = 2,
    HARDWARE_ACCELERATED = 3,
    UNRECOGNIZED = -1
}
export declare function networkSettings_TypeFromJSON(object: any): NetworkSettings_Type;
export declare function networkSettings_TypeToJSON(object: NetworkSettings_Type): string;
export interface LoadBalancerSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec";
    /** Specification of the target group that the instance group will be added to. For more information, see [Target groups and resources](/docs/network-load-balancer/concepts/target-resources). */
    targetGroupSpec?: TargetGroupSpec;
    /**
     * Timeout for waiting for the VM to be checked by the load balancer. If the timeout is exceeded,
     * the VM will be turned off based on the deployment policy. Specified in seconds.
     */
    maxOpeningTrafficDuration?: Duration;
    /** Do not wait load balancer health checks. */
    ignoreHealthChecks: boolean;
}
export interface TargetGroupSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec";
    /** Name of the target group. */
    name: string;
    /** Description of the target group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface TargetGroupSpec_LabelsEntry {
    $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry";
    key: string;
    value: string;
}
export interface ApplicationLoadBalancerSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec";
    /** Basic properties of the Application Load Balancer target group attributed to the instance group. */
    targetGroupSpec?: ApplicationTargetGroupSpec;
    /**
     * Timeout for waiting for the VM to be checked by the load balancer. If the timeout is exceeded,
     * the VM will be turned off based on the deployment policy. Specified in seconds.
     */
    maxOpeningTrafficDuration?: Duration;
    /** Do not wait load balancer health checks. */
    ignoreHealthChecks: boolean;
}
export interface ApplicationTargetGroupSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec";
    /** Name of the target group. */
    name: string;
    /** Description of the target group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface ApplicationTargetGroupSpec_LabelsEntry {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry";
    key: string;
    value: string;
}
export interface HealthChecksSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthChecksSpec";
    /** Health checking specification. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
    healthCheckSpecs: HealthCheckSpec[];
    /**
     * Timeout for waiting for the VM to become healthy. If the timeout is exceeded,
     * the VM will be turned off based on the deployment policy. Specified in seconds.
     */
    maxCheckingHealthDuration?: Duration;
}
export interface HealthCheckSpec {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec";
    /** The interval between health checks. The default is 2 seconds. */
    interval?: Duration;
    /** Timeout for the managed instance to return a response for the health check. The default is 1 second. */
    timeout?: Duration;
    /** The number of failed health checks for the managed instance to be considered unhealthy. The default (0) is 2. */
    unhealthyThreshold: number;
    /** The number of successful health checks required in order for the managed instance to be considered healthy. The default (0) is 2. */
    healthyThreshold: number;
    /** Configuration options for a TCP health check. */
    tcpOptions?: HealthCheckSpec_TcpOptions | undefined;
    /** Configuration options for an HTTP health check. */
    httpOptions?: HealthCheckSpec_HttpOptions | undefined;
}
export interface HealthCheckSpec_TcpOptions {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions";
    /** Port to use for TCP health checks. */
    port: number;
}
export interface HealthCheckSpec_HttpOptions {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions";
    /** Port to use for HTTP health checks. */
    port: number;
    /** URL path to set for health checking requests. */
    path: string;
}
/** A ManagedInstance resource. For more information, see [Instance Groups Concepts](/docs/compute/concepts/instance-groups/). */
export interface ManagedInstance {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstance";
    /** ID of the managed instance. */
    id: string;
    /** Status of the managed instance. */
    status: ManagedInstance_Status;
    /** ID of the instance. */
    instanceId: string;
    /** Fully Qualified Domain Name. */
    fqdn: string;
    /** The name of the managed instance. */
    name: string;
    /** Status message for the managed instance. */
    statusMessage: string;
    /** ID of the availability zone where the instance resides. */
    zoneId: string;
    /** Array of network interfaces that are attached to the managed instance. */
    networkInterfaces: NetworkInterface[];
    /** The timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format when the status of the managed instance was last changed. */
    statusChangedAt?: Date;
    /** Managed instance tag. */
    instanceTag: string;
}
export declare enum ManagedInstance_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING_INSTANCE - Instance is being created. */
    CREATING_INSTANCE = 11,
    /** UPDATING_INSTANCE - Instance is being updated. */
    UPDATING_INSTANCE = 12,
    /** DELETING_INSTANCE - Instance is being deleted. */
    DELETING_INSTANCE = 13,
    /** STARTING_INSTANCE - Instance is being started. */
    STARTING_INSTANCE = 14,
    /** STOPPING_INSTANCE - Instance is being stopped. */
    STOPPING_INSTANCE = 15,
    /** AWAITING_STARTUP_DURATION - Instance has been created successfully, but startup duration has not elapsed yet. */
    AWAITING_STARTUP_DURATION = 16,
    /** CHECKING_HEALTH - Instance has been created successfully and startup duration has elapsed, but health checks have not passed yet and the managed instance is not ready to receive traffic. */
    CHECKING_HEALTH = 17,
    /** OPENING_TRAFFIC - Instance Groups is initiating health checks and routing traffic to the instances. */
    OPENING_TRAFFIC = 18,
    /** AWAITING_WARMUP_DURATION - Instance is now receiving traffic, but warmup duration has not elapsed yet. */
    AWAITING_WARMUP_DURATION = 19,
    /** CLOSING_TRAFFIC - Instance Groups has initiated the process of stopping routing traffic to the instances. */
    CLOSING_TRAFFIC = 20,
    /** RUNNING_ACTUAL - Instance is running normally and its attributes match the current InstanceTemplate. */
    RUNNING_ACTUAL = 21,
    /**
     * RUNNING_OUTDATED - Instance is running normally, but its attributes do not match the current InstanceTemplate.
     * It will be updated, recreated or deleted shortly.
     */
    RUNNING_OUTDATED = 22,
    /** STOPPED - Instance was stopped. */
    STOPPED = 23,
    /** DELETED - Instance was deleted. */
    DELETED = 24,
    /** PREPARING_RESOURCES - Instance Groups is preparing dependent resources. */
    PREPARING_RESOURCES = 25,
    UNRECOGNIZED = -1
}
export declare function managedInstance_StatusFromJSON(object: any): ManagedInstance_Status;
export declare function managedInstance_StatusToJSON(object: ManagedInstance_Status): string;
export interface NetworkInterface {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterface";
    /**
     * The index of the network interface, generated by the server, 0,1,2... etc.
     * Currently only one network interface is supported per instance.
     */
    index: string;
    /** MAC address that is assigned to the network interface. */
    macAddress: string;
    /** ID of the subnet. */
    subnetId: string;
    /** Primary IPv4 address that is assigned to the instance for this network interface. */
    primaryV4Address?: PrimaryAddress;
    /** Primary IPv6 address that is assigned to the instance for this network interface. IPv6 is not available yet. */
    primaryV6Address?: PrimaryAddress;
}
export interface PrimaryAddress {
    $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddress";
    /**
     * An IPv4 internal network address that is assigned to the managed instance for this network interface.
     * If not specified by the user, an unused internal IP is assigned by the system.
     */
    address: string;
    /** One-to-one NAT configuration. If missing, NAT has not been set up. */
    oneToOneNat?: OneToOneNat;
    /** Internal DNS configuration. */
    dnsRecords: DnsRecord[];
}
export interface OneToOneNat {
    $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNat";
    /** An IPv4 external network address that is assigned to the managed instance for this network interface. */
    address: string;
    /** External IP address version. */
    ipVersion: IpVersion;
    /** External DNS configuration. */
    dnsRecords: DnsRecord[];
}
export interface DnsRecord {
    $type: "yandex.cloud.compute.v1.instancegroup.DnsRecord";
    /**
     * Name of the A/AAAA record as specified when creating the instance.
     * Note that if `fqdn' has no trailing '.', it is specified relative to the zone (@see dns_zone_id).
     */
    fqdn: string;
    /** DNS zone id (optional, if not set, some private zone is used). */
    dnsZoneId: string;
    /** DNS record ttl (optional, if 0, a reasonable default is used). */
    ttl: number;
    /** When true, indicates there is a corresponding auto-created PTR DNS record. */
    ptr: boolean;
}
export interface LogRecord {
    $type: "yandex.cloud.compute.v1.instancegroup.LogRecord";
    /** Log timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    timestamp?: Date;
    /** The log message. */
    message: string;
}
export declare const InstanceGroup: {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup";
    encode(message: InstanceGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstanceGroup;
    fromJSON(object: any): InstanceGroup;
    toJSON(message: InstanceGroup): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: InstanceGroup_Status | undefined;
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
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
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
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
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
                type?: NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
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
                mode?: AttachedDiskSpec_Mode | undefined;
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
                mode?: AttachedDiskSpec_Mode | undefined;
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
                mode?: AttachedFilesystemSpec_Mode | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
            strategy?: DeployPolicy_Strategy | undefined;
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
        status?: InstanceGroup_Status | undefined;
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
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
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
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
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
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
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
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] & ({
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
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
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["customRules"][number], "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>)[] & Record<Exclude<keyof I["scalePolicy"]["autoScale"]["customRules"], "$type" | keyof {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[]>, never>) | undefined;
                autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
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
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] | undefined;
                autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
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
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[] & ({
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
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
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                } & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["customRules"][number], "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>)[] & Record<Exclude<keyof I["scalePolicy"]["testAutoScale"]["customRules"], "$type" | keyof {
                    folderId?: string | undefined;
                    labels?: {
                        [x: string]: string | undefined;
                        [x: number]: string | undefined;
                    } | undefined;
                    target?: number | undefined;
                    ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                    metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                    metricName?: string | undefined;
                    service?: string | undefined;
                }[]>, never>) | undefined;
                autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
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
                type?: NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
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
                mode?: AttachedDiskSpec_Mode | undefined;
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
                mode?: AttachedDiskSpec_Mode | undefined;
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
                mode?: AttachedFilesystemSpec_Mode | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
                type?: NetworkSettings_Type | undefined;
            } & {
                type?: NetworkSettings_Type | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["networkSettings"], "$type" | "type">, never>) | undefined;
            placementPolicy?: ({
                placementGroupId?: string | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } & {
                placementGroupId?: string | undefined;
                hostAffinityRules?: ({
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] & ({
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
                } & {
                    values?: (string[] & string[] & Record<Exclude<keyof I["instanceTemplate"]["placementPolicy"]["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
                    key?: string | undefined;
                    op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
                } & Record<Exclude<keyof I["instanceTemplate"]["placementPolicy"]["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["placementPolicy"]["hostAffinityRules"], "$type" | keyof {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
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
                mode?: AttachedDiskSpec_Mode | undefined;
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
                mode?: AttachedDiskSpec_Mode | undefined;
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
                mode?: AttachedDiskSpec_Mode | undefined;
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
                mode?: AttachedDiskSpec_Mode | undefined;
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
                mode?: AttachedDiskSpec_Mode | undefined;
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
                mode?: AttachedDiskSpec_Mode | undefined;
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
                mode?: AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] & ({
                mode?: AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            } & {
                mode?: AttachedFilesystemSpec_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            } & Record<Exclude<keyof I["instanceTemplate"]["filesystemSpecs"][number], "$type" | "mode" | "filesystemId" | "deviceName">, never>)[] & Record<Exclude<keyof I["instanceTemplate"]["filesystemSpecs"], "$type" | keyof {
                mode?: AttachedFilesystemSpec_Mode | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
                        ipVersion?: IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        address?: string | undefined;
                        ipVersion?: IpVersion | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
                        ipVersion?: IpVersion | undefined;
                        dnsRecordSpecs?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        address?: string | undefined;
                        ipVersion?: IpVersion | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
                        ipVersion?: IpVersion | undefined;
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
            strategy?: DeployPolicy_Strategy | undefined;
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
            strategy?: DeployPolicy_Strategy | undefined;
        } & Record<Exclude<keyof I["deployPolicy"], "$type" | "maxUnavailable" | "maxDeleting" | "maxCreating" | "maxExpansion" | "startupDuration" | "strategy">, never>) | undefined;
        loadBalancerState?: ({
            targetGroupId?: string | undefined;
            statusMessage?: string | undefined;
        } & {
            targetGroupId?: string | undefined;
            statusMessage?: string | undefined;
        } & Record<Exclude<keyof I["loadBalancerState"], "$type" | "targetGroupId" | "statusMessage">, never>) | undefined;
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
        } & Record<Exclude<keyof I["managedInstancesState"], "$type" | "targetSize" | "runningActualCount" | "runningOutdatedCount" | "processingCount">, never>) | undefined;
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
        applicationLoadBalancerState?: ({
            targetGroupId?: string | undefined;
            statusMessage?: string | undefined;
        } & {
            targetGroupId?: string | undefined;
            statusMessage?: string | undefined;
        } & Record<Exclude<keyof I["applicationLoadBalancerState"], "$type" | "targetGroupId" | "statusMessage">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "variables" | "labels" | "allocationPolicy" | "deletionProtection" | "serviceAccountId" | "scalePolicy" | "instanceTemplate" | "deployPolicy" | "loadBalancerState" | "managedInstancesState" | "loadBalancerSpec" | "healthChecksSpec" | "applicationLoadBalancerSpec" | "applicationLoadBalancerState">, never>>(object: I): InstanceGroup;
};
export declare const InstanceGroup_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry";
    encode(message: InstanceGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstanceGroup_LabelsEntry;
    fromJSON(object: any): InstanceGroup_LabelsEntry;
    toJSON(message: InstanceGroup_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): InstanceGroup_LabelsEntry;
};
export declare const ApplicationLoadBalancerState: {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState";
    encode(message: ApplicationLoadBalancerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationLoadBalancerState;
    fromJSON(object: any): ApplicationLoadBalancerState;
    toJSON(message: ApplicationLoadBalancerState): unknown;
    fromPartial<I extends {
        targetGroupId?: string | undefined;
        statusMessage?: string | undefined;
    } & {
        targetGroupId?: string | undefined;
        statusMessage?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "targetGroupId" | "statusMessage">, never>>(object: I): ApplicationLoadBalancerState;
};
export declare const Variable: {
    $type: "yandex.cloud.compute.v1.instancegroup.Variable";
    encode(message: Variable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Variable;
    fromJSON(object: any): Variable;
    toJSON(message: Variable): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Variable;
};
export declare const LoadBalancerState: {
    $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerState";
    encode(message: LoadBalancerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoadBalancerState;
    fromJSON(object: any): LoadBalancerState;
    toJSON(message: LoadBalancerState): unknown;
    fromPartial<I extends {
        targetGroupId?: string | undefined;
        statusMessage?: string | undefined;
    } & {
        targetGroupId?: string | undefined;
        statusMessage?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "targetGroupId" | "statusMessage">, never>>(object: I): LoadBalancerState;
};
export declare const ManagedInstancesState: {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState";
    encode(message: ManagedInstancesState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ManagedInstancesState;
    fromJSON(object: any): ManagedInstancesState;
    toJSON(message: ManagedInstancesState): unknown;
    fromPartial<I extends {
        targetSize?: number | undefined;
        runningActualCount?: number | undefined;
        runningOutdatedCount?: number | undefined;
        processingCount?: number | undefined;
    } & {
        targetSize?: number | undefined;
        runningActualCount?: number | undefined;
        runningOutdatedCount?: number | undefined;
        processingCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "targetSize" | "runningActualCount" | "runningOutdatedCount" | "processingCount">, never>>(object: I): ManagedInstancesState;
};
export declare const ManagedInstancesState_Statuses: {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses";
    encode(message: ManagedInstancesState_Statuses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ManagedInstancesState_Statuses;
    fromJSON(object: any): ManagedInstancesState_Statuses;
    toJSON(message: ManagedInstancesState_Statuses): unknown;
    fromPartial<I extends {
        creating?: number | undefined;
        starting?: number | undefined;
        opening?: number | undefined;
        warming?: number | undefined;
        running?: number | undefined;
        closing?: number | undefined;
        stopping?: number | undefined;
        updating?: number | undefined;
        deleting?: number | undefined;
        failed?: number | undefined;
    } & {
        creating?: number | undefined;
        starting?: number | undefined;
        opening?: number | undefined;
        warming?: number | undefined;
        running?: number | undefined;
        closing?: number | undefined;
        stopping?: number | undefined;
        updating?: number | undefined;
        deleting?: number | undefined;
        failed?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "creating" | "starting" | "opening" | "warming" | "running" | "closing" | "stopping" | "updating" | "deleting" | "failed">, never>>(object: I): ManagedInstancesState_Statuses;
};
export declare const ScalePolicy: {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy";
    encode(message: ScalePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy;
    fromJSON(object: any): ScalePolicy;
    toJSON(message: ScalePolicy): unknown;
    fromPartial<I extends {
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
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                metricName?: string | undefined;
                service?: string | undefined;
            }[] | undefined;
            autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
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
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                metricName?: string | undefined;
                service?: string | undefined;
            }[] | undefined;
            autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
        } | undefined;
    } & {
        fixedScale?: ({
            size?: number | undefined;
        } & {
            size?: number | undefined;
        } & Record<Exclude<keyof I["fixedScale"], "$type" | "size">, never>) | undefined;
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
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                metricName?: string | undefined;
                service?: string | undefined;
            }[] | undefined;
            autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
        } & {
            minZoneSize?: number | undefined;
            maxSize?: number | undefined;
            measurementDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoScale"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            warmupDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoScale"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            stabilizationDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["autoScale"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            initialSize?: number | undefined;
            cpuUtilizationRule?: ({
                utilizationTarget?: number | undefined;
            } & {
                utilizationTarget?: number | undefined;
            } & Record<Exclude<keyof I["autoScale"]["cpuUtilizationRule"], "$type" | "utilizationTarget">, never>) | undefined;
            customRules?: ({
                folderId?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                target?: number | undefined;
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                metricName?: string | undefined;
                service?: string | undefined;
            }[] & ({
                folderId?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                target?: number | undefined;
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
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
                } & Record<Exclude<keyof I["autoScale"]["customRules"][number]["labels"], string | number>, never>) | undefined;
                target?: number | undefined;
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                metricName?: string | undefined;
                service?: string | undefined;
            } & Record<Exclude<keyof I["autoScale"]["customRules"][number], "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>)[] & Record<Exclude<keyof I["autoScale"]["customRules"], "$type" | keyof {
                folderId?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                target?: number | undefined;
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                metricName?: string | undefined;
                service?: string | undefined;
            }[]>, never>) | undefined;
            autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
        } & Record<Exclude<keyof I["autoScale"], "$type" | "minZoneSize" | "maxSize" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "initialSize" | "cpuUtilizationRule" | "customRules" | "autoScaleType">, never>) | undefined;
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
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                metricName?: string | undefined;
                service?: string | undefined;
            }[] | undefined;
            autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
        } & {
            minZoneSize?: number | undefined;
            maxSize?: number | undefined;
            measurementDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["testAutoScale"]["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            warmupDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["testAutoScale"]["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            stabilizationDuration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["testAutoScale"]["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            initialSize?: number | undefined;
            cpuUtilizationRule?: ({
                utilizationTarget?: number | undefined;
            } & {
                utilizationTarget?: number | undefined;
            } & Record<Exclude<keyof I["testAutoScale"]["cpuUtilizationRule"], "$type" | "utilizationTarget">, never>) | undefined;
            customRules?: ({
                folderId?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                target?: number | undefined;
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                metricName?: string | undefined;
                service?: string | undefined;
            }[] & ({
                folderId?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                target?: number | undefined;
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
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
                } & Record<Exclude<keyof I["testAutoScale"]["customRules"][number]["labels"], string | number>, never>) | undefined;
                target?: number | undefined;
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                metricName?: string | undefined;
                service?: string | undefined;
            } & Record<Exclude<keyof I["testAutoScale"]["customRules"][number], "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>)[] & Record<Exclude<keyof I["testAutoScale"]["customRules"], "$type" | keyof {
                folderId?: string | undefined;
                labels?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                target?: number | undefined;
                ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
                metricType?: ScalePolicy_CustomRule_MetricType | undefined;
                metricName?: string | undefined;
                service?: string | undefined;
            }[]>, never>) | undefined;
            autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
        } & Record<Exclude<keyof I["testAutoScale"], "$type" | "minZoneSize" | "maxSize" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "initialSize" | "cpuUtilizationRule" | "customRules" | "autoScaleType">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "fixedScale" | "autoScale" | "testAutoScale">, never>>(object: I): ScalePolicy;
};
export declare const ScalePolicy_AutoScale: {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale";
    encode(message: ScalePolicy_AutoScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_AutoScale;
    fromJSON(object: any): ScalePolicy_AutoScale;
    toJSON(message: ScalePolicy_AutoScale): unknown;
    fromPartial<I extends {
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
            ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
            metricType?: ScalePolicy_CustomRule_MetricType | undefined;
            metricName?: string | undefined;
            service?: string | undefined;
        }[] | undefined;
        autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
    } & {
        minZoneSize?: number | undefined;
        maxSize?: number | undefined;
        measurementDuration?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["measurementDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        warmupDuration?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["warmupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        stabilizationDuration?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["stabilizationDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        initialSize?: number | undefined;
        cpuUtilizationRule?: ({
            utilizationTarget?: number | undefined;
        } & {
            utilizationTarget?: number | undefined;
        } & Record<Exclude<keyof I["cpuUtilizationRule"], "$type" | "utilizationTarget">, never>) | undefined;
        customRules?: ({
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            target?: number | undefined;
            ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
            metricType?: ScalePolicy_CustomRule_MetricType | undefined;
            metricName?: string | undefined;
            service?: string | undefined;
        }[] & ({
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            target?: number | undefined;
            ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
            metricType?: ScalePolicy_CustomRule_MetricType | undefined;
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
            } & Record<Exclude<keyof I["customRules"][number]["labels"], string | number>, never>) | undefined;
            target?: number | undefined;
            ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
            metricType?: ScalePolicy_CustomRule_MetricType | undefined;
            metricName?: string | undefined;
            service?: string | undefined;
        } & Record<Exclude<keyof I["customRules"][number], "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>)[] & Record<Exclude<keyof I["customRules"], "$type" | keyof {
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            target?: number | undefined;
            ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
            metricType?: ScalePolicy_CustomRule_MetricType | undefined;
            metricName?: string | undefined;
            service?: string | undefined;
        }[]>, never>) | undefined;
        autoScaleType?: ScalePolicy_AutoScale_AutoScaleType | undefined;
    } & Record<Exclude<keyof I, "$type" | "minZoneSize" | "maxSize" | "measurementDuration" | "warmupDuration" | "stabilizationDuration" | "initialSize" | "cpuUtilizationRule" | "customRules" | "autoScaleType">, never>>(object: I): ScalePolicy_AutoScale;
};
export declare const ScalePolicy_CpuUtilizationRule: {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule";
    encode(message: ScalePolicy_CpuUtilizationRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_CpuUtilizationRule;
    fromJSON(object: any): ScalePolicy_CpuUtilizationRule;
    toJSON(message: ScalePolicy_CpuUtilizationRule): unknown;
    fromPartial<I extends {
        utilizationTarget?: number | undefined;
    } & {
        utilizationTarget?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "utilizationTarget">, never>>(object: I): ScalePolicy_CpuUtilizationRule;
};
export declare const ScalePolicy_CustomRule: {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule";
    encode(message: ScalePolicy_CustomRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_CustomRule;
    fromJSON(object: any): ScalePolicy_CustomRule;
    toJSON(message: ScalePolicy_CustomRule): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        target?: number | undefined;
        ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
        metricType?: ScalePolicy_CustomRule_MetricType | undefined;
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
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        target?: number | undefined;
        ruleType?: ScalePolicy_CustomRule_RuleType | undefined;
        metricType?: ScalePolicy_CustomRule_MetricType | undefined;
        metricName?: string | undefined;
        service?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "labels" | "target" | "ruleType" | "metricType" | "metricName" | "service">, never>>(object: I): ScalePolicy_CustomRule;
};
export declare const ScalePolicy_CustomRule_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry";
    encode(message: ScalePolicy_CustomRule_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_CustomRule_LabelsEntry;
    fromJSON(object: any): ScalePolicy_CustomRule_LabelsEntry;
    toJSON(message: ScalePolicy_CustomRule_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): ScalePolicy_CustomRule_LabelsEntry;
};
export declare const ScalePolicy_FixedScale: {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale";
    encode(message: ScalePolicy_FixedScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_FixedScale;
    fromJSON(object: any): ScalePolicy_FixedScale;
    toJSON(message: ScalePolicy_FixedScale): unknown;
    fromPartial<I extends {
        size?: number | undefined;
    } & {
        size?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "size">, never>>(object: I): ScalePolicy_FixedScale;
};
export declare const DeployPolicy: {
    $type: "yandex.cloud.compute.v1.instancegroup.DeployPolicy";
    encode(message: DeployPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeployPolicy;
    fromJSON(object: any): DeployPolicy;
    toJSON(message: DeployPolicy): unknown;
    fromPartial<I extends {
        maxUnavailable?: number | undefined;
        maxDeleting?: number | undefined;
        maxCreating?: number | undefined;
        maxExpansion?: number | undefined;
        startupDuration?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        strategy?: DeployPolicy_Strategy | undefined;
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
        } & Record<Exclude<keyof I["startupDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        strategy?: DeployPolicy_Strategy | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxUnavailable" | "maxDeleting" | "maxCreating" | "maxExpansion" | "startupDuration" | "strategy">, never>>(object: I): DeployPolicy;
};
export declare const AllocationPolicy: {
    $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy";
    encode(message: AllocationPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AllocationPolicy;
    fromJSON(object: any): AllocationPolicy;
    toJSON(message: AllocationPolicy): unknown;
    fromPartial<I extends {
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
            instanceTagsPool?: (string[] & string[] & Record<Exclude<keyof I["zones"][number]["instanceTagsPool"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["zones"][number], "$type" | "zoneId" | "instanceTagsPool">, never>)[] & Record<Exclude<keyof I["zones"], "$type" | keyof {
            zoneId?: string | undefined;
            instanceTagsPool?: string[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "zones">, never>>(object: I): AllocationPolicy;
};
export declare const AllocationPolicy_Zone: {
    $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone";
    encode(message: AllocationPolicy_Zone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AllocationPolicy_Zone;
    fromJSON(object: any): AllocationPolicy_Zone;
    toJSON(message: AllocationPolicy_Zone): unknown;
    fromPartial<I extends {
        zoneId?: string | undefined;
        instanceTagsPool?: string[] | undefined;
    } & {
        zoneId?: string | undefined;
        instanceTagsPool?: (string[] & string[] & Record<Exclude<keyof I["instanceTagsPool"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "zoneId" | "instanceTagsPool">, never>>(object: I): AllocationPolicy_Zone;
};
export declare const InstanceTemplate: {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate";
    encode(message: InstanceTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstanceTemplate;
    fromJSON(object: any): InstanceTemplate;
    toJSON(message: InstanceTemplate): unknown;
    fromPartial<I extends {
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
            type?: NetworkSettings_Type | undefined;
        } | undefined;
        placementPolicy?: {
            placementGroupId?: string | undefined;
            hostAffinityRules?: {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
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
            mode?: AttachedDiskSpec_Mode | undefined;
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
            mode?: AttachedDiskSpec_Mode | undefined;
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
            mode?: AttachedFilesystemSpec_Mode | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
        } & Record<Exclude<keyof I["metadata"], string | number>, never>) | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        platformId?: string | undefined;
        serviceAccountId?: string | undefined;
        schedulingPolicy?: ({
            preemptible?: boolean | undefined;
        } & {
            preemptible?: boolean | undefined;
        } & Record<Exclude<keyof I["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
        networkSettings?: ({
            type?: NetworkSettings_Type | undefined;
        } & {
            type?: NetworkSettings_Type | undefined;
        } & Record<Exclude<keyof I["networkSettings"], "$type" | "type">, never>) | undefined;
        placementPolicy?: ({
            placementGroupId?: string | undefined;
            hostAffinityRules?: {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[] | undefined;
        } & {
            placementGroupId?: string | undefined;
            hostAffinityRules?: ({
                values?: string[] | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[] & ({
                values?: string[] | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
            } & {
                values?: (string[] & string[] & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
            } & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"], "$type" | keyof {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["placementPolicy"], "$type" | "placementGroupId" | "hostAffinityRules">, never>) | undefined;
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
        } & Record<Exclude<keyof I["resourcesSpec"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
        bootDiskSpec?: ({
            name?: string | undefined;
            mode?: AttachedDiskSpec_Mode | undefined;
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
            mode?: AttachedDiskSpec_Mode | undefined;
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
            } & Record<Exclude<keyof I["bootDiskSpec"]["diskSpec"], "$type" | "description" | "size" | "typeId" | "imageId" | "snapshotId" | "preserveAfterInstanceDelete">, never>) | undefined;
        } & Record<Exclude<keyof I["bootDiskSpec"], "$type" | "name" | "mode" | "diskId" | "deviceName" | "diskSpec">, never>) | undefined;
        secondaryDiskSpecs?: ({
            name?: string | undefined;
            mode?: AttachedDiskSpec_Mode | undefined;
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
            mode?: AttachedDiskSpec_Mode | undefined;
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
            mode?: AttachedDiskSpec_Mode | undefined;
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
            } & Record<Exclude<keyof I["secondaryDiskSpecs"][number]["diskSpec"], "$type" | "description" | "size" | "typeId" | "imageId" | "snapshotId" | "preserveAfterInstanceDelete">, never>) | undefined;
        } & Record<Exclude<keyof I["secondaryDiskSpecs"][number], "$type" | "name" | "mode" | "diskId" | "deviceName" | "diskSpec">, never>)[] & Record<Exclude<keyof I["secondaryDiskSpecs"], "$type" | keyof {
            name?: string | undefined;
            mode?: AttachedDiskSpec_Mode | undefined;
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
            mode?: AttachedFilesystemSpec_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        }[] & ({
            mode?: AttachedFilesystemSpec_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        } & {
            mode?: AttachedFilesystemSpec_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        } & Record<Exclude<keyof I["filesystemSpecs"][number], "$type" | "mode" | "filesystemId" | "deviceName">, never>)[] & Record<Exclude<keyof I["filesystemSpecs"], "$type" | keyof {
            mode?: AttachedFilesystemSpec_Mode | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            primaryV4AddressSpec?: ({
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
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
                    } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
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
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
            primaryV6AddressSpec?: ({
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
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
                    } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
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
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["networkInterfaceSpecs"][number], "$type" | "networkId" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec" | "subnetIds">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"], "$type" | keyof {
            networkId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "metadata" | "labels" | "platformId" | "serviceAccountId" | "schedulingPolicy" | "networkSettings" | "placementPolicy" | "hostname" | "resourcesSpec" | "bootDiskSpec" | "secondaryDiskSpecs" | "filesystemSpecs" | "networkInterfaceSpecs">, never>>(object: I): InstanceTemplate;
};
export declare const InstanceTemplate_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry";
    encode(message: InstanceTemplate_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstanceTemplate_LabelsEntry;
    fromJSON(object: any): InstanceTemplate_LabelsEntry;
    toJSON(message: InstanceTemplate_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): InstanceTemplate_LabelsEntry;
};
export declare const InstanceTemplate_MetadataEntry: {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry";
    encode(message: InstanceTemplate_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstanceTemplate_MetadataEntry;
    fromJSON(object: any): InstanceTemplate_MetadataEntry;
    toJSON(message: InstanceTemplate_MetadataEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): InstanceTemplate_MetadataEntry;
};
export declare const AttachedFilesystemSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedFilesystemSpec";
    encode(message: AttachedFilesystemSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedFilesystemSpec;
    fromJSON(object: any): AttachedFilesystemSpec;
    toJSON(message: AttachedFilesystemSpec): unknown;
    fromPartial<I extends {
        mode?: AttachedFilesystemSpec_Mode | undefined;
        filesystemId?: string | undefined;
        deviceName?: string | undefined;
    } & {
        mode?: AttachedFilesystemSpec_Mode | undefined;
        filesystemId?: string | undefined;
        deviceName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "filesystemId" | "deviceName">, never>>(object: I): AttachedFilesystemSpec;
};
export declare const PlacementPolicy: {
    $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy";
    encode(message: PlacementPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementPolicy;
    fromJSON(object: any): PlacementPolicy;
    toJSON(message: PlacementPolicy): unknown;
    fromPartial<I extends {
        placementGroupId?: string | undefined;
        hostAffinityRules?: {
            values?: string[] | undefined;
            key?: string | undefined;
            op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
        }[] | undefined;
    } & {
        placementGroupId?: string | undefined;
        hostAffinityRules?: ({
            values?: string[] | undefined;
            key?: string | undefined;
            op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
        }[] & ({
            values?: string[] | undefined;
            key?: string | undefined;
            op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
        } & {
            values?: (string[] & string[] & Record<Exclude<keyof I["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
            key?: string | undefined;
            op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
        } & Record<Exclude<keyof I["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["hostAffinityRules"], "$type" | keyof {
            values?: string[] | undefined;
            key?: string | undefined;
            op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "placementGroupId" | "hostAffinityRules">, never>>(object: I): PlacementPolicy;
};
export declare const PlacementPolicy_HostAffinityRule: {
    $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule";
    encode(message: PlacementPolicy_HostAffinityRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementPolicy_HostAffinityRule;
    fromJSON(object: any): PlacementPolicy_HostAffinityRule;
    toJSON(message: PlacementPolicy_HostAffinityRule): unknown;
    fromPartial<I extends {
        values?: string[] | undefined;
        key?: string | undefined;
        op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
    } & {
        values?: (string[] & string[] & Record<Exclude<keyof I["values"], "$type" | keyof string[]>, never>) | undefined;
        key?: string | undefined;
        op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
    } & Record<Exclude<keyof I, "$type" | "values" | "key" | "op">, never>>(object: I): PlacementPolicy_HostAffinityRule;
};
export declare const ResourcesSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.ResourcesSpec";
    encode(message: ResourcesSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourcesSpec;
    fromJSON(object: any): ResourcesSpec;
    toJSON(message: ResourcesSpec): unknown;
    fromPartial<I extends {
        memory?: number | undefined;
        cores?: number | undefined;
        coreFraction?: number | undefined;
        gpus?: number | undefined;
    } & {
        memory?: number | undefined;
        cores?: number | undefined;
        coreFraction?: number | undefined;
        gpus?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>>(object: I): ResourcesSpec;
};
export declare const AttachedDiskSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec";
    encode(message: AttachedDiskSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedDiskSpec;
    fromJSON(object: any): AttachedDiskSpec;
    toJSON(message: AttachedDiskSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        mode?: AttachedDiskSpec_Mode | undefined;
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
        mode?: AttachedDiskSpec_Mode | undefined;
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
        } & Record<Exclude<keyof I["diskSpec"], "$type" | "description" | "size" | "typeId" | "imageId" | "snapshotId" | "preserveAfterInstanceDelete">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "mode" | "diskId" | "deviceName" | "diskSpec">, never>>(object: I): AttachedDiskSpec;
};
export declare const AttachedDiskSpec_DiskSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec";
    encode(message: AttachedDiskSpec_DiskSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedDiskSpec_DiskSpec;
    fromJSON(object: any): AttachedDiskSpec_DiskSpec;
    toJSON(message: AttachedDiskSpec_DiskSpec): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, "$type" | "description" | "size" | "typeId" | "imageId" | "snapshotId" | "preserveAfterInstanceDelete">, never>>(object: I): AttachedDiskSpec_DiskSpec;
};
export declare const NetworkInterfaceSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec";
    encode(message: NetworkInterfaceSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInterfaceSpec;
    fromJSON(object: any): NetworkInterfaceSpec;
    toJSON(message: NetworkInterfaceSpec): unknown;
    fromPartial<I extends {
        networkId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        primaryV4AddressSpec?: {
            address?: string | undefined;
            oneToOneNatSpec?: {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
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
                ipVersion?: IpVersion | undefined;
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
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        primaryV4AddressSpec?: ({
            address?: string | undefined;
            oneToOneNatSpec?: {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
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
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
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
                } & Record<Exclude<keyof I["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
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
            } & Record<Exclude<keyof I["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV4AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
        primaryV6AddressSpec?: ({
            address?: string | undefined;
            oneToOneNatSpec?: {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
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
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
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
                } & Record<Exclude<keyof I["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
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
            } & Record<Exclude<keyof I["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV6AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "networkId" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec" | "subnetIds">, never>>(object: I): NetworkInterfaceSpec;
};
export declare const PrimaryAddressSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec";
    encode(message: PrimaryAddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrimaryAddressSpec;
    fromJSON(object: any): PrimaryAddressSpec;
    toJSON(message: PrimaryAddressSpec): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        oneToOneNatSpec?: {
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
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
            ipVersion?: IpVersion | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
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
            } & Record<Exclude<keyof I["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
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
        } & Record<Exclude<keyof I["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["dnsRecordSpecs"], "$type" | keyof {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>>(object: I): PrimaryAddressSpec;
};
export declare const OneToOneNatSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec";
    encode(message: OneToOneNatSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OneToOneNatSpec;
    fromJSON(object: any): OneToOneNatSpec;
    toJSON(message: OneToOneNatSpec): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        ipVersion?: IpVersion | undefined;
        dnsRecordSpecs?: {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[] | undefined;
    } & {
        address?: string | undefined;
        ipVersion?: IpVersion | undefined;
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
        } & Record<Exclude<keyof I["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["dnsRecordSpecs"], "$type" | keyof {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>>(object: I): OneToOneNatSpec;
};
export declare const DnsRecordSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.DnsRecordSpec";
    encode(message: DnsRecordSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DnsRecordSpec;
    fromJSON(object: any): DnsRecordSpec;
    toJSON(message: DnsRecordSpec): unknown;
    fromPartial<I extends {
        ttl?: number | undefined;
        fqdn?: string | undefined;
        dnsZoneId?: string | undefined;
        ptr?: boolean | undefined;
    } & {
        ttl?: number | undefined;
        fqdn?: string | undefined;
        dnsZoneId?: string | undefined;
        ptr?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>>(object: I): DnsRecordSpec;
};
export declare const SchedulingPolicy: {
    $type: "yandex.cloud.compute.v1.instancegroup.SchedulingPolicy";
    encode(message: SchedulingPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchedulingPolicy;
    fromJSON(object: any): SchedulingPolicy;
    toJSON(message: SchedulingPolicy): unknown;
    fromPartial<I extends {
        preemptible?: boolean | undefined;
    } & {
        preemptible?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "preemptible">, never>>(object: I): SchedulingPolicy;
};
export declare const NetworkSettings: {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkSettings";
    encode(message: NetworkSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkSettings;
    fromJSON(object: any): NetworkSettings;
    toJSON(message: NetworkSettings): unknown;
    fromPartial<I extends {
        type?: NetworkSettings_Type | undefined;
    } & {
        type?: NetworkSettings_Type | undefined;
    } & Record<Exclude<keyof I, "$type" | "type">, never>>(object: I): NetworkSettings;
};
export declare const LoadBalancerSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec";
    encode(message: LoadBalancerSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoadBalancerSpec;
    fromJSON(object: any): LoadBalancerSpec;
    toJSON(message: LoadBalancerSpec): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["targetGroupSpec"]["labels"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["targetGroupSpec"], "$type" | "description" | "name" | "labels">, never>) | undefined;
        maxOpeningTrafficDuration?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["maxOpeningTrafficDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        ignoreHealthChecks?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "targetGroupSpec" | "maxOpeningTrafficDuration" | "ignoreHealthChecks">, never>>(object: I): LoadBalancerSpec;
};
export declare const TargetGroupSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec";
    encode(message: TargetGroupSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroupSpec;
    fromJSON(object: any): TargetGroupSpec;
    toJSON(message: TargetGroupSpec): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels">, never>>(object: I): TargetGroupSpec;
};
export declare const TargetGroupSpec_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry";
    encode(message: TargetGroupSpec_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroupSpec_LabelsEntry;
    fromJSON(object: any): TargetGroupSpec_LabelsEntry;
    toJSON(message: TargetGroupSpec_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): TargetGroupSpec_LabelsEntry;
};
export declare const ApplicationLoadBalancerSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec";
    encode(message: ApplicationLoadBalancerSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationLoadBalancerSpec;
    fromJSON(object: any): ApplicationLoadBalancerSpec;
    toJSON(message: ApplicationLoadBalancerSpec): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["targetGroupSpec"]["labels"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["targetGroupSpec"], "$type" | "description" | "name" | "labels">, never>) | undefined;
        maxOpeningTrafficDuration?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["maxOpeningTrafficDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        ignoreHealthChecks?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "targetGroupSpec" | "maxOpeningTrafficDuration" | "ignoreHealthChecks">, never>>(object: I): ApplicationLoadBalancerSpec;
};
export declare const ApplicationTargetGroupSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec";
    encode(message: ApplicationTargetGroupSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationTargetGroupSpec;
    fromJSON(object: any): ApplicationTargetGroupSpec;
    toJSON(message: ApplicationTargetGroupSpec): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels">, never>>(object: I): ApplicationTargetGroupSpec;
};
export declare const ApplicationTargetGroupSpec_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry";
    encode(message: ApplicationTargetGroupSpec_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationTargetGroupSpec_LabelsEntry;
    fromJSON(object: any): ApplicationTargetGroupSpec_LabelsEntry;
    toJSON(message: ApplicationTargetGroupSpec_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): ApplicationTargetGroupSpec_LabelsEntry;
};
export declare const HealthChecksSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthChecksSpec";
    encode(message: HealthChecksSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthChecksSpec;
    fromJSON(object: any): HealthChecksSpec;
    toJSON(message: HealthChecksSpec): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["healthCheckSpecs"][number]["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
            interval?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["healthCheckSpecs"][number]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
            healthyThreshold?: number | undefined;
            unhealthyThreshold?: number | undefined;
            tcpOptions?: ({
                port?: number | undefined;
            } & {
                port?: number | undefined;
            } & Record<Exclude<keyof I["healthCheckSpecs"][number]["tcpOptions"], "$type" | "port">, never>) | undefined;
            httpOptions?: ({
                port?: number | undefined;
                path?: string | undefined;
            } & {
                port?: number | undefined;
                path?: string | undefined;
            } & Record<Exclude<keyof I["healthCheckSpecs"][number]["httpOptions"], "$type" | "port" | "path">, never>) | undefined;
        } & Record<Exclude<keyof I["healthCheckSpecs"][number], "$type" | "timeout" | "interval" | "healthyThreshold" | "unhealthyThreshold" | "tcpOptions" | "httpOptions">, never>)[] & Record<Exclude<keyof I["healthCheckSpecs"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["maxCheckingHealthDuration"], "$type" | "seconds" | "nanos">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "healthCheckSpecs" | "maxCheckingHealthDuration">, never>>(object: I): HealthChecksSpec;
};
export declare const HealthCheckSpec: {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec";
    encode(message: HealthCheckSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheckSpec;
    fromJSON(object: any): HealthCheckSpec;
    toJSON(message: HealthCheckSpec): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["timeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
        interval?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
        healthyThreshold?: number | undefined;
        unhealthyThreshold?: number | undefined;
        tcpOptions?: ({
            port?: number | undefined;
        } & {
            port?: number | undefined;
        } & Record<Exclude<keyof I["tcpOptions"], "$type" | "port">, never>) | undefined;
        httpOptions?: ({
            port?: number | undefined;
            path?: string | undefined;
        } & {
            port?: number | undefined;
            path?: string | undefined;
        } & Record<Exclude<keyof I["httpOptions"], "$type" | "port" | "path">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "timeout" | "interval" | "healthyThreshold" | "unhealthyThreshold" | "tcpOptions" | "httpOptions">, never>>(object: I): HealthCheckSpec;
};
export declare const HealthCheckSpec_TcpOptions: {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions";
    encode(message: HealthCheckSpec_TcpOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheckSpec_TcpOptions;
    fromJSON(object: any): HealthCheckSpec_TcpOptions;
    toJSON(message: HealthCheckSpec_TcpOptions): unknown;
    fromPartial<I extends {
        port?: number | undefined;
    } & {
        port?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "port">, never>>(object: I): HealthCheckSpec_TcpOptions;
};
export declare const HealthCheckSpec_HttpOptions: {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions";
    encode(message: HealthCheckSpec_HttpOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheckSpec_HttpOptions;
    fromJSON(object: any): HealthCheckSpec_HttpOptions;
    toJSON(message: HealthCheckSpec_HttpOptions): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        path?: string | undefined;
    } & {
        port?: number | undefined;
        path?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "port" | "path">, never>>(object: I): HealthCheckSpec_HttpOptions;
};
export declare const ManagedInstance: {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstance";
    encode(message: ManagedInstance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ManagedInstance;
    fromJSON(object: any): ManagedInstance;
    toJSON(message: ManagedInstance): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        status?: ManagedInstance_Status | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
        status?: ManagedInstance_Status | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                    ipVersion?: IpVersion | undefined;
                } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
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
                } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"]["dnsRecords"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
                    } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                    ipVersion?: IpVersion | undefined;
                } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
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
                } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"]["dnsRecords"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
        } & Record<Exclude<keyof I["networkInterfaces"][number], "$type" | "subnetId" | "index" | "macAddress" | "primaryV4Address" | "primaryV6Address">, never>)[] & Record<Exclude<keyof I["networkInterfaces"], "$type" | keyof {
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
                    ipVersion?: IpVersion | undefined;
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
                    ipVersion?: IpVersion | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "status" | "zoneId" | "fqdn" | "networkInterfaces" | "instanceId" | "statusMessage" | "instanceTag" | "statusChangedAt">, never>>(object: I): ManagedInstance;
};
export declare const NetworkInterface: {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterface";
    encode(message: NetworkInterface, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInterface;
    fromJSON(object: any): NetworkInterface;
    toJSON(message: NetworkInterface): unknown;
    fromPartial<I extends {
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
                ipVersion?: IpVersion | undefined;
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
                ipVersion?: IpVersion | undefined;
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
                ipVersion?: IpVersion | undefined;
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
                ipVersion?: IpVersion | undefined;
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
                } & Record<Exclude<keyof I["primaryV4Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV4Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
                ipVersion?: IpVersion | undefined;
            } & Record<Exclude<keyof I["primaryV4Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
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
            } & Record<Exclude<keyof I["primaryV4Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV4Address"]["dnsRecords"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV4Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
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
                ipVersion?: IpVersion | undefined;
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
                ipVersion?: IpVersion | undefined;
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
                } & Record<Exclude<keyof I["primaryV6Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV6Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
                ipVersion?: IpVersion | undefined;
            } & Record<Exclude<keyof I["primaryV6Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
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
            } & Record<Exclude<keyof I["primaryV6Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV6Address"]["dnsRecords"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV6Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "index" | "macAddress" | "primaryV4Address" | "primaryV6Address">, never>>(object: I): NetworkInterface;
};
export declare const PrimaryAddress: {
    $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddress";
    encode(message: PrimaryAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrimaryAddress;
    fromJSON(object: any): PrimaryAddress;
    toJSON(message: PrimaryAddress): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        oneToOneNat?: {
            address?: string | undefined;
            dnsRecords?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
            ipVersion?: IpVersion | undefined;
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
            ipVersion?: IpVersion | undefined;
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
            } & Record<Exclude<keyof I["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
            ipVersion?: IpVersion | undefined;
        } & Record<Exclude<keyof I["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
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
        } & Record<Exclude<keyof I["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["dnsRecords"], "$type" | keyof {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>>(object: I): PrimaryAddress;
};
export declare const OneToOneNat: {
    $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNat";
    encode(message: OneToOneNat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OneToOneNat;
    fromJSON(object: any): OneToOneNat;
    toJSON(message: OneToOneNat): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        dnsRecords?: {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[] | undefined;
        ipVersion?: IpVersion | undefined;
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
        } & Record<Exclude<keyof I["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["dnsRecords"], "$type" | keyof {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[]>, never>) | undefined;
        ipVersion?: IpVersion | undefined;
    } & Record<Exclude<keyof I, "$type" | "address" | "dnsRecords" | "ipVersion">, never>>(object: I): OneToOneNat;
};
export declare const DnsRecord: {
    $type: "yandex.cloud.compute.v1.instancegroup.DnsRecord";
    encode(message: DnsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DnsRecord;
    fromJSON(object: any): DnsRecord;
    toJSON(message: DnsRecord): unknown;
    fromPartial<I extends {
        ttl?: number | undefined;
        fqdn?: string | undefined;
        dnsZoneId?: string | undefined;
        ptr?: boolean | undefined;
    } & {
        ttl?: number | undefined;
        fqdn?: string | undefined;
        dnsZoneId?: string | undefined;
        ptr?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>>(object: I): DnsRecord;
};
export declare const LogRecord: {
    $type: "yandex.cloud.compute.v1.instancegroup.LogRecord";
    encode(message: LogRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogRecord;
    fromJSON(object: any): LogRecord;
    toJSON(message: LogRecord): unknown;
    fromPartial<I extends {
        message?: string | undefined;
        timestamp?: Date | undefined;
    } & {
        message?: string | undefined;
        timestamp?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "message" | "timestamp">, never>>(object: I): LogRecord;
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
