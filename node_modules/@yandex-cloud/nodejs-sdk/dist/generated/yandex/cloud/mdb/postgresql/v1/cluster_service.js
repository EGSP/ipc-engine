"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddClusterHostsMetadata = exports.AddClusterHostsRequest = exports.ListClusterHostsResponse = exports.ListClusterHostsRequest = exports.ListClusterBackupsResponse = exports.ListClusterBackupsRequest = exports.ListClusterOperationsResponse = exports.ListClusterOperationsRequest = exports.StreamClusterLogsRequest = exports.StreamLogRecord = exports.ListClusterLogsResponse = exports.ListClusterLogsRequest = exports.LogRecord_MessageEntry = exports.LogRecord = exports.RescheduleMaintenanceMetadata = exports.RescheduleMaintenanceRequest = exports.StartClusterFailoverMetadata = exports.StartClusterFailoverRequest = exports.RestoreClusterMetadata = exports.RestoreClusterRequest_LabelsEntry = exports.RestoreClusterRequest = exports.BackupClusterMetadata = exports.BackupClusterRequest = exports.MoveClusterMetadata = exports.MoveClusterRequest = exports.StopClusterMetadata = exports.StopClusterRequest = exports.StartClusterMetadata = exports.StartClusterRequest = exports.DeleteClusterMetadata = exports.DeleteClusterRequest = exports.UpdateClusterMetadata = exports.UpdateClusterRequest_LabelsEntry = exports.UpdateClusterRequest = exports.CreateClusterMetadata = exports.CreateClusterRequest_LabelsEntry = exports.CreateClusterRequest = exports.ListClustersResponse = exports.ListClustersRequest = exports.GetClusterRequest = exports.streamClusterLogsRequest_ServiceTypeToJSON = exports.streamClusterLogsRequest_ServiceTypeFromJSON = exports.StreamClusterLogsRequest_ServiceType = exports.listClusterLogsRequest_ServiceTypeToJSON = exports.listClusterLogsRequest_ServiceTypeFromJSON = exports.ListClusterLogsRequest_ServiceType = exports.rescheduleMaintenanceRequest_RescheduleTypeToJSON = exports.rescheduleMaintenanceRequest_RescheduleTypeFromJSON = exports.RescheduleMaintenanceRequest_RescheduleType = exports.protobufPackage = void 0;
exports.ClusterServiceClient = exports.ClusterServiceService = exports.ConfigHostSpec = exports.ConfigSpec = exports.HostSpec = exports.UpdateHostSpec = exports.UpdateClusterHostsMetadata = exports.UpdateClusterHostsRequest = exports.DeleteClusterHostsMetadata = exports.DeleteClusterHostsRequest = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cluster_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/cluster");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const maintenance_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/maintenance");
const timeofday_1 = require("../../../../../google/type/timeofday");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const database_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/database");
const user_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/user");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const backup_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/backup");
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
var RescheduleMaintenanceRequest_RescheduleType;
(function (RescheduleMaintenanceRequest_RescheduleType) {
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["RESCHEDULE_TYPE_UNSPECIFIED"] = 0] = "RESCHEDULE_TYPE_UNSPECIFIED";
    /** IMMEDIATE - Start the maintenance operation immediately. */
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["IMMEDIATE"] = 1] = "IMMEDIATE";
    /** NEXT_AVAILABLE_WINDOW - Start the maintenance operation within the next available maintenance window. */
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["NEXT_AVAILABLE_WINDOW"] = 2] = "NEXT_AVAILABLE_WINDOW";
    /** SPECIFIC_TIME - Start the maintenance operation at the specific time. */
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["SPECIFIC_TIME"] = 3] = "SPECIFIC_TIME";
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RescheduleMaintenanceRequest_RescheduleType = exports.RescheduleMaintenanceRequest_RescheduleType || (exports.RescheduleMaintenanceRequest_RescheduleType = {}));
function rescheduleMaintenanceRequest_RescheduleTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RESCHEDULE_TYPE_UNSPECIFIED":
            return RescheduleMaintenanceRequest_RescheduleType.RESCHEDULE_TYPE_UNSPECIFIED;
        case 1:
        case "IMMEDIATE":
            return RescheduleMaintenanceRequest_RescheduleType.IMMEDIATE;
        case 2:
        case "NEXT_AVAILABLE_WINDOW":
            return RescheduleMaintenanceRequest_RescheduleType.NEXT_AVAILABLE_WINDOW;
        case 3:
        case "SPECIFIC_TIME":
            return RescheduleMaintenanceRequest_RescheduleType.SPECIFIC_TIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RescheduleMaintenanceRequest_RescheduleType.UNRECOGNIZED;
    }
}
exports.rescheduleMaintenanceRequest_RescheduleTypeFromJSON = rescheduleMaintenanceRequest_RescheduleTypeFromJSON;
function rescheduleMaintenanceRequest_RescheduleTypeToJSON(object) {
    switch (object) {
        case RescheduleMaintenanceRequest_RescheduleType.RESCHEDULE_TYPE_UNSPECIFIED:
            return "RESCHEDULE_TYPE_UNSPECIFIED";
        case RescheduleMaintenanceRequest_RescheduleType.IMMEDIATE:
            return "IMMEDIATE";
        case RescheduleMaintenanceRequest_RescheduleType.NEXT_AVAILABLE_WINDOW:
            return "NEXT_AVAILABLE_WINDOW";
        case RescheduleMaintenanceRequest_RescheduleType.SPECIFIC_TIME:
            return "SPECIFIC_TIME";
        default:
            return "UNKNOWN";
    }
}
exports.rescheduleMaintenanceRequest_RescheduleTypeToJSON = rescheduleMaintenanceRequest_RescheduleTypeToJSON;
var ListClusterLogsRequest_ServiceType;
(function (ListClusterLogsRequest_ServiceType) {
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["SERVICE_TYPE_UNSPECIFIED"] = 0] = "SERVICE_TYPE_UNSPECIFIED";
    /** POSTGRESQL - Logs of PostgreSQL activity. */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["POSTGRESQL"] = 1] = "POSTGRESQL";
    /** POOLER - Logs of connection pooler activity. */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["POOLER"] = 2] = "POOLER";
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ListClusterLogsRequest_ServiceType = exports.ListClusterLogsRequest_ServiceType || (exports.ListClusterLogsRequest_ServiceType = {}));
function listClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "POSTGRESQL":
            return ListClusterLogsRequest_ServiceType.POSTGRESQL;
        case 2:
        case "POOLER":
            return ListClusterLogsRequest_ServiceType.POOLER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ListClusterLogsRequest_ServiceType.UNRECOGNIZED;
    }
}
exports.listClusterLogsRequest_ServiceTypeFromJSON = listClusterLogsRequest_ServiceTypeFromJSON;
function listClusterLogsRequest_ServiceTypeToJSON(object) {
    switch (object) {
        case ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
            return "SERVICE_TYPE_UNSPECIFIED";
        case ListClusterLogsRequest_ServiceType.POSTGRESQL:
            return "POSTGRESQL";
        case ListClusterLogsRequest_ServiceType.POOLER:
            return "POOLER";
        default:
            return "UNKNOWN";
    }
}
exports.listClusterLogsRequest_ServiceTypeToJSON = listClusterLogsRequest_ServiceTypeToJSON;
var StreamClusterLogsRequest_ServiceType;
(function (StreamClusterLogsRequest_ServiceType) {
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["SERVICE_TYPE_UNSPECIFIED"] = 0] = "SERVICE_TYPE_UNSPECIFIED";
    /** POSTGRESQL - Logs of PostgreSQL activity. */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["POSTGRESQL"] = 1] = "POSTGRESQL";
    /** POOLER - Logs of connection pooler activity. */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["POOLER"] = 2] = "POOLER";
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamClusterLogsRequest_ServiceType = exports.StreamClusterLogsRequest_ServiceType || (exports.StreamClusterLogsRequest_ServiceType = {}));
function streamClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "POSTGRESQL":
            return StreamClusterLogsRequest_ServiceType.POSTGRESQL;
        case 2:
        case "POOLER":
            return StreamClusterLogsRequest_ServiceType.POOLER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StreamClusterLogsRequest_ServiceType.UNRECOGNIZED;
    }
}
exports.streamClusterLogsRequest_ServiceTypeFromJSON = streamClusterLogsRequest_ServiceTypeFromJSON;
function streamClusterLogsRequest_ServiceTypeToJSON(object) {
    switch (object) {
        case StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
            return "SERVICE_TYPE_UNSPECIFIED";
        case StreamClusterLogsRequest_ServiceType.POSTGRESQL:
            return "POSTGRESQL";
        case StreamClusterLogsRequest_ServiceType.POOLER:
            return "POOLER";
        default:
            return "UNKNOWN";
    }
}
exports.streamClusterLogsRequest_ServiceTypeToJSON = streamClusterLogsRequest_ServiceTypeToJSON;
const baseGetClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.GetClusterRequest",
    clusterId: "",
};
exports.GetClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.GetClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseGetClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetClusterRequest.$type, exports.GetClusterRequest);
const baseListClustersRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListClustersRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClustersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClustersRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListClustersRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListClustersRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClustersRequest.$type, exports.ListClustersRequest);
const baseListClustersResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClustersResponse",
    nextPageToken: "",
};
exports.ListClustersResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClustersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.clusters) {
            cluster_1.Cluster.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClustersResponse);
        message.clusters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusters.push(cluster_1.Cluster.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListClustersResponse);
        message.clusters = ((_a = object.clusters) !== null && _a !== void 0 ? _a : []).map((e) => cluster_1.Cluster.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.clusters) {
            obj.clusters = message.clusters.map((e) => e ? cluster_1.Cluster.toJSON(e) : undefined);
        }
        else {
            obj.clusters = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClustersResponse);
        message.clusters =
            ((_a = object.clusters) === null || _a === void 0 ? void 0 : _a.map((e) => cluster_1.Cluster.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClustersResponse.$type, exports.ListClustersResponse);
const baseCreateClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    securityGroupIds: "",
    deletionProtection: false,
    hostGroupIds: "",
};
exports.CreateClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateClusterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(40).int32(message.environment);
        }
        if (message.configSpec !== undefined) {
            exports.ConfigSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.databaseSpecs) {
            database_1.DatabaseSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.userSpecs) {
            user_1.UserSpec.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.hostSpecs) {
            exports.HostSpec.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkId !== "") {
            writer.uint32(82).string(message.networkId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(106).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateClusterRequest);
        message.labels = {};
        message.databaseSpecs = [];
        message.userSpecs = [];
        message.hostSpecs = [];
        message.securityGroupIds = [];
        message.hostGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.environment = reader.int32();
                    break;
                case 6:
                    message.configSpec = exports.ConfigSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.databaseSpecs.push(database_1.DatabaseSpec.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.userSpecs.push(user_1.UserSpec.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.hostSpecs.push(exports.HostSpec.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.networkId = reader.string();
                    break;
                case 11:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 12:
                    message.deletionProtection = reader.bool();
                    break;
                case 13:
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
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateClusterRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
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
                ? (0, cluster_1.cluster_EnvironmentFromJSON)(object.environment)
                : 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.databaseSpecs = ((_b = object.databaseSpecs) !== null && _b !== void 0 ? _b : []).map((e) => database_1.DatabaseSpec.fromJSON(e));
        message.userSpecs = ((_c = object.userSpecs) !== null && _c !== void 0 ? _c : []).map((e) => user_1.UserSpec.fromJSON(e));
        message.hostSpecs = ((_d = object.hostSpecs) !== null && _d !== void 0 ? _d : []).map((e) => exports.HostSpec.fromJSON(e));
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.securityGroupIds = ((_e = object.securityGroupIds) !== null && _e !== void 0 ? _e : []).map((e) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.hostGroupIds = ((_f = object.hostGroupIds) !== null && _f !== void 0 ? _f : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
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
            (obj.environment = (0, cluster_1.cluster_EnvironmentToJSON)(message.environment));
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ConfigSpec.toJSON(message.configSpec)
                : undefined);
        if (message.databaseSpecs) {
            obj.databaseSpecs = message.databaseSpecs.map((e) => e ? database_1.DatabaseSpec.toJSON(e) : undefined);
        }
        else {
            obj.databaseSpecs = [];
        }
        if (message.userSpecs) {
            obj.userSpecs = message.userSpecs.map((e) => e ? user_1.UserSpec.toJSON(e) : undefined);
        }
        else {
            obj.userSpecs = [];
        }
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) => e ? exports.HostSpec.toJSON(e) : undefined);
        }
        else {
            obj.hostSpecs = [];
        }
        message.networkId !== undefined && (obj.networkId = message.networkId);
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = Object.assign({}, baseCreateClusterRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.environment = (_e = object.environment) !== null && _e !== void 0 ? _e : 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.databaseSpecs =
            ((_f = object.databaseSpecs) === null || _f === void 0 ? void 0 : _f.map((e) => database_1.DatabaseSpec.fromPartial(e))) || [];
        message.userSpecs =
            ((_g = object.userSpecs) === null || _g === void 0 ? void 0 : _g.map((e) => user_1.UserSpec.fromPartial(e))) || [];
        message.hostSpecs =
            ((_h = object.hostSpecs) === null || _h === void 0 ? void 0 : _h.map((e) => exports.HostSpec.fromPartial(e))) || [];
        message.networkId = (_j = object.networkId) !== null && _j !== void 0 ? _j : "";
        message.securityGroupIds = ((_k = object.securityGroupIds) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.deletionProtection = (_l = object.deletionProtection) !== null && _l !== void 0 ? _l : false;
        message.hostGroupIds = ((_m = object.hostGroupIds) === null || _m === void 0 ? void 0 : _m.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterRequest.$type, exports.CreateClusterRequest);
const baseCreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateClusterRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterRequest_LabelsEntry.$type, exports.CreateClusterRequest_LabelsEntry);
const baseCreateClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata",
    clusterId: "",
};
exports.CreateClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseCreateClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterMetadata.$type, exports.CreateClusterMetadata);
const baseUpdateClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest",
    clusterId: "",
    description: "",
    name: "",
    securityGroupIds: "",
    deletionProtection: false,
};
exports.UpdateClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateClusterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.configSpec !== undefined) {
            exports.ConfigSpec.encode(message.configSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(50).string(message.name);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterRequest);
        message.labels = {};
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.UpdateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.configSpec = exports.ConfigSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 9:
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
        var _a, _b;
        const message = Object.assign({}, baseUpdateClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
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
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseUpdateClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.labels = Object.entries((_c = object.labels) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.securityGroupIds = ((_e = object.securityGroupIds) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.deletionProtection = (_f = object.deletionProtection) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterRequest.$type, exports.UpdateClusterRequest);
const baseUpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateClusterRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterRequest_LabelsEntry.$type, exports.UpdateClusterRequest_LabelsEntry);
const baseUpdateClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata",
    clusterId: "",
};
exports.UpdateClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseUpdateClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterMetadata.$type, exports.UpdateClusterMetadata);
const baseDeleteClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest",
    clusterId: "",
};
exports.DeleteClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseDeleteClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterRequest.$type, exports.DeleteClusterRequest);
const baseDeleteClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata",
    clusterId: "",
};
exports.DeleteClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseDeleteClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterMetadata.$type, exports.DeleteClusterMetadata);
const baseStartClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.StartClusterRequest",
    clusterId: "",
};
exports.StartClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.StartClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseStartClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartClusterRequest.$type, exports.StartClusterRequest);
const baseStartClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.StartClusterMetadata",
    clusterId: "",
};
exports.StartClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.StartClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseStartClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartClusterMetadata.$type, exports.StartClusterMetadata);
const baseStopClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.StopClusterRequest",
    clusterId: "",
};
exports.StopClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.StopClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseStopClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopClusterRequest.$type, exports.StopClusterRequest);
const baseStopClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.StopClusterMetadata",
    clusterId: "",
};
exports.StopClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.StopClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseStopClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopClusterMetadata.$type, exports.StopClusterMetadata);
const baseMoveClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterRequest",
    clusterId: "",
    destinationFolderId: "",
};
exports.MoveClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.destinationFolderId =
            object.destinationFolderId !== undefined &&
                object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMoveClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.destinationFolderId = (_b = object.destinationFolderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveClusterRequest.$type, exports.MoveClusterRequest);
const baseMoveClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata",
    clusterId: "",
    sourceFolderId: "",
    destinationFolderId: "",
};
exports.MoveClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.sourceFolderId !== "") {
            writer.uint32(18).string(message.sourceFolderId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(26).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.sourceFolderId = reader.string();
                    break;
                case 3:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.sourceFolderId =
            object.sourceFolderId !== undefined && object.sourceFolderId !== null
                ? String(object.sourceFolderId)
                : "";
        message.destinationFolderId =
            object.destinationFolderId !== undefined &&
                object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.sourceFolderId !== undefined &&
            (obj.sourceFolderId = message.sourceFolderId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMoveClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.sourceFolderId = (_b = object.sourceFolderId) !== null && _b !== void 0 ? _b : "";
        message.destinationFolderId = (_c = object.destinationFolderId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveClusterMetadata.$type, exports.MoveClusterMetadata);
const baseBackupClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterRequest",
    clusterId: "",
};
exports.BackupClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackupClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseBackupClusterRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseBackupClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupClusterRequest.$type, exports.BackupClusterRequest);
const baseBackupClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata",
    clusterId: "",
    backupId: "",
};
exports.BackupClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.backupId !== "") {
            writer.uint32(18).string(message.backupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackupClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.backupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackupClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseBackupClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.backupId = (_b = object.backupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupClusterMetadata.$type, exports.BackupClusterMetadata);
const baseRestoreClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest",
    backupId: "",
    timeInclusive: false,
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    folderId: "",
    securityGroupIds: "",
    deletionProtection: false,
    hostGroupIds: "",
};
exports.RestoreClusterRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (message.timeInclusive === true) {
            writer.uint32(24).bool(message.timeInclusive);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.RestoreClusterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(56).int32(message.environment);
        }
        if (message.configSpec !== undefined) {
            exports.ConfigSpec.encode(message.configSpec, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.hostSpecs) {
            exports.HostSpec.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkId !== "") {
            writer.uint32(82).string(message.networkId);
        }
        if (message.folderId !== "") {
            writer.uint32(90).string(message.folderId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(98).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(104).bool(message.deletionProtection);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(114).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.labels = {};
        message.hostSpecs = [];
        message.securityGroupIds = [];
        message.hostGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.timeInclusive = reader.bool();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.RestoreClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.environment = reader.int32();
                    break;
                case 8:
                    message.configSpec = exports.ConfigSpec.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.hostSpecs.push(exports.HostSpec.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.networkId = reader.string();
                    break;
                case 11:
                    message.folderId = reader.string();
                    break;
                case 12:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 13:
                    message.deletionProtection = reader.bool();
                    break;
                case 14:
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
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        message.time =
            object.time !== undefined && object.time !== null
                ? fromJsonTimestamp(object.time)
                : undefined;
        message.timeInclusive =
            object.timeInclusive !== undefined && object.timeInclusive !== null
                ? Boolean(object.timeInclusive)
                : false;
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
                ? (0, cluster_1.cluster_EnvironmentFromJSON)(object.environment)
                : 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.hostSpecs = ((_b = object.hostSpecs) !== null && _b !== void 0 ? _b : []).map((e) => exports.HostSpec.fromJSON(e));
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
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
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.timeInclusive !== undefined &&
            (obj.timeInclusive = message.timeInclusive);
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
            (obj.environment = (0, cluster_1.cluster_EnvironmentToJSON)(message.environment));
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ConfigSpec.toJSON(message.configSpec)
                : undefined);
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) => e ? exports.HostSpec.toJSON(e) : undefined);
        }
        else {
            obj.hostSpecs = [];
        }
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : undefined;
        message.timeInclusive = (_c = object.timeInclusive) !== null && _c !== void 0 ? _c : false;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.environment = (_g = object.environment) !== null && _g !== void 0 ? _g : 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.hostSpecs =
            ((_h = object.hostSpecs) === null || _h === void 0 ? void 0 : _h.map((e) => exports.HostSpec.fromPartial(e))) || [];
        message.networkId = (_j = object.networkId) !== null && _j !== void 0 ? _j : "";
        message.folderId = (_k = object.folderId) !== null && _k !== void 0 ? _k : "";
        message.securityGroupIds = ((_l = object.securityGroupIds) === null || _l === void 0 ? void 0 : _l.map((e) => e)) || [];
        message.deletionProtection = (_m = object.deletionProtection) !== null && _m !== void 0 ? _m : false;
        message.hostGroupIds = ((_o = object.hostGroupIds) === null || _o === void 0 ? void 0 : _o.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreClusterRequest.$type, exports.RestoreClusterRequest);
const baseRestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.RestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.LabelsEntry",
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
        const message = Object.assign({}, baseRestoreClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseRestoreClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseRestoreClusterRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreClusterRequest_LabelsEntry.$type, exports.RestoreClusterRequest_LabelsEntry);
const baseRestoreClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata",
    clusterId: "",
    backupId: "",
};
exports.RestoreClusterMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.backupId !== "") {
            writer.uint32(18).string(message.backupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.backupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestoreClusterMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRestoreClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.backupId = (_b = object.backupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreClusterMetadata.$type, exports.RestoreClusterMetadata);
const baseStartClusterFailoverRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest",
    clusterId: "",
    hostName: "",
};
exports.StartClusterFailoverRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.hostName !== "") {
            writer.uint32(18).string(message.hostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartClusterFailoverRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hostName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartClusterFailoverRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.hostName =
            object.hostName !== undefined && object.hostName !== null
                ? String(object.hostName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.hostName !== undefined && (obj.hostName = message.hostName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseStartClusterFailoverRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostName = (_b = object.hostName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartClusterFailoverRequest.$type, exports.StartClusterFailoverRequest);
const baseStartClusterFailoverMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata",
    clusterId: "",
};
exports.StartClusterFailoverMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartClusterFailoverMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseStartClusterFailoverMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartClusterFailoverMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartClusterFailoverMetadata.$type, exports.StartClusterFailoverMetadata);
const baseRescheduleMaintenanceRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest",
    clusterId: "",
    rescheduleType: 0,
};
exports.RescheduleMaintenanceRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.rescheduleType !== 0) {
            writer.uint32(16).int32(message.rescheduleType);
        }
        if (message.delayedUntil !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRescheduleMaintenanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.rescheduleType = reader.int32();
                    break;
                case 3:
                    message.delayedUntil = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRescheduleMaintenanceRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.rescheduleType =
            object.rescheduleType !== undefined && object.rescheduleType !== null
                ? rescheduleMaintenanceRequest_RescheduleTypeFromJSON(object.rescheduleType)
                : 0;
        message.delayedUntil =
            object.delayedUntil !== undefined && object.delayedUntil !== null
                ? fromJsonTimestamp(object.delayedUntil)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.rescheduleType !== undefined &&
            (obj.rescheduleType = rescheduleMaintenanceRequest_RescheduleTypeToJSON(message.rescheduleType));
        message.delayedUntil !== undefined &&
            (obj.delayedUntil = message.delayedUntil.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRescheduleMaintenanceRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.rescheduleType = (_b = object.rescheduleType) !== null && _b !== void 0 ? _b : 0;
        message.delayedUntil = (_c = object.delayedUntil) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RescheduleMaintenanceRequest.$type, exports.RescheduleMaintenanceRequest);
const baseRescheduleMaintenanceMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata",
    clusterId: "",
};
exports.RescheduleMaintenanceMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.delayedUntil !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRescheduleMaintenanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 4:
                    message.delayedUntil = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRescheduleMaintenanceMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.delayedUntil =
            object.delayedUntil !== undefined && object.delayedUntil !== null
                ? fromJsonTimestamp(object.delayedUntil)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.delayedUntil !== undefined &&
            (obj.delayedUntil = message.delayedUntil.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRescheduleMaintenanceMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.delayedUntil = (_b = object.delayedUntil) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RescheduleMaintenanceMetadata.$type, exports.RescheduleMaintenanceMetadata);
