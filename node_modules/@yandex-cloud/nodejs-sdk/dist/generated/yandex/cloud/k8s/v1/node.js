"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementPolicy = exports.SchedulingPolicy = exports.DiskSpec = exports.ResourcesSpec = exports.OneToOneNatSpec = exports.DnsRecordSpec = exports.NodeAddressSpec = exports.NetworkInterfaceSpec = exports.GpuSettings = exports.NodeTemplate_ContainerNetworkSettings = exports.NodeTemplate_ContainerRuntimeSettings = exports.NodeTemplate_NetworkSettings = exports.NodeTemplate_MetadataEntry = exports.NodeTemplate_LabelsEntry = exports.NodeTemplate = exports.AttachedVolume = exports.Taint = exports.Condition = exports.Node_Spec = exports.Node_CloudStatus = exports.Node_KubernetesStatus = exports.Node = exports.gpuSettings_GpuEnvironmentToJSON = exports.gpuSettings_GpuEnvironmentFromJSON = exports.GpuSettings_GpuEnvironment = exports.nodeTemplate_ContainerRuntimeSettings_TypeToJSON = exports.nodeTemplate_ContainerRuntimeSettings_TypeFromJSON = exports.NodeTemplate_ContainerRuntimeSettings_Type = exports.nodeTemplate_NetworkSettings_TypeToJSON = exports.nodeTemplate_NetworkSettings_TypeFromJSON = exports.NodeTemplate_NetworkSettings_Type = exports.taint_EffectToJSON = exports.taint_EffectFromJSON = exports.Taint_Effect = exports.node_StatusToJSON = exports.node_StatusFromJSON = exports.Node_Status = exports.ipVersionToJSON = exports.ipVersionFromJSON = exports.IpVersion = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.k8s.v1";
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
/** Computed node status. */
var Node_Status;
(function (Node_Status) {
    Node_Status[Node_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** PROVISIONING - Node instance is not yet created (e.g. in progress). */
    Node_Status[Node_Status["PROVISIONING"] = 1] = "PROVISIONING";
    /**
     * NOT_CONNECTED - Node instance is created but not registered
     * (e.g. is still initializing).
     */
    Node_Status[Node_Status["NOT_CONNECTED"] = 2] = "NOT_CONNECTED";
    /**
     * NOT_READY - Node has connected but is not ready for
     * workload (see conditions for details).
     */
    Node_Status[Node_Status["NOT_READY"] = 3] = "NOT_READY";
    /** READY - Node has connected and ready for workload. */
    Node_Status[Node_Status["READY"] = 4] = "READY";
    /**
     * MISSING - Node is still registered but its instance
     * is deleted (this is our bug).
     */
    Node_Status[Node_Status["MISSING"] = 5] = "MISSING";
    /** STOPPED - Node is stopped */
    Node_Status[Node_Status["STOPPED"] = 6] = "STOPPED";
    /** UNKNOWN - Backend request to kubernetes api was unsuccessful. */
    Node_Status[Node_Status["UNKNOWN"] = 7] = "UNKNOWN";
    Node_Status[Node_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Node_Status = exports.Node_Status || (exports.Node_Status = {}));
function node_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Node_Status.STATUS_UNSPECIFIED;
        case 1:
        case "PROVISIONING":
            return Node_Status.PROVISIONING;
        case 2:
        case "NOT_CONNECTED":
            return Node_Status.NOT_CONNECTED;
        case 3:
        case "NOT_READY":
            return Node_Status.NOT_READY;
        case 4:
        case "READY":
            return Node_Status.READY;
        case 5:
        case "MISSING":
            return Node_Status.MISSING;
        case 6:
        case "STOPPED":
            return Node_Status.STOPPED;
        case 7:
        case "UNKNOWN":
            return Node_Status.UNKNOWN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Node_Status.UNRECOGNIZED;
    }
}
exports.node_StatusFromJSON = node_StatusFromJSON;
function node_StatusToJSON(object) {
    switch (object) {
        case Node_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Node_Status.PROVISIONING:
            return "PROVISIONING";
        case Node_Status.NOT_CONNECTED:
            return "NOT_CONNECTED";
        case Node_Status.NOT_READY:
            return "NOT_READY";
        case Node_Status.READY:
            return "READY";
        case Node_Status.MISSING:
            return "MISSING";
        case Node_Status.STOPPED:
            return "STOPPED";
        case Node_Status.UNKNOWN:
            return "UNKNOWN";
        default:
            return "UNKNOWN";
    }
}
exports.node_StatusToJSON = node_StatusToJSON;
var Taint_Effect;
(function (Taint_Effect) {
    Taint_Effect[Taint_Effect["EFFECT_UNSPECIFIED"] = 0] = "EFFECT_UNSPECIFIED";
    /**
     * NO_SCHEDULE - Do not allow new pods to schedule onto the node unless they tolerate the taint,
     * but allow all pods submitted to Kubelet without going through the scheduler
     * to start, and allow all already-running pods to continue running.
     */
    Taint_Effect[Taint_Effect["NO_SCHEDULE"] = 1] = "NO_SCHEDULE";
    /**
     * PREFER_NO_SCHEDULE - Like NO_SCHEDULE, but the scheduler tries not to schedule
     * new pods onto the node, rather than prohibiting new pods from scheduling
     * onto the node entirely. Enforced by the scheduler.
     */
    Taint_Effect[Taint_Effect["PREFER_NO_SCHEDULE"] = 2] = "PREFER_NO_SCHEDULE";
    /** NO_EXECUTE - Evict any already-running pods that do not tolerate the taint. */
    Taint_Effect[Taint_Effect["NO_EXECUTE"] = 3] = "NO_EXECUTE";
    Taint_Effect[Taint_Effect["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Taint_Effect = exports.Taint_Effect || (exports.Taint_Effect = {}));
function taint_EffectFromJSON(object) {
    switch (object) {
        case 0:
        case "EFFECT_UNSPECIFIED":
            return Taint_Effect.EFFECT_UNSPECIFIED;
        case 1:
        case "NO_SCHEDULE":
            return Taint_Effect.NO_SCHEDULE;
        case 2:
        case "PREFER_NO_SCHEDULE":
            return Taint_Effect.PREFER_NO_SCHEDULE;
        case 3:
        case "NO_EXECUTE":
            return Taint_Effect.NO_EXECUTE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Taint_Effect.UNRECOGNIZED;
    }
}
exports.taint_EffectFromJSON = taint_EffectFromJSON;
function taint_EffectToJSON(object) {
    switch (object) {
        case Taint_Effect.EFFECT_UNSPECIFIED:
            return "EFFECT_UNSPECIFIED";
        case Taint_Effect.NO_SCHEDULE:
            return "NO_SCHEDULE";
        case Taint_Effect.PREFER_NO_SCHEDULE:
            return "PREFER_NO_SCHEDULE";
        case Taint_Effect.NO_EXECUTE:
            return "NO_EXECUTE";
        default:
            return "UNKNOWN";
    }
}
exports.taint_EffectToJSON = taint_EffectToJSON;
var NodeTemplate_NetworkSettings_Type;
(function (NodeTemplate_NetworkSettings_Type) {
    NodeTemplate_NetworkSettings_Type[NodeTemplate_NetworkSettings_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    NodeTemplate_NetworkSettings_Type[NodeTemplate_NetworkSettings_Type["STANDARD"] = 1] = "STANDARD";
    /**
     * SOFTWARE_ACCELERATED - unsupported yet, commented for possible future utilization.
     * HARDWARE_ACCELERATED = 3;
     */
    NodeTemplate_NetworkSettings_Type[NodeTemplate_NetworkSettings_Type["SOFTWARE_ACCELERATED"] = 2] = "SOFTWARE_ACCELERATED";
    NodeTemplate_NetworkSettings_Type[NodeTemplate_NetworkSettings_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NodeTemplate_NetworkSettings_Type = exports.NodeTemplate_NetworkSettings_Type || (exports.NodeTemplate_NetworkSettings_Type = {}));
function nodeTemplate_NetworkSettings_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return NodeTemplate_NetworkSettings_Type.TYPE_UNSPECIFIED;
        case 1:
        case "STANDARD":
            return NodeTemplate_NetworkSettings_Type.STANDARD;
        case 2:
        case "SOFTWARE_ACCELERATED":
            return NodeTemplate_NetworkSettings_Type.SOFTWARE_ACCELERATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NodeTemplate_NetworkSettings_Type.UNRECOGNIZED;
    }
}
exports.nodeTemplate_NetworkSettings_TypeFromJSON = nodeTemplate_NetworkSettings_TypeFromJSON;
function nodeTemplate_NetworkSettings_TypeToJSON(object) {
    switch (object) {
        case NodeTemplate_NetworkSettings_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case NodeTemplate_NetworkSettings_Type.STANDARD:
            return "STANDARD";
        case NodeTemplate_NetworkSettings_Type.SOFTWARE_ACCELERATED:
            return "SOFTWARE_ACCELERATED";
        default:
            return "UNKNOWN";
    }
}
exports.nodeTemplate_NetworkSettings_TypeToJSON = nodeTemplate_NetworkSettings_TypeToJSON;
var NodeTemplate_ContainerRuntimeSettings_Type;
(function (NodeTemplate_ContainerRuntimeSettings_Type) {
    NodeTemplate_ContainerRuntimeSettings_Type[NodeTemplate_ContainerRuntimeSettings_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    NodeTemplate_ContainerRuntimeSettings_Type[NodeTemplate_ContainerRuntimeSettings_Type["DOCKER"] = 1] = "DOCKER";
    NodeTemplate_ContainerRuntimeSettings_Type[NodeTemplate_ContainerRuntimeSettings_Type["CONTAINERD"] = 2] = "CONTAINERD";
    NodeTemplate_ContainerRuntimeSettings_Type[NodeTemplate_ContainerRuntimeSettings_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NodeTemplate_ContainerRuntimeSettings_Type = exports.NodeTemplate_ContainerRuntimeSettings_Type || (exports.NodeTemplate_ContainerRuntimeSettings_Type = {}));
function nodeTemplate_ContainerRuntimeSettings_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return NodeTemplate_ContainerRuntimeSettings_Type.TYPE_UNSPECIFIED;
        case 1:
        case "DOCKER":
            return NodeTemplate_ContainerRuntimeSettings_Type.DOCKER;
        case 2:
        case "CONTAINERD":
            return NodeTemplate_ContainerRuntimeSettings_Type.CONTAINERD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NodeTemplate_ContainerRuntimeSettings_Type.UNRECOGNIZED;
    }
}
exports.nodeTemplate_ContainerRuntimeSettings_TypeFromJSON = nodeTemplate_ContainerRuntimeSettings_TypeFromJSON;
function nodeTemplate_ContainerRuntimeSettings_TypeToJSON(object) {
    switch (object) {
        case NodeTemplate_ContainerRuntimeSettings_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case NodeTemplate_ContainerRuntimeSettings_Type.DOCKER:
            return "DOCKER";
        case NodeTemplate_ContainerRuntimeSettings_Type.CONTAINERD:
            return "CONTAINERD";
        default:
            return "UNKNOWN";
    }
}
exports.nodeTemplate_ContainerRuntimeSettings_TypeToJSON = nodeTemplate_ContainerRuntimeSettings_TypeToJSON;
var GpuSettings_GpuEnvironment;
(function (GpuSettings_GpuEnvironment) {
    /** GPU_ENVIRONMENT_UNSPECIFIED - Use one of the values below, depending on the default for the specific Cloud installation. */
    GpuSettings_GpuEnvironment[GpuSettings_GpuEnvironment["GPU_ENVIRONMENT_UNSPECIFIED"] = 0] = "GPU_ENVIRONMENT_UNSPECIFIED";
    /** RUNC_DRIVERS_CUDA - Use a node image with the pre-installed GPU toolkit, drivers and CUDA. */
    GpuSettings_GpuEnvironment[GpuSettings_GpuEnvironment["RUNC_DRIVERS_CUDA"] = 1] = "RUNC_DRIVERS_CUDA";
    /**
     * RUNC - Use a node image with the pre-installed GPU toolkit but without drivers.
     * You should install drivers on a node yourself in that case.
     * There are tools to help you to do that, for example gpu-operator.
     */
    GpuSettings_GpuEnvironment[GpuSettings_GpuEnvironment["RUNC"] = 2] = "RUNC";
    GpuSettings_GpuEnvironment[GpuSettings_GpuEnvironment["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GpuSettings_GpuEnvironment = exports.GpuSettings_GpuEnvironment || (exports.GpuSettings_GpuEnvironment = {}));
function gpuSettings_GpuEnvironmentFromJSON(object) {
    switch (object) {
        case 0:
        case "GPU_ENVIRONMENT_UNSPECIFIED":
            return GpuSettings_GpuEnvironment.GPU_ENVIRONMENT_UNSPECIFIED;
        case 1:
        case "RUNC_DRIVERS_CUDA":
            return GpuSettings_GpuEnvironment.RUNC_DRIVERS_CUDA;
        case 2:
        case "RUNC":
            return GpuSettings_GpuEnvironment.RUNC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GpuSettings_GpuEnvironment.UNRECOGNIZED;
    }
}
exports.gpuSettings_GpuEnvironmentFromJSON = gpuSettings_GpuEnvironmentFromJSON;
function gpuSettings_GpuEnvironmentToJSON(object) {
    switch (object) {
        case GpuSettings_GpuEnvironment.GPU_ENVIRONMENT_UNSPECIFIED:
            return "GPU_ENVIRONMENT_UNSPECIFIED";
        case GpuSettings_GpuEnvironment.RUNC_DRIVERS_CUDA:
            return "RUNC_DRIVERS_CUDA";
        case GpuSettings_GpuEnvironment.RUNC:
            return "RUNC";
        default:
            return "UNKNOWN";
    }
}
exports.gpuSettings_GpuEnvironmentToJSON = gpuSettings_GpuEnvironmentToJSON;
const baseNode = { $type: "yandex.cloud.k8s.v1.Node", status: 0 };
exports.Node = {
    $type: "yandex.cloud.k8s.v1.Node",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.spec !== undefined) {
            exports.Node_Spec.encode(message.spec, writer.uint32(18).fork()).ldelim();
        }
        if (message.cloudStatus !== undefined) {
            exports.Node_CloudStatus.encode(message.cloudStatus, writer.uint32(26).fork()).ldelim();
        }
        if (message.kubernetesStatus !== undefined) {
            exports.Node_KubernetesStatus.encode(message.kubernetesStatus, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNode);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.spec = exports.Node_Spec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cloudStatus = exports.Node_CloudStatus.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.kubernetesStatus = exports.Node_KubernetesStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseNode);
        message.status =
            object.status !== undefined && object.status !== null
                ? node_StatusFromJSON(object.status)
                : 0;
        message.spec =
            object.spec !== undefined && object.spec !== null
                ? exports.Node_Spec.fromJSON(object.spec)
                : undefined;
        message.cloudStatus =
            object.cloudStatus !== undefined && object.cloudStatus !== null
                ? exports.Node_CloudStatus.fromJSON(object.cloudStatus)
                : undefined;
        message.kubernetesStatus =
            object.kubernetesStatus !== undefined && object.kubernetesStatus !== null
                ? exports.Node_KubernetesStatus.fromJSON(object.kubernetesStatus)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = node_StatusToJSON(message.status));
        message.spec !== undefined &&
            (obj.spec = message.spec ? exports.Node_Spec.toJSON(message.spec) : undefined);
        message.cloudStatus !== undefined &&
            (obj.cloudStatus = message.cloudStatus
                ? exports.Node_CloudStatus.toJSON(message.cloudStatus)
                : undefined);
        message.kubernetesStatus !== undefined &&
            (obj.kubernetesStatus = message.kubernetesStatus
                ? exports.Node_KubernetesStatus.toJSON(message.kubernetesStatus)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseNode);
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.spec =
            object.spec !== undefined && object.spec !== null
                ? exports.Node_Spec.fromPartial(object.spec)
                : undefined;
        message.cloudStatus =
            object.cloudStatus !== undefined && object.cloudStatus !== null
                ? exports.Node_CloudStatus.fromPartial(object.cloudStatus)
                : undefined;
        message.kubernetesStatus =
            object.kubernetesStatus !== undefined && object.kubernetesStatus !== null
                ? exports.Node_KubernetesStatus.fromPartial(object.kubernetesStatus)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Node.$type, exports.Node);
const baseNode_KubernetesStatus = {
    $type: "yandex.cloud.k8s.v1.Node.KubernetesStatus",
    id: "",
};
exports.Node_KubernetesStatus = {
    $type: "yandex.cloud.k8s.v1.Node.KubernetesStatus",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.conditions) {
            exports.Condition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.taints) {
            exports.Taint.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.attachedVolumes) {
            exports.AttachedVolume.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNode_KubernetesStatus);
        message.conditions = [];
        message.taints = [];
        message.attachedVolumes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.conditions.push(exports.Condition.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.taints.push(exports.Taint.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.attachedVolumes.push(exports.AttachedVolume.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseNode_KubernetesStatus);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.conditions = ((_a = object.conditions) !== null && _a !== void 0 ? _a : []).map((e) => exports.Condition.fromJSON(e));
        message.taints = ((_b = object.taints) !== null && _b !== void 0 ? _b : []).map((e) => exports.Taint.fromJSON(e));
        message.attachedVolumes = ((_c = object.attachedVolumes) !== null && _c !== void 0 ? _c : []).map((e) => exports.AttachedVolume.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.conditions) {
            obj.conditions = message.conditions.map((e) => e ? exports.Condition.toJSON(e) : undefined);
        }
        else {
            obj.conditions = [];
        }
        if (message.taints) {
            obj.taints = message.taints.map((e) => (e ? exports.Taint.toJSON(e) : undefined));
        }
        else {
            obj.taints = [];
        }
        if (message.attachedVolumes) {
            obj.attachedVolumes = message.attachedVolumes.map((e) => e ? exports.AttachedVolume.toJSON(e) : undefined);
        }
        else {
            obj.attachedVolumes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseNode_KubernetesStatus);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.conditions =
            ((_b = object.conditions) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Condition.fromPartial(e))) || [];
        message.taints = ((_c = object.taints) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Taint.fromPartial(e))) || [];
        message.attachedVolumes =
            ((_d = object.attachedVolumes) === null || _d === void 0 ? void 0 : _d.map((e) => exports.AttachedVolume.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Node_KubernetesStatus.$type, exports.Node_KubernetesStatus);
const baseNode_CloudStatus = {
    $type: "yandex.cloud.k8s.v1.Node.CloudStatus",
    id: "",
    status: "",
    statusMessage: "",
};
exports.Node_CloudStatus = {
    $type: "yandex.cloud.k8s.v1.Node.CloudStatus",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.status !== "") {
            writer.uint32(18).string(message.status);
        }
        if (message.statusMessage !== "") {
            writer.uint32(26).string(message.statusMessage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNode_CloudStatus);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseNode_CloudStatus);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? String(object.status)
                : "";
        message.statusMessage =
            object.statusMessage !== undefined && object.statusMessage !== null
                ? String(object.statusMessage)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.status !== undefined && (obj.status = message.status);
        message.statusMessage !== undefined &&
            (obj.statusMessage = message.statusMessage);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseNode_CloudStatus);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : "";
        message.statusMessage = (_c = object.statusMessage) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Node_CloudStatus.$type, exports.Node_CloudStatus);
const baseNode_Spec = { $type: "yandex.cloud.k8s.v1.Node.Spec" };
exports.Node_Spec = {
    $type: "yandex.cloud.k8s.v1.Node.Spec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            exports.ResourcesSpec.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.disk !== undefined) {
            exports.DiskSpec.encode(message.disk, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNode_Spec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = exports.ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.disk = exports.DiskSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseNode_Spec);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.ResourcesSpec.fromJSON(object.resources)
                : undefined;
        message.disk =
            object.disk !== undefined && object.disk !== null
                ? exports.DiskSpec.fromJSON(object.disk)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.ResourcesSpec.toJSON(message.resources)
                : undefined);
        message.disk !== undefined &&
            (obj.disk = message.disk ? exports.DiskSpec.toJSON(message.disk) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseNode_Spec);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.ResourcesSpec.fromPartial(object.resources)
                : undefined;
        message.disk =
            object.disk !== undefined && object.disk !== null
                ? exports.DiskSpec.fromPartial(object.disk)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Node_Spec.$type, exports.Node_Spec);
const baseCondition = {
    $type: "yandex.cloud.k8s.v1.Condition",
    type: "",
    status: "",
    message: "",
};
exports.Condition = {
    $type: "yandex.cloud.k8s.v1.Condition",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.status !== "") {
            writer.uint32(18).string(message.status);
        }
        if (message.message !== "") {
            writer.uint32(26).string(message.message);
        }
        if (message.lastHeartbeatTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastHeartbeatTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastTransitionTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastTransitionTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCondition);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    message.lastHeartbeatTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastTransitionTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCondition);
        message.type =
            object.type !== undefined && object.type !== null
                ? String(object.type)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? String(object.status)
                : "";
        message.message =
            object.message !== undefined && object.message !== null
                ? String(object.message)
                : "";
        message.lastHeartbeatTime =
            object.lastHeartbeatTime !== undefined &&
                object.lastHeartbeatTime !== null
                ? fromJsonTimestamp(object.lastHeartbeatTime)
                : undefined;
        message.lastTransitionTime =
            object.lastTransitionTime !== undefined &&
                object.lastTransitionTime !== null
                ? fromJsonTimestamp(object.lastTransitionTime)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.status !== undefined && (obj.status = message.status);
        message.message !== undefined && (obj.message = message.message);
        message.lastHeartbeatTime !== undefined &&
            (obj.lastHeartbeatTime = message.lastHeartbeatTime.toISOString());
        message.lastTransitionTime !== undefined &&
            (obj.lastTransitionTime = message.lastTransitionTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCondition);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : "";
        message.message = (_c = object.message) !== null && _c !== void 0 ? _c : "";
        message.lastHeartbeatTime = (_d = object.lastHeartbeatTime) !== null && _d !== void 0 ? _d : undefined;
        message.lastTransitionTime = (_e = object.lastTransitionTime) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Condition.$type, exports.Condition);
const baseTaint = {
    $type: "yandex.cloud.k8s.v1.Taint",
    key: "",
    value: "",
    effect: 0,
};
exports.Taint = {
    $type: "yandex.cloud.k8s.v1.Taint",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        if (message.effect !== 0) {
            writer.uint32(24).int32(message.effect);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTaint);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.effect = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTaint);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        message.effect =
            object.effect !== undefined && object.effect !== null
                ? taint_EffectFromJSON(object.effect)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        message.effect !== undefined &&
            (obj.effect = taint_EffectToJSON(message.effect));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseTaint);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        message.effect = (_c = object.effect) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Taint.$type, exports.Taint);
const baseAttachedVolume = {
    $type: "yandex.cloud.k8s.v1.AttachedVolume",
    driverName: "",
    volumeHandle: "",
};
exports.AttachedVolume = {
    $type: "yandex.cloud.k8s.v1.AttachedVolume",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.driverName !== "") {
            writer.uint32(10).string(message.driverName);
        }
        if (message.volumeHandle !== "") {
            writer.uint32(18).string(message.volumeHandle);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachedVolume);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.driverName = reader.string();
                    break;
                case 2:
                    message.volumeHandle = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachedVolume);
        message.driverName =
            object.driverName !== undefined && object.driverName !== null
                ? String(object.driverName)
                : "";
        message.volumeHandle =
            object.volumeHandle !== undefined && object.volumeHandle !== null
                ? String(object.volumeHandle)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.driverName !== undefined && (obj.driverName = message.driverName);
        message.volumeHandle !== undefined &&
            (obj.volumeHandle = message.volumeHandle);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAttachedVolume);
        message.driverName = (_a = object.driverName) !== null && _a !== void 0 ? _a : "";
        message.volumeHandle = (_b = object.volumeHandle) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedVolume.$type, exports.AttachedVolume);
