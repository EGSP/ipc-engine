"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllocationPolicy_Zone = exports.AllocationPolicy = exports.DeployPolicy = exports.ScalePolicy_FixedScale = exports.ScalePolicy_CustomRule_LabelsEntry = exports.ScalePolicy_CustomRule = exports.ScalePolicy_CpuUtilizationRule = exports.ScalePolicy_AutoScale = exports.ScalePolicy = exports.ManagedInstancesState_Statuses = exports.ManagedInstancesState = exports.LoadBalancerState = exports.Variable = exports.ApplicationLoadBalancerState = exports.InstanceGroup_LabelsEntry = exports.InstanceGroup = exports.managedInstance_StatusToJSON = exports.managedInstance_StatusFromJSON = exports.ManagedInstance_Status = exports.networkSettings_TypeToJSON = exports.networkSettings_TypeFromJSON = exports.NetworkSettings_Type = exports.attachedDiskSpec_ModeToJSON = exports.attachedDiskSpec_ModeFromJSON = exports.AttachedDiskSpec_Mode = exports.placementPolicy_HostAffinityRule_OperatorToJSON = exports.placementPolicy_HostAffinityRule_OperatorFromJSON = exports.PlacementPolicy_HostAffinityRule_Operator = exports.attachedFilesystemSpec_ModeToJSON = exports.attachedFilesystemSpec_ModeFromJSON = exports.AttachedFilesystemSpec_Mode = exports.deployPolicy_StrategyToJSON = exports.deployPolicy_StrategyFromJSON = exports.DeployPolicy_Strategy = exports.scalePolicy_CustomRule_MetricTypeToJSON = exports.scalePolicy_CustomRule_MetricTypeFromJSON = exports.ScalePolicy_CustomRule_MetricType = exports.scalePolicy_CustomRule_RuleTypeToJSON = exports.scalePolicy_CustomRule_RuleTypeFromJSON = exports.ScalePolicy_CustomRule_RuleType = exports.scalePolicy_AutoScale_AutoScaleTypeToJSON = exports.scalePolicy_AutoScale_AutoScaleTypeFromJSON = exports.ScalePolicy_AutoScale_AutoScaleType = exports.instanceGroup_StatusToJSON = exports.instanceGroup_StatusFromJSON = exports.InstanceGroup_Status = exports.ipVersionToJSON = exports.ipVersionFromJSON = exports.IpVersion = exports.protobufPackage = void 0;
exports.LogRecord = exports.DnsRecord = exports.OneToOneNat = exports.PrimaryAddress = exports.NetworkInterface = exports.ManagedInstance = exports.HealthCheckSpec_HttpOptions = exports.HealthCheckSpec_TcpOptions = exports.HealthCheckSpec = exports.HealthChecksSpec = exports.ApplicationTargetGroupSpec_LabelsEntry = exports.ApplicationTargetGroupSpec = exports.ApplicationLoadBalancerSpec = exports.TargetGroupSpec_LabelsEntry = exports.TargetGroupSpec = exports.LoadBalancerSpec = exports.NetworkSettings = exports.SchedulingPolicy = exports.DnsRecordSpec = exports.OneToOneNatSpec = exports.PrimaryAddressSpec = exports.NetworkInterfaceSpec = exports.AttachedDiskSpec_DiskSpec = exports.AttachedDiskSpec = exports.ResourcesSpec = exports.PlacementPolicy_HostAffinityRule = exports.PlacementPolicy = exports.AttachedFilesystemSpec = exports.InstanceTemplate_MetadataEntry = exports.InstanceTemplate_LabelsEntry = exports.InstanceTemplate = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.compute.v1.instancegroup";
var IpVersion;
(function (IpVersion) {
    IpVersion[IpVersion["IP_VERSION_UNSPECIFIED"] = 0] = "IP_VERSION_UNSPECIFIED";
    /** IPV4 - IPv4 address, for example 192.168.0.0. */
    IpVersion[IpVersion["IPV4"] = 1] = "IPV4";
    /** IPV6 - IPv6 address, not available yet. */
    IpVersion[IpVersion["IPV6"] = 2] = "IPV6";
    IpVersion[IpVersion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IpVersion = exports.IpVersion || (exports.IpVersion = {}));
function ipVersionFromJSON(object) {
    switch (object) {
        case 0:
        case "IP_VERSION_UNSPECIFIED":
            return IpVersion.IP_VERSION_UNSPECIFIED;
        case 1:
        case "IPV4":
            return IpVersion.IPV4;
        case 2:
        case "IPV6":
            return IpVersion.IPV6;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IpVersion.UNRECOGNIZED;
    }
}
exports.ipVersionFromJSON = ipVersionFromJSON;
function ipVersionToJSON(object) {
    switch (object) {
        case IpVersion.IP_VERSION_UNSPECIFIED:
            return "IP_VERSION_UNSPECIFIED";
        case IpVersion.IPV4:
            return "IPV4";
        case IpVersion.IPV6:
            return "IPV6";
        default:
            return "UNKNOWN";
    }
}
exports.ipVersionToJSON = ipVersionToJSON;
var InstanceGroup_Status;
(function (InstanceGroup_Status) {
    InstanceGroup_Status[InstanceGroup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** STARTING - Instance group is being started and will become active soon. */
    InstanceGroup_Status[InstanceGroup_Status["STARTING"] = 1] = "STARTING";
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
    InstanceGroup_Status[InstanceGroup_Status["ACTIVE"] = 2] = "ACTIVE";
    /**
     * STOPPING - Instance group is being stopped.
     * Group's instances stop receiving traffic from the load balancer (if any) and are then stopped.
     */
    InstanceGroup_Status[InstanceGroup_Status["STOPPING"] = 3] = "STOPPING";
    /**
     * STOPPED - Instance group is stopped.
     * In this state the group cannot be updated and does not react to any changes made to its instances.
     * To start the instance group, call [yandex.cloud.compute.v1.instancegroup.InstanceGroupService.Start].
     */
    InstanceGroup_Status[InstanceGroup_Status["STOPPED"] = 4] = "STOPPED";
    /** DELETING - Instance group is being deleted. */
    InstanceGroup_Status[InstanceGroup_Status["DELETING"] = 5] = "DELETING";
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
    InstanceGroup_Status[InstanceGroup_Status["PAUSED"] = 6] = "PAUSED";
    InstanceGroup_Status[InstanceGroup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstanceGroup_Status = exports.InstanceGroup_Status || (exports.InstanceGroup_Status = {}));
function instanceGroup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return InstanceGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case "STARTING":
            return InstanceGroup_Status.STARTING;
        case 2:
        case "ACTIVE":
            return InstanceGroup_Status.ACTIVE;
        case 3:
        case "STOPPING":
            return InstanceGroup_Status.STOPPING;
        case 4:
        case "STOPPED":
            return InstanceGroup_Status.STOPPED;
        case 5:
        case "DELETING":
            return InstanceGroup_Status.DELETING;
        case 6:
        case "PAUSED":
            return InstanceGroup_Status.PAUSED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return InstanceGroup_Status.UNRECOGNIZED;
    }
}
exports.instanceGroup_StatusFromJSON = instanceGroup_StatusFromJSON;
function instanceGroup_StatusToJSON(object) {
    switch (object) {
        case InstanceGroup_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case InstanceGroup_Status.STARTING:
            return "STARTING";
        case InstanceGroup_Status.ACTIVE:
            return "ACTIVE";
        case InstanceGroup_Status.STOPPING:
            return "STOPPING";
        case InstanceGroup_Status.STOPPED:
            return "STOPPED";
        case InstanceGroup_Status.DELETING:
            return "DELETING";
        case InstanceGroup_Status.PAUSED:
            return "PAUSED";
        default:
            return "UNKNOWN";
    }
}
exports.instanceGroup_StatusToJSON = instanceGroup_StatusToJSON;
var ScalePolicy_AutoScale_AutoScaleType;
(function (ScalePolicy_AutoScale_AutoScaleType) {
    ScalePolicy_AutoScale_AutoScaleType[ScalePolicy_AutoScale_AutoScaleType["AUTO_SCALE_TYPE_UNSPECIFIED"] = 0] = "AUTO_SCALE_TYPE_UNSPECIFIED";
    /** ZONAL - Scale each zone independently. This is the default. */
    ScalePolicy_AutoScale_AutoScaleType[ScalePolicy_AutoScale_AutoScaleType["ZONAL"] = 1] = "ZONAL";
    /** REGIONAL - Scale group as a whole. */
    ScalePolicy_AutoScale_AutoScaleType[ScalePolicy_AutoScale_AutoScaleType["REGIONAL"] = 2] = "REGIONAL";
    ScalePolicy_AutoScale_AutoScaleType[ScalePolicy_AutoScale_AutoScaleType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScalePolicy_AutoScale_AutoScaleType = exports.ScalePolicy_AutoScale_AutoScaleType || (exports.ScalePolicy_AutoScale_AutoScaleType = {}));
function scalePolicy_AutoScale_AutoScaleTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTO_SCALE_TYPE_UNSPECIFIED":
            return ScalePolicy_AutoScale_AutoScaleType.AUTO_SCALE_TYPE_UNSPECIFIED;
        case 1:
        case "ZONAL":
            return ScalePolicy_AutoScale_AutoScaleType.ZONAL;
        case 2:
        case "REGIONAL":
            return ScalePolicy_AutoScale_AutoScaleType.REGIONAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ScalePolicy_AutoScale_AutoScaleType.UNRECOGNIZED;
    }
}
exports.scalePolicy_AutoScale_AutoScaleTypeFromJSON = scalePolicy_AutoScale_AutoScaleTypeFromJSON;
function scalePolicy_AutoScale_AutoScaleTypeToJSON(object) {
    switch (object) {
        case ScalePolicy_AutoScale_AutoScaleType.AUTO_SCALE_TYPE_UNSPECIFIED:
            return "AUTO_SCALE_TYPE_UNSPECIFIED";
        case ScalePolicy_AutoScale_AutoScaleType.ZONAL:
            return "ZONAL";
        case ScalePolicy_AutoScale_AutoScaleType.REGIONAL:
            return "REGIONAL";
        default:
            return "UNKNOWN";
    }
}
exports.scalePolicy_AutoScale_AutoScaleTypeToJSON = scalePolicy_AutoScale_AutoScaleTypeToJSON;
var ScalePolicy_CustomRule_RuleType;
(function (ScalePolicy_CustomRule_RuleType) {
    ScalePolicy_CustomRule_RuleType[ScalePolicy_CustomRule_RuleType["RULE_TYPE_UNSPECIFIED"] = 0] = "RULE_TYPE_UNSPECIFIED";
    /**
     * UTILIZATION - This type means that the metric applies to one instance.
     * First, Instance Groups calculates the average metric value for each instance,
     * then averages the values for instances in one availability zone or in whole group depends on autoscaling type.
     * This type of metric must have the `instance_id` label.
     */
    ScalePolicy_CustomRule_RuleType[ScalePolicy_CustomRule_RuleType["UTILIZATION"] = 1] = "UTILIZATION";
    /**
     * WORKLOAD - This type means that the metric applies to instances in one availability zone or to whole group depends on autoscaling type.
     * This type of metric must have the `zone_id` label if ZONAL autoscaling type is chosen.
     */
    ScalePolicy_CustomRule_RuleType[ScalePolicy_CustomRule_RuleType["WORKLOAD"] = 2] = "WORKLOAD";
    ScalePolicy_CustomRule_RuleType[ScalePolicy_CustomRule_RuleType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScalePolicy_CustomRule_RuleType = exports.ScalePolicy_CustomRule_RuleType || (exports.ScalePolicy_CustomRule_RuleType = {}));
function scalePolicy_CustomRule_RuleTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RULE_TYPE_UNSPECIFIED":
            return ScalePolicy_CustomRule_RuleType.RULE_TYPE_UNSPECIFIED;
        case 1:
        case "UTILIZATION":
            return ScalePolicy_CustomRule_RuleType.UTILIZATION;
        case 2:
        case "WORKLOAD":
            return ScalePolicy_CustomRule_RuleType.WORKLOAD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ScalePolicy_CustomRule_RuleType.UNRECOGNIZED;
    }
}
exports.scalePolicy_CustomRule_RuleTypeFromJSON = scalePolicy_CustomRule_RuleTypeFromJSON;
function scalePolicy_CustomRule_RuleTypeToJSON(object) {
    switch (object) {
        case ScalePolicy_CustomRule_RuleType.RULE_TYPE_UNSPECIFIED:
            return "RULE_TYPE_UNSPECIFIED";
        case ScalePolicy_CustomRule_RuleType.UTILIZATION:
            return "UTILIZATION";
        case ScalePolicy_CustomRule_RuleType.WORKLOAD:
            return "WORKLOAD";
        default:
            return "UNKNOWN";
    }
}
exports.scalePolicy_CustomRule_RuleTypeToJSON = scalePolicy_CustomRule_RuleTypeToJSON;
var ScalePolicy_CustomRule_MetricType;
(function (ScalePolicy_CustomRule_MetricType) {
    ScalePolicy_CustomRule_MetricType[ScalePolicy_CustomRule_MetricType["METRIC_TYPE_UNSPECIFIED"] = 0] = "METRIC_TYPE_UNSPECIFIED";
    /**
     * GAUGE - This type is used for metrics that show the metric value at a certain point in time,
     * such as requests per second to the server on an instance.
     *
     * Instance Groups calculates the average metric value for the period
     * specified in the [AutoScale.measurement_duration] field.
     */
    ScalePolicy_CustomRule_MetricType[ScalePolicy_CustomRule_MetricType["GAUGE"] = 1] = "GAUGE";
    /**
     * COUNTER - This type is used for metrics that monotonically increase over time,
     * such as the total number of requests to the server on an instance.
     *
     * Instance Groups calculates the average value increase for the period
     * specified in the [AutoScale.measurement_duration] field.
     */
    ScalePolicy_CustomRule_MetricType[ScalePolicy_CustomRule_MetricType["COUNTER"] = 2] = "COUNTER";
    ScalePolicy_CustomRule_MetricType[ScalePolicy_CustomRule_MetricType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScalePolicy_CustomRule_MetricType = exports.ScalePolicy_CustomRule_MetricType || (exports.ScalePolicy_CustomRule_MetricType = {}));
function scalePolicy_CustomRule_MetricTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "METRIC_TYPE_UNSPECIFIED":
            return ScalePolicy_CustomRule_MetricType.METRIC_TYPE_UNSPECIFIED;
        case 1:
        case "GAUGE":
            return ScalePolicy_CustomRule_MetricType.GAUGE;
        case 2:
        case "COUNTER":
            return ScalePolicy_CustomRule_MetricType.COUNTER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ScalePolicy_CustomRule_MetricType.UNRECOGNIZED;
    }
}
exports.scalePolicy_CustomRule_MetricTypeFromJSON = scalePolicy_CustomRule_MetricTypeFromJSON;
function scalePolicy_CustomRule_MetricTypeToJSON(object) {
    switch (object) {
        case ScalePolicy_CustomRule_MetricType.METRIC_TYPE_UNSPECIFIED:
            return "METRIC_TYPE_UNSPECIFIED";
        case ScalePolicy_CustomRule_MetricType.GAUGE:
            return "GAUGE";
        case ScalePolicy_CustomRule_MetricType.COUNTER:
            return "COUNTER";
        default:
            return "UNKNOWN";
    }
}
exports.scalePolicy_CustomRule_MetricTypeToJSON = scalePolicy_CustomRule_MetricTypeToJSON;
var DeployPolicy_Strategy;
(function (DeployPolicy_Strategy) {
    DeployPolicy_Strategy[DeployPolicy_Strategy["STRATEGY_UNSPECIFIED"] = 0] = "STRATEGY_UNSPECIFIED";
    /** PROACTIVE - Instance Groups can forcefully stop a running instance. This is the default. */
    DeployPolicy_Strategy[DeployPolicy_Strategy["PROACTIVE"] = 1] = "PROACTIVE";
    /**
     * OPPORTUNISTIC - Instance Groups does not stop a running instance.
     * Instead, it will wait until the instance stops itself or becomes unhealthy.
     */
    DeployPolicy_Strategy[DeployPolicy_Strategy["OPPORTUNISTIC"] = 2] = "OPPORTUNISTIC";
    DeployPolicy_Strategy[DeployPolicy_Strategy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DeployPolicy_Strategy = exports.DeployPolicy_Strategy || (exports.DeployPolicy_Strategy = {}));
function deployPolicy_StrategyFromJSON(object) {
    switch (object) {
        case 0:
        case "STRATEGY_UNSPECIFIED":
            return DeployPolicy_Strategy.STRATEGY_UNSPECIFIED;
        case 1:
        case "PROACTIVE":
            return DeployPolicy_Strategy.PROACTIVE;
        case 2:
        case "OPPORTUNISTIC":
            return DeployPolicy_Strategy.OPPORTUNISTIC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DeployPolicy_Strategy.UNRECOGNIZED;
    }
}
exports.deployPolicy_StrategyFromJSON = deployPolicy_StrategyFromJSON;
function deployPolicy_StrategyToJSON(object) {
    switch (object) {
        case DeployPolicy_Strategy.STRATEGY_UNSPECIFIED:
            return "STRATEGY_UNSPECIFIED";
        case DeployPolicy_Strategy.PROACTIVE:
            return "PROACTIVE";
        case DeployPolicy_Strategy.OPPORTUNISTIC:
            return "OPPORTUNISTIC";
        default:
            return "UNKNOWN";
    }
}
exports.deployPolicy_StrategyToJSON = deployPolicy_StrategyToJSON;
var AttachedFilesystemSpec_Mode;
(function (AttachedFilesystemSpec_Mode) {
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. Default value. */
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["READ_WRITE"] = 2] = "READ_WRITE";
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AttachedFilesystemSpec_Mode = exports.AttachedFilesystemSpec_Mode || (exports.AttachedFilesystemSpec_Mode = {}));
function attachedFilesystemSpec_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case "MODE_UNSPECIFIED":
            return AttachedFilesystemSpec_Mode.MODE_UNSPECIFIED;
        case 1:
        case "READ_ONLY":
            return AttachedFilesystemSpec_Mode.READ_ONLY;
        case 2:
        case "READ_WRITE":
            return AttachedFilesystemSpec_Mode.READ_WRITE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AttachedFilesystemSpec_Mode.UNRECOGNIZED;
    }
}
exports.attachedFilesystemSpec_ModeFromJSON = attachedFilesystemSpec_ModeFromJSON;
function attachedFilesystemSpec_ModeToJSON(object) {
    switch (object) {
        case AttachedFilesystemSpec_Mode.MODE_UNSPECIFIED:
            return "MODE_UNSPECIFIED";
        case AttachedFilesystemSpec_Mode.READ_ONLY:
            return "READ_ONLY";
        case AttachedFilesystemSpec_Mode.READ_WRITE:
            return "READ_WRITE";
        default:
            return "UNKNOWN";
    }
}
exports.attachedFilesystemSpec_ModeToJSON = attachedFilesystemSpec_ModeToJSON;
var PlacementPolicy_HostAffinityRule_Operator;
(function (PlacementPolicy_HostAffinityRule_Operator) {
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["OPERATOR_UNSPECIFIED"] = 0] = "OPERATOR_UNSPECIFIED";
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["IN"] = 1] = "IN";
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["NOT_IN"] = 2] = "NOT_IN";
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PlacementPolicy_HostAffinityRule_Operator = exports.PlacementPolicy_HostAffinityRule_Operator || (exports.PlacementPolicy_HostAffinityRule_Operator = {}));
function placementPolicy_HostAffinityRule_OperatorFromJSON(object) {
    switch (object) {
        case 0:
        case "OPERATOR_UNSPECIFIED":
            return PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED;
        case 1:
        case "IN":
            return PlacementPolicy_HostAffinityRule_Operator.IN;
        case 2:
        case "NOT_IN":
            return PlacementPolicy_HostAffinityRule_Operator.NOT_IN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PlacementPolicy_HostAffinityRule_Operator.UNRECOGNIZED;
    }
}
exports.placementPolicy_HostAffinityRule_OperatorFromJSON = placementPolicy_HostAffinityRule_OperatorFromJSON;
function placementPolicy_HostAffinityRule_OperatorToJSON(object) {
    switch (object) {
        case PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED:
            return "OPERATOR_UNSPECIFIED";
        case PlacementPolicy_HostAffinityRule_Operator.IN:
            return "IN";
        case PlacementPolicy_HostAffinityRule_Operator.NOT_IN:
            return "NOT_IN";
        default:
            return "UNKNOWN";
    }
}
exports.placementPolicy_HostAffinityRule_OperatorToJSON = placementPolicy_HostAffinityRule_OperatorToJSON;
var AttachedDiskSpec_Mode;
(function (AttachedDiskSpec_Mode) {
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. */
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["READ_WRITE"] = 2] = "READ_WRITE";
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AttachedDiskSpec_Mode = exports.AttachedDiskSpec_Mode || (exports.AttachedDiskSpec_Mode = {}));
function attachedDiskSpec_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case "MODE_UNSPECIFIED":
            return AttachedDiskSpec_Mode.MODE_UNSPECIFIED;
        case 1:
        case "READ_ONLY":
            return AttachedDiskSpec_Mode.READ_ONLY;
        case 2:
        case "READ_WRITE":
            return AttachedDiskSpec_Mode.READ_WRITE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AttachedDiskSpec_Mode.UNRECOGNIZED;
    }
}
exports.attachedDiskSpec_ModeFromJSON = attachedDiskSpec_ModeFromJSON;
function attachedDiskSpec_ModeToJSON(object) {
    switch (object) {
        case AttachedDiskSpec_Mode.MODE_UNSPECIFIED:
            return "MODE_UNSPECIFIED";
        case AttachedDiskSpec_Mode.READ_ONLY:
            return "READ_ONLY";
        case AttachedDiskSpec_Mode.READ_WRITE:
            return "READ_WRITE";
        default:
            return "UNKNOWN";
    }
}
exports.attachedDiskSpec_ModeToJSON = attachedDiskSpec_ModeToJSON;
var NetworkSettings_Type;
(function (NetworkSettings_Type) {
    NetworkSettings_Type[NetworkSettings_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    NetworkSettings_Type[NetworkSettings_Type["STANDARD"] = 1] = "STANDARD";
    NetworkSettings_Type[NetworkSettings_Type["SOFTWARE_ACCELERATED"] = 2] = "SOFTWARE_ACCELERATED";
    NetworkSettings_Type[NetworkSettings_Type["HARDWARE_ACCELERATED"] = 3] = "HARDWARE_ACCELERATED";
    NetworkSettings_Type[NetworkSettings_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NetworkSettings_Type = exports.NetworkSettings_Type || (exports.NetworkSettings_Type = {}));
function networkSettings_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return NetworkSettings_Type.TYPE_UNSPECIFIED;
        case 1:
        case "STANDARD":
            return NetworkSettings_Type.STANDARD;
        case 2:
        case "SOFTWARE_ACCELERATED":
            return NetworkSettings_Type.SOFTWARE_ACCELERATED;
        case 3:
        case "HARDWARE_ACCELERATED":
            return NetworkSettings_Type.HARDWARE_ACCELERATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NetworkSettings_Type.UNRECOGNIZED;
    }
}
exports.networkSettings_TypeFromJSON = networkSettings_TypeFromJSON;
function networkSettings_TypeToJSON(object) {
    switch (object) {
        case NetworkSettings_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case NetworkSettings_Type.STANDARD:
            return "STANDARD";
        case NetworkSettings_Type.SOFTWARE_ACCELERATED:
            return "SOFTWARE_ACCELERATED";
        case NetworkSettings_Type.HARDWARE_ACCELERATED:
            return "HARDWARE_ACCELERATED";
        default:
            return "UNKNOWN";
    }
}
exports.networkSettings_TypeToJSON = networkSettings_TypeToJSON;
var ManagedInstance_Status;
(function (ManagedInstance_Status) {
    ManagedInstance_Status[ManagedInstance_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING_INSTANCE - Instance is being created. */
    ManagedInstance_Status[ManagedInstance_Status["CREATING_INSTANCE"] = 11] = "CREATING_INSTANCE";
    /** UPDATING_INSTANCE - Instance is being updated. */
    ManagedInstance_Status[ManagedInstance_Status["UPDATING_INSTANCE"] = 12] = "UPDATING_INSTANCE";
    /** DELETING_INSTANCE - Instance is being deleted. */
    ManagedInstance_Status[ManagedInstance_Status["DELETING_INSTANCE"] = 13] = "DELETING_INSTANCE";
    /** STARTING_INSTANCE - Instance is being started. */
    ManagedInstance_Status[ManagedInstance_Status["STARTING_INSTANCE"] = 14] = "STARTING_INSTANCE";
    /** STOPPING_INSTANCE - Instance is being stopped. */
    ManagedInstance_Status[ManagedInstance_Status["STOPPING_INSTANCE"] = 15] = "STOPPING_INSTANCE";
    /** AWAITING_STARTUP_DURATION - Instance has been created successfully, but startup duration has not elapsed yet. */
    ManagedInstance_Status[ManagedInstance_Status["AWAITING_STARTUP_DURATION"] = 16] = "AWAITING_STARTUP_DURATION";
    /** CHECKING_HEALTH - Instance has been created successfully and startup duration has elapsed, but health checks have not passed yet and the managed instance is not ready to receive traffic. */
    ManagedInstance_Status[ManagedInstance_Status["CHECKING_HEALTH"] = 17] = "CHECKING_HEALTH";
    /** OPENING_TRAFFIC - Instance Groups is initiating health checks and routing traffic to the instances. */
    ManagedInstance_Status[ManagedInstance_Status["OPENING_TRAFFIC"] = 18] = "OPENING_TRAFFIC";
    /** AWAITING_WARMUP_DURATION - Instance is now receiving traffic, but warmup duration has not elapsed yet. */
    ManagedInstance_Status[ManagedInstance_Status["AWAITING_WARMUP_DURATION"] = 19] = "AWAITING_WARMUP_DURATION";
    /** CLOSING_TRAFFIC - Instance Groups has initiated the process of stopping routing traffic to the instances. */
    ManagedInstance_Status[ManagedInstance_Status["CLOSING_TRAFFIC"] = 20] = "CLOSING_TRAFFIC";
    /** RUNNING_ACTUAL - Instance is running normally and its attributes match the current InstanceTemplate. */
    ManagedInstance_Status[ManagedInstance_Status["RUNNING_ACTUAL"] = 21] = "RUNNING_ACTUAL";
    /**
     * RUNNING_OUTDATED - Instance is running normally, but its attributes do not match the current InstanceTemplate.
     * It will be updated, recreated or deleted shortly.
     */
    ManagedInstance_Status[ManagedInstance_Status["RUNNING_OUTDATED"] = 22] = "RUNNING_OUTDATED";
    /** STOPPED - Instance was stopped. */
    ManagedInstance_Status[ManagedInstance_Status["STOPPED"] = 23] = "STOPPED";
    /** DELETED - Instance was deleted. */
    ManagedInstance_Status[ManagedInstance_Status["DELETED"] = 24] = "DELETED";
    /** PREPARING_RESOURCES - Instance Groups is preparing dependent resources. */
    ManagedInstance_Status[ManagedInstance_Status["PREPARING_RESOURCES"] = 25] = "PREPARING_RESOURCES";
    ManagedInstance_Status[ManagedInstance_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ManagedInstance_Status = exports.ManagedInstance_Status || (exports.ManagedInstance_Status = {}));
function managedInstance_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return ManagedInstance_Status.STATUS_UNSPECIFIED;
        case 11:
        case "CREATING_INSTANCE":
            return ManagedInstance_Status.CREATING_INSTANCE;
        case 12:
        case "UPDATING_INSTANCE":
            return ManagedInstance_Status.UPDATING_INSTANCE;
        case 13:
        case "DELETING_INSTANCE":
            return ManagedInstance_Status.DELETING_INSTANCE;
        case 14:
        case "STARTING_INSTANCE":
            return ManagedInstance_Status.STARTING_INSTANCE;
        case 15:
        case "STOPPING_INSTANCE":
            return ManagedInstance_Status.STOPPING_INSTANCE;
        case 16:
        case "AWAITING_STARTUP_DURATION":
            return ManagedInstance_Status.AWAITING_STARTUP_DURATION;
        case 17:
        case "CHECKING_HEALTH":
            return ManagedInstance_Status.CHECKING_HEALTH;
        case 18:
        case "OPENING_TRAFFIC":
            return ManagedInstance_Status.OPENING_TRAFFIC;
        case 19:
        case "AWAITING_WARMUP_DURATION":
            return ManagedInstance_Status.AWAITING_WARMUP_DURATION;
        case 20:
        case "CLOSING_TRAFFIC":
            return ManagedInstance_Status.CLOSING_TRAFFIC;
        case 21:
        case "RUNNING_ACTUAL":
            return ManagedInstance_Status.RUNNING_ACTUAL;
        case 22:
        case "RUNNING_OUTDATED":
            return ManagedInstance_Status.RUNNING_OUTDATED;
        case 23:
        case "STOPPED":
            return ManagedInstance_Status.STOPPED;
        case 24:
        case "DELETED":
            return ManagedInstance_Status.DELETED;
        case 25:
        case "PREPARING_RESOURCES":
            return ManagedInstance_Status.PREPARING_RESOURCES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ManagedInstance_Status.UNRECOGNIZED;
    }
}
exports.managedInstance_StatusFromJSON = managedInstance_StatusFromJSON;
function managedInstance_StatusToJSON(object) {
    switch (object) {
        case ManagedInstance_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case ManagedInstance_Status.CREATING_INSTANCE:
            return "CREATING_INSTANCE";
        case ManagedInstance_Status.UPDATING_INSTANCE:
            return "UPDATING_INSTANCE";
        case ManagedInstance_Status.DELETING_INSTANCE:
            return "DELETING_INSTANCE";
        case ManagedInstance_Status.STARTING_INSTANCE:
            return "STARTING_INSTANCE";
        case ManagedInstance_Status.STOPPING_INSTANCE:
            return "STOPPING_INSTANCE";
        case ManagedInstance_Status.AWAITING_STARTUP_DURATION:
            return "AWAITING_STARTUP_DURATION";
        case ManagedInstance_Status.CHECKING_HEALTH:
            return "CHECKING_HEALTH";
        case ManagedInstance_Status.OPENING_TRAFFIC:
            return "OPENING_TRAFFIC";
        case ManagedInstance_Status.AWAITING_WARMUP_DURATION:
            return "AWAITING_WARMUP_DURATION";
        case ManagedInstance_Status.CLOSING_TRAFFIC:
            return "CLOSING_TRAFFIC";
        case ManagedInstance_Status.RUNNING_ACTUAL:
            return "RUNNING_ACTUAL";
        case ManagedInstance_Status.RUNNING_OUTDATED:
            return "RUNNING_OUTDATED";
        case ManagedInstance_Status.STOPPED:
            return "STOPPED";
        case ManagedInstance_Status.DELETED:
            return "DELETED";
        case ManagedInstance_Status.PREPARING_RESOURCES:
            return "PREPARING_RESOURCES";
        default:
            return "UNKNOWN";
    }
}
exports.managedInstance_StatusToJSON = managedInstance_StatusToJSON;
const baseInstanceGroup = {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup",
    id: "",
    folderId: "",
    name: "",
    description: "",
    serviceAccountId: "",
    status: 0,
    deletionProtection: false,
};
exports.InstanceGroup = {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.InstanceGroup_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.instanceTemplate !== undefined) {
            exports.InstanceTemplate.encode(message.instanceTemplate, writer.uint32(58).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            exports.ScalePolicy.encode(message.scalePolicy, writer.uint32(66).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            exports.DeployPolicy.encode(message.deployPolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            exports.AllocationPolicy.encode(message.allocationPolicy, writer.uint32(82).fork()).ldelim();
        }
        if (message.loadBalancerState !== undefined) {
            exports.LoadBalancerState.encode(message.loadBalancerState, writer.uint32(90).fork()).ldelim();
        }
        if (message.managedInstancesState !== undefined) {
            exports.ManagedInstancesState.encode(message.managedInstancesState, writer.uint32(98).fork()).ldelim();
        }
        if (message.loadBalancerSpec !== undefined) {
            exports.LoadBalancerSpec.encode(message.loadBalancerSpec, writer.uint32(114).fork()).ldelim();
        }
        if (message.healthChecksSpec !== undefined) {
            exports.HealthChecksSpec.encode(message.healthChecksSpec, writer.uint32(122).fork()).ldelim();
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(130).string(message.serviceAccountId);
        }
        if (message.status !== 0) {
            writer.uint32(136).int32(message.status);
        }
        for (const v of message.variables) {
            exports.Variable.encode(v, writer.uint32(146).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(152).bool(message.deletionProtection);
        }
        if (message.applicationLoadBalancerSpec !== undefined) {
            exports.ApplicationLoadBalancerSpec.encode(message.applicationLoadBalancerSpec, writer.uint32(162).fork()).ldelim();
        }
        if (message.applicationLoadBalancerState !== undefined) {
            exports.ApplicationLoadBalancerState.encode(message.applicationLoadBalancerState, writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInstanceGroup);
        message.labels = {};
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.InstanceGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.instanceTemplate = exports.InstanceTemplate.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.scalePolicy = exports.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deployPolicy = exports.DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.allocationPolicy = exports.AllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.loadBalancerState = exports.LoadBalancerState.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.managedInstancesState = exports.ManagedInstancesState.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.loadBalancerSpec = exports.LoadBalancerSpec.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.healthChecksSpec = exports.HealthChecksSpec.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.serviceAccountId = reader.string();
                    break;
                case 17:
                    message.status = reader.int32();
                    break;
                case 18:
                    message.variables.push(exports.Variable.decode(reader, reader.uint32()));
                    break;
                case 19:
                    message.deletionProtection = reader.bool();
                    break;
                case 20:
                    message.applicationLoadBalancerSpec =
                        exports.ApplicationLoadBalancerSpec.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.applicationLoadBalancerState =
                        exports.ApplicationLoadBalancerState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseInstanceGroup);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.instanceTemplate =
            object.instanceTemplate !== undefined && object.instanceTemplate !== null
                ? exports.InstanceTemplate.fromJSON(object.instanceTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? exports.ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? exports.DeployPolicy.fromJSON(object.deployPolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? exports.AllocationPolicy.fromJSON(object.allocationPolicy)
                : undefined;
        message.loadBalancerState =
            object.loadBalancerState !== undefined &&
                object.loadBalancerState !== null
                ? exports.LoadBalancerState.fromJSON(object.loadBalancerState)
                : undefined;
        message.managedInstancesState =
            object.managedInstancesState !== undefined &&
                object.managedInstancesState !== null
                ? exports.ManagedInstancesState.fromJSON(object.managedInstancesState)
                : undefined;
        message.loadBalancerSpec =
            object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null
                ? exports.LoadBalancerSpec.fromJSON(object.loadBalancerSpec)
                : undefined;
        message.healthChecksSpec =
            object.healthChecksSpec !== undefined && object.healthChecksSpec !== null
                ? exports.HealthChecksSpec.fromJSON(object.healthChecksSpec)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? instanceGroup_StatusFromJSON(object.status)
                : 0;
        message.variables = ((_b = object.variables) !== null && _b !== void 0 ? _b : []).map((e) => exports.Variable.fromJSON(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.applicationLoadBalancerSpec =
            object.applicationLoadBalancerSpec !== undefined &&
                object.applicationLoadBalancerSpec !== null
                ? exports.ApplicationLoadBalancerSpec.fromJSON(object.applicationLoadBalancerSpec)
                : undefined;
        message.applicationLoadBalancerState =
            object.applicationLoadBalancerState !== undefined &&
                object.applicationLoadBalancerState !== null
                ? exports.ApplicationLoadBalancerState.fromJSON(object.applicationLoadBalancerState)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.instanceTemplate !== undefined &&
            (obj.instanceTemplate = message.instanceTemplate
                ? exports.InstanceTemplate.toJSON(message.instanceTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? exports.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? exports.DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? exports.AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.loadBalancerState !== undefined &&
            (obj.loadBalancerState = message.loadBalancerState
                ? exports.LoadBalancerState.toJSON(message.loadBalancerState)
                : undefined);
        message.managedInstancesState !== undefined &&
            (obj.managedInstancesState = message.managedInstancesState
                ? exports.ManagedInstancesState.toJSON(message.managedInstancesState)
                : undefined);
        message.loadBalancerSpec !== undefined &&
            (obj.loadBalancerSpec = message.loadBalancerSpec
                ? exports.LoadBalancerSpec.toJSON(message.loadBalancerSpec)
                : undefined);
        message.healthChecksSpec !== undefined &&
            (obj.healthChecksSpec = message.healthChecksSpec
                ? exports.HealthChecksSpec.toJSON(message.healthChecksSpec)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.status !== undefined &&
            (obj.status = instanceGroup_StatusToJSON(message.status));
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? exports.Variable.toJSON(e) : undefined);
        }
        else {
            obj.variables = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.applicationLoadBalancerSpec !== undefined &&
            (obj.applicationLoadBalancerSpec = message.applicationLoadBalancerSpec
                ? exports.ApplicationLoadBalancerSpec.toJSON(message.applicationLoadBalancerSpec)
                : undefined);
        message.applicationLoadBalancerState !== undefined &&
            (obj.applicationLoadBalancerState = message.applicationLoadBalancerState
                ? exports.ApplicationLoadBalancerState.toJSON(message.applicationLoadBalancerState)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseInstanceGroup);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.instanceTemplate =
            object.instanceTemplate !== undefined && object.instanceTemplate !== null
                ? exports.InstanceTemplate.fromPartial(object.instanceTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? exports.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? exports.DeployPolicy.fromPartial(object.deployPolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? exports.AllocationPolicy.fromPartial(object.allocationPolicy)
                : undefined;
        message.loadBalancerState =
            object.loadBalancerState !== undefined &&
                object.loadBalancerState !== null
                ? exports.LoadBalancerState.fromPartial(object.loadBalancerState)
                : undefined;
        message.managedInstancesState =
            object.managedInstancesState !== undefined &&
                object.managedInstancesState !== null
                ? exports.ManagedInstancesState.fromPartial(object.managedInstancesState)
                : undefined;
        message.loadBalancerSpec =
            object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null
                ? exports.LoadBalancerSpec.fromPartial(object.loadBalancerSpec)
                : undefined;
        message.healthChecksSpec =
            object.healthChecksSpec !== undefined && object.healthChecksSpec !== null
                ? exports.HealthChecksSpec.fromPartial(object.healthChecksSpec)
                : undefined;
        message.serviceAccountId = (_g = object.serviceAccountId) !== null && _g !== void 0 ? _g : "";
        message.status = (_h = object.status) !== null && _h !== void 0 ? _h : 0;
        message.variables =
            ((_j = object.variables) === null || _j === void 0 ? void 0 : _j.map((e) => exports.Variable.fromPartial(e))) || [];
        message.deletionProtection = (_k = object.deletionProtection) !== null && _k !== void 0 ? _k : false;
        message.applicationLoadBalancerSpec =
            object.applicationLoadBalancerSpec !== undefined &&
                object.applicationLoadBalancerSpec !== null
                ? exports.ApplicationLoadBalancerSpec.fromPartial(object.applicationLoadBalancerSpec)
                : undefined;
        message.applicationLoadBalancerState =
            object.applicationLoadBalancerState !== undefined &&
                object.applicationLoadBalancerState !== null
                ? exports.ApplicationLoadBalancerState.fromPartial(object.applicationLoadBalancerState)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InstanceGroup.$type, exports.InstanceGroup);
const baseInstanceGroup_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry",
    key: "",
    value: "",
};
exports.InstanceGroup_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceGroup.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInstanceGroup_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInstanceGroup_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseInstanceGroup_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InstanceGroup_LabelsEntry.$type, exports.InstanceGroup_LabelsEntry);
const baseApplicationLoadBalancerState = {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState",
    targetGroupId: "",
    statusMessage: "",
};
exports.ApplicationLoadBalancerState = {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
        }
        if (message.statusMessage !== "") {
            writer.uint32(18).string(message.statusMessage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseApplicationLoadBalancerState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                case 2:
                    message.statusMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseApplicationLoadBalancerState);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        message.statusMessage =
            object.statusMessage !== undefined && object.statusMessage !== null
                ? String(object.statusMessage)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        message.statusMessage !== undefined &&
            (obj.statusMessage = message.statusMessage);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseApplicationLoadBalancerState);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        message.statusMessage = (_b = object.statusMessage) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApplicationLoadBalancerState.$type, exports.ApplicationLoadBalancerState);
const baseVariable = {
    $type: "yandex.cloud.compute.v1.instancegroup.Variable",
    key: "",
    value: "",
};
exports.Variable = {
    $type: "yandex.cloud.compute.v1.instancegroup.Variable",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVariable);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVariable);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseVariable);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Variable.$type, exports.Variable);
const baseLoadBalancerState = {
    $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerState",
    targetGroupId: "",
    statusMessage: "",
};
exports.LoadBalancerState = {
    $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerState",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
        }
        if (message.statusMessage !== "") {
            writer.uint32(18).string(message.statusMessage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLoadBalancerState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                case 2:
                    message.statusMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLoadBalancerState);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        message.statusMessage =
            object.statusMessage !== undefined && object.statusMessage !== null
                ? String(object.statusMessage)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        message.statusMessage !== undefined &&
            (obj.statusMessage = message.statusMessage);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLoadBalancerState);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        message.statusMessage = (_b = object.statusMessage) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LoadBalancerState.$type, exports.LoadBalancerState);
const baseManagedInstancesState = {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState",
    targetSize: 0,
    runningActualCount: 0,
    runningOutdatedCount: 0,
    processingCount: 0,
};
exports.ManagedInstancesState = {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetSize !== 0) {
            writer.uint32(8).int64(message.targetSize);
        }
        if (message.runningActualCount !== 0) {
            writer.uint32(32).int64(message.runningActualCount);
        }
        if (message.runningOutdatedCount !== 0) {
            writer.uint32(40).int64(message.runningOutdatedCount);
        }
        if (message.processingCount !== 0) {
            writer.uint32(48).int64(message.processingCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseManagedInstancesState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.runningActualCount = longToNumber(reader.int64());
                    break;
                case 5:
                    message.runningOutdatedCount = longToNumber(reader.int64());
                    break;
                case 6:
                    message.processingCount = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseManagedInstancesState);
        message.targetSize =
            object.targetSize !== undefined && object.targetSize !== null
                ? Number(object.targetSize)
                : 0;
        message.runningActualCount =
            object.runningActualCount !== undefined &&
                object.runningActualCount !== null
                ? Number(object.runningActualCount)
                : 0;
        message.runningOutdatedCount =
            object.runningOutdatedCount !== undefined &&
                object.runningOutdatedCount !== null
                ? Number(object.runningOutdatedCount)
                : 0;
        message.processingCount =
            object.processingCount !== undefined && object.processingCount !== null
                ? Number(object.processingCount)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetSize !== undefined &&
            (obj.targetSize = Math.round(message.targetSize));
        message.runningActualCount !== undefined &&
            (obj.runningActualCount = Math.round(message.runningActualCount));
        message.runningOutdatedCount !== undefined &&
            (obj.runningOutdatedCount = Math.round(message.runningOutdatedCount));
        message.processingCount !== undefined &&
            (obj.processingCount = Math.round(message.processingCount));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseManagedInstancesState);
        message.targetSize = (_a = object.targetSize) !== null && _a !== void 0 ? _a : 0;
        message.runningActualCount = (_b = object.runningActualCount) !== null && _b !== void 0 ? _b : 0;
        message.runningOutdatedCount = (_c = object.runningOutdatedCount) !== null && _c !== void 0 ? _c : 0;
        message.processingCount = (_d = object.processingCount) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ManagedInstancesState.$type, exports.ManagedInstancesState);
const baseManagedInstancesState_Statuses = {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses",
    creating: 0,
    starting: 0,
    opening: 0,
    warming: 0,
    running: 0,
    closing: 0,
    stopping: 0,
    updating: 0,
    deleting: 0,
    failed: 0,
};
exports.ManagedInstancesState_Statuses = {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creating !== 0) {
            writer.uint32(8).int64(message.creating);
        }
        if (message.starting !== 0) {
            writer.uint32(16).int64(message.starting);
        }
        if (message.opening !== 0) {
            writer.uint32(24).int64(message.opening);
        }
        if (message.warming !== 0) {
            writer.uint32(32).int64(message.warming);
        }
        if (message.running !== 0) {
            writer.uint32(40).int64(message.running);
        }
        if (message.closing !== 0) {
            writer.uint32(48).int64(message.closing);
        }
        if (message.stopping !== 0) {
            writer.uint32(56).int64(message.stopping);
        }
        if (message.updating !== 0) {
            writer.uint32(64).int64(message.updating);
        }
        if (message.deleting !== 0) {
            writer.uint32(72).int64(message.deleting);
        }
        if (message.failed !== 0) {
            writer.uint32(80).int64(message.failed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseManagedInstancesState_Statuses);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creating = longToNumber(reader.int64());
                    break;
                case 2:
                    message.starting = longToNumber(reader.int64());
                    break;
                case 3:
                    message.opening = longToNumber(reader.int64());
                    break;
                case 4:
                    message.warming = longToNumber(reader.int64());
                    break;
                case 5:
                    message.running = longToNumber(reader.int64());
                    break;
                case 6:
                    message.closing = longToNumber(reader.int64());
                    break;
                case 7:
                    message.stopping = longToNumber(reader.int64());
                    break;
                case 8:
                    message.updating = longToNumber(reader.int64());
                    break;
                case 9:
                    message.deleting = longToNumber(reader.int64());
                    break;
                case 10:
                    message.failed = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseManagedInstancesState_Statuses);
        message.creating =
            object.creating !== undefined && object.creating !== null
                ? Number(object.creating)
                : 0;
        message.starting =
            object.starting !== undefined && object.starting !== null
                ? Number(object.starting)
                : 0;
        message.opening =
            object.opening !== undefined && object.opening !== null
                ? Number(object.opening)
                : 0;
        message.warming =
            object.warming !== undefined && object.warming !== null
                ? Number(object.warming)
                : 0;
        message.running =
            object.running !== undefined && object.running !== null
                ? Number(object.running)
                : 0;
        message.closing =
            object.closing !== undefined && object.closing !== null
                ? Number(object.closing)
                : 0;
        message.stopping =
            object.stopping !== undefined && object.stopping !== null
                ? Number(object.stopping)
                : 0;
        message.updating =
            object.updating !== undefined && object.updating !== null
                ? Number(object.updating)
                : 0;
        message.deleting =
            object.deleting !== undefined && object.deleting !== null
                ? Number(object.deleting)
                : 0;
        message.failed =
            object.failed !== undefined && object.failed !== null
                ? Number(object.failed)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creating !== undefined &&
            (obj.creating = Math.round(message.creating));
        message.starting !== undefined &&
            (obj.starting = Math.round(message.starting));
        message.opening !== undefined &&
            (obj.opening = Math.round(message.opening));
        message.warming !== undefined &&
            (obj.warming = Math.round(message.warming));
        message.running !== undefined &&
            (obj.running = Math.round(message.running));
        message.closing !== undefined &&
            (obj.closing = Math.round(message.closing));
        message.stopping !== undefined &&
            (obj.stopping = Math.round(message.stopping));
        message.updating !== undefined &&
            (obj.updating = Math.round(message.updating));
        message.deleting !== undefined &&
            (obj.deleting = Math.round(message.deleting));
        message.failed !== undefined && (obj.failed = Math.round(message.failed));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseManagedInstancesState_Statuses);
        message.creating = (_a = object.creating) !== null && _a !== void 0 ? _a : 0;
        message.starting = (_b = object.starting) !== null && _b !== void 0 ? _b : 0;
        message.opening = (_c = object.opening) !== null && _c !== void 0 ? _c : 0;
        message.warming = (_d = object.warming) !== null && _d !== void 0 ? _d : 0;
        message.running = (_e = object.running) !== null && _e !== void 0 ? _e : 0;
        message.closing = (_f = object.closing) !== null && _f !== void 0 ? _f : 0;
        message.stopping = (_g = object.stopping) !== null && _g !== void 0 ? _g : 0;
        message.updating = (_h = object.updating) !== null && _h !== void 0 ? _h : 0;
        message.deleting = (_j = object.deleting) !== null && _j !== void 0 ? _j : 0;
        message.failed = (_k = object.failed) !== null && _k !== void 0 ? _k : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ManagedInstancesState_Statuses.$type, exports.ManagedInstancesState_Statuses);
const baseScalePolicy = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy",
};
exports.ScalePolicy = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fixedScale !== undefined) {
            exports.ScalePolicy_FixedScale.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
        }
        if (message.autoScale !== undefined) {
            exports.ScalePolicy_AutoScale.encode(message.autoScale, writer.uint32(18).fork()).ldelim();
        }
        if (message.testAutoScale !== undefined) {
            exports.ScalePolicy_AutoScale.encode(message.testAutoScale, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalePolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixedScale = exports.ScalePolicy_FixedScale.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.autoScale = exports.ScalePolicy_AutoScale.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.testAutoScale = exports.ScalePolicy_AutoScale.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScalePolicy);
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? exports.ScalePolicy_FixedScale.fromJSON(object.fixedScale)
                : undefined;
        message.autoScale =
            object.autoScale !== undefined && object.autoScale !== null
                ? exports.ScalePolicy_AutoScale.fromJSON(object.autoScale)
                : undefined;
        message.testAutoScale =
            object.testAutoScale !== undefined && object.testAutoScale !== null
                ? exports.ScalePolicy_AutoScale.fromJSON(object.testAutoScale)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? exports.ScalePolicy_FixedScale.toJSON(message.fixedScale)
                : undefined);
        message.autoScale !== undefined &&
            (obj.autoScale = message.autoScale
                ? exports.ScalePolicy_AutoScale.toJSON(message.autoScale)
                : undefined);
        message.testAutoScale !== undefined &&
            (obj.testAutoScale = message.testAutoScale
                ? exports.ScalePolicy_AutoScale.toJSON(message.testAutoScale)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseScalePolicy);
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? exports.ScalePolicy_FixedScale.fromPartial(object.fixedScale)
                : undefined;
        message.autoScale =
            object.autoScale !== undefined && object.autoScale !== null
                ? exports.ScalePolicy_AutoScale.fromPartial(object.autoScale)
                : undefined;
        message.testAutoScale =
            object.testAutoScale !== undefined && object.testAutoScale !== null
                ? exports.ScalePolicy_AutoScale.fromPartial(object.testAutoScale)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy.$type, exports.ScalePolicy);
