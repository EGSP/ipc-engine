"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClusterHostsRequest = exports.AddClusterHostsMetadata = exports.AddClusterHostsRequest = exports.ListClusterHostsResponse = exports.ListClusterHostsRequest = exports.ListClusterBackupsResponse = exports.ListClusterBackupsRequest = exports.ListClusterOperationsResponse = exports.ListClusterOperationsRequest = exports.StreamClusterLogsRequest = exports.StreamLogRecord = exports.ListClusterLogsResponse = exports.ListClusterLogsRequest = exports.LogRecord_MessageEntry = exports.LogRecord = exports.RescheduleMaintenanceMetadata = exports.RescheduleMaintenanceRequest = exports.RestoreClusterMetadata = exports.RestoreClusterRequest_RecoveryTargetSpec = exports.RestoreClusterRequest_LabelsEntry = exports.RestoreClusterRequest = exports.BackupClusterMetadata = exports.BackupClusterRequest = exports.MoveClusterMetadata = exports.MoveClusterRequest = exports.StopClusterMetadata = exports.StopClusterRequest = exports.StartClusterMetadata = exports.StartClusterRequest = exports.DeleteClusterMetadata = exports.DeleteClusterRequest = exports.UpdateClusterMetadata = exports.UpdateClusterRequest_LabelsEntry = exports.UpdateClusterRequest = exports.CreateClusterMetadata = exports.CreateClusterRequest_LabelsEntry = exports.CreateClusterRequest = exports.ListClustersResponse = exports.ListClustersRequest = exports.GetClusterRequest = exports.streamClusterLogsRequest_ServiceTypeToJSON = exports.streamClusterLogsRequest_ServiceTypeFromJSON = exports.StreamClusterLogsRequest_ServiceType = exports.listClusterLogsRequest_ServiceTypeToJSON = exports.listClusterLogsRequest_ServiceTypeFromJSON = exports.ListClusterLogsRequest_ServiceType = exports.rescheduleMaintenanceRequest_RescheduleTypeToJSON = exports.rescheduleMaintenanceRequest_RescheduleTypeFromJSON = exports.RescheduleMaintenanceRequest_RescheduleType = exports.protobufPackage = void 0;
exports.Mongodbspec50_MongoInfra = exports.Mongodbspec50_Mongos = exports.Mongodbspec50_MongoCfg = exports.Mongodbspec50_Mongod = exports.Mongodbspec50 = exports.Mongodbspec44Enterprise_MongoInfra = exports.Mongodbspec44Enterprise_Mongos = exports.Mongodbspec44Enterprise_MongoCfg = exports.Mongodbspec44Enterprise_Mongod = exports.Mongodbspec44Enterprise = exports.Mongodbspec44_MongoInfra = exports.Mongodbspec44_Mongos = exports.Mongodbspec44_MongoCfg = exports.Mongodbspec44_Mongod = exports.Mongodbspec44 = exports.Mongodbspec42_MongoInfra = exports.Mongodbspec42_Mongos = exports.Mongodbspec42_MongoCfg = exports.Mongodbspec42_Mongod = exports.Mongodbspec42 = exports.Mongodbspec40_MongoInfra = exports.Mongodbspec40_Mongos = exports.Mongodbspec40_MongoCfg = exports.Mongodbspec40_Mongod = exports.Mongodbspec40 = exports.Mongodbspec36_MongoInfra = exports.Mongodbspec36_Mongos = exports.Mongodbspec36_MongoCfg = exports.Mongodbspec36_Mongod = exports.Mongodbspec36 = exports.HostSpec = exports.StepdownHostsMetadata = exports.StepdownHostsRequest = exports.RestartHostsMetadata = exports.RestartHostsRequest = exports.ResetupHostsMetadata = exports.ResetupHostsRequest = exports.DeleteClusterShardMetadata = exports.DeleteClusterShardRequest = exports.AddClusterShardMetadata = exports.AddClusterShardRequest = exports.ListClusterShardsResponse = exports.ListClusterShardsRequest = exports.GetClusterShardRequest = exports.EnableClusterShardingMetadata = exports.EnableClusterShardingRequest_MongoInfra = exports.EnableClusterShardingRequest_Mongos = exports.EnableClusterShardingRequest_MongoCfg = exports.EnableClusterShardingRequest = exports.DeleteClusterHostsMetadata = void 0;
exports.ClusterServiceClient = exports.ClusterServiceService = exports.ConfigSpec = exports.Mongodbspec60Enterprise_MongoInfra = exports.Mongodbspec60Enterprise_Mongos = exports.Mongodbspec60Enterprise_MongoCfg = exports.Mongodbspec60Enterprise_Mongod = exports.Mongodbspec60Enterprise = exports.Mongodbspec60_MongoInfra = exports.Mongodbspec60_Mongos = exports.Mongodbspec60_MongoCfg = exports.Mongodbspec60_Mongod = exports.Mongodbspec60 = exports.Mongodbspec50Enterprise_MongoInfra = exports.Mongodbspec50Enterprise_Mongos = exports.Mongodbspec50Enterprise_MongoCfg = exports.Mongodbspec50Enterprise_Mongod = exports.Mongodbspec50Enterprise = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cluster_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/cluster");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const maintenance_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/maintenance");
const mongodb3_6_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb3_6");
const mongodb4_0_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_0");
const mongodb4_2_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_2");
const mongodb4_4_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4");
const mongodb4_4_enterprise_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4_enterprise");
const mongodb5_0_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0");
const mongodb5_0_enterprise_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0_enterprise");
const mongodb6_0_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb6_0");
const mongodb6_0_enterprise_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb6_0_enterprise");
const timeofday_1 = require("../../../../../google/type/timeofday");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const database_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/database");
const user_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/user");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const backup_1 = require("../../../../../yandex/cloud/mdb/mongodb/v1/backup");
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.mongodb.v1";
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
    /** MONGOD - Logs of MongoDB activity. */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["MONGOD"] = 1] = "MONGOD";
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["MONGOS"] = 2] = "MONGOS";
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["MONGOCFG"] = 3] = "MONGOCFG";
    /** AUDIT - MongoDB Enterprise audit logs */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["AUDIT"] = 4] = "AUDIT";
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ListClusterLogsRequest_ServiceType = exports.ListClusterLogsRequest_ServiceType || (exports.ListClusterLogsRequest_ServiceType = {}));
function listClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "MONGOD":
            return ListClusterLogsRequest_ServiceType.MONGOD;
        case 2:
        case "MONGOS":
            return ListClusterLogsRequest_ServiceType.MONGOS;
        case 3:
        case "MONGOCFG":
            return ListClusterLogsRequest_ServiceType.MONGOCFG;
        case 4:
        case "AUDIT":
            return ListClusterLogsRequest_ServiceType.AUDIT;
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
        case ListClusterLogsRequest_ServiceType.MONGOD:
            return "MONGOD";
        case ListClusterLogsRequest_ServiceType.MONGOS:
            return "MONGOS";
        case ListClusterLogsRequest_ServiceType.MONGOCFG:
            return "MONGOCFG";
        case ListClusterLogsRequest_ServiceType.AUDIT:
            return "AUDIT";
        default:
            return "UNKNOWN";
    }
}
exports.listClusterLogsRequest_ServiceTypeToJSON = listClusterLogsRequest_ServiceTypeToJSON;
var StreamClusterLogsRequest_ServiceType;
(function (StreamClusterLogsRequest_ServiceType) {
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["SERVICE_TYPE_UNSPECIFIED"] = 0] = "SERVICE_TYPE_UNSPECIFIED";
    /** MONGOD - Logs of MongoDB activity. */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["MONGOD"] = 1] = "MONGOD";
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["MONGOS"] = 2] = "MONGOS";
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["MONGOCFG"] = 3] = "MONGOCFG";
    /** AUDIT - MongoDB Enterprise audit logs */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["AUDIT"] = 4] = "AUDIT";
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamClusterLogsRequest_ServiceType = exports.StreamClusterLogsRequest_ServiceType || (exports.StreamClusterLogsRequest_ServiceType = {}));
function streamClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "MONGOD":
            return StreamClusterLogsRequest_ServiceType.MONGOD;
        case 2:
        case "MONGOS":
            return StreamClusterLogsRequest_ServiceType.MONGOS;
        case 3:
        case "MONGOCFG":
            return StreamClusterLogsRequest_ServiceType.MONGOCFG;
        case 4:
        case "AUDIT":
            return StreamClusterLogsRequest_ServiceType.AUDIT;
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
        case StreamClusterLogsRequest_ServiceType.MONGOD:
            return "MONGOD";
        case StreamClusterLogsRequest_ServiceType.MONGOS:
            return "MONGOS";
        case StreamClusterLogsRequest_ServiceType.MONGOCFG:
            return "MONGOCFG";
        case StreamClusterLogsRequest_ServiceType.AUDIT:
            return "AUDIT";
        default:
            return "UNKNOWN";
    }
}
exports.streamClusterLogsRequest_ServiceTypeToJSON = streamClusterLogsRequest_ServiceTypeToJSON;
const baseGetClusterRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.GetClusterRequest",
    clusterId: "",
};
exports.GetClusterRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.GetClusterRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListClustersRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClustersRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClustersResponse",
    nextPageToken: "",
};
exports.ListClustersResponse = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClustersResponse",
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
    $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    securityGroupIds: "",
    deletionProtection: false,
};
exports.CreateClusterRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest",
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
                $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.LabelsEntry",
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
                    message.securityGroupIds.push(reader.string());
                    break;
                case 12:
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
        message.securityGroupIds = ((_e = object.securityGroupIds) !== null && _e !== void 0 ? _e : []).map((e) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterRequest.$type, exports.CreateClusterRequest);
const baseCreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata",
    clusterId: "",
};
exports.CreateClusterMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata",
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
    $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest",
    clusterId: "",
    description: "",
    name: "",
    securityGroupIds: "",
    deletionProtection: false,
};
exports.UpdateClusterRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest",
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
                $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata",
    clusterId: "",
};
exports.UpdateClusterMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata",
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
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest",
    clusterId: "",
};
exports.DeleteClusterRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata",
    clusterId: "",
};
exports.DeleteClusterMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata",
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
    $type: "yandex.cloud.mdb.mongodb.v1.StartClusterRequest",
    clusterId: "",
};
exports.StartClusterRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.StartClusterRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.StartClusterMetadata",
    clusterId: "",
};
exports.StartClusterMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.StartClusterMetadata",
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
    $type: "yandex.cloud.mdb.mongodb.v1.StopClusterRequest",
    clusterId: "",
};
exports.StopClusterRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.StopClusterRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.StopClusterMetadata",
    clusterId: "",
};
exports.StopClusterMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.StopClusterMetadata",
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
    $type: "yandex.cloud.mdb.mongodb.v1.MoveClusterRequest",
    clusterId: "",
    destinationFolderId: "",
};
exports.MoveClusterRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.MoveClusterRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata",
    clusterId: "",
    sourceFolderId: "",
    destinationFolderId: "",
};
exports.MoveClusterMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata",
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
    $type: "yandex.cloud.mdb.mongodb.v1.BackupClusterRequest",
    clusterId: "",
};
exports.BackupClusterRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.BackupClusterRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata",
    clusterId: "",
};
exports.BackupClusterMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata",
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
    $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest",
    backupId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    folderId: "",
    securityGroupIds: "",
    deletionProtection: false,
};
exports.RestoreClusterRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.RestoreClusterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.LabelsEntry",
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
        if (message.recoveryTargetSpec !== undefined) {
            exports.RestoreClusterRequest_RecoveryTargetSpec.encode(message.recoveryTargetSpec, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
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
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
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
                    message.recoveryTargetSpec =
                        exports.RestoreClusterRequest_RecoveryTargetSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 12:
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
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
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
        message.hostSpecs = ((_b = object.hostSpecs) !== null && _b !== void 0 ? _b : []).map((e) => exports.HostSpec.fromJSON(e));
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.recoveryTargetSpec =
            object.recoveryTargetSpec !== undefined &&
                object.recoveryTargetSpec !== null
                ? exports.RestoreClusterRequest_RecoveryTargetSpec.fromJSON(object.recoveryTargetSpec)
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
        message.backupId !== undefined && (obj.backupId = message.backupId);
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
        message.recoveryTargetSpec !== undefined &&
            (obj.recoveryTargetSpec = message.recoveryTargetSpec
                ? exports.RestoreClusterRequest_RecoveryTargetSpec.toJSON(message.recoveryTargetSpec)
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
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
        message.hostSpecs =
            ((_f = object.hostSpecs) === null || _f === void 0 ? void 0 : _f.map((e) => exports.HostSpec.fromPartial(e))) || [];
        message.networkId = (_g = object.networkId) !== null && _g !== void 0 ? _g : "";
        message.folderId = (_h = object.folderId) !== null && _h !== void 0 ? _h : "";
        message.recoveryTargetSpec =
            object.recoveryTargetSpec !== undefined &&
                object.recoveryTargetSpec !== null
                ? exports.RestoreClusterRequest_RecoveryTargetSpec.fromPartial(object.recoveryTargetSpec)
                : undefined;
        message.securityGroupIds = ((_j = object.securityGroupIds) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.deletionProtection = (_k = object.deletionProtection) !== null && _k !== void 0 ? _k : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreClusterRequest.$type, exports.RestoreClusterRequest);
const baseRestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.RestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.LabelsEntry",
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
const baseRestoreClusterRequest_RecoveryTargetSpec = {
    $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec",
    timestamp: 0,
};
exports.RestoreClusterRequest_RecoveryTargetSpec = {
    $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== 0) {
            writer.uint32(8).int64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreClusterRequest_RecoveryTargetSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestoreClusterRequest_RecoveryTargetSpec);
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? Number(object.timestamp)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = Math.round(message.timestamp));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRestoreClusterRequest_RecoveryTargetSpec);
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreClusterRequest_RecoveryTargetSpec.$type, exports.RestoreClusterRequest_RecoveryTargetSpec);
const baseRestoreClusterMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata",
    clusterId: "",
    backupId: "",
};
exports.RestoreClusterMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata",
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
    $type: "yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest",
    clusterId: "",
    rescheduleType: 0,
};
exports.RescheduleMaintenanceRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata",
    clusterId: "",
};
exports.RescheduleMaintenanceMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata",
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
    $type: "yandex.cloud.mdb.mongodb.v1.LogRecord",
};
exports.LogRecord = {
    $type: "yandex.cloud.mdb.mongodb.v1.LogRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.message).forEach(([key, value]) => {
            exports.LogRecord_MessageEntry.encode({
                $type: "yandex.cloud.mdb.mongodb.v1.LogRecord.MessageEntry",
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
    $type: "yandex.cloud.mdb.mongodb.v1.LogRecord.MessageEntry",
    key: "",
    value: "",
};
exports.LogRecord_MessageEntry = {
    $type: "yandex.cloud.mdb.mongodb.v1.LogRecord.MessageEntry",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    serviceType: 0,
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterLogsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse",
    nextPageToken: "",
};
exports.ListClusterLogsResponse = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse",
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
    $type: "yandex.cloud.mdb.mongodb.v1.StreamLogRecord",
    nextRecordToken: "",
};
exports.StreamLogRecord = {
    $type: "yandex.cloud.mdb.mongodb.v1.StreamLogRecord",
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
    $type: "yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    serviceType: 0,
    recordToken: "",
    filter: "",
};
exports.StreamClusterLogsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterOperationsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse",
    nextPageToken: "",
};
exports.ListClusterOperationsResponse = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterBackupsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse",
    nextPageToken: "",
};
exports.ListClusterBackupsResponse = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterHostsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse",
    nextPageToken: "",
};
exports.ListClusterHostsResponse = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse",
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
    $type: "yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest",
    clusterId: "",
};
exports.AddClusterHostsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.AddClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata",
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
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest",
    clusterId: "",
    hostNames: "",
};
exports.DeleteClusterHostsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.DeleteClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata",
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
const baseEnableClusterShardingRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest",
    clusterId: "",
};
exports.EnableClusterShardingRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mongocfg !== undefined) {
            exports.EnableClusterShardingRequest_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.EnableClusterShardingRequest_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.hostSpecs) {
            exports.HostSpec.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.EnableClusterShardingRequest_MongoInfra.encode(message.mongoinfra, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnableClusterShardingRequest);
        message.hostSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mongocfg = exports.EnableClusterShardingRequest_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.EnableClusterShardingRequest_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hostSpecs.push(exports.HostSpec.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.mongoinfra = exports.EnableClusterShardingRequest_MongoInfra.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseEnableClusterShardingRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.EnableClusterShardingRequest_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.EnableClusterShardingRequest_Mongos.fromJSON(object.mongos)
                : undefined;
        message.hostSpecs = ((_a = object.hostSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.HostSpec.fromJSON(e));
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.EnableClusterShardingRequest_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.EnableClusterShardingRequest_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.EnableClusterShardingRequest_Mongos.toJSON(message.mongos)
                : undefined);
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) => e ? exports.HostSpec.toJSON(e) : undefined);
        }
        else {
            obj.hostSpecs = [];
        }
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.EnableClusterShardingRequest_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseEnableClusterShardingRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.EnableClusterShardingRequest_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.EnableClusterShardingRequest_Mongos.fromPartial(object.mongos)
                : undefined;
        message.hostSpecs =
            ((_b = object.hostSpecs) === null || _b === void 0 ? void 0 : _b.map((e) => exports.HostSpec.fromPartial(e))) || [];
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.EnableClusterShardingRequest_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EnableClusterShardingRequest.$type, exports.EnableClusterShardingRequest);
const baseEnableClusterShardingRequest_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg",
};
exports.EnableClusterShardingRequest_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnableClusterShardingRequest_MongoCfg);
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
        const message = Object.assign({}, baseEnableClusterShardingRequest_MongoCfg);
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
        const message = Object.assign({}, baseEnableClusterShardingRequest_MongoCfg);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EnableClusterShardingRequest_MongoCfg.$type, exports.EnableClusterShardingRequest_MongoCfg);