const baseNodeTemplate = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate",
    name: "",
    platformId: "",
};
exports.NodeTemplate = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(106).string(message.name);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.NodeTemplate_LabelsEntry.encode({
                $type: "yandex.cloud.k8s.v1.NodeTemplate.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(122).fork()).ldelim();
        });
        if (message.platformId !== "") {
            writer.uint32(10).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            exports.ResourcesSpec.encode(message.resourcesSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.bootDiskSpec !== undefined) {
            exports.DiskSpec.encode(message.bootDiskSpec, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.NodeTemplate_MetadataEntry.encode({
                $type: "yandex.cloud.k8s.v1.NodeTemplate.MetadataEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.v4AddressSpec !== undefined) {
            exports.NodeAddressSpec.encode(message.v4AddressSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.schedulingPolicy !== undefined) {
            exports.SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.networkInterfaceSpecs) {
            exports.NetworkInterfaceSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            exports.PlacementPolicy.encode(message.placementPolicy, writer.uint32(82).fork()).ldelim();
        }
        if (message.networkSettings !== undefined) {
            exports.NodeTemplate_NetworkSettings.encode(message.networkSettings, writer.uint32(90).fork()).ldelim();
        }
        if (message.containerRuntimeSettings !== undefined) {
            exports.NodeTemplate_ContainerRuntimeSettings.encode(message.containerRuntimeSettings, writer.uint32(98).fork()).ldelim();
        }
        if (message.containerNetworkSettings !== undefined) {
            exports.NodeTemplate_ContainerNetworkSettings.encode(message.containerNetworkSettings, writer.uint32(130).fork()).ldelim();
        }
        if (message.gpuSettings !== undefined) {
            exports.GpuSettings.encode(message.gpuSettings, writer.uint32(146).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNodeTemplate);
        message.labels = {};
        message.metadata = {};
        message.networkInterfaceSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 13:
                    message.name = reader.string();
                    break;
                case 15:
                    const entry15 = exports.NodeTemplate_LabelsEntry.decode(reader, reader.uint32());
                    if (entry15.value !== undefined) {
                        message.labels[entry15.key] = entry15.value;
                    }
                    break;
                case 1:
                    message.platformId = reader.string();
                    break;
                case 2:
                    message.resourcesSpec = exports.ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.bootDiskSpec = exports.DiskSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    const entry4 = exports.NodeTemplate_MetadataEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.metadata[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.v4AddressSpec = exports.NodeAddressSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.schedulingPolicy = exports.SchedulingPolicy.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.placementPolicy = exports.PlacementPolicy.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.networkSettings = exports.NodeTemplate_NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.containerRuntimeSettings =
                        exports.NodeTemplate_ContainerRuntimeSettings.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.containerNetworkSettings =
                        exports.NodeTemplate_ContainerNetworkSettings.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.gpuSettings = exports.GpuSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseNodeTemplate);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
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
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? exports.DiskSpec.fromJSON(object.bootDiskSpec)
                : undefined;
        message.metadata = Object.entries((_b = object.metadata) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.v4AddressSpec =
            object.v4AddressSpec !== undefined && object.v4AddressSpec !== null
                ? exports.NodeAddressSpec.fromJSON(object.v4AddressSpec)
                : undefined;
        message.schedulingPolicy =
            object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
                ? exports.SchedulingPolicy.fromJSON(object.schedulingPolicy)
                : undefined;
        message.networkInterfaceSpecs = ((_c = object.networkInterfaceSpecs) !== null && _c !== void 0 ? _c : []).map((e) => exports.NetworkInterfaceSpec.fromJSON(e));
        message.placementPolicy =
            object.placementPolicy !== undefined && object.placementPolicy !== null
                ? exports.PlacementPolicy.fromJSON(object.placementPolicy)
                : undefined;
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? exports.NodeTemplate_NetworkSettings.fromJSON(object.networkSettings)
                : undefined;
        message.containerRuntimeSettings =
            object.containerRuntimeSettings !== undefined &&
                object.containerRuntimeSettings !== null
                ? exports.NodeTemplate_ContainerRuntimeSettings.fromJSON(object.containerRuntimeSettings)
                : undefined;
        message.containerNetworkSettings =
            object.containerNetworkSettings !== undefined &&
                object.containerNetworkSettings !== null
                ? exports.NodeTemplate_ContainerNetworkSettings.fromJSON(object.containerNetworkSettings)
                : undefined;
        message.gpuSettings =
            object.gpuSettings !== undefined && object.gpuSettings !== null
                ? exports.GpuSettings.fromJSON(object.gpuSettings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
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
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? exports.DiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.v4AddressSpec !== undefined &&
            (obj.v4AddressSpec = message.v4AddressSpec
                ? exports.NodeAddressSpec.toJSON(message.v4AddressSpec)
                : undefined);
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = message.schedulingPolicy
                ? exports.SchedulingPolicy.toJSON(message.schedulingPolicy)
                : undefined);
        if (message.networkInterfaceSpecs) {
            obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) => e ? exports.NetworkInterfaceSpec.toJSON(e) : undefined);
        }
        else {
            obj.networkInterfaceSpecs = [];
        }
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? exports.PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? exports.NodeTemplate_NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.containerRuntimeSettings !== undefined &&
            (obj.containerRuntimeSettings = message.containerRuntimeSettings
                ? exports.NodeTemplate_ContainerRuntimeSettings.toJSON(message.containerRuntimeSettings)
                : undefined);
        message.containerNetworkSettings !== undefined &&
            (obj.containerNetworkSettings = message.containerNetworkSettings
                ? exports.NodeTemplate_ContainerNetworkSettings.toJSON(message.containerNetworkSettings)
                : undefined);
        message.gpuSettings !== undefined &&
            (obj.gpuSettings = message.gpuSettings
                ? exports.GpuSettings.toJSON(message.gpuSettings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseNodeTemplate);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
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
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? exports.DiskSpec.fromPartial(object.bootDiskSpec)
                : undefined;
        message.metadata = Object.entries((_d = object.metadata) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.v4AddressSpec =
            object.v4AddressSpec !== undefined && object.v4AddressSpec !== null
                ? exports.NodeAddressSpec.fromPartial(object.v4AddressSpec)
                : undefined;
        message.schedulingPolicy =
            object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
                ? exports.SchedulingPolicy.fromPartial(object.schedulingPolicy)
                : undefined;
        message.networkInterfaceSpecs =
            ((_e = object.networkInterfaceSpecs) === null || _e === void 0 ? void 0 : _e.map((e) => exports.NetworkInterfaceSpec.fromPartial(e))) || [];
        message.placementPolicy =
            object.placementPolicy !== undefined && object.placementPolicy !== null
                ? exports.PlacementPolicy.fromPartial(object.placementPolicy)
                : undefined;
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? exports.NodeTemplate_NetworkSettings.fromPartial(object.networkSettings)
                : undefined;
        message.containerRuntimeSettings =
            object.containerRuntimeSettings !== undefined &&
                object.containerRuntimeSettings !== null
                ? exports.NodeTemplate_ContainerRuntimeSettings.fromPartial(object.containerRuntimeSettings)
                : undefined;
        message.containerNetworkSettings =
            object.containerNetworkSettings !== undefined &&
                object.containerNetworkSettings !== null
                ? exports.NodeTemplate_ContainerNetworkSettings.fromPartial(object.containerNetworkSettings)
                : undefined;
        message.gpuSettings =
            object.gpuSettings !== undefined && object.gpuSettings !== null
                ? exports.GpuSettings.fromPartial(object.gpuSettings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeTemplate.$type, exports.NodeTemplate);
const baseNodeTemplate_LabelsEntry = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.LabelsEntry",
    key: "",
    value: "",
};
exports.NodeTemplate_LabelsEntry = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.LabelsEntry",
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
        const message = Object.assign({}, baseNodeTemplate_LabelsEntry);
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
        const message = Object.assign({}, baseNodeTemplate_LabelsEntry);
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
        const message = Object.assign({}, baseNodeTemplate_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeTemplate_LabelsEntry.$type, exports.NodeTemplate_LabelsEntry);
const baseNodeTemplate_MetadataEntry = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.MetadataEntry",
    key: "",
    value: "",
};
exports.NodeTemplate_MetadataEntry = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.MetadataEntry",
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
        const message = Object.assign({}, baseNodeTemplate_MetadataEntry);
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
        const message = Object.assign({}, baseNodeTemplate_MetadataEntry);
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
        const message = Object.assign({}, baseNodeTemplate_MetadataEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeTemplate_MetadataEntry.$type, exports.NodeTemplate_MetadataEntry);
const baseNodeTemplate_NetworkSettings = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.NetworkSettings",
    type: 0,
};
exports.NodeTemplate_NetworkSettings = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.NetworkSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNodeTemplate_NetworkSettings);
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
        const message = Object.assign({}, baseNodeTemplate_NetworkSettings);
        message.type =
            object.type !== undefined && object.type !== null
                ? nodeTemplate_NetworkSettings_TypeFromJSON(object.type)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = nodeTemplate_NetworkSettings_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseNodeTemplate_NetworkSettings);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeTemplate_NetworkSettings.$type, exports.NodeTemplate_NetworkSettings);
const baseNodeTemplate_ContainerRuntimeSettings = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerRuntimeSettings",
    type: 0,
};
exports.NodeTemplate_ContainerRuntimeSettings = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerRuntimeSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNodeTemplate_ContainerRuntimeSettings);
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
        const message = Object.assign({}, baseNodeTemplate_ContainerRuntimeSettings);
        message.type =
            object.type !== undefined && object.type !== null
                ? nodeTemplate_ContainerRuntimeSettings_TypeFromJSON(object.type)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = nodeTemplate_ContainerRuntimeSettings_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseNodeTemplate_ContainerRuntimeSettings);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeTemplate_ContainerRuntimeSettings.$type, exports.NodeTemplate_ContainerRuntimeSettings);
