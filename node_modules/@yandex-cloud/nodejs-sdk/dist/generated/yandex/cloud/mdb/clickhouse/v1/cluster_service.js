"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddClusterHostsMetadata = exports.AddClusterHostsRequest = exports.ListClusterHostsResponse = exports.ListClusterHostsRequest = exports.ListClusterBackupsResponse = exports.ListClusterBackupsRequest = exports.ListClusterOperationsResponse = exports.ListClusterOperationsRequest = exports.StreamClusterLogsRequest = exports.StreamLogRecord = exports.ListClusterLogsResponse = exports.ListClusterLogsRequest = exports.LogRecord_MessageEntry = exports.LogRecord = exports.RescheduleMaintenanceMetadata = exports.RescheduleMaintenanceRequest = exports.RestoreClusterMetadata = exports.RestoreClusterRequest_LabelsEntry = exports.RestoreClusterRequest = exports.BackupClusterMetadata = exports.BackupClusterRequest = exports.AddClusterZookeeperMetadata = exports.AddClusterZookeeperRequest = exports.MoveClusterMetadata = exports.MoveClusterRequest = exports.StopClusterMetadata = exports.StopClusterRequest = exports.StartClusterMetadata = exports.StartClusterRequest = exports.DeleteClusterMetadata = exports.DeleteClusterRequest = exports.UpdateClusterMetadata = exports.UpdateClusterRequest_LabelsEntry = exports.UpdateClusterRequest = exports.CreateClusterMetadata = exports.CreateClusterRequest_LabelsEntry = exports.CreateClusterRequest = exports.ListClustersResponse = exports.ListClustersRequest = exports.GetClusterRequest = exports.streamClusterLogsRequest_ServiceTypeToJSON = exports.streamClusterLogsRequest_ServiceTypeFromJSON = exports.StreamClusterLogsRequest_ServiceType = exports.listClusterLogsRequest_ServiceTypeToJSON = exports.listClusterLogsRequest_ServiceTypeFromJSON = exports.ListClusterLogsRequest_ServiceType = exports.rescheduleMaintenanceRequest_RescheduleTypeToJSON = exports.rescheduleMaintenanceRequest_RescheduleTypeFromJSON = exports.RescheduleMaintenanceRequest_RescheduleType = exports.protobufPackage = void 0;
exports.ClusterServiceClient = exports.ClusterServiceService = exports.ShardConfigSpec_Clickhouse = exports.ShardConfigSpec = exports.ConfigSpec_Zookeeper = exports.ConfigSpec_Clickhouse = exports.ConfigSpec = exports.HostSpec = exports.DeleteClusterExternalDictionaryMetadata = exports.DeleteClusterExternalDictionaryRequest = exports.UpdateClusterExternalDictionaryMetadata = exports.UpdateClusterExternalDictionaryRequest = exports.CreateClusterExternalDictionaryMetadata = exports.CreateClusterExternalDictionaryRequest = exports.ListClusterExternalDictionariesResponse = exports.ListClusterExternalDictionariesRequest = exports.DeleteClusterShardGroupMetadata = exports.DeleteClusterShardGroupRequest = exports.UpdateClusterShardGroupMetadata = exports.UpdateClusterShardGroupRequest = exports.CreateClusterShardGroupMetadata = exports.CreateClusterShardGroupRequest = exports.ListClusterShardGroupsResponse = exports.ListClusterShardGroupsRequest = exports.GetClusterShardGroupRequest = exports.DeleteClusterShardMetadata = exports.DeleteClusterShardRequest = exports.UpdateClusterShardMetadata = exports.UpdateClusterShardRequest = exports.AddClusterShardMetadata = exports.AddClusterShardRequest = exports.ListClusterShardsResponse = exports.ListClusterShardsRequest = exports.GetClusterShardRequest = exports.DeleteClusterHostsMetadata = exports.DeleteClusterHostsRequest = exports.UpdateClusterHostsMetadata = exports.UpdateClusterHostsRequest = exports.UpdateHostSpec = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cluster_1 = require("../../../../../yandex/cloud/mdb/clickhouse/v1/cluster");
const maintenance_1 = require("../../../../../yandex/cloud/mdb/clickhouse/v1/maintenance");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const clickhouse_1 = require("../../../../../yandex/cloud/mdb/clickhouse/v1/config/clickhouse");
const timeofday_1 = require("../../../../../google/type/timeofday");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const database_1 = require("../../../../../yandex/cloud/mdb/clickhouse/v1/database");
const user_1 = require("../../../../../yandex/cloud/mdb/clickhouse/v1/user");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const backup_1 = require("../../../../../yandex/cloud/mdb/clickhouse/v1/backup");
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
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
    /** CLICKHOUSE - Logs of ClickHouse activity. */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["CLICKHOUSE"] = 1] = "CLICKHOUSE";
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ListClusterLogsRequest_ServiceType = exports.ListClusterLogsRequest_ServiceType || (exports.ListClusterLogsRequest_ServiceType = {}));
function listClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "CLICKHOUSE":
            return ListClusterLogsRequest_ServiceType.CLICKHOUSE;
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
        case ListClusterLogsRequest_ServiceType.CLICKHOUSE:
            return "CLICKHOUSE";
        default:
            return "UNKNOWN";
    }
}
exports.listClusterLogsRequest_ServiceTypeToJSON = listClusterLogsRequest_ServiceTypeToJSON;
var StreamClusterLogsRequest_ServiceType;
(function (StreamClusterLogsRequest_ServiceType) {
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["SERVICE_TYPE_UNSPECIFIED"] = 0] = "SERVICE_TYPE_UNSPECIFIED";
    /** CLICKHOUSE - Logs of ClickHouse activity. */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["CLICKHOUSE"] = 1] = "CLICKHOUSE";
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamClusterLogsRequest_ServiceType = exports.StreamClusterLogsRequest_ServiceType || (exports.StreamClusterLogsRequest_ServiceType = {}));
function streamClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "CLICKHOUSE":
            return StreamClusterLogsRequest_ServiceType.CLICKHOUSE;
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
        case StreamClusterLogsRequest_ServiceType.CLICKHOUSE:
            return "CLICKHOUSE";
        default:
            return "UNKNOWN";
    }
}
exports.streamClusterLogsRequest_ServiceTypeToJSON = streamClusterLogsRequest_ServiceTypeToJSON;
const baseGetClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterRequest",
    clusterId: "",
};
exports.GetClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListClustersRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersResponse",
    nextPageToken: "",
};
exports.ListClustersResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersResponse",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    shardName: "",
    serviceAccountId: "",
    securityGroupIds: "",
    deletionProtection: false,
};
exports.CreateClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest",
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
                $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest.LabelsEntry",
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
        if (message.shardName !== "") {
            writer.uint32(90).string(message.shardName);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(98).string(message.serviceAccountId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(106).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(112).bool(message.deletionProtection);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(122).fork()).ldelim();
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
                    message.shardName = reader.string();
                    break;
                case 12:
                    message.serviceAccountId = reader.string();
                    break;
                case 13:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 14:
                    message.deletionProtection = reader.bool();
                    break;
                case 15:
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
        var _a, _b, _c, _d, _e;
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
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.securityGroupIds = ((_e = object.securityGroupIds) !== null && _e !== void 0 ? _e : []).map((e) => String(e));
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
        message.shardName !== undefined && (obj.shardName = message.shardName);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
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
        message.shardName = (_k = object.shardName) !== null && _k !== void 0 ? _k : "";
        message.serviceAccountId = (_l = object.serviceAccountId) !== null && _l !== void 0 ? _l : "";
        message.securityGroupIds = ((_m = object.securityGroupIds) === null || _m === void 0 ? void 0 : _m.map((e) => e)) || [];
        message.deletionProtection = (_o = object.deletionProtection) !== null && _o !== void 0 ? _o : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterRequest.$type, exports.CreateClusterRequest);
const baseCreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterMetadata",
    clusterId: "",
};
exports.CreateClusterMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterMetadata",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest",
    clusterId: "",
    description: "",
    name: "",
    serviceAccountId: "",
    securityGroupIds: "",
    deletionProtection: false,
};
exports.UpdateClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest",
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
                $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest.LabelsEntry",
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
        if (message.serviceAccountId !== "") {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(74).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(80).bool(message.deletionProtection);
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
                    message.serviceAccountId = reader.string();
                    break;
                case 8:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 10:
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
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
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
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
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
        var _a, _b, _c, _d, _e, _f, _g;
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
        message.serviceAccountId = (_e = object.serviceAccountId) !== null && _e !== void 0 ? _e : "";
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.securityGroupIds = ((_f = object.securityGroupIds) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterRequest.$type, exports.UpdateClusterRequest);
const baseUpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterMetadata",
    clusterId: "",
};
exports.UpdateClusterMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterMetadata",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterRequest",
    clusterId: "",
};
exports.DeleteClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterMetadata",
    clusterId: "",
};
exports.DeleteClusterMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterMetadata",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterRequest",
    clusterId: "",
};
exports.StartClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterMetadata",
    clusterId: "",
};
exports.StartClusterMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterMetadata",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterRequest",
    clusterId: "",
};
exports.StopClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterMetadata",
    clusterId: "",
};
exports.StopClusterMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterMetadata",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterRequest",
    clusterId: "",
    destinationFolderId: "",
};
exports.MoveClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterMetadata",
    clusterId: "",
    sourceFolderId: "",
    destinationFolderId: "",
};
exports.MoveClusterMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterMetadata",
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
const baseAddClusterZookeeperRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperRequest",
    clusterId: "",
};
exports.AddClusterZookeeperRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.hostSpecs) {
            exports.HostSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddClusterZookeeperRequest);
        message.hostSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.resources = cluster_1.Resources.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseAddClusterZookeeperRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        message.hostSpecs = ((_a = object.hostSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.HostSpec.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
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
        const message = Object.assign({}, baseAddClusterZookeeperRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        message.hostSpecs =
            ((_b = object.hostSpecs) === null || _b === void 0 ? void 0 : _b.map((e) => exports.HostSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddClusterZookeeperRequest.$type, exports.AddClusterZookeeperRequest);
const baseAddClusterZookeeperMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperMetadata",
    clusterId: "",
};
exports.AddClusterZookeeperMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddClusterZookeeperMetadata);
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
        const message = Object.assign({}, baseAddClusterZookeeperMetadata);
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
        const message = Object.assign({}, baseAddClusterZookeeperMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddClusterZookeeperMetadata.$type, exports.AddClusterZookeeperMetadata);
const baseBackupClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterRequest",
    clusterId: "",
};
exports.BackupClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterMetadata",
    clusterId: "",
};
exports.BackupClusterMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseBackupClusterMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupClusterMetadata.$type, exports.BackupClusterMetadata);
const baseRestoreClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest",
    backupId: "",
    additionalBackupIds: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    folderId: "",
    serviceAccountId: "",
    securityGroupIds: "",
};
exports.RestoreClusterRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
        }
        for (const v of message.additionalBackupIds) {
            writer.uint32(106).string(v);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.RestoreClusterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest.LabelsEntry",
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
        for (const v of message.hostSpecs) {
            exports.HostSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.networkId !== "") {
            writer.uint32(66).string(message.networkId);
        }
        if (message.folderId !== "") {
            writer.uint32(74).string(message.folderId);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(82).string(message.serviceAccountId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.additionalBackupIds = [];
        message.labels = {};
        message.hostSpecs = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 13:
                    message.additionalBackupIds.push(reader.string());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.RestoreClusterRequest_LabelsEntry.decode(reader, reader.uint32());
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
                    message.hostSpecs.push(exports.HostSpec.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.networkId = reader.string();
                    break;
                case 9:
                    message.folderId = reader.string();
                    break;
                case 10:
                    message.serviceAccountId = reader.string();
                    break;
                case 11:
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
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        message.additionalBackupIds = ((_a = object.additionalBackupIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_b = object.labels) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
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
        message.hostSpecs = ((_c = object.hostSpecs) !== null && _c !== void 0 ? _c : []).map((e) => exports.HostSpec.fromJSON(e));
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.securityGroupIds = ((_d = object.securityGroupIds) !== null && _d !== void 0 ? _d : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        if (message.additionalBackupIds) {
            obj.additionalBackupIds = message.additionalBackupIds.map((e) => e);
        }
        else {
            obj.additionalBackupIds = [];
        }
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
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        message.additionalBackupIds =
            ((_b = object.additionalBackupIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.environment = (_f = object.environment) !== null && _f !== void 0 ? _f : 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.hostSpecs =
            ((_g = object.hostSpecs) === null || _g === void 0 ? void 0 : _g.map((e) => exports.HostSpec.fromPartial(e))) || [];
        message.networkId = (_h = object.networkId) !== null && _h !== void 0 ? _h : "";
        message.folderId = (_j = object.folderId) !== null && _j !== void 0 ? _j : "";
        message.serviceAccountId = (_k = object.serviceAccountId) !== null && _k !== void 0 ? _k : "";
        message.securityGroupIds = ((_l = object.securityGroupIds) === null || _l === void 0 ? void 0 : _l.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreClusterRequest.$type, exports.RestoreClusterRequest);
const baseRestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.RestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterMetadata",
    clusterId: "",
    backupId: "",
};
exports.RestoreClusterMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterMetadata",
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
const baseRescheduleMaintenanceRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceRequest",
    clusterId: "",
    rescheduleType: 0,
};
exports.RescheduleMaintenanceRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceMetadata",
    clusterId: "",
};
exports.RescheduleMaintenanceMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceMetadata",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord",
};
exports.LogRecord = {
    $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.message).forEach(([key, value]) => {
            exports.LogRecord_MessageEntry.encode({
                $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord.MessageEntry",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord.MessageEntry",
    key: "",
    value: "",
};
exports.LogRecord_MessageEntry = {
    $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord.MessageEntry",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    serviceType: 0,
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterLogsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsRequest",
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseListClusterLogsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.columnFilter = ((_b = object.columnFilter) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.serviceType = (_c = object.serviceType) !== null && _c !== void 0 ? _c : 0;
        message.fromTime = (_d = object.fromTime) !== null && _d !== void 0 ? _d : undefined;
        message.toTime = (_e = object.toTime) !== null && _e !== void 0 ? _e : undefined;
        message.pageSize = (_f = object.pageSize) !== null && _f !== void 0 ? _f : 0;
        message.pageToken = (_g = object.pageToken) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterLogsRequest.$type, exports.ListClusterLogsRequest);
const baseListClusterLogsResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsResponse",
    nextPageToken: "",
};
exports.ListClusterLogsResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsResponse",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.StreamLogRecord",
    nextRecordToken: "",
};
exports.StreamLogRecord = {
    $type: "yandex.cloud.mdb.clickhouse.v1.StreamLogRecord",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.StreamClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    serviceType: 0,
    recordToken: "",
    filter: "",
};
exports.StreamClusterLogsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.StreamClusterLogsRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterOperationsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsResponse",
    nextPageToken: "",
};
exports.ListClusterOperationsResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsResponse",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterBackupsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsResponse",
    nextPageToken: "",
};
exports.ListClusterBackupsResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsResponse",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterHostsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsResponse",
    nextPageToken: "",
};
exports.ListClusterHostsResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsResponse",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsRequest",
    clusterId: "",
};
exports.AddClusterHostsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostSpecs) {
            exports.HostSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.copySchema !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.copySchema }, writer.uint32(26).fork()).ldelim();
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
                case 3:
                    message.copySchema = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
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
        message.copySchema =
            object.copySchema !== undefined && object.copySchema !== null
                ? Boolean(object.copySchema)
                : undefined;
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
        message.copySchema !== undefined && (obj.copySchema = message.copySchema);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAddClusterHostsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostSpecs =
            ((_b = object.hostSpecs) === null || _b === void 0 ? void 0 : _b.map((e) => exports.HostSpec.fromPartial(e))) || [];
        message.copySchema = (_c = object.copySchema) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddClusterHostsRequest.$type, exports.AddClusterHostsRequest);
const baseAddClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.AddClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsMetadata",
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
const baseUpdateHostSpec = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateHostSpec",
    hostName: "",
};
exports.UpdateHostSpec = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateHostSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostName !== "") {
            writer.uint32(10).string(message.hostName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.assignPublicIp !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.assignPublicIp }, writer.uint32(26).fork()).ldelim();
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.assignPublicIp = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
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
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostName !== undefined && (obj.hostName = message.hostName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateHostSpec);
        message.hostName = (_a = object.hostName) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.assignPublicIp = (_b = object.assignPublicIp) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateHostSpec.$type, exports.UpdateHostSpec);
const baseUpdateClusterHostsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsRequest",
    clusterId: "",
};
exports.UpdateClusterHostsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.UpdateClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsMetadata",
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
const baseDeleteClusterHostsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsRequest",
    clusterId: "",
    hostNames: "",
};
exports.DeleteClusterHostsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsRequest",
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
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.DeleteClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsMetadata",
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
const baseGetClusterShardRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardRequest",
    clusterId: "",
    shardName: "",
};
exports.GetClusterShardRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== "") {
            writer.uint32(18).string(message.shardName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetClusterShardRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseGetClusterShardRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetClusterShardRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardName = (_b = object.shardName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetClusterShardRequest.$type, exports.GetClusterShardRequest);
const baseListClusterShardsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterShardsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsRequest",
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
        const message = Object.assign({}, baseListClusterShardsRequest);
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
        const message = Object.assign({}, baseListClusterShardsRequest);
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
        const message = Object.assign({}, baseListClusterShardsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterShardsRequest.$type, exports.ListClusterShardsRequest);
const baseListClusterShardsResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsResponse",
    nextPageToken: "",
};
exports.ListClusterShardsResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.shards) {
            cluster_1.Shard.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterShardsResponse);
        message.shards = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shards.push(cluster_1.Shard.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListClusterShardsResponse);
        message.shards = ((_a = object.shards) !== null && _a !== void 0 ? _a : []).map((e) => cluster_1.Shard.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.shards) {
            obj.shards = message.shards.map((e) => (e ? cluster_1.Shard.toJSON(e) : undefined));
        }
        else {
            obj.shards = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClusterShardsResponse);
        message.shards = ((_a = object.shards) === null || _a === void 0 ? void 0 : _a.map((e) => cluster_1.Shard.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterShardsResponse.$type, exports.ListClusterShardsResponse);
const baseAddClusterShardRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardRequest",
    clusterId: "",
    shardName: "",
};
exports.AddClusterShardRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== "") {
            writer.uint32(18).string(message.shardName);
        }
        if (message.configSpec !== undefined) {
            exports.ShardConfigSpec.encode(message.configSpec, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.hostSpecs) {
            exports.HostSpec.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.copySchema !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.copySchema }, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddClusterShardRequest);
        message.hostSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.shardName = reader.string();
                    break;
                case 3:
                    message.configSpec = exports.ShardConfigSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hostSpecs.push(exports.HostSpec.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.copySchema = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
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
        const message = Object.assign({}, baseAddClusterShardRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ShardConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.hostSpecs = ((_a = object.hostSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.HostSpec.fromJSON(e));
        message.copySchema =
            object.copySchema !== undefined && object.copySchema !== null
                ? Boolean(object.copySchema)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ShardConfigSpec.toJSON(message.configSpec)
                : undefined);
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) => e ? exports.HostSpec.toJSON(e) : undefined);
        }
        else {
            obj.hostSpecs = [];
        }
        message.copySchema !== undefined && (obj.copySchema = message.copySchema);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseAddClusterShardRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardName = (_b = object.shardName) !== null && _b !== void 0 ? _b : "";
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ShardConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.hostSpecs =
            ((_c = object.hostSpecs) === null || _c === void 0 ? void 0 : _c.map((e) => exports.HostSpec.fromPartial(e))) || [];
        message.copySchema = (_d = object.copySchema) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddClusterShardRequest.$type, exports.AddClusterShardRequest);
const baseAddClusterShardMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardMetadata",
    clusterId: "",
    shardName: "",
};
exports.AddClusterShardMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== "") {
            writer.uint32(18).string(message.shardName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddClusterShardMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseAddClusterShardMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddClusterShardMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardName = (_b = object.shardName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddClusterShardMetadata.$type, exports.AddClusterShardMetadata);
const baseUpdateClusterShardRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardRequest",
    clusterId: "",
    shardName: "",
};
exports.UpdateClusterShardRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== "") {
            writer.uint32(18).string(message.shardName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.configSpec !== undefined) {
            exports.ShardConfigSpec.encode(message.configSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterShardRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.shardName = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.configSpec = exports.ShardConfigSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateClusterShardRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ShardConfigSpec.fromJSON(object.configSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ShardConfigSpec.toJSON(message.configSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateClusterShardRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardName = (_b = object.shardName) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ShardConfigSpec.fromPartial(object.configSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterShardRequest.$type, exports.UpdateClusterShardRequest);
const baseUpdateClusterShardMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardMetadata",
    clusterId: "",
    shardName: "",
};
exports.UpdateClusterShardMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== "") {
            writer.uint32(18).string(message.shardName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterShardMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseUpdateClusterShardMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateClusterShardMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardName = (_b = object.shardName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterShardMetadata.$type, exports.UpdateClusterShardMetadata);
const baseDeleteClusterShardRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardRequest",
    clusterId: "",
    shardName: "",
};
exports.DeleteClusterShardRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== "") {
            writer.uint32(18).string(message.shardName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterShardRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseDeleteClusterShardRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteClusterShardRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardName = (_b = object.shardName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterShardRequest.$type, exports.DeleteClusterShardRequest);
const baseDeleteClusterShardMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardMetadata",
    clusterId: "",
    shardName: "",
};
exports.DeleteClusterShardMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== "") {
            writer.uint32(18).string(message.shardName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterShardMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseDeleteClusterShardMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteClusterShardMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardName = (_b = object.shardName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterShardMetadata.$type, exports.DeleteClusterShardMetadata);
const baseGetClusterShardGroupRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardGroupRequest",
    clusterId: "",
    shardGroupName: "",
};
exports.GetClusterShardGroupRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardGroupName !== "") {
            writer.uint32(18).string(message.shardGroupName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetClusterShardGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.shardGroupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetClusterShardGroupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardGroupName =
            object.shardGroupName !== undefined && object.shardGroupName !== null
                ? String(object.shardGroupName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardGroupName !== undefined &&
            (obj.shardGroupName = message.shardGroupName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetClusterShardGroupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardGroupName = (_b = object.shardGroupName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetClusterShardGroupRequest.$type, exports.GetClusterShardGroupRequest);
const baseListClusterShardGroupsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterShardGroupsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsRequest",
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
        const message = Object.assign({}, baseListClusterShardGroupsRequest);
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
        const message = Object.assign({}, baseListClusterShardGroupsRequest);
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
        const message = Object.assign({}, baseListClusterShardGroupsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterShardGroupsRequest.$type, exports.ListClusterShardGroupsRequest);
const baseListClusterShardGroupsResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsResponse",
    nextPageToken: "",
};
exports.ListClusterShardGroupsResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.shardGroups) {
            cluster_1.ShardGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterShardGroupsResponse);
        message.shardGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shardGroups.push(cluster_1.ShardGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListClusterShardGroupsResponse);
        message.shardGroups = ((_a = object.shardGroups) !== null && _a !== void 0 ? _a : []).map((e) => cluster_1.ShardGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.shardGroups) {
            obj.shardGroups = message.shardGroups.map((e) => e ? cluster_1.ShardGroup.toJSON(e) : undefined);
        }
        else {
            obj.shardGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClusterShardGroupsResponse);
        message.shardGroups =
            ((_a = object.shardGroups) === null || _a === void 0 ? void 0 : _a.map((e) => cluster_1.ShardGroup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterShardGroupsResponse.$type, exports.ListClusterShardGroupsResponse);
const baseCreateClusterShardGroupRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupRequest",
    clusterId: "",
    shardGroupName: "",
    description: "",
    shardNames: "",
};
exports.CreateClusterShardGroupRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardGroupName !== "") {
            writer.uint32(18).string(message.shardGroupName);
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
        const message = Object.assign({}, baseCreateClusterShardGroupRequest);
        message.shardNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.shardGroupName = reader.string();
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
        const message = Object.assign({}, baseCreateClusterShardGroupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardGroupName =
            object.shardGroupName !== undefined && object.shardGroupName !== null
                ? String(object.shardGroupName)
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardGroupName !== undefined &&
            (obj.shardGroupName = message.shardGroupName);
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
        const message = Object.assign({}, baseCreateClusterShardGroupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardGroupName = (_b = object.shardGroupName) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.shardNames = ((_d = object.shardNames) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterShardGroupRequest.$type, exports.CreateClusterShardGroupRequest);
const baseCreateClusterShardGroupMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupMetadata",
    clusterId: "",
    shardGroupName: "",
};
exports.CreateClusterShardGroupMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardGroupName !== "") {
            writer.uint32(18).string(message.shardGroupName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateClusterShardGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.shardGroupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateClusterShardGroupMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardGroupName =
            object.shardGroupName !== undefined && object.shardGroupName !== null
                ? String(object.shardGroupName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardGroupName !== undefined &&
            (obj.shardGroupName = message.shardGroupName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateClusterShardGroupMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardGroupName = (_b = object.shardGroupName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterShardGroupMetadata.$type, exports.CreateClusterShardGroupMetadata);
const baseUpdateClusterShardGroupRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupRequest",
    clusterId: "",
    shardGroupName: "",
    description: "",
    shardNames: "",
};
exports.UpdateClusterShardGroupRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardGroupName !== "") {
            writer.uint32(18).string(message.shardGroupName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        for (const v of message.shardNames) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterShardGroupRequest);
        message.shardNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.shardGroupName = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
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
        const message = Object.assign({}, baseUpdateClusterShardGroupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardGroupName =
            object.shardGroupName !== undefined && object.shardGroupName !== null
                ? String(object.shardGroupName)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.shardNames = ((_a = object.shardNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardGroupName !== undefined &&
            (obj.shardGroupName = message.shardGroupName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
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
        const message = Object.assign({}, baseUpdateClusterShardGroupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardGroupName = (_b = object.shardGroupName) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.shardNames = ((_d = object.shardNames) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterShardGroupRequest.$type, exports.UpdateClusterShardGroupRequest);
const baseUpdateClusterShardGroupMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupMetadata",
    clusterId: "",
    shardGroupName: "",
};
exports.UpdateClusterShardGroupMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardGroupName !== "") {
            writer.uint32(18).string(message.shardGroupName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterShardGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.shardGroupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateClusterShardGroupMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardGroupName =
            object.shardGroupName !== undefined && object.shardGroupName !== null
                ? String(object.shardGroupName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardGroupName !== undefined &&
            (obj.shardGroupName = message.shardGroupName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateClusterShardGroupMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardGroupName = (_b = object.shardGroupName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterShardGroupMetadata.$type, exports.UpdateClusterShardGroupMetadata);
const baseDeleteClusterShardGroupRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupRequest",
    clusterId: "",
    shardGroupName: "",
};
exports.DeleteClusterShardGroupRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardGroupName !== "") {
            writer.uint32(18).string(message.shardGroupName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterShardGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.shardGroupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteClusterShardGroupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardGroupName =
            object.shardGroupName !== undefined && object.shardGroupName !== null
                ? String(object.shardGroupName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardGroupName !== undefined &&
            (obj.shardGroupName = message.shardGroupName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteClusterShardGroupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardGroupName = (_b = object.shardGroupName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterShardGroupRequest.$type, exports.DeleteClusterShardGroupRequest);
const baseDeleteClusterShardGroupMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupMetadata",
    clusterId: "",
    shardGroupName: "",
};
exports.DeleteClusterShardGroupMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardGroupName !== "") {
            writer.uint32(18).string(message.shardGroupName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterShardGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.shardGroupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteClusterShardGroupMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardGroupName =
            object.shardGroupName !== undefined && object.shardGroupName !== null
                ? String(object.shardGroupName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardGroupName !== undefined &&
            (obj.shardGroupName = message.shardGroupName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteClusterShardGroupMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardGroupName = (_b = object.shardGroupName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterShardGroupMetadata.$type, exports.DeleteClusterShardGroupMetadata);
const baseListClusterExternalDictionariesRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterExternalDictionariesRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesRequest",
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
        const message = Object.assign({}, baseListClusterExternalDictionariesRequest);
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
        const message = Object.assign({}, baseListClusterExternalDictionariesRequest);
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
        const message = Object.assign({}, baseListClusterExternalDictionariesRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterExternalDictionariesRequest.$type, exports.ListClusterExternalDictionariesRequest);
const baseListClusterExternalDictionariesResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesResponse",
    nextPageToken: "",
};
exports.ListClusterExternalDictionariesResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.externalDictionaries) {
            clickhouse_1.ClickhouseConfig_ExternalDictionary.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListClusterExternalDictionariesResponse);
        message.externalDictionaries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalDictionaries.push(clickhouse_1.ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListClusterExternalDictionariesResponse);
        message.externalDictionaries = ((_a = object.externalDictionaries) !== null && _a !== void 0 ? _a : []).map((e) => clickhouse_1.ClickhouseConfig_ExternalDictionary.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.externalDictionaries) {
            obj.externalDictionaries = message.externalDictionaries.map((e) => e ? clickhouse_1.ClickhouseConfig_ExternalDictionary.toJSON(e) : undefined);
        }
        else {
            obj.externalDictionaries = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListClusterExternalDictionariesResponse);
        message.externalDictionaries =
            ((_a = object.externalDictionaries) === null || _a === void 0 ? void 0 : _a.map((e) => clickhouse_1.ClickhouseConfig_ExternalDictionary.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterExternalDictionariesResponse.$type, exports.ListClusterExternalDictionariesResponse);
const baseCreateClusterExternalDictionaryRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryRequest",
    clusterId: "",
};
exports.CreateClusterExternalDictionaryRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.externalDictionary !== undefined) {
            clickhouse_1.ClickhouseConfig_ExternalDictionary.encode(message.externalDictionary, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateClusterExternalDictionaryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.externalDictionary =
                        clickhouse_1.ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateClusterExternalDictionaryRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.externalDictionary =
            object.externalDictionary !== undefined &&
                object.externalDictionary !== null
                ? clickhouse_1.ClickhouseConfig_ExternalDictionary.fromJSON(object.externalDictionary)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.externalDictionary !== undefined &&
            (obj.externalDictionary = message.externalDictionary
                ? clickhouse_1.ClickhouseConfig_ExternalDictionary.toJSON(message.externalDictionary)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateClusterExternalDictionaryRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.externalDictionary =
            object.externalDictionary !== undefined &&
                object.externalDictionary !== null
                ? clickhouse_1.ClickhouseConfig_ExternalDictionary.fromPartial(object.externalDictionary)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterExternalDictionaryRequest.$type, exports.CreateClusterExternalDictionaryRequest);
const baseCreateClusterExternalDictionaryMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryMetadata",
    clusterId: "",
};
exports.CreateClusterExternalDictionaryMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateClusterExternalDictionaryMetadata);
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
        const message = Object.assign({}, baseCreateClusterExternalDictionaryMetadata);
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
        const message = Object.assign({}, baseCreateClusterExternalDictionaryMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterExternalDictionaryMetadata.$type, exports.CreateClusterExternalDictionaryMetadata);
const baseUpdateClusterExternalDictionaryRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryRequest",
    clusterId: "",
};
exports.UpdateClusterExternalDictionaryRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.externalDictionary !== undefined) {
            clickhouse_1.ClickhouseConfig_ExternalDictionary.encode(message.externalDictionary, writer.uint32(18).fork()).ldelim();
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterExternalDictionaryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.externalDictionary =
                        clickhouse_1.ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateClusterExternalDictionaryRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.externalDictionary =
            object.externalDictionary !== undefined &&
                object.externalDictionary !== null
                ? clickhouse_1.ClickhouseConfig_ExternalDictionary.fromJSON(object.externalDictionary)
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.externalDictionary !== undefined &&
            (obj.externalDictionary = message.externalDictionary
                ? clickhouse_1.ClickhouseConfig_ExternalDictionary.toJSON(message.externalDictionary)
                : undefined);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateClusterExternalDictionaryRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.externalDictionary =
            object.externalDictionary !== undefined &&
                object.externalDictionary !== null
                ? clickhouse_1.ClickhouseConfig_ExternalDictionary.fromPartial(object.externalDictionary)
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterExternalDictionaryRequest.$type, exports.UpdateClusterExternalDictionaryRequest);
const baseUpdateClusterExternalDictionaryMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryMetadata",
    clusterId: "",
    externalDictionaryName: "",
};
exports.UpdateClusterExternalDictionaryMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.externalDictionaryName !== "") {
            writer.uint32(18).string(message.externalDictionaryName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterExternalDictionaryMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.externalDictionaryName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateClusterExternalDictionaryMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.externalDictionaryName =
            object.externalDictionaryName !== undefined &&
                object.externalDictionaryName !== null
                ? String(object.externalDictionaryName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.externalDictionaryName !== undefined &&
            (obj.externalDictionaryName = message.externalDictionaryName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateClusterExternalDictionaryMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.externalDictionaryName = (_b = object.externalDictionaryName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterExternalDictionaryMetadata.$type, exports.UpdateClusterExternalDictionaryMetadata);
const baseDeleteClusterExternalDictionaryRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryRequest",
    clusterId: "",
    externalDictionaryName: "",
};
exports.DeleteClusterExternalDictionaryRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.externalDictionaryName !== "") {
            writer.uint32(18).string(message.externalDictionaryName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterExternalDictionaryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.externalDictionaryName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteClusterExternalDictionaryRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.externalDictionaryName =
            object.externalDictionaryName !== undefined &&
                object.externalDictionaryName !== null
                ? String(object.externalDictionaryName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.externalDictionaryName !== undefined &&
            (obj.externalDictionaryName = message.externalDictionaryName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteClusterExternalDictionaryRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.externalDictionaryName = (_b = object.externalDictionaryName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterExternalDictionaryRequest.$type, exports.DeleteClusterExternalDictionaryRequest);
const baseDeleteClusterExternalDictionaryMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryMetadata",
    clusterId: "",
};
exports.DeleteClusterExternalDictionaryMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteClusterExternalDictionaryMetadata);
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
        const message = Object.assign({}, baseDeleteClusterExternalDictionaryMetadata);
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
        const message = Object.assign({}, baseDeleteClusterExternalDictionaryMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterExternalDictionaryMetadata.$type, exports.DeleteClusterExternalDictionaryMetadata);
const baseHostSpec = {
    $type: "yandex.cloud.mdb.clickhouse.v1.HostSpec",
    zoneId: "",
    type: 0,
    subnetId: "",
    assignPublicIp: false,
    shardName: "",
};
exports.HostSpec = {
    $type: "yandex.cloud.mdb.clickhouse.v1.HostSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== "") {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.subnetId !== "") {
            writer.uint32(26).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(32).bool(message.assignPublicIp);
        }
        if (message.shardName !== "") {
            writer.uint32(42).string(message.shardName);
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
                    message.type = reader.int32();
                    break;
                case 3:
                    message.subnetId = reader.string();
                    break;
                case 4:
                    message.assignPublicIp = reader.bool();
                    break;
                case 5:
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
        const message = Object.assign({}, baseHostSpec);
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? (0, cluster_1.host_TypeFromJSON)(object.type)
                : 0;
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.type !== undefined && (obj.type = (0, cluster_1.host_TypeToJSON)(message.type));
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseHostSpec);
        message.zoneId = (_a = object.zoneId) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.subnetId = (_c = object.subnetId) !== null && _c !== void 0 ? _c : "";
        message.assignPublicIp = (_d = object.assignPublicIp) !== null && _d !== void 0 ? _d : false;
        message.shardName = (_e = object.shardName) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HostSpec.$type, exports.HostSpec);
const baseConfigSpec = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec",
    version: "",
    adminPassword: "",
};
exports.ConfigSpec = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.clickhouse !== undefined) {
            exports.ConfigSpec_Clickhouse.encode(message.clickhouse, writer.uint32(10).fork()).ldelim();
        }
        if (message.zookeeper !== undefined) {
            exports.ConfigSpec_Zookeeper.encode(message.zookeeper, writer.uint32(18).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            timeofday_1.TimeOfDay.encode(message.backupWindowStart, writer.uint32(34).fork()).ldelim();
        }
        if (message.access !== undefined) {
            cluster_1.Access.encode(message.access, writer.uint32(42).fork()).ldelim();
        }
        if (message.cloudStorage !== undefined) {
            cluster_1.CloudStorage.encode(message.cloudStorage, writer.uint32(50).fork()).ldelim();
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
        if (message.adminPassword !== "") {
            writer.uint32(74).string(message.adminPassword);
        }
        if (message.embeddedKeeper !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.embeddedKeeper }, writer.uint32(82).fork()).ldelim();
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
                case 3:
                    message.version = reader.string();
                    break;
                case 1:
                    message.clickhouse = exports.ConfigSpec_Clickhouse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.zookeeper = exports.ConfigSpec_Zookeeper.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.backupWindowStart = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.access = cluster_1.Access.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.cloudStorage = cluster_1.CloudStorage.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.sqlDatabaseManagement = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.sqlUserManagement = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.adminPassword = reader.string();
                    break;
                case 10:
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
        const message = Object.assign({}, baseConfigSpec);
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? exports.ConfigSpec_Clickhouse.fromJSON(object.clickhouse)
                : undefined;
        message.zookeeper =
            object.zookeeper !== undefined && object.zookeeper !== null
                ? exports.ConfigSpec_Zookeeper.fromJSON(object.zookeeper)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined &&
                object.backupWindowStart !== null
                ? timeofday_1.TimeOfDay.fromJSON(object.backupWindowStart)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? cluster_1.Access.fromJSON(object.access)
                : undefined;
        message.cloudStorage =
            object.cloudStorage !== undefined && object.cloudStorage !== null
                ? cluster_1.CloudStorage.fromJSON(object.cloudStorage)
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
        message.adminPassword =
            object.adminPassword !== undefined && object.adminPassword !== null
                ? String(object.adminPassword)
                : "";
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
                ? exports.ConfigSpec_Clickhouse.toJSON(message.clickhouse)
                : undefined);
        message.zookeeper !== undefined &&
            (obj.zookeeper = message.zookeeper
                ? exports.ConfigSpec_Zookeeper.toJSON(message.zookeeper)
                : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? timeofday_1.TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? cluster_1.Access.toJSON(message.access) : undefined);
        message.cloudStorage !== undefined &&
            (obj.cloudStorage = message.cloudStorage
                ? cluster_1.CloudStorage.toJSON(message.cloudStorage)
                : undefined);
        message.sqlDatabaseManagement !== undefined &&
            (obj.sqlDatabaseManagement = message.sqlDatabaseManagement);
        message.sqlUserManagement !== undefined &&
            (obj.sqlUserManagement = message.sqlUserManagement);
        message.adminPassword !== undefined &&
            (obj.adminPassword = message.adminPassword);
        message.embeddedKeeper !== undefined &&
            (obj.embeddedKeeper = message.embeddedKeeper);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseConfigSpec);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? exports.ConfigSpec_Clickhouse.fromPartial(object.clickhouse)
                : undefined;
        message.zookeeper =
            object.zookeeper !== undefined && object.zookeeper !== null
                ? exports.ConfigSpec_Zookeeper.fromPartial(object.zookeeper)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined &&
                object.backupWindowStart !== null
                ? timeofday_1.TimeOfDay.fromPartial(object.backupWindowStart)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? cluster_1.Access.fromPartial(object.access)
                : undefined;
        message.cloudStorage =
            object.cloudStorage !== undefined && object.cloudStorage !== null
                ? cluster_1.CloudStorage.fromPartial(object.cloudStorage)
                : undefined;
        message.sqlDatabaseManagement = (_b = object.sqlDatabaseManagement) !== null && _b !== void 0 ? _b : undefined;
        message.sqlUserManagement = (_c = object.sqlUserManagement) !== null && _c !== void 0 ? _c : undefined;
        message.adminPassword = (_d = object.adminPassword) !== null && _d !== void 0 ? _d : "";
        message.embeddedKeeper = (_e = object.embeddedKeeper) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpec.$type, exports.ConfigSpec);
const baseConfigSpec_Clickhouse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Clickhouse",
};
exports.ConfigSpec_Clickhouse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Clickhouse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            clickhouse_1.ClickhouseConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConfigSpec_Clickhouse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = clickhouse_1.ClickhouseConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = cluster_1.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConfigSpec_Clickhouse);
        message.config =
            object.config !== undefined && object.config !== null
                ? clickhouse_1.ClickhouseConfig.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? clickhouse_1.ClickhouseConfig.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseConfigSpec_Clickhouse);
        message.config =
            object.config !== undefined && object.config !== null
                ? clickhouse_1.ClickhouseConfig.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpec_Clickhouse.$type, exports.ConfigSpec_Clickhouse);
const baseConfigSpec_Zookeeper = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Zookeeper",
};
exports.ConfigSpec_Zookeeper = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Zookeeper",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
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
                    message.resources = cluster_1.Resources.decode(reader, reader.uint32());
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
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseConfigSpec_Zookeeper);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpec_Zookeeper.$type, exports.ConfigSpec_Zookeeper);
const baseShardConfigSpec = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec",
};
exports.ShardConfigSpec = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clickhouse !== undefined) {
            exports.ShardConfigSpec_Clickhouse.encode(message.clickhouse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseShardConfigSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clickhouse = exports.ShardConfigSpec_Clickhouse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseShardConfigSpec);
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? exports.ShardConfigSpec_Clickhouse.fromJSON(object.clickhouse)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clickhouse !== undefined &&
            (obj.clickhouse = message.clickhouse
                ? exports.ShardConfigSpec_Clickhouse.toJSON(message.clickhouse)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseShardConfigSpec);
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? exports.ShardConfigSpec_Clickhouse.fromPartial(object.clickhouse)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ShardConfigSpec.$type, exports.ShardConfigSpec);
const baseShardConfigSpec_Clickhouse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec.Clickhouse",
};
exports.ShardConfigSpec_Clickhouse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec.Clickhouse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            clickhouse_1.ClickhouseConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.weight !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.weight }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseShardConfigSpec_Clickhouse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = clickhouse_1.ClickhouseConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = cluster_1.Resources.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseShardConfigSpec_Clickhouse);
        message.config =
            object.config !== undefined && object.config !== null
                ? clickhouse_1.ClickhouseConfig.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
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
                ? clickhouse_1.ClickhouseConfig.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseShardConfigSpec_Clickhouse);
        message.config =
            object.config !== undefined && object.config !== null
                ? clickhouse_1.ClickhouseConfig.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        message.weight = (_a = object.weight) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ShardConfigSpec_Clickhouse.$type, exports.ShardConfigSpec_Clickhouse);