const baseScalePolicy_AutoScale = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale",
    minZoneSize: 0,
    maxSize: 0,
    initialSize: 0,
    autoScaleType: 0,
};
exports.ScalePolicy_AutoScale = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.minZoneSize !== 0) {
            writer.uint32(8).int64(message.minZoneSize);
        }
        if (message.maxSize !== 0) {
            writer.uint32(16).int64(message.maxSize);
        }
        if (message.measurementDuration !== undefined) {
            duration_1.Duration.encode(message.measurementDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.warmupDuration !== undefined) {
            duration_1.Duration.encode(message.warmupDuration, writer.uint32(34).fork()).ldelim();
        }
        if (message.stabilizationDuration !== undefined) {
            duration_1.Duration.encode(message.stabilizationDuration, writer.uint32(42).fork()).ldelim();
        }
        if (message.initialSize !== 0) {
            writer.uint32(48).int64(message.initialSize);
        }
        if (message.cpuUtilizationRule !== undefined) {
            exports.ScalePolicy_CpuUtilizationRule.encode(message.cpuUtilizationRule, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.customRules) {
            exports.ScalePolicy_CustomRule.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.autoScaleType !== 0) {
            writer.uint32(72).int32(message.autoScaleType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalePolicy_AutoScale);
        message.customRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minZoneSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.maxSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.measurementDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.warmupDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stabilizationDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.initialSize = longToNumber(reader.int64());
                    break;
                case 7:
                    message.cpuUtilizationRule = exports.ScalePolicy_CpuUtilizationRule.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.customRules.push(exports.ScalePolicy_CustomRule.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.autoScaleType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseScalePolicy_AutoScale);
        message.minZoneSize =
            object.minZoneSize !== undefined && object.minZoneSize !== null
                ? Number(object.minZoneSize)
                : 0;
        message.maxSize =
            object.maxSize !== undefined && object.maxSize !== null
                ? Number(object.maxSize)
                : 0;
        message.measurementDuration =
            object.measurementDuration !== undefined &&
                object.measurementDuration !== null
                ? duration_1.Duration.fromJSON(object.measurementDuration)
                : undefined;
        message.warmupDuration =
            object.warmupDuration !== undefined && object.warmupDuration !== null
                ? duration_1.Duration.fromJSON(object.warmupDuration)
                : undefined;
        message.stabilizationDuration =
            object.stabilizationDuration !== undefined &&
                object.stabilizationDuration !== null
                ? duration_1.Duration.fromJSON(object.stabilizationDuration)
                : undefined;
        message.initialSize =
            object.initialSize !== undefined && object.initialSize !== null
                ? Number(object.initialSize)
                : 0;
        message.cpuUtilizationRule =
            object.cpuUtilizationRule !== undefined &&
                object.cpuUtilizationRule !== null
                ? exports.ScalePolicy_CpuUtilizationRule.fromJSON(object.cpuUtilizationRule)
                : undefined;
        message.customRules = ((_a = object.customRules) !== null && _a !== void 0 ? _a : []).map((e) => exports.ScalePolicy_CustomRule.fromJSON(e));
        message.autoScaleType =
            object.autoScaleType !== undefined && object.autoScaleType !== null
                ? scalePolicy_AutoScale_AutoScaleTypeFromJSON(object.autoScaleType)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.minZoneSize !== undefined &&
            (obj.minZoneSize = Math.round(message.minZoneSize));
        message.maxSize !== undefined &&
            (obj.maxSize = Math.round(message.maxSize));
        message.measurementDuration !== undefined &&
            (obj.measurementDuration = message.measurementDuration
                ? duration_1.Duration.toJSON(message.measurementDuration)
                : undefined);
        message.warmupDuration !== undefined &&
            (obj.warmupDuration = message.warmupDuration
                ? duration_1.Duration.toJSON(message.warmupDuration)
                : undefined);
        message.stabilizationDuration !== undefined &&
            (obj.stabilizationDuration = message.stabilizationDuration
                ? duration_1.Duration.toJSON(message.stabilizationDuration)
                : undefined);
        message.initialSize !== undefined &&
            (obj.initialSize = Math.round(message.initialSize));
        message.cpuUtilizationRule !== undefined &&
            (obj.cpuUtilizationRule = message.cpuUtilizationRule
                ? exports.ScalePolicy_CpuUtilizationRule.toJSON(message.cpuUtilizationRule)
                : undefined);
        if (message.customRules) {
            obj.customRules = message.customRules.map((e) => e ? exports.ScalePolicy_CustomRule.toJSON(e) : undefined);
        }
        else {
            obj.customRules = [];
        }
        message.autoScaleType !== undefined &&
            (obj.autoScaleType = scalePolicy_AutoScale_AutoScaleTypeToJSON(message.autoScaleType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseScalePolicy_AutoScale);
        message.minZoneSize = (_a = object.minZoneSize) !== null && _a !== void 0 ? _a : 0;
        message.maxSize = (_b = object.maxSize) !== null && _b !== void 0 ? _b : 0;
        message.measurementDuration =
            object.measurementDuration !== undefined &&
                object.measurementDuration !== null
                ? duration_1.Duration.fromPartial(object.measurementDuration)
                : undefined;
        message.warmupDuration =
            object.warmupDuration !== undefined && object.warmupDuration !== null
                ? duration_1.Duration.fromPartial(object.warmupDuration)
                : undefined;
        message.stabilizationDuration =
            object.stabilizationDuration !== undefined &&
                object.stabilizationDuration !== null
                ? duration_1.Duration.fromPartial(object.stabilizationDuration)
                : undefined;
        message.initialSize = (_c = object.initialSize) !== null && _c !== void 0 ? _c : 0;
        message.cpuUtilizationRule =
            object.cpuUtilizationRule !== undefined &&
                object.cpuUtilizationRule !== null
                ? exports.ScalePolicy_CpuUtilizationRule.fromPartial(object.cpuUtilizationRule)
                : undefined;
        message.customRules =
            ((_d = object.customRules) === null || _d === void 0 ? void 0 : _d.map((e) => exports.ScalePolicy_CustomRule.fromPartial(e))) ||
                [];
        message.autoScaleType = (_e = object.autoScaleType) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_AutoScale.$type, exports.ScalePolicy_AutoScale);
const baseScalePolicy_CpuUtilizationRule = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule",
    utilizationTarget: 0,
};
exports.ScalePolicy_CpuUtilizationRule = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.utilizationTarget !== 0) {
            writer.uint32(9).double(message.utilizationTarget);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalePolicy_CpuUtilizationRule);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.utilizationTarget = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScalePolicy_CpuUtilizationRule);
        message.utilizationTarget =
            object.utilizationTarget !== undefined &&
                object.utilizationTarget !== null
                ? Number(object.utilizationTarget)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.utilizationTarget !== undefined &&
            (obj.utilizationTarget = message.utilizationTarget);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseScalePolicy_CpuUtilizationRule);
        message.utilizationTarget = (_a = object.utilizationTarget) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_CpuUtilizationRule.$type, exports.ScalePolicy_CpuUtilizationRule);