const baseLogRecord = {
    $type: "yandex.cloud.mdb.postgresql.v1.LogRecord",
};
exports.LogRecord = {
    $type: "yandex.cloud.mdb.postgresql.v1.LogRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.message).forEach(([key, value]) => {
            exports.LogRecord_MessageEntry.encode({
                $type: "yandex.cloud.mdb.postgresql.v1.LogRecord.MessageEntry",
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLogRecord);
        message.message = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    const entry2 = exports.LogRecord_MessageEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.message[entry2.key] = entry2.value;
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
        const message = Object.assign({}, baseLogRecord);
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? fromJsonTimestamp(object.timestamp)
                : undefined;
        message.message = Object.entries((_a = object.message) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        obj.message = {};
        if (message.message) {
            Object.entries(message.message).forEach(([k, v]) => {
                obj.message[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLogRecord);
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : undefined;
        message.message = Object.entries((_b = object.message) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogRecord.$type, exports.LogRecord);
const baseLogRecord_MessageEntry = {
    $type: "yandex.cloud.mdb.postgresql.v1.LogRecord.MessageEntry",
    key: "",
    value: "",
};
exports.LogRecord_MessageEntry = {
    $type: "yandex.cloud.mdb.postgresql.v1.LogRecord.MessageEntry",
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
        const message = Object.assign({}, baseLogRecord_MessageEntry);
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
        const message = Object.assign({}, baseLogRecord_MessageEntry);
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
        const message = Object.assign({}, baseLogRecord_MessageEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogRecord_MessageEntry.$type, exports.LogRecord_MessageEntry);
const baseListClusterLogsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    serviceType: 0,
    pageSize: 0,
    pageToken: "",
    alwaysNextPageToken: false,
};
exports.ListClusterLogsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.columnFilter) {
            writer.uint32(18).string(v);
        }
        if (message.serviceType !== 0) {
            writer.uint32(24).int32(message.serviceType);
        }
        if (message.fromTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.toTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.toTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.pageSize !== 0) {
            writer.uint32(48).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(58).string(message.pageToken);
        }
        if (message.alwaysNextPageToken === true) {
            writer.uint32(64).bool(message.alwaysNextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterLogsRequest);
        message.columnFilter = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.columnFilter.push(reader.string());
                    break;
                case 3:
                    message.serviceType = reader.int32();
                    break;
                case 4:
                    message.fromTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.toTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 7:
                    message.pageToken = reader.string();
                    break;
                case 8:
                    message.alwaysNextPageToken = reader.bool();
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
        const message = Object.assign({}, baseListClusterLogsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.columnFilter = ((_a = object.columnFilter) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.serviceType =
            object.serviceType !== undefined && object.serviceType !== null
                ? listClusterLogsRequest_ServiceTypeFromJSON(object.serviceType)
                : 0;
        message.fromTime =
            object.fromTime !== undefined && object.fromTime !== null
                ? fromJsonTimestamp(object.fromTime)
                : undefined;
        message.toTime =
            object.toTime !== undefined && object.toTime !== null
                ? fromJsonTimestamp(object.toTime)
                : undefined;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.alwaysNextPageToken =
            object.alwaysNextPageToken !== undefined &&
                object.alwaysNextPageToken !== null
                ? Boolean(object.alwaysNextPageToken)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.columnFilter) {
            obj.columnFilter = message.columnFilter.map((e) => e);
        }
        else {
            obj.columnFilter = [];
        }
        message.serviceType !== undefined &&
            (obj.serviceType = listClusterLogsRequest_ServiceTypeToJSON(message.serviceType));
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.alwaysNextPageToken !== undefined &&
            (obj.alwaysNextPageToken = message.alwaysNextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseListClusterLogsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.columnFilter = ((_b = object.columnFilter) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.serviceType = (_c = object.serviceType) !== null && _c !== void 0 ? _c : 0;
        message.fromTime = (_d = object.fromTime) !== null && _d !== void 0 ? _d : undefined;
        message.toTime = (_e = object.toTime) !== null && _e !== void 0 ? _e : undefined;
        message.pageSize = (_f = object.pageSize) !== null && _f !== void 0 ? _f : 0;
        message.pageToken = (_g = object.pageToken) !== null && _g !== void 0 ? _g : "";
        message.alwaysNextPageToken = (_h = object.alwaysNextPageToken) !== null && _h !== void 0 ? _h : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterLogsRequest.$type, exports.ListClusterLogsRequest);
const baseListClusterLogsResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse",
    nextPageToken: "",
};
exports.ListClusterLogsResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.logs) {
            exports.LogRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterLogsResponse);
        message.logs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logs.push(exports.LogRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListClusterLogsResponse);
        message.logs = ((_a = object.logs) !== null && _a !== void 0 ? _a : []).map((e) => exports.LogRecord.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.logs) {
            obj.logs = message.logs.map((e) => (e ? exports.LogRecord.toJSON(e) : undefined));
        }
        else {
            obj.logs = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClusterLogsResponse);
        message.logs = ((_a = object.logs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.LogRecord.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterLogsResponse.$type, exports.ListClusterLogsResponse);
const baseStreamLogRecord = {
    $type: "yandex.cloud.mdb.postgresql.v1.StreamLogRecord",
    nextRecordToken: "",
};
exports.StreamLogRecord = {
    $type: "yandex.cloud.mdb.postgresql.v1.StreamLogRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.record !== undefined) {
            exports.LogRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextRecordToken !== "") {
            writer.uint32(18).string(message.nextRecordToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamLogRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.record = exports.LogRecord.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nextRecordToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStreamLogRecord);
        message.record =
            object.record !== undefined && object.record !== null
                ? exports.LogRecord.fromJSON(object.record)
                : undefined;
        message.nextRecordToken =
            object.nextRecordToken !== undefined && object.nextRecordToken !== null
                ? String(object.nextRecordToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.record !== undefined &&
            (obj.record = message.record
                ? exports.LogRecord.toJSON(message.record)
                : undefined);
        message.nextRecordToken !== undefined &&
            (obj.nextRecordToken = message.nextRecordToken);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStreamLogRecord);
        message.record =
            object.record !== undefined && object.record !== null
                ? exports.LogRecord.fromPartial(object.record)
                : undefined;
        message.nextRecordToken = (_a = object.nextRecordToken) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamLogRecord.$type, exports.StreamLogRecord);
const baseStreamClusterLogsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    serviceType: 0,
    recordToken: "",
    filter: "",
};
exports.StreamClusterLogsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.columnFilter) {
            writer.uint32(18).string(v);
        }
        if (message.serviceType !== 0) {
            writer.uint32(24).int32(message.serviceType);
        }
        if (message.fromTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.toTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.toTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.recordToken !== "") {
            writer.uint32(50).string(message.recordToken);
        }
        if (message.filter !== "") {
            writer.uint32(58).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamClusterLogsRequest);
        message.columnFilter = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.columnFilter.push(reader.string());
                    break;
                case 3:
                    message.serviceType = reader.int32();
                    break;
                case 4:
                    message.fromTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.toTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.recordToken = reader.string();
                    break;
                case 7:
                    message.filter = reader.string();
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
        const message = Object.assign({}, baseStreamClusterLogsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.columnFilter = ((_a = object.columnFilter) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.serviceType =
            object.serviceType !== undefined && object.serviceType !== null
                ? streamClusterLogsRequest_ServiceTypeFromJSON(object.serviceType)
                : 0;
        message.fromTime =
            object.fromTime !== undefined && object.fromTime !== null
                ? fromJsonTimestamp(object.fromTime)
                : undefined;
        message.toTime =
            object.toTime !== undefined && object.toTime !== null
                ? fromJsonTimestamp(object.toTime)
                : undefined;
        message.recordToken =
            object.recordToken !== undefined && object.recordToken !== null
                ? String(object.recordToken)
                : "";
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.columnFilter) {
            obj.columnFilter = message.columnFilter.map((e) => e);
        }
        else {
            obj.columnFilter = [];
        }
        message.serviceType !== undefined &&
            (obj.serviceType = streamClusterLogsRequest_ServiceTypeToJSON(message.serviceType));
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
        message.recordToken !== undefined &&
            (obj.recordToken = message.recordToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseStreamClusterLogsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.columnFilter = ((_b = object.columnFilter) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.serviceType = (_c = object.serviceType) !== null && _c !== void 0 ? _c : 0;
        message.fromTime = (_d = object.fromTime) !== null && _d !== void 0 ? _d : undefined;
        message.toTime = (_e = object.toTime) !== null && _e !== void 0 ? _e : undefined;
        message.recordToken = (_f = object.recordToken) !== null && _f !== void 0 ? _f : "";
        message.filter = (_g = object.filter) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamClusterLogsRequest.$type, exports.StreamClusterLogsRequest);
const baseListClusterOperationsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterOperationsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListClusterOperationsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListClusterOperationsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterOperationsRequest.$type, exports.ListClusterOperationsRequest);
const baseListClusterOperationsResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse",
    nextPageToken: "",
};
exports.ListClusterOperationsResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterOperationsResponse);
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListClusterOperationsResponse);
        message.operations = ((_a = object.operations) !== null && _a !== void 0 ? _a : []).map((e) => operation_1.Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClusterOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterOperationsResponse.$type, exports.ListClusterOperationsResponse);
const baseListClusterBackupsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterBackupsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterBackupsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListClusterBackupsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListClusterBackupsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterBackupsRequest.$type, exports.ListClusterBackupsRequest);
const baseListClusterBackupsResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse",
    nextPageToken: "",
};
exports.ListClusterBackupsResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backups) {
            backup_1.Backup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterBackupsResponse);
        message.backups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backups.push(backup_1.Backup.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListClusterBackupsResponse);
        message.backups = ((_a = object.backups) !== null && _a !== void 0 ? _a : []).map((e) => backup_1.Backup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backups) {
            obj.backups = message.backups.map((e) => e ? backup_1.Backup.toJSON(e) : undefined);
        }
        else {
            obj.backups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClusterBackupsResponse);
        message.backups = ((_a = object.backups) === null || _a === void 0 ? void 0 : _a.map((e) => backup_1.Backup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterBackupsResponse.$type, exports.ListClusterBackupsResponse);
const baseListClusterHostsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterHostsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterHostsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListClusterHostsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListClusterHostsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterHostsRequest.$type, exports.ListClusterHostsRequest);
const baseListClusterHostsResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse",
    nextPageToken: "",
};
exports.ListClusterHostsResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hosts) {
            cluster_1.Host.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterHostsResponse);
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(cluster_1.Host.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListClusterHostsResponse);
        message.hosts = ((_a = object.hosts) !== null && _a !== void 0 ? _a : []).map((e) => cluster_1.Host.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? cluster_1.Host.toJSON(e) : undefined));
        }
        else {
            obj.hosts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClusterHostsResponse);
        message.hosts = ((_a = object.hosts) === null || _a === void 0 ? void 0 : _a.map((e) => cluster_1.Host.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterHostsResponse.$type, exports.ListClusterHostsResponse);
const baseAddClusterHostsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest",
    clusterId: "",
};
exports.AddClusterHostsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostSpecs) {
            exports.HostSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddClusterHostsRequest);
        message.hostSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hostSpecs.push(exports.HostSpec.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseAddClusterHostsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.hostSpecs = ((_a = object.hostSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.HostSpec.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) => e ? exports.HostSpec.toJSON(e) : undefined);
        }
        else {
            obj.hostSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddClusterHostsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostSpecs =
            ((_b = object.hostSpecs) === null || _b === void 0 ? void 0 : _b.map((e) => exports.HostSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddClusterHostsRequest.$type, exports.AddClusterHostsRequest);
const baseAddClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.AddClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddClusterHostsMetadata);
        message.hostNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hostNames.push(reader.string());
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
        const message = Object.assign({}, baseAddClusterHostsMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.hostNames = ((_a = object.hostNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        }
        else {
            obj.hostNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddClusterHostsMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostNames = ((_b = object.hostNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddClusterHostsMetadata.$type, exports.AddClusterHostsMetadata);
const baseDeleteClusterHostsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest",
    clusterId: "",
    hostNames: "",
};
exports.DeleteClusterHostsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterHostsRequest);
        message.hostNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hostNames.push(reader.string());
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
        const message = Object.assign({}, baseDeleteClusterHostsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.hostNames = ((_a = object.hostNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        }
        else {
            obj.hostNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteClusterHostsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostNames = ((_b = object.hostNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterHostsRequest.$type, exports.DeleteClusterHostsRequest);
const baseDeleteClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.DeleteClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterHostsMetadata);
        message.hostNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hostNames.push(reader.string());
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
        const message = Object.assign({}, baseDeleteClusterHostsMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.hostNames = ((_a = object.hostNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        }
        else {
            obj.hostNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteClusterHostsMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostNames = ((_b = object.hostNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterHostsMetadata.$type, exports.DeleteClusterHostsMetadata);
const baseUpdateClusterHostsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest",
    clusterId: "",
};
exports.UpdateClusterHostsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.updateHostSpecs) {
            exports.UpdateHostSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterHostsRequest);
        message.updateHostSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.updateHostSpecs.push(exports.UpdateHostSpec.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateClusterHostsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.updateHostSpecs = ((_a = object.updateHostSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.UpdateHostSpec.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.updateHostSpecs) {
            obj.updateHostSpecs = message.updateHostSpecs.map((e) => e ? exports.UpdateHostSpec.toJSON(e) : undefined);
        }
        else {
            obj.updateHostSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateClusterHostsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.updateHostSpecs =
            ((_b = object.updateHostSpecs) === null || _b === void 0 ? void 0 : _b.map((e) => exports.UpdateHostSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterHostsRequest.$type, exports.UpdateClusterHostsRequest);
const baseUpdateClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.UpdateClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterHostsMetadata);
        message.hostNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hostNames.push(reader.string());
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
        const message = Object.assign({}, baseUpdateClusterHostsMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.hostNames = ((_a = object.hostNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        }
        else {
            obj.hostNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateClusterHostsMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostNames = ((_b = object.hostNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterHostsMetadata.$type, exports.UpdateClusterHostsMetadata);
const baseUpdateHostSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateHostSpec",
    hostName: "",
    replicationSource: "",
    assignPublicIp: false,
};
exports.UpdateHostSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.UpdateHostSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostName !== "") {
            writer.uint32(10).string(message.hostName);
        }
        if (message.replicationSource !== "") {
            writer.uint32(18).string(message.replicationSource);
        }
        if (message.priority !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.priority }, writer.uint32(26).fork()).ldelim();
        }
        if (message.configSpec !== undefined) {
            exports.ConfigHostSpec.encode(message.configSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(42).fork()).ldelim();
        }
        if (message.assignPublicIp === true) {
            writer.uint32(48).bool(message.assignPublicIp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateHostSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostName = reader.string();
                    break;
                case 2:
                    message.replicationSource = reader.string();
                    break;
                case 3:
                    message.priority = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.configSpec = exports.ConfigHostSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateHostSpec);
        message.hostName =
            object.hostName !== undefined && object.hostName !== null
                ? String(object.hostName)
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
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigHostSpec.fromJSON(object.configSpec)
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostName !== undefined && (obj.hostName = message.hostName);
        message.replicationSource !== undefined &&
            (obj.replicationSource = message.replicationSource);
        message.priority !== undefined && (obj.priority = message.priority);
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ConfigHostSpec.toJSON(message.configSpec)
                : undefined);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateHostSpec);
        message.hostName = (_a = object.hostName) !== null && _a !== void 0 ? _a : "";
        message.replicationSource = (_b = object.replicationSource) !== null && _b !== void 0 ? _b : "";
        message.priority = (_c = object.priority) !== null && _c !== void 0 ? _c : undefined;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigHostSpec.fromPartial(object.configSpec)
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.assignPublicIp = (_d = object.assignPublicIp) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateHostSpec.$type, exports.UpdateHostSpec);
const baseHostSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.HostSpec",
    zoneId: "",
    subnetId: "",
    assignPublicIp: false,
    replicationSource: "",
};
exports.HostSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.HostSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== "") {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.subnetId !== "") {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(24).bool(message.assignPublicIp);
        }
        if (message.replicationSource !== "") {
            writer.uint32(34).string(message.replicationSource);
        }
        if (message.priority !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.priority }, writer.uint32(42).fork()).ldelim();
        }
        if (message.configSpec !== undefined) {
            exports.ConfigHostSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHostSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.assignPublicIp = reader.bool();
                    break;
                case 4:
                    message.replicationSource = reader.string();
                    break;
                case 5:
                    message.priority = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.configSpec = exports.ConfigHostSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHostSpec);
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
        message.replicationSource =
            object.replicationSource !== undefined &&
                object.replicationSource !== null
                ? String(object.replicationSource)
                : "";
        message.priority =
            object.priority !== undefined && object.priority !== null
                ? Number(object.priority)
                : undefined;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigHostSpec.fromJSON(object.configSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.replicationSource !== undefined &&
            (obj.replicationSource = message.replicationSource);
        message.priority !== undefined && (obj.priority = message.priority);
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ConfigHostSpec.toJSON(message.configSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseHostSpec);
        message.zoneId = (_a = object.zoneId) !== null && _a !== void 0 ? _a : "";
        message.subnetId = (_b = object.subnetId) !== null && _b !== void 0 ? _b : "";
        message.assignPublicIp = (_c = object.assignPublicIp) !== null && _c !== void 0 ? _c : false;
        message.replicationSource = (_d = object.replicationSource) !== null && _d !== void 0 ? _d : "";
        message.priority = (_e = object.priority) !== null && _e !== void 0 ? _e : undefined;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigHostSpec.fromPartial(object.configSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HostSpec.$type, exports.HostSpec);
const baseConfigSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.ConfigSpec",
    version: "",
};
exports.ConfigSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.ConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.postgresqlConfig96 !== undefined) {
            postgresql9_6_1.Postgresqlconfig96.encode(message.postgresqlConfig96, writer.uint32(18).fork()).ldelim();
        }
        if (message.postgresqlConfig101c !== undefined) {
            postgresql10_1c_1.Postgresqlconfig101c.encode(message.postgresqlConfig101c, writer.uint32(82).fork()).ldelim();
        }
        if (message.postgresqlConfig10 !== undefined) {
            postgresql10_1.PostgresqlConfig10.encode(message.postgresqlConfig10, writer.uint32(26).fork()).ldelim();
        }
        if (message.postgresqlConfig11 !== undefined) {
            postgresql11_1.PostgresqlConfig11.encode(message.postgresqlConfig11, writer.uint32(58).fork()).ldelim();
        }
        if (message.postgresqlConfig111c !== undefined) {
            postgresql11_1c_1.Postgresqlconfig111c.encode(message.postgresqlConfig111c, writer.uint32(106).fork()).ldelim();
        }
        if (message.postgresqlConfig12 !== undefined) {
            postgresql12_1.PostgresqlConfig12.encode(message.postgresqlConfig12, writer.uint32(90).fork()).ldelim();
        }
        if (message.postgresqlConfig121c !== undefined) {
            postgresql12_1c_1.Postgresqlconfig121c.encode(message.postgresqlConfig121c, writer.uint32(114).fork()).ldelim();
        }
        if (message.postgresqlConfig13 !== undefined) {
            postgresql13_1.PostgresqlConfig13.encode(message.postgresqlConfig13, writer.uint32(122).fork()).ldelim();
        }
        if (message.postgresqlConfig131c !== undefined) {
            postgresql13_1c_1.Postgresqlconfig131c.encode(message.postgresqlConfig131c, writer.uint32(146).fork()).ldelim();
        }
        if (message.postgresqlConfig14 !== undefined) {
            postgresql14_1.PostgresqlConfig14.encode(message.postgresqlConfig14, writer.uint32(130).fork()).ldelim();
        }
        if (message.postgresqlConfig141c !== undefined) {
            postgresql14_1c_1.Postgresqlconfig141c.encode(message.postgresqlConfig141c, writer.uint32(154).fork()).ldelim();
        }
        if (message.postgresqlConfig15 !== undefined) {
            postgresql15_1.PostgresqlConfig15.encode(message.postgresqlConfig15, writer.uint32(170).fork()).ldelim();
        }
        if (message.postgresqlConfig151c !== undefined) {
            postgresql15_1c_1.Postgresqlconfig151c.encode(message.postgresqlConfig151c, writer.uint32(178).fork()).ldelim();
        }
        if (message.postgresqlConfig16 !== undefined) {
            postgresql16_1.PostgresqlConfig16.encode(message.postgresqlConfig16, writer.uint32(194).fork()).ldelim();
        }
        if (message.postgresqlConfig161c !== undefined) {
            postgresql16_1c_1.Postgresqlconfig161c.encode(message.postgresqlConfig161c, writer.uint32(202).fork()).ldelim();
        }
        if (message.poolerConfig !== undefined) {
            cluster_1.ConnectionPoolerConfig.encode(message.poolerConfig, writer.uint32(34).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
        }
        if (message.autofailover !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.autofailover }, writer.uint32(50).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            timeofday_1.TimeOfDay.encode(message.backupWindowStart, writer.uint32(66).fork()).ldelim();
        }
        if (message.backupRetainPeriodDays !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.backupRetainPeriodDays,
            }, writer.uint32(138).fork()).ldelim();
        }
        if (message.access !== undefined) {
            cluster_1.Access.encode(message.access, writer.uint32(74).fork()).ldelim();
        }
        if (message.performanceDiagnostics !== undefined) {
            cluster_1.PerformanceDiagnostics.encode(message.performanceDiagnostics, writer.uint32(98).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            cluster_1.DiskSizeAutoscaling.encode(message.diskSizeAutoscaling, writer.uint32(186).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConfigSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.postgresqlConfig96 = postgresql9_6_1.Postgresqlconfig96.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.postgresqlConfig101c = postgresql10_1c_1.Postgresqlconfig101c.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.postgresqlConfig10 = postgresql10_1.PostgresqlConfig10.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.postgresqlConfig11 = postgresql11_1.PostgresqlConfig11.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.postgresqlConfig111c = postgresql11_1c_1.Postgresqlconfig111c.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.postgresqlConfig12 = postgresql12_1.PostgresqlConfig12.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.postgresqlConfig121c = postgresql12_1c_1.Postgresqlconfig121c.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.postgresqlConfig13 = postgresql13_1.PostgresqlConfig13.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.postgresqlConfig131c = postgresql13_1c_1.Postgresqlconfig131c.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.postgresqlConfig14 = postgresql14_1.PostgresqlConfig14.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.postgresqlConfig141c = postgresql14_1c_1.Postgresqlconfig141c.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.postgresqlConfig15 = postgresql15_1.PostgresqlConfig15.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.postgresqlConfig151c = postgresql15_1c_1.Postgresqlconfig151c.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.postgresqlConfig16 = postgresql16_1.PostgresqlConfig16.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.postgresqlConfig161c = postgresql16_1c_1.Postgresqlconfig161c.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.poolerConfig = cluster_1.ConnectionPoolerConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.resources = cluster_1.Resources.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.autofailover = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.backupWindowStart = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.backupRetainPeriodDays = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.access = cluster_1.Access.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.performanceDiagnostics = cluster_1.PerformanceDiagnostics.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.diskSizeAutoscaling = cluster_1.DiskSizeAutoscaling.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConfigSpec);
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.postgresqlConfig96 =
            object.postgresqlConfig_9_6 !== undefined &&
                object.postgresqlConfig_9_6 !== null
                ? postgresql9_6_1.Postgresqlconfig96.fromJSON(object.postgresqlConfig_9_6)
                : undefined;
        message.postgresqlConfig101c =
            object.postgresqlConfig_10_1c !== undefined &&
                object.postgresqlConfig_10_1c !== null
                ? postgresql10_1c_1.Postgresqlconfig101c.fromJSON(object.postgresqlConfig_10_1c)
                : undefined;
        message.postgresqlConfig10 =
            object.postgresqlConfig_10 !== undefined &&
                object.postgresqlConfig_10 !== null
                ? postgresql10_1.PostgresqlConfig10.fromJSON(object.postgresqlConfig_10)
                : undefined;
        message.postgresqlConfig11 =
            object.postgresqlConfig_11 !== undefined &&
                object.postgresqlConfig_11 !== null
                ? postgresql11_1.PostgresqlConfig11.fromJSON(object.postgresqlConfig_11)
                : undefined;
        message.postgresqlConfig111c =
            object.postgresqlConfig_11_1c !== undefined &&
                object.postgresqlConfig_11_1c !== null
                ? postgresql11_1c_1.Postgresqlconfig111c.fromJSON(object.postgresqlConfig_11_1c)
                : undefined;
        message.postgresqlConfig12 =
            object.postgresqlConfig_12 !== undefined &&
                object.postgresqlConfig_12 !== null
                ? postgresql12_1.PostgresqlConfig12.fromJSON(object.postgresqlConfig_12)
                : undefined;
        message.postgresqlConfig121c =
            object.postgresqlConfig_12_1c !== undefined &&
                object.postgresqlConfig_12_1c !== null
                ? postgresql12_1c_1.Postgresqlconfig121c.fromJSON(object.postgresqlConfig_12_1c)
                : undefined;
        message.postgresqlConfig13 =
            object.postgresqlConfig_13 !== undefined &&
                object.postgresqlConfig_13 !== null
                ? postgresql13_1.PostgresqlConfig13.fromJSON(object.postgresqlConfig_13)
                : undefined;
        message.postgresqlConfig131c =
            object.postgresqlConfig_13_1c !== undefined &&
                object.postgresqlConfig_13_1c !== null
                ? postgresql13_1c_1.Postgresqlconfig131c.fromJSON(object.postgresqlConfig_13_1c)
                : undefined;
        message.postgresqlConfig14 =
            object.postgresqlConfig_14 !== undefined &&
                object.postgresqlConfig_14 !== null
                ? postgresql14_1.PostgresqlConfig14.fromJSON(object.postgresqlConfig_14)
                : undefined;
        message.postgresqlConfig141c =
            object.postgresqlConfig_14_1c !== undefined &&
                object.postgresqlConfig_14_1c !== null
                ? postgresql14_1c_1.Postgresqlconfig141c.fromJSON(object.postgresqlConfig_14_1c)
                : undefined;
        message.postgresqlConfig15 =
            object.postgresqlConfig_15 !== undefined &&
                object.postgresqlConfig_15 !== null
                ? postgresql15_1.PostgresqlConfig15.fromJSON(object.postgresqlConfig_15)
                : undefined;
        message.postgresqlConfig151c =
            object.postgresqlConfig_15_1c !== undefined &&
                object.postgresqlConfig_15_1c !== null
                ? postgresql15_1c_1.Postgresqlconfig151c.fromJSON(object.postgresqlConfig_15_1c)
                : undefined;
        message.postgresqlConfig16 =
            object.postgresqlConfig_16 !== undefined &&
                object.postgresqlConfig_16 !== null
                ? postgresql16_1.PostgresqlConfig16.fromJSON(object.postgresqlConfig_16)
                : undefined;
        message.postgresqlConfig161c =
            object.postgresqlConfig_16_1c !== undefined &&
                object.postgresqlConfig_16_1c !== null
                ? postgresql16_1c_1.Postgresqlconfig161c.fromJSON(object.postgresqlConfig_16_1c)
                : undefined;
        message.poolerConfig =
            object.poolerConfig !== undefined && object.poolerConfig !== null
                ? cluster_1.ConnectionPoolerConfig.fromJSON(object.poolerConfig)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
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
                ? cluster_1.Access.fromJSON(object.access)
                : undefined;
        message.performanceDiagnostics =
            object.performanceDiagnostics !== undefined &&
                object.performanceDiagnostics !== null
                ? cluster_1.PerformanceDiagnostics.fromJSON(object.performanceDiagnostics)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined &&
                object.diskSizeAutoscaling !== null
                ? cluster_1.DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.postgresqlConfig96 !== undefined &&
            (obj.postgresqlConfig_9_6 = message.postgresqlConfig96
                ? postgresql9_6_1.Postgresqlconfig96.toJSON(message.postgresqlConfig96)
                : undefined);
        message.postgresqlConfig101c !== undefined &&
            (obj.postgresqlConfig_10_1c = message.postgresqlConfig101c
                ? postgresql10_1c_1.Postgresqlconfig101c.toJSON(message.postgresqlConfig101c)
                : undefined);
        message.postgresqlConfig10 !== undefined &&
            (obj.postgresqlConfig_10 = message.postgresqlConfig10
                ? postgresql10_1.PostgresqlConfig10.toJSON(message.postgresqlConfig10)
                : undefined);
        message.postgresqlConfig11 !== undefined &&
            (obj.postgresqlConfig_11 = message.postgresqlConfig11
                ? postgresql11_1.PostgresqlConfig11.toJSON(message.postgresqlConfig11)
                : undefined);
        message.postgresqlConfig111c !== undefined &&
            (obj.postgresqlConfig_11_1c = message.postgresqlConfig111c
                ? postgresql11_1c_1.Postgresqlconfig111c.toJSON(message.postgresqlConfig111c)
                : undefined);
        message.postgresqlConfig12 !== undefined &&
            (obj.postgresqlConfig_12 = message.postgresqlConfig12
                ? postgresql12_1.PostgresqlConfig12.toJSON(message.postgresqlConfig12)
                : undefined);
        message.postgresqlConfig121c !== undefined &&
            (obj.postgresqlConfig_12_1c = message.postgresqlConfig121c
                ? postgresql12_1c_1.Postgresqlconfig121c.toJSON(message.postgresqlConfig121c)
                : undefined);
        message.postgresqlConfig13 !== undefined &&
            (obj.postgresqlConfig_13 = message.postgresqlConfig13
                ? postgresql13_1.PostgresqlConfig13.toJSON(message.postgresqlConfig13)
                : undefined);
        message.postgresqlConfig131c !== undefined &&
            (obj.postgresqlConfig_13_1c = message.postgresqlConfig131c
                ? postgresql13_1c_1.Postgresqlconfig131c.toJSON(message.postgresqlConfig131c)
                : undefined);
        message.postgresqlConfig14 !== undefined &&
            (obj.postgresqlConfig_14 = message.postgresqlConfig14
                ? postgresql14_1.PostgresqlConfig14.toJSON(message.postgresqlConfig14)
                : undefined);
        message.postgresqlConfig141c !== undefined &&
            (obj.postgresqlConfig_14_1c = message.postgresqlConfig141c
                ? postgresql14_1c_1.Postgresqlconfig141c.toJSON(message.postgresqlConfig141c)
                : undefined);
        message.postgresqlConfig15 !== undefined &&
            (obj.postgresqlConfig_15 = message.postgresqlConfig15
                ? postgresql15_1.PostgresqlConfig15.toJSON(message.postgresqlConfig15)
                : undefined);
        message.postgresqlConfig151c !== undefined &&
            (obj.postgresqlConfig_15_1c = message.postgresqlConfig151c
                ? postgresql15_1c_1.Postgresqlconfig151c.toJSON(message.postgresqlConfig151c)
                : undefined);
        message.postgresqlConfig16 !== undefined &&
            (obj.postgresqlConfig_16 = message.postgresqlConfig16
                ? postgresql16_1.PostgresqlConfig16.toJSON(message.postgresqlConfig16)
                : undefined);
        message.postgresqlConfig161c !== undefined &&
            (obj.postgresqlConfig_16_1c = message.postgresqlConfig161c
                ? postgresql16_1c_1.Postgresqlconfig161c.toJSON(message.postgresqlConfig161c)
                : undefined);
        message.poolerConfig !== undefined &&
            (obj.poolerConfig = message.poolerConfig
                ? cluster_1.ConnectionPoolerConfig.toJSON(message.poolerConfig)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
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
            (obj.access = message.access ? cluster_1.Access.toJSON(message.access) : undefined);
        message.performanceDiagnostics !== undefined &&
            (obj.performanceDiagnostics = message.performanceDiagnostics
                ? cluster_1.PerformanceDiagnostics.toJSON(message.performanceDiagnostics)
                : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? cluster_1.DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseConfigSpec);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.postgresqlConfig96 =
            object.postgresqlConfig96 !== undefined &&
                object.postgresqlConfig96 !== null
                ? postgresql9_6_1.Postgresqlconfig96.fromPartial(object.postgresqlConfig96)
                : undefined;
        message.postgresqlConfig101c =
            object.postgresqlConfig101c !== undefined &&
                object.postgresqlConfig101c !== null
                ? postgresql10_1c_1.Postgresqlconfig101c.fromPartial(object.postgresqlConfig101c)
                : undefined;
        message.postgresqlConfig10 =
            object.postgresqlConfig10 !== undefined &&
                object.postgresqlConfig10 !== null
                ? postgresql10_1.PostgresqlConfig10.fromPartial(object.postgresqlConfig10)
                : undefined;
        message.postgresqlConfig11 =
            object.postgresqlConfig11 !== undefined &&
                object.postgresqlConfig11 !== null
                ? postgresql11_1.PostgresqlConfig11.fromPartial(object.postgresqlConfig11)
                : undefined;
        message.postgresqlConfig111c =
            object.postgresqlConfig111c !== undefined &&
                object.postgresqlConfig111c !== null
                ? postgresql11_1c_1.Postgresqlconfig111c.fromPartial(object.postgresqlConfig111c)
                : undefined;
        message.postgresqlConfig12 =
            object.postgresqlConfig12 !== undefined &&
                object.postgresqlConfig12 !== null
                ? postgresql12_1.PostgresqlConfig12.fromPartial(object.postgresqlConfig12)
                : undefined;
        message.postgresqlConfig121c =
            object.postgresqlConfig121c !== undefined &&
                object.postgresqlConfig121c !== null
                ? postgresql12_1c_1.Postgresqlconfig121c.fromPartial(object.postgresqlConfig121c)
                : undefined;
        message.postgresqlConfig13 =
            object.postgresqlConfig13 !== undefined &&
                object.postgresqlConfig13 !== null
                ? postgresql13_1.PostgresqlConfig13.fromPartial(object.postgresqlConfig13)
                : undefined;
        message.postgresqlConfig131c =
            object.postgresqlConfig131c !== undefined &&
                object.postgresqlConfig131c !== null
                ? postgresql13_1c_1.Postgresqlconfig131c.fromPartial(object.postgresqlConfig131c)
                : undefined;
        message.postgresqlConfig14 =
            object.postgresqlConfig14 !== undefined &&
                object.postgresqlConfig14 !== null
                ? postgresql14_1.PostgresqlConfig14.fromPartial(object.postgresqlConfig14)
                : undefined;
        message.postgresqlConfig141c =
            object.postgresqlConfig141c !== undefined &&
                object.postgresqlConfig141c !== null
                ? postgresql14_1c_1.Postgresqlconfig141c.fromPartial(object.postgresqlConfig141c)
                : undefined;
        message.postgresqlConfig15 =
            object.postgresqlConfig15 !== undefined &&
                object.postgresqlConfig15 !== null
                ? postgresql15_1.PostgresqlConfig15.fromPartial(object.postgresqlConfig15)
                : undefined;
        message.postgresqlConfig151c =
            object.postgresqlConfig151c !== undefined &&
                object.postgresqlConfig151c !== null
                ? postgresql15_1c_1.Postgresqlconfig151c.fromPartial(object.postgresqlConfig151c)
                : undefined;
        message.postgresqlConfig16 =
            object.postgresqlConfig16 !== undefined &&
                object.postgresqlConfig16 !== null
                ? postgresql16_1.PostgresqlConfig16.fromPartial(object.postgresqlConfig16)
                : undefined;
        message.postgresqlConfig161c =
            object.postgresqlConfig161c !== undefined &&
                object.postgresqlConfig161c !== null
                ? postgresql16_1c_1.Postgresqlconfig161c.fromPartial(object.postgresqlConfig161c)
                : undefined;
        message.poolerConfig =
            object.poolerConfig !== undefined && object.poolerConfig !== null
                ? cluster_1.ConnectionPoolerConfig.fromPartial(object.poolerConfig)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
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
                ? cluster_1.Access.fromPartial(object.access)
                : undefined;
        message.performanceDiagnostics =
            object.performanceDiagnostics !== undefined &&
                object.performanceDiagnostics !== null
                ? cluster_1.PerformanceDiagnostics.fromPartial(object.performanceDiagnostics)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined &&
                object.diskSizeAutoscaling !== null
                ? cluster_1.DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpec.$type, exports.ConfigSpec);
const baseConfigHostSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.ConfigHostSpec",
};
exports.ConfigHostSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.ConfigHostSpec",
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
        const message = Object.assign({}, baseConfigHostSpec);
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
        const message = Object.assign({}, baseConfigHostSpec);
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
        const message = Object.assign({}, baseConfigHostSpec);
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
typeRegistry_1.messageTypeRegistry.set(exports.ConfigHostSpec.$type, exports.ConfigHostSpec);
/** A set of methods for managing PostgreSQL Cluster resources. */
exports.ClusterServiceService = {
    /**
     * Returns the specified PostgreSQL Cluster resource.
     *
     * To get the list of available PostgreSQL Cluster resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
    /**
     * Retrieves the list of PostgreSQL Cluster resources that belong
     * to the specified folder.
     */
    list: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClustersResponse.decode(value),
    },
    /** Creates a PostgreSQL cluster in the specified folder. */
    create: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified PostgreSQL cluster. */
    update: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified PostgreSQL cluster. */
    delete: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Start the specified PostgreSQL cluster. */
    start: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stop the specified PostgreSQL cluster. */
    stop: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Moves the specified PostgreSQL cluster to the specified folder. */
    move: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a backup for the specified PostgreSQL cluster. */
    backup: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Backup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.BackupClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.BackupClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a new PostgreSQL cluster using the specified backup. */
    restore: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Restore",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestoreClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestoreClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/RescheduleMaintenance",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RescheduleMaintenanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RescheduleMaintenanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Start a manual failover on the specified PostgreSQL cluster. */
    startFailover: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/StartFailover",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartClusterFailoverRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartClusterFailoverRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves logs for the specified PostgreSQL cluster. */
    listLogs: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListLogs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterLogsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterLogsResponse.decode(value),
    },
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/StreamLogs",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.StreamClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StreamClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.StreamLogRecord.encode(value).finish()),
        responseDeserialize: (value) => exports.StreamLogRecord.decode(value),
    },
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves the list of available backups for the specified PostgreSQL cluster. */
    listBackups: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListBackups",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterBackupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterBackupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterBackupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterBackupsResponse.decode(value),
    },
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterHostsResponse.decode(value),
    },
    /** Creates new hosts for a cluster. */
    addHosts: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/AddHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/DeleteHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified hosts. */
    updateHosts: {
        path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/UpdateHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ClusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ClusterServiceService, "yandex.cloud.mdb.postgresql.v1.ClusterService");
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
