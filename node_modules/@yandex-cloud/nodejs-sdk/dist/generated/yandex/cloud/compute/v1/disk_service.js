"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskServiceClient = exports.DiskServiceService = exports.ListDiskSnapshotSchedulesResponse = exports.ListDiskSnapshotSchedulesRequest = exports.RelocateDiskMetadata = exports.RelocateDiskRequest = exports.MoveDiskMetadata = exports.MoveDiskRequest = exports.ListDiskOperationsResponse = exports.ListDiskOperationsRequest = exports.DeleteDiskMetadata = exports.DeleteDiskRequest = exports.UpdateDiskMetadata = exports.UpdateDiskRequest_LabelsEntry = exports.UpdateDiskRequest = exports.CreateDiskMetadata = exports.CreateDiskRequest_LabelsEntry = exports.CreateDiskRequest = exports.ListDisksResponse = exports.ListDisksRequest = exports.GetDiskRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const disk_1 = require("../../../../yandex/cloud/compute/v1/disk");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const snapshot_schedule_1 = require("../../../../yandex/cloud/compute/v1/snapshot_schedule");
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseGetDiskRequest = {
    $type: "yandex.cloud.compute.v1.GetDiskRequest",
    diskId: "",
};
exports.GetDiskRequest = {
    $type: "yandex.cloud.compute.v1.GetDiskRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetDiskRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetDiskRequest);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetDiskRequest);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetDiskRequest.$type, exports.GetDiskRequest);
const baseListDisksRequest = {
    $type: "yandex.cloud.compute.v1.ListDisksRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListDisksRequest = {
    $type: "yandex.cloud.compute.v1.ListDisksRequest",
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
        const message = Object.assign({}, baseListDisksRequest);
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
        const message = Object.assign({}, baseListDisksRequest);
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
        const message = Object.assign({}, baseListDisksRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDisksRequest.$type, exports.ListDisksRequest);
const baseListDisksResponse = {
    $type: "yandex.cloud.compute.v1.ListDisksResponse",
    nextPageToken: "",
};
exports.ListDisksResponse = {
    $type: "yandex.cloud.compute.v1.ListDisksResponse",
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
        const message = Object.assign({}, baseListDisksResponse);
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
        const message = Object.assign({}, baseListDisksResponse);
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
        const message = Object.assign({}, baseListDisksResponse);
        message.disks = ((_a = object.disks) === null || _a === void 0 ? void 0 : _a.map((e) => disk_1.Disk.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDisksResponse.$type, exports.ListDisksResponse);
const baseCreateDiskRequest = {
    $type: "yandex.cloud.compute.v1.CreateDiskRequest",
    folderId: "",
    name: "",
    description: "",
    typeId: "",
    zoneId: "",
    size: 0,
    blockSize: 0,
    snapshotScheduleIds: "",
};
exports.CreateDiskRequest = {
    $type: "yandex.cloud.compute.v1.CreateDiskRequest",
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
            exports.CreateDiskRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.typeId !== "") {
            writer.uint32(42).string(message.typeId);
        }
        if (message.zoneId !== "") {
            writer.uint32(50).string(message.zoneId);
        }
        if (message.size !== 0) {
            writer.uint32(56).int64(message.size);
        }
        if (message.imageId !== undefined) {
            writer.uint32(66).string(message.imageId);
        }
        if (message.snapshotId !== undefined) {
            writer.uint32(74).string(message.snapshotId);
        }
        if (message.blockSize !== 0) {
            writer.uint32(80).int64(message.blockSize);
        }
        if (message.diskPlacementPolicy !== undefined) {
            disk_1.DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.snapshotScheduleIds) {
            writer.uint32(98).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDiskRequest);
        message.labels = {};
        message.snapshotScheduleIds = [];
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
                    const entry4 = exports.CreateDiskRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.typeId = reader.string();
                    break;
                case 6:
                    message.zoneId = reader.string();
                    break;
                case 7:
                    message.size = longToNumber(reader.int64());
                    break;
                case 8:
                    message.imageId = reader.string();
                    break;
                case 9:
                    message.snapshotId = reader.string();
                    break;
                case 10:
                    message.blockSize = longToNumber(reader.int64());
                    break;
                case 11:
                    message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.snapshotScheduleIds.push(reader.string());
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
        const message = Object.assign({}, baseCreateDiskRequest);
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
        message.typeId =
            object.typeId !== undefined && object.typeId !== null
                ? String(object.typeId)
                : "";
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : undefined;
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
                : undefined;
        message.blockSize =
            object.blockSize !== undefined && object.blockSize !== null
                ? Number(object.blockSize)
                : 0;
        message.diskPlacementPolicy =
            object.diskPlacementPolicy !== undefined &&
                object.diskPlacementPolicy !== null
                ? disk_1.DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy)
                : undefined;
        message.snapshotScheduleIds = ((_b = object.snapshotScheduleIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
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
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        message.blockSize !== undefined &&
            (obj.blockSize = Math.round(message.blockSize));
        message.diskPlacementPolicy !== undefined &&
            (obj.diskPlacementPolicy = message.diskPlacementPolicy
                ? disk_1.DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
                : undefined);
        if (message.snapshotScheduleIds) {
            obj.snapshotScheduleIds = message.snapshotScheduleIds.map((e) => e);
        }
        else {
            obj.snapshotScheduleIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseCreateDiskRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.typeId = (_e = object.typeId) !== null && _e !== void 0 ? _e : "";
        message.zoneId = (_f = object.zoneId) !== null && _f !== void 0 ? _f : "";
        message.size = (_g = object.size) !== null && _g !== void 0 ? _g : 0;
        message.imageId = (_h = object.imageId) !== null && _h !== void 0 ? _h : undefined;
        message.snapshotId = (_j = object.snapshotId) !== null && _j !== void 0 ? _j : undefined;
        message.blockSize = (_k = object.blockSize) !== null && _k !== void 0 ? _k : 0;
        message.diskPlacementPolicy =
            object.diskPlacementPolicy !== undefined &&
                object.diskPlacementPolicy !== null
                ? disk_1.DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy)
                : undefined;
        message.snapshotScheduleIds =
            ((_l = object.snapshotScheduleIds) === null || _l === void 0 ? void 0 : _l.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDiskRequest.$type, exports.CreateDiskRequest);
const baseCreateDiskRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateDiskRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateDiskRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateDiskRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateDiskRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDiskRequest_LabelsEntry.$type, exports.CreateDiskRequest_LabelsEntry);
const baseCreateDiskMetadata = {
    $type: "yandex.cloud.compute.v1.CreateDiskMetadata",
    diskId: "",
};
exports.CreateDiskMetadata = {
    $type: "yandex.cloud.compute.v1.CreateDiskMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDiskMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateDiskMetadata);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateDiskMetadata);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDiskMetadata.$type, exports.CreateDiskMetadata);
const baseUpdateDiskRequest = {
    $type: "yandex.cloud.compute.v1.UpdateDiskRequest",
    diskId: "",
    name: "",
    description: "",
    size: 0,
};
exports.UpdateDiskRequest = {
    $type: "yandex.cloud.compute.v1.UpdateDiskRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
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
            exports.UpdateDiskRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.size !== 0) {
            writer.uint32(48).int64(message.size);
        }
        if (message.diskPlacementPolicy !== undefined) {
            disk_1.DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateDiskRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
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
                    const entry5 = exports.UpdateDiskRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.size = longToNumber(reader.int64());
                    break;
                case 7:
                    message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateDiskRequest);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
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
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.diskPlacementPolicy =
            object.diskPlacementPolicy !== undefined &&
                object.diskPlacementPolicy !== null
                ? disk_1.DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
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
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.diskPlacementPolicy !== undefined &&
            (obj.diskPlacementPolicy = message.diskPlacementPolicy
                ? disk_1.DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateDiskRequest);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
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
        message.size = (_e = object.size) !== null && _e !== void 0 ? _e : 0;
        message.diskPlacementPolicy =
            object.diskPlacementPolicy !== undefined &&
                object.diskPlacementPolicy !== null
                ? disk_1.DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDiskRequest.$type, exports.UpdateDiskRequest);
const baseUpdateDiskRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateDiskRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateDiskRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateDiskRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateDiskRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDiskRequest_LabelsEntry.$type, exports.UpdateDiskRequest_LabelsEntry);
const baseUpdateDiskMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateDiskMetadata",
    diskId: "",
};
exports.UpdateDiskMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateDiskMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateDiskMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateDiskMetadata);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateDiskMetadata);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDiskMetadata.$type, exports.UpdateDiskMetadata);
const baseDeleteDiskRequest = {
    $type: "yandex.cloud.compute.v1.DeleteDiskRequest",
    diskId: "",
};
exports.DeleteDiskRequest = {
    $type: "yandex.cloud.compute.v1.DeleteDiskRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDiskRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDiskRequest);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteDiskRequest);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDiskRequest.$type, exports.DeleteDiskRequest);
const baseDeleteDiskMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteDiskMetadata",
    diskId: "",
};
exports.DeleteDiskMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteDiskMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDiskMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDiskMetadata);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteDiskMetadata);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDiskMetadata.$type, exports.DeleteDiskMetadata);
const baseListDiskOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskOperationsRequest",
    diskId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListDiskOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
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
        const message = Object.assign({}, baseListDiskOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
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
        const message = Object.assign({}, baseListDiskOperationsRequest);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
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
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListDiskOperationsRequest);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskOperationsRequest.$type, exports.ListDiskOperationsRequest);
const baseListDiskOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskOperationsResponse",
    nextPageToken: "",
};
exports.ListDiskOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskOperationsResponse",
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
        const message = Object.assign({}, baseListDiskOperationsResponse);
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
        const message = Object.assign({}, baseListDiskOperationsResponse);
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
        const message = Object.assign({}, baseListDiskOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskOperationsResponse.$type, exports.ListDiskOperationsResponse);
