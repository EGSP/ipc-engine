"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongodb44Enterprise = exports.Mongodb44_MongoInfra = exports.Mongodb44_Mongos = exports.Mongodb44_MongoCfg = exports.Mongodb44_Mongod = exports.Mongodb44 = exports.Mongodb42_MongoInfra = exports.Mongodb42_Mongos = exports.Mongodb42_MongoCfg = exports.Mongodb42_Mongod = exports.Mongodb42 = exports.Mongodb40_MongoInfra = exports.Mongodb40_Mongos = exports.Mongodb40_MongoCfg = exports.Mongodb40_Mongod = exports.Mongodb40 = exports.Mongodb36_MongoInfra = exports.Mongodb36_Mongos = exports.Mongodb36_MongoCfg = exports.Mongodb36_Mongod = exports.Mongodb36 = exports.ClusterConfig = exports.Monitoring = exports.Cluster_LabelsEntry = exports.Cluster = exports.service_HealthToJSON = exports.service_HealthFromJSON = exports.Service_Health = exports.service_TypeToJSON = exports.service_TypeFromJSON = exports.Service_Type = exports.host_HealthToJSON = exports.host_HealthFromJSON = exports.Host_Health = exports.host_RoleToJSON = exports.host_RoleFromJSON = exports.Host_Role = exports.host_TypeToJSON = exports.host_TypeFromJSON = exports.Host_Type = exports.cluster_StatusToJSON = exports.cluster_StatusFromJSON = exports.Cluster_Status = exports.cluster_HealthToJSON = exports.cluster_HealthFromJSON = exports.Cluster_Health = exports.cluster_EnvironmentToJSON = exports.cluster_EnvironmentFromJSON = exports.Cluster_Environment = exports.protobufPackage = void 0;
exports.PerformanceDiagnosticsConfig = exports.Access = exports.Resources = exports.Service = exports.Host = exports.Shard = exports.Mongodb60Enterprise_MongoInfra = exports.Mongodb60Enterprise_Mongos = exports.Mongodb60Enterprise_MongoCfg = exports.Mongodb60Enterprise_Mongod = exports.Mongodb60Enterprise = exports.Mongodb60_MongoInfra = exports.Mongodb60_Mongos = exports.Mongodb60_MongoCfg = exports.Mongodb60_Mongod = exports.Mongodb60 = exports.Mongodb50Enterprise_MongoInfra = exports.Mongodb50Enterprise_Mongos = exports.Mongodb50Enterprise_MongoCfg = exports.Mongodb50Enterprise_Mongod = exports.Mongodb50Enterprise = exports.Mongodb50_MongoInfra = exports.Mongodb50_Mongos = exports.Mongodb50_MongoCfg = exports.Mongodb50_Mongod = exports.Mongodb50 = exports.Mongodb44Enterprise_MongoInfra = exports.Mongodb44Enterprise_Mongos = exports.Mongodb44Enterprise_MongoCfg = exports.Mongodb44Enterprise_Mongod = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const maintenance_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/maintenance");
const timeofday_1 = require("../../../../../google/type/timeofday");
const mongodb3_6_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb3_6");
const mongodb4_0_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_0");
const mongodb4_2_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_2");
const mongodb4_4_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4");
const mongodb4_4_enterprise_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4_enterprise");
const mongodb5_0_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0");
const mongodb5_0_enterprise_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0_enterprise");
const mongodb6_0_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb6_0");
const mongodb6_0_enterprise_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb6_0_enterprise");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.mongodb.v1";
/** Deployment environment. */
var Cluster_Environment;
(function (Cluster_Environment) {
    Cluster_Environment[Cluster_Environment["ENVIRONMENT_UNSPECIFIED"] = 0] = "ENVIRONMENT_UNSPECIFIED";
    /**
     * PRODUCTION - Stable environment with a conservative update policy: only hotfixes
     * are applied during regular maintenance.
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
    /** MONGOD - A mongod host. */
    Host_Type[Host_Type["MONGOD"] = 1] = "MONGOD";
    /** MONGOS - A mongos host. */
    Host_Type[Host_Type["MONGOS"] = 2] = "MONGOS";
    /** MONGOCFG - A mongocfg host. */
    Host_Type[Host_Type["MONGOCFG"] = 3] = "MONGOCFG";
    /** MONGOINFRA - A mongoinfra (mongos+mongocfg) host. */
    Host_Type[Host_Type["MONGOINFRA"] = 4] = "MONGOINFRA";
    Host_Type[Host_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Type = exports.Host_Type || (exports.Host_Type = {}));
function host_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Host_Type.TYPE_UNSPECIFIED;
        case 1:
        case "MONGOD":
            return Host_Type.MONGOD;
        case 2:
        case "MONGOS":
            return Host_Type.MONGOS;
        case 3:
        case "MONGOCFG":
            return Host_Type.MONGOCFG;
        case 4:
        case "MONGOINFRA":
            return Host_Type.MONGOINFRA;
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
        case Host_Type.MONGOD:
            return "MONGOD";
        case Host_Type.MONGOS:
            return "MONGOS";
        case Host_Type.MONGOCFG:
            return "MONGOCFG";
        case Host_Type.MONGOINFRA:
            return "MONGOINFRA";
        default:
            return "UNKNOWN";
    }
}
exports.host_TypeToJSON = host_TypeToJSON;
var Host_Role;
(function (Host_Role) {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    Host_Role[Host_Role["ROLE_UNKNOWN"] = 0] = "ROLE_UNKNOWN";
    /** PRIMARY - Host is the primary MongoDB server in the cluster. */
    Host_Role[Host_Role["PRIMARY"] = 1] = "PRIMARY";
    /** SECONDARY - Host is a secondary MongoDB server in the cluster. */
    Host_Role[Host_Role["SECONDARY"] = 2] = "SECONDARY";
    Host_Role[Host_Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Role = exports.Host_Role || (exports.Host_Role = {}));
function host_RoleFromJSON(object) {
    switch (object) {
        case 0:
        case "ROLE_UNKNOWN":
            return Host_Role.ROLE_UNKNOWN;
        case 1:
        case "PRIMARY":
            return Host_Role.PRIMARY;
        case 2:
        case "SECONDARY":
            return Host_Role.SECONDARY;
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
        case Host_Role.PRIMARY:
            return "PRIMARY";
        case Host_Role.SECONDARY:
            return "SECONDARY";
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
    /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
    Host_Health[Host_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - The host is degraded, and can perform only some of its essential functions. */
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
    /** MONGOD - The host is running a mongod daemon. */
    Service_Type[Service_Type["MONGOD"] = 1] = "MONGOD";
    /** MONGOS - The host is running a mongos daemon. */
    Service_Type[Service_Type["MONGOS"] = 2] = "MONGOS";
    /** MONGOCFG - The host is running a MongoDB config server. */
    Service_Type[Service_Type["MONGOCFG"] = 3] = "MONGOCFG";
    Service_Type[Service_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Service_Type = exports.Service_Type || (exports.Service_Type = {}));
function service_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Service_Type.TYPE_UNSPECIFIED;
        case 1:
        case "MONGOD":
            return Service_Type.MONGOD;
        case 2:
        case "MONGOS":
            return Service_Type.MONGOS;
        case 3:
        case "MONGOCFG":
            return Service_Type.MONGOCFG;
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
        case Service_Type.MONGOD:
            return "MONGOD";
        case Service_Type.MONGOS:
            return "MONGOS";
        case Service_Type.MONGOCFG:
            return "MONGOCFG";
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
    $type: "yandex.cloud.mdb.mongodb.v1.Cluster",
    id: "",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    health: 0,
    status: 0,
    sharded: false,
    securityGroupIds: "",
    deletionProtection: false,
};
exports.Cluster = {
    $type: "yandex.cloud.mdb.mongodb.v1.Cluster",
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
                $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry",
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
        if (message.sharded === true) {
            writer.uint32(104).bool(message.sharded);
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
                    message.sharded = reader.bool();
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
        message.sharded =
            object.sharded !== undefined && object.sharded !== null
                ? Boolean(object.sharded)
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
        message.sharded !== undefined && (obj.sharded = message.sharded);
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
        message.sharded = (_m = object.sharded) !== null && _m !== void 0 ? _m : false;
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
    $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry",
    key: "",
    value: "",
};
exports.Cluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry",
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
    $type: "yandex.cloud.mdb.mongodb.v1.Monitoring",
    name: "",
    description: "",
    link: "",
};
exports.Monitoring = {
    $type: "yandex.cloud.mdb.mongodb.v1.Monitoring",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ClusterConfig",
    version: "",
    featureCompatibilityVersion: "",
};
exports.ClusterConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.ClusterConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.featureCompatibilityVersion !== "") {
            writer.uint32(42).string(message.featureCompatibilityVersion);
        }
        if (message.mongodb36 !== undefined) {
            exports.Mongodb36.encode(message.mongodb36, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongodb40 !== undefined) {
            exports.Mongodb40.encode(message.mongodb40, writer.uint32(34).fork()).ldelim();
        }
        if (message.mongodb42 !== undefined) {
            exports.Mongodb42.encode(message.mongodb42, writer.uint32(58).fork()).ldelim();
        }
        if (message.mongodb44 !== undefined) {
            exports.Mongodb44.encode(message.mongodb44, writer.uint32(66).fork()).ldelim();
        }
        if (message.mongodb50 !== undefined) {
            exports.Mongodb50.encode(message.mongodb50, writer.uint32(82).fork()).ldelim();
        }
        if (message.mongodb60 !== undefined) {
            exports.Mongodb60.encode(message.mongodb60, writer.uint32(114).fork()).ldelim();
        }
        if (message.mongodb44Enterprise !== undefined) {
            exports.Mongodb44Enterprise.encode(message.mongodb44Enterprise, writer.uint32(90).fork()).ldelim();
        }
        if (message.mongodb50Enterprise !== undefined) {
            exports.Mongodb50Enterprise.encode(message.mongodb50Enterprise, writer.uint32(98).fork()).ldelim();
        }
        if (message.mongodb60Enterprise !== undefined) {
            exports.Mongodb60Enterprise.encode(message.mongodb60Enterprise, writer.uint32(122).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            timeofday_1.TimeOfDay.encode(message.backupWindowStart, writer.uint32(26).fork()).ldelim();
        }
        if (message.backupRetainPeriodDays !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.backupRetainPeriodDays,
            }, writer.uint32(74).fork()).ldelim();
        }
        if (message.performanceDiagnostics !== undefined) {
            exports.PerformanceDiagnosticsConfig.encode(message.performanceDiagnostics, writer.uint32(106).fork()).ldelim();
        }
        if (message.access !== undefined) {
            exports.Access.encode(message.access, writer.uint32(50).fork()).ldelim();
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
                case 5:
                    message.featureCompatibilityVersion = reader.string();
                    break;
                case 2:
                    message.mongodb36 = exports.Mongodb36.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongodb40 = exports.Mongodb40.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.mongodb42 = exports.Mongodb42.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.mongodb44 = exports.Mongodb44.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.mongodb50 = exports.Mongodb50.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.mongodb60 = exports.Mongodb60.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.mongodb44Enterprise = exports.Mongodb44Enterprise.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.mongodb50Enterprise = exports.Mongodb50Enterprise.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.mongodb60Enterprise = exports.Mongodb60Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.backupWindowStart = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.backupRetainPeriodDays = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.performanceDiagnostics = exports.PerformanceDiagnosticsConfig.decode(reader, reader.uint32());
                    break;
                case 6:
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
        message.featureCompatibilityVersion =
            object.featureCompatibilityVersion !== undefined &&
                object.featureCompatibilityVersion !== null
                ? String(object.featureCompatibilityVersion)
                : "";
        message.mongodb36 =
            object.mongodb_3_6 !== undefined && object.mongodb_3_6 !== null
                ? exports.Mongodb36.fromJSON(object.mongodb_3_6)
                : undefined;
        message.mongodb40 =
            object.mongodb_4_0 !== undefined && object.mongodb_4_0 !== null
                ? exports.Mongodb40.fromJSON(object.mongodb_4_0)
                : undefined;
        message.mongodb42 =
            object.mongodb_4_2 !== undefined && object.mongodb_4_2 !== null
                ? exports.Mongodb42.fromJSON(object.mongodb_4_2)
                : undefined;
        message.mongodb44 =
            object.mongodb_4_4 !== undefined && object.mongodb_4_4 !== null
                ? exports.Mongodb44.fromJSON(object.mongodb_4_4)
                : undefined;
        message.mongodb50 =
            object.mongodb_5_0 !== undefined && object.mongodb_5_0 !== null
                ? exports.Mongodb50.fromJSON(object.mongodb_5_0)
                : undefined;
        message.mongodb60 =
            object.mongodb_6_0 !== undefined && object.mongodb_6_0 !== null
                ? exports.Mongodb60.fromJSON(object.mongodb_6_0)
                : undefined;
        message.mongodb44Enterprise =
            object.mongodb_4_4_enterprise !== undefined &&
                object.mongodb_4_4_enterprise !== null
                ? exports.Mongodb44Enterprise.fromJSON(object.mongodb_4_4_enterprise)
                : undefined;
        message.mongodb50Enterprise =
            object.mongodb_5_0_enterprise !== undefined &&
                object.mongodb_5_0_enterprise !== null
                ? exports.Mongodb50Enterprise.fromJSON(object.mongodb_5_0_enterprise)
                : undefined;
        message.mongodb60Enterprise =
            object.mongodb_6_0_enterprise !== undefined &&
                object.mongodb_6_0_enterprise !== null
                ? exports.Mongodb60Enterprise.fromJSON(object.mongodb_6_0_enterprise)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined &&
                object.backupWindowStart !== null
                ? timeofday_1.TimeOfDay.fromJSON(object.backupWindowStart)
                : undefined;
        message.backupRetainPeriodDays =
            object.backupRetainPeriodDays !== undefined &&
                object.backupRetainPeriodDays !== null
                ? Number(object.backupRetainPeriodDays)
                : undefined;
        message.performanceDiagnostics =
            object.performanceDiagnostics !== undefined &&
                object.performanceDiagnostics !== null
                ? exports.PerformanceDiagnosticsConfig.fromJSON(object.performanceDiagnostics)
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
        message.featureCompatibilityVersion !== undefined &&
            (obj.featureCompatibilityVersion = message.featureCompatibilityVersion);
        message.mongodb36 !== undefined &&
            (obj.mongodb_3_6 = message.mongodb36
                ? exports.Mongodb36.toJSON(message.mongodb36)
                : undefined);
        message.mongodb40 !== undefined &&
            (obj.mongodb_4_0 = message.mongodb40
                ? exports.Mongodb40.toJSON(message.mongodb40)
                : undefined);
        message.mongodb42 !== undefined &&
            (obj.mongodb_4_2 = message.mongodb42
                ? exports.Mongodb42.toJSON(message.mongodb42)
                : undefined);
        message.mongodb44 !== undefined &&
            (obj.mongodb_4_4 = message.mongodb44
                ? exports.Mongodb44.toJSON(message.mongodb44)
                : undefined);
        message.mongodb50 !== undefined &&
            (obj.mongodb_5_0 = message.mongodb50
                ? exports.Mongodb50.toJSON(message.mongodb50)
                : undefined);
        message.mongodb60 !== undefined &&
            (obj.mongodb_6_0 = message.mongodb60
                ? exports.Mongodb60.toJSON(message.mongodb60)
                : undefined);
        message.mongodb44Enterprise !== undefined &&
            (obj.mongodb_4_4_enterprise = message.mongodb44Enterprise
                ? exports.Mongodb44Enterprise.toJSON(message.mongodb44Enterprise)
                : undefined);
        message.mongodb50Enterprise !== undefined &&
            (obj.mongodb_5_0_enterprise = message.mongodb50Enterprise
                ? exports.Mongodb50Enterprise.toJSON(message.mongodb50Enterprise)
                : undefined);
        message.mongodb60Enterprise !== undefined &&
            (obj.mongodb_6_0_enterprise = message.mongodb60Enterprise
                ? exports.Mongodb60Enterprise.toJSON(message.mongodb60Enterprise)
                : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? timeofday_1.TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.backupRetainPeriodDays !== undefined &&
            (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
        message.performanceDiagnostics !== undefined &&
            (obj.performanceDiagnostics = message.performanceDiagnostics
                ? exports.PerformanceDiagnosticsConfig.toJSON(message.performanceDiagnostics)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? exports.Access.toJSON(message.access) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseClusterConfig);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.featureCompatibilityVersion =
            (_b = object.featureCompatibilityVersion) !== null && _b !== void 0 ? _b : "";
        message.mongodb36 =
            object.mongodb36 !== undefined && object.mongodb36 !== null
                ? exports.Mongodb36.fromPartial(object.mongodb36)
                : undefined;
        message.mongodb40 =
            object.mongodb40 !== undefined && object.mongodb40 !== null
                ? exports.Mongodb40.fromPartial(object.mongodb40)
                : undefined;
        message.mongodb42 =
            object.mongodb42 !== undefined && object.mongodb42 !== null
                ? exports.Mongodb42.fromPartial(object.mongodb42)
                : undefined;
        message.mongodb44 =
            object.mongodb44 !== undefined && object.mongodb44 !== null
                ? exports.Mongodb44.fromPartial(object.mongodb44)
                : undefined;
        message.mongodb50 =
            object.mongodb50 !== undefined && object.mongodb50 !== null
                ? exports.Mongodb50.fromPartial(object.mongodb50)
                : undefined;
        message.mongodb60 =
            object.mongodb60 !== undefined && object.mongodb60 !== null
                ? exports.Mongodb60.fromPartial(object.mongodb60)
                : undefined;
        message.mongodb44Enterprise =
            object.mongodb44Enterprise !== undefined &&
                object.mongodb44Enterprise !== null
                ? exports.Mongodb44Enterprise.fromPartial(object.mongodb44Enterprise)
                : undefined;
        message.mongodb50Enterprise =
            object.mongodb50Enterprise !== undefined &&
                object.mongodb50Enterprise !== null
                ? exports.Mongodb50Enterprise.fromPartial(object.mongodb50Enterprise)
                : undefined;
        message.mongodb60Enterprise =
            object.mongodb60Enterprise !== undefined &&
                object.mongodb60Enterprise !== null
                ? exports.Mongodb60Enterprise.fromPartial(object.mongodb60Enterprise)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined &&
                object.backupWindowStart !== null
                ? timeofday_1.TimeOfDay.fromPartial(object.backupWindowStart)
                : undefined;
        message.backupRetainPeriodDays = (_c = object.backupRetainPeriodDays) !== null && _c !== void 0 ? _c : undefined;
        message.performanceDiagnostics =
            object.performanceDiagnostics !== undefined &&
                object.performanceDiagnostics !== null
                ? exports.PerformanceDiagnosticsConfig.fromPartial(object.performanceDiagnostics)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromPartial(object.access)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConfig.$type, exports.ClusterConfig);
const baseMongodb36 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6",
};
exports.Mongodb36 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb36_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb36_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb36_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb36_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb36);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb36_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb36_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb36_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb36_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodb36);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb36_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb36_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb36_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb36_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb36_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb36_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb36_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb36_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb36);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb36_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb36_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb36_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb36_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb36.$type, exports.Mongodb36);
const baseMongodb36_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod",
};
exports.Mongodb36_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb3_6_1.Mongodconfigset36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb36_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb3_6_1.Mongodconfigset36.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb36_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongodconfigset36.fromJSON(object.config)
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
                ? mongodb3_6_1.Mongodconfigset36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb36_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongodconfigset36.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb36_Mongod.$type, exports.Mongodb36_Mongod);
