"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogGroupServiceClient = exports.LogGroupServiceService = exports.GetLogGroupStatsResponse = exports.ListOperationsResponse = exports.ListOperationsRequest = exports.ListResourcesResponse = exports.ListResourcesRequest = exports.DeleteLogGroupMetadata = exports.DeleteLogGroupRequest = exports.UpdateLogGroupMetadata = exports.UpdateLogGroupRequest_LabelsEntry = exports.UpdateLogGroupRequest = exports.CreateLogGroupMetadata = exports.CreateLogGroupRequest_LabelsEntry = exports.CreateLogGroupRequest = exports.ListLogGroupsResponse = exports.ListLogGroupsRequest = exports.GetLogGroupStatsRequest = exports.GetLogGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../google/protobuf/duration");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const log_group_1 = require("../../../../yandex/cloud/logging/v1/log_group");
const log_resource_1 = require("../../../../yandex/cloud/logging/v1/log_resource");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.logging.v1";
const baseGetLogGroupRequest = {
    $type: "yandex.cloud.logging.v1.GetLogGroupRequest",
    logGroupId: "",
};
exports.GetLogGroupRequest = {
    $type: "yandex.cloud.logging.v1.GetLogGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLogGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseGetLogGroupRequest);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetLogGroupRequest);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetLogGroupRequest.$type, exports.GetLogGroupRequest);
const baseGetLogGroupStatsRequest = {
    $type: "yandex.cloud.logging.v1.GetLogGroupStatsRequest",
    logGroupId: "",
};
exports.GetLogGroupStatsRequest = {
    $type: "yandex.cloud.logging.v1.GetLogGroupStatsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLogGroupStatsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseGetLogGroupStatsRequest);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetLogGroupStatsRequest);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetLogGroupStatsRequest.$type, exports.GetLogGroupStatsRequest);
const baseListLogGroupsRequest = {
    $type: "yandex.cloud.logging.v1.ListLogGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListLogGroupsRequest = {
    $type: "yandex.cloud.logging.v1.ListLogGroupsRequest",
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
        const message = Object.assign({}, baseListLogGroupsRequest);
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
        const message = Object.assign({}, baseListLogGroupsRequest);
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
        const message = Object.assign({}, baseListLogGroupsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListLogGroupsRequest.$type, exports.ListLogGroupsRequest);
const baseListLogGroupsResponse = {
    $type: "yandex.cloud.logging.v1.ListLogGroupsResponse",
    nextPageToken: "",
};
exports.ListLogGroupsResponse = {
    $type: "yandex.cloud.logging.v1.ListLogGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.groups) {
            log_group_1.LogGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListLogGroupsResponse);
        message.groups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(log_group_1.LogGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListLogGroupsResponse);
        message.groups = ((_a = object.groups) !== null && _a !== void 0 ? _a : []).map((e) => log_group_1.LogGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map((e) => e ? log_group_1.LogGroup.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListLogGroupsResponse);
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => log_group_1.LogGroup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListLogGroupsResponse.$type, exports.ListLogGroupsResponse);
const baseCreateLogGroupRequest = {
    $type: "yandex.cloud.logging.v1.CreateLogGroupRequest",
    folderId: "",
    name: "",
    description: "",
    dataStream: "",
};
exports.CreateLogGroupRequest = {
    $type: "yandex.cloud.logging.v1.CreateLogGroupRequest",
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
            exports.CreateLogGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.logging.v1.CreateLogGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.retentionPeriod !== undefined) {
            duration_1.Duration.encode(message.retentionPeriod, writer.uint32(42).fork()).ldelim();
        }
        if (message.dataStream !== "") {
            writer.uint32(50).string(message.dataStream);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateLogGroupRequest);
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
                    const entry4 = exports.CreateLogGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.retentionPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.dataStream = reader.string();
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
        const message = Object.assign({}, baseCreateLogGroupRequest);
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
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromJSON(object.retentionPeriod)
                : undefined;
        message.dataStream =
            object.dataStream !== undefined && object.dataStream !== null
                ? String(object.dataStream)
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
        message.retentionPeriod !== undefined &&
            (obj.retentionPeriod = message.retentionPeriod
                ? duration_1.Duration.toJSON(message.retentionPeriod)
                : undefined);
        message.dataStream !== undefined && (obj.dataStream = message.dataStream);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateLogGroupRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromPartial(object.retentionPeriod)
                : undefined;
        message.dataStream = (_e = object.dataStream) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateLogGroupRequest.$type, exports.CreateLogGroupRequest);
const baseCreateLogGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.CreateLogGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateLogGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.CreateLogGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateLogGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateLogGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateLogGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateLogGroupRequest_LabelsEntry.$type, exports.CreateLogGroupRequest_LabelsEntry);
const baseCreateLogGroupMetadata = {
    $type: "yandex.cloud.logging.v1.CreateLogGroupMetadata",
    logGroupId: "",
};
exports.CreateLogGroupMetadata = {
    $type: "yandex.cloud.logging.v1.CreateLogGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateLogGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseCreateLogGroupMetadata);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateLogGroupMetadata);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateLogGroupMetadata.$type, exports.CreateLogGroupMetadata);
const baseUpdateLogGroupRequest = {
    $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest",
    logGroupId: "",
    name: "",
    description: "",
    dataStream: "",
};
exports.UpdateLogGroupRequest = {
    $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
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
            exports.UpdateLogGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.retentionPeriod !== undefined) {
            duration_1.Duration.encode(message.retentionPeriod, writer.uint32(50).fork()).ldelim();
        }
        if (message.dataStream !== "") {
            writer.uint32(58).string(message.dataStream);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateLogGroupRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
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
                    const entry5 = exports.UpdateLogGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.retentionPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.dataStream = reader.string();
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
        const message = Object.assign({}, baseUpdateLogGroupRequest);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
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
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromJSON(object.retentionPeriod)
                : undefined;
        message.dataStream =
            object.dataStream !== undefined && object.dataStream !== null
                ? String(object.dataStream)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
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
        message.retentionPeriod !== undefined &&
            (obj.retentionPeriod = message.retentionPeriod
                ? duration_1.Duration.toJSON(message.retentionPeriod)
                : undefined);
        message.dataStream !== undefined && (obj.dataStream = message.dataStream);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateLogGroupRequest);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
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
        message.retentionPeriod =
            object.retentionPeriod !== undefined && object.retentionPeriod !== null
                ? duration_1.Duration.fromPartial(object.retentionPeriod)
                : undefined;
        message.dataStream = (_e = object.dataStream) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateLogGroupRequest.$type, exports.UpdateLogGroupRequest);
const baseUpdateLogGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateLogGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.UpdateLogGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateLogGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateLogGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateLogGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateLogGroupRequest_LabelsEntry.$type, exports.UpdateLogGroupRequest_LabelsEntry);
const baseUpdateLogGroupMetadata = {
    $type: "yandex.cloud.logging.v1.UpdateLogGroupMetadata",
    logGroupId: "",
};
exports.UpdateLogGroupMetadata = {
    $type: "yandex.cloud.logging.v1.UpdateLogGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateLogGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseUpdateLogGroupMetadata);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateLogGroupMetadata);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateLogGroupMetadata.$type, exports.UpdateLogGroupMetadata);
const baseDeleteLogGroupRequest = {
    $type: "yandex.cloud.logging.v1.DeleteLogGroupRequest",
    logGroupId: "",
};
exports.DeleteLogGroupRequest = {
    $type: "yandex.cloud.logging.v1.DeleteLogGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteLogGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseDeleteLogGroupRequest);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteLogGroupRequest);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteLogGroupRequest.$type, exports.DeleteLogGroupRequest);
const baseDeleteLogGroupMetadata = {
    $type: "yandex.cloud.logging.v1.DeleteLogGroupMetadata",
    logGroupId: "",
};
exports.DeleteLogGroupMetadata = {
    $type: "yandex.cloud.logging.v1.DeleteLogGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteLogGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseDeleteLogGroupMetadata);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteLogGroupMetadata);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteLogGroupMetadata.$type, exports.DeleteLogGroupMetadata);
const baseListResourcesRequest = {
    $type: "yandex.cloud.logging.v1.ListResourcesRequest",
    logGroupId: "",
    type: "",
};
exports.ListResourcesRequest = {
    $type: "yandex.cloud.logging.v1.ListResourcesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListResourcesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListResourcesRequest);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? String(object.type)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListResourcesRequest);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListResourcesRequest.$type, exports.ListResourcesRequest);
const baseListResourcesResponse = {
    $type: "yandex.cloud.logging.v1.ListResourcesResponse",
};
exports.ListResourcesResponse = {
    $type: "yandex.cloud.logging.v1.ListResourcesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resources) {
            log_resource_1.LogGroupResource.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListResourcesResponse);
        message.resources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(log_resource_1.LogGroupResource.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListResourcesResponse);
        message.resources = ((_a = object.resources) !== null && _a !== void 0 ? _a : []).map((e) => log_resource_1.LogGroupResource.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? log_resource_1.LogGroupResource.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListResourcesResponse);
        message.resources =
            ((_a = object.resources) === null || _a === void 0 ? void 0 : _a.map((e) => log_resource_1.LogGroupResource.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListResourcesResponse.$type, exports.ListResourcesResponse);
const baseListOperationsRequest = {
    $type: "yandex.cloud.logging.v1.ListOperationsRequest",
    logGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListOperationsRequest = {
    $type: "yandex.cloud.logging.v1.ListOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
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
        const message = Object.assign({}, baseListOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
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
        const message = Object.assign({}, baseListOperationsRequest);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
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
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListOperationsRequest);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOperationsRequest.$type, exports.ListOperationsRequest);
const baseListOperationsResponse = {
    $type: "yandex.cloud.logging.v1.ListOperationsResponse",
    nextPageToken: "",
};
exports.ListOperationsResponse = {
    $type: "yandex.cloud.logging.v1.ListOperationsResponse",
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
        const message = Object.assign({}, baseListOperationsResponse);
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
        const message = Object.assign({}, baseListOperationsResponse);
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
        const message = Object.assign({}, baseListOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOperationsResponse.$type, exports.ListOperationsResponse);
const baseGetLogGroupStatsResponse = {
    $type: "yandex.cloud.logging.v1.GetLogGroupStatsResponse",
    logGroupId: "",
    bytes: 0,
    records: 0,
};
exports.GetLogGroupStatsResponse = {
    $type: "yandex.cloud.logging.v1.GetLogGroupStatsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        if (message.bytes !== 0) {
            writer.uint32(16).int64(message.bytes);
        }
        if (message.records !== 0) {
            writer.uint32(24).int64(message.records);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLogGroupStatsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.bytes = longToNumber(reader.int64());
                    break;
                case 3:
                    message.records = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetLogGroupStatsResponse);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        message.bytes =
            object.bytes !== undefined && object.bytes !== null
                ? Number(object.bytes)
                : 0;
        message.records =
            object.records !== undefined && object.records !== null
                ? Number(object.records)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.bytes !== undefined && (obj.bytes = Math.round(message.bytes));
        message.records !== undefined &&
            (obj.records = Math.round(message.records));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGetLogGroupStatsResponse);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        message.bytes = (_b = object.bytes) !== null && _b !== void 0 ? _b : 0;
        message.records = (_c = object.records) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetLogGroupStatsResponse.$type, exports.GetLogGroupStatsResponse);
/** A set of methods for managing log groups. */
exports.LogGroupServiceService = {
    /**
     * Returns the specified log group.
     *
     * To get the list of all available log groups, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.logging.v1.LogGroupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetLogGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLogGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(log_group_1.LogGroup.encode(value).finish()),
        responseDeserialize: (value) => log_group_1.LogGroup.decode(value),
    },
    /** Returns stats for the specified log group. */
    stats: {
        path: "/yandex.cloud.logging.v1.LogGroupService/Stats",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetLogGroupStatsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLogGroupStatsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetLogGroupStatsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetLogGroupStatsResponse.decode(value),
    },
    /** Retrieves the list of log groups in the specified folder. */
    list: {
        path: "/yandex.cloud.logging.v1.LogGroupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListLogGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListLogGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListLogGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListLogGroupsResponse.decode(value),
    },
    /** Creates a log group in the specified folder. */
    create: {
        path: "/yandex.cloud.logging.v1.LogGroupService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateLogGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateLogGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified log group. */
    update: {
        path: "/yandex.cloud.logging.v1.LogGroupService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateLogGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateLogGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified log group. */
    delete: {
        path: "/yandex.cloud.logging.v1.LogGroupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteLogGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteLogGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the resources (type and IDs) in the specified log group. */
    listResources: {
        path: "/yandex.cloud.logging.v1.LogGroupService/ListResources",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListResourcesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListResourcesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListResourcesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListResourcesResponse.decode(value),
    },
    /** Lists operations for the specified log group. */
    listOperations: {
        path: "/yandex.cloud.logging.v1.LogGroupService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified log group. */
    listAccessBindings: {
        path: "/yandex.cloud.logging.v1.LogGroupService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified log group. */
    setAccessBindings: {
        path: "/yandex.cloud.logging.v1.LogGroupService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified log group. */
    updateAccessBindings: {
        path: "/yandex.cloud.logging.v1.LogGroupService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.LogGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LogGroupServiceService, "yandex.cloud.logging.v1.LogGroupService");
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
