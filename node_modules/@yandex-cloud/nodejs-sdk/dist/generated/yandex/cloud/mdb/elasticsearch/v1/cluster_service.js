"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreClusterRequest = exports.RescheduleMaintenanceMetadata = exports.RescheduleMaintenanceRequest = exports.DeleteClusterHostsMetadata = exports.DeleteClusterHostsRequest = exports.AddClusterHostsMetadata = exports.AddClusterHostsRequest = exports.ConfigSpecUpdate = exports.ConfigSpec = exports.ElasticsearchSpec_MasterNode = exports.ElasticsearchSpec_DataNode = exports.ElasticsearchSpec = exports.HostSpec = exports.StopClusterMetadata = exports.StopClusterRequest = exports.StartClusterMetadata = exports.StartClusterRequest = exports.MoveClusterMetadata = exports.MoveClusterRequest = exports.ListClusterHostsResponse = exports.ListClusterHostsRequest = exports.ListClusterOperationsResponse = exports.ListClusterOperationsRequest = exports.StreamClusterLogsRequest = exports.StreamLogRecord = exports.ListClusterLogsResponse = exports.LogRecord_MessageEntry = exports.LogRecord = exports.ListClusterLogsRequest = exports.DeleteClusterMetadata = exports.DeleteClusterRequest = exports.UpdateClusterMetadata = exports.UpdateClusterRequest_LabelsEntry = exports.UpdateClusterRequest = exports.CreateClusterMetadata = exports.CreateClusterRequest_LabelsEntry = exports.CreateClusterRequest = exports.ListClustersResponse = exports.ListClustersRequest = exports.GetClusterRequest = exports.rescheduleMaintenanceRequest_RescheduleTypeToJSON = exports.rescheduleMaintenanceRequest_RescheduleTypeFromJSON = exports.RescheduleMaintenanceRequest_RescheduleType = exports.streamClusterLogsRequest_ServiceTypeToJSON = exports.streamClusterLogsRequest_ServiceTypeFromJSON = exports.StreamClusterLogsRequest_ServiceType = exports.listClusterLogsRequest_ServiceTypeToJSON = exports.listClusterLogsRequest_ServiceTypeFromJSON = exports.ListClusterLogsRequest_ServiceType = exports.protobufPackage = void 0;
exports.ClusterServiceClient = exports.ClusterServiceService = exports.ListClusterBackupsResponse = exports.ListClusterBackupsRequest = exports.BackupClusterMetadata = exports.BackupClusterRequest = exports.RestoreClusterMetadata = exports.RestoreClusterRequest_LabelsEntry = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cluster_1 = require("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster");
const maintenance_1 = require("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const user_1 = require("../../../../../yandex/cloud/mdb/elasticsearch/v1/user");
const extension_1 = require("../../../../../yandex/cloud/mdb/elasticsearch/v1/extension");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const elasticsearch_1 = require("../../../../../yandex/cloud/mdb/elasticsearch/v1/config/elasticsearch");
const backup_1 = require("../../../../../yandex/cloud/mdb/elasticsearch/v1/backup");
exports.protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
var ListClusterLogsRequest_ServiceType;
(function (ListClusterLogsRequest_ServiceType) {
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["SERVICE_TYPE_UNSPECIFIED"] = 0] = "SERVICE_TYPE_UNSPECIFIED";
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["ELASTICSEARCH"] = 1] = "ELASTICSEARCH";
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["KIBANA"] = 2] = "KIBANA";
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ListClusterLogsRequest_ServiceType = exports.ListClusterLogsRequest_ServiceType || (exports.ListClusterLogsRequest_ServiceType = {}));
function listClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "ELASTICSEARCH":
            return ListClusterLogsRequest_ServiceType.ELASTICSEARCH;
        case 2:
        case "KIBANA":
            return ListClusterLogsRequest_ServiceType.KIBANA;
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
        case ListClusterLogsRequest_ServiceType.ELASTICSEARCH:
            return "ELASTICSEARCH";
        case ListClusterLogsRequest_ServiceType.KIBANA:
            return "KIBANA";
        default:
            return "UNKNOWN";
    }
}
exports.listClusterLogsRequest_ServiceTypeToJSON = listClusterLogsRequest_ServiceTypeToJSON;
var StreamClusterLogsRequest_ServiceType;
(function (StreamClusterLogsRequest_ServiceType) {
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["SERVICE_TYPE_UNSPECIFIED"] = 0] = "SERVICE_TYPE_UNSPECIFIED";
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["ELASTICSEARCH"] = 1] = "ELASTICSEARCH";
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["KIBANA"] = 2] = "KIBANA";
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamClusterLogsRequest_ServiceType = exports.StreamClusterLogsRequest_ServiceType || (exports.StreamClusterLogsRequest_ServiceType = {}));
function streamClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "ELASTICSEARCH":
            return StreamClusterLogsRequest_ServiceType.ELASTICSEARCH;
        case 2:
        case "KIBANA":
            return StreamClusterLogsRequest_ServiceType.KIBANA;
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
        case StreamClusterLogsRequest_ServiceType.ELASTICSEARCH:
            return "ELASTICSEARCH";
        case StreamClusterLogsRequest_ServiceType.KIBANA:
            return "KIBANA";
        default:
            return "UNKNOWN";
    }
}
exports.streamClusterLogsRequest_ServiceTypeToJSON = streamClusterLogsRequest_ServiceTypeToJSON;
var RescheduleMaintenanceRequest_RescheduleType;
(function (RescheduleMaintenanceRequest_RescheduleType) {
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["RESCHEDULE_TYPE_UNSPECIFIED"] = 0] = "RESCHEDULE_TYPE_UNSPECIFIED";
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["IMMEDIATE"] = 1] = "IMMEDIATE";
    RescheduleMaintenanceRequest_RescheduleType[RescheduleMaintenanceRequest_RescheduleType["NEXT_AVAILABLE_WINDOW"] = 2] = "NEXT_AVAILABLE_WINDOW";
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
const baseGetClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest",
    clusterId: "",
};
exports.GetClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListClustersRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse",
    nextPageToken: "",
};
exports.ListClustersResponse = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    securityGroupIds: "",
    serviceAccountId: "",
    deletionProtection: false,
};
exports.CreateClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest",
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
                $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.LabelsEntry",
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
        if (message.serviceAccountId !== "") {
            writer.uint32(98).string(message.serviceAccountId);
        }
        if (message.deletionProtection === true) {
            writer.uint32(104).bool(message.deletionProtection);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.extensionSpecs) {
            extension_1.ExtensionSpec.encode(v, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateClusterRequest);
        message.labels = {};
        message.userSpecs = [];
        message.hostSpecs = [];
        message.securityGroupIds = [];
        message.extensionSpecs = [];
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
                    message.serviceAccountId = reader.string();
                    break;
                case 13:
                    message.deletionProtection = reader.bool();
                    break;
                case 14:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.extensionSpecs.push(extension_1.ExtensionSpec.decode(reader, reader.uint32()));
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
        message.userSpecs = ((_b = object.userSpecs) !== null && _b !== void 0 ? _b : []).map((e) => user_1.UserSpec.fromJSON(e));
        message.hostSpecs = ((_c = object.hostSpecs) !== null && _c !== void 0 ? _c : []).map((e) => exports.HostSpec.fromJSON(e));
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.securityGroupIds = ((_d = object.securityGroupIds) !== null && _d !== void 0 ? _d : []).map((e) => String(e));
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
        message.extensionSpecs = ((_e = object.extensionSpecs) !== null && _e !== void 0 ? _e : []).map((e) => extension_1.ExtensionSpec.fromJSON(e));
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
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        if (message.extensionSpecs) {
            obj.extensionSpecs = message.extensionSpecs.map((e) => e ? extension_1.ExtensionSpec.toJSON(e) : undefined);
        }
        else {
            obj.extensionSpecs = [];
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
        message.userSpecs =
            ((_f = object.userSpecs) === null || _f === void 0 ? void 0 : _f.map((e) => user_1.UserSpec.fromPartial(e))) || [];
        message.hostSpecs =
            ((_g = object.hostSpecs) === null || _g === void 0 ? void 0 : _g.map((e) => exports.HostSpec.fromPartial(e))) || [];
        message.networkId = (_h = object.networkId) !== null && _h !== void 0 ? _h : "";
        message.securityGroupIds = ((_j = object.securityGroupIds) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.serviceAccountId = (_k = object.serviceAccountId) !== null && _k !== void 0 ? _k : "";
        message.deletionProtection = (_l = object.deletionProtection) !== null && _l !== void 0 ? _l : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.extensionSpecs =
            ((_m = object.extensionSpecs) === null || _m === void 0 ? void 0 : _m.map((e) => extension_1.ExtensionSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterRequest.$type, exports.CreateClusterRequest);
const baseCreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata",
    clusterId: "",
};
exports.CreateClusterMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest",
    clusterId: "",
    description: "",
    name: "",
    securityGroupIds: "",
    serviceAccountId: "",
    deletionProtection: false,
};
exports.UpdateClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest",
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
                $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.configSpec !== undefined) {
            exports.ConfigSpecUpdate.encode(message.configSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(50).string(message.name);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(58).string(v);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(66).string(message.serviceAccountId);
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(82).fork()).ldelim();
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
                    message.configSpec = exports.ConfigSpecUpdate.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    message.deletionProtection = reader.bool();
                    break;
                case 10:
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
                ? exports.ConfigSpecUpdate.fromJSON(object.configSpec)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
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
                ? exports.ConfigSpecUpdate.toJSON(message.configSpec)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
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
                ? exports.ConfigSpecUpdate.fromPartial(object.configSpec)
                : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.securityGroupIds = ((_e = object.securityGroupIds) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.serviceAccountId = (_f = object.serviceAccountId) !== null && _f !== void 0 ? _f : "";
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterRequest.$type, exports.UpdateClusterRequest);
const baseUpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata",
    clusterId: "",
};
exports.UpdateClusterMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest",
    clusterId: "",
};
exports.DeleteClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata",
    clusterId: "",
};
exports.DeleteClusterMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata",
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
const baseListClusterLogsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    pageSize: 0,
    pageToken: "",
    alwaysNextPageToken: false,
    filter: "",
    serviceType: 0,
};
exports.ListClusterLogsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.columnFilter) {
            writer.uint32(18).string(v);
        }
        if (message.fromTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.toTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.toTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.pageSize !== 0) {
            writer.uint32(40).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(50).string(message.pageToken);
        }
        if (message.alwaysNextPageToken === true) {
            writer.uint32(56).bool(message.alwaysNextPageToken);
        }
        if (message.filter !== "") {
            writer.uint32(66).string(message.filter);
        }
        if (message.serviceType !== 0) {
            writer.uint32(72).int32(message.serviceType);
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
                    message.fromTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.toTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 6:
                    message.pageToken = reader.string();
                    break;
                case 7:
                    message.alwaysNextPageToken = reader.bool();
                    break;
                case 8:
                    message.filter = reader.string();
                    break;
                case 9:
                    message.serviceType = reader.int32();
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
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        message.serviceType =
            object.serviceType !== undefined && object.serviceType !== null
                ? listClusterLogsRequest_ServiceTypeFromJSON(object.serviceType)
                : 0;
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
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.alwaysNextPageToken !== undefined &&
            (obj.alwaysNextPageToken = message.alwaysNextPageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.serviceType !== undefined &&
            (obj.serviceType = listClusterLogsRequest_ServiceTypeToJSON(message.serviceType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseListClusterLogsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.columnFilter = ((_b = object.columnFilter) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.fromTime = (_c = object.fromTime) !== null && _c !== void 0 ? _c : undefined;
        message.toTime = (_d = object.toTime) !== null && _d !== void 0 ? _d : undefined;
        message.pageSize = (_e = object.pageSize) !== null && _e !== void 0 ? _e : 0;
        message.pageToken = (_f = object.pageToken) !== null && _f !== void 0 ? _f : "";
        message.alwaysNextPageToken = (_g = object.alwaysNextPageToken) !== null && _g !== void 0 ? _g : false;
        message.filter = (_h = object.filter) !== null && _h !== void 0 ? _h : "";
        message.serviceType = (_j = object.serviceType) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterLogsRequest.$type, exports.ListClusterLogsRequest);
const baseLogRecord = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.LogRecord",
};
exports.LogRecord = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.LogRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.message).forEach(([key, value]) => {
            exports.LogRecord_MessageEntry.encode({
                $type: "yandex.cloud.mdb.elasticsearch.v1.LogRecord.MessageEntry",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.LogRecord.MessageEntry",
    key: "",
    value: "",
};
exports.LogRecord_MessageEntry = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.LogRecord.MessageEntry",
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
const baseListClusterLogsResponse = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse",
    nextPageToken: "",
};
exports.ListClusterLogsResponse = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord",
    nextRecordToken: "",
};
exports.StreamLogRecord = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    recordToken: "",
    filter: "",
    serviceType: 0,
};
exports.StreamClusterLogsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.columnFilter) {
            writer.uint32(18).string(v);
        }
        if (message.fromTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.toTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.toTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.recordToken !== "") {
            writer.uint32(42).string(message.recordToken);
        }
        if (message.filter !== "") {
            writer.uint32(50).string(message.filter);
        }
        if (message.serviceType !== 0) {
            writer.uint32(56).int32(message.serviceType);
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
                    message.fromTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.toTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.recordToken = reader.string();
                    break;
                case 6:
                    message.filter = reader.string();
                    break;
                case 7:
                    message.serviceType = reader.int32();
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
        message.serviceType =
            object.serviceType !== undefined && object.serviceType !== null
                ? streamClusterLogsRequest_ServiceTypeFromJSON(object.serviceType)
                : 0;
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
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
        message.recordToken !== undefined &&
            (obj.recordToken = message.recordToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.serviceType !== undefined &&
            (obj.serviceType = streamClusterLogsRequest_ServiceTypeToJSON(message.serviceType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseStreamClusterLogsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.columnFilter = ((_b = object.columnFilter) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.fromTime = (_c = object.fromTime) !== null && _c !== void 0 ? _c : undefined;
        message.toTime = (_d = object.toTime) !== null && _d !== void 0 ? _d : undefined;
        message.recordToken = (_e = object.recordToken) !== null && _e !== void 0 ? _e : "";
        message.filter = (_f = object.filter) !== null && _f !== void 0 ? _f : "";
        message.serviceType = (_g = object.serviceType) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamClusterLogsRequest.$type, exports.StreamClusterLogsRequest);
const baseListClusterOperationsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterOperationsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse",
    nextPageToken: "",
};
exports.ListClusterOperationsResponse = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse",
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
const baseListClusterHostsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterHostsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse",
    nextPageToken: "",
};
exports.ListClusterHostsResponse = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse",
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
const baseMoveClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest",
    clusterId: "",
    destinationFolderId: "",
};
exports.MoveClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata",
    clusterId: "",
    sourceFolderId: "",
    destinationFolderId: "",
};
exports.MoveClusterMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata",
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
const baseStartClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest",
    clusterId: "",
};
exports.StartClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata",
    clusterId: "",
};
exports.StartClusterMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest",
    clusterId: "",
};
exports.StopClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata",
    clusterId: "",
};
exports.StopClusterMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata",
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
const baseHostSpec = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.HostSpec",
    zoneId: "",
    subnetId: "",
    assignPublicIp: false,
    type: 0,
    shardName: "",
};
exports.HostSpec = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.HostSpec",
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
const baseElasticsearchSpec = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec",
    plugins: "",
};
exports.ElasticsearchSpec = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataNode !== undefined) {
            exports.ElasticsearchSpec_DataNode.encode(message.dataNode, writer.uint32(10).fork()).ldelim();
        }
        if (message.masterNode !== undefined) {
            exports.ElasticsearchSpec_MasterNode.encode(message.masterNode, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.plugins) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseElasticsearchSpec);
        message.plugins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataNode = exports.ElasticsearchSpec_DataNode.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.masterNode = exports.ElasticsearchSpec_MasterNode.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.plugins.push(reader.string());
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
        const message = Object.assign({}, baseElasticsearchSpec);
        message.dataNode =
            object.dataNode !== undefined && object.dataNode !== null
                ? exports.ElasticsearchSpec_DataNode.fromJSON(object.dataNode)
                : undefined;
        message.masterNode =
            object.masterNode !== undefined && object.masterNode !== null
                ? exports.ElasticsearchSpec_MasterNode.fromJSON(object.masterNode)
                : undefined;
        message.plugins = ((_a = object.plugins) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataNode !== undefined &&
            (obj.dataNode = message.dataNode
                ? exports.ElasticsearchSpec_DataNode.toJSON(message.dataNode)
                : undefined);
        message.masterNode !== undefined &&
            (obj.masterNode = message.masterNode
                ? exports.ElasticsearchSpec_MasterNode.toJSON(message.masterNode)
                : undefined);
        if (message.plugins) {
            obj.plugins = message.plugins.map((e) => e);
        }
        else {
            obj.plugins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseElasticsearchSpec);
        message.dataNode =
            object.dataNode !== undefined && object.dataNode !== null
                ? exports.ElasticsearchSpec_DataNode.fromPartial(object.dataNode)
                : undefined;
        message.masterNode =
            object.masterNode !== undefined && object.masterNode !== null
                ? exports.ElasticsearchSpec_MasterNode.fromPartial(object.masterNode)
                : undefined;
        message.plugins = ((_a = object.plugins) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ElasticsearchSpec.$type, exports.ElasticsearchSpec);
const baseElasticsearchSpec_DataNode = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode",
};
exports.ElasticsearchSpec_DataNode = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.elasticsearchConfig7 !== undefined) {
            elasticsearch_1.ElasticsearchConfig7.encode(message.elasticsearchConfig7, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseElasticsearchSpec_DataNode);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.elasticsearchConfig7 = elasticsearch_1.ElasticsearchConfig7.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseElasticsearchSpec_DataNode);
        message.elasticsearchConfig7 =
            object.elasticsearchConfig_7 !== undefined &&
                object.elasticsearchConfig_7 !== null
                ? elasticsearch_1.ElasticsearchConfig7.fromJSON(object.elasticsearchConfig_7)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.elasticsearchConfig7 !== undefined &&
            (obj.elasticsearchConfig_7 = message.elasticsearchConfig7
                ? elasticsearch_1.ElasticsearchConfig7.toJSON(message.elasticsearchConfig7)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? cluster_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseElasticsearchSpec_DataNode);
        message.elasticsearchConfig7 =
            object.elasticsearchConfig7 !== undefined &&
                object.elasticsearchConfig7 !== null
                ? elasticsearch_1.ElasticsearchConfig7.fromPartial(object.elasticsearchConfig7)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ElasticsearchSpec_DataNode.$type, exports.ElasticsearchSpec_DataNode);