const baseMongodb36_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg",
};
exports.Mongodb36_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb3_6_1.Mongocfgconfigset36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb36_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb3_6_1.Mongocfgconfigset36.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb36_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongocfgconfigset36.fromJSON(object.config)
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
                ? mongodb3_6_1.Mongocfgconfigset36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb36_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongocfgconfigset36.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb36_MongoCfg.$type, exports.Mongodb36_MongoCfg);
const baseMongodb36_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos",
};
exports.Mongodb36_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb3_6_1.Mongosconfigset36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb36_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb3_6_1.Mongosconfigset36.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb36_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongosconfigset36.fromJSON(object.config)
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
                ? mongodb3_6_1.Mongosconfigset36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb36_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongosconfigset36.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb36_Mongos.$type, exports.Mongodb36_Mongos);
const baseMongodb36_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra",
};
exports.Mongodb36_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb3_6_1.Mongosconfigset36.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb3_6_1.Mongocfgconfigset36.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb36_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb3_6_1.Mongosconfigset36.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb3_6_1.Mongocfgconfigset36.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodb36_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb3_6_1.Mongosconfigset36.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb3_6_1.Mongocfgconfigset36.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb3_6_1.Mongosconfigset36.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb3_6_1.Mongocfgconfigset36.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb36_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb3_6_1.Mongosconfigset36.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb3_6_1.Mongocfgconfigset36.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb36_MongoInfra.$type, exports.Mongodb36_MongoInfra);
const baseMongodb40 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0",
};
exports.Mongodb40 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb40_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb40_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb40_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb40_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb40);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb40_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb40_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb40_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb40_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodb40);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb40_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb40_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb40_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb40_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb40_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb40_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb40_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb40_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb40);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb40_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb40_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb40_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb40_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb40.$type, exports.Mongodb40);
const baseMongodb40_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod",
};
exports.Mongodb40_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_0_1.Mongodconfigset40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb40_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_0_1.Mongodconfigset40.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb40_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongodconfigset40.fromJSON(object.config)
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
                ? mongodb4_0_1.Mongodconfigset40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb40_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongodconfigset40.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb40_Mongod.$type, exports.Mongodb40_Mongod);
