"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotServiceClient = exports.SnapshotServiceService = exports.ListSnapshotOperationsResponse = exports.ListSnapshotOperationsRequest = exports.DeleteSnapshotMetadata = exports.DeleteSnapshotRequest = exports.UpdateSnapshotMetadata = exports.UpdateSnapshotRequest_LabelsEntry = exports.UpdateSnapshotRequest = exports.CreateSnapshotMetadata = exports.CreateSnapshotRequest_LabelsEntry = exports.CreateSnapshotRequest = exports.ListSnapshotsResponse = exports.ListSnapshotsRequest = exports.GetSnapshotRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const snapshot_1 = require("../../../../yandex/cloud/compute/v1/snapshot");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseGetSnapshotRequest = {
    $type: "yandex.cloud.compute.v1.GetSnapshotRequest",
    snapshotId: "",
};
exports.GetSnapshotRequest = {
    $type: "yandex.cloud.compute.v1.GetSnapshotRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== "") {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetSnapshotRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetSnapshotRequest);
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetSnapshotRequest);
        message.snapshotId = (_a = object.snapshotId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetSnapshotRequest.$type, exports.GetSnapshotRequest);
const baseListSnapshotsRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListSnapshotsRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotsRequest",
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
        const message = Object.assign({}, baseListSnapshotsRequest);
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
        const message = Object.assign({}, baseListSnapshotsRequest);
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
        const message = Object.assign({}, baseListSnapshotsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotsRequest.$type, exports.ListSnapshotsRequest);
const baseListSnapshotsResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotsResponse",
    nextPageToken: "",
};
exports.ListSnapshotsResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotsResponse",
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
        const message = Object.assign({}, baseListSnapshotsResponse);
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
        const message = Object.assign({}, baseListSnapshotsResponse);
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
        const message = Object.assign({}, baseListSnapshotsResponse);
        message.snapshots =
            ((_a = object.snapshots) === null || _a === void 0 ? void 0 : _a.map((e) => snapshot_1.Snapshot.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotsResponse.$type, exports.ListSnapshotsResponse);
const baseCreateSnapshotRequest = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotRequest",
    folderId: "",
    diskId: "",
    name: "",
    description: "",
};
exports.CreateSnapshotRequest = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.diskId !== "") {
            writer.uint32(18).string(message.diskId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateSnapshotRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.CreateSnapshotRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSnapshotRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.diskId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.CreateSnapshotRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
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
        const message = Object.assign({}, baseCreateSnapshotRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
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
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateSnapshotRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.diskId = (_b = object.diskId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSnapshotRequest.$type, exports.CreateSnapshotRequest);
const baseCreateSnapshotRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateSnapshotRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateSnapshotRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSnapshotRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSnapshotRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSnapshotRequest_LabelsEntry.$type, exports.CreateSnapshotRequest_LabelsEntry);
const baseCreateSnapshotMetadata = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotMetadata",
    snapshotId: "",
    diskId: "",
};
exports.CreateSnapshotMetadata = {
    $type: "yandex.cloud.compute.v1.CreateSnapshotMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== "") {
            writer.uint32(10).string(message.snapshotId);
        }
        if (message.diskId !== "") {
            writer.uint32(18).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSnapshotMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseCreateSnapshotMetadata);
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
                : "";
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateSnapshotMetadata);
        message.snapshotId = (_a = object.snapshotId) !== null && _a !== void 0 ? _a : "";
        message.diskId = (_b = object.diskId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSnapshotMetadata.$type, exports.CreateSnapshotMetadata);
