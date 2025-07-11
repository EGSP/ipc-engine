"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotScheduleServiceClient = exports.SnapshotScheduleServiceService = exports.UpdateSnapshotScheduleDisksMetadata = exports.UpdateSnapshotScheduleDisksRequest = exports.ListSnapshotScheduleDisksResponse = exports.ListSnapshotScheduleDisksRequest = exports.ListSnapshotScheduleSnapshotsResponse = exports.ListSnapshotScheduleSnapshotsRequest = exports.ListSnapshotScheduleOperationsResponse = exports.ListSnapshotScheduleOperationsRequest = exports.EnableSnapshotScheduleMetadata = exports.EnableSnapshotScheduleRequest = exports.DisableSnapshotScheduleMetadata = exports.DisableSnapshotScheduleRequest = exports.DeleteSnapshotScheduleMetadata = exports.DeleteSnapshotScheduleRequest = exports.UpdateSnapshotScheduleMetadata = exports.UpdateSnapshotScheduleRequest_LabelsEntry = exports.UpdateSnapshotScheduleRequest = exports.CreateSnapshotScheduleMetadata = exports.CreateSnapshotScheduleRequest_LabelsEntry = exports.CreateSnapshotScheduleRequest = exports.ListSnapshotSchedulesResponse = exports.ListSnapshotSchedulesRequest = exports.GetSnapshotScheduleRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const snapshot_schedule_1 = require("../../../../yandex/cloud/compute/v1/snapshot_schedule");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const duration_1 = require("../../../../google/protobuf/duration");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const snapshot_1 = require("../../../../yandex/cloud/compute/v1/snapshot");
const disk_1 = require("../../../../yandex/cloud/compute/v1/disk");
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseGetSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.GetSnapshotScheduleRequest",
    snapshotScheduleId: "",
};
exports.GetSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.GetSnapshotScheduleRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetSnapshotScheduleRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetSnapshotScheduleRequest);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetSnapshotScheduleRequest);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetSnapshotScheduleRequest.$type, exports.GetSnapshotScheduleRequest);
const baseListSnapshotSchedulesRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListSnapshotSchedulesRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesRequest",
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
        const message = Object.assign({}, baseListSnapshotSchedulesRequest);
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
        const message = Object.assign({}, baseListSnapshotSchedulesRequest);
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
        const message = Object.assign({}, baseListSnapshotSchedulesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotSchedulesRequest.$type, exports.ListSnapshotSchedulesRequest);
const baseListSnapshotSchedulesResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesResponse",
    nextPageToken: "",
};
exports.ListSnapshotSchedulesResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotSchedulesResponse",
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
        const message = Object.assign({}, baseListSnapshotSchedulesResponse);
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
        const message = Object.assign({}, baseListSnapshotSchedulesResponse);
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
        const message = Object.assign({}, baseListSnapshotSchedulesResponse);
        message.snapshotSchedules =
            ((_a = object.snapshotSchedules) === null || _a === void 0 ? void 0 : _a.map((e) => snapshot_schedule_1.SnapshotSchedule.fromPartial(e))) ||
                [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotSchedulesResponse.$type, exports.ListSnapshotSchedulesResponse);
const baseCreateSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest",
    folderId: "",
    name: "",
    description: "",
    diskIds: "",
};
exports.CreateSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest",
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
            exports.CreateSnapshotScheduleRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.schedulePolicy !== undefined) {
            snapshot_schedule_1.SchedulePolicy.encode(message.schedulePolicy, writer.uint32(42).fork()).ldelim();
        }
        if (message.retentionPeriod !== undefined) {
            duration_1.Duration.encode(message.retentionPeriod, writer.uint32(50).fork()).ldelim();
        }
        if (message.snapshotCount !== undefined) {
            writer.uint32(56).int64(message.snapshotCount);
        }
        if (message.snapshotSpec !== undefined) {
            snapshot_schedule_1.SnapshotSpec.encode(message.snapshotSpec, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.diskIds) {
            writer.uint32(74).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSnapshotScheduleRequest);
        message.labels = {};
        message.diskIds = [];
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
                    const entry4 = exports.CreateSnapshotScheduleRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.schedulePolicy = snapshot_schedule_1.SchedulePolicy.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.retentionPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.snapshotCount = longToNumber(reader.int64());
                    break;
                case 8:
                    message.snapshotSpec = snapshot_schedule_1.SnapshotSpec.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.diskIds.push(reader.string());
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
        const message = Object.assign({}, baseCreateSnapshotScheduleRequest);
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
        message.schedulePolicy =
            object.schedulePolicy !== undefined && object.schedulePolicy !== null
                ? snapshot_schedule_1.SchedulePolicy.fromJSON(object.schedulePolicy)
                : undefined;
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromJSON(object.retentionPeriod)
                : undefined;
        message.snapshotCount =
            object.snapshotCount !== undefined && object.snapshotCount !== null
                ? Number(object.snapshotCount)
                : undefined;
        message.snapshotSpec =
            object.snapshotSpec !== undefined && object.snapshotSpec !== null
                ? snapshot_schedule_1.SnapshotSpec.fromJSON(object.snapshotSpec)
                : undefined;
        message.diskIds = ((_b = object.diskIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
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
        message.schedulePolicy !== undefined &&
            (obj.schedulePolicy = message.schedulePolicy
                ? snapshot_schedule_1.SchedulePolicy.toJSON(message.schedulePolicy)
                : undefined);
        message.retentionPeriod !== undefined &&
            (obj.retentionPeriod = message.retentionPeriod
                ? duration_1.Duration.toJSON(message.retentionPeriod)
                : undefined);
        message.snapshotCount !== undefined &&
            (obj.snapshotCount = Math.round(message.snapshotCount));
        message.snapshotSpec !== undefined &&
            (obj.snapshotSpec = message.snapshotSpec
                ? snapshot_schedule_1.SnapshotSpec.toJSON(message.snapshotSpec)
                : undefined);
        if (message.diskIds) {
            obj.diskIds = message.diskIds.map((e) => e);
        }
        else {
            obj.diskIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateSnapshotScheduleRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.schedulePolicy =
            object.schedulePolicy !== undefined && object.schedulePolicy !== null
                ? snapshot_schedule_1.SchedulePolicy.fromPartial(object.schedulePolicy)
                : undefined;
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromPartial(object.retentionPeriod)
                : undefined;
        message.snapshotCount = (_e = object.snapshotCount) !== null && _e !== void 0 ? _e : undefined;
        message.snapshotSpec =
            object.snapshotSpec !== undefined && object.snapshotSpec !== null
                ? snapshot_schedule_1.SnapshotSpec.fromPartial(object.snapshotSpec)
                : undefined;
        message.diskIds = ((_f = object.diskIds) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSnapshotScheduleRequest.$type, exports.CreateSnapshotScheduleRequest);
const baseCreateSnapshotScheduleRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateSnapshotScheduleRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateSnapshotScheduleRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSnapshotScheduleRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSnapshotScheduleRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSnapshotScheduleRequest_LabelsEntry.$type, exports.CreateSnapshotScheduleRequest_LabelsEntry);
const baseCreateSnapshotScheduleMetadata = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleMetadata",
    snapshotScheduleId: "",
};
exports.CreateSnapshotScheduleMetadata = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotScheduleMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSnapshotScheduleMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateSnapshotScheduleMetadata);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateSnapshotScheduleMetadata);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSnapshotScheduleMetadata.$type, exports.CreateSnapshotScheduleMetadata);
const baseUpdateSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest",
    snapshotScheduleId: "",
    name: "",
    description: "",
};
exports.UpdateSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
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
            exports.UpdateSnapshotScheduleRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.schedulePolicy !== undefined) {
            snapshot_schedule_1.SchedulePolicy.encode(message.schedulePolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.retentionPeriod !== undefined) {
            duration_1.Duration.encode(message.retentionPeriod, writer.uint32(58).fork()).ldelim();
        }
        if (message.snapshotCount !== undefined) {
            writer.uint32(64).int64(message.snapshotCount);
        }
        if (message.snapshotSpec !== undefined) {
            snapshot_schedule_1.SnapshotSpec.encode(message.snapshotSpec, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSnapshotScheduleRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
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
                    const entry5 = exports.UpdateSnapshotScheduleRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.schedulePolicy = snapshot_schedule_1.SchedulePolicy.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.retentionPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.snapshotCount = longToNumber(reader.int64());
                    break;
                case 9:
                    message.snapshotSpec = snapshot_schedule_1.SnapshotSpec.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateSnapshotScheduleRequest);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
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
        message.schedulePolicy =
            object.schedulePolicy !== undefined && object.schedulePolicy !== null
                ? snapshot_schedule_1.SchedulePolicy.fromJSON(object.schedulePolicy)
                : undefined;
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromJSON(object.retentionPeriod)
                : undefined;
        message.snapshotCount =
            object.snapshotCount !== undefined && object.snapshotCount !== null
                ? Number(object.snapshotCount)
                : undefined;
        message.snapshotSpec =
            object.snapshotSpec !== undefined && object.snapshotSpec !== null
                ? snapshot_schedule_1.SnapshotSpec.fromJSON(object.snapshotSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
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
        message.schedulePolicy !== undefined &&
            (obj.schedulePolicy = message.schedulePolicy
                ? snapshot_schedule_1.SchedulePolicy.toJSON(message.schedulePolicy)
                : undefined);
        message.retentionPeriod !== undefined &&
            (obj.retentionPeriod = message.retentionPeriod
                ? duration_1.Duration.toJSON(message.retentionPeriod)
                : undefined);
        message.snapshotCount !== undefined &&
            (obj.snapshotCount = Math.round(message.snapshotCount));
        message.snapshotSpec !== undefined &&
            (obj.snapshotSpec = message.snapshotSpec
                ? snapshot_schedule_1.SnapshotSpec.toJSON(message.snapshotSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateSnapshotScheduleRequest);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
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
        message.schedulePolicy =
            object.schedulePolicy !== undefined && object.schedulePolicy !== null
                ? snapshot_schedule_1.SchedulePolicy.fromPartial(object.schedulePolicy)
                : undefined;
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromPartial(object.retentionPeriod)
                : undefined;
        message.snapshotCount = (_e = object.snapshotCount) !== null && _e !== void 0 ? _e : undefined;
        message.snapshotSpec =
            object.snapshotSpec !== undefined && object.snapshotSpec !== null
                ? snapshot_schedule_1.SnapshotSpec.fromPartial(object.snapshotSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSnapshotScheduleRequest.$type, exports.UpdateSnapshotScheduleRequest);
const baseUpdateSnapshotScheduleRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateSnapshotScheduleRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateSnapshotScheduleRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSnapshotScheduleRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSnapshotScheduleRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSnapshotScheduleRequest_LabelsEntry.$type, exports.UpdateSnapshotScheduleRequest_LabelsEntry);
const baseUpdateSnapshotScheduleMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleMetadata",
    snapshotScheduleId: "",
};
exports.UpdateSnapshotScheduleMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSnapshotScheduleMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateSnapshotScheduleMetadata);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateSnapshotScheduleMetadata);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSnapshotScheduleMetadata.$type, exports.UpdateSnapshotScheduleMetadata);
const baseDeleteSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleRequest",
    snapshotScheduleId: "",
};
exports.DeleteSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSnapshotScheduleRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSnapshotScheduleRequest);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSnapshotScheduleRequest);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSnapshotScheduleRequest.$type, exports.DeleteSnapshotScheduleRequest);
const baseDeleteSnapshotScheduleMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleMetadata",
    snapshotScheduleId: "",
};
exports.DeleteSnapshotScheduleMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotScheduleMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSnapshotScheduleMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSnapshotScheduleMetadata);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSnapshotScheduleMetadata);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSnapshotScheduleMetadata.$type, exports.DeleteSnapshotScheduleMetadata);
const baseDisableSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleRequest",
    snapshotScheduleId: "",
};
exports.DisableSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDisableSnapshotScheduleRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDisableSnapshotScheduleRequest);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDisableSnapshotScheduleRequest);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DisableSnapshotScheduleRequest.$type, exports.DisableSnapshotScheduleRequest);
const baseDisableSnapshotScheduleMetadata = {
    $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleMetadata",
    snapshotScheduleId: "",
};
exports.DisableSnapshotScheduleMetadata = {
    $type: "yandex.cloud.compute.v1.DisableSnapshotScheduleMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDisableSnapshotScheduleMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDisableSnapshotScheduleMetadata);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDisableSnapshotScheduleMetadata);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DisableSnapshotScheduleMetadata.$type, exports.DisableSnapshotScheduleMetadata);
const baseEnableSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleRequest",
    snapshotScheduleId: "",
};
exports.EnableSnapshotScheduleRequest = {
    $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnableSnapshotScheduleRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEnableSnapshotScheduleRequest);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseEnableSnapshotScheduleRequest);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EnableSnapshotScheduleRequest.$type, exports.EnableSnapshotScheduleRequest);
