"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudStorage = exports.Access = exports.Resources = exports.Service = exports.Host = exports.ShardConfig_Clickhouse = exports.ShardConfig = exports.ShardGroup = exports.Shard = exports.ClusterConfig_Zookeeper = exports.ClusterConfig_Clickhouse = exports.ClusterConfig = exports.Monitoring = exports.Cluster_LabelsEntry = exports.Cluster = exports.service_HealthToJSON = exports.service_HealthFromJSON = exports.Service_Health = exports.service_TypeToJSON = exports.service_TypeFromJSON = exports.Service_Type = exports.host_HealthToJSON = exports.host_HealthFromJSON = exports.Host_Health = exports.host_TypeToJSON = exports.host_TypeFromJSON = exports.Host_Type = exports.cluster_StatusToJSON = exports.cluster_StatusFromJSON = exports.Cluster_Status = exports.cluster_HealthToJSON = exports.cluster_HealthFromJSON = exports.Cluster_Health = exports.cluster_EnvironmentToJSON = exports.cluster_EnvironmentFromJSON = exports.Cluster_Environment = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const maintenance_1 = require("../../../../../yandex/cloud/mdb/clickhouse/v1/maintenance");
const timeofday_1 = require("../../../../../google/type/timeofday");
const clickhouse_1 = require("../../../../../yandex/cloud/mdb/clickhouse/v1/config/clickhouse");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
var Cluster_Environment;
(function (Cluster_Environment) {
    Cluster_Environment[Cluster_Environment["ENVIRONMENT_UNSPECIFIED"] = 0] = "ENVIRONMENT_UNSPECIFIED";
    /**
     * PRODUCTION - Stable environment with a conservative update policy:
     * only hotfixes are applied during regular maintenance.
     */
    Cluster_Environment[Cluster_Environment["PRODUCTION"] = 1] = "PRODUCTION";
    /**
     * PRESTABLE - Environment with more aggressive update policy: new versions
     * are rolled out irrespective of backward compatibility.
     */
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
    /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
    Cluster_Health[Cluster_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - Cluster is alive and well ([Host.health] for every host in the cluster is ALIVE). */
    Cluster_Health[Cluster_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
    Cluster_Health[Cluster_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
    Cluster_Health[Cluster_Health["DEGRADED"] = 3] = "DEGRADED";
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
    /** ERROR - Cluster encountered a problem and cannot operate. */
    Cluster_Status[Cluster_Status["ERROR"] = 3] = "ERROR";
    /** UPDATING - Cluster is being updated. */
    Cluster_Status[Cluster_Status["UPDATING"] = 4] = "UPDATING";
    /** STOPPING - Cluster is stopping. */
    Cluster_Status[Cluster_Status["STOPPING"] = 5] = "STOPPING";
    /** STOPPED - Cluster stopped. */
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
var Host_Type;
(function (Host_Type) {
    Host_Type[Host_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** CLICKHOUSE - ClickHouse host. */
    Host_Type[Host_Type["CLICKHOUSE"] = 1] = "CLICKHOUSE";
    /** ZOOKEEPER - ZooKeeper host. */
    Host_Type[Host_Type["ZOOKEEPER"] = 2] = "ZOOKEEPER";
    Host_Type[Host_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Type = exports.Host_Type || (exports.Host_Type = {}));
function host_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Host_Type.TYPE_UNSPECIFIED;
        case 1:
        case "CLICKHOUSE":
            return Host_Type.CLICKHOUSE;
        case 2:
        case "ZOOKEEPER":
            return Host_Type.ZOOKEEPER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Host_Type.UNRECOGNIZED;
    }
}
exports.host_TypeFromJSON = host_TypeFromJSON;
function host_TypeToJSON(object) {
    switch (object) {
        case Host_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Host_Type.CLICKHOUSE:
            return "CLICKHOUSE";
        case Host_Type.ZOOKEEPER:
            return "ZOOKEEPER";
        default:
            return "UNKNOWN";
    }
}
exports.host_TypeToJSON = host_TypeToJSON;
var Host_Health;
(function (Host_Health) {
    /** UNKNOWN - Health of the host is unknown. */
    Host_Health[Host_Health["UNKNOWN"] = 0] = "UNKNOWN";
    /** ALIVE - The host is performing all its functions normally. */
    Host_Health[Host_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
    Host_Health[Host_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - The host is degraded, and can perform only some of its essential functions. */
    Host_Health[Host_Health["DEGRADED"] = 3] = "DEGRADED";
    Host_Health[Host_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Health = exports.Host_Health || (exports.Host_Health = {}));
function host_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return Host_Health.UNKNOWN;
        case 1:
        case "ALIVE":
            return Host_Health.ALIVE;
        case 2:
        case "DEAD":
            return Host_Health.DEAD;
        case 3:
        case "DEGRADED":
            return Host_Health.DEGRADED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Host_Health.UNRECOGNIZED;
    }
}
exports.host_HealthFromJSON = host_HealthFromJSON;
function host_HealthToJSON(object) {
    switch (object) {
        case Host_Health.UNKNOWN:
            return "UNKNOWN";
        case Host_Health.ALIVE:
            return "ALIVE";
        case Host_Health.DEAD:
            return "DEAD";
        case Host_Health.DEGRADED:
            return "DEGRADED";
        default:
            return "UNKNOWN";
    }
}
exports.host_HealthToJSON = host_HealthToJSON;
var Service_Type;
(function (Service_Type) {
    Service_Type[Service_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** CLICKHOUSE - The host is a ClickHouse server. */
    Service_Type[Service_Type["CLICKHOUSE"] = 1] = "CLICKHOUSE";
    /** ZOOKEEPER - The host is a ZooKeeper server. */
    Service_Type[Service_Type["ZOOKEEPER"] = 2] = "ZOOKEEPER";
    Service_Type[Service_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Service_Type = exports.Service_Type || (exports.Service_Type = {}));
function service_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Service_Type.TYPE_UNSPECIFIED;
        case 1:
        case "CLICKHOUSE":
            return Service_Type.CLICKHOUSE;
        case 2:
        case "ZOOKEEPER":
            return Service_Type.ZOOKEEPER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Service_Type.UNRECOGNIZED;
    }
}
exports.service_TypeFromJSON = service_TypeFromJSON;
function service_TypeToJSON(object) {
    switch (object) {
        case Service_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Service_Type.CLICKHOUSE:
            return "CLICKHOUSE";
        case Service_Type.ZOOKEEPER:
            return "ZOOKEEPER";
        default:
            return "UNKNOWN";
    }
}
exports.service_TypeToJSON = service_TypeToJSON;
var Service_Health;
(function (Service_Health) {
    /** UNKNOWN - Health of the server is unknown. */
    Service_Health[Service_Health["UNKNOWN"] = 0] = "UNKNOWN";
    /** ALIVE - The server is working normally. */
    Service_Health[Service_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - The server is dead or unresponsive. */
    Service_Health[Service_Health["DEAD"] = 2] = "DEAD";
    Service_Health[Service_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Service_Health = exports.Service_Health || (exports.Service_Health = {}));
function service_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return Service_Health.UNKNOWN;
        case 1:
        case "ALIVE":
            return Service_Health.ALIVE;
        case 2:
        case "DEAD":
            return Service_Health.DEAD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Service_Health.UNRECOGNIZED;
    }
}
exports.service_HealthFromJSON = service_HealthFromJSON;
function service_HealthToJSON(object) {
    switch (object) {
        case Service_Health.UNKNOWN:
            return "UNKNOWN";
        case Service_Health.ALIVE:
            return "ALIVE";
        case Service_Health.DEAD:
            return "DEAD";
        default:
            return "UNKNOWN";
    }
}
exports.service_HealthToJSON = service_HealthToJSON;
const baseCluster = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Cluster",
    id: "",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    health: 0,
    status: 0,
    serviceAccountId: "",
    securityGroupIds: "",
    deletionProtection: false,
};
exports.Cluster = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Cluster",
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
                $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(56).int32(message.environment);
        }
        for (const v of message.monitoring) {
            exports.Monitoring.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.config !== undefined) {
            exports.ClusterConfig.encode(message.config, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkId !== "") {
            writer.uint32(82).string(message.networkId);
        }
        if (message.health !== 0) {
            writer.uint32(88).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(96).int32(message.status);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(106).string(message.serviceAccountId);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(114).fork()).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            maintenance_1.MaintenanceOperation.encode(message.plannedOperation, writer.uint32(122).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(130).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(136).bool(message.deletionProtection);
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
                    message.environment = reader.int32();
                    break;
                case 8:
                    message.monitoring.push(exports.Monitoring.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.config = exports.ClusterConfig.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.networkId = reader.string();
                    break;
                case 11:
                    message.health = reader.int32();
                    break;
                case 12:
                    message.status = reader.int32();
                    break;
                case 13:
                    message.serviceAccountId = reader.string();
                    break;
                case 14:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.plannedOperation = maintenance_1.MaintenanceOperation.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 17:
                    message.deletionProtection = reader.bool();
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
        message.environment =
            object.environment !== undefined && object.environment !== null
                ? cluster_EnvironmentFromJSON(object.environment)
                : 0;
        message.monitoring = ((_b = object.monitoring) !== null && _b !== void 0 ? _b : []).map((e) => exports.Monitoring.fromJSON(e));
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.ClusterConfig.fromJSON(object.config)
                : undefined;
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
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
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
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
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
        message.environment !== undefined &&
            (obj.environment = cluster_EnvironmentToJSON(message.environment));
        if (message.monitoring) {
            obj.monitoring = message.monitoring.map((e) => e ? exports.Monitoring.toJSON(e) : undefined);
        }
        else {
            obj.monitoring = [];
        }
        message.config !== undefined &&
            (obj.config = message.config
                ? exports.ClusterConfig.toJSON(message.config)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.health !== undefined &&
            (obj.health = cluster_HealthToJSON(message.health));
        message.status !== undefined &&
            (obj.status = cluster_StatusToJSON(message.status));
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
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
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
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
        message.environment = (_g = object.environment) !== null && _g !== void 0 ? _g : 0;
        message.monitoring =
            ((_h = object.monitoring) === null || _h === void 0 ? void 0 : _h.map((e) => exports.Monitoring.fromPartial(e))) || [];
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.ClusterConfig.fromPartial(object.config)
                : undefined;
        message.networkId = (_j = object.networkId) !== null && _j !== void 0 ? _j : "";
        message.health = (_k = object.health) !== null && _k !== void 0 ? _k : 0;
        message.status = (_l = object.status) !== null && _l !== void 0 ? _l : 0;
        message.serviceAccountId = (_m = object.serviceAccountId) !== null && _m !== void 0 ? _m : "";
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? maintenance_1.MaintenanceOperation.fromPartial(object.plannedOperation)
                : undefined;
        message.securityGroupIds = ((_o = object.securityGroupIds) === null || _o === void 0 ? void 0 : _o.map((e) => e)) || [];
        message.deletionProtection = (_p = object.deletionProtection) !== null && _p !== void 0 ? _p : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Cluster.$type, exports.Cluster);
const baseCluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry",
    key: "",
    value: "",
};
exports.Cluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry",
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
const baseMonitoring = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Monitoring",
    name: "",
    description: "",
    link: "",
};
exports.Monitoring = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Monitoring",
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
const baseClusterConfig = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig",
    version: "",
};
exports.ClusterConfig = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.clickhouse !== undefined) {
            exports.ClusterConfig_Clickhouse.encode(message.clickhouse, writer.uint32(18).fork()).ldelim();
        }
        if (message.zookeeper !== undefined) {
            exports.ClusterConfig_Zookeeper.encode(message.zookeeper, writer.uint32(26).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            timeofday_1.TimeOfDay.encode(message.backupWindowStart, writer.uint32(34).fork()).ldelim();
        }
        if (message.access !== undefined) {
            exports.Access.encode(message.access, writer.uint32(42).fork()).ldelim();
        }
        if (message.cloudStorage !== undefined) {
            exports.CloudStorage.encode(message.cloudStorage, writer.uint32(50).fork()).ldelim();
        }
        if (message.sqlDatabaseManagement !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.sqlDatabaseManagement,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.sqlUserManagement !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.sqlUserManagement,
            }, writer.uint32(66).fork()).ldelim();
        }
        if (message.embeddedKeeper !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.embeddedKeeper }, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClusterConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.clickhouse = exports.ClusterConfig_Clickhouse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.zookeeper = exports.ClusterConfig_Zookeeper.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.backupWindowStart = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.access = exports.Access.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.cloudStorage = exports.CloudStorage.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.sqlDatabaseManagement = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.sqlUserManagement = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.embeddedKeeper = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClusterConfig);
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? exports.ClusterConfig_Clickhouse.fromJSON(object.clickhouse)
                : undefined;
        message.zookeeper =
            object.zookeeper !== undefined && object.zookeeper !== null
                ? exports.ClusterConfig_Zookeeper.fromJSON(object.zookeeper)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined &&
                object.backupWindowStart !== null
                ? timeofday_1.TimeOfDay.fromJSON(object.backupWindowStart)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromJSON(object.access)
                : undefined;
        message.cloudStorage =
            object.cloudStorage !== undefined && object.cloudStorage !== null
                ? exports.CloudStorage.fromJSON(object.cloudStorage)
                : undefined;
        message.sqlDatabaseManagement =
            object.sqlDatabaseManagement !== undefined &&
                object.sqlDatabaseManagement !== null
                ? Boolean(object.sqlDatabaseManagement)
                : undefined;
        message.sqlUserManagement =
            object.sqlUserManagement !== undefined &&
                object.sqlUserManagement !== null
                ? Boolean(object.sqlUserManagement)
                : undefined;
        message.embeddedKeeper =
            object.embeddedKeeper !== undefined && object.embeddedKeeper !== null
                ? Boolean(object.embeddedKeeper)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.clickhouse !== undefined &&
            (obj.clickhouse = message.clickhouse
                ? exports.ClusterConfig_Clickhouse.toJSON(message.clickhouse)
                : undefined);
        message.zookeeper !== undefined &&
            (obj.zookeeper = message.zookeeper
                ? exports.ClusterConfig_Zookeeper.toJSON(message.zookeeper)
                : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? timeofday_1.TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? exports.Access.toJSON(message.access) : undefined);
        message.cloudStorage !== undefined &&
            (obj.cloudStorage = message.cloudStorage
                ? exports.CloudStorage.toJSON(message.cloudStorage)
                : undefined);
        message.sqlDatabaseManagement !== undefined &&
            (obj.sqlDatabaseManagement = message.sqlDatabaseManagement);
        message.sqlUserManagement !== undefined &&
            (obj.sqlUserManagement = message.sqlUserManagement);
        message.embeddedKeeper !== undefined &&
            (obj.embeddedKeeper = message.embeddedKeeper);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseClusterConfig);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? exports.ClusterConfig_Clickhouse.fromPartial(object.clickhouse)
                : undefined;
        message.zookeeper =
            object.zookeeper !== undefined && object.zookeeper !== null
                ? exports.ClusterConfig_Zookeeper.fromPartial(object.zookeeper)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined &&
                object.backupWindowStart !== null
                ? timeofday_1.TimeOfDay.fromPartial(object.backupWindowStart)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromPartial(object.access)
                : undefined;
        message.cloudStorage =
            object.cloudStorage !== undefined && object.cloudStorage !== null
                ? exports.CloudStorage.fromPartial(object.cloudStorage)
                : undefined;
        message.sqlDatabaseManagement = (_b = object.sqlDatabaseManagement) !== null && _b !== void 0 ? _b : undefined;
        message.sqlUserManagement = (_c = object.sqlUserManagement) !== null && _c !== void 0 ? _c : undefined;
        message.embeddedKeeper = (_d = object.embeddedKeeper) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConfig.$type, exports.ClusterConfig);
const baseClusterConfig_Clickhouse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Clickhouse",
};
exports.ClusterConfig_Clickhouse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Clickhouse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            clickhouse_1.ClickhouseConfigSet.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClusterConfig_Clickhouse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = clickhouse_1.ClickhouseConfigSet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClusterConfig_Clickhouse);
        message.config =
            object.config !== undefined && object.config !== null
                ? clickhouse_1.ClickhouseConfigSet.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? clickhouse_1.ClickhouseConfigSet.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseClusterConfig_Clickhouse);
        message.config =
            object.config !== undefined && object.config !== null
                ? clickhouse_1.ClickhouseConfigSet.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConfig_Clickhouse.$type, exports.ClusterConfig_Clickhouse);
