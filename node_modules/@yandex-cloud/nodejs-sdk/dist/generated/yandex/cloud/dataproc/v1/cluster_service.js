"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterServiceClient = exports.ClusterServiceService = exports.ListUILinksResponse = exports.UILink = exports.ListUILinksRequest = exports.ListClusterHostsResponse = exports.ListClusterHostsRequest = exports.ListClusterOperationsResponse = exports.ListClusterOperationsRequest = exports.StopClusterMetadata = exports.StopClusterRequest = exports.StartClusterMetadata = exports.StartClusterRequest = exports.DeleteClusterMetadata = exports.DeleteClusterRequest = exports.UpdateClusterMetadata = exports.UpdateClusterRequest_LabelsEntry = exports.UpdateClusterRequest = exports.CreateClusterMetadata = exports.CreateClusterRequest_LabelsEntry = exports.CreateClusterRequest = exports.UpdateClusterConfigSpec = exports.CreateClusterConfigSpec = exports.UpdateSubclusterConfigSpec = exports.CreateSubclusterConfigSpec = exports.ListClustersResponse = exports.ListClustersRequest = exports.GetClusterRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const subcluster_1 = require("../../../../yandex/cloud/dataproc/v1/subcluster");
const common_1 = require("../../../../yandex/cloud/dataproc/v1/common");
const cluster_1 = require("../../../../yandex/cloud/dataproc/v1/cluster");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.dataproc.v1";
const baseGetClusterRequest = {
    $type: "yandex.cloud.dataproc.v1.GetClusterRequest",
    clusterId: "",
};
exports.GetClusterRequest = {
    $type: "yandex.cloud.dataproc.v1.GetClusterRequest",
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
    $type: "yandex.cloud.dataproc.v1.ListClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListClustersRequest = {
    $type: "yandex.cloud.dataproc.v1.ListClustersRequest",
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
    $type: "yandex.cloud.dataproc.v1.ListClustersResponse",
    nextPageToken: "",
};
exports.ListClustersResponse = {
    $type: "yandex.cloud.dataproc.v1.ListClustersResponse",
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
const baseCreateSubclusterConfigSpec = {
    $type: "yandex.cloud.dataproc.v1.CreateSubclusterConfigSpec",
    name: "",
    role: 0,
    subnetId: "",
    hostsCount: 0,
    assignPublicIp: false,
};
exports.CreateSubclusterConfigSpec = {
    $type: "yandex.cloud.dataproc.v1.CreateSubclusterConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.role !== 0) {
            writer.uint32(16).int32(message.role);
        }
        if (message.resources !== undefined) {
            common_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.subnetId !== "") {
            writer.uint32(34).string(message.subnetId);
        }
        if (message.hostsCount !== 0) {
            writer.uint32(40).int64(message.hostsCount);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(48).bool(message.assignPublicIp);
        }
        if (message.autoscalingConfig !== undefined) {
            subcluster_1.AutoscalingConfig.encode(message.autoscalingConfig, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSubclusterConfigSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.role = reader.int32();
                    break;
                case 3:
                    message.resources = common_1.Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subnetId = reader.string();
                    break;
                case 5:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                case 6:
                    message.assignPublicIp = reader.bool();
                    break;
                case 7:
                    message.autoscalingConfig = subcluster_1.AutoscalingConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateSubclusterConfigSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.role =
            object.role !== undefined && object.role !== null
                ? (0, subcluster_1.roleFromJSON)(object.role)
                : 0;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? common_1.Resources.fromJSON(object.resources)
                : undefined;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.hostsCount =
            object.hostsCount !== undefined && object.hostsCount !== null
                ? Number(object.hostsCount)
                : 0;
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.autoscalingConfig =
            object.autoscalingConfig !== undefined &&
                object.autoscalingConfig !== null
                ? subcluster_1.AutoscalingConfig.fromJSON(object.autoscalingConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.role !== undefined && (obj.role = (0, subcluster_1.roleToJSON)(message.role));
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? common_1.Resources.toJSON(message.resources)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.hostsCount !== undefined &&
            (obj.hostsCount = Math.round(message.hostsCount));
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.autoscalingConfig !== undefined &&
            (obj.autoscalingConfig = message.autoscalingConfig
                ? subcluster_1.AutoscalingConfig.toJSON(message.autoscalingConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateSubclusterConfigSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.role = (_b = object.role) !== null && _b !== void 0 ? _b : 0;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? common_1.Resources.fromPartial(object.resources)
                : undefined;
        message.subnetId = (_c = object.subnetId) !== null && _c !== void 0 ? _c : "";
        message.hostsCount = (_d = object.hostsCount) !== null && _d !== void 0 ? _d : 0;
        message.assignPublicIp = (_e = object.assignPublicIp) !== null && _e !== void 0 ? _e : false;
        message.autoscalingConfig =
            object.autoscalingConfig !== undefined &&
                object.autoscalingConfig !== null
                ? subcluster_1.AutoscalingConfig.fromPartial(object.autoscalingConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSubclusterConfigSpec.$type, exports.CreateSubclusterConfigSpec);
const baseUpdateSubclusterConfigSpec = {
    $type: "yandex.cloud.dataproc.v1.UpdateSubclusterConfigSpec",
    id: "",
    name: "",
    hostsCount: 0,
};
exports.UpdateSubclusterConfigSpec = {
    $type: "yandex.cloud.dataproc.v1.UpdateSubclusterConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.resources !== undefined) {
            common_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.hostsCount !== 0) {
            writer.uint32(32).int64(message.hostsCount);
        }
        if (message.autoscalingConfig !== undefined) {
            subcluster_1.AutoscalingConfig.encode(message.autoscalingConfig, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSubclusterConfigSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.resources = common_1.Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                case 5:
                    message.autoscalingConfig = subcluster_1.AutoscalingConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateSubclusterConfigSpec);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? common_1.Resources.fromJSON(object.resources)
                : undefined;
        message.hostsCount =
            object.hostsCount !== undefined && object.hostsCount !== null
                ? Number(object.hostsCount)
                : 0;
        message.autoscalingConfig =
            object.autoscalingConfig !== undefined &&
                object.autoscalingConfig !== null
                ? subcluster_1.AutoscalingConfig.fromJSON(object.autoscalingConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? common_1.Resources.toJSON(message.resources)
                : undefined);
        message.hostsCount !== undefined &&
            (obj.hostsCount = Math.round(message.hostsCount));
        message.autoscalingConfig !== undefined &&
            (obj.autoscalingConfig = message.autoscalingConfig
                ? subcluster_1.AutoscalingConfig.toJSON(message.autoscalingConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateSubclusterConfigSpec);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? common_1.Resources.fromPartial(object.resources)
                : undefined;
        message.hostsCount = (_c = object.hostsCount) !== null && _c !== void 0 ? _c : 0;
        message.autoscalingConfig =
            object.autoscalingConfig !== undefined &&
                object.autoscalingConfig !== null
                ? subcluster_1.AutoscalingConfig.fromPartial(object.autoscalingConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSubclusterConfigSpec.$type, exports.UpdateSubclusterConfigSpec);
const baseCreateClusterConfigSpec = {
    $type: "yandex.cloud.dataproc.v1.CreateClusterConfigSpec",
    versionId: "",
};
exports.CreateClusterConfigSpec = {
    $type: "yandex.cloud.dataproc.v1.CreateClusterConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.versionId !== "") {
            writer.uint32(10).string(message.versionId);
        }
        if (message.hadoop !== undefined) {
            cluster_1.HadoopConfig.encode(message.hadoop, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.subclustersSpec) {
            exports.CreateSubclusterConfigSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateClusterConfigSpec);
        message.subclustersSpec = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versionId = reader.string();
                    break;
                case 2:
                    message.hadoop = cluster_1.HadoopConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.subclustersSpec.push(exports.CreateSubclusterConfigSpec.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseCreateClusterConfigSpec);
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.hadoop =
            object.hadoop !== undefined && object.hadoop !== null
                ? cluster_1.HadoopConfig.fromJSON(object.hadoop)
                : undefined;
        message.subclustersSpec = ((_a = object.subclustersSpec) !== null && _a !== void 0 ? _a : []).map((e) => exports.CreateSubclusterConfigSpec.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.hadoop !== undefined &&
            (obj.hadoop = message.hadoop
                ? cluster_1.HadoopConfig.toJSON(message.hadoop)
                : undefined);
        if (message.subclustersSpec) {
            obj.subclustersSpec = message.subclustersSpec.map((e) => e ? exports.CreateSubclusterConfigSpec.toJSON(e) : undefined);
        }
        else {
            obj.subclustersSpec = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateClusterConfigSpec);
        message.versionId = (_a = object.versionId) !== null && _a !== void 0 ? _a : "";
        message.hadoop =
            object.hadoop !== undefined && object.hadoop !== null
                ? cluster_1.HadoopConfig.fromPartial(object.hadoop)
                : undefined;
        message.subclustersSpec =
            ((_b = object.subclustersSpec) === null || _b === void 0 ? void 0 : _b.map((e) => exports.CreateSubclusterConfigSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterConfigSpec.$type, exports.CreateClusterConfigSpec);
const baseUpdateClusterConfigSpec = {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterConfigSpec",
};
exports.UpdateClusterConfigSpec = {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterConfigSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.subclustersSpec) {
            exports.UpdateSubclusterConfigSpec.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.hadoop !== undefined) {
            cluster_1.HadoopConfig.encode(message.hadoop, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateClusterConfigSpec);
        message.subclustersSpec = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subclustersSpec.push(exports.UpdateSubclusterConfigSpec.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.hadoop = cluster_1.HadoopConfig.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateClusterConfigSpec);
        message.subclustersSpec = ((_a = object.subclustersSpec) !== null && _a !== void 0 ? _a : []).map((e) => exports.UpdateSubclusterConfigSpec.fromJSON(e));
        message.hadoop =
            object.hadoop !== undefined && object.hadoop !== null
                ? cluster_1.HadoopConfig.fromJSON(object.hadoop)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.subclustersSpec) {
            obj.subclustersSpec = message.subclustersSpec.map((e) => e ? exports.UpdateSubclusterConfigSpec.toJSON(e) : undefined);
        }
        else {
            obj.subclustersSpec = [];
        }
        message.hadoop !== undefined &&
            (obj.hadoop = message.hadoop
                ? cluster_1.HadoopConfig.toJSON(message.hadoop)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateClusterConfigSpec);
        message.subclustersSpec =
            ((_a = object.subclustersSpec) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UpdateSubclusterConfigSpec.fromPartial(e))) || [];
        message.hadoop =
            object.hadoop !== undefined && object.hadoop !== null
                ? cluster_1.HadoopConfig.fromPartial(object.hadoop)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterConfigSpec.$type, exports.UpdateClusterConfigSpec);
const baseCreateClusterRequest = {
    $type: "yandex.cloud.dataproc.v1.CreateClusterRequest",
    folderId: "",
    name: "",
    description: "",
    zoneId: "",
    serviceAccountId: "",
    bucket: "",
    uiProxy: false,
    securityGroupIds: "",
    hostGroupIds: "",
    deletionProtection: false,
    logGroupId: "",
};
exports.CreateClusterRequest = {
    $type: "yandex.cloud.dataproc.v1.CreateClusterRequest",
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
                $type: "yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.configSpec !== undefined) {
            exports.CreateClusterConfigSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
        }
        if (message.zoneId !== "") {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(66).string(message.serviceAccountId);
        }
        if (message.bucket !== "") {
            writer.uint32(74).string(message.bucket);
        }
        if (message.uiProxy === true) {
            writer.uint32(80).bool(message.uiProxy);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(98).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(104).bool(message.deletionProtection);
        }
        if (message.logGroupId !== "") {
            writer.uint32(114).string(message.logGroupId);
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
                case 6:
                    message.configSpec = exports.CreateClusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    message.bucket = reader.string();
                    break;
                case 10:
                    message.uiProxy = reader.bool();
                    break;
                case 11:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 12:
                    message.hostGroupIds.push(reader.string());
                    break;
                case 13:
                    message.deletionProtection = reader.bool();
                    break;
                case 14:
                    message.logGroupId = reader.string();
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
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.CreateClusterConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.bucket =
            object.bucket !== undefined && object.bucket !== null
                ? String(object.bucket)
                : "";
        message.uiProxy =
            object.uiProxy !== undefined && object.uiProxy !== null
                ? Boolean(object.uiProxy)
                : false;
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.hostGroupIds = ((_c = object.hostGroupIds) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
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
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.CreateClusterConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.uiProxy !== undefined && (obj.uiProxy = message.uiProxy);
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
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
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
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? exports.CreateClusterConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.zoneId = (_e = object.zoneId) !== null && _e !== void 0 ? _e : "";
        message.serviceAccountId = (_f = object.serviceAccountId) !== null && _f !== void 0 ? _f : "";
        message.bucket = (_g = object.bucket) !== null && _g !== void 0 ? _g : "";
        message.uiProxy = (_h = object.uiProxy) !== null && _h !== void 0 ? _h : false;
        message.securityGroupIds = ((_j = object.securityGroupIds) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.hostGroupIds = ((_k = object.hostGroupIds) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.deletionProtection = (_l = object.deletionProtection) !== null && _l !== void 0 ? _l : false;
        message.logGroupId = (_m = object.logGroupId) !== null && _m !== void 0 ? _m : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterRequest.$type, exports.CreateClusterRequest);
const baseCreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.dataproc.v1.CreateClusterMetadata",
    clusterId: "",
};
exports.CreateClusterMetadata = {
    $type: "yandex.cloud.dataproc.v1.CreateClusterMetadata",
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
    $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest",
    clusterId: "",
    description: "",
    name: "",
    serviceAccountId: "",
    bucket: "",
    decommissionTimeout: 0,
    uiProxy: false,
    securityGroupIds: "",
    deletionProtection: false,
    logGroupId: "",
};
exports.UpdateClusterRequest = {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest",
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
                $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.configSpec !== undefined) {
            exports.UpdateClusterConfigSpec.encode(message.configSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(50).string(message.name);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.bucket !== "") {
            writer.uint32(66).string(message.bucket);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(72).int64(message.decommissionTimeout);
        }
        if (message.uiProxy === true) {
            writer.uint32(80).bool(message.uiProxy);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
        }
        if (message.logGroupId !== "") {
            writer.uint32(106).string(message.logGroupId);
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
                    message.configSpec = exports.UpdateClusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                case 8:
                    message.bucket = reader.string();
                    break;
                case 9:
                    message.decommissionTimeout = longToNumber(reader.int64());
                    break;
                case 10:
                    message.uiProxy = reader.bool();
                    break;
                case 11:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 12:
                    message.deletionProtection = reader.bool();
                    break;
                case 13:
                    message.logGroupId = reader.string();
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
                ? exports.UpdateClusterConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.bucket =
            object.bucket !== undefined && object.bucket !== null
                ? String(object.bucket)
                : "";
        message.decommissionTimeout =
            object.decommissionTimeout !== undefined &&
                object.decommissionTimeout !== null
                ? Number(object.decommissionTimeout)
                : 0;
        message.uiProxy =
            object.uiProxy !== undefined && object.uiProxy !== null
                ? Boolean(object.uiProxy)
                : false;
        message.securityGroupIds = ((_b = object.securityGroupIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
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
                ? exports.UpdateClusterConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = Math.round(message.decommissionTimeout));
        message.uiProxy !== undefined && (obj.uiProxy = message.uiProxy);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
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
                ? exports.UpdateClusterConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.serviceAccountId = (_e = object.serviceAccountId) !== null && _e !== void 0 ? _e : "";
        message.bucket = (_f = object.bucket) !== null && _f !== void 0 ? _f : "";
        message.decommissionTimeout = (_g = object.decommissionTimeout) !== null && _g !== void 0 ? _g : 0;
        message.uiProxy = (_h = object.uiProxy) !== null && _h !== void 0 ? _h : false;
        message.securityGroupIds = ((_j = object.securityGroupIds) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.deletionProtection = (_k = object.deletionProtection) !== null && _k !== void 0 ? _k : false;
        message.logGroupId = (_l = object.logGroupId) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterRequest.$type, exports.UpdateClusterRequest);
const baseUpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry",
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
    $type: "yandex.cloud.dataproc.v1.UpdateClusterMetadata",
    clusterId: "",
};
exports.UpdateClusterMetadata = {
    $type: "yandex.cloud.dataproc.v1.UpdateClusterMetadata",
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
    $type: "yandex.cloud.dataproc.v1.DeleteClusterRequest",
    clusterId: "",
    decommissionTimeout: 0,
};
exports.DeleteClusterRequest = {
    $type: "yandex.cloud.dataproc.v1.DeleteClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(16).int64(message.decommissionTimeout);
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
                case 2:
                    message.decommissionTimeout = longToNumber(reader.int64());
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
        message.decommissionTimeout =
            object.decommissionTimeout !== undefined &&
                object.decommissionTimeout !== null
                ? Number(object.decommissionTimeout)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = Math.round(message.decommissionTimeout));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.decommissionTimeout = (_b = object.decommissionTimeout) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterRequest.$type, exports.DeleteClusterRequest);
const baseDeleteClusterMetadata = {
    $type: "yandex.cloud.dataproc.v1.DeleteClusterMetadata",
    clusterId: "",
};
exports.DeleteClusterMetadata = {
    $type: "yandex.cloud.dataproc.v1.DeleteClusterMetadata",
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
    $type: "yandex.cloud.dataproc.v1.StartClusterRequest",
    clusterId: "",
};
exports.StartClusterRequest = {
    $type: "yandex.cloud.dataproc.v1.StartClusterRequest",
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
    $type: "yandex.cloud.dataproc.v1.StartClusterMetadata",
    clusterId: "",
};
exports.StartClusterMetadata = {
    $type: "yandex.cloud.dataproc.v1.StartClusterMetadata",
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
    $type: "yandex.cloud.dataproc.v1.StopClusterRequest",
    clusterId: "",
    decommissionTimeout: 0,
};
exports.StopClusterRequest = {
    $type: "yandex.cloud.dataproc.v1.StopClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(16).int64(message.decommissionTimeout);
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
                case 2:
                    message.decommissionTimeout = longToNumber(reader.int64());
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
        message.decommissionTimeout =
            object.decommissionTimeout !== undefined &&
                object.decommissionTimeout !== null
                ? Number(object.decommissionTimeout)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = Math.round(message.decommissionTimeout));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseStopClusterRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.decommissionTimeout = (_b = object.decommissionTimeout) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopClusterRequest.$type, exports.StopClusterRequest);
const baseStopClusterMetadata = {
    $type: "yandex.cloud.dataproc.v1.StopClusterMetadata",
    clusterId: "",
};
exports.StopClusterMetadata = {
    $type: "yandex.cloud.dataproc.v1.StopClusterMetadata",
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
    $type: "yandex.cloud.dataproc.v1.ListClusterOperationsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListClusterOperationsRequest = {
    $type: "yandex.cloud.dataproc.v1.ListClusterOperationsRequest",
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
    $type: "yandex.cloud.dataproc.v1.ListClusterOperationsResponse",
    nextPageToken: "",
};
exports.ListClusterOperationsResponse = {
    $type: "yandex.cloud.dataproc.v1.ListClusterOperationsResponse",
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
    $type: "yandex.cloud.dataproc.v1.ListClusterHostsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListClusterHostsRequest = {
    $type: "yandex.cloud.dataproc.v1.ListClusterHostsRequest",
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
        if (message.filter !== "") {
            writer.uint32(34).string(message.filter);
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
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListClusterHostsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterHostsRequest.$type, exports.ListClusterHostsRequest);
const baseListClusterHostsResponse = {
    $type: "yandex.cloud.dataproc.v1.ListClusterHostsResponse",
    nextPageToken: "",
};
exports.ListClusterHostsResponse = {
    $type: "yandex.cloud.dataproc.v1.ListClusterHostsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hosts) {
            subcluster_1.Host.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.hosts.push(subcluster_1.Host.decode(reader, reader.uint32()));
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
        message.hosts = ((_a = object.hosts) !== null && _a !== void 0 ? _a : []).map((e) => subcluster_1.Host.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? subcluster_1.Host.toJSON(e) : undefined));
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
        message.hosts = ((_a = object.hosts) === null || _a === void 0 ? void 0 : _a.map((e) => subcluster_1.Host.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterHostsResponse.$type, exports.ListClusterHostsResponse);
const baseListUILinksRequest = {
    $type: "yandex.cloud.dataproc.v1.ListUILinksRequest",
    clusterId: "",
};
exports.ListUILinksRequest = {
    $type: "yandex.cloud.dataproc.v1.ListUILinksRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListUILinksRequest);
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
        const message = Object.assign({}, baseListUILinksRequest);
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
        const message = Object.assign({}, baseListUILinksRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListUILinksRequest.$type, exports.ListUILinksRequest);
const baseUILink = {
    $type: "yandex.cloud.dataproc.v1.UILink",
    name: "",
    url: "",
};
exports.UILink = {
    $type: "yandex.cloud.dataproc.v1.UILink",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUILink);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUILink);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.url =
            object.url !== undefined && object.url !== null ? String(object.url) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUILink);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.url = (_b = object.url) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UILink.$type, exports.UILink);
const baseListUILinksResponse = {
    $type: "yandex.cloud.dataproc.v1.ListUILinksResponse",
};
exports.ListUILinksResponse = {
    $type: "yandex.cloud.dataproc.v1.ListUILinksResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.links) {
            exports.UILink.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListUILinksResponse);
        message.links = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.links.push(exports.UILink.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListUILinksResponse);
        message.links = ((_a = object.links) !== null && _a !== void 0 ? _a : []).map((e) => exports.UILink.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.links) {
            obj.links = message.links.map((e) => (e ? exports.UILink.toJSON(e) : undefined));
        }
        else {
            obj.links = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListUILinksResponse);
        message.links = ((_a = object.links) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UILink.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListUILinksResponse.$type, exports.ListUILinksResponse);
/** A set of methods for managing Data Proc clusters. */
exports.ClusterServiceService = {
    /**
     * Returns the specified cluster.
     *
     * To get the list of all available clusters, make a [ClusterService.List] request.
     */
    get: {
        path: "/yandex.cloud.dataproc.v1.ClusterService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
    /** Retrieves the list of clusters in the specified folder. */
    list: {
        path: "/yandex.cloud.dataproc.v1.ClusterService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClustersResponse.decode(value),
    },
    /** Creates a cluster in the specified folder. */
    create: {
        path: "/yandex.cloud.dataproc.v1.ClusterService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the configuration of the specified cluster. */
    update: {
        path: "/yandex.cloud.dataproc.v1.ClusterService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified cluster. */
    delete: {
        path: "/yandex.cloud.dataproc.v1.ClusterService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified cluster. */
    start: {
        path: "/yandex.cloud.dataproc.v1.ClusterService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified cluster. */
    stop: {
        path: "/yandex.cloud.dataproc.v1.ClusterService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified cluster. */
    listOperations: {
        path: "/yandex.cloud.dataproc.v1.ClusterService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves the list of hosts in the specified cluster. */
    listHosts: {
        path: "/yandex.cloud.dataproc.v1.ClusterService/ListHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterHostsResponse.decode(value),
    },
    /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
    listUILinks: {
        path: "/yandex.cloud.dataproc.v1.ClusterService/ListUILinks",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListUILinksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListUILinksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListUILinksResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListUILinksResponse.decode(value),
    },
};
exports.ClusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ClusterServiceService, "yandex.cloud.dataproc.v1.ClusterService");
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
