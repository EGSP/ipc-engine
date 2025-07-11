"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Access = exports.Host = exports.KafkaConfig3 = exports.Kafkaconfig28 = exports.Resources = exports.ConfigSpec_RestAPIConfig = exports.ConfigSpec_Zookeeper = exports.ConfigSpec_Kafka = exports.ConfigSpec = exports.Monitoring = exports.Cluster_LabelsEntry = exports.Cluster = exports.host_HealthToJSON = exports.host_HealthFromJSON = exports.Host_Health = exports.host_RoleToJSON = exports.host_RoleFromJSON = exports.Host_Role = exports.cluster_StatusToJSON = exports.cluster_StatusFromJSON = exports.Cluster_Status = exports.cluster_HealthToJSON = exports.cluster_HealthFromJSON = exports.Cluster_Health = exports.cluster_EnvironmentToJSON = exports.cluster_EnvironmentFromJSON = exports.Cluster_Environment = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const maintenance_1 = require("../../../../../yandex/cloud/mdb/kafka/v1/maintenance");
const common_1 = require("../../../../../yandex/cloud/mdb/kafka/v1/common");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.kafka.v1";
var Cluster_Environment;
(function (Cluster_Environment) {
    Cluster_Environment[Cluster_Environment["ENVIRONMENT_UNSPECIFIED"] = 0] = "ENVIRONMENT_UNSPECIFIED";
    /** PRODUCTION - stable environment with a conservative update policy when only hotfixes are applied during regular maintenance. */
    Cluster_Environment[Cluster_Environment["PRODUCTION"] = 1] = "PRODUCTION";
    /** PRESTABLE - environment with a more aggressive update policy when new versions are rolled out irrespective of backward compatibility. */
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
    /** HEALTH_UNKNOWN - state of the cluster is unknown ([Host.health] of all hosts in the cluster is `UNKNOWN`). */
    Cluster_Health[Cluster_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - cluster is alive and well ([Host.health] of all hosts in the cluster is `ALIVE`). */
    Cluster_Health[Cluster_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - cluster is inoperable ([Host.health] of all hosts in the cluster is `DEAD`). */
    Cluster_Health[Cluster_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - cluster is in degraded state ([Host.health] of at least one of the hosts in the cluster is not `ALIVE`). */
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
    /** STATUS_UNKNOWN - cluster state is unknown. */
    Cluster_Status[Cluster_Status["STATUS_UNKNOWN"] = 0] = "STATUS_UNKNOWN";
    /** CREATING - cluster is being created. */
    Cluster_Status[Cluster_Status["CREATING"] = 1] = "CREATING";
    /** RUNNING - cluster is running normally. */
    Cluster_Status[Cluster_Status["RUNNING"] = 2] = "RUNNING";
    /** ERROR - cluster encountered a problem and cannot operate. */
    Cluster_Status[Cluster_Status["ERROR"] = 3] = "ERROR";
    /** UPDATING - cluster is being updated. */
    Cluster_Status[Cluster_Status["UPDATING"] = 4] = "UPDATING";
    /** STOPPING - cluster is stopping. */
    Cluster_Status[Cluster_Status["STOPPING"] = 5] = "STOPPING";
    /** STOPPED - cluster stopped. */
    Cluster_Status[Cluster_Status["STOPPED"] = 6] = "STOPPED";
    /** STARTING - cluster is starting. */
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
var Host_Role;
(function (Host_Role) {
    Host_Role[Host_Role["ROLE_UNSPECIFIED"] = 0] = "ROLE_UNSPECIFIED";
    /** KAFKA - the host is a Kafka broker. */
    Host_Role[Host_Role["KAFKA"] = 1] = "KAFKA";
    /** ZOOKEEPER - the host is a ZooKeeper server. */
    Host_Role[Host_Role["ZOOKEEPER"] = 2] = "ZOOKEEPER";
    Host_Role[Host_Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Role = exports.Host_Role || (exports.Host_Role = {}));
function host_RoleFromJSON(object) {
    switch (object) {
        case 0:
        case "ROLE_UNSPECIFIED":
            return Host_Role.ROLE_UNSPECIFIED;
        case 1:
        case "KAFKA":
            return Host_Role.KAFKA;
        case 2:
        case "ZOOKEEPER":
            return Host_Role.ZOOKEEPER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Host_Role.UNRECOGNIZED;
    }
}
exports.host_RoleFromJSON = host_RoleFromJSON;
function host_RoleToJSON(object) {
    switch (object) {
        case Host_Role.ROLE_UNSPECIFIED:
            return "ROLE_UNSPECIFIED";
        case Host_Role.KAFKA:
            return "KAFKA";
        case Host_Role.ZOOKEEPER:
            return "ZOOKEEPER";
        default:
            return "UNKNOWN";
    }
}
exports.host_RoleToJSON = host_RoleToJSON;
var Host_Health;
(function (Host_Health) {
    /** UNKNOWN - health of the host is unknown. */
    Host_Health[Host_Health["UNKNOWN"] = 0] = "UNKNOWN";
    /** ALIVE - the host is performing all its functions normally. */
    Host_Health[Host_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - the host is inoperable and cannot perform any of its essential functions. */
    Host_Health[Host_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - the host is degraded and can perform only some of its essential functions. */
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
const baseCluster = {
    $type: "yandex.cloud.mdb.kafka.v1.Cluster",
    id: "",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    health: 0,
    status: 0,
    securityGroupIds: "",
    hostGroupIds: "",
    deletionProtection: false,
};
exports.Cluster = {
    $type: "yandex.cloud.mdb.kafka.v1.Cluster",
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
                $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry",
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
            exports.ConfigSpec.encode(message.config, writer.uint32(74).fork()).ldelim();
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
        for (const v of message.hostGroupIds) {
            writer.uint32(114).string(v);
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
                    message.config = exports.ConfigSpec.decode(reader, reader.uint32());
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
                    message.hostGroupIds.push(reader.string());
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
                ? exports.ConfigSpec.fromJSON(object.config)
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
        message.hostGroupIds = ((_d = object.hostGroupIds) !== null && _d !== void 0 ? _d : []).map((e) => String(e));
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
                ? exports.ConfigSpec.toJSON(message.config)
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
        if (message.hostGroupIds) {
            obj.hostGroupIds = message.hostGroupIds.map((e) => e);
        }
        else {
            obj.hostGroupIds = [];
        }
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
                ? exports.ConfigSpec.fromPartial(object.config)
                : undefined;
        message.networkId = (_j = object.networkId) !== null && _j !== void 0 ? _j : "";
        message.health = (_k = object.health) !== null && _k !== void 0 ? _k : 0;
        message.status = (_l = object.status) !== null && _l !== void 0 ? _l : 0;
        message.securityGroupIds = ((_m = object.securityGroupIds) === null || _m === void 0 ? void 0 : _m.map((e) => e)) || [];
        message.hostGroupIds = ((_o = object.hostGroupIds) === null || _o === void 0 ? void 0 : _o.map((e) => e)) || [];
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
    $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry",
    key: "",
    value: "",
};
exports.Cluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry",
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
    $type: "yandex.cloud.mdb.kafka.v1.Monitoring",
    name: "",
    description: "",
    link: "",
};
exports.Monitoring = {
    $type: "yandex.cloud.mdb.kafka.v1.Monitoring",
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
const baseConfigSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec",
    version: "",
    zoneId: "",
    assignPublicIp: false,
    unmanagedTopics: false,
    schemaRegistry: false,
};
exports.ConfigSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.kafka !== undefined) {
            exports.ConfigSpec_Kafka.encode(message.kafka, writer.uint32(18).fork()).ldelim();
        }
        if (message.zookeeper !== undefined) {
            exports.ConfigSpec_Zookeeper.encode(message.zookeeper, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.zoneId) {
            writer.uint32(34).string(v);
        }
        if (message.brokersCount !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.brokersCount }, writer.uint32(42).fork()).ldelim();
        }
        if (message.assignPublicIp === true) {
            writer.uint32(48).bool(message.assignPublicIp);
        }
        if (message.unmanagedTopics === true) {
            writer.uint32(56).bool(message.unmanagedTopics);
        }
        if (message.schemaRegistry === true) {
            writer.uint32(64).bool(message.schemaRegistry);
        }
        if (message.access !== undefined) {
            exports.Access.encode(message.access, writer.uint32(74).fork()).ldelim();
        }
        if (message.restApiConfig !== undefined) {
            exports.ConfigSpec_RestAPIConfig.encode(message.restApiConfig, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConfigSpec);
        message.zoneId = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.kafka = exports.ConfigSpec_Kafka.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.zookeeper = exports.ConfigSpec_Zookeeper.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.zoneId.push(reader.string());
                    break;
                case 5:
                    message.brokersCount = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.assignPublicIp = reader.bool();
                    break;
                case 7:
                    message.unmanagedTopics = reader.bool();
                    break;
                case 8:
                    message.schemaRegistry = reader.bool();
                    break;
                case 9:
                    message.access = exports.Access.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.restApiConfig = exports.ConfigSpec_RestAPIConfig.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseConfigSpec);
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.kafka =
            object.kafka !== undefined && object.kafka !== null
                ? exports.ConfigSpec_Kafka.fromJSON(object.kafka)
                : undefined;
        message.zookeeper =
            object.zookeeper !== undefined && object.zookeeper !== null
                ? exports.ConfigSpec_Zookeeper.fromJSON(object.zookeeper)
                : undefined;
        message.zoneId = ((_a = object.zoneId) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.brokersCount =
            object.brokersCount !== undefined && object.brokersCount !== null
                ? Number(object.brokersCount)
                : undefined;
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.unmanagedTopics =
            object.unmanagedTopics !== undefined && object.unmanagedTopics !== null
                ? Boolean(object.unmanagedTopics)
                : false;
        message.schemaRegistry =
            object.schemaRegistry !== undefined && object.schemaRegistry !== null
                ? Boolean(object.schemaRegistry)
                : false;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromJSON(object.access)
                : undefined;
        message.restApiConfig =
            object.restApiConfig !== undefined && object.restApiConfig !== null
                ? exports.ConfigSpec_RestAPIConfig.fromJSON(object.restApiConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.kafka !== undefined &&
            (obj.kafka = message.kafka
                ? exports.ConfigSpec_Kafka.toJSON(message.kafka)
                : undefined);
        message.zookeeper !== undefined &&
            (obj.zookeeper = message.zookeeper
                ? exports.ConfigSpec_Zookeeper.toJSON(message.zookeeper)
                : undefined);
        if (message.zoneId) {
            obj.zoneId = message.zoneId.map((e) => e);
        }
        else {
            obj.zoneId = [];
        }
        message.brokersCount !== undefined &&
            (obj.brokersCount = message.brokersCount);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.unmanagedTopics !== undefined &&
            (obj.unmanagedTopics = message.unmanagedTopics);
        message.schemaRegistry !== undefined &&
            (obj.schemaRegistry = message.schemaRegistry);
        message.access !== undefined &&
            (obj.access = message.access ? exports.Access.toJSON(message.access) : undefined);
        message.restApiConfig !== undefined &&
            (obj.restApiConfig = message.restApiConfig
                ? exports.ConfigSpec_RestAPIConfig.toJSON(message.restApiConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseConfigSpec);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.kafka =
            object.kafka !== undefined && object.kafka !== null
                ? exports.ConfigSpec_Kafka.fromPartial(object.kafka)
                : undefined;
        message.zookeeper =
            object.zookeeper !== undefined && object.zookeeper !== null
                ? exports.ConfigSpec_Zookeeper.fromPartial(object.zookeeper)
                : undefined;
        message.zoneId = ((_b = object.zoneId) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.brokersCount = (_c = object.brokersCount) !== null && _c !== void 0 ? _c : undefined;
        message.assignPublicIp = (_d = object.assignPublicIp) !== null && _d !== void 0 ? _d : false;
        message.unmanagedTopics = (_e = object.unmanagedTopics) !== null && _e !== void 0 ? _e : false;
        message.schemaRegistry = (_f = object.schemaRegistry) !== null && _f !== void 0 ? _f : false;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromPartial(object.access)
                : undefined;
        message.restApiConfig =
            object.restApiConfig !== undefined && object.restApiConfig !== null
                ? exports.ConfigSpec_RestAPIConfig.fromPartial(object.restApiConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpec.$type, exports.ConfigSpec);
const baseConfigSpec_Kafka = {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Kafka",
};
exports.ConfigSpec_Kafka = {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Kafka",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.kafkaConfig28 !== undefined) {
            exports.Kafkaconfig28.encode(message.kafkaConfig28, writer.uint32(34).fork()).ldelim();
        }
        if (message.kafkaConfig3 !== undefined) {
            exports.KafkaConfig3.encode(message.kafkaConfig3, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConfigSpec_Kafka);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.kafkaConfig28 = exports.Kafkaconfig28.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.kafkaConfig3 = exports.KafkaConfig3.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConfigSpec_Kafka);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        message.kafkaConfig28 =
            object.kafkaConfig_2_8 !== undefined && object.kafkaConfig_2_8 !== null
                ? exports.Kafkaconfig28.fromJSON(object.kafkaConfig_2_8)
                : undefined;
        message.kafkaConfig3 =
            object.kafkaConfig_3 !== undefined && object.kafkaConfig_3 !== null
                ? exports.KafkaConfig3.fromJSON(object.kafkaConfig_3)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.kafkaConfig28 !== undefined &&
            (obj.kafkaConfig_2_8 = message.kafkaConfig28
                ? exports.Kafkaconfig28.toJSON(message.kafkaConfig28)
                : undefined);
        message.kafkaConfig3 !== undefined &&
            (obj.kafkaConfig_3 = message.kafkaConfig3
                ? exports.KafkaConfig3.toJSON(message.kafkaConfig3)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseConfigSpec_Kafka);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.kafkaConfig28 =
            object.kafkaConfig28 !== undefined && object.kafkaConfig28 !== null
                ? exports.Kafkaconfig28.fromPartial(object.kafkaConfig28)
                : undefined;
        message.kafkaConfig3 =
            object.kafkaConfig3 !== undefined && object.kafkaConfig3 !== null
                ? exports.KafkaConfig3.fromPartial(object.kafkaConfig3)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpec_Kafka.$type, exports.ConfigSpec_Kafka);
const baseConfigSpec_Zookeeper = {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Zookeeper",
};
exports.ConfigSpec_Zookeeper = {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Zookeeper",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConfigSpec_Zookeeper);
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
        const message = Object.assign({}, baseConfigSpec_Zookeeper);
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
        const message = Object.assign({}, baseConfigSpec_Zookeeper);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpec_Zookeeper.$type, exports.ConfigSpec_Zookeeper);
const baseConfigSpec_RestAPIConfig = {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.RestAPIConfig",
    enabled: false,
};
exports.ConfigSpec_RestAPIConfig = {
    $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.RestAPIConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConfigSpec_RestAPIConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConfigSpec_RestAPIConfig);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseConfigSpec_RestAPIConfig);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpec_RestAPIConfig.$type, exports.ConfigSpec_RestAPIConfig);
const baseResources = {
    $type: "yandex.cloud.mdb.kafka.v1.Resources",
    resourcePresetId: "",
    diskSize: 0,
    diskTypeId: "",
};
exports.Resources = {
    $type: "yandex.cloud.mdb.kafka.v1.Resources",
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
const baseKafkaconfig28 = {
    $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig2_8",
    compressionType: 0,
    sslCipherSuites: "",
    saslEnabledMechanisms: 0,
};
exports.Kafkaconfig28 = {
    $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig2_8",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.compressionType !== 0) {
            writer.uint32(8).int32(message.compressionType);
        }
        if (message.logFlushIntervalMessages !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logFlushIntervalMessages,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.logFlushIntervalMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logFlushIntervalMs,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.logFlushSchedulerIntervalMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logFlushSchedulerIntervalMs,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.logRetentionBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logRetentionBytes,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.logRetentionHours !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logRetentionHours,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.logRetentionMinutes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logRetentionMinutes,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.logRetentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.logRetentionMs }, writer.uint32(66).fork()).ldelim();
        }
        if (message.logSegmentBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logSegmentBytes,
            }, writer.uint32(74).fork()).ldelim();
        }
        if (message.logPreallocate !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logPreallocate }, writer.uint32(82).fork()).ldelim();
        }
        if (message.socketSendBufferBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.socketSendBufferBytes,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.socketReceiveBufferBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.socketReceiveBufferBytes,
            }, writer.uint32(98).fork()).ldelim();
        }
        if (message.autoCreateTopicsEnable !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoCreateTopicsEnable,
            }, writer.uint32(106).fork()).ldelim();
        }
        if (message.numPartitions !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.numPartitions }, writer.uint32(114).fork()).ldelim();
        }
        if (message.defaultReplicationFactor !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.defaultReplicationFactor,
            }, writer.uint32(122).fork()).ldelim();
        }
        if (message.messageMaxBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.messageMaxBytes,
            }, writer.uint32(130).fork()).ldelim();
        }
        if (message.replicaFetchMaxBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.replicaFetchMaxBytes,
            }, writer.uint32(138).fork()).ldelim();
        }
        for (const v of message.sslCipherSuites) {
            writer.uint32(146).string(v);
        }
        if (message.offsetsRetentionMinutes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.offsetsRetentionMinutes,
            }, writer.uint32(154).fork()).ldelim();
        }
        writer.uint32(162).fork();
        for (const v of message.saslEnabledMechanisms) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseKafkaconfig28);
        message.sslCipherSuites = [];
        message.saslEnabledMechanisms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.compressionType = reader.int32();
                    break;
                case 2:
                    message.logFlushIntervalMessages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.logFlushIntervalMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.logFlushSchedulerIntervalMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.logRetentionBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.logRetentionHours = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.logRetentionMinutes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.logRetentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.logSegmentBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.logPreallocate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.socketSendBufferBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.socketReceiveBufferBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.autoCreateTopicsEnable = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.numPartitions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.defaultReplicationFactor = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 16:
                    message.messageMaxBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.replicaFetchMaxBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 18:
                    message.sslCipherSuites.push(reader.string());
                    break;
                case 19:
                    message.offsetsRetentionMinutes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.saslEnabledMechanisms.push(reader.int32());
                        }
                    }
                    else {
                        message.saslEnabledMechanisms.push(reader.int32());
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
        var _a, _b;
        const message = Object.assign({}, baseKafkaconfig28);
        message.compressionType =
            object.compressionType !== undefined && object.compressionType !== null
                ? (0, common_1.compressionTypeFromJSON)(object.compressionType)
                : 0;
        message.logFlushIntervalMessages =
            object.logFlushIntervalMessages !== undefined &&
                object.logFlushIntervalMessages !== null
                ? Number(object.logFlushIntervalMessages)
                : undefined;
        message.logFlushIntervalMs =
            object.logFlushIntervalMs !== undefined &&
                object.logFlushIntervalMs !== null
                ? Number(object.logFlushIntervalMs)
                : undefined;
        message.logFlushSchedulerIntervalMs =
            object.logFlushSchedulerIntervalMs !== undefined &&
                object.logFlushSchedulerIntervalMs !== null
                ? Number(object.logFlushSchedulerIntervalMs)
                : undefined;
        message.logRetentionBytes =
            object.logRetentionBytes !== undefined &&
                object.logRetentionBytes !== null
                ? Number(object.logRetentionBytes)
                : undefined;
        message.logRetentionHours =
            object.logRetentionHours !== undefined &&
                object.logRetentionHours !== null
                ? Number(object.logRetentionHours)
                : undefined;
        message.logRetentionMinutes =
            object.logRetentionMinutes !== undefined &&
                object.logRetentionMinutes !== null
                ? Number(object.logRetentionMinutes)
                : undefined;
        message.logRetentionMs =
            object.logRetentionMs !== undefined && object.logRetentionMs !== null
                ? Number(object.logRetentionMs)
                : undefined;
        message.logSegmentBytes =
            object.logSegmentBytes !== undefined && object.logSegmentBytes !== null
                ? Number(object.logSegmentBytes)
                : undefined;
        message.logPreallocate =
            object.logPreallocate !== undefined && object.logPreallocate !== null
                ? Boolean(object.logPreallocate)
                : undefined;
        message.socketSendBufferBytes =
            object.socketSendBufferBytes !== undefined &&
                object.socketSendBufferBytes !== null
                ? Number(object.socketSendBufferBytes)
                : undefined;
        message.socketReceiveBufferBytes =
            object.socketReceiveBufferBytes !== undefined &&
                object.socketReceiveBufferBytes !== null
                ? Number(object.socketReceiveBufferBytes)
                : undefined;
        message.autoCreateTopicsEnable =
            object.autoCreateTopicsEnable !== undefined &&
                object.autoCreateTopicsEnable !== null
                ? Boolean(object.autoCreateTopicsEnable)
                : undefined;
        message.numPartitions =
            object.numPartitions !== undefined && object.numPartitions !== null
                ? Number(object.numPartitions)
                : undefined;
        message.defaultReplicationFactor =
            object.defaultReplicationFactor !== undefined &&
                object.defaultReplicationFactor !== null
                ? Number(object.defaultReplicationFactor)
                : undefined;
        message.messageMaxBytes =
            object.messageMaxBytes !== undefined && object.messageMaxBytes !== null
                ? Number(object.messageMaxBytes)
                : undefined;
        message.replicaFetchMaxBytes =
            object.replicaFetchMaxBytes !== undefined &&
                object.replicaFetchMaxBytes !== null
                ? Number(object.replicaFetchMaxBytes)
                : undefined;
        message.sslCipherSuites = ((_a = object.sslCipherSuites) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.offsetsRetentionMinutes =
            object.offsetsRetentionMinutes !== undefined &&
                object.offsetsRetentionMinutes !== null
                ? Number(object.offsetsRetentionMinutes)
                : undefined;
        message.saslEnabledMechanisms = ((_b = object.saslEnabledMechanisms) !== null && _b !== void 0 ? _b : []).map((e) => (0, common_1.saslMechanismFromJSON)(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.compressionType !== undefined &&
            (obj.compressionType = (0, common_1.compressionTypeToJSON)(message.compressionType));
        message.logFlushIntervalMessages !== undefined &&
            (obj.logFlushIntervalMessages = message.logFlushIntervalMessages);
        message.logFlushIntervalMs !== undefined &&
            (obj.logFlushIntervalMs = message.logFlushIntervalMs);
        message.logFlushSchedulerIntervalMs !== undefined &&
            (obj.logFlushSchedulerIntervalMs = message.logFlushSchedulerIntervalMs);
        message.logRetentionBytes !== undefined &&
            (obj.logRetentionBytes = message.logRetentionBytes);
        message.logRetentionHours !== undefined &&
            (obj.logRetentionHours = message.logRetentionHours);
        message.logRetentionMinutes !== undefined &&
            (obj.logRetentionMinutes = message.logRetentionMinutes);
        message.logRetentionMs !== undefined &&
            (obj.logRetentionMs = message.logRetentionMs);
        message.logSegmentBytes !== undefined &&
            (obj.logSegmentBytes = message.logSegmentBytes);
        message.logPreallocate !== undefined &&
            (obj.logPreallocate = message.logPreallocate);
        message.socketSendBufferBytes !== undefined &&
            (obj.socketSendBufferBytes = message.socketSendBufferBytes);
        message.socketReceiveBufferBytes !== undefined &&
            (obj.socketReceiveBufferBytes = message.socketReceiveBufferBytes);
        message.autoCreateTopicsEnable !== undefined &&
            (obj.autoCreateTopicsEnable = message.autoCreateTopicsEnable);
        message.numPartitions !== undefined &&
            (obj.numPartitions = message.numPartitions);
        message.defaultReplicationFactor !== undefined &&
            (obj.defaultReplicationFactor = message.defaultReplicationFactor);
        message.messageMaxBytes !== undefined &&
            (obj.messageMaxBytes = message.messageMaxBytes);
        message.replicaFetchMaxBytes !== undefined &&
            (obj.replicaFetchMaxBytes = message.replicaFetchMaxBytes);
        if (message.sslCipherSuites) {
            obj.sslCipherSuites = message.sslCipherSuites.map((e) => e);
        }
        else {
            obj.sslCipherSuites = [];
        }
        message.offsetsRetentionMinutes !== undefined &&
            (obj.offsetsRetentionMinutes = message.offsetsRetentionMinutes);
        if (message.saslEnabledMechanisms) {
            obj.saslEnabledMechanisms = message.saslEnabledMechanisms.map((e) => (0, common_1.saslMechanismToJSON)(e));
        }
        else {
            obj.saslEnabledMechanisms = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        const message = Object.assign({}, baseKafkaconfig28);
        message.compressionType = (_a = object.compressionType) !== null && _a !== void 0 ? _a : 0;
        message.logFlushIntervalMessages =
            (_b = object.logFlushIntervalMessages) !== null && _b !== void 0 ? _b : undefined;
        message.logFlushIntervalMs = (_c = object.logFlushIntervalMs) !== null && _c !== void 0 ? _c : undefined;
        message.logFlushSchedulerIntervalMs =
            (_d = object.logFlushSchedulerIntervalMs) !== null && _d !== void 0 ? _d : undefined;
        message.logRetentionBytes = (_e = object.logRetentionBytes) !== null && _e !== void 0 ? _e : undefined;
        message.logRetentionHours = (_f = object.logRetentionHours) !== null && _f !== void 0 ? _f : undefined;
        message.logRetentionMinutes = (_g = object.logRetentionMinutes) !== null && _g !== void 0 ? _g : undefined;
        message.logRetentionMs = (_h = object.logRetentionMs) !== null && _h !== void 0 ? _h : undefined;
        message.logSegmentBytes = (_j = object.logSegmentBytes) !== null && _j !== void 0 ? _j : undefined;
        message.logPreallocate = (_k = object.logPreallocate) !== null && _k !== void 0 ? _k : undefined;
        message.socketSendBufferBytes = (_l = object.socketSendBufferBytes) !== null && _l !== void 0 ? _l : undefined;
        message.socketReceiveBufferBytes =
            (_m = object.socketReceiveBufferBytes) !== null && _m !== void 0 ? _m : undefined;
        message.autoCreateTopicsEnable = (_o = object.autoCreateTopicsEnable) !== null && _o !== void 0 ? _o : undefined;
        message.numPartitions = (_p = object.numPartitions) !== null && _p !== void 0 ? _p : undefined;
        message.defaultReplicationFactor =
            (_q = object.defaultReplicationFactor) !== null && _q !== void 0 ? _q : undefined;
        message.messageMaxBytes = (_r = object.messageMaxBytes) !== null && _r !== void 0 ? _r : undefined;
        message.replicaFetchMaxBytes = (_s = object.replicaFetchMaxBytes) !== null && _s !== void 0 ? _s : undefined;
        message.sslCipherSuites = ((_t = object.sslCipherSuites) === null || _t === void 0 ? void 0 : _t.map((e) => e)) || [];
        message.offsetsRetentionMinutes =
            (_u = object.offsetsRetentionMinutes) !== null && _u !== void 0 ? _u : undefined;
        message.saslEnabledMechanisms =
            ((_v = object.saslEnabledMechanisms) === null || _v === void 0 ? void 0 : _v.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Kafkaconfig28.$type, exports.Kafkaconfig28);
const baseKafkaConfig3 = {
    $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig3",
    compressionType: 0,
    sslCipherSuites: "",
    saslEnabledMechanisms: 0,
};
exports.KafkaConfig3 = {
    $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig3",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.compressionType !== 0) {
            writer.uint32(8).int32(message.compressionType);
        }
        if (message.logFlushIntervalMessages !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logFlushIntervalMessages,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.logFlushIntervalMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logFlushIntervalMs,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.logFlushSchedulerIntervalMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logFlushSchedulerIntervalMs,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.logRetentionBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logRetentionBytes,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.logRetentionHours !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logRetentionHours,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.logRetentionMinutes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logRetentionMinutes,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.logRetentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.logRetentionMs }, writer.uint32(66).fork()).ldelim();
        }
        if (message.logSegmentBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logSegmentBytes,
            }, writer.uint32(74).fork()).ldelim();
        }
        if (message.logPreallocate !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logPreallocate }, writer.uint32(82).fork()).ldelim();
        }
        if (message.socketSendBufferBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.socketSendBufferBytes,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.socketReceiveBufferBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.socketReceiveBufferBytes,
            }, writer.uint32(98).fork()).ldelim();
        }
        if (message.autoCreateTopicsEnable !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoCreateTopicsEnable,
            }, writer.uint32(106).fork()).ldelim();
        }
        if (message.numPartitions !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.numPartitions }, writer.uint32(114).fork()).ldelim();
        }
        if (message.defaultReplicationFactor !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.defaultReplicationFactor,
            }, writer.uint32(122).fork()).ldelim();
        }
        if (message.messageMaxBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.messageMaxBytes,
            }, writer.uint32(130).fork()).ldelim();
        }
        if (message.replicaFetchMaxBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.replicaFetchMaxBytes,
            }, writer.uint32(138).fork()).ldelim();
        }
        for (const v of message.sslCipherSuites) {
            writer.uint32(146).string(v);
        }
        if (message.offsetsRetentionMinutes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.offsetsRetentionMinutes,
            }, writer.uint32(154).fork()).ldelim();
        }
        writer.uint32(162).fork();
        for (const v of message.saslEnabledMechanisms) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseKafkaConfig3);
        message.sslCipherSuites = [];
        message.saslEnabledMechanisms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.compressionType = reader.int32();
                    break;
                case 2:
                    message.logFlushIntervalMessages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.logFlushIntervalMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.logFlushSchedulerIntervalMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.logRetentionBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.logRetentionHours = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.logRetentionMinutes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.logRetentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.logSegmentBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.logPreallocate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.socketSendBufferBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.socketReceiveBufferBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.autoCreateTopicsEnable = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.numPartitions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.defaultReplicationFactor = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 16:
                    message.messageMaxBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.replicaFetchMaxBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 18:
                    message.sslCipherSuites.push(reader.string());
                    break;
                case 19:
                    message.offsetsRetentionMinutes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.saslEnabledMechanisms.push(reader.int32());
                        }
                    }
                    else {
                        message.saslEnabledMechanisms.push(reader.int32());
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
        var _a, _b;
        const message = Object.assign({}, baseKafkaConfig3);
        message.compressionType =
            object.compressionType !== undefined && object.compressionType !== null
                ? (0, common_1.compressionTypeFromJSON)(object.compressionType)
                : 0;
        message.logFlushIntervalMessages =
            object.logFlushIntervalMessages !== undefined &&
                object.logFlushIntervalMessages !== null
                ? Number(object.logFlushIntervalMessages)
                : undefined;
        message.logFlushIntervalMs =
            object.logFlushIntervalMs !== undefined &&
                object.logFlushIntervalMs !== null
                ? Number(object.logFlushIntervalMs)
                : undefined;
        message.logFlushSchedulerIntervalMs =
            object.logFlushSchedulerIntervalMs !== undefined &&
                object.logFlushSchedulerIntervalMs !== null
                ? Number(object.logFlushSchedulerIntervalMs)
                : undefined;
        message.logRetentionBytes =
            object.logRetentionBytes !== undefined &&
                object.logRetentionBytes !== null
                ? Number(object.logRetentionBytes)
                : undefined;
        message.logRetentionHours =
            object.logRetentionHours !== undefined &&
                object.logRetentionHours !== null
                ? Number(object.logRetentionHours)
                : undefined;
        message.logRetentionMinutes =
            object.logRetentionMinutes !== undefined &&
                object.logRetentionMinutes !== null
                ? Number(object.logRetentionMinutes)
                : undefined;
        message.logRetentionMs =
            object.logRetentionMs !== undefined && object.logRetentionMs !== null
                ? Number(object.logRetentionMs)
                : undefined;
        message.logSegmentBytes =
            object.logSegmentBytes !== undefined && object.logSegmentBytes !== null
                ? Number(object.logSegmentBytes)
                : undefined;
        message.logPreallocate =
            object.logPreallocate !== undefined && object.logPreallocate !== null
                ? Boolean(object.logPreallocate)
                : undefined;
        message.socketSendBufferBytes =
            object.socketSendBufferBytes !== undefined &&
                object.socketSendBufferBytes !== null
                ? Number(object.socketSendBufferBytes)
                : undefined;
        message.socketReceiveBufferBytes =
            object.socketReceiveBufferBytes !== undefined &&
                object.socketReceiveBufferBytes !== null
                ? Number(object.socketReceiveBufferBytes)
                : undefined;
        message.autoCreateTopicsEnable =
            object.autoCreateTopicsEnable !== undefined &&
                object.autoCreateTopicsEnable !== null
                ? Boolean(object.autoCreateTopicsEnable)
                : undefined;
        message.numPartitions =
            object.numPartitions !== undefined && object.numPartitions !== null
                ? Number(object.numPartitions)
                : undefined;
        message.defaultReplicationFactor =
            object.defaultReplicationFactor !== undefined &&
                object.defaultReplicationFactor !== null
                ? Number(object.defaultReplicationFactor)
                : undefined;
        message.messageMaxBytes =
            object.messageMaxBytes !== undefined && object.messageMaxBytes !== null
                ? Number(object.messageMaxBytes)
                : undefined;
        message.replicaFetchMaxBytes =
            object.replicaFetchMaxBytes !== undefined &&
                object.replicaFetchMaxBytes !== null
                ? Number(object.replicaFetchMaxBytes)
                : undefined;
        message.sslCipherSuites = ((_a = object.sslCipherSuites) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.offsetsRetentionMinutes =
            object.offsetsRetentionMinutes !== undefined &&
                object.offsetsRetentionMinutes !== null
                ? Number(object.offsetsRetentionMinutes)
                : undefined;
        message.saslEnabledMechanisms = ((_b = object.saslEnabledMechanisms) !== null && _b !== void 0 ? _b : []).map((e) => (0, common_1.saslMechanismFromJSON)(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.compressionType !== undefined &&
            (obj.compressionType = (0, common_1.compressionTypeToJSON)(message.compressionType));
        message.logFlushIntervalMessages !== undefined &&
            (obj.logFlushIntervalMessages = message.logFlushIntervalMessages);
        message.logFlushIntervalMs !== undefined &&
            (obj.logFlushIntervalMs = message.logFlushIntervalMs);
        message.logFlushSchedulerIntervalMs !== undefined &&
            (obj.logFlushSchedulerIntervalMs = message.logFlushSchedulerIntervalMs);
        message.logRetentionBytes !== undefined &&
            (obj.logRetentionBytes = message.logRetentionBytes);
        message.logRetentionHours !== undefined &&
            (obj.logRetentionHours = message.logRetentionHours);
        message.logRetentionMinutes !== undefined &&
            (obj.logRetentionMinutes = message.logRetentionMinutes);
        message.logRetentionMs !== undefined &&
            (obj.logRetentionMs = message.logRetentionMs);
        message.logSegmentBytes !== undefined &&
            (obj.logSegmentBytes = message.logSegmentBytes);
        message.logPreallocate !== undefined &&
            (obj.logPreallocate = message.logPreallocate);
        message.socketSendBufferBytes !== undefined &&
            (obj.socketSendBufferBytes = message.socketSendBufferBytes);
        message.socketReceiveBufferBytes !== undefined &&
            (obj.socketReceiveBufferBytes = message.socketReceiveBufferBytes);
        message.autoCreateTopicsEnable !== undefined &&
            (obj.autoCreateTopicsEnable = message.autoCreateTopicsEnable);
        message.numPartitions !== undefined &&
            (obj.numPartitions = message.numPartitions);
        message.defaultReplicationFactor !== undefined &&
            (obj.defaultReplicationFactor = message.defaultReplicationFactor);
        message.messageMaxBytes !== undefined &&
            (obj.messageMaxBytes = message.messageMaxBytes);
        message.replicaFetchMaxBytes !== undefined &&
            (obj.replicaFetchMaxBytes = message.replicaFetchMaxBytes);
        if (message.sslCipherSuites) {
            obj.sslCipherSuites = message.sslCipherSuites.map((e) => e);
        }
        else {
            obj.sslCipherSuites = [];
        }
        message.offsetsRetentionMinutes !== undefined &&
            (obj.offsetsRetentionMinutes = message.offsetsRetentionMinutes);
        if (message.saslEnabledMechanisms) {
            obj.saslEnabledMechanisms = message.saslEnabledMechanisms.map((e) => (0, common_1.saslMechanismToJSON)(e));
        }
        else {
            obj.saslEnabledMechanisms = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        const message = Object.assign({}, baseKafkaConfig3);
        message.compressionType = (_a = object.compressionType) !== null && _a !== void 0 ? _a : 0;
        message.logFlushIntervalMessages =
            (_b = object.logFlushIntervalMessages) !== null && _b !== void 0 ? _b : undefined;
        message.logFlushIntervalMs = (_c = object.logFlushIntervalMs) !== null && _c !== void 0 ? _c : undefined;
        message.logFlushSchedulerIntervalMs =
            (_d = object.logFlushSchedulerIntervalMs) !== null && _d !== void 0 ? _d : undefined;
        message.logRetentionBytes = (_e = object.logRetentionBytes) !== null && _e !== void 0 ? _e : undefined;
        message.logRetentionHours = (_f = object.logRetentionHours) !== null && _f !== void 0 ? _f : undefined;
        message.logRetentionMinutes = (_g = object.logRetentionMinutes) !== null && _g !== void 0 ? _g : undefined;
        message.logRetentionMs = (_h = object.logRetentionMs) !== null && _h !== void 0 ? _h : undefined;
        message.logSegmentBytes = (_j = object.logSegmentBytes) !== null && _j !== void 0 ? _j : undefined;
        message.logPreallocate = (_k = object.logPreallocate) !== null && _k !== void 0 ? _k : undefined;
        message.socketSendBufferBytes = (_l = object.socketSendBufferBytes) !== null && _l !== void 0 ? _l : undefined;
        message.socketReceiveBufferBytes =
            (_m = object.socketReceiveBufferBytes) !== null && _m !== void 0 ? _m : undefined;
        message.autoCreateTopicsEnable = (_o = object.autoCreateTopicsEnable) !== null && _o !== void 0 ? _o : undefined;
        message.numPartitions = (_p = object.numPartitions) !== null && _p !== void 0 ? _p : undefined;
        message.defaultReplicationFactor =
            (_q = object.defaultReplicationFactor) !== null && _q !== void 0 ? _q : undefined;
        message.messageMaxBytes = (_r = object.messageMaxBytes) !== null && _r !== void 0 ? _r : undefined;
        message.replicaFetchMaxBytes = (_s = object.replicaFetchMaxBytes) !== null && _s !== void 0 ? _s : undefined;
        message.sslCipherSuites = ((_t = object.sslCipherSuites) === null || _t === void 0 ? void 0 : _t.map((e) => e)) || [];
        message.offsetsRetentionMinutes =
            (_u = object.offsetsRetentionMinutes) !== null && _u !== void 0 ? _u : undefined;
        message.saslEnabledMechanisms =
            ((_v = object.saslEnabledMechanisms) === null || _v === void 0 ? void 0 : _v.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.KafkaConfig3.$type, exports.KafkaConfig3);
const baseHost = {
    $type: "yandex.cloud.mdb.kafka.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    role: 0,
    health: 0,
    subnetId: "",
    assignPublicIp: false,
};
exports.Host = {
    $type: "yandex.cloud.mdb.kafka.v1.Host",
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
        if (message.role !== 0) {
            writer.uint32(32).int32(message.role);
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHost);
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
                    message.role = reader.int32();
                    break;
                case 5:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
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
        message.role =
            object.role !== undefined && object.role !== null
                ? host_RoleFromJSON(object.role)
                : 0;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.role !== undefined && (obj.role = host_RoleToJSON(message.role));
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.health !== undefined &&
            (obj.health = host_HealthToJSON(message.health));
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseHost);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.zoneId = (_c = object.zoneId) !== null && _c !== void 0 ? _c : "";
        message.role = (_d = object.role) !== null && _d !== void 0 ? _d : 0;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.health = (_e = object.health) !== null && _e !== void 0 ? _e : 0;
        message.subnetId = (_f = object.subnetId) !== null && _f !== void 0 ? _f : "";
        message.assignPublicIp = (_g = object.assignPublicIp) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host.$type, exports.Host);
const baseAccess = {
    $type: "yandex.cloud.mdb.kafka.v1.Access",
    dataTransfer: false,
};
exports.Access = {
    $type: "yandex.cloud.mdb.kafka.v1.Access",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataTransfer === true) {
            writer.uint32(8).bool(message.dataTransfer);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataTransfer !== undefined &&
            (obj.dataTransfer = message.dataTransfer);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAccess);
        message.dataTransfer = (_a = object.dataTransfer) !== null && _a !== void 0 ? _a : false;
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
