"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GpuClusterServiceClient = exports.GpuClusterServiceService = exports.ListGpuClusterInstancesResponse = exports.ListGpuClusterInstancesRequest = exports.ListGpuClusterOperationsResponse = exports.ListGpuClusterOperationsRequest = exports.DeleteGpuClusterMetadata = exports.DeleteGpuClusterRequest = exports.UpdateGpuClusterMetadata = exports.UpdateGpuClusterRequest_LabelsEntry = exports.UpdateGpuClusterRequest = exports.CreateGpuClusterMetadata = exports.CreateGpuClusterRequest_LabelsEntry = exports.CreateGpuClusterRequest = exports.ListGpuClustersResponse = exports.ListGpuClustersRequest = exports.GetGpuClusterRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const gpu_cluster_1 = require("../../../../yandex/cloud/compute/v1/gpu_cluster");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const instance_1 = require("../../../../yandex/cloud/compute/v1/instance");
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseGetGpuClusterRequest = {
    $type: "yandex.cloud.compute.v1.GetGpuClusterRequest",
    gpuClusterId: "",
};
exports.GetGpuClusterRequest = {
    $type: "yandex.cloud.compute.v1.GetGpuClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gpuClusterId !== "") {
            writer.uint32(10).string(message.gpuClusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetGpuClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gpuClusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetGpuClusterRequest);
        message.gpuClusterId =
            object.gpuClusterId !== undefined && object.gpuClusterId !== null
                ? String(object.gpuClusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gpuClusterId !== undefined &&
            (obj.gpuClusterId = message.gpuClusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetGpuClusterRequest);
        message.gpuClusterId = (_a = object.gpuClusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGpuClusterRequest.$type, exports.GetGpuClusterRequest);
const baseListGpuClustersRequest = {
    $type: "yandex.cloud.compute.v1.ListGpuClustersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListGpuClustersRequest = {
    $type: "yandex.cloud.compute.v1.ListGpuClustersRequest",
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
        if (message.orderBy !== "") {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListGpuClustersRequest);
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
                case 5:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListGpuClustersRequest);
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
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null
                ? String(object.orderBy)
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
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListGpuClustersRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGpuClustersRequest.$type, exports.ListGpuClustersRequest);
const baseListGpuClustersResponse = {
    $type: "yandex.cloud.compute.v1.ListGpuClustersResponse",
    nextPageToken: "",
};
exports.ListGpuClustersResponse = {
    $type: "yandex.cloud.compute.v1.ListGpuClustersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.gpuClusters) {
            gpu_cluster_1.GpuCluster.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListGpuClustersResponse);
        message.gpuClusters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gpuClusters.push(gpu_cluster_1.GpuCluster.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListGpuClustersResponse);
        message.gpuClusters = ((_a = object.gpuClusters) !== null && _a !== void 0 ? _a : []).map((e) => gpu_cluster_1.GpuCluster.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.gpuClusters) {
            obj.gpuClusters = message.gpuClusters.map((e) => e ? gpu_cluster_1.GpuCluster.toJSON(e) : undefined);
        }
        else {
            obj.gpuClusters = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListGpuClustersResponse);
        message.gpuClusters =
            ((_a = object.gpuClusters) === null || _a === void 0 ? void 0 : _a.map((e) => gpu_cluster_1.GpuCluster.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGpuClustersResponse.$type, exports.ListGpuClustersResponse);
const baseCreateGpuClusterRequest = {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest",
    folderId: "",
    name: "",
    description: "",
    zoneId: "",
    interconnectType: 0,
};
exports.CreateGpuClusterRequest = {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest",
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
            exports.CreateGpuClusterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zoneId !== "") {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.interconnectType !== 0) {
            writer.uint32(48).int32(message.interconnectType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateGpuClusterRequest);
        message.labels = {};
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
                    const entry4 = exports.CreateGpuClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zoneId = reader.string();
                    break;
                case 6:
                    message.interconnectType = reader.int32();
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
        const message = Object.assign({}, baseCreateGpuClusterRequest);
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
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.interconnectType =
            object.interconnectType !== undefined && object.interconnectType !== null
                ? (0, gpu_cluster_1.gpuInterconnectTypeFromJSON)(object.interconnectType)
                : 0;
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.interconnectType !== undefined &&
            (obj.interconnectType = (0, gpu_cluster_1.gpuInterconnectTypeToJSON)(message.interconnectType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateGpuClusterRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.zoneId = (_e = object.zoneId) !== null && _e !== void 0 ? _e : "";
        message.interconnectType = (_f = object.interconnectType) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateGpuClusterRequest.$type, exports.CreateGpuClusterRequest);
const baseCreateGpuClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateGpuClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateGpuClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateGpuClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateGpuClusterRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateGpuClusterRequest_LabelsEntry.$type, exports.CreateGpuClusterRequest_LabelsEntry);
const baseCreateGpuClusterMetadata = {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterMetadata",
    gpuClusterId: "",
};
exports.CreateGpuClusterMetadata = {
    $type: "yandex.cloud.compute.v1.CreateGpuClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gpuClusterId !== "") {
            writer.uint32(10).string(message.gpuClusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateGpuClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gpuClusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateGpuClusterMetadata);
        message.gpuClusterId =
            object.gpuClusterId !== undefined && object.gpuClusterId !== null
                ? String(object.gpuClusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gpuClusterId !== undefined &&
            (obj.gpuClusterId = message.gpuClusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateGpuClusterMetadata);
        message.gpuClusterId = (_a = object.gpuClusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateGpuClusterMetadata.$type, exports.CreateGpuClusterMetadata);
const baseUpdateGpuClusterRequest = {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest",
    gpuClusterId: "",
    name: "",
    description: "",
};
exports.UpdateGpuClusterRequest = {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gpuClusterId !== "") {
            writer.uint32(10).string(message.gpuClusterId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateGpuClusterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGpuClusterRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gpuClusterId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateGpuClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
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
        const message = Object.assign({}, baseUpdateGpuClusterRequest);
        message.gpuClusterId =
            object.gpuClusterId !== undefined && object.gpuClusterId !== null
                ? String(object.gpuClusterId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gpuClusterId !== undefined &&
            (obj.gpuClusterId = message.gpuClusterId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateGpuClusterRequest);
        message.gpuClusterId = (_a = object.gpuClusterId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGpuClusterRequest.$type, exports.UpdateGpuClusterRequest);
const baseUpdateGpuClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateGpuClusterRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateGpuClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateGpuClusterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateGpuClusterRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGpuClusterRequest_LabelsEntry.$type, exports.UpdateGpuClusterRequest_LabelsEntry);
const baseUpdateGpuClusterMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterMetadata",
    gpuClusterId: "",
};
exports.UpdateGpuClusterMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateGpuClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gpuClusterId !== "") {
            writer.uint32(10).string(message.gpuClusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGpuClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gpuClusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateGpuClusterMetadata);
        message.gpuClusterId =
            object.gpuClusterId !== undefined && object.gpuClusterId !== null
                ? String(object.gpuClusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gpuClusterId !== undefined &&
            (obj.gpuClusterId = message.gpuClusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateGpuClusterMetadata);
        message.gpuClusterId = (_a = object.gpuClusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGpuClusterMetadata.$type, exports.UpdateGpuClusterMetadata);
const baseDeleteGpuClusterRequest = {
    $type: "yandex.cloud.compute.v1.DeleteGpuClusterRequest",
    gpuClusterId: "",
};
exports.DeleteGpuClusterRequest = {
    $type: "yandex.cloud.compute.v1.DeleteGpuClusterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gpuClusterId !== "") {
            writer.uint32(10).string(message.gpuClusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteGpuClusterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gpuClusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteGpuClusterRequest);
        message.gpuClusterId =
            object.gpuClusterId !== undefined && object.gpuClusterId !== null
                ? String(object.gpuClusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gpuClusterId !== undefined &&
            (obj.gpuClusterId = message.gpuClusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteGpuClusterRequest);
        message.gpuClusterId = (_a = object.gpuClusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteGpuClusterRequest.$type, exports.DeleteGpuClusterRequest);
const baseDeleteGpuClusterMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteGpuClusterMetadata",
    gpuClusterId: "",
};
exports.DeleteGpuClusterMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteGpuClusterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gpuClusterId !== "") {
            writer.uint32(10).string(message.gpuClusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteGpuClusterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gpuClusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteGpuClusterMetadata);
        message.gpuClusterId =
            object.gpuClusterId !== undefined && object.gpuClusterId !== null
                ? String(object.gpuClusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gpuClusterId !== undefined &&
            (obj.gpuClusterId = message.gpuClusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteGpuClusterMetadata);
        message.gpuClusterId = (_a = object.gpuClusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteGpuClusterMetadata.$type, exports.DeleteGpuClusterMetadata);
const baseListGpuClusterOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsRequest",
    gpuClusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListGpuClusterOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gpuClusterId !== "") {
            writer.uint32(10).string(message.gpuClusterId);
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
        const message = Object.assign({}, baseListGpuClusterOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gpuClusterId = reader.string();
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
        const message = Object.assign({}, baseListGpuClusterOperationsRequest);
        message.gpuClusterId =
            object.gpuClusterId !== undefined && object.gpuClusterId !== null
                ? String(object.gpuClusterId)
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
        message.gpuClusterId !== undefined &&
            (obj.gpuClusterId = message.gpuClusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListGpuClusterOperationsRequest);
        message.gpuClusterId = (_a = object.gpuClusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGpuClusterOperationsRequest.$type, exports.ListGpuClusterOperationsRequest);
const baseListGpuClusterOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsResponse",
    nextPageToken: "",
};
exports.ListGpuClusterOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsResponse",
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
        const message = Object.assign({}, baseListGpuClusterOperationsResponse);
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
        const message = Object.assign({}, baseListGpuClusterOperationsResponse);
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
        const message = Object.assign({}, baseListGpuClusterOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGpuClusterOperationsResponse.$type, exports.ListGpuClusterOperationsResponse);
const baseListGpuClusterInstancesRequest = {
    $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesRequest",
    gpuClusterId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListGpuClusterInstancesRequest = {
    $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gpuClusterId !== "") {
            writer.uint32(10).string(message.gpuClusterId);
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
        const message = Object.assign({}, baseListGpuClusterInstancesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gpuClusterId = reader.string();
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
        const message = Object.assign({}, baseListGpuClusterInstancesRequest);
        message.gpuClusterId =
            object.gpuClusterId !== undefined && object.gpuClusterId !== null
                ? String(object.gpuClusterId)
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
        message.gpuClusterId !== undefined &&
            (obj.gpuClusterId = message.gpuClusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListGpuClusterInstancesRequest);
        message.gpuClusterId = (_a = object.gpuClusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGpuClusterInstancesRequest.$type, exports.ListGpuClusterInstancesRequest);
const baseListGpuClusterInstancesResponse = {
    $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesResponse",
    nextPageToken: "",
};
exports.ListGpuClusterInstancesResponse = {
    $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.instances) {
            instance_1.Instance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListGpuClusterInstancesResponse);
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(instance_1.Instance.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListGpuClusterInstancesResponse);
        message.instances = ((_a = object.instances) !== null && _a !== void 0 ? _a : []).map((e) => instance_1.Instance.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.instances) {
            obj.instances = message.instances.map((e) => e ? instance_1.Instance.toJSON(e) : undefined);
        }
        else {
            obj.instances = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListGpuClusterInstancesResponse);
        message.instances =
            ((_a = object.instances) === null || _a === void 0 ? void 0 : _a.map((e) => instance_1.Instance.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGpuClusterInstancesResponse.$type, exports.ListGpuClusterInstancesResponse);
/** A set of methods for managing GPU clusters. */
exports.GpuClusterServiceService = {
    /**
     * Returns the specified GPU cluster.
     *
     * To get the list of available GPU clusters, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.compute.v1.GpuClusterService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetGpuClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetGpuClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(gpu_cluster_1.GpuCluster.encode(value).finish()),
        responseDeserialize: (value) => gpu_cluster_1.GpuCluster.decode(value),
    },
    /** Retrieves the list of GPU clusters in the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.GpuClusterService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListGpuClustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListGpuClustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListGpuClustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListGpuClustersResponse.decode(value),
    },
    /** Creates a GPU cluster in the specified folder. */
    create: {
        path: "/yandex.cloud.compute.v1.GpuClusterService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateGpuClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateGpuClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified GPU cluster.
     *
     * Currently only name, description and labels can be updated.
     */
    update: {
        path: "/yandex.cloud.compute.v1.GpuClusterService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateGpuClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateGpuClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified GPU cluster.
     *
     * GPU cluster can be deleted only if it doesn't have any instances associated with it.
     */
    delete: {
        path: "/yandex.cloud.compute.v1.GpuClusterService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteGpuClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteGpuClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified GPU cluster. */
    listOperations: {
        path: "/yandex.cloud.compute.v1.GpuClusterService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListGpuClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListGpuClusterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListGpuClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListGpuClusterOperationsResponse.decode(value),
    },
    /** List instances created in this GPU cluster. */
    listInstances: {
        path: "/yandex.cloud.compute.v1.GpuClusterService/ListInstances",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListGpuClusterInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListGpuClusterInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListGpuClusterInstancesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListGpuClusterInstancesResponse.decode(value),
    },
};
exports.GpuClusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.GpuClusterServiceService, "yandex.cloud.compute.v1.GpuClusterService");
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