const baseNodeTemplate_ContainerNetworkSettings = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerNetworkSettings",
    podMtu: 0,
};
exports.NodeTemplate_ContainerNetworkSettings = {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.ContainerNetworkSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.podMtu !== 0) {
            writer.uint32(8).int64(message.podMtu);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNodeTemplate_ContainerNetworkSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.podMtu = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseNodeTemplate_ContainerNetworkSettings);
        message.podMtu =
            object.podMtu !== undefined && object.podMtu !== null
                ? Number(object.podMtu)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.podMtu !== undefined && (obj.podMtu = Math.round(message.podMtu));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseNodeTemplate_ContainerNetworkSettings);
        message.podMtu = (_a = object.podMtu) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeTemplate_ContainerNetworkSettings.$type, exports.NodeTemplate_ContainerNetworkSettings);
const baseGpuSettings = {
    $type: "yandex.cloud.k8s.v1.GpuSettings",
    gpuClusterId: "",
    gpuEnvironment: 0,
};
exports.GpuSettings = {
    $type: "yandex.cloud.k8s.v1.GpuSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gpuClusterId !== "") {
            writer.uint32(10).string(message.gpuClusterId);
        }
        if (message.gpuEnvironment !== 0) {
            writer.uint32(16).int32(message.gpuEnvironment);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGpuSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gpuClusterId = reader.string();
                    break;
                case 2:
                    message.gpuEnvironment = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGpuSettings);
        message.gpuClusterId =
            object.gpuClusterId !== undefined && object.gpuClusterId !== null
                ? String(object.gpuClusterId)
                : "";
        message.gpuEnvironment =
            object.gpuEnvironment !== undefined && object.gpuEnvironment !== null
                ? gpuSettings_GpuEnvironmentFromJSON(object.gpuEnvironment)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gpuClusterId !== undefined &&
            (obj.gpuClusterId = message.gpuClusterId);
        message.gpuEnvironment !== undefined &&
            (obj.gpuEnvironment = gpuSettings_GpuEnvironmentToJSON(message.gpuEnvironment));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGpuSettings);
        message.gpuClusterId = (_a = object.gpuClusterId) !== null && _a !== void 0 ? _a : "";
        message.gpuEnvironment = (_b = object.gpuEnvironment) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GpuSettings.$type, exports.GpuSettings);