const baseClusterConfig_Zookeeper = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Zookeeper",
};
exports.ClusterConfig_Zookeeper = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Zookeeper",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClusterConfig_Zookeeper);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClusterConfig_Zookeeper);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseClusterConfig_Zookeeper);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConfig_Zookeeper.$type, exports.ClusterConfig_Zookeeper);
const baseShard = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Shard",
    name: "",
    clusterId: "",
};
exports.Shard = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Shard",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.config !== undefined) {
            exports.ShardConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseShard);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.config = exports.ShardConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseShard);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.ShardConfig.fromJSON(object.config)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.config !== undefined &&
            (obj.config = message.config
                ? exports.ShardConfig.toJSON(message.config)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseShard);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.ShardConfig.fromPartial(object.config)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Shard.$type, exports.Shard);
const baseShardGroup = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardGroup",
    name: "",
    clusterId: "",
    description: "",
    shardNames: "",
};
exports.ShardGroup = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.shardNames) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseShardGroup);
        message.shardNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.shardNames.push(reader.string());
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
        const message = Object.assign({}, baseShardGroup);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.shardNames = ((_a = object.shardNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.shardNames) {
            obj.shardNames = message.shardNames.map((e) => e);
        }
        else {
            obj.shardNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseShardGroup);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.shardNames = ((_d = object.shardNames) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ShardGroup.$type, exports.ShardGroup);
const baseShardConfig = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig",
};
exports.ShardConfig = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clickhouse !== undefined) {
            exports.ShardConfig_Clickhouse.encode(message.clickhouse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseShardConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clickhouse = exports.ShardConfig_Clickhouse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseShardConfig);
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? exports.ShardConfig_Clickhouse.fromJSON(object.clickhouse)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clickhouse !== undefined &&
            (obj.clickhouse = message.clickhouse
                ? exports.ShardConfig_Clickhouse.toJSON(message.clickhouse)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseShardConfig);
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? exports.ShardConfig_Clickhouse.fromPartial(object.clickhouse)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ShardConfig.$type, exports.ShardConfig);
const baseShardConfig_Clickhouse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig.Clickhouse",
};
exports.ShardConfig_Clickhouse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig.Clickhouse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            clickhouse_1.ClickhouseConfigSet.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.weight !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.weight }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseShardConfig_Clickhouse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = clickhouse_1.ClickhouseConfigSet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.weight = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseShardConfig_Clickhouse);
        message.config =
            object.config !== undefined && object.config !== null
                ? clickhouse_1.ClickhouseConfigSet.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        message.weight =
            object.weight !== undefined && object.weight !== null
                ? Number(object.weight)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? clickhouse_1.ClickhouseConfigSet.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseShardConfig_Clickhouse);
        message.config =
            object.config !== undefined && object.config !== null
                ? clickhouse_1.ClickhouseConfigSet.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.weight = (_a = object.weight) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ShardConfig_Clickhouse.$type, exports.ShardConfig_Clickhouse);
