"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskPlacementGroupServiceClient = exports.DiskPlacementGroupServiceService = exports.ListDiskPlacementGroupOperationsResponse = exports.ListDiskPlacementGroupOperationsRequest = exports.ListDiskPlacementGroupDisksResponse = exports.ListDiskPlacementGroupDisksRequest = exports.DeleteDiskPlacementGroupMetadata = exports.DeleteDiskPlacementGroupRequest = exports.UpdateDiskPlacementGroupMetadata = exports.UpdateDiskPlacementGroupRequest_LabelsEntry = exports.UpdateDiskPlacementGroupRequest = exports.CreateDiskPlacementGroupMetadata = exports.CreateDiskPlacementGroupRequest_LabelsEntry = exports.CreateDiskPlacementGroupRequest = exports.ListDiskPlacementGroupsResponse = exports.ListDiskPlacementGroupsRequest = exports.GetDiskPlacementGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const disk_placement_group_1 = require("../../../../yandex/cloud/compute/v1/disk_placement_group");
const disk_1 = require("../../../../yandex/cloud/compute/v1/disk");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseGetDiskPlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.GetDiskPlacementGroupRequest",
    diskPlacementGroupId: "",
};
exports.GetDiskPlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.GetDiskPlacementGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== "") {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetDiskPlacementGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetDiskPlacementGroupRequest);
        message.diskPlacementGroupId =
            object.diskPlacementGroupId !== undefined &&
                object.diskPlacementGroupId !== null
                ? String(object.diskPlacementGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetDiskPlacementGroupRequest);
        message.diskPlacementGroupId = (_a = object.diskPlacementGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetDiskPlacementGroupRequest.$type, exports.GetDiskPlacementGroupRequest);
const baseListDiskPlacementGroupsRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListDiskPlacementGroupsRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsRequest",
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
        const message = Object.assign({}, baseListDiskPlacementGroupsRequest);
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
        const message = Object.assign({}, baseListDiskPlacementGroupsRequest);
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
        const message = Object.assign({}, baseListDiskPlacementGroupsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupsRequest.$type, exports.ListDiskPlacementGroupsRequest);
const baseListDiskPlacementGroupsResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsResponse",
    nextPageToken: "",
};
exports.ListDiskPlacementGroupsResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.diskPlacementGroups) {
            disk_placement_group_1.DiskPlacementGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDiskPlacementGroupsResponse);
        message.diskPlacementGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroups.push(disk_placement_group_1.DiskPlacementGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListDiskPlacementGroupsResponse);
        message.diskPlacementGroups = ((_a = object.diskPlacementGroups) !== null && _a !== void 0 ? _a : []).map((e) => disk_placement_group_1.DiskPlacementGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.diskPlacementGroups) {
            obj.diskPlacementGroups = message.diskPlacementGroups.map((e) => e ? disk_placement_group_1.DiskPlacementGroup.toJSON(e) : undefined);
        }
        else {
            obj.diskPlacementGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListDiskPlacementGroupsResponse);
        message.diskPlacementGroups =
            ((_a = object.diskPlacementGroups) === null || _a === void 0 ? void 0 : _a.map((e) => disk_placement_group_1.DiskPlacementGroup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupsResponse.$type, exports.ListDiskPlacementGroupsResponse);
const baseCreateDiskPlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest",
    folderId: "",
    name: "",
    description: "",
    zoneId: "",
};
exports.CreateDiskPlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest",
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
            exports.CreateDiskPlacementGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zoneId !== "") {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.spreadPlacementStrategy !== undefined) {
            disk_placement_group_1.DiskSpreadPlacementStrategy.encode(message.spreadPlacementStrategy, writer.uint32(50).fork()).ldelim();
        }
        if (message.partitionPlacementStrategy !== undefined) {
            disk_placement_group_1.DiskPartitionPlacementStrategy.encode(message.partitionPlacementStrategy, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDiskPlacementGroupRequest);
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
                    const entry4 = exports.CreateDiskPlacementGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zoneId = reader.string();
                    break;
                case 6:
                    message.spreadPlacementStrategy = disk_placement_group_1.DiskSpreadPlacementStrategy.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.partitionPlacementStrategy =
                        disk_placement_group_1.DiskPartitionPlacementStrategy.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateDiskPlacementGroupRequest);
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
        message.spreadPlacementStrategy =
            object.spreadPlacementStrategy !== undefined &&
                object.spreadPlacementStrategy !== null
                ? disk_placement_group_1.DiskSpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy)
                : undefined;
        message.partitionPlacementStrategy =
            object.partitionPlacementStrategy !== undefined &&
                object.partitionPlacementStrategy !== null
                ? disk_placement_group_1.DiskPartitionPlacementStrategy.fromJSON(object.partitionPlacementStrategy)
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.spreadPlacementStrategy !== undefined &&
            (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
                ? disk_placement_group_1.DiskSpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy)
                : undefined);
        message.partitionPlacementStrategy !== undefined &&
            (obj.partitionPlacementStrategy = message.partitionPlacementStrategy
                ? disk_placement_group_1.DiskPartitionPlacementStrategy.toJSON(message.partitionPlacementStrategy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateDiskPlacementGroupRequest);
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
        message.spreadPlacementStrategy =
            object.spreadPlacementStrategy !== undefined &&
                object.spreadPlacementStrategy !== null
                ? disk_placement_group_1.DiskSpreadPlacementStrategy.fromPartial(object.spreadPlacementStrategy)
                : undefined;
        message.partitionPlacementStrategy =
            object.partitionPlacementStrategy !== undefined &&
                object.partitionPlacementStrategy !== null
                ? disk_placement_group_1.DiskPartitionPlacementStrategy.fromPartial(object.partitionPlacementStrategy)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDiskPlacementGroupRequest.$type, exports.CreateDiskPlacementGroupRequest);
const baseCreateDiskPlacementGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateDiskPlacementGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateDiskPlacementGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateDiskPlacementGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateDiskPlacementGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDiskPlacementGroupRequest_LabelsEntry.$type, exports.CreateDiskPlacementGroupRequest_LabelsEntry);
const baseCreateDiskPlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupMetadata",
    diskPlacementGroupId: "",
};
exports.CreateDiskPlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== "") {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDiskPlacementGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateDiskPlacementGroupMetadata);
        message.diskPlacementGroupId =
            object.diskPlacementGroupId !== undefined &&
                object.diskPlacementGroupId !== null
                ? String(object.diskPlacementGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateDiskPlacementGroupMetadata);
        message.diskPlacementGroupId = (_a = object.diskPlacementGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDiskPlacementGroupMetadata.$type, exports.CreateDiskPlacementGroupMetadata);
const baseUpdateDiskPlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest",
    diskPlacementGroupId: "",
    name: "",
    description: "",
};
exports.UpdateDiskPlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== "") {
            writer.uint32(10).string(message.diskPlacementGroupId);
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
            exports.UpdateDiskPlacementGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateDiskPlacementGroupRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
                    const entry5 = exports.UpdateDiskPlacementGroupRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateDiskPlacementGroupRequest);
        message.diskPlacementGroupId =
            object.diskPlacementGroupId !== undefined &&
                object.diskPlacementGroupId !== null
                ? String(object.diskPlacementGroupId)
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
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
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
        const message = Object.assign({}, baseUpdateDiskPlacementGroupRequest);
        message.diskPlacementGroupId = (_a = object.diskPlacementGroupId) !== null && _a !== void 0 ? _a : "";
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDiskPlacementGroupRequest.$type, exports.UpdateDiskPlacementGroupRequest);
const baseUpdateDiskPlacementGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateDiskPlacementGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateDiskPlacementGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateDiskPlacementGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateDiskPlacementGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDiskPlacementGroupRequest_LabelsEntry.$type, exports.UpdateDiskPlacementGroupRequest_LabelsEntry);
const baseUpdateDiskPlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupMetadata",
    diskPlacementGroupId: "",
};
exports.UpdateDiskPlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== "") {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateDiskPlacementGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateDiskPlacementGroupMetadata);
        message.diskPlacementGroupId =
            object.diskPlacementGroupId !== undefined &&
                object.diskPlacementGroupId !== null
                ? String(object.diskPlacementGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateDiskPlacementGroupMetadata);
        message.diskPlacementGroupId = (_a = object.diskPlacementGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDiskPlacementGroupMetadata.$type, exports.UpdateDiskPlacementGroupMetadata);
const baseDeleteDiskPlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupRequest",
    diskPlacementGroupId: "",
};
exports.DeleteDiskPlacementGroupRequest = {
    $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== "") {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDiskPlacementGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDiskPlacementGroupRequest);
        message.diskPlacementGroupId =
            object.diskPlacementGroupId !== undefined &&
                object.diskPlacementGroupId !== null
                ? String(object.diskPlacementGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteDiskPlacementGroupRequest);
        message.diskPlacementGroupId = (_a = object.diskPlacementGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDiskPlacementGroupRequest.$type, exports.DeleteDiskPlacementGroupRequest);
const baseDeleteDiskPlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupMetadata",
    diskPlacementGroupId: "",
};
exports.DeleteDiskPlacementGroupMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== "") {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDiskPlacementGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDiskPlacementGroupMetadata);
        message.diskPlacementGroupId =
            object.diskPlacementGroupId !== undefined &&
                object.diskPlacementGroupId !== null
                ? String(object.diskPlacementGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteDiskPlacementGroupMetadata);
        message.diskPlacementGroupId = (_a = object.diskPlacementGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDiskPlacementGroupMetadata.$type, exports.DeleteDiskPlacementGroupMetadata);
const baseListDiskPlacementGroupDisksRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksRequest",
    diskPlacementGroupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListDiskPlacementGroupDisksRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== "") {
            writer.uint32(10).string(message.diskPlacementGroupId);
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
        const message = Object.assign({}, baseListDiskPlacementGroupDisksRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
        const message = Object.assign({}, baseListDiskPlacementGroupDisksRequest);
        message.diskPlacementGroupId =
            object.diskPlacementGroupId !== undefined &&
                object.diskPlacementGroupId !== null
                ? String(object.diskPlacementGroupId)
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
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListDiskPlacementGroupDisksRequest);
        message.diskPlacementGroupId = (_a = object.diskPlacementGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupDisksRequest.$type, exports.ListDiskPlacementGroupDisksRequest);
const baseListDiskPlacementGroupDisksResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksResponse",
    nextPageToken: "",
};
exports.ListDiskPlacementGroupDisksResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.disks) {
            disk_1.Disk.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDiskPlacementGroupDisksResponse);
        message.disks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disks.push(disk_1.Disk.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListDiskPlacementGroupDisksResponse);
        message.disks = ((_a = object.disks) !== null && _a !== void 0 ? _a : []).map((e) => disk_1.Disk.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.disks) {
            obj.disks = message.disks.map((e) => (e ? disk_1.Disk.toJSON(e) : undefined));
        }
        else {
            obj.disks = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListDiskPlacementGroupDisksResponse);
        message.disks = ((_a = object.disks) === null || _a === void 0 ? void 0 : _a.map((e) => disk_1.Disk.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupDisksResponse.$type, exports.ListDiskPlacementGroupDisksResponse);
const baseListDiskPlacementGroupOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsRequest",
    diskPlacementGroupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListDiskPlacementGroupOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== "") {
            writer.uint32(10).string(message.diskPlacementGroupId);
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
        const message = Object.assign({}, baseListDiskPlacementGroupOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
        const message = Object.assign({}, baseListDiskPlacementGroupOperationsRequest);
        message.diskPlacementGroupId =
            object.diskPlacementGroupId !== undefined &&
                object.diskPlacementGroupId !== null
                ? String(object.diskPlacementGroupId)
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
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListDiskPlacementGroupOperationsRequest);
        message.diskPlacementGroupId = (_a = object.diskPlacementGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupOperationsRequest.$type, exports.ListDiskPlacementGroupOperationsRequest);
const baseListDiskPlacementGroupOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsResponse",
    nextPageToken: "",
};
exports.ListDiskPlacementGroupOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsResponse",
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
        const message = Object.assign({}, baseListDiskPlacementGroupOperationsResponse);
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
        const message = Object.assign({}, baseListDiskPlacementGroupOperationsResponse);
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
        const message = Object.assign({}, baseListDiskPlacementGroupOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupOperationsResponse.$type, exports.ListDiskPlacementGroupOperationsResponse);
/** A set of methods for managing DiskPlacementGroup resources. */
exports.DiskPlacementGroupServiceService = {
    /** Returns the specified placement group. */
    get: {
        path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(disk_placement_group_1.DiskPlacementGroup.encode(value).finish()),
        responseDeserialize: (value) => disk_placement_group_1.DiskPlacementGroup.decode(value),
    },
    /** Retrieves the list of placement groups in the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDiskPlacementGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDiskPlacementGroupsResponse.decode(value),
    },
    /** Creates a placement group in the specified folder. */
    create: {
        path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified placement group. */
    update: {
        path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified placement group. */
    delete: {
        path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists disks for the specified placement group. */
    listDisks: {
        path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListDisks",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupDisksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDiskPlacementGroupDisksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupDisksResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDiskPlacementGroupDisksResponse.decode(value),
    },
    /** Lists operations for the specified placement group. */
    listOperations: {
        path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDiskPlacementGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDiskPlacementGroupOperationsResponse.decode(value),
    },
};
exports.DiskPlacementGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DiskPlacementGroupServiceService, "yandex.cloud.compute.v1.DiskPlacementGroupService");
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