const baseEnableSnapshotScheduleMetadata = {
    $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleMetadata",
    snapshotScheduleId: "",
};
exports.EnableSnapshotScheduleMetadata = {
    $type: "yandex.cloud.compute.v1.EnableSnapshotScheduleMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnableSnapshotScheduleMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEnableSnapshotScheduleMetadata);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseEnableSnapshotScheduleMetadata);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EnableSnapshotScheduleMetadata.$type, exports.EnableSnapshotScheduleMetadata);
const baseListSnapshotScheduleOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsRequest",
    snapshotScheduleId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSnapshotScheduleOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
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
        const message = Object.assign({}, baseListSnapshotScheduleOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
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
        const message = Object.assign({}, baseListSnapshotScheduleOperationsRequest);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
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
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListSnapshotScheduleOperationsRequest);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotScheduleOperationsRequest.$type, exports.ListSnapshotScheduleOperationsRequest);
const baseListSnapshotScheduleOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsResponse",
    nextPageToken: "",
};
exports.ListSnapshotScheduleOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleOperationsResponse",
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
        const message = Object.assign({}, baseListSnapshotScheduleOperationsResponse);
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
        const message = Object.assign({}, baseListSnapshotScheduleOperationsResponse);
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
        const message = Object.assign({}, baseListSnapshotScheduleOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotScheduleOperationsResponse.$type, exports.ListSnapshotScheduleOperationsResponse);
const baseListSnapshotScheduleSnapshotsRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsRequest",
    snapshotScheduleId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSnapshotScheduleSnapshotsRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
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
        const message = Object.assign({}, baseListSnapshotScheduleSnapshotsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
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
        const message = Object.assign({}, baseListSnapshotScheduleSnapshotsRequest);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
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
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListSnapshotScheduleSnapshotsRequest);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotScheduleSnapshotsRequest.$type, exports.ListSnapshotScheduleSnapshotsRequest);
const baseListSnapshotScheduleSnapshotsResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsResponse",
    nextPageToken: "",
};
exports.ListSnapshotScheduleSnapshotsResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleSnapshotsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.snapshots) {
            snapshot_1.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListSnapshotScheduleSnapshotsResponse);
        message.snapshots = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(snapshot_1.Snapshot.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListSnapshotScheduleSnapshotsResponse);
        message.snapshots = ((_a = object.snapshots) !== null && _a !== void 0 ? _a : []).map((e) => snapshot_1.Snapshot.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map((e) => e ? snapshot_1.Snapshot.toJSON(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListSnapshotScheduleSnapshotsResponse);
        message.snapshots =
            ((_a = object.snapshots) === null || _a === void 0 ? void 0 : _a.map((e) => snapshot_1.Snapshot.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotScheduleSnapshotsResponse.$type, exports.ListSnapshotScheduleSnapshotsResponse);
const baseListSnapshotScheduleDisksRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksRequest",
    snapshotScheduleId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSnapshotScheduleDisksRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
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
        const message = Object.assign({}, baseListSnapshotScheduleDisksRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
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
        const message = Object.assign({}, baseListSnapshotScheduleDisksRequest);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
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
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListSnapshotScheduleDisksRequest);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotScheduleDisksRequest.$type, exports.ListSnapshotScheduleDisksRequest);
const baseListSnapshotScheduleDisksResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksResponse",
    nextPageToken: "",
};
exports.ListSnapshotScheduleDisksResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotScheduleDisksResponse",
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
        const message = Object.assign({}, baseListSnapshotScheduleDisksResponse);
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
        const message = Object.assign({}, baseListSnapshotScheduleDisksResponse);
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
        const message = Object.assign({}, baseListSnapshotScheduleDisksResponse);
        message.disks = ((_a = object.disks) === null || _a === void 0 ? void 0 : _a.map((e) => disk_1.Disk.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotScheduleDisksResponse.$type, exports.ListSnapshotScheduleDisksResponse);
const baseUpdateSnapshotScheduleDisksRequest = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksRequest",
    snapshotScheduleId: "",
    remove: "",
    add: "",
};
exports.UpdateSnapshotScheduleDisksRequest = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
        }
        for (const v of message.remove) {
            writer.uint32(18).string(v);
        }
        for (const v of message.add) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSnapshotScheduleDisksRequest);
        message.remove = [];
        message.add = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
                    break;
                case 2:
                    message.remove.push(reader.string());
                    break;
                case 3:
                    message.add.push(reader.string());
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
        const message = Object.assign({}, baseUpdateSnapshotScheduleDisksRequest);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
                : "";
        message.remove = ((_a = object.remove) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.add = ((_b = object.add) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        if (message.remove) {
            obj.remove = message.remove.map((e) => e);
        }
        else {
            obj.remove = [];
        }
        if (message.add) {
            obj.add = message.add.map((e) => e);
        }
        else {
            obj.add = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateSnapshotScheduleDisksRequest);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        message.remove = ((_b = object.remove) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.add = ((_c = object.add) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSnapshotScheduleDisksRequest.$type, exports.UpdateSnapshotScheduleDisksRequest);
const baseUpdateSnapshotScheduleDisksMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksMetadata",
    snapshotScheduleId: "",
};
exports.UpdateSnapshotScheduleDisksMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotScheduleDisksMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotScheduleId !== "") {
            writer.uint32(10).string(message.snapshotScheduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSnapshotScheduleDisksMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotScheduleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateSnapshotScheduleDisksMetadata);
        message.snapshotScheduleId =
            object.snapshotScheduleId !== undefined &&
                object.snapshotScheduleId !== null
                ? String(object.snapshotScheduleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotScheduleId !== undefined &&
            (obj.snapshotScheduleId = message.snapshotScheduleId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateSnapshotScheduleDisksMetadata);
        message.snapshotScheduleId = (_a = object.snapshotScheduleId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSnapshotScheduleDisksMetadata.$type, exports.UpdateSnapshotScheduleDisksMetadata);
/** A set of methods for managing snapshot schedules. */
exports.SnapshotScheduleServiceService = {
    /**
     * Returns the specified snapshot schedule.
     *
     * To get the list of available snapshot schedules, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSnapshotScheduleRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSnapshotScheduleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(snapshot_schedule_1.SnapshotSchedule.encode(value).finish()),
        responseDeserialize: (value) => snapshot_schedule_1.SnapshotSchedule.decode(value),
    },
    /** Retrieves the list of snapshot schedules in the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.SnapshotScheduleService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSnapshotSchedulesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSnapshotSchedulesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSnapshotSchedulesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSnapshotSchedulesResponse.decode(value),
    },
    /** Creates a snapshot schedule in the specified folder. */
    create: {
        path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSnapshotScheduleRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSnapshotScheduleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified snapshot schedule.
     *
     * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    update: {
        path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSnapshotScheduleRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSnapshotScheduleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified snapshot schedule.
     *
     * Deleting a snapshot schedule removes its data permanently and is irreversible. However, deleting a schedule
     * does not delete any snapshots created by the schedule. You must delete snapshots separately.
     *
     * The schedule is deleted only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    delete: {
        path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSnapshotScheduleRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSnapshotScheduleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the list of disks attached to the specified schedule.
     *
     * The schedule is updated only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    updateDisks: {
        path: "/yandex.cloud.compute.v1.SnapshotScheduleService/UpdateDisks",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSnapshotScheduleDisksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSnapshotScheduleDisksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Disables the specified snapshot schedule.
     *
     * The [SnapshotSchedule.status] is changed to `INACTIVE`: the schedule is interrupted, snapshots won't be created
     * or deleted.
     *
     * The schedule is disabled only after all snapshot creations and deletions triggered by the schedule are completed.
     */
    disable: {
        path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Disable",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DisableSnapshotScheduleRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DisableSnapshotScheduleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Enables the specified snapshot schedule.
     *
     * The [SnapshotSchedule.status] is changed to `ACTIVE`: new disk snapshots will be created, old ones deleted
     * (if [SnapshotSchedule.retention_policy] is specified).
     */
    enable: {
        path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Enable",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.EnableSnapshotScheduleRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.EnableSnapshotScheduleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified snapshot schedule. */
    listOperations: {
        path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSnapshotScheduleOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSnapshotScheduleOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSnapshotScheduleOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSnapshotScheduleOperationsResponse.decode(value),
    },
    /** Retrieves the list of snapshots created by the specified snapshot schedule. */
    listSnapshots: {
        path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListSnapshots",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSnapshotScheduleSnapshotsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSnapshotScheduleSnapshotsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSnapshotScheduleSnapshotsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSnapshotScheduleSnapshotsResponse.decode(value),
    },
    /** Retrieves the list of disks attached to the specified snapshot schedule. */
    listDisks: {
        path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListDisks",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSnapshotScheduleDisksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSnapshotScheduleDisksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSnapshotScheduleDisksResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSnapshotScheduleDisksResponse.decode(value),
    },
};
exports.SnapshotScheduleServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SnapshotScheduleServiceService, "yandex.cloud.compute.v1.SnapshotScheduleService");
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