const baseEnableClusterShardingRequest_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos",
};
exports.EnableClusterShardingRequest_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnableClusterShardingRequest_Mongos);
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
        const message = Object.assign({}, baseEnableClusterShardingRequest_Mongos);
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
        const message = Object.assign({}, baseEnableClusterShardingRequest_Mongos);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EnableClusterShardingRequest_Mongos.$type, exports.EnableClusterShardingRequest_Mongos);
const baseEnableClusterShardingRequest_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra",
};
exports.EnableClusterShardingRequest_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnableClusterShardingRequest_MongoInfra);
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
        const message = Object.assign({}, baseEnableClusterShardingRequest_MongoInfra);
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
        const message = Object.assign({}, baseEnableClusterShardingRequest_MongoInfra);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EnableClusterShardingRequest_MongoInfra.$type, exports.EnableClusterShardingRequest_MongoInfra);
const baseEnableClusterShardingMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata",
    clusterId: "",
};
exports.EnableClusterShardingMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnableClusterShardingMetadata);
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
        const message = Object.assign({}, baseEnableClusterShardingMetadata);
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
        const message = Object.assign({}, baseEnableClusterShardingMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EnableClusterShardingMetadata.$type, exports.EnableClusterShardingMetadata);
const baseGetClusterShardRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest",
    clusterId: "",
    shardName: "",
};
exports.GetClusterShardRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterShardsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse",
    nextPageToken: "",
};
exports.ListClusterShardsResponse = {
    $type: "yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse",
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
    $type: "yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest",
    clusterId: "",
    shardName: "",
};
exports.AddClusterShardRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== "") {
            writer.uint32(18).string(message.shardName);
        }
        for (const v of message.hostSpecs) {
            exports.HostSpec.encode(v, writer.uint32(26).fork()).ldelim();
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
        const message = Object.assign({}, baseAddClusterShardRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        message.hostSpecs = ((_a = object.hostSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.HostSpec.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) => e ? exports.HostSpec.toJSON(e) : undefined);
        }
        else {
            obj.hostSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAddClusterShardRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.shardName = (_b = object.shardName) !== null && _b !== void 0 ? _b : "";
        message.hostSpecs =
            ((_c = object.hostSpecs) === null || _c === void 0 ? void 0 : _c.map((e) => exports.HostSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddClusterShardRequest.$type, exports.AddClusterShardRequest);
const baseAddClusterShardMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata",
    clusterId: "",
    shardName: "",
};
exports.AddClusterShardMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata",
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
const baseDeleteClusterShardRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest",
    clusterId: "",
    shardName: "",
};
exports.DeleteClusterShardRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest",
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
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata",
    clusterId: "",
    shardName: "",
};
exports.DeleteClusterShardMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata",
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
const baseResetupHostsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest",
    clusterId: "",
    hostNames: "",
};
exports.ResetupHostsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest",
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
        const message = Object.assign({}, baseResetupHostsRequest);
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
        const message = Object.assign({}, baseResetupHostsRequest);
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
        const message = Object.assign({}, baseResetupHostsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostNames = ((_b = object.hostNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResetupHostsRequest.$type, exports.ResetupHostsRequest);
const baseResetupHostsMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.ResetupHostsMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata",
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
        const message = Object.assign({}, baseResetupHostsMetadata);
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
        const message = Object.assign({}, baseResetupHostsMetadata);
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
        const message = Object.assign({}, baseResetupHostsMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostNames = ((_b = object.hostNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResetupHostsMetadata.$type, exports.ResetupHostsMetadata);
const baseRestartHostsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.RestartHostsRequest",
    clusterId: "",
    hostNames: "",
};
exports.RestartHostsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.RestartHostsRequest",
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
        const message = Object.assign({}, baseRestartHostsRequest);
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
        const message = Object.assign({}, baseRestartHostsRequest);
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
        const message = Object.assign({}, baseRestartHostsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostNames = ((_b = object.hostNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestartHostsRequest.$type, exports.RestartHostsRequest);
const baseRestartHostsMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.RestartHostsMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata",
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
        const message = Object.assign({}, baseRestartHostsMetadata);
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
        const message = Object.assign({}, baseRestartHostsMetadata);
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
        const message = Object.assign({}, baseRestartHostsMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostNames = ((_b = object.hostNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestartHostsMetadata.$type, exports.RestartHostsMetadata);
const baseStepdownHostsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest",
    clusterId: "",
    hostNames: "",
};
exports.StepdownHostsRequest = {
    $type: "yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest",
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
        const message = Object.assign({}, baseStepdownHostsRequest);
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
        const message = Object.assign({}, baseStepdownHostsRequest);
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
        const message = Object.assign({}, baseStepdownHostsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostNames = ((_b = object.hostNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StepdownHostsRequest.$type, exports.StepdownHostsRequest);
const baseStepdownHostsMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.StepdownHostsMetadata = {
    $type: "yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata",
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
        const message = Object.assign({}, baseStepdownHostsMetadata);
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
        const message = Object.assign({}, baseStepdownHostsMetadata);
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
        const message = Object.assign({}, baseStepdownHostsMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.hostNames = ((_b = object.hostNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StepdownHostsMetadata.$type, exports.StepdownHostsMetadata);
const baseHostSpec = {
    $type: "yandex.cloud.mdb.mongodb.v1.HostSpec",
    zoneId: "",
    subnetId: "",
    assignPublicIp: false,
    type: 0,
    shardName: "",
};
exports.HostSpec = {
    $type: "yandex.cloud.mdb.mongodb.v1.HostSpec",
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
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
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
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.assignPublicIp = reader.bool();
                    break;
                case 4:
                    message.type = reader.int32();
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
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.type =
            object.type !== undefined && object.type !== null
                ? (0, cluster_1.host_TypeFromJSON)(object.type)
                : 0;
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.type !== undefined && (obj.type = (0, cluster_1.host_TypeToJSON)(message.type));
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseHostSpec);
        message.zoneId = (_a = object.zoneId) !== null && _a !== void 0 ? _a : "";
        message.subnetId = (_b = object.subnetId) !== null && _b !== void 0 ? _b : "";
        message.assignPublicIp = (_c = object.assignPublicIp) !== null && _c !== void 0 ? _c : false;
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 0;
        message.shardName = (_e = object.shardName) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HostSpec.$type, exports.HostSpec);
const baseMongodbspec36 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6",
};
exports.Mongodbspec36 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodbspec36_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodbspec36_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodbspec36_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodbspec36_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec36);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodbspec36_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodbspec36_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodbspec36_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodbspec36_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodbspec36);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec36_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec36_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec36_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec36_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodbspec36_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodbspec36_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodbspec36_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodbspec36_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec36);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec36_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec36_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec36_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec36_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec36.$type, exports.Mongodbspec36);
const baseMongodbspec36_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod",
};
exports.Mongodbspec36_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb3_6_1.Mongodconfig36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec36_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb3_6_1.Mongodconfig36.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec36_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongodconfig36.fromJSON(object.config)
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
                ? mongodb3_6_1.Mongodconfig36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec36_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongodconfig36.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec36_Mongod.$type, exports.Mongodbspec36_Mongod);
const baseMongodbspec36_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg",
};
exports.Mongodbspec36_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb3_6_1.Mongocfgconfig36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec36_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb3_6_1.Mongocfgconfig36.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec36_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongocfgconfig36.fromJSON(object.config)
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
                ? mongodb3_6_1.Mongocfgconfig36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec36_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongocfgconfig36.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec36_MongoCfg.$type, exports.Mongodbspec36_MongoCfg);
const baseMongodbspec36_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos",
};
exports.Mongodbspec36_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb3_6_1.Mongosconfig36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec36_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb3_6_1.Mongosconfig36.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec36_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongosconfig36.fromJSON(object.config)
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
                ? mongodb3_6_1.Mongosconfig36.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec36_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb3_6_1.Mongosconfig36.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec36_Mongos.$type, exports.Mongodbspec36_Mongos);
