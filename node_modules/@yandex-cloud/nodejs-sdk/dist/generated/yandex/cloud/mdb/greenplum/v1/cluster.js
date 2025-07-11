"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudStorage = exports.RestoreResources = exports.GreenplumRestoreConfig = exports.Access = exports.GreenplumConfig = exports.Monitoring = exports.ClusterConfigSet = exports.Cluster_LabelsEntry = exports.Cluster = exports.cluster_StatusToJSON = exports.cluster_StatusFromJSON = exports.Cluster_Status = exports.cluster_HealthToJSON = exports.cluster_HealthFromJSON = exports.Cluster_Health = exports.cluster_EnvironmentToJSON = exports.cluster_EnvironmentFromJSON = exports.Cluster_Environment = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const config_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/config");
const maintenance_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance");
const pxf_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/pxf");
const timeofday_1 = require("../../../../../google/type/timeofday");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.mdb.greenplum.v1";
var Cluster_Environment;
(function (Cluster_Environment) {
    Cluster_Environment[Cluster_Environment["ENVIRONMENT_UNSPECIFIED"] = 0] = "ENVIRONMENT_UNSPECIFIED";
    /** PRODUCTION - Stable environment with a conservative update policy: only hotfixes are applied during regular maintenance. */
    Cluster_Environment[Cluster_Environment["PRODUCTION"] = 1] = "PRODUCTION";
    /** PRESTABLE - Environment with more aggressive update policy: new versions are rolled out irrespective of backward compatibility. */
    Cluster_Environment[Cluster_Environment["PRESTABLE"] = 2] = "PRESTABLE";
    Cluster_Environment[Cluster_Environment["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Environment = exports.Cluster_Environment || (exports.Cluster_Environment = {}));
function cluster_EnvironmentFromJSON(object) {
    switch (object) {
        case 0:
        case "ENVIRONMENT_UNSPECIFIED":
            return Cluster_Environment.ENVIRONMENT_UNSPECIFIED;
        case 1:
        case "PRODUCTION":
            return Cluster_Environment.PRODUCTION;
        case 2:
        case "PRESTABLE":
            return Cluster_Environment.PRESTABLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Cluster_Environment.UNRECOGNIZED;
    }
}
exports.cluster_EnvironmentFromJSON = cluster_EnvironmentFromJSON;
function cluster_EnvironmentToJSON(object) {
    switch (object) {
        case Cluster_Environment.ENVIRONMENT_UNSPECIFIED:
            return "ENVIRONMENT_UNSPECIFIED";
        case Cluster_Environment.PRODUCTION:
            return "PRODUCTION";
        case Cluster_Environment.PRESTABLE:
            return "PRESTABLE";
        default:
            return "UNKNOWN";
    }
}
exports.cluster_EnvironmentToJSON = cluster_EnvironmentToJSON;
var Cluster_Health;
(function (Cluster_Health) {
    /** HEALTH_UNKNOWN - Health of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
    Cluster_Health[Cluster_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - Cluster is working normally ([Host.health] for every host in the cluster is ALIVE). */
    Cluster_Health[Cluster_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
    Cluster_Health[Cluster_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
    Cluster_Health[Cluster_Health["DEGRADED"] = 3] = "DEGRADED";
    /** UNBALANCED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is UNBALANCED). */
    Cluster_Health[Cluster_Health["UNBALANCED"] = 4] = "UNBALANCED";
    Cluster_Health[Cluster_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Health = exports.Cluster_Health || (exports.Cluster_Health = {}));
function cluster_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case "HEALTH_UNKNOWN":
            return Cluster_Health.HEALTH_UNKNOWN;
        case 1:
        case "ALIVE":
            return Cluster_Health.ALIVE;
        case 2:
        case "DEAD":
            return Cluster_Health.DEAD;
        case 3:
        case "DEGRADED":
            return Cluster_Health.DEGRADED;
        case 4:
        case "UNBALANCED":
            return Cluster_Health.UNBALANCED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Cluster_Health.UNRECOGNIZED;
    }
}
exports.cluster_HealthFromJSON = cluster_HealthFromJSON;
function cluster_HealthToJSON(object) {
    switch (object) {
        case Cluster_Health.HEALTH_UNKNOWN:
            return "HEALTH_UNKNOWN";
        case Cluster_Health.ALIVE:
            return "ALIVE";
        case Cluster_Health.DEAD:
            return "DEAD";
        case Cluster_Health.DEGRADED:
            return "DEGRADED";
        case Cluster_Health.UNBALANCED:
            return "UNBALANCED";
        default:
            return "UNKNOWN";
    }
}
exports.cluster_HealthToJSON = cluster_HealthToJSON;
var Cluster_Status;
(function (Cluster_Status) {
    /** STATUS_UNKNOWN - Cluster state is unknown. */
    Cluster_Status[Cluster_Status["STATUS_UNKNOWN"] = 0] = "STATUS_UNKNOWN";
    /** CREATING - Cluster is being created. */
    Cluster_Status[Cluster_Status["CREATING"] = 1] = "CREATING";
    /** RUNNING - Cluster is running normally. */
    Cluster_Status[Cluster_Status["RUNNING"] = 2] = "RUNNING";
    /** ERROR - Cluster has encountered a problem and cannot operate. */
    Cluster_Status[Cluster_Status["ERROR"] = 3] = "ERROR";
    /** UPDATING - Cluster is being updated. */
    Cluster_Status[Cluster_Status["UPDATING"] = 4] = "UPDATING";
    /** STOPPING - Cluster is stopping. */
    Cluster_Status[Cluster_Status["STOPPING"] = 5] = "STOPPING";
    /** STOPPED - Cluster has stopped. */
    Cluster_Status[Cluster_Status["STOPPED"] = 6] = "STOPPED";
    /** STARTING - Cluster is starting. */
    Cluster_Status[Cluster_Status["STARTING"] = 7] = "STARTING";
    Cluster_Status[Cluster_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Status = exports.Cluster_Status || (exports.Cluster_Status = {}));
function cluster_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNKNOWN":
            return Cluster_Status.STATUS_UNKNOWN;
        case 1:
        case "CREATING":
            return Cluster_Status.CREATING;
        case 2:
        case "RUNNING":
            return Cluster_Status.RUNNING;
        case 3:
        case "ERROR":
            return Cluster_Status.ERROR;
        case 4:
        case "UPDATING":
            return Cluster_Status.UPDATING;
        case 5:
        case "STOPPING":
            return Cluster_Status.STOPPING;
        case 6:
        case "STOPPED":
            return Cluster_Status.STOPPED;
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
        case Cluster_Status.STATUS_UNKNOWN:
            return "STATUS_UNKNOWN";
        case Cluster_Status.CREATING:
            return "CREATING";
        case Cluster_Status.RUNNING:
            return "RUNNING";
        case Cluster_Status.ERROR:
            return "ERROR";
        case Cluster_Status.UPDATING:
            return "UPDATING";
        case Cluster_Status.STOPPING:
            return "STOPPING";
        case Cluster_Status.STOPPED:
            return "STOPPED";
        case Cluster_Status.STARTING:
            return "STARTING";
        default:
            return "UNKNOWN";
    }
}
exports.cluster_StatusToJSON = cluster_StatusToJSON;
const baseCluster = {
    $type: "yandex.cloud.mdb.greenplum.v1.Cluster",
    id: "",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    masterHostCount: 0,
    segmentHostCount: 0,
    segmentInHost: 0,
    networkId: "",
    health: 0,
    status: 0,
    securityGroupIds: "",
    userName: "",
    deletionProtection: false,
    hostGroupIds: "",
};
exports.Cluster = {
    $type: "yandex.cloud.mdb.greenplum.v1.Cluster",
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
        if (message.config !== undefined) {
            exports.GreenplumConfig.encode(message.config, writer.uint32(42).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Cluster_LabelsEntry.encode({
                $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(58).fork()).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(64).int32(message.environment);
        }
        for (const v of message.monitoring) {
            exports.Monitoring.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.masterConfig !== undefined) {
            config_1.MasterSubclusterConfig.encode(message.masterConfig, writer.uint32(82).fork()).ldelim();
        }
        if (message.segmentConfig !== undefined) {
            config_1.SegmentSubclusterConfig.encode(message.segmentConfig, writer.uint32(90).fork()).ldelim();
        }
        if (message.masterHostCount !== 0) {
            writer.uint32(96).int64(message.masterHostCount);
        }
        if (message.segmentHostCount !== 0) {
            writer.uint32(104).int64(message.segmentHostCount);
        }
        if (message.segmentInHost !== 0) {
            writer.uint32(112).int64(message.segmentInHost);
        }
        if (message.networkId !== "") {
            writer.uint32(122).string(message.networkId);
        }
        if (message.health !== 0) {
            writer.uint32(128).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(136).int32(message.status);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(146).fork()).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            maintenance_1.MaintenanceOperation.encode(message.plannedOperation, writer.uint32(154).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(162).string(v);
        }
        if (message.userName !== "") {
            writer.uint32(170).string(message.userName);
        }
        if (message.deletionProtection === true) {
            writer.uint32(176).bool(message.deletionProtection);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(186).string(v);
        }
        if (message.clusterConfig !== undefined) {
            exports.ClusterConfigSet.encode(message.clusterConfig, writer.uint32(194).fork()).ldelim();
        }
        if (message.cloudStorage !== undefined) {
            exports.CloudStorage.encode(message.cloudStorage, writer.uint32(210).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCluster);
        message.labels = {};
        message.monitoring = [];
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
                    message.config = exports.GreenplumConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = exports.Cluster_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.environment = reader.int32();
                    break;
                case 9:
                    message.monitoring.push(exports.Monitoring.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.masterConfig = config_1.MasterSubclusterConfig.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.segmentConfig = config_1.SegmentSubclusterConfig.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.masterHostCount = longToNumber(reader.int64());
                    break;
                case 13:
                    message.segmentHostCount = longToNumber(reader.int64());
                    break;
                case 14:
                    message.segmentInHost = longToNumber(reader.int64());
                    break;
                case 15:
                    message.networkId = reader.string();
                    break;
                case 16:
                    message.health = reader.int32();
                    break;
                case 17:
                    message.status = reader.int32();
                    break;
                case 18:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.plannedOperation = maintenance_1.MaintenanceOperation.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 21:
                    message.userName = reader.string();
                    break;
                case 22:
                    message.deletionProtection = reader.bool();
                    break;
                case 23:
                    message.hostGroupIds.push(reader.string());
                    break;
                case 24:
                    message.clusterConfig = exports.ClusterConfigSet.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.cloudStorage = exports.CloudStorage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d;
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
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.GreenplumConfig.fromJSON(object.config)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.environment =
            object.environment !== undefined && object.environment !== null
                ? cluster_EnvironmentFromJSON(object.environment)
                : 0;
        message.monitoring = ((_b = object.monitoring) !== null && _b !== void 0 ? _b : []).map((e) => exports.Monitoring.fromJSON(e));
        message.masterConfig =
            object.masterConfig !== undefined && object.masterConfig !== null
                ? config_1.MasterSubclusterConfig.fromJSON(object.masterConfig)
                : undefined;
        message.segmentConfig =
            object.segmentConfig !== undefined && object.segmentConfig !== null
                ? config_1.SegmentSubclusterConfig.fromJSON(object.segmentConfig)
                : undefined;
        message.masterHostCount =
            object.masterHostCount !== undefined && object.masterHostCount !== null
                ? Number(object.masterHostCount)
                : 0;
        message.segmentHostCount =
            object.segmentHostCount !== undefined && object.segmentHostCount !== null
                ? Number(object.segmentHostCount)
                : 0;
        message.segmentInHost =
            object.segmentInHost !== undefined && object.segmentInHost !== null
                ? Number(object.segmentInHost)
                : 0;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.health =
            object.health !== undefined && object.health !== null
                ? cluster_HealthFromJSON(object.health)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? cluster_StatusFromJSON(object.status)
                : 0;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? maintenance_1.MaintenanceOperation.fromJSON(object.plannedOperation)
                : undefined;
        message.securityGroupIds = ((_c = object.securityGroupIds) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.hostGroupIds = ((_d = object.hostGroupIds) !== null && _d !== void 0 ? _d : []).map((e) => String(e));
        message.clusterConfig =
            object.clusterConfig !== undefined && object.clusterConfig !== null
                ? exports.ClusterConfigSet.fromJSON(object.clusterConfig)
                : undefined;
        message.cloudStorage =
            object.cloudStorage !== undefined && object.cloudStorage !== null
                ? exports.CloudStorage.fromJSON(object.cloudStorage)
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
        message.config !== undefined &&
            (obj.config = message.config
                ? exports.GreenplumConfig.toJSON(message.config)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.environment !== undefined &&
            (obj.environment = cluster_EnvironmentToJSON(message.environment));
        if (message.monitoring) {
            obj.monitoring = message.monitoring.map((e) => e ? exports.Monitoring.toJSON(e) : undefined);
        }
        else {
            obj.monitoring = [];
        }
        message.masterConfig !== undefined &&
            (obj.masterConfig = message.masterConfig
                ? config_1.MasterSubclusterConfig.toJSON(message.masterConfig)
                : undefined);
        message.segmentConfig !== undefined &&
            (obj.segmentConfig = message.segmentConfig
                ? config_1.SegmentSubclusterConfig.toJSON(message.segmentConfig)
                : undefined);
        message.masterHostCount !== undefined &&
            (obj.masterHostCount = Math.round(message.masterHostCount));
        message.segmentHostCount !== undefined &&
            (obj.segmentHostCount = Math.round(message.segmentHostCount));
        message.segmentInHost !== undefined &&
            (obj.segmentInHost = Math.round(message.segmentInHost));
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.health !== undefined &&
            (obj.health = cluster_HealthToJSON(message.health));
        message.status !== undefined &&
            (obj.status = cluster_StatusToJSON(message.status));
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        message.plannedOperation !== undefined &&
            (obj.plannedOperation = message.plannedOperation
                ? maintenance_1.MaintenanceOperation.toJSON(message.plannedOperation)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.userName !== undefined && (obj.userName = message.userName);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        if (message.hostGroupIds) {
            obj.hostGroupIds = message.hostGroupIds.map((e) => e);
        }
        else {
            obj.hostGroupIds = [];
        }
        message.clusterConfig !== undefined &&
            (obj.clusterConfig = message.clusterConfig
                ? exports.ClusterConfigSet.toJSON(message.clusterConfig)
                : undefined);
        message.cloudStorage !== undefined &&
            (obj.cloudStorage = message.cloudStorage
                ? exports.CloudStorage.toJSON(message.cloudStorage)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const message = Object.assign({}, baseCluster);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.GreenplumConfig.fromPartial(object.config)
                : undefined;
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.environment = (_g = object.environment) !== null && _g !== void 0 ? _g : 0;
        message.monitoring =
            ((_h = object.monitoring) === null || _h === void 0 ? void 0 : _h.map((e) => exports.Monitoring.fromPartial(e))) || [];
        message.masterConfig =
            object.masterConfig !== undefined && object.masterConfig !== null
                ? config_1.MasterSubclusterConfig.fromPartial(object.masterConfig)
                : undefined;
        message.segmentConfig =
            object.segmentConfig !== undefined && object.segmentConfig !== null
                ? config_1.SegmentSubclusterConfig.fromPartial(object.segmentConfig)
                : undefined;
        message.masterHostCount = (_j = object.masterHostCount) !== null && _j !== void 0 ? _j : 0;
        message.segmentHostCount = (_k = object.segmentHostCount) !== null && _k !== void 0 ? _k : 0;
        message.segmentInHost = (_l = object.segmentInHost) !== null && _l !== void 0 ? _l : 0;
        message.networkId = (_m = object.networkId) !== null && _m !== void 0 ? _m : "";
        message.health = (_o = object.health) !== null && _o !== void 0 ? _o : 0;
        message.status = (_p = object.status) !== null && _p !== void 0 ? _p : 0;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? maintenance_1.MaintenanceOperation.fromPartial(object.plannedOperation)
                : undefined;
        message.securityGroupIds = ((_q = object.securityGroupIds) === null || _q === void 0 ? void 0 : _q.map((e) => e)) || [];
        message.userName = (_r = object.userName) !== null && _r !== void 0 ? _r : "";
        message.deletionProtection = (_s = object.deletionProtection) !== null && _s !== void 0 ? _s : false;
        message.hostGroupIds = ((_t = object.hostGroupIds) === null || _t === void 0 ? void 0 : _t.map((e) => e)) || [];
        message.clusterConfig =
            object.clusterConfig !== undefined && object.clusterConfig !== null
                ? exports.ClusterConfigSet.fromPartial(object.clusterConfig)
                : undefined;
        message.cloudStorage =
            object.cloudStorage !== undefined && object.cloudStorage !== null
                ? exports.CloudStorage.fromPartial(object.cloudStorage)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Cluster.$type, exports.Cluster);
const baseCluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry",
    key: "",
    value: "",
};
exports.Cluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry",
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
const baseClusterConfigSet = {
    $type: "yandex.cloud.mdb.greenplum.v1.ClusterConfigSet",
};
exports.ClusterConfigSet = {
    $type: "yandex.cloud.mdb.greenplum.v1.ClusterConfigSet",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.greenplumConfigSet617 !== undefined) {
            config_1.Greenplumconfigset617.encode(message.greenplumConfigSet617, writer.uint32(10).fork()).ldelim();
        }
        if (message.greenplumConfigSet619 !== undefined) {
            config_1.Greenplumconfigset619.encode(message.greenplumConfigSet619, writer.uint32(18).fork()).ldelim();
        }
        if (message.greenplumConfigSet621 !== undefined) {
            config_1.Greenplumconfigset621.encode(message.greenplumConfigSet621, writer.uint32(34).fork()).ldelim();
        }
        if (message.greenplumConfigSet622 !== undefined) {
            config_1.Greenplumconfigset622.encode(message.greenplumConfigSet622, writer.uint32(42).fork()).ldelim();
        }
        if (message.greenplumConfigSet6 !== undefined) {
            config_1.GreenplumConfigSet6.encode(message.greenplumConfigSet6, writer.uint32(74).fork()).ldelim();
        }
        if (message.pool !== undefined) {
            config_1.ConnectionPoolerConfigSet.encode(message.pool, writer.uint32(26).fork()).ldelim();
        }
        if (message.backgroundActivities !== undefined) {
            config_1.BackgroundActivitiesConfig.encode(message.backgroundActivities, writer.uint32(50).fork()).ldelim();
        }
        if (message.pxfConfig !== undefined) {
            pxf_1.PXFConfigSet.encode(message.pxfConfig, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClusterConfigSet);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.greenplumConfigSet617 = config_1.Greenplumconfigset617.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.greenplumConfigSet619 = config_1.Greenplumconfigset619.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.greenplumConfigSet621 = config_1.Greenplumconfigset621.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.greenplumConfigSet622 = config_1.Greenplumconfigset622.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.greenplumConfigSet6 = config_1.GreenplumConfigSet6.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.pool = config_1.ConnectionPoolerConfigSet.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.backgroundActivities = config_1.BackgroundActivitiesConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.pxfConfig = pxf_1.PXFConfigSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClusterConfigSet);
        message.greenplumConfigSet617 =
            object.greenplumConfigSet_6_17 !== undefined &&
                object.greenplumConfigSet_6_17 !== null
                ? config_1.Greenplumconfigset617.fromJSON(object.greenplumConfigSet_6_17)
                : undefined;
        message.greenplumConfigSet619 =
            object.greenplumConfigSet_6_19 !== undefined &&
                object.greenplumConfigSet_6_19 !== null
                ? config_1.Greenplumconfigset619.fromJSON(object.greenplumConfigSet_6_19)
                : undefined;
        message.greenplumConfigSet621 =
            object.greenplumConfigSet_6_21 !== undefined &&
                object.greenplumConfigSet_6_21 !== null
                ? config_1.Greenplumconfigset621.fromJSON(object.greenplumConfigSet_6_21)
                : undefined;
        message.greenplumConfigSet622 =
            object.greenplumConfigSet_6_22 !== undefined &&
                object.greenplumConfigSet_6_22 !== null
                ? config_1.Greenplumconfigset622.fromJSON(object.greenplumConfigSet_6_22)
                : undefined;
        message.greenplumConfigSet6 =
            object.greenplumConfigSet_6 !== undefined &&
                object.greenplumConfigSet_6 !== null
                ? config_1.GreenplumConfigSet6.fromJSON(object.greenplumConfigSet_6)
                : undefined;
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? config_1.ConnectionPoolerConfigSet.fromJSON(object.pool)
                : undefined;
        message.backgroundActivities =
            object.backgroundActivities !== undefined &&
                object.backgroundActivities !== null
                ? config_1.BackgroundActivitiesConfig.fromJSON(object.backgroundActivities)
                : undefined;
        message.pxfConfig =
            object.pxfConfig !== undefined && object.pxfConfig !== null
                ? pxf_1.PXFConfigSet.fromJSON(object.pxfConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.greenplumConfigSet617 !== undefined &&
            (obj.greenplumConfigSet_6_17 = message.greenplumConfigSet617
                ? config_1.Greenplumconfigset617.toJSON(message.greenplumConfigSet617)
                : undefined);
        message.greenplumConfigSet619 !== undefined &&
            (obj.greenplumConfigSet_6_19 = message.greenplumConfigSet619
                ? config_1.Greenplumconfigset619.toJSON(message.greenplumConfigSet619)
                : undefined);
        message.greenplumConfigSet621 !== undefined &&
            (obj.greenplumConfigSet_6_21 = message.greenplumConfigSet621
                ? config_1.Greenplumconfigset621.toJSON(message.greenplumConfigSet621)
                : undefined);
        message.greenplumConfigSet622 !== undefined &&
            (obj.greenplumConfigSet_6_22 = message.greenplumConfigSet622
                ? config_1.Greenplumconfigset622.toJSON(message.greenplumConfigSet622)
                : undefined);
        message.greenplumConfigSet6 !== undefined &&
            (obj.greenplumConfigSet_6 = message.greenplumConfigSet6
                ? config_1.GreenplumConfigSet6.toJSON(message.greenplumConfigSet6)
                : undefined);
        message.pool !== undefined &&
            (obj.pool = message.pool
                ? config_1.ConnectionPoolerConfigSet.toJSON(message.pool)
                : undefined);
        message.backgroundActivities !== undefined &&
            (obj.backgroundActivities = message.backgroundActivities
                ? config_1.BackgroundActivitiesConfig.toJSON(message.backgroundActivities)
                : undefined);
        message.pxfConfig !== undefined &&
            (obj.pxfConfig = message.pxfConfig
                ? pxf_1.PXFConfigSet.toJSON(message.pxfConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseClusterConfigSet);
        message.greenplumConfigSet617 =
            object.greenplumConfigSet617 !== undefined &&
                object.greenplumConfigSet617 !== null
                ? config_1.Greenplumconfigset617.fromPartial(object.greenplumConfigSet617)
                : undefined;
        message.greenplumConfigSet619 =
            object.greenplumConfigSet619 !== undefined &&
                object.greenplumConfigSet619 !== null
                ? config_1.Greenplumconfigset619.fromPartial(object.greenplumConfigSet619)
                : undefined;
        message.greenplumConfigSet621 =
            object.greenplumConfigSet621 !== undefined &&
                object.greenplumConfigSet621 !== null
                ? config_1.Greenplumconfigset621.fromPartial(object.greenplumConfigSet621)
                : undefined;
        message.greenplumConfigSet622 =
            object.greenplumConfigSet622 !== undefined &&
                object.greenplumConfigSet622 !== null
                ? config_1.Greenplumconfigset622.fromPartial(object.greenplumConfigSet622)
                : undefined;
        message.greenplumConfigSet6 =
            object.greenplumConfigSet6 !== undefined &&
                object.greenplumConfigSet6 !== null
                ? config_1.GreenplumConfigSet6.fromPartial(object.greenplumConfigSet6)
                : undefined;
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? config_1.ConnectionPoolerConfigSet.fromPartial(object.pool)
                : undefined;
        message.backgroundActivities =
            object.backgroundActivities !== undefined &&
                object.backgroundActivities !== null
                ? config_1.BackgroundActivitiesConfig.fromPartial(object.backgroundActivities)
                : undefined;
        message.pxfConfig =
            object.pxfConfig !== undefined && object.pxfConfig !== null
                ? pxf_1.PXFConfigSet.fromPartial(object.pxfConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConfigSet.$type, exports.ClusterConfigSet);
const baseMonitoring = {
    $type: "yandex.cloud.mdb.greenplum.v1.Monitoring",
    name: "",
    description: "",
    link: "",
};
exports.Monitoring = {
    $type: "yandex.cloud.mdb.greenplum.v1.Monitoring",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.link !== "") {
            writer.uint32(26).string(message.link);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMonitoring);
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
                    message.link = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMonitoring);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.link =
            object.link !== undefined && object.link !== null
                ? String(object.link)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.link !== undefined && (obj.link = message.link);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMonitoring);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.link = (_c = object.link) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Monitoring.$type, exports.Monitoring);
const baseGreenplumConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig",
    version: "",
    zoneId: "",
    subnetId: "",
    assignPublicIp: false,
};
exports.GreenplumConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.backupWindowStart !== undefined) {
            timeofday_1.TimeOfDay.encode(message.backupWindowStart, writer.uint32(18).fork()).ldelim();
        }
        if (message.access !== undefined) {
            exports.Access.encode(message.access, writer.uint32(26).fork()).ldelim();
        }
        if (message.zoneId !== "") {
            writer.uint32(34).string(message.zoneId);
        }
        if (message.subnetId !== "") {
            writer.uint32(42).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(48).bool(message.assignPublicIp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.backupWindowStart = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.access = exports.Access.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.zoneId = reader.string();
                    break;
                case 5:
                    message.subnetId = reader.string();
                    break;
                case 6:
                    message.assignPublicIp = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumConfig);
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.backupWindowStart =
            object.backupWindowStart !== undefined &&
                object.backupWindowStart !== null
                ? timeofday_1.TimeOfDay.fromJSON(object.backupWindowStart)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromJSON(object.access)
                : undefined;
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? timeofday_1.TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? exports.Access.toJSON(message.access) : undefined);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseGreenplumConfig);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.backupWindowStart =
            object.backupWindowStart !== undefined &&
                object.backupWindowStart !== null
                ? timeofday_1.TimeOfDay.fromPartial(object.backupWindowStart)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromPartial(object.access)
                : undefined;
        message.zoneId = (_b = object.zoneId) !== null && _b !== void 0 ? _b : "";
        message.subnetId = (_c = object.subnetId) !== null && _c !== void 0 ? _c : "";
        message.assignPublicIp = (_d = object.assignPublicIp) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GreenplumConfig.$type, exports.GreenplumConfig);
const baseAccess = {
    $type: "yandex.cloud.mdb.greenplum.v1.Access",
    dataLens: false,
    webSql: false,
    dataTransfer: false,
};
exports.Access = {
    $type: "yandex.cloud.mdb.greenplum.v1.Access",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataLens === true) {
            writer.uint32(8).bool(message.dataLens);
        }
        if (message.webSql === true) {
            writer.uint32(16).bool(message.webSql);
        }
        if (message.dataTransfer === true) {
            writer.uint32(24).bool(message.dataTransfer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAccess);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataLens = reader.bool();
                    break;
                case 2:
                    message.webSql = reader.bool();
                    break;
                case 3:
                    message.dataTransfer = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAccess);
        message.dataLens =
            object.dataLens !== undefined && object.dataLens !== null
                ? Boolean(object.dataLens)
                : false;
        message.webSql =
            object.webSql !== undefined && object.webSql !== null
                ? Boolean(object.webSql)
                : false;
        message.dataTransfer =
            object.dataTransfer !== undefined && object.dataTransfer !== null
                ? Boolean(object.dataTransfer)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataLens !== undefined && (obj.dataLens = message.dataLens);
        message.webSql !== undefined && (obj.webSql = message.webSql);
        message.dataTransfer !== undefined &&
            (obj.dataTransfer = message.dataTransfer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAccess);
        message.dataLens = (_a = object.dataLens) !== null && _a !== void 0 ? _a : false;
        message.webSql = (_b = object.webSql) !== null && _b !== void 0 ? _b : false;
        message.dataTransfer = (_c = object.dataTransfer) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Access.$type, exports.Access);
const baseGreenplumRestoreConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumRestoreConfig",
    zoneId: "",
    subnetId: "",
    assignPublicIp: false,
};
exports.GreenplumRestoreConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumRestoreConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupWindowStart !== undefined) {
            timeofday_1.TimeOfDay.encode(message.backupWindowStart, writer.uint32(10).fork()).ldelim();
        }
        if (message.access !== undefined) {
            exports.Access.encode(message.access, writer.uint32(18).fork()).ldelim();
        }
        if (message.zoneId !== "") {
            writer.uint32(26).string(message.zoneId);
        }
        if (message.subnetId !== "") {
            writer.uint32(34).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(40).bool(message.assignPublicIp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumRestoreConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupWindowStart = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.access = exports.Access.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.zoneId = reader.string();
                    break;
                case 4:
                    message.subnetId = reader.string();
                    break;
                case 5:
                    message.assignPublicIp = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumRestoreConfig);
        message.backupWindowStart =
            object.backupWindowStart !== undefined &&
                object.backupWindowStart !== null
                ? timeofday_1.TimeOfDay.fromJSON(object.backupWindowStart)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromJSON(object.access)
                : undefined;
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? timeofday_1.TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? exports.Access.toJSON(message.access) : undefined);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGreenplumRestoreConfig);
        message.backupWindowStart =
            object.backupWindowStart !== undefined &&
                object.backupWindowStart !== null
                ? timeofday_1.TimeOfDay.fromPartial(object.backupWindowStart)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromPartial(object.access)
                : undefined;
        message.zoneId = (_a = object.zoneId) !== null && _a !== void 0 ? _a : "";
        message.subnetId = (_b = object.subnetId) !== null && _b !== void 0 ? _b : "";
        message.assignPublicIp = (_c = object.assignPublicIp) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GreenplumRestoreConfig.$type, exports.GreenplumRestoreConfig);
const baseRestoreResources = {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreResources",
    resourcePresetId: "",
    diskSize: 0,
};
exports.RestoreResources = {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreResources",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourcePresetId !== "") {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(16).int64(message.diskSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreResources);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
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
        const message = Object.assign({}, baseRestoreResources);
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : "";
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null
                ? Number(object.diskSize)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.diskSize !== undefined &&
            (obj.diskSize = Math.round(message.diskSize));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRestoreResources);
        message.resourcePresetId = (_a = object.resourcePresetId) !== null && _a !== void 0 ? _a : "";
        message.diskSize = (_b = object.diskSize) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreResources.$type, exports.RestoreResources);
const baseCloudStorage = {
    $type: "yandex.cloud.mdb.greenplum.v1.CloudStorage",
    enable: false,
};
exports.CloudStorage = {
    $type: "yandex.cloud.mdb.greenplum.v1.CloudStorage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enable === true) {
            writer.uint32(8).bool(message.enable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCloudStorage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enable = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCloudStorage);
        message.enable =
            object.enable !== undefined && object.enable !== null
                ? Boolean(object.enable)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enable !== undefined && (obj.enable = message.enable);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCloudStorage);
        message.enable = (_a = object.enable) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CloudStorage.$type, exports.CloudStorage);
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
