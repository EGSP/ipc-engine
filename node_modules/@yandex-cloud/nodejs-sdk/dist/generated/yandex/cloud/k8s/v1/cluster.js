"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cilium = exports.KMSProvider = exports.NetworkPolicy = exports.MasterLogging = exports.MasterMaintenancePolicy = exports.IPAllocationPolicy = exports.MasterEndpoints = exports.Location = exports.RegionalMaster = exports.ZonalMaster = exports.MasterAuth = exports.Master = exports.Cluster_LabelsEntry = exports.Cluster = exports.cilium_RoutingModeToJSON = exports.cilium_RoutingModeFromJSON = exports.Cilium_RoutingMode = exports.networkPolicy_ProviderToJSON = exports.networkPolicy_ProviderFromJSON = exports.NetworkPolicy_Provider = exports.cluster_HealthToJSON = exports.cluster_HealthFromJSON = exports.Cluster_Health = exports.cluster_StatusToJSON = exports.cluster_StatusFromJSON = exports.Cluster_Status = exports.releaseChannelToJSON = exports.releaseChannelFromJSON = exports.ReleaseChannel = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const version_1 = require("../../../../yandex/cloud/k8s/v1/version");
const maintenance_1 = require("../../../../yandex/cloud/k8s/v1/maintenance");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.k8s.v1";
var ReleaseChannel;
(function (ReleaseChannel) {
    ReleaseChannel[ReleaseChannel["RELEASE_CHANNEL_UNSPECIFIED"] = 0] = "RELEASE_CHANNEL_UNSPECIFIED";
    /**
     * RAPID - Minor updates with new functions and improvements are often added.
     * You can't disable automatic updates in this channel, but you can specify a time period for automatic updates.
     */
    ReleaseChannel[ReleaseChannel["RAPID"] = 1] = "RAPID";
    /** REGULAR - New functions and improvements are added in chunks shortly after they appear on `RAPID`. */
    ReleaseChannel[ReleaseChannel["REGULAR"] = 2] = "REGULAR";
    /** STABLE - Only updates related to bug fixes or security improvements are added. */
    ReleaseChannel[ReleaseChannel["STABLE"] = 3] = "STABLE";
    ReleaseChannel[ReleaseChannel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ReleaseChannel = exports.ReleaseChannel || (exports.ReleaseChannel = {}));
function releaseChannelFromJSON(object) {
    switch (object) {
        case 0:
        case "RELEASE_CHANNEL_UNSPECIFIED":
            return ReleaseChannel.RELEASE_CHANNEL_UNSPECIFIED;
        case 1:
        case "RAPID":
            return ReleaseChannel.RAPID;
        case 2:
        case "REGULAR":
            return ReleaseChannel.REGULAR;
        case 3:
        case "STABLE":
            return ReleaseChannel.STABLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ReleaseChannel.UNRECOGNIZED;
    }
}
exports.releaseChannelFromJSON = releaseChannelFromJSON;
function releaseChannelToJSON(object) {
    switch (object) {
        case ReleaseChannel.RELEASE_CHANNEL_UNSPECIFIED:
            return "RELEASE_CHANNEL_UNSPECIFIED";
        case ReleaseChannel.RAPID:
            return "RAPID";
        case ReleaseChannel.REGULAR:
            return "REGULAR";
        case ReleaseChannel.STABLE:
            return "STABLE";
        default:
            return "UNKNOWN";
    }
}
exports.releaseChannelToJSON = releaseChannelToJSON;
var Cluster_Status;
(function (Cluster_Status) {
    Cluster_Status[Cluster_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** PROVISIONING - Kubernetes cluster is waiting for resources to be allocated. */
    Cluster_Status[Cluster_Status["PROVISIONING"] = 1] = "PROVISIONING";
    /** RUNNING - Kubernetes cluster is running. */
    Cluster_Status[Cluster_Status["RUNNING"] = 2] = "RUNNING";
    /** RECONCILING - Kubernetes cluster is being reconciled. */
    Cluster_Status[Cluster_Status["RECONCILING"] = 3] = "RECONCILING";
    /** STOPPING - Kubernetes cluster is being stopped. */
    Cluster_Status[Cluster_Status["STOPPING"] = 4] = "STOPPING";
    /** STOPPED - Kubernetes cluster stopped. */
    Cluster_Status[Cluster_Status["STOPPED"] = 5] = "STOPPED";
    /** DELETING - Kubernetes cluster is being deleted. */
    Cluster_Status[Cluster_Status["DELETING"] = 6] = "DELETING";
    /** STARTING - Kubernetes cluster is being started. */
    Cluster_Status[Cluster_Status["STARTING"] = 7] = "STARTING";
    Cluster_Status[Cluster_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Status = exports.Cluster_Status || (exports.Cluster_Status = {}));
function cluster_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Cluster_Status.STATUS_UNSPECIFIED;
        case 1:
        case "PROVISIONING":
            return Cluster_Status.PROVISIONING;
        case 2:
        case "RUNNING":
            return Cluster_Status.RUNNING;
        case 3:
        case "RECONCILING":
            return Cluster_Status.RECONCILING;
        case 4:
        case "STOPPING":
            return Cluster_Status.STOPPING;
        case 5:
        case "STOPPED":
            return Cluster_Status.STOPPED;
        case 6:
        case "DELETING":
            return Cluster_Status.DELETING;
        case 7:
        case "STARTING":
            return Cluster_Status.STARTING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Cluster_Status.UNRECOGNIZED;
    }
}
exports.cluster_StatusFromJSON = cluster_StatusFromJSON;
function cluster_StatusToJSON(object) {
    switch (object) {
        case Cluster_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Cluster_Status.PROVISIONING:
            return "PROVISIONING";
        case Cluster_Status.RUNNING:
            return "RUNNING";
        case Cluster_Status.RECONCILING:
            return "RECONCILING";
        case Cluster_Status.STOPPING:
            return "STOPPING";
        case Cluster_Status.STOPPED:
            return "STOPPED";
        case Cluster_Status.DELETING:
            return "DELETING";
        case Cluster_Status.STARTING:
            return "STARTING";
        default:
            return "UNKNOWN";
    }
}
exports.cluster_StatusToJSON = cluster_StatusToJSON;
var Cluster_Health;
(function (Cluster_Health) {
    Cluster_Health[Cluster_Health["HEALTH_UNSPECIFIED"] = 0] = "HEALTH_UNSPECIFIED";
    /** HEALTHY - Kubernetes cluster is alive and well. */
    Cluster_Health[Cluster_Health["HEALTHY"] = 1] = "HEALTHY";
    /** UNHEALTHY - Kubernetes cluster is inoperable. */
    Cluster_Health[Cluster_Health["UNHEALTHY"] = 2] = "UNHEALTHY";
    Cluster_Health[Cluster_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Health = exports.Cluster_Health || (exports.Cluster_Health = {}));
function cluster_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case "HEALTH_UNSPECIFIED":
            return Cluster_Health.HEALTH_UNSPECIFIED;
        case 1:
        case "HEALTHY":
            return Cluster_Health.HEALTHY;
        case 2:
        case "UNHEALTHY":
            return Cluster_Health.UNHEALTHY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Cluster_Health.UNRECOGNIZED;
    }
}
exports.cluster_HealthFromJSON = cluster_HealthFromJSON;
function cluster_HealthToJSON(object) {
    switch (object) {
        case Cluster_Health.HEALTH_UNSPECIFIED:
            return "HEALTH_UNSPECIFIED";
        case Cluster_Health.HEALTHY:
            return "HEALTHY";
        case Cluster_Health.UNHEALTHY:
            return "UNHEALTHY";
        default:
            return "UNKNOWN";
    }
}
exports.cluster_HealthToJSON = cluster_HealthToJSON;
var NetworkPolicy_Provider;
(function (NetworkPolicy_Provider) {
    NetworkPolicy_Provider[NetworkPolicy_Provider["PROVIDER_UNSPECIFIED"] = 0] = "PROVIDER_UNSPECIFIED";
    NetworkPolicy_Provider[NetworkPolicy_Provider["CALICO"] = 1] = "CALICO";
    NetworkPolicy_Provider[NetworkPolicy_Provider["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NetworkPolicy_Provider = exports.NetworkPolicy_Provider || (exports.NetworkPolicy_Provider = {}));
function networkPolicy_ProviderFromJSON(object) {
    switch (object) {
        case 0:
        case "PROVIDER_UNSPECIFIED":
            return NetworkPolicy_Provider.PROVIDER_UNSPECIFIED;
        case 1:
        case "CALICO":
            return NetworkPolicy_Provider.CALICO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NetworkPolicy_Provider.UNRECOGNIZED;
    }
}
exports.networkPolicy_ProviderFromJSON = networkPolicy_ProviderFromJSON;
function networkPolicy_ProviderToJSON(object) {
    switch (object) {
        case NetworkPolicy_Provider.PROVIDER_UNSPECIFIED:
            return "PROVIDER_UNSPECIFIED";
        case NetworkPolicy_Provider.CALICO:
            return "CALICO";
        default:
            return "UNKNOWN";
    }
}
exports.networkPolicy_ProviderToJSON = networkPolicy_ProviderToJSON;
var Cilium_RoutingMode;
(function (Cilium_RoutingMode) {
    Cilium_RoutingMode[Cilium_RoutingMode["ROUTING_MODE_UNSPECIFIED"] = 0] = "ROUTING_MODE_UNSPECIFIED";
    Cilium_RoutingMode[Cilium_RoutingMode["TUNNEL"] = 1] = "TUNNEL";
    Cilium_RoutingMode[Cilium_RoutingMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cilium_RoutingMode = exports.Cilium_RoutingMode || (exports.Cilium_RoutingMode = {}));
function cilium_RoutingModeFromJSON(object) {
    switch (object) {
        case 0:
        case "ROUTING_MODE_UNSPECIFIED":
            return Cilium_RoutingMode.ROUTING_MODE_UNSPECIFIED;
        case 1:
        case "TUNNEL":
            return Cilium_RoutingMode.TUNNEL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Cilium_RoutingMode.UNRECOGNIZED;
    }
}
exports.cilium_RoutingModeFromJSON = cilium_RoutingModeFromJSON;
function cilium_RoutingModeToJSON(object) {
    switch (object) {
        case Cilium_RoutingMode.ROUTING_MODE_UNSPECIFIED:
            return "ROUTING_MODE_UNSPECIFIED";
        case Cilium_RoutingMode.TUNNEL:
            return "TUNNEL";
        default:
            return "UNKNOWN";
    }
}
exports.cilium_RoutingModeToJSON = cilium_RoutingModeToJSON;
const baseCluster = {
    $type: "yandex.cloud.k8s.v1.Cluster",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
    health: 0,
    networkId: "",
    serviceAccountId: "",
    nodeServiceAccountId: "",
    releaseChannel: 0,
    logGroupId: "",
};
exports.Cluster = {
    $type: "yandex.cloud.k8s.v1.Cluster",
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
            exports.Cluster_LabelsEntry.encode({
                $type: "yandex.cloud.k8s.v1.Cluster.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.health !== 0) {
            writer.uint32(64).int32(message.health);
        }
        if (message.networkId !== "") {
            writer.uint32(74).string(message.networkId);
        }
        if (message.master !== undefined) {
            exports.Master.encode(message.master, writer.uint32(82).fork()).ldelim();
        }
        if (message.ipAllocationPolicy !== undefined) {
            exports.IPAllocationPolicy.encode(message.ipAllocationPolicy, writer.uint32(90).fork()).ldelim();
        }
        if (message.gatewayIpv4Address !== undefined) {
            writer.uint32(98).string(message.gatewayIpv4Address);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(106).string(message.serviceAccountId);
        }
        if (message.nodeServiceAccountId !== "") {
            writer.uint32(114).string(message.nodeServiceAccountId);
        }
        if (message.releaseChannel !== 0) {
            writer.uint32(120).int32(message.releaseChannel);
        }
        if (message.networkPolicy !== undefined) {
            exports.NetworkPolicy.encode(message.networkPolicy, writer.uint32(130).fork()).ldelim();
        }
        if (message.kmsProvider !== undefined) {
            exports.KMSProvider.encode(message.kmsProvider, writer.uint32(138).fork()).ldelim();
        }
        if (message.logGroupId !== "") {
            writer.uint32(146).string(message.logGroupId);
        }
        if (message.cilium !== undefined) {
            exports.Cilium.encode(message.cilium, writer.uint32(154).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCluster);
        message.labels = {};
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
                    const entry6 = exports.Cluster_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.health = reader.int32();
                    break;
                case 9:
                    message.networkId = reader.string();
                    break;
                case 10:
                    message.master = exports.Master.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.ipAllocationPolicy = exports.IPAllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.gatewayIpv4Address = reader.string();
                    break;
                case 13:
                    message.serviceAccountId = reader.string();
                    break;
                case 14:
                    message.nodeServiceAccountId = reader.string();
                    break;
                case 15:
                    message.releaseChannel = reader.int32();
                    break;
                case 16:
                    message.networkPolicy = exports.NetworkPolicy.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.kmsProvider = exports.KMSProvider.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.logGroupId = reader.string();
                    break;
                case 19:
                    message.cilium = exports.Cilium.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCluster);
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
        message.status =
            object.status !== undefined && object.status !== null
                ? cluster_StatusFromJSON(object.status)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? cluster_HealthFromJSON(object.health)
                : 0;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.master =
            object.master !== undefined && object.master !== null
                ? exports.Master.fromJSON(object.master)
                : undefined;
        message.ipAllocationPolicy =
            object.ipAllocationPolicy !== undefined &&
                object.ipAllocationPolicy !== null
                ? exports.IPAllocationPolicy.fromJSON(object.ipAllocationPolicy)
                : undefined;
        message.gatewayIpv4Address =
            object.gatewayIpv4Address !== undefined &&
                object.gatewayIpv4Address !== null
                ? String(object.gatewayIpv4Address)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.nodeServiceAccountId =
            object.nodeServiceAccountId !== undefined &&
                object.nodeServiceAccountId !== null
                ? String(object.nodeServiceAccountId)
                : "";
        message.releaseChannel =
            object.releaseChannel !== undefined && object.releaseChannel !== null
                ? releaseChannelFromJSON(object.releaseChannel)
                : 0;
        message.networkPolicy =
            object.networkPolicy !== undefined && object.networkPolicy !== null
                ? exports.NetworkPolicy.fromJSON(object.networkPolicy)
                : undefined;
        message.kmsProvider =
            object.kmsProvider !== undefined && object.kmsProvider !== null
                ? exports.KMSProvider.fromJSON(object.kmsProvider)
                : undefined;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        message.cilium =
            object.cilium !== undefined && object.cilium !== null
                ? exports.Cilium.fromJSON(object.cilium)
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
        message.status !== undefined &&
            (obj.status = cluster_StatusToJSON(message.status));
        message.health !== undefined &&
            (obj.health = cluster_HealthToJSON(message.health));
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.master !== undefined &&
            (obj.master = message.master ? exports.Master.toJSON(message.master) : undefined);
        message.ipAllocationPolicy !== undefined &&
            (obj.ipAllocationPolicy = message.ipAllocationPolicy
                ? exports.IPAllocationPolicy.toJSON(message.ipAllocationPolicy)
                : undefined);
        message.gatewayIpv4Address !== undefined &&
            (obj.gatewayIpv4Address = message.gatewayIpv4Address);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.nodeServiceAccountId !== undefined &&
            (obj.nodeServiceAccountId = message.nodeServiceAccountId);
        message.releaseChannel !== undefined &&
            (obj.releaseChannel = releaseChannelToJSON(message.releaseChannel));
        message.networkPolicy !== undefined &&
            (obj.networkPolicy = message.networkPolicy
                ? exports.NetworkPolicy.toJSON(message.networkPolicy)
                : undefined);
        message.kmsProvider !== undefined &&
            (obj.kmsProvider = message.kmsProvider
                ? exports.KMSProvider.toJSON(message.kmsProvider)
                : undefined);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.cilium !== undefined &&
            (obj.cilium = message.cilium ? exports.Cilium.toJSON(message.cilium) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const message = Object.assign({}, baseCluster);
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
        message.status = (_g = object.status) !== null && _g !== void 0 ? _g : 0;
        message.health = (_h = object.health) !== null && _h !== void 0 ? _h : 0;
        message.networkId = (_j = object.networkId) !== null && _j !== void 0 ? _j : "";
        message.master =
            object.master !== undefined && object.master !== null
                ? exports.Master.fromPartial(object.master)
                : undefined;
        message.ipAllocationPolicy =
            object.ipAllocationPolicy !== undefined &&
                object.ipAllocationPolicy !== null
                ? exports.IPAllocationPolicy.fromPartial(object.ipAllocationPolicy)
                : undefined;
        message.gatewayIpv4Address = (_k = object.gatewayIpv4Address) !== null && _k !== void 0 ? _k : undefined;
        message.serviceAccountId = (_l = object.serviceAccountId) !== null && _l !== void 0 ? _l : "";
        message.nodeServiceAccountId = (_m = object.nodeServiceAccountId) !== null && _m !== void 0 ? _m : "";
        message.releaseChannel = (_o = object.releaseChannel) !== null && _o !== void 0 ? _o : 0;
        message.networkPolicy =
            object.networkPolicy !== undefined && object.networkPolicy !== null
                ? exports.NetworkPolicy.fromPartial(object.networkPolicy)
                : undefined;
        message.kmsProvider =
            object.kmsProvider !== undefined && object.kmsProvider !== null
                ? exports.KMSProvider.fromPartial(object.kmsProvider)
                : undefined;
        message.logGroupId = (_p = object.logGroupId) !== null && _p !== void 0 ? _p : "";
        message.cilium =
            object.cilium !== undefined && object.cilium !== null
                ? exports.Cilium.fromPartial(object.cilium)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Cluster.$type, exports.Cluster);
const baseCluster_LabelsEntry = {
    $type: "yandex.cloud.k8s.v1.Cluster.LabelsEntry",
    key: "",
    value: "",
};
exports.Cluster_LabelsEntry = {
    $type: "yandex.cloud.k8s.v1.Cluster.LabelsEntry",
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
        const message = Object.assign({}, baseCluster_LabelsEntry);
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
        const message = Object.assign({}, baseCluster_LabelsEntry);
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
        const message = Object.assign({}, baseCluster_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Cluster_LabelsEntry.$type, exports.Cluster_LabelsEntry);
const baseMaster = {
    $type: "yandex.cloud.k8s.v1.Master",
    etcdClusterSize: 0,
    version: "",
    securityGroupIds: "",
};
exports.Master = {
    $type: "yandex.cloud.k8s.v1.Master",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zonalMaster !== undefined) {
            exports.ZonalMaster.encode(message.zonalMaster, writer.uint32(10).fork()).ldelim();
        }
        if (message.regionalMaster !== undefined) {
            exports.RegionalMaster.encode(message.regionalMaster, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.locations) {
            exports.Location.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.etcdClusterSize !== 0) {
            writer.uint32(88).int64(message.etcdClusterSize);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.endpoints !== undefined) {
            exports.MasterEndpoints.encode(message.endpoints, writer.uint32(26).fork()).ldelim();
        }
        if (message.masterAuth !== undefined) {
            exports.MasterAuth.encode(message.masterAuth, writer.uint32(34).fork()).ldelim();
        }
        if (message.versionInfo !== undefined) {
            version_1.VersionInfo.encode(message.versionInfo, writer.uint32(42).fork()).ldelim();
        }
        if (message.maintenancePolicy !== undefined) {
            exports.MasterMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v);
        }
        if (message.masterLogging !== undefined) {
            exports.MasterLogging.encode(message.masterLogging, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMaster);
        message.locations = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zonalMaster = exports.ZonalMaster.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.regionalMaster = exports.RegionalMaster.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.locations.push(exports.Location.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.etcdClusterSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.endpoints = exports.MasterEndpoints.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.masterAuth = exports.MasterAuth.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.versionInfo = version_1.VersionInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.maintenancePolicy = exports.MasterMaintenancePolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 9:
                    message.masterLogging = exports.MasterLogging.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMaster);
        message.zonalMaster =
            object.zonalMaster !== undefined && object.zonalMaster !== null
                ? exports.ZonalMaster.fromJSON(object.zonalMaster)
                : undefined;
        message.regionalMaster =
            object.regionalMaster !== undefined && object.regionalMaster !== null
                ? exports.RegionalMaster.fromJSON(object.regionalMaster)
                : undefined;
        message.locations = ((_a = object.locations) !== null && _a !== void 0 ? _a : []).map((e) => exports.Location.fromJSON(e));
        message.etcdClusterSize =
            object.etcdClusterSize !== undefined && object.etcdClusterSize !== null
                ? Number(object.etcdClusterSize)
                : 0;
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.endpoints =
            object.endpoints !== undefined && object.endpoints !== null
                ? exports.MasterEndpoints.fromJSON(object.endpoints)
                : undefined;
        message.masterAuth =
            object.masterAuth !== undefined && object.masterAuth !== null
                ? exports.MasterAuth.fromJSON(object.masterAuth)
                : undefined;
        message.versionInfo =
            object.versionInfo !== undefined && object.versionInfo !== null
                ? version_1.VersionInfo.fromJSON(object.versionInfo)
                : undefined;
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined &&
                object.maintenancePolicy !== null
                ? exports.MasterMaintenancePolicy.fromJSON(object.maintenancePolicy)
                : undefined;
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.masterLogging =
            object.masterLogging !== undefined && object.masterLogging !== null
                ? exports.MasterLogging.fromJSON(object.masterLogging)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zonalMaster !== undefined &&
            (obj.zonalMaster = message.zonalMaster
                ? exports.ZonalMaster.toJSON(message.zonalMaster)
                : undefined);
        message.regionalMaster !== undefined &&
            (obj.regionalMaster = message.regionalMaster
                ? exports.RegionalMaster.toJSON(message.regionalMaster)
                : undefined);
        if (message.locations) {
            obj.locations = message.locations.map((e) => e ? exports.Location.toJSON(e) : undefined);
        }
        else {
            obj.locations = [];
        }
        message.etcdClusterSize !== undefined &&
            (obj.etcdClusterSize = Math.round(message.etcdClusterSize));
        message.version !== undefined && (obj.version = message.version);
        message.endpoints !== undefined &&
            (obj.endpoints = message.endpoints
                ? exports.MasterEndpoints.toJSON(message.endpoints)
                : undefined);
        message.masterAuth !== undefined &&
            (obj.masterAuth = message.masterAuth
                ? exports.MasterAuth.toJSON(message.masterAuth)
                : undefined);
        message.versionInfo !== undefined &&
            (obj.versionInfo = message.versionInfo
                ? version_1.VersionInfo.toJSON(message.versionInfo)
                : undefined);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? exports.MasterMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.masterLogging !== undefined &&
            (obj.masterLogging = message.masterLogging
                ? exports.MasterLogging.toJSON(message.masterLogging)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseMaster);
        message.zonalMaster =
            object.zonalMaster !== undefined && object.zonalMaster !== null
                ? exports.ZonalMaster.fromPartial(object.zonalMaster)
                : undefined;
        message.regionalMaster =
            object.regionalMaster !== undefined && object.regionalMaster !== null
                ? exports.RegionalMaster.fromPartial(object.regionalMaster)
                : undefined;
        message.locations =
            ((_a = object.locations) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Location.fromPartial(e))) || [];
        message.etcdClusterSize = (_b = object.etcdClusterSize) !== null && _b !== void 0 ? _b : 0;
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "";
        message.endpoints =
            object.endpoints !== undefined && object.endpoints !== null
                ? exports.MasterEndpoints.fromPartial(object.endpoints)
                : undefined;
        message.masterAuth =
            object.masterAuth !== undefined && object.masterAuth !== null
                ? exports.MasterAuth.fromPartial(object.masterAuth)
                : undefined;
        message.versionInfo =
            object.versionInfo !== undefined && object.versionInfo !== null
                ? version_1.VersionInfo.fromPartial(object.versionInfo)
                : undefined;
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined &&
                object.maintenancePolicy !== null
                ? exports.MasterMaintenancePolicy.fromPartial(object.maintenancePolicy)
                : undefined;
        message.securityGroupIds = ((_d = object.securityGroupIds) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.masterLogging =
            object.masterLogging !== undefined && object.masterLogging !== null
                ? exports.MasterLogging.fromPartial(object.masterLogging)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Master.$type, exports.Master);
const baseMasterAuth = {
    $type: "yandex.cloud.k8s.v1.MasterAuth",
    clusterCaCertificate: "",
};
exports.MasterAuth = {
    $type: "yandex.cloud.k8s.v1.MasterAuth",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterCaCertificate !== "") {
            writer.uint32(10).string(message.clusterCaCertificate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMasterAuth);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterCaCertificate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMasterAuth);
        message.clusterCaCertificate =
            object.clusterCaCertificate !== undefined &&
                object.clusterCaCertificate !== null
                ? String(object.clusterCaCertificate)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterCaCertificate !== undefined &&
            (obj.clusterCaCertificate = message.clusterCaCertificate);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMasterAuth);
        message.clusterCaCertificate = (_a = object.clusterCaCertificate) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MasterAuth.$type, exports.MasterAuth);
const baseZonalMaster = {
    $type: "yandex.cloud.k8s.v1.ZonalMaster",
    zoneId: "",
    internalV4Address: "",
    externalV4Address: "",
};
exports.ZonalMaster = {
    $type: "yandex.cloud.k8s.v1.ZonalMaster",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== "") {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.internalV4Address !== "") {
            writer.uint32(18).string(message.internalV4Address);
        }
        if (message.externalV4Address !== "") {
            writer.uint32(26).string(message.externalV4Address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseZonalMaster);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.internalV4Address = reader.string();
                    break;
                case 3:
                    message.externalV4Address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseZonalMaster);
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.internalV4Address =
            object.internalV4Address !== undefined &&
                object.internalV4Address !== null
                ? String(object.internalV4Address)
                : "";
        message.externalV4Address =
            object.externalV4Address !== undefined &&
                object.externalV4Address !== null
                ? String(object.externalV4Address)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.internalV4Address !== undefined &&
            (obj.internalV4Address = message.internalV4Address);
        message.externalV4Address !== undefined &&
            (obj.externalV4Address = message.externalV4Address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseZonalMaster);
        message.zoneId = (_a = object.zoneId) !== null && _a !== void 0 ? _a : "";
        message.internalV4Address = (_b = object.internalV4Address) !== null && _b !== void 0 ? _b : "";
        message.externalV4Address = (_c = object.externalV4Address) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ZonalMaster.$type, exports.ZonalMaster);
const baseRegionalMaster = {
    $type: "yandex.cloud.k8s.v1.RegionalMaster",
    regionId: "",
    internalV4Address: "",
    externalV4Address: "",
    externalV6Address: "",
};
exports.RegionalMaster = {
    $type: "yandex.cloud.k8s.v1.RegionalMaster",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.regionId !== "") {
            writer.uint32(10).string(message.regionId);
        }
        if (message.internalV4Address !== "") {
            writer.uint32(18).string(message.internalV4Address);
        }
        if (message.externalV4Address !== "") {
            writer.uint32(26).string(message.externalV4Address);
        }
        if (message.externalV6Address !== "") {
            writer.uint32(34).string(message.externalV6Address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRegionalMaster);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.regionId = reader.string();
                    break;
                case 2:
                    message.internalV4Address = reader.string();
                    break;
                case 3:
                    message.externalV4Address = reader.string();
                    break;
                case 4:
                    message.externalV6Address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRegionalMaster);
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : "";
        message.internalV4Address =
            object.internalV4Address !== undefined &&
                object.internalV4Address !== null
                ? String(object.internalV4Address)
                : "";
        message.externalV4Address =
            object.externalV4Address !== undefined &&
                object.externalV4Address !== null
                ? String(object.externalV4Address)
                : "";
        message.externalV6Address =
            object.externalV6Address !== undefined &&
                object.externalV6Address !== null
                ? String(object.externalV6Address)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.internalV4Address !== undefined &&
            (obj.internalV4Address = message.internalV4Address);
        message.externalV4Address !== undefined &&
            (obj.externalV4Address = message.externalV4Address);
        message.externalV6Address !== undefined &&
            (obj.externalV6Address = message.externalV6Address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseRegionalMaster);
        message.regionId = (_a = object.regionId) !== null && _a !== void 0 ? _a : "";
        message.internalV4Address = (_b = object.internalV4Address) !== null && _b !== void 0 ? _b : "";
        message.externalV4Address = (_c = object.externalV4Address) !== null && _c !== void 0 ? _c : "";
        message.externalV6Address = (_d = object.externalV6Address) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RegionalMaster.$type, exports.RegionalMaster);
const baseLocation = {
    $type: "yandex.cloud.k8s.v1.Location",
    zoneId: "",
    subnetId: "",
};
exports.Location = {
    $type: "yandex.cloud.k8s.v1.Location",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== "") {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.subnetId !== "") {
            writer.uint32(18).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLocation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLocation);
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLocation);
        message.zoneId = (_a = object.zoneId) !== null && _a !== void 0 ? _a : "";
        message.subnetId = (_b = object.subnetId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Location.$type, exports.Location);
const baseMasterEndpoints = {
    $type: "yandex.cloud.k8s.v1.MasterEndpoints",
    internalV4Endpoint: "",
    externalV4Endpoint: "",
    externalV6Endpoint: "",
};
exports.MasterEndpoints = {
    $type: "yandex.cloud.k8s.v1.MasterEndpoints",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.internalV4Endpoint !== "") {
            writer.uint32(10).string(message.internalV4Endpoint);
        }
        if (message.externalV4Endpoint !== "") {
            writer.uint32(18).string(message.externalV4Endpoint);
        }
        if (message.externalV6Endpoint !== "") {
            writer.uint32(26).string(message.externalV6Endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMasterEndpoints);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.internalV4Endpoint = reader.string();
                    break;
                case 2:
                    message.externalV4Endpoint = reader.string();
                    break;
                case 3:
                    message.externalV6Endpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMasterEndpoints);
        message.internalV4Endpoint =
            object.internalV4Endpoint !== undefined &&
                object.internalV4Endpoint !== null
                ? String(object.internalV4Endpoint)
                : "";
        message.externalV4Endpoint =
            object.externalV4Endpoint !== undefined &&
                object.externalV4Endpoint !== null
                ? String(object.externalV4Endpoint)
                : "";
        message.externalV6Endpoint =
            object.externalV6Endpoint !== undefined &&
                object.externalV6Endpoint !== null
                ? String(object.externalV6Endpoint)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.internalV4Endpoint !== undefined &&
            (obj.internalV4Endpoint = message.internalV4Endpoint);
        message.externalV4Endpoint !== undefined &&
            (obj.externalV4Endpoint = message.externalV4Endpoint);
        message.externalV6Endpoint !== undefined &&
            (obj.externalV6Endpoint = message.externalV6Endpoint);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMasterEndpoints);
        message.internalV4Endpoint = (_a = object.internalV4Endpoint) !== null && _a !== void 0 ? _a : "";
        message.externalV4Endpoint = (_b = object.externalV4Endpoint) !== null && _b !== void 0 ? _b : "";
        message.externalV6Endpoint = (_c = object.externalV6Endpoint) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MasterEndpoints.$type, exports.MasterEndpoints);
const baseIPAllocationPolicy = {
    $type: "yandex.cloud.k8s.v1.IPAllocationPolicy",
    clusterIpv4CidrBlock: "",
    nodeIpv4CidrMaskSize: 0,
    serviceIpv4CidrBlock: "",
    clusterIpv6CidrBlock: "",
    serviceIpv6CidrBlock: "",
};
exports.IPAllocationPolicy = {
    $type: "yandex.cloud.k8s.v1.IPAllocationPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterIpv4CidrBlock !== "") {
            writer.uint32(10).string(message.clusterIpv4CidrBlock);
        }
        if (message.nodeIpv4CidrMaskSize !== 0) {
            writer.uint32(40).int64(message.nodeIpv4CidrMaskSize);
        }
        if (message.serviceIpv4CidrBlock !== "") {
            writer.uint32(18).string(message.serviceIpv4CidrBlock);
        }
        if (message.clusterIpv6CidrBlock !== "") {
            writer.uint32(50).string(message.clusterIpv6CidrBlock);
        }
        if (message.serviceIpv6CidrBlock !== "") {
            writer.uint32(58).string(message.serviceIpv6CidrBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseIPAllocationPolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterIpv4CidrBlock = reader.string();
                    break;
                case 5:
                    message.nodeIpv4CidrMaskSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.serviceIpv4CidrBlock = reader.string();
                    break;
                case 6:
                    message.clusterIpv6CidrBlock = reader.string();
                    break;
                case 7:
                    message.serviceIpv6CidrBlock = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseIPAllocationPolicy);
        message.clusterIpv4CidrBlock =
            object.clusterIpv4CidrBlock !== undefined &&
                object.clusterIpv4CidrBlock !== null
                ? String(object.clusterIpv4CidrBlock)
                : "";
        message.nodeIpv4CidrMaskSize =
            object.nodeIpv4CidrMaskSize !== undefined &&
                object.nodeIpv4CidrMaskSize !== null
                ? Number(object.nodeIpv4CidrMaskSize)
                : 0;
        message.serviceIpv4CidrBlock =
            object.serviceIpv4CidrBlock !== undefined &&
                object.serviceIpv4CidrBlock !== null
                ? String(object.serviceIpv4CidrBlock)
                : "";
        message.clusterIpv6CidrBlock =
            object.clusterIpv6CidrBlock !== undefined &&
                object.clusterIpv6CidrBlock !== null
                ? String(object.clusterIpv6CidrBlock)
                : "";
        message.serviceIpv6CidrBlock =
            object.serviceIpv6CidrBlock !== undefined &&
                object.serviceIpv6CidrBlock !== null
                ? String(object.serviceIpv6CidrBlock)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterIpv4CidrBlock !== undefined &&
            (obj.clusterIpv4CidrBlock = message.clusterIpv4CidrBlock);
        message.nodeIpv4CidrMaskSize !== undefined &&
            (obj.nodeIpv4CidrMaskSize = Math.round(message.nodeIpv4CidrMaskSize));
        message.serviceIpv4CidrBlock !== undefined &&
            (obj.serviceIpv4CidrBlock = message.serviceIpv4CidrBlock);
        message.clusterIpv6CidrBlock !== undefined &&
            (obj.clusterIpv6CidrBlock = message.clusterIpv6CidrBlock);
        message.serviceIpv6CidrBlock !== undefined &&
            (obj.serviceIpv6CidrBlock = message.serviceIpv6CidrBlock);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseIPAllocationPolicy);
        message.clusterIpv4CidrBlock = (_a = object.clusterIpv4CidrBlock) !== null && _a !== void 0 ? _a : "";
        message.nodeIpv4CidrMaskSize = (_b = object.nodeIpv4CidrMaskSize) !== null && _b !== void 0 ? _b : 0;
        message.serviceIpv4CidrBlock = (_c = object.serviceIpv4CidrBlock) !== null && _c !== void 0 ? _c : "";
        message.clusterIpv6CidrBlock = (_d = object.clusterIpv6CidrBlock) !== null && _d !== void 0 ? _d : "";
        message.serviceIpv6CidrBlock = (_e = object.serviceIpv6CidrBlock) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.IPAllocationPolicy.$type, exports.IPAllocationPolicy);
const baseMasterMaintenancePolicy = {
    $type: "yandex.cloud.k8s.v1.MasterMaintenancePolicy",
    autoUpgrade: false,
};
exports.MasterMaintenancePolicy = {
    $type: "yandex.cloud.k8s.v1.MasterMaintenancePolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.autoUpgrade === true) {
            writer.uint32(8).bool(message.autoUpgrade);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMasterMaintenancePolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.autoUpgrade = reader.bool();
                    break;
                case 2:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMasterMaintenancePolicy);
        message.autoUpgrade =
            object.autoUpgrade !== undefined && object.autoUpgrade !== null
                ? Boolean(object.autoUpgrade)
                : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.autoUpgrade !== undefined &&
            (obj.autoUpgrade = message.autoUpgrade);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMasterMaintenancePolicy);
        message.autoUpgrade = (_a = object.autoUpgrade) !== null && _a !== void 0 ? _a : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MasterMaintenancePolicy.$type, exports.MasterMaintenancePolicy);
const baseMasterLogging = {
    $type: "yandex.cloud.k8s.v1.MasterLogging",
    enabled: false,
    auditEnabled: false,
    clusterAutoscalerEnabled: false,
    kubeApiserverEnabled: false,
    eventsEnabled: false,
};
exports.MasterLogging = {
    $type: "yandex.cloud.k8s.v1.MasterLogging",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.logGroupId !== undefined) {
            writer.uint32(18).string(message.logGroupId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(26).string(message.folderId);
        }
        if (message.auditEnabled === true) {
            writer.uint32(32).bool(message.auditEnabled);
        }
        if (message.clusterAutoscalerEnabled === true) {
            writer.uint32(40).bool(message.clusterAutoscalerEnabled);
        }
        if (message.kubeApiserverEnabled === true) {
            writer.uint32(48).bool(message.kubeApiserverEnabled);
        }
        if (message.eventsEnabled === true) {
            writer.uint32(56).bool(message.eventsEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMasterLogging);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.logGroupId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.auditEnabled = reader.bool();
                    break;
                case 5:
                    message.clusterAutoscalerEnabled = reader.bool();
                    break;
                case 6:
                    message.kubeApiserverEnabled = reader.bool();
                    break;
                case 7:
                    message.eventsEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMasterLogging);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.auditEnabled =
            object.auditEnabled !== undefined && object.auditEnabled !== null
                ? Boolean(object.auditEnabled)
                : false;
        message.clusterAutoscalerEnabled =
            object.clusterAutoscalerEnabled !== undefined &&
                object.clusterAutoscalerEnabled !== null
                ? Boolean(object.clusterAutoscalerEnabled)
                : false;
        message.kubeApiserverEnabled =
            object.kubeApiserverEnabled !== undefined &&
                object.kubeApiserverEnabled !== null
                ? Boolean(object.kubeApiserverEnabled)
                : false;
        message.eventsEnabled =
            object.eventsEnabled !== undefined && object.eventsEnabled !== null
                ? Boolean(object.eventsEnabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.auditEnabled !== undefined &&
            (obj.auditEnabled = message.auditEnabled);
        message.clusterAutoscalerEnabled !== undefined &&
            (obj.clusterAutoscalerEnabled = message.clusterAutoscalerEnabled);
        message.kubeApiserverEnabled !== undefined &&
            (obj.kubeApiserverEnabled = message.kubeApiserverEnabled);
        message.eventsEnabled !== undefined &&
            (obj.eventsEnabled = message.eventsEnabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseMasterLogging);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.logGroupId = (_b = object.logGroupId) !== null && _b !== void 0 ? _b : undefined;
        message.folderId = (_c = object.folderId) !== null && _c !== void 0 ? _c : undefined;
        message.auditEnabled = (_d = object.auditEnabled) !== null && _d !== void 0 ? _d : false;
        message.clusterAutoscalerEnabled = (_e = object.clusterAutoscalerEnabled) !== null && _e !== void 0 ? _e : false;
        message.kubeApiserverEnabled = (_f = object.kubeApiserverEnabled) !== null && _f !== void 0 ? _f : false;
        message.eventsEnabled = (_g = object.eventsEnabled) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MasterLogging.$type, exports.MasterLogging);
const baseNetworkPolicy = {
    $type: "yandex.cloud.k8s.v1.NetworkPolicy",
    provider: 0,
};
exports.NetworkPolicy = {
    $type: "yandex.cloud.k8s.v1.NetworkPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.provider !== 0) {
            writer.uint32(8).int32(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNetworkPolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.provider = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseNetworkPolicy);
        message.provider =
            object.provider !== undefined && object.provider !== null
                ? networkPolicy_ProviderFromJSON(object.provider)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.provider !== undefined &&
            (obj.provider = networkPolicy_ProviderToJSON(message.provider));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseNetworkPolicy);
        message.provider = (_a = object.provider) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NetworkPolicy.$type, exports.NetworkPolicy);
const baseKMSProvider = {
    $type: "yandex.cloud.k8s.v1.KMSProvider",
    keyId: "",
};
exports.KMSProvider = {
    $type: "yandex.cloud.k8s.v1.KMSProvider",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseKMSProvider);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseKMSProvider);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseKMSProvider);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.KMSProvider.$type, exports.KMSProvider);
const baseCilium = {
    $type: "yandex.cloud.k8s.v1.Cilium",
    routingMode: 0,
};
exports.Cilium = {
    $type: "yandex.cloud.k8s.v1.Cilium",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routingMode !== 0) {
            writer.uint32(8).int32(message.routingMode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCilium);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingMode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCilium);
        message.routingMode =
            object.routingMode !== undefined && object.routingMode !== null
                ? cilium_RoutingModeFromJSON(object.routingMode)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routingMode !== undefined &&
            (obj.routingMode = cilium_RoutingModeToJSON(message.routingMode));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCilium);
        message.routingMode = (_a = object.routingMode) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Cilium.$type, exports.Cilium);
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