const baseMongodbspec36_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra",
};
exports.Mongodbspec36_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb3_6_1.Mongosconfig36.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb3_6_1.Mongocfgconfig36.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec36_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb3_6_1.Mongosconfig36.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb3_6_1.Mongocfgconfig36.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodbspec36_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb3_6_1.Mongosconfig36.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb3_6_1.Mongocfgconfig36.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb3_6_1.Mongosconfig36.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb3_6_1.Mongocfgconfig36.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec36_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb3_6_1.Mongosconfig36.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb3_6_1.Mongocfgconfig36.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec36_MongoInfra.$type, exports.Mongodbspec36_MongoInfra);
const baseMongodbspec40 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0",
};
exports.Mongodbspec40 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodbspec40_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodbspec40_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodbspec40_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodbspec40_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec40);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodbspec40_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodbspec40_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodbspec40_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodbspec40_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodbspec40);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec40_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec40_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec40_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec40_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodbspec40_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodbspec40_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodbspec40_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodbspec40_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec40);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec40_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec40_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec40_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec40_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec40.$type, exports.Mongodbspec40);
const baseMongodbspec40_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod",
};
exports.Mongodbspec40_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_0_1.Mongodconfig40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec40_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_0_1.Mongodconfig40.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec40_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongodconfig40.fromJSON(object.config)
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
                ? mongodb4_0_1.Mongodconfig40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec40_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongodconfig40.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec40_Mongod.$type, exports.Mongodbspec40_Mongod);
const baseMongodbspec40_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg",
};
exports.Mongodbspec40_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_0_1.Mongocfgconfig40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec40_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_0_1.Mongocfgconfig40.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec40_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongocfgconfig40.fromJSON(object.config)
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
                ? mongodb4_0_1.Mongocfgconfig40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec40_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongocfgconfig40.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec40_MongoCfg.$type, exports.Mongodbspec40_MongoCfg);
const baseMongodbspec40_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos",
};
exports.Mongodbspec40_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_0_1.Mongosconfig40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec40_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_0_1.Mongosconfig40.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec40_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongosconfig40.fromJSON(object.config)
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
                ? mongodb4_0_1.Mongosconfig40.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec40_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_0_1.Mongosconfig40.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec40_Mongos.$type, exports.Mongodbspec40_Mongos);
const baseMongodbspec40_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra",
};
exports.Mongodbspec40_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb4_0_1.Mongosconfig40.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb4_0_1.Mongocfgconfig40.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec40_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb4_0_1.Mongosconfig40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb4_0_1.Mongocfgconfig40.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodbspec40_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_0_1.Mongosconfig40.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_0_1.Mongocfgconfig40.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb4_0_1.Mongosconfig40.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb4_0_1.Mongocfgconfig40.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec40_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_0_1.Mongosconfig40.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_0_1.Mongocfgconfig40.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec40_MongoInfra.$type, exports.Mongodbspec40_MongoInfra);
const baseMongodbspec42 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2",
};
exports.Mongodbspec42 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodbspec42_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodbspec42_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodbspec42_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodbspec42_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec42);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodbspec42_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodbspec42_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodbspec42_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodbspec42_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodbspec42);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec42_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec42_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec42_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec42_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodbspec42_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodbspec42_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodbspec42_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodbspec42_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec42);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec42_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec42_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec42_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec42_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec42.$type, exports.Mongodbspec42);
const baseMongodbspec42_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod",
};
exports.Mongodbspec42_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_2_1.Mongodconfig42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec42_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_2_1.Mongodconfig42.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec42_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongodconfig42.fromJSON(object.config)
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
                ? mongodb4_2_1.Mongodconfig42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec42_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongodconfig42.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec42_Mongod.$type, exports.Mongodbspec42_Mongod);
const baseMongodbspec42_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg",
};
exports.Mongodbspec42_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_2_1.Mongocfgconfig42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec42_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_2_1.Mongocfgconfig42.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec42_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongocfgconfig42.fromJSON(object.config)
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
                ? mongodb4_2_1.Mongocfgconfig42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec42_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongocfgconfig42.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec42_MongoCfg.$type, exports.Mongodbspec42_MongoCfg);
const baseMongodbspec42_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos",
};
exports.Mongodbspec42_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_2_1.Mongosconfig42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec42_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_2_1.Mongosconfig42.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec42_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongosconfig42.fromJSON(object.config)
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
                ? mongodb4_2_1.Mongosconfig42.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec42_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_2_1.Mongosconfig42.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec42_Mongos.$type, exports.Mongodbspec42_Mongos);