const baseScalePolicy_CustomRule = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule",
    ruleType: 0,
    metricType: 0,
    metricName: "",
    target: 0,
    folderId: "",
    service: "",
};
exports.ScalePolicy_CustomRule = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ruleType !== 0) {
            writer.uint32(8).int32(message.ruleType);
        }
        if (message.metricType !== 0) {
            writer.uint32(16).int32(message.metricType);
        }
        if (message.metricName !== "") {
            writer.uint32(26).string(message.metricName);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.ScalePolicy_CustomRule_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.target !== 0) {
            writer.uint32(33).double(message.target);
        }
        if (message.folderId !== "") {
            writer.uint32(50).string(message.folderId);
        }
        if (message.service !== "") {
            writer.uint32(58).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalePolicy_CustomRule);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleType = reader.int32();
                    break;
                case 2:
                    message.metricType = reader.int32();
                    break;
                case 3:
                    message.metricName = reader.string();
                    break;
                case 5:
                    const entry5 = exports.ScalePolicy_CustomRule_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 4:
                    message.target = reader.double();
                    break;
                case 6:
                    message.folderId = reader.string();
                    break;
                case 7:
                    message.service = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseScalePolicy_CustomRule);
        message.ruleType =
            object.ruleType !== undefined && object.ruleType !== null
                ? scalePolicy_CustomRule_RuleTypeFromJSON(object.ruleType)
                : 0;
        message.metricType =
            object.metricType !== undefined && object.metricType !== null
                ? scalePolicy_CustomRule_MetricTypeFromJSON(object.metricType)
                : 0;
        message.metricName =
            object.metricName !== undefined && object.metricName !== null
                ? String(object.metricName)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.target =
            object.target !== undefined && object.target !== null
                ? Number(object.target)
                : 0;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.service =
            object.service !== undefined && object.service !== null
                ? String(object.service)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ruleType !== undefined &&
            (obj.ruleType = scalePolicy_CustomRule_RuleTypeToJSON(message.ruleType));
        message.metricType !== undefined &&
            (obj.metricType = scalePolicy_CustomRule_MetricTypeToJSON(message.metricType));
        message.metricName !== undefined && (obj.metricName = message.metricName);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.target !== undefined && (obj.target = message.target);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseScalePolicy_CustomRule);
        message.ruleType = (_a = object.ruleType) !== null && _a !== void 0 ? _a : 0;
        message.metricType = (_b = object.metricType) !== null && _b !== void 0 ? _b : 0;
        message.metricName = (_c = object.metricName) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.target = (_e = object.target) !== null && _e !== void 0 ? _e : 0;
        message.folderId = (_f = object.folderId) !== null && _f !== void 0 ? _f : "";
        message.service = (_g = object.service) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_CustomRule.$type, exports.ScalePolicy_CustomRule);
