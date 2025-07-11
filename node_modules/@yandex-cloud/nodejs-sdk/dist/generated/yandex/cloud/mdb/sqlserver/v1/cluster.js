"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Access = exports.Resources = exports.Service = exports.Host = exports.ClusterConfig = exports.Monitoring = exports.Cluster_LabelsEntry = exports.Cluster = exports.service_HealthToJSON = exports.service_HealthFromJSON = exports.Service_Health = exports.service_TypeToJSON = exports.service_TypeFromJSON = exports.Service_Type = exports.host_HealthToJSON = exports.host_HealthFromJSON = exports.Host_Health = exports.host_RoleToJSON = exports.host_RoleFromJSON = exports.Host_Role = exports.clusterConfig_SecondaryConnectionsToJSON = exports.clusterConfig_SecondaryConnectionsFromJSON = exports.ClusterConfig_SecondaryConnections = exports.cluster_StatusToJSON = exports.cluster_StatusFromJSON = exports.Cluster_Status = exports.cluster_HealthToJSON = exports.cluster_HealthFromJSON = exports.Cluster_Health = exports.cluster_EnvironmentToJSON = exports.cluster_EnvironmentFromJSON = exports.Cluster_Environment = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timeofday_1 = require("../../../../../google/type/timeofday");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const sqlserver2016sp2_1 = require("../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2016sp2");
const sqlserver2017_1 = require("../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2017");
const sqlserver2019_1 = require("../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2019");
exports.protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
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
    /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] of all hosts in the cluster is `UNKNOWN`). */
    Cluster_Health[Cluster_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - Cluster is alive and works well ([Host.health] of all hosts in the cluster is `ALIVE`). */
    Cluster_Health[Cluster_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - Cluster is inoperable ([Host.health] of all hosts in the cluster is `DEAD`). */
    Cluster_Health[Cluster_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - Cluster is in degraded state ([Host.health] of at least one of the hosts in the cluster is not `ALIVE`). */
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
var ClusterConfig_SecondaryConnections;
(function (ClusterConfig_SecondaryConnections) {
    ClusterConfig_SecondaryConnections[ClusterConfig_SecondaryConnections["SECONDARY_CONNECTIONS_UNSPECIFIED"] = 0] = "SECONDARY_CONNECTIONS_UNSPECIFIED";
    /** SECONDARY_CONNECTIONS_OFF - Connections to secondary replicas are prohibited */
    ClusterConfig_SecondaryConnections[ClusterConfig_SecondaryConnections["SECONDARY_CONNECTIONS_OFF"] = 1] = "SECONDARY_CONNECTIONS_OFF";
    /** SECONDARY_CONNECTIONS_READ_ONLY - Secondary replicas are read-only */
    ClusterConfig_SecondaryConnections[ClusterConfig_SecondaryConnections["SECONDARY_CONNECTIONS_READ_ONLY"] = 2] = "SECONDARY_CONNECTIONS_READ_ONLY";
    ClusterConfig_SecondaryConnections[ClusterConfig_SecondaryConnections["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClusterConfig_SecondaryConnections = exports.ClusterConfig_SecondaryConnections || (exports.ClusterConfig_SecondaryConnections = {}));
function clusterConfig_SecondaryConnectionsFromJSON(object) {
    switch (object) {
        case 0:
        case "SECONDARY_CONNECTIONS_UNSPECIFIED":
            return ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_UNSPECIFIED;
        case 1:
        case "SECONDARY_CONNECTIONS_OFF":
            return ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_OFF;
        case 2:
        case "SECONDARY_CONNECTIONS_READ_ONLY":
            return ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_READ_ONLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClusterConfig_SecondaryConnections.UNRECOGNIZED;
    }
}
exports.clusterConfig_SecondaryConnectionsFromJSON = clusterConfig_SecondaryConnectionsFromJSON;
function clusterConfig_SecondaryConnectionsToJSON(object) {
    switch (object) {
        case ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_UNSPECIFIED:
            return "SECONDARY_CONNECTIONS_UNSPECIFIED";
        case ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_OFF:
            return "SECONDARY_CONNECTIONS_OFF";
        case ClusterConfig_SecondaryConnections.SECONDARY_CONNECTIONS_READ_ONLY:
            return "SECONDARY_CONNECTIONS_READ_ONLY";
        default:
            return "UNKNOWN";
    }
}
exports.clusterConfig_SecondaryConnectionsToJSON = clusterConfig_SecondaryConnectionsToJSON;
var Host_Role;
(function (Host_Role) {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    Host_Role[Host_Role["ROLE_UNKNOWN"] = 0] = "ROLE_UNKNOWN";
    /** MASTER - Host is the master SQL Server instance in the cluster. */
    Host_Role[Host_Role["MASTER"] = 1] = "MASTER";
    /** REPLICA - Host is a replica SQL Server instance in the cluster. */
    Host_Role[Host_Role["REPLICA"] = 2] = "REPLICA";
    Host_Role[Host_Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Role = exports.Host_Role || (exports.Host_Role = {}));
function host_RoleFromJSON(object) {
    switch (object) {
        case 0:
        case "ROLE_UNKNOWN":
            return Host_Role.ROLE_UNKNOWN;
        case 1:
        case "MASTER":
            return Host_Role.MASTER;
        case 2:
        case "REPLICA":
            return Host_Role.REPLICA;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Host_Role.UNRECOGNIZED;
    }
}
exports.host_RoleFromJSON = host_RoleFromJSON;
function host_RoleToJSON(object) {
    switch (object) {
        case Host_Role.ROLE_UNKNOWN:
            return "ROLE_UNKNOWN";
        case Host_Role.MASTER:
            return "MASTER";
        case Host_Role.REPLICA:
            return "REPLICA";
        default:
            return "UNKNOWN";
    }
}
exports.host_RoleToJSON = host_RoleToJSON;
var Host_Health;
(function (Host_Health) {
    /** HEALTH_UNKNOWN - Health of the host is unknown. */
    Host_Health[Host_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - The host is performing all its functions normally. */
    Host_Health[Host_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - The host is inoperable and cannot perform any of its essential functions. */
    Host_Health[Host_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - The host is degraded and can perform only some of its essential functions. */
    Host_Health[Host_Health["DEGRADED"] = 3] = "DEGRADED";
    Host_Health[Host_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Health = exports.Host_Health || (exports.Host_Health = {}));
function host_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case "HEALTH_UNKNOWN":
            return Host_Health.HEALTH_UNKNOWN;
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
        case Host_Health.HEALTH_UNKNOWN:
            return "HEALTH_UNKNOWN";
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
    /** SQLSERVER - SQL Server service. */
    Service_Type[Service_Type["SQLSERVER"] = 1] = "SQLSERVER";
    Service_Type[Service_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Service_Type = exports.Service_Type || (exports.Service_Type = {}));
function service_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Service_Type.TYPE_UNSPECIFIED;
        case 1:
        case "SQLSERVER":
            return Service_Type.SQLSERVER;
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
        case Service_Type.SQLSERVER:
            return "SQLSERVER";
        default:
            return "UNKNOWN";
    }
}
exports.service_TypeToJSON = service_TypeToJSON;
var Service_Health;
(function (Service_Health) {
    /** HEALTH_UNKNOWN - Health of the server is unknown. */
    Service_Health[Service_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - The server is working normally. */
    Service_Health[Service_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - The server is dead or unresponsive. */
    Service_Health[Service_Health["DEAD"] = 2] = "DEAD";
    Service_Health[Service_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Service_Health = exports.Service_Health || (exports.Service_Health = {}));
function service_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case "HEALTH_UNKNOWN":
            return Service_Health.HEALTH_UNKNOWN;
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
        case Service_Health.HEALTH_UNKNOWN:
            return "HEALTH_UNKNOWN";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.Cluster",
    id: "",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    health: 0,
    status: 0,
    securityGroupIds: "",
    deletionProtection: false,
    sqlcollation: "",
    hostGroupIds: "",
    serviceAccountId: "",
};
exports.Cluster = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Cluster",
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
                $type: "yandex.cloud.mdb.sqlserver.v1.Cluster.LabelsEntry",
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
        if (message.deletionProtection === true) {
            writer.uint32(112).bool(message.deletionProtection);
        }
        if (message.sqlcollation !== "") {
            writer.uint32(122).string(message.sqlcollation);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(130).string(v);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(138).string(message.serviceAccountId);
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
                    message.deletionProtection = reader.bool();
                    break;
                case 15:
                    message.sqlcollation = reader.string();
                    break;
                case 16:
                    message.hostGroupIds.push(reader.string());
                    break;
                case 17:
                    message.serviceAccountId = reader.string();
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
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.sqlcollation =
            object.sqlcollation !== undefined && object.sqlcollation !== null
                ? String(object.sqlcollation)
                : "";
        message.hostGroupIds = ((_d = object.hostGroupIds) !== null && _d !== void 0 ? _d : []).map((e) => String(e));
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
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
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.sqlcollation !== undefined &&
            (obj.sqlcollation = message.sqlcollation);
        if (message.hostGroupIds) {
            obj.hostGroupIds = message.hostGroupIds.map((e) => e);
        }
        else {
            obj.hostGroupIds = [];
        }
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
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
        message.deletionProtection = (_o = object.deletionProtection) !== null && _o !== void 0 ? _o : false;
        message.sqlcollation = (_p = object.sqlcollation) !== null && _p !== void 0 ? _p : "";
        message.hostGroupIds = ((_q = object.hostGroupIds) === null || _q === void 0 ? void 0 : _q.map((e) => e)) || [];
        message.serviceAccountId = (_r = object.serviceAccountId) !== null && _r !== void 0 ? _r : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Cluster.$type, exports.Cluster);
const baseCluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Cluster.LabelsEntry",
    key: "",
    value: "",
};
exports.Cluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Cluster.LabelsEntry",
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
    $type: "yandex.cloud.mdb.sqlserver.v1.Monitoring",
    name: "",
    description: "",
    link: "",
};
exports.Monitoring = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Monitoring",
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
    $type: "yandex.cloud.mdb.sqlserver.v1.ClusterConfig",
    version: "",
    secondaryConnections: 0,
};
exports.ClusterConfig = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ClusterConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.sqlserverConfig2016sp2std !== undefined) {
            sqlserver2016sp2_1.SQLServerConfigSet2016sp2std.encode(message.sqlserverConfig2016sp2std, writer.uint32(18).fork()).ldelim();
        }
        if (message.sqlserverConfig2016sp2ent !== undefined) {
            sqlserver2016sp2_1.SQLServerConfigSet2016sp2ent.encode(message.sqlserverConfig2016sp2ent, writer.uint32(42).fork()).ldelim();
        }
        if (message.sqlserverConfig2017std !== undefined) {
            sqlserver2017_1.SQLServerConfigSet2017std.encode(message.sqlserverConfig2017std, writer.uint32(66).fork()).ldelim();
        }
        if (message.sqlserverConfig2017ent !== undefined) {
            sqlserver2017_1.SQLServerConfigSet2017ent.encode(message.sqlserverConfig2017ent, writer.uint32(74).fork()).ldelim();
        }
        if (message.sqlserverConfig2019std !== undefined) {
            sqlserver2019_1.SQLServerConfigSet2019std.encode(message.sqlserverConfig2019std, writer.uint32(82).fork()).ldelim();
        }
        if (message.sqlserverConfig2019ent !== undefined) {
            sqlserver2019_1.SQLServerConfigSet2019ent.encode(message.sqlserverConfig2019ent, writer.uint32(90).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            timeofday_1.TimeOfDay.encode(message.backupWindowStart, writer.uint32(34).fork()).ldelim();
        }
        if (message.access !== undefined) {
            exports.Access.encode(message.access, writer.uint32(50).fork()).ldelim();
        }
        if (message.secondaryConnections !== 0) {
            writer.uint32(56).int32(message.secondaryConnections);
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
                    message.sqlserverConfig2016sp2std =
                        sqlserver2016sp2_1.SQLServerConfigSet2016sp2std.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sqlserverConfig2016sp2ent =
                        sqlserver2016sp2_1.SQLServerConfigSet2016sp2ent.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.sqlserverConfig2017std = sqlserver2017_1.SQLServerConfigSet2017std.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sqlserverConfig2017ent = sqlserver2017_1.SQLServerConfigSet2017ent.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.sqlserverConfig2019std = sqlserver2019_1.SQLServerConfigSet2019std.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.sqlserverConfig2019ent = sqlserver2019_1.SQLServerConfigSet2019ent.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.backupWindowStart = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.access = exports.Access.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.secondaryConnections = reader.int32();
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
        message.sqlserverConfig2016sp2std =
            object.sqlserverConfig_2016sp2std !== undefined &&
                object.sqlserverConfig_2016sp2std !== null
                ? sqlserver2016sp2_1.SQLServerConfigSet2016sp2std.fromJSON(object.sqlserverConfig_2016sp2std)
                : undefined;
        message.sqlserverConfig2016sp2ent =
            object.sqlserverConfig_2016sp2ent !== undefined &&
                object.sqlserverConfig_2016sp2ent !== null
                ? sqlserver2016sp2_1.SQLServerConfigSet2016sp2ent.fromJSON(object.sqlserverConfig_2016sp2ent)
                : undefined;
        message.sqlserverConfig2017std =
            object.sqlserverConfig_2017std !== undefined &&
                object.sqlserverConfig_2017std !== null
                ? sqlserver2017_1.SQLServerConfigSet2017std.fromJSON(object.sqlserverConfig_2017std)
                : undefined;
        message.sqlserverConfig2017ent =
            object.sqlserverConfig_2017ent !== undefined &&
                object.sqlserverConfig_2017ent !== null
                ? sqlserver2017_1.SQLServerConfigSet2017ent.fromJSON(object.sqlserverConfig_2017ent)
                : undefined;
        message.sqlserverConfig2019std =
            object.sqlserverConfig_2019std !== undefined &&
                object.sqlserverConfig_2019std !== null
                ? sqlserver2019_1.SQLServerConfigSet2019std.fromJSON(object.sqlserverConfig_2019std)
                : undefined;
        message.sqlserverConfig2019ent =
            object.sqlserverConfig_2019ent !== undefined &&
                object.sqlserverConfig_2019ent !== null
                ? sqlserver2019_1.SQLServerConfigSet2019ent.fromJSON(object.sqlserverConfig_2019ent)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
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
        message.secondaryConnections =
            object.secondaryConnections !== undefined &&
                object.secondaryConnections !== null
                ? clusterConfig_SecondaryConnectionsFromJSON(object.secondaryConnections)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.sqlserverConfig2016sp2std !== undefined &&
            (obj.sqlserverConfig_2016sp2std = message.sqlserverConfig2016sp2std
                ? sqlserver2016sp2_1.SQLServerConfigSet2016sp2std.toJSON(message.sqlserverConfig2016sp2std)
                : undefined);
        message.sqlserverConfig2016sp2ent !== undefined &&
            (obj.sqlserverConfig_2016sp2ent = message.sqlserverConfig2016sp2ent
                ? sqlserver2016sp2_1.SQLServerConfigSet2016sp2ent.toJSON(message.sqlserverConfig2016sp2ent)
                : undefined);
        message.sqlserverConfig2017std !== undefined &&
            (obj.sqlserverConfig_2017std = message.sqlserverConfig2017std
                ? sqlserver2017_1.SQLServerConfigSet2017std.toJSON(message.sqlserverConfig2017std)
                : undefined);
        message.sqlserverConfig2017ent !== undefined &&
            (obj.sqlserverConfig_2017ent = message.sqlserverConfig2017ent
                ? sqlserver2017_1.SQLServerConfigSet2017ent.toJSON(message.sqlserverConfig2017ent)
                : undefined);
        message.sqlserverConfig2019std !== undefined &&
            (obj.sqlserverConfig_2019std = message.sqlserverConfig2019std
                ? sqlserver2019_1.SQLServerConfigSet2019std.toJSON(message.sqlserverConfig2019std)
                : undefined);
        message.sqlserverConfig2019ent !== undefined &&
            (obj.sqlserverConfig_2019ent = message.sqlserverConfig2019ent
                ? sqlserver2019_1.SQLServerConfigSet2019ent.toJSON(message.sqlserverConfig2019ent)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? timeofday_1.TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? exports.Access.toJSON(message.access) : undefined);
        message.secondaryConnections !== undefined &&
            (obj.secondaryConnections = clusterConfig_SecondaryConnectionsToJSON(message.secondaryConnections));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClusterConfig);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.sqlserverConfig2016sp2std =
            object.sqlserverConfig2016sp2std !== undefined &&
                object.sqlserverConfig2016sp2std !== null
                ? sqlserver2016sp2_1.SQLServerConfigSet2016sp2std.fromPartial(object.sqlserverConfig2016sp2std)
                : undefined;
        message.sqlserverConfig2016sp2ent =
            object.sqlserverConfig2016sp2ent !== undefined &&
                object.sqlserverConfig2016sp2ent !== null
                ? sqlserver2016sp2_1.SQLServerConfigSet2016sp2ent.fromPartial(object.sqlserverConfig2016sp2ent)
                : undefined;
        message.sqlserverConfig2017std =
            object.sqlserverConfig2017std !== undefined &&
                object.sqlserverConfig2017std !== null
                ? sqlserver2017_1.SQLServerConfigSet2017std.fromPartial(object.sqlserverConfig2017std)
                : undefined;
        message.sqlserverConfig2017ent =
            object.sqlserverConfig2017ent !== undefined &&
                object.sqlserverConfig2017ent !== null
                ? sqlserver2017_1.SQLServerConfigSet2017ent.fromPartial(object.sqlserverConfig2017ent)
                : undefined;
        message.sqlserverConfig2019std =
            object.sqlserverConfig2019std !== undefined &&
                object.sqlserverConfig2019std !== null
                ? sqlserver2019_1.SQLServerConfigSet2019std.fromPartial(object.sqlserverConfig2019std)
                : undefined;
        message.sqlserverConfig2019ent =
            object.sqlserverConfig2019ent !== undefined &&
                object.sqlserverConfig2019ent !== null
                ? sqlserver2019_1.SQLServerConfigSet2019ent.fromPartial(object.sqlserverConfig2019ent)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
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
        message.secondaryConnections = (_b = object.secondaryConnections) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConfig.$type, exports.ClusterConfig);
const baseHost = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    role: 0,
    health: 0,
    subnetId: "",
    assignPublicIp: false,
};
exports.Host = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Host",
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
        if (message.role !== 0) {
            writer.uint32(40).int32(message.role);
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
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.role = reader.int32();
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
        message.role =
            object.role !== undefined && object.role !== null
                ? host_RoleFromJSON(object.role)
                : 0;
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
        message.role !== undefined && (obj.role = host_RoleToJSON(message.role));
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseHost);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.zoneId = (_c = object.zoneId) !== null && _c !== void 0 ? _c : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.role = (_d = object.role) !== null && _d !== void 0 ? _d : 0;
        message.health = (_e = object.health) !== null && _e !== void 0 ? _e : 0;
        message.services =
            ((_f = object.services) === null || _f === void 0 ? void 0 : _f.map((e) => exports.Service.fromPartial(e))) || [];
        message.subnetId = (_g = object.subnetId) !== null && _g !== void 0 ? _g : "";
        message.assignPublicIp = (_h = object.assignPublicIp) !== null && _h !== void 0 ? _h : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host.$type, exports.Host);
const baseService = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Service",
    type: 0,
    health: 0,
};
exports.Service = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Service",
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
    $type: "yandex.cloud.mdb.sqlserver.v1.Resources",
    resourcePresetId: "",
    diskSize: 0,
    diskTypeId: "",
};
exports.Resources = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Resources",
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
    $type: "yandex.cloud.mdb.sqlserver.v1.Access",
    dataLens: false,
    webSql: false,
};
exports.Access = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Access",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataLens === true) {
            writer.uint32(8).bool(message.dataLens);
        }
        if (message.webSql === true) {
            writer.uint32(16).bool(message.webSql);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataLens !== undefined && (obj.dataLens = message.dataLens);
        message.webSql !== undefined && (obj.webSql = message.webSql);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAccess);
        message.dataLens = (_a = object.dataLens) !== null && _a !== void 0 ? _a : false;
        message.webSql = (_b = object.webSql) !== null && _b !== void 0 ? _b : false;
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