const baseElasticsearchSpec_MasterNode = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode",
};
exports.ElasticsearchSpec_MasterNode = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            cluster_1.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseElasticsearchSpec_MasterNode);
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
        const message = Object.assign({}, baseElasticsearchSpec_MasterNode);
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
        const message = Object.assign({}, baseElasticsearchSpec_MasterNode);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? cluster_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ElasticsearchSpec_MasterNode.$type, exports.ElasticsearchSpec_MasterNode);
const baseConfigSpec = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ConfigSpec",
    version: "",
    edition: "",
    adminPassword: "",
};
exports.ConfigSpec = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.elasticsearchSpec !== undefined) {
            exports.ElasticsearchSpec.encode(message.elasticsearchSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.edition !== "") {
            writer.uint32(26).string(message.edition);
        }
        if (message.adminPassword !== "") {
            writer.uint32(34).string(message.adminPassword);
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
                    message.elasticsearchSpec = exports.ElasticsearchSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.edition = reader.string();
                    break;
                case 4:
                    message.adminPassword = reader.string();
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
        message.elasticsearchSpec =
            object.elasticsearchSpec !== undefined &&
                object.elasticsearchSpec !== null
                ? exports.ElasticsearchSpec.fromJSON(object.elasticsearchSpec)
                : undefined;
        message.edition =
            object.edition !== undefined && object.edition !== null
                ? String(object.edition)
                : "";
        message.adminPassword =
            object.adminPassword !== undefined && object.adminPassword !== null
                ? String(object.adminPassword)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.elasticsearchSpec !== undefined &&
            (obj.elasticsearchSpec = message.elasticsearchSpec
                ? exports.ElasticsearchSpec.toJSON(message.elasticsearchSpec)
                : undefined);
        message.edition !== undefined && (obj.edition = message.edition);
        message.adminPassword !== undefined &&
            (obj.adminPassword = message.adminPassword);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseConfigSpec);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.elasticsearchSpec =
            object.elasticsearchSpec !== undefined &&
                object.elasticsearchSpec !== null
                ? exports.ElasticsearchSpec.fromPartial(object.elasticsearchSpec)
                : undefined;
        message.edition = (_b = object.edition) !== null && _b !== void 0 ? _b : "";
        message.adminPassword = (_c = object.adminPassword) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpec.$type, exports.ConfigSpec);