const baseScalePolicy_CustomRule_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry",
    key: "",
    value: "",
};
exports.ScalePolicy_CustomRule_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalePolicy_CustomRule_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScalePolicy_CustomRule_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseScalePolicy_CustomRule_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_CustomRule_LabelsEntry.$type, exports.ScalePolicy_CustomRule_LabelsEntry);
const baseScalePolicy_FixedScale = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale",
    size: 0,
};
exports.ScalePolicy_FixedScale = {
    $type: "yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalePolicy_FixedScale);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScalePolicy_FixedScale);
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseScalePolicy_FixedScale);
        message.size = (_a = object.size) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_FixedScale.$type, exports.ScalePolicy_FixedScale);
const baseDeployPolicy = {
    $type: "yandex.cloud.compute.v1.instancegroup.DeployPolicy",
    maxUnavailable: 0,
    maxDeleting: 0,
    maxCreating: 0,
    maxExpansion: 0,
    strategy: 0,
};
exports.DeployPolicy = {
    $type: "yandex.cloud.compute.v1.instancegroup.DeployPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxUnavailable !== 0) {
            writer.uint32(8).int64(message.maxUnavailable);
        }
        if (message.maxDeleting !== 0) {
            writer.uint32(16).int64(message.maxDeleting);
        }
        if (message.maxCreating !== 0) {
            writer.uint32(24).int64(message.maxCreating);
        }
        if (message.maxExpansion !== 0) {
            writer.uint32(48).int64(message.maxExpansion);
        }
        if (message.startupDuration !== undefined) {
            duration_1.Duration.encode(message.startupDuration, writer.uint32(58).fork()).ldelim();
        }
        if (message.strategy !== 0) {
            writer.uint32(64).int32(message.strategy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeployPolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxUnavailable = longToNumber(reader.int64());
                    break;
                case 2:
                    message.maxDeleting = longToNumber(reader.int64());
                    break;
                case 3:
                    message.maxCreating = longToNumber(reader.int64());
                    break;
                case 6:
                    message.maxExpansion = longToNumber(reader.int64());
                    break;
                case 7:
                    message.startupDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.strategy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeployPolicy);
        message.maxUnavailable =
            object.maxUnavailable !== undefined && object.maxUnavailable !== null
                ? Number(object.maxUnavailable)
                : 0;
        message.maxDeleting =
            object.maxDeleting !== undefined && object.maxDeleting !== null
                ? Number(object.maxDeleting)
                : 0;
        message.maxCreating =
            object.maxCreating !== undefined && object.maxCreating !== null
                ? Number(object.maxCreating)
                : 0;
        message.maxExpansion =
            object.maxExpansion !== undefined && object.maxExpansion !== null
                ? Number(object.maxExpansion)
                : 0;
        message.startupDuration =
            object.startupDuration !== undefined && object.startupDuration !== null
                ? duration_1.Duration.fromJSON(object.startupDuration)
                : undefined;
        message.strategy =
            object.strategy !== undefined && object.strategy !== null
                ? deployPolicy_StrategyFromJSON(object.strategy)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxUnavailable !== undefined &&
            (obj.maxUnavailable = Math.round(message.maxUnavailable));
        message.maxDeleting !== undefined &&
            (obj.maxDeleting = Math.round(message.maxDeleting));
        message.maxCreating !== undefined &&
            (obj.maxCreating = Math.round(message.maxCreating));
        message.maxExpansion !== undefined &&
            (obj.maxExpansion = Math.round(message.maxExpansion));
        message.startupDuration !== undefined &&
            (obj.startupDuration = message.startupDuration
                ? duration_1.Duration.toJSON(message.startupDuration)
                : undefined);
        message.strategy !== undefined &&
            (obj.strategy = deployPolicy_StrategyToJSON(message.strategy));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseDeployPolicy);
        message.maxUnavailable = (_a = object.maxUnavailable) !== null && _a !== void 0 ? _a : 0;
        message.maxDeleting = (_b = object.maxDeleting) !== null && _b !== void 0 ? _b : 0;
        message.maxCreating = (_c = object.maxCreating) !== null && _c !== void 0 ? _c : 0;
        message.maxExpansion = (_d = object.maxExpansion) !== null && _d !== void 0 ? _d : 0;
        message.startupDuration =
            object.startupDuration !== undefined && object.startupDuration !== null
                ? duration_1.Duration.fromPartial(object.startupDuration)
                : undefined;
        message.strategy = (_e = object.strategy) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeployPolicy.$type, exports.DeployPolicy);