const baseMongodb40_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg",
};
exports.Mongodb40_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_0_1.Mongocfgconfigset40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb40_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_0_1.Mongocfgconfigset40.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb40_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongocfgconfigset40.fromJSON(object.config)
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
                ? mongodb4_0_1.Mongocfgconfigset40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb40_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongocfgconfigset40.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb40_MongoCfg.$type, exports.Mongodb40_MongoCfg);
const baseMongodb40_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos",
};
exports.Mongodb40_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_0_1.Mongosconfigset40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb40_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_0_1.Mongosconfigset40.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb40_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongosconfigset40.fromJSON(object.config)
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
                ? mongodb4_0_1.Mongosconfigset40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb40_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongosconfigset40.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb40_Mongos.$type, exports.Mongodb40_Mongos);
const baseMongodb40_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra",
};
exports.Mongodb40_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb4_0_1.Mongosconfigset40.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb4_0_1.Mongocfgconfigset40.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb40_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb4_0_1.Mongosconfigset40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb4_0_1.Mongocfgconfigset40.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodb40_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_0_1.Mongosconfigset40.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_0_1.Mongocfgconfigset40.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb4_0_1.Mongosconfigset40.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb4_0_1.Mongocfgconfigset40.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb40_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_0_1.Mongosconfigset40.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_0_1.Mongocfgconfigset40.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb40_MongoInfra.$type, exports.Mongodb40_MongoInfra);
const baseMongodb42 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2",
};
exports.Mongodb42 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb42_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb42_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb42_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb42_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb42);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb42_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb42_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb42_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb42_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodb42);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb42_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb42_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb42_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb42_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb42_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb42_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb42_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb42_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb42);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb42_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb42_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb42_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb42_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb42.$type, exports.Mongodb42);
const baseMongodb42_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod",
};
exports.Mongodb42_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_2_1.Mongodconfigset42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb42_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_2_1.Mongodconfigset42.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb42_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongodconfigset42.fromJSON(object.config)
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
                ? mongodb4_2_1.Mongodconfigset42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb42_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongodconfigset42.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb42_Mongod.$type, exports.Mongodb42_Mongod);