const baseUpdateSnapshotRequest = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest",
    snapshotId: "",
    name: "",
    description: "",
};
exports.UpdateSnapshotRequest = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== "") {
            writer.uint32(10).string(message.snapshotId);
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
            exports.UpdateSnapshotRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSnapshotRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
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
                    const entry5 = exports.UpdateSnapshotRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateSnapshotRequest);
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
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
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
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
        const message = Object.assign({}, baseUpdateSnapshotRequest);
        message.snapshotId = (_a = object.snapshotId) !== null && _a !== void 0 ? _a : "";
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSnapshotRequest.$type, exports.UpdateSnapshotRequest);
const baseUpdateSnapshotRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateSnapshotRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateSnapshotRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSnapshotRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSnapshotRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSnapshotRequest_LabelsEntry.$type, exports.UpdateSnapshotRequest_LabelsEntry);
const baseUpdateSnapshotMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotMetadata",
    snapshotId: "",
};
exports.UpdateSnapshotMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== "") {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSnapshotMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateSnapshotMetadata);
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateSnapshotMetadata);
        message.snapshotId = (_a = object.snapshotId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSnapshotMetadata.$type, exports.UpdateSnapshotMetadata);
const baseDeleteSnapshotRequest = {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotRequest",
    snapshotId: "",
};
exports.DeleteSnapshotRequest = {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== "") {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSnapshotRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSnapshotRequest);
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSnapshotRequest);
        message.snapshotId = (_a = object.snapshotId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSnapshotRequest.$type, exports.DeleteSnapshotRequest);
const baseDeleteSnapshotMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotMetadata",
    snapshotId: "",
};
exports.DeleteSnapshotMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== "") {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSnapshotMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSnapshotMetadata);
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSnapshotMetadata);
        message.snapshotId = (_a = object.snapshotId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSnapshotMetadata.$type, exports.DeleteSnapshotMetadata);
const baseListSnapshotOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotOperationsRequest",
    snapshotId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSnapshotOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListSnapshotOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== "") {
            writer.uint32(10).string(message.snapshotId);
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
        const message = Object.assign({}, baseListSnapshotOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
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
        const message = Object.assign({}, baseListSnapshotOperationsRequest);
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
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
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListSnapshotOperationsRequest);
        message.snapshotId = (_a = object.snapshotId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotOperationsRequest.$type, exports.ListSnapshotOperationsRequest);
const baseListSnapshotOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotOperationsResponse",
    nextPageToken: "",
};
exports.ListSnapshotOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListSnapshotOperationsResponse",
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
        const message = Object.assign({}, baseListSnapshotOperationsResponse);
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
        const message = Object.assign({}, baseListSnapshotOperationsResponse);
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
        const message = Object.assign({}, baseListSnapshotOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSnapshotOperationsResponse.$type, exports.ListSnapshotOperationsResponse);
/** A set of methods for managing Snapshot resources. */
exports.SnapshotServiceService = {
    /**
     * Returns the specified Snapshot resource.
     *
     * To get the list of available Snapshot resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.compute.v1.SnapshotService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSnapshotRequest.decode(value),
        responseSerialize: (value) => Buffer.from(snapshot_1.Snapshot.encode(value).finish()),
        responseDeserialize: (value) => snapshot_1.Snapshot.decode(value),
    },
    /** Retrieves the list of Snapshot resources in the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.SnapshotService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSnapshotsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSnapshotsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSnapshotsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSnapshotsResponse.decode(value),
    },
    /** Creates a snapshot of the specified disk. */
    create: {
        path: "/yandex.cloud.compute.v1.SnapshotService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSnapshotRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified snapshot.
     *
     * Values of omitted parameters are not changed.
     */
    update: {
        path: "/yandex.cloud.compute.v1.SnapshotService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSnapshotRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified snapshot.
     *
     * Deleting a snapshot removes its data permanently and is irreversible.
     */
    delete: {
        path: "/yandex.cloud.compute.v1.SnapshotService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSnapshotRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified snapshot. */
    listOperations: {
        path: "/yandex.cloud.compute.v1.SnapshotService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSnapshotOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSnapshotOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSnapshotOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSnapshotOperationsResponse.decode(value),
    },
};
exports.SnapshotServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SnapshotServiceService, "yandex.cloud.compute.v1.SnapshotService");
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