const baseHost = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    type: 0,
    health: 0,
    subnetId: "",
    assignPublicIp: false,
    shardName: "",
};
exports.Host = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Host",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.zoneId !== "") {
            writer.uint32(26).string(message.zoneId);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
        }
        if (message.health !== 0) {
            writer.uint32(48).int32(message.health);
        }
        for (const v of message.services) {
            exports.Service.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.subnetId !== "") {
            writer.uint32(66).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(72).bool(message.assignPublicIp);
        }
        if (message.shardName !== "") {
            writer.uint32(82).string(message.shardName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHost);
        message.services = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.zoneId = reader.string();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.health = reader.int32();
                    break;
                case 7:
                    message.services.push(exports.Service.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.subnetId = reader.string();
                    break;
                case 9:
                    message.assignPublicIp = reader.bool();
                    break;
                case 10:
                    message.shardName = reader.string();
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
        const message = Object.assign({}, baseHost);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? host_TypeFromJSON(object.type)
                : 0;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        message.health =
            object.health !== undefined && object.health !== null
                ? host_HealthFromJSON(object.health)
                : 0;
        message.services = ((_a = object.services) !== null && _a !== void 0 ? _a : []).map((e) => exports.Service.fromJSON(e));
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.health !== undefined &&
            (obj.health = host_HealthToJSON(message.health));
        if (message.services) {
            obj.services = message.services.map((e) => e ? exports.Service.toJSON(e) : undefined);
        }
        else {
            obj.services = [];
        }
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseHost);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.zoneId = (_c = object.zoneId) !== null && _c !== void 0 ? _c : "";
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 0;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.health = (_e = object.health) !== null && _e !== void 0 ? _e : 0;
        message.services =
            ((_f = object.services) === null || _f === void 0 ? void 0 : _f.map((e) => exports.Service.fromPartial(e))) || [];
        message.subnetId = (_g = object.subnetId) !== null && _g !== void 0 ? _g : "";
        message.assignPublicIp = (_h = object.assignPublicIp) !== null && _h !== void 0 ? _h : false;
        message.shardName = (_j = object.shardName) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host.$type, exports.Host);