const baseMongodb42_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg",
};
exports.Mongodb42_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_2_1.Mongocfgconfigset42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb42_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_2_1.Mongocfgconfigset42.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb42_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongocfgconfigset42.fromJSON(object.config)
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
                ? mongodb4_2_1.Mongocfgconfigset42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb42_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongocfgconfigset42.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb42_MongoCfg.$type, exports.Mongodb42_MongoCfg);
const baseMongodb42_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos",
};
exports.Mongodb42_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_2_1.Mongosconfigset42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb42_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_2_1.Mongosconfigset42.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb42_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongosconfigset42.fromJSON(object.config)
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
                ? mongodb4_2_1.Mongosconfigset42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb42_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongosconfigset42.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb42_Mongos.$type, exports.Mongodb42_Mongos);
const baseMongodb42_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra",
};
exports.Mongodb42_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb4_2_1.Mongosconfigset42.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb4_2_1.Mongocfgconfigset42.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb42_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb4_2_1.Mongosconfigset42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb4_2_1.Mongocfgconfigset42.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodb42_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_2_1.Mongosconfigset42.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_2_1.Mongocfgconfigset42.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb4_2_1.Mongosconfigset42.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb4_2_1.Mongocfgconfigset42.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb42_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_2_1.Mongosconfigset42.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_2_1.Mongocfgconfigset42.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb42_MongoInfra.$type, exports.Mongodb42_MongoInfra);
const baseMongodb44 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4",
};
exports.Mongodb44 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb44_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb44_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb44_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb44_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb44);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb44_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb44_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb44_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb44_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodb44);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb44_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb44_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb44_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb44_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb44_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb44_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb44_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb44_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb44);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb44_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb44_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb44_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb44_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb44.$type, exports.Mongodb44);
const baseMongodb44_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod",
};
exports.Mongodb44_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_1.Mongodconfigset44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb44_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_1.Mongodconfigset44.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb44_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongodconfigset44.fromJSON(object.config)
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
                ? mongodb4_4_1.Mongodconfigset44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb44_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongodconfigset44.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb44_Mongod.$type, exports.Mongodb44_Mongod);
