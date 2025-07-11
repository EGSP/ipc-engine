"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Access = exports.Host_SystemMetrics = exports.Host_DiskMetric = exports.Host_MemoryMetric = exports.Host_CPUMetric = exports.Host = exports.Resources = exports.Dashboards_NodeGroup = exports.Dashboards = exports.OpenSearch_NodeGroup = exports.OpenSearch = exports.ClusterConfig = exports.Monitoring = exports.Cluster_LabelsEntry = exports.Cluster = exports.host_TypeToJSON = exports.host_TypeFromJSON = exports.Host_Type = exports.host_HealthToJSON = exports.host_HealthFromJSON = exports.Host_Health = exports.openSearch_GroupRoleToJSON = exports.openSearch_GroupRoleFromJSON = exports.OpenSearch_GroupRole = exports.cluster_StatusToJSON = exports.cluster_StatusFromJSON = exports.Cluster_Status = exports.cluster_HealthToJSON = exports.cluster_HealthFromJSON = exports.Cluster_Health = exports.cluster_EnvironmentToJSON = exports.cluster_EnvironmentFromJSON = exports.Cluster_Environment = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const maintenance_1 = require("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const opensearch_1 = require("../../../../../yandex/cloud/mdb/opensearch/v1/config/opensearch");
exports.protobufPackage = "yandex.cloud.mdb.opensearch.v1";
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
    /** HEALTH_UNKNOWN - Health of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
    Cluster_Health[Cluster_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - Cluster is working normally ([Host.health] for every host in the cluster is ALIVE). */
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
/** Current state of the cluster. */
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
var OpenSearch_GroupRole;
(function (OpenSearch_GroupRole) {
    OpenSearch_GroupRole[OpenSearch_GroupRole["GROUP_ROLE_UNSPECIFIED"] = 0] = "GROUP_ROLE_UNSPECIFIED";
    OpenSearch_GroupRole[OpenSearch_GroupRole["DATA"] = 1] = "DATA";
    OpenSearch_GroupRole[OpenSearch_GroupRole["MANAGER"] = 2] = "MANAGER";
    OpenSearch_GroupRole[OpenSearch_GroupRole["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OpenSearch_GroupRole = exports.OpenSearch_GroupRole || (exports.OpenSearch_GroupRole = {}));
function openSearch_GroupRoleFromJSON(object) {
    switch (object) {
        case 0:
        case "GROUP_ROLE_UNSPECIFIED":
            return OpenSearch_GroupRole.GROUP_ROLE_UNSPECIFIED;
        case 1:
        case "DATA":
            return OpenSearch_GroupRole.DATA;
        case 2:
        case "MANAGER":
            return OpenSearch_GroupRole.MANAGER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OpenSearch_GroupRole.UNRECOGNIZED;
    }
}
exports.openSearch_GroupRoleFromJSON = openSearch_GroupRoleFromJSON;
function openSearch_GroupRoleToJSON(object) {
    switch (object) {
        case OpenSearch_GroupRole.GROUP_ROLE_UNSPECIFIED:
            return "GROUP_ROLE_UNSPECIFIED";
        case OpenSearch_GroupRole.DATA:
            return "DATA";
        case OpenSearch_GroupRole.MANAGER:
            return "MANAGER";
        default:
            return "UNKNOWN";
    }
}
exports.openSearch_GroupRoleToJSON = openSearch_GroupRoleToJSON;
var Host_Health;
(function (Host_Health) {
    /** UNKNOWN - Health of the host is unknown. */
    Host_Health[Host_Health["UNKNOWN"] = 0] = "UNKNOWN";
    /** ALIVE - The host is performing all its functions normally. */
    Host_Health[Host_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - The host is inoperable and cannot perform any of its essential functions. */
    Host_Health[Host_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - The host is working below capacity or not fully functional. */
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
var Host_Type;
(function (Host_Type) {
    /** TYPE_UNSPECIFIED - The type is not specified. */
    Host_Type[Host_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** OPENSEARCH - An OpenSearch type host. */
    Host_Type[Host_Type["OPENSEARCH"] = 1] = "OPENSEARCH";
    /** DASHBOARDS - A Dashboards type host. */
    Host_Type[Host_Type["DASHBOARDS"] = 2] = "DASHBOARDS";
    Host_Type[Host_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Type = exports.Host_Type || (exports.Host_Type = {}));
function host_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Host_Type.TYPE_UNSPECIFIED;
        case 1:
        case "OPENSEARCH":
            return Host_Type.OPENSEARCH;
        case 2:
        case "DASHBOARDS":
            return Host_Type.DASHBOARDS;
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
        case Host_Type.OPENSEARCH:
            return "OPENSEARCH";
        case Host_Type.DASHBOARDS:
            return "DASHBOARDS";
        default:
            return "UNKNOWN";
    }
}
exports.host_TypeToJSON = host_TypeToJSON;
const baseCluster = {
    $type: "yandex.cloud.mdb.opensearch.v1.Cluster",
    id: "",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    health: 0,
    status: 0,
    securityGroupIds: "",
    serviceAccountId: "",
    deletionProtection: false,
};
exports.Cluster = {
    $type: "yandex.cloud.mdb.opensearch.v1.Cluster",
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
                $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry",
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
        for (const v of message.securityGroupIds) {
            writer.uint32(106).string(v);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(114).string(message.serviceAccountId);
        }
        if (message.deletionProtection === true) {
            writer.uint32(120).bool(message.deletionProtection);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(130).fork()).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            maintenance_1.MaintenanceOperation.encode(message.plannedOperation, writer.uint32(138).fork()).ldelim();
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
                    message.securityGroupIds.push(reader.string());
                    break;
                case 14:
                    message.serviceAccountId = reader.string();
                    break;
                case 15:
                    message.deletionProtection = reader.bool();
                    break;
                case 16:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.plannedOperation = maintenance_1.MaintenanceOperation.decode(reader, reader.uint32());
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
        message.securityGroupIds = ((_c = object.securityGroupIds) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? maintenance_1.MaintenanceOperation.fromJSON(object.plannedOperation)
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
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        message.plannedOperation !== undefined &&
            (obj.plannedOperation = message.plannedOperation
                ? maintenance_1.MaintenanceOperation.toJSON(message.plannedOperation)
                : undefined);
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
        message.securityGroupIds = ((_m = object.securityGroupIds) === null || _m === void 0 ? void 0 : _m.map((e) => e)) || [];
        message.serviceAccountId = (_o = object.serviceAccountId) !== null && _o !== void 0 ? _o : "";
        message.deletionProtection = (_p = object.deletionProtection) !== null && _p !== void 0 ? _p : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? maintenance_1.MaintenanceOperation.fromPartial(object.plannedOperation)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Cluster.$type, exports.Cluster);
const baseCluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry",
    key: "",
    value: "",
};
exports.Cluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry",
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
    $type: "yandex.cloud.mdb.opensearch.v1.Monitoring",
    name: "",
    description: "",
    link: "",
};
exports.Monitoring = {
    $type: "yandex.cloud.mdb.opensearch.v1.Monitoring",
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
    $type: "yandex.cloud.mdb.opensearch.v1.ClusterConfig",
    version: "",
};
exports.ClusterConfig = {
    $type: "yandex.cloud.mdb.opensearch.v1.ClusterConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.opensearch !== undefined) {
            exports.OpenSearch.encode(message.opensearch, writer.uint32(18).fork()).ldelim();
        }
        if (message.dashboards !== undefined) {
            exports.Dashboards.encode(message.dashboards, writer.uint32(26).fork()).ldelim();
        }
        if (message.access !== undefined) {
            exports.Access.encode(message.access, writer.uint32(34).fork()).ldelim();
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
                    message.opensearch = exports.OpenSearch.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.dashboards = exports.Dashboards.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.access = exports.Access.decode(reader, reader.uint32());
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
        message.opensearch =
            object.opensearch !== undefined && object.opensearch !== null
                ? exports.OpenSearch.fromJSON(object.opensearch)
                : undefined;
        message.dashboards =
            object.dashboards !== undefined && object.dashboards !== null
                ? exports.Dashboards.fromJSON(object.dashboards)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromJSON(object.access)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.opensearch !== undefined &&
            (obj.opensearch = message.opensearch
                ? exports.OpenSearch.toJSON(message.opensearch)
                : undefined);
        message.dashboards !== undefined &&
            (obj.dashboards = message.dashboards
                ? exports.Dashboards.toJSON(message.dashboards)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? exports.Access.toJSON(message.access) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClusterConfig);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.opensearch =
            object.opensearch !== undefined && object.opensearch !== null
                ? exports.OpenSearch.fromPartial(object.opensearch)
                : undefined;
        message.dashboards =
            object.dashboards !== undefined && object.dashboards !== null
                ? exports.Dashboards.fromPartial(object.dashboards)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromPartial(object.access)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConfig.$type, exports.ClusterConfig);
const baseOpenSearch = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch",
    plugins: "",
};
exports.OpenSearch = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.plugins) {
            writer.uint32(10).string(v);
        }
        for (const v of message.nodeGroups) {
            exports.OpenSearch_NodeGroup.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.opensearchConfigSet2 !== undefined) {
            opensearch_1.OpenSearchConfigSet2.encode(message.opensearchConfigSet2, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOpenSearch);
        message.plugins = [];
        message.nodeGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plugins.push(reader.string());
                    break;
                case 2:
                    message.nodeGroups.push(exports.OpenSearch_NodeGroup.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.opensearchConfigSet2 = opensearch_1.OpenSearchConfigSet2.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseOpenSearch);
        message.plugins = ((_a = object.plugins) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.nodeGroups = ((_b = object.nodeGroups) !== null && _b !== void 0 ? _b : []).map((e) => exports.OpenSearch_NodeGroup.fromJSON(e));
        message.opensearchConfigSet2 =
            object.opensearchConfigSet_2 !== undefined &&
                object.opensearchConfigSet_2 !== null
                ? opensearch_1.OpenSearchConfigSet2.fromJSON(object.opensearchConfigSet_2)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.plugins) {
            obj.plugins = message.plugins.map((e) => e);
        }
        else {
            obj.plugins = [];
        }
        if (message.nodeGroups) {
            obj.nodeGroups = message.nodeGroups.map((e) => e ? exports.OpenSearch_NodeGroup.toJSON(e) : undefined);
        }
        else {
            obj.nodeGroups = [];
        }
        message.opensearchConfigSet2 !== undefined &&
            (obj.opensearchConfigSet_2 = message.opensearchConfigSet2
                ? opensearch_1.OpenSearchConfigSet2.toJSON(message.opensearchConfigSet2)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseOpenSearch);
        message.plugins = ((_a = object.plugins) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.nodeGroups =
            ((_b = object.nodeGroups) === null || _b === void 0 ? void 0 : _b.map((e) => exports.OpenSearch_NodeGroup.fromPartial(e))) || [];
        message.opensearchConfigSet2 =
            object.opensearchConfigSet2 !== undefined &&
                object.opensearchConfigSet2 !== null
                ? opensearch_1.OpenSearchConfigSet2.fromPartial(object.opensearchConfigSet2)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenSearch.$type, exports.OpenSearch);
const baseOpenSearch_NodeGroup = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch.NodeGroup",
    name: "",
    hostsCount: 0,
    zoneIds: "",
    subnetIds: "",
    assignPublicIp: false,
    roles: 0,
};
exports.OpenSearch_NodeGroup = {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch.NodeGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.hostsCount !== 0) {
            writer.uint32(24).int64(message.hostsCount);
        }
        for (const v of message.zoneIds) {
            writer.uint32(34).string(v);
        }
        for (const v of message.subnetIds) {
            writer.uint32(42).string(v);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(48).bool(message.assignPublicIp);
        }
        writer.uint32(58).fork();
        for (const v of message.roles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOpenSearch_NodeGroup);
        message.zoneIds = [];
        message.subnetIds = [];
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                case 4:
                    message.zoneIds.push(reader.string());
                    break;
                case 5:
                    message.subnetIds.push(reader.string());
                    break;
                case 6:
                    message.assignPublicIp = reader.bool();
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.roles.push(reader.int32());
                        }
                    }
                    else {
                        message.roles.push(reader.int32());
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
        var _a, _b, _c;
        const message = Object.assign({}, baseOpenSearch_NodeGroup);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        message.hostsCount =
            object.hostsCount !== undefined && object.hostsCount !== null
                ? Number(object.hostsCount)
                : 0;
        message.zoneIds = ((_a = object.zoneIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.subnetIds = ((_b = object.subnetIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.roles = ((_c = object.roles) !== null && _c !== void 0 ? _c : []).map((e) => openSearch_GroupRoleFromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.hostsCount !== undefined &&
            (obj.hostsCount = Math.round(message.hostsCount));
        if (message.zoneIds) {
            obj.zoneIds = message.zoneIds.map((e) => e);
        }
        else {
            obj.zoneIds = [];
        }
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        if (message.roles) {
            obj.roles = message.roles.map((e) => openSearch_GroupRoleToJSON(e));
        }
        else {
            obj.roles = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseOpenSearch_NodeGroup);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.hostsCount = (_b = object.hostsCount) !== null && _b !== void 0 ? _b : 0;
        message.zoneIds = ((_c = object.zoneIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.subnetIds = ((_d = object.subnetIds) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.assignPublicIp = (_e = object.assignPublicIp) !== null && _e !== void 0 ? _e : false;
        message.roles = ((_f = object.roles) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenSearch_NodeGroup.$type, exports.OpenSearch_NodeGroup);
const baseDashboards = {
    $type: "yandex.cloud.mdb.opensearch.v1.Dashboards",
};
exports.Dashboards = {
    $type: "yandex.cloud.mdb.opensearch.v1.Dashboards",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.nodeGroups) {
            exports.Dashboards_NodeGroup.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDashboards);
        message.nodeGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.nodeGroups.push(exports.Dashboards_NodeGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseDashboards);
        message.nodeGroups = ((_a = object.nodeGroups) !== null && _a !== void 0 ? _a : []).map((e) => exports.Dashboards_NodeGroup.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.nodeGroups) {
            obj.nodeGroups = message.nodeGroups.map((e) => e ? exports.Dashboards_NodeGroup.toJSON(e) : undefined);
        }
        else {
            obj.nodeGroups = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDashboards);
        message.nodeGroups =
            ((_a = object.nodeGroups) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Dashboards_NodeGroup.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Dashboards.$type, exports.Dashboards);
const baseDashboards_NodeGroup = {
    $type: "yandex.cloud.mdb.opensearch.v1.Dashboards.NodeGroup",
    name: "",
    hostsCount: 0,
    zoneIds: "",
    subnetIds: "",
    assignPublicIp: false,
};
exports.Dashboards_NodeGroup = {
    $type: "yandex.cloud.mdb.opensearch.v1.Dashboards.NodeGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.hostsCount !== 0) {
            writer.uint32(24).int64(message.hostsCount);
        }
        for (const v of message.zoneIds) {
            writer.uint32(34).string(v);
        }
        for (const v of message.subnetIds) {
            writer.uint32(42).string(v);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(48).bool(message.assignPublicIp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDashboards_NodeGroup);
        message.zoneIds = [];
        message.subnetIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                case 4:
                    message.zoneIds.push(reader.string());
                    break;
                case 5:
                    message.subnetIds.push(reader.string());
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
        var _a, _b;
        const message = Object.assign({}, baseDashboards_NodeGroup);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        message.hostsCount =
            object.hostsCount !== undefined && object.hostsCount !== null
                ? Number(object.hostsCount)
                : 0;
        message.zoneIds = ((_a = object.zoneIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.subnetIds = ((_b = object.subnetIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.hostsCount !== undefined &&
            (obj.hostsCount = Math.round(message.hostsCount));
        if (message.zoneIds) {
            obj.zoneIds = message.zoneIds.map((e) => e);
        }
        else {
            obj.zoneIds = [];
        }
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseDashboards_NodeGroup);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.hostsCount = (_b = object.hostsCount) !== null && _b !== void 0 ? _b : 0;
        message.zoneIds = ((_c = object.zoneIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.subnetIds = ((_d = object.subnetIds) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.assignPublicIp = (_e = object.assignPublicIp) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Dashboards_NodeGroup.$type, exports.Dashboards_NodeGroup);
const baseResources = {
    $type: "yandex.cloud.mdb.opensearch.v1.Resources",
    resourcePresetId: "",
    diskSize: 0,
    diskTypeId: "",
};
exports.Resources = {
    $type: "yandex.cloud.mdb.opensearch.v1.Resources",
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
const baseHost = {
    $type: "yandex.cloud.mdb.opensearch.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    type: 0,
    health: 0,
    subnetId: "",
    assignPublicIp: false,
    nodeGroup: "",
    roles: 0,
};
exports.Host = {
    $type: "yandex.cloud.mdb.opensearch.v1.Host",
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
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(34).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(40).int32(message.type);
        }
        if (message.health !== 0) {
            writer.uint32(48).int32(message.health);
        }
        if (message.subnetId !== "") {
            writer.uint32(66).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(72).bool(message.assignPublicIp);
        }
        if (message.system !== undefined) {
            exports.Host_SystemMetrics.encode(message.system, writer.uint32(82).fork()).ldelim();
        }
        if (message.nodeGroup !== "") {
            writer.uint32(90).string(message.nodeGroup);
        }
        writer.uint32(98).fork();
        for (const v of message.roles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHost);
        message.roles = [];
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
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.health = reader.int32();
                    break;
                case 8:
                    message.subnetId = reader.string();
                    break;
                case 9:
                    message.assignPublicIp = reader.bool();
                    break;
                case 10:
                    message.system = exports.Host_SystemMetrics.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.nodeGroup = reader.string();
                    break;
                case 12:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.roles.push(reader.int32());
                        }
                    }
                    else {
                        message.roles.push(reader.int32());
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
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        message.type =
            object.type !== undefined && object.type !== null
                ? host_TypeFromJSON(object.type)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? host_HealthFromJSON(object.health)
                : 0;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.system =
            object.system !== undefined && object.system !== null
                ? exports.Host_SystemMetrics.fromJSON(object.system)
                : undefined;
        message.nodeGroup =
            object.nodeGroup !== undefined && object.nodeGroup !== null
                ? String(object.nodeGroup)
                : "";
        message.roles = ((_a = object.roles) !== null && _a !== void 0 ? _a : []).map((e) => openSearch_GroupRoleFromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
        message.health !== undefined &&
            (obj.health = host_HealthToJSON(message.health));
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.system !== undefined &&
            (obj.system = message.system
                ? exports.Host_SystemMetrics.toJSON(message.system)
                : undefined);
        message.nodeGroup !== undefined && (obj.nodeGroup = message.nodeGroup);
        if (message.roles) {
            obj.roles = message.roles.map((e) => openSearch_GroupRoleToJSON(e));
        }
        else {
            obj.roles = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseHost);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.zoneId = (_c = object.zoneId) !== null && _c !== void 0 ? _c : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 0;
        message.health = (_e = object.health) !== null && _e !== void 0 ? _e : 0;
        message.subnetId = (_f = object.subnetId) !== null && _f !== void 0 ? _f : "";
        message.assignPublicIp = (_g = object.assignPublicIp) !== null && _g !== void 0 ? _g : false;
        message.system =
            object.system !== undefined && object.system !== null
                ? exports.Host_SystemMetrics.fromPartial(object.system)
                : undefined;
        message.nodeGroup = (_h = object.nodeGroup) !== null && _h !== void 0 ? _h : "";
        message.roles = ((_j = object.roles) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host.$type, exports.Host);
const baseHost_CPUMetric = {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.CPUMetric",
    timestamp: 0,
    used: 0,
};
exports.Host_CPUMetric = {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.CPUMetric",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== 0) {
            writer.uint32(8).int64(message.timestamp);
        }
        if (message.used !== 0) {
            writer.uint32(17).double(message.used);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHost_CPUMetric);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToNumber(reader.int64());
                    break;
                case 2:
                    message.used = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHost_CPUMetric);
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? Number(object.timestamp)
                : 0;
        message.used =
            object.used !== undefined && object.used !== null
                ? Number(object.used)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = Math.round(message.timestamp));
        message.used !== undefined && (obj.used = message.used);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseHost_CPUMetric);
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : 0;
        message.used = (_b = object.used) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host_CPUMetric.$type, exports.Host_CPUMetric);
const baseHost_MemoryMetric = {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.MemoryMetric",
    timestamp: 0,
    used: 0,
    total: 0,
};
exports.Host_MemoryMetric = {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.MemoryMetric",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== 0) {
            writer.uint32(8).int64(message.timestamp);
        }
        if (message.used !== 0) {
            writer.uint32(16).int64(message.used);
        }
        if (message.total !== 0) {
            writer.uint32(24).int64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHost_MemoryMetric);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToNumber(reader.int64());
                    break;
                case 2:
                    message.used = longToNumber(reader.int64());
                    break;
                case 3:
                    message.total = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHost_MemoryMetric);
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? Number(object.timestamp)
                : 0;
        message.used =
            object.used !== undefined && object.used !== null
                ? Number(object.used)
                : 0;
        message.total =
            object.total !== undefined && object.total !== null
                ? Number(object.total)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = Math.round(message.timestamp));
        message.used !== undefined && (obj.used = Math.round(message.used));
        message.total !== undefined && (obj.total = Math.round(message.total));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseHost_MemoryMetric);
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : 0;
        message.used = (_b = object.used) !== null && _b !== void 0 ? _b : 0;
        message.total = (_c = object.total) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host_MemoryMetric.$type, exports.Host_MemoryMetric);
const baseHost_DiskMetric = {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.DiskMetric",
    timestamp: 0,
    used: 0,
    total: 0,
};
exports.Host_DiskMetric = {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.DiskMetric",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== 0) {
            writer.uint32(8).int64(message.timestamp);
        }
        if (message.used !== 0) {
            writer.uint32(16).int64(message.used);
        }
        if (message.total !== 0) {
            writer.uint32(24).int64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHost_DiskMetric);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToNumber(reader.int64());
                    break;
                case 2:
                    message.used = longToNumber(reader.int64());
                    break;
                case 3:
                    message.total = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHost_DiskMetric);
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? Number(object.timestamp)
                : 0;
        message.used =
            object.used !== undefined && object.used !== null
                ? Number(object.used)
                : 0;
        message.total =
            object.total !== undefined && object.total !== null
                ? Number(object.total)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = Math.round(message.timestamp));
        message.used !== undefined && (obj.used = Math.round(message.used));
        message.total !== undefined && (obj.total = Math.round(message.total));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseHost_DiskMetric);
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : 0;
        message.used = (_b = object.used) !== null && _b !== void 0 ? _b : 0;
        message.total = (_c = object.total) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host_DiskMetric.$type, exports.Host_DiskMetric);
const baseHost_SystemMetrics = {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.SystemMetrics",
};
exports.Host_SystemMetrics = {
    $type: "yandex.cloud.mdb.opensearch.v1.Host.SystemMetrics",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cpu !== undefined) {
            exports.Host_CPUMetric.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            exports.Host_MemoryMetric.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        if (message.disk !== undefined) {
            exports.Host_DiskMetric.encode(message.disk, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHost_SystemMetrics);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cpu = exports.Host_CPUMetric.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.memory = exports.Host_MemoryMetric.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.disk = exports.Host_DiskMetric.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHost_SystemMetrics);
        message.cpu =
            object.cpu !== undefined && object.cpu !== null
                ? exports.Host_CPUMetric.fromJSON(object.cpu)
                : undefined;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? exports.Host_MemoryMetric.fromJSON(object.memory)
                : undefined;
        message.disk =
            object.disk !== undefined && object.disk !== null
                ? exports.Host_DiskMetric.fromJSON(object.disk)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cpu !== undefined &&
            (obj.cpu = message.cpu ? exports.Host_CPUMetric.toJSON(message.cpu) : undefined);
        message.memory !== undefined &&
            (obj.memory = message.memory
                ? exports.Host_MemoryMetric.toJSON(message.memory)
                : undefined);
        message.disk !== undefined &&
            (obj.disk = message.disk
                ? exports.Host_DiskMetric.toJSON(message.disk)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseHost_SystemMetrics);
        message.cpu =
            object.cpu !== undefined && object.cpu !== null
                ? exports.Host_CPUMetric.fromPartial(object.cpu)
                : undefined;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? exports.Host_MemoryMetric.fromPartial(object.memory)
                : undefined;
        message.disk =
            object.disk !== undefined && object.disk !== null
                ? exports.Host_DiskMetric.fromPartial(object.disk)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host_SystemMetrics.$type, exports.Host_SystemMetrics);
const baseAccess = {
    $type: "yandex.cloud.mdb.opensearch.v1.Access",
    dataTransfer: false,
    serverless: false,
};
exports.Access = {
    $type: "yandex.cloud.mdb.opensearch.v1.Access",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataTransfer === true) {
            writer.uint32(8).bool(message.dataTransfer);
        }
        if (message.serverless === true) {
            writer.uint32(16).bool(message.serverless);
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
                    message.dataTransfer = reader.bool();
                    break;
                case 2:
                    message.serverless = reader.bool();
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
        message.dataTransfer =
            object.dataTransfer !== undefined && object.dataTransfer !== null
                ? Boolean(object.dataTransfer)
                : false;
        message.serverless =
            object.serverless !== undefined && object.serverless !== null
                ? Boolean(object.serverless)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataTransfer !== undefined &&
            (obj.dataTransfer = message.dataTransfer);
        message.serverless !== undefined && (obj.serverless = message.serverless);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAccess);
        message.dataTransfer = (_a = object.dataTransfer) !== null && _a !== void 0 ? _a : false;
        message.serverless = (_b = object.serverless) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Access.$type, exports.Access);
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
