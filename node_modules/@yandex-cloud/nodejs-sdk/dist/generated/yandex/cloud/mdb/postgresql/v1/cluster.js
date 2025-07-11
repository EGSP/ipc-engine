"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskSizeAutoscaling = exports.PerformanceDiagnostics = exports.Access = exports.Resources = exports.Service = exports.HostConfig = exports.Host = exports.ConnectionPoolerConfig = exports.ClusterConfig = exports.Monitoring = exports.Cluster_LabelsEntry = exports.Cluster = exports.service_HealthToJSON = exports.service_HealthFromJSON = exports.Service_Health = exports.service_TypeToJSON = exports.service_TypeFromJSON = exports.Service_Type = exports.host_HealthToJSON = exports.host_HealthFromJSON = exports.Host_Health = exports.host_ReplicaTypeToJSON = exports.host_ReplicaTypeFromJSON = exports.Host_ReplicaType = exports.host_RoleToJSON = exports.host_RoleFromJSON = exports.Host_Role = exports.connectionPoolerConfig_PoolingModeToJSON = exports.connectionPoolerConfig_PoolingModeFromJSON = exports.ConnectionPoolerConfig_PoolingMode = exports.cluster_StatusToJSON = exports.cluster_StatusFromJSON = exports.Cluster_Status = exports.cluster_HealthToJSON = exports.cluster_HealthFromJSON = exports.Cluster_Health = exports.cluster_EnvironmentToJSON = exports.cluster_EnvironmentFromJSON = exports.Cluster_Environment = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const maintenance_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/maintenance");
const timeofday_1 = require("../../../../../google/type/timeofday");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const postgresql9_6_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql9_6");
const postgresql10_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10_1c");
const postgresql10_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10");
const postgresql11_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11");
const postgresql11_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11_1c");
const postgresql12_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12");
const postgresql12_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12_1c");
const postgresql13_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql13");
const postgresql13_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql13_1c");
const postgresql14_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql14");
const postgresql14_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql14_1c");
const postgresql15_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql15");
const postgresql15_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql15_1c");
const postgresql16_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql16");
const postgresql16_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql16_1c");
const host9_6_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host9_6");
const host10_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host10_1c");
const host10_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host10");
const host11_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host11");
const host11_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host11_1c");
const host12_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host12");
const host12_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host12_1c");
const host13_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host13");
const host13_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host13_1c");
const host14_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host14");
const host14_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host14_1c");
const host15_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host15");
const host15_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host15_1c");
const host16_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host16");
const host16_1c_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/config/host16_1c");
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.postgresql.v1";
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
var ConnectionPoolerConfig_PoolingMode;
(function (ConnectionPoolerConfig_PoolingMode) {
    ConnectionPoolerConfig_PoolingMode[ConnectionPoolerConfig_PoolingMode["POOLING_MODE_UNSPECIFIED"] = 0] = "POOLING_MODE_UNSPECIFIED";
    /** SESSION - Session pooling mode. */
    ConnectionPoolerConfig_PoolingMode[ConnectionPoolerConfig_PoolingMode["SESSION"] = 1] = "SESSION";
    /** TRANSACTION - Transaction pooling mode. */
    ConnectionPoolerConfig_PoolingMode[ConnectionPoolerConfig_PoolingMode["TRANSACTION"] = 2] = "TRANSACTION";
    /** STATEMENT - Statement pooling mode. */
    ConnectionPoolerConfig_PoolingMode[ConnectionPoolerConfig_PoolingMode["STATEMENT"] = 3] = "STATEMENT";
    ConnectionPoolerConfig_PoolingMode[ConnectionPoolerConfig_PoolingMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ConnectionPoolerConfig_PoolingMode = exports.ConnectionPoolerConfig_PoolingMode || (exports.ConnectionPoolerConfig_PoolingMode = {}));
function connectionPoolerConfig_PoolingModeFromJSON(object) {
    switch (object) {
        case 0:
        case "POOLING_MODE_UNSPECIFIED":
            return ConnectionPoolerConfig_PoolingMode.POOLING_MODE_UNSPECIFIED;
        case 1:
        case "SESSION":
            return ConnectionPoolerConfig_PoolingMode.SESSION;
        case 2:
        case "TRANSACTION":
            return ConnectionPoolerConfig_PoolingMode.TRANSACTION;
        case 3:
        case "STATEMENT":
            return ConnectionPoolerConfig_PoolingMode.STATEMENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ConnectionPoolerConfig_PoolingMode.UNRECOGNIZED;
    }
}
exports.connectionPoolerConfig_PoolingModeFromJSON = connectionPoolerConfig_PoolingModeFromJSON;
function connectionPoolerConfig_PoolingModeToJSON(object) {
    switch (object) {
        case ConnectionPoolerConfig_PoolingMode.POOLING_MODE_UNSPECIFIED:
            return "POOLING_MODE_UNSPECIFIED";
        case ConnectionPoolerConfig_PoolingMode.SESSION:
            return "SESSION";
        case ConnectionPoolerConfig_PoolingMode.TRANSACTION:
            return "TRANSACTION";
        case ConnectionPoolerConfig_PoolingMode.STATEMENT:
            return "STATEMENT";
        default:
            return "UNKNOWN";
    }
}
exports.connectionPoolerConfig_PoolingModeToJSON = connectionPoolerConfig_PoolingModeToJSON;
var Host_Role;
(function (Host_Role) {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    Host_Role[Host_Role["ROLE_UNKNOWN"] = 0] = "ROLE_UNKNOWN";
    /** MASTER - Host is the master PostgreSQL server in the cluster. */
    Host_Role[Host_Role["MASTER"] = 1] = "MASTER";
    /** REPLICA - Host is a replica (standby) PostgreSQL server in the cluster. */
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
var Host_ReplicaType;
(function (Host_ReplicaType) {
    /** REPLICA_TYPE_UNKNOWN - Replica type is unknown (we have no data) or it's master */
    Host_ReplicaType[Host_ReplicaType["REPLICA_TYPE_UNKNOWN"] = 0] = "REPLICA_TYPE_UNKNOWN";
    Host_ReplicaType[Host_ReplicaType["ASYNC"] = 1] = "ASYNC";
    Host_ReplicaType[Host_ReplicaType["SYNC"] = 2] = "SYNC";
    Host_ReplicaType[Host_ReplicaType["QUORUM"] = 3] = "QUORUM";
    Host_ReplicaType[Host_ReplicaType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_ReplicaType = exports.Host_ReplicaType || (exports.Host_ReplicaType = {}));
function host_ReplicaTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "REPLICA_TYPE_UNKNOWN":
            return Host_ReplicaType.REPLICA_TYPE_UNKNOWN;
        case 1:
        case "ASYNC":
            return Host_ReplicaType.ASYNC;
        case 2:
        case "SYNC":
            return Host_ReplicaType.SYNC;
        case 3:
        case "QUORUM":
            return Host_ReplicaType.QUORUM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Host_ReplicaType.UNRECOGNIZED;
    }
}
exports.host_ReplicaTypeFromJSON = host_ReplicaTypeFromJSON;
function host_ReplicaTypeToJSON(object) {
    switch (object) {
        case Host_ReplicaType.REPLICA_TYPE_UNKNOWN:
            return "REPLICA_TYPE_UNKNOWN";
        case Host_ReplicaType.ASYNC:
            return "ASYNC";
        case Host_ReplicaType.SYNC:
            return "SYNC";
        case Host_ReplicaType.QUORUM:
            return "QUORUM";
        default:
            return "UNKNOWN";
    }
}
exports.host_ReplicaTypeToJSON = host_ReplicaTypeToJSON;
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
    /** READONLY - The host is alive, but in read-only mode. */
    Host_Health[Host_Health["READONLY"] = 4] = "READONLY";
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
        case 4:
        case "READONLY":
            return Host_Health.READONLY;
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
        case Host_Health.READONLY:
            return "READONLY";
        default:
            return "UNKNOWN";
    }
}
exports.host_HealthToJSON = host_HealthToJSON;
var Service_Type;
(function (Service_Type) {
    Service_Type[Service_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** POSTGRESQL - The host is a PostgreSQL server. */
    Service_Type[Service_Type["POSTGRESQL"] = 1] = "POSTGRESQL";
    /** POOLER - The host is a PgBouncer server. */
    Service_Type[Service_Type["POOLER"] = 2] = "POOLER";
    Service_Type[Service_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Service_Type = exports.Service_Type || (exports.Service_Type = {}));
function service_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Service_Type.TYPE_UNSPECIFIED;
        case 1:
        case "POSTGRESQL":
            return Service_Type.POSTGRESQL;
        case 2:
        case "POOLER":
            return Service_Type.POOLER;
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
        case Service_Type.POSTGRESQL:
            return "POSTGRESQL";
        case Service_Type.POOLER:
            return "POOLER";
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
    /** READONLY - The server is in read-only mode. */
    Service_Health[Service_Health["READONLY"] = 3] = "READONLY";
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
        case 3:
        case "READONLY":
            return Service_Health.READONLY;
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
        case Service_Health.READONLY:
            return "READONLY";
        default:
            return "UNKNOWN";
    }
}
exports.service_HealthToJSON = service_HealthToJSON;
const baseCluster = {
    $type: "yandex.cloud.mdb.postgresql.v1.Cluster",
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
    hostGroupIds: "",
};
exports.Cluster = {
    $type: "yandex.cloud.mdb.postgresql.v1.Cluster",
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
                $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry",
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
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(106).fork()).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            maintenance_1.MaintenanceOperation.encode(message.plannedOperation, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(122).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(128).bool(message.deletionProtection);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(138).string(v);
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
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.plannedOperation = maintenance_1.MaintenanceOperation.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 16:
                    message.deletionProtection = reader.bool();
                    break;
                case 17:
                    message.hostGroupIds.push(reader.string());
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
        message.hostGroupIds = ((_d = object.hostGroupIds) !== null && _d !== void 0 ? _d : []).map((e) => String(e));
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
        if (message.hostGroupIds) {
            obj.hostGroupIds = message.hostGroupIds.map((e) => e);
        }
        else {
            obj.hostGroupIds = [];
        }
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
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? maintenance_1.MaintenanceOperation.fromPartial(object.plannedOperation)
                : undefined;
        message.securityGroupIds = ((_m = object.securityGroupIds) === null || _m === void 0 ? void 0 : _m.map((e) => e)) || [];
        message.deletionProtection = (_o = object.deletionProtection) !== null && _o !== void 0 ? _o : false;
        message.hostGroupIds = ((_p = object.hostGroupIds) === null || _p === void 0 ? void 0 : _p.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Cluster.$type, exports.Cluster);
const baseCluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry",
    key: "",
    value: "",
};
exports.Cluster_LabelsEntry = {
    $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry",
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
    $type: "yandex.cloud.mdb.postgresql.v1.Monitoring",
    name: "",
    description: "",
    link: "",
};
exports.Monitoring = {
    $type: "yandex.cloud.mdb.postgresql.v1.Monitoring",
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
    $type: "yandex.cloud.mdb.postgresql.v1.ClusterConfig",
    version: "",
};
exports.ClusterConfig = {
    $type: "yandex.cloud.mdb.postgresql.v1.ClusterConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.postgresqlConfig96 !== undefined) {
            postgresql9_6_1.Postgresqlconfigset96.encode(message.postgresqlConfig96, writer.uint32(18).fork()).ldelim();
        }
        if (message.postgresqlConfig101c !== undefined) {
            postgresql10_1c_1.Postgresqlconfigset101c.encode(message.postgresqlConfig101c, writer.uint32(82).fork()).ldelim();
        }
        if (message.postgresqlConfig10 !== undefined) {
            postgresql10_1.PostgresqlConfigSet10.encode(message.postgresqlConfig10, writer.uint32(26).fork()).ldelim();
        }
        if (message.postgresqlConfig11 !== undefined) {
            postgresql11_1.PostgresqlConfigSet11.encode(message.postgresqlConfig11, writer.uint32(66).fork()).ldelim();
        }
        if (message.postgresqlConfig111c !== undefined) {
            postgresql11_1c_1.Postgresqlconfigset111c.encode(message.postgresqlConfig111c, writer.uint32(106).fork()).ldelim();
        }
        if (message.postgresqlConfig12 !== undefined) {
            postgresql12_1.PostgresqlConfigSet12.encode(message.postgresqlConfig12, writer.uint32(90).fork()).ldelim();
        }
        if (message.postgresqlConfig121c !== undefined) {
            postgresql12_1c_1.Postgresqlconfigset121c.encode(message.postgresqlConfig121c, writer.uint32(114).fork()).ldelim();
        }
        if (message.postgresqlConfig13 !== undefined) {
            postgresql13_1.PostgresqlConfigSet13.encode(message.postgresqlConfig13, writer.uint32(122).fork()).ldelim();
        }
        if (message.postgresqlConfig131c !== undefined) {
            postgresql13_1c_1.Postgresqlconfigset131c.encode(message.postgresqlConfig131c, writer.uint32(146).fork()).ldelim();
        }
        if (message.postgresqlConfig14 !== undefined) {
            postgresql14_1.PostgresqlConfigSet14.encode(message.postgresqlConfig14, writer.uint32(130).fork()).ldelim();
        }
        if (message.postgresqlConfig141c !== undefined) {
            postgresql14_1c_1.Postgresqlconfigset141c.encode(message.postgresqlConfig141c, writer.uint32(154).fork()).ldelim();
        }
        if (message.postgresqlConfig15 !== undefined) {
            postgresql15_1.PostgresqlConfigSet15.encode(message.postgresqlConfig15, writer.uint32(170).fork()).ldelim();
        }
        if (message.postgresqlConfig151c !== undefined) {
            postgresql15_1c_1.Postgresqlconfigset151c.encode(message.postgresqlConfig151c, writer.uint32(178).fork()).ldelim();
        }
        if (message.postgresqlConfig16 !== undefined) {
            postgresql16_1.PostgresqlConfigSet16.encode(message.postgresqlConfig16, writer.uint32(194).fork()).ldelim();
        }
        if (message.postgresqlConfig161c !== undefined) {
            postgresql16_1c_1.Postgresqlconfigset161c.encode(message.postgresqlConfig161c, writer.uint32(202).fork()).ldelim();
        }
        if (message.poolerConfig !== undefined) {
            exports.ConnectionPoolerConfig.encode(message.poolerConfig, writer.uint32(34).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
        }
        if (message.autofailover !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.autofailover }, writer.uint32(50).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            timeofday_1.TimeOfDay.encode(message.backupWindowStart, writer.uint32(58).fork()).ldelim();
        }
        if (message.backupRetainPeriodDays !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.backupRetainPeriodDays,
            }, writer.uint32(138).fork()).ldelim();
        }
        if (message.access !== undefined) {
            exports.Access.encode(message.access, writer.uint32(74).fork()).ldelim();
        }
        if (message.performanceDiagnostics !== undefined) {
            exports.PerformanceDiagnostics.encode(message.performanceDiagnostics, writer.uint32(98).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            exports.DiskSizeAutoscaling.encode(message.diskSizeAutoscaling, writer.uint32(186).fork()).ldelim();
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
                    message.postgresqlConfig96 = postgresql9_6_1.Postgresqlconfigset96.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.postgresqlConfig101c = postgresql10_1c_1.Postgresqlconfigset101c.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.postgresqlConfig10 = postgresql10_1.PostgresqlConfigSet10.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.postgresqlConfig11 = postgresql11_1.PostgresqlConfigSet11.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.postgresqlConfig111c = postgresql11_1c_1.Postgresqlconfigset111c.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.postgresqlConfig12 = postgresql12_1.PostgresqlConfigSet12.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.postgresqlConfig121c = postgresql12_1c_1.Postgresqlconfigset121c.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.postgresqlConfig13 = postgresql13_1.PostgresqlConfigSet13.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.postgresqlConfig131c = postgresql13_1c_1.Postgresqlconfigset131c.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.postgresqlConfig14 = postgresql14_1.PostgresqlConfigSet14.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.postgresqlConfig141c = postgresql14_1c_1.Postgresqlconfigset141c.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.postgresqlConfig15 = postgresql15_1.PostgresqlConfigSet15.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.postgresqlConfig151c = postgresql15_1c_1.Postgresqlconfigset151c.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.postgresqlConfig16 = postgresql16_1.PostgresqlConfigSet16.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.postgresqlConfig161c = postgresql16_1c_1.Postgresqlconfigset161c.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.poolerConfig = exports.ConnectionPoolerConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.autofailover = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.backupWindowStart = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.backupRetainPeriodDays = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.access = exports.Access.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.performanceDiagnostics = exports.PerformanceDiagnostics.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.diskSizeAutoscaling = exports.DiskSizeAutoscaling.decode(reader, reader.uint32());
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
        message.postgresqlConfig96 =
            object.postgresqlConfig_9_6 !== undefined &&
                object.postgresqlConfig_9_6 !== null
                ? postgresql9_6_1.Postgresqlconfigset96.fromJSON(object.postgresqlConfig_9_6)
                : undefined;
        message.postgresqlConfig101c =
            object.postgresqlConfig_10_1c !== undefined &&
                object.postgresqlConfig_10_1c !== null
                ? postgresql10_1c_1.Postgresqlconfigset101c.fromJSON(object.postgresqlConfig_10_1c)
                : undefined;
        message.postgresqlConfig10 =
            object.postgresqlConfig_10 !== undefined &&
                object.postgresqlConfig_10 !== null
                ? postgresql10_1.PostgresqlConfigSet10.fromJSON(object.postgresqlConfig_10)
                : undefined;
        message.postgresqlConfig11 =
            object.postgresqlConfig_11 !== undefined &&
                object.postgresqlConfig_11 !== null
                ? postgresql11_1.PostgresqlConfigSet11.fromJSON(object.postgresqlConfig_11)
                : undefined;
        message.postgresqlConfig111c =
            object.postgresqlConfig_11_1c !== undefined &&
                object.postgresqlConfig_11_1c !== null
                ? postgresql11_1c_1.Postgresqlconfigset111c.fromJSON(object.postgresqlConfig_11_1c)
                : undefined;
        message.postgresqlConfig12 =
            object.postgresqlConfig_12 !== undefined &&
                object.postgresqlConfig_12 !== null
                ? postgresql12_1.PostgresqlConfigSet12.fromJSON(object.postgresqlConfig_12)
                : undefined;
        message.postgresqlConfig121c =
            object.postgresqlConfig_12_1c !== undefined &&
                object.postgresqlConfig_12_1c !== null
                ? postgresql12_1c_1.Postgresqlconfigset121c.fromJSON(object.postgresqlConfig_12_1c)
                : undefined;
        message.postgresqlConfig13 =
            object.postgresqlConfig_13 !== undefined &&
                object.postgresqlConfig_13 !== null
                ? postgresql13_1.PostgresqlConfigSet13.fromJSON(object.postgresqlConfig_13)
                : undefined;
        message.postgresqlConfig131c =
            object.postgresqlConfig_13_1c !== undefined &&
                object.postgresqlConfig_13_1c !== null
                ? postgresql13_1c_1.Postgresqlconfigset131c.fromJSON(object.postgresqlConfig_13_1c)
                : undefined;
        message.postgresqlConfig14 =
            object.postgresqlConfig_14 !== undefined &&
                object.postgresqlConfig_14 !== null
                ? postgresql14_1.PostgresqlConfigSet14.fromJSON(object.postgresqlConfig_14)
                : undefined;
        message.postgresqlConfig141c =
            object.postgresqlConfig_14_1c !== undefined &&
                object.postgresqlConfig_14_1c !== null
                ? postgresql14_1c_1.Postgresqlconfigset141c.fromJSON(object.postgresqlConfig_14_1c)
                : undefined;
        message.postgresqlConfig15 =
            object.postgresqlConfig_15 !== undefined &&
                object.postgresqlConfig_15 !== null
                ? postgresql15_1.PostgresqlConfigSet15.fromJSON(object.postgresqlConfig_15)
                : undefined;
        message.postgresqlConfig151c =
            object.postgresqlConfig_15_1c !== undefined &&
                object.postgresqlConfig_15_1c !== null
                ? postgresql15_1c_1.Postgresqlconfigset151c.fromJSON(object.postgresqlConfig_15_1c)
                : undefined;
        message.postgresqlConfig16 =
            object.postgresqlConfig_16 !== undefined &&
                object.postgresqlConfig_16 !== null
                ? postgresql16_1.PostgresqlConfigSet16.fromJSON(object.postgresqlConfig_16)
                : undefined;
        message.postgresqlConfig161c =
            object.postgresqlConfig_16_1c !== undefined &&
                object.postgresqlConfig_16_1c !== null
                ? postgresql16_1c_1.Postgresqlconfigset161c.fromJSON(object.postgresqlConfig_16_1c)
                : undefined;
        message.poolerConfig =
            object.poolerConfig !== undefined && object.poolerConfig !== null
                ? exports.ConnectionPoolerConfig.fromJSON(object.poolerConfig)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        message.autofailover =
            object.autofailover !== undefined && object.autofailover !== null
                ? Boolean(object.autofailover)
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
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromJSON(object.access)
                : undefined;
        message.performanceDiagnostics =
            object.performanceDiagnostics !== undefined &&
                object.performanceDiagnostics !== null
                ? exports.PerformanceDiagnostics.fromJSON(object.performanceDiagnostics)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined &&
                object.diskSizeAutoscaling !== null
                ? exports.DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.postgresqlConfig96 !== undefined &&
            (obj.postgresqlConfig_9_6 = message.postgresqlConfig96
                ? postgresql9_6_1.Postgresqlconfigset96.toJSON(message.postgresqlConfig96)
                : undefined);
        message.postgresqlConfig101c !== undefined &&
            (obj.postgresqlConfig_10_1c = message.postgresqlConfig101c
                ? postgresql10_1c_1.Postgresqlconfigset101c.toJSON(message.postgresqlConfig101c)
                : undefined);
        message.postgresqlConfig10 !== undefined &&
            (obj.postgresqlConfig_10 = message.postgresqlConfig10
                ? postgresql10_1.PostgresqlConfigSet10.toJSON(message.postgresqlConfig10)
                : undefined);
        message.postgresqlConfig11 !== undefined &&
            (obj.postgresqlConfig_11 = message.postgresqlConfig11
                ? postgresql11_1.PostgresqlConfigSet11.toJSON(message.postgresqlConfig11)
                : undefined);
        message.postgresqlConfig111c !== undefined &&
            (obj.postgresqlConfig_11_1c = message.postgresqlConfig111c
                ? postgresql11_1c_1.Postgresqlconfigset111c.toJSON(message.postgresqlConfig111c)
                : undefined);
        message.postgresqlConfig12 !== undefined &&
            (obj.postgresqlConfig_12 = message.postgresqlConfig12
                ? postgresql12_1.PostgresqlConfigSet12.toJSON(message.postgresqlConfig12)
                : undefined);
        message.postgresqlConfig121c !== undefined &&
            (obj.postgresqlConfig_12_1c = message.postgresqlConfig121c
                ? postgresql12_1c_1.Postgresqlconfigset121c.toJSON(message.postgresqlConfig121c)
                : undefined);
        message.postgresqlConfig13 !== undefined &&
            (obj.postgresqlConfig_13 = message.postgresqlConfig13
                ? postgresql13_1.PostgresqlConfigSet13.toJSON(message.postgresqlConfig13)
                : undefined);
        message.postgresqlConfig131c !== undefined &&
            (obj.postgresqlConfig_13_1c = message.postgresqlConfig131c
                ? postgresql13_1c_1.Postgresqlconfigset131c.toJSON(message.postgresqlConfig131c)
                : undefined);
        message.postgresqlConfig14 !== undefined &&
            (obj.postgresqlConfig_14 = message.postgresqlConfig14
                ? postgresql14_1.PostgresqlConfigSet14.toJSON(message.postgresqlConfig14)
                : undefined);
        message.postgresqlConfig141c !== undefined &&
            (obj.postgresqlConfig_14_1c = message.postgresqlConfig141c
                ? postgresql14_1c_1.Postgresqlconfigset141c.toJSON(message.postgresqlConfig141c)
                : undefined);
        message.postgresqlConfig15 !== undefined &&
            (obj.postgresqlConfig_15 = message.postgresqlConfig15
                ? postgresql15_1.PostgresqlConfigSet15.toJSON(message.postgresqlConfig15)
                : undefined);
        message.postgresqlConfig151c !== undefined &&
            (obj.postgresqlConfig_15_1c = message.postgresqlConfig151c
                ? postgresql15_1c_1.Postgresqlconfigset151c.toJSON(message.postgresqlConfig151c)
                : undefined);
        message.postgresqlConfig16 !== undefined &&
            (obj.postgresqlConfig_16 = message.postgresqlConfig16
                ? postgresql16_1.PostgresqlConfigSet16.toJSON(message.postgresqlConfig16)
                : undefined);
        message.postgresqlConfig161c !== undefined &&
            (obj.postgresqlConfig_16_1c = message.postgresqlConfig161c
                ? postgresql16_1c_1.Postgresqlconfigset161c.toJSON(message.postgresqlConfig161c)
                : undefined);
        message.poolerConfig !== undefined &&
            (obj.poolerConfig = message.poolerConfig
                ? exports.ConnectionPoolerConfig.toJSON(message.poolerConfig)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.autofailover !== undefined &&
            (obj.autofailover = message.autofailover);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? timeofday_1.TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.backupRetainPeriodDays !== undefined &&
            (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
        message.access !== undefined &&
            (obj.access = message.access ? exports.Access.toJSON(message.access) : undefined);
        message.performanceDiagnostics !== undefined &&
            (obj.performanceDiagnostics = message.performanceDiagnostics
                ? exports.PerformanceDiagnostics.toJSON(message.performanceDiagnostics)
                : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? exports.DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseClusterConfig);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.postgresqlConfig96 =
            object.postgresqlConfig96 !== undefined &&
                object.postgresqlConfig96 !== null
                ? postgresql9_6_1.Postgresqlconfigset96.fromPartial(object.postgresqlConfig96)
                : undefined;
        message.postgresqlConfig101c =
            object.postgresqlConfig101c !== undefined &&
                object.postgresqlConfig101c !== null
                ? postgresql10_1c_1.Postgresqlconfigset101c.fromPartial(object.postgresqlConfig101c)
                : undefined;
        message.postgresqlConfig10 =
            object.postgresqlConfig10 !== undefined &&
                object.postgresqlConfig10 !== null
                ? postgresql10_1.PostgresqlConfigSet10.fromPartial(object.postgresqlConfig10)
                : undefined;
        message.postgresqlConfig11 =
            object.postgresqlConfig11 !== undefined &&
                object.postgresqlConfig11 !== null
                ? postgresql11_1.PostgresqlConfigSet11.fromPartial(object.postgresqlConfig11)
                : undefined;
        message.postgresqlConfig111c =
            object.postgresqlConfig111c !== undefined &&
                object.postgresqlConfig111c !== null
                ? postgresql11_1c_1.Postgresqlconfigset111c.fromPartial(object.postgresqlConfig111c)
                : undefined;
        message.postgresqlConfig12 =
            object.postgresqlConfig12 !== undefined &&
                object.postgresqlConfig12 !== null
                ? postgresql12_1.PostgresqlConfigSet12.fromPartial(object.postgresqlConfig12)
                : undefined;
        message.postgresqlConfig121c =
            object.postgresqlConfig121c !== undefined &&
                object.postgresqlConfig121c !== null
                ? postgresql12_1c_1.Postgresqlconfigset121c.fromPartial(object.postgresqlConfig121c)
                : undefined;
        message.postgresqlConfig13 =
            object.postgresqlConfig13 !== undefined &&
                object.postgresqlConfig13 !== null
                ? postgresql13_1.PostgresqlConfigSet13.fromPartial(object.postgresqlConfig13)
                : undefined;
        message.postgresqlConfig131c =
            object.postgresqlConfig131c !== undefined &&
                object.postgresqlConfig131c !== null
                ? postgresql13_1c_1.Postgresqlconfigset131c.fromPartial(object.postgresqlConfig131c)
                : undefined;
        message.postgresqlConfig14 =
            object.postgresqlConfig14 !== undefined &&
                object.postgresqlConfig14 !== null
                ? postgresql14_1.PostgresqlConfigSet14.fromPartial(object.postgresqlConfig14)
                : undefined;
        message.postgresqlConfig141c =
            object.postgresqlConfig141c !== undefined &&
                object.postgresqlConfig141c !== null
                ? postgresql14_1c_1.Postgresqlconfigset141c.fromPartial(object.postgresqlConfig141c)
                : undefined;
        message.postgresqlConfig15 =
            object.postgresqlConfig15 !== undefined &&
                object.postgresqlConfig15 !== null
                ? postgresql15_1.PostgresqlConfigSet15.fromPartial(object.postgresqlConfig15)
                : undefined;
        message.postgresqlConfig151c =
            object.postgresqlConfig151c !== undefined &&
                object.postgresqlConfig151c !== null
                ? postgresql15_1c_1.Postgresqlconfigset151c.fromPartial(object.postgresqlConfig151c)
                : undefined;
        message.postgresqlConfig16 =
            object.postgresqlConfig16 !== undefined &&
                object.postgresqlConfig16 !== null
                ? postgresql16_1.PostgresqlConfigSet16.fromPartial(object.postgresqlConfig16)
                : undefined;
        message.postgresqlConfig161c =
            object.postgresqlConfig161c !== undefined &&
                object.postgresqlConfig161c !== null
                ? postgresql16_1c_1.Postgresqlconfigset161c.fromPartial(object.postgresqlConfig161c)
                : undefined;
        message.poolerConfig =
            object.poolerConfig !== undefined && object.poolerConfig !== null
                ? exports.ConnectionPoolerConfig.fromPartial(object.poolerConfig)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.autofailover = (_b = object.autofailover) !== null && _b !== void 0 ? _b : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined &&
                object.backupWindowStart !== null
                ? timeofday_1.TimeOfDay.fromPartial(object.backupWindowStart)
                : undefined;
        message.backupRetainPeriodDays = (_c = object.backupRetainPeriodDays) !== null && _c !== void 0 ? _c : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? exports.Access.fromPartial(object.access)
                : undefined;
        message.performanceDiagnostics =
            object.performanceDiagnostics !== undefined &&
                object.performanceDiagnostics !== null
                ? exports.PerformanceDiagnostics.fromPartial(object.performanceDiagnostics)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined &&
                object.diskSizeAutoscaling !== null
                ? exports.DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConfig.$type, exports.ClusterConfig);
const baseConnectionPoolerConfig = {
    $type: "yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig",
    poolingMode: 0,
};
exports.ConnectionPoolerConfig = {
    $type: "yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.poolingMode !== 0) {
            writer.uint32(8).int32(message.poolingMode);
        }
        if (message.poolDiscard !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.poolDiscard }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectionPoolerConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolingMode = reader.int32();
                    break;
                case 2:
                    message.poolDiscard = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnectionPoolerConfig);
        message.poolingMode =
            object.poolingMode !== undefined && object.poolingMode !== null
                ? connectionPoolerConfig_PoolingModeFromJSON(object.poolingMode)
                : 0;
        message.poolDiscard =
            object.poolDiscard !== undefined && object.poolDiscard !== null
                ? Boolean(object.poolDiscard)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolingMode !== undefined &&
            (obj.poolingMode = connectionPoolerConfig_PoolingModeToJSON(message.poolingMode));
        message.poolDiscard !== undefined &&
            (obj.poolDiscard = message.poolDiscard);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseConnectionPoolerConfig);
        message.poolingMode = (_a = object.poolingMode) !== null && _a !== void 0 ? _a : 0;
        message.poolDiscard = (_b = object.poolDiscard) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectionPoolerConfig.$type, exports.ConnectionPoolerConfig);
const baseHost = {
    $type: "yandex.cloud.mdb.postgresql.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    role: 0,
    health: 0,
    subnetId: "",
    replicationSource: "",
    assignPublicIp: false,
    replicaType: 0,
};
exports.Host = {
    $type: "yandex.cloud.mdb.postgresql.v1.Host",
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
        if (message.replicationSource !== "") {
            writer.uint32(74).string(message.replicationSource);
        }
        if (message.priority !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.priority }, writer.uint32(82).fork()).ldelim();
        }
        if (message.config !== undefined) {
            exports.HostConfig.encode(message.config, writer.uint32(90).fork()).ldelim();
        }
        if (message.assignPublicIp === true) {
            writer.uint32(96).bool(message.assignPublicIp);
        }
        if (message.replicaType !== 0) {
            writer.uint32(104).int32(message.replicaType);
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
                    message.replicationSource = reader.string();
                    break;
                case 10:
                    message.priority = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.config = exports.HostConfig.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.assignPublicIp = reader.bool();
                    break;
                case 13:
                    message.replicaType = reader.int32();
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
        message.replicationSource =
            object.replicationSource !== undefined &&
                object.replicationSource !== null
                ? String(object.replicationSource)
                : "";
        message.priority =
            object.priority !== undefined && object.priority !== null
                ? Number(object.priority)
                : undefined;
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.HostConfig.fromJSON(object.config)
                : undefined;
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.replicaType =
            object.replicaType !== undefined && object.replicaType !== null
                ? host_ReplicaTypeFromJSON(object.replicaType)
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
        message.replicationSource !== undefined &&
            (obj.replicationSource = message.replicationSource);
        message.priority !== undefined && (obj.priority = message.priority);
        message.config !== undefined &&
            (obj.config = message.config
                ? exports.HostConfig.toJSON(message.config)
                : undefined);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.replicaType !== undefined &&
            (obj.replicaType = host_ReplicaTypeToJSON(message.replicaType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
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
        message.replicationSource = (_h = object.replicationSource) !== null && _h !== void 0 ? _h : "";
        message.priority = (_j = object.priority) !== null && _j !== void 0 ? _j : undefined;
        message.config =
            object.config !== undefined && object.config !== null
                ? exports.HostConfig.fromPartial(object.config)
                : undefined;
        message.assignPublicIp = (_k = object.assignPublicIp) !== null && _k !== void 0 ? _k : false;
        message.replicaType = (_l = object.replicaType) !== null && _l !== void 0 ? _l : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host.$type, exports.Host);
const baseHostConfig = {
    $type: "yandex.cloud.mdb.postgresql.v1.HostConfig",
};
exports.HostConfig = {
    $type: "yandex.cloud.mdb.postgresql.v1.HostConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.postgresqlConfig96 !== undefined) {
            host9_6_1.Postgresqlhostconfig96.encode(message.postgresqlConfig96, writer.uint32(10).fork()).ldelim();
        }
        if (message.postgresqlConfig101c !== undefined) {
            host10_1c_1.Postgresqlhostconfig101c.encode(message.postgresqlConfig101c, writer.uint32(34).fork()).ldelim();
        }
        if (message.postgresqlConfig10 !== undefined) {
            host10_1.PostgresqlHostConfig10.encode(message.postgresqlConfig10, writer.uint32(18).fork()).ldelim();
        }
        if (message.postgresqlConfig11 !== undefined) {
            host11_1.PostgresqlHostConfig11.encode(message.postgresqlConfig11, writer.uint32(26).fork()).ldelim();
        }
        if (message.postgresqlConfig111c !== undefined) {
            host11_1c_1.Postgresqlhostconfig111c.encode(message.postgresqlConfig111c, writer.uint32(50).fork()).ldelim();
        }
        if (message.postgresqlConfig12 !== undefined) {
            host12_1.PostgresqlHostConfig12.encode(message.postgresqlConfig12, writer.uint32(42).fork()).ldelim();
        }
        if (message.postgresqlConfig121c !== undefined) {
            host12_1c_1.Postgresqlhostconfig121c.encode(message.postgresqlConfig121c, writer.uint32(58).fork()).ldelim();
        }
        if (message.postgresqlConfig13 !== undefined) {
            host13_1.PostgresqlHostConfig13.encode(message.postgresqlConfig13, writer.uint32(66).fork()).ldelim();
        }
        if (message.postgresqlConfig131c !== undefined) {
            host13_1c_1.Postgresqlhostconfig131c.encode(message.postgresqlConfig131c, writer.uint32(82).fork()).ldelim();
        }
        if (message.postgresqlConfig14 !== undefined) {
            host14_1.PostgresqlHostConfig14.encode(message.postgresqlConfig14, writer.uint32(74).fork()).ldelim();
        }
        if (message.postgresqlConfig141c !== undefined) {
            host14_1c_1.Postgresqlhostconfig141c.encode(message.postgresqlConfig141c, writer.uint32(90).fork()).ldelim();
        }
        if (message.postgresqlConfig15 !== undefined) {
            host15_1.PostgresqlHostConfig15.encode(message.postgresqlConfig15, writer.uint32(98).fork()).ldelim();
        }
        if (message.postgresqlConfig151c !== undefined) {
            host15_1c_1.Postgresqlhostconfig151c.encode(message.postgresqlConfig151c, writer.uint32(106).fork()).ldelim();
        }
        if (message.postgresqlConfig16 !== undefined) {
            host16_1.PostgresqlHostConfig16.encode(message.postgresqlConfig16, writer.uint32(114).fork()).ldelim();
        }
        if (message.postgresqlConfig161c !== undefined) {
            host16_1c_1.Postgresqlhostconfig161c.encode(message.postgresqlConfig161c, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHostConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.postgresqlConfig96 = host9_6_1.Postgresqlhostconfig96.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.postgresqlConfig101c = host10_1c_1.Postgresqlhostconfig101c.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.postgresqlConfig10 = host10_1.PostgresqlHostConfig10.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.postgresqlConfig11 = host11_1.PostgresqlHostConfig11.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.postgresqlConfig111c = host11_1c_1.Postgresqlhostconfig111c.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.postgresqlConfig12 = host12_1.PostgresqlHostConfig12.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.postgresqlConfig121c = host12_1c_1.Postgresqlhostconfig121c.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.postgresqlConfig13 = host13_1.PostgresqlHostConfig13.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.postgresqlConfig131c = host13_1c_1.Postgresqlhostconfig131c.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.postgresqlConfig14 = host14_1.PostgresqlHostConfig14.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.postgresqlConfig141c = host14_1c_1.Postgresqlhostconfig141c.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.postgresqlConfig15 = host15_1.PostgresqlHostConfig15.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.postgresqlConfig151c = host15_1c_1.Postgresqlhostconfig151c.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.postgresqlConfig16 = host16_1.PostgresqlHostConfig16.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.postgresqlConfig161c = host16_1c_1.Postgresqlhostconfig161c.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHostConfig);
        message.postgresqlConfig96 =
            object.postgresqlHostConfig_9_6 !== undefined &&
                object.postgresqlHostConfig_9_6 !== null
                ? host9_6_1.Postgresqlhostconfig96.fromJSON(object.postgresqlHostConfig_9_6)
                : undefined;
        message.postgresqlConfig101c =
            object.postgresqlHostConfig_10_1c !== undefined &&
                object.postgresqlHostConfig_10_1c !== null
                ? host10_1c_1.Postgresqlhostconfig101c.fromJSON(object.postgresqlHostConfig_10_1c)
                : undefined;
        message.postgresqlConfig10 =
            object.postgresqlHostConfig_10 !== undefined &&
                object.postgresqlHostConfig_10 !== null
                ? host10_1.PostgresqlHostConfig10.fromJSON(object.postgresqlHostConfig_10)
                : undefined;
        message.postgresqlConfig11 =
            object.postgresqlHostConfig_11 !== undefined &&
                object.postgresqlHostConfig_11 !== null
                ? host11_1.PostgresqlHostConfig11.fromJSON(object.postgresqlHostConfig_11)
                : undefined;
        message.postgresqlConfig111c =
            object.postgresqlHostConfig_11_1c !== undefined &&
                object.postgresqlHostConfig_11_1c !== null
                ? host11_1c_1.Postgresqlhostconfig111c.fromJSON(object.postgresqlHostConfig_11_1c)
                : undefined;
        message.postgresqlConfig12 =
            object.postgresqlHostConfig_12 !== undefined &&
                object.postgresqlHostConfig_12 !== null
                ? host12_1.PostgresqlHostConfig12.fromJSON(object.postgresqlHostConfig_12)
                : undefined;
        message.postgresqlConfig121c =
            object.postgresqlHostConfig_12_1c !== undefined &&
                object.postgresqlHostConfig_12_1c !== null
                ? host12_1c_1.Postgresqlhostconfig121c.fromJSON(object.postgresqlHostConfig_12_1c)
                : undefined;
        message.postgresqlConfig13 =
            object.postgresqlHostConfig_13 !== undefined &&
                object.postgresqlHostConfig_13 !== null
                ? host13_1.PostgresqlHostConfig13.fromJSON(object.postgresqlHostConfig_13)
                : undefined;
        message.postgresqlConfig131c =
            object.postgresqlHostConfig_13_1c !== undefined &&
                object.postgresqlHostConfig_13_1c !== null
                ? host13_1c_1.Postgresqlhostconfig131c.fromJSON(object.postgresqlHostConfig_13_1c)
                : undefined;
        message.postgresqlConfig14 =
            object.postgresqlHostConfig_14 !== undefined &&
                object.postgresqlHostConfig_14 !== null
                ? host14_1.PostgresqlHostConfig14.fromJSON(object.postgresqlHostConfig_14)
                : undefined;
        message.postgresqlConfig141c =
            object.postgresqlHostConfig_14_1c !== undefined &&
                object.postgresqlHostConfig_14_1c !== null
                ? host14_1c_1.Postgresqlhostconfig141c.fromJSON(object.postgresqlHostConfig_14_1c)
                : undefined;
        message.postgresqlConfig15 =
            object.postgresqlHostConfig_15 !== undefined &&
                object.postgresqlHostConfig_15 !== null
                ? host15_1.PostgresqlHostConfig15.fromJSON(object.postgresqlHostConfig_15)
                : undefined;
        message.postgresqlConfig151c =
            object.postgresqlHostConfig_15_1c !== undefined &&
                object.postgresqlHostConfig_15_1c !== null
                ? host15_1c_1.Postgresqlhostconfig151c.fromJSON(object.postgresqlHostConfig_15_1c)
                : undefined;
        message.postgresqlConfig16 =
            object.postgresqlHostConfig_16 !== undefined &&
                object.postgresqlHostConfig_16 !== null
                ? host16_1.PostgresqlHostConfig16.fromJSON(object.postgresqlHostConfig_16)
                : undefined;
        message.postgresqlConfig161c =
            object.postgresqlHostConfig_16_1c !== undefined &&
                object.postgresqlHostConfig_16_1c !== null
                ? host16_1c_1.Postgresqlhostconfig161c.fromJSON(object.postgresqlHostConfig_16_1c)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.postgresqlConfig96 !== undefined &&
            (obj.postgresqlHostConfig_9_6 = message.postgresqlConfig96
                ? host9_6_1.Postgresqlhostconfig96.toJSON(message.postgresqlConfig96)
                : undefined);
        message.postgresqlConfig101c !== undefined &&
            (obj.postgresqlHostConfig_10_1c = message.postgresqlConfig101c
                ? host10_1c_1.Postgresqlhostconfig101c.toJSON(message.postgresqlConfig101c)
                : undefined);
        message.postgresqlConfig10 !== undefined &&
            (obj.postgresqlHostConfig_10 = message.postgresqlConfig10
                ? host10_1.PostgresqlHostConfig10.toJSON(message.postgresqlConfig10)
                : undefined);
        message.postgresqlConfig11 !== undefined &&
            (obj.postgresqlHostConfig_11 = message.postgresqlConfig11
                ? host11_1.PostgresqlHostConfig11.toJSON(message.postgresqlConfig11)
                : undefined);
        message.postgresqlConfig111c !== undefined &&
            (obj.postgresqlHostConfig_11_1c = message.postgresqlConfig111c
                ? host11_1c_1.Postgresqlhostconfig111c.toJSON(message.postgresqlConfig111c)
                : undefined);
        message.postgresqlConfig12 !== undefined &&
            (obj.postgresqlHostConfig_12 = message.postgresqlConfig12
                ? host12_1.PostgresqlHostConfig12.toJSON(message.postgresqlConfig12)
                : undefined);
        message.postgresqlConfig121c !== undefined &&
            (obj.postgresqlHostConfig_12_1c = message.postgresqlConfig121c
                ? host12_1c_1.Postgresqlhostconfig121c.toJSON(message.postgresqlConfig121c)
                : undefined);
        message.postgresqlConfig13 !== undefined &&
            (obj.postgresqlHostConfig_13 = message.postgresqlConfig13
                ? host13_1.PostgresqlHostConfig13.toJSON(message.postgresqlConfig13)
                : undefined);
        message.postgresqlConfig131c !== undefined &&
            (obj.postgresqlHostConfig_13_1c = message.postgresqlConfig131c
                ? host13_1c_1.Postgresqlhostconfig131c.toJSON(message.postgresqlConfig131c)
                : undefined);
        message.postgresqlConfig14 !== undefined &&
            (obj.postgresqlHostConfig_14 = message.postgresqlConfig14
                ? host14_1.PostgresqlHostConfig14.toJSON(message.postgresqlConfig14)
                : undefined);
        message.postgresqlConfig141c !== undefined &&
            (obj.postgresqlHostConfig_14_1c = message.postgresqlConfig141c
                ? host14_1c_1.Postgresqlhostconfig141c.toJSON(message.postgresqlConfig141c)
                : undefined);
        message.postgresqlConfig15 !== undefined &&
            (obj.postgresqlHostConfig_15 = message.postgresqlConfig15
                ? host15_1.PostgresqlHostConfig15.toJSON(message.postgresqlConfig15)
                : undefined);
        message.postgresqlConfig151c !== undefined &&
            (obj.postgresqlHostConfig_15_1c = message.postgresqlConfig151c
                ? host15_1c_1.Postgresqlhostconfig151c.toJSON(message.postgresqlConfig151c)
                : undefined);
        message.postgresqlConfig16 !== undefined &&
            (obj.postgresqlHostConfig_16 = message.postgresqlConfig16
                ? host16_1.PostgresqlHostConfig16.toJSON(message.postgresqlConfig16)
                : undefined);
        message.postgresqlConfig161c !== undefined &&
            (obj.postgresqlHostConfig_16_1c = message.postgresqlConfig161c
                ? host16_1c_1.Postgresqlhostconfig161c.toJSON(message.postgresqlConfig161c)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseHostConfig);
        message.postgresqlConfig96 =
            object.postgresqlConfig96 !== undefined &&
                object.postgresqlConfig96 !== null
                ? host9_6_1.Postgresqlhostconfig96.fromPartial(object.postgresqlConfig96)
                : undefined;
        message.postgresqlConfig101c =
            object.postgresqlConfig101c !== undefined &&
                object.postgresqlConfig101c !== null
                ? host10_1c_1.Postgresqlhostconfig101c.fromPartial(object.postgresqlConfig101c)
                : undefined;
        message.postgresqlConfig10 =
            object.postgresqlConfig10 !== undefined &&
                object.postgresqlConfig10 !== null
                ? host10_1.PostgresqlHostConfig10.fromPartial(object.postgresqlConfig10)
                : undefined;
        message.postgresqlConfig11 =
            object.postgresqlConfig11 !== undefined &&
                object.postgresqlConfig11 !== null
                ? host11_1.PostgresqlHostConfig11.fromPartial(object.postgresqlConfig11)
                : undefined;
        message.postgresqlConfig111c =
            object.postgresqlConfig111c !== undefined &&
                object.postgresqlConfig111c !== null
                ? host11_1c_1.Postgresqlhostconfig111c.fromPartial(object.postgresqlConfig111c)
                : undefined;
        message.postgresqlConfig12 =
            object.postgresqlConfig12 !== undefined &&
                object.postgresqlConfig12 !== null
                ? host12_1.PostgresqlHostConfig12.fromPartial(object.postgresqlConfig12)
                : undefined;
        message.postgresqlConfig121c =
            object.postgresqlConfig121c !== undefined &&
                object.postgresqlConfig121c !== null
                ? host12_1c_1.Postgresqlhostconfig121c.fromPartial(object.postgresqlConfig121c)
                : undefined;
        message.postgresqlConfig13 =
            object.postgresqlConfig13 !== undefined &&
                object.postgresqlConfig13 !== null
                ? host13_1.PostgresqlHostConfig13.fromPartial(object.postgresqlConfig13)
                : undefined;
        message.postgresqlConfig131c =
            object.postgresqlConfig131c !== undefined &&
                object.postgresqlConfig131c !== null
                ? host13_1c_1.Postgresqlhostconfig131c.fromPartial(object.postgresqlConfig131c)
                : undefined;
        message.postgresqlConfig14 =
            object.postgresqlConfig14 !== undefined &&
                object.postgresqlConfig14 !== null
                ? host14_1.PostgresqlHostConfig14.fromPartial(object.postgresqlConfig14)
                : undefined;
        message.postgresqlConfig141c =
            object.postgresqlConfig141c !== undefined &&
                object.postgresqlConfig141c !== null
                ? host14_1c_1.Postgresqlhostconfig141c.fromPartial(object.postgresqlConfig141c)
                : undefined;
        message.postgresqlConfig15 =
            object.postgresqlConfig15 !== undefined &&
                object.postgresqlConfig15 !== null
                ? host15_1.PostgresqlHostConfig15.fromPartial(object.postgresqlConfig15)
                : undefined;
        message.postgresqlConfig151c =
            object.postgresqlConfig151c !== undefined &&
                object.postgresqlConfig151c !== null
                ? host15_1c_1.Postgresqlhostconfig151c.fromPartial(object.postgresqlConfig151c)
                : undefined;
        message.postgresqlConfig16 =
            object.postgresqlConfig16 !== undefined &&
                object.postgresqlConfig16 !== null
                ? host16_1.PostgresqlHostConfig16.fromPartial(object.postgresqlConfig16)
                : undefined;
        message.postgresqlConfig161c =
            object.postgresqlConfig161c !== undefined &&
                object.postgresqlConfig161c !== null
                ? host16_1c_1.Postgresqlhostconfig161c.fromPartial(object.postgresqlConfig161c)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HostConfig.$type, exports.HostConfig);
const baseService = {
    $type: "yandex.cloud.mdb.postgresql.v1.Service",
    type: 0,
    health: 0,
};
exports.Service = {
    $type: "yandex.cloud.mdb.postgresql.v1.Service",
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
    $type: "yandex.cloud.mdb.postgresql.v1.Resources",
    resourcePresetId: "",
    diskSize: 0,
    diskTypeId: "",
};
exports.Resources = {
    $type: "yandex.cloud.mdb.postgresql.v1.Resources",
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
    $type: "yandex.cloud.mdb.postgresql.v1.Access",
    dataLens: false,
    webSql: false,
    serverless: false,
    dataTransfer: false,
    yandexQuery: false,
};
exports.Access = {
    $type: "yandex.cloud.mdb.postgresql.v1.Access",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataLens === true) {
            writer.uint32(8).bool(message.dataLens);
        }
        if (message.webSql === true) {
            writer.uint32(16).bool(message.webSql);
        }
        if (message.serverless === true) {
            writer.uint32(24).bool(message.serverless);
        }
        if (message.dataTransfer === true) {
            writer.uint32(32).bool(message.dataTransfer);
        }
        if (message.yandexQuery === true) {
            writer.uint32(40).bool(message.yandexQuery);
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
                    message.serverless = reader.bool();
                    break;
                case 4:
                    message.dataTransfer = reader.bool();
                    break;
                case 5:
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
        message.serverless !== undefined && (obj.serverless = message.serverless);
        message.dataTransfer !== undefined &&
            (obj.dataTransfer = message.dataTransfer);
        message.yandexQuery !== undefined &&
            (obj.yandexQuery = message.yandexQuery);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseAccess);
        message.dataLens = (_a = object.dataLens) !== null && _a !== void 0 ? _a : false;
        message.webSql = (_b = object.webSql) !== null && _b !== void 0 ? _b : false;
        message.serverless = (_c = object.serverless) !== null && _c !== void 0 ? _c : false;
        message.dataTransfer = (_d = object.dataTransfer) !== null && _d !== void 0 ? _d : false;
        message.yandexQuery = (_e = object.yandexQuery) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Access.$type, exports.Access);
const basePerformanceDiagnostics = {
    $type: "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics",
    enabled: false,
    sessionsSamplingInterval: 0,
    statementsSamplingInterval: 0,
};
exports.PerformanceDiagnostics = {
    $type: "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.sessionsSamplingInterval !== 0) {
            writer.uint32(16).int64(message.sessionsSamplingInterval);
        }
        if (message.statementsSamplingInterval !== 0) {
            writer.uint32(24).int64(message.statementsSamplingInterval);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePerformanceDiagnostics);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.sessionsSamplingInterval = longToNumber(reader.int64());
                    break;
                case 3:
                    message.statementsSamplingInterval = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePerformanceDiagnostics);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.sessionsSamplingInterval =
            object.sessionsSamplingInterval !== undefined &&
                object.sessionsSamplingInterval !== null
                ? Number(object.sessionsSamplingInterval)
                : 0;
        message.statementsSamplingInterval =
            object.statementsSamplingInterval !== undefined &&
                object.statementsSamplingInterval !== null
                ? Number(object.statementsSamplingInterval)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.sessionsSamplingInterval !== undefined &&
            (obj.sessionsSamplingInterval = Math.round(message.sessionsSamplingInterval));
        message.statementsSamplingInterval !== undefined &&
            (obj.statementsSamplingInterval = Math.round(message.statementsSamplingInterval));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, basePerformanceDiagnostics);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.sessionsSamplingInterval = (_b = object.sessionsSamplingInterval) !== null && _b !== void 0 ? _b : 0;
        message.statementsSamplingInterval = (_c = object.statementsSamplingInterval) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PerformanceDiagnostics.$type, exports.PerformanceDiagnostics);