const baseMongodb44_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg",
};
exports.Mongodb44_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_1.Mongocfgconfigset44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb44_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_1.Mongocfgconfigset44.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb44_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongocfgconfigset44.fromJSON(object.config)
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
                ? mongodb4_4_1.Mongocfgconfigset44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb44_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongocfgconfigset44.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb44_MongoCfg.$type, exports.Mongodb44_MongoCfg);
const baseMongodb44_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos",
};
exports.Mongodb44_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_1.Mongosconfigset44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb44_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_1.Mongosconfigset44.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb44_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongosconfigset44.fromJSON(object.config)
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
                ? mongodb4_4_1.Mongosconfigset44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb44_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongosconfigset44.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb44_Mongos.$type, exports.Mongodb44_Mongos);
const baseMongodb44_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra",
};
exports.Mongodb44_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb4_4_1.Mongosconfigset44.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb4_4_1.Mongocfgconfigset44.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb44_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb4_4_1.Mongosconfigset44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb4_4_1.Mongocfgconfigset44.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodb44_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_4_1.Mongosconfigset44.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_4_1.Mongocfgconfigset44.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb4_4_1.Mongosconfigset44.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb4_4_1.Mongocfgconfigset44.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb44_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_4_1.Mongosconfigset44.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_4_1.Mongocfgconfigset44.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb44_MongoInfra.$type, exports.Mongodb44_MongoInfra);
const baseMongodb44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise",
};
exports.Mongodb44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb44Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb44Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb44Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb44Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb44Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb44Enterprise_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb44Enterprise_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb44Enterprise_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb44Enterprise_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodb44Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb44Enterprise_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb44Enterprise_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb44Enterprise_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb44Enterprise_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb44Enterprise_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb44Enterprise_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb44Enterprise_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb44Enterprise_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb44Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb44Enterprise_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb44Enterprise_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb44Enterprise_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb44Enterprise_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb44Enterprise.$type, exports.Mongodb44Enterprise);
const baseMongodb44Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod",
};
exports.Mongodb44Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_enterprise_1.Mongodconfigset44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb44Enterprise_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_enterprise_1.Mongodconfigset44Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb44Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongodconfigset44Enterprise.fromJSON(object.config)
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
                ? mongodb4_4_enterprise_1.Mongodconfigset44Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb44Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongodconfigset44Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb44Enterprise_Mongod.$type, exports.Mongodb44Enterprise_Mongod);
