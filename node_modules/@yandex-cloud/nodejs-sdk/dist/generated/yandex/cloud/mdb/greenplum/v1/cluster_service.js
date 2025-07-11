"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterServiceClient = exports.ClusterServiceService = exports.RestoreClusterMetadata = exports.RestoreClusterRequest_LabelsEntry = exports.RestoreClusterRequest = exports.ListClusterBackupsResponse = exports.StreamClusterLogsRequest = exports.StreamLogRecord = exports.ListClusterBackupsRequest = exports.ListClusterLogsRequest = exports.LogRecord_MessageEntry = exports.LogRecord = exports.ListClusterLogsResponse = exports.SegmentSubclusterConfigSpec = exports.MasterSubclusterConfigSpec = exports.ListClusterHostsResponse = exports.ListClusterHostsRequest = exports.ListClusterOperationsResponse = exports.ListClusterOperationsRequest = exports.StopClusterMetadata = exports.StopClusterRequest = exports.StartClusterMetadata = exports.StartClusterRequest = exports.DeleteClusterMetadata = exports.DeleteClusterRequest = exports.ExpandRequest = exports.AddClusterHostsMetadata = exports.UpdateClusterMetadata = exports.UpdateClusterRequest_LabelsEntry = exports.UpdateClusterRequest = exports.CreateClusterMetadata = exports.ConfigSpec = exports.CreateClusterRequest_LabelsEntry = exports.CreateClusterRequest = exports.ListClustersResponse = exports.ListClustersRequest = exports.GetClusterRequest = exports.streamClusterLogsRequest_ServiceTypeToJSON = exports.streamClusterLogsRequest_ServiceTypeFromJSON = exports.StreamClusterLogsRequest_ServiceType = exports.listClusterLogsRequest_ServiceTypeToJSON = exports.listClusterLogsRequest_ServiceTypeFromJSON = exports.ListClusterLogsRequest_ServiceType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cluster_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/cluster");
const maintenance_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance");
const config_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/config");
const pxf_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/pxf");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const host_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/host");
const backup_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/backup");
exports.protobufPackage = "yandex.cloud.mdb.greenplum.v1";
var ListClusterLogsRequest_ServiceType;
(function (ListClusterLogsRequest_ServiceType) {
    /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["SERVICE_TYPE_UNSPECIFIED"] = 0] = "SERVICE_TYPE_UNSPECIFIED";
    /** GREENPLUM - Greenplum® activity logs. */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["GREENPLUM"] = 1] = "GREENPLUM";
    /** GREENPLUM_POOLER - Greenplum® pooler logs. */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["GREENPLUM_POOLER"] = 2] = "GREENPLUM_POOLER";
    /** GREENPLUM_PXF - Greenplum® PXF service logs. */
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["GREENPLUM_PXF"] = 3] = "GREENPLUM_PXF";
    ListClusterLogsRequest_ServiceType[ListClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ListClusterLogsRequest_ServiceType = exports.ListClusterLogsRequest_ServiceType || (exports.ListClusterLogsRequest_ServiceType = {}));
function listClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "GREENPLUM":
            return ListClusterLogsRequest_ServiceType.GREENPLUM;
        case 2:
        case "GREENPLUM_POOLER":
            return ListClusterLogsRequest_ServiceType.GREENPLUM_POOLER;
        case 3:
        case "GREENPLUM_PXF":
            return ListClusterLogsRequest_ServiceType.GREENPLUM_PXF;
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
        case ListClusterLogsRequest_ServiceType.GREENPLUM:
            return "GREENPLUM";
        case ListClusterLogsRequest_ServiceType.GREENPLUM_POOLER:
            return "GREENPLUM_POOLER";
        case ListClusterLogsRequest_ServiceType.GREENPLUM_PXF:
            return "GREENPLUM_PXF";
        default:
            return "UNKNOWN";
    }
}
exports.listClusterLogsRequest_ServiceTypeToJSON = listClusterLogsRequest_ServiceTypeToJSON;
var StreamClusterLogsRequest_ServiceType;
(function (StreamClusterLogsRequest_ServiceType) {
    /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["SERVICE_TYPE_UNSPECIFIED"] = 0] = "SERVICE_TYPE_UNSPECIFIED";
    /** GREENPLUM - Greenplum® activity logs. */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["GREENPLUM"] = 1] = "GREENPLUM";
    /** GREENPLUM_POOLER - Greenplum® pooler logs. */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["GREENPLUM_POOLER"] = 2] = "GREENPLUM_POOLER";
    /** GREENPLUM_PXF - Greenplum® PXF service logs. */
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["GREENPLUM_PXF"] = 3] = "GREENPLUM_PXF";
    StreamClusterLogsRequest_ServiceType[StreamClusterLogsRequest_ServiceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamClusterLogsRequest_ServiceType = exports.StreamClusterLogsRequest_ServiceType || (exports.StreamClusterLogsRequest_ServiceType = {}));