const baseMoveDiskRequest = {
    $type: "yandex.cloud.compute.v1.MoveDiskRequest",
    diskId: "",
    destinationFolderId: "",
};
exports.MoveDiskRequest = {
    $type: "yandex.cloud.compute.v1.MoveDiskRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveDiskRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
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
        const message = Object.assign({}, baseMoveDiskRequest);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
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
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMoveDiskRequest);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
        message.destinationFolderId = (_b = object.destinationFolderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveDiskRequest.$type, exports.MoveDiskRequest);
const baseMoveDiskMetadata = {
    $type: "yandex.cloud.compute.v1.MoveDiskMetadata",
    diskId: "",
    sourceFolderId: "",
    destinationFolderId: "",
};
exports.MoveDiskMetadata = {
    $type: "yandex.cloud.compute.v1.MoveDiskMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
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
        const message = Object.assign({}, baseMoveDiskMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
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
        const message = Object.assign({}, baseMoveDiskMetadata);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
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
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.sourceFolderId !== undefined &&
            (obj.sourceFolderId = message.sourceFolderId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMoveDiskMetadata);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
        message.sourceFolderId = (_b = object.sourceFolderId) !== null && _b !== void 0 ? _b : "";
        message.destinationFolderId = (_c = object.destinationFolderId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveDiskMetadata.$type, exports.MoveDiskMetadata);
const baseRelocateDiskRequest = {
    $type: "yandex.cloud.compute.v1.RelocateDiskRequest",
    diskId: "",
    destinationZoneId: "",
};
exports.RelocateDiskRequest = {
    $type: "yandex.cloud.compute.v1.RelocateDiskRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
        }
        if (message.destinationZoneId !== "") {
            writer.uint32(18).string(message.destinationZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRelocateDiskRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                case 2:
                    message.destinationZoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRelocateDiskRequest);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        message.destinationZoneId =
            object.destinationZoneId !== undefined &&
                object.destinationZoneId !== null
                ? String(object.destinationZoneId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.destinationZoneId !== undefined &&
            (obj.destinationZoneId = message.destinationZoneId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRelocateDiskRequest);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
        message.destinationZoneId = (_b = object.destinationZoneId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RelocateDiskRequest.$type, exports.RelocateDiskRequest);
const baseRelocateDiskMetadata = {
    $type: "yandex.cloud.compute.v1.RelocateDiskMetadata",
    diskId: "",
    sourceZoneId: "",
    destinationZoneId: "",
};
exports.RelocateDiskMetadata = {
    $type: "yandex.cloud.compute.v1.RelocateDiskMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
        }
        if (message.sourceZoneId !== "") {
            writer.uint32(18).string(message.sourceZoneId);
        }
        if (message.destinationZoneId !== "") {
            writer.uint32(26).string(message.destinationZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRelocateDiskMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                case 2:
                    message.sourceZoneId = reader.string();
                    break;
                case 3:
                    message.destinationZoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRelocateDiskMetadata);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        message.sourceZoneId =
            object.sourceZoneId !== undefined && object.sourceZoneId !== null
                ? String(object.sourceZoneId)
                : "";
        message.destinationZoneId =
            object.destinationZoneId !== undefined &&
                object.destinationZoneId !== null
                ? String(object.destinationZoneId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.sourceZoneId !== undefined &&
            (obj.sourceZoneId = message.sourceZoneId);
        message.destinationZoneId !== undefined &&
            (obj.destinationZoneId = message.destinationZoneId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRelocateDiskMetadata);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
        message.sourceZoneId = (_b = object.sourceZoneId) !== null && _b !== void 0 ? _b : "";
        message.destinationZoneId = (_c = object.destinationZoneId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RelocateDiskMetadata.$type, exports.RelocateDiskMetadata);
const baseListDiskSnapshotSchedulesRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesRequest",
    diskId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListDiskSnapshotSchedulesRequest = {
    $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== "") {
            writer.uint32(10).string(message.diskId);
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
        const message = Object.assign({}, baseListDiskSnapshotSchedulesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
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
        const message = Object.assign({}, baseListDiskSnapshotSchedulesRequest);
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
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
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListDiskSnapshotSchedulesRequest);
        message.diskId = (_a = object.diskId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskSnapshotSchedulesRequest.$type, exports.ListDiskSnapshotSchedulesRequest);
const baseListDiskSnapshotSchedulesResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesResponse",
    nextPageToken: "",
};
exports.ListDiskSnapshotSchedulesResponse = {
    $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.snapshotSchedules) {
            snapshot_schedule_1.SnapshotSchedule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDiskSnapshotSchedulesResponse);
        message.snapshotSchedules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotSchedules.push(snapshot_schedule_1.SnapshotSchedule.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListDiskSnapshotSchedulesResponse);
        message.snapshotSchedules = ((_a = object.snapshotSchedules) !== null && _a !== void 0 ? _a : []).map((e) => snapshot_schedule_1.SnapshotSchedule.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshotSchedules) {
            obj.snapshotSchedules = message.snapshotSchedules.map((e) => e ? snapshot_schedule_1.SnapshotSchedule.toJSON(e) : undefined);
        }
        else {
            obj.snapshotSchedules = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListDiskSnapshotSchedulesResponse);
        message.snapshotSchedules =
            ((_a = object.snapshotSchedules) === null || _a === void 0 ? void 0 : _a.map((e) => snapshot_schedule_1.SnapshotSchedule.fromPartial(e))) ||
                [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskSnapshotSchedulesResponse.$type, exports.ListDiskSnapshotSchedulesResponse);
/** A set of methods for managing Disk resources. */
exports.DiskServiceService = {
    /**
     * Returns the specified Disk resource.
     *
     * To get the list of available Disk resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.compute.v1.DiskService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(disk_1.Disk.encode(value).finish()),
        responseDeserialize: (value) => disk_1.Disk.decode(value),
    },
    /** Retrieves the list of Disk resources in the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.DiskService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDisksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDisksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDisksResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDisksResponse.decode(value),
    },
    /**
     * Creates a disk in the specified folder.
     *
     * You can create an empty disk or restore it from a snapshot or an image.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: "/yandex.cloud.compute.v1.DiskService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified disk. */
    update: {
        path: "/yandex.cloud.compute.v1.DiskService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified disk.
     *
     * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
     * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
     *
     * It is not possible to delete a disk that is attached to an instance.
     */
    delete: {
        path: "/yandex.cloud.compute.v1.DiskService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified disk. */
    listOperations: {
        path: "/yandex.cloud.compute.v1.DiskService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDiskOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDiskOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDiskOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDiskOperationsResponse.decode(value),
    },
    /** Moves the specified disk to another folder of the same cloud. */
    move: {
        path: "/yandex.cloud.compute.v1.DiskService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Moves the specified disk to another availability zone
     *
     * Disk must be detached from instances. To move attached
     * disk use [InstanceService.Relocate] request.
     */
    relocate: {
        path: "/yandex.cloud.compute.v1.DiskService/Relocate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RelocateDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RelocateDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of snapshot schedules the specified disk is attached to. */
    listSnapshotSchedules: {
        path: "/yandex.cloud.compute.v1.DiskService/ListSnapshotSchedules",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDiskSnapshotSchedulesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDiskSnapshotSchedulesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDiskSnapshotSchedulesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDiskSnapshotSchedulesResponse.decode(value),
    },
};
exports.DiskServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DiskServiceService, "yandex.cloud.compute.v1.DiskService");
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