const baseMongodb44Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg",
};
exports.Mongodb44Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_enterprise_1.Mongocfgconfigset44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb44Enterprise_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_enterprise_1.Mongocfgconfigset44Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb44Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongocfgconfigset44Enterprise.fromJSON(object.config)
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
                ? mongodb4_4_enterprise_1.Mongocfgconfigset44Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb44Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongocfgconfigset44Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb44Enterprise_MongoCfg.$type, exports.Mongodb44Enterprise_MongoCfg);
const baseMongodb44Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos",
};
exports.Mongodb44Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_enterprise_1.Mongosconfigset44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb44Enterprise_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_enterprise_1.Mongosconfigset44Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb44Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongosconfigset44Enterprise.fromJSON(object.config)
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
                ? mongodb4_4_enterprise_1.Mongosconfigset44Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb44Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongosconfigset44Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb44Enterprise_Mongos.$type, exports.Mongodb44Enterprise_Mongos);
const baseMongodb44Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra",
};
exports.Mongodb44Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb4_4_enterprise_1.Mongosconfigset44Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb4_4_enterprise_1.Mongocfgconfigset44Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb44Enterprise_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb4_4_enterprise_1.Mongosconfigset44Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb4_4_enterprise_1.Mongocfgconfigset44Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodb44Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_4_enterprise_1.Mongosconfigset44Enterprise.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_4_enterprise_1.Mongocfgconfigset44Enterprise.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb4_4_enterprise_1.Mongosconfigset44Enterprise.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb4_4_enterprise_1.Mongocfgconfigset44Enterprise.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb44Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_4_enterprise_1.Mongosconfigset44Enterprise.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_4_enterprise_1.Mongocfgconfigset44Enterprise.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb44Enterprise_MongoInfra.$type, exports.Mongodb44Enterprise_MongoInfra);
const baseMongodb50 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0",
};
exports.Mongodb50 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb50_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb50_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb50_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb50_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb50);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb50_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb50_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb50_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb50_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodb50);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb50_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb50_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb50_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb50_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb50_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb50_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb50_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb50_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb50);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb50_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb50_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb50_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb50_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb50.$type, exports.Mongodb50);
const baseMongodb50_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod",
};
exports.Mongodb50_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_1.Mongodconfigset50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb50_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_1.Mongodconfigset50.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb50_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongodconfigset50.fromJSON(object.config)
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
                ? mongodb5_0_1.Mongodconfigset50.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb50_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongodconfigset50.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb50_Mongod.$type, exports.Mongodb50_Mongod);
const baseMongodb50_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg",
};
exports.Mongodb50_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_1.Mongocfgconfigset50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb50_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_1.Mongocfgconfigset50.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb50_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongocfgconfigset50.fromJSON(object.config)
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
                ? mongodb5_0_1.Mongocfgconfigset50.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb50_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongocfgconfigset50.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb50_MongoCfg.$type, exports.Mongodb50_MongoCfg);
const baseMongodb50_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos",
};
exports.Mongodb50_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_1.Mongosconfigset50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb50_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_1.Mongosconfigset50.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb50_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongosconfigset50.fromJSON(object.config)
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
                ? mongodb5_0_1.Mongosconfigset50.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb50_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongosconfigset50.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb50_Mongos.$type, exports.Mongodb50_Mongos);
const baseMongodb50_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra",
};
exports.Mongodb50_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb5_0_1.Mongosconfigset50.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb5_0_1.Mongocfgconfigset50.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb50_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb5_0_1.Mongosconfigset50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb5_0_1.Mongocfgconfigset50.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodb50_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb5_0_1.Mongosconfigset50.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb5_0_1.Mongocfgconfigset50.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb5_0_1.Mongosconfigset50.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb5_0_1.Mongocfgconfigset50.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb50_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb5_0_1.Mongosconfigset50.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb5_0_1.Mongocfgconfigset50.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb50_MongoInfra.$type, exports.Mongodb50_MongoInfra);
const baseMongodb50Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise",
};
exports.Mongodb50Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb50Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb50Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb50Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb50Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb50Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb50Enterprise_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb50Enterprise_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb50Enterprise_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb50Enterprise_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodb50Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb50Enterprise_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb50Enterprise_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb50Enterprise_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb50Enterprise_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb50Enterprise_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb50Enterprise_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb50Enterprise_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb50Enterprise_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb50Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb50Enterprise_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb50Enterprise_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb50Enterprise_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb50Enterprise_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb50Enterprise.$type, exports.Mongodb50Enterprise);
const baseMongodb50Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod",
};
exports.Mongodb50Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_enterprise_1.Mongodconfigset50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb50Enterprise_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_enterprise_1.Mongodconfigset50Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb50Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongodconfigset50Enterprise.fromJSON(object.config)
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
                ? mongodb5_0_enterprise_1.Mongodconfigset50Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb50Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongodconfigset50Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb50Enterprise_Mongod.$type, exports.Mongodb50Enterprise_Mongod);