const baseNetworkInterfaceSpec = {
    $type: "yandex.cloud.k8s.v1.NetworkInterfaceSpec",
    subnetIds: "",
    securityGroupIds: "",
};
exports.NetworkInterfaceSpec = {
    $type: "yandex.cloud.k8s.v1.NetworkInterfaceSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.subnetIds) {
            writer.uint32(18).string(v);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            exports.NodeAddressSpec.encode(message.primaryV4AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            exports.NodeAddressSpec.encode(message.primaryV6AddressSpec, writer.uint32(34).fork()).ldelim();
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
                case 2:
                    message.subnetIds.push(reader.string());
                    break;
                case 3:
                    message.primaryV4AddressSpec = exports.NodeAddressSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.primaryV6AddressSpec = exports.NodeAddressSpec.decode(reader, reader.uint32());
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
        message.subnetIds = ((_a = object.subnetIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.primaryV4AddressSpec =
            object.primaryV4AddressSpec !== undefined &&
                object.primaryV4AddressSpec !== null
                ? exports.NodeAddressSpec.fromJSON(object.primaryV4AddressSpec)
                : undefined;
        message.primaryV6AddressSpec =
            object.primaryV6AddressSpec !== undefined &&
                object.primaryV6AddressSpec !== null
                ? exports.NodeAddressSpec.fromJSON(object.primaryV6AddressSpec)
                : undefined;
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.primaryV4AddressSpec !== undefined &&
            (obj.primaryV4AddressSpec = message.primaryV4AddressSpec
                ? exports.NodeAddressSpec.toJSON(message.primaryV4AddressSpec)
                : undefined);
        message.primaryV6AddressSpec !== undefined &&
            (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
                ? exports.NodeAddressSpec.toJSON(message.primaryV6AddressSpec)
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
        var _a, _b;
        const message = Object.assign({}, baseNetworkInterfaceSpec);
        message.subnetIds = ((_a = object.subnetIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.primaryV4AddressSpec =
            object.primaryV4AddressSpec !== undefined &&
                object.primaryV4AddressSpec !== null
                ? exports.NodeAddressSpec.fromPartial(object.primaryV4AddressSpec)
                : undefined;
        message.primaryV6AddressSpec =
            object.primaryV6AddressSpec !== undefined &&
                object.primaryV6AddressSpec !== null
                ? exports.NodeAddressSpec.fromPartial(object.primaryV6AddressSpec)
                : undefined;
        message.securityGroupIds = ((_b = object.securityGroupIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NetworkInterfaceSpec.$type, exports.NetworkInterfaceSpec);
const baseNodeAddressSpec = {
    $type: "yandex.cloud.k8s.v1.NodeAddressSpec",
};
exports.NodeAddressSpec = {
    $type: "yandex.cloud.k8s.v1.NodeAddressSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.oneToOneNatSpec !== undefined) {
            exports.OneToOneNatSpec.encode(message.oneToOneNatSpec, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.dnsRecordSpecs) {
            exports.DnsRecordSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNodeAddressSpec);
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseNodeAddressSpec);
        message.oneToOneNatSpec =
            object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
                ? exports.OneToOneNatSpec.fromJSON(object.oneToOneNatSpec)
                : undefined;
        message.dnsRecordSpecs = ((_a = object.dnsRecordSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.DnsRecordSpec.fromJSON(e));
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
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseNodeAddressSpec);
        message.oneToOneNatSpec =
            object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
                ? exports.OneToOneNatSpec.fromPartial(object.oneToOneNatSpec)
                : undefined;
        message.dnsRecordSpecs =
            ((_a = object.dnsRecordSpecs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DnsRecordSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NodeAddressSpec.$type, exports.NodeAddressSpec);
const baseDnsRecordSpec = {
    $type: "yandex.cloud.k8s.v1.DnsRecordSpec",
    fqdn: "",
    dnsZoneId: "",
    ttl: 0,
    ptr: false,
};
exports.DnsRecordSpec = {
    $type: "yandex.cloud.k8s.v1.DnsRecordSpec",
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
const baseOneToOneNatSpec = {
    $type: "yandex.cloud.k8s.v1.OneToOneNatSpec",
    ipVersion: 0,
};
exports.OneToOneNatSpec = {
    $type: "yandex.cloud.k8s.v1.OneToOneNatSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ipVersion !== 0) {
            writer.uint32(8).int32(message.ipVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOneToOneNatSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipVersion = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOneToOneNatSpec);
        message.ipVersion =
            object.ipVersion !== undefined && object.ipVersion !== null
                ? ipVersionFromJSON(object.ipVersion)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseOneToOneNatSpec);
        message.ipVersion = (_a = object.ipVersion) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OneToOneNatSpec.$type, exports.OneToOneNatSpec);
const baseResourcesSpec = {
    $type: "yandex.cloud.k8s.v1.ResourcesSpec",
    memory: 0,
    cores: 0,
    coreFraction: 0,
    gpus: 0,
};
exports.ResourcesSpec = {
    $type: "yandex.cloud.k8s.v1.ResourcesSpec",
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
const baseDiskSpec = {
    $type: "yandex.cloud.k8s.v1.DiskSpec",
    diskTypeId: "",
    diskSize: 0,
};
exports.DiskSpec = {
    $type: "yandex.cloud.k8s.v1.DiskSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskTypeId !== "") {
            writer.uint32(10).string(message.diskTypeId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(16).int64(message.diskSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDiskSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskTypeId = reader.string();
                    break;
                case 2:
                    message.diskSize = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDiskSpec);
        message.diskTypeId =
            object.diskTypeId !== undefined && object.diskTypeId !== null
                ? String(object.diskTypeId)
                : "";
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null
                ? Number(object.diskSize)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskTypeId !== undefined && (obj.diskTypeId = message.diskTypeId);
        message.diskSize !== undefined &&
            (obj.diskSize = Math.round(message.diskSize));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDiskSpec);
        message.diskTypeId = (_a = object.diskTypeId) !== null && _a !== void 0 ? _a : "";
        message.diskSize = (_b = object.diskSize) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DiskSpec.$type, exports.DiskSpec);
const baseSchedulingPolicy = {
    $type: "yandex.cloud.k8s.v1.SchedulingPolicy",
    preemptible: false,
};
exports.SchedulingPolicy = {
    $type: "yandex.cloud.k8s.v1.SchedulingPolicy",
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
const basePlacementPolicy = {
    $type: "yandex.cloud.k8s.v1.PlacementPolicy",
    placementGroupId: "",
};
exports.PlacementPolicy = {
    $type: "yandex.cloud.k8s.v1.PlacementPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== "") {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePlacementPolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePlacementPolicy);
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePlacementPolicy);
        message.placementGroupId = (_a = object.placementGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PlacementPolicy.$type, exports.PlacementPolicy);
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
