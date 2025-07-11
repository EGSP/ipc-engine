"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetGroupServiceClient = exports.TargetGroupServiceService = exports.ListTargetGroupOperationsResponse = exports.ListTargetGroupOperationsRequest = exports.RemoveTargetsMetadata = exports.RemoveTargetsRequest = exports.AddTargetsMetadata = exports.AddTargetsRequest = exports.DeleteTargetGroupMetadata = exports.DeleteTargetGroupRequest = exports.UpdateTargetGroupMetadata = exports.UpdateTargetGroupRequest_LabelsEntry = exports.UpdateTargetGroupRequest = exports.CreateTargetGroupMetadata = exports.CreateTargetGroupRequest_LabelsEntry = exports.CreateTargetGroupRequest = exports.ListTargetGroupsResponse = exports.ListTargetGroupsRequest = exports.GetTargetGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const target_group_1 = require("../../../../yandex/cloud/loadbalancer/v1/target_group");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.loadbalancer.v1";
const baseGetTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.GetTargetGroupRequest",
    targetGroupId: "",
};
exports.GetTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.GetTargetGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetTargetGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetTargetGroupRequest);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetTargetGroupRequest);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetTargetGroupRequest.$type, exports.GetTargetGroupRequest);
const baseListTargetGroupsRequest = {
    $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListTargetGroupsRequest = {
    $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsRequest",
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
        const message = Object.assign({}, baseListTargetGroupsRequest);
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
        const message = Object.assign({}, baseListTargetGroupsRequest);
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
        const message = Object.assign({}, baseListTargetGroupsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTargetGroupsRequest.$type, exports.ListTargetGroupsRequest);
const baseListTargetGroupsResponse = {
    $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsResponse",
    nextPageToken: "",
};
exports.ListTargetGroupsResponse = {
    $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.targetGroups) {
            target_group_1.TargetGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListTargetGroupsResponse);
        message.targetGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroups.push(target_group_1.TargetGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListTargetGroupsResponse);
        message.targetGroups = ((_a = object.targetGroups) !== null && _a !== void 0 ? _a : []).map((e) => target_group_1.TargetGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.targetGroups) {
            obj.targetGroups = message.targetGroups.map((e) => e ? target_group_1.TargetGroup.toJSON(e) : undefined);
        }
        else {
            obj.targetGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListTargetGroupsResponse);
        message.targetGroups =
            ((_a = object.targetGroups) === null || _a === void 0 ? void 0 : _a.map((e) => target_group_1.TargetGroup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTargetGroupsResponse.$type, exports.ListTargetGroupsResponse);
const baseCreateTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest",
    folderId: "",
    name: "",
    description: "",
    regionId: "",
};
exports.CreateTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest",
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
            exports.CreateTargetGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.regionId !== "") {
            writer.uint32(42).string(message.regionId);
        }
        for (const v of message.targets) {
            target_group_1.Target.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTargetGroupRequest);
        message.labels = {};
        message.targets = [];
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
                    const entry4 = exports.CreateTargetGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.regionId = reader.string();
                    break;
                case 7:
                    message.targets.push(target_group_1.Target.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseCreateTargetGroupRequest);
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
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : "";
        message.targets = ((_b = object.targets) !== null && _b !== void 0 ? _b : []).map((e) => target_group_1.Target.fromJSON(e));
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
        message.regionId !== undefined && (obj.regionId = message.regionId);
        if (message.targets) {
            obj.targets = message.targets.map((e) => e ? target_group_1.Target.toJSON(e) : undefined);
        }
        else {
            obj.targets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateTargetGroupRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.regionId = (_e = object.regionId) !== null && _e !== void 0 ? _e : "";
        message.targets = ((_f = object.targets) === null || _f === void 0 ? void 0 : _f.map((e) => target_group_1.Target.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTargetGroupRequest.$type, exports.CreateTargetGroupRequest);
const baseCreateTargetGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateTargetGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateTargetGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateTargetGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateTargetGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTargetGroupRequest_LabelsEntry.$type, exports.CreateTargetGroupRequest_LabelsEntry);
const baseCreateTargetGroupMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupMetadata",
    targetGroupId: "",
};
exports.CreateTargetGroupMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTargetGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateTargetGroupMetadata);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateTargetGroupMetadata);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTargetGroupMetadata.$type, exports.CreateTargetGroupMetadata);
const baseUpdateTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest",
    targetGroupId: "",
    name: "",
    description: "",
};
exports.UpdateTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
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
            exports.UpdateTargetGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.targets) {
            target_group_1.Target.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateTargetGroupRequest);
        message.labels = {};
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
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
                    const entry5 = exports.UpdateTargetGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.targets.push(target_group_1.Target.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateTargetGroupRequest);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
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
        message.targets = ((_b = object.targets) !== null && _b !== void 0 ? _b : []).map((e) => target_group_1.Target.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
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
        if (message.targets) {
            obj.targets = message.targets.map((e) => e ? target_group_1.Target.toJSON(e) : undefined);
        }
        else {
            obj.targets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateTargetGroupRequest);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
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
        message.targets = ((_e = object.targets) === null || _e === void 0 ? void 0 : _e.map((e) => target_group_1.Target.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTargetGroupRequest.$type, exports.UpdateTargetGroupRequest);
const baseUpdateTargetGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateTargetGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateTargetGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateTargetGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateTargetGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTargetGroupRequest_LabelsEntry.$type, exports.UpdateTargetGroupRequest_LabelsEntry);
const baseUpdateTargetGroupMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupMetadata",
    targetGroupId: "",
};
exports.UpdateTargetGroupMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateTargetGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateTargetGroupMetadata);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateTargetGroupMetadata);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTargetGroupMetadata.$type, exports.UpdateTargetGroupMetadata);
const baseDeleteTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupRequest",
    targetGroupId: "",
};
exports.DeleteTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteTargetGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteTargetGroupRequest);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteTargetGroupRequest);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteTargetGroupRequest.$type, exports.DeleteTargetGroupRequest);
const baseDeleteTargetGroupMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupMetadata",
    targetGroupId: "",
};
exports.DeleteTargetGroupMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteTargetGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteTargetGroupMetadata);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteTargetGroupMetadata);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteTargetGroupMetadata.$type, exports.DeleteTargetGroupMetadata);
const baseAddTargetsRequest = {
    $type: "yandex.cloud.loadbalancer.v1.AddTargetsRequest",
    targetGroupId: "",
};
exports.AddTargetsRequest = {
    $type: "yandex.cloud.loadbalancer.v1.AddTargetsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
        }
        for (const v of message.targets) {
            target_group_1.Target.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddTargetsRequest);
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                case 2:
                    message.targets.push(target_group_1.Target.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseAddTargetsRequest);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        message.targets = ((_a = object.targets) !== null && _a !== void 0 ? _a : []).map((e) => target_group_1.Target.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        if (message.targets) {
            obj.targets = message.targets.map((e) => e ? target_group_1.Target.toJSON(e) : undefined);
        }
        else {
            obj.targets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddTargetsRequest);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        message.targets = ((_b = object.targets) === null || _b === void 0 ? void 0 : _b.map((e) => target_group_1.Target.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddTargetsRequest.$type, exports.AddTargetsRequest);
const baseAddTargetsMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.AddTargetsMetadata",
    targetGroupId: "",
};
exports.AddTargetsMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.AddTargetsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddTargetsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddTargetsMetadata);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAddTargetsMetadata);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddTargetsMetadata.$type, exports.AddTargetsMetadata);
const baseRemoveTargetsRequest = {
    $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsRequest",
    targetGroupId: "",
};
exports.RemoveTargetsRequest = {
    $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
        }
        for (const v of message.targets) {
            target_group_1.Target.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveTargetsRequest);
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                case 2:
                    message.targets.push(target_group_1.Target.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseRemoveTargetsRequest);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        message.targets = ((_a = object.targets) !== null && _a !== void 0 ? _a : []).map((e) => target_group_1.Target.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        if (message.targets) {
            obj.targets = message.targets.map((e) => e ? target_group_1.Target.toJSON(e) : undefined);
        }
        else {
            obj.targets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRemoveTargetsRequest);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        message.targets = ((_b = object.targets) === null || _b === void 0 ? void 0 : _b.map((e) => target_group_1.Target.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveTargetsRequest.$type, exports.RemoveTargetsRequest);
const baseRemoveTargetsMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsMetadata",
    targetGroupId: "",
};
exports.RemoveTargetsMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveTargetsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveTargetsMetadata);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRemoveTargetsMetadata);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveTargetsMetadata.$type, exports.RemoveTargetsMetadata);
const baseListTargetGroupOperationsRequest = {
    $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsRequest",
    targetGroupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListTargetGroupOperationsRequest = {
    $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.targetGroupId !== "") {
            writer.uint32(10).string(message.targetGroupId);
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
        const message = Object.assign({}, baseListTargetGroupOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
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
        const message = Object.assign({}, baseListTargetGroupOperationsRequest);
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
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
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListTargetGroupOperationsRequest);
        message.targetGroupId = (_a = object.targetGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTargetGroupOperationsRequest.$type, exports.ListTargetGroupOperationsRequest);
const baseListTargetGroupOperationsResponse = {
    $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsResponse",
    nextPageToken: "",
};
exports.ListTargetGroupOperationsResponse = {
    $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsResponse",
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
        const message = Object.assign({}, baseListTargetGroupOperationsResponse);
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
        const message = Object.assign({}, baseListTargetGroupOperationsResponse);
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
        const message = Object.assign({}, baseListTargetGroupOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTargetGroupOperationsResponse.$type, exports.ListTargetGroupOperationsResponse);
/** A set of methods for managing TargetGroup resources. */
exports.TargetGroupServiceService = {
    /** Returns the specified TargetGroup resource. */
    get: {
        path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTargetGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(target_group_1.TargetGroup.encode(value).finish()),
        responseDeserialize: (value) => target_group_1.TargetGroup.decode(value),
    },
    /** Retrieves the list of TargetGroup resources in the specified folder. */
    list: {
        path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTargetGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTargetGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTargetGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTargetGroupsResponse.decode(value),
    },
    /** Creates a target group in the specified folder and adds the specified targets to it. */
    create: {
        path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateTargetGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified target group. */
    update: {
        path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateTargetGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified target group. */
    delete: {
        path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteTargetGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Adds targets to the target group. */
    addTargets: {
        path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/AddTargets",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddTargetsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddTargetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Removes targets from the target group. */
    removeTargets: {
        path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/RemoveTargets",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveTargetsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveTargetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified target group. */
    listOperations: {
        path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTargetGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTargetGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTargetGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTargetGroupOperationsResponse.decode(value),
    },
};
exports.TargetGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TargetGroupServiceService, "yandex.cloud.loadbalancer.v1.TargetGroupService");
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