const baseMongodbspec42_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra",
};
exports.Mongodbspec42_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb4_2_1.Mongosconfig42.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb4_2_1.Mongocfgconfig42.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec42_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb4_2_1.Mongosconfig42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb4_2_1.Mongocfgconfig42.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodbspec42_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_2_1.Mongosconfig42.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_2_1.Mongocfgconfig42.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb4_2_1.Mongosconfig42.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb4_2_1.Mongocfgconfig42.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec42_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_2_1.Mongosconfig42.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_2_1.Mongocfgconfig42.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec42_MongoInfra.$type, exports.Mongodbspec42_MongoInfra);
const baseMongodbspec44 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4",
};
exports.Mongodbspec44 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodbspec44_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodbspec44_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodbspec44_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodbspec44_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec44);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodbspec44_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodbspec44_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodbspec44_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodbspec44_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodbspec44);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec44_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec44_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec44_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec44_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodbspec44_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodbspec44_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodbspec44_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodbspec44_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec44);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec44_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec44_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec44_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec44_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec44.$type, exports.Mongodbspec44);
const baseMongodbspec44_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod",
};
exports.Mongodbspec44_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_1.Mongodconfig44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec44_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_1.Mongodconfig44.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec44_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongodconfig44.fromJSON(object.config)
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
                ? mongodb4_4_1.Mongodconfig44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec44_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongodconfig44.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec44_Mongod.$type, exports.Mongodbspec44_Mongod);
const baseMongodbspec44_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg",
};
exports.Mongodbspec44_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_1.Mongocfgconfig44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec44_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_1.Mongocfgconfig44.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec44_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongocfgconfig44.fromJSON(object.config)
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
                ? mongodb4_4_1.Mongocfgconfig44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec44_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongocfgconfig44.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec44_MongoCfg.$type, exports.Mongodbspec44_MongoCfg);
const baseMongodbspec44_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos",
};
exports.Mongodbspec44_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_1.Mongosconfig44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec44_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_1.Mongosconfig44.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec44_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongosconfig44.fromJSON(object.config)
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
                ? mongodb4_4_1.Mongosconfig44.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec44_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_1.Mongosconfig44.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec44_Mongos.$type, exports.Mongodbspec44_Mongos);
const baseMongodbspec44_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra",
};
exports.Mongodbspec44_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb4_4_1.Mongosconfig44.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb4_4_1.Mongocfgconfig44.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec44_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb4_4_1.Mongosconfig44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb4_4_1.Mongocfgconfig44.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodbspec44_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_4_1.Mongosconfig44.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_4_1.Mongocfgconfig44.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb4_4_1.Mongosconfig44.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb4_4_1.Mongocfgconfig44.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec44_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_4_1.Mongosconfig44.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_4_1.Mongocfgconfig44.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec44_MongoInfra.$type, exports.Mongodbspec44_MongoInfra);
const baseMongodbspec44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise",
};
exports.Mongodbspec44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodbspec44Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodbspec44Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodbspec44Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodbspec44Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec44Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodbspec44Enterprise_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodbspec44Enterprise_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodbspec44Enterprise_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodbspec44Enterprise_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodbspec44Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec44Enterprise_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec44Enterprise_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec44Enterprise_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec44Enterprise_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodbspec44Enterprise_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodbspec44Enterprise_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodbspec44Enterprise_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodbspec44Enterprise_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec44Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec44Enterprise_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec44Enterprise_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec44Enterprise_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec44Enterprise_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec44Enterprise.$type, exports.Mongodbspec44Enterprise);
const baseMongodbspec44Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod",
};
exports.Mongodbspec44Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_enterprise_1.Mongodconfig44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec44Enterprise_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_enterprise_1.Mongodconfig44Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec44Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongodconfig44Enterprise.fromJSON(object.config)
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
                ? mongodb4_4_enterprise_1.Mongodconfig44Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec44Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongodconfig44Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec44Enterprise_Mongod.$type, exports.Mongodbspec44Enterprise_Mongod);
const baseMongodbspec44Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg",
};
exports.Mongodbspec44Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_enterprise_1.Mongocfgconfig44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec44Enterprise_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_enterprise_1.Mongocfgconfig44Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec44Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongocfgconfig44Enterprise.fromJSON(object.config)
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
                ? mongodb4_4_enterprise_1.Mongocfgconfig44Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec44Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongocfgconfig44Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec44Enterprise_MongoCfg.$type, exports.Mongodbspec44Enterprise_MongoCfg);
const baseMongodbspec44Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos",
};
exports.Mongodbspec44Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb4_4_enterprise_1.Mongosconfig44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec44Enterprise_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb4_4_enterprise_1.Mongosconfig44Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec44Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongosconfig44Enterprise.fromJSON(object.config)
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
                ? mongodb4_4_enterprise_1.Mongosconfig44Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec44Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb4_4_enterprise_1.Mongosconfig44Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec44Enterprise_Mongos.$type, exports.Mongodbspec44Enterprise_Mongos);
const baseMongodbspec44Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra",
};
exports.Mongodbspec44Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb4_4_enterprise_1.Mongosconfig44Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb4_4_enterprise_1.Mongocfgconfig44Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec44Enterprise_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb4_4_enterprise_1.Mongosconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb4_4_enterprise_1.Mongocfgconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodbspec44Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_4_enterprise_1.Mongosconfig44Enterprise.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_4_enterprise_1.Mongocfgconfig44Enterprise.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb4_4_enterprise_1.Mongosconfig44Enterprise.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb4_4_enterprise_1.Mongocfgconfig44Enterprise.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec44Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb4_4_enterprise_1.Mongosconfig44Enterprise.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb4_4_enterprise_1.Mongocfgconfig44Enterprise.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec44Enterprise_MongoInfra.$type, exports.Mongodbspec44Enterprise_MongoInfra);
const baseMongodbspec50 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0",
};
exports.Mongodbspec50 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodbspec50_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodbspec50_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodbspec50_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodbspec50_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec50);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodbspec50_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodbspec50_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodbspec50_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodbspec50_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodbspec50);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec50_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec50_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec50_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec50_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodbspec50_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodbspec50_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodbspec50_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodbspec50_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec50);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec50_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec50_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec50_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec50_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec50.$type, exports.Mongodbspec50);
const baseMongodbspec50_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod",
};
exports.Mongodbspec50_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_1.Mongodconfig50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec50_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_1.Mongodconfig50.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec50_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongodconfig50.fromJSON(object.config)
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
                ? mongodb5_0_1.Mongodconfig50.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec50_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongodconfig50.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec50_Mongod.$type, exports.Mongodbspec50_Mongod);
const baseMongodbspec50_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg",
};
exports.Mongodbspec50_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_1.Mongocfgconfig50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec50_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_1.Mongocfgconfig50.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec50_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongocfgconfig50.fromJSON(object.config)
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
                ? mongodb5_0_1.Mongocfgconfig50.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec50_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongocfgconfig50.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec50_MongoCfg.$type, exports.Mongodbspec50_MongoCfg);
const baseMongodbspec50_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos",
};
exports.Mongodbspec50_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_1.Mongosconfig50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec50_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_1.Mongosconfig50.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec50_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongosconfig50.fromJSON(object.config)
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
                ? mongodb5_0_1.Mongosconfig50.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec50_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_1.Mongosconfig50.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec50_Mongos.$type, exports.Mongodbspec50_Mongos);