const baseAllocationPolicy = {
    $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy",
};
exports.AllocationPolicy = {
    $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.zones) {
            exports.AllocationPolicy_Zone.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAllocationPolicy);
        message.zones = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zones.push(exports.AllocationPolicy_Zone.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseAllocationPolicy);
        message.zones = ((_a = object.zones) !== null && _a !== void 0 ? _a : []).map((e) => exports.AllocationPolicy_Zone.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.zones) {
            obj.zones = message.zones.map((e) => e ? exports.AllocationPolicy_Zone.toJSON(e) : undefined);
        }
        else {
            obj.zones = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAllocationPolicy);
        message.zones =
            ((_a = object.zones) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AllocationPolicy_Zone.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AllocationPolicy.$type, exports.AllocationPolicy);
const baseAllocationPolicy_Zone = {
    $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone",
    zoneId: "",
    instanceTagsPool: "",
};
exports.AllocationPolicy_Zone = {
    $type: "yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== "") {
            writer.uint32(10).string(message.zoneId);
        }
        for (const v of message.instanceTagsPool) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAllocationPolicy_Zone);
        message.instanceTagsPool = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.instanceTagsPool.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseAllocationPolicy_Zone);
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.instanceTagsPool = ((_a = object.instanceTagsPool) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        if (message.instanceTagsPool) {
            obj.instanceTagsPool = message.instanceTagsPool.map((e) => e);
        }
        else {
            obj.instanceTagsPool = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAllocationPolicy_Zone);
        message.zoneId = (_a = object.zoneId) !== null && _a !== void 0 ? _a : "";
        message.instanceTagsPool = ((_b = object.instanceTagsPool) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AllocationPolicy_Zone.$type, exports.AllocationPolicy_Zone);
const baseInstanceTemplate = {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate",
    description: "",
    platformId: "",
    serviceAccountId: "",
    name: "",
    hostname: "",
};
exports.InstanceTemplate = {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.InstanceTemplate_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        if (message.platformId !== "") {
            writer.uint32(26).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            exports.ResourcesSpec.encode(message.resourcesSpec, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.InstanceTemplate_MetadataEntry.encode({
                $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.bootDiskSpec !== undefined) {
            exports.AttachedDiskSpec.encode(message.bootDiskSpec, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.secondaryDiskSpecs) {
            exports.AttachedDiskSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.networkInterfaceSpecs) {
            exports.NetworkInterfaceSpec.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.schedulingPolicy !== undefined) {
            exports.SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(82).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            exports.NetworkSettings.encode(message.networkSettings, writer.uint32(90).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(98).string(message.name);
        }
        if (message.hostname !== "") {
            writer.uint32(106).string(message.hostname);
        }
        if (message.placementPolicy !== undefined) {
            exports.PlacementPolicy.encode(message.placementPolicy, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.filesystemSpecs) {
            exports.AttachedFilesystemSpec.encode(v, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInstanceTemplate);
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.networkInterfaceSpecs = [];
        message.filesystemSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    const entry2 = exports.InstanceTemplate_LabelsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.labels[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.platformId = reader.string();
                    break;
                case 4:
                    message.resourcesSpec = exports.ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    const entry5 = exports.InstanceTemplate_MetadataEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.metadata[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.bootDiskSpec = exports.AttachedDiskSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.secondaryDiskSpecs.push(exports.AttachedDiskSpec.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.schedulingPolicy = exports.SchedulingPolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.serviceAccountId = reader.string();
                    break;
                case 11:
                    message.networkSettings = exports.NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.name = reader.string();
                    break;
                case 13:
                    message.hostname = reader.string();
                    break;
                case 14:
                    message.placementPolicy = exports.PlacementPolicy.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.filesystemSpecs.push(exports.AttachedFilesystemSpec.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseInstanceTemplate);
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.platformId =
            object.platformId !== undefined && object.platformId !== null
                ? String(object.platformId)
                : "";
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? exports.ResourcesSpec.fromJSON(object.resourcesSpec)
                : undefined;
        message.metadata = Object.entries((_b = object.metadata) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? exports.AttachedDiskSpec.fromJSON(object.bootDiskSpec)
                : undefined;
        message.secondaryDiskSpecs = ((_c = object.secondaryDiskSpecs) !== null && _c !== void 0 ? _c : []).map((e) => exports.AttachedDiskSpec.fromJSON(e));
        message.networkInterfaceSpecs = ((_d = object.networkInterfaceSpecs) !== null && _d !== void 0 ? _d : []).map((e) => exports.NetworkInterfaceSpec.fromJSON(e));
        message.schedulingPolicy =
            object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
                ? exports.SchedulingPolicy.fromJSON(object.schedulingPolicy)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? exports.NetworkSettings.fromJSON(object.networkSettings)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.hostname =
            object.hostname !== undefined && object.hostname !== null
                ? String(object.hostname)
                : "";
        message.placementPolicy =
            object.placementPolicy !== undefined && object.placementPolicy !== null
                ? exports.PlacementPolicy.fromJSON(object.placementPolicy)
                : undefined;
        message.filesystemSpecs = ((_e = object.filesystemSpecs) !== null && _e !== void 0 ? _e : []).map((e) => exports.AttachedFilesystemSpec.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.platformId !== undefined && (obj.platformId = message.platformId);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? exports.ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? exports.AttachedDiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        if (message.secondaryDiskSpecs) {
            obj.secondaryDiskSpecs = message.secondaryDiskSpecs.map((e) => e ? exports.AttachedDiskSpec.toJSON(e) : undefined);
        }
        else {
            obj.secondaryDiskSpecs = [];
        }
        if (message.networkInterfaceSpecs) {
            obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) => e ? exports.NetworkInterfaceSpec.toJSON(e) : undefined);
        }
        else {
            obj.networkInterfaceSpecs = [];
        }
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = message.schedulingPolicy
                ? exports.SchedulingPolicy.toJSON(message.schedulingPolicy)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? exports.NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.hostname !== undefined && (obj.hostname = message.hostname);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? exports.PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        if (message.filesystemSpecs) {
            obj.filesystemSpecs = message.filesystemSpecs.map((e) => e ? exports.AttachedFilesystemSpec.toJSON(e) : undefined);
        }
        else {
            obj.filesystemSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseInstanceTemplate);
        message.description = (_a = object.description) !== null && _a !== void 0 ? _a : "";
        message.labels = Object.entries((_b = object.labels) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.platformId = (_c = object.platformId) !== null && _c !== void 0 ? _c : "";
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? exports.ResourcesSpec.fromPartial(object.resourcesSpec)
                : undefined;
        message.metadata = Object.entries((_d = object.metadata) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? exports.AttachedDiskSpec.fromPartial(object.bootDiskSpec)
                : undefined;
        message.secondaryDiskSpecs =
            ((_e = object.secondaryDiskSpecs) === null || _e === void 0 ? void 0 : _e.map((e) => exports.AttachedDiskSpec.fromPartial(e))) ||
                [];
        message.networkInterfaceSpecs =
            ((_f = object.networkInterfaceSpecs) === null || _f === void 0 ? void 0 : _f.map((e) => exports.NetworkInterfaceSpec.fromPartial(e))) || [];
        message.schedulingPolicy =
            object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
                ? exports.SchedulingPolicy.fromPartial(object.schedulingPolicy)
                : undefined;
        message.serviceAccountId = (_g = object.serviceAccountId) !== null && _g !== void 0 ? _g : "";
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? exports.NetworkSettings.fromPartial(object.networkSettings)
                : undefined;
        message.name = (_h = object.name) !== null && _h !== void 0 ? _h : "";
        message.hostname = (_j = object.hostname) !== null && _j !== void 0 ? _j : "";
        message.placementPolicy =
            object.placementPolicy !== undefined && object.placementPolicy !== null
                ? exports.PlacementPolicy.fromPartial(object.placementPolicy)
                : undefined;
        message.filesystemSpecs =
            ((_k = object.filesystemSpecs) === null || _k === void 0 ? void 0 : _k.map((e) => exports.AttachedFilesystemSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InstanceTemplate.$type, exports.InstanceTemplate);
const baseInstanceTemplate_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry",
    key: "",
    value: "",
};
exports.InstanceTemplate_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInstanceTemplate_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInstanceTemplate_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseInstanceTemplate_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InstanceTemplate_LabelsEntry.$type, exports.InstanceTemplate_LabelsEntry);
const baseInstanceTemplate_MetadataEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry",
    key: "",
    value: "",
};
exports.InstanceTemplate_MetadataEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.InstanceTemplate.MetadataEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInstanceTemplate_MetadataEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInstanceTemplate_MetadataEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseInstanceTemplate_MetadataEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InstanceTemplate_MetadataEntry.$type, exports.InstanceTemplate_MetadataEntry);
const baseAttachedFilesystemSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedFilesystemSpec",
    mode: 0,
    deviceName: "",
    filesystemId: "",
};
exports.AttachedFilesystemSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedFilesystemSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.deviceName !== "") {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.filesystemId !== "") {
            writer.uint32(26).string(message.filesystemId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachedFilesystemSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachedFilesystemSpec);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? attachedFilesystemSpec_ModeFromJSON(object.mode)
                : 0;
        message.deviceName =
            object.deviceName !== undefined && object.deviceName !== null
                ? String(object.deviceName)
                : "";
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = attachedFilesystemSpec_ModeToJSON(message.mode));
        message.deviceName !== undefined && (obj.deviceName = message.deviceName);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAttachedFilesystemSpec);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.deviceName = (_b = object.deviceName) !== null && _b !== void 0 ? _b : "";
        message.filesystemId = (_c = object.filesystemId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedFilesystemSpec.$type, exports.AttachedFilesystemSpec);
const basePlacementPolicy = {
    $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy",
    placementGroupId: "",
};
exports.PlacementPolicy = {
    $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== "") {
            writer.uint32(10).string(message.placementGroupId);
        }
        for (const v of message.hostAffinityRules) {
            exports.PlacementPolicy_HostAffinityRule.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePlacementPolicy);
        message.hostAffinityRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                case 2:
                    message.hostAffinityRules.push(exports.PlacementPolicy_HostAffinityRule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, basePlacementPolicy);
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
                : "";
        message.hostAffinityRules = ((_a = object.hostAffinityRules) !== null && _a !== void 0 ? _a : []).map((e) => exports.PlacementPolicy_HostAffinityRule.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        if (message.hostAffinityRules) {
            obj.hostAffinityRules = message.hostAffinityRules.map((e) => e ? exports.PlacementPolicy_HostAffinityRule.toJSON(e) : undefined);
        }
        else {
            obj.hostAffinityRules = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePlacementPolicy);
        message.placementGroupId = (_a = object.placementGroupId) !== null && _a !== void 0 ? _a : "";
        message.hostAffinityRules =
            ((_b = object.hostAffinityRules) === null || _b === void 0 ? void 0 : _b.map((e) => exports.PlacementPolicy_HostAffinityRule.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PlacementPolicy.$type, exports.PlacementPolicy);
const basePlacementPolicy_HostAffinityRule = {
    $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule",
    key: "",
    op: 0,
    values: "",
};
exports.PlacementPolicy_HostAffinityRule = {
    $type: "yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.op !== 0) {
            writer.uint32(16).int32(message.op);
        }
        for (const v of message.values) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePlacementPolicy_HostAffinityRule);
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.op = reader.int32();
                    break;
                case 3:
                    message.values.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, basePlacementPolicy_HostAffinityRule);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.op =
            object.op !== undefined && object.op !== null
                ? placementPolicy_HostAffinityRule_OperatorFromJSON(object.op)
                : 0;
        message.values = ((_a = object.values) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.op !== undefined &&
            (obj.op = placementPolicy_HostAffinityRule_OperatorToJSON(message.op));
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, basePlacementPolicy_HostAffinityRule);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.op = (_b = object.op) !== null && _b !== void 0 ? _b : 0;
        message.values = ((_c = object.values) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PlacementPolicy_HostAffinityRule.$type, exports.PlacementPolicy_HostAffinityRule);
const baseResourcesSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.ResourcesSpec",
    memory: 0,
    cores: 0,
    coreFraction: 0,
    gpus: 0,
};
exports.ResourcesSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.ResourcesSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.memory !== 0) {
            writer.uint32(8).int64(message.memory);
        }
        if (message.cores !== 0) {
            writer.uint32(16).int64(message.cores);
        }
        if (message.coreFraction !== 0) {
            writer.uint32(24).int64(message.coreFraction);
        }
        if (message.gpus !== 0) {
            writer.uint32(32).int64(message.gpus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourcesSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memory = longToNumber(reader.int64());
                    break;
                case 2:
                    message.cores = longToNumber(reader.int64());
                    break;
                case 3:
                    message.coreFraction = longToNumber(reader.int64());
                    break;
                case 4:
                    message.gpus = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourcesSpec);
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? Number(object.memory)
                : 0;
        message.cores =
            object.cores !== undefined && object.cores !== null
                ? Number(object.cores)
                : 0;
        message.coreFraction =
            object.coreFraction !== undefined && object.coreFraction !== null
                ? Number(object.coreFraction)
                : 0;
        message.gpus =
            object.gpus !== undefined && object.gpus !== null
                ? Number(object.gpus)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.memory !== undefined && (obj.memory = Math.round(message.memory));
        message.cores !== undefined && (obj.cores = Math.round(message.cores));
        message.coreFraction !== undefined &&
            (obj.coreFraction = Math.round(message.coreFraction));
        message.gpus !== undefined && (obj.gpus = Math.round(message.gpus));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseResourcesSpec);
        message.memory = (_a = object.memory) !== null && _a !== void 0 ? _a : 0;
        message.cores = (_b = object.cores) !== null && _b !== void 0 ? _b : 0;
        message.coreFraction = (_c = object.coreFraction) !== null && _c !== void 0 ? _c : 0;
        message.gpus = (_d = object.gpus) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourcesSpec.$type, exports.ResourcesSpec);
const baseAttachedDiskSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec",
    mode: 0,
    deviceName: "",
    diskId: "",
    name: "",
};
exports.AttachedDiskSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.deviceName !== "") {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.diskSpec !== undefined) {
            exports.AttachedDiskSpec_DiskSpec.encode(message.diskSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskId !== "") {
            writer.uint32(34).string(message.diskId);
        }
        if (message.name !== "") {
            writer.uint32(58).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachedDiskSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.diskSpec = exports.AttachedDiskSpec_DiskSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.diskId = reader.string();
                    break;
                case 7:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachedDiskSpec);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? attachedDiskSpec_ModeFromJSON(object.mode)
                : 0;
        message.deviceName =
            object.deviceName !== undefined && object.deviceName !== null
                ? String(object.deviceName)
                : "";
        message.diskSpec =
            object.diskSpec !== undefined && object.diskSpec !== null
                ? exports.AttachedDiskSpec_DiskSpec.fromJSON(object.diskSpec)
                : undefined;
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = attachedDiskSpec_ModeToJSON(message.mode));
        message.deviceName !== undefined && (obj.deviceName = message.deviceName);
        message.diskSpec !== undefined &&
            (obj.diskSpec = message.diskSpec
                ? exports.AttachedDiskSpec_DiskSpec.toJSON(message.diskSpec)
                : undefined);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseAttachedDiskSpec);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.deviceName = (_b = object.deviceName) !== null && _b !== void 0 ? _b : "";
        message.diskSpec =
            object.diskSpec !== undefined && object.diskSpec !== null
                ? exports.AttachedDiskSpec_DiskSpec.fromPartial(object.diskSpec)
                : undefined;
        message.diskId = (_c = object.diskId) !== null && _c !== void 0 ? _c : "";
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedDiskSpec.$type, exports.AttachedDiskSpec);
const baseAttachedDiskSpec_DiskSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec",
    description: "",
    typeId: "",
    size: 0,
    preserveAfterInstanceDelete: false,
};
exports.AttachedDiskSpec_DiskSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.typeId !== "") {
            writer.uint32(18).string(message.typeId);
        }
        if (message.size !== 0) {
            writer.uint32(24).int64(message.size);
        }
        if (message.imageId !== undefined) {
            writer.uint32(34).string(message.imageId);
        }
        if (message.snapshotId !== undefined) {
            writer.uint32(42).string(message.snapshotId);
        }
        if (message.preserveAfterInstanceDelete === true) {
            writer.uint32(48).bool(message.preserveAfterInstanceDelete);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachedDiskSpec_DiskSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.typeId = reader.string();
                    break;
                case 3:
                    message.size = longToNumber(reader.int64());
                    break;
                case 4:
                    message.imageId = reader.string();
                    break;
                case 5:
                    message.snapshotId = reader.string();
                    break;
                case 6:
                    message.preserveAfterInstanceDelete = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachedDiskSpec_DiskSpec);
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.typeId =
            object.typeId !== undefined && object.typeId !== null
                ? String(object.typeId)
                : "";
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : undefined;
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
                : undefined;
        message.preserveAfterInstanceDelete =
            object.preserveAfterInstanceDelete !== undefined &&
                object.preserveAfterInstanceDelete !== null
                ? Boolean(object.preserveAfterInstanceDelete)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        message.preserveAfterInstanceDelete !== undefined &&
            (obj.preserveAfterInstanceDelete = message.preserveAfterInstanceDelete);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseAttachedDiskSpec_DiskSpec);
        message.description = (_a = object.description) !== null && _a !== void 0 ? _a : "";
        message.typeId = (_b = object.typeId) !== null && _b !== void 0 ? _b : "";
        message.size = (_c = object.size) !== null && _c !== void 0 ? _c : 0;
        message.imageId = (_d = object.imageId) !== null && _d !== void 0 ? _d : undefined;
        message.snapshotId = (_e = object.snapshotId) !== null && _e !== void 0 ? _e : undefined;
        message.preserveAfterInstanceDelete =
            (_f = object.preserveAfterInstanceDelete) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedDiskSpec_DiskSpec.$type, exports.AttachedDiskSpec_DiskSpec);
const baseNetworkInterfaceSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec",
    networkId: "",
    subnetIds: "",
    securityGroupIds: "",
};
exports.NetworkInterfaceSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkId !== "") {
            writer.uint32(10).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(18).string(v);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV4AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV6AddressSpec, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNetworkInterfaceSpec);
        message.subnetIds = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                case 2:
                    message.subnetIds.push(reader.string());
                    break;
                case 3:
                    message.primaryV4AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.primaryV6AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseNetworkInterfaceSpec);
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.subnetIds = ((_a = object.subnetIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.primaryV4AddressSpec =
            object.primaryV4AddressSpec !== undefined &&
                object.primaryV4AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromJSON(object.primaryV4AddressSpec)
                : undefined;
        message.primaryV6AddressSpec =
            object.primaryV6AddressSpec !== undefined &&
                object.primaryV6AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromJSON(object.primaryV6AddressSpec)
                : undefined;
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.primaryV4AddressSpec !== undefined &&
            (obj.primaryV4AddressSpec = message.primaryV4AddressSpec
                ? exports.PrimaryAddressSpec.toJSON(message.primaryV4AddressSpec)
                : undefined);
        message.primaryV6AddressSpec !== undefined &&
            (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
                ? exports.PrimaryAddressSpec.toJSON(message.primaryV6AddressSpec)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseNetworkInterfaceSpec);
        message.networkId = (_a = object.networkId) !== null && _a !== void 0 ? _a : "";
        message.subnetIds = ((_b = object.subnetIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.primaryV4AddressSpec =
            object.primaryV4AddressSpec !== undefined &&
                object.primaryV4AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromPartial(object.primaryV4AddressSpec)
                : undefined;
        message.primaryV6AddressSpec =
            object.primaryV6AddressSpec !== undefined &&
                object.primaryV6AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromPartial(object.primaryV6AddressSpec)
                : undefined;
        message.securityGroupIds = ((_c = object.securityGroupIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NetworkInterfaceSpec.$type, exports.NetworkInterfaceSpec);
const basePrimaryAddressSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec",
    address: "",
};
exports.PrimaryAddressSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.oneToOneNatSpec !== undefined) {
            exports.OneToOneNatSpec.encode(message.oneToOneNatSpec, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.dnsRecordSpecs) {
            exports.DnsRecordSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePrimaryAddressSpec);
        message.dnsRecordSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oneToOneNatSpec = exports.OneToOneNatSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dnsRecordSpecs.push(exports.DnsRecordSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, basePrimaryAddressSpec);
        message.oneToOneNatSpec =
            object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
                ? exports.OneToOneNatSpec.fromJSON(object.oneToOneNatSpec)
                : undefined;
        message.dnsRecordSpecs = ((_a = object.dnsRecordSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.DnsRecordSpec.fromJSON(e));
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.oneToOneNatSpec !== undefined &&
            (obj.oneToOneNatSpec = message.oneToOneNatSpec
                ? exports.OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
                : undefined);
        if (message.dnsRecordSpecs) {
            obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) => e ? exports.DnsRecordSpec.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecordSpecs = [];
        }
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePrimaryAddressSpec);
        message.oneToOneNatSpec =
            object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
                ? exports.OneToOneNatSpec.fromPartial(object.oneToOneNatSpec)
                : undefined;
        message.dnsRecordSpecs =
            ((_a = object.dnsRecordSpecs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DnsRecordSpec.fromPartial(e))) || [];
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PrimaryAddressSpec.$type, exports.PrimaryAddressSpec);
const baseOneToOneNatSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec",
    ipVersion: 0,
    address: "",
};
exports.OneToOneNatSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ipVersion !== 0) {
            writer.uint32(8).int32(message.ipVersion);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        for (const v of message.dnsRecordSpecs) {
            exports.DnsRecordSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOneToOneNatSpec);
        message.dnsRecordSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipVersion = reader.int32();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.dnsRecordSpecs.push(exports.DnsRecordSpec.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseOneToOneNatSpec);
        message.ipVersion =
            object.ipVersion !== undefined && object.ipVersion !== null
                ? ipVersionFromJSON(object.ipVersion)
                : 0;
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.dnsRecordSpecs = ((_a = object.dnsRecordSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.DnsRecordSpec.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        message.address !== undefined && (obj.address = message.address);
        if (message.dnsRecordSpecs) {
            obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) => e ? exports.DnsRecordSpec.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecordSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseOneToOneNatSpec);
        message.ipVersion = (_a = object.ipVersion) !== null && _a !== void 0 ? _a : 0;
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.dnsRecordSpecs =
            ((_c = object.dnsRecordSpecs) === null || _c === void 0 ? void 0 : _c.map((e) => exports.DnsRecordSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OneToOneNatSpec.$type, exports.OneToOneNatSpec);
const baseDnsRecordSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.DnsRecordSpec",
    fqdn: "",
    dnsZoneId: "",
    ttl: 0,
    ptr: false,
};
exports.DnsRecordSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.DnsRecordSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fqdn !== "") {
            writer.uint32(10).string(message.fqdn);
        }
        if (message.dnsZoneId !== "") {
            writer.uint32(18).string(message.dnsZoneId);
        }
        if (message.ttl !== 0) {
            writer.uint32(24).int64(message.ttl);
        }
        if (message.ptr === true) {
            writer.uint32(32).bool(message.ptr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDnsRecordSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fqdn = reader.string();
                    break;
                case 2:
                    message.dnsZoneId = reader.string();
                    break;
                case 3:
                    message.ttl = longToNumber(reader.int64());
                    break;
                case 4:
                    message.ptr = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDnsRecordSpec);
        message.fqdn =
            object.fqdn !== undefined && object.fqdn !== null
                ? String(object.fqdn)
                : "";
        message.dnsZoneId =
            object.dnsZoneId !== undefined && object.dnsZoneId !== null
                ? String(object.dnsZoneId)
                : "";
        message.ttl =
            object.ttl !== undefined && object.ttl !== null ? Number(object.ttl) : 0;
        message.ptr =
            object.ptr !== undefined && object.ptr !== null
                ? Boolean(object.ptr)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.ttl !== undefined && (obj.ttl = Math.round(message.ttl));
        message.ptr !== undefined && (obj.ptr = message.ptr);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseDnsRecordSpec);
        message.fqdn = (_a = object.fqdn) !== null && _a !== void 0 ? _a : "";
        message.dnsZoneId = (_b = object.dnsZoneId) !== null && _b !== void 0 ? _b : "";
        message.ttl = (_c = object.ttl) !== null && _c !== void 0 ? _c : 0;
        message.ptr = (_d = object.ptr) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DnsRecordSpec.$type, exports.DnsRecordSpec);