const baseConfigSpecUpdate = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate",
    version: "",
    edition: "",
    adminPassword: "",
};
exports.ConfigSpecUpdate = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.elasticsearchSpec !== undefined) {
            exports.ElasticsearchSpec.encode(message.elasticsearchSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.edition !== "") {
            writer.uint32(26).string(message.edition);
        }
        if (message.adminPassword !== "") {
            writer.uint32(34).string(message.adminPassword);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConfigSpecUpdate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.elasticsearchSpec = exports.ElasticsearchSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.edition = reader.string();
                    break;
                case 4:
                    message.adminPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConfigSpecUpdate);
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.elasticsearchSpec =
            object.elasticsearchSpec !== undefined &&
                object.elasticsearchSpec !== null
                ? exports.ElasticsearchSpec.fromJSON(object.elasticsearchSpec)
                : undefined;
        message.edition =
            object.edition !== undefined && object.edition !== null
                ? String(object.edition)
                : "";
        message.adminPassword =
            object.adminPassword !== undefined && object.adminPassword !== null
                ? String(object.adminPassword)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.elasticsearchSpec !== undefined &&
            (obj.elasticsearchSpec = message.elasticsearchSpec
                ? exports.ElasticsearchSpec.toJSON(message.elasticsearchSpec)
                : undefined);
        message.edition !== undefined && (obj.edition = message.edition);
        message.adminPassword !== undefined &&
            (obj.adminPassword = message.adminPassword);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseConfigSpecUpdate);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.elasticsearchSpec =
            object.elasticsearchSpec !== undefined &&
                object.elasticsearchSpec !== null
                ? exports.ElasticsearchSpec.fromPartial(object.elasticsearchSpec)
                : undefined;
        message.edition = (_b = object.edition) !== null && _b !== void 0 ? _b : "";
        message.adminPassword = (_c = object.adminPassword) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpecUpdate.$type, exports.ConfigSpecUpdate);
const baseAddClusterHostsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest",
    clusterId: "",
};
exports.AddClusterHostsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.AddClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest",
    clusterId: "",
    hostNames: "",
};
exports.DeleteClusterHostsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata",
    clusterId: "",
    hostNames: "",
};
exports.DeleteClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata",
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
const baseRescheduleMaintenanceRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest",
    clusterId: "",
    rescheduleType: 0,
};
exports.RescheduleMaintenanceRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata",
    clusterId: "",
};
exports.RescheduleMaintenanceMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata",
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
const baseRestoreClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest",
    backupId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    securityGroupIds: "",
    serviceAccountId: "",
    deletionProtection: false,
    folderId: "",
};
exports.RestoreClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest",
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
                $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.LabelsEntry",
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
            exports.HostSpec.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkId !== "") {
            writer.uint32(82).string(message.networkId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(98).string(message.serviceAccountId);
        }
        if (message.deletionProtection === true) {
            writer.uint32(104).bool(message.deletionProtection);
        }
        if (message.folderId !== "") {
            writer.uint32(114).string(message.folderId);
        }
        for (const v of message.extensionSpecs) {
            extension_1.ExtensionSpec.encode(v, writer.uint32(122).fork()).ldelim();
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
        message.extensionSpecs = [];
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
                    message.serviceAccountId = reader.string();
                    break;
                case 13:
                    message.deletionProtection = reader.bool();
                    break;
                case 14:
                    message.folderId = reader.string();
                    break;
                case 15:
                    message.extensionSpecs.push(extension_1.ExtensionSpec.decode(reader, reader.uint32()));
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
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.extensionSpecs = ((_d = object.extensionSpecs) !== null && _d !== void 0 ? _d : []).map((e) => extension_1.ExtensionSpec.fromJSON(e));
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
        if (message.extensionSpecs) {
            obj.extensionSpecs = message.extensionSpecs.map((e) => e ? extension_1.ExtensionSpec.toJSON(e) : undefined);
        }
        else {
            obj.extensionSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
        message.securityGroupIds = ((_h = object.securityGroupIds) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.serviceAccountId = (_j = object.serviceAccountId) !== null && _j !== void 0 ? _j : "";
        message.deletionProtection = (_k = object.deletionProtection) !== null && _k !== void 0 ? _k : false;
        message.folderId = (_l = object.folderId) !== null && _l !== void 0 ? _l : "";
        message.extensionSpecs =
            ((_m = object.extensionSpecs) === null || _m === void 0 ? void 0 : _m.map((e) => extension_1.ExtensionSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreClusterRequest.$type, exports.RestoreClusterRequest);
const baseRestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.RestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata",
    clusterId: "",
    backupId: "",
};
exports.RestoreClusterMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata",
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
const baseBackupClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest",
    clusterId: "",
};
exports.BackupClusterRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata",
    clusterId: "",
};
exports.BackupClusterMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata",
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
const baseListClusterBackupsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterBackupsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest",
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse",
    nextPageToken: "",
};
exports.ListClusterBackupsResponse = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse",
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
/** A set of methods for managing Elasticsearch clusters. */
exports.ClusterServiceService = {
    /**
     * Returns the specified Elasticsearch cluster.
     *
     * To get the list of available Elasticsearch clusters, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
    /** Retrieves the list of Elasticsearch clusters that belong to the specified folder. */
    list: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClustersResponse.decode(value),
    },
    /** Creates a new Elasticsearch cluster in the specified folder. */
    create: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified Elasticsearch cluster. */
    update: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified Elasticsearch cluster. */
    delete: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Moves the specified Elasticsearch cluster to the specified folder. */
    move: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified Elasticsearch cluster. */
    start: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified Elasticsearch cluster. */
    stop: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Create a backup for the specified ElasticSearch cluster. */
    backup: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Backup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.BackupClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.BackupClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the list of available backups for the specified Elasticsearch cluster. */
    listBackups: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListBackups",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterBackupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterBackupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterBackupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterBackupsResponse.decode(value),
    },
    /** Creates a new ElasticSearch cluster from the specified backup. */
    restore: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Restore",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestoreClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestoreClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Retrieves logs for the specified Elasticsearch cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-elasticsearch/operations/cluster-logs) section in the documentation.
     */
    listLogs: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListLogs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterLogsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterLogsResponse.decode(value),
    },
    /** Same as [ListLogs] but using server-side streaming. Also supports `tail -f` semantics. */
    streamLogs: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/StreamLogs",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.StreamClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StreamClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.StreamLogRecord.encode(value).finish()),
        responseDeserialize: (value) => exports.StreamLogRecord.decode(value),
    },
    /** Retrieves the list of operations for the specified Elasticsearch cluster. */
    listOperations: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves a list of hosts for the specified Elasticsearch cluster. */
    listHosts: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterHostsResponse.decode(value),
    },
    /** Adds new hosts to the specified Elasticsearch cluster. */
    addHosts: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/AddHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes specified hosts from the specified Elasticsearch cluster. */
    deleteHosts: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/DeleteHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Reschedule planned maintenance operation. */
    rescheduleMaintenance: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/RescheduleMaintenance",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RescheduleMaintenanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RescheduleMaintenanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ClusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ClusterServiceService, "yandex.cloud.mdb.elasticsearch.v1.ClusterService");
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