const baseMongodbspec50_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra",
};
exports.Mongodbspec50_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb5_0_1.Mongosconfig50.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb5_0_1.Mongocfgconfig50.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec50_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb5_0_1.Mongosconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb5_0_1.Mongocfgconfig50.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodbspec50_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb5_0_1.Mongosconfig50.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb5_0_1.Mongocfgconfig50.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb5_0_1.Mongosconfig50.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb5_0_1.Mongocfgconfig50.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec50_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb5_0_1.Mongosconfig50.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb5_0_1.Mongocfgconfig50.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec50_MongoInfra.$type, exports.Mongodbspec50_MongoInfra);
const baseMongodbspec50Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise",
};
exports.Mongodbspec50Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodbspec50Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodbspec50Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodbspec50Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodbspec50Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec50Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodbspec50Enterprise_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodbspec50Enterprise_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodbspec50Enterprise_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodbspec50Enterprise_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodbspec50Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec50Enterprise_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec50Enterprise_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec50Enterprise_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec50Enterprise_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodbspec50Enterprise_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodbspec50Enterprise_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodbspec50Enterprise_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodbspec50Enterprise_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec50Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec50Enterprise_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec50Enterprise_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec50Enterprise_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec50Enterprise_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec50Enterprise.$type, exports.Mongodbspec50Enterprise);
const baseMongodbspec50Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod",
};
exports.Mongodbspec50Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_enterprise_1.Mongodconfig50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec50Enterprise_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_enterprise_1.Mongodconfig50Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec50Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongodconfig50Enterprise.fromJSON(object.config)
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
                ? mongodb5_0_enterprise_1.Mongodconfig50Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec50Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongodconfig50Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec50Enterprise_Mongod.$type, exports.Mongodbspec50Enterprise_Mongod);
const baseMongodbspec50Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg",
};
exports.Mongodbspec50Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_enterprise_1.Mongocfgconfig50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec50Enterprise_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_enterprise_1.Mongocfgconfig50Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec50Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongocfgconfig50Enterprise.fromJSON(object.config)
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
                ? mongodb5_0_enterprise_1.Mongocfgconfig50Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec50Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongocfgconfig50Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec50Enterprise_MongoCfg.$type, exports.Mongodbspec50Enterprise_MongoCfg);
const baseMongodbspec50Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos",
};
exports.Mongodbspec50Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb5_0_enterprise_1.Mongosconfig50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec50Enterprise_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb5_0_enterprise_1.Mongosconfig50Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec50Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongosconfig50Enterprise.fromJSON(object.config)
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
                ? mongodb5_0_enterprise_1.Mongosconfig50Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec50Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb5_0_enterprise_1.Mongosconfig50Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec50Enterprise_Mongos.$type, exports.Mongodbspec50Enterprise_Mongos);
const baseMongodbspec50Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra",
};
exports.Mongodbspec50Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb5_0_enterprise_1.Mongosconfig50Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb5_0_enterprise_1.Mongocfgconfig50Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec50Enterprise_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb5_0_enterprise_1.Mongosconfig50Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb5_0_enterprise_1.Mongocfgconfig50Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodbspec50Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb5_0_enterprise_1.Mongosconfig50Enterprise.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb5_0_enterprise_1.Mongocfgconfig50Enterprise.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb5_0_enterprise_1.Mongosconfig50Enterprise.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb5_0_enterprise_1.Mongocfgconfig50Enterprise.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec50Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb5_0_enterprise_1.Mongosconfig50Enterprise.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb5_0_enterprise_1.Mongocfgconfig50Enterprise.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec50Enterprise_MongoInfra.$type, exports.Mongodbspec50Enterprise_MongoInfra);
const baseMongodbspec60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0",
};
exports.Mongodbspec60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodbspec60_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodbspec60_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodbspec60_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodbspec60_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec60);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodbspec60_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodbspec60_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodbspec60_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodbspec60_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodbspec60);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec60_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec60_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec60_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec60_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodbspec60_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodbspec60_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodbspec60_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodbspec60_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec60);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec60_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec60_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec60_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec60_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec60.$type, exports.Mongodbspec60);
const baseMongodbspec60_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.Mongod",
};
exports.Mongodbspec60_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_1.Mongodconfig60.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec60_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_1.Mongodconfig60.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec60_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongodconfig60.fromJSON(object.config)
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
                ? mongodb6_0_1.Mongodconfig60.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec60_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongodconfig60.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec60_Mongod.$type, exports.Mongodbspec60_Mongod);
const baseMongodbspec60_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.MongoCfg",
};
exports.Mongodbspec60_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_1.Mongocfgconfig60.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec60_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_1.Mongocfgconfig60.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec60_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongocfgconfig60.fromJSON(object.config)
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
                ? mongodb6_0_1.Mongocfgconfig60.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec60_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongocfgconfig60.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec60_MongoCfg.$type, exports.Mongodbspec60_MongoCfg);
const baseMongodbspec60_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.Mongos",
};
exports.Mongodbspec60_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_1.Mongosconfig60.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec60_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_1.Mongosconfig60.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec60_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongosconfig60.fromJSON(object.config)
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
                ? mongodb6_0_1.Mongosconfig60.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec60_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_1.Mongosconfig60.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec60_Mongos.$type, exports.Mongodbspec60_Mongos);
const baseMongodbspec60_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.MongoInfra",
};
exports.Mongodbspec60_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb6_0_1.Mongosconfig60.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb6_0_1.Mongocfgconfig60.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec60_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb6_0_1.Mongosconfig60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb6_0_1.Mongocfgconfig60.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodbspec60_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb6_0_1.Mongosconfig60.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb6_0_1.Mongocfgconfig60.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb6_0_1.Mongosconfig60.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb6_0_1.Mongocfgconfig60.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec60_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb6_0_1.Mongosconfig60.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb6_0_1.Mongocfgconfig60.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec60_MongoInfra.$type, exports.Mongodbspec60_MongoInfra);
const baseMongodbspec60Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise",
};
exports.Mongodbspec60Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mongod !== undefined) {
            exports.Mongodbspec60Enterprise_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            exports.Mongodbspec60Enterprise_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            exports.Mongodbspec60Enterprise_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            exports.Mongodbspec60Enterprise_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec60Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = exports.Mongodbspec60Enterprise_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = exports.Mongodbspec60Enterprise_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = exports.Mongodbspec60Enterprise_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = exports.Mongodbspec60Enterprise_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodbspec60Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec60Enterprise_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec60Enterprise_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec60Enterprise_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec60Enterprise_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? exports.Mongodbspec60Enterprise_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? exports.Mongodbspec60Enterprise_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? exports.Mongodbspec60Enterprise_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? exports.Mongodbspec60Enterprise_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec60Enterprise);
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? exports.Mongodbspec60Enterprise_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? exports.Mongodbspec60Enterprise_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? exports.Mongodbspec60Enterprise_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? exports.Mongodbspec60Enterprise_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec60Enterprise.$type, exports.Mongodbspec60Enterprise);
const baseMongodbspec60Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.Mongod",
};
exports.Mongodbspec60Enterprise_Mongod = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.Mongod",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_enterprise_1.Mongodconfig60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec60Enterprise_Mongod);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_enterprise_1.Mongodconfig60Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec60Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongodconfig60Enterprise.fromJSON(object.config)
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
                ? mongodb6_0_enterprise_1.Mongodconfig60Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec60Enterprise_Mongod);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongodconfig60Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec60Enterprise_Mongod.$type, exports.Mongodbspec60Enterprise_Mongod);
const baseMongodbspec60Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.MongoCfg",
};
exports.Mongodbspec60Enterprise_MongoCfg = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.MongoCfg",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_enterprise_1.Mongocfgconfig60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec60Enterprise_MongoCfg);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_enterprise_1.Mongocfgconfig60Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec60Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongocfgconfig60Enterprise.fromJSON(object.config)
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
                ? mongodb6_0_enterprise_1.Mongocfgconfig60Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec60Enterprise_MongoCfg);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongocfgconfig60Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec60Enterprise_MongoCfg.$type, exports.Mongodbspec60Enterprise_MongoCfg);