const baseMongodb50Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg",
};
exports.Mongodb50Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_enterprise_1.Mongocfgconfigset50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb50Enterprise_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_enterprise_1.Mongocfgconfigset50Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb50Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongocfgconfigset50Enterprise.fromJSON(object.config)
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
                ? mongodb5_0_enterprise_1.Mongocfgconfigset50Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb50Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongocfgconfigset50Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb50Enterprise_MongoCfg.$type, exports.Mongodb50Enterprise_MongoCfg);
const baseMongodb50Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos",
};
exports.Mongodb50Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_enterprise_1.Mongosconfigset50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb50Enterprise_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_enterprise_1.Mongosconfigset50Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb50Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongosconfigset50Enterprise.fromJSON(object.config)
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
                ? mongodb5_0_enterprise_1.Mongosconfigset50Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb50Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongosconfigset50Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb50Enterprise_Mongos.$type, exports.Mongodb50Enterprise_Mongos);
const baseMongodb50Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra",
};
exports.Mongodb50Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb5_0_enterprise_1.Mongosconfigset50Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb5_0_enterprise_1.Mongocfgconfigset50Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb50Enterprise_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb5_0_enterprise_1.Mongosconfigset50Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb5_0_enterprise_1.Mongocfgconfigset50Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodb50Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb5_0_enterprise_1.Mongosconfigset50Enterprise.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb5_0_enterprise_1.Mongocfgconfigset50Enterprise.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb5_0_enterprise_1.Mongosconfigset50Enterprise.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb5_0_enterprise_1.Mongocfgconfigset50Enterprise.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb50Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb5_0_enterprise_1.Mongosconfigset50Enterprise.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb5_0_enterprise_1.Mongocfgconfigset50Enterprise.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb50Enterprise_MongoInfra.$type, exports.Mongodb50Enterprise_MongoInfra);
const baseMongodb60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0",
};
exports.Mongodb60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb60_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb60_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb60_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb60_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb60);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb60_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb60_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb60_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb60_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodb60);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb60_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb60_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb60_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb60_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb60_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb60_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb60_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb60_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb60);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb60_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb60_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb60_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb60_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb60.$type, exports.Mongodb60);
const baseMongodb60_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.Mongod",
};
exports.Mongodb60_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_1.Mongodconfigset60.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb60_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_1.Mongodconfigset60.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb60_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongodconfigset60.fromJSON(object.config)
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
                ? mongodb6_0_1.Mongodconfigset60.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb60_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongodconfigset60.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb60_Mongod.$type, exports.Mongodb60_Mongod);
const baseMongodb60_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.MongoCfg",
};
exports.Mongodb60_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_1.Mongocfgconfigset60.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb60_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_1.Mongocfgconfigset60.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb60_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongocfgconfigset60.fromJSON(object.config)
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
                ? mongodb6_0_1.Mongocfgconfigset60.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb60_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongocfgconfigset60.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb60_MongoCfg.$type, exports.Mongodb60_MongoCfg);
const baseMongodb60_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.Mongos",
};
exports.Mongodb60_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_1.Mongosconfigset60.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb60_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_1.Mongosconfigset60.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb60_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongosconfigset60.fromJSON(object.config)
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
                ? mongodb6_0_1.Mongosconfigset60.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb60_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongosconfigset60.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb60_Mongos.$type, exports.Mongodb60_Mongos);
const baseMongodb60_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.MongoInfra",
};
exports.Mongodb60_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb6_0_1.Mongosconfigset60.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb6_0_1.Mongocfgconfigset60.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb60_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb6_0_1.Mongosconfigset60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb6_0_1.Mongocfgconfigset60.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodb60_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb6_0_1.Mongosconfigset60.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb6_0_1.Mongocfgconfigset60.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb6_0_1.Mongosconfigset60.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb6_0_1.Mongocfgconfigset60.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb60_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb6_0_1.Mongosconfigset60.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb6_0_1.Mongocfgconfigset60.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb60_MongoInfra.$type, exports.Mongodb60_MongoInfra);
const baseMongodb60Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise",
};
exports.Mongodb60Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodb60Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodb60Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodb60Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodb60Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb60Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodb60Enterprise_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodb60Enterprise_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodb60Enterprise_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodb60Enterprise_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodb60Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb60Enterprise_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb60Enterprise_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb60Enterprise_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb60Enterprise_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodb60Enterprise_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodb60Enterprise_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodb60Enterprise_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodb60Enterprise_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb60Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodb60Enterprise_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodb60Enterprise_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodb60Enterprise_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodb60Enterprise_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb60Enterprise.$type, exports.Mongodb60Enterprise);
const baseMongodb60Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.Mongod",
};
exports.Mongodb60Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_enterprise_1.Mongodconfigset60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb60Enterprise_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_enterprise_1.Mongodconfigset60Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb60Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongodconfigset60Enterprise.fromJSON(object.config)
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
                ? mongodb6_0_enterprise_1.Mongodconfigset60Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb60Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongodconfigset60Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb60Enterprise_Mongod.$type, exports.Mongodb60Enterprise_Mongod);