const baseService = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Service",
    type: 0,
    health: 0,
};
exports.Service = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Service",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.health !== 0) {
            writer.uint32(16).int32(message.health);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseService);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.health = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseService);
        message.type =
            object.type !== undefined && object.type !== null
                ? service_TypeFromJSON(object.type)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? service_HealthFromJSON(object.health)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = service_TypeToJSON(message.type));
        message.health !== undefined &&
            (obj.health = service_HealthToJSON(message.health));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseService);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.health = (_b = object.health) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Service.$type, exports.Service);
const baseResources = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Resources",
    resourcePresetId: "",
    diskSize: 0,
    diskTypeId: "",
};
exports.Resources = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Resources",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourcePresetId !== "") {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(16).int64(message.diskSize);
        }
        if (message.diskTypeId !== "") {
            writer.uint32(26).string(message.diskTypeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResources);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.diskSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.diskTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResources);
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : "";
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null
                ? Number(object.diskSize)
                : 0;
        message.diskTypeId =
            object.diskTypeId !== undefined && object.diskTypeId !== null
                ? String(object.diskTypeId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.diskSize !== undefined &&
            (obj.diskSize = Math.round(message.diskSize));
        message.diskTypeId !== undefined && (obj.diskTypeId = message.diskTypeId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseResources);
        message.resourcePresetId = (_a = object.resourcePresetId) !== null && _a !== void 0 ? _a : "";
        message.diskSize = (_b = object.diskSize) !== null && _b !== void 0 ? _b : 0;
        message.diskTypeId = (_c = object.diskTypeId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Resources.$type, exports.Resources);
const baseAccess = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Access",
    dataLens: false,
    webSql: false,
    metrika: false,
    serverless: false,
    dataTransfer: false,
    yandexQuery: false,
};
exports.Access = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Access",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataLens === true) {
            writer.uint32(8).bool(message.dataLens);
        }
        if (message.webSql === true) {
            writer.uint32(16).bool(message.webSql);
        }
        if (message.metrika === true) {
            writer.uint32(24).bool(message.metrika);
        }
        if (message.serverless === true) {
            writer.uint32(32).bool(message.serverless);
        }
        if (message.dataTransfer === true) {
            writer.uint32(40).bool(message.dataTransfer);
        }
        if (message.yandexQuery === true) {
            writer.uint32(48).bool(message.yandexQuery);
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
                    message.metrika = reader.bool();
                    break;
                case 4:
                    message.serverless = reader.bool();
                    break;
                case 5:
                    message.dataTransfer = reader.bool();
                    break;
                case 6:
                    message.yandexQuery = reader.bool();
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
        message.metrika =
            object.metrika !== undefined && object.metrika !== null
                ? Boolean(object.metrika)
                : false;
        message.serverless =
            object.serverless !== undefined && object.serverless !== null
                ? Boolean(object.serverless)
                : false;
        message.dataTransfer =
            object.dataTransfer !== undefined && object.dataTransfer !== null
                ? Boolean(object.dataTransfer)
                : false;
        message.yandexQuery =
            object.yandexQuery !== undefined && object.yandexQuery !== null
                ? Boolean(object.yandexQuery)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataLens !== undefined && (obj.dataLens = message.dataLens);
        message.webSql !== undefined && (obj.webSql = message.webSql);
        message.metrika !== undefined && (obj.metrika = message.metrika);
        message.serverless !== undefined && (obj.serverless = message.serverless);
        message.dataTransfer !== undefined &&
            (obj.dataTransfer = message.dataTransfer);
        message.yandexQuery !== undefined &&
            (obj.yandexQuery = message.yandexQuery);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseAccess);
        message.dataLens = (_a = object.dataLens) !== null && _a !== void 0 ? _a : false;
        message.webSql = (_b = object.webSql) !== null && _b !== void 0 ? _b : false;
        message.metrika = (_c = object.metrika) !== null && _c !== void 0 ? _c : false;
        message.serverless = (_d = object.serverless) !== null && _d !== void 0 ? _d : false;
        message.dataTransfer = (_e = object.dataTransfer) !== null && _e !== void 0 ? _e : false;
        message.yandexQuery = (_f = object.yandexQuery) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Access.$type, exports.Access);
