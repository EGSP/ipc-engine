"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementGroupServiceClient = exports.PlacementGroupServiceService = exports.ListPlacementGroupOperationsResponse = exports.ListPlacementGroupOperationsRequest = exports.ListPlacementGroupInstancesResponse = exports.ListPlacementGroupInstancesRequest = exports.DeletePlacementGroupMetadata = exports.DeletePlacementGroupRequest = exports.UpdatePlacementGroupMetadata = exports.UpdatePlacementGroupRequest_LabelsEntry = exports.UpdatePlacementGroupRequest = exports.CreatePlacementGroupMetadata = exports.CreatePlacementGroupRequest_LabelsEntry = exports.CreatePlacementGroupRequest = exports.ListPlacementGroupsResponse = exports.ListPlacementGroupsRequest = exports.GetPlacementGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const placement_group_1 = require("../../../../yandex/cloud/compute/v1/placement_group");
const instance_1 = require("../../../../yandex/cloud/compute/v1/instance");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseGetPlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.GetPlacementGroupRequest",
    placementGroupId: "",
};
exports.GetPlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.GetPlacementGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== "") {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetPlacementGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetPlacementGroupRequest);
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetPlacementGroupRequest);
        message.placementGroupId = (_a = object.placementGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetPlacementGroupRequest.$type, exports.GetPlacementGroupRequest);
const baseListPlacementGroupsRequest = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListPlacementGroupsRequest = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupsRequest",
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
        const message = Object.assign({}, baseListPlacementGroupsRequest);
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
        const message = Object.assign({}, baseListPlacementGroupsRequest);
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
        const message = Object.assign({}, baseListPlacementGroupsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListPlacementGroupsRequest.$type, exports.ListPlacementGroupsRequest);
const baseListPlacementGroupsResponse = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupsResponse",
    nextPageToken: "",
};
exports.ListPlacementGroupsResponse = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.placementGroups) {
            placement_group_1.PlacementGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListPlacementGroupsResponse);
        message.placementGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroups.push(placement_group_1.PlacementGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListPlacementGroupsResponse);
        message.placementGroups = ((_a = object.placementGroups) !== null && _a !== void 0 ? _a : []).map((e) => placement_group_1.PlacementGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.placementGroups) {
            obj.placementGroups = message.placementGroups.map((e) => e ? placement_group_1.PlacementGroup.toJSON(e) : undefined);
        }
        else {
            obj.placementGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListPlacementGroupsResponse);
        message.placementGroups =
            ((_a = object.placementGroups) === null || _a === void 0 ? void 0 : _a.map((e) => placement_group_1.PlacementGroup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListPlacementGroupsResponse.$type, exports.ListPlacementGroupsResponse);
const baseCreatePlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest",
    folderId: "",
    name: "",
    description: "",
};
exports.CreatePlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest",
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
            exports.CreatePlacementGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.spreadPlacementStrategy !== undefined) {
            placement_group_1.SpreadPlacementStrategy.encode(message.spreadPlacementStrategy, writer.uint32(42).fork()).ldelim();
        }
        if (message.partitionPlacementStrategy !== undefined) {
            placement_group_1.PartitionPlacementStrategy.encode(message.partitionPlacementStrategy, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreatePlacementGroupRequest);
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
                    const entry4 = exports.CreatePlacementGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.spreadPlacementStrategy = placement_group_1.SpreadPlacementStrategy.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.partitionPlacementStrategy =
                        placement_group_1.PartitionPlacementStrategy.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreatePlacementGroupRequest);
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
        message.spreadPlacementStrategy =
            object.spreadPlacementStrategy !== undefined &&
                object.spreadPlacementStrategy !== null
                ? placement_group_1.SpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy)
                : undefined;
        message.partitionPlacementStrategy =
            object.partitionPlacementStrategy !== undefined &&
                object.partitionPlacementStrategy !== null
                ? placement_group_1.PartitionPlacementStrategy.fromJSON(object.partitionPlacementStrategy)
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
        message.spreadPlacementStrategy !== undefined &&
            (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
                ? placement_group_1.SpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy)
                : undefined);
        message.partitionPlacementStrategy !== undefined &&
            (obj.partitionPlacementStrategy = message.partitionPlacementStrategy
                ? placement_group_1.PartitionPlacementStrategy.toJSON(message.partitionPlacementStrategy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreatePlacementGroupRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.spreadPlacementStrategy =
            object.spreadPlacementStrategy !== undefined &&
                object.spreadPlacementStrategy !== null
                ? placement_group_1.SpreadPlacementStrategy.fromPartial(object.spreadPlacementStrategy)
                : undefined;
        message.partitionPlacementStrategy =
            object.partitionPlacementStrategy !== undefined &&
                object.partitionPlacementStrategy !== null
                ? placement_group_1.PartitionPlacementStrategy.fromPartial(object.partitionPlacementStrategy)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreatePlacementGroupRequest.$type, exports.CreatePlacementGroupRequest);
const baseCreatePlacementGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreatePlacementGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreatePlacementGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreatePlacementGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreatePlacementGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreatePlacementGroupRequest_LabelsEntry.$type, exports.CreatePlacementGroupRequest_LabelsEntry);
const baseCreatePlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupMetadata",
    placementGroupId: "",
};
exports.CreatePlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.CreatePlacementGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== "") {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreatePlacementGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreatePlacementGroupMetadata);
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreatePlacementGroupMetadata);
        message.placementGroupId = (_a = object.placementGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreatePlacementGroupMetadata.$type, exports.CreatePlacementGroupMetadata);
const baseUpdatePlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest",
    placementGroupId: "",
    name: "",
    description: "",
};
exports.UpdatePlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== "") {
            writer.uint32(10).string(message.placementGroupId);
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
            exports.UpdatePlacementGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdatePlacementGroupRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
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
                    const entry5 = exports.UpdatePlacementGroupRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdatePlacementGroupRequest);
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
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
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
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
        const message = Object.assign({}, baseUpdatePlacementGroupRequest);
        message.placementGroupId = (_a = object.placementGroupId) !== null && _a !== void 0 ? _a : "";
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdatePlacementGroupRequest.$type, exports.UpdatePlacementGroupRequest);
const baseUpdatePlacementGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdatePlacementGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdatePlacementGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdatePlacementGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdatePlacementGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdatePlacementGroupRequest_LabelsEntry.$type, exports.UpdatePlacementGroupRequest_LabelsEntry);
const baseUpdatePlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupMetadata",
    placementGroupId: "",
};
exports.UpdatePlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.UpdatePlacementGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== "") {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdatePlacementGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdatePlacementGroupMetadata);
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdatePlacementGroupMetadata);
        message.placementGroupId = (_a = object.placementGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdatePlacementGroupMetadata.$type, exports.UpdatePlacementGroupMetadata);
const baseDeletePlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.DeletePlacementGroupRequest",
    placementGroupId: "",
};
exports.DeletePlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.DeletePlacementGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== "") {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeletePlacementGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeletePlacementGroupRequest);
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeletePlacementGroupRequest);
        message.placementGroupId = (_a = object.placementGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeletePlacementGroupRequest.$type, exports.DeletePlacementGroupRequest);
const baseDeletePlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.DeletePlacementGroupMetadata",
    placementGroupId: "",
};
exports.DeletePlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.DeletePlacementGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== "") {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeletePlacementGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeletePlacementGroupMetadata);
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeletePlacementGroupMetadata);
        message.placementGroupId = (_a = object.placementGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeletePlacementGroupMetadata.$type, exports.DeletePlacementGroupMetadata);
const baseListPlacementGroupInstancesRequest = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesRequest",
    placementGroupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListPlacementGroupInstancesRequest = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== "") {
            writer.uint32(10).string(message.placementGroupId);
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
        const message = Object.assign({}, baseListPlacementGroupInstancesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
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
        const message = Object.assign({}, baseListPlacementGroupInstancesRequest);
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
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
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListPlacementGroupInstancesRequest);
        message.placementGroupId = (_a = object.placementGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListPlacementGroupInstancesRequest.$type, exports.ListPlacementGroupInstancesRequest);
const baseListPlacementGroupInstancesResponse = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesResponse",
    nextPageToken: "",
};
exports.ListPlacementGroupInstancesResponse = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesResponse",
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
        const message = Object.assign({}, baseListPlacementGroupInstancesResponse);
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
        const message = Object.assign({}, baseListPlacementGroupInstancesResponse);
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
        const message = Object.assign({}, baseListPlacementGroupInstancesResponse);
        message.instances =
            ((_a = object.instances) === null || _a === void 0 ? void 0 : _a.map((e) => instance_1.Instance.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListPlacementGroupInstancesResponse.$type, exports.ListPlacementGroupInstancesResponse);
const baseListPlacementGroupOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsRequest",
    placementGroupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListPlacementGroupOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== "") {
            writer.uint32(10).string(message.placementGroupId);
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
        const message = Object.assign({}, baseListPlacementGroupOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
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
        const message = Object.assign({}, baseListPlacementGroupOperationsRequest);
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
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
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListPlacementGroupOperationsRequest);
        message.placementGroupId = (_a = object.placementGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListPlacementGroupOperationsRequest.$type, exports.ListPlacementGroupOperationsRequest);
const baseListPlacementGroupOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsResponse",
    nextPageToken: "",
};
exports.ListPlacementGroupOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsResponse",
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
        const message = Object.assign({}, baseListPlacementGroupOperationsResponse);
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
        const message = Object.assign({}, baseListPlacementGroupOperationsResponse);
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
        const message = Object.assign({}, baseListPlacementGroupOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListPlacementGroupOperationsResponse.$type, exports.ListPlacementGroupOperationsResponse);
/** A set of methods for managing placement groups. */
exports.PlacementGroupServiceService = {
    /**
     * Returns the specified placement group.
     *
     * To get the list of all available placement groups, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.compute.v1.PlacementGroupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(placement_group_1.PlacementGroup.encode(value).finish()),
        responseDeserialize: (value) => placement_group_1.PlacementGroup.decode(value),
    },
    /** Retrieves the list of placement groups in the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.PlacementGroupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListPlacementGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListPlacementGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListPlacementGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListPlacementGroupsResponse.decode(value),
    },
    /** Creates a placement group in the specified folder. */
    create: {
        path: "/yandex.cloud.compute.v1.PlacementGroupService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreatePlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreatePlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified placement group. */
    update: {
        path: "/yandex.cloud.compute.v1.PlacementGroupService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdatePlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdatePlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified placement group. */
    delete: {
        path: "/yandex.cloud.compute.v1.PlacementGroupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeletePlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeletePlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists instances for the specified placement group. */
    listInstances: {
        path: "/yandex.cloud.compute.v1.PlacementGroupService/ListInstances",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListPlacementGroupInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListPlacementGroupInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListPlacementGroupInstancesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListPlacementGroupInstancesResponse.decode(value),
    },
    /** Lists operations for the specified placement group. */
    listOperations: {
        path: "/yandex.cloud.compute.v1.PlacementGroupService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListPlacementGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListPlacementGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListPlacementGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListPlacementGroupOperationsResponse.decode(value),
    },
};
exports.PlacementGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.PlacementGroupServiceService, "yandex.cloud.compute.v1.PlacementGroupService");
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