const baseMongodb60Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.MongoCfg",
};
exports.Mongodb60Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_enterprise_1.Mongocfgconfigset60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb60Enterprise_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_enterprise_1.Mongocfgconfigset60Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb60Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongocfgconfigset60Enterprise.fromJSON(object.config)
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
                ? mongodb6_0_enterprise_1.Mongocfgconfigset60Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb60Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongocfgconfigset60Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb60Enterprise_MongoCfg.$type, exports.Mongodb60Enterprise_MongoCfg);
const baseMongodb60Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.Mongos",
};
exports.Mongodb60Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_enterprise_1.Mongosconfigset60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb60Enterprise_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_enterprise_1.Mongosconfigset60Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodb60Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongosconfigset60Enterprise.fromJSON(object.config)
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
                ? mongodb6_0_enterprise_1.Mongosconfigset60Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb60Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongosconfigset60Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb60Enterprise_Mongos.$type, exports.Mongodb60Enterprise_Mongos);
const baseMongodb60Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.MongoInfra",
};
exports.Mongodb60Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb6_0_enterprise.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb6_0_enterprise_1.Mongosconfigset60Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb6_0_enterprise_1.Mongocfgconfigset60Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodb60Enterprise_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb6_0_enterprise_1.Mongosconfigset60Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb6_0_enterprise_1.Mongocfgconfigset60Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodb60Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb6_0_enterprise_1.Mongosconfigset60Enterprise.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb6_0_enterprise_1.Mongocfgconfigset60Enterprise.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb6_0_enterprise_1.Mongosconfigset60Enterprise.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb6_0_enterprise_1.Mongocfgconfigset60Enterprise.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodb60Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb6_0_enterprise_1.Mongosconfigset60Enterprise.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb6_0_enterprise_1.Mongocfgconfigset60Enterprise.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodb60Enterprise_MongoInfra.$type, exports.Mongodb60Enterprise_MongoInfra);
const baseShard = {
    $type: "yandex.cloud.mdb.mongodb.v1.Shard",
    name: "",
    clusterId: "",
};
exports.Shard = {
    $type: "yandex.cloud.mdb.mongodb.v1.Shard",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseShard);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Shard.$type, exports.Shard);
const baseHost = {
    $type: "yandex.cloud.mdb.mongodb.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    role: 0,
    health: 0,
    subnetId: "",
    assignPublicIp: false,
    shardName: "",
    type: 0,
};
exports.Host = {
    $type: "yandex.cloud.mdb.mongodb.v1.Host",
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
        if (message.shardName !== "") {
            writer.uint32(82).string(message.shardName);
        }
        if (message.type !== 0) {
            writer.uint32(88).int32(message.type);
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
                case 10:
                    message.shardName = reader.string();
                    break;
                case 11:
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
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? host_TypeFromJSON(object.type)
                : 0;
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
        message.shardName !== undefined && (obj.shardName = message.shardName);
        message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
        message.shardName = (_j = object.shardName) !== null && _j !== void 0 ? _j : "";
        message.type = (_k = object.type) !== null && _k !== void 0 ? _k : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host.$type, exports.Host);
const baseService = {
    $type: "yandex.cloud.mdb.mongodb.v1.Service",
    type: 0,
    health: 0,
};
exports.Service = {
    $type: "yandex.cloud.mdb.mongodb.v1.Service",
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
    $type: "yandex.cloud.mdb.mongodb.v1.Resources",
    resourcePresetId: "",
    diskSize: 0,
    diskTypeId: "",
};
exports.Resources = {
    $type: "yandex.cloud.mdb.mongodb.v1.Resources",
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
    $type: "yandex.cloud.mdb.mongodb.v1.Access",
    dataLens: false,
    dataTransfer: false,
};
exports.Access = {
    $type: "yandex.cloud.mdb.mongodb.v1.Access",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataLens === true) {
            writer.uint32(8).bool(message.dataLens);
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
        message.dataTransfer =
            object.dataTransfer !== undefined && object.dataTransfer !== null
                ? Boolean(object.dataTransfer)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataLens !== undefined && (obj.dataLens = message.dataLens);
        message.dataTransfer !== undefined &&
            (obj.dataTransfer = message.dataTransfer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAccess);
        message.dataLens = (_a = object.dataLens) !== null && _a !== void 0 ? _a : false;
        message.dataTransfer = (_b = object.dataTransfer) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Access.$type, exports.Access);
const basePerformanceDiagnosticsConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.PerformanceDiagnosticsConfig",
    profilingEnabled: false,
};
exports.PerformanceDiagnosticsConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.PerformanceDiagnosticsConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.profilingEnabled === true) {
            writer.uint32(8).bool(message.profilingEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePerformanceDiagnosticsConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profilingEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePerformanceDiagnosticsConfig);
        message.profilingEnabled =
            object.profilingEnabled !== undefined && object.profilingEnabled !== null
                ? Boolean(object.profilingEnabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.profilingEnabled !== undefined &&
            (obj.profilingEnabled = message.profilingEnabled);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePerformanceDiagnosticsConfig);
        message.profilingEnabled = (_a = object.profilingEnabled) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PerformanceDiagnosticsConfig.$type, exports.PerformanceDiagnosticsConfig);
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