const baseCloudStorage = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CloudStorage",
    enabled: false,
};
exports.CloudStorage = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CloudStorage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.moveFactor !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.moveFactor }, writer.uint32(18).fork()).ldelim();
        }
        if (message.dataCacheEnabled !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.dataCacheEnabled,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.dataCacheMaxSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.dataCacheMaxSize,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.preferNotToMerge !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.preferNotToMerge,
            }, writer.uint32(42).fork()).ldelim();
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
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.moveFactor = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.dataCacheEnabled = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.dataCacheMaxSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.preferNotToMerge = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
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
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.moveFactor =
            object.moveFactor !== undefined && object.moveFactor !== null
                ? Number(object.moveFactor)
                : undefined;
        message.dataCacheEnabled =
            object.dataCacheEnabled !== undefined && object.dataCacheEnabled !== null
                ? Boolean(object.dataCacheEnabled)
                : undefined;
        message.dataCacheMaxSize =
            object.dataCacheMaxSize !== undefined && object.dataCacheMaxSize !== null
                ? Number(object.dataCacheMaxSize)
                : undefined;
        message.preferNotToMerge =
            object.preferNotToMerge !== undefined && object.preferNotToMerge !== null
                ? Boolean(object.preferNotToMerge)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.moveFactor !== undefined && (obj.moveFactor = message.moveFactor);
        message.dataCacheEnabled !== undefined &&
            (obj.dataCacheEnabled = message.dataCacheEnabled);
        message.dataCacheMaxSize !== undefined &&
            (obj.dataCacheMaxSize = message.dataCacheMaxSize);
        message.preferNotToMerge !== undefined &&
            (obj.preferNotToMerge = message.preferNotToMerge);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCloudStorage);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.moveFactor = (_b = object.moveFactor) !== null && _b !== void 0 ? _b : undefined;
        message.dataCacheEnabled = (_c = object.dataCacheEnabled) !== null && _c !== void 0 ? _c : undefined;
        message.dataCacheMaxSize = (_d = object.dataCacheMaxSize) !== null && _d !== void 0 ? _d : undefined;
        message.preferNotToMerge = (_e = object.preferNotToMerge) !== null && _e !== void 0 ? _e : undefined;
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