const baseSchedulingPolicy = {
    $type: "yandex.cloud.compute.v1.instancegroup.SchedulingPolicy",
    preemptible: false,
};
exports.SchedulingPolicy = {
    $type: "yandex.cloud.compute.v1.instancegroup.SchedulingPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.preemptible === true) {
            writer.uint32(8).bool(message.preemptible);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSchedulingPolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.preemptible = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSchedulingPolicy);
        message.preemptible =
            object.preemptible !== undefined && object.preemptible !== null
                ? Boolean(object.preemptible)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.preemptible !== undefined &&
            (obj.preemptible = message.preemptible);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSchedulingPolicy);
        message.preemptible = (_a = object.preemptible) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SchedulingPolicy.$type, exports.SchedulingPolicy);
const baseNetworkSettings = {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkSettings",
    type: 0,
};
exports.NetworkSettings = {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNetworkSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseNetworkSettings);
        message.type =
            object.type !== undefined && object.type !== null
                ? networkSettings_TypeFromJSON(object.type)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = networkSettings_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseNetworkSettings);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NetworkSettings.$type, exports.NetworkSettings);
const baseLoadBalancerSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec",
    ignoreHealthChecks: false,
};
exports.LoadBalancerSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupSpec !== undefined) {
            exports.TargetGroupSpec.encode(message.targetGroupSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxOpeningTrafficDuration !== undefined) {
            duration_1.Duration.encode(message.maxOpeningTrafficDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.ignoreHealthChecks === true) {
            writer.uint32(32).bool(message.ignoreHealthChecks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLoadBalancerSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupSpec = exports.TargetGroupSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxOpeningTrafficDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ignoreHealthChecks = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLoadBalancerSpec);
        message.targetGroupSpec =
            object.targetGroupSpec !== undefined && object.targetGroupSpec !== null
                ? exports.TargetGroupSpec.fromJSON(object.targetGroupSpec)
                : undefined;
        message.maxOpeningTrafficDuration =
            object.maxOpeningTrafficDuration !== undefined &&
                object.maxOpeningTrafficDuration !== null
                ? duration_1.Duration.fromJSON(object.maxOpeningTrafficDuration)
                : undefined;
        message.ignoreHealthChecks =
            object.ignoreHealthChecks !== undefined &&
                object.ignoreHealthChecks !== null
                ? Boolean(object.ignoreHealthChecks)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupSpec !== undefined &&
            (obj.targetGroupSpec = message.targetGroupSpec
                ? exports.TargetGroupSpec.toJSON(message.targetGroupSpec)
                : undefined);
        message.maxOpeningTrafficDuration !== undefined &&
            (obj.maxOpeningTrafficDuration = message.maxOpeningTrafficDuration
                ? duration_1.Duration.toJSON(message.maxOpeningTrafficDuration)
                : undefined);
        message.ignoreHealthChecks !== undefined &&
            (obj.ignoreHealthChecks = message.ignoreHealthChecks);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseLoadBalancerSpec);
        message.targetGroupSpec =
            object.targetGroupSpec !== undefined && object.targetGroupSpec !== null
                ? exports.TargetGroupSpec.fromPartial(object.targetGroupSpec)
                : undefined;
        message.maxOpeningTrafficDuration =
            object.maxOpeningTrafficDuration !== undefined &&
                object.maxOpeningTrafficDuration !== null
                ? duration_1.Duration.fromPartial(object.maxOpeningTrafficDuration)
                : undefined;
        message.ignoreHealthChecks = (_a = object.ignoreHealthChecks) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LoadBalancerSpec.$type, exports.LoadBalancerSpec);
const baseTargetGroupSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec",
    name: "",
    description: "",
};
exports.TargetGroupSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.TargetGroupSpec_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTargetGroupSpec);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    const entry3 = exports.TargetGroupSpec_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseTargetGroupSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseTargetGroupSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.labels = Object.entries((_c = object.labels) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TargetGroupSpec.$type, exports.TargetGroupSpec);
const baseTargetGroupSpec_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry",
    key: "",
    value: "",
};
exports.TargetGroupSpec_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTargetGroupSpec_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTargetGroupSpec_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTargetGroupSpec_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TargetGroupSpec_LabelsEntry.$type, exports.TargetGroupSpec_LabelsEntry);
const baseApplicationLoadBalancerSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec",
    ignoreHealthChecks: false,
};
exports.ApplicationLoadBalancerSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupSpec !== undefined) {
            exports.ApplicationTargetGroupSpec.encode(message.targetGroupSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxOpeningTrafficDuration !== undefined) {
            duration_1.Duration.encode(message.maxOpeningTrafficDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.ignoreHealthChecks === true) {
            writer.uint32(24).bool(message.ignoreHealthChecks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseApplicationLoadBalancerSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupSpec = exports.ApplicationTargetGroupSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxOpeningTrafficDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ignoreHealthChecks = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseApplicationLoadBalancerSpec);
        message.targetGroupSpec =
            object.targetGroupSpec !== undefined && object.targetGroupSpec !== null
                ? exports.ApplicationTargetGroupSpec.fromJSON(object.targetGroupSpec)
                : undefined;
        message.maxOpeningTrafficDuration =
            object.maxOpeningTrafficDuration !== undefined &&
                object.maxOpeningTrafficDuration !== null
                ? duration_1.Duration.fromJSON(object.maxOpeningTrafficDuration)
                : undefined;
        message.ignoreHealthChecks =
            object.ignoreHealthChecks !== undefined &&
                object.ignoreHealthChecks !== null
                ? Boolean(object.ignoreHealthChecks)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupSpec !== undefined &&
            (obj.targetGroupSpec = message.targetGroupSpec
                ? exports.ApplicationTargetGroupSpec.toJSON(message.targetGroupSpec)
                : undefined);
        message.maxOpeningTrafficDuration !== undefined &&
            (obj.maxOpeningTrafficDuration = message.maxOpeningTrafficDuration
                ? duration_1.Duration.toJSON(message.maxOpeningTrafficDuration)
                : undefined);
        message.ignoreHealthChecks !== undefined &&
            (obj.ignoreHealthChecks = message.ignoreHealthChecks);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseApplicationLoadBalancerSpec);
        message.targetGroupSpec =
            object.targetGroupSpec !== undefined && object.targetGroupSpec !== null
                ? exports.ApplicationTargetGroupSpec.fromPartial(object.targetGroupSpec)
                : undefined;
        message.maxOpeningTrafficDuration =
            object.maxOpeningTrafficDuration !== undefined &&
                object.maxOpeningTrafficDuration !== null
                ? duration_1.Duration.fromPartial(object.maxOpeningTrafficDuration)
                : undefined;
        message.ignoreHealthChecks = (_a = object.ignoreHealthChecks) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApplicationLoadBalancerSpec.$type, exports.ApplicationLoadBalancerSpec);
const baseApplicationTargetGroupSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec",
    name: "",
    description: "",
};
exports.ApplicationTargetGroupSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.ApplicationTargetGroupSpec_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseApplicationTargetGroupSpec);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    const entry3 = exports.ApplicationTargetGroupSpec_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseApplicationTargetGroupSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseApplicationTargetGroupSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.labels = Object.entries((_c = object.labels) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApplicationTargetGroupSpec.$type, exports.ApplicationTargetGroupSpec);
const baseApplicationTargetGroupSpec_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry",
    key: "",
    value: "",
};
exports.ApplicationTargetGroupSpec_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseApplicationTargetGroupSpec_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseApplicationTargetGroupSpec_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseApplicationTargetGroupSpec_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApplicationTargetGroupSpec_LabelsEntry.$type, exports.ApplicationTargetGroupSpec_LabelsEntry);
const baseHealthChecksSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthChecksSpec",
};
exports.HealthChecksSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthChecksSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.healthCheckSpecs) {
            exports.HealthCheckSpec.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxCheckingHealthDuration !== undefined) {
            duration_1.Duration.encode(message.maxCheckingHealthDuration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHealthChecksSpec);
        message.healthCheckSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.healthCheckSpecs.push(exports.HealthCheckSpec.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxCheckingHealthDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseHealthChecksSpec);
        message.healthCheckSpecs = ((_a = object.healthCheckSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.HealthCheckSpec.fromJSON(e));
        message.maxCheckingHealthDuration =
            object.maxCheckingHealthDuration !== undefined &&
                object.maxCheckingHealthDuration !== null
                ? duration_1.Duration.fromJSON(object.maxCheckingHealthDuration)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.healthCheckSpecs) {
            obj.healthCheckSpecs = message.healthCheckSpecs.map((e) => e ? exports.HealthCheckSpec.toJSON(e) : undefined);
        }
        else {
            obj.healthCheckSpecs = [];
        }
        message.maxCheckingHealthDuration !== undefined &&
            (obj.maxCheckingHealthDuration = message.maxCheckingHealthDuration
                ? duration_1.Duration.toJSON(message.maxCheckingHealthDuration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseHealthChecksSpec);
        message.healthCheckSpecs =
            ((_a = object.healthCheckSpecs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.HealthCheckSpec.fromPartial(e))) || [];
        message.maxCheckingHealthDuration =
            object.maxCheckingHealthDuration !== undefined &&
                object.maxCheckingHealthDuration !== null
                ? duration_1.Duration.fromPartial(object.maxCheckingHealthDuration)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthChecksSpec.$type, exports.HealthChecksSpec);
const baseHealthCheckSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec",
    unhealthyThreshold: 0,
    healthyThreshold: 0,
};
exports.HealthCheckSpec = {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.interval !== undefined) {
            duration_1.Duration.encode(message.interval, writer.uint32(10).fork()).ldelim();
        }
        if (message.timeout !== undefined) {
            duration_1.Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
        }
        if (message.unhealthyThreshold !== 0) {
            writer.uint32(24).int64(message.unhealthyThreshold);
        }
        if (message.healthyThreshold !== 0) {
            writer.uint32(32).int64(message.healthyThreshold);
        }
        if (message.tcpOptions !== undefined) {
            exports.HealthCheckSpec_TcpOptions.encode(message.tcpOptions, writer.uint32(42).fork()).ldelim();
        }
        if (message.httpOptions !== undefined) {
            exports.HealthCheckSpec_HttpOptions.encode(message.httpOptions, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHealthCheckSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.unhealthyThreshold = longToNumber(reader.int64());
                    break;
                case 4:
                    message.healthyThreshold = longToNumber(reader.int64());
                    break;
                case 5:
                    message.tcpOptions = exports.HealthCheckSpec_TcpOptions.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.httpOptions = exports.HealthCheckSpec_HttpOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHealthCheckSpec);
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? duration_1.Duration.fromJSON(object.interval)
                : undefined;
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? duration_1.Duration.fromJSON(object.timeout)
                : undefined;
        message.unhealthyThreshold =
            object.unhealthyThreshold !== undefined &&
                object.unhealthyThreshold !== null
                ? Number(object.unhealthyThreshold)
                : 0;
        message.healthyThreshold =
            object.healthyThreshold !== undefined && object.healthyThreshold !== null
                ? Number(object.healthyThreshold)
                : 0;
        message.tcpOptions =
            object.tcpOptions !== undefined && object.tcpOptions !== null
                ? exports.HealthCheckSpec_TcpOptions.fromJSON(object.tcpOptions)
                : undefined;
        message.httpOptions =
            object.httpOptions !== undefined && object.httpOptions !== null
                ? exports.HealthCheckSpec_HttpOptions.fromJSON(object.httpOptions)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? duration_1.Duration.toJSON(message.interval)
                : undefined);
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? duration_1.Duration.toJSON(message.timeout)
                : undefined);
        message.unhealthyThreshold !== undefined &&
            (obj.unhealthyThreshold = Math.round(message.unhealthyThreshold));
        message.healthyThreshold !== undefined &&
            (obj.healthyThreshold = Math.round(message.healthyThreshold));
        message.tcpOptions !== undefined &&
            (obj.tcpOptions = message.tcpOptions
                ? exports.HealthCheckSpec_TcpOptions.toJSON(message.tcpOptions)
                : undefined);
        message.httpOptions !== undefined &&
            (obj.httpOptions = message.httpOptions
                ? exports.HealthCheckSpec_HttpOptions.toJSON(message.httpOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseHealthCheckSpec);
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? duration_1.Duration.fromPartial(object.interval)
                : undefined;
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? duration_1.Duration.fromPartial(object.timeout)
                : undefined;
        message.unhealthyThreshold = (_a = object.unhealthyThreshold) !== null && _a !== void 0 ? _a : 0;
        message.healthyThreshold = (_b = object.healthyThreshold) !== null && _b !== void 0 ? _b : 0;
        message.tcpOptions =
            object.tcpOptions !== undefined && object.tcpOptions !== null
                ? exports.HealthCheckSpec_TcpOptions.fromPartial(object.tcpOptions)
                : undefined;
        message.httpOptions =
            object.httpOptions !== undefined && object.httpOptions !== null
                ? exports.HealthCheckSpec_HttpOptions.fromPartial(object.httpOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheckSpec.$type, exports.HealthCheckSpec);
const baseHealthCheckSpec_TcpOptions = {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions",
    port: 0,
};
exports.HealthCheckSpec_TcpOptions = {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHealthCheckSpec_TcpOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHealthCheckSpec_TcpOptions);
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.port !== undefined && (obj.port = Math.round(message.port));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseHealthCheckSpec_TcpOptions);
        message.port = (_a = object.port) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheckSpec_TcpOptions.$type, exports.HealthCheckSpec_TcpOptions);