const baseMongodbspec60Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.Mongos",
};
exports.Mongodbspec60Enterprise_Mongos = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.Mongos",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            mongodb6_0_enterprise_1.Mongosconfig60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec60Enterprise_Mongos);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = mongodb6_0_enterprise_1.Mongosconfig60Enterprise.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseMongodbspec60Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongosconfig60Enterprise.fromJSON(object.config)
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
                ? mongodb6_0_enterprise_1.Mongosconfig60Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec60Enterprise_Mongos);
        message.config =
            object.config !== undefined && object.config !== null
                ? mongodb6_0_enterprise_1.Mongosconfig60Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec60Enterprise_Mongos.$type, exports.Mongodbspec60Enterprise_Mongos);
const baseMongodbspec60Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.MongoInfra",
};
exports.Mongodbspec60Enterprise_MongoInfra = {
    $type: "yandex.cloud.mdb.mongodb.v1.MongodbSpec6_0_enterprise.MongoInfra",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.configMongos !== undefined) {
            mongodb6_0_enterprise_1.Mongosconfig60Enterprise.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            mongodb6_0_enterprise_1.Mongocfgconfig60Enterprise.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodbspec60Enterprise_MongoInfra);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = mongodb6_0_enterprise_1.Mongosconfig60Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = mongodb6_0_enterprise_1.Mongocfgconfig60Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseMongodbspec60Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb6_0_enterprise_1.Mongosconfig60Enterprise.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb6_0_enterprise_1.Mongocfgconfig60Enterprise.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? mongodb6_0_enterprise_1.Mongosconfig60Enterprise.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? mongodb6_0_enterprise_1.Mongocfgconfig60Enterprise.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodbspec60Enterprise_MongoInfra);
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? mongodb6_0_enterprise_1.Mongosconfig60Enterprise.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? mongodb6_0_enterprise_1.Mongocfgconfig60Enterprise.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodbspec60Enterprise_MongoInfra.$type, exports.Mongodbspec60Enterprise_MongoInfra);
const baseConfigSpec = {
    $type: "yandex.cloud.mdb.mongodb.v1.ConfigSpec",
    version: "",
    featureCompatibilityVersion: "",
};
exports.ConfigSpec = {
    $type: "yandex.cloud.mdb.mongodb.v1.ConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.featureCompatibilityVersion !== "") {
            writer.uint32(42).string(message.featureCompatibilityVersion);
        }
        if (message.mongodbSpec36 !== undefined) {
            exports.Mongodbspec36.encode(message.mongodbSpec36, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongodbSpec40 !== undefined) {
            exports.Mongodbspec40.encode(message.mongodbSpec40, writer.uint32(34).fork()).ldelim();
        }
        if (message.mongodbSpec42 !== undefined) {
            exports.Mongodbspec42.encode(message.mongodbSpec42, writer.uint32(58).fork()).ldelim();
        }
        if (message.mongodbSpec44 !== undefined) {
            exports.Mongodbspec44.encode(message.mongodbSpec44, writer.uint32(66).fork()).ldelim();
        }
        if (message.mongodbSpec50 !== undefined) {
            exports.Mongodbspec50.encode(message.mongodbSpec50, writer.uint32(82).fork()).ldelim();
        }
        if (message.mongodbSpec60 !== undefined) {
            exports.Mongodbspec60.encode(message.mongodbSpec60, writer.uint32(114).fork()).ldelim();
        }
        if (message.mongodbSpec44Enterprise !== undefined) {
            exports.Mongodbspec44Enterprise.encode(message.mongodbSpec44Enterprise, writer.uint32(90).fork()).ldelim();
        }
        if (message.mongodbSpec50Enterprise !== undefined) {
            exports.Mongodbspec50Enterprise.encode(message.mongodbSpec50Enterprise, writer.uint32(98).fork()).ldelim();
        }
        if (message.mongodbSpec60Enterprise !== undefined) {
            exports.Mongodbspec60Enterprise.encode(message.mongodbSpec60Enterprise, writer.uint32(122).fork()).ldelim();
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
            cluster_1.PerformanceDiagnosticsConfig.encode(message.performanceDiagnostics, writer.uint32(106).fork()).ldelim();
        }
        if (message.access !== undefined) {
            cluster_1.Access.encode(message.access, writer.uint32(50).fork()).ldelim();
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
                case 5:
                    message.featureCompatibilityVersion = reader.string();
                    break;
                case 2:
                    message.mongodbSpec36 = exports.Mongodbspec36.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongodbSpec40 = exports.Mongodbspec40.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.mongodbSpec42 = exports.Mongodbspec42.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.mongodbSpec44 = exports.Mongodbspec44.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.mongodbSpec50 = exports.Mongodbspec50.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.mongodbSpec60 = exports.Mongodbspec60.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.mongodbSpec44Enterprise = exports.Mongodbspec44Enterprise.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.mongodbSpec50Enterprise = exports.Mongodbspec50Enterprise.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.mongodbSpec60Enterprise = exports.Mongodbspec60Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.backupWindowStart = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.backupRetainPeriodDays = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.performanceDiagnostics = cluster_1.PerformanceDiagnosticsConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.access = cluster_1.Access.decode(reader, reader.uint32());
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
        message.featureCompatibilityVersion =
            object.featureCompatibilityVersion !== undefined &&
                object.featureCompatibilityVersion !== null
                ? String(object.featureCompatibilityVersion)
                : "";
        message.mongodbSpec36 =
            object.mongodbSpec_3_6 !== undefined && object.mongodbSpec_3_6 !== null
                ? exports.Mongodbspec36.fromJSON(object.mongodbSpec_3_6)
                : undefined;
        message.mongodbSpec40 =
            object.mongodbSpec_4_0 !== undefined && object.mongodbSpec_4_0 !== null
                ? exports.Mongodbspec40.fromJSON(object.mongodbSpec_4_0)
                : undefined;
        message.mongodbSpec42 =
            object.mongodbSpec_4_2 !== undefined && object.mongodbSpec_4_2 !== null
                ? exports.Mongodbspec42.fromJSON(object.mongodbSpec_4_2)
                : undefined;
        message.mongodbSpec44 =
            object.mongodbSpec_4_4 !== undefined && object.mongodbSpec_4_4 !== null
                ? exports.Mongodbspec44.fromJSON(object.mongodbSpec_4_4)
                : undefined;
        message.mongodbSpec50 =
            object.mongodbSpec_5_0 !== undefined && object.mongodbSpec_5_0 !== null
                ? exports.Mongodbspec50.fromJSON(object.mongodbSpec_5_0)
                : undefined;
        message.mongodbSpec60 =
            object.mongodbSpec_6_0 !== undefined && object.mongodbSpec_6_0 !== null
                ? exports.Mongodbspec60.fromJSON(object.mongodbSpec_6_0)
                : undefined;
        message.mongodbSpec44Enterprise =
            object.mongodbSpec_4_4_enterprise !== undefined &&
                object.mongodbSpec_4_4_enterprise !== null
                ? exports.Mongodbspec44Enterprise.fromJSON(object.mongodbSpec_4_4_enterprise)
                : undefined;
        message.mongodbSpec50Enterprise =
            object.mongodbSpec_5_0_enterprise !== undefined &&
                object.mongodbSpec_5_0_enterprise !== null
                ? exports.Mongodbspec50Enterprise.fromJSON(object.mongodbSpec_5_0_enterprise)
                : undefined;
        message.mongodbSpec60Enterprise =
            object.mongodbSpec_6_0_enterprise !== undefined &&
                object.mongodbSpec_6_0_enterprise !== null
                ? exports.Mongodbspec60Enterprise.fromJSON(object.mongodbSpec_6_0_enterprise)
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
                ? cluster_1.PerformanceDiagnosticsConfig.fromJSON(object.performanceDiagnostics)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? cluster_1.Access.fromJSON(object.access)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.featureCompatibilityVersion !== undefined &&
            (obj.featureCompatibilityVersion = message.featureCompatibilityVersion);
        message.mongodbSpec36 !== undefined &&
            (obj.mongodbSpec_3_6 = message.mongodbSpec36
                ? exports.Mongodbspec36.toJSON(message.mongodbSpec36)
                : undefined);
        message.mongodbSpec40 !== undefined &&
            (obj.mongodbSpec_4_0 = message.mongodbSpec40
                ? exports.Mongodbspec40.toJSON(message.mongodbSpec40)
                : undefined);
        message.mongodbSpec42 !== undefined &&
            (obj.mongodbSpec_4_2 = message.mongodbSpec42
                ? exports.Mongodbspec42.toJSON(message.mongodbSpec42)
                : undefined);
        message.mongodbSpec44 !== undefined &&
            (obj.mongodbSpec_4_4 = message.mongodbSpec44
                ? exports.Mongodbspec44.toJSON(message.mongodbSpec44)
                : undefined);
        message.mongodbSpec50 !== undefined &&
            (obj.mongodbSpec_5_0 = message.mongodbSpec50
                ? exports.Mongodbspec50.toJSON(message.mongodbSpec50)
                : undefined);
        message.mongodbSpec60 !== undefined &&
            (obj.mongodbSpec_6_0 = message.mongodbSpec60
                ? exports.Mongodbspec60.toJSON(message.mongodbSpec60)
                : undefined);
        message.mongodbSpec44Enterprise !== undefined &&
            (obj.mongodbSpec_4_4_enterprise = message.mongodbSpec44Enterprise
                ? exports.Mongodbspec44Enterprise.toJSON(message.mongodbSpec44Enterprise)
                : undefined);
        message.mongodbSpec50Enterprise !== undefined &&
            (obj.mongodbSpec_5_0_enterprise = message.mongodbSpec50Enterprise
                ? exports.Mongodbspec50Enterprise.toJSON(message.mongodbSpec50Enterprise)
                : undefined);
        message.mongodbSpec60Enterprise !== undefined &&
            (obj.mongodbSpec_6_0_enterprise = message.mongodbSpec60Enterprise
                ? exports.Mongodbspec60Enterprise.toJSON(message.mongodbSpec60Enterprise)
                : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? timeofday_1.TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.backupRetainPeriodDays !== undefined &&
            (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
        message.performanceDiagnostics !== undefined &&
            (obj.performanceDiagnostics = message.performanceDiagnostics
                ? cluster_1.PerformanceDiagnosticsConfig.toJSON(message.performanceDiagnostics)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? cluster_1.Access.toJSON(message.access) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseConfigSpec);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.featureCompatibilityVersion =
            (_b = object.featureCompatibilityVersion) !== null && _b !== void 0 ? _b : "";
        message.mongodbSpec36 =
            object.mongodbSpec36 !== undefined && object.mongodbSpec36 !== null
                ? exports.Mongodbspec36.fromPartial(object.mongodbSpec36)
                : undefined;
        message.mongodbSpec40 =
            object.mongodbSpec40 !== undefined && object.mongodbSpec40 !== null
                ? exports.Mongodbspec40.fromPartial(object.mongodbSpec40)
                : undefined;
        message.mongodbSpec42 =
            object.mongodbSpec42 !== undefined && object.mongodbSpec42 !== null
                ? exports.Mongodbspec42.fromPartial(object.mongodbSpec42)
                : undefined;
        message.mongodbSpec44 =
            object.mongodbSpec44 !== undefined && object.mongodbSpec44 !== null
                ? exports.Mongodbspec44.fromPartial(object.mongodbSpec44)
                : undefined;
        message.mongodbSpec50 =
            object.mongodbSpec50 !== undefined && object.mongodbSpec50 !== null
                ? exports.Mongodbspec50.fromPartial(object.mongodbSpec50)
                : undefined;
        message.mongodbSpec60 =
            object.mongodbSpec60 !== undefined && object.mongodbSpec60 !== null
                ? exports.Mongodbspec60.fromPartial(object.mongodbSpec60)
                : undefined;
        message.mongodbSpec44Enterprise =
            object.mongodbSpec44Enterprise !== undefined &&
                object.mongodbSpec44Enterprise !== null
                ? exports.Mongodbspec44Enterprise.fromPartial(object.mongodbSpec44Enterprise)
                : undefined;
        message.mongodbSpec50Enterprise =
            object.mongodbSpec50Enterprise !== undefined &&
                object.mongodbSpec50Enterprise !== null
                ? exports.Mongodbspec50Enterprise.fromPartial(object.mongodbSpec50Enterprise)
                : undefined;
        message.mongodbSpec60Enterprise =
            object.mongodbSpec60Enterprise !== undefined &&
                object.mongodbSpec60Enterprise !== null
                ? exports.Mongodbspec60Enterprise.fromPartial(object.mongodbSpec60Enterprise)
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
                ? cluster_1.PerformanceDiagnosticsConfig.fromPartial(object.performanceDiagnostics)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? cluster_1.Access.fromPartial(object.access)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpec.$type, exports.ConfigSpec);
/** A set of methods for managing MongoDB Cluster resources. */
exports.ClusterServiceService = {
    /**
     * Returns the specified MongoDB Cluster resource.
     *
     * To get the list of available MongoDB Cluster resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
    /**
     * Retrieves the list of MongoDB Cluster resources that belong
     * to the specified folder.
     */
    list: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClustersResponse.decode(value),
    },
    /** Creates a MongoDB cluster in the specified folder. */
    create: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified MongoDB cluster. */
    update: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified MongoDB cluster. */
    delete: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Start the specified MongoDB cluster. */
    start: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stop the specified MongoDB cluster. */
    stop: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Moves the specified MongoDB cluster to the specified folder. */
    move: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a backup for the specified MongoDB cluster. */
    backup: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Backup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.BackupClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.BackupClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a new MongoDB cluster using the specified backup. */
    restore: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Restore",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestoreClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestoreClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/RescheduleMaintenance",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RescheduleMaintenanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RescheduleMaintenanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Retrieves logs for the specified MongoDB cluster.
     * See the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developers guide for detailed logs description.
     */
    listLogs: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListLogs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterLogsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterLogsResponse.decode(value),
    },
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/StreamLogs",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.StreamClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StreamClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.StreamLogRecord.encode(value).finish()),
        responseDeserialize: (value) => exports.StreamLogRecord.decode(value),
    },
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves the list of available backups for the specified MongoDB cluster. */
    listBackups: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListBackups",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterBackupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterBackupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterBackupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterBackupsResponse.decode(value),
    },
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterHostsResponse.decode(value),
    },
    /** Creates new hosts for a cluster. */
    addHosts: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/AddHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/DeleteHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Enables sharding for the cluster:
     * creates 3 mongoinfra (or 3 mongocfg and 2 mongos) hosts
     * that would support adding and using shards in the cluster.
     */
    enableSharding: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/EnableSharding",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.EnableClusterShardingRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.EnableClusterShardingRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the specified shard. */
    getShard: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/GetShard",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterShardRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterShardRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Shard.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Shard.decode(value),
    },
    /** Retrieves a list of shards. */
    listShards: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListShards",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterShardsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterShardsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterShardsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterShardsResponse.decode(value),
    },
    /** Creates a new shard. */
    addShard: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/AddShard",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddClusterShardRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddClusterShardRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified shard. */
    deleteShard: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/DeleteShard",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterShardRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterShardRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Resetups hosts. */
    resetupHosts: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ResetupHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ResetupHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ResetupHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Restarts hosts. */
    restartHosts: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/RestartHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestartHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestartHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stepdown hosts. */
    stepdownHosts: {
        path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/StepdownHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StepdownHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StepdownHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ClusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ClusterServiceService, "yandex.cloud.mdb.mongodb.v1.ClusterService");
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