const baseDiskSizeAutoscaling = {
    $type: "yandex.cloud.mdb.postgresql.v1.DiskSizeAutoscaling",
    plannedUsageThreshold: 0,
    emergencyUsageThreshold: 0,
    diskSizeLimit: 0,
};
exports.DiskSizeAutoscaling = {
    $type: "yandex.cloud.mdb.postgresql.v1.DiskSizeAutoscaling",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.plannedUsageThreshold !== 0) {
            writer.uint32(8).int64(message.plannedUsageThreshold);
        }
        if (message.emergencyUsageThreshold !== 0) {
            writer.uint32(16).int64(message.emergencyUsageThreshold);
        }
        if (message.diskSizeLimit !== 0) {
            writer.uint32(24).int64(message.diskSizeLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDiskSizeAutoscaling);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plannedUsageThreshold = longToNumber(reader.int64());
                    break;
                case 2:
                    message.emergencyUsageThreshold = longToNumber(reader.int64());
                    break;
                case 3:
                    message.diskSizeLimit = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDiskSizeAutoscaling);
        message.plannedUsageThreshold =
            object.plannedUsageThreshold !== undefined &&
                object.plannedUsageThreshold !== null
                ? Number(object.plannedUsageThreshold)
                : 0;
        message.emergencyUsageThreshold =
            object.emergencyUsageThreshold !== undefined &&
                object.emergencyUsageThreshold !== null
                ? Number(object.emergencyUsageThreshold)
                : 0;
        message.diskSizeLimit =
            object.diskSizeLimit !== undefined && object.diskSizeLimit !== null
                ? Number(object.diskSizeLimit)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.plannedUsageThreshold !== undefined &&
            (obj.plannedUsageThreshold = Math.round(message.plannedUsageThreshold));
        message.emergencyUsageThreshold !== undefined &&
            (obj.emergencyUsageThreshold = Math.round(message.emergencyUsageThreshold));
        message.diskSizeLimit !== undefined &&
            (obj.diskSizeLimit = Math.round(message.diskSizeLimit));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseDiskSizeAutoscaling);
        message.plannedUsageThreshold = (_a = object.plannedUsageThreshold) !== null && _a !== void 0 ? _a : 0;
        message.emergencyUsageThreshold = (_b = object.emergencyUsageThreshold) !== null && _b !== void 0 ? _b : 0;
        message.diskSizeLimit = (_c = object.diskSizeLimit) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DiskSizeAutoscaling.$type, exports.DiskSizeAutoscaling);
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