function streamClusterLogsRequest_ServiceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVICE_TYPE_UNSPECIFIED":
            return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case "GREENPLUM":
            return StreamClusterLogsRequest_ServiceType.GREENPLUM;
        case 2:
        case "GREENPLUM_POOLER":
            return StreamClusterLogsRequest_ServiceType.GREENPLUM_POOLER;
        case 3:
        case "GREENPLUM_PXF":
            return StreamClusterLogsRequest_ServiceType.GREENPLUM_PXF;
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
        case StreamClusterLogsRequest_ServiceType.GREENPLUM:
            return "GREENPLUM";
        case StreamClusterLogsRequest_ServiceType.GREENPLUM_POOLER:
            return "GREENPLUM_POOLER";
        case StreamClusterLogsRequest_ServiceType.GREENPLUM_PXF:
            return "GREENPLUM_PXF";
        default:
            return "UNKNOWN";
    }
}
exports.streamClusterLogsRequest_ServiceTypeToJSON = streamClusterLogsRequest_ServiceTypeToJSON;
const baseGetClusterRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.GetClusterRequest",
    clusterId: "",
};
exports.GetClusterRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.GetClusterRequest",
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListClustersRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClustersRequest",
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClustersResponse",
    nextPageToken: "",
};
exports.ListClustersResponse = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClustersResponse",
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
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    masterHostCount: 0,
    segmentInHost: 0,
    segmentHostCount: 0,
    userName: "",
    userPassword: "",
    networkId: "",
    securityGroupIds: "",
    deletionProtection: false,
    hostGroupIds: "",
};
exports.CreateClusterRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest",
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
                $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(40).int32(message.environment);
        }
        if (message.config !== undefined) {
            cluster_1.GreenplumConfig.encode(message.config, writer.uint32(50).fork()).ldelim();
        }
        if (message.masterConfig !== undefined) {
            exports.MasterSubclusterConfigSpec.encode(message.masterConfig, writer.uint32(58).fork()).ldelim();
        }
        if (message.segmentConfig !== undefined) {
            exports.SegmentSubclusterConfigSpec.encode(message.segmentConfig, writer.uint32(66).fork()).ldelim();
        }
        if (message.masterHostCount !== 0) {
            writer.uint32(72).int64(message.masterHostCount);
        }
        if (message.segmentInHost !== 0) {
            writer.uint32(80).int64(message.segmentInHost);
        }
        if (message.segmentHostCount !== 0) {
            writer.uint32(88).int64(message.segmentHostCount);
        }
        if (message.userName !== "") {
            writer.uint32(98).string(message.userName);
        }
        if (message.userPassword !== "") {
            writer.uint32(106).string(message.userPassword);
        }
        if (message.networkId !== "") {
            writer.uint32(114).string(message.networkId);
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
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(154).fork()).ldelim();
        }
        if (message.configSpec !== undefined) {
            exports.ConfigSpec.encode(message.configSpec, writer.uint32(162).fork()).ldelim();
        }
        if (message.cloudStorage !== undefined) {
            cluster_1.CloudStorage.encode(message.cloudStorage, writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateClusterRequest);
        message.labels = {};
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
                    message.config = cluster_1.GreenplumConfig.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.masterConfig = exports.MasterSubclusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.segmentConfig = exports.SegmentSubclusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.masterHostCount = longToNumber(reader.int64());
                    break;
                case 10:
                    message.segmentInHost = longToNumber(reader.int64());
                    break;
                case 11:
                    message.segmentHostCount = longToNumber(reader.int64());
                    break;
                case 12:
                    message.userName = reader.string();
                    break;
                case 13:
                    message.userPassword = reader.string();
                    break;
                case 14:
                    message.networkId = reader.string();
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
                case 19:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.configSpec = exports.ConfigSpec.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.cloudStorage = cluster_1.CloudStorage.decode(reader, reader.uint32());
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
        message.config =
            object.config !== undefined && object.config !== null
                ? cluster_1.GreenplumConfig.fromJSON(object.config)
                : undefined;
        message.masterConfig =
            object.masterConfig !== undefined && object.masterConfig !== null
                ? exports.MasterSubclusterConfigSpec.fromJSON(object.masterConfig)
                : undefined;
        message.segmentConfig =
            object.segmentConfig !== undefined && object.segmentConfig !== null
                ? exports.SegmentSubclusterConfigSpec.fromJSON(object.segmentConfig)
                : undefined;
        message.masterHostCount =
            object.masterHostCount !== undefined && object.masterHostCount !== null
                ? Number(object.masterHostCount)
                : 0;
        message.segmentInHost =
            object.segmentInHost !== undefined && object.segmentInHost !== null
                ? Number(object.segmentInHost)
                : 0;
        message.segmentHostCount =
            object.segmentHostCount !== undefined && object.segmentHostCount !== null
                ? Number(object.segmentHostCount)
                : 0;
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? String(object.userPassword)
                : "";
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.hostGroupIds = ((_c = object.hostGroupIds) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.cloudStorage =
            object.cloudStorage !== undefined && object.cloudStorage !== null
                ? cluster_1.CloudStorage.fromJSON(object.cloudStorage)
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
        message.config !== undefined &&
            (obj.config = message.config
                ? cluster_1.GreenplumConfig.toJSON(message.config)
                : undefined);
        message.masterConfig !== undefined &&
            (obj.masterConfig = message.masterConfig
                ? exports.MasterSubclusterConfigSpec.toJSON(message.masterConfig)
                : undefined);
        message.segmentConfig !== undefined &&
            (obj.segmentConfig = message.segmentConfig
                ? exports.SegmentSubclusterConfigSpec.toJSON(message.segmentConfig)
                : undefined);
        message.masterHostCount !== undefined &&
            (obj.masterHostCount = Math.round(message.masterHostCount));
        message.segmentInHost !== undefined &&
            (obj.segmentInHost = Math.round(message.segmentInHost));
        message.segmentHostCount !== undefined &&
            (obj.segmentHostCount = Math.round(message.segmentHostCount));
        message.userName !== undefined && (obj.userName = message.userName);
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword);
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
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.cloudStorage !== undefined &&
            (obj.cloudStorage = message.cloudStorage
                ? cluster_1.CloudStorage.toJSON(message.cloudStorage)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
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
        message.config =
            object.config !== undefined && object.config !== null
                ? cluster_1.GreenplumConfig.fromPartial(object.config)
                : undefined;
        message.masterConfig =
            object.masterConfig !== undefined && object.masterConfig !== null
                ? exports.MasterSubclusterConfigSpec.fromPartial(object.masterConfig)
                : undefined;
        message.segmentConfig =
            object.segmentConfig !== undefined && object.segmentConfig !== null
                ? exports.SegmentSubclusterConfigSpec.fromPartial(object.segmentConfig)
                : undefined;
        message.masterHostCount = (_f = object.masterHostCount) !== null && _f !== void 0 ? _f : 0;
        message.segmentInHost = (_g = object.segmentInHost) !== null && _g !== void 0 ? _g : 0;
        message.segmentHostCount = (_h = object.segmentHostCount) !== null && _h !== void 0 ? _h : 0;
        message.userName = (_j = object.userName) !== null && _j !== void 0 ? _j : "";
        message.userPassword = (_k = object.userPassword) !== null && _k !== void 0 ? _k : "";
        message.networkId = (_l = object.networkId) !== null && _l !== void 0 ? _l : "";
        message.securityGroupIds = ((_m = object.securityGroupIds) === null || _m === void 0 ? void 0 : _m.map((e) => e)) || [];
        message.deletionProtection = (_o = object.deletionProtection) !== null && _o !== void 0 ? _o : false;
        message.hostGroupIds = ((_p = object.hostGroupIds) === null || _p === void 0 ? void 0 : _p.map((e) => e)) || [];
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.cloudStorage =
            object.cloudStorage !== undefined && object.cloudStorage !== null
                ? cluster_1.CloudStorage.fromPartial(object.cloudStorage)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterRequest.$type, exports.CreateClusterRequest);
const baseCreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry",
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
const baseConfigSpec = {
    $type: "yandex.cloud.mdb.greenplum.v1.ConfigSpec",
};
exports.ConfigSpec = {
    $type: "yandex.cloud.mdb.greenplum.v1.ConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.greenplumConfig617 !== undefined) {
            config_1.Greenplumconfig617.encode(message.greenplumConfig617, writer.uint32(10).fork()).ldelim();
        }
        if (message.greenplumConfig619 !== undefined) {
            config_1.Greenplumconfig619.encode(message.greenplumConfig619, writer.uint32(18).fork()).ldelim();
        }
        if (message.greenplumConfig621 !== undefined) {
            config_1.Greenplumconfig621.encode(message.greenplumConfig621, writer.uint32(34).fork()).ldelim();
        }
        if (message.greenplumConfig622 !== undefined) {
            config_1.Greenplumconfig622.encode(message.greenplumConfig622, writer.uint32(42).fork()).ldelim();
        }
        if (message.greenplumConfig6 !== undefined) {
            config_1.GreenplumConfig6.encode(message.greenplumConfig6, writer.uint32(74).fork()).ldelim();
        }
        if (message.pool !== undefined) {
            config_1.ConnectionPoolerConfig.encode(message.pool, writer.uint32(26).fork()).ldelim();
        }
        if (message.backgroundActivities !== undefined) {
            config_1.BackgroundActivitiesConfig.encode(message.backgroundActivities, writer.uint32(50).fork()).ldelim();
        }
        if (message.pxfConfig !== undefined) {
            pxf_1.PXFConfig.encode(message.pxfConfig, writer.uint32(66).fork()).ldelim();
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
                    message.greenplumConfig617 = config_1.Greenplumconfig617.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.greenplumConfig619 = config_1.Greenplumconfig619.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.greenplumConfig621 = config_1.Greenplumconfig621.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.greenplumConfig622 = config_1.Greenplumconfig622.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.greenplumConfig6 = config_1.GreenplumConfig6.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.pool = config_1.ConnectionPoolerConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.backgroundActivities = config_1.BackgroundActivitiesConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.pxfConfig = pxf_1.PXFConfig.decode(reader, reader.uint32());
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
        message.greenplumConfig617 =
            object.greenplumConfig_6_17 !== undefined &&
                object.greenplumConfig_6_17 !== null
                ? config_1.Greenplumconfig617.fromJSON(object.greenplumConfig_6_17)
                : undefined;
        message.greenplumConfig619 =
            object.greenplumConfig_6_19 !== undefined &&
                object.greenplumConfig_6_19 !== null
                ? config_1.Greenplumconfig619.fromJSON(object.greenplumConfig_6_19)
                : undefined;
        message.greenplumConfig621 =
            object.greenplumConfig_6_21 !== undefined &&
                object.greenplumConfig_6_21 !== null
                ? config_1.Greenplumconfig621.fromJSON(object.greenplumConfig_6_21)
                : undefined;
        message.greenplumConfig622 =
            object.greenplumConfig_6_22 !== undefined &&
                object.greenplumConfig_6_22 !== null
                ? config_1.Greenplumconfig622.fromJSON(object.greenplumConfig_6_22)
                : undefined;
        message.greenplumConfig6 =
            object.greenplumConfig_6 !== undefined &&
                object.greenplumConfig_6 !== null
                ? config_1.GreenplumConfig6.fromJSON(object.greenplumConfig_6)
                : undefined;
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? config_1.ConnectionPoolerConfig.fromJSON(object.pool)
                : undefined;
        message.backgroundActivities =
            object.backgroundActivities !== undefined &&
                object.backgroundActivities !== null
                ? config_1.BackgroundActivitiesConfig.fromJSON(object.backgroundActivities)
                : undefined;
        message.pxfConfig =
            object.pxfConfig !== undefined && object.pxfConfig !== null
                ? pxf_1.PXFConfig.fromJSON(object.pxfConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.greenplumConfig617 !== undefined &&
            (obj.greenplumConfig_6_17 = message.greenplumConfig617
                ? config_1.Greenplumconfig617.toJSON(message.greenplumConfig617)
                : undefined);
        message.greenplumConfig619 !== undefined &&
            (obj.greenplumConfig_6_19 = message.greenplumConfig619
                ? config_1.Greenplumconfig619.toJSON(message.greenplumConfig619)
                : undefined);
        message.greenplumConfig621 !== undefined &&
            (obj.greenplumConfig_6_21 = message.greenplumConfig621
                ? config_1.Greenplumconfig621.toJSON(message.greenplumConfig621)
                : undefined);
        message.greenplumConfig622 !== undefined &&
            (obj.greenplumConfig_6_22 = message.greenplumConfig622
                ? config_1.Greenplumconfig622.toJSON(message.greenplumConfig622)
                : undefined);
        message.greenplumConfig6 !== undefined &&
            (obj.greenplumConfig_6 = message.greenplumConfig6
                ? config_1.GreenplumConfig6.toJSON(message.greenplumConfig6)
                : undefined);
        message.pool !== undefined &&
            (obj.pool = message.pool
                ? config_1.ConnectionPoolerConfig.toJSON(message.pool)
                : undefined);
        message.backgroundActivities !== undefined &&
            (obj.backgroundActivities = message.backgroundActivities
                ? config_1.BackgroundActivitiesConfig.toJSON(message.backgroundActivities)
                : undefined);
        message.pxfConfig !== undefined &&
            (obj.pxfConfig = message.pxfConfig
                ? pxf_1.PXFConfig.toJSON(message.pxfConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseConfigSpec);
        message.greenplumConfig617 =
            object.greenplumConfig617 !== undefined &&
                object.greenplumConfig617 !== null
                ? config_1.Greenplumconfig617.fromPartial(object.greenplumConfig617)
                : undefined;
        message.greenplumConfig619 =
            object.greenplumConfig619 !== undefined &&
                object.greenplumConfig619 !== null
                ? config_1.Greenplumconfig619.fromPartial(object.greenplumConfig619)
                : undefined;
        message.greenplumConfig621 =
            object.greenplumConfig621 !== undefined &&
                object.greenplumConfig621 !== null
                ? config_1.Greenplumconfig621.fromPartial(object.greenplumConfig621)
                : undefined;
        message.greenplumConfig622 =
            object.greenplumConfig622 !== undefined &&
                object.greenplumConfig622 !== null
                ? config_1.Greenplumconfig622.fromPartial(object.greenplumConfig622)
                : undefined;
        message.greenplumConfig6 =
            object.greenplumConfig6 !== undefined && object.greenplumConfig6 !== null
                ? config_1.GreenplumConfig6.fromPartial(object.greenplumConfig6)
                : undefined;
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? config_1.ConnectionPoolerConfig.fromPartial(object.pool)
                : undefined;
        message.backgroundActivities =
            object.backgroundActivities !== undefined &&
                object.backgroundActivities !== null
                ? config_1.BackgroundActivitiesConfig.fromPartial(object.backgroundActivities)
                : undefined;
        message.pxfConfig =
            object.pxfConfig !== undefined && object.pxfConfig !== null
                ? pxf_1.PXFConfig.fromPartial(object.pxfConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConfigSpec.$type, exports.ConfigSpec);
const baseCreateClusterMetadata = {
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterMetadata",
    clusterId: "",
};
exports.CreateClusterMetadata = {
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterMetadata",
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
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest",
    clusterId: "",
    description: "",
    name: "",
    userPassword: "",
    securityGroupIds: "",
    deletionProtection: false,
};
exports.UpdateClusterRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest",
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
                $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.config !== undefined) {
            cluster_1.GreenplumConfig.encode(message.config, writer.uint32(50).fork()).ldelim();
        }
        if (message.masterConfig !== undefined) {
            exports.MasterSubclusterConfigSpec.encode(message.masterConfig, writer.uint32(58).fork()).ldelim();
        }
        if (message.segmentConfig !== undefined) {
            exports.SegmentSubclusterConfigSpec.encode(message.segmentConfig, writer.uint32(66).fork()).ldelim();
        }
        if (message.userPassword !== "") {
            writer.uint32(106).string(message.userPassword);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(122).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(138).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(144).bool(message.deletionProtection);
        }
        if (message.configSpec !== undefined) {
            exports.ConfigSpec.encode(message.configSpec, writer.uint32(154).fork()).ldelim();
        }
        if (message.cloudStorage !== undefined) {
            cluster_1.CloudStorage.encode(message.cloudStorage, writer.uint32(162).fork()).ldelim();
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
                    message.name = reader.string();
                    break;
                case 6:
                    message.config = cluster_1.GreenplumConfig.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.masterConfig = exports.MasterSubclusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.segmentConfig = exports.SegmentSubclusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.userPassword = reader.string();
                    break;
                case 15:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 18:
                    message.deletionProtection = reader.bool();
                    break;
                case 19:
                    message.configSpec = exports.ConfigSpec.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.cloudStorage = cluster_1.CloudStorage.decode(reader, reader.uint32());
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
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.config =
            object.config !== undefined && object.config !== null
                ? cluster_1.GreenplumConfig.fromJSON(object.config)
                : undefined;
        message.masterConfig =
            object.masterConfig !== undefined && object.masterConfig !== null
                ? exports.MasterSubclusterConfigSpec.fromJSON(object.masterConfig)
                : undefined;
        message.segmentConfig =
            object.segmentConfig !== undefined && object.segmentConfig !== null
                ? exports.SegmentSubclusterConfigSpec.fromJSON(object.segmentConfig)
                : undefined;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? String(object.userPassword)
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
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.cloudStorage =
            object.cloudStorage !== undefined && object.cloudStorage !== null
                ? cluster_1.CloudStorage.fromJSON(object.cloudStorage)
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
        message.name !== undefined && (obj.name = message.name);
        message.config !== undefined &&
            (obj.config = message.config
                ? cluster_1.GreenplumConfig.toJSON(message.config)
                : undefined);
        message.masterConfig !== undefined &&
            (obj.masterConfig = message.masterConfig
                ? exports.MasterSubclusterConfigSpec.toJSON(message.masterConfig)
                : undefined);
        message.segmentConfig !== undefined &&
            (obj.segmentConfig = message.segmentConfig
                ? exports.SegmentSubclusterConfigSpec.toJSON(message.segmentConfig)
                : undefined);
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword);
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
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.ConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.cloudStorage !== undefined &&
            (obj.cloudStorage = message.cloudStorage
                ? cluster_1.CloudStorage.toJSON(message.cloudStorage)
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
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.config =
            object.config !== undefined && object.config !== null
                ? cluster_1.GreenplumConfig.fromPartial(object.config)
                : undefined;
        message.masterConfig =
            object.masterConfig !== undefined && object.masterConfig !== null
                ? exports.MasterSubclusterConfigSpec.fromPartial(object.masterConfig)
                : undefined;
        message.segmentConfig =
            object.segmentConfig !== undefined && object.segmentConfig !== null
                ? exports.SegmentSubclusterConfigSpec.fromPartial(object.segmentConfig)
                : undefined;
        message.userPassword = (_e = object.userPassword) !== null && _e !== void 0 ? _e : "";
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.securityGroupIds = ((_f = object.securityGroupIds) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : false;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.ConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.cloudStorage =
            object.cloudStorage !== undefined && object.cloudStorage !== null
                ? cluster_1.CloudStorage.fromPartial(object.cloudStorage)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterRequest.$type, exports.UpdateClusterRequest);
const baseUpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterMetadata",
    clusterId: "",
};
exports.UpdateClusterMetadata = {
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterMetadata",
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
const baseAddClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.greenplum.v1.AddClusterHostsMetadata",
    clusterId: "",
};
exports.AddClusterHostsMetadata = {
    $type: "yandex.cloud.mdb.greenplum.v1.AddClusterHostsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddClusterHostsMetadata);
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
        const message = Object.assign({}, baseAddClusterHostsMetadata);
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
        const message = Object.assign({}, baseAddClusterHostsMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddClusterHostsMetadata.$type, exports.AddClusterHostsMetadata);
const baseExpandRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.ExpandRequest",
    clusterId: "",
    segmentHostCount: 0,
    addSegmentsPerHostCount: 0,
    duration: 0,
};
exports.ExpandRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.ExpandRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.segmentHostCount !== 0) {
            writer.uint32(16).int64(message.segmentHostCount);
        }
        if (message.addSegmentsPerHostCount !== 0) {
            writer.uint32(24).int64(message.addSegmentsPerHostCount);
        }
        if (message.duration !== 0) {
            writer.uint32(32).int64(message.duration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExpandRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.segmentHostCount = longToNumber(reader.int64());
                    break;
                case 3:
                    message.addSegmentsPerHostCount = longToNumber(reader.int64());
                    break;
                case 4:
                    message.duration = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExpandRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.segmentHostCount =
            object.segmentHostCount !== undefined && object.segmentHostCount !== null
                ? Number(object.segmentHostCount)
                : 0;
        message.addSegmentsPerHostCount =
            object.addSegmentsPerHostCount !== undefined &&
                object.addSegmentsPerHostCount !== null
                ? Number(object.addSegmentsPerHostCount)
                : 0;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Number(object.duration)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.segmentHostCount !== undefined &&
            (obj.segmentHostCount = Math.round(message.segmentHostCount));
        message.addSegmentsPerHostCount !== undefined &&
            (obj.addSegmentsPerHostCount = Math.round(message.addSegmentsPerHostCount));
        message.duration !== undefined &&
            (obj.duration = Math.round(message.duration));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseExpandRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.segmentHostCount = (_b = object.segmentHostCount) !== null && _b !== void 0 ? _b : 0;
        message.addSegmentsPerHostCount = (_c = object.addSegmentsPerHostCount) !== null && _c !== void 0 ? _c : 0;
        message.duration = (_d = object.duration) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExpandRequest.$type, exports.ExpandRequest);
const baseDeleteClusterRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterRequest",
    clusterId: "",
};
exports.DeleteClusterRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterRequest",
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
    $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterMetadata",
    clusterId: "",
};
exports.DeleteClusterMetadata = {
    $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterMetadata",
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
    $type: "yandex.cloud.mdb.greenplum.v1.StartClusterRequest",
    clusterId: "",
};
exports.StartClusterRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.StartClusterRequest",
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
    $type: "yandex.cloud.mdb.greenplum.v1.StartClusterMetadata",
    clusterId: "",
};
exports.StartClusterMetadata = {
    $type: "yandex.cloud.mdb.greenplum.v1.StartClusterMetadata",
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
    $type: "yandex.cloud.mdb.greenplum.v1.StopClusterRequest",
    clusterId: "",
};
exports.StopClusterRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.StopClusterRequest",
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
    $type: "yandex.cloud.mdb.greenplum.v1.StopClusterMetadata",
    clusterId: "",
};
exports.StopClusterMetadata = {
    $type: "yandex.cloud.mdb.greenplum.v1.StopClusterMetadata",
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
const baseListClusterOperationsRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterOperationsRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsRequest",
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsResponse",
    nextPageToken: "",
};
exports.ListClusterOperationsResponse = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsResponse",
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterHostsRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsRequest",
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsResponse",
    nextPageToken: "",
};
exports.ListClusterHostsResponse = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hosts) {
            host_1.Host.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.hosts.push(host_1.Host.decode(reader, reader.uint32()));
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
        message.hosts = ((_a = object.hosts) !== null && _a !== void 0 ? _a : []).map((e) => host_1.Host.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? host_1.Host.toJSON(e) : undefined));
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
        message.hosts = ((_a = object.hosts) === null || _a === void 0 ? void 0 : _a.map((e) => host_1.Host.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterHostsResponse.$type, exports.ListClusterHostsResponse);
const baseMasterSubclusterConfigSpec = {
    $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfigSpec",
};
exports.MasterSubclusterConfigSpec = {
    $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            config_1.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMasterSubclusterConfigSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = config_1.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMasterSubclusterConfigSpec);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? config_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? config_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMasterSubclusterConfigSpec);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? config_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MasterSubclusterConfigSpec.$type, exports.MasterSubclusterConfigSpec);