/** A set of methods for managing ClickHouse clusters. */
exports.ClusterServiceService = {
    /**
     * Returns the specified ClickHouse cluster.
     *
     * To get the list of available ClickHouse clusters, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
    /**
     * Retrieves a list of ClickHouse clusters that belong
     * to the specified folder.
     */
    list: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClustersResponse.decode(value),
    },
    /** Creates a ClickHouse cluster in the specified folder. */
    create: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified ClickHouse cluster. */
    update: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified ClickHouse cluster. */
    delete: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified ClickHouse cluster. */
    start: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified ClickHouse cluster. */
    stop: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Moves a ClickHouse cluster to the specified folder. */
    move: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Adds a ZooKeeper subcluster to the specified ClickHouse cluster. */
    addZookeeper: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddZookeeper",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddClusterZookeeperRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddClusterZookeeperRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a backup for the specified ClickHouse cluster. */
    backup: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Backup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.BackupClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.BackupClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a new ClickHouse cluster using the specified backup. */
    restore: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Restore",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestoreClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestoreClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/RescheduleMaintenance",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RescheduleMaintenanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RescheduleMaintenanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves logs for the specified ClickHouse cluster. */
    listLogs: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListLogs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterLogsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterLogsResponse.decode(value),
    },
    /** Same as ListLogs but using server-side streaming. Also allows for `tail -f` semantics. */
    streamLogs: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/StreamLogs",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.StreamClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StreamClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.StreamLogRecord.encode(value).finish()),
        responseDeserialize: (value) => exports.StreamLogRecord.decode(value),
    },
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves the list of available backups for the specified ClickHouse cluster. */
    listBackups: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListBackups",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterBackupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterBackupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterBackupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterBackupsResponse.decode(value),
    },
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterHostsResponse.decode(value),
    },
    /** Creates new hosts for a cluster. */
    addHosts: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified hosts. */
    updateHosts: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the specified shard. */
    getShard: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShard",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterShardRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterShardRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Shard.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Shard.decode(value),
    },
    /** Retrieves a list of shards that belong to the specified cluster. */
    listShards: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShards",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterShardsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterShardsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterShardsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterShardsResponse.decode(value),
    },
    /** Creates a new shard in the specified cluster. */
    addShard: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddShard",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddClusterShardRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddClusterShardRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Modifies the specified shard. */
    updateShard: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShard",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterShardRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterShardRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified shard. */
    deleteShard: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShard",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterShardRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterShardRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the specified shard group. */
    getShardGroup: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShardGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterShardGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterShardGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.ShardGroup.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.ShardGroup.decode(value),
    },
    /** Retrieves a list of shard groups that belong to specified cluster. */
    listShardGroups: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShardGroups",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterShardGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterShardGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterShardGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterShardGroupsResponse.decode(value),
    },
    /** Creates a new shard group in the specified cluster. */
    createShardGroup: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateShardGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterShardGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterShardGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified shard group. */
    updateShardGroup: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShardGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterShardGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterShardGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified shard group. */
    deleteShardGroup: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShardGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterShardGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterShardGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves a list of external dictionaries that belong to specified cluster. */
    listExternalDictionaries: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListExternalDictionaries",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterExternalDictionariesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterExternalDictionariesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterExternalDictionariesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterExternalDictionariesResponse.decode(value),
    },
    /** Creates an external dictionary for the specified ClickHouse cluster. */
    createExternalDictionary: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateExternalDictionary",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterExternalDictionaryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterExternalDictionaryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates an external dictionary for the specified ClickHouse cluster. */
    updateExternalDictionary: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateExternalDictionary",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterExternalDictionaryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterExternalDictionaryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified external dictionary. */
    deleteExternalDictionary: {
        path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteExternalDictionary",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterExternalDictionaryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterExternalDictionaryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ClusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ClusterServiceService, "yandex.cloud.mdb.clickhouse.v1.ClusterService");
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