const baseHealthCheckSpec_HttpOptions = {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions",
    port: 0,
    path: "",
};
exports.HealthCheckSpec_HttpOptions = {
    $type: "yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHealthCheckSpec_HttpOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64());
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHealthCheckSpec_HttpOptions);
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseHealthCheckSpec_HttpOptions);
        message.port = (_a = object.port) !== null && _a !== void 0 ? _a : 0;
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheckSpec_HttpOptions.$type, exports.HealthCheckSpec_HttpOptions);
const baseManagedInstance = {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstance",
    id: "",
    status: 0,
    instanceId: "",
    fqdn: "",
    name: "",
    statusMessage: "",
    zoneId: "",
    instanceTag: "",
};
exports.ManagedInstance = {
    $type: "yandex.cloud.compute.v1.instancegroup.ManagedInstance",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.instanceId !== "") {
            writer.uint32(26).string(message.instanceId);
        }
        if (message.fqdn !== "") {
            writer.uint32(34).string(message.fqdn);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.statusMessage !== "") {
            writer.uint32(50).string(message.statusMessage);
        }
        if (message.zoneId !== "") {
            writer.uint32(58).string(message.zoneId);
        }
        for (const v of message.networkInterfaces) {
            exports.NetworkInterface.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.statusChangedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.statusChangedAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.instanceTag !== "") {
            writer.uint32(114).string(message.instanceTag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseManagedInstance);
        message.networkInterfaces = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.instanceId = reader.string();
                    break;
                case 4:
                    message.fqdn = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.statusMessage = reader.string();
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.networkInterfaces.push(exports.NetworkInterface.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.statusChangedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.instanceTag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseManagedInstance);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? managedInstance_StatusFromJSON(object.status)
                : 0;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.fqdn =
            object.fqdn !== undefined && object.fqdn !== null
                ? String(object.fqdn)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.statusMessage =
            object.statusMessage !== undefined && object.statusMessage !== null
                ? String(object.statusMessage)
                : "";
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.networkInterfaces = ((_a = object.networkInterfaces) !== null && _a !== void 0 ? _a : []).map((e) => exports.NetworkInterface.fromJSON(e));
        message.statusChangedAt =
            object.statusChangedAt !== undefined && object.statusChangedAt !== null
                ? fromJsonTimestamp(object.statusChangedAt)
                : undefined;
        message.instanceTag =
            object.instanceTag !== undefined && object.instanceTag !== null
                ? String(object.instanceTag)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.status !== undefined &&
            (obj.status = managedInstance_StatusToJSON(message.status));
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.name !== undefined && (obj.name = message.name);
        message.statusMessage !== undefined &&
            (obj.statusMessage = message.statusMessage);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        if (message.networkInterfaces) {
            obj.networkInterfaces = message.networkInterfaces.map((e) => e ? exports.NetworkInterface.toJSON(e) : undefined);
        }
        else {
            obj.networkInterfaces = [];
        }
        message.statusChangedAt !== undefined &&
            (obj.statusChangedAt = message.statusChangedAt.toISOString());
        message.instanceTag !== undefined &&
            (obj.instanceTag = message.instanceTag);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseManagedInstance);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        message.instanceId = (_c = object.instanceId) !== null && _c !== void 0 ? _c : "";
        message.fqdn = (_d = object.fqdn) !== null && _d !== void 0 ? _d : "";
        message.name = (_e = object.name) !== null && _e !== void 0 ? _e : "";
        message.statusMessage = (_f = object.statusMessage) !== null && _f !== void 0 ? _f : "";
        message.zoneId = (_g = object.zoneId) !== null && _g !== void 0 ? _g : "";
        message.networkInterfaces =
            ((_h = object.networkInterfaces) === null || _h === void 0 ? void 0 : _h.map((e) => exports.NetworkInterface.fromPartial(e))) ||
                [];
        message.statusChangedAt = (_j = object.statusChangedAt) !== null && _j !== void 0 ? _j : undefined;
        message.instanceTag = (_k = object.instanceTag) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ManagedInstance.$type, exports.ManagedInstance);
const baseNetworkInterface = {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterface",
    index: "",
    macAddress: "",
    subnetId: "",
};
exports.NetworkInterface = {
    $type: "yandex.cloud.compute.v1.instancegroup.NetworkInterface",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.macAddress !== "") {
            writer.uint32(18).string(message.macAddress);
        }
        if (message.subnetId !== "") {
            writer.uint32(26).string(message.subnetId);
        }
        if (message.primaryV4Address !== undefined) {
            exports.PrimaryAddress.encode(message.primaryV4Address, writer.uint32(34).fork()).ldelim();
        }
        if (message.primaryV6Address !== undefined) {
            exports.PrimaryAddress.encode(message.primaryV6Address, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNetworkInterface);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.macAddress = reader.string();
                    break;
                case 3:
                    message.subnetId = reader.string();
                    break;
                case 4:
                    message.primaryV4Address = exports.PrimaryAddress.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.primaryV6Address = exports.PrimaryAddress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseNetworkInterface);
        message.index =
            object.index !== undefined && object.index !== null
                ? String(object.index)
                : "";
        message.macAddress =
            object.macAddress !== undefined && object.macAddress !== null
                ? String(object.macAddress)
                : "";
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.primaryV4Address =
            object.primaryV4Address !== undefined && object.primaryV4Address !== null
                ? exports.PrimaryAddress.fromJSON(object.primaryV4Address)
                : undefined;
        message.primaryV6Address =
            object.primaryV6Address !== undefined && object.primaryV6Address !== null
                ? exports.PrimaryAddress.fromJSON(object.primaryV6Address)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.macAddress !== undefined && (obj.macAddress = message.macAddress);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.primaryV4Address !== undefined &&
            (obj.primaryV4Address = message.primaryV4Address
                ? exports.PrimaryAddress.toJSON(message.primaryV4Address)
                : undefined);
        message.primaryV6Address !== undefined &&
            (obj.primaryV6Address = message.primaryV6Address
                ? exports.PrimaryAddress.toJSON(message.primaryV6Address)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseNetworkInterface);
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "";
        message.macAddress = (_b = object.macAddress) !== null && _b !== void 0 ? _b : "";
        message.subnetId = (_c = object.subnetId) !== null && _c !== void 0 ? _c : "";
        message.primaryV4Address =
            object.primaryV4Address !== undefined && object.primaryV4Address !== null
                ? exports.PrimaryAddress.fromPartial(object.primaryV4Address)
                : undefined;
        message.primaryV6Address =
            object.primaryV6Address !== undefined && object.primaryV6Address !== null
                ? exports.PrimaryAddress.fromPartial(object.primaryV6Address)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NetworkInterface.$type, exports.NetworkInterface);
const basePrimaryAddress = {
    $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddress",
    address: "",
};
exports.PrimaryAddress = {
    $type: "yandex.cloud.compute.v1.instancegroup.PrimaryAddress",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.oneToOneNat !== undefined) {
            exports.OneToOneNat.encode(message.oneToOneNat, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.dnsRecords) {
            exports.DnsRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePrimaryAddress);
        message.dnsRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.oneToOneNat = exports.OneToOneNat.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.dnsRecords.push(exports.DnsRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, basePrimaryAddress);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.oneToOneNat =
            object.oneToOneNat !== undefined && object.oneToOneNat !== null
                ? exports.OneToOneNat.fromJSON(object.oneToOneNat)
                : undefined;
        message.dnsRecords = ((_a = object.dnsRecords) !== null && _a !== void 0 ? _a : []).map((e) => exports.DnsRecord.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.oneToOneNat !== undefined &&
            (obj.oneToOneNat = message.oneToOneNat
                ? exports.OneToOneNat.toJSON(message.oneToOneNat)
                : undefined);
        if (message.dnsRecords) {
            obj.dnsRecords = message.dnsRecords.map((e) => e ? exports.DnsRecord.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePrimaryAddress);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.oneToOneNat =
            object.oneToOneNat !== undefined && object.oneToOneNat !== null
                ? exports.OneToOneNat.fromPartial(object.oneToOneNat)
                : undefined;
        message.dnsRecords =
            ((_b = object.dnsRecords) === null || _b === void 0 ? void 0 : _b.map((e) => exports.DnsRecord.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PrimaryAddress.$type, exports.PrimaryAddress);
const baseOneToOneNat = {
    $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNat",
    address: "",
    ipVersion: 0,
};
exports.OneToOneNat = {
    $type: "yandex.cloud.compute.v1.instancegroup.OneToOneNat",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(16).int32(message.ipVersion);
        }
        for (const v of message.dnsRecords) {
            exports.DnsRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOneToOneNat);
        message.dnsRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.ipVersion = reader.int32();
                    break;
                case 3:
                    message.dnsRecords.push(exports.DnsRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseOneToOneNat);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.ipVersion =
            object.ipVersion !== undefined && object.ipVersion !== null
                ? ipVersionFromJSON(object.ipVersion)
                : 0;
        message.dnsRecords = ((_a = object.dnsRecords) !== null && _a !== void 0 ? _a : []).map((e) => exports.DnsRecord.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        if (message.dnsRecords) {
            obj.dnsRecords = message.dnsRecords.map((e) => e ? exports.DnsRecord.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseOneToOneNat);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.ipVersion = (_b = object.ipVersion) !== null && _b !== void 0 ? _b : 0;
        message.dnsRecords =
            ((_c = object.dnsRecords) === null || _c === void 0 ? void 0 : _c.map((e) => exports.DnsRecord.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OneToOneNat.$type, exports.OneToOneNat);
const baseDnsRecord = {
    $type: "yandex.cloud.compute.v1.instancegroup.DnsRecord",
    fqdn: "",
    dnsZoneId: "",
    ttl: 0,
    ptr: false,
};
exports.DnsRecord = {
    $type: "yandex.cloud.compute.v1.instancegroup.DnsRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fqdn !== "") {
            writer.uint32(10).string(message.fqdn);
        }
        if (message.dnsZoneId !== "") {
            writer.uint32(18).string(message.dnsZoneId);
        }
        if (message.ttl !== 0) {
            writer.uint32(24).int64(message.ttl);
        }
        if (message.ptr === true) {
            writer.uint32(32).bool(message.ptr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDnsRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fqdn = reader.string();
                    break;
                case 2:
                    message.dnsZoneId = reader.string();
                    break;
                case 3:
                    message.ttl = longToNumber(reader.int64());
                    break;
                case 4:
                    message.ptr = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDnsRecord);
        message.fqdn =
            object.fqdn !== undefined && object.fqdn !== null
                ? String(object.fqdn)
                : "";
        message.dnsZoneId =
            object.dnsZoneId !== undefined && object.dnsZoneId !== null
                ? String(object.dnsZoneId)
                : "";
        message.ttl =
            object.ttl !== undefined && object.ttl !== null ? Number(object.ttl) : 0;
        message.ptr =
            object.ptr !== undefined && object.ptr !== null
                ? Boolean(object.ptr)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.ttl !== undefined && (obj.ttl = Math.round(message.ttl));
        message.ptr !== undefined && (obj.ptr = message.ptr);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseDnsRecord);
        message.fqdn = (_a = object.fqdn) !== null && _a !== void 0 ? _a : "";
        message.dnsZoneId = (_b = object.dnsZoneId) !== null && _b !== void 0 ? _b : "";
        message.ttl = (_c = object.ttl) !== null && _c !== void 0 ? _c : 0;
        message.ptr = (_d = object.ptr) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DnsRecord.$type, exports.DnsRecord);
const baseLogRecord = {
    $type: "yandex.cloud.compute.v1.instancegroup.LogRecord",
    message: "",
};
exports.LogRecord = {
    $type: "yandex.cloud.compute.v1.instancegroup.LogRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLogRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLogRecord);
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? fromJsonTimestamp(object.timestamp)
                : undefined;
        message.message =
            object.message !== undefined && object.message !== null
                ? String(object.message)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLogRecord);
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : undefined;
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogRecord.$type, exports.LogRecord);
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