const baseSegmentSubclusterConfigSpec = {
    $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfigSpec",
};
exports.SegmentSubclusterConfigSpec = {
    $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            config_1.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSegmentSubclusterConfigSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = config_1.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSegmentSubclusterConfigSpec);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? config_1.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? config_1.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSegmentSubclusterConfigSpec);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? config_1.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SegmentSubclusterConfigSpec.$type, exports.SegmentSubclusterConfigSpec);
const baseListClusterLogsResponse = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsResponse",
    nextPageToken: "",
};
exports.ListClusterLogsResponse = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsResponse",
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
const baseLogRecord = {
    $type: "yandex.cloud.mdb.greenplum.v1.LogRecord",
};
exports.LogRecord = {
    $type: "yandex.cloud.mdb.greenplum.v1.LogRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.message).forEach(([key, value]) => {
            exports.LogRecord_MessageEntry.encode({
                $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry",
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
    $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry",
    key: "",
    value: "",
};
exports.LogRecord_MessageEntry = {
    $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry",
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    serviceType: 0,
    pageSize: 0,
    pageToken: "",
    alwaysNextPageToken: false,
    filter: "",
};
exports.ListClusterLogsRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsRequest",
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
        if (message.filter !== "") {
            writer.uint32(74).string(message.filter);
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
                case 9:
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
            (obj.serviceType = listClusterLogsRequest_ServiceTypeToJSON(message.serviceType));
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.alwaysNextPageToken !== undefined &&
            (obj.alwaysNextPageToken = message.alwaysNextPageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseListClusterLogsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.columnFilter = ((_b = object.columnFilter) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.serviceType = (_c = object.serviceType) !== null && _c !== void 0 ? _c : 0;
        message.fromTime = (_d = object.fromTime) !== null && _d !== void 0 ? _d : undefined;
        message.toTime = (_e = object.toTime) !== null && _e !== void 0 ? _e : undefined;
        message.pageSize = (_f = object.pageSize) !== null && _f !== void 0 ? _f : 0;
        message.pageToken = (_g = object.pageToken) !== null && _g !== void 0 ? _g : "";
        message.alwaysNextPageToken = (_h = object.alwaysNextPageToken) !== null && _h !== void 0 ? _h : false;
        message.filter = (_j = object.filter) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterLogsRequest.$type, exports.ListClusterLogsRequest);
const baseListClusterBackupsRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterBackupsRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsRequest",
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
const baseStreamLogRecord = {
    $type: "yandex.cloud.mdb.greenplum.v1.StreamLogRecord",
    nextRecordToken: "",
};
exports.StreamLogRecord = {
    $type: "yandex.cloud.mdb.greenplum.v1.StreamLogRecord",
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
    $type: "yandex.cloud.mdb.greenplum.v1.StreamClusterLogsRequest",
    clusterId: "",
    columnFilter: "",
    serviceType: 0,
    recordToken: "",
    filter: "",
};
exports.StreamClusterLogsRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.StreamClusterLogsRequest",
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
const baseListClusterBackupsResponse = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsResponse",
    nextPageToken: "",
};
exports.ListClusterBackupsResponse = {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsResponse",
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
const baseRestoreClusterRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest",
    backupId: "",
    folderId: "",
    name: "",
    description: "",
    environment: 0,
    networkId: "",
    securityGroupIds: "",
    deletionProtection: false,
    hostGroupIds: "",
    placementGroupId: "",
    segmentHostCount: 0,
    segmentInHost: 0,
};
exports.RestoreClusterRequest = {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(130).fork()).ldelim();
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.RestoreClusterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(48).int32(message.environment);
        }
        if (message.config !== undefined) {
            cluster_1.GreenplumRestoreConfig.encode(message.config, writer.uint32(58).fork()).ldelim();
        }
        if (message.masterResources !== undefined) {
            config_1.Resources.encode(message.masterResources, writer.uint32(66).fork()).ldelim();
        }
        if (message.segmentResources !== undefined) {
            config_1.Resources.encode(message.segmentResources, writer.uint32(74).fork()).ldelim();
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
        if (message.placementGroupId !== "") {
            writer.uint32(114).string(message.placementGroupId);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(122).fork()).ldelim();
        }
        if (message.segmentHostCount !== 0) {
            writer.uint32(136).int64(message.segmentHostCount);
        }
        if (message.segmentInHost !== 0) {
            writer.uint32(144).int64(message.segmentInHost);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.labels = {};
        message.securityGroupIds = [];
        message.hostGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 16:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.RestoreClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.environment = reader.int32();
                    break;
                case 7:
                    message.config = cluster_1.GreenplumRestoreConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.masterResources = config_1.Resources.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.segmentResources = config_1.Resources.decode(reader, reader.uint32());
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
                case 14:
                    message.placementGroupId = reader.string();
                    break;
                case 15:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.segmentHostCount = longToNumber(reader.int64());
                    break;
                case 18:
                    message.segmentInHost = longToNumber(reader.int64());
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
        message.time =
            object.time !== undefined && object.time !== null
                ? fromJsonTimestamp(object.time)
                : undefined;
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
        message.config =
            object.config !== undefined && object.config !== null
                ? cluster_1.GreenplumRestoreConfig.fromJSON(object.config)
                : undefined;
        message.masterResources =
            object.masterResources !== undefined && object.masterResources !== null
                ? config_1.Resources.fromJSON(object.masterResources)
                : undefined;
        message.segmentResources =
            object.segmentResources !== undefined && object.segmentResources !== null
                ? config_1.Resources.fromJSON(object.segmentResources)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.hostGroupIds = ((_c = object.hostGroupIds) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
                : "";
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        message.segmentHostCount =
            object.segmentHostCount !== undefined && object.segmentHostCount !== null
                ? Number(object.segmentHostCount)
                : 0;
        message.segmentInHost =
            object.segmentInHost !== undefined && object.segmentInHost !== null
                ? Number(object.segmentInHost)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.time !== undefined && (obj.time = message.time.toISOString());
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
        message.config !== undefined &&
            (obj.config = message.config
                ? cluster_1.GreenplumRestoreConfig.toJSON(message.config)
                : undefined);
        message.masterResources !== undefined &&
            (obj.masterResources = message.masterResources
                ? config_1.Resources.toJSON(message.masterResources)
                : undefined);
        message.segmentResources !== undefined &&
            (obj.segmentResources = message.segmentResources
                ? config_1.Resources.toJSON(message.segmentResources)
                : undefined);
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
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        message.segmentHostCount !== undefined &&
            (obj.segmentHostCount = Math.round(message.segmentHostCount));
        message.segmentInHost !== undefined &&
            (obj.segmentInHost = Math.round(message.segmentInHost));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const message = Object.assign({}, baseRestoreClusterRequest);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : undefined;
        message.folderId = (_c = object.folderId) !== null && _c !== void 0 ? _c : "";
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.environment = (_g = object.environment) !== null && _g !== void 0 ? _g : 0;
        message.config =
            object.config !== undefined && object.config !== null
                ? cluster_1.GreenplumRestoreConfig.fromPartial(object.config)
                : undefined;
        message.masterResources =
            object.masterResources !== undefined && object.masterResources !== null
                ? config_1.Resources.fromPartial(object.masterResources)
                : undefined;
        message.segmentResources =
            object.segmentResources !== undefined && object.segmentResources !== null
                ? config_1.Resources.fromPartial(object.segmentResources)
                : undefined;
        message.networkId = (_h = object.networkId) !== null && _h !== void 0 ? _h : "";
        message.securityGroupIds = ((_j = object.securityGroupIds) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.deletionProtection = (_k = object.deletionProtection) !== null && _k !== void 0 ? _k : false;
        message.hostGroupIds = ((_l = object.hostGroupIds) === null || _l === void 0 ? void 0 : _l.map((e) => e)) || [];
        message.placementGroupId = (_m = object.placementGroupId) !== null && _m !== void 0 ? _m : "";
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined &&
                object.maintenanceWindow !== null
                ? maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.segmentHostCount = (_o = object.segmentHostCount) !== null && _o !== void 0 ? _o : 0;
        message.segmentInHost = (_p = object.segmentInHost) !== null && _p !== void 0 ? _p : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreClusterRequest.$type, exports.RestoreClusterRequest);
const baseRestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.RestoreClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterMetadata",
    clusterId: "",
    backupId: "",
};
exports.RestoreClusterMetadata = {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterMetadata",
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
/** A set of methods for managing Greenplum® clusters. */
exports.ClusterServiceService = {
    /**
     * Returns the specified Greenplum® cluster.
     *
     * To get the list of all available Greenplum® clusters, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
    /** Retrieves a list of Greenplum® clusters that belong to the specified folder. */
    list: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClustersResponse.decode(value),
    },
    /** Creates a Greenplum® cluster in the specified folder. */
    create: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified Greenplum® cluster. */
    update: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Expands the specified Greenplum® cluster. */
    expand: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Expand",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ExpandRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ExpandRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified Greenplum® cluster. */
    delete: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified Greenplum® cluster. */
    start: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified Greenplum® cluster. */
    stop: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves a list of master hosts for the specified cluster. */
    listMasterHosts: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListMasterHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterHostsResponse.decode(value),
    },
    /** Retrieves a list of segment hosts for the specified cluster. */
    listSegmentHosts: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListSegmentHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterHostsResponse.decode(value),
    },
    /** Retrieves logs for the specified Greenplum® cluster. */
    listLogs: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListLogs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterLogsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterLogsResponse.decode(value),
    },
    /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
    streamLogs: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/StreamLogs",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.StreamClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StreamClusterLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.StreamLogRecord.encode(value).finish()),
        responseDeserialize: (value) => exports.StreamLogRecord.decode(value),
    },
    /** Retrieves a list of available backups for the specified Greenplum® cluster. */
    listBackups: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListBackups",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterBackupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterBackupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterBackupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterBackupsResponse.decode(value),
    },
    /** Creates a new Greenplum® cluster using the specified backup. */
    restore: {
        path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Restore",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestoreClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestoreClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ClusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ClusterServiceService, "yandex.cloud.mdb.greenplum.v1.ClusterService");
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
