"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeGroupServiceClient = exports.NodeGroupServiceService = exports.ListNodeGroupOperationsResponse = exports.ListNodeGroupOperationsRequest = exports.AutoUpgradeNodeGroupMetadata = exports.CreateNodeGroupMetadata = exports.CreateNodeGroupRequest_NodeLabelsEntry = exports.CreateNodeGroupRequest_LabelsEntry = exports.CreateNodeGroupRequest = exports.UpdateNodeGroupMetadata = exports.UpdateNodeGroupRequest_NodeLabelsEntry = exports.UpdateNodeGroupRequest_LabelsEntry = exports.UpdateNodeGroupRequest = exports.DeleteNodeGroupMetadata = exports.DeleteNodeGroupRequest = exports.ListNodeGroupNodesResponse = exports.ListNodeGroupNodesRequest = exports.ListNodeGroupsResponse = exports.ListNodeGroupsRequest = exports.GetNodeGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const node_1 = require("../../../../yandex/cloud/k8s/v1/node");
const node_group_1 = require("../../../../yandex/cloud/k8s/v1/node_group");
const version_1 = require("../../../../yandex/cloud/k8s/v1/version");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.k8s.v1";
const baseGetNodeGroupRequest = {
    $type: "yandex.cloud.k8s.v1.GetNodeGroupRequest",
    nodeGroupId: "",
};
exports.GetNodeGroupRequest = {
    $type: "yandex.cloud.k8s.v1.GetNodeGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== "") {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetNodeGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetNodeGroupRequest);
        message.nodeGroupId =
            object.nodeGroupId !== undefined && object.nodeGroupId !== null
                ? String(object.nodeGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetNodeGroupRequest);
        message.nodeGroupId = (_a = object.nodeGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetNodeGroupRequest.$type, exports.GetNodeGroupRequest);
const baseListNodeGroupsRequest = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListNodeGroupsRequest = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupsRequest",
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
        const message = Object.assign({}, baseListNodeGroupsRequest);
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
        const message = Object.assign({}, baseListNodeGroupsRequest);
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
        const message = Object.assign({}, baseListNodeGroupsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupsRequest.$type, exports.ListNodeGroupsRequest);
const baseListNodeGroupsResponse = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupsResponse",
    nextPageToken: "",
};
exports.ListNodeGroupsResponse = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.nodeGroups) {
            node_group_1.NodeGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListNodeGroupsResponse);
        message.nodeGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroups.push(node_group_1.NodeGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListNodeGroupsResponse);
        message.nodeGroups = ((_a = object.nodeGroups) !== null && _a !== void 0 ? _a : []).map((e) => node_group_1.NodeGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.nodeGroups) {
            obj.nodeGroups = message.nodeGroups.map((e) => e ? node_group_1.NodeGroup.toJSON(e) : undefined);
        }
        else {
            obj.nodeGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListNodeGroupsResponse);
        message.nodeGroups =
            ((_a = object.nodeGroups) === null || _a === void 0 ? void 0 : _a.map((e) => node_group_1.NodeGroup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupsResponse.$type, exports.ListNodeGroupsResponse);
const baseListNodeGroupNodesRequest = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesRequest",
    nodeGroupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListNodeGroupNodesRequest = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== "") {
            writer.uint32(10).string(message.nodeGroupId);
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
        const message = Object.assign({}, baseListNodeGroupNodesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
        const message = Object.assign({}, baseListNodeGroupNodesRequest);
        message.nodeGroupId =
            object.nodeGroupId !== undefined && object.nodeGroupId !== null
                ? String(object.nodeGroupId)
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
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListNodeGroupNodesRequest);
        message.nodeGroupId = (_a = object.nodeGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupNodesRequest.$type, exports.ListNodeGroupNodesRequest);
const baseListNodeGroupNodesResponse = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesResponse",
    nextPageToken: "",
};
exports.ListNodeGroupNodesResponse = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.nodes) {
            node_1.Node.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListNodeGroupNodesResponse);
        message.nodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodes.push(node_1.Node.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListNodeGroupNodesResponse);
        message.nodes = ((_a = object.nodes) !== null && _a !== void 0 ? _a : []).map((e) => node_1.Node.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.nodes) {
            obj.nodes = message.nodes.map((e) => (e ? node_1.Node.toJSON(e) : undefined));
        }
        else {
            obj.nodes = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListNodeGroupNodesResponse);
        message.nodes = ((_a = object.nodes) === null || _a === void 0 ? void 0 : _a.map((e) => node_1.Node.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupNodesResponse.$type, exports.ListNodeGroupNodesResponse);
const baseDeleteNodeGroupRequest = {
    $type: "yandex.cloud.k8s.v1.DeleteNodeGroupRequest",
    nodeGroupId: "",
};
exports.DeleteNodeGroupRequest = {
    $type: "yandex.cloud.k8s.v1.DeleteNodeGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== "") {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteNodeGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteNodeGroupRequest);
        message.nodeGroupId =
            object.nodeGroupId !== undefined && object.nodeGroupId !== null
                ? String(object.nodeGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteNodeGroupRequest);
        message.nodeGroupId = (_a = object.nodeGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteNodeGroupRequest.$type, exports.DeleteNodeGroupRequest);
const baseDeleteNodeGroupMetadata = {
    $type: "yandex.cloud.k8s.v1.DeleteNodeGroupMetadata",
    nodeGroupId: "",
};
exports.DeleteNodeGroupMetadata = {
    $type: "yandex.cloud.k8s.v1.DeleteNodeGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== "") {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteNodeGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteNodeGroupMetadata);
        message.nodeGroupId =
            object.nodeGroupId !== undefined && object.nodeGroupId !== null
                ? String(object.nodeGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteNodeGroupMetadata);
        message.nodeGroupId = (_a = object.nodeGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteNodeGroupMetadata.$type, exports.DeleteNodeGroupMetadata);
const baseUpdateNodeGroupRequest = {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest",
    nodeGroupId: "",
    name: "",
    description: "",
    allowedUnsafeSysctls: "",
};
exports.UpdateNodeGroupRequest = {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== "") {
            writer.uint32(10).string(message.nodeGroupId);
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
            exports.UpdateNodeGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.nodeTemplate !== undefined) {
            node_1.NodeTemplate.encode(message.nodeTemplate, writer.uint32(66).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            node_group_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            node_group_1.NodeGroupAllocationPolicy.encode(message.allocationPolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            node_group_1.DeployPolicy.encode(message.deployPolicy, writer.uint32(122).fork()).ldelim();
        }
        if (message.version !== undefined) {
            version_1.UpdateVersionSpec.encode(message.version, writer.uint32(82).fork()).ldelim();
        }
        if (message.maintenancePolicy !== undefined) {
            node_group_1.NodeGroupMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.allowedUnsafeSysctls) {
            writer.uint32(98).string(v);
        }
        for (const v of message.nodeTaints) {
            node_1.Taint.encode(v, writer.uint32(106).fork()).ldelim();
        }
        Object.entries(message.nodeLabels).forEach(([key, value]) => {
            exports.UpdateNodeGroupRequest_NodeLabelsEntry.encode({
                $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry",
                key: key,
                value,
            }, writer.uint32(114).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateNodeGroupRequest);
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
                    const entry5 = exports.UpdateNodeGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 8:
                    message.nodeTemplate = node_1.NodeTemplate.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.scalePolicy = node_group_1.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.allocationPolicy = node_group_1.NodeGroupAllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.deployPolicy = node_group_1.DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.version = version_1.UpdateVersionSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.maintenancePolicy = node_group_1.NodeGroupMaintenancePolicy.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.allowedUnsafeSysctls.push(reader.string());
                    break;
                case 13:
                    message.nodeTaints.push(node_1.Taint.decode(reader, reader.uint32()));
                    break;
                case 14:
                    const entry14 = exports.UpdateNodeGroupRequest_NodeLabelsEntry.decode(reader, reader.uint32());
                    if (entry14.value !== undefined) {
                        message.nodeLabels[entry14.key] = entry14.value;
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
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateNodeGroupRequest);
        message.nodeGroupId =
            object.nodeGroupId !== undefined && object.nodeGroupId !== null
                ? String(object.nodeGroupId)
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
        message.nodeTemplate =
            object.nodeTemplate !== undefined && object.nodeTemplate !== null
                ? node_1.NodeTemplate.fromJSON(object.nodeTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? node_group_1.ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? node_group_1.NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? node_group_1.DeployPolicy.fromJSON(object.deployPolicy)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null
                ? version_1.UpdateVersionSpec.fromJSON(object.version)
                : undefined;
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined &&
                object.maintenancePolicy !== null
                ? node_group_1.NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy)
                : undefined;
        message.allowedUnsafeSysctls = ((_b = object.allowedUnsafeSysctls) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.nodeTaints = ((_c = object.nodeTaints) !== null && _c !== void 0 ? _c : []).map((e) => node_1.Taint.fromJSON(e));
        message.nodeLabels = Object.entries((_d = object.nodeLabels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
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
        message.nodeTemplate !== undefined &&
            (obj.nodeTemplate = message.nodeTemplate
                ? node_1.NodeTemplate.toJSON(message.nodeTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? node_group_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? node_group_1.NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? node_group_1.DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? version_1.UpdateVersionSpec.toJSON(message.version)
                : undefined);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? node_group_1.NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.allowedUnsafeSysctls) {
            obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls.map((e) => e);
        }
        else {
            obj.allowedUnsafeSysctls = [];
        }
        if (message.nodeTaints) {
            obj.nodeTaints = message.nodeTaints.map((e) => e ? node_1.Taint.toJSON(e) : undefined);
        }
        else {
            obj.nodeTaints = [];
        }
        obj.nodeLabels = {};
        if (message.nodeLabels) {
            Object.entries(message.nodeLabels).forEach(([k, v]) => {
                obj.nodeLabels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseUpdateNodeGroupRequest);
        message.nodeGroupId = (_a = object.nodeGroupId) !== null && _a !== void 0 ? _a : "";
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
        message.nodeTemplate =
            object.nodeTemplate !== undefined && object.nodeTemplate !== null
                ? node_1.NodeTemplate.fromPartial(object.nodeTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? node_group_1.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? node_group_1.NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? node_group_1.DeployPolicy.fromPartial(object.deployPolicy)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null
                ? version_1.UpdateVersionSpec.fromPartial(object.version)
                : undefined;
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined &&
                object.maintenancePolicy !== null
                ? node_group_1.NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy)
                : undefined;
        message.allowedUnsafeSysctls =
            ((_e = object.allowedUnsafeSysctls) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.nodeTaints =
            ((_f = object.nodeTaints) === null || _f === void 0 ? void 0 : _f.map((e) => node_1.Taint.fromPartial(e))) || [];
        message.nodeLabels = Object.entries((_g = object.nodeLabels) !== null && _g !== void 0 ? _g : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNodeGroupRequest.$type, exports.UpdateNodeGroupRequest);
const baseUpdateNodeGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateNodeGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateNodeGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateNodeGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateNodeGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNodeGroupRequest_LabelsEntry.$type, exports.UpdateNodeGroupRequest_LabelsEntry);
const baseUpdateNodeGroupRequest_NodeLabelsEntry = {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry",
    key: "",
    value: "",
};
exports.UpdateNodeGroupRequest_NodeLabelsEntry = {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry",
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
        const message = Object.assign({}, baseUpdateNodeGroupRequest_NodeLabelsEntry);
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
        const message = Object.assign({}, baseUpdateNodeGroupRequest_NodeLabelsEntry);
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
        const message = Object.assign({}, baseUpdateNodeGroupRequest_NodeLabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNodeGroupRequest_NodeLabelsEntry.$type, exports.UpdateNodeGroupRequest_NodeLabelsEntry);
const baseUpdateNodeGroupMetadata = {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupMetadata",
    nodeGroupId: "",
};
exports.UpdateNodeGroupMetadata = {
    $type: "yandex.cloud.k8s.v1.UpdateNodeGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== "") {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateNodeGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateNodeGroupMetadata);
        message.nodeGroupId =
            object.nodeGroupId !== undefined && object.nodeGroupId !== null
                ? String(object.nodeGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateNodeGroupMetadata);
        message.nodeGroupId = (_a = object.nodeGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNodeGroupMetadata.$type, exports.UpdateNodeGroupMetadata);
const baseCreateNodeGroupRequest = {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest",
    clusterId: "",
    name: "",
    description: "",
    version: "",
    allowedUnsafeSysctls: "",
};
exports.CreateNodeGroupRequest = {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateNodeGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.nodeTemplate !== undefined) {
            node_1.NodeTemplate.encode(message.nodeTemplate, writer.uint32(42).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            node_group_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            node_group_1.NodeGroupAllocationPolicy.encode(message.allocationPolicy, writer.uint32(58).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            node_group_1.DeployPolicy.encode(message.deployPolicy, writer.uint32(106).fork()).ldelim();
        }
        if (message.version !== "") {
            writer.uint32(66).string(message.version);
        }
        if (message.maintenancePolicy !== undefined) {
            node_group_1.NodeGroupMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.allowedUnsafeSysctls) {
            writer.uint32(82).string(v);
        }
        for (const v of message.nodeTaints) {
            node_1.Taint.encode(v, writer.uint32(90).fork()).ldelim();
        }
        Object.entries(message.nodeLabels).forEach(([key, value]) => {
            exports.CreateNodeGroupRequest_NodeLabelsEntry.encode({
                $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry",
                key: key,
                value,
            }, writer.uint32(98).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateNodeGroupRequest);
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateNodeGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.nodeTemplate = node_1.NodeTemplate.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.scalePolicy = node_group_1.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.allocationPolicy = node_group_1.NodeGroupAllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.deployPolicy = node_group_1.DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.version = reader.string();
                    break;
                case 9:
                    message.maintenancePolicy = node_group_1.NodeGroupMaintenancePolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.allowedUnsafeSysctls.push(reader.string());
                    break;
                case 11:
                    message.nodeTaints.push(node_1.Taint.decode(reader, reader.uint32()));
                    break;
                case 12:
                    const entry12 = exports.CreateNodeGroupRequest_NodeLabelsEntry.decode(reader, reader.uint32());
                    if (entry12.value !== undefined) {
                        message.nodeLabels[entry12.key] = entry12.value;
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
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateNodeGroupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
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
        message.nodeTemplate =
            object.nodeTemplate !== undefined && object.nodeTemplate !== null
                ? node_1.NodeTemplate.fromJSON(object.nodeTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? node_group_1.ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? node_group_1.NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? node_group_1.DeployPolicy.fromJSON(object.deployPolicy)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined &&
                object.maintenancePolicy !== null
                ? node_group_1.NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy)
                : undefined;
        message.allowedUnsafeSysctls = ((_b = object.allowedUnsafeSysctls) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.nodeTaints = ((_c = object.nodeTaints) !== null && _c !== void 0 ? _c : []).map((e) => node_1.Taint.fromJSON(e));
        message.nodeLabels = Object.entries((_d = object.nodeLabels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.nodeTemplate !== undefined &&
            (obj.nodeTemplate = message.nodeTemplate
                ? node_1.NodeTemplate.toJSON(message.nodeTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? node_group_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? node_group_1.NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? node_group_1.DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.version !== undefined && (obj.version = message.version);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? node_group_1.NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.allowedUnsafeSysctls) {
            obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls.map((e) => e);
        }
        else {
            obj.allowedUnsafeSysctls = [];
        }
        if (message.nodeTaints) {
            obj.nodeTaints = message.nodeTaints.map((e) => e ? node_1.Taint.toJSON(e) : undefined);
        }
        else {
            obj.nodeTaints = [];
        }
        obj.nodeLabels = {};
        if (message.nodeLabels) {
            Object.entries(message.nodeLabels).forEach(([k, v]) => {
                obj.nodeLabels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseCreateNodeGroupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.nodeTemplate =
            object.nodeTemplate !== undefined && object.nodeTemplate !== null
                ? node_1.NodeTemplate.fromPartial(object.nodeTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? node_group_1.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? node_group_1.NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? node_group_1.DeployPolicy.fromPartial(object.deployPolicy)
                : undefined;
        message.version = (_e = object.version) !== null && _e !== void 0 ? _e : "";
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined &&
                object.maintenancePolicy !== null
                ? node_group_1.NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy)
                : undefined;
        message.allowedUnsafeSysctls =
            ((_f = object.allowedUnsafeSysctls) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.nodeTaints =
            ((_g = object.nodeTaints) === null || _g === void 0 ? void 0 : _g.map((e) => node_1.Taint.fromPartial(e))) || [];
        message.nodeLabels = Object.entries((_h = object.nodeLabels) !== null && _h !== void 0 ? _h : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateNodeGroupRequest.$type, exports.CreateNodeGroupRequest);
const baseCreateNodeGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateNodeGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateNodeGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateNodeGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateNodeGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateNodeGroupRequest_LabelsEntry.$type, exports.CreateNodeGroupRequest_LabelsEntry);
const baseCreateNodeGroupRequest_NodeLabelsEntry = {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry",
    key: "",
    value: "",
};
exports.CreateNodeGroupRequest_NodeLabelsEntry = {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry",
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
        const message = Object.assign({}, baseCreateNodeGroupRequest_NodeLabelsEntry);
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
        const message = Object.assign({}, baseCreateNodeGroupRequest_NodeLabelsEntry);
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
        const message = Object.assign({}, baseCreateNodeGroupRequest_NodeLabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateNodeGroupRequest_NodeLabelsEntry.$type, exports.CreateNodeGroupRequest_NodeLabelsEntry);
const baseCreateNodeGroupMetadata = {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupMetadata",
    nodeGroupId: "",
};
exports.CreateNodeGroupMetadata = {
    $type: "yandex.cloud.k8s.v1.CreateNodeGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== "") {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateNodeGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateNodeGroupMetadata);
        message.nodeGroupId =
            object.nodeGroupId !== undefined && object.nodeGroupId !== null
                ? String(object.nodeGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateNodeGroupMetadata);
        message.nodeGroupId = (_a = object.nodeGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateNodeGroupMetadata.$type, exports.CreateNodeGroupMetadata);
const baseAutoUpgradeNodeGroupMetadata = {
    $type: "yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata",
    nodeGroupId: "",
};
exports.AutoUpgradeNodeGroupMetadata = {
    $type: "yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== "") {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAutoUpgradeNodeGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAutoUpgradeNodeGroupMetadata);
        message.nodeGroupId =
            object.nodeGroupId !== undefined && object.nodeGroupId !== null
                ? String(object.nodeGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAutoUpgradeNodeGroupMetadata);
        message.nodeGroupId = (_a = object.nodeGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AutoUpgradeNodeGroupMetadata.$type, exports.AutoUpgradeNodeGroupMetadata);
const baseListNodeGroupOperationsRequest = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest",
    nodeGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListNodeGroupOperationsRequest = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== "") {
            writer.uint32(10).string(message.nodeGroupId);
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
        const message = Object.assign({}, baseListNodeGroupOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
        const message = Object.assign({}, baseListNodeGroupOperationsRequest);
        message.nodeGroupId =
            object.nodeGroupId !== undefined && object.nodeGroupId !== null
                ? String(object.nodeGroupId)
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
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListNodeGroupOperationsRequest);
        message.nodeGroupId = (_a = object.nodeGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupOperationsRequest.$type, exports.ListNodeGroupOperationsRequest);
const baseListNodeGroupOperationsResponse = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse",
    nextPageToken: "",
};
exports.ListNodeGroupOperationsResponse = {
    $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse",
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
        const message = Object.assign({}, baseListNodeGroupOperationsResponse);
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
        const message = Object.assign({}, baseListNodeGroupOperationsResponse);
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
        const message = Object.assign({}, baseListNodeGroupOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupOperationsResponse.$type, exports.ListNodeGroupOperationsResponse);
/** A set of methods for managing node groups. */
exports.NodeGroupServiceService = {
    /**
     * Returns the specified node group.
     *
     * To get the list of available node group, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.k8s.v1.NodeGroupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(node_group_1.NodeGroup.encode(value).finish()),
        responseDeserialize: (value) => node_group_1.NodeGroup.decode(value),
    },
    /** Retrieves the list of node group in the specified Kubernetes cluster. */
    list: {
        path: "/yandex.cloud.k8s.v1.NodeGroupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListNodeGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListNodeGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListNodeGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListNodeGroupsResponse.decode(value),
    },
    /** Creates a node group in the specified Kubernetes cluster. */
    create: {
        path: "/yandex.cloud.k8s.v1.NodeGroupService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified node group. */
    update: {
        path: "/yandex.cloud.k8s.v1.NodeGroupService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified node group. */
    delete: {
        path: "/yandex.cloud.k8s.v1.NodeGroupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified node group. */
    listOperations: {
        path: "/yandex.cloud.k8s.v1.NodeGroupService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListNodeGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListNodeGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListNodeGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListNodeGroupOperationsResponse.decode(value),
    },
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    listNodes: {
        path: "/yandex.cloud.k8s.v1.NodeGroupService/ListNodes",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListNodeGroupNodesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListNodeGroupNodesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListNodeGroupNodesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListNodeGroupNodesResponse.decode(value),
    },
};
exports.NodeGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.NodeGroupServiceService, "yandex.cloud.k8s.v1.NodeGroupService");
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
